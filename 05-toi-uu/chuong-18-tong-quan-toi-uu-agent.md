# Chương 18 — Tổng quan tối ưu Agent

Tối ưu model thay đổi năng lực của bản thân model; còn tối ưu Agent thay đổi cách một Agent đã lên production sử dụng model, tool và luật nghiệp vụ để làm tốt task một cách lặp đi lặp lại. Các chương 18 đến 23 triển khai quanh cùng một mạch chính: gom những sự thật mà mỗi lần chạy thật để lại thành mẫu tái dùng được, chuẩn kiểm tra được và thay đổi kiểm chứng được, rồi đưa những thay đổi hữu hiệu trở lại môi trường vận hành, tạo thành một **data flywheel** cải tiến liên tục.

Chương này trước hết đưa ra bức tranh tổng thể của data flywheel, giải thích vì sao sau khi Agent lên production vẫn phải liên tục trả lời "task có làm tốt không, và làm tốt thì tốn bao nhiêu", cùng cách các module nối với nhau quanh cùng một task. Năm chương tiếp theo lần lượt triển khai từng khâu của bánh đà: chương 19 tổ chức các bản ghi vận hành rời rạc thành trajectory đọc được và phân tích được; chương 20 dùng Pipeline khai báo để liên tục gia công trajectory thành mẫu nghiệp vụ; chương 21 xác nhận mẫu thành golden dataset tái dùng được; chương 22 dùng đánh giá liên tục để phát hiện vấn đề và dùng thí nghiệm để so sánh thay đổi; chương 23 kết tinh những phương pháp đã kiểm chứng hữu hiệu thành Skill, kinh nghiệm và cải tiến cơ chế vận hành.

Về cách đọc, nên đọc chương này trước để có nhận thức tổng thể, rồi lần lượt tìm hiểu các khâu nối tiếp nhau ra sao. Khi thực sự bắt tay làm thì không cần đọc hết: có thể khởi đầu từ vấn đề mà đội đang muốn giải quyết nhất — gỡ lỗi, chi phí hay kiểm định chất lượng nghiệp vụ — rồi đi theo mạch "tìm ra vấn đề, xác nhận chuẩn, kiểm chứng thay đổi" để làm trọn vòng đầu tiên trước, sau đó bổ sung dần các khâu còn lại. Các chương đều theo cùng một thứ tự: trước hết nói bắt đầu từ đâu, thao tác ra sao, rồi nói có kết quả rồi thì làm gì tiếp.

## 18.1 Sau khi Agent lên production, còn phải liên tục trả lời những câu hỏi nào

Ứng dụng truyền thống chủ yếu quy định hành vi bằng code: điều kiện nào thì vào nhánh nào, gọi interface nào, xử lý giá trị trả về ra sao. Với tiền đề input, trạng thái và phụ thuộc bên ngoài giống nhau, việc thực thi của logic xác định thường dự đoán được và tái lập được. Người phát triển viết test quanh một hợp đồng chức năng rõ ràng để kiểm tra phần hiện thực có đúng kỳ vọng không.

Agent giao một phần các quyết định đó cho model. Người phát triển đưa ra mục tiêu, tool và ràng buộc; model lúc chạy thì hiểu ý định, lập kế hoạch các bước, chọn tool, rồi điều chỉnh hành động theo kết quả trung gian. Cùng một task có thể đi ra những đường khác nhau vì context, phản hồi tool hay kết quả sinh khác nhau.

Lấy việc hoàn tiền làm ví dụ: interface có thể phán định đơn hàng có được hoàn tiền không theo trạng thái và luật; còn Agent thì phải xác nhận từ hội thoại rằng người dùng đang nói tới đơn nào, nhận diện luật áp dụng, chọn thao tác, và kiểm chứng việc hoàn tiền đã xong chưa. Hội thoại kết thúc êm đẹp hay interface không báo lỗi đều không đủ để nói rằng việc đó đã làm đúng.

| Điểm quan tâm | Logic nghiệp vụ xác định trong ứng dụng truyền thống | Yêu cầu mới mà ứng dụng Agent thêm vào |
| --- | --- | --- |
| Đường thực thi | Kiểm tra nhánh mà code quy định | Kiểm tra vì sao model chọn đường này, và phản hồi trung gian ảnh hưởng thế nào tới hành động về sau |
| Tính đúng đắn | Kiểm chứng hợp đồng interface và phép chuyển trạng thái | Đồng thời kiểm chứng mục tiêu đạt được, ràng buộc nghiệp vụ và kết quả bàn giao |
| Định vị sự cố | Tìm bất thường ở code hay phụ thuộc | Phân biệt thêm giữa vấn đề ở cách hiểu, context, cách dùng tool và chiến lược khôi phục |
| Kiểm chứng thay đổi | Kiểm tra chức năng và các kịch bản lịch sử | Còn phải quan sát việc thực thi lặp có ổn định không, và chất lượng, chi phí, độ trễ thay đổi thế nào |

