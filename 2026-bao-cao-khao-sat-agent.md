# Báo cáo khảo sát lập trình viên Agent 2026

Năm nay, chúng tôi đã tổ chức nhiều buổi salon offline dành cho lập trình viên tại các thành phố Bắc Kinh, Thâm Quyến, Quảng Châu, Thượng Hải, Hàng Châu, nhằm tìm hiểu hiện trạng phát triển của Agent trong các ngành. Đợt khảo sát lập trình viên này thu về 1.906 phiếu hợp lệ, với người tham gia chủ yếu là người ra quyết định kỹ thuật, kiến trúc sư, kỹ sư tuyến đầu và product manager của các doanh nghiệp. Phần này trình bày chi tiết khảo sát của chúng tôi, mong cung cấp được một số tham chiếu cho những người đang làm nghề.

## Một — Những phát hiện cốt lõi

**1. Việc đầu tư vào Agent đã thành đồng thuận, nhưng đưa vào production vẫn là thiểu số.**

Có làm Agent hay không đã không còn là đề tài: số người tham gia khảo sát nói rõ là chưa có kế hoạch phát triển giảm từ 22% năm ngoái xuống 15%; số đang khảo sát và lên kế hoạch phát triển giảm từ 47% năm ngoái xuống 25%; còn số đã phát triển xong hoặc đang phát triển thì cộng lại là 46%, trong khi con số này năm ngoái là 36%. Nhưng số thực sự triển khai vào khâu production thì chỉ có 18%.

**2. Single Agent, Multi-Agent và Human in the Loop là ba lựa chọn cùng tồn tại lâu dài, chứ không phải thay thế cũ — mới.**

Doanh nghiệp lấy Single Agent làm kiến trúc chính chiếm 40%; doanh nghiệp bắt đầu đưa Multi-Agent làm chính có 42%; ngoài ra 15% doanh nghiệp đã lấy Human in the Loop (giao các bước then chốt cho con người xác nhận) làm kiến trúc chính khi thiết kế. **Mức tự chủ là một tham số chỉnh được, và các hình thái lai sẽ tồn tại lâu dài.**

**3. Agent đạt quy mô sớm nhất ở việc viết code, nhưng phía nhà cung cấp thì phân mảnh.**

AI Coding là thị trường thương mại đã được kiểm chứng: doanh nghiệp mua các công cụ Coding như Claude Code, Codex, Cursor, Qoder chiếm 57%; doanh nghiệp dùng framework Agent đa dụng chiếm 78%; và gần bốn phần mười doanh nghiệp dùng đồng thời cả Agent lập trình lẫn framework Agent đa dụng. Thị trường chưa hình thành thế độc quyền nhóm, phía nhà cung cấp phân mảnh, nên **những trừu tượng kỹ thuật di chuyển được có giá trị hơn việc đặt cược vào một hãng nào đó.** Tất nhiên, cùng với việc Agent văn phòng phổ biến hơn, ranh giới giữa Agent lập trình và Agent đa dụng ngày càng mờ.

**4. Quản lý thông tin, quản trị task và tối ưu hành động là các điểm khó sau khi xây xong Agent.**

Một là quản lý context và memory, với 90% doanh nghiệp có nhu cầu rõ ràng; hai là định tuyến đa model và quản trị chi phí, với 63% doanh nghiệp liệt nó là năng lực cần bù nhất ở giai đoạn hiện tại; ba là đánh giá và observability — khi phán định Agent có dùng tốt không thì 55% doanh nghiệp vẫn dựa vào việc con người lấy mẫu kiểm tra, còn số có thể tự động đánh giá dựa trên trajectory vận hành thì chưa tới 8%. Ba điểm này cũng ánh xạ vào chương 4, chương 5 và chương 6 của phần Xây dựng trong bản white paper này, và chúng tôi sẽ triển khai chi tiết.

**5. Sự phân mảnh về năng lực tính toán, model và ứng dụng đã là sự thật hiển nhiên, nên cần một lối vào traffic thống nhất để quản lý.**

