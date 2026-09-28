# Thực tiễn triển khai vận hành thông minh ở Geely Auto

Khi thông tin cảnh báo của hàng trăm hệ thống nghiệp vụ thuộc tập đoàn Geely cùng lúc đổ vào nền tảng giám sát, màn hình giám sát vốn rõ ràng lập tức bị nhấn chìm bởi một biển thông tin cảnh báo màu đỏ — đó là kịch bản "bão cảnh báo" mà đội vận hành của Geely từng thường xuyên đối mặt. Trong mớ hỗn loạn ấy, làm sao định vị được căn nguyên sự cố và khôi phục ổn định nghiệp vụ trong thời gian ngắn nhất trở thành bài toán cấp bách nhất của cả đội.

Mới đây, Song Ming — Trưởng bộ phận Chất lượng dữ liệu, Trung tâm dữ liệu người dùng của Geely Auto — cùng Li Guoqiang — người phụ trách sản phẩm nền tảng ứng dụng cloud native của Alibaba Cloud — đã chia sẻ kinh nghiệm thực chiến khi hai bên bắt tay triển khai **STAROps** (nền tảng vận hành thông minh toàn miền của Alibaba Cloud; ghi chú: nền tảng vận hành thông minh hoà năng lực model lớn với dữ liệu observability, hiện thực vòng khép kín tự chủ cho trọn quy trình vận hành), xoay quanh các điểm đau thật trong quá trình triển khai, những khúc quanh trong thực tiễn, chiến lược chuyển đổi của đội ngũ và hướng tiến hoá tương lai — cung cấp tham chiếu trực tiếp, triển khai được cho các đội đang khám phá việc chuyển đổi sang vận hành thông minh.

![anh-chup-man-hinh-2026-05-27.png](../../assets/imgs/chapter-27/image-001.png)

## Một — Từ 50 vạn kết nối đồng thời tới thách thức mới của việc hợp nhất chiến lược

Sự hợp tác giữa Geely và Alibaba Cloud có thể truy về thời điểm thương hiệu Zeekr ra đời năm 2021. Song Ming nhớ lại, từ lúc đó Zeekr đã trở thành đối tác gắn bó với Alibaba Cloud; hai bên liên tục đẩy các dự án cải tạo cloud native và cũng cho ra thành quả nổi bật — tại hiện trường lễ ra mắt mẫu xe, hệ thống chống đỡ được lượng truy cập đồng thời cao nhất tới 50 vạn. "Thành tích này trong kịch bản lễ ra mắt của ngành ô tô là khá xuất sắc", Song Ming nói. Năm 2024, tập đoàn Geely công bố *Tuyên bố Taizhou*, khởi động việc hợp nhất nghiệp vụ và công nghệ ở cấp tập đoàn, và Zeekr cũng sáp nhập vào hệ thống của tập đoàn Geely trong quá trình đó. Với đội kỹ thuật, điều này nghĩa là một thách thức hoàn toàn mới: các hệ thống, các thương hiệu vốn độc lập nay phải hợp nhất thành một hệ công nghệ thống nhất, và độ phức tạp của việc vận hành leo thang theo. Mô hình vận hành vốn chạy tốt dưới hệ thống Zeekr, khi đối diện với một nhóm hệ thống có quy mô gấp đôi, bắt đầu dần đuối sức.

### 1. Ba điểm đau: bão cảnh báo tới thì làm sao

![02-ba-diem-dau.png](../../assets/imgs/chapter-27/image-002.png)

Song Ming thẳng thắn nói, sau khi hợp nhất, hệ thống ngày càng phức tạp, và khó khăn tập trung ở ba tầng.

**Trước hết là bài toán môi trường đa cloud dị cấu.** Các hệ thống của Geely nằm rải trên nhiều nền tảng cloud, trong đó có Alibaba Cloud, với mức dị cấu hạ tầng rất cao, nên đội vận hành phải đồng thời thích ứng với nhiều bộ môi trường khác nhau, khiến chi phí quản lý tăng vọt.

**Thứ hai là vấn đề đảo cô lập giữa hệ thống và dữ liệu.** Hàng trăm hệ thống nghiệp vụ mỗi cái một kiểu, quan hệ topology phụ thuộc giữa chúng như một hộp đen, không được gom lại một cách thống nhất. "Những hệ thống này đều là đảo dữ liệu; ngay cả topology lời gọi giữa các hệ thống cũng không minh bạch", Song Ming mô tả.

