# Thực tiễn xây nền dữ liệu memory chu kỳ dài quy mô lớn của MiniMax

## Một — Bối cảnh khách hàng

MiniMax (Xiyu Technology) là công ty công nghệ trí tuệ nhân tạo đa dụng hàng đầu thế giới, thành lập năm 2022, với tầm nhìn "Intelligence with Everyone", cam kết thúc đẩy biên giới công nghệ trí tuệ nhân tạo. MiniMax kiên trì tự nghiên cứu trọn các modal văn bản, video và giọng nói. Dựa trên các model toàn modal tự nghiên cứu, MiniMax đưa ra một loạt sản phẩm AI native cho toàn cầu, gồm Hailuo AI, Xingye, Talkie…, cùng nền tảng mở dành cho doanh nghiệp và người phát triển. Tới nay đã có hơn 236 triệu người dùng ở hơn 200 quốc gia và vùng lãnh thổ, cùng các khách hàng doanh nghiệp và người phát triển từ hơn 100 quốc gia và vùng lãnh thổ.

## Hai — Thách thức nghiệp vụ dưới khối dữ liệu khổng lồ

Xingye là nền tảng sáng tác Agent AI mà MiniMax xây dựa trên công nghệ AIGC đa modal; qua các tương tác đa modal như văn bản, giọng nói, video, nó cho phép người dùng tuỳ biến các nhân vật AI có hình tượng, chất giọng, tính cách và kỹ năng cá nhân hoá. Giá trị cốt lõi của nó tập trung vào kịch bản hội thoại: dựa vào năng lực cảm nhận context và biểu đạt của model ngôn ngữ lớn tự nghiên cứu để dẫn dắt hội thoại có mức giống người cao, dựng nên quan hệ tương tác liên tục giữa người dùng và nhân vật AI.

Quy mô người dùng và mức hoạt động của Xingye luôn ở vị trí dẫn đầu và vẫn tăng liên tục, điều này cũng mang tới nhiều thách thức kỹ thuật cho phần lưu trữ tầng dưới đang chống đỡ dữ liệu hội thoại đa modal của nó:

* **Nút thắt về lưu trữ và hiệu năng với dữ liệu đa modal khổng lồ**

  * Liên quan tới template nhân vật AI do người dùng tự định nghĩa, dữ liệu hội thoại, cùng các nội dung phi cấu trúc như video, âm thanh, hình ảnh; mỗi ngày tăng thêm hàng trăm triệu bản ghi, tổng quy mô đã vượt mức hàng trăm TB và đang tăng theo cấp số nhân;

  * Database truyền thống khi xử lý các trường lớn chứa JSON hay Blob cỡ hàng chục MB thì hiệu năng sụt mạnh, đặc biệt khi bảng vượt 1 tỉ dòng thì độ trễ đọc ghi tăng rõ rệt, ảnh hưởng trực tiếp tới hiệu suất của chuỗi suy luận AI.

* **Áp lực về tính đàn hồi và ổn định dưới lưu lượng thuỷ triều**

  * Lưu lượng nghiệp vụ có đặc trưng thuỷ triều rõ rệt, với số request đồng thời lúc đỉnh gấp hơn 10 lần tải nền trung bình hằng ngày;

  * Mô hình cấu hình tài nguyên tĩnh khiến tài nguyên nhàn rỗi lúc đáy và TCO tăng rõ rệt; còn lúc đỉnh thì vì năng lực mở rộng ngang của database bị hạn chế nên hiệu năng xử lý dữ liệu suy giảm, độ trễ phản hồi đầu-cuối tăng, ảnh hưởng nghiêm trọng tới độ ổn định dịch vụ và trải nghiệm người dùng.

* **Chi phí biên của kiến trúc leo thang liên tục**

  * Khi quy mô nghiệp vụ tăng theo cấp số nhân, chi phí tính toán, lưu trữ và vận hành tăng liên tục, khiến chi phí biên của kiến trúc hiện có tăng dần và trở thành nút thắt chính của khả năng mở rộng.

