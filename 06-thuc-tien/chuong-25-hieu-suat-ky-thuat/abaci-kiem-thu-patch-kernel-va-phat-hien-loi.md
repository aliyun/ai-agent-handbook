# ABACI — Agent kiểm thử có trọng tâm và phát hiện khiếm khuyết cho patch kernel

## Tóm lược

Sau khi lập trình có AI hỗ trợ trở nên phổ biến, tốc độ thay đổi của các phần mềm nền tảng rủi ro cao như kernel tăng lên rõ rệt, trong khi cửa sổ thời gian dành cho việc bảo đảm chất lượng thì cứ hẹp dần. Kiểm thử kernel truyền thống vốn được thiết kế để khám phá theo chiều rộng; một khi mục tiêu test bị giới hạn vào một lần thay đổi cụ thể, thì vấn đề hiệu suất lộ ra ngay: tuyệt đại đa số năng lực tính toán rơi vào những đường code không liên quan tới lần thay đổi đó.

Bản white paper này giới thiệu **ABACI**, một agent kiểm thử có trọng tâm và phát hiện khiếm khuyết hướng tới patch kernel. Nó lấy mỗi lần thay đổi code làm mục tiêu test, kết hợp phần hiểu ngữ nghĩa của model lớn với phản hồi lúc chạy để tự động dựng các test case thực sự chạm tới được phần code thay đổi, đồng thời dùng kinh nghiệm khiếm khuyết trong lịch sử để sàng lọc khiếm khuyết cho phần thay đổi. Năng lực này đã được sản phẩm hoá và chạy dưới dạng dịch vụ trong pipeline continuous integration của code kernel: hễ có thay đổi được gửi lên là kích hoạt test có trọng tâm.

Trên một tập đánh giá gồm hàng trăm lần thay đổi thật đã merge, phủ nhiều subsystem, **tỉ lệ chạm tới hàm mục tiêu của ABACI cao hơn khoảng một bậc độ lớn so với các công cụ fuzzing kernel chủ đạo trong ngành.** Từ khi chạy trên production tới nay, nó đã phát hiện hàng trăm khiếm khuyết thật tái hiện được, và đóng góp nhiều issue cùng patch sửa lỗi ngược lên upstream của cộng đồng.

---

## Một — ABACI giải quyết vấn đề gì

> Code viết ngày càng nhanh, thời gian dành cho test ngày càng ít.

Sự trưởng thành của các trợ lý lập trình AI và agent R&D đang định hình lại nhịp phát triển phần mềm nền tảng. Số merge request ở repo kernel tăng gấp bội, quy mô thay đổi đi vào khâu thẩm định và kiểm chứng trong mỗi đơn vị thời gian cứ leo thang, trong khi nguồn cung ở phía bảo đảm chất lượng thì giậm chân tại chỗ. Việc thẩm định thay đổi kernel phụ thuộc rất nhiều vào tích luỹ lĩnh vực của kỹ sư kỳ cựu, và phần năng suất này rất khó mở rộng theo số lượng commit; còn thời lượng test cùng năng lực tính toán phân bổ được cho mỗi lần thay đổi thì lại bị nhịp bàn giao siết chặt. Một khi khiếm khuyết lọt ra môi trường production, nó có thể biểu hiện thẳng thành sập máy hay lỗ hổng leo thang đặc quyền, với cái giá sửa chữa và thu hồi cực cao.

Nút thắt thực sự nằm ở chỗ **năng lực tính toán cho việc test được rót vào đâu.** Kiểm thử động cho kernel hiện nay lấy fuzzing dẫn dắt bởi độ phủ làm khuôn mẫu chủ đạo: liên tục khám phá nhánh mới bằng đột biến ngẫu nhiên quy mô lớn, đẩy độ phủ tổng thể lên cao. Khi dùng để phát hiện các vấn đề chưa biết, tính hữu hiệu của khuôn mẫu này đã được kiểm chứng nhiều lần. Nhưng khi mục tiêu test bị giới hạn rõ ràng vào "phần code mà lần thay đổi này chạm tới", thì vấn đề hiệu suất lộ ra ngay.

