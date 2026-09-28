# Từ eval-driven tới bàn giao đầu-cuối: thực tiễn nâng hiệu suất R&D cho sản phẩm bảo mật AI Agent

## Một — Nút thắt hiệu suất của việc phát triển sản phẩm AI Agent nằm ở đâu?

Sau khi sản phẩm AI Agent vào môi trường production, thứ mà đội R&D đối diện là các task, dữ liệu và đường thực thi liên tục thay đổi. Một lần nâng cấp model, chỉnh prompt hay sửa tool có thể giải quyết được vấn đề trước mắt, nhưng cũng có thể ảnh hưởng tới các kịch bản khác. Chứng minh phần sửa hữu hiệu ra sao, tránh làm lại lặp đi lặp lại ra sao — đó là những vấn đề then chốt trong quá trình bàn giao.

**Agentic SOC** là sản phẩm vận hành bảo mật lấy việc cộng tác nhiều Agent làm cốt lõi, gom các cảnh báo rời rạc từ nhiều cloud, nhiều sản phẩm bảo mật thành những sự kiện bảo mật điều tra được và xử trí được, phủ các khâu thẩm định cảnh báo, điều tra ứng phó, săn tìm mối đe doạ và vòng khép kín vận hành. Các thất bại, phần người dùng chỉnh sai và kết quả task trong production thật liên tục cung cấp input cải tiến cho đội R&D.

Những input đó cũng phơi ra hai loại nút thắt: **về phía kỹ thuật**, khi thiếu một cơ chế kiểm chứng ổn định, đội khó phán định năng lực có thực sự cải thiện không; **về phía tổ chức**, khi bàn giao chia đoạn theo vị trí công việc, mục tiêu phải giải thích nhiều lần, còn thay đổi thì phải qua xếp lịch, bàn giao và nghiệm thu tập trung. Sau khi việc thực thi từng task nhanh lên, thì phần chờ đợi và phối hợp lại thành ràng buộc nổi bật hơn.

Vì vậy, muốn nâng hiệu suất thì phải thông đồng thời hai chuỗi: **chuyển vấn đề production thành phần cải thiện năng lực kiểm chứng được**, và **nối phần việc xuyên chức năng thành một kết quả chung cho khách hàng**. Cái trước giảm thử sai và làm lại, cái sau rút ngắn chờ đợi và bàn giao.

![image](../../assets/imgs/chapter-25/image-038.png)

## Hai — Từ một lần sửa khiếm khuyết tới tài sản R&D tái dùng bền vững

Một vấn đề điển hình là việc nhận diện kẻ tấn công và nạn nhân bị đảo ngược: thực tế là A tấn công B, nhưng báo cáo lại xuất ra B tấn công A. Loại lỗi này ảnh hưởng tới kết luận điều tra, thậm chí ảnh hưởng tới hướng xử trí về sau, nên không thể chỉ sửa câu chữ của báo cáo là xong.

Khi định vị, chúng tôi phát hiện ba module báo cáo, dòng thời gian và khuyến nghị xử trí mỗi bên tự suy ra vai trò, mà thiếu một phán định dùng chung. Mỗi module đều có thể đưa ra một cách giải thích trông hợp lý, nhưng ghép lại thì mâu thuẫn. Căn nguyên là ngữ nghĩa vai trò chưa được biểu đạt và tái dùng một cách thống nhất.

Phần cải tạo thực tế là sinh ra các trường thống nhất về kẻ tấn công, nạn nhân cùng kết quả phán định, rồi để ba module đọc. Nhờ vậy, đội R&D chuyển phần suy luận rời rạc thành một kết quả có cấu trúc dùng chung, khiến đối tượng sửa mở rộng từ một bản báo cáo sang tính nhất quán giữa các module.

Sửa xong thì chạy lại task gốc, xác nhận A là kẻ tấn công, B là nạn nhân, và báo cáo, dòng thời gian cùng khuyến nghị xử trí giữ nhất quán. Trường vai trò và logic đọc đi vào version chính thức, còn mẫu khiếm khuyết gốc thì vào baseline đánh giá, để tiếp tục được đo lại mỗi khi model, prompt hay luật thay đổi.

