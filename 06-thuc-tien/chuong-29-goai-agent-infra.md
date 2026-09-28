# Chương 29 — Hạng mục GOAI Agent Infra: khám phá thực tiễn tiên phong về cộng tác đa Agent

Các chương 25–28 ghi lại những thực tiễn mà doanh nghiệp đã chạy thông trong môi trường production. Chương này ghi lại chuyện khác: khi một nhóm người phát triển được đặt vào cùng một đề bài, thiết kế hệ đa Agent hướng tới các quy trình rủi ro cao thật trong nội bộ doanh nghiệp, thì họ sẽ chọn gì.

Đề bài mà hạng mục **Agent Infra — Nền tảng Trí tuệ Mới** tại Giải thưởng Mã nguồn mở Trí tuệ Nhân tạo Thế giới GOAI 2026 đưa ra là: "Hạ tầng đa Agent và hệ cộng tác cho các task phức tạp cấp doanh nghiệp, thúc đẩy Agent đi từ Demo tới Production". Hạng mục nêu yêu cầu kỹ thuật rõ ràng cho các tác phẩm dự thi: hệ thống phải có ít nhất ba Agent với chức năng khác nhau, lấy **AgentTeams** làm điểm xuất phát thiết kế cho việc cộng tác đa Agent, và lấy **Skill** làm mục bắt buộc để đóng gói năng lực; tác phẩm phải phủ trọn chuỗi từ input task, tách task, truyền context, gọi tool, kiểm chứng kết quả, kết tinh bằng chứng thực thi, phê duyệt và rollback, cho tới kết tinh kinh nghiệm. Việc thẩm định triển khai theo năm chiều: giá trị kịch bản và khả năng sao chép trong ngành; cộng tác đa Agent và vòng khép kín tự chủ; hệ kỹ thuật Skill và việc tái dùng trong hệ sinh thái; việc triển khai kỹ thuật, kiểm chứng vận hành cùng tính bảo mật, kiểm toán được; và phần đóng góp mở, mã nguồn mở.

**Hạng mục dùng hình thức đề mở, khởi động từ tháng 7 năm 2026, thu hút tổng cộng 7.802 đội với 8.346 thí sinh đăng ký dự thi, và 847 tác phẩm được nộp, phủ 38 quốc gia/vùng lãnh thổ trên toàn cầu.** Qua các vòng sơ khảo và bán kết tuyển chọn từng lớp, tháng 9 đã chọn ra 15 tác phẩm vào chung kết. Chương này trình bày chính 15 tác phẩm đó: mỗi tác phẩm chọn kịch bản gì, tổ chức phân công và quyền hạn giữa nhiều Agent ra sao, và ngoài yêu cầu của hạng mục thì họ còn đưa ra những phán đoán kỹ thuật nào đáng ghi nhận.

## 29.1 Cơ cấu dự thi: doanh nghiệp, trường đại học và người phát triển độc lập cùng một sân

15 đội chung kết gồm 30 thí sinh, phủ 11 trường đại học cùng 7 doanh nghiệp và viện nghiên cứu. Chia theo chủ thể dự thi thì có 7 đội trường đại học, 5 đội doanh nghiệp và viện nghiên cứu, 3 đội người phát triển cá nhân — tỉ lệ khoảng 5:3:2.

Có hai đặc trưng cơ cấu đáng ghi nhận.

**Một là thành tích không do nền tảng tổ chức quyết định.** Điểm trung bình của ba loại chủ thể dự thi khá gần nhau; trong top năm thì trường đại học, doanh nghiệp và người phát triển cá nhân mỗi bên đều có mặt. Cả ba đội người phát triển cá nhân đều vào chung kết, với các tác phẩm lần lượt hướng tới vận hành IT, quản trị dữ liệu tài chính và khôi phục sự cố xuyên nền tảng — đều là những đề bài phải có kinh nghiệm ngành khá dày mới nêu ra được.

**Hai là việc lập đội xuyên đơn vị trở thành chuyện thường.** Trong 15 đội có 6 đội là tổ hợp xuyên đơn vị, chiếm bốn phần mười. Trong đó, đội "Zhu Guang" gồm các kỹ sư của hai doanh nghiệp Zhejiang Geely Holding và OPPO; đội "Tinh Hà Engine" đến từ Đại học Duke Côn Sơn, Đại học Thâm Quyến và Đại học Thượng Hải; còn đội "helloworld" thì gồm trường đại học, viện nghiên cứu và người phát triển độc lập cùng lập nên. Tám thí sinh phía doanh nghiệp rải ở 7 đơn vị; ngoại trừ Viện Nghiên cứu Đổi mới China Mobile Chiết Giang có hai người thì còn lại đều đăng ký một mình — tức là các kỹ sư mang chính điểm đau ở vị trí công việc của mình đi thi.

## 29.2 Bản đồ kịch bản: 11 lĩnh vực không chồng lấn

