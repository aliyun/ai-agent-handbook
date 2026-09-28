# Chương 23 — Tự tiến hoá có kiểm soát

Một Agent gỡ sự cố đã từng giải quyết thành công một loại vấn đề, nhưng lần sau gặp sự cố tương tự vẫn có thể tra lại tài liệu từ đầu, thử những tham số sai, thậm chí bỏ sót bước then chốt đã xác nhận lần trước. Một Agent code hoàn thành được phần lớn phần sửa, nhưng cứ sót phần test ở một loại task nào đó. Thứ đội nghiệp vụ quan tâm là: làm sao để những phương pháp đã đi thông được áp dụng ổn định, để các vấn đề lặp lại giảm dần, đồng thời kiểm soát được thời gian và chi phí của mỗi task?

Chương trước giúp đội phát hiện vấn đề và so sánh thay đổi. Dưới đây bắt đầu từ việc sử dụng thực tế: tạo và kết nối kho kinh nghiệm, sắp xếp các phương pháp đã kiểm chứng thành tài sản gọi được, rồi dùng mẫu thất bại để cải thiện Skill và cơ chế vận hành.

## 23.1 Trước hết chọn một loại task đáng làm tốt lặp đi lặp lại

Vòng tối ưu đầu tiên hợp với những nghiệp vụ có mục tiêu rõ ràng, lặp lại thường xuyên và kiểm tra được kết quả. Người phụ trách nghiệp vụ nói rõ thế nào là hoàn thành trước, rồi người duy trì Agent tìm vài task thành công và vài task thất bại từ Trace, đối chiếu xem chúng thực thi ra sao.

Khi chọn hướng, hãy kiểm tra xem Agent đang thiếu phương pháp, đang sinh lặp cùng một đoạn code, hay đang bị tool và môi trường thực thi cản trở.

| Hiện tượng nghiệp vụ | Thử gì trước | Mong có thay đổi gì |
| --- | --- | --- |
| Sự cố tương tự lúc nào cũng phải khám phá lại, phương pháp chỉ áp dụng được trong điều kiện riêng | Dựng kho kinh nghiệm, gợi lại khi task bắt đầu hay khi gặp vấn đề liên quan | Tìm ra đường hữu hiệu nhanh hơn, giảm các lần thử vô ích |
| Thường bỏ sót phần kiểm tra tiền đề, test hay xác nhận kết quả | Bổ sung hay sửa Skill | Task cùng loại hoàn thành các bước cần thiết ổn định hơn |
| Viết đi viết lại các truy vấn thống kê, phân trang hay script làm sạch gần giống nhau | Gom thành template SQL, Script hay tool | Giảm việc sinh lặp và debug lặp, thống nhất chuẩn đo nghiệp vụ |
| Quy trình cố định lúc nào cũng phải có người ngồi canh mới chạy tiếp | Đưa các bước ổn định vào Workflow | Để phần kiểm tra tiền đề, thực thi và nghiệm thu chạy theo giao ước |
| Gửi trùng, trạng thái không rõ sau khi khôi phục, task dài quên mất ràng buộc | Sửa Harness, tức cơ chế quản lý thực thi và context của Agent | Giảm các thao tác nghiệp vụ lặp và lỗi do gián đoạn khi chạy |

Chẳng hạn, Agent gỡ sự cố truy vấn với phạm vi quá rộng thì có thể bổ sung vào Skill trước phần "thu hẹp phạm vi theo thời điểm và đối tượng sự cố"; còn nếu tool truy vấn không hỗ trợ lọc thì để người duy trì tool bổ sung năng lực.

## 23.2 Dựng kho kinh nghiệm cho tốt, để đội kiểm tra được đã khai thác ra những gì

Kho kinh nghiệm hợp để lưu "gặp tình huống nào thì xử lý ra sao". Nó giúp các task khác nhau tái dùng phương pháp, và cũng giúp người duy trì phán định từ nguồn gốc rằng phương pháp có đáng tin không. Trong việc gỡ sự cố qua log, cách làm "tìm bất thường đầu tiên trước, rồi mới phân tích chuỗi retry" có giá trị tái dùng hơn nhiều so với đáp án cuối của một sự cố cụ thể.

**Trước hết xác nhận có trajectory dùng được.** Trong phần quan sát và tối ưu Agent, hãy chọn AgentSpace và ứng dụng, mở một task thật, kiểm tra mục tiêu người dùng, các lời gọi tool then chốt và kết quả có nhìn thấy được không. Nếu chỉ có đáp án cuối thì hãy bù phần tích hợp trước; kinh nghiệm cần biết phương pháp được thực thi ra sao và kết quả dựa vào căn cứ nào.