Thống kê đo thực tế của chúng tôi cho một con số trực quan: **trong các test case mà các công cụ chủ đạo sinh ra tích luỹ, phần liên quan tới mục tiêu chỉ định chỉ chiếm khoảng 5%.** Phần năng lực tính toán còn lại tạo thành cái gọi là ảo giác về việc chạy test: hệ thống test vận hành với cường độ cao, đường cong độ phủ cũng đi lên, mà những đường code thực sự liên quan tới lần thay đổi này thì vẫn nằm ngoài phạm vi thực thi. Báo cáo trước khi merge được đánh dấu là đạt, nhưng kết luận "đạt" ấy thiếu phần chống đỡ, và khiếm khuyết phải đợi tới lúc canary, thậm chí tới môi trường production, mới lộ ra.

Mâu thuẫn mang tính cấu trúc nằm ngay đó: **phía cung thay đổi đang tăng tốc, còn phía kiểm chứng chất lượng thì đang thành nút thắt.** ABACI đổi mục tiêu tối ưu: đặt **"khả năng chạm tới mục tiêu"** lên hàng đầu, để năng lực tính toán cho việc test rơi đúng vào phần code của lần thay đổi này.

---

## Hai — Các thách thức cốt lõi

Đi từ khám phá theo chiều rộng sang chạm tới có trọng tâm đòi hỏi vượt qua ba thách thức ở ba tầng.

### Thách thức một: làm sao dựng ra được test case hữu hiệu về ngữ nghĩa

Test case cho kernel là một chuỗi system call bị ràng buộc nghiêm ngặt. Muốn kernel thực sự chạy tới một đoạn code nào đó, test case phải đồng thời thoả quan hệ ngữ nghĩa giữa các lời gọi và điều kiện trạng thái trước khi thực thi; thiếu bất kỳ tầng nào thì test case đã vô hiệu trước cả khi vào được logic mục tiêu.

Lấy một lỗ hổng kernel nguy hiểm cao trong lịch sử làm ví dụ: muốn kích hoạt nó thì trước hết phải dựng một môi trường namespace nhất định, rồi hoàn tất một lần mount file system theo một cách nhất định, và sau đó một nhóm thao tác file còn phải xảy ra đúng thứ tự. Không gian tổ hợp giữa system call và tham số gần như vô hạn, còn các ràng buộc hữu hiệu thì nằm sâu trong hết lớp nhánh điều kiện này tới lớp khác. Phân tích tĩnh truyền thống khó khắc hoạ trọn vẹn loại ràng buộc xuyên tầng đó; còn đột biến thuần ngẫu nhiên thì dù chạy trên cụm mấy ngày cũng rất khó làm cho toàn bộ trạng thái tiền đề đồng thời thành lập.

Năng lực hiểu ngữ nghĩa của model lớn mang tới một bước ngoặt cho vấn đề này: nó đọc hiểu được ý định của code, và cũng nối được các quan hệ ràng buộc xuyên hàm. Nhưng giao trọn việc sinh test case hoàn chỉnh cho model lớn thì cũng không đi được: test case kernel đòi hỏi độ chính xác cực cao, mà ảo giác của model thì lại bùng ra tập trung đúng ở tầng chi tiết.

### Thách thức hai: làm sao dẫn dắt test case hội tụ về đúng vị trí mục tiêu

Sau khi chuỗi lời gọi đã đúng ở tầng ngữ nghĩa, vấn đề vẫn còn. Rất nhiều tham số kiểu số không thể xác định chỉ bằng suy luận ngữ nghĩa: một chỗ logic điều phối đòi giá trị truyền vào phải đúng bằng một enum nhất định, một chỗ điều kiện gác đòi một trường của đối tượng kernel nào đó phải đã được thiết lập trong thao tác trước đó. Loại giá trị này chỉ có thể tiệm cận dần qua việc chạy đi chạy lại và quan sát phản hồi.

Vì thế việc test có trọng tâm cần một **la bàn lúc chạy**, một chỉ số liên tục đo được khoảng cách giữa vị trí thực thi hiện tại và mục tiêu. Phản hồi theo độ phủ truyền thống về bản chất là lệch trong kịch bản có trọng tâm: nó đo mức mới mẻ của các vùng code, còn câu "còn cách mục tiêu bao xa" thì nằm ngoài thang đo của nó. Một khi thiếu tín hiệu về phương hướng, quá trình test thoái hoá thành một cuộc đi bộ ngẫu nhiên trong một không gian khổng lồ.

