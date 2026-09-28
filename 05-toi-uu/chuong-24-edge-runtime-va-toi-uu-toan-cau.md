# Chương 24 — Edge Runtime của Agent và tối ưu toàn cầu

Sau khi Agent đạt chuẩn production trong phạm vi Region nhờ đánh giá, mô phỏng và tối ưu liên tục, việc triển khai toàn cầu mang tới một chiều tối ưu mới: người dùng phân bố khắp thế giới, traffic đi vào từ edge, mối đe doạ phát động ở edge, và nội dung cần được thích ứng ngay tại edge. Hệ tối ưu đã chín trong Region có thể mở rộng tiếp tới những kịch bản đó, đưa năng lực tối ưu từ Region ra tới nơi gần người dùng nhất. Trong kiến trúc tham chiếu của Agentic Application, component Runtime phủ phần hạ tầng thực thi trong Region — tài nguyên tính toán, mạng, lưu trữ và cô lập sandbox. Chương này kéo dài Runtime ra edge toàn cầu, đưa vào chiều tối ưu edge, phủ nốt "một dặm cuối" từ Agent tới người dùng. Các năng lực tối ưu edge mô tả trong chương này được hạ tầng của nền tảng **Alibaba Cloud ESA (Edge Security Acceleration)** chống đỡ — ESA vận hành hơn 3200 edge node trên toàn cầu, phủ phần tiếp cận người dùng ở các quốc gia và khu vực chính, với năng lực tích hợp gồm tiếp cận gần nhất, tính toán tại edge và phòng thủ bảo mật, nên là vật mang tự nhiên để kéo hệ tối ưu từ Region ra edge.

## 24.1 Chiều tối ưu edge trong kịch bản toàn cầu hoá

### Bốn hướng tối ưu edge

* **Độ trễ bất đối xứng:** Độ trễ đầu-cuối của Agent tách được thành bảy yếu tố: xếp hàng, chuẩn bị môi trường, suy luận model, gọi tool, truyền mạng, thực thi sandbox và chờ con người. Sáu yếu tố trong đó phát sinh bên trong Region, chỉ có phần truyền mạng là do khoảng cách vật lý quyết định. Một Agent triển khai ở một Region nào đó, khi phục vụ suy luận cho người dùng xuyên đại dương, thì phần truyền mạng có thể chiếm hơn 40% trong độ trễ token đầu (TTFT) (giả định của kịch bản ví dụ, cần doanh nghiệp hiệu chỉnh theo baseline của mình) — model suy luận có nhanh tới đâu cũng không bù được nút thắt vật lý này. Tối ưu edge nhắm trúng yếu tố truyền mạng, bổ sung phần quan sát độ trễ đầu-cuối ở hai tầng: tiếp cận gần nhất trên toàn cầu và tăng tốc truyền dẫn.

* **Chi phí không minh bạch:** Chi phí Token, chi phí băng thông về nguồn và chi phí request ở edge của Agent nằm rải trong các hệ tính giá khác nhau. Không có phần đo lường thống nhất và tối ưu cache ở tầng edge, doanh nghiệp rất khó biết chi phí đầu-cuối thật của một lời gọi Agent, và cũng không giảm được mức tiêu Token của phần suy luận lặp bằng các biện pháp như semantic cache.

* **Bảo mật đẩy lên trước:** Red team testing và quản trị bảo mật đã dựng cho Agent một hệ đánh giá bảo mật hoàn chỉnh trong Region. Bảo mật edge trên nền đó đẩy tuyến phòng thủ lên trước thêm một bước — tấn công DDoS bị hấp thụ và làm sạch ở edge, Bot crawler bị nhận diện và chặn ở edge, còn Prompt Injection thì được nhận diện và sàng sơ bộ trước khi tới Region (các tấn công tầng sâu như tiêm gián tiếp thì vẫn cần Region kết hợp trọn context để phát hiện) — nhờ đó bảo mật dời từ lối vào Region ra tới biên mạng.

* **Thích ứng nội dung:** Hệ quản trị kỹ thuật đã dựng cho Prompt/Skill/Context một quy trình quản lý version và phát hành hoàn chỉnh. Việc phân phối nội dung ở edge trên nền đó tối ưu thêm — phần lớn nội dung Web bên ngoài mà Agent tiêu thụ sẽ được chuyển đổi định dạng ngay tại edge node, ví dụ HTML sang Markdown (năng lực ESA đã phát hành), để Agent lấy thẳng được dạng tiêu thụ được từ chính URL gốc, giảm độ trễ và mức tiêu Token cho việc xử lý lần hai.

### Phân công giữa tối ưu ở cloud trung tâm và tối ưu ở edge

Tối ưu ở mức Region và tối ưu ở edge giải quyết những vấn đề ở tầng khác nhau, và hai bên cộng tác theo tầng:

| Chiều | Tối ưu mức Region | Tối ưu edge (chương này) |
| --- | --- | --- |
| Tính đúng đắn | Task của Agent có hoàn thành không, kết quả có đúng không | — |
| Độ trễ | Độ trễ suy luận model, độ trễ gọi tool | Độ trễ truyền mạng, tiếp cận gần nhất trên toàn cầu |
| Chi phí | Đơn giá Token, chi phí định tuyến model | Cache cho phần suy luận lặp, băng thông về nguồn |
| Bảo mật | Bảo mật hành vi Agent, kiểm soát truy cập dữ liệu | Chặn mối đe doạ trước khi request tới Region |
| Nội dung | Quản lý version của Prompt/Skill/Context | Chuyển đổi và phân phối nội dung bên ngoài tại edge |
| Trải nghiệm | Mức hoàn thành task, chất lượng kết quả | Trải nghiệm nhất quán toàn cầu, thích ứng theo khu vực |

Nguyên tắc phân công là: **thứ gì edge xử lý được (cache trúng, chặn bảo mật, định tuyến gần nhất) thì không về nguồn Region; thứ gì edge xử lý không được (suy luận phức tạp, thay đổi trạng thái, thực thi task dài) thì mới vào Region.** Việc phán định "xử lý được" không thể chỉ nhìn năng lực tính toán, mà còn phải nhìn tính thẩm quyền của sự thật, danh tính và quyền hạn, tác dụng phụ ghi, nơi lưu trú dữ liệu và ngữ nghĩa khôi phục sau sự cố; chỉ những request không cần phán định trạng thái thẩm quyền, không cần tác dụng phụ ghi, và thoả yêu cầu lưu trú dữ liệu thì mới hợp để hoàn tất ngay tại edge; còn các thao tác liên quan tới tính nhất quán, thứ tự và ngữ nghĩa khôi phục thì bắt buộc phải quay về Region thực thi.

## 24.2 Đánh giá ở edge: đo chất lượng bàn giao toàn cầu của Agent

Hệ đánh giá trong Region đã dựng được một khung hoàn chỉnh: đánh giá chất lượng câu trả lời, đánh giá trajectory, đánh giá tool, kiểm chứng trạng thái task. Đánh giá ở edge mở rộng tiếp trên nền đó — đưa chất lượng bàn giao thực tế cho người dùng toàn cầu vào hệ đánh giá. Cùng một Agent, khi phục vụ người dùng Tokyo thì TTFT có thể là 200ms, còn với người dùng São Paulo thì có thể là 1200ms (giả định của kịch bản ví dụ, cần doanh nghiệp hiệu chỉnh theo baseline); khác biệt trải nghiệm toàn cầu như vậy cần các chỉ số đánh giá ở chiều edge để đo.

