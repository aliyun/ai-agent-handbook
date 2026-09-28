# Chương 8 — Lưu trữ trạng thái và tài sản ngữ nghĩa của Agent

Chương 7 đã bàn về môi trường thực thi, việc liên kết state và tiếp tục task. Chương này trả lời tiếp: những sự thật về task, workspace và tài sản ngữ nghĩa cần bền vững hoá thì **do hệ thống nào gánh, và mỗi thứ phải thoả yêu cầu nhất quán, truy cập và quản trị nào.**

Event Log và Checkpoint cung cấp căn cứ cho việc khôi phục sự cố; snapshot workspace và Artifact lưu version môi trường cùng thành quả task; bộ nhớ dài hạn tích luỹ kinh nghiệm đã chọn lọc; kho tri thức RAG (Retrieval-Augmented Generation) cung cấp tri thức bên ngoài truy hồi được; còn ontology thì tổ chức tường minh các đối tượng nghiệp vụ, quan hệ và luật. Những đối tượng này có thể dùng chung hạ tầng, nhưng **không vì thế mà được bỏ qua yêu cầu về tính đúng đắn riêng của từng thứ.**

Chương này triển khai theo trình tự: "bản đồ phân tầng — trạng thái vận hành và workspace — memory, knowledge và ontology — quản trị nền tảng". Phần Xây dựng đã nói những đối tượng logic này được Harness dùng ra sao; ở đây trọng tâm là việc bền vững hoá, gắn version, tính nhất quán và vòng đời của chúng, và lấy kiến trúc tham chiếu của Lakebase để minh hoạ cách các năng lực được tổ hợp.

**Phần một — Tổng quan: sau khi state được đưa ra ngoài thì ai gánh nó**

## 8.1 Bản đồ phân tầng của kho lưu trạng thái Agent

### 8.1.1 Trách nhiệm lưu trữ sau khi state được đưa ra ngoài

Khi state không còn bám vào bất kỳ instance thực thi nào, hệ thống Agent bước vào một giai đoạn kiến trúc mới. Hệ thống không chỉ cần để node tính toán thay được bất cứ lúc nào, mà còn phải bảo đảm task luôn có **cùng một context đáng tin, liên tục và truy cập được** khi luân chuyển xuyên node, xuyên thời gian và xuyên các vai trò cộng tác.

Điều đó khiến tầng lưu trữ gánh một trách nhiệm mới: nó không chỉ lưu dữ liệu, mà còn kết nối suy luận, thực thi, cộng tác và học tập. Harness tổ chức vòng lặp kiểm soát và ngữ nghĩa thực thi, lo việc điều phối model, tool và context; Runtime quản lý vòng đời thực thi, lập lịch tài nguyên và khôi phục hạ tầng; còn kho lưu trạng thái thì lo việc để mỗi lần suy luận và hành động đều nối tiếp được, tạo thành một quá trình đáng tin.

Trong ứng dụng truyền thống, việc phân công dữ liệu thường khá rõ: đơn hàng, tài khoản, tồn kho và các sự thật nghiệp vụ khác đi vào database giao dịch; ảnh, file đính kèm và log đi vào file hay object storage; task phân tích thì đọc dữ liệu từ data warehouse hoặc data lake. Ranh giới giữa logic ứng dụng, đối tượng dữ liệu và đường truy cập tương đối ổn định.

Còn Agent thì **liên tục sinh ra và tiêu thụ state.** Lấy "phân tích nguyên nhân khách hàng rời bỏ và sinh phương án giữ chân" làm ví dụ: Agent cần hiểu mục tiêu task, chẻ các bước phân tích, truy cập hồ sơ khách hàng và lịch sử ticket, gọi tool phân tích dữ liệu, sinh bảng và biểu đồ trung gian, điều chỉnh kế hoạch theo kết quả, rồi sau khi con người xác nhận thì hình thành phương án cuối. Mỗi bước vừa sinh ra state mới, vừa phụ thuộc vào state đã có để tiến tiếp.

Nếu những state này không được gánh một cách đáng tin, thì task sẽ không khôi phục chính xác được sau khi instance hỏng, gọi model timeout hay con người can thiệp; nhiều Agent tuy mỗi bên hoàn thành phần việc cục bộ nhưng lại không chia sẻ được một context nhất quán; và các chiến lược hiệu quả cùng phản hồi người dùng cũng khó tích tụ thành kinh nghiệm tái sử dụng được. Quan trọng hơn, khi kết quả lệch lạc, doanh nghiệp **không tái dựng được** Agent đã dựa trên thông tin gì để phán đoán, đã gọi những tool nào, và đã sửa những đối tượng nào.

Vì vậy, việc đưa state ra ngoài cần tổ chức những thông tin nằm rải rác trong context, instance và lời gọi tool thành các **đối tượng dữ liệu địa chỉ hoá được, kiểm chứng được.** Tầng lưu trữ duy trì tính bền vững và ranh giới truy cập của những đối tượng đó, còn hệ thống thực thi thì dựa vào đó để làm việc tiếp.

### 8.1.2 Agent cần lưu những state nào: từ context phiên đến knowledge và ontology

Xét về hình thái dữ liệu, state của Agent không phải một đối tượng đơn lẻ, mà là **một nhóm tập dữ liệu có vòng đời, cách truy cập và yêu cầu nhất quán khác nhau.** Chúng cùng tạo thành bộ nhớ làm việc bên ngoài của Agent, và cùng quyết định Agent có hoàn thành liên tục các task thật ngoài phạm vi một cuộc hội thoại hay không.

**Loại thứ nhất là trạng thái runtime**, gồm event log, checkpoint, tiến độ task, execution lease và con trỏ state. Nó ghi lại Agent đang ở giai đoạn nào, đã hoàn thành những bước nào, những lời gọi tool nào thành công hay thất bại, và bước kế tiếp do ai thực thi. Mục tiêu cốt lõi của nó là bảo đảm task **khôi phục được, di trú được, phối hợp được.** Mục 8.2 sẽ bàn về cách event, checkpoint, lease và con trỏ state cùng hỗ trợ việc khôi phục xuyên bản sao.

**Loại thứ hai là workspace và sản phẩm**, gồm file, bảng, code, biểu đồ, file đính kèm, snapshot, version và nhánh. Chúng không phải file đính kèm đơn thuần, mà là một phần của chuỗi task: cần được chia sẻ, tham chiếu, gắn version, snapshot hoá, và khi cần thì rollback về một trạng thái đáng tin. Mục 8.3 sẽ bàn cách tiến hoá một thư mục tạm dùng một lần thành **không gian tài sản task cộng tác được, audit được.**

**Loại thứ ba là memory và knowledge**, gồm tóm tắt phiên, sở thích người dùng, mục kinh nghiệm, tài liệu doanh nghiệp, index vector và knowledge graph. Agent không nên quay về "điểm không" sau mỗi cuộc hội thoại, nhưng cũng không được để những thông tin chưa kiểm chứng, đã lỗi thời hoặc không nên lưu giữ tiếp tục ảnh hưởng tới quyết định sau này. Mục 8.4 và 8.5 sẽ lần lượt triển khai bộ nhớ dài hạn, cùng các vấn đề bền vững hoá, truy hồi và quản trị của RAG và kho tri thức.

**Loại thứ tư là ngữ nghĩa nghiệp vụ và trạng thái quản trị**, gồm đối tượng ontology, quan hệ, luật, tenant, quyền hạn và bản ghi audit. Chúng giúp Agent không chỉ hiểu các mẩu ngôn ngữ tự nhiên, mà còn hiểu được định danh, quan hệ và ranh giới của các đối tượng nghiệp vụ như "khách hàng trọng điểm", "người phụ trách", "điều kiện phê duyệt". Mục 8.6 sẽ bàn cách ontology trở thành bộ khung ngữ nghĩa để Agent hiểu thế giới nghiệp vụ; còn mục 8.7 quay lại các vấn đề nền tảng như cô lập multi-tenant, tính nhất quán, vòng đời, chi phí và khả năng quan sát.

![image](../assets/imgs/chapter-08/image-001.png)

*Hình 8-1 — Các đối tượng state của Agent và kiến trúc lưu trữ phân tầng*

Hình 8-1 trình bày cấu trúc tổng thể của kho lưu trạng thái Agent theo bốn tầng: trên cùng là các đối tượng dữ liệu hướng Agent như trạng thái runtime, workspace và sản phẩm, memory và knowledge, ngữ nghĩa nghiệp vụ và quản trị; dưới đó là hợp đồng state thống nhất và metadata; tiếp nữa là các năng lực nền như giao dịch, object, truy hồi, quan hệ và graph; dưới cùng là phần quản trị và vận hành thống nhất trải ngang mọi tầng. Thứ hình vẽ biểu đạt **không phải cấu trúc bên trong của một loại database nào đó**, mà là sự phân công năng lực mà một nền tảng dữ liệu Agent nên cung cấp.

Điểm then chốt của kiến trúc này **không** phải là nhét mọi state vào cùng một loại kho lưu trữ, mà là để mỗi loại state có được vật mang vật lý phù hợp, đồng thời ở tầng trên vẫn có định danh, metadata, version, quyền hạn và vòng đời nhất quán. Nhờ vậy, tầng dưới có thể chọn năng lực phù hợp theo đặc tính đối tượng, còn Agent thì luôn truy cập và quản lý các sự thật task, thành quả công việc và tài sản ngữ nghĩa của mình qua những đối tượng state thống nhất.

### 8.1.3 Yêu cầu nhất quán của các loại đối tượng state

Khác biệt giữa các loại đối tượng state cuối cùng thể hiện thành những yêu cầu nhất quán và truy cập khác nhau. **Trạng thái runtime** lưu các sự thật về task: một bước đã xong chưa, một lời gọi tool đã commit chưa, người thực thi kế tiếp là ai. Loại state này cần thứ tự ghi rõ ràng, cập nhật nguyên tử, kiểm soát idempotent và một lịch sử khôi phục được — nếu không, việc retry task có thể thực thi trùng, và nhiều bản sao có thể đưa ra những kết luận xung đột cho cùng một task.

**Workspace và sản phẩm** thì quan tâm hơn tới version, snapshot, quan hệ tham chiếu và khả năng rollback. Một bảng phân tích, một nhánh code hay một báo cáo đã sinh ra cần định vị chính xác được về một lần chạy task, vừa để bên cộng tác tái dùng, vừa để quay về một version đáng tin khi sửa đổi sau này gặp vấn đề. **Memory và knowledge** thì nhấn mạnh hơn tính truy hồi được, tính thời sự, độ tin cậy của nguồn và việc lọc quyền: chúng cho phép xử lý và index rồi mới được recall, nhưng **bắt buộc phải nói được đến từ đâu, áp dụng cho phạm vi nào, khi nào cần cập nhật hoặc quên đi.** Ontology và trạng thái quản trị còn cần duy trì định danh đối tượng, tính toàn vẹn quan hệ, ranh giới luật và bằng chứng audit.

Vì vậy, một vector store hay một bảng phiên có thể lưu được một phần thông tin, nhưng **không tự nhiên thoả được ngữ nghĩa của mọi đối tượng.** Nếu coi sự thật task chỉ như text truy hồi được thì dễ mất thứ tự và tính nguyên tử; nếu coi thành quả công việc chỉ như file đính kèm không version thì khó rollback và tái dùng; còn nếu trộn memory, knowledge và quyền hạn vào cùng một context thì thông tin lỗi thời hoặc nội dung vượt quyền sẽ tiếp tục ảnh hưởng tới quyết định. **Điểm xuất phát đúng không phải là chọn một engine nào đó trước, mà là định nghĩa ranh giới đúng đắn của từng loại đối tượng state trước, rồi mới ghép năng lực lưu trữ tương ứng, và dùng một hợp đồng thống nhất để tổ chức chúng thành một thể.**

### 8.1.4 Kiến trúc tham chiếu lưu trữ phân tầng: nền tảng Agent cần dựng sẵn những năng lực nào

Lấy Lakebase làm tham chiếu, có thể chia năng lực nền tảng thành hai tầng: tầng dưới cung cấp các năng lực lưu trữ giao dịch, file, object, vector và graph theo đặc tính đối tượng; tầng trên thống nhất định danh đối tượng, metadata, version, quyền hạn và vòng đời. Một hợp đồng truy cập thống nhất giúp giảm việc ứng dụng tích hợp lặp lại, nhưng **tính nhất quán và bảo đảm khôi phục của từng đối tượng thì vẫn phải kiểm chứng riêng.** Các mục sau triển khai theo cấu trúc này.

**Phần hai — Nền lưu trữ: trạng thái runtime, workspace và snapshot**

Cả năng lực ngữ nghĩa lẫn quản trị nền tảng đều dựng trên nền vật lý, và cái nền ấy phải trả lời hai câu hỏi cứng rắn nhất: **task gián đoạn rồi có tiếp tục được không, và thành quả công việc có giữ lại được không.** Sự cố, co giãn, di trú instance có thể xảy ra bất cứ lúc nào; sự thật về task của Agent bắt buộc không được mất, việc thực thi bắt buộc phải nối tiếp được; còn code, file và sản phẩm trong sandbox thì phải tạo được nhanh, cô lập an toàn và bàn giao đáng tin.

Kho lưu trạng thái runtime lấy event log, checkpoint và khôi phục xuyên bản sao làm hạt nhân; kho workspace và sản phẩm lấy view phân tầng, snapshot copy-on-write và tham chiếu ổn định làm hạt nhân. Hai thứ liên kết với nhau qua version và con trỏ state, cùng hỗ trợ việc tiếp tục task.

