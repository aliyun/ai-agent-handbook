# Thực tiễn Data Agent cho phân tích vận hành

Bàn luận về AI Native ngày càng nóng, ranh giới giữa các vị trí công việc đang mờ đi, và ngược lại, mỗi vai trò đều có thể tham gia sâu vào thực tiễn với tư cách chuyên gia ngành ở mức chưa từng có. Thứ đội chúng tôi khám phá là: bộ phận vận hành sản phẩm dùng AI vào việc cộng tác kinh doanh ra sao. Bài này nói về một sản phẩm triển khai trong số đó — Agent phân tích dữ liệu **Mamba Insight**, từ ý tưởng tới trọn quá trình thực hành.

Nhu cầu hằng ngày của bộ phận vận hành rất phân tán, trải khắp nhiều miền dữ liệu: giám sát bức tranh lớn thì phải canh TOP khách hàng mỗi ngày, phân tích bán hàng thì xem hiệu quả giao dịch theo vùng, phân tích retention thì truy phần rời bỏ tháng trước, insight tăng trưởng thì phán định tiềm năng khách hàng, còn soát lại kinh doanh thì nhìn tổng cục. Trước đây chỉ có cách để nhân viên vận hành mỗi tuần ghép tay một bản báo cáo "ước số chung lớn nhất" — năm người xem, ai cũng thấy được chút gì đó mà ai cũng thấy chưa đủ dùng; muốn đào sâu thì tự nêu nhu cầu rồi xếp hàng. Việc phân tích dữ liệu từ đầu tới cuối vẫn là một nhánh phụ, chưa bao giờ nhúng được vào luồng làm việc, và lại càng chưa thực sự trở thành một thành viên của team.

## Một — Toạ độ ngành và thách thức cốt lõi

Hãy hình dung trong tuyến sản phẩm — R&D có một dây chuyền "nhu cầu → R&D → quảng bá" trải khắp nhiều miền nghiệp vụ: Agent thu thập nhu cầu (miền sản phẩm) nhận ra "lúc này thiếu dữ liệu chống đỡ để phán đoán"; Agent phân tích dữ liệu (miền vận hành sản phẩm) tra chân dung khách hàng và xuất ra khuyến nghị về độ ưu tiên; Agent pipeline R&D (miền R&D) hoàn tất từ phát triển tới phát hành; còn Agent sản xuất nội dung (miền vận hành sản phẩm) tự sinh vật liệu quảng bá và phân phối. Theo định luật Amdahl, tổng thể sẽ bị chặn bởi "đoạn chưa được tăng tốc" — chúng tôi không muốn thành đoạn đó, nên bắt đầu tái cấu trúc Agent phân tích dữ liệu để nó thực sự hoà vào Team.

![image.png](../../assets/imgs/chapter-28/image-010.png)

### Tư tưởng thiết kế của chúng tôi

Trong thực tiễn, chúng tôi nhận ra vài lực tác động rất mạnh:

* **Làm việc song song**: Agent có nhúng được vào luồng làm việc để chạy song song với con người không (người ↔ agent), và các Agent có cộng tác được với nhau không (worker ↔ worker); khi bạn đang chuẩn bị họp sáng, soát lại báo cáo hai tuần, hay theo dõi khách hàng, thì nó và đội của nó đã chạy xong phần lớn công việc, đồng thời phục vụ nhiều vai, nhiều chuỗi cùng lúc, không nhiễu nhau, không xếp hàng.

* **Tự tiến hoá**: có càng dùng càng thông minh không. Những câu hỏi kiểu "doanh thu tháng trước còn thiếu bao nhiêu" không nên mỗi lần đều phải trả lời từ con số không; Agent phải biến kinh nghiệm lần trước thành trí nhớ cơ bắp cho lần sau.

* **Cá nhân hoá**: có làm được "nghìn người nghìn diện" không. Thứ một kiến trúc sư hỏi và thứ một nhân viên vận hành hỏi không phải cùng một chuyện; cùng một chỉ số trong các context khác nhau thì hàm ý những hành động khác nhau.

