# Chương 2 — Kiến trúc tham chiếu của Agentic Application

Ở chương trước, chúng ta đã định nghĩa Agentic Application là sự biểu đạt trọn vẹn của Agent ở tầng hình thái ứng dụng, và tách Agent thành hai phần: Model và Harness. Model là hạt nhân nhận thức, nhưng độ tin cậy không thể gửi gắm vào bản thân model; Agent cần được trao một mức tự chủ nhất định với task, đồng thời bắt buộc phải có một hệ thống có tính xác định ràng buộc năng lực, môi trường và phạm vi ảnh hưởng của nó. Nhận định này làm thay đổi trực tiếp đối tượng kiến trúc: thứ doanh nghiệp cần thiết kế không còn chỉ là một lần gọi model, mà là một hệ thống hoàn chỉnh trải dài từ nhận thức, trạng thái, thực thi, kiểm soát đến cải tiến liên tục.

Cái khó của thiết kế kiến trúc không nằm ở việc liệt kê càng nhiều component càng tốt, mà ở việc **phân định ranh giới trách nhiệm**. Ranh giới giữa Model và Harness không rõ sẽ khiến việc nâng cấp model biến thành tái cấu trúc ứng dụng. Không tách bạch giữa logic orchestration tổ chức vòng lặp task với Runtime gánh phần chạy task sẽ khiến ngữ nghĩa task bị buộc chặt vào hạ tầng. Không tách bạch Context với State sẽ khiến ta nhầm một lịch sử hội thoại không đầy đủ thành sự thật về task có thể khôi phục. Còn trộn lẫn sandbox, quyền hạn và mô tả tool sẽ khiến ta nhầm chuyện *model biết một tool nào đó* thành *model có quyền thực hiện một thao tác nào đó*. Bốn loại vấn đề ranh giới này thường không lộ ra ở giai đoạn demo, nhưng sẽ xuất hiện dồn dập khi task dài ra, tool nhiều lên và tenant tăng lên.

Chương này đưa ra một bộ kiến trúc tham chiếu cấp doanh nghiệp cho Agentic Application, trung lập với nhà cung cấp. Nó không yêu cầu mọi ứng dụng phải xây dựng đủ mọi component, mà nhằm giúp trước hết nhận diện ràng buộc nghiệp vụ và ứng dụng, rồi mới xác định cách xây dựng – điều phối Agent, điều kiện chạy production, yêu cầu kiểm soát quản trị và vòng lặp tối ưu — từ đó hình thành một **kiến trúc tối giản nhưng đủ dùng**, tương xứng với rủi ro của task.

Chương 1 cung cấp hình thái ứng dụng và các khái niệm cốt lõi; chương này đưa những khái niệm đó vào các miền trách nhiệm, quan hệ component, ranh giới nền tảng và quyết định theo vòng đời, đồng thời thiết lập một hệ toạ độ thống nhất cho bốn phần sau: xây dựng, vận hành, quản trị và tối ưu.

## 2.1 Toàn cảnh kiến trúc

### 2.1.1 Hiểu cùng một hệ thống qua ba góc nhìn

Khi thiết kế kiến trúc cho Agentic Application, cần dùng đồng thời ba góc nhìn trực giao với nhau. Chúng mô tả các mặt khác nhau của **cùng một hệ thống**, chứ không phải ba bộ kiến trúc có thể thay thế lẫn nhau.

**Góc nhìn component trả lời: hệ thống gồm những gì.**

Nó quan tâm tới các năng lực như Model, tầng orchestration Harness, Context, State, Memory, Knowledge, Skill, Tool, Runtime, Sandbox, Gateway, Observability, Evaluation và Security, cùng quan hệ gọi và phụ thuộc giữa chúng. Giá trị của góc nhìn component là tránh bỏ sót năng lực — đặc biệt là tránh coi việc quản lý context, bền vững hoá state và kiểm chứng kết quả là "chi tiết hiện thực".

**Góc nhìn nền tảng trả lời: những component này chạy ở đâu, ai chịu trách nhiệm.**

Nó chia hệ thống doanh nghiệp thành mặt phẳng thực thi, mặt phẳng dữ liệu và tài nguyên, cùng mặt phẳng điều khiển; đồng thời giải thích Gateway, định danh, tenant, policy và observability liên động với nhau ra sao. Giá trị của góc nhìn nền tảng là tránh nhập nhằng trách nhiệm: cùng một năng lực có thể do đội ứng dụng hiện thực, mà cũng có thể do nền tảng dùng chung cung cấp — chi phí, khả năng mở rộng và cường độ quản trị của hai cách đó không giống nhau.

**Góc nhìn vòng đời trả lời: hệ thống đi từ quyết định kiến trúc tới vận hành, rồi được quản trị và cải tiến trong lúc chạy ra sao.**

Nó tổ chức quyết định kiến trúc, version, task, Trace, Policy, Dataset, Evaluator và Patch thành một vòng khép kín: thiết kế kiến trúc, xây dựng, vận hành, quản trị, tối ưu. Giá trị của góc nhìn vòng đời là tránh nhầm một bản demo Agent chạy một lần thành một hệ thống doanh nghiệp vận hành bền vững.

Ba góc nhìn không suy ra được lẫn nhau. Component đầy đủ không có nghĩa trách nhiệm đã rõ ràng; trách nhiệm rõ ràng cũng không có nghĩa thay đổi đã kiểm soát được. Vì vậy, khi bàn về một năng lực nào đó, cần xác định rõ đang ở góc nhìn nào: cùng một State Store, ở góc nhìn component là năng lực bền vững hoá sự thật về task, ở góc nhìn nền tảng thuộc mặt phẳng dữ liệu và tài nguyên, còn ở góc nhìn vòng đời lại là nguồn bằng chứng được sinh ra ở giai đoạn vận hành và được đọc đi đọc lại ở giai đoạn tối ưu.

### 2.1.2 Năm miền trách nhiệm năng lực

Hình 2-1 trình bày năm miền trách nhiệm năng lực của kiến trúc tham chiếu từ góc nhìn component. Trong hình, nét liền đậm biểu thị quan hệ chính từ mục tiêu nghiệp vụ tới thực thi task; nét liền mảnh trong từng miền biểu thị quan hệ gọi và đọc ghi giữa các component; nét đứt biểu thị các tác động ngang như version, định danh, policy, quan sát, đánh giá và bằng chứng thay đổi. Chữ "tầng" ở đây dùng để tổ chức trách nhiệm kiến trúc, không biểu thị một call stack nghiêm ngặt hay thứ tự xây dựng. Các viết tắt trong hình gồm: LLM (Large Language Model), API (Application Programming Interface), MCP (Model Context Protocol) và A2A (Agent-to-Agent).

*Hình 2-1 — Kiến trúc tham chiếu cấp doanh nghiệp của Agentic Application (góc nhìn component)*

