# ICT0023-K66-Nhom09-Website tự học HTML/CSS cho người mới

* **Link GitHub Pages:** [https://5rp3snack.github.io/ICT0023-K66-Nhom09-How_to_learn_HTML-CSS_for_beginer/]
* **Tên chủ đề:** Website tự học HTML/CSS cho người mới

## Danh sách thành viên và phân công vai trò

| STT | Họ và Tên | Tài khoản GitHub | Vai trò | Nhiệm vụ chính |
| :-- | :--- | :--- | :--- | :--- |
| 1 | Trần Ngọc Sơn | @5RP3snack | Nhóm trưởng | Quản lý chung, Driver, backend |
| 2 | Lềm Việt Thành | @thanhdrake07-art | Thành viên | Thiết kế database, viết báo cáo |
| 3 | Hà Văn Khuê | @khuehvk66sptin-star | Thành viên | Thiết kế database, viết báo cáo |
| 3 | Tòng Duy Anh | @anhtdk66sptin-beep | Thành viên | Debug, sửa database, frontend |

# Learn Web – LVV UTB — HTML v0.2

## 6 trang
- `index.html`: trang chủ, lộ trình nổi bật.
- `lessons.html`: 12 bài học + 1 bài chi tiết mẫu.
- `library.html`: 12 snippet HTML/CSS, form lọc chưa bật.
- `playground.html`: vùng nhập code, iframe sandbox trống; chưa chạy mã.
- `quiz.html`: 10 câu quiz, 6 FAQ; quiz chưa bật.
- `contact.html`: form phản hồi mô phỏng; kiểm tra chưa bật.

## Giới hạn v0.2
- Bootstrap 5.3.3 qua CDN cần kết nối internet để tải style; vẫn đọc được nội dung HTML khi ngoại tuyến.
- `css/style.css` chỉ định dạng tối thiểu để đọc nội dung. UI Modern Education hoàn chỉnh thuộc v0.3.
- Chưa viết JavaScript. Vùng tìm kiếm, quiz, chạy code và gửi phản hồi ở trạng thái disabled có chủ đích.
- Trang học mới có **1 bài chi tiết hoàn chỉnh mẫu** và 12 mục lộ trình; cần viết chi tiết 11 bài còn lại trong các PR tiếp theo để sản phẩm cuối đáp ứng nội dung thật.
- CSS / HTML trong ví dụ là nội dung minh họa cục bộ, không sao chép từ nguồn ngoài.

# Learn Web – LVV UTB | v0.3-giao-dien

## Phạm vi
Bản giao diện cập nhật dựa trên 6 HTML và CSS do Driver gửi ngày 14/10/2026. Giữ ID chính để tích hợp JS v0.4: `snippet-search`, `snippet-topic`, `snippet-level`, `snippet-list`, `html-editor`, `css-editor`, `run-code`, `load-sample`, `reset-code`, `preview-frame`, `quiz-form`, `submit-quiz`, `reset-quiz`, `feedback-form`, `submit-feedback`.

## Nội dung đã làm
- Navbar Bootstrap responsive (collapse trên mobile); modal giới thiệu trên trang chủ.
- Hero có hình minh họa mã nguồn tạo bằng HTML/CSS (không phụ thuộc hình bên ngoài).
- CSS đồng bộ card bài học, thư viện, Playground, Quiz, FAQ, Contact, footer.
- Bootstrap 5.3.3 CDN và bundle cho Navbar/Modal; CSS riêng trong `css/style.css`.
- Giữ các công cụ v0.4 ở trạng thái disabled. FAQ hoạt động bằng phần tử HTML `details`.

## Cài đặt
1. Sao lưu mã trên repository GitHub trước khi merge.
2. Tạo nhánh `feat/v0.3-ui` từ `main`.
3. Chép 6 tệp HTML cùng thư mục `css` vào gốc repository; không chép đè README, CONTRIBUTIONS, SOURCES hiện tại.
4. Mở `index.html` bằng trình duyệt và kiểm tra đủ 6 trang. CDN Bootstrap cần Internet.
5. Review Pull Request, merge vào `main`, kiểm tra GitHub Pages rồi tạo tag `v0.3-giao-dien`.

## Kiểm thử cần làm trên trình duyệt
- 375px, 768px, 1440px: không tràn ngang; Navbar thu gọn và mở đúng trên điện thoại.
- Từng menu dẫn đúng trang và highlight trang hiện tại.
- Modal “Về dự án” mở và đóng được bằng nút, Escape; FAQ mở được bằng bàn phím.
- Không báo lỗi 404 với các tệp CSS và Bootstrap CDN.
- Tất cả nút v0.4 vẫn disabled, không được mô tả là đã hoạt động.

## Hạn chế
Các bài học, ví dụ và quiz vẫn là nội dung HTML tĩnh. Chưa render từ mảng đối tượng, chưa có jQuery tìm kiếm, chưa có Playground chạy mã hay form validation; thực hiện ở v0.4. Biểu tượng thương hiệu dùng ký tự </> để giao diện chạy được độc lập; có thể tích hợp logo nhóm khi tệp ảnh được cung cấp. Không có backend hoặc lưu trữ.

## Quy chuẩn Clean Code

- HTML thụt lề 2 dấu cách và phân tách các khối cấu trúc rõ ràng.
- CSS: mỗi selector và mỗi khai báo được trình bày trên dòng riêng.
- Không thêm comment trong mã nếu không thực sự cần thiết.
- Giữ nguyên ID, đường dẫn và nội dung nền tảng v0.3 để phục vụ v0.4.

# Learn Web – LVV UTB · v0.4-tuong-tac

Phiên bản phát triển từ `Final_Project.rar` của nhóm. Giữ nguyên 6 trang HTML, hệ thống CSS, logo và Bootstrap.

## Các chức năng đã triển khai

- `library.html`: dữ liệu mảng đối tượng `SNIPPETS` trong `data/snippets.js`, render card bằng DOM, tìm kiếm và lọc bằng jQuery, sao chép code qua Clipboard API.
- `lessons.html`: đánh dấu đã học bằng `Set` trong bộ nhớ phiên trang, không lưu sau tải lại.
- `playground.html`: nhập HTML/CSS, nút chạy, dùng thử, đặt lại; hiển thị trong `iframe sandbox` không cấp quyền chạy script.
- `quiz.html`: 10 câu hỏi, chấm điểm và giải thích đáp án, đặt lại.
- `contact.html`: kiểm tra bí danh, chủ đề, nội dung; hiển thị lỗi từng trường; mô phỏng, không gửi hay lưu trữ.

## Chạy dự án

Mở `index.html` hoặc chạy với VS Code Live Server. Bootstrap và jQuery sử dụng CDN nên cần kết nối Internet để nạp đúng các thư viện.

## Những điểm cần lưu ý

- Dữ liệu các trang không được lưu trong localStorage, sessionStorage, cookie hoặc backend.
- jQuery xử lý tìm kiếm/lọc ở thư viện, có cơ chế sự kiện JS dự phòng khi CDN không tải được.
- Clipboard API thường yêu cầu HTTPS hoặc localhost; trên `file://` có thể không hoạt động.
- Các bài học ngoài bài mẫu chưa có toàn văn; tiếp tục biên soạn trước bản cuối.
- Bộ quiz hiện sử dụng 10 câu từ nội dung v0.3, không thay đổi kiến thức.
- Cần kiểm thử trình duyệt thật, responsive và DevTools Console trước khi tạo Git tag.

## Quy trình Git

Tạo branch `feat/v0.4-interactions`, commit có ý nghĩa, tạo Pull Request và mời thành viên khác review. Sau khi merge, nghiệm thu rồi tạo tag `v0.4-tuong-tac`.
