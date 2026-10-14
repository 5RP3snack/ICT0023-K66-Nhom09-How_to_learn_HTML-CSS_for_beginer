# ICT0023-K66-Nhom09-Website tự học HTML/CSS cho người mới

* **Link GitHub Pages:** [https://5rp3snack.github.io/ICT0023-K66-Nhom09-How_to_learn_HTML-CSS_for_beginer/]
* **Tên chủ đề:** Website tự học HTML/CSS cho người mới

## Theo dõi tiến độ theo pull request

| STT | Họ và Tên | Tài khoản GitHub | Vai trò | Nhiệm theo issues |
| :-- | :--- | :--- | :--- | :--- |
| 1 | Trần Ngọc Sơn | @5RP3snack | Nhóm trưởng | Theo dõi tiến độ #1 mục 'Son-task' |
| 2 | Lềm Việt Thành | @thanhdrake07-art | Thành viên | Theo dõi tiến độ #2 mục 'Thanh-task' |
| 3 | Hà Văn Khuê | @khuehvk66sptin-star | Thành viên | Theo dõi tiến độ #3 mục 'Khue-task' |
| 3 | Tòng Duy Anh | @anhtdk66sptin-beep | Thành viên | Theo dõi tiến độ #4 mục 'D.Anh-task' |

## Khung chung
`<header class="site-header">` → `<nav class="site-nav">` → `<main id="main-content" class="site-main">` → `<footer class="site-footer">`.
Mỗi trang có một `h1`. Các phần lớn là `section.page-section` có `h2`; các card là `article.content-card` có `h3`.

## Class (tái sử dụng)
- `site-header`, `site-logo`, `site-nav`, `nav-list`, `site-main`, `site-footer`, `footer-nav`: vùng chung.
- `page-heading`, `hero`, `page-section`, `content-card`, `meta`, `eyebrow`: các khối hiển thị.
- `form-label`, `form-control`, `form-select`, `btn`, `row`, `col-*`: class Bootstrap.
- `field-error`, `code-input`, `preview-frame`, `faq-item`: thành phần theo chức năng.

## ID (duy nhất mỗi trang, phục vụ JavaScript sau này)
- Chung: `main-content`.
- Library: `snippet-filter-form`, `snippet-search`, `snippet-topic`, `snippet-level`, `snippet-list`, `snippet-empty`.
- Playground: `playground-form`, `html-editor`, `css-editor`, `run-code`, `load-sample`, `reset-code`, `preview-frame`, `playground-message`.
- Quiz: `quiz-form`, `submit-quiz`, `reset-quiz`, `quiz-result`, `faq-accordion`, `q1-0`...`q10-2`.
- Contact: `feedback-form`, `feedback-name`, `feedback-topic`, `feedback-message`, `submit-feedback`, `feedback-status`, `name-error`, `topic-error`, `message-error`.

## Quy định
- Dùng kebab-case cho `class`, `id`, tên file; không đặt ID lặp trên cùng trang.
- Mỗi input có `label for` trỏ tới `id`, mỗi ảnh phải có `alt`, mỗi bảng có `caption` và tiêu đề cột.
- Link dùng đường dẫn tương đối để hoạt động ở GitHub Pages trong repository con.
- Chỉ tạo JS tương tác ở v0.4; ở v0.2 các chức năng chưa triển khai được đánh dấu `disabled` thay vì nút giả.
- Không dùng localStorage, sessionStorage, cookie hoặc gửi dữ liệu người dùng.
- Phân biệt rõ Bootstrap Grid và CSS tùy chỉnh: v0.2 chỉ có CSS đọc nội dung tối thiểu.
