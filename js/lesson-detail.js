document.addEventListener("DOMContentLoaded", () => {
  const lessonId = new URLSearchParams(window.location.search).get("id") || "H01";
  const currentIndex = LESSONS.findIndex(lesson => lesson.id === lessonId);
  const activeIndex = currentIndex < 0 ? 0 : currentIndex;
  const lesson = LESSONS[activeIndex];
  const completedLessons = new Set();
  const createElement = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  const createLink = (item, className) => {
    const link = createElement("a", `${item.id} · ${item.title}`, className);
    link.href = `lesson.html?id=${encodeURIComponent(item.id)}`;
    if (item.id === lesson.id) link.setAttribute("aria-current", "page");
    return link;
  };
  const content = document.getElementById("lesson-content");
  const form = document.getElementById("lesson-quiz-form");
  const result = document.getElementById("lesson-quiz-result");

  document.title = `${lesson.title} | Learn Web – LVV UTB`;
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-meta").textContent = `${lesson.id} · ${lesson.topic} · ${lesson.level}`;
  document.getElementById("lesson-objective").textContent = lesson.objective;

  const select = document.getElementById("lesson-select");
  const navigation = document.getElementById("lesson-navigation");
  LESSONS.forEach(item => {
    const option = createElement("option", `${item.id} · ${item.title}`);
    option.value = item.id;
    select.append(option);
    navigation.append(createLink(item, "lesson-nav-link"));
  });
  select.value = lesson.id;
  select.addEventListener("change", () => {
    window.location.href = `lesson.html?id=${encodeURIComponent(select.value)}`;
  });

  content.append(createElement("h2", "1. Mục tiêu bài học"));
  content.append(createElement("p", lesson.objective));
  content.append(createElement("h2", "2. Kiến thức trọng tâm"));
  lesson.sections.forEach((section, index) => {
    content.append(createElement("h3", `2.${index + 1}. ${section.title}`));
    content.append(createElement("p", section.body));
  });
  content.append(createElement("h2", "3. Ví dụ mã nguồn"));
  const codeBlock = createElement("pre");
  codeBlock.append(createElement("code", lesson.code));
  content.append(codeBlock);
  content.append(createElement("p", `Kết quả mong đợi: ${lesson.expectedResult}`, "lesson-expected-result"));
  const practiceLink = createElement("a", "Mở Playground để tự viết và chỉnh sửa mã →", "btn btn-outline-primary mt-2 mb-3");
  practiceLink.href = "playground.html";
  content.append(practiceLink);
  content.append(createElement("h2", "4. Bài tập thực hành"));
  content.append(createElement("p", lesson.exercise));
  content.append(createElement("h2", "5. Lỗi thường gặp"));
  content.append(createElement("p", lesson.mistakes));
  content.append(createElement("h2", "6. Tự kiểm tra kiến thức"));
  const reviewLink = createElement("a", "Làm bài kiểm tra riêng của bài học →", "btn btn-primary mb-3");
  reviewLink.href = `quiz.html?id=${encodeURIComponent(lesson.id)}`;
  content.append(reviewLink);

  lesson.quiz.forEach((item, questionIndex) => {
    const fieldset = createElement("fieldset", undefined, "content-card mb-3 lesson-question");
    fieldset.append(createElement("legend", `Câu ${questionIndex + 1}. ${item.question}`, "h5"));
    item.options.forEach((optionText, optionIndex) => {
      const wrapper = createElement("div", undefined, "form-check");
      const input = createElement("input", undefined, "form-check-input");
      const id = `lesson-q${questionIndex}-a${optionIndex}`;
      input.type = "radio";
      input.name = `lesson-question-${questionIndex}`;
      input.id = id;
      input.value = String(optionIndex);
      const label = createElement("label", optionText, "form-check-label");
      label.htmlFor = id;
      wrapper.append(input, label);
      fieldset.append(wrapper);
    });
    form.append(fieldset);
  });

  function clearQuizFeedback() {
    form.querySelectorAll(".answer-feedback").forEach(node => node.remove());
    form.querySelectorAll("fieldset").forEach(node => node.classList.remove("border-success", "border-danger"));
    result.textContent = "";
  }
  document.getElementById("lesson-submit").addEventListener("click", () => {
    clearQuizFeedback();
    let score = 0;
    let missing = 0;
    lesson.quiz.forEach((question, index) => {
      const fieldset = form.querySelectorAll("fieldset")[index];
      const selected = fieldset.querySelector("input:checked");
      if (!selected) missing++;
      const correct = selected !== null && Number(selected.value) === question.correct;
      if (correct) score++;
      fieldset.classList.add(correct ? "border-success" : "border-danger");
      const explanation = createElement("p", `${correct ? "Chính xác" : "Chưa đúng"}. ${question.explanation}`, "answer-feedback mt-2");
      fieldset.append(explanation);
    });
    result.textContent = `Kết quả: ${score}/${lesson.quiz.length} câu (${Math.round(score / lesson.quiz.length * 100)}%). ${missing ? `Còn ${missing} câu chưa trả lời.` : "Bạn đã hoàn thành bài ôn tập."} Kết quả chỉ mang tính tham khảo.`;
    result.focus();
  });
  document.getElementById("lesson-reset").addEventListener("click", () => {
    form.reset();
    clearQuizFeedback();
  });
  const completedButton = document.getElementById("lesson-complete");
  completedButton.addEventListener("click", () => {
    if (completedLessons.has(lesson.id)) completedLessons.delete(lesson.id);
    else completedLessons.add(lesson.id);
    const finished = completedLessons.has(lesson.id);
    completedButton.textContent = finished ? "Đã đánh dấu ✓" : "Đánh dấu đã học";
    completedButton.setAttribute("aria-pressed", String(finished));
  });
  const previous = document.getElementById("previous-lesson");
  const next = document.getElementById("next-lesson");
  if (activeIndex > 0) {
    previous.href = `lesson.html?id=${LESSONS[activeIndex - 1].id}`;
    previous.textContent = `← ${LESSONS[activeIndex - 1].title}`;
  } else previous.textContent = "← Lộ trình";
  if (activeIndex < LESSONS.length - 1) {
    next.href = `lesson.html?id=${LESSONS[activeIndex + 1].id}`;
    next.textContent = `${LESSONS[activeIndex + 1].title} →`;
  } else {
    next.href = `quiz.html?id=${encodeURIComponent(lesson.id)}`;
    next.textContent = "Ôn tập tổng hợp →";
  }
});
