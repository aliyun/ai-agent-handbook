# Chương 15 — Khám phá và quản lý tài sản AI

Hành vi của Agent không chỉ phụ thuộc vào model. Trong một lần gọi, model nhìn thấy những chỉ dẫn nào, dùng được những phương pháp nào, kết nối được những năng lực bên ngoài nào, và cuối cùng nhận được context ra sao — tất cả đều làm thay đổi quá trình thực thi và kết quả của task. Chương 4 đã bàn về việc lắp ráp động chỉ dẫn và context từ góc nhìn Harness; chương 5 phân biệt thêm các tài sản năng lực Agent như Prompt, Skill, Knowledge và Memory.

Khi số lượng Agent, số đội tham gia và số môi trường vận hành tăng dần, những tài sản năng lực này sẽ tiến hoá từ nội dung cục bộ trong một ứng dụng thành **tài nguyên công cộng mà nhiều Agent cùng phụ thuộc.** Prompt có thể bị copy sang nhiều repository; Skill có thể nằm rải rác trong nhiều thư mục cục bộ; phần mô tả tool và endpoint vận hành của MCP Server có thể được duy trì riêng rẽ; còn các Agent cộng tác được thì có thể do những nền tảng khác nhau phát hành. Lúc này, đội ngũ không chỉ cần biết tài nguyên lưu ở đâu, mà còn phải trả lời **version nào dùng được, một lần task thực sự đã dùng gì, một lần thay đổi sẽ ảnh hưởng tới những Agent nào, và lúc chạy thì tìm năng lực mà task hiện tại cần ra sao.**

Nội dung cần quản lý của các loại tài nguyên là khác nhau. Cốt lõi của Prompt là chỉ dẫn, template và biến; Skill là một gói năng lực gồm hướng dẫn thực thi, script và tài liệu tham chiếu; dịch vụ dựa trên Model Context Protocol (MCP) thì cung cấp ra ngoài các tool, resource và endpoint vận hành; còn Agent Registry thì mô tả các Agent khám phá và gọi được. Chúng có thể dùng chung tên, version, vòng đời, phạm vi nhìn thấy và bản ghi phát hành, **nhưng không vì thế mà bỏ qua phương pháp kiểm chứng và cách vận hành riêng của từng loại.**

Chương này trước hết bàn riêng về việc quản lý kỹ thuật của Prompt, Skill, MCP và Agent Registry, rồi giải thích cách các loại tài sản năng lực đi vào một quy trình thẩm định thay đổi và phát hành thống nhất. Trên nền đó, chương giới thiệu tiếp các năng lực quản trị chung của trung tâm tài nguyên, nói rõ **Agent ổn định** lấy tài nguyên qua phụ thuộc khai báo ra sao, và **Agent động** dùng Agentic Resource Discovery (ARD) cùng Remote Agent Discovery (RAD) để khám phá năng lực theo task ra sao. Cuối cùng bàn về việc kết quả khám phá đi vào Context lúc chạy thế nào, và việc ghi chép đầy đủ hỗ trợ phát lại, phân tích vấn đề và cải tiến liên tục ra sao.

Chương này gọi phần hạ tầng gánh việc đăng ký, gắn version, quản trị, khám phá và phân phối Agentic Resource là **Agentic Resource Registry**, và lấy **Nacos** làm bản hiện thực tham chiếu xuyên suốt. Năng lực sản phẩm chính thức của Nacos gọi là AI Registry hay AI Management Center; chương này dùng cụm "Agentic Resource Registry" để nhấn mạnh rằng **thứ nó quản lý không phải một loại cấu hình thông thường, mà là các Prompt, Skill, MCP Server, Agent và AgentSpec mà Agent có thể khám phá, nạp hay gọi trong lúc chạy.**

Cách định vị này tiếp nối sự tiến hoá của Nacos từ Config, Naming sang AI Registry: config center trả lời *ứng dụng chạy ra sao*, service discovery trả lời *instance dịch vụ nằm ở đâu*, còn AI Registry thì trả lời *hiện Agent có những năng lực đã được quản trị nào để dùng*. Các nội dung dưới đây vẫn trình bày nguyên tắc kỹ thuật di chuyển được trước, rồi mới kết hợp mô hình tài nguyên, vòng đời, client và component khám phá của Nacos để giải thích cách hiện thực. Chương này lấy **dòng version Nacos 3.3** làm baseline thực hành: ARD đã mở rộng việc khám phá theo ý định sang Prompt, Skill, MCP Server và Agent; năng lực khám phá Agent từ xa độc lập giao thức cũng đã hoàn thành ở mức ban đầu. Còn với các chi tiết giao thức vẫn đang tiến hoá thì chương nêu rõ phạm vi hiện tại, **không viết những phần mở rộng về sau như thể đã là sự thật.**

Chương này chỉ triển khai những ràng buộc kiểm chứng và vận hành liên quan trực tiếp tới tài sản năng lực. Bảo mật tổng quát cho ứng dụng, model, dữ liệu, định danh và hạ tầng do chương 14 bàn; việc tổ chức traffic canary và phương pháp A/B Test do mục 15.1.4 bàn; còn việc thu thập chỉ số vận hành và nền Trace do chương 13 bàn.

## 15.1 Kỹ thuật hoá Prompt: template, version, đánh giá và rollback

Ở giai đoạn prototype, Prompt thường tồn tại dưới dạng chuỗi trong code, mục cấu hình hay đoạn tài liệu. Khi cùng một Prompt được nhiều Agent tái dùng, thì ngoài văn bản, các biến, model, tool và yêu cầu output cũng trở thành điều kiện vận hành. **Nếu chỉ lưu một đoạn văn bản cuối cùng, đội ngũ rất khó phán định một lần sửa có làm đổi interface gọi hay không, và cũng không so sánh ổn định được hành vi giữa version mới và cũ.**

### 15.1.1 Từ mảnh văn bản tới template có cấu trúc

Một Prompt phát hành được nên được biểu diễn thành **nội dung có cấu trúc**, chứ không chỉ một chuỗi hoàn chỉnh. Các thành phần cơ bản có thể gồm:

| Thành phần | Nội dung chính | Trọng tâm quản lý |
| --- | --- | --- |
| Tầng chỉ dẫn | Policy hệ thống, chỉ dẫn của developer hay ứng dụng, chỉ dẫn task… ở các cấp khác nhau | Nguồn rõ ràng, thứ tự ổn định; **nội dung ưu tiên thấp không được ghi đè luật ưu tiên cao** |
| Template và biến | Thân template, tên biến, kiểu, có bắt buộc không, giá trị mặc định và giới hạn độ dài | Ngăn việc thiếu biến, sai kiểu và input chưa xử lý làm đổi cấu trúc chỉ dẫn |
| Yêu cầu input/output | Phạm vi input, định dạng output, Schema có cấu trúc và cách xử lý ngoại lệ | Tiện cho bên gọi kiểm tra, cũng dùng để phán định tính tương thích version |
| Phụ thuộc vận hành | Model áp dụng được, tool cần thiết, nguồn tri thức và môi trường ngôn ngữ | Tránh để Prompt bị nạp vào một Agent không có năng lực tương ứng |
| Tài liệu kiểm chứng | Mẫu thuận, mẫu biên, bộ đánh giá và tiêu chí chấm | Hỗ trợ đánh giá trước khi phát hành và so sánh với version lịch sử |

Việc mô hình hoá có cấu trúc **không đòi hỏi mọi Prompt phải dùng định dạng phức tạp.** Với các Prompt ngắn không có biến, phần thân vẫn có thể là chủ thể; trung tâm tài nguyên ít nhất phải biết cấp chỉ dẫn, phạm vi áp dụng và yêu cầu output của nó. Còn với Prompt có biến template thì nên dùng Schema biến rõ ràng, để bên gọi kiểm tra được tên, kiểu và khoảng giá trị trước khi render.

**Việc thay thế biến phải hoàn tất trong một quá trình render có kiểm soát.** Input người dùng, kết quả truy hồi và giá trị trả về của tool đi vào những vị trí chỉ định với tư cách **dữ liệu**, và qua xử lý độ dài, kiểu cùng escape cần thiết; **không nên ghép bừa với template trước rồi để model tự phán đoán nội dung nào là chỉ dẫn.** Cách này vừa giảm lỗi template, vừa giảm rủi ro nội dung bên ngoài làm đổi ranh giới chỉ dẫn ban đầu.

Quan hệ giữa Prompt với model và tool cũng phải được ghi tường minh. Ví dụ, một Prompt yêu cầu model gọi tool `query_order` và xuất kết quả theo một JSON Schema chỉ định, thì tên tool, định nghĩa tham số và Schema output đều cấu thành **điều kiện vận hành.** Thiếu những phụ thuộc đó thì dù thân Prompt có đầy đủ, cũng **không được coi là nó chạy bình thường được.**

### 15.1.2 Version và phân loại thay đổi

Mỗi lần thay đổi Prompt đã phát hành đều nên tạo thành một version mới. Bản ghi version, ngoài phần diff của thân, còn nên gồm lý do sửa, Schema biến, định dạng output, model áp dụng, phụ thuộc tool, kết quả đánh giá và các Agent bị ảnh hưởng.

Nhìn từ góc độ ảnh hưởng khi phát hành, thay đổi Prompt có thể chia ba loại:

| Loại thay đổi | Nội dung điển hình | Ảnh hưởng chính |
| --- | --- | --- |
| Sửa chữ nghĩa | Sửa lỗi, bổ sung giải thích hay cải thiện cách diễn đạt | Dự kiến không đổi mục tiêu task và cấu trúc output, **nhưng vẫn phải xác nhận qua đánh giá** |
| Thay đổi interface | Thêm biến bắt buộc, sửa Schema output, đổi tên tool hay điều kiện phụ thuộc | Ảnh hưởng trực tiếp tới việc thích ứng và tương thích của bên gọi |
| Thay đổi hành vi | Đổi luật phán đoán, các bước xử lý, phạm vi từ chối hay thiên hướng kết quả | **Ngay cả khi hình thức input/output không đổi, hành vi thực tế của Agent vẫn có thể đổi** |

Cách phân loại này giúp người thẩm định hiểu rủi ro, **nhưng không thay thế được việc đánh giá thực tế.** Một điều chỉnh nhỏ trong ngôn ngữ tự nhiên cũng có thể làm đổi output của model, nên **khó suy ra tính tương thích chỉ từ major/minor/patch version truyền thống.** Số version trước hết đóng vai trò định danh duy nhất; còn hành vi có chấp nhận được hay không thì vẫn phải kết hợp kết quả đánh giá và phán đoán của con người.

Prompt được nhiều Agent dùng chung còn phải duy trì **quan hệ tham chiếu ngược.** Trước khi phát hành, phải xem được các bên đang dùng, cách binding ở môi trường production và quy mô lời gọi lịch sử, để xác định Agent nào cần thích ứng trước, bối cảnh nào có thể kiểm chứng ở phạm vi nhỏ.

### 15.1.3 Đánh giá Prompt

Việc đánh giá Prompt cần đồng thời quan sát **cấu trúc có đúng không, hiệu quả task có đổi không, và ràng buộc vận hành có được thoả không.** Kiểm tra cấu trúc quan tâm biến có đầy đủ không, output có qua được Schema không, tool được tham chiếu có tồn tại không; đánh giá task dùng mẫu cố định để so sánh độ chính xác, độ đầy đủ, hành vi từ chối và biểu hiện ở biên giữa version mới và cũ; còn đánh giá vận hành thì quan tâm độ trễ, mức tiêu thụ token cùng ảnh hưởng từ thay đổi version model và tool.

Cùng một bộ đánh giá trên các model khác nhau có thể cho kết quả khác nhau; vì vậy **bản ghi đánh giá bắt buộc phải liên kết với version Prompt, version model, tham số suy luận, định nghĩa tool và version bộ đánh giá.** Chỉ ghi một điểm tổng thì không nói lên được sự thay đổi đến từ việc sửa Prompt hay từ việc môi trường vận hành đổi.

Bộ đánh giá nên gồm các task thông thường, input ở biên và các mẫu vấn đề lịch sử. Với output có cấu trúc, phải thống kê riêng tỉ lệ qua định dạng; với Prompt chứa luật phán đoán, phải quan sát phân bố lỗi theo từng loại chứ **không chỉ nhìn điểm trung bình.** Bối cảnh rủi ro cao còn cần con người kiểm tra mẫu các output cụ thể, để xác nhận rằng chỉ số tự động không che mất một thay đổi không chấp nhận được về mặt nghiệp vụ.

**Kết quả đánh giá là input cho việc thẩm định thay đổi, không phải lệnh phát hành tự động.** Tác giả tài nguyên vẫn phải nói rõ mục đích sửa, cải thiện kỳ vọng và giới hạn đã biết; còn người thẩm định thì kết hợp phạm vi ảnh hưởng để quyết định có cho vào giai đoạn phát hành tiếp theo hay không. Quy trình thẩm định thống nhất sẽ triển khai ở mục 15.5.

### 15.1.4 Phát hành, canary và rollback

Với các Agent đòi hỏi tính xác định cao ở kết quả, có thể cố định version chính xác của Prompt và nâng cấp qua quy trình phát hành thông thường; còn với các Agent cần bảo trì tập trung thì có thể gắn với các nhãn do tổ chức tự định nghĩa như `stable`, `canary`, và để nền tảng điều chỉnh thống nhất việc nhãn trỏ tới đâu.

Version mới thường hoàn tất đánh giá offline ở môi trường test trước, rồi vào kiểm chứng quy mô nhỏ trong phạm vi Agent, tenant hay traffic giới hạn. Sau khi xác nhận chất lượng, độ trễ và chi phí đúng kỳ vọng, mới dời nhãn ổn định sang version mới. **Nội dung của version lịch sử luôn giữ nguyên; thứ thay đổi là quan hệ trỏ giữa nhãn và version.**

Phạm vi canary cần phân chia theo quan hệ nghiệp vụ. Nếu Prompt đã đổi trường output mà bên gọi chưa thích ứng xong, thì dù chỉ ảnh hưởng một lượng nhỏ request ngẫu nhiên, cả chuỗi vẫn có thể hỏng. Phần trên của mục này đã giới thiệu cách tổ chức traffic và phân tích cho canary cùng A/B Test; phần dưới làm rõ thêm version Prompt tham gia thí nghiệm và mục tiêu khôi phục.

Khi version mới có vấn đề chất lượng hay an toàn, có thể trỏ nhãn về version đã kiểm chứng gần nhất. **Thao tác rollback phải ghi lý do, người thực hiện, phạm vi ảnh hưởng và các bản ghi vận hành liên quan.** Các task dài đã bắt đầu thì **không nên tự đổi Prompt giữa chừng**; cách vững hơn là phân giải version một lần lúc task hay phiên bắt đầu, và giữ nguyên trong suốt ranh giới thực thi đó.

### 15.1.5 Prompt hiệu dụng, tái lập được

Thứ lưu trong kho tài sản là **template Prompt**, còn thứ model thực sự nhận được lại là kết quả sau khi template đã qua render biến, lắp ráp context và xử lý theo policy vận hành. Ngay cả khi version template giống nhau, thì giá trị biến, version model, mô tả tool hay nội dung truy hồi khác nhau vẫn có thể cho output khác nhau.

Có thể gọi tổ hợp thực sự có hiệu lực trong một lần gọi là **"Prompt hiệu dụng"**:

```text
Prompt hiệu dụng = Version Prompt + Snapshot biến + Model và tham số
                   + Version định nghĩa tool + Version policy + Nguồn Context
```

Hệ vận hành nên sinh một **vân tay truy vấn được** cho tổ hợp này, và lưu version chính xác hoặc digest nội dung của từng thành phần. Các biến chứa dữ liệu nhạy cảm có thể ghi giá trị đã qua bảo vệ, digest hay vị trí tham chiếu — **không cần copy toàn bộ nguyên văn**; nhưng cách ghi phải đủ để phán định hai lần chạy có dùng cùng điều kiện hay không.

Bản ghi Prompt hiệu dụng cuối cùng đi vào **Context Manifest.** Nhờ những thông tin đó, khi kết quả lệch kỳ vọng, đội ngũ mới phán định được vấn đề đến từ việc đổi Prompt, nâng cấp model, sai biến, hay từ một phần context khác đã thay đổi.

### 15.1.6 Con đường hiện thực của Nacos Prompt Registry

Nacos Prompt Registry mô hình hoá Prompt thành **tài nguyên hạng nhất có version**, chứ không giấu nó trong một mục cấu hình thông thường. Tài nguyên được định danh duy nhất bằng `namespaceId -> prompt -> promptKey`; còn version thì lưu template, định nghĩa biến, tác giả, ghi chú commit và mô tả. Namespace có thể phân biệt môi trường, tenant hay miền nghiệp vụ; còn `promptKey` ổn định thì giúp nhiều ứng dụng tham chiếu cùng một Prompt nghiệp vụ.

Ứng dụng có thể đọc theo version chính xác, hoặc lấy version khuyến nghị hiện tại qua `latest` do server duy trì hay các nhãn tổ chức tự định nghĩa (như `stable`, `canary`). Nhãn được phân giải lúc truy vấn, nên nội dung Prompt có thể phát hành độc lập với code ứng dụng; đồng thời, **bản ghi vận hành vẫn phải lưu version chính xác sau khi phân giải, tránh chỉ để lại một cái nhãn mà về sau có thể bị dời.**

Ở phía quản lý, Prompt có thể theo vòng đời chung của tài nguyên AI Nacos: tạo và sửa bản nháp trước, rồi gửi thẩm định, qua Pipeline phát hành rồi phát hành và lên online. Version đã lên online thì giữ nguyên nội dung lịch sử; sửa đổi về sau tạo thành version mới. Nhờ đó, đội ngũ xem tập trung được bản ghi thay đổi, so sánh version, chỉnh nhãn và khôi phục về version đã kiểm chứng — **mà không phải dựa vào diff của các chuỗi nằm rải rác trong nhiều repository.**

Thứ Nacos giải quyết là **version có thẩm quyền, trạng thái phát hành và việc lấy Prompt template lúc chạy.** Còn giá trị biến, tham số model, mô tả tool và nội dung truy hồi trong một lần gọi thì vẫn do Agent Harness lắp ráp, và liên kết với version Prompt Nacos qua Context Manifest. **Phân biệt hai tầng này vừa phát huy được giá trị của quản lý động, vừa tránh việc nhầm "template giống nhau" thành "input cuối cùng hoàn toàn giống nhau".**

## 15.2 Kiểm chứng và phát hành Skill: từ tích tụ tới tài sản phát hành được

