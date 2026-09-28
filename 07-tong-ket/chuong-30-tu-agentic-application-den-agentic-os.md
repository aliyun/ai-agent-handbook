# Chương 30 — Từ Agentic Application tới Agentic OS

Khi cùng một doanh nghiệp đồng thời chạy nhiều Agent, dùng nhiều framework và phục vụ nhiều tenant, thì mọi yêu cầu kỹ thuật mà các phần trước nêu ra sẽ bị hiện thực lặp lại một lần trong từng ứng dụng, và cách hiện thực lại không nhất quán với nhau. Kiểu lặp lại này không phải khiếm khuyết hiện thực của một ứng dụng nào đó, mà là do **thiếu một tầng nằm dưới tầng ứng dụng và được mọi Agent dùng chung**.

Phần này trả lời: những năng lực nào nên hạ từ tầng ứng dụng xuống tầng hệ thống, và sau khi hạ xuống thì chúng có thể lớn thành hình thái gì. Chúng tôi gọi hình thái đó là **Agentic OS**, đồng thời nói rõ rằng hiện nó chưa phải một chủng loại sản phẩm đã tồn tại, và cũng không tất yếu ứng với một kernel mới; nó gần hơn với **một nhóm trách nhiệm hệ thống đang định hình**.

## 30.1 Nhìn lại cả cuốn sách: những đồng thuận kiến trúc mà Agentic Application đã xác lập

### 30.1.1 Năm kết luận

Chi tiết kỹ thuật của sáu phần trước rất khác nhau, nhưng hội tụ về năm kết luận tương đối ổn định — và đó cũng là tiền đề cho phần bàn luận về sau của chương này.

**Thứ nhất, đối tượng kiến trúc là hệ thống, chứ không phải một lần gọi model.** Chương 1 tách Agent thành Model và Harness nghĩa rộng; chương 2 tiến thêm một bước, chia phần hệ thống kỹ thuật ngoài model thành năm miền trách nhiệm năng lực: tầng nghiệp vụ và ứng dụng, tầng xây dựng và orchestration Agent, tầng vận hành production, tầng quản trị và kiểm soát, tầng tối ưu. Ý nghĩa của cách chia này là quy thuộc trách nhiệm: nâng cấp model không nên biến thành tái cấu trúc ứng dụng, và ngữ nghĩa task không nên bị buộc chặt vào hạ tầng.

**Thứ hai, task là một đối tượng cần được quản lý lâu dài.** State machine của task ở chương 4, Session và Task State ở chương 5, task chạy lâu cùng session affinity ở chương 7, Checkpoint và phân tầng trạng thái ở chương 8 — tất cả xử lý cùng một chuyện: vòng đời của một task Agent dài hơn một request, rộng hơn một tiến trình, và có thể vượt qua nhiều bản sao lẫn nhiều khu vực; vì vậy trạng thái của nó bắt buộc phải đẩy ra ngoài, và bắt buộc phải tạm dừng, khôi phục được.

**Thứ ba, năng lực được tích hợp động, và việc khám phá năng lực phải tách khỏi việc uỷ quyền thực thi.** Skill ở chương 5, tool và MCP ở chương 6, MCP Gateway và Registry ở chương 9 cùng nói lên một điều: việc model biết một tool tồn tại, và việc model có quyền thực thi thao tác đó, là hai chuyện bắt buộc phải thiết kế riêng.

**Thứ tư, mức tự chủ phải khớp với quyền hạn, phạm vi thu hồi được và tính kiểm chứng được.** Sandbox và cô lập workspace ở chương 7, quản trị thống nhất và phê duyệt ở chương 9, bảo mật danh tính và kiểm soát outbound ở chương 14 nhấn đi nhấn lại cùng một phán đoán: quyền tự chủ trao càng lớn thì bán kính ảnh hưởng càng lớn, và yêu cầu về ranh giới cùng bằng chứng đi kèm cũng càng cao.

**Thứ năm, bằng chứng là tiền đề để một thay đổi được phát hành.** Hệ Trace và chỉ số ở chương 13, việc sinh hành vi và kiểm định chất lượng ở chương 16, golden dataset ở chương 21, vòng khép kín đánh giá và sửa Badcase ở chương 22 — cùng tạo thành một yêu cầu: bất kỳ lần Agent Release nào, dù thay đổi Prompt, Skill, tool, model hay Harness, đều cần lấy kết quả đánh giá tái lập được làm căn cứ phát hành. Đây cũng là điểm rơi của mạch "sự thật production dẫn dắt cải tiến" trong cuốn sách này.

### 30.1.2 Sáu loại ràng buộc kỹ thuật lặp lại xuyên các chương

Những kết luận trên triển khai được trong phạm vi một ứng dụng đơn lẻ. Cái khó xuất hiện ở cấp tổ chức: khi cùng một doanh nghiệp đồng thời chạy nhiều Agent, dùng nhiều framework và phục vụ nhiều tenant, thì sáu loại ràng buộc dưới đây sẽ bị hiện thực lặp lại trong từng ứng dụng, và cách hiện thực lại không nhất quán.

**Ràng buộc một: task thiếu định danh và sự quy thuộc trạng thái thống nhất.** Các chương 4, 5, 7, 8 lần lượt định nghĩa task, session, workspace và Checkpoint; nhưng ngữ nghĩa "một lần chạy" ở mỗi framework lại khác nhau: có framework lấy session làm đơn vị, có framework lấy một lần chạy đồ thị làm đơn vị, có framework lấy tiến trình làm đơn vị. Khi tổng hợp chi phí, truy sự cố hay giới hạn lưu lượng thống nhất xuyên framework, bước đầu tiên thường là ép căn chỉnh các đối tượng vận hành từ những nguồn khác nhau.

**Ràng buộc hai: môi trường thực thi trở thành tài nguyên hạng nhất, và chi phí của nó quyết định tính kinh tế của mức đồng thời.** Chương 7 bàn sandbox và workspace, chương 8 bàn co giãn. Khi task Agent xen kẽ giữa chờ model, tra cứu dữ liệu và thực thi tool, thì mức chiếm tài nguyên trung bình của một task chênh rất xa so với đỉnh tức thời, và nhiều task có thể cùng kết thúc chờ rồi đồng loạt khởi động tool. Dự trữ tài nguyên theo đỉnh cho từng task thì để lại rất nhiều hạn mức nhàn rỗi; còn triển khai theo mức trung bình thì lại gây tắc nghẽn khi tập trung biên dịch, test hay đọc dữ liệu. Chi phí tạo, chiếm khi rảnh, tạm dừng — khôi phục và huỷ môi trường quyết định trực tiếp nền tảng chống đỡ được bao nhiêu task đồng thời.

**Ràng buộc ba: metadata năng lực không đủ để chống đỡ việc ra quyết định tự động.** Chương 6 yêu cầu phần mô tả tool phải gồm input, output và trạng thái lỗi; nhưng thứ thực sự khan hiếm trong production lại là ba loại khai báo: thao tác đó có tác dụng phụ bên ngoài không, có idempotent không, và thất bại rồi thì retry an toàn được không. Thiếu ba khai báo này thì việc retry và bù trừ chỉ trông vào giao ước thủ công, còn vòng khép kín tự sửa ở chương 23 cũng khó phủ được các thao tác ghi.

**Ràng buộc bốn: ranh giới giữa context và state dễ bị xói mòn.** Chương 5 phân biệt rõ Context với State, nhưng khi hiện thực kỹ thuật thì việc nén, tóm tắt và chạy tiếp liên tục biến "lịch sử hội thoại không đầy đủ" thành "sự thật task khôi phục được". Vấn đề này trong một ứng dụng đơn lẻ còn kiểm soát được bằng quy phạm code, nhưng khi tích hợp xuyên framework thì lại thiếu biện pháp cưỡng chế.

**Ràng buộc năm: uỷ quyền khó phái sinh và thu hồi theo task.** Các chương 9, 14 yêu cầu quyền tối thiểu và thông tin xác thực ngắn hạn. Nhưng task Agent sẽ phái sinh task con, sub-Agent và các lời gọi nền, nên uỷ quyền phải phái sinh theo, và khi task chấm dứt thì phải thu hồi theo dây chuyền. Khi danh tính, việc thu hồi quyền và việc dừng thực thi nằm rải trong code ứng dụng, cấu hình Gateway và chính sách runtime, thì "task đã chấm dứt" và "thông tin xác thực của task đó đã hết hiệu lực" không phải lúc nào cũng đồng thời thành lập.

**Ràng buộc sáu: các điểm thu thập bằng chứng phân tán, chuẩn đo không thống nhất.** Các chương 13, 21 yêu cầu thống nhất chuẩn đo chỉ số và baseline đánh giá; nhưng các điểm thu thập lại nằm rải ở khâu gọi model, gọi tool, thay đổi trạng thái và phê duyệt. Khi việc thu thập đó do từng ứng dụng tự cắm điểm, thì việc tính chi phí, định vị sự cố và hồi quy chất lượng xuyên ứng dụng đều thiếu tính so sánh được.

