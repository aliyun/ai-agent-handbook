# Chương 1 — Giai đoạn mới của ứng dụng AI-native

Chỉ mới một năm trước, điểm xuất phát khi doanh nghiệp xây ứng dụng AI vẫn là "làm sao tích hợp mô hình lớn vào nghiệp vụ": ứng dụng gửi prompt tới model, dùng RAG (Retrieval-Augmented Generation) để bổ sung tri thức doanh nghiệp, dùng Workflow để xâu chuỗi các API, rồi giao kết quả sinh ra cho con người xử lý. Ở giai đoạn này, giá trị chính của model là hiểu và tạo sinh; code ứng dụng vẫn nắm trọn đường đi thực thi.

Một năm qua, mối quan hệ đó bắt đầu thay đổi. Model không còn chỉ là một engine tạo sinh bị động được gọi tới, mà dần trở thành một **chủ thể thực thi**: có thể duy trì trạng thái task, phân rã mục tiêu, gọi tool, thao tác môi trường, và điều chỉnh hành vi dựa trên phản hồi thực thi. Các Coding Agent tiêu biểu như Codex, Claude Code, Qoder là những cái tên đầu tiên kiểm chứng hình thái ứng dụng này trong phát triển phần mềm: chúng không chỉ đưa ra gợi ý code, mà còn đọc repository, duy trì kế hoạch công việc, sửa file, chạy terminal và test, đồng thời liên tục nhận sự dẫn dắt của con người trong những task kéo dài.

Việc model có được nhiều quyền tự chủ với task và nhiều quyền thao tác môi trường hơn không có nghĩa bản thân model đã đủ để cấu thành một Agent. Ngược lại, task càng dài, tool càng nhiều, tác động lên môi trường càng lớn, thì hệ thống kỹ thuật bên ngoài model lại càng quan trọng. Doanh nghiệp cần giải quyết một cách hệ thống các vấn đề: tổ chức context, trạng thái task, kiểm soát tool, cô lập môi trường, khôi phục sau lỗi, đánh giá kết quả và ràng buộc rủi ro. Những năng lực này hợp lại thành **Harness**, và khi hiện thực hoá còn được tách tiếp thành các năng lực kiến trúc như Context, State, Memory, Tool, Skill, Runtime, Sandbox, Observability, Evaluation và Governance.

Vì vậy, ứng dụng AI-native ở giai đoạn mới không phải là một Chatbot mạnh hơn, mà là một **hình thái thực thi phần mềm mới**: Model lo việc hiểu, suy luận, tạo sinh và ra quyết định; Harness lo việc tổ chức, ràng buộc và gánh phần thực thi — hai thứ hợp lại tạo thành Agent. Khi bàn về hình thái ứng dụng, cuốn sách trắng này dùng thuật ngữ **Agentic Application**, nhấn mạnh việc Agent kết hợp với logic nghiệp vụ, dữ liệu, tool, môi trường và tương tác người dùng, để bàn giao những kết quả nghiệp vụ kiểm chứng được.

Chương này triển khai theo hai trục liên quan lẫn nhau. **Thứ nhất**, hình thái ứng dụng đang tiến hoá từ Chat/RAG, Workflow và Copilot sang Agentic Application: hình thái cơ sở là Single-Agent — một Agent đơn lẻ hoàn thành một task có biên rõ ràng — và có thể mở rộng theo hai hướng, theo trục thời gian thành Long-Horizon Agent, theo trục cấu trúc cộng tác thành Multi-Agent. **Thứ hai**, tiến hoá hình thái không đồng nghĩa với "cấp càng cao càng tốt". Doanh nghiệp cần làm cho mức tự chủ tương xứng với rủi ro của task, và chọn cho mỗi loại task một kiến trúc **tối giản nhưng đủ dùng** với chi phí và rủi ro chấp nhận được. Trục thứ nhất giải thích năng lực ứng dụng và độ phức tạp hệ thống tiến hoá ra sao; trục thứ hai trả lời doanh nghiệp nên dùng hình thái nào, ở đâu.

## 1.1 Từ tạo ra nội dung đến hoàn thành nhiệm vụ: điểm ngoặt sản xuất của ứng dụng AI-native

### 1.1.1 Ứng dụng AI-native ở giai đoạn trước

Ứng dụng AI-native ở giai đoạn trước chủ yếu thể hiện ba đặc điểm.

**Thứ nhất, ứng dụng lấy "yêu cầu — trả lời" làm đơn vị tương tác chính.** Ngay cả khi thêm RAG, Function Calling hay hội thoại nhiều lượt, ranh giới của một lần gọi thường vẫn khá rõ ràng, và task phần lớn hoàn thành trong vài giây hoặc vài phút.

**Thứ hai, đường đi thực thi chủ yếu do code ứng dụng hoặc Workflow định trước.** Model có thể đảm nhận việc phân loại, sinh tham số hoặc lựa chọn tool trong phạm vi hạn chế, nhưng thường không nắm giữ trọn vòng lặp task.

**Thứ ba, đầu ra của model chủ yếu là nội dung, chứ không phải kết quả task kiểm chứng được trong môi trường bên ngoài.** Câu trả lời có trôi chảy hay không thì con người đọc là phán đoán được; nhưng task có hoàn thành đúng hay không thì bắt buộc phải kiểm tra vết gọi tool, thay đổi file, trạng thái database, kết quả test hoặc những sự thật khác từ môi trường.

Giai đoạn này đã đặt nền móng quan trọng để AI bước vào nghiệp vụ doanh nghiệp. Chat/RAG giúp tri thức doanh nghiệp truy cập được bằng ngôn ngữ tự nhiên; Workflow giúp model tham gia vào quy trình nghiệp vụ; Copilot dùng phán đoán thời gian thực của con người để bù cho những thiếu hụt về năng lực và độ tin cậy của model. Nhưng những hình thái này thường dựa trên hai tiền đề: hoặc ứng dụng có tri thức tiên nghiệm khá mạnh về đường đi của task, hoặc con người sẵn sàng tham gia ra quyết định và tiếp quản liên tục trong quá trình thực thi.

### 1.1.2 Vì sao Coding Agent tạo thành điểm ngoặt

Giá trị của Coding Agent không chỉ nằm ở chỗ bản thân phát triển phần mềm là một bối cảnh giá trị cao, mà quan trọng hơn là nó phơi bày tập trung phần lớn những bài toán kỹ thuật mà một Agentic Application buộc phải xử lý khi vào production.

*   **Một là**, quy mô của repository thường vượt quá cửa sổ context một lần của model, nên Agent buộc phải truy hồi, sàng lọc, tóm tắt và lưu trữ thông tin ra ngoài.

