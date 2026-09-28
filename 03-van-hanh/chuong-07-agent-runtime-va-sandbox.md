# Chương 7 — Agent Runtime và Sandbox

Một Agent hướng tới việc thực thi task cần kết hợp suy luận của model với thao tác lên môi trường. Model lo việc sinh kế hoạch và lệnh thao tác; còn đọc ghi file, chạy chương trình, tương tác trang web và kiểm chứng kết quả thì do môi trường thực thi cụ thể hoàn tất. Khi tool nhiều lên và task dài ra, môi trường thực thi còn phải hỗ trợ chia sẻ dữ liệu xuyên bước, duy trì state xuyên nhiều lượt tương tác, và chạy độc lập nhiều task.

**Sandbox** cung cấp cho những thao tác này một không gian làm việc lập trình được và có kiểm soát. Nó tổ chức tài nguyên tính toán, hệ thống file, dependency chạy, cùng các lối vào công cụ như terminal, trình duyệt hay desktop vào một môi trường được cấp phát theo nhu cầu, giúp Agent thực hiện thao tác, kiểm tra kết quả và điều chỉnh hành động tiếp theo dựa trên phản hồi. Cô lập task, kiểm soát truy cập và quản lý tài nguyên ràng buộc phạm vi thao tác; còn cơ chế workspace và giữ state thì hỗ trợ task tiếp tục tiến triển.

Các loại task có yêu cầu khác nhau với môi trường thực thi. Thực thi tool quan tâm tới việc môi trường có sẵn sàng nhanh không; task chạy dài quan tâm tới việc các thành quả đã có còn dùng tiếp được không; huấn luyện và đánh giá quan tâm tới việc triển khai hiệu quả một lượng lớn thử nghiệm độc lập. Tái sử dụng template, workspace dùng chung, ngủ đông – khôi phục, và snapshot – fork lần lượt đáp ứng những nhu cầu này. **Agent Runtime** chịu trách nhiệm đưa việc tạo, kết nối, chờ, khôi phục và thu hồi môi trường vào vòng đời task, để Sandbox gánh được ứng dụng Agent một cách liên tục.

## 7.1 Từ gọi tool đến không gian làm việc lập trình được

### 7.1.1 Sandbox cung cấp những gì

Trong Agentic Application, Sandbox là môi trường thực thi được cấu hình theo nhu cầu task, có ranh giới cô lập và vòng đời rõ ràng. Một môi trường điển hình gồm không gian user của hệ điều hành, tài nguyên tính toán, hệ thống file, ngôn ngữ và dependency, cùng các lối vào thao tác như terminal, trình duyệt hay desktop. Nền tảng còn có thể cấu hình cho nó phần truy cập mạng, mount dữ liệu, credential định danh, cách quan sát và cách giữ state. Những năng lực đó cùng quyết định **Agent làm được gì, làm ở đâu, và sau khi task kết thúc thì để lại gì.**

Năng lực lập trình được giúp Agent tổ chức các bước thao tác trong phạm vi đã uỷ quyền. Khi xử lý một nhóm file có định dạng không đồng nhất, Agent có thể xem mẫu, sinh script chuyển đổi, cài thư viện parse cần thiết, rồi sửa script theo kết quả chạy. Khi phát triển ứng dụng, nó có thể kết hợp terminal, chương trình test và trình duyệt để hoàn tất việc sửa và kiểm chứng. Loại môi trường này phù hợp với những task mà **đường đi thao tác phải được xác định dần trong lúc thực thi.** Còn với các hành động nghiệp vụ có tham số rõ ràng, hành vi cố định, thì ứng dụng gọi thẳng API sẵn có là được, không cần tạo sandbox cho mỗi lần truy vấn.

Kiểm soát thực thi quyết định những thao tác này có vào được production hay không. Nền tảng giới hạn task trong phần tài nguyên tính toán, workspace và phạm vi truy cập đã cấp, tránh để dependency, process và file tạm của một dự án làm nhiễu dự án khác, và thu hồi tài nguyên sau khi task kết thúc. **Cô lập là nền tảng**, nhưng môi trường có dùng được hay không còn phụ thuộc vào các khâu cài dependency, truy cập file, khởi động dịch vụ và trả kết quả. Code, trình duyệt, desktop và workspace có thể do một dịch vụ môi trường thống nhất cung cấp, và được quản lý qua interface vòng đời.

![image](../assets/imgs/chapter-07/image-001.png)

*Hình 7-1 — Sandbox hỗ trợ vòng khép kín thực thi thật và phản hồi*

Trong hình 7-1, model và tầng orchestration Harness quyết định hành động kế tiếp; Sandbox thực thi lệnh rồi trả về exit status, lỗi, thay đổi file hay kết quả trang. Tầng orchestration dựa vào đó để phán định là sửa tiếp, đổi cách khác, hay kết thúc task. Sandbox giúp những phán đoán này có **căn cứ vận hành kiểm tra được**; còn kết quả nghiệp vụ có đúng hay không thì vẫn phải do test, luật, bộ đánh giá hoặc nghiệm thu của người dùng xác nhận.

### 7.1.2 Hai kiểu quan hệ triển khai và ba loại workload điển hình

Agent và sandbox có hai kiểu quan hệ triển khai phổ biến. **Agent use sandbox** nghĩa là logic orchestration của Agent nằm ngoài sandbox, gọi code, trình duyệt hay tool khác bên trong qua interface. **Agent in sandbox** nghĩa là process Agent và chuỗi tool chính cùng chạy bên trong sandbox, còn dịch vụ suy luận model vẫn có thể ở xa. Kiểu trước tiện cho việc thêm năng lực thực thi vào một ứng dụng sẵn có; kiểu sau phù hợp với những task cần môi trường dự án trọn vẹn, process chạy liên tục và sự phối hợp tool phức tạp.

Huấn luyện và đánh giá là một chiều quan sát khác. **Agent RL/Eval** quan tâm tới tương tác môi trường theo lô, lấy mẫu quỹ đạo, reset và lặp lại thí nghiệm; nó có thể dùng bất kỳ kiểu quan hệ triển khai nào ở trên. Vì vậy, use, in và RL/Eval có thể được bàn như **ba loại workload điển hình**, nhưng **không** nên hiểu thành ba kiến trúc kỹ thuật loại trừ nhau, và cũng không cố định ứng với một version sản phẩm nào.

![image](../assets/imgs/chapter-07/image-002.png)

*Hình 7-2 — Quan hệ triển khai giữa Agent và Sandbox cùng các loại workload*

| Workload điển hình | Task dùng môi trường ra sao | Giá trị hàng đầu | Mối quan tâm chính |
| --- | --- | --- | --- |
| Thực thi tool: Agent use sandbox | Orchestration ở ngoài, gọi code, trình duyệt hay desktop theo từng bước | Thêm năng lực thao tác thật và kiểm chứng kết quả cho Agent sẵn có | Độ trễ tới lúc dùng được lần đầu, năng lực tool, cô lập giữa các task |
| Task chạy dài: Agent in sandbox | Process Agent và chuỗi tool cùng dùng một workspace liên tục | Kéo dài state của dự án, hỗ trợ sửa nhiều lượt và task dài | Tính liên tục của phiên, hiệu quả khôi phục, chi phí chờ |
| Huấn luyện và đánh giá: Agent RL/Eval | Chạy theo lô các tương tác độc lập, thu thập quỹ đạo và kết quả | Thăm dò song song, tái dùng phần chuẩn bị môi trường, so sánh kết quả ổn định | Thông lượng môi trường, reset và fork, khả năng tái lập thí nghiệm |

