# PatchPilot Agents: biến việc bàn giao patch kernel thành một vòng khép kín kỹ thuật orchestration được và kiểm chứng được

## 1. Vì sao cần PatchPilot

Khi một patch upstream đi vào version sản phẩm downstream, nguyên nhân thất bại thường không phải một xung đột Git đơn lẻ: cùng một hàm có thể đã bị refactor, trường của struct hay chữ ký hàm có thể đã tiến hoá, và các commit tiền đề mà bản sửa phụ thuộc cũng có thể chưa vào nhánh đích. Quy trình truyền thống dựa vào việc kỹ sư kernel đọc từng log, định vị xung đột, bù phụ thuộc, sửa code rồi kiểm chứng đi kiểm chứng lại. Khi quy mô task tăng lên, chất lượng bàn giao dễ phụ thuộc vào kinh nghiệm của một số ít chuyên gia, và quá trình xử lý cũng khó soát lại.

Cái khó không nằm ở chỗ "có sinh ra được một đoạn sửa hay không", mà ở chỗ: **có làm cho một lần bàn giao patch có được quá trình truy vết được, kết quả kiểm chứng được và cơ chế tối ưu bền vững hay không.**

PatchPilot tổ chức quá trình này thành một workflow nhiều giai đoạn: bắt đầu từ lấy patch, phân loại xung đột và hiểu ý định, qua phân luồng theo tính khả thi, phân tích phụ thuộc, giải xung đột bằng AI và soát ngữ nghĩa, cuối cùng vào phần kiểm lại khi bàn giao. Mỗi giai đoạn đều có input, sản phẩm và trạng thái rõ ràng, giúp các task phức tạp quan sát được, tạm dừng được, khôi phục được và soát lại được.

![agent-delivery-loop.svg](../../assets/imgs/chapter-25/image-007.svg)

---

## 2. Cách làm việc của PatchPilot

PatchPilot không coi model lớn là một "cỗ máy sinh code vạn năng", mà đặt nó vào một quy trình kỹ thuật có input, ranh giới và phần kiểm tra rõ ràng.

| Cơ chế | Thực hành kỹ thuật | Giá trị mang lại |
| --- | --- | --- |
| **Phân luồng theo tính khả thi** | Đánh giá nhanh bằng luật heuristic trước, rồi chỉ gọi LLM phán định tinh với các task còn mơ hồ | Dồn tài nguyên suy luận đắt đỏ vào đúng những vấn đề thực sự phức tạp |
| **Phân tích phụ thuộc** | Kết hợp ý định của patch, trạng thái code và các commit tiền đề để nhận diện đệ quy các phụ thuộc cần thiết | Tránh việc chỉ vá theo symbol còn thiếu khiến chuỗi phụ thuộc phình ra |
| **Giải xung đột bằng AI** | Suy luận theo từng hunk, giữ lại phương án, nguyên nhân thất bại và phạm vi thay đổi của mỗi vòng | Giúp lần thử sau né được những đường đã kiểm chứng là vô hiệu |
| **Gác chất lượng** | Kiểm phần dấu xung đột còn sót, phần code trôi và độ lệch ngữ nghĩa | Không phán nhầm "merge được" thành "bàn giao được" |
| **Cộng tác người – máy** | Task có bằng chứng đầy đủ và rủi ro kiểm soát được thì xử lý tự động; task bất định hay rủi ro cao thì nâng lên cho kỹ sư | Vừa giữ hiệu suất tự động hoá, vừa giữ ranh giới trách nhiệm kỹ thuật |

---

## 3. Ba thực hành

### Thực hành một: tự động phân luồng các task thất bại

**Vấn đề**: một lần merge thất bại có thể do thiếu phụ thuộc, do context thay đổi, hoặc do xung đột code thật. Việc con người phán định trước "có đáng sửa không, sửa được không" tự nó đã ngốn rất nhiều thời gian.

Cách làm: PatchPilot dùng luật heuristic đánh giá nhanh quy mô xung đột, symbol còn thiếu, các thay đổi nguy hiểm và độ phức tạp của patch trước; chỉ những task rơi vào vùng mơ hồ mới giao cho LLM phán định tiếp. Nhờ vậy hình thành một phễu hai tầng "sàng nhanh + phán tinh": task rõ ràng thì đẩy nhanh, còn task phức tạp thì mới đầu tư phân tích sâu.