*   **Hai là**, task trải qua nhiều bước và nhiều lần gọi model, nên Agent buộc phải duy trì kế hoạch, tiến độ và danh sách việc cần làm.

*   **Ba là**, việc gọi tool sẽ thật sự sửa file, chạy lệnh hoặc truy cập mạng, nên hệ thống buộc phải cung cấp kiểm soát quyền hạn, cô lập môi trường và phê duyệt cho các thao tác không thể đảo ngược.

*   **Bốn là**, các lần thử ở giữa có thể thất bại, nên hệ thống thực thi buộc phải hỗ trợ quan sát lỗi, retry, checkpoint và khôi phục task.

*   **Năm là**, kết quả task không thể chỉ do model tự chấm, mà còn cần được kiểm chứng qua test, build, kiểm tra tĩnh, diff file hoặc bộ đánh giá độc lập.

*   **Sáu là**, con người không thể giám sát Agent theo từng token, nên cần cung cấp sự dẫn dắt (Steering) và áp dụng kiểm soát Human-in-the-loop tại các nút then chốt như mục tiêu, kế hoạch, hành động rủi ro cao và kết quả cuối.

Thực tiễn về task chạy dài của Anthropic tách riêng Session, Harness và Sandbox, giúp vòng lặp model có thể tiến hoá liên tục trong khi vẫn giữ ổn định các sự kiện task, tool thực thi và ranh giới cô lập. Thực tiễn về công việc chạy dài của OpenAI thì nhấn mạnh Durable Thread, bộ nhớ ngoài có thể thẩm định được, Skills, Steering và khâu rà soát bởi con người. Dù cách hiện thực hoá cụ thể khác nhau, cả hai đều chỉ tới cùng một kết luận kỹ thuật: **task dài không phải là kéo dài một cuộc hội thoại, mà cần phân tầng nhận thức, trạng thái, thực thi và kiểm soát để tạo thành một hệ thống chạy được liên tục.**

### 1.1.3 Từ bối cảnh chuyên dụng đến kiến trúc tổng quát

Coding Agent là sân kiểm chứng quan trọng của Agentic Application, nhưng không phải là ranh giới ứng dụng của nó. Một Agent có thể đọc ghi file trong workspace, gọi tool, duy trì state, thực thi task dài và nhận sự dẫn dắt của con người thì cũng có thể dùng để sinh và kiểm chứng báo cáo nghiên cứu, xử lý các task phân tích dữ liệu, thực hiện thao tác IT doanh nghiệp, điều phối ticket chăm sóc khách hàng, duy trì cơ sở tri thức, hoặc đưa ra bản nháp thực thi kiểm chứng được cho con người trong các nghiệp vụ rủi ro cao.

Những bối cảnh này xử lý các đối tượng nghiệp vụ khác nhau, nhưng yêu cầu về năng lực kiến trúc lại có tính chung rất mạnh, chủ yếu gồm: tích hợp và routing model, quản lý context, tool và giao thức, state và workspace, sandbox và quyền hạn, khôi phục task dài, observability và đánh giá, quản trị bảo mật và tối ưu liên tục. Khi những năng lực này lặp đi lặp lại ở các ứng dụng khác nhau, chúng sẽ dần tách khỏi từng ứng dụng nghiệp vụ đơn lẻ và tích tụ thành **Harness** cùng **Agent Platform** dùng chung.

| Ứng dụng AI-native ở giai đoạn trước | Agentic Application |
| --- | --- |
| Sinh ra một câu trả lời | Bàn giao một kết quả task kiểm chứng được |
| Một lượt hoặc phiên ngắn | Nhiều bước, có state, mở rộng được sang thực thi dài và bất đồng bộ |
| Chủ yếu do Prompt và RAG dẫn dắt | Do Model và Harness cùng dẫn dắt |
| Code ứng dụng gọi model | Agent dùng tool và thao tác môi trường trong ranh giới có kiểm soát |
| Đánh giá chất lượng qua input và output | Đánh giá đồng thời quỹ đạo thực thi, trạng thái môi trường và kết quả cuối |
| Phát triển xong rồi lên production | Tiến hoá liên tục trong quá trình vận hành, quản trị và đánh giá |

*Bảng 1-1 — Sự thay đổi về trọng tâm kiến trúc giữa ứng dụng AI-native giai đoạn trước và Agentic Application*

## 1.2 Từ Chat/RAG đến Agentic Application: sự tiến hoá hình thái ứng dụng

### 1.2.1 Hình thái ứng dụng không phải một chuỗi thay thế đơn giản

Khi Agent trở thành tâm điểm chú ý của ngành, người ta rất dễ hiểu Chat/RAG, Workflow, Copilot, Single-Agent, Long-Horizon Agent và Multi-Agent như một chuỗi tiến hoá thế hệ sản phẩm tuyến tính, cứ như thể hình thái sau tất yếu thay thế hình thái trước. Cách hiểu này bỏ qua sự khác biệt giữa các task về tính xác định, mức tự chủ, thời lượng, cấu trúc cộng tác và kiểm soát rủi ro, và rất dễ dẫn doanh nghiệp tới lựa chọn công nghệ sai.

Khác biệt căn bản giữa các hình thái không nằm ở chỗ giao diện có dùng kiểu hội thoại hay không, mà nằm ở: **ai nắm vòng lặp task, đường đi thực thi được xác định ở giai đoạn nào, hệ thống tác động được tới môi trường bên ngoài tới mức nào, và task có cần chạy liên tục xuyên phiên hay cần nhiều Agent phân công hay không.** Cần nói rõ: Single-Agent, Long-Horizon Agent và Multi-Agent đều thuộc Agentic Application. Single-Agent là hình thái cơ sở của nó, chữ "single" ở đây vừa chỉ việc một Agent đơn lẻ nắm vòng lặp task, vừa chỉ việc task khép kín trong một ranh giới rõ ràng. Long-Horizon Agent và Multi-Agent mở rộng theo hai hướng — trục thời gian và cấu trúc cộng tác — có thể áp dụng độc lập, cũng có thể kết hợp trong cùng một ứng dụng, và **không tạo thành giai đoạn nâng cấp bắt buộc** mà mọi Agentic Application phải trải qua.