![diagram.svg](../assets/imgs/chapter-02/image-001.svg)

**Tầng nghiệp vụ và ứng dụng**

Định nghĩa người dùng, mục tiêu nghiệp vụ, cách tương tác, hình thái tổ chức task và điều kiện nghiệm thu. Một Agentic Application có thể được kích hoạt bằng hội thoại, mà cũng có thể bằng API, message, timer hay event nghiệp vụ; task có thể do Single-Agent đảm nhận, có thể vì thực thi liên tục xuyên thời gian mà thành Long-Horizon Agent, hoặc vì phân công vai trò và cộng tác mà thành Multi-Agent, hoặc kết hợp với Workflow thành Hybrid. Những tên gọi này lần lượt mô tả chủ thể thực thi, phạm vi thời gian và cách kết hợp — chúng không phải các giá trị loại trừ nhau trên cùng một chiều phân loại. Tầng này không hiện thực hoá năng lực Agent tổng quát, mà làm rõ *vì sao hệ thống tồn tại, cần hoàn thành cái gì, và kết quả thế nào thì nghiệp vụ chấp nhận được*.

**Tầng xây dựng và orchestration Agent**

Kết hợp Model, logic orchestration Harness, chính sách Context, Memory, Knowledge, Skill, cùng phần định nghĩa năng lực của Tool, Protocol và Connector thành một vòng lặp task có thể quan sát, phán đoán, hành động và nhận phản hồi. Chữ "xây dựng" ở đây không phải hoạt động phát triển một lần rồi thôi: logic orchestration được xây ra sẽ làm việc liên tục ở mỗi lần task chạy. Hệ thống bên ngoài, trình duyệt, Shell và môi trường thực thi code **không** thuộc tầng này; tầng này chỉ mô tả và ràng buộc các năng lực khả dụng, còn việc thực thi thật cùng phạm vi ảnh hưởng thì do tầng vận hành production gánh.

**Tầng vận hành production**

Gánh các task xuyên thời gian, xuyên request; cung cấp lập lịch, bền vững hoá state, workspace, cô lập, khôi phục, quản trị traffic và quản lý tài nguyên.

**Tầng quản trị và kiểm soát**

Định nghĩa ai được phát hành, chạy và sửa Agent, tài nguyên nào được truy cập, version luân chuyển ra sao, và policy được ban hành, thực thi cùng audit ra sao. Tầng vận hành production trả lời câu hỏi *task có chạy ổn định được không*; tầng quản trị và kiểm soát trả lời câu hỏi *version nào và hành động nào được phép xảy ra*. Các điểm phán định quản trị có thể phân tán trên đường đi request tại Harness, Gateway, Runtime và Sandbox, nhưng policy, version và ngữ nghĩa audit thì cần được quản lý tập trung.

**Tầng tối ưu**

Lấy Trace, Metric, Log, chi phí, kết quả và phản hồi từ quá trình chạy; thông qua đánh giá, phân tích bảo mật, mô phỏng và thí nghiệm để định vị vấn đề, hình thành các thay đổi ứng viên cùng bằng chứng kiểm chứng. Tầng tối ưu **không** sửa trực tiếp Agent đang chạy trong production; thay đổi buộc phải quay về tầng xây dựng và orchestration để tạo thành version mới, đi qua cổng kiểm soát của tầng quản trị rồi mới vào tầng vận hành production. Việc thu thập Trace, Metric và Log diễn ra trên đường chạy, còn chuẩn đo của chỉ số, baseline đánh giá và ngưỡng chấp nhận thì do trách nhiệm quản trị và tối ưu cùng định nghĩa.

Trong đó, **Security không phải một component đơn lẻ chỉ thuộc tầng tối ưu**, mà là trách nhiệm kiến trúc xuyên cả năm tầng: tầng nghiệp vụ xác định rủi ro và ranh giới nghiệm thu; tầng xây dựng hiện thực các ràng buộc an toàn và logic kiểm chứng; tầng vận hành cung cấp cô lập và kiểm soát thực thi; tầng quản trị và kiểm soát định nghĩa định danh, policy và audit; tầng tối ưu kiểm chứng xem những biện pháp đó có hiệu quả hay không qua đánh giá bảo mật, red team và mô phỏng. Khối Security Analysis trong hình chỉ biểu thị năng lực phân tích bảo mật ở phía tối ưu.

### 2.1.3 Nguyên tắc thiết kế kiến trúc cấp doanh nghiệp

Kết hợp các kiến trúc và thực tiễn kỹ thuật công khai của AWS, Google, Microsoft, Anthropic, LangChain và OpenAI từ nửa cuối năm 2025 tới nay, Agentic Application cấp doanh nghiệp thể hiện năm nguyên tắc thiết kế tương đối ổn định.

**Nguyên tắc một: tách rời Model và Harness.** Model là hạt nhân nhận thức thay thế được; Harness là lớp vỏ kỹ thuật gắn với task, môi trường và yêu cầu tổ chức. Việc nâng cấp model có thể làm vô hiệu một số Prompt bù trừ, tool hoặc cơ chế kiểm soát vòng lặp, vì vậy model và Harness bắt buộc phải được đánh giá cùng nhau, nhưng **không nên** buộc chặt nhau ở mức hiện thực.

**Nguyên tắc hai: tách rời tầng orchestration và Runtime.** Tầng orchestration định nghĩa Agent suy nghĩ và hành động ra sao; Runtime định nghĩa task chạy liên tục trên tài nguyên nào và dưới điều kiện sự cố nào. Chỉ khi tách hai thứ đó, ta mới chuyển đổi được giữa Runtime managed và self-hosted mà không phải viết lại logic task, và mới khôi phục được cùng một task khi Runtime đổi process, đổi node hay đổi region.

**Nguyên tắc ba: đưa state ra ngoài, instance thực thi thay thế được.** Phiên, kế hoạch, việc cần làm, kết quả tool, workspace, memory và artifact không nên chỉ tồn tại trong context của model hay trong bộ nhớ của một Runtime nào đó. Event bền vững, Checkpoint và workspace bên ngoài là tiền đề cho việc khôi phục task dài và chạy phân tán.

**Nguyên tắc bốn: mức tự chủ phải tương xứng với quyền hạn và khả năng kiểm chứng.** Agent càng có nhiều tool, mạng, dữ liệu và credential thì bán kính ảnh hưởng tiềm tàng (Blast Radius) càng lớn. Hệ thống nên thiết lập ranh giới bằng tổ hợp: quyền tối thiểu, credential ngắn hạn, kiểm soát outbound mạng, cô lập Sandbox, kiểm chứng kết quả và phê duyệt cho các hành động rủi ro cao.

**Nguyên tắc năm: observability, bảo mật và đánh giá là tiền đề vận hành, chứ không phải bản vá sau khi lên production.** Output của Agent phụ thuộc vào tổ hợp của model, logic orchestration, tool, context, ngân sách và môi trường. Nếu không ghi lại quỹ đạo và kết quả môi trường thì không những không định vị được vấn đề, mà còn không tái lập được đánh giá hay chứng minh được một version đã cải thiện.