### Thách thức ba: làm sao nhận diện khiếm khuyết thật một cách hiệu quả

Chạm tới mục tiêu chỉ là điều kiện cần; giá trị của việc test rốt cuộc nằm ở việc phát hiện vấn đề thật.

Khiếm khuyết kernel có một đặc tính thống kê quan trọng: **tuyệt đại đa số khiếm khuyết mới là biến thể của khiếm khuyết trong lịch sử**, với cơ chế và mẫu kích hoạt đã hàm chứa trong các báo cáo vấn đề cùng commit sửa lỗi trong lịch sử. Năng lực hiểu code của các model nền hiện tại đủ để đọc hiểu logic thay đổi; nút thắt nằm ở chỗ thiếu kinh nghiệm lịch sử cụ thể tái dùng thẳng được để dẫn dắt. Với mỗi lần thay đổi, model lại phải đọc code từ đầu, và ngân sách suy luận tiêu phần lớn vào việc hiểu code đang làm gì, còn phần dành cho việc định vị vấn đề thì lại hữu hạn.

Bản thân việc phán định khiếm khuyết cũng đòi hỏi rất cao về suy luận. Model không chỉ phải chỉ ra vị trí đáng ngờ, mà còn phải đưa ra tiền đề trạng thái kích hoạt được cùng mạch kích hoạt cụ thể; trong khi khiếm khuyết thì thường ẩn trong các bất biến xuyên file và trong việc quản lý vòng đời tài nguyên.

---

## Ba — Triết lý kỹ thuật và kiến trúc năng lực

> Phát huy tối đa điểm mạnh về hiểu ngữ nghĩa của model lớn, và ràng buộc rủi ro ảo giác trong phạm vi kiểm chứng được.

Nguyên tắc đầu tiên trong thiết kế của ABACI là **tách trách nhiệm**. Phần hiểu ngữ nghĩa và suy luận toàn cục giao cho model lớn, còn phần đòi hỏi độ chính xác và tính xác định thì giao cho cơ chế theo chương trình và phản hồi lúc chạy; hai bên phối hợp với nhau qua một định nghĩa mục tiêu thống nhất và một kênh phản hồi chung. Năng lực hình thành từ đó chia ba tầng, triển khai lần lượt dưới đây.

### 3.1 Dựng test case có trọng tâm do ngữ nghĩa dẫn dắt

Nhắm vào thách thức một, ABACI lấy vị trí thay đổi làm điểm xuất phát để làm **suy luận ngữ nghĩa hướng mục tiêu**, nhận ra một số ít đường thực sự có thể dẫn tới code mục tiêu cùng các ràng buộc then chốt của chúng, nén không gian tìm kiếm từ gần như vô hạn xuống một quy mô liệt kê được.

Ở tầng tham số thì dùng chiến lược **ưu tiên ràng buộc then chốt**: chỉ một số ít tham số thực sự bị ngữ nghĩa mục tiêu ghim chặt là do model quyết định, còn lại giao cho cơ chế xác định và phần khám phá lúc chạy. Bề mặt phơi ảo giác của model nhờ đó co lại từ toàn bộ tham số xuống một vài giá trị then chốt; năng lực ngữ nghĩa vẫn được giữ, còn phần bất định thì nằm trong phạm vi kiểm chứng được.

**Biểu hiện năng lực**: với một lần thay đổi code, tự động cho ra các test case liên quan tới mục tiêu và chạy thẳng được, mà cả quá trình không cần con người viết code test hay bổ sung gợi ý lĩnh vực.

### 3.2 Dẫn hướng hội tụ lúc chạy hướng mục tiêu

Nhắm vào thách thức hai, trong chuỗi thực thi test đưa vào một **cơ chế phản hồi có phương hướng hướng mục tiêu**, thay cho phần phản hồi thuần theo độ phủ. Nó liên tục đánh giá mức tiệm cận giữa trạng thái hiện tại và vị trí mục tiêu trong quá trình chạy, rồi theo đó mà điều phối tài nguyên test:

* **Tăng đầu tư theo hướng hữu hiệu.** Các test case cho thấy xu thế tiến gần được ưu tiên đào sâu.

* **Kịp thời cắt các hướng vô hiệu.** Các test case giậm chân tại chỗ lâu bị hạ cấp hoặc loại bỏ.