Skill dùng để biểu đạt phương pháp mà Agent hoàn thành một loại task. Nó vừa có thể chứa hướng dẫn thực thi đọc được, vừa có thể mang theo script, template, tài liệu tham chiếu và phụ thuộc bên ngoài, và tạo ra thao tác thực tế thông qua các tool sẵn có của Agent. Vì vậy, **đối tượng quản lý của Skill phải là cả gói năng lực, chứ không phải một file hướng dẫn trong đó.**

### 15.2.1 Gói Skill và thông tin khám phá

Các Agent hay Harness khác nhau có thể dùng định dạng thư mục Skill riêng, nhưng Skill khi vào trung tâm tài nguyên của team thì ít nhất phải có một **tầng mô tả nhất quán.** Một gói năng lực điển hình có thể dùng cấu trúc sau:

```text
complaint-analysis/
├── SKILL.md              # Hướng dẫn sử dụng, các bước thực thi và lưu ý
├── manifest.yaml         # Định danh, thông tin khám phá, phụ thuộc và khai báo quyền
├── scripts/              # Script phụ trợ (tuỳ chọn)
├── templates/            # Template tái dùng được
├── references/           # Tài liệu tham chiếu nạp theo nhu cầu
├── tests/                # Mẫu, luật kiểm tra hay script test
└── LICENSE               # Nguồn gốc và giấy phép sử dụng
```

`SKILL.md` chủ yếu hướng tới Agent hay lập trình viên để nói rõ *khi nào dùng, thực thi ra sao và xử lý ngoại lệ thế nào*; còn **Manifest** thì cung cấp cho trung tâm tài nguyên thông tin có cấu trúc, ổn định và kiểm tra được. Manifest nên chứa tên logic, version, người bảo trì, mô tả năng lực, điều kiện kích hoạt, input/output, môi trường chạy tương thích, phụ thuộc, tool cần thiết, phạm vi quyền, giới hạn tài nguyên, nguồn gốc và giấy phép.

Khi trong gói có script, còn phải nói rõ entrypoint, version interpreter hay runtime, các gói phụ thuộc và thông tin khoá version của chúng. Khi có tài liệu tham chiếu, phải nói rõ nội dung nào cần nạp lúc bắt đầu task, nội dung nào chỉ đọc ở một bước cụ thể — **tránh đưa cả thư mục vào Context một lần.** Khi liên quan tới hệ thống bên ngoài, phải khai báo tool hay năng lực kết nối cần thiết; **credential truy cập không được lưu trong gói Skill.**

Skill có dễ được khám phá hay không phụ thuộc vào việc mô tả của nó có biểu đạt chính xác ranh giới năng lực không. Cái tên "trợ lý phân tích dữ liệu" quá rộng, vừa bất lợi cho việc tìm thủ công, vừa dễ khớp nhầm với task không liên quan trong truy hồi ngữ nghĩa. **Một mô tả hiệu quả hơn phải nói rõ nó giải task gì, cần input gì, tạo ra kết quả gì, và những tình huống nào thì không áp dụng.**

Ngoài tên và mô tả ngắn, thông tin khám phá thường còn gồm bối cảnh áp dụng, các câu hỏi tiêu biểu của người dùng, nhãn nghiệp vụ, kiểu input/output, Agent hay Harness tương thích, tool phụ thuộc, mức rủi ro và quyền cần thiết. **Bản thân metadata khám phá cũng là một phần nội dung phát hành**; khi nó thay đổi thực chất thì cũng cần thẩm định và ghi version.

### 15.2.2 Version, phụ thuộc và phân phối

Một khi Skill đã phát hành, **nội dung gói và thông tin khoá phụ thuộc của nó không được ghi đè.** Thêm script, sửa bước thực thi, chỉnh yêu cầu quyền hay cập nhật phụ thuộc đều phải tạo version mới, và tính lại digest của cả gói. **Chỉ tính digest cho `SKILL.md` sẽ bỏ sót thay đổi của script, template và file phụ thuộc**, nên digest phải phủ trọn gói năng lực.

Tính tương thích version **không thể chỉ nhìn phần hướng dẫn.** Ví dụ, version mới nâng runtime script từ Python 3.10 lên 3.12, hoặc bắt đầu phụ thuộc vào một tool chưa mở ở môi trường production — thì dù input/output không đổi, Agent hiện có vẫn có thể không dùng được. Trước khi phát hành, phải kiểm tra điều kiện phụ thuộc theo AgentSpec hay môi trường vận hành, và đưa ra kết quả phân giải rõ ràng.

Với các gói năng lực phụ thuộc Skill khác, phải khai báo khoảng version hay version chính xác, và sinh danh sách khoá (lock manifest) lúc triển khai hay nạp. Bản ghi vận hành cuối cùng lưu version và digest thực sự đã phân giải ra cho từng mục, **tránh việc nhãn thượng nguồn bị dời khiến Skill hạ nguồn đổi hành vi mà không phát hành version mới.**

Môi trường cá nhân hay đơn máy có thể dùng thư mục thống nhất và công cụ đồng bộ, để nhiều Agent nạp từ cùng một nội dung cục bộ; còn môi trường team và đa thiết bị thì phù hợp dùng Registry từ xa, cung cấp thống nhất việc tìm kiếm, tải xuống, phân giải version, thông báo subscription và bản ghi sử dụng. Dù dùng cách nào, **cùng một số version phải ứng với cùng một digest.**

### 15.2.3 Kiểm chứng và phát hành

Sau khi Skill được gửi phát hành, phải kiểm chứng trước cấu trúc gói, phụ thuộc và hành vi thực tế. Kiểm tra cấu trúc xác nhận các file bắt buộc, trường Manifest, entrypoint script và việc tính digest có đúng không; kiểm tra phụ thuộc xác nhận runtime, component bên thứ ba và tool cần thiết có thoả điều kiện không; còn kiểm chứng task thì chạy các mẫu đại diện trong môi trường có kiểm soát, quan sát output, truy cập bên ngoài và cách xử lý ngoại lệ có khớp hướng dẫn không.

Skill có chứa script còn phải kiểm tra lệnh nguy hiểm, truy cập đường dẫn nhạy cảm, việc tải về lúc chạy, nội dung bị làm rối và lỗ hổng phụ thuộc đã biết. Phần hướng dẫn bằng ngôn ngữ tự nhiên cũng phải được kiểm tra, để nhận diện nội dung dụ Agent bỏ qua luật sẵn có, đọc dữ liệu không liên quan hay mở rộng phạm vi thao tác. **Khi kiểm tra tự động phát hiện vấn đề, phải trả về lý do rõ ràng để tác giả quay lại bản nháp sửa — chứ không để hệ kiểm tra tự sửa nội dung đang chờ phát hành.**

Việc qua kiểm chứng **không có nghĩa version đó tự động áp dụng cho mọi môi trường.** Người phụ trách nghiệp vụ còn phải xác nhận ranh giới năng lực, bối cảnh sử dụng và trách nhiệm bảo trì; các Skill rủi ro cao thì do người liên quan xác nhận quyền và kết nối bên ngoài cần thiết. Sau khi version phát hành xong, mới dùng trạng thái online, phạm vi nhìn thấy và nhãn để xác định Agent nào khám phá và tải được.

**Deprecate thông thường** nghĩa là không còn khuyến nghị cho Agent mới dùng, nhưng vẫn chừa thời gian di trú cho các task tồn đọng; **ngừng phân phối** nghĩa là không nhận thêm việc cài hay phân giải mới; còn khi **thu hồi** vì một vấn đề an toàn rõ ràng thì phải chặn việc nạp mới, và thông báo cho các Agent cùng người phụ trách vẫn đang dùng.

### 15.2.4 Chấp nhận đáng tin với Skill bên ngoài

Skill bên ngoài mang người bảo trì bên ngoài, phụ thuộc code và nguồn nội dung vào môi trường vận hành của Agent. Vì Agent có thể theo hướng dẫn bằng ngôn ngữ tự nhiên mà gọi file, lệnh, tool và dịch vụ bên ngoài, nên **một đoạn hướng dẫn bình thường cũng có thể gián tiếp dẫn tới thao tác quyền cao.** Do đó, Skill bên ngoài **không được tải về rồi vào thẳng Agent production.**

Doanh nghiệp có thể lập một vùng tiếp nhận độc lập. Nội dung mới trước hết lưu dưới dạng gói ứng viên, **không nhìn thấy được với Agent production**; chỉ sau khi hoàn tất kiểm tra và hình thành version nội bộ thì mới cho phép lấy qua luồng phân giải tài nguyên thông thường. Một quá trình chấp nhận đầy đủ thường gồm:

| Giai đoạn | Công việc chính | Bản ghi hình thành |
| --- | --- | --- |
| Xác minh nguồn | Ghi repository hay địa chỉ phát hành gốc, người phát hành, tình trạng bảo trì, giấy phép và thời điểm lấy về | Thông tin nguồn và trách nhiệm |
| Kiểm tra toàn vẹn | Tính digest gói ứng viên, và xác minh chữ ký khi nguồn có cung cấp | Digest nội dung và kết quả xác minh chữ ký |
| Kiểm tra tĩnh | Kiểm tra lệnh bất thường, đường dẫn nhạy cảm, địa chỉ bên ngoài, việc tải lúc chạy, lỗ hổng phụ thuộc và chỉ dẫn không phù hợp trong hướng dẫn, script, phụ thuộc và cấu hình | Công cụ kiểm tra, version policy và danh sách vấn đề |
| Kiểm chứng cô lập | Chạy task mẫu trong môi trường không có dữ liệu production và credential dài hạn, giới hạn truy cập file, process, tool và mạng | Bản ghi hành vi chạy và truy cập bên ngoài |
| Thẩm định bởi con người | Đội sử dụng xác nhận tính cần thiết nghiệp vụ, input/output, trách nhiệm bảo trì và quyền cần thiết | Kết luận thẩm định và các ngoại lệ |
| Phát hành nội bộ | Copy nội dung đã qua kiểm tra vào Registry nội bộ, cố định version và digest | Version nội bộ cùng toàn bộ bản ghi chấp nhận |

**Chữ ký và digest chứng minh được nội dung đến từ ai và sau khi kiểm tra có bị thay hay không, nhưng không chứng minh được bản thân nội dung không có rủi ro.** Kiểm tra tĩnh nhận diện được các mẫu đã biết, nhưng khó vét cạn những hành vi mà chỉ dẫn ngôn ngữ tự nhiên có thể gây ra trên các Agent khác nhau. **Việc chấp nhận đáng tin phải kết hợp xác minh nguồn, kiểm tra nội dung, kiểm chứng cô lập và giới hạn lúc chạy — không dựa vào một kết luận đơn lẻ nào.**

### 15.2.5 Giới hạn lúc chạy và xử lý liên tục

Skill đã qua kiểm tra chấp nhận thì lúc chạy **vẫn không nên kế thừa toàn bộ năng lực của Agent.** Hệ thống phải cấp lại quyền cần thiết theo task hiện tại, và giữ cho quyền thực tế không vượt phạm vi Manifest khai báo. Một Skill chỉ lo dọn file Markdown cục bộ thì **không nên chỉ vì Agent chứa nó có năng lực quản trị cloud mà đồng thời có được quyền truy cập mạng bên ngoài và hệ thống production.**

Với các Skill không cần Internet, hãy mặc định cấm mạng ra ngoài; khi thực sự cần thì chỉ mở đúng dịch vụ và phương thức cần thiết, và kiểm tra thông tin nhạy cảm trong dữ liệu request. Truy cập file thì giới hạn trong thư mục task hay dataset rõ ràng; còn cấu hình hệ thống, thư mục khoá và file của dự án khác thì giữ ở trạng thái không nhìn thấy được. Khi truy cập dịch vụ bên ngoài thì dùng credential ngắn hạn, quyền tối thiểu, do môi trường vận hành tiêm vào, **chứ không viết vào nội dung gói hay vào Context.**

Skill bên ngoài sau khi phát hành **vẫn có thể xuất hiện rủi ro mới**: thượng nguồn công bố vấn đề an toàn, component phụ thuộc có lỗ hổng, policy tổ chức thay đổi, hoặc bản ghi vận hành cho thấy hành vi của nó không khớp phần khai báo. Registry nội bộ cần hỗ trợ kiểm tra lại định kỳ, và liên kết kết luận kiểm tra với digest Skill, digest phụ thuộc, version công cụ kiểm tra và version policy.

Sau khi xác nhận có rủi ro, trung tâm tài nguyên trước hết **dừng việc cài mới và phân giải mới** với version đó, rồi tuỳ mức nghiêm trọng mà thông báo cho bên sử dụng, dừng việc nạp ở task mới hay chấm dứt các instance đang chạy. Nền tảng dùng quan hệ tham chiếu ngược để liệt kê các Agent, môi trường và task lịch sử bị ảnh hưởng, giúp người phụ trách di trú sang version an toàn. Các yêu cầu an toàn rộng hơn về mạng, định danh, dữ liệu và môi trường vận hành xem chương 14.

### 15.2.6 Nacos Skill Registry: kho năng lực nội bộ doanh nghiệp

Nacos cung cấp Skill Registry từ bản 3.2.0. Nó lấy `SKILL.md` và các file tài nguyên đi kèm làm nội dung cơ bản, và có thể tạo bản nháp bằng cách tạo tay trên console, upload gói ZIP hoặc dùng năng lực sinh hỗ trợ. Sau khi Skill phát hành, lập trình viên và chuỗi công cụ Agent có thể tìm, tải và cài qua CLI, API hay SDK — nhờ đó **tích tụ năng lực vốn nằm trong thư mục cá nhân thành tài sản nội bộ chia sẻ được cho cả team.**

Mỗi version Skill trải qua các trạng thái `draft`, `reviewing`, `online`, `offline`… Version đã lên online thì **không sửa trực tiếp được**; phải tạo bản nháp mới từ version có sẵn hoặc Fork, rồi thẩm định và phát hành lại. Nhãn version, nhãn nghiệp vụ cùng phạm vi nhìn thấy PUBLIC, PRIVATE lần lượt giải quyết vấn đề version khuyến nghị, phân loại truy hồi và phạm vi sử dụng; còn thứ mà runtime tải về cuối cùng thì là một gói Skill có version và nội dung xác định.

Pipeline phát hành của Nacos có thể nối quét bảo mật vào trước khi Skill lên online. Node `skill-scanner` dựng sẵn có thể gọi công cụ quét bên ngoài để kiểm tra phần nội dung quét được; tổ chức cũng có thể mở rộng node thẩm định riêng. **Ý nghĩa của Pipeline không phải tuyên bố rằng Skill đã tuyệt đối an toàn, mà là đưa công cụ quét, kết quả kiểm tra và version phát hành vào cùng một luồng audit được.** Còn quyền với file, process, mạng và tool sau khi Skill được nạp thì vẫn do Runtime và sandbox kiểm soát.

Với vai trò một Skill Registry riêng tư, giá trị của Nacos còn nằm ở việc **hình thành một nguồn thống nhất.** Team có thể import các Skill từ repository công cộng hay marketplace bên ngoài vào nội bộ trước, hoàn tất xác minh nguồn, quét và xác nhận của con người, rồi mới phân phối dưới dạng version nội bộ. Agent nhờ đó **không còn phụ thuộc trực tiếp vào một địa chỉ bên ngoài có thể đổi bất cứ lúc nào**, và việc khám phá cùng cài đặt cũng tuân theo thống nhất Namespace, phạm vi nhìn thấy và trạng thái version.

## 15.3 Quản lý MCP: từ đăng ký dịch vụ tới khám phá và gọi tool

MCP cung cấp một cách thức chung để Agent kết nối tool và dữ liệu bên ngoài, **nhưng "kết nối được" không đồng nghĩa với "quản lý được".** Khi doanh nghiệp có nhiều MCP Server, họ cần biết mỗi dịch vụ cung cấp năng lực nào, ai bảo trì, endpoint nào đang chạy, định nghĩa tool có thay đổi không, và Agent nào có quyền khám phá cùng gọi. **Chỉ lưu MCP Server thành một nhóm địa chỉ trong cấu hình client thì không trả lời được những câu hỏi đó.**

Hạt nhân của việc quản lý MCP là **tách riêng phần định nghĩa năng lực tương đối ổn định, phần version phát hành độc lập được, và phần endpoint vận hành liên tục thay đổi**; rồi để Registry cung cấp một lối vào khám phá đáng tin cho MCP Client, Agent, Router hay gateway.

### 15.3.1 Mô hình tài nguyên của MCP Server

Một tài nguyên MCP Server thường gồm các nhóm thông tin sau:

| Nhóm thông tin | Nội dung chính | Đặc tính thay đổi |
| --- | --- | --- |
| Thông tin cơ bản | Namespace, tên, mô tả, người phụ trách, nguồn gốc và phạm vi nhìn thấy | Tương đối ổn định, do quy trình quản lý duy trì |
| Định nghĩa năng lực | Tools, Resources, MCP Prompts cùng tên, mô tả và Schema tham số | Phát hành theo version; ảnh hưởng tới việc Agent chọn và gọi |
| Thông tin vận hành | Cách truyền tải, endpoint dịch vụ, instance khả dụng và trạng thái sức khoẻ | Thay đổi theo triển khai và trạng thái vận hành |
| Thông tin quản trị | Version, nhãn, trạng thái online, quyền, mức rủi ro và bản ghi audit | Thay đổi bởi thao tác phát hành và vận hành |
| Yêu cầu kết nối | Cách xác thực, phạm vi mạng, yêu cầu rate limit và timeout | Liên quan tới môi trường và định danh gọi |

**Prompt trong giao thức MCP là một loại năng lực mà MCP Server cung cấp ra ngoài, không hoàn toàn giống với tài nguyên Prompt được phát hành độc lập trong Prompt Registry của doanh nghiệp.** Cái trước thường được quản lý theo version MCP Server; cái sau có thể được nhiều Agent hay dịch vụ tham chiếu độc lập. Nền tảng có thể thiết lập quan hệ tham chiếu giữa hai bên, **nhưng không nên chỉ vì trùng tên mà coi chúng là cùng một version.**

Định nghĩa năng lực và endpoint vận hành cũng phải tách rời. Một version MCP Server có thể chạy trên nhiều instance và nhiều region; việc co giãn endpoint **không nên sinh ra version năng lực mới.** Nhưng khi tham số Tool, cấu trúc trả về hay mô tả năng lực thay đổi thì phải tạo bản ghi version mới. Như vậy vừa hỗ trợ được service discovery lúc chạy, vừa giữ cho Tool Schema mà các lời gọi lịch sử phụ thuộc vẫn tái lập được.

### 15.3.2 Ba cách để MCP Server vào trung tâm tài nguyên

