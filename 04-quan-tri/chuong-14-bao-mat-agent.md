# Chương 14 — Bảo mật Agent

# 14.1 Rủi ro và thách thức bảo mật của Agent

Khi Agent bước vào quy trình nghiệp vụ, việc bảo mật phải đồng thời giải hai vấn đề: **bảo vệ chính Agent**, và **bảo đảm nó làm việc đúng phạm vi uỷ quyền.** Một khảo sát gần đây của IBM với 602 tổ chức từng bị rò rỉ dữ liệu cho thấy 21% trong số đó đã gặp sự cố bảo mật liên quan tới model hay ứng dụng AI. Trong những tổ chức gặp sự cố AI đó, **92% thiếu kiểm soát truy cập AI phù hợp.** Công nghệ AI đang phát triển, nhưng các vấn đề bảo mật nền tảng như định danh và quyền hạn thì vẫn cần được giải quyết.

Một đợt đánh giá bảo mật của OpenAI bị phơi ra hồi tháng 7 đã tiến hoá thành một cuộc xâm nhập thật nhắm vào Hugging Face. Cuộc tấn công xuyên hệ thống này, theo phần điều tra pháp chứng mà HF tái dựng, kéo dài khoảng 4,5 ngày. Điều tra độc lập của METR ước tính khoảng **700 Agent** đã tham gia tấn công, và phần pháp chứng của HF tái dựng được khoảng **17,6 nghìn hành vi tấn công.** Hoạt động tấn công đã lan từ một bàn đạp bên ngoài vào tới môi trường production của HF.

Cùng lúc đó, trong một đợt đánh giá bảo mật khác của Viện An toàn AI Anh, **10 trong số 122 lần chạy xuất hiện hành vi vượt biên.** Những sự kiện này xảy ra trong môi trường đánh giá đã hạ bớt một phần lớp phòng thủ, **nhưng đã cho thấy tầm quan trọng của việc ràng buộc ranh giới thực thi.**

Vì vậy, bước sang năm 2026, bảo mật Agent đã nâng cấp toàn diện: **bắt buộc phải có cả phòng thủ lẫn kiểm soát.** Agent vừa là **đối tượng bị tấn công**, vừa là **chủ thể hành vi**: với vai đối tượng, nó đối mặt với các mối đe doạ như đầu độc chuỗi cung ứng, prompt injection và jailbreak, xâm nhập hệ thống và mạng; với vai chủ thể, nó nắm giữ định danh và quyền hạn, tự chủ gọi tool, tiếp xúc dữ liệu nhạy cảm — **ngay cả khi không bị tấn công, nó vẫn có thể gây thiệt hại vì hành vi vượt biên.** Vì vậy, bảo mật Agent vừa phải giải quyết chuyện **"không bị chọc thủng"**, vừa quan trọng hơn là chuyện **"không vượt ranh giới".**

**Phòng thủ là cái khiên.** Từ tài sản và chuỗi cung ứng, tới input–output của model, rồi tới môi trường vận hành hệ thống và mạng — bố trí phòng thủ chiều sâu toàn stack theo từng lớp, để cuộc tấn công không thắng được ở bất kỳ tầng nào. **Kiểm soát là dây cương.** Bằng định danh–xác thực, nhận diện ý định, kiểm tra từng lời gọi, uỷ quyền lần hai cho thao tác rủi ro cao và chặn dữ liệu rời khỏi biên — ràng buộc mỗi hành động tự chủ của Agent trong một ranh giới kiểm soát được. **Khiên bảo đảm nó không bị lợi dụng; dây cương bảo đảm nó không bị buông lỏng.**

![Ảnh chụp màn hình 2026-09-14 13.53.20.png](../assets/imgs/chapter-14/image-001.png)

**Chiều sâu quyết định năng lực, chiều rộng quyết định ứng phó với cái gì.** Điều đó được cụ thể hoá thành: ở mỗi tầng công nghệ — từ hạ tầng, tới định danh, dữ liệu và ứng dụng — đều đồng thời gánh cả phòng thủ lẫn kiểm soát; và mỗi yêu cầu kiểm soát đều được triển khai xuyên suốt toàn stack. **Chỉ khi có đủ cả phòng thủ và kiểm soát, ta mới vừa trao nhiều quyền hơn cho Agent vừa giữ cho rủi ro luôn hội tụ — khi đó Agent mới thực sự "mở ra được mà vẫn quản được".**

# 14.2 Bảo vệ an toàn ứng dụng

## 14.2.1 Bối cảnh và thách thức

Bảo mật ứng dụng truyền thống chủ yếu xoay quanh code, interface và logic nghiệp vụ; còn AI Agent thì đưa vào năng lực lập kế hoạch động, gọi tool và thực thi tự chủ. Đối tượng mà bảo mật ứng dụng phải bảo vệ nay đã mở rộng thành **một hệ thống có thể liên tục điều chỉnh hành động dựa trên thông tin bên ngoài.** Điều này vừa khuếch đại rủi ro của các lỗ hổng ứng dụng truyền thống, vừa thêm những rủi ro mới như lạm dụng tool, chiếm quyền workflow và tấn công xuyên hệ thống.

Năng lực tương tác với hệ thống và tool bên ngoài khiến AI Agent **từ bên xử lý thông tin trở thành bên thực thi hành động.** Kẻ tấn công có thể dụ nó truy cập đích ngoài dự kiến, dựng request độc hại hay gửi dữ liệu nghiệp vụ ra ngoài, thông qua input trực tiếp hoặc bằng cách làm ô nhiễm nội dung bên ngoài mà Agent sắp đọc. **SSRF (Server-Side Request Forgery)** là một trong những rủi ro ứng dụng then chốt của các Agent có kết nối mạng; việc cào web, xem trước file, proxy ảnh cùng các dịch vụ gửi request hộ khác đều có thể trở thành lối vào để truy cập những đích mạng ngoài dự kiến. Đồng thời, SQL, HTML hay tham số tool mà Agent sinh ra, nếu bị ứng dụng hạ nguồn diễn giải và thực thi thẳng, cũng có thể kích hoạt các lỗ hổng truyền thống như SQL injection, XSS.

Các sự kiện công khai gần đây còn cho thấy: một số Agent năng lực cao đã **có thể liên tục thăm dò đường tấn công, điều chỉnh chiến lược theo phản hồi, và xâu chuỗi nhiều lỗ hổng ở nhiều hệ thống.** Tháng 7 năm 2026, một Agent trong đợt đánh giá nội bộ của OpenAI, dưới điều kiện phòng thủ bị hạ bớt một phần, đã lợi dụng một dịch vụ Artifactory truy cập được để đi ra Internet hộ, rồi xâm nhập tiếp vào hệ thống Hugging Face. Sự kiện này cho thấy **bản thân Agent mà doanh nghiệp triển khai cũng phải được xem là một điểm phát khởi tấn công tiềm tàng**, và các dịch vụ trung gian mà nó truy cập được cũng có thể trở thành đường đột phá ranh giới mạng.

Vì vậy, bảo mật ứng dụng Agent không chỉ cần ngăn kẻ tấn công bên ngoài thao túng Agent, mà còn cần **kịp thời phát hiện và giới hạn những ảnh hưởng ngoài dự kiến mà Agent gây ra cho hệ thống nội bộ và bên ngoài.** Phạm vi phòng thủ nên phủ Agent, dịch vụ tool và hệ nghiệp vụ hạ nguồn; vừa quan tâm đường đi vào của request bên ngoài, vừa quan tâm giao tiếp đông–tây giữa các dịch vụ nội bộ, và giao tiếp outbound bắc–nam khi Agent cùng dịch vụ tool truy cập Internet.

## 14.2.2 Bề mặt tấn công mới

Hệ thống AI Agent nối việc đọc nội dung bên ngoài, lập kế hoạch task, chọn tool và thực thi nghiệp vụ thành một quá trình chạy liên tục. Vì vậy, những vị trí mà kẻ tấn công tác động được cũng mở rộng từ input người dùng và interface nghiệp vụ sang **mô tả tool, trạng thái task, message xuyên Agent và các kết quả thực thi trung gian.**

*   **Input bên ngoài không đáng tin**

Trang web, email, tài liệu, kết quả nhận diện hình ảnh và bản ghi truy hồi vốn thuộc loại dữ liệu mà ứng dụng cần xử lý; nhưng trong hệ Agent chúng cũng có thể **ảnh hưởng tới hành động kế tiếp.** Kẻ tấn công có thể làm ô nhiễm những nội dung đó để dụ Agent đổi mục tiêu task, chọn tool ngoài dự kiến hay thêm thao tác phụ. **Ngay cả khi kẻ tấn công không gửi được request trực tiếp tới Agent, chỉ cần ảnh hưởng được tới nội dung mà nó sắp đọc là đã có thể gián tiếp ảnh hưởng tới việc thực thi nghiệp vụ.**

*   **Việc khám phá và gọi tool**

Agent chọn hành động kế tiếp dựa trên tên tool, mô tả chức năng, định nghĩa tham số và kết quả gọi; vì vậy dịch vụ MCP (Model Context Protocol), connector, cấu hình skill và thông tin đăng ký tool đều có thể trở thành lối vào can thiệp. Kẻ tấn công vừa có thể thao túng mô tả tool và nội dung trả về để ảnh hưởng tới việc chọn tool và dựng tham số, vừa có thể cài thêm thao tác phụ vào phần hiện thực hay bản cập nhật của tool. **Ở đây có hai lớp rủi ro: hiểu biết của Agent về công dụng của tool bị dẫn sai, và hành vi thực tế của tool lệch khỏi phần nó khai báo.**

*   **Lời gọi nghiệp vụ động và truy cập mạng**

Agent sinh ra URL đích, điều kiện truy vấn, thân request và thứ tự thao tác trong lúc chạy, rồi lấy kết quả trả về của hệ này làm input cho hệ khác. Nếu dịch vụ hạ nguồn thiếu kiểm tra, kẻ tấn công có thể lợi dụng các tham số động đó để kích hoạt SSRF, SQL injection hay lạm dụng logic nghiệp vụ. Nhiều dịch vụ vốn tách rời nhau còn có thể bị ghép thành một đường đọc, chuyển tiếp và gửi dữ liệu ra ngoài, **khiến Agent cùng tool của nó trở thành điểm phát request vượt qua ranh giới trong–ngoài mạng.**

