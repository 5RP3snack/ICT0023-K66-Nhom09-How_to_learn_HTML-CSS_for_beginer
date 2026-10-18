# UI Guidelines v0.3

- Primary `#2563eb`, accent `#7c3aed`, text `#0f172a`, muted `#64748b`, background `#f7f9fe`.
- Font `Be Vietnam Pro`, fallback system-ui. Code `Consolas`, monospace.
- Layout: Bootstrap `.container`, `.row`, `.col-*`, responsive breakpoint `lg` cho Navbar/Playground.
- Class tái sử dụng: `.site-header`, `.page-heading`, `.page-section`, `.content-card`, `.lesson-card`, `.snippet-card`, `.quiz-card`, `.site-footer`.
- Giữ nguyên ID tương tác phục vụ v0.4; tránh nhúng JavaScript nghiệp vụ trong HTML.
- Không dùng `overflow-x:hidden` trên `html`/`body` để che lỗi tràn ngang.
- Trình xem trước Playground luôn được đặt trong `iframe sandbox` khi hoạt động ở v0.4.
