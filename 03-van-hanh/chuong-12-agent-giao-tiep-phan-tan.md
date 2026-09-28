# Chương 12 — Giao tiếp phân tán của Agent

Các chương 4 đến 6 đã trình bày một Agent đơn lẻ làm việc ra sao qua ba loại hợp đồng kỹ thuật task, thông tin và hành động: task luân chuyển thế nào, context và state biểu diễn ra sao, ý định hành động chuyển thành ảnh hưởng bên ngoài có kiểm soát ra sao. Những hợp đồng đó đều hàm ý một tiền đề — **các bên tham gia thực thi có thể liên lạc được với nhau.** Khi Agent đi từ một process đơn lẻ sang phân tán, chính tiền đề này trở thành đối tượng cần thiết kế.

Request–response, streaming push, message queue và event bus đều dùng được cho hệ thống Agent. Thay đổi về mặt thiết kế nằm ở chỗ: **cùng một task có thể gồm những bước chênh lệch rất lớn về thời lượng, trải qua nhiều lần kết nối và nhiều instance, và trải qua những khoảng chờ bên ngoài khá dài.** Vì vậy, phải kiểm tra thời hạn gọi, cách lấy kết quả và yêu cầu khôi phục theo từng đoạn, rồi mới chọn cách giao tiếp phù hợp.

Do đó, thứ chương này bàn **không phải nên dùng middleware nào**, mà là **việc lựa chọn ngữ nghĩa giao tiếp và hệ quả của nó.** Cả chương xoay quanh hai trục toạ độ: chia **bốn mặt phẳng giao tiếp** theo định danh của hai bên, và chia **bốn nấc ngữ nghĩa tương tác** theo mức ghép nối về thời gian và không gian. Giao của hai trục tạo thành một bản đồ lựa chọn, dùng để trả lời: một đoạn giao tiếp nào đó nên dùng ngữ nghĩa gì, state nên gửi ở đâu, và khi hỏng thì sẽ hỏng theo kiểu nào.

Chương này tập trung vào ngữ nghĩa giao tiếp, tương tác message và hợp đồng giao tiếp. Runtime và Sandbox quản instance cùng môi trường thực thi; chương lưu trữ trạng thái bàn về việc bền vững hoá state có thẩm quyền; chương task bất đồng bộ bàn về hàng đợi, kích hoạt và workflow; chương gateway bàn về policy ở lối vào; chương cộng tác bàn về trách nhiệm thành viên và việc chấp nhận thành quả. Tầng giao tiếp truyền request, event và tham chiếu đối tượng cho những cơ chế đó.

## 12.1 Vì sao ứng dụng AI-native cần thiết kế lại việc giao tiếp

### 12.1.1 Bốn giả định cần kiểm tra lại

Các ứng dụng thông thường tổ chức việc giao tiếp dịch vụ bằng gọi theo tầng, timeout và retry. Khi bước vào bối cảnh Agent, những cơ chế đó vẫn áp dụng được, nhưng phải kiểm tra lại bốn tiền đề.

*   **Thời lượng gọi có bị chặn trên không.** Một lần truy vấn tool có thể rất ngắn, nhưng một task gồm thăm dò, xử lý bên ngoài và phê duyệt thì có thể kéo rất dài. Timeout phải đặt theo từng lời gọi cụ thể; **task dài không thể chỉ dựa vào việc kéo dài cùng một request HTTP để gánh.**

*   **Phiên có phụ thuộc vào kết nối hiện tại không.** Một phiên có thể tồn tại xuyên nhiều lần kết nối; cùng một client cũng có thể truy vấn nhiều task chạy nền. **Phiên và task phải có định danh độc lập; kết nối chỉ là đường truyền dữ liệu hiện tại.** Sau khi node thay đổi, phải định vị lại task và vị trí subscription.

*   **Trong lúc chờ thì chiếm những tài nguyên nào.** Dịch vụ mạng vốn đã có nhiều thời gian chờ I/O; Agent lại thêm phần gọi model và con người can thiệp. I/O bất đồng bộ có thể giảm chiếm thread, chờ bền vững hoá có thể giải phóng thêm tài nguyên thực thi — nhưng chi phí về kết nối, bộ nhớ, môi trường được giữ lại và lưu trữ thì **vẫn phải đo riêng.**

*   **Endpoint giao tiếp có thay đổi không.** Việc co giãn instance, tiếp quản sự cố và dựng lại sandbox sẽ làm đổi địa chỉ vật lý. Với các task đòi hỏi thực thi liên tục, hợp đồng giao tiếp phải **tách định danh nghiệp vụ khỏi endpoint vật lý**, và định nghĩa cách định địa chỉ lại, truy vấn cùng bàn giao kết quả.

### 12.1.2 Một trục xuyên suốt: để state cần thiết tồn tại độc lập với kết nối

Chương này so sánh các cơ chế giao tiếp theo trục **state do ai lưu, và sau khi mất kết nối thì tiếp tục ra sao.** Cần phân biệt ba loại nội dung: trạng thái task nghiệp vụ, checkpoint thực thi, và message log cùng vị trí tiêu thụ. Chúng có thể liên kết với nhau, cũng có thể nằm trên cùng một hạ tầng, **nhưng không thay thế thẳng cho nhau.**

| Vị trí gánh | Nội dung thường gặp | Ảnh hưởng khi hỏng | Điều kiện khôi phục |
| --- | --- | --- | --- |
| Kết nối và bộ nhớ process | Phản hồi hiện tại, state gọi tạm thời | Sau khi mất kết nối hay process thoát, phần chưa bền vững hoá có thể mất | Truy vấn task bền vững hoặc phát lại lời gọi được phép retry |
| Kho state bên ngoài | Bản ghi task, checkpoint, tham chiếu kết quả | Phụ thuộc tính khả dụng của kho và tính nhất quán khi commit | Lấy state đáng tin theo định danh task, rồi tiếp tục theo hợp đồng khôi phục |
| Kênh message bền vững | Message, số thứ tự, vị trí xác nhận | Vượt thời hạn lưu hoặc mất vị trí tiêu thụ sẽ tạo ra khoảng trống | Đọc bù event trong phạm vi lưu giữ, khử trùng theo luật ứng dụng rồi cập nhật state |

*Bảng 12-1 — Vị trí gánh state và điều kiện khôi phục*

Kho state bên ngoài và kênh bền vững là hai năng lực **tổ hợp được.** Bảng task duy trì trạng thái nghiệp vụ hiện tại, còn kênh lưu các event tương tác; **chỉ khi dùng một hợp đồng event sourcing đầy đủ thì event log trong kênh mới trở thành nguồn thẩm quyền để dựng lại trạng thái nghiệp vụ.** Việc phát lại message **không tự động khôi phục process**, và cũng không tự động huỷ hay khử trùng các thao tác bên ngoài.

Bài báo FSE 2026 về RocketMQ-A2A bàn về giao tiếp Agent ở quy mô lớn bằng một luồng event phát lại được ở mức phiên. Loại nghiên cứu này dùng được để so sánh biểu hiện khi sự cố giữa state trong kết nối và kênh bền vững hoá, **nhưng kết quả benchmark phải được diễn giải kèm quy mô message, mức đồng thời, phần cứng và điều kiện tiêm lỗi — không suy thẳng ra giới hạn hiệu năng phổ quát của bản thân giao thức.** Các case liên quan sẽ được triển khai ở phần sau theo cơ chế giao tiếp của chúng.

## 12.2 Mô hình tham chiếu về paradigm giao tiếp

### 12.2.1 Bốn mặt phẳng giao tiếp

Trục toạ độ thứ nhất chia theo **định danh của hai bên giao tiếp.** Trục này quyết định **hợp đồng do ai định nghĩa**, và mức chuẩn hoá của một đoạn giao tiếp.

MCP, A2A và AG-UI lần lượt cung cấp năng lực giao thức cho việc tích hợp tool và context, tương tác giữa Agent, cùng event giao diện người dùng. Ngoài ba loại quan hệ đó, chương này thêm phần giao tiếp giữa các component phía server, tạo thành **bốn mặt phẳng giao tiếp** dùng cho phân tích. **Đây là cách phân loại của chương này, không phải một phân tầng chuẩn của ngành.**