Năm nguyên tắc này tự chúng không đòi hỏi phải làm hệ thống to ra: chúng đòi hỏi rằng **mọi phần tự chủ đã trao đi đều phải có ranh giới, bằng chứng và phương tiện kiểm chứng tương xứng**; còn những năng lực tạm thời chưa cần thì có thể chưa xây, nhưng phải nói rõ *trong điều kiện nào thì bắt buộc phải bổ sung*.

## 2.2 Xây dựng và orchestration: Model, orchestration Harness, Context và kết nối năng lực

### 2.2.1 Model: hạt nhân nhận thức thay thế được, định tuyến được

Trong Agentic Application, Model đảm nhận việc hiểu ngữ nghĩa, suy luận, lập kế hoạch, sinh output có cấu trúc, xử lý đa phương thức và ra quyết định gọi tool. Nhưng việc chọn model không nên bị giản lược thành một lần chọn nhà cung cấp, mà phải là một **quyết định liên tục** gắn với task, Harness và chính sách vận hành.

Doanh nghiệp cần đánh giá model ít nhất trên năm chiều: năng lực nền tảng với lĩnh vực và loại task mục tiêu; khả năng tuân thủ chỉ dẫn, sàng lọc thông tin và chống nhiễu trong context dài; độ ổn định khi sinh tham số tool, hiểu kết quả tool, sửa lỗi và gọi nhiều bước; độ trễ, giá, chi phí context, giới hạn đồng thời và khả dụng theo region; cùng với lưu giữ dữ liệu, quyền riêng tư, tuân thủ, triển khai riêng tư và ranh giới vận hành. Ba chiều đầu quyết định Agent có hoàn thành được task hay không; hai chiều sau quyết định nó có chạy được ở quy mô trong doanh nghiệp hay không.

Một Agentic Application phức tạp không nhất thiết dựa vào một model duy nhất cho mọi task. Lập kế hoạch, thực thi, tóm tắt, truy hồi, thẩm định và kiểm duyệt nội dung có yêu cầu khác nhau về năng lực model, độ trễ và chi phí, nên có thể dùng **Model Router** để định tuyến theo loại task, ngân sách, ranh giới dữ liệu và tải hiện tại. Nhưng mỗi tuyến và mỗi chính sách hạ cấp đều làm thay đổi hành vi Agent, nên bắt buộc phải đánh giá hồi quy cùng với Harness đầy đủ — **không được coi việc tương thích giao thức là tương đương về năng lực**. Một kiểu thất bại cần đề phòng: model hạ cấp vẫn trả về lời gọi tool bình thường ở tầng giao thức, nhưng lại đánh mất các ràng buộc trung gian trong task nhiều bước, và thứ cuối cùng sinh ra là một lần thực thi **hợp lệ về cấu trúc nhưng sai về kết quả**.

### 2.2.2 Orchestration Harness: tổ chức những phán đoán xác suất thành thực thi kiểm soát được

Thuật ngữ **Harness theo nghĩa rộng** dùng ở chương 1 chỉ toàn bộ hệ thống kỹ thuật nằm ngoài model, dùng để tổ chức, ràng buộc và gánh phần thực thi task do model dẫn dắt — trong đó bao gồm cả Runtime, Sandbox, Observability và Governance. Cách dùng trong ngành cũng gần với điều này: LangChain khái quát Harness là "mọi thứ ngoài model", còn Microsoft mô tả nó là giàn giáo runtime (Runtime Scaffolding) giúp mô hình ngôn ngữ thực hiện được công việc.

Khi bước vào tầng hiện thực kỹ thuật, Harness theo nghĩa rộng cần được tách tiếp, nếu không thì chữ "Harness" sẽ vừa chỉ ngữ nghĩa task vừa chỉ hạ tầng, khiến trách nhiệm không quy được về đâu. Vì vậy chương này gọi miền con trực tiếp tổ chức vòng lặp task là **tầng orchestration Harness**, và đưa ra một định nghĩa hẹp hơn, dễ quy trách nhiệm hơn:

> *Tầng orchestration Harness là phần code, cấu hình và logic thực thi nằm giữa model và môi trường chạy, dùng để dựng context, tổ chức vòng lặp task, cung cấp năng lực, ràng buộc hành vi và kiểm chứng kết quả trung gian.*

Tầng orchestration Harness là trung khu của Agentic Core, và cũng chính là nơi ranh giới trách nhiệm nằm: nó quyết định model nhìn thấy gì, gọi được gì, dừng lúc nào, và kết quả phải qua những kiểm chứng nào trước khi bàn giao. Cần nhấn mạnh: tầng orchestration Harness và Harness theo nghĩa rộng **không phải hai khái niệm**, mà là cùng một khái niệm được biểu đạt ở hai mức hạt khác nhau: Harness nghĩa rộng trả lời *ngoài model còn cần gì nữa*, tầng orchestration Harness trả lời *trong số đó, phần nào nắm giữ ngữ nghĩa task*. Khi chương này đặt Runtime, Sandbox, Gateway, Observability và Governance song song với tầng orchestration Harness, đó là việc phân định trách nhiệm **bên trong** Harness nghĩa rộng, chứ không phải loại chúng ra khỏi Harness.

Một tầng orchestration Harness cấp production thường gồm các năng lực liệt kê ở bảng 2-2. Cột thứ ba trong bảng là phần khái quát của cuốn sách này về các kiểu thất bại ở production, dùng để giải thích *vì sao năng lực đó không thể bỏ*, chứ không phải số liệu thống kê từ các case công khai.

| Năng lực | Trách nhiệm chính | Kiểu thất bại thường gặp khi thiếu |
| --- | --- | --- |
| Agent Loop và điều kiện dừng | Gọi model, gọi tool, trả kết quả về, retry, dừng, khôi phục và ràng buộc ngân sách | Task không hội tụ, xuất hiện vòng lặp vô tận hoặc ngân sách mất kiểm soát |
| Instruction và Context Engineering | Chọn lọc và sắp xếp chỉ dẫn hệ thống, mô tả task, lịch sử, mô tả tool, memory, kết quả truy hồi và trạng thái môi trường | Thông tin then chốt bị chìm lấp, model lệch khỏi mục tiêu trong context dài |
| Planning và Delegation | Danh sách việc cần làm, mục tiêu theo giai đoạn, sub-agent, thực thi song song, Handoff và tổng hợp kết quả | Task phức tạp thiếu phân chia giai đoạn, sau khi lỗi thì không định vị và nối tiếp được |
| Quản lý Tool và Skill | Đăng ký năng lực, tiết lộ tiệm tiến, kiểm tra tham số, cắt bớt kết quả, đưa kết quả lớn ra ngoài và phân loại lỗi tool | Mô tả tool chiếm chỗ context, lỗi tool bị hiểu nhầm thành lỗi model |
| Middleware và Policy Hook | Thực thi quyền hạn, phê duyệt, audit, lọc nội dung và logic tuỳ biến trước/sau khi gọi model, gọi tool, đổi state và xuất output | Policy chỉ dựa được vào prompt, model có thể vòng qua ràng buộc |
| Compaction và Continuation | Nén hội thoại, reset context, bàn giao qua file và nối tiếp task xuyên cửa sổ context | Task dài đứt gánh khi cạn context, hoặc quá trình nén làm thay đổi sự thật về task |
| Steering, Human-in-the-loop (HITL) và Verification | Chỉnh mục tiêu lúc đang chạy, xin phê duyệt trước hành động then chốt, và trước khi kết thúc thì chạy test, thẩm định, kiểm tra tính toàn vẹn kết quả và xác minh trạng thái môi trường | Hành động rủi ro cao thiếu giám sát của con người, task "trông như đã hoàn thành" nhưng kết quả không đáng tin |

