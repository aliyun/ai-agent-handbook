# Chương 20 — Xử lý dữ liệu runtime của Agent

Người phụ trách chăm sóc khách hàng nêu một yêu cầu cụ thể: mỗi ngày xem một lô hội thoại hoàn tiền, tìm ra các trường hợp "tool chưa làm được việc, mà Agent lại báo với người dùng là đã xong"; sau khi sửa prompt, còn phải dùng chính những ca đó để kiểm tra vấn đề có giảm không.

Bản ghi vận hành đã được kết nối, trajectory cũng mở ra được, nhưng thứ nhân viên kiểm định cần là một bảng dùng thẳng được: người dùng hỏi gì, Agent trả lời ra sao, đã thực thi những thao tác nào, và bản ghi đến từ đâu. Dữ liệu nhiều lên thì còn muốn phân loại theo nghiệp vụ, rút mẫu, và mỗi ngày tự động bổ sung dữ liệu mới. Nếu lần nào cũng phải để người phát triển export log, sửa script, sắp xếp bảng biểu, thì việc kiểm định khó trở thành công việc hằng ngày.

**Pipeline lưu bộ phương pháp sắp xếp đó thành một task xử lý dữ liệu, và liên tục sinh ra Dataset theo giao ước.** Người phát triển ứng dụng lo đấu đúng các trường nghiệp vụ, người phụ trách nghiệp vụ thì dựa vào phần xem trước để xác nhận mẫu có hợp mục đích không; sau đó, việc đánh giá, soát thủ công và thí nghiệm dùng chung các trường này, giảm được công sức đi tìm dữ liệu và giải thích dữ liệu lặp đi lặp lại.

Ở chương trước, ta đã có được quá trình thực thi đọc được và tra lại được. Chương này nói tiếp cách sắp xếp những quá trình đó thành mẫu mà nghiệp vụ dùng được.

## 20.1 Pipeline giúp nghiệp vụ làm được những việc gì

Có thể chọn chức năng của Pipeline theo kết quả cần bàn giao. Phần lớn task chỉ cần vài mục trong số đó, không cần thêm hết mọi phép xử lý vào.

| Nghiệp vụ cần gì | Phép xử lý dùng được | Được gì, và khi nào hữu ích |
| --- | --- | --- |
| Biến log thành bảng đọc được | Phép chiếu trường, mở rộng trường, lọc theo điều kiện | Trích các trường câu hỏi, câu trả lời, model, thời lượng; hợp cho kiểm định, phân tích và chuẩn bị dữ liệu trước khi đánh giá |
| Gom các event rời rạc thành mẫu trọn vẹn | Dựng instance | Ráp bản ghi theo định danh task hay phiên đã xác nhận; hợp với ứng dụng mà input vẫn còn là Span, mảnh message |
| Gom bộ đề từ những nội dung tương tự | Khử trùng lặp chính xác, khử trùng lặp gần đúng, khử trùng lặp theo ngữ nghĩa | Giảm các câu hỏi giống hay gần giống nhau, hạ công sức bảo trì bộ đề và đánh giá lặp |
| Xem được nhiều loại vấn đề hơn trong ngân sách hữu hạn | Lấy mẫu ngẫu nhiên, lấy mẫu theo nhóm, sinh vector, gom cụm ngữ nghĩa | Chọn mẫu theo tỉ lệ, số bản ghi hay theo loại; hợp cho việc soát thủ công, rà soát chuyên đề và mở rộng tập đánh giá |
| Bổ sung thông tin nghiệp vụ cho mẫu | Gọi LLM, gọi Agent | Phân loại, tóm tắt, trích thông tin hay sinh nhãn ứng viên, giúp việc sàng lọc và phân tích tiện hơn |
| Tìm ra những nội dung dài bất thường | Thống kê văn bản, lọc theo điều kiện | Tính các đặc trưng như độ dài văn bản, định vị input hay phần tool trả về quá dài, chọn mẫu cho việc quản trị nội dung và rà soát chi phí |
| Thu thập dữ liệu mới liên tục | Chạy một lần, chạy theo chu kỳ, lịch sử chạy | Sắp xếp một khoảng lịch sử trước, rồi sinh mẫu mới theo giờ hay theo ngày, chống đỡ việc kiểm định hằng ngày |

