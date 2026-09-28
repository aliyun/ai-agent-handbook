# Chương 22 — Tối ưu Agent: Badcase

Chương trước đã chuẩn bị xong vấn đề nghiệp vụ và căn cứ phán định. Việc tiếp theo mà đội nghiệp vụ cần làm là: để việc đánh giá liên tục phát hiện ra các vấn đề trong câu trả lời và quá trình thực thi, rồi dùng chính bộ đề đó để kiểm chứng phần sửa có hữu hiệu không.

Chương này dùng tiếp thực tiễn của Agent chăm sóc khách hàng sản phẩm: người dùng sẽ hỏi "phần quan sát và tối ưu Agent có những chức năng gì", "làm đánh giá ra sao", và đội muốn câu trả lời vừa chính xác vừa hướng dẫn được người dùng hoàn thành thao tác. **Đánh giá** kiểm tra những lần thực thi đã xảy ra; còn **thí nghiệm** thì cho Agent sau khi sửa trả lời lại, sinh ra output và trajectory mới.

![image](../assets/imgs/chapter-22/image-001.png)

## 22.1 Trước hết chọn một vấn đề nghiệp vụ và làm ra một evaluator dùng được

Lần đầu dựng phần đánh giá thì không cần phủ hết mọi nghiệp vụ cùng lúc. Đội chăm sóc khách hàng sản phẩm có thể chọn trước nhóm khiếu nại "đã trả lời khái niệm liên quan nhưng chưa giải quyết được vấn đề của người dùng", lấy ra vài câu trả lời được chuyên gia công nhận và vài câu trả lời rõ ràng có khiếm khuyết, rồi thảo luận khác biệt nằm ở đâu.

Chẳng hạn, "có những chức năng gì" cần phủ các năng lực chính và nói rõ công dụng; còn "làm đánh giá ra sao" cần nói rõ quá trình chuẩn bị dữ liệu, cấu hình chuẩn, chạy đánh giá và xem kết quả. Cả hai đều đòi hỏi chính xác, nhưng yêu cầu về tính đầy đủ thì khác nhau. Đội hãy viết chuẩn chung trước, rồi bổ sung Rubric riêng cho những đề đã vào tập thí nghiệm; cách nhập cụ thể xem ở chương trước.

Một bộ chuẩn chung dùng thử được có thể yêu cầu evaluator kiểm ba điều: có đáp lại đúng vấn đề thực tế của người dùng không; các phát biểu then chốt có tài liệu chống đỡ không; và với các task cần thao tác thì có cung cấp đủ các bước để người dùng làm tiếp không. Mỗi mục viết rõ điều kiện thoả, thoả một phần và không thoả, đồng thời yêu cầu nêu lý do trừ điểm. Khi liên quan tới các thao tác như hoàn tiền hay đổi quyền hạn thì thêm phần kiểm kết quả nghiệp vụ, tránh việc chỉ đánh giá câu trả lời có lịch sự không.

Vào "Đánh giá → Evaluator" trên khung điều khiển, trước hết xem các evaluator dựng sẵn có phủ mục tiêu không. Khi những chỉ số như mức hoàn thành task đã đáp ứng được nhu cầu thì tái dùng trước; còn khi cần tri thức sản phẩm hay chuẩn dịch vụ riêng thì mới tạo evaluator tuỳ chỉnh. Hãy viết tiêu chí phán định vào Prompt, khai báo các biến input người dùng, output của Agent và trajectory cần thiết, rồi cấu hình điểm, phán định và phần diễn giải trong phần định nghĩa output. Các trường như phân loại kịch bản, điểm từng mục thì thêm theo nhu cầu phân tích thực tế, không cần điền hết mọi trường có thể dùng ngay từ đầu.

Cách đánh giá cũng chọn theo nghiệp vụ:

| Vấn đề cần phán định | Có thể chọn ra sao |
| --- | --- |
| Output có đúng định dạng JSON không, trường bắt buộc có tồn tại không | Dùng luật Code, giải quyết trước phần kiểm các điều kiện xác định |
| Câu trả lời có đúng trọng tâm không, có sót thông tin cần thiết không | Dùng đánh giá bằng LLM, cấp đủ tài liệu tham chiếu và chi tiết chấm điểm |
| Task nhiều bước có hoàn thành không, kết quả tool và câu trả lời cuối có nhất quán không | Dùng đánh giá bằng Agent, kết hợp soát trajectory; khi cần tri thức chuyên ngành thì gắn Skill tương ứng |

