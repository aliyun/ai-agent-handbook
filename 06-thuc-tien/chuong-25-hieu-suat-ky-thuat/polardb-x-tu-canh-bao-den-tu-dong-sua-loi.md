# Từ cảnh báo tới tự động sửa lỗi — thực tiễn kỹ thuật Loop của PolarDB-X

# Một — Từ nâng hiệu suất viết code tới nâng hiệu suất đầu-cuối

Khi Agent dần tham gia vào công việc R&D hằng ngày, việc viết code và test đã thành những kịch bản ứng dụng thường gặp. Nhưng công việc R&D còn gồm hình thành nhu cầu, thiết kế phương án, phân tích vấn đề, chuẩn bị môi trường và kiểm chứng kết quả — những khâu cũng cần rất nhiều đầu tư. Muốn nâng hiệu suất tổng thể thêm nữa thì phải để Agent mở rộng từ chỗ tham gia viết code và test sang chỗ tự chủ đẩy tới những task R&D trọn vẹn hơn, hiện thực việc bàn giao đầu-cuối, nhờ đó giảm thao tác thủ công và những lần bàn giao qua lại ở từng khâu, rút ngắn chu kỳ bàn giao.

Đội PolarDB-X cũng đang khám phá cách nâng hiệu suất R&D bằng Agent. PolarDB-X là một database phân tán cloud native, tương thích cao với hệ sinh thái MySQL, có năng lực high availability, mở rộng ngang và HTAP (xử lý giao dịch và phân tích lai). Kiến trúc tổng thể như hình dưới.

![image](../../assets/imgs/chapter-25/image-009.png)

_Hình 1: Kiến trúc tổng thể của PolarDB-X_

## 1.1 Cách cộng tác với Agent cho các loại task R&D khác nhau

Kiến trúc phân tán của database làm tăng độ phức tạp của việc định vị và kiểm chứng vấn đề; còn yêu cầu cao về tính đúng đắn, độ tin cậy và độ ổn định cũng quyết định rằng thành quả R&D bắt buộc phải qua kiểm chứng đầy đủ. Trên tiền đề thoả các yêu cầu chất lượng đó, với hai loại task R&D thường gặp, chúng tôi dùng hai cách cộng tác với Agent khác nhau.

**Loại thứ nhất là phát triển chức năng mới và tối ưu chức năng sẵn có.** Ví dụ tối ưu giao dịch phân tán, hiện thực một chức năng nén dữ liệu mới. Loại task này thường có nhu cầu rõ ràng, nhưng phương án hiện thực thì phải cân nhắc tổng hợp tính trọn vẹn chức năng, tính tương thích, hiệu năng và độ tin cậy, nên khó chốt một lần ngay từ đầu, mà phải cải thiện liên tục theo kết quả hiện thực và kiểm chứng. Với loại task này, chúng tôi dùng cách cộng tác **R&D dẫn dắt, Agent thực thi**: kỹ sư lo phương án và các quyết định then chốt, và gác cửa liên tục trong quá trình phát triển, test; còn Agent thì gánh phần viết code và test cụ thể. Vì viết code và test vốn chiếm phần lớn khối lượng công việc, nên cách cộng tác này nâng hiệu suất phát triển rõ rệt và rút ngắn chu kỳ R&D.

**Loại thứ hai là xử lý cảnh báo, ticket và sửa khiếm khuyết — cũng là điểm đau về hiệu suất mà đội đối mặt lâu nay.** Trong quy trình xử lý cũ, kỹ sư không chỉ phải hoàn tất phần viết code và test, mà còn phải gánh phần phân tích vấn đề, định vị căn nguyên và cho ra nhu cầu sửa chữa ở giai đoạn đầu. Một lần sửa cuối cùng có thể chỉ động tới vài dòng code, nhưng kỹ sư thì phải thu thập thông tin instance, monitoring và log, kết hợp mã nguồn mà truy nguyên, rồi dựng môi trường, dựng điều kiện kích hoạt, kiểm chứng vấn đề có tái hiện ổn định được không. Sửa code xong thì còn phải kiểm chứng hiệu quả sửa, chạy test hồi quy, và đẩy phần sửa đi merge. Phần phân tích đầu và kiểm chứng sau cần rất nhiều đầu tư, nên nếu chỉ để Agent hỗ trợ viết code thì thời gian tiết kiệm được rất hạn chế.