*Bảng 2-2 — Các năng lực cốt lõi của tầng orchestration Harness*

Tầng orchestration Harness không phải một danh sách năng lực tĩnh, mà là một hệ thống cần **tiến hoá cùng model**. Anthropic nhận thấy trong quá trình phát triển ứng dụng chạy dài rằng khi năng lực model mạnh lên, những giàn giáo phức tạp vốn được thiết kế để bù khuyết điểm của model cũ lại có thể trở thành thứ kìm hãm model mới — vì vậy giàn giáo cần được đánh giá lại, thậm chí đơn giản hoá, theo mỗi vòng lặp model. Mặt khác, thực tiễn kỹ thuật công khai của LangChain cho thấy: với model giữ nguyên, việc tối ưu logic orchestration thông qua phân tích Trace, gom cụm lỗi, kiểm chứng trước khi kết thúc và phát hiện vòng lặp (Loop Detection) cũng có thể thay đổi chất lượng hoàn thành task. Hai loại bằng chứng này cùng cho thấy: **bản thân tầng orchestration là một đối tượng đánh giá được, quyết định năng lực của Agent** — không thể thiết kế một lần rồi cố định, và cũng không thể mặc định càng phức tạp càng tốt.

Sự phân công giữa tầng orchestration Harness và Agent Runtime cần được làm rõ ngay ở giai đoạn thiết kế kiến trúc. Tầng orchestration lo các quyết định ở mức ngữ nghĩa: bước tiếp theo làm gì, có cần phê duyệt không, context dựng lại thế nào, task đã đạt hay chưa. Runtime lo các bảo đảm ở mức vật lý: task chạy trên instance nào, xếp hàng và giới hạn tốc độ ra sao, sau khi process gián đoạn thì khôi phục từ Checkpoint nào, tài nguyên và quota thu hồi thế nào. Giao diện giữa hai bên nên là **task và state**, chứ không phải chi tiết lời gọi hàm; một khi tầng orchestration phụ thuộc trực tiếp vào cấu trúc bộ nhớ của một Runtime cụ thể, thì nguyên tắc hai đã bị phá vỡ.

### 2.2.3 Context, State, Memory, Knowledge và Skill: đừng nhét mọi thứ vào một context

Cửa sổ context là phần nội dung model nhìn thấy được ngay lúc này, còn lượng thông tin mà một Agentic Application cần quản lý thì vượt xa những gì một cửa sổ context chứa nổi. Về mặt kiến trúc, ít nhất cần phân biệt năm loại đối tượng, như bảng 2-3.

| Đối tượng | Vấn đề chính | Nội dung điển hình | Vòng đời và yêu cầu nhất quán |
| --- | --- | --- | --- |
| Context | Lần gọi model này nên nhìn thấy gì | System Prompt, mô tả task, tóm tắt lịch sử, mô tả tool, kết quả truy hồi, trạng thái môi trường hiện tại | Ở mức một lần gọi model, được dựng lại liên tục, **không** đóng vai trò nguồn sự thật |
| State | Task đã xảy ra chuyện gì, nên khôi phục từ đâu | Session, Task, Plan, Todo, Checkpoint, trạng thái các lời gọi tool | Ở mức task, cần bản ghi sự thật nhất quán mạnh và được bền vững hoá |
| Memory | Kinh nghiệm tương tác trong quá khứ nào hữu ích cho task hiện tại | Sở thích người dùng, quyết định trong quá khứ, sự thật xuyên phiên, kinh nghiệm task | Xuyên task và xuyên phiên, cần chính sách ghi, cập nhật, quên và quản trị quyền riêng tư |
| Knowledge | Tổ chức đã có sẵn tri thức bên ngoài nào để truy hồi | Tài liệu nghiệp vụ, quy chế chuẩn mực, tài liệu sản phẩm, index RAG và cơ sở tri thức | Đồng bộ với nội dung của tổ chức, cần lọc quyền, quản lý tính thời sự và truy nguyên nguồn |
| Skill | Một loại task nên làm thế nào | Hướng dẫn, script, template, Workflow, checklist và phương pháp kiểm chứng được | Phát hành, tái sử dụng và rollback như một tài sản năng lực có version |

*Bảng 2-3 — Phân biệt Context, State, Memory, Knowledge và Skill*

Cuốn sách này tách riêng Memory và Knowledge, lý do là **cách ghi vào và trách nhiệm quản trị của chúng khác nhau**: Memory do Agent sinh ra trong lúc chạy, rủi ro nằm ở chỗ kinh nghiệm sai bị dùng lại nhiều lần, nên cần có ngưỡng ghi và cơ chế quên. Knowledge đến từ nội dung sẵn có của tổ chức, rủi ro nằm ở việc vượt quyền và thông tin lỗi thời, nên cần khớp với mô hình quyền và chu kỳ cập nhật của hệ thống nguồn. Nhét cả hai vào cùng một vector store thường đồng nghĩa với việc đánh mất cả hai năng lực quản trị này.

Bản chất của Context Engineering không phải nhồi mọi nội dung vào một cửa sổ dài hơn, mà là **chọn đúng thông tin vào đúng thời điểm**. Có thể dùng tóm tắt, offload kết quả tool, truy hồi theo nhu cầu, tiết lộ tiệm tiến Skill, cô lập context của sub-agent và bàn giao qua file, để dành sự chú ý khan hiếm của model cho quyết định hiện tại. Đồng thời, **bắt buộc phải lưu trạng thái thật của task khôi phục được ở ngoài context của model**: nếu việc nén, cắt bớt hay model đọc nhầm có thể làm thay đổi sự thật về task, thì task đã mất khả năng khôi phục, và task dài cùng cộng tác multi-agent cũng không còn cơ sở để bàn.

### 2.2.4 Tool, Protocol và Environment: từ gọi interface đến hành động có kiểm soát