*Bảng 7-1 — Đặc điểm task và giá trị của ba loại workload điển hình*

Bảng đưa ra các tổ hợp điển hình; sandbox dùng cho tool cũng có thể duy trì phiên dài, và Agent chạy trong sandbox cũng có thể chỉ xử lý một task ngắn. **Việc lựa chọn nên xuất phát từ đặc điểm task, rồi mới xác định template, state và chính sách co giãn.**

## 7.2 Thực thi tool: để Agent hoàn thành thao tác thật

### 7.2.1 Code và xử lý dữ liệu

Sandbox code cung cấp cho Agent interpreter, dòng lệnh, dependency và khả năng đọc ghi file. Lấy phân tích dữ liệu kinh doanh làm ví dụ: sau khi người dùng nộp nhiều file dữ liệu, Agent trước hết kiểm tra tên cột và giá trị bất thường, rồi viết script để làm sạch, gộp và thống kê, xuất ra biểu đồ cùng file kết quả. Lỗi thực thi được trả về vòng lặp task; Agent dựa vào đó để sửa ánh xạ trường hoặc logic tính toán, chạy lại và kiểm tra output. Phần bàn giao cuối cùng gồm file input, quá trình xử lý và sản phẩm kết quả, để người dùng đối chiếu lại kết luận phân tích.

Sandbox code cho phép tổ hợp các bước xử lý một cách linh hoạt ngay trong task. Đội phát triển không phải viết sẵn tool chuyên dụng cho từng cấu trúc file và từng quy trình phân tích; Agent có thể viết và chạy chương trình trong một môi trường có kiểm soát. Những người dùng khác nhau dùng workspace và dependency riêng, giảm nhiễu do xung đột version thư viện, dùng lẫn file và process sót lại. Những phép tính tần suất cao, ổn định thì có thể tích tụ tiếp thành tool cố định; còn phần thay đổi nhiều, cần thăm dò trong lúc chạy thì để sandbox gánh.

Loại task này cần **nghiệm thu dựa trên sản phẩm**. Lệnh chạy thành công chỉ nghĩa là chương trình thoát bình thường; còn phải đối chiếu phạm vi dữ liệu, file output, các chỉ số thống kê then chốt và tính dễ đọc. Version input, script thực thi và log cần thiết nên được giữ lại theo task, để người dùng đối chiếu kết luận và để các task sau tái dùng quá trình xử lý.

### 7.2.2 Trình duyệt, desktop và workspace dùng chung

Sandbox trình duyệt phù hợp với các task cần trạng thái trang thật — ví dụ kiểm tra trang web đã sinh ra, truy hồi tài liệu trên các site đã được phép, xử lý upload–download file, và kiểm chứng luồng thao tác của người dùng. Agent quan sát trang, click control và đọc kết quả qua interface điều khiển trình duyệt; ảnh chụp trang, file tải về và log chạy có thể cùng tạo thành phản hồi. Sandbox desktop thì cung cấp thêm năng lực thao tác giao diện đồ hoạ, dùng cho các quy trình phụ thuộc phần mềm desktop hoặc chưa có API phù hợp. Hệ điều hành, ứng dụng và interface tương tác cụ thể do template được chọn và năng lực nền tảng quyết định.

Cung cấp riêng lẻ trình duyệt hay interpreter thì hoàn thành được các thao tác cục bộ, nhưng task xuyên nhiều tool còn cần **workspace dùng chung**. Lấy "tải dữ liệu nghiệp vụ về rồi sinh một báo cáo" làm ví dụ: trình duyệt lưu dữ liệu vào thư mục task, code interpreter đọc thẳng file đó để xử lý, trang sinh ra lại được trình duyệt mở lên kiểm tra, và báo cáo cuối được export từ cùng workspace ấy. Môi trường **All-in-One (AIO)** đặt trình duyệt, code và terminal vào một không gian làm việc chia sẻ file được, giảm bớt công sức upload–download qua lại, chuyển đổi đường dẫn và khớp version giữa các bước.

![image](../assets/imgs/chapter-07/image-003.png)

*Hình 7-3 — Workspace dùng chung hỗ trợ task xuyên nhiều tool*

Phạm vi chia sẻ phải tương xứng với task. Các tool của cùng một task có thể truy cập những file cần phối hợp, còn tenant và dự án khác nhau thì vẫn phải tách riêng; nếu các nhánh song song cùng sửa một file thì phải có quy tắc hợp nhất rõ ràng. Với các task đơn giản chỉ dùng code, một template nhẹ thường phù hợp hơn; môi trường tổ hợp chỉ hợp lý khi lợi ích từ việc liên thông nhiều tool đủ bù cho chi phí dung lượng image, khởi động và bảo trì.

### 7.2.3 Môi trường chạy của MCP Server và Skill

MCP mô tả *tool được khám phá và gọi ra sao*; Skill cung cấp tri thức, các bước hoặc script tái sử dụng được cho một loại task. Khi thực thi, chúng vẫn có thể phụ thuộc vào một ngôn ngữ cụ thể, một chương trình dòng lệnh, file cục bộ hay trình duyệt. Sandbox tổ chức những phụ thuộc ấy thành một môi trường khởi động được, giúp các tool vốn chỉ chạy được trên một máy dev nào đó nay có thể cấp phát theo người dùng hay theo task, và giải phóng sau khi dùng xong.

Ví dụ, một MCP Server tương tác qua stdin/stdout có thể khởi động cùng sandbox, và tầng adapter sẽ chuyển request từ xa thành input của process rồi trả kết quả về cho bên gọi. Việc chuyển đổi giao thức do adapter hoặc gateway làm; sandbox lo việc gánh process, dependency và workspace. Khi hai thứ phối hợp, nền tảng có thể thu hồi hoặc cho ngủ môi trường khi tool tạm thời không ai dùng, mở rộng theo nhu cầu khi request tăng, đồng thời vẫn giữ ranh giới giữa các version tool và dữ liệu người dùng khác nhau.

| Loại môi trường | Task điển hình | Sản phẩm của task | Lợi ích trực tiếp mà sandbox mang lại |
| --- | --- | --- | --- |
| Code | Làm sạch dữ liệu, chạy script, build và test | File kết quả, biểu đồ, báo cáo test | Tổ chức chương trình theo task, tái dùng dependency và nhận phản hồi thực thi |
| Browser | Tương tác trang, download, preview và kiểm tra web | Kết quả trang, file, ảnh chụp màn hình | Kiểm chứng trực tiếp trang thật và hiệu quả thao tác |
| Computer | Thao tác phần mềm desktop, hoàn tất quy trình GUI | Kết quả trong ứng dụng, file export | Phủ được những đường đi task thiếu API phù hợp |
| AIO | Task liên tục gồm tải về, tính toán, sinh ra và preview | Sản phẩm bàn giao tổng hợp, kiểm tra được | Nhiều tool dùng chung file, giảm chi phí nối các bước |
| Môi trường MCP / Skill | Chạy tool và script task có dependency cục bộ | Kết quả tool, file nghiệp vụ cần thiết | Biến dependency của tool thành môi trường chạy cấp phát được, bảo trì được |

*Bảng 7-2 — Các môi trường sandbox thường gặp và giá trị với task*

