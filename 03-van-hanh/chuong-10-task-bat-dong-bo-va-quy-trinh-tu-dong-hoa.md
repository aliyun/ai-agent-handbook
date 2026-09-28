# Chương 10 — Task bất đồng bộ và quy trình tự động hoá của Agent

Nhiều AI Agent hướng tới hội thoại hoặc request đơn lẻ dùng mô hình đồng bộ kiểu request–response: người dùng gửi một message, Agent suy nghĩ, gọi tool, trả kết quả — cả chuỗi hoàn tất trong một request. Mô hình này đủ hiệu quả cho các bối cảnh hỏi–đáp đơn giản, nhưng khi Agent phải gánh những task kéo dài, xuyên request, cần thao tác lên môi trường bên ngoài — như thu thập dữ liệu và sinh báo cáo phân tích, tự động hoá quy trình xuyên hệ thống, giám sát và tuần tra định kỳ — thì mô hình đồng bộ sẽ lộ ra những hạn chế căn bản: **request timeout, cửa sổ context tràn, người dùng buộc phải online chờ, và process Agent chiếm tài nguyên liên tục trong lúc chờ sự kiện bên ngoài.**

Chương này trước hết nói về ranh giới trách nhiệm giữa task, thực thi và việc hoàn thành nghiệp vụ; rồi lần lượt bàn về task bất đồng bộ, kích hoạt theo lịch, workflow và quản trị vận hành. Phần Xây dựng đã nói về vòng lặp điều khiển tiến trình dài; ở đây trọng tâm là việc **tiếp nhận, lập lịch, chờ và khôi phục một cách đáng tin trong môi trường production.**

## 10.1 Ranh giới trách nhiệm của mô hình task và ngữ nghĩa hoàn thành

### 10.1.1 Quan hệ thẩm quyền giữa Task, Session và State

**Task** là đơn vị nghiệp vụ nhỏ nhất của việc thực thi bất đồng bộ, có định danh độc lập, bền vững và State nghiệp vụ riêng. Task có thể tồn tại liên tục xuyên nhiều giai đoạn chờ, khôi phục, phê duyệt của con người, và cũng có thể chạy tiếp xuyên nhiều Session. **Session** tổ chức các tương tác và context liên quan, có thể tồn tại xuyên instance; ranh giới của nó **không** đồng nghĩa với một lần khởi process. Task và Session liên kết theo nghiệp vụ; còn việc cô lập tài nguyên và quyền hạn thì do các cơ chế tương ứng bảo đảm.

Để chạy tiếp một Task xuyên Session, Runtime phải **nạp tường minh Task State đã được uỷ quyền** (gồm tham số nghiệp vụ, Checkpoint của các bước đã hoàn thành, các đối tượng chờ cần khôi phục, bản ghi tác dụng phụ), rồi liên kết Session hiện tại với Task đó — **chứ không mặc định hai Session tự nhiên dùng chung context.** Sự cô lập thật sự của Task phụ thuộc vào tenant, định danh chạy, credential, Environment và ranh giới tài nguyên; **Session chỉ là một lát view thực thi trong đó.**

Ứng dụng nghiệp vụ và mô hình task định nghĩa trạng thái, tiêu chí thành công và các chuyển đổi hợp lệ của Task. Harness tổ chức vòng lặp thực thi; Runtime quản lý instance, tài nguyên và phần khôi phục được hỗ trợ; Environment cung cấp điều kiện mạng, file và cô lập; scheduler quản lý việc kích hoạt và phân bổ thực thi. Các component có thể do cùng một sản phẩm gánh, nhưng **nội dung state, bản ghi lập lịch và môi trường thực thi vẫn phải có trách nhiệm rõ ràng.**

Bảng dưới đây đưa ra quan hệ đối tượng mà chương này dùng.

| Đối tượng | Nguồn thẩm quyền | Vòng đời | Nội dung điển hình |
| --- | --- | --- | --- |
| Task | Ứng dụng nghiệp vụ / mô hình task | Xuyên Session, xuyên chờ, xuyên khôi phục | Task ID, tham số nghiệp vụ, tiêu chí thành công, trạng thái hiện tại |
| State nghiệp vụ | Ứng dụng nghiệp vụ | Cùng tuổi thọ với Task | Trường nghiệp vụ, kết quả tích luỹ, bản ghi tác dụng phụ bên ngoài |
| Session Context | Harness / Runtime | Theo độ dài phiên mà ứng dụng định nghĩa | Lịch sử hội thoại, context của vòng lặp điều khiển hiện tại |
| Checkpoint | Workflow engine / Runtime | State được lưu theo hợp đồng khôi phục | Input/output của node, kết quả tính toán, số version |
| Runtime State | Runtime | Một lần execution lease | Heartbeat, lease, định danh Worker, bước hiện tại |
| Tác dụng phụ bên ngoài | Hệ thống nghiệp vụ | Cùng tuổi thọ với hệ thống bên ngoài | Dữ liệu đã ghi, message đã gửi, API đã gọi |

### 10.1.2 Kết quả thực thi và việc hoàn thành nghiệp vụ

Việc chạy xong, sức khoẻ vận hành, tài liệu bằng chứng và việc hoàn thành nghiệp vụ trả lời những câu hỏi khác nhau. Theo các khái niệm ở phần Xây dựng, mục này liệt kê năm loại thông tin mà task bất đồng bộ cần liên kết.

**Execution Status (trạng thái thực thi):** tín hiệu kết quả chạy do Runtime đưa ra, như `succeeded`, `failed` (tập trạng thái đầy đủ và các chuyển đổi xem 10.2.3.3). Nó trả lời "lần chạy này có chạy hết không", **không** trả lời "mục tiêu nghiệp vụ đã đạt chưa".

**Operational Status (trạng thái vận hành của node):** tín hiệu sức khoẻ ở tầng hạ tầng, như Worker còn online không, lease còn hiệu lực không, hệ thống phụ thuộc có bị hạ cấp không. Nó ảnh hưởng tới quyết định lập lịch, **không trực tiếp bằng kết luận về Task.**

**Candidate Evidence (bằng chứng ứng viên):** tài liệu thô sinh ra trong quá trình thực thi, gồm log, Trace, snapshot trạng thái, Artifact, phản hồi gốc của LLM (Large Language Model). Tài liệu có dùng được làm Evidence nghiệp vụ hay không thì phải kiểm chứng nguồn, tính toàn vẹn và quan hệ của nó với tiêu chí nghiệm thu.

**Evidence:** phần bằng chứng ứng viên được tiêu chí thành công nghiệp vụ tham chiếu tường minh — ví dụ kết luận trong báo cáo truy nguyên được tới nguồn dữ liệu đã thoả thuận, phần phân tích và kiểm tra cần thiết đã hoàn tất, sản phẩm bên nhận đọc được.