Bốn mặt phẳng là: **mặt phẳng người–máy, mặt phẳng năng lực, mặt phẳng cộng tác và mặt phẳng nội bộ.** Giao thức chỉ cung cấp một phần hợp đồng; còn phần bền vững hoá, routing, uỷ quyền và khôi phục cụ thể thì bản hiện thực vẫn phải bù.

| Mặt phẳng | Hai bên giao tiếp | Tầng giao thức tương ứng | Cơ chế thường gặp | Mâu thuẫn cốt lõi |
| --- | --- | --- | --- | --- |
| Người–máy | Người dùng hoặc frontend ↔ Agent | AG-UI | Stream token tăng dần, giao thức stream phía frontend, hộp thư việc cần làm, phê duyệt human-in-the-loop | Cần thấy tăng dần và ngắt được bất cứ lúc nào, trong khi kết nối frontend là kém tin cậy nhất |
| Năng lực | Agent ↔ tool hoặc dữ liệu | MCP | Gọi tool, theo chiều dọc | Thời lượng tool phân hoá cực lớn: truy vấn mili-giây và task hàng phút dùng chung một giao thức |
| Cộng tác | Agent ↔ Agent | A2A | Uỷ nhiệm task, theo chiều ngang | Task vốn dĩ chạy dài, trong khi topology điểm-điểm khiến số tích hợp đôi một và quan hệ tin cậy tăng theo tổ hợp của số Agent |
| Nội bộ | Giữa các component phía server của Agent | Không có giao thức chuẩn | Message queue, event stream, RPC nội bộ | Chi phí metadata của lượng lớn kênh phiên và việc cô lập multi-tenant |

*Bảng 12-2 — Bốn mặt phẳng giao tiếp và mâu thuẫn cốt lõi của chúng*

Thêm mặt phẳng nội bộ là để nói rõ trách nhiệm giao tiếp giữa Harness, phía thực thi và dịch vụ state. Những liên kết nội bộ này có thể dùng RPC, message queue hay event stream, và phải thiết kế theo workload thực tế.

### 12.2.2 Bốn nấc ngữ nghĩa tương tác

Trục toạ độ thứ hai chia theo **mức ghép nối về thời gian và không gian.** Trục này quyết định **kiểu thất bại sẽ là gì.**

Bốn nấc dưới đây dùng để phân biệt cách trình bày interface và mức tách rời, **không phải các cấp trưởng thành.** Một hệ thống có thể dùng đồng thời nhiều nấc; interface lập trình phi chặn, output dạng stream và việc task nghiệp vụ chạy bất đồng bộ cũng phải phán định riêng.

| Nấc | Ngữ nghĩa | Ghép nối thời gian | Ghép nối không gian | Vị trí state | Giải quyết gì | Không giải quyết gì |
| --- | --- | --- | --- | --- | --- | --- |
| S1 Request–response | Một lần request lấy kết quả | Ghép nối trong thời gian phản hồi | Phụ thuộc endpoint tới được | State gọi tạm; có thể liên kết với bản ghi nghiệp vụ bền vững | Lời gọi ngắn và phản hồi trực tiếp | Không tự mang theo việc truy vấn task dài và nối tiếp event |
| S2 Streaming trong phạm vi request | Trả event dần dần trong một request | Stream hiện tại phụ thuộc kết nối | Phụ thuộc endpoint tới được | Stream hiện tại; cũng có thể liên kết task bền vững | Nhìn thấy tăng dần và phản hồi tiến độ | Chỉ có stream thì không bảo đảm bù đủ sau khi mất kết nối |
| S3 Task handle | Gửi rồi tra cứu hay subscribe theo định danh | Việc thực thi tách khỏi request đầu tiên | Phụ thuộc lối vào truy vấn task | Task bền vững và tham chiếu kết quả | Truy vấn task dài, lấy kết quả khi offline | Không tự động bảo đảm phát lại event hay khôi phục nghiệp vụ |
| S4 Kênh bền vững | Subscribe, xác nhận và đọc bù theo kênh | Sản xuất và tiêu thụ tách rời | Liên kết qua kênh logic | Message log và vị trí tiêu thụ | Push, cắt đỉnh, phát lại và quản trị kênh | Vẫn cần state ứng dụng, idempotent và cơ chế vận hành |

*Bảng 12-3 — Phổ bốn nấc ngữ nghĩa tương tác*

### 12.2.3 Khác biệt giữa streaming trong phạm vi request và task bất đồng bộ

Stream token và SSE nói lên **kết quả tới dần ra sao**, chứ không trực tiếp nói lên **task có tồn tại độc lập với kết nối hay không.** Một stream có thể chỉ là output của lời gọi hiện tại, mà cũng có thể subscribe một task nền đã được bền vững hoá. **Việc mất kết nối có dẫn tới huỷ thực thi hay không, có còn truy vấn được kết quả hay không — phải do hợp đồng dịch vụ nói rõ, chứ không suy ra từ hình thức truyền tải.**

Vì vậy cần kiểm tra riêng hai điều kiện: **có task handle độc lập với kết nối không**, và **có vị trí nối tiếp event không.** Cái trước hỗ trợ truy vấn trạng thái task sau này; cái sau hỗ trợ bù đủ event trong phạm vi lưu giữ. **Có task handle không nhất định có phát lại event đầy đủ; có số thứ tự event cũng không tự động bảo đảm trạng thái nghiệp vụ khôi phục được.**

MCP 2026-07-28 đã gỡ cơ chế nối tiếp SSE ở tầng truyền tải; sau khi stream đứt, các request mới vẫn cần ứng dụng xử lý tính idempotent nghiệp vụ. Còn A2A thì cho phép cập nhật dạng stream liên kết với một Task bền vững, và lấy trạng thái tiếp theo qua việc truy vấn task hay subscribe lại. Cả hai đều cho thấy: **kết thúc stream và kết thúc task nghiệp vụ là hai ranh giới khác nhau**, proxy và client phải xử lý theo version giao thức cùng năng lực của endpoint.

### 12.2.4 Giao của hai trục: các tổ hợp thường gặp

| Mặt phẳng | S1 | S2 | S3 | S4 |
| --- | --- | --- | --- | --- |
| Người–máy | Hỏi–đáp kiểu form | Stream token, giao thức stream phía frontend | Hộp thư và danh sách task | Nhiều đầu cuối cùng truy cập một phiên |
| Năng lực | Gọi tool | Nâng cấp thành stream trong request cho task cỡ giây | Extension MCP Tasks | Cần thêm hợp đồng kênh bền vững |
| Cộng tác | Trả về đồng bộ cho tương tác đơn giản | Message dạng stream của A2A | Task A2A cộng truy vấn trạng thái và push notification | Lưới Agent do message middleware gánh |
| Nội bộ | RPC nội bộ giữa component | Chuyển tiếp dạng stream giữa các component server | Bảng task cộng cơ chế nhận việc | Kênh theo phiên, event stream |

*Bảng 12-4 — Phân bố hiện tại của bốn mặt phẳng trên bốn nấc ngữ nghĩa*

Bảng này dùng để trình bày **những tổ hợp có thể dùng, chứ không đại diện cho thị phần hay một hiện thực mặc định bắt buộc.** Việc chọn phụ thuộc vào thời lượng task, yêu cầu về mất kết nối, năng lực endpoint và điều kiện vận hành.

### 12.2.5 Sáu yếu tố của một hợp đồng giao tiếp

Dù rơi vào nấc nào, một hợp đồng giao tiếp Agent dùng được cho production cũng phải trả lời sáu câu hỏi. Sáu mục này vừa là checklist thiết kế, vừa là thước đo để phán định một giao thức nào đó **"còn thiếu gì".**

*   **Định danh:** định danh của phiên, task, lượt, message cùng quan hệ trực thuộc giữa chúng. **Gắn thẳng định danh task làm định danh luồng message sẽ giới hạn việc chạy nền, cộng tác nhiều người và nối tiếp xuyên kênh** — hãy giữ riêng và ghi liên kết một cách tường minh.

*   **Thứ tự:** phạm vi cần bảo đảm thứ tự. Phạm vi này thường giới hạn được trong một task hay một phiên — trong một case tương tác giọng nói, phía request dùng định danh phiên làm partition key để bảo đảm thứ tự trong phiên, phía response cô lập theo phiên, và **cả hai đều không cam kết thứ tự toàn cục xuyên phiên.**

*   **Bảo đảm giao nhận:** chọn giữa at-least-once, at-most-once hay exactly-once, cùng khoá khử trùng đi kèm. Các kênh khác nhau trong cùng một hệ thống có thể dùng mức khác nhau.