Còn **gai góc nhất là nút thắt hiệu suất khi phản ứng sự cố.** Song Ming mô tả kịch bản thật mà đội từng đối mặt: "Hễ production có vấn đề là màn hình giám sát lập tức bật ra hàng trăm cảnh báo — thứ chúng tôi đối mặt thật ra là một cơn 'bão cảnh báo'. Bắt đầu từ đâu? Cái nào là nguồn của sự cố? Ai chịu trách nhiệm truy nguyên?" Dựa vào cách truyền thống là rà từng hệ thống, đi từng lớp, thì chu kỳ khôi phục sự cố trung bình động một chút là kéo dài một hai tiếng. "Tốc độ này thì hoàn toàn không theo kịp yêu cầu của nghiệp vụ nữa", Song Ming nói.

Những vấn đề đó chồng lên nhau, buộc đội phải nghĩ lại: trần hiệu suất của vận hành truyền thống nằm ở đâu? Vận hành thông minh có phải hướng phá vây không?

### 2. Neo mục tiêu: hướng tới "một — năm — ba mươi"

Ngành vận hành có một khung mục tiêu hiệu suất được biết tới rộng rãi: phát hiện sự cố trong một phút, định vị căn nguyên trong năm phút, khôi phục nghiệp vụ trong ba mươi phút — tức chuẩn "một — năm — ba mươi". Geely cũng lấy chuẩn này làm mục tiêu cốt lõi cho việc xây dựng vận hành thông minh.

"Nhưng dựa vào cách vận hành số hoá truyền thống — phát hiện vấn đề, phát cảnh báo, mở ticket — thì không cách nào đạt được mục tiêu đó", Song Ming nói thẳng. Sau nhiều lần cân nhắc, đội cuối cùng khoá điểm phá vây vào khâu cốt lõi nhất: **định vị căn nguyên nhanh**. "Chúng tôi dồn toàn bộ trọng tâm vào chuyện làm sao tìm ra được vấn đề gốc rễ của sự cố cho nhanh", Song Ming nói, "đó cũng là lý do cuối cùng chúng tôi đi cùng STAROps của Alibaba Cloud."

Hướng đi rõ rồi thì hai bên chính thức bắt tay. Nhưng không ai ngờ, quá trình triển khai thật lại quanh co hơn tưởng tượng nhiều.

### 3. Khúc quanh khi triển khai: thứ phải giải quyết trước cả công nghệ là nhận thức

Trong quá trình triển khai, đội gặp không ít thách thức; nhưng khi nói tới thách thức lớn nhất thì câu trả lời của Song Ming lại nằm ngoài dự đoán — không phải bài toán kỹ thuật, mà là "vấn đề quan niệm".

"Ban đầu chúng tôi tưởng vận hành thông minh là mua một sản phẩm, triển khai lên là nó tự chạy, tự giải quyết vấn đề", Song Ming cười nhớ lại. Nhưng khi thực sự bắt tay triển khai thì đội mới phát hiện vận hành thông minh không phải một công cụ "mở hộp là dùng", mà cần quy phạm hệ thống đi kèm, thậm chí cần một đội chuyên trách làm phần thích ứng, nếu không thì không nhúc nhích nổi. Sau khi sửa được lệch lạc nhận thức, các điểm tắc kỹ thuật cụ thể hơn lại nối nhau kéo tới. Là một trong những doanh nghiệp tiếp xúc STAROps khá sớm, đội Geely ban đầu kỳ vọng rất cao vào sản phẩm, tưởng rằng topology liên kết giữa các hệ thống sẽ tự gom xong. Nhưng dùng thật rồi mới thấy rất nhiều khâu bị đứt đoạn: log đứt đoạn, middleware đứt đoạn, chuỗi gọi đứt đoạn — gần như chỗ nào cũng có. Song Ming nêu hai ví dụ thật: một số hệ thống triển khai xuyên phòng máy, thậm chí xuyên cloud, nên log rải trên các nền tảng khác nhau, không cách nào xâu chuỗi lại được; lại có những hệ thống dùng lẫn tài khoản database của nhau, nên khi có chuyện thì không phán định nổi dịch vụ nào gây ra bất thường. "Không có phần quản trị nền tảng thì Agentic Ops không cách nào nhận ra: ai là ai? Chỗ nào có vấn đề? Cái nào là thông tin nhiễu? Cái nào mới là vấn đề gốc?", Song Ming tổng kết.