Định tuyến đa model và tự động hạ cấp được 63% doanh nghiệp liệt là năng lực gateway cần nhất — đây cũng là nhu cầu đơn lẻ có tỉ lệ cao nhất trong đợt khảo sát này. Task khác nhau khớp model khác nhau, model chính không khả dụng thì hạ cấp, chọn động theo chi phí và độ trễ. Loại nhu cầu này không giải quyết từng cái một trong code ứng dụng được, mà cần một lối vào traffic thống nhất để gánh.

**6. Năng lực đánh giá là con đường bắt buộc để nâng độ tin cậy của Agent trên production.**

Hậu quả của việc mục tiêu đánh giá không rõ và hạ tầng chưa chín thể hiện ở tỉ lệ thành công của task. Doanh nghiệp có tỉ lệ thành công task Agent đạt trên 90% chỉ khoảng một phần mười; đạt trên 70% là khoảng 55%; còn 16% người tham gia khảo sát thì hoàn toàn chưa từng định lượng tỉ lệ thành công. Nhóm doanh nghiệp này thực chất không phán định được Agent của mình có đang làm việc bình thường không.

## Hai — Tiến trình phát triển Agent và mức độ đưa vào production

### 1. Việc đầu tư vào Agent đã thành đồng thuận, nhưng đưa vào production vẫn là thiểu số

Có làm Agent hay không đã không còn là đề tài: số người tham gia khảo sát nói rõ là chưa có kế hoạch phát triển giảm từ 22% năm ngoái xuống 15%; số đang khảo sát và lên kế hoạch phát triển giảm từ 47% năm ngoái xuống 25%; còn số đã phát triển xong hoặc đang phát triển thì cộng lại là 46%, trong khi con số này năm ngoái là 36%. Nhưng số thực sự triển khai vào khâu production thì chỉ có 18%.

![image](assets/imgs/2026-agent-developer-survey/image-001.png)

### 2. Thứ cản chiến lược Agent không phải ý chí, mà là phần dự trữ năng lực kỹ thuật

Khoảng cách về tỉ lệ lên production nhìn chung lớn hơn khoảng cách về tỉ lệ phát triển. Tại Thượng Hải, doanh nghiệp lớn có tỉ lệ đã lên production 45%, còn doanh nghiệp siêu nhỏ và nhỏ là 16%; ở Thâm Quyến thì lần lượt là 38% và 17%. Khác biệt không nằm ở chỗ có muốn đầu tư hay không, mà ở chỗ có đủ năng lực kỹ thuật để tiến hoá Agent liên tục hay không — bao gồm việc tổ chức và cộng tác Agent, quản trị, tối ưu và kết tinh.

![image](assets/imgs/2026-agent-developer-survey/image-002.png)

> Ở phần Kiến trúc của white paper, trong *Chương 1 — Giai đoạn mới của ứng dụng AI native*, chúng tôi đã đưa vào cách phân cấp độ chín L1—L4 cho Agent. L1 là hỗ trợ sinh, L2 là tự động hoá có kiểm soát, L3 Agentic Execution chỉ thành lập ở một số kịch bản, còn L4 Managed & Optimizing thì vẫn thuộc số ít. Các phần Xây dựng, Vận hành, Quản trị, Tối ưu của white paper, về bản chất, đều đang trả lời câu hỏi làm sao tiến hoá từ L2 lên L3, L4.

## Ba — Phân bố lựa chọn kiến trúc Agent

### 1. Hình thái cũ và mới là cùng tồn tại, chứ không phải thay thế

Doanh nghiệp lấy Single Agent làm kiến trúc chính chiếm 40%; doanh nghiệp bắt đầu đưa Multi-Agent làm chính có 42%. Mức tự chủ là một tham số chỉnh được, và các hình thái lai sẽ tồn tại lâu dài. Dữ liệu này ủng hộ phán đoán mà white paper nêu ở chương 1 và chương 12: Chat/RAG, Workflow, Copilot, Agent và Managed Agentic Application thường cùng tồn tại trong nội bộ một doanh nghiệp, và việc chọn phụ thuộc vào mức xác định của task cùng không gian chịu lỗi, chứ không phải vào chuyện công nghệ cũ hay mới. Ngoài ra, 15% doanh nghiệp lấy "người trong vòng lặp" (Human-in-the-Loop, HITL — tức các bước then chốt bắt buộc phải có người xác nhận rồi mới chạy tiếp) làm nguyên tắc kiến trúc khi đưa Agent vào môi trường production, chứ không chỉ coi nó là một công tắc phê duyệt gắn thêm.

