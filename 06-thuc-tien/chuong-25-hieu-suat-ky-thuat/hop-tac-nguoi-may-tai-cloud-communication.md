# Từ nâng hiệu suất viết code tới bàn giao đầu-cuối — thực tiễn cộng tác người – máy ở mảng Cloud Communication

## Một — Nâng hiệu suất viết code không đồng nghĩa với nâng hiệu suất bàn giao

Cộng tác trong R&D là một trong những hướng triển khai AI then chốt nhất hiện nay. Đội R&D Cloud Communication đón nhận AI một cách chủ động và bắt đầu nâng hiệu suất bằng AI khá sớm: năm 2024 trải rộng phần tự động hoàn thành code, lập trình kiểu đối thoại và IDE sinh thành vào công việc phát triển hằng ngày. Năm 2025 chuẩn hoá tác nghiệp, kết tinh các quy phạm và tri thức lĩnh vực thành các vật liệu như hiến pháp project, Skill, để AI làm việc có quy củ. Tới năm 2026 thì đã chuyển hẳn sang mô hình tác nghiệp theo Agent, và đang tiến tới bàn giao đầu-cuối.

![fig1-1-ba-giai-doan.png](../../assets/imgs/chapter-25/image-018.png)

 _Hình 1-1 — Ba giai đoạn tiến hoá của AI Coding_

Đi hết ba giai đoạn, xuất hiện một kết quả phản trực giác: lượng code AI sinh ra tăng gấp N lần, nhưng hiệu suất bàn giao đầu-cuối thì không nhảy vọt theo. Một nhu cầu, từ lúc nêu ra tới lúc lên production, chu kỳ bàn giao chỉ nén được một đoạn rất nhỏ, mức cải thiện không rõ rệt. Sự tương phản đó khiến chúng tôi nhìn lại cả chuỗi.

Sau khi phân tích, chúng tôi nhận ra: **nâng hiệu suất viết code không đồng nghĩa với nâng hiệu suất bàn giao.** Chỗ tắc không nằm ở bản thân việc viết code, mà ở những node ngoài việc viết code vẫn do con người nối: (1) Việc làm rõ và đối chiếu nhu cầu ngốn nhân lực; khi PRD thiếu yếu tố thì Agent không bắt tay thẳng được, con người phải bù context. (2) Việc review code không theo kịp sản lượng; một lần Agent cho ra cả vạn dòng code, mà cuối cùng vẫn phải có người soát từng dòng, nên hiệu suất khó nâng mạnh. (3) Lịch test thành nút thắt; lượng AI sinh ra dồn lên là hàng đợi test thủ công tắc ngay. Từ đó có thể thấy, hễ trong chuỗi bàn giao còn một node do con người nối, thì node đó quyết định trần thông lượng. Muốn thực sự nâng hiệu suất đầu-cuối thì bắt buộc phải hiện thực mô hình bàn giao R&D **cộng tác Agent trên toàn quy trình**.

![fig1-2-so-sanh-code-va-ban-giao.png](../../assets/imgs/chapter-25/image-019.png)

 _Hình 1-2 — So sánh giữa việc viết code và việc bàn giao_

Mà muốn hiện thực mô hình bàn giao đầu-cuối cộng tác Agent trên toàn quy trình thì có ba vấn đề then chốt phải giải quyết.

**Thứ nhất là vấn đề cộng tác** — các Agent phối hợp với nhau ra sao.

Hiện gần như đội nào cũng tự xây Agent và Skill, mỗi bên làm phần mình quan tâm nhất tới mức tối đa: Agent kỹ thuật khi viết phương án kỹ thuật thì nhấn vào kiến trúc kỹ thuật và việc chọn middleware, còn Agent test ở hạ nguồn thì quan tâm hơn tới ranh giới hệ thống, observability và cách định vị lỗi. Sản phẩm của mỗi Agent ở giai đoạn của mình nhìn đều có vẻ đầy đủ, nhưng khi cộng tác thì phổ biến tình trạng "thứ hạ nguồn cần thì thượng nguồn không cho ra". Đây chính là bài toán cộng tác trong hệ multi-agent mà cả ngành đều thừa nhận — **mất context (context loss)**.

**Thứ hai là vấn đề ranh giới** — quyền hạn và phạm vi tác nghiệp của Agent được vạch ra sao.

Quyền hạn và phạm vi tác nghiệp của Agent thực ra không thuần tuý là vấn đề kỹ thuật, mà là vấn đề tổ chức — khi đưa Agent vào tổ chức như một yếu tố sản xuất mới, cái khó thật sự là quản lý nó ra sao: quyền hạn kiểm soát thế nào, có chuyện thì ai chịu trách nhiệm, ai lo việc lặp và tối ưu.