### Hệ chỉ số đánh giá ở edge

Các chỉ số đánh giá ở edge mở rộng hệ đánh giá trong Region theo bốn chiều. **Chiều hiệu năng** quan tâm TTFT (P50/P95/P99) ở từng khu vực trên toàn cầu, độ trễ truyền từ edge tới Region và thời gian thiết lập kết nối dài — đây là phần kéo dài trực tiếp của chỉ số độ trễ theo chiều không gian. **Chiều chi phí** theo dõi chi phí lời gọi đầu-cuối (Token + băng thông + phí request ở edge), lượng tiết kiệm nhờ semantic cache và tỉ trọng traffic về nguồn, giúp doanh nghiệp nhận thức trọn vẹn chi phí thật của cả chuỗi cho mỗi lời gọi Agent. **Chiều bảo mật** đo tỉ lệ chặn ở edge, lượng DDoS hấp thụ, tỉ lệ phát hiện Prompt Injection và độ chính xác nhận diện Bot, phản ánh hiệu quả của việc đẩy tuyến phòng thủ lên trước. **Chiều trải nghiệm** thì đo mức bình đẳng về trải nghiệm của người dùng toàn cầu qua điểm nhất quán trải nghiệm theo khu vực, tính trọn vẹn của output dạng stream và tỉ lệ khôi phục thành công sau khi đứt kết nối.

### Dữ liệu đánh giá edge chảy ngược về

Dữ liệu chỉ số sinh ra từ việc đánh giá ở edge chảy ngược về hệ đánh giá trong Region qua một data pipeline thống nhất, hợp với dữ liệu đánh giá trong Region để tạo thành "báo cáo chất lượng bàn giao toàn cầu" của Agent. Baseline điều kiện vào cho Agent Release nên gồm đồng thời chỉ số trong Region và chỉ số ở edge — một version nếu chưa đạt chuẩn về độ trễ P95 toàn cầu thì dù mọi phần đánh giá trong Region đều qua cũng không nên được phát hành.

## 24.3 Tối ưu hiệu năng và chi phí ở edge

### Tiếp cận gần nhất toàn cầu và định tuyến thông minh

Phần tiếp cận Anycast toàn cầu của ESA khiến request người dùng được định tuyến tới edge node gần nhất, giảm độ trễ chặng đầu. Các edge node của ESA nối nhau qua mạng backbone, và thuật toán định tuyến thông minh chọn đường tối ưu theo tình trạng mạng thời gian thực. Với kịch bản Agent, việc tối ưu kết nối dài (tái dùng connection pool, tinh chỉnh tham số cửa sổ đầu) và chiến lược đệm (định tuyến bất đồng bộ, chuyển tiếp dạng stream) đặc biệt quan trọng để giảm TTFT. Khi hệ thống Agent triển khai ở nhiều Region, edge gateway chọn động Region đích theo độ trễ, chi phí, tuân thủ và tải hiện tại.

### Tối ưu truyền dẫn cho suy luận AI

Request suy luận của Agent có đặc điểm kết nối dài, output dạng stream và payload lớn. Edge node tối ưu có trọng tâm ở bốn tầng: tinh chỉnh cửa sổ đầu và tham số theo khu vực ở tầng giao thức; tái dùng connection pool kết nối dài; đệm và định tuyến bất đồng bộ để giảm việc chờ về nguồn; và chọn đường qua kênh riêng theo DSCP (Differentiated Services Code Point — đánh dấu mức ưu tiên của gói IP) để bảo đảm chất lượng truyền cho traffic ưu tiên cao.

### Semantic cache và giảm tải về nguồn

Phần lớn request của Agent có tính tương tự về ngữ nghĩa — những người dùng khác nhau hỏi những câu gần giống nhau, cùng một người dùng lặp lại truy vấn tương tự ở các thời điểm khác nhau. **Semantic cache** lưu phần tóm tắt và đáp án của các kết quả suy luận đã có tại edge node; khi độ tương tự ngữ nghĩa giữa request mới và mục cache vượt ngưỡng thì trả thẳng kết quả cache, tiết kiệm mức tiêu Token. Semantic cache nên giới hạn trong phạm vi các request công khai, idempotent và rủi ro thấp, đồng thời đưa tenant, miền quyền hạn, khu vực, model, Prompt và version tri thức vào khoá cache, và định nghĩa TTL (Time To Live — thời gian sống), cách vô hiệu hoá, dấu nguồn cùng chính sách về nguồn — để tránh rò rỉ xuyên tenant, vượt quyền, version cũ và việc trúng nhầm các đáp án cá nhân hoá. Ở các kịch bản truy vấn tần suất cao, cache ở edge giảm tải được đáng kể traffic về nguồn, tương ứng với một mức tiết kiệm chi phí Token đáng kể.

**Chỉ số đánh giá chi phí:** lượng Token tiết kiệm (số Token tiết kiệm được nhờ cache trúng), tỉ lệ giảm băng thông về nguồn, mức thay đổi chi phí lời gọi đầu-cuối, và xu thế thay đổi của tỉ lệ cache trúng theo thời gian.

## 24.4 Dữ liệu edge dẫn dắt việc tối ưu liên tục

Sau khi Agent lên production, quá trình sử dụng thật của người dùng toàn cầu là một nguồn dữ liệu quan trọng cho việc tối ưu liên tục.

Edge node của ESA nằm ở chặng đầu tiên mà người dùng truy cập, nên quan sát trực tiếp được khu vực của người dùng, tình trạng mạng, độ trễ truy cập, tình hình cache trúng và rủi ro bảo mật. Những dữ liệu quan sát ở edge này cung cấp cho nền tảng Agent một nguồn tín hiệu thật, phân bố toàn cầu để tối ưu liên tục — log vận hành trong Region ghi lại model đã sinh ra gì, gọi tool nào, trả về kết quả gì; còn dữ liệu edge thì bổ sung phần môi trường bên ngoài lúc request xảy ra. Kết hợp hai loại dữ liệu, nền tảng Agent không chỉ nhìn thấy vấn đề mà còn phán định được vấn đề có khả năng đến từ chỉ thị của model (Prompt), năng lực tool (Skill), định tuyến mạng, cache hay chính sách bảo mật.

### Dữ liệu edge cung cấp gì cho việc tối ưu

Edge node của ESA liên tục thu thập được dữ liệu vận hành ở các khu vực toàn cầu, để nền tảng Agent dùng vào việc phát hiện cơ hội tối ưu. Cùng một Agent, ở các khu vực, mạng và nhóm người dùng khác nhau, có thể cho hiệu quả vận hành hoàn toàn khác nhau. Dữ liệu edge phơi những khác biệt đó ra, giúp nền tảng Agent nhận ra các kiểu vấn đề lặp lại.

| Hiện tượng quan sát được từ dữ liệu edge | Có thể nói lên vấn đề gì | Nền tảng Agent có thể tối ưu ra sao |
| --- | --- | --- |
| Một số khu vực phản hồi chậm hơn hẳn | Node dịch vụ hiện tại không phải lựa chọn tối ưu ở bản địa | Chỉnh phần định tuyến model và dịch vụ |
| Một tool chỉ timeout thường xuyên ở một số khu vực | Khả năng tiếp cận tool hay liên kết mạng có khác biệt theo khu vực | Chỉnh định tuyến tool, chính sách timeout và retry |
| Tỉ lệ cache trúng thấp hẳn ở vài khu vực | Chiến lược cache không khớp với kiểu request ở khu vực đó | Chỉnh khoá cache và chính sách TTL |
| Kiểu đe doạ bảo mật mới bị chặn ở nhiều node | Cách tấn công đã thay đổi, luật phòng thủ cần cập nhật | Cập nhật chính sách bảo mật và luật chặn |
| Tỉ trọng traffic về nguồn liên tục cao | Chiến lược cache hay cấu hình định tuyến chưa giảm tải hữu hiệu | Chỉnh chiến lược cache và luật về nguồn |