Một task có thể chọn nhiều evaluator. Ví dụ, tách riêng "chất lượng câu trả lời" và "thao tác nghiệp vụ có hoàn thành không" để đánh giá, thì về sau nhìn thẳng ra được mục nào đi xuống. Nếu cần tổng điểm thì hãy nói rõ cách tính trong tiêu chí chấm điểm; không được lấy trung bình đơn giản kết quả của nhiều evaluator rồi mặc định coi đó là chất lượng nghiệp vụ.

## 22.2 Chấm thử bằng vài mẫu thật, rồi khởi động lô đánh giá lịch sử đầu tiên

Sau khi lưu evaluator, hãy vào "Đánh giá → Task đánh giá" và bấm "Tạo task đánh giá". Bước này là nối tiêu chí chấm điểm vào dữ liệu thật, và phần kiểm tra giá trị nhất là xác nhận evaluator đã nhìn thấy trọn vẹn câu hỏi, câu trả lời và quá trình thực thi.

**Trước hết chọn đúng dữ liệu và phạm vi.** Muốn đánh giá biểu hiện của một Agent mới kết nối thì chọn "Trajectory Agent"; còn khi dữ liệu đã qua Pipeline làm sạch, tổng hợp và bù đủ trường nghiệp vụ thì chọn dataset tương ứng. Khi dùng nguồn trajectory hay Trace thì chọn "hội thoại một lượt" hay "hội thoại nhiều lượt" theo lối vào tương ứng; hội thoại nhiều lượt còn phải cấu hình "phán định kết thúc hội thoại" để đánh giá sau khi task hoàn thành. Khi dùng Dataset thì chọn thẳng tập rồi ánh xạ trường — một dòng đại diện cho cái gì đã được khâu gia công dữ liệu phía trước quyết định, nên không cần đi tìm công tắc một lượt hay nhiều lượt nữa.

Lần chạy đầu có thể bật "Đánh giá dựa trên dữ liệu lịch sử", chọn một khoảng thời gian mà ta biết có chứa nghiệp vụ mục tiêu, ví dụ bốn giờ gần nhất, rồi bấm "Xem trước dữ liệu". Hãy xác nhận trong đó thực sự có vấn đề cần điều tra, chứ không phải là Agent khác hay những lời gọi không liên quan. Nếu phần xem trước của hội thoại nhiều lượt rỗng thì kiểm tra xem các phiên trong khoảng thời gian đó đã đạt điều kiện kết thúc đã đặt chưa.

**Hãy giữ quy mô chạy thử ở mức đọc hết được từng bản ghi.** Trong "Cấu hình lấy mẫu", hãy đặt tỉ lệ lấy mẫu và số mẫu tối đa. Bản demo dùng lấy mẫu 100% và tối đa 100 bản ghi: cái nó giới hạn là lượng dữ liệu ứng viên, chứ không bảo đảm sẽ có 100 Badcase. Lúc mới bắt đầu cũng có thể lấy một lô nhỏ hơn, để người phụ trách nghiệp vụ đọc hết phần diễn giải trước rồi mới mở rộng phạm vi.

**Đấu đúng trường rồi mới chạy test.** Sau khi chọn evaluator, giao diện sẽ hiển thị mẫu xem trước và phần "Ánh xạ trường". Hãy cấu hình theo đúng những trường thực sự có trong mẫu: câu hỏi người dùng ánh xạ sang biến input, câu trả lời cuối ánh xạ sang biến output, còn khi cần phán định quá trình thì ánh xạ thêm trọn trajectory. Tên biến thì tuỳ chỉnh được, nhưng nội dung bắt buộc phải ứng đúng. Ví dụ, chỗ cần "câu trả lời cuối" thì không được đấu nhầm vào output của một lời gọi tool nào đó.

![image](../assets/imgs/chapter-22/image-002.png)

_Demo thao tác: đấu `input`, `output`, `agent_trajectory` của evaluator lần lượt vào câu hỏi, câu trả lời và trajectory trong dữ liệu xem trước, rồi chạy test._