## 8.2 Lưu trạng thái runtime: Event Log, Checkpoint và khôi phục xuyên bản sao

### 8.2.1 Mô hình lưu trạng thái task và phiên: bền vững hoá state machine và các chuyển đổi hợp lệ

Quá trình chạy của Agent không phải một lần gọi model, mà là một chuỗi task có thể kéo dài vài phút, vài giờ, thậm chí vài ngày. Nó sẽ liên tục chuyển qua lại giữa các khâu lập kế hoạch, gọi tool, chờ hệ thống bên ngoài trả về, con người xác nhận, sub-agent cộng tác. **Instance thực thi có thể bị thay bất cứ lúc nào, nhưng task thì không được vì một lần restart instance mà mất đi căn cứ về "đã làm gì, bước kế tiếp là gì, thao tác nào đã có hiệu lực".**

Vì vậy, mục tiêu hàng đầu của kho lưu trạng thái runtime không phải giữ lại toàn bộ văn bản context, mà là **bền vững hoá những sự thật khôi phục được của task**: giai đoạn hiện tại của task, các quyết định đã xác nhận, kết quả gọi tool, các sự kiện bên ngoài đang chờ xử lý, và con trỏ state cần thiết để thực thi tiếp. Nó là nền tảng để Agent đi từ "có thể hoàn thành task một lần" tới "hoàn thành ổn định các task dài".

### 8.2.2 Event Log: tính thứ tự và nhất quán mạnh của một log chỉ-append

Event Log là cơ chế cốt lõi ghi lại sự thay đổi của các sự thật về task. Mỗi khi Agent hoàn thành một hành động có ý nghĩa nghiệp vụ — ví dụ sinh kế hoạch, xin execution lease, phát lời gọi tool, nhận giá trị trả về của tool, chờ con người xác nhận hay commit kết quả cuối — hệ thống đều append một event không được tuỳ ý viết lại. Các event này ghép theo thứ tự sẽ tái dựng được toàn bộ quá trình tiến hoá của task từ lúc bắt đầu tới thời điểm hiện tại.

Với trạng thái runtime, **thứ tự đặc biệt quan trọng.** Giả sử "gửi yêu cầu phê duyệt" đã thành công nhưng event kết quả lại không được ghi tin cậy nên bị chạy lại, thì hệ thống có thể gửi nhiều lần yêu cầu tới cùng một người duyệt; giả sử một subtask đã hoàn tất nhưng task cha không thấy event hoàn tất của nó, thì việc điều phối task có thể tiếp tục chờ một cách sai lầm. Giá trị của Event Log chính là cung cấp một thứ tự sự thật rõ ràng, truy nguyên được ở chính những ranh giới đó.

Nhưng "nhất quán mạnh" **không** có nghĩa mọi task Agent phải tranh chấp cùng một log toàn cục. Ranh giới hợp lý hơn thường là **task, phiên hoặc đối tượng nghiệp vụ**: các thay đổi state bên trong cùng một task cần có quan hệ trước-sau rõ ràng, còn những task độc lập với nhau thì chạy song song được. Cách này vừa bảo đảm tính đúng đắn của từng task, vừa tránh khoá mọi workflow Agent vào một hệ thống tuần tự toàn cục kém hiệu quả.

Khi bản ghi event và state hiện tại cùng được duy trì, chúng nên được commit trong một transaction, hoặc được bảo đảm đồng bộ cuối cùng qua một cơ chế Outbox đáng tin, và khử trùng theo định danh event. **Event log chỉ dùng làm căn cứ phát lại khi nó chứa đầy đủ các thay đổi state cùng các input cần thiết;** log chẩn đoán và output của model không thay thế được bản ghi đó.

Dĩ nhiên, event không tích luỹ vô hạn. Task dài và hệ thống Agent tần suất cao sẽ sinh ra rất nhiều bản ghi vận hành, nên nền tảng phải cân bằng giữa việc giữ sự thật audit và kiểm soát chi phí lưu trữ: giữ event hạt mịn cho các task gần đây, tạo snapshot kiểm chứng được cho các task đã hoàn thành ổn định, và đặt chu kỳ lưu giữ theo yêu cầu nghiệp vụ, tuân thủ và audit. **Điểm mấu chốt không phải lưu vĩnh viễn từng đoạn output của model, mà là bảo đảm những sự thật ảnh hưởng tới tính đúng đắn của task và tới các hành động bên ngoài luôn truy nguyên được.**

### 8.2.3 Checkpoint: tần suất snapshot, phần tăng dần và mục tiêu điểm khôi phục

Nếu Event Log ghi lại "đã xảy ra chuyện gì", thì Checkpoint ghi lại "task đang ở trạng thái nào tại một thời điểm đáng tin". Khi task đã chạy rất lâu, nếu mỗi lần khôi phục hệ thống đều phát lại từng event từ đầu, thì vừa kém hiệu quả vừa làm tăng tính bất định của quá trình khôi phục. Checkpoint định kỳ lưu snapshot trạng thái task, giúp instance thực thi mới tiếp tục làm việc từ điểm khôi phục đáng tin gần nhất.

Một Checkpoint hiệu quả **không nên** chỉ là bản copy đơn giản của context model, mà phải chứa các state then chốt cần cho việc khôi phục: giai đoạn task hiện tại, các bước đã hoàn thành, các bước chưa xong, tham chiếu kết quả gọi tool, version workspace, trạng thái subtask, điều kiện chờ và version state. Nó giúp runtime không phải đoán "instance trước đã chạy tới đâu", mà tiến tiếp dựa trên state đã commit.

Tần suất Checkpoint phải tương xứng với chi phí task. Với các task truy vấn chỉ mất vài giây và retry rẻ khi thất bại, việc lưu snapshot quá dày lại làm tăng chi phí; còn với các task có gọi hệ thống bên ngoài, xử lý chuỗi dài, cần con người can thiệp, thì nên chủ động tạo Checkpoint tại các ranh giới then chốt. Ranh giới then chốt ở đây thường gồm: trước và sau khi gọi bên ngoài, sau khi hoàn tất một phép tính dài, trước và sau khi con người xác nhận, sau khi workspace có thay đổi quan trọng, và khi task chuẩn bị bàn giao cho một Agent khác.

Snapshot tăng dần có thể giảm chi phí thêm nữa. Thay đổi state của nhiều task chỉ liên quan tới vài trường cục bộ, một kết quả subtask hay một tham chiếu workspace mới, nên không cần copy trọn state ở mỗi lần thay đổi. Nền tảng có thể lưu tập thay đổi theo version state, và khi khôi phục thì ghép snapshot đầy đủ gần nhất với các phần tăng dần sau đó. Cơ chế này vừa giữ hiệu quả khôi phục, vừa giúp kho lưu trạng thái runtime thích ứng được với workload Agent kiểu đồng thời cao, dạng xung.

Checkpoint còn định nghĩa **mục tiêu khôi phục** của hệ thống. Với người dùng, câu hỏi quan trọng nhất không phải là tầng dưới đã lưu bao nhiêu dữ liệu, mà là: sau khi instance hỏng thì task khôi phục được từ đâu, mất bao nhiêu công việc đã hoàn thành, và có lặp lại hành động bên ngoài không. Bằng cách đặt chính sách checkpoint khác nhau cho các loại task khác nhau, nền tảng Agent có thể tạo ra một ranh giới rõ ràng giữa chi phí, hiệu năng và độ chính xác khôi phục.

### 8.2.4 Khôi phục xuyên bản sao và Durable Execution: phát lại event, execution lease và hợp đồng con trỏ state

Instance thực thi của Agent nên được xem là **đơn vị tính toán thay thế được, chứ không phải chủ sở hữu duy nhất của sự thật về task.** Khi một instance thoát vì co giãn, sự cố, timeout hay nâng cấp, instance mới phải tiếp quản được task. Quá trình này thường gọi là **Durable Execution**: quá trình thực thi của task không phụ thuộc vào một process hay một máy cụ thể, mà phụ thuộc vào state bền vững bên ngoài tiếp tục tồn tại.

Khi khôi phục, instance mới trước hết đọc Checkpoint mới nhất của task, rồi phát lại các event sau snapshot đó theo nhu cầu. Nó không phải chạy lại những bước đã xác nhận hoàn thành, mà tiếp tục từ trạng thái đáng tin gần nhất. Tổ hợp "snapshot cộng event" này vừa tránh phát lại toàn bộ lịch sử, vừa tránh việc chỉ dựa vào một state khả biến duy nhất mà mất đi bằng chứng quá trình.

Khôi phục xuyên bản sao còn phải giải quyết câu hỏi **"ai có quyền thực thi tiếp"**. Nếu instance cũ chưa thoát hẳn mà instance mới đã bắt đầu khôi phục, thì cùng một task có thể bị hai bản sao cùng đẩy tiến. Vì vậy, hệ thống cần dùng **execution lease** để xác định quyền thực thi hiện tại, và kèm theo version hay định danh fencing khi ghi state. Có thể hình dung nó như "cây gậy tiếp sức" của task: **chỉ instance giữ cây gậy mới nhất mới được commit thay đổi state kế tiếp; instance cũ dù còn đang chạy cũng không được ghi đè kết quả thực thi mới.**

Con trỏ state thì gánh trách nhiệm trả lời "trạng thái đáng tin hiện tại nằm ở đâu". Nó liên kết task, chuỗi event, Checkpoint, snapshot workspace và tham chiếu sản phẩm cuối, giúp instance khôi phục không phải quét mọi vị trí khả dĩ để tìm context. Với hệ thống bên ngoài, con trỏ state cũng tạo ra một lối vào thống nhất cho audit và vận hành: người dùng hay quản trị viên thấy được version hiện tại của task, checkpoint gần nhất, instance thực thi, các sản phẩm liên quan và điều kiện chờ.

Cần lưu ý, **Durable Execution không đồng nghĩa với việc "mọi hành động bên ngoài tự nhiên được thực thi đúng một lần".** Gọi model, gửi message, gửi phê duyệt, ghi dữ liệu đều có thể vượt qua ranh giới hệ thống. Thứ nền tảng bảo đảm được là các thay đổi state của task có ranh giới sự thật rõ ràng; còn với tác dụng phụ bên ngoài, vẫn phải kết hợp định danh idempotent, xác nhận kết quả và cơ chế bù trừ, để tránh việc khi khôi phục lại gửi lần nữa một hành động vốn đã thành công. Đây cũng là lý do kho lưu trạng thái runtime **bắt buộc phải lưu đồng thời ý định gọi, định danh lời gọi và kết quả gọi**, chứ không chỉ ghi một câu "đang thực thi".

### 8.2.5 Hiệu năng, độ ổn định và co giãn: ứng phó với workload dạng xung

Workload của Agent mang đặc tính xung một cách tự nhiên. Một nhóm người dùng cùng phát yêu cầu phân tích, một workflow phức tạp chẻ ra nhiều subtask, hay các tool bên ngoài timeout ngắn rồi phục hồi đồng loạt — tất cả đều tạo ra đỉnh ghi state và đọc khôi phục trong thời gian ngắn. Nếu trạng thái runtime bị buộc chặt vào instance tính toán, nền tảng thường chỉ còn cách mở rộng quy mô instance để giảm áp lực — vừa tốn kém vừa hạn chế năng lực khôi phục.

Sau khi state được đưa ra ngoài, tính toán và state có thể co giãn riêng rẽ. Tầng thực thi co giãn nhanh theo số lượng task; còn tầng state thì cần cung cấp thông lượng ổn định theo phân vùng task, điểm nóng truy cập và mức bền vững. Với nền tảng, điều then chốt không phải là mọi event đều đạt độ trễ thấp nhất, mà là **trong điều kiện tải cao, chuyển đổi instance và sự cố cục bộ, trạng thái task vẫn không mất, không sai thứ tự, không bị bản sao cũ ghi đè.**

Độ ổn định cũng phụ thuộc vào việc phân tầng dữ liệu state. Các task gần đây đang chạy cần đọc độ trễ thấp và cập nhật tần suất cao; các task đã hoàn thành nhưng vẫn có thể bị audit, truy vết hay mở lại thì cần một bản ghi lịch sử truy hồi được; còn các event vận hành lâu không hoạt động thì có thể archive sau khi thoả yêu cầu quản trị. Bằng phân tầng nóng–lạnh, nén snapshot, chính sách giữ event và phát lại theo nhu cầu, nền tảng tránh được việc các task lịch sử liên tục chiếm tài nguyên của task thời gian thực.

Trạng thái runtime cung cấp căn cứ để task tiếp tục; còn code, bảng, báo cáo và file trung gian hình thành trong lúc thực thi thì còn phải được lưu và bàn giao đáng tin thông qua kho workspace và sản phẩm.

## 8.3 Backend lưu trữ cho workspace và snapshot sandbox

Trạng thái runtime bảo đảm Agent biết "task đang tới đâu"; workspace và sản phẩm bảo đảm Agent giữ được "task đã làm ra cái gì". Một task thật không chỉ sinh ra câu trả lời bằng chữ: phân tích dữ liệu sinh ra bảng và biểu đồ, task R&D sinh ra code và kết quả test, task vận hành sinh ra phương án, tài nguyên và file đính kèm phê duyệt. Chúng vừa là căn cứ cho suy luận sau này của Agent, vừa là thành quả công việc cần bàn giao, thẩm định và tái dùng khi người và Agent cộng tác.