* **Ưu tiên tín hiệu về phương hướng.** Chỉ khi phán định theo phương hướng khó phân biệt hơn kém thì độ phủ truyền thống mới tham gia làm căn cứ phụ.

Việc tiến hoá của test case đồng thời tuân theo nguyên tắc **giữ cấu trúc**: phần xương sống chuỗi và các ràng buộc then chốt mà suy luận ngữ nghĩa đã xác nhận thì giữ ổn định qua các vòng lặp, còn việc tiến hoá chỉ xảy ra ở phần tự do còn phải khám phá. Tính hữu hiệu ngữ nghĩa đã thiết lập nhờ đó được bảo vệ, và cả quá trình cho thấy đặc trưng hội tụ ổn định.

**Biểu hiện năng lực**: trong ngân sách thời lượng và năng lực tính toán hữu hạn, dồn năng lực tính toán cho việc test vào đúng các đường liên quan tới mục tiêu, đi từ "có thể phủ" tới "chắc chắn chạm tới".

### 3.3 Sàng lọc mẫu khiếm khuyết do kinh nghiệm dẫn dắt

Nhắm vào thách thức ba, ABACI dựng một hệ chưng cất và tái dùng kinh nghiệm khiếm khuyết trong lịch sử:

* **Chưng cất kinh nghiệm.** Model đọc các commit sửa lỗi và báo cáo vấn đề của những khiếm khuyết trong lịch sử, trích ra cơ chế khiếm khuyết cùng mẫu kích hoạt, và ghi lại cách sửa tương ứng.

* **Quy nạp theo nhóm.** Các khiếm khuyết cùng cơ chế được gom cụm và trừu tượng thành những mẫu tái dùng được; sau khi chuyên gia lấy mẫu kiểm tra và xác nhận thì mới vào kho, tạo thành kho tri thức mẫu khiếm khuyết hai cấp: toàn cục và theo subsystem.

* **Đổ ngược lặp lại.** Các mẫu trong kho được tiêm vào pipeline test có trọng tâm như tri thức tiên nghiệm; còn các phát hiện mới của pipeline thì sau khi quy nạp lại được đổ ngược vào kho, nên tài sản tri thức lớn dần theo việc sử dụng.

Thiết kế này phân bổ lại ngân sách suy luận của model từ việc hiểu code sang việc định vị vấn đề; và việc sàng lọc khiếm khuyết cũng chuyển từ soát code chung chung thành phép khớp mẫu và kiểm chứng có phương hướng.

**Biểu hiện năng lực**: ở giai đoạn soát thay đổi thì đưa ra phán định về các điểm đáng ngờ kèm điều kiện kích hoạt và tiền đề trạng thái, rồi giao cho chuỗi test có trọng tâm kiểm chứng lúc chạy — nhờ đó chi phí báo nhầm của phán định tĩnh giảm rõ rệt.

---

## Bốn — Hiện thực kỹ thuật và hiệu quả triển khai

> Từ công cụ thành dịch vụ: tích hợp vào pipeline continuous integration như một cổng chất lượng.

ABACI đã hoàn tất việc đóng gói thành dịch vụ, chạy trong pipeline CI production như một module năng lực của nền tảng bảo đảm chất lượng kernel. Sau khi merge request được gửi lên thì tự động kích hoạt, cả quá trình không cần con người can thiệp hay cấu hình thêm.

### 4.1 Chuỗi dịch vụ

Chuỗi dịch vụ chia thành bốn giai đoạn tự động:

| Giai đoạn | Trách nhiệm | Output |
| --- | --- | --- |
| **Một — Nhận diện mục tiêu** | Phân giải nội dung thay đổi, xác định phạm vi code mục tiêu và độ ưu tiên cho lần test này | Mục tiêu test có cấu trúc |
| **Hai — Phân tích mục tiêu và chuẩn bị môi trường** | Hoàn tất phần phân tích ngữ nghĩa hướng mục tiêu và dựng môi trường test | Cấu hình job test có trọng tâm |
| **Ba — Chạy test có trọng tâm** | Chạy song song phần test có trọng tâm và sàng lọc khiếm khuyết trong môi trường ảo hoá cô lập | Trajectory thực thi, crash và các điểm đáng ngờ |
| **Bốn — Gom kết quả và báo cáo** | Tổng hợp dữ liệu về khả năng chạm tới, manh mối khiếm khuyết và tài liệu tái hiện | Báo cáo test có cấu trúc |