15 tác phẩm liên quan tới 11 lĩnh vực ngành hay kỹ thuật không chồng lấn nhau, và không xuất hiện hiện tượng dồn cục vào cùng một kịch bản.

| Phân loại | Lĩnh vực ngành hay kỹ thuật | Số tác phẩm | Tác phẩm tương ứng |
| --- | --- | --- | --- |
| Ngành dọc (5 tác phẩm) | Năng lượng và điện lực | 1 | EnergyMesh-Agents |
|  | Tài chính | 1 | FinFlux |
|  | Thiết kế kiến trúc và xây dựng | 1 | Mắt của Tổng công trình sư |
|  | Bán lẻ chuỗi | 1 | Store Patrol Agent |
|  | Nội dung số (game / XR / thương mại điện tử) | 1 | SceneGuard |
| Chức năng doanh nghiệp (2 tác phẩm) | Vận hành doanh nghiệp và quản trị tổ chức | 1 | OrgRebase |
|  | Tài chính và đối soát hoa hồng kênh phân phối | 1 | RevGuard |
| R&D và IT (8 tác phẩm) | Kỹ thuật và bàn giao phần mềm | 4 | CodeNotary, MergePilot, RepoMesh, DevOrbit |
|  | Vận hành IT và khôi phục sự cố | 2 | OpsKeeper, OpenXnet |
|  | Vận hành an ninh mạng | 1 | CyberGuard |
|  | Kỹ thuật dữ liệu | 1 | DataFlow-Agent |
| **Tổng cộng** | **11 lĩnh vực** | **15** | — |

Trong đó 5 tác phẩm (33,3%) đi vào các quy trình chuyên môn của ngành dọc, 8 tác phẩm (53,3%) phục vụ chính lĩnh vực R&D và IT, còn 2 tác phẩm thuộc nhóm kịch bản chức năng doanh nghiệp có thể dịch chuyển xuyên ngành.

Có một điểm chung xuyên suốt cả 15 tác phẩm: chúng đều chọn các **quy trình rủi ro cao trong nội bộ doanh nghiệp** — xử trí bảo mật, thay đổi trên production, đối soát tiền, an toàn thực phẩm, xuất bản vẽ kỹ thuật, kiểm duyệt dữ liệu vào hệ thống. Đặc trưng chung của các quy trình này là cái giá của một hành động sai cao hơn nhiều so với một lần phản hồi chậm; vì vậy yêu cầu với Agent không chỉ dừng ở "hoàn thành được task", mà còn gồm quyền hạn có bị kiểm soát không, kết quả có kiểm chứng được không, sai rồi có lùi lại được không. Điều này cũng giải thích vì sao cả 15 tác phẩm về mặt kiến trúc đều giao "ai thực thi" và "ai xác nhận" cho những vai khác nhau.

## 29.3 Thiết kế và giá trị của chín tác phẩm

Chín tác phẩm dưới đây phủ cả 5 lĩnh vực ngành dọc, cùng bốn nhóm kịch bản ngang là đối soát tài chính, kỹ thuật dữ liệu, an ninh mạng và vận hành IT — đây là nhóm có chiều sâu kịch bản và thiết kế kỹ thuật khá trọn vẹn trong loạt khám phá này.

### 29.3.1 EnergyMesh-Agents: đưa việc điều phối năng lượng từ "tối ưu tự động" tới "tự trị đáng tin"

**Đội** Chaojing Innovation | Li Rufeng (Shenzhen Weijing Nisheng), Xia Chao **Lĩnh vực** Năng lượng và điện lực

Tác phẩm dùng dữ liệu công khai thật để hoàn tất việc kiểm chứng, lấy chiến lược của hệ quản lý năng lượng sẵn có làm baseline đối chứng, và cung cấp một lối vào tính lại độc lập. Chuỗi vận hành có thể hội tụ phụ tải, công suất phát điện mặt trời, trạng thái lưu trữ và giá điện theo khung giờ thành một kế hoạch điều phối phủ trọn ngày; còn việc con người phê duyệt, thực thi mô phỏng, đọc lại kết quả và lùi lại đều có bản ghi đầy đủ.

Khu công nghiệp và trung tâm tính toán cần phối hợp việc dùng điện, điện mặt trời, lưu trữ và phụ tải sản xuất. Các hệ EMS hiện có đã có năng lực giám sát, điều khiển và một phần tối ưu, nhưng khi kế hoạch sản xuất, trạng thái thiết bị và ràng buộc vận hành liên tục thay đổi thì hệ thống còn phải hoàn tất việc xác nhận trạng thái, cập nhật kế hoạch, soát lại độc lập và thực thi có uỷ quyền.