MCP Server mới xây có thể **tự động đăng ký lúc khởi động.** Framework hay SDK phát tên dịch vụ, version, định nghĩa năng lực và endpoint hiện tại lên Registry; instance chạy thì phản ánh trạng thái thực tế qua việc đăng ký, gia hạn và huỷ đăng ký. Đăng ký tự động phù hợp với các MCP Server triển khai cùng vòng đời ứng dụng, giúp giảm công duy trì endpoint thủ công.

Một lượng lớn API HTTP hay RPC sẵn có của doanh nghiệp cũng có thể được **chuyển thành năng lực MCP** thông qua khai báo dịch vụ, khai báo tool và ánh xạ tham số. Khi đó, trung tâm tài nguyên lưu định nghĩa MCP Server và Tool, còn gateway hay component thích ứng giao thức thì lo việc chuyển request MCP thành lời gọi API backend. **Chuỗi quản lý lo "năng lực này được mô tả và phát hành ra sao"; chuỗi dữ liệu lo "request thực tế được chuyển tiếp và thực thi ra sao" — hai thứ không được trộn làm một.**

Nguồn thứ ba là nhà cung cấp bên ngoài hay marketplace công cộng. Nền tảng có thể import phần mô tả và cách truy cập của họ, rồi bổ sung người phụ trách nội bộ, phạm vi nhìn thấy, mức rủi ro và cấu hình xác thực. **MCP Server bên ngoài trước khi vào phạm vi khám phá ở production thì phải được xác minh nguồn, hành vi giao thức, cách dùng dữ liệu và tính khả dụng; và tránh viết thẳng credential dài hạn vào phần mô tả tài nguyên có thể tìm kiếm được.**

Dù nguồn là gì, cuối cùng đều phải hình thành một tài nguyên logic và version định danh duy nhất được trong nội bộ doanh nghiệp. Địa chỉ gốc có thể giữ làm thông tin nguồn, nhưng **Agent phải lấy tham chiếu đã qua quản trị từ Registry nội bộ, chứ không vòng qua trung tâm tài nguyên để dùng thẳng địa chỉ nguồn.**

### 15.3.3 Version, tính tương thích và trạng thái vận hành

Tên MCP Tool, Schema tham số, trường bắt buộc, kiểu dữ liệu và cấu trúc trả về cùng cấu thành **interface gọi.** Xoá Tool, sửa kiểu tham số hay đổi cấu trúc trả về có thể làm kế hoạch và code gọi của Agent hiện có mất hiệu lực. Thêm Tool thì thường không phá vỡ các lời gọi sẵn có, **nhưng sẽ làm đổi tập năng lực ứng viên mà model nhìn thấy, và cũng có thể đổi kết quả chọn tool — nên vẫn cần đánh giá ảnh hưởng.**

Việc sửa mô tả Tool cũng **không thể vơ đũa cả nắm là "không ảnh hưởng hành vi".** Model dựa vào tên và mô tả để chọn tool, nên một điều chỉnh câu chữ có thể giảm việc chọn nhầm, mà cũng có thể khiến những task vốn không liên quan bắt đầu khớp với Tool đó. Với các MCP Server dùng ở production, phải đồng thời so sánh diff Schema và **kết quả chọn tool dưới các task đại diện.**

Lúc chạy có thể cung cấp công tắc bật/tắt cho Tool, dùng để tạm dừng các năng lực bất thường hay rủi ro cao. Thay đổi công tắc phải đi vào audit và bản ghi vận hành, **nhưng không cần sửa nội dung version lịch sử.** Khi gỡ Tool lâu dài thì vẫn phải tạo version mới và chừa thời gian di trú cho bên sử dụng. **Trạng thái online của MCP Server, trạng thái sức khoẻ endpoint và trạng thái version phải được biểu đạt riêng: tài nguyên online không có nghĩa mọi endpoint đều khoẻ; có endpoint khoẻ cũng không có nghĩa bên gọi hiện tại có quyền truy cập.**

Trung tâm tài nguyên còn phải duy trì quan hệ tiêu thụ và gọi. Trước khi phát hành version không tương thích, tắt Tool hay thu hồi MCP Server, có thể đi từ MCP Server để xem các Agent và AgentSpec phụ thuộc nó, từ đó phán đoán phạm vi ảnh hưởng và sắp xếp việc di trú.

### 15.3.4 Khám phá, kết nối và gọi

Agent có trách nhiệm ổn định có thể khai báo tên MCP Server cùng version chính xác hay nhãn trong AgentSpec, rồi phân giải endpoint và định nghĩa Tool lúc triển khai hay khởi động. Còn Agent đối mặt với task mở thì có thể dùng MCP Router hay ARD để tìm ứng viên theo mô tả task, và **chỉ đưa vào Context phần mô tả Tool liên quan, tránh nạp trước toàn bộ Schema của mọi dịch vụ.**

Sau khi tài nguyên được chọn, việc kết nối thật, thoả thuận năng lực và gọi tool thì vẫn do luồng MCP native hoàn tất. **Registry lo việc cung cấp định danh tài nguyên, version, endpoint và thông tin quản trị, chứ không thay MCP Server thực thi tool.** Kết quả gọi cũng phải đi vào Agent với tư cách **dữ liệu bên ngoài, không tự động có được vị thế chỉ dẫn ưu tiên cao.**

Thông tin xác thực phải do môi trường vận hành tiêm vào theo định danh hiện tại. Phần mô tả tài nguyên có thể khai báo loại xác thực và quyền cần thiết, **nhưng không lưu khoá dùng thẳng được.** Khi gọi còn phải uỷ quyền dựa trên phạm vi mạng, mức nhạy cảm dữ liệu, yêu cầu rate limit và timeout. Các biện pháp an toàn tổng quát về định danh, mạng và dữ liệu xem chương 14.

### 15.3.5 Nacos MCP Registry và MCP Router

Nacos MCP Registry đưa mô tả dịch vụ, Tools, Resources, endpoint, version và cách phơi giao thức vào quản lý thống nhất. MCP Server xây bằng Spring AI Alibaba hay Nacos MCP Wrapper Python có thể tự đăng ký lúc khởi động; còn mô tả dịch vụ, định nghĩa tham số Tool và công tắc Tool thì cập nhật được lúc chạy. Thông tin đăng ký lần lượt nối với phần quản lý cấu hình và service discovery, để **định nghĩa năng lực tương đối ổn định và trạng thái instance liên tục biến đổi được biểu đạt bằng những cơ chế khác nhau.**

Với các dịch vụ HTTP hay RPC tồn đọng, Nacos có thể kết hợp khai báo dịch vụ, tool, endpoint và ánh xạ tham số để chuyển API sẵn có thành năng lực MCP; còn MCP Server bên ngoài thì import vào rồi bổ sung version, phạm vi nhìn thấy và yêu cầu truy cập nội bộ. **Cả ba nguồn cuối cùng đều hình thành những MCP Server khám phá và quản trị thống nhất được trong Nacos, thay vì để mỗi Agent tự lưu một nhóm địa chỉ nguồn.**

**Bản thân Nacos MCP Router là một MCP Server chuẩn.** Ở chế độ router, nó cung cấp cho client các năng lực `search_mcp_server`, `add_mcp_server` và `use_tool`: tìm ứng viên trong Registry theo mô tả task và từ khoá trước, rồi thiết lập kết nối và proxy tới Tool đích. Còn chế độ proxy thì có thể chuyển các MCP Server đã đăng ký dạng stdio hay dựa trên SSE (Server-Sent Events) thành lối vào Streamable HTTP, giúp các dịch vụ tồn đọng thích ứng với cách kết nối mới.

Con đường này thể hiện hai tác dụng của Agentic Resource Registry. Phía quản lý thì quản trị MCP Server quanh version, công tắc Tool, phạm vi nhìn thấy và trạng thái endpoint; phía vận hành thì để Agent xuất phát từ một Router hay một tích hợp client duy nhất để chọn đúng dịch vụ mà task cần. **Sau khi chọn xong, việc gọi vẫn theo giao thức MCP; Nacos không làm thay đổi ngữ nghĩa nghiệp vụ của Tool.**

![ch15-01-mcp-registry-router.png](../assets/imgs/chapter-15/image-001.png)

*Hình 15-1 — Quan hệ giữa Nacos MCP Registry, MCP Router và việc gọi native*

## 15.4 Agent Registry: đăng ký, version và khám phá các Agent gọi được

Trong hệ multi-agent, các đối tượng cộng tác có thể do những team, framework và môi trường vận hành khác nhau cung cấp. Nếu Agent thượng nguồn chỉ lưu được một URL cố định, nó **không kịp cảm nhận thay đổi version, di trú endpoint và trạng thái khả dụng của Agent hạ nguồn**, và cũng khó chọn bên cộng tác phù hợp theo mô tả năng lực. Tác dụng của Agent Registry là cung cấp một lối vào đăng ký và truy vấn thống nhất cho các Agent có thể được khám phá và gọi từ xa.

### 15.4.1 Mô tả Agent, version và endpoint vận hành

Đối tượng cốt lõi mà Agent Registry quản lý là **mô tả lời gọi Agent có version.** Phần chung thường gồm tên, mục đích, nhà cung cấp, năng lực, kiểu input/output và các interface gọi khả dụng; còn phần liên quan tới giao thức thì giữ nguyên dưới dạng mô tả native của giao thức đó. Ví dụ, giao thức Agent-to-Agent (A2A) dùng AgentCard; các giao thức giao tiếp Agent khác có thể dùng hình thức mô tả riêng. **Mô tả lời gọi là nền để ứng dụng thượng nguồn hiểu một Agent, nhưng nó không phải phần hiện thực đầy đủ của Agent, và cũng không chứa toàn bộ Prompt, Skill cùng cấu hình model dùng trong lúc chạy.**

Version logic và endpoint vận hành của Agent phải được biểu đạt riêng. Khi sửa mô tả năng lực, kiểu input/output, yêu cầu an toàn hay mô tả native của giao thức thì phải tạo version Agent mới; còn khi cùng một version thêm instance, di trú region hay thay endpoint hỏng thì đó là **thay đổi trạng thái vận hành.** Agent thượng nguồn có thể cố định một version hay dùng version phát hành mặc định, nhưng **bản ghi vận hành cuối cùng phải lưu version, giao thức và endpoint thực sự đã chọn.**

Với nhiều version của cùng một Agent, Registry phải làm rõ version nào được bên gọi thông thường khám phá, và version nào chỉ dùng cho test hay kiểm chứng phạm vi nhỏ. Trước khi gỡ version cũ, phải xác nhận còn Agent thượng nguồn, workflow hay ứng dụng bên ngoài nào phụ thuộc nó hay không.

### 15.4.2 Đăng ký, import và subscription

Agent xây bằng framework có thể tự đăng ký AgentCard và endpoint hiện tại lúc khởi động, rồi huỷ đăng ký khi dừng dịch vụ; Agent tuỳ biến có thể phát hành qua SDK hay API; còn Agent của nhà cung cấp bên ngoài thì có thể được nền tảng import rồi quản trị thống nhất. Mọi nguồn cuối cùng đều phải bổ sung người phụ trách nội bộ, Namespace, phạm vi nhìn thấy và trạng thái version.

Đăng ký tự động phải xử lý các tình huống như **"version năng lực đã phát hành nhưng hiện không có endpoint khả dụng"** và **"endpoint vẫn đang chạy nhưng version đã bị thu hồi".** Kết quả truy vấn của Registry phải đồng thời cân nhắc trạng thái AgentCard, trạng thái endpoint và quyền gọi hiện tại — **không được chỉ vì tồn tại một bản ghi mà cho rằng Agent gọi được.**

Bên gọi có thể truy vấn theo tên hoặc subscribe thay đổi của các Agent đã biết. Subscription phù hợp với quan hệ cộng tác lâu dài: khi version mặc định hay tập endpoint đổi, Agent thượng nguồn có thể cập nhật cache cục bộ. **Trong lúc task đang chạy thì vẫn phải giữ ổn định version đã chọn**; còn khi endpoint hỏng thì có thể chuyển sang instance khoẻ trong cùng version, và ghi endpoint thực tế vào Trace.

### 15.4.3 Agent Registry và AgentSpec Registry

Agent Registry và AgentSpec Registry quản lý hai tầng khác nhau:

| Đối tượng | Câu hỏi chính nó trả lời | Nội dung điển hình | Người dùng chính |
| --- | --- | --- | --- |
| Agent Registry | Hiện có những Agent nào khám phá và gọi được | Định nghĩa Agent, mô tả native của giao thức, version, endpoint vận hành và phạm vi nhìn thấy | Ứng dụng multi-agent, client giao thức Agent, Agent thượng nguồn |
| AgentSpec Registry | Một Agent nên được mô tả, lắp ráp hay phân phối ra sao | Manifest, tham chiếu Prompt, Skill, MCP, cấu hình vận hành và file tài nguyên | Nền tảng Agent, công cụ phát triển, hệ build và deploy |

AgentSpec có thể khai báo một Agent phụ thuộc những Prompt, Skill và MCP Server nào, rồi phân giải thành lock manifest ở giai đoạn build hay deploy; còn Agent Registry thì phơi ra các Agent đã chạy hoặc gọi được từ xa. Một nền tảng có thể build Agent theo AgentSpec trước, rồi đăng ký AgentCard cùng endpoint vận hành của nó lên Agent Registry — **nhưng hai thứ không nên dùng chung một số version để thay cho bản ghi riêng của mỗi bên.**

### 15.4.4 Ranh giới giữa khám phá và gọi native

Khi bên gọi đã biết tên Agent đích, nó có thể truy vấn thẳng Agent Registry, hoặc đọc Agent đích qua cách lấy tài nguyên thống nhất của ARD. Khi bên gọi chỉ biết nhu cầu task, nó có thể để ARD hình thành ứng viên xuyên các loại Prompt, Skill, MCP Server và Agent trước; sau khi chọn Agent thì vẫn có thể tiếp tục lấy thông tin tài nguyên cụ thể qua ARD.

Khi task còn cần phân giải interface gọi từ xa, mô tả native của giao thức và các endpoint khả dụng hiện tại, thì có thể dùng thêm **năng lực khám phá độc lập giao thức của RAD.** RAD là cơ chế chuyên biệt cho việc khám phá Agent từ xa, **nhưng không phải kênh duy nhất để ARD lấy Agent.** Sau khi khám phá xong, việc trao đổi message thực tế, trạng thái task và trả kết quả thì vẫn do A2A cùng các cách giao tiếp Agent khác đảm nhận. Toàn bộ quá trình khám phá động sẽ được bàn tiếp ở mục 15.8.

### 15.4.5 Nacos A2A Registry và AgentSpecs Registry

Nacos cung cấp năng lực quản lý Agent từ bản 3.1.0, còn gọi là **A2A Registry.** Nó lấy A2A AgentCard làm hạt nhân, và bổ sung thêm phần thông tin quản lý mà Nacos cần. Agent được định danh duy nhất bằng Namespace và tên, có thể lưu đồng thời nhiều version và chỉ định một version phát hành mặc định; bên gọi vừa có thể lấy version mặc định, vừa có thể truy vấn nội dung xác định theo số version.

Agent xây bằng Spring AI Alibaba có thể tự đăng ký; Agent tuỳ biến có thể phát hành qua SDK hay API; còn Agent của nhà cung cấp bên ngoài thì import vào rồi quản lý thống nhất. Bên gọi có thể truy vấn Agent qua Spring AI Alibaba, Nacos Client, API hay console, và subscribe thay đổi version cùng endpoint trên các client được hỗ trợ. Nhờ vậy, **Agent thượng nguồn không phải cố định đối tượng cộng tác thành một URL bất biến lâu dài.**

Nacos đồng thời cung cấp **AgentSpecs Registry**, dùng để quản lý các gói đặc tả Agent phân phối cho nền tảng, công cụ phát triển và ứng dụng AI. AgentSpec có thể import bằng gói ZIP, hoặc hoàn thiện dần qua interface tạo bản nháp; sau khi hoàn tất thẩm định, phát hành, gắn nhãn và lên/xuống online thì runtime lấy theo tên, version hay nhãn. Nó giải quyết câu hỏi *"một Agent nên được mô tả và lắp ráp ra sao"*; còn A2A Registry thì giải quyết *"hiện có những Agent nào khám phá và gọi được".*

Khi kết hợp hai loại Registry, ta có một quan hệ liên tục từ phân phối đặc tả tới phát hành vận hành: nền tảng trước hết chuẩn bị các phụ thuộc Prompt, Skill, MCP theo AgentSpec và build Agent, rồi đăng ký AgentCard, version và endpoint lên A2A Registry. **Nacos lo việc khám phá version và địa chỉ; còn message của task thì vẫn do A2A xử lý — tránh để registry và giao thức giao tiếp chồng lấn trách nhiệm.**

### 15.4.6 Khám phá Agent từ xa độc lập giao thức trong Nacos 3.3

Dòng version Nacos 3.3, trên nền A2A Registry sẵn có, đã hoàn thành ở mức ban đầu năng lực khám phá Agent từ xa **độc lập giao thức**, và dùng **RAD (Remote Agent Discovery) 0.1.0** để trừu tượng hoá ngữ nghĩa khám phá chung. Chữ "độc lập giao thức" ở đây **không phải là bỏ giao thức**, mà là để tầng khám phá dùng một mô hình chung ổn định biểu đạt Agent, version, interface gọi và endpoint vận hành; còn mỗi interface gọi thì vẫn giữ tên giao thức, version giao thức và mô tả native của giao thức, và việc trao đổi message, task, phiên cùng tương tác stream thực tế thì vẫn do client A2A hay tương ứng hoàn tất. HTTP, gRPC và SDK là những cách tiếp cận khác nhau tới cùng một bộ ngữ nghĩa khám phá.

RAD chia quá trình từ truy hồi ứng viên tới duy trì endpoint vận hành của Agent từ xa thành năm nhóm thao tác:

| Thao tác | Tác dụng chính | Nội dung trả về hoặc duy trì |
| --- | --- | --- |
| Search | Sàng lọc ứng viên trong tập Agent | Tên, mô tả, nhãn, version online và các giao thức hỗ trợ; **không trả về mô tả giao thức đầy đủ và endpoint** |
| Discover | Phân giải version và cách gọi của Agent đã chọn | Version online chính xác, digest nội dung, mô tả native của giao thức, cùng snapshot đầy đủ của endpoint khai báo và endpoint vận hành |
| Watch | Cảm nhận thay đổi của cùng một kết quả khám phá | Dùng lại request của Discover và snapshot thay thế toàn phần; client có thể hiện thực subscription cục bộ bằng polling |
| Register | Phát hành địa chỉ vận hành của instance Agent hiện tại | Endpoint Batch đầy đủ, version vận hành và khoảng version tương thích của cùng một publisher dưới Agent và giao thức chỉ định |
| Deregister | Thu hồi địa chỉ vận hành mà publisher duy trì | Gỡ endpoint khỏi trạng thái kỳ vọng của publisher; gỡ hết thì huỷ cả phần phát hành vận hành đó |