**Outcome nghiệp vụ:** phán định cuối cùng do ứng dụng nghiệp vụ hoặc Verifier được uỷ quyền đưa ra dựa trên Evidence và tiêu chí thành công. **LLM-as-a-Judge là một cách hiện thực của Evaluation, không phải thẩm quyền tự nhiên của Outcome;** việc con người rà soát cũng chỉ hình thành Outcome khi được uỷ quyền.

Thao tác "cưỡng chế đánh dấu thành công" từ phía vận hành **chỉ được thay đổi trạng thái thực thi trong phạm vi đã uỷ quyền**, và phải để lại bản ghi audit đầy đủ (ai, lúc nào, lý do, trạng thái cũ, trạng thái mới); **nó không được vượt tầng để phán định thẳng Outcome.** Log, Trace và Artifact mặc định thu thập theo mức tối thiểu cần thiết; các trường nhạy cảm thì ẩn danh hoặc băm; **credential cấm ghi vào kho**; truy cập chịu quản lý bởi RBAC (Role-Based Access Control), và có thời hạn lưu giữ.

### 10.1.3 Phân định trách nhiệm về khôi phục và tính idempotent

Scheduler, checkpoint và cơ chế thông báo gánh những trách nhiệm khác nhau; còn việc tác dụng phụ nghiệp vụ có được phép retry hay không thì phải quyết định dựa trên năng lực của hệ thống bên ngoài.

Lập lịch bên ngoài có thể thống nhất việc kích hoạt, kiểm soát đồng thời và failover, nhưng **vẫn có thể xảy ra gửi trùng.** Phía thực thi phải đối chiếu kết quả theo định danh thao tác nghiệp vụ, **không lấy việc lập lịch thành công làm bảo đảm rằng thao tác bên ngoài đã thực thi đúng một lần.**

**Checkpoint lưu state theo hợp đồng khôi phục** (input/output của node, kết quả tính toán), dùng để tái dùng kết quả tính toán và tránh tính lại. Nó **không đồng nghĩa với tính idempotent của tác dụng phụ bên ngoài**: nếu việc ghi ra ngoài đã commit mà Checkpoint chưa kịp ghi xuống đĩa, thì chạy lại vẫn sinh tác dụng phụ trùng. Checkpoint **bắt buộc phải làm rõ "lưu cái gì, ai ghi, và sắp xếp thứ tự ra sao so với State nghiệp vụ và việc commit tới hệ thống bên ngoài"** thì mới tham gia được vào ngữ nghĩa khôi phục.

Cơ chế idempotent được chọn theo tổ hợp, tuỳ ngữ nghĩa giao nhận và năng lực của hệ thống bên ngoài — **không có một mục bắt buộc chung nào.** Các cách thường gặp gồm khoá duy nhất của task, khoá idempotent, sổ khử trùng, outbox/inbox giao dịch, lease và fencing token, đối soát và bù trừ. Commit nguyên tử, khoá idempotent, đối soát… mỗi thứ có tiền đề áp dụng riêng; **hãy coi chúng là lựa chọn thiết kế, chứ không phải xếp chồng mặc định.**

Nội dung khôi phục do hợp đồng task quyết định, thường gồm trạng thái nghiệp vụ, điều kiện chờ, vị trí hoặc version của sự kiện, tham chiếu workspace và bản ghi thao tác bên ngoài. Instance mới còn phải **giành lại quyền thực thi hợp lệ**, chứ không được khôi phục một heartbeat cũ rồi commit tiếp. Watch, callback và polling cung cấp tín hiệu thay đổi; **khi thiếu tín hiệu thì phải đọc lại state có thẩm quyền và đối soát.**

## 10.2 Task bất đồng bộ của Agent

### 10.2.1 Vì sao cần thực thi bất đồng bộ

Các lời gọi tool của Agent có thời lượng khác nhau, và còn có thể phải chờ phê duyệt của con người, callback bên ngoài và dữ liệu sẵn sàng. **Request timeout chỉ nói lên rằng bên gọi chưa lấy được kết quả trong thời hạn, không chứng minh được việc thực thi đã dừng;** task chạy nền cần định danh và đường truy vấn độc lập. Việc thực thi bất đồng bộ cũng **không** mở rộng cửa sổ context của model; việc chọn và nén context vẫn do Harness gánh.

Hạt nhân của mô hình task bất đồng bộ là **tách rời vòng đời thực thi khỏi vòng đời request**: client gửi task, nhận được xác nhận tiếp nhận đáng tin rồi có Task ID; Task xếp hàng, thực thi, retry trong scheduler chạy nền; sau khi xong thì thông báo cho client qua Webhook callback, message push hay để client chủ động polling.

### 10.2.2 Các thuộc tính cơ bản của task bất đồng bộ

Để định nghĩa một Task, ít nhất phải làm rõ các thuộc tính sau.

| Thuộc tính | Diễn giải |
| --- | --- |
| Tên task | Tên đọc được, dùng để truy hồi và theo dõi trạng thái |
| Nội dung task | Chỉ dẫn cụ thể, Prompt hay tham chiếu workflow cần thực thi |
| Độ ưu tiên | Quyết định thứ tự lập lịch; cùng độ ưu tiên thì xếp theo FIFO |
| Agent / pool Agent | Loại Agent nào thực thi; có thể gắn với instance cụ thể hay một pool tài nguyên |
| Session liên kết (tuỳ chọn) | Context Session gắn với lần chạy này; khi Task chạy tiếp xuyên Session thì nạp Task State đã uỷ quyền theo mục 10.1.1 |
| Tiêu chí thành công | Tham chiếu Evidence và Verifier, định nghĩa cách phán định Outcome nghiệp vụ |
| Chính sách retry | Số lần retry tối đa, thuật toán backoff, phân loại lỗi retry được |
| Thời gian timeout | Thời lượng tối đa cho một lần thực thi |
| Thời gian lập lịch dự kiến | Thời điểm dự kiến bắt đầu lập lịch, thường do task định kỳ sinh ra |
| Thời gian nghiệp vụ của dữ liệu | Xử lý nghiệp vụ offline, ví dụ 00:30 mỗi ngày phải xử lý dữ liệu của ngày hôm trước |
| Thời gian bắt đầu thực tế | Thời điểm thực sự bắt đầu chạy, thường do state machine của task cập nhật |

### 10.2.3 Kiến trúc cốt lõi của task bất đồng bộ

Về mặt logic, một hệ thống task bất đồng bộ cấp production gồm ba nhóm component phối hợp: **hàng đợi task** gánh phần sắp xếp và đệm; **scheduler** lo việc gửi Task tới Worker phù hợp và duy trì lease; **state machine thực thi task** duy trì vòng đời và tính hợp lệ của các chuyển đổi. Ranh giới trách nhiệm của chúng với Runtime, Environment và ứng dụng nghiệp vụ theo mục 10.1.1.

