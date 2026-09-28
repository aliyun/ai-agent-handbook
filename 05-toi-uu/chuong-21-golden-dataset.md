# Chương 21 — Golden dataset của Agent

Đội chăm sóc khách hàng phát hiện Agent bỏ sót một bước then chốt; phía kỹ thuật bổ sung Prompt rồi hỏi lại, và câu trả lời đã đầy đủ. Tiếp theo còn phải biết: đổi cách hỏi thì còn hữu hiệu không, các câu hỏi khác có bị trả lời tệ đi không, và sau này đổi model thì có bỏ sót bước đó lần nữa không.

Nếu lần nào cũng đi tìm vấn đề tạm thời rồi phán đoán theo cảm tính, thì công việc này sẽ ngày càng khó. **Golden dataset** giúp đội lưu lại những câu hỏi đó cùng chuẩn phán định, hình thành một bộ đề nghiệp vụ dùng đi dùng lại được. Khi sửa Prompt, bổ sung Skill, chỉnh kho tri thức hay đổi model, đều lấy cùng một bộ đề ra kiểm nghiệm được.

Trong phần quan sát và tối ưu Agent, **Dataset** là nơi quản lý bộ đề đó. Chương trước đã liên tục đưa dữ liệu vận hành vào; chương này nói tiếp cách chọn đề, xác nhận chuẩn, dựng thành golden set, rồi dùng nó vào việc tối ưu hằng ngày.

## 21.1 Golden dataset có tác dụng gì

**Golden dataset là một nhóm task đã được nghiệp vụ xác nhận: vừa có đề bài, vừa có căn cứ để phán định task đã hoàn thành chưa.** Với hỏi đáp tri thức, căn cứ có thể là đáp án tham chiếu cùng các điểm bắt buộc phải phủ; với các task thao tác như hoàn tiền, đặt vé, còn phải nói rõ trạng thái mà nghiệp vụ phải đạt tới; còn với task code thì có thể gồm yêu cầu test và điều kiện nghiệm thu.

Chữ "golden" nghĩa là đề bài và chuẩn đáng tin. Một task mà Agent từng trả lời sai, chỉ cần bổ sung đủ yêu cầu đúng, thì vẫn thành mẫu golden được. Giữ những đề kiểu đó thường giúp đội cải thiện sản phẩm nhiều hơn là chỉ gom các câu trả lời thành công đẹp đẽ.

| Việc đội cần làm | Dùng golden set ra sao | Giúp gì cho nghiệp vụ |
| --- | --- | --- |
| Xác định thế nào là trả lời tốt | Để người phụ trách nghiệp vụ xác nhận đáp án tham chiếu và yêu cầu chấm điểm cho cùng một bộ đề | Vận hành, kỹ thuật, test có chung chuẩn, bớt tranh luận lặp lại |
| Chọn model hay phương án Agent | Cho các phương án ứng viên làm cùng một bộ đề, so sánh kết quả, chi phí và thời lượng | Chọn theo nghiệp vụ của chính mình, không chỉ nhìn bảng xếp hạng đa dụng |
| Kiểm chứng một lần sửa | Giữ lại câu trả lời và điểm từng câu trước và sau khi sửa | Thấy rõ đã sửa được gì, và có ảnh hưởng tới năng lực khác không |
| Ngăn vấn đề cũ tái xuất | Đưa các vấn đề quan trọng vào bộ đề hồi quy lâu dài, chạy lại trước mỗi lần nâng cấp | Các khiếu nại và sự cố đã xử lý trở thành mục kiểm tra lâu dài |
| Hiệu chỉnh evaluator | Dùng các mẫu con người đã xác nhận để kiểm phần chấm điểm bằng máy | Giúp đánh giá liên tục sát với phán định nghiệp vụ hơn, giảm Badcase vô nghĩa |