**Rồi tạo kho kinh nghiệm và chọn nguồn.** Ở lối vào kho kinh nghiệm, điền tên, mô tả, chọn ứng dụng và thời điểm bắt đầu khai thác. Lần đầu có thể chọn dữ liệu gần đây quanh một nhóm task tương đồng, để phương pháp task và điều kiện tool khá nhất quán. Khoảng thời gian cần phủ cả quá trình thành công, thất bại và khôi phục sau thất bại; không cần vì tăng số bản ghi mà đưa hết phần lịch sử có luật đã lỗi thời vào. Nguồn hiện tại được tổ chức theo AgentSpace đang ở; còn ứng dụng và thời điểm bắt đầu thì chốt lúc tạo, nên trước khi gửi phải đối chiếu cho rõ.

**Tạo xong thì xem tiến độ khai thác, rồi mở các kinh nghiệm tiêu biểu ra.** Có thể chọn trước vài mục liên quan nhất tới nghiệp vụ tần suất cao, rồi kiểm tra ba điều: nó giải quyết vấn đề gì, đề nghị làm hành động gì, và áp dụng trong điều kiện nào. Sau đó quay lại Trace nguồn, xác nhận hành động đó có thực sự xuất hiện không và kết quả có chống đỡ được đề nghị này không.

Chẳng hạn, một mục kinh nghiệm đề nghị "khi không truy vấn ra log thì mở rộng cửa sổ thời gian". Người gỡ sự cố phải phán định thêm: lúc đó là do cửa sổ quá ngắn, hay dữ liệu vốn chưa được thu thập? Trường hợp đầu thì tái dùng được phương pháp truy vấn, còn trường hợp sau thì phải xử lý phần tích hợp trước. Nguồn gốc và điều kiện không áp dụng của kinh nghiệm giúp đội tránh biến một lần xử lý tại hiện trường thành yêu cầu cố định cho mọi task.

Ở giai đoạn này, người quen nghiệp vụ lấy mẫu kiểm tra nội dung, còn người duy trì Agent thì đối chiếu điều kiện tool và phạm vi tích hợp. Nếu kết quả chỉ toàn những yêu cầu chung chung kiểu "phân tích kỹ, gọi tool cho đúng", thì hãy bổ sung trajectory tiêu biểu và thông tin vấn đề trước; còn nếu chọn sai ứng dụng hay khoảng thời gian thì hãy tạo kho dùng thử theo phạm vi đúng.

![image](../assets/imgs/chapter-23/image-001.png)

_Hình: kinh nghiệm được sửa lại theo phản hồi của task; người dùng tập trung kiểm tra nội dung, phạm vi áp dụng và nguồn gốc, rồi quyết định phương pháp nào được đưa vào dùng thử._

## 23.3 Kết nối kinh nghiệm vào Agent và tự mình kiểm chứng một lần gợi lại

Sau khi dựng xong kho kinh nghiệm, cần để Agent mục tiêu đọc nó khi thực thi. Trang gợi lại kinh nghiệm của phần quan sát và tối ưu Agent có sẵn hướng dẫn cài đặt, cấu hình và kiểm chứng. Lấy một Agent kỹ thuật hay gỡ sự cố có hỗ trợ Skill làm ví dụ, người duy trì có thể hoàn tất việc tích hợp theo mạch sau.

1. **Cài Skill gợi lại.** Trong project của Agent mục tiêu, dùng lệnh cài mà trang đưa ra để cài `alibabacloud-agentloop-experience`, và xác nhận Agent phát hiện được Skill đó. Thứ cài ở đây là năng lực truy cập kho kinh nghiệm; còn kinh nghiệm cụ thể thì sẽ được truy vấn lúc chạy.

2. **Cấu hình kho kinh nghiệm hiện tại.** Lấy địa chỉ từ trang gợi lại của kho đó, cấu hình API Key và công tắc gợi lại. Khi dùng file cấu hình của project, hãy đối chiếu thư mục làm việc thực tế của Agent và cấu hình đang có hiệu lực, tránh nối nhầm vào kho kinh nghiệm của project khác.

3. **Cho phép các lời gọi cần thiết.** Bật Skill cùng quyền hạn tool mà nó cần theo cách của Agent mục tiêu. Agent trong bản demo còn cần whitelist Skill và quyền Shell của phiên; các môi trường vận hành khác thì cấu hình theo cách tích hợp của mình.