Cùng một bộ dữ liệu có thể phục vụ nhiều mục đích. Đội chăm sóc khách hàng cần câu hỏi và câu trả lời; người phát triển rà soát việc dùng tool thì cần các bước và kết quả trả về; còn phân tích chi phí lại cần trường model và mức tiêu. Có thể giữ chung phần trường nền, rồi tuỳ mục đích mà cấu hình các task xử lý và tập output khác nhau.

Trước khi chọn, hãy làm rõ **một dòng đại diện cho cái gì**. Việc kiểm định hoàn tiền có thể bắt đầu từ "một task một dòng"; còn phân tích vì sao người dùng bổ sung thông tin nhiều lần thì cần nhiều lượt liên tiếp; còn so sánh nhiều Agent chạy song song thì phải giữ riêng từng đường. Lựa chọn này quyết định về sau gom nhóm, lấy mẫu và chấm điểm ra sao, và cũng quyết định người phụ trách nghiệp vụ mở bảng ra có hiểu ngay được không.

## 20.2 Bắt đầu từ lối vào phù hợp

Vào AgentSpace tương ứng, trong mục "Xử lý dữ liệu" của "Trung tâm dữ liệu", bấm "Tạo Pipeline". Trang tạo hỗ trợ chọn nguồn, dùng template hoặc để Loopie sinh pipeline, và cấu hình luôn phần output cùng lịch chạy trong cùng một luồng. Người dùng đang sắp xếp Dataset cũng có thể bắt đầu từ lối vào "Nhập từ dữ liệu trajectory" khi tạo dataset.

Khi chọn nguồn, có thể phán đoán như sau:

* **Đã có trajectory Agent và định làm đánh giá: chọn "dữ liệu trajectory".** Trang dùng nguồn trajectory gắn với không gian hiện tại; có thể bắt đầu từ phương án gợi ý "Trích mẫu trajectory Agent" để trích thẳng input, output, phiên và trọn trajectory.

* **Cần trích trường nghiệp vụ từ log lời gọi: chọn "dữ liệu Trace".** Hãy xem nguồn log và phạm vi ứng dụng mà trang đưa ra, bắt đầu từ phương án trích hỏi đáp được gợi ý; khi cần thêm trường khác hay cách ráp khác thì mới sửa module xử lý.

* **Chỉ cần câu hỏi và câu trả lời: ưu tiên chọn phần trích hỏi đáp.** Còn nếu còn phải kiểm tra tool có dùng đúng không, sau khi thất bại thì khôi phục ra sao, thì hãy giữ trọn quá trình, để đỡ phải đi tìm lại log lúc kiểm định.

Trang gợi ý phương án xử lý theo nguồn, và phía sau dùng template dựng sẵn tương ứng. Sau khi chọn, phần "Pipeline" bên trái hiển thị các module xử lý; bấm vào module là xem được cấu hình, và cũng bổ sung được các phép xử lý như lấy mẫu, phân loại qua "Thêm module". Khi người phát triển đã quen các trường thì sửa thẳng cấu hình thường là nhanh nhất; còn khi cần thêm nhiều bước xử lý thì cũng để Loopie sinh ra rồi chỉnh sau được.

Khi chưa quen cấu trúc gốc, có thể mô tả mục tiêu cho Loopie trước. Ví dụ:

> Sắp xếp các trajectory vận hành của Agent chăm sóc khách hàng hoàn tiền trong một ngày gần nhất, mỗi task một dòng. Giữ câu hỏi người dùng, câu trả lời thực tế, trọn quá trình thực thi và ID nguồn, rồi xuất ra dataset kiểm định hoàn tiền. Cho tôi xem mẫu thật trước; cả những task không có câu trả lời cuối cũng giữ lại, để tiện kiểm tra các vấn đề gián đoạn.

Loopie sinh được pipeline và trình bày nó trong trình biên tập; người dùng tiếp đó xem phần xem trước thật rồi bổ sung yêu cầu. Chẳng hạn "câu hỏi lấy ở đây là bản đã được hệ thống bọc lại, hãy đổi thành nguyên văn ở lối vào nghiệp vụ", "thêm một cột phân biệt yêu cầu hoàn tiền với truy vấn tiến độ". Việc đối thoại rút ngắn quãng đường từ yêu cầu nghiệp vụ tới bản nháp cấu hình; xác nhận kết quả xong thì cấu hình đó dùng được cho việc sản xuất dữ liệu về sau.

## 20.3 Hoàn thành task kiểm định hoàn tiền đầu tiên