Vì vậy, **workspace không nên bị coi là một thư mục tạm trên instance thực thi.** File cục bộ của instance cho phép đọc ghi nhanh, nhưng không nên là nguồn sự thật duy nhất; một khi instance bị thay, nhánh task bị chuyển hay nhiều người cộng tác cùng tham gia, nội dung trong thư mục tạm sẽ khó định vị, khó tái dùng và khó audit. Kho workspace hướng tới Agent cần tiến hoá từ "môi trường tạm chạy được" thành **"không gian tài sản task quản lý được lâu dài".**

![image](../assets/imgs/chapter-08/image-002.png)

*Hình 8-2 — Kiến trúc tổng thể của Agent Workspace*

Hình 8-2 trình bày cách phân tầng workspace trong kiến trúc tham chiếu Lakebase: tầng cơ sở, tầng dùng chung và tầng ghi được dùng Copy-on-Write để giảm sao chép lặp; trạng thái runtime và kho sản phẩm liên kết với nhau qua namespace và tham chiếu đối tượng; còn database metadata, object storage và cache thì cung cấp phần gánh ở tầng dưới. **Thời lượng snapshot và mount phụ thuộc vào quy mô dữ liệu, backend và cách khôi phục — cần đo dưới workload thực tế.**

### 8.3.1 Hình thái lưu trữ của workspace: file storage dùng chung, object storage và tầng tăng tốc

Nội dung trong workspace của Agent có sự khác biệt rõ rệt: mã nguồn và file cấu hình cần cấu trúc thư mục cùng việc đọc ghi file nhỏ với tần suất cao; dữ liệu huấn luyện, file đính kèm, hình ảnh và audio/video cần dung lượng lớn với chi phí thấp; báo cáo, script, kết quả model và file nén sinh ra thì cần tham chiếu ổn định và khả năng bàn giao ra ngoài; còn dữ liệu nóng thì cần nằm gần môi trường thực thi để giảm thời gian chờ.

Điều đó nghĩa là phần gánh ở tầng dưới của workspace có thể có nhiều hình thái khác nhau, nhưng **với Agent thì phải hiện ra như một không gian task thống nhất.** Agent không cần hiểu mỗi file rốt cuộc nằm trên hạ tầng nào, mà phải truy cập được một cách nhất quán tới "workspace hiện tại", "một snapshot nào đó", "một nhánh nào đó" và "một sản phẩm đã bàn giao". Nền tảng lo việc cung cấp vật mang vật lý và phần tăng tốc truy cập phù hợp theo kích thước đối tượng, tần suất truy cập, cách cộng tác và yêu cầu lưu giữ.

Năng lực file dùng chung phù hợp với nội dung cần giữ cấu trúc thư mục và được nhiều đơn vị thực thi cùng truy cập; năng lực object hoá phù hợp với file lớn, thành quả bất biến và archive dài hạn; tầng tăng tốc cục bộ hoặc gần kề phù hợp với dữ liệu nóng truy cập thường xuyên. Ba thứ này **không** nhằm bắt người dùng đối mặt với nhiều sản phẩm khác nhau, mà cùng tạo thành các tầng khác nhau của một workspace logic. Agent nhìn thấy tài sản task; nền tảng xử lý vị trí, cache, version và vòng đời.

Cách phân tầng này cũng thay đổi cách quản lý workspace. Trước kia, khi một sandbox dừng, thư mục của nó thường biến mất cùng instance; còn trong nền tảng Agent, instance chỉ là một điểm mount tạm thời của workspace. **Bản thân workspace có định danh, quyền truy cập, lịch sử version và vòng đời riêng**, có thể được instance mới mount lại, và cũng có thể được chia sẻ có chọn lọc với Agent khác hay người cộng tác.

### 8.3.2 Workspace phân tầng: base image dùng chung được và lớp ghi riêng tư

Một workspace Agent chất lượng vừa phải hỗ trợ khởi động nhanh, vừa phải tránh việc các task làm bẩn lẫn nhau. **Workspace phân tầng** là cách thường dùng để giải mâu thuẫn này: dưới cùng là tầng cơ sở chỉ-đọc, tái dùng được, ví dụ môi trường chạy, dependency, template và dữ liệu công cộng; ở giữa là tầng dữ liệu mà task hoặc tenant dùng chung được; trên cùng là tầng ghi độc quyền của task hiện tại, dùng để lưu các sửa đổi code, file trung gian và kết quả sinh ra trong lần chạy này.

Tư tưởng cốt lõi của cấu trúc này là **"dùng chung phần bất biến, cô lập phần biến đổi"**. Nhiều Agent có thể khởi động từ cùng một môi trường cơ sở mà không phải copy trọn image và dependency cho mỗi lần chạy; mỗi task chỉ ghi lại phần thay đổi của riêng mình, nhờ đó giảm thời gian khởi động và chi phí lưu trữ. Với những task có nhiều nhánh thăm dò, các nhánh khác nhau cũng có thể phái sinh lớp ghi riêng từ cùng một version cơ sở.

Phân tầng không chỉ là tối ưu hiệu năng, mà còn là một **ranh giới quản trị**. Tầng cơ sở công cộng nên do nền tảng hoặc một đội có kiểm soát duy trì, tránh để Agent tuỳ tiện sửa các dependency dùng chung; tầng ghi của task thì thuộc về task và tenant cụ thể, tránh để file của các người dùng khác nhau nhìn thấy chéo nhau; còn những file cần tích tụ thành thành quả chính thức thì phải **đi vào kho sản phẩm một cách tường minh** từ tầng ghi, để nhận được định danh ổn định, version và chính sách lưu giữ.

Với Agent, cơ chế này giúp **"thử sai" và "bàn giao" cùng tồn tại.** Nó có thể sửa script, sinh dữ liệu, thử nhiều phương án trong tầng ghi riêng tư; nhưng chỉ những kết quả đã được xác nhận mới được nâng lên thành tài sản task chia sẻ được, tham chiếu được. Nhờ vậy vừa giữ được sự linh hoạt khi Agent thực thi, vừa tránh để file tạm, các lần thử thất bại và thành quả cuối lẫn lộn trong cùng một không gian.

### 8.3.3 Snapshot, rollback và nhánh: Copy-on-Write

Quá trình làm việc của Agent vốn mang tính thăm dò. Nó có thể thử nhiều cách tính trước khi sinh báo cáo, tạo nhánh thí nghiệm trước khi sửa code, làm sạch và lấy mẫu trước khi xử lý dữ liệu. Nếu mỗi lần thử đều ghi đè thẳng lên workspace gốc, thì khi thất bại sẽ khó khôi phục; còn nếu mỗi lần thử đều copy trọn vẹn mọi thứ thì lại tốn kém và chờ lâu.

Snapshot cung cấp cho workspace một **ranh giới version khôi phục được.** Nó ghi lại các file nhìn thấy được, cấu trúc thư mục và metadata liên quan của workspace tại một thời điểm, giúp Agent hay người cộng tác quay về trạng thái đó sau này. Snapshot dùng được cho thí nghiệm, thẩm định, rollback và phân nhánh, và cũng có thể là một phần của việc backup; **còn có năng lực chịu thảm hoạ độc lập hay không thì phụ thuộc vào vị trí lưu và miền sự cố.** Rollback môi trường **không** huỷ được các thao tác đã commit tới hệ thống bên ngoài. Một snapshot đáng tin phải trả lời được: "đây là task nào, giai đoạn nào, dựa trên input gì, do ai tạo ra, và sau đó phát sinh những thay đổi nào".

**Copy-on-Write** khiến snapshot không phải copy nguyên cả workspace. Sau khi tạo snapshot, phần nội dung không thay đổi tiếp tục dùng lại dữ liệu sẵn có; chỉ những phần mới ghi hoặc bị sửa mới tạo ra block dữ liệu mới. Nhờ vậy, Agent có thể tạo nhiều nhánh thí nghiệm trong thời gian ngắn mà không phải lưu lặp lại cùng phần nội dung cơ sở cho từng nhánh. Với người dùng, điều này nghĩa là workspace có thể được thử nghiệm và quay lui an toàn như version code; với nền tảng, nghĩa là năng lực version không còn phải trả giá bằng việc nhân bản dữ liệu.

Snapshot còn nên được liên kết với trạng thái runtime. Khi task vào giai đoạn then chốt, hoàn tất một lời gọi tool quan trọng, chuẩn bị giao cho con người phê duyệt hay chuyển sang Agent khác, thì Checkpoint runtime nên ghi lại tham chiếu tới snapshot workspace tương ứng. Nhờ vậy, instance khôi phục không chỉ biết task dừng ở đâu, mà còn mount lại được đúng môi trường làm việc lúc đó, tránh tình trạng **"trạng thái task đã khôi phục, nhưng trạng thái file thì đã đổi".**

### 8.3.4 Khôi phục đồng thời nhiều bản sao: execution lease và fencing

Vấn đề đồng thời của workspace khác với của trạng thái runtime, nhưng hai thứ phải được xử lý phối hợp. Execution lease ở mục 8.2 giải quyết "instance nào có quyền đẩy trạng thái task"; còn workspace thì phải giải thêm "instance nào có quyền sửa tầng ghi hiện tại". Nếu hai bản sao cùng ghi vào một workspace vì mạng chập chờn hay khôi phục bất thường, thì dù cuối cùng chỉ một bản sao commit thành công trạng thái task, nội dung file vẫn có thể đã bị ghi đè đồng thời.

**Workspace ghi được riêng của task cần một ràng buộc ghi độc lập.** Interface ghi có hỗ trợ fencing thì nên kiểm chứng thế hệ thực thi hiện tại; còn hệ thống file thông thường không kiểm tra được từng lần thì có thể dùng mount độc quyền, thu hồi truy cập của đầu cũ, hoặc để instance ghi vào nhánh riêng và chỉ cho bên đang giữ quyền phát hành version mới. **Chỉ cập nhật lease trong bảng task thì không ngăn được một instance cũ vẫn đang giữ file handle tiếp tục ghi.**

Với các bối cảnh cần nhiều Agent cộng tác, nền tảng **không nên** đơn giản để mọi Agent cùng sửa một thư mục, mà phải phân biệt tường minh ranh giới dùng chung và riêng tư. Một Agent có thể hoàn tất phân tích trong nhánh ghi của mình, còn Agent khác thì đọc kết quả đó qua snapshot ổn định hay tham chiếu Artifact; khi cần hợp nhất thì mới hình thành một state đáng tin mới qua một quá trình merge version và phê duyệt rõ ràng. Cách này tránh được việc biến cộng tác multi-agent thành một cuộc tranh ghi đè file không audit được.

**Sản phẩm bất biến** đặc biệt quan trọng ở đây. Với các báo cáo, dataset, kết quả test hay gói bàn giao đã hoàn thành, một khi đã vào Artifact Store thì **không được sửa tại chỗ nữa**; thay đổi sau đó phải sinh version mới. Điều này khiến bên tham chiếu luôn biết mình đang đọc đúng bản nào, và tránh việc một Agent nào đó vô tình dùng phải kết quả đã bị ghi đè.

### 8.3.5 Artifact Store: địa chỉ hoá được, lưu giữ được và bàn giao được

**Artifact** là những đối tượng thành quả hình thành trong quá trình task và có giá trị tái dùng hay bàn giao. Nó có thể là một báo cáo phân tích, một patch code, một bảng, một dataset, một nhóm biểu đồ, một kết quả xử lý audio/video, hay một gói phần mềm triển khai được. Khác biệt với file tạm thông thường là: **Artifact cần được định vị ổn định, lưu lâu dài, cấp quyền truy cập, và dùng được làm input đáng tin cho các task sau.**

Giá trị của Artifact Store không chỉ là "lưu file". Nó phải thiết lập cho mỗi thành quả một định danh rõ ràng, kèm metadata như task nguồn, thời điểm tạo, version, Agent đã sinh ra nó, căn cứ input, trạng thái phê duyệt, phạm vi quyền và chính sách lưu giữ. Nhờ vậy, thứ người dùng thấy không còn là một mớ thư mục và tên file khó hiểu, mà là những thành quả task truy hồi được, tham chiếu được và audit được.

Khả năng địa chỉ hoá giúp cả Agent lẫn con người tham chiếu chính xác cùng một thành quả. Ví dụ, một task phân tích sau đó có thể tham chiếu "bản thứ ba đã được phê duyệt của báo cáo khách hàng rời bỏ", thay vì dựa vào một đường dẫn tạm dễ đổi; một người cộng tác có thể mở đúng version biểu đồ ứng với một Checkpoint task nào đó, thay vì phải đoán file nào mới là kết quả mới nhất. **Tham chiếu ổn định là tiền đề cho cộng tác multi-agent, rà soát của con người và tái dùng xuyên task.**

Khả năng lưu giữ thì giúp nền tảng phân biệt **quá trình tạm** với **tài sản chính thức.** File trung gian dùng một lần có thể dọn theo policy sau khi task xong; còn thành quả đã bàn giao thì phải lưu lâu dài theo chu kỳ nghiệp vụ, tuân thủ hoặc dự án. Việc quản lý vòng đời như vậy vừa tránh cho workspace phình vô hạn, vừa tránh để những thành quả có giá trị biến mất ngoài ý muốn khi instance được giải phóng.