![image](../assets/imgs/chapter-10/image-001.png)

*Hình 10-1 — Sự phối hợp giữa lập lịch, thực thi và state có thẩm quyền của task*

#### 10.2.3.1 Hàng đợi task

Hàng đợi task là tầng đệm giữa lúc Task được gửi và lúc được thực thi; năng lực cốt lõi là **sắp xếp theo độ ưu tiên, cùng độ ưu tiên thì FIFO.** Task ưu tiên cao vào hàng thì đứng trước task ưu tiên thấp; trong cùng mức ưu tiên thì ra theo thứ tự thời gian vào hàng. Trách nhiệm then chốt khác của hàng đợi là **hạ cấp khi tồn đọng**: khi tốc độ sản xuất liên tục vượt tốc độ tiêu thụ (traffic đột biến, Agent hỏng trên diện rộng), tồn đọng sẽ tăng liên tục. Chính sách hạ cấp gồm từ chối task mới vào hàng và trả về lỗi có cấu trúc, giới hạn tốc độ với task ưu tiên thấp, và kích hoạt cảnh báo để vận hành can thiệp mở rộng. **Bản thân độ sâu hàng đợi là một chỉ số quan sát cốt lõi**; tồn đọng kéo dài thường nghĩa là năng lực thực thi không đủ hoặc có sự cố mang tính hệ thống.

#### 10.2.3.2 Scheduler

Scheduler là cầu nối giữa hàng đợi task và việc thực thi của Agent; trách nhiệm là lấy Task từ hàng đợi rồi gửi tới Worker phù hợp, duy trì execution lease, xử lý retry và failover. Về thiết kế có hai vấn đề cốt lõi.

**Thứ nhất là cân bằng tải và chọn Worker.** Các chiến lược thường gặp gồm round-robin (đơn giản nhưng không cảm nhận tải thực), phân bổ theo số task đang hoạt động hay khe khả dụng, phân bổ có trọng số (theo năng lực tính toán hay cấu hình), và routing theo affinity (phải đi kèm hợp đồng khôi phục state). Việc chọn chiến lược ảnh hưởng trực tiếp tới thông lượng và độ trễ.

**Thứ hai là backpressure.** Khi mọi Worker đều bận, scheduler **không nên** tiếp tục lấy task ra khỏi hàng đợi, nếu không chúng sẽ dồn đống ở phía Worker hoặc bị từ chối thẳng. "Duy trì một bảng đăng ký Worker rảnh/bận" chỉ là một cách hiện thực đơn giản của backpressure, giả định mỗi Worker chỉ xử lý một task tại một thời điểm — **đây không phải định nghĩa tổng quát.** Trong production, thường gặp hơn là tổ hợp cơ chế: hạn ngạch đồng thời (số đồng thời tối đa của mỗi Worker), mực nước hàng đợi (vượt ngưỡng thì dừng kéo), tốc độ tiêu thụ tự thích ứng (điều chỉnh lô kéo theo tốc độ hoàn thành), timeout lease (tránh task kẹt khi Worker mất liên lạc), và dung lượng động (điều chỉnh khe khả dụng theo heartbeat của Worker). **Bản chất của backpressure là để tốc độ tiêu thụ tự thích ứng theo tốc độ thực thi, tránh sập vì quá tải.**

#### 10.2.3.3 State machine thực thi task

State machine thực thi task duy trì vòng đời và các chuyển đổi hợp lệ. Chương này dùng tập trạng thái sau; bảng dưới mô tả trạng thái lập lịch–thực thi, còn **Outcome nghiệp vụ thì duy trì riêng theo luật nghiệm thu.**

| Trạng thái | Ý nghĩa | Trạng thái kế tiếp được phép |
| --- | --- | --- |
| `waiting` | Task khởi tạo, chờ thoả phụ thuộc (thời gian lập lịch, phụ thuộc workflow) rồi vào hàng | `queued`, `hold`, `skipped`, `mark_succeeded` |
| `queued` | Chờ được cấp tài nguyên thực thi | `running`, `killed`, `skipped`, `mark_succeeded` |
| `running` | Task đã được phát tới executor, đang chạy | `succeeded`, `failed`, `killed` |
| `hold` | Chờ phê duyệt, input hoặc điều kiện bên ngoài | `waiting`, `skipped`, `mark_succeeded` |
| `succeeded` | Task chạy thành công | `queued` (người dùng chạy lại thủ công) |
| `failed` | Task chạy thất bại | `queued` (chạy lại thủ công), `mark_succeeded` |
| `killed` | Người dùng chấm dứt thủ công | `queued` (chạy lại thủ công), `mark_succeeded` |
| `skipped` | Người dùng cho bỏ qua | `waiting` (người dùng huỷ bỏ qua), `mark_succeeded` |
| `mark_succeeded` | Người dùng đánh dấu thành công thủ công | Trạng thái cuối |

Các chuyển đổi trạng thái của state machine như hình dưới:

![image.png](../assets/imgs/chapter-10/image-002.png)

**Việc chọn kho lưu state ảnh hưởng trực tiếp tới độ tin cậy:** lưu trong bộ nhớ thì đọc ghi nhanh nhất nhưng restart process là mất; lưu file thì chịu được restart process nhưng không truy cập được khi máy hỏng; lưu database (PostgreSQL, MySQL) thì có bảo đảm sẵn sàng cao và bền vững nhưng thêm phụ thuộc và độ trễ. Môi trường production thường lấy database làm kho chính, cache bộ nhớ để tăng tốc truy vấn tần suất cao, và **coi database là nguồn thẩm quyền của Task State.**

### 10.2.4 Lắng nghe và đồng bộ trạng thái task

Sau khi scheduler giao Task cho Worker, nó cần liên tục cảm nhận thay đổi trạng thái (`running` → `succeeded` / `failed` / `killed`) để đẩy state machine, kích hoạt thông báo hoặc thực hiện retry. **Polling, callback và Watch là tín hiệu thay đổi trạng thái, không phải nguồn sự thật duy nhất** — bất kỳ tín hiệu nào thiếu hay gián đoạn thì đều phải đối soát lại theo Task State có thẩm quyền.