Bấm "Chạy test", đọc điểm và phần diễn giải, rồi dùng "Đổi bản ghi khác" để kiểm chứng tiếp. Ít nhất hãy phủ một câu trả lời tốt đã biết, một câu trả lời xấu đã biết, và một mẫu có thông tin không đầy đủ. Khi kiểm tra, có thể hỏi thẳng: căn cứ trừ điểm có thực sự xuất hiện trong câu trả lời này không? Evaluator có trích đúng kết quả tool không? Khi thiếu bằng chứng, nó có nói rõ là không phán định được không?

Nếu câu trả lời xấu bị chấm điểm cao, trước hết hãy xem input nó nhận được, rồi mới xem các điều khoản chấm điểm. Chẳng hạn, evaluator chỉ kiểm xem có nhắc tới chữ "evaluator" không, thì có thể coi một đoạn giới thiệu chung chung là hướng dẫn thao tác — lúc đó cần bổ sung chuẩn "có giúp người dùng làm được bước tiếp theo không". Chỉnh xong thì chấm lại đúng lô mẫu đó, xác nhận các câu trả lời tốt ban đầu không bị phán nhầm theo.

Các task ảnh, âm thanh hay tài liệu cũng chấm thử theo thứ tự này. Trước hết xác nhận evaluator đọc được tài liệu tương ứng, rồi đối chiếu số trang, đoạn hay trường mà nó trích dẫn. Chẳng hạn, phán định số tiền hoàn ứng có đúng không thì phải thấy được chứng từ và kết quả kê khai; chỉ nhận một link file hay một câu "đã xong" thì không đủ để phán định.

![image](../assets/imgs/chapter-22/image-003.png)

Trước khi tạo chính thức, có thể bật "Ghi vào dataset kết quả đánh giá" trong phần "Output kết quả đánh giá". Lần đầu dùng thì để trống dataset kết quả cho hệ thống tạo; còn khi đã có dataset đích với mục đích rõ ràng thì chọn ghi thêm vào. Hãy dùng "Truyền xuyên các trường dữ liệu nguồn" để giữ câu hỏi người dùng, câu trả lời gốc, nhãn kịch bản cùng các tài liệu cần cho việc soát lại về sau. Cấu hình dataset kết quả không sửa được sau khi task đã tạo, nên phải sắp xếp gọn ngay ở đây.

Cuối cùng bấm "Lưu và chạy". Task xong thì hãy kiểm tra số lượng thực sự xử lý và các bản ghi thất bại trước, rồi mới bắt đầu phân tích điểm. Phần xem trước thành công chỉ nói lên cấu hình cho từng bản ghi là dùng được; còn lô chạy chính thức đầu tiên mới phơi ra được những vấn đề như chọn sai phạm vi hay một phần mẫu thiếu trường.

## 22.3 Chọn ra những Badcase đáng sửa từ kết quả

Vào phần kết quả của task đánh giá, hãy xem phân bố tổng thể trước rồi mới mở từng mẫu. Khi cần phân tích xuyên task thì vào "Phân tích và nhận định", lọc theo evaluator, nguồn dữ liệu và khoảng điểm. Khi xem phần điểm thấp thì còn phải kèm theo task và khoảng thời gian, tránh trộn dữ liệu của những chuẩn khác nhau, nghiệp vụ khác nhau vào cùng một phép so sánh.

Một bản kết quả ít nhất phải để câu hỏi gốc, câu trả lời của Agent, phần phán định từng mục và phần diễn giải cạnh nhau mà đọc. Tổng điểm nói cho đội biết nên xem chỗ nào trước; phần diễn giải giúp phán định vấn đề có thành lập không; còn trajectory thì dùng để xác nhận vì sao vấn đề đó xuất hiện. Đừng vừa thấy điểm thấp là lập tức sửa Prompt.

Lấy đề "làm đánh giá ra sao" làm ví dụ, có thể xử lý theo thứ tự dưới đây. Cách phán định ở đây cũng áp dụng được cho các task chăm sóc khách hàng, phân tích dữ liệu và code.

