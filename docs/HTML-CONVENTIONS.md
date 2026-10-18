# Quy ước HTML — Learn Web – LVV UTB (v0.2)

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

## Tiến trình
TV01: index và khung chung; TV02: lessons; TV03: library và playground; TV04: quiz và contact. Mọi thay đổi chung về header/footer hoặc quy ước HTML phải được Driver review trước khi merge.
