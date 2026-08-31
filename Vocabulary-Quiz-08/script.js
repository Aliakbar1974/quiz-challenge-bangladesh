// ==========================================
// ENGLISH VOCABULARY QUIZ
// Web Quiz Engine - Version 1.1
// 30 Questions + 15 Second Timer
// ==========================================

// ==========================================
// SOUND ENGINE
// ==========================================

const sounds = {
    start: new Audio("Sounds/Start.wav"),
    correct: new Audio("Sounds/Correct.wav"),
    wrong: new Audio("Sounds/Wrong.wav"),
    tryAgain: new Audio("Sounds/TryAgain.wav"),
    success: new Audio("Sounds/Success.wav"),
    victory: new Audio("Sounds/Victory.wav"),
    complete: new Audio("Sounds/Complete.wav")
};

function playSound(soundName) {

    const sound = sounds[soundName];

    if (!sound) return;

    sound.currentTime = 0;

    sound.play().catch(error => {
        console.log("Sound could not play:", error);
    });
}

const quizData = [
  {
    word: "Discern",
    question: "What is the meaning of 'Discern'?",
    options: [
      "To confuse",
      "To deny",
      "To clearly understand or recognize",
      "To hide"
    ],
    answer: 2,
    example: "It was difficult to discern the truth from the rumors."
  },

  {
    word: "Disseminate",
    question: "What is the meaning of 'Disseminate'?",
    options: [
      "To collect",
      "To spread widely",
      "To destroy",
      "To reject"
    ],
    answer: 1,
    example: "The organization disseminates information about public health."
  },

  {
    word: "Elusive",
    question: "What is the meaning of 'Elusive'?",
    options: [
      "Extremely important",
      "Difficult to find, catch, or understand",
      "Very familiar",
      "Completely safe"
    ],
    answer: 1,
    example: "The solution to the problem remained elusive."
  },

  {
    word: "Enervate",
    question: "What is the meaning of 'Enervate'?",
    options: [
      "To encourage",
      "To assist",
      "To improve",
      "To weaken or drain energy"
    ],
    answer: 3,
    example: "The extreme heat enervated the workers."
  },

  {
    word: "Equivocal",
    question: "What is the meaning of 'Equivocal'?",
    options: [
      "Completely certain",
      "Extremely brave",
      "Ambiguous or unclear",
      "Easy to understand"
    ],
    answer: 2,
    example: "His equivocal answer confused everyone."
  },

  {
    word: "Eradicate",
    question: "What is the meaning of 'Eradicate'?",
    options: [
      "To completely destroy or eliminate",
      "To preserve",
      "To observe",
      "To increase"
    ],
    answer: 0,
    example: "The government aims to eradicate the disease."
  },

  {
    word: "Eulogy",
    question: "What is the meaning of 'Eulogy'?",
    options: [
      "A speech or writing praising someone, especially after death",
      "A complaint",
      "A legal notice",
      "A secret message"
    ],
    answer: 0,
    example: "He delivered a moving eulogy for his friend."
  },

  {
    word: "Expanse",
    question: "What is the meaning of 'Expanse'?",
    options: [
      "A narrow path",
      "A wide area or large stretch",
      "A small place",
      "A high mountain"
    ],
    answer: 1,
    example: "We could see a vast expanse of ocean."
  },

  {
    word: "Expound",
    question: "What is the meaning of 'Expound'?",
    options: [
      "To hide",
      "To explain in detail",
      "To summarize",
      "To reject"
    ],
    answer: 1,
    example: "The professor expounded his theory to the students."
  },

  {
    word: "Facile",
    question: "What is the meaning of 'Facile'?",
    options: [
      "Difficult and complicated",
      "Easy or effortless",
      "Dangerous",
      "Unclear"
    ],
    answer: 1,
    example: "She found a facile solution to the problem."
  },

  {
    word: "Furtive",
    question: "What is the meaning of 'Furtive'?",
    options: [
      "Open and obvious",
      "Brave",
      "Secretive or stealthy",
      "Joyful"
    ],
    answer: 2,
    example: "He gave her a furtive glance."
  },

  {
    word: "Garrulous",
    question: "What is the meaning of 'Garrulous'?",
    options: [
      "Quiet and reserved",
      "Angry",
      "Sad",
      "Excessively talkative"
    ],
    answer: 3,
    example: "The garrulous old man talked for hours."
  },

  {
    word: "Glib",
    question: "What is the meaning of 'Glib'?",
    options: [
      "Deeply thoughtful",
      "Extremely slow",
      "Fearful",
      "Fluent but superficial"
    ],
    answer: 3,
    example: "His glib response did not satisfy the interviewer."
  },

  {
    word: "Hubbub",
    question: "What is the meaning of 'Hubbub'?",
    options: [
      "Silence",
      "Happiness",
      "Loud noise or confusion",
      "Sadness"
    ],
    answer: 2,
    example: "The hubbub of the crowd made it difficult to hear."
  },

  {
    word: "Imminent",
    question: "What is the meaning of 'Imminent'?",
    options: [
      "Far away",
      "Impossible",
      "About to happen",
      "Already finished"
    ],
    answer: 2,
    example: "The arrival of the storm was imminent."
  },

  {
    word: "Incessant",
    question: "What is the meaning of 'Incessant'?",
    options: [
      "Very rare",
      "Temporary",
      "Uncertain",
      "Continuous or never-ending"
    ],
    answer: 3,
    example: "The incessant rain caused flooding."
  },

  {
    word: "Incidental",
    question: "What is the meaning of 'Incidental'?",
    options: [
      "Minor or occurring by chance",
      "Main or important",
      "Permanent",
      "Essential"
    ],
    answer: 0,
    example: "The damage was incidental to the main accident."
  },

  {
    word: "Incisive",
    question: "What is the meaning of 'Incisive'?",
    options: [
      "Unclear",
      "Sharp and analytical",
      "Weak",
      "Irrelevant"
    ],
    answer: 1,
    example: "She made an incisive analysis of the issue."
  },

  {
    word: "Incredible",
    question: "What is the meaning of 'Incredible'?",
    options: [
      "Easy to believe",
      "Ordinary",
      "Difficult to believe or extremely amazing",
      "Unnecessary"
    ],
    answer: 2,
    example: "The athlete achieved an incredible record."
  },

  {
    word: "Induce",
    question: "What is the meaning of 'Induce'?",
    options: [
      "To cause or persuade",
      "To prevent",
      "To hide",
      "To cancel"
    ],
    answer: 0,
    example: "The medicine may induce sleep."
  },

  {
    word: "Inert",
    question: "What is the meaning of 'Inert'?",
    options: [
      "Active",
      "Powerful",
      "Inactive or lacking the ability to move or act",
      "Enthusiastic"
    ],
    answer: 2,
    example: "The chemical is inert under normal conditions."
  },

  {
    word: "Infested",
    question: "What is the meaning of 'Infested'?",
    options: [
      "Clean",
      "Protected",
      "Dry",
      "Overrun with harmful animals or insects"
    ],
    answer: 3,
    example: "The old house was infested with rats."
  },

  {
    word: "Inquisitive",
    question: "What is the meaning of 'Inquisitive'?",
    options: [
      "Curious and eager to know",
      "Lazy",
      "Indifferent",
      "Angry"
    ],
    answer: 0,
    example: "The inquisitive student asked many questions."
  },

  {
    word: "Integrate",
    question: "What is the meaning of 'Integrate'?",
    options: [
      "To separate",
      "To destroy",
      "To reject",
      "To combine or bring together"
    ],
    answer: 3,
    example: "We need to integrate the new system with the existing one."
  },

  {
    word: "Intrepid",
    question: "What is the meaning of 'Intrepid'?",
    options: [
      "Brave and fearless",
      "Fearful",
      "Hesitant",
      "Sick"
    ],
    answer: 0,
    example: "The intrepid explorer traveled through the jungle."
  },

  {
    word: "Intricate",
    question: "What is the meaning of 'Intricate'?",
    options: [
      "Simple and straightforward",
      "Complex and detailed",
      "Temporary",
      "Unnecessary"
    ],
    answer: 1,
    example: "The artist created an intricate design."
  },

  {
    word: "Intrude",
    question: "What is the meaning of 'Intrude'?",
    options: [
      "To cooperate",
      "To give permission",
      "To protect",
      "To enter or interfere without permission"
    ],
    answer: 3,
    example: "I do not want to intrude on your private conversation."
  },

  {
    word: "Invariable",
    question: "What is the meaning of 'Invariable'?",
    options: [
      "Unchanging or always the same",
      "Changeable",
      "Uncertain",
      "Temporary"
    ],
    answer: 0,
    example: "Her invariable kindness impressed everyone."
  },

  {
    word: "Irritate",
    question: "What is the meaning of 'Irritate'?",
    options: [
      "To annoy or provoke",
      "To calm",
      "To encourage",
      "To praise"
    ],
    answer: 0,
    example: "The noise began to irritate him."
  },

  {
    word: "Jeopardy",
    question: "What is the meaning of 'Jeopardy'?",
    options: [
      "Safety",
      "Success",
      "Danger or risk",
      "Opportunity"
    ],
    answer: 2,
    example: "His careless decision put the project in jeopardy."
  }
];


