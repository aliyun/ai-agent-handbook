# Kitta: Code Review Agent chuyên biệt theo lĩnh vực

# Tóm lược

Sau khi lập trình có AI hỗ trợ trở nên phổ biến, sản lượng code tăng theo cấp số nhân, nhưng nhân lực review thì không mở rộng theo. Với phần mềm nền tảng như kernel, kích thước PR và thời gian thẩm định tăng vọt; còn các công cụ AI Review đa dụng, vì thiếu tri thức lĩnh vực và hiểu biết nghiệp vụ, khó đáp ứng được yêu cầu soát ở mức chuyên gia. Nút thắt hiệu suất R&D đang nhanh chóng dịch từ khâu "viết" sang khâu "soát".

Bản white paper này giới thiệu **Kitta**, một Code Review Agent tuỳ biến sâu theo lĩnh vực. Nó lĩnh vực hoá một Agent đa dụng bằng cách kết tinh tài sản chuyên gia ở mức project, tuỳ biến quy trình soát và kho tri thức lĩnh vực, đồng thời dựng một vòng khép kín tiến hoá phối hợp online – offline, để giải quyết chính xác các vấn đề code đặc thù của lĩnh vực.

Kitta chạy trên production ở cộng đồng OpenAnolis tới nay đã hoàn tất soát hơn 70 nghìn patch, với độ chính xác của cổng kiểm soát đạt 97% và tỉ lệ merge giữ ổn định ở mức 62%. Phương pháp luận tuỳ biến theo lĩnh vực của nó đã được kiểm chứng ở sáu lĩnh vực lớn gồm kernel hệ điều hành, compiler, nền tảng cloud native…, đạt mức nâng chất lượng soát 17,0%–31,6%, và thành công giải phóng sự chú ý của Maintainer từ việc soát từng dòng sang việc phân xử các điểm tranh cãi then chốt.

---

## Bối cảnh và hiện trạng

### 1.1 Sau khi lượng code bùng nổ, áp lực chất lượng tăng vọt

Trước hết hãy nhìn vài nhóm con số.