**Thứ ba là vấn đề triển khai** — mô hình sản xuất hoàn toàn mới này nối vào hệ thống sẵn có và chạy ổn định ra sao.

Hai cách cực đoan đều không nên: (1) *Sợ nghẹn mà bỏ ăn* — vì e ngại chu kỳ xây dựng hệ thống dài, hiệu quả tới chậm mà mãi không đưa AI vào, cứ dừng ở mô hình tác nghiệp thuần thủ công. (2) *Nóng vội cầu thành* — bỏ qua việc xây hệ kỹ thuật và kho tri thức, đặt trọn chất lượng vào năng lực model và dựa vào việc retry lặp đi lặp lại để đỡ hiệu quả.

Trước ba vấn đề đó, câu trả lời của chúng tôi lần lượt là **dây chuyền, digital twin và triển khai tiệm tiến**.

**Định nghĩa dây chuyền tác nghiệp chuẩn hoá để giải bài toán cộng tác.** Việc cộng tác Agent kiểu xưởng thủ công phụ thuộc vào kinh nghiệm cá nhân và sự phát huy của model trong lần đó, nên sản phẩm không ổn định, khó đạt yêu cầu sản xuất cấp doanh nghiệp. Cách giải của chúng tôi là định nghĩa một hợp đồng thống nhất cho việc cộng tác Agent, dựng cơ chế tác nghiệp theo dây chuyền: input, output và cách bàn giao của từng mắt xích đều được cố định dưới dạng quy phạm, để việc tác nghiệp R&D đi từ xưởng thủ công sang dây chuyền chuẩn hoá. Làm vậy bảo đảm chuẩn thống nhất, nói rõ mỗi bước cho ra cái gì, đạt chuẩn nào; và chất lượng kiểm soát được, không còn phụ thuộc vào thước đo chủ quan của kinh nghiệm cá nhân.

**Dùng digital twin để làm rõ vấn đề quyền hạn và ranh giới.** Cách dùng Agent trong ngành hiện nay đại thể chia hai loại: một là coi AI như một cá thể mới độc lập, tức một kỹ sư AI độc lập; hai là coi AI như **digital twin (phân thân số)**, tức coi Agent là phần nối dài của người phụ trách trong thế giới số.

Chúng tôi chọn cách tác nghiệp theo digital twin. Lý do là một khi coi AI là cá thể độc lập thì không tránh khỏi ba vấn đề: (1) Quyền hạn của Agent định ra sao, sửa được code nào, xem được dữ liệu nào. (2) Trách nhiệm truy ra sao — R&D là công việc rủi ro cao, một bug nhỏ cũng có thể thành sự cố production, nên có chuyện thì quy trách nhiệm thế nào. (3) Ai lo việc lặp liên tục cho Agent, và tài sản nó sinh ra thì con người dùng ra sao.

Vì digital twin tận dụng đúng cách tác nghiệp sẵn có của tổ chức, nên giải được cả ba vấn đề đó một thể. (1) Về quyền hạn, nó tái dùng thẳng quyền hạn của người mà nó nối dài, nên người và phân thân bị khuôn trong cùng một bộ ranh giới sẵn có, khỏi phải dựng lại từ đầu. (2) Về trách nhiệm, mỗi lần commit, mỗi sản phẩm đều gắn với chính người đó — ai làm, sửa gì, rõ như ban ngày. (3) Người được nối dài lo việc khởi tạo và xây dựng lặp cho phân thân; còn phân thân trong quá trình tác nghiệp lại cấu trúc hoá được tri thức nghiệp vụ, ngược lại giúp con người làm phần tin học hoá cho chắc.

**Triển khai mô hình mới một cách tiệm tiến, lấy ổn định làm ưu tiên.** Chúng tôi theo đồng thuận của ngành, triển khai mô hình bàn giao cộng tác Agent toàn quy trình vào mô hình sản xuất sẵn có theo nguyên tắc "ổn định ưu tiên, nới dần". Trước hết, ổn định áp đảo tất cả, tối đa hoá việc tránh sự cố production. Dựa trên nguyên tắc đó, chúng tôi định nghĩa một hệ đánh giá **mức rủi ro của nhu cầu**. Nói chung, các nhu cầu đơn giản như công cụ vận hành, cấu hình thì rủi ro nhỏ; còn các nhu cầu phức tạp thuộc chuỗi lõi, phát triển phối hợp xuyên ứng dụng thì rủi ro lớn. Chúng tôi đặt một cổng kiểm soát ở khâu đánh giá nhu cầu. Mỗi khi nhận một nhu cầu, hệ thống trước hết đánh giá mức rủi ro của nhu cầu (R), rồi đánh giá mức năng lực của phân thân (L) theo độ hoàn bị của vật liệu và phần kỹ thuật Harness. Nếu năng lực hiện tại của phân thân đủ xử lý nhu cầu ở mức rủi ro đó thì bàn giao bằng cộng tác Agent toàn quy trình; còn nếu năng lực chưa đủ thì vẫn bàn giao theo cách tác nghiệp thủ công. Trước hết giới hạn phạm vi tác nghiệp của Agent toàn quy trình vào các nhu cầu nhỏ, đơn giản. Đợi quy trình chạy ổn, vật liệu đủ đầy, rồi mới nới ranh giới ra từng chút một.