Sau khi đi qua những khúc quanh thực tiễn đó, đội cuối cùng hình thành một nhận thức then chốt: **tài sản kiến trúc vận hành cũng là tài sản cốt lõi, còn chất lượng dữ liệu thì càng là nền tảng cốt lõi của vận hành thông minh.** Thế là họ quyết tâm gom lại toàn bộ những vấn đề tồn đọng vụn vặt trong lịch sử cùng phần quản trị nền, làm cho chắc cái nền của cả việc vận hành. "Trên cái nền đó, cuối cùng chúng tôi mới thực sự để AI bắt đầu phát lực giúp mình."

Mà trận chiến cải tạo nền tảng này chưa bao giờ là cuộc chiến đơn độc của riêng Geely.

## Hai — Cách phá vây: cùng xây từ nền dữ liệu

![03-nen-du-lieu.png](../../assets/imgs/chapter-27/image-003.png)

Trước trận chiến này, từ góc nhìn sản phẩm, Li Guoqiang rất đồng tình với phán đoán của Song Ming: cốt lõi của việc triển khai mọi sản phẩm vận hành thông minh mãi mãi là **dữ liệu**. "Agent hay model lớn giống như một chuyên gia dày dặn, nhưng dữ liệu mà bạn cho nó ăn mới quyết định nó có cho ra được kết quả bạn muốn hay không." Trong lĩnh vực observability, độ phức tạp của dữ liệu đặc biệt cao: dữ liệu sinh ra từ các nền tảng cloud khác nhau, hạ tầng khác nhau, cộng thêm dữ liệu riêng kết tinh trong nội bộ doanh nghiệp, tạo thành một môi trường dị cấu cao độ. Cũng chính vì thấy điều đó, tư tưởng thiết kế của STAROps chưa bao giờ là bàn giao thẳng một "sản phẩm đơn lẻ" cho khách hàng, mà là cùng xây với khách hàng ngay từ giai đoạn chuẩn bị dữ liệu.

Cụ thể, việc dựng cả hệ xoay quanh ba bước cốt lõi:

**Bước một là thống nhất dữ liệu.** Cloud Monitor 2.0 mà Alibaba Cloud công bố năm ngoái cốt lõi chính là giải bài toán này: đưa các dữ liệu dị cấu rải rác khắp nơi về lưu trữ thống nhất, phân tích thống nhất, xem thống nhất. Li Guoqiang cho rằng đây là tiền đề của mọi năng lực thông minh hoá; không có bước này thì mọi thứ về sau đều là lâu đài trên cát.

**Bước hai là hiểu dữ liệu.** Sau khi dữ liệu đã thống nhất thì còn phải để Agent đọc hiểu được quan hệ liên kết giữa các dữ liệu. Bước này dựa vào **UModel (Unified Model)** của Alibaba Cloud. "Phần hạ tầng của Alibaba Cloud thì chúng tôi về cơ bản đã hoàn tất mô hình hoá tự động toàn bộ", Li Guoqiang nói; còn thông tin nghiệp vụ riêng của khách hàng thì qua năng lực mở của hệ mô hình hoá UModel mà khách hàng tự bổ sung vào, để cả hệ bám sát tình hình thực tế của doanh nghiệp hơn.

**Bước ba là cùng xây liên tục.** Li Guoqiang nhấn mạnh, STAROps chưa bao giờ là một Agent vận hành đơn lẻ, "mà là phải cùng khách hàng làm cho chắc toàn bộ chuỗi công việc từ chuẩn bị dữ liệu, phân tích dữ liệu cho tới phần hỏi đáp tương tác của Agent ở cuối — trong đó có rất nhiều việc chi tiết." Song Ming bên cạnh gật đầu đồng tình: "Rất nhiều bài toán trong thực tiễn là do hai bên cùng mò mẫm, cùng dò ra."