* **Trực giác kinh doanh (Hidden Context)**: có nghe hiểu được ngữ cảnh nghiệp vụ đằng sau câu hỏi không. "Tỉ lệ rời bỏ" tính theo chuẩn đo nào, chu kỳ nào, liên kết mấy bảng nào — những thứ đó không nằm trong câu hỏi, mà giấu trong đầu người hỏi.

![image.png](../../assets/imgs/chapter-28/image-011.png)

## Hai — Thực hành giải pháp

Hai công cụ nền tảng, cộng thêm một tầng quy phạm ngữ nghĩa tự định nghĩa, dựng nên bộ khung của Mamba Insight: **Qoder** lo phần trích Hidden Context và định nghĩa tầng ngữ nghĩa, còn **AgentCore** — nền tảng xây và quản trị Agent của Alibaba Cloud — cung cấp phần cộng tác và quản trị cấp doanh nghiệp.

### 2.1 Qoder: trích Hidden Information từ 500 nhu cầu

Tài sản tri thức tích luỹ nhiều năm của đội có bốn loại, cùng tạo thành kho nhiên liệu cho Agent: các ticket nhu cầu lịch sử trên nền tảng cộng tác R&D nội bộ (hồ sơ sống về chuẩn đo nghiệp vụ), các dashboard BI nội bộ (quá trình ra quyết định về chỉ số và chiều), luồng phân tích tăng trưởng hằng ngày (xem bức tranh lớn → tách cấu trúc → tìm quy kết → chốt hành động → theo dõi hiệu quả), và các cuộc trò chuyện cộng tác hằng ngày của mọi vai trò. Bộ phận vận hành sản phẩm ở đây đóng ba vai một lúc — bên cấp tri thức, bên định nghĩa kịch bản, bên kiểm chứng hiệu quả — nên có khả năng nhất để đưa Agent vào vòng tuần hoàn tích cực "càng dùng càng thông minh".

Qua Qoder, chúng tôi gán nhãn từng cái cho hơn 500 nhu cầu dữ liệu trong gần một năm và thu được trọn Context: **ngôn ngữ nghiệp vụ** (chẳng hạn đằng sau "nhận diện khách hàng tiềm năng cao" là trọn chuỗi "thu lead → nhận diện cơ hội → tiếp cận cơ hội → chuyển đổi thương mại → theo dõi doanh thu"), **mô thức thao tác** (các template phân tích như xu thế / chéo / phân vị / phân tầng — Agent không thể chỉ biết viết SELECT), và **quan hệ dữ liệu** (bảng nào join với bảng nào, khi chuẩn đo xung đột thì lấy ai làm chuẩn — những thứ vốn rải rác trong comment SQL và trong chat nhóm).

Những tri thức ngầm đó được cố định thành hai loại tài sản: **9 tài liệu Skill có cấu trúc** (luật lập lịch, Scheme, chỉ số, chiều, công thức tính… — tức "từ điển") và **45 cặp QA** (đây mới là sản phẩm chính — Skill nói cho Agent biết "tỉ lệ rời bỏ tính ra sao", còn cặp QA thì nói cho nó biết "khi có người hỏi tỉ lệ rời bỏ thì thực ra họ muốn hỏi gì"). Mỗi phần đều theo bốn thước đo kỹ thuật: gắn version được, kiểm toán được, canary được, rollback được — để bảo đảm không bị lỗi thời.

### 2.2 Tầng ngữ nghĩa nghiệp vụ: tri thức được đựng trong cấu trúc gì

Cách làm đã chín trong ngành là trừu tượng hoá ba tầng: thực thể, chiều, độ đo; các đối tượng tách càng trực giao thì việc kéo thả trên BI càng tiện. **Nhưng độc giả của chúng tôi là model lớn.** Cứ mỗi lần Agent nhảy từ một đối tượng sang đối tượng kế tiếp là thêm một cơ hội sai. Vì vậy chúng tôi nén ba tầng ngữ nghĩa vào bên trong dataset — thực thể, thời gian, chiều, độ đo đều được đánh dấu lên chính các trường dưới dạng thuộc tính của trường, còn tầng đối tượng thì chỉ giữ ba loại: dataset, chỉ số và cặp hỏi đáp đã kiểm chứng. Ngữ nghĩa không mất gì, chỉ đổi hình thức vật mang; nội bộ chúng tôi gọi nó là **tầng ngữ nghĩa Agent-Native**.