Chẳng hạn, Agent chăm sóc khách hàng sản phẩm thường trả lời "có những chức năng gì" và "cấu hình đánh giá ra sao". Hai loại câu hỏi cần đáp án khác nhau: cái trước nhấn vào độ phủ năng lực, cái sau nhấn vào các bước thao tác. Lưu lại đề bài cùng yêu cầu riêng của mỗi loại, thì sau khi sản phẩm nâng cấp chỉ cần cập nhật các mục tương ứng là tiếp tục kiểm chứng được rằng phần chăm sóc khách hàng có đưa ra trợ giúp chính xác, thực thi được không.

Giá trị của golden set đến từ việc dùng đi dùng lại. Một dataset chưa từng vào đánh giá, thí nghiệm hay khâu kiểm tra phát hành, dù được sắp xếp tinh tế đến mấy, thì vẫn chưa tham gia vào việc cải thiện Agent.

## 21.2 Dataset cung cấp những năng lực hằng ngày nào

Vào AgentSpace tương ứng, quản lý mẫu trong **Trung tâm dữ liệu → Dataset**. Có thể hiểu Dataset như một bảng nghiệp vụ chuyên dùng cho việc đánh giá và tối ưu Agent: một dòng đặt một đề hay một task, một cột đặt các thông tin như đề bài, câu trả lời, yêu cầu chấm điểm. Tạo xong thì bổ sung dữ liệu, sửa trường, gán nhãn tiếp được, và cũng vào thẳng phần đánh giá, thí nghiệm được.

| Cần làm gì | Thao tác ở đâu | Hợp dùng khi nào |
| --- | --- | --- |
| Đưa bộ đề sẵn có vào | Tạo dataset, chọn "Tải lên file CSV / Excel / JSONL" | Đã có FAQ, test case hay bảng do con người sắp xếp |
| Lấy đề từ việc chạy thực tế | Chọn xử lý từ dữ liệu Trace hay nhập từ trajectory; cũng có thể "Thêm vào dataset" ngay ở phần chi tiết trajectory | Biến khiếu nại, task thất bại và cách hỏi thật thành mẫu ứng viên |
| Bắt đầu từ vài đề | Khi tạo thì chọn "Bắt đầu từ trang trắng", định nghĩa trường rồi thêm dữ liệu | Kiểm chứng quy trình trước, hoặc để chuyên gia viết các ca then chốt |
| Thêm yêu cầu chấm điểm và nội dung khác | "Quản lý trường" để thêm cột, rồi sửa bản ghi trong "Chi tiết dữ liệu" | Bổ sung đáp án tham chiếu, Rubric, kịch bản cho mẫu sẵn có |
| Sắp xếp hàng loạt và con người xác nhận | "Gán nhãn bằng AI" và "Quản lý gán nhãn" | Phân loại, sàng sơ bộ, và soát từng bản ghi theo yêu cầu thống nhất |
| Giữ lại một bản bộ đề so sánh lặp được | "Tạo version" trong phần quản lý version | Trước các thí nghiệm quan trọng, hồi quy hay khi luật nghiệp vụ đổi |
| Dùng bộ đề | "Khởi động đánh giá", "Khởi động thí nghiệm", và xem bản ghi thí nghiệm | Soát các câu trả lời sẵn có, hoặc cho Agent làm lại đề |
| Giao mẫu cho công cụ khác | Export kết quả truy vấn hiện tại, hoặc tải offline | Phân tích bên ngoài, chuẩn bị huấn luyện, lưu trữ và bàn giao |

Bộ đề bản đầu tiên có thể rất đơn giản. Hãy đưa vào trước những task mà đội quan tâm nhất, bổ sung rõ cách phán định, rồi tăng dần nhãn và quy tắc quản lý.

## 21.3 Bắt tay dựng một golden set cho Agent chăm sóc khách hàng sản phẩm