| Hình thái ứng dụng | Giá trị chính | Đường đi task | Phạm vi state và thực thi | Vai trò của con người | Điều kiện áp dụng điển hình |
| --- | --- | --- | --- | --- | --- |
| Chat/RAG | Hiểu, tạo sinh và truy cập tri thức | Do ứng dụng định trước | Một lượt hoặc phiên ngắn | Đặt câu hỏi, đọc và phán đoán | Kết quả chủ yếu là nội dung, không trực tiếp thay đổi hệ thống bên ngoài |
| Workflow | Tự động hoá quy trình lặp lại được | Định trước khi thiết kế, lúc chạy chỉ rẽ nhánh cục bộ | Số bước hữu hạn, cấu trúc state rõ ràng | Thiết kế và phê duyệt quy trình | Task ổn định, đường đi liệt kê hết được, cái giá của lỗi khá cao |
| Copilot | Nâng hiệu suất làm việc có người trong vòng lặp | Con người liên tục quyết định mục tiêu và bước kế tiếp | Có thể xuyên nhiều lượt, nhưng quyền kiểm soát task thuộc về con người | Cầm lái, nghiệm thu và chịu trách nhiệm về kết quả | Phán đoán chuyên môn khó tự động hoá hoàn toàn, nhưng phần việc cục bộ uỷ thác được |
| Single-Agent | Một Agent đơn lẻ hoàn thành động một task có biên xoay quanh mục tiêu | Agent quyết định một phần hoặc phần lớn đường đi lúc chạy | Nhiều bước, có state, ranh giới task rõ, thường khép kín trong một task hoặc một phiên | Định nghĩa mục tiêu, ràng buộc và các điểm phê duyệt then chốt; nghiệm thu kết quả | Đường đi khó dự đoán trước, môi trường cung cấp được phản hồi, kết quả kiểm chứng được, và task hoàn thành được trong khoảng thời gian có biên |
| Long-Horizon Agent & Multi-Agent | Long-Horizon Agent đẩy task dài tiến triển liên tục; Multi-Agent hoàn thành mục tiêu phức tạp bằng phân công cộng tác | Cái trước điều chỉnh động theo phản hồi thực thi dài hạn; cái sau do nhiều Agent cùng quyết định qua orchestration, bàn giao hoặc thẩm định | Cái trước xuyên phiên, xuyên process và hỗ trợ tạm dừng – khôi phục; cái sau duy trì nhiều vai trò cùng trạng thái task của chúng | Thiết lập checkpoint và cơ chế xử lý ngoại lệ cho task dài, hoặc thiết lập vai trò, quyền hạn và ranh giới cộng tác cho nhiều Agent | Một Agent đơn lẻ bị giới hạn bởi độ dài thời gian hoặc độ phức tạp vai trò, và lợi ích từ việc đưa vào thực thi dài hoặc cộng tác multi-agent đủ bù cho phần phức tạp tăng thêm; hai hướng này áp dụng độc lập hoặc kết hợp đều được |

*Bảng 1-2 — Khác biệt chính giữa các hình thái ứng dụng AI*

### 1.2.2 Workflow và Agent sẽ cùng tồn tại lâu dài

Ưu thế của Workflow là tính xác định mạnh, dễ test, dễ audit. Ưu thế của Agent là ra quyết định động dựa trên phản hồi môi trường khi đường đi không thể liệt kê hết. Một quy trình doanh nghiệp thường chứa đồng thời cả hai loại vấn đề. Ví dụ, kiểm tra điều kiện, hạch toán kế toán và phê duyệt giao dịch phù hợp với quy trình có tính xác định; còn hiểu tài liệu, điều tra bất thường, sinh phương án và chọn tool động thì phù hợp để Agent xử lý hơn.

Vì vậy, hình thái chủ đạo của ứng dụng cấp doanh nghiệp sẽ không phải là "giao hết mọi bước cho Agent", mà là hình thái lai (**Hybrid**) kết hợp Workflow với Agent. Cụ thể, có thể nhúng Agent vào trong Workflow nghiệp vụ, giới hạn phần bất định trong một ranh giới rõ ràng; cũng có thể để Agent gọi các Workflow hoặc Skill đã được kiểm thử, tách những cách làm đã chín ra khỏi việc suy luận lặp lại. Với những thao tác rủi ro thấp, đảo ngược được, hệ thống có thể trao cho Agent mức tự chủ cao hơn; với những thao tác rủi ro cao, không đảo ngược được, thì cần tăng kiểm tra có tính xác định và phê duyệt của con người.

Bản tổng kết của Google về các mẫu thiết kế Agent đặt song song các mẫu: thực thi tuần tự, thực thi song song, coordinator, phân rã phân cấp, thẩm định và cải tiến; đồng thời nhấn mạnh sự đánh đổi giữa độ trễ, chi phí, state dùng chung và lan truyền lỗi. Điều này cho thấy nguyên tắc **mức tự chủ phải tương xứng với rủi ro của task** không phải một mục kiểm soát cục bộ nào đó, mà là nguyên tắc ra quyết định xuyên suốt cả việc chọn hình thái ứng dụng lẫn thiết kế kiến trúc. Nó vừa quyết định một task cụ thể nên dùng Workflow, Single-Agent hay Hybrid, vừa quyết định có cần mở rộng phạm vi thực thi thành Long-Horizon Agent hay mở rộng cấu trúc cộng tác thành Multi-Agent hay không. Chỉ khi giá trị, rủi ro và độ phức tạp của task đủ để gánh phần chi phí kỹ thuật tương ứng thì những mở rộng đó mới thực sự cần thiết.

### 1.2.3 Từ Single-Agent đến Long-Horizon Agent và Multi-Agent

Khi Single-Agent đi từ task có biên sang thực thi liên tục xuyên phiên, các vấn đề hệ thống phải đối mặt sẽ thay đổi. Context của model không còn có thể là vật mang duy nhất cho sự thật về task, và việc process còn sống cũng không thể là tiền đề cho tính liên tục của task. Hệ thống cần dùng state bền vững, checkpoint, lập lịch task, khôi phục sau lỗi và bộ nhớ ngoài thẩm định được, để Agent tiếp tục làm việc sau khi bị nén context, đổi model, bị con người tạm dừng hoặc bị gián đoạn thực thi. Sự mở rộng này tạo thành **Long-Horizon Agent**; cốt lõi của nó không phải "chạy lâu hơn", mà là **giữ nhất quán mục tiêu, trạng thái, trách nhiệm và kết quả trên một thang thời gian dài hơn**.

Khi task trải qua nhiều vai trò chuyên môn, nhiều quyền tool hoặc nhiều ranh giới tổ chức, việc dồn hết năng lực vào một Agent đơn lẻ có thể gây phình context, xung đột trách nhiệm, quyền hạn quá rộng và khó định vị sự cố. **Multi-Agent** dùng các cơ chế tuần tự, song song, coordinator, phân rã phân cấp, bàn giao hoặc thẩm định, để các Agent khác nhau cộng tác trong ranh giới vai trò và quyền hạn rõ ràng. Giá trị của nó không nằm ở việc tăng số lần gọi model, mà ở chỗ biến **phân công task, cô lập context, năng lực chuyên môn và kiểm tra chéo** thành cấu trúc hệ thống thiết kế được.