Tool là một năng lực mà Agent có thể yêu cầu; Protocol định nghĩa năng lực được mô tả, khám phá, gọi và trả về ra sao; còn Environment là không gian nơi những năng lực đó thực sự gây ra ảnh hưởng. Ba thứ hay bị trộn lẫn, nhưng cách chúng hỏng thì không giống nhau: vấn đề của Tool thường là mô tả không rõ hoặc thiếu kiểm tra tham số; vấn đề của Protocol thường là nhầm lẫn giữa khám phá năng lực và cấp quyền; còn vấn đề của Environment là phạm vi ảnh hưởng vượt quá dự kiến.

Function Calling cung cấp cho model cách gọi tool có cấu trúc; **MCP** (Model Context Protocol) trừu tượng hoá tool, resource và Prompt thành các năng lực giao thức tái sử dụng được xuyên ứng dụng; **A2A** (Agent-to-Agent) và các giao thức cộng tác Agent khác thì dùng cho việc khám phá năng lực, uỷ nhiệm task và trao đổi trạng thái giữa các Agent. Browser Use, Computer Use, Shell và Code Interpreter đẩy năng lực từ API hạt thô sang môi trường tính toán tổng quát, giúp Agent xử lý được cả những hệ thống không có API — đồng thời cũng mở rộng đáng kể bán kính ảnh hưởng.

Nhưng **năng lực được khám phá không có nghĩa năng lực đã được uỷ quyền**; tham số tool khớp Schema không có nghĩa ý định của tool khớp mục tiêu người dùng; và lệnh chạy thành công trong Sandbox cũng không có nghĩa kết quả có thể ảnh hưởng an toàn tới hệ thống production. Vì vậy, một hành động có kiểm soát ít nhất phải đi qua sáu khâu: chọn năng lực, phán định định danh và quyền hạn, kiểm tra tham số, thực thi trong môi trường cô lập, kiểm chứng kết quả, và ghi nhận state cùng audit. Sáu khâu này phân bố ở tầng orchestration Harness, Gateway, Sandbox và mặt phẳng điều khiển của nền tảng; **thiếu bất kỳ khâu nào cũng sẽ biến một hành động mà model đề xuất thành một sự thật mà hệ thống đã thực thi.**

Cách xây dựng cụ thể Agentic Core nêu trên sẽ được triển khai ở các chương 3 đến 6, lần lượt theo bốn mặt: tổ chức task, kỹ thuật Harness, tài sản năng lực, cùng tool và giao thức.

## 2.3 Vận hành production và kiểm soát quản trị: Runtime, Sandbox, State và Gateway

### 2.3.1 Từ "chạy được" đến "chạy được liên tục"

Lập trình viên có thể dựng một Agent Loop hoàn chỉnh trong một process và để nó hoàn thành task ngay trên terminal máy mình. Nhưng khi thời lượng task kéo từ vài giây lên hàng giờ, hàng ngày, thậm chí hàng tuần; khi cùng một Agent phục vụ đồng thời nhiều người dùng và nhiều tenant; khi nó nắm trong tay file, mạng, database và credential doanh nghiệp — thì vấn đề mở rộng từ một vòng lặp trong một chương trình thành bài toán hệ phân tán, cô lập bảo mật và quản trị doanh nghiệp.

Nền tảng thực thi production cần trả lời một loạt câu hỏi cụ thể: task được tiếp nhận, xếp hàng, lập lịch và huỷ ra sao; task dài tiếp tục thế nào sau khi instance khởi động lại, node hỏng hoặc context model bị reset; file, lệnh, package manager, trình duyệt, mạng và Secrets được cô lập ra sao; state và chi phí của các tenant khác nhau quy về đâu; và lời gọi model, tool cùng Agent đi qua lối vào traffic thống nhất nào. Những câu hỏi này có thể né được trong môi trường demo, nhưng không né được ở production — vì vậy chúng thuộc nhóm nội dung mà **giai đoạn thiết kế kiến trúc bắt buộc phải trả lời**, chứ không phải chi tiết vận hành sau khi lên production.

### 2.3.2 Phân định trách nhiệm theo ba mặt phẳng

Trong hạ tầng truyền thống, Data Plane thường chỉ mặt phẳng thật sự xử lý request và chuyển tiếp traffic. Trong hệ thống Agent, cách gọi "mặt dữ liệu" rất dễ gây nhầm với dữ liệu nghiệp vụ, memory và trạng thái task. Vì vậy cuốn sách này chia Agent Platform cấp doanh nghiệp thành **mặt phẳng thực thi**, **mặt phẳng dữ liệu và tài nguyên**, cùng **mặt phẳng điều khiển**, như bảng 2-4.

| Mặt phẳng | Trách nhiệm chính | Đối tượng quản lý | Tính chất then chốt |
| --- | --- | --- | --- |
| Mặt phẳng thực thi | Thật sự chạy Agent Loop, tool và thao tác môi trường | Runtime Worker, Task, Session, Queue, Sandbox, đường dữ liệu của Gateway | Co giãn được, hỏng được, cần cô lập; hạn chế tối đa việc nắm giữ trạng thái thật duy nhất |
| Mặt phẳng dữ liệu và tài nguyên | Lưu các sự thật khôi phục được và cung cấp năng lực Agent truy cập được | Task State, Event Log, Checkpoint, Workspace, Artifact, Memory, Knowledge, Model, Tool, MCP Server | Bắt buộc phải định nghĩa tính nhất quán, quyền sở hữu, thời hạn lưu, quyền riêng tư và ranh giới tenant |
| Mặt phẳng điều khiển | Định nghĩa version, định danh, policy, triển khai, quota và các hành động cải tiến | Agent Registry, Model/Tool Registry, Tenant, IAM (quản lý định danh và truy cập), Policy, Budget, Deployment, Observability, Evaluation, Audit | Định nghĩa tập trung, có version, audit được, rollback được; điểm phán định thì phân tán được |

*Bảng 2-4 — Phân định trách nhiệm của mặt phẳng thực thi, dữ liệu–tài nguyên và điều khiển*

Mặt phẳng điều khiển **không nên** trở thành phụ thuộc đồng bộ cứng của mỗi lần gọi model hay gọi tool. Một mô hình vững hơn là **policy định nghĩa tập trung, điểm phán định thực thi phân tán**: mặt phẳng điều khiển quản lý policy, version và phát hành; còn Middleware của tầng orchestration Harness, cùng Gateway, Runtime và Sandbox, thì phán định trên đường đi request dựa trên policy đã được ban hành, và gửi sự kiện audit ngược về mặt phẳng điều khiển một cách bất đồng bộ. Cách này vừa giữ được quản trị thống nhất, vừa tránh việc mặt phẳng điều khiển hỏng là làm đứt ngay mọi task Agent. Cái giá của mô hình này là policy có độ trễ lan truyền, nên những policy rủi ro cao (như thu hồi credential, khoá tenant) thường cần được đỡ thêm bằng các cơ chế như buộc làm mới, credential ngắn hạn hoặc kiểm tra tập trung.