Dưới đây dùng tiếp hai đề trong bản demo thao tác: "Phần quan sát và tối ưu Agent có những chức năng gì" và "Phần quan sát và tối ưu Agent làm đánh giá ra sao". Mục tiêu là kiểm chứng phần chăm sóc khách hàng có giới thiệu trọn vẹn được sản phẩm không, và có đưa ra được các bước đánh giá mà người dùng làm theo được không. Hai đề này dùng để chạy thông quá trình xây dựng và sử dụng; còn bộ đề chính thức thì sẽ mở rộng ra nhiều kịch bản hơn.

### 21.3.1 Lập tập ứng viên, tập trung thu các vấn đề đáng kiểm tra

Ở danh sách dataset, bấm **Tạo dataset**, tên có thể đặt là `customer_service_candidates`, phần mô tả viết rõ mục đích, ví dụ "Bộ đề ứng viên cho chăm sóc khách hàng sản phẩm: thu thập các câu hỏi thật và câu trả lời điểm thấp, để chuyên gia sản phẩm soát lại". Sau đó chọn nguồn theo tài liệu hiện có.

Đã có bảng thì tải file lên, xem trước các cột nhận ra được cùng vài bản ghi, xác nhận đề bài và câu trả lời không bị lệch cột, rồi mới tạo. Đã có trajectory Agent thì tìm ứng dụng mục tiêu và khoảng thời gian trước, rồi thêm những task tiêu biểu vào tập ứng viên này từ phần chi tiết. Còn nếu cần thu thập liên tục mỗi ngày thì dùng Pipeline, ghi câu hỏi, câu trả lời và tham chiếu trajectory đã sắp xếp vào tập làm việc.

Khi chưa có traffic production, cũng có thể bắt đầu từ trang trắng, để người phụ trách sản phẩm hay chăm sóc khách hàng bổ sung các câu hỏi thường gặp, câu khó và các tình huống biên trong luật nghiệp vụ. Đề do chuyên gia viết và câu hỏi thật của người dùng dùng chung được, chỉ cần phân biệt ở cột nguồn.

### 21.3.2 Dùng vài trường để nói rõ đề bài và chuẩn

Trong **Quản lý trường**, hãy đặt các cột cần thiết. Dưới đây là một cấu trúc hợp để khởi đầu; tên do đội tự định nghĩa, khi tạo thì dùng trường văn bản tương ứng là được.

| Cột | Tên trường ví dụ | Điền gì |
| --- | --- | --- |
| Đề bài | `input` | Câu hỏi gốc của người dùng; khi cần thì bổ sung tiền đề để hoàn thành task |
| Câu trả lời gốc | `actual_output` | Agent gốc đã trả lời ra sao, dùng để phân tích lỗi và soát thủ công |
| Đáp án tham chiếu | `expected_output` | Đáp án mà nghiệp vụ công nhận hay kết quả phải đạt được |
| Yêu cầu chấm điểm | `rubric` | Phải phủ những gì, chấm điểm ra sao, những lỗi nào không chấp nhận được |
| Kịch bản | `scenario` | Giới thiệu chức năng, hướng dẫn thao tác, xử lý ngoại lệ… |
| Nguồn | `source_ref` | Trajectory tương ứng, version tài liệu hay phần ghi chú do người viết |

"Đáp án tham chiếu" và "yêu cầu chấm điểm" dùng chung được. Đáp án tham chiếu đưa ra một ví dụ đạt yêu cầu, còn yêu cầu chấm điểm nói rõ những nội dung nào bắt buộc phải làm được, và cho phép Agent trả lời bằng câu chữ khác. Các task dạng mở thường không nên đòi khớp từng chữ.

Hai đề trên có thể sắp xếp như sau. Dưới đây liệt kê hướng biên soạn; còn yêu cầu cụ thể thì do người phụ trách sản phẩm xác nhận dựa trên năng lực của kỳ đó.

