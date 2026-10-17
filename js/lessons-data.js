window.LESSONS = [
  { id: "H01",
    track: "HTML",
    level: "Cơ bản",
    title: "HTML là gì?",
    summary: "Hiểu vai trò của HTML và tạo được trang đầu tiên từ những phần tử cơ bản.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Giải thích được HTML dùng để mô tả cấu trúc và ý nghĩa của nội dung." },
      { p: "• Phân biệt vai trò của HTML, CSS và JavaScript trong một trang web." },
      { p: "• Nhận diện được thẻ mở, thẻ đóng, phần tử hoàn chỉnh và phần tử rỗng." },
      { p: "• Tạo được một tệp HTML có tiêu đề, đoạn văn và cấu trúc lồng thẻ đúng." },
      { note: "Thời lượng gợi ý: 35 phút." },

      { h: "1. HTML mô tả nội dung là gì" },
      { p: "<strong>HTML</strong> là chữ viết tắt của <em>HyperText Markup Language</em>, nghĩa là ngôn ngữ đánh dấu siêu văn bản. “Đánh dấu” có nghĩa là đặt nội dung vào những phần tử để xác định vai trò của nó. Khi viết một bài học, ta cần phân biệt tên bài, đoạn giải thích, hình minh họa và liên kết tới bài khác. HTML cung cấp cách diễn đạt các vai trò đó để trình duyệt hiểu được cấu trúc tài liệu." },
      { p: "HTML không phải ngôn ngữ lập trình. Theo giáo trình, bản thân HTML không cung cấp biến hay cấu trúc điều khiển để thực hiện thuật toán. Một trang có thể trình bày nội dung rõ ràng chỉ bằng HTML, nhưng công việc tính điểm hoặc phản ứng phức tạp với thao tác người dùng thuộc lớp hành vi khác." },
      {
        code:   `<h1>Góc tự học của tôi</h1>
<p>Hôm nay tôi học cách tạo một trang web.</p>`
      },
      { p: "Ở đây, <code>h1</code> đánh dấu đề mục chính, còn <code>p</code> đánh dấu một đoạn văn." },

      { h: "2. Ba lớp tạo nên một trang web" },
      { p: "Hãy hình dung một trang giới thiệu kế hoạch học tập. <strong>HTML</strong> xác định đâu là tên kế hoạch, đâu là mô tả và đâu là liên kết. <strong>CSS</strong> quyết định màu chữ, phông chữ, khoảng cách và cách bố trí những nội dung ấy. <strong>JavaScript</strong> phụ trách hành vi, chẳng hạn cập nhật kết quả khi người dùng trả lời câu hỏi." },
      { p: "Việc tách ba vai trò giúp sửa trang thuận tiện hơn. Khi đổi câu giới thiệu, ta sửa nội dung HTML; khi đổi màu, ta sửa CSS; khi đổi cách tính kết quả, ta sửa JavaScript. Trong bài này, chưa cần viết CSS hoặc JavaScript: mục tiêu là nội dung có cấu trúc đúng. Giao diện mặc định của trình duyệt đủ để quan sát kết quả." },

      { h: "3. Tệp HTML và cách trình duyệt đọc trang" },
      { p: "Tài liệu HTML là tệp văn bản thuần, thường có phần mở rộng <code>.html</code> hoặc <code>.htm</code>. Có thể tạo tệp bằng trình soạn thảo văn bản, lưu lại rồi mở bằng trình duyệt. Không cần bước biên dịch như một số ngôn ngữ lập trình. Trang chủ của website tĩnh thường mang tên <code>index.html</code>; theo giáo trình, đây là tên mà nhiều máy chủ mặc định tìm khi người dùng truy cập một thư mục." },
      { p: "Khi đọc HTML, trình duyệt dựng một cây tài liệu gọi là <strong>DOM</strong>. Cây này thể hiện quan hệ chứa nhau giữa các phần tử. Ví dụ, phần nội dung <code>body</code> có thể chứa một đề mục và hai đoạn văn. Thụt đầu dòng làm quan hệ đó dễ đọc trong mã nguồn, nhưng không phải cách tạo khoảng cách trên trang." },

      { h: "4. Phân biệt thẻ và phần tử" },
      { p: "<strong>Thẻ</strong> là tên đặt trong cặp dấu <code>&lt;</code> và <code>&gt;</code>. Thẻ mở <code>&lt;p&gt;</code> bắt đầu một đoạn văn; thẻ đóng <code>&lt;/p&gt;</code> kết thúc đoạn văn đó. Cả thẻ mở, nội dung và thẻ đóng tạo thành một <strong>phần tử</strong>. Một số phần tử rỗng như <code>br</code> và <code>img</code> không có nội dung bên trong nên không có thẻ đóng." },
      { p: "Các phần tử có thể lồng nhau. Quy tắc cần nhớ là phần tử mở sau phải đóng trước. Trong ví dụ sau, <code>strong</code> đánh dấu phần quan trọng nằm bên trong đoạn văn; vì vậy phải đóng <code>strong</code> trước khi đóng <code>p</code>." },
      {
        code: `<p>Mục tiêu: <strong>hiểu cấu trúc trước</strong>.</p>`
      },
      { p: "HTML không phân biệt chữ hoa và chữ thường trong tên thẻ thông thường; giáo trình khuyến nghị dùng chữ thường để mã thống nhất, dễ kiểm tra." },

      { h: "5. Quan sát kết quả và học theo từng bước" },
      { p: "Trình duyệt thường gộp nhiều dấu cách, dấu tab và lần xuống dòng trong mã nguồn thành một dấu cách. Vì thế, gõ nhiều lần Enter không tạo ra nhiều đoạn văn trên trang. Hãy dùng các phần tử đúng chức năng; phần bố trí khoảng cách sẽ học bằng CSS." },
      {
        code: `<!-- Ghi chú dành cho người đọc mã -->
<p>Tôi học HTML từng bước.</p>`
      },
      { p: "Chú thích nằm giữa <code>&lt;!--</code> và <code>--&gt;</code> không xuất hiện trong nội dung hiển thị. Hãy thử thay câu văn, chạy lại ví dụ và so sánh kết quả. Khi lưu thành tệp trên máy, lưu tệp trước rồi tải lại trang." },
      { p: "Giáo trình dùng “HTML” để chỉ HTML hiện đại, phát triển từ mốc HTML5 và được duy trì dưới dạng Tiêu chuẩn sống. Ở giai đoạn đầu, hãy tập trung vào vai trò phần tử và quy tắc lồng nhau; bài H02 sẽ giải thích đầy đủ bộ khung tài liệu." },

      { h: "Trang đầu tiên: Góc tự học" },
      { p: "Ví dụ tự biên soạn dùng bộ khung đầy đủ để bạn có thể chạy ngay. Trong body, h1 là tên trang, hai phần tử p là hai đoạn văn; strong nằm trong p để đánh dấu mục tiêu quan trọng. Thử đổi tên trang trong h1 và câu giới thiệu, rồi chạy lại. Các thành phần head, meta và title sẽ được giải thích ở H02." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Cho rằng HTML tự thực hiện được thuật toán tính điểm.<br>HTML mô tả cấu trúc nội dung. Việc tính toán và cập nhật tương tác thuộc vai trò của JavaScript trong mô hình ba lớp được giáo trình trình bày." },
      { note: "Viết &lt;p&gt;&lt;strong&gt;Mục tiêu&lt;/p&gt;&lt;/strong&gt;.<br>Hai phần tử bị đóng chéo. Sửa thành &lt;p&gt;&lt;strong&gt;Mục tiêu&lt;/strong&gt;&lt;/p&gt; vì thẻ mở sau phải được đóng trước." },
      { note: "Nhấn Enter nhiều lần trong mã để tạo các đoạn văn riêng.<br>Trong văn bản HTML thông thường, khoảng trắng liên tiếp được gộp lại. Đặt mỗi ý thành một phần tử p; dùng CSS khi cần điều chỉnh khoảng cách." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• HTML đánh dấu cấu trúc và ý nghĩa của nội dung trang web." },
      { p: "• HTML, CSS và JavaScript lần lượt đảm nhiệm cấu trúc, trình bày và hành vi." },
      { p: "• Tệp HTML là văn bản thuần, có thể mở trực tiếp bằng trình duyệt." },
      { p: "• Phần tử thường gồm thẻ mở, nội dung và thẻ đóng; phần tử rỗng không có thẻ đóng." },
      { p: "• Lồng thẻ theo nguyên tắc mở sau, đóng trước và dùng chữ thường nhất quán." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Góc tự học</title>
</head>
<body>
  <h1>Góc tự học của tôi</h1>
  <p>Tôi bắt đầu tìm hiểu cách xây dựng một trang web.</p>
  <p>Mục tiêu hôm nay: <strong>phân biệt thẻ và phần tử</strong>.</p>
</body>
</html>`,
    exercise: `Tạo thẻ giới thiệu mục tiêu tự học`},

  {
    id: "H02",
    track: "HTML",
    level: "Cơ bản",
    title: "Cấu trúc tài liệu HTML",
    summary: "Xây dựng bộ khung đầy đủ, phân biệt head với body và sử dụng thuộc tính đúng cú pháp.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Viết được khung tài liệu gồm doctype, html, head và body." },
      { p: "• Đặt đúng charset, viewport và title trong head." },
      { p: "• Phân biệt được thuộc tính thông thường, thuộc tính logic, id và class." },
      { p: "• Dùng thực thể ký tự để hiển thị dấu đặc biệt trong ví dụ HTML." },
      { note: "Thời lượng gợi ý: 45 phút. Nên học trước: H01." },

      { h: "1. Bộ khung chung của tài liệu" },
      { p: "Một tài liệu HTML hiện đại có bốn thành phần cần nhận diện: khai báo kiểu tài liệu, phần tử gốc <code>html</code>, phần <code>head</code> và phần <code>body</code>. Dòng <code>&lt;!DOCTYPE html&gt;</code> đặt ở đầu tài liệu để trình duyệt xử lý theo HTML hiện đại. Theo giáo trình, bỏ khai báo này có thể khiến trình duyệt dùng chế độ tương thích cũ và hiển thị không như mong muốn." },
      { p: "<code>html</code> bao quanh toàn bộ tài liệu. Bên trong nó, <code>head</code> và <code>body</code> là hai phần cùng cấp; không đặt <code>body</code> bên trong <code>head</code>. Thụt đầu dòng theo quan hệ chứa nhau giúp dễ nhận ra chỗ mở, đóng thẻ và phát hiện lỗi." },
      {
        code: `<!DOCTYPE html>
<html lang="vi">
  <head>...</head>
  <body>...</body>
</html>`
      },

      { h: "2. Head chứa thông tin về trang, body chứa nội dung" },
      { p: "<strong>Siêu dữ liệu</strong> là thông tin mô tả bản thân tài liệu. <code>head</code> chứa các khai báo như bộ mã ký tự, tiêu đề trang, mô tả hoặc liên kết tới tệp CSS. Những khai báo này không xuất hiện như một đoạn văn trong vùng nội dung. <code>body</code> chứa những gì người đọc xem trên trang: đề mục, đoạn văn, hình ảnh và các thành phần khác." },
      { p: "Cần phân biệt <code>title</code> với <code>h1</code>. <code>title</code> nằm trong <code>head</code>, đặt tên cho thẻ trình duyệt; mỗi trang có một tiêu đề này. <code>h1</code> nằm trong <code>body</code>, thể hiện đề mục chính mà người đọc nhìn thấy. Hai nội dung có thể gần nhau nhưng không thay thế cho nhau." },

      { h: "3. Ngôn ngữ, bộ mã ký tự và khung nhìn" },
      { p: "Thuộc tính <code>lang=\"vi\"</code> trên phần tử <code>html</code> khai báo ngôn ngữ chính là tiếng Việt. Thông tin này giúp công cụ đọc màn hình và công cụ tìm kiếm nhận biết ngôn ngữ nội dung. Trong <code>head</code>, đặt <code>&lt;meta charset=\"utf-8\"&gt;</code> sớm để khai báo bộ mã ký tự sử dụng cho văn bản tiếng Việt có dấu." },
      { p: "Khai báo viewport cho trình duyệt biết khung nhìn nên theo chiều rộng thiết bị. Đây là bước chuẩn bị cho thiết kế thích nghi; nó không tự tạo toàn bộ bố cục trên điện thoại. Bố cục vẫn cần những quy tắc CSS phù hợp ở các bài sau." },
      {
        code: `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nhật ký học HTML</title>`
      },

      { h: "4. Viết thuộc tính đúng và phân biệt id với class" },
      { p: "<strong>Thuộc tính</strong> bổ sung thông tin cho phần tử và được viết trong thẻ mở. Dạng thông thường là <code>tên=\"giá trị\"</code>; các thuộc tính phân cách bằng dấu cách. Nên đặt giá trị trong dấu nháy kép, đặc biệt khi có khoảng trắng. Thuộc tính toàn cục dùng được trên hầu hết phần tử, chẳng hạn <code>id</code>, <code>class</code>, <code>lang</code> và <code>title</code>." },
      { p: "<code>id</code> xác định một phần tử duy nhất trong trang; không dùng cùng một giá trị cho nhiều phần tử. <code>class</code> nhóm nhiều phần tử để dùng chung cách trình bày hoặc hành vi. Hai đoạn văn có thể cùng <code>class=\"ghi-chu\"</code>, nhưng cần id khác nhau nếu đều có id." },
      { p: "<strong>Không dùng chuỗi “false” để tắt trạng thái ẩn.</strong> Viết <code>hidden</code> khiến nội dung bị ẩn; <code>hidden=\"false\"</code> cũng không làm nội dung hiện lại. Trong ví dụ này, muốn hiện phần tử, hãy bỏ thuộc tính <code>hidden</code>." },

      { h: "5. Lồng thẻ, chú thích và ký tự đặc biệt" },
      { p: "Phần tử mở bên trong phải đóng trước phần tử chứa nó. Chú thích HTML dùng cặp dấu <code>&lt;!--</code> và <code>--&gt;</code> để ghi lời giải thích không hiển thị. Cả hai kỹ thuật giúp mã dễ kiểm tra, nhưng chú thích không phải nơi tạo nội dung mà người học cần đọc trên trang." },
      { p: "Khi muốn trình bày chính cú pháp HTML, các dấu <code>&lt;</code>, <code>&gt;</code> và <code>&amp;</code> cần được biểu diễn bằng <strong>thực thể ký tự</strong>. Chẳng hạn, mã <code>&amp;lt;</code> hiển thị dấu nhỏ hơn; <code>&amp;gt;</code> hiển thị dấu lớn hơn; <code>&amp;amp;</code> hiển thị dấu và. Nhờ vậy trình duyệt phân biệt nội dung minh họa với thẻ thực sự." },
      {
        code:    `<p id="muc-tieu" class="ghi-chu">
  Thẻ &lt;p&gt; đánh dấu đoạn văn.
</p>`
      },

      { h: "6. Bổ sung siêu dữ liệu có mục đích" },
      { p: "<code>meta name=\"description\"</code> cung cấp mô tả ngắn về trang; thuộc tính <code>content</code> chứa nội dung mô tả. <code>link</code> có thể liên kết tệp CSS hoặc biểu tượng trang, còn <code>style</code> chứa CSS nội bộ. Giáo trình cũng giới thiệu <code>script</code> để nạp JavaScript; ở bài này chưa cần sử dụng mã tương tác." },
      { p: "Không cần thêm mọi loại siêu dữ liệu ngay từ đầu. Hãy bảo đảm bộ khung đúng, title rõ nghĩa và nội dung body phù hợp. Trong khung xem thử, title không trở thành tiêu đề trên trang vì đó là chức năng của h1. Khi mở tài liệu riêng bằng trình duyệt, bạn có thể kiểm tra tên tab để thấy tác dụng của title." },

      { h: "Một tài liệu có đủ thông tin cơ bản" },
      { p: "Ví dụ tự biên soạn phân tách rõ hai phần: head khai báo ngôn ngữ ký tự, viewport, title và mô tả; body chứa nội dung nhìn thấy. lang nằm trên html, id xác định mục tiêu duy nhất, class đặt tên nhóm ghi chú. Thử đổi title và h1 thành hai câu khác nhau; khi mở tệp riêng, tên tab và đề mục trang sẽ khác nhau." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Đặt h1 trong head và dùng title làm tiêu đề nội dung.<br>title thuộc head để đặt tên tab trình duyệt. Đặt h1 trong body để người đọc nhìn thấy đề mục chính của trang." },
      { note: "Gán id=\"ghi-chu\" cho hai đoạn văn để chúng cùng một nhóm.<br>id phải duy nhất trong trang. Nếu muốn nhóm các phần tử, dùng cùng class=\"ghi-chu\" và chỉ thêm id riêng khi cần xác định từng phần tử." },
      { note: "Viết &lt;p hidden=\"false\"&gt;Nội dung&lt;/p&gt; rồi chờ nội dung hiện ra.<br>hidden là thuộc tính logic nên sự hiện diện đã bật trạng thái ẩn. Bỏ hẳn hidden để phần tử trở lại trạng thái hiển thị thông thường." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• Khai báo doctype đứng đầu; html chứa head và body." },
      { p: "• head chứa siêu dữ liệu, body chứa nội dung hiển thị." },
      { p: "• lang, charset và viewport chuẩn bị ngôn ngữ, mã ký tự và khung nhìn phù hợp." },
      { p: "• Thuộc tính đặt trong thẻ mở; id duy nhất còn class có thể dùng chung." },
      { p: "• Dùng thực thể ký tự khi cần trình bày cú pháp HTML như văn bản." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nhật ký học HTML — Buổi 2</title>
  <meta name="description" content="Ghi lại mục tiêu và tiến độ học cấu trúc tài liệu HTML.">
</head>
<body>
  <h1>Nhật ký học tập của tôi</h1>
  <p id="muc-tieu" class="ghi-chu">Mục tiêu: viết một tài liệu có cấu trúc đầy đủ.</p>
  <p class="ghi-chu">Thẻ &lt;p&gt; được dùng để đánh dấu đoạn văn.</p>
  <!-- Nhớ kiểm tra thứ tự đóng thẻ trước khi lưu -->
</body>
</html>`,

    exercise: `Hoàn thiện hồ sơ của một trang tự học`},
  {
    id: "H03",
    track: "HTML",
    level: "Cơ bản",
    title: "Tiêu đề và đoạn văn",
    summary: "Tổ chức văn bản có thứ bậc, ngắt đoạn hợp lý và chọn thẻ theo ý nghĩa của nội dung.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Xây dựng được hệ thống h1, h2, h3 theo thứ bậc của bài viết." },
      { p: "• Chọn đúng p, br, hr và pre cho từng loại nội dung văn bản." },
      { p: "• Phân biệt được nhấn mạnh ngữ nghĩa với thay đổi hình thức đơn thuần." },
      { p: "• Trình bày được mã nguồn, thao tác bàn phím, công thức và ngày tháng bằng phần tử phù hợp." },
      { note: "Thời lượng gợi ý: 45 phút. Nên học trước: H01, H02." },

      { h: "1. Đề mục là bản đồ của nội dung" },
      { p: "HTML cung cấp sáu cấp đề mục từ <code>h1</code> đến <code>h6</code>; <code>h1</code> có cấp cao nhất. Đề mục giúp người đọc nhận ra chủ đề và cấu trúc bài viết trước khi đọc chi tiết. Công cụ tìm kiếm và phần mềm đọc màn hình cũng dựa vào thứ bậc này để hiểu bố cục tài liệu." },
      { p: "Theo hướng dẫn của giáo trình, mỗi trang nên có một <code>h1</code> cho chủ đề chính. Các phần lớn dùng <code>h2</code>, những phần nhỏ bên trong dùng <code>h3</code>, rồi tiếp tục khi cần. Không nhảy từ <code>h2</code> sang <code>h4</code> chỉ vì muốn cỡ chữ nhỏ hơn. Kích thước hiển thị là công việc của CSS, còn cấp đề mục thể hiện quan hệ nội dung." },
      {
        code: `<h1>Kế hoạch tự học HTML</h1>
<h2>Tuần đầu tiên</h2>
<h3>Buổi 1: Làm quen với thẻ</h3>`
      },
      { h: "2. Đoạn văn, ngắt dòng và chuyển chủ đề" },
      { p: "<code>p</code> đánh dấu một đoạn văn có ý tương đối trọn vẹn. Khi chuyển sang một ý khác, hãy tạo một phần tử <code>p</code> mới. Thẻ <code>br</code> chỉ ngắt dòng bên trong cùng một đoạn, phù hợp với các dòng địa chỉ hoặc một khổ thơ. Nó không nên thay thế toàn bộ cấu trúc đoạn văn bằng những lần xuống dòng liên tiếp." },
      { p: "<code>hr</code> tạo sự phân cách theo chủ đề, thường được trình duyệt biểu diễn bằng đường ngang. Hãy dùng khi nội dung chuyển sang phần có ý nghĩa tách biệt, không phải chỉ để thêm đồ trang trí. Cả <code>br</code> và <code>hr</code> đều là phần tử rỗng." },
      {
        code: `<p>Địa điểm tự học:<br>Phòng đọc<br>Khu học tập</p>
<hr>
<p>Chủ đề tiếp theo: cách tạo liên kết.</p>`
      },

      { h: "3. Nhấn mạnh theo ý nghĩa của câu" },
      { p: "<code>strong</code> đánh dấu nội dung quan trọng, chẳng hạn một thời hạn cần ghi nhớ. <code>em</code> biểu đạt sự nhấn mạnh trong câu. Trình duyệt thường hiển thị chúng bằng chữ đậm và chữ nghiêng, nhưng lý do lựa chọn là ý nghĩa của nội dung. Không nên chọn thẻ chỉ vì một kiểu chữ trông đẹp hơn." },
      { p: "Giáo trình phân biệt hai thẻ trên với <code>b</code> và <code>i</code>, vốn không mang cùng ý nghĩa nhấn mạnh. <code>mark</code> đánh dấu phần cần chú ý trong ngữ cảnh; <code>small</code> biểu thị chú thích nhỏ. Khi mô tả thay đổi văn bản, <code>del</code> đánh dấu nội dung bị xóa và <code>ins</code> đánh dấu nội dung được thêm. Ví dụ, một kế hoạch đổi thời lượng có thể biểu diễn cả giá trị cũ lẫn giá trị mới để người đọc hiểu sự điều chỉnh." },

      { h: "4. Công thức, chữ viết tắt và hướng dẫn thao tác" },
      { p: "<code>sub</code> tạo chỉ số dưới, còn <code>sup</code> tạo chỉ số trên. Hai phần tử này phù hợp với những nội dung như công thức H₂O hoặc biểu thức x². Chúng giúp viết đúng dạng biểu diễn mà không phải thay cả đoạn văn bằng một hình ảnh." },
      { p: "<code>abbr</code> đánh dấu một chữ viết tắt; thuộc tính <code>title</code> ghi dạng đầy đủ. <code>code</code> đánh dấu một đoạn mã, <code>kbd</code> biểu thị thao tác bàn phím của người dùng và <code>samp</code> biểu thị đầu ra của máy tính. Cần chọn theo vai trò của từng mẩu văn bản, ngay cả khi trình duyệt có thể hiển thị chúng bằng phông chữ tương tự." },
      {
        code: `<p>H<sub>2</sub>O và x<sup>2</sup></p>
<p>Nhấn <kbd>Ctrl</kbd> + <kbd>S</kbd> để lưu.</p>
<p>Thử viết <code>&lt;p&gt;Xin chào&lt;/p&gt;</code>.</p>`
      },

      { h: "5. Giữ định dạng, trích dẫn và ghi ngày tháng" },
      { p: "<code>pre</code> giữ khoảng trắng và dấu xuống dòng như trong mã nguồn. Khi trình bày một khối mã, có thể đặt <code>code</code> bên trong <code>pre</code>: lớp ngoài giữ định dạng, lớp trong cho biết đây là mã nguồn. Vẫn phải dùng thực thể ký tự khi cần hiển thị dấu ngoặc của thẻ HTML, nếu không trình duyệt có thể hiểu chúng thành phần tử thực." },
      { p: "<code>q</code> dùng cho trích dẫn ngắn trong dòng; <code>blockquote</code> dùng cho phần trích dẫn thành khối; <code>cite</code> đánh dấu tên nguồn trích dẫn. Chỉ dùng các thẻ này khi nội dung thật sự là trích dẫn và nêu nguồn phù hợp. Những câu nhắc nhở do bạn tự viết không tự động trở thành trích dẫn từ giáo trình." },
      { p: "<code>time</code> biểu thị ngày giờ với thuộc tính <code>datetime</code> theo dạng máy đọc được, chẳng hạn <code>2026-10-22</code>. <code>span</code> chỉ nhóm một đoạn văn bản trong dòng để phục vụ định dạng, không bổ sung ý nghĩa chuyên biệt như các thẻ trên." },

      { h: "Bản hướng dẫn tự học có cấu trúc" },
      { p: "Ví dụ tự biên soạn dùng h1 cho chủ đề và h2, h3 cho các mức nội dung. p phân chia các ý; strong nhấn mạnh mục tiêu, em nhấn vào cách học, time ghi ngày, còn pre kết hợp code trình bày mẫu HTML mà không biến mẫu thành thẻ đang chạy. Các mốc thời gian chỉ là dữ liệu thực hành." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Dùng h1, rồi nhảy ngay đến h4 để có chữ nhỏ.<br>Chọn cấp đề mục theo cấu trúc: phần lớn h2, mục nhỏ thuộc phần đó h3. Muốn đổi cỡ chữ thì dùng CSS, không làm sai thứ bậc đề mục." },
      { note: "Nối tất cả các ý thành một p rồi chèn nhiều br để giả lập các đoạn.<br>Dùng mỗi p cho một ý hoặc đoạn văn. Chỉ dùng br khi cần xuống dòng trong cùng một nội dung như địa chỉ hay khổ thơ." },
      { note: "Đặt nguyên &lt;p&gt;Ví dụ&lt;/p&gt; vào khối pre để hiển thị mã.<br>pre giữ khoảng trắng nhưng không tự vô hiệu hóa cú pháp HTML. Viết &amp;lt;p&amp;gt;Ví dụ&amp;lt;/p&amp;gt; bên trong pre kết hợp code để dấu ngoặc được hiển thị đúng." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• Các cấp h1–h6 thể hiện thứ bậc nội dung, không chỉ cỡ chữ." },
      { p: "• p tạo đoạn văn; br ngắt dòng trong đoạn; hr phân cách chủ đề." },
      { p: "• strong và em thể hiện tầm quan trọng hoặc sự nhấn mạnh của nội dung." },
      { p: "• pre giữ định dạng; code đánh dấu mã; kbd đánh dấu thao tác bàn phím." },
      { p: "• Dùng sub, sup, abbr và time khi cần biểu diễn công thức, chữ viết tắt hoặc ngày giờ." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kế hoạch tự học — Văn bản HTML</title>
</head>
<body>
  <h1>Kế hoạch tự học HTML</h1>
  <p>Mục tiêu: <strong>viết nội dung có cấu trúc rõ ràng</strong>.</p>
  <h2>Tuần đầu tiên</h2>
  <h3>Buổi 3: Trình bày văn bản</h3>
  <p>Hãy <em>tự giải thích</em> vai trò mỗi thẻ trước khi sử dụng.</p>
  <p>Hoàn thành bài mẫu vào <time datetime="2026-10-22">22/10/2026</time>.</p>
  <h2>Thao tác thực hành</h2>
  <p>Nhấn <kbd>Ctrl</kbd> + <kbd>S</kbd> để lưu tệp trên máy.</p>
  <pre><code>&lt;h1&gt;Góc tự học&lt;/h1&gt;
&lt;p&gt;Tôi học HTML mỗi ngày.&lt;/p&gt;</code></pre>
  <hr>
  <p><small>Đây là nội dung minh họa được biên soạn cho bài thực hành.</small></p>
</body>
</html>`,

    exercise: `Biên soạn một thông báo tự học`},

  {
    id: "H04",
    track: "HTML",
    level: "Cơ bản",
    title: "Liên kết và hình ảnh",
    summary: "Tạo đường đi rõ ràng giữa nội dung và chèn hình ảnh có mô tả, chú thích cùng đường dẫn đúng.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Tạo được liên kết bằng a và chọn đường dẫn phù hợp với vị trí tệp." },
      { p: "• Tạo được mục lục nội trang bằng href kết hợp id duy nhất." },
      { p: "• Chèn được ảnh với src, alt, width và height, phân biệt alt với chú thích ảnh." },
      { p: "• Giải thích được vai trò của figure, figcaption và nguyên tắc cơ bản của ảnh thích nghi." },
      { note: "Thời lượng gợi ý: 50 phút. Nên học trước: H01, H02, H03." },

      { h: "1. Liên kết gồm điểm nhấn và địa chỉ đích" },
      { p: "Liên kết siêu văn bản cho phép người đọc chuyển tới tài liệu hoặc vị trí khác. Phần tử <code>a</code> tạo liên kết; thuộc tính <code>href</code> chứa địa chỉ đích. Nội dung giữa thẻ mở và thẻ đóng là phần người dùng nhấn vào, có thể là văn bản hoặc hình ảnh." },
      { p: "Tên liên kết cần diễn đạt được điểm đến. “Xem kế hoạch học tập” rõ nghĩa hơn “Bấm vào đây”, đặc biệt khi người dùng đọc riêng danh sách liên kết bằng công cụ hỗ trợ. Một dòng chữ màu xanh chưa tự trở thành liên kết nếu thiếu cấu trúc phù hợp." },
      {
        code: `<a href="#ke-hoach">Xem kế hoạch học tập</a>
<h2 id="ke-hoach">Kế hoạch học tập</h2>`
      },

      { h: "2. Đọc đường dẫn theo vị trí của trang" },
      { p: "<strong>Đường dẫn tuyệt đối</strong> là địa chỉ đầy đủ, thường dùng để trỏ tới website khác. <strong>Đường dẫn tương đối</strong> được hiểu từ vị trí tài liệu hiện tại: <code>lien-he.html</code> là tệp cùng thư mục, <code>bai-hoc/html.html</code> là tệp trong thư mục con, còn <code>../index.html</code> lùi lên một thư mục cha rồi tìm tệp." },
      { p: "Theo giáo trình, liên kết giữa các trang trong cùng website nên dùng đường dẫn tương đối để thuận tiện khi di chuyển website. Không chỉ nhớ tên tệp: cần xác định cả thư mục chứa trang đang viết và thư mục chứa tài nguyên đích. Quy tắc đọc đường dẫn cũng áp dụng khi khai báo địa chỉ ảnh trong <code>src</code>." },

      { h: "3. Liên kết nội trang và các lựa chọn mở đích" },
      { p: "Liên kết nội trang dùng dấu <code>#</code> đi kèm giá trị <code>id</code> của phần tử đích. Ví dụ <code>href=\"#ke-hoach\"</code> phải khớp với <code>id=\"ke-hoach\"</code>. id cần duy nhất để xác định đúng nơi chuyển tới. Đây là cách tạo mục lục nhanh hoặc đường dẫn về đầu trang mà không cần JavaScript." },
      { p: "Mặc định, liên kết mở trong tab hiện tại. <code>target=\"_blank\"</code> yêu cầu tab mới; giáo trình khuyến nghị đi kèm <code>rel=\"noopener noreferrer\"</code>. <code>download</code> yêu cầu tải tệp; <code>mailto:</code> hướng tới chương trình gửi thư, còn <code>tel:</code> hướng tới chức năng gọi điện phù hợp trên thiết bị." },
      { p: "Ví dụ chạy trong bài chỉ dùng liên kết nội trang. Các chức năng mở tab, tải tệp hoặc gọi ứng dụng không được dùng trong khung xem thử này." },

      { h: "4. Chèn ảnh và viết văn bản thay thế" },
      { p: "<code>img</code> là phần tử rỗng. Nó tham chiếu tới tệp ảnh thông qua <code>src</code>; ảnh không được lưu sẵn bên trong mã HTML chỉ vì có thẻ này. Nếu địa chỉ sai hoặc thiếu tệp, hình không thể hiển thị đúng." },
      { p: "<code>alt</code> là văn bản thay thế diễn đạt nội dung hoặc chức năng của ảnh. Nó hỗ trợ người không nhìn được ảnh và được dùng khi ảnh không tải được. Ảnh chỉ trang trí có thể dùng <code>alt=\"\"</code>. Đừng dùng tên tệp thay cho mô tả; thuộc tính <code>title</code> chỉ tạo gợi ý khi trỏ chuột, không thay thế alt." },
      { p: "Khai báo <code>width</code>, <code>height</code> theo kích thước ảnh giúp dành sẵn chỗ. <code>loading=\"lazy\"</code> phù hợp với ảnh ở phía dưới, không dùng cho ảnh quan trọng ngay đầu trang." },
      {
        code: `<img src="assets/learning-card.svg"
alt="Cửa sổ mã nguồn và thông điệp Học từ nền tảng"
width="640" height="320">`
      },

      { h: "5. Chú thích ảnh và chuẩn bị cho màn hình nhỏ" },
      { p: "Khi hình có lời chú thích nhìn thấy, dùng <code>figure</code> để nhóm hình với <code>figcaption</code>. Chú thích giải thích vai trò hình trong bài viết; alt cung cấp nội dung thay thế cho chính hình. Hai thông tin có thể bổ sung nhau, không cần lặp nguyên văn." },
      {
        code: `<figure>
  <img src="assets/learning-card.svg"
       alt="Minh họa cửa sổ mã nguồn HTML và CSS"
       width="640" height="320">
  <figcaption>Hình minh họa cho lộ trình tự học.</figcaption>
</figure>`
      },

      { h: "6. Kiểm tra liên kết ảnh và nhận biết bản đồ ảnh" },
      { p: "Một hình có thể trở thành liên kết bằng cách đặt <code>img</code> bên trong <code>a</code>. Khi đó, văn bản thay thế cần giúp người đọc hiểu tác dụng của liên kết. Hãy kiểm tra đích đến, độ rõ của tên liên kết, tệp ảnh và mô tả trước khi hoàn thành trang." },
      { p: "Bản đồ ảnh chia một ảnh thành nhiều vùng liên kết bằng <code>img</code> có <code>usemap</code>, <code>map</code> có tên tương ứng và các <code>area</code>. Mỗi vùng khai báo hình dạng, tọa độ, đích và alt. Giáo trình lưu ý tọa độ pixel cố định gây khó khi ảnh thu nhỏ; bài này ưu tiên liên kết thông thường và hình có chú thích để luyện nền tảng." },

      { h: "Mục lục và hình minh họa của trang tự học" },
      { p: "Ví dụ tự biên soạn chỉ sử dụng ảnh cục bộ có sẵn và các điểm đến ngay trong tài liệu. href bắt đầu bằng # khớp với id ở phần đích; figure ghép hình với chú thích. CSS duy nhất giúp ảnh không tràn khỏi vùng chứa. Thử đổi id của mục kế hoạch mà giữ nguyên href để quan sát vì sao hai giá trị cần khớp, rồi sửa lại." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Viết &lt;a src=\"#ke-hoach\"&gt;Kế hoạch&lt;/a&gt;.<br>a dùng href để xác định đích liên kết. src là thuộc tính tham chiếu tài nguyên của những phần tử như img; sửa thành href=\"#ke-hoach\" và kiểm tra có id tương ứng." },
      { note: "Bỏ alt hoặc dùng title thay cho alt của ảnh có nội dung.<br>Viết alt diễn đạt nội dung hay chức năng của ảnh. title là gợi ý bổ sung và không thay thế văn bản thay thế; chỉ ảnh thuần trang trí mới dùng alt rỗng." },
      { note: "Đặt đường dẫn assets/learning-card.svg trong một trang ở thư mục con mà không kiểm tra vị trí thực tế.<br>Đường dẫn tương đối bắt đầu từ vị trí của tài liệu. Nếu assets nằm ở thư mục cha, cần ../assets/learning-card.svg; nếu ở cùng cấp với trang thì dùng assets/learning-card.svg." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• a tạo liên kết và href chỉ đích; tên liên kết cần diễn đạt điểm đến." },
      { p: "• Đường dẫn tương đối phải được đọc từ vị trí của trang hiện tại." },
      { p: "• Liên kết nội trang dùng #id và phải khớp với một id duy nhất." },
      { p: "• img cần src đúng và alt phù hợp; width, height giúp dành sẵn chỗ cho ảnh." },
      { p: "• figure, figcaption ghép ảnh với chú thích; CSS giới hạn chiều rộng giúp ảnh thích nghi." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khám phá lộ trình tự học</title>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>
  <h1 id="dau-trang">Khám phá lộ trình tự học</h1>
  <p>
    <a href="#hinh-minh-hoa">Xem hình minh họa</a> |
    <a href="#ke-hoach">Xem kế hoạch học tập</a>
  </p>
  <h2 id="hinh-minh-hoa">Học từ nền tảng</h2>
  <figure>
    <img src="assets/learning-card.svg"
         alt="Cửa sổ mã nguồn và thông điệp Học từ nền tảng"
         width="640" height="320">
    <figcaption>Hình minh họa cho hành trình học HTML và CSS.</figcaption>
  </figure>
  <h2 id="ke-hoach">Kế hoạch học tập</h2>
  <p>Bắt đầu với cấu trúc HTML, sau đó luyện trình bày bằng CSS.</p>
  <p>Mỗi buổi, hãy đọc lý thuyết, sửa ví dụ và tự kiểm tra bài làm.</p>
  <p><a href="#dau-trang">Về đầu trang</a></p>
</body>
</html>`,

    exercise: `Xây dựng một trang giới thiệu có mục lục và ảnh`
  },

  {
    id: "H05",
    track: "HTML",
    level: "Cơ bản",
    title: "Danh sách và bảng",
    summary: "Tổ chức thông tin bằng danh sách đúng loại và bảng dữ liệu có hàng, cột rõ ràng.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Phân biệt và sử dụng được danh sách không thứ tự, có thứ tự và danh sách mô tả." },
      { p: "• Tạo được danh sách lồng nhau với danh sách con nằm trong mục cha." },
      { p: "• Viết được bảng dữ liệu có caption, nhóm hàng và ô tiêu đề được gắn scope." },
      { p: "• Giải thích được colspan, rowspan và kiểm tra số ô khi gộp ô." },
      { note: "Thời lượng gợi ý: 55 phút. Nên học trước: H01, H02, H03." },

      { h: "1. Chọn cấu trúc theo quan hệ của thông tin" },
      { p: "Trước khi viết thẻ, hãy hỏi: các nội dung chỉ cần liệt kê, cần làm theo trình tự, hay phải đối chiếu theo hàng và cột? Danh sách phù hợp với tài liệu cần chuẩn bị hoặc các bước thực hành. Bảng phù hợp với lịch học, kết quả học tập và dữ liệu có nhiều thuộc tính. Chọn đúng cấu trúc giúp người đọc hiểu mối quan hệ giữa các mục." },
      { p: "Danh sách không thứ tự dùng <code>ul</code>; danh sách có thứ tự dùng <code>ol</code>. Mỗi mục đều nằm trong <code>li</code>. Dùng <code>ol</code> khi đổi thứ tự có thể làm thay đổi ý nghĩa, chẳng hạn các bước tạo tệp rồi lưu và mở tệp. Không gõ thủ công dấu đầu dòng hoặc số trước từng đoạn văn, vì như vậy chưa tạo thành danh sách HTML." },
      {
        code: `<ul>
  <li>Trình soạn thảo</li>
  <li>Trình duyệt</li>
</ul>
<ol>
  <li>Tạo tệp HTML</li>
  <li>Lưu và mở tệp</li>
</ol>`
      },

      { h: "2. Danh sách có thứ tự, lồng nhau và mô tả" },
      { p: "Với <code>ol</code>, thuộc tính <code>start</code> đặt số bắt đầu; <code>reversed</code> chuyển sang đánh số giảm dần; <code>type</code> chọn kiểu số hoặc chữ. Thuộc tính <code>value</code> trên một <code>li</code> đặt lại số thứ tự tại mục đó. Ví dụ <code>start=\"3\"</code> cho phép tiếp tục một quy trình từ bước 3 mà không sửa nội dung từng mục." },
      { p: "Danh sách con phải nằm bên trong <code>li</code> của mục cha, trước thẻ đóng của mục cha. Cách viết này biểu đạt quan hệ nội dung lớn – nội dung nhỏ. Không đặt danh sách con giữa hai mục như một phần tử ngang hàng với chúng." },
      { p: "Danh sách mô tả dùng <code>dl</code> để bao nhóm, <code>dt</code> cho thuật ngữ và <code>dd</code> cho phần giải thích. Đây là lựa chọn phù hợp cho bảng thuật ngữ HTML/CSS; không cần ép mọi cặp thuật ngữ thành bảng nhiều cột." },
      {
        code: `<ul>
  <li>HTML
    <ol start="3">
      <li>Danh sách</li>
      <li>Bảng</li>
    </ol>
  </li>
</ul>
<dl>
  <dt>Ô tiêu đề</dt>
  <dd>Ô cho biết ý nghĩa của hàng hoặc cột.</dd>
</dl>`
      },

      { h: "3. Xây dựng bảng từ ngoài vào trong" },
      { p: "<code>table</code> bao toàn bộ bảng. Đặt <code>caption</code> ở đầu bên trong bảng để nêu rõ bảng nói về điều gì. Mỗi <code>tr</code> là một hàng; bên trong hàng, <code>th</code> là ô tiêu đề và <code>td</code> là ô dữ liệu. Không dùng <code>td</code> rồi chỉ làm chữ đậm để thay cho ô tiêu đề: hình thức giống nhau chưa thể hiện đúng vai trò." },
      { p: "<code>thead</code> nhóm các hàng tiêu đề; <code>tbody</code> nhóm dữ liệu chính; <code>tfoot</code> nhóm phần tổng kết khi cần. Các nhóm này làm cấu trúc dễ đọc, dễ kiểm tra và dễ định dạng. Khi bảng đơn giản có ba cột, mỗi hàng dữ liệu thường có ba ô; cần đếm cả phần diện tích do ô gộp chiếm." },
      { p: "Gắn <code>scope=\"col\"</code> cho tiêu đề cột và <code>scope=\"row\"</code> cho tiêu đề hàng. Thuộc tính này giúp phần mềm đọc màn hình liên hệ giá trị với đúng nhãn, dù giao diện nhìn bằng mắt gần như không đổi." },
      {
        code: `<table>
  <caption>Thời lượng ôn tập</caption>
  <thead>
    <tr><th scope="col">Nội dung</th><th scope="col">Phút</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Danh sách</th><td>20</td></tr>
    <tr><th scope="row">Bảng</th><td>30</td></tr>
  </tbody>
</table>`
      },

      { h: "4. Gộp ô nhưng vẫn giữ đúng lưới dữ liệu" },
      { p: "<code>colspan</code> cho một ô chiếm nhiều cột, còn <code>rowspan</code> cho một ô chiếm nhiều hàng. Hãy tưởng tượng bảng là một lưới: khi ô đầu chiếm hai vị trí, các vị trí đó không cần thêm ô riêng. Nếu vẫn viết đủ số ô như trước khi gộp, trình duyệt phải bố trí thêm cột hoặc làm lệch các hàng." },
      { p: "Ví dụ một bảng có ba cột. Trong hàng tổng kết, <code>&lt;th colspan=\"2\"&gt;Tổng thời lượng&lt;/th&gt;</code> đã chiếm hai cột đầu, nên chỉ cần thêm một <code>td</code> ở cột cuối. Với <code>rowspan=\"2\"</code>, hàng tiếp theo phải bỏ ô ở vị trí đã được ô phía trên chiếm." },
      { p: "Chỉ gộp ô khi quan hệ dữ liệu cần đến nó. Trước khi trang trí, hãy tự vẽ lưới ba cột trên giấy và đánh dấu từng vị trí bị chiếm; cách này giúp phát hiện lỗi thừa ô nhanh hơn nhìn giao diện đã định dạng." },

      { h: "5. Trình bày rõ ràng và tự kiểm tra" },
      { p: "Theo tài liệu, bảng dùng để thể hiện dữ liệu, không dùng để chia bố cục cả trang. Màu nền, đường viền, khoảng cách trong ô và căn chữ thuộc phần CSS. Các thuộc tính trình bày cũ như <code>border</code>, <code>cellpadding</code>, <code>cellspacing</code> trên thẻ bảng không nên dùng. Quy tắc <code>border-collapse: collapse</code> giúp đường viền các ô liền nhau được gộp lại." },
      { p: "Với bảng rộng, có thể bọc bằng một <code>div</code> có <code>overflow-x: auto</code> để người xem cuộn ngang. Cần giữ nguyên cấu trúc tiêu đề và dữ liệu khi bổ sung phần trình bày. Thanh điều hướng cũng có thể là một danh sách liên kết đặt trong <code>nav</code>; danh sách không chỉ dùng cho nội dung bài học." },
      { p: "Khi kiểm tra, hãy đọc bảng theo từng hàng, đối chiếu tiêu đề cột, rồi kiểm tra danh sách con nằm đúng trong mục cha. Nếu bỏ CSS mà thông tin vẫn có thứ tự và ý nghĩa rõ ràng, cấu trúc đã đi đúng hướng." },

      { h: "Một kế hoạch học có danh sách và bảng dữ liệu" },
      { p: "Danh sách đầu tiên liệt kê đồ dùng; danh sách có thứ tự mô tả tiến trình. Bảng so sánh thời lượng từng nội dung, có caption, tiêu đề hàng/cột và hàng tổng kết. Hãy đổi thời lượng một bài rồi tự cập nhật tổng; HTML không tự tính tổng số." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Đặt danh sách con sau &lt;/li&gt; của mục cha.<br>Chuyển toàn bộ ul hoặc ol con vào bên trong li cha, trước &lt;/li&gt;. Như vậy cấu trúc thể hiện rõ mục con thuộc nội dung nào." },
      { note: "Ô đã có colspan=\"2\" nhưng vẫn giữ nguyên mọi ô khác của hàng.<br>Đếm số cột mà từng ô chiếm. Trong bảng ba cột, ô chiếm hai cột chỉ cần thêm một ô; bỏ ô thừa để tránh lệch lưới." },
      { note: "Dùng bảng để chia hai cột bố cục, hoặc dùng td in đậm thay th.<br>Dùng CSS cho bố cục trang. Trong bảng dữ liệu, sử dụng th, scope và caption để thể hiện ý nghĩa, sau đó mới định dạng bằng CSS." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• ul liệt kê không cần thứ tự; ol mô tả thứ tự; dl kết nối thuật ngữ với lời giải thích." },
      { p: "• Danh sách con nằm trong li của mục cha." },
      { p: "• table chứa caption, các nhóm hàng, tr và các ô th/td." },
      { p: "• scope làm rõ tiêu đề hàng/cột; colspan và rowspan làm thay đổi số vị trí ô chiếm." },
      { p: "• Dùng CSS để trình bày; bảng rộng có thể đặt trong vùng cuộn ngang." },

    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kế hoạch tự học HTML</title>

<style>
body { margin: 0; padding: 24px; color: #183144; background: #f6f9fb; font-family: Arial, sans-serif; line-height: 1.6; }
main { max-width: 760px; margin: auto; }
h1, h2 { color: #164b5a; }
.table-scroll { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; background: white; }
caption { text-align: left; font-weight: bold; padding: 10px 0; }
th, td { padding: 10px; border: 1px solid #9eb4bf; text-align: left; }
thead, tfoot { background: #e2eff2; }
dt { font-weight: bold; }
dd { margin-bottom: 8px; }
</style>
</head>
<body>
  <main>
    <h1>Kế hoạch tự học HTML</h1>
    <h2>Chuẩn bị</h2>
    <ul>
      <li>Trình soạn thảo văn bản</li>
      <li>Trình duyệt để kiểm tra</li>
    </ul>
    <h2>Các bước học</h2>
    <ol>
      <li>Đọc lý thuyết và quan sát ví dụ.</li>
      <li>Tự viết lại mã HTML.
        <ul>
          <li>Kiểm tra danh sách lồng nhau.</li>
          <li>Đếm số ô của từng hàng.</li>
        </ul>
      </li>
      <li>Đối chiếu kết quả với yêu cầu.</li>
    </ol>
    <h2>Phân bổ thời lượng</h2>
    <div class="table-scroll">
      <table>
        <caption>Kế hoạch cho một buổi học</caption>
        <thead>
          <tr>
            <th scope="col">Nội dung</th>
            <th scope="col">Hoạt động</th>
            <th scope="col">Thời lượng</th>
          </tr>
        </thead>
        <tbody>
          <tr><th scope="row">Danh sách</th><td>Viết danh sách lồng nhau</td><td>20 phút</td></tr>
          <tr><th scope="row">Bảng dữ liệu</th><td>Tạo bảng học tập</td><td>30 phút</td></tr>
        </tbody>
        <tfoot>
          <tr><th colspan="2" scope="row">Tổng thời lượng</th><td>50 phút</td></tr>
        </tfoot>
      </table>
    </div>
    <h2>Thuật ngữ</h2>
    <dl>
      <dt>caption</dt><dd>Tiêu đề mô tả nội dung toàn bảng.</dd>
      <dt>scope</dt><dd>Chỉ ra tiêu đề áp dụng cho hàng hay cột.</dd>
    </dl>
  </main>
</body>
</html>`,

    exercise: `Lập kế hoạch ôn tập cho ba nội dung`
  },

  {
    id: "H06",
    track: "HTML",
    level: "Trung bình",
    title: "Biểu mẫu HTML",
    summary: "Thiết kế biểu mẫu có nhãn rõ ràng, kiểu nhập phù hợp và ràng buộc dữ liệu cơ bản.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Viết được form và giải thích vai trò của action, method, name, id." },
      { p: "• Gắn nhãn cho ô nhập, nhóm trường bằng fieldset và chọn đúng kiểu điều khiển." },
      { p: "• Áp dụng được required, giới hạn độ dài, khoảng giá trị và pattern vào yêu cầu cụ thể." },
      { p: "• Phân biệt kiểm tra trong trình duyệt với xử lý, kiểm tra và lưu dữ liệu trên máy chủ." },
      { note: "Thời lượng gợi ý: 70 phút. Nên học trước: H01, H02, H03." },

      { h: "1. Biểu mẫu nhận dữ liệu như thế nào?" },
      { p: "<code>form</code> chứa các điều khiển nhập liệu. Khi gửi, trình duyệt lấy dữ liệu từ những trường được gửi cùng biểu mẫu, trong đó <code>name</code> là tên dùng nhận diện dữ liệu. <code>action</code> chỉ địa chỉ tiếp nhận; <code>method</code> chọn phương thức gửi. Giao diện có ô nhập chưa đồng nghĩa với việc đã có chương trình lưu thông tin." },
      { p: "<code>get</code> đưa dữ liệu vào chuỗi truy vấn trên URL, phù hợp tìm kiếm hoặc lọc cần chia sẻ địa chỉ. <code>post</code> đặt dữ liệu trong thân yêu cầu, phù hợp đăng ký hoặc thao tác làm thay đổi dữ liệu. POST không tự mã hóa dữ liệu; tài liệu nhấn mạnh vai trò của HTTPS. Tải tệp cần POST cùng <code>enctype=\"multipart/form-data\"</code>." },
      { p: "Ví dụ trong bài chỉ phục vụ học cấu trúc. Khung xem thử khóa gửi biểu mẫu và không có máy chủ lưu đăng ký; hãy nhập thử dữ liệu và quan sát các điều khiển, không chờ thông báo đăng ký thành công." },
      {
        code: `<form action="#" method="post">
  <label for="ten">Họ tên</label>
  <input id="ten" name="ho_ten" type="text" required>
  <button type="submit">Gửi minh họa</button>
</form>`
      },

      { h: "2. Nhãn, định danh và nhóm thông tin" },
      { p: "<code>id</code> nhận diện một phần tử trong trang; <code>name</code> đặt tên trường dữ liệu khi gửi. Hai thuộc tính có thể mang cùng chuỗi nhưng khác nhiệm vụ. Một ô có <code>id</code> mà thiếu <code>name</code> chưa đủ để tạo trường dữ liệu có tên gửi đi." },
      { p: "<code>label</code> là nhãn của ô nhập. Giá trị <code>for</code> trên nhãn phải trùng <code>id</code> của ô tương ứng. Khi liên kết đúng, bấm nhãn sẽ đưa người dùng tới điều khiển; phần mềm đọc màn hình cũng nhận biết nhãn. <code>placeholder</code> chỉ là gợi ý trong ô, biến mất khi nhập, nên không thay nhãn." },
      { p: "Với nhiều trường liên quan, dùng <code>fieldset</code> để tạo nhóm và <code>legend</code> đặt tên nhóm. Ví dụ tách “Thông tin người học” khỏi “Lựa chọn nội dung” giúp người dùng hiểu mục đích của từng cụm trước khi nhập." },

      { h: "3. Chọn đúng kiểu input và nhóm lựa chọn" },
      { p: "<code>type</code> quyết định dạng điều khiển: <code>text</code> nhập một dòng; <code>password</code> che ký tự; <code>email</code> kiểm tra dạng email; <code>number</code> nhập số; <code>date</code> chọn ngày. <code>tel</code> phù hợp số điện thoại nhưng muốn yêu cầu đúng mẫu cụ thể thì cần thêm ràng buộc như <code>pattern</code>. <code>file</code> cho chọn tệp; <code>accept</code> gợi ý loại tệp và <code>multiple</code> cho chọn nhiều tệp." },
      { p: "<code>radio</code> phù hợp lựa chọn duy nhất: các ô trong cùng nhóm phải có cùng <code>name</code> và các <code>id</code> riêng. <code>checkbox</code> cho phép chọn nhiều mục độc lập. Thuộc tính <code>value</code> xác định giá trị gửi của lựa chọn; <code>checked</code> đặt trạng thái chọn sẵn. Dòng chữ bên cạnh điều khiển là nhãn, không tự thay thế giá trị gửi." },
      {
        code: `<fieldset>
  <legend>Buổi học</legend>
  <input type="radio" id="sang" name="buoi" value="sang">
  <label for="sang">Buổi sáng</label>
  <input type="radio" id="chieu" name="buoi" value="chieu">
  <label for="chieu">Buổi chiều</label>
</fieldset>`
      },

      { h: "4. Hộp chọn, vùng văn bản và nút bấm" },
      { p: "<code>select</code> tạo hộp chọn; mỗi <code>option</code> là một phương án. Dùng <code>selected</code> để chọn sẵn một phương án và <code>optgroup</code> để nhóm những phương án có liên quan. <code>multiple</code> trên <code>select</code> cho phép chọn nhiều phương án. Mỗi hộp chọn vẫn cần nhãn, <code>id</code> và <code>name</code>." },
      { p: "<code>textarea</code> dùng cho văn bản nhiều dòng. Nội dung mặc định đặt giữa thẻ mở và thẻ đóng, không đặt trong thuộc tính <code>value</code>. <code>rows</code> điều chỉnh số dòng hiển thị; <code>maxlength</code> giới hạn số ký tự. <code>datalist</code> là danh sách gợi ý cho ô nhập, khác hộp chọn ở chỗ người dùng vẫn có thể gõ giá trị khác." },
      { p: "Ghi rõ <code>type</code> của nút: <code>submit</code> gửi biểu mẫu; <code>reset</code> khôi phục giá trị ban đầu; <code>button</code> không tự gửi. Nút <code>button</code> nằm trong form mà bỏ type có thể trở thành nút gửi." },

      { h: "5. Đặt ràng buộc kiểm tra theo yêu cầu" },
      { p: "<code>required</code> yêu cầu có dữ liệu; <code>minlength</code> và <code>maxlength</code> giới hạn độ dài văn bản. Với ô số, <code>min</code>, <code>max</code> xác định khoảng và <code>step</code> xác định bước giá trị. Chọn thuộc tính từ yêu cầu thực tế: số giờ học từ 1 đến 12 theo giờ nguyên cần ba giới hạn tương ứng, không chỉ một nhãn ghi “1–12”." },
      { p: "<code>pattern</code> yêu cầu văn bản khớp mẫu; chẳng hạn <code>[0-9]{10}</code> biểu diễn đúng mười chữ số. Đây là ví dụ quy tắc của bài tập, không có nghĩa mọi số điện thoại trên thế giới đều có mười chữ số. Cần viết yêu cầu định dạng ngay trong nhãn hoặc hướng dẫn." },
      { p: "<code>readonly</code> làm trường chỉ đọc nhưng vẫn gửi dữ liệu; <code>disabled</code> vô hiệu hóa và không gửi dữ liệu. <code>autocomplete</code> cung cấp gợi ý để trình duyệt tự điền đúng loại thông tin." },
      {
        code: `<label for="gio">Số giờ tự học mỗi tuần (1–12)</label>
<input type="number" id="gio" name="gio_hoc"
       min="1" max="12" step="1" required>
<label for="gop-y">Góp ý, tối đa 300 ký tự</label>
<textarea id="gop-y" name="gop_y" rows="4" maxlength="300"></textarea>`
      },

      { h: "6. Hiểu giới hạn của việc kiểm tra trong trình duyệt" },
      { p: "Trình duyệt có thể kiểm tra kiểu dữ liệu và ràng buộc trước khi gửi, giúp người dùng phát hiện lỗi sớm. <code>novalidate</code> trên form hoặc <code>formnovalidate</code> trên nút gửi tắt việc kiểm tra tự động tương ứng. Không thêm chúng khi bài tập đang yêu cầu thực hành kiểm tra bằng HTML." },
      { p: "Đây là hỗ trợ nhập liệu, không phải hàng rào bảo mật hay bằng chứng đã lưu thành công. Máy chủ vẫn cần kiểm tra lại mọi dữ liệu nhận được. Trong bài này, hãy kiểm tra cấu trúc nhãn, thay đổi lựa chọn, thử nhập ngoài khoảng và đối chiếu thuộc tính trong mã. Việc xử lý một đăng ký thật nằm ngoài phạm vi trang minh họa." },

      { h: "Biểu mẫu lựa chọn nội dung tự học" },
      { p: "Ví dụ phối hợp hai nhóm trường, nhãn, radio, checkbox, select và textarea. Hãy bấm vào nhãn, đổi radio rồi nhập số giờ. Khung xem thử không gửi biểu mẫu, không lưu thông tin và không có máy chủ; nút gửi chỉ minh họa vị trí, loại nút. Bạn có thể dùng tên và email minh họa để luyện tập." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Ô nhập có id và placeholder nhưng không có name hoặc label.<br>Bổ sung name để đặt tên trường dữ liệu; thêm label với for trùng id. id không thay name và placeholder không thay nhãn." },
      { note: "Mỗi radio lựa chọn buổi học dùng một name khác nhau.<br>Đặt cùng name cho toàn bộ radio thuộc một nhóm, giữ id riêng và value khác nhau. Khi đó chọn phương án mới sẽ bỏ phương án cũ trong nhóm." },
      { note: "Cho rằng required hoặc method=\"post\" đã bảo đảm dữ liệu an toàn và được lưu.<br>required chỉ hỗ trợ kiểm tra trong trình duyệt; POST không tự mã hóa hay lưu dữ liệu. Muốn triển khai thật cần nơi xử lý, HTTPS và kiểm tra lại phía máy chủ." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• form bao các trường; action là nơi nhận; method là cách gửi; name là tên dữ liệu gửi." },
      { p: "• label nối với ô nhập bằng for và id; fieldset cùng legend tổ chức nhóm trường." },
      { p: "• Chọn input, radio, checkbox, select hoặc textarea theo kiểu dữ liệu cần thu thập." },
      { p: "• Dùng ràng buộc HTML để hỗ trợ nhập đúng; phân biệt readonly và disabled." },
      { p: "• Biểu mẫu minh họa không có xử lý lưu dữ liệu; kiểm tra trong trình duyệt không thay kiểm tra máy chủ." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đăng ký học thử — minh họa</title>

<style>
body { margin: 0; padding: 24px; color: #203747; background: #f4f8fa; font-family: Arial, sans-serif; line-height: 1.6; }
main { max-width: 650px; margin: auto; }
fieldset { margin: 18px 0; padding: 18px; border: 1px solid #91abb7; background: #fff; }
legend { font-weight: bold; }
label { display: block; margin-top: 12px; }
input[type="text"], input[type="email"], input[type="number"], select, textarea { box-sizing: border-box; width: 100%; padding: 10px; border: 1px solid #6c8794; border-radius: 6px; font: inherit; }
.choice { margin: 8px 0; }
button { padding: 10px 16px; margin: 8px 8px 0 0; border: 1px solid #21576a; border-radius: 6px; color: #173d4b; background: #e4f0f3; font: inherit; }
:focus { outline: 3px solid #b86a00; outline-offset: 2px; }
</style>
</head>
<body>
  <main>
    <h1>Lựa chọn nội dung tự học</h1>
    <p>Biểu mẫu thực hành. Khung xem thử không gửi hoặc lưu thông tin.</p>
    <form action="#" method="post">
      <fieldset>
        <legend>Thông tin người học</legend>
        <label for="ten">Tên hiển thị (bắt buộc, 2–40 ký tự)</label>
        <input type="text" id="ten" name="ten" minlength="2" maxlength="40" required>
        <label for="email">Email minh họa (bắt buộc)</label>
        <input type="email" id="email" name="email" placeholder="ban@example.com" autocomplete="email" required>
        <label for="gio">Số giờ tự học mỗi tuần (1–12)</label>
        <input type="number" id="gio" name="gio" min="1" max="12" step="1" value="3" required>
      </fieldset>
      <fieldset>
        <legend>Lựa chọn nội dung</legend>
        <label for="noi-dung">Nội dung muốn học (bắt buộc)</label>
        <select id="noi-dung" name="noi_dung" required>
          <option value="">-- Chọn nội dung --</option>
          <option value="html">HTML cơ bản</option>
          <option value="css">CSS cơ bản</option>
        </select>
        <fieldset>
          <legend>Buổi học ưu tiên</legend>
          <label class="choice" for="sang"><input type="radio" id="sang" name="buoi" value="sang" checked> Buổi sáng</label>
          <label class="choice" for="chieu"><input type="radio" id="chieu" name="buoi" value="chieu"> Buổi chiều</label>
        </fieldset>
        <label class="choice" for="vi-du"><input type="checkbox" id="vi-du" name="them_vi_du" value="co"> Muốn thêm ví dụ</label>
        <label class="choice" for="bai-tap"><input type="checkbox" id="bai-tap" name="them_bai_tap" value="co"> Muốn thêm bài tập</label>
        <label for="ghi-chu">Mong muốn học tập (tối đa 300 ký tự)</label>
        <textarea id="ghi-chu" name="ghi_chu" rows="4" maxlength="300"></textarea>
      </fieldset>
      <button type="submit">Gửi — minh họa</button>
      <button type="reset">Khôi phục ban đầu</button>
    </form>
  </main>
</body>
</html>`,

    exercise: `Tạo phiếu đăng ký một buổi thực hành`
  },

  {
    id: "H07",
    track: "HTML",
    level: "Trung bình",
    title: "HTML Semantic",
    summary: "Tổ chức trang theo ý nghĩa nội dung và tạo nền tảng để nhiều người có thể sử dụng.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Phân biệt vai trò ngữ nghĩa với cách một phần tử được hiển thị." },
      { p: "• Chọn được header, nav, main, section, article, aside và footer theo nội dung cụ thể." },
      { p: "• Tạo được một trang bài học có hệ thống đề mục và khối hỏi đáp details/summary." },
      { p: "• Rà soát được ngôn ngữ, tên liên kết, nhãn, ảnh và khả năng dùng bàn phím ở mức cơ bản." },
      { note: "Thời lượng gợi ý: 60 phút. Nên học trước: H01, H02, H03." },

      { h: "1. Ngữ nghĩa khác với cách hiển thị" },
      { p: "Ngữ nghĩa là ý nghĩa, vai trò của phần nội dung được đánh dấu. Tên thẻ như <code>nav</code> hoặc <code>article</code> nói rõ phần đó làm gì, trong khi <code>div</code> và <code>span</code> chỉ gộp nhóm mà không tự diễn đạt vai trò. Đặt <code>class=\"menu\"</code> cho một div có thể giúp người viết hiểu, nhưng không biến div thành phần tử điều hướng." },
      { p: "Về hiển thị mặc định, các phần tử khối quen thuộc như <code>div</code> hoặc <code>p</code> bắt đầu dòng mới; phần tử nội tuyến như <code>span</code> nằm trong dòng văn bản. <code>div</code> phù hợp gom một khối, còn <code>span</code> gom một đoạn chữ. CSS có thể đổi cách hiển thị bằng <code>display</code>, nhưng lựa chọn thẻ vẫn cần dựa trên ý nghĩa. Nếu đã có thẻ ngữ nghĩa thích hợp, hãy ưu tiên thẻ đó trước khi dùng div." },
      {
        code: `<!-- Gom chữ để định dạng: span không phải một vùng nội dung mới. -->
<p>Tiến độ: <span class="tien-do">Đã học 3 bài</span></p>
<!-- Đây là vùng điều hướng, nên dùng nav. -->
<nav>
  <a href="#noi-dung">Nội dung bài học</a>
</nav>`
      },

      { h: "2. Xác định những vùng chính của trang" },
      { p: "<code>header</code> là phần đầu của trang hoặc một khối nội dung, thường chứa tên, logo hoặc tiêu đề. <code>nav</code> chứa nhóm liên kết điều hướng chính. <code>main</code> chứa nội dung chính, duy nhất của trang; menu và chân trang lặp lại không phải nội dung chính. <code>footer</code> chứa thông tin cuối trang hoặc cuối khối, chẳng hạn thông tin liên hệ và liên kết phụ." },
      { p: "Hãy mô tả cấu trúc bằng lời trước: “đầu trang giới thiệu khóa học; menu dẫn đến các mục; phần chính chứa bài học; cuối trang ghi nguồn”. Sau đó mới chọn thẻ và viết CSS. Cách làm này giúp mã vẫn rõ ràng khi chưa có màu sắc hoặc bố cục." },
      { p: "Không phải cứ nằm trên cùng là header, cũng không phải mọi liên kết đều phải nằm trong nav. Tên thẻ phản ánh nhiệm vụ của vùng. Một bài viết có thể có header riêng cho tiêu đề của nó mà vẫn nằm trong main của trang." },

      { h: "3. Phân biệt section, article và aside" },
      { p: "<code>section</code> nhóm một phần nội dung có chủ đề riêng, thường có đề mục. Ví dụ một bài học gồm các phần “Mục tiêu”, “Nội dung” và “Tự kiểm tra”. <code>article</code> là nội dung độc lập, vẫn có nghĩa khi tách khỏi trang, như một bài hướng dẫn hoàn chỉnh. Một article có thể chứa nhiều section để chia các ý của nó." },
      { p: "<code>aside</code> chứa nội dung phụ liên quan gián tiếp, chẳng hạn mẹo học hoặc tài liệu liên quan. Không chọn aside chỉ vì CSS đặt khối ở bên phải: vị trí không quyết định vai trò. Tương tự, không biến mọi hộp có đường viền thành section nếu hộp đó chỉ tồn tại để căn chỉnh." },
      { p: "Một phép thử hữu ích: nếu khối là bài viết trọn vẹn thì cân nhắc article; nếu là một mục của bài thì cân nhắc section; nếu chỉ nhóm để tạo khoảng cách thì div vẫn phù hợp." },
      {
        code: `<main>
  <article>
    <h1>Hướng dẫn tự học HTML</h1>
    <section>
      <h2>Mục tiêu</h2>
      <p>Chọn thẻ theo vai trò nội dung.</p>
    </section>
  </article>
  <aside>
    <h2>Mẹo học</h2>
    <p>Đọc cấu trúc trước khi thêm CSS.</p>
  </aside>
</main>`
      },

      { h: "4. Thêm ý nghĩa cho nội dung nhỏ và hỏi đáp" },
      { p: "<code>figure</code> nhóm hình minh họa; <code>figcaption</code> đặt chú thích tương ứng. <code>time</code> đánh dấu mốc thời gian, với <code>datetime</code> cung cấp dạng máy đọc được bên cạnh cách viết quen thuộc cho người đọc. <code>mark</code> đánh dấu nội dung cần chú ý, còn <code>address</code> thể hiện thông tin liên hệ. Chỉ dùng những thẻ này khi nội dung thực sự phù hợp với ý nghĩa của chúng." },
      { p: "<code>details</code> tạo khối có thể mở và thu gọn; <code>summary</code> là nhãn người dùng kích hoạt. Nội dung trả lời nằm sau summary nhưng vẫn bên trong details. Đây là cách xây dựng câu hỏi thường gặp đơn giản mà không cần JavaScript." },
      { p: "Hãy đặt summary thành câu hỏi rõ ràng. Bài thực hành dùng chức năng HTML có sẵn này để tạo phần tự kiểm tra." },
      {
        code: `<p>Cập nhật: <time datetime="2026-10-15">15/10/2026</time>.</p>
<details>
  <summary>Khi nào nên dùng article?</summary>
  <p>Khi nội dung có thể đứng độc lập mà vẫn có nghĩa.</p>
</details>`
      },

      { h: "5. Xây dựng hệ thống đề mục và tên dễ hiểu" },
      { p: "Khả năng tiếp cận là làm cho nhiều người sử dụng được trang, kể cả người dùng phần mềm đọc màn hình hoặc không dùng chuột. Tài liệu nêu bốn yêu cầu tổng quát: nội dung cảm nhận được, thao tác được, dễ hiểu và ổn định." },
      { p: "Khai báo <code>lang=\"vi\"</code> để nhận diện ngôn ngữ. Theo hướng dẫn của tài liệu, mỗi trang có một h1; dùng h2, h3 theo cấp mục, không chọn đề mục chỉ vì muốn chữ lớn. Tên liên kết phải hiểu được khi đọc riêng, như “Xem phần tự kiểm tra” thay cho “Bấm vào đây”." },
      { p: "Ảnh mang thông tin cần <code>alt</code> mô tả; ảnh chỉ trang trí dùng <code>alt=\"\"</code>. Ô nhập cần label, còn bảng dữ liệu cần caption và tiêu đề th có scope. Những quy tắc này làm ý nghĩa nội dung rõ ràng hơn khi người dùng không chỉ nhìn giao diện." },

      { h: "6. Kiểm tra bằng bàn phím và dùng HTML sẵn có" },
      { p: "Hãy dùng Tab để đi qua các liên kết, nút và điều khiển; kích hoạt bằng phím phù hợp như Enter hoặc Space. Cần giữ dấu hiệu focus để người dùng biết mình đang ở đâu. Không chỉ dùng màu đỏ hoặc xanh để báo trạng thái; thêm chữ mô tả để thông tin vẫn hiểu được nếu người xem khó phân biệt màu." },
      { p: "Tài liệu khuyến nghị ưu tiên phần tử HTML có sẵn, chẳng hạn button, trước khi tự tạo điều khiển bằng div và bổ sung ARIA. ARIA mô tả thêm vai trò hoặc trạng thái khi cần, không thay thế việc chọn đúng thẻ. Với bài này, các liên kết và details/summary đã cung cấp hành vi sẵn có; hãy kiểm tra chúng trước khi nghĩ đến tạo điều khiển mới." },

      { h: "Trang bài học có cấu trúc ngữ nghĩa" },
      { p: "Đầu trang và menu dẫn đến các điểm trong cùng tài liệu. main chứa một bài hướng dẫn độc lập và phần mẹo liên quan. Các section chia chủ đề; details/summary tạo câu hỏi có thể mở mà không cần JavaScript. Hãy dùng phím Tab rồi Enter để kiểm tra liên kết và khối hỏi đáp." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Dùng div class=\"main\" rồi cho rằng nó tương đương main.<br>Tên class chủ yếu là nhãn để CSS/JavaScript sử dụng. Khi khối thực sự là nội dung chính, dùng phần tử main để thể hiện vai trò rõ ràng." },
      { note: "Gọi mọi khối bên phải là aside hoặc mọi hộp là section.<br>Xác định nội dung là phần chính, mục có chủ đề, bài độc lập hay phần phụ trước. Vị trí và đường viền là việc của CSS, không quyết định ngữ nghĩa." },
      { note: "Bỏ đường focus, dùng liên kết chỉ ghi “Xem thêm”, rồi nghĩ trang vẫn đủ dễ dùng.<br>Giữ dấu focus, dùng tên liên kết mô tả đích đến và thử di chuyển bằng Tab. Cấu trúc ngữ nghĩa cần đi cùng khả năng thao tác và tên nội dung dễ hiểu." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• Thẻ ngữ nghĩa diễn đạt vai trò; display và CSS điều khiển cách trình bày." },
      { p: "• header, nav, main và footer phân định các vùng quan trọng của trang." },
      { p: "• article dùng cho nội dung độc lập; section chia chủ đề; aside dành cho phần phụ." },
      { p: "• details/summary tạo khối mở–thu gọn có sẵn trong HTML." },
      { p: "• Ngôn ngữ, đề mục, tên liên kết, nhãn và thao tác bàn phím là các điểm kiểm tra cơ bản." },

    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tự học HTML ngữ nghĩa</title>

<style>
body { margin: 0; color: #203846; background: #f2f7f8; font-family: Arial, sans-serif; line-height: 1.7; }
body > header, main, body > footer { max-width: 820px; margin: auto; padding: 24px; }
body > header { background: #dceef0; }
.brand { font-weight: bold; color: #255d66; }
nav ul { padding-left: 20px; }
a { color: #075a76; }
article, aside { padding: 20px; margin-bottom: 18px; border: 1px solid #b0c6cc; border-radius: 10px; background: white; }
section { margin: 22px 0; }
summary { cursor: pointer; font-weight: bold; }
details { padding: 12px; background: #edf5f6; }
:focus { outline: 3px solid #b86c00; outline-offset: 4px; }
address { font-style: normal; }
</style>
</head>
<body>
  <header>
    <p class="brand">Góc tự học web</p>
    <h1>HTML ngữ nghĩa</h1>
    <nav aria-label="Mục trong bài">
      <ul>
        <li><a href="#bai-viet">Đọc bài hướng dẫn</a></li>
        <li><a href="#tu-kiem-tra">Xem phần tự kiểm tra</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article id="bai-viet">
      <header>
        <h2>Chọn thẻ theo ý nghĩa nội dung</h2>
        <p>Ngày minh họa: <time datetime="2026-10-15">15/10/2026</time>.</p>
      </header>
      <section>
        <h3>Mục tiêu</h3>
        <p>Phân biệt vùng chính, bài viết và nội dung hỗ trợ.</p>
      </section>
      <section>
        <h3>Nguyên tắc lựa chọn</h3>
        <p>Một bài hướng dẫn độc lập phù hợp với <code>article</code>.</p>
        <p><mark>Vai trò của nội dung</mark> là cơ sở để chọn thẻ.</p>
      </section>
      <section id="tu-kiem-tra">
        <h3>Tự kiểm tra</h3>
        <details>
          <summary>Một hộp nằm bên phải có luôn là aside không?</summary>
          <p>Không. Chỉ dùng aside khi nội dung có vai trò phụ, liên quan gián tiếp.</p>
        </details>
      </section>
    </article>
    <aside>
      <h2>Mẹo thực hành</h2>
      <p>Đọc hệ thống đề mục rồi kiểm tra từng liên kết bằng bàn phím.</p>
    </aside>
  </main>
  <footer>
    <p>Ví dụ tự soạn cho bài HTML Semantic.</p>
    <address>Nhóm học tập thiết kế web</address>
  </footer>
</body>
</html>`,

    exercise: `Chuyển trang ghi chú thành một bài học dễ điều hướng`
  },

  {
    id: "C01",
    track: "CSS",
    level: "Cơ bản",
    title: "CSS là gì?",
    summary: "Hiểu vai trò của CSS và tự tạo giao diện đầu tiên bằng ba cách gắn định dạng vào HTML.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Phân biệt nhiệm vụ tạo cấu trúc của HTML với nhiệm vụ trình bày của CSS." },
      { p: "• Đọc và viết một quy tắc gồm selector, thuộc tính và giá trị." },
      { p: "• Nhận diện và sử dụng CSS nội tuyến, nội bộ và tệp CSS ngoài." },
      { p: "• Tạo một trang giới thiệu có tiêu đề, đoạn văn và màu sắc thống nhất." },
      { note: "Thời lượng gợi ý: 40 phút. Nên học trước: H01." },

      { h: "1. HTML cung cấp nội dung, CSS quyết định cách trình bày" },
      { p: "CSS là viết tắt của <em>Cascading Style Sheets</em>, được tài liệu gọi là các bảng định kiểu xếp tầng. HTML mô tả nội dung như tiêu đề, đoạn văn và danh sách; CSS quy định cách những nội dung đó hiển thị. Ví dụ, một tiêu đề vẫn là thẻ <code>h1</code> dù chữ của nó đang màu xanh hay màu đen. Đổi màu bằng CSS không biến tiêu đề thành một loại nội dung khác." },
      { p: "Trong một trang tự học, HTML có thể chứa tên bài, mục tiêu và hướng dẫn. CSS giúp người học nhìn thấy thứ bậc giữa tiêu đề và phần giải thích, nhận ra khu vực cần chú ý, đọc chữ trên nền phù hợp. Vì vậy, khi bắt đầu, hãy viết đủ nội dung có nghĩa rồi mới thêm định dạng. Bạn sẽ dễ nhận biết mình đang sửa nội dung hay sửa hình thức." },
      { p: "Giáo trình giới thiệu CSS theo các mô-đun hiện đại. Bài này tập trung vào vai trò và cách sử dụng, chưa yêu cầu ghi nhớ lịch sử các phiên bản." },

      { h: "2. Đọc một quy tắc CSS theo từng thành phần" },
      { p: "Mỗi quy tắc thường gồm một <strong>selector</strong> đứng trước cặp ngoặc nhọn và các khai báo ở bên trong. Selector xác định phần tử nào được chọn. Trong mỗi khai báo, tên thuộc tính đứng trước dấu hai chấm, giá trị đứng sau, rồi đến dấu chấm phẩy. Viết mỗi khai báo trên một dòng giúp bạn tìm lỗi dễ hơn." },
      {
        code: `h1 {
  color: blue;
  text-align: center;
}`
      },
      { p: "Ở ví dụ này, <code>h1</code> là selector; <code>color</code> và <code>text-align</code> là thuộc tính; <code>blue</code> và <code>center</code> là các giá trị. Quy tắc chọn mọi tiêu đề <code>h1</code> trong phạm vi trang đang dùng CSS đó, đặt màu chữ xanh và canh chữ giữa. Cặp ngoặc nhọn gom hai khai báo thành một quy tắc." },
      { p: "Khi sửa, hãy đổi một giá trị mỗi lần rồi xem kết quả. Chẳng hạn thay <code>blue</code> thành <code>red</code> giúp bạn kiểm chứng riêng tác dụng của màu chữ, trước khi thay đổi vị trí canh chữ." },

      { h: "3. CSS nội tuyến và CSS nội bộ" },
      { p: "CSS nội tuyến được viết trực tiếp trong thuộc tính <code>style</code> của một thẻ. Bạn chỉ ghi các khai báo, không ghi selector hoặc ngoặc nhọn. Cách này thuận tiện để thử nhanh một phần tử; tuy nhiên, khi nhiều phần tử cần cùng kiểu trình bày, việc lặp lại các khai báo khiến mã dài và khó sửa đồng bộ." },
      {
        code: `<p style="color: blue;">Ghi chú của bài học</p>`
      },
      { p: "CSS nội bộ đặt các quy tắc trong thẻ <code>style</code>, thường ở phần <code>head</code>. Một quy tắc có thể tác động đến nhiều phần tử khớp selector trong trang đó. Đây là cách phù hợp khi làm một trang riêng hoặc thử nghiệm một ý tưởng ngắn." },
      { p: "Hai cách khác nhau ở vị trí đặt mã và phạm vi sử dụng. Nếu có ba đoạn văn cần màu xanh, nội tuyến đòi hỏi ba thuộc tính <code>style</code>; nội bộ có thể dùng một quy tắc <code>p { color: blue; }</code>. Đổi màu ở quy tắc này sẽ cập nhật cả ba đoạn phù hợp." },

      { h: "4. Tách CSS thành tệp riêng để dùng chung" },
      { p: "CSS trong tệp riêng, được giáo trình gọi là CSS ngoại tuyến, có phần mở rộng <code>.css</code>. Tệp chỉ chứa mã CSS, không bọc bằng thẻ <code>style</code>. Mỗi trang HTML liên kết với tệp đó bằng thẻ <code>link</code> trong phần <code>head</code>. Trong cách gọi này, “ngoại tuyến” có nghĩa là CSS ở tệp ngoài tài liệu HTML, không có nghĩa website bắt buộc phải ngắt Internet." },
      {
        code: `<link rel="stylesheet" href="style.css">`
      },
      { p: "<code>rel=\"stylesheet\"</code> cho biết đây là bảng định kiểu; <code>href</code> chỉ đường dẫn tới tệp. Nếu CSS ở thư mục con <code>css</code>, đường dẫn tương ứng là <code>css/style.css</code>. Một đường dẫn sai khiến trang vẫn có nội dung nhưng không nhận được định dạng mong muốn." },
      { p: "Nhiều trang có thể liên kết cùng một tệp. Khi cần đổi màu tiêu đề cho cả website, bạn sửa quy tắc chung một lần. Việc tách tệp cũng giúp mã HTML tập trung vào nội dung, thuận tiện kiểm tra và bảo trì." },

      { h: "5. Quy trình tự học và kiểm tra kết quả" },
      { p: "Hãy bắt đầu bằng một trang có tiêu đề và hai đoạn văn. Thêm màu nền cho <code>body</code>, màu chữ cho <code>h1</code>, rồi cỡ chữ cho <code>p</code>. Những thuộc tính này tạo thay đổi dễ quan sát. Trước mỗi lần chạy, dự đoán phần tử nào sẽ thay đổi; sau khi chạy, so sánh dự đoán với kết quả." },
      { p: "Nếu không thấy tác dụng, kiểm tra theo thứ tự: tên thẻ có khớp selector không, đã có dấu hai chấm và ngoặc nhọn chưa, tệp CSS đã lưu chưa, đường dẫn có đúng không. Khi nhiều quy tắc cùng định dạng một thuộc tính, kết quả còn liên quan đến ưu tiên; bài C02 sẽ xét trường hợp ghi đè đơn giản. Không nên kết luận mọi quy tắc viết sau luôn thắng." },
      { p: "Trong vùng thực hành của trang học, hai ô HTML và CSS được ghép để chạy thử. Khi tự tạo dự án trên máy, bạn có thể lưu chúng thành <code>index.html</code> và <code>style.css</code>, sau đó thêm thẻ liên kết trong <code>head</code>." },

      { h: "Trang giới thiệu góc tự học" },
      { p: "HTML chứa nội dung, CSS chọn body, h1 và p để định dạng. Hãy đổi màu tiêu đề và font-size của p, chạy lại rồi quan sát tất cả đoạn văn. Ô CSS được ghép vào bản xem trước nên không cần tệp ngoài trong ví dụ này." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Viết color = blue; trong quy tắc.<br>Dùng dấu hai chấm giữa thuộc tính và giá trị: color: blue;. Dấu bằng thuộc cú pháp gán thuộc tính HTML, không phải cú pháp khai báo CSS này." },
      { note: "Đặt cả &lt;style&gt; và &lt;/style&gt; vào style.css.<br>Tệp .css chỉ chứa quy tắc CSS. Cặp thẻ style chỉ dùng khi nhúng CSS nội bộ trong tài liệu HTML." },
      { note: "Liên kết href=\"style.css\" nhưng tệp thực tế ở css/style.css.<br>Đổi href thành css/style.css theo vị trí của tệp HTML. Kiểm tra tên và phần mở rộng của tệp." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• CSS định kiểu cho nội dung được cấu trúc bằng HTML." },
      { p: "• Một quy tắc có selector và các khai báo thuộc tính: giá trị;." },
      { p: "• Nội tuyến dùng thuộc tính style; nội bộ dùng thẻ style; tệp ngoài dùng link." },
      { p: "• Tệp CSS riêng giúp nhiều trang sử dụng chung giao diện." },
      { p: "• Luôn dự đoán kết quả và kiểm tra từng thay đổi nhỏ." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Góc tự học</title>

<style>
body {
  background-color: #eef5ff;
  color: #24364b;
}

h1 {
  color: #174ea6;
  text-align: center;
}

p {
  font-size: 18px;
}
</style>
</head>
<body>
  <main>
    <h1>Góc tự học HTML và CSS</h1>
    <p>Mỗi ngày hoàn thành một mục tiêu nhỏ.</p>
    <p>Đọc ví dụ, dự đoán kết quả rồi tự thay đổi mã.</p>
  </main>
</body>
</html>`,

    exercise: `Thiết kế trang kế hoạch học tuần này`
  },

  {
    id: "C02",
    track: "CSS",
    level: "Cơ bản",
    title: "Selector và thuộc tính",
    summary: "Chọn đúng phần tử, viết quy tắc có phạm vi rõ ràng và dự đoán các trường hợp ghi đè cơ bản.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Chọn phần tử bằng tên thẻ, class và id đúng cú pháp." },
      { p: "• Phân biệt selector hậu duệ với selector con trực tiếp." },
      { p: "• Dùng hover, focus và một phần tử giả trong ví dụ ngắn." },
      { p: "• Dự đoán kết quả khi hai quy tắc cùng selector, cùng thuộc tính và cùng mức quan trọng được khai báo nối tiếp." },
      { note: "Thời lượng gợi ý: 55 phút. Nên học trước: C01." },

      { h: "1. Selector, thuộc tính và giá trị giải quyết ba câu hỏi" },
      { p: "Khi viết CSS, hãy trả lời theo thứ tự: chọn phần tử nào, thay đổi đặc điểm nào, đặt đặc điểm đó thành gì. Selector trả lời câu thứ nhất; thuộc tính trả lời câu thứ hai; giá trị trả lời câu thứ ba. Chẳng hạn <code>p { color: green; }</code> chọn đoạn văn, thay đổi màu chữ và đặt màu xanh lá." },
      { p: "Selector theo tên thẻ phù hợp khi cần một kiểu chung cho cả loại phần tử. Nếu tất cả đoạn văn đều cần cách trình bày giống nhau, chọn <code>p</code> là rõ ràng. Nhưng khi chỉ một vài đoạn là ghi chú, quy tắc chọn toàn bộ <code>p</code> sẽ quá rộng. Lúc đó cần thêm class để diễn đạt nhóm riêng." },
      { p: "Trước khi chạy, hãy đọc cây HTML và chỉ ra từng phần tử sẽ khớp selector. Thói quen này giúp bạn hiểu phạm vi tác động, tránh sửa một vùng nhưng vô tình làm đổi các vùng khác trong trang." },

      { h: "2. Class dùng cho nhóm, id nhận diện phần tử" },
      { p: "Trong CSS, class được viết với dấu chấm, còn id được viết với dấu thăng. HTML khai báo tên bằng thuộc tính <code>class</code> hoặc <code>id</code>, không đặt thêm dấu chấm hoặc dấu thăng vào giá trị. Nên chọn tên ngắn, dễ hiểu như <code>ghi-chu</code>, <code>mo-dau</code> và bắt đầu bằng chữ trong những bài thực hành này." },
      {
        code: `.ghi-chu { color: #176448; }
#mo-dau { color: #174ea6; }
p.ghi-chu { background-color: #edf7f0; }`
      },
      { p: "<code>.ghi-chu</code> chọn mọi phần tử có lớp tương ứng. <code>p.ghi-chu</code> yêu cầu phần tử vừa là thẻ <code>p</code> vừa có lớp đó: một <code>div</code> cùng lớp không khớp quy tắc này. Selector <code>#mo-dau</code> trỏ đến phần tử có định danh tương ứng; không dùng một id để đánh dấu cả nhóm." },
      { p: "Đừng chọn tên theo màu hiện tại như “chu-xanh” nếu mục đích thực sự là ghi chú. Tên theo vai trò giúp mã vẫn dễ hiểu khi bạn thay đổi màu ở lần thiết kế sau." },

      { h: "3. Chọn theo quan hệ trong cây HTML" },
      { p: "Selector kết hợp cho phép giới hạn quy tắc theo quan hệ giữa các phần tử. Một khoảng trắng biểu thị quan hệ nằm bên trong, còn dấu <code>&gt;</code> yêu cầu phần tử con trực tiếp. Hãy hình dung <code>article</code> là một bài học và <code>p</code> là các đoạn giải thích." },
      {
        code: `article p { color: #24364b; }
article > p { background-color: #eef5ff; }`
      },
      { p: "Quy tắc đầu chọn các đoạn văn ở mọi độ sâu bên trong <code>article</code>. Quy tắc sau chỉ chọn đoạn có cha trực tiếp là <code>article</code>; đoạn nằm trong một <code>section</code> trung gian không khớp. Như vậy, vị trí của thẻ trong HTML có thể làm thay đổi kết quả dù tên thẻ không đổi." },
      { p: "Giáo trình còn nêu <code>+</code> để chọn phần tử cùng cấp ngay sau và <code>~</code> để chọn những phần tử cùng cấp phía sau. Khi tự học, hãy kiểm chứng từng loại bằng ba hoặc bốn phần tử nhỏ trước khi áp dụng vào trang dài." },

      { h: "4. Trạng thái tương tác và bộ phận của phần tử" },
      { p: "Lớp giả bắt đầu bằng một dấu hai chấm. Ví dụ, <code>a:hover</code> chọn liên kết khi có con trỏ chuột phía trên, còn <code>a:focus</code> chọn liên kết đang nhận tiêu điểm. Việc định dạng cả hai trạng thái giúp bạn quan sát thao tác bằng chuột và bàn phím. Hãy dùng phím Tab để tự kiểm tra, thay vì chỉ di chuột." },
      {
        code: `a:hover { color: #174ea6; }
a:focus { background-color: #fff0b3; }
.ghi-chu::before { content: "• "; }`
      },
      { p: "Phần tử giả dùng hai dấu hai chấm và tác động lên một phần hoặc thêm chi tiết trang trí, chẳng hạn ký tự trước nội dung. Với <code>::before</code> và <code>::after</code>, cần khai báo <code>content</code>; nếu bỏ thuộc tính này, chi tiết mong muốn sẽ không xuất hiện." },
      { p: "Dấu đầu dòng trong ví dụ chỉ trang trí cho phần ghi chú đã có chữ. Nội dung chính vẫn cần nằm trong HTML để bạn dễ đọc và quản lý. Không nhầm <code>:hover</code> là tên class phải tự thêm vào thẻ." },

      { h: "5. Kiểm tra quy tắc bị ghi đè trong phạm vi rõ ràng" },
      { p: "Một phần tử có thể khớp nhiều quy tắc. Trong trường hợp hai quy tắc <strong>cùng selector, cùng mức quan trọng, cùng nguồn tác giả</strong> định nghĩa cùng thuộc tính, khai báo xuất hiện sau được dùng. Ví dụ, hai quy tắc <code>.ghi-chu</code> lần lượt đặt màu xanh rồi đỏ thì màu đỏ có hiệu lực. Nếu quy tắc sau chỉ đổi nền, màu chữ từ quy tắc trước vẫn có thể giữ nguyên." },
      { p: "Mục 3.22 của giáo trình trình bày ưu tiên ở mức khái quát. Không suy luận rằng mọi quy tắc ở gần phần tử hoặc viết sau đều thắng. Bài này không mở rộng thành bảng tính độ đặc hiệu vì tài liệu không trình bày đầy đủ nội dung đó." },
      { p: "Tài liệu giới thiệu <code>!important</code> để tăng ưu tiên cho một khai báo. Trong thực hành nhập môn, hãy sửa selector hoặc bỏ quy tắc trùng trước khi dùng chỉ thị này. Cách kiểm tra rõ ràng là tìm tất cả nơi đang đặt cùng một thuộc tính, rồi tạm bỏ từng khai báo để quan sát tác động." },

      { h: "Phân biệt ghi chú trực tiếp và ghi chú lồng bên trong" },
      { p: "Hai đoạn đều có class ghi-chu nên cùng màu xanh. Chỉ đoạn là con trực tiếp của article nhận nền xanh nhạt. Dùng Tab đến liên kết để quan sát :focus, hoặc di chuột để quan sát :hover." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "HTML dùng class=\"ghi-chu\" nhưng CSS viết #ghi-chu.<br>Dùng .ghi-chu cho class; dấu # dành cho id. Đối chiếu cả loại thuộc tính lẫn tên trước khi nghi ngờ trình duyệt." },
      { note: "Dùng article &gt; p nhưng muốn chọn cả đoạn p nằm sâu trong section.<br>Dùng article p khi muốn chọn mọi đoạn hậu duệ. Dấu &gt; chỉ chọn con trực tiếp." },
      { note: "Cho rằng cứ thêm !important hoặc đưa CSS xuống cuối là luôn sửa được xung đột.<br>Xác định đúng phần tử và những khai báo cạnh tranh trước. Quy tắc viết sau chỉ được dùng trong trường hợp so sánh đã đáp ứng các điều kiện ưu tiên liên quan." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• Tên thẻ chọn một loại phần tử; .class chọn nhóm; #id chọn định danh." },
      { p: "• p.ghi-chu đồng thời kiểm tra tên thẻ và tên lớp." },
      { p: "• Khoảng trắng chọn hậu duệ; &gt; chỉ chọn con trực tiếp." },
      { p: "• :hover và :focus là lớp giả; ::before là phần tử giả cần content." },
      { p: "• Với hai quy tắc cùng selector và cùng mức quan trọng, khai báo sau cho cùng thuộc tính ghi đè khai báo trước." },
    ],

    tryit: `
<style>
body {
  font-family: Arial, sans-serif;
  color: #24364b;
}

#mo-dau {
  color: #174ea6;
}

.ghi-chu {
  color: #176448;
}

article > p {
  background-color: #eef5ff;
}

.ghi-chu::before {
  content: "• ";
}

a:hover {
  color: #174ea6;
}

a:focus {
  background-color: #fff0b3;
}
</style>
<main>
  <h1 id="mo-dau">Bài học về selector</h1>
  <article>
    <h2>Ghi chép học tập</h2>
    <p class="ghi-chu">Tôi là đoạn con trực tiếp của article.</p>
    <section>
      <h3>Ví dụ lồng nhau</h3>
      <p class="ghi-chu">Tôi nằm trong section, bên trong article.</p>
    </section>
    <a href="#ket-luan">Đến phần kết luận</a>
  </article>
  <section id="ket-luan">
    <h2>Kết luận</h2>
    <p>Đọc cấu trúc HTML trước khi chọn selector.</p>
  </section>
</main>`,

    exercise: `Tô nổi bật ghi chú của một bài tự học`
  },

  {
    id: "C03",
    track: "CSS",
    level: "Cơ bản",
    title: "Màu sắc và phông chữ",
    summary: "Phối màu dễ đọc, sử dụng phông dự phòng và xây dựng thứ bậc chữ cho nội dung tự học.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Viết màu bằng tên, RGB, HEX và nhận biết vai trò của alpha." },
      { p: "• Phân biệt màu chữ với màu nền, lựa chọn cặp màu dễ đọc." },
      { p: "• Khai báo font-family có phương án dự phòng và thiết lập cỡ chữ phù hợp." },
      { p: "• Điều chỉnh độ đậm, cách canh và khoảng cách dòng của một bài viết." },
      { note: "Thời lượng gợi ý: 50 phút. Nên học trước: C02." },

      { h: "1. Phân biệt thuộc tính màu và cách biểu diễn màu" },
      { p: "Màu sắc trong CSS gồm hai câu hỏi riêng: muốn tô phần nào và muốn dùng màu gì. <code>color</code> đặt màu chữ; <code>background-color</code> đặt màu nền; màu viền có thuộc tính riêng sẽ được học trong bài mô hình hộp. Chọn đúng mã màu nhưng dùng sai thuộc tính vẫn tạo kết quả khác yêu cầu." },
      { p: "Một màu có thể được ghi bằng tên như <code>blue</code>, bằng RGB như <code>rgb(0, 0, 255)</code>, hoặc bằng HEX như <code>#0000ff</code>. Ba cách này đều biểu diễn màu xanh lam trong ví dụ. Trong RGB, ba số lần lượt là thành phần đỏ, xanh lá và xanh lam, mỗi số nằm trong khoảng 0 đến 255." },
      {
        code: `.tieu-de {
  color: #174ea6;
  background-color: #eef5ff;
}`
      },
      { p: "Hãy chọn vài màu có vai trò rõ: màu chữ chính, màu nền và màu nhấn. Việc dùng quá nhiều màu khiến người học khó nhận ra đâu là thông tin quan trọng." },

      { h: "2. HEX, HSL và độ trong suốt" },
      { p: "HEX thường có dạng <code>#RRGGBB</code>, mỗi cặp ký tự biểu diễn một thành phần màu từ <code>00</code> đến <code>FF</code>. Chẳng hạn <code>#ffffff</code> là trắng, <code>#000000</code> là đen. Khi từng cặp đều gồm hai ký tự giống nhau, có thể rút gọn: <code>#aabbcc</code> thành <code>#abc</code>. Không bỏ tùy ý ba ký tự trong một mã bất kỳ." },
      { p: "HSL tách màu thành sắc độ, độ bão hòa và độ sáng. Trong cách viết của giáo trình, sắc độ dùng khoảng 0 đến 360, còn hai thành phần sau dùng phần trăm. Điều này thuận tiện khi muốn mô tả cùng một sắc màu nhưng có độ sáng khác nhau." },
      {
        code: `.ghi-chu {
  color: hsl(150, 55%, 25%);
  background-color: rgba(30, 110, 80, 0.12);
}`
      },
      { p: "RGBA bổ sung alpha từ 0 đến 1: 0 là trong suốt hoàn toàn, 1 là đục hoàn toàn. Với nền bán trong suốt, màu nhìn thấy còn phụ thuộc nền phía sau. Hãy kiểm tra cặp màu thực tế thay vì chỉ đọc từng mã riêng." },

      { h: "3. Chọn phông và xây dựng danh sách dự phòng" },
      { p: "Thuộc tính <code>font-family</code> xác định phông chữ. Giáo trình giới thiệu các họ thông dụng như serif có chân, sans-serif không chân và monospace có bề rộng ký tự cố định, cùng cursive và fantasy. Với bài học dài, một phông rõ ràng giúp người đọc tập trung vào nội dung; phần mã thường phù hợp với monospace." },
      {
        code: `body { font-family: Arial, Helvetica, sans-serif; }
code { font-family: "Courier New", monospace; }`
      },
      { p: "Danh sách được thử từ trái sang phải. Nếu máy không có Arial, trình duyệt thử Helvetica; cuối cùng tên họ chung sans-serif cho phép chọn một phông phù hợp có sẵn. Tên phông gồm nhiều từ nên đặt trong dấu ngoặc kép để mã dễ đọc và nhất quán." },
      { p: "Ví dụ trong bài dùng phông hệ thống, không cần tải từ dịch vụ bên ngoài. Bạn vẫn cần quan sát chữ tiếng Việt và dấu thanh trên thiết bị đang dùng. Cùng một danh sách dự phòng có thể dẫn đến phông thực tế khác nhau trên các máy." },

      { h: "4. Cỡ chữ, độ đậm và thứ bậc nội dung" },
      { p: "<code>font-size</code> đặt cỡ chữ; <code>font-weight</code> đặt độ đậm; <code>font-style</code> điều khiển kiểu thường hoặc nghiêng. Ba thuộc tính giải quyết ba đặc điểm khác nhau. Muốn tiêu đề nổi bật, bạn có thể dùng cỡ lớn hơn đoạn văn và nét đậm, nhưng vẫn giữ đúng thẻ tiêu đề HTML." },
      { p: "Đơn vị <code>px</code> diễn tả một kích thước cụ thể; <code>rem</code> dựa trên cỡ chữ gốc của tài liệu. Nếu gốc được đặt 16px thì 1,5rem tương ứng 24px. <code>em</code> phụ thuộc ngữ cảnh cỡ chữ, vì thế khi mới học hãy nêu rõ cơ sở tính trước khi đổi đơn vị. Không mặc định mọi trang đều có cỡ gốc 16px." },
      { p: "<code>font-weight: bold</code> làm chữ đậm, còn <code>font-style: italic</code> làm chữ nghiêng. Các giá trị số của độ đậm còn phụ thuộc khả năng của phông. Dùng ít cấp cỡ chữ, có mục đích, giúp tiêu đề, đoạn giải thích và chú thích phân biệt rõ mà không làm trang rối." },

      { h: "5. Canh chữ và khoảng cách để đọc thoải mái" },
      { p: "<code>text-align</code> nhận các cách canh như trái, phải, giữa và đều. Tiêu đề ngắn có thể canh giữa; đoạn giải thích dài cần kiểm tra khi xuống dòng ở màn hình hẹp. <code>line-height</code> điều chỉnh độ cao dòng; giá trị không có đơn vị như 1.6 tạo khoảng dòng gắn với cỡ chữ, dễ thay đổi đồng bộ khi bạn điều chỉnh phông." },
      { p: "Phân biệt <code>letter-spacing</code> cho khoảng cách giữa các ký tự với <code>word-spacing</code> cho khoảng cách giữa các từ. <code>text-indent</code> chỉ lùi dòng đầu của đoạn; nó không thay thế khoảng đệm quanh cả khối. <code>text-decoration</code> có thể gạch chân, còn <code>text-transform</code> thay đổi cách hiển thị hoa và thường." },
      { p: "Khi hoàn thiện, đọc thử một đoạn tiếng Việt dài. Kiểm tra chữ có tách bạch khỏi nền không, dấu thanh có rõ không và khoảng dòng có quá sát không. Thay đổi lần lượt màu, cỡ chữ, rồi khoảng dòng giúp bạn xác định yếu tố nào làm trang dễ đọc hơn." },

      { h: "Một trang ghi chép có thứ bậc chữ" },
      { p: "body dùng danh sách phông dự phòng và line-height. Tiêu đề có cỡ rem, chú thích nhỏ hơn và nghiêng, còn khối ghi chú dùng nền RGBA. Hãy đổi cỡ chữ gốc từ 16px sang 18px để xem các giá trị rem thay đổi theo." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Dùng background-color để đổi màu chữ của tiêu đề.<br>Dùng color cho chữ và background-color cho nền. Đọc yêu cầu “phần nào đổi màu” trước khi chọn thuộc tính." },
      { note: "Khai báo một phông duy nhất và cho rằng mọi máy đều có phông đó.<br>Thêm các phông dự phòng, kết thúc bằng một họ chung như sans-serif. Kiểm tra chữ tiếng Việt ở kết quả hiển thị thực tế." },
      { note: "Đặt màu chữ nhạt trên nền nhạt hoặc giãn dòng quá sát.<br>Chọn chữ tối trên nền sáng hoặc ngược lại, rồi đọc thử đoạn dài. Điều chỉnh line-height để các dòng dễ phân biệt." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• color và background-color định dạng hai phần khác nhau." },
      { p: "• Tên màu, RGB, HEX và HSL là các cách biểu diễn màu." },
      { p: "• Alpha mô tả độ trong suốt: 0 trong suốt, 1 đục hoàn toàn." },
      { p: "• font-family nên có danh sách dự phòng; rem dựa vào cỡ chữ gốc." },
      { p: "• Cỡ chữ, độ đậm, cách canh và line-height cùng tạo nhịp đọc." },
    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ghi chép CSS</title>

<style>
html {
  font-size: 16px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fffdf7;
  color: #24364b;
  line-height: 1.6;
}

h1 {
  color: #174ea6;
  font-size: 2rem;
  line-height: 1.25;
}

h2 {
  font-size: 1.4rem;
}

.nhan {
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mo-dau {
  font-size: 1.15rem;
}

.ghi-chu {
  color: #175b43;
  background-color: rgba(30, 110, 80, 0.12);
}

.chu-thich {
  font-size: 0.9rem;
  font-style: italic;
}

code {
  font-family: "Courier New", monospace;
}
</style>
</head>
<body>
  <main>
    <p class="nhan">Ghi chép học tập</p>
    <h1>Màu sắc giúp định hướng người đọc</h1>
    <p class="mo-dau">Chọn một màu nhấn và một phông dễ đọc để bắt đầu.</p>
    <h2>Thử nghiệm nhỏ</h2>
    <p>Thay đổi từng thuộc tính, quan sát kết quả và ghi lại lý do bạn chọn cách trình bày đó.</p>
    <p class="ghi-chu">Ghi nhớ: <code>color</code> đặt màu chữ, còn <code>background-color</code> đặt màu nền.</p>
    <p class="chu-thich">Ví dụ thực hành được biên soạn từ các khái niệm trong giáo trình.</p>
  </main>
</body>
</html>`,

    exercise: `Định dạng trang giới thiệu phương pháp tự học`
  },

  {
    id: "C04",
    track: "CSS",
    level: "Cơ bản",
    title: "CSS Box Model",
    summary: "Phân biệt content, padding, border và margin để tính kích thước, tạo khoảng cách và tránh tràn bố cục.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Chỉ đúng bốn lớp của mô hình hộp theo thứ tự từ trong ra ngoài." },
      { p: "• Dùng padding, margin và border để thiết kế một thẻ nội dung." },
      { p: "• Tính chiều rộng đến mép viền của content-box và border-box." },
      { p: "• Kết hợp width, max-width và border-box trong thẻ nội dung vừa vùng chứa." },
      { note: "Thời lượng gợi ý: 55 phút. Nên học trước: C02." },

      { h: "1. Nhìn phần tử như một hộp có bốn lớp" },
      { p: "Trong CSS, một phần tử hiển thị được xét theo mô hình hộp. Từ trong ra ngoài gồm <strong>content</strong> là nội dung, <strong>padding</strong> là khoảng đệm, <strong>border</strong> là đường viền và <strong>margin</strong> là lề ngoài. Khi một thẻ bài học trông quá chật hoặc quá sát thẻ bên cạnh, hãy xác định vấn đề nằm ở lớp nào trước khi thay đổi số đo." },
      { p: "Nếu chữ sát đường viền, tăng padding. Nếu hai thẻ sát nhau ở phía ngoài, xem margin. Nếu cần đường phân định ranh giới, đặt border. Những thuộc tính này không thay đổi lời văn nhưng quyết định cách nội dung được bao quanh và khoảng không dành cho nó." },
      { p: "Hãy đọc một hộp từ trong ra ngoài: câu giới thiệu nằm trong vùng nội dung; đệm tạo chỗ thở; viền đánh dấu ranh giới; lề tách nó khỏi các đối tượng lân cận. Cách phân tích này hữu ích hơn việc tăng nhiều khoảng cách cùng lúc rồi đoán kết quả." },

      { h: "2. Đặt kích thước và hiểu giới hạn của kích thước" },
      { p: "<code>width</code> quy định chiều rộng, <code>height</code> quy định chiều cao. Giá trị có thể dùng đơn vị cụ thể như px hoặc tương đối như phần trăm. Một thẻ dài 300px và một thẻ rộng 80% có cách phản ứng khác nhau khi vùng chứa thay đổi, nên cần chọn theo mục đích của bố cục." },
      { p: "Giáo trình còn giới thiệu các giới hạn <code>min-width</code>, <code>max-width</code>, <code>min-height</code> và <code>max-height</code>. Ví dụ, <code>width: 100%</code> kết hợp <code>max-width: 360px</code> giúp thẻ dùng chiều rộng sẵn có nhưng không lớn hơn mức trần đã đặt. Cách tính còn phụ thuộc box-sizing được học ở phần sau." },
      { p: "Với đoạn văn chưa biết dài bao nhiêu, không nên vội khóa chiều cao ở một số nhỏ. Hãy để nội dung có chỗ tăng theo số dòng. Khi thử trên cửa sổ hẹp, quan sát cả chiều ngang lẫn chiều dọc: một thẻ vừa chiều rộng vẫn có thể cần thêm chiều cao để chứa đủ chữ." },

      { h: "3. Đệm, lề và đường viền: viết rõ hoặc viết gọn" },
      { p: "Padding nằm phía trong viền, margin nằm phía ngoài. Cả hai có thể viết riêng từng cạnh như <code>padding-left</code> hoặc viết gọn. Bốn giá trị theo thứ tự trên, phải, dưới, trái; hai giá trị lần lượt áp dụng cho trên/dưới và trái/phải. Một giá trị áp dụng cho cả bốn phía." },
      {
        code: `.the {
  padding: 12px 20px;
  margin: 16px 0;
  border: 2px solid #a9c4e8;
  border-radius: 12px;
}`
      },
      { p: "Trong ví dụ, đệm trên và dưới là 12px, trái và phải là 20px. Lề trên và dưới là 16px, lề ngang bằng 0. Thuộc tính <code>border</code> gộp độ rộng, kiểu và màu; <code>solid</code> tạo nét liền. <code>border-radius</code> bo góc, không thay thế kích thước viền." },
      { p: "Có thể chọn <code>dashed</code> cho nét đứt hoặc <code>dotted</code> cho nét chấm. Muốn chỉ nhấn cạnh trái, dùng <code>border-left</code>. Luôn khai báo kiểu viền phù hợp để đường viền có thể hiển thị." },

      { h: "4. Tính chiều rộng với content-box" },
      { p: "Ở cách tính mặc định <code>content-box</code>, giá trị width chỉ là phần nội dung. Chiều rộng đến mép ngoài đường viền phải cộng thêm đệm trái, đệm phải, viền trái và viền phải. Margin không thuộc chiều rộng tính đến viền này; nếu đang tính khoảng chỗ theo phương ngang kèm lề, cần xét nó riêng." },
      {
        code: `.the {
  box-sizing: content-box;
  width: 240px;
  padding: 16px;
  border: 2px solid #174ea6;
}`
      },
      { p: "Hộp trên rộng đến mép viền là <strong>240 + 16 + 16 + 2 + 2 = 276px</strong>. Nếu chỉ đọc width rồi cho rằng toàn hộp rộng 240px, bạn sẽ tính sai. Tương tự, đặt width bằng 100% rồi thêm padding trong cách tính mặc định có thể khiến hộp vượt quá vùng chứa." },
      { p: "Trước khi chạy ví dụ, hãy tính bằng tay và ghi rõ đang đo phần nội dung hay đo đến mép viền. Việc đặt tên đại lượng đo giúp tránh nhầm giữa hai kết quả đều có vẻ hợp lý." },

      { h: "5. Dùng border-box và tự kiểm tra thẻ nội dung" },
      { p: "Với <code>box-sizing: border-box</code>, width bao gồm cả content, padding và border. Nếu giữ width 240px, padding 16px và viền 2px, chiều rộng đến mép viền vẫn là 240px; phần nội dung còn <strong>240 − 32 − 4 = 204px</strong>. Khoảng đệm không biến mất, mà được lấy trong kích thước tổng đã định." },
      {
        code: `*, *::before, *::after {
  box-sizing: border-box;
}`
      },
      { h: "Hai thẻ cùng width nhưng khác cách tính hộp" },
      { p: "Cả hai thẻ đặt width 240px, padding 16px và border 2px. Thẻ content-box rộng 276px đến mép viền; thẻ border-box rộng 240px. Thay padding thành 24px rồi dự đoán lại hai kích thước trước khi chạy." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Dùng margin để tạo khoảng cách giữa chữ và viền của chính thẻ.<br>Khoảng cách phía trong thuộc padding. Margin tách hộp khỏi các đối tượng xung quanh." },
      { note: "Đặt width 100%, thêm padding rồi cho rằng hộp chắc chắn vừa vùng chứa.<br>Kiểm tra box-sizing. Với content-box, padding và border cộng vào width; dùng border-box khi muốn tổng đến mép viền nằm trong width." },
      { note: "Đặt border-width và border-color nhưng không có kiểu viền hiển thị.<br>Đặt border-style: solid hoặc dùng border: 2px solid #174ea6;. Kiểu viền là thành phần cần thiết trong khai báo gọn của bài học." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• Từ trong ra ngoài: content, padding, border, margin." },
      { p: "• Padding tạo khoảng đệm bên trong; margin tạo lề bên ngoài viền." },
      { p: "• Content-box cộng padding và border vào width để ra kích thước đến mép viền." },
      { p: "• Border-box bao gồm padding và border trong width nhưng không gồm margin." },
      { p: "• width kết hợp max-width giúp kiểm soát kích thước thẻ theo vùng chứa." },

    ],

    tryit: `
<style>
body {
  margin: 12px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #24364b;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
}

.the {
  width: 240px;
  padding: 16px;
  margin: 16px 0;
  border: 2px solid #174ea6;
  border-radius: 12px;
  background-color: #eef5ff;
}

.hop-noi-dung {
  box-sizing: content-box;
}

.hop-vien {
  box-sizing: border-box;
  border-color: #176448;
  background-color: #edf7f0;
}
</style>
<main>
  <h1>So sánh hai mô hình tính kích thước</h1>
  <article class="the hop-noi-dung">
    <h2>Content-box</h2>
    <p>width chỉ tính phần nội dung.</p>
    <p>Tổng đến mép viền: 276px.</p>
  </article>
  <article class="the hop-vien">
    <h2>Border-box</h2>
    <p>width bao gồm nội dung, đệm và viền.</p>
    <p>Tổng đến mép viền: 240px.</p>
  </article>
</main>`,

    exercise: `Tạo thẻ bài học vừa màn hình`
  },

  {
    id: "C05",
    track: "CSS",
    level: "Trung bình",
    title: "Flexbox và responsive",
    summary: "Sắp xếp các thẻ theo hàng hoặc cột và đổi bố cục phù hợp với chiều rộng khung nhìn.",
    blocks: [
      { h: "Mục tiêu bài học" },
      { p: "• Xác định flex container và các flex item trực tiếp." },
      { p: "• Dùng flex-direction, gap, justify-content, align-items và flex-wrap phù hợp tình huống." },
      { p: "• Viết bố cục ưu tiên màn hình nhỏ và chuyển sang hàng bằng media query." },
      { p: "• Kiểm tra một trang ở hai phía của điểm ngắt, nhận biết tràn ngang và chữ khó đọc." },
      { note: "Thời lượng gợi ý: 60 phút. Nên học trước: C04." },

      { h: "1. Bố cục một chiều và vai trò của phần tử cha" },
      { p: "Flexbox là mô hình bố cục một chiều: bạn sắp các phần tử theo một trục chính, có thể theo hàng hoặc cột. Nó phù hợp với một nhóm thẻ bài học, nhóm liên kết hoặc một hàng nút. Điểm bắt đầu là đặt <code>display: flex</code> lên phần tử cha, được gọi là flex container." },
      { p: "Các phần tử con trực tiếp của container trở thành flex item. Nếu trong một thẻ bài học còn có tiêu đề và đoạn văn, chúng không tự trở thành item của container bên ngoài. Vì vậy cần chọn đúng tầng HTML. Đặt display lên từng tiêu đề thay vì vùng chứa các thẻ sẽ không tạo được bố cục mong muốn." },
      { p: "Hãy đọc cấu trúc trước: vùng danh sách bao quanh ba <code>article</code>; ba article là các item cần sắp xếp. Nội dung bên trong mỗi article vẫn tổ chức theo ngữ nghĩa của bài học. Cách tách vai trò này giúp bạn chỉnh bố cục mà không phải thay đổi nội dung." },

      { h: "2. Trục chính, trục phụ và khoảng cách" },
      { p: "<code>flex-direction: row</code> bố trí theo hàng, còn <code>column</code> bố trí theo cột. Thuộc tính <code>justify-content</code> canh các item theo trục chính; <code>align-items</code> canh theo trục phụ. Vì trục thay đổi theo flex-direction, không nên ghi nhớ cứng rằng justify-content luôn là chiều ngang." },
      {
        code: `.nhom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
}`
      },
      { p: "Trong bố cục hàng với cách viết văn bản ngang thông thường, trục chính là ngang. Giá trị center giúp nhóm nằm giữa theo trục được xét khi có khoảng trống để canh. Đổi sang column làm trục chính thành dọc; lúc đó bạn cần đọc lại ý nghĩa của hai thuộc tính canh." },
      { p: "<code>gap</code> tạo khoảng cách giữa các item, thuận tiện hơn việc tự thêm lề ở từng thẻ trong ví dụ này. Nó không phải khoảng đệm bên trong thẻ. Padding vẫn dùng để tách chữ khỏi viền như ở bài C04." },

      { h: "3. Cho phép xuống dòng và điều chỉnh item" },
      { p: "<code>flex-wrap: wrap</code> cho phép các item xuống dòng khi không còn đủ chỗ trên một dòng. Đây là lựa chọn hữu ích cho nhóm liên kết có số lượng thay đổi. Việc xuống dòng linh hoạt không có nghĩa Flexbox trở thành hệ bố cục quản lý đồng thời hàng và cột; bạn vẫn tổ chức theo trục chính của container." },
      {
        code: `.nhom-lien-ket {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.the-bai-hoc {
  flex: 1;
}`
      },

      { h: "4. Responsive và cách viết cho màn hình nhỏ trước" },
      { p: "Responsive là thiết kế thích nghi để trang sử dụng được ở nhiều cỡ màn hình. Theo cách tiếp cận mobile first, bạn viết kiểu mặc định cho màn hình nhỏ, rồi bổ sung quy tắc cho màn hình lớn bằng media query. Một ví dụ dễ kiểm chứng là ba thẻ xếp dọc trước và chuyển thành hàng khi đủ rộng." },
      {
        code: `.danh-sach {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 768px) {
  .danh-sach { flex-direction: row; }
}`
      },
      { p: "Ở chiều rộng khung nhìn nhỏ hơn 768px, quy tắc trong media query chưa áp dụng. Từ 768px trở lên, điều kiện min-width đúng và hướng chuyển thành hàng. Nếu dùng max-width thì điều kiện ngược lại: áp dụng ở chiều rộng không vượt mức đã nêu." },
      { p: "768px là điểm ngắt của ví dụ, không phải lời khẳng định mọi thiết bị đều thuộc một loại ở đúng kích thước đó. Khi thiết kế, hãy chọn thời điểm đổi bố cục dựa trên lúc nội dung cần thêm hoặc bớt không gian." },

      { h: "5. Chuẩn bị HTML và kiểm tra ở nhiều chiều rộng" },
      { p: "Trong phần head, cần khai báo <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"&gt;</code>. Tài liệu giải thích rằng thiếu thiết lập này có thể làm điện thoại hiển thị trang theo chiều rộng kiểu máy tính rồi thu nhỏ, khiến chữ khó đọc. Media query và HTML cần phối hợp để kết quả phù hợp thiết bị." },
      { p: "Ảnh nên có <code>max-width: 100%</code> và <code>height: auto</code> để tránh vượt vùng chứa. Nội dung dạng bảng nhiều cột cần có giải pháp cuộn phù hợp. Trong bài thực hành này, ta dùng các thẻ văn bản để tập trung vào đổi hướng Flexbox, không cần hình ảnh hay thư viện ngoài." },
      { p: "Hãy thử ở khoảng 360px, 767px, 768px và một chiều rộng lớn hơn. Quan sát số cột, chiều rộng thẻ, khoảng cách, tiêu đề xuống dòng và thanh cuộn ngang. Thử đổi điểm ngắt thành 700px rồi giải thích sự khác biệt. Đánh giá bằng nội dung có đọc và thao tác được, không chỉ bằng việc các thẻ đã đứng cùng hàng." },

      { h: "Lộ trình ba bước tự chuyển hàng và cột" },
      { p: "Mặc định ba article xếp thành một cột. Khi khung xem đạt 768px, media query chuyển container sang row, các thẻ cùng flex: 1 chia chiều rộng. Hãy thu hẹp hoặc mở rộng vùng xem để kiểm tra cả hai trạng thái." },

      { h: "Lỗi thường gặp và cách sửa" },
      { note: "Đặt display: flex vào từng thẻ con nhưng muốn cả nhóm đứng thành một hàng.<br>Đặt display: flex lên phần tử cha trực tiếp bao quanh nhóm. Những thẻ con trực tiếp của cha đó mới là flex item." },
      { note: "Nhớ justify-content luôn canh ngang và align-items luôn canh dọc.<br>Xác định flex-direction trước. Hai thuộc tính canh lần lượt theo trục chính và trục phụ, nên ý nghĩa chiều ngang/dọc đổi khi chuyển row sang column." },
      { note: "Chỉ thử giao diện ở màn hình lớn và quên meta viewport.<br>Thêm viewport vào head, rồi kiểm tra chiều rộng nhỏ, lớn và sát hai phía của điểm ngắt. Đọc thử nội dung để phát hiện tràn và chữ quá nhỏ." },

      { h: "Ghi nhớ sau bài học" },
      { p: "• Flexbox được kích hoạt trên container, áp dụng cho con trực tiếp." },
      { p: "• flex-direction quyết định trục chính; justify-content và align-items canh theo hai trục." },
      { p: "• gap tạo khoảng cách giữa item; flex-wrap: wrap cho phép xuống dòng." },
      { p: "• Mobile first viết kiểu cho màn hình nhỏ rồi thêm media query min-width." },
      { p: "• Viewport, kích thước linh hoạt và kiểm tra thực tế cùng tạo trang responsive." },

    ],

    tryit: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lộ trình tự học</title>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 20px;
  font-family: Arial, sans-serif;
  color: #24364b;
  background-color: #f4f7fb;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  line-height: 1.25;
}

.danh-sach {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.the-bai-hoc {
  flex: 1;
  min-width: 0;
  padding: 20px;
  border: 1px solid #b9cee6;
  border-radius: 12px;
  background-color: white;
}

h2 {
  margin-top: 0;
  font-size: 1.25rem;
  color: #174ea6;
}

@media (min-width: 768px) {
  .danh-sach {
    flex-direction: row;
  }
}
</style>
</head>
<body>
  <main>
    <h1>Lộ trình một buổi tự học</h1>
    <p>Ba bước nối tiếp: đọc, thực hành và tự đánh giá.</p>
    <section class="danh-sach" aria-label="Ba bước tự học">
      <article class="the-bai-hoc">
        <h2>01. Đọc</h2>
        <p>Xác định khái niệm chính và dự đoán kết quả ví dụ.</p>
      </article>
      <article class="the-bai-hoc">
        <h2>02. Thực hành</h2>
        <p>Thay đổi mã, quan sát kết quả và giải thích khác biệt.</p>
      </article>
      <article class="the-bai-hoc">
        <h2>03. Tự đánh giá</h2>
        <p>Làm câu hỏi và xem lại phần chưa hiểu rõ.</p>
      </article>
    </section>
  </main>
</body>
</html>`,

    exercise: `Thiết kế ba thẻ bài học responsive`}
];
