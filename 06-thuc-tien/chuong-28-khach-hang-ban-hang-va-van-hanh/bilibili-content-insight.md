# Thực tiễn xây dựng insight nội dung toàn miền của Bilibili

## Một — Bối cảnh khách hàng

Bilibili là cộng đồng văn hoá và nền tảng video hàng đầu trong nước. Hệ sinh thái nội dung của nền tảng đa dạng cao độ, phủ nhiều thể tài như video, bài viết kèm ảnh, livestream, audio, nội dung tương tác, tìm kiếm, bảng tin. Là nền tảng lấy "gieo mầm nội dung" làm tâm trí cốt lõi, Bilibili đã trở thành trận địa quan trọng cho marketing thương hiệu, đặc biệt có ảnh hưởng rõ rệt trong các ngành ô tô, 3C — điện tử số, mỹ phẩm, tiêu dùng nhanh, giáo dục đào tạo và game.

## Hai — Kịch bản nghiệp vụ và các điểm đau cốt lõi

Khác với nền tảng thương mại điện tử truyền thống, quyết định tiêu dùng của người dùng Bilibili thường bắt nguồn từ nhận thức thương hiệu và sự tích luỹ hứng thú hình thành qua tương tác nội dung, chứ không phải chuyển đổi trực tiếp ngay trên nền tảng. Đặc điểm này đặt ra yêu cầu cao hơn cho việc đánh giá hiệu quả marketing. Vì vậy, nền tảng dựa trên khối dữ liệu tương tác công khai đã qua khử định danh và ẩn danh hoá để làm phân tích xu thế dữ liệu ở cấp nhóm, nhằm chống đỡ việc tối ưu hệ sinh thái nội dung và nâng liên tục năng lực dịch vụ thương mại. Chẳng hạn, qua phân tích và insight mà hỗ trợ đánh giá độ rộng lan truyền và hướng phản hồi của người dùng với nội dung thương hiệu, cung cấp tham chiếu hiệu quả khoa học hơn cho nhà quảng cáo.

![image.png](../../assets/imgs/chapter-28/image-005.png)

Đường thương mại hoá marketing của nền tảng nội dung Bilibili

Đội thương mại hoá của Bilibili, trong quá trình phục vụ khách hàng thương hiệu, đối mặt ba thách thức cốt lõi:

1. **Hiệu quả marketing khó định lượng**: sau khi thương hiệu đăng nội dung trên Bilibili (như video gieo mầm của UP chủ), họ thiếu biện pháp hữu hiệu để đo xem nhóm người dùng có bị "gieo mầm" không. Chẳng hạn, sau khi một thương hiệu ô tô đăng video đánh giá xe mới, họ cần nhận diện từ các nội dung tương tác đã khử định danh xem nhóm người dùng đánh giá thế nào về các thuộc tính như tầm hoạt động, ngoại hình, giá — để đánh giá hiệu quả lan truyền của nội dung.

2. **Tài sản nội dung khó cấu trúc hoá**: thể tài nội dung của Bilibili phong phú, ngữ nghĩa phức tạp; video chứa rất nhiều thông tin thị giác, giọng nói, văn bản; còn khu tương tác thì đầy các văn bản dài có mật độ thông tin cao. Việc khớp từ khoá hay engine luật truyền thống khó trích chính xác các thực thể thương mại (như thương hiệu, danh mục, SPU) cùng ngữ nghĩa liên quan.

3. **Chiến lược marketing thiếu dữ liệu chống đỡ**: thương hiệu muốn dựa trên các nội dung thảo luận thật trên Bilibili để dẫn ngược lại việc định nghĩa sản phẩm mới, chiến lược lan truyền và hướng sáng tạo. Chẳng hạn, một thương hiệu mỹ phẩm cần biết nhóm người dùng khi bàn về kem nền thì quan tâm nhất tới "độ bền lớp trang điểm", "khả năng che khuyết điểm" hay "cảm giác trên da" — nhưng lại thiếu công cụ insight nội dung mang tính hệ thống.

Để giải quyết các vấn đề trên, đội khoa học dữ liệu thương mại hoá của Bilibili đã bắt tay với Alibaba Cloud xây một khung insight có cấu trúc hướng tới nội dung toàn miền, hiện thực vòng khép kín dữ liệu từ "cảm nhận nội dung" tới "insight thương mại".

## Ba — Giải pháp: khung insight nội dung toàn miền mới theo kiểu "model lớn + model nhỏ" phối hợp

**PolarDB for AI** là component machine learning phân tán bên trong PolarDB — database cloud native của Alibaba Cloud — hỗ trợ gọi hiệu quả các model nhỏ nhẹ để suy luận thời gian thực với tiền đề dữ liệu không ra khỏi kho, đồng thời liên động được với các model lớn như Qwen để xử lý các task ngữ nghĩa phức tạp, hiện thực kiến trúc nhất thể phối hợp giữa model lớn và model nhỏ.