| Đề bài | Trọng tâm của đáp án tham chiếu | Trọng tâm của yêu cầu chấm điểm |
| --- | --- | --- |
| Phần quan sát và tối ưu Agent có những chức năng gì? | Nói rõ các năng lực quan sát, xử lý dữ liệu, đánh giá — thí nghiệm, sử dụng kinh nghiệm cùng công dụng của chúng | Có phủ được các năng lực người dùng quan tâm không; có giải thích giải quyết được vấn đề gì không; có chứa lời hứa thiếu chính xác không |
| Phần quan sát và tối ưu Agent làm đánh giá ra sao? | Nói rõ các bước chuẩn bị dữ liệu, tạo evaluator, cấu hình task, xem kết quả và cải thiện | Có nói rõ lối vào không; có cấu hình ánh xạ input — output không; có giải thích cách dùng kết quả chấm điểm không |

Bản demo ban đầu viết yêu cầu của cả hai đề vào cùng một evaluator, về sau đổi sang thêm cột `rubric` vào dataset và điền yêu cầu riêng cho từng câu. Sau khi chỉnh như vậy, điểm thấp ứng được về đúng phần nội dung mà câu hiện tại bỏ sót, và phía kỹ thuật cũng dễ biết nên bổ sung tri thức, bổ sung bước hay bổ sung ví dụ hơn.

Trường `rubric` của đề "làm đánh giá ra sao" có thể điền đoạn ví dụ dưới đây trước, rồi để người phụ trách nghiệp vụ chỉnh yêu cầu và trọng số:

> Kiểm theo bốn mục, mỗi mục thoả thì được 0,25 điểm, không thì 0 điểm: ① nói rõ cách chuẩn bị và chọn dữ liệu đánh giá; ② nói rõ cách chọn hay tạo evaluator; ③ nói rõ phần ánh xạ trường giữa input người dùng, output của Agent và trajectory; ④ nói rõ cách chạy đánh giá, xem phần diễn giải và xử lý các mẫu điểm thấp. Hãy xuất ra điểm từng mục, tổng điểm và phần nội dung còn thiếu. Nếu bịa ra năng lực sản phẩm hay lối vào thao tác thì đánh dấu riêng là không đạt và nói rõ vấn đề cụ thể.

### 21.3.3 Xác nhận vài bản ghi bằng tay trước, rồi để AI mở rộng phạm vi sắp xếp

Mở **Chi tiết dữ liệu**, đọc từng bản ghi gồm đề bài, câu trả lời gốc và tài liệu nguồn, rồi bổ sung đáp án tham chiếu cùng yêu cầu chấm điểm. Chẳng hạn, câu trả lời gốc chỉ nói "tạo task đánh giá", thì người phụ trách nghiệp vụ cần bổ sung vào yêu cầu phần chọn evaluator, ánh xạ trường và xem kết quả còn thiếu, chứ không chỉ viết một câu "đáp án chưa đầy đủ".

Chọn vài đề tiêu biểu để cùng thảo luận trước sẽ giúp phát hiện sớm những chỗ bất đồng về chuẩn: phần giới thiệu chức năng có cần thêm gợi ý sử dụng không? Phần hướng dẫn thao tác có bắt buộc phải đưa lối vào trên giao diện không? Chốt được những giao ước này rồi mới giao cho nhiều người hơn hay cho AI xử lý hàng loạt.

Khi dữ liệu nhiều lên, trong **Gán nhãn bằng AI** hãy chọn các "trường cần quan tâm" mà nó phải đọc, ví dụ đề bài, câu trả lời gốc và phần ghi chú liên quan, rồi chọn cấu hình gán nhãn sẵn có, hoặc mô tả mục tiêu phân tích để AI sinh nhãn. Có thể phân loại theo "giới thiệu chức năng, hướng dẫn thao tác, xử lý ngoại lệ" trước, cũng có thể đánh dấu các câu trả lời "có thể đã bỏ sót bước". Hãy điền luật nhận diện của nghiệp vụ, chọn bỏ qua kết quả sẵn có hay gán nhãn lại và ghi đè, rồi tạo task.