*   **Điểm nối tiếp:** sau khi mất kết nối hay đổi node thì tiếp tục từ đâu. **Phải khai báo tách biệt với năng lực truy vấn task.**

*   **Vòng đời:** luật tạo, hết hạn và huỷ của kênh và task. Kênh tạm có thể tạo theo nhu cầu và đặt thời hạn lưu; trước khi thu hồi phải đối chiếu các task đang hoạt động, message chưa xác nhận và cửa sổ khôi phục cần thiết.

*   **Backpressure:** khi quá tải thì giảm tốc chứ không sập. Tín hiệu lỗi và rate limit của giao thức, retry của client, việc chấp nhận ở gateway và message queue đều tham gia; **phải nói rõ ranh giới kiểm soát luồng và tồn đọng của từng tầng.**

## 12.3 Giao tiếp đồng bộ và ranh giới của nó

Request–response phù hợp với những lời gọi có thời lượng thực thi và đường xử lý sự cố rõ ràng. Mục này giữ lại phần so sánh ưu thế và ranh giới của đồng bộ, và đưa việc phán định về từng chuỗi cụ thể: **có cần task handle độc lập không, có cần đọc bù event không, và sau khi đưa component bất đồng bộ vào thì có bù được chi phí tương ứng không.**

### 12.3.1 Bốn ưu thế kỹ thuật khó thay thế

**Đường kiểm soát trực tiếp.** Request–response tiện cho việc liên kết input, giá trị trả về và lỗi trong cùng một lời gọi. Lời gọi xuyên process vẫn có thể timeout, chạy trùng hay trả về kết quả chưa rõ — **không được vì dùng interface đồng bộ mà bỏ qua tính idempotent và truy vết.**

**Call stack trong process liên tục.** Ở đây cần phân biệt hai loại bối cảnh debug: **lời gọi đồng bộ trong process đơn máy** — bản thân call stack đã là context thất bại đầy đủ nhất; còn **lời gọi đồng bộ xuyên process** thì cũng gặp vấn đề truy vết phân tán, và ở tầng này nó **không hề dễ debug hơn bất đồng bộ.** Nhưng **trong những đoạn gọi không vượt ranh giới process**, đồng bộ giữ lại được phần thông tin debug mà phương án bất đồng bộ phải dựng lại bằng hạ tầng bổ sung (W3C Trace xuyên suốt, lan truyền traceID xuyên component).

**Độ phức tạp vận hành thấp.** Không đưa vào message queue, event stream hay bảng task thì cũng không có các kiểu thất bại mới như chính sách lưu giữ, consumer group, DLQ, bão gửi lại.

**Cấu trúc chi phí đơn giản hơn.** Lời gọi ngắn tránh được chi phí lưu trú message, lưu giữ và quản lý tiêu thụ. Việc có chiếm thread hay không thì tuỳ mô hình lập trình; còn chi phí chờ thực tế thì vẫn phải đo kèm kết nối, bộ nhớ, mức đồng thời và cách tính phí dịch vụ.

### 12.3.2 Đường request–response trong các giao thức

MCP hỗ trợ các lời gọi tool hoàn tất trực tiếp, và extension Tasks tuỳ chọn thì cung cấp task handle cho task dài. A2A cũng cho phép các tương tác đơn giản trả về thẳng một Message, hoặc tạo một Task truy vấn tiếp được; còn stream và push thì dùng theo năng lực mà endpoint khai báo. **Chọn lời gọi ngắn hay task nền phải dựa trên hợp đồng interface và nhu cầu của task, chứ không chỉ theo tên giao thức.**

Giao thức thường **không** định nghĩa một ngưỡng giây thống nhất cho mọi nghiệp vụ. Timeout gateway, ngân sách chờ của bên gọi, năng lực thực thi phía server và thời gian lưu kết quả đều phải thoả thuận khi tích hợp cụ thể. Phân công đầy đủ giữa MCP và A2A xem phần mặt phẳng năng lực và mặt phẳng cộng tác phía sau.

### 12.3.3 Ba căn cứ lựa chọn

Khi chọn request–response, hãy kiểm tra ba điều kiện: thời lượng thực thi, nhu cầu mở rộng và cách xử lý thất bại.

**Điều kiện một: lời gọi có hoàn tất trong thời hạn thoả thuận không.** Client, gateway và server phải phối hợp thời hạn kết nối, idle và tổng thời hạn. Nếu task chứa những khoảng chờ dài không dự đoán được thì **cần một đường truy vấn và khôi phục task độc lập, chứ không thể chỉ kéo dài timeout kết nối.**

**Điều kiện hai: chuỗi này có cần co giãn độc lập và cắt đỉnh không.** Dịch vụ đồng bộ cũng mở rộng độc lập được và đặt được circuit breaker, rate limit; còn hàng đợi message hay task thì tách thêm tốc độ sản xuất khỏi tốc độ tiêu thụ, cho phép tồn đọng và chạy theo dung lượng. Có đáng đưa vào hay không thì phải so tải đột biến, thời hạn chờ với chi phí lưu trữ, độ trễ và vận hành tăng thêm.

**Điều kiện ba: kết quả thất bại có xác nhận được không.** Interface đồng bộ cũng dùng được khoá idempotent và truy vấn trạng thái, **không phải chỉ có cách chạy lại từ đầu.** Với các thao tác ghi, tạo ticket…, sau khi request timeout thì phải đối chiếu kết quả; còn nếu task cần tiếp tục sau khi offline rồi lấy kết quả sau thì **phải phơi một định danh task bền vững.** Việc bất đồng bộ hoá cũng **không xoá được trách nhiệm xác nhận tác dụng phụ bên ngoài.**

Lời gọi ngắn và kiểm soát được thì dùng request–response; cần tiến độ liên tục thì thêm output dạng stream; cần tách thực thi khỏi kết nối thì thêm task handle; cần đọc bù message, cắt đỉnh và quản trị tiêu thụ thì mới đưa vào kênh bền vững. **Chỉ thêm cơ chế ở đúng những chuỗi thực sự cần.**

## 12.4 Ba hình thái của giao tiếp bất đồng bộ

### 12.4.1 Task handle

S3 dùng một định danh ổn định để bên gọi truy vấn trạng thái và kết quả task sau này. **Tính bền vững của kết quả, thời hạn lưu cho việc truy vấn và năng lực khôi phục sau sự cố thực thi phải do phía server cam kết riêng — không suy ra được chỉ vì nó trả về một Task ID.**

Tầng giao thức đang hội tụ về nấc này. MCP đưa cơ chế task vào ngày 25 tháng 11 năm 2025 dưới dạng tính năng thử nghiệm, rồi chuyển chính thức thành một extension vào ngày 28 tháng 7 năm 2026; phần thông báo thay đổi đi kèm cũng chuyển từ một endpoint HTTP riêng sang một luồng subscription duy nhất, bật tường minh theo loại thông báo. Ở tầng nền tảng managed cũng vậy: một dịch vụ Agent managed thiết kế Harness phi trạng thái, và sau khi instance sập thì instance mới dùng định danh phiên để đánh thức, kéo lịch sử event rồi chạy tiếp.

Task handle có thể kết hợp với polling, callback hay subscription. Polling phù hợp với các bối cảnh tích hợp đơn giản, tần suất kiểm soát được; callback và subscription giảm việc truy vấn lặp, nhưng phải xử lý mất thông báo, xác thực và retry. **Việc truy vấn kết quả luôn phải có luật lưu giữ và uỷ quyền rõ ràng.**

### 12.4.2 Hướng sự kiện

Hướng sự kiện kích hoạt xử lý tiếp theo dựa trên các thay đổi trạng thái đã xảy ra; còn message là vật mang để truyền lệnh hay sự kiện. Hướng sự kiện có thể kết hợp với event sourcing, CQRS…, **nhưng không đòi hỏi phải dùng đồng thời.** Việc đưa message middleware vào cũng **không tự động cho ra audit phát lại được hay khôi phục trạng thái nghiệp vụ.**

Bền vững hoá các thay đổi của phiên thành event có thứ tự giúp cho việc đọc bù và truy nguyên; còn nếu muốn dựng lại trạng thái nghiệp vụ từ event thì **bắt buộc phải ghi đầy đủ các thay đổi trạng thái, version và kết quả bên ngoài.** Hàng đợi chỉ dùng để thông báo thì có thể tiếp tục phối hợp với kho task có thẩm quyền, không cần gánh toàn bộ trạng thái nghiệp vụ.