### 4.2 Đặc tính kỹ thuật và hình thái bàn giao

* **Hoàn toàn tự động.** Lấy merge request làm input duy nhất; việc viết test case và gán nhãn mục tiêu đều do hệ thống làm.

* **Thời gian kiểm soát được.** Đầu-cuối hội tụ trong ngân sách cỡ giờ, nên đặt được ở vị trí cổng kiểm soát trước khi merge, và nhịp bàn giao vẫn tiến như thường.

* **Kết quả tái hiện được.** Mỗi khiếm khuyết trong báo cáo đều kèm tài liệu tái hiện, chống đỡ thẳng cho việc quy trách nhiệm và sửa chữa về sau.

* **Song song co giãn.** Chạy song song nhiều instance dựa trên cô lập ảo hoá, nên thông lượng test giãn tuyến tính theo tài nguyên tính toán.

Với bên sử dụng, ABACI hiện ra như một năng lực cổng chất lượng chuẩn. Báo cáo có cấu trúc đưa ra dữ liệu về khả năng chạm tới mục tiêu cùng manh mối khiếm khuyết, và nối thẳng vào quy trình cộng tác R&D để chống đỡ việc theo dõi sửa lỗi và quyết định merge.

### 4.3 Thành quả vận hành trong môi trường production

ABACI chạy liên tục trong pipeline CI production, làm phần test có trọng tâm và sàng lọc khiếm khuyết tự động cho các thay đổi kernel đi vào repo; thành quả hiện tại gồm:

* **Phát hiện hàng trăm khiếm khuyết thật tái hiện được.** Mỗi khiếm khuyết đều kèm tài liệu tái hiện đầy đủ, nên vào thẳng được quy trình sửa chữa.

* **Hình thành phần đóng góp lên upstream của cộng đồng.** Một nhóm vấn đề trong đó được xác nhận là khiếm khuyết của code upstream cộng đồng; đội đã gửi nhiều patch sửa lỗi lên upstream, và có patch đã được xác nhận merge.

* **Nhận diện rủi ro thiếu bản sửa giữa các version.** Một nhóm điểm rủi ro còn tồn do bản sửa upstream chưa được đồng bộ kịp thời đã được tìm ra, cung cấp phần chống đỡ bằng dữ liệu cho chiến lược duy trì version.

Những con số này chống đỡ cho một phán đoán then chốt: **một khi năng lực tính toán cho việc test được rót đúng vào phần code thay đổi, thì hiệu suất phát hiện khiếm khuyết sẽ tăng ở mức mang tính cấu trúc.** Lý do khiến một phần đáng kể khiếm khuyết ẩn mình lâu dài rất giản dị: phần code chứa chúng vốn luôn nằm ngoài phạm vi thực thi.

---

## Năm — Thực tiễn

> Nhìn từ quá trình xử lý một lần thay đổi để thấy bộ năng lực này vận hành ra sao trong pipeline.

### 5.1 Trọn quá trình xử lý một lần thay đổi

Dưới đây là trọn quá trình xử lý một merge request thật trong pipeline.

Sau khi thay đổi được gửi lên, giai đoạn nhận diện mục tiêu phân giải ra rằng phần sửa lần này rơi vào đường quản lý trạng thái của một subsystem mạng nào đó; bản thân phần sửa chỉ có một dòng, chỉnh một chỗ điều kiện phán định trạng thái. Chỗ sửa đó được đánh dấu là mục tiêu test của vòng này.

Giai đoạn phân tích liền suy luận ngược lên từ vị trí đó. Muốn kernel chạy tới đây thì trước hết phải dựng một đối tượng trạng thái qua interface cấu hình, rồi kích hoạt đường xoá của nó, và giữa hai thao tác có phụ thuộc. Với mục tiêu cùng loại, nếu liệt kê xuôi từ phía lối vào thì số đường ứng viên lên tới hàng trăm hàng nghìn; còn suy luận ngược thì cuối cùng chỉ cho ra vài đường hữu hiệu, trong đó chỉ có đúng một ràng buộc then chốt cần model quyết định — nó đòi định danh mà request xoá mang theo phải khớp với đối tượng đã dựng trước đó.

