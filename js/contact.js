document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const name = document.getElementById("feedback-name");
  const topic = document.getElementById("feedback-topic");
  const message = document.getElementById("feedback-message");
  const status = document.getElementById("feedback-status");
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
      !displayName ? "Vui lòng nhập bí danh." : displayName.length < 2 ? "Bí danh phải có ít nhất 2 ký tự." : "",
      !topic.value ? "Vui lòng chọn chủ đề." : "",
      !feedback ? "Vui lòng nhập góp ý." : feedback.length < 10 ? "Góp ý phải có ít nhất 10 ký tự." : ""
    ];
    fields.forEach((field, index) => showError(field, errors[index]));
    const invalidIndex = errors.findIndex(Boolean);
    if (invalidIndex >= 0) fields[invalidIndex].input.focus();
    return invalidIndex < 0;
  }

  document.getElementById("submit-feedback").addEventListener("click", () => {
    if (!validate()) {
      status.textContent = "Thông tin chưa hợp lệ. Hãy kiểm tra các trường được đánh dấu.";
      return;
    }
    status.textContent = `Phản hồi mẫu hợp lệ: ${message.value.trim().length} ký tự, thuộc chủ đề ${topic.options[topic.selectedIndex].text}. Không có dữ liệu nào được gửi hoặc lưu.`;
  });
  fields.forEach(field => field.input.addEventListener("input", () => {
    if (field.error.textContent) showError(field, "");
  }));
  form.addEventListener("reset", () => {
    requestAnimationFrame(() => {
      fields.forEach(field => showError(field, ""));
      status.textContent = "Dữ liệu đã được xóa. Phản hồi chỉ là mô phỏng.";
    });
  });
});
