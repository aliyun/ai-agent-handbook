# Chương 19 — Dữ liệu trajectory của Agent

Khi người dùng phản hồi rằng câu trả lời không giải quyết được vấn đề, đội ngũ cần biết: Agent chưa hiểu nhu cầu, chưa tìm được tài liệu, hay chưa dùng đúng tài liệu? Trajectory đặt input, hành động, phản hồi tool và output cạnh nhau, giúp người phụ trách nghiệp vụ lần theo quá trình thực tế mà tìm ra hướng cải thiện.

Như chương trước đã nói: trước hết đọc hiểu việc chạy thật, xác nhận vấn đề, rồi mới giao dữ liệu cùng loại cho Pipeline gia công — khi đó việc đánh giá và thí nghiệm mới có đối tượng rõ ràng.

## 19.1 Trước hết hãy tìm một task mà mình biết đã xảy ra chuyện gì

Lần đầu dùng trajectory, có thể hỏi Agent chăm sóc khách hàng của sản phẩm câu "làm đánh giá ra sao", rồi ghi lại thời điểm thực thi, câu hỏi và câu trả lời; nếu phía gọi cung cấp được TraceID hay SessionID thì giữ luôn. Chọn một task mà chính mình đã chạy thì dễ đối chiếu xem bản ghi có đúng không.

Chọn AgentSpace tương ứng rồi vào "Trung tâm dữ liệu → Trajectory Agent". Lần đầu dùng, nếu trang báo chưa kết nối dữ liệu quan sát thì hãy làm theo hướng dẫn tích hợp để hoàn tất cấu hình; nếu chưa bật phần làm sạch hay thu thập trajectory thì hãy đọc phần nhắc về xử lý và chi phí trên giao diện rồi mới bật theo hướng dẫn. Cấu hình xong thì phát một task mới để kiểm chứng, đừng chỉ vì công tắc đã bật mà cho rằng dữ liệu đã tới.

Quay lại danh sách trajectory, chỉnh khoảng thời gian về quanh lần chạy này, rồi xem input, output, ứng dụng Agent, model, số bước, Tokens và thời lượng. Mở bản ghi tương ứng, đối chiếu nguyên văn câu hỏi và câu trả lời; nếu task có gọi tool tra cứu tri thức thì xác nhận thêm rằng nhìn thấy được lời gọi đó và phần trả về.

![image](../assets/imgs/chapter-19/image-001.png)

Khi danh sách rỗng, hãy lần lượt kiểm tra AgentSpace, khoảng thời gian, điều kiện lọc và trạng thái thu thập, rồi quay về trang quan sát để xác nhận request mới có được báo lên không. Hãy phân biệt trước giữa "dữ liệu chưa được thu thập" với "Agent chạy chưa đúng", tránh việc cứ phát request nghiệp vụ lặp đi lặp lại thay cho việc định vị.

Sau khi bản ghi đầu tiên đã đọc đúng, hãy chọn tiếp một task thất bại và một task nhiều lượt. Cái trước để kiểm tra phản hồi lỗi có được giữ lại không, cái sau để kiểm tra thông tin người dùng bổ sung có tìm thấy trong các bản ghi liên quan không. Làm tới bước này thì đội ngũ mới có được một lối vào phân tích dùng được hằng ngày.

## 19.2 Chọn cách tra cứu theo vấn đề, thu hẹp phạm vi dần

Khi đã biết một lần thực thi cụ thể, hãy ưu tiên dùng TraceID để tìm chính xác; khi cần xem một đoạn tương tác liên tục, hãy dùng SessionID để tìm các bản ghi liên quan. Khi không có định danh, có thể kết hợp ứng dụng Agent, model, tên tool và khoảng thời gian để định vị. Hãy tăng điều kiện lọc từ ít đến nhiều; khi kết quả rỗng thì gỡ điều kiện vừa thêm gần nhất chứ không cần sửa toàn bộ thiết lập cùng lúc.

| Vấn đề muốn điều tra | Bắt đầu tìm trong danh sách ra sao |
| --- | --- |
| Một khiếu nại cụ thể của người dùng | Khoảng thời gian kết hợp TraceID, hoặc từ khoá trong input người dùng |
| Người dùng bổ sung thông tin nhiều lần mà vẫn chưa xong | SessionID, kết hợp input và output liên quan |
| Các task dùng một tool nào đó có biểu hiện kém | Ứng dụng Agent, tên tool và khoảng thời gian tương ứng |
| Những task nào chậm đi rõ rệt | Lọc theo khoảng thời lượng trong cùng một ứng dụng, rồi so sánh Steps và Tokens |
| Cùng một ý định nghiệp vụ có lặp lại không | Dùng tìm kiếm ngữ nghĩa trên input, mở kết quả ra xác nhận có thuộc kịch bản mục tiêu không |

