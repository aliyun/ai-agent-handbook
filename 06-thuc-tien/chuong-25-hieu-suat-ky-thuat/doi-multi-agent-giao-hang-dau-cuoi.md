# Nhiều Agent hợp thành một đội kỹ thuật: AI R&D đi từ viết code tới bàn giao đầu-cuối

Coding Agent đang nâng tốc độ sinh code rất nhanh, nhưng một Feature từ lúc có nhu cầu tới lúc lên production còn phải đi qua việc làm rõ nhu cầu, thiết kế phương án, test, review, tích hợp và phát hành. Chỉ tối ưu phần Coding thì giống như chỉ nâng cấp một máy đơn lẻ trên dây chuyền: thông lượng cục bộ tăng lên, nhưng việc chờ đợi, bàn giao, kiểm chứng và làm lại vẫn quyết định chu kỳ tổng thể.

Vì vậy chúng tôi đổi mục tiêu từ "để Agent viết code" thành **"để một AgentTeam bàn giao kết quả"**: AgentCore tổ chức các Agent với vai trò khác nhau cộng tác, để task đi vào từ Issue, qua nghiên cứu, phương án, hiện thực, kiểm chứng, và cuối cùng cho ra PR soát được cùng bằng chứng đầy đủ; rồi AgentLoop thu thập trajectory vận hành thật để liên tục đánh giá và cải thiện chính đội kỹ thuật này.

## Một — Coding đã rất nhanh, vì sao việc bàn giao vẫn chậm?

Ước tính theo chuỗi điển hình của một Feature phức tạp trong đội, từ nhu cầu tới lên production mất khoảng 20 ngày làm việc, trong đó phần hiện thực code chiếm khoảng 2 ngày. Ngay cả khi Coding Agent nâng tốc độ viết code lên 10 lần, đưa thời gian viết code từ 2 ngày xuống 0,2 ngày, thì chu kỳ đầu-cuối cũng chỉ giảm từ 20 ngày xuống 18,2 ngày.

Lý do rất trực tiếp: R&D không phải một task sinh code, mà là một chuỗi cần nhiều người, nhiều hệ thống và nhiều vòng phán đoán cùng hoàn thành. Nhu cầu và Spec phải đối chiếu đi đối chiếu lại; phương án phải khớp với kiến trúc sẵn có; test và review phải chờ phản hồi; việc tích hợp xuyên module phụ thuộc vào môi trường; và khi phát hiện vấn đề thì còn có thể phải quay lại giai đoạn Spec, phương án hay viết code để làm lại.

Vì vậy, trọng tâm nâng hiệu suất ở bước tiếp theo không phải tiếp tục nén 0,2 ngày đó, mà là để Agent tiếp quản và nối được phần quy trình còn lại: giảm việc context bị kể đi kể lại giữa các vai, để kết quả kiểm chứng dẫn dắt thẳng bước tiếp theo, và để con người chỉ can thiệp vào phần mục tiêu, kiến trúc và phán đoán rủi ro.

## Hai — AgentTeam: tổ chức nhiều Agent thành một đội kỹ thuật

AgentTeam không phải là để nhiều Agent cùng "tự do phát huy", mà là dựng một hệ cộng tác có vai trò rõ ràng, trạng thái nhìn thấy được và sản phẩm kiểm chứng được. Chúng tôi gom 15 Agent hướng tới các công đoạn khác nhau thành một pool năng lực, với AgentCore làm Leader, điều phối theo nhu cầu dựa trên trạng thái task.

Trong đó, vài vai tiêu biểu đảm nhận các trách nhiệm khác nhau:

| **Vai** | **Trách nhiệm chính** | **Sản phẩm then chốt** |
| --- | --- | --- |
| Researcher | Hiểu nhu cầu và codebase, dựng bản đồ bằng chứng của vấn đề | Các module liên quan, ràng buộc và thay đổi trong lịch sử |
| Explorer | Tìm các hiện thực đồng cấu trúc, hình thành phương án ứng viên | Reference Anchor và phần so sánh phương án |
| Spec | Cấu trúc hoá mục tiêu, ranh giới và điều kiện nghiệm thu | Spec thực thi được |
| Code Worker | Hiện thực phương án ứng viên trong nhánh và phiên độc lập | Thay đổi code |
| Test / Harness | Biên dịch, test và kiểm chứng đầu-cuối | Bằng chứng test tái lập được |
| Judge / Verify | Độc lập chọn ứng viên tốt nhất, nghiệm thu ngữ nghĩa và soát đối kháng | Kết luận soát và phản hồi thất bại |
| Deploy | Chuẩn bị môi trường và chạy kiểm chứng phát hành | Bằng chứng phát hành và rollback |

