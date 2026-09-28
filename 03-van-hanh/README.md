# Dẫn nhập phần Vận hành

Khi Agent đã xây xong và bắt đầu cung cấp dịch vụ ra bên ngoài, ta cần thiết kế môi trường vận hành từ các góc độ: độ ổn định, bảo mật, hiệu năng và chi phí.

Một Agent chạy thông trong môi trường phát triển và một Agent phục vụ ở quy mô lớn phải trả lời những câu hỏi hoàn toàn khác nhau. Cái trước chỉ cần đi hết được logic trong một phiên. Cái sau phải trả lời: nó thực thi trong môi trường nào, state nằm ở đâu, traffic vào ra thế nào, task kéo dài vượt qua ranh giới request và process thì bền vững hoá ra sao, và khi nhiều Agent cùng làm việc thì phối hợp cùng giao tiếp thế nào.

Những câu hỏi này cũng tồn tại ở giai đoạn phát triển; khác biệt là quy mô đã che lấp cái giá của chúng. State không được đưa ra ngoài — khi một người debug thì chỉ là chạy lại một lần, nhưng dưới tải đồng thời ở production nó trở thành mất task, thực thi lặp và không truy nguyên được. Một Agent chỉ một người truy cập, so với một Agent phục vụ hàng nghìn hàng vạn người dùng, khác nhau hoàn toàn về cả yêu cầu nghiệp vụ lẫn độ phức tạp kỹ thuật. Phần Vận hành xử lý đúng phần độ phức tạp do môi trường doanh nghiệp và quy mô người dùng sinh ra; nó đồng thời quyết định hệ thống có chạy tin cậy được hay không trên cả bốn chiều: ổn định, bảo mật, hiệu năng và chi phí.

Sáu chương của phần Vận hành triển khai theo hai trục. Trục thứ nhất là **nền móng của việc vận hành**, giải quyết chuyện một Agent chạy ổn định ra sao. Trục thứ hai là **trật tự của việc vận hành**, giải quyết chuyện nhiều Agent phối hợp chạy ra sao.

| Trục chính | Chương tương ứng | Đối tượng hoặc vấn đề vận hành | Cơ chế chính |
| --- | --- | --- | --- |
| Nền móng: Agent chạy ổn định | Chương 7 | Môi trường thực thi và runtime | Sandbox, Agent Runtime, vòng đời môi trường, đưa workspace vào nền tảng production |
|  | Chương 8 | Hiện thực hoá sự thật về task và tài sản ngữ nghĩa | Event Log, Checkpoint, snapshot workspace, Artifact, bộ nhớ dài hạn, RAG và ontology |
|  | Chương 9 | Traffic vào ra và việc quản trị | Ba ngữ nghĩa quản trị LLM, MCP, Agent của AI Gateway; định danh, quyền hạn, ngân sách, audit và phê duyệt |
| Trật tự: nhiều Agent phối hợp chạy | Chương 10 | Task chạy dài và bất đồng bộ | Ranh giới đồng bộ/bất đồng bộ, mô hình phân tầng ngữ nghĩa hoàn thành, task định kỳ và workflow |
|  | Chương 11 | Cộng tác và orchestration trong team multi-agent | Tích hợp dị chủng, topology tổ chức team, phân công task và tổng hợp kết quả, ranh giới trách nhiệm giữa tầng orchestration và hệ thống thực thi |
|  | Chương 12 | Giao tiếp phân tán giữa các Agent | Bản đồ lựa chọn cho mặt phẳng năng lực, cộng tác, nội bộ và người–máy; quản trị message |

**Trục thứ nhất xử lý chính bản thân điều kiện thực thi.** Chương 7 mở rộng việc gọi tool thành một workspace lập trình được, cho phép Agent làm việc liên tục trong cùng một không gian và tạo môi trường cho việc thăm dò song song. Chương 8 giải quyết vấn đề "gánh" state sau khi đã đưa nó ra ngoài: state runtime, workspace và sản phẩm đầu ra, memory và knowledge, ngữ nghĩa nghiệp vụ và quản trị — bốn nhóm đối tượng này có yêu cầu nhất quán khác nhau, cần hạ tầng vật lý tương ứng và một hợp đồng state thống nhất. Chương 9 hội tụ các lối vào traffic thành một điểm quản trị duy nhất, phân biệt ba ngữ nghĩa quản trị LLM, MCP và Agent, tránh trộn lẫn routing model, proxy giao thức tool và lối vào task vào cùng một tầng.

**Trục thứ hai xử lý trật tự phối hợp.** Chương 10 vạch ranh giới giữa đồng bộ và bất đồng bộ, đồng thời đưa ra mô hình phân tầng cho ngữ nghĩa hoàn thành task, tránh việc coi process kết thúc là task hoàn thành. Chương 11 bàn về việc các Agent dị chủng gia nhập cùng một team ra sao, và trách nhiệm giữa tầng orchestration với hệ thống thực thi được phân chia thế nào. Chương 12 đưa ra bản đồ lựa chọn giao tiếp theo bốn mặt phẳng — năng lực, cộng tác, nội bộ và người–máy — đưa việc chọn giao thức trở về đúng bản chất: một phán đoán hướng theo ngữ nghĩa tương tác.

Hai trục có quan hệ tiệm tiến: **nếu từng Agent đơn lẻ chưa chạy ổn định, thì việc phối hợp multi-agent chỉ khuếch đại sự bất định**. Môi trường thực thi ở chương 7 và lưu trữ state ở chương 8 là nền chung để hiểu các chương sau, nên đọc trước. Nếu nhiệm vụ hiện tại của bạn là đưa một Agent vào production và chạy cho ổn, hãy tập trung vào trục thứ nhất. Nếu bạn đã có Agent chạy ổn định và đang mở rộng sang hình thái bất đồng bộ, multi-agent và liên hệ thống, hãy tập trung vào trục thứ hai.