Từng hiện tượng này nhìn riêng lẻ thì chỉ là bản ghi vận hành; phải qua tổng hợp và phân tích liên kết thì mới thành căn cứ để tối ưu. Chẳng hạn, một tool thất bại ở nhiều khu vực thì vấn đề có thể nằm ở chính Skill; còn nếu chỉ thất bại ở một khu vực thì nhiều khả năng là vấn đề mạng hay định tuyến dịch vụ. Cái trước cần sửa Skill, cái sau thì phải chỉnh chiến lược định tuyến ở tầng orchestration vận hành (Harness). Dữ liệu edge giúp nền tảng Agent tránh kiểu quy kết sai "thấy thất bại là sửa Prompt".

### Phân công giữa ESA và nền tảng Agent trong vòng khép kín tối ưu

Vòng khép kín tự tiến hoá có kiểm soát (ghi nhận, phân tích, sửa, kiểm chứng, chảy ngược) do nền tảng Agent và đội ngũ cùng hoàn thành; vai trò của ESA là cung cấp dữ liệu quan sát ở edge:

**ESA cung cấp:**

Dữ liệu Trace ở edge: độ trễ request, cache trúng, chặn bảo mật cùng các quan sát ở tầng hạ tầng.

Dữ liệu phân hoá theo chiều khu vực toàn cầu: phân bố độ trễ, tình trạng mạng, kiểu đe doạ ở các khu vực khác nhau.

Quản lý version và phát hành canary: hỗ trợ nền tảng Agent kiểm chứng chính sách mới một cách có kiểm soát ở phía edge.

**Nền tảng Agent hoàn thành:**

Phân tích: liên kết Trace ở edge với output model, kết quả gọi tool, tình hình hoàn thành task trong Region để phán định vấn đề đến từ khâu nào.

Sửa: đội ngũ dựa trên kết quả phân tích mà sinh ra chiến lược tối ưu, ví dụ sửa Prompt, cập nhật Skill, chỉnh định tuyến model hay chiến lược cache.

Kiểm chứng: canary phạm vi nhỏ để kiểm hiệu quả của Patch, quan sát tỉ lệ thành công task, chất lượng phản hồi, độ trễ, chi phí và các chỉ số bảo mật.

Chảy ngược: kết quả kiểm chứng đi vào vòng tối ưu kế tiếp, tạo thành vòng khép kín cải tiến liên tục.

Lấy việc tool timeout theo khu vực làm ví dụ: dữ liệu edge của ESA phát hiện số lời gọi tool thất bại ở một khu vực tăng rõ rệt; nền tảng Agent so sánh với các khu vực khác, xác nhận model và Skill không đổi, vấn đề tập trung ở liên kết mạng; nền tảng Agent theo đó sinh ra một Patch chiến lược định tuyến, dùng môi trường canary của phần quản lý version ESA để kiểm chứng trên một phần nhỏ traffic ở khu vực đó, phán định qua tỉ lệ gọi thành công và độ trễ xem có cải thiện không, rồi mới quyết định có mở rộng phạm vi không.

Chữ "tự tiến hoá" ở đây nghĩa là nền tảng hỗ trợ phân tích dữ liệu, đội ngũ sinh ra chiến lược ứng viên, và phải qua kiểm tra theo luật, soát bởi con người hay đánh giá tự động rồi mới phát hành canary. Dữ liệu gốc còn phải tuân thủ các yêu cầu thu thập tối thiểu, ẩn danh hoá, kiểm soát truy cập và tuân thủ xuyên khu vực, để bảo đảm năng lực tối ưu dựng trên nền sử dụng dữ liệu quản trị được.

### Từ năng lực thống nhất tới tối ưu phân hoá toàn cầu

Chất lượng mạng, model khả dụng, dịch vụ tool, thói quen người dùng, rủi ro bảo mật và yêu cầu tuân thủ ở mỗi khu vực đều khác nhau; cấu hình thống nhất tuy tiện quản lý nhưng rất khó đạt hiệu quả tối ưu đồng thời ở mọi khu vực.

Cách hợp lý hơn là dùng **"baseline thống nhất toàn cầu + chính sách tự thích ứng theo khu vực"**. Prompt, Skill lõi và các luật bảo mật nền thì quản trị thống nhất toàn cầu, bảo đảm năng lực cơ bản và hành vi của Agent nhất quán; còn định tuyến model, node dịch vụ, cache, luật bảo mật và chiến lược gọi tool thì chỉnh được theo traffic thật của từng khu vực.

Edge node của ESA liên tục cung cấp dữ liệu vận hành của từng khu vực, còn nền tảng Agent thì hỗ trợ đội ngũ hoàn thành việc so sánh xuyên khu vực, định vị vấn đề và phán định hướng tối ưu. Nhờ vậy vừa tránh được việc các khu vực tiến hoá độc lập gây phân mảnh năng lực, vừa giúp Agent thích ứng với môi trường vận hành thực tế của các thị trường khác nhau.

## 24.5 Phân phối nội dung ở edge: đưa Skill/Context tới edge toàn cầu

Quản trị kỹ thuật trong Region đã dựng được phần quản lý version, soát thay đổi và quy trình phát hành cho Prompt/Skill/Context. Trên nền đó, việc phân phối nội dung ở edge giải quyết thêm bài toán phân phối trong kịch bản toàn cầu hoá — khi Agent chạy ở nhiều Region hay nhiều edge node trên toàn cầu, version của các tài sản năng lực cần nhất quán ở mọi điểm thực thi. Nếu một edge node đang chạy Skill v1.2 mà trong Region đã là v1.3, thì sẽ sinh ra hành vi bất nhất và lệch trong đánh giá.

### Đồng bộ version ở edge và đọc gần nhất

Sau khi Prompt/Skill/Context được phát hành, chúng được đồng bộ tới các điểm thực thi ở edge qua cơ chế phân phối toàn cầu (năng lực do doanh nghiệp tự xây, hiện thực được trên nền tính toán edge của ESA). Agent khi thực thi ở edge thì đọc các tài sản này ở nơi gần nhất, giảm độ trễ về nguồn. Việc đồng bộ version cần liên động với quy trình soát thay đổi — mỗi lần phát hành Skill thì kích hoạt việc làm mới cache ở edge, và dùng phép ghim version cùng giao thức kích hoạt để nói rõ version đang có hiệu lực ở từng điểm thực thi, tránh trôi version khi ghi đồng thời hay khi mất mạng và phải hạ cấp.

### Thích ứng theo khu vực

Agent ở các khu vực khác nhau có thể cần chiến lược Context phân hoá — thiên hướng ngôn ngữ, yêu cầu tuân thủ và kho tri thức bản địa khác nhau theo vùng. Ở đây cần phân biệt hai loại "nhất quán": **luật quản trị thì nhất quán toàn cầu** (quản lý version, soát thay đổi, quy trình phát hành thống nhất), còn **phân bố dữ liệu thì phân hoá theo yêu cầu lưu trú** (phân loại phân cấp, ẩn danh, uỷ quyền, lưu trú, lưu giữ và cơ chế xoá thì thực thi theo tuân thủ của từng khu vực). Phân phối ở edge hỗ trợ cấu hình các biến thể Context theo khu vực, hiện thực việc thích ứng theo vùng trên nền các luật quản trị thống nhất.