Việc dựng nền dữ liệu đã dọn sạch chướng ngại kỹ thuật cho vận hành thông minh, nhưng thách thức mới lại kéo tới: công cụ chuẩn bị xong rồi, đội có chịu dùng không?

## Ba — Chuyển đổi đội ngũ: danh tính đổi, niềm tin được dựng

![04-chuyen-doi-doi-ngu.png](../../assets/imgs/chapter-27/image-004.png)

Sau khi STAROps được triển khai, thứ Song Ming quan sát thấy đầu tiên là **sự chuyển đổi "danh tính" của đội vận hành**.

"Trong mô hình vận hành truyền thống, mọi người cứ nhận ticket rồi xử lý từng cái, phản ứng từng cái. Nhưng giờ thì khác rồi", Song Ming nói. Một lượng lớn ticket xử trí sự cố lặp đi lặp lại đã được xử lý tự động và chuẩn hoá nhờ phần quản trị mang tính hệ thống. Đội vận hành không còn là "đội cứu hoả" bị động nữa, mà trở thành người "vận hành" chủ động — lấy môi trường production làm trận địa kinh doanh của mình, cung cấp dịch vụ trọn quy trình từ triển khai tới chạy ổn định cho các hệ thống mới lên. Sức lực của đội cũng chuyển từ việc xử lý từng ticket sang những việc ở chiều cao hơn: quy hoạch kiến trúc, thiết kế quy trình, tối ưu thể chế. Nhưng khi đem cách làm việc mới này phổ biến cho đội phát triển thì lại gặp trở lực. "Rất nhiều kỹ sư phát triển nói rằng khi thực sự có chuyện thì phản ứng đầu tiên vẫn là muốn dùng cách cũ", Song Ming thừa nhận. Nỗi lo của người phát triển rất trực tiếp: một là sợ dùng công cụ mới làm mất thời gian, hai là lo Agent đưa thông tin sai, hoá ra lại thêm rối. "Đây thực ra là một quá trình dựng niềm tin", Song Ming chia sẻ chiến lược phá vây của họ: bắt đầu từ môi trường test rủi ro thấp. Nội bộ Geely dựng hai bộ môi trường production và test; khi tích hợp thử ở môi trường test, hễ có vấn đề là giao thẳng cho STAROps xử lý. "Nhờ vậy, chi phí giao tiếp phối hợp giữa các đội giảm hẳn." Cho mọi người nếm được vị ngọt ở các kịch bản rủi ro thấp trước, thì niềm tin với Agent cứ thế mà dựng lên từng chút một.

Li Guoqiang rất thấm điều này; ông dùng chữ "đồng đội chiến hào" để hình dung quan hệ giữa con người và Agent: "Niềm tin không thể được dựng ngay ngày đầu cầm sản phẩm, đọc cuốn hướng dẫn là xong. Chỉ khi đã cùng nhau giải quyết vấn đề, như những người đồng đội sát cánh, thì mới thực sự dựng được niềm tin." Ông còn lấy ví dụ trong lĩnh vực R&D để so sánh với bước chuyển này: "Hai năm trước mọi người cũng bàn, có AI Coding rồi thì lập trình viên không cần viết code nữa à? Nhưng giờ nhìn lại, viết ít code đi không có nghĩa là đóng góp ít đi, mà là mọi người có thể dồn sức vào việc suy nghĩ về giá trị nghiệp vụ ở chiều cao hơn. Vận hành cũng cùng một lẽ." Li Guoqiang giải thích, nội bộ Alibaba Cloud luôn thực hành văn hoá DevOps: người phát triển đồng thời phải lo vận hành, mỗi ngày viết code xong còn phải xử lý một mớ việc vụn: xem cảnh báo, truy sự cố, chẩn đoán vấn đề. "Những việc đó thật sự có cảm giác thành tựu mạnh tới thế không? Thực ra nhiều khi là không." Mà vận hành thông minh chính là để giải phóng người vận hành khỏi những việc vụn vặt thường nhật đó: tự động phát hiện bất thường, tự động định vị căn nguyên, tự động sinh khuyến nghị sửa chữa; thậm chí STAROps còn hỗ trợ Agent trực tự chủ 24 giờ, canh hệ thống giùm người vận hành, để khỏi phải lo cuộc gọi cảnh báo lúc rạng sáng.