Dưới đây là một ví dụ mang tính hướng dẫn đi hết quy trình. Giả sử Agent hoàn tiền đã sinh ra trajectory chuẩn, ta sắp xếp dữ liệu của hôm qua trước và xuất ra dataset mới `refund_review_samples`. Vòng đầu giữ lại từng task thật, để tiện nhìn thấy cùng một vấn đề được xử lý khác nhau ra sao khi thành công và khi thất bại.

### Chọn nguồn và trường

Ở trang tạo, chọn "dữ liệu trajectory", tìm card gợi ý "Trích mẫu trajectory Agent", bấm "Chọn phương án này". Vào trình biên tập rồi, có thể tiếp tục đối thoại trong phần "Sinh thông minh", cũng có thể chuyển sang "Cấu hình thủ công" để sửa trường. Trước hết xem nguồn input có thuộc không gian mục tiêu không, rồi xác định phạm vi ứng dụng theo các dịch vụ hay trường nghiệp vụ thực sự tồn tại. Nếu nhiều ứng dụng dùng chung một nguồn, có thể để Loopie bổ sung luật lọc dựa trên mẫu.

Phương án này sắp xếp phần input, output và trọn trajectory sẵn có thành các trường sau. Người phụ trách nghiệp vụ chủ yếu đọc hai cột đầu, evaluator thì đọc thêm được phần quá trình, còn người phát triển thì lần theo định danh mà tra ngược bản ghi gốc.

| Trường output | Nội dung | Công dụng trong ví dụ hoàn tiền |
| --- | --- | --- |
| `input` | Input người dùng | "Đơn 1001 cần hoàn tiền" |
| `output` | Câu trả lời cuối của Agent | "Yêu cầu hoàn tiền đã được gửi" |
| `agent_trajectory` | Trọn nội dung trajectory | Xem tham số, kết quả của tool hoàn tiền và câu trả lời sau đó |
| `trajectory_id`, `trace_id` | Định danh nguồn | Tìm ra lần thực thi thật này để soát lại và rà soát |
| `session_id` | Liên kết phiên | Khi cần thì nối với các tương tác trước sau |

Trong đó, template ánh xạ `atif_content` trong dữ liệu nguồn thành `agent_trajectory`, để tiện dùng trong việc đánh giá về sau. Nếu nghiệp vụ còn cần các trường như kênh, loại đơn hàng, thì thêm vào module "phép chiếu trường" hay "mở rộng trường", và xác nhận nguồn gốc của chúng từ mẫu thật.

Việc chọn trường phải thể hiện mục tiêu kiểm định. Kiểm "lý do hoàn tiền mà người dùng bổ sung về sau có được dùng không" thì phải giữ phần thông tin bổ sung trong input hay trong trajectory; còn kiểm việc có thực sự xử lý thành công không thì cần phản hồi tool hay kết quả nghiệp vụ tương ứng. Có vậy thì tài liệu mà evaluator nhận được mới đủ để trả lời đúng câu hỏi cụ thể.

### Dùng phần xem trước để xác nhận bảng này có dùng được không

Card phương án có nút "Sinh xem trước"; còn khi đã vào trình biên tập thì chọn module output rồi bấm "Xem trước" để xem kết quả của cả pipeline. Hãy chọn khoảng thời gian có dữ liệu thật, mở một task bình thường ra xem input, output và trajectory trước, xác nhận nhân viên kiểm định đọc liền mạch được; rồi tìm một task mà tool báo lỗi hay không có câu trả lời, xem nó có được giữ lại không.

Chẳng hạn trong phần xem trước xuất hiện: tool trả về "thiếu lý do hoàn tiền", nhưng câu trả lời cuối lại là "đã gửi yêu cầu hoàn tiền". Đó đúng là mẫu ta muốn giao cho khâu kiểm định. Nếu chỉ giữ câu cuối thì về sau rất khó phán định vì sao nó sai; còn nếu module lọc đã xoá mất bản ghi tool thất bại thì phải chỉnh điều kiện. Có thể bấm vào module tương ứng để sửa rồi sinh lại phần xem trước.

Phần xem trước cũng hợp để chốt luôn hình thái output tại chỗ. Phần quá trình khá dài thì giữ trong cột nội dung có cấu trúc, còn danh sách thì hiển thị câu hỏi và câu trả lời trước; những trường cần lọc theo kênh thì tách thành cột riêng. Người phụ trách nghiệp vụ dùng vài mẫu này để xác nhận "nhận được bảng như thế này thì đã bắt tay vào việc được chưa", còn người phát triển thì dựa vào đó mà chốt cấu hình.