Artifact cũng là **cây cầu nối workspace với tầng ngữ nghĩa.** Không phải mọi file tạm đều nên tự động đi vào bộ nhớ dài hạn hay kho tri thức; chỉ những thành quả đã qua trích xuất, kiểm chứng, phân loại và xác nhận quyền mới phù hợp để tổ chức tiếp thành tri thức truy hồi được, mục kinh nghiệm hay quan hệ đối tượng nghiệp vụ. Như vậy, mục 8.3 giải quyết "thành quả được lưu và bàn giao đáng tin ra sao", còn các mục 8.4, 8.5, 8.6 thì giải quyết tiếp "thành quả được hiểu, liên kết và tận dụng liên tục ra sao".

### 8.3.6 Hiệu năng, chi phí và phân tầng nóng–lạnh của không gian làm việc ở quy mô

Khi Agent mở rộng từ vài task thí nghiệm sang một lượng lớn workflow hằng ngày, thách thức của kho workspace và sản phẩm không còn là "lưu được hay không", mà là **"có chạy ổn định dưới điều kiện tần suất cao, đa tenant, chu kỳ dài hay không".**

**Trước hết là quy mô lưu trữ.** Mỗi task Agent có thể sinh ra snapshot, file trung gian, nhánh và sản phẩm bàn giao, và chu kỳ lưu giữ của các task khác nhau cũng khác nhau. Nền tảng cần hỗ trợ phân tầng nóng–lạnh: các task hoạt động gần đây giữ trọn workspace và snapshot hạt mịn; các task đã hoàn thành chỉ giữ snapshot then chốt và sản phẩm chính thức; dữ liệu hết hạn thì archive hoặc dọn theo policy. Thiếu chính sách phân tầng, chi phí lưu trữ sẽ phình lên tuyến tính, thậm chí siêu tuyến tính, theo lượng task.

**Kế đến là mức đồng thời truy cập.** Khi nhiều Agent chạy song song, dùng chung tầng cơ sở hoặc tham chiếu chéo sản phẩm của nhau, tầng lưu trữ phải cung cấp đủ thông lượng mà không hy sinh tính nhất quán. Object storage phù hợp với file lớn và sản phẩm bất biến; hệ thống file dùng chung phù hợp với cấu trúc thư mục đọc ghi thường xuyên; tầng cache phù hợp với truy cập độ trễ thấp cho dữ liệu nóng. **Điểm mấu chốt không phải theo đuổi một phương án tối ưu duy nhất, mà là để các tầng lưu trữ khác nhau vẫn đúng và ổn định dưới áp lực đồng thời.**

**Thứ ba là cô lập multi-tenant.** Workspace Agent của các người dùng và các mảng nghiệp vụ khác nhau bắt buộc phải có ranh giới truy cập rõ ràng. Ngay cả khi tầng dưới dùng chung một cụm lưu trữ, cũng không được để lộ khả năng nhìn thấy dữ liệu xuyên tenant. Nền tảng cần hiện thực việc cô lập theo định danh và theo task ngay ở tầng lưu trữ, đồng thời bảo đảm tính toàn vẹn của snapshot, sản phẩm và metadata trong từng ranh giới.

**Cuối cùng là khả năng vận hành lâu dài.** Metadata của workspace và sản phẩm cần hỗ trợ truy hồi, audit và kiểm tra tuân thủ. Doanh nghiệp cần biết một sản phẩm do task nào, Agent nào, vào lúc nào sinh ra, dựa trên input gì, đã qua những phê duyệt nào. Những metadata này **không thể chỉ lưu trong context runtime** (instance thoát là mất), và cũng **không thể chỉ lưu trong bản thân file sản phẩm** (không truy hồi hiệu quả được). Một **index metadata độc lập** là điều kiện cần cho việc vận hành ở quy mô.

Tổng hợp lại: kho lưu trạng thái runtime (8.2) bảo đảm task tiếp tục thực thi được sau sự cố và di trú; kho workspace và sản phẩm (8.3) bảo đảm thành quả của task được lưu, bàn giao và tái dùng một cách đáng tin. Hai thứ cùng tạo thành nền dữ liệu của nền tảng Agent, giúp Agent đi từ "hoàn thành được một task đơn lẻ" tới "gánh ổn định các quy trình nghiệp vụ hằng ngày".

**Phần ba — Tầng ngữ nghĩa: bộ nhớ dài hạn, kho tri thức và ontology**

Trạng thái runtime và workspace của Agent giải quyết câu hỏi "hiện đang làm gì"; còn việc tái dùng thông tin xuyên task thì liên quan tới bản ghi kinh nghiệm, tri thức bên ngoài và quan hệ giữa các đối tượng nghiệp vụ — lần lượt ứng với **memory, kho tri thức và ontology.**

Khác biệt giữa ba thứ trước hết nằm ở nguồn, công dụng và trách nhiệm duy trì. Memory đến từ kinh nghiệm tương tác và thực thi đã được chọn lọc; knowledge đến từ tài liệu bên ngoài truy nguyên được; ontology duy trì khái niệm nghiệp vụ, quan hệ và luật. **Không phải mọi ứng dụng đều cần đủ cả ba;** hãy chọn theo nhu cầu của task về tái dùng xuyên phiên, truy hồi tri thức và suy luận quan hệ.

Thiết kế tham chiếu Lakebase Agentic Schema đưa memory, knowledge và ontology vào một tầng ngữ nghĩa thống nhất. Thứ được thống nhất là cách liên kết đối tượng và cách quản trị; còn ba thứ vẫn duy trì riêng nguồn, version, quy tắc cập nhật và quy tắc hết hiệu lực của mình.

## 8.4 Bền vững hoá, truy hồi và vòng đời của bộ nhớ dài hạn

### 8.4.1 Từ trạng thái phiên tới bộ nhớ dài hạn

Context phiên phục vụ tương tác hiện tại; nội dung của nó có được giữ xuyên phiên hay không phụ thuộc vào cách ứng dụng bền vững hoá và nạp lại. Khi người dùng lại nói "làm theo phương án lần trước đi", hệ thống cần tìm được phần lịch sử liên quan và phán định xem nó còn hiệu lực hay không. **Bộ nhớ dài hạn** cung cấp một bản ghi đã qua chọn lọc cho kiểu tái dùng xuyên phiên này.

Bộ nhớ dài hạn có thể lưu các sở thích người dùng đã nói rõ, các sự thật ổn định trong lĩnh vực, và những phương pháp đã được kiểm chứng. Nó giúp các task sau giảm việc hỏi lại, nhưng **sự tồn tại của memory không bảo đảm hiểu đúng**; việc recall, kiểm chứng nguồn và người dùng đính chính vẫn cần thiết.

### 8.4.2 Mô hình phân tầng bộ nhớ và vật mang vật lý

![c991893210c74d4ba4ce6995b47d02e1.png](../assets/imgs/chapter-08/image-003.png)

*Hình 8-3 — Tổ chức phân tầng của bộ nhớ dài hạn và recall lai*

Kiến trúc tham chiếu tổ chức bộ nhớ dài hạn theo **hai chiều độc lập, trực giao**, để tránh trộn "nguồn" và "độ ổn định" vào cùng một trục phân loại.

**Chiều thứ nhất, theo nguồn, chia ba loại:** biểu đạt tường minh của người dùng (sở thích, yêu cầu và phản hồi trong hội thoại), khái quát từ hành vi Agent (mẫu gọi tool, đường đi thực thi và kinh nghiệm xử lý lỗi), và sự thật nghiệp vụ bên ngoài (trạng thái đơn hàng, kết luận phê duyệt… do hệ thống nghiệp vụ ghi vào và dịch vụ memory tiếp nhận). Hai loại đầu trả lời "người dùng đã nói gì" và "Agent đã học được gì"; loại thứ ba trả lời "về mặt nghiệp vụ, đã xảy ra chuyện gì đáng nhớ".

**Chiều thứ hai, theo độ ổn định, chia ba tầng:** tầng persona và định danh (vai trò Agent, quy chuẩn hành vi, tính cách và ranh giới ổn định dài hạn), tầng chân dung (vai trò người dùng, sở thích, thói quen; tần suất cập nhật tính theo tuần, tháng), và tầng sự kiện–sở thích (sự kiện tương tác và sở thích trong bối cảnh cụ thể; hạt mịn nhất và cũng dễ biến đổi nhất). Hai chiều này **trực giao** — cùng một biểu đạt tường minh của người dùng có thể rơi vào tầng chân dung, mà cũng có thể rơi vào tầng sự kiện–sở thích; cùng một loại khái quát hành vi Agent cũng có thể được tầng persona (luật ổn định) hoặc tầng sự kiện–sở thích (chiến lược tạm) hấp thu.

**Persona** (cấu hình nhân cách và định danh của Agent) **không** được coi là memory mang tính kinh nghiệm, mà do bên xây dựng hoặc bên quản trị duy trì tường minh, chịu kiểm soát version và quyền hạn; nó tạo thành nền của memory, nhưng **không** đến từ trải nghiệm của Agent.

Memory hướng tới recall tần suất cao có thể đi vào index vector và tầng tăng tốc cache; còn memory lịch sử tần suất thấp thì lắng xuống tầng bền vững chi phí thấp hơn. Bằng cách khớp phân tầng logic với vật mang vật lý, nền tảng vừa lo được việc hiểu cá nhân hoá, phản hồi online, vừa kiểm soát được chi phí vận hành dài hạn.

### 8.4.3 Pipeline ghi memory: trích xuất, gộp và hoá giải xung đột

Memory không phải bản lưu trữ đơn giản của hội thoại gốc, mà là phần **nhận thức được tích tụ sau khi gia công có cấu trúc.** Việc ghi trước hết cần trích ra từ văn bản hội thoại và log hành vi những thông tin có giá trị lâu dài, như lời tuyên bố sở thích, phát biểu sự thật và các mẫu hành vi lặp lại. Cốt lõi nằm ở việc phân biệt **"cái gì đáng nhớ, cái gì nên quên"**: lời xã giao, lệnh debug tạm và các truy vấn dùng một lần thì không nên vào bộ nhớ dài hạn; chỉ những thông tin có giá trị dự đoán cho các tương tác sau mới nên tích tụ.

Memory mới không được append một cách đơn giản, mà phải được khớp ngữ nghĩa, gộp và khử trùng với memory sẵn có. Khi nhiều lần tương tác độc lập cùng chỉ tới một kết luận thì độ tin cậy của memory tăng lên; còn khi memory mới và cũ xung đột thì hệ thống kết hợp tính thời sự, độ tin cậy của nguồn và context để hoàn tất việc ghi đè hoặc giữ ở trạng thái chờ xác nhận — bảo đảm memory vừa phản ánh được ý định mới nhất, vừa không mất sự thật quan trọng vì ghi đè quá tay.

### 8.4.4 Truy hồi memory: vector, cấu trúc và recall lai; mức liên quan và tính gần thời điểm

Ghi memory mới chỉ là điểm xuất phát; quan trọng hơn là **recall chính xác trong một biển memory.** Khác với truy hồi tài liệu, giá trị thực tế của memory không chỉ phụ thuộc vào mức liên quan ngữ nghĩa, mà còn liên quan tới tính gần thời điểm, tần suất được tham chiếu và mức phù hợp với bối cảnh hiện tại. Một memory ba tháng trước dù rất liên quan về ngữ nghĩa vẫn có thể đã không còn áp dụng được vì sở thích người dùng đã đổi.

Lakebase dùng **recall lai nhiều đường**: truy hồi vector ngữ nghĩa dùng Embedding để bắt những ý nghĩa tương tự phía sau cách diễn đạt; truy hồi từ khoá dùng các cơ chế như BM25 (Best Match 25) để bổ sung phần khớp từ và xếp hạng; truy hồi theo quan hệ thực thể thì xoay quanh các thực thể nghiệp vụ như con người, dự án và tổ chức, để phát hiện những thông tin lịch sử không giống nhau trên bề mặt văn bản nhưng lại liên quan chặt chẽ. Các ứng viên được Rerank tinh xếp, rồi kết hợp suy giảm theo thời gian và lọc theo loại để xuất ra context cuối cùng.

Suy giảm theo thời gian có thể nâng trọng số xếp hạng cho memory gần đây, nhưng **không áp dụng được cho mọi loại thông tin.** Những ràng buộc còn hiệu lực dài hạn không nên phai mờ chỉ vì ít được gọi tới; tần suất tham chiếu cũng **không** đồng nghĩa với tính đúng đắn — nó phải được dùng cùng với nguồn và kết quả kiểm chứng thực tế.

### 8.4.5 Cập nhật và quên memory: suy giảm, đào thải và quản lý vòng đời

Memory không phải ghi vào rồi bất biến. Sở thích người dùng sẽ đổi, thông tin lỗi thời sẽ mất giá trị, nội dung trùng lặp sẽ làm loãng xác suất recall của những memory chất lượng cao. Vì vậy, **"quên" quan trọng ngang với "nhớ".** Lakebase phủ trọn vòng đời từ ghi, truy hồi, tham chiếu, cập nhật tới đào thải, giúp kho memory giữ được sự gọn gàng, đáng tin và dùng được về lâu dài.

Việc dọn dẹp tự động có thể chạy lúc rảnh để gộp tăng dần, hoá giải xung đột, nén tóm tắt và trích xuất có cấu trúc. Ví dụ, nhiều lần nói "ít cay thôi" có thể hình thành một sở thích ứng viên, nhưng **không nên** suy diễn thẳng thành mọi thói quen ăn uống. Memory sau khi nén nên giữ lại tham chiếu nguồn; những khái quát không chắc chắn thì giữ ở trạng thái chờ xác nhận.

