# Khám phá nâng hiệu suất văn phòng của hãng kiểm toán ShineWing

## Một — Bối cảnh

ShineWing là một trong những hãng kiểm toán thành lập sớm nhất ở Trung Quốc, khởi nguồn từ năm 1981. Qua hơn 40 năm phát triển, ShineWing đã vận hành theo mô hình tập đoàn với bốn mảng nghiệp vụ song song là kiểm toán — chứng thực, tư vấn quản trị, dịch vụ thuế và quản lý công trình; đây là đơn vị khai phá và dẫn dắt trong lĩnh vực dịch vụ chuyên nghiệp ở Trung Quốc. ShineWing International hiện có 110 văn phòng tại 23 quốc gia và vùng lãnh thổ, với hơn 12.000 nhân viên, là thương hiệu dịch vụ chuyên nghiệp Trung Quốc vươn ra thế giới.

Những năm gần đây, cùng với sự phát triển nhanh của công nghệ trí tuệ nhân tạo, ShineWing liên tục đẩy việc xây dựng số hoá, thông minh hoá, tích cực khám phá việc hoà sâu công nghệ AI với các kịch bản dịch vụ chuyên nghiệp, quản lý nội bộ và cộng tác nhân viên, nhằm nâng liên tục hiệu suất tiếp cận tri thức, xử lý nghiệp vụ và ra quyết định quản trị.

Khi các kịch bản ứng dụng AI tăng dần, việc xây dựng AI cấp doanh nghiệp không còn giới hạn ở một trợ lý hỏi đáp đơn lẻ, mà còn phải giải quyết tiếp các vấn đề như cộng tác nhiều Agent, quản lý model thống nhất, kết nối hệ thống nghiệp vụ, kiểm soát bảo mật và quản trị chi phí. Vì vậy, ShineWing kết hợp đặc điểm nghiệp vụ và nền tảng số hoá của mình để hợp tác với Alibaba Cloud, đưa vào nền tảng quản trị và cộng tác đa Agent **AgentCore** cùng **AI Gateway**, để cùng đẩy việc xây dựng nền tảng AI đa Agent cấp doanh nghiệp.

![image.png](../../assets/imgs/chapter-28/image-004.png)

**Trung tâm năng lực AI của ShineWing**

## AgentCore và AI Gateway: xây nền cho ứng dụng AI cấp doanh nghiệp

Trong quá trình xây dựng dự án, ShineWing lo phần quy hoạch nghiệp vụ tổng thể, thiết kế kịch bản ứng dụng, gom hệ tri thức, tích hợp hệ thống nội bộ cùng việc phổ biến và vận hành; còn Alibaba Cloud cung cấp các sản phẩm nền tảng như AgentCore, AI Gateway cùng phần hỗ trợ kỹ thuật liên quan.

Hai bên triển khai xây dựng xoay quanh các nhu cầu cốt lõi như cộng tác đa Agent, quản trị model thống nhất, quản lý bảo mật và tích hợp hệ thống nghiệp vụ, rồi lần lượt hoàn tất việc kiểm chứng phương án kỹ thuật, cấu hình kịch bản ứng dụng, đấu nối hệ thống nội bộ và chuẩn bị lên production.

Ở giai đoạn then chốt khi dự án lên production, hai đội phối hợp chặt chẽ, dùng một tuần để hoàn tất việc tích hợp thử hệ thống, cấu hình môi trường, tích hợp ứng dụng, test tối ưu rồi chính thức lên production, nhanh chóng hình thành năng lực dịch vụ AI đa Agent hướng tới nhân viên nội bộ.

### Cộng tác đa Agent: để mỗi Agent lo đúng phần việc của mình

Dựa trên AgentCore, ShineWing xây các Agent AI hướng tới những kịch bản nghiệp vụ khác nhau, và dùng cách quản lý thống nhất, điều phối phối hợp để cung cấp dịch vụ thông minh tiện lợi hơn cho nhân viên.