![image.png](../../assets/imgs/chapter-28/image-006.png)

Phương án một điểm dừng của PolarDB for AI

* PolarDB for AI có thể gọi model lớn Qwen để phân tích hàng loạt các nội dung tương tác của người dùng đã qua khử định danh và ẩn danh hoá, hỗ trợ nhận định về xu thế hứng thú và xu hướng phản hồi ở cấp nhóm, cung cấp dữ liệu chống đỡ cho việc tối ưu sản phẩm và chiến lược nội dung.

* PolarDB for AI, qua một model lớn tuỳ biến cho lĩnh vực thương mại điện tử kết hợp đồ thị tri thức hàng hoá trong lĩnh vực thương mại điện tử của Alibaba, đã nâng mạnh năng lực nhận diện nhiều nhãn như danh mục, thương hiệu, SPU của Bilibili, hiện thực việc khớp thương hiệu với độ chính xác cao và thúc đẩy cấu trúc hoá tài sản nội dung.

![image.png](../../assets/imgs/chapter-28/image-007.png)

Ma trận insight nội dung toàn miền của Bilibili

Bilibili dùng hướng kỹ thuật hoà trộn "model lớn + model nhỏ", dựa vào DeepSeek, loạt model lớn Qwen của Alibaba Cloud, model Index tự nghiên cứu của Bilibili cùng năng lực PolarDB for AI để xây một hệ insight nội dung toàn miền phủ ma trận M×N, trong đó M là chiều nhãn thương mại hoá còn N là chiều thể tài nội dung.

Kiến trúc kỹ thuật tổng thể chia ba tầng:

* **Tầng hạ tầng AI**: dựa trên nền tảng Bailian của Alibaba Cloud, PAI, tài nguyên GPU và nền tảng Agent tự nghiên cứu của Bilibili, cung cấp năng lực huấn luyện, suy luận và lập lịch cho model.

* **Tầng dữ liệu và model**: kết hợp các model lớn đa dụng (như Qwen, Qwen-VL, Qwen-Audio) với các model nhỏ chuyên lĩnh vực mà **PolarDB for AI** cung cấp (đã tinh chỉnh qua SFT, học tăng cường), để hiện thực việc insight nội dung hiệu quả và chi phí thấp.

* **Tầng dịch vụ ứng dụng**: qua node PolarDB for AI mà cung cấp năng lực toán tử model, hiện thực việc gắn và suy luận hiệu quả với "dữ liệu không ra khỏi kho", đồng thời cung cấp năng lực dịch vụ model online thời gian thực ổn định và độc chiếm.

Phương án này cân được cả hiệu quả lẫn chi phí: model lớn đa dụng dùng để khai thác hệ nhãn và phân tích ngữ nghĩa phức tạp, còn model nhỏ chuyên lĩnh vực thì đạt độ chính xác cao hơn và độ trễ thấp hơn ở các task nhất định (như trích thực thể).

## Bốn — Hiện thực kỹ thuật then chốt và việc phá vây các điểm khó

#### 1. Trích nội dung từ bài video: từ phi cấu trúc sang có cấu trúc

![image.png](../../assets/imgs/chapter-28/image-008.png)

Quá trình trích nội dung video

Video là vật mang nội dung cốt lõi của Bilibili, nhưng thông tin của nó rải trong khung hình, giọng nói và phụ đề. Bilibili dùng chiến lược hoà trộn đa modal:

* **Dựng tầng trung gian**: dùng ASR (chuyển giọng nói thành văn bản) và OCR trên khung hình then chốt (nhận dạng chữ trong ảnh) để trích văn bản gốc, rồi dùng các model lớn đa modal như Qwen-VL, Qwen-Audio để sinh biểu diễn ngữ nghĩa trung gian.

* **Dựng hệ CPV**: dựa trên việc khai thác bằng model lớn và phần duy trì của ngành, thiết lập hệ "danh mục — thuộc tính — giá trị thuộc tính". Chẳng hạn, nhận ra thuộc tính "công nghệ chống rung" cùng giá trị "IBIS" trong danh mục "máy ảnh" của video.

* **Trích và gắn bộ ba thực thể**: dùng model lớn để trích bộ ba <danh mục, thương hiệu, SPU>, nhưng kết quả trích gốc có vấn đề là tên gọi không khớp với kho sản phẩm chuẩn (như "Nikon Z5" so với "máy ảnh mirrorless Nikon Z5").

**Điểm khó kỹ thuật**: làm sao gắn chính xác các kết quả trích chưa chuẩn hoá vào kho sản phẩm chuẩn?