EnergyMesh thêm một tầng quản trị Multi-Agent lên trên EMS và bộ tối ưu mang tính xác định sẵn có. Vai cảm nhận xác nhận trạng thái hiện trường, vai lập kế hoạch gọi bộ tối ưu để sinh kế hoạch, vai kiểm toán kiểm độc lập các ràng buộc then chốt và có quyền từ chối kế hoạch không còn hiệu lực, còn vai thực thi thì chỉ chạy đúng version đã được uỷ quyền. Đường công suất thực tế và việc tính chi phí do bộ tối ưu xác định đảm nhận, còn BMS, PCS cùng các hệ bảo vệ tại hiện trường thì tiếp tục gánh phần điều khiển ở mức thiết bị và bảo vệ an toàn.

Dự án đã chạy thông các khâu snapshot trạng thái, version kế hoạch, kiểm toán độc lập, con người phê duyệt, thực thi mô phỏng, đọc lại kết quả và lùi lại. Tác phẩm hoàn tất việc kiểm chứng dựa trên dữ liệu vận hành công khai của khu công nghiệp, digital twin và thiết bị mô phỏng, đồng thời đối chứng kết quả điều phối giữa Baseline và Optimization. EnergyMesh tạo thành vòng khép kín trọn vẹn từ thay đổi trạng thái, sinh kế hoạch, soát lại và uỷ quyền, tới thực thi và đọc lại kết quả — cung cấp một tầng quản trị cho việc thực thi tự chủ có kiểm soát trong hệ năng lượng công nghiệp.

### 29.3.2 FinFlux: cổng kiểm duyệt ngữ nghĩa cho việc thay đổi dữ liệu tài chính

**Đội** dovic_cn | Li Rui (người phát triển độc lập) **Lĩnh vực** Tài chính

Định nghĩa trường và chuẩn đo thống kê của dữ liệu giao dịch, dữ liệu thị trường thay đổi thường xuyên. Tình huống nguy hiểm nhất không phải interface báo lỗi, mà là interface trả về bình thường, kiểm cấu trúc dữ liệu cũng qua, nhưng ý nghĩa nghiệp vụ thì đã đổi — kiểu trôi này sẽ lan dọc theo phả hệ dữ liệu vào các khâu tính toán, kiểm soát rủi ro và phân tích, cho tới khi kết quả sai mới bị phát hiện, mà lúc đó thì phạm vi ảnh hưởng đã khó khoanh vùng.

Tác phẩm biến việc kiểm duyệt thay đổi dữ liệu thành một chuỗi trách nhiệm: ba loại Agent lần lượt lo thu thập bằng chứng, đánh giá ảnh hưởng và ký kết luận; năm Skill cốt lõi gánh các năng lực tái dùng được như vẽ chân dung tài sản, truy phả hệ và so chuẩn đo; còn cả quá trình thì kết tinh chuỗi bằng chứng không sửa được. Kết luận kiểm duyệt không đơn giản là qua hay không qua, mà là **ba đường: cho qua, tạm hoãn, chặn** — và mỗi đường đều phải nói rõ căn cứ: vì sao cho qua được, đang đợi điều kiện gì, bị chặn vì chỗ trôi nào.

Một lần chạy trọn vẹn sẽ liên kết sản phẩm của ba vai, bản ghi lời gọi model và quyết định của con người lại với nhau, để về sau phát lại từng bước được.

Tác phẩm đã hoàn tất kiểm chứng trọn chuỗi với tài sản dữ liệu thị trường hợp đồng tương lai; cả ba đường kiểm duyệt đều có bản ghi vận hành tái hiện được, còn khâu con người ký cùng chuỗi bằng chứng thì đều truy ngược được.

### 29.3.3 Mắt của Tổng công trình sư: thẩm định chung thông minh đa chuyên ngành cho doanh nghiệp thiết kế công trình

**Đội** Chen Zhi Chu Xi | Li Bo (Beijing Boyu Planning & Design), Wang Na (người phát triển độc lập) **Lĩnh vực** Thiết kế công trình

Doanh nghiệp thiết kế trước khi xuất bản vẽ phải tổ chức thẩm định chung nhiều chuyên ngành. Cái khó thật sự thường không nằm ở chỗ một chuyên ngành có tự phát hiện ra vấn đề không, mà ở chỗ khi điều kiện của nhiều chuyên ngành cùng đặt lên một đối tượng công trình thì chúng có đồng thời thành lập được không. Việc từng chuyên ngành đều thẩm định là tuân thủ không có nghĩa là cả dự án không tồn tại xung đột; việc bỏ sót điều kiện xuyên chuyên ngành hay căn cứ thẩm định không đầy đủ cuối cùng thường chuyển thành việc làm lại, chi phí giao tiếp và rủi ro tiến độ.

"Mắt của Tổng công trình sư" dựa trên AgentTeams để xây quy trình thẩm định chung thông minh đa chuyên ngành cho doanh nghiệp thiết kế. Hệ thống có một vai điều phối tổ chức task, phân các sự thật công trình truy vết được cùng căn cứ thẩm định cho nhiều vai thẩm định chuyên ngành xử lý, rồi tổng hợp quan hệ xuyên chuyên ngành, và để một vai kiểm chứng bằng chứng độc lập soát lại các kết luận then chốt.