### 12.4.3 Kênh bền vững

S4 cung cấp message bền vững, vị trí tiêu thụ và quản trị ở mức kênh; nó kết hợp được với mô hình task của S3. **Chữ "khôi phục" ở đây nghĩa là đọc bù message, không đồng nghĩa với việc thực thi nghiệp vụ tự động khôi phục.** Ngữ nghĩa tối thiểu của nó có thể quy thành bốn điều:

```text
Bốn ngữ nghĩa tối thiểu của kênh bền vững
├── Kênh có tên      Đặt tên kênh message bền vững trực tiếp theo định danh nghiệp vụ (phiên, người dùng, môi trường), như Topic/Queue
├── Điểm nối tiếp    (kênh, số thứ tự) tạo thành vị trí khôi phục được; sau khi mất kết nối thì nối từ vị trí xác nhận cuối
├── Giữ kết quả      Nội dung trong kênh đọc lại được trong thời hạn lưu, không mất vì consumer offline
└── Gửi lại phần chưa xác nhận   Gửi lại theo thoả thuận của bản hiện thực; consumer vẫn phải xử lý idempotent

```

Trên đây là danh sách năng lực mà chương này dùng để kiểm tra một kênh bền vững. **Các interface lõi của MCP hay A2A không thay thế được hợp đồng kênh này;** khi áp dụng thực tế, phải kiểm chứng tính bền vững của message, thời hạn lưu, subscription, xác nhận, gửi lại và quyền hạn — **không suy ra toàn bộ năng lực chỉ từ việc "đã dùng message queue".**

### 12.4.4 Danh sách cái giá của kiến trúc bất đồng bộ

**Bất đồng bộ không miễn phí.** Một mặt nó làm tăng số chặng trong chuỗi gọi, tăng độ trễ truyền tải, bền vững hoá và xếp hàng; mặt khác nó cũng đưa vào độ phức tạp kiến trúc và vận hành. Danh sách như sau:

| Cái giá | Biểu hiện cụ thể | Hành động kỹ thuật tương ứng |
| --- | --- | --- |
| Độ trễ mỗi chặng | Độ trễ thêm ở mỗi chặng phụ thuộc vào truyền tải, bền vững hoá và tình trạng xếp hàng | Đo cùng mục tiêu độ trễ đầu-cuối, đặc biệt chú ý tương tác thời gian thực |
| Yêu cầu idempotent | Gửi lại và phát lại đòi hỏi bước phải chạy lặp lại an toàn được | Định nghĩa khoá idempotent cho từng bước; trước khi khôi phục thì đối chiếu trạng thái hệ thống bên ngoài |
| Chính sách lưu giữ | Giữ quá lâu cho một lượng lớn phiên sẽ tốn thêm dung lượng và chi phí | Đặt thời gian lưu hợp lý dựa trên nhu cầu truy hồi sau thảm hoạ và audit |
| Lan truyền sự cố | Các cạnh orchestration không có timeout sẽ khuếch đại thất bại | Đặt thời hạn, trần retry và cách xử lý thất bại theo loại lời gọi hay loại chờ |
| Khoảng trống quan sát | Call stack không còn liên tục | Truy vết toàn chuỗi cộng với việc liên kết trace thống nhất |

*Bảng 12-5 — Cái giá của giao tiếp bất đồng bộ và hành động kỹ thuật tương ứng*

## 12.5 Mặt phẳng năng lực: Agent với tool bên ngoài

### 12.5.1 Bốn thế hệ tiến hoá của tầng truyền tải

Sự tiến hoá truyền tải của MCP cho thấy việc điều chỉnh trách nhiệm giữa phiên giao thức, metadata request và trạng thái nghiệp vụ. Bảng dưới chỉ liệt kê những thay đổi ảnh hưởng tới thiết kế giao tiếp trong chương này; phần proxy và kiểm chứng uỷ quyền cụ thể xem chương AI Gateway.

| Version | Hình thái truyền tải | Vị trí state | Cái giá chính |
| --- | --- | --- | --- |
| 2024-11-05 | JSON-RPC 2.0, stdio và HTTP cộng event stream hai endpoint | Kênh push thường trú ở mức phiên | Phải quản lý kết nối push từ server |
| 2025-03-26 | Streamable HTTP một endpoint | Header định danh phiên, định danh phát lại event tuỳ chọn | Sau load balancer cần sticky session hoặc kho phiên dùng chung |
| 2025-11-25 | Giữ phiên và handshake | Như trên | Lần đầu đưa vào cơ chế task thử nghiệm |
| 2026-07-28 | Lõi phi trạng thái | Metadata theo từng request cộng task handle tường minh ở tầng ứng dụng | Trách nhiệm phát lại chìm xuống tầng ứng dụng |

*Bảng 12-6 — Ngữ nghĩa giao tiếp và vị trí state của bốn thế hệ truyền tải MCP*

Bản 2025-11-25 lần đầu đưa Tasks vào ở dạng thử nghiệm; bản 2026-07-28 chuyển nó thành extension chính thức tuỳ chọn. **Lõi truyền tải và extension task được thoả thuận và kiểm chứng riêng; không được coi năng lực của extension là bảo đảm mặc định của mọi endpoint MCP.**

### 12.5.2 Nguyên nhân gốc của việc phi trạng thái hoá và việc tái cấu trúc lời gọi ngược

Bản 2026-07-28 gỡ bỏ định danh phiên và handshake khởi tạo của giao thức, khiến request mang theo metadata về version và năng lực. Các bản hiện thực trước đây vốn phụ thuộc phiên thì có thể mở rộng bằng affinity hay state dùng chung, nhưng phải quản lý thêm kết nối và phiên; cơ chế mới giảm bớt phần ràng buộc giao thức đó, **còn trạng thái nghiệp vụ thì vẫn phải tổ chức tường minh.**

Bản mới dùng metadata theo từng request và cung cấp khám phá theo nhu cầu qua `server/discover`. Các request không phụ thuộc phiên thì dễ phân bổ sang instance khác nhau hơn; **còn có dùng thẳng được load balancing kiểu round-robin hay không thì vẫn tuỳ vào trạng thái nghiệp vụ của tool, quyền sở hữu tài nguyên và hợp đồng bền vững hoá.**

Lời gọi ngược dùng nhiều lượt request qua lại: server trả về kết quả cần input, client mang input tương ứng rồi request lần nữa. Thông báo thay đổi từ server thì subscribe theo loại qua `subscriptions/listen` — **không được diễn giải "lõi phi trạng thái" thành "không có kết nối thông báo liên tục".** Các năng lực như Roots, Sampling và Logging đi vào quy trình deprecation; cửa sổ tương thích cụ thể thì kiểm chứng theo trạng thái tính năng, SDK và version triển khai.

### 12.5.3 Giao thức phi trạng thái không đồng nghĩa với ứng dụng phi trạng thái

**Đây là điểm dễ bị hiểu sai nhất trong mục này.** Việc giao thức từ bỏ gánh state không có nghĩa state biến mất, mà có nghĩa **trách nhiệm về state chuyển sang các handle tường minh ở tầng ứng dụng**, và ứng dụng chọn backend bền vững hoá. Sau khi một task cỡ phút trả về task handle, trạng thái task nằm trong dịch vụ backend do ứng dụng tự chọn, và các instance khác nhau dựa vào handle để khôi phục.

Doanh nghiệp vẫn phải làm rõ luật retry cho lời gọi thất bại, việc lưu giữ task và cách lấy kết quả. **Nối tiếp ở tầng truyền tải và khôi phục ở tầng ứng dụng là hai trách nhiệm khác nhau:** lõi truyền tải bản mới không cung cấp phần phát lại SSE như trước, nên khi gửi lại lời gọi phải xử lý idempotent và kết quả chưa rõ; còn extension Tasks tuỳ chọn thì lấy kết quả theo hợp đồng trạng thái và lưu giữ của nó.

## 12.6 Mặt phẳng cộng tác: Agent với Agent

### 12.6.1 Ưu tiên bất đồng bộ và vòng đời task

Định hướng thiết kế của A2A được nêu thẳng trong các nguyên tắc chỉ đạo của quy chuẩn: **thiết kế cho những task có thể chạy rất lâu và cho tương tác human-in-the-loop.** Định hướng đó quyết định rằng đơn vị công việc cốt lõi của mặt phẳng cộng tác **không phải một lần gọi hàm dùng một lần, mà là một task có state, chạy dài được.**

