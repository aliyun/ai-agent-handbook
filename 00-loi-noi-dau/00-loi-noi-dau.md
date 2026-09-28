# Lời nói đầu

## Trí tuệ phải đi tới chỗ dùng được: từ tạo ra trí tuệ, đến dùng tốt trí tuệ

Một năm trước, ở những dòng mở đầu cuốn *Sách trắng Kiến trúc Ứng dụng AI-Native*, chúng tôi viết: "Cloud và trí tuệ là một thể, carbon và silicon cộng sinh". Khi đó, câu hỏi chúng tôi cố trả lời là: khi model rời phòng thí nghiệm bước vào sản xuất, cloud và trí tuệ nên tồn tại trong mối quan hệ nào. Câu trả lời là: để cloud trở thành hạ tầng của trí tuệ, để tổ chức gốc carbon và năng lực tính toán gốc silicon phối hợp với nhau, giúp trí tuệ có một mái nhà để sinh trưởng liên tục.

Một năm sau, một thay đổi sâu sắc hơn đang diễn ra: **bản thân việc tư duy đang trở thành một loại hàng hoá có giá giảm rất nhanh và nguồn cung không ngừng mở rộng.**

Cách mạng công nghiệp giải phóng "lực" khỏi cơ bắp con người, khiến sức mạnh của sản xuất máy móc trở nên rẻ và dồi dào. Ngày nay, trí tuệ nhân tạo đang giải phóng "nhận thức" khỏi thời gian và kinh nghiệm của từng cá nhân. Hiểu, suy luận, lập kế hoạch, phán đoán và tạo sinh — những năng lực từng khan hiếm và đắt đỏ — bắt đầu được sản xuất ở quy mô lớn dưới dạng những lần gọi model.

Điều đó không có nghĩa giá trị con người bị suy giảm. Khi ngày càng nhiều phần tư duy có thể tính toán được, lặp lại được đã giao cho máy, con người sẽ tập trung hơn vào những thứ máy không thay thế được: đặt ra khát vọng, đưa ra đánh đổi, gánh lấy trách nhiệm, và gây dựng niềm tin. Máy có thể sinh ra vô số đáp án, nhưng *vì sao ta khởi hành, chọn kết quả nào, và sẵn lòng chịu trách nhiệm cho hậu quả nào* — những điều đó vẫn thuộc về con người.

Khi giá của tư duy tiếp tục giảm, vô số nhu cầu từng bị chi phí kìm nén sẽ được giải phóng. Nhưng tư duy rẻ hơn không tự động chuyển hoá thành kết quả có giá trị hơn. AI hôm nay vẫn đang ở giai đoạn sản phẩm sơ khai. Động cơ hơi nước ban đầu chỉ được dùng để bơm nước; thứ thực sự tái định hình xã hội lại là đường sắt, nhà máy và đô thị hiện đại xuất hiện về sau. Tương tự, Chatbot, Copilot và cả Agent hôm nay có lẽ vẫn chỉ là "cái máy bơm nước" của kỷ nguyên trí tuệ — hình thái sản phẩm thực sự định nghĩa kỷ nguyên này vẫn chưa xuất hiện trọn vẹn.

Đó chính là câu hỏi mà "trí tuệ phải đi tới chỗ dùng được" muốn trả lời: **trí tuệ đã được tạo ra rồi, kế tiếp phải tổ chức nó, ràng buộc nó, và chuyển hoá nó thành năng lực sản xuất có thể bàn giao ở quy mô như thế nào.**

Để thực sự đưa trí tuệ vào sử dụng, trước hết phải đi từ "biết trả lời câu hỏi" sang "hoàn thành được nhiệm vụ". Ứng dụng AI-native ở giai đoạn trước phần lớn dừng lại ở Chatbot và Copilot: con người phán đoán, model đưa ra gợi ý. Giai đoạn tiếp theo tiến tới Agent và Managed Agent, nơi trí tuệ gánh vác một mắt xích, một vị trí công việc, thậm chí trọn một quy trình nghiệp vụ; con người chỉ uỷ quyền, thẩm định và đỡ lưới ở những điểm then chốt.

