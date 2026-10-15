# CSS_CHANGELOG – nhánh `D.Anh_task`

**Phong cách:** Modern Education – sáng, thân thiện, bo góc mềm, xanh–tím chủ đạo, điểm nhấn ấm (vàng) và xanh lá cho "thành công".
**Phạm vi:** sửa `css/style.css` (khối `MODERN EDUCATION LAYER` ở cuối file) và **1 thay đổi nhỏ trong `index.html`** (thêm `<span class="text-gradient">` vào h1) và `js/lesson.js` (thêm thanh đáy + bảng mục lục cho điện thoại). Nhánh `main` không bị thay đổi.
**Nguyên tắc:** chỉ ghi đè/bổ sung; không xóa quy tắc cũ → muốn quay lại chỉ cần xóa khối cuối file.

## 1. Biến CSS MỚI (M1) – trong `:root`
| Biến | Giá trị / mục đích |
|---|---|
| `--sun` | `#f59e0b` – màu nhấn ấm (viền thẻ thư viện mã) |
| `--mint` | `#10b981` – màu "thành công" (khung bài tập) |
| `--brand-soft`, `--accent-soft` | nền nhạt xanh / tím cho badge, hover |
| `--grad-brand` | gradient xanh → tím dùng cho nút, vạch tiêu đề, mục đang chọn |
| `--shadow-sm / -md / -lg` | 3 cấp đổ bóng thống nhất |
| `--round-sm`, `--round-lg` | bo góc nhỏ (10px) / lớn (24px) |
| `--ease` | đường cong chuyển động |

Biến cũ (`--brand`, `--brand-dark`, `--accent`, `--ink`, `--muted`, `--canvas`, `--line`, `--surface`, `--round`) **giữ nguyên và được tái sử dụng**.

## 2. Các phần đã cải thiện