![fig1-3-tu-van-de-toi-cau-tra-loi.png](../../assets/imgs/chapter-25/image-020.png)

 _Hình 1-3 — Từ vấn đề tới câu trả lời_

Gộp ba câu trả lời lại chính là hệ bàn giao R&D dựa trên digital twin và dây chuyền tự động mà chúng tôi đang chạy hôm nay.

## Hai — Dây chuyền bàn giao đầu-cuối: kiến trúc bốn tầng và vòng khép kín tác nghiệp

### 2.1 Vòng khép kín tác nghiệp

Hệ bàn giao R&D dựa trên digital twin và dây chuyền tự động hiện thực được việc tác nghiệp liên tục 7×24 giờ. Digital twin vừa là lối vào của nhu cầu, vừa là router của nhu cầu. Các vai sản phẩm, nghiệp vụ, kỹ thuật đều gửi nhu cầu thẳng cho phân thân của người phụ trách R&D được; phân thân nhận việc rồi phán định năng lực trước — nếu năng lực hiện tại gánh được nhu cầu thì đi một mạch từ đối chiếu nhu cầu → phương án kỹ thuật → viết code → tự kiểm → chạy test, cả dây chuyền khép kín; còn nếu năng lực hiện tại chưa gánh được thì chuyển cho người phụ trách tương ứng, đi theo mô hình phát triển thủ công.

![fig2-1-vong-khep-kin.png](../../assets/imgs/chapter-25/image-021.png)

 _Hình 2-1 — Vòng khép kín tác nghiệp_

### 2.2 Kiến trúc bốn tầng

Hệ bàn giao R&D theo digital twin và dây chuyền tự động gồm bốn tầng từ dưới lên. Tầng đáy là **tầng công cụ**, gồm bot DingTalk, nền tảng thực thi Agent trên cloud cùng các hạ tầng khác. Trên nó là **tầng vật liệu ứng dụng**, cung cấp luật và căn cứ cho việc tác nghiệp của Agent. **Tầng dây chuyền** là môi trường tác nghiệp chính thức, nơi các Agent theo vai phối hợp làm việc. Trên cùng là **kho tri thức và nền tảng kiểm toán**, hiện thực việc kiểm toán lưu hồ sơ và lặp tri thức.

![fig2-2-kien-truc-bon-tang.png](../../assets/imgs/chapter-25/image-022.png)

 _Hình 2-2 — Kiến trúc bốn tầng_

Lối vào của tầng công cụ là bot DingTalk; phía nghiệp vụ gửi hạng mục công việc cho digital twin của người phụ trách R&D qua DingTalk. Về sau, việc làm rõ nhu cầu, đồng bộ tiến độ và phán định các điểm then chốt đều tương tác với bên nêu nhu cầu qua phiên IM của bot DingTalk. Môi trường thực thi là nền tảng thực thi trên cloud, cung cấp cho mỗi hạng mục công việc một workspace code riêng cùng các chức năng build, deploy, và chống đỡ việc các Agent theo vai cùng tác nghiệp. Engine bàn giao là trung tâm orchestration của dây chuyền, mô tả topology quy trình chín giai đoạn bằng state diagram, lo việc điều phối và quyết định trách nhiệm cùng nội dung công việc của từng Agent theo vai ở từng giai đoạn.

![fig2-3-tang-cong-cu.png](../../assets/imgs/chapter-25/image-023.png)

 _Hình 2-3 — Chuỗi thực thi_

Tầng vật liệu ứng dụng biến các quy phạm ngầm của từng ứng dụng thành vật liệu ràng buộc mà Agent nạp được, thực thi được. Nó gồm sáu loại nội dung: luật, hiến pháp project, mô tả ứng dụng, tài liệu kiến trúc, kinh nghiệm lịch sử và quy phạm viết code — cấp cho các công đoạn khác nhau của dây chuyền nạp theo nhu cầu qua một lối vào chỉ mục thống nhất. Độ hoàn bị của vật liệu quyết định trực tiếp mức năng lực của phân thân.