Quá trình này hình thành hai loại tài sản: **trường dùng chung** mang ngữ nghĩa nghiệp vụ rõ ràng, và **mẫu hồi quy** lưu lại đúng những điều kiện từng gây thất bại. Ở vòng lặp sau, đội tái dùng được chuẩn phán định, phát hiện sớm hơn các thụt lùi cùng loại, và hạ được chi phí định vị lặp cùng sửa lặp.

Với đội R&D, điểm kết của việc xử lý khiếm khuyết đã mở rộng từ "output hiện tại đúng" sang "hành vi đúng kiểm chứng được liên tục". Kinh nghiệm production nhờ đó đi vào hệ kỹ thuật, chứ không còn nằm lại trong trí nhớ của người xử lý.

![image](../../assets/imgs/chapter-25/image-039.png)

## Ba — R&D do đánh giá dẫn dắt: làm rõ hướng đi và chuẩn hoàn thành của mỗi vòng lặp

### Dựng baseline đánh giá so sánh được và tái lập được

Kết quả task của Agent thường gồm nhiều khâu. Bản báo cáo cuối trông có vẻ đầy đủ không có nghĩa là phần phán định lối vào, liên kết bằng chứng và phạm vi ảnh hưởng đều đúng. Một phép đánh giá hữu hiệu phải quan sát đồng thời chất lượng kết quả, quá trình thực thi và năng lực từng mục, để tách câu "hiệu quả kém" chung chung thành những vấn đề định vị được.

Agentic SOC dùng **SOCBench** để dựng baseline có version, gồm 211 task điều tra thật, phủ 16 loại kịch bản task, 9 chiều chấm điểm và 5 giai đoạn điều tra. Bộ đề được thiết kế theo tần suất phát sinh và mức rủi ro trong production, vừa phủ các tấn công thường gặp, vừa giữ lại các task tần suất thấp nhưng rủi ro cao, đồng thời đưa vào 12 đề về test bảo mật và nhiễu môi trường, để kiểm xem hành vi đã uỷ quyền có bị phán nhầm thành tấn công không.

Các task chuỗi dài được cộng điểm theo định vị môi trường, xác nhận lối vào, khôi phục chuỗi chính, mở rộng ảnh hưởng và kết luận điều tra. Bộ đề, cấu hình thực thi và quy phạm chấm điểm đều được gắn version thống nhất, để các thay đổi ứng viên được so sánh trong điều kiện rõ ràng, tránh việc điều kiện test thay đổi làm nhiễu phán định về version.

### Đưa phản hồi đánh giá vào quy trình sửa và phát hành

Việc đánh giá đảm nhận ba trách nhiệm liên tiếp: **định vị điểm yếu, kiểm chứng cải tiến, hồi quy liên tục.** Mẫu thất bại giúp đội R&D xác định hướng sửa; version ứng viên thì phải chứng minh vấn đề gốc đã được sửa, và kiểm tra trong phạm vi đã giao ước có xuất hiện thụt lùi không; còn các thất bại mới phát hiện thì tiếp tục vào tập hồi quy.

Trước khi phát hành thì kết hợp thêm việc đo lại khiếm khuyết, đánh giá trên tập test độc lập, phát lại task production và kiểm chứng canary. Qua được phần đánh giá nghĩa là hình thành một version ứng viên; còn việc lên production cuối cùng thì vẫn cần con người phê duyệt dựa trên bằng chứng đánh giá và rủi ro.

Giá trị trực tiếp của hệ đánh giá với hiệu suất R&D là rút ngắn chu kỳ phản hồi "đề xuất sửa — xác nhận hữu hiệu". Đội phân bổ được đầu tư theo đúng khoảng hụt năng lực cụ thể, nhận ra thụt lùi sớm hơn, và tái dùng được quá trình kiểm chứng. Bản thân hệ đánh giá cũng cần được bảo trì; lợi ích của nó đến từ phần bất định và phần việc lặp giảm dần trong các vòng lặp về sau.

![image](../../assets/imgs/chapter-25/image-040.png)

## Bốn — Tự chủ có kiểm soát: mở rộng phạm vi task R&D mà Agent gánh được

Khi mục tiêu task và điều kiện hoàn thành mô tả rõ ràng được, Agent gánh được nhiều phần việc phân tích, sửa và kiểm chứng hơn. Nhưng việc tự chủ đẩy tới cần có ranh giới, nếu không thì việc lệch mục tiêu hay retry vô ích sẽ ngốn nhiều thời gian R&D hơn.