Long-Horizon Agent và Multi-Agent không cùng một chiều. Cái trước giải quyết chuyện task kéo dài xuyên thời gian ra sao; cái sau giải quyết chuyện nhiều chủ thể thực thi cộng tác ra sao. Một Agent đơn lẻ vẫn có thể thực thi task dài, còn hệ multi-agent cũng có thể chỉ hoàn thành task ngắn; trong nghiên cứu, R&D, vận hành hay các quy trình nghiệp vụ phức tạp, hai thứ này cũng có thể dùng kết hợp. Dù chọn hình thái nào, hệ thống cũng cần bổ sung tương ứng các năng lực Runtime, Sandbox, Observability, Evaluation và Governance, đồng thời đánh giá phần độ trễ, chi phí, state dùng chung, lan truyền lỗi và ranh giới trách nhiệm tăng thêm. Hình thái phức tạp hơn chỉ là lựa chọn hợp lý khi nó giải quyết được vấn đề mà một Agent đơn lẻ không thể hoàn thành đáng tin cậy với chi phí hợp lý.

## 1.3 Định nghĩa, ranh giới và đặc trưng cốt lõi của Agentic Application

### 1.3.1 Định nghĩa

Cuốn sách trắng này định nghĩa Agentic Application như sau:

> *Agentic Application là sự biểu đạt trọn vẹn của Agent ở tầng hình thái ứng dụng: nó lấy chủ thể thực thi được cấu thành từ Model và Harness làm hạt nhân, kết hợp với logic nghiệp vụ, dữ liệu, tool, môi trường và tương tác người dùng; có thể duy trì context và state xoay quanh mục tiêu nghiệp vụ, lập kế hoạch các bước một cách động, thực hiện hành động, và bàn giao kết quả task kiểm chứng được trong ranh giới có tính xác định.*

Lấy công thức phi hình thức dưới đây làm nền tảng để hiểu kiến trúc Agent:

> *Agent = Model + Harness*

Công thức này trước hết nhấn mạnh **ranh giới trách nhiệm**. Model cung cấp năng lực hiểu, suy luận, tạo sinh và ra quyết định, nhưng bản thân model không thể độc lập đảm nhận việc chuẩn bị context, duy trì trạng thái task, thực thi tool, kiểm soát quyền hạn, khôi phục sau sự cố và kiểm chứng kết quả. Harness là hệ thống kỹ thuật nằm ngoài model, dùng để tổ chức, ràng buộc và gánh phần thực thi task do model dẫn dắt. Chỉ khi cả hai kết hợp, năng lực model mới chuyển hoá được thành một Agent thực thi bền bỉ.

Công thức này không phải một danh sách component đầy đủ, và cũng không có nghĩa Harness là một hộp đen không tách được. Để làm nổi bật tầm quan trọng của hệ thống kỹ thuật bên ngoài model, ở tầng trừu tượng cuốn sách này dùng **Harness theo nghĩa rộng**; còn khi triển khai thực tế thì tách tiếp thành: Agent Loop; Context, State và Memory; Tool, Skill và Protocol; Runtime và Sandbox; Observability và Evaluation; cùng Security và Governance. Các sản phẩm khác nhau có thể chọn ranh giới component và cách hiện thực hoá khác nhau, nhưng đều phải trả lời: những năng lực này do ai cung cấp, phối hợp thế nào, và làm sao tạo thành ràng buộc có tính xác định mà model không tự vòng qua được.

![image.png](../assets/imgs/chapter-01/image-001.png)

*Hình 1-1 — Từ công thức nền tảng của Agent đến việc bóc tách kiến trúc kỹ thuật*

Hình 1-1 biểu đạt quan hệ hai tầng từ đồng thuận trừu tượng tới hiện thực kỹ thuật: ở tầng khái niệm, Agent được cấu thành từ Model và Harness; ở tầng hiện thực, Harness được tách thành một nhóm năng lực kiến trúc phối hợp với nhau. Ở tầng hình thái ứng dụng, Agentic Application nhấn mạnh việc đặt chủ thể thực thi này vào một ranh giới nghiệp vụ cụ thể, để nó kết nối với logic nghiệp vụ, dữ liệu, tool, môi trường và tương tác người dùng. Các chương sau sẽ xoay quanh những năng lực này để giải thích kiến trúc được thiết kế ra sao, và ứng dụng được xây dựng, vận hành, quản trị và tối ưu ra sao.

### 1.3.2 Sáu đặc trưng phán định

Một ứng dụng đã bước vào giai đoạn Agentic hay chưa có thể phán định qua sáu đặc trưng sau.

**Thứ nhất, lấy mục tiêu và kết quả task làm trung tâm.** Thứ người dùng đưa ra không còn chỉ là một câu hỏi chờ trả lời, mà là một nhiệm vụ cần hoàn thành và một kết quả nghiệm thu được.

**Thứ hai, quyết định một phần đường đi thực thi lúc chạy.** Hệ thống có thể điều chỉnh hành vi tiếp theo dựa trên kết quả trung gian, giá trị trả về của tool và trạng thái môi trường, chứ không chỉ chạy theo một đường đã sắp đặt trọn vẹn từ trước.

**Thứ ba, tác động được lên môi trường bên ngoài.** Agent có thể gọi API, truy hồi dữ liệu, sửa file, chạy code, thao tác trình duyệt, hoặc uỷ nhiệm task cho một Agent khác.

**Thứ tư, duy trì trạng thái task xuyên bước và xuyên request.** Trạng thái task không chỉ tồn tại trong một lần context của model; khi task cần chạy lâu hơn, nó còn có thể tạm dừng, khôi phục, retry hoặc chuyển giao cho một instance thực thi khác.

**Thứ năm, hành vi tự chủ bị ràng buộc bởi cơ chế có tính xác định.** Quyền hạn, sandbox, ngân sách, middleware, output có cấu trúc, phê duyệt của con người và xử lý lỗi cùng tạo thành ranh giới kỹ thuật mà model không tự vòng qua được.

**Thứ sáu, cải tiến liên tục thông qua observability và đánh giá.** Hệ thống không chỉ lưu output cuối, mà còn ghi lại quỹ đạo thực thi, lời gọi tool, thay đổi state, tiêu hao tài nguyên và phản hồi của con người, để phiên bản mới có thể vào production sau khi qua hồi quy, canary và phê duyệt.

Sáu đặc trưng này là căn cứ để phán định hình thái kiến trúc của ứng dụng, chứ không phải một danh sách tính năng phải bật đồng thời. Agentic Application không cần dùng mức tự chủ cao nhất trong mọi task, cũng không mặc định phải dùng Long-Horizon Agent hay Multi-Agent, nhưng phải có được năng lực chuyển hoá mục tiêu nghiệp vụ thành quá trình thực thi trong ranh giới có kiểm soát.