May thay, loại task thứ hai thường có hiện tượng sự cố cụ thể, nên kiểm chứng được giả thuyết về nguyên nhân bằng cách tái hiện, rồi kiểm nghiệm hiệu quả sửa bằng phép test đối chứng trước và sau khi sửa. Quá trình truy nguyên tuy phức tạp, nhưng việc tái hiện ổn định và kết quả test cung cấp được căn cứ nghiệm thu rõ ràng, tạo điều kiện cho Agent tự chủ hoàn tất phần phân tích, sửa và kiểm chứng.

Vì vậy, khi khám phá việc Agent tự chủ xử lý đầu-cuối, chúng tôi chọn bắt đầu từ loại task thứ hai, với mục tiêu để Agent xuất phát từ một cảnh báo hay ticket, tự chủ hoàn tất phần phân tích hiện trường, kiểm chứng căn nguyên, tái hiện ổn định, sửa code, kiểm chứng bằng test và gửi phần sửa — mà không cần con người can thiệp, và kỹ sư chỉ tham gia ở khâu soát cuối cùng, nhờ đó nâng mạnh hiệu suất xử lý khiếm khuyết.

# Hai — Từ cảnh báo tới tự động sửa lỗi

## 2.1 Quy trình tổng thể

PolarDB-X Loop lấy cảnh báo hay ticket làm input, để Agent tự chủ hoàn tất việc định vị vấn đề, tái hiện ổn định, sửa code và kiểm chứng bằng test, rồi cuối cùng gửi cho kỹ sư review code. Quy trình tổng thể như hình dưới.

![image](../../assets/imgs/chapter-25/image-010.png)

_Hình 2: Quy trình tự động sửa khiếm khuyết của PolarDB-X. Kết quả kiểm chứng quyết định là đẩy tiếp hay quay lại phân tích và sửa._

Trong quy trình này, Agent trước hết lấy thông tin hiện trường, phân tích các nguyên nhân có thể, và thử tái hiện vấn đề. Nếu kết quả chạy thực tế không khớp kỳ vọng thì chỉnh lại phần phân tích theo bằng chứng mới và kiểm chứng tiếp; còn khi đã xác nhận nguyên nhân và tái hiện ổn định thì mới sửa code, cố định quá trình tái hiện thành test case, rồi sau khi qua phần kiểm chứng đối chứng trước – sau và trọn bộ test hồi quy thì mới gửi cho kỹ sư thẩm định.

Muốn Agent tự chủ hoàn tất quy trình thì còn phải giải quyết một vấn đề then chốt: làm sao bảo đảm kết quả nó cho ra là đáng tin. Khi đưa Agent vào, chúng ta thường quan tâm nhiều hơn tới giai đoạn viết code, và mong bảo đảm tính đúng đắn của code bằng Skill hay các ràng buộc thao tác. **Nhưng với việc sửa khiếm khuyết, chúng tôi cho rằng tái hiện ổn định mới là bước quan trọng nhất trong cả quy trình, vì phần sửa code và nghiệm thu về sau đều phụ thuộc vào việc hiểu và kiểm chứng chính xác vấn đề gốc.**

Việc tái hiện ổn định vì thế xuyên suốt ba giai đoạn: ở giai đoạn phân tích vấn đề, Agent dùng việc tái hiện để kiểm nghiệm phần phân tích của chính mình; ở giai đoạn sửa code, Agent cố định quá trình tái hiện thành test case để kiểm chứng hiệu quả của phần sửa; còn ở giai đoạn review code, kỹ sư lấy test case tái hiện và kết quả kiểm chứng làm căn cứ để kiểm tra xem Agent có thực sự sửa được vấn đề ban đầu không.

Muốn cơ chế này triển khai được, Agent vừa phải lấy được thông tin hiện trường đầy đủ, vừa phải có năng lực chạy, debug và tái hiện vấn đề, rồi sau khi sửa thì hoàn tất phần kiểm chứng bằng test đầy đủ. Dưới đây lần lượt giới thiệu thực tiễn kỹ thuật ở ba khâu: lấy thông tin hiện trường, kiểm chứng bằng việc chạy, và bàn giao phần sửa.