4. **Chạy một truy vấn thật.** Chọn một mục kinh nghiệm đã kiểm tra, test bằng một vấn đề nghiệp vụ liên quan, và xem nội dung cùng nguồn trả về. Trả về thành công rồi thì mới cho Agent chạy trọn task, quan sát nó dùng kinh nghiệm ở bước nào.

Chẳng hạn, kho kinh nghiệm đã có phương pháp "khi log chỉ chứa phần retry thì tìm ngược về bất thường đầu tiên", thì có thể mô tả cho Agent gỡ sự cố về sự cố hiện tại, khoảng thời gian và hiện tượng retry đã thấy, rồi yêu cầu nó kiểm tra xem có kinh nghiệm liên quan không trước. Khi nghiệm thu thì xem bản ghi lời gọi thực tế, kết quả gợi lại, và việc sau đó nó có tìm bất thường tiền đề một cách có trọng tâm không. Agent nói miệng "đã tham khảo kinh nghiệm lịch sử" thì vẫn phải có lời gọi thật và hành động thực thi tương ứng.

![image](../assets/imgs/chapter-23/image-002.png)

_Hình: Agent mục tiêu lấy được kinh nghiệm liên quan qua năng lực gợi lại, rồi kết hợp task hiện tại mà phán định có dùng không._

Khi tích hợp gặp vấn đề, có thể định vị theo hiện tượng: không phát truy vấn thì kiểm tra Skill đã bật chưa, phần mô tả kích hoạt và quyền hạn tool; truy vấn thất bại thì kiểm tra địa chỉ, không gian, tên kho và thông tin xác thực; truy vấn thành công nhưng rỗng thì trước hết xác nhận trong kho có nội dung liên quan không, cách diễn đạt truy vấn và phạm vi lọc có phù hợp không; trúng kinh nghiệm mà không dùng thì kiểm tra nội dung trả về có vào được context không, tiền đề có áp dụng được không. Tách các trường hợp này ra sẽ tránh việc cứ chỉnh ngưỡng đi chỉnh lại mà không giải quyết được vấn đề tích hợp.

Khi một task thật đã tra được kinh nghiệm liên quan và nhìn ra được nó ảnh hưởng tới hành động ra sao, thì có thể vào phần so sánh hiệu quả.

## 23.4 Dùng thí nghiệm để quyết định gợi lại bao nhiêu và dùng khi nào

Kinh nghiệm có thể rút ngắn việc khám phá, nhưng cũng làm tăng chi phí tra cứu và đọc. Với task ngắn, tra thêm một lần kinh nghiệm chưa chắc đáng; còn với việc gỡ sự cố phức tạp, một phương pháp liên quan có thể tiết kiệm nhiều vòng thử sai. Vì vậy, chiến lược gợi lại cần được chọn dựa trên thí nghiệm nghiệp vụ.

Trước hết hãy giữ một nhóm lần chạy không dùng kinh nghiệm làm Baseline, rồi test chiến lược ứng viên với cùng model, cùng tool và cùng task. Bản demo dùng cách đổi Session ID rồi phát lại cùng một request để quan sát khác biệt. Khi so sánh chính thức thì cũng nên dùng phiên mới và reset trạng thái mà task phụ thuộc, tránh để đáp án, file hay kết quả thao tác còn sót lại từ vòng trước làm vòng sau dễ đi.

Vòng đầu có thể bắt đầu từ một ít kinh nghiệm liên quan rõ ràng, rồi chỉnh từng mục:

| Yếu tố chỉnh được | Dùng thử ra sao | Phán định có phù hợp không ra sao |
| --- | --- | --- |
| Ngưỡng gợi lại | So sánh yêu cầu về độ liên quan chặt hơn và lỏng hơn | Có giảm nội dung không liên quan không, có bỏ sót phương pháp lẽ ra hữu ích không |
| Số lượng trả về | So sánh giữa một mục và vài mục kinh nghiệm | Nội dung thêm vào có bổ sung điều kiện hữu hiệu không, hay chỉ tăng gánh nặng đọc |
| Thời điểm kích hoạt | So sánh việc truy vấn trước khi lập kế hoạch task với việc truy vấn sau khi gặp thất bại liên quan | Có giúp được trước lúc ra quyết định không, có xuất hiện truy vấn lặp mỗi vòng không |
| Vị trí đặt và độ dài | Chỉnh thứ tự tổ chức giữa task hiện tại, phần hướng dẫn sử dụng và kinh nghiệm; lược bớt phần mô tả thừa | Có giữ được các tiền đề then chốt không, Agent có hiểu và áp dụng đúng không |
| Yêu cầu khi sử dụng | Nói rõ kinh nghiệm là tham chiếu lịch sử, phải kiểm điều kiện hiện tại trước khi dùng | Khi điều kiện không khớp thì có bỏ được cách làm lịch sử và điều tra tiếp không |