Trong mô hình cộng tác đa Agent, nền tảng nhận diện được loại task từ câu hỏi nhân viên nêu ra, rồi phân các task khác nhau cho Agent chuyên trách tương ứng xử lý. Với các task phức tạp gồm nhiều bước, còn có một Agent quản lý thống nhất lo việc tách task và tổng hợp kết quả, hiện thực việc nhiều Agent phối hợp làm việc.

Qua mô hình này, ShineWing dần đưa được các ứng dụng AI ở những lĩnh vực, những năng lực khác nhau vào quản lý trên một nền tảng thống nhất — vừa giữ được năng lực của các Agent chuyên trách trong kịch bản riêng, vừa cung cấp cho nhân viên một lối vào thống nhất, tiện lợi.

### Quản lý thống nhất các tài sản AI như model, MCP và Skill

Khi số lượng ứng dụng AI tăng liên tục, việc quản lý thống nhất các tài sản AI như model, dịch vụ MCP, Skill và template Agent trở thành nền tảng quan trọng cho việc ứng dụng ở quy mô lớn trong doanh nghiệp.

Dựa trên AgentCore, ShineWing quản lý tập trung được các tài sản như model, MCP Server, Skill và template Agent, rồi cấu hình và phát xuống theo nhu cầu nghiệp vụ cùng yêu cầu quyền hạn của từng Agent.

Qua năng lực quản lý MCP Server, các hệ thống và interface dịch vụ sẵn có trong nội bộ doanh nghiệp dần chuyển thành những năng lực chuẩn mà Agent gọi được, khiến Agent không chỉ trả lời được câu hỏi mà còn tra cứu thông tin, gọi hệ thống và thực thi task được trong phạm vi được uỷ quyền.

Đồng thời, các Skill nội bộ doanh nghiệp được kết tinh, thẩm định và tái dùng một cách thống nhất, cung cấp phần chống đỡ năng lực nền cho việc nhanh chóng xây thêm nhiều Agent nghiệp vụ về sau.

### Kết hợp nghiệp vụ thực tế để xây nhiều loại Agent AI

Xoay quanh các nhu cầu tần suất cao của nhân viên và các kịch bản nghiệp vụ sẵn có, ShineWing đã dần xây nhiều loại Agent AI, gồm:

* **Agent hỏi đáp về quy chế và quy trình**

  Đấu nối với kho tri thức nội bộ của ShineWing, cung cấp dịch vụ tra cứu về quy chế, quy trình và các quy phạm quản lý nội bộ cho nhân viên. Nhân viên nêu câu hỏi nhanh bằng ngôn ngữ tự nhiên, giảm chi phí thời gian cho việc tự tìm tài liệu và hỏi han xuyên bộ phận như cách truyền thống.

* **Agent tích hợp OA**

  Kết nối với hệ thống văn phòng nội bộ, cung cấp các dịch vụ văn phòng như tra cứu giờ công, khai báo giờ công. Hoàn tất các thao tác liên quan bằng cách đối thoại giúp đơn giản hoá quy trình dùng hệ thống, nâng hiệu suất văn phòng hằng ngày.

* **Agent tra cứu thông tin doanh nghiệp**

  Tra cứu quanh các nội dung như thông tin cơ bản của doanh nghiệp, tình hình cổ đông, quan hệ liên kết và thông tin rủi ro, làm tham chiếu hỗ trợ cho nhân viên khi tìm hiểu khách hàng, lập dự án và phán đoán nghiệp vụ liên quan.

* **Agent xử lý tài liệu và hỗ trợ báo cáo**

  Hỗ trợ nhân viên hoàn tất việc tóm tắt tài liệu, chắt lọc vật liệu, sắp xếp nội dung và sinh khung báo cáo, giảm khối lượng việc xử lý văn bản lặp đi lặp lại.

Tương lai, ShineWing còn sẽ mở rộng dần thêm các Agent chuyên môn và quản trị khác theo nhu cầu nghiệp vụ thực tế.

