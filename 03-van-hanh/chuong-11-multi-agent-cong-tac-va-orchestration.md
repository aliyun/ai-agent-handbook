# Chương 11 — Multi-Agent: cộng tác và orchestration

Khi Agent đi từ việc kiểm chứng năng lực đơn điểm sang nghiệp vụ thật, các vấn đề mà hệ thống đối mặt cũng thay đổi. Rất nhiều task đã không còn kết thúc chỉ bằng một lần gọi model, hay bằng việc một Agent hoàn tất một lượt lập kế hoạch và chạy tool. Chúng thường kéo dài hơn, liên quan tới nhiều lĩnh vực chuyên môn, cần truy cập nhiều hệ thống và dữ liệu khác nhau, và còn xen kẽ việc con người xác nhận, thẩm định kết quả và xử lý ngoại lệ. Lúc này, cái khó thật sự không còn chỉ là làm sao cho một Agent mạnh hơn, mà là **làm sao để nhiều Agent cùng với con người cộng tác có trật tự xoay quanh một mục tiêu chung.**

**Đặt nhiều Agent cạnh nhau không tự nhiên tạo thành một đội.** Nếu thiếu phân công rõ ràng, cách cộng tác và quản lý state, thì càng nhiều bên tham gia lại càng dễ xảy ra thực thi trùng, thông tin không nhất quán, task bị bỏ sót và trách nhiệm không rõ. Thứ mà orchestration multi-agent phải giải quyết chính là **tổ chức những năng lực thực thi vốn độc lập lại với nhau**, để chúng vừa phát huy được thế mạnh chuyên môn riêng, vừa hình thành một quá trình thực thi trọn vẹn dưới một mục tiêu chung và các ràng buộc thống nhất.

Chương này triển khai theo trình tự: "tiếp nhận dị chủng — tổ chức team — cộng tác task — thông tin dùng chung — giao tiếp — quản trị". Phần Xây dựng đã nói một Harness đơn lẻ lập kế hoạch, uỷ nhiệm và dùng context ra sao; ở đây trọng tâm là **việc bàn giao trách nhiệm, tính nhất quán của state và việc chấp nhận thành quả khi nhiều thành viên độc lập cùng chạy**; còn phần lập lịch và gửi message ở tầng dưới thì dùng theo cơ chế của chương task bất đồng bộ và chương giao tiếp phân tán.

## 11.1 Từ một Agent tới một Agent Team: giá trị và ranh giới của tầng orchestration

Các năng lực xây dựng và vận hành giúp một Agent đơn lẻ làm việc liên tục trong một ranh giới rõ ràng. Khi mục tiêu liên quan tới nhiều năng lực chuyên môn, nhiều quyền hạn độc lập hoặc có thể bàn giao song song, thì việc orchestration team phải tổ chức những năng lực thực thi đó vào cùng một task, và giữ cho trách nhiệm, phụ thuộc cùng kết quả **truy vết được.**

### 11.1.1 Phạm vi áp dụng của một Agent đơn lẻ và giá trị của team

Chuỗi thực thi của một Agent đơn lẻ tương đối đơn giản. Nó có một context khá tập trung, có thể suy nghĩ và hành động liên tục quanh một mục tiêu. Với các task có phạm vi rõ ràng, context gắn kết chặt chẽ, cách này thường trực tiếp hơn và dễ kiểm soát hơn. Nhưng trong bối cảnh doanh nghiệp thật, một công việc có thể đồng thời liên quan tới phân tích yêu cầu, thiết kế phương án, hiện thực code, kiểm thử, kiểm tra bảo mật và phê duyệt phát hành. Nếu giao hết cho một Agent, nó phải liên tục chuyển qua lại giữa các vai chuyên môn khác nhau, đồng thời duy trì ngày càng nhiều context, tool và quyền hạn. Những việc lẽ ra chạy song song được cũng bị nén vào một vòng lặp thực thi, và **bất kỳ bước nào bị chặn cũng có thể khiến cả task dừng lại.**

Trong tình huống đó, mục đích của việc đưa vào nhiều Agent không đơn giản là theo đuổi nhiều bên thực thi hơn, mà là **để các năng lực khác nhau được tổ hợp theo cách phù hợp hơn.** Ví dụ, trong một lần thay đổi phần mềm phức tạp, có thể để một Agent hiểu mục tiêu tổng thể và rà soát phạm vi công việc; một Agent quen code lo phần hiện thực; các Agent kiểm thử và bảo mật kiểm chứng song song từ những góc khác nhau; rồi một người phụ trách phán định xem đã đủ điều kiện phát hành hay chưa. Mỗi bên tập trung vào phần mình giỏi, và **chỉ nhận được thông tin, tool cùng phạm vi thao tác cần thiết cho công việc hiện tại.** So với việc để một Agent gánh tất cả, cách này dễ hình thành phân công chuyên môn hơn, đồng thời tạo không gian cho thực thi song song, kiểm soát quyền hạn và rà soát kết quả.

### 11.1.2 Thiết lập cộng tác bền bỉ xoay quanh một mục tiêu chung

Tuy vậy, **việc nhiều Agent gọi được nhau hay trao đổi message với nhau vẫn chưa nói lên rằng chúng đã tạo thành một đội.** Một đội cần có mục tiêu chung, và cũng cần biết mỗi việc do ai đẩy tiến, phụ thuộc vào những kết quả trước nào, xong rồi thì giao cho ai, và thế nào mới là thực sự kết thúc. Giữa các bên tham gia không chỉ có việc truyền message, mà còn phải hình thành một quan hệ cộng tác ổn định xoay quanh task, state và sản phẩm. **Agent Team** nói ở đây có thể hiểu là một nhóm Agent cùng con người được tổ chức quanh một mục tiêu chung: mỗi thành viên có định danh và ranh giới năng lực tương đối ổn định, bên trong team có phân công và quan hệ cộng tác rõ ràng, quá trình làm việc theo dõi được liên tục, và kết quả cuối cùng cũng kiểm chứng được.

Tầng orchestration cung cấp một trục xuyên suốt cho kiểu cộng tác đó. Nó chuyển hoá dần một mục tiêu tương đối rộng thành những task thực thi được và nghiệm thu được, thiết lập quan hệ trước-sau cùng phụ thuộc giữa các task, và liên tục tụ họp trạng thái cùng sản phẩm của các thành viên trong quá trình đẩy tiến. Khi một phần công việc hoàn thành độc lập được, tầng orchestration có thể cho chúng chạy song song; còn khi một khâu phụ thuộc kết quả trước đó thì sẽ vào giai đoạn kế tiếp sau khi điều kiện thoả. Cuối cùng, output của các thành viên phải được tụ họp trở lại về mục tiêu chung, tạo thành một kết quả tổng thể bàn giao được, kiểm tra được, nghiệm thu được.

**Việc ghi lại quá trình cộng tác một cách tường minh đặc biệt quan trọng với những task kéo dài.** Nếu đội chỉ dựa vào lịch sử hội thoại để duy trì tiến độ, thì khi bên tham gia thay đổi, môi trường chạy khởi động lại, hay task gián đoạn một thời gian, rất nhiều thông tin ngầm sẽ khó khôi phục. Tích tụ mục tiêu, task, quan hệ phụ thuộc, trạng thái thực thi và sản phẩm công việc sẽ giúp thành viên mới nhanh chóng hiểu tiến độ hiện tại, và cũng giúp đẩy tiếp sau khi thất bại. Khi một Agent không hoàn thành được task, im lặng quá lâu hoặc cho ra sản phẩm không đạt yêu cầu, hệ thống có thể chọn chạy lại, điều chỉnh phân công, nhờ thành viên khác hỗ trợ, hoặc giao vấn đề cho con người phán định thêm. Nhờ vậy, **tính liên tục của đội không còn phụ thuộc vào việc một Agent nào đó luôn online.**

### 11.1.3 Ranh giới trách nhiệm giữa tầng orchestration và hệ thống thực thi

Orchestration multi-agent **không tồn tại tách rời khỏi các năng lực sẵn có.** Trong một hệ Agent hoàn chỉnh, Harness tổ chức model, tool, context và vòng lặp điều khiển thành quá trình thực thi của Agent, đồng thời hoàn tất các kiểm tra cục bộ cần thiết; Runtime giúp những quá trình đó khởi động ổn định, chạy liên tục và khôi phục sau bất thường; còn môi trường chạy cụ thể thì cung cấp tính toán, mạng, file, ánh xạ credential và điều kiện cô lập; Gateway cung cấp lối vào kết nối thống nhất cho model, tool và Agent; A2A, MCP cùng hệ message thì hỗ trợ tiếp việc khám phá năng lực, trao đổi thông tin và gọi cộng tác giữa các bên tham gia. Tầng orchestration xâu những năng lực đó vào công việc của đội, khiến mục tiêu, thành viên, task, tiến độ và kết quả hình thành một mối liên hệ ổn định. Còn việc bàn giao cuối cùng có đạt mục tiêu nghiệp vụ hay không thì **vẫn phải do người phát ra task hoặc bên nghiệm thu được uỷ quyền xác nhận theo tiêu chuẩn đã thoả thuận.**

Tầng orchestration cũng **không cần can dự vào mọi chi tiết thực thi của từng Agent.** Đội có thể thống nhất mục tiêu, phân công, ràng buộc và tiêu chí nghiệm thu, nhưng mỗi thành viên vẫn được chọn cách thực thi phù hợp trong phạm vi năng lực của mình. Nếu mọi thông tin đều phải tụ về một Agent chủ quản rồi nó quyết định từng bước, thì hệ multi-agent rất dễ quay lại mô hình ra quyết định đơn điểm, và **Agent chủ quản sẽ trở thành nút thắt mới về context và thực thi.** Cách hợp lý hơn là giữ cân bằng giữa việc phối hợp ở cấp đội và quyền tự chủ của thành viên: công việc thường nhật do thành viên tự đẩy tiến; chỉ khi task bị chặn, kết quả xung đột, thiếu tài nguyên hay chạm vào thao tác rủi ro cao thì mới cần phối hợp thêm hoặc đưa con người vào phán định.

![image](../assets/imgs/chapter-11/image-001.png)

### 11.1.4 Lợi ích cộng tác và chi phí phối hợp