Khi đội dần chấp nhận mô hình cộng tác người – máy này, hai bên bắt đầu nhìn xa hơn.

## Bốn — Triển vọng tương lai: không chỉ vận hành, mà xuyên suốt toàn quy trình R&D

![05-duong-tien-hoa.png](../../assets/imgs/chapter-27/image-005.png)

Khi đội dần chấp nhận mô hình cộng tác người – máy mới này, hai bên bắt đầu hướng tầm nhìn tới tương lai xa hơn. Về bước tiếp theo của vận hành thông minh, suy nghĩ của Song Ming và Li Guoqiang rất nhất quán: vận hành chưa bao giờ nên là một khâu cô lập.

### 1. Nhúng vào toàn chuỗi R&D

Quan điểm của Song Ming rất rõ: "Vận hành thông minh không nên chỉ là công cụ của người vận hành, mà phải xuyên suốt cả quy trình R&D." Ông chia sẻ vài hình dung cụ thể: ở khâu AI Coding, muốn hiện thực vòng khép kín R&D tự động kéo dài thì cần Agent tự hoàn tất phần test; còn việc định vị các vấn đề xuyên module trong hệ thống lớn thì hoàn toàn nhúng được vào khâu lập trình để tự động sửa vấn đề; ở giai đoạn gửi test, năng lực định vị căn nguyên có thể hạ thẳng xuống mức code, kích hoạt ngược việc tự động sửa code; còn trong quá trình triển khai canary, năng lực giám sát có thể tự động kích hoạt rollback khi bất thường — "những năng lực này thực ra giờ đã đủ nền để triển khai rồi." Đồng thời, Song Ming cũng nêu kỳ vọng mới với STAROps: "Ngưỡng sử dụng hiện tại còn hơi cao, chỉ số ít chuyên gia dùng được. Mong tương lai nó hạ xuống thấp hơn, nhúng vào IDE, nhúng vào pipeline CI/CD dưới dạng Chatbot, tích hợp sâu với cả hệ R&D, để phát huy hiệu suất tối đa."

Li Guoqiang nghe xong cười: "Anh Song vừa nói trúng đúng hướng quy hoạch sản phẩm tiếp theo của chúng tôi."

### 2. Thông dữ liệu và bánh đà kinh nghiệm

Từ phía sản phẩm, Li Guoqiang cũng tiết lộ những việc đội đang đẩy.

**Thứ nhất là thông dữ liệu giữa miền R&D và miền vận hành.** "Anh Song nói production có vấn đề thì định vị thẳng tới một dòng code được không? Vậy trước hết Agent phải lấy được những dữ liệu đó đã." Song Ming bên cạnh bổ sung: "Nó phải biết code ở đâu." Li Guoqiang nói, đó đúng là bài toán mà UModel đang giải: dùng một ngôn ngữ mô hình hoá thống nhất để thông dữ liệu giữa các miền. Hiện đội đã hoàn tất việc thông dữ liệu R&D với sản phẩm Yunxiao của Alibaba Cloud, và bước tiếp theo sẽ hỗ trợ các công cụ R&D chủ đạo như GitLab. Cuối cùng, mỗi thay đổi code được phát hành, mỗi máy được phát hành, mọi thông tin đều sẽ được xâu chuỗi lại. "Production có chuyện thì máy nào có vấn đề? Bản phát hành ngày nào? Thậm chí là code do lập trình viên nào viết, hay do Agent AI nào sinh ra? Tất cả đều truy được."

**Thứ hai là kết tinh kinh nghiệm tự động.** Li Guoqiang nhắc rằng kho tri thức vận hành của rất nhiều doanh nghiệp phải do con người gom thủ công, vừa rườm rà vừa không đầy đủ. Thứ STAROps đang làm là tự động lấy mọi hành động vận hành của người dùng trên production cùng bối cảnh lúc đó rồi tự động kết tinh thành kho tri thức. "Kinh nghiệm kết tinh theo cách đó mới thực sự bám sát chính người dùng đó, làm được chuyện 'nghìn người nghìn diện'. Đặc trưng vận hành của mỗi người dùng, những cách xử trí hữu hiệu của họ, đều sẽ tự động được kết tinh lại."