Tầng dây chuyền là chiến trường tác nghiệp chính. Bằng cách định nghĩa chín công đoạn lớn, nó cắt chuỗi bàn giao thành những đoạn trách nhiệm rõ ràng, và các công đoạn đẩy tới nhau bằng sản phẩm bàn giao. Chủ thể thực thi là digital twin của các vai sản phẩm, R&D, test, kiểm định cùng kiểm toán; còn Agent của người phụ trách R&D đóng vai điều phối, thống lĩnh việc tác nghiệp của các phân thân. Vật mang năng lực tác nghiệp của phân thân là các **Skill cắm rút được**, để các mảng nghiệp vụ khác nhau thay hay bổ sung theo nhu cầu, bảo đảm hệ này thích ứng được với nhiều kịch bản hơn.

Kho tri thức và nền tảng kiểm toán, tối ưu nằm ở trên cùng. Kho tri thức chưng cất các vật liệu gốc rời rạc thành những đơn vị tri thức có cấu trúc. Nền tảng kiểm toán thì sau khi bàn giao xong sẽ kiểm tra ở ba chiều dữ liệu, sản phẩm và quá trình; các vấn đề phát hiện được sẽ qua bộ định tuyến quy kết mà mở rộng vật liệu và kho tri thức, tạo thành vòng khép kín Loop. Tầng này chính là mấu chốt khiến cả hệ "càng dùng càng mạnh".

### 2.3 Việc lắp đặt digital twin

Việc lắp đặt phân thân được làm thành ba bước tích hợp; khi các điều kiện tiền đề đầy đủ thì một người trong 2–3 ngày là khởi tạo xong cả hệ thống:

1. **Nối kênh tin nhắn** — cấu hình bot IM cho phân thân, để nó có năng lực nhận gửi tin nhắn và tương tác trong phiên.

2. **Dựng môi trường thực thi** — mở một không gian thực thi độc lập cho phân thân trong môi trường thực thi trên cloud.

3. **Nạp vật liệu lĩnh vực** — hoàn bị phần vật liệu ứng dụng của ứng dụng đích, bổ sung nội dung cho kho tri thức lĩnh vực.

**Mô hình quyền hạn**: phân thân mượn quyền của con người để tác nghiệp, ranh giới hành vi bị ràng buộc bởi hệ quyền hạn và hệ phê duyệt sẵn có của nền tảng; thứ nhìn thấy trong hệ thống bao giờ cũng là người đang commit, người đang phê duyệt. Phân thân mượn quyền của người, nên trách nhiệm luôn neo vào con người.

![fig2-7-lap-dat-phan-than.png](../../assets/imgs/chapter-25/image-024.png)

 _Hình 2-4 — Lắp đặt phân thân_

Lắp đặt xong thì vai trò phía tổ chức cũng đổi theo: người phụ trách R&D chuyển từ người thực thi từng nhu cầu thành **người quản trị vật liệu và Skill + người phán định các điểm then chốt**. Con người lùi về hai điểm quyết định là xác nhận nhu cầu và xác nhận phương án kỹ thuật, còn các khâu ở giữa thì giao cho phân thân tự chủ tác nghiệp.

## Ba — Ba thiết kế then chốt: chuỗi hợp đồng, kiểm định chéo, tiệm tiến và Loop

Muốn mô hình bàn giao R&D cộng tác Agent toàn quy trình này thực sự chạy được thì phải đồng thời thoả ba tính chất:

1. Thông tin truyền ổn định giữa các công đoạn.

2. Các phân thân tự cộng tác gác cửa được cho nhau.

3. Cả hệ không suy thoái theo thời gian sử dụng.

Ba thứ đó lần lượt ứng với ba thiết kế then chốt:

1. Dựa trên **chuỗi hợp đồng** để cố định input và output của từng công đoạn thành hợp đồng lúc chạy, xoá bỏ việc mất context ngay từ cấu trúc.

2. **Nhiều phân thân tác nghiệp độc lập, Agent của người phụ trách kỹ thuật thu về một mối**, hiện thực việc nhiều phân thân cộng tác đầu-cuối.

3. **Tiệm tiến và Loop** kiểm soát nhịp nới ranh giới năng lực và việc kiểm toán nuôi ngược sau mỗi lần bàn giao, khiến hệ càng dùng càng mạnh.

