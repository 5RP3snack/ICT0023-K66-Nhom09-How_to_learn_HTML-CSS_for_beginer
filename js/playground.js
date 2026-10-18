document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("playground-form");
  const htmlEditor = document.getElementById("html-editor");
  const cssEditor = document.getElementById("css-editor");
  const frame = document.getElementById("preview-frame");
  const message = document.getElementById("playground-message");
  const initialHTML = htmlEditor.value;
  const initialCSS = cssEditor.value;

  function runCode() {
    const html = htmlEditor.value;
    const css = cssEditor.value.replace(/<\/style/gi, "<\\/style");
    if (!html.trim() && !css.trim()) {
      frame.srcdoc = "";
      message.textContent = "Chưa có mã để hiển thị. Nhập HTML hoặc chọn Dùng thử.";
      return;
    }
    frame.srcdoc = `<!doctype html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${css}</style></head><body>${html}</body></html>`;
    message.textContent = "Đã cập nhật bản xem trước. Mã chỉ chạy trong iframe sandbox.";
  }

  document.getElementById("run-code").addEventListener("click", runCode);
  document.getElementById("load-sample").addEventListener("click", () => {
    htmlEditor.value = '<main class="demo"><h1>Chào mừng đến Learn Web!</h1><p>Đây là một ví dụ HTML và CSS.</p><button>Khám phá</button></main>';
    cssEditor.value = 'body { font-family: Arial, sans-serif; padding: 24px; }\n.demo { background: #eff6ff; padding: 20px; border-radius: 12px; }\nh1 { color: #2563eb; }\nbutton { background: #2563eb; color: white; border: 0; padding: 10px 16px; border-radius: 8px; }';
    runCode();
  });
  form.addEventListener("reset", () => {
    requestAnimationFrame(() => {
      htmlEditor.value = initialHTML;
      cssEditor.value = initialCSS;
      runCode();
    });
  });
  runCode();
});