Việc tra cứu input, output hỗ trợ cả **khớp từ khoá** lẫn **tìm kiếm ngữ nghĩa**. Khi đã biết nguyên văn, tên sản phẩm hay một cách diễn đạt lỗi cụ thể thì từ khoá dễ định vị hơn; còn khi muốn tìm những vấn đề gần nghĩa nhưng khác câu chữ như "người dùng đòi các bước thao tác cụ thể" thì dùng tìm kiếm ngữ nghĩa. Ô input tra nhu cầu người dùng, ô output tra câu trả lời của Agent; chọn cái nào là tuỳ mục tiêu điều tra.

Chẳng hạn, khi điều tra nhóm câu hỏi kiểu "làm đánh giá ra sao", có thể tìm ý định này ở phía input trước, rồi xem kết quả có bao gồm những cách hỏi liên quan như "chấm điểm câu trả lời thế nào", "lập task đánh giá ra sao" không. Độ tương tự chỉ lo chọn ra ứng viên, không có nghĩa những task đó cùng độ khó hay cùng loại lỗi; hãy giữ thiết lập mặc định, xem vài kết quả, rồi chỉnh theo gợi ý trên giao diện, đừng coi điểm tìm kiếm là điểm chất lượng.

![image](../assets/imgs/chapter-19/image-002.png)

Sau khi tìm được một nhóm bản ghi, hãy đọc vài mẫu tiêu biểu trước. Nếu có người dùng chỉ muốn hiểu khái niệm, còn người khác cần trọn quy trình thao tác, thì nên phân tích tách nhau. Trộn hai loại task này lại sẽ khiến ta phán nhầm một câu trả lời ngắn nhưng phù hợp thành không đầy đủ, và cũng có thể coi nhầm một phần giới thiệu chung chung là đã giải quyết được vấn đề thao tác.

## 19.3 Đọc một trajectory: xem mục tiêu và kết quả trước, rồi mở các bước then chốt

Sau khi mở phần chi tiết, có thể tìm hiểu task từ phần input, output bên phải: cuối cùng người dùng yêu cầu gì, Agent đưa ra đáp án gì. Rồi xem tổng quan số bước, các lời gọi tool, Tokens và thời lượng để xác định cần soát kỹ khâu nào. Tạm thời chưa cần đọc từng chữ toàn bộ nội dung.

Tiếp đó xem "Các bước thực thi", đọc theo thứ tự người dùng bổ sung, Agent hành động, tool trả về và câu trả lời sau đó. Khi bản ghi khá dài, có thể dùng "tìm trong các bước" để định vị tên tool, nội dung then chốt hay thông báo lỗi, rồi mở trọn nội dung của các bước liên quan. Lời gọi tool trong từng bước thì mở tiếp được phần "tham số vào" và "kết quả thực thi", và xem được các thông tin sẵn có về danh tính lời gọi, thời lượng và Token.

Lấy Agent chăm sóc khách hàng làm ví dụ: người dùng hỏi "làm đánh giá ra sao", hãy tìm hành động tra cứu tri thức của nó trước. Kiểm tra từ khoá tra cứu có nhắm vào quy trình đánh giá không, nội dung trả về có chứa phần hướng dẫn thao tác không, rồi xem câu trả lời sau đó có dùng những nội dung ấy không. Nếu kết quả tra cứu đã có đủ các bước mà Agent lại chỉ xuất ra phần giới thiệu khái niệm, thì hướng cải thiện khác hẳn với trường hợp "kho tri thức vốn không có tài liệu".

Trong các task Multi-Agent, nếu phần chi tiết hiển thị các sub-trajectory liên quan, thì có thể lần theo quan hệ uỷ nhiệm để xem phần việc tương ứng. Cần xác nhận mục tiêu mà Agent chính giao cho sub-Agent, cùng phần trả về mà nó thực sự nhận được, chứ không chỉ xem sub-Agent đã kết thúc hay chưa. Các bước hiển thị song song cũng không nhất thiết có phụ thuộc trước sau, nên phải kết hợp quan hệ gọi mà hiểu.