## 2.2 Khôi phục hiện trường và phân tích vấn đề

Cảnh báo thường chỉ phản ánh một chỉ số hay một câu SQL bất thường; muốn định vị vấn đề thì còn phải liên kết version instance, topology, monitoring, log và mã nguồn. Việc nhiều component cùng phối hợp khiến cùng một hiện tượng có thể ứng với những nguyên nhân khác nhau; còn việc nhiều version cùng tồn tại trên production cũng khiến một vấn đề đã sửa ở version mới vẫn có thể tiếp tục xuất hiện ở version cũ. Vì vậy, việc truy nguyên vừa phải khôi phục hiện trường sự cố, vừa phải kết hợp version instance và bản ghi sửa chữa để nhận ra các vấn đề đã biết.

### Từ việc con người gom nhu cầu tới việc Agent tự phân tích

Ban đầu, kỹ sư khôi phục hiện trường và phân tích nguyên nhân trước, rồi gom kết luận thành nhu cầu sửa chữa giao cho Agent. Cách này tận dụng được năng lực viết code của Agent, nhưng phần truy nguyên tốn thời gian nhất thì vẫn do kỹ sư gánh.

Sau đó, chúng tôi thử để Agent phân tích thẳng tài liệu hiện trường. Trong thực tiễn của chúng tôi, Agent thường làm tốt hơn con người ở khâu sắp xếp thông tin hiện trường: nó dựng dòng thời gian trước và sau khi vấn đề xảy ra rõ ràng hơn, giỏi tra cứu thông tin liên quan trong khối log khổng lồ hơn, và còn phát hiện được những manh mối then chốt mà con người bỏ sót khi truy nguyên.

Những biểu hiện đó khiến chúng tôi dời điểm xuất phát của task Agent từ chỗ nhận nhu cầu sửa chữa do con người gom, lên trước thành nhận thẳng cảnh báo hay ticket. Agent tự chủ xác nhận vấn đề xảy ra ở instance nào, động tới những node nào, chạy version gì, và trước sau lúc bất thường đã xảy ra chuyện gì — đưa cả phần khôi phục hiện trường và phân tích vấn đề vào quy trình xử lý tự chủ.

Việc tự phân tích đòi hỏi Agent truy vấn được liên tục dọc theo manh mối: phát hiện node bất thường thì truy vấn log cùng thời điểm, phát hiện trạng thái thay đổi thì kiểm tra mã nguồn tương ứng, và lặp đi lặp lại giữa truy vấn và phân tích.

Giai đoạn này cần cho ra được hiện tượng vấn đề, dòng thời gian, các bằng chứng liên quan và giả thuyết về nguyên nhân còn phải kiểm chứng, làm mục tiêu kiểm tra rõ ràng cho việc tái hiện về sau.

### Chống đỡ việc truy vấn theo nhu cầu bằng interface có cấu trúc

Ban đầu, tài liệu hiện trường cấp cho Agent chủ yếu là ảnh chụp monitoring và mẩu log do con người chọn. Khi cần xem node khác hay mở rộng khoảng thời gian, Agent chỉ biết chờ kỹ sư bổ sung tài liệu.

![image](../../assets/imgs/chapter-25/image-011.png)

_Hình 3: Ảnh chụp monitoring mức sử dụng CPU._

Muốn quá trình phân tích không còn phụ thuộc vào việc con người bổ sung tài liệu, thì phải cấp cho Agent interface có cấu trúc hay công cụ CLI của các nền tảng thường dùng. Nhờ vậy, khi phân tích mà thấy thiếu thông tin, Agent tự chỉnh được đối tượng truy vấn và khoảng thời gian, lấy dữ liệu cần rồi phân tích tiếp.

Để các công cụ đó truy vấn và liên kết được thông tin hiện trường, các dữ liệu như log cũng cần được quản lý tập trung. Nếu log nằm rải trên từng node production thì việc truy vấn vẫn phải vào từng node, tìm file rồi tổng hợp kết quả; còn khi đã tập trung về một nền tảng thống nhất thì Agent lấy được dữ liệu của các node khác nhau, các khoảng thời gian khác nhau qua một lối vào duy nhất.