Cách chia này khiến **"có thể phù hợp"** và **"hiện gọi được"** trở thành hai phán đoán khác nhau. Search chỉ trả về thông tin danh mục nhẹ, dùng để hình thành tập ứng viên theo tên, nhãn, giao thức…, và **không cam kết rằng ứng viên hiện có endpoint khoẻ.** Sau khi bên gọi chọn Agent, Discover mới phân giải version online chính xác và trả về snapshot gọi theo các điều kiện giao thức, version giao thức, cách truyền tải và nguồn endpoint. Với endpoint vận hành, RAD đồng thời ghi version hiện thực triển khai cùng khoảng version Agent mà nó phục vụ được, **tránh trả về instance không tương thích cho bên gọi trong lúc nâng cấp version.**

![ch15-02-agent-registry-rad.png](../assets/imgs/chapter-15/image-002.png)

*Hình 15-2 — Ranh giới trách nhiệm giữa Agent Registry, AgentSpec, RAD và giao thức native*

Trong bản hiện thực của Nacos, ARD có thể hình thành ứng viên xuyên các tài nguyên Prompt, Skill, MCP Server và Agent, và tiếp tục đọc Agent cụ thể qua cách lấy tài nguyên thống nhất. Với các bối cảnh cần thông tin gọi từ xa, **RAD Search dùng lại nhân truy hồi chung của AI Resource Search và giới hạn loại tài nguyên ở Agent**; còn Discover thì trả về interface gọi, mô tả native của giao thức và endpoint hiện tại của version đã chọn. Nhờ đó, **RAD trở thành một đường hiện thực chuyên biệt mà ARD có thể chọn khi khám phá Agent, chứ không phải một hệ khám phá tài nguyên song song hay cạnh tranh với ARD.**

Định nghĩa Agent, nội dung version và Endpoint vận hành cũng giữ độc lập với nhau: việc lên/xuống online của version làm đổi projection khám phá; còn Register, Deregister cùng trạng thái sống của publisher thì duy trì địa chỉ vận hành — **không dùng việc đổi endpoint để ghi đè định nghĩa Agent đã phát hành.** Nếu bên gọi chỉ cần chi tiết tài nguyên Agent thì có thể dừng ở luồng lấy thống nhất của ARD; chỉ khi cần snapshot gọi được, endpoint vận hành hay việc chọn giao thức thì mới vào luồng khám phá từ xa của RAD.

Hiện tại, việc giao tiếp giữa các Agent trong cộng đồng chủ yếu xoay quanh A2A và các giao thức tương tự, trong đó A2A nhận được sự quan tâm và ứng dụng khá rộng. Vì vậy, Nacos hiện chủ yếu hoàn tất thích ứng giao thức với A2A, đồng thời **giữ khả năng mở rộng qua mô hình chung và interface khám phá độc lập giao thức**, để các giao thức giao tiếp Agent khác mang theo mô tả native của mình mà vẫn vào được luồng đăng ký, khám phá và quản lý endpoint thống nhất. Năng lực này ở dòng version 3.3 thuộc mức **hoàn thành ban đầu**; trọng tâm mở rộng về sau là tăng số giao thức thích ứng, chứ không phải dựng lại một mô hình tài nguyên tách rời khỏi Agent Registry hiện có.

## 15.5 Thẩm định thay đổi: cách thay đổi tài sản năng lực đi vào pipeline đánh giá

Prompt, Skill, MCP Server, Agent và AgentSpec có hình thức nội dung khác nhau, **nhưng thay đổi của chúng đều ảnh hưởng tới hành vi Agent.** Chỉ lưu version thôi thì không chứng minh được rằng một version mới phù hợp để vào production. Doanh nghiệp còn cần một **đường thẩm định chung** nối kiểm tra định dạng, kiểm tra an toàn, đánh giá task, phán đoán của con người và thao tác phát hành lại với nhau.

Đường thẩm định chung **không đòi hỏi mọi tài nguyên dùng nội dung kiểm tra hoàn toàn giống nhau.** Một tài nguyên có thể vào Pipeline phát hành sẵn có của Registry, hoặc để một hệ bên ngoài hoàn tất phần đánh giá bổ sung rồi liên kết kết quả tới version tài nguyên. Mục này bàn về **nguyên tắc thẩm định nhất quán và yêu cầu ghi chép**; còn cách tiếp nhận Pipeline cho năm loại tài nguyên trong dòng version Nacos 3.3 cùng khác biệt của chúng sẽ nói ở mục 15.5.6.

### 15.5.1 Từ bản nháp tới version online

Quá trình phát hành khuyến nghị của tài sản năng lực như hình 15-3.

![ch15-03-release-lifecycle.png](../assets/imgs/chapter-15/image-003.png)

*Hình 15-3 — Vòng khép kín phát hành, thẩm định và lặp của Agentic Resource*

Bản nháp cho phép tác giả sửa liên tục, **nhưng không được runtime thông thường trả về khi truy vấn.** Sau khi gửi thẩm định, hệ thống **cố định nội dung ứng viên và digest của lần này**, và mọi kiểm tra về sau đều thực hiện trên đúng nội dung đó. Khi bất kỳ kiểm tra nào yêu cầu sửa, version quay lại giai đoạn nháp; còn version đã phát hành thì giữ nguyên.

**Việc qua thẩm định và việc lên online chính thức cũng phải phân biệt.** Qua thẩm định nghĩa là nội dung ứng viên thoả điều kiện phát hành hiện tại; phát hành thì tạo ra một version bất biến; còn trạng thái online cùng nhãn thì quyết định runtime có khám phá và lấy được hay không. Nhờ vậy có thể chuẩn bị version trước, rồi bật ở thời điểm hay phạm vi đã lên kế hoạch.

### 15.5.2 Kiểm tra tự động và phán đoán của con người

Pipeline phát hành có thể gồm nhiều node kiểm tra có thứ tự. Node nền tảng kiểm tra định dạng, metadata bắt buộc và tính toàn vẹn của tham chiếu trước; kế đến chạy quét an toàn, kiểm tra phụ thuộc và đánh giá task; khi một node từ chối thì các node sau không chạy nữa và trả về lý do hiểu được.

**Quá trình kiểm tra không được sửa nội dung ứng viên.** Việc tự động sửa có thể khiến nội dung phát hành cuối cùng khác với nội dung mà tác giả đã gửi, đã được đánh giá và con người đã xem. Khi cần điều chỉnh, phải quay lại bản nháp để hình thành digest ứng viên mới, rồi chạy lại kiểm tra.

Kết quả tự động cũng **không thay thế hoàn toàn được phán đoán của con người.** Công cụ phát hiện được lỗi Schema, các mẫu nguy hiểm đã biết và việc chỉ số đánh giá giảm; nhưng người phụ trách tài nguyên vẫn phải xác nhận mục đích sửa, ảnh hưởng nghiệp vụ, quyền cần thiết, phương án di trú và giới hạn đã biết. Với các tài sản dùng chung xuyên team hay có phạm vi ảnh hưởng lớn, còn phải để các bên sử dụng chính tham gia xác nhận.

### 15.5.3 Trọng tâm đánh giá của từng loại tài nguyên

Pipeline thống nhất **không có nghĩa mọi tài nguyên dùng cùng một bộ kiểm tra.** Luồng chung lo trạng thái và bản ghi; còn các tài nguyên khác nhau vẫn phải chọn phương pháp đánh giá phù hợp với mình.

| Loại tài nguyên | Rủi ro thay đổi chính | Trọng tâm kiểm tra tự động và đánh giá | Trọng tâm thẩm định của con người |
| --- | --- | --- | --- |
| Prompt | Thay đổi hành vi chỉ dẫn, biến và định dạng output | Render template, Schema, bộ đánh giá cố định, tương thích model, input an toàn | Luật nghiệp vụ, mẫu lỗi và biên của output |
| Skill | Thay đổi các bước, script, phụ thuộc và phạm vi quyền | Tính toàn vẹn gói, quét script và phụ thuộc, chạy cô lập, task đại diện | Tính đúng đắn của phương pháp, quyền cần thiết, nguồn gốc và trách nhiệm bảo trì |
| MCP Server | Thay đổi Tool Schema, mô tả, giao thức và yêu cầu endpoint | Diff Schema, kết nối giao thức, xác thực, timeout, mẫu chọn và gọi tool | Tính tương thích, phạm vi dữ liệu, rate limit và kế hoạch di trú |
| Agent | Thay đổi AgentCard, năng lực và hành vi từ xa | Kiểm tra AgentCard, khả năng tới được của endpoint, tương thích giao thức, tỉ lệ thành công task, độ trễ và chi phí | Ranh giới cộng tác, trách nhiệm về kết quả, quyền hạn và cách xử lý thất bại |
| AgentSpec | Thay đổi cấu hình lắp ráp và tham chiếu tài nguyên | Manifest, phân giải phụ thuộc, khoá version, kiểm chứng build và khởi động | Tổ hợp tài nguyên, tính phù hợp với môi trường và phạm vi nâng cấp |

Cùng một thay đổi có thể cần nhiều loại đánh giá. Ví dụ, AgentSpec cập nhật tham chiếu Prompt và MCP thì vừa phải xác nhận phụ thuộc phân giải được, vừa phải chạy task đầu-cuối để quan sát xem tổ hợp tài nguyên mới có làm đổi hành vi Agent không. **Pipeline đánh giá nên cho phép từng loại tài nguyên cung cấp node chuyên biệt, đồng thời giữ luật audit và phát hành thống nhất của tổ chức.**

### 15.5.4 Gắn kết quả đánh giá với version

Một bản ghi đánh giá dùng được cho quyết định phát hành ít nhất phải liên kết loại tài nguyên, tên logic, version ứng viên, digest nội dung, version bộ đánh giá, version model hay runtime, version policy, version công cụ kiểm tra và thời điểm thực thi. Ý kiến của con người còn phải ghi người thẩm định, kết luận, các ngoại lệ và môi trường áp dụng.

**Nếu nội dung, phụ thuộc hay điều kiện vận hành then chốt thay đổi thì kết quả đánh giá cũ không được dùng tiếp.** Ngay cả khi số version không đổi, **digest không khớp thì cũng phải dừng phát hành.** Khi công cụ đánh giá hay policy an toàn nâng cấp quan trọng, nền tảng có thể kiểm tra lại các version đã online, và giới hạn việc phân phối tiếp sau khi phát hiện vấn đề.

Bối cảnh khẩn cấp có thể cung cấp năng lực phát hành cưỡng chế cho quản trị viên, **nhưng bắt buộc phải ghi lý do, người chấp nhận rủi ro, phạm vi ảnh hưởng và mục tiêu khôi phục.** Phát hành cưỡng chế bỏ qua một phần kiểm tra thông thường, nên **không được trở thành cách thay thế cho việc sửa đổi hằng ngày**; sau khi lên online còn phải tăng cường độ quan sát và bù nhanh phần kiểm chứng còn thiếu.

### 15.5.5 Kiểm chứng và phản hồi sau phát hành

Đánh giá offline không phủ được mọi input ở production. Sau khi version ứng viên qua thẩm định, nó có thể vào luồng canary hay A/B Test đã giới thiệu ở mục 15.1.4, để so sánh tỉ lệ thành công task, tỉ lệ con người sửa tay, độ trễ, chi phí và sự cố an toàn trong phạm vi có kiểm soát. Hệ thí nghiệm lo việc phân bổ traffic và phân tích thống kê; còn chương này lo việc bảo đảm **mỗi nhóm traffic ứng với một version tài nguyên xác định cùng bản ghi Context.**

Chỉ số vận hành và Trace do năng lực quan sát ở chương 13 thu thập, rồi liên kết tới bản ghi phát hành theo version tài nguyên. Khi phát hiện bất thường, có thể dừng canary, dời nhãn hay khôi phục về version đã kiểm chứng. **Phản hồi vận hành có thể sinh ra gợi ý cải tiến mới và bản nháp ứng viên, nhưng không được sửa trực tiếp nội dung đang online;** mọi thay đổi vẫn phải đi lại qua quy trình version, đánh giá và phát hành.

### 15.5.6 Pipeline phát hành AI của Nacos

Pipeline phát hành AI của Nacos đặt phần thẩm định, quét và chặn **trước khi tài nguyên AI chính thức phát hành.** Một lần phát hành sẽ tạo bản ghi thực thi trước, rồi chọn các node khớp theo loại tài nguyên và chạy theo thứ tự; qua hết thì phát hành tiếp, còn khi một node từ chối thì dừng các bước sau và version ứng viên giữ trạng thái chưa phát hành. Quản trị viên có thể phát hành cưỡng chế trong bối cảnh khẩn, **nhưng thao tác đó bỏ qua Pipeline và phải giữ lý do rõ ràng cùng bản ghi audit.**

Các node Pipeline có thể khai báo riêng loại tài nguyên chúng hỗ trợ. Dòng version Nacos 3.3 đã đưa Skill, Prompt, MCP Server, AgentSpec và Agent vào khung Pipeline chung. Agent khi gửi thì vào thẩm định với loại tài nguyên `AGENT`; khi có Pipeline Agent khớp thì version đi từ `draft` sang `reviewing` và chạy các node tương ứng; còn khi chưa cấu hình Pipeline khớp thì xử lý theo đường phát hành không Pipeline. Nhờ vậy, **khung chung phủ được Agent, nhưng nội dung kiểm tra cụ thể thì vẫn do plugin Pipeline đã cấu hình quyết định.**

**Việc kiểm tra tài nguyên và đánh giá hành vi từ xa của Agent vẫn phải phân biệt.** Pipeline có thể kiểm tra nội dung version, interface gọi, mô tả giao thức, phụ thuộc, yêu cầu an toàn và các luật tuỳ biến của tổ chức; còn tỉ lệ thành công task, độ trễ, chi phí cùng hiệu quả cộng tác xuyên Agent thì có thể do hệ đánh giá bên ngoài hoàn tất rồi liên kết kết quả tới cùng version Agent. **Luồng thống nhất cung cấp vòng đời, bản ghi thực thi và phán định phát hành nhất quán, chứ không đòi hỏi mọi đánh giá phải chạy bên trong Registry.**

Plugin `skill-scanner` trong tập plugin mặc định của Nacos có thể xử lý phần nội dung quét được trong Skill, Prompt và AgentSpec; tổ chức cũng có thể tiếp nhận các hệ quét bảo mật, kiểm tra định dạng, kiểm tra tuân thủ hay hệ thủ công sẵn có qua Pipeline tuỳ biến. Vì việc kiểm tra thực hiện trên nội dung ứng viên đã cố định, nên **kết luận thẩm định tương ứng được với version và digest, tránh việc nội dung phát hành bị thay lặng lẽ sau khi kiểm tra xong.**

Với Agentic Resource Registry, Pipeline khiến **"tài nguyên đã được đăng ký"** và **"tài nguyên được phép vào phạm vi production"** trở thành hai trạng thái khác nhau. Registry cung cấp sự thật tài nguyên và vòng đời; Pipeline cung cấp điều kiện phát hành; khi kết hợp, kết quả khám phá của Agent mới giới hạn được trong các version đã qua yêu cầu hiện tại của tổ chức.

## 15.6 Trung tâm tài nguyên: quản trị thống nhất và tiêu thụ native

Sau khi bàn riêng Prompt, Skill, MCP Server, Agent và AgentSpec, ta thấy chúng vừa có điểm chung, vừa có khác biệt không gộp được. Mục tiêu của trung tâm tài nguyên là **cung cấp cho các năng lực khác nhau một bộ định danh, vòng đời, quyền hạn, thẩm định và lối vào runtime thống nhất** — chứ không phải cải tạo những tài nguyên đó thành cùng một loại nội dung, và càng không phải dùng một giao thức thay cho cách sử dụng riêng của từng thứ.

### 15.6.1 Tài nguyên logic, version và tham chiếu vận hành

Một tài sản cần đồng thời biểu đạt **"nó là ai"** và **"nội dung của nó là gì".** Tài nguyên logic có tên ổn định, Namespace sở hữu, loại và người phụ trách; còn version tài nguyên thì biểu thị một nội dung đã được cố định, với số version riêng, digest nội dung, bản ghi commit và trạng thái.

| Loại tài nguyên | Nội dung chính trong version | Cách dùng lúc chạy |
| --- | --- | --- |
| Prompt | Chỉ dẫn, template, biến và yêu cầu output | Phân giải version rồi render, và đi vào Context |
| Skill | Hướng dẫn sử dụng, script, template, tài liệu và phụ thuộc | Tải và kiểm tra gói năng lực, do Skill Loader nạp theo nhu cầu |
| MCP Server | Mô tả năng lực, Tools, Resources, giao thức và thông tin version | Phân giải endpoint, kết nối và gọi qua MCP |
| Agent | Định nghĩa Agent, năng lực, interface gọi, version và yêu cầu kết nối | Khám phá endpoint vận hành, cộng tác qua giao thức native tương ứng |
| AgentSpec | Cấu hình lắp ráp Agent, tham chiếu tài nguyên và file đi kèm | Phân giải thành phụ thuộc thực tế ở giai đoạn build, deploy hay khởi động |

**Agent không nên lưu phụ thuộc bằng một đường dẫn file tình cờ hay một địa chỉ cố định, mà phải dùng tham chiếu có cấu trúc** gồm Namespace, loại tài nguyên, tên tài nguyên và cách chọn version. Cách chọn version có thể là version chính xác, `latest` do server duy trì, hay các nhãn tổ chức tự định nghĩa như `stable`, `canary`. Resolver nhận tham chiếu rồi phân giải thành một version duy nhất cùng digest nội dung; **bản ghi vận hành bắt buộc phải lưu kết quả phân giải, không được chỉ ghi tên nhãn.**

Việc giữ version bất biến **không có nghĩa mỗi lần cập nhật đều phải sửa cấu hình của mọi Agent.** Trung tâm tài nguyên có thể dời nhãn, hoặc chỉnh quan hệ binding giữa Agent với version. **Nội dung đã phát hành thì không được ghi đè**, nếu không thì các đánh giá lịch sử, việc truy vết vấn đề và bản ghi vận hành sẽ mất ý nghĩa vì version mà chúng tham chiếu đã đổi.

### 15.6.2 Vòng đời, phạm vi nhìn thấy và quan hệ ảnh hưởng