**Phương án A: scheduler chủ động polling.** Scheduler định kỳ gọi interface truy vấn trạng thái của Worker (ví dụ 5 giây một lần, tần suất tuỳ nghiệp vụ) và cập nhật trạng thái Task theo giá trị trả về. Ưu điểm là quyền kiểm soát hoàn toàn nằm ở phía scheduler, hiện thực tập trung; nhược điểm là sự đánh đổi giữa tần suất polling và tính thời gian thực — quá dày thì tăng chi phí Worker và mạng, quá thưa thì trạng thái bị trễ. **Một lần polling thất bại không suy trực tiếp ra Task bất thường:** phân mảnh mạng, Worker dừng vì GC, hạ cấp tạm thời đều có thể làm truy vấn hỏng trong khi Worker vẫn đang chạy. Việc phán định bất thường nên dựa trên **lease/heartbeat** — Worker gia hạn lease định kỳ, chỉ sau khi lease mất hiệu lực mới chuyển Task sang `unknown` và khởi động đối soát.

**Phương án B: Worker callback khi hoàn tất.** Worker chủ động đẩy event tới scheduler khi trạng thái đổi. Ưu điểm là tính thời gian thực tốt; nhược điểm là phụ thuộc vào việc Worker "báo cáo trung thực" — process sập thì có thể không phát ra callback, nên cần timeout đỡ lưới. Event callback **bắt buộc phải mang Task ID, số thứ tự event (hay số version), định danh Worker, token lease**, để scheduler tiêu thụ idempotent và bỏ đi những event tới muộn.

**Phương án C: kho lưu dùng chung + thông báo thay đổi.** Worker ghi trạng thái vào một kho bền vững mà cả scheduler và Worker cùng truy cập (database, Redis, etcd); scheduler cảm nhận trạng thái qua việc lắng nghe thay đổi. **Redis Keyspace Notification mặc định tắt, phải bật tường minh, và event trong lúc mất kết nối sẽ bị mất** — sau khi kết nối lại phải lấy trạng thái hiện tại của key làm chuẩn để đối soát. **etcd Watch dựa trên revision;** nếu client tụt lại quá ngưỡng compaction, Watch sẽ bị huỷ và trả về `ErrCompacted`, client phải lập lại Watch từ revision mới nhất và đọc lại toàn bộ. Kho dùng chung cung cấp bảo đảm bền vững, **nhưng chỉ khi tập tối thiểu cần cho việc khôi phục (State nghiệp vụ, đối tượng chờ, số version, bản ghi tác dụng phụ) đều đã được bền vững hoá thì mới được tuyên bố là "khôi phục được task trọn vẹn".**

Ba phương án **không loại trừ nhau.** Thực tiễn production thường dùng kết hợp: callback làm chính, polling/lease đỡ lưới, kho dùng chung làm phần bền vững có thẩm quyền. Ở đường bình thường thì Worker chủ động callback khi xong; nếu callback mất thì đối chiếu trạng thái qua truy vấn hoặc qua bất thường của lease; mọi thay đổi trạng thái đều đồng bộ ghi vào kho có thẩm quyền, để scheduler và Worker sau khi restart thì khôi phục từ kho.

### 10.2.5 Human-in-the-Loop và hiệu suất sử dụng tài nguyên Agent

Task Agent thường cần con người can thiệp (**HITL — Human-in-the-Loop**): phương án sinh ra cần xác nhận, thao tác rủi ro cần phê duyệt, output không chắc chắn cần lựa chọn. Điều đó nghĩa là Task sẽ đi từ `waiting` sang `hold`, chờ phê duyệt hoặc input bên ngoài được thoả rồi mới vào hàng để chạy. Thời gian chờ có thể từ vài phút tới vài ngày, **ảnh hưởng trực tiếp tới hiệu suất sử dụng tài nguyên và độ phức tạp hệ thống.**

**Lập lịch bất đồng bộ dựng sẵn** tích hợp hàng đợi và logic lập lịch ngay trong ứng dụng. Nếu state chỉ nằm trong bộ nhớ thì trong lúc chờ phải giữ process; còn nếu hỗ trợ chờ bền vững và khôi phục thì cũng giải phóng được tài nguyên thực thi. **Việc có phải thường trú hay không phụ thuộc vào năng lực khôi phục, chứ không do riêng vị trí triển khai "dựng sẵn" quyết định.**

**Lập lịch bên ngoài** do một hệ thống chuyên biệt quản lý việc phân bổ thực thi và đánh thức; Agent sau khi hoàn tất bước hiện tại thì lưu state cùng tham chiếu cần cho khôi phục, rồi giải phóng Worker theo năng lực môi trường. Khi event phê duyệt tới, hệ lập lịch kiểm chứng task, uỷ quyền và điều kiện chờ, rồi phân bổ lại tài nguyên. **Trong lúc chờ vẫn phải gánh chi phí lập lịch, lưu state, kênh thông báo và có thể cả việc giữ môi trường.**

![image](../assets/imgs/chapter-10/image-003.png)

*Hình 10-2 — Ranh giới trách nhiệm giữa lập lịch dựng sẵn và lập lịch bên ngoài*

| Chiều | Lập lịch dựng sẵn | Lập lịch bên ngoài |
| --- | --- | --- |
| Vị trí triển khai hàng đợi / scheduler / state machine | Trong process Agent | Hệ lập lịch độc lập |
| Process Agent có thường trú không | Tuỳ vào năng lực chờ và khôi phục state | Có điều kiện khôi phục thì giải phóng được tài nguyên thực thi |
| Quản lý Task State | Do mô hình nghiệp vụ định nghĩa, có thể dùng kho bền vững bên ngoài | Cũng do mô hình nghiệp vụ định nghĩa; hệ lập lịch lưu bản ghi thực thi và kích hoạt |
| Chiếm tài nguyên trong lúc chờ | Năng lực tính toán của Agent + component lập lịch | Component lập lịch, kho state, kênh phê duyệt vẫn chiếm tài nguyên |
| Rào cản tích hợp | Thấp, tự chứa | Phải tích hợp API hệ lập lịch, phơi interface khôi phục |
| Khôi phục sự cố | Phải tự hiện thực bền vững hoá, lập lịch lại và đối soát | Tái dùng năng lực lập lịch; state nghiệp vụ vẫn phải khôi phục và đối soát |
| Bối cảnh phù hợp | Quy mô nhỏ, không nhạy với hiệu suất tài nguyên | Quy mô lớn, thời gian chờ khó dự đoán, cần co giãn tài nguyên |

Ngoài con đường "scheduler tạm dừng Task + callback phê duyệt bên ngoài", HITL còn có thể dựa vào node thủ công của workflow engine. Apache Airflow đưa vào năng lực Human-in-the-Loop từ bản 3.1.0 (trước đó phải tự hiện thực Operator); workflow của Alibaba Cloud MSE-XXLJOB cung cấp nhiều loại node logic, trong đó node thủ công hỗ trợ tạm dừng/khôi phục. Những sản phẩm này lo việc phối hợp tạm dừng và khôi phục quy trình, **nhưng không tự nhiên sở hữu quyền phê duyệt nghiệp vụ** — chuỗi uỷ quyền do ứng dụng nghiệp vụ và hệ Verifier định nghĩa.