### 3.1 Chuỗi hợp đồng: thông tin không suy giảm giữa các công đoạn

Rủi ro cốt lõi của việc cộng tác multi-agent nằm ở sự méo mó trong quá trình bàn giao context. Cách giải của chuỗi hợp đồng là cố định trước input, output và chuẩn đạt của từng công đoạn thành hợp đồng: **output của công đoạn trước đúng bằng input của công đoạn sau.** Các công đoạn không phụ thuộc vào việc con người kể lại và đấu nối, nên thông tin không bị biến dạng khi truyền.

Chuỗi hợp đồng cắt chuỗi bàn giao của dây chuyền thành chín công đoạn có trách nhiệm rõ ràng:

1. **Cổng nhu cầu**: đối chiếu mức rủi ro nhu cầu (R) với mức năng lực phân thân (L) để quyết định có nhận nhu cầu đó không.

2. **Đối chiếu nhu cầu**: bù đủ các yếu tố nhu cầu, làm rõ ranh giới qua phiên bàn tròn, cho ra `spec.md` có cấu trúc.

3. **Phương án kỹ thuật**: sinh `plan.md`, qua phần thẩm định độc lập và xác nhận của con người thì mới có hiệu lực.

4. **Viết code**: hiện thực theo từng lô trong `tasks.md`, commit code và tự động deploy lên môi trường test.

5. **R&D tự kiểm**: bốn góc nhìn soát độc lập, bàn giao báo cáo tự kiểm.

6. **Test**: tự động hoàn tất việc viết test case, dựng môi trường và chạy, bàn giao test case cùng báo cáo chạy.

7. **Kiểm định ở mức nền tảng**: soát nhánh phụ theo các yêu cầu tuân thủ cấp nền tảng, bàn giao báo cáo kiểm định.

8. **Kiểm toán lưu hồ sơ**: quét trực giao ba tầng cho trọn hạng mục, bản ghi quá trình vào kho tri thức.

9. **Con người cho qua**: người phụ trách R&D soát lại sản phẩm rồi merge và lên production.

Chín công đoạn đẩy tới nhau bằng sản phẩm bàn giao: input của bất kỳ công đoạn nào cũng đến từ sản phẩm bàn giao chính thức của công đoạn trước, và năng lực thực thi của mỗi công đoạn do các Skill cắm rút được gánh, có thể thay và bổ sung theo mảng nghiệp vụ.

Chuỗi hợp đồng về mặt kỹ thuật rơi thành hai ràng buộc cứng. **Ràng buộc thứ nhất là sản phẩm bàn giao bắt buộc**: mỗi công đoạn phải có sản phẩm bàn giao chính thức rõ ràng — giai đoạn phương án kỹ thuật bàn giao kế hoạch thực thi (`plan.md`), giai đoạn viết code bàn giao code và bản ghi thực thi, giai đoạn tự kiểm bàn giao báo cáo chạy (`check_reports`), còn giai đoạn test và kiểm định thì bàn giao test case, báo cáo chạy và báo cáo kiểm định. Thiếu sản phẩm bàn giao thì coi như công đoạn chưa xong, không được đẩy xuống hạ nguồn. Mắt xích nào muốn chảy tiếp thì trước hết phải đưa ra được một sản phẩm chính thức mà hạ nguồn tiêu thụ thẳng được.

**Ràng buộc thứ hai là phép kiểm lúc chạy do sản phẩm bàn giao dẫn dắt.** Dây chuyền kiểm ba lớp cho mỗi lần bàn giao — định dạng nhãn, modifier và danh tính người gửi — để ngăn Agent tự đẩy dây chuyền bằng lời tuyên bố miệng. Sản phẩm bị trả về sẽ kích hoạt việc làm lại ở thượng nguồn, và mất hiệu lực đẩy dây chuyền. Nhờ vậy, sản phẩm không đạt chuẩn thì bị trả về làm lại ngay tại chỗ, và những bán thành phẩm hỏng không chảy xuống công đoạn dưới.

![fig3-1-chuoi-hop-dong.png](../../assets/imgs/chapter-25/image-025.png)

 _Hình 3-1 — Chuỗi hợp đồng_

Chuỗi hợp đồng không phải một quy phạm tĩnh thiết kế một lần là xong, mà là một ràng buộc sống lớn dần theo kinh nghiệm bàn giao. Phần kiểm toán từng phát hiện một loại nhu cầu cứ phải sửa đi sửa lại ở khâu phương án kỹ thuật, và số lượt đối thoại cao bất thường. Căn nguyên là template luật ở tầng vật liệu thiếu chương mục tương ứng, nên Agent vào tới giai đoạn thực thi mới phát hiện thiếu yếu tố, đành phải sửa lại phương án rồi sửa lại task, lặp nhiều lần. Sau khi bù đủ template luật đó thì việc làm lại của các nhu cầu cùng loại giảm rõ rệt. Mỗi lần bàn giao đều đang bổ sung cho dây chuyền những ràng buộc bám sát thực tế hơn — đó chính là cách chuỗi hợp đồng phối hợp với Loop.

