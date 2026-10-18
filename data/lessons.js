const LESSONS = [
  {
    "id": "H01",
    "title": "HTML là gì?",
    "topic": "HTML",
    "level": "Cơ bản",
    "objective": "Hiểu HTML dùng để tổ chức nội dung trang web và phối hợp với CSS, JavaScript.",
    "sections": [
      {
        "title": "Vai trò của HTML",
        "body": "HTML là ngôn ngữ đánh dấu, không phải ngôn ngữ lập trình. Trình duyệt đọc các phần tử HTML để xây dựng cấu trúc nội dung như tiêu đề, đoạn văn, liên kết và hình ảnh."
      },
      {
        "title": "Phần tử và thuộc tính",
        "body": "Một phần tử thường gồm thẻ mở, nội dung và thẻ đóng. Thuộc tính nằm trong thẻ mở, bổ sung dữ liệu; chẳng hạn lang khai báo ngôn ngữ, href chỉ địa chỉ liên kết."
      },
      {
        "title": "HTML, CSS và JavaScript",
        "body": "HTML mô tả nội dung và ý nghĩa; CSS quyết định cách trình bày; JavaScript xử lý tương tác. Có thể học HTML trước và bổ sung CSS ở phần sau."
      }
    ],
    "code": "<h1>Chào mừng đến Learn Web</h1>\n<p>Đây là trang web đầu tiên của tôi.</p>\n<a href=\"https://www.w3schools.com/\">Truy cập website</a>",
    "exercise": "Tạo một trang giới thiệu câu lạc bộ với tiêu đề, đoạn mô tả và một liên kết.",
    "mistakes": "Nhầm HTML với ngôn ngữ lập trình; bỏ thẻ đóng; đặt thuộc tính bên ngoài thẻ mở.",
    "quiz": [
      {
        "question": "HTML chủ yếu dùng để làm gì?",
        "options": [
          "Xây dựng cấu trúc nội dung",
          "Lưu dữ liệu vào cơ sở dữ liệu",
          "Thay thế trình duyệt"
        ],
        "correct": 0,
        "explanation": "HTML xác định cấu trúc và ý nghĩa nội dung."
      },
      {
        "question": "CSS thường đảm nhiệm phần nào?",
        "options": [
          "Cấu trúc dữ liệu",
          "Trình bày giao diện",
          "Lưu trữ phiên đăng nhập"
        ],
        "correct": 1,
        "explanation": "CSS mô tả màu sắc, kiểu chữ và bố cục."
      },
      {
        "question": "Thuộc tính của thẻ HTML nằm ở đâu?",
        "options": [
          "Trong thẻ mở",
          "Sau thẻ đóng",
          "Trong tên file"
        ],
        "correct": 0,
        "explanation": "Thuộc tính nằm trong phần thẻ mở."
      }
    ],
    "expectedResult": "Trang hiển thị một tiêu đề, đoạn giới thiệu và liên kết có thể nhấp."
  },
  {
    "id": "H02",
    "title": "Cấu trúc tài liệu HTML",
    "topic": "HTML",
    "level": "Cơ bản",
    "objective": "Tạo tài liệu HTML5 hợp lệ và hiểu head, body, metadata.",
    "sections": [
      {
        "title": "Bộ khung tài liệu",
        "body": "Một trang HTML thường bắt đầu bằng khai báo doctype, tiếp theo là phần tử html chứa head và body. Thuộc tính lang giúp khai báo ngôn ngữ tài liệu."
      },
      {
        "title": "Thông tin trong head",
        "body": "head chứa meta charset, viewport, title và liên kết tài nguyên. title thể hiện tên trang trên tab trình duyệt; charset UTF-8 hỗ trợ tiếng Việt."
      },
      {
        "title": "Nội dung trong body",
        "body": "Các nội dung nhìn thấy như tiêu đề, đoạn văn, danh sách, hình ảnh và form đặt trong body. Dùng thẻ phù hợp với ý nghĩa thay vì dùng một thẻ cho mọi thứ."
      }
    ],
    "code": "<!DOCTYPE html>\n<html lang=\"vi\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Trang đầu tiên</title>\n</head>\n<body>\n  <h1>Xin chào</h1>\n  <p>Tôi đang học HTML5.</p>\n</body>\n</html>",
    "exercise": "Tạo file HTML hoàn chỉnh có tiêu đề tab “Giới thiệu bản thân” và hai đoạn văn.",
    "mistakes": "Quên meta charset; viết nội dung hiển thị trong head; đặt doctype không ở đầu tài liệu.",
    "quiz": [
      {
        "question": "Phần nào chứa nội dung nhìn thấy?",
        "options": [
          "head",
          "body",
          "meta"
        ],
        "correct": 1,
        "explanation": "body chứa nội dung trang."
      },
      {
        "question": "meta charset=\"UTF-8\" giúp gì?",
        "options": [
          "Hỗ trợ mã hóa ký tự",
          "Tạo ô nhập",
          "Đổi màu nền"
        ],
        "correct": 0,
        "explanation": "UTF-8 biểu diễn chữ tiếng Việt và nhiều ký tự."
      },
      {
        "question": "title xuất hiện chủ yếu ở đâu?",
        "options": [
          "Trong tab trình duyệt",
          "Trên mọi h1",
          "Trong footer tự động"
        ],
        "correct": 0,
        "explanation": "title là tên tài liệu hiển thị trên tab."
      }
    ],
    "expectedResult": "Trình duyệt hiển thị nội dung trong body; title xuất hiện ở tab."
  },
  {
    "id": "H03",
    "title": "Tiêu đề và đoạn văn",
    "topic": "HTML",
    "level": "Cơ bản",
    "objective": "Sử dụng tiêu đề theo phân cấp, đoạn văn và ngắt dòng đúng ngữ nghĩa.",
    "sections": [
      {
        "title": "Tiêu đề h1 đến h6",
        "body": "HTML có sáu cấp tiêu đề từ h1 đến h6. Chọn cấp theo cấu trúc nội dung, không chọn chỉ vì cỡ chữ; nên có một h1 chính cho chủ đề trang."
      },
      {
        "title": "Đoạn văn và ngắt dòng",
        "body": "p biểu thị một đoạn văn; br ngắt dòng trong cùng một nội dung khi thực sự cần. Trình duyệt thường gộp khoảng trắng liên tiếp trong HTML."
      },
      {
        "title": "Nhấn mạnh thông tin",
        "body": "strong đánh dấu nội dung quan trọng; em biểu thị sự nhấn mạnh. Khi cần chỉnh kích thước hay khoảng cách, sử dụng CSS thay vì lạm dụng thẻ ngắt dòng."
      }
    ],
    "code": "<h1>Nhật ký học web</h1>\n<h2>Ngày đầu tiên</h2>\n<p>Tôi đã học về <strong>HTML</strong>.</p>\n<p>Ngày mai tôi sẽ học tiếp CSS.</p>",
    "exercise": "Viết một bài giới thiệu gồm h1, hai h2 và ít nhất ba đoạn văn.",
    "mistakes": "Dùng nhiều h1 chỉ để tăng cỡ chữ; đặt p lồng trong p; lạm dụng br để tạo khoảng cách.",
    "quiz": [
      {
        "question": "Thẻ nào là tiêu đề cấp 2?",
        "options": [
          "h2",
          "p",
          "strong"
        ],
        "correct": 0,
        "explanation": "h2 là tiêu đề cấp hai."
      },
      {
        "question": "Thẻ p thể hiện gì?",
        "options": [
          "Đoạn văn",
          "Liên kết",
          "Hình ảnh"
        ],
        "correct": 0,
        "explanation": "p biểu thị đoạn văn."
      },
      {
        "question": "Thẻ nào đánh dấu nội dung quan trọng?",
        "options": [
          "br",
          "strong",
          "hr"
        ],
        "correct": 1,
        "explanation": "strong thể hiện tầm quan trọng của nội dung."
      }
    ],
    "expectedResult": "Tiêu đề xác định thứ bậc nội dung; đoạn văn nằm trên dòng riêng."
  },
  {
    "id": "H04",
    "title": "Liên kết và hình ảnh",
    "topic": "HTML",
    "level": "Cơ bản",
    "objective": "Tạo liên kết và chèn hình ảnh đúng đường dẫn, có văn bản thay thế.",
    "sections": [
      {
        "title": "Liên kết với a",
        "body": "Dùng a và href để chuyển đến một trang hoặc vị trí khác. Văn bản liên kết cần có ý nghĩa, ví dụ “Xem lộ trình HTML” thay vì “Bấm vào đây”."
      },
      {
        "title": "Chèn ảnh với img",
        "body": "img dùng src để xác định nguồn ảnh và alt để mô tả nội dung hoặc chức năng ảnh. Ảnh trang trí có thể dùng alt rỗng; ảnh mang thông tin cần mô tả phù hợp."
      },
      {
        "title": "Đường dẫn tương đối",
        "body": "Đường dẫn tương đối như images/logo.png dựa trên vị trí file HTML. Khi triển khai GitHub Pages, chữ hoa/thường của tên file phải trùng khớp."
      }
    ],
    "code": "<h1>Thư viện ảnh</h1>\n<a href=\"https://www.w3schools.com/html/\">Học thêm HTML</a>\n<img src=\"images/logo.png\" alt=\"Logo của trang Learn Web\" width=\"160\">",
    "exercise": "Tạo trang giới thiệu một danh lam thắng cảnh, có ảnh mô tả và liên kết tới nguồn đọc thêm.",
    "mistakes": "Sai đường dẫn hoặc sai chữ hoa/thường; bỏ alt; dùng văn bản liên kết không rõ nghĩa.",
    "quiz": [
      {
        "question": "Thuộc tính href thuộc thẻ nào?",
        "options": [
          "a",
          "img",
          "p"
        ],
        "correct": 0,
        "explanation": "href chỉ đích của liên kết a."
      },
      {
        "question": "alt có mục đích gì?",
        "options": [
          "Mô tả ảnh thay thế",
          "Căn giữa ảnh",
          "Tăng độ phân giải"
        ],
        "correct": 0,
        "explanation": "alt cung cấp văn bản thay thế cho ảnh."
      },
      {
        "question": "Đường dẫn tương đối phụ thuộc vào đâu?",
        "options": [
          "Vị trí tài liệu chứa đường dẫn",
          "Màu của trang",
          "Phiên bản JavaScript"
        ],
        "correct": 0,
        "explanation": "Đường dẫn được giải quyết tương đối so với URL tài liệu."
      }
    ],
    "expectedResult": "Liên kết mở địa chỉ tại href; hình ảnh lấy từ src và có mô tả alt."
  },
  {
    "id": "H05",
    "title": "Danh sách và bảng",
    "topic": "HTML",
    "level": "Cơ bản",
    "objective": "Trình bày dữ liệu bằng danh sách và bảng có tiêu đề cột phù hợp.",
    "sections": [
      {
        "title": "Danh sách không thứ tự",
        "body": "ul chứa các mục li khi thứ tự không phải trọng tâm, ví dụ danh sách kỹ năng hoặc công cụ."
      },
      {
        "title": "Danh sách có thứ tự",
        "body": "ol và li phù hợp với quy trình gồm các bước cần theo đúng trình tự, ví dụ các bước tạo dự án."
      },
      {
        "title": "Bảng dữ liệu",
        "body": "table dành cho dữ liệu hàng và cột. Dùng caption để đặt tên bảng, th cho tiêu đề, td cho ô dữ liệu và scope để thể hiện phạm vi tiêu đề."
      }
    ],
    "code": "<h2>Công cụ học web</h2>\n<ul>\n  <li>Trình duyệt</li>\n  <li>Trình soạn thảo</li>\n</ul>\n<table>\n  <caption>Tiến độ học</caption>\n  <tr><th scope=\"col\">Môn</th><th scope=\"col\">Bài</th></tr>\n  <tr><td>HTML</td><td>5</td></tr>\n</table>",
    "exercise": "Tạo danh sách 5 công cụ học tập và bảng kế hoạch học 3 ngày.",
    "mistakes": "Dùng bảng để dàn trang; đặt li ngoài ul/ol; thiếu tiêu đề cho các cột dữ liệu.",
    "quiz": [
      {
        "question": "ul thường biểu thị gì?",
        "options": [
          "Danh sách không thứ tự",
          "Bảng",
          "Biểu mẫu"
        ],
        "correct": 0,
        "explanation": "ul biểu thị danh sách không thứ tự."
      },
      {
        "question": "Thẻ nào dùng cho ô tiêu đề bảng?",
        "options": [
          "td",
          "th",
          "li"
        ],
        "correct": 1,
        "explanation": "th là ô tiêu đề."
      },
      {
        "question": "caption dùng để làm gì?",
        "options": [
          "Đặt tên bảng",
          "Tạo nút",
          "Đặt đường dẫn"
        ],
        "correct": 0,
        "explanation": "caption mô tả tên hoặc chủ đề của bảng."
      }
    ],
    "expectedResult": "Các phần tử li tạo danh sách; table trình bày dữ liệu theo hàng và cột."
  },
  {
    "id": "H06",
    "title": "Biểu mẫu HTML",
    "topic": "HTML",
    "level": "Trung bình",
    "objective": "Tạo form có nhãn, trường nhập và kiểm tra HTML cơ bản.",
    "sections": [
      {
        "title": "Cấu trúc form",
        "body": "form nhóm các trường nhập. Mỗi input hoặc textarea nên có label liên kết qua for và id để tăng khả năng sử dụng bằng bàn phím và trình đọc màn hình."
      },
      {
        "title": "Kiểu trường nhập",
        "body": "input type=\"text\" dùng cho văn bản, type=\"email\" cho địa chỉ email, select cho danh sách lựa chọn, textarea cho nhiều dòng và button cho hành động."
      },
      {
        "title": "Kiểm tra đầu vào",
        "body": "required, minlength, maxlength và type hỗ trợ kiểm tra đơn giản của trình duyệt. JavaScript có thể kiểm tra chi tiết hơn nhưng không thay thế việc gắn nhãn đúng."
      }
    ],
    "code": "<form>\n  <label for=\"nickname\">Bí danh</label>\n  <input id=\"nickname\" name=\"nickname\" required minlength=\"2\">\n  <label for=\"level\">Trình độ</label>\n  <select id=\"level\" name=\"level\">\n    <option>Mới bắt đầu</option>\n    <option>Đã biết HTML</option>\n  </select>\n  <button type=\"submit\">Kiểm tra</button>\n</form>",
    "exercise": "Thiết kế form đăng ký học thử bằng dữ liệu mẫu, gồm bí danh, chủ đề và lời nhắn.",
    "mistakes": "Thiếu label; nhiều phần tử trùng id; nhầm placeholder với label; gửi thông tin thật lên dịch vụ ngoài.",
    "quiz": [
      {
        "question": "for của label cần trùng với thuộc tính nào?",
        "options": [
          "id",
          "class",
          "title"
        ],
        "correct": 0,
        "explanation": "for của label tham chiếu tới id của trường."
      },
      {
        "question": "Thuộc tính nào đánh dấu trường bắt buộc?",
        "options": [
          "required",
          "target",
          "src"
        ],
        "correct": 0,
        "explanation": "required yêu cầu người dùng nhập trước khi submit."
      },
      {
        "question": "Trường nào phù hợp văn bản nhiều dòng?",
        "options": [
          "textarea",
          "img",
          "option"
        ],
        "correct": 0,
        "explanation": "textarea cho phép nhập nhiều dòng."
      }
    ],
    "expectedResult": "Biểu mẫu hiển thị các trường nhập và nhãn tương ứng."
  },
  {
    "id": "H07",
    "title": "HTML Semantic",
    "topic": "HTML",
    "level": "Trung bình",
    "objective": "Sử dụng thẻ ngữ nghĩa để tổ chức một trang web dễ hiểu.",
    "sections": [
      {
        "title": "Ý nghĩa của semantic",
        "body": "Thẻ ngữ nghĩa cho biết vai trò của vùng nội dung. Thay vì chỉ dùng div, có thể dùng header, nav, main, article, section và footer đúng vị trí."
      },
      {
        "title": "Cấu trúc trang",
        "body": "header dành cho phần giới thiệu đầu trang hoặc đầu vùng; nav chứa điều hướng; main dành cho nội dung chính; footer có thông tin kết thúc."
      },
      {
        "title": "Section và article",
        "body": "section nhóm nội dung cùng chủ đề, thường có tiêu đề; article là nội dung tương đối độc lập như bài viết hoặc thẻ tin. Không cần thay mọi div bằng section."
      }
    ],
    "code": "<header><h1>Tạp chí học web</h1></header>\n<nav><a href=\"#news\">Bài mới</a></nav>\n<main>\n  <section id=\"news\">\n    <h2>HTML hôm nay</h2>\n    <article><h3>Thẻ semantic</h3><p>Học cách bố cục trang.</p></article>\n  </section>\n</main>\n<footer><p>Learn Web</p></footer>",
    "exercise": "Phác thảo trang tin công nghệ bằng header, nav, main, section, article và footer.",
    "mistakes": "Dùng nhiều main không cần thiết; dùng section không có nhóm nội dung rõ; xem thẻ semantic là công cụ tạo kiểu tự động.",
    "quiz": [
      {
        "question": "main thể hiện gì?",
        "options": [
          "Nội dung chính của tài liệu",
          "Danh sách định vị",
          "Tên cửa sổ"
        ],
        "correct": 0,
        "explanation": "main dành cho nội dung chính."
      },
      {
        "question": "nav thường dùng cho phần nào?",
        "options": [
          "Các liên kết điều hướng",
          "Một hình ảnh",
          "Ô nhập mật khẩu"
        ],
        "correct": 0,
        "explanation": "nav biểu thị khu vực điều hướng."
      },
      {
        "question": "article phù hợp với nội dung nào?",
        "options": [
          "Bài viết độc lập",
          "Khoảng trắng",
          "Màu nền"
        ],
        "correct": 0,
        "explanation": "article phù hợp nội dung độc lập."
      }
    ],
    "expectedResult": "Nội dung được tổ chức thành vùng đầu trang, điều hướng, phần chính và chân trang."
  },
  {
    "id": "C01",
    "title": "CSS là gì?",
    "topic": "CSS",
    "level": "Cơ bản",
    "objective": "Hiểu vai trò CSS và ba cách áp dụng CSS.",
    "sections": [
      {
        "title": "CSS và mục đích",
        "body": "CSS là Cascading Style Sheets, mô tả kiểu hiển thị của phần tử HTML: màu chữ, kích thước, khoảng cách, viền và bố cục. Một stylesheet có thể áp dụng cho nhiều trang."
      },
      {
        "title": "Ba cách khai báo",
        "body": "Inline CSS nằm trong thuộc tính style; internal CSS nằm trong thẻ style; external CSS là file .css được liên kết bằng link. Dự án nhiều trang nên ưu tiên external CSS."
      },
      {
        "title": "Cấu trúc quy tắc",
        "body": "Quy tắc CSS có selector và khối khai báo. Mỗi khai báo gồm thuộc tính và giá trị, chẳng hạn color: blue; hoặc padding: 16px;."
      }
    ],
    "code": "<h1>Xin chào CSS</h1>\n<p>CSS giúp trang dễ đọc hơn.</p>\n<style>\n  h1 { color: #2563eb; }\n  p { font-size: 18px; }\n</style>",
    "exercise": "Tạo một file style.css riêng rồi liên kết vào trang HTML bằng link rel=\"stylesheet\".",
    "mistakes": "Ghi sai selector; quên dấu ngoặc nhọn; nhầm nhiệm vụ CSS với HTML.",
    "quiz": [
      {
        "question": "CSS viết tắt của gì?",
        "options": [
          "Cascading Style Sheets",
          "Computer Syntax System",
          "Creative Script Style"
        ],
        "correct": 0,
        "explanation": "CSS là Cascading Style Sheets."
      },
      {
        "question": "Cách nào thích hợp để dùng chung nhiều trang?",
        "options": [
          "External CSS",
          "Inline CSS trên từng thẻ",
          "Chỉ dùng thuộc tính width"
        ],
        "correct": 0,
        "explanation": "External CSS được lưu thành file riêng."
      },
      {
        "question": "Một khai báo CSS gồm gì?",
        "options": [
          "Thuộc tính và giá trị",
          "Tên file và ảnh",
          "URL và form"
        ],
        "correct": 0,
        "explanation": "Khai báo gồm property: value."
      }
    ],
    "expectedResult": "Các quy tắc CSS thay đổi cách hiển thị của phần tử HTML tương ứng."
  },
  {
    "id": "C02",
    "title": "Selector và thuộc tính",
    "topic": "CSS",
    "level": "Cơ bản",
    "objective": "Phân biệt các selector thường dùng và cú pháp khai báo CSS.",
    "sections": [
      {
        "title": "Selector theo thẻ",
        "body": "Selector h1 chọn các phần tử h1. Cách này thuận tiện cho quy tắc chung nhưng có thể ảnh hưởng nhiều vùng của trang."
      },
      {
        "title": "Selector theo class và id",
        "body": "Dấu chấm dùng chọn class, ví dụ .card; dấu # chọn id, ví dụ #main-title. Class có thể lặp lại; id nên duy nhất trong trang."
      },
      {
        "title": "Độ ưu tiên cơ bản",
        "body": "Khi nhiều quy tắc áp dụng, selector cụ thể hơn thường có mức ưu tiên cao hơn. Cần kiểm tra cascade và thứ tự khai báo khi kết quả khác mong đợi."
      }
    ],
    "code": "<h1 id=\"main-title\">Bài học CSS</h1>\n<p class=\"notice\">Hãy thực hành.</p>\n<style>\n  h1 { color: #334155; }\n  #main-title { color: #2563eb; }\n  .notice { font-weight: bold; }\n</style>",
    "exercise": "Tạo ba card dùng chung class và đổi riêng màu tiêu đề của một card bằng class bổ sung.",
    "mistakes": "Viết class thiếu dấu chấm; viết id thiếu #; khai báo id trùng lặp.",
    "quiz": [
      {
        "question": "Selector .notice chọn gì?",
        "options": [
          "Các phần tử có class notice",
          "Thẻ notice",
          "Phần tử có id notice"
        ],
        "correct": 0,
        "explanation": "Dấu chấm chọn class."
      },
      {
        "question": "Selector #menu chọn gì?",
        "options": [
          "Phần tử id menu",
          "Mọi thẻ menu",
          "Mọi thẻ có class menu"
        ],
        "correct": 0,
        "explanation": "Dấu # chọn id."
      },
      {
        "question": "Quy tắc CSS dùng dấu gì để bao khai báo?",
        "options": [
          "Ngoặc nhọn",
          "Ngoặc vuông",
          "Ngoặc kép"
        ],
        "correct": 0,
        "explanation": "CSS dùng khối { ... }."
      }
    ],
    "expectedResult": "Selector xác định phần tử được áp dụng quy tắc CSS."
  },
  {
    "id": "C03",
    "title": "Màu sắc và phông chữ",
    "topic": "CSS",
    "level": "Cơ bản",
    "objective": "Điều chỉnh màu, nền, font và khoảng cách dòng để dễ đọc.",
    "sections": [
      {
        "title": "Màu chữ và màu nền",
        "body": "color thiết lập màu nội dung văn bản; background-color thiết lập màu nền. Có thể dùng tên màu, mã HEX hoặc rgb. Giữ tương phản đủ rõ."
      },
      {
        "title": "Kiểu chữ",
        "body": "font-family chọn họ phông chữ và font-size quy định cỡ chữ. Có thể dùng rem cho kích thước tương đối với phần tử gốc."
      },
      {
        "title": "Độ đậm và khoảng cách",
        "body": "font-weight điều chỉnh độ đậm; line-height ảnh hưởng khoảng cách giữa các dòng. Không nên dùng font quá nhỏ trong phần bài học."
      }
    ],
    "code": "<h1>Thiết kế dễ đọc</h1>\n<p>Nền sáng và chữ tối giúp đọc bài lâu hơn.</p>\n<style>\n  body { background-color: #f8fafc; color: #0f172a; }\n  h1 { color: #2563eb; font-size: 2rem; }\n  p { line-height: 1.6; font-family: Arial, sans-serif; }\n</style>",
    "exercise": "Thiết kế một thẻ giới thiệu với nền nhạt, tiêu đề màu xanh và đoạn văn dễ đọc.",
    "mistakes": "Màu chữ và nền quá giống nhau; thiếu font dự phòng; lạm dụng quá nhiều kiểu chữ.",
    "quiz": [
      {
        "question": "Thuộc tính nào đổi màu chữ?",
        "options": [
          "color",
          "margin",
          "display"
        ],
        "correct": 0,
        "explanation": "color đổi màu nội dung chữ."
      },
      {
        "question": "Thuộc tính nào đổi họ phông?",
        "options": [
          "font-family",
          "font-color",
          "letter-width"
        ],
        "correct": 0,
        "explanation": "font-family chọn họ phông."
      },
      {
        "question": "line-height tác động tới gì?",
        "options": [
          "Khoảng cách dòng",
          "Đường viền",
          "Liên kết"
        ],
        "correct": 0,
        "explanation": "line-height điều khiển chiều cao dòng."
      }
    ],
    "expectedResult": "Màu sắc, cỡ chữ và phông chữ của phần tử thay đổi theo thuộc tính CSS."
  },
  {
    "id": "C04",
    "title": "CSS Box Model",
    "topic": "CSS",
    "level": "Trung bình",
    "objective": "Phân biệt content, padding, border và margin.",
    "sections": [
      {
        "title": "Bốn lớp của hộp",
        "body": "Mỗi phần tử hộp có vùng nội dung (content), khoảng đệm (padding), đường viền (border) và khoảng cách bên ngoài (margin)."
      },
      {
        "title": "Box sizing",
        "body": "Với box-sizing: border-box, chiều rộng và chiều cao khai báo bao gồm cả padding và border; điều này giúp tính kích thước bố cục dễ hơn."
      },
      {
        "title": "Thử nghiệm khoảng cách",
        "body": "padding tạo khoảng giữa nội dung và viền; margin tạo khoảng giữa hộp với phần tử xung quanh. Dùng DevTools để xem sơ đồ box model."
      }
    ],
    "code": "<div class=\"card\">Học CSS Box Model</div>\n<style>\n  .card {\n    box-sizing: border-box;\n    width: 250px;\n    padding: 20px;\n    border: 2px solid #2563eb;\n    margin: 16px;\n  }\n</style>",
    "exercise": "Tạo hai hộp và thay đổi padding, margin để quan sát sự khác biệt.",
    "mistakes": "Nhầm margin với padding; quên border trong tính toán kích thước; dùng chiều rộng cố định quá lớn trên điện thoại.",
    "quiz": [
      {
        "question": "padding nằm ở đâu?",
        "options": [
          "Giữa nội dung và viền",
          "Ngoài margin",
          "Trong URL"
        ],
        "correct": 0,
        "explanation": "padding là khoảng đệm bên trong viền."
      },
      {
        "question": "margin là gì?",
        "options": [
          "Khoảng cách bên ngoài hộp",
          "Màu chữ",
          "Hình nền"
        ],
        "correct": 0,
        "explanation": "margin tạo khoảng cách bên ngoài border."
      },
      {
        "question": "border-box có đặc điểm gì?",
        "options": [
          "Width bao gồm padding và border",
          "Tự tạo flexbox",
          "Loại bỏ margin"
        ],
        "correct": 0,
        "explanation": "border-box bao gồm padding và border trong width."
      }
    ],
    "expectedResult": "Padding nằm trong border; margin nằm bên ngoài border."
  },
  {
    "id": "C05",
    "title": "Flexbox và Responsive",
    "topic": "CSS",
    "level": "Trung bình",
    "objective": "Tạo bố cục linh hoạt, có xuống dòng và thích ứng màn hình.",
    "sections": [
      {
        "title": "Flex container và flex item",
        "body": "Thiết lập display: flex cho phần tử cha để sắp xếp phần tử con theo một chiều. gap tạo khoảng cách giữa các mục."
      },
      {
        "title": "Hướng và căn chỉnh",
        "body": "flex-direction xác định hướng hàng hoặc cột; justify-content căn theo trục chính; align-items căn theo trục phụ. flex-wrap: wrap cho phép mục xuống dòng."
      },
      {
        "title": "Thiết kế responsive",
        "body": "Kết hợp chiều rộng linh hoạt, max-width và media query để giao diện đọc được trên điện thoại. Thử cả viewport nhỏ và bàn phím."
      }
    ],
    "code": "<div class=\"cards\">\n  <div>HTML</div>\n  <div>CSS</div>\n  <div>Practice</div>\n</div>\n<style>\n  .cards { display: flex; flex-wrap: wrap; gap: 12px; }\n  .cards > div { flex: 1 1 140px; padding: 16px; background: #dbeafe; }\n  @media (max-width: 600px) {\n    .cards { flex-direction: column; }\n  }\n</style>",
    "exercise": "Tạo ba card kỹ năng hiển thị ngang ở máy tính và dọc trên điện thoại.",
    "mistakes": "Quên flex-wrap; đặt min-width lớn gây tràn; nhầm justify-content với align-items.",
    "quiz": [
      {
        "question": "Thuộc tính nào bật Flexbox?",
        "options": [
          "display: flex",
          "position: static",
          "font-style: flex"
        ],
        "correct": 0,
        "explanation": "display: flex tạo flex container."
      },
      {
        "question": "flex-wrap: wrap có tác dụng gì?",
        "options": [
          "Cho phép phần tử xuống dòng",
          "Ẩn toàn bộ phần tử",
          "Đổi font"
        ],
        "correct": 0,
        "explanation": "wrap cho phép các flex item xuống dòng."
      },
      {
        "question": "Media query có thể dựa vào gì?",
        "options": [
          "Chiều rộng viewport",
          "Nội dung mật khẩu",
          "Tên người học"
        ],
        "correct": 0,
        "explanation": "Media query áp dụng CSS theo điều kiện như chiều rộng."
      }
    ],
    "expectedResult": "Flexbox sắp xếp phần tử linh hoạt; media query điều chỉnh cách hiển thị theo kích thước màn hình."
  }
];