Việc gửi kết quả phê duyệt về **bắt buộc phải làm rõ hai điều**: payload event phải gồm Task ID, số version phê duyệt, chủ thể uỷ quyền, kết luận quyết định; và bên nhận là Runtime hay scheduler, dựa vào đó để gửi lại việc thực thi, đồng thời kiểm chứng rằng event chưa hết hạn, chưa trùng, và tương thích với trạng thái hiện tại của Task. **Vẽ "phê duyệt xong → callback đánh thức Agent" thành một mũi tên không ghi rõ bên nhận sẽ che mất những kiểm tra bắt buộc này.**

## 10.3 Task định kỳ của Agent

### 10.3.1 Từ phản ứng bị động tới thực thi chủ động

Task định kỳ là năng lực then chốt để Agent đi từ "công cụ bị động" tới **"nhân viên số chủ động"**: mỗi ngày 9 giờ sáng sinh báo cáo, mỗi thứ Hai kiểm tra sức khoẻ máy chủ, mỗi giờ quét lỗ hổng bảo mật. Nó tạo Task theo luật thời gian dựa trên sự uỷ quyền trước của người dùng hay nghiệp vụ, giúp Agent chạy tự chủ theo nhịp đã đặt.

### 10.3.2 Phân loại các cách kích hoạt

Kích hoạt theo thời gian và kích hoạt theo sự kiện do những điều kiện khác nhau dẫn dắt, nhưng có thể dùng chung đường thực thi task phía sau.

| Nhóm | Loại con | Diễn giải |
| --- | --- | --- |
| Kích hoạt theo thời gian | Cron | Chạy định kỳ theo biểu thức Cron, ví dụ 14:00 mỗi ngày |
| Kích hoạt theo thời gian | ScheduledAt | Chạy một lần vào một thời điểm tương lai, ví dụ 08:00 sau ba ngày |
| Kích hoạt theo thời gian | FixedRate | Lập lịch theo tần suất cố định, ví dụ 40 giây một lần |
| Kích hoạt theo sự kiện | Webhook | Hệ thống phơi một interface Webhook ra ngoài; nhận event do bên nghiệp vụ đẩy tới thì tạo Task; hướng là "bên nghiệp vụ → hệ thống Agent" |
| Kích hoạt theo sự kiện | Message queue | Subscribe một Topic MQ (Message Queue); message tới là tạo Task |
| Kích hoạt theo sự kiện | Event nội bộ | Task khác trong hệ thống hoàn tất hoặc đổi trạng thái thì kích hoạt Task mới |

Kích hoạt theo thời gian và theo sự kiện đi cùng một đường ở tầng thực thi: **đều là gửi một Task vào hàng đợi.** Sự trừu tượng thống nhất này giúp hai loại kích hoạt dùng chung cơ chế lập lịch, kiểm soát đồng thời, retry và đối soát.

### 10.3.3 Các thuộc tính cơ bản của task định kỳ

| Thuộc tính | Diễn giải |
| --- | --- |
| Loại kích hoạt | Cron / ScheduledAt / FixedRate (kích hoạt theo sự kiện không thuộc loại định kỳ, xem 10.3.2) |
| Trạng thái | Bật hoặc tắt; tắt rồi thì không lập lịch nữa |
| Số đồng thời của task | Số Task tối đa của cùng một task định kỳ được chạy song song; 1 nghĩa là tuần tự |
| Chính sách khi bị chặn | Khi đã đầy mức đồng thời thì Task mới kích hoạt xử lý ra sao: xếp hàng chờ, bỏ qua, hay gộp thành một task chờ mới nhất theo thoả thuận |
| Chính sách khi lỡ | Chính sách khôi phục sau khi lỡ thời điểm kích hoạt do scheduler sập hay Worker không khả dụng, xem bảng dưới |
| Retry khi thất bại | Số lần retry tự động và chính sách backoff |
| Timeout | Thời hạn của một lần chạy, cùng cách xử lý huỷ và kết quả chưa rõ |
| Thời gian bắt đầu | Sau khi cấu hình thì có hiệu lực ngay hay bắt đầu từ một thời điểm chỉ định |
| Múi giờ và định danh lần phát sinh | Làm rõ múi giờ, xử lý giờ mùa hè; nhận diện cùng một lần kích hoạt qua ID lịch và thời điểm phát sinh dự kiến |

Dưới đây là một số cách xử lý khi lỡ; **phạm vi hỗ trợ tuỳ theo bản hiện thực của hệ lập lịch.**

| Chính sách | Ngữ nghĩa |
| --- | --- |
| `run_latest` | Chỉ chạy bù lần gần nhất trong cửa sổ đã lỡ, bỏ qua phần còn lại |
| `run_all` | Chạy bù mọi thời điểm kích hoạt đã lỡ, trong giới hạn về số lượng, tốc độ và mức đồng thời |
| `skip` | Bỏ qua mọi lần kích hoạt đã lỡ, chỉ tiếp tục từ thời điểm tương lai kế tiếp |
| `prompt` | Không tự quyết định; treo lại và thông báo cho vận hành hoặc bên nghiệp vụ chọn thủ công |

### 10.3.4 So sánh trách nhiệm giữa lập lịch dựng sẵn và lập lịch bên ngoài

Việc đặt năng lực lập lịch định kỳ bên trong Agent hay đưa ra ngoài cho một hệ lập lịch task chuyên biệt (XXL-JOB, Alibaba Cloud SchedulerX, Apache Airflow…) phải cân nhắc trên sáu chiều: tính thống nhất của kích hoạt, kiểm soát đồng thời, failover, hiệu suất tài nguyên, rào cản tích hợp và độ phức tạp vận hành — **chứ không quy giản thành "có cùng process hay không".**

![image](../assets/imgs/chapter-10/image-004.png)

*Hình 10-3 — Kích hoạt theo thời gian và theo sự kiện dùng chung chuỗi thực thi task*

| Chiều | Lập lịch định kỳ dựng sẵn | Lập lịch định kỳ bên ngoài |
| --- | --- | --- |
| Khử trùng kích hoạt đa instance | Phải tự hiện thực khoá phân tán hoặc bầu Leader | Hệ lập lịch quản lý việc kích hoạt thống nhất, giảm khả năng kích hoạt trùng |
| Failover | Dựa vào bản thân ứng dụng | Hệ lập lịch cung cấp failover; trong lúc failover subtask có thể chạy nhiều lần, **code nghiệp vụ bắt buộc phải idempotent** |
| Chiếm tài nguyên | Dịch vụ mang timer phải còn sống; tài nguyên thực thi có thể quản lý riêng | Trong lúc chờ giải phóng được năng lực tính toán của Agent; hệ lập lịch, kho state và kênh giám sát vẫn chiếm tài nguyên |
| Rào cản tích hợp | Tích hợp ban đầu ít hơn; phần bền vững hoá và phối hợp vẫn có thể cần component bên ngoài | Phải tích hợp hệ lập lịch, phơi interface khôi phục |
| Độ phức tạp vận hành | Gắn với ứng dụng, định vị sự cố đơn giản | Thêm một bộ hạ tầng, nhưng có view vận hành thống nhất |
| Quy mô phù hợp | Một instance hoặc quy mô nhỏ | Quy mô lớn, đa instance, xuyên vùng |