Người duy trì chỉnh các yếu tố này trong phần cấu hình gợi lại hay trong code tích hợp của Agent. Các tham số trên trang hay trong bản demo dùng để bắt đầu test; còn kết luận cuối thì lấy thí nghiệm trên nghiệp vụ của chính mình làm chuẩn.

Việc nghiệm thu cũng phải quay về nghiệp vụ. Task gỡ sự cố thì xem căn nguyên có đúng không, bằng chứng có đầy đủ không, truy vấn vô ích có giảm không; task code thì xem phần sửa có thoả nhu cầu không, test có hữu hiệu không; task báo cáo thì xem số liệu và chuẩn đo có đúng không. Rồi so sánh thời lượng, Token, số lời gọi tool và chi phí của trọn task, tính cả chi phí gợi lại vào. Khi việc chạy có dao động thì test lặp lại, đồng thời giữ cả những task không cần kinh nghiệm để kiểm tra xem có làm phát sinh thao tác vô ích không. Trước khi quyết định áp dụng, hãy kiểm tra hiệu quả thêm bằng những task cùng loại chưa tham gia vào vòng khai thác này.

Nếu một mục kinh nghiệm khiến Agent cứ mở rộng phạm vi hay bê nguyên tham số lịch sử, thì trước hết hãy thu hẹp phạm vi sử dụng của nó hoặc dừng áp dụng ở phía tích hợp, và giữ lại task bị lỗi làm phản ví dụ. Vòng sau, sau khi sửa nội dung hay chiến lược gợi lại, hãy dùng chính task đó để kiểm chứng. Nhờ vậy, thứ đội điều chỉnh là cách sử dụng cụ thể, chứ không phải một phán đoán chung chung rằng "kinh nghiệm có ích hay không".

## 23.5 Biến các phương pháp ổn định thành Skill, SQL, Script và Workflow

Khi một cách làm đã đủ ổn định, đội có thể sắp xếp nó thẳng thành tài sản dùng được. Kinh nghiệm thì tiện để bổ sung phần tham chiếu theo kịch bản; Skill hợp để diễn đạt phương pháp làm task; SQL và Script hợp để gánh phần tính toán lặp; còn Workflow thì hợp để đẩy các bước cố định. Chúng kết hợp với nhau được.

Lấy việc thống kê định kỳ tỉ lệ thất bại của Agent làm ví dụ: người phụ trách nghiệp vụ xác nhận chuẩn đo của "task" và "thất bại" trước, rồi người duy trì lấy phần truy vấn và quá trình kiểm tra từ các trajectory thành công đã đối chiếu, gom dần thành các sản phẩm sau:

* **Template SQL** giữ lại logic khử trùng lặp, đếm và gom nhóm, và đổi các giá trị hiện trường như ứng dụng, khoảng thời gian thành tham số; kèm theo phần ý nghĩa trường, múi giờ, cách giải thích kết quả rỗng và cách đối chiếu chi tiết. Lần thống kê sau, Agent chọn template rồi điền tham số.

* **Script hay tool** đóng gói các phần việc lặp như đọc phân trang, phân giải kết quả, khử trùng lặp và tổng hợp, nhận tham số ngắn và trả về kết quả có cấu trúc. Người duy trì bổ sung đủ phụ thuộc, thông báo lỗi và ví dụ gọi, thì Agent tái dùng được phần hiện thực đã qua kiểm tra.

* **Skill** nói rõ khi nào dùng bộ phương pháp thống kê này, trước hết phải xác nhận chuẩn đo nào, chọn template ra sao, gặp thay đổi trường thì xử lý thế nào, và xong rồi thì đối chiếu báo cáo ra sao.

* **Workflow** nối "xác nhận phạm vi — chạy thống kê — đối chiếu chi tiết — sinh báo cáo" thành các bước cố định, và sắp sẵn cách xử lý rõ ràng cho dữ liệu rỗng, truy vấn thất bại và chuẩn đo không khớp.