Lấy Alibaba Cloud CLI (`aliyun`) làm ví dụ, Agent truy vấn được mức sử dụng CPU của hai compute node trong một khoảng thời gian chỉ định:

```bash
aliyun polardbx DescribeDBNodePerformance \
  --RegionId cn-hangzhou \
  --DBInstanceName pxc-xxxxxxxxx \
  --DBNodeIds "pxc-i-xxxxxxx,pxc-i-yyyyyyyy" \
  --CharacterType polarx_cn \
  --Key Cpu_Usage \
  --StartTime 2026-09-03T03:51Z \
  --EndTime 2026-09-03T03:53Z
```

Kết quả truy vấn trả về ở định dạng JSON, gồm node, chỉ số và các điểm lấy mẫu. Dưới đây là ví dụ kết quả trả về đã rút gọn; các định danh và giá trị chỉ để minh hoạ:

```json
{
  "PerformanceKeys": [
    {
      "DBNodeId": "pxc-i-xxxxxxx",
      "Measurement": "Cpu_Usage",
      "Points": [
        { "Timestamp": 1788407460000, "Value": "92.6" }
      ]
    },
    {
      "DBNodeId": "pxc-i-yyyyyyyy",
      "Measurement": "Cpu_Usage",
      "Points": [
        { "Timestamp": 1788407460000, "Value": "28.3" }
      ]
    }
  ]
}
```

Agent dựa vào dữ liệu trả về mà nhận ra node và khoảng thời gian bất thường, rồi tuỳ nhu cầu mở rộng phạm vi truy vấn, liên kết log, đẩy phần phân tích tiến lên liên tục mà không cần con người bổ sung tài liệu hiện trường.

### Đóng gói các nền tảng cũ thành CLI

Tuy nhiên, một số nền tảng cũ thì thiếu người duy trì, và cũng chưa chắc có ai cung cấp công cụ CLI tương ứng. Với những nền tảng như vậy, làm sao để Agent lấy được thông tin nó cần?

Hãy nhìn một ví dụ. Nội bộ Alibaba có một CLI "giành phòng họp" rất được ưa chuộng.

Qua công cụ này, chỉ một lệnh là đặt được phòng họp, và còn kết hợp được với task định kỳ để tự động giành chỗ:

```bash
ali meeting book -r <roomId> -s <start> -e <end>
```

Tác giả của công cụ này là một kỹ sư bình thường; trong tình huống không có mã nguồn của nền tảng, anh ta vẫn thông được trọn quy trình thao tác đặt phòng họp. Điều đó gợi ý cho chúng tôi: dù nền tảng không cung cấp công cụ sẵn có, chúng tôi vẫn tự đóng gói được các chức năng cần thiết thành CLI.

Chúng tôi tiến thêm một bước, để Agent làm chính việc đó: tham chiếu các CLI đã có, tự thao tác trình duyệt, dùng chức năng của nền tảng đích, phân tích request interface và cách xác thực, rồi viết code đóng gói những chức năng cần thiết ra.

Bằng cách đó, trong khoảng một tuần, chúng tôi để Agent đóng gói các chức năng truy vấn monitoring, log và topology của các hệ thống thường dùng thành CLI `polardbx`, để gọi cho việc truy nguyên về sau.

Các nhóm lệnh mà `polardbx --help` hiển thị như sau:

![image](../../assets/imgs/chapter-25/image-012.png)

_Hình 4: Các nhóm lệnh của CLI PolarDB-X tự xây._

Ngoài ra, chúng tôi còn gom các phương pháp chẩn đoán, phần mô tả công cụ CLI và kinh nghiệm truy nguyên thành Skill. Chẳng hạn, `polardbx-diagnostics` hướng dẫn Agent xác nhận hiện tượng vấn đề, truy vấn topology và các chỉ số nền, định vị khoảng thời gian và component bất thường, rồi tuỳ giả thuyết nguyên nhân mà chọn các biện pháp như truy vấn log, flame graph để kiểm chứng, và theo đó chỉnh hướng phân tích. Skill này còn kèm theo script thu thập, từ điển chỉ số, template truy vấn log và phần tham chiếu chẩn đoán các vấn đề thường gặp, để Agent tra cứu và gọi theo nhu cầu.

