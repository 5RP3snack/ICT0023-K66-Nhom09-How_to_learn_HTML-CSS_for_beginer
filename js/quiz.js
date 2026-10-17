
(function () {
  'use strict';

  if (window.WebStudyQuiz) return;

  const ALPHABET = ['A', 'B', 'C', 'D'];
  const STYLE_ID = 'webstudy-quiz-styles';
  const CSS = `

    .wsq-app button,.wsq-app select { font:inherit; }
    .wsq-app button { cursor:pointer; }
    .wsq-app button:focus-visible,.wsq-app select:focus-visible,
    .wsq-app input:focus-visible + .wsq-choice-text { outline:3px solid #93c5fd; outline-offset:3px; }
    .wsq-app .wsq-hero { background:linear-gradient(125deg,#154cba,#336fe8 68%,#5197ff);
      color:white; border-radius:20px; padding:25px 28px; box-shadow:0 16px 38px #1d4ed81c; }
    .wsq-brand-row { display:flex; align-items:center; gap:15px; }
    .wsq-logo { width:49px; height:49px; background:#ffffff22; border:1px solid #ffffff55;
      display:grid; place-items:center; border-radius:14px; font-size:19px; font-weight:850; flex:none; }
    .wsq-hero h1 { font-size:25px; font-weight:780; line-height:1.3; margin:0; color:white; }
    .wsq-hero p { margin:5px 0 0; color:#e2edff; font-size:14px; }
    .wsq-settings { margin-top:21px; display:flex; flex-wrap:wrap; gap:11px; align-items:flex-end; }
    .wsq-select-wrap { display:flex; flex-direction:column; gap:5px; flex:1 1 300px; }
    .wsq-select-wrap label { font-size:12px; font-weight:700; color:#eaf2ff; }
    .wsq-select { width:100%; height:43px; border-radius:10px; border:1px solid #cbdcfb;
      padding:0 12px; background:white; color:#152c53; font-weight:600; }
    .wsq-lesson-nav { display:flex; gap:7px; }
    .wsq-lesson-nav button { height:43px; border:1px solid #ffffff73; background:#ffffff1c;
      color:white; border-radius:10px; padding:0 13px; font-weight:650; }
    .wsq-lesson-nav button:hover:not(:disabled) { background:#ffffff38; }
    .wsq-lesson-nav button:disabled { cursor:default; opacity:.4; }
    .wsq-summary { border:1px solid var(--wsq-line); border-radius:15px; background:#fff;
      padding:20px 22px; margin:16px 0 19px; box-shadow:0 5px 20px #194a8e08; }
    .wsq-summary-top { display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px; align-items:center; }
    .wsq-lesson-title { margin:0; font-size:19px; font-weight:770; color:#142d57; }
    .wsq-count { font-size:13px; font-weight:750; color:#235bc0; background:#e8f0ff;
      border-radius:30px; padding:5px 11px; white-space:nowrap; }
    .wsq-progress-track { height:9px; background:#e8edf5; border-radius:30px; overflow:hidden; margin-top:16px; }
    .wsq-progress-fill { width:0; height:100%; background:linear-gradient(90deg,#2563eb,#60a5fa);
      transition:width .18s ease; border-radius:30px; }
    .wsq-source { color:var(--wsq-muted); font-size:12px; margin-top:12px; }
    .wsq-source summary { cursor:pointer; font-weight:600; }
    .wsq-source p { margin:5px 0 0; }
    .wsq-questions { display:grid; gap:15px; }
    .wsq-question { margin:0; background:#fff; border:1px solid var(--wsq-line); border-radius:15px;
      padding:19px 21px; box-shadow:0 5px 18px #15345e08; }
    .wsq-qhead { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; margin-bottom:15px; }
    .wsq-qtitle { font-size:15px; font-weight:750; color:#152d54; margin:0; line-height:1.6;
      white-space:pre-wrap; overflow-wrap:anywhere; }
    .wsq-level { font-size:11px; font-weight:700; color:#6d57b7; background:#f2edff;
      border-radius:20px; padding:4px 10px; white-space:nowrap; flex:none; }
    .wsq-options { display:grid; gap:9px; }
    .wsq-option { display:flex; align-items:flex-start; gap:11px; min-height:47px;
      padding:11px 12px; border:1px solid #e1e8f2; border-radius:10px;
      background:#fcfdff; cursor:pointer; transition:background .15s,border-color .15s; }
    .wsq-option:hover { border-color:#9bbcf4; background:#f5f9ff; }
    .wsq-option:has(input:checked) { background:#edf4ff; border-color:#7faaf9; }
    .wsq-option input { flex:none; width:17px; height:17px; margin:3px 0 0; accent-color:#2563eb; cursor:pointer; }
    .wsq-choice-text { flex:1; display:flex; gap:10px; align-items:baseline; overflow-wrap:anywhere; min-width:0; }
    .wsq-letter { font-weight:790; color:#3167c5; flex:none; }
    .wsq-answer { white-space:pre-wrap; overflow-wrap:anywhere; }
    .wsq-app.wsq-graded .wsq-option { cursor:default; }
    .wsq-app.wsq-graded .wsq-option:hover { background:#fcfdff; border-color:#e1e8f2; }
    .wsq-app.wsq-graded .wsq-option.wsq-is-correct,
    .wsq-app.wsq-graded .wsq-option.wsq-is-correct:hover { background:#eaf8f0; border-color:#4caf75; }
    .wsq-app.wsq-graded .wsq-option.wsq-is-wrong,
    .wsq-app.wsq-graded .wsq-option.wsq-is-wrong:hover { background:#fff0f0; border-color:#e88c8c; }
    .wsq-app.wsq-graded .wsq-option.wsq-is-correct .wsq-letter { color:#166534; }
    .wsq-app.wsq-graded .wsq-option.wsq-is-wrong .wsq-letter { color:#b42331; }
    .wsq-feedback { margin:13px 0 0; border-radius:9px; font-size:13px; padding:9px 12px;
      background:#f2f6fe; color:#29436a; }
    .wsq-feedback.wsq-good { color:#166534; background:#eaf8f0; }
    .wsq-feedback.wsq-bad { color:#93303c; background:#fff1f1; }
    .wsq-controls { display:flex; gap:11px; flex-wrap:wrap; align-items:center; margin-top:21px; }
    .wsq-btn { padding:12px 21px; font-weight:750; border-radius:11px; border:1px solid transparent; }
    .wsq-btn-main { background:#2563eb; color:#fff; }
    .wsq-btn-main:hover { background:#1d4ed8; }
    .wsq-btn-secondary { color:#2458b0; background:#eaf2ff; border-color:#cbdcfb; }
    .wsq-btn-secondary:hover { background:#dbeafe; }
    .wsq-results { margin-top:17px; padding:22px; border:1px solid #b7d4fa; border-radius:15px;
      background:#eff6ff; color:#153d79; }
    .wsq-results[hidden] { display:none; }
    .wsq-results h2 { margin:0 0 5px; color:#123a76; font-size:20px; }
    .wsq-bigscore { font-weight:850; font-size:29px; line-height:1.3; margin:9px 0 4px; }
    .wsq-results p { margin:5px 0 0; }
    .wsq-error { border-radius:12px; padding:20px; color:#9b2830; background:#fff3f3; }
    @media(max-width:600px) {
      .wsq-app { margin:10px auto 30px; font-size:14px; }
      .wsq-app .wsq-hero { padding:20px 17px; border-radius:14px; }
      .wsq-hero h1 { font-size:21px; }
      .wsq-brand-row { gap:10px; }
      .wsq-logo { width:43px; height:43px; }
      .wsq-summary,.wsq-question { padding:16px 14px; }
      .wsq-qhead { flex-direction:column; gap:7px; }
      .wsq-lesson-nav { width:100%; }
      .wsq-lesson-nav button { flex:1; }
      .wsq-controls .wsq-btn { flex:1; }
    }
  `;

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = String(content);
    return node;
  }

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = element('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function getData() {
    const lessons = window.WEBSTUDY_QUIZ_DATA;
    return Array.isArray(lessons) ? lessons : [];
  }

  function getContainer(selector) {
    let target = document.querySelector(selector || '#quiz-container');
    if (!target) {
      target = element('div');
      target.id = 'quiz-container';
      (document.querySelector('main') || document.body).appendChild(target);
    }
    return target;
  }

  class Quiz {
    constructor(root, lessons, initialId) {
      this.root = root;
      this.lessons = lessons;
      this.index = Math.max(0, lessons.findIndex((x) => x.id === initialId));
      this.answers = [];
      this.graded = false;
      this.refs = [];
      this.draw();
    }

    draw() {
      this.lesson = this.lessons[this.index];
      this.answers = Array(this.lesson.questions.length).fill(null);
      this.graded = false;
      this.refs = [];
      this.root.className = 'wsq-app';
      this.root.replaceChildren();

      const hero = element('header', 'wsq-hero');
      const brand = element('div', 'wsq-brand-row');
      brand.appendChild(element('div', 'wsq-logo', '</>'));
      const intro = element('div');
      intro.appendChild(element('h1', '', 'Luyện tập HTML & CSS'));
      intro.appendChild(element('p', '', `${this.lessons.length} bài học • ${this.lessons.reduce((sum, x) => sum + x.questions.length, 0)} câu hỏi trắc nghiệm`));
      brand.appendChild(intro);
      hero.appendChild(brand);

      const settings = element('div', 'wsq-settings');
      const selectWrap = element('div', 'wsq-select-wrap');
      const selectLabel = element('label', '', 'Chọn bài học');
      this.select = element('select', 'wsq-select');
      this.select.id = 'wsq-lesson-select';
      selectLabel.htmlFor = this.select.id;
      for (const category of ['HTML', 'CSS']) {
        const group = element('optgroup');
        group.label = `Bài học ${category}`;
        this.lessons.filter((lesson) => lesson.category === category).forEach((lesson) => {
          const option = element('option', '', `${lesson.id} — ${lesson.title}`);
          option.value = lesson.id;
          group.appendChild(option);
        });
        this.select.appendChild(group);
      }
      this.select.value = this.lesson.id;
      this.select.addEventListener('change', () => this.goTo(this.select.value));
      selectWrap.append(selectLabel, this.select);
      settings.appendChild(selectWrap);
      const nav = element('div', 'wsq-lesson-nav');
      const prev = element('button', '', '← Bài trước');
      prev.type = 'button';
      prev.disabled = this.index === 0;
      prev.addEventListener('click', () => this.goTo(this.lessons[this.index - 1].id));
      const next = element('button', '', 'Bài sau →');
      next.type = 'button';
      next.disabled = this.index === this.lessons.length - 1;
      next.addEventListener('click', () => this.goTo(this.lessons[this.index + 1].id));
      nav.append(prev, next);
      settings.appendChild(nav);
      hero.appendChild(settings);
      this.root.appendChild(hero);

      const summary = element('section', 'wsq-summary');
      const summaryTop = element('div', 'wsq-summary-top');
      summaryTop.appendChild(element('h2', 'wsq-lesson-title', `${this.lesson.id} · ${this.lesson.title}`));
      this.countLabel = element('span', 'wsq-count');
      summaryTop.appendChild(this.countLabel);
      summary.appendChild(summaryTop);
      const track = element('div', 'wsq-progress-track');
      track.setAttribute('role', 'progressbar');
      track.setAttribute('aria-label', 'Tiến độ trả lời');
      track.setAttribute('aria-valuemin', '0');
      track.setAttribute('aria-valuemax', String(this.answers.length));
      this.track = track;
      this.progressFill = element('div', 'wsq-progress-fill');
      track.appendChild(this.progressFill);
      summary.appendChild(track);
      const source = element('details', 'wsq-source');

      this.root.appendChild(summary);

      const sheet = element('section', 'wsq-questions');
      sheet.setAttribute('aria-label', 'Các câu hỏi trắc nghiệm');
      this.lesson.questions.forEach((question, qi) => {
        const article = element('article', 'wsq-question');
        const qhead = element('div', 'wsq-qhead');
        qhead.appendChild(element('h3', 'wsq-qtitle', `Câu ${qi + 1}. ${question.question}`));
        qhead.appendChild(element('span', 'wsq-level', question.level));
        article.appendChild(qhead);
        const options = element('div', 'wsq-options');
        const labels = [];
        const inputs = [];
        question.options.forEach((answer, ai) => {
          const label = element('label', 'wsq-option');
          const input = element('input');
          input.type = 'radio';
          input.name = `wsq-${this.lesson.id}-${qi}`;
          input.value = String(ai);
          input.setAttribute('aria-label', `Câu ${qi + 1}, đáp án ${ALPHABET[ai]}`);
          input.addEventListener('change', () => {
            if (this.graded) return;
            this.answers[qi] = ai;
            this.updateProgress();
          });
          const choiceText = element('span', 'wsq-choice-text');
          choiceText.append(element('span', 'wsq-letter', `${ALPHABET[ai]}.`), element('span', 'wsq-answer', answer));
          label.append(input, choiceText);
          options.appendChild(label);
          labels.push(label);
          inputs.push(input);
        });
        article.appendChild(options);
        const feedback = element('p', 'wsq-feedback');
        feedback.hidden = true;
        article.appendChild(feedback);
        sheet.appendChild(article);
        this.refs.push({ article, labels, inputs, feedback });
      });
      this.root.appendChild(sheet);

      const controls = element('div', 'wsq-controls');
      this.submit = element('button', 'wsq-btn wsq-btn-main', 'Chấm điểm bài làm');
      this.submit.type = 'button';
      this.submit.addEventListener('click', () => this.grade());
      this.retry = element('button', 'wsq-btn wsq-btn-secondary', '↻ Làm lại bài này');
      this.retry.type = 'button';
      this.retry.addEventListener('click', () => this.reset());
      this.retry.hidden = true;
      controls.append(this.submit, this.retry);
      this.root.appendChild(controls);
      this.results = element('section', 'wsq-results');
      this.results.setAttribute('aria-live', 'polite');
      this.results.setAttribute('aria-label', 'Kết quả chấm điểm');
      this.results.hidden = true;
      this.root.appendChild(this.results);
      this.updateProgress();
    }

    updateProgress() {
      const done = this.answers.filter(Number.isInteger).length;
      const total = this.answers.length;
      this.countLabel.textContent = `Đã trả lời ${done}/${total} câu`;
      this.progressFill.style.width = `${Math.round((done / total) * 100)}%`;
      this.track.setAttribute('aria-valuenow', String(done));
    }

    grade() {
      if (this.graded) return;
      this.graded = true;
      this.root.classList.add('wsq-graded');
      let correct = 0;
      let unanswered = 0;
      this.lesson.questions.forEach((question, qi) => {
        const selected = this.answers[qi];
        const expected = question.correctIndex;
        const ref = this.refs[qi];
        if (selected === expected) correct++;
        if (selected === null) unanswered++;
        ref.labels[expected].classList.add('wsq-is-correct');
        if (selected !== null && selected !== expected) {
          ref.labels[selected].classList.add('wsq-is-wrong');
        }
        ref.inputs.forEach((input) => { input.disabled = true; });
        const fb = ref.feedback;
        fb.hidden = false;
        fb.classList.add(selected === expected ? 'wsq-good' : 'wsq-bad');
        if (selected === expected) {
          fb.textContent = `✓ Chính xác! Đáp án ${ALPHABET[expected]}.`;
        } else if (selected === null) {
          fb.textContent = `Chưa trả lời. Đáp án đúng: ${ALPHABET[expected]}. ${question.options[expected]}`;
        } else {
          fb.textContent = `✗ Bạn chọn ${ALPHABET[selected]}. Đáp án đúng: ${ALPHABET[expected]}. ${question.options[expected]}`;
        }
      });
      const total = this.answers.length;
      const percent = Math.round((correct / total) * 100);
      const message = percent === 100 ? 'Xuất sắc! Bạn đã trả lời đúng tất cả.'
        : percent >= 80 ? 'Rất tốt! Bạn đã nắm vững phần lớn kiến thức.'
          : percent >= 50 ? 'Khá tốt! Hãy xem lại những câu chưa đúng.'
            : 'Bạn nên ôn lại bài học và thử thêm một lần nữa.';
      this.results.replaceChildren();
      this.results.appendChild(element('h2', '', 'Kết quả bài kiểm tra'));
      this.results.appendChild(element('div', 'wsq-bigscore', `${correct}/${total} câu đúng · ${percent}%`));
      this.results.appendChild(element('p', '', message));
      this.results.appendChild(element('p', '', `Đúng: ${correct}  •  Sai hoặc bỏ trống: ${total - correct}  •  Chưa trả lời: ${unanswered}`));
      this.results.hidden = false;
      this.submit.hidden = true;
      this.retry.hidden = false;
      this.updateProgress();
      this.results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    reset() {
      this.draw();
      this.root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    goTo(id) {
      const newIndex = this.lessons.findIndex((lesson) => lesson.id === id);
      if (newIndex < 0 || newIndex === this.index) return;
      this.index = newIndex;
      this.draw();
      this.root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const api = {
    init(options = {}) {
      const lessons = getData();
      const root = getContainer(options.container || '#quiz-container');
      if (root.__webstudyQuiz) return root.__webstudyQuiz;
      ensureStyles();
      if (!lessons.length) {
        root.className = 'wsq-app';
        root.replaceChildren(element('p', 'wsq-error',
          'Chưa có dữ liệu câu hỏi. Hãy nhúng quiz-data.js trước quiz.js.'));
        return null;
      }
      const initialId = options.lessonId || new URLSearchParams(window.location.search).get('lesson') || lessons[0].id;
      const instance = new Quiz(root, lessons, initialId);
      root.__webstudyQuiz = instance;
      return instance;
    }
  };

  window.WebStudyQuiz = api;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => api.init(), { once: true });
  } else {
    api.init();
  }
})();
