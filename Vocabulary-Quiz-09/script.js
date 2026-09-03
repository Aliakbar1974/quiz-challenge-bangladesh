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
    id: "VOC241",
    question: "What does 'Lament' mean?",
    options: ["To praise highly", "To express grief or sorrow", "To improve something", "To hide something"],
    answer: 1,
    explanation: "Lament means to express deep sadness, grief, or regret about something.",
    example: "The villagers lamented the loss of their homes after the flood."
  },

  {
    id: "VOC242",
    question: "What does 'Lanky' mean?",
    options: ["Short and muscular", "Very old and weak", "Tall and thin", "Fat and heavy"],
    answer: 2,
    explanation: "Lanky describes a person who is unusually tall and thin, often with long arms and legs.",
    example: "The lanky boy easily reached the top shelf."
  },

  {
    id: "VOC243",
    question: "What does 'Laud' mean?",
    options: ["To praise", "To criticize", "To ignore", "To punish"],
    answer: 0,
    explanation: "Laud means to praise or glorify someone or something highly.",
    example: "The teacher lauded the student for her outstanding performance."
  },

  {
    id: "VOC244",
    question: "What does 'Leisure' mean?",
    options: ["Hard work", "Danger", "Competition", "Free time"],
    answer: 3,
    explanation: "Leisure means free time when a person is not working or occupied.",
    example: "He enjoys reading books during his leisure time."
  },

  {
    id: "VOC245",
    question: "What does 'Limpid' mean?",
    options: ["Clear and transparent", "Dark and dirty", "Rough and hard", "Loud and noisy"],
    answer: 0,
    explanation: "Limpid means clear, transparent, and easy to see through.",
    example: "The hikers drank water from the limpid mountain stream."
  },

  {
    id: "VOC246",
    question: "What does 'Loathe' mean?",
    options: ["To admire deeply", "To strongly dislike or hate", "To understand clearly", "To forgive"],
    answer: 1,
    explanation: "Loathe means to feel intense dislike or hatred toward someone or something.",
    example: "I loathe dishonesty in any form."
  },

  {
    id: "VOC247",
    question: "What does 'Luminous' mean?",
    options: ["Giving off or reflecting light", "Completely silent", "Very heavy", "Extremely cold"],
    answer: 0,
    explanation: "Luminous means giving off light or appearing to shine brightly.",
    example: "The luminous moon lit up the dark night."
  },

  {
    id: "VOC248",
    question: "What does 'Lustrous' mean?",
    options: ["Dull and rough", "Very dangerous", "Shining or glossy", "Extremely small"],
    answer: 2,
    explanation: "Lustrous means having a bright, shiny, or glossy appearance.",
    example: "Her lustrous hair attracted everyone's attention."
  },

  {
    id: "VOC249",
    question: "What does 'Malign' mean?",
    options: ["To praise publicly", "To speak harmful lies about someone", "To help someone", "To protect something"],
    answer: 1,
    explanation: "Malign means to speak about someone in a harmful or unfairly negative way.",
    example: "The article attempted to malign the reputation of the scientist."
  },

  {
    id: "VOC250",
    question: "What does 'Meddle' mean?",
    options: ["To interfere in something unnecessarily", "To solve a problem", "To encourage someone", "To avoid responsibility"],
    answer: 0,
    explanation: "Meddle means to interfere in something that does not concern you.",
    example: "Please do not meddle in their personal affairs."
  },

  {
    id: "VOC251",
    question: "What does 'Menace' mean?",
    options: ["A reward", "A celebration", "A threat or danger", "A solution"],
    answer: 2,
    explanation: "Menace means something or someone that represents a threat, danger, or source of harm.",
    example: "The storm was a serious menace to the coastal villages."
  },

  {
    id: "VOC252",
    question: "What does 'Merger' mean?",
    options: ["A legal punishment", "A disagreement", "A sudden failure", "The combination of two or more organizations"],
    answer: 3,
    explanation: "A merger is the joining or combination of two or more companies or organizations into one.",
    example: "The two companies announced a merger to expand their business."
  },

  {
    id: "VOC253",
    question: "What does 'Meticulous' mean?",
    options: ["Careless", "Very careful and precise", "Quick and careless", "Uncertain"],
    answer: 1,
    explanation: "Meticulous means extremely careful, precise, and attentive to detail.",
    example: "She is meticulous about checking every detail of her work."
  },

  {
    id: "VOC254",
    question: "What does 'Molest' mean?",
    options: ["To comfort someone", "To congratulate someone", "To improve someone's condition", "To harass or abuse someone"],
    answer: 3,
    explanation: "Molest means to harass, disturb, or sexually abuse someone. The word is commonly used in serious contexts.",
    example: "The law provides protection for children from those who may molest them."
  },

  {
    id: "VOC255",
    question: "What does 'Monstrous' mean?",
    options: ["Extremely ugly, frightening, or cruel", "Beautiful and elegant", "Small and harmless", "Simple and ordinary"],
    answer: 0,
    explanation: "Monstrous means extremely ugly, frightening, unnatural, or cruel.",
    example: "The villain committed a monstrous act against the innocent people."
  },

  {
    id: "VOC256",
    question: "What does 'Mumble' mean?",
    options: ["To speak very clearly", "To shout loudly", "To speak unclearly and quietly", "To sing beautifully"],
    answer: 2,
    explanation: "Mumble means to speak quietly and unclearly, making the words difficult to understand.",
    example: "He began to mumble an apology after making the mistake."
  },

  {
    id: "VOC257",
    question: "What does 'Nadir' mean?",
    options: ["The highest point", "The lowest point", "The middle point", "The starting point"],
    answer: 1,
    explanation: "Nadir means the lowest point or worst stage of something.",
    example: "The company reached the nadir of its financial crisis last year."
  },

  {
    id: "VOC258",
    question: "What does 'Negligent' mean?",
    options: ["Careless in performing a duty", "Extremely intelligent", "Very generous", "Highly successful"],
    answer: 0,
    explanation: "Negligent means failing to take proper care or failing to perform a duty responsibly.",
    example: "The negligent driver caused a serious accident."
  },

  {
    id: "VOC259",
    question: "What does 'Numb' mean?",
    options: ["Very excited", "Extremely hungry", "Unable to feel physically or emotionally", "Very energetic"],
    answer: 2,
    explanation: "Numb means having no physical sensation or being unable to feel emotions normally.",
    example: "My fingers became numb in the freezing weather."
  },

  {
    id: "VOC260",
    question: "What does 'Oblivion' mean?",
    options: ["Great success", "Complete happiness", "Public recognition", "A state of being forgotten or unaware"],
    answer: 3,
    explanation: "Oblivion means a state of being completely forgotten, unknown, or unaware.",
    example: "The old tradition gradually disappeared into oblivion."
  },

  {
    id: "VOC261",
    question: "What does 'Obscure' mean?",
    options: ["Not well known or difficult to understand", "Very famous", "Extremely bright", "Easy to recognize"],
    answer: 0,
    explanation: "Obscure means not well known, difficult to understand, or not clearly visible.",
    example: "The meaning of the ancient inscription was obscure."
  },

  {
    id: "VOC262",
    question: "What does 'Obstinate' mean?",
    options: ["Willing to compromise", "Easily frightened", "Stubborn and unwilling to change", "Very polite"],
    answer: 2,
    explanation: "Obstinate means stubborn and determined not to change one's opinion or behavior.",
    example: "The obstinate man refused to accept any advice."
  },

  {
    id: "VOC263",
    question: "What does 'Obstruct' mean?",
    options: ["To encourage progress", "To block or hinder", "To explain clearly", "To repair completely"],
    answer: 1,
    explanation: "Obstruct means to block, stop, or make movement or progress difficult.",
    example: "A fallen tree obstructed the road."
  },

  {
    id: "VOC264",
    question: "What does 'Ominous' mean?",
    options: ["Suggesting that something bad may happen", "Extremely pleasant", "Completely harmless", "Very humorous"],
    answer: 0,
    explanation: "Ominous means giving the impression that something bad or unpleasant may happen.",
    example: "The dark clouds looked ominous before the storm."
  },

  {
    id: "VOC265",
    question: "What does 'Omit' mean?",
    options: ["To include everything", "To repeat something", "To discover something", "To leave out or exclude"],
    answer: 3,
    explanation: "Omit means to leave something out or fail to include it.",
    example: "Please do not omit any important information from the report."
  },

  {
    id: "VOC266",
    question: "What does 'Oration' mean?",
    options: ["A written agreement", "A formal public speech", "A private conversation", "A short question"],
    answer: 1,
    explanation: "Oration means a formal and often carefully prepared public speech.",
    example: "The leader delivered an inspiring oration to the audience."
  },

  {
    id: "VOC267",
    question: "What does 'Ordeal' mean?",
    options: ["A pleasant experience", "A celebration", "A difficult or painful experience", "A financial reward"],
    answer: 2,
    explanation: "Ordeal means a very difficult, painful, or stressful experience.",
    example: "The family went through a terrible ordeal after the accident."
  },

  {
    id: "VOC268",
    question: "What does 'Outrageous' mean?",
    options: ["Extremely shocking or unacceptable", "Very ordinary", "Easy to understand", "Moderately useful"],
    answer: 0,
    explanation: "Outrageous means extremely shocking, unreasonable, offensive, or unacceptable.",
    example: "The outrageous price of the product surprised everyone."
  },

  {
    id: "VOC269",
    question: "What does 'Palatable' mean?",
    options: ["Impossible to eat", "Pleasant or acceptable to taste", "Extremely expensive", "Very harmful"],
    answer: 1,
    explanation: "Palatable means pleasant or acceptable to taste, and it can also mean acceptable or agreeable in a broader sense.",
    example: "The chef prepared a simple but very palatable meal."
  },

  {
    id: "VOC270",
    question: "What does 'Penetrate' mean?",
    options: ["To escape completely", "To decorate something", "To enter or pass through", "To remove completely"],
    answer: 2,
    explanation: "Penetrate means to enter, pass through, or move into something.",
    example: "The sunlight penetrated the thick forest canopy."
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