Trong đó có một thiết kế quan trọng: **bất đồng xuyên chuyên ngành thì không xử lý theo kiểu lấy trung bình.** Khi các chuyên ngành khác nhau có ý kiến không thống nhất về cùng một đối tượng công trình, hoặc bằng chứng hiện có không đủ chống đỡ kết luận, thì hệ thống sẽ không ép dung hoà hay thay người chuyên môn ra phán đoán cuối, mà giữ lại ý kiến của từng chuyên ngành cùng căn cứ của họ, rồi chuyển cho tổng công trình sư là người thật soát lại, phân xử và lưu dấu.

Dự án đã hình thành bản ghi vận hành AgentTeams thật, truy vết được các quá trình thẩm định đa chuyên ngành, nhận diện quan hệ xuyên chuyên ngành, kiểm chứng bằng chứng, khôi phục bất thường và phân xử kỹ thuật của con người; kết luận chuyên ngành, sự kiện vận hành và quyết định của con người liên kết được trên cùng một chuỗi bằng chứng, làm căn cứ cho việc soát lại và truy trách nhiệm về sau.

### 29.3.4 Store Patrol Agent: sửa xong thiết bị không có nghĩa hàng hoá an toàn — kiểm chứng độc lập từng lần xử trí then chốt

**Đội** Zhu Guang | Xia Zhiqiang (Zhejiang Geely Holding), Ma Rong (OPPO) **Lĩnh vực** Bán lẻ chuỗi / Agent Infra

Xử lý tủ lạnh cửa hàng bất thường không chỉ là "báo cảnh rồi gọi sửa". Từ việc ngừng bán để ngăn chặn, chẩn đoán sự cố, xử trí sửa chữa, cho tới phán định lô hàng và khôi phục bán hàng, thường dính tới nhiều hệ thống và nhiều vai. Vấn đề dễ xảy ra nhất là: ticket sửa chữa đã hoàn tất, nhiệt độ thiết bị đã về bình thường, nhưng hàng hoá trong tủ có còn an toàn không thì không thể từ đó mà kết luận thẳng được.

Store Patrol Agent thiết kế quá trình này thành một vòng khép kín thực thi đa Agent: sau khi bất thường xảy ra thì ngừng bán để ngăn chặn trước, rồi mới vào phần chẩn đoán và xử trí; còn việc thiết bị khôi phục và việc hàng hoá an toàn là **hai đường xác nhận độc lập**. Ràng buộc cốt lõi của hệ thống là **bên thực thi không được tự xác nhận rằng phần xử trí của mình đã thành công**; một Auditor độc lập bắt buộc phải truy vấn lại trạng thái thiết bị, lô hàng, ticket sửa chữa và bản ghi phê duyệt, và chỉ khi cả hai đường đều qua thì mới cho phép khôi phục bán hàng và đóng sự kiện.

Tác phẩm phủ sáu loại kịch bản bình thường và bất thường, gồm thiết bị hỏng, cảm biến báo sai, phê duyệt quá hạn và truy vấn sửa chữa bất thường. Với các trường hợp thiếu bằng chứng, xử trí chưa xong hay hàng hoá vẫn còn rủi ro, hệ thống tiếp tục giữ trạng thái ngừng bán và chặn việc đóng sự kiện — đó là kết quả **đúng** của thiết kế, chứ không phải quy trình thất bại.

### 29.3.5 SceneGuard: cổng chất lượng và việc sửa chữa có kiểm soát cho tài sản 3D

**Đội** Tinh Hà Engine | Gu Ziyang (Đại học Duke Côn Sơn), Liu Zhihao (Đại học Thâm Quyến), Wang Zhengrui (Đại học Thượng Hải) **Lĩnh vực** Nội dung số

Các đội game, XR và thương mại điện tử cần phát hành tài sản 3D hàng loạt. Các khiếm khuyết về định dạng, vật liệu, lưới và texture thường chỉ lộ ra sau khi import hay sau khi lên production, gây import thất bại, render bất thường và hiệu năng thụt lùi; còn quá trình sửa thì phụ thuộc vào việc technical artist xử lý thủ công trong công cụ thiết kế, khó truy vết và khó tái hiện.

Tác phẩm có một vai điều phối tách task, và bốn loại vai thực thi lần lượt lo việc kiểm toán, lập kế hoạch sửa, thực thi sửa và kiểm chứng hồi quy, mỗi bên giữ một ranh giới quyền hạn riêng. Việc xử lý tài sản theo ba ràng buộc: **file gốc chỉ đọc**, hành động sửa giới hạn trong phạm vi whitelist, và mỗi bước đều lưu checkpoint. Các thao tác rủi ro cao thì tạm dừng trước, được phê duyệt rồi mới chạy tiếp; còn nếu kiểm chứng hồi quy không qua thì tự động rollback và giữ trạng thái không phát hành — **thà không phát hành còn hơn phát hành một tài sản chưa qua kiểm chứng.**