**Archive, hạ trọng số recall và xoá là ba thao tác khác nhau.** Thông tin mà người dùng yêu cầu xoá thì phải xử lý đồng bộ cả bản ghi gốc, bản tóm tắt, index và cache, đồng thời ngăn việc dựng lại sau này lại đưa nó trở vào; còn những bản ghi phải giữ theo luật hay theo hợp đồng thì nên cách ly mục đích sử dụng và xử lý theo một chính sách lưu giữ rõ ràng.

### 8.4.6 Không gian memory đa phương thức: quản lý thống nhất text, hình ảnh và audio/video

Khi các bối cảnh tương tác của Agent phong phú lên, vật mang của memory đã vượt ra ngoài văn bản thuần. Các quyết định thiết kế, manh mối cảm xúc và quá trình thao tác chứa trong ảnh chụp sản phẩm, ghi âm và video demo thường ảnh hưởng không kém tới việc hiểu và thực thi task sau này. Nếu chỉ nhớ được nội dung chữ, Agent sẽ mất rất nhiều context then chốt trong các tương tác đa phương thức.

Không gian memory đa phương thức của Lakebase hỗ trợ bền vững hoá và truy hồi ngữ nghĩa thống nhất cho các nội dung text, hình ảnh, audio và video. Hệ thống trích đặc trưng ngữ nghĩa của từng phương thức để lập index, giúp Agent dùng ngôn ngữ tự nhiên recall được hình ảnh, audio hay video liên quan; các loại memory cùng chia sẻ một cơ chế quyền hạn, vòng đời và liên kết thống nhất; còn kết quả trả về thì giữ lại phương thức, nguồn và tham chiếu tài nguyên gốc để tiện đối chiếu về sau.

### 8.4.7 Quản trị và vận hành memory: riêng tư, bảo mật, audit, tích hợp Agent và trực quan hoá toàn chuỗi

Bộ nhớ dài hạn vốn chứa thông tin cá nhân và dấu vết hành vi của người dùng, nên việc quản trị bắt buộc phải cân bằng giữa tính dùng được của dữ liệu và bảo vệ quyền riêng tư. Memory càng chính xác, càng cá nhân hoá thì mức nhạy cảm tiềm tàng càng cao; vì vậy quản trị không thể chỉ phủ phần lưu trữ tĩnh, mà phải xuyên suốt toàn chuỗi ghi, truy hồi, sử dụng và xoá.

Lakebase cung cấp các năng lực phân loại – phân cấp, cô lập quyền hạn, audit truy cập và ẩn danh theo tuân thủ, bảo đảm mỗi memory chỉ được dùng trong phạm vi đã uỷ quyền. Nền tảng tích hợp các Agent khác nhau bằng interface chuẩn hoá và hệ credential, khiến chúng chỉ truy cập được không gian memory đã được cấp quyền; còn trực quan hoá toàn chuỗi thì cho người vận hành theo dõi được toàn bộ quá trình của một memory từ lúc ghi, recall, được tham chiếu tới lúc archive hay đào thải — làm căn cứ cho audit tuân thủ, tối ưu trải nghiệm và điều tra sự cố.

### 8.4.8 Kiểm chứng dịch vụ memory ở quy mô

Bối cảnh giáo dục có thể kiểm chứng dịch vụ memory qua sở thích học tập và bản ghi mức độ nắm kiến thức; bối cảnh CRM (Customer Relationship Management — quản lý quan hệ khách hàng) có thể kiểm tra xem bản ghi trao đổi với khách hàng có được gọi ra chính xác trong các task sau hay không. Kiểm chứng ở quy mô cần báo cáo đồng thời số người dùng hoạt động, số mục memory, mức truy vấn đồng thời, quy mô dữ liệu, chất lượng recall và độ trễ P95/P99 (phân vị 95 và 99); **một con số DAU hay độ trễ đơn lẻ không đủ nói lên năng lực dịch vụ.**

Ngoài thông lượng và độ trễ, còn phải kiểm chứng xem việc đính chính memory, thu hồi quyền, độ trễ index và khôi phục sự cố có ảnh hưởng tới các câu trả lời sau đó hay không. Việc cải thiện trải nghiệm phải được đánh giá qua các chỉ số task rõ ràng và mẫu đối chứng, **tránh chỉ dựa vào "nhớ được nhiều hơn" mà suy ra chất lượng đã tăng.**

## 8.5 RAG và kho tri thức: index, recall và cập nhật

### 8.5.1 Ranh giới giữa kho tri thức và bộ nhớ dài hạn: nội dung từ đâu tới, ai quản trị

Memory và kho tri thức tuy cùng là nguồn tri thức của Agent, nhưng ranh giới giữa chúng rất rõ: **memory là thứ Agent tự "trải qua"**, đến từ tích luỹ hội thoại và hành vi, do ứng dụng, người dùng và những người duy trì tương ứng cùng quản lý; **kho tri thức là thứ được "đưa vào" từ bên ngoài**, đến từ tài liệu doanh nghiệp, sổ tay sản phẩm, báo cáo ngành và dữ liệu nghiệp vụ, thường do quản trị viên tri thức hoặc đội nghiệp vụ duy trì.

Cả memory lẫn knowledge đều cần kiểm chứng nguồn. Nội dung kho tri thức **không** tự nhiên có thẩm quyền chỉ vì đã được import; memory cũng không nhất thiết đúng chỉ vì đến từ tương tác thật. Phần Xây dựng đã bàn cách cả hai đi vào context; mục này tập trung nói cách nguồn tri thức được parse, lập index, cập nhật và trả về trong phạm vi đã uỷ quyền.

![image](../assets/imgs/chapter-08/image-004.png)

*Hình 8-4 — Kiến trúc truy hồi tri thức hai làn: RAG và GraphRAG*

Điểm cốt yếu của hình 8-4 không nằm ở số lượng đường truy hồi, mà ở chỗ **mỗi đường đều có ranh giới được kiểm soát**: RAG gánh phần truy hồi tương tự ngữ nghĩa; GraphRAG hướng tới các câu hỏi cần suy luận quan hệ xuyên thực thể và được bật theo quy tắc routing đã kiểm chứng; DataProbe dùng tài khoản chỉ-đọc để thăm dò có cấu trúc trong phạm vi Schema đã uỷ quyền. Các ứng viên từ nhiều đường được Rerank xếp hạng thống nhất, và kết quả giữ lại phần truy nguyên đáp án rồi mới đưa cho Agent tiêu thụ. Các mục sau sẽ lần lượt triển khai cơ chế cụ thể của việc parse tài liệu, index và cập nhật tăng dần, recall lai, GraphRAG và quản trị tri thức.

### 8.5.2 Hiểu và parse tài liệu chuyên sâu: đa định dạng, bảng và văn bản – hình ảnh trộn lẫn

Tri thức doanh nghiệp có nhiều loại vật mang: sổ tay kỹ thuật, văn bản hợp đồng, báo cáo nghiên cứu, biên bản họp và văn bản chính sách — định dạng và cấu trúc đều khác nhau. Tầng hiểu tài liệu chuyên sâu của engine tri thức chịu trách nhiệm chuyển những nội dung đó thành các **đơn vị ngữ nghĩa Agent tiêu thụ được.**

**Độ sâu của việc parse quyết định trần chất lượng truy hồi về sau.** Hệ thống không chỉ trích chữ, mà còn giữ lại phân cấp tiêu đề, quan hệ đoạn, dữ liệu bảng, thực thể, thời gian và giá trị số cùng các yếu tố cấu trúc – ngữ nghĩa khác, giúp mỗi mảnh tri thức có đủ neo context. Nhờ vậy tránh được kiểu cắt xén nghĩa như lấy chính sách trả hàng thuộc "nghiệp vụ nước ngoài" áp cho nghiệp vụ trong nước; còn với nội dung trộn văn bản và hình ảnh, chữ trong ảnh cùng ngữ nghĩa hình ảnh cũng có thể được trích ra để giảm sót thông tin.

### 8.5.3 Dựng index và cập nhật tăng dần: chiến lược cắt mảnh, vector hoá và tránh dựng lại toàn bộ

Sau khi parse xong, các mảnh tri thức phải qua cắt mảnh, vector hoá và dựng index rồi mới vào được dịch vụ truy hồi. **Chiến lược cắt mảnh ảnh hưởng trực tiếp tới hiệu quả truy hồi:** mảnh quá lớn thì đưa vào nhiễu, mảnh quá nhỏ thì mất context cần thiết. Lakebase hỗ trợ cắt mảnh thông minh theo ranh giới tiêu đề, đoạn và chỗ chuyển ý ngữ nghĩa, đồng thời giữ lại thông tin context như tiêu đề cha.

Kho tri thức doanh nghiệp sẽ liên tục thêm, sửa và xoá nội dung. Nền tảng có thể dùng phát hiện thay đổi để chỉ xử lý phần đã đổi, và ghi lại version nguồn, version parse cùng mực nước index. Version mới sau khi dựng xong và kiểm chứng mới chuyển lối vào truy vấn sang; còn **thời gian có hiệu lực của việc cập nhật phải được đặt theo quy mô dữ liệu thực tế và năng lực pipeline — không thể từ chữ "tăng dần" mà suy ra một thời gian cố định.**

### 8.5.4 Truy hồi lai và recall nhiều đường: vector, toàn văn, lọc có cấu trúc và xếp hạng thống nhất

Một chiến lược truy hồi đơn lẻ không phủ được mọi bối cảnh truy vấn. Truy hồi vector ngữ nghĩa giỏi hiểu sự tương đồng khái niệm nhưng có thể bỏ sót các danh từ riêng như mã sản phẩm; truy hồi từ khoá giỏi khớp chính xác nhưng khó hiểu các cách diễn đạt đồng nghĩa; lọc có cấu trúc thì giới hạn phạm vi rất chặt nhưng không tự mình hiểu ngữ nghĩa được. Giá trị của truy hồi lai không chỉ ở việc chạy nhiều đường song song, mà ở chỗ **điều phối động trọng số của từng đường theo đặc trưng truy vấn.**

Lakebase hỗ trợ truy hồi vector ngữ nghĩa, truy hồi từ khoá toàn văn, và lọc có cấu trúc dựa trên metadata như loại tài liệu, khoảng thời gian, phòng ban sở hữu. Với các sự thật nghiệp vụ trong database quan hệ, **DataProbe** có thể chuyển câu hỏi ngôn ngữ tự nhiên của Agent thành một yêu cầu thăm dò dữ liệu có kiểm soát, bù cho phần thiếu của truy hồi tài liệu phi cấu trúc; loại thăm dò này **phải dùng tài khoản chỉ-đọc**, và giới hạn phạm vi bảng cùng trường truy cập được trong Schema đã uỷ quyền. Các ứng viên nhiều đường được Rerank xếp hạng thống nhất, rồi xuất kết quả trên cơ sở tổng hợp mức liên quan ngữ nghĩa, tính thẩm quyền của nội dung và tính thời sự; còn các câu hỏi liên quan phức tạp thì có thể dùng đường GraphRAG dưới các quy tắc routing đã kiểm chứng.

### 8.5.5 GraphRAG: truy hồi và tạo sinh được tăng cường bằng knowledge graph

RAG truyền thống về bản chất là **"truy hồi theo mảnh"**: mỗi lần trả về một hoặc vài mảnh tài liệu độc lập. Nhưng đáp án của rất nhiều câu hỏi nghiệp vụ lại không nằm trong một đoạn văn bản nào, mà là kết quả suy luận quan hệ nằm rải rác qua nhiều tài liệu, nhiều sự thật. Ví dụ, để nhận diện mối liên hệ chức vụ giữa lãnh đạo một công ty với đối thủ cạnh tranh thì cần duyệt xuyên thực thể và phán định quan hệ, chứ không chỉ khớp trúng văn bản.

**GraphRAG** của Lakebase đưa thêm một tầng index đồ thị lên trên truy hồi vector, trích xuất thực thể cùng quan hệ và dựng knowledge graph. Trong kiến trúc index hai tầng của nó, tầng ngữ nghĩa lo việc recall các mảnh tài liệu liên quan, tầng đồ thị lo việc duyệt quan hệ và khớp mẫu, cuối cùng hợp nhất hai loại kết quả thành một câu trả lời vừa có căn cứ sự thật vừa có chuỗi suy luận. Truy hồi có hỗ trợ đồ thị dùng được cho các bối cảnh phức tạp như xuyên thấu sở hữu cổ phần, phân tích liên kết chuỗi cung ứng và rà soát điều khoản pháp quy chéo; **quan hệ trích xuất được và phần model suy đoán đều phải giữ nguồn và được kiểm chứng.**

### 8.5.6 Quản trị tri thức: lọc quyền, truy nguyên đáp án và tiếp nhận tri thức

Quản trị tri thức phủ ba chiều: lọc quyền, truy nguyên đáp án và tiếp nhận tri thức. **Lọc quyền** dựa trên vai trò người dùng và mức mật của tài liệu, và được thực hiện **ngay ở khâu truy hồi**, ngăn Agent dùng trực tiếp hay gián tiếp những nội dung mà người dùng hiện tại không có quyền lấy; việc kiểm soát này phải phủ toàn chuỗi từ truy hồi tới tạo sinh, tránh để quá trình suy luận trở thành đường vòng cho thông tin bị hạn chế.