Ở giai đoạn thực thi, test case của vòng đầu đi hết quy trình dựng, nhưng request xoá lại trả về sớm vì định danh không khớp. Phản hồi theo phương hướng cho thấy vị trí giữ nguyên, nên test case được giữ lại để tiến hoá tiếp: xương sống chuỗi giữ ổn định, còn các giá trị tự do thì đổi qua từng vòng. Sau vài vòng thì định danh trúng, đường xoá đi thông, và vị trí mục tiêu được thực sự thực thi. Cũng chính lần thay đổi đó, khi giao cho một công cụ fuzzing đa dụng chạy hết cùng khoảng thời lượng, thì vị trí mục tiêu vẫn nằm ngoài phạm vi thực thi.

Giai đoạn báo cáo tổng hợp dữ liệu về khả năng chạm tới của lần này, và đánh dấu một điểm đáng ngờ về vòng đời tài nguyên ở gần hàm mục tiêu, kèm tài liệu tái hiện đầy đủ. Sau khi kỹ sư xác nhận, vấn đề đi vào quy trình sửa chữa.

Thời lượng đầu-cuối của lần xử lý này là khoảng 1 giờ, trong đó phần thực thi test có trọng tâm chiếm khoảng 30 phút, thời gian còn lại dành cho việc phân tích và dựng môi trường. Con người chỉ can thiệp ở khâu xác nhận cuối cùng.

### 5.2 Cấu hình thí nghiệm và so sánh hiệu quả

Trải cùng quy trình đó lên một lô thay đổi thật đã merge để kiểm chứng hàng loạt, với cấu hình thí nghiệm như sau.

* **Chọn thay đổi.** Lấy mẫu theo phân bố subsystem từ các PR đã merge thật của hai version ANCK devel-5.10 và ANCK devel-6.6, mỗi version 50, tổng cộng 100.

* **Thời gian test.** ABACI đầu-cuối 1 giờ, trong đó phần chạy test có trọng tâm 30 phút, còn biên dịch và phân tích chiếm 30 phút còn lại; nhóm đối chứng Syzkaller chạy đủ 1 giờ trên cùng node, tức là có được thời lượng test thuần dư dả hơn.

| Chỉ số | ABACI | Google Syzkaller | Mức nâng |
| --- | --- | --- | --- |
| **Độ phủ dòng thay đổi** | **48,4%** | khoảng 0% | **∞** |
| **Độ phủ hàm mục tiêu** | **66,8%** | khoảng 0% | **∞** |
| **Tỉ lệ chạm tới hàm mục tiêu** | **54,1%** | 4,5% | **12 lần** |

Ba con số này đáng nói thêm. Tỉ lệ chạm tới hàm mục tiêu 54,1% nghĩa là hơn một nửa số thay đổi đã được kiểm chứng bằng việc thực thi thật trước khi merge — lần đầu tiên câu kết luận "test đã qua" có ý nghĩa thực chất với chính lần thay đổi đó. Độ phủ dòng thay đổi 48,4% cho thấy sau khi chạm tới thì việc khám phá vẫn tiếp tục, và test case đã mở ra nhiều nhánh quanh mục tiêu. Nhóm đối chứng thì bám sát giá trị không ở hai chỉ số đầu, qua đó xác nhận sự lệch chỗ của khuôn mẫu dẫn dắt bởi độ phủ trong kịch bản có trọng tâm.

Nhìn từ góc năng lực tính toán, cơ chế có trọng tâm đã rót lại phần ngân sách vốn tiêu vào các đường không liên quan sang các đường mục tiêu. Đầu tư phần cứng giữ nguyên, còn sản lượng chất lượng trên mỗi đơn vị năng lực tính toán thì tăng mạnh.

### 5.3 Kinh nghiệm rút ra trong thực tiễn

* **Độ mịn của mục tiêu ảnh hưởng trực tiếp tới lợi ích của việc test.** Đặt mục tiêu ở mức dòng thay đổi thì tín hiệu phản hồi sắc nét nhất; đặt ở mức hàm thì phủ rộng hơn nhưng hội tụ chậm hơn. Trong thực tiễn, hai độ mịn được dùng trộn theo loại thay đổi.

* **Việc phân bổ ngân sách cần chỉnh theo subsystem.** Tỉ lệ giữa phần phân tích ngữ nghĩa và phần khám phá lúc chạy ở những subsystem có chuỗi gọi khá sâu chênh rõ so với các subsystem khác.