Lúc đầu không cần giao đủ cả bốn loại tài sản cùng lúc. Nếu chi phí lớn nhất đến từ việc sinh lặp truy vấn thì bàn giao template SQL trước; nếu vấn đề là hay bỏ sót nghiệm thu thì sửa Skill trước; còn chỉ khi các bước và nhánh ngoại lệ đã ổn định thì mới đưa vào Workflow. Đội có thể để Agent dựa trên trajectory mà soạn nháp những nội dung này, rồi người quen nghiệp vụ và tool kiểm tra xong mới đưa vào repo của project hay hệ quản lý tài sản sẵn có.

Trước khi áp dụng, hãy đổi một bộ tham số thời gian và ứng dụng khác rồi chạy, kiểm tra kết quả còn đúng không; thêm các mẫu dữ liệu rỗng, bản ghi trùng và trường thay đổi để xác nhận các bất thường phát hiện được. Sau đó phát một request trọn vẹn từ một task mới, kiểm tra Agent có tìm được tài sản, chọn đúng lối vào và gọi đúng không. File đã sinh ra rồi thì vẫn phải hoàn thành bước kiểm chứng sử dụng này.

Kiểu tối ưu này giúp phần ổn định bớt phụ thuộc vào việc sinh tại chỗ, và chia sẻ chuẩn đo cùng cách nghiệm thu cho cả đội. Còn việc thực thi và phát hành tài sản thì chỉ cần nối vào cách phát triển và bàn giao sẵn có.

## 23.6 Dùng mẫu thất bại để thúc đẩy cải tiến Skill, thậm chí cả kỹ thuật Harness

Trước một Badcase đã xác nhận, hãy viết rõ "ở bước nào thì nên làm hành động gì". Người duy trì Skill có thể giao Skill gốc, trajectory thất bại thực tế, các task thành công lân cận và hành vi kỳ vọng cho trợ lý tối ưu, để sinh ra đề xuất sửa cục bộ. SkillForge cung cấp năng lực chẩn đoán dựa trên trajectory, sinh patch và ứng viên; người dùng tập trung kiểm tra phần thay đổi có giải quyết được vấn đề không, có giữ lại được các phương pháp hữu hiệu cũ không, rồi giao ứng viên cho thí nghiệm.

Trong một ca demo chuẩn, Agent bảng tính ghi vào một sheet không tồn tại, thất bại rồi mới truy vấn danh sách sheet và đổi sang mục tiêu thật; một lần khác thì ghi thất bại vì công thức thiếu dấu ngoặc. Từ đó nêu ra được ba sửa đổi cụ thể: xác nhận sheet đích trước khi ghi, kiểm công thức trước khi gửi, và đọc lại ô đích sau khi xong. Khi soát thì ứng được từng mục vào bằng chứng thực thi, chứ không cần viết lại cả Skill thành một mớ lưu ý chung chung dài hơn.

![image](../assets/imgs/chapter-23/image-003.png)

_Hình: giao trajectory thất bại và thành công cho trợ lý tối ưu để có các đề xuất sửa Skill so sánh được; người duy trì chọn ứng viên và tổ chức task kiểm chứng._

Đội code cũng dùng được cùng phương pháp. Nếu Agent hay sửa xong code là kết thúc, trước hết hãy xem nó có nạp Skill tương ứng không, lệnh test có tồn tại không, môi trường test có dùng được không. Thiếu phương pháp thì bổ sung "chạy test liên quan và kiểm kết quả"; thiếu môi trường thì sắp xếp việc sửa môi trường. Skill mới thì kiểm nghiệm chung bằng Badcase mục tiêu, các task vốn thành công, và những task lẽ ra không nên kích hoạt Skill đó — để xác nhận phần sửa không biến thành gánh nặng thêm cho mọi task.

Một số vấn đề thì phải do người duy trì môi trường vận hành xử lý. Lấy chuyện "việc gửi đã xảy ra rồi, nhưng sau khi khôi phục phiên lại gửi lần nữa" làm ví dụ: người phụ trách nghiệp vụ cung cấp bản ghi thao tác lặp, người phát triển Agent đối chiếu Trace để tìm vị trí gián đoạn, còn người duy trì môi trường vận hành thì sửa hành vi khôi phục: phân biệt giữa chưa bắt đầu, đã bắt đầu nhưng chưa biết kết quả, và đã hoàn thành; khi chưa biết kết quả thì đối chiếu trạng thái nghiệp vụ trước rồi mới quyết định hành động tiếp theo. Đây thuộc về cải tiến Harness, và thứ bàn giao là code thực thi hay cấu hình.