Các loại môi trường này có thể kết hợp, và cũng có thể dùng lại cùng một bộ hạ tầng. Nền tảng quản lý thống nhất vòng đời, image, lưu trữ và năng lực quan sát, rồi cung cấp cho ứng dụng lối vào thao tác tương xứng với task. **Đội ứng dụng lo phán định thao tác có đáp ứng yêu cầu task hay không; đội nền tảng lo việc tạo, kết nối và thu hồi môi trường.**

## 7.3 Task chạy dài: để Agent làm việc liên tục trong cùng một không gian

### 7.3.1 Từ một lần gọi mở rộng thành một dự án

Task chạy dài thường xoay quanh một dự án. Khi phát triển một ứng dụng, Agent sẽ lấy repository, cài dependency, sửa code, chạy test, khởi động dịch vụ preview, rồi chờ người dùng xem. Lần sau khi người dùng nêu ý kiến sửa, thì code, dependency và cấu trúc dự án của lần trước phải vẫn còn dùng được. **Agent in sandbox** cho phép process Agent, tool dòng lệnh và trình duyệt cùng chạy quanh một workspace, tránh việc mỗi bước lại phải ghép lại môi trường từ đầu.

Trợ lý cá nhân trên cloud và "nhân viên số" cũng cần một môi trường làm việc liên tục. Chúng có thể xử lý tài liệu xuyên nhiều lượt tương tác, duy trì tài liệu dự án, dùng các hệ thống đã được cấp quyền, và giữ lại những kết quả trung gian chưa bàn giao. Thứ người dùng quan tâm là **lần sau có tiếp tục được từ thành quả đã có hay không**; còn nền tảng thì cần hiện thực tính liên tục đó thông qua định danh phiên ổn định, trạng thái task khôi phục được và workspace được giữ theo nhu cầu. **Chỉ duy trì process còn sống thì không gánh trọn được những trách nhiệm này.**

Ví dụ, một code Agent đã cài tool, sửa file và sinh sản phẩm trung gian, rồi vào giai đoạn chờ model. Nếu nền tảng thu hồi instance chỉ vì CPU thấp, trong khi những thành quả đó chỉ lưu bên trong instance, thì request kế tiếp chỉ còn cách bắt đầu lại từ đầu. Muốn vừa giữ co giãn vừa kéo dài dự án, thì **trạng thái task và workspace phải được lưu độc lập với vật mang hiện tại**, và nối lại được sau khi instance bị thay.

Cộng tác multi-agent còn làm tăng nhu cầu phân nhánh. Nhiều bên thực thi có thể xuất phát từ cùng một version dự án, mỗi bên thử hiện thực hoặc kiểm chứng trong workspace riêng, rồi bên điều phối so sánh kết quả và hợp nhất. Cách này giảm được việc ghi đè file lẫn nhau, xung đột cổng và nhiễu do dependency thay đổi. **Sandbox cung cấp điều kiện thực thi độc lập; còn việc chẻ task, quyết định cộng tác và hợp nhất thì vẫn do tầng orchestration Harness gánh.**

### 7.3.2 Session affinity và mount workspace

Tính liên tục của task dựa vào hai loại ánh xạ. Loại thứ nhất **liên kết phiên logic với môi trường thực thi**: khi request mang theo một định danh phiên ổn định đi tới, tầng routing tìm môi trường sẵn có hoặc khởi động quy trình khôi phục. Loại thứ hai **liên kết định danh task với workspace**: nền tảng mount thư mục dữ liệu tương ứng cho môi trường dựa trên quan hệ tenant, người dùng và dự án đã được xác thực. Session affinity lo mối liên kết giữa request với môi trường; dynamic mount lo mối liên kết giữa môi trường với dữ liệu.

Hai ánh xạ này không nhất thiết tương ứng một-một. Nhiều lượt request của cùng một dự án có thể dùng lại một môi trường; cũng có thể sau khi instance cũ được giải phóng thì tạo instance mới và mount lại file dự án. Trợ lý ở mức người dùng có thể có workspace cá nhân, còn các dự án độc lập thì cần chia nhỏ hơn. Chọn độ hạt nào phụ thuộc vào ranh giới dữ liệu, cách chạy đồng thời và phạm vi ảnh hưởng của sự cố. **Chỉ ghép mã người dùng vào tên thư mục không thay thế được việc server kiểm tra quyền sở hữu và quyền truy cập workspace.** Lối vào bên ngoài có thể giữ ổn định, và tầng routing lo việc phân giải định danh logic tới môi trường hiện tại; bên gọi **không nên** lấy địa chỉ tạm của một container nào đó làm lối vào lâu dài.

File workspace và trạng thái task gánh những trách nhiệm khác nhau. Mã nguồn, file tải về và sản phẩm trung gian thì lưu trong workspace; còn mục tiêu task, các bước đã hoàn thành, những việc chờ xác nhận và kết quả thao tác bên ngoài tạo thành **sự thật về task**, và phải do kho state lưu. Sau khi khôi phục bộ nhớ và đĩa, tầng orchestration vẫn phải xác nhận tiến độ task, để tránh gửi lại thao tác đã gửi hoặc bỏ sót bước kế tiếp.

Các tool và dependency được thêm vào trong lúc chạy cần có cách khôi phục rõ ràng. Dependency dự đoán trước được thì cố định vào template có version; dependency tạm thì cố cài vào thư mục dự án có lớp bền vững phủ lên. Những thay đổi trong đường dẫn hệ thống thì phải giữ lại các bước cài dựng lại được, hoặc lưu bằng một snapshot môi trường phủ được phạm vi đó. **Mount workspace chỉ khôi phục những file nằm trong phạm vi nó phủ; không thể dựa vào đó mà kết luận mọi thay đổi môi trường đã được khôi phục.**

Khi instance khôi phục, phải đồng thời đối chiếu tính đọc được của state, quyền sở hữu, cùng tính toàn vẹn của các file và version cần thiết. Nếu kiểm tra không đạt, instance phải giữ trạng thái khôi phục thất bại hoặc chờ, **không được lấy một workspace rỗng làm kết quả khôi phục để bàn giao.** Thời hạn lưu của trạng thái task và workspace nên được đặt độc lập với instance tính toán, tránh việc thu hồi instance lại xoá mất dữ liệu vẫn còn dùng.

### 7.3.3 Chờ, ngủ đông và tiếp tục task

Nhu cầu tính toán trong một phiên dài không liên tục. Agent có thể đang chờ model trả về, chờ người dùng xác nhận, chờ trang web phản hồi hoặc chờ sự kiện nghiệp vụ kế tiếp. Giữ nguyên toàn bộ tài nguyên tính toán sẽ khiến chi phí tăng theo thời gian giữ phiên; còn cứ mỗi lần chờ lại huỷ môi trường thì lại tăng chi phí cài dependency và khôi phục context. **Ngủ đông và khôi phục** giảm mức chiếm tài nguyên ở giai đoạn chờ trong khi vẫn giữ state cần thiết, và khôi phục thực thi khi sự kiện kế tiếp tới.

![image](../assets/imgs/chapter-07/image-004.png)

*Hình 7-4 — Chờ, ngủ đông và tiếp tục trong phiên dài*