Đặc trưng chung của sáu loại ràng buộc này là: chúng đều không phải khiếm khuyết hiện thực của một ứng dụng nào đó, mà là do thiếu một tầng nằm dưới tầng ứng dụng và được mọi Agent dùng chung. Chúng tạo thành miền vấn đề để chương này bàn về Agentic OS.

## 30.2 Từ kiến trúc ứng dụng tới tầng hệ thống: cái gì nên hạ xuống, cái gì thì không

### 30.2.1 Ba tiêu chí để hạ xuống

Không phải mọi năng lực chung đều nên hạ xuống. Nhét ngữ nghĩa task, luật nghiệp vụ hay chuẩn đo đánh giá vào tầng hệ thống thì chỉ được một framework khó thay hơn mà thôi. Cuốn sách này nêu ba tiêu chí: một năng lực chỉ có lý do để hạ xuống tầng hệ thống khi nó **đồng thời thoả tiêu chí một, và thoả ít nhất một trong hai tiêu chí hai hoặc ba**.

**Tiêu chí một là tính tái dùng:** nhiều ứng dụng sẽ hiện thực lặp năng lực đó, và sự khác biệt trong cách hiện thực không sinh ra giá trị nghiệp vụ. Snapshot workspace, tạo sandbox, thu thập Trace thuộc loại này; còn điều kiện kết thúc và chuẩn nghiệm thu của task thì không.

**Tiêu chí hai là tính cưỡng chế:** năng lực đó bắt buộc phải do một component nằm ngoài bên bị ràng buộc thực thi thì mới thực sự có hiệu lực. Kiểm quyền hạn, kiểm soát outbound mạng, trần ngân sách, bản ghi kiểm toán thuộc loại này. Nếu một ràng buộc chỉ viết trong prompt, hay do chính Agent bị ràng buộc tự gọi, thì nó không mang tính cưỡng chế.

**Tiêu chí ba là tính kiểm chứng được:** năng lực đó cần một nguồn bằng chứng độc lập với bên thực thi thì mới được tin. Việc quan sát liên kết giữa lời gọi model với hành vi hệ thống, việc kiểm độc lập trạng thái workspace, tính tái lập được của kết quả đánh giá thuộc loại này. Kết quả thực thi do chính Agent tự báo lên thì không tạo thành bằng chứng độc lập.

Chiếu ba tiêu chí này lại sáu ràng buộc ở mục 30.1.2: ràng buộc hai, năm và sáu đồng thời thoả tính tái dùng cùng tính cưỡng chế hoặc tính kiểm chứng được, nên thuộc phần nên hạ xuống; ràng buộc một và ràng buộc ba là bài toán chuẩn hoá interface và metadata, cần giao ước xuyên nhà cung cấp chứ không phải do một tầng nào đó độc chiếm phần hiện thực; còn ràng buộc bốn thì nằm giữa hai nhóm — phần quy phạm ranh giới của nó hạ xuống được thành giao ước interface của dịch vụ vận hành, nhưng chiến lược tuyển chọn context cụ thể thì vẫn nên để ở phía ứng dụng.

### 30.2.2 Định nghĩa và ranh giới của Agentic OS

Theo đó, cuốn sách này đưa ra một định nghĩa hẹp cho Agentic OS:

> _Agentic OS là tầng hệ thống cung cấp cho các task Agent những đối tượng vận hành chung, phần tích hợp năng lực chung, những ranh giới cưỡng chế được và bằng chứng thống nhất. Nó lấy task, môi trường, năng lực, uỷ quyền và bằng chứng làm đối tượng quản lý cốt lõi, và không nắm giữ ngữ nghĩa task._

Định nghĩa này chứa ba lời phủ định, và chúng quan trọng ngang với chính định nghĩa.

**Thứ nhất, Agentic OS không thay thế Harness.** Tầng orchestration Harness mà chương 2 khoanh định sẽ quyết định model thấy gì, gọi được gì, khi nào dừng, kết quả nghiệm thu ra sao — những thứ đó thuộc ngữ nghĩa task, nên phải để ở phía ứng dụng. Thứ tầng hệ thống cung cấp là việc quản lý vòng đời của đối tượng task, chứ không phải task phải làm ra sao.

**Thứ hai, Agentic OS không đồng nghĩa với một framework Agent nữa.** Framework ràng buộc cách phát triển qua SDK, còn tầng hệ thống thì ràng buộc hành vi vận hành qua interface và các điểm cưỡng chế. Khác biệt giữa hai bên là: ràng buộc của framework mất hiệu lực ngay khi không dùng framework đó, còn ràng buộc của tầng hệ thống thì phải thành lập ngay cả khi bên bị ràng buộc không hợp tác. Khác biệt này đặc biệt then chốt trong kịch bản tích hợp Agent dị cấu ở chương 11.

**Thứ ba, Agentic OS không tất yếu có nghĩa là phải sửa kernel.** Mục tiêu của việc hạ xuống là để năng lực nằm **ngoài bên bị ràng buộc**, chứ không phải nằm ở tầng thấp nhất có thể. Cùng một năng lực có thể do control plane của nền tảng, dịch vụ vận hành trên host, container runtime hay cơ chế kernel cung cấp; việc chọn phụ thuộc vào tính cưỡng chế và chi phí, chứ không phải vào chuyện tầng cao hay thấp. Điều này nhất quán với tiêu chí đánh đổi "kiến trúc tối thiểu đủ dùng" ở chương 2: một năng lực đặt ở tầng nào là tuỳ nó có thực sự có hiệu lực ở tầng đó không, chứ không tuỳ nó nghe có vẻ "tầng thấp" hơn hay không.

### 30.2.3 Quan hệ với bốn hình thái sản phẩm hệ điều hành AI

Ở phía sản phẩm hệ điều hành, những thay đổi do trí tuệ nhân tạo mang lại thường được chia thành bốn hình thái: tái cấu trúc tầng tương tác, tăng cường kernel và dịch vụ, hoà trộn ở tầng chức năng, và lật đổ kiến trúc tầng nền. Cách chia này lấy sự thay đổi về trách nhiệm hệ thống và cơ chế hiện thực làm căn cứ. Agent Platform mà cuốn sách này bàn liên quan trực tiếp tới loại thứ hai và thứ ba; hiểu quan hệ tương ứng đó giúp phán định năng lực nào đã có nền hiện thực công nghiệp.

| Hình thái | Thay đổi cốt lõi | Sản phẩm bàn giao điển hình | Quan hệ với nội dung cuốn sách |
| --- | --- | --- | --- |
| Tái cấu trúc tầng tương tác (ngoài hệ thống) | Trợ lý hay agent độc lập dùng OS qua các interface sẵn có | Trợ lý command line, Agent thao tác máy tính | Ứng với interface môi trường và Computer Use ở chương 6; host không phải sửa gì |
| Tăng cường kernel và dịch vụ (trong hệ thống) | Cải tiến kernel, driver và dịch vụ vận hành theo tải AI và Agent | Thích ứng dị cấu, quản lý cache, tối ưu việc gánh sandbox | Là nền chống đỡ cho các năng lực ở chương 7, 8, 9; quyết định trần chi phí đồng thời |
| Hoà trộn ở tầng chức năng (trong hệ thống) | Model, context và việc gọi tool hoà vào chức năng hệ thống và quy trình task | Dịch vụ thông minh hệ thống, Agent cấp hệ thống, quản lý task | Chồng lấn nhiều với trách nhiệm control plane của nền tảng ở chương 9, 10 và phần bốn |
| Lật đổ kiến trúc tầng nền | Tái cấu trúc cơ chế nền của việc tính toán, thực thi, bảo vệ hay quản lý trạng thái | Kernel native, miền thực thi chuyên dụng, nguyên mẫu nghiên cứu | Ứng với các vấn đề mở ở mục 30.7; chưa có hiện thực đa dụng chín muồi |

*Bảng 30-1 — Quan hệ tương ứng giữa bốn hình thái sản phẩm hệ điều hành AI và nội dung cuốn sách*

Bảng 30-1 nói lên một sự thật dễ bị bỏ qua: Agentic OS không phải một ý tưởng bắt đầu từ con số không, mà là **hai tuyến tiến hoá đã đang được đẩy gặp nhau trên cùng một nhóm đối tượng.**

Tuyến từ trên xuống là **việc năng lực nền tảng hạ xuống**. Gateway, Registry, danh tính và chính sách, quản lý task và hạn mức mà chương 9 cùng phần bốn mô tả, ở phía sản phẩm hệ điều hành thì biểu hiện thành việc hoà trộn ở tầng chức năng: dịch vụ model, dịch vụ context, interface tool hệ thống và việc quản lý trạng thái task trở thành năng lực chung mà hệ thống cung cấp. openEuler Intelligence tích hợp kho tri thức cục bộ, interface ngữ nghĩa, dịch vụ MCP và luồng công việc vận hành thành dịch vụ thông minh của hệ thống; Red Hat qua RHEL MCP Server mà mở các công cụ chẩn đoán hệ thống thành năng lực gọi được (bản xem trước cho người phát triển); còn Microsoft thì đưa tài khoản chuẩn độc lập cho Agent cùng Agent workspace vào chức năng hệ thống (phần Copilot Actions liên quan là bản xem trước mang tính thử nghiệm). Điểm chung của các thực tiễn này là biến những năng lực vốn do từng ứng dụng tự xây thành interface của hệ thống.