### 2.3.3 Ranh giới giữa Runtime và Sandbox

**Agent Runtime** quản lý vòng đời task. Nó chuyển request bên ngoài thành Task, gắn cho task một version Harness, định danh, tenant, ngân sách và môi trường thực thi; xử lý việc xếp hàng, đồng thời, tạm dừng, huỷ, timeout, retry, Checkpoint và Recovery. Với task dài, Runtime không chỉ là nơi host một tiến trình web, mà là một **hệ thống thực thi liên tục**: nó phải giả định rằng bất kỳ lần chạy nào cũng có thể bị gián đoạn ở bất kỳ bước nào, và phải bảo đảm task có thể tiếp tục từ state bên ngoài, chứ không phải thử lại từ đầu.

**Sandbox** giới hạn phạm vi ảnh hưởng của hành động. Nó cần kiểm soát đồng thời hệ thống file, process, CPU, bộ nhớ và lưu trữ, việc cài package, truy cập mạng, việc tiêm Secrets và dữ liệu đi ra ngoài. Mức hạt cô lập nên chọn theo rủi ro: cô lập mức process thì rẻ nhưng ranh giới yếu; container phù hợp với phần lớn task thông thường; micro-VM, VM riêng hoặc tài khoản riêng phù hợp cho việc chạy code không tin cậy và xử lý dữ liệu nhạy cảm cao. Cần nói rõ: **Sandbox là lớp cô lập nền tảng, nó ràng buộc phạm vi kỹ thuật mà hành động chạm tới được**, chứ không trả lời câu hỏi một thao tác có được uỷ quyền hay không, có đúng ý định nghiệp vụ hay không, và kết quả có đúng hay không. Ba câu hỏi đó lần lượt do phán định quyền tool, phê duyệt nghiệp vụ và kiểm chứng kết quả đảm nhận.

### 2.3.4 State Store, Workspace và AI Gateway

**State Store** và **Workspace** giúp task thoát khỏi một instance thực thi đơn lẻ. Event Log ghi lại những sự thật đã xảy ra; Checkpoint lưu vị trí khôi phục được; Workspace lưu các file, sản phẩm trung gian và cấu hình năng lực mà Agent đọc ghi được; Artifact Store lưu các kết quả bàn giao được; còn Memory và Knowledge cung cấp thông tin xuyên task. Yêu cầu nhất quán của những đối tượng này không giống nhau: Event Log và Checkpoint cần nhất quán mạnh và bảo đảm thứ tự; Workspace cần snapshot được và rollback được; Artifact cần địa chỉ hoá được và lưu giữ được; Memory và Knowledge cần truy hồi được và quản trị được. Nhét tất cả vào cùng một vector store hay cùng một bản ghi hội thoại thường đồng nghĩa với việc từ bỏ phần lớn những yêu cầu đó.

**AI Gateway** là điểm thực thi policy nằm vắt qua mặt phẳng thực thi và mặt phẳng điều khiển. Theo độ hạt của đối tượng quản trị, có thể phân ba tầng: **LLM Gateway** lấy lời gọi model làm hạt, xử lý thích ứng giao thức, routing, giới hạn tốc độ, hạ cấp, chịu lỗi và chi phí token; **MCP Gateway** lấy lời gọi tool làm hạt, xử lý Server Registry, quản lý credential, ACL mức tool và audit; **Agent Gateway** lấy task làm hạt, xử lý routing Agent, tính liên tục của phiên, quota tenant và ngân sách. Ba tầng này là cách khái quát của cuốn sách nhằm phân biệt độ hạt quản trị, **không phải** định nghĩa sản phẩm sẵn có của một hãng nào; trong hiện thực cụ thể, chúng có thể là các năng lực khác nhau của cùng một Gateway, nhưng **đối tượng và độ hạt quản trị bắt buộc phải tách bạch** — nếu không, chi phí model, quyền tool và ngân sách task sẽ ghi đè lẫn nhau trong cùng một chỗ policy.

### 2.3.5 Topology triển khai và lựa chọn cho doanh nghiệp

Kiến trúc tham chiếu không đòi hỏi doanh nghiệp phải xây một Agent Platform to và đủ mọi thứ ngay từ ngày đầu. Bảng 2-5 liệt kê bốn hình thái triển khai phổ biến.

| Hình thái triển khai | Bối cảnh phù hợp | Ưu thế | Cái giá chính |
| --- | --- | --- | --- |
| Nhúng SDK trong ứng dụng, nối thẳng tới model và tool | Prototype, rủi ro thấp, một ứng dụng đơn lẻ | Đơn giản, nhanh, chuỗi debug ngắn | State, khoá bí mật, observability và policy dễ bị phân tán ra từng ứng dụng |
| Harness và Runtime managed | Muốn vào production nhanh, ranh giới dữ liệu cho phép | Thực thi bền bỉ, cô lập, co giãn và observability do nền tảng cung cấp | Bị buộc vào nhà cung cấp, biên mở rộng bị giới hạn, dữ liệu và tuân thủ phải xác nhận từng mục |
| Mặt phẳng điều khiển managed + mặt phẳng thực thi riêng | Muốn dùng chung năng lực quản lý, đồng thời giữ dữ liệu và tool trong phạm vi nội bộ | Tách rời quản lý và thực thi, cân bằng giữa hiệu quả và ranh giới dữ liệu | Kết nối tới mặt phẳng điều khiển, tương thích version và audit xuyên miền đều phức tạp hơn |
| Agent Platform tự vận hành hoàn toàn hoặc hybrid cloud | Tuân thủ cao, quy mô lớn, cần tuỳ biến sâu hoặc chạy đa môi trường | Kiểm soát hoàn toàn dữ liệu, policy, mở rộng và hạ tầng | Chi phí xây dựng và vận hành dài hạn cao nhất, cần một đội nền tảng chuyên trách |

*Bảng 2-5 — Bối cảnh phù hợp và cái giá của bốn hình thái triển khai*

Khi lựa chọn, trước hết nên phán định **năng lực nào tạo thành tài sản khác biệt hoá của chính doanh nghiệp**, rồi mới phán định năng lực cắt ngang nào phù hợp để nền tảng hoá. Prompt, Skill, Tool, tiêu chuẩn đánh giá và quy trình cộng tác người–máy đặc thù cho nghiệp vụ thường thuộc nhóm tài sản khác biệt hoá; còn tích hợp model, host task, sandbox, lưu trữ state, định danh, observability, hạ tầng đánh giá và policy bảo mật thì phù hợp hơn để trở thành năng lực nền tảng dùng chung.