**Truy nguyên đáp án** giúp mọi câu trả lời sinh ra dựa trên kho tri thức đều lần ngược được tới tài liệu, đoạn và version cụ thể — đây là nền tảng cho việc người dùng kiểm chứng và cho việc audit. **Pipeline tiếp nhận tri thức chuẩn hoá** thì hỗ trợ đồng bộ nội dung liên tục từ nhiều nguồn như network drive doanh nghiệp, CMS (Content Management System — hệ quản trị nội dung), Wiki; kết hợp với snapshot version, rollback, phát hiện hết hạn và phân tích tham chiếu, nó giúp người vận hành duy trì độ tin cậy và độ tươi của tri thức.

### 8.5.7 Quy mô và chi phí: độ trễ truy hồi, phân tầng nóng–lạnh và lakehouse

Kho tri thức quy mô lớn đối mặt đồng thời với thách thức về hiệu năng và chi phí. Nếu giữ toàn bộ index của hàng triệu tài liệu thường trú trên phương tiện hiệu năng cao thì chi phí khó kiểm soát; còn nếu đẩy hết xuống kho chi phí thấp thì lại không đáp ứng được yêu cầu phản hồi thời gian thực của Agent online.

Lakebase cân bằng hai nhu cầu đó bằng **phân tầng nóng–lạnh**: tri thức nóng truy cập tần suất cao thường trú trong index bộ nhớ và cache SSD (Solid State Drive — ổ cứng thể rắn) để bảo đảm truy hồi độ trễ thấp; nội dung tần suất thấp tự động di trú xuống tầng lưu trữ chi phí thấp hơn, và có thể hâm nóng trở lại một cách trong suốt theo mẫu truy cập. Cách gánh theo kiểu **lakehouse** giúp dịch vụ tri thức vừa có lợi thế chi phí của data lake quy mô lớn, vừa đáp ứng yêu cầu hiệu năng của truy vấn online — tạo nền vận hành bền vững cho RAG và GraphRAG ở quy mô.

## 8.6 Ontology: để Agent hiểu thế giới nghiệp vụ

### 8.6.1 Vượt qua RAG: từ mảnh truy hồi tới ngữ nghĩa có cấu trúc

Kho tri thức RAG giải quyết vấn đề "Agent tìm được thông tin liên quan", nhưng **tìm được một đoạn văn bản không đồng nghĩa với hiểu nó.** Khi Agent truy hồi ra "đơn hàng của khách hàng này đã quá hạn", nó còn phải hiểu quan hệ giữa đơn hàng với khách hàng và sản phẩm, biết "quá hạn" ứng với luật nghiệp vụ nào, và có thể kích hoạt hành động tiếp theo nào. Những ngữ nghĩa có cấu trúc đó **không tự nhiên tồn tại trong những mảnh văn bản rời rạc.**

**Ontology** định nghĩa tường minh các khái niệm nghiệp vụ, quan hệ và luật, tạo ra cấu trúc cho việc truy vấn xuyên đối tượng và phán định theo luật. Khi task chỉ cần truy hồi một ít tài liệu thì có thể bắt đầu từ truy hồi thông thường; còn khi định danh thực thể, ràng buộc quan hệ và truy vấn nhiều bước trở thành nhu cầu thường trực thì mới đưa ontology vào và gánh chi phí mô hình hoá cùng bảo trì tương ứng.

![image](../assets/imgs/chapter-08/image-005.png)

*Hình 8-5 — Mô hình hoá ngữ nghĩa ba tầng của ontology và suy luận giải thích được*

### 8.6.2 Mô hình hoá ontology: biểu đạt tường minh đối tượng nghiệp vụ, hành động, quan hệ và luật

Việc mô hình hoá ontology của Lakebase xoay quanh bốn yếu tố: **đối tượng, quan hệ, hành động và luật.** Đối tượng định nghĩa các thực thể nghiệp vụ như khách hàng, đơn hàng, sản phẩm cùng thuộc tính và ràng buộc của chúng; quan hệ định nghĩa hướng liên kết, bản số và ngữ nghĩa nghiệp vụ giữa các đối tượng, giúp Agent thăm dò theo các chuỗi như "khách hàng — đơn hàng — sản phẩm"; hành động định nghĩa điều kiện kích hoạt, logic thực thi và ràng buộc quyền hạn, biến "biết" thành "làm được"; còn luật thì tường minh hoá các phán đoán kinh nghiệm của chuyên gia nghiệp vụ, ràng buộc ranh giới hành vi của Agent khi nó tự quyết định.

Bốn yếu tố tạo thành một biểu đạt ngữ nghĩa trọn vẹn: từ "là gì" tới "có quan hệ gì", từ "làm được gì" tới "phải tuân theo gì". Bên trong ontology được tổ chức theo ba tầng tiệm tiến: tầng ngữ nghĩa định nghĩa đối tượng, thuộc tính và quan hệ; tầng luân chuyển dữ liệu định nghĩa thao tác và dòng dữ liệu; tầng quyết định thông minh định nghĩa luật, chính sách quyền hạn và việc gắn với Agent. Nhờ đó, ontology không chỉ là một từ điển nghiệp vụ, mà là một **bộ khung ngữ nghĩa hỗ trợ việc hiểu nghiệp vụ.**

Cách phân công này cũng vạch ra ranh giới trách nhiệm của ontology: ontology gánh trách nhiệm **mô hình hoá ngữ nghĩa**, giữ lại ngữ nghĩa của đối tượng, quan hệ, hành động, và tích tụ các luật cùng metadata cho phép tham chiếu có uỷ quyền; **vòng đời thực thi** của hành động thì do Runtime hoàn tất theo ngữ nghĩa; còn **quyết định uỷ quyền** liên quan tới quyền hạn và việc gắn Agent thì do bên chịu trách nhiệm quản trị đưa ra. Ba trách nhiệm — định nghĩa ngữ nghĩa, thực thi và uỷ quyền — tách rời nhau, tránh để logic thực thi và quyết định quản trị lẫn vào mô hình ngữ nghĩa, và giúp bản thân ontology tiến hoá độc lập qua quản lý version.

### 8.6.3 Quản lý động ontology: đồng bộ dữ liệu và liên kết đối tượng

Khái niệm nghiệp vụ mới, tái tổ chức bộ máy và sửa đổi luật đều ảnh hưởng tới ontology. **Cập nhật dữ liệu instance** và **thay đổi định nghĩa mô hình** phải được xử lý riêng: cái trước cập nhật thuộc tính và quan hệ hiện tại của đối tượng; cái sau thay đổi Schema hoặc luật nghiệp vụ, nên cần quản lý version và đánh giá ảnh hưởng.

Lakebase hỗ trợ mô tả mô hình nghiệp vụ qua giao diện trực quan hoặc theo cách khai báo, và ánh xạ mô hình vào quá trình đồng bộ dữ liệu cùng liên kết đối tượng. Khi dữ liệu nghiệp vụ ở tầng dưới thay đổi, hệ thống đồng bộ các instance đối tượng và quan hệ liên quan; còn thay đổi về định nghĩa đối tượng và luật thì xử lý qua một quy trình version độc lập. Các khái niệm cốt lõi giữ tương đối ổn định; thuộc tính ngoại vi và quan hệ mở rộng thì cho phép tiến hoá linh hoạt. Kết hợp quản lý version và phân tích ảnh hưởng sẽ cân bằng được giữa độ ổn định và tính linh hoạt; còn mực nước đồng bộ cùng việc đối chiếu thì dùng để phát hiện chênh lệch giữa ontology và dữ liệu nghiệp vụ.

### 8.6.4 Lưu trữ và suy luận đồ thị: suy luận giải thích được với sự phối hợp giữa luật và LLM

Đồ thị có thể hỗ trợ việc thực thi luật và duyệt quan hệ; còn LLM (Large Language Model — mô hình ngôn ngữ lớn) thì có thể dùng context có cấu trúc đã truy hồi được để hỗ trợ phán đoán. Kết quả của các luật có tính xác định phụ thuộc vào tính đúng đắn của luật và của dữ liệu đầu vào; còn những suy đoán LLM đưa ra cũng phải được kiểm chứng — **không được vì đã dùng ontology mà mặc định là giải thích được hay chính xác.**

Sự phối hợp này tránh được hai hạn chế: suy luận thuần luật thì cứng nhắc, khó xử lý ngoại lệ; còn suy luận thuần LLM thì thiếu ràng buộc cấu trúc, dễ sinh kết luận không đáng tin. Mỗi kết luận then chốt đều có thể kèm theo đường suy luận gồm việc duyệt quan hệ, áp dụng luật và tham chiếu context, để người dùng rà soát được "vì sao lại có kết luận này". Tính giải thích được này là nền tảng quan trọng để Agent giành được sự tin cậy trong nghiệp vụ, và cũng giúp nó dùng được trong các bối cảnh nghiêm túc như phân tích quan hệ khách hàng, truy nguyên gốc rễ chuỗi cung ứng và kiểm tra tuân thủ.

### 8.6.5 Vận hành và tiến hoá ontology: mô hình hoá trực quan, quản lý version và kiểm soát quyền hạn

Việc vận hành ontology cần sự tham gia của cả chuyên gia nghiệp vụ lẫn đội kỹ thuật. Thiết kế tham chiếu của Lakebase cho phép tạo đối tượng, quan hệ và luật một cách trực quan, hạ thấp rào cản để chuyên gia lĩnh vực tham gia mô hình hoá ngữ nghĩa; còn quản lý version thì ghi lại từng thay đổi và hỗ trợ truy ngược, so sánh, rollback, khiến quá trình thay đổi truy nguyên được.

Kiểm soát quyền hạn bảo đảm các Agent với vai trò khác nhau chỉ truy cập được tập con ontology đã được cấp quyền. Nền tảng có thể liên tục giám sát tính toàn vẹn cấu trúc, tỉ lệ phủ instance và điểm nóng truy vấn của ontology, nhận diện những vùng thiếu định nghĩa hoặc dư thừa. Trong đó, **tỉ lệ phủ ontology** đặc biệt đáng chú ý: nếu một lượng lớn dữ liệu nghiệp vụ thực tế không mô tả được bằng các khái niệm hiện có, nghĩa là ngữ nghĩa nghiệp vụ vẫn còn điểm mù, và Agent sẽ khó hình thành hiểu biết có cấu trúc đáng tin ở những vùng đó.

### 8.6.6 Sự phối hợp giữa ontology, knowledge và memory: view thống nhất của tầng ngữ nghĩa

Ontology, knowledge và memory không hoạt động độc lập, mà tạo thành một **view tầng ngữ nghĩa thống nhất.** Ontology cung cấp bộ khung cho knowledge, giúp mỗi mảnh tài liệu có được vị trí khái niệm; ví dụ, một tài liệu xử lý sự cố thiết bị có thể được tổ chức thành chuỗi có cấu trúc "loại thiết bị — kiểu hỏng — giải pháp", thay vì chỉ là văn bản rời rạc.

Knowledge thì trao cho memory ngữ nghĩa nghiệp vụ. Một phản hồi của người dùng kiểu "lần trước giao hàng trễ" chỉ có thể được hiểu thành vấn đề của một đơn hàng nào đó, trong một khoảng thời gian nào đó, dưới một luật giao hàng nào đó, khi nó được đặt vào khung knowledge và ontology. Đến lượt mình, memory lại dẫn dắt sự tiến hoá của knowledge và ontology: khi rất nhiều tương tác liên tục phơi ra một đặc tính sản phẩm mới hay một mối liên hệ nghiệp vụ mới, nền tảng có thể gợi ý bổ sung tri thức và đánh giá xem có nên thêm khái niệm, quan hệ hay luật mới không.

Phản hồi giữa memory, knowledge và ontology phải được hiện thực qua **cập nhật có kiểm soát.** Tương tác có thể đề xuất các sự thật ứng viên hoặc gợi ý sửa mô hình, rồi bên duy trì tương ứng kiểm chứng mới có hiệu lực; **không được viết thẳng suy đoán của model thành luật của tổ chức.**

### 8.6.7 Thực tiễn ngành: các case triển khai ontology

Trong ngành tài chính, Agent có thể dựng bộ khung ontology quanh khách hàng, tài khoản, sản phẩm và giao dịch; kết hợp với kho tri thức gồm báo cáo nghiên cứu, công bố thông tin và memory tương tác với khách hàng, nó hoàn thành được chuỗi từ chân dung khách hàng tới đánh giá rủi ro. Ontology định nghĩa các đường suy luận như "khách hàng — danh mục nắm giữ — mức rủi ro"; kho tri thức cung cấp diễn biến thị trường và quy định giám sát; memory ghi lại sự thay đổi trong khẩu vị rủi ro của khách hàng — ba thứ cùng hỗ trợ việc phán đoán liên kết xuyên nhiều nguồn dữ liệu.

Trong ngành sản xuất, ontology về sản phẩm, thiết bị, quy trình công nghệ và chuỗi cung ứng có thể liên động với kho tri thức công nghệ và memory vận hành, phủ các bối cảnh như truy nguyên chất lượng và tối ưu chuỗi cung ứng. Ontology cung cấp topology liên kết "linh kiện — nhà cung cấp — dây chuyền — thành phẩm"; kho tri thức cung cấp chuẩn tham số công nghệ; memory tích tụ kinh nghiệm vận hành lịch sử. Sự phối hợp của bộ ba khiến Agent không còn chỉ là một công cụ truy hồi trả lời câu hỏi đơn giản, mà **hiểu được nghiệp vụ, tích luỹ được kinh nghiệm và tiến hoá liên tục.**

