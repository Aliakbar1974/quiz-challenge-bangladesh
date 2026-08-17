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
        question: "What is the meaning of \"Mitigate\"?",
        options: ["Increase", "Create", "Reduce", "Ignore"],
        answer: 2,
        explanation: "Mitigate means to reduce the severity or harmful effect of something.<br><br><strong>Example:</strong> The government introduced new measures to mitigate the impact of inflation."
    },
    {
        question: "What is the meaning of \"Abundant\"?",
        options: ["Limited", "Scarce", "Expensive", "Plentiful"],
        answer: 3,
        explanation: "Abundant means existing in large quantities; plentiful.<br><br><strong>Example:</strong> The region has abundant natural resources."
    },
    {
        question: "What is the meaning of \"Reluctant\"?",
        options: ["Prepared", "Unwilling", "Certain", "Excited"],
        answer: 1,
        explanation: "Reluctant means unwilling or hesitant to do something.<br><br><strong>Example:</strong> He was reluctant to accept the offer without further discussion."
    },
    {
        question: "What is the meaning of \"Diligent\"?",
        options: ["Hardworking", "Impatient", "Careless", "Confused"],
        answer: 0,
        explanation: "Diligent means showing careful and persistent effort.<br><br><strong>Example:</strong> She is a diligent employee who always completes her work on time."
    },
    {
        question: "What is the meaning of \"Concise\"?",
        options: ["Complicated", "Emotional", "Brief", "Repetitive"],
        answer: 2,
        explanation: "Concise means expressing something clearly in a few words.<br><br><strong>Example:</strong> The manager asked for a concise summary of the proposal."
    },
    {
        question: "What is the meaning of \"Compel\"?",
        options: ["Permit", "Prevent", "Delay", "Force"],
        answer: 3,
        explanation: "Compel means to force someone to do something.<br><br><strong>Example:</strong> The evidence compelled the committee to reconsider its decision."
    },
    {
        question: "What is the meaning of \"Vulnerable\"?",
        options: ["Independent", "Protected", "Easily harmed", "Powerful"],
        answer: 2,
        explanation: "Vulnerable means exposed to the possibility of harm or attack.<br><br><strong>Example:</strong> Small businesses are particularly vulnerable to economic shocks."
    },
    {
        question: "What is the meaning of \"Relieve\"?",
        options: ["Conceal", "Reduce suffering", "Prevent completely", "Worsen"],
        answer: 1,
        explanation: "Relieve means to reduce pain, difficulty, or distress.<br><br><strong>Example:</strong> The new measures may relieve pressure on low-income families."
    },
    {
        question: "What is the meaning of \"Enhance\"?",
        options: ["Hide", "Reduce", "Improve", "Destroy"],
        answer: 2,
        explanation: "Enhance means to improve the quality, value, or effectiveness of something.<br><br><strong>Example:</strong> The training program was designed to enhance employees' skills."
    },
    {
        question: "What is the meaning of \"Obsolete\"?",
        options: ["No longer useful", "Essential", "Modern", "Expensive"],
        answer: 0,
        explanation: "Obsolete means no longer useful or necessary because something newer exists.<br><br><strong>Example:</strong> Many traditional technologies have become obsolete."
    },
    {
        question: "What is the meaning of \"Ambiguous\"?",
        options: ["Complete", "Accurate", "Uncertain in meaning", "Clear"],
        answer: 2,
        explanation: "Ambiguous means open to more than one interpretation.<br><br><strong>Example:</strong> The wording of the agreement was ambiguous and caused confusion."
    },
    {
        question: "What is the meaning of \"Inevitable\"?",
        options: ["Uncertain", "Certain to happen", "Avoidable", "Unusual"],
        answer: 1,
        explanation: "Inevitable means certain to happen and impossible to avoid.<br><br><strong>Example:</strong> Some degree of change is inevitable in a growing organization."
    },
    {
        question: "What is the meaning of \"Feasible\"?",
        options: ["Impossible", "Extremely expensive", "Unnecessary", "Practical and possible"],
        answer: 3,
        explanation: "Feasible means possible and practical to achieve.<br><br><strong>Example:</strong> The committee concluded that the proposed project was financially feasible."
    },
    {
        question: "What is the meaning of \"Adverse\"?",
        options: ["Temporary", "Favorable", "Harmful or unfavorable", "Predictable"],
        answer: 2,
        explanation: "Adverse means harmful or unfavorable.<br><br><strong>Example:</strong> The company faced adverse economic conditions."
    },
    {
        question: "What is the meaning of \"Allocate\"?",
        options: ["Remove", "Distribute", "Combine", "Delay"],
        answer: 1,
        explanation: "Allocate means to distribute something for a particular purpose.<br><br><strong>Example:</strong> The government allocated additional funds to education."
    },
    {
        question: "What is the meaning of \"Relinquish\"?",
        options: ["Acquire", "Improve", "Protect", "Give up"],
        answer: 3,
        explanation: "Relinquish means to voluntarily give up or surrender something.<br><br><strong>Example:</strong> The director agreed to relinquish control of the project."
    },
    {
        question: "What is the meaning of \"Scrutinize\"?",
        options: ["Examine carefully", "Simplify", "Ignore completely", "Approve immediately"],
        answer: 0,
        explanation: "Scrutinize means to examine something very carefully.<br><br><strong>Example:</strong> The auditors scrutinized the company's financial records."
    },
    {
        question: "What is the meaning of \"Substantial\"?",
        options: ["Very small", "Uncertain", "Temporary", "Significant or considerable"],
        answer: 3,
        explanation: "Substantial means considerable in size, importance, or value.<br><br><strong>Example:</strong> The company made a substantial investment in technology."
    },
    {
        question: "What is the meaning of \"Coherent\"?",
        options: ["Incomplete", "Logical and well organized", "Unrelated", "Extremely difficult"],
        answer: 1,
        explanation: "Coherent means logical, consistent, and easy to understand.<br><br><strong>Example:</strong> The candidate presented a coherent argument during the interview."
    },
    {
        question: "What is the meaning of \"Resilient\"?",
        options: ["Able to recover quickly", "Easily discouraged", "Unpredictable", "Completely dependent"],
        answer: 0,
        explanation: "Resilient means able to recover from difficulties or setbacks.<br><br><strong>Example:</strong> The economy proved remarkably resilient after the crisis."
    },
    {
        question: "What is the meaning of \"Commence\"?",
        options: ["Cancel", "End", "Repeat", "Begin"],
        answer: 3,
        explanation: "Commence means to begin or start.<br><br><strong>Example:</strong> The meeting will commence at nine o'clock."
    },
    {
        question: "What is the meaning of \"Cease\"?",
        options: ["Continue", "Stop", "Improve", "Begin"],
        answer: 1,
        explanation: "Cease means to stop or come to an end.<br><br><strong>Example:</strong> The company decided to cease operations in the region."
    },
    {
        question: "What is the meaning of \"Explicit\"?",
        options: ["Uncertain", "Implied", "Clearly stated", "Secret"],
        answer: 2,
        explanation: "Explicit means clearly and directly stated.<br><br><strong>Example:</strong> The contract contains explicit instructions regarding confidentiality."
    },
    {
        question: "What is the meaning of \"Imply\"?",
        options: ["Suggest without saying directly", "State directly", "Explain repeatedly", "Reject formally"],
        answer: 0,
        explanation: "Imply means to suggest something without stating it directly.<br><br><strong>Example:</strong> His remarks implied that further negotiations might be necessary."
    },
    {
        question: "What is the meaning of \"Infer\"?",
        options: ["Avoid a conclusion", "Draw a conclusion from evidence", "State something loudly", "Change the evidence"],
        answer: 1,
        explanation: "Infer means to reach a conclusion based on evidence or reasoning.<br><br><strong>Example:</strong> From the available data, researchers inferred that demand was declining."
    },
    {
        question: "What is the meaning of \"Proficient\"?",
        options: ["Highly skilled", "Unwilling", "Completely inexperienced", "Uncertain"],
        answer: 0,
        explanation: "Proficient means skilled or competent at doing something.<br><br><strong>Example:</strong> She is proficient in English and Mandarin."
    },
    {
        question: "What is the meaning of \"Commend\"?",
        options: ["Question", "Criticize", "Punish", "Praise"],
        answer: 3,
        explanation: "Commend means to praise someone or something officially or publicly.<br><br><strong>Example:</strong> The officer was commended for his exceptional service."
    },
    {
        question: "What is the meaning of \"Deter\"?",
        options: ["Discourage", "Permit", "Reward", "Encourage"],
        answer: 0,
        explanation: "Deter means to discourage someone from doing something.<br><br><strong>Example:</strong> Higher penalties may deter people from violating the law."
    },
    {
        question: "What is the meaning of \"Plausible\"?",
        options: ["Impossible to believe", "Seemingly reasonable or believable", "Completely proven", "Obviously false"],
        answer: 1,
        explanation: "Plausible means seeming reasonable or likely to be true.<br><br><strong>Example:</strong> The researcher offered a plausible explanation for the unexpected result."
    },
    {
        question: "What is the meaning of \"Versatile\"?",
        options: ["Able to perform many different functions", "Difficult to control", "Completely unreliable", "Limited to one purpose"],
        answer: 0,
        explanation: "Versatile means able to adapt to many different uses, activities, or situations.<br><br><strong>Example:</strong> Her versatile skills made her an effective member of the management team."
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