Trong hình 7-4, **lối vào đánh thức nằm bên ngoài sandbox đang ngủ.** Timer, lối vào message hoặc component routing request nhận sự kiện trước, rồi mới khôi phục môi trường và bàn giao task; bản thân Agent đang ngủ **không** tiếp tục chạy vòng lặp task. Những giai đoạn cần tính toán liên tục, cần phục vụ tức thời hoặc cần hoàn tất job nền thì phải giữ tài nguyên tương ứng ở trạng thái hoạt động. Việc phán định có ngủ được hay không cũng không thể chỉ nhìn "không có request mới", mà còn phải kiểm tra công việc đang chạy và các thao tác chưa hoàn tất. Trước khi task vào trạng thái chờ, tầng orchestration phải lưu điểm tiếp tục và điều kiện chờ; các phần tăng thêm quan trọng phải được lưu kịp thời theo tiến độ thực thi, **không được để dồn tới lúc nhận tín hiệu kết thúc mới ghi ra.**

Sau khi môi trường khôi phục, phải kiểm tra lại tính khả dụng của nó. Ngay cả khi file được giữ nguyên, thì kết nối bên ngoài, credential tạm và trạng thái đăng nhập từ xa vẫn có thể đã đổi; cổng dịch vụ cũng cần kiểm tra. Tài liệu về persistence của E2B phân biệt trạng thái đang chạy, tạm dừng và huỷ, đồng thời nói rõ việc tạm dừng sẽ ngắt các kết nối bên ngoài; còn tài liệu về ngủ đông của Alibaba Cloud yêu cầu kiểm tra file, process và cổng then chốt sau khi khôi phục. Vì vậy, **kết quả khôi phục phải lấy việc "task có tiếp tục thực thi được không" làm căn cứ; interface trả về thành công chỉ là một khâu trong đó.**

### 7.3.4 Tiếp tục ra sao sau khi instance gặp sự cố

Ngoài việc chủ động ngủ, task chạy dài còn phải xử lý việc process thoát và node mất liên lạc. Trước khi khôi phục, phải phân biệt **sự cố môi trường thực thi** với **sự cố dịch vụ phụ thuộc**. Sự cố instance thực thi thì xử lý được bằng cách đổi vật mang và khôi phục state; nhưng khi kho lưu trữ cần thiết không dùng được, thì phải tạm dừng việc đọc ghi liên quan và khôi phục dịch vụ lưu trữ — **dựng lại instance liên tục không xoá được sự cố lưu trữ.**

Mất heartbeat chỉ nghĩa là nền tảng tạm thời không quan sát được instance; **process cũ vẫn có thể đang chạy.** Với những lần thực thi cần sửa tuần tự cùng một task hoặc cùng một workspace, phải xác nhận instance cũ đã dừng, hoặc làm cho quyền ghi của nó mất hiệu lực, rồi mới cho instance mới ghi tiếp. Nền tảng có thể dùng **thế hệ thực thi (generation)** để phân biệt hai lần chạy trước và sau khi tiếp quản, và để kho lưu trữ hoặc lối vào ghi được bảo vệ từ chối thế hệ cũ; cơ chế này thường gọi là **fencing**. **Chỉ cập nhật con số ở mặt phẳng điều khiển thì không ngăn được process cũ tiếp tục gây ảnh hưởng.**

Với những thao tác đã gửi tới hệ thống bên ngoài, khi khôi phục còn phải đối chiếu kết quả thực thi của chúng. Ví dụ, Agent đã gửi lệnh build nhưng mất liên lạc trước khi nhận kết quả, thì instance mới phải truy vấn trạng thái theo định danh build gốc rồi mới quyết định chờ, đọc kết quả hay retry. Những thao tác không lặp lại an toàn được thì khi kết quả chưa rõ phải giữ trạng thái chờ đối chiếu, và khi cần thì chuyển cho con người xử lý. **Chỉ khi task tiếp tục tiến triển được từ thành quả đã có, mới xác nhận được là đã khôi phục xong.**

## 7.4 Huấn luyện và đánh giá: cung cấp môi trường cho thăm dò song song

### 7.4.1 Vì sao tương tác môi trường ảnh hưởng tới thông lượng

Học tăng cường và đánh giá Agent thường cần thực thi thật. Lấy task sửa code làm ví dụ: mỗi lần thử đều phải lấy repository tương ứng, chuẩn bị dependency, chạy Agent, chạy test và thu kết quả; còn task trình duyệt và desktop thì cần khởi tạo trạng thái trang, tài khoản hoặc ứng dụng. Một quá trình tương tác đi từ trạng thái ban đầu, qua nhiều bước hành động tới kết quả, tạo thành một **quỹ đạo rollout**.

Khi chạy song song, việc chuẩn bị môi trường, đọc ghi file, chạy test và thu hồi tài nguyên đều ảnh hưởng tới sản lượng quỹ đạo hữu ích. Ngay cả khi suy luận model vẫn còn dư năng lực, task vẫn có thể phải chờ vì môi trường chưa sẵn sàng hoặc kết quả thao tác chưa trả về. Nền tảng sandbox chịu trách nhiệm cung cấp môi trường thực thi theo lô, cô lập các lần thử khác nhau và thu hồi tài nguyên, để giảm thời gian chờ môi trường trong quá trình huấn luyện.

Huấn luyện và đánh giá có yêu cầu khác nhau với môi trường. Huấn luyện thường theo đuổi lượng thăm dò đủ nhiều và đủ hữu ích; đánh giá thì nhấn mạnh việc các model và version khác nhau đối mặt với những điều kiện task so sánh được. Cả hai đều cần ghi lại version template, dữ liệu và dependency, giới hạn ngân sách thực thi, và **phân biệt rõ "Agent không hoàn thành task" với "bản thân môi trường không phục vụ được bình thường"** — nếu không, sự cố môi trường có thể bị tính nhầm thành thay đổi năng lực model.

### 7.4.2 Template, Snapshot, Fork và Reset

**Template** định nghĩa cấu hình khởi tạo của môi trường, gồm hệ điều hành, version tool, dependency và tham số khởi động. **Snapshot** lưu trạng thái chạy tại một thời điểm; phạm vi cụ thể có thể gồm hệ thống file hoặc bộ nhớ. **Fork** tạo một nhánh độc lập từ cùng một snapshot, tái dùng phần chuẩn bị trước snapshot đó. **Reset** đưa môi trường thí nghiệm về điều kiện ban đầu đã thoả thuận; nó có thể hiện thực bằng cách tạo lại, khôi phục từ snapshot hoặc một logic reset chuyên biệt.

Bốn năng lực này giải quyết những vấn đề khác nhau. Template khiến các task lặp lại có cùng điểm xuất phát nhất quán; Snapshot lưu lại phần chuẩn bị đã hoàn tất; Fork cho phép nhiều lần thử triển khai song song từ cùng một giai đoạn; Reset ngăn thay đổi của lượt thử trước làm ô nhiễm kết quả lượt sau. Tài liệu snapshot của Agents cũng phân biệt giữa **tạm dừng – khôi phục một-một** và **snapshot – clone một-nhiều**.

![image](../assets/imgs/chapter-07/image-005.png)

*Hình 7-5 — Snapshot và fork hỗ trợ thăm dò song song*

Ví dụ, cùng một task code có thể hoàn tất việc checkout repository, cài dependency và chạy test cơ bản trước, rồi lưu snapshot môi trường. Nhiều sandbox fork từ snapshot đó, các chiến lược khác nhau lần lượt sửa code, chạy test, rồi tổng hợp patch, kết quả test và quỹ đạo. Cách này tái dùng được quá trình chuẩn bị môi trường; **lợi ích thực tế phụ thuộc vào chi phí chuẩn bị, kích thước snapshot, số lần fork và chi phí khôi phục.**