**ANOLISA** mà Alibaba mở mã nguồn là một thực thể có cách tổ chức gần nhất với đối tượng bàn luận của chương này trên tuyến đó, nên chương này sẽ trích dẫn nó nhiều lần ở các mục sau. Nó tự định vị là tầng thao tác hướng tới tải Agent, và tổ chức năng lực theo ba miền: lối vào Agent (terminal cosh-ng, OS Skills gồm kỹ năng hệ thống và vận hành, ktuner tinh chỉnh kernel), hiệu suất context (nén output tool Token-less, Agent Memory ghi nhớ xuyên phiên, AgentSight hiển thị trajectory và Token), và vận hành cùng bảo mật (ws-ckpt cho checkpoint và rollback, SkillFS cho view kỹ năng, Agent Sec Core cho sandbox và kiểm tra, Blaze cho vòng đời sandbox). Đáng chú ý là tuyên bố ranh giới của nó: giữ nguyên rõ ràng Shell, framework Agent và sandbox mà người dùng đã có, và từng năng lực bật độc lập được. Cách đánh đổi này nhất quán với lời phủ định thứ hai và thứ ba ở mục 30.2.2 — nó không đòi đổi framework, cũng không đòi đổi kernel, mà là bù thêm một tầng trên nền Linux sẵn có. Cũng phải nói rõ về mức chín: tính tới v1.1 (2026-08-08), ngoài copilot-shell thì phần lớn component còn ở version 0.x, năng lực vẫn đang tiến hoá; chương này trích dẫn nó như một mẫu về cách tổ chức, chứ không phải như một baseline hiện thực đã ổn định.

Tuyến từ dưới lên là **việc tăng cường phần gánh của hệ thống**. Chi phí sandbox, tranh chấp tài nguyên và năng lực khôi phục mà chương 7, 8 bàn tới, ở phía sản phẩm hệ điều hành thì biểu hiện thành việc tăng cường kernel và dịch vụ: tạo nhẹ, hâm nóng template trước, copy-on-write, nạp theo nhu cầu, thu hồi khi rảnh, cùng việc điều tiết tài nguyên dựa trên phản hồi áp lực. PSI và cgroup v2 của Linux cung cấp cơ chế nền để quan sát việc chờ tài nguyên và chỉnh hạn mức; còn các hãng CPU cũng đã liệt mật độ sandbox Agent và thông lượng tạo hàng loạt vào các kịch bản sản phẩm rõ ràng. Tuyến này không đổi cách gọi của ứng dụng, mà chỉ đổi số task gánh được và chi phí đơn vị ở cùng một mức chất lượng dịch vụ.

Vị trí hai tuyến gặp nhau chính là đối tượng mà ràng buộc hai, năm và sáu ở mục 30.1.2 trỏ tới: **môi trường, uỷ quyền và bằng chứng.** Đây cũng là nơi mà cuốn sách này cho rằng phôi thai của Agentic OS sẽ định hình sớm nhất.

Cũng cần chỉ ra rằng hình thái loại thứ tư ở giai đoạn hiện tại vẫn chủ yếu là nghiên cứu. Các thực tiễn công nghiệp công khai hiện có chưa đủ để xác lập một hệ điều hành AI native đa dụng chín muồi; miền thực thi chuyên dụng và các nghiên cứu hệ thống cung cấp hướng khám phá, chứ không phải một kiến trúc dùng thẳng được. Phán đoán này giới hạn ranh giới chắc chắn cho mọi bàn luận về "phôi thai" ở phần sau của chương.

Cũng vì vậy, các hiện thực công nghiệp hiện gần với Agentic OS được xếp chính xác hơn vào nhóm "tổ hợp của loại hai và loại ba", chứ không phải loại bốn. Chúng mở rộng runtime Agent và control plane trên nền Linux sẵn có, dùng cơ chế hệ thống để cung cấp phần cưỡng chế và quan sát, nhưng không tái cấu trúc cơ chế nền của việc tính toán, thực thi hay quản lý trạng thái. Cấu trúc ba tầng mà chương này bàn chính là mô tả hình thái tổ hợp đó; gọi nó là "hệ điều hành" là nói về sự quy thuộc trách nhiệm, chứ không phải về tầng hiện thực.

## 30.3 Phôi thai kiến trúc của Agentic OS

### 30.3.1 Các đối tượng quản lý cốt lõi

Hình thái của một hệ điều hành do đối tượng quản lý cốt lõi của nó quyết định. Hệ điều hành truyền thống quản lý tiến trình, không gian địa chỉ, file và thiết bị; Agentic OS muốn thành lập thì phải nói rõ được nó quản lý cái gì. Bảng 30-2 đưa ra chín loại đối tượng mà cuốn sách này quy nạp. Cột "vật tương tự trong hệ thống sẵn có" dùng để nói rõ hiện các đối tượng đó đang được biểu đạt gián tiếp ra sao, còn cột cuối nói hậu quả khi thiếu đối tượng đó.

| Đối tượng quản lý | Ngữ nghĩa | Vòng đời | Vật tương tự trong hệ thống sẵn có | Hậu quả khi thiếu |
| --- | --- | --- | --- | --- |
| Danh tính Agent | Chủ thể thực thi uỷ quyền được, kiểm toán được | Dài hơn một task đơn lẻ | Service account, tài khoản chuẩn độc lập | Không phân biệt được trách nhiệm thao tác của Agent và của người dùng |
| Run (lần chạy task) | Một lần thực thi có mục tiêu, tạm dừng được, khôi phục được | Từ vài phút tới vài ngày | Nhóm tiến trình, job, instance workflow | Xuyên framework thì không thống nhất được việc đo lường, giới hạn lưu lượng và truy sự cố |
| Session | Vật mang tính liên tục của tương tác và context | Giao với Run, không tương đương | Phiên, kết nối | Lịch sử context bị coi nhầm là sự thật task |
| Workspace | Không gian file và sản phẩm mà task đọc ghi được | Phái sinh và thu hồi theo Run | Thư mục, volume, lớp container | Các task đồng thời làm ô nhiễm lẫn nhau, thất bại rồi không lùi được |
| Skill | Phương pháp hành động tái dùng được, phát hành được, kiểm chứng được | Gắn version độc lập | Script, gói phần mềm | Việc kết tinh năng lực không kiểm toán được và cũng không rollback được |
| Tool và endpoint MCP | Năng lực bên ngoài khám phá được, gọi được | Đăng ký và uỷ quyền độc lập | System call, API, dịch vụ | Việc khám phá năng lực bị lẫn với việc uỷ quyền thực thi |
| Budget Lease (hợp đồng thuê ngân sách) | Hạn mức tài nguyên và lời gọi có trần, có kỳ hạn, thu hồi được | Phái sinh theo Run, huỷ theo dây chuyền được | Hạn mức, giới hạn cgroup | Ngân sách mất kiểm soát, và các task con không bị ràng buộc được |
| Policy | Khai báo ranh giới cưỡng chế được | Định nghĩa tập trung, phán định phân tán | Kiểm soát truy cập, seccomp, network policy | Ràng buộc chỉ tồn tại trong prompt |
| Evidence (bằng chứng) | Bản ghi về kế hoạch, thao tác đã phát đi và kết quả đã xác nhận | Dài hơn Run, phục vụ kiểm toán và đánh giá | Log, bản ghi kiểm toán | Không chứng minh được thay đổi có cải thiện, và cũng không retry an toàn được |

*Bảng 30-2 — Các đối tượng quản lý cốt lõi của Agentic OS*

Trong đó, ba đối tượng đáng nói riêng vì chúng khác xa nhất so với đối tượng của hệ điều hành truyền thống.

**Run và tiến trình không phải đối tượng cùng một tầng.** Một Run có thể vượt qua nhiều tiến trình, nhiều bản sao, nhiều khu vực, và cũng có thể treo lâu giữa chừng để chờ con người phê duyệt. Căn cứ đúng đắn của nó không phải "tiến trình còn sống không", mà là "sự thật task có đầy đủ và nhất quán không". Điều này giải thích vì sao chương 8 yêu cầu đẩy trạng thái ra ngoài: danh tính của Run bắt buộc phải độc lập với instance thực thi đang gánh nó.