### Lối vào thống nhất: từ nhiều Agent tới dịch vụ phối hợp

Các loại Agent tích hợp vào nền tảng ứng dụng nội bộ của ShineWing theo kiểu dịch vụ hoá, và nhân viên truy cập các năng lực AI khác nhau qua một lối vào thống nhất.

Khi số Agent tăng lên, nền tảng còn dùng Agent quản lý để điều phối thống nhất nhiều Agent chuyên trách. Nhân viên không cần phán đoán từng cái xem nên dùng Agent nào, mà chỉ cần mô tả nhu cầu của mình, rồi nền tảng tự nhận diện loại task và phân task cho Agent phù hợp hoàn thành.

Mô hình này vừa giữ được năng lực của các Agent chuyên trách, vừa nâng trải nghiệm sử dụng tổng thể, đặt nền cho việc tương lai đi từ "tra cứu thông tin" tiến tới "thực thi task".

### AI Gateway: trung tâm quản lý thống nhất và bảo mật cho việc gọi model

Ở tầng gọi model, ShineWing tích hợp và quản lý thống nhất các dịch vụ model lớn qua AI Gateway của Alibaba Cloud.

AI Gateway, với tư cách lối vào thống nhất cho việc gọi model, quản lý tập trung được các dịch vụ model khác nhau, đồng thời cung cấp các năng lực giám sát lời gọi, xác thực và phân quyền, kiểm soát lưu lượng và phân tích chi phí.

**Điều phối nhiều model bảo đảm dịch vụ ổn định.** Tuỳ đặc điểm task của từng kịch bản, nền tảng chọn được model phù hợp để phục vụ. Khi model chính bị trễ hay bất thường thì chuyển sang model dự phòng theo chính sách đặt trước, nâng tính liên tục và ổn định của dịch vụ AI.

**Thống kê chi tiết chống đỡ việc quản trị chi phí.** Nền tảng thống kê được lượng lời gọi và mức dùng Token theo từng bộ phận, từng Agent và từng model, cung cấp dữ liệu chống đỡ cho việc phân bổ tài nguyên, phân tích sử dụng và quản lý ngân sách về sau.

**Xác thực thống nhất hiện thực việc kiểm soát quyền hạn.** Theo trách nhiệm nghiệp vụ của từng Agent, nền tảng cấu hình được các quyền truy cập model và chính sách gọi khác nhau, tránh việc Agent gọi các năng lực vượt phạm vi.

**Phòng thủ bảo mật giảm rủi ro dữ liệu.** Trong quá trình request và trả về, có thể kết hợp các cơ chế nhận diện thông tin nhạy cảm, kiểm tra an toàn nội dung và kiểm soát truy cập để phòng thủ thống nhất cho chuỗi gọi model, giảm rủi ro bảo mật với dữ liệu doanh nghiệp trong quá trình dùng AI.

### Quan sát được toàn trình, chống đỡ việc quản trị AI cấp doanh nghiệp

Các tổ chức dịch vụ chuyên nghiệp có yêu cầu khá cao về an toàn thông tin, bảo vệ dữ liệu và tuân thủ nghiệp vụ. Trong quá trình đẩy các ứng dụng AI, ShineWing luôn lấy **an toàn, kiểm soát được và truy vết được** làm nguyên tắc quan trọng.

Qua AgentCore và AI Gateway, nền tảng giám sát và phân tích thống nhất được quá trình gọi Agent, tình hình dùng model, bản ghi thực thi task và các trường hợp bất thường.

Với việc nhân viên vào thời điểm nào, qua Agent nào, đã gọi những năng lực nào và hoàn tất những thao tác nào, hệ thống hình thành được bản ghi lời gọi và bản ghi kiểm toán tương ứng, làm căn cứ cho việc truy nguyên vấn đề, quản lý bảo mật và quản trị nội bộ về sau.

Đồng thời, nền tảng dùng các cơ chế xác thực danh tính thống nhất, kiểm soát quyền hạn, quản lý thông tin xác thực và cô lập tài nguyên để bảo đảm Agent chỉ gọi hệ thống và dữ liệu doanh nghiệp trong phạm vi được uỷ quyền.