Điều kiện khởi tạo so sánh được phải phủ toàn bộ state liên quan. **Snapshot sandbox không tự động rollback được database bên ngoài, những message đã gửi đi hay các thao tác nghiệp vụ đã hoàn tất.** Task đánh giá nên dùng bản sao dữ liệu độc lập, tenant test hoặc một cơ chế reset bên ngoài rõ ràng; việc ghi của từng nhánh nên đi vào không gian ghi riêng, tránh để một mount dùng chung lan truyền một thay đổi sang các nhánh khác. Snapshot sandbox cũng khác với checkpoint huấn luyện model — cái sau thường lưu trọng số, optimizer và các state huấn luyện khác.

### 7.4.3 Từ kết quả môi trường tới tín hiệu huấn luyện

Môi trường chịu trách nhiệm trả về quan sát, kết quả thực thi và quỹ đạo; còn hệ thống huấn luyện hay đánh giá thì dựa vào đó để tính điểm, so sánh chiến lược hoặc cập nhật model. Exit code của test, ảnh chụp trang và diff file là **bằng chứng**; nhưng việc định nghĩa thế nào là thành công và tính reward ra sao thì thuộc về **logic đánh giá**. Với những Agent có sửa code và file, luật chấm điểm cùng các tài liệu kiểm chứng then chốt nên được bảo vệ độc lập, tránh việc bên thực thi đạt được kết quả méo mó bằng cách sửa môi trường chấm điểm.

Khi đánh giá lợi ích, nên tách phần đóng góp của **năng lực môi trường** và **năng lực model**. Sandbox ảnh hưởng tới việc cung ứng môi trường, thực thi hành động, tái dùng state và thu thập quỹ đạo; còn cải thiện do cache của dịch vụ model, lập lịch suy luận và thuật toán huấn luyện thì phải đánh giá riêng. **Chỉ khi ghi lại thời lượng và nguyên nhân thất bại theo từng giai đoạn, mới phán định được việc tăng mức song song của môi trường có làm tăng sản lượng mẫu hữu ích hay không.**

## 7.5 Cơ chế vận hành và lợi ích với task

### 7.5.1 Tái dùng môi trường và các lần thử có kiểm soát

Tái dùng môi trường giảm việc chuẩn bị lặp lại. Nền tảng cố định ngôn ngữ, dependency, tool và các bước khởi động thành template có version; ứng dụng xin môi trường qua một lối vào thống nhất, giảm khác biệt cài đặt giữa các máy. Dependency tạm mà task cần thì có thể bổ sung trong workspace sau khi được cấp; còn dependency ổn định và dùng nhiều thì đưa vào template. Khi version template được liên kết với bản ghi task, nó dùng được cho việc định vị sự cố và thực thi lặp lại.

Môi trường độc lập giảm ảnh hưởng qua lại giữa các lần thử, khiến việc cài dependency, chạy script và sửa file nhiều lần có ranh giới rõ ràng. Với những lần thử thất bại mà ảnh hưởng chỉ giới hạn trong môi trường, ta có thể quay về điểm xuất phát đã thoả thuận để thăm dò tiếp; còn các bản ghi version và kết quả thì giữ lại căn cứ cho việc đối chiếu và cải tiến.

Tái dùng môi trường cần đồng thời thoả yêu cầu về version, quyền sở hữu và dọn dẹp. Dependency của template phải truy nguyên được, workspace phải thuộc về task hiện tại, và instance phải được dọn sạch trước khi cấp lại. Còn các ảnh hưởng nghiệp vụ phát sinh khi truy cập hệ thống bên ngoài thì vẫn phải kiểm soát bằng luật nghiệp vụ, xử lý idempotent hoặc cơ chế bù trừ. **Sandbox lo ranh giới thực thi; còn phán định quyền hạn và nghiệm thu kết quả thì do các hệ thống tương ứng gánh.**

### 7.5.2 Dùng phân tầng state để giảm chi phí chờ

Chính sách giữ state quyết định mức chiếm tài nguyên trong lúc chờ và chi phí khôi phục. Chạy liên tục thì thực thi được hành động kế tiếp ngay, nhưng luôn chiếm tài nguyên tính toán. Tạm dừng nông có giữ bộ nhớ thì giảm được phần tính toán hoạt động, nhưng vẫn phải giữ phần bộ nhớ tương ứng. Lưu state vào kho bền vững rồi giải phóng tài nguyên thực thi thì phù hợp với những lần chờ dài hơn, nhưng khi khôi phục phải cấp lại tài nguyên và nạp lại state. Chỉ giữ file thì thu hẹp phạm vi lưu thêm nữa, nhưng phải khởi động lại process và ứng dụng.

Ngủ nông và ngủ sâu thể hiện đúng sự đánh đổi này. **Cách hiện thực, phạm vi mở và các khoản tính phí của những thuật ngữ này ở mỗi sản phẩm có thể khác nhau**; ứng dụng phải thiết kế theo ngữ nghĩa state thực tế, **không được đánh đồng một interface `pause` nào đó với cùng một kiểu ngủ đông trên mọi nền tảng.** Tài liệu của Alibaba Cloud phân biệt ngủ nông và ngủ sâu theo cách giữ và tính phí các tài nguyên khác nhau; E2B cũng cung cấp các lựa chọn khác nhau về phạm vi giữ hệ thống file và bộ nhớ.

| Chính sách state | Giữ và giải phóng cái gì | Tình huống phù hợp | Cái giá chính |
| --- | --- | --- | --- |
| Chạy liên tục | Giữ process và tài nguyên thực thi luôn sẵn sàng | Tính toán liên tục, tương tác tức thời, dịch vụ đang chạy | Vẫn chiếm tài nguyên trong lúc chờ |
| Tạm dừng nông | Giữ bộ nhớ và trạng thái file, giảm phần tính toán hoạt động | Chờ ngắn, nhạy với thời gian khôi phục | Vẫn giữ bộ nhớ và tài nguyên khác; tuỳ theo cách hiện thực của nền tảng |
| Ngủ sâu | Bền vững hoá các state được hỗ trợ, giải phóng tài nguyên thực thi | Chờ khá dài, muốn kéo dài context vận hành | Chi phí lưu và khôi phục state; kết nối bên ngoài phải dựng lại |
| Giữ file rồi dựng lại | Chỉ giữ workspace và các bản ghi task cần thiết | Process dễ khởi động lại, file là state chính | Phải khởi động lại dịch vụ, bổ sung phần context chưa bền vững hoá |

*Bảng 7-3 — Chính sách state và sự đánh đổi tài nguyên*

Chính sách state nên được đánh giá theo **trọn chu kỳ task**. Với những dự án giữ lâu nhưng thời gian thực thi thật ngắn, việc giảm chiếm tài nguyên ở giai đoạn chờ có thể mang lại lợi ích lớn hơn; còn với các task khôi phục thường xuyên mà mỗi lần chờ đều ngắn, thì việc lưu và nạp state lặp đi lặp lại có thể làm tăng độ trễ và chi phí. Nền tảng nên kết hợp thời gian hoạt động, độ dài chờ, tần suất khôi phục và kích thước state để đặt ngưỡng ngủ cùng thời hạn giữ, đồng thời dọn các snapshot và workspace không còn mục đích nghiệp vụ.