| Hiện tượng đọc được | Xem tiếp cái gì | Hành động nên làm trong vòng này |
| --- | --- | --- |
| Câu trả lời giới thiệu khái niệm nhưng thiếu bước chạy và phân tích kết quả | Điều khoản chấm điểm có đòi hướng dẫn thao tác không, câu trả lời có thực sự bỏ sót không | Xác nhận là vấn đề về tính đầy đủ của câu trả lời, đưa vào mẫu tối ưu |
| Câu trả lời đã có các bước then chốt, mà phần diễn giải lại nói là không có | Output sau khi ánh xạ có đầy đủ không, có dùng nhầm chuẩn của đề khác không | Sửa evaluator hay phần ánh xạ, rồi chấm lại các mẫu bị ảnh hưởng |
| Agent tuyên bố thao tác đã xong, mà trajectory cho thấy tool thất bại | Cách xử lý sau khi thất bại và trạng thái nghiệp vụ cuối cùng | Giữ lại như một vấn đề về thực thi task, giao cho đội chịu trách nhiệm hành vi đó |
| Kết quả cho thấy thực thi bất thường hay thiếu tài liệu | Lỗi task, phạm vi thu thập, tính đọc được của file đính kèm | Bổ sung đủ điều kiện thực thi hay tài liệu trước, rồi mới phán định chất lượng Agent |

Trong một lần chạy hồi kiểm ở bản demo, câu "có những chức năng gì" và "làm đánh giá ra sao" lần lượt được 0,25 và 0,5. Hai con số đó ứng với câu trả lời lần ấy và Rubric lúc ấy; thứ thực sự hữu ích là phần diễn giải từng mục đã chỉ ra những điểm năng lực nào chưa được phủ. Nhờ vậy đội mới kiểm tra được là thiếu tri thức, thiếu cách tổ chức câu trả lời hay thiếu chuẩn của đề bài, thay vì kết luận chung chung rằng model chưa đủ mạnh.

Sau khi kết quả ghi vào Dataset, có thể lọc ứng viên theo trường điểm hay trường phán định thực sự được xuất ra, rồi để người phụ trách nghiệp vụ soát lại. Hãy giữ lại vấn đề đã xác nhận, hành vi kỳ vọng và căn cứ, tạo thành đề cho thí nghiệm về sau. Lúc đầu không cần thu hết mọi mẫu điểm thấp: với cùng một kiểu bỏ sót thì chọn vài bản tiêu biểu, đồng thời giữ các kịch bản biên và một phần task vốn bình thường, thì mới kiểm chứng được phần sửa có gây thụt lùi không.

Những mẫu mà con người phát hiện là evaluator phán sai cũng rất có giá trị, nên giữ lại làm tài liệu hiệu chỉnh. Nhờ vậy, vòng sau vừa kiểm được Agent có cải thiện không, vừa kiểm được evaluator có còn mắc đúng lỗi đó không. Các mẫu điểm cao thì cũng nên lấy mẫu kiểm tra vừa phải, tránh việc chỉ nhìn điểm thấp mà bỏ lọt những vấn đề nghiêm trọng mà evaluator chưa nhận ra.

Khi việc đánh giá lịch sử đã cho phán định ổn định, hãy bật "Đánh giá liên tục trên dữ liệu mới", rồi cấu hình khoảng thời gian và phần lấy mẫu. Hằng ngày thì ưu tiên xem các chỉ số then chốt đi xuống, các vấn đề lặp lại và kịch bản mới; mỗi lần chọn một nhóm nhỏ vấn đề rõ ràng để đưa vào thí nghiệm. Khi traffic lớn thì giảm tỉ lệ lấy mẫu, rồi bù bằng các lần đánh giá lịch sử chuyên đề cho những kịch bản trọng điểm.

## 22.4 Cấu hình các vấn đề đã xác nhận thành thí nghiệm, và đánh giá chính đáp án mới sinh lần này

Quay lại hai đề "có những chức năng gì" và "làm đánh giá ra sao", đội có thể nêu một cải tiến cụ thể: bù đủ tri thức sản phẩm, và yêu cầu khi trả lời các câu hỏi thao tác thì phải đưa ra các bước. Hãy ghi lại phương án hiện tại làm **Baseline** trước, rồi chuẩn bị phương án ứng viên. Nếu đồng thời đổi model, sửa Prompt và thêm Skill thì khó giải thích được thay đổi về điểm; vòng đầu có thể chỉ đổi đúng một thứ có căn cứ nhất.

Vào "Thí nghiệm → Kế hoạch thí nghiệm", bấm "Tạo kế hoạch mới", chọn dataset và loại thí nghiệm. "Thí nghiệm online" dùng để cấu hình model trên nền tảng và chạy thẳng; còn khi test Agent của chính doanh nghiệp thì có thể chọn "thí nghiệm local" chạy qua SDK. Thí nghiệm online ở đây không đồng nghĩa với việc chia traffic A/B cho người dùng production.

