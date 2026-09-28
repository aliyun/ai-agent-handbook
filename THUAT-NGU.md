# Bảng thuật ngữ

Bản dịch tiếng Việt của *AI Agent HandBook* theo nguyên tắc: **giữ nguyên thuật ngữ kỹ thuật tiếng Anh đã phổ biến trong cộng đồng, diễn giải bằng tiếng Việt**. Lý do: phần lớn tài liệu, code và thảo luận trong lĩnh vực này đều dùng thuật ngữ tiếng Anh; dịch cứng sẽ khiến người đọc khó tra cứu ngược và khó trao đổi với cộng đồng quốc tế.

Bảng dưới đây liệt kê những thuật ngữ xuất hiện nhiều nhất, cách bản dịch xử lý chúng, và cách diễn giải khi cần giải thích cho người mới.

## 1. Khái niệm cốt lõi

| Thuật ngữ | Cách dùng trong bản dịch | Diễn giải tiếng Việt |
| --- | --- | --- |
| Agent | Giữ nguyên | Thực thể phần mềm tự chủ: tự lập kế hoạch, gọi tool và tiến tới mục tiêu. Không dịch là "tác tử" hay "trợ lý". |
| Agentic Application | Giữ nguyên | Ứng dụng lấy Agent làm hình thái thực thi chính. |
| Agentic OS | Giữ nguyên | Tầng hệ điều hành cho Agent: lập lịch, tài nguyên, quyền hạn, cộng tác. |
| Harness | Giữ nguyên | Phần "khung" bao quanh model: quản lý context, gọi tool, điều khiển vòng lặp, xử lý lỗi. Đây là khái niệm trung tâm của cả cuốn sách. |
| Model | Giữ nguyên | Mô hình ngôn ngữ nền tảng. Khi nói chung chung có thể dùng "model", không dịch thành "mô hình" để tránh nhầm với mô hình kiến trúc. |
| Agent Loop | Giữ nguyên | Vòng lặp suy luận → hành động → quan sát của Agent. |
| Tool / Tool Call | Giữ nguyên | Công cụ Agent gọi được, và lời gọi đó. |
| Function Calling | Giữ nguyên | Cơ chế model phát ra lời gọi hàm có cấu trúc. |
| Prompt | Giữ nguyên | Không dịch thành "câu lệnh nhắc". |
| System Prompt | Giữ nguyên | Prompt hệ thống, định nghĩa vai trò và ràng buộc. |
| Context | Giữ nguyên | Toàn bộ thông tin đưa vào model trong một lượt. Dịch "ngữ cảnh" chỉ khi nói về nghĩa thông thường. |
| Context Window | Giữ nguyên | Giới hạn độ dài context. |
| Context Engineering | Giữ nguyên | Kỹ thuật tổ chức context. |
| State | Giữ nguyên | Trạng thái. Dùng "state" khi là khái niệm kỹ thuật (Task State, state machine), dùng "trạng thái" trong văn nói thường. |
| Session | Giữ nguyên | Phiên làm việc. |
| Workspace | Giữ nguyên | Không gian làm việc của Agent (thường là filesystem). |
| Memory | Giữ nguyên | Bộ nhớ dài hạn của Agent. |
| Knowledge | Giữ nguyên | Tri thức, thường gắn với RAG. |
| Skill | Giữ nguyên | Gói năng lực tái sử dụng được. |
| Artifact | Giữ nguyên | Sản phẩm đầu ra có thể lưu trữ và bàn giao. |
| Checkpoint | Giữ nguyên | Điểm lưu trạng thái để khôi phục. |
| Sandbox | Giữ nguyên | Môi trường cô lập để thực thi. Không dịch "hộp cát". |
| Runtime | Giữ nguyên | Môi trường chạy. |
| Multi-Agent | Giữ nguyên | Hệ nhiều Agent. |
| Orchestration | Giữ nguyên | Điều phối. Có thể dùng "điều phối" trong prose, giữ "orchestration" khi là tên thành phần. |
| Trace | Giữ nguyên | Vết thực thi ở mức quan sát hệ thống. |
| Trajectory | Giữ nguyên | Chuỗi hành vi–quyết định đầy đủ của một lần chạy Agent, dùng cho tối ưu. |
| Observability | Giữ nguyên | Khả năng quan sát. |
| Golden Dataset | Giữ nguyên | Bộ dữ liệu chuẩn dùng để đánh giá. |
| Badcase | Giữ nguyên | Ca chạy sai/kém cần phân tích. |
| Eval / Evaluation | Giữ nguyên | Đánh giá. |
| LLM-as-Judge | Giữ nguyên | Dùng LLM làm bộ chấm điểm. |
| HITL (Human-in-the-Loop) | Giữ nguyên | Có người tham gia trong vòng lặp. |
| Guardrail | Giữ nguyên | Rào chắn an toàn. |
| Prompt Injection | Giữ nguyên | Tấn công tiêm chỉ thị vào prompt. |
| Data Flywheel | Giữ nguyên, kèm "bánh đà dữ liệu" | Vòng xoáy cải tiến dựa trên dữ liệu vận hành. |