### 1.3.3 Ranh giới khái niệm

Để tránh trộn lẫn Model, Agent, Harness, Single-Agent, Long-Horizon Agent, Multi-Agent, ứng dụng hoàn chỉnh và nền tảng dùng chung, cuốn sách trắng này xác định các khái niệm liên quan như sau.

| Khái niệm | Ý nghĩa trong cuốn sách này | Không đồng nghĩa với |
| --- | --- | --- |
| Model | Hạt nhân nhận thức mang tính xác suất, cung cấp năng lực hiểu ngôn ngữ, suy luận, đa phương thức, tạo sinh và ra quyết định gọi tool | Một Agent hoàn chỉnh hay một ứng dụng hoàn chỉnh |
| Agent | Chủ thể thực thi được cấu thành từ Model và Harness, có thể quan sát, phán đoán, hành động và nhận phản hồi xoay quanh mục tiêu; biểu đạt trọn vẹn ở tầng hình thái ứng dụng của nó là Agentic Application | Bất kỳ phần mềm nào có dùng model, hay một lần gọi model đơn lẻ |
| Harness | Hệ thống kỹ thuật nằm ngoài model, dùng để tổ chức, ràng buộc và gánh phần thực thi task do model dẫn dắt; khi triển khai có thể tách thành các cơ chế context, state, gọi năng lực, vận hành, cô lập, quan sát, đánh giá và quản trị | Một Prompt đơn lẻ, một Agent Loop đơn giản, hay một framework Agent cụ thể nào đó |
| Single-Agent | Hình thái cơ sở trong đó một Agent đơn lẻ nắm vòng lặp task và hoàn thành task có biên trong ranh giới rõ ràng | Một ứng dụng Agent đơn lẻ cần chạy liên tục xuyên phiên (đó là Long-Horizon Agent), hay một ứng dụng hội thoại chỉ gọi model một lần và không có năng lực tool, state |
| Long-Horizon Agent | Agent có thể thực thi task liên tục xuyên nhiều lượt, xuyên phiên hoặc xuyên process, và duy trì tính liên tục của task bằng state bền vững, checkpoint, khôi phục và sự dẫn dắt của con người | Chỉ đơn thuần mở rộng cửa sổ context, hay một lần gọi model kéo dài |
| Multi-Agent | Hình thái hệ thống trong đó nhiều Agent với vai trò, năng lực hoặc ranh giới quyền hạn khác nhau cùng hoàn thành task thông qua cơ chế orchestration, giao tiếp, bàn giao hoặc thẩm định rõ ràng | Việc gọi song song nhiều model một cách đơn giản, hay chẻ máy móc cùng một task thành nhiều prompt |
| Agentic Application | Biểu đạt trọn vẹn của Agent ở tầng hình thái ứng dụng, nhấn mạnh việc kết hợp với logic nghiệp vụ, dữ liệu, tool, môi trường và tương tác người dùng để bàn giao giá trị nghiệp vụ; trên phổ hình thái, nó bao trùm Single-Agent, Long-Horizon Agent và Multi-Agent | Một lần gọi model, một SDK, một framework Agent hay một nền tảng dùng chung |
| Agent Platform | Nền tảng doanh nghiệp cung cấp năng lực dùng chung về thiết kế, xây dựng, vận hành, quản trị và tối ưu cho các Agentic Application | Một Agent nghiệp vụ đơn lẻ hay một Agentic Application cụ thể |

*Bảng 1-3 — Các khái niệm liên quan tới Agentic Application và ranh giới của chúng*

Trong đó, có ba ranh giới đặc biệt quan trọng.

**Trước hết, Agent không đồng nghĩa với framework Agent.** Cuốn sách này coi Agentic Application là biểu đạt trọn vẹn của Agent ở tầng hình thái ứng dụng; hai thứ đó không phải hai hình thái nối tiếp nhau. Framework Agent có thể cung cấp các trừu tượng phát triển như Agent Loop, Tool, Memory, nhưng bản thân framework không tự động tạo ra một Agent có thể thực thi liên tục xoay quanh mục tiêu, kết nối với môi trường nghiệp vụ và bàn giao kết quả kiểm chứng được. Doanh nghiệp vẫn phải kết hợp với bối cảnh cụ thể để hoàn tất việc tổ chức context, quản lý state, tích hợp tool, ràng buộc quyền hạn, bảo đảm vận hành và đánh giá kết quả.

**Kế đến, Long-Horizon Agent và Multi-Agent không đại diện cho mức trí tuệ hay mức trưởng thành cao hơn một cách tự nhiên.** Thực thi dài làm tăng độ khó của việc trôi trạng thái, khôi phục sau lỗi và kiểm soát chi phí; cộng tác multi-agent làm tăng chi phí giao tiếp và kéo theo các vấn đề về state dùng chung, lan truyền lỗi và phân định trách nhiệm. Doanh nghiệp nên kiểm chứng trước bằng ứng dụng Single-Agent có ranh giới rõ ràng; chỉ khi một Agent đơn lẻ bị giới hạn bởi độ dài thời gian, dung lượng context, xung đột trách nhiệm, cô lập quyền hạn hoặc hiệu suất song song, thì mới đưa vào cấu trúc long-horizon hay multi-agent tương ứng.

**Cuối cùng, hình thái ứng dụng không đồng nghĩa với hình thái nền tảng.** Single-Agent, Long-Horizon Agent và Multi-Agent mô tả task được thực thi ra sao, và chủ thể thực thi kéo dài xuyên thời gian hay cộng tác với nhau ra sao; còn Agent Platform cung cấp cho nhiều ứng dụng các năng lực dùng chung về xây dựng, vận hành, quản trị và tối ưu. Cùng một hình thái ứng dụng có thể chạy dựa trên một nền tảng thống nhất, cũng có thể dùng cách hiện thực hoá kỹ thuật độc lập; và ngay cả khi năng lực nền tảng đã đầy đủ hơn, điều đó cũng không có nghĩa một ứng dụng cụ thể buộc phải dùng cấu trúc long-horizon hay multi-agent.

## 1.4 Từ demo được đến vận hành được: mức trưởng thành doanh nghiệp và phán định nâng cấp

### 1.4.1 Mức trưởng thành không do tên sản phẩm quyết định