**Khuyến nghị thiết kế:** trong môi trường production quy mô lớn, năng lực lập lịch định kỳ thường được đưa ra ngoài cho một hệ lập lịch chuyên biệt, nhưng phải làm rõ ba điều. **Thứ nhất**, kích hoạt theo thời gian và theo sự kiện thống nhất ở tầng thực thi — cả hai đều gửi Task vào hàng đợi, dùng chung cơ chế lập lịch, kiểm soát đồng thời, retry và đối soát. **Thứ hai**, hệ lập lịch bên ngoài **không tiếp quản thẩm quyền của State nghiệp vụ** — thẩm quyền của Task State, tiêu chí thành công và bản ghi tác dụng phụ vẫn theo cách phân định ở mục 10.1.1; thứ hệ lập lịch giữ là Runtime State và kế hoạch kích hoạt. **Thứ ba**, tính idempotent là trách nhiệm thiết kế nghiệp vụ — chọn cơ chế idempotent theo ngữ nghĩa giao nhận, **không viết bất kỳ cơ chế nào thành mục bắt buộc chung.**

## 10.4 Workflow của Agent

### 10.4.1 Lựa chọn và tổ hợp cấu trúc orchestration

Khi một task phức tạp gồm nhiều bước và cần nhiều Agent phối hợp, trên chiều cấu trúc orchestration có nhiều lựa chọn; **ngành chưa hội tụ về chỉ hai phương án.** Các hình thái thường gặp gồm: Agent tự quyết định bên trong một Task đơn (kiểu ReAct); orchestration workflow định trước (cố định kế hoạch thực thi thành một đồ thị); phối hợp Multi-Agent (một Planner Agent phân rã task động và phân cho các Agent chuyên môn); và các tổ hợp của những hình thái trên — bên trong một node của workflow có thể là trọn một vòng lặp tự quyết của Agent; Multi-Agent cũng có thể bị ràng buộc bởi một quy trình có tính xác định (giới hạn phạm vi quyết định của Planner trong một subgraph định trước).

Khi so sánh các cách orchestration, hãy cân nhắc nhu cầu quyết định động, độ ổn định của đường đi, rủi ro và chi phí bảo trì. Workflow định trước giảm được việc lập kế hoạch lặp lại và khiến đường điều khiển dễ test, **nhưng không xoá được lỗi model bên trong node, chi phí tool và việc retry sau thất bại.** Multi-agent phù hợp với các task có phân công chuyên môn thật sự, và cũng chạy được bên trong một workflow cố định; cách tổ chức team và bàn giao cụ thể xem chương cộng tác.

### 10.4.2 Khái niệm cơ bản và mô hình node của workflow

Chương này giới hạn workflow ở loại **DAG (Directed Acyclic Graph — đồ thị có hướng không chu trình)**: node biểu thị đơn vị thực thi, cạnh có hướng biểu thị phụ thuộc và dòng dữ liệu, còn bản thân đồ thị thì không có chu trình. Engine đẩy node chạy theo thứ tự topo: node có bậc vào bằng 0 chạy trước; điều kiện sẵn sàng của các node sau thì do loại cạnh phụ thuộc quyết định (xem 10.4.3).

Khi cần ngữ nghĩa vòng lặp, hãy hiện thực bằng cách **bung có biên lúc chạy, mapping động hoặc lặp bằng sub-workflow**, còn đồ thị thì vẫn giữ không chu trình. Ví dụ, node `ForEach` lúc chạy sẽ bung thành N instance subtask theo kích thước tập hợp thượng nguồn, mỗi instance đi cùng một subgraph; node `Loop` thì gọi đệ quy sub-workflow và đặt số vòng lặp tối đa, còn đồ thị cha vẫn không chu trình. **Nếu nghiệp vụ thực sự cần luân chuyển trạng thái có chu trình** (ví dụ phê duyệt bị trả về thì quay lại bước soạn thảo, lặp đi lặp lại tới khi đạt cổng chất lượng), **thì nên dùng một mô hình state machine hay flowchart ở cấp cao hơn, chứ không nhét chu trình vào DAG.**

Theo trách nhiệm, node chia thành hai nhóm: node nghiệp vụ và node logic.

**Node nghiệp vụ (Task Node)** thực hiện thao tác nghiệp vụ cụ thể — là phần "làm việc" trong workflow. Các hình thái điển hình gồm gọi Agent (gửi Prompt tới LLM Agent và nhận phản hồi), gọi tool (API bên ngoài, database, message queue), chạy code (script Python / JavaScript), truy hồi tri thức (recall context từ vector store hay kho tri thức), phê duyệt của con người (treo quy trình chờ xác nhận), và đẩy thông báo (gửi message tới IM — Instant Messaging, email, Webhook).

**Node logic (Control Node)** không thực hiện thao tác nghiệp vụ, chỉ kiểm soát hướng đi của quy trình. Các node kiểm soát tường minh làm tăng khả năng biểu đạt về nhánh, chờ và tái dùng — **nhưng một DAG chỉ gồm node nghiệp vụ và cạnh phụ thuộc cũng biểu đạt được song song và hội tụ** (nhiều đường độc lập chạy song song, rồi một node nghiệp vụ nào đó phụ thuộc nhiều cạnh vào thì tự nhiên là điểm hội tụ) — **không thể từ đó mà kết luận đồ thị nhất định tuyến tính.** Các node logic thường gặp như bảng dưới.

| Loại node | Tác dụng |
| --- | --- |
| Rẽ nhánh điều kiện (Condition / Switch) | Quyết định đi đường nào dựa trên output thượng nguồn hay biến toàn cục, ví dụ "phân loại là ticket khẩn thì đi nhánh xử lý bởi người, không thì đi nhánh trả lời tự động" |
| Song song (Parallel / Fork) | Chẻ quy trình thành nhiều nhánh chạy đồng thời |
| Hội tụ (Merge / Join) | Chờ output các nhánh song song sẵn sàng rồi gộp thành một context thống nhất; điều kiện sẵn sàng cụ thể xem 10.4.3 |
| Vòng lặp (Loop / ForEach) | Chạy sub-workflow theo từng mục hay theo lô qua việc bung có biên lúc chạy (đồ thị vẫn không chu trình) |
| Chờ (Wait / Timer) | Tạm dừng quy trình, chờ một khoảng thời gian hay một sự kiện bên ngoài |
| Xử lý lỗi (Error Handler / Retry / Fallback) | Định nghĩa hành vi khi node thất bại: retry tự động, hạ cấp sang đường dự phòng, hay ném lỗi rồi chấm dứt |
| Sub-workflow | Đóng gói một quy trình tái dùng được thành workflow độc lập và gọi như một node từ workflow cha |