Sau đó cấu hình các evaluator cần dùng và phần ánh xạ biến. Thí nghiệm có một khác biệt then chốt so với phần đánh giá lịch sử ở trên: **thứ được chấm bắt buộc phải là câu trả lời mới và trajectory mới sinh ra lần này.**

| Biến đánh giá | Nội dung phải đấu vào trong thí nghiệm |
| --- | --- |
| Input người dùng | Câu hỏi thực sự gửi tới model hay Agent lần này |
| Output của Agent | Đáp án mới sinh ra trong lần thực thi này |
| Trajectory vận hành | Quá trình thực thi gắn với thí nghiệm lần này |
| Đáp án tham chiếu hay hành vi kỳ vọng | Trường tham chiếu của đề tương ứng trong Dataset |
| `rubric` | Chi tiết chấm điểm của đề đó trong Dataset |

Sau khi nhập xong Rubric theo từng đề, hãy khai báo biến `rubric` trong evaluator và yêu cầu nó chấm theo các điều khoản được truyền vào; còn phía thí nghiệm thì ánh xạ biến đó sang trường của dataset. Hãy chạy hai đề trước, mở phần diễn giải ra, xác nhận câu "có những chức năng gì" dùng chuẩn độ phủ năng lực, còn câu "làm đánh giá ra sao" dùng chuẩn các bước thao tác. Nếu vẫn chấm phải câu trả lời cũ hay dùng chung một chuẩn không phù hợp, thì hãy sửa phần ánh xạ trước rồi chạy lại.

Kế hoạch thí nghiệm cũng chọn được Pipeline. Khi việc chấm điểm cần trạng thái tool, kết quả nghiệp vụ có cấu trúc hay các trường trích từ trajectory, thì có thể cho Trace mới sinh ra trong thí nghiệm đi qua khâu xử lý, rồi ánh xạ các trường kết quả bắt đầu bằng `pipeline.` cho evaluator. Nhờ vậy, mẫu trên production và kết quả mới của thí nghiệm dùng được cùng một bộ quy tắc gia công. Còn khi chỉ cần so sánh câu trả lời cuối thì tạm chưa cần cấu hình bước này.

Phép so sánh chính thức thì dùng dữ liệu mới nhất của golden Dataset độc lập đã xác nhận cho vòng này; trong kỳ thí nghiệm thì không ghi thêm hay sửa nữa, còn version dữ liệu đã tạo thì dùng để lưu hồ sơ; giao diện hiện tại không hỗ trợ khởi động thí nghiệm thẳng từ một version lịch sử. Hãy đồng thời ghi lại tiêu chí chấm điểm, version Agent hay model, Prompt và các tham số then chốt, để hai version phương án đối diện cùng đề bài và cùng điều kiện khởi đầu.

## 22.5 Kết nối Agent của chính doanh nghiệp vào, chạy thông một đề trước

Không ít Agent nghiệp vụ cần truy cập kho tri thức nội bộ hay hệ thống nghiệp vụ; có thể thực thi đề bài trong một môi trường gọi được các dịch vụ đó, rồi gửi kết quả theo giao ước ngược về phần quan sát và tối ưu Agent. Điểm xuất phát là kế hoạch thí nghiệm local vừa tạo: sau khi lưu cấu hình dataset và evaluator, bấm **Lấy cấu hình thí nghiệm local**, làm theo hướng dẫn ở thanh bên để cài phụ thuộc, cấu hình biến môi trường, và chọn "Chạy qua HTTP", "Chạy lệnh local" hay "Chạy tuỳ chỉnh".

Kỹ sư sao chép đoạn code ứng với kế hoạch hiện tại, rồi thay địa chỉ dịch vụ, header request, cách ráp câu hỏi thành request và thiết lập timeout bằng cấu hình thực tế của Agent local; còn với chế độ chạy tuỳ chỉnh thì bổ sung logic gọi của chính mình. Người phụ trách nghiệp vụ cung cấp một câu hỏi tiêu biểu để kiểm chứng trọn quá trình gọi trước, rồi mới chạy cả dataset. Sau khi code chạy xong thì vào "Bản ghi thí nghiệm" để xem kết quả gửi về.