### Chuyển đổi nội dung thân thiện với Agent

Agent cần tiêu thụ một lượng lớn nội dung Web làm context. Mạng edge truyền thống trả nội dung về ở dạng HTML gốc, nên Agent nhận rồi còn phải phân giải và cấu trúc hoá. Edge node hoàn tất việc chuyển đổi định dạng trước khi nội dung tới Agent — chuyển HTML sang Markdown là năng lực ESA đã phát hành, còn phần sinh tóm tắt và đánh chỉ mục vector thì có thể coi là phần hiện thực tham chiếu cho doanh nghiệp — nhờ đó Agent lấy thẳng được dạng tiêu thụ được từ chính URL gốc, giảm độ trễ xử lý lần hai và mức tiêu Token.

### WebMCP: website chính là MCP Server

WebMCP là một công nghệ đang ở giai đoạn đề xuất sớm và thử nghiệm trên trình duyệt, cho phép website chủ động phơi bày các tool MCP gọi được cho Agent: website đăng ký tool qua JavaScript API hay HTML khai báo, và Agent không còn phải phân giải trang bằng thị giác nữa mà gọi thẳng chức năng của website qua interface có cấu trúc. Việc con người xác nhận là một trong các cơ chế uỷ quyền dùng được, nhưng không phải quy phạm cưỡng chế thống nhất cho mọi thao tác thanh toán hay xoá. Công nghệ này còn mang tính thử nghiệm, nên mục này chỉ giới thiệu mang tính nhìn trước.

Giá trị cốt lõi của WebMCP nằm ở việc định nghĩa lại cách Agent tương tác với Web — từ phân giải bằng thị giác chuyển sang gọi có cấu trúc, hạ chi phí và độ trễ khi Agent lấy nội dung Web.

## 24.6 Bảo mật ở edge: tuyến phòng thủ đầu tiên trước khi request tới Region

Phần quản trị bảo mật ở trên đã dựng cho Agent một khung bảo vệ bảo mật toàn stack, phủ năm tầng gồm bảo mật ứng dụng, bảo mật model, bảo mật dữ liệu, bảo mật danh tính và bảo mật hệ thống — mạng, theo chiến lược phòng thủ theo chiều sâu. Năng lực bảo mật edge của ESA trên nền đó đẩy nhiều tuyến phòng thủ theo chiều sâu ra tới biên mạng — tấn công DDoS bị hấp thụ và làm sạch ở edge, tránh việc traffic tới Region rồi mới tiêu băng thông; Bot crawler bị nhận diện và chặn ở edge, giảm chi phí về nguồn của các request vô ích; còn phần phòng Prompt Injection ở tầng bảo mật model thì cũng được đẩy lên trước vào phần lan can AI ở edge, nhận diện và sàng sơ bộ các tấn công ngữ nghĩa trước khi chúng tới Region. Edge chỉ phủ được phần tiêm trực tiếp; còn tiêm gián tiếp qua nội dung tra cứu, phần tool trả về thì vẫn cần Region kết hợp trọn context để phát hiện và kiểm toán.

### Đẩy phần bảo mật theo chiều sâu lên trước

Edge node hoàn tất ba tầng lọc bảo mật:

* **Tầng mạng**: traffic DDoS bị hấp thụ và làm sạch ở edge, chỉ traffic hợp lệ đi vào liên kết về nguồn.

* **Tầng ứng dụng**: WAF (Web Application Firewall) / Bot management nhận diện các tấn công Web truyền thống (SQL injection, XSS) và crawler độc hại.

* **Tầng ngữ nghĩa**: lan can AI phát hiện Prompt Injection, các lần thử jailbreak, nội dung không tuân thủ và rò rỉ dữ liệu nhạy cảm.

Lan can AI và WAF có trách nhiệm khác nhau: WAF thiên về phòng thủ các tấn công ở tầng request theo chữ ký và luật đã biết; còn lan can AI thiên về phát hiện tấn công ở tầng tương tác với model ("bỏ qua các chỉ thị trước đó", tiêm gián tiếp, jailbreak bằng đóng vai). Hai bên phối hợp chạy ở edge, nhưng edge chỉ hoàn tất được phần sàng sơ bộ đặt trước, còn phát hiện tầng sâu thì hoàn tất trong Region.

### Quản lý AI crawler

Khi người truy cập website mở rộng từ con người sang AI Agent, ESA cung cấp phần quản lý vòng đời AI crawler: AI Crawler Management (hỗ trợ nhận diện, quan sát và chặn AI crawler) → AI Bot Auth (xác thực danh tính, phân biệt Agent hợp lệ với crawler độc hại) → AI Crawl Control (quản lý tinh, cho phép/hạn chế/từ chối việc truy cập của từng Agent) → Pay Per Crawl (biến việc AI truy cập thành dòng doanh thu cho khách hàng). Đây là một mô hình kinh doanh kiểu mới của thời Agent.

### Cộng tác theo tầng giữa bảo mật edge và bảo mật Region

Bảo mật ở edge lo phần "lọc" (chặn các mối đe doạ đã biết, hấp thụ traffic tấn công), còn bảo mật trong Region lo phần "phán định" (kiểm quyền hạn phức tạp, phân tích hành vi, truy vết kiểm toán). Hai bên liên động qua việc chia sẻ sự kiện bảo mật — các kiểu tấn công bị chặn ở edge được đồng bộ về engine chính sách bảo mật trong Region, còn các luật đe doạ kiểu mới phát hiện trong Region thì được đẩy xuống edge node.

## 24.7 Kiểm chứng production ở edge: dùng traffic thật toàn cầu để kiểm chứng hành vi Agent

Hệ mô phỏng trong Region đã dựng được một khung hoàn chỉnh, gồm bốn năng lực mô phỏng cốt lõi là Scenario Spec (đặc tả kịch bản), User Simulation (mô phỏng hành vi người dùng), Environment Simulation (mô phỏng tool và môi trường mạng) và Model Provider Replay (phát lại output của model). Bản chất của mô phỏng là dùng dữ liệu tổng hợp để test hành vi Agent trong các kịch bản giả định, phủ những tình huống biên và đuôi dài mà traffic thật khó chạm tới.

Edge node của ESA cung cấp một đường kiểm chứng bổ trợ cho mô phỏng: dùng traffic thật toàn cầu để quan sát biểu hiện thực tế của Agent sau khi lên production. Mô phỏng trả lời câu "nếu X xảy ra thì Agent sẽ ra sao"; còn kiểm chứng production ở edge trả lời câu "người dùng thật trên toàn cầu đã thực sự gặp chuyện gì, và Agent biểu hiện ra sao". Hai thứ cùng tạo thành vòng kiểm chứng khép kín trước và sau khi phát hành một version Agent — mô phỏng lo phần test tổng hợp trước khi lên production, còn kiểm chứng production ở edge lo phần quan sát thật sau khi lên production.

### Năng lực quan sát traffic thật ở edge

Edge node của ESA nằm ở chặng đầu tiên mà người dùng truy cập, nên quan sát trực tiếp được tình hình vận hành thật ở các khu vực toàn cầu:

**Phân bố request:** tỉ trọng theo vùng, khung giờ cao điểm, thiên hướng về đường request — phản ánh cách sử dụng thực tế của người dùng toàn cầu.