## 2.3 Kiểm chứng kết luận phân tích bằng việc chạy thật

"Cái học trên giấy rốt cuộc vẫn nông, muốn tường tận việc này thì phải tự mình làm." Một đường code đáng ngờ có thực sự kích hoạt sự cố hay không thì phải kiểm chứng trong lúc chạy thật. Với Agent, sau khi nêu giả thuyết về nguyên nhân thì còn phải tự kiểm nghiệm và sửa lại phán đoán được. Ca rò rỉ khoá MDL dưới đây chính là điểm khởi đầu để chúng tôi bù đủ năng lực này.

### Ca rò rỉ khoá MDL: độ lệch giữa phân tích tĩnh và đường thực thi thật

Chúng tôi từng gặp một vấn đề rò rỉ MDL (metadata lock) đã xuất hiện từ năm năm trước. Vấn đề này xảy ra với xác suất thấp trong môi trường production, và khiến các thao tác sửa cấu trúc bảng về sau bị chặn kéo dài. Vì khó tái hiện, nên suốt nhiều năm vẫn chưa xác định được căn nguyên.

Trong một lần truy nguyên trên production lại gặp vấn đề này, chúng tôi thử nhờ Agent kết hợp thông tin hiện trường và mã nguồn để phân tích sâu hơn. Agent nhanh chóng sinh ra báo cáo, liệt kê vị trí code, quá trình thực thi và các nguyên nhân có thể, và đưa ra lời giải thích sau về trình tự thời gian khi luồng chính (ServerExecutor) và luồng KillExecutor chạy đồng thời. Lời giải thích này sau đó bị con người kiểm chứng và bác bỏ:

| Trình tự | Luồng chính (ServerExecutor) | Luồng KillExecutor |
| --- | --- | --- |
| 1 | Lấy khoá MDL thứ nhất, và ghi vào tập bản ghi khoá của kết nối hiện tại | — |
| 2 | Bắt đầu lấy khoá thứ hai, lấy được chính tập bản ghi khoá đó nhưng chưa ghi bản ghi mới | — |
| 3 | — | Phản hồi thao tác KILL của người dùng, bắt đầu đóng kết nối |
| 4 | — | Giải phóng khoá thứ nhất, và gỡ tập bản ghi khoá đã được dọn sạch ra khỏi chỉ mục kết nối |
| 5 | Tiếp tục lấy khoá thứ hai, ghi bản ghi vào tập đã tách khỏi chỉ mục | — |

Kết luận suy đoán của Agent lúc đó là: bản ghi của khoá thứ hai không còn tìm được qua chỉ mục kết nối nữa, dẫn tới rò rỉ khoá.

Kỹ sư kiểm chứng khoảng hai giờ thì phát hiện lời giải thích đó không thành lập. Agent nhiều lần chỉnh phần phân tích theo phản hồi nhưng vẫn chưa hình thành được kết luận đáng tin; trong quá trình đó đã sinh ra nhiều báo cáo và tài liệu test:

![image](../../assets/imgs/chapter-25/image-013.png)

_Hình 5: Các báo cáo và tài liệu test mà Agent sinh ra qua nhiều vòng phân tích._

Độ lệch đến từ khác biệt giữa suy diễn tĩnh và việc thực thi thật. Đường xử lý khi kết thúc kết nối chịu ảnh hưởng của trạng thái chương trình, và khoá cũng có nhiều đường giải phóng. Chỉ đọc code thì dễ bỏ sót thứ tự trước sau của các thay đổi trạng thái, và phán nhầm một đường có thể xảy ra thành đường thực sự được thực thi.

Khi kỹ sư kiểm chứng những phán đoán đó, họ phải chuẩn bị môi trường, đặt breakpoint, kiểm soát thứ tự thực thi của các luồng, và khi cần thì còn phải kiểm tra trạng thái đối tượng trong bộ nhớ. Khi những biện pháp đó chỉ con người dùng được, thì mỗi lần Agent nêu một giả thuyết là kỹ sư lại phải tiếp quản để kiểm chứng.

Vì vậy, chúng tôi bắt đầu cấp chính những năng lực debug và phân tích đó cho Agent, để nó quan sát được kết quả chạy thật, tự phát hiện chỗ sai trong giả thuyết của mình rồi truy nguyên tiếp.