Ứng dụng truyền thống cũng gặp sự cố và thay đổi môi trường; Agent cũng cần unit test và integration test. Khác biệt nằm ở chỗ, việc thực thi của Agent dù không có lỗi kỹ thuật vẫn có thể lệch khỏi mục tiêu nghiệp vụ; và sau một lần task thành công, vẫn phải xác nhận các task cùng loại có làm tốt được lặp đi lặp lại không.

### Benchmark nhắc ta: biết làm, làm xong và bàn giao ổn định là những tầng khác nhau

Các bài test công khai một mặt cho thấy tiến bộ của Agent, mặt khác cũng nói lên rằng độ dài task, ràng buộc nghiệp vụ và điều kiện thực thi đều ảnh hưởng tới hiệu quả. Dưới đây giữ lại vài nhóm kết quả có ngày tháng rõ ràng, dùng để minh hoạ vì sao doanh nghiệp cần dựng phần đánh giá trên chính nghiệp vụ của mình.

| Kịch bản test | Snapshot thí nghiệm công khai | Vấn đề cần lưu ý |
| --- | --- | --- |
| SWE-Bench Pro (Public), task kỹ thuật phần mềm | Báo cáo của OpenAI ngày 2026-03-05: GPT-5.4 đạt **57,7%**, trong môi trường nghiên cứu với thiết lập suy luận xhigh mặc định. [Báo cáo gốc](https://openai.com/index/introducing-gpt-5-4/) | Với task và cấu hình đó, việc hoàn thành đầu-cuối vẫn còn khoảng cải thiện. |
| OSWorld-Verified, thao tác desktop | Cùng báo cáo trên, GPT-5.4 đạt **75,0%**, GPT-5.2 đạt **47,3%**; thành tích con người mà báo cáo trích dẫn là **72,4%**. [Báo cáo gốc](https://openai.com/index/introducing-gpt-5-4/) | Năng lực tiến bộ rất nhanh, nhưng việc bàn giao nghiệp vụ vẫn phải xác nhận từng mục đã hoàn thành chưa. |
| OSWorld 2.0, task quy trình dài | Bài báo v2 ngày 2026-07-13, 108 task, ngân sách 500 bước, mức suy nghĩ cao nhất và cấu hình hành động theo lô: Claude Opus 4.8 có **tỉ lệ hoàn thành nghiêm ngặt 20,6%**, còn điểm từng phần là **54,8%**. [Bảng 3 của bài báo](https://arxiv.org/html/2606.29537v2) | Hoàn thành nhiều bước trung gian không đồng nghĩa với việc đã bàn giao kết quả trọn vẹn. |
| τ-bench, tương tác tool và người dùng dưới luật nghiệp vụ | Bài báo gốc ngày 2024-06-17: GPT-4o với native tool calling đạt **pass¹ 61,2%** trên task bán lẻ, còn **pass⁸ dưới 25%**. [Bài báo gốc](https://arxiv.org/html/2406.12045v1) | Làm đúng một lần rồi thì vẫn phải kiểm tra độ tin cậy khi thực thi lặp. |

Đây là kết quả trong điều kiện test riêng của từng bài, không đại diện cho điểm cao nhất hiện tại, cũng không quy đổi thẳng ra tỉ lệ thành công nghiệp vụ của doanh nghiệp. Điểm từng phần của OSWorld 2.0 không phải tỉ lệ thành công trọn vẹn; còn pass⁸ của τ-bench nghĩa là cùng một task chạy tám lần đều thành công, khác với pass@8 nghĩa là "trong tám lần có ít nhất một lần thành công".

Sau khi lên production, đội ngũ phải liên tục trả lời hai nhóm câu hỏi: **task có làm tốt không, và làm tốt nó thì tốn bao nhiêu.** Một trajectory trả lời đúng có thể đã tra đi tra lại cùng một tài liệu; còn một lần thực thi giảm rõ rệt Token cũng có thể đã bỏ mất phần kiểm chứng cần thiết. Việc tối ưu phải nhìn đồng thời kết quả nghiệp vụ, quá trình thực thi, thời gian và chi phí. Khi model, tool, luật nghiệp vụ hay nhu cầu người dùng thay đổi, các kết luận cũ còn phải soát lại.

Đánh giá lo việc biến "tốt hay không" thành chuẩn kiểm tra được và kết quả cụ thể; còn tối ưu lo thay đổi hệ thống dựa trên những kết quả đó. Hai bên cần nối với nhau qua task thật; nếu không thì đội ngũ hoặc chỉ có điểm số mà không có hướng sửa, hoặc cứ liên tục sửa Prompt mà không nói được sửa nào có tác dụng.

## 18.2 Data flywheel biến kinh nghiệm vận hành thành cải tiến ra sao

Một lần gỡ lỗi thường sửa được vấn đề trước mắt, nhưng chưa chắc giúp được cho lần gỡ lỗi sau. Kỹ sư thì nhớ nguyên nhân, các Trace liên quan thì nằm rải trong log, còn bản ghi việc sửa lại ở một hệ thống khác; vài tuần sau, cùng loại vấn đề xuất hiện lại dưới một cách diễn đạt khác, và đội vẫn phải điều tra từ đầu.

Thứ mà data flywheel giải quyết chính là sự đứt gãy đó. Nó gom những sự thật mà một lần thực thi để lại thành mẫu tái dùng được, dùng đánh giá để tìm ra vấn đề, dùng thí nghiệm để kiểm nghiệm phần sửa, rồi đưa những thay đổi hữu hiệu trở lại môi trường vận hành của Agent. Các trajectory, mẫu, luật chấm điểm, kiểu thất bại và bản ghi version để lại trong quá trình đó cũng dùng tiếp được cho vòng làm việc sau.

Ở đây có hai tuyến phản hồi cần đẩy song song.

**Một tuyến cải thiện dữ liệu và phương pháp phán định.** Chẳng hạn, một Agent chăm sóc khách hàng cần phủ những nội dung khác nhau cho hai loại câu hỏi "có những chức năng gì" và "cấu hình đánh giá ra sao". Bản demo thao tác ban đầu viết luật của cả hai câu vào cùng một evaluator, và chỉ sau khi chạy thí nghiệm mới phát hiện chuẩn đó không phù hợp. Đội ngũ vì thế thêm Rubric ở mức từng câu vào Dataset, điền theo từng câu, rồi sửa phần ánh xạ biến và chạy lại thí nghiệm. Kết quả vận hành đã giúp đội cải thiện chính cái chuẩn dùng để phán định kết quả.

**Tuyến kia cải thiện hành vi của Agent.** Sau khi đánh giá xác nhận là thiếu bước cấu hình, đội có thể bổ sung Skill; phát hiện dùng sai tool thì sửa mô tả tool; phát hiện gửi lại nhiều lần sau timeout thì kiểm tra logic retry và logic kiểm chứng kết quả. Những sửa đổi này trước hết thành ứng viên, rồi qua thí nghiệm cùng điều kiện và hồi quy, mới quyết định có áp dụng không.

Vì vậy, dữ liệu trong việc tối ưu đảm nhận hai vai: giúp phán định nên sửa ở đâu, và giúp bác bỏ những sửa đổi không có tác dụng hay gây thụt lùi. Số mẫu tăng lên, kinh nghiệm được nhập kho, ứng viên được sinh ra — tất cả vẫn chỉ là sản phẩm trung gian. Chỉ sau khi thay đổi hữu hiệu đi vào vận hành, thì kết quả của các task mới mới cung cấp được phản hồi cho vòng kế tiếp.

## 18.3 Nối các module quanh cùng một task

Hình dưới trình bày quan hệ giữa những phần việc này trong bức tranh quan sát và tối ưu Agent. Mạch chính bắt đầu từ việc chạy thật, đi qua khâu tổ chức trajectory và gia công bằng Pipeline, hình thành dữ liệu cho các mục đích khác nhau, rồi vào đánh giá, thí nghiệm và tối ưu; còn các nhánh phụ lo việc con người soát lại, hiệu chỉnh evaluator và sử dụng kinh nghiệm.

*Hình 1 — Kiến trúc tổng thể của data flywheel cho Agent*

![image](../assets/imgs/chapter-18/image-001.png)

**Pipeline là tầng sản xuất dữ liệu trong kiến trúc này.** Trace gốc lấy lời gọi và event làm đơn vị; việc đánh giá có thể phải soát trọn một task; thí nghiệm có thể chỉ cần input task và hành vi kỳ vọng; còn phân tích chi phí lại cần giữ số lời gọi và thời lượng. Pipeline tổ chức dữ liệu theo những mục tiêu đó, trích trường, lọc và khử trùng lặp, biến một bộ luật gia công thành một công việc chạy được theo phạm vi hay theo chu kỳ. Các mục đích khác nhau cấu hình được những pipeline khác nhau; còn những mẫu đã vào Dataset thì bổ sung nhãn được qua các task gán nhãn bằng AI độc lập.

Các module này cuối cùng phải giúp đội ngũ ra được quyết định nghiệp vụ. Có thể chọn lối vào từ chính vấn đề mình đang gặp:

| Module | Người dùng dùng ra sao | Giúp nghiệp vụ hoàn thành cái gì |
| --- | --- | --- |
| Trace và Trajectory | Tìm task theo ứng dụng, câu hỏi, tool hay thời lượng; mở từng bước ra; chọn vào dataset | Tìm ra nguyên nhân trả lời sai, thao tác lặp hay tốn quá nhiều thời gian |
| Pipeline | Chọn nguồn dữ liệu và template, cấu hình trường nghiệp vụ, bộ lọc và phần gán nhãn, xem trước rồi chạy liên tục | Biến bản ghi vận hành mỗi ngày thành mẫu mà nhân viên kiểm định và evaluator dùng thẳng được |
| Dataset và soát thủ công | Nhập câu hỏi thật, điền đáp án tham chiếu và yêu cầu chấm điểm, xác nhận rồi lưu version bộ đề | Tích luỹ đề nghiệm thu nghiệp vụ tái dùng được, giảm việc phải chuẩn bị lại test mỗi lần nâng cấp |
| Evaluator và đánh giá liên tục | Cấu hình chuẩn, chấm thử bằng mẫu thật, rồi kiểm tra liên tục trên phạm vi chỉ định | Phát hiện kịch bản nào cần cải thiện, dồn công sức đọc của con người vào những vấn đề đáng xử lý |
| Experiment | Cho phương án hiện tại và phương án ứng viên làm cùng một bộ đề, so sánh kết quả từng câu, chi phí và thời lượng | Quyết định có đổi model, dùng Prompt mới hay đưa thay đổi lên production không |
| Trace2Optimizers | Từ vấn đề mà cải thiện Skill, tool và cơ chế vận hành, hoặc đưa phương pháp trong lịch sử vào phần gợi lại kinh nghiệm | Giảm việc lặp lại sai lầm và lặp lại khám phá, để các phương pháp đã kiểm chứng hữu hiệu tham gia vào task về sau |

Các module này không nhất thiết xếp thành một dây chuyền chỉ đi được một chiều. Kết quả đánh giá ghi ngược về Dataset được để con người soát lại; việc soát vừa có thể sửa mẫu, vừa có thể sửa evaluator; ứng viên tối ưu thì phải quay về thí nghiệm; còn Skill, Harness hay kinh nghiệm đã áp dụng lại làm đổi các trajectory về sau. Việc phát hành cụ thể thì vẫn phải nối vào quy trình bàn giao của hệ thống mà Agent đang chạy.

Lấy trường hợp timeout khi hoàn tiền làm ví dụ: Agent thấy tool timeout nên gửi lại, nhưng bản ghi nghiệp vụ lại cho thấy thao tác lần đầu đã thành công. Chỉ sau khi bổ sung đủ kết quả nghiệp vụ và thiết lập được mối liên kết, thì trajectory và Pipeline mới tổ chức được các lời gọi liên quan thành mẫu của cùng một task. Đánh giá chỉ ra việc kiểm chứng kết quả có vấn đề; con người xác nhận cách làm đúng; rồi khâu tối ưu mới chọn giữa việc bổ sung truy vấn trạng thái, sửa Skill, hay sửa logic idempotent và retry của tool. Thí nghiệm thì phải phủ các tình huống thành công, thất bại và kết quả chưa chắc chắn, để kiểm tra thao tác lặp có giảm không và các task bình thường có bị ảnh hưởng không.

Ví dụ này cũng cho thấy ranh giới giữa các module: việc tổ chức trajectory không tự bịa ra được sự thật nghiệp vụ, Pipeline không thay được sự xác nhận của con người, đánh giá không thay được việc chạy phương án ứng viên, và việc đã lưu một version không đồng nghĩa với việc Agent đang chạy đã dùng nó. Chỉ khi mỗi khâu liên kết được input, sản phẩm và bản ghi thực thi thực tế của chính mình, thì đội ngũ mới lần được từ kết quả ngược về nguyên nhân, rồi lần theo thay đổi mà kiểm tra hiệu quả.

## 18.4 Bắt đầu từ một vấn đề nghiệp vụ và làm trọn vòng đầu tiên

Khi dựng quy trình tối ưu lần đầu, hãy chọn một vấn đề mà đội thực sự muốn giải quyết. Chẳng hạn, Agent chăm sóc khách hàng của sản phẩm trả lời được khái niệm nhưng thường sót các bước thao tác; Agent kỹ thuật định vị được vấn đề nhưng đọc đi đọc lại cùng một mớ log; Agent báo cáo sinh được file nhưng lại trích dữ liệu đã cũ. Mỗi trường hợp đều có mục tiêu cải thiện rõ ràng và kết quả kiểm chứng được.

Lấy "Agent chăm sóc khách hàng sót bước thao tác" làm ví dụ, một vòng tối ưu có thể hoàn tất như sau:

1. **Tìm ra vấn đề thật.** Trong "Trung tâm dữ liệu → Trajectory Agent", chọn ứng dụng chăm sóc khách hàng, tìm các câu hỏi về thao tác, mở vài task mà người dùng vẫn còn hỏi tiếp, và xem yêu cầu ban đầu cùng câu trả lời thực tế.

2. **Thu thập vấn đề một cách liên tục.** Với số ít task thì thêm thẳng vào dataset; còn khi cần kiểm định chất lượng hằng ngày thì tạo Pipeline, trích câu hỏi, câu trả lời và tham chiếu trajectory, xem trước rồi chạy, ghi liên tục vào tập ứng viên.

3. **Viết yêu cầu nghiệp vụ thành bộ đề.** Người phụ trách sản phẩm hay chăm sóc khách hàng xác nhận đáp án tham chiếu, viết rõ trong `rubric` của từng câu những bước phải có, rồi chọn vào golden set. Ví dụ câu "làm đánh giá ra sao" phải gồm chuẩn bị dữ liệu, chọn evaluator, cấu hình ánh xạ và xem kết quả.

4. **Biết trước chỗ nào chưa làm tốt.** Tạo evaluator, chấm thử vài câu đã biết đáp án, xác nhận nó chỉ ra được phần bị sót, rồi mới dùng cho nhiều task thật hơn. Đánh giá liên tục lo tìm vấn đề mới, còn con người thì bổ sung những câu có giá trị trong đó trở lại bộ đề.

5. **Sau khi sửa thì cho cả hai version cùng làm đề.** Bổ sung Skill thao tác cho Agent chăm sóc khách hàng, hoặc chỉnh phần tri thức và Prompt. Dùng cùng một golden set chạy lần lượt version cũ và mới, xem các câu về thao tác có cải thiện không, các câu bình thường như giới thiệu chức năng có giữ nguyên không, và chi phí cùng thời lượng có chấp nhận được không.

6. **Áp dụng phương án hữu hiệu và tiếp tục nhận phản hồi.** Giao version đã qua kiểm chứng cho quy trình phát hành ứng dụng, và xác nhận nó thực sự có hiệu lực. Các task về sau vẫn đi vào cùng bộ quy trình dữ liệu và đánh giá đó, còn vấn đề mới thì tiếp tục thành đề cho vòng sau.

Thứ vòng này để lại không chỉ là một Prompt đã sửa, mà còn gồm một bộ đề tái dùng được, một bộ yêu cầu chấm điểm, kết quả trước và sau khi sửa, cùng một pipeline thu thập vấn đề liên tục. Lần sau khi đổi model hay nâng cấp sản phẩm, những vật liệu này dùng tiếp thẳng được.

Người phụ trách nghiệp vụ lo xác nhận mục tiêu và yêu cầu đúng; đội ứng dụng lo sửa và tích hợp; còn bộ phận test và vận hành thì dùng bộ đề cố định cùng phản hồi vận hành để kiểm tra hiệu quả. Đợi khi mạch này đã ổn định, hãy tăng thêm kịch bản, task theo chu kỳ và phần tự động hoá. Nguyên lý hiện thực cụ thể sẽ được nói ở chỗ thích hợp phía sau; trước hết, các chương trả lời câu hỏi người dùng bắt đầu từ đâu, thao tác ra sao, và có kết quả rồi thì làm gì tiếp.