**Phần bốn — Nền tảng hoá: multi-tenant, tính nhất quán và lựa chọn công nghệ**

Ba phần trước lần lượt bàn về trạng thái runtime, workspace và sản phẩm, cùng các đối tượng ngữ nghĩa như memory, knowledge và ontology. Chúng cùng tạo thành nền dữ liệu để Agent chạy bền bỉ, học liên tục và hiểu thế giới nghiệp vụ. Nhưng khi Agent đi từ thí nghiệm đơn lẻ sang quy mô doanh nghiệp, thách thức không còn là lưu được dữ liệu, mà là **làm sao để những đối tượng dữ liệu phân tán ấy giữ được cô lập trong môi trường multi-tenant, giữ được độ tin cậy khi luân chuyển xuyên component, quản trị được trong vòng đời, và cuối cùng hình thành một năng lực nền tảng tiến hoá được.**

Bản chất của nền tảng hoá không phải là thêm một lối vào quản lý nữa, mà là **thiết lập một tầng quản trị thống nhất cho dữ liệu Agent.** Theo cách chia ba mặt phẳng của cuốn sách: mặt phẳng thực thi gánh phần suy luận và gọi tool thực tế của Agent; mặt phẳng dữ liệu gánh các đối tượng như event, state, file, vector, đồ thị; còn mặt phẳng điều khiển thì dùng định danh, metadata, policy và khả năng quan sát thống nhất để trả lời: những đối tượng đó thuộc về ai, từ đâu tới, ai được dùng, và phải lưu bao lâu. Việc khôi phục sự cố cũng theo sự phân công này: mặt phẳng điều khiển định nghĩa chính sách khôi phục, còn Runtime ở mặt phẳng thực thi lo việc thực hiện. Chỉ khi cả ba phối hợp, Agent mới đi được từ một ứng dụng chạy được tới một hệ thống production vận hành được ở quy mô.

## 8.7 Cô lập multi-tenant, tính nhất quán và lựa chọn công nghệ

Agent trong doanh nghiệp thường phục vụ đồng thời nhiều tổ chức, phòng ban, không gian nghiệp vụ và nhóm người dùng. Memory phiên, tri thức nghiệp vụ và sản phẩm thực thi của một Agent vừa có thể chứa thông tin cộng tác thông thường, vừa có thể liên quan tới dữ liệu khách hàng, dữ liệu kinh doanh, thậm chí các luật nghiệp vụ nhạy cảm cao. Vì vậy, nền tảng phải coi cô lập, tính nhất quán, metadata, chi phí và tính khả dụng là **một vấn đề thống nhất**, chứ không giao riêng cho từng component.

Độ phức tạp của dữ liệu Agent nằm ở chỗ: nó không phải một bảng có cấu trúc đơn lẻ, mà là một trạng thái phức hợp trải qua luồng event, file object, dữ liệu quan hệ, index vector và quan hệ đồ thị. Mục tiêu của năng lực nền tảng hoá là **để lập trình viên ứng dụng xây dựng dựa trên những đối tượng dữ liệu và hợp đồng dịch vụ ổn định**, mà không phải lặp lại việc xử lý các vấn đề nền như ghép quyền, khớp state, độ trễ index, dọn vòng đời và khôi phục sự cố trong từng Agent.

### 8.7.1 Mô hình cô lập multi-tenant: vật lý, logic và theo dòng

Cô lập multi-tenant trước hết là một **năng lực ranh giới dữ liệu.** Với Agent, ranh giới này không chỉ tồn tại trong database nghiệp vụ, mà **bắt buộc phải xuyên suốt** quá trình recall memory, truy hồi tri thức, truy cập file, tìm kiếm vector, thực thi tool và quan sát vận hành. Nếu việc cô lập chỉ dừng ở điều kiện truy vấn của bảng nghiệp vụ, Agent vẫn có thể chạm tới thông tin không được phép qua index dùng chung, cache hit, link sản phẩm hay việc truy hồi log.

Một mô hình multi-tenant đầy đủ thường phải phủ **tổ chức, workspace, Agent, người dùng, Task và execution (instance chạy).** Tổ chức định nghĩa ranh giới nghiệp vụ và tuân thủ; workspace gánh phần cộng tác nhóm và tài sản dùng chung; Agent định nghĩa phạm vi truy cập của một vai trò thông minh cụ thể; người dùng quyết định chủ thể tương tác và uỷ quyền; **Task** là nhiệm vụ logic gánh mục tiêu nghiệp vụ, state có thẩm quyền và tiêu chí thành công, tồn tại liên tục xuyên các giai đoạn phiên, chờ và khôi phục; còn **execution** thì biểu thị một instance thực thi cụ thể. Nền tảng nên ánh xạ những ranh giới định danh này thành một context **truyền được và kiểm chứng được**, khiến mỗi lần đọc ghi, truy hồi và thực thi đều mang theo thông tin quy thuộc rõ ràng.

Chiến lược cô lập có thể chia ba mức theo độ nhạy nghiệp vụ và quy mô. **Cô lập vật lý** hướng tới dữ liệu chịu giám sát chặt, nhạy cảm cao và môi trường riêng cho khách hàng quan trọng, dùng kho lưu trữ hoặc pool tài nguyên độc lập; ranh giới rõ ràng, cường độ cô lập cao nhất. **Cô lập logic** phù hợp với phần lớn không gian nghiệp vụ cấp doanh nghiệp, phân ranh giới qua database riêng, Schema, namespace index hay thư mục object. **Cô lập theo dòng (row-level)** hướng tới dịch vụ dùng chung quy mô lớn và cộng tác hạt mịn, thực thi kiểm soát truy cập theo tenant, vai trò, người dùng và nhãn dữ liệu ngay trong một dịch vụ dữ liệu thống nhất.

Ba cách này **không loại trừ nhau.** Một nền tảng thực tế thường dùng tổ hợp phân tầng: nghiệp vụ nhạy cảm cao dùng không gian vật lý hoặc logic riêng; dữ liệu cộng tác thông thường dùng cô lập logic trên hạ tầng dùng chung; còn thành viên dự án, vai trò và phân loại dữ liệu hạt mịn thì ràng buộc bằng policy theo dòng. Cách này vừa bảo đảm cường độ cô lập, vừa tránh việc mọi nghiệp vụ đều dùng tài nguyên riêng gây mất cân bằng chi phí.

Với các dữ liệu ngữ nghĩa như vector và đồ thị, việc cô lập còn phải đặc biệt chú ý tới **lọc trước khi truy hồi.** Truy vấn dữ liệu truyền thống có thể phán định quyền lúc trả kết quả; nhưng nếu truy hồi ngữ nghĩa recall xuyên tenant trước rồi mới lọc kết quả, thì có thể đã đưa vào rủi ro lộ dữ liệu ngay ở khâu sinh ứng viên. Vì vậy, nền tảng nên đẩy ràng buộc tenant và quyền hạn lên trước, vào trong không gian index, điều kiện truy hồi và chiến lược rerank, để Agent chỉ recall trong không gian ngữ nghĩa đã được uỷ quyền.

Nhìn xa hơn, cô lập multi-tenant không chỉ bảo vệ dữ liệu, mà còn bảo vệ **ranh giới hành vi** của Agent. Sở thích, memory và luật của các tenant khác nhau không được ảnh hưởng lẫn nhau chỉ vì dùng chung lời gọi model hay chuỗi tool. Một năng lực cô lập đáng tin giúp doanh nghiệp triển khai Agent ở quy mô trên một nền tảng thống nhất mà vẫn giữ được quyền kiểm soát của từng tổ chức đối với dữ liệu, policy và kết quả hành vi của mình.

### 8.7.2 Tính nhất quán giữa các component lưu trữ: ghi, index và read replica

Một lần chạy của Agent thường sinh ra nhiều thay đổi dữ liệu cùng lúc: event log ghi quá trình, checkpoint lưu state khôi phục được, workspace sinh file, dịch vụ memory trích kinh nghiệm, kho tri thức cập nhật index, tầng ontology bổ sung quan hệ đối tượng. Cơ chế lưu trữ và nhịp cập nhật của chúng không giống nhau, nên **không thể định nghĩa tính nhất quán một cách đơn giản là "mọi component cùng thành công".**

Mục tiêu hợp lý hơn là **định nghĩa mức nhất quán tương ứng cho từng loại đối tượng dữ liệu.** Với trạng thái runtime ảnh hưởng tới tính đúng đắn của task — ví dụ execution lease, kết quả xác nhận của hệ thống thanh toán, kết quả gọi tool và các checkpoint then chốt — hãy đặt mục tiêu nhất quán mạnh hoặc commit kiểm chứng được. Còn với các dữ liệu phái sinh như index vector, truy hồi toàn văn, tổng hợp thống kê thì có thể chấp nhận nhất quán cuối cùng trong thời gian ngắn, nhưng **bắt buộc phải cho hệ thống biết rõ độ tươi của chúng và version dữ liệu nguồn tương ứng.**

Nền tảng nên phân biệt **sự thật có thẩm quyền** với **view phái sinh.** Event log, metadata đối tượng, bản ghi state then chốt thường có thể xem là vật mang vật chất hoá của sự thật có thẩm quyền — thẩm quyền ngữ nghĩa của chúng do ứng dụng nghiệp vụ, mô hình task và component sinh ra sự thật định nghĩa, còn tầng lưu trữ lo việc commit và vật chất hoá đáng tin. Index vector, phép chiếu đồ thị, cache và read replica thì là những năng lực phái sinh dựng trên sự thật có thẩm quyền. Khi ghi: trước hết bảo đảm sự thật có thẩm quyền được commit đáng tin, rồi mới dùng cơ chế bất đồng bộ hay tăng dần để đẩy việc cập nhật index và bản sao. Khi đọc: Agent chọn đọc state có thẩm quyền mới nhất, hoặc chọn view phái sinh hiệu năng cao hơn nhưng có thể trễ nhẹ, tuỳ mức quan trọng của task.

Mô hình này tránh được việc mở rộng transaction phân tán xuyên component ra mọi thao tác. Với những quy trình phức tạp cần phối hợp xuyên component, nền tảng có thể quản lý việc đẩy state bằng định danh idempotent, số version, mực nước commit và cơ chế bù trừ. Ví dụ, một lần cập nhật tài liệu tri thức có thể sinh version tài liệu mới trước, rồi kích hoạt việc parse, cắt mảnh, vector hoá và dựng index; chỉ khi index mới đạt mực nước dùng được thì traffic truy vấn mới chuyển sang version mới. Nếu bước giữa thất bại, hệ thống có thể phát lại task hoặc lùi về version cũ đã kiểm chứng, **chứ không để Agent phán đoán trên dữ liệu không đầy đủ.**

Với Agent, tính nhất quán còn có nghĩa là **khả năng giải thích của câu trả lời.** Khi Agent dùng memory, knowledge hay ontology để suy luận, nền tảng nên gán nhãn được version đối tượng, thời điểm index và nguồn dữ liệu mà kết quả tham chiếu. Nhờ vậy, khi nhân sự nghiệp vụ phát hiện đáp án lỗi thời hay kết luận bất thường, họ phán định được vấn đề đến từ suy luận model, từ việc dữ liệu nguồn đã cập nhật, hay từ việc index chưa đồng bộ — **thay vì quy mọi bất định về "ảo giác model".**

### 8.7.3 Quản lý metadata thống nhất: danh mục đối tượng, lineage, version và gắn policy

Các đối tượng dữ liệu của Agent nhiều về số lượng, khác nhau về hình thái, và cập nhật thường xuyên. Không có quản lý metadata thống nhất, doanh nghiệp sẽ nhanh chóng rơi vào cảnh **biết dữ liệu tồn tại nhưng không biết ai tạo ra, ai dùng, và còn hiệu lực hay không.** Vai trò của tầng metadata thống nhất chính là tổ chức các đối tượng dữ liệu rải rác trong các component lưu trữ khác nhau thành một **danh mục tài sản khám phá được, hiểu được, quản trị được.**

Với mỗi đối tượng, metadata ít nhất phải mô tả: loại đối tượng và định danh duy nhất, tenant và workspace sở hữu, chủ thể tạo, hệ thống nguồn, tóm tắt nội dung, mức nhạy cảm, version, vị trí lưu trữ, policy truy cập, trạng thái vòng đời, và quan hệ liên kết với các đối tượng khác. Ví dụ, một memory dài hạn phải lần ngược được tới cuộc hội thoại hay sự kiện hành vi nguồn; một mảnh tri thức phải liên kết được tới tài liệu gốc cùng version của nó; một quan hệ ontology phải nói được dữ liệu nguồn, luật mô hình hoá và phạm vi hiệu lực của nó.

Trên nền đó, **lineage** biến một danh mục tĩnh thành năng lực quản trị động. Nó ghi lại một kết luận đến từ đâu, đã qua những xử lý nào, được Agent nào dùng. Khi tài liệu nguồn cập nhật, policy quyền thay đổi hay luật nghiệp vụ điều chỉnh, nền tảng nhận diện được index vector, quan hệ đồ thị, bản tóm tắt memory và task hạ nguồn bị ảnh hưởng, rồi kích hoạt việc tính lại, xử lý hết hiệu lực hoặc đưa cho con người rà soát. Kiểu lan truyền này nên được thiết kế như một **cơ chế tham chiếu**: việc xoá dữ liệu xuyên hệ thống chưa chắc lan truyền đồng bộ được, còn các bản ghi giữ theo luật và bản ghi audit bất biến thì **không** nên bị dọn tự động — cần chừa policy ngoại lệ tường minh cho chúng.