// ==========================================
// QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";

let timer = null;
let timeLeft = 15;


// ==========================================
// START QUIZ
// ==========================================

function startQuiz(mode) {

    selectedMode = mode;
    currentQuestion = 0;
    score = 0;

    playSound("start");

    showQuestion();
}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    // Stop previous timer
    clearInterval(timer);

    // Reset timer
    timeLeft = 15;

    const main = document.querySelector("main");

    const q = quizData[currentQuestion];

    // Exam Mode হলে Timer দেখাবে
    const timerHTML = selectedMode === "exam"
        ? `
            <div class="timer-box">
                Time: <span id="timer">15</span>
            </div>
          `
        : "";

    main.innerHTML = `
        <div class="quiz-screen">

            <div class="quiz-top">

                <div class="score">
                    Score: <span id="score">${score}</span>/${quizData.length}
                </div>

                <div class="question-number">
                    Question: ${currentQuestion + 1}/${quizData.length}
                </div>

            </div>

            ${timerHTML}

            <div class="progress">
                <div class="progress-bar"
                     style="width:${((currentQuestion + 1) / quizData.length) * 100}%">
                </div>
            </div>

            <h1 class="question">
                ${q.question}
            </h1>

            <div class="options">

                <button class="answer-btn" onclick="selectAnswer(0)">
                    A. ${q.options[0]}
                </button>

                <button class="answer-btn" onclick="selectAnswer(1)">
                    B. ${q.options[1]}
                </button>

                <button class="answer-btn" onclick="selectAnswer(2)">
                    C. ${q.options[2]}
                </button>

                <button class="answer-btn" onclick="selectAnswer(3)">
                    D. ${q.options[3]}
                </button>

            </div>

            <div id="feedback" class="feedback"></div>

        </div>
    `;

    // শুধুমাত্র Exam Mode-এ Timer চালু হবে
    if (selectedMode === "exam") {
        startTimer();
    }
}