![image](../assets/imgs/chapter-19/image-003.png)

Khi phân tích, hãy cố đưa kết luận về một chuỗi sự thật liền kề: "người dùng đòi các bước thao tác → phần tra cứu đã trả về các bước → câu trả lời cuối bỏ sót các bước". Bản ghi kiểu này dễ cho người khác soát lại, và cũng dùng thẳng được cho việc chấm điểm về sau. Chỉ viết mỗi câu "chất lượng câu trả lời kém" thì phía hạ nguồn vẫn không biết phải kiểm tra cái gì.

Khi cần xác nhận trường, định danh lời gọi hay cấu trúc export, có thể dùng "xem JSON của trajectory". Khi nghi bản ghi bị thiếu hay quan hệ tương ứng sai, hãy để kỹ sư kết hợp định danh mà tra ngược bản ghi thu thập; còn kết quả nghiệp vụ thì vẫn phải lấy phản hồi tool thực tế và trạng thái nghiệp vụ làm căn cứ.

## 19.4 Đưa việc gỡ lỗi, phân tích chi phí và kiểm định chất lượng nghiệp vụ về hành động cụ thể

**Tool thất bại thì trước hết hãy phán định Agent xử lý thất bại ra sao.** Lấy task hoàn tiền làm ví dụ: người dùng đã đưa mã đơn, tool trả về "thiếu lý do hoàn tiền", nhưng Agent lại trả lời "yêu cầu đã được gửi". Hãy mở tham số vào của tool để xác nhận thiếu trường nào, rồi xem hành động sau khi thất bại: nó có hỏi thêm lý do, sửa tham số hay gọi lại không? Nếu nó thực sự nhận được lỗi mà vẫn báo thành công, thì phải cải thiện phần xử lý lỗi và chiến lược trả lời; còn nếu phần trả về không diễn đạt rõ là đã thất bại, thì phải kiểm tra thêm cả interface của tool. Việc nghiệp vụ có thực sự sinh ra yêu cầu hoàn tiền hay không thì còn phải đối chiếu kết quả ở hệ thống nghiệp vụ.

Giữ lại quá trình retry sau thất bại rất hữu ích. Sửa tham số rồi thành công nghĩa là Agent khôi phục được; còn retry y nguyên nhiều lần với cùng một lỗi thì có thể cần chỉnh điều kiện retry hay điều kiện dừng. Cả hai đều xuất hiện lời gọi thất bại, nhưng không nên đưa ra cùng một đề xuất tối ưu.

**Thời lượng hay Tokens cao thì trước hết hãy tìm phần việc dôi ra.** Dùng điều kiện ứng dụng, ý định nghiệp vụ và thời lượng để tìm một nhóm task tương đồng, so sánh số bước và mức tiêu Token trong danh sách lẫn phần chi tiết, rồi mở các bản ghi tiêu tốn nhiều. Hãy kiểm tra xem có phải tra đi tra lại cùng một tài liệu, tool trả về một lượng lớn nội dung không liên quan trong một lần, hay Agent thử đi thử lại cùng một hành động.

Chẳng hạn, hai lần đều trả lời câu "làm đánh giá ra sao", nhưng một lần lại truy vấn lặp cùng một tài liệu. Hãy xem từng lần truy vấn và kết quả: nếu về sau có lấy được thông tin mới, thì việc tra cứu lặp có thể có giá trị; còn nếu input và kết quả gần như không đổi, thì có thể nêu ứng viên cải thiện như tái dùng kết quả tra cứu đã có, hạn chế retry vô ích hay thu hẹp nội dung tool trả về. Hãy ghi lại các bước liên quan, và kiểm chứng trong thí nghiệm rằng sau khi giảm lời gọi thì câu trả lời có còn đầy đủ không.

Đừng chỉ vì tổng Tokens cao mà xoá bước. Task phức tạp cần khám phá nhiều hơn, và các bước test cùng xác nhận trạng thái cần thiết cũng làm tăng mức tiêu. Tokens dùng để định vị việc sử dụng tài nguyên; còn chi phí thì còn liên quan tới model đang dùng và cách tính giá. Quyết định thực tế phải so sánh chung chất lượng task, thời lượng và mức tiêu.