### 7.5.3 Cung ứng độ trễ thấp và dung lượng co giãn

Độ trễ tới lúc dùng được lần đầu của sandbox nên được tính **từ lúc xin môi trường cho tới khi kênh lệnh, dependency, workspace và các dịch vụ cần thiết đều sẵn sàng.** Cold start gồm cấp phát tài nguyên, chuẩn bị image và khởi tạo process; cache và pre-warm image dùng để giảm thời gian chuẩn bị image; còn pre-warm instance thì duy trì sẵn các môi trường đã khởi động, đánh đổi việc pool chiếm tài nguyên liên tục lấy thời gian chờ ngắn hơn. Các chiến lược khác nhau ứng với chi phí và ranh giới đo khác nhau, nên phải ghi lại riêng rẽ.

Với những lời gọi tool đột biến nhạy với thời gian phản hồi lần đầu, có thể dùng một lượng môi trường pre-warm vừa phải để đón phần traffic phổ biến, rồi tạo thêm theo nhu cầu. Với các đợt đánh giá lớn và ổn định thì có thể chuẩn bị dung lượng trước theo hàng đợi task. Còn với dự án chạy dài thì ưu tiên tái dùng và khôi phục. Nền tảng phải xử lý đồng thời việc tạo, kết nối, thu hồi và bổ sung pool pre-warm, phòng khi tốc độ tạo tăng lên thì nút thắt lại chuyển sang lưu trữ dùng chung, mạng outbound hoặc interface điều khiển. Tài liệu Container Service của Alibaba Cloud liệt kê các cơ chế cung ứng khác nhau như tăng tốc image và pool pre-warm.

Việc quy hoạch dung lượng nên dựa trên tải thực đo được với các task đại diện, đồng thời kiểm tra bộ nhớ, tiến trình con của tool, số kết nối và chi phí của các component đi kèm. Nền tảng nên đặt riêng giới hạn đồng thời trên một instance và giới hạn quy mô pool, đồng thời đối chiếu quota của model, lưu trữ và interface điều khiển. Khi dung lượng cạn, hãy dùng hàng đợi có biên hoặc từ chối rõ ràng, tránh mở rộng và chờ vô hạn. **Pre-warm chỉ hoàn tất trước được phần chuẩn bị không liên quan tới task cụ thể; còn định danh người dùng, mount workspace và kiểm tra khôi phục thì vẫn phải tính vào độ trễ tới lúc dùng được lần đầu.**

Thu hồi tài nguyên và mở rộng cùng quyết định dung lượng khả dụng. Nền tảng nên hỗ trợ truy vấn task đang hoạt động, huỷ một task chỉ định, và cưỡng chế các giới hạn về thời lượng task, thời gian idle và trần tài nguyên theo tenant. Khi thu hẹp, hãy ngừng nhận việc mới trước, rồi chờ các task đang chạy hoàn tất hoặc tới điểm khôi phục được; **CPU thấp không thể đơn độc làm căn cứ thu hồi.**

| Ưu thế cốt lõi | Dựa vào cơ chế nào | Cải thiện gì cho task | Kiểm chứng ra sao |
| --- | --- | --- | --- |
| Thực thi và kiểm chứng được | Code, trình duyệt, desktop và phản hồi vận hành | Đẩy kế hoạch thành sản phẩm kiểm tra được | Tỉ lệ hoàn thành, phản hồi hữu ích, nghiệm thu sản phẩm |
| Giảm chuẩn bị môi trường | Template có version, tái dùng dependency, workspace dùng chung | Rút ngắn thời gian chuẩn bị và thời gian nối các tool | Độ trễ tới lúc dùng được lần đầu, thời lượng chuẩn bị lặp lại |
| Task dài nối tiếp được | Ánh xạ phiên, bền vững hoá workspace, kiểm tra khi khôi phục | Request kế tiếp tiếp tục từ thành quả đã có | Tỉ lệ nối tiếp thành công, tính toàn vẹn của state |
| Giảm lãng phí do chờ | Ngủ phân tầng, khôi phục theo nhu cầu, dọn khi hết hạn | Giảm chiếm tài nguyên ở giai đoạn không hoạt động | Tỉ lệ thời gian hoạt động, chi phí trên một task hoàn thành |
| Hỗ trợ thăm dò song song | Môi trường cô lập, fork snapshot, reset và co giãn | Tăng hiệu suất cung ứng các lần thử hữu ích | Thông lượng quỹ đạo hữu ích, thời lượng reset, tỉ lệ nhiễm giữa các nhánh |

*Bảng 7-4 — Năng lực Sandbox, cơ chế hiện thực và cách kiểm chứng*

Bảng 7-4 tổng hợp năng lực sandbox, cơ chế hiện thực và cách kiểm chứng. Nền tảng nên cấu hình chính sách tài nguyên phù hợp cho từng giai đoạn chuẩn bị, thực thi, chờ và thử song song, rồi kiểm chứng độ trễ, chi phí và hiệu quả hoàn thành bằng task thật — **không thể chỉ dựa vào việc "có dùng sandbox hay không" mà phán định lợi ích.**

## 7.6 Kiến trúc và tích hợp: đưa không gian làm việc vào nền tảng production

### 7.6.1 Phân công giữa Harness, Runtime và Sandbox

**Tầng orchestration Harness** nắm mục tiêu task, context và quyết định bước kế tiếp; nó phán định khi nào gọi tool, khi nào giao cho bên thực thi khác, và khi nào kết thúc. **Agent Runtime** lo việc tổ chức task thành một quá trình chạy khởi động được, chờ được, huỷ được và khôi phục được; nó xin và liên kết tài nguyên, rồi trả kết quả thực thi về cho tầng orchestration. **Sandbox** cung cấp môi trường tính toán và tool cụ thể, và thực thi các thao tác được giao cho nó.

Đây là một bộ **ranh giới trách nhiệm**, không đòi hỏi phải hiện thực thành ba dịch vụ độc lập. Ứng dụng đơn giản có thể tổ chức logic orchestration và vận hành trong cùng một process, rồi dùng sandbox bên ngoài qua SDK; dự án phức tạp cũng có thể đưa process Agent vào trong sandbox mà vẫn để phần điều khiển routing, khôi phục và thu hồi ở bên ngoài. Dù triển khai thế nào, **tầng orchestration cũng phải nắm ngữ nghĩa task; nền tảng không được đoán task đã hoàn thành hay chưa dựa trên việc một process còn sống hay không.**

Khi tích hợp, đội ứng dụng và đội nền tảng nên thoả thuận cách xử lý việc lưu state, tiếp tục từ điểm dừng, huỷ và gọi lặp. Nền tảng cung cấp tài nguyên, định danh, lưu trữ bền vững và interface vòng đời; tầng orchestration chịu trách nhiệm ghi state cần cho việc khôi phục, rồi đọc và đối chiếu sau khi khởi động lại. Khi framework hay tool không hỗ trợ tiếp tục từ điểm dừng, phải nói rõ giới hạn năng lực và cách xử lý sau khi thất bại.

Mặt phẳng thực thi gánh vòng lặp task, chạy các component thực thi và instance sandbox; mặt phẳng dữ liệu và tài nguyên lưu image, workspace, bản ghi task, snapshot và sản phẩm; mặt phẳng điều khiển quản lý định danh, việc chấp nhận template, quyền hạn, quota và chính sách vòng đời. Việc quan sát xuyên suốt các mặt phẳng, liên kết một task người dùng với instance môi trường, version, kết quả thao tác và chi phí.