| # | Phần | Cải thiện | Class / ID **tái sử dụng** | Thành phần **mới** |
|---|---|---|---|---|
| M2 | Typography, tiêu đề trang | h1/h2 đậm hơn, giãn dòng đoạn văn 1.8, màu bôi chọn; đốm màu mờ ở góc `.page-heading` | `h1`, `h2`, `p`, `.page-heading`, `.container` | pseudo `.page-heading::after` |
| M3 | Thanh điều hướng | Cỡ chữ 0.9rem (dễ đọc hơn); mục đang mở có nền nhạt + gạch chân gradient | `.navbar-nav .nav-link`, `.active` | pseudo `.nav-link.active::after` |
| M4 | Hero trang chủ | Đốm màu xanh/vàng trang trí; nhãn `eyebrow` dạng viên thuốc; bóng đổ ảnh minh họa | `.hero`, `.hero-inner`, `.eyebrow`, `.hero-illustration` | pseudo `.hero::before`, `.hero::after` |
| M5 | Nút bấm | `.btn-primary` dùng gradient + bóng; hover/focus đậm hơn; outline và nút "Về dự án" có nền khi hover | `.btn-primary`, `.btn-outline-primary`, `.btn-hero-info`, `.btn-outline-secondary` | – |
| M6 | Thẻ, badge, tiêu đề mục | `.meta` thành badge viên thuốc; thẻ HTML viền xanh dương, thẻ CSS viền tím + badge tím; dòng "Học ngay →" trên thẻ bài học; vạch gradient dưới `h2` của mỗi mục; ô "Quy trình học" có số gradient + hiệu ứng nổi | `.content-card`, `.meta`, `.lesson-card`, `.snippet-card`, `.steps`, `#html-lessons`, `#css-lessons`, `.page-section` | pseudo `.lesson-card p:last-of-type::after`, `.page-section>.container>h2::after` |
| M7 | Khối thông báo | Biến thành "hộp thông báo" xanh nhạt; trạng thái rỗng của thư viện có khung nét đứt | `#feedback-status`, `#quiz-result`, `#playground-message`, `#snippet-empty` | – |
| M8 | Form & trắc nghiệm | Radio/checkbox màu thương hiệu; hover đáp án (chỉ khi chưa bị `disabled`); thẻ câu hỏi đổi nền khi đã chọn; ô lỗi rỗng không chiếm chỗ; placeholder dịu hơn | `.form-check`, `.form-check-input`, `.form-check-label`, `.quiz-card`, `.field-error`, `.form-control` | – |
| M9 | FAQ | Bỏ mũi tên mặc định, dùng nút tròn **+ / −**; viền xanh và bóng khi mở | `.faq-item`, `.faq-item summary`, `[open]` | pseudo `summary::after` |
| M10 | Footer | Nền gradient xanh đậm → tím đậm; vạch gradient 4px phía trên | `.site-footer` | pseudo `.site-footer::before` |
| M11 | Trang bài giảng | Mục đang học dùng gradient; thanh cuộn mảnh; khung "Thử ngay" có bóng; khung bài tập màu xanh lá | `.lesson-sidebar`, `.active`, `.tryit`, `.lesson-note`, `.lesson-exercise`, `.lesson-nav` | – |
| M13 | Từ khóa tiêu đề trang chủ | Cụm "những dòng code đầu tiên" tô gradient xanh–tím (có màu dự phòng nếu trình duyệt cũ) | `.hero-inner > h1` | **class mới `.text-gradient`** |
| M14 | **Đổi bài trên điện thoại** | Màn hình < 992px: ẩn mục lục đặt đầu trang; thêm **thanh cố định ở đáy** (❮ Trước · ☰ Bài x/12 · Tiếp ❯, nút cao 48px, tính cả tai thỏ) và **bảng mục lục kéo từ dưới lên** (72% chiều cao, tự cuộn tới bài đang học). Không cần lướt lên đầu trang | `.lesson-sidebar`, `.lesson-nav` (giữ nguyên), `.btn`, `.btn-primary`, `.btn-outline-primary`, `.active`, Bootstrap `.offcanvas` | **class mới** `.lesson-mobilebar`, `.lesson-mb-prev`, `.lesson-mb-list`, `.lesson-mb-next`, `.lesson-drawer-list`, `body.has-lesson-bar`; **id mới** `#lesson-drawer`, `#lesson-drawer-title` |
| M12 | Responsive & in ấn | Mobile: nút hero full-width, thu nhỏ đốm màu; **In bài**: ẩn header/footer/mục lục/nút, code xuống dòng | `.hero-inner`, `.page-heading`, `.lesson-layout`, `.lesson-content`, `pre` | `@media print` |

## 3. Tổng kết class / id
- **Class/ID MỚI cho điều hướng điện thoại (M14, tạo bằng `js/lesson.js`):** `.lesson-mobilebar`, `.lesson-mb-prev`, `.lesson-mb-list`, `.lesson-mb-next`, `.lesson-drawer-list`, `body.has-lesson-bar`, `#lesson-drawer`, `#lesson-drawer-title`.
- **Class MỚI: `.text-gradient`** – định nghĩa ở M13 (`css/style.css`), dùng 1 lần trong `index.html` (`<h1>` của `.hero`); có thể tái dùng cho bất kỳ tiêu đề nào. Các hiệu ứng còn lại dùng class cũ + pseudo-element (`::before/::after`) nên không phải sửa HTML.
- **ID tái sử dụng:** `#html-lessons`, `#css-lessons`, `#feedback-status`, `#quiz-result`, `#playground-message`, `#snippet-empty`.
- **Biến mới:** xem mục 1.

## 4. Gợi ý chưa làm (cần HTML/JS hoặc cần bạn quyết định)
- Dark mode (`prefers-color-scheme`) – cần bảng màu tối.
- Hiệu ứng cuộn hiện dần (reveal) – cần JS (IntersectionObserver).
- Lưu ý: `.page-section:nth-of-type(even)` (nền trắng xen kẽ) phụ thuộc thứ tự thẻ; nên đổi sang class riêng nếu thêm/bớt section.