Để thực sự đưa trí tuệ vào sử dụng, còn phải đi từ "demo được việc hoàn thành nhiệm vụ" sang "hoàn thành nhiệm vụ một cách ổn định". Demo kiểm chứng năng lực model; hệ thống production kiểm chứng tính xác định: đối mặt với chu kỳ dài, nhiều bước và môi trường liên tục biến đổi, Agent có giữ được state, gọi tool đúng, và khôi phục sau thất bại hay không; hành vi của nó có quan sát, đánh giá, audit và ràng buộc được hay không; nó có cân bằng được giữa hiệu năng, chi phí và bảo mật hay không. Thách thức thật sự của doanh nghiệp không còn là *có Agent hay không*, mà là **Agent có bước vào được các quy trình lõi xuyên vai trò, xuyên hệ thống, xuyên ranh giới hay không**.

Đi từ "biết đối thoại" tới "biết bàn giao", từ "trí tuệ theo điểm" tới "trí tuệ theo diện", cần hai trục cùng cắm rễ xuống sâu: **đa phương thức toàn diện (full-modality)** và **toàn stack (full-stack)**.

**Đa phương thức toàn diện** là giao diện tất yếu để AI hiểu thế giới và phục vụ con người. Chỉ dựa vào văn bản thì không thể hiểu trọn vẹn một thế giới được cấu thành từ âm thanh, hình ảnh, video, code, dữ liệu có cấu trúc và cả tín hiệu vật lý. Nếu coi mô hình lớn là hệ điều hành thế hệ tiếp theo, thì model nền là kernel, chip là phần cứng, còn đa phương thức chính là giao diện tương tác nối con người với thế giới. Khi model có thể đọc, viết, nhìn, nghe, nói một cách tự nhiên, có thể hiểu môi trường và ý định thật của con người, thì tầng ứng dụng sẽ mỏng đi, còn năng lực trí tuệ sẽ chìm xuống thành thành phần mặc định của hệ thống.

**Toàn stack** là nền tảng kinh tế cho việc cung ứng trí tuệ ở quy mô, đồng thời là tiền đề kỹ thuật để Agent chạy tin cậy. Khi tư duy trở thành hàng hoá, thứ quyết định nó có phổ cập được hay không không chỉ là trần năng lực, mà còn là chi phí sản xuất và sử dụng trí tuệ. Từ model, chip, mạng, lưu trữ, cho tới hệ thống inference, runtime và hệ thống bảo mật — nút thắt ở bất kỳ tầng nào cũng sẽ bị khuếch đại dưới khối lượng token khổng lồ và những task chạy liên tục. Chỉ khi hình thành được một hệ thống toàn stack phối hợp đầu-cuối, Agent mới chạy được, chạy đủ lâu, chi phí đủ thấp, và luôn vận hành trong ranh giới kiểm soát được. Model, chip và AI Cloud nâng đỡ lẫn nhau: model cung cấp trí tuệ, chip liên tục nâng hiệu suất tính toán, còn AI Cloud cung cấp năng lực tính toán, dữ liệu, kết nối, vận hành và quản trị cần thiết để gánh các loại ứng dụng AI.

Trở lại với chính cụm từ "trí tuệ phải đi tới chỗ dùng được". "Trí tuệ" là năng lực nhận thức có thể sản xuất ở quy mô; "dùng được" là kết quả nhiệm vụ có thể bàn giao một cách tin cậy; còn cái chữ "đi tới" ở giữa chính là mệnh đề thực hành mà cuốn sách trắng này muốn bàn.

Phiên bản trước của cuốn sách trắng đã hệ thống hoá các yếu tố then chốt của ứng dụng AI-native theo trục: model, framework, Prompt, RAG, tool, gateway, runtime, observability, đánh giá và bảo mật. Ngày nay, model vẫn là cội nguồn của trí tuệ, nhưng không còn tự nó tạo thành trung tâm của kiến trúc ứng dụng. Trung tâm kỹ thuật thực sự đang dịch chuyển sang **kỹ thuật Harness**, bao gồm Agent Runtime và Sandbox, AI Gateway, tầng kết nối tool và giao thức, tài sản memory và skill, đánh giá – observability – debug, cùng vòng lặp học liên tục và tự tiến hoá.