![image](assets/imgs/2026-agent-developer-survey/image-003.png)

> Phần Kiến trúc của white paper, trong *Chương 1 — Giai đoạn mới của ứng dụng AI native*, đã tổng kết một cách hệ thống các hình thái, đặc điểm và xu thế phát triển của Agent ở giai đoạn hiện tại.

### 2. Quản lý thông tin, quản trị task và tối ưu hành động là các điểm khó sau khi xây xong Agent

Điểm đau lớn nhất mà người tham gia khảo sát phản hồi là trạng thái và context suy giảm trong quá trình nhiều Agent cộng tác, chiếm 60%. Điểm đau lớn thứ hai và thứ ba lần lượt là deadlock — sụp đổ dây chuyền và chi phí mất kiểm soát, mà về bản chất cũng là hậu quả của việc chuỗi gọi và trạng thái thiếu ràng buộc. Khi được hỏi mong bù đắp những năng lực nào nhất thì hai nhu cầu có tỉ lệ cao hơn: vòng khép kín R&D — test 65%, và nền vận hành phía edge cùng mã nguồn mở 73%. Cái trước cho thấy chi phí kiểm chứng của Multi-Agent đã được cảm nhận như một gánh nặng chính; cái sau cho thấy doanh nghiệp có nhu cầu rõ ràng về việc tự chủ, kiểm soát được nền vận hành.

**Hình 4 — Các thách thức chính của Multi-Agent và những năng lực mong được bù đắp nhất**

![image](assets/imgs/2026-agent-developer-survey/image-004.png)

> Phần Xây dựng của white paper với *Chương 4 — Task: orchestration, tiến trình dài và cộng tác*, *Chương 5 — Thông tin: context, state và tài sản năng lực tái dùng*, *Chương 6 — Hành động: thực thi có kiểm soát, phản hồi kiểm chứng và chuẩn bị bàn giao*, cùng *Chương 8 — Lưu trữ trạng thái Agent và tài sản ngữ nghĩa* ở phần Vận hành, đều đáp lại ba điểm đau đó. Ngoài ra, nhu cầu cao về nền phía edge và mã nguồn mở cũng giải thích vì sao chương 7 và chương 12 cần bàn về Runtime, sandbox và topology triển khai.

## Bốn — Các kịch bản được triển khai ưu tiên và mức độ thẩm thấu của chuỗi công cụ

### 1. Viết code đi trước, nhưng cạnh tranh gay gắt

AI Coding là thị trường thương mại đã được kiểm chứng: doanh nghiệp mua các công cụ Coding như Claude Code, Codex, Cursor, Qoder chiếm 57%; doanh nghiệp dùng framework Agent đa dụng chiếm 78%; và gần bốn phần mười doanh nghiệp dùng đồng thời cả Agent lập trình lẫn framework Agent đa dụng. Thị trường chưa hình thành thế độc quyền nhóm, phía nhà cung cấp phân mảnh, nên những trừu tượng kỹ thuật di chuyển được có giá trị hơn việc đặt cược vào một hãng nào đó. Tất nhiên, cùng với việc Agent văn phòng phổ biến hơn, ranh giới giữa Agent lập trình và Agent đa dụng ngày càng mờ.

![image](assets/imgs/2026-agent-developer-survey/image-005.png)

* Coding hiện là kịch bản trả tiền duy nhất đạt được quy mô triển khai. Lý do không khó hiểu: tín hiệu phản hồi rõ ràng (có biên dịch được không, test có qua không), ranh giới môi trường rõ ràng (repo code và workspace), và cái giá của lỗi kiểm soát được (rollback được). Ba điều đó vừa đúng là tiền đề để Agent chạy ổn định.

* Chưa xuất hiện chuẩn trên thực tế. Mười vị trí đầu giảm thoai thoải chứ không phải dốc rồi đuôi dài, và phần lớn doanh nghiệp vẫn đang thử nhiều framework song song. Việc xây chuẩn nội bộ doanh nghiệp quanh một framework duy nhất có rủi ro khá cao.