## Ba — Thực tiễn nền dữ liệu thông minh dựa trên PolarDB của Alibaba Cloud

![image.png](../../assets/imgs/chapter-28/image-001.png "Nền dữ liệu model lớn của MiniMax dựa trên PolarDB Limitless")

**1. Kiến trúc phân tán đa master: chống đỡ việc xử lý khối dữ liệu hội thoại khổng lồ**

MiniMax nhờ kiến trúc cụm phân tán đa master của PolarDB Limitless mà phá được nút thắt hiệu năng của kiểu master đơn truyền thống. Kiến trúc này hỗ trợ tới 63 compute node cùng ghi, khiến khối dữ liệu hội thoại cỡ xTB tăng thêm mỗi ngày được phân tán hiệu quả lên nhiều Shard, hiện thực việc mở rộng tuyến tính thông lượng ghi.

Ngoài ra, năng lực DDL phân tán cho phép MiniMax thay đổi cấu trúc bảng mà không gián đoạn dịch vụ. PolarDB hỗ trợ bảo đảm tính nguyên tử cho việc thay đổi cấu trúc bảng xuyên node bằng giao thức commit nhiều giai đoạn mà không ảnh hưởng tới nghiệp vụ online, nên đội nghiệp vụ hoàn tất được việc đổi cấu trúc bảng mà không cần dừng dịch vụ để bảo trì, giúp tốc độ lặp sản phẩm nhanh lên đáng kể.

![image.png](../../assets/imgs/chapter-28/image-002.png "Sơ đồ kiến trúc kỹ thuật cụm PolarDB Limitless của MiniMax")

**2. Co giãn đàn hồi trong vài giây: ứng phó linh hoạt với biến động lưu lượng**

Trước lưu lượng thuỷ triều, MiniMax dùng chức năng co giãn đàn hồi Serverless của PolarDB. Bằng việc giám sát tải CPU/bộ nhớ của PolarDB theo thời gian thực, hệ thống dự đoán xong trong 5 giây và hoàn tất việc mở rộng vô cảm từ 0 lên hàng nghìn core trong 1 giây, chống đỡ tối đa được cú sốc QPS cỡ trăm nghìn.

Dựa trên kiến trúc lưu trữ chia sẻ PolarStore của PolarDB, MiniMax hiện thực được việc co giãn đàn hồi "không sao chép dữ liệu": việc mở rộng chỉ cần chuyển quyền sở hữu tính toán của phân vùng, không phải di chuyển dữ liệu vật lý; kết hợp thuật toán lập lịch phân vùng thông minh, lượng metadata và trạng thái phải di chuyển giảm 30%–50%. Cả quá trình bảo đảm kết nối không đứt, giao dịch không mất, dao động hiệu năng dưới 5%, và hoàn toàn trong suốt với nghiệp vụ. Nhờ đó, MiniMax không cần dự trữ tài nguyên dư cho lưu lượng đỉnh mà co giãn theo nhu cầu, giúp tổng chi phí tính toán giảm 50%.

**3. Tối ưu bảng lớn và trường lớn: tăng tốc xử lý context dài**

Với các bảng hội thoại cỡ trăm tỉ chứa trường JSON/Blob lớn, MiniMax tận dụng bố cục cột và năng lực cập nhật cục bộ của PolarDB, kết hợp tăng tốc mạng RDMA, để đạt thông lượng trường lớn 12GB/s trên một node, hiệu năng CRUD tăng hơn 3 lần, và độ trễ tra cứu hội thoại lịch sử ổn định ở mức mili giây. Đồng thời, framework thực thi bất đồng bộ dựa trên lập lịch coroutine và cache context giúp QPS của các truy vấn điểm tần suất cao như "kéo luồng hội thoại theo user ID" tăng hơn 50%, chống đỡ hiệu quả cho kịch bản suy luận AI.

![image.png](../../assets/imgs/chapter-28/image-003.png "Tối ưu bảng lớn, trường lớn cho hiệu năng context")