### 10.4.3 Điều kiện sẵn sàng của node: phụ thuộc thường, AND Join, OR Join

Quy tắc lập lịch mặc định của workflow engine và quy tắc hội tụ tường minh phải khớp nối rõ ràng, nếu không "mọi phụ thuộc trước đã xong" và "một cái xong là đi tiếp" sẽ mâu thuẫn nhau trong cùng một đồ thị. Chương này dùng các định nghĩa sau.

| Loại cạnh | Điều kiện sẵn sàng | Xử lý nhánh chưa chọn / chưa xong |
| --- | --- | --- |
| Cạnh phụ thuộc thường | Node thượng nguồn ở trạng thái `succeeded` hoặc `skipped` | Thượng nguồn thất bại thì theo chính sách xử lý lỗi (chấm dứt, hạ cấp, retry) |
| AND Join | Mọi nhánh thượng nguồn của các cạnh vào đều tới trạng thái cuối (`succeeded` / `failed` / `killed` / `skipped`) và thoả yêu cầu của policy (tất cả thành công / ít nhất N thành công) | Một nhánh thất bại thì theo policy quyết định có kích hoạt Join hay không |
| OR Join | Bất kỳ nhánh thượng nguồn nào của một cạnh vào thoả điều kiện là sẵn sàng | Các nhánh chưa được chọn bị engine **huỷ tường minh**; kết quả tới muộn thì archive vào log audit, không làm đổi trạng thái đã sẵn sàng của hạ nguồn |

Điểm then chốt của OR Join là **huỷ tường minh các nhánh chưa được chọn**, nếu không chúng sẽ tiếp tục ngốn tài nguyên, sinh tác dụng phụ, và xung đột với các quyết định hạ nguồn vốn đã dựa trên "kết quả tới trước". Kết quả tới muộn (nhánh hoàn tất sau khi Join đã sẵn sàng) thì đi vào log audit để phân tích hậu kiểm, **không tham gia vào việc tính toán ở hạ nguồn.**

### 10.4.4 Các năng lực kỹ thuật cốt lõi của workflow engine

Trên nền mô hình node, một workflow engine cấp production cho Agent còn phải giải ba nhóm vấn đề kỹ thuật.

**Bền vững hoá state và khôi phục từ điểm dừng.** Sau khi mỗi node hoàn tất, engine bền vững hoá input, output và trạng thái thực thi thành một Checkpoint ở mức bước. Input của các node sau được đọc từ Checkpoint thay vì tính lại. Nhờ vậy việc chạy workflow không phụ thuộc vào một tiến trình worker đơn lẻ nào — sau khi process sập, engine khôi phục context từ tầng lưu trữ và chạy tiếp từ Checkpoint thành công cuối. Điều này nhất quán với lập trường trách nhiệm của lập lịch bên ngoài ở mục 10.2.5: state đưa ra kho bền vững, process thực thi phi trạng thái; **nhưng Checkpoint lưu state theo hợp đồng khôi phục, còn thẩm quyền của State nghiệp vụ thì vẫn ở ứng dụng nghiệp vụ (xem 10.1.1).**

**Tính idempotent và chạy lại cục bộ.** Node có thể bị chạy lại do process sập hoặc scheduler gửi trùng. Cần phân biệt hai việc: **tái dùng kết quả tính toán của bước** — nếu Checkpoint đã tồn tại và version khớp thì bỏ qua việc tính lại, đây là năng lực tự nhiên của Checkpoint; và **tính idempotent của tác dụng phụ bên ngoài** — nếu node đã commit việc ghi tới hệ thống bên ngoài (INSERT database, gửi message, gọi API) thì **việc Checkpoint đã ghi xuống đĩa hay chưa không bảo đảm được rằng tác dụng phụ chưa xảy ra.** Khi việc ghi ra ngoài đã commit mà Checkpoint chưa kịp ghi, chạy lại vẫn sinh tác dụng phụ trùng.

Với lời gọi bên ngoài, có thể lưu ý định trước, rồi lưu kết quả sau khi thực thi; còn cửa sổ sự cố giữa việc ghi ý định, phát message và commit trạng thái thì xử lý bằng transaction, Outbox, khoá idempotent hay đối soát, tuỳ năng lực backend. **Fencing dùng để từ chối commit của một executor đã hết hạn, không thay được transaction xuyên hệ thống.** Việc chạy lại cục bộ nên tái dùng các kết quả trước đó còn hiệu lực về version, và đối chiếu tác dụng phụ của bước thất bại; **những thao tác đã xảy ra như gửi email, trừ tiền thì thường chỉ có thể xác nhận hoặc bù trừ, chứ không thể bị một checkpoint khôi phục huỷ đi.**

**Vận hành trực quan.** Workflow cấp production nên cung cấp view thực thi trực quan: trên topology DAG có gán trạng thái thời gian thực của từng node (`waiting` / `queued` / `running` / `hold` / `succeeded` / `failed` / `killed` / `skipped` / `mark_succeeded`, xem 10.2.3.3), thời lượng, số lần retry; hỗ trợ các thao tác can thiệp thủ công (chạy lại → `queued`, bỏ qua → `skipped`, cưỡng chế đánh dấu thành công → `mark_succeeded`, tạm dừng → `hold`, chấm dứt → `killed`). Theo mục 10.1.2, "cưỡng chế đánh dấu thành công" **chỉ đổi trạng thái thực thi và để lại bản ghi audit, chứ không phán định thẳng Outcome.**

**Việc thu thập dữ liệu quan sát không nên là ghi toàn bộ vô điều kiện.** Mặc định thu theo mức tối thiểu cần thiết; các trường nhạy cảm thì ẩn danh hoặc băm ở mức trường; **credential và bí mật cấm ghi vào kho**; truy cập chịu kiểm soát RBAC; lưu giữ có thời hạn rõ ràng; log audit bảo đảm tính toàn vẹn (chỉ append, chống sửa). Những năng lực kiểu "xem input/output của node bất kỳ và phản hồi gốc của LLM" nên được uỷ quyền theo nhu cầu, **chứ không mở mặc định** — context thực thi của các task không người trực thường mang theo dữ liệu khách hàng, credential nội bộ và thông tin nhạy cảm về thương mại; ghi toàn bộ theo mặc định sẽ mở rộng đáng kể bề mặt tấn công và rủi ro tuân thủ. Về cảnh báo: node thất bại, quá hạn tổng thể, workflow định kỳ không kích hoạt… đều nên được đẩy tự động; còn các node đã cấu hình chính sách tự chữa (retry tự động + backoff luỹ thừa) thì không cần con người can thiệp.