Một nguyên tắc thực dụng là: **nền tảng cung cấp một đường đi mặc định an toàn và vận hành được, còn ứng dụng giữ lại quyền tự chọn tổ hợp model, orchestration Harness và năng lực nghiệp vụ.** Nếu nền tảng cố đóng gói mọi khác biệt của Agent, nó sẽ nhanh chóng thoái hoá thành một nền tảng chỉ đáp ứng được mẫu số chung thấp nhất, và các đội nghiệp vụ sẽ vòng qua nền tảng để tự xây. Ngược lại, nếu nền tảng chỉ cung cấp tính toán mà không có policy, state, observability và đánh giá, thì nó không giải quyết được những vấn đề chung có thật của Agent doanh nghiệp, và mỗi ứng dụng lại phải giải lại cùng một loạt bài toán quản trị.

## 2.4 Kiến trúc theo vòng đời: thiết kế kiến trúc → xây dựng → vận hành → quản trị → tối ưu

### 2.4.1 Agent Release: đơn vị tái lập nhỏ nhất của vòng đời

Ứng dụng truyền thống cũng có vòng đời phát triển, kiểm thử, triển khai và vận hành, nhưng Agentic Application thêm một vấn đề đặc thù: hành vi ứng dụng không chỉ phụ thuộc vào code, mà còn phụ thuộc vào tổ hợp của model, Prompt, Context hiện tại, Memory, Knowledge, Skill, Tool, logic orchestration Harness, ngân sách và môi trường chạy. Bất kỳ mục nào trong đó thay đổi cũng có thể làm thay đổi quỹ đạo thực thi và kết quả cuối của Agent.

Vì vậy, đơn vị phát hành nhỏ nhất của vòng đời không nên chỉ là một bản code ứng dụng, mà phải là một **Agent Release tái lập được**. Nó cần gắn ít nhất sáu nhóm yếu tố: model cùng version, tham số, ngân sách suy luận và chính sách routing; code orchestration Harness, cấu hình, kiểm soát vòng lặp, Middleware và điều kiện dừng; version của Prompt, Context Policy, Memory Policy, Skill và Knowledge; danh mục năng lực Tool, MCP và Agent, chính sách quyền hạn và phạm vi credential; cấu hình Runtime, Sandbox, tài nguyên, mạng và lưu giữ dữ liệu; cùng tập dữ liệu đánh giá, Evaluator, baseline, ngưỡng chấp nhận và các rủi ro đã biết.

Chỉ khi những yếu tố này truy vết được, doanh nghiệp mới trả lời được rằng một task nào đó trong production rốt cuộc đã dùng Agent Release nào, mới tái hiện được thất bại, và mới chứng minh được rằng sau khi thay đổi thì chất lượng **thực sự tăng lên**, chứ không đơn thuần là *đã thay đổi*. Ngược lại, nếu Prompt có thể được sửa bất cứ lúc nào trong production mà không để lại version, thì mọi kết luận đánh giá chỉ đúng cho đúng khoảnh khắc ấy.

### 2.4.2 Vòng khép kín năm giai đoạn

Hình 2-2 trình bày trục vòng đời chính của cuốn sách này. Đây không phải một quy trình thác nước chỉ chảy về phía trước, mà là một vòng lặp trong đó **sự thật từ production dẫn dắt version mới**, và khi cần thì quay ngược lại tới quyết định kiến trúc.

![image.png](../assets/imgs/chapter-02/image-002.png)

*Hình 2-2 — Vòng khép kín vòng đời: thiết kế kiến trúc → xây dựng → vận hành → quản trị → tối ưu*

| Giai đoạn | Câu hỏi cốt lõi | Đầu vào chính | Sản phẩm chính | Cơ chế chấp nhận hoặc phản hồi |
| --- | --- | --- | --- | --- |
| Thiết kế kiến trúc | Dùng hình thái nào, mức tự chủ bao nhiêu và ranh giới gì để giải bài toán nghiệp vụ này | Mục tiêu nghiệp vụ, cấu trúc task, mức rủi ro, độ nhạy dữ liệu, phạm vi thời gian và yêu cầu tuân thủ | Lựa chọn hình thái, phân chia miền trách nhiệm, ranh giới Harness và Runtime, ranh giới quyền hạn và dữ liệu, chuẩn đo observability và đánh giá, bản ghi quyết định kiến trúc | Review kiến trúc, threat modeling, đánh giá bán kính ảnh hưởng và phán định kiến trúc tối giản đủ dùng |
| Xây dựng | Hiện thực hoá quyết định kiến trúc thành một Agent Release tái lập được ra sao | Quyết định kiến trúc, tài sản năng lực, model, tool và tri thức | Định nghĩa Agent, orchestration Harness, Prompt, Context Policy, Skill, Tool Policy, baseline đánh giá, version ứng viên | Đánh giá offline, kiểm tra bảo mật, thẩm định bởi con người và cổng phát hành; qua được thì thành Approved Release |
| Vận hành | Thực thi task một cách tin cậy, cô lập và khôi phục được ra sao | Agent Release, task, định danh, tenant, ngân sách và môi trường | Task, Session, Event, Checkpoint, Artifact, Trace, Cost, Incident | State machine của Runtime, Sandbox, Gateway, policy thời gian thực và khôi phục sau lỗi |
| Quản trị | Nhìn thấy, ràng buộc, phê duyệt và quy trách nhiệm ra sao | Trace, định danh, lời gọi tool, truy cập dữ liệu, chi phí, phản hồi và bất thường | Policy, Approval, Audit, Alert, SLO (mục tiêu mức dịch vụ), phát hiện rủi ro và hành động quản trị | Quyền tối thiểu, kiểm tra online, giám sát hành vi, giám sát của con người và xử lý khẩn cấp |
| Tối ưu | Tái hiện và chứng thực vấn đề, tạo cải tiến và phát hành an toàn ra sao | Trace production, ca thất bại, phản hồi người dùng, dữ liệu gán nhãn và phát hiện bảo mật | Dataset, Evaluator, Experiment, cùng các patch cho Prompt, Context, Skill và Harness, kết quả mô phỏng | Hồi quy, thí nghiệm đối chứng, red team, mô phỏng, canary, phê duyệt và rollback |

*Bảng 2-6 — Phân định trách nhiệm của vòng đời năm giai đoạn*

Cuốn sách này xếp **thiết kế kiến trúc thành giai đoạn đầu tiên** của vòng đời, thay vì để nó ẩn trong khâu xây dựng. Lý do là một khi lựa chọn hình thái, mức tự chủ được trao, cách phân chia miền trách nhiệm và ranh giới quyền hạn đã được xác định, thì khoảng chi phí của việc xây dựng, vận hành, quản trị và tối ưu về sau về cơ bản đã bị khoá lại. Để những quyết định đó được hoàn tất một cách ngầm định trong giai đoạn xây dựng tương đương với việc **để chi tiết hiện thực định nghĩa ngược lại ràng buộc kiến trúc** — và loại vấn đề này thường chỉ giải được bằng tái cấu trúc chứ không phải bằng vá. Hai đường nét đứt trong hình 2-2 chạy từ quản trị và tối ưu ngược về thiết kế kiến trúc chính là để chừa một đường đi tường minh cho tình huống này: khi rủi ro đến từ chính lựa chọn hình thái hoặc mô hình quyền hạn, chứ không từ một Prompt hay một lần gọi tool nào đó, thì hành động đúng là **thiết kế lại kiến trúc**, chứ không phải tiếp tục chồng bản vá.

