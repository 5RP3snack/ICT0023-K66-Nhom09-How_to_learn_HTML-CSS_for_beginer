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
- Chung:`main-content`, `primary-nav`.
- Trang chủ:`project-info-modal`, `project-info-title`.
- Lộ trình học:`html-lessons`, `css-lessons`, `sample-lesson`.
- Library:`snippet-filter-form`, `snippet-search`, `snippet-topic`, `snippet-level`, `snippet-list`, `snippet-empty`.
- Playground:`playground-form`, `html-editor`, `css-editor`, `run-code`, `load-sample`, `reset-code`, `preview-title`, `preview-frame`, `playground-message`.
- Quiz:`quiz-form`, `submit-quiz`, `reset-quiz`, `quiz-result`, `faq`, `faq-accordion`, và `q1-0` đến `q10-2`.
- Contact:`feedback-form`, `feedback-name`, `feedback-topic`, `feedback-message`, `submit-feedback`, `feedback-status`, `name-error`, `topic-error`, `message-error`.

## Quy định
- Đặt tên: ID, class bổ sung theo `kebab-case`. Các ID navbar và modal đã được chuẩn hóa; các thuộc tính `aria-controls`, `aria-labelledby`, `data-bs-target` liên quan cũng cập nhật đồng bộ. Tên file HTML là chữ thường, kebab-case.
- Khả năng truy cập: input/select/textarea có `label for` tương ứng với `id`; ảnh có `alt`; bảng dữ liệu hiển thị có `caption` và tiêu đề cột `th`.
- Đường dẫn: link điều hướng dùng tên file tương đối, phù hợp GitHub Pages trong repository con. Cần giữ đúng tên file triển khai trên GitHub.
- JavaScript theo phiên bản: Chưa thêm JavaScript nghiệp vụ, áp dụng đối với bản v0.4. Các nút chạy thử, lọc thư viện, chấm điểm và kiểm tra phản hồi chưa triển khai vẫn `disabled` như bản gốc. Bootstrap bundle hiện có vẫn hỗ trợ menu và modal; FAQ dùng `details` thuần HTML.
- Quy tắc dữ liệu: Không thêm `localStorage`, `sessionStorage`, cookie hay chức năng gửi dữ liệu người dùng. Biểu mẫu liên hệ chỉ mô phỏng.
- Bootstrap Grid và CSS: Dùng `row` và `col-*` cho bố cục; CSS tùy chỉnh được giữ ở `css/style.css` 