* Tỉ lệ dùng đồng thời cả Agent lập trình lẫn Agent đa dụng gần bốn phần mười, cho thấy các năng lực đang thẩm thấu vào nhau. Những khuôn mẫu kỹ thuật kết tinh từ Agent lập trình — cách tổ chức Skill, việc cô lập workspace, ràng buộc quyền hạn khi gọi tool, việc nạp context theo tầng — đang được di chuyển sang các kịch bản văn phòng của doanh nghiệp.

### 2. Ưu tiên triển khai ở những kịch bản có không gian chịu lỗi lớn và con người đỡ lưng được

Về kịch bản triển khai, rộng nhất là hiệu suất nhân viên, kỹ thuật code và phân tích dữ liệu. Tỉ lệ đưa Agent vào quy trình nghiệp vụ lõi của doanh nghiệp chưa tới 40%, thấp hơn rõ rệt. Thứ tự này nhất quán với tỉ lệ lên production ở chương một: **Agent đi vào những kịch bản có con người đỡ lưng được trước; còn muốn vào các kịch bản nghiêm túc như quy trình nghiệp vụ lõi thì cần bộ quản trị đi kèm hoàn chỉnh hơn.**

![image](assets/imgs/2026-agent-developer-survey/image-006.png)

> Phần Xây dựng của white paper lấy Harness làm trừu tượng cốt lõi, rồi tách Skill, Memory, Knowledge, Tool thành các chương riêng như những năng lực tổ hợp được — mục đích là đưa ra một khuôn mẫu xây dựng không buộc chặt vào framework cụ thể. Trong điều kiện thị trường mà việc chọn lựa còn chưa hội tụ, những trừu tượng di chuyển được có giá trị thực tế hơn việc chốt một framework.

## Năm — Nút thắt năng lực ở tầng context, tool và giao thức

### 1. Vấn đề của context không nằm ở kích thước cửa sổ, mà ở chiến lược ghi vào, loại bỏ và tra cứu

Trong phần khảo sát về các điểm đau ở memory, context và tool, số người nói không có điểm đau rõ rệt chỉ chưa tới 10%. Hai vị trí đầu là tra cứu không chính xác (54%) và thiếu cơ chế cập nhật, lãng quên cho memory (48%) — đều không phải những vấn đề giải quyết được bằng cách mở rộng cửa sổ context; còn giới hạn cửa sổ chỉ xếp thứ ba. Phía tool có cấu trúc tương tự: quá nhiều tool, khó chọn (52%), gọi tool do ảo giác (50%). Nhìn tổng thể, **cách tổ chức tool và chất lượng phần mô tả quyết định tỉ lệ gọi thành công nhiều hơn là số lượng tool.**

> Phần Vận hành của white paper, trong *Chương 8 — Lưu trữ trạng thái Agent và tài sản ngữ nghĩa*, sẽ bàn về lưu bền, chỉ mục vector và tra cứu, cung cấp nền cho việc triển khai memory; còn phần Quản trị, trong *Chương 15 — Khám phá và quản lý tài sản AI*, bàn cách tổ chức phần mô tả tool, version và việc khám phá theo nhu cầu.

![image](assets/imgs/2026-agent-developer-survey/image-007.png)

### 2. Thứ MCP còn thiếu là bộ đi kèm cấp doanh nghiệp, chứ không phải việc hiểu giao thức

Doanh nghiệp đã quan tâm hoặc đã triển khai MCP cộng lại là 37%, nhưng số thực sự hoàn tất triển khai riêng trong nội bộ doanh nghiệp thì chỉ có 9%. Muốn chạy MCP thật trong doanh nghiệp thì cần registry riêng, danh tính và xác thực thống nhất, quản lý version và canary, lưu dấu kiểm toán, cùng việc tích hợp với gateway — mà những thứ đó đều không phải do bản thân quy phạm giao thức cung cấp. Đồng thời, 28% người tham gia khảo sát nêu rõ nhu cầu về quản lý dịch vụ MCP và registry; tỉ lệ này gần với tỉ lệ đã triển khai, cho thấy nhu cầu đang chuyển từ nhận thức sang thực thi kỹ thuật.

![image](assets/imgs/2026-agent-developer-survey/image-008.png)