**Budget Lease là đối tượng mà cuốn sách này cho rằng dễ bị bỏ qua nhất, nhưng lại then chốt nhất với việc tự chủ có kiểm soát.** Chương 9 bàn hạn mức, chương 14 bàn quyền tối thiểu; khi hiện thực thì hai thứ thường tách nhau. Mô hình hợp đồng thuê gộp chúng thành một chuyện: **một lần uỷ quyền đồng thời giới hạn tài nguyên dùng được, thao tác thực thi được, kỳ hạn hiệu lực và cách thu hồi, và phái sinh được theo task con.** Khi thiếu đối tượng này thì "chấm dứt task" và "thu hồi toàn bộ quyền của task đó" chỉ có thể trông vào sự phối hợp của nhiều chỗ cấu hình.

**Evidence bắt buộc phải phân biệt ba trạng thái: thao tác đang trong kế hoạch, thao tác đã phát đi, và thao tác đã xác nhận kết quả.** Sự phân biệt này quyết định trực tiếp chiến lược khôi phục. Lấy "sửa cấu hình rồi khởi động lại dịch vụ từ xa" làm ví dụ: khôi phục file trong workspace cục bộ không đưa dịch vụ từ xa về trạng thái cũ; còn nếu lời gọi trước đó đã phát đi nhưng chưa có kết quả trả về thì retry thẳng còn có thể gây ảnh hưởng trùng lặp. Vì vậy, snapshot workspace chỉ khôi phục được trạng thái file mà nó phủ, còn các tác dụng phụ xuyên hệ thống thì phải dựa vào bản ghi thao tác và việc truy vấn thời gian thực để quyết định retry hay bù trừ.

### 30.3.2 Cấu trúc ba tầng

Theo các tiêu chí ở mục 30.2.1, trách nhiệm quản lý chín loại đối tượng này tổ chức được thành ba tầng.

![image](../assets/imgs/chapter-30/image-001.png)

*Hình 30-1 — Cấu trúc ba tầng và ranh giới trách nhiệm của Agentic OS*

Hình 30-1 biểu đạt ranh giới trách nhiệm giữa ba tầng, chứ không phải thứ tự gọi. Ba tầng mỗi tầng ứng với một tiêu chí phán định khác nhau: tầng trên giải quyết tính tái dùng, tầng giữa giải quyết chi phí và mật độ, tầng dưới giải quyết tính cưỡng chế và tính kiểm chứng được. Khung nét liền trong hình biểu thị các trách nhiệm do tầng hệ thống gánh và nằm ngoài bên bị ràng buộc; khung nét đứt biểu thị phần để ở phía ứng dụng, không hạ xuống cùng tầng hệ thống; còn đường đứt màu đỏ là ranh giới ngữ nghĩa task. Đường ranh giới giữa tầng trên và tầng orchestration Harness ở phía ứng dụng là đường quan trọng nhất của chương này — nó đánh dấu rằng **ngữ nghĩa task không hạ xuống**.

**Tầng dịch vụ vận hành Agent** gánh việc quản lý vòng đời của đối tượng task. Nó cung cấp việc tạo, treo, khôi phục và chấm dứt Run; cung cấp việc phái sinh và thu hồi Session cùng Workspace; cung cấp interface đọc ghi context, memory và kỹ năng; và gắn hợp đồng thuê ngân sách lên các thao tác đó. Đối tượng interface của tầng này là task và trạng thái, chứ không phải chi tiết lời gọi hàm. Phía nghiên cứu đã có các khám phá tương ứng: AIOS trừu tượng hoá phần lập lịch model, context, memory, lưu trữ và kiểm soát truy cập thành nhiều dịch vụ chung cho các Agent dùng, với kernel của nó nằm trên kernel của host; còn đội nghiên cứu của IBM trong *Towards an Agent Operating System* thì tham chiếu hệ điều hành kinh điển và nền tảng cloud để bàn các năng lực nền như vòng đời, gọi tool, context, memory, uỷ quyền và khôi phục, nhấn mạnh việc nền tảng quản lý thống nhất các luật chung trong lúc thực thi động.

Về phía công nghiệp, ANOLISA cung cấp phần lớn năng lực của tầng này dưới dạng component hệ thống: Agent Memory gánh phần nhớ xuyên phiên, SkillFS kiểm soát view kỹ năng đang thấy được đồng thời giữ khả năng khám phá các kỹ năng còn lại, ws-ckpt giữ điểm khôi phục cho các thay đổi workspace, còn phần nén Token-less thì tác động lên tool schema và tool response đi vào model. Trong đó, cách đặt của Token-less đáng nói riêng: việc nén diễn ra **giữa Agent và model**, không cần sửa code framework Agent, và các phần tử mảng bị bỏ đi được giữ khả năng tra cứu qua một dấu hiệu, khiến việc nén đảo ngược được. Chiếu theo tiêu chí ở mục 30.2.1, đây là một lần hạ xuống đạt chuẩn điển hình — nhiều framework sẽ hiện thực lặp cùng một việc (tính tái dùng), còn việc đặt nó trên đường gọi chứ không phải bên trong framework khiến nó không cần bên bị ràng buộc phối hợp (tính cưỡng chế). Nó cũng gợi ý rằng bản thân chi phí context có thể là đối tượng tối ưu của tầng hệ thống, chứ không chỉ là mẹo prompt ở phía ứng dụng.

**Tầng gánh của hệ thống** quyết định chi phí và mật độ ở cùng một mức chất lượng dịch vụ. Nó lo việc tạo nhẹ, chia sẻ template và thu hồi kịp thời cho sandbox cùng workspace; lo việc phân bổ dung lượng theo trạng thái hoạt động của task; lo đường dữ liệu của dịch vụ model và cache; và khi cần thì cung cấp môi trường thực thi bí mật. Trong ANOLISA, Blaze quản lý vòng đời sandbox, còn ktuner lo việc tinh chỉnh tham số kernel — đó là hai loại trách nhiệm điển hình của tầng này. Lợi ích của tầng này không thể hiện thành chức năng mới, mà thể hiện ở lượng gánh được, thời gian khởi động và khôi phục, độ trễ đuôi và chi phí tài nguyên. Cần lưu ý cái giá của nó: bản thân việc chia sẻ template, tạm dừng — khôi phục và điều tiết động đều có chi phí; việc đánh thức tập trung có thể gây tranh chấp; còn thu hồi quá mức thì làm chậm việc khôi phục. Vì vậy mật độ triển khai bị ràng buộc chung bởi thời gian hoàn thành task, độ trễ đuôi và nhiễu từ các task lân cận; đơn thuần tăng số sandbox có thể khiến chất lượng dịch vụ tổng thể đi xuống.

**Tầng quản trị và bằng chứng** quyết định một task có được phép xảy ra không, và sau đó có chứng minh được không. Nó định nghĩa tập trung danh tính, chính sách và uỷ quyền; đặt các điểm phán định phân tán trên đường request; thu thập bằng chứng liên kết giữa lời gọi model và hành vi hệ thống; và cung cấp bản ghi thao tác cần thiết cho việc khôi phục, bù trừ. Cách hiện thực tầng này trong công nghiệp đã có nhiều hình thái: NVIDIA OpenShell đặt phần kiểm soát thực thi độc lập bên ngoài Agent, quản lý việc truy cập file, mạng và tiến trình qua sandbox, chính sách khai báo, Landlock, seccomp và proxy mạng (tài liệu ghi trạng thái alpha, và một số phần kiểm soát có cấu hình hạ cấp tương thích); còn Windows 365 for Agents thì kết hợp môi trường thực thi cấp theo từng task với vòng đời task, và reset môi trường sau khi task kết thúc.

ANOLISA ở tầng này cung cấp hai cơ chế cụ thể đối chiếu được với bảng 30-2. **AgentSight** quan sát hành vi Agent trên Linux dựa trên eBPF, không đòi sửa code Agent, và liên kết input người dùng, lời gọi model, lời gọi tool, mức tiêu Token cùng các nhánh sub-Agent vào cùng một view — đó chính là "nguồn bằng chứng độc lập với bên thực thi" mà đối tượng Evidence đòi hỏi. Còn **Skill Ledger** của Agent Sec Core thì bù cho đối tượng Skill một state machine: khi một kỹ năng đã ký bị thay đổi, Agent sẽ báo `drifted` trước khi dùng lại, và việc quét lại sẽ ghi các phát hiện mang tính chặn thành `deny`. Ví dụ này cho thấy chữ "Skill kiểm chứng được" trong bảng 30-2 không phải một tính từ: nó chỉ thành lập khi đồng thời có đủ ba thứ — chữ ký, phát hiện trôi và trạng thái chặn.

### 30.3.3 Phân định trách nhiệm với các hệ thống sẵn có

Cấu trúc ba tầng không đòi hỏi mọi thứ đều do hệ điều hành cung cấp. Muốn phán định một năng lực nên do nền tảng hay do host gánh thì có thể quay về các tiêu chí ở mục 30.2.1, và bổ sung thêm một ràng buộc kỹ thuật: **chi phí của việc gọi xuyên tầng không được vượt quá lợi ích cưỡng chế mà nó đổi được.**