### 3.2 Nhiều phân thân cộng tác: tác nghiệp độc lập, Agent người phụ trách kỹ thuật thu về một mối

Nhiều phân thân phối hợp cộng tác để hiện thực việc bàn giao đầu-cuối, nhờ đó giảm sự can thiệp của con người. Lấy khâu bảo đảm chất lượng làm ví dụ: việc bàn giao đầu-cuối phải giao phần kiểm chất lượng và làm lại cho dây chuyền tự chạy, để giải bài toán thiếu nhân lực ở các khâu tuần tra chất lượng code, test và kiểm chứng.

Vì thiên lệch ở tầng model, phân thân R&D khi soát chính sản phẩm của mình thì tự nhiên có xu hướng phán rằng sản phẩm đúng kỳ vọng. Để ngăn sai lệch mang tính hệ thống trong việc tự soát, cần nhiều phân thân soát từ góc nhìn bên ngoài thì mới có được phán đoán đáng tin.

Trước hết, trong công đoạn tự kiểm, phân thân sản phẩm, phân thân R&D, phân thân test và phân thân bảo mật mỗi bên mở phiên riêng, dùng workspace riêng, không chia sẻ context, chỉ nạp diff, spec, luật và kho tri thức. Phân thân sản phẩm đối chiếu mức hoàn thành nhu cầu; phân thân R&D kiểm độ vững của code; phân thân bảo mật soát tính tuân thủ của phần sửa; còn phân thân test thì tự sinh test case, chạy test kiểm chứng và đánh giá độ tin cậy của chức năng. Bốn góc nhìn mỗi bên xuất ra kết luận kèm bằng chứng.

![fig3-2-kiem-dinh-cheo.png](../../assets/imgs/chapter-25/image-026.png)

 _Hình 3-2 — Kiểm định chéo_

Rồi tới phần Agent của người phụ trách kỹ thuật thu về một mối. Báo cáo của bốn góc nhìn được tổng hợp về Agent người phụ trách kỹ thuật, rồi đối chiếu từng mục theo các checkpoint khai báo để đưa ra phán định cuối: cho qua hay trả về. Nếu kết luận là trả về thì kích hoạt phân thân viết code làm lại. Cho tới khi cả bốn phân thân đều nghiệm thu sản phẩm là đạt thì mới vào khâu tiếp theo.

Tới đây, khâu kiểm định không cần con người soát từng dòng, cũng không cần người test can thiệp thủ công; nút thắt nhân lực vốn chặn việc bàn giao lâu nay được cơ chế gỡ trực diện ở chính mắt xích này.

### 3.3 Tiệm tiến và Loop: hệ không suy thoái theo thời gian sử dụng

Để ngăn cả hệ mục ruỗng dần theo thời gian, cần hoà việc nới năng lực tiệm tiến và việc Loop quy kết nuôi ngược vào trong quá trình tác nghiệp, để đẩy ranh giới năng lực mở rộng liên tục ra ngoài.

Trong hệ bàn giao theo digital twin, mỗi nhu cầu khi vào đều được đánh giá mức rủi ro (R), với các chiều đánh giá gồm độ trải rộng module, có thuộc chuỗi lõi không, có yêu cầu hiệu năng cao không, có dính tới các kịch bản rủi ro cao như tiền bạc không. Mức năng lực của phân thân (L) thì do độ hoàn bị của kho tri thức và vật liệu ứng dụng quyết định; R ≤ L thì mới nhận việc, còn R > L thì chuyển cho người phụ trách tương ứng. Việc tiệm tiến cho phép sửa động mức năng lực của phân thân, bảo đảm cơ chế này hữu hiệu lâu dài. Thành công liên tiếp vài lần thì nâng mức năng lực của digital twin lên. Còn nếu trong quá trình tác nghiệp mà nhiều lần sản phẩm bàn giao không đạt kỳ vọng thì phải hạ mức năng lực của digital twin xuống, siết cổng kiểm soát lại. Thực tiễn cho thấy, rất nhiều nhu cầu phức tạp vốn khó gánh, khi kho tri thức và vật liệu hoàn thiện dần qua từng vòng lặp, thì cũng tách được thành vài nhu cầu con giao cho digital twin hoàn thành. Phạm vi năng lực của digital twin sẽ mở rộng liên tục theo các lần bàn giao nhu cầu.

