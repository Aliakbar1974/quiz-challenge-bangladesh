/* Quiz Challenge Bangladesh — Shared Vocabulary Quiz Engine
 * Version 1.0. New quizzes need only quiz-data.js and quiz-config.js.
 * No per-quiz engine edits are required.
 */
(() => {
  "use strict";

  const config = window.QUIZ_CONFIG || {};
  const questions = window.QUIZ_DATA;

  const defaults = {
    title: "English Vocabulary",
    quizNumber: "",
    timePerQuestion: 15,
    facebookPostUrl: "",
    soundBasePath: "../Sounds/"
  };

  const settings = { ...defaults, ...config };
  const app = document.getElementById("quiz-app");

  if (!app) {
    console.error("Vocabulary engine: missing #quiz-app container.");
    return;
  }

  const errors = validateQuestions(questions);
  if (errors.length) {
    app.innerHTML = '<section class="vq-card"><h1>Quiz data needs attention</h1><ul>' +
      errors.map(message => '<li>' + escapeHtml(message) + '</li>').join("") +
      '</ul><p>Please correct quiz-data.js before publishing.</p></section>';
    console.error("Vocabulary quiz validation errors:", errors);
    return;
  }

  const sounds = {};
  ["Start", "Correct", "Wrong", "TryAgain", "Success", "Victory", "Complete"].forEach(name => {
    const audio = new Audio(settings.soundBasePath + name + ".wav");
    audio.preload = "none";
    sounds[name.toLowerCase()] = audio;
  });

  let mode = "learning";
  let current = 0;
  let score = 0;
  let remaining = settings.timePerQuestion;
  let timerId = null;
  let answered = false;
  let finished = false;

  function play(name) {
    const audio = sounds[name];
    if (!audio) return;
    try {
      audio.currentTime = 0;
      const promise = audio.play();
      if (promise && typeof promise.catch === "function") promise.catch(() => {});
    } catch (_) {}
  }

  function renderStart() {
    stopTimer();
    app.innerHTML = `
      <main class="vq-shell">
        <section class="vq-card vq-start">
          <div class="vq-badge">MCQ CHALLENGE</div>
          <h1>${escapeHtml(settings.title)}</h1>
          <h2>Quiz ${escapeHtml(String(settings.quizNumber || ""))}</h2>
          <div class="vq-meta">
            <span><strong>${questions.length}</strong> Questions</span>
            <span>Learning / Exam Mode</span>
            <span><strong>${settings.timePerQuestion}</strong> Seconds per question</span>
          </div>
          <p class="vq-intro">Build your vocabulary with clear meanings, explanations, and example sentences.</p>
          <div class="vq-actions">
            <button class="vq-btn vq-primary" data-action="start-learning">📖 Learning Mode</button>
            <button class="vq-btn vq-secondary" data-action="start-exam">⏱ Exam Mode</button>
          </div>
          <p class="vq-status" aria-live="polite"></p>
        </section>
      </main>`;
  }

  function renderQuestion() {
    stopTimer();
    answered = false;
    const q = questions[current];
    remaining = settings.timePerQuestion;

    app.innerHTML = `
      <main class="vq-shell">
        <section class="vq-card">
          <div class="vq-topline">
            <span class="vq-badge">${mode === "exam" ? "EXAM MODE" : "LEARNING MODE"}</span>
            <span class="vq-counter">Question ${current + 1} of ${questions.length}</span>
          </div>
          <div class="vq-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round((current / questions.length) * 100)}">
            <span style="width:${(current / questions.length) * 100}%"></span>
          </div>
          <div class="vq-timer" id="vq-timer">${mode === "exam" ? remaining : "∞"}</div>
          <h1 class="vq-question">${escapeHtml(q.question)}</h1>
          <div class="vq-options">
            ${q.options.map((option, index) => `
              <button class="vq-option" type="button" data-answer="${index}">
                <span class="vq-letter">${String.fromCharCode(65 + index)}</span>
                <span>${escapeHtml(option)}</span>
              </button>`).join("")}
          </div>
          <section class="vq-feedback" id="vq-feedback" aria-live="polite" hidden></section>
          <div class="vq-actions" id="vq-next-wrap" hidden>
            <button class="vq-btn vq-primary" data-action="next">${current === questions.length - 1 ? "View Results →" : "Next Question →"}</button>
          </div>
          <p class="vq-footnote">Score: <strong>${score}</strong> / ${questions.length}</p>
        </section>
      </main>`;

    if (mode === "exam") startTimer();
  }

  function startTimer() {
    const timer = document.getElementById("vq-timer");
    if (!timer) return;
    timer.textContent = remaining;
    timerId = window.setInterval(() => {
      remaining -= 1;
      const node = document.getElementById("vq-timer");
      if (node) {
        node.textContent = remaining;
        node.classList.toggle("vq-danger", remaining <= 5);
      }
      if (remaining <= 0) {
        stopTimer();
        submitAnswer(null, true);
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function submitAnswer(selected, isTimeout = false) {
    if (answered || finished) return;
    answered = true;
    stopTimer();

    const q = questions[current];
    const buttons = [...app.querySelectorAll("[data-answer]")];
    buttons.forEach(button => { button.disabled = true; });

    const correct = selected === q.answer;
    if (correct) {
      score += 1;
      play("correct");
    } else {
      play(isTimeout ? "tryagain" : "wrong");
    }

    const chosen = buttons.find(button => Number(button.dataset.answer) === selected);
    const right = buttons.find(button => Number(button.dataset.answer) === q.answer);
    if (correct && chosen) chosen.classList.add("vq-correct");
    if (!correct && chosen) chosen.classList.add("vq-wrong");
    if (right) right.classList.add("vq-correct");

    const feedback = document.getElementById("vq-feedback");
    if (feedback) {
      const explanation = mode === "learning" || !correct || isTimeout;
      feedback.hidden = false;
      feedback.innerHTML =
        '<h2 class="' + (correct ? "vq-good" : "vq-bad") + '">' +
        (isTimeout ? "⏰ Time is up!" : correct ? "✓ Correct answer!" : "✗ Not quite") +
        '</h2>' +
        (!correct ? '<p><strong>Correct answer:</strong> ' + escapeHtml(q.options[q.answer]) + '</p>' : '') +
        (explanation ? '<p><strong>Explanation:</strong> ' + escapeHtml(q.explanation || "No explanation provided.") + '</p>' : '') +
        (explanation && q.example ? '<p><strong>Example:</strong> <em>' + escapeHtml(q.example) + '</em></p>' : '');
    }

    const nextWrap = document.getElementById("vq-next-wrap");
    if (nextWrap) nextWrap.hidden = false;
    const progress = app.querySelector(".vq-progress span");
    if (progress) progress.style.width = ((current + 1) / questions.length * 100) + "%";
    const scoreNode = app.querySelector(".vq-footnote strong");
    if (scoreNode) scoreNode.textContent = score;
  }

  function renderResults() {
    stopTimer();
    finished = true;
    const percent = Math.round(score / questions.length * 100);
    let message;
    let sound;
    if (percent >= 90) {
      message = "Outstanding! Your vocabulary knowledge is excellent.";
      sound = "victory";
    } else if (percent >= 75) {
      message = "Great work! Keep practising to strengthen your vocabulary.";
      sound = "success";
    } else if (percent >= 50) {
      message = "Good effort. Review the explanations and try again.";
      sound = "complete";
    } else {
      message = "Keep learning. Review the meanings and examples, then try again.";
      sound = "tryagain";
    }
    play(sound);

    app.innerHTML = `
      <main class="vq-shell">
        <section class="vq-card vq-results">
          <div class="vq-badge">QUIZ COMPLETE</div>
          <h1>Your Results</h1>
          <div class="vq-score">${score}<span> / ${questions.length}</span></div>
          <div class="vq-percent">${percent}%</div>
          <p class="vq-result-message">${escapeHtml(message)}</p>
          <div class="vq-actions">
            <button class="vq-btn vq-primary" data-action="restart">↻ Play Again</button>
            ${settings.facebookPostUrl ? '<button class="vq-btn vq-secondary" data-action="facebook">↩ Return to Facebook</button>' : ''}
          </div>
          <p class="vq-share-hint">Share your score with friends and keep learning every day!</p>
        </section>
      </main>`;
  }

  function restart() {
    current = 0;
    score = 0;
    answered = false;
    finished = false;
    renderStart();
    play("start");
  }

  function validateQuestions(data) {
    const issues = [];
    if (!Array.isArray(data) || data.length === 0) return ["window.QUIZ_DATA must be a non-empty array."];
    const ids = new Set();
    const stems = new Set();
    const distribution = [0, 0, 0, 0];
    data.forEach((q, i) => {
      const label = "Question " + (i + 1);
      if (!q || typeof q.question !== "string" || !q.question.trim()) {
        issues.push(label + ": missing question text.");
      } else {
        const stem = q.question.trim().toLowerCase();
        if (stems.has(stem)) issues.push(label + ": duplicate question text found.");
        stems.add(stem);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        issues.push(label + ": exactly four options are required.");
      } else if (new Set(q.options.map(x => String(x).trim().toLowerCase())).size !== q.options.length) {
        issues.push(label + ": duplicate options found.");
      }
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) {
        issues.push(label + ": answer must be an option index from 0 to 3.");
      } else {
        distribution[q.answer]++;
      }
      if (!q.id || !String(q.id).trim()) {
        issues.push(label + ": a unique question ID is required.");
      } else {
        const id = String(q.id).trim();
        if (ids.has(id)) issues.push(label + ": duplicate question ID " + id + ".");
        ids.add(id);
      }
      if (!q.explanation || !String(q.explanation).trim()) issues.push(label + ": explanation is missing.");
      if (!q.example || !String(q.example).trim()) issues.push(label + ": example sentence is missing.");
    });
    // For a normal-sized quiz, require at least three correct answers at each position.
    if (data.length >= 12) {
      distribution.forEach((count, index) => {
        if (count < 3) issues.push("Answer distribution: option " + String.fromCharCode(65 + index) + " has only " + count + " correct answer(s); minimum is 3.");
      });
    }
    return issues;
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  app.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.hasAttribute("data-answer")) {
      submitAnswer(Number(button.dataset.answer), false);
      return;
    }

    switch (button.dataset.action) {
      case "start-learning":
        mode = "learning"; current = 0; score = 0; finished = false; play("start"); renderQuestion(); break;
      case "start-exam":
        mode = "exam"; current = 0; score = 0; finished = false; play("start"); renderQuestion(); break;
      case "next":
        if (!answered) return;
        if (current < questions.length - 1) { current += 1; renderQuestion(); }
        else renderResults();
        break;
      case "restart": restart(); break;
      case "facebook":
        if (settings.facebookPostUrl) window.location.href = settings.facebookPostUrl;
        break;
    }
  });

  window.addEventListener("pagehide", stopTimer);
  renderStart();
})();