Video thao tác còn trình bày một nền tảng thí nghiệm phía khách hàng đóng gói quá trình thực thi này thành trang giao diện, hợp với những đội cần quản lý nhiều kết nối và task định kỳ. Khi dùng một đầu thực thi kiểu đó đã triển khai sẵn, hãy cấu hình AgentSpace, region và thông tin truy cập trước, test kết nối, rồi thêm kết nối tới Agent đích. Lần đầu tích hợp thì bắt đầu thẳng từ phần hướng dẫn SDK ở trên là được, không cần dựng trang quản lý này trước.

Agent trong bản demo có trạng thái phiên, nên cách gọi mặc định "gửi một request, lấy một response" không dùng thẳng được. Thực tế đã thích ứng thành "tạo Session → gửi câu hỏi tới Session đó → lấy phản hồi cuối". Nếu API trả về thông tin tiếp nhận task trước, thì còn phải chờ tiếp câu trả lời cuối, không được coi việc tiếp nhận thành công là đề đã xong. Các mẫu độc lập với nhau thì nên dùng phiên riêng, tránh để ngữ cảnh của đề trước ảnh hưởng tới đề sau.

Sau khi hoàn tất phần thích ứng lời gọi, hãy test một đề trước, kiểm tra câu hỏi thực sự được gửi đi, câu trả lời cuối trả về đầy đủ, và bản ghi thí nghiệm ứng đúng về đề đó; khi cần chấm điểm quá trình thì xác nhận thêm rằng trajectory mới đã được liên kết. Khi dùng nền tảng thí nghiệm phía khách hàng thì làm chính các kiểm tra đó qua phần test một đề trên trang kết nối. Sau đó mới chạy lô dữ liệu nhỏ ở trên. Thứ tự này giúp tách riêng việc định vị vấn đề thích ứng kết nối với vấn đề chất lượng câu trả lời.

Các sửa đổi ở Tool, Skill, Workflow hay Harness đều tham gia so sánh được bằng cách kết nối vào version Agent đã sửa. Hãy ghi version vào context hay bản ghi của thí nghiệm, và xác nhận dịch vụ đã thực sự dùng version đó. Chỉ dùng chung một địa chỉ dịch vụ thì không nói lên được rằng hai lần chạy có cùng cấu hình.

## 22.6 Xem khác biệt trước sau của cùng một đề, rồi quyết định có dùng ứng viên không

Sau khi thí nghiệm xong, vào "Bản ghi thí nghiệm", chọn bản ghi Baseline và bản ghi ứng viên, rồi bấm "So sánh". Phần "So sánh tổng quan" giúp quan sát thay đổi tổng thể, "So sánh cấu hình" dùng để đối chiếu vòng này thực sự đã đổi những gì, còn "So sánh mẫu" thì đặt output và chỉ số của cùng một đề cạnh nhau. Hãy xác nhận đang dùng cùng một bộ đề và cùng một bản chuẩn trước, rồi mới giải thích việc điểm lên hay xuống.

Thứ tự đọc có thể bắt đầu từ các đề thụt lùi, rồi tới các đề cải thiện, cuối cùng kiểm tra các kịch bản bình thường then chốt. Với câu "làm đánh giá ra sao", trọng tâm là đối chiếu xem ứng viên có bù đủ các bước cấu hình, chạy và phân tích kết quả không; còn với câu "có những chức năng gì" thì xem độ phủ năng lực có tăng không, đồng thời có bịa ra chức năng không được hỗ trợ không. Output dài ra tự nó không đồng nghĩa với cải thiện; phần nội dung thêm vào phải ứng với yêu cầu chấm điểm.

Trong phần chi tiết từng đề, hãy đọc kết hợp kết quả từng mục, phần diễn giải và phần khác biệt output. Nếu tổng điểm của ứng viên tăng mà các điều khoản then chốt vẫn chưa đạt, thì vòng này chưa hợp để nâng cấp; còn nếu chỉ một đề cải thiện mà các đề khác thụt lùi, thì phải quay về đúng phần đã sửa, xem có áp đặt một kiểu định dạng trả lời nào đó lên mọi câu hỏi không. Khi cần thì dùng chiến lược khác nhau cho các ý định nghiệp vụ khác nhau, rồi chạy vòng thí nghiệm tiếp theo.

![image](../assets/imgs/chapter-22/image-004.png)