### Debug chương trình Java đang chạy bằng JDB CLI

Trước hết, chúng tôi cấp cho Agent năng lực debug thẳng chương trình Java. Công cụ `jdb` đi kèm JDK chủ yếu hướng tới việc con người tương tác liên tục trong terminal. Khi Agent dùng nó thì phải duy trì tiến trình tương tác, liên tục gửi lệnh, đọc output, và giữ trạng thái debug giữa nhiều lần gọi — khá rườm rà.

Vì vậy, chúng tôi hiện thực lại JDB CLI dựa trên interface debug của Java là JDI, duy trì phiên debug liên tục bằng một tiến trình nền. Mỗi lệnh ở tiền cảnh chạy xong là thoát được ngay, còn lần gọi sau vẫn thao tác tiếp được trên cùng hiện trường debug đó, xem được luồng, breakpoint và biến.

Nhờ vậy, Agent có thể tạm dừng chương trình, quan sát trạng thái, rồi kết hợp mã nguồn mà phân tích, sau đó quay lại chính phiên đó chạy tiếp — nối được quá trình debug với quá trình phân tích.

![image](../../assets/imgs/chapter-25/image-014.png)

_Hình 6: Lệnh tiền cảnh gọi độc lập, còn tiến trình nền giữ phiên debug liên tục._

Một năng lực then chốt khác là **breakpoint theo luồng chỉ định**: chỉ luồng đích mới kích hoạt breakpoint, và khi trúng thì cũng chỉ tạm dừng luồng đó, còn các luồng khác vẫn chạy tiếp. Kết hợp với thao tác khôi phục luồng, Agent kiểm soát được thứ tự thực thi của các luồng liên quan để kiểm chứng hành vi chương trình dưới một trình tự thời gian nhất định.

Việc tái hiện vấn đề đồng thời xác suất thấp của MDL nói ở trên chính là nhờ năng lực này. Agent tự kiểm soát được trình tự luồng, kiểm tra chương trình có chạy theo đúng đường mà phần phân tích dự đoán không, rồi sửa lại phán đoán theo kết quả thật.

### Truy vấn hiện trường bộ nhớ bằng Heap Dump

Ngoài việc debug chương trình đang chạy, Agent còn phải kiểm tra được trạng thái bộ nhớ lúc sự cố. **Heap Dump** là snapshot bộ nhớ heap của một chương trình Java tại một thời điểm, cho phép kỹ sư xem giá trị các trường của đối tượng, quan hệ tham chiếu và mức chiếm bộ nhớ.

Lấy vấn đề MDL ở trên làm ví dụ: khi truy nguyên thì phải xác nhận khoá có bị rò rỉ không qua phân tích bộ nhớ, kiểm tra các đối tượng khoá, bản ghi khoá liên quan cùng quan hệ tham chiếu của chúng. Nắm được trạng thái bộ nhớ thực tế rồi mới kết hợp mã nguồn mà phân tích tiếp nguyên nhân rò rỉ.

File Heap Dump thường rất lớn. Chúng tôi đặt chúng trên máy chủ cloud nhiều bộ nhớ để nạp và xử lý tập trung, rồi cung cấp interface truy vấn cho Agent. Agent truy vấn được các trường đối tượng và quan hệ tham chiếu theo nhu cầu, rồi theo kết quả trả về mà kiểm tra tiếp các đối tượng liên quan, tự kiểm chứng giả thuyết phân tích, không cần kỹ sư truy vấn từng mục rồi cấp tài liệu.

![image](../../assets/imgs/chapter-25/image-015.png)

_Hình 7: ECS nhiều bộ nhớ nạp Heap Dump, còn Agent phát truy vấn OQL và lấy kết quả qua interface HTTP._

Phân tích xong, Agent còn tải bản ghi phân tích và báo cáo cuối lên nền tảng trình bày, để kỹ sư tra cứu và soát lại về sau. Trong thực tiễn, nền tảng này đã ghi nhận tích luỹ hơn hai nghìn task xử lý Heap Dump.

### Chọn môi trường tái hiện theo điều kiện sự cố