Một sản phẩm dù có chữ Agent trong tên vẫn có thể chỉ làm được việc sinh nội dung một lượt; ngược lại, một hệ thống lấy Workflow làm hạt nhân lại có thể đã có state bền vững, kiểm soát quyền hạn, observability và đánh giá liên tục. Vì vậy, mức trưởng thành của một Agentic Application không thể do tên sản phẩm hay nhãn công nghệ quyết định, mà phải phán định tổng hợp trên bốn chiều: **vòng lặp task, phạm vi thực thi, tác động môi trường và quản trị production**.

Cuốn sách trắng này chia mức trưởng thành doanh nghiệp của Agentic Application thành bốn cấp. Mô hình này là khung phân tích do cuốn sách đề xuất dựa trên chiều kiến trúc ứng dụng, dùng để phán định hình thái năng lực của một ứng dụng cụ thể; nó **không** đồng nghĩa với mô hình mức trưởng thành áp dụng AI của doanh nghiệp vốn lấy chiến lược, tổ chức, quy trình và văn hoá làm đối tượng.

| Mức trưởng thành | Ứng dụng và trạng thái vận hành điển hình | Năng lực cốt lõi | Giới hạn điển hình | Ngưỡng để nâng cấp |
| --- | --- | --- | --- | --- |
| L1 — Hỗ trợ tạo sinh | Chat, RAG, Copilot cơ bản | Tạo sinh nội dung, truy hồi tri thức, gọi tool đơn giản | Vòng khép kín của task do con người hoàn tất, hệ thống hiếm khi duy trì trạng thái thực thi | Thiết lập Prompt, tri thức và bộ đánh giá cơ bản có thể tái sử dụng |
| L2 — Tự động hoá có kiểm soát | Workflow, dùng Agent cục bộ trong Workflow | Quy trình định trước, output có cấu trúc, ra quyết định động cục bộ, phê duyệt | Khả năng thích ứng với đường đi chưa biết và tình huống bất thường còn hạn chế | Làm rõ ranh giới tự chủ, đưa vào Harness, chính sách tool và đánh giá trajectory |
| L3 — Agentic Execution | Agentic Application trong đó Agent nắm vòng lặp task (Single-Agent, Long-Horizon Agent hay Multi-Agent đều được), Hybrid | Lập kế hoạch động, thao tác tool và môi trường, task nhiều bước, state bền vững, khôi phục sau sự cố | Dễ gặp vấn đề production ở các mặt chi phí, quyền hạn, khuếch đại lỗi và trôi version | Thiết lập Runtime, Sandbox, Observability, Security và Evaluation |
| L4 — Vận hành quy mô và tối ưu liên tục | Agentic Application đã đạt vận hành ở quy mô, quản trị thống nhất và tối ưu liên tục | Chạy đa task và đa tenant, kiểm soát bằng policy, observability, bảo mật, đánh giá offline và online, canary và tối ưu liên tục | Hệ thống phức tạp, cần nền tảng, tổ chức và năng lực quản trị cùng tiến hoá | Dùng nền tảng dùng chung, tri thức tổ chức, chuẩn hoá và tự động hoá để hạ chi phí quản trị |

*Bảng 1-4 — Mô hình mức trưởng thành doanh nghiệp của Agentic Application*

L4 mô tả **mức năng lực** về vận hành quy mô, quản trị thống nhất và tối ưu liên tục của ứng dụng, chứ không phải một hình thái ứng dụng mới. Agent Platform có thể cung cấp cho nhiều ứng dụng các năng lực dùng chung về thiết kế, xây dựng, vận hành, quản trị và tối ưu; khi doanh nghiệp bước vào L4, thường phải bổ sung đồng thời năng lực ở cả ba mặt: ứng dụng cụ thể, nền tảng dùng chung và quản trị tổ chức. Cần phân biệt rõ: Single-Agent, Long-Horizon Agent và Multi-Agent đều có thể ở L3 hoặc L4 — **dùng hình thái nào là do cấu trúc task quyết định, còn ở mức trưởng thành nào là do độ đầy đủ của năng lực vận hành và quản trị quyết định.**

Bốn cấp này mô tả sự tiến hoá năng lực của ứng dụng doanh nghiệp từ hỗ trợ tạo sinh, tự động hoá có kiểm soát và thực thi tự chủ, tiến tới vận hành quy mô và tối ưu liên tục. Chúng không có nghĩa mọi ứng dụng đều phải nâng cấp lần lượt: một trợ lý tri thức rủi ro thấp có thể ở lại L1 lâu dài; một hệ thống phê duyệt giao dịch có thể chọn L2, giữ đường đi lõi bằng Workflow có tính xác định; những bối cảnh khó dự đoán đường đi như R&D, vận hành, nghiên cứu và chăm sóc khách hàng phức tạp thì có thể bước vào L3; còn khi ứng dụng bước vào vận hành ở quy mô và liên quan tới đa task đồng thời, tài nguyên dùng chung, dữ liệu doanh nghiệp, multi-tenant hoặc thao tác tác động lớn, thì cần bổ sung các năng lực vận hành và quản trị mà L4 đòi hỏi.

Vì vậy, doanh nghiệp nên kết hợp giá trị task, rủi ro, quy mô vận hành và chi phí kỹ thuật để chọn cho mỗi loại task một **kiến trúc tối giản nhưng đủ dùng** với chi phí và rủi ro chấp nhận được. Đây là nguyên tắc ra quyết định xuyên suốt chương này. Mô hình mức trưởng thành một mặt dùng để nhận diện năng lực hiện có của ứng dụng cùng những điều kiện vận hành, quản trị và tối ưu còn phải bổ sung để lên mức cao hơn; mặt khác cũng làm tham chiếu cho việc phán định nâng cấp: **chỉ khi kiến trúc hiện tại không thể bàn giao nhiệm vụ với rủi ro và chi phí chấp nhận được, mà năng lực bổ sung lại có giá trị rõ ràng, thì việc nâng cấp mới cần thiết.**

### 1.4.2 Từ mức trưởng thành đi tới quyết định kiến trúc

Khi doanh nghiệp đẩy một ứng dụng AI từ demo sang production, việc thiết kế kiến trúc nên đi trước việc xây dựng cụ thể. Thiết kế kiến trúc không phải là chọn càng nhiều năng lực càng tốt trong một danh sách component, mà là cắt gọt kiến trúc tham chiếu dựa trên mục tiêu task, rủi ro, phạm vi thực thi, ranh giới cộng tác và quy mô vận hành, đồng thời xác định ranh giới trách nhiệm giữa Model và Harness, giữa quy trình có tính xác định và ra quyết định tự chủ, giữa Single-Agent và Multi-Agent, và giữa con người với hệ thống. Sau quyết định tiền đề đó, doanh nghiệp cần lần lượt trả lời năm câu hỏi nối tiếp nhau sau đây.