**Tình trạng mạng:** độ trễ đầu-cuối, tỉ lệ mất gói, tần suất đứt kết nối và độ ổn định của kết nối dài — phản ánh môi trường mạng thật ở từng khu vực.

**Tình thế bảo mật:** kiểu tấn công DDoS, hành vi Bot crawler, tình hình phát hiện Prompt Injection thực tế — phản ánh phân bố đe doạ thật.

**Hiệu quả cache:** tỉ lệ semantic cache trúng, tỉ trọng traffic về nguồn — phản ánh hiệu quả thực tế của chiến lược cache dưới traffic thật.

Thứ edge node của ESA ghi lại là biểu hiện thực tế của người dùng thật trên toàn cầu trong môi trường production. Chẳng hạn, edge node quan sát được thực tế có bao nhiêu người dùng ở khu vực Đông Nam Á gặp đứt mạng, chiến lược khôi phục biểu hiện ra sao, tỉ lệ cache trúng có đạt kỳ vọng không.

### Quan hệ bổ trợ giữa kiểm chứng production ở edge và mô phỏng

Kiểm chứng production ở edge và mô phỏng có trọng tâm khác nhau khi kiểm chứng hành vi Agent:

| Chiều | Mô phỏng (trước khi lên production) | Kiểm chứng production ở edge (sau khi lên production) |
| --- | --- | --- |
| Nguồn dữ liệu | Kịch bản tổng hợp, người dùng mô phỏng | Request thật của người dùng toàn cầu |
| Phạm vi phủ | Các tình huống biên và đuôi dài | Các kịch bản chủ đạo và phân bố thật |
| Điều kiện mạng | Tham số độ trễ / mất gói mô phỏng | Tình trạng mạng thực tế của từng khu vực |
| Đe doạ bảo mật | Mẫu tấn công do red team dựng | Traffic và kiểu tấn công thật |
| Mục đích kiểm chứng | Agent có ứng phó được với kịch bản giả định không | Agent biểu hiện ra sao trong môi trường thật |

Một kịch bản bổ trợ điển hình: mô phỏng kiểm chứng rằng Agent xử lý được tình huống mạng yếu với timeout 3 giây, rồi version được phát hành lên production; kiểm chứng production ở edge phát hiện thực tế ở khu vực Đông Nam Á có 5% request gặp độ trễ trên 5 giây, khiến tỉ lệ đứt output dạng stream của Agent cao hơn kỳ vọng. Lúc này có thể quay lại hệ mô phỏng, dùng các tham số mạng thật quan sát được ở edge để bổ sung kịch bản test mới, tạo thành vòng khép kín "mô phỏng → lên production → kiểm chứng ở edge → chảy ngược về mô phỏng".

### Phát hành canary ở edge và quản lý version

ESA cung cấp năng lực quản lý version ở mức site, hỗ trợ ba bộ môi trường phát triển, canary và production. Mỗi version được sinh ra bằng cách clone từ cấu hình hiện có, có thể test ở môi trường phát triển trước, rồi nâng lên môi trường canary để đưa một phần traffic vào theo luật request mà kiểm chứng, cuối cùng nâng lên môi trường production để có hiệu lực toàn phần. Version hỗ trợ chuyển đổi và rollback, nên khi bất thường thì lùi nhanh về version trước được.

Năng lực này khiến việc kiểm chứng production ở edge không chỉ dừng ở quan sát, mà còn chạy được phần kiểm chứng version có kiểm soát trên traffic thật. Luật cache, chính sách bảo mật hay cấu hình định tuyến của version mới sẽ có hiệu lực trước trên một phần traffic thật ở môi trường canary, và edge node thì liên tục quan sát các chỉ số như tỉ lệ thành công task, độ trễ phản hồi, tỉ lệ cache trúng và tỉ lệ chặn bảo mật. Kiểm chứng qua rồi thì nâng lên production phát hành toàn phần; còn nếu chỉ số bất thường thì rollback thẳng về version trước. Trong suốt quá trình đó, traffic thật vừa là đối tượng kiểm chứng, vừa là căn cứ để nền tảng Agent phán định version đã đạt chuẩn phát hành chưa.

### Đánh giá liên hợp edge — Region cho kết quả kiểm chứng

Baseline điều kiện vào cho việc phát hành version Agent nên gồm đồng thời các chỉ số trong Region (tỉ lệ trả lời đúng, tỉ lệ hoàn thành task) và các chỉ số ở edge (phân bố độ trễ toàn cầu, tỉ lệ cache trúng, tỉ lệ chặn bảo mật). Một version nếu chưa đạt chuẩn về độ trễ P95 toàn cầu hay tỉ lệ cache trúng ở edge thì dù mọi phần mô phỏng trong Region đều qua cũng không nên được phát hành. Nền tảng Agent dựa trên những dữ liệu đó mà phán định version đã đạt chuẩn phát hành chưa. Kiểm chứng production ở edge mở rộng điều kiện vào cho việc phát hành từ phạm vi Region ra chiều toàn cầu.

## 24.8 Ba giai đoạn tiến hoá và mô hình độ chín của doanh nghiệp

Doanh nghiệp không cần xây trọn hệ tối ưu edge ngay từ ngày đầu. Tuỳ mức độ toàn cầu hoá của nghiệp vụ Agent và độ chín của năng lực edge, có thể chia thành ba giai đoạn tiến hoá dần.

![image.png](../assets/imgs/chapter-24/image-001.png)

*Hình 24-1 — Ba giai đoạn tiến hoá của việc tối ưu edge cho Agent*

### Giai đoạn một: hạ tầng edge tăng cường cho Agent

Đây là giai đoạn tối ưu ít xâm lấn nhất. Code nghiệp vụ của Agent về cơ bản không đổi, chỉ cần chỉnh cấu hình tiếp cận mạng, thêm một tầng tăng tốc và bảo mật edge của ESA ở tầng mạng. Đây là giai đoạn mà phần lớn doanh nghiệp nên cân nhắc đầu tiên — đầu tư ít nhất, hiệu quả đo được.

Các năng lực cụ thể gồm: tiếp cận gần nhất bằng Anycast (request người dùng tự động định tuyến tới edge node gần nhất), định tuyến thông minh (các edge node nối nhau qua mạng backbone, chọn đường về nguồn tối ưu theo tình trạng mạng thời gian thực), làm sạch DDoS (traffic tấn công bị hấp thụ ở edge, chỉ traffic hợp lệ đi vào liên kết về nguồn), phòng thủ WAF/Bot (SQL injection, XSS, crawler độc hại bị chặn ở edge), cache tài nguyên tĩnh và offload SSL.

Đường triển khai thường chia bốn bước: tích hợp ESA và chuyển DNS → đo baseline độ trễ toàn cầu → kiểm chứng hiệu quả ở các khu vực trọng điểm → cho hiệu lực toàn cầu. Cả quá trình thường chỉ mất vài ngày (đánh giá mang tính ví dụ; chu kỳ thực tế tuỳ kiến trúc sẵn có và độ phức tạp cấu hình của doanh nghiệp), và không ảnh hưởng tới bất kỳ logic nghiệp vụ nào của Agent.

Điều kiện áp dụng: Agent đã có phần triển khai Region ổn định, cần cải thiện độ trễ toàn cầu và phòng thủ bảo mật, nhưng không muốn động tới kiến trúc ứng dụng.

Chỉ số đánh giá: tỉ lệ cải thiện độ trễ P50/P95 toàn cầu, tỉ lệ chặn bảo mật ở edge, lượng băng thông về nguồn giảm được.