### Tạo, chạy, rồi dùng kết quả trong Dataset

Bấm "Tạo và khởi động" trên trang, vào phần "Thông tin task và chính sách lập lịch", điền tên task, mô tả, chọn "Chạy một lần", và đặt rõ thời gian xử lý là hôm qua. Trong phần "Output" thì điền tên dataset mới `refund_review_samples`. Trước khi gửi, hãy nhìn kỹ lại khoảng thời gian — khoảng thời gian đã chọn lúc xem trước không nhất thiết là khoảng sẽ chạy chính thức.

Xác nhận xong thì bấm "Tạo và khởi động" lần nữa. Hệ thống tạo dataset output và task xử lý; lần chạy một lần sẽ vào hàng đợi. Sau đó xem cửa sổ dữ liệu, trạng thái, số dòng output và thời lượng trong "Lịch sử chạy" ở phần chi tiết task. Chạy xong thì quay lại "Cấu hình Pipeline", vào Dataset qua biểu tượng "Nhảy tới chi tiết dataset" trên card đích output, tìm mẫu theo một `trace_id` đã biết, rồi mở các trường ra đọc. Phần xem trước giúp ta chốt phương án, còn bước này thì giúp đội kiểm định có được dữ liệu truy vấn được và gán nhãn được.

Nếu kết quả rỗng, hãy xác nhận khoảng thời gian đã chọn có bản ghi không trước, rồi kiểm tra phần lọc ứng dụng; còn nếu trường rỗng trên diện rộng thì hãy kiểm tra vị trí trích. Lần chạy đầu dùng một khoảng thời gian rõ ràng thì phân biệt khá nhanh được là vấn đề ở phạm vi dữ liệu hay ở quy tắc gia công.

## 20.4 Thêm phần lấy mẫu và xử lý bằng AI theo nhu cầu thực tế

Task đầu tiên chỉ cần sắp xếp tài liệu cho rõ ràng. Sau khi bắt đầu dùng, hãy tuỳ theo khối lượng soát, độ phủ kịch bản và cách phân tích mà thêm các phép xử lý — như vậy dễ phán định từng bước có ích không.

### Con người xem không xuể thì hãy thu về mức xử lý nổi

Giả sử nhân viên kiểm định mỗi ngày soát kỹ được 100 bản ghi, có thể thêm module "Lấy mẫu ngẫu nhiên", chọn "theo số bản ghi", điền 100; còn khi muốn mọi loại nghiệp vụ đều có cơ hội được chọn thì chọn trường loại sẵn có ở phần "cột gom nhóm", rồi đặt số bản ghi lấy mẫu cho mỗi nhóm. Con số 100 ở đây là khối lượng ví dụ, nên chỉnh theo nhân lực thực tế.

Nếu còn chưa biết vấn đề chia thành những loại nào, có thể dùng phần sinh vector và gom cụm ngữ nghĩa để sắp chủ đề trước, rồi lấy mẫu theo kết quả gom cụm. Chẳng hạn, lấy một ít đại diện từ nhóm "truy vấn tiến độ" giống nhau, để dành nhiều thời gian đọc hơn cho các vấn đề khác. Cách này hợp cho việc mở rộng bộ đề và phát hiện các loại vấn đề; còn khi cần ước lượng tỉ lệ thất bại tổng thể trên production thì hãy giữ một chuẩn đo lấy mẫu có tính đại diện.

Khử trùng lặp nội dung thì hợp với một nhu cầu khác: đã chọn ra khá nhiều ca và đang định gom một bộ đề hồi quy không trùng lặp. Trong module khử trùng lặp thì chọn trường để so sánh; khử trùng lặp chính xác xử lý phần chữ giống hệt, khử trùng lặp gần đúng xử lý các bản viết lại nhỏ, còn khử trùng lặp theo ngữ nghĩa thì xử lý các cách diễn đạt khác nhau nhưng gần nghĩa. Trước khi khử trùng lặp theo câu hỏi, phải tính tới khác biệt về kết quả và về các kịch bản quan trọng, tránh trộn một lần thành công và một lần thất bại của cùng một đề thành một bản ghi.

### Chưa có nhãn nghiệp vụ thì cho model làm một bản trước