Mô hình task của A2A gồm các trạng thái đã gửi, đang chạy, cần input, cần uỷ quyền, cùng hoàn thành, thất bại, huỷ, từ chối. Các tương tác đơn giản cũng có thể trả về thẳng một Message mà không tạo Task; còn khi tạo Task thì sản phẩm được liên kết qua Artifact của nó. Việc lưu giữ trạng thái và kết quả task do hợp đồng phía server ràng buộc, **không phụ thuộc vào kết nối output hiện tại.**

### 12.6.2 Hai cơ chế bất đồng bộ và sự phân công của chúng

A2A cung cấp hai cơ chế, thuộc hai nấc khác nhau; **dùng lẫn sẽ khiến ngữ nghĩa khôi phục không rõ.**

**Interface message dạng stream thuộc S2:** body phản hồi HTTP chính là luồng event, phạm vi tác dụng giới hạn trong một request, stream xong là đứt. Nó phù hợp để thấy tiến độ trong lúc task chạy, **không phù hợp làm bảo đảm duy nhất cho việc kết quả đã tới nơi.**

**Push notification thuộc phần tăng cường thông báo của S3:** khi gửi task thì mang theo cấu hình callback, và server callback khi trạng thái đổi. Quy chuẩn định nghĩa payload push đồng dạng với event stream — có thể là một đối tượng task đầy đủ, mà cũng có thể chỉ là một bản cập nhật trạng thái; còn cách làm mà quy chuẩn đưa ra cho client là **sau khi nhận thông báo thì gọi truy vấn theo định danh task để kéo về kết quả đầy đủ.** Nghĩa là **vai trò của push notification là một trigger "đi kéo về", còn tính địa chỉ hoá của kết quả thì vẫn do việc truy vấn task bảo đảm.**

Có thể tổ hợp cập nhật dạng stream, push và truy vấn task theo năng lực: stream dùng để thấy quá trình hiện tại, push dùng để nhắc có thay đổi, truy vấn dùng để lấy trạng thái và kết quả task truy cập được. **Không nhất thiết phải bật cả ba;** ví dụ polling cũng dùng độc lập được. Điểm mấu chốt là **sau khi mất kết nối vẫn phải có một đường lấy kết quả rõ ràng.**

### 12.6.3 Vì sao hai giao thức đi theo hai hướng ngược nhau

Việc MCP làm yếu state phiên còn A2A làm mạnh vòng đời task dễ bị diễn giải thành cuộc tranh cãi đúng-sai về đường lối. Nguyên nhân thực sự nằm ở **chính hình thái giao tiếp.**

MCP lấy việc truy cập tool, resource và prompt làm đối tượng chính; việc hội tụ phiên giao thức có lợi cho việc phân bổ request giữa các instance; còn trạng thái nghiệp vụ xuyên lời gọi thì liên kết qua handle tường minh hay kho của ứng dụng.

A2A hướng tới việc bàn giao giữa các Agent, dùng Task, Message và Artifact để biểu đạt cộng tác. Task dài cần một vòng đời truy vấn được; còn thông báo và stream thì cung cấp những đường cập nhật khác nhau. **Giao thức giao tiếp lo phần liên thông; còn trách nhiệm nghiệp vụ và nghiệm thu cuối thì vẫn do hệ cộng tác xác định.**

| Chiều | MCP | A2A |
| --- | --- | --- |
| Hướng | Dọc, Agent tới tool và dữ liệu | Ngang, Agent tới Agent |
| Kiến trúc | Host – client – server | Điểm-điểm |
| Đơn vị lõi | Lời gọi tool, thao tác một lần | Task, workflow có state |
| Khám phá năng lực | Interface khám phá theo nhu cầu (từ 2026-07-28) | Agent Card công bố trước, hỗ trợ chữ ký |
| Quản lý state | Lõi phi trạng thái, state đẩy lên tầng ứng dụng | State machine vòng đời task đầy đủ |
| Ràng buộc truyền tải | Streamable HTTP | Ba ràng buộc: JSON-RPC, gRPC, REST |
| Hướng tiến hoá | Làm yếu state phiên | Làm mạnh task |

*Bảng 12-7 — Đối chiếu định vị của MCP và A2A*

Hai thứ có thể kết hợp: Agent orchestration uỷ nhiệm công việc qua A2A, còn Agent chuyên môn thì gọi tool qua MCP. **Việc lựa chọn phụ thuộc vào thứ cần biểu đạt là một lời gọi năng lực hay một lần bàn giao task liên tục — không nên chia đường lối cho cả ứng dụng theo kiểu "có state" và "phi trạng thái".**

## 12.7 Mặt phẳng nội bộ: kênh phiên và tách "não" khỏi "tay"

Giao tiếp nội bộ phía server cần xử lý hai lựa chọn: **tổ chức message của các phiên đồng thời ra sao**, và **nối vòng lặp quyết định với việc thực thi tool ra sao.** Cái trước ảnh hưởng tới việc định địa chỉ và quản trị tiêu thụ; cái sau ảnh hưởng tới co giãn tài nguyên và cô lập sự cố. Mục này giữ lại các case về kênh phiên và việc tách quyết định khỏi thực thi, tập trung nói về trách nhiệm ở phía giao tiếp.

### 12.7.1 Kênh phiên: đưa trạng thái phiên vào trong kênh

Một cách làm là cung cấp cho mỗi phiên hay mỗi task một kênh logic độc lập, rồi gửi, subscribe và ghi vị trí tiêu thụ theo định danh nghiệp vụ. Sau khi mất kết nối có đọc bù được hay không thì tuỳ thời hạn lưu, subscription và hợp đồng xác nhận; còn trạng thái task thì vẫn do kho tương ứng hoặc một event log đầy đủ duy trì.

Căn cứ thiết kế tái dùng được nhất của mô hình này là: **khoá kênh ảnh hưởng tới độ hạt quản trị.** Kênh được đặt tên theo định danh nghiệp vụ nào thì việc cô lập, giới hạn tốc độ, quan sát và thu hồi sẽ diễn ra ở đúng độ hạt đó. Hai case công khai đưa ra hai loại khoá kênh.

**Lấy định danh phiên làm khoá kênh: request giữ thứ tự cộng response cô lập.** Trong một bối cảnh tương tác giọng nói thông minh có mức đồng thời cao, chuỗi liên kết xuyên client, gateway, hệ xử lý nghiệp vụ và các dịch vụ model, nhận dạng giọng nói, tổng hợp giọng nói; trong đó từ client tới gateway và từ hệ xử lý nghiệp vụ tới model đều duy trì long connection. Bốn thách thức nguyên sinh của bối cảnh này là: **routing chính xác với session stickiness trên toàn chuỗi** (trong môi trường phân tán, việc duy trì bảng ánh xạ động từ định danh phiên tới node vật lý vốn đã phức tạp; khi node mở rộng, restart hay mạng dao động thì độ trễ đồng bộ bảng route rất dễ khiến message tới nhầm node), **đẩy ngược kết quả bất đồng bộ của model một cách chính xác và thời gian thực**, **bùng nổ metadata do lượng lớn kênh tạm**, và **thiếu cơ chế quản lý tự động vòng đời phiên.**

Phương án xử lý hai phía riêng: phía request ghi các gói audio đã chia mảnh vào một topic có thứ tự theo partition, với định danh phiên làm partition key, bảo đảm message trong cùng phiên được xử lý có thứ tự; phía response thì **lấy thẳng định danh phiên làm tên kênh**, mỗi node ứng dụng chỉ subscribe tập kênh liên quan tới node đó, xoá subscription động khi mất kết nối, thêm động khi có phiên mới, và subscribe lại khi node restart để bảo đảm tính liên tục của nội dung phiên.

Ba lợi ích mà phương án này báo cáo tương ứng đúng với trục chính ở mục 12.1.2: **tính liên tục của các phiên kéo dài** (trong phạm vi lưu kênh và thời hạn hiệu lực của task, phản hồi route được tới đúng node gateway mà người dùng đang kết nối); **kiến trúc ứng dụng phi trạng thái hơn nữa** — logic routing chìm xuống tầng message middleware, code nghiệp vụ chỉ cần gửi và nhận message quanh định danh phiên, và node ứng dụng tiến gần hơn tới một đơn vị tính toán phi trạng thái, không còn phụ thuộc mạnh vào bảng trạng thái kết nối cục bộ; cùng với việc **giảm chi phí token do retry vô ích.**