## 10.5 Các mối quan tâm cắt ngang: quản trị, observability và bảo mật

### 10.5.1 Phân tầng trách nhiệm giữa Observability, Evaluation và Outcome

Hệ quan sát cung cấp tài liệu vận hành; hệ đánh giá sinh ra điểm số và chẩn đoán; còn ứng dụng nghiệp vụ hoặc component nghiệm thu được uỷ quyền thì phán định Outcome. Ba thứ có thể phối hợp, **nhưng phải ghi lại nguồn và phương pháp riêng của mỗi bên.** Hệ thống chung được triển khai ở phần Quản trị; chương này tập trung liên kết phần kích hoạt, xếp hàng, chờ, retry và bàn giao kết quả.

**Observability** lo việc liên kết các tín hiệu hệ thống, task và ngữ nghĩa: xâu Trace, log, trạng thái và Artifact thành một chuỗi truy vấn được, cung cấp view thống nhất về trạng thái thực thi, trạng thái vận hành của node và bằng chứng ứng viên. **Output của nó là tài liệu, không phải kết luận.**

**Evaluation** dùng những tài liệu đó để chấm điểm và quy kết: đánh giá tự động bằng LLM-as-a-Judge, khớp luật, con người rà soát theo mẫu — đều là cách hiện thực của Evaluation. **Output của Evaluation là điểm số hay chẩn đoán, vẫn không phải Outcome.**

**Outcome** do ứng dụng nghiệp vụ hoặc Verifier được uỷ quyền phán định cuối cùng dựa trên tiêu chí thành công và Evidence. Khi điểm số được dùng cho việc nghiệm thu, **phải có tiêu chuẩn áp dụng và uỷ quyền rõ ràng.**

### 10.5.2 Bảo mật và quyền hạn

Task không người trực chạy trong phạm vi đã uỷ quyền trước, và liên tục kiểm tra định danh, task cùng policy tài nguyên hiện tại. Các thao tác vượt phạm vi thì theo policy mà phê duyệt hoặc từ chối; khi khôi phục sau lúc chờ thì **kiểm chứng lại uỷ quyền.** Audit ghi chủ thể, đích, policy và kết quả; các trường nội dung thì ẩn danh và giới hạn lưu giữ theo mức dữ liệu.

Bối cảnh không người trực còn cần bổ sung các chiều sau: **định danh chạy** — task chạy dưới tài khoản người dùng/service nào, credential lấy và xoay vòng ra sao; **cô lập tenant** — ranh giới cô lập của Task State, Checkpoint, Artifact trong môi trường multi-tenant; **lối ra mạng** — task truy cập được những domain/IP bên ngoài nào, traffic outbound có qua proxy audit không; **timeout phê duyệt** — hành vi mặc định khi trạng thái `hold` vượt ngưỡng (từ chối, tiếp tục chờ, hay leo thang xử lý; **bản thân việc timeout không cấu thành sự phê duyệt**).

### 10.5.3 Quản trị chi phí

Chi phí task ít nhất gồm: token model (input và output của LLM), lời gọi tool và API bên ngoài (tìm kiếm, truy hồi vector, dịch vụ bên thứ ba), tài nguyên tính toán (process Agent, sandbox, container), lưu trữ (Task State, Checkpoint, Artifact, log), mạng (traffic outbound, lời gọi xuyên vùng), retry và bù trừ (chạy lại sau thất bại, sửa qua đối soát), và phê duyệt của con người (thời gian của nhân sự vận hành và người duyệt).

Các chiều ngân sách cũng cần mở rộng tương ứng: số lần gọi, thời lượng chạy, mức đồng thời, số lần tác dụng phụ bên ngoài, tổng chi phí. Biện pháp quản trị gồm trần token và chi phí cho một lần chạy, ngân sách tích luỹ theo ngày/tháng, tự động tạm dừng và cảnh báo khi cạn ngân sách, cùng việc dự báo chi phí và phát hiện bất thường dựa trên dữ liệu lịch sử. Trong bối cảnh bất đồng bộ và định kỳ (không có người giám sát tại chỗ), **một Agent rơi vào vòng lặp vô tận tích luỹ ra hoá đơn ngoài dự kiến trong vài giờ là rủi ro có thật** — mức tiền cụ thể tuỳ model và mẫu gọi, nên hãy đặt ngưỡng theo model, giá tool và tải lịch sử thực tế.

## Tóm tắt chương

Task bất đồng bộ, task định kỳ và workflow lần lượt mô tả **cách thực thi, cách kích hoạt và cấu trúc orchestration**, và có thể tổ hợp tự do: một workflow kích hoạt định kỳ có thể chạy bất đồng bộ; kích hoạt theo sự kiện cũng có thể gửi một Task đơn; và bên trong một node workflow có thể nhúng phần tự quyết của Agent.

Để đưa một nền tảng Agent cấp production vào thực tế, **điểm then chốt không nằm ở việc xếp chồng component, mà ở việc phân rõ ranh giới trách nhiệm**: Task có định danh độc lập, bền vững cùng State nghiệp vụ; Session chỉ là một đoạn context thực thi trong đó; ứng dụng nghiệp vụ sở hữu thẩm quyền về Task và tiêu chí thành công; Harness tổ chức vòng lặp điều khiển; Runtime quản vòng đời thực thi và lease; Environment cung cấp điều kiện chạy; scheduler phối hợp kích hoạt và thực thi. Ngữ nghĩa hoàn thành được phân tầng theo "trạng thái thực thi — bằng chứng ứng viên — Evidence — Verifier — Outcome", và thao tác vận hành **chỉ đổi được tầng tương ứng trong phạm vi đã uỷ quyền.**

**Khôi phục và tính idempotent không thể thuê ngoài cho bất kỳ component đơn lẻ nào:** lập lịch bên ngoài giảm khả năng kích hoạt trùng, nhưng tác dụng phụ nghiệp vụ vẫn phải tổ hợp khử trùng, idempotent, fencing thực thi, đối soát và bù trừ theo năng lực sẵn có; khi không bảo đảm được đúng-một-lần thì phải nói rõ ranh giới. Checkpoint tái dùng kết quả tính toán, nhưng **không đồng nghĩa với tính idempotent của tác dụng phụ.** Polling, callback và Watch là tín hiệu thay đổi trạng thái, **không phải nguồn sự thật có thẩm quyền**; khi tín hiệu thiếu thì bắt buộc phải đối soát lại theo Task State có thẩm quyền.