Chỉ muốn bù các nhãn còn thiếu thì chọn bỏ qua kết quả sẵn có; còn khi cả hệ phân loại nghiệp vụ thay đổi thì mới cân nhắc gán nhãn lại. Task xong thì xem các mẫu tiêu biểu, kiểm tra AI có hiểu đúng phần phân loại và yêu cầu nghiệp vụ không. Gán nhãn trước hợp để giảm công sắp xếp, còn chuẩn cho đề golden thì vẫn phải do người phụ trách nghiệp vụ xác nhận.

### 21.3.4 Soát xong thì chọn các đề đã xác nhận vào golden set

Khi nhiều người soát liên tục, hãy vào **Quản lý gán nhãn**, chọn hay cấu hình template gán nhãn, ánh xạ đề bài, câu trả lời gốc và tài liệu tham chiếu vào vùng hiển thị, rồi đặt các mục phán định cần điền, ví dụ "đáp án có đúng không", "thiếu loại thông tin nào", "có cần bổ sung bằng chứng không". Lưu cấu hình xong thì bắt đầu gán nhãn từng bản ghi, gửi xong thì sang bản tiếp theo; khi có bất đồng thì xem nội dung gốc và lịch sử gán nhãn rồi điều chỉnh phán định.

Đáp án tham chiếu và `rubric` cần đi vào thí nghiệm thì phải điền vào đúng các trường đã giao ước, để evaluator đọc thẳng được. Chỉ để lại một câu "đề này nên trả lời thế này" trong phần thảo luận thì thí nghiệm không tự dùng được nó.

Xác nhận xong thì lọc và tích chọn lô mẫu này, dùng **Thêm vào dataset** để đưa chúng vào `customer_service_gold_v1`, với mô tả là "Golden set chăm sóc khách hàng sản phẩm bản đầu tiên". Hãy xác nhận phần ánh xạ trường đích có giữ được đề bài, đáp án tham chiếu, `rubric` và nguồn không, rồi mới gửi và xem nội dung trong tập mới. Cũng có thể export rồi nhập vào một dataset độc lập. Đội dùng được trạng thái soát tuỳ chỉnh hay nhãn để quản lý căn cứ lựa chọn. "Golden set" là công dụng mà đội gán cho bộ dữ liệu này, chứ không cần chờ một loại dataset đặc biệt nào.

Những mẫu còn thiếu bằng chứng hay còn đang tranh luận thì tiếp tục để ở tập ứng viên, bổ sung đủ rồi mới thu vào. Còn những mẫu đã xác nhận là có vấn đề thì gọi là **Badcase**; phải bổ sung đủ yêu cầu đúng cho nó thì mới dùng được để kiểm nghiệm lần sửa sau.

## 21.4 Chọn đề thế nào thì mới giúp được cho nghiệp vụ

Chỉ thu các đề điểm thấp thì có thể không thấy được sự thụt lùi ở năng lực bình thường; còn chỉ thu các câu hỏi phổ biến nhất thì lại dễ bỏ sót số ít trường hợp có cái giá rất cao. Khi chọn đề, có thể để vận hành chăm sóc khách hàng, chuyên gia nghiệp vụ và kỹ thuật cùng soát phạm vi phủ.

| Đề nên giữ | Vì sao giữ | Ví dụ ở Agent chăm sóc khách hàng sản phẩm |
| --- | --- | --- |
| Câu hỏi tần suất cao | Ảnh hưởng trải nghiệm hằng ngày của đông người dùng | Giới thiệu chức năng, cách tích hợp, cấu hình thường dùng |
| Vấn đề đã từng xảy ra | Kiểm tra phần sửa có còn hữu hiệu không | Câu trả lời bỏ sót bước, trích dẫn chức năng đã cũ |
| Ranh giới nghiệp vụ và yêu cầu rủi ro cao | Ngăn những lỗi ít nhưng đắt | Thao tác không có quyền, năng lực không tồn tại, xử lý thông tin nhạy cảm |
| Đề vốn vẫn chạy bình thường | Phát hiện sự thụt lùi do thay đổi mang lại | Các câu hỏi thao tác chuẩn mà trước đây trả lời đầy đủ được |
| Biến thể diễn đạt và câu hỏi nhiều lượt | Kiểm tra xem có chỉ hợp với một cách hỏi không | Viết tắt, điều kiện bổ sung, câu hỏi dồn trong ngữ cảnh |