*   **Ranh giới bàn giao kết quả**

Output của Agent vừa có thể được người dùng đọc, vừa có thể được trình duyệt render, được phát hành thành file, hoặc chuyển thẳng thành request email, upload và sửa nghiệp vụ. **Một khi output đi vào những component có thể sinh tác dụng phụ, nó có thể kích hoạt việc diễn giải nội dung nguy hiểm, nạp tài nguyên bên ngoài hay gửi dữ liệu nhạy cảm ra ngoài.**

*   **Cơ chế retry và đồng thời trong thực thi tự chủ**

Tìm kiếm liên tục, retry tự động, uỷ nhiệm đệ quy và gọi song song vốn dùng để nâng tỉ lệ hoàn thành task, **nhưng cũng có thể bị lợi dụng làm lối khuếch đại tài nguyên.** Kẻ tấn công không cần khiến một request nào đó lớn bất thường; chỉ cần liên tục tạo ra công việc bổ sung, phản hồi thất bại hay phụ thuộc mới, là đã có thể khiến task tiêu thụ token, API trả phí, khe đồng thời và dung lượng dịch vụ hạ nguồn trong thời gian dài. Loại tấn công **Denial of Wallet (DoW)** cùng rủi ro khả dụng này xảy ra trong cả quá trình thực thi; **ngay cả khi mỗi lời gọi đều đúng giới hạn interface và câu trả lời cuối vẫn bình thường, mức tiêu hao tích luỹ vẫn có thể vượt xa chi phí hợp lý của task.**

## 14.2.3 Hướng phòng thủ

Để ứng phó với rủi ro bảo mật ứng dụng của AI Agent, cần đồng thời cân nhắc **tấn công bên ngoài ảnh hưởng tới Agent ra sao**, và **hành vi của Agent gây ra ảnh hưởng gì cho các hệ thống khác.** Vế trước đòi hỏi bảo vệ lối vào ứng dụng, việc xử lý nội dung bên ngoài và chuỗi tool, để giảm rủi ro Agent bị tấn công và thao túng. Vế sau đòi hỏi thiết lập ranh giới thực thi rõ ràng, để kịp phát hiện và giới hạn ảnh hưởng khi xuất hiện hành vi ngoài dự kiến.

*   **Ngăn kẻ tấn công bên ngoài tấn công và thao túng Agent.**

Trước hết, phải tiếp nối các thực hành bảo mật ứng dụng truyền thống: làm tốt việc kiểm tra interface, review code, quản trị dependency và vá lỗ hổng, đồng thời đưa dịch vụ MCP, connector và cấu hình skill vào diện quản lý. **Phần hiện thực, mô tả, định nghĩa tham số và thay đổi version của tool đều có thể làm đổi hành vi Agent**, nên phải đánh giá khi tích hợp và khi cập nhật. Kiểm tra bảo mật code và phân tích thành phần giúp phát hiện khiếm khuyết, **nhưng việc tool có cài thêm thao tác phụ không, hành vi thực tế có khớp phần khai báo không, thì vẫn phải thẩm định và kiểm chứng.**

Với nội dung bên ngoài như trang web, email, tài liệu và giá trị trả về của tool, phải **giữ lại thông tin nguồn và xử lý tách rời với chỉ dẫn task**, tránh để dữ liệu bên ngoài sau khi qua tóm tắt, thuật lại hay nhiều lượt gọi lại bị coi là một yêu cầu thực thi mới. Có thể kết hợp AI guardrail để nhận diện prompt injection, mô tả tool độc hại và lời gọi đáng ngờ; kiểm tra đích, tham số và phạm vi nghiệp vụ của thao tác thực tế dựa trên task gốc, để **nội dung bị ô nhiễm khó chuyển hoá thẳng thành hành động nghiệp vụ.**

Đồng thời, cần giới hạn khả năng kẻ tấn công kích hoạt task hàng loạt, thăm dò lặp lại và ngốn tài nguyên dịch vụ: đặt ràng buộc cho kích thước request, tần suất gọi và các thao tác chi phí cao, và áp dụng giới hạn tốc độ hay chặn theo hành vi bất thường. Lối vào từ Internet công cộng có thể kết hợp WAF và chống DDoS; các tương tác rủi ro cao hướng tới người dùng có thể thêm quản lý Bot, captcha để tăng chi phí lạm dụng tự động. Còn các lời gọi API bình thường giữa Agent và hệ thống thì nên ràng buộc bằng kiểm tra hành vi và quản lý quota phù hợp.

*   **Phát hiện và giới hạn ảnh hưởng ngoài dự kiến mà Agent gây ra cho hệ thống nội bộ và bên ngoài.**

Dù hành vi ngoài dự kiến đến từ việc bị dụ dỗ bên ngoài hay từ sai lệch khi thực thi task, **nó đều phải chịu ràng buộc của luật thực thi ứng dụng.** Phải làm rõ theo nhu cầu nghiệp vụ: Agent truy cập được những đích nào, thực hiện được những thao tác nào, xử lý được phạm vi dữ liệu nào; và **kiểm tra trước khi request thực sự phát ra hay trước khi commit nghiệp vụ.** Truy cập database thì dùng truy vấn tham số hoá; interface nghiệp vụ thì kiểm tra đối tượng thao tác, số lượng và trạng thái; request mạng thì kiểm tra địa chỉ kết nối thực tế, redirect và đích gửi hộ của dịch vụ trung gian; còn output thì phải hoàn tất xử lý an toàn và kiểm tra dữ liệu nhạy cảm trước khi render, gửi hay phát hành. Với các thao tác ảnh hưởng lớn, còn phải đặt khâu xác nhận theo luật nghiệp vụ, và **bảo đảm nội dung xác nhận khớp với phần thực thi thực tế.**

Song song với việc giới hạn phạm vi thực thi, cần liên tục quan sát hành vi thực tế của Agent. Hãy liên kết task, lời gọi tool và kết quả nghiệp vụ với bản ghi giao tiếp đông–tây và bắc–nam; chú ý các tình huống thăm dò xuyên dịch vụ, duyệt interface bất thường, đọc hàng loạt, gửi dữ liệu ra ngoài ngoài dự kiến, và việc liên tục đổi đích sau nhiều lần thất bại. Giới hạn truy cập mạng có thể triển khai qua cloud firewall và kiểm soát outbound; việc phát hiện bất thường có thể kết hợp NDR để audit nghiệp vụ; còn việc kiểm tra dữ liệu nhạy cảm đi ra ngoài thì kết hợp DLP. **Kết quả phát hiện phải liên động với gateway, firewall và tầng orchestration task** để kịp chặn request, tạm dừng task và ngừng các lời gọi tiếp theo; với giao tiếp đã mã hoá và các thao tác nội bộ trong SaaS thì còn phải bù thêm log phía ứng dụng, **tránh chỉ dựa vào traffic mạng để phán đoán.**

# 14.3 Bảo vệ an toàn model

## 14.3.1 Bối cảnh và thách thức

Khi công nghệ mô hình lớn thẩm thấu ngày càng nhanh vào ứng dụng AI-native, AI Agent — với tư cách vật mang cốt lõi có năng lực cảm nhận, ra quyết định và thực thi — đang được dùng rộng rãi trong các bối cảnh tương tác trực tiếp với người dùng như chăm sóc khách hàng thông minh, trợ lý ảo, hỏi–đáp tri thức. Tuy nhiên, tính mở, tính tự chủ cùng đặc tính input–output đa phương thức của nó cũng **mở rộng đáng kể diện rủi ro của hệ thống.** AI Agent không chỉ phải hiểu chỉ dẫn ngôn ngữ tự nhiên của người dùng, mà còn phải xử lý input đa phương thức, truy cập kho tri thức bên ngoài, gọi interface hàm, thậm chí sinh nội dung có cấu trúc hay thực hiện thao tác. Chuỗi hành vi này khiến nó **trở thành lối vào then chốt cho việc thâm nhập tấn công, mất kiểm soát nội dung và rò rỉ dữ liệu.** Vì vậy, xây dựng cơ chế phòng thủ hạt mịn, phủ toàn quy trình theo đúng đặc điểm vận hành của AI Agent là tiền đề cốt lõi để ứng dụng mô hình lớn triển khai một cách đáng tin cậy.

Việc bảo vệ ở tầng ứng dụng Web truyền thống chủ yếu gồm bảo mật ứng dụng Web, bảo mật API và chống crawler; còn các mối đe doạ ứng dụng cốt lõi mà Agent đối mặt đã vượt phạm vi ứng dụng Web truyền thống, và cần ứng phó một cách hệ thống với ba nhóm bối cảnh rủi ro cao liên quan tới bảo mật model:

*   **Mối đe doạ ở tầng input:** gồm tấn công bằng mẫu đối kháng (ví dụ tinh chỉnh hình ảnh/âm thanh để dụ Agent đa phương thức phán đoán sai), các biến thể của prompt injection (như tấn công chia cắt context, tấn công gây nhiễu ngữ nghĩa), cùng việc kích hoạt lỗ hổng chuỗi cung ứng qua file độc hại (như steganography trong PDF);

*   **Mối đe doạ ở tầng suy luận:** bao gồm mất kiểm soát đạo đức do jailbreak model, rò rỉ tài sản dữ liệu do việc cào có định hướng kho tri thức RAG (Prompt Crawling), và việc chiếm quyền gọi hàm (như sửa tham số API để thực hiện thao tác chưa được uỷ quyền);

*   **Mối đe doạ ở tầng output:** liên quan tới nội dung lừa đảo do model sinh (như giả mạo thông báo ngân hàng), ảo giác model gây dẫn dắt chết người trong bối cảnh y tế/tài chính, cùng việc cấy chỉ dẫn ẩn vào nội dung AIGC bằng steganography.

## 14.3.2 Cơ chế phòng thủ

Để ứng phó với các thách thức trên, các cơ chế phòng thủ native cho mô hình lớn (như **AI guardrail**) đã ra đời, đóng vai trò **"tầng trung gian đáng tin"** nối logic ứng dụng với năng lực mô hình lớn, cung cấp một hệ phòng thủ trọn gói phủ toàn chuỗi input, suy luận và output. Từ góc độ bảo vệ ứng dụng AI, năng lực cốt lõi phủ chín chiều:

