// ==========================================
// QUIZ CHALLENGE BANGLADESH
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
        question: "What does the word 'Conceal' mean?",
        options: [
            "To reveal something",
            "To hide something",
            "To improve something",
            "To copy something"
        ],
        answer: 1,
        explanation: "'Conceal' means to hide something or keep it from being seen or known."
    },

    {
        question: "What does the word 'Confide' mean?",
        options: [
            "To trust someone with a secret",
            "To argue with someone",
            "To avoid someone",
            "To punish someone"
        ],
        answer: 0,
        explanation: "'Confide' means to tell someone a secret or private matter because you trust them."
    },

    {
        question: "What does the word 'Crave' mean?",
        options: [
            "To strongly desire something",
            "To completely forget something",
            "To carefully examine something",
            "To refuse something"
        ],
        answer: 0,
        explanation: "'Crave' means to have a very strong desire for something."
    },

    {
        question: "What does the word 'Crude' mean?",
        options: [
            "Very elegant and refined",
            "Simple, rough, or lacking refinement",
            "Extremely expensive",
            "Very accurate"
        ],
        answer: 1,
        explanation: "'Crude' can mean simple, rough, or lacking refinement. It can also refer to something in a natural or unprocessed state."
    },

    {
        question: "What does the word 'Curt' mean?",
        options: [
            "Very polite and friendly",
            "Brief and sometimes rude",
            "Extremely emotional",
            "Carefully explained"
        ],
        answer: 1,
        explanation: "'Curt' means brief and direct, often in a way that seems rude or unfriendly."
    },

    {
        question: "What does the word 'Decent' mean?",
        options: [
            "Acceptable or reasonably good",
            "Completely useless",
            "Extremely dangerous",
            "Very dishonest"
        ],
        answer: 0,
        explanation: "'Decent' means acceptable, satisfactory, or reasonably good."
    },

    {
        question: "What does the word 'Deform' mean?",
        options: [
            "To make something beautiful",
            "To change something into an unnatural or damaged shape",
            "To repair something completely",
            "To hide something"
        ],
        answer: 1,
        explanation: "'Deform' means to change or damage the shape or appearance of something."
    },

    {
        question: "What does the word 'Deliberately' mean?",
        options: [
            "By accident",
            "Without thinking",
            "Intentionally or on purpose",
            "Very quickly"
        ],
        answer: 2,
        explanation: "'Deliberately' means intentionally or knowingly, rather than by accident."
    },

    {
        question: "What does the word 'Demolish' mean?",
        options: [
            "To build carefully",
            "To repair a building",
            "To completely destroy something",
            "To decorate something"
        ],
        answer: 2,
        explanation: "'Demolish' means to destroy a building or structure completely."
    },

    {
        question: "What does the word 'Depict' mean?",
        options: [
            "To describe or represent something",
            "To destroy something",
            "To hide something",
            "To borrow something"
        ],
        answer: 0,
        explanation: "'Depict' means to represent or show something, especially in a picture, story, or description."
    },

    {
        question: "What does the word 'Deprive' mean?",
        options: [
            "To give someone more than they need",
            "To prevent someone from having something",
            "To congratulate someone",
            "To protect someone"
        ],
        answer: 1,
        explanation: "'Deprive' means to prevent someone from having something that they need or normally have."
    },

    {
        question: "What does the word 'Deride' mean?",
        options: [
            "To praise someone",
            "To help someone",
            "To mock or make fun of someone",
            "To encourage someone"
        ],
        answer: 2,
        explanation: "'Deride' means to mock, ridicule, or make fun of someone in a disrespectful way."
    },

    {
        question: "What does the word 'Deviate' mean?",
        options: [
            "To follow a route exactly",
            "To move away from a usual course or standard",
            "To improve a system",
            "To repeat something"
        ],
        answer: 1,
        explanation: "'Deviate' means to move away from a usual, expected, or planned course."
    },

    {
        question: "What does the word 'Dingy' mean?",
        options: [
            "Bright and luxurious",
            "Clean and attractive",
            "Dark, dirty, or shabby",
            "Large and spacious"
        ],
        answer: 2,
        explanation: "'Dingy' means dark, dirty, or shabby, especially because of age or lack of cleaning."
    },

    {
        question: "What does the word 'Discard' mean?",
        options: [
            "To keep something carefully",
            "To throw something away",
            "To repair something",
            "To purchase something"
        ],
        answer: 1,
        explanation: "'Discard' means to throw something away because it is no longer wanted or useful."
    },

    {
        question: "What does the word 'Divulge' mean?",
        options: [
            "To keep information secret",
            "To reveal secret or private information",
            "To forget information",
            "To organize information"
        ],
        answer: 1,
        explanation: "'Divulge' means to reveal secret, private, or previously unknown information."
    },

    {
        question: "What does the word 'Doze' mean?",
        options: [
            "To sleep lightly for a short time",
            "To run very quickly",
            "To speak loudly",
            "To work continuously"
        ],
        answer: 0,
        explanation: "'Doze' means to sleep lightly or briefly, often without intending to."
    },

    {
        question: "What does the word 'Drench' mean?",
        options: [
            "To dry something completely",
            "To cover or soak something with a lot of liquid",
            "To clean something gently",
            "To heat something"
        ],
        answer: 1,
        explanation: "'Drench' means to make something completely wet by covering or soaking it with liquid."
    },

    {
        question: "What does the word 'Dubious' mean?",
        options: [
            "Certain and trustworthy",
            "Doubtful or uncertain",
            "Extremely valuable",
            "Easy to understand"
        ],
        answer: 1,
        explanation: "'Dubious' means doubtful, uncertain, or not completely trustworthy."
    },

    {
        question: "What does the word 'Eccentric' mean?",
        options: [
            "Very ordinary and conventional",
            "Unusual or unconventional in behavior",
            "Extremely careful",
            "Highly organized"
        ],
        answer: 1,
        explanation: "'Eccentric' describes someone or something that is unusual or unconventional, especially in behavior."
    },

    {
        question: "What does the word 'Emulate' mean?",
        options: [
            "To avoid someone completely",
            "To imitate someone in an effort to equal or surpass them",
            "To criticize someone",
            "To hide someone's work"
        ],
        answer: 1,
        explanation: "'Emulate' means to imitate someone or something, usually with the aim of matching or surpassing them."
    },

    {
        question: "What does the word 'Endeavor' mean?",
        options: [
            "A serious attempt or effort",
            "A sudden failure",
            "A private conversation",
            "A careless mistake"
        ],
        answer: 0,
        explanation: "'Endeavor' means a serious attempt or effort to achieve something."
    },

    {
        question: "What does the word 'Entice' mean?",
        options: [
            "To discourage someone",
            "To attract or tempt someone",
            "To punish someone",
            "To ignore someone"
        ],
        answer: 1,
        explanation: "'Entice' means to attract or tempt someone by offering something appealing."
    },

    {
        question: "What does the word 'Envious' mean?",
        options: [
            "Feeling jealous of someone else's advantage",
            "Feeling grateful to someone",
            "Feeling confident about something",
            "Feeling responsible for something"
        ],
        answer: 0,
        explanation: "'Envious' means feeling unhappy because someone else has something that you wish you had."
    },

    {
        question: "What does the word 'Equitable' mean?",
        options: [
            "Unfair and biased",
            "Fair and impartial",
            "Very expensive",
            "Difficult to understand"
        ],
        answer: 1,
        explanation: "'Equitable' means fair and impartial, especially when distributing rights, benefits, or opportunities."
    },

    {
        question: "What does the word 'Evolve' mean?",
        options: [
            "To develop or change gradually",
            "To disappear suddenly",
            "To remain exactly the same",
            "To destroy completely"
        ],
        answer: 0,
        explanation: "'Evolve' means to develop or change gradually over time."
    },

    {
        question: "What does the word 'Exasperate' mean?",
        options: [
            "To make someone extremely annoyed",
            "To make someone happy",
            "To forgive someone",
            "To surprise someone pleasantly"
        ],
        answer: 0,
        explanation: "'Exasperate' means to make someone extremely annoyed, especially by repeated problems or actions."
    },

    {
        question: "What does the word 'Exhaustive' mean?",
        options: [
            "Incomplete and limited",
            "Including everything possible; comprehensive",
            "Very short",
            "Difficult to remember"
        ],
        answer: 1,
        explanation: "'Exhaustive' means complete and covering all or nearly all possibilities or details."
    },

    {
        question: "What does the word 'Exorbitant' mean?",
        options: [
            "Reasonably priced",
            "Much too high or expensive",
            "Very ordinary",
            "Easy to obtain"
        ],
        answer: 1,
        explanation: "'Exorbitant' means much higher than is reasonable, especially in price or cost."
    },

    {
        question: "What does the word 'Expire' mean?",
        options: [
            "To begin again",
            "To become invalid or come to an end",
            "To increase in value",
            "To become stronger"
        ],
        answer: 1,
        explanation: "'Expire' means to come to an end or become no longer valid, such as a contract, ticket, or license."
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

        <p>${q.explanation}</p>

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

            <p>${q.explanation}</p>

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

            <p>${q.explanation}</p>

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