Sau khi lọc hay tổng hợp theo cột kịch bản, đội sẽ thấy loại nào đang dồn nhiều đề, loại nào còn chưa có ca đại diện. Ưu tiên bù chỗ trống có giá trị hơn là cứ thêm mãi những câu hỏi gần giống nhau. Cùng một câu hỏi cũng không nhất thiết là trùng: quyền hạn tài khoản, version sản phẩm hay ngữ cảnh khác nhau thì đáp án đúng có thể khác, nên khi chọn đề hãy giữ lại những khác biệt đó.

Khi liên quan tới thao tác thật, còn phải viết rõ điều kiện khởi đầu của task. Chẳng hạn "đơn hàng thoả điều kiện hoàn tiền" dùng được làm input của task mới; còn lỗi tool trong lần chạy cũ là tài liệu để phân tích lần thực thi gốc. Khi làm lại đề thì phải xuất phát từ trạng thái ban đầu đã giao ước; còn khi test riêng phần khôi phục sau thất bại thì mới đặt đúng checkpoint thất bại đó.

Lô đề golden đầu tiên không cần nhiều, nhưng phải có người giải thích được vì sao giữ từng đề và phán định ra sao. Về sau, mỗi lần xử lý một loại vấn đề mới trên production thì bổ sung mẫu tương ứng, đồng thời xem lại bộ đề hiện có còn áp dụng được không.

## 21.5 Dựng xong rồi thì dùng thật ra sao

### Cách dùng một: kiểm tra chuẩn chấm điểm có đáng tin không

Chọn các câu trả lời tốt, xấu và ở biên đã được con người xác nhận, rồi bấm **Khởi động đánh giá**. Ánh xạ đề bài, câu trả lời gốc, đáp án tham chiếu và yêu cầu chấm điểm cho evaluator, rồi xem kết luận của nó có khớp với người phụ trách nghiệp vụ không.

Nếu câu trả lời xấu lại được điểm cao, trước hết hãy xem nó có nhận đúng trường không, yêu cầu của đề hiện tại đã rõ chưa. Sửa xong thì chấm lại chính lô tài liệu đó. Golden set ở đây đóng vai "đề hiệu chỉnh", giúp đội dựng nên một chuẩn mà việc đánh giá liên tục về sau tin được.

### Cách dùng hai: so sánh các version Prompt, model hay Agent

Trên golden set, bấm **Khởi động thí nghiệm**, chọn evaluator và cấu hình phần ánh xạ. Đề bài giao cho Agent được test, còn đáp án tham chiếu và `rubric` giao cho evaluator; câu trả lời mới sinh ra lần này là đối tượng được đánh giá. Hãy chạy version hiện tại làm baseline trước, rồi mới chạy ứng viên đã cải tiến.

Chẳng hạn, sau khi bổ sung một Skill thao tác đánh giá cho Agent chăm sóc khách hàng, hãy cho cả hai version cùng trả lời câu "làm đánh giá ra sao", đồng thời kiểm tra các câu vốn bình thường như "có những chức năng gì". Hãy xem đề mục tiêu có bù đủ các bước không, và cũng xem các đề khác có tệ đi không, thời lượng và chi phí có thay đổi không. Golden set cung cấp đề bài chung và chuẩn chung, còn thí nghiệm lo việc chạy lại và ghi kết quả.

Hãy xem thay đổi theo từng đề trước, rồi mới nhìn xu thế tổng thể. Một đề thao tác then chốt vẫn thất bại thì không thể bỏ qua chỉ vì điểm trung bình đã tăng. Phần cấu hình và phân tích thí nghiệm cụ thể sẽ triển khai ở chương sau.