Điểm then chốt: tự động hoá không phải tự trị vô biên. Hệ thống đưa phán định "có xử lý tự động không" lên trước, và đặt lối nâng lên cho con người với những thay đổi rủi ro cao. Nhờ đó, Agent tập trung vào phần việc chắc chắn cao và kiểm chứng được; còn kỹ sư thì tập trung xử lý những vấn đề thực sự cần kinh nghiệm như khác biệt kiến trúc, đánh đổi ngữ nghĩa và quyết định về rủi ro.

### Thực hành hai: tránh kiểu giải xung đột bằng AI "trông như thành công"

**Vấn đề**: giải xong xung đột Git không đồng nghĩa với việc giữ được ý định của patch gốc. AI có thể để sót dấu xung đột, bỏ mất phần thay đổi then chốt, thậm chí sinh ra code không tồn tại ở upstream.

Cách làm: trước khi giải xung đột, hệ thống đối chiếu ý định của patch trước, và lần theo phụ thuộc dựa trên manh mối "trạng thái code lệch" chứ không thuần tuý là symbol còn thiếu: sự tiến hoá của phần hiện thực hàm, trường struct và chữ ký hàm đều được đưa vào phán định. Sau khi thực thi thì lần lượt kiểm phần xung đột còn sót, phần code trôi và độ lệch ngữ nghĩa.

Điểm then chốt: mỗi vòng thử của Agent đều ghi lại phương án xử lý, nguyên nhân thất bại và phạm vi thay đổi; lần retry sau mang theo phần memory có cấu trúc đó mà tiếp tục, chứ không lặp lại đúng một đường vô hiệu. Các commit phụ thuộc bắt buộc phải do tool Git liệt kê chính xác, tránh việc model theo trực giác mà bịa ra những thay đổi tiền đề không tồn tại.

### Thực hành ba: định nghĩa thành công bằng việc bàn giao đầu-cuối

**Vấn đề**: một vòng thành công rồi thì vẫn có thể thất bại ở PR, ở vòng kiểm tra hay ở chuỗi về sau. Chỉ thống kê "lệnh chạy thành công" sẽ đánh giá quá cao giá trị của tự động hoá.

Cách làm: sau khi một vòng thành công thì tự động tạo vòng kiểm tra, PR kiểm lại và trạng thái bàn giao, đồng thời liên kết thống nhất task, log, kết luận soát và sản phẩm cuối. Phía điều phối thì quản lý việc thực thi và khôi phục bằng trạng thái task lưu bền, khiến việc gián đoạn bất thường không làm task âm thầm biến mất.

Điểm then chốt: PatchPilot đo hiệu quả bằng "có hoàn tất việc bàn giao không" chứ không phải "có hoàn tất một lần thực thi không". Trạng thái của task từ lúc vào hàng đợi tới lúc PR được merge được ghi lại liên tục; khi việc thực thi bị gián đoạn, timeout hay có bất thường, hệ thống dựa trên trạng thái lưu bền mà khôi phục hay lập lịch lại, chứ không để task nằm lại ở một trạng thái trung gian không nhìn thấy được.

### Cơ chế kỹ thuật: làm cho phần suy luận của Agent kiểm soát được và kiểm chứng được

Trọng tâm kỹ thuật của PatchPilot không phải là để model "viết được nhiều code hơn", mà là ràng buộc năng lực model trong một ranh giới kỹ thuật kiểm chứng được. Nó thu hẹp phạm vi quan tâm bằng phân tích ý định, cung cấp sự thật truy vết được qua tool Git, và nối phần phân tích, thực thi cùng kiểm lại bằng state machine của workflow.