Cộng tác multi-agent cũng mang tới chi phí mới. Task phải được chẻ hợp lý, các bên phải truyền thông tin qua lại nhiều lần, state dùng chung phải giữ nhất quán, và nhiều chủ thể thực thi hơn cũng sinh ra thêm lời gọi model cùng chi phí vận hành. Nếu bản thân task có mục tiêu đơn nhất, context rất tập trung, hoặc các bước thực thi buộc phải tuần tự nghiêm ngặt, thì **dùng một Agent đơn lẻ thường đơn giản và hiệu quả hơn.** Chỉ khi lợi ích từ phân công chuyên môn, thực thi song song, cô lập sự cố và quản trị quá trình **bù được chi phí giao tiếp và phối hợp**, thì Agent Team mới thực sự có giá trị.

Thứ mà orchestration team cần kiểm chứng là: **phân công thành viên và việc bàn giao chung có thành lập hay không.** Các mục sau lần lượt nói về việc tiếp nhận, tổ chức, cộng tác, thông tin dùng chung, giao tiếp và quản trị hỗ trợ mục tiêu đó ra sao.

## 11.2 Tiếp nhận các Agent dị chủng: framework khác nhau, Coding Agent và trợ lý workspace cá nhân

Một Agent nghiệp vụ đã tra ra các dependency cần nâng cấp trong dịch vụ; tiếp theo nó muốn nhờ Coding Agent trên máy của lập trình viên sửa code và chạy test. Hai bên dùng phần mềm và môi trường chạy khác nhau, nên cần chuyển yêu cầu sửa cho bên kia và nhận lại patch cùng báo cáo test.

Các cộng tác kiểu này sẽ liên quan tới Agent phát triển bằng framework, Coding Agent đóng gói sản phẩm, dịch vụ Agent managed và trợ lý trong workspace cá nhân. **Chúng không phải các loại loại trừ nhau;** mục này trình bày cách tiếp nhận theo *interface kiểm soát được* và *vị trí chạy*, còn phân loại lối vào xây dựng thì theo phần Xây dựng.

Coding Agent có thể triển khai trên cloud; Agent phát triển bằng framework cũng có thể chạy trên máy cá nhân. **Cách xây dựng quyết định việc mở rộng logic thực thi ra sao; còn vị trí chạy thì ảnh hưởng tới truy cập tài nguyên, thời gian online và trách nhiệm bảo trì.** Khi chọn cách tiếp nhận, phải cân nhắc cả hai mặt.

### 11.2.1 Giữ nguyên cách thực thi sẵn có

Một Agent vốn đã hoàn thành được task nghiệp vụ thường có Harness riêng lo việc tổ chức context, gọi tool và duy trì trạng thái thực thi. Khi cho nó gia nhập team, có thể tiếp tục dùng bộ logic thực thi đó và **bổ sung ở bên ngoài phần interface cùng năng lực cần cho cộng tác.**

Trước hết có thể chọn cách tiếp nhận theo phạm vi mình kiểm soát được:

| Điều kiện sẵn có | Cách tiếp nhận | Cần chuẩn bị gì chính |
| --- | --- | --- |
| Sửa được code ứng dụng của Agent | Thêm SDK cộng tác hoặc interface task vào framework hiện có | Nhận task, phản hồi trạng thái và nộp thành quả |
| Cài được plugin hoặc kiểm soát được cách khởi động | Dùng plugin và chương trình adapter | Cấu hình môi trường làm việc, liên kết phiên và trạng thái thực thi |
| Chỉ gọi được API dịch vụ từ xa | Thêm chương trình adapter ở bên ngoài | Ghi lại mã task phía xa, lấy trạng thái và kết quả |

Chương trình adapter ở đây lo việc trung chuyển request và kết quả giữa team với Agent; nó có thể chạy độc lập, cũng có thể tích hợp vào dịch vụ sẵn có. Sau khi chọn, còn phải kiểm tra xem Agent có thể phản hồi gì trong quá trình thực thi và chấp nhận những kiểm soát nào. Ví dụ, **việc trả về text theo từng bước không có nghĩa nó hỗ trợ truy vấn task hay gián đoạn – khôi phục.** Đội phải sắp xếp công việc theo đúng năng lực thực tế đó.

Với các Agent chỉ gọi được qua API bên ngoài, chương trình adapter ghi lại mã task phía xa ứng với task của team, và lấy trạng thái cùng thành quả từ phía xa. Việc quản lý vận hành ở phía xa vẫn do nhà cung cấp dịch vụ chịu. Nếu interface chỉ trả về kết quả cuối thì **không thể cung cấp tiến độ thời gian thực**; các thao tác như huỷ và khôi phục cũng phải theo đúng năng lực mà phía xa thực sự hỗ trợ.

### 11.2.2 Agent phát triển bằng framework gia nhập cộng tác ra sao

Với Agent phát triển bằng framework, có thể tiếp nhận từ lối vào dịch vụ sẵn có. Ứng dụng nhận input task, gọi Agent gốc, rồi trả kết quả thực thi về cho team. Model, tool và quy trình nghiệp vụ có thể giữ nguyên, **không phải di trú toàn bộ chỉ để gia nhập team.**

Thành viên gánh các task cộng tác liên tục thì cần đọc được phần việc được giao cho mình, báo cáo được điểm chặn và nộp được thành quả. Ứng dụng có thể dùng SDK để ghép những năng lực đó vào Harness gốc: chỉ dẫn nói rõ trách nhiệm, tool cung cấp lối vào thao tác task, còn những bước thao tác dài hơn thì đặt vào Skill. Ứng dụng cũng có thể hoàn tất các bước này bằng code có tính xác định hay bằng workflow, **không đòi hỏi giao hết cho model gọi tool.**

Dù dùng cách nào, cũng phải thoả thuận **ai duy trì trạng thái task, thao tác nào do thành viên phát ra, và kết quả nộp ra sao.** Khi liên quan tới việc ghi task, dịch vụ task kiểm tra quyền thao tác dựa trên định danh bên gọi, quyền sở hữu task và trạng thái hiện tại.

Sau khi ứng dụng kiểm chứng nguồn request, nó truyền thông tin về team sở hữu và task cho Agent cùng các tool liên quan. Ngay cả khi request đã bắt đầu trả nội dung về, các thao tác tool sau đó **vẫn phải quy về đúng task**, tránh ghi tiến độ hay thành quả vào task khác.

Ứng dụng cũng có thể tiếp nhận dần. Một Agent chỉ gánh truy vấn ngắn có thể chỉ cần interface request và kết quả ổn định; còn một bên thực thi cần nhận subtask, báo tiến độ và nộp file thì phải bù đủ năng lực cộng tác tương ứng. **Phạm vi tiếp nhận nên khớp với trách nhiệm thực tế**, không cần đòi mọi thành viên ngay từ đầu phải có năng lực quản trị team đầy đủ.

Ví dụ, một nền tảng có SDK cộng tác có thể cung cấp cho thành viên thực thi các interface đọc task, phản hồi tiến độ và nộp thành quả. Sau khi ứng dụng nối các interface đó vào framework sẵn có, **Harness gốc vẫn thực thi logic nghiệp vụ**; phạm vi tiếp nhận cụ thể thì theo năng lực mà version đang dùng thực sự hỗ trợ.

### 11.2.3 Thích ứng vận hành cho Coding Agent

Coding Agent vốn đã có các năng lực thao tác file, chạy lệnh và kiểm chứng code. Khi tiếp nhận loại Agent này, thường có thể thêm năng lực cộng tác qua plugin hoặc adapter, đồng thời **giữ nguyên luồng thực thi native của nó.**

Plugin phù hợp để lắp ráp chỉ dẫn cộng tác, Skill và tool; còn trong cách tiếp nhận tự khởi process, adapter lo việc khởi động, nạp cấu hình, nhận request và kiểm tra trạng thái chạy. Coding Agent vẫn dùng vòng lặp task riêng của nó để hoàn thành công việc.

Adapter còn phải ghi lại tương tác trong team ứng với phiên nào của Coding Agent, để các message sau nối tiếp được context sẵn có, và tách riêng các phần việc không liên quan theo yêu cầu cô lập. **Task và phiên được định danh riêng, liên kết theo nhu cầu, không đòi hỏi tương ứng một-một;** cùng một task có thể đẩy tiếp xuyên nhiều phiên, và trong một phiên cũng có thể lần lượt xử lý các task khác nhau. Cách tổ chức state cụ thể xem các chương về context, trạng thái cộng tác và không gian làm việc.

Tiến độ, việc chờ input và lý do kết thúc mà interface native trả về **phải được chuyển thành trạng thái mà team hiểu được.** Khi thành viên hỗ trợ huỷ, adapter chuyển request tới Agent đang thực thi task và trả về kết quả xử lý thực tế. **Sau khi đóng kết nối output, lệnh chạy nền vẫn có thể tiếp tục chạy**, nên phải xác nhận việc huỷ đã có hiệu lực hay chưa.

Sub-agent bên trong Coding Agent vẫn do Harness hiện tại quản lý, **không tự động trở thành thành viên của team vì việc tiếp nhận.** Chỉ khi cần phân công hay quản lý độc lập thì mới thiết lập định danh thành viên và quan hệ cộng tác tương ứng cho chúng.

### 11.2.4 Ranh giới tiếp nhận của workspace cá nhân

Có những task phù hợp để thực thi ngay trong workspace cá nhân. Ví dụ, một dự án đã chuẩn bị sẵn dependency và môi trường test trên máy lập trình viên, hoặc cần dùng những tool chỉ truy cập được trong một mạng cụ thể. Khi đó có thể tiếp nhận một instance Agent cục bộ chỉ định vào team, để adapter cục bộ nhận việc và phản hồi kết quả. **Thứ được tiếp nhận là instance đang chạy đó; còn có nối tiếp được phiên mà người dùng đã mở trước đó hay không thì tuỳ interface mà Agent cung cấp.**

Trước khi tiếp nhận phải xác định thư mục làm việc và tài nguyên khả dụng. Skill đi kèm dự án, tool do team phân bổ và cấu hình cá nhân của người dùng thường có phạm vi sử dụng khác nhau. Khi task của team cần dùng tool cá nhân, **người dùng phải chọn một cách tường minh**, tránh việc tự động kế thừa toàn bộ cấu hình trong thư mục cá nhân. Việc người dùng cho phép một Agent xử lý code dự án cũng **không có nghĩa** các thành viên khác trong team được nhân đó mà dùng mọi quyền tài khoản của người dùng này.