Có công cụ debug và phân tích bộ nhớ rồi thì còn phải chuẩn bị cho Agent một môi trường thực sự chạy và tái hiện được vấn đề. Chúng tôi cung cấp hai loại môi trường để Agent tự chọn theo tình hình vấn đề.

| Môi trường | Tình huống áp dụng | Cách dùng |
| --- | --- | --- |
| Instance tạm PolarDB-X Zero | Tái hiện sơ bộ các vấn đề đơn giản như SQL báo lỗi, chức năng bất thường | Tạo instance tạm ở version mới nhất, kiểm chứng xong thì giải phóng |
| Môi trường tái hiện đầy đủ trên K8s | Các vấn đề phụ thuộc version lịch sử, topology nhất định, hoặc cần kiểm soát trình tự đồng thời | Dựng theo version và topology của instance gặp vấn đề, kết hợp công cụ debug để kiểm chứng |

Với các vấn đề cần kiểm soát trình tự đồng thời, Agent kết hợp được các công cụ debug nói trên trong môi trường tái hiện đầy đủ, đặt breakpoint, kiểm soát thứ tự thực thi của các luồng liên quan để kiểm chứng điều kiện kích hoạt vấn đề.

Bộ môi trường này cũng dùng cho việc kiểm chứng phần sửa về sau. Sau khi sửa code, Agent triển khai version đã sửa lên môi trường tương ứng, rồi chạy lại theo đúng các bước tái hiện đã xác nhận, để kiểm nghiệm vấn đề gốc đã được giải quyết chưa.

### Từ kích hoạt xác suất thấp tới tái hiện ổn định

Có công cụ và môi trường rồi, Agent bắt đầu tự kiểm chứng vấn đề MDL. Lần thử đầu chưa kích hoạt được sự cố; Agent dựa trên đường thực thi thật mà phân tích lại quan hệ giữa các luồng, rồi chỉnh breakpoint và thứ tự thực thi.

Sau vài vòng lặp, Agent tìm ra được điều kiện then chốt trước đó bị bỏ sót: phải phát KILL trước khi kết nối vào trạng thái thực thi câu lệnh, rồi mới kiểm soát thứ tự thực thi giữa việc đóng kết nối và việc lấy khoá MDL về sau.

Agent dùng breakpoint theo luồng chỉ định để dừng các luồng liên quan ở đúng vị trí then chốt, rồi khôi phục thực thi theo thứ tự cần thiết, và cuối cùng tái hiện được đúng hiện tượng rò rỉ khoá cùng việc bị chặn về sau như vấn đề gốc. Phần các luồng đan xen vốn phụ thuộc vào việc lập lịch ngẫu nhiên đã được chuyển thành những bước thao tác chủ động dựng được.

![image](../../assets/imgs/chapter-25/image-016.png)

_Hình 8: Agent kiểm soát thứ tự thực thi bằng breakpoint theo luồng chỉ định, tái hiện việc rò rỉ khoá MDL và việc DDL bị chặn sau đó._

Điều kiện kích hoạt rõ ràng, các bước thao tác lặp lại được, cùng hiện tượng nhất quán với sự cố gốc đã cung cấp căn cứ vận hành cho việc kỹ sư soát lại. Sau khi kiểm soát được trình tự then chốt, ta còn đối chứng được hành vi trước và sau khi sửa trong cùng điều kiện, tránh việc phán nhầm hiệu quả sửa chỉ vì sự cố tình cờ không được kích hoạt.

Sau khi căn nguyên và điều kiện kích hoạt được kiểm chứng, Agent xác định rõ được vấn đề cần sửa, lấy test case tái hiện làm điều kiện nghiệm thu, rồi đẩy tiếp phần sửa code.

## 2.4 Lấy việc tái hiện ổn định làm cổng bàn giao phần sửa

**Test case tái hiện ổn định là điều kiện cần để phần sửa vào được khâu review code.**