## Thành quả triển khai

### Hình thành một lối vào dịch vụ AI thống nhất của doanh nghiệp

Sau khi nền tảng lên production, ShineWing bước đầu hình thành được một lối vào dịch vụ AI thống nhất của doanh nghiệp, giúp nhân viên lấy tri thức, tra thông tin và dùng các năng lực nghiệp vụ liên quan bằng cách đối thoại.

So với cách dùng menu hệ thống và tra cứu tài liệu truyền thống, tương tác kiểu đối thoại hạ ngưỡng để nhân viên dùng AI và các hệ thống nội bộ, đồng thời khiến dịch vụ tri thức và một phần việc văn phòng tiện hơn.

Quan trọng hơn, qua năng lực quản lý Agent thống nhất và AI Gateway, ShineWing dần thiết lập được một nền kỹ thuật thống nhất cho các ứng dụng AI cấp doanh nghiệp, giúp các Agent và kịch bản nghiệp vụ thêm mới về sau được xây, tích hợp và quản trị theo một chuẩn tương đối thống nhất.

### Từ trợ lý hỏi đáp tới thực thi task

Hiện tại, các ứng dụng AI của ShineWing đang dần phát triển từ hỏi đáp tri thức và tra cứu thông tin sang hướng cộng tác nghiệp vụ và thực thi task.

Tương lai, ShineWing sẽ tiếp tục kết hợp nhu cầu dịch vụ chuyên nghiệp và quản lý nội bộ để khám phá thêm nhiều kịch bản ứng dụng AI, gồm dịch vụ quy chế — quy trình, phân tích dữ liệu kinh doanh, cộng tác task xuyên hệ thống, hỗ trợ quản lý dự án và hỗ trợ nghiệp vụ chuyên môn.

Khi các hệ thống nội bộ dần mở năng lực chuẩn hoá cho Agent qua MCP và các cách tương tự, tương lai nhân viên chỉ cần mô tả nhu cầu bằng ngôn ngữ tự nhiên, rồi AI tự hoàn tất việc tra cứu thông tin, tách task, gọi hệ thống và phản hồi kết quả — đẩy AI doanh nghiệp từ "trả lời câu hỏi" tiến thêm tới "hoàn thành công việc".

## Lời cuối

Việc doanh nghiệp triển khai AI Agent, mấu chốt không chỉ nằm ở năng lực model, mà còn ở chỗ tổ chức thống nhất được các Agent, model, tri thức, hệ thống và tool khác nhau, rồi phục vụ nghiệp vụ thật trên tiền đề bảo mật, tuân thủ và chi phí kiểm soát được.

Trong lần hợp tác này, ShineWing kết hợp kịch bản dịch vụ chuyên nghiệp và nền tảng xây dựng số hoá của mình để hoàn tất việc quy hoạch nghiệp vụ, thiết kế kịch bản, tích hợp hệ thống và triển khai ứng dụng nội bộ; còn Alibaba Cloud thì qua AgentCore và AI Gateway mà cung cấp phần chống đỡ kỹ thuật về cộng tác đa Agent, quản lý tài sản AI, quản trị model và kiểm soát bảo mật.

Ở giai đoạn then chốt khi dự án lên production, hai bên phối hợp chặt chẽ, dùng một tuần để hoàn tất việc tích hợp thử hệ thống, test tối ưu và chính thức lên production, hình thành năng lực dịch vụ AI đa Agent cấp doanh nghiệp hướng tới nhân viên nội bộ.

Đây không chỉ là một lần thực hành xây nền tảng AI, mà còn cung cấp kinh nghiệm thực tiễn tham khảo được cho câu hỏi các tổ chức dịch vụ chuyên nghiệp lớn nên đẩy việc ứng dụng đa Agent, quản trị AI thống nhất và hoà trộn với hệ thống nghiệp vụ ra sao.