Tác phẩm ở mức code đã chạy thông mạch chính trọn vẹn từ phát hiện khiếm khuyết, sửa có kiểm soát tới kiểm chứng hồi quy, với bản ghi bằng chứng địa chỉ hoá theo nội dung và kết luận phát hành; một tài sản có khiếm khuyết đi hết được cả quá trình sửa, kiểm lại và phát hành truy vết được.

### 29.3.6 RevGuard: tự động đối soát và quản trị các bất thường về hoa hồng kênh phân phối

**Đội** helloworld | Ren Yufan (Đại học Công nghệ Tây An), Song Chuancheng (Viện Kỹ thuật Thông tin, Viện Hàn lâm Khoa học Trung Quốc), Le Da (người phát triển độc lập) **Lĩnh vực** Tài chính và đối soát hoa hồng kênh phân phối

Việc đối soát hoa hồng kênh phân phối dính tới đơn hàng, hợp đồng, tiền về, chính sách khuyến khích, cấp bậc kênh và sổ đối soát — rải ở nhiều hệ thống và phải đối chiếu thủ công. Sai sót thường gặp nhất không phải tính sai công thức, mà là lấy nhầm version chính sách, nhầm thời điểm có hiệu lực của cấp bậc, hoặc sót một cấu phần khuyến khích nào đó. Trả thiếu thì gây tranh chấp với kênh, trả thừa thì phát sinh chi phí đòi lại, còn sửa sổ thủ công thì thường làm mất luôn căn cứ kiểm toán.

Tác phẩm có một Leader cùng chín loại Worker phân công hoàn tất các khâu tiếp nhận, thu bằng chứng, khớp chính sách, tính số tiền, ghi vào sổ và kiểm chứng kết quả. Phán đoán đáng ghi nhận nhất là **số tiền không do model sinh ra**: việc tính giao cho một engine luật thập phân chuyên dụng tính chính xác theo điều khoản chính sách, còn model chỉ lo tổ chức quy trình, khớp version chính sách và giải thích khác biệt, chứ không chạm trực tiếp vào con số. Các hành động rủi ro cao dính tới việc ghi sổ thì phải cầm token phê duyệt mới thực thi được; ghi thất bại thì đi đường xoá ngược, và cuối cùng một vai kiểm chứng độc lập soát lại sổ sách.

Tác phẩm hoàn tất kiểm chứng với tám ca chuẩn, phủ các tranh chấp hoa hồng điển hình như lệch version chính sách, xung đột thời điểm cấp bậc, sót cấu phần khuyến khích; còn khâu con người phê duyệt, việc ghi sổ, rollback và trajectory vận hành đều có bản ghi đầy đủ.

### 29.3.7 DataFlow-Agent: biến nhu cầu thành pipeline dữ liệu ngay lập tức

**Đội** PKU-DCAI | Qiang Meiyi, Liang Hao, Xu Chang (Đại học Bắc Kinh) **Lĩnh vực** Kỹ thuật dữ liệu

Các đội kỹ thuật dữ liệu AI và thuật toán cần liên tục sản xuất dữ liệu huấn luyện. AI tuy sinh được script xử lý theo nhu cầu, nhưng script khó kết tinh, khó sửa, khó chạy lại ổn định, và quan hệ phụ thuộc cũng không minh bạch; hễ chạy thất bại thì thường không nói được là khâu xử lý nào hỏng.

Tác phẩm phân việc phân giải nhu cầu, tra cứu toán tử và thực thi thật cho các Agent khác nhau, và thiết lập một thứ tự ưu tiên rõ ràng: **tra cứu tái dùng trong các toán tử sẵn có của nền tảng trước, chỉ khi thực sự thiếu năng lực thì mới sinh toán tử mới** — tránh việc mỗi lần đều viết trọn script từ con số không. Agent, giao diện trực quan và backend cộng tác quanh cùng một trạng thái pipeline, và mọi thay đổi trước sau đều phải qua kiểm. Thứ bàn giao cuối cùng không phải một đoạn câu trả lời đối thoại, mà là một pipeline sửa được, bản ghi vận hành đầy đủ và một lối ra dữ liệu rõ ràng.

Tác phẩm đã trình bày được giao diện biên tập trực quan, phần quản lý toán tử và pipeline, việc lưu, chạy và theo dõi kết quả; một pipeline đi được trọn quá trình sinh, con người sửa, thực thi rồi chạy lại — **giúp cả những người không phải chuyên gia nền tảng cũng dựng được một pipeline dữ liệu lưu được, sửa được, chạy lại được.**

### 29.3.8 CyberGuard: để mỗi bước xử trí bảo mật đều uỷ quyền được, rollback được

**Đội** Ni Lv Cheng Diao | Wu Linbin, Chen Peichen (Đại học Điện tử Khoa học Kỹ thuật Hàng Châu) **Lĩnh vực** Vận hành an ninh mạng