Thứ thực sự đáng giá trong tầng ngữ nghĩa là mấy điều mà nhìn bảng nền không thấy được, điền sai cũng không báo lỗi, và chỉ cho bạn một "con số sai nằm trong bậc độ lớn hợp lý": các chỉ số có cộng được với nhau không, những điều kiện lọc nào bắt buộc phải mang theo mặc định, hai bảng liên kết là một-một hay một-nhiều. Trong tầng ngữ nghĩa, chúng đều là các trường enum bắt buộc — có cấu trúc hoá thì Agent mới có căn cứ để tuân thủ.

### 2.3 Alibaba Cloud AgentCore: để các Agent bắt đầu cộng tác như một đội

Trong bốn lực tác động thì "tự tiến hoá" và "cá nhân hoá" là then chốt, mà AgentCore lại tự nhiên có sẵn hai thứ đó: **memory dài hạn ở mức Worker** cho phép Agent tích luỹ kinh nghiệm và phần sửa sai ở cấp đội, nên cái hố join từng vấp lần trước lần này không vấp nữa; **context độc lập ở mức phiên** khiến các vai khác nhau không nhiễu nhau, và cùng một Agent khi đối diện kiến trúc sư hay nhân viên vận hành thì cho ra độ mịn khác nhau; còn **pipeline thẩm định Skill** thì cho các thay đổi ở cấp đội đi qua quản lý version, trong khi các chỉnh sửa ở cấp cá nhân có hiệu lực ngay. Dựa trên đó, chúng tôi tạo ra Agent phân tích dữ liệu thế hệ thứ hai là Mamba Insight.

Sau khi một Worker chạy ổn định, cơ chế **Worker Team** của AgentCore cho phép nhiều Worker gọi lẫn nhau qua input — output có cấu trúc: quay lại dây chuyền "nhu cầu → R&D → quảng bá", mỗi Worker chỉ đóng gói năng lực chuyên môn trong lĩnh vực của mình, nên miền sản phẩm không cần biết tra dữ liệu, còn miền R&D không cần biết viết bài. Cùng mô thức đó sao chép được sang các kịch bản nghiên cứu người dùng, marketing, báo cáo… — với Agent phân tích dữ liệu đóng vai nền tảng được gọi theo nhu cầu.

![image.png](../../assets/imgs/chapter-28/image-012.png)

![image.png](../../assets/imgs/chapter-28/image-013.png)

Mamba Insight hằng ngày xử lý doanh thu khách hàng, chân dung cơ hội, chỉ số kinh doanh, nên có yêu cầu cứng về bảo mật và tuân thủ; **quản trị cấp doanh nghiệp** chính là cốt lõi để đi từ demo lên production: dựa trên zero trust, Agent không giữ bất kỳ thông tin xác thực nào, và mọi truy cập đều qua AI gateway kiểm soát tập trung, đấu nối SSO và RBAC của doanh nghiệp; dữ liệu tenant cô lập vật lý, mã hoá toàn trình, dữ liệu nhạy cảm tự động ẩn danh; còn Skill / MCP Server / model / template Worker thì đăng ký thống nhất, thẩm định bảo mật và nạp nóng. Đặc biệt đáng nói là **vòng lặp dữ liệu mọc lên từ nền observability và kiểm toán**: mỗi lời gọi đều truy vết được toàn chuỗi, mức tiêu Token quy về đúng nguồn; và mỗi vòng hỏi đáp là một mẫu mang ý định nghiệp vụ thật — chuẩn đo sai thì chảy ngược thành phần sửa cho tầng ngữ nghĩa, ý định lệch thì chảy ngược thành một cặp hỏi đáp đã kiểm chứng mới. **Dùng → kiểm toán → tối ưu → dùng; khi vòng này quay thì càng dùng nhiều, tài sản ngữ nghĩa càng chuẩn** — đó mới là nguồn thực sự của việc Agent càng dùng càng thông minh.