![fig3-3-cong-nhu-cau.png](../../assets/imgs/chapter-25/image-027.png)

 _Hình 3-3 — Cổng nhu cầu tiệm tiến_

Việc năng lực digital twin mở rộng liên tục phụ thuộc vào cơ chế Loop: chuyển tài sản số kết tinh trong mỗi lần bàn giao thành input cho lần thực thi nhu cầu sau. Mỗi khi digital twin hoàn tất một lần bàn giao nhu cầu, công đoạn kiểm toán lưu hồ sơ sẽ tự động chạy một lượt kiểm toán, chủ yếu gồm ba tầng quét trực giao:

1. **Tầng dữ liệu** đối chiếu xem đặc tả nhu cầu và sản phẩm phương án có đủ không.

2. **Tầng sản phẩm** làm phân tích liên hợp xuyên file cho các sản phẩm của từng quá trình, phát hiện mức ăn khớp giữa các công đoạn.

3. **Tầng quá trình** khôi phục trajectory thực thi từ log phiên, nhìn lại các chỉ số hiệu suất như mức tiêu token, số lần con người can thiệp.

Output của kiểm toán không phải điểm số, mà là **quy kết**. Bộ định tuyến quy kết chia ba đường:

1. Khiếm khuyết về luật và template thì định tuyến về việc lặp vật liệu ứng dụng.

2. Vấn đề về kỹ năng và công cụ thì định tuyến về việc chỉnh đốn chuỗi công cụ.

3. Khoảng hụt tri thức và lỗi thì đi vào sổ của kho tri thức, rồi xây thành tri thức có cấu trúc theo từng đợt.

![fig3-4-vong-khep-kin-loop.png](../../assets/imgs/chapter-25/image-028.png)

 _Hình 3-4 — Vòng khép kín Loop_

Vật liệu, tri thức và luật sau khi chỉnh, qua kiểm chứng thì có hiệu lực toàn cục, và được đo lại ở lần kiểm toán cùng lần đánh giá hồi quy kế tiếp. Mỗi vấn đề đều được kết tinh thành một luật ngăn nó tái diễn. Bốn bước phát hiện, quy kết, chỉnh sửa, kiểm chứng lặp đi lặp lại khiến cả hệ mạnh dần theo thời gian sử dụng.

## Bốn — Hành trình bàn giao đầu-cuối của một nhu cầu đơn giản

Chương này xem một nhu cầu thật chạy hết cả dây chuyền ra sao (thông tin nghiệp vụ đã ẩn danh).

![fig4-1-toan-chuoi.png](../../assets/imgs/chapter-25/image-029.png)

 _Hình 4-1 — Toàn chuỗi đầu-cuối_

Bản thân nhu cầu này thuộc loại "nhu cầu đơn giản" điển hình — một module, không thuộc chuỗi lõi, tự test được. Phía nghiệp vụ gửi nhu cầu cho phân thân qua DingTalk; phân thân nhận việc rồi phán định ở cổng nhu cầu trước: đối chiếu mức rủi ro của nhu cầu với mức năng lực của chính mình, rồi xuất ra chấp nhận hay từ chối. Hạng mục này được phán là chấp nhận, nên vào dây chuyền.

![fig4-2-gui-nhu-cau-qua-dingtalk.png](../../assets/imgs/chapter-25/image-030.png)

 _Hình 4-2 — Phát nhu cầu qua DingTalk_

![fig4-3-cong-nhu-cau.png](../../assets/imgs/chapter-25/image-031.png)

 _Hình 4-3 — Cổng nhu cầu_

Sau đó là giai đoạn đối chiếu nhu cầu và phương án kỹ thuật. Phiên bàn tròn cho ra `spec.md` có cấu trúc, bù đủ các yếu tố nhu cầu và làm rõ ranh giới. Phương án kỹ thuật sinh ra `plan.md`, do vai test thẩm định độc lập trước, rồi người phụ trách kỹ thuật xác nhận phương án. Người phụ trách kỹ thuật cần xác nhận ba điều:

1. Phương án có phủ trọn vẹn các kịch bản và ranh giới mà spec cam kết không.

2. Kiến trúc và việc chọn middleware có khớp ràng buộc của ứng dụng không.

3. Rủi ro và đường rollback có rõ ràng không.