Thứ AgentCore lo không phải một lần sinh nào đó, mà là việc vận hành của cả đội: tách task, điều phối vai, lưu trạng thái và chia sẻ context, rồi chọn bước tiếp theo theo loại thất bại. Test thất bại thì quay về đúng Code Session đó sửa tiếp; phương án sai hướng thì mang theo bằng chứng thất bại quay lại Research và Explore; còn nếu mãi không hội tụ thì kích hoạt Human Gate, mời người bổ sung phán đoán.

Input của task có thể là một Issue, cũng có thể đến từ phần con người bổ sung trong Chat; còn output thì không chỉ là code và PR, mà còn gồm báo cáo test, bằng chứng soát, trạng thái tiến độ và chỗ tắc, cùng trọn phần trajectory quan sát được. Nhờ vậy, việc bàn giao trong R&D chuyển từ "mấy người mỗi người làm một đoạn" sang "một đội liên tục đẩy tới quanh cùng một trạng thái và cùng một chuẩn nghiệm thu".

## Ba — Coding Loop: không phải sinh một lần, mà là hội tụ liên tục

Việc nhiều Agent cộng tác có đáng tin không thì mấu chốt không nằm ở số lượng Agent, mà ở cơ chế cộng tác. Chúng tôi thiết kế Coding Loop cốt lõi nhất thành hai vòng lồng nhau: **vòng trong giải quyết "code có chạy được không", vòng ngoài phán định "phương án có đúng không".**

Trước hết, Researcher dựng bản đồ bằng chứng từ nhu cầu, code và các thay đổi trong lịch sử; rồi Explorer tìm phần hiện thực giống nhất trong codebase để hình thành một hay nhiều phương án ứng viên. Các phương án khác nhau vào nhánh riêng và Code Session riêng, với Code Worker cùng Test / Harness tạo thành vòng trong: test thất bại thì giữ context sửa tiếp, cho tới khi qua được hoặc xác nhận là tắc.

Sau khi phần hiện thực ứng viên hoàn tất, Judge / Verify độc lập sẽ chọn phương án tốt nhất và kiểm chứng. Ở đây không chỉ kiểm test có qua không, mà còn phán định ngữ nghĩa nhu cầu có thoả không, có lệch khỏi kiến trúc sẵn có không, và có tồn tại vấn đề "test xanh nhưng hướng hiện thực sai" không. Kiểm chứng qua rồi mới bàn giao PR; còn khiếm khuyết ở biên thì giữ code lại để sửa tăng dần, còn sai ở mức phương án thì quay lại Research / Explore để chọn đường khác.

Loop này có bốn thiết kế then chốt:

1. **Neo vào tham chiếu**: tìm phần hiện thực đồng cấu trúc và ràng buộc kiến trúc trước, rồi mới thiết kế phương án. Code sẵn có không phải chân lý tuyệt đối, nhưng thường là tham chiếu kỹ thuật chính xác nhất và mới nhất.

2. **Tách Produce / Verify**: tác giả và Judge dùng phiên độc lập, tránh việc cùng một Agent dùng chuẩn do chính nó định nghĩa để chứng minh mình đúng.

3. **Lặp có memory**: cùng một phương án thì nối tiếp Code Session, và phần Research cũng giữ phản hồi thất bại của các vòng trước, tránh việc mỗi lần làm lại đều phải hiểu từ con số không.

4. **Kiểm chứng phân cấp**: tính đúng đắn, bảo mật và độ lệch kiến trúc thì bắt buộc phải sửa; các mục cải thiện không chặn thì ghi lại lưu hồ sơ; còn khi liên tục không hội tụ thì kịp thời chuyển cho con người.

Vì vậy, cách làm việc của AgentTeam giống một đội kỹ thuật thật hơn: có người nghiên cứu, có người hiện thực, có người soát độc lập, thất bại thì làm lại dựa trên bằng chứng — chứ không phải quăng một Prompt to cho một Agent duy nhất làm một phát cho xong.

## Bốn — Từ một lần bàn giao tới tiến hoá liên tục

