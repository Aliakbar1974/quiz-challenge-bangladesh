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
        question: "Which word means to use a person or situation unfairly for personal advantage?",
        options: [
            "To protect",
            "To ignore",
            "To encourage",
            "Exploit"
        ],
        answer: 3,
        explanation: "Exploit means to use someone or something unfairly or selfishly for personal benefit."
    },

    {
        question: "If something covers a large area or involves a large amount, which word describes it?",
        options: [
            "Limited",
            "Extensive",
            "Narrow",
            "Minor"
        ],
        answer: 1,
        explanation: "Extensive means covering a large area or involving a large amount of something."
    },

    {
        question: "What does 'extinct' mean when we talk about a species?",
        options: [
            "Still developing",
            "Increasing rapidly",
            "No longer existing",
            "Recently discovered"
        ],
        answer: 2,
        explanation: "Extinct means no longer existing, especially because all members of a species have died."
    },

    {
        question: "What is meant by 'extravagance'?",
        options: [
            "Excessive or unnecessary spending",
            "Careful financial planning",
            "A useful investment",
            "A simple lifestyle"
        ],
        answer: 0,
        explanation: "Extravagance refers to excessive or unnecessary spending, especially on luxury or comfort."
    },

    {
        question: "Someone who is 'exultant' is most likely feeling what?",
        options: [
            "Deeply worried",
            "Extremely tired",
            "Very confused",
            "Extremely joyful and triumphant"
        ],
        answer: 3,
        explanation: "Exultant means showing or feeling great happiness and triumph."
    },

    {
        question: "If a book completely holds your attention, it can be said to ____ you.",
        options: [
            "Flee",
            "Fascinate",
            "Fret",
            "Abate"
        ],
        answer: 1,
        explanation: "Fascinate means to attract and hold someone's attention or interest strongly."
    },

    {
        question: "A long-lasting and bitter disagreement between two families is called a ____.",
        options: [
            "Grievance",
            "Grudge",
            "Feud",
            "Hoax"
        ],
        answer: 2,
        explanation: "A feud is a long and bitter conflict or disagreement between people or groups."
    },

    {
        question: "What does it mean to 'flatter' someone?",
        options: [
            "To praise someone excessively, often to please them",
            "To criticize someone publicly",
            "To avoid speaking to someone",
            "To disagree with someone"
        ],
        answer: 0,
        explanation: "Flatter means to praise someone excessively, often to gain their favor or make them feel pleased."
    },

    {
        question: "What does 'flee' mean?",
        options: [
            "To investigate carefully",
            "To remain calm",
            "To celebrate a victory",
            "To run away from danger or a place"
        ],
        answer: 3,
        explanation: "Flee means to run away quickly from danger, trouble, or an unpleasant situation."
    },

    {
        question: "Which word means to predict or expect something before it happens?",
        options: [
            "Germinate",
            "Foresee",
            "Exploit",
            "Abhor"
        ],
        answer: 1,
        explanation: "Foresee means to predict or expect that something will happen in the future."
    },

    {
        question: "What is 'fraud'?",
        options: [
            "An honest misunderstanding",
            "A legal agreement",
            "Intentional deception for money or advantage",
            "A scientific discovery"
        ],
        answer: 2,
        explanation: "Fraud is intentional deception used to gain money, property, or another advantage."
    },

    {
        question: "If someone constantly worries about a problem, which word best describes this behavior?",
        options: [
            "Fret",
            "Flatter",
            "Flee",
            "Fascinate"
        ],
        answer: 0,
        explanation: "Fret means to worry or feel anxious about something, often unnecessarily."
    },

    {
        question: "Which word describes extremely cold weather?",
        options: [
            "Humid",
            "Hazy",
            "Hectic",
            "Frigid"
        ],
        answer: 3,
        explanation: "Frigid means extremely cold. It can also describe someone who is emotionally cold or unfriendly."
    },

    {
        question: "If an effort produces no useful result, it can be described as ____.",
        options: [
            "Extensive",
            "Futile",
            "Glamorous",
            "Exultant"
        ],
        answer: 1,
        explanation: "Futile means incapable of producing any useful or successful result."
    },

    {
        question: "What happens when a seed begins to grow?",
        options: [
            "It becomes extinct",
            "It abates",
            "It germinates",
            "It flees"
        ],
        answer: 2,
        explanation: "Germinate means to begin to grow, especially when a seed starts developing into a plant."
    },

    {
        question: "What is the 'gist' of a speech?",
        options: [
            "Its main idea or essential meaning",
            "Its exact length",
            "Its most difficult word",
            "Its final sentence only"
        ],
        answer: 0,
        explanation: "Gist means the main idea or essential meaning of something."
    },

    {
        question: "Which word best describes something attractive, fashionable, and associated with luxury?",
        options: [
            "Grouchy",
            "Frigid",
            "Hazy",
            "Glamorous"
        ],
        answer: 3,
        explanation: "Glamorous means attractive, exciting, and fashionable, often associated with luxury or elegance."
    },

    {
        question: "If an employee makes a formal complaint about unfair treatment, the complaint may be called a ____.",
        options: [
            "Grudge",
            "Grievance",
            "Hoax",
            "Feud"
        ],
        answer: 1,
        explanation: "A grievance is a complaint about something considered unfair, wrong, or unsatisfactory."
    },

    {
        question: "Which word describes a person who is easily annoyed and often in a bad mood?",
        options: [
            "Exultant",
            "Glamorous",
            "Grouchy",
            "Identical"
        ],
        answer: 2,
        explanation: "Grouchy means easily annoyed, irritable, or in a bad mood."
    },

    {
        question: "What is a 'grudge'?",
        options: [
            "A lasting feeling of resentment toward someone",
            "A strong feeling of admiration",
            "A sudden feeling of excitement",
            "A desire to help someone"
        ],
        answer: 0,
        explanation: "A grudge is a lasting feeling of resentment or anger toward someone because of a past action."
    },

    {
        question: "If someone's memory of an event is unclear, it can be described as ____.",
        options: [
            "Identical",
            "Hilarious",
            "Extensive",
            "Hazy"
        ],
        answer: 3,
        explanation: "Hazy means unclear, indistinct, or difficult to remember or understand."
    },

    {
        question: "A very busy day filled with many activities can be described as ____.",
        options: [
            "Futile",
            "Hectic",
            "Frigid",
            "Humid"
        ],
        answer: 1,
        explanation: "Hectic describes a situation or period that is extremely busy, active, and often stressful."
    },

    {
        question: "Which word means extremely funny?",
        options: [
            "Hoarse",
            "Grouchy",
            "Hilarious",
            "Hazy"
        ],
        answer: 2,
        explanation: "Hilarious means extremely funny or causing a lot of laughter."
    },

    {
        question: "What does it mean if someone's voice is 'hoarse'?",
        options: [
            "It sounds rough or harsh",
            "It is perfectly clear",
            "It is unusually cheerful",
            "It is extremely loud"
        ],
        answer: 0,
        explanation: "Hoarse describes a rough, harsh, or weak voice, often caused by illness or overuse."
    },

    {
        question: "What is a 'hoax'?",
        options: [
            "A scientific discovery",
            "A legal document",
            "A genuine warning",
            "A deliberate deception or false story"
        ],
        answer: 3,
        explanation: "A hoax is a deliberately created false story or deception intended to trick people."
    },

    {
        question: "What does 'humid' mean when describing the weather?",
        options: [
            "Extremely dry",
            "Containing a high amount of moisture in the air",
            "Very cold and windy",
            "Completely free of moisture"
        ],
        answer: 1,
        explanation: "Humid means that the air contains a high amount of water vapor or moisture."
    },

    {
        question: "If two documents are exactly the same, which word can describe them?",
        options: [
            "Extensive",
            "Hazy",
            "Identical",
            "Futile"
        ],
        answer: 2,
        explanation: "Identical means exactly the same in appearance, characteristics, or nature."
    },

    {
        question: "A person who lacks knowledge or awareness about a subject may be described as ____.",
        options: [
            "Ignorant",
            "Exultant",
            "Glamorous",
            "Fascinating"
        ],
        answer: 0,
        explanation: "Ignorant means lacking knowledge, information, or awareness about something."
    },

    {
        question: "If a storm gradually becomes less severe, which word best describes the change?",
        options: [
            "Exploit",
            "Flee",
            "Germinate",
            "Abate"
        ],
        answer: 3,
        explanation: "Abate means to become less intense, severe, or widespread, or to make something less intense."
    },

    {
        question: "Which word means to strongly dislike or hate something?",
        options: [
            "Flatter",
            "Abhor",
            "Fascinate",
            "Foresee"
        ],
        answer: 1,
        explanation: "Abhor means to strongly dislike or hate something because it is considered extremely unpleasant or wrong."
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