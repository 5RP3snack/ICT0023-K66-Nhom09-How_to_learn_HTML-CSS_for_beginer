document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("snippet-list");
  const emptyMessage = document.getElementById("snippet-empty");
  const searchInput = document.getElementById("snippet-search");
  const topicSelect = document.getElementById("snippet-topic");
  const levelSelect = document.getElementById("snippet-level");
  const status = document.createElement("p");
  status.id = "snippet-count";
  status.setAttribute("role", "status");
  container.before(status);

  function createSnippetCard(item) {
    const column = document.createElement("div");
    column.className = "col-12 col-md-6";
    const article = document.createElement("article");
    article.className = "content-card h-100";
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${item.id} · ${item.topic} · ${item.level}`;
    const heading = document.createElement("h3");
    heading.textContent = item.title;
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = item.code;
    pre.append(code);
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "btn btn-outline-primary btn-sm";
    copy.textContent = "Sao chép mã";
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(item.code);
        copy.textContent = "Đã sao chép";
      } catch {
        copy.textContent = "Không thể sao chép; hãy chọn mã thủ công";
      }
    });
    article.append(meta, heading, pre, copy);
    column.append(article);
    return column;
  }

  function renderSnippets() {
    const keyword = searchInput.value.trim().toLocaleLowerCase("vi");
    const topic = topicSelect.value;
    const level = levelSelect.value;
    const filtered = SNIPPETS.filter(item => {
      const matchesText = `${item.title} ${item.code} ${item.topic}`.toLocaleLowerCase("vi").includes(keyword);
      const matchesTopic = topic === "Tất cả" || item.topic === topic;
      const matchesLevel = level === "Tất cả" || item.level === level;
      return matchesText && matchesTopic && matchesLevel;
    });
    container.replaceChildren(...filtered.map(createSnippetCard));
    emptyMessage.hidden = filtered.length !== 0;
    status.textContent = `Đang hiển thị ${filtered.length}/${SNIPPETS.length} ví dụ.`;
  }

  if (window.jQuery) {
    window.jQuery("#snippet-search").on("input", renderSnippets);
    window.jQuery("#snippet-topic, #snippet-level").on("change", renderSnippets);
  } else {
    searchInput.addEventListener("input", renderSnippets);
    topicSelect.addEventListener("change", renderSnippets);
    levelSelect.addEventListener("change", renderSnippets);
  }
  document.getElementById("snippet-filter-form").addEventListener("submit", event => event.preventDefault());
  renderSnippets();
});