Những năng lực này cùng nhau tạo nên bước tiến hoá **từ AI Native sang Agent Native**: từ "ứng dụng được AI tăng cường" đi tới "ứng dụng được Agent tổ chức động xoay quanh mục tiêu"; từ tối ưu quanh một lần gọi model đi tới thiết kế quanh việc bàn giao thành công một nhiệm vụ; từ sản xuất nhiều token hơn đi tới tạo ra kết quả xác định hơn với chi phí thấp hơn và tỉ lệ thành công cao hơn.

Nếu "cloud và trí tuệ là một thể" trả lời câu hỏi *trí tuệ sinh trưởng ở đâu*, "carbon và silicon cộng sinh" trả lời câu hỏi *trí tuệ và con người làm việc cùng nhau ra sao*, thì "trí tuệ phải đi tới chỗ dùng được" trả lời một câu hỏi cấp bách hơn: **khi tư duy bắt đầu trở nên dồi dào chưa từng có, chúng ta nên dùng kiến trúc nào để chuyển hoá nó thành giá trị thật, đáng tin cậy và xứng đáng được tin tưởng?**

Thứ cuốn sách trắng này muốn đưa ra, là câu trả lời gần với sự thật kỹ thuật nhất mà chúng tôi nhìn thấy được ở thời điểm hiện tại.

## Vì sao phải nâng cấp cuốn sách trắng này