*   **Thiết kế kiến trúc thế nào?** Nên dùng Workflow, Single-Agent hay Hybrid? Có thực sự cần dùng Long-Horizon Agent hay Multi-Agent không? Ranh giới task, mức tự chủ, cách cộng tác người–máy, sự phân công giữa các Agent, các điểm kiểm soát có tính xác định và nguyên tắc cắt gọt kiến trúc tham chiếu nên được xác định ra sao?

*   **Xây dựng thế nào?** Model, Agent Loop, Context, State, Memory, Tool, Skill và Protocol nên kết hợp ra sao? Trong logic nghiệp vụ, phần nào do Agent quyết định động, phần nào nên cố định thành Workflow, rule hoặc Skill tái sử dụng được?

*   **Vận hành thế nào?** Task được lập lịch ra sao, state bền vững hoá thế nào, tool chạy trong môi trường nào, sau khi lỗi thì khôi phục ra sao, các task và tenant khác nhau cô lập với nhau thế nào?

*   **Quản trị thế nào?** Agent do ai chịu trách nhiệm, truy cập được tài nguyên nào với định danh gì, thao tác nào bắt buộc phải phê duyệt, việc quan sát, audit và xử lý bất thường tiến hành ra sao?

*   **Tối ưu thế nào?** Phán định chất lượng kết quả task ra sao, định vị vấn đề từ Trace và phản hồi thế nào, điều chỉnh Model, Prompt, Context, Skill hay Harness ra sao, và kiểm chứng phiên bản mới qua hồi quy, mô phỏng và canary thế nào, rồi kịp thời rollback khi hiệu quả không đạt kỳ vọng?

Năm câu hỏi này cùng tạo thành các vấn đề kiến trúc chính của một Agentic Application cấp doanh nghiệp. Thiết kế kiến trúc là quyết định tiền đề cho việc xây dựng, vận hành, quản trị và tối ưu; còn bốn thứ sau tạo thành một vòng lặp kỹ thuật lặp liên tục. Chương tiếp theo sẽ đưa ra kiến trúc tham chiếu hoàn chỉnh của Agentic Application, giải thích cách bóc tách năng lực kỹ thuật dựa trên nền tảng *Agent = Model + Harness*, và cung cấp một bản đồ thống nhất cho việc xây dựng, vận hành, quản trị và tối ưu về sau.

### 1.4.3 Từ quản lý phần mềm đến quản lý Agent: đưa vào góc nhìn hệ điều hành

Hai mục trước đã trả lời câu hỏi doanh nghiệp phán định mức trưởng thành ra sao, và hoàn tất quyết định kiến trúc trước khi xây dựng ra sao. Nhưng khi nhiều Agentic Application vào production, chạy đồng thời lâu dài trên cùng một cụm máy, sẽ nổi lên một vấn đề bị che khuất bởi những cuộc thảo luận về Harness và Agent Platform: **ai gánh và ràng buộc việc chạy của những Agent này.** Vấn đề này đồng dạng với thứ hệ điều hành đã phải giải quyết năm xưa — nhiều chương trình không tin nhau dùng chung phần cứng, buộc phải được lập lịch, cô lập, đo đếm và audit một cách thống nhất. Ngày nay Agent trở thành đối tượng được chạy kiểu mới, còn nhóm trách nhiệm công cộng gánh chúng thì vẫn chưa hội tụ thành một tầng rõ ràng.

Trừu tượng của hệ điều hành cổ điển được xây trên một tiền đề: đường đi thực thi của chương trình do lập trình viên xác định lúc viết, nên dự đoán được, tái lập được, kiểm tra tĩnh được. Process là đơn vị thực thi, file và bộ nhớ là state, system call là năng lực, user và bit quyền là uỷ quyền. Chính vì đường đi có tính xác định nên quyền có thể trao một lần khi tạo process, vượt quyền thì từ chối; khôi phục sự cố có thể lấy process làm đơn vị, thoát là thu hồi; audit có thể ở mức từng system call, hậu kiểm là tái dựng được ai đã làm gì.

Như đặc trưng thứ hai ở mục 1.3.2 đã nêu, một phần đường đi thực thi của Agentic Application do model quyết định lúc chạy — điều này lung lay gần như mọi tiền đề trên. Tên của các trách nhiệm quản lý thì không đổi — vẫn là lập lịch, cô lập, tài nguyên, uỷ quyền, khôi phục, audit — nhưng giả định của từng thứ đều đã bị viết lại.

| Chiều quản lý | Phần mềm truyền thống (chương trình có tính xác định) | Agentic Application (một phần đường đi quyết định lúc chạy) |
| --- | --- | --- |
| Đơn vị thực thi | Process hoặc thread, đường đi xác định khi viết | Instance chạy của task (Run), đường đi quyết định lúc chạy, có thể xuyên process và xuyên bản sao |
| State | Sống theo bộ nhớ process, process thoát là giải phóng | Đưa ra ngoài, bền vững, khôi phục được, độc lập với instance đang gánh nó |
| Giao diện năng lực | System call và thiết bị xác định khi khởi động | Tool và endpoint MCP tích hợp động lúc chạy |
| Uỷ quyền | Trao một lần khi tạo, vượt quyền thì từ chối | Mỗi thao tác tác động lớn đều bị phán định cưỡng chế theo policy, và phải thu hồi được |
| Khôi phục sự cố | Lấy process làm đơn vị, thoát là thu hồi | Lấy task làm đơn vị, cần checkpoint, tính idempotent và bù trừ xuyên hệ thống |
| Audit | Ở mức system call và truy cập file | Chuỗi liên kết giữa ý định, lời gọi tool, phản hồi môi trường và kết quả |

*Bảng 1-5 — Khác biệt về giả định quản lý giữa phần mềm truyền thống và Agentic Application*

Trong đó, hai điểm đặc biệt then chốt. **Uỷ quyền** không thể chỉ trao lúc khởi động, mà phải bị phán định cưỡng chế theo policy ở mỗi thao tác tác động lớn; và vì model có thể tìm cách vòng qua, nên ranh giới phải là thứ nó không tự vượt được (xem đặc trưng thứ năm ở 1.3.2). **Khôi phục** cũng không thể chỉ nhìn xem process đang gánh nó còn sống hay không: một Run có thể đã treo chờ phê duyệt, và đã phát ra tác dụng phụ tới hệ thống bên ngoài — khởi động lại không đồng nghĩa với khôi phục đúng (xem đặc trưng thứ tư ở 1.3.2).