Các sản phẩm cloud liên quan: lưu trữ và phân tích dữ liệu — dịch vụ log SLS; xây và cộng tác Agent — Alibaba Cloud AgentCore; đánh giá và tiến hoá Agent — AgentLoop.

## Ba — Kịch bản triển khai và thành quả

Việc vận hành nghiệp vụ cloud native có một chuỗi được chạy đi chạy lại: xem bức tranh lớn, tách cấu trúc, tìm quy kết, chốt hành động, theo dõi hiệu quả. Thứ Mamba Insight muốn làm là tự động hoá và song song hoá ba bước đầu (xem, tách, tìm), hỗ trợ hai bước sau (chốt, theo dõi), để nén thời gian từ "ý tưởng" tới "có dữ liệu chống đỡ".

### 3.1 Mục tiêu: nâng hiệu suất 10X cho trọn quy trình

Mục tiêu chỉ có một: rút ngắn đầu-cuối chu kỳ từ "ý tưởng" tới "dữ liệu chống đỡ" của bộ phận vận hành — insight về cơ hội từ tuần xuống ngày, phân phối cơ hội từ tuần xuống ngày, việc theo dõi quá trình và phản hồi cập nhật theo tuần, còn phân tích kinh doanh và soát lại thì ở mức phút. Bản thân các hành động vận hành triển khai dọc trọn vòng đời khách hàng: thu khách mới, cảnh báo retention, mở rộng quy mô, soát lại kinh doanh; và thứ Mamba phải phủ là trọn chuỗi đó — việc nâng hiệu suất không đặt cược vào một điểm đơn lẻ, mà ở chỗ chạy thông cả chuỗi đầu-cuối. Bốn nhóm kịch bản cốt lõi dưới đây chính là được trải ra theo vòng đời này.

### 3.2 Bốn nhóm kịch bản phân tích cốt lõi

(Hỗ trợ chat riêng, chat nhóm, task định kỳ, tự động ghi vào tài liệu DingTalk)

| Kịch bản | Vấn đề cốt lõi | Logic mô hình hoá |
| --- | --- | --- |
| Tăng trưởng khách mới (Lead→Customer) | Khách mới đến từ đâu, sản phẩm nào hút khách mới hiệu quả nhất | Định nghĩa pool lưu lượng theo người dùng × sản phẩm × hành vi, rồi quy kết đóng góp theo kênh / chân dung |
| Retention (Activation→Retention) | Ai đang rời bỏ, tín hiệu báo trước là gì | Lấy "mức tiêu giảm / về không liên tục N tháng" làm cảnh báo, chồng thêm hành vi truy cập để cảnh báo sớm |
| Mở rộng quy mô (Expansion) | Ai có tiềm năng bán chéo / nâng gói | Lấy khách đã chuyển đổi làm mẫu dương để trích điểm chung, rồi khớp ngược sang các khách tương tự chưa chuyển đổi |
| Soát lại kinh doanh (Review) | Nhịp độ kỳ này và mức đạt mục tiêu có lành mạnh không | Gom kết quả ba tầng trên thành pool vật liệu cho báo cáo tuần, tháng, rồi gọi Skill báo cáo hai tuần để tự động lên bản thảo |

## Bốn — Triển vọng tương lai

Từ ý tưởng "có thể tra dữ liệu bằng ngôn ngữ tự nhiên được không", tới việc phủ toàn bộ dòng sản phẩm cloud native và chạy thông trọn chuỗi từ truy vấn tạm thời tới báo cáo định kỳ, số cái hố đã vấp còn nhiều hơn số điều viết ra ở đây. Đây là một con đường tương đối phổ quát mà chúng tôi chạy ra được trong nghiệp vụ thật; nếu đội của bạn cũng đang làm việc tương tự thì rất mong được trao đổi.
