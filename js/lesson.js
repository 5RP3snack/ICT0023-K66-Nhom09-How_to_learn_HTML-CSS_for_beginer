(function () {
  var L = window.LESSONS || [];
  var params = new URLSearchParams(location.search);
  var id = (params.get("id") || "H01").toUpperCase();
  var idx = L.findIndex(function (x) { return x.id === id; });
  if (idx < 0) idx = 0;
  var cur = L[idx];

  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  // Sidebar
  var side = document.getElementById("lesson-sidebar");
  var html = "";
  ["HTML", "CSS"].forEach(function (t) {
    html += "<h2>" + t + (t === "HTML" ? " cơ bản & mở rộng" : " cơ bản & bố cục") + "</h2><ul>";
    L.filter(function (x) { return x.track === t; }).forEach(function (x) {
      html += '<li><a href="lesson.html?id=' + x.id + '"' + (x.id === cur.id ? ' class="active" aria-current="page"' : "") + ">" + x.id + " · " + esc(x.title) + "</a></li>";
    });
    html += "</ul>";
  });
  side.innerHTML = html;

  // Content
  var c = '<p class="meta">' + cur.id + " · " + cur.track + " · " + cur.level + "</p>";
  c += "<h1>" + esc(cur.title) + "</h1>";
  c += '<div class="lesson-progress" role="progressbar" aria-valuemin="1" aria-valuemax="' + L.length + '" aria-valuenow="' + (idx + 1) + '"><span style="width:' + ((idx + 1) / L.length * 100) + '%"></span></div>';
  c += "<p><em>" + esc(cur.summary) + "</em></p>";
  cur.blocks.forEach(function (b) {
    if (b.h) c += "<h2>" + b.h + "</h2>";
    else if (b.p) c += "<p>" + b.p + "</p>";
    else if (b.note) c += '<div class="lesson-note"><strong>Lưu ý:</strong> ' + esc(b.note) + "</div>";
    else if (b.code) c += "<pre><code>" + esc(b.code) + "</code></pre>";
  });
  c += '<h2>Thử ngay</h2><div class="tryit"><div class="tryit-head">Ví dụ: sửa mã bên trái rồi bấm “Chạy”</div>' +
    '<div class="tryit-grid"><textarea id="tryit-code" spellcheck="false" aria-label="Mã ví dụ"></textarea>' +
    '<iframe id="tryit-frame" sandbox="" title="Kết quả ví dụ"></iframe></div>' +
    '<div class="tryit-actions"><button type="button" class="btn btn-success btn-sm" id="tryit-run">Chạy ▶</button>' +
    '<button type="button" class="btn btn-outline-secondary btn-sm" id="tryit-reset">Đặt lại</button></div></div>';
  c += '<div class="lesson-exercise"><strong>Bài tập:</strong> ' + esc(cur.exercise) + "</div>";
  var prev = L[idx - 1], next = L[idx + 1];
  c += '<div class="lesson-nav">' +
    (prev ? '<a class="btn btn-outline-primary" href="lesson.html?id=' + prev.id + '">❮ ' + esc(prev.title) + "</a>" : '<a class="btn btn-outline-primary" href="lessons.html">❮ Về lộ trình</a>') +
    (next ? '<a class="btn btn-primary" href="lesson.html?id=' + next.id + '">' + esc(next.title) + " ❯</a>" : '<a class="btn btn-primary" href="quiz.html">Làm bài ôn tập ❯</a>') +
    "</div>";
  document.getElementById("lesson-content").innerHTML = c;
  document.title = cur.title + " | Learn Web – LVV UTB";

  // ===== Điều hướng nhanh cho điện thoại (thanh đáy + bảng mục lục) =====
  document.body.classList.add("has-lesson-bar");
  var bar = document.createElement("nav");
  bar.className = "lesson-mobilebar";
  bar.setAttribute("aria-label", "Chuyển bài nhanh");
  bar.innerHTML =
    (prev ? '<a class="btn btn-outline-primary lesson-mb-prev" href="lesson.html?id=' + prev.id + '" aria-label="Bài trước: ' + esc(prev.title) + '">❮ Trước</a>'
          : '<span class="btn btn-outline-primary lesson-mb-prev disabled" aria-disabled="true">❮ Trước</span>') +
    '<button type="button" class="btn btn-primary lesson-mb-list" data-bs-toggle="offcanvas" data-bs-target="#lesson-drawer" aria-controls="lesson-drawer" aria-label="Mở mục lục, đang ở bài ' + (idx + 1) + ' trên ' + L.length + '">☰ Bài ' + (idx + 1) + "/" + L.length + "</button>" +
    (next ? '<a class="btn btn-outline-primary lesson-mb-next" href="lesson.html?id=' + next.id + '" aria-label="Bài tiếp: ' + esc(next.title) + '">Tiếp ❯</a>'
          : '<a class="btn btn-outline-primary lesson-mb-next" href="quiz.html">Ôn tập ❯</a>');
  document.body.appendChild(bar);

  var drawer = document.createElement("div");
  drawer.className = "offcanvas offcanvas-bottom";
  drawer.id = "lesson-drawer";
  drawer.tabIndex = -1;
  drawer.setAttribute("aria-labelledby", "lesson-drawer-title");
  drawer.innerHTML =
    '<div class="offcanvas-header"><h2 class="offcanvas-title fs-5" id="lesson-drawer-title">Mục lục bài học</h2>' +
    '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Đóng"></button></div>' +
    '<nav class="offcanvas-body lesson-drawer-list" aria-label="Danh sách bài học">' + html + "</nav>";
  document.body.appendChild(drawer);
  drawer.addEventListener("shown.bs.offcanvas", function () {
    var a = drawer.querySelector("a.active");
    if (a) a.scrollIntoView({ block: "center" });
  });

  // Try it
  var ta = document.getElementById("tryit-code"), fr = document.getElementById("tryit-frame");
  function run() {
    fr.srcdoc = '<!DOCTYPE html><meta charset="utf-8"><body style="font-family:sans-serif;margin:12px">' + ta.value;
  }
  ta.value = cur.tryit;
  document.getElementById("tryit-run").addEventListener("click", run);
  document.getElementById("tryit-reset").addEventListener("click", function () { ta.value = cur.tryit; run(); });
  run();
})();