Thư mục làm việc dùng để xác định vị trí thao tác mặc định; còn giới hạn truy cập thực tế thì vẫn phụ thuộc vào môi trường thực thi. **Chỉ đặt một tham số thư mục thường không đủ để ngăn chương trình truy cập file khác.** Những task cần giới hạn truy cập file, lệnh hay mạng thì phải được ràng buộc bởi cơ chế kiểm soát quyền hoặc sandbox tương ứng; chi tiết xem các chương về môi trường vận hành và bảo mật.

Tính khả dụng của thành viên cục bộ cũng khác với dịch vụ thường trú trên cloud. Máy ngủ, mạng đứt hay phiên đăng nhập cục bộ hết hiệu lực đều ảnh hưởng tới việc nhận task và phản hồi trạng thái. Adapter cục bộ nên báo cáo trạng thái kết nối và thực thi quan sát được, và **nói thật khi không xác nhận được.** Những việc cần online liên tục thì nên chọn thành viên có điều kiện vận hành tương ứng gánh.

**Việc bàn giao file đặc biệt dễ bị bỏ sót.** Sau khi Agent cục bộ sinh báo cáo, nếu chỉ trả về một đường dẫn tuyệt đối thì các thành viên trên máy khác thường không đọc được. File cần chia sẻ phải nộp qua kênh bàn giao đã thoả thuận, và kèm trong kết quả task một tham chiếu mà bên nhận truy cập được. Upload file nào, giữ nội dung nào ở cục bộ thì quyết định theo phạm vi task, **chứ không mặc định đồng bộ cả thư mục làm việc.**

**Thực thi cục bộ cũng không có nghĩa dữ liệu luôn ở lại trên máy.** Khi gọi model, tool từ xa hay bàn giao file, đều có thể truyền dữ liệu ra ngoài. Trước khi tiếp nhận phải đối chiếu các dịch vụ thực sự dùng và nội dung được gửi đi, rồi chọn cấu hình theo yêu cầu dữ liệu.

### 11.2.5 Kiểm chứng việc tiếp nhận bằng một lần bàn giao thực tế

Sau khi tiếp nhận xong, có thể dùng một task phạm vi nhỏ để kiểm tra xem thành viên có tham gia cộng tác được không. Việc kiểm chứng vừa phải phủ phần request tới nơi và thực thi thực tế, vừa phải phủ quá trình bên nhận lấy được thành quả.

| Nội dung kiểm tra | Kết quả quan sát được |
| --- | --- |
| Task tới nơi | Thành viên chỉ định nhận đúng input, dùng đúng định danh và môi trường làm việc như dự kiến |
| Tương tác liên tục | Các message sau vào đúng phiên tương ứng, không lẫn vào task không liên quan |
| Phản hồi trạng thái | Phân biệt được đang chạy, đang chờ, thất bại và kết thúc, cùng lý do cần thiết |
| Bàn giao thành quả | Bên nhận đọc được file hay kết quả có cấu trúc, và đối chiếu được task sở hữu nó |
| Kiểm soát và khôi phục | Với các năng lực huỷ, retry và khôi phục đã khai báo hỗ trợ, kiểm chứng riêng hành vi thực tế |

Quay lại bối cảnh vá dependency ở đầu mục, có thể kiểm tra xem yêu cầu sửa có tới đúng Coding Agent chỉ định không, thư mục làm việc có đúng không, trạng thái thực thi có trả về được không, và Agent nghiệp vụ có lấy được patch cùng báo cáo của đúng task đó không. Nếu cục bộ thiếu dependency, thông tin điểm chặn cũng phải truyền được về team.

**Việc kiểm chứng này kiểm tra chuỗi tiếp nhận cộng tác.** Còn patch có vá được lỗ hổng không, kết quả có đạt yêu cầu bàn giao không thì vẫn xử lý theo thoả thuận nghiệm thu của chính task đó; quá trình cụ thể sẽ triển khai ở phần orchestration task.

Sau khi tiếp nhận, team đã biết được năng lực, điều kiện vận hành và cách bàn giao của từng thành viên. Trên nền đó, còn phải xác định thành viên nào phối hợp, thành viên nào thực thi, và chúng phân công với nhau ra sao — mục tiếp theo bàn về những quan hệ tổ chức này.

## 11.3 Topology tổ chức team: chủ quản – thực thi, cộng tác ngang hàng và orchestration phân tầng

Khi các Agent với năng lực khác nhau đã gia nhập cùng một hệ cộng tác, còn phải làm rõ quan hệ tổ chức giữa chúng: thành viên nào lo mục tiêu tổng thể, thành viên nào gánh công việc chuyên môn, quyết định nào tự đưa ra được, và khi có bất đồng thì ai điều phối. Cách tổ chức không chỉ ảnh hưởng tới việc phân việc, mà còn ảnh hưởng tới truyền thông tin, hiệu suất ra quyết định và khả năng song song của đội. **Chủ quản – thực thi, cộng tác ngang hàng và orchestration phân tầng là ba cách sắp xếp khác nhau về quan hệ quyết định, uỷ nhiệm và báo cáo. Chúng không phải các giai đoạn tiến hoá từ thấp lên cao, mà nên chọn theo đặc điểm công việc thực tế.**

![image](../assets/imgs/chapter-11/image-002.png)

### 11.3.1 Team và thành viên: quan hệ tổ chức và phân công vai trò

Có thể hiểu quan hệ tổ chức của Agent ở hai tầng: **Team** và **thành viên**. Team biểu đạt một tổ chức cộng tác tương đối ổn định; còn Agent thì gia nhập với tư cách thành viên và gánh vai trò tương ứng.

Team thường có một phạm vi trách nhiệm chung, có thể liên tục nhận các task khác nhau, **chứ không giải tán sau khi một lần chạy Agent kết thúc.** Thành viên của team có thể thay đổi, nhưng quan hệ tổ chức của nó không cần thiết lập lại ở mỗi lần chạy.

**Năng lực chuyên môn** nói Agent giỏi cái gì — ví dụ hiện thực code, kiểm thử hay phân tích dữ liệu; **vai trò tổ chức** nói nó chịu trách nhiệm gì — ví dụ điều phối tổng thể, thực thi cục bộ hay rà soát kết quả.

Một Agent mạnh về chuyên môn **không nhất thiết** gánh vai chủ quản; và chủ quản cũng không cần giỏi nghiệp vụ cụ thể hơn mọi thành viên. Vai trò tồn tại trong một quan hệ team cụ thể; cùng một Agent có thể giữ vai trò khác nhau ở các team khác nhau.

Quan hệ thành viên của team và trách nhiệm trong từng task phải được **ghi riêng**: quan hệ thành viên nói Agent thuộc tổ chức nào; quan hệ tham gia task nói nó cần tham gia hay cần biết về việc nào; trách nhiệm thực thi nói rõ ai lo hoàn thành và bàn giao; còn trách nhiệm thẩm định thì nói rõ ai có quyền kiểm tra và chấp nhận kết quả.

**Gia nhập team không có nghĩa phải tham gia mọi task; xem được task cũng không có nghĩa chịu trách nhiệm thực thi hay thẩm định.** Định danh quản trị tổ chức cũng không tự động thay được trách nhiệm quyết định nghiệp vụ hay nghiệm thu cuối cùng.

Vai trò không thể chỉ dừng ở cái tên, mà còn phải nói rõ thành viên tự quyết được gì, phải bàn giao gì, và khi nào thì tìm sự phối hợp. **Nếu chủ quản liên tục làm thay việc giải vấn đề chuyên môn của bên thực thi, còn bên thực thi lại chờ chủ quản quyết mọi bước, thì đội khó hình thành được sự phân công thật sự.**

Con người cũng có thể gánh các vai như làm rõ yêu cầu, phán đoán chuyên môn hay ra quyết định then chốt, **chứ không chỉ là người đỡ lưới tạm thời khi Agent không làm tiếp được.**

### 11.3.2 Chủ quản – thực thi: phối hợp tập trung, thực thi phân tán

Thành viên chủ quản lo mục tiêu tổng thể, tổ chức phân công, xử lý phụ thuộc xuyên task, và tổng hợp kết quả bàn giao. Thành viên thực thi tự chủ hoàn thành phần việc cục bộ dưới mục tiêu và ràng buộc rõ ràng.

Mô hình này dễ thiết lập quy thuộc trách nhiệm rõ ràng, nhưng cũng phải tránh việc **mọi quyết định cục bộ đều chờ chủ quản xác nhận**, tạo thành nút thắt quyết định; và cũng phải tránh việc chủ quản giải sẵn vấn đề nghiệp vụ trước khi phân công, rồi lại kiểm chứng lặp lại sau khi bàn giao, gây thực thi trùng.

Khi mục tiêu, sản phẩm bàn giao, người phụ trách và phụ thuộc đã rõ thì **nên cho bên thực thi triển khai công việc.** Chủ quản tập trung vào phối hợp tổng thể, **không nên quyết định từng hành động thực thi.**

### 11.3.3 Cộng tác ngang hàng: thương lượng trực tiếp, quy tắc ra quyết định chung rõ ràng

Các thành viên trao đổi thông tin, thương lượng phương án và rà soát chéo trực tiếp theo trách nhiệm chuyên môn, **không đòi hỏi mọi việc phải đi qua một chủ quản cố định.**

Cách này rút ngắn được đường giao tiếp, nhưng **bắt buộc phải thoả thuận trước** cách giải quyết bất đồng, những việc nào cần quyết định chung, ai lo tích hợp sản phẩm chung, và ai chịu trách nhiệm bàn giao cuối cùng.

**Ngang hàng không có nghĩa trách nhiệm mờ nhạt, và cũng không có nghĩa mọi thành viên có quyền quyết định như nhau đối với mọi việc.**

### 11.3.4 Orchestration phân tầng: tổ chức việc bàn giao theo nhóm chuyên môn