Bản ghi hoàn tiền có thể chia thành các loại "xin hoàn tiền", "truy vấn tiến độ", "hoàn tiền bị từ chối". Khi dữ liệu gốc chưa có những nhãn đó, hãy thêm module "Gọi LLM" sau khi trích trường, chọn model, điền prompt tuỳ chỉnh, đặt "định dạng phân giải output" là "JSON", và đặt "tên cột output" là `scenario_label`.

Có thể bắt đầu từ một prompt như sau:

> Dựa trên input người dùng {{input}}, hãy xếp task này vào một trong các loại "xin hoàn tiền", "truy vấn tiến độ", "hoàn tiền bị từ chối", "khác". Chỉ phán định theo input, không suy đoán kết quả xử lý. Trả về hai trường `category` và `reason`; `reason` nói ngắn gọn căn cứ phân loại.

Sinh phần xem trước xong thì xem các loại và lý do trong `scenario_label`. Gặp câu "đã xin ba ngày rồi sao vẫn chưa thấy tiền về" thì phải xếp được vào nhóm truy vấn tiến độ; nếu phân loại chưa khớp thì bổ sung phần giải thích loại và các ví dụ gần nhau rồi thử lại một lô mẫu. Khi cần lọc thẳng theo cột loại thì dùng tiếp phần mở rộng trường để trích `category` trong JSON ra thành một cột độc lập.

Cùng module đó còn sinh được phần tóm tắt câu hỏi, trích tên sản phẩm hay bổ sung nhãn ứng viên. Với phần phân tích cần tra cứu tri thức hay gọi tool mới làm được thì chọn phần gọi Agent, và cấu hình Agent cùng prompt tương ứng. Các nhãn sinh ra thì trước hết dùng cho việc sàng lọc và soát thủ công; còn việc chấm điểm chất lượng chính thức thì giao cho evaluator hiệu chỉnh được và so sánh được, để tiện duy trì chuẩn lâu dài.

Khi bộ đề còn thiếu một loại cách diễn đạt nào đó, có thể dùng phần gọi LLM để tăng cường dữ liệu: lấy mẫu sẵn có làm hạt giống, rồi qua prompt mà sinh các cách nói khác nhau hay các điều kiện biên. Chẳng hạn, đã có đề xin hoàn tiền trực tiếp và muốn bổ sung yêu cầu nhiều lượt kiểu "người dùng hỏi thời gian tiền về trước, rồi mới chuyển sang xin hoàn tiền", thì hãy viết rõ phần sự thật nghiệp vụ phải giữ và phần được phép thay đổi. Kết quả sinh ra thì đưa vào tài liệu ứng viên trước, con người xác nhận rồi mới dùng, đồng thời giữ lại nguồn gốc tổng hợp để tiện phân biệt với task của người dùng thật.

Thứ tự xử lý có thể sắp theo chi phí: phần lọc được bằng trường sẵn có thì lọc trước, phần đã rõ chỉ cần 100 bản ghi thì lấy mẫu trước, rồi mới tới phần xử lý bằng model. Còn nếu việc lấy mẫu phụ thuộc vào loại do model sinh, thì phân loại trước rồi mới rút mẫu theo loại. Mỗi khi thêm một bước, đều nên nói rõ nó giúp người dùng bớt được việc gì và thêm được thông tin nào.

## 20.5 Từ một lần sắp xếp thành việc kiểm định hằng ngày

Khi mẫu của hôm qua đã dùng được, có thể dùng chính bộ xử lý đó để định nghĩa thêm một task theo chu kỳ: chọn lại template tương ứng, dùng tiếp các thiết lập trường, lọc và lấy mẫu đã xác nhận. Ở phần "Thông tin task và chính sách lập lịch" thì chọn "Chạy theo chu kỳ", đặt thời điểm bắt đầu và chu kỳ mấy giờ hay mấy ngày chạy một lần, ví dụ bổ sung task mới theo giờ, hoặc bàn giao tập trung theo ngày. Lần này hãy tạo một dataset dùng hằng ngày là `refund_review_daily`; về sau mỗi lần chạy theo chu kỳ đều ghi vào đó, và nhân viên kiểm định sẽ xem được nội dung mới ở một chỗ cố định.

Khi cấu hình lần đầu, hãy nối khớp phạm vi bù dữ liệu lịch sử với thời điểm bắt đầu của chu kỳ tiếp theo. Về sau thì chủ yếu xem lịch sử chạy, tình hình thành công và thất bại trong phần chi tiết task, rồi lấy mẫu kiểm tra các bản ghi mới. Khi ứng dụng thêm kênh mới hay cách trả lời mới thì cũng phải cập nhật quy tắc xử lý tương ứng, để dataset chứa được những thay đổi đó.