![image](../assets/imgs/chapter-14/image-002.png)

*   **Kiểm duyệt tuân thủ nội dung:** trong quá trình hội thoại liên tục với người dùng, Agent có thể sinh nội dung vi phạm như chính trị nhạy cảm, thô tục, phân biệt đối xử do bị context dẫn dắt hay do trôi ngữ nghĩa. Cơ chế guardrail dựa trên engine kiểm duyệt bằng mô hình lớn, quét nội dung thời gian thực trước khi Agent sinh phản hồi, nhận diện chính xác cả vi phạm lộ liễu lẫn cách diễn đạt ẩn dụ (biến thể, đồng âm, thẩm thấu ý thức hệ), bảo đảm output luôn phù hợp pháp luật và giá trị chủ đạo của xã hội.

*   **Phòng thủ tấn công qua prompt:** kẻ tấn công thường dùng các prompt được thiết kế kỹ (như "Ignore previous instructions") để dụ Agent vòng qua ràng buộc hệ thống, thực hiện "jailbreak" hay ghi đè chỉ dẫn. Bằng cách dựng kiến trúc lai nhiều model kết hợp phát hiện đồng bộ và phân tích bất đồng bộ, ta có thể nhận diện ngay prompt đối kháng khi Agent nhận input, chặn đường tiêm chỉ dẫn độc hại, giữ hành vi Agent luôn trong ranh giới policy định trước.

*   **Bảo vệ thông tin nhạy cảm:** trong lúc tương tác với Agent, người dùng có thể vô tình nhập PII (thông tin định danh cá nhân), khoá doanh nghiệp, số thẻ ngân hàng cùng các dữ liệu nhạy cảm khác. Cần nhận diện chính xác và ẩn danh những dữ liệu đó, **ngăn chúng bị Agent ghi nhớ, ghi lại hay vô tình rò rỉ trong các phản hồi sau**, đáp ứng yêu cầu tuân thủ như GDPR, Luật An ninh mạng.

*   **Phát hiện file độc hại:** khi Agent hỗ trợ upload tài liệu (như phân tích CV, hỏi–đáp hợp đồng), kẻ tấn công có thể nhúng macro virus, script thực thi hay chỉ dẫn ẩn vào PDF, PPT, DOC. Bằng việc parse sâu định dạng file, ta phát hiện và làm sạch code tấn công lồng nhau, **chặn rủi ro Agent bị thao túng ngay từ nguồn input.**

*   **Chặn URL độc hại:** khi Agent thực hiện tìm kiếm web, truy hồi tri thức hay gọi API bên ngoài, nó có thể parse hoặc sinh ra link lừa đảo, địa chỉ website độc hại. Bằng việc đánh giá rủi ro thời gian thực và khớp blacklist cho mọi URL, ta ngăn Agent trở thành bàn đạp tấn công hay dụ người dùng truy cập site rủi ro cao, bảo vệ người dùng cuối.

*   **Cơ chế chống cào qua prompt:** kẻ tấn công có thể dựng một chuỗi prompt cụ thể để liên tục thăm dò nội dung kho tri thức RAG hay dữ liệu huấn luyện model qua Agent — tức tấn công Prompt Crawling. Bằng phân tích hành vi động và nhận dạng mẫu, ta nhận diện tần suất truy vấn và ý định ngữ nghĩa bất thường, kịp chặn rủi ro tài sản dữ liệu bị đánh cắp một cách hệ thống.

*   **Phát hiện jailbreak model:** qua một số input đặc thù, kẻ tấn công có thể phá vỡ cơ chế an toàn định trước của mô hình lớn, khiến nó sinh ra nội dung trái đạo đức, pháp luật hay giá trị thông thường. Để ứng phó với kiểu tấn công này, ngoài việc triển khai phòng thủ prompt ở khâu input phía trước, ta còn phát hiện và phán định jailbreak trên kết quả output của model, tạo nên sự bảo đảm toàn chuỗi, nhiều khâu.

*   **Kìm chế ảo giác model:** do thiếu cơ chế kiểm chứng với thế giới thật, Agent dễ sinh "ảo giác" trong lúc suy luận, xuất ra thông tin trông hợp lý nhưng sai sự thật (như bịa quy định, lời khuyên y tế sai). Bằng việc đối chiếu tính nhất quán của thông tin context và cơ chế đối chiếu tri thức bên ngoài, ta kiểm chứng độ tin cậy của output Agent tại các nút quyết định then chốt, giảm đáng kể xác suất phán đoán sai trong các lĩnh vực rủi ro cao.

*   **Đánh dấu watermark số:** khi Agent sinh hình ảnh và nội dung khác, guardrail an toàn sẽ tự động chèn watermark số nhìn thấy được hay không nhìn thấy được theo *Quy định về đánh dấu nội dung tổng hợp do trí tuệ nhân tạo tạo ra*, để nội dung AIGC **truy nguyên được, audit được**, ngăn việc lan truyền thông tin giả và tranh chấp bản quyền — thực sự làm được "sinh ra có dấu vết, trách nhiệm truy được".

Lấy AI Guardrail của Alibaba Cloud làm ví dụ: dựa trên engine kiểm duyệt bằng mô hình lớn tự phát triển, nó không chỉ phủ toàn diện các mối đe doạ đã biết, mà còn dựa vào nền công nghệ mô hình Tongyi để liên tục tiến hoá năng lực kiểm duyệt đa phương thức, hỗ trợ xử lý mức đồng thời cao với độ trễ mili-giây, cân bằng giữa an toàn và tính khả dụng. Đồng thời, thông qua cấu hình policy trực quan, whitelist/blacklist tuỳ biến và điều chỉnh ngưỡng linh hoạt, nó đáp ứng được nhu cầu tuân thủ khác biệt của khách hàng ở các ngành khác nhau.

## 14.3.3 Tương lai của bảo mật model

**Model an toàn tổng quát khó nhận diện được rủi ro nghiệp vụ riêng của từng doanh nghiệp**; các ngành như tài chính, chăm sóc khách hàng, tìm kiếm đều đối mặt với thách thức tuân thủ mang tính tuỳ biến trong ứng dụng AI của mình. Doanh nghiệp cần những **model kiểm duyệt "nghe hiểu được ngôn ngữ nghiệp vụ"** để nhận diện các rủi ro đặc thù.

**Agent phát hiện tuỳ biến** có thể đáp ứng nhu cầu nhận diện rủi ro nghiệp vụ đặc thù của khách hàng ở các ngành khác nhau. Đây là một module phát hiện thông minh hỗ trợ người dùng tự định nghĩa nhãn và prompt, có thể nhận diện chính xác các rủi ro nghiệp vụ đặc thù theo ngành, theo bối cảnh. Nó đưa vào các model thuật toán chuyên dụng và hỗ trợ cấu hình linh hoạt cho nhiều ngành, nhiều bối cảnh — qua đó **nâng cấp năng lực phát hiện an toàn từ tổng quát lên chuyên biệt.**

Trong tương lai, khi năng lực Agent tiếp tục tiến hoá, AI guardrail native cũng phải nâng cấp đồng bộ, hướng tới bảo đảm tính an toàn và kiểm soát được của nó trong các bối cảnh phức tạp, tạo phòng tuyến vững chắc cho sự phát triển bền vững của ứng dụng AI-native.

# 14.4 Bảo vệ an toàn dữ liệu

## 14.4.1 Bối cảnh và thách thức

Quá trình ứng dụng mô hình lớn trải qua sáu giai đoạn dữ liệu: thu thập và tiếp nhận dữ liệu, truyền dữ liệu, lưu trữ dữ liệu, truy cập dữ liệu, sử dụng dữ liệu và xoá dữ liệu. Cốt lõi là **bảo đảm an toàn và ổn định cho nhiều loại dữ liệu mà nghiệp vụ dùng trong quá trình đó**: dữ liệu huấn luyện, prompt, kho tri thức, dữ liệu đa phương thức và log.

![image](../assets/imgs/chapter-14/image-003.png)

Việc ứng dụng và sử dụng mô hình lớn trên cloud có ba nhóm rủi ro an toàn dữ liệu sau:

*   **Rủi ro dữ liệu trong huấn luyện model**

Trước hết, trong quá trình huấn luyện model, người dùng đối mặt với các yếu tố như dữ liệu gốc bị đầu độc, việc làm sạch dữ liệu chưa hoàn thiện, lưu trữ dữ liệu không an toàn — những thứ này gây ra rủi ro an toàn cho model và ứng dụng trong quá trình huấn luyện cũng như sử dụng. Kế đến, khách hàng doanh nghiệp quan tâm tới việc mã hoá và chống tấn công cho bí mật thương mại trong lúc truyền và lưu trữ, cùng việc giới hạn quyền hạn trong quá trình ứng dụng xử lý. Với người dùng cá nhân, phải bảo đảm quyền kiểm soát và tính an toàn với dữ liệu cá nhân của họ, bảo đảm sự đồng ý có hiểu biết đối với việc xử lý dữ liệu. Ngoài ra, cần kiện toàn và hoàn thiện cơ chế an toàn model, **ngăn việc suy ngược ra dữ liệu gốc từ output của model** dẫn tới rò rỉ dữ liệu nhạy cảm.

*   **Xây dựng model: khả năng kiểm soát của người dùng với dữ liệu**

Người dùng cần hiểu và kiểm soát được tình hình model sử dụng dữ liệu, tránh để dữ liệu người dùng bị dùng cho việc huấn luyện model khi chưa được uỷ quyền, làm phá vỡ trạng thái bí mật của dữ liệu và pha loãng giá trị thương mại. Sự phụ thuộc của AI truyền thống vào dữ liệu hành vi người dùng đã khiến quan niệm "dữ liệu ứng dụng sẽ bị dùng cho model" ăn sâu, thậm chí tiến hoá thành sự dè chừng của người dùng với các ứng dụng thông minh. Người dùng lo rằng dữ liệu họ upload hay dữ liệu tương tác với model — đặc biệt là bí mật thương mại của doanh nghiệp — bị công khai khi chưa được uỷ quyền, hoặc bị dùng để huấn luyện lần hai, biến thành ngữ liệu nâng cao năng lực model cho nhà cung cấp.