Song Ming rất tán thành: "Thế thì tuyệt quá, chúng tôi cũng đang gom kho tri thức vận hành của mình; nếu thông được thì hiệu suất sẽ cao hơn nhiều."

### 3. Cộng tác người – máy: tiến tới vòng khép kín tự chủ

Về hình thái cuối cùng của vận hành thông minh, Li Guoqiang cho rằng cuối cùng chắc chắn sẽ đi tới giai đoạn "gần như khép kín hoàn toàn": Agent tự phân tích tìm ra căn nguyên, đưa ra khuyến nghị hành động — ví dụ khởi động lại máy, rollback version, chỉnh tham số — rồi tự động thực thi dưới một cơ chế xác nhận. "Ban đầu có thể là đưa khuyến nghị trước, người dùng xác nhận rồi chúng tôi mới thực thi. Tương lai, khi năng lực tiến hoá, biết đâu thực sự làm được vận hành tự động hoàn toàn 7×24 giờ." Li Guoqiang nói, đó hẳn là mục tiêu mà mọi người làm vận hành đều muốn đạt tới.

Nhưng kể cả tới bước đó, ông cho rằng người vận hành vẫn có ba giá trị không thể thay thế:

**Một là định nghĩa mục tiêu**: yêu cầu về mức khả dụng, chuẩn thời gian phản hồi của mỗi nghiệp vụ đều khác nhau; hệ thống có khoẻ không thì cuối cùng phải khớp với yêu cầu nghiệp vụ, và điều đó cần con người cùng phía nghiệp vụ định nghĩa.

**Hai là tối ưu liên tục**: hệ thống của mỗi doanh nghiệp đều khác nhau, nên năng lực của Agent cần được con người mài giũa và tối ưu cùng một cách liên tục.

**Ba là quyết định cuối cùng**: trong các kịch bản phức tạp, chẳng hạn có nên rollback không, có nên đưa bản hotfix lên không, rất nhiều yếu tố đan vào nhau, và quyết định của con người vẫn là mấu chốt nhất.

Song Ming rất tán thành: "Bước tiếp theo chúng tôi cũng đang làm đúng việc đó, biến các module chữa lành sự cố thành các lệnh chuẩn hoá rồi nối vào model." Li Guoqiang đáp: "Đây thực ra chính là việc người dùng xây tài sản vận hành của chính mình; sản phẩm của chúng tôi cung cấp năng lực model, hai bên cùng dựng thì mới thành được một vòng khép kín trọn vẹn." "Đúng vậy, đó là một quá trình hợp tác sâu", Song Ming tổng kết.

## Năm — Lời kết

Từ "người đi tìm vấn đề" tới "vấn đề đi tìm người", từ "kinh nghiệm dẫn dắt" tới "dữ liệu + AI dẫn dắt" — đó là con đường chuyển đổi mà Geely đã đi trong lĩnh vực vận hành thông minh. Gợi mở cốt lõi mà con đường này mang lại là: **vận hành thông minh chưa bao giờ là chuyện "mua một sản phẩm" là giải quyết được, mà là một công trình hệ thống lấy quản trị dữ liệu làm nền, lấy năng lực sản phẩm làm động cơ, lấy cộng tác tổ chức làm bảo đảm.** Đúng như đã nhắc tới trong buổi trò chuyện: mục tiêu tối hậu của vận hành thông minh chưa bao giờ là tiêu diệt sự cố, mà là tiêu diệt nỗi lo âu của việc vận hành — để kỹ sư vận hành ngủ yên, để phía nghiệp vụ không còn bị cuộc gọi cảnh báo lúc rạng sáng đánh thức, và để sức lực của cả đội chuyển thật sự từ chỗ "đoán sự cố, truy sự cố" sang chỗ "tạo ra giá trị nghiệp vụ".

Nếu đội của bạn cũng đang ở giai đoạn chuyển đổi từ vận hành truyền thống sang vận hành thông minh, thì thực tiễn của Geely có thể là một tham chiếu: **trị dữ liệu trước, rồi mới lên công cụ, và dùng kịch bản để dựng niềm tin.** Nếu muốn biết thêm về nền tảng vận hành thông minh toàn miền STAROps, có thể truy cập website chính thức của Alibaba Cloud để xem chi tiết.