Agent cố định quá trình tái hiện ổn định thành test case. Với vấn đề đồng thời nói trên, sau khi xác nhận trình tự kích hoạt thì có thể tiêm độ trễ vào các vị trí then chốt bằng Hint đặc biệt, để dựng một test case tái hiện chạy lặp được. **Test case này trước khi sửa thì bắt buộc phải kích hoạt được vấn đề gốc, còn sau khi sửa thì bắt buộc phải qua bình thường. Chỉ khi hoàn tất bộ kiểm chứng đó và qua trọn bộ test hồi quy thì code mới được vào khâu thẩm định.** Nếu chưa qua thì tiếp tục phân tích và sửa cho tới khi thoả các yêu cầu này.

### Soát bằng chứng tái hiện trước, rồi mới soát phần sửa code

Sau khi thoả các yêu cầu trên, Agent gửi merge request kèm phần sửa code, test case tái hiện, kết quả kiểm chứng trước – sau khi sửa và kết quả test hồi quy.

Kỹ sư kiểm test case tái hiện trước, đối chiếu vấn đề gốc để xác nhận nó phủ đúng sự cố mục tiêu, rồi mới soát phần sửa code. Soát qua rồi thì merge theo quy trình sẵn có.

Sau khi việc thu thập hiện trường, truy nguyên căn nguyên, tái hiện và kiểm chứng bằng test đã do Agent tự chủ hoàn tất, kỹ sư có thể soát quanh phần bằng chứng và code được gửi lên, không phải gánh từng mục công việc nói trên nữa. Phạm vi nâng hiệu suất mở rộng từ khâu viết code ra trọn quá trình xử lý khiếm khuyết.

# Ba — Vận hành trên cloud và hiệu quả thực tiễn

Để chống đỡ việc xử lý cảnh báo và đẩy phần sửa liên tục 7×24 giờ, chúng tôi xây PolarDB-X Agent dựa trên sandbox trên cloud, để gánh phần vận hành liên tục của quy trình nói trên.

Sandbox trên cloud còn cung cấp hai mặt bảo đảm an toàn: một là **cô lập môi trường**, tách môi trường chạy của Agent khỏi máy tính cá nhân của kỹ sư, nên dù môi trường sandbox có hỏng thì cũng không ảnh hưởng tới môi trường phát triển local; hai là **tối thiểu hoá quyền hạn**, chỉ cấp cho Agent những quyền cần thiết để hoàn thành task, giới hạn phạm vi nó truy cập và thao tác được.

Các thành viên trong đội dùng chung được môi trường trên cloud, cùng cấu hình và hoàn thiện công cụ cùng quy trình.

![image](../../assets/imgs/chapter-25/image-017.png)

_Hình 9: Nền tảng PolarDB-X Agent trên cloud, gánh phần vận hành liên tục của Loop._

Trong nửa năm thực tiễn mà bài này mô tả, mọi cảnh báo đều do Agent hoàn tất vòng xử lý và phân tích đầu tiên. Từ hàng vạn lần cảnh báo, đội đã nhận diện và ghi nhận hơn hai trăm khiếm khuyết, trong đó hơn 70% tái hiện ổn định được, và đã được Agent sửa xong rồi đưa vào khâu review code.

# Bốn — Khuyến nghị thực hành cho các đội khác

Quãng thực tiễn này hình thành ba kinh nghiệm kỹ thuật:

1. **Làm cho các hệ thống R&D gọi được bởi Agent.** Hãy quản lý tập trung các tài liệu hiện trường như log, cung cấp các năng lực truy vấn thường dùng qua CLI hay interface, và gom các phương pháp chẩn đoán, phần mô tả công cụ cùng kinh nghiệm truy nguyên thành Skill, để Agent lấy được thông tin theo nhu cầu và phân tích tiếp dọc theo manh mối.

2. **Làm cho quá trình R&D kiểm chứng được.** Hãy cung cấp môi trường tái hiện, công cụ debug và phân tích bộ nhớ, để Agent tự kiểm nghiệm được giả thuyết, rồi cố định quá trình tái hiện ổn định thành test case, và kiểm tra hiệu quả sửa qua phép kiểm chứng đối chứng trước – sau cùng test hồi quy.

3. **Làm cho task chạy được liên tục.** Hãy đưa Agent và quy trình task lên cloud để chống đỡ việc xử lý cảnh báo, đẩy phần sửa liên tục 7×24 giờ, và kiểm soát phạm vi truy cập cùng thao tác bằng việc cô lập môi trường và tối thiểu hoá quyền hạn.