**Ranh giới mục tiêu** quy định vấn đề cần giải quyết, độ ưu tiên, phạm vi input và sản phẩm kỳ vọng; **ranh giới chất lượng** yêu cầu vấn đề gốc đo lại phải qua, phạm vi đã giao ước không được thụt lùi, và khi thiếu bằng chứng thì không được xuất ra kết luận chắc chắn; **ranh giới quyền hạn** giới hạn dữ liệu, tool và môi trường truy cập được, đồng thời yêu cầu các thay đổi trong production phải truy vết được và rollback được; còn **ranh giới dừng** thì quy định khi bất thường hay không phán định đáng tin được thì chuyển cho con người.

Bốn loại ranh giới đó biến việc uỷ nhiệm bằng miệng thành ràng buộc thực thi được. Các task có chuẩn rõ ràng, đánh giá được và rollback được thì để Agent đẩy tới trong phạm vi được uỷ quyền; còn các task rủi ro cao, nhập nhằng cao và không đảo ngược được thì cần chuyên gia dẫn dắt.

Việc cộng tác người – máy nhờ đó đi từ hỗ trợ thực thi, dần phát triển tới tự chủ từng bước, rồi tới việc hoàn tất vòng khép kín phân tích, sửa và kiểm chứng trong phạm vi ranh giới. Phần nâng hiệu suất đến từ việc giảm các thao tác thủ công từng bước, và dồn sự chú ý của chuyên gia vào những phán đoán then chốt. Mục tiêu, chuẩn chất lượng và quyền quyết định cuối cùng vẫn do con người định nghĩa; còn phạm vi tự chủ thì nên mở rộng đồng bộ với năng lực kiểm chứng.

![image](../../assets/imgs/chapter-25/image-041.png)

## Năm — Tái cấu trúc việc cộng tác bàn giao: để phần nâng hiệu suất kỹ thuật chuyển thành chu kỳ nhu cầu ngắn hơn

Sau khi phía Agent đã hình thành vòng khép kín cho task, việc bàn giao sản phẩm vẫn có thể mắc kẹt trong kiểu cộng tác tuần tự: bộ phận sản phẩm làm xong nhu cầu, thiết kế làm xong tương tác, bảo mật chốt xong chuẩn đo, front-end và back-end mỗi bên hiện thực, rồi test nghiệm thu tập trung ở cuối. Mỗi vị trí đều có chuẩn hoàn thành cục bộ, nhưng kết quả cuối thì phải tới cuối chuỗi mới kiểm chứng được.

Muốn rút ngắn chuỗi thì phải dựng lại bốn cơ chế. **Thứ nhất, thống nhất kết quả cho khách hàng**, để hiệu quả chức năng, việc sử dụng thật và giá trị nghiệp vụ thành mục tiêu chung. **Thứ hai, đặt chuẩn kết quả lên trước**, để các chức năng trước khi bắt tay đã dùng chung một bộ chỉ số và chuẩn đo bằng chứng. **Thứ ba, chỉ định một Owner** chịu trách nhiệm từ lúc định nghĩa vấn đề tới lúc kiểm chứng kết quả, điều phối phụ thuộc và điều phối Agent. **Thứ tư, để chuyên gia lĩnh vực tham gia theo mức rủi ro**, gác cửa ở các node then chốt.

Dưới cơ chế này, trải nghiệm sản phẩm, phần bàn giao kỹ thuật và hiệu quả bảo mật đẩy tới song song quanh cùng một bộ điều kiện nghiệm thu. Phán đoán về sản phẩm được kiểm chứng sớm qua nguyên mẫu chạy được, chuẩn đo bảo mật đi vào hệ thống ngay từ giai đoạn thiết kế và hiện thực, còn phần hiện thực kỹ thuật thì liên tục nhận phản hồi về hiệu quả. Độ lệch phơi ra sớm hơn, và áp lực tích hợp tập trung cùng làm lại ở cuối chuỗi cũng giảm theo.

Trách nhiệm của từng vị trí cũng mở rộng theo. Product manager bắt đầu bàn giao một phần front-end và nguyên mẫu chạy được; kỹ sư bảo mật tham gia vào thiết kế sản phẩm và hiện thực kỹ thuật, chuyển kinh nghiệm lĩnh vực thành năng lực đánh giá được; kỹ sư R&D hoàn thành vòng khép kín front-end — back-end, và nhìn ngược lên để hiểu nhu cầu khách hàng, lộ trình sản phẩm cùng tác động thương mại. Agent cung cấp phần chống đỡ thực thi cho việc mở rộng trách nhiệm đó.

