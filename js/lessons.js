document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll("#html-lessons article, #css-lessons article"));
  if (!cards.length) return;
  const completed = new Set();
  const status = document.createElement("p");
  status.className = "lesson-progress";
  status.setAttribute("role", "status");
  document.querySelector(".page-heading .container")?.append(status);

  function updateProgress() {
    status.textContent = `Đã đánh dấu hoàn thành ${completed.size}/${cards.length} bài trong trang hiện tại. Tiến độ sẽ đặt lại khi tải lại trang.`;
  }

  cards.forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-outline-primary btn-sm mt-2";
    button.textContent = "Đánh dấu đã học";
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      if (completed.has(index)) completed.delete(index);
      else completed.add(index);
      const isDone = completed.has(index);
      button.textContent = isDone ? "Đã hoàn thành ✓" : "Đánh dấu đã học";
      button.setAttribute("aria-pressed", String(isDone));
      button.classList.toggle("btn-success", isDone);
      button.classList.toggle("btn-outline-primary", !isDone);
      updateProgress();
    });
    card.append(button);
  });
  updateProgress();
});