Những trách nhiệm này đang nổi lên lặp đi lặp lại từ từng ứng dụng. Mục 1.1.3 đã chỉ ra rằng các năng lực như tích hợp và routing model, quản lý context, tool và giao thức, state và workspace, sandbox và quyền hạn, khôi phục task dài, observability và đánh giá, quản trị bảo mật và tối ưu liên tục sẽ lặp lại ở các ứng dụng khác nhau, rồi dần tách khỏi từng ứng dụng nghiệp vụ đơn lẻ, tích tụ thành Harness và Agent Platform dùng chung. Từ góc nhìn hệ điều hành, còn có thể đi thêm một bước: trong số đó, một phần **không** thuộc về một Harness cụ thể nào, mà thuộc về tầng gánh vác và quản trị dùng chung cho mọi Agent. Harness quyết định task chạy trong context nào, dùng năng lực gì, theo vòng lặp nào — nó gánh **ngữ nghĩa task**, khác nhau tuỳ nghiệp vụ, không nên chìm xuống. Còn việc tạo và thu hồi sandbox một cách nhẹ nhàng, việc thao tác tác động lớn bị chặn cưỡng chế ở đâu, bộ nhớ xuyên phiên và snapshot workspace, ngân sách và uỷ quyền phái sinh theo subtask rồi thu hồi được một lần — những trách nhiệm hay bị nhiều Agent hiện thực lặp lại, và phù hợp hơn khi được bảo đảm bởi một bên nằm ngoài bên bị ràng buộc — mới là phần nên hội tụ.

Vì vậy, giữa Harness và phần cứng đang nổi lên một tầng chưa có tên gọi rõ ràng: nó không giữ ngữ nghĩa task, nhưng cung cấp cho mọi Agent các đối tượng chạy dùng chung, cách tích hợp năng lực, ranh giới cưỡng chế được và nguồn bằng chứng thống nhất. Chương 30 của cuốn sách gọi nó là **Agentic OS**.

Ở đây chỉ đưa ra một nhận định: khi doanh nghiệp đi từ chỗ chạy một Agent sang vận hành ở quy mô nhiều Agent và nhiều task dài — tức bước vào mức L4 "vận hành quy mô và tối ưu liên tục" như mục 1.4.1 mô tả — nếu thiếu tầng này, mỗi ứng dụng sẽ buộc phải tự chế lại việc lập lịch, cô lập, uỷ quyền và audit: vừa trùng lặp, vừa khó tin nhau.

Sẽ có người hỏi: chẳng phải cloud và Kubernetes đã cung cấp những năng lực này từ lâu rồi sao? Khác biệt nằm ở chỗ **chúng quản lý Pod chứ không phải Run**: khởi động lại một container lỗi probe không đồng nghĩa với khôi phục đúng một task vốn đã phát ra tác dụng phụ; chúng điều hoà hạ tầng về khớp với một bản mô tả khai báo, nhưng không phán định xem task đã thực sự hoàn thành một cách an toàn hay chưa. Vì vậy cloud và Kubernetes là **nền móng** của tầng này, chứ không phải vật thay thế nó; thứ còn thiếu là những trừu tượng Agent-native dịch container, quota và IAM sang thành Run, hợp đồng thuê ngân sách (budget lease) và bản ghi thao tác.

Điều này cũng tương ứng với năm câu hỏi kiến trúc nêu ở mục 1.4.2: *thiết kế kiến trúc thế nào* và *xây dựng thế nào* chủ yếu liên quan tới việc chọn hình thái và tổ hợp năng lực của Harness; còn *vận hành thế nào*, *quản trị thế nào*, *tối ưu thế nào* thì phần lớn rơi vào tầng công cộng này. Chương 2 sẽ đưa ra kiến trúc tham chiếu hoàn chỉnh trước, rồi chương 30 quay lại tầng này để bàn về phôi thai, ranh giới và những câu hỏi vẫn còn bỏ ngỏ của nó.

## 1.5 Tóm tắt chương

Ứng dụng AI-native đang đi từ việc *tích hợp model vào phần mềm* sang một giai đoạn mới: *để Agent hoàn thành nhiệm vụ trong một hệ thống có kiểm soát*. Coding Agent là bên đầu tiên kiểm chứng rằng một hệ thống model nhiều bước, có state, thao tác được môi trường có thể tạo ra năng lực sản xuất thật; và những thực hành kỹ thuật phía sau nó — Harness, Context, State, Memory, Runtime, Sandbox, Observability, Evaluation — đang dần lan sang nhiều loại nhiệm vụ và nhiều ngành hơn.

Chương này lấy *Agent = Model + Harness* làm nền tảng để hiểu kiến trúc Agent. Công thức này nhấn mạnh rằng năng lực model chỉ tạo thành Agent khi kết hợp với hệ thống kỹ thuật tổ chức, ràng buộc và gánh phần thực thi; còn khi triển khai thực tế, Harness theo nghĩa rộng còn phải tách tiếp thành các năng lực kiến trúc: Agent Loop; Context, State và Memory; Tool, Skill và Protocol; Runtime và Sandbox; Observability và Evaluation; cùng Security và Governance. Ở tầng hình thái ứng dụng, cuốn sách dùng thuật ngữ Agentic Application để nhấn mạnh sự kết hợp của Agent với logic nghiệp vụ, dữ liệu, tool, môi trường và tương tác người dùng, cũng như việc bàn giao kết quả nghiệp vụ kiểm chứng được.

Về hình thái ứng dụng, Agentic Application lấy Single-Agent làm hình thái cơ sở và có thể mở rộng tiếp theo hai hướng: Long-Horizon Agent kéo task từ thực thi có biên sang thực thi liên tục xuyên phiên, tạm dừng và khôi phục được; Multi-Agent mở rộng một chủ thể thực thi đơn lẻ thành một hệ cộng tác có phân công về vai trò, năng lực và quyền hạn. Cả ba đều thuộc Agentic Application; hai hình thái sau có thể áp dụng độc lập hoặc kết hợp, nhưng đều không phải giai đoạn nâng cấp bắt buộc với mọi ứng dụng. **Ứng dụng dùng hình thái nào, và nó có vận hành được ở quy mô, quản trị thống nhất và tối ưu liên tục hay không — đó là hai câu hỏi cần phán định riêng rẽ.**

Chương này đồng thời nhấn mạnh: **mức tự chủ phải tương xứng với rủi ro của task**, và doanh nghiệp nên chọn kiến trúc tối giản nhưng đủ dùng — đáp ứng được mục tiêu task với chi phí và rủi ro chấp nhận được. Thiết kế kiến trúc cần đi trước việc xây dựng, và phải xác định ranh giới cho việc vận hành, quản trị và tối ưu về sau. Chỉ khi một hình thái phức tạp hơn và một mức trưởng thành cao hơn thực sự giải quyết được vấn đề của bối cảnh hiện tại, thì việc tiến hoá kiến trúc mới có tính cần thiết về mặt nghiệp vụ lẫn kỹ thuật.