Trong mô hình quản trị chung, version có thể trải qua các trạng thái nháp, đang thẩm định, đã thẩm định, online và offline; còn tài nguyên logic thì có thể bật hay tắt tổng thể. Các tài nguyên khác nhau có thể dùng lại những trạng thái này cùng ngữ nghĩa audit của chúng, **nhưng đường chuyển đổi, nội dung kiểm tra và điều kiện runtime cụ thể thì vẫn do loại tài nguyên quyết định.** **Offline không đồng nghĩa với xoá**; version lịch sử vẫn dùng được cho audit, rollback hay truy vấn theo quyền.

Version online **chỉ được runtime khám phá khi định danh hiện tại nhìn thấy được, có quyền đọc và môi trường thoả yêu cầu.** Phạm vi nhìn thấy dùng để quyết định tài nguyên có xuất hiện trong chi tiết, danh sách và kết quả tìm kiếm không; còn xác thực quyền thì quyết định bên gọi có đọc, sửa hay phát hành được không — **hai thứ đảm nhận vai trò khác nhau.** Namespace hay đơn vị cô lập tương đương còn có thể phân biệt môi trường, tenant và miền nghiệp vụ, tránh để tài nguyên test và tài nguyên production vào cùng phạm vi khám phá.

Trung tâm tài nguyên còn phải duy trì **quan hệ tham chiếu hai chiều**: đi từ Agent hay AgentSpec thì xem được nó phụ thuộc những Prompt, Skill và MCP Server nào; đi từ một version tài nguyên thì xác định được việc phát hành, tắt hay thu hồi nó sẽ ảnh hưởng những Agent nào. **Chỉ khi lưu những quan hệ đó, việc thẩm định thay đổi và xử lý rủi ro mới phán đoán chính xác được phạm vi ảnh hưởng.**

### 15.6.3 Cấu thành bên trong của trung tâm tài nguyên

Trung tâm tài nguyên có thể gồm các phần sau:

```text
Quản lý & phát hành ──> Registry có thẩm quyền ──> Kho nội dung tài nguyên AI
                              │                              │
                              ├──> Pipeline phát hành        │
                              ├──> Index khám phá            │
                              │                              │
Request Agent ──> Policy Engine ──> Resolver ──> Version chính xác và digest
```

| Thành phần | Trách nhiệm chính |
| --- | --- |
| Registry có thẩm quyền | Lưu tài nguyên logic, version, trạng thái, nhãn, quyền và quan hệ tham chiếu; là căn cứ để phán định tài nguyên có tồn tại và có dùng được không |
| Kho nội dung tài nguyên AI | Lưu thân Prompt, gói Skill, gói AgentSpec cùng các nội dung khối lượng lớn khác, và liên kết với version qua digest |
| Pipeline phát hành | Thực thi kiểm tra định dạng, kiểm tra an toàn, đánh giá và các điều kiện phát hành tuỳ biến của tổ chức |
| Index khám phá | Lưu tên, mô tả năng lực, nội dung đã chia mảnh, vector và quan hệ tài nguyên, phục vụ tìm kiếm thủ công và khám phá động |
| Policy Engine | Phán định tài nguyên có xem hay dùng được không, dựa trên định danh, Namespace, môi trường, quyền và mức rủi ro |
| Resolver | Phân giải tham chiếu logic hay nhãn thành một version bất biến, trả về vị trí nội dung, digest, phụ thuộc và thông tin trạng thái |

Các phần này có thể triển khai trong cùng một hệ thống, cũng có thể do nhiều dịch vụ cùng hiện thực. **Điều quan trọng là trách nhiệm rõ ràng: kết quả truy hồi không thay thế được việc phân giải version; kho nội dung AI có file không có nghĩa version đó còn dùng được; endpoint vận hành khoẻ cũng không có nghĩa định danh hiện tại có quyền gọi.**

### 15.6.4 Dữ liệu có thẩm quyền và index phái sinh

Để hỗ trợ tìm kiếm ngữ nghĩa, trung tâm tài nguyên sẽ sinh Document, Chunk hay index vector từ tên, mô tả, thân nội dung và các câu hỏi tiêu biểu. **Những dữ liệu đó phục vụ hiệu suất truy hồi và có thể sinh lại sau khi chiến lược chia mảnh, model hay engine index thay đổi — nên chúng thuộc dữ liệu phái sinh.** Còn version tài nguyên, trạng thái, quyền và digest nội dung thì vẫn lấy bản ghi trong Registry làm chuẩn.

Task index phải ghi version nguồn, chiến lược chia mảnh và model vector, và giữ hội tụ bằng các task tăng dần lặp lại được, retry khi lỗi, backfill và đối chiếu định kỳ. Ngay cả khi index cũ truy hồi ra một tài nguyên đã offline, **trước khi trả về vẫn phải phán định lại theo trạng thái hiện tại trong Registry.** Khi mô tả khám phá và thân nội dung đến từ các version khác nhau thì **phải từ chối sinh index lai.**

### 15.6.5 Chuỗi quản lý và chuỗi vận hành

Việc sửa tài nguyên, thẩm định, quét và sinh index tốn khá nhiều thời gian; còn Agent đang chạy thì yêu cầu phân giải version đã phát hành một cách nhanh và ổn định. Vì vậy, **chuỗi quản lý và chuỗi vận hành nên tách rời về interface và dung lượng.** Chuỗi quản lý xử lý việc tạo, sửa, thẩm định, phát hành, deprecate và thu hồi; còn chuỗi vận hành thì chỉ cung cấp cho các Agent thoả điều kiện phần truy vấn, phân giải, tải xuống, khám phá endpoint và thông báo thay đổi.

Chuỗi vận hành còn cần hỗ trợ cache cục bộ, và **gắn từng mục cache với version chính xác cùng digest.** Khi trung tâm tài nguyên tạm thời không khả dụng, Agent có thể theo policy mà tiếp tục dùng version đã kiểm chứng trong cache; còn các task rủi ro cao không cho phép dùng version cũ thì phải dừng thực thi và nói rõ lý do. Dù dùng cách nào, **cũng không được diễn giải một lần truy vấn thất bại thành "dùng nội dung bất kỳ nào có sẵn".**

Trung tâm tài nguyên thống nhất giải quyết các câu hỏi *tài sản năng lực ở đâu, version nào dùng được và lấy ra sao.* Với các Agent phụ thuộc ổn định, khai báo tường minh tham chiếu tài nguyên là đủ; còn với các Agent có phạm vi task thay đổi nhiều thì còn phải **tìm năng lực phù hợp theo task hiện tại.**

### 15.6.6 Thực tiễn tốt nhất của Nacos Agentic Resource Registry

Nacos AI Registry là một tham chiếu cụ thể cho kiến trúc trung tâm tài nguyên nêu trên. Nó quản lý Prompt, Skill, MCP Server, Agent và AgentSpec trong cùng một nền tảng, khiến các tài nguyên khác nhau dùng lại Namespace, version, nhãn, trạng thái, khả năng nhìn thấy, xác thực quyền và khung Pipeline — **đồng thời giữ nguyên cấu trúc nội dung, phương pháp kiểm tra và giao thức tiêu thụ riêng của từng loại.** Vì vậy, Nacos **không phải đơn giản lưu tài nguyên AI thành cấu hình hay dịch vụ thông thường**, mà là bổ sung một mô hình thống nhất hướng tới Agentic Resource trên nền các năng lực Config và Naming.

Trong mô hình chung của Nacos, một tài nguyên AI được định danh bằng `namespaceId + resourceType + resourceName`; version cụ thể thì thêm `version`. Tài nguyên logic lưu mô tả, phạm vi nhìn thấy, nhãn nghiệp vụ và thông tin sửa đổi; còn version tài nguyên thì lưu nội dung cụ thể, tác giả, trạng thái, thông tin phát hành và vị trí lưu trữ. Các tài nguyên có địa chỉ vận hành như Agent, MCP Server thì còn liên kết trạng thái endpoint hay instance — **nhưng việc đổi địa chỉ không ghi đè version năng lực đã phát hành.** Các trạng thái `draft`, `reviewing`, `reviewed`, `online`, `offline` thì phân biệt tiếp việc sửa nội dung, thẩm định, phát hành và phạm vi khám phá được lúc chạy.

**Dùng chung khung quản trị không có nghĩa hành vi của năm loại tài nguyên hoàn toàn giống nhau.** Khác biệt chính có thể khái quát như sau:

| Tài nguyên | Nội dung version chính | Trọng tâm Pipeline | Khám phá và tiêu thụ native |
| --- | --- | --- | --- |
| Prompt | Template, biến và ràng buộc output | Render, Schema, bộ đánh giá và input an toàn | Đọc theo version hay nhãn, do Prompt Resolver render |
| Skill | `SKILL.md`, script, tài liệu và phụ thuộc | Tính toàn vẹn gói, nguồn gốc, an toàn script và phụ thuộc | Tìm hay tải gói năng lực, do Skill Loader nạp theo nhu cầu |
| MCP Server | Mô tả dịch vụ, Tool, Resource và thông tin giao thức | Schema, tương thích giao thức, xác thực và mẫu gọi | Khám phá qua Registry hay Router, do MCP Client gọi |
| Agent | Interface gọi có version, mô tả native của giao thức và endpoint khai báo | Kiểm tra nội dung, interface và giao thức, yêu cầu an toàn; hành vi vận hành do đánh giá bên ngoài bù | ARD có thể khám phá và lấy tài nguyên; RAD phân giải thông tin gọi từ xa theo nhu cầu, rồi client giao thức tương tác |
| AgentSpec | Cấu hình lắp ráp Agent, tham chiếu tài nguyên và file đi kèm | Manifest, phân giải phụ thuộc, khoá version và kiểm chứng build | Phân giải thành phụ thuộc thực tế ở giai đoạn build, deploy hay khởi động |

Quan hệ nội bộ của chúng như hình 15-4.

![ch15-04-agentic-resource-registry.png](../assets/imgs/chapter-15/image-004.png)

*Hình 15-4 — Toàn cảnh kiến trúc Nacos Agentic Resource Registry*

Nacos AI Registry lưu tài nguyên logic, version, trạng thái, nhãn, phạm vi nhìn thấy và thông tin phát hành — là **bản ghi có thẩm quyền của việc quản trị tài nguyên**; AI Storage lưu các gói Skill, AgentSpec cùng nội dung khối lượng lớn khác; Config và Naming lần lượt gánh nội dung động và việc khám phá instance vận hành; còn Pipeline phát hành AI thì chạy phần quét, thẩm định và kiểm tra tuỳ biến phù hợp với từng loại trước khi tài nguyên phát hành. Phía vận hành có thể lấy nội dung version và tài nguyên ứng viên qua Client API, tích hợp framework hệ sinh thái, MCP Router hay ARD; và khi Agent đã chọn cần thông tin gọi từ xa thì còn phân giải interface gọi cùng endpoint khả dụng qua RAD. **Sau khi chọn xong, tài nguyên vẫn được Prompt Resolver, Skill Loader, MCP Client hay client giao thức Agent tiêu thụ một cách native.**

Trong năng lực ARD của dòng version Nacos 3.3, **tài nguyên chuẩn trong AI Registry giữ vị thế dữ liệu có thẩm quyền**; còn Document, Chunk và Embedding thì là dữ liệu phái sinh dựng lại được. `SKILL.md` của Skill, template Prompt, cùng mô tả dịch vụ, Tool và Resource của MCP Server đều có thể trở thành vật liệu index; khi chiến lược chia mảnh hay model vector đổi thì **chỉ dựng lại index, không sửa version tài nguyên gốc.** Phạm vi truy hồi của ARD cũng gồm Agent, và có thể tiếp tục lấy tài nguyên Agent cụ thể. RAD trên nền đó cung cấp cách khám phá chuyên biệt cho Agent từ xa, và khi cần thì trả về mô tả native của giao thức cùng Endpoint hiện tại; **nó là một đường hiện thực để ARD xử lý thông tin gọi Agent, chứ không phải một hệ khám phá cạnh tranh khác.**

Ưu thế của Nacos không nằm ở việc đưa năm loại tài nguyên vào cùng một danh sách, mà ở việc **nối sự thật tài nguyên, quản trị phát hành và khám phá vận hành thành cùng một chuỗi:**

| Vấn đề kỹ thuật | Năng lực tương ứng của Nacos | Thay đổi trực tiếp mang lại |
| --- | --- | --- |
| Nhiều loại tài nguyên bảo trì phân tán | AI Registry quản lý thống nhất Prompt, Skill, MCP Server, Agent và AgentSpec | Team dùng một lối vào nhất quán để kiểm kê, truy hồi và phân phối tài nguyên |
| Trộn lẫn version và môi trường | Namespace, version bất biến, nhãn, trạng thái online và phạm vi nhìn thấy | Ranh giới test – production rõ hơn, kết quả vận hành định vị được về version cụ thể |
| Chất lượng phát hành thiếu bản ghi thống nhất | Pipeline phát hành AI và vòng đời tài nguyên | Việc quét, thẩm định, từ chối và phát hành cưỡng chế liên kết được với version ứng viên |
| Nhịp thay đổi của định nghĩa năng lực và địa chỉ vận hành khác nhau | AI Registry kết hợp Config và Naming | Version tài nguyên và trạng thái endpoint tiến hoá riêng được |
| Cách tích hợp Agent rất đa dạng | Các lối vào CLI, API, SDK, Spring AI Alibaba, MCP Router… | Framework high-code, công cụ phát triển và Agent đa dụng dùng chung được một nguồn tài nguyên |
| Trước khi task bắt đầu vẫn phải chọn loại tài nguyên thủ công | ARD khám phá theo ý định; bối cảnh Agent dùng RAD theo nhu cầu | Agent xuất phát từ sự thật task để tìm các năng lực đã được quản trị, và phân giải giao thức cùng endpoint khi cần gọi từ xa |

Những năng lực đó cùng tạo thành nền cho việc Nacos tiến hoá từ nền tảng đăng ký – cấu hình microservice sang Agentic Resource Registry. Chuỗi quản lý có thể hoàn tất việc sửa và phát hành qua console, CLI và API; chuỗi vận hành có thể phân giải và kết nối qua client, tích hợp framework và Router chuyên biệt. **Còn việc Agent có cache hay không, đổi version khi nào, và đưa nội dung vào Context ra sao — thì vẫn do phía gọi quyết định theo ranh giới task.** Hai mục tiếp theo sẽ lần lượt nói về cách Agent ổn định dùng Registry này để phân giải phụ thuộc rõ ràng, và cách Agent động khám phá theo task trên nền đó.

## 15.7 Agent ổn định: lấy năng lực qua phụ thuộc khai báo

**Agent ổn định** là những Agent có trách nhiệm và phụ thuộc chính đã rõ trước khi phát hành, và ít thay đổi trong lúc chạy. Chữ "ổn định" ở đây không có nghĩa mọi nội dung phải viết vào code, mà là **việc nó dùng những Prompt, Skill, MCP Server và Agent cộng tác nào thì khai báo trước được qua cấu hình hay AgentSpec.** Các Agent phân loại chăm sóc khách hàng, thẩm định tuân thủ và xử lý dữ liệu theo quy trình cố định thường thuộc loại này.

Dù Agent được xây bằng framework high-code như AgentScope, LangChain, LangGraph, hay chạy trong các Agent đa dụng như Coding Agent, Harness Agent, thì quá trình lấy tài nguyên của nó đều quy được thành **"khai báo tham chiếu, phân giải version, kiểm chứng nội dung, nạp hoặc kết nối, ghi lại kết quả".** Khác biệt giữa các framework chủ yếu thể hiện ở vị trí tích hợp, **chứ không làm đổi yêu cầu về version và bản ghi vận hành.**

### 15.7.1 Ba thời điểm binding

Agent ổn định có thể lấy phụ thuộc ở giai đoạn build, deploy hay khởi động. Khác biệt giữa ba cách nằm ở **version được xác định khi nào, và việc cập nhật tài nguyên có phải bàn giao lại Agent hay không.**

| Cách | Thời điểm xác định version | Ưu điểm | Vấn đề cần lưu ý | Bối cảnh áp dụng |
| --- | --- | --- | --- | --- |
| Binding lúc build | Khi tạo gói code hay image | Nội dung cố định cùng Agent Release, dùng offline được, đường tái lập rõ ràng | Cập nhật phụ thuộc phải build và phát hành lại | Agent yêu cầu tính xác định cao, chạy offline hoặc ít thay đổi |
| Phân giải lúc deploy | Trước khi phát hành vào một môi trường cụ thể | Cùng một AgentSpec phân giải được theo môi trường; lock manifest lưu trong sản phẩm phát hành | Hệ CI/CD phải truy cập được trung tâm tài nguyên và hoàn tất kiểm tra phụ thuộc | Agent triển khai đa môi trường, cần quản lý phát hành thống nhất |
| Kéo lúc khởi động | Khi instance khởi động hay task bắt đầu | Tài nguyên cập nhật độc lập được, tốc độ bàn giao nhanh hơn | Phụ thuộc tính khả dụng của trung tâm tài nguyên; cần chính sách cache và nhất quán | Agent cần bảo trì tập trung, cập nhật khá thường xuyên |

Binding lúc build có thể ghi version chính xác và digest vào image hay gói cài, đồng thời lưu nguồn tài nguyên. **Ngay cả khi nhãn trong Registry đã bị dời, version đã build vẫn dùng nội dung gốc.** Còn phân giải lúc deploy thì để CI/CD truy vấn trung tâm tài nguyên theo AgentSpec, chuyển tham chiếu logic thành version chính xác, sinh Lock Manifest rồi mới deploy.

Kéo lúc khởi động cho phép Agent phân giải nhãn `stable` tự định nghĩa của tổ chức khi khởi động và tải nội dung hay truy vấn endpoint. Khi cần phản ứng nhanh hơn với cập nhật, cũng có thể lắng nghe thay đổi nhãn, trạng thái tài nguyên hay endpoint; **nhưng nhận được cập nhật không có nghĩa thay thế ngay nội dung trong task đang chạy.** Nền tảng phải hoàn tất việc tải, kiểm tra digest, kiểm tra tương thích hay kiểm chứng kết nối trước, rồi mới bật version mới **ở một ranh giới task rõ ràng kế tiếp.**

### 15.7.2 Phân giải phụ thuộc khai báo

Agent ổn định thường **không cần làm tìm kiếm ngữ nghĩa trước.** AgentSpec đã đưa ra tên tài nguyên cần thiết; việc runtime phải làm là phân giải khai báo đó thành version cụ thể dùng được. Ví dụ:

```yaml
agent: incident-summary
resources:
  prompts:
    - namespace: ops
      name: incident-summary
      version: 2.3.1
  skills:
    - namespace: ops
      name: log-normalization
      label: stable
  mcpServers:
    - namespace: ops
      name: observability
      label: stable
```