Đội vận hành bảo mật mỗi ngày đối mặt khối lượng cảnh báo xâm nhập khổng lồ, trong khi bằng chứng chống đỡ được cho quyết định xử trí lại khá hạn chế. Bản thân các hành động bảo mật thì lại rất "nặng": việc chặn, cô lập hay vô hiệu tài khoản mà chưa được uỷ quyền đầy đủ có thể gây gián đoạn nghiệp vụ và làm ô nhiễm bằng chứng — mà thứ bị ảnh hưởng là các hệ thống production đang chạy.

Tác phẩm đặt bảy loại vai chức năng, lần lượt gánh việc phân loại, tình báo, thu bằng chứng, ngăn chặn, kiểm chứng, khôi phục và kiểm toán. Hai thiết kế đáng ghi nhận: một là **hành động rủi ro cao gắn chặt với sự uỷ quyền của con người** — mỗi lần uỷ quyền ứng với một đề xuất xử trí cụ thể và một đối tượng đích rõ ràng, và vai thực thi không được tự mở rộng phạm vi quyền hạn; hai là **việc kiểm lại độc lập có quyền lật kết luận của vòng trước** — nếu phát hiện đối tượng xử trí sai thì quy trình lùi về giai đoạn lập kế hoạch và đi lại một vòng uỷ quyền.

Tác phẩm nộp bản ghi vận hành đầy đủ: một lần chạy xâu chuỗi bảy vai chức năng cùng bốn lần con người phê duyệt, và trình bày trọn vẹn việc khôi phục sau khi dịch vụ model bất thường, việc sửa lại đối tượng xử trí, việc rollback các hành động đã thực thi cùng hai vòng kiểm lại độc lập — một cảnh báo nguy hiểm cao hội tụ được thành một hồ sơ kết thúc có bằng chứng, có uỷ quyền và có xác nhận trạng thái khôi phục.

### 29.3.9 OpsKeeper: giữ các thao tác trên production nằm trong phạm vi được uỷ quyền

**Đội** Benyue Zhiwei | Jiang Xing (người phát triển độc lập) **Lĩnh vực** Vận hành IT và khôi phục sự cố

Khi sự cố production xảy ra, phần cảnh báo, định vị, phê duyệt, sửa chữa và soát lại thường rải ở những người khác nhau, những nhóm chat khác nhau và những console khác nhau. Ai định vị, ai phê duyệt, ai ra tay, ai xác nhận đã khôi phục — thường không nằm trên cùng một chuỗi bằng chứng. Sửa nhầm đối tượng, mở rộng phạm vi ảnh hưởng, hoặc lấy "lệnh chạy thành công" để giả làm "nghiệp vụ đã khôi phục", đều có thể kéo một sự cố nhỏ thành một sự cố production.

Tác phẩm tích hợp vào AgentTeams theo kiểu plugin, và tách tầng điều khiển khỏi tầng thực thi: vai điều tra chỉ định vị ở chế độ chỉ đọc, vai sửa chữa phải lấy được uỷ quyền chính xác rồi mới thực thi, còn vai kiểm chứng thì độc lập phán định nghiệp vụ có thực sự khôi phục không. Tính chính xác của việc uỷ quyền được bảo đảm bởi một nhóm định danh: **ticket sự cố, đề xuất xử trí, đối tượng đích và lệnh cụ thể bắt buộc phải khớp toàn bộ; lệch bất kỳ mục nào là từ chối thực thi.**

Tác phẩm trình bày trọn quá trình xử trí một loại sự cố cạn connection pool database: trước hết từ chối thực thi với đối tượng đích sai, rồi sau khi con người phê duyệt thì phát lại lệnh cho đúng đối tượng; số kết nối về không, health probe mới thành công, và cả quá trình đi vào bản ghi kiểm toán cùng dòng thời gian sự cố — việc **đối tượng sai không bị thao tác nhầm** chính là kết luận mà lần trình diễn này tập trung kiểm chứng.

## 29.4 Những lựa chọn giống nhau nằm ngoài yêu cầu của hạng mục

Hạng mục nêu yêu cầu kỹ thuật rõ ràng cho các tác phẩm: ít nhất ba Agent với chức năng khác nhau, cơ chế phê duyệt và rollback, kết tinh bằng chứng thực thi. Vì vậy, việc phân công vai và lưu dấu phê duyệt xuất hiện phổ biến ở cả 15 tác phẩm — đó là kết quả của việc ra đề. Điều đáng ghi nhận hơn là **ở những chỗ mà hạng mục không quy định, nhiều đội lại đưa ra những câu trả lời cùng hướng.**