| Cơ chế kỹ thuật | Vấn đề kỹ thuật được giải | Điểm thiết kế |
| --- | --- | --- |
| Phân tích phụ thuộc State-First | Chỉ tìm symbol còn thiếu sẽ bỏ sót các xung đột thật do code tiến hoá gây ra | So sánh độ lệch trạng thái của hàm, struct và chữ ký, rồi mới định vị các commit tiền đề cần thiết |
| Suy luận bị ràng buộc bởi tool | LLM có thể ước lượng theo kinh nghiệm hay bịa ra phụ thuộc | Yêu cầu liệt kê commit SHA qua lệnh Git, lấy output của tool làm căn cứ sự thật |
| Memory thất bại có cấu trúc | Nhiều vòng thử dễ lặp lại cùng một ngõ cụt | Lưu phương án, nguyên nhân thất bại và phạm vi thay đổi, để dẫn dắt vòng thử sau đi hướng khác |

Nhờ vậy, Agent của PatchPilot không chỉ "đưa ra đề xuất", mà tham gia vào quyết định kỹ thuật bằng một chuỗi bằng chứng soát lại được: mỗi kết luận tự động đều ứng được về trạng thái task, sự thật Git hay kết quả kiểm chất lượng.

### Bảo đảm vận hành: để tự động hoá chạy ổn định lâu dài

Hướng tới nhiều version kernel và lượng lớn patch, độ tin cậy của Agent không chỉ phụ thuộc vào hiệu quả model, mà còn phụ thuộc vào việc hệ task có khôi phục được không. PatchPilot liên tục kết tinh trạng thái task, sản phẩm thực thi và kết quả soát; rồi qua việc khử trùng lặp, khôi phục lịch và xử lý timeout mà tránh cho việc thực thi lặp, gián đoạn bất thường hay bỏ sót task ảnh hưởng tới nhịp bàn giao tổng thể.

Điều này cũng có nghĩa là đối tượng tối ưu của hệ thống không chỉ là "một lần giải xung đột có thành công không", mà còn gồm thông lượng task, tính nhìn thấy được của thất bại và độ ổn định của chuỗi bàn giao. Năng lực model, phần orchestration workflow và phần bảo đảm vận hành cùng tạo thành hạ tầng hiệu suất R&D mở rộng quy mô được.

---

## 4. Kết quả thực hành từng chặng

![practice-results.svg](../../assets/imgs/chapter-25/image-008.svg)

Giá trị của PatchPilot Agents không chỉ đến từ việc "đã dùng LLM", mà đến từ việc tổ hợp **luật nhẹ, suy luận đắt, kiểm chất lượng và điều phối kiểm lại** thành một hệ thống chạy được ở quy mô lớn.

---

## 5. Phương pháp luận tái dùng được

1. **Bắt đầu từ những vấn đề tần suất cao, bằng chứng đầy đủ.** Hãy ưu tiên các kịch bản có input rõ ràng như log, code, trạng thái task, chứ đừng theo đuổi quyết định hoàn toàn tự động ngay từ đầu.

2. **Dựng workflow trước, rồi mới đưa Agent vào.** Một Agent không có trạng thái, context và phần kiểm lại thì khó chạy ổn định trong kỹ thuật production.

3. **Ràng buộc phần sinh bằng cổng chất lượng.** Với mỗi hành động tự động, hãy định nghĩa kết quả kiểm chứng được và điều kiện nâng lên cho con người.

4. **Đo giá trị bằng kết quả đầu-cuối.** Hãy quan sát đồng thời hiệu suất, chi phí, tỉ lệ bàn giao, tỉ lệ nâng lên cho con người và tỉ lệ làm lại, tránh chỉ nhìn tỉ lệ thành công ở một điểm.

5. **Biến thất bại thành tài sản.** Hãy kết tinh có cấu trúc nguyên nhân thất bại, quá trình thử và quyết định của con người, rồi liên tục nuôi ngược lại luật, prompt và phần đánh giá.

---

## Lời kết

PatchPilot trình bày một hướng đi Agent cho các task kỹ thuật phức tạp: không dựa vào một "câu trả lời thông minh" duy nhất, mà dùng orchestration workflow để gánh quá trình, dùng tool và bằng chứng để ràng buộc suy luận, dùng cổng chất lượng để kiểm soát rủi ro, và dùng cộng tác người – máy để hoàn tất việc bàn giao.

Bộ phương pháp này cũng áp dụng được cho các kịch bản di chuyển code như nâng cấp SDK qua version lớn, port xuyên nhánh hay đồng bộ fork.
