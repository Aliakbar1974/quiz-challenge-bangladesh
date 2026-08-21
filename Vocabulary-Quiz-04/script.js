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
        question: "What is the meaning of \"Adore\"?",
        options: [
            "To strongly dislike someone",
            "To avoid someone completely",
            "To criticize someone publicly",
            "To love or admire someone very much"
        ],
        answer: 3,
        explanation: "Adore means to love, admire, or like someone or something very much."
    },

    {
        question: "What is the meaning of \"Adroit\"?",
        options: [
            "Skillful and clever in dealing with situations",
            "Slow and careless",
            "Unwilling to learn",
            "Unable to make decisions"
        ],
        answer: 0,
        explanation: "Adroit means skillful, clever, and effective, especially when handling difficult situations."
    },

    {
        question: "What is the meaning of \"Affluent\"?",
        options: [
            "Having very little money",
            "Having plenty of money or wealth",
            "Living far from a city",
            "Working without payment"
        ],
        answer: 1,
        explanation: "Affluent means having a lot of money and a high standard of living."
    },

    {
        question: "What does \"Aggravate\" mean?",
        options: [
            "To solve a problem",
            "To make someone relaxed",
            "To make a problem or situation worse",
            "To remove something completely"
        ],
        answer: 2,
        explanation: "Aggravate means to make a problem, situation, or condition worse."
    },

    {
        question: "What is the meaning of \"Amplify\"?",
        options: [
            "To make something smaller",
            "To hide something carefully",
            "To remove something",
            "To increase the strength, amount, or effect of something"
        ],
        answer: 3,
        explanation: "Amplify means to increase the strength, amount, volume, or effect of something."
    },

    {
        question: "What does \"Appraise\" mean?",
        options: [
            "To estimate the value or quality of something",
            "To purchase something",
            "To hide the value of something",
            "To repair an object"
        ],
        answer: 0,
        explanation: "Appraise means to examine something and estimate its value, quality, or importance."
    },

    {
        question: "What is the meaning of \"Arrogant\"?",
        options: [
            "Very modest",
            "Extremely nervous",
            "Having an exaggerated sense of one's own importance",
            "Always willing to accept criticism"
        ],
        answer: 2,
        explanation: "Arrogant means behaving as if you are more important, intelligent, or capable than others."
    },

    {
        question: "What does \"Aspire\" mean?",
        options: [
            "To give up after failure",
            "To have a strong desire to achieve something",
            "To avoid personal goals",
            "To copy another person's behavior"
        ],
        answer: 1,
        explanation: "Aspire means to have a strong desire or ambition to achieve something."
    },

    {
        question: "What is the meaning of \"Astound\"?",
        options: [
            "To make someone extremely surprised or amazed",
            "To make someone angry",
            "To make someone sleepy",
            "To explain something clearly"
        ],
        answer: 0,
        explanation: "Astound means to surprise or impress someone greatly."
    },

    {
        question: "What does \"Astray\" mean?",
        options: [
            "In the correct direction",
            "Very close to a destination",
            "At the highest point",
            "Away from the correct path or direction"
        ],
        answer: 3,
        explanation: "Astray means away from the correct path, direction, or intended course."
    },

    {
        question: "What is the meaning of \"Audacious\"?",
        options: [
            "Extremely cautious",
            "Showing boldness or willingness to take risks",
            "Unable to express an opinion",
            "Afraid of ordinary decisions"
        ],
        answer: 1,
        explanation: "Audacious means very bold, confident, or willing to take risks."
    },

    {
        question: "What does \"Augment\" mean?",
        options: [
            "To reduce something",
            "To remove unnecessary parts",
            "To increase or make something greater",
            "To completely replace something"
        ],
        answer: 2,
        explanation: "Augment means to increase the size, amount, value, or effectiveness of something."
    },

    {
        question: "What is the meaning of \"Autonomous\"?",
        options: [
            "Able to operate or make decisions independently",
            "Controlled entirely by another authority",
            "Dependent on outside assistance",
            "Designed only for temporary use"
        ],
        answer: 0,
        explanation: "Autonomous means independent and able to operate or make decisions without external control."
    },

    {
        question: "What does \"Aversion\" mean?",
        options: [
            "A strong desire for something",
            "A feeling of satisfaction",
            "An unexpected opportunity",
            "A strong dislike or unwillingness toward something"
        ],
        answer: 3,
        explanation: "Aversion means a strong feeling of dislike or opposition toward someone or something."
    },

    {
        question: "What is the meaning of \"Baffle\"?",
        options: [
            "To encourage someone",
            "To confuse someone completely",
            "To organize information",
            "To explain something clearly"
        ],
        answer: 1,
        explanation: "Baffle means to confuse someone so that they cannot understand or solve something."
    },

    {
        question: "What does \"Beneficiary\" mean?",
        options: [
            "A person who receives a benefit or advantage",
            "A person who collects taxes",
            "A person who manages a business",
            "A person who provides financial assistance"
        ],
        answer: 0,
        explanation: "Beneficiary means a person or organization that receives money, property, or another benefit."
    },

    {
        question: "What is the meaning of \"Bewilder\"?",
        options: [
            "To make something organized",
            "To give clear instructions",
            "To confuse someone greatly",
            "To make someone confident"
        ],
        answer: 2,
        explanation: "Bewilder means to confuse someone so much that they do not know what to do or think."
    },

    {
        question: "What does \"Bicker\" mean?",
        options: [
            "To cooperate peacefully",
            "To argue repeatedly about small matters",
            "To praise someone",
            "To discuss an issue formally"
        ],
        answer: 1,
        explanation: "Bicker means to argue repeatedly about small or unimportant matters."
    },

    {
        question: "What is the meaning of \"Blunder\"?",
        options: [
            "A successful achievement",
            "A useful discovery",
            "A carefully planned decision",
            "A careless or embarrassing mistake"
        ],
        answer: 3,
        explanation: "Blunder means a careless, foolish, or serious mistake."
    },

    {
        question: "What does \"Brawl\" mean?",
        options: [
            "A noisy physical fight",
            "A formal meeting",
            "A peaceful gathering",
            "A private conversation"
        ],
        answer: 0,
        explanation: "Brawl means a noisy and uncontrolled physical fight, usually involving several people."
    },

    {
        question: "What is the meaning of \"Brittle\"?",
        options: [
            "Flexible and difficult to break",
            "Soft and easy to stretch",
            "Hard but easily broken or cracked",
            "Heavy and extremely strong"
        ],
        answer: 2,
        explanation: "Brittle means hard but easily broken, cracked, or damaged rather than bent."
    },

    {
        question: "What does \"Brutal\" mean?",
        options: [
            "Gentle and considerate",
            "Friendly and cooperative",
            "Simple and pleasant",
            "Extremely harsh, violent, or cruel"
        ],
        answer: 3,
        explanation: "Brutal means extremely violent, cruel, harsh, or unpleasant."
    },

    {
        question: "What is the meaning of \"Bully\"?",
        options: [
            "A person who uses power to hurt or frighten weaker people",
            "A person who protects others",
            "A person who teaches children",
            "A person who avoids conflict"
        ],
        answer: 0,
        explanation: "A bully is someone who repeatedly uses strength or power to hurt, frighten, or control someone weaker."
    },

    {
        question: "What does \"Callous\" mean?",
        options: [
            "Very sensitive to others",
            "Showing little concern for the feelings or suffering of others",
            "Kind and generous",
            "Easily affected by emotions"
        ],
        answer: 1,
        explanation: "Callous means showing little concern for the feelings, suffering, or problems of others."
    },

    {
        question: "What is the meaning of \"Captive\"?",
        options: [
            "A person who is free to leave",
            "A person who travels without restrictions",
            "A person who has been captured and is being held prisoner",
            "A person who voluntarily joins a group"
        ],
        answer: 2,
        explanation: "Captive means a person or animal that has been captured and is being kept under control or in confinement."
    },

    {
        question: "What does \"Captivate\" mean?",
        options: [
            "To attract and hold someone's attention strongly",
            "To make someone lose interest",
            "To force someone to leave",
            "To criticize someone publicly"
        ],
        answer: 0,
        explanation: "Captivate means to attract and hold someone's attention or interest very strongly."
    },

    {
        question: "What is the meaning of \"Chaos\"?",
        options: [
            "A carefully organized system",
            "A state of complete confusion and disorder",
            "A period of peaceful cooperation",
            "A situation of complete control"
        ],
        answer: 1,
        explanation: "Chaos means a state of complete confusion, disorder, or lack of organization."
    },

    {
        question: "What does \"Chaste\" mean?",
        options: [
            "Extremely wealthy",
            "Very aggressive",
            "Unwilling to follow rules",
            "Abstaining from sexual activity or avoiding sexual immorality"
        ],
        answer: 3,
        explanation: "Chaste generally means abstaining from sexual activity or avoiding behavior considered sexually immoral."
    },

    {
        question: "What is the meaning of \"Cluttered\"?",
        options: [
            "Filled with too many things in an untidy way",
            "Clean and completely empty",
            "Carefully arranged",
            "Large and spacious"
        ],
        answer: 0,
        explanation: "Cluttered means filled with too many objects or things in an untidy or disorganized way."
    },

    {
        question: "What does \"Compassion\" mean?",
        options: [
            "A desire to compete",
            "A feeling of anger",
            "A feeling of sympathy and concern for someone who is suffering",
            "A lack of interest in others"
        ],
        answer: 2,
        explanation: "Compassion means a feeling of sympathy and concern for someone who is suffering, together with a desire to help."
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