Các năng lực thiên về phía host và kernel cung cấp gồm: cơ chế tạo và thu hồi sandbox cùng workspace, việc điều tiết tài nguyên dựa trên phản hồi áp lực, việc cô lập cưỡng chế tiến trình và mạng, khởi động tin cậy và thực thi bí mật, cùng việc quan sát nhiễu thấp bằng các cơ chế như eBPF. Đặc trưng chung của các năng lực này là bắt buộc phải nằm ngoài bên bị ràng buộc, và không đạt được bằng sự hợp tác ở tầng ứng dụng.

Các năng lực thiên về phía control plane của nền tảng gồm: việc định nghĩa ngữ nghĩa Run và Session, chuẩn đo đánh giá và baseline điều kiện vào, quy trình phê duyệt, hạn mức và việc tính chi phí xuyên tenant, cùng việc đăng ký và quản lý version cho kỹ năng và tool. Các năng lực này cần khớp với quy trình tổ chức, và cần giữ nhất quán trên nhiều môi trường host khác nhau.

Thứ cần nói rõ là phải để lại ở phía ứng dụng chính là **ngữ nghĩa task**: điều kiện kết thúc, chiến lược tuyển chọn context, chuẩn nghiệm thu và luật nghiệp vụ. Chương 2 đã chỉ ra, một khi tầng orchestration phụ thuộc trực tiếp vào cấu trúc bộ nhớ của một Runtime nào đó, thì việc tách rời giữa tầng orchestration và Runtime đã bị phá vỡ. Tương tự, một khi tầng hệ thống bắt đầu quy định task phải hoàn thành ra sao, thì nó đã thoái hoá từ một hệ điều hành thành một framework.

## 30.4 Tách rời model, Harness, giao thức và runtime

### 30.4.1 Bốn mặt tách rời

Agentic OS có thành lập được hay không phụ thuộc vào việc bốn mặt tách rời có tồn tại interface ổn định không. Interface ổn định ở đây nghĩa là: thay được phần hiện thực mà không phải viết lại ngữ nghĩa task, và dùng chung một bộ đánh giá để chứng minh năng lực trước và sau khi thay là tương đương.

| Mặt tách rời | Đối tượng của interface ổn định | Phần đã tương đối hội tụ | Phần chưa hội tụ | Cách làm điển hình phá vỡ sự tách rời |
| --- | --- | --- | --- | --- |
| Model và Harness | Định dạng request và response, giao thức gọi tool, output có cấu trúc | Hình thái interface của việc gọi tool và output có cấu trúc | Việc tuân thủ chỉ thị trong context dài và độ ổn định nhiều bước thì giao thức không biểu đạt được | Cố định vào code nghiệp vụ các prompt bù khiếm khuyết model cùng phần điều khiển vòng lặp |
| Harness và runtime | Ngữ nghĩa trạng thái của Run, Session, Checkpoint, Workspace | Sự cần thiết của việc đẩy trạng thái ra ngoài đã thành đồng thuận | Định nghĩa "một lần chạy" ở các framework không nhất quán | Tầng orchestration phụ thuộc trực tiếp vào cấu trúc bộ nhớ hay mô hình tiến trình của một runtime |
| Năng lực và giao thức | Mô tả tool, khám phá năng lực, ngữ nghĩa gọi và lỗi | MCP đã đảm nhận vai trò giao thức khám phá và gọi tool | Tác dụng phụ, tính idempotent và mức rủi ro thiếu khai báo máy đọc được | Lấy tính tương thích giao thức thay cho thiết kế quyền hạn, coi "khám phá được" là "thực thi được" |
| Runtime và môi trường gánh | Hợp đồng sandbox, ranh giới file và mạng, interface snapshot và khôi phục | Việc cấu hình nhiều backend đã có thực tiễn | Quan hệ giữa ngữ nghĩa snapshot với tác dụng phụ xuyên hệ thống chưa được chuẩn hoá | Giả định snapshot nội bộ có thể huỷ được tác dụng phụ bên ngoài |

*Bảng 30-3 — Hiện trạng interface của bốn mặt tách rời*

Ở **mặt tách rời thứ nhất**, hình thái interface tương đối chín, nhưng có một kiểu thất bại bắt buộc phải đề phòng: **tương thích giao thức không đồng nghĩa với tương đương năng lực.** Chương 2 đã chỉ ra, một model hạ cấp vẫn có thể trả về lời gọi tool bình thường ở tầng giao thức, nhưng lại đánh mất các ràng buộc trung gian trong task nhiều bước, và cuối cùng sinh ra một lần thực thi hợp lệ về cấu trúc nhưng sai về kết quả. Điều này nghĩa là việc kiểm chứng khi thay model chỉ hoàn tất được bằng đánh giá hồi quy trên trọn Harness, chứ không hoàn tất được bằng test interface.

Ở **mặt tách rời thứ hai**, đồng thuận đã có nhưng ngữ nghĩa thì chưa thống nhất. Đây chính là nguồn gốc của ràng buộc một ở mục 30.1.2, và cũng là đối tượng chuẩn hoá trực tiếp nhất.

Ở **mặt tách rời thứ ba**, MCP đã giải quyết bài toán giao thức cho việc khám phá và gọi tool, nhưng quyền hạn thì vẫn phải do client, server và hệ thống host mỗi bên thực thi. Điều này ở phía hệ điều hành cũng biểu hiện y hệt: khi mở tool hệ thống cho Agent thì còn phải hoàn thiện thêm phần mô tả về tên thao tác, tham số vào, kết quả trả về và trạng thái lỗi; Windows App Actions cho phép ứng dụng khai báo các thao tác tái dùng được cùng input, output và kiểu nội dung của chúng; còn phía server thì qua dịch vụ MCP và các lệnh có cấu trúc mà thống nhất tham số gọi cùng định dạng kết quả cho các tool truy vấn log, quản lý dịch vụ và chẩn đoán. Mô tả interface càng rõ thì model càng dễ chọn tool và phán định thao tác đã xong chưa. Nhưng **mô tả rõ không đồng nghĩa với uỷ quyền đúng**; hai chuyện này bắt buộc phải thiết kế riêng.

Ở **mặt tách rời thứ tư**, tính thay thế được của backend vận hành đã có thực tiễn, ví dụ OpenSandbox cung cấp interface vòng đời môi trường và hỗ trợ cấu hình các backend như gVisor, Kata. Thứ thực sự còn thiếu là **khai báo ranh giới của ngữ nghĩa snapshot**: snapshot nội bộ khôi phục được cái gì, không khôi phục được cái gì — điều đó cần trở thành một phần của interface, chứ không phải một giả định mặc định của bên sử dụng.

### 30.4.2 Cái giá của việc tách rời

Tách rời không miễn phí; nó chuyển độ phức tạp từ code sang tổ hợp version và việc kiểm chứng.

**Cái giá thứ nhất là ma trận tổ hợp version.** Khi model, framework, phần hiện thực giao thức, runtime và driver phần cứng đều tiến hoá độc lập được, thì chi phí kiểm chứng và bảo trì các tổ hợp dùng được sẽ tăng theo. Phía sản phẩm hệ điều hành đã có những đánh đổi rõ ràng: NVIDIA duy trì quan hệ đi kèm giữa driver, thư viện giao tiếp và hệ điều hành quanh phần cứng DGX, và liệt kê version phần cứng cùng version phần mềm tối thiểu; Red Hat thì sắp xếp tách riêng việc thích ứng phần cứng nhanh với việc bảo trì Linux doanh nghiệp, trong đó các component chuyên dụng cho phần cứng mới dùng cách nâng cấp liên tục, chỉ hỗ trợ version mới nhất, không theo vòng đời dài của bản phân phối chuẩn và cũng không bảo đảm tương thích ngược giữa các version. Những sắp xếp kiểu này cho thấy "tổ hợp hỗ trợ được, chu kỳ hỗ trợ và đường nâng cấp" tự nó đã là một phần của năng lực bàn giao. Doanh nghiệp khi thiết kế Agent Platform cũng đối mặt bài toán cùng loại, chỉ khác là đối tượng đổi thành version model, version framework và version giao thức.

**Cái giá thứ hai là thay đổi hành vi ngầm.** Cập nhật hệ thống hay cập nhật model có thể đổi hành vi output mà không đổi interface. Apple trong phần ghi chú cập nhật cho Foundation Models của mình nhắc người phát triển hãy kiểm chứng lại hành vi của prompt sau khi bản cập nhật hệ thống mang tới thay đổi về model. Lời nhắc này vượt ra ngoài kịch bản desktop: nó cho thấy cuộc thảo luận về tính tương thích đã mở rộng từ API truyền thống sang version model và hành vi output, mà cái sau thì không mô tả được bằng chữ ký interface, chỉ phủ được bằng tập đánh giá.

**Cái giá thứ ba là chi phí đánh giá.** Muốn chứng minh năng lực trước và sau khi thay là tương đương thì phải chạy cùng một bộ đánh giá dưới cùng tải, cùng quyền hạn và cùng mục tiêu dịch vụ. Điều này nâng hệ đánh giá ở chương 21, 22 từ "biện pháp bảo đảm chất lượng" lên thành "tiền đề của việc tách rời": **không có đánh giá tái lập được thì tách rời chỉ là đẩy rủi ro từ giai đoạn thiết kế sang giai đoạn production.**