*   **Ứng dụng model: thao tác audit được và trách nhiệm truy nguyên được**

Việc dữ liệu người dùng bị ứng dụng model xử lý đòi hỏi **các bên phải thoả thuận quyền–trách nhiệm trước, và audit cùng truy nguyên được sau đó.** Trong tình huống xử lý dữ liệu model phức tạp, rất dễ xảy ra rò rỉ dữ liệu nhạy cảm; vì vậy việc xác định quyền–trách nhiệm an toàn dữ liệu và phán định trách nhiệm của từng bên đặt ra thách thức mới, khiến các nguyên tắc "ai nắm giữ, người đó chịu trách nhiệm", "ai sử dụng, người đó chịu trách nhiệm", "ai vận hành, người đó chịu trách nhiệm" trở nên khó thực hiện.

Một mặt, cần ràng buộc trước về nguyên tắc đối với trách nhiệm mà mỗi bên phải gánh khi rò rỉ hay lạm dụng dữ liệu. Mặt khác, khi gọi model để orchestration ứng dụng, cần ghi lại và quản lý quá trình cùng thông tin về quyền của nhiều bên, để về sau tìm được đúng nguồn gốc vấn đề và mắt xích yếu về an toàn, và để các bên liên quan đòi quyền lợi. Ngoài ra, **quá trình này khó có thể do chính nhà cung cấp dịch vụ model tự chứng minh**, nên cần cơ chế quản lý minh bạch và kiểm chứng tốt hơn để làm được việc audit thao tác.

![image](../assets/imgs/chapter-14/image-004.png)

## 14.4.2 Khung phòng thủ

Để ứng phó với các thách thức an toàn dữ liệu nêu trên và giảm mối lo của người dùng về an toàn dữ liệu trên nền tảng dịch vụ mô hình lớn, cần dựa trên cơ chế và năng lực phòng thủ nền tảng của cloud, **lấy dữ liệu của dịch vụ mô hình lớn làm đối tượng bảo vệ trọng tâm**, xoay quanh nhu cầu bảo đảm an toàn dữ liệu trong toàn vòng đời — thu thập, truyền, lưu trữ, truy cập, xử lý, xoá — để phủ mọi khâu bảo vệ an toàn dữ liệu của dịch vụ mô hình lớn. Từ đó xây năng lực phòng thủ **"nền tảng public cloud + nền tảng dịch vụ mô hình lớn"**, và kiểm chứng tính tuân thủ của chính mình qua audit nghiêm ngặt của tổ chức uy tín bên thứ ba, tạo nên hệ bảo đảm an toàn dữ liệu **"nền tảng đáng tin, đường truyền đáng tin, dữ liệu kiểm soát được, tự chủ chọn được, thao tác audit được, trách nhiệm truy được".**

![image](../assets/imgs/chapter-14/image-005.png)

## 14.4.3 Xây dựng bảo đảm an toàn cho toàn vòng đời của toàn bộ dữ liệu

Xây dựng bảo đảm an toàn cho toàn vòng đời của toàn bộ dữ liệu hướng tới mô hình lớn và Agent: bằng cách tăng cường các biện pháp kỹ thuật an toàn cho việc thu thập, truyền, lưu trữ, truy cập, xử lý và xoá dữ liệu trong suy luận model, fine-tune và RAG; tích hợp năng lực của nhiều sản phẩm bảo mật cloud-native như bảo mật dữ liệu, dịch vụ quản lý khoá (KMS), an toàn nội dung và kiểm soát truy cập (RAM) — nhằm đáp ứng nhu cầu bảo vệ dữ liệu AI linh hoạt, cấu hình được và mở rộng được của các khách hàng mục tiêu có yêu cầu an toàn dữ liệu cao.

### 1. Thu thập dữ liệu

#### (1) Nguồn dữ liệu

Trong các bối cảnh phổ biến khi người dùng dùng nền tảng dịch vụ mô hình lớn — suy luận model, RAG, fine-tune — chủ yếu liên quan tới các nguồn dữ liệu sau:

##### a. Dữ liệu do người dùng upload

*   **Dữ liệu huấn luyện và kiểm thử model:** dữ liệu người dùng upload lên nền tảng cloud, dùng cho việc huấn luyện model (gồm dữ liệu tiền huấn luyện tiếp tục và fine-tune, cùng bộ dữ liệu đánh giá). Nhóm này do người dùng chuẩn bị và upload lên nền tảng Bailian; đồng thời Bailian cũng cung cấp các năng lực gia công thêm như làm sạch dữ liệu, tăng cường dữ liệu.

*   **Dữ liệu kho tri thức:** lấy nền tảng Alibaba Cloud Bailian làm ví dụ, nó cung cấp năng lực RAG và ứng dụng Agent; ở đây liên quan tới các tài liệu phi cấu trúc mà người dùng upload (pdf, doc, pptx, word, md…), cùng dữ liệu trung gian và dữ liệu vector hoá mà nền tảng Bailian sinh ra sau khi gia công để phù hợp cho RAG. Nói gọn: tài liệu gốc upload lên, kết quả trung gian sau khi parse, và dữ liệu vector hoá tiện cho việc truy hồi RAG.

*   **Dữ liệu đa phương thức:** lấy nền tảng Alibaba Cloud Bailian làm ví dụ, nó cung cấp các model đa phương thức như model hiểu thị giác VL, model sinh ảnh Wanxiang, model ASR, model TTS — liên quan tới việc upload và xử lý dữ liệu đa phương thức như hình ảnh, âm thanh, video.

##### b. File model và dữ liệu suy luận

*   **File tham số model sau khi fine-tune:** lấy nền tảng Alibaba Cloud Bailian làm ví dụ, nó cung cấp năng lực fine-tune và huấn luyện model; file tham số model sinh ra sau khi huấn luyện các model khả dụng trên Bailian bằng dữ liệu huấn luyện và kiểm thử mà người dùng uỷ quyền.

*   **Dữ liệu Prompt:** gồm Prompt gốc, câu trả lời mà mô hình lớn sinh ra, log suy luận và các dữ liệu khác.

##### c. Dữ liệu log vận hành

*   **Dữ liệu quan sát được từ log và Tracing:** lấy nền tảng Alibaba Cloud Bailian làm ví dụ, trong quá trình chạy dịch vụ ứng dụng và model có các log suy luận, log ứng dụng và log audit thao tác; nền tảng Bailian cũng cung cấp năng lực Tracing cho ứng dụng mô hình lớn, liên quan tới việc lưu trữ log quan sát và log Tracing.

#### (2) Phân loại dữ liệu

Phân loại – phân cấp dữ liệu là nền của bảo mật và quản trị dữ liệu; người dùng cần nhận diện loại và cấp của các tài sản dữ liệu huấn luyện, kiểm thử và kho tri thức đang lưu trong các tài nguyên lưu trữ dưới tài khoản cloud của mình, đồng thời áp dụng chính sách an toàn và quản lý rủi ro tương ứng cho việc bảo vệ dữ liệu nhạy cảm, giảm rủi ro rò rỉ.

Lấy Data Security Center của Alibaba Cloud làm ví dụ: năng lực phân loại – phân cấp mà nó cung cấp sẽ nhận diện tính nhạy cảm của dữ liệu từ góc độ quản lý quyền hạn, và chia dữ liệu thành 4 cấp an toàn S1, S2, S3, S4 dựa trên nhiều góc độ như giá trị dữ liệu, tính nhạy cảm, tuân thủ dữ liệu và nhu cầu nghiệp vụ. Nó hỗ trợ nhận diện cả dữ liệu có cấu trúc lẫn phi cấu trúc, và cung cấp template dựng sẵn, model nhận diện, năng lực nhận diện đặc trưng; các template dựng sẵn phủ nhiều bối cảnh ngành như Internet tổng quát, ngành tài chính, ngành điện lực, xe kết nối và các bối cảnh bảo đảm trọng điểm. Template phân loại – phân cấp chủ yếu dựa trên (nhưng không giới hạn ở) *GB/T 35273-2020 Quy phạm an toàn thông tin cá nhân và model nhận diện dữ liệu tổng quát*, *JRT 0197-2020 Hướng dẫn phân cấp an toàn dữ liệu tài chính*, *YDT3751-2020 Yêu cầu kỹ thuật an toàn dữ liệu dịch vụ thông tin xe kết nối*, cùng thực tiễn tốt nhất về quản trị dữ liệu của Alibaba. Nó cũng hỗ trợ template phân loại – phân cấp do người dùng tự định nghĩa, và AI tự sinh policy an toàn.

Trong thực tế, do quy định của các quốc gia, khu vực không giống nhau, và môi trường người dùng thực tế có rất nhiều dữ liệu nhạy cảm cao mang tính đặc thù, người dùng thường phải kết hợp nhu cầu của mình để liên tục cập nhật, bổ sung trên nền các yêu cầu của tiêu chuẩn quốc gia và ngành. Vì dữ liệu nhạy cảm cao của người dùng có thể **không nằm trong phạm vi loại được liệt kê ở phụ lục của văn bản pháp quy**, hoặc tuy nằm trong phạm vi loại nhưng lại là một hình thái dữ liệu hoàn toàn mới — lúc này model luật dựng sẵn theo tiêu chuẩn quốc gia trong phương án truyền thống khó phủ được theo kiểu "mỗi khách hàng một kiểu". Ta sẽ thấy cùng một bộ thuật toán phát hiện khó thích ứng được với những khác biệt tinh tế về định nghĩa loại và thang đo giữa các người dùng; **lúc này model AI có thể tự thích ứng dựa trên dữ liệu thực tế hay phạm vi định nghĩa loại mà người dùng chỉnh.** Với hãng bảo mật, điều này cũng giúp thoát khỏi mô hình "bán nhân lực" kiểu tuỳ chỉnh – fine-tune cho từng khách. **Đó là phần cổ tức công nghệ mà AI mang lại cho ngành bảo mật trong bối cảnh mới.**

#### (3) Ẩn danh dữ liệu

Với dữ liệu huấn luyện, kiểm thử và kho tri thức của người dùng mô hình lớn, phải bảo đảm chúng không chứa thông tin nhạy cảm ảnh hưởng tới chất lượng trả lời của mô hình lớn, cùng các yêu cầu tuân thủ về an toàn dữ liệu nhạy cảm như *Luật Bảo vệ thông tin cá nhân*. Vì vậy, **khi thu thập phải ẩn danh dữ liệu.**