Resolver trước hết kiểm tra phạm vi nhìn thấy theo định danh gọi và môi trường đích, rồi phân giải version chính xác hay nhãn, kiểm chứng vòng đời, điều kiện tương thích và phụ thuộc, cuối cùng trả về vị trí nội dung, digest hay endpoint vận hành. Skill Loader, Prompt Resolver hay MCP Client sau khi lấy tài nguyên thì kiểm chứng lại lần nữa, và ghi kết quả thực tế vào Lock Manifest hay bản ghi vận hành.

**Trọng tâm của con đường này là tính xác định, chứ không phải phạm vi tìm kiếm.** Ngay cả khi cấu hình dùng nhãn, bản ghi vận hành vẫn phải lưu version đã phân giải lúc đó, **không được chỉ để lại tên nhãn.** MCP Server và Agent còn phải ghi endpoint thực sự kết nối, để phân tích riêng được thay đổi version và thay đổi instance vận hành.

### 15.7.3 Tích hợp với các hình thái Agent khác nhau

Agent high-code có thể gọi Resolver qua SDK ở giai đoạn khởi tạo, tiêm template Prompt, thư mục Skill hay thông tin kết nối MCP vào luồng nạp sẵn có của framework; CI/CD có thể dùng CLI để sinh lock manifest ở giai đoạn build hay deploy; còn khi nhiều runtime dùng chung một bộ năng lực tài nguyên thì có thể xử lý thống nhất việc tải, cache và thông báo cập nhật qua Sidecar hay một dịch vụ nội bộ.

Agent đa dụng thường đã có sẵn cơ chế thư mục chỉ dẫn cục bộ, thư mục Skill hay cấu hình MCP. Trung tâm tài nguyên có thể dùng component đồng bộ để đặt version đã phân giải vào đúng những vị trí native đó và lưu nguồn cùng digest; hoặc để Harness hoàn tất việc phân giải ở mỗi lần khởi động. **Việc tích hợp không nên đòi framework từ bỏ cách dùng sẵn có, mà nên bổ sung phần kiểm tra version, quyền và toàn vẹn thống nhất trước khi nạp hay kết nối.**

Dù tích hợp theo cách nào, cũng phải tránh việc **file cục bộ trùng tên ghi đè lặng lẽ version của Registry.** Nếu cho phép lập trình viên sửa khi debug cục bộ, thì phải đánh dấu đó là nội dung chưa phát hành và phân biệt rõ trong bản ghi vận hành — **không được tiếp tục dùng số version đã phát hành.**

### 15.7.4 Cập nhật và xử lý ngoại lệ

Sau khi node vận hành nhận cập nhật tài nguyên, nó phải hoàn tất việc tải và kiểm chứng ở một vị trí bên lề trước, xác nhận runtime, tool, phụ thuộc và endpoint đều thoả, rồi mới chuyển sang version mới. Sau khi một task đã bắt đầu, **về nguyên tắc version Prompt và Skill giữ ổn định**; còn các workflow kéo dài nhiều giờ hay nhiều ngày thì có thể phân giải lại ở ranh giới giai đoạn, nhưng phải ghi điểm chuyển đổi vào Trace.

Cách xử lý khi lấy thất bại phụ thuộc vào tính chất tài nguyên. Phần hướng dẫn không then chốt thì có thể tiếp tục dùng version cục bộ đã kiểm chứng và phát cảnh báo; còn Prompt liên quan tới policy an toàn hay yêu cầu pháp quy thì **có thể không được phép dùng cache đã hết hạn** — khi đó phải tạm dừng task mới. Nội dung cache cũng phải kiểm tra digest và trạng thái hiệu lực, **không được vì nằm ở cục bộ mà vòng qua thông tin thu hồi.**

### 15.7.5 Dùng Nacos để lấy phụ thuộc ổn định

Nacos có thể gánh riêng ba thời điểm binding. Ở giai đoạn build, CI/CD tải các Prompt, Skill và AgentSpec version xác định qua CLI hay API, rồi ghi version cùng digest vào sản phẩm phát hành. Ở giai đoạn deploy, nền tảng phân giải nhãn và phụ thuộc theo Namespace đích, sinh lock manifest tương ứng với môi trường. Ở giai đoạn khởi động, Agent truy vấn version online hiện tại qua client API, đồng thời lấy endpoint khả dụng từ MCP Registry hay A2A Registry.

Với framework high-code, có thể nối thẳng Nacos Client hay Spring AI Alibaba trong module khởi tạo, chuyển Prompt, gói Skill, MCP Server và AgentCard lấy được thành đối tượng native của framework. Với Coding Agent, công cụ phát triển hay các Agent đa dụng khác, có thể tìm và cài Skill qua Nacos CLI, lấy AgentSpec qua client API, và để MCP Router cung cấp lối vào MCP thống nhất, rồi giao cho Harness sẵn có hoàn tất việc nạp.

Nhãn giúp tài nguyên và ứng dụng Agent phát hành độc lập được, **nhưng Agent production không nên phân giải lại nhãn trước mỗi vòng gọi model.** Cách vững hơn là phân giải một lần ở các ranh giới rõ ràng như build, deploy, khởi động hay bắt đầu task, rồi ghi version chính xác mà Nacos trả về vào Lock Manifest. Endpoint của MCP và Agent thì có thể chuyển đổi theo trạng thái sức khoẻ trong cùng một version, còn **version nội dung tài nguyên thì giữ nguyên.**

**Nacos cung cấp tài nguyên có thẩm quyền và năng lực khám phá động, chứ không thay ứng dụng quyết định thời gian cache và chính sách khi thất bại.** Node vận hành phải lưu version đã kiểm chứng gần nhất, và tuỳ vào việc tài nguyên có cho phép dùng nội dung hết hạn hay không mà chọn tiếp tục chạy, dừng task mới hay chờ Registry hồi phục. Như vậy vừa tận dụng được việc cập nhật động của Nacos, vừa tránh để một sự cố thoáng qua ở mặt phẳng điều khiển phá hỏng các task đang chạy.

Qua đó có thể thấy, việc khám phá tài nguyên của Agent ổn định **về bản chất là phân giải phụ thuộc khai báo.** Nó phù hợp với các hệ thống có trách nhiệm ổn định, thay đổi dự đoán được; còn khi Agent đối mặt với task mở và không thể liệt kê trước mọi năng lực có thể cần, thì phải bổ sung việc khám phá theo task trên cùng nền quản trị đó.

## 15.8 Agent động: khám phá năng lực theo task qua ARD và RAD

Phạm vi task của **Agent động** thay đổi theo request người dùng và trạng thái vận hành. Ví dụ, một Agent vận hành đa dụng có thể xử lý bất thường container trước, rồi chuyển sang phân tích hiệu năng database hay thay đổi phát hành. Nó **không thể liệt kê chính xác mọi Prompt, Skill, MCP Server hay Agent cộng tác mà từng lần task cần, trước khi phát hành.** Nếu binding trước mọi năng lực ứng viên thì cấu hình sẽ phình liên tục, và một lượng lớn hướng dẫn không liên quan sẽ chiếm chỗ Context, đồng thời làm tăng xác suất model chọn nhầm năng lực.

**Agentic Resource Discovery (ARD)** dùng để khám phá những năng lực có thể cần, dựa trên task hiện tại, **trước khi gọi.** Dòng ARD v0.9 của cộng đồng định nghĩa phần mô tả, truy hồi và khám phá liên bang cho nhiều loại Agentic Resource dưới dạng đề xuất mở; còn dòng version Nacos 3.3 thì cung cấp năng lực khám phá theo ý định tương ứng trên nền AI Registry, có thể truy hồi Prompt, Skill, MCP Server và Agent, rồi tiếp tục lấy tài nguyên cụ thể. **ARD nằm giữa việc phán đoán ý định của Agent và việc dùng tài nguyên, trả lời câu hỏi "task hiện tại phù hợp dùng cái gì" — nhưng không lo việc thực thi Skill, gọi Tool hay thay một Agent khác hoàn thành công việc.**

### 15.8.1 Hình thành nhu cầu năng lực từ sự thật task

Input của ARD **không nên chỉ là một dòng nguyên văn chưa xử lý của người dùng.** Agent có thể kết hợp mục tiêu hiện tại, thông tin đã có và giới hạn vận hành để hình thành một **Capability Requirement có cấu trúc**, gồm mô tả task, kết quả kỳ vọng, kiểu dữ liệu, miền nghiệp vụ, môi trường, yêu cầu thời hạn, mức rủi ro cho phép, quyền khả dụng và giới hạn chi phí.

Ví dụ, "phân tích nguyên nhân độ trễ interface đơn hàng tăng ngay sau khi phát hành" đồng thời chứa thời điểm thay đổi, hệ thống đích, hiện tượng và mục đích chẩn đoán — **có sức phân biệt hơn nhiều so với việc chỉ tìm "phân tích độ trễ".** Quá trình hình thành nhu cầu vẫn phải giữ ý định gốc của người dùng, **không được thêm những sự thật nghiệp vụ chưa được xác nhận chỉ để khớp tài nguyên.**

Khi liên quan tới trường nhạy cảm, cũng **không cần gửi dữ liệu đầy đủ tới dịch vụ khám phá**; có thể dùng kiểu, phạm vi hay digest đã qua bảo vệ để biểu đạt điều kiện cần cho việc khám phá. **Mục tiêu của ARD là tìm năng lực, không phải lấy toàn bộ dữ liệu của task.**

### 15.8.2 Index dựng lại được và truy hồi lai

Sau khi tài nguyên phát hành, có thể sinh một biểu diễn truy hồi thống nhất từ tên, mô tả năng lực, bối cảnh áp dụng, câu hỏi tiêu biểu, nhãn và thân nội dung. Một tài nguyên trước hết hình thành một **Document** lưu định danh tài nguyên, version, digest và metadata truy hồi, rồi được chẻ thành nhiều **Chunk** theo luật. Hướng dẫn của Skill, template Prompt cùng mô tả dịch vụ, Tool và Resource của MCP Server đều có thể trở thành căn cứ truy hồi.

Các Document, Chunk và vector này **thuộc dữ liệu phái sinh dựng lại được**; Registry có thẩm quyền vẫn lưu version, trạng thái, quyền và digest nội dung làm bản ghi chính thức. Việc dựng index có thể dùng task bền vững, cập nhật idempotent, retry khi lỗi, backfill và đối chiếu định kỳ, để thay đổi tài nguyên cuối cùng phản ánh vào kết quả khám phá.

Truy hồi từ khoá phù hợp với tên, sản phẩm, mã lỗi và các thuật ngữ xác định; truy hồi vector phù hợp với việc khớp ngữ nghĩa giữa cách diễn đạt task và mô tả năng lực; còn quan hệ tài nguyên thì bù thêm những thông tin như "một Skill nào đó phụ thuộc một MCP Server nào đó" hay "một Agent nào đó đã có sẵn năng lực tương ứng". Hệ thống có thể hợp nhất kết quả recall từ nhiều đường, và tăng trọng số cho các khớp chính xác về tên hay thuật ngữ nghiệp vụ. **Vector và phần tăng cường bằng mô hình lớn là năng lực tuỳ chọn; ngay cả khi chưa bật, truy hồi từ khoá cơ bản vẫn phải hoạt động được.**

**Điểm liên quan trong kết quả khám phá chỉ biểu đạt mức khớp giữa ứng viên với task — nó không phải điểm an toàn, và cũng không đại diện cho việc nền tảng đã bảo đảm chất lượng tài nguyên.**

### 15.8.3 Xếp hạng theo mức liên quan và tư cách quản trị

**Mức liên quan và tư cách sử dụng là hai vấn đề khác nhau.** Mức liên quan quyết định ứng viên được xếp hạng ra sao; còn luật quản trị thì phán định bên gọi có quyền dùng không, tài nguyên có online không, version có được phép vào môi trường hiện tại không, và rủi ro cùng chi phí có thoả giới hạn không. **Một tài nguyên rất liên quan nhưng đã bị thu hồi hay vượt phạm vi uỷ quyền thì không được xuất hiện trong danh sách ứng viên khả dụng chỉ vì điểm cao.**

Việc phán định quản trị có thể chia giai đoạn. Trước khi truy hồi, thu hẹp phạm vi nhìn thấy theo định danh, Namespace và loại tài nguyên, để những tài nguyên không nên phơi ra không lọt vào tìm kiếm; sau khi có ứng viên thì kết hợp trạng thái version, uỷ quyền tường minh, tính tương thích môi trường, mức rủi ro và quyền của task hiện tại để phán định lần cuối. **Việc lọc phải hoàn tất trước khi phân trang cuối cùng, tránh để số trang và tổng số làm lộ thông tin về những tài nguyên không nhìn thấy được.**

Kết quả trả về còn nên nói rõ căn cứ khớp chính, nguồn tài nguyên, trạng thái version và các điều kiện sử dụng cần thiết, để Agent hay người thẩm định hiểu được lý do lựa chọn. **Truy cập ẩn danh cũng bắt buộc phải tuân theo phạm vi công khai và yêu cầu quyền tối thiểu, không được vòng qua phán định quản trị.**

### 15.8.4 Quan hệ phân tầng giữa ARD và RAD

ARD hướng tới Agentic Resource theo nghĩa rộng. Khi task chưa xác định cách giải, nó có thể khám phá xuyên loại các Skill, Prompt, MCP Server, Agent, API hay tài nguyên mô tả được khác. Trong Nacos, ARD không chỉ trả Agent về làm ứng viên, mà còn tiếp tục đọc được Agent cụ thể qua cách lấy tài nguyên thống nhất; **việc lấy Agent không nhất thiết phải đi qua một bộ giao thức khám phá khác.**

Khi task cần chuyển một Agent ứng viên thành đối tượng gọi từ xa được, vấn đề thu hẹp tiếp về version, interface gọi, giao thức và endpoint vận hành. **Remote Agent Discovery (RAD)** là cơ chế độc lập giao thức mà Nacos trừu tượng cho bối cảnh này. Ở dòng version Nacos 3.3, năng lực này đã hoàn thành ở mức ban đầu: Search hình thành danh mục ứng viên Agent theo tên, nhãn và giao thức hỗ trợ; Discover trả về mô tả native của giao thức cùng endpoint truy cập được của version Agent đã chọn; Watch cảm nhận thay đổi snapshot khám phá; còn publisher vận hành thì duy trì trạng thái endpoint qua Register và Deregister.

**Agent Registry là nguồn tài nguyên có thẩm quyền của RAD**, lưu định nghĩa chung, version và endpoint vận hành của Agent; còn các mô tả giao thức như A2A AgentCard thì giữ lại làm nội dung native của interface gọi tương ứng, **chứ không cố định hoá thành mô hình chung của RAD.** Sau khi chọn Agent, việc trao đổi message task và trạng thái thực tế vẫn do A2A hay cách native tương ứng hoàn tất. Tương tự, ARD tìm ra MCP Server thì MCP Client dùng; tìm ra Skill thì Skill Loader nạp; tìm ra Prompt thì Prompt Resolver lấy.

Vì vậy, **ARD và RAD không phải quan hệ song song hay cạnh tranh.** ARD tự hoàn tất được việc truy hồi Agent và lấy tài nguyên cụ thể; khi bên gọi cần snapshot gọi từ xa thì mới dùng RAD theo nhu cầu để phân giải giao thức và endpoint. Bên gọi đã biết đích là một Agent từ xa cũng có thể dùng thẳng RAD Search hay Discover — **đó là một lối vào chuyên biệt cho bối cảnh Agent, và không làm đổi vị trí phụ thuộc của RAD trong hệ khám phá tài nguyên theo nghĩa rộng.** Hai con đường luôn dùng chung cùng một tài nguyên Agent, version, phạm vi nhìn thấy và ngữ nghĩa quyền hạn.

### 15.8.5 Khám phá động có kiểm soát và mô hình lai

**Khám phá động không có nghĩa Agent được tự do lấy bất kỳ nội dung bên ngoài nào.** Các ứng viên của ARD cùng thông tin gọi Agent mà RAD trả về đều phải giới hạn trong những tài nguyên đã phát hành trong trung tâm tài nguyên, thoả yêu cầu về định danh và môi trường hiện tại. Skill, MCP Server hay Agent bên ngoài **chỉ vào được phạm vi khám phá tương ứng sau khi hoàn tất chấp nhận nội bộ và hình thành version xác định.** Việc Agent chọn ứng viên cũng **không tự động mang lại quyền bổ sung**; việc nạp và gọi thực tế vẫn phải qua uỷ quyền của task hiện tại.

Hệ thống production thường dùng kết hợp **phụ thuộc cố định và khám phá động.** Các Prompt lõi quyết định định danh Agent, hành vi cơ bản và ranh giới an toàn, cùng các Skill nền ổn định tần suất cao, thì có thể cố định version hay dùng nhãn ổn định qua AgentSpec; còn các năng lực đuôi dài nghiệp vụ, tool chuyên ngành và Agent cộng tác tạm thời thì khám phá theo task.

Với các thao tác rủi ro cao, kết quả khám phá có thể yêu cầu con người xác nhận, hoặc chỉ trả về mô tả năng lực mà không cho nạp tự động. Hệ thống xác định mức tự động hoá theo rủi ro tài nguyên, môi trường task và khả năng khôi phục của thao tác. **Tính linh hoạt của Agent động do phạm vi tài nguyên khám phá được cung cấp; còn ranh giới của nó thì vẫn do trạng thái tài nguyên, quyền hạn và policy vận hành cùng xác định.**

![ch15-05-stable-dynamic-discovery.png](../assets/imgs/chapter-15/image-005.png)

*Hình 15-5 — Đường lấy tài nguyên của Agent ổn định và Agent động*

### 15.8.6 Nacos đi từ quản lý theo loại tới khám phá theo ý định

Nacos AI Registry đã quản lý riêng được Prompt, Skill, MCP Server, Agent và AgentSpec, nhưng **truy vấn truyền thống thường vẫn bắt đầu từ loại tài nguyên.** Bên gọi phải phán đoán trước là mình cần tìm Skill, MCP hay Agent, rồi mới vào interface tương ứng. Năng lực ARD ở dòng version Nacos 3.3 bổ sung một **tầng thích ứng khám phá theo ý định task** trên nền Registry sẵn có, khiến việc quản lý thống nhất mở rộng tiếp thành khám phá thống nhất.

Chuỗi nội bộ của nó có thể khái quát là: ARD Client truy cập ARD Adapter; Adapter gọi AI Resource Search độc lập giao thức; tầng tìm kiếm dùng index quan hệ và năng lực vector tuỳ chọn; và cuối cùng **vẫn lấy tài nguyên chuẩn trong Nacos AI Registry làm dữ liệu có thẩm quyền.** Định nghĩa interface ARD hướng ra ngoài tách rời với mô hình tài nguyên nội bộ, để việc chỉnh giao thức, thay đổi chiến lược truy hồi và quản trị version tài nguyên tiến hoá độc lập được.