// ==========================================
// START TIMER
// ==========================================

function startTimer() {

    clearInterval(timer);

    timeLeft = 15;

    const timerDisplay = document.getElementById("timer");

    if (!timerDisplay) return;

    timerDisplay.textContent = timeLeft;

    timer = setInterval(function () {

        timeLeft--;

        const display = document.getElementById("timer");

        if (display) {
            display.textContent = timeLeft;
        }

        // Time is over
        if (timeLeft <= 0) {

            clearInterval(timer);

            playSound("tryAgain");

            timeUp();
        }

    }, 1000);
}


// ==========================================
// TIME UP
// ==========================================

function timeUp() {

    // Prevent duplicate execution
    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    if (!buttons.length || !feedback) return;

    // Disable all answers
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Highlight correct answer
    buttons[q.answer].classList.add("correct");

    feedback.innerHTML = `
        <div class="wrong-message">
            ⏰ Time is over!
        </div>

        <p>
            Right Answer:
            <strong>${q.options[q.answer]}</strong>
        </p>

        <p class="example-text"><strong>Example:</strong> ${q.example || ""}</p>

        <button onclick="nextQuestion()">
            Next Question →
        </button>
    `;
}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(selected) {

    // Stop timer immediately
    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    // Disable all buttons
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Correct answer
    if (selected === q.answer) {

        score++;
        playSound("correct");
        buttons[selected].classList.add("correct");

        feedback.innerHTML = `
            <div class="correct-message">
                ✔ Right Answer!
            </div>

            <p class="example-text"><strong>Example:</strong> ${q.example || ""}</p>

            <button onclick="nextQuestion()">
                Next Question →
            </button>
        `;

    }

    // Wrong answer
    else {
        playSound("wrong");
        buttons[selected].classList.add("wrong");
        buttons[q.answer].classList.add("correct");

        feedback.innerHTML = `
            <div class="wrong-message">
                ✘ Wrong answer!
            </div>

            <p>
                Right answer:
                <strong>
                ${q.options[q.answer]}
                </strong>
            </p>

            <p class="example-text"><strong>Example:</strong> ${q.example || ""}</p>

            <button onclick="nextQuestion()">
                Next Question →
            </button>
        `;
    }

    document.getElementById("score").textContent = score;
}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    clearInterval(timer);

    currentQuestion++;

    if (currentQuestion >= quizData.length) {

        showResult();

    } else {

        showQuestion();
    }
}

function restartQuiz() {

    playSound("start");

    setTimeout(function () {
        location.reload();
    }, 500);
}

// ==========================================
// RESULT SCREEN
// ==========================================

function showResult() {

    clearInterval(timer);
    playSound("victory");
    const main = document.querySelector("main");

    const percentage =
        Math.round((score / quizData.length) * 100);

    let message = "";

    if (percentage >= 80) {
        message = "Excellent!";
    }
    else if (percentage >= 60) {
        message = "Very Good!";
    }
    else if (percentage >= 40) {
        message = "Good Try!";
    }
    else {
        message = "Keep Learning!";
    }

    main.innerHTML = `

        <div class="result-screen">

            <h1>🎉 Quiz Completed!</h1>

            <div class="result-score">
                ${score}/${quizData.length}
            </div>

            <div class="percentage">
                ${percentage}%
            </div>

            <h2>${message}</h2>

            <button onclick="playSound('start'); location.reload()">
                🔄 Play Again
            </button>

        </div>
    `;
}


// ==========================================
// CONNECT START SCREEN BUTTONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        const text = button.textContent.trim().toUpperCase();

        if (text.includes("LEARNING")) {

            button.onclick = function () {
                playSound("start");
                startQuiz("learning");
            };

        }

        if (text.includes("EXAM")) {

            button.onclick = function () {
                playSound("start");
                startQuiz("exam");
            };

        }

    });

});