Vì vậy, tiêu chí mà cuốn sách này đưa ra cho việc tách rời là: một sự tách rời có thành lập hay không, không tuỳ thuộc vào việc có tồn tại định nghĩa interface hay không, mà tuỳ thuộc vào việc **có thay được phần hiện thực mà không phải viết lại ngữ nghĩa task hay không, và có dùng chung một bộ đánh giá để chứng minh hành vi sau khi thay nằm trong phạm vi chấp nhận được hay không.**

## 30.5 Chuẩn hoá và hệ sinh thái hoá Agent Platform

### 30.5.1 Sáu loại interface cần chuẩn hoá

Đối tượng của việc chuẩn hoá phải đến từ những vấn đề chung của nhiều sản phẩm, chứ không phải từ cấu trúc nội bộ của một phần hiện thực nào đó. Theo phân tích ở các mục trên, hiện có sáu loại interface đủ điều kiện chuẩn hoá.

**Mô hình đối tượng task và đối tượng vận hành.** Cần giao ước ngữ nghĩa, state machine và quan hệ tương hỗ giữa Run, Session, Checkpoint và Workspace, đặc biệt là ranh giới của "một lần chạy". Nó quyết định trực tiếp việc đo lường, giới hạn lưu lượng, truy sự cố và tính chi phí xuyên framework có thống nhất được không.

**Danh tính và uỷ quyền.** Cần giao ước cách biểu đạt danh tính Agent, việc truyền và kiểm chứng chuỗi uỷ nhiệm, cùng ngữ nghĩa của việc trao và thu hồi hợp đồng thuê. Trong các kịch bản cộng tác xuyên tổ chức, việc thiếu loại interface này khiến trách nhiệm không xác định được.

**Mô tả và khám phá năng lực.** Cần bổ sung, ngoài phần mô tả tool hiện có, các khai báo máy đọc được về tác dụng phụ, tính idempotent, mức rủi ro và điều kiện tiên quyết. Cuốn sách này cho rằng đây là loại metadata thiếu nhất hiện nay và cũng cho lợi ích trực tiếp nhất: nó quyết định việc retry và bù trừ có tự động hoá được không, và cũng quyết định chính sách phê duyệt có phân cấp được theo rủi ro thay vì cấu hình theo danh sách tên tool không.

**Ngữ nghĩa sự kiện quan sát được.** Cần giao ước các trường tối thiểu và cách liên kết nhân quả cho bốn loại sự kiện: gọi model, gọi tool, thay đổi trạng thái và phê duyệt — để Trace xuyên nhà cung cấp gộp lại phân tích được.

**Chuẩn đo đánh giá và chỉ số.** Cần giao ước cách tổ chức dataset, interface evaluator, định nghĩa chỉ số và cách biểu đạt cổng kiểm soát, để kết quả đánh giá của các sản phẩm khác nhau so sánh được với nhau.

**Hợp đồng môi trường thực thi.** Cần giao ước cách khai báo workspace, snapshot, outbound mạng, ranh giới file và tiến trình, cùng phạm vi mà snapshot khôi phục được và không khôi phục được.

### 30.5.2 Cơ chế hình thành chuẩn

Chuẩn hoá không phải viết quy phạm trước rồi ngồi chờ có hiện thực, mà là chắt phần chung ra từ nhiều hiện thực. Lĩnh vực hệ điều hành đã có ba cơ chế tham khảo được.

**Cơ chế thứ nhất là đóng góp lên upstream.** Loongson đã gửi phần tối ưu vector cho các toán tử cốt lõi như nhân ma trận, tích chập, chuyển vị lên upstream của ONNX Runtime, và từ version 1.17.0 thì upstream hỗ trợ native. Giá trị của nó là giảm chi phí thích ứng lặp ở từng bản phân phối và chi phí bảo trì lâu dài các patch riêng. Với hệ sinh thái Agent, cách làm tương ứng là đẩy các ngữ nghĩa đối tượng vận hành và quan sát mang tính đa dụng vào những phần hiện thực mã nguồn mở được dùng rộng rãi, chứ không phải duy trì các bản mở rộng riêng của mỗi bên.

**Cơ chế thứ hai là nhiều bên cùng xây.** Mooncake do trường đại học và nhiều doanh nghiệp cùng phát triển, với các bên tham gia gồm Đại học Thanh Hoa, Moonshot AI, Alibaba Cloud, Huawei Storage…; còn SysOM của cộng đồng OpenAnolis thì qua các component cộng đồng mà hỗ trợ việc tích hợp vận hành cho các sản phẩm khác nhau. Đặc trưng của những dự án loại này là doanh nghiệp lo phần thích ứng và bàn giao cho sản phẩm cụ thể, còn cộng đồng thì cộng tác cung cấp mã nguồn, interface và công cụ phát triển dùng chung được.

**Cơ chế thứ ba là đánh giá tái lập được.** Các nhà cung cấp, cộng đồng mã nguồn mở và tổ chức đánh giá có thể kết hợp nhiều phần hiện thực khác nhau để lập ra phương pháp test, rồi đánh giá hiệu năng, chức năng và bảo mật dưới cùng tải, cùng quyền hạn và cùng mục tiêu dịch vụ, hình thành các yêu cầu tương tác được và tái lập được. Cơ chế này đặc biệt quan trọng với hệ sinh thái Agent, vì lợi ích của hệ Agent phụ thuộc rất nhiều vào phân bố task và thiết lập quyền hạn; các chỉ số tách khỏi những điều kiện đó thì thiếu tính so sánh được.

Cách ANOLISA công bố hiệu quả của Token-less cung cấp một mẫu chuẩn đo tham chiếu được. Nó phân biệt hai loại dữ liệu: một loại là benchmark ở mức component, đưa ra riêng tỉ lệ nén và thời lượng xử lý cho tool response, tool schema và toàn chuỗi; loại kia là giá trị quan sát đơn lẻ, cho biết trong một task lập trình nào đó đã tiết kiệm khoảng 317 nghìn Token (khoảng 40,5%), và do AgentSight đo được. Quan trọng hơn, nó đồng thời khai báo ba ranh giới: phần tiết kiệm chỉ tác động lên tool response đi vào context, không đồng nghĩa với hoá đơn của cả phiên; kết quả thay đổi theo tải; và phương pháp ước lượng hiệu quả có tài liệu riêng nói rõ. Cuốn sách này cho rằng kiểu công bố ba đoạn **"con số + phạm vi áp dụng + nguồn đo"** nên trở thành chuẩn đo mặc định cho các chỉ số hiệu suất liên quan tới Agent. Ngược lại, một con số phần trăm đơn độc mà thiếu phạm vi áp dụng và nguồn đo thì dù cao tới đâu cũng không có giá trị để so sánh xuyên các hiện thực.

### 30.5.3 Từ "chạy được" tới "tương tác được"

Việc hệ sinh thái hoá chia thành ba tầng tiệm tiến, dùng để phán định việc chuẩn hoá ở một hướng nào đó đã tiến tới đâu.

**Tầng một là tương thích giao thức**: các phần hiện thực khác nhau gọi được lẫn nhau. MCP đã đạt tầng này ở việc tích hợp tool.

**Tầng hai là nhất quán ngữ nghĩa**: cùng một lời gọi trên các phần hiện thực khác nhau sinh ra cùng hậu quả quan sát được, gồm cả phân loại lỗi, ngữ nghĩa retry và phạm vi thay đổi trạng thái. Tầng này hiện phổ biến là chưa đạt, mà nguyên nhân chính là thiếu khai báo về tác dụng phụ và tính idempotent.

**Tầng ba là bằng chứng so sánh được**: bản ghi vận hành và kết quả đánh giá của các phần hiện thực khác nhau đặt được vào cùng một chuẩn đo để so. Đạt tầng này thì doanh nghiệp mới thực sự quản lý và thay thế được các Agent đến từ nhiều nguồn.

Cần nhắc rằng việc chuẩn hoá không nên đi trước sự hội tụ của các vấn đề chung. Cố định quá sớm phần hiện thực hiện tại thành quy phạm sẽ biến một đánh đổi kỹ thuật của một giai đoạn thành gánh nặng lâu dài. Ở những lĩnh vực mà ngữ nghĩa còn chưa rõ, cách làm thực dụng hơn là giao ước trước các trường quan sát được và định dạng khai báo, để khác biệt giữa các hiện thực trở nên đo được, rồi mới bàn tới chuẩn hành vi.

## 30.6 Từ thực thi đáng tin tới tự chủ có kiểm soát

### 30.6.1 Thang tự chủ

Chương 4 bàn độ tin cậy và việc kiểm chứng hoàn thành, chương 6 bàn quyền hạn và phê duyệt. Đặt hai thứ cạnh nhau thì có được một thang tự chủ. Tác dụng của nó không phải khuyến khích leo lên càng nhanh càng tốt, mà là làm rõ mỗi bậc bắt buộc phải đồng thời có những ranh giới và bằng chứng nào.