Kết luận xác nhận được lưu dấu để phục vụ việc kiểm toán lưu hồ sơ. Khi xác nhận không qua thì trả về công đoạn phương án để sửa; sửa xong thì thẩm định và xác nhận lại. Nhờ đó, các sai lệch ở mức phương án bị khoá lại từ trước khi bắt đầu viết code, chứ không đợi tới giai đoạn tự kiểm hay test mới lộ ra rồi phải làm lại.

![20260916150322.jpeg](../../assets/imgs/chapter-25/image-032.jpg)

 _Hình 4-4 — Xác nhận phương án kỹ thuật_

Giai đoạn viết code dùng `tasks.md` để tách phần thay đổi thành nhiều lô, với nhịp bước và độ phức tạp context của mỗi lô được giữ trong phạm vi model xử lý ổn định. Viết code xong thì vào phần R&D tự kiểm, bốn góc nhìn lần lượt chạy. Hạng mục này từng bị trả về một lần ở giai đoạn tự kiểm — một chỗ thay đổi vượt ra ngoài phạm vi mà `tasks` định nghĩa, nên phân thân R&D phải làm lại. Bán thành phẩm hỏng không được phép chảy xuống công đoạn sau.

![fig4-4-rd-tu-kiem.png](../../assets/imgs/chapter-25/image-033.png)

 _Hình 4-5 — R&D tự kiểm_

![fig4-5-tu-kiem-tra-ve.png](../../assets/imgs/chapter-25/image-034.png)

 _Hình 4-6 — Tự kiểm trả về_

Giai đoạn test chạy hoàn toàn tự động — test case tự sinh, môi trường tự dựng, việc chạy tự động. Lần này toàn bộ đều chạy qua. Nếu một chỗ interface trả về không đúng kỳ vọng thì phân thân test định vị căn nguyên, gửi ngược cho phân thân R&D sửa, rồi chạy lại một vòng test tự động. Cho tới khi mọi test case đều chạy qua.

![fig4-6-ban-ghi-chay-test.png](../../assets/imgs/chapter-25/image-035.png)

 _Hình 4-7 — Test hoàn toàn tự động_

Cuối cùng là kiểm toán lưu hồ sơ. Kiểm toán quét trực giao ba tầng, và bản ghi quá trình được lưu vào kho tri thức — để khi một nhu cầu cùng loại tới, kinh nghiệm của lần này đã có hiệu lực sẵn trong vật liệu. Lưu hồ sơ xong thì vào trạng thái "chờ bàn giao": code đã commit lên nhánh, test đã qua, phần soát đã xong.

![fig4-7-kiem-toan-san-pham.png](../../assets/imgs/chapter-25/image-036.png)

 _Hình 4-8 — Kiểm toán sản phẩm_

Tiếp quản được, truy vết được, nghiệm thu được — mỗi bước do ai thực thi, dựa trên cái gì mà thực thi, kết quả ra sao, đều lưu dấu toàn trình và tra lại được về sau. Đó là lý do căn bản khiến chúng tôi dám đưa digital twin vào thật trong môi trường production.

## Năm — Kế hoạch và triển vọng tương lai

Hiện việc bàn giao đầu-cuối cho các nhu cầu đơn giản đã chạy ổn định; phần đầu tư trong kế hoạch tương lai của chúng tôi chủ yếu tập trung vào ba hướng.

**Hướng một · Mở rộng ranh giới năng lực liên tục** — việc tích luỹ vật liệu và kinh nghiệm sẽ đẩy mức phức tạp của các nhu cầu mà phân thân gánh được lên dần. Mục tiêu là "khởi đầu từ nhu cầu đơn giản, rồi nới ranh giới từng bước", để đưa thêm nhiều nhu cầu phức tạp xuyên module, xuyên ứng dụng vào.

**Hướng hai · Quản trị chi phí** — lằn ranh chi phí là làm một nhu cầu đầu-cuối không được đắt hơn làm thủ công. Các phương án chính là phân hạng model, quản lý context và chạy lệch giờ cao điểm, để chi phí bàn giao không tăng tuyến tính theo lượng nhu cầu.

**Hướng ba · Thích ứng với sự tiến hoá của hình thái tổ chức** — hình thái tổ chức cũng có thể bị tái cấu trúc; bố trí quân ra sao, đo sản lượng ra sao đều là những đề bài mới. Về sau có thể dựng mô hình bàn giao trong đó một kỹ sư mang theo vài digital twin, hợp thành một đội nhỏ pha trộn người – máy, để thông lượng của đội không còn bị giới hạn bởi số đầu người.

![fig5-1-hinh-thai-to-chuc.png](../../assets/imgs/chapter-25/image-037.png)

 _Hình 5-1 — Đội nhỏ pha trộn người – máy_