Loại thay đổi này cần nghiệm thu có trọng tâm. Trong môi trường kiểm soát được, hãy mô phỏng riêng các tình huống gián đoạn trước khi gửi, gửi rồi nhưng kết quả chưa lưu… rồi kiểm tra sau khi khôi phục có thao tác lặp không, trạng thái nghiệp vụ cuối có đúng không. Còn với vấn đề task dài quên mất ràng buộc, hãy chọn những task thực sự kích hoạt việc nén context, rồi kiểm tra mục tiêu, các giới hạn then chốt và những việc chưa xong có còn được tuân thủ sau khi nén không. Task kiểm chứng phải kích hoạt được đúng vấn đề ban đầu thì mới có lý do để áp dụng phần sửa.

## 23.7 Từ việc con người chọn ứng viên tới việc áp dụng cải tiến có kiểm soát

Đội có thể tăng dần mức tự động hoá theo độ chín của công việc. Mục tiêu nghiệp vụ và yêu cầu nghiệm thu luôn là điểm xuất phát; thứ thay đổi là những phần việc lặp nào được giao cho hệ thống làm.

| Cách làm việc | Đội triển khai ra sao | Kết thúc một vòng thì được gì |
| --- | --- | --- |
| Tối ưu thủ công | Chuyên gia chọn vấn đề, xem trajectory; người duy trì sửa một Skill, một truy vấn hay một chỗ cấu hình vận hành | Một sửa đổi cụ thể và kết quả kiểm chứng trên task tương ứng |
| Tối ưu bán tự động | Hệ thống sắp xếp các kiểu thất bại, khai thác kinh nghiệm hay sinh ứng viên; con người so sánh phương án, sắp xếp thí nghiệm, quyết định áp dụng | Các ứng viên đã qua soát, phần khác biệt của thí nghiệm và phạm vi áp dụng |
| Tối ưu tự động có kiểm soát | Với các thay đổi trong phạm vi đã quy định, quy trình tích hợp tự chạy phần kiểm tra và thí nghiệm, thoả điều kiện thì áp dụng, còn bất thường thì giao lại cho người phụ trách | Các cải tiến được áp dụng theo luật, cùng phản hồi vận hành kiểm tra được |

![image](../assets/imgs/chapter-23/image-004.png)

_Hình: khi mức tự động hoá tăng, hệ thống gánh nhiều thao tác lặp hơn; nhưng mục tiêu nghiệp vụ, điều kiện áp dụng và cách xử lý bất thường thì vẫn phải rõ ràng._

Phần khai thác kinh nghiệm và gợi lại lúc chạy có thể nối trước; còn phần sinh ứng viên Skill thì cứ giao cho người duy trì soát. Các phần thí nghiệm tự động xuyên tài sản, phát hành production và khôi phục thì để đội tự nối các năng lực sẵn có vào hệ vận hành và bàn giao của mình. Thứ hợp để tự động hoá trước là các hành động tần suất cao, phạm vi rõ ràng và kết quả dễ kiểm tra.

Mỗi lần quyết định áp dụng, người phụ trách xác nhận bốn điều: vấn đề mục tiêu có cải thiện không, các task cũ có thụt lùi không, cái giá thêm vào có chấp nhận được không, và Agent mục tiêu có thực sự dùng nội dung đã được kiểm chứng không. Hãy ghi lại version gốc, khác biệt của ứng viên, kết quả thí nghiệm và phạm vi áp dụng, đồng thời giữ cách khôi phục cấu hình cũ khi có bất thường. Khi phần gợi lại kinh nghiệm gặp vấn đề thì phải chỉnh thiết lập gợi lại hay thiết lập áp dụng; chỉ tạm dừng việc khai thác thì không ngăn được các kinh nghiệm cũ tiếp tục ảnh hưởng tới task.

![image](../assets/imgs/chapter-23/image-005.png)

_Hình: vấn đề, phần sửa, thí nghiệm và việc áp dụng thực tế liên kết với nhau, giúp đội phán định hiệu quả và định vị, khôi phục khi có thụt lùi._

Sau khi áp dụng thì tiếp tục kiểm tra các task mới, để lại phương pháp hữu hiệu cho lần thực thi sau, và trả các phản ví dụ về cho phần Dataset ở chương 21 cùng phần đánh giá — thí nghiệm ở chương 22. Giá trị của data flywheel, rốt cuộc thể hiện ở chỗ task hoàn thành ổn định hơn, và ở chỗ đội nói được vì sao từng cải tiến đáng được giữ lại.