| Cấp | Hành vi hệ thống | Yêu cầu ranh giới thêm vào | Yêu cầu bằng chứng thêm vào |
| --- | --- | --- | --- |
| L1 Gợi ý | Sinh lệnh hay phương án, để con người thực thi | Không cần quyền thực thi | Nội dung gợi ý truy vết được |
| L2 Thực thi từng bước có phê duyệt | Xin phê duyệt trước mỗi lần thay đổi | Uỷ quyền ứng một-một giữa thao tác và tài nguyên | Input, output và bản ghi phê duyệt của mỗi lần thực thi |
| L3 Tự chủ có biên | Thực thi liên tục trong phạm vi tài nguyên, ngân sách và tập thao tác đã giới hạn | Hợp đồng thuê ngân sách, giới hạn thư mục làm việc, tách đọc — ghi | Trọn trajectory lời gọi và mức tiêu ngân sách |
| L4 Tự chủ với task dài | Thực thi lâu dài xuyên phiên, tạm dừng và khôi phục được | Uỷ quyền huỷ được theo dây chuyền, workspace lùi lại được | Phân biệt giữa kế hoạch, thao tác đã phát đi và kết quả đã xác nhận |
| L5 Tự chủ ở cấp tổ chức | Uỷ nhiệm và cộng tác xuyên hệ thống, xuyên đội | Chuỗi uỷ nhiệm kiểm chứng được, các điểm cưỡng chế xuyên miền | Bằng chứng quy thuộc trách nhiệm kiểm toán được xuyên tổ chức |

*Bảng 30-4 — Thang tự chủ cùng các yêu cầu ranh giới và bằng chứng tương ứng*

Bảng 30-4 hàm chứa một phán đoán: **trần của mức tự chủ không do năng lực model quyết định, mà do phạm vi thu hồi được và phạm vi chứng minh được quyết định.** Khi một thao tác vừa không huỷ được, vừa không chứng minh được kết quả, thì dù model có đáng tin tới đâu, việc giao nó cho thực thi tự chủ cũng thiếu căn cứ kỹ thuật.

### 30.6.2 Ranh giới cưỡng chế và ranh giới quan sát

Khi quản các Agent đến từ nhiều nguồn, lỗi diễn đạt dễ xảy ra nhất là nói "quan sát được" thành "kiểm soát được". Cuốn sách này khuyến nghị phân biệt nghiêm ngặt hai loại ranh giới trong tài liệu kiến trúc và mô tả sản phẩm.

Một ranh giới chỉ được gọi là **ranh giới cưỡng chế** khi thoả toàn bộ các điều kiện sau: phủ mọi đường khả dụng gồm lối vào task, việc lấy thông tin xác thực, truy cập mạng và DNS, file và giao tiếp liên tiến trình, việc tạo tiến trình con, việc gọi tool native, task nền và sub-Agent, cùng console tương tác; khi component phán định không khả dụng thì hành xử theo kiểu **thất bại là từ chối (fail-closed)**; và chứng minh được bằng test âm rằng các nỗ lực né tránh thực sự bị từ chối. Thiếu bất kỳ điều nào thì ranh giới đó chỉ được gọi là **ranh giới quan sát**, tức là phát hiện được hành vi vượt biên nhưng không ngăn được nó.

Tương tự, "tích hợp chỉ đọc" là một **kết luận cần chứng minh**, chứ không phải một thuộc tính khai báo được. Chỉ khi qua được test âm "đường ghi không tới được" thì mới gọi một phần tích hợp là chỉ đọc. Khi thiếu test đó, cách diễn đạt chính xác là "chưa quan sát thấy thao tác ghi".

Sự phân biệt này có hậu quả kỹ thuật trực tiếp. Chương 11 khi bàn việc tích hợp Agent dị cấu đã nói: framework bên ngoài, SDK và Agent bên thứ ba thường không sửa được, nên nền tảng chỉ dựng được ranh giới ở bên ngoài chúng. Lúc này, năng lực tích hợp chia được thành bốn loại.

**Cưỡng chế bằng ranh giới bên ngoài**: dựng điểm cưỡng chế bên ngoài bên được tích hợp, phủ tập đường đã chứng minh. Cần lưu ý, "đường đã phủ" biểu đạt một tập con đã chứng minh, chứ không phải mọi đường; và mỗi mục đều nên có một nguồn chính sách độc lập cùng một nguồn thu thập độc lập để xác nhận lẫn nhau.

**Trung gian bằng wrapper**: hiện thực phần trung gian bằng cách thay lối vào, dùng proxy hay hook; tính cưỡng chế phụ thuộc vào việc bên được tích hợp có né wrapper không.

**Chỉ quan sát**: chỉ thu thập được hành vi và cảnh báo hậu kỳ; cần qua test âm để xác nhận nó thực sự không có năng lực ghi.

**Không hỗ trợ**: vừa không cưỡng chế được vừa không quan sát đáng tin được; loại đường này chỉ nên đi vào phạm vi quản trị và chứng nhận, chứ không nên tuyên bố ra ngoài là đã được kiểm soát.

Khi mô tả năng lực tích hợp theo bốn loại này, nên đồng thời đưa ra bốn chiều: năng lực đó là thuộc tính cưỡng chế hay thuộc tính quan sát, ngữ nghĩa thao tác mà nó phủ, các đường thực thi mà nó phủ, và chất lượng bằng chứng. Giá trị của cách mô tả đó là khiến câu "chúng tôi đã quản được loại Agent này" trở thành một câu kiểm tra được.

ANOLISA dùng được để minh hoạ vì sao phải ghi chú từng mục thay vì tuyên bố tổng thể. Agent Sec Core của nó tích hợp vào các runtime Agent bên ngoài như Qoder CLI, Qwen Code, Codex qua hook, và áp chính sách ở các khâu prompt, gọi tool, kỹ năng và output; theo cách phân loại ở trên thì nó thuộc **trung gian bằng wrapper**: chính sách đúng là được định nghĩa bên ngoài bên được tích hợp, nhưng tính cưỡng chế thì tuỳ runtime đó có né hook không, nên cần test âm để khoanh phạm vi phủ. Còn AgentSight của nó quan sát dựa trên eBPF, không đòi sửa bên được quan sát, chất lượng bằng chứng cao, nhưng bản thân nó không chặn hành vi, nên theo phân loại thì thuộc **chỉ quan sát**. Hai năng lực của cùng một sản phẩm rơi vào hai loại khác nhau — điều đó cho thấy câu "có được kiểm soát không" không trả lời được theo tổng thể sản phẩm, mà chỉ trả lời được theo từng năng lực, từng đường và từng bằng chứng. Đây cũng là lý do vì sao "bằng chứng so sánh được" ở mục 30.5.3 là tầng khó nhất.

### 30.6.3 Thao tác không đảo ngược được, bù trừ và thu hồi

Mảnh cuối của việc tự chủ có kiểm soát là xử lý thất bại. Snapshot workspace giải quyết việc lùi trạng thái file, chứ không giải quyết tác dụng phụ xuyên hệ thống. Việc ghi database, gửi message, tạo ticket và khởi động lại dịch vụ từ xa nằm ngoài snapshot, và sẽ không tự động bị huỷ theo phần rollback nội bộ.

Vì vậy, việc khôi phục task dài cần ba thứ phối hợp: bản ghi thao tác phân biệt ba trạng thái kế hoạch, đã phát đi và đã xác nhận; khoá idempotent nhận ra được các lần gửi trùng; và hành động bù trừ tường minh cho các thao tác không đảo ngược được. Khi một lời gọi đã phát đi nhưng chưa có kết quả trả về, cách làm đúng là truy vấn trạng thái thực tế trước, rồi mới quyết định retry hay bù trừ, chứ không phát lại thẳng. Điều này cũng giải thích vì sao mục 30.3.1 liệt Evidence vào đối tượng quản lý cốt lõi: nó không chỉ là tài liệu kiểm toán, mà còn là **input của logic khôi phục.**

Trạng thái dùng chung còn mang tới một kiểu mất hiệu lực dễ bị bỏ qua: memory dài hạn hay tri thức dùng chung có thể vẫn giữ những kết luận đã hết hiệu lực. Sau khi phần mềm cập nhật, cấu hình thay đổi hay môi trường di chuyển, những kết luận trước đó vốn đúng sẽ thành sai lệch. Khi khôi phục task thì phải truy vấn lại trạng thái hiện tại, chứ không tin thẳng các kết luận lịch sử trong memory. Cơ chế quản trị tài sản và chống thoái hoá mà chương 5 bàn tới, ở tầng hệ thống thì tương ứng với yêu cầu: **dịch vụ memory bắt buộc phải hỗ trợ cập nhật, xoá và kiểm soát truy cập.**