Lấy sản phẩm bảo mật dữ liệu của Alibaba Cloud làm ví dụ: nó cung cấp năng lực ẩn danh dữ liệu, phủ được các nguồn dữ liệu đa phương thức (hình ảnh, file, dữ liệu có cấu trúc…), hỗ trợ parse hơn 900 loại file, gồm: tài liệu văn bản thông dụng (txt, log…), tài liệu văn phòng (word, excel, PowerPoint…), file nén lồng nhau (zip, rar…), file code, file thiết kế kỹ thuật… Nó hỗ trợ nhận diện các loại hình ảnh nhạy cảm (CMND, bằng lái) và OCR chữ trong ảnh. Nó cũng hỗ trợ luật nhận diện dữ liệu nhạy cảm do khách hàng tự định nghĩa, cung cấp năng lực nhận diện dữ liệu nhạy cảm dựa trên từ khoá, thông tin Meta, biểu thức chính quy và tên cột bảng dữ liệu; và tích hợp sẵn nhiều thuật toán ẩn danh thông dụng như hash, xáo trộn, mã hoá, che và thay thế.

#### (4) Khử độc dữ liệu

Để nâng thêm chất lượng dữ liệu huấn luyện – kiểm thử, kho tri thức và việc fine-tune model của người dùng tuỳ biến, đồng thời phòng tấn công đầu độc bộ dữ liệu model, cần giám sát, phát hiện và chặn thời gian thực nhiều loại nội dung vi phạm (khiêu dâm, chính trị nhạy cảm, bạo lực, phi pháp…) trong các tài nguyên lưu trữ của mình. Với những bên cung cấp ứng dụng mô hình lớn cho đông đảo người dùng, nếu có nhu cầu bảo vệ an toàn với phần nhập liệu của con người, có thể tích hợp cơ chế guardrail cho câu hỏi để nhận diện ý định độc hại; sản phẩm bảo mật dữ liệu cung cấp năng lực phát hiện rủi ro nội dung phủ hình ảnh, video, giọng nói, văn bản cùng các phương tiện khác, giúp người dùng phát hiện các nội dung hay yếu tố rủi ro như khủng bố, khiêu dâm, bạo lực, kinh dị, nhạy cảm, cấm–hạn chế, quảng cáo, lăng mạ, và chặn hoặc làm sạch nội dung đó.

### 2. Truyền dữ liệu

#### (1) Cung cấp mã hoá mạng riêng cho việc truyền dữ liệu

Việc truy cập dữ liệu nên dùng các năng lực như Alibaba Cloud Private Link cùng mã hoá mạng VPC, để người dùng truy cập dữ liệu huấn luyện, fine-tune, suy luận đã lưu qua mạng chuyên dụng/riêng. Kế đến, cần cung cấp giám sát và audit toàn diện cho traffic mạng VPC, để giám sát thời gian thực và chặn hành vi độc hại với các lời gọi mạng bất thường.

#### (2) Mã hoá suy luận cho prompt

Với dịch vụ suy luận model (gọi model thuần, ứng dụng RAG, ứng dụng Agent), cần cung cấp phương án mã hoá toàn chuỗi. Phải bảo đảm **prompt input và câu trả lời model sinh ra không nhìn thấy được trong suốt chặng đường.** Việc giải mã chỉ xảy ra ở hai chỗ: khi recall mảnh RAG theo prompt input, và khi mô hình lớn sinh câu trả lời từ prompt. Có thể theo nguyên tắc tối thiểu cần thiết mà giải mã và dùng prompt, và **quá trình đó chỉ tồn tại thoáng qua trong bộ nhớ, không lưu bền vững ở bất kỳ đâu.**

Trong thực tế cần lưu ý: **phương án chỉ dựa vào mã hoá prompt cộng với năng lực từ chối trả lời của bản thân model để ngăn distillation model và các cách rò rỉ dữ liệu khác là có khiếm khuyết bẩm sinh.** Năng lực từ chối trả lời của model sinh tạo trước cùng một prompt tấn công là **không ổn định**, và có xác suất nhất định sẽ thất bại trong việc tuân thủ chỉ dẫn. Mặt khác, các kiểu tấn công mới đã biết còn bao gồm việc dùng token đã mã hoá do model kích thước lớn trả về để hỏi model cùng dòng nhưng kích thước nhỏ, năng lực an toàn yếu hơn, nhằm vòng qua năng lực từ chối của model. **Vì vậy các hãng mô hình lớn thường cần tới năng lực phòng thủ chuyên nghiệp của bên thứ ba.**

#### (3) Mã hoá giao thức ứng dụng

Về giao thức mạng an toàn, để ngăn các cách tấn công mạng như man-in-the-middle, sniffing lấy được dữ liệu giữa người dùng với dịch vụ mô hình lớn, có thể dùng giao thức HTTPS ở tầng ứng dụng để truyền dữ liệu mã hoá an toàn, cùng giao thức bảo mật tầng truyền tải (TLS 1.3, 1.2, 1.1), nhằm bảo đảm việc truyền dữ liệu giữa dịch vụ cloud và người dùng. TLS cung cấp xác thực định danh nghiêm ngặt, bảo đảm tính riêng tư và toàn vẹn của message, và phát hiện hiệu quả các hành vi sửa đổi, chặn bắt và giả mạo message.

### 3. Lưu trữ dữ liệu

#### (1) Cô lập lưu trữ

Để ngăn rò rỉ dữ liệu, đánh cắp sở hữu trí tuệ, và việc dữ liệu nhạy cảm bị lợi dụng ác ý, dữ liệu liên quan tới mô hình lớn của người dùng **phải được lưu và dùng độc lập dưới chính tài khoản cloud của người dùng.**

Lấy Alibaba Cloud làm ví dụ: nền tảng cloud bảo đảm dữ liệu người dùng thuộc quyền sở hữu hoàn toàn của họ; dữ liệu người dùng trong suy luận model, huấn luyện và ứng dụng RAG đều hỗ trợ cách triển khai lưu trữ bên ngoài, hỗ trợ đấu nối OSS, ES, ADB, SLS. Dữ liệu thu thập được tiếp nhận vào các instance database thuộc về khách hàng; **người dùng kiểm soát 100% dữ liệu và tự quản lý.** Các dịch vụ lưu trữ của Alibaba Cloud — ADB (dữ liệu vector), ES (dữ liệu kiểm thử, bộ nhớ dài hạn), SLS (lịch sử phiên, log audit, dữ liệu hệ quan sát), NAS (file model), OSS (tập huấn luyện, kiểm thử, kho tri thức) — đều đạt được sự cô lập an toàn theo tenant.

Đồng thời, dịch vụ nền tảng mô hình lớn chạy trên môi trường thực thi ảo hoá của cloud, và tầng ảo hoá hiện thực sự cô lập an toàn giữa các không gian đĩa khác nhau. Ví dụ, phần lưu trữ cục bộ của môi trường suy luận đạt được sự cô lập ở mức ảo hoá qua secure container, nhờ đó bảo đảm rằng trong khâu suy luận, dịch vụ thực thi request của người dùng chỉ truy cập được phần không gian đĩa được cấp cho nó.

#### (2) Mã hoá lưu trữ

Lấy nền tảng dịch vụ mô hình lớn Bailian của Alibaba Cloud làm ví dụ:

*   **Mã hoá bộ dữ liệu fine-tune, kho tri thức, dữ liệu đa phương thức:** các file bộ dữ liệu kiểm thử, huấn luyện và kho tri thức của nền tảng Bailian hỗ trợ lưu trong object storage OSS bên ngoài của người dùng; OSS hỗ trợ năng lực mã hoá lưu trữ ở cả phía server lẫn phía client. Ở phía server, hỗ trợ dùng khoá dịch vụ và khoá do khách hàng tự chọn làm khoá chính để mã hoá dữ liệu. Ở phía client, hỗ trợ dùng khoá do khách hàng tự quản lý để mã hoá, và cũng hỗ trợ dùng khoá chính trong KMS của khách hàng để mã hoá phía client.

*   **Mã hoá file model:** NAS hỗ trợ dùng khoá do dịch vụ quản lý và khoá do người dùng tự chọn làm khoá chính để mã hoá dữ liệu.

*   **Mã hoá dữ liệu vector:** ADB hỗ trợ dùng khoá do dịch vụ quản lý và khoá do người dùng tự chọn làm khoá chính để mã hoá dữ liệu.

*   **Mã hoá log lịch sử:** SLS hỗ trợ dùng khoá do dịch vụ quản lý và khoá do người dùng tự chọn làm khoá chính để mã hoá dữ liệu.

### 4. Truy cập dữ liệu

Có thể dùng sản phẩm dịch vụ kiểm soát truy cập cloud-native (như RAM — Resource Access Management của Alibaba Cloud) để quản lý định danh và kiểm soát truy cập tài nguyên; đây là nền của việc quản lý an toàn tài khoản và vận hành an toàn. Với các bối cảnh người dùng tuỳ biến, dịch vụ nền tảng mô hình lớn truy cập các tài nguyên cloud thuộc về người dùng như lưu trữ, ElasticSearch, SLS thông qua năng lực role liên kết của dịch vụ kiểm soát truy cập.

### 5. Xử lý dữ liệu

An toàn khi xử lý dữ liệu là cực kỳ quan trọng; có thể dùng cơ chế guardrail cho mô hình lớn theo kiểu cloud-native. Lấy AI Guardrail của Alibaba Cloud làm ví dụ: nó có thể lọc và chặn thời gian thực để bảo đảm an toàn cho dữ liệu và thông tin nội dung trong quá trình khách hàng dùng Agent và model, nhờ đó kiểm soát hiệu quả an toàn dữ liệu trong quá trình người dùng dùng Agent, giảm rủi ro rò rỉ dữ liệu. Năng lực an toàn của AI Guardrail hỗ trợ nhận diện bất thường rủi ro, hỗ trợ nhận diện ý định, lọc thời gian thực các nội dung về đạo đức, giá trị, dữ liệu nhạy cảm cá nhân, và chặn ở khâu hỏi–đáp an toàn. Có thể theo nhu cầu người dùng để xây kho tri thức an toàn và kho tri thức chuyên đề, hiện thực việc tự định nghĩa linh hoạt luật an toàn dữ liệu và quyết định rủi ro.