Policy cũng nên được **gắn với metadata**, thay vì nằm rải rác trong code nghiệp vụ của từng ứng dụng. Kiểm soát truy cập, thời hạn lưu giữ, yêu cầu về vùng địa lý, luật ẩn danh, yêu cầu phê duyệt và chính sách xoá đều nên được khai báo như thuộc tính quản trị của đối tượng hay lớp đối tượng. Khi một Agent xin đọc dữ liệu, nền tảng kết hợp định danh bên gọi, metadata đối tượng và luật policy để phán định; còn khi đối tượng vào giai đoạn archive hay xoá, thì index, cache và view phái sinh liên quan cũng dọn được đồng bộ.

Metadata thống nhất còn mang lại cho Agent một năng lực hiểu mới. Nó không chỉ giúp nhân sự vận hành quản lý dữ liệu, mà còn giúp Agent — trong phạm vi được uỷ quyền — hiểu được có những nguồn dữ liệu đáng tin nào, thông tin nào mới hơn, kết luận nào cần dùng thận trọng. Theo nghĩa đó, **metadata vừa là ngôn ngữ quản trị của nền tảng, vừa là context quan trọng khi Agent tiêu thụ dữ liệu doanh nghiệp.**

### 8.7.4 Quản trị chi phí: phân tầng nóng–lạnh, thời hạn lưu giữ và chính sách vòng đời

Sự tăng trưởng dữ liệu của hệ thống Agent mang tính tích luỹ rõ rệt. Một cuộc hội thoại có thể sinh ra nhiều lượt event, nhiều sản phẩm trung gian và một số memory ứng viên; một lần cập nhật tri thức có thể kéo theo bản gốc, kết quả parse, các mảnh, vector, quan hệ đồ thị và nhiều version. Nếu chỉ nhấn mạnh việc giữ lại nhiều context hơn mà thiếu quản trị vòng đời, thì chi phí lưu trữ và index sẽ phình nhanh theo quy mô sử dụng Agent, đồng thời dần kéo chậm chất lượng truy hồi và hiệu quả vận hành.

**Nguyên tắc đầu tiên của quản trị chi phí là phân tầng theo giá trị dữ liệu chứ không theo loại kỹ thuật.** Trạng thái task đang chạy gần đây, tri thức hot và memory được gọi tần suất cao cần truy cập độ trễ thấp; còn event của task đã hoàn thành, tài liệu tham khảo tần suất thấp và version lịch sử thì có thể chuyển sang tầng ấm–lạnh chi phí thấp hơn; nội dung thoả yêu cầu audit nhưng gần như không còn được nghiệp vụ truy cập thì phù hợp với kho archive. Phân tầng nóng–lạnh như vậy **không** đơn giản là chuyển dữ liệu cũ đi chỗ khác, mà là xác định vị trí đúng cho dữ liệu dựa trên tần suất truy cập, giá trị nghiệp vụ, yêu cầu tuân thủ và chi phí khôi phục.

**Nguyên tắc thứ hai là biến thời hạn lưu giữ thành một policy tường minh.** Logic lưu giữ của các đối tượng khác nhau không giống nhau: state tạm lúc chạy có thể dọn nhanh sau khi task xong; checkpoint cần giữ tới hết cửa sổ khôi phục được; memory người dùng phải hỗ trợ cập nhật, thu hồi và xoá chủ động; còn các version lịch sử của tài liệu tri thức thì có thể phải lưu lâu dài vì audit hoặc truy vết nghiệp vụ. Nền tảng nên gắn những luật này với loại đối tượng, phân loại dữ liệu và policy tenant, rồi tự động thực hiện việc archive khi hết hạn, vô hiệu hoá index và xoá an toàn.

**Nguyên tắc thứ ba là giảm sao chép vô ích.** Việc gia công dữ liệu hướng Agent thường tạo ra nhiều tầng bản sao, nên cần kiểm soát quy mô phái sinh bằng khử trùng nội dung, index tăng dần, nén tóm tắt, phát hiện hết hiệu lực và vật chất hoá theo nhu cầu. Đặc biệt, bộ nhớ dài hạn và nội dung đa phương thức **không nên** tích luỹ vô hạn chỉ vì "biết đâu sau này có ích"; nền tảng cần định kỳ đánh giá giá trị truy cập, tính thời sự và độ tin cậy của chúng, để hệ thống memory có được năng lực **quên đi ở mức vừa phải.**

Quản trị chi phí cuối cùng cũng phải quay về góc nhìn nghiệp vụ. Nền tảng cần thống kê được mức tiêu hao tài nguyên theo tenant, workspace, Agent, loại task và đối tượng dữ liệu, giúp doanh nghiệp nhận diện các bối cảnh giá trị cao và những chỗ tiêu hao bất thường. Ví dụ, chi phí của một Agent nào đó tăng lên rốt cuộc là do gọi model, do dựng lại index quá thường xuyên, do giữ workspace quá mức, hay do sao chép xuyên vùng không cần thiết. **Chỉ khi chi phí quy kết được, doanh nghiệp mới tối ưu liên tục được giữa trải nghiệm, hiệu năng, tuân thủ và mức đầu tư.**

### 8.7.5 Lựa chọn kho lưu trữ: tổ hợp component hay Agent Database

Việc tự tổ hợp database giao dịch, object storage, dịch vụ truy hồi và đồ thị cho phép tái dùng hạ tầng sẵn có và mở rộng riêng theo từng workload; cái giá là **ứng dụng hoặc nền tảng phải tự duy trì các hợp đồng về định danh, version, cập nhật và khôi phục xuyên component.** Còn một **Agent Database** nhất thể thì cố gắng hội tụ những hợp đồng đó vào một dịch vụ thống nhất, giảm việc tích hợp lặp lại, đồng thời làm tăng sự phụ thuộc vào năng lực sản phẩm, đường di trú và ranh giới sự cố.

Kiến trúc tham chiếu của Lakebase tổ chức trạng thái vận hành, workspace, memory, knowledge và ontology thành các đối tượng dữ liệu thống nhất. Khi lựa chọn, hãy kiểm chứng từng đối tượng theo các mục trên: state then chốt có commit nguyên tử được không, tham chiếu sản phẩm có ổn định không, việc thu hồi quyền với knowledge và memory có kịp thời không, các tầng có backup và khôi phục độc lập được không, và dữ liệu có export trọn vẹn được không. **Interface thống nhất không có nghĩa tầng dưới chỉ có một engine, và cũng không đồng nghĩa với việc mọi đối tượng tự động nhận được cùng một mức bảo đảm.**

Doanh nghiệp có thể xuất phát từ hạ tầng sẵn có và workload chính của mình để so sánh chi phí tích hợp, bảo đảm về tính đúng đắn, chi phí vận hành và chi phí di trú. Dù chọn tổ hợp component hay dịch vụ nhất thể, **việc nghiệm thu đều phải rơi vào các task thật và các kịch bản sự cố, chứ không phải vào tên sản phẩm.**

Lakebase chọn hướng nhất thể: dùng một mô hình đối tượng, interface dịch vụ và mặt phẳng điều khiển quản trị thống nhất để tổ chức trạng thái vận hành, workspace, memory, knowledge và ontology thành các đối tượng dữ liệu quản trị thống nhất được, cung cấp hợp đồng nhất quán về định danh, version, quyền hạn, vòng đời và tính khả dụng. Chữ "thống nhất" ở đây chỉ **mô hình dữ liệu và giao diện quản trị**, chứ không phải một engine nền duy nhất — các đối tượng dữ liệu khác nhau vẫn dùng vật mang phù hợp riêng. Với những đội có workload cốt lõi là tiếp tục task, lưu giữ thành quả và quản trị tài sản ngữ nghĩa, cách này giảm được chi phí tích hợp và vận hành; còn với các bối cảnh chủ yếu là tương tác phiên ngắn thì tổ hợp component vẫn là lựa chọn hợp lý.

### 8.7.6 Tính sẵn sàng cao và chịu thảm hoạ: backup, xuyên vùng và mục tiêu khôi phục

Tính sẵn sàng cao của Agent **không thể chỉ hiểu là instance database không sập.** Một Agent thực sự khôi phục được thì phải khôi phục đồng thời trạng thái task, context thực thi, tham chiếu workspace, các sản phẩm then chốt, ranh giới quyền hạn và tiến độ gọi tool bên ngoài. Nếu chỉ khôi phục dữ liệu tầng dưới mà không phán định được một lời gọi tool đã hoàn tất chưa, một lease còn hiệu lực không, thì sau khi khôi phục hệ thống có thể lặp lại các thao tác rủi ro cao, hoặc mất đi kết luận nghiệp vụ đã hình thành.

Vì vậy, tính sẵn sàng cao và chịu thảm hoạ trước hết phải **định nghĩa mục tiêu khôi phục theo từng đối tượng dữ liệu.** Event runtime và checkpoint then chốt thường cần RPO thấp hơn, để giảm mất mát state sau khi task gián đoạn; workspace và sản phẩm cần bảo đảm version truy nguyên được và tham chiếu không hỏng; còn bộ nhớ dài hạn và index tri thức thì cần phân biệt **dữ liệu nguồn có thẩm quyền** với **dữ liệu phái sinh dựng lại được**, để sau thảm hoạ có thể ưu tiên khôi phục tính đúng đắn nghiệp vụ trước, rồi dần khôi phục hiệu năng truy hồi.

Nền tảng nên thiết lập RPO và RTO rõ ràng cho từng loại đối tượng, và gắn chúng với mức nghiệp vụ. Với các Agent nghiệp vụ trọng yếu, mục tiêu khôi phục không chỉ gồm tính toàn vẹn dữ liệu, mà còn gồm **khả năng nối tiếp task**: hệ thống phải định vị được event đã xác nhận cuối cùng, nạp checkpoint tương ứng, kiểm chứng execution lease và định danh idempotent, xác nhận trạng thái lời gọi bên ngoài, rồi mới quyết định tiếp tục thực thi, retry, bù trừ hay chuyển cho con người. Chỉ một quy trình khôi phục như vậy mới tránh được tình trạng **"dữ liệu đã khôi phục nhưng nghiệp vụ thì đã trùng hoặc loạn".**

Triển khai xuyên vùng và chính sách backup cũng nên thiết kế quanh tính liên tục nghiệp vụ. State then chốt phải có bảo vệ đa bản sao hoặc xuyên vùng; các sản phẩm và metadata quan trọng phải hỗ trợ backup bất biến và đối chiếu định kỳ; còn kho tri thức, index vector và phép chiếu đồ thị thì phải giữ đủ dữ liệu nguồn cùng bản ghi quá trình dựng, để sinh lại được khi cần. Với các Agent phụ thuộc nguồn dữ liệu bên ngoài, còn phải làm rõ phạm vi hạ cấp khi hệ thống nguồn không khả dụng, **tránh đóng gói thông tin lỗi thời hoặc không đầy đủ thành kết luận chắc nịch.**

Cuối cùng, **năng lực chịu thảm hoạ bắt buộc phải được diễn tập liên tục.** Doanh nghiệp cần định kỳ kiểm chứng: một Agent đang chạy có chuyển được khi vùng chính không khả dụng không; một index hỏng có dựng lại được từ dữ liệu nguồn không; một memory hay sản phẩm bị xoá nhầm có khôi phục được trong ranh giới quyền hạn không; một task xuyên component có giữ được tính idempotent và truy nguyên sau khi khôi phục không. Chỉ khi những năng lực đó thực sự được kiểm chứng, **độ tin cậy của Agent mới không còn chỉ là lời hứa trên sơ đồ kiến trúc.**

Việc kiểm chứng khôi phục phía lưu trữ cần liên động với các buổi diễn tập sự cố của Runtime: ngoài việc dữ liệu đọc được, còn phải xác nhận rằng con trỏ state, version workspace, phần uỷ quyền và bản ghi thao tác bên ngoài **cùng nhau hỗ trợ được việc tiếp tục task.**

## Tóm tắt chương

Kho lưu trạng thái Agent cần đồng thời hỗ trợ việc tiếp tục task, lưu giữ thành quả và tái dùng tài sản ngữ nghĩa. Trạng thái vận hành duy trì các sự thật khôi phục được qua event, checkpoint và version; workspace lưu thành quả qua snapshot và tham chiếu sản phẩm; còn memory, knowledge và ontology thì lần lượt quản lý kinh nghiệm, tài liệu bên ngoài và quan hệ nghiệp vụ.

**Phân tầng vật mang và quản trị thống nhất phải cùng thành lập.** Các đối tượng có thể dùng engine khác nhau, nhưng định danh, version, nguồn, quyền hạn và vòng đời thì bắt buộc phải liên kết được. Khi khôi phục, thứ cần kiểm chứng không chỉ là dữ liệu có tồn tại hay không, mà còn là những đối tượng đó có cùng nhau hỗ trợ được việc thực thi tiếp một cách đúng đắn hay không. Các chương khác của phần Vận hành dựa trên đó để quản lý môi trường thực thi, lập lịch task và tổ chức cộng tác; còn phần Quản trị thì bàn tiếp về việc quan sát toàn chuỗi và chính sách bảo mật.