Người phụ trách tổng thể điều phối nhiều nhóm chuyên môn, và bên trong mỗi nhóm lại sắp xếp phần thực thi cụ thể. Cách này giúp giải quyết vấn đề cục bộ trong một phạm vi nhỏ hơn, giảm số chi tiết mà người phụ trách tổng thể phải xử lý.

Phân tầng cũng đem tới chi phí thêm, gồm hao hụt thông tin khi yêu cầu truyền qua từng tầng, độ trễ báo cáo tiến độ, và chi phí phối hợp xuyên tầng. **Chỉ khi một nhóm gánh được một trách nhiệm bàn giao tương đối trọn vẹn thì việc thêm tầng mới thường có ý nghĩa thực tế.**

### 11.3.5 Quan hệ tổ chức và đường giao tiếp

Cấu trúc chủ quản – thực thi vẫn có thể cho phép các thành viên thực thi trao đổi trực tiếp; và các nhóm khác nhau trong tổ chức phân tầng cũng có thể trao đổi trực tiếp quanh những interface rõ ràng.

**Giao tiếp trực tiếp không tự động thay đổi quyền sở hữu task, và cũng không có nghĩa các bên tham gia có quyền quyết định như nhau.** Khi chọn mô hình tổ chức, hãy quan tâm tới phân công chuyên môn, độ gắn kết công việc và yêu cầu ra quyết định — **chứ không đơn thuần thêm chủ quản hay thêm tầng theo số lượng Agent.**

## 11.4 Cơ chế cộng tác: phân rã task, phân công, thực thi song song và tổng hợp kết quả

Quan hệ tổ chức nói team gồm những ai, nhưng một công việc cụ thể còn phải tiến triển liên tục thông qua task. Mục này tiếp tục dùng bối cảnh vá dependency ở trên: Agent nghiệp vụ phát hiện dependency của dịch vụ cần nâng cấp, Coding Agent lo sửa code, Agent kiểm thử lo kiểm chứng, Leader lo điều phối bàn giao và tổng hợp, cuối cùng người dùng nghiệm thu. Quá trình này lần lượt đi qua định nghĩa task, lập kế hoạch, lập lịch thực thi và tổng hợp kết quả.

![image](../assets/imgs/chapter-11/image-003.png)

### 11.4.1 Task và Subtask: phân rã mục tiêu và trách nhiệm bàn giao

**Task** là một thoả thuận công việc liên tục được thiết lập quanh một mục tiêu cụ thể, ghi lại mục tiêu, phạm vi, input, sản phẩm bàn giao, điều kiện nghiệm thu, người phụ trách và các ràng buộc cần thiết. **Subtask** gánh phần bàn giao cục bộ có thể phân công rõ ràng và chịu trách nhiệm độc lập; nhưng giá trị của nó vẫn phải phán định ngược về mục tiêu của Task cha.

Chương này gọi một lần thực thi thực tế của Task là **Task Run**. Task lưu mục tiêu, trách nhiệm, phụ thuộc và trạng thái tương đối ổn định; còn Task Run thì ghi lại thời điểm bắt đầu–kết thúc, bên thực thi, input/output và lý do kết thúc của một lần chạy. Một Task có thể sinh ra nhiều Task Run vì retry, khôi phục hay phân công lại; còn **Session** là context tương tác hay thực thi của một Agent cụ thể, có thể liên kết với Task Run nhưng **không đòi hỏi tương ứng một-một.** Message có thể kích hoạt task hay bổ sung thông tin, **nhưng gửi thành công không có nghĩa task đã được tiếp nhận.**

Trong bối cảnh vá dependency, mục tiêu của Task gốc là hoàn tất việc nâng cấp dependency và tạo ra patch cùng kết quả kiểm chứng nghiệm thu được. Subtask hiện thực do Coding Agent phụ trách, bàn giao phần sửa code cùng mô tả; subtask kiểm chứng do Agent kiểm thử phụ trách, bàn giao kết quả test ứng với đúng version code chỉ định. **Chỉ chẻ thành subtask khi công việc có bàn giao độc lập, trách nhiệm khác nhau hoặc phụ thuộc rõ ràng;** các bước nội bộ mà cùng một thành viên làm liên tục thì không cần biến từng bước thành task.

Thông tin của task lấy mức "đủ để chống đỡ việc thực thi và nghiệm thu" làm chuẩn. Khi mục tiêu và ràng buộc đã rõ thì có thể đẩy tiếp; **chỉ khi sự mơ hồ thực sự làm thay đổi nội dung bàn giao, trách nhiệm hay ranh giới thực thi thì mới cần làm rõ thêm.** Khi các tài liệu sẵn có đã chứng minh được kết quả thì cũng không cần làm lại báo cáo chỉ để hình thức trọn vẹn.

### 11.4.2 Lập kế hoạch cho Task

Kế hoạch trả lời câu hỏi *hoàn thành Task gốc ra sao*: chia đơn vị bàn giao thế nào, chọn bên thực thi nào, sắp xếp phụ thuộc ra sao, và tận dụng những cơ hội song song an toàn nào. **Thứ tự tạo node kế hoạch không đồng nghĩa với thứ tự thực thi thực tế;** quan hệ phụ thuộc và điều kiện khả dụng mới quyết định task bắt đầu được khi nào.

Trong bối cảnh vá dependency, Coding Agent có thể định vị phạm vi sửa và sinh patch trước, trong khi Agent kiểm thử đồng thời chuẩn bị môi trường test và test case; còn việc kiểm chứng đầy đủ thì đợi sản phẩm patch khả dụng rồi mới bắt đầu. Kế hoạch phải nói rõ **test dùng version patch nào, và kết quả thế nào thì được coi là căn cứ hoàn thành việc kiểm chứng.** Nhờ vậy, các thành viên vừa chuẩn bị song song được, vừa không coi một kết quả trước đó chưa xong là input hợp lệ.

Việc chọn bên thực thi phải kết hợp năng lực chuyên môn, quyền hạn khả dụng và tải hiện tại. Leader làm rõ mục tiêu, điều kiện bàn giao và phụ thuộc, **nhưng không giải sẵn mọi chi tiết chuyên môn thay cho bên thực thi.** Mục tiêu chung và ràng buộc mà Task cha đã ghi thì subtask có thể tham chiếu; subtask chỉ bổ sung trách nhiệm, sản phẩm bàn giao và điều kiện đặc thù của mình, **tránh để nhiều bản mô tả sinh ra bất nhất khi sửa về sau.**

Khi yêu cầu thay đổi, việc cập nhật kế hoạch phải **giữ lại những tiến triển hữu ích đã có.** Ví dụ, khi version mục tiêu đổi từ V1 sang V2, phải ghi rõ phần phân tích nào còn tái dùng được, patch cũ và kết quả test cũ ứng với version nào, phần việc nào bắt buộc làm lại — **chứ không ghi đè thẳng trạng thái cũ hay sinh lại trọn bộ task.**

### 11.4.3 Lập lịch thực thi cho Task

Việc lập lịch quyết định công việc nào chạy được dựa trên trạng thái hiện tại của task, và xử lý phần phân công, tiếp nhận, chờ, khôi phục và phân công lại. Thông báo dùng để nhắc thành viên rằng có việc mới hay có thay đổi trạng thái; còn **việc phán định thực thi thật sự thì vẫn lấy người phụ trách, phụ thuộc và version hợp lệ trong Task State làm chuẩn**, tránh để message trễ hay trùng kích hoạt lại một công việc vốn đã kết thúc.

Trong ví dụ, Coding Agent tiếp nhận subtask hiện thực và nộp Artifact patch V1; Agent kiểm thử sau đó kiểm chứng dựa trên version đó. Nếu môi trường test thiếu dependency, subtask kiểm chứng phải ghi lại lý do chặn và điều kiện cần; các công việc khác đẩy tiếp độc lập được thì vẫn tiếp tục. Sau khi điều kiện được bù đủ, có thể tạo một Task Run mới cho cùng Task kiểm chứng đó; và nếu bên thực thi cũ không còn phù hợp thì cũng có thể phân công lại **trong khi vẫn giữ các bản ghi đã có.**

Nếu test phát hiện patch không đạt yêu cầu, hãy liên kết các test case thất bại, version sản phẩm tương ứng và yêu cầu sửa đổi ngược về subtask hiện thực. Sau khi Coding Agent nộp Artifact V2, kết quả cũ vẫn được giữ như một sự thật lịch sử, nhưng các lần kiểm chứng sau **chỉ phán định trên version hợp lệ hiện tại.** Nhờ vậy phân biệt được retry, làm lại và thay đổi yêu cầu, tránh để các thành viên làm đi làm lại trên những version khác nhau.

**Điều kiện dừng ở cấp team phải được thoả thuận trước khi Task gốc bắt đầu**, gồm ngân sách tổng thể về thời gian hay chi phí, độ sâu uỷ nhiệm tối đa, số task phái sinh, số lần retry của một task, số vòng làm lại kết quả, và cách xử lý khi nhiều vòng liên tiếp không có sản phẩm hữu ích hay tiến triển trạng thái mới. Ngưỡng cụ thể do rủi ro, chi phí và yêu cầu thời hạn của task quyết định, **chứ không nối thêm vô hạn trong lúc orchestration.**

Khi chạm điều kiện dừng, hệ thống phải **tạm ngừng việc uỷ nhiệm mới và làm lại tự động**, giữ lại kết quả đã hoàn thành, các điểm chặn hiện tại và phần ngân sách còn lại, rồi đánh dấu Task gốc là thất bại, bị chặn hoặc chờ con người phán định. Người phát ra task có thể dựa vào đó để chấm dứt task, điều chỉnh phạm vi, bổ sung tài nguyên hoặc uỷ quyền rõ ràng rồi tiếp tục; **trần retry của một Agent đơn lẻ không thay được ràng buộc ở cấp team này.**

### 11.4.4 Tổng hợp kết quả của Task

Việc tổng hợp kết quả nối các phần bàn giao cục bộ trở lại mục tiêu của Task gốc. Bên thực thi nộp kết quả nghĩa là **thành quả ứng viên đã hình thành**; Leader hay thành viên thẩm định chỉ định chấp nhận kết quả subtask nghĩa là **nó đủ điều kiện để dùng tiếp cho công việc hạ nguồn**; còn Task gốc đạt điều kiện hoàn thành thì đòi hỏi **các thành quả ở version hợp lệ hiện tại cùng nhau phủ được mục tiêu tổng thể.** Ba thứ có liên quan nhưng **không thay thế cho nhau.**