![image](../assets/imgs/chapter-14/image-006.png)

### 6. Xoá dữ liệu

Để cung cấp cho người dùng quyền kiểm soát với dữ liệu của chính mình, một khi người dùng xin huỷ tài khoản trên nền tảng dịch vụ mô hình lớn, có thể theo quy trình huỷ tài khoản mà nền tảng cloud cung cấp để xoá thông tin cá nhân hoặc ẩn danh hoá chúng, theo yêu cầu của chính sách bảo mật người dùng cloud.

Lấy nền tảng dịch vụ mô hình lớn Bailian của Alibaba Cloud làm ví dụ: nó đồng thời hỗ trợ xoá và di trú dữ liệu nghiệp vụ trong ứng dụng, xoá dữ liệu chỉ định cùng quan hệ index và file quá trình của nó; phạm vi gồm dữ liệu người dùng upload, file model và dữ liệu suy luận, dữ liệu log vận hành.

Nếu người dùng dùng phương án tự tích hợp sản phẩm cloud triển khai VPC độc lập, thì người dùng có toàn quyền xử lý và xoá với mọi tài nguyên dữ liệu dưới tài khoản cloud của mình, và có thể di trú dữ liệu theo nhu cầu bối cảnh nghiệp vụ.

Trong thực tế cần lưu ý: trong bối cảnh kỷ nguyên AI, tỉ lệ AI thay con người thao tác đang tăng nhanh, và **bản thân AI có thể có quyền quá lớn hoặc tự nâng quyền.** Việc dẫn dắt bằng prompt sai có thể khiến AI xoá nhầm dữ liệu quan trọng; ngay cả khi một số sản phẩm AI Coding như Qoder có cảnh báo rủi ro khi cảm nhận được thao tác xoá, **con người vẫn có thể bấm nhầm theo quán tính.** Trên thế giới đã có không ít báo cáo về kiểu AI xoá nhầm dữ liệu quan trọng như vậy. Thực tế, kẻ tấn công cũng sẽ dùng AI để thực hiện tấn công rút dữ liệu. Vì vậy, **tại các nút dữ liệu then chốt, khuyến nghị đưa vào cơ chế cảnh báo an toàn của bên thứ ba để giữ chốt chặn cuối cùng.**

# 14.5 Bảo vệ an toàn định danh của Agent

## 14.5.1 Bối cảnh và thách thức

Nền tảng Agent đang chuyển từ "công cụ xây dựng" thành hệ thống bao trọn vòng đời gồm lập kế hoạch, phát triển, kiểm thử, triển khai, quan sát, tối ưu và quản trị; định danh, quyền hạn, audit và chi phí sẽ được quản lý thống nhất. **Thứ doanh nghiệp phải bảo vệ không chỉ là input–output của model, mà là một chuỗi hành động động gồm người dùng, client, Agent, tool, credential, dữ liệu và tài nguyên.**

Các thách thức chính của bảo mật định danh Agent gồm:

1.  **Hộp đen tài sản:** rất nhiều doanh nghiệp không biết nội bộ có bao nhiêu Agent, ai tạo ra, đã gọi những tài nguyên nào, có những quyền gì.

2.  **Thoát quyền:** nhân viên có thể gián tiếp có được quyền vượt quá vị trí công việc của mình thông qua Agent — ví dụ một nhân viên bán hàng bình thường nhờ "trợ lý hoàn ứng" mà xem được chi tiết công tác phí của CEO; Agent của nhân viên đã nghỉ việc có thể vẫn tiếp tục chạy, gây tồn dư quyền hạn.

3.  **Mất kiểm soát quản lý credential:** Agent thường được cấp "quyền vạn năng"; API Key hard-code trong code, có hiệu lực dài hạn và không audit được. **IAM truyền thống không được thiết kế cho "định danh phi con người" với cơ chế credential động và token chu kỳ ngắn.**

4.  **Chuỗi trách nhiệm mờ:** khi nhiều Agent cộng tác, một lần rò rỉ dữ liệu có thể đi qua nhiều mắt xích: người dùng, client, Agent, dịch vụ MCP, tài nguyên hạ nguồn — audit truyền thống khó truy về định danh và hành động cụ thể.

5.  **Chuẩn và bối cảnh chưa chín:** dù chính sách đang thúc đẩy giao thức liên thông Agent và nền tảng đăng ký, doanh nghiệp vẫn thiếu bối cảnh vào cuộc rõ ràng và lộ trình triển khai lặp lại được.

**IAM truyền thống chưa mất hiệu lực, nhưng đối tượng quản trị, độ hạt uỷ quyền và thời điểm ra quyết định của nó cần được mở rộng.** Chỉ cấp cho Agent một tài khoản ứng dụng hay một khoá dài hạn thì không trả lời được: **"ai đang hành động, đại diện cho ai mà hành động, dựa vào đâu mà hành động, vì sao lúc này được phép, và sau khi bất thường thì thu quyền ra sao".** Vì vậy, bảo mật định danh Agent bắt buộc phải xuyên suốt từ phát hiện tài sản, đăng ký định danh, credential động, uỷ quyền vào và ra, kiểm soát lúc chạy, audit toàn chuỗi, quản trị vòng đời tới khôi phục sau sự cố.

## 14.5.2 Vòng khép kín quản lý bảo mật định danh Agent

### 1. Bảo mật định danh Agent: từ phát hiện tới quản lý

Sau khi phát hiện, cần quản lý nhất thể về định danh, quyền hạn, credential, audit và vòng đời:

*   **Định danh Agent thống nhất (Agent Identity):** mỗi Agent được cấp một "thẻ nhân viên số" duy nhất; dù là Agent do nền tảng như Bailian, PAI, AgentRun tự tạo, hay Agent tạo thủ công qua API/console, đều được quản lý thống nhất. Hỗ trợ liên kết định danh Agent với định danh con người và định danh máy.

*   **Tích hợp nguồn định danh doanh nghiệp:** qua OIDC / OAuth 2.0 chuẩn để đấu nối DingTalk, Feishu, WeCom, LDAP, Azure AD, Okta, Entra ID cùng các nguồn định danh khác, hiện thực việc truyền định danh đầu-cuối **"người dùng → client → Agent → tài nguyên truy cập"**, ngăn giả mạo định danh.

*   **Quản lý credential động:** các credential nhạy cảm như API Key, OAuth Secret, LLM Key được KMS mã hoá rồi quản lý tập trung trong **Token Vault**. **Code Agent không chạm vào credential dài hạn dạng plaintext**; chỉ lúc chạy mới lấy token ngắn hạn theo Agent ID và phần uỷ quyền của người dùng — tức là "phát triển không cần khoá".

*   **Quyền tối thiểu:** Agent **mặc định không có quyền**; chỉ sau khi người dùng uỷ quyền mới truy cập tài nguyên hạ nguồn bằng định danh và phạm vi quyền của người dùng đó, và **quyền của Agent không vượt quá quyền của người dùng.**

*   **Audit toàn chuỗi:** hỗ trợ xem mọi thao tác quản trị trong truy cập toàn chuỗi của Agent cùng từng lần lấy credential, với độ hạt tới mức **"người dùng nào, qua Agent nào, đã lấy credential nào".**

*   **Quản trị vòng đời:** khi nhân viên vào làm, chuyển vị trí hay nghỉ việc, quyền của các Agent do họ tạo hay uỷ quyền có thể được đổi đồng bộ; việc đăng ký Agent, cấp quyền, xoay vòng credential, gỡ và huỷ đăng ký đều quản lý được trên một console thống nhất — giải quyết vấn đề **"Agent bóng"** và tồn dư quyền hạn.

### 2. Năng lực đăng ký định danh và quản lý nhãn

**Quản lý đăng ký định danh Agent trên cloud:** khi tạo Agent trên nền tảng Agent trên cloud (như AgentRun, AgentTeams), hệ thống tự động tạo định danh Agent cho nó.

**Trung tâm đăng ký Agent hướng tới doanh nghiệp:** doanh nghiệp có thể đăng ký định danh Agent qua topology trực quan, và hệ thống tự sinh một Agent ID duy nhất. Khi đăng ký, Agent được đưa vào làm node truy cập trong chuỗi:

*   **Node Agent:** chủ thể định danh, cấu hình cách xác thực và quyền hạn

*   **Node client:** kiểm soát những người dùng/nhóm nào được gọi Agent đó

*   **Node mô hình lớn:** quản lý credential API Key của LLM

*   **Node dịch vụ doanh nghiệp:** đấu nối các ứng dụng nội bộ

*   **Node dịch vụ bên thứ ba:** đấu nối các ứng dụng SaaS/OAuth bên ngoài

### 3. Năng lực xác thực định danh Agent và quản lý credential động

| Cách xác thực | Đặc điểm | Bối cảnh áp dụng |
| --- | --- | --- |
| Credential Client Secret | `client_id` + `client_secret`, cấu hình đơn giản | Tích hợp nhanh, Agent nội bộ rủi ro thấp |
| Credential khoá công khai – riêng tư | Mã hoá bất đối xứng, khoá riêng ký, khoá công kiểm chứng | Bối cảnh an toàn cao, kết hợp được với KMS/HSM |
| Xác thực liên kết OIDC / OAuth 2.0 | Đấu nối IdP doanh nghiệp | Đã có sẵn nguồn định danh như DingTalk, Feishu, WeCom, LDAP, Azure AD, Okta |
| Uỷ nhiệm On-Behalf-Of | Agent truy cập tài nguyên bằng định danh và quyền của người dùng | Trợ lý cá nhân, Agent dùng chung nhiều người dùng |

**Quản lý credential động:**

*   **Két credential Token Vault:** mọi API Key, OAuth Secret, LLM Key được KMS mã hoá rồi quản lý tập trung; **code Agent không chạm tới credential dài hạn dạng plaintext.**

*   **Credential tạm ngắn hạn:** sau khi Agent xác thực định danh, nó lấy Access Token / STS Token ngắn hạn theo Agent ID và phần uỷ quyền của người dùng, tránh hard-code AK/SK.

