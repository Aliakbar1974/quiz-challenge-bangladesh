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
    question: "What is the meaning of \"Abstain\"?",
    options: ["Avoid or refrain from something", "Support strongly", "Explain in detail", "Increase gradually"],
    answer: 0,
    explanation: "Abstain means to deliberately avoid or refrain from something.<br><br><strong>Example:</strong> The doctor advised him to abstain from smoking."
},

{
    question: "What is the meaning of \"Benevolent\"?",
    options: ["Extremely ambitious", "Kind and generous", "Difficult to understand", "Strict and demanding"],
    answer: 1,
    explanation: "Benevolent means kind, generous, and willing to help others.<br><br><strong>Example:</strong> The benevolent organization provided food and education to poor children."
},

{
    question: "What is the meaning of \"Coerce\"?",
    options: ["Encourage gently", "Praise publicly", "Force someone to do something", "Help someone succeed"],
    answer: 2,
    explanation: "Coerce means to force someone to do something by using pressure or threats.<br><br><strong>Example:</strong> No employee should be coerced into accepting unfair working conditions."
},

{
    question: "What is the meaning of \"Defy\"?",
    options: ["Follow willingly", "Explain carefully", "Accept without question", "Resist or refuse to obey"],
    answer: 3,
    explanation: "Defy means to resist or refuse to obey someone or something.<br><br><strong>Example:</strong> The protesters decided to defy the government's order."
},

{
    question: "What is the meaning of \"Deter\"?",
    options: ["Discourage someone from doing something", "Encourage immediate action", "Make something larger", "Describe something accurately"],
    answer: 0,
    explanation: "Deter means to discourage someone from doing something, usually by making them aware of possible consequences.<br><br><strong>Example:</strong> Strict penalties may deter people from committing crimes."
},

{
    question: "What is the meaning of \"Empathy\"?",
    options: ["A strong desire to compete", "The ability to understand another person's feelings", "A fear of failure", "A method of solving problems"],
    answer: 1,
    explanation: "Empathy means the ability to understand and share another person's feelings or experiences.<br><br><strong>Example:</strong> A good manager should show empathy toward employees facing personal difficulties."
},

{
    question: "What is the meaning of \"Frugal\"?",
    options: ["Extremely wealthy", "Careless with money", "Careful about spending money", "Generous to everyone"],
    answer: 2,
    explanation: "Frugal means careful about spending money and avoiding unnecessary expenses.<br><br><strong>Example:</strong> His frugal lifestyle allowed him to save enough money to buy a house."
},

{
    question: "What is the meaning of \"Genuine\"?",
    options: ["Artificial or fake", "Temporary and uncertain", "Difficult to recognize", "Real and authentic"],
    answer: 3,
    explanation: "Genuine means real, authentic, and not false or artificial.<br><br><strong>Example:</strong> The customer wanted to know whether the antique was genuine."
},

{
    question: "What is the meaning of \"Hinder\"?",
    options: ["Obstruct or make something difficult", "Improve rapidly", "Support completely", "Finish successfully"],
    answer: 0,
    explanation: "Hinder means to make something difficult or prevent it from progressing normally.<br><br><strong>Example:</strong> Poor communication can hinder the progress of a project."
},

{
    question: "What is the meaning of \"Innovative\"?",
    options: ["Traditional and unchanged", "Introducing new ideas or methods", "Unable to adapt", "Based entirely on the past"],
    answer: 1,
    explanation: "Innovative means introducing new ideas, methods, or technologies.<br><br><strong>Example:</strong> The company developed an innovative solution to reduce energy consumption."
},

{
    question: "What is the meaning of \"Justify\"?",
    options: ["Reject without explanation", "Hide a mistake", "Give a good reason for something", "Prevent someone from acting"],
    answer: 2,
    explanation: "Justify means to give a valid reason or explanation for something.<br><br><strong>Example:</strong> The manager had to justify the decision to increase the budget."
},

{
    question: "What is the meaning of \"Lucid\"?",
    options: ["Extremely complicated", "Completely uncertain", "Rarely discussed", "Clear and easy to understand"],
    answer: 3,
    explanation: "Lucid means clear and easy to understand, especially when describing an explanation or piece of writing.<br><br><strong>Example:</strong> The professor gave a lucid explanation of the economic theory."
},

{
    question: "What is the meaning of \"Mandatory\"?",
    options: ["Required by rule or law", "Completely optional", "Rarely recommended", "Difficult to arrange"],
    answer: 0,
    explanation: "Mandatory means required by a rule, regulation, or law.<br><br><strong>Example:</strong> Wearing a helmet is mandatory for all motorcycle riders."
},

{
    question: "What is the meaning of \"Novice\"?",
    options: ["An expert in a field", "A beginner with little experience", "A senior manager", "A professional researcher"],
    answer: 1,
    explanation: "Novice means a person who is new to a particular activity or subject and has little experience.<br><br><strong>Example:</strong> Although he was a novice programmer, he learned quickly."
},

{
    question: "What is the meaning of \"Omit\"?",
    options: ["Add something important", "Repeat several times", "Leave something out", "Explain something fully"],
    answer: 2,
    explanation: "Omit means to leave something out or fail to include it.<br><br><strong>Example:</strong> Please do not omit any important information from the report."
},