Tiếp theo hãy vào chức năng đánh giá, tạo task đánh giá mới lấy Dataset làm nguồn, chọn `refund_review_samples` cùng evaluator kiểm định hoàn tiền đã chuẩn bị, rồi ánh xạ các biến input, output, trajectory mà evaluator cần lần lượt sang `input`, `output`, `agent_trajectory`. Hãy chấm một lô mẫu trước, xem điểm, lý do và bằng chứng tương ứng — sẽ tìm ra được các ca chờ xử lý như "tool thất bại mà lại trả lời thành công". Sau khi bắt đầu kiểm định hằng ngày thì lấy các mẫu mới trong `refund_review_daily` làm tài liệu đánh giá.

Người phụ trách nghiệp vụ nhìn thấy được vấn đề tập trung ở kịch bản nào, người phát triển cầm trajectory tương ứng để định vị và sửa, còn người làm đánh giá thì đưa các vấn đề đã xác nhận vào tài liệu hồi quy. Sau khi version mới chạy lại những task đó, thí nghiệm sẽ so sánh kết quả để phán định phần sửa có hữu hiệu không. Các bản ghi vận hành mới tiếp tục đi vào cùng task gia công đó, và việc chuẩn bị dữ liệu hằng ngày thế là nối được vào công việc tối ưu.

Trong bản demo thao tác, hai câu hỏi chăm sóc khách hàng ban đầu dùng chung các mục chấm điểm; về sau mới phát hiện "giới thiệu có những chức năng gì" và "nói rõ làm đánh giá ra sao" cần chuẩn khác nhau, nên đã quay lại Dataset thêm Rubric theo từng câu, rồi chỉnh phần ánh xạ của đánh giá và thí nghiệm. Điều này cũng cho thấy các trường sinh ra nên dễ mở rộng tiếp. Khi việc sử dụng về sau nêu ra vấn đề mới thì bổ sung tài liệu tương ứng, chứ không phải làm lại toàn bộ khâu chuẩn bị dữ liệu.

## 20.6 Lần đầu dùng, hãy bàn giao trước một lô dữ liệu có người chịu dùng

Trước hết hãy hoàn thành mạch "trích trajectory → Dataset → một lô đánh giá", rồi để người phụ trách kiểm định đọc kết quả một lượt. Trường đã đúng thì mới thêm nhãn và lấy mẫu; đã có nhịp sử dụng ổn định thì mới lập task sản xuất theo chu kỳ.

Khi dùng lâu dài, hãy giữ ba giao ước đơn giản: **độ mịn của mẫu, ý nghĩa của các trường then chốt, và mục đích sử dụng dữ liệu.** Người phụ trách nghiệp vụ xác định muốn xem vấn đề gì, người phát triển ứng dụng duy trì các trường nguồn, còn task xử lý dữ liệu lo việc chạy lặp. Những phần phức tạp như tổng hợp song song, task siêu dài hay bù dữ liệu xuyên cửa sổ thì để người phát triển bổ sung theo dữ liệu thực tế.

Để phán định có đáng tiếp tục đầu tư không, cũng có thể nhìn xem công việc cụ thể đã trôi chảy hơn chưa: nhân viên kiểm định có còn phải đi tìm log gốc từng bản ghi không, thêm một loại kịch bản nghiệp vụ mới thì có đưa vào được bằng cách bổ sung trường và quy tắc không, người phát triển nhận vấn đề rồi có định vị được về đúng lần thực thi đó không. Nếu các khâu này đã nối được với nhau, thì việc thêm gom cụm ngữ nghĩa, dữ liệu tổng hợp hay phân tích bằng Agent phức tạp mới có mục đích rõ ràng. Một pipeline đơn giản mà output được dùng liên tục thường có giá trị hơn một pipeline cấu hình đủ thứ mà không ai tiêu thụ.

Lần bàn giao đầu tiên của việc kiểm định hoàn tiền có thể rất rõ ràng: tìm được các task của hôm qua trong `refund_review_samples`, mở một dòng ra là đọc hiểu được câu hỏi, câu trả lời và quá trình xử lý, và khởi động đánh giá thì có được kết luận có căn cứ. Còn những bản ghi nào đáng giữ lâu dài, và qua sự xác nhận của con người thì thành golden set cùng tập hồi quy ra sao — chương sau sẽ triển khai tiếp.