![image](../assets/imgs/chapter-07/image-006.png)

*Hình 7-6 — Vị trí của Sandbox trong kiến trúc ba mặt phẳng*

Trong hình 7-6, component quản lý sandbox tạo, khôi phục và thu hồi instance theo policy của mặt phẳng điều khiển; còn component thực thi thì nối lệnh và phản hồi trở lại task. Workspace, trạng thái task và sản phẩm cuối cùng có trách nhiệm lưu giữ riêng: task kết thúc thì có thể giải phóng môi trường tính toán, nhưng **kết quả đã bàn giao và các bản ghi vận hành cần thiết thì vẫn phải giữ theo yêu cầu nghiệp vụ.**

### 7.6.2 Backend cô lập và năng lực mở

Sandbox có thể hiện thực dựa trên container, kernel ở user space hoặc máy ảo. Container thường có hệ sinh thái image và vận hành khá chín, nhưng các cách hiện thực phổ biến thì dùng chung kernel của máy host. Kernel ở user space dùng một lớp trung gian để giảm phạm vi mà workload tiếp xúc trực tiếp với kernel host, đồng thời cần kiểm chứng tính tương thích của system call và ứng dụng. MicroVM dùng ảo hoá phần cứng để tạo ranh giới kernel độc lập, nhưng vẫn cần đi kèm phần quản lý tài nguyên, mạng, lưu trữ và định danh. Tài liệu chính thức của gVisor và Firecracker lần lượt trình bày hai hướng hiện thực này.

Việc chọn backend phụ thuộc vào mức tin cậy của code sẽ chạy, ranh giới tenant, năng lực hệ điều hành, nhu cầu thiết bị và chi phí vận hành. **Việc cung cấp SDK hay interface Kubernetes ra ngoài không tự nó nói lên cường độ cô lập ở tầng dưới.** Sandbox process của bản thân trình duyệt cũng chỉ phủ ranh giới ứng dụng tương ứng; cả môi trường task vẫn phải tính tới các process khác, tài nguyên được mount và truy cập mạng.

Phạm vi mở của môi trường phải do nhu cầu task quyết định. Tải tài liệu thì cần truy cập mạng tương ứng; build dự án thì cần ngôn ngữ và dependency; xử lý dữ liệu doanh nghiệp thì cần mount dữ liệu đã được cấp quyền. Nền tảng cung cấp những năng lực đó qua proxy outbound, credential ngắn hạn, hạn mức tài nguyên và workspace độc lập, đồng thời giới hạn phạm vi ảnh hưởng của chúng.

Trong một pool tài nguyên dùng chung, định danh còn phải được cụ thể hoá thành quyền thực tế đối với mạng, truy cập file và truy vấn log. Danh mục năng lực công cộng thì chia sẻ chỉ-đọc theo nhu cầu; thư mục riêng của task thì giới hạn phạm vi đọc–ghi và chặn các đường mà sandbox có thể dùng để lấy quyền rộng trên máy host. Môi trường pre-warm **không mang theo dữ liệu hay credential người dùng trước khi được cấp phát**; còn trước khi cấp lại một instance thì phải hoàn tất việc dọn process, file, mount và quy tắc mạng.

### 7.6.3 API cho lập trình viên và tích hợp Kubernetes

Lập trình viên ứng dụng thường muốn hoàn tất việc tạo, kết nối, thực thi, đọc ghi file và giải phóng môi trường chỉ với một vài interface. Tích hợp qua **SDK/API** đóng gói những thao tác đó thành năng lực mà ứng dụng gọi được, tiện cho việc thêm môi trường tool vào một Agent sẵn có. Còn đội nền tảng thì có thể cần đưa sandbox vào cụm, kho lưu trữ, mạng và hệ giám sát hiện có, khai báo template, instance và vòng đời qua custom resource của **Kubernetes**, rồi quản lý dung lượng một cách thống nhất.

Hai lối vào này có thể trỏ tới cùng một bộ năng lực nền dưới. Agents cung cấp đồng thời interface hướng ứng dụng và trừu tượng tài nguyên hướng nền tảng; Container Service của Alibaba Cloud cũng liệt kê hai cách tích hợp: SDK tương thích và tài nguyên khai báo. **Việc chọn interface và cách host có thể quyết định riêng rẽ; SDK cũng có thể nối tới dịch vụ tự dựng.** Ứng dụng cần đồng thời làm rõ **ai gánh việc vận hành môi trường**, và **tái dùng hạ tầng sẵn có ra sao**.

![image](../assets/imgs/chapter-07/image-007.png)

*Hình 7-7 — Hai cách tích hợp và nền tảng năng lực chung*

| Mục so sánh | Tích hợp SDK / API | Tích hợp Kubernetes |
| --- | --- | --- |
| Người dùng chính | Lập trình viên ứng dụng Agent | Đội nền tảng, hạ tầng và vận hành |
| Đối tượng quan tâm | Interface tạo, kết nối, lệnh, file và vòng đời | Template, instance, pool pre-warm, lưu trữ và controller |
| Trách nhiệm nền tảng | Trách nhiệm vận hành tuỳ theo cách managed hay tự dựng; ứng dụng duy trì liên kết giữa task và môi trường | Đội ngũ kiểm soát trực tiếp nhiều hơn với việc tích hợp cụm, dung lượng và chính sách vận hành |
| Điều kiện phù hợp | Muốn bổ sung nhanh năng lực thực thi, giảm công tích hợp hạ tầng | Đã có hệ Kubernetes, cần quản trị tài nguyên và vận hành thống nhất |
| Trọng tâm kiểm chứng | Ngữ nghĩa interface và state, quota, mạng và hành vi bền vững hoá | Hành vi controller, dung lượng lập lịch, năng lực backend và việc nâng cấp – bảo trì |

*Bảng 7-5 — Căn cứ lựa chọn giữa SDK/API và Kubernetes*

Tương thích interface giúp giảm lượng sửa code khi di trú, nhưng template, timeout, tạm dừng – khôi phục, truy cập mạng, bền vững hoá file và xử lý lỗi thì vẫn phải kiểm chứng từng mục. Cùng một tên tham số nhưng phạm vi hỗ trợ ở các cách hiện thực khác nhau có thể khác nhau. Khi di trú lên production, hãy kiểm chứng trọn vòng đời bằng những task đại diện, rồi mới xác định phạm vi tái dùng logic ứng dụng cũ.

## 7.7 Triển khai và kiểm chứng: phán định hiệu quả dựa trên task thật

### 7.7.1 Đúc kết các mẫu tái dùng được từ thực tiễn sản phẩm

Các case trong sản phẩm Agent Sandbox của Alibaba Cloud phủ nhiều con đường triển khai khác nhau. Case marketplace tool MCP đưa các tool có dependency cục bộ lên thành dịch vụ từ xa, với việc adapter giao thức phối hợp cùng phần cung ứng sandbox để xử lý việc khởi động theo nhu cầu và các đợt request đột biến. Case phát triển ứng dụng full-stack của Z.ai tổ chức môi trường dự án quanh việc sinh, chạy, preview và sửa tiếp. Case phiên dài của MiniMax quan tâm tới việc giữ môi trường ở quy mô người dùng lớn và hiệu suất tài nguyên. Những thực tiễn này lần lượt dùng sandbox như **đơn vị cung ứng cho dịch vụ tool, không gian làm việc cho dự án code, và vật mang state cho phiên dài.**