**Một là bên thực thi không ký cho kết quả của chính mình.** Hạng mục yêu cầu phải có khâu "kiểm chứng kết quả", nhưng không quy định việc kiểm chứng do ai làm. Nhiều đội không hẹn mà cùng tước quyền kiểm chứng khỏi tay vai thực thi: vai sửa chữa của MergePilot không được ký cho phần sửa của chính mình, vai thực thi của Store Patrol Agent không được xác nhận phần xử trí của mình, CodeNotary khiến tác giả không thấy được phần test mù và người test không chạm được vào phần hiện thực, còn OpsKeeper và RevGuard đều đặt một vai kiểm chứng độc lập. Kịch bản của những đội này khác nhau rất xa, nhưng đều phán ra cùng một điều — **kết luận kiểm chứng do chính mình tự chứng thì không có giá trị.**

**Hai là uỷ quyền chính xác tới từng hành động và từng đối tượng.** Cách làm thông thường là "thao tác rủi ro cao thì cần phê duyệt", còn nhiều đội thì tiến thêm một bước là gắn việc uỷ quyền vào chính hành động: mỗi lần phê duyệt của CyberGuard ứng với một đề xuất cụ thể và một đối tượng rõ ràng; OpsKeeper đòi bốn định danh ticket, đề xuất, đối tượng và lệnh phải khớp toàn bộ; còn việc ghi sổ của RevGuard thì phải cầm đúng token phê duyệt tương ứng. Ý nghĩa của bước này là: uỷ quyền không còn là một tấm vé thông hành tái dùng được, mà là một giấy phép cụ thể dùng một lần.

**Ba là các phép tính then chốt không giao cho model.** Trong những kịch bản mà kết quả bắt buộc phải chính xác, nhiều đội chủ động thu hẹp phạm vi trách nhiệm của model: EnergyMesh-Agents giao phần tính điều phối và ranh giới an toàn cho bộ tối ưu mang tính xác định, còn số tiền của RevGuard thì do một engine luật chuyên dụng tính chính xác — và ở cả hai chỗ, model chỉ lo tổ chức quy trình cùng giải thích quá trình. Đây là một phán đoán tỉnh táo: **model giỏi xử lý ngữ nghĩa và quy trình, chứ không giỏi gánh trách nhiệm về những con số phải chính xác.**

**Bốn là "từ chối" được thiết kế thành một kết quả đúng.** Nhiều đội coi việc không cho qua là một trạng thái kết thúc hợp lệ một cách rõ ràng: Store Patrol Agent giữ trạng thái ngăn chặn khi việc xử trí chưa đạt chuẩn, SceneGuard rollback và giữ trạng thái không phát hành khi kiểm chứng không qua, MergePilot chặn vĩnh viễn các thay đổi rủi ro nghiêm trọng, còn đường chặn của FinFlux thì trọn vẹn ngang với đường cho qua. Những đội này không lấy chuyện "bắt buộc phải đưa ra kết luận" làm tiêu chí thành công của hệ thống, mà thừa nhận rằng khi bằng chứng chưa đủ thì bản thân việc dừng lại đã là output đúng.

**Năm là mỗi lần chạy để lại một chuỗi bằng chứng phát lại được.** Nhiều tác phẩm lấy việc "trong cùng một lần chạy, phần cộng tác giữa các vai, các lời gọi năng lực, quyết định của con người và trạng thái cuối liên kết được, phát lại được" làm một phần của chuẩn bàn giao, chứ không phải một cuốn log viết bù sau. Điều này khiến cách kiểm chứng tác phẩm chuyển từ "trình diễn một lần" thành "soát lại được".

## 29.5 Danh sách 15 tác phẩm vào chung kết

| STT | Đội | Tác phẩm | Lĩnh vực | Định vị |
| --- | --- | --- | --- | --- |
| 1 | PKU-DCAI | DataFlow-Agent | Kỹ thuật dữ liệu | Biến nhu cầu thành pipeline dữ liệu ngay lập tức |
| 2 | Chaojing Innovation | EnergyMesh-Agents | Năng lượng và điện lực | Để việc dùng điện của khu công nghiệp tự tính lại theo giá điện và phụ tải |
| 3 | Ni Lv Cheng Diao | CyberGuard | Vận hành an ninh mạng | Để mỗi bước xử trí bảo mật đều uỷ quyền được, rollback được |
| 4 | helloworld | RevGuard | Tài chính và đối soát kênh | Tự động đối soát và quản trị bất thường về hoa hồng kênh |
| 5 | Benyue Zhiwei | OpsKeeper | Vận hành IT và khôi phục sự cố | Giữ các thao tác production trong phạm vi được uỷ quyền |
| 6 | Chen Zhi Chu Xi | Mắt của Tổng công trình sư | Thiết kế kiến trúc và xây dựng | Thẩm định chung thông minh cho bản vẽ đa chuyên ngành |
| 7 | Zhu Guang | Store Patrol Agent | Bán lẻ chuỗi | Vòng khép kín kép cho thiết bị cửa hàng và an toàn thực phẩm |
| 8 | ARA | CodeNotary | Kỹ thuật và bàn giao phần mềm | Công chứng phát hành cho code do AI sinh |
| 9 | dovic_cn | FinFlux | Tài chính | Cổng kiểm duyệt ngữ nghĩa cho việc thay đổi dữ liệu tài chính |
| 10 | Fenzi | MergePilot | Kỹ thuật và bàn giao phần mềm | Phân luồng rủi ro và gác cửa cho merge request |
| 11 | OriNodes | OrgRebase | Vận hành doanh nghiệp và quản trị tổ chức | Để việc thay đổi quy tắc tổ chức triển khai an toàn |
| 12 | Đội Mèo Điên | RepoMesh | Kỹ thuật và bàn giao phần mềm | Đội đa Agent cho việc bàn giao xuyên nhiều repo |
| 13 | SynapXnet | OpenXnet | Vận hành IT và khôi phục sự cố | Không gian khôi phục thống nhất cho sự cố production xuyên nền tảng |
| 14 | Tinh Hà Engine | SceneGuard | Nội dung số | Cổng chất lượng và sửa chữa có kiểm soát cho tài sản 3D |
| 15 | Qiantang Wushi | DevOrbit | Kỹ thuật và bàn giao phần mềm | Vòng khép kín R&D từ khiếm khuyết production tới phát hành có kiểm soát |