Trong bối cảnh vá dependency, Leader phải xác nhận rằng patch code, mô tả sửa đổi và báo cáo test thuộc cùng một version hợp lệ, các kiểm tra cần thiết đã hoàn tất, và không tồn tại giới hạn thực chất nào cản trở việc bàn giao. Code, log và báo cáo của thành viên ban đầu **chỉ là tài liệu ứng viên**; chỉ sau khi được liên kết với điều kiện nghiệm thu cụ thể thì mới thành **Evidence** hỗ trợ phán định. Leader có thể chấp nhận các subtask thông thường trong phạm vi được uỷ quyền, nhưng **việc chấp nhận nội bộ đó không đồng nghĩa với nghiệm thu nghiệp vụ cuối cùng.**

Sau khi Task gốc tổng hợp thành quả và đạt điều kiện hoàn thành đã thoả thuận, nó có thể vào trạng thái "đã hoàn thành". Chữ "đã hoàn thành" ở đây nghĩa là **giai đoạn thực thi của đội đã kết thúc, sản phẩm đủ điều kiện bàn giao — nhưng đây chưa phải trạng thái cuối thực sự của vòng đời task.** Người dùng hoặc bên nghiệm thu được chỉ định còn phải lấy và tải sản phẩm về, xác nhận chấp nhận theo luật nghiệm thu đã thoả thuận trước, hoặc nêu yêu cầu sửa đổi; sau khi xác nhận chấp nhận thì mới archive, và Task mới thực sự kết thúc. Nếu không qua được nghiệm thu, hãy tiếp tục sửa theo đúng Task và quan hệ kết quả sẵn có, **chứ không dựng một bộ task khác.**

Phần bàn giao cuối cùng phải nói rõ các sản phẩm hợp lệ hiện tại phủ mục tiêu ra sao, các kết quả có nhất quán không, còn giới hạn nào, và điều kiện dừng có từng bị chạm hay không. Các kết quả subtask đã được chấp nhận thì tái dùng thẳng được; **chỉ khi nhiều kết quả thực sự cần thống nhất chuẩn đo, giải quyết xung đột hay hình thành phán đoán tổng hợp thì mới cần tích hợp thêm — không nhất thiết luôn thêm một "giai đoạn tổng hợp" mới.**

## 11.5 Context, memory và trạng thái cộng tác dùng chung của team

Trong hệ một Agent, context, memory và workspace thường được tổ chức quanh một chủ thể thực thi duy nhất. Khi bước vào Agent Team, vấn đề không còn chỉ là "làm sao cho model nhìn thấy đủ thông tin", mà là **làm sao để nhiều thành viên với vai trò, quyền hạn và nhịp đẩy tiến khác nhau vẫn hình thành được hiểu biết nhất quán về mục tiêu chung, trong khi mỗi bên vẫn giữ được không gian phán đoán riêng.**

Chia sẻ thiếu sẽ gây thăm dò trùng, xung đột task và phụ thuộc sai; chia sẻ quá nhiều thì khiến hội thoại, kết quả tool và các phán đoán trung gian liên tục lấn chỗ context, và còn lan lỗi cục bộ sang các thành viên khác. Vì vậy, thứ team cần **không phải một "bộ não chung" không ngừng phình ra mà mọi thành viên dùng chung**, mà là một cơ chế cộng tác thông tin có ranh giới: thành viên giữ không gian suy luận tương đối độc lập; mô hình task duy trì trạng thái cộng tác; hệ sản phẩm lưu thành quả thực tế; memory của team tích tụ tri thức tái dùng được; rồi mỗi Agent lấy thông tin cần thiết theo vai trò và task hiện tại.

### 11.5.1 Context dùng chung của team: hình thành view thông tin hướng task

**Context dùng chung của team không có nghĩa mọi Agent nhìn thấy một cửa sổ context y hệt nhau.** Các thành viên nghiên cứu, viết code, kiểm thử và bảo mật quan tâm những thông tin khác nhau; dù đứng trước cùng một task, chúng vẫn nên hình thành view context khớp với trách nhiệm của mình.

Nói chính xác hơn, thứ team chia sẻ là **nguồn context**, chứ không phải một Context hoàn toàn giống nhau. Mục tiêu, ràng buộc, trạng thái task, các sự thật đã xác nhận và sản phẩm cộng tác được duy trì thống nhất tạo thành nguồn context; rồi mỗi Agent kết hợp **vai trò, task, quyền hạn** và giai đoạn thực thi để chọn từ đó những thông tin cần cho quyết định hiện tại. **Context là view cục bộ của trạng thái team tại một thành viên, ở một thời điểm — không phải bản thân trạng thái team.**

Việc chọn lọc đó nên theo nguyên tắc **"tối thiểu nhưng đủ"**: vừa gồm mục tiêu, ràng buộc, kết quả phụ thuộc và sản phẩm liên quan cần cho task, vừa tránh tiêm vào trọn lịch sử dự án, output tool không liên quan và toàn bộ quá trình suy luận của các thành viên khác. Như vậy vừa giảm chi phí token và giao tiếp, vừa giảm nhiễu ảnh hưởng tới phán đoán.

**Handoff** là biểu hiện điển hình nhất của ranh giới context này. Nội dung bàn giao có thể tổ chức theo bốn nhóm sau:

| Nhóm thông tin | Nội dung cần truyền |
| --- | --- |
| Mục tiêu | Mục tiêu hiện tại, phạm vi công việc và yêu cầu bàn giao |
| Sự thật đã biết | Thông tin đã xác nhận và phần việc đã hoàn thành |
| Việc chờ xử lý | Các vấn đề chưa giải quyết, phụ thuộc và ràng buộc then chốt |
| Tham chiếu dùng được | Tham chiếu tới Task, dữ liệu và Artifact có thể dùng tiếp |

Trọn quá trình tìm kiếm, bản ghi gọi tool và các suy luận trung gian chưa kiểm chứng **thường không cần truyền nguyên xi.** Một Handoff rõ ràng phải giúp bên nhận làm việc tiếp được, đồng thời phán đoán được nguồn thông tin và phạm vi áp dụng.

### 11.5.2 Memory dùng chung của team: tích tụ kinh nghiệm đã được kiểm chứng

Memory dùng chung của team trả lời câu hỏi "quá khứ đã tích luỹ được gì, và nội dung nào đáng dùng tiếp trong các task sau". Nó **không đồng nghĩa với việc nhiều Agent dùng chung một vector database**, và cũng không phải việc lưu vĩnh viễn toàn bộ lịch sử hội thoại.

Trong quá trình thăm dò, Agent sinh ra rất nhiều giả thuyết và phán đoán tạm. Nếu nội dung chưa kiểm chứng đi thẳng vào bộ nhớ dài hạn thì rất dễ bị coi là sự thật và trích dẫn lặp đi lặp lại trong các task sau. Thứ phù hợp hơn để tích tụ thành memory của team là những thông tin **đã được kết quả task, dữ liệu bên ngoài, thành viên khác hay con người xác nhận** — ví dụ các sự thật lĩnh vực đã xác nhận, phương pháp hiệu quả hoặc thất bại, các quyết định quan trọng cùng bối cảnh, thoả thuận làm việc của team và các chiến lược thao tác tái dùng được.

Memory của team còn phải giữ lại nguồn và ranh giới cần thiết: **do ai tạo ra, đã qua kiểm chứng gì, áp dụng cho team và bối cảnh nào, ghi vào lúc nào, và hiện còn hiệu lực không.** Khi luật nghiệp vụ và môi trường bên ngoài thay đổi, memory cũng cần được cập nhật, hạ cấp hoặc đào thải. So với công nghệ lưu trữ, **việc quyết định cái gì được thành memory, ai duy trì và khi nào hết hiệu lực mới là thứ ảnh hưởng nhiều hơn tới độ tin cậy của cộng tác dài hạn.**

### 11.5.3 Trạng thái cộng tác và sản phẩm dùng chung: duy trì sự thật chung

Task phức tạp có thể kéo dài nhiều giờ, thậm chí nhiều ngày, và sinh ra trạng thái task, kế hoạch, code, dữ liệu, tài liệu, kết quả test cùng nhiều thông tin tồn tại liên tục khác. Những nội dung này **không được phụ thuộc vào cửa sổ context của một Agent nào đó mới tồn tại**, nhưng cũng không cần bị nhét hết vào một Workspace có nghĩa quá rộng. Cách rõ ràng hơn là để **Task State** và **Artifact** lần lượt duy trì quá trình cộng tác và thành quả thực tế.

**Task State** ghi mục tiêu, trách nhiệm, phụ thuộc, tiến độ hiện tại và trạng thái nghiệm thu, giúp task vẫn đẩy tiếp được sau khi thành viên rút ra, bị thay hay gia nhập lại; cách phân rã, lập lịch và tổng hợp kết quả của nó đã triển khai ở 11.4. **Artifact** lưu các thành quả thực tế như báo cáo nghiên cứu, tài liệu thiết kế, code, dataset và kết quả test, giúp thành viên hạ nguồn làm tiếp trên cùng một sản phẩm, giảm hao hụt thông tin do thuật lại bằng ngôn ngữ tự nhiên.

**Message dùng để nói "đã xảy ra chuyện gì"; còn Task State và Artifact thì cùng ghi lại "sự thật hiện tại là gì".** Thành viên có thể thông báo qua message rằng một task đã xong, nhưng các thành viên khác vẫn phải **đọc trạng thái hiện tại của task**; thành viên có thể thông báo một báo cáo đã được sinh ra, nhưng bên nhận phải lấy chính báo cáo đó qua một tham chiếu Artifact truy cập được, **chứ không chỉ dựa vào bản tóm tắt trong message.**

Trạng thái cộng tác và sản phẩm cũng **không có nghĩa mọi thành viên được đọc và sửa toàn bộ nội dung.** Dưới các task, mức dữ liệu và ranh giới tổ chức khác nhau, thứ thành viên nhìn thấy và thao tác được có thể khác nhau. Thứ được chia sẻ là **vật mang sự thật thống nhất, tham chiếu được**; còn phạm vi truy cập thì vẫn phải kiểm soát theo vai trò, task và quyền hạn.