*   **Tiêm lúc chạy:** credential chỉ được tiêm an toàn lúc chạy, và **gắn một-một với phần uỷ quyền hướng ra tới mô hình lớn / dịch vụ doanh nghiệp.**

*   **Audit toàn chuỗi:** ActionTrail ghi lại từng lần lấy credential, ghi rõ **"người dùng XX qua Agent XX đã lấy credential XX".**

**Kiểm soát quyền hạn:**

*   **Quyền tối thiểu:** Agent mặc định không có quyền; chỉ sau khi được uỷ quyền mới truy cập tài nguyên chỉ định, và quyền của Agent không vượt quá quyền của người dùng.

*   **Uỷ quyền hướng vào:** kiểm soát truy cập từ client tới Agent

*   **Uỷ quyền hướng ra:** kiểm soát quyền của Agent tới mô hình lớn / dịch vụ doanh nghiệp / dịch vụ bên thứ ba

*   **Cô lập mức dòng/mức trường:** IDaaS hỗ trợ cô lập dữ liệu trong bối cảnh Agent nhiều người dùng

![image.png](../assets/imgs/chapter-14/image-007.png)

## 14.5.3 Quản trị uỷ quyền định danh

### 1. Năng lực quản lý uỷ quyền Agent (uỷ quyền tối thiểu động)

*   **Mô hình uỷ quyền hai chiều (vào + ra):** coi Agent vừa là **"resource server"** vừa là **"client"**:

*   **Uỷ quyền hướng vào (Client → Agent):** kiểm soát những client/người dùng nào được gọi Agent đó, và những scope nào dùng được

*   **Uỷ quyền hướng ra (Agent → dịch vụ hạ nguồn):** kiểm soát Agent truy cập được những mô hình lớn, ứng dụng doanh nghiệp, SaaS bên thứ ba hay MCP Server nào.

Mỗi Agent khi tạo ra sẽ tự sinh luật uỷ quyền hướng ra riêng; khi thêm node mô hình lớn hay dịch vụ bên thứ ba thì tự động thêm vào luật đó, còn khi xoá node thì thu hồi phần uỷ quyền tương ứng.

*   **Token Exchange để hội tụ quyền hạn**

Khi Agent gọi dịch vụ hạ nguồn, nó hội tụ quyền qua **Token Exchange**: token gốc có audience là Agent, còn token mới có audience là dịch vụ hạ nguồn; token mới chỉ chứa scope tối thiểu đã được uỷ quyền; vừa giữ thông tin người dùng, vừa ghi lại chuỗi gọi của Agent. **Điều này tránh để Agent trở thành một "siêu ứng dụng": ngay cả khi Agent bị chọc thủng, thứ rò rỉ ra cũng chỉ là một token ngắn hạn, bị giới hạn, cho một dịch vụ duy nhất.**

*   **On-Behalf-Of và cơ chế người dùng đồng ý**

Agent mặc định truy cập tài nguyên hạ nguồn bằng định danh và quyền của người dùng, và quyền của Agent không vượt quá quyền của người dùng. Người dùng phải **đồng ý tường minh khi dùng lần đầu**; và sau khi người dùng rút lại sự đồng ý thì **Agent lập tức mất năng lực gọi hướng ra.**

*   **Credential động thay cho khoá dài hạn**

Mọi API Key, OAuth Secret, LLM Key đều do KMS mã hoá và quản lý; chỉ lúc chạy mới tiêm Access Token / STS Token ngắn hạn theo Agent ID và phần uỷ quyền của người dùng — **triệt tiêu việc hard-code AK/SK và credential dài hạn.**

### 2. Hỗ trợ uỷ quyền cho ứng dụng mô hình lớn

| Loại hạ nguồn | Cách uỷ quyền | Ví dụ |
| --- | --- | --- |
| Dịch vụ mô hình lớn | Uỷ quyền hướng ra ở node mô hình lớn, API Key được quản lý hộ | Bailian, OpenAI, DeepSeek |
| MCP Server | Uỷ quyền hướng ra với tư cách node dịch vụ bên thứ ba | Ví dụ gọi MCP Server của Amap để lấy vị trí địa lý |
| SaaS bên thứ ba | Uỷ quyền hướng ra ở node dịch vụ bên thứ ba, OAuth / API Key | DingTalk, Feishu, GitHub |
| Hệ thống nội bộ doanh nghiệp | Uỷ quyền hướng ra ở node dịch vụ doanh nghiệp, OAuth Access Token | Hệ HR, CRM, tài chính |

### 3. Hỗ trợ năng lực uỷ quyền động nhận biết context

Có thể uỷ quyền động dựa trên context của người dùng, Agent, tool cùng context trong request của người dùng — ví dụ: **cho phép người dùng thuộc phòng marketing dùng Agent đặt hàng, với số tiền đơn hàng < 1000.** Bằng policy Cedar + AI Gateway để hiện thực uỷ quyền động, **chỉ khi trong quá trình hội thoại của người dùng thoả điều kiện context thì mới có được quyền.**

## 14.5.4 Audit và truy nguyên toàn chuỗi

Agent Identity cung cấp năng lực truy nguyên toàn cục **"định danh → hành vi → chuỗi gọi → quá trình suy luận".**

**Năng lực audit hành vi Agent**

*   Lưu dấu chuỗi bằng chứng đầy đủ cho quá trình thực thi của Agent, hỗ trợ phát lại theo các chiều thời gian, người dùng, ứng dụng Agent; tích hợp sẵn engine phát hiện hành vi bất thường, cảnh báo thời gian thực với các thao tác vượt quyền, truy cập dữ liệu nhạy cảm.

*   Các thao tác ở mặt phẳng quản lý Agent (tạo/sửa Workload Identity, nhà cung cấp credential, lấy credential…) hỗ trợ truy vấn event, theo dõi thống nhất đa tài khoản, audit lời gọi AccessKey.

# 14.6 Bảo vệ an toàn hệ thống và mạng

## 14.6.1 Bối cảnh và thách thức

Trong toàn vòng đời của AI Agent, tính an toàn của hạ tầng quyết định trực tiếp độ tin cậy, mức đáng tin và tính tuân thủ của ứng dụng. Từ huấn luyện model tới dịch vụ suy luận, độ phức tạp của hệ AI, kiến trúc phân tán cùng sự phụ thuộc vào lượng dữ liệu khổng lồ khiến **bất kỳ sơ hở nào ở tầng hạ tầng cũng có thể gây ra rủi ro nghiêm trọng như model bị đánh cắp, dữ liệu rò rỉ hay dịch vụ bị lạm dụng.** Vì vậy cần xây môi trường vận hành an toàn, kiểm soát được, thiết lập hệ phòng thủ nhiều tầng từ tình hình an toàn toàn cục tới các chi tiết ở tầng tính toán, mạng.

## 14.6.2 Quản lý tình hình an toàn thống nhất cho hạ tầng

Đặc tính phân tán của ứng dụng AI cùng việc dùng rộng rãi các framework mã nguồn mở khiến cấu thành tài sản ngày càng phức tạp, và đội bảo mật thường gặp thách thức **"nhìn không rõ, quản không tới".** Vì vậy, cần quản lý thống nhất tài sản AI theo góc nhìn toàn cục, để cảm nhận rủi ro sớm và kiểm soát hiệu quả.

**1. Tự động phát hiện và kiểm kê tài sản AI**

Quản lý an toàn bắt đầu từ một danh sách tài sản rõ ràng. Lấy sản phẩm Cloud Security Center của Alibaba Cloud làm ví dụ: nó cung cấp năng lực phát hiện tài sản thông minh, xuyên qua kiến trúc phức tạp của môi trường cloud để nhận diện chính xác các tài nguyên tính toán, container, instance dịch vụ model liên quan tới AI. Ví dụ:

*   **Nhận diện tự động:** hệ thống tự đánh dấu các tài sản AI trong ECS, nền tảng AI PAI, dịch vụ container ACK; phủ toàn chuỗi từ node tính toán tầng dưới tới component ứng dụng cụ thể (như Ollama, LM Studio).

*   **View tập trung:** phân loại tài sản theo nhãn "ứng dụng AI", "PAI"…, giúp người dùng nhanh chóng định vị sản phẩm cloud, image container hay tài nguyên host, tạo thành một danh sách tài sản cập nhật động làm nền cho việc phân tích rủi ro về sau.

Khi Agent bước vào môi trường production, đối tượng kiểm kê tài sản còn phải mở rộng từ tài nguyên tính toán xuống tầng Agent: **instance Agent cùng các phiên task của nó, dịch vụ MCP và connector đã tích hợp, cấu hình skill và tool, cùng các credential NHI mà Agent nắm giữ — tất cả đều nên đưa vào danh sách tài sản và view rủi ro thống nhất, tránh xuất hiện những "Agent bóng" nằm ngoài vòng quản lý an toàn.**

**2. Đánh giá rủi ro đa chiều**

Trên tiền đề tài sản đã trực quan hoá, hãy phơi mối đe doạ ra trước khi tấn công xảy ra, thông qua việc phát hiện rủi ro liên tục:

*   **Phát hiện lỗ hổng component mã nguồn mở:** với các framework AI như Ollama, LM Studio, quét lỗ hổng component định kỳ, cảnh báo sớm diện phơi tiềm tàng.

*   **Phân tích diện phơi ra Internet:** giám sát tình hình phơi dịch vụ AI ra Internet, đánh dấu các cổng rủi ro cao (như SSH hay Jupyter mở không xác thực), giúp thu hẹp bề mặt tấn công.

*   **Kiểm tra rủi ro cấu hình:** dựa trên thực tiễn tốt nhất về an toàn AI của Alibaba Cloud và các hãng cloud chủ đạo, kiểm tra tính tuân thủ cấu hình của các nền tảng như PAI, EAS, tránh rủi ro do cấu hình sai.

*   **Quét thông tin nhạy cảm:** qua công nghệ quét không cần agent trên image và hệ thống file, nhận diện API key lưu ở dạng plaintext (như Token PAI-EAS của Alibaba Cloud, OpenAI Key), ngăn việc lạm dụng do rò rỉ credential. **Giá trị cốt lõi nằm ở năng lực "liên kết context"**: ví dụ, nếu phát hiện một component Ollama có lỗ hổng, hệ thống sẽ liên kết thẳng lỗ hổng đó với ảnh hưởng của nó tới instance dịch vụ model cụ thể, giúp đội bảo mật xây chiến lược vá theo thứ tự ưu tiên nghiệp vụ — tức quản trị chính xác **"lấy ứng dụng AI làm trung tâm".**