### Giai đoạn hai: đưa một phần năng lực Agent ra edge

Một phần năng lực Agent bắt đầu thực thi ngay tại edge node của ESA, chứ không chỉ được tăng tốc và bảo vệ. Các năng lực cụ thể gồm: ESA AI Acceleration Gateway (đã phát hành; semantic cache, định tuyến model, đo lường Token hoàn tất ngay tại edge, còn chính sách trúng cache cụ thể thì là phần hiện thực tham chiếu cho doanh nghiệp), chuyển đổi nội dung thân thiện với Agent (HTML→Markdown, vector hoá… là phần hiện thực tham chiếu cho doanh nghiệp), WebMCP (công nghệ thử nghiệm), và suy luận nhẹ (edge node chạy model nhỏ để tiền xử lý hay phân loại).

Điều kiện áp dụng: chi phí Token hay độ trễ xử lý nội dung của Agent đã thành nút thắt, cần dùng cache và tiền xử lý ở edge để giảm áp lực cho Region.

Chỉ số đánh giá: tỉ lệ semantic cache trúng, lượng Token tiết kiệm, độ trễ chuyển đổi nội dung, tỉ trọng request được xử lý ở edge.

### Giai đoạn ba: Agent triển khai native ở edge

Đây là viễn cảnh trạng thái cuối. Topology triển khai mặc định của hệ Agent phân tán là **edge-first**, còn cloud trung tâm thì làm phần đỡ lưng và tính toán nặng. Thay đổi kiến trúc cốt lõi của giai đoạn này là đưa vào **runtime hai tầng cho Agent** cùng **edge AI acceleration gateway**, tái cấu trúc topology thực thi toàn cầu của Agent từ góc nhìn tối ưu.

![image.png](../assets/imgs/chapter-24/image-002.png)

*Hình 24-2 — Kiến trúc runtime hai tầng của Agent*

**Runtime hai tầng của Agent: ESA EdgeFunction + RegionFunction.**

Kiến trúc ba mặt phẳng (control / state / execution) của Agent Runtime tạo nền cho việc triển khai ở edge, còn việc triển khai phân tán thì giải quyết thêm bài toán Agent đi từ một máy lên nhiều Region — topology triển khai tiến hoá từ tập trung một Region sang nhiều Region chính-phụ, rồi tới nhiều Region cùng hoạt động. Giai đoạn ba trên nền đó bước tiếp một bước: từ "nhiều Region" tiến hoá sang "edge-first". Nguyên tắc "đơn thể logic, thay thế được về vật lý" cùng thiết kế đẩy state ra ngoài vốn rất hợp với kiến trúc edge — edge function là instance thực thi nhẹ, còn cloud function là đơn thể logic đầy đủ, và hai bên giữ hành vi nhất quán nhờ việc đẩy state ra ngoài. Việc đẩy state ra ngoài cần kèm theo nguồn thẩm quyền, phép ghim version, giao thức kích hoạt, kiểm soát ghi đồng thời, hạ cấp khi mất mạng và luật rollback, thì hành vi ở edge và ở Region mới thực sự nhất quán được.

* **EdgeFunction (edge function, triển khai gần người dùng)**: do nền tảng tính toán edge của ESA gánh, triển khai trên edge node gần người dùng nhất, xử lý phần logic tiền đề nhạy với độ trễ — kiểm xác thực, quyết định định tuyến, viết lại request, tra cứu cache, lọc bảo mật. Edge function của ESA dựa trên môi trường chạy JavaScript theo V8 Isolate (hiện hỗ trợ JavaScript ES6), cung cấp cô lập tiến trình nhẹ, và request người dùng được xử lý xong ngay ở "chặng đầu", không cần vượt mạng quay về data center.

* **RegionFunction (cloud function, triển khai gần nguồn)**: triển khai ở các node ESA gần origin hơn, xử lý phần logic Agent cần trạng thái bền và tính toán sâu — quản lý context hội thoại nhiều lượt, orchestration lời gọi tool, lập lịch suy luận model, đọc ghi memory dài hạn, thực thi cô lập trong sandbox. Cloud function nằm sát dịch vụ model, database và hệ thống nghiệp vụ, nên hợp với các task nặng đòi hỏi cao hơn về tài nguyên tính toán và truy cập dữ liệu.

Ý tưởng cốt lõi của kiến trúc hai tầng là: **không phải mọi request của Agent đều cần quay về data center xử lý.** Lấy một Agent chăm sóc khách hàng điển hình làm ví dụ, phần lớn request hoàn tất được ngay gần người dùng nhờ cache ở edge trúng, định tuyến đơn giản hay tiền xử lý nhẹ; chỉ những request liên quan tới suy luận phức tạp và gọi tool sâu mới cần vào data center. Runtime hai tầng giúp phần lớn request hoàn tất ở edge, giảm mạnh độ trễ đầu-cuối cho người dùng toàn cầu, đồng thời giảm áp lực tính toán ở phía data center.

Một kịch bản cụ thể minh hoạ cách chạy của kiến trúc hai tầng. Một người dùng nói tiếng Tây Ban Nha hỏi Agent chăm sóc khách hàng về chính sách trả hàng; request tới edge node gần nhất (Madrid). EdgeFunction trước hết hoàn tất phần xác thực và tiền xử lý request, rồi tra trong semantic cache — khu vực của người dùng này trước đó đã có nhiều truy vấn tương tự, cache trúng, nên edge trả thẳng phần tóm tắt chính sách trả hàng đã cache, với độ trễ cả quá trình dưới 50ms (giả định của kịch bản ví dụ, cần doanh nghiệp hiệu chỉnh theo baseline). Nếu người dùng hỏi dồn một câu phức tạp chưa từng xuất hiện (cache không trúng), EdgeFunction sẽ chuyển tiếp request cùng kết quả tiền xử lý tới RegionFunction ở data center, để bên đó hoàn tất trọn phần suy luận nhiều lượt, gọi tool và truy vấn đơn hàng; kết quả rồi lại được ghi ngược về cache ở edge cho các truy vấn tương tự về sau.

**Các chỉ số tối ưu then chốt của runtime hai tầng:**

| Chỉ số | Ý nghĩa | Mục tiêu tối ưu |
| --- | --- | --- |
| Tỉ trọng xử lý ở edge | Tỉ trọng request hoàn tất ở tầng EdgeFunction | Đặt mục tiêu theo rủi ro task và SLO nghiệp vụ, ưu tiên tính đúng đắn chứ không cực đại hoá đơn thuần |
| Thời gian cold start của EdgeFunction | Thời gian từ lúc nạp tới lúc chạy được của edge function | <1ms (mục tiêu ví dụ) |
| Độ trễ quyết định định tuyến | Thời gian EdgeFunction phán định request đi edge hay đi Region | <5ms (mục tiêu ví dụ) |
| Tỉ lệ giữ phiên của RegionFunction | Tính liên tục trạng thái trong Region với Agent có phiên dài | Không được gián đoạn |
| Thời gian failover edge — Region | Thời gian chuyển sang Region hay edge lân cận khi edge node không khả dụng | <3s (mục tiêu ví dụ) |

Các chỉ số trên là mục tiêu mang tính ví dụ về kiến trúc, không phải chỉ số hiện trạng của sản phẩm ESA; doanh nghiệp nên hiệu chỉnh theo baseline và kết quả đo tải của chính mình.

**ESA AI Acceleration Gateway: edge gateway hướng tới traffic AI.**