Cách làm về observability đáng được ghi riêng, vì nó là biểu hiện trực tiếp của việc quản trị ở mức kênh: cấu hình cảnh báo theo ngưỡng tồn đọng message của từng kênh; khi kích hoạt thì xem trên console danh sách các kênh tồn đọng cao nhất cùng địa chỉ consumer tương ứng, khiến việc định vị sự cố đi **từ rà soát toàn cục sang định vị theo kênh.**

![image](../assets/imgs/chapter-12/image-001.png)

**Lấy người dùng làm khoá kênh: kênh chính là đơn vị quản trị.** Cùng một nền tảng dịch vụ mô hình lớn đưa ra hai loại khoá kênh trong hai bối cảnh, nhưng dùng chung một tư tưởng — **chọn khoá kênh trên đơn vị đồng thời của nghiệp vụ, để kênh tự nhiên trở thành đơn vị quản trị.**

*Bối cảnh một: giới hạn tốc độ ở gateway.* Gateway của nền tảng Alibaba Cloud Bailian gánh lời gọi từ hàng triệu tenant tới hàng chục loại model; vài trăm nghìn tổ hợp "người dùng × model" chạy đồng thời là chuyện thường ngày; còn GPU phía sau là trần cứng và chu kỳ mở rộng dài. Vì vậy, giới hạn tốc độ không còn là câu hỏi nhị phân "chặn hay không chặn", mà là **"đút cho backend theo nhịp nào".** Nếu backend nhạy với đột biến thì phải giới hạn phần burst mà token bucket cho phép; còn leaky bucket trong process thì lúc đột biến sẽ dồn vài trăm nghìn request vào JVM của gateway cho tới khi OOM. Hành động then chốt của phương án là **đưa leaky bucket ra khỏi process**: gateway chỉ dùng cửa sổ cố định để đặt trần thô rồi ghi request vào kênh message; khoá kênh lấy tổ hợp "người dùng × model", để mỗi khách hàng có một kênh giới hạn riêng trên mỗi model; phía tiêu thụ thì subscribe topic cha bằng wildcard, và khi trúng giới hạn thì callback tiêu thụ trả về lệnh treo, server chỉ tạm dừng việc gửi cho kênh đó rồi tự khôi phục khi hết hạn. Cả chuỗi có thể quy thành: **"gateway quản trần cứng, mảng kênh quản nhịp, lệnh treo làm việc điều tốc hạt mịn".**

![image](../assets/imgs/chapter-12/image-002.png)

*Bối cảnh hai: trung tâm tài sản.* Trong trung tâm tài sản của Alibaba Cloud Bailian, hình ảnh và video mà người dùng sinh ra mặc định rơi vào thư mục tạm của object storage và bị dọn khi hết hạn; còn trung tâm tài sản lo việc lưu giữ lâu dài và tái dùng tài nguyên; chuỗi này gồm kiểm tra whitelist, kiểm tra an toàn nội dung và ghi vào database. Đơn vị đồng thời nghiệp vụ ở đây tự nhiên là **"người dùng"**: một người dùng sinh hàng loạt trong thời gian ngắn sẽ tạo ra đột biến, và những người dùng khác không nên bị vạ lây. Phương án là **message chỉ mang metadata và index object storage, không truyền bản thân file**; khoá kênh lấy "người dùng", kênh tạo theo nhu cầu và tự thu hồi theo TTL; còn consumer group dưới cùng topic cha thì subscribe mọi kênh người dùng bằng wildcard, nên phần tồn đọng hay bất thường của một người dùng chỉ ảnh hưởng tới kênh của chính họ, không chặn người khác.

![image](../assets/imgs/chapter-12/image-003.png)

Hai bối cảnh cho thấy kênh có thể gánh phần giới hạn tốc độ, subscription và tạm dừng theo người dùng hay theo phiên. Hàng đợi dùng chung cũng xử lý được việc cô lập qua partition, lập lịch công bằng hay quota ứng dụng, **nhưng cần cơ chế bổ sung.** Khi so sánh, hãy kiểm chứng số kênh đang hoạt động, mức tồn đọng trên mỗi kênh, tính công bằng khi tiêu thụ và chi phí quản lý — **chứ không suy năng lực cô lập thẳng từ tên hàng đợi.**

### 12.7.2 Tách quyết định khỏi thực thi ("tách não khỏi tay")

Lựa chọn cấu trúc thứ hai của mặt phẳng nội bộ là **tách vòng lặp quyết định và việc thực thi tool sang các process khác nhau, nối với nhau bằng kênh phiên.**

Nhu cầu tài nguyên của quyết định và thực thi có thể khác nhau: vòng lặp quyết định cần truy cập trạng thái task và chờ model, còn việc thực thi tool có thể cần tính toán đột biến hoặc mức cô lập mạnh hơn. Triển khai tách rời cho phép co giãn riêng, **nhưng tool không nhất thiết phi trạng thái, và process quyết định cũng không nhất thiết phải thường trú — cả hai bên đều phải nói rõ điều kiện khôi phục và giải phóng tài nguyên.**

Nhiều bản hiện thực độc lập đã hội tụ về cấu trúc này, với mức độ tách rời khác nhau.

**Anthropic Managed Agents** đưa ra câu trả lời ở mức tư tưởng và phân tầng; bài viết kỹ thuật của họ đặt thẳng tên cho việc này là **"tách bộ não khỏi đôi tay"** (Decoupling the brain from the hands). Điểm xuất phát là **sự lão hoá của harness**: thứ được mã hoá trong harness là các giả định về giới hạn của model hiện tại, và khi model nâng cấp thì những giả định đó đi từ tối ưu thành gánh nặng — ví dụ bài viết đưa ra là cơ chế reset context thêm vào cho "nỗi lo context" của một thế hệ model; khi hành vi đó biến mất ở thế hệ sau thì đoạn logic ấy thành phần thừa. Tương tự như việc hệ điều hành dùng hai trừu tượng process và file để gánh những chương trình chưa từng được hình dung, họ ảo hoá Agent thành ba trừu tượng: **phiên** là một event log dạng append-only, ghi lại mọi thứ đã xảy ra; **Harness** là vòng lặp gọi model và route lời gọi tool; **sandbox** là môi trường thực thi chạy code và sửa file.

Hợp đồng giao tiếp sau khi tách ba thứ có thể quy thành ba điều. **Thứ nhất, sandbox hạ xuống thành một tool thông thường**: dưới một interface thực thi thống nhất, container, MCP server và tool tự phát triển không khác nhau; vì vậy trong thiết kế này sandbox được mô hình hoá thành một "bàn tay", và thất bại của nó biểu hiện thành lỗi ở tầng tool chứ không phải phiên bị đứt; khi cần môi trường mới thì xin theo nhu cầu. **Thứ hai, Harness phi trạng thái**: instance mới dùng định danh phiên để đánh thức, kéo lịch sử event rồi chạy tiếp; các sự thật sinh ra trong lúc chạy thì ghi ngược vào phiên dưới dạng event — nên instance có thể bị thay bất cứ lúc nào. **Thứ ba, phiên không đồng nghĩa với cửa sổ context của model** — nén và cắt bớt là những quyết định không đảo ngược được về "bỏ cái gì", nên phía log thì giữ đầy đủ, còn việc lấy ra và biến đổi thì để Harness xử lý theo nhu cầu. Hướng mở rộng thu được từ đó được gọi là **"nhiều não, nhiều tay"**: não có thể mở rộng ngang, cũng có thể triển khai vào mạng riêng của khách hàng; còn tay thì có thể chuyển giao giữa các não. Anthropic tự gọi bộ này là **"meta-harness"**: không giữ lập trường về việc dùng harness cụ thể nào, chỉ chủ trương về ranh giới trừu tượng và interface. Cũng chính vì vậy, thứ họ công khai là các nguyên tắc phân tầng và lợi ích, **chứ không công khai chi tiết hiện thực ở mức kênh** — cách làm cụ thể ở tầng này thì xem case dưới đây.