### 11.5.4 Quan hệ giữa Context, Memory, Task State, Artifact và Workspace

Những đối tượng này liên quan với nhau nhưng giải quyết các vấn đề khác nhau:

| Đối tượng | Trả lời câu hỏi gì | Vòng đời | Nội dung hoặc công dụng điển hình |
| --- | --- | --- | --- |
| Context | Agent hiện tại lúc này cần biết gì | Bước hiện tại hoặc task hiện tại | Mục tiêu, ràng buộc, kết quả phụ thuộc và thông tin Handoff |
| Memory | Team trong quá khứ đã tích luỹ được gì | Xuyên task, xuyên Session | Sự thật đã kiểm chứng, phương pháp, quyết định và kinh nghiệm |
| Task State | Công việc hiện tại đã tới đâu | Kéo dài theo Task | Trách nhiệm, phụ thuộc, tiến độ và trạng thái nghiệm thu |
| Artifact | Team đã thực sự tạo ra cái gì | Do ứng dụng nghiệp vụ định nghĩa | Báo cáo, code, dữ liệu và kết quả test |
| Workspace | Agent triển khai task trên những file làm việc và tài nguyên đã được phép nào | Quản lý theo chính sách bền vững hoá của task hay dự án; mount lại được xuyên các instance chạy | Thư mục làm việc, file, nhánh, snapshot, cùng các tham chiếu tool và credential ánh xạ vào đó |
| Environment | Lần thực thi hiện tại dùng điều kiện chạy nào | Thay đổi theo instance chạy hay cấu hình triển khai | Tính toán, mạng, hệ thống file, ánh xạ credential và điều kiện cô lập |

Context chọn thông tin cần thiết từ Task State, Artifact, Memory cùng các event thời gian thực theo vai trò và task hiện tại của thành viên, để hình thành view quyết định ngay lúc đó. **Workspace** là thư mục làm việc mà Agent thao tác trực tiếp được cùng các tài nguyên đã được phép ánh xạ vào đó; còn **Environment** mô tả các điều kiện tính toán, mạng, hệ thống file, ánh xạ credential và cô lập mà những công việc đó diễn ra trong đó. Cái trước giúp file làm việc kéo dài xuyên các instance chạy, cái sau ràng buộc mỗi lần chạy truy cập và thực thi được ra sao; hai thứ cùng chống đỡ việc triển khai task, **nhưng trạng thái task, bộ nhớ dài hạn và sản phẩm chính thức thì vẫn do các đối tượng tương ứng duy trì.**

### 11.5.5 Từ "chia sẻ tất cả" tới "chia sẻ tối thiểu nhưng đủ"

Việc chia sẻ trong team theo bốn yêu cầu: thành viên giữ không gian phán đoán độc lập; các sự thật then chốt đi vào bản ghi task; thành quả đã bàn giao được chia sẻ qua tham chiếu ổn định; kinh nghiệm tái dùng được đi vào memory sau khi kiểm chứng. Phần lưu trữ ở tầng dưới, việc merge version và vòng đời memory thì theo cơ chế của chương lưu trữ trạng thái.

Với cấu trúc thông tin này, team **không cần để mọi thành viên biết mọi chuyện mà vẫn duy trì được mục tiêu chung và tính liên tục của cộng tác.** Tiếp theo còn phải giải quyết việc thay đổi trạng thái, yêu cầu task và tham chiếu sản phẩm được truyền giữa các Agent ra sao — đó chính là câu hỏi mà phần giao tiếp và giao thức của team phải trả lời.

## 11.6 Giao tiếp và giao thức của team: A2A, MCP và routing message

Context, memory, trạng thái task và sản phẩm dùng chung giải quyết việc **tổ chức** thông tin của team; còn cơ chế giao tiếp thì để các thành viên khác nhau khám phá được nhau, thiết lập liên hệ và liên tục trao đổi request, event cùng kết quả. Các hệ multi-agent thời kỳ đầu thường do cùng một framework tạo ra mọi thành viên, và quan hệ gọi cùng interface cũng do ứng dụng định trước; khi team bắt đầu tiếp nhận Agent từ những framework khác nhau, môi trường chạy khác nhau, thậm chí từ các tổ chức khác nhau, thì việc giao tiếp phải đi **từ việc truyền message trong nội bộ framework tới một giao thức cộng tác ổn định hơn.**

### 11.6.1 Từ trao đổi message tới cộng tác bền bỉ

Lời gọi dịch vụ truyền thống thường xoay quanh một Endpoint đã biết và một lần request–response. Còn cộng tác Agent thì có thể trải qua khám phá năng lực, uỷ nhiệm task, bàn giao context, phản hồi quá trình, bổ sung input và bàn giao thành quả — kéo dài vài phút hoặc lâu hơn.

Vì vậy, tầng giao tiếp không chỉ cần truyền một đoạn ngôn ngữ tự nhiên, mà còn phải trả lời: **nhận diện bên cộng tác phù hợp ra sao, liên kết nhiều lượt tương tác của cùng một công việc ra sao, biểu đạt các trạng thái đang chạy – đang chờ input – thất bại – hoàn thành ra sao, và bàn giao một kết quả dùng tiếp được ra sao.** Một message có thể kích hoạt cộng tác, **nhưng tự nó không đại diện cho việc công việc đã được tiếp nhận hay hoàn thành;** team vẫn phải lấy Task State và Artifact làm sự thật cộng tác — mô hình cụ thể xem 11.4 và 11.5.

### 11.6.2 A2A: cộng tác mở hướng tới các Agent dị chủng

**Agent2Agent (A2A)** thiết lập ngữ nghĩa cộng tác chung cho các Agent nằm ở những framework và nền tảng khác nhau. Giá trị của nó không chỉ là cung cấp một cách truyền tải qua mạng, mà còn ở chỗ đưa việc **khám phá năng lực, task bền bỉ và bàn giao thành quả** vào một giao thức thống nhất.

| Đối tượng hoặc cơ chế A2A | Tác dụng chính | Quan hệ với các đối tượng của chương này |
| --- | --- | --- |
| Agent Card | Mô tả tên, năng lực, interface và metadata tương tác của Agent | Cung cấp thông tin cho việc khám phá và lựa chọn, **nhưng không thể chỉ dựa vào lời khai mà thiết lập định danh đáng tin** |
| Task | Biểu đạt một công việc theo dõi được trong giao thức A2A | Phải ánh xạ với Task nghiệp vụ; **trùng tên không có nghĩa vòng đời và nguồn thẩm quyền hoàn toàn giống nhau** |
| Message | Biểu đạt một lần giao tiếp giữa client và Agent | Có thể liên kết với Task, cũng có thể trả về thẳng trong các tương tác đơn giản mà không tạo Task |
| Artifact | Biểu đạt output ở tầng giao thức do A2A Task sinh ra | Phải ánh xạ thành Artifact mà ứng dụng nghiệp vụ quản lý và nghiệm thu được |
| `contextId` | Liên kết nhiều Message và Task trong cùng một context tương tác | Dùng để liên kết tương tác ở tầng giao thức, **không thay thế định nghĩa Task nghiệp vụ hay Session** |

Agent Card có thể kèm chữ ký và cấu hình bảo mật, nhưng bên gọi **vẫn phải kết hợp việc xác minh chữ ký, nguồn tin cậy và policy uỷ quyền để phán định có đáng tin hay không.** Task, Message và Artifact trong giao thức giải quyết vấn đề liên thông; còn các đối tượng trùng tên trong chương này thì gánh trách nhiệm nghiệp vụ, trạng thái và ngữ nghĩa nghiệm thu — **hai bên phải được liên kết rõ ràng qua một tầng adapter.**

A2A cung cấp nhiều cách cập nhật cho các task chạy dài. **Streaming** dùng để nhận event liên tục trong lúc kết nối còn giữ; **polling** cho phép bên gọi truy vấn trạng thái Task sau đó; còn **Push Notification** thì cho phép nhận cập nhật khi bên gọi không giữ kết nối. Ba thứ có thể tổ hợp theo điều kiện vận hành, **nhưng không nên mô tả gộp là "không chiếm kết nối".**

### 11.6.3 A2A, MCP và cơ chế message nội bộ phối hợp ra sao

A2A dùng để bàn giao task và trao đổi kết quả **giữa các Agent**; MCP kết nối ứng dụng model với tool, resource và prompt; còn hệ message nội bộ thì gánh phần thông báo trạng thái, broadcast và tách rời component. Hình thái truyền tải, tiến hoá version và cơ chế nối tiếp của giao thức được triển khai ở chương giao tiếp phân tán; mục này tập trung vào quan hệ ánh xạ của chúng trong team.

Một Agent nghiên cứu có thể truy vấn tài liệu qua MCP, rồi uỷ nhiệm công việc viết báo cáo qua A2A, còn nội bộ team thì thông báo thay đổi trạng thái qua event. Tầng adapter phải ánh xạ định danh của giao thức sang Task, Session và Artifact nghiệp vụ, đồng thời **giữ lại nguồn và quyền hạn.** Extension Tasks tuỳ chọn của MCP cần cả hai bên hỗ trợ tường minh; **handle của nó không tự động tương đương với task nghiệp vụ hay A2A Task.**

Team nên chọn giữa truy vấn, streaming hay push **theo đúng năng lực mà bên tham gia đã khai báo và đã được kiểm chứng.** Sau khi giao thức đã nối được, **vẫn phải kiểm chứng việc tiếp nhận task, khả năng đọc sản phẩm và đường khôi phục**, tránh coi "truyền tải thành công" là "cộng tác hoàn thành".

### 11.6.4 Các mẫu giao tiếp của team

Team có thể tổ hợp các cách giao tiếp khác nhau theo đặc điểm task; **quan hệ tổ chức không tất yếu quyết định rằng mọi message phải đi qua cùng một đường:**

| Cách giao tiếp | Bối cảnh phù hợp | Vấn đề cần lưu ý |
| --- | --- | --- |
| Direct / Handoff | Cộng tác có ranh giới năng lực rõ, bàn giao trực tiếp được | Mục tiêu bàn giao, trạng thái và tham chiếu sản phẩm phải đầy đủ |
| Shared Message Space | Thăm dò, thảo luận và rà soát chéo | Kiểm soát nhiễu thông tin qua subscription và lọc theo vai trò |
| Event-driven / Publish-Subscribe | Team quy mô khá lớn, mức bất đồng bộ cao | Xử lý gửi trùng, thay đổi thứ tự và khôi phục việc tiêu thụ |