## 29.6 Loạt khám phá này để lại điều gì

15 tác phẩm này không phải sản phẩm; phần lớn còn chưa đi vào sản xuất hằng ngày của doanh nghiệp. Giá trị của chúng nằm ở chỗ khác.

**Chúng đẩy cuộc thảo luận về cộng tác đa Agent tới những kịch bản cụ thể.** Các bàn luận về kiến trúc đa Agent từ lâu dừng ở mức đa dụng — tách task ra sao, truyền context ra sao, để các Agent giao tiếp với nhau ra sao. Loạt tác phẩm này đặt đúng những câu hỏi đó vào 11 lĩnh vực cụ thể không chồng lấn, và câu trả lời lập tức trở nên cụ thể: cái khó của việc điều phối khu công nghiệp là độ chính xác tính toán và ranh giới an toàn; cái khó của đối soát hoa hồng là version chính sách và thời điểm; còn cái khó của an toàn thực phẩm trong cửa hàng là hai đường xác nhận độc lập bắt buộc phải cùng qua. **Cái khó trong thiết kế hệ đa Agent không nằm ở chính cơ chế cộng tác, mà nằm ở định nghĩa "đúng" của từng kịch bản.**

**Chúng kiểm chứng rằng các quy trình rủi ro cao giao được cho Agent, với tiền đề là thiết kế quyền hạn tới nơi.** Cả 15 tác phẩm đều chọn các quy trình rủi ro cao trong nội bộ doanh nghiệp — một hướng mà mới một năm trước còn bị né phổ biến. Câu trả lời chung mà chúng đưa ra không phải nâng năng lực model, mà là tổ chức lại quyền hạn: tách thực thi khỏi kiểm chứng, gắn uỷ quyền vào từng hành động cụ thể, giao các phép tính then chốt cho engine xác định, và coi việc từ chối là một trạng thái kết thúc hợp lệ. Cả bốn điều đó đều không cần model mạnh hơn, mà cần thiết kế kỹ thuật rõ ràng hơn.

**Chúng trình bày một loạt mô thức kỹ thuật di chuyển được.** OpenXnet dùng cùng một control plane để phủ ba kịch bản sự cố ở ba nền tảng khác nhau, chỉ thay tool nền tảng, ngưỡng và năng lực theo kịch bản; nguyên tắc "bản gốc chỉ đọc + sửa theo whitelist" của SceneGuard cũng áp dụng được cho mọi kịch bản "sửa có kiểm soát mà không được làm hỏng dữ liệu gốc"; còn kết luận kiểm duyệt ba đường của FinFlux thì áp dụng được cho mọi khâu cần phán định trước khi một thay đổi vào production. Phạm vi áp dụng của những mô thức này rõ ràng vượt ra ngoài kịch bản gốc của từng tác phẩm.

Từ lúc đăng ký tháng 7 năm 2026 tới vòng chung kết tháng 9, nhóm người phát triển này đã hoàn tất một vòng khám phá dày đặc trong hai tháng. Trong đó có kỹ sư doanh nghiệp mang chính điểm đau ở vị trí của mình đi thi, có đội trường đại học dựng trọn một chuỗi kỹ thuật từ con số không, và cũng có người phát triển độc lập một mình hoàn tất thiết kế hệ thống hướng tới kịch bản cấp doanh nghiệp. Ý nghĩa của loạt khám phá này không nằm ở chỗ một tác phẩm nào đó cuối cùng đi được xa tới đâu, mà ở chỗ chúng cùng chứng minh một điều: **đưa Agent vào những quy trình thực sự quan trọng của doanh nghiệp là con đường đi được, và đã có người đi ra được phương pháp cụ thể.**