**Qoder Cloud Agent** thì đưa cùng tư tưởng đó xuống tầng kênh, với một tham chiếu hiện thực chi tiết hơn; thiết kế của nó lấy **"tách não khỏi tay"** làm tư tưởng cốt lõi: phía quyết định (sản phẩm gọi là Agent Runtime) lo vòng lặp quyết định và đẩy state, còn mặt phẳng thực thi (Sandbox Worker) lo việc tính toán theo nhu cầu; ở giữa dùng bus message RocketMQ để gánh việc bàn giao bất đồng bộ. Kiến trúc được chẻ tường minh thành bốn tầng (nội dung chi tiết hơn có thể tham khảo khoá học công khai trên Geekbang, [Thực tiễn kỹ thuật của Qoder Cloud Agent](https://time.geekbang.org/course/detail/101180401-1004201?utm_campaign=geektime_search&utm_content=geektime_search&utm_medium=geektime_search&utm_source=geektime_search&utm_term=geektime_search)):

| Tầng | Vai trò | Trách nhiệm |
| --- | --- | --- |
| Não — Agent Runtime | Quyết định và đẩy tiến | Quyết định task tiếp theo làm gì; duy trì trạng thái Session và logic đẩy tiến; hỗ trợ multi-agent và chen ngang |
| Đường — MQ | Bàn giao bất đồng bộ | Gửi giữ thứ tự; có thứ tự trong Session, song song giữa các Session; gánh phần chờ và backpressure |
| Tay — Sandbox Worker | Tính toán theo nhu cầu | Tính xong đúng bước hiện tại; xong là giải phóng; Worker rảnh có thể nhận việc bất cứ lúc nào |
| Nền — Session State | Bền vững hoá sự thật | Để lại sự thật về việc nhận việc và kết quả; chống đỡ việc treo, khôi phục và phát lại |

*Bảng 12-8 — Các tầng trong kiến trúc tách não–tay của Qoder Cloud Agent*

Phía quyết định và phía thực thi được RocketMQ tách rời; bus message gánh ba loại thông tin: **lệnh task** (QCA tới Worker, tách rời bất đồng bộ, cắt đỉnh traffic), **event thực thi** (Worker tới QCA, có thứ tự trong task, hỗ trợ retry và dead letter, gửi trễ), và **work item bất đồng bộ** (route theo task hay môi trường, tiêu thụ co giãn). Trong đó, RocketMQ cung cấp kênh ở mức phiên: kênh đặt tên theo định danh Session, có thứ tự trong cùng Session và song song giữa các Session, tạo thành các làn thực thi cô lập; Worker là consumer của kênh Session, nhận việc theo thời gian thực, chạy các lời gọi model, tool MCP, thực thi sandbox…, và có khả năng co giãn theo nhu cầu. Nhiều bối cảnh phức tạp được xử lý thống nhất trên kiến trúc này — multi-agent gửi xuống theo `Topic=session_id`, CAW nhận Claim rồi chạy song song, CAS tụ họp kết quả bằng Mailbox và Barrier; Webhook dùng `Topic=endpoint_id` để bảo đảm gửi đúng thứ tự cho cùng một khách hàng; còn việc treo và khôi phục thì bền vững hoá trạng thái chờ rồi giải phóng Worker, và khi event quay lại thì bất kỳ Worker nào cũng nối tiếp được.

![image](../assets/imgs/chapter-12/image-004.png)

Case này cho thấy trong cùng một hệ thống có thể gánh nhiều luồng thông tin khác ngữ nghĩa trên nền kênh phiên, mỗi luồng ứng với một mức bảo đảm giao nhận và yêu cầu thứ tự riêng — lệnh cần cắt đỉnh và tách rời bất đồng bộ, event cần giữ thứ tự và retry, work item cần route và tiêu thụ co giãn — **chứ không cần thống nhất mọi giao tiếp nội bộ về một ngữ nghĩa duy nhất.** Tổng kết của kiến trúc này là **"phiên thường trú, tính toán lưu động, state nối tiếp được"**: task không thuộc về một cỗ máy nào; máy chỉ lo chặng hiện tại.

Sau khi tách quyết định khỏi thực thi, phải làm rõ định danh lời gọi tool, việc xác nhận nhận được, tiến độ và kết quả, việc huỷ cùng trạng thái chưa rõ. Khi phía thực thi mất liên lạc, phía quyết định có thể truy vấn bản ghi bền vững và xử lý theo hợp đồng khôi phục; **chỉ sau khi đã lưu workspace cần thiết và sự thật thao tác thì instance thực thi mới thay được an toàn.** Chương 7 nói về việc khôi phục môi trường; mục này quan tâm tới việc giữ liên kết giữa message bàn giao và kết quả.

Tới đây, ba case có thể đối chiếu ngang; khác biệt tập trung ở **lựa chọn khoá kênh — và khoá kênh thì ảnh hưởng tới độ hạt quản trị.**

| Case | Khoá kênh | Bảo đảm thứ tự | Độ hạt quản trị | Giải quyết chính |
| --- | --- | --- | --- | --- |
| Tương tác giọng nói thông minh | Định danh phiên | Phía request giữ thứ tự trong phiên | Phiên | Session stickiness và đẩy ngược kết quả bất đồng bộ |
| Giới hạn tốc độ gateway model và trung tâm tài sản | Tổ hợp người dùng × model, hoặc người dùng | Không yêu cầu | Người dùng, hoặc người dùng × model | Giới hạn tốc độ hạt mịn và quản trị ở mức người dùng |
| Qoder Cloud Agent | Định danh phiên và định danh môi trường | Có thứ tự trong task và giữ thứ tự ở mức phiên | Phiên và môi trường | Tách não–tay giữa mặt phẳng điều khiển và thực thi, cùng việc bàn giao bất đồng bộ |

*Bảng 12-9 — Đối chiếu khoá kênh và độ hạt quản trị của ba case*

### 12.7.3 Cái giá của quy mô: khi số phiên đè bẹp một message queue thông thường

Hai mục trước đều mặc định rằng "một phiên một kênh" đủ rẻ. Khi số phiên còn sống đồng thời lên tới hàng vạn, hàng chục vạn, giả định đó thất bại — **nếu dùng một message queue thông thường để tạo một topic chuẩn cho mỗi phiên, thì metadata của chính các kênh sẽ đè bẹp mặt phẳng điều khiển trước cả nghiệp vụ.**

Bảng dưới liệt kê các nút thắt mà ba loại phương án có thể gặp ở quy mô khá lớn. **Giới hạn cụ thể tuỳ vào version hiện thực, cấu hình tài nguyên và mẫu truy cập.**

| Phương án | Điểm hỏng |
| --- | --- |
| Mỗi phiên một topic chuẩn | Lượng lớn topic có thể làm tăng chi phí metadata, đồng bộ routing cùng tạo–thu hồi; hãy benchmark số topic, tỉ lệ hoạt động và tốc độ cập nhật mặt phẳng điều khiển — **không lấy một lần thí nghiệm làm giới hạn cho mọi hệ message.** |
| Broadcast message | Message bị gửi trùng và lọc ở mọi node, sinh ra lượng lớn traffic vô ích; mọi node phải nhận toàn bộ message rồi tự lấy phần Session mình quan tâm. **Năng lực xử lý của một node trở thành trần dung lượng tổng thể**, và việc mở rộng ngang bị hạn chế |
| Mỗi instance Session một consumer group độc lập | Số consumer group bùng nổ; việc lọc động cần phối hợp bên ngoài, tức là dựng lại một bộ routing bên ngoài hệ message |

*Bảng 12-10 — Ba phương án trực giác cho lượng lớn kênh phiên và điểm hỏng của chúng*

Ngoài bản thân kênh, còn một phản mẫu song hành: **buộc chặt phiên với một worker process thường trú theo tỉ lệ một–một.** Làm vậy khiến cả timeline task chiếm giữ liên tục tài nguyên tính toán và bộ nhớ, mất kết nối thì có rủi ro mất context, và việc mở rộng – di trú trở nên khó. Một tài liệu thực hành mô tả trạng thái này là coi worker process **"như thú cưng"** — nó có tên, có state, không thay được.

Để vẫn duy trì được "một phiên một kênh" ở quy mô như vậy, có thể dùng **kênh nhẹ** hoặc kỹ thuật tái dùng kênh logic tương đương — ví dụ **LiteTopic** của Apache RocketMQ; kênh Session mà Qoder Cloud Agent dùng ở trên chính là dùng LiteTopic của RocketMQ, chống đỡ ngữ nghĩa Session-as-Topic ở quy mô lớn. Nguyên lý kỹ thuật cốt lõi là **tránh duy trì trọn tài nguyên topic chuẩn cho từng kênh logic**: kênh được khai báo lúc chạy theo định danh nghiệp vụ và gắn vào một số ít topic cha dựng sẵn; trong bộ nhớ phía server nó chỉ biểu hiện thành một khoá chuỗi, message vật lý dùng chung phần lưu trữ của topic cha, đồng thời duy trì index nhẹ cùng trạng thái subscription và tiêu thụ cần thiết.

| Cơ chế | Vấn đề nó giải quyết |
| --- | --- |
| Tự tạo khi gửi lần đầu, không cần khai báo trước | Chi phí tạo kênh của các phiên tạm |
| Index hai chiều (client → kênh, kênh → client) | Gửi điểm-điểm chính xác, ứng dụng không phải duy trì bảng route |
| Tập sẵn sàng, được lấp đầy bởi các event ghi, xác nhận và mở khoá; rút cạn công bằng | Độ phức tạp lập lịch giảm từ tổng số subscription xuống số đang hoạt động, đồng thời chống đói |
| Tự thu hồi theo TTL khi rảnh | Tự động hoá việc quản lý vòng đời phiên |
| Treo một kênh và giải phóng thread ngay lập tức | Giới hạn tốc độ một kênh không vạ lây sang kênh khác |
| Hai chế độ tiêu thụ: subscribe wildcard và subscribe tường minh | Lần lượt phù hợp với "tiêu thụ mọi kênh liên quan" và "kiểm soát chính xác tập subscription" |

*Bảng 12-11 — Cơ chế của kỹ thuật kênh nhẹ và vấn đề tương ứng*

Case trên dùng kênh nhẹ để gánh ngữ nghĩa phiên. Các bản hiện thực khác cũng có thể đạt mục tiêu tương tự qua partition dùng chung, index và quản lý subscription; **việc nghiệm thu nên tập trung vào tính bền vững, giữ thứ tự, cô lập, khôi phục và chi phí ở quy mô — chứ không giới hạn vào một cơ chế sản phẩm cụ thể.**

## 12.8 Mặt phẳng người–máy: người dùng với Agent

Đặc điểm của mặt phẳng người–máy là **nhu cầu và độ tin cậy nghịch nhau**: mặt này đòi hỏi cao nhất về khả năng nhìn thấy tăng dần và ngắt được, trong khi kết nối frontend thì rất dễ đứt do chuyển mạng hay client thoát.

Vì vậy, hợp đồng giao tiếp ở mặt phẳng người–máy **không được coi kết nối frontend là ranh giới của task.** Một cấu trúc khả thi là: task tồn tại độc lập ở phía server, còn kết nối frontend chỉ là một view quan sát hiện tại; việc mất kết nối chỉ ảnh hưởng tới khả năng nhìn thấy, **không ảnh hưởng tới việc task tiến tiếp**; sau khi kết nối lại thì bù các event bị bỏ sót qua điểm nối tiếp. Cấu trúc này đã có sản phẩm công khai triển khai: **Remote Control** của Claude Code cho phép điện thoại, tablet hay trình duyệt truy cập cùng một phiên đang chạy trong terminal — nhiều client nhìn thấy cùng một view phiên, và việc ngắt một client chỉ là đóng cửa sổ quan sát, còn bản thân phiên vẫn chạy tiếp; tài liệu của họ diễn đạt sự phân công này là *"a client for Claude Code sessions rather than a place where code runs"* (bản hiện thực này dựa vào giao thức frontend riêng của Anthropic, **không phải ngữ nghĩa mà AG-UI cung cấp như mục này bàn**).

Tương tác human-in-the-loop cần phân biệt hai loại. **Việc dẫn dắt trong lúc thực thi** có thể đi qua streaming trong phạm vi request, vì nó chỉ có ý nghĩa khi phiên còn hoạt động. Còn **phê duyệt kiểu chặn thì bắt buộc phải đi qua cơ chế bền vững hoá**, vì khoảng thời gian chờ con người phản hồi là không dự đoán được — một nền tảng cloud dùng hộp thư việc cần làm để gánh loại tương tác này, tổ chức theo ba nhóm "cần input", "lỗi", "đã hoàn thành".

AG-UI biểu đạt tương tác giữa giao diện người dùng và Agent thành các event, gồm text, lời gọi tool và đồng bộ trạng thái. Mô hình event cùng các extension của nó vẫn đang tiến hoá; **khi áp dụng hãy cố định version quy chuẩn và SDK, và phân biệt năng lực đã hiện thực với phần còn ở dạng draft.** Ở đây trọng tâm là việc đồng bộ trạng thái, input của con người và trách nhiệm khôi phục sau khi mất kết nối.

Snapshot trạng thái và event tăng dần có thể giúp frontend dựng lại view hiện tại; còn input của con người thì phải được liên kết với task và điều kiện chờ tương ứng. **Bản sao mà frontend giữ không vì thế mà trở thành state có thẩm quyền của task;** việc có bền vững hoá hay không, xác thực ra sao và sau khi input tới thì tiếp tục thế nào vẫn do bản hiện thực phía server quyết định.

**Định dạng event, việc gián đoạn khi chạy và việc nối tiếp message là những năng lực khác nhau.** Không thể chỉ vì hỗ trợ snapshot trạng thái hay input của con người mà cho rằng sau khi mất kết nối sẽ phát lại được mọi event không khoảng trống. Khi cần đọc bù chính xác, phải thoả thuận thêm định danh event, cửa sổ lưu giữ và cách xử lý trùng; còn khi chỉ cần khôi phục view hiện tại thì cũng có thể lấy lại snapshot trạng thái và message. Hành vi cụ thể phải theo đúng version và hợp đồng endpoint đang dùng.

## 12.9 Quyết định lựa chọn

### 12.9.1 Lựa chọn mặc định và tiêu chí nâng cấp

Điểm xuất phát của việc lựa chọn là **chọn cho mỗi mặt phẳng giao tiếp ngữ nghĩa tối thiểu đủ dùng với chi phí và rủi ro chấp nhận được, chứ không thống nhất dùng nấc cao nhất.**

| Mặt phẳng | Ngữ nghĩa mặc định | Điều kiện kích hoạt nâng cấp |
| --- | --- | --- |
| Người–máy | S2 streaming trong phạm vi request | Có phê duyệt kiểu chặn, hoặc cần xem tiến độ xuyên thiết bị, xuyên phiên thì nâng lên S3 hoặc S4 |
| Năng lực | S1 request–response | Một tool đơn lẻ vượt timeout gateway, hoặc cần khôi phục xuyên instance thì nâng lên S3 |
| Cộng tác | Bàn giao liên tục dùng S3; tương tác đơn giản dùng S1 | Cần đọc bù message, fan-out và quản trị tiêu thụ độc lập thì kết hợp S4 |
| Nội bộ | Chọn S1 hay S3 theo trách nhiệm component | Cần cắt đỉnh, vị trí tiêu thụ và quản trị kênh thì kết hợp S4, và kiểm chứng chi phí ở quy mô |

*Bảng 12-12 — Ngữ nghĩa mặc định và điều kiện nâng cấp của bốn mặt phẳng giao tiếp*

## 12.10 Tóm tắt chương

Thiết kế giao tiếp phải để **định danh nghiệp vụ, state cần thiết và việc lấy kết quả tồn tại độc lập với kết nối hiện tại và instance thực thi.** Trạng thái task, checkpoint, message log và vị trí tiêu thụ mỗi thứ có trách nhiệm riêng; **giao thức phi trạng thái không đồng nghĩa với nghiệp vụ phi trạng thái**, và output dạng stream cũng không trực tiếp quyết định task có chạy offline được hay không.

Chương này giữ lại phương pháp phân tích theo **bốn mặt phẳng giao tiếp và bốn nấc ngữ nghĩa tương tác.** Mặt phẳng người–máy coi trọng việc nhìn thấy quá trình và liên kết input; mặt phẳng năng lực coi trọng hợp đồng lời gọi; mặt phẳng cộng tác coi trọng việc bàn giao task; mặt phẳng nội bộ coi trọng message, routing và co giãn giữa các component. Request–response, streaming, task handle và kênh bền vững **có thể tổ hợp theo từng chuỗi, không tạo thành một lộ trình phải nâng cấp tuần tự.**