Case huấn luyện – đánh giá của Qwen và Bailian thì đưa việc chuẩn bị môi trường, tương tác song song, thu thập quỹ đạo và kết quả vào quy trình huấn luyện. Khi triển khai, có thể làm trọn vòng chuẩn bị môi trường và phản hồi cho một task đơn lẻ trước, rồi tối ưu việc tái dùng state, cuối cùng mới mở rộng mức đồng thời. Số liệu hiệu năng và chi phí cụ thể trong các case gắn với điều kiện test và cách hiện thực sản phẩm của họ; **doanh nghiệp khi triển khai nên kiểm chứng lợi ích bằng chính workload của mình.**

### 7.7.2 Thiết lập baseline bằng chuỗi task trọn vẹn

Task baseline nên phủ trọn quá trình của từng loại workload. Thực thi tool gồm file input, chuẩn bị dependency, tính toán và kiểm tra sản phẩm; task chạy dài gồm thực thi, chờ, người dùng quay lại, khôi phục và bàn giao cuối; huấn luyện – đánh giá gồm tạo theo lô, tương tác song song, reset, chấm điểm và thu hồi. Qua những task này, có thể kiểm tra xem năng lực tool, tính liên tục của state và chính sách tài nguyên có đáp ứng yêu cầu hay không.

Baseline nên ghi lại thời lượng của từng giai đoạn. Phía môi trường gồm xếp hàng request, cấp phát tài nguyên, chuẩn bị image, mount, khởi tạo và khôi phục; phía thực thi gồm chờ model, chạy tool, retry và nghiệm thu; phía kết thúc gồm lưu kết quả, giải phóng tài nguyên và dọn state còn sót. Các phân vị như P95, P99 phải nói rõ **đo từ sự kiện nào tới sự kiện nào**, và đưa ra mức đồng thời, kích thước môi trường cùng điều kiện cache — **tránh lấy số liệu khởi động của một môi trường rỗng làm đại diện cho thời gian phản hồi nghiệp vụ trọn vẹn.**

Đánh giá chi phí cũng nên phủ trọn vòng đời. Chi phí trên một task thành công có thể tính bằng: tổng phí tính toán, lưu trữ state, mạng và tài nguyên pre-warm quy về workload đó trong cửa sổ đo, chia cho số task hoàn thành thành công; các lần thử thất bại và retry cũng tính vào tổng phí. Khi so sánh chi phí của cả ứng dụng, còn phải đưa phí gọi model và các dịch vụ khác vào theo một chuẩn đo nhất quán. Chuẩn đo này dùng để phán định xem lợi ích từ việc ngủ đông có bị chi phí khôi phục triệt tiêu hay không, và việc tăng mức đồng thời có kéo theo nhiều lần thất bại và thử vô ích hơn hay không.

### 7.7.3 Từ thí điểm tới vận hành liên tục

Giai đoạn thí điểm nên làm rõ **hợp đồng môi trường** của task: dùng template nào, mount dữ liệu nào, giữ state nào, nghiệm thu sản phẩm theo căn cứ gì, và giải phóng tài nguyên khi nào. Sau đó bổ sung năng lực theo nhu cầu workload. Task ngắn thì có thể bắt đầu từ việc tạo theo nhu cầu và dọn dẹp rõ ràng; task dài thì thêm phần liên kết phiên và khôi phục; huấn luyện – đánh giá mức đồng thời cao thì mới đưa vào pre-warm, lập lịch theo lô và fork snapshot. **Mỗi cơ chế thêm vào đều nên ứng với một vấn đề vận hành đã quan sát được.**

Trước khi lên production, cần kiểm chứng hành vi khi task bị huỷ, instance thoát, khôi phục thất bại và kết nối bên ngoài mất hiệu lực, để bảo đảm trạng thái task, workspace và trạng thái tài nguyên vẫn tương ứng được với nhau. Có thể kiểm chứng các tình huống sau quanh cùng một dự án.

| Tình huống kiểm chứng | Trọng tâm kiểm tra |
| --- | --- |
| Instance thoát giữa lúc đang chạy | Instance mới nối lại được bản ghi task, các file cần thiết và dependency, tiếp tục từ vị trí đã lưu |
| Mount workspace thất bại hoặc quyền sở hữu không khớp | Chặn việc thực thi tiếp; không coi thư mục rỗng hay dữ liệu của người dùng khác là khôi phục thành công |
| Instance cũ mất liên lạc rồi xuất hiện lại | Bên thực thi cũ không được sửa tiếp các state được bảo vệ; kết quả thao tác bên ngoài phải được đối chiếu |
| Huỷ trong lúc chờ hoặc chạm trần tài nguyên | Dừng việc thực thi mới, lưu kết quả và bản ghi cần thiết, thu hồi tài nguyên tương ứng |
| Khôi phục task cũ sau khi lên version mới | Trạng thái task tương thích với version môi trường; file và quyền truy cập vẫn đúng |

*Bảng 7-6 — Kiểm chứng khôi phục và vòng đời cho task chạy dài*

Nâng cấp version môi trường phải kiểm chứng đồng thời **cả đường tạo mới lẫn đường khôi phục.** Snapshot cũ có thể còn giữ dependency và trạng thái credential cũ; chỉ kiểm chứng template mới không chứng minh được rằng toàn bộ môi trường chạy đã nâng cấp. Các task sẵn có phải tiếp tục thực thi bằng một môi trường tương thích; khi liên quan tới thay đổi định dạng state hoặc cách mount, hãy kiểm chứng đường di trú trước, rồi chuyển dần, và chỉ gỡ cấu hình cũ sau khi xác nhận các tham chiếu tồn đọng đã di trú xong. Việc liên tục liên kết kết quả task, version môi trường, log và chi phí sẽ giúp biến các vấn đề vận hành thành những cải tiến cụ thể cho template, tool và policy.

## 7.8 Tóm tắt chương

Sandbox cung cấp cho Agent một môi trường thực thi lập trình được và có kiểm soát, gánh việc chạy code, thao tác trình duyệt và desktop, đọc ghi file, rồi trả kết quả thực tế về vòng lặp task. Thực thi tool có được năng lực thao tác nhờ sandbox; task chạy dài giữ được tính liên tục của dự án nhờ phiên và workspace; còn huấn luyện – đánh giá thì triển khai thăm dò song song nhờ môi trường độc lập, reset và fork.

Các cơ chế vận hành tác động lên những giai đoạn khác nhau của task: template và workspace dùng chung giảm việc chuẩn bị môi trường và chi phí nối tool; việc giữ state hỗ trợ task tiếp tục tiến triển; ngủ đông giảm mức chiếm tài nguyên ở giai đoạn chờ; còn co giãn cùng tái dùng snapshot thì nâng hiệu suất cung ứng các lần thử hữu ích. Tầng orchestration Harness, Runtime và Sandbox lần lượt gánh trách nhiệm về ngữ nghĩa task, vòng đời vận hành và môi trường thực thi; còn nền tảng thì quản lý thống nhất định danh, dữ liệu và việc quan sát. **Hiệu quả của phương án nên được đánh giá qua khả năng hoàn thành và nối tiếp task, cùng thời gian và chi phí cần cho mỗi kết quả hữu ích.**