Sau khi tài nguyên phát hành, Nacos sinh Document và Chunk từ tên, mô tả, câu hỏi tiêu biểu và thân nội dung. Recall từ khoá xử lý các thuật ngữ xác định như tên tài nguyên, tên sản phẩm và mã lỗi; recall vector bù phần khớp ngữ nghĩa; rồi hợp nhất kết quả qua xếp hạng có trọng số. **Vector và phần tăng cường bằng mô hình lớn đều là năng lực tuỳ chọn; khi chưa bật thì truy hồi từ khoá vẫn cung cấp năng lực khám phá cơ bản.** Index phái sinh hội tụ dần qua task, retry, backfill và đối chiếu, **và không được ghi ngược đè lên tài nguyên chuẩn trong Registry.**

Trước khi trả ứng viên, hệ thống tiếp tục tuân theo Namespace, uỷ quyền theo từng tài nguyên, con trỏ `latest` và trạng thái `online`. **Mức liên quan chỉ quyết định thứ tự; luật quản trị quyết định ứng viên có tư cách xuất hiện hay không.** Nhờ vậy, ARD dùng lại được ngữ nghĩa trạng thái tài nguyên và quyền hạn sẵn có của Nacos, không phải duy trì thêm một bộ phạm vi nhìn thấy xung đột chỉ vì tìm kiếm ngữ nghĩa.

Dòng version Nacos 3.3 đã đưa Agent vào phạm vi khám phá của AI Resource Search và ARD, nên ARD trả được ứng viên Agent và tiếp tục lấy tài nguyên cụ thể. Với bối cảnh gọi từ xa, bên gọi mới dùng RAD theo nhu cầu để lấy version online chính xác, interface gọi và endpoint vận hành. **RAD không thay thế năng lực lấy Agent của ARD, mà bổ sung phần ngữ nghĩa chuyên biệt cần cho việc gọi từ xa.** Bản hiện thực hiện tại vẫn chủ yếu tập trung vào Registry cục bộ hay riêng tư; khi chưa cấu hình Registry thượng nguồn thì **không được mô tả một truy vấn cục bộ là đã hoàn thành Federation hay Referral trên Internet công cộng.**

Vì vậy, vai trò đầy đủ của Nacos trong bối cảnh Agent động **không phải một ô tìm kiếm độc lập**, mà là tổ hợp của **"AI Registry có thẩm quyền, index tìm kiếm dựng lại được, lọc theo quản trị và adapter khám phá chuẩn".** Sau khi Agent có được ứng viên từ ý định task, nó dùng tài nguyên tương ứng qua Nacos Client, MCP Router, Skill Loader hay A2A Client.

Sau khi ARD hoàn tất việc chọn và lấy tài nguyên, khi cần thì RAD bù thêm thông tin gọi cho Agent từ xa. Lúc này Agent đã biết task lần này dùng được những tài nguyên nào, **nhưng những tài nguyên đó chưa tự nhiên trở thành context của model.** Mục tiếp theo sẽ bàn cách lắp ráp kết quả lựa chọn thành một Context thực thi được, dưới các ràng buộc về độ ưu tiên, ranh giới tin cậy và ngân sách token.

## 15.9 Từ kết quả khám phá tới Context lúc chạy

Việc khám phá tài nguyên chỉ xác định task lần này **có thể** cần những năng lực nào; **nó không cho phép nối thẳng toàn bộ nội dung của mọi ứng viên vào system prompt.** Các tài nguyên khác nhau có độ ưu tiên chỉ dẫn, mức tin cậy và cách nạp khác nhau; context model lại còn bị giới hạn độ dài. Nếu thiếu một quá trình lắp ráp thống nhất, thì **việc khám phá động càng linh hoạt lại càng dễ sinh xung đột chỉ dẫn, thông tin không liên quan chiếm chỗ, và nội dung bên ngoài làm đổi luật hệ thống.**

Chương 4 đã giới thiệu việc Harness quản lý Context. Mục này, trên nền quản trị và khám phá tài nguyên, nói tiếp việc **Context Compiler** lắp ráp các Prompt, Skill, mô tả tool, dữ liệu truy hồi và trạng thái task đã phân giải thành phần thông tin mà một lần gọi model thực sự nhìn thấy. Bản thân MCP Server và Agent từ xa **không đi vào Context dưới dạng những khối văn bản lớn**; thứ đi vào Context là mô tả năng lực khả dụng cho task hiện tại, tham số cần thiết và kết quả gọi — còn việc kết nối và tương tác thật thì vẫn do client tương ứng hoàn tất.

### 15.9.1 Tách bản tóm tắt khám phá khỏi nội dung thực thi

Giai đoạn khám phá cần so sánh nhanh các ứng viên trong một lượng lớn tài nguyên, nên **chỉ nên dùng metadata** như tên, mô tả năng lực ngắn, bối cảnh áp dụng, trạng thái version, mức rủi ro và lý do khớp. Một Skill đầy đủ có thể chứa nhiều tài liệu tham chiếu và script; một MCP Server có thể cung cấp rất nhiều Tool và Resource; AgentCard cũng có thể mô tả nhiều năng lực. **Nếu nạp toàn bộ nội dung ngay ở giai đoạn so sánh ứng viên, thì vừa tăng chi phí truy hồi và truyền tải, vừa khiến Context bị chiếm bởi thông tin chưa được chọn dùng.**

Sau khi Agent chọn ứng viên, Resolver phân giải tham chiếu logic thành version chính xác. Context Compiler rồi mới lấy nội dung cần cho việc thực thi theo từng loại tài nguyên: Prompt thì nạp thân và Schema biến; Skill thì nạp phần hướng dẫn chính trước, đến bước cụ thể mới đọc template hay tài liệu tham chiếu; MCP Server thì chỉ trình cho model những tool cần thiết trong phạm vi uỷ quyền hiện tại; còn Agent từ xa thì cung cấp mô tả năng lực đã lọc, và việc gọi do A2A Client hoàn tất theo endpoint mà Agent Registry trả về.

Cách hai giai đoạn này **tách "biết có những năng lực nào" khỏi "lấy nội dung cần để hoàn thành task"**:

```text
Giai đoạn khám phá: Tóm tắt tài nguyên ──> So sánh ứng viên ──> Chọn tài nguyên
Giai đoạn thực thi: Version chính xác ──> Lấy nội dung hay endpoint theo nhu cầu ──> Lắp ráp Context và gọi native
```

**Tóm tắt tài nguyên và nội dung đầy đủ bắt buộc phải trỏ tới cùng một version logic.** Nếu index khám phá chưa cập nhật, version ứng với bản tóm tắt đã bị thu hồi, hoặc endpoint không còn thoả yêu cầu môi trường, thì **Resolver phải từ chối nạp tiếp và kích hoạt khám phá lại — không được thay bằng một nội dung khác có tên gần giống.**

### 15.9.2 Độ ưu tiên và ranh giới tin cậy

Context Compiler cần biết mỗi nội dung đến từ đâu, và nó đóng vai trò gì trong lần gọi này. Cách phân loại sau có thể dùng làm nền khi lắp ráp:

| Nguồn nội dung | Vai trò trong Context | Nguyên tắc xử lý |
| --- | --- | --- |
| Policy hệ thống và Prompt lõi | Quy định định danh Agent, ranh giới task và luật dài hạn | Do nguồn đáng tin phát hành, độ ưu tiên ổn định, **không cho phép bị nội dung sau ghi đè** |
| Prompt của task | Định nghĩa mục tiêu task hiện tại, input/output và yêu cầu xử lý | Đã qua phân giải version và kiểm tra biến, gắn với task hiện tại |
| Skill đã được duyệt | Cung cấp phương pháp, các bước và giới hạn cho một loại task | Nạp theo nhu cầu, **chỉ có hiệu lực trong phạm vi năng lực và quyền đã khai báo** |
| Mô tả năng lực MCP và Agent từ xa | Mô tả năng lực gọi được, tham số và kiểu kết quả | Do runtime sinh theo uỷ quyền hiện tại, giữ nhất quán với endpoint thực sự khả dụng |
| Knowledge, RAG và Memory | Cung cấp sự thật, lịch sử và thông tin tham khảo | Dùng như nguồn dữ liệu, giữ lại xuất xứ, thời gian và mức liên quan |
| Input người dùng và kết quả gọi | Cung cấp request hiện tại và phản hồi thực thi | Coi là **dữ liệu bên ngoài, không tự động làm đổi các chỉ dẫn cấp cao hơn** |

**Độ ưu tiên không chỉ do vị trí sắp xếp trong văn bản quyết định.** Context Compiler phải giữ phân cấp chỉ dẫn theo cách có cấu trúc, và kiểm tra xung đột trước khi gửi cho model. Nếu một Skill được khám phá lại yêu cầu bỏ qua policy hệ thống, hoặc nội dung trả về của một MCP Tool chứa văn bản giống chỉ dẫn hệ thống, thì **những nội dung đó vẫn giữ nguyên tầng dữ liệu hay tầng Skill của mình — không được vì lời lẽ mạnh mà có được độ ưu tiên cao hơn.**

Nội dung nguồn không rõ hay mức tin cậy thấp thì nên **đi vào Context dưới dạng dữ liệu được trích dẫn**, với đánh dấu ranh giới rõ ràng. Với trang web bên ngoài, file người dùng upload và kết quả gọi, Agent có thể trích sự thật từ đó, **nhưng không được lấy các chỉ dẫn thao tác bên trong làm hành vi hệ thống.** Khi thực sự cần chuyển nội dung bên ngoài thành luật nội bộ, thì phải hình thành một version Prompt hay Skill ứng viên mới, qua thẩm định và phát hành rồi mới dùng.

Mô tả năng lực cũng phải nhất quán với uỷ quyền thực tế. **Model nhìn thấy một tool hay một Agent từ xa nhưng không có quyền gọi thì sẽ lập kế hoạch vô ích; còn runtime có năng lực mà Context không có mô tả tương ứng thì model lại không dùng đúng được.** Context Compiler phải sinh tập năng lực cuối cùng theo định danh, task, môi trường và trạng thái endpoint hiện tại, và ghi lại lý do các ứng viên bị loại.

### 15.9.3 Ngân sách token và lắp ráp tiệm tiến

**Context dài thêm không tất yếu mang lại kết quả task tốt hơn.** Quá nhiều luật, ví dụ và tài liệu sẽ phân tán sự chú ý của model, đồng thời tăng chi phí gọi và độ trễ phản hồi. Context Compiler nên phân bổ ngân sách cho từng nhóm nội dung trước, rồi mới chọn nội dung trong nhóm theo mức liên quan tới task và mức cần thiết.

Policy lõi và chỉ dẫn task hiện tại thường phải giữ trọn vẹn; Skill có thể giữ trước các bước thực thi và giới hạn cần thiết, rồi hoãn phần tài liệu tham chiếu khối lượng lớn tới bước liên quan; tài liệu truy hồi có thể giữ những mảnh liên quan nhất tới câu hỏi hiện tại kèm nguồn; còn lịch sử hội thoại và Memory thì tóm tắt hay đào thải theo giai đoạn task. Với phần giải thích nền bị nhiều tài nguyên lặp lại, **hãy khử trùng rồi giữ nguồn có thẩm quyền.**

**Tool Schema của MCP Server cũng có thể tiết lộ theo nhu cầu.** Khi Server cung cấp nhiều tool, hãy chọn một tập nhỏ hơn theo task, quyền và phân loại tool trước, rồi mới đưa Schema tương ứng cho model; khi cần mở rộng phạm vi chẩn đoán thì khám phá lại hay nạp thêm tool khác. Agent từ xa cũng có thể cung cấp bản tóm tắt năng lực trước, và chỉ sau khi xác định được đối tác cộng tác thì mới lấy AgentCard đầy đủ cùng thông tin endpoint.

Việc lắp ráp tiệm tiến có thể xuyên suốt task nhiều lượt. Giai đoạn đầu chỉ nạp danh mục năng lực và tool cần thiết; sau khi xác định hướng xử lý thì mới lấy các bước chi tiết của Skill tương ứng; và tới khâu phân tích dữ liệu mới đọc template tham chiếu. **Mỗi lần thêm nội dung đều phải qua cùng những phán định về version, quyền và ngân sách — không được vì vòng đầu đã qua kiểm tra mà cho phép các file sau vào Context không giới hạn.**

Khi nội dung vượt ngân sách, **chiến lược cắt bớt phải giải thích được.** Hệ thống có thể ghi lại mảnh nào được giữ, được tóm tắt hay bị bỏ, cùng độ ưu tiên và lý do tương ứng. **Những giới hạn quan trọng không được bị cắt chỉ vì nằm ở cuối một văn bản dài**; gói Skill có thể dùng Manifest để đánh dấu phần hướng dẫn an toàn buộc phải nạp trọn vẹn và phần tài liệu tham chiếu hoãn nạp được.

### 15.9.4 Tính nhất quán và xử lý ngoại lệ

Việc lắp ráp Context liên quan tới nhiều tài nguyên; khi một tài nguyên lấy thất bại thì **không được tuỳ tiện trộn version mới và cũ để chạy tiếp.** Ví dụ, Prompt mới phụ thuộc vào Schema output đã cập nhật, trong khi node vận hành vẫn cache Skill version cũ; khi đó việc lấy riêng Prompt mới nhất cùng Skill cũ **có thể rủi ro hơn việc dùng trọn tổ hợp đã kiểm chứng trước đó.**

Khi Agent Release hay task bắt đầu, có thể lưu tổ hợp tài nguyên đã kiểm chứng thành **Lock Manifest.** Khi phân giải online thành công thì dùng tổ hợp mới; còn khi một phần tài nguyên không khả dụng hay kiểm tra thất bại thì tuỳ policy mà lùi trọn về tổ hợp đã kiểm chứng trước đó, hoặc dừng task và nói rõ phụ thuộc còn thiếu. Với các năng lực đuôi dài độc lập và tuỳ chọn thì có thể chạy lại ARD; còn khi nhu cầu đã rõ là hướng tới một Agent từ xa thì cũng có thể dùng thẳng RAD để tìm ứng viên khác thoả cùng nhu cầu — **nhưng quá trình thay thế bắt buộc phải qua lại các phán định về version, quyền và rủi ro.**

MCP Server và Agent từ xa còn có tình huống **"version tài nguyên khả dụng nhưng endpoint cụ thể tạm thời không khả dụng".** Resolver phải phân biệt trạng thái version của nội dung hay định nghĩa năng lực với trạng thái sức khoẻ của endpoint vận hành: **sự cố endpoint không được sửa version lịch sử, và việc failover cũng không được lặng lẽ làm đổi định nghĩa năng lực.** Khi dùng endpoint dự phòng, phải tiếp tục thoả cùng yêu cầu về version, giao thức, môi trường và quyền hạn, và ghi lại đích kết nối thực tế.

Tính nhất quán version trong task dài thì giống như đã nói ở trên: trong một giai đoạn task rõ ràng thì giữ ổn định version tài nguyên; chỉ khi chuyển giai đoạn mới cho phép phân giải lại. Khi tài nguyên bị thu hồi khẩn cấp, runtime tuỳ mức rủi ro mà quyết định chấm dứt ngay, chặn lời gọi kế tiếp, hoặc dừng sau khi thao tác chỉ-đọc hiện tại kết thúc, và ghi kết quả xử lý vào Trace.

### 15.9.5 Context Manifest và việc phát lại quá trình chạy

Sau khi Context Compiler lắp ráp xong, nó nên sinh một **Context Manifest** cho lần gọi này. Đây **không phải một bản copy đơn giản của cả Context**, mà là một bản ghi có cấu trúc giúp định vị nguồn và khôi phục quá trình lắp ráp, thường gồm:

```yaml
agent_release: incident-assistant@4.2.0
model: model-x@2026-08
resources:
  prompt: ops/incident-diagnosis@3.1.2
  skills:
    - ops/log-analysis@2.4.0#sha256:...
  mcp:
    - ops/observability@1.8.0
  agents:
    - commerce/order-specialist@2.1.0
policy_version: production-policy@7
discovery_requests:
  - ard-request-8f21
  - rad-request-20c4
resolved_endpoints:
  - type: mcp
    resource: ops/observability@1.8.0
    endpoint_id: cn-hangzhou-prod-02
context_fingerprint: sha256:...
```

Ngoài version và digest, Manifest còn nên ghi tham chiếu đã được bảo vệ của snapshot biến, lý do khớp của ARD hay RAD, quyền thực sự được cấp, kết quả cắt bớt nội dung, trạng thái cache, việc chọn endpoint và thời điểm lắp ráp. Trace vận hành liên kết tới tài nguyên cụ thể qua Manifest, nhờ đó trả lời được **một lần chạy đã dùng gì, vì sao chọn những nội dung đó, và những ứng viên nào không được dùng vì lý do quyền hạn hay rủi ro.**

**Việc phát lại không bảo đảm model sinh ra kết quả giống từng chữ, nhưng phải dựng lại được điều kiện input lúc đó**, và phân biệt được thay đổi tài nguyên, thay đổi model, thay đổi endpoint và thay đổi dữ liệu bên ngoài. Với nội dung nhạy cảm không lưu lâu dài được, có thể lưu digest, tham chiếu truy cập và thời hạn lưu; khi phát lại mà dữ liệu gốc đã bị xoá theo quy định thì **phải nói rõ mục bị thiếu, không được lấy dữ liệu hiện tại thay cho input lịch sử.**

### 15.9.6 Ranh giới trách nhiệm giữa Nacos và Context Compiler

Nacos cung cấp cho runtime phần định danh tài nguyên, version chính xác, kết quả phân giải nhãn, trạng thái phát hành, nội dung hay thông tin endpoint; còn **Context Compiler thì quyết định những thông tin đó đi vào lời gọi model ra sao.** Prompt có nằm ở tầng policy hệ thống không, những file nào của Skill cần hoãn nạp, giữ lại bao nhiêu Tool Schema của MCP, và kết quả trả về của Agent từ xa được trích dẫn như dữ liệu ra sao — **tất cả thuộc trách nhiệm lắp ráp của Harness.**

Giữa hai bên có thể thiết lập một interface ổn định qua **Context Manifest.** Với mỗi tài nguyên Nacos, Manifest ít nhất ghi Namespace, loại tài nguyên, tên, version đã phân giải và digest cần thiết; còn MCP Server và Agent thì ghi thêm endpoint thực tế. Khi đường khám phá đến từ Nacos ARD hay RAD thì lưu thêm định danh request khám phá và lý do khớp chính. Nhờ vậy, **Trace phía model liên kết được với bản ghi phát hành phía tài nguyên.**