### Cách dùng ba: giữ các đề quan trọng làm phần kiểm tra hồi quy lâu dài

Hãy liệt các sự cố lịch sử, các luồng quan trọng cùng một phần đề bình thường vào phạm vi hồi quy, chạy lại trước mỗi lần nâng cấp model, Prompt, Skill hay kho tri thức; cũng có thể kiểm tra liên tục qua phần lập lịch định kỳ ở đầu thực thi thí nghiệm. Khi phát hiện thụt lùi thì định vị thẳng được về đúng đề bài, yêu cầu và biểu hiện trong lịch sử.

Cùng một mẫu golden có thể đảm nhận luôn vai trò hồi quy. "Golden" nhấn vào chất lượng của đề bài và chuẩn, còn "hồi quy" nhấn vào mục đích dùng lặp; không cần vì mỗi cách gọi mà nhân bản dữ liệu thêm một lần. Chỉ khi cần nhịp phát hành độc lập hay quyền hạn khác nhau thì mới tách thành nhiều dataset.

## 21.6 Cập nhật bộ đề theo nghiệp vụ, giữ lại căn cứ so sánh

Trước khi bắt đầu so sánh chính thức, hãy bấm **Tạo version** trong phần quản lý version của dataset, điền số version và mô tả, ví dụ "v1.0, hướng dẫn thao tác cho chăm sóc khách hàng sản phẩm, xác nhận theo tài liệu sản phẩm tháng này". Sau đó xem được các snapshot chỉ đọc trong lịch sử, truy ngược lúc đó đã dùng những đề và chuẩn nào.

Khung điều khiển hiện tại có phần xem version lịch sử để xem snapshot; còn muốn khởi động đánh giá và thí nghiệm thì phải quay về dữ liệu mới nhất. Vì vậy, một cách dùng trực tiếp là: chuẩn bị một golden dataset độc lập cho vòng so sánh này, xác nhận xong thì tạo version lưu hồ sơ, và trong suốt kỳ so sánh thì không thêm hay sửa dữ liệu của nó nữa. Pipeline hằng ngày thì tiếp tục ghi vào tập ứng viên, và các đề mới sau khi soát xong sẽ vào bản version kế tiếp.

Khi luật nghiệp vụ thay đổi, hãy sửa các đề và yêu cầu bị ảnh hưởng rồi tạo version mới. Khi tham chiếu tài liệu sản phẩm thì ghi lại version áp dụng; còn với file bên ngoài thì giữ bản sao lấy lại được hay một tham chiếu ổn định. Khi export để bàn giao, hãy xác nhận thứ được export là kết quả lọc hiện tại hay trọn bộ đề, tránh việc bên nhận chỉ lấy được một mẩu mẫu.

Còn một sắp xếp đơn giản nhưng quan trọng: **các đề đã tham gia vào việc viết lại Prompt, sinh Skill hay chắt kinh nghiệm thì phải tách khỏi các đề dùng để kiểm tra hiệu quả một cách độc lập ở cuối.** Hãy để phần chưa tham gia tối ưu làm phần kiểm chứng độc lập. Một khi đã xem đi xem lại những đề đó và dựa vào chúng mà sửa Agent, thì chúng đã tham gia vào việc tối ưu, nên phải chừa ra những đề kiểm chứng mới.

Người phụ trách nghiệp vụ liên tục bổ sung nhu cầu thật và yêu cầu đúng, phía kỹ thuật dùng bộ đề để kiểm chứng phần sửa, còn test và vận hành thì theo dõi kết quả hồi quy. Nhờ vậy, một lần tư vấn, khiếu nại hay thất bại để lại không chỉ là bản ghi gỡ lỗi, mà còn trở thành đề bài và chuẩn dùng thẳng được cho vòng cải tiến tiếp theo.