Chủ quản – thực thi, cộng tác ngang hàng và orchestration phân tầng mô tả quan hệ tổ chức và ra quyết định của team, đã bàn ở 11.3; Workflow và Graph mô tả phụ thuộc có tính xác định giữa các task, chủ yếu do cơ chế lập kế hoạch và lập lịch ở 11.4 gánh. **Tầng giao tiếp cần hỗ trợ những quan hệ đó, chứ không định nghĩa lại chúng.**

### 11.6.5 Từ lựa chọn theo ngữ nghĩa tới routing lai

Khi số thành viên tăng lên, bên gửi chưa chắc biết trước nên gọi Agent nào. Routing có thể chuyển từ "gọi Agent B" sang **"tìm một Agent xử lý được loại task này"**: hệ thống trước hết sàng lọc ứng viên theo năng lực mà Agent đã khai báo, ngữ nghĩa task hiện tại và trạng thái khả dụng, rồi mới chọn bên thực thi phù hợp.

Model có thể tham gia vào việc hiểu nội dung task, phán đoán năng lực cần thiết và đưa ra gợi ý ứng viên; **nhưng lựa chọn cuối cùng vẫn phải kiểm chứng ranh giới team, quyền hạn, phạm vi dữ liệu, tính khả dụng của thành viên, chi phí và chính sách an toàn.** Hướng thực tế hơn là **routing lai**: phán đoán ngữ nghĩa giúp hiểu và chọn, còn luật có tính xác định thì lo ràng buộc, thực thi và lưu dấu. Mô tả năng lực của A2A có thể làm lối vào để khám phá ứng viên; còn policy của team cùng trạng thái vận hành thì cùng quyết định kết quả routing cuối cùng.

### 11.6.6 Tách mặt phẳng message khỏi trạng thái cộng tác

Message phù hợp để lan truyền ý định, event, thông tin bàn giao và tham chiếu đối tượng. **Thông báo thông thường không được coi là căn cứ duy nhất cho việc task đã hoàn thành**; bên nhận phải truy vấn task và sản phẩm tương ứng. Nếu hệ thống dùng event sourcing thì cũng có thể để một event log bền vững hình thành state có thẩm quyền, nhưng phải có hợp đồng đầy đủ về event, thứ tự, lưu giữ và dựng lại — **không được đánh đồng một message queue bất kỳ với sổ cái task.**

Giao thức giao tiếp phải để message liên kết ổn định với Team, Task, Task Run, Session và Artifact tương ứng, đồng thời xử lý gửi trùng, thay đổi thứ tự và khôi phục sau mất kết nối. Sự thật cộng tác vẫn do Task State và Artifact duy trì, **tránh coi lịch sử hội thoại là Team State.**

### 11.6.7 Từ team khép kín tới mạng cộng tác mở

Khi các giao thức mở dần chín, Agent Team có thể mở rộng từ bên trong một ứng dụng đơn lẻ ra cộng tác xuyên phòng ban, xuyên nền tảng, thậm chí xuyên tổ chức. **Việc khám phá và gọi được một Agent không có nghĩa mặc định tin vào lời khai năng lực hay cách xử lý dữ liệu của nó;** một Tool dùng giao thức chuẩn cũng không vì thế mà tự động đáng tin.

Giao thức mở giải quyết vấn đề liên thông; còn **Identity, Delegation, Policy, Data Boundary và Audit thì quyết định kết nối có được phép xảy ra hay không.** Việc giao tiếp phải mang theo đủ context về định danh, task và lời gọi, và cùng với cơ chế quản trị của team hoàn tất việc phán định tin cậy; mô hình chủ thể, uỷ quyền, quyền hạn và audit cụ thể sẽ triển khai ở 11.7.

Nhờ vậy, giao tiếp trong team hình thành một chuỗi rõ ràng: **MCP** nối ứng dụng model với năng lực bên ngoài, **A2A** nối các Agent tự chủ, cơ chế message nội bộ lan truyền event của nền tảng, routing lai chọn bên cộng tác phù hợp, còn **Task State và Artifact** thì lưu giữ sự thật cộng tác bền bỉ. Chúng cùng chống đỡ việc Agent đi từ thực thi độc lập tới cộng tác nhóm mở và bền vững.

## 11.7 Quản trị và observability cho team: định danh, quyền hạn và truy vết toàn chuỗi

### 11.7.1 Quản trị định danh

Quản trị định danh phải phân biệt nghiêm ngặt **chủ thể, credential và quan hệ uỷ quyền.** "Chủ thể" trả lời ai đang hành động; "uỷ quyền uỷ nhiệm" trả lời vì sao chủ thể được đại diện cho người khác; còn "credential" chỉ là vật mang để chủ thể chứng minh định danh hay quyền hạn với hệ thống đích. Chỉ khi tách ba thứ đó, nền tảng mới tránh được việc giao thẳng credential dài hạn của người dùng cho Agent, và mới tái dựng được chuỗi trách nhiệm từ người phát khởi tới workload thực thi khi audit.

| Nhóm đối tượng | Vòng đời | Công dụng chính | Yêu cầu sản phẩm |
| --- | --- | --- | --- |
| Chủ thể con người | Thay đổi theo vòng đời tài khoản doanh nghiệp | Đăng nhập, quản trị, phê duyệt, phát task và con người tiếp quản | Tích hợp nguồn định danh doanh nghiệp, hỗ trợ SSO, đồng bộ vô hiệu hoá và xác thực mạnh |
| Chủ thể service | Thay đổi theo ứng dụng hay task tự động | Gọi API, kích hoạt định kỳ và tích hợp hệ thống | Độc lập với tài khoản con người, hỗ trợ xoay vòng, thu hồi và quyền tối thiểu |
| Chủ thể Agent / workload | Thay đổi theo việc tạo, phát hành và archive Agent | Định danh ổn định cho thành viên số, gắn với trách nhiệm, policy, audit và chi phí | Mỗi Agent là duy nhất, **không gắn với model hay instance container tạm thời** |
| Chủ thể thực thi | Theo việc tạo và chấm dứt instance chạy | Biểu thị workload runtime thực sự phát ra lời gọi model, tool hay truy cập dữ liệu | Bắt buộc liên kết với Agent, version, Task Run và môi trường chạy |
| Credential tạm | Ngắn hạn, cấp theo lần chạy hay theo tài nguyên | Chứng minh chủ thể thực thi và phạm vi đã được phép với hệ thống đích | Giới hạn tài nguyên, hành động và khoảng thời gian; không ghi khoá dài hạn xuống đĩa. **Credential không phải định danh.** |
| Uỷ quyền uỷ nhiệm | Thiết lập và hết hạn theo Session hay Task Run | Biểu đạt phạm vi mà người hay service cho phép Agent làm thay | Giữ lại bên uỷ quyền, bên nhận uỷ quyền, phạm vi, mục đích, bằng chứng phê duyệt và thời hạn. **Uỷ quyền không phải định danh.** |

Chủ thể Agent / workload dùng để định danh thành viên số; chủ thể con người hay chủ thể trong user pool dùng để định danh nguồn request; chủ thể thực thi dùng để định danh instance chạy thực sự truy cập tài nguyên; còn credential tạm thì là vật mang để chủ thể thực thi chứng minh định danh và quyền hạn với hệ thống đích. Bản ghi audit nên liên kết định danh chủ thể, quan hệ uỷ quyền và định danh hay vân tay của credential, **nhưng không được ghi bí mật của credential.**

### 11.7.2 Quản trị quyền hạn

Quản trị quyền hạn dùng tổ hợp **"vai trò ổn định + policy động".** Vai trò phù hợp để biểu đạt các trách nhiệm dài hạn như quản trị viên, người phụ trách, lập trình viên, người quan sát và kiểm toán viên; còn policy động thì phù hợp để biểu đạt các điều kiện ngữ cảnh như môi trường, mức dữ liệu, khung giờ chạy, mức chi phí, trạng thái phê duyệt và điểm rủi ro.

Quyền hạn có thể tổ chức phân tầng theo quản trị tổ chức, quản trị team, quản trị Agent, kiểm soát vận hành, truy cập tài nguyên và quan sát – audit; các hành động điển hình cùng ràng buộc của từng tầng như sau.

| Tầng | Hành động điển hình | Ràng buộc then chốt |
| --- | --- | --- |
| Quản trị tổ chức | Cấu hình không gian tổ chức, nguồn định danh và baseline an toàn | Chỉ quản trị viên nền tảng thao tác được; các thay đổi then chốt có cần nhiều người phê duyệt hay không thì do mô hình rủi ro tổ chức và bối cảnh cụ thể quyết định |
| Quản trị team | Tạo Team, mời thành viên, quản lý Agent | Người phụ trách team chỉ quản được tài nguyên của team mình |
| Quản trị Agent | Sửa cấu hình, phát hành version, gắn tool, chỉnh policy | **Tách quyền phát triển và quyền phát hành**; thay đổi production phải lưu bằng chứng phê duyệt |
| Kiểm soát vận hành | Phát khởi, tạm dừng, chấm dứt, retry, con người tiếp quản | Quyền hạn đồng thời chịu ràng buộc của người phát khởi, Agent, task và môi trường |
| Truy cập tài nguyên | Gọi model, tool, tri thức, memory và dữ liệu nghiệp vụ | **Quyết định lại trước mỗi lần truy cập thực tế; cấm chỉ kiểm tra ở lối vào** |
| Quan sát và audit | Xem Trace, Prompt, output, chi phí và bản ghi audit | Tách quyền giữa nội dung gốc và bản tóm tắt đã ẩn danh; các trường nhạy cảm uỷ quyền theo nhu cầu |