ESA AI Acceleration Gateway là một AI gateway xây trên đặc tính tiếp cận ở edge, có định vị và kịch bản mục tiêu khác với AI gateway ở trung tâm. Về bản chất, đây là khác biệt về đặc tính sử dụng do khác biệt triển khai mang lại: AI gateway trung tâm triển khai trong Region, còn ESA AI Acceleration Gateway thì triển khai trên các edge node rải khắp toàn cầu. Dựa trên đặc trưng edge của ESA, AI Acceleration Gateway được dùng nhiều hơn cho các kịch bản nghiệp vụ phục vụ toàn cầu — traffic AI đi vào từ edge node gần người dùng nhất và được quản trị ngay tại chỗ.

ESA AI Acceleration Gateway cung cấp những năng lực riêng có ở edge:

| Khâu xử lý | Năng lực |
| --- | --- |
| Cache | Semantic cache: request tương tự trúng ngay ở edge, tiết kiệm Token |
| Truyền dẫn | Tăng tốc kết nối dài: tinh chỉnh tầng giao thức, chuyển tiếp dạng stream, tối ưu cửa sổ đầu |
| Nội dung | Chuyển HTML→Markdown: giảm mạnh mức tiêu Token khi Agent tiêu thụ nội dung Web |
| Đo lường | Ước lượng Token và đếm request tại edge |
| Lọc | Lan can AI lọc đặt trước: chặn các request vi phạm rõ ràng |
| Điều phối | Điều phối QPS (số request mỗi giây) cao: tầng edge hấp thụ đỉnh traffic |

Giá trị riêng có của edge AI acceleration gateway đến từ đặc tính vị trí của việc tiếp cận ở edge: request hoàn tất việc tra cache, chuyển đổi định dạng, tối ưu truyền dẫn và lọc bảo mật ngay ở chặng đầu; cache trúng thì trả thẳng, không trúng thì mới về nguồn Region — nhờ vậy người dùng toàn cầu đều có được trải nghiệm độ trễ thấp nhất quán. Ranh giới năng lực cũng cần nói rõ: semantic cache chỉ phủ các request công khai, idempotent và rủi ro thấp; còn các request liên quan tới tác dụng phụ ghi và trạng thái thẩm quyền thì vẫn phải quay về Region thực thi, để bảo đảm tính đúng đắn và tính nhất quán.

Các chỉ số tối ưu then chốt của ESA AI Acceleration Gateway: tỉ lệ tiết kiệm Token (hiệu quả tổng hợp của việc chuyển HTML→MD cộng semantic cache), tỉ lệ cache trúng ở edge, mức cải thiện TTFT nhờ tăng tốc kết nối dài, và tỉ lệ chặn lọc ở edge (tỉ lệ request vi phạm bị chặn trước khi về nguồn).

**Điều kiện áp dụng và hệ đánh giá của giai đoạn ba:**

Điều kiện áp dụng: quy mô toàn cầu hoá và yêu cầu độ trễ của Agent khiến edge-first trở thành lựa chọn bắt buộc về kiến trúc, chứ không còn là một tuỳ chọn tối ưu. Các tín hiệu điển hình gồm: cần triển khai trọn hệ Agent độc lập cho từng khu vực và chi phí vận hành không kiểm soát nổi; phần truyền mạng chiếm hơn 30% trong TTFT toàn cầu (giả định của kịch bản ví dụ, cần doanh nghiệp hiệu chỉnh theo baseline); chi phí Token tăng tuyến tính theo lượng người dùng mà không có biện pháp cache hữu hiệu.

Chỉ số đánh giá: tỉ trọng request Agent được xử lý ở edge, mức khả dụng toàn cầu của Agent (SLA — thoả thuận mức dịch vụ), tỉ lệ failover edge — Region thành công, mức cải thiện TTFT đầu-cuối, tỉ lệ tiết kiệm chi phí Token.

Quan hệ giữa ba giai đoạn nhất quán với nguyên tắc "chọn kiến trúc tối thiểu đủ dùng" — tối ưu edge cũng vậy, không theo đuổi giai đoạn cao nhất, mà chọn giai đoạn tối ưu về chi phí và lợi ích theo mức độ toàn cầu hoá của nghiệp vụ. Phần lớn doanh nghiệp dừng lâu dài ở giai đoạn một hay giai đoạn hai là đã có lợi ích rõ rệt; chỉ khi quy mô toàn cầu hoá đạt tới một mức nhất định thì giai đoạn ba mới thành lựa chọn bắt buộc về kiến trúc.

### Mô hình độ chín về tối ưu edge của doanh nghiệp (do cuốn sách quy nạp, để doanh nghiệp tự đánh giá)

| Độ chín | Năng lực tối ưu edge | Mức tích hợp với hệ tối ưu | Biểu hiện điển hình |
| --- | --- | --- | --- |
| L1 | Không có tối ưu edge, Agent nối thẳng tới Region | Không có | Chênh lệch độ trễ toàn cầu lớn, bảo mật dựa vào phòng thủ trong Region |
| L2 | Đã tích hợp tăng tốc và bảo mật ở edge, có dashboard riêng | Chưa vào vòng khép kín đánh giá | Độ trễ cải thiện nhưng không định lượng được ROI (tỉ suất hoàn vốn), luật bảo mật duy trì thủ công |
| L3 | Chỉ số edge đã vào baseline điều kiện vào của Agent Release | Vòng khép kín đánh giá (nối với hệ đánh giá) | Phát hành version phải qua hồi quy hiệu năng ở edge, chiến lược cache gắn với version Agent |
| L4 | Dữ liệu edge dẫn dắt việc tự tiến hoá | Vòng khép kín hoàn toàn tự động (nối với vòng tự tiến hoá) | Chiến lược cache/định tuyến/bảo mật tự tối ưu theo Trace ở edge, qua kiểm chứng canary rồi mới có hiệu lực |

Độ chín không phải càng cao càng tốt. L1 hợp với doanh nghiệp chỉ vận hành ở một khu vực; L2 hợp với giai đoạn đầu toàn cầu hoá; L3 hợp với giai đoạn Agent đã vào production và cần cổng chất lượng nghiêm ngặt; L4 hợp với việc vận hành toàn cầu quy mô lớn. Mô hình này về hướng tiến hoá thì tương ứng đại thể với mô hình độ chín triển khai (M1–M5) — tối ưu edge là nhu cầu tự nhiên sau khi độ chín triển khai tiến tới giai đoạn cao — nhưng giữa hai bên không có ánh xạ một-một; mỗi mức năng lực nên có ngưỡng kiểm chứng được, chứ không chỉ dựa vào mô tả định tính.

**Doanh nghiệp phán định mình đang ở giai đoạn nào:**

| Tín hiệu | Phán định giai đoạn |
| --- | --- |
| Người dùng toàn cầu than phiền độ trễ cao, nhưng chỉ số trong Region vẫn bình thường | Cần giai đoạn một |
| Chi phí Token tăng tuyến tính theo lượng người dùng, không thấy hiệu quả cache rõ rệt | Cần giai đoạn hai |
| Phải triển khai trọn hệ Agent độc lập cho từng khu vực, chi phí vận hành không kiểm soát nổi | Cần giai đoạn ba |
| Hiện chỉ chạy ở một Region, người dùng chủ yếu cùng một khu vực | Tạm chưa cần tối ưu edge |

## 24.9 Trạng thái năng lực, ranh giới và quyết định của doanh nghiệp

Các năng lực công nghệ và sản phẩm mà chương này nhắc tới đang ở những giai đoạn chín khác nhau; dưới đây ghi chú thống nhất.