Tháng 9 năm 2025, chúng tôi phát hành [*Sách trắng Kiến trúc Ứng dụng AI-Native*](https://developer.aliyun.com/ebook/8479), xoay quanh toàn bộ vòng đời DevOps của ứng dụng AI-native: từ thiết kế kiến trúc, lựa chọn công nghệ, thực hành kỹ thuật cho tới vận hành và tối ưu, bóc tách một cách hệ thống các khái niệm và điểm khó, đồng thời thử đề xuất một số hướng giải quyết. Nhưng cùng với tốc độ phát triển rất nhanh của model và công nghệ Agent, chúng tôi nhận thấy mối quan tâm của thị trường đã dịch chuyển từ việc xây Agent thật nhanh sang ba thách thức mới:

*   **Thách thức kỹ thuật:** đi từ trí tuệ mang tính xác suất đến năng lực sản xuất đáng tin cậy, để Agent gánh vác được những nhiệm vụ trọng yếu.

*   **Thách thức quy mô:** ổn định, an toàn, hiệu năng, chi phí — đi từ thử nghiệm đơn lẻ đến hạ tầng trí tuệ, để Agent được triển khai ở quy mô lớn.

*   **Thách thức tổ chức:** đi từ những ốc đảo Agent rời rạc đến một tổ chức thông minh, để Agent bước vào được các quy trình nghiệp vụ cốt lõi.

Cuốn sách trắng của năm ngoái rõ ràng khó lòng đáp ứng những nhu cầu mới này.

Vì vậy, chúng tôi đã tổ chức lại cấu trúc cuốn sách, với mong muốn thông qua nội dung cập nhật hơn, tỉ trọng phần thực hành cao hơn và cách cộng tác mang tính cộng đồng hơn, cung cấp tài liệu tham chiếu cho việc lựa chọn công nghệ và lập đề án nội bộ của doanh nghiệp; đồng thời dự định duy trì cuốn sách này lâu dài, liên tục phản ánh những tư duy tiên phong và thực tiễn triển khai của kiến trúc ứng dụng AI-native.

Chúng tôi rất hoan nghênh mọi bên trong ngành cùng tham gia — dù bạn là nhà nghiên cứu, lập trình viên hay khách hàng doanh nghiệp — mời bạn cùng đóng góp cho cuốn sách trắng, cùng định nghĩa nhận thức chung của ngành, đẩy nhanh việc "đưa trí tuệ tới chỗ dùng được", để AI thực sự trở thành lực lượng cốt lõi thúc đẩy nâng cấp công nghiệp toàn cầu và tiến bộ xã hội.

Nếu cuốn sách trắng này đóng góp được dù chỉ một phần nhỏ cho việc học tập cá nhân và triển khai tại doanh nghiệp, đó đã là niềm vinh hạnh lớn của chúng tôi.

Xin dành tặng dự án này cho tất cả những người đồng hành đang góp sức xây dựng AI.

## Giữa lúc AI mạnh mẽ đến vậy, một cuốn sách trắng còn giá trị không?

Sau khi phát hành [*Sách trắng Kiến trúc Ứng dụng AI-Native*](https://developer.aliyun.com/ebook/8479) năm ngoái, chúng tôi nhận được rất nhiều phản hồi tích cực từ doanh nghiệp: họ cho rằng đây là một tài liệu phổ cập rất hệ thống, hữu ích cho việc thống nhất khái niệm trong nội bộ tổ chức, và là tài liệu tham chiếu quan trọng khi lập đề án dự án AI. Nhưng trong một năm qua, AI phát triển với tốc độ gia tăng; năng lực mạnh đến đâu, phạm vi ứng dụng rộng đến đâu đều đã vượt xa năm ngoái. Nhiều lập trình viên có thể sẽ hỏi: giờ AI chỉ mất vài phút là viết ra được mười cuốn sách trắng chất lượng khá — các anh còn cần viết thêm một cuốn nữa không?

Đúng vậy, đó cũng là câu hỏi chúng tôi tự vấn trước khi tập hợp đông đảo kỹ sư thực chiến lại. Chi phí sản xuất chữ nghĩa tuy đã giảm, nhưng điều đó không làm việc viết mất đi giá trị. Thứ khan hiếm không biến mất, nó chỉ dịch chuyển.

**Chẳng hạn, một hệ khái niệm và ngôn ngữ tự nhất quán.** Những từ như Harness, Runtime, Agent, Workflow — với những người khác nhau, ở góc nhìn khác nhau, có thể đang nói về những thứ không hoàn toàn giống nhau. AI sẽ khuếch đại sự hỗn loạn đó. Chúng tôi mong thông qua cuốn sách trắng này thiết lập được một bộ khái niệm và khung tự sự tự nhất quán, để các team khác nhau có thể bàn luận và ra quyết định trong cùng một context. Việc này tuy không có gì cao siêu về kỹ thuật, nhưng đòi hỏi một đội có kinh nghiệm thực chiến đứng ra điều phối các kỹ sư tuyến đầu của nhiều lĩnh vực, chủ động rà soát và đưa ra đánh đổi.

**Chẳng hạn, sự phán đoán.** Model rất giỏi tổ chức lại thông tin đã tồn tại thành cách diễn đạt trôi chảy, nhưng thứ nó đưa ra thường là một giá trị trung bình trông có vẻ hợp lý. Ví dụ, nên dùng cấu trúc tự sự nào để kể về Agent Handbook thì mới chạm được vào người đọc — đó là điều tác giả phải tự phán đoán.

**Chẳng hạn, kinh nghiệm.** Ngữ liệu của model về bản chất là sự trộn lại của những văn bản đã công khai. Còn một hệ thống cụ thể đã thực sự xảy ra chuyện gì trong môi trường production, chỗ nào lặp đi lặp lại vấn đề — những kinh nghiệm bậc nhất đến từ kỹ sư tuyến đầu ấy đã nội hoá thành tay nghề của chính họ, và AI rất khó thay thế; đặc biệt với các hệ thống phần mềm có nhiều phụ thuộc chéo, được dùng trong bối cảnh nghiêm túc, cần bảo trì lâu dài và sử dụng ở quy mô lớn.

**Chẳng hạn, bài học.** Nội dung càng dồi dào thì *cái gì không nên làm* lại càng khan hiếm hơn *cái gì có thể làm*. Những kiểu thất bại có thật được con người đúc kết ra từ môi trường production thật, chứ không phải do model ngôn ngữ viết tiếp theo mạch context. Chúng tôi mong viết ra những bài học ấy một cách tường minh, dù chúng trông không hào nhoáng, để giúp người đọc tiết kiệm chi phí thử-sai.

Agent thay đổi quá nhanh; hệ thống, phán đoán, kinh nghiệm và bài học trong cuốn sách này có lẽ chẳng bao lâu nữa sẽ bị hiệu chỉnh, thậm chí bị lật ngược. Chúng tôi mong cuốn sách trắng không phải một tài liệu viết xong rồi đóng băng, mà giữ được sức sống bền bỉ — và đó cũng chính là lý do ban đầu khiến chúng tôi viết nó theo cách mã nguồn mở.

## Cuốn sách trắng này nói về những gì

Cuốn sách triển khai theo toàn bộ vòng đời của ứng dụng Agent, lần lượt là: **kiến trúc – xây dựng – vận hành – quản trị – tối ưu.**

**Phần Kiến trúc (chương 1–2).** Với Agent, ta không nên bắt tay vào xây ngay, mà phải xuất phát từ bối cảnh nghiệp vụ, mục tiêu và nhu cầu để làm tốt khâu thiết kế và lựa chọn kiến trúc. Hướng đi đúng thì việc xây dựng, vận hành, quản trị, tối ưu về sau mới đạt hiệu quả gấp bội. Phần này điểm lại quá trình phát triển của ứng dụng AI, các hình thái ứng dụng AI và paradigm xây dựng phổ biến hiện nay, đồng thời đưa ra một bộ hướng dẫn tham chiếu để lựa chọn Agentic Application — nhằm thống nhất khung khái niệm và cách phân chia trách nhiệm cho các chương sau, xây dựng một khung nhận thức chung.

**Phần Xây dựng (chương 3–6)** xoay quanh Harness, lần lượt nói về paradigm (các cách xây Harness phổ biến và ranh giới trách nhiệm), task (điều phối, tiến trình dài và luân chuyển cộng tác), thông tin (context, state và tài sản năng lực tái sử dụng), hành động (thực thi có kiểm soát, phản hồi kiểm chứng và chuẩn bị bàn giao) — tái hiện trọn vẹn quá trình xây dựng một Agent.

**Phần Vận hành (chương 7–12)** đi từ môi trường thực thi, lưu trữ state và gateway traffic của một Agent đơn lẻ, tới task bất đồng bộ, cộng tác – orchestration và giao tiếp phân tán của nhiều Agent; giải quyết các vấn đề kỹ thuật gặp phải trong quá trình chạy: độ ổn định, hiệu năng, an toàn – tuân thủ, chi phí.

**Phần Quản trị (chương 13–16).** Agent thực sự đã làm những gì — chúng ta có nhìn thấy không? Nó có vượt qua ranh giới uỷ quyền, hay bị nội dung bên ngoài thao túng không? Những Prompt, Skill, MCP, Agent mà nó phụ thuộc đang nằm rải rác khắp nơi — có được quản lý thống nhất không? Hành vi của nó trước khi lên production có kiểm chứng trước được một lượt không? Phần Quản trị làm cho việc vận hành Agent trở nên quan sát được, hành vi có ranh giới, tài sản phụ thuộc quản lý được, hành vi trước khi lên production kiểm chứng được — để một hệ thống chạy tự chủ trở nên đáng tin cậy.

**Phần Tối ưu (chương 17–24)** xuất phát từ những sự thật đáng tin đã tích luỹ được ở khâu quản trị, đi theo hai trục model và Agent, nói rõ về dữ liệu trajectory, xử lý dữ liệu runtime, golden dataset, tối ưu badcase, tự tiến hoá có kiểm soát và tối ưu edge runtime — biến bằng chứng sinh ra từ vận hành và quản trị thành năng lực được nâng cao thật sự.

**Phần Thực tiễn trong ngành (chương 25–29)** bao phủ các lĩnh vực hiệu suất kỹ thuật, design engineering, khách hàng – bán hàng và vận hành, vận hành – bảo mật và IT doanh nghiệp; đồng thời chúng tôi cũng đưa vào những tác phẩm xuất sắc từ Giải thưởng Mã nguồn mở Trí tuệ Nhân tạo Thế giới — vừa có thực tiễn doanh nghiệp, vừa có khám phá tiên phong từ cộng đồng lập trình viên.

**Phần Tổng kết và triển vọng (chương 30)** nhìn từ Agentic Application hướng tới Agentic OS, bàn xem con đường này có thể dẫn tới đâu.