Chạy lặp giúp xác nhận phần cải thiện có ổn định không. Khi cần kiểm evaluator thì chấm lặp trên cùng một câu trả lời cố định; khi cần kiểm độ ổn định của Agent thì cho nó chạy lại cùng bộ đề. Cái trước chủ yếu quan sát dao động phán định, còn cái sau thì gồm cả biến động của câu trả lời, tool và môi trường. Khi thấy điểm nhấp nhô, hãy mở câu trả lời và bản ghi vận hành tương ứng trước, chứ đừng quy hết về Rubric.

Khi quyết định dùng ứng viên, ngoài điểm trung bình thì ít nhất còn phải xem ba điều: lỗi nghiêm trọng có biến mất không, các kịch bản vốn bình thường có thụt lùi không, và thời lượng cùng mức tiêu có chấp nhận được không. Chẳng hạn, bù thêm phần truy vấn trạng thái có thể làm tăng một lời gọi tool, nhưng lại tránh được tình huống "thao tác thất bại mà vẫn báo thành công"; loại chi phí này phải phán định kèm giá trị nghiệp vụ. Ngược lại, thời lượng thấp có được nhờ bỏ qua các bước cần thiết thì không thể lấy làm lý do nâng cấp.

Với các đề gọi thất bại, thiếu hạn mức hay không lấy được đáp án cuối, trước hết phải nói rõ nguyên nhân. Nếu vòng này so sánh chất lượng câu trả lời thì có thể sửa điều kiện thực thi rồi chạy lại; còn nếu so sánh năng lực bàn giao của cả stack dịch vụ, thì những thất bại đó cũng thuộc phần biểu hiện cần cải thiện. Đừng đợi có kết quả rồi mới đổi cách thống kê.

Sau khi lô thí nghiệm nhỏ đã qua, hãy mở rộng ra tập hồi quy lịch sử, rồi kiểm chứng thêm một lô mẫu độc lập chưa tham gia vào phần sửa của vòng này. Chỉ khi vấn đề mục tiêu đã cải thiện và các kịch bản then chốt không thụt lùi tới mức không chấp nhận được, thì mới vào quy trình phát hành của đội. Hãy giữ phạm vi dữ liệu, version phương án, tiêu chí chấm điểm và kết quả từng đề cùng nằm trong bản ghi thí nghiệm, thì về sau mới giải thích được vì sao chọn bản này.

## 22.7 Để lần sửa sau tiếp tục dùng được bộ đánh giá này

Giá trị của một vòng thí nghiệm không chỉ là chọn ra một version, mà còn ở phần kiểm tra lặp lại được mà nó để lại. Các đề đã xác nhận hữu hiệu thì vào tập hồi quy, các trường hợp evaluator phán sai thì vào tập hiệu chỉnh, còn các vấn đề chưa giải quyết thì để dành cho vòng sau. Về sau đội bổ sung tri thức, sửa Prompt, đổi model hay chỉnh Skill đều chạy lại được từ bộ tài liệu này.

Khi cần kiểm tra định kỳ một Agent nội bộ, các đội dùng nền tảng thí nghiệm phía khách hàng có thể chọn kế hoạch thí nghiệm, Agent đích và chu kỳ lập lịch, xem bản ghi kích hoạt qua Launch History, rồi vào phần quan sát và tối ưu Agent để xem kết quả thí nghiệm. Còn các đội dùng thẳng SDK thì đưa script thực thi đã kiểm chứng vào task định kỳ hay phần kiểm tra phát hành của mình. Bản demo trình bày việc chạy liên tục với khoảng cách năm phút; còn nghiệp vụ thực tế thì sắp lịch hồi quy theo ngày hay sau mỗi lần thay đổi, tuỳ tần suất phát hành và ngân sách.

Khi xem xu thế hằng ngày, trước hết hãy để ý phần đi xuống liên tục hay các đề then chốt thụt lùi, rồi mới khoan xuống từng lần thực thi. Một lần nâng cấp mà hiệu quả không tốt thì lần theo bản ghi thí nghiệm để tìm lại version và thay đổi tương ứng, rồi quyết định sửa tiếp hay lùi lại theo quy trình sẵn có. Các trajectory thật sau khi phát hành lại tiếp tục vào phần đánh giá, và những Badcase mới lại trở thành đề thí nghiệm cho vòng sau.

Chương sau sẽ triển khai cách sinh ra các cải tiến như Skill, Workflow, Experience hay Harness từ những vấn đề này, rồi dùng thí nghiệm để kiểm nghiệm xem có đáng áp dụng trên nhiều task hơn không.