**Kiểm định chất lượng nghiệp vụ thì trọng tâm là xem câu trả lời có nhất quán với sự thật thực thi không.** Hai vấn đề thường gặp của Agent chăm sóc khách hàng sản phẩm là câu "có những chức năng gì" không phủ được các năng lực then chốt, và câu "làm đánh giá ra sao" không đưa ra được các bước thực thi được. Hãy dùng tra cứu theo input để tìm hai loại bản ghi này, đọc riêng câu trả lời cùng quá trình tra cứu của từng loại, phán định phần thiếu đến từ tri thức, từ khâu tra cứu hay từ cách tổ chức câu trả lời, rồi giữ lại vài ứng viên có căn cứ rõ ràng cho mỗi loại.

Nếu nghiệp vụ yêu cầu sinh file, gửi biểu mẫu hay sửa cấu hình, thì còn phải xem sản phẩm cuối hay trạng thái nghiệp vụ. Việc Agent trả lời "đã xong" chỉ là một output; tool nhận request, task kết thúc thực thi và mục tiêu nghiệp vụ đạt được là ba chuyện khác nhau. Khi tài liệu chưa đủ thì hãy ghi lại là "chờ xác nhận", tránh biến thẳng một vấn đề thu thập dữ liệu thành Badcase của Agent.

Sau khi phân tích, phải làm rõ bước tiếp theo: bổ sung tri thức, sửa tool, đổi chiến lược trả lời, chỉnh luồng thực thi, hay bổ sung dữ liệu trước rồi mới kiểm chứng phần sửa qua đánh giá và thí nghiệm.

## 19.5 Giữ những bản ghi có giá trị thành mẫu, rồi giao dữ liệu cùng loại cho Pipeline

Khi đọc tới một task đáng giữ, có thể bấm "Thêm vào dataset" ở đầu phần chi tiết; cũng có thể quay lại danh sách, tích nhiều bản ghi rồi thêm vào. Hộp thoại hỗ trợ tạo dataset mới hoặc chọn dataset sẵn có, và cấu hình được các trường cần ghi vào. Khi lập tập ứng viên lần đầu, hãy giữ input người dùng, output của Agent và nội dung trajectory; khi cần phân tích nguồn gốc hay mức tiêu thì thêm các trường ứng dụng, model, tên tool, Tokens.

Khi ghi vào một Dataset sẵn có, hãy đối chiếu phần ánh xạ trường có ứng đúng ý nghĩa cũ không, đặc biệt là đừng nối ngược đáp án cuối với trọn trajectory. Ghi xong thì mở dataset đích ra, kiểm tra xem câu hỏi đã chọn, câu trả lời và phần quá trình cần thiết có nằm trong cùng một bản ghi không. Với các trajectory khá dài, còn phải xác nhận những nội dung mà việc đánh giá về sau cần có được giữ lại không; nếu cần tài liệu đầy đủ hơn hay có trọng tâm hơn thì trích qua Pipeline.

Những bản ghi này lúc này mới là mẫu ứng viên. Người phụ trách nghiệp vụ còn phải xác nhận vấn đề có thành lập không, bổ sung hành vi kỳ vọng, rồi mới quyết định cái nào vào golden set. Có thể giữ ví dụ thất bại cho cả nhóm "độ phủ chức năng" lẫn nhóm "hướng dẫn thao tác", đồng thời giữ vài ví dụ bình thường, để tránh việc lần sửa sau chỉ cải thiện được mẫu khiếu nại mà lại làm hỏng các câu trả lời thông thường.

Khi cần xử lý toàn bộ bản ghi khớp điều kiện, danh sách hỗ trợ chọn dữ liệu thoả điều kiện; còn khi lượng dữ liệu khá lớn và giao diện gợi ý dùng Pipeline để nhập, thì thứ được gửi đi là một task xử lý nền. Hãy xác nhận khoảng thời gian, điều kiện lọc và dataset đích, rồi mới kiểm tra kết quả chạy task cùng số mẫu thực sự vào kho. Khi thấy "task đã được tạo" thì hãy đi theo dõi việc chạy, chứ đừng coi đó là mọi dữ liệu đã ghi xong.

Việc soát từng bản ghi giúp đội tìm ra quy luật, còn Pipeline lo áp quy luật đó lặp lại lên nhiều dữ liệu hơn. Chẳng hạn, gom các trajectory nhóm "hướng dẫn thao tác" thành câu hỏi người dùng, kết quả tra cứu, câu trả lời cuối và trạng thái tool; khử trùng lặp với những lần gửi lặp; phân luồng theo kịch bản nghiệp vụ; và bổ sung các trường mà việc đánh giá về sau cần. Dữ liệu sinh ra liên tục cũng gia công được theo cùng quy tắc đó, khỏi phải chép trajectory thủ công mỗi ngày.

