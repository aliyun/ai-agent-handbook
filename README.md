# README

Tiếng Việt | [English](./README_EN.md) | [中文](https://github.com/aliyun/ai-agent-handbook)

# AI Agent HandBook

Bám theo vòng đời ứng dụng của Agent — kiến trúc, xây dựng, vận hành, quản trị và tối ưu — cuốn sách này tổng kết những kinh nghiệm và bài học chúng tôi rút ra trong quá trình đưa Agent vào môi trường doanh nghiệp. Nếu cuốn sách trắng này đóng góp được dù chỉ một phần nhỏ cho việc học tập cá nhân và cho việc triển khai Agent ở doanh nghiệp, đó đã là niềm vinh hạnh lớn của chúng tôi.

Xin dành tặng dự án này cho tất cả những người đồng hành đang góp sức xây dựng AI.

> **Về bản tiếng Việt.** Đây là bản dịch tiếng Việt của *AI Agent HandBook* do Alibaba Cloud khởi xướng và duy trì mã nguồn mở. Bản dịch giữ nguyên các thuật ngữ kỹ thuật tiếng Anh đã phổ biến trong cộng đồng (Agent, Harness, Context, Sandbox, Trajectory, Observability…) và diễn giải bằng tiếng Việt, nhằm giúp kỹ sư Việt Nam đọc hiểu nhanh mà vẫn tra cứu được tài liệu gốc. Xem thêm [Bảng thuật ngữ](./THUAT-NGU.md).

---

## 1. Bối cảnh và cấu trúc của cuốn sách trắng

Tháng 9 năm 2025, chúng tôi phát hành [*Sách trắng Kiến trúc Ứng dụng AI-Native*](https://developer.aliyun.com/ebook/8479), xoay quanh toàn bộ vòng đời DevOps của ứng dụng AI-native: từ thiết kế kiến trúc, lựa chọn công nghệ, thực hành kỹ thuật cho đến vận hành và tối ưu. Cuốn sách đó bóc tách một cách hệ thống các khái niệm và điểm khó, đồng thời đề xuất một số hướng giải quyết. Nhưng cùng với tốc độ phát triển rất nhanh của model và công nghệ Agent, chúng tôi nhận thấy mối quan tâm của thị trường đã dịch chuyển từ "xây Agent thật nhanh" sang ba thách thức mới:

*   **Thách thức kỹ thuật (Engineering):** đi từ trí tuệ mang tính xác suất đến năng lực sản xuất đáng tin cậy, để Agent có thể gánh vác những nhiệm vụ trọng yếu.

*   **Thách thức quy mô (Scaling):** ổn định, an toàn, hiệu năng, chi phí — đi từ thử nghiệm đơn lẻ đến hạ tầng trí tuệ, để Agent có thể được triển khai ở quy mô lớn.

*   **Thách thức tổ chức (Organization):** đi từ những "ốc đảo Agent" rời rạc đến một tổ chức thông minh, để Agent thực sự bước vào các quy trình nghiệp vụ cốt lõi.

Cuốn sách trắng của năm ngoái rõ ràng không còn đủ để đáp ứng những nhu cầu mới này.

Vì vậy, chúng tôi đã tổ chức lại cấu trúc cuốn sách: nội dung cập nhật hơn, tỉ trọng phần thực hành cao hơn, và cách cộng tác mang tính cộng đồng hơn — nhằm cung cấp một tài liệu tham chiếu cho việc lựa chọn công nghệ và lập đề án nội bộ trong doanh nghiệp. Cuốn sách được duy trì lâu dài theo hình thức mã nguồn mở, để liên tục phản ánh những tư duy tiên phong và thực tiễn triển khai của kiến trúc ứng dụng AI-native.

## 2. Đối tượng độc giả và những gì bạn nhận được

Cuốn sách trắng này chủ yếu hướng tới bối cảnh xây dựng và triển khai Agent ở quy mô doanh nghiệp. Nó phù hợp với kỹ sư quan tâm đến phát triển Agent, đồng thời có thể dùng cho việc lựa chọn công nghệ nội bộ, review kiến trúc, lập đề án dự án và xây dựng nhận thức chung giữa các nhóm.

| Độc giả | Nên tập trung vào | Bạn sẽ nhận được |
| --- | --- | --- |
| Lập trình viên Agent / ứng dụng AI | Phần Xây dựng, Vận hành, Tối ưu | Nắm được các phương pháp kỹ thuật cốt lõi: Harness, context, state, tool, sandbox, trajectory và vòng lặp đánh giá. |
| Kiến trúc sư và kỹ sư nền tảng | Phần Kiến trúc, Vận hành, Quản trị | Dựng được bức tranh kiến trúc đầy đủ từ component, trách nhiệm nền tảng đến vòng đời, từ đó thiết kế hạ tầng Agent có khả năng mở rộng. |
| Trưởng bộ phận kỹ thuật và quản lý R&D | Phần Kiến trúc, Quản trị, Thực tiễn | Đánh giá được hình thái ứng dụng, mức độ trưởng thành, giới hạn đầu tư và rủi ro sản xuất, phục vụ cho việc chọn lựa, lập đề án và phối hợp tổ chức. |
| Product owner và lãnh đạo nghiệp vụ | Báo cáo khảo sát, phần Kiến trúc, Thực tiễn | Hiểu được loại nhiệm vụ nào phù hợp với Agent, ranh giới trách nhiệm giữa người và Agent, cùng điều kiện để đi từ thí điểm vào quy trình lõi. |
| Nhân sự bảo mật, chất lượng và vận hành | Phần Vận hành, Quản trị, Tối ưu | Thiết lập được cơ chế observability, audit, phân quyền an toàn, kiểm định trước khi lên production, đánh giá liên tục và truy nguyên sự cố. |
| Nhà nghiên cứu và người đóng góp hệ sinh thái | Toàn bộ sách và phần Thực tiễn | Hiểu được các vấn đề thực tế tại doanh nghiệp, các trừu tượng hoá kỹ thuật và những câu hỏi còn bỏ ngỏ, để cùng hoàn thiện hệ tri thức của ngành. |

Sau khi đọc trọn vẹn, bạn sẽ có thể:

- Xuất phát từ mục tiêu nghiệp vụ, độ xác định của nhiệm vụ và mức rủi ro để chọn kiến trúc Agent **tối giản nhưng đủ dùng**;
- Hiểu ranh giới trách nhiệm giữa Model và Harness, thay vì quy mọi vấn đề về năng lực của model;
- Thiết kế hệ thống task cho Agent có thể tiến triển bền bỉ, gián đoạn rồi khôi phục được, và kiểm chứng được khi hoàn thành;
- Xây dựng nền tảng môi trường thực thi, state, traffic, quyền hạn, observability và quản trị chi phí cho Agent;
- Dùng Trace, Trajectory, golden dataset và thí nghiệm đánh giá để tạo ra bánh đà dữ liệu (data flywheel) cải tiến liên tục;
- Ánh xạ các phương pháp này vào những bối cảnh thực tế: hiệu suất R&D, thiết kế, vận hành, IT doanh nghiệp, vận hành khách hàng…

## 3. Hướng dẫn đọc

### Cấu trúc thư mục

| Phần | Thư mục | Phạm vi chương | Trọng tâm |
| --- | --- | --- | --- |
| [Báo cáo khảo sát lập trình viên Agent 2026](./2026-bao-cao-khao-sat-agent.md) | Thư mục gốc | — | Hiện trạng phát triển, đưa vào production, lựa chọn kiến trúc, bộ công cụ, quản trị và đánh giá Agent tại doanh nghiệp. |
| [Lời nói đầu](./00-loi-noi-dau/00-loi-noi-dau.md) | `00-loi-noi-dau/` | — | Cấu trúc và bối cảnh của cuốn sách trắng. |
| [Phần Kiến trúc](./01-kien-truc/) | `01-kien-truc/` | Chương 1–2 | Định nghĩa đối tượng, xác định hình thái, chọn mức trưởng thành và dựng kiến trúc tham chiếu. |
| [Phần Xây dựng](./02-xay-dung/) | `02-xay-dung/` | Chương 3–6 | Lấy Harness làm trung tâm để tổ chức task, thông tin và hành động. |
| [Phần Vận hành](./03-van-hanh/) | `03-van-hanh/` | Chương 7–12 | Từ việc chạy ổn định một Agent đơn lẻ mở rộng sang bất đồng bộ, multi-agent và giao tiếp phân tán. |
| [Phần Quản trị](./04-quan-tri/) | `04-quan-tri/` | Chương 13–16 | Làm cho quá trình chạy trở nên nhìn thấy được, hành vi có ranh giới, tài sản quản lý được và kiểm chứng được trước khi lên production. |
| [Phần Tối ưu](./05-toi-uu/) | `05-toi-uu/` | Chương 17–24 | Xây vòng lặp tối ưu liên tục theo hai trục chính: model và Agent. |
| [Phần Thực tiễn](./06-thuc-tien/) | `06-thuc-tien/` | Chương 25–29 | Thực tiễn doanh nghiệp, bối cảnh chuyên ngành và những khám phá tiên phong về Agent Infra. |
| [Phần Tổng kết và triển vọng](./07-tong-ket/) | `07-tong-ket/` | Chương 30 | Từ Agentic Application đi tới Agentic OS. |

### Điều hướng theo chương

| Phần | Chương | Nội dung cốt lõi |
| --- | --- | --- |
| Kiến trúc | [Chương 1 — Giai đoạn mới của ứng dụng AI-native](./01-kien-truc/chuong-01-giai-doan-moi-cua-ung-dung-ai-native.md) | Sự tiến hoá hình thái ứng dụng, định nghĩa và ranh giới của Agentic Application, đánh giá mức trưởng thành của doanh nghiệp. |
| Kiến trúc | [Chương 2 — Kiến trúc tham chiếu của Agentic Application](./01-kien-truc/chuong-02-kien-truc-tham-chieu-agentic-application.md) | Góc nhìn component, trách nhiệm nền tảng và vòng đời, cùng cách định vị kiến trúc từ quyết định đến vận hành và cải tiến. |
| Xây dựng | [Chương 3 — Paradigm: các cách xây Harness phổ biến và ranh giới trách nhiệm](./02-xay-dung/chuong-03-paradigm-harness-va-ranh-gioi-trach-nhiem.md) | Framework high-code, Harness đóng gói sản phẩm, Managed Agents, sản phẩm Agent trên cloud và trách nhiệm nền tảng. |
| Xây dựng | [Chương 4 — Task: điều phối, tiến trình dài và luân chuyển cộng tác](./02-xay-dung/chuong-04-task-dieu-phoi-tien-trinh-dai-va-cong-tac.md) | Agent Loop, state machine của task, plan, cổng kiểm soát theo giai đoạn, uỷ nhiệm, tiếp tục bất đồng bộ và bằng chứng hoàn thành. |
| Xây dựng | [Chương 5 — Thông tin: context, state và tài sản năng lực tái sử dụng](./02-xay-dung/chuong-05-thong-tin-context-state-va-nang-luc-tai-su-dung.md) | Context Builder, nén và offload, Session, Task State, Workspace, Memory, Knowledge và Skill. |
| Xây dựng | [Chương 6 — Hành động: thực thi có kiểm soát, phản hồi kiểm chứng và chuẩn bị bàn giao](./02-xay-dung/chuong-06-hanh-dong-thuc-thi-co-kiem-soat-va-xac-thuc.md) | Action Plane, Function Calling, MCP, A2A, hợp đồng môi trường, quyền hạn, HITL và vòng lặp kiểm chứng. |
| Vận hành | [Chương 7 — Agent Runtime và Sandbox](./03-van-hanh/chuong-07-agent-runtime-va-sandbox.md) | Sandbox, Agent Runtime, workspace, vòng đời môi trường và điều kiện chạy production. |
| Vận hành | [Chương 8 — Lưu trữ trạng thái và tài sản ngữ nghĩa của Agent](./03-van-hanh/chuong-08-luu-tru-trang-thai-va-tai-san-ngu-nghia.md) | Event Log, Checkpoint, snapshot workspace, Artifact, bộ nhớ dài hạn, RAG và ngữ nghĩa nghiệp vụ. |
| Vận hành | [Chương 9 — AI Gateway và quản trị traffic thống nhất](./03-van-hanh/chuong-09-ai-gateway-va-quan-tri-traffic-thong-nhat.md) | Định danh, quyền hạn, ngân sách, routing, audit và phê duyệt cho ba loại traffic: LLM, MCP và Agent. |
| Vận hành | [Chương 10 — Task bất đồng bộ và quy trình tự động hoá của Agent](./03-van-hanh/chuong-10-task-bat-dong-bo-va-quy-trinh-tu-dong-hoa.md) | Ranh giới đồng bộ/bất đồng bộ, ngữ nghĩa hoàn thành task, task định kỳ, task chạy dài và workflow tự động hoá. |
| Vận hành | [Chương 11 — Multi-Agent: cộng tác và orchestration](./03-van-hanh/chuong-11-multi-agent-cong-tac-va-orchestration.md) | Tích hợp Agent dị chủng, topology của team, phân công task, tổng hợp kết quả và trách nhiệm orchestration. |
| Vận hành | [Chương 12 — Giao tiếp phân tán của Agent](./03-van-hanh/chuong-12-agent-giao-tiep-phan-tan.md) | Giao thức truyền thông và quản trị message trên bốn mặt phẳng: năng lực, cộng tác, nội bộ và người–máy. |
| Quản trị | [Chương 13 — Observability của Agent](./04-quan-tri/chuong-13-observability-cua-agent.md) | Metric, log, Trace, event, quy kết chi phí và audit. |
| Quản trị | [Chương 14 — Bảo mật Agent](./04-quan-tri/chuong-14-bao-mat-agent.md) | Prompt Injection, định danh và xác thực, kiểm tra từng bước, uỷ quyền thao tác rủi ro cao và chống rò rỉ dữ liệu ra ngoài. |
| Quản trị | [Chương 15 — Khám phá và quản lý tài sản AI](./04-quan-tri/chuong-15-kham-pha-va-quan-ly-tai-san-ai.md) | Đăng ký, version, khám phá, phụ thuộc và quản lý phát hành cho Prompt, Skill, MCP và Agent. |
| Quản trị | [Chương 16 — Sinh hành vi và kiểm định chất lượng Agent](./04-quan-tri/chuong-16-sinh-hanh-vi-va-kiem-dinh-chat-luong.md) | Mô phỏng người dùng, mô phỏng môi trường, cấu hình kịch bản và Agent Simulation trước khi lên production. |
| Tối ưu | [Chương 17 — Tối ưu model](./05-toi-uu/chuong-17-toi-uu-model.md) | Tiêu chí quy kết vấn đề về model, SFT, Agentic RL, distillation và nghiệm thu trước khi lên production. |
| Tối ưu | [Chương 18 — Tổng quan tối ưu Agent](./05-toi-uu/chuong-18-tong-quan-toi-uu-agent.md) | Đối tượng tối ưu, ranh giới phương pháp và toàn cảnh bánh đà dữ liệu. |
| Tối ưu | [Chương 19 — Dữ liệu Trajectory của Agent](./05-toi-uu/chuong-19-du-lieu-trajectory.md) | Từ Trace đến Trajectory, tổ chức bằng chứng hành vi và quyết định có thể tái sử dụng. |
| Tối ưu | [Chương 20 — Xử lý dữ liệu runtime của Agent](./05-toi-uu/chuong-20-xu-ly-du-lieu-runtime.md) | Thu thập, làm sạch, gia công dữ liệu vận hành và pipeline dữ liệu khai báo. |
| Tối ưu | [Chương 21 — Golden dataset cho Agent](./05-toi-uu/chuong-21-golden-dataset.md) | Xây tài sản dữ liệu đánh giá chất lượng cao, gồm input, trajectory, kết quả và tiêu chí phán định. |
| Tối ưu | [Chương 22 — Tối ưu Agent: Badcase](./05-toi-uu/chuong-22-toi-uu-agent-badcase.md) | Phát hiện, quy kết, khắc phục, hồi quy và kiểm chứng bằng thí nghiệm đối với badcase. |
| Tối ưu | [Chương 23 — Tự tiến hoá có kiểm soát](./05-toi-uu/chuong-23-tu-tien-hoa-co-kiem-soat.md) | Chuyển kinh nghiệm hiệu quả thành Memory, Skill, tool và cơ chế vận hành, đồng thời kiểm soát rủi ro tự tiến hoá. |
| Tối ưu | [Chương 24 — Edge Runtime và tối ưu toàn cầu](./05-toi-uu/chuong-24-edge-runtime-va-toi-uu-toan-cau.md) | Runtime biên, đánh giá tại biên, hiệu năng và chi phí, phân phối nội dung, bảo mật và mô phỏng. |
| Thực tiễn | [Chương 25 — Hiệu suất kỹ thuật (R&D)](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/) | Code review, phát hiện lỗi, bàn giao patch, cộng tác R&D và thực tiễn giao hàng đầu-cuối. |
| Thực tiễn | [Chương 26 — Design Engineering](./06-thuc-tien/chuong-26-design-engineering/) | Paradigm thiết kế và thực tiễn kỹ thuật của Vibe Designing và GenUI. |
| Thực tiễn | [Chương 27 — Vận hành, bảo mật và IT doanh nghiệp](./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/) | Thực tiễn AIOps quy mô lớn trong ngành ô tô, chuỗi bán lẻ và phần mềm doanh nghiệp. |
| Thực tiễn | [Chương 28 — Khách hàng, bán hàng và vận hành](./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/) | Bộ nhớ dài hạn, insight nội dung, nâng cao hiệu suất văn phòng và thực tiễn Data Agent. |
| Thực tiễn | [Chương 29 — Hạng mục GOAI Agent Infra: khám phá tiên phong về cộng tác multi-agent](./06-thuc-tien/chuong-29-goai-agent-infra.md) | Các tác phẩm xuất sắc tại Giải thưởng Mã nguồn mở AI Thế giới và những khám phá Agent Infra đa lĩnh vực. |
| Tổng kết và triển vọng | [Chương 30 — Từ Agentic Application đến Agentic OS](./07-tong-ket/chuong-30-tu-agentic-application-den-agentic-os.md) | Từ một ứng dụng đơn lẻ đi tới hệ thống trí tuệ có thể cộng tác, quản trị và tiến hoá bền vững. |

### Điều hướng các case study

| Chương | Case study |
| --- | --- |
| Chương 25 — Hiệu suất kỹ thuật | [ABACI: Agent kiểm thử có định hướng và phát hiện lỗi cho patch kernel](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/abaci-kiem-thu-patch-kernel-va-phat-hien-loi.md) |
| Chương 25 — Hiệu suất kỹ thuật | [Kitta: Code Review Agent chuyên ngành](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/kitta-code-review-agent-chuyen-nganh.md) |
| Chương 25 — Hiệu suất kỹ thuật | [PatchPilot Agents: biến việc bàn giao patch kernel thành vòng lặp kỹ thuật điều phối được và kiểm chứng được](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/patchpilot-agents.md) |
| Chương 25 — Hiệu suất kỹ thuật | [Từ cảnh báo đến tự động sửa lỗi: thực tiễn kỹ thuật Loop của PolarDB-X](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/polardb-x-tu-canh-bao-den-tu-dong-sua-loi.md) |
| Chương 25 — Hiệu suất kỹ thuật | [Từ tăng tốc viết code đến bàn giao đầu-cuối: thực tiễn cộng tác người–máy tại Cloud Communication](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/hop-tac-nguoi-may-tai-cloud-communication.md) |
| Chương 25 — Hiệu suất kỹ thuật | [Từ eval-driven đến bàn giao đầu-cuối: thực tiễn tăng hiệu suất phát triển sản phẩm bảo mật AI Agent](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/eval-driven-phat-trien-san-pham-bao-mat.md) |
| Chương 25 — Hiệu suất kỹ thuật | [Đội multi-agent: AI trong R&D đi từ viết code tới bàn giao đầu-cuối](./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/doi-multi-agent-giao-hang-dau-cuoi.md) |
| Chương 26 — Design Engineering | [GenUI: đưa Agent từ chỗ đưa ra câu trả lời tới chỗ bàn giao kết quả](./06-thuc-tien/chuong-26-design-engineering/genui.md) |
| Chương 26 — Design Engineering | [Vibe Designing: sự tiến hoá của paradigm thiết kế AI dẫn dắt bởi ý định](./06-thuc-tien/chuong-26-design-engineering/vibe-designing.md) |
| Chương 27 — Vận hành, bảo mật và IT doanh nghiệp | [Thực tiễn triển khai AIOps tại Geely Auto](./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/geely-aiops.md) |
| Chương 27 — Vận hành, bảo mật và IT doanh nghiệp | [Vòng lặp AIOps khép kín cho chuỗi vạn cửa hàng Tastien](./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/tastien-aiops-chuoi-cua-hang.md) |
| Chương 27 — Vận hành, bảo mật và IT doanh nghiệp | [Thực tiễn observability và AIOps tại Chanjet](./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/chanjet-observability-va-aiops.md) |
| Chương 28 — Khách hàng, bán hàng và vận hành | [MiniMax xây nền tảng dữ liệu bộ nhớ dài hạn quy mô lớn](./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/minimax-nen-tang-du-lieu-memory.md) |
| Chương 28 — Khách hàng, bán hàng và vận hành | [Hãng kiểm toán ShineWing khám phá việc nâng cao hiệu suất văn phòng](./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/shinewing-nang-cao-hieu-suat-van-phong.md) |
| Chương 28 — Khách hàng, bán hàng và vận hành | [Bilibili xây dựng năng lực insight nội dung toàn miền](./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/bilibili-content-insight.md) |
| Chương 28 — Khách hàng, bán hàng và vận hành | [Thực tiễn Data Agent cho phân tích vận hành](./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/data-agent-phan-tich-van-hanh.md) |

### Lộ trình đọc gợi ý

- **Lần đầu tìm hiểu Agent doanh nghiệp một cách hệ thống:** Báo cáo khảo sát → Chương 1–2 → Chương 3–6 → Chương 13–16.
- **Đang đưa Agent vào production:** Chương 7–9 → Chương 13–14 → Chương 18–23.
- **Đang xây hệ thống multi-agent:** Chương 4–6 → Chương 10–12 → Chương 13, 16.
- **Phụ trách đánh giá và tối ưu liên tục:** Chương 13 → Chương 18–23 → case study của lĩnh vực tương ứng.
- **Phụ trách lựa chọn công nghệ hoặc lập đề án:** Báo cáo khảo sát → Chương 1–3 → Phần Thực tiễn → Chương 30.

## 4. Kế hoạch tiếp theo

Cuốn sách trắng sẽ được duy trì liên tục như một dự án mở, thay vì đóng băng sau lần phát hành đầu tiên. Các trọng tâm sắp tới bao gồm:

- **Mở rộng case study doanh nghiệp:** bổ sung thêm các case thực chiến từ R&D, vận hành, chăm sóc khách hàng, dữ liệu, bảo mật, tài chính và các bối cảnh ngành dọc, kèm theo con đường thành công, đánh đổi kiến trúc và những kiểu thất bại có thật.
- **Bổ sung trải nghiệm thực hành trên cloud:** thiết kế các luồng trải nghiệm có thể tái lập trên cloud xoay quanh những năng lực then chốt như sandbox, Runtime, AI Gateway, lưu trữ trạng thái, observability và đánh giá, để độc giả đi từ đọc sang tự tay kiểm chứng.
- **Hoàn thiện nội dung quản trị:** theo sát các chủ đề cốt lõi của doanh nghiệp như định danh và phân quyền, phòng chống Prompt Injection, dữ liệu rời khỏi biên, audit, đăng ký tài sản, quản trị version và mô phỏng trước khi lên production.
- **Hoàn thiện hệ thống đánh giá:** bổ sung các phương pháp và case về tỉ lệ thành công của task, đánh giá trajectory, LLM-as-Judge, golden dataset, hồi quy badcase, thí nghiệm online và đánh đổi giữa chi phí với chất lượng.
- **Bám sát tiến hoá công nghệ:** liên tục hấp thụ tiến bộ mới về model, Harness, giao thức, Runtime, multi-agent và Agentic OS, đồng thời kịp thời đính chính những nhận định không còn phù hợp.
- **Xây dựng cơ chế cộng tác cộng đồng:** từng bước hoàn thiện quy chuẩn nội dung, template case study, bảng thuật ngữ, quy trình hiệu đính và cách phát hành phiên bản, nhằm hạ thấp rào cản cho những đóng góp chất lượng cao.

### Hoan nghênh đóng góp

Chúng tôi hoan nghênh lập trình viên, kiến trúc sư, nhà nghiên cứu, đội kỹ thuật doanh nghiệp và những người làm sản phẩm cùng tham gia xây dựng. Bạn có thể:

- Mở Issue để chỉ ra sai sót về dữ kiện, khái niệm mơ hồ, link hỏng hoặc chủ đề cần bổ sung;
- Gửi Pull Request để hoàn thiện chương, sửa nội dung, cải thiện sơ đồ hoặc bổ sung tài liệu tham khảo;
- Chia sẻ thực tiễn doanh nghiệp đã được ẩn danh hoá, các buổi hậu kiểm sự cố, phương pháp đánh giá và những đánh đổi kiến trúc;
- Cung cấp code có thể tái lập, luồng trải nghiệm trên cloud, dataset hoặc phương án thí nghiệm;
- Tham gia thống nhất thuật ngữ, thẩm định kỹ thuật, review case study và dịch nội dung.

Nội dung đóng góp cần tôn trọng bản quyền và ranh giới cấp phép; khi liên quan tới dữ liệu doanh nghiệp, thông tin khách hàng, hệ thống nội bộ và chi tiết bảo mật, vui lòng hoàn tất việc ẩn danh hoá và xác nhận quyền sử dụng trước.

#### Đóng góp cho bản tiếng Việt

Bản dịch này hướng tới cộng đồng kỹ thuật Việt Nam. Khi đóng góp, vui lòng:

- Bám theo [Bảng thuật ngữ](./THUAT-NGU.md) để giữ thuật ngữ nhất quán giữa các chương;
- Giữ nguyên thuật ngữ kỹ thuật tiếng Anh đã phổ biến, thay vì dịch cứng sang tiếng Việt;
- Giữ nguyên cấu trúc heading, bảng và đường dẫn ảnh so với bản gốc, để dễ đối chiếu và merge các cập nhật từ upstream.

## 5. Người đóng góp

Xin cảm ơn tất cả những người đã tham gia thiết kế kiến trúc, viết chương, biên soạn case study và hiệu đính nội dung.

### Alibaba Cloud

| Lĩnh vực đóng góp | Người đóng góp |
| --- |-----------------------------------------------------|
| Lời nói đầu | Ma Peng |
| Báo cáo khảo sát lập trình viên | Ren Juan, Wang Chen |
| Phần Kiến trúc | Wang Chen, Liu Jun, Shen Lin |
| Phần Xây dựng | Liu Jun, Pan Shengwei, Wang Chen |
| Phần Vận hành | Zhao Qingjie, Li Shibo, Lin Qingshan, Huang Xiaomeng, Zhang Tianyi, Zhao Yuanxiao, Sun Xiao, Song Zhen, Hu Qingda, Liu Zunfei, Zhu Tong, Yu Huafeng, Luo Xin, Kong Keqing |
| Phần Quản trị | Xiao Changjun, Zhou Yang, Zhang Lei, Wang Fang, Zhang Haibin, Cheng Shuyi, Liu Ziming, Rao Zihao, Ren Yi, Yang Yong, Wang Shuo, Ma Xin, Liu Yuxuan, Yang Yi |
| Phần Tối ưu | Zhang Hanmeng, Li Shengrong, Wang Yaning, Sun Jianyun, Ma Yunlei, Wang Zhen, Zheng Qianyi, Liu Hang, Chen Xin |
| Phần Thực tiễn | Yang Tao, Zhu Yan, Yu Ailin, Hu Jun |
| Phần Tổng kết và triển vọng | Lin Yan |

### Người đóng góp bên ngoài

Dự án luôn mở cho đóng góp từ cộng đồng. Chúng tôi hoan nghênh lập trình viên, kiến trúc sư, nhà nghiên cứu, đội kỹ thuật doanh nghiệp và những người làm sản phẩm cùng xây dựng nội dung qua Issue hoặc Pull Request; sau khi đóng góp được chấp nhận, thông tin người đóng góp sẽ được bổ sung vào mục này.

---

Nếu cuốn sách trắng này giúp bạn hiểu, xây dựng, vận hành, quản trị và tối ưu Agent tốt hơn, rất mong bạn chia sẻ, thảo luận và cùng tham gia xây dựng.