Cần chỉ rõ: **quản lý tình hình giải quyết vấn đề "nhìn thấy được"; còn rủi ro phát hiện ra thì vẫn phải liên động khép kín với các biện pháp kiểm soát lúc chạy.** Với các workload Agent có lỗ hổng nghiêm trọng, phơi ra bất thường hay hành vi méo mó, phải liên động được với gateway, firewall và tầng orchestration task để kịp giới hạn tốc độ, cô lập hay tạm dừng task — **biến view tài sản và rủi ro thành năng lực xử lý thực tế.**

## 14.6.3 Gia cố an toàn tầng tính toán

Instance ECS GPU là vật mang năng lực tính toán cốt lõi cho việc huấn luyện và suy luận model AI, nên việc bảo vệ nó là nền móng của hạ tầng. Cần dựng phòng tuyến từ các tầng: bảo vệ nền tảng host, bảo vệ môi trường container hoá và cô lập runtime của Agent.

**1. Bảo vệ nền tảng an toàn host**

Mọi instance ECS gánh ứng dụng AI đều cần triển khai các biện pháp an toàn cơ bản:

*   **Triển khai client bảo mật:** cài client Cloud Security Center để có quét lỗ hổng thời gian thực, kiểm tra baseline, phát hiện đăng nhập bất thường và cảnh báo rò rỉ AK.

*   **Thực tiễn tốt nhất về security group:** theo nguyên tắc quyền tối thiểu, đóng các cổng không cần thiết, giới hạn các cổng quản trị như SSH/RDP chỉ mở cho IP của bastion vận hành, tránh phơi ra Internet.

**2. Bảo vệ an toàn môi trường container hoá**

Công nghệ container nâng tính linh hoạt của ứng dụng AI, nhưng đặc tính dùng chung kernel làm tăng rủi ro thoát container. Cần cân bằng giữa phát triển linh hoạt và nhu cầu an toàn qua **sandbox an toàn** và **quản lý toàn vòng đời image.** Trên Alibaba Cloud, sandbox an toàn mà dịch vụ container ACK cung cấp sẽ cấp cho mỗi container một lớp cô lập máy ảo nhẹ, đạt được phòng thủ ở mức kernel:

*   **Chặn đứng tấn công:** ngay cả khi container bị chọc thủng, kẻ tấn công vẫn không vượt được ranh giới sandbox để ảnh hưởng tới host hay các container khác trong cùng cụm.

*   **Bối cảnh áp dụng:** phù hợp với dịch vụ AI multi-tenant hay bối cảnh cần chạy code không tin cậy, với mức hao hụt hiệu năng rất thấp, gần với trải nghiệm container native.

**3. An toàn chuỗi cung ứng image**

Qua cơ chế quét image và ký số, bảo đảm việc bàn giao container an toàn:

*   **Quét và tuân thủ:** trên Alibaba Cloud, dịch vụ Container Registry ACR tự động quét image trong luồng CI/CD, phát hiện lỗ hổng hệ thống, lỗ hổng ứng dụng, mẫu độc hại và thông tin nhạy cảm (như khoá hard-code).

*   **Ký và kiểm chữ ký:** lập trình viên ký lên các image tuân thủ; cụm ACK **chỉ cho phép triển khai các image có chữ ký hợp lệ**, ngăn đầu độc chuỗi cung ứng. Ưu thế kỹ thuật nằm ở việc **dịch chuyển bảo mật sang trái** tới giai đoạn phát triển (quét image) và sang giai đoạn vận hành (cô lập sandbox), tạo vòng khép kín trọn vẹn từ build code tới triển khai production.

**4. Cô lập ở mức phiên cho runtime của Agent**

Khi thực thi task, Agent sẽ sinh và chạy code động, truy cập dịch vụ bên ngoài; **bản thân môi trường chạy của nó phải được đối xử như một workload không đáng tin.** Từ năm 2026, ngành đã phổ biến việc **hội tụ đơn vị cô lập từ dịch vụ xuống phiên**: cấp cho mỗi phiên Agent một sandbox hay máy ảo nhẹ (microVM) độc lập, đạt cô lập ở mức kernel, môi trường **dùng xong là bỏ**, và tự thu hồi sau khi idle quá hạn hay chạm vòng đời tối đa — tránh để môi trường và credential tồn dư bị các task sau hay kẻ tấn công tái dùng. Trên Alibaba Cloud, có thể dựa vào sandbox an toàn của dịch vụ container ACK để cung cấp cô lập ở mức kernel cho phiên Agent, và tiêm credential tạm tối thiểu theo phiên, thay cho khoá dạng biến môi trường có hiệu lực dài hạn.

Với bối cảnh cộng tác multi-agent, **các Agent với nhau cũng nên theo nguyên tắc cô lập lẫn nhau**: phân chia môi trường chạy và chính sách mạng theo ranh giới task, để một Agent bị chọc thủng không lan ngang sang các Agent khác cùng dữ liệu và tool mà chúng truy cập được.

## 14.6.4 Cô lập mạng và kiểm soát truy cập

Trên nền phòng thủ cơ bản của VPC và security group, việc cô lập mạng và kiểm soát truy cập cần dựng thêm một hệ phòng thủ biên mạng cấp cao hơn, tạo thành kiến trúc phòng thủ chiều sâu nhiều tầng.

**1. Phòng thủ biên Internet**

Với các AI Agent cần cung cấp dịch vụ ra ngoài, hãy tăng cường kiểm soát traffic Internet qua các năng lực cốt lõi sau của cloud firewall:

*   **Kiểm soát truy cập thông minh:** hỗ trợ cấu hình policy hạt mịn dựa trên giao thức tầng bảy, domain, URL và vị trí địa lý.

*   **Phòng thủ chủ động trước mối đe doạ:** tích hợp sẵn kho threat intelligence và kho đặc trưng tấn công, chặn thời gian thực các kiểu tấn công đã biết, cung cấp **"virtual patch"** để vá tạm lỗ hổng.

*   **Trực quan hoá toàn chuỗi:** cung cấp phân tích và hiển thị trực quan log traffic toàn cục, đáp ứng nhu cầu audit an toàn và truy nguyên tấn công.

**2. Phòng thủ vi phân đoạn trong mạng nội bộ**

Năng lực phòng thủ biên VPC của cloud firewall hiện thực được:

*   **Chặn đường thâm nhập ngang của tấn công:** bằng việc giám sát sâu traffic xuyên VPC và hybrid cloud, ngăn kẻ tấn công thâm nhập từ vùng nghiệp vụ không cốt lõi (như môi trường dev-test) sang vùng dữ liệu cốt lõi (như VPC lưu dữ liệu huấn luyện).

*   **Thực hành mạng zero-trust:** yêu cầu mọi traffic nội bộ đều phải qua xác thực định danh và kiểm chứng policy, loại bỏ mối nguy an toàn của mô hình tin cậy mạng nội bộ truyền thống.

**3. Kiểm soát traffic hướng ra của Agent**

Rủi ro của Agent không chỉ đến từ traffic bên ngoài đi vào, mà còn từ **những request mà nó chủ động phát ra ngoài.** Trong sự kiện xâm nhập Hugging Face tháng 7 năm 2026, Agent tấn công chính là nhờ một dịch vụ trung gian truy cập được để ra Internet hộ mà đột phá ranh giới mạng. Vì vậy, hướng outbound nên **mặc định từ chối, mở theo nhu cầu:**

*   **Policy outbound mặc định từ chối:** VPC hay subnet nơi runtime Agent chạy mặc định cấm outbound, chỉ mở tường minh theo domain và đích những endpoint nghiệp vụ bắt buộc (như API model, kho tri thức nội bộ).

*   **Chặn đích rủi ro cao:** ở tầng mạng, chặn endpoint dịch vụ metadata của cloud và các dải địa chỉ dành riêng của mạng nội bộ, ngăn SSRF và prompt injection tiến hoá thành thăm dò mạng nội bộ và đánh cắp credential.

*   **Cổng outbound thống nhất:** việc Agent truy cập Internet và dịch vụ MCP được hội tụ tập trung qua phần kiểm soát outbound của AI Gateway hay cloud firewall, kiểm chứng đích truy cập, ghi log truy cập, và liên động với NDR để phát hiện kết nối ra ngoài bất thường cùng việc gửi dữ liệu ra ngoài.

Cùng lúc đó, tư tưởng zero-trust cũng đang mở rộng sang bối cảnh AI; ngành đã lần lượt đề xuất các khung zero-trust hướng tới AI (như Zero Trust for AI của Microsoft, Agentic Trust Framework của CSA), **lấy định danh Agent làm yếu tố cốt lõi của việc kiểm chứng policy mạng**, tạo sự hô ứng với hệ bảo mật định danh ở mục 14.5.

Về thiết kế kiến trúc hệ phòng thủ: security group và cloud firewall bổ trợ nhau, trong đó cloud firewall đóng vai node kiểm soát trung tâm, cung cấp quản lý policy traffic toàn cục, phát hiện mối đe doạ và phân tích trực quan. Hai thứ cùng dựng nên một hệ phòng thủ lập thể **"điểm – tuyến – diện"**: security group lo phòng thủ ở mức node (**điểm**), firewall biên VPC chặn mối đe doạ traffic xuyên vùng (**tuyến**), còn firewall Internet thì kiểm soát lối vào công cộng và ràng buộc phần outbound của Agent (**diện**) — tạo thành một mạng lưới phòng thủ phủ mọi tầng mạng.

**Một hạ tầng AI an toàn không phải một đích đến đạt một lần rồi thôi, mà là một quá trình động cần đánh giá, tối ưu và tiến hoá liên tục.** Khi công nghệ AI và các thủ đoạn tấn công không ngừng phát triển, hệ phòng thủ an toàn cũng phải lặp và nâng cấp đồng bộ, **biến bảo mật thành một thuộc tính nội tại thực sự của kiến trúc ứng dụng AI-native.**