### 2.4.3 Quản trị vừa là một giai đoạn, vừa là ràng buộc cắt ngang

Cuốn sách này dành riêng một phần cho quản trị là vì: sau khi Agent vào production, các vấn đề observability, định danh multi-agent, quyền tool, ranh giới dữ liệu, chi phí, phê duyệt của con người và trách nhiệm bảo mật sẽ trở thành vấn đề tập trung, cần có phương pháp và người chịu trách nhiệm thống nhất. Nhưng điều đó không có nghĩa quản trị chỉ diễn ra *sau khi* vận hành.

Năng lực quản trị có hình thái khác nhau ở từng giai đoạn của vòng đời: mô hình quyền hạn và ranh giới dữ liệu được xác định ở giai đoạn thiết kế kiến trúc; chính sách tool, điểm phê duyệt và các trường audit được hiện thực ở giai đoạn xây dựng; Sandbox, Gateway và Runtime thực thi các policy đã định ở giai đoạn vận hành; Observability và phân tích bảo mật liên tục phát hiện rủi ro ở giai đoạn quản trị; Evaluation và Simulation kiểm chứng xem thay đổi có mang vào rủi ro mới không ở giai đoạn tối ưu. Vì vậy, quản trị vừa là một loại hoạt động vận hành liên tục, vừa là ràng buộc kiến trúc xuyên suốt toàn vòng đời. Một tiêu chí dùng để tự kiểm: **nếu một yêu cầu quản trị nào đó chỉ có thể được bổ khuyết bằng quy trình và sức người sau khi lên production, mà không thể rơi xuống thành policy, interface hay cấu trúc dữ liệu ở giai đoạn kiến trúc và xây dựng, thì rất có khả năng nó sẽ mất hiệu lực sau khi hệ thống mở rộng quy mô.**

### 2.4.4 Từ bằng chứng production đến thay đổi có kiểm soát

Tối ưu không đồng nghĩa với việc để Agent tự do sửa chính mình trong production. Mọi patch cho Prompt, Memory, Skill hay Harness do model, phản hồi hoặc trajectory sinh ra đều phải được xem là **thay đổi ứng viên**, và chỉ được vào production sau khi đi qua đánh giá tái lập được, kiểm tra bảo mật, gắn version, canary và phát hành rollback được. Đây chính là lý do trong hình 2-2, thay đổi sinh ra từ khâu tối ưu **không** đi thẳng vào vận hành, mà chảy ngược về khâu xây dựng rồi đi qua cổng chấp nhận lần nữa: một cải tiến có kiểm soát phù hợp với định nghĩa tự tiến hoá cấp doanh nghiệp hơn là việc tự sửa mình không qua phê duyệt. Đường nét đứt đi từ tối ưu tới vận hành trong hình chỉ biểu thị kênh quan sát của đánh giá online và thí nghiệm đối chứng, dùng để lấy bằng chứng trong traffic thật, **không** có nghĩa thay đổi được vòng qua khâu xây dựng và cổng kiểm soát để vào production.

Ràng buộc này cũng giải thích vì sao giai đoạn vận hành **bắt buộc** phải sinh ra Trace, state và sự thật chi phí có cấu trúc. Không có bằng chứng tái lập được thì tối ưu chỉ dựa vào cảm tính; không có đơn vị phát hành gắn version thì dù có tìm ra hướng cải tiến cũng không chứng minh được rằng cải tiến thực sự đến từ lần thay đổi đó. Quan sát, đánh giá và phát hành tạo thành cùng một chuỗi; thiếu bất kỳ mắt xích nào, vòng khép kín cũng thoái hoá thành một lần chỉnh tham số thủ công dùng một lần.

## 2.5 Tóm tắt chương

Hạt nhân của Agentic Application không phải một framework, một model hay một dịch vụ managed nào đó, mà là **một nhóm năng lực hệ thống có trách nhiệm rõ ràng, tiến hoá độc lập được, và cộng tác được với nhau thông qua vòng khép kín vòng đời**. Model cung cấp hạt nhân nhận thức; tầng orchestration Harness tổ chức và ràng buộc hành vi; Context, State, Memory, Knowledge và Skill quản lý thông tin và năng lực; Tool, Protocol và Environment kết nối với thế giới thật; Runtime, Sandbox, State Store và Gateway gánh phần thực thi production; còn mặt phẳng điều khiển của nền tảng, Observability, Security và Evaluation thì thiết lập vòng khép kín về trách nhiệm và cải tiến.

Ngoài Model ra, những năng lực nêu trên ở tầng trừu tượng đều thuộc về Harness nghĩa rộng như chương 1 đã nói; công việc của chương này là đặt chúng vào các miền trách nhiệm rõ ràng, và chỉ ra thứ nào phù hợp để ứng dụng tự xây, thứ nào phù hợp để nền tảng dùng chung cung cấp. Tầng nghiệp vụ và ứng dụng **không** thuộc Harness nghĩa rộng; thứ nó định nghĩa là bài toán nghiệp vụ và ranh giới tương tác mà hệ thống này phải giải.

Ba góc nhìn, mỗi góc nhìn giải quyết một loại rủi ro: góc nhìn component tránh bỏ sót năng lực, góc nhìn nền tảng tránh nhập nhằng trách nhiệm, góc nhìn vòng đời tránh nhầm một bản demo thành hệ thống vận hành được. Còn vòng khép kín năm giai đoạn thì đưa quyết định kiến trúc vào trong vòng đời, khiến việc chọn hình thái, ranh giới quyền hạn và chuẩn đo đánh giá trở thành những đối tượng có thể được rà soát lại và sửa đổi, thay vì là những giả định ẩn trong phần hiện thực.

Bộ kiến trúc tham chiếu này không đòi hỏi mọi ứng dụng phải dùng cùng một tổ hợp component phức tạp như nhau. **Mục đích của kiến trúc không phải làm cho hệ thống to ra, mà là thiết lập năng lực thực thi, quan sát, bảo mật và đánh giá tương xứng cho mỗi phần tự chủ đã được trao đi.** Doanh nghiệp nên căn cứ vào mức độ dự đoán được của đường đi task, tác động môi trường, độ nhạy dữ liệu, phạm vi thời gian và rủi ro nghiệp vụ để chọn một kiến trúc tối giản nhưng đủ giải quyết vấn đề, rồi tiến hoá dần dưới sự dẫn dắt của các sự thật thu được từ production.