Quyền hiệu lực của một hành động là **giao** của quyền con người, ranh giới team, policy Agent, policy tài nguyên và phạm vi uỷ quyền; và **mọi từ chối tường minh đều được ưu tiên.** Việc bàn giao giữa các Agent **không mở rộng quyền hạn**: bên nhận chỉ được phạm vi tối thiểu cần cho task hiện tại và được cả hai bên cho phép. Với các bối cảnh như tool rủi ro cao, dữ liệu xuyên team, thao tác ghi lên production và vượt ngân sách, nên cấu hình phê duyệt của con người kết hợp mô hình rủi ro tổ chức; còn uỷ quyền khẩn thì **bắt buộc phải có thời hạn ngắn, lý do rõ ràng và rà soát hậu kiểm.**

Mỗi Task Run cố định version policy và các kết quả quyết định then chốt. Policy thay đổi về sau **không viết lại sự thật lịch sử**, nhưng có thể quyết định có chấm dứt các task đang chạy hay không theo mức rủi ro. Kết quả từ chối phải trả về lý do hiểu được — ví dụ thiếu vai trò, uỷ quyền đã hết hạn, tài nguyên vượt ranh giới team, hay hành động cần phê duyệt — **chứ không chỉ trả về một câu "không có quyền" chung chung.**

Quyền hạn của Agent phải phân biệt **hai hướng: vào và ra.** Quyền hướng vào quyết định "ai được gọi Agent, phát ra task gì"; quyền hướng ra quyết định "Agent được đại diện cho ai, truy cập tài nguyên bên ngoài nào và thực hiện thao tác gì". **Hai loại quyền được cấu hình độc lập, kiểm chứng riêng; không được vì bên gọi truy cập được Agent mà mặc định Agent truy cập được mọi tài nguyên bên gọi đang có.**

Quyền hướng vào nhắm tới con người, service và các Agent khác, kiểm soát lối vào gọi Agent. Nền tảng phải kiểm chứng chủ thể gọi, các interface hay loại task được phép, môi trường áp dụng, tần suất gọi và thời hạn hiệu lực. Với các thao tác rủi ro cao, còn phải thêm phê duyệt, xác thực mạnh hay xác nhận của con người. **Việc xác thực hướng vào chỉ chứng minh bên gọi có quyền phát request, không chuyển hoá thẳng thành quyền hướng ra của Agent.**

Quyền hướng ra nhắm tới model, tool, nguồn dữ liệu và hệ thống bên ngoài, kiểm soát việc truy cập tài nguyên trong lúc Agent chạy. Nền tảng phải căn cứ vào uỷ quyền uỷ nhiệm còn hiệu lực và context task để cung cấp credential tạm hoặc proxy credential có kiểm soát, và giới hạn quyền trong đúng tài nguyên, hành động và khoảng thời gian cần thiết. **Agent không được giữ hay tái dùng credential dài hạn của người dùng, và cũng không được mở rộng quyền truy cập vượt phạm vi task này.**

Quyền vào và quyền ra liên kết với nhau qua task, quan hệ uỷ quyền và định danh lời gọi. Mỗi request vào đều phải tạo thành một ranh giới uỷ quyền rõ ràng; **truy cập ra không được vượt ranh giới đó.** Khi chủ thể gọi, mục đích task hay phạm vi uỷ quyền thay đổi, phải kiểm chứng lại quyền hướng ra, và khi cần thì phê duyệt lại rồi cấp credential mới, để phòng vượt quyền.

Bản ghi audit phải liên kết chủ thể gọi vào, chủ thể Agent, chủ thể thực thi, quan hệ uỷ quyền và kết quả truy cập ra, tạo thành một **chuỗi trách nhiệm trọn vẹn từ "ai phát khởi" tới "ai thực thi, đã truy cập cái gì".** Kiểm chứng định danh, uỷ quyền hay policy thất bại ở bất kỳ mắt xích nào cũng phải từ chối thực thi, **không được hạ cấp thành tài khoản dùng chung hay quyền mặc định của nền tảng.**

### 11.7.3 Quan sát

Quan sát ở cấp team tập trung giải thích **việc bàn giao trách nhiệm, điểm chặn, làm lại và việc chấp nhận kết quả giữa các thành viên.** Hệ Trace, chỉ số, log và đánh giá tổng quát được triển khai ở phần Quản trị; ở đây giữ lại các đối tượng liên kết và câu hỏi chẩn đoán đặc thù của cộng tác.

Nền tảng lấy Task gốc làm trục để liên kết các Task Run, lần chạy của thành viên, các lần bàn giao, cùng lời gọi model và tool. **Task tiến trình dài có thể trải qua nhiều Trace; không được ép cả vòng đời vào cùng một trace.** Định danh task và tham chiếu sản phẩm gánh phần liên kết xuyên khôi phục, còn mỗi đoạn Trace thì ghi lại quan hệ nhân quả của các lời gọi thực sự xảy ra.

Trace context được lan truyền theo **W3C Trace Context**, và dùng `teamId`, `taskId`, `taskRunId`, `sessionId` làm định danh liên kết nghiệp vụ. Quan hệ gọi nên chọn **Span cha–con hay Span Links của OpenTelemetry** theo đúng quan hệ nhân quả thực tế và cách lan truyền context: những lần chạy lan truyền context liên tục được thì dùng Span cha–con; còn những lần chạy xuyên Trace, hội tụ song song hay không tạo thành quan hệ cha–con đơn nhất thì liên kết bằng Links. Như vậy vừa giữ được nhân quả thật, vừa tránh việc ép một đồ thị thực thi động thành một cây gọi.

Lời gọi model, Agent và tool có thể tham khảo semantic convention GenAI của OpenTelemetry; nhưng do quy chuẩn liên quan vẫn đang tiến hoá, **nền tảng nên khoá version đang dùng, duy trì ánh xạ trường nội bộ và cung cấp cơ chế nâng cấp tương thích.**

Trace dùng để tái dựng một lần chạy, chỉ số dùng để quan sát xu hướng tổng thể, còn log và event dùng để giữ chi tiết chẩn đoán. Ba loại dữ liệu này nên liên kết với nhau qua định danh thống nhất.

| Nhóm dữ liệu | Nội dung quan sát chính |
| --- | --- |
| Chỉ số vận hành | Tỉ lệ thành công, thời lượng đầu-cuối, thời gian xếp hàng, số lần retry, số lần bàn giao và thời lượng task bị chặn |
| Chỉ số model | Độ trễ gọi, lượng token, chi phí, rate limit, tỉ lệ thất bại và tình hình hạ cấp |
| Chỉ số tool | Tỉ lệ gọi thành công, độ trễ của phụ thuộc bên ngoài, tỉ lệ bị policy từ chối, timeout và xung đột idempotent |
| Chỉ số tài nguyên | Mức đồng thời, tỉ lệ dùng quota, tải môi trường thực thi, cùng chi phí theo chiều team, Agent và task |
| Sự kiện quản trị | Thay đổi uỷ quyền, policy trúng, con người tiếp quản, cấp và thu hồi credential, truy cập dữ liệu nhạy cảm và thao tác rủi ro cao |

Log nên giữ lại context chẩn đoán cần thiết, nhưng **không ghi thẳng credential, prompt đầy đủ, dữ liệu nhạy cảm hay output model chưa qua xử lý.** Với input/output, nội dung memory và tham số tool, hãy tóm tắt hoá, ẩn danh, lấy mẫu và kiểm soát truy cập theo mức dữ liệu.

Observability không chỉ quan tâm hệ thống có khả dụng hay không, mà còn phải trả lời **việc cộng tác trong team có hiệu quả hay không.** Nền tảng nên hỗ trợ đánh giá mức độ hoàn thành task, chất lượng kết quả, tính hiệu quả của việc bàn giao, mức liên quan của memory, tính hợp lý của việc chọn tool và tính nhất quán khi thực thi policy, đồng thời liên kết kết quả đánh giá tới đúng Task, Task Run và version Agent.

Đánh giá có thể đến từ luật, model thẩm định, phản hồi nghiệp vụ hay con người rà soát. Đánh giá online dùng để phát hiện bất thường và suy giảm chất lượng; đánh giá offline dùng để so sánh version và kiểm chứng hồi quy. **Kết luận đánh giá phải lưu tách khỏi bản ghi sự thật, ghi rõ phương pháp, version và thời điểm đánh giá — tránh coi phán đoán của model là sự thật vận hành không thể chất vấn.**

Nền tảng nên hỗ trợ truy hồi và tổng hợp dữ liệu quan sát theo team, Agent, version, model, tool, policy và môi trường chạy, và từ task thất bại, bất thường chi phí hay sự cố vượt quyền mà định vị ngược về chủ thể chịu trách nhiệm cùng node thực thi cụ thể. **Cảnh báo nên ưu tiên dựa trên trạng thái vận hành ổn định và chỉ số tổng hợp, chứ không dựa trên trường cardinality cao hay một dòng log đơn lẻ.**

Bản thân dữ liệu quan sát cũng là **đối tượng quản trị**, cần đặt truy cập phân cấp, thời hạn lưu giữ, chiến lược lấy mẫu và yêu cầu audit. Thông qua một mô hình truy vết thống nhất và cơ chế liên kết dữ liệu, nền tảng có thể đồng thời chống đỡ việc định vị sự cố, tối ưu hiệu năng, phân tích chi phí, đánh giá chất lượng và audit bảo mật, **đồng thời tránh để việc xây dựng observability trở thành một kênh phơi dữ liệu nhạy cảm mới.**

## 11.8 Tóm tắt chương

Tính liên tục của một Agent Team phụ thuộc vào quan hệ tổ chức và task rõ ràng. Các thành viên có thể giữ Harness và môi trường chạy khác nhau, và tiếp nhận công việc qua interface adapter; topology tổ chức quyết định quan hệ phối hợp và ra quyết định; kế hoạch task biểu đạt phụ thuộc; còn việc chấp nhận kết quả thì nối các phần bàn giao cục bộ về mục tiêu chung.

Context, memory, trạng thái task, sản phẩm và workspace dùng chung mỗi thứ có trách nhiệm riêng; cơ chế giao tiếp lo việc truyền những thông tin liên kết được giữa các thành viên. Định danh, uỷ nhiệm và quyền hạn xuyên suốt quá trình bàn giao; còn quan sát thì giúp định vị điểm chặn, việc làm lại và chi phí. **Quy mô của team nên do nhu cầu phân công thực tế quyết định, và hiệu quả cộng tác cuối cùng được đo bằng cả kết quả bàn giao tổng thể lẫn chi phí phối hợp.**