Khi nhãn, trạng thái online hay tập endpoint trong Nacos thay đổi, **Context Compiler không được lặng lẽ thay nội dung trong một lượt task đang chạy.** Runtime phải hoàn tất việc phân giải lại và kiểm chứng trước, rồi sinh Manifest mới ở ranh giới task hay giai đoạn. Nacos lọc ứng viên theo Namespace, khả năng nhìn thấy, trạng thái tài nguyên và luật quyền hạn; còn Harness thì vẫn phải kết hợp uỷ quyền task, tính tương thích giao thức và rủi ro vận hành để hoàn tất phán định trước khi gọi, và **bảo đảm Context thực sự dùng trong một lần chạy là rõ ràng, giải thích được và phát lại được.**

![ch15-06-context-assembly.png](../assets/imgs/chapter-15/image-006.png)

*Hình 15-6 — Luồng lắp ráp từ khám phá tài nguyên tới Context lúc chạy*

Tới đây, Prompt, Skill, MCP và Agent đã đi từ tài sản phát hành, qua phân giải khai báo hay khám phá động, vào một quá trình chạy truy nguyên được. Phần dưới lấy việc chẩn đoán sự cố production làm ví dụ, để minh hoạ những năng lực này phối hợp trong một luồng trọn vẹn ra sao, và đưa ra các chỉ số cùng lộ trình tiến hoá dùng được cho vận hành liên tục.

## 15.10 Case đầu-cuối, chỉ số vận hành và lộ trình tiến hoá

Các phần trước đã lần lượt bàn về mô hình hoá tài nguyên, phát hành version, thẩm định thay đổi, khám phá tài nguyên và lắp ráp Context. Hệ thống thật cần nối những khâu đó thành một đường **chạy được, quan sát được và cải tiến liên tục được.** Mục này lấy một Agent chẩn đoán sự cố production do Nacos Agentic Resource Registry chống đỡ làm ví dụ, để minh hoạ phụ thuộc cố định và năng lực động cùng hoàn thành task ra sao.

### 15.10.1 Bối cảnh và chuẩn bị tài nguyên

Một doanh nghiệp dùng Agent chẩn đoán sự cố để hỗ trợ nhân viên trực phân tích bất thường trên production, và lấy Nacos AI Registry làm Agentic Resource Registry thống nhất. Định danh, nguyên tắc xử lý cơ bản và các giới hạn thao tác rủi ro cao của Agent này tương đối ổn định, nên Prompt lõi, Skill phân cấp sự cố và MCP Server observability nền tảng được khai báo qua AgentSpec trong Nacos. Còn các luật log nghiệp vụ khác nhau, tri thức chuyên ngành và Agent cộng tác thì thay đổi khá nhanh, nên được khám phá theo task như các năng lực đuôi dài trong Nacos.

Trước khi tài nguyên vào phạm vi production, chúng phải hình thành version bất biến riêng. Prompt hoàn tất kiểm tra template và so sánh với bộ đánh giá; Skill hoàn tất kiểm chứng cấu trúc, phụ thuộc, an toàn và chạy cô lập; MCP Server hoàn tất kiểm chứng mô tả năng lực, tương thích giao thức và khả năng kết nối endpoint; còn Agent thì kiểm tra interface gọi có version, mô tả giao thức và yêu cầu vận hành. Prompt, Skill, MCP Server, Agent và AgentSpec đều có thể vào Pipeline phát hành Nacos với các node kiểm tra phù hợp cho từng loại; còn tỉ lệ thành công task, độ trễ và hiệu quả cộng tác của Agent thì do hệ đánh giá bên ngoài bù thêm và liên kết tới cùng version. **Chỉ những version thoả Namespace, phạm vi nhìn thấy và trạng thái online hiện tại mới được nhãn phân giải ra hay ARD trả về;** còn khi cần thông tin gọi Agent từ xa thì RAD còn kiểm chứng thêm điều kiện về version, giao thức và endpoint.

Sau một lần phát hành ứng dụng, độ trễ và tỉ lệ lỗi của interface đơn hàng cùng tăng. Nhân viên trực gửi cho Agent thời điểm bất thường, tên dịch vụ và hiện tượng chính, mong nhận được nguyên nhân khả dĩ, bằng chứng và gợi ý kiểm tra tiếp. Lúc này Agent đã có quy trình chẩn đoán cơ bản, **nhưng chưa biết dịch vụ đơn hàng dùng bộ luật log nào, và cũng chưa biết người dùng hiện tại có quyền truy cập thay đổi phát hành và giám sát production hay không.**

### 15.10.2 Từ lúc task vào tới lúc xuất kết quả

Toàn bộ quá trình thực thi có thể chia thành các bước sau:

| Giai đoạn | Xử lý chính | Bản ghi then chốt |
| --- | --- | --- |
| Nạp phụ thuộc ổn định | Agent khi khởi động lấy AgentSpec từ Nacos, phân giải Prompt lõi, Skill phân cấp sự cố và phụ thuộc MCP nền tảng, rồi kiểm chứng version, vòng đời và điều kiện môi trường | Lock Manifest nền |
| Hình thành nhu cầu năng lực | Trích dịch vụ, khoảng thời gian, loại bất thường và kết quả kỳ vọng từ request người dùng để hình thành Capability Requirement; còn đơn hàng cụ thể và nguyên văn log thì vẫn giữ trong môi trường task | Ý định gốc và nhu cầu năng lực có cấu trúc |
| Khám phá năng lực không cố định | Nacos ARD truy hồi trong phạm vi cho phép các Skill phân tích log đơn hàng, Prompt đối chiếu thay đổi phát hành, MCP Server observability và Agent lĩnh vực đơn hàng, và có thể tiếp tục lấy tài nguyên cụ thể | Ứng viên, version và căn cứ khớp chính |
| Phân giải Agent từ xa | Khi đã chọn Agent lĩnh vực đơn hàng và cần gọi từ xa, lấy version chính xác, mô tả native của giao thức và endpoint khả dụng qua RAD; khi không cần thông tin gọi từ xa thì tiếp tục dùng kết quả của ARD | Request RAD, snapshot giao thức và endpoint |
| Thực thi phán định quản trị | Nacos lọc ứng viên theo định danh nhân viên trực, Namespace production, uỷ quyền tài nguyên và trạng thái online; Runtime của task rồi kết hợp tương thích giao thức, mức rủi ro và quyền của task này để phán định trước khi gọi | Phán định tư cách và quyền thực sự được cấp |
| Phân giải version và endpoint | Nacos Client chuyển nhãn hay tham chiếu tài nguyên thành version chính xác, và chọn endpoint khả dụng thoả yêu cầu môi trường từ MCP Registry, Naming hay Agent Registry | Version chính xác, digest và endpoint thực tế |
| Lắp ráp và dùng năng lực | Context Compiler lắp ráp Prompt, các bước Skill, mô tả tool cần thiết và thông tin task theo độ ưu tiên; Agent dùng năng lực đã chọn qua MCP Router hay client native | Context Manifest và Trace lời gọi |
| Xuất kết quả và ghi chép | Liên kết thay đổi giám sát, bản ghi phát hành và bản ghi log hay tài liệu bằng chứng lại với nhau, rồi xuất kết quả chẩn đoán kèm phần nói rõ độ bất định | Version tài nguyên, lý do khám phá, phán định quyền, endpoint và kết quả cuối |

Trong luồng này, Nacos AI Registry lưu tài nguyên có thẩm quyền; Pipeline ràng buộc việc phát hành; ARD lo việc khám phá xuyên loại và lấy tài nguyên; RAD bù phần khám phá giao thức và endpoint cho Agent từ xa theo nhu cầu; Client và Router lo việc phân giải hay kết nối; Context Compiler lo việc lắp ráp; còn MCP Client và A2A Client thì lo việc tương tác thực tế. **Chỉ khi những ranh giới này rõ ràng, thì lúc có vấn đề ta mới phán định được đó là do ứng viên không chính xác, tài nguyên không khả dụng, phán định quyền không đúng, lắp ráp Context sai, hay lời gọi thực tế thất bại.**

### 15.10.3 Xử lý khi một Skill đã phát hành lộ ra rủi ro

Giả sử một version của Skill phân tích log đơn hàng về sau bị phát hiện là gửi dữ liệu mẫu tới một dịch vụ bên ngoài chưa khai báo. Sau khi nhân sự bảo mật xác nhận rủi ro dựa trên bản ghi vận hành, họ đưa version đó offline trong Nacos, và khi cần thì tắt luôn cả Skill. Truy vấn lúc chạy không còn trả nó về như một tài nguyên online; **ARD cũng phải loại version đó ra trong bước phán định tư cách của kết quả**; còn node vận hành thì theo policy rủi ro mà dừng việc nạp mới, dọn cache chờ dùng, và chấm dứt các task chưa thực thi request ra ngoài.

Bản ghi version và offline của Nacos xác định phạm vi tài nguyên cần điều tra; nền tảng Agent rồi dùng Lock Manifest, Context Manifest và Trace lịch sử để tìm các task đã dùng version đó theo cách cố định hay động. Việc kiểm tra có thể xác nhận những lần chạy nào từng có quyền mạng, có thực sự sinh request ra ngoài không, và trong request có chứa dữ liệu nhạy cảm không. Sau khi đội bảo trì sửa Skill, họ cho version mới đi lại qua Pipeline Nacos, kiểm chứng cô lập và thẩm định của con người; qua được rồi mới khôi phục nhãn và phạm vi khám phá tương ứng.

Quá trình này cho thấy: **thu hồi version không đơn thuần là xoá file.** Việc xử lý hiệu quả phụ thuộc vào digest nội dung xác định, bản ghi quyền vận hành, danh sách bên tiêu thụ và version thay thế được. **Thiếu bất kỳ mục nào, đội ngũ cũng khó phán định chính xác cần dừng những task nào và khôi phục dịch vụ ra sao.**

### 15.10.4 Chỉ số vận hành

Sau khi nền tảng được xây, cần dùng chỉ số để phán định xem nó có thực sự cải thiện chất lượng tài nguyên và việc vận hành Agent không. Các chỉ số có thể tổ chức theo năm mặt:

| Mặt | Chỉ số tiêu biểu | Câu hỏi chính nó trả lời |
| --- | --- | --- |
| Quản trị tài nguyên | Số tài nguyên không có người phụ trách, độ phủ của version đã phát hành, tỉ lệ trôi version, thời gian cần để khôi phục về version ổn định | Tài nguyên có người bảo trì không, việc dùng trên production có truy nguyên được không |
| Thẩm định thay đổi | Tỉ lệ qua kiểm tra tự động, tỉ lệ thoái hoá trên bộ đánh giá, thời lượng thẩm định của con người, tỉ lệ lùi sau phát hành | Thay đổi có phát hiện được vấn đề trước khi phát hành không, chi phí thẩm định có hợp lý không |
| Chất lượng khám phá | Tỉ lệ trúng Top-K, tỉ lệ không có kết quả, tỉ lệ ứng viên được dùng, tỉ lệ khớp nhầm, tỉ lệ lý do khám phá giải thích được | Agent có tìm được tài nguyên phù hợp và dùng được không |
| Hiệu suất vận hành | Độ trễ phân giải version, thời gian nạp nội dung, tỉ lệ chọn endpoint thành công, tỉ lệ cache hit, mức tiêu thụ token của Context, tỉ lệ lắp ráp thất bại | Việc quản lý tài nguyên có ảnh hưởng hiệu suất task online không |
| Quản trị an toàn | Số Skill bên ngoài chưa qua kiểm tra, số version rủi ro phát hiện được, số request ra ngoài có kiểm soát, số lần nạp mới của version đã thu hồi, thời gian hoàn tất xử lý | Năng lực bên ngoài có được dùng trong phạm vi xác định không, rủi ro có được giới hạn kịp thời không |

**Những chỉ số này phải được diễn giải kèm kết quả nghiệp vụ.** Tỉ lệ ứng viên được dùng cao chưa chắc nghĩa là chất lượng khám phá tốt — cũng có thể nghĩa là Agent luôn chấp nhận kết quả đầu tiên; còn số lần request ra ngoài bị giới hạn tăng lên thì có thể do rủi ro tăng, mà cũng có thể do diện kiểm soát mở rộng. Nền tảng nên quan sát đồng thời tỉ lệ thành công task, tỉ lệ con người sửa tay và loại bất thường, và phân tích nguyên nhân qua việc thẩm định theo mẫu.

Phản hồi vận hành giúp phát hiện Prompt diễn đạt không rõ, mô tả Skill không chính xác, Tool Schema của MCP khó hiểu hay AgentCard thiếu thuật ngữ nghiệp vụ, **nhưng không được sửa trực tiếp nội dung đã phát hành.** Gợi ý cải tiến trước hết hình thành version ứng viên, bổ sung test và phân tích ảnh hưởng, qua thẩm định rồi mới phát hành. Như vậy vừa tận dụng được dữ liệu vận hành để cải tiến liên tục, vừa giữ cho version online truy nguyên được.

### 15.10.5 Tiến hoá theo giai đoạn

Các tổ chức khác nhau có thể xây dựng dần theo số lượng Agent và mức rủi ro, **không cần đưa mọi component vào ngay từ đầu.**

| Giai đoạn | Đặc trưng chính | Trọng tâm bước tiếp theo |
| --- | --- | --- |
| L0 — Bảo trì phân tán | Prompt viết trong code; Skill, cấu hình MCP và thông tin Agent bảo trì rời rạc | Kiểm kê tài nguyên then chốt, xác định tên và người phụ trách |
| L1 — Lưu version | Dùng repository hay artifact repository để lưu nội dung, xem được lịch sử sửa | Phân biệt bản làm việc, version bất biến và version thực sự chạy |
| L2 — Registry thống nhất | Dùng Nacos AI Registry để thiết lập định danh ổn định, quyền, nhãn, vòng đời, phân giải lúc chạy và thông tin endpoint | Hoàn thiện Lock Manifest, tham chiếu ngược và phân tích ảnh hưởng xuyên tài nguyên |
| L3 — Đánh giá thống nhất và chuỗi cung ứng đáng tin | Nacos Pipeline tiếp nhận kiểm tra phát hành; tài nguyên bên ngoài qua xác minh nguồn, kiểm tra nội dung và chạy có giới hạn | Thiết lập kiểm tra liên tục, thông báo offline và xử lý ảnh hưởng |
| L4 — Khám phá động có kiểm soát | Dùng Nacos ARD để khám phá và lấy tài nguyên theo task, và dùng RAD theo nhu cầu trong bối cảnh Agent từ xa | Tối ưu truy hồi, phán định quản trị, việc chọn giao thức và endpoint cùng Context Manifest |
| L5 — Cải tiến liên tục | Đánh giá và phản hồi vận hành hình thành version ứng viên; hiệu quả phát hành đo được | Nâng chất lượng đánh giá tự động và khả năng nhân rộng xuyên môi trường |

**Tiêu chí phán định giữa các giai đoạn phải lấy năng lực thực tế làm chuẩn, chứ không phải việc đã triển khai một sản phẩm nào đó hay chưa.** Ví dụ, chỉ lập được danh sách tài nguyên nhưng vẫn cho phép ghi đè nội dung lịch sử thì **không được coi là đã xong L2**; còn triển khai truy hồi ngữ nghĩa mà không có lọc quyền và phân giải version chính xác thì cũng **không được coi là đã có khám phá động có kiểm soát.**

### 15.10.6 Thứ tự triển khai với Nacos và tóm tắt chương

Trong thực tế, có thể đưa vào Nacos trước một lượng nhỏ Prompt, Skill và MCP Server được nhiều Agent dùng chung và thay đổi khá thường xuyên, để thiết lập Namespace, version, nhãn, trạng thái online và bản ghi vận hành; đồng thời thiết lập mô tả lời gọi có version cùng việc đăng ký endpoint cho các Agent cộng tác được, và thiết lập AgentSpec cho các Agent cần phân phối chuẩn hoá. Sau đó bật Pipeline phát hành phù hợp cho từng loại tài nguyên, và đưa kết quả đánh giá, phân tích ảnh hưởng cùng cache cục bộ vào luồng bàn giao Agent. Các tổ chức có nhiều Skill bên ngoài nên ưu tiên thiết lập vùng tiếp nhận nội bộ và giới hạn quyền lúc chạy. **Chỉ sau khi tài nguyên có thẩm quyền, việc phân giải version và luật quản trị đã ổn định, mới mở rộng phạm vi khám phá động của ARD, và dùng RAD theo nhu cầu trong bối cảnh Agent từ xa.**

Quan điểm cốt lõi của chương này là: **Prompt, Skill, MCP và Agent không chỉ là cấu hình ở giai đoạn phát triển, mà là những phụ thuộc làm thay đổi hành vi và ranh giới năng lực của Agent ngay lúc chạy.** Chúng cần cách mô hình hoá nội dung và phương pháp kiểm chứng phù hợp với đặc điểm riêng, đồng thời dùng chung định danh ổn định, version, vòng đời, bản ghi phát hành và quản lý quyền. Agent ổn định có được phụ thuộc xác định qua tham chiếu khai báo; Agent động khám phá và lấy năng lực khả dụng theo task qua ARD; còn khi liên quan tới Agent từ xa thì dùng thêm RAD để lấy thông tin gọi. **Cả hai con đường cuối cùng đều phải phân giải ra version chính xác cùng endpoint cần thiết, lắp ráp Context cần dùng, và để lại một Manifest phát lại được.**

Với vai trò Agentic Resource Registry, Nacos đặt việc đăng ký tài nguyên, phát hành version, khám phá lúc chạy và thay đổi động trên cùng một hạ tầng; còn Agent Harness thì lo việc biến những tài nguyên đó thành một lần thực thi cụ thể. **Hai bên cùng tạo thành một quan hệ liên tục từ "tổ chức có những năng lực nào" tới "task lần này thực sự đã dùng gì".**

Khi tài nguyên, việc khám phá và bản ghi vận hành hình thành một quan hệ liên tục, đội ngũ mới trả lời chính xác được ba câu hỏi: **hiện có những năng lực đã được quản trị nào, vì sao một Agent nào đó chọn và dùng chúng, và khi nội dung hay instance vận hành thay đổi thì những task nào bị ảnh hưởng.** Đó cũng là giá trị kỹ thuật của việc Nacos đi từ nền tảng đăng ký – cấu hình microservice sang Agentic Resource Registry, và của việc chống đỡ cho Agent đi từ thí nghiệm cục bộ tới vận hành ở quy mô.