## 2. Giao thức và hạ tầng

| Thuật ngữ | Cách dùng | Diễn giải |
| --- | --- | --- |
| MCP (Model Context Protocol) | Giữ nguyên | Giao thức chuẩn hoá cách Agent truy cập tool và dữ liệu. |
| A2A (Agent-to-Agent) | Giữ nguyên | Giao thức giao tiếp giữa các Agent. |
| AI Gateway | Giữ nguyên | Cổng thống nhất cho traffic LLM/MCP/Agent. |
| Managed Agents | Giữ nguyên | Agent được nhà cung cấp vận hành sẵn. |
| RAG | Giữ nguyên | Retrieval-Augmented Generation. |
| Embedding | Giữ nguyên | Vector biểu diễn ngữ nghĩa. |
| Vector Database | Giữ nguyên | Cơ sở dữ liệu vector. |
| Event Log | Giữ nguyên | Nhật ký sự kiện, nguồn sự thật để tái lập trạng thái. |
| Edge Runtime | Giữ nguyên | Runtime chạy tại biên. |
| Token | Giữ nguyên | Đơn vị đầu vào/đầu ra của model. |
| Streaming | Giữ nguyên | Truyền kết quả theo dòng. |
| Latency | Giữ nguyên hoặc "độ trễ" | |
| Throughput | Giữ nguyên hoặc "thông lượng" | |

## 3. Huấn luyện và tối ưu model

| Thuật ngữ | Cách dùng | Diễn giải |
| --- | --- | --- |
| SFT (Supervised Fine-Tuning) | Giữ nguyên | Tinh chỉnh có giám sát. |
| RL / Agentic RL | Giữ nguyên | Học tăng cường, áp dụng cho Agent. |
| RLHF | Giữ nguyên | Học tăng cường từ phản hồi của con người. |
| Distillation | Giữ nguyên, kèm "chưng cất model" | Chuyển năng lực từ model lớn sang model nhỏ. |
| Reward Model | Giữ nguyên | Model chấm điểm phần thưởng. |
| LoRA | Giữ nguyên | Kỹ thuật fine-tune tham số thấp. |
| Inference | Giữ nguyên hoặc "suy luận" | |
| Hallucination | Giữ nguyên, kèm "ảo giác" | Model bịa ra thông tin. |

## 4. Những từ chúng tôi **dịch** sang tiếng Việt

Một số từ có tương đương tiếng Việt rõ ràng và dùng rất tự nhiên, nên bản dịch chuyển hẳn sang tiếng Việt:

| Tiếng Anh / Tiếng Trung | Tiếng Việt |
| --- | --- |
| task (nghĩa nghiệp vụ chung) | nhiệm vụ / task (dùng xen kẽ theo ngữ cảnh) |
| capability | năng lực |
| reliability | độ tin cậy |
| governance | quản trị |
| maturity | mức độ trưởng thành |
| lifecycle | vòng đời |
| boundary of responsibility | ranh giới trách nhiệm |
| trade-off | đánh đổi |
| rollback | quay lui |
| audit | audit / kiểm toán vết |
| permission, authorization | quyền hạn, uỷ quyền |
| cost attribution | quy kết chi phí |
| root cause analysis | truy nguyên nguyên nhân gốc |
| deterministic | có tính xác định |
| pilot | thí điểm |
| production | production (môi trường thật) |

## 5. Quy ước trình bày

- **Heading, bảng, đường dẫn ảnh**: giữ nguyên cấu trúc so với bản gốc, để dễ đối chiếu và merge cập nhật từ upstream.
- **Code block, tên biến, tên API, log mẫu**: giữ nguyên, chỉ dịch phần comment khi việc đó giúp người đọc.
- **Tên riêng doanh nghiệp Trung Quốc**: dùng tên tiếng Anh chính thức nếu có (Alibaba Cloud, Bilibili, MiniMax, Geely, Chanjet, ShineWing, Tastien); nếu không có thì phiên âm Latinh.
- **Tên sản phẩm**: giữ nguyên (PolarDB-X, Higress, Nacos, Kitta, ABACI, PatchPilot…).
- **Số liệu, đơn vị, ngày tháng**: giữ nguyên giá trị; định dạng ngày chuyển sang kiểu Việt Nam khi cần (tháng 9 năm 2025).

## 6. Góp ý thuật ngữ

Nếu bạn cho rằng một thuật ngữ nên được dịch khác đi, hãy mở Issue kèm:

1. Thuật ngữ và chương/đoạn xuất hiện;
2. Cách dịch bạn đề xuất;
3. Dẫn chứng cho thấy cách đó phổ biến hơn trong cộng đồng kỹ thuật Việt Nam.

Thuật ngữ nên được thống nhất trên toàn bộ cuốn sách, nên mọi thay đổi sẽ được áp dụng đồng loạt cho tất cả các chương.
