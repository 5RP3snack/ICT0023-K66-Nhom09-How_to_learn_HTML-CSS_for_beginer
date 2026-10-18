document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const name = document.getElementById("feedback-name");
  const topic = document.getElementById("feedback-topic");
  const message = document.getElementById("feedback-message");
  const status = document.getElementById("feedback-status");
  const button = document.getElementById("submit-feedback");
  const website = document.getElementById("feedback-website");
  const fields = [
    { input: name, error: document.getElementById("name-error") },
    { input: topic, error: document.getElementById("topic-error") },
    { input: message, error: document.getElementById("message-error") }
  ];

  function showError(field, text) {
    field.error.textContent = text;
    field.input.classList.toggle("is-invalid", Boolean(text));
    field.input.setAttribute("aria-invalid", String(Boolean(text)));
  }

  function validate() {
    const displayName = name.value.trim();
    const feedback = message.value.trim();
    const errors = [
      !displayName ? "Vui lòng nhập tên hiển thị." : displayName.length < 2 ? "Tên hiển thị phải có ít nhất 2 ký tự." : "",
      !topic.value ? "Vui lòng chọn chủ đề." : "",
      !feedback ? "Vui lòng nhập góp ý." : feedback.length < 10 ? "Góp ý phải có ít nhất 10 ký tự." : ""
    ];
    fields.forEach((field, index) => showError(field, errors[index]));
    const invalidIndex = errors.findIndex(Boolean);
    if (invalidIndex >= 0) fields[invalidIndex].input.focus();
    return invalidIndex < 0;
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!validate()) {
      status.textContent = "Thông tin chưa hợp lệ. Hãy kiểm tra các trường được đánh dấu.";
      return;
    }
    button.disabled = true;
    button.textContent = "Đang gửi...";
    status.textContent = "Đang chuyển góp ý đến hệ thống email...";
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.value.trim(), topic: topic.value, message: message.value.trim(), website: website.value })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Không thể gửi góp ý.");
      form.reset();
      fields.forEach(field => showError(field, ""));
      status.textContent = result.message;
    } catch (error) {
      status.textContent = error.message || "Có lỗi xảy ra. Vui lòng thử lại.";
    } finally {
      button.disabled = false;
      button.textContent = "Gửi góp ý";
    }
  });

  fields.forEach(field => field.input.addEventListener("input", () => {
    if (field.error.textContent) showError(field, "");
  }));
  form.addEventListener("reset", () => requestAnimationFrame(() => {
    fields.forEach(field => showError(field, ""));
    status.textContent = "Biểu mẫu đã được xóa.";
  }));
});