> Phần Quản trị của white paper, trong *Chương 15 — Khám phá và quản lý tài sản AI*, đưa ra Agentic Resource Registry, gom Prompt, Skill, MCP Server, Agent vào một hệ đăng ký, gắn version và khám phá theo nhu cầu thống nhất. Còn *Chương 9 — AI Gateway và quản trị traffic thống nhất* sẽ trình bày thực tiễn triển khai việc kiểm soát MCP.

## Sáu — Nhu cầu năng lực ở nền vận hành và tầng gateway

### 1. Việc dùng nhiều model đã là sự thật hiển nhiên, nên cần một lối vào thống nhất để gánh

Định tuyến đa model và tự động hạ cấp được 63% doanh nghiệp liệt là năng lực gateway cần nhất — đây cũng là nhu cầu đơn lẻ có tỉ lệ cao nhất trong đợt khảo sát này. Task khác nhau khớp model khác nhau, model chính không khả dụng thì hạ cấp, chọn động theo chi phí và độ trễ. Loại nhu cầu này không giải quyết từng cái một trong code ứng dụng được, mà cần một lối vào traffic thống nhất để gánh.

### 2. Việc quy kết chi phí trở thành trọng tâm quan sát sớm hơn cả tuân thủ

Trong các nhu cầu về năng lực observability, quy kết chi phí (50%) xếp ngay sau truy vết toàn chuỗi, và cao hơn kiểm toán tuân thủ cùng giám sát chất lượng ngữ nghĩa. Mức dùng Token của phần lớn doanh nghiệp còn chưa lớn, nhưng họ đã chuẩn bị cho việc chi phí nhìn thấy được và phân bổ được. Đây gần với một nhu cầu mang tính phòng ngừa: dựng năng lực quan sát và ràng buộc chi phí trước khi quy mô lên, chứ không đợi hoá đơn mất kiểm soát rồi mới bù.

![image](assets/imgs/2026-agent-developer-survey/image-009.png)

> Phần Vận hành của white paper tách riêng thành các chương *Agent Runtime và sandbox*, *Task bất đồng bộ và quy trình tự động hoá của Agent*, *Giao tiếp phân tán và quản trị message của Agent*, *Lưu trữ trạng thái Agent và tài sản ngữ nghĩa*, *AI Gateway và quản trị traffic thống nhất*, và hợp thành phần Vận hành. Trong đó, việc mở rộng AI Gateway từ một lối vào traffic thành một lối vào quản trị thống nhất — gánh tập trung phần đăng ký và tra cứu tool, kiểm tham số, định tuyến model, circuit breaker và retry, truy vết chuỗi cùng nhãn chi phí — chính là câu trả lời trực tiếp cho nhóm nhu cầu này.

## Bảy — Tối ưu là điểm khó trọng yếu khi triển khai Agent, nhưng lại thiếu một khung thực thi hiệu quả

### 1. Ngày càng nhiều đội bắt đầu đánh giá Agent, nhưng phổ biến vẫn dừng ở giai đoạn con người lấy mẫu kiểm tra

Khi được hỏi dùng phương pháp nào để đánh giá hiệu quả của Agent, việc con người lấy mẫu kiểm tra đứng vững ở vị trí đầu với 55%; còn việc đánh giá tự động dựa trên trajectory vận hành chỉ có 6%, dùng Benchmark công khai chỉ chưa tới 5%; ngoài ra 28% còn chưa dựng được một hệ đánh giá mang tính hệ thống. Trong ba biện pháp đánh giá thường gặp là LLM-as-Judge (dùng model chấm điểm output của model), thí nghiệm A/B và hồi quy trên dataset offline, thì số doanh nghiệp dùng ít nhất một trong ba là 34%.

Hậu quả của việc mục tiêu đánh giá không rõ và hạ tầng chưa chín thể hiện ở tỉ lệ thành công của task. Doanh nghiệp có tỉ lệ thành công task Agent đạt trên 90% chỉ khoảng một phần mười; đạt trên 70% là khoảng 55%; còn 16% người tham gia khảo sát thì hoàn toàn chưa từng định lượng tỉ lệ thành công. Nhóm doanh nghiệp này thực chất không phán định được Agent của mình có đang làm việc bình thường không.