**4. Nền dữ liệu thông minh: động cơ dẫn dắt tăng trưởng nghiệp vụ ở quy mô lớn**

MiniMax sẽ dựa vào hai bánh dẫn động là việc tách thông minh dữ liệu nóng — lạnh của PolarDB và engine đa modal thống nhất để xây một nền dữ liệu thông minh hiệu năng cao. Ở tầng lưu trữ, chiến lược phân tầng tự động dựa trên độ nóng truy cập hiện thực việc tối ưu chi phí tới hạn mà không cần sửa một dòng code, với phản hồi dữ liệu nóng ở mức mili giây và tra cứu dữ liệu lạnh ở mức giây, cân bằng giữa nhu cầu tương tác AI thời gian thực và phân tích chiều sâu; còn ở tầng tính toán, nhờ engine đa modal native của PolarDB cùng mạng tốc độ cao RDMA mà hiện thực được việc gợi lại xuyên modal (văn bản, giọng nói, hình ảnh) với độ trễ thấp, độ chính xác cao, tăng mạnh năng lực memory dài hạn và hiểu context của Agent. Kiến trúc vừa cực kỳ hiệu quả về chi phí vừa mở rộng vô hạn này cung cấp phần chống đỡ vững chắc cho việc MiniMax lặp nhanh nghiệp vụ và mở rộng quy mô trong các kịch bản đồng thời khổng lồ.

## Bốn — Lợi ích nghiệp vụ

Hiện tại, hơn 100 database của toàn bộ dòng sản phẩm MiniMax (gồm Hailuo, Xingye, Agent, nền tảng mở…) đã triển khai trên PolarDB, hiện thực việc nâng đồng thời cả trải nghiệm người dùng lẫn hiệu suất phát triển:

* **Hiệu năng cao**: hiệu năng đọc ghi của bảng hội thoại cỡ trăm tỉ tăng hơn 3 lần, chống đỡ việc ghi thời gian thực hàng trăm triệu message mỗi ngày và tra cứu ở mức mili giây;

* **Đàn hồi cao**: co giãn vô cảm trong vài giây để ứng phó biến động lưu lượng gấp 10 lần, chi phí tài nguyên tính toán giảm 50%;

* **Chi phí thấp**: tự động phân tầng lưu trữ dữ liệu nóng — lạnh, chi phí lưu trữ giảm 75%, nhân lực vận hành giảm 80%;

* **Lặp nhanh**: DDL phân tán hỗ trợ thay đổi schema online 7×24, rút ngắn rõ rệt chu kỳ đưa các chức năng AI lên production.

## Năm — Triển vọng tương lai

Bằng việc ứng dụng sâu các năng lực cốt lõi của PolarDB như phân tán đa master (Limitless), lưu trữ đa modal, đàn hồi trong vài giây và phân tầng nóng — lạnh thông minh, hệ thống đã chống đỡ hiệu quả các thách thức kỹ thuật về đồng thời cao, độ trễ thấp và quản lý khối dữ liệu dị cấu khổng lồ trong kịch bản suy luận model lớn của MiniMax. Điều này không chỉ tối ưu và nâng rõ rệt trải nghiệm người dùng, tính linh hoạt nghiệp vụ và hiệu suất vận hành, mà còn kiểm chứng sâu sắc giá trị của việc hoà sâu database cloud native với hệ thống AI. Khi nền dữ liệu thông minh "hồ — kho nhất thể" của PolarDB phối hợp cùng engine thuật toán của MiniMax, một hệ sinh thái Agent AI có memory dài, tương tác đa modal và năng lực phản hồi thời gian thực đã triển khai được ở quy mô lớn.

Nhìn về tương lai, mảng database của Alibaba Cloud sẽ tiếp tục hợp tác sâu với MiniMax, cùng khám phá biên giới đổi mới của database AI native, xây nền dữ liệu đa modal cho AI, và thúc đẩy các ứng dụng model lớn tiến hoá theo hướng thông minh hơn, đáng tin hơn.