* **Việc khởi động nguội cho kho tri thức phụ thuộc vào đầu tư của chuyên gia.** Khâu lấy mẫu kiểm tra trước khi mẫu khiếm khuyết vào kho bắt buộc phải giữ; phần đầu tư ở giai đoạn đầu đổi lấy phương hướng cho mỗi lần sàng lọc về sau. Sau khi chạy một thời gian, việc kho lớn lên chủ yếu đến từ phần đổ ngược của chính pipeline.

* **Tính tái hiện được của báo cáo quyết định vòng khép kín thành hay bại.** Chỉ những khiếm khuyết kèm tài liệu tái hiện mới đẩy được việc sửa chữa; còn báo cáo chỉ có mô tả nghi ngờ thì rất khó đi qua nổi khâu thẩm định.

---

## Sáu — Giá trị ứng dụng

### Với các đội R&D phần mềm nền tảng

Ý nghĩa của cổng chất lượng được viết lại, từ "đã chạy qua test" thành "phần code thay đổi đã được thực thi thật và kiểm chứng", nhờ đó tỉ lệ khiếm khuyết thoát ra giảm ngay từ nguồn. Phần kiểm chứng máy móc hoá được thì hệ thống gánh, còn sự chú ý của kỹ sư kỳ cựu thì quay về đúng những vấn đề mang tính thiết kế cần phán đoán lĩnh vực. Năng lực test giãn theo số lượng commit, và khâu chất lượng nhờ đó theo kịp nhịp tăng tốc của R&D.

### Với việc vận hành hệ điều hành cấp doanh nghiệp

Khiếm khuyết bị chặn ngay ở giai đoạn cổng kiểm soát trước khi merge, nên chi phí sự cố bị nén mạnh. Các điểm rủi ro bảo mật tiềm ẩn được chủ động tìm ra, và công việc bảo mật dịch từ chỗ phản ứng với lỗ hổng lên trước thành nhận diện rủi ro. Kho tri thức mẫu khiếm khuyết lớn dần theo thực tiễn, và kinh nghiệm của đội kết tinh từ năng lực cá nhân thành tài sản tổ chức.

### Với hệ sinh thái cộng đồng mã nguồn mở

Các vấn đề và patch sửa lỗi phát hiện được đối với code upstream liên tục được trả lại cho cộng đồng, tạo thành vòng tuần hoàn tích cực giữa năng lực kiểm chứng cấp doanh nghiệp và chất lượng mã nguồn mở.

---

## Bảy — Tóm tắt

AI đang tái cấu trúc quan hệ sản xuất trong việc phát triển phần mềm. Khâu sản xuất code đã hoàn tất bước nhảy về hiệu suất, còn cuộc cách mạng khuôn mẫu ở khâu bảo đảm chất lượng thì mới chỉ bắt đầu. ABACI đưa ra một lời giải triển khai được cho mệnh đề đó trong lĩnh vực phần mềm nền tảng.

Về khuôn mẫu, mục tiêu tối ưu của việc test chuyển từ khám phá theo chiều rộng dẫn dắt bởi độ phủ sang chạm tới có trọng tâm dẫn dắt bởi mục tiêu. Về kỹ thuật, năng lực ngữ nghĩa của model lớn và phản hồi mang tính xác định lúc chạy hoà vào nhau theo cách tách trách nhiệm, để năng lực model được phát huy và rủi ro cũng bị ràng buộc một cách hệ thống. Về mặt kỹ thuật triển khai, vòng khép kín từ phương pháp tới dịch vụ đã thông; nó chạy ổn định như một cổng chất lượng cấp production và cho ra các kết luận khiếm khuyết tái hiện được. Về giá trị, đầu tư phần cứng giữ nguyên, tỉ lệ chạm tới mục tiêu tăng một bậc độ lớn, còn các khiếm khuyết thật và phần đóng góp cho cộng đồng thì liên tục được sinh ra.

Độ phức tạp và tốc độ thay đổi của phần mềm nền tảng sẽ còn tiếp tục tăng, và việc test tự động có trọng tâm và kiểm chứng được sẽ trở thành yêu cầu cơ bản của việc bảo đảm chất lượng. Chúng tôi mong được cùng giới công nghiệp và cộng đồng mã nguồn mở thúc đẩy hướng tiến hoá này.

---