Ngoài ra, sau khi model tham gia vào việc ra quyết định, thì log, trang web và output của tool vừa là tài liệu chẩn đoán, vừa có thể chứa văn bản dụ dỗ thao tác. Hệ thống phải coi những nội dung đó là dữ liệu cần phân tích, và không được dựa vào đó mà mở rộng quyền hạn; còn phía tool thì vẫn phải kiểm theo danh tính lời gọi xem thay đổi nào là thực thi được. Tính chất của loại rủi ro này là mới, nhưng thứ nó khuếch đại thường là những vấn đề cũ: quyền hạn quá lớn, cấu hình sai và các thao tác nguy hiểm chạy lặp được — và khi phạm vi thực thi tự động mở rộng thì hậu quả càng nghiêm trọng hơn.

## 30.7 Những vấn đề mở hướng tới kiến trúc AI native giai đoạn sau

Những phần bàn ở trên đều là phần đã có hiện thực hoặc đã có hướng rõ ràng. Bảy vấn đề dưới đây hiện chưa có lời giải được công nhận; cuốn sách này đưa ra cho mỗi vấn đề một dấu hiệu để phán định tiến triển, để bạn đọc tự hiệu chỉnh trong một tới hai năm tới.

**Vấn đề một: đối tượng Run nên rơi vào tầng nào.** Đối tượng task có thể do control plane của nền tảng nắm giữ, cũng có thể hạ xuống thành dịch vụ vận hành của host, thậm chí đi vào cơ chế nền của miền thực thi. Dấu hiệu phán định là: có xuất hiện một ngữ nghĩa trạng thái task được nhiều framework cùng áp dụng không, và ngữ nghĩa đó có còn được host quan sát và ràng buộc khi framework không hợp tác không.

**Vấn đề hai: danh tính Agent và chuỗi uỷ nhiệm truyền xuyên tổ chức ra sao.** Khi task uỷ nhiệm vượt ranh giới tổ chức, thì danh tính, phạm vi uỷ quyền và sự quy thuộc trách nhiệm cần truyền đi một cách kiểm chứng được. Dấu hiệu phán định là: có xuất hiện một định dạng chứng chỉ uỷ nhiệm mà bên thứ ba độc lập kiểm chứng được không, cùng cơ chế thu hồi đi kèm.

**Vấn đề ba: tác dụng phụ và tính idempotent có trở thành metadata năng lực máy đọc được không.** Đây là tiền đề cho việc retry, bù trừ tự động và phê duyệt phân cấp theo rủi ro. Dấu hiệu phán định là: các giao thức tool chủ đạo có đưa vào trường về tác dụng phụ và tính idempotent không, và runtime có thực sự đổi hành vi retry theo các trường đó không.

**Vấn đề bốn: điểm tối ưu trên đường cong chi phí — cô lập của sandbox và workspace dưới tải Agent.** Cô lập ở mức tiến trình, application kernel, máy ảo nhẹ và container runtime mỗi thứ có chi phí khởi động, mức chiếm khi rảnh và cường độ cô lập khác nhau. gVisor xử lý system call của ứng dụng trong sandbox bằng một application kernel ở user space; Occlum hiện thực một library OS bên trong vùng thực thi tin cậy; còn Asterinas thì dùng kiến trúc Rust framekernel để thu nhỏ phần nền tin cậy trong khi vẫn giữ tương thích Linux ABI. Dấu hiệu phán định là: có xuất hiện các đánh giá tái lập được đồng thời công bố thông lượng tạo, mức chiếm khi rảnh, độ trễ khôi phục và cường độ cô lập dưới tải Agent điển hình không.

**Vấn đề năm: trạng thái dùng chung làm sao vừa tái dùng được vừa không vượt biên.** Việc tái dùng KV Cache, memory dài hạn và kho kỹ năng giảm chi phí rõ rệt, nhưng lại đưa trạng thái vốn chỉ giới hạn trong một request vào môi trường dùng chung. Cách làm hiện nay là giới hạn phạm vi truy cập theo tenant và theo task, chẳng hạn dịch vụ suy luận dùng một tham số phân miền cache tuỳ chọn để kiểm soát phạm vi tái dùng của prefix cache, và để một lối vào tin cậy gắn danh tính tenant vào miền dùng chung tương ứng. Dấu hiệu phán định là: cơ chế phân miền có trở thành cấu hình mặc định thay vì tuỳ chọn không, và có biện pháp phát hiện vượt quyền tương ứng không.

**Vấn đề sáu: việc đánh giá đi từ dataset offline tới benchmark ở cấp hệ thống ra sao.** Việc đánh giá hiện nay chủ yếu lấy dataset task làm đối tượng, trong khi lợi ích của Agentic OS lại thể hiện ở lượng gánh được, thời gian khôi phục, mức nhiễu và chi phí đơn vị. Dấu hiệu phán định là: có hình thành một phương pháp công khai đánh giá đồng thời chất lượng, chi phí và bảo mật dưới cùng tải, cùng quyền hạn và cùng mục tiêu dịch vụ không.

**Vấn đề bảy: ranh giới thay đổi của việc tự tiến hoá.** Chương 23 bàn vòng khép kín từ Trace tới patch; trong đó một vấn đề chưa giải là Agent có được sửa chính Skill, Prompt và Harness của mình không, và với bằng chứng thế nào thì được phép. Dấu hiệu phán định là: có xuất hiện một bộ luật phân cấp thay đổi và luật điều kiện vào được chấp nhận rộng rãi không, để một phần thay đổi tự động phát hành được mà không cần con người phê duyệt, đồng thời vẫn giữ khả năng rollback.

Ngoài bảy vấn đề đó còn một vấn đề nền tảng hơn: việc tái cấu trúc cơ chế nền hướng tới tải AI có thành lập được không. Phía nghiên cứu đã có hướng cụ thể: LithOS thiết kế lại phần quản lý tài nguyên GPU cho tải machine learning, đề xuất việc lập lịch mịn và tách phần thực thi hàm nhân toán tử; còn Agent libOS thì quản lý trần uỷ quyền, ngân sách và bản ghi thao tác ngay trong runtime, phân biệt các khâu chuẩn bị, phát đi và quyết toán của lời gọi bên ngoài, nhằm giảm việc phát lại mù quáng khi khôi phục. Đặc trưng chung của các công trình này là đưa thẳng các đối tượng liệt ở mục 30.3.1 vào cơ chế nền, thay vì để tầng trên ánh xạ lặp đi lặp lại về các đối tượng hệ thống sẵn có. Nhưng hiện chúng đều giới hạn trong một phạm vi nhất định và chưa hình thành hiện thực đa dụng. Phán đoán của cuốn sách này là: loại tái cấu trúc này nhiều khả năng sẽ được kiểm chứng trước trong các miền thực thi chuyên dụng — ví dụ các task có phụ thuộc và phạm vi quyền hạn rõ ràng như sửa và test code, phân tích dữ liệu, thực thi tool — rồi mới mở rộng dần phạm vi tương thích.

## 30.8 Tóm tắt chương

Quay lại điểm xuất phát của cuốn sách. Phán đoán mà chương 1 nêu ra là: model là hạt nhân nhận thức, nhưng độ tin cậy thì không thể gửi gắm vào chính model. Suốt 29 chương, theo phán đoán đó, chúng tôi đã triển khai câu "ngoài model ra còn cần gì nữa" thành các yêu cầu kỹ thuật của năm giai đoạn: thiết kế kiến trúc, xây dựng, vận hành, quản trị và tối ưu.

Phán đoán mà chương này bổ sung là: khi trong cùng một tổ chức chạy nhiều Agent, dùng nhiều framework và phục vụ nhiều tenant, thì những yêu cầu kỹ thuật đó sẽ chuyển từ "mỗi ứng dụng tự hiện thực" thành "năng lực hệ thống cần được dùng chung". Sự thay đổi này đang diễn ra đồng thời theo hai hướng: một là năng lực nền tảng hạ xuống thành interface hệ thống, hai là hệ điều hành đi lên gánh tải Agent. Đối tượng mà hai hướng gặp nhau là task, môi trường, uỷ quyền và bằng chứng; chương này quy nạp chúng thành chín loại đối tượng quản lý cốt lõi cùng cấu trúc trách nhiệm ba tầng, và đưa ra ba tiêu chí hạ xuống là tính tái dùng, tính cưỡng chế và tính kiểm chứng được.

Điều đó cũng quyết định rằng trọng tâm công việc ở giai đoạn sau không nằm ở việc nêu ra thêm những danh từ kiến trúc mới, mà nằm ở việc chuyển các hạn chế đã nhận diện được thành cơ chế cưỡng chế được, kiểm chứng được và bảo trì được. Một năng lực có thực sự thành lập hay không, căn cứ phán định luôn là ba câu hỏi cụ thể: **nó có còn hiệu lực khi bên bị ràng buộc không hợp tác không; hiệu quả của nó có chứng minh được bằng bằng chứng độc lập không; và nó có bảo trì được liên tục qua các version không.** Agentic OS có trở thành một chủng loại sản phẩm ổn định hay không thì tuỳ vào việc ba câu hỏi đó nhận được câu trả lời khẳng định trên bao nhiêu con đường.