Việc mở rộng trách nhiệm vẫn phải theo phân công theo rủi ro. Các task xuyên lĩnh vực nhưng rủi ro kiểm soát được thì Owner làm được nhờ Agent; còn các task rủi ro cao, bất định cao thì vẫn do chuyên gia dẫn dắt. Trọng tâm của việc tối ưu tổ chức là giảm những lần bàn giao không cần thiết, đồng thời để phán đoán chuyên môn đi vào quy trình kịp thời.

Tương ứng, đội cần tăng cường năng lực cấu trúc hoá vấn đề, orchestration task AI, bàn giao kỹ thuật đầu-cuối và phán đoán giá trị nghiệp vụ. Khi đo đóng góp cá nhân, cũng dần chuyển sang quan tâm kết quả chạy được và hiệu quả với khách hàng, để phạm vi trách nhiệm, năng lực thực thi và tiêu chí đánh giá khớp với nhau.

![image](../../assets/imgs/chapter-25/image-042.png)

## Sáu — Tóm tắt

Việc nâng hiệu suất bền vững cho R&D sản phẩm AI Agent đòi hỏi nối được vấn đề thật, phần cải tiến kỹ thuật và kết quả với khách hàng lại với nhau. Các thất bại trong production và phần người dùng chỉnh sai cung cấp hướng cải tiến; hệ đánh giá thống nhất cung cấp căn cứ phán định; còn cơ chế trách nhiệm xuyên suốt thì đẩy phần cải tiến đi tới chỗ bàn giao được. Ba thứ cùng quyết định đội có chuyển được tốc độ thực thi nhanh hơn thành chu kỳ bàn giao ngắn hơn không.

Ở tầng kỹ thuật, nên kết tinh một lần xử lý vấn đề thành năng lực sản phẩm và tài sản kiểm chứng tái dùng được. Ngữ nghĩa nghiệp vụ dùng chung giảm phần suy luận lặp giữa các module; đánh giá có version khiến các thay đổi ứng viên so sánh được và đo lại được; còn mẫu thất bại thì tiếp tục tham gia hồi quy, giúp các vòng lặp sau tái dùng được kinh nghiệm đã có. Chất lượng, chi phí lời gọi và thời lượng thực thi cùng tạo thành căn cứ tối ưu, giúp đội giảm thử sai vô ích và làm lại lặp.

Ở tầng thực thi, các điều kiện về mục tiêu, chất lượng, quyền hạn và dừng cung cấp ranh giới cho phần việc tự chủ của Agent. Các task có chuẩn rõ ràng, đánh giá được và rollback được thì đẩy tới liên tục được, còn chuyên gia thì tập trung xử lý các phán đoán rủi ro cao, bất định cao. Việc mở rộng phạm vi tự chủ phải đồng bộ với năng lực kiểm chứng và năng lực kiểm soát rủi ro.

Ở tầng tổ chức, kết quả chung cho khách hàng, chuẩn nghiệm thu đặt trước và Owner đầu-cuối nối phần việc xuyên chức năng lại với nhau. Trải nghiệm sản phẩm, phần bàn giao kỹ thuật và hiệu quả bảo mật cùng đẩy tới quanh cùng một kết quả, khiến độ lệch phơi ra sớm hơn, giảm xếp hàng, bàn giao và làm lại ở cuối chuỗi. Trách nhiệm của các vị trí mở rộng theo, và đội cũng cần tăng cường đồng bộ năng lực điều phối AI, bàn giao kỹ thuật và phán đoán nghiệp vụ.

Thực tiễn của Agentic SOC cho thấy vòng khép kín kỹ thuật và việc cộng tác tổ chức cần tiến hoá cùng nhau. Nguồn hiệu suất R&D lâu dài là ở chỗ: để mỗi lần thất bại tích luỹ thành căn cứ kiểm chứng cho vòng lặp sau, để mỗi lần bàn giao kết tinh thành năng lực tái dùng được của đội, và liên tục lấy kết quả thật với khách hàng để kiểm nghiệm giá trị của những cải tiến ấy.