**Giải pháp**: Bilibili hợp tác với đội PolarDB của Alibaba Cloud, triển khai model gắn tuỳ biến trong node **PolarDB for AI**. Qua SQL, họ gọi thẳng model lớn đã tinh chỉnh ngay trong database để căn chỉnh thực thể. Chẳng hạn, ta hãy dự đoán danh mục của một bài đăng bằng câu SQL sau:

```sql
/*polar4ai*/ 
SELECT * FROM PREDICT(
  MODEL _polar4ai_cpv_agent, 
  SELECT '{"tên hàng hoá":"Nikon Z5","tên thương hiệu":"Nikon","template thuộc tính danh mục":{"danh mục":""},"giới hạn thuộc tính danh mục":{"danh mục":["số-nhiếp ảnh quay phim-máy ảnh truyền thống-máy ảnh","số-phụ kiện số",...]}}'
) WITH ();
```

Và thu được {"danh mục": "số-nhiếp ảnh quay phim-máy ảnh truyền thống-máy ảnh"}.

Phương án này hiện thực việc gắn với mức đồng thời cao mà "dữ liệu không ra khỏi kho", giải quyết vấn đề nhất quán giữa kết quả trích và tên gọi sản phẩm chuẩn — vừa bảo đảm an toàn dữ liệu, vừa giảm rõ rệt độ phức tạp kỹ thuật. Đồng thời, kết hợp các model NLP như BGE+RoBERTa để khớp, giúp nâng thêm độ chính xác của việc gắn.

#### 2. Phân tích nội dung tương tác: khai thác manh mối giá trị cao từ khối dữ liệu khổng lồ

![image.png](../../assets/imgs/chapter-28/image-009.png)

Quá trình phân tích nội dung tương tác

Khu bình luận của Bilibili có mật độ thông tin rất cao, nhưng hơn 90% là nội dung không mang tính thương mại hoá. Dùng thẳng model lớn xử lý toàn lượng thì chi phí cực đắt.

**Điểm khó kỹ thuật**: làm sao trên tiền đề kiểm soát được chi phí mà vẫn dùng dữ liệu tương tác đã ẩn danh để phân tích mịn phản hồi của nhóm với nhiều thực thể, chống đỡ cho việc tối ưu liên tục nội dung và dịch vụ thương mại?

**Giải pháp**: dùng dây chuyền ba cấp "lọc — phân tích — khai thác":

* **Cấp một: lọc theo tính thương mại hoá**. Dùng các model NLP nhẹ như BGE+BiLSTM để nhanh chóng loại nội dung không liên quan, chỉ giữ lại nội dung có thể dính tới việc thảo luận thương hiệu, sản phẩm.

* **Cấp hai: phân tích thực thể và liên kết ngữ nghĩa**. Với phần văn bản đã lọc, dùng **model lớn về hàng hoá mà PolarDB for AI cung cấp** để nhận diện danh mục, thương hiệu, SPU, và thiết lập quan hệ liên kết ngữ nghĩa giữa các thực thể.

* **Cấp ba: khai thác ý định và thuộc tính**. Nhận diện tiếp các ngữ nghĩa bậc cao như "bị gieo mầm", "ý định mua", và trích các thuộc tính cụ thể mà nhóm người dùng quan tâm (như "tỉ lệ đạt tầm hoạt động cao", "giá đắt"), hình thành insight có cấu trúc.

## Năm — Tóm tắt

Qua việc phối hợp sâu với model lớn Qwen của Alibaba Cloud và PolarDB for AI, Bilibili đã xây thành công một hệ insight nội dung toàn miền hiệu quả và mở rộng được. Hệ này không chỉ giải quyết các điểm đau cốt lõi như khó đo hiệu quả marketing thương hiệu, khó cấu trúc hoá tài sản nội dung, mà còn chuyển dữ liệu tương tác công khai đặc thù của cộng đồng Bilibili thành insight thương mại hành động được, nâng rõ rệt tính chắc chắn khi đầu tư quảng cáo và ROI của nhà quảng cáo. Hiện tại, hệ insight nội dung toàn miền này đã được ứng dụng trong các kịch bản thương mại hoá của Bilibili như Chỉ số Bilibili, việc chọn UP chủ bằng AI trên nền tảng Huahuo, báo cáo insight Bilibili Bida, việc đầu tư bài viết nổi của Kế hoạch Hấp dẫn, khai thác lead cho các tài khoản kinh doanh và gói từ khoá tìm kiếm cho quảng cáo thương hiệu — hiện thực việc nâng hiệu suất toàn chuỗi từ insight nội dung tới chuyển đổi marketing. Tương lai, Bilibili sẽ tiếp tục tối ưu năng lực model, mở rộng sang nhiều thể tài nội dung và kịch bản thương mại hơn, để giải phóng thêm giá trị marketing của nền tảng nội dung.
