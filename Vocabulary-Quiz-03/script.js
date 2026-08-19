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
        question: "What is the meaning of \"Postpone\"?",
        options: [
            "To finish something early",
            "To cancel something permanently",
            "To delay something until a later time",
            "To improve something"
        ],
        answer: 2,
        explanation: "Postpone means to delay an event, activity, or decision until a later time.<br><br><strong>Example:</strong> The meeting was postponed until next Monday."
    },
    {
        question: "What is the meaning of \"Predict\"?",
        options: [
            "To say what you think will happen in the future",
            "To forget something completely",
            "To repair something damaged",
            "To prevent an event"
        ],
        answer: 0,
        explanation: "Predict means to say or estimate what is likely to happen in the future.<br><br><strong>Example:</strong> Experts predict that demand for electric cars will increase."
    },
    {
        question: "What is the meaning of \"Prosper\"?",
        options: [
            "To become weaker",
            "To become successful or wealthy",
            "To disappear suddenly",
            "To remain unchanged"
        ],
        answer: 1,
        explanation: "Prosper means to become successful, especially financially or economically.<br><br><strong>Example:</strong> The small business continued to prosper after expanding online."
    },
    {
        question: "What is the meaning of \"Reverse\"?",
        options: [
            "To increase the speed",
            "To repair a machine",
            "To make something larger",
            "To change something to the opposite direction or order"
        ],
        answer: 3,
        explanation: "everse means to change something to the opposite direction, position, or order.<br><br><strong>Example:</strong> The driver had to reverse the car carefully."
    },
    {
        question: "What is the meaning of \"Roam\"?",
        options: [
            "To stay in one place",
            "To work continuously",
            "To move around without a fixed destination",
            "To travel for a specific appointment"
        ],
        answer: 2,
        explanation: "Roam means to move around freely without a particular destination or purpose.<br><br><strong>Example:</strong> The tourists spent the afternoon roaming around the old city."
    },
    {
        question: "What is the meaning of \"Segment\"?",
        options: [
            "A separate part of something larger",
            "A complete object",
            "A serious mistake",
            "A method of repairing something"
        ],
        answer: 0,
        explanation: "Segment means a separate part or section of something larger.<br><br><strong>Example:</strong> The company created a new product segment for younger customers."
    },
    {
        question: "What is the meaning of \"Seize\"?",
        options: [
            "To release something",
            "To observe something carefully",
            "To repair something",
            "To take hold of something quickly or forcefully"
        ],
        answer: 3,
        explanation: "Seize means to take hold of something suddenly, quickly, or forcefully.<br><br><strong>Example:</strong> The police seized several illegal items."
    },
    {
        question: "What is the meaning of \"Shatter\"?",
        options: [
            "To clean something thoroughly",
            "To break suddenly into many small pieces",
            "To repair something broken",
            "To make something stronger"
        ],
        answer: 1,
        explanation: "Shatter means to break or cause something to break suddenly into many small pieces.<br><br><strong>Example:</strong> The glass shattered when it fell onto the floor."
    },
    {
        question: "What is the meaning of \"Simulate\"?",
        options: [
            "To copy or imitate a real situation for study or testing",
            "To destroy a machine",
            "To avoid a difficult situation",
            "To simplify a complicated problem"
        ],
        answer: 0,
        explanation: "Simulate means to imitate a real situation, process, or system, usually for study, training, or testing.<br><br><strong>Example:</strong> The software can simulate different traffic conditions."
    },
    {
        question: "What is the meaning of \"Skim\"?",
        options: [
            "To read every word carefully",
            "To write a detailed summary",
            "To memorize a text completely",
            "To read or look over something quickly"
        ],
        answer: 3,
        explanation: "Skim means to read or look over something quickly to get the main idea or important points.<br><br><strong>Example:</strong> I only had a few minutes to skim the report."
    },
    {
        question: "What is the meaning of \"Slap\"?",
        options: [
            "To touch something gently",
            "To hit someone or something with an open hand",
            "To throw something into the air",
            "To hold something tightly"
        ],
        answer: 1,
        explanation: "Slap means to hit someone or something with the palm of the hand.<br><br><strong>Example:</strong> He accidentally slapped the table in frustration."
    },
    {
        question: "What is the meaning of \"Soar\"?",
        options: [
            "To move very slowly",
            "To fall suddenly",
            "To rise or increase quickly and strongly",
            "To remain at the same level"
        ],
        answer: 2,
        explanation: "Soar means to rise or increase rapidly, or to fly high in the air.<br><br><strong>Example:</strong> The company's profits soared after the new product was launched."
    },
    {
        question: "What is the meaning of \"Squash\"?",
        options: [
            "To press or crush something so that it becomes flat or damaged",
            "To repair something carefully",
            "To expand something greatly",
            "To move something upward"
        ],
        answer: 0,
        explanation: "Squash means to press, crush, or squeeze something so that it becomes flat or damaged.<br><br><strong>Example:</strong> Be careful not to squash the fruit in your bag."
    },
    {
        question: "What is the meaning of \"Strain\"?",
        options: [
            "To relax completely",
            "To celebrate an achievement",
            "To examine something casually",
            "To put pressure on something or make a great effort"
        ],
        answer: 3,
        explanation: "Strain means to put pressure on something or to make a great effort that may cause difficulty or stress.<br><br><strong>Example:</strong> Carrying the heavy box strained his back."
    },
    {
        question: "What is the meaning of \"Strive\"?",
        options: [
            "To give up easily",
            "To try very hard to achieve something",
            "To avoid responsibility",
            "To wait without acting"
        ],
        answer: 1,
        explanation: "Strive means to try very hard to achieve or obtain something.<br><br><strong>Example:</strong> We always strive to provide better service to our customers."
    },
    {
        question: "What is the meaning of \"Tumble\"?",
        options: [
            "To stand firmly",
            "To move in a straight line",
            "To fall or roll suddenly and uncontrollably",
            "To rise slowly"
        ],
        answer: 2,
        explanation: "Tumble means to fall, roll, or move suddenly and uncontrollably.<br><br><strong>Example:</strong> The child tumbled down the grassy hill."
    },
    {
        question: "What is the meaning of \"Ultimately\"?",
        options: [
            "Finally or in the end",
            "Immediately",
            "Rarely",
            "At the beginning"
        ],
        answer: 0,
        explanation: "Ultimately means finally, eventually, or in the end.<br><br><strong>Example:</strong> The team ultimately achieved its goal."
    },
    {
    question: "What is the meaning of \"Amnesia\"?",
    options: [
        "A strong desire to achieve something",
        "A condition involving partial or complete loss of memory",
        "A feeling of being extremely confident",
        "A temporary increase in physical strength"
    ],
    answer: 1,
    explanation: "Amnesia means partial or complete loss of memory, often involving difficulty remembering past events or information.<br><br><strong>Example:</strong> After the accident, he suffered from temporary amnesia and could not remember what had happened."
},
       
    {
        question: "What is the meaning of \"Warrant\"?",
        options: [
            "To avoid a responsibility",
            "To reduce the importance of something",
            "To make something disappear",
            "To justify or make something necessary"
        ],
        answer: 3,
        explanation: "Warrant means to justify or provide a good reason for something.<br><br><strong>Example:</strong> The serious situation warranted immediate action."
    },
    {
        question: "What is the meaning of \"Adjacent\"?",
        options: [
            "Far away from something",
            "Completely separate",
            "Next to or very close to something",
            "Located underneath something"
        ],
        answer: 2,
        explanation: "Adjacent means next to or very close to something.<br><br><strong>Example:</strong> Our office is adjacent to the main conference room."
    },
    {
        question: "What is the meaning of \"Absorbed\"?",
        options: [
            "Completely interested or deeply involved in something",
            "Completely confused by something",
            "Unwilling to participate",
            "Quickly distracted"
        ],
        answer: 0,
        explanation: "Absorbed means completely interested in or deeply involved in something.<br><br><strong>Example:</strong> She was so absorbed in the book that she did not hear the phone ring."
    },
    {
        question: "What is the meaning of \"Accumulate\"?",
        options: [
            "To remove something gradually",
            "To collect or gather more and more over time",
            "To divide something into parts",
            "To spend something quickly"
        ],
        answer: 1,
        explanation: "Accumulate means to collect or gather something gradually over time.<br><br><strong>Example:</strong> He managed to accumulate enough savings to buy a new computer."
    },
    {
        question: "What is the meaning of \"Agitate\"?",
        options: [
            "To calm someone down",
            "To repair something damaged",
            "To make someone worried, angry, or upset",
            "To praise someone publicly"
        ],
        answer: 2,
        explanation: "Agitate means to make someone feel worried, angry, or upset, or to stir something strongly.<br><br><strong>Example:</strong> The unfair decision agitated many employees."
    },
    {
        question: "What is the meaning of \"Aglow\"?",
        options: [
            "Shining with a warm or soft light",
            "Completely dark",
            "Covered with dust",
            "Very cold and wet"
        ],
        answer: 0,
        explanation: "Aglow means shining with a warm, soft light.<br><br><strong>Example:</strong> The mountains were aglow in the evening sunlight."
    },
    {
        question: "What is the meaning of \"Ailment\"?",
        options: [
            "A financial benefit",
            "A minor illness or health problem",
            "A professional skill",
            "A type of celebration"
        ],
        answer: 1,
        explanation: "Ailment means an illness or health problem, especially one that is not very serious.<br><br><strong>Example:</strong> The doctor asked about his recent ailments."
    },
    {
        question: "What is the meaning of \"Alleviate\"?",
        options: [
            "To make a problem or pain less severe",
            "To make something more complicated",
            "To increase a person's responsibility",
            "To create a new problem"
        ],
        answer: 0,
        explanation: "Alleviate means to make pain, difficulty, or a problem less severe or easier to deal with.<br><br><strong>Example:</strong> The new policy was designed to alleviate traffic congestion."
    },
    {
        question: "What is the meaning of \"Allure\"?",
        options: [
            "A strong attraction or appeal",
            "A serious disagreement",
            "A sudden failure",
            "A lack of interest"
        ],
        answer: 0,
        explanation: "Allure means a strong quality or appeal that attracts or interests people.<br><br><strong>Example:</strong> The city has a special allure for young travelers."
    },
    {
        question: "What is the meaning of \"Aloof\"?",
        options: [
            "Very friendly and talkative",
            "Extremely excited",
            "Not friendly or emotionally involved; distant",
            "Always ready to help"
        ],
        answer: 2,
        explanation: "Aloof means emotionally distant, reserved, or not friendly toward others.<br><br><strong>Example:</strong> He appeared aloof during the meeting and rarely spoke."
    },
    {
        question: "What is the meaning of \"Amateur\"?",
        options: [
            "A highly experienced professional",
            "A person who does something as a hobby rather than as a profession",
            "A person who teaches a subject professionally",
            "A person with no interest in a particular activity"
        ],
        answer: 1,
        explanation: "Amateur means a person who does an activity for pleasure rather than as a profession.<br><br><strong>Example:</strong> He is an amateur photographer who enjoys taking pictures in his free time."
    },
    {
        question: "What is the meaning of \"Amicable\"?",
        options: [
            "Friendly and peaceful",
            "Angry and aggressive",
            "Difficult to understand",
            "Uncertain and confusing"
        ],
        answer: 0,
        explanation: "Amicable means friendly and peaceful, especially when people are dealing with a disagreement or difficult situation.<br><br><strong>Example:</strong> The two companies reached an amicable agreement."
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
                    Score: <span id="score">0</span>/${quizData.length}
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