{
    question: "What is the meaning of \"Pessimistic\"?",
    options: ["Highly confident about success", "Always willing to help", "Extremely ambitious", "Expecting negative outcomes"],
    answer: 3,
    explanation: "Pessimistic means expecting bad or negative results rather than positive ones.<br><br><strong>Example:</strong> His pessimistic attitude made it difficult for the team to remain motivated."
},

{
    question: "What is the meaning of \"Reconcile\"?",
    options: ["Restore agreement between people or ideas", "Create a serious conflict", "Avoid all communication", "Reject a proposal"],
    answer: 0,
    explanation: "Reconcile means to restore friendly relations or make two different ideas or facts compatible.<br><br><strong>Example:</strong> The two departments worked together to reconcile their differences."
},

{
    question: "What is the meaning of \"Scarce\"?",
    options: ["Available in large quantities", "Limited or difficult to find", "Completely unnecessary", "Easy to replace"],
    answer: 1,
    explanation: "Scarce means limited in quantity or difficult to obtain.<br><br><strong>Example:</strong> Clean drinking water is scarce in some parts of the world."
},

{
    question: "What is the meaning of \"Tangible\"?",
    options: ["Impossible to describe", "Based only on emotions", "Real and capable of being touched or clearly identified", "Completely theoretical"],
    answer: 2,
    explanation: "Tangible means real, concrete, or capable of being touched or clearly measured.<br><br><strong>Example:</strong> The new policy produced tangible benefits for local businesses."
},

{
    question: "What is the meaning of \"Unprecedented\"?",
    options: ["Very common and ordinary", "Repeated many times", "Expected in advance", "Never having happened before"],
    answer: 3,
    explanation: "Unprecedented means something that has never happened or existed before.<br><br><strong>Example:</strong> The country experienced an unprecedented rise in online education."
},

{
    question: "What is the meaning of \"Validate\"?",
    options: ["Confirm that something is accurate or valid", "Destroy completely", "Ignore evidence", "Make something less useful"],
    answer: 0,
    explanation: "Validate means to confirm that something is correct, accurate, or acceptable.<br><br><strong>Example:</strong> Researchers conducted additional tests to validate the results."
},

{
    question: "What is the meaning of \"Wary\"?",
    options: ["Completely confident", "Cautious and watchful", "Highly enthusiastic", "Unaware of danger"],
    answer: 1,
    explanation: "Wary means being careful and alert because something may be dangerous or problematic.<br><br><strong>Example:</strong> Investors are wary of putting money into an unstable market."
},

{
    question: "What is the meaning of \"Yield\"?",
    options: ["Refuse to give way", "Increase resistance", "Produce or provide a result", "Destroy an opportunity"],
    answer: 2,
    explanation: "Yield can mean to produce or provide a result, amount, or benefit.<br><br><strong>Example:</strong> The new farming method yielded a much larger crop."
},

{
    question: "What is the meaning of \"Zealous\"?",
    options: ["Uninterested and passive", "Careless and unreliable", "Unable to make decisions", "Extremely enthusiastic and devoted"],
    answer: 3,
    explanation: "Zealous means extremely enthusiastic, passionate, or devoted to a cause or activity.<br><br><strong>Example:</strong> The zealous volunteers worked tirelessly to support the campaign."
},

{
    question: "What is the meaning of \"Assert\"?",
    options: ["State something confidently", "Withdraw a statement", "Avoid expressing an opinion", "Ask for permission"],
    answer: 0,
    explanation: "Assert means to state or declare something confidently and firmly.<br><br><strong>Example:</strong> The lawyer asserted that the evidence was insufficient."
},

{
    question: "What is the meaning of \"Bolster\"?",
    options: ["Weaken significantly", "Support or strengthen", "Hide completely", "Delay unnecessarily"],
    answer: 1,
    explanation: "Bolster means to support, strengthen, or improve something.<br><br><strong>Example:</strong> The new investment will bolster the company's financial position."
},

{
    question: "What is the meaning of \"Conventional\"?",
    options: ["Completely experimental", "Extremely unusual", "Based on traditional or commonly accepted methods", "Impossible to predict"],
    answer: 2,
    explanation: "Conventional means traditional or based on commonly accepted ideas, methods, or practices.<br><br><strong>Example:</strong> The company chose a conventional approach to solve the problem."
},

{
    question: "What is the meaning of \"Discreet\"?",
    options: ["Very loud and attention-seeking", "Publicly announced", "Careless with private information", "Careful to avoid attracting attention"],
    answer: 3,
    explanation: "Discreet means careful and tactful, especially in order to avoid attracting attention or revealing private information.<br><br><strong>Example:</strong> The assistant was discreet when handling the client's confidential documents."
},

{
    question: "What is the meaning of \"Endorse\"?",
    options: ["Publicly support or approve", "Strongly oppose", "Ignore completely", "Question repeatedly"],
    answer: 0,
    explanation: "Endorse means to publicly or officially support, approve, or recommend something.<br><br><strong>Example:</strong> Several respected experts endorsed the new education policy."
},

{
    question: "What is the meaning of \"Impede\"?",
    options: ["Accelerate progress", "Delay or obstruct progress", "Guarantee success", "Improve efficiency"],
    answer: 1,
    explanation: "Impede means to delay, obstruct, or make progress more difficult.<br><br><strong>Example:</strong> Bureaucratic delays can impede economic development."
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