Trước khi vào chương sau, có thể chuẩn bị trước một câu yêu cầu rõ ràng: "Xử lý các câu hỏi nhóm thao tác của Agent chăm sóc khách hàng sản phẩm trong khoảng thời gian này, mỗi bản ghi giữ lại câu hỏi, nội dung tra cứu liên quan, câu trả lời cuối và định danh nguồn, rồi ghi vào dataset ứng viên." Sau đó lấy vài trajectory thật để xem trước, kiểm tra quy tắc có giữ lại những nội dung cần cho việc phán định không. Chỉ khi giao mục tiêu nghiệp vụ cùng với mẫu cho pipeline, ta mới dần hình thành được một quy trình xử lý tái dùng được.

## 19.6 Hiểu ba đối tượng, tránh coi phạm vi bản ghi là kết luận về task

Các thao tác ở trên sẽ gặp đi gặp lại Trace, Session và Trajectory. Chúng tổ chức dữ liệu theo cách khác nhau; hiểu sự khác biệt đó giúp quyết định nên tìm những bản ghi nào, và kết luận nào còn cần thêm bằng chứng.

| Đối tượng | Tổ chức cái gì | Khi dùng thì hiểu ra sao |
| --- | --- | --- |
| Trace | Một nhóm lời gọi được liên kết bởi tracing context, gồm model, tool và các thao tác dịch vụ liên quan | Hợp để định vị một lần thực thi và vấn đề của lời gọi; phạm vi nhìn thấy được phụ thuộc vào phần thực sự thu thập |
| Session | Một đoạn tương tác liên tục gắn với ứng dụng, có thể gồm nhiều Trace | Hợp để xem phần người dùng bổ sung và context; trong cùng một phiên có thể có nhiều task |
| Trajectory | Các bước của người dùng và Agent sau khi đã sắp xếp, phần trao đổi với tool, kết quả và chỉ số | Hợp để đọc quá trình hành vi, phân tích và gia công mẫu; vẫn phải đối chiếu xem bản ghi hiện tại phủ được những phần nào của task |

Một lần hỏi đáp đồng bộ có thể vừa đúng ứng với một Trace; còn nhiều lượt, callback bất đồng bộ hay việc sub-Agent thực thi thì có thể để lại nhiều bản ghi. SessionID giúp tìm các tương tác liên quan, nhưng không tự động chứng minh rằng chúng đều thuộc cùng một task. Ứng dụng cần cung cấp định danh và liên kết đáng tin; không được chỉ vì thời gian gần nhau hay câu chữ giống nhau mà cho rằng nền tảng đã khôi phục được trọn task.

Việc sắp xếp trajectory sẽ trích ra phần thân hành vi, giảm bớt nội dung lịch sử mang đi mang lại trong các request model, và liên kết request cùng phần trả về của tool. Nhờ vậy người phụ trách nghiệp vụ đọc thẳng được các bước mà không phải lật từng Span ở tầng dưới. Những lần retry thực sự xảy ra vẫn có giá trị phân tích; còn thất bại, thiếu phần trả về và chưa đạt kết quả nghiệp vụ thì cũng phải đối xử riêng khi dùng.

Phần quan sát và tối ưu Agent dùng **ATIF** để tổ chức nội dung trajectory trao đổi được, gồm các bước, message, lời gọi tool cùng kết quả quan sát, chỉ số vận hành và phần mở rộng về nguồn gốc. Cấu trúc thống nhất giúp phần hiển thị, Pipeline và đánh giá tái dùng chung một bộ tài liệu hành vi. Thường thì không cần viết tay JSON; chỉ khi đấu nối với tool bên ngoài hay rà soát trường thì mới cần xem định dạng cụ thể.

Trajectory ghi lại chuyện gì đã xảy ra trong một lần thực thi; còn muốn thí nghiệm lại thì còn cần bộ đề, lối vào chạy, môi trường cần thiết và chuẩn chấm điểm. Phần xử lý dữ liệu ở chương tiếp theo sẽ sắp xếp những tài liệu hành vi này thành mẫu dùng được cho việc đánh giá và thí nghiệm.