### Ma trận trạng thái năng lực

| Năng lực | Trạng thái | Diễn giải |
| --- | --- | --- |
| Tiếp cận gần nhất bằng Anycast, định tuyến thông minh | ESA đã phát hành | Request người dùng được định tuyến tới edge node gần nhất, chọn đường theo tình trạng mạng thời gian thực |
| Edge node nối nhau qua backbone, chọn đường kênh riêng theo DSCP | ESA đã phát hành | Bảo đảm chất lượng truyền cho phần về nguồn và traffic ưu tiên cao |
| Làm sạch DDoS, phòng thủ WAF/Bot | ESA đã phát hành | Traffic tấn công bị hấp thụ ở edge, các tấn công Web truyền thống bị chặn ở edge |
| Lan can AI lọc đặt trước | ESA đã phát hành | Edge hoàn tất việc nhận diện và sàng sơ bộ phần tiêm trực tiếp, còn phát hiện tầng sâu thì ở Region |
| Chuyển HTML→Markdown | ESA đã phát hành | Giảm mức tiêu Token khi Agent tiêu thụ nội dung Web |
| Quản lý AI crawler | ESA đã phát hành | Nhận diện, quan sát và chặn AI crawler |
| AI Bot Auth, AI Crawl Control, Pay Per Crawl | ESA đã phát hành | Các năng lực tiếp theo trong việc quản lý vòng đời AI crawler |
| Runtime hai tầng cho Agent | ESA đã phát hành | Triển khai AI Agent ở quy mô lớn tại edge |
| Chính sách trúng semantic cache và thiết kế khoá cache | Hiện thực tham chiếu cho doanh nghiệp | ESA AI gateway cấp năng lực cache nền; còn phần khoá cache, TTL và chính sách về nguồn trong chương này là khuyến nghị thiết kế |
| WebMCP | Công nghệ thử nghiệm | Giai đoạn thử nghiệm |
| Quản lý version và phát hành canary | ESA đã phát hành | Kiểm chứng production ở edge |

### Hạn chế và các kịch bản không phù hợp của việc tối ưu edge

Tối ưu edge không hợp với mọi nghiệp vụ; các kịch bản dưới đây cần đánh giá thận trọng.

**Nghiệp vụ một khu vực.** Với doanh nghiệp có người dùng tập trung ở cùng một khu vực và gần Region về khoảng cách vật lý, lợi ích về độ trễ mà tối ưu edge mang lại là hữu hạn, nên mức đầu tư có thể không tương xứng.

**Yêu cầu lưu trú dữ liệu nghiêm ngặt.** Với các kịch bản không cho phép sao chép cache xuyên khu vực hay yêu cầu dữ liệu không ra khỏi một khu vực tài phán nhất định, thì semantic cache và phân phối toàn cầu phải cấu hình theo tuân thủ từng khu vực, thậm chí phải bỏ hẳn cache ở edge.

**Các câu trả lời có rủi ro cao về tính đúng đắn.** Nội dung cá nhân hoá mạnh, nhạy cảm về quyền hạn hay có tính thời sự cao thì không nên vào semantic cache, nếu không có thể gây trúng nhầm một đáp án sai.

**Năng lực tính toán ở edge hạn chế.** Suy luận phức tạp, task dài, xử lý context lớn thì vẫn phải về nguồn; edge chỉ gánh phần tiền xử lý và sàng thô.

**Khác biệt năng lực theo khu vực.** Năng lực edge node, model khả dụng và yêu cầu tuân thủ ở các khu vực khác nhau là khác nhau, nên chính sách thống nhất toàn cầu phải thích ứng theo khu vực, không thể cào bằng.

**Đảo ngược chi phí.** Khi quy mô traffic nhỏ hay tỉ lệ cache trúng thấp, chi phí thêm của tầng edge có thể vượt lợi ích; lúc này giai đoạn một, thậm chí "không tối ưu", mới là lựa chọn đúng.

### Khuyến nghị quyết định cho doanh nghiệp

Doanh nghiệp nên chọn giai đoạn một, hai hay ba dựa trên mức độ toàn cầu hoá, yêu cầu lưu trú dữ liệu, phân bố request và cấu trúc chi phí của chính mình, rồi đặt các mục tiêu chỉ số khớp với SLO nghiệp vụ. Mọi con số hiệu năng xuất hiện trong chương này đều là giả định của kịch bản ví dụ hay mục tiêu mang tính ví dụ về kiến trúc; trước khi triển khai chính thức thì bắt buộc phải hiệu chỉnh bằng baseline và đo tải của doanh nghiệp.

## 24.10 Tóm tắt chương

Phần tối ưu đã dựng trong Region một vòng khép kín tối ưu hoàn chỉnh từ đánh giá, tự tiến hoá, quản trị kỹ thuật, bảo mật tới mô phỏng. Khi người dùng của Agent mở rộng từ một khu vực ra toàn cầu, vòng khép kín đó cần kéo dài thêm theo chiều không gian — để những năng lực tối ưu đã chín trong Region phủ tới edge, tới nơi gần người dùng nhất.

Tối ưu edge là phần kéo dài theo chiều không gian của khung tối ưu sẵn có — hệ đánh giá mở rộng tới chất lượng bàn giao ở edge, vòng tự tiến hoá mở rộng tới tín hiệu traffic ở edge, quản trị kỹ thuật mở rộng tới phân phối ở edge, đánh giá bảo mật mở rộng tới bề mặt tấn công ở edge, còn kiểm chứng production ở edge thì bổ sung cho phần mô phỏng phủ. Nền tảng Edge Security Acceleration của ESA cung cấp năng lực hạ tầng để thực hiện những phần kéo dài đó, đưa việc tối ưu từ Region ra tận phía người dùng, bù nốt một dặm cuối của hệ tối ưu.

Việc tối ưu từ Region ra Edge là một quá trình tiệm tiến: trước hết dùng hạ tầng edge của ESA để tăng cường cho Agent (giai đoạn một), rồi đưa một phần năng lực ra edge của ESA (giai đoạn hai), cuối cùng để Agent chạy native ở edge qua runtime hai tầng (ESA EdgeFunction + RegionFunction) và ESA AI Acceleration Gateway (giai đoạn ba). Nhận định cốt lõi của giai đoạn ba là: **phần lớn request của Agent không cần tới trọn tài nguyên tính toán ở mức Region;** kiến trúc xử lý ở edge và về nguồn theo nhu cầu có thể cải thiện một cách hệ thống độ trễ, chi phí và trải nghiệm cho người dùng toàn cầu mà không cần đổi logic lõi của Agent. Mỗi giai đoạn đều có chỉ số đánh giá và chuẩn độ chín tương ứng; doanh nghiệp nên chọn giai đoạn thích hợp theo mức độ toàn cầu hoá của mình, rồi tiến hoá liên tục dưới sự dẫn dắt của dữ liệu production.

Nhìn từ góc rộng hơn, topology triển khai edge-first cũng là phần hạ tầng chống đỡ cho viễn cảnh "Agentic OS" nêu ở phần kết — khi Agent đi từ một ứng dụng đơn lẻ tới một hệ sinh thái cộng tác ở tầm hệ điều hành, tầng edge sẽ thành hạ tầng then chốt cho việc giao tiếp giữa các Agent, khám phá năng lực và điều phối task. Việc Runtime kéo dài từ Region ra edge là con đường tất yếu để Agentic Application đi tới Agentic OS.

**Từ Region tới Edge, runtime của Agent kéo dài tới mọi ngóc ngách trên toàn cầu.**