Số CVE mà Linux kernel upstream sửa đang tăng nhanh: các version kernel 6.9 tới 6.19 đại thể còn ở khoảng bốn năm trăm, tới 7.0 đã nhảy lên khoảng 1250, còn 7.2 thì tiệm cận 1900, và ước tính tới version 7.3 con số sẽ vượt 2000. Phóng ra cả ngành thì mức tăng CVE theo năm còn dữ dội hơn — tổng thể +394%, mức nghiêm trọng cao +811% (nguồn dữ liệu: Linux Foundation, *The CRA Readiness Reality: What Changed and What Didn't Between 2025 and 2026*). Nhóm tăng trưởng này phơi ra áp lực chất lượng code của hiện trạng: cả số lượng lẫn mức nguy hại của các khiếm khuyết code lộ ra đều đang tăng liên tục. Kéo theo đó, lượng code mà các project phần mềm mã nguồn mở phải merge cũng tăng đột biến. Lấy repo kernel ANCK của cộng đồng OpenAnolis làm ví dụ, số PR merge vào nhánh của hai version chủ đạo liên tục leo thang sau khi AI Agent được đưa vào.

![image.png](../../assets/imgs/chapter-25/image-001.png)

Dữ liệu ở phía hiệu suất R&D cũng xác nhận xu thế này. Báo cáo thường niên *State of AI-assisted Software Development* do DORA (dự án nghiên cứu hiệu suất R&D thuộc Google Cloud) công bố cho thấy: trong khi AI tham gia sâu vào việc phát triển, tỉ lệ bug của code +9%, thời gian thẩm định code +91%, và kích thước PR trung bình +154% (phiên bản này có khoảng 5.000 người tham gia khảo sát; các con số là theo chuẩn đo tương quan chứ không phải kết luận nhân quả).

Tóm lại, trong thời đại AI Coding người – máy cùng viết, việc viết code không còn bị giới hạn bởi nhân lực nữa, nhưng nhân lực soát thì không tăng theo. Nút thắt năng suất đang dịch từ "viết" sang "soát".

### 1.2 Ý nghĩa của việc review code trong Agentic CI

Trước xu thế đó, cộng đồng OpenAnolis đang khám phá hình thái tổ chức R&D AI Native, nâng cấp continuous integration thành **Agentic Continuous Integration**, với cả pipeline chia thành bốn khâu:

1. **Lập trình cộng tác với AI** — năng suất R&D tăng vọt trên diện rộng, người và máy cùng viết, việc viết code không còn bị giới hạn bởi nhân lực;

2. **Review code thông minh** — cần kiểm quy phạm và quy trình R&D, tính nhất quán về kiến trúc và thiết kế, tính trọn vẹn của thay đổi cùng các phụ thuộc tiền đề, khiếm khuyết và rủi ro bảo mật; nhưng tài nguyên soát thủ công không đủ, nên review bằng AI là tất yếu;

3. **Test thông minh** — gồm săn tìm lỗ hổng chiều sâu, test có trọng tâm cho patch, kiểm chứng patch bảo mật, test hồi quy và hiệu năng, cùng phần kiểm chứng test sâu hơn;

4. **Cộng đồng thẩm định và merge** — con người ra quyết định cuối cùng.

Có thể thấy phần review bằng AI nằm ở vị trí nối trên xuống dưới: phía thượng nguồn, việc lập trình cộng tác với AI đẩy sản lượng code lên cao; còn phía hạ nguồn, phần test thông minh và việc merge của cộng đồng đều dựng trên tiền đề "code đi vào khâu test và merge là đáng tin". Nếu khâu review thất thủ, thì hoặc khiếm khuyết lọt xuống hạ nguồn, hoặc Maintainer bị nhấn chìm bởi cơn lũ PR do người và máy cùng viết ra. Đó chính là vấn đề mà Kitta muốn giải quyết.

## Những thách thức tầng sâu của AI Code Review

AI Code Review mang lại một số lợi ích thấy rõ, ví dụ tốc độ phản hồi nhanh hơn hẳn, chặn tự động được các khiếm khuyết cơ bản… Tuy nhiên, các công cụ Review AI đa dụng thường không đạt được yêu cầu soát ở mức chuyên gia dùng được trong nghiệp vụ lõi.

Tách ra mà xem, các phương án Code Review đa dụng hiện nay đều có hạn chế rõ ràng ở hai chiều. Một là **ràng buộc hành vi kỹ thuật chưa đủ**: phủ không hết, vị trí bị trôi, hiệu quả không ổn định — khi thay đổi lớn thì có xu hướng chỉ soát một phần file dẫn tới bỏ sót, vấn đề báo ra không khớp với vị trí code thật, và chất lượng soát dao động mạnh theo những khác biệt nhỏ trong prompt. Hai là **độ sâu kiểm tra chưa đủ**: thiếu phần hiểu ngữ nghĩa về project đang soát, luật thì hời hợt bề mặt — đối xử như nhau với mọi project, mọi lần soát, nên chỉ quét được khiếm khuyết của bản thân code mà không cảm nhận được nhu cầu soát riêng của project. Cụ thể biểu hiện thành ba thách thức tầng sâu:

**Thiếu tri thức lĩnh vực.** Các stack công nghệ khác lĩnh vực chênh nhau rất xa, và hệ tri thức thì cần cập nhật động. Model đa dụng đã thấy rất nhiều code, nhưng chưa chắc hiểu ngữ nghĩa lock của kernel, cũng chưa chắc hiểu quy ước về biểu diễn trung gian của compiler — mà đó lại đúng là những thứ quyết định kết luận soát đúng hay sai.

**Hiểu nghiệp vụ chưa đủ.** Mô hình phát triển của các project rất đa dạng, nên định vị và chức năng của việc soát phải bám sát kịch bản nghiệp vụ. Với project mã nguồn mở của cộng đồng, repo nội bộ doanh nghiệp và việc duy trì một bản phân phối, thì chuẩn "cái gì là vấn đề, vấn đề nghiêm trọng tới đâu" khác nhau hoàn toàn.

**Ranh giới tin cậy mơ hồ.** Thiếu chuẩn đánh giá chất lượng khách quan, và thiếu cơ chế tiến hoá khớp được với nhu cầu người dùng. Người dùng nói "tốt" chưa chắc là tốt thật, còn việc Agent tự thấy hài lòng thì càng không đáng tin — không có vòng khép kín đánh giá và tiến hoá khách quan thì không có cơ sở nào để dựng niềm tin.

Tóm một câu: khi AI tham gia sâu vào nghiệp vụ lõi, AI "đọc hiểu" được code, nhưng chưa chắc "hiểu" được project.

## Thực tiễn kỹ thuật của Kitta Code Review Agent

Nhắm vào ba thách thức đó, phương án thực hành của Kitta là lĩnh vực hoá một Agent đa dụng, qua "ba bước" mà dựng nên một Code Review Agent mức chuyên gia thực sự hiểu nghề.

### 3.1 Bước một: quản lý tài sản chuyên gia ở mức project

Tri thức lĩnh vực không từ trên trời rơi xuống, mà được chắt ra từ lịch sử thật. Kitta xuất phát từ các bản ghi soát và khiếm khuyết thật trong lịch sử R&D của cộng đồng, phủ dữ liệu nhiều nguồn như repo GitHub của project. Các bản ghi gốc qua các bước thu thập và liên kết, chỉnh trang khử nhiễu, phân giải ngữ nghĩa, tái hiện cô lập, rồi kết tinh thành tài sản chuyên gia ở mức project; trong đó phần "tái hiện cô lập" là để mỗi mẫu khiếm khuyết cùng kết luận kỳ vọng đều kiểm chứng được và chịu được truy vấn, chứ không phải coi nhiễu là kinh nghiệm. Tài sản này gồm hai nhóm nội dung cốt lõi:

* **Chuẩn phán định** — nguyên tắc soát, mẫu khiếm khuyết, thông lệ của project; trả lời câu "phán theo chuẩn nào";

* **Mẫu kiểm chứng** — mẫu có vấn đề, mẫu bình thường, kết luận kỳ vọng; trả lời câu "phán đúng hay sai thì đo bằng gì".

Những tài sản này kiểm chứng được, kết tinh được, tái dùng được: đổi sang một project mới thì cùng pipeline đó có thể chắt lại lịch sử thật của nó thành một bộ tài sản chuyên gia mới. Bản chất của bước này là biến chuyện "hiểu nghề" từ kinh nghiệm cá nhân thành năng lực tổ chức.

### 3.2 Bước hai: tuỳ biến việc soát code theo hai bánh dẫn động

Có tài sản chuyên gia rồi thì phải giải quyết tiếp câu hỏi "soát ra sao". Cách làm của Kitta là hai bánh dẫn động — **quy trình định nghĩa soát ở đâu, tri thức quyết định soát thế nào**. Dưới đây lấy việc triển khai trên ANCK của cộng đồng OpenAnolis làm ví dụ, xem hai bánh này mỗi bên làm gì.

**Tuỳ biến quy trình soát, để AI soát đủ**: định nghĩa việc soát phải nhìn vào đâu, gồm các chiều nhất quán ngữ nghĩa, trọn vẹn khi backport, quy phạm của bản phân phối, rủi ro tích hợp — nhất quán ngữ nghĩa ngăn hành vi của patch đi lệch khỏi kỳ vọng; trọn vẹn khi backport thì canh xem chuỗi patch xuyên version có đủ không, có sót gì không; quy phạm bản phân phối thì gác xem có khớp yêu cầu merge của bản phân phối không; còn rủi ro tích hợp thì đánh giá các ảnh hưởng dây chuyền sau khi thay đổi vào codebase. Bốn chiều đó bảo đảm những gì cần soát đều được soát, không sót mục nào.

Ở ANCK, trọng tâm tuỳ biến quy trình là **Code Review cho patch backport**. Backport patch là thao tác tần suất cao khi duy trì một cộng đồng kernel hạ nguồn: khi backport patch upstream xuống hạ nguồn, thường phải thích ứng theo context hạ nguồn, nên vừa phải phán định chính xác việc thích ứng có đúng không, vừa phải xác nhận việc backport có trọn vẹn không, có mang theo cả các bản sửa về sau của upstream không. Quanh kịch bản đó, Kitta tuỳ biến hai góc nhìn soát đặc thù cho kernel:

* **Kiểm nhất quán ngữ nghĩa patch** — nhận diện khác biệt giữa patch backport và patch gốc upstream, rồi kết hợp ngữ nghĩa mà phán định tính nhất quán về chức năng của patch. Về phương án thì truy nguyên vi mô và so khác biệt ở mức patch trước, rồi mới đánh giá vĩ mô xem chức năng tổng thể có nhất quán không, tránh kiểu bỏ lọt "từng dòng đều đúng mà tổng thể đã đổi".

* **Kiểm tính trọn vẹn của patch** — lần theo chuỗi phụ thuộc upstream của patch backport một cách thông minh, tự động nhận diện các patch Fixes tương ứng ở upstream, dùng quy trình tra cứu Fixes bị sót bốn giai đoạn, chặn việc các lỗ hổng đã biết quay trở lại.

Ngoài ra, nhắm vào hiện trạng "việc soát chất lượng của bản thân code chỉ là một khâu" trong quy trình sản phẩm hoá ở hạ nguồn, Kitta còn phủ các mục soát thuộc nhóm quy trình như kiểm quy phạm phần mô tả PR, kiểm tính nhất quán giữa mô tả và code — mở rộng phạm vi soát từ bản thân code ra trọn context của quy trình R&D.

**Tuỳ biến tri thức lĩnh vực, để AI soát sâu**: quyết định phán một vấn đề ra sao, dựa vào kho tri thức phân tầng nhiều nguồn, tách theo lĩnh vực con, kết tinh các mẫu khiếm khuyết điển hình, để phán đoán của Agent bám sát kinh nghiệm thật của chuyên gia trong lĩnh vực đó, chứ không phải những "best practice" chung chung. Ở ANCK, vòng tuỳ biến này được triển khai thành ba việc:

* **Kỹ thuật dữ liệu lĩnh vực kernel** — thu thập tri thức lĩnh vực kernel từ nhiều nguồn, qua pipeline xử lý gồm sàng lọc dữ liệu, tổng hợp dữ liệu, cân bằng dữ liệu, để có được kho tri thức lĩnh vực cùng dữ liệu Benchmark;

* **Kho tri thức chuyên cho từng subsystem** — điểm quan tâm khi soát ở các subsystem khác nhau của kernel chênh nhau rất nhiều, nên tổ chức kho tri thức chuyên theo subsystem, để việc soát bám sát thông lệ thật của từng lĩnh vực con;

* **Quy trình soát chiều sâu** — đưa vào mạch soát "suy đoán có tội — phân tích chuỗi gọi toàn stack — tự tranh biện": giả định code có vấn đề trước, rồi lần theo ngữ nghĩa dọc chuỗi gọi toàn stack, rồi tự tranh biện để kiểm chứng kết luận, nhằm tăng độ sâu nhận diện các rủi ro code then chốt thường gặp ở kernel.

Để hiệu quả tuỳ biến đo được, Kitta còn dựng **hệ đánh giá Benchmark**: thu dữ liệu từ ba loại nguồn — LKML (quá trình thẩm định của Reviewer thật trong cộng đồng, phân bố vấn đề đều, tính chân thực cao), sashiko benchmark (ứng chính xác một commit — một issue) và dữ liệu từ cộng đồng OpenAnolis trên Gitee; đồng thời đưa nhiều công trình soát code SOTA như sashiko, review-prompts, qoder vào đánh giá so sánh ngang, rồi dùng kết quả so sánh để dẫn dắt việc tiến hoá Skill.

### 3.3 Bước ba: tiến hoá lặp phối hợp online – offline

Tri thức lĩnh vực là thứ sống, nên Agent cũng phải tiến hoá liên tục. Kitta dùng cơ chế lặp phối hợp online – offline:

**Phía offline, vòng tối ưu bằng mẫu kiểm chứng** — dùng mẫu kiểm chứng để đánh giá cô lập, rồi tự soi lại và tiến hoá theo kết quả, liên tục hiệu chỉnh chuẩn phán định của Agent.

**Phía online, hiệu chỉnh liên tục bằng quan sát production** — dựa trên nội dung ý kiến Review và hành vi code về sau của người phát triển, chúng tôi phát triển một framework đánh giá phân tích và tổng hợp thông minh mức hữu hiệu của từng loại ý kiến; kết hợp với việc giám sát liên tục tỉ lệ ý kiến được tiếp nhận, cập nhật tri thức, hiệu chỉnh lặp và chỉnh ngưỡng, để Agent càng dùng càng chính xác trong sử dụng thật.

![image.png](../../assets/imgs/chapter-25/image-002.png)

## Hiệu quả triển khai của Kitta

### 4.1 Thực tiễn ở repo kernel của cộng đồng OpenAnolis

Kitta đã triển khai và chạy liên tục trong pipeline R&D thật của cộng đồng OpenAnolis, soát từng PR kernel theo một pipeline năm giai đoạn hoàn chỉnh. Khi người phát triển gửi PR hay gõ `/check-code-review` trong comment, task soát sẽ được kích hoạt; cả quy trình thì phân loại trước, rồi kiểm quy phạm và phụ thuộc, cuối cùng mới tới chất lượng code — từng lớp tiến dần.

**Giai đoạn 1 — Phân loại PR.** Trước hết Kitta phán định đây là patch tự phát triển thuần tuý hay patch backport: nếu trong Commit có khai báo patch upstream kiểu `commit xxxx upstream` thì xếp vào patch backport. Việc phân loại quyết định phạm vi kiểm tra về sau — patch tự phát triển thuần tuý sẽ không chạy phần kiểm tính trọn vẹn của patch và kiểm nhất quán khi backport, tránh chi phí không cần thiết.

**Giai đoạn 2 — Kiểm quy phạm PR/Commit Message.** Dựa trên tài liệu quy phạm của cộng đồng OpenAnolis, kiểm phần mô tả PR, Commit Title, Commit Message… Bước này trông "nhẹ" nhưng chặn trước được rất nhiều chi phí bảo trì do mô tả không rõ, tiêu đề không đúng quy phạm. Không có vấn đề thì không báo cáo; có vấn đề thì đưa ra khuyến nghị về quy phạm Message để người phát triển tham khảo.

![image.png](../../assets/imgs/chapter-25/image-003.png)

**Giai đoạn 3 — Kiểm tính trọn vẹn của patch.** Với patch backport, Kitta lần theo chuỗi phụ thuộc upstream của nó một cách thông minh, tự động nhận diện các patch Fixes tương ứng ở upstream, và rà soát phần bị sót theo mạch "tra cứu Fixes ở upstream → phán định có trong PR không → phán định có sẵn trong repo hạ nguồn chưa". Kết quả kiểm chia ba loại: `không sót Fixes` nghĩa là không cần bổ sung; `patch Fixes đã merge` nghĩa là bản sửa liên quan đã tồn tại trong repo hạ nguồn; còn `patch Fixes bị sót` thì yêu cầu người phát triển bổ sung, để ngăn các lỗ hổng đã biết bị đưa lại vào hạ nguồn.

![image.png](../../assets/imgs/chapter-25/image-004.png)

**Giai đoạn 4 — Kiểm nhất quán khi backport patch.** Với các patch backport có khai báo nguồn upstream, Kitta lấy patch gốc upstream trước, rồi so sánh ở ba tầng: so cơ bản xem file và khối code bị sửa có nhất quán không; so context xem các symbol, hàm, định nghĩa biến được tham chiếu có nhất quán không, có thích ứng hợp lý không; còn so ngữ nghĩa thì dùng LLM phán định patch ở thượng nguồn và hạ nguồn có hiện thực cùng chức năng và cùng ngữ nghĩa không. Kết quả kiểm xuất ra theo tầng từ `consistent` tới `text-inconsistent`, `semantic-inconsistent`, `inconsistent`, giúp người phát triển và Maintainer nhanh chóng định vị được bản chất của khác biệt.

![image.png](../../assets/imgs/chapter-25/image-005.png)

**Giai đoạn 5 — Soát chất lượng code.** Cuối cùng mới tới bản thân code: Kitta chia các vấn đề soát ra được theo mức nghiêm trọng thành `Critical` và `Medium / Low`; các vấn đề Critical thường được định vị tới đúng dòng code bằng comment inline, và cần người phát triển xử lý hoặc nói rõ có phải báo nhầm không; còn nếu không phát hiện rủi ro thì đưa ra `LGTM`.

![image.png](../../assets/imgs/chapter-25/image-006.png)

Từ khi Kitta lên production tới nay, dữ liệu vận hành cốt lõi như sau:

| Chỉ số | Giá trị |
| --- | --- |
| Quy mô soát | Hơn 70 nghìn |
| Độ chính xác của cổng kiểm soát | 97% |
| Tỉ lệ code được merge | 62% |

Thay đổi code ở ANCK chủ yếu là patch backport và patch tự phát triển, vừa phải bảo đảm nhất quán ngữ nghĩa với upstream, vừa phải thích ứng với nhu cầu sản phẩm hoá ở hạ nguồn, nên yêu cầu về độ sâu soát và độ chính xác đều rất cao. Dựa trên framework đánh giá online mà thống kê hồi cứu toàn bộ PR đã merge mà Kitta xử lý từ khi lên production, cả hai kịch bản cốt lõi đều đạt hiệu quả định lượng được:

* **Kịch bản patch backport**: tỉ lệ tiếp nhận ý kiến kiểm nhất quán 70,4%, độ chính xác 99,8%;

* **Kịch bản PR tự phát triển**: tỉ lệ tiếp nhận ý kiến Code Review 41,8%, độ chính xác 73,6%.

Sự tham gia của Kitta khiến rất nhiều vấn đề code được nhận ra trước khi vào khâu soát của con người, kèm theo các khuyến nghị sửa định vị được và kiểm chứng được. Trong thực tế, rất nhiều PR sau khi Kitta nêu ý kiến thì người phát triển bổ sung thẳng patch phụ thuộc hay chỉnh phần hiện thực theo khuyến nghị, giảm mạnh số vòng Maintainer phải hỏi đi hỏi lại và xác nhận qua lại. Với Maintainer của cộng đồng, điều đó có nghĩa là họ chuyển được sự chú ý từ "soát từng dòng thay đổi" sang "phán định các điểm tranh cãi then chốt"; còn với người phát triển thì nghĩa là phản hồi nhanh hơn và nhịp merge dự đoán được hơn.

### 4.2 Hệ đánh giá Benchmark: làm cho hiệu quả tuỳ biến đo được

Để hiệu quả tuỳ biến đo được, Kitta còn dựng một hệ đánh giá Benchmark: thu dữ liệu từ ba loại nguồn — LKML (quá trình thẩm định của Reviewer thật trong cộng đồng, phân bố vấn đề đều, tính chân thực cao), sashiko benchmark (ứng chính xác một commit — một issue), và dữ liệu cộng đồng OpenAnolis. Trong đó:

* Dữ liệu LKML giúp Kitta khớp được với chuẩn phán định của Reviewer thật trong cộng đồng.

* sashiko benchmark cung cấp ánh xạ một commit — một issue nghiêm ngặt, giúp hướng cải thiện năng lực đủ tập trung.

* Còn dữ liệu cộng đồng OpenAnolis thì kéo việc đánh giá về đúng ngữ cảnh của repo mà Kitta thực sự phục vụ.

Qua việc so sánh ngang với các phương án SOTA như sashiko, review-prompts, qoder, Kitta thấy rõ được khoảng cách của chính mình ở những loại khiếm khuyết nhất định, ở những subsystem nhất định, rồi chuyển các khoảng cách đó thành độ ưu tiên cho việc lặp Skill. Về sau, hệ Benchmark này còn sẽ hỗ trợ kết nối thêm các Skill/Benchmark khác để đánh giá, nhằm liên tục lặp và tối ưu năng lực.

### 4.3 Thực tiễn phổ quát xuyên lĩnh vực

Năng lực của Kitta không giới hạn ở kernel. Bằng cách trừu tượng hoá tài sản chuyên gia và quy trình soát thành các Skill di chuyển được, Kitta đã hoàn tất kiểm chứng ở sáu lĩnh vực: kernel hệ điều hành, compiler, file system, hệ thống mạng, nền tảng cloud native và framework tính toán AI. Điểm chung của các lĩnh vực này là quy mô code lớn, ngữ nghĩa sâu, ngưỡng soát cao, và các công cụ Review đa dụng truyền thống thường khó cho ra kết luận có giá trị. Biểu hiện của Kitta trong các kịch bản đó như sau:

| Lĩnh vực | Mức nâng chất lượng soát |
| --- | --- |
| Kernel hệ điều hành | 20,4% |
| Compiler | 24,4% |
| File system | 17,0% |
| Hệ thống mạng | 19,8% |
| Nền tảng cloud native | 31,6% |
| Framework tính toán AI | 21,7% |

Mức nâng ổn định xuyên lĩnh vực cho thấy phương pháp luận "tuỳ biến theo lĩnh vực" của Kitta có tính phổ quát: dù là ngữ nghĩa lock của kernel, biểu diễn trung gian của compiler hay quy ước cấu hình của nền tảng cloud native, đều dựng được năng lực Review mức chuyên gia bằng cách kết tinh tài sản chuyên gia và tuỳ biến quy trình soát. Điều này cũng đặt nền cho việc mở rộng sang nhiều project phần mềm nền tảng hơn như LLVM, CRIU, BaseOS về sau.

### 4.4 Data flywheel: dữ liệu kết tinh xuống dưới, năng lực model nuôi ngược lên trên

Trong quá trình phục vụ, Kitta còn liên tục kết tinh dữ liệu dùng được cho model nền Qwen, tạo thành bánh đà "dữ liệu kết tinh xuống dưới, năng lực nuôi ngược lên trên":

| Dữ liệu kết tinh | Năng lực được nuôi ngược |
| --- | --- |
| Bộ dữ liệu Benchmark chuẩn do chuyên gia gán nhãn | Năng lực phát hiện lỗ hổng — hiểu ngữ nghĩa sâu hơn và phát hiện lỗ hổng tiềm ẩn |
| Dữ liệu theo dõi trajectory chuỗi suy nghĩ của Agent | Năng lực tuân thủ chỉ thị — gọi tool và tuân thủ chỉ thị chính xác hơn |
| Dữ liệu căn chỉnh theo sở thích người dùng | Năng lực đối thoại với người dùng — diễn đạt ý kiến soát bám sát nhu cầu người dùng |
| Các hành động Coding về sau của người dùng | Năng lực sinh code — Coding và Debug xuyên ngôn ngữ tốt hơn |

Phần gán nhãn của chuyên gia, trajectory chuỗi suy nghĩ, sở thích người dùng và các thay đổi code về sau sinh ra trong quá trình thẩm định vừa là nhiên liệu để cải thiện chính dịch vụ Review, vừa nuôi ngược lại những năng lực nền tảng hơn của model nền. Quan trọng hơn, những dữ liệu này đến từ việc vận hành thật của cộng đồng chứ không phải một bộ dữ liệu tĩnh dựng thủ công, nên mỗi vòng lặp đều khiến Kitta bám sát hơn kịch bản R&D thực tế.

## Tóm tắt thực tiễn: ranh giới và đồng thuận của AI Code Review

Sau khi triển khai thực tế, chúng tôi nhận ra rằng muốn tối đa hoá hiệu quả của AI Code Review thì trước hết phải làm rõ **ranh giới tin cậy giữa AI và con người trong việc cộng tác.** Kitta theo ba nguyên tắc:

**Phân cấp chính xác, kiềm chế làm phiền — giữ chặt lằn ranh của cổng kiểm soát, nới không gian cho khuyến nghị.** Với lỗ hổng bảo mật và các thay đổi phá vỡ thì kiên quyết chặn luồng CI, đó là lằn ranh; còn các vấn đề khác thì trình bày theo cấp và chỉ mang tính gợi ý, không chiếm quá nhiều sự chú ý của người phát triển, để cân bằng ngưỡng phơi bày vấn đề.

**Lấy hành vi làm chứng, từ chối tự sướng — người dùng có thể im lặng, nhưng thay đổi code thì không nói dối được.** Không coi việc người phát triển lặng lẽ bỏ qua là sự công nhận; không nhìn người dùng nói gì mà nhìn "code đã sửa cái gì": qua cơ chế ngắt theo độ tin cậy và việc lần theo thay đổi code thật mà dẫn dắt việc soát và việc lặp model dựa trên thay đổi khách quan.

**Con người đỡ lưng, rút lui đúng lúc.** AI là đèn pha, rọi sáng rủi ro và đưa ra bằng chứng; còn Maintainer là vô lăng, quyền quyết định cuối cùng thuộc về con người, và đó là tuyến phòng thủ cuối.

Cổng kiểm soát AI tốt nhất không phải là thay thế Maintainer, mà là để họ chỉ dồn sức vào đúng những chỗ thực sự cần trí tuệ con người.

---