AgentTeam chạy thông được một task chỉ chứng minh quy trình dùng được. Luật nghiệp vụ, code và môi trường vận hành sẽ liên tục thay đổi; và một chỉnh sửa cục bộ ở Prompt hay Skill cũng có thể làm các task khác thụt lùi. Nếu không có việc tối ưu liên tục do dữ liệu thật dẫn dắt, Agent sẽ lặp lại đúng những cái hố cũ, tiêu tốn lặp đi lặp lại, và rốt cuộc vẫn phải dựa vào con người đỡ lưng.

Vì vậy, chúng tôi dùng AgentLoop để gánh data flywheel cho AgentTeam. AgentCore lo việc chạy liên tục, AgentLoop thu thập Trace, Session và Trajectory, khôi phục lại từng bước gọi model, thực thi tool, thất bại và làm lại; rồi qua Pipeline, Dataset, Evaluation và Experiment mà chuyển các vấn đề thật thành mẫu tái lập được, chỉ số so sánh được và thí nghiệm hồi kiểm được.

Hiện có hai đường tối ưu chính:

* **Meta-Loop offline**: từ các Commit lịch sử của chuyên gia con người mà dựng ngược ra đề bài, để AgentTeam tự giải trong điều kiện không thấy đáp án; rồi so sánh Diff và trajectory thực thi để định vị vấn đề ở Skill, Tool, luồng chuyển trạng thái hay Harness, chỉnh xong thì hồi kiểm bằng chính đề đó cùng các đề holdout.

* **Experience Loop online**: Trace của task thật được báo lên tự động; từ các trajectory thành công và thất bại mà chắt ra SOP, đường gọi tool, luật sửa lỗi và anti-pattern; qua kiểm chứng nguồn gốc, ranh giới áp dụng và hiệu quả thì lần sau gặp task tương tự sẽ được gợi lại theo ngữ nghĩa và tiêm động vào context của Researcher, Explorer hay Worker.

Nhờ vậy, mỗi lần bàn giao không chỉ cho ra một phần code, mà còn để lại kinh nghiệm và tài sản kiểm chứng tái dùng được cho task sau.

## Năm — Kết quả từng chặng: chứng minh quy trình chạy thông trước, rồi mới chứng minh lợi ích ở quy mô

Hiện tại, AgentTeam này đã hoàn tất vòng khép kín từ nhu cầu tới lên production trong hai task thực tế: một là sửa vấn đề làm sạch trajectory phi chuẩn của Trace2Trajectory, và hai là thêm toán tử mới cho pipeline xử lý dữ liệu. Cả hai task đều hoàn tất phần sửa code, kiểm chứng test, soát và lên production, chứng minh chuỗi cộng tác nhiều Agent đã đi vào được quy trình R&D thật.

Trong phần hiệu chỉnh offline, chúng tôi gom tổng cộng 24 đề baseline nội bộ, trong đó 19 đề là đề mới chưa tham gia tối ưu, dùng để test mù. Sau khi đối chiếu từng đề với code của chuyên gia, kết quả là: 10 đề tương đương, 5 đề gần tương đương, 4 đề hoàn thành một phần, 0 đề sai hướng. Kết quả này cho thấy phương pháp hiện tại giúp chúng tôi phát hiện và sửa được các vấn đề mang tính cấu trúc, nhưng nó là kết quả đối chứng trên bộ đề nội bộ, không đồng nghĩa với tỉ lệ pass trong môi trường production.

Về phía bàn giao online, nhịp bàn giao của đội quan sát được trên số ít mẫu Feature hiện tại là khoảng một tuần. Vì cỡ mẫu còn nhỏ và chưa gom nhóm theo độ phức tạp task, nên con số này hợp để coi là quan sát từng chặng hơn là một kết luận phổ quát. Về sau chúng tôi sẽ tiếp tục theo dõi tỉ lệ nghiệm thu độc lập, công sức review của con người, chi phí trên mỗi lần bàn giao và số khiếm khuyết sau khi lên production, để phán định phần nâng hiệu suất có thực sự thành lập không.

Mục tiêu của AgentTeam không phải dùng Agent thay thế người làm R&D, mà là phân bổ lại sự chú ý của con người: giao phần việc thực thi được, kiểm chứng được, phát lại được cho Agent, và để phần mục tiêu, kiến trúc, rủi ro cùng quyết định cho qua cuối cùng lại cho con người. AgentCore giúp nhiều Agent làm việc như một đội, còn AgentLoop giúp đội đó liên tục cải thiện từ việc bàn giao thật. Chỉ khi vòng khép kín thực thi và data flywheel cùng được dựng lên, thì tốc độ cục bộ của Coding Agent mới có thể thực sự chuyển thành hiệu suất bàn giao đầu-cuối.