### 2. Năng lực đánh giá là con đường bắt buộc để nâng độ tin cậy của Agent trên production

Trong số doanh nghiệp đã dùng các biện pháp đánh giá, tỉ lệ đạt thành công task trên 70% cao gấp khoảng hai lần so với doanh nghiệp không có hệ đánh giá; còn trong nhóm đã lên production và lặp liên tục thì tỉ lệ này đạt 84%. Ba thứ liên quan với nhau: **năng lực đánh giá chống đỡ cho việc lặp, việc lặp nâng độ tin cậy, và độ tin cậy mới khiến việc đánh giá liên tục trở nên khả thi.** Ngược lại, đội thiếu đánh giá thì vừa không định vị được vấn đề, vừa không chứng minh được thay đổi có hiệu quả, nên dễ dừng lâu ở giai đoạn thí điểm. Điều này hô ứng với phân bố "gần một nửa đang phát triển, chỉ khoảng một phần năm lên production" ở chương một.

![image](assets/imgs/2026-agent-developer-survey/image-010.png)

> White paper dành riêng một phần Tối ưu, trình bày chi tiết phương pháp luận hoàn chỉnh cùng các thực tiễn liên quan từ tối ưu model tới tối ưu Agent. Trong đó, việc tối ưu Agent còn thiếu chuẩn trong ngành, nên chúng tôi triển khai từ dữ liệu trajectory, xử lý dữ liệu runtime, xây golden dataset, tối ưu dựa trên Badcase, tới tự tiến hoá có kiểm soát.

## Tám — Tóm tắt: từ kiểm chứng tính khả thi chuyển sang độ tin cậy và chi phí

Về phía đầu tư thì đã vượt qua giai đoạn kiểm chứng: gần một nửa doanh nghiệp tham gia khảo sát đang làm Agent, nhưng chỉ khoảng một phần năm triển khai Agent vào môi trường production, còn số lặp liên tục thì chưa tới 10%. Điểm tắc không phải ý chí doanh nghiệp, cũng không phải năng lực model, mà là **bộ đi kèm kỹ thuật dùng ngay được để tối ưu tầng Harness.**

Về hình thái Agent thì hiện tượng phân mảnh khá rõ. Quy mô Single Agent và Multi-Agent gần nhau, và Hybrid là trạng thái lâu dài chứ không phải giai đoạn quá độ. Tương tự, việc chọn tool và framework cũng chưa hội tụ — điều đó nghĩa là những trừu tượng di chuyển được có giá trị hơn việc đặt cược vào một framework cụ thể.

Định tuyến thống nhất và quản trị chi phí, việc tối ưu context và memory, cùng hạ tầng đánh giá chưa chín — đó là những điểm còn lại cần bù.

Khi thiết kế mục lục, bản white paper này đã tham chiếu chính báo cáo khảo sát lập trình viên đó, và thiết kế các chương tương ứng nhắm vào những điểm đau mà doanh nghiệp gặp khi triển khai. Phần Kiến trúc trình bày các hình thái ứng dụng Agent cùng khuôn mẫu xây dựng chủ đạo trong ngành, và đưa ra các kiến trúc thiết kế chủ đạo, với việc chọn lựa được định nghĩa dựa trên độ chín và ranh giới trách nhiệm. Phần Xây dựng lấy Harness làm trừu tượng cốt lõi, đưa ra cách tổ hợp không buộc chặt vào framework. Phần Vận hành thiết kế các nội dung Runtime và sandbox, triển khai phân tán, AI Gateway và quản trị traffic thống nhất, task bất đồng bộ và quy trình tự động hoá của Agent, cộng tác và orchestration Multi-Agent, giao tiếp phân tán và quản trị message của Agent — đáp lại những nhu cầu hạ tầng tập trung nhất. Phần Quản trị xử lý observability và bảo mật, đưa chất lượng từ chỗ con người đỡ lưng sang một cơ chế mở rộng quy mô được; còn phần Tối ưu thì đi theo con đường từ Trace tới Trajectory, để hệ thống có được năng lực tốt dần lên liên tục.

Với những vấn đề mà báo cáo khảo sát nêu ra, white paper sẽ thử đưa ra từng câu trả lời tham chiếu triển khai được.
