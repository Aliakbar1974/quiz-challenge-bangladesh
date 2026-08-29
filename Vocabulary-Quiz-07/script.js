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
    word: "Abhor",
    question: "What is the closest meaning of 'Abhor'?",
    options: [
      "To admire deeply",
      "To hate intensely",
      "To tolerate patiently",
      "To avoid temporarily"
    ],
    answer: 1,
    explanation: "'Abhor' means to hate or detest something very strongly."
  },

  {
    word: "Abruptly",
    question: "What is the closest meaning of 'Abruptly'?",
    options: [
      "Gradually and slowly",
      "In a cheerful manner",
      "With great care",
      "Suddenly and unexpectedly"
    ],
    answer: 3,
    explanation: "'Abruptly' means suddenly, unexpectedly, or in a sudden manner."
  },

  {
    word: "Admonish",
    question: "What is the closest meaning of 'Admonish'?",
    options: [
      "To warn or scold someone",
      "To praise someone publicly",
      "To invite someone formally",
      "To ignore someone's mistake"
    ],
    answer: 0,
    explanation: "'Admonish' means to warn, advise, or mildly scold someone because of their behavior."
  },

  {
    word: "Arduous",
    question: "What is the closest meaning of 'Arduous'?",
    options: [
      "Very easy",
      "Extremely expensive",
      "Very difficult and requiring great effort",
      "Pleasant and enjoyable"
    ],
    answer: 2,
    explanation: "'Arduous' describes something difficult, tiring, and requiring a lot of effort."
  },

  {
    word: "Assuage",
    question: "What is the closest meaning of 'Assuage'?",
    options: [
      "To increase pain",
      "To reduce or relieve something unpleasant",
      "To create confusion",
      "To refuse an offer"
    ],
    answer: 1,
    explanation: "'Assuage' means to make something unpleasant, such as pain, fear, or worry, less severe."
  },

  {
    word: "Avarice",
    question: "What is the closest meaning of 'Avarice'?",
    options: [
      "Extreme greed for wealth",
      "Generosity toward others",
      "Fear of failure",
      "Love of adventure"
    ],
    answer: 0,
    explanation: "'Avarice' means an extreme desire for wealth or material possessions."
  },

  {
    word: "Blandishment",
    question: "What is the closest meaning of 'Blandishment'?",
    options: [
      "A harsh punishment",
      "A serious accusation",
      "Flattering or persuasive words",
      "A difficult challenge"
    ],
    answer: 2,
    explanation: "'Blandishment' means flattering or persuasive speech used to influence someone."
  },

  {
    word: "Blithe",
    question: "What is the closest meaning of 'Blithe'?",
    options: [
      "Angry and aggressive",
      "Extremely cautious",
      "Sad and disappointed",
      "Carefree and cheerful"
    ],
    answer: 3,
    explanation: "'Blithe' means cheerful, carefree, or showing little concern."
  },

  {
    word: "Castigate",
    question: "What is the closest meaning of 'Castigate'?",
    options: [
      "To criticize or punish severely",
      "To reward generously",
      "To encourage someone",
      "To forgive completely"
    ],
    answer: 0,
    explanation: "'Castigate' means to criticize or punish someone severely for their actions."
  },

  {
    word: "Cataclysm",
    question: "What is the closest meaning of 'Cataclysm'?",
    options: [
      "A peaceful agreement",
      "A small inconvenience",
      "A successful achievement",
      "A sudden and violent disaster"
    ],
    answer: 3,
    explanation: "'Cataclysm' means a large-scale and violent event that causes great destruction or change."
  },

  {
    word: "Clamorous",
    question: "What is the closest meaning of 'Clamorous'?",
    options: [
      "Extremely quiet",
      "Full of loud and confused noise",
      "Very beautiful",
      "Completely empty"
    ],
    answer: 1,
    explanation: "'Clamorous' means making or involving a loud, noisy, and often confused sound."
  },

  {
    word: "Clemency",
    question: "What is the closest meaning of 'Clemency'?",
    options: [
      "Strict punishment",
      "Strong criticism",
      "Mercy or leniency",
      "Public disagreement"
    ],
    answer: 2,
    explanation: "'Clemency' means mercy or leniency, especially toward someone who has been punished or convicted."
  },

  {
    word: "Coerce",
    question: "What is the closest meaning of 'Coerce'?",
    options: [
      "To force someone to do something",
      "To persuade through kindness",
      "To congratulate someone",
      "To protect someone"
    ],
    answer: 0,
    explanation: "'Coerce' means to force or pressure someone to do something against their will."
  },

  {
    word: "Cogent",
    question: "What is the closest meaning of 'Cogent'?",
    options: [
      "Confusing and unclear",
      "Emotionally disturbing",
      "Unimportant and trivial",
      "Clear, logical, and convincing"
    ],
    answer: 3,
    explanation: "'Cogent' means clear, logical, and convincing, especially when describing an argument."
  },

  {
    word: "Concoct",
    question: "What is the closest meaning of 'Concoct'?",
    options: [
      "To destroy completely",
      "To invent or prepare something",
      "To copy exactly",
      "To forget deliberately"
    ],
    answer: 1,
    explanation: "'Concoct' means to create or prepare something, especially by combining different elements."
  },

  {
    word: "Concord",
    question: "What is the closest meaning of 'Concord'?",
    options: [
      "Agreement or harmony",
      "Conflict and disagreement",
      "Fear and uncertainty",
      "Sudden destruction"
    ],
    answer: 0,
    explanation: "'Concord' means agreement, harmony, or peaceful relations between people or groups."
  },

  {
    word: "Concurrence",
    question: "What is the closest meaning of 'Concurrence'?",
    options: [
      "Strong opposition",
      "Complete silence",
      "Agreement or approval",
      "Unexpected failure"
    ],
    answer: 2,
    explanation: "'Concurrence' means agreement, especially with an opinion, decision, or action."
  },

  {
    word: "Condone",
    question: "What is the closest meaning of 'Condone'?",
    options: [
      "To punish severely",
      "To forgive or accept something wrong",
      "To investigate carefully",
      "To explain in detail"
    ],
    answer: 1,
    explanation: "'Condone' means to accept or overlook behavior that is considered wrong or unacceptable."
  },

  {
    word: "Confiscate",
    question: "What is the closest meaning of 'Confiscate'?",
    options: [
      "To give something as a gift",
      "To repair something damaged",
      "To sell something cheaply",
      "To take something away officially"
    ],
    answer: 3,
    explanation: "'Confiscate' means to officially take something away, usually because it is illegal or against the rules."
  },

  {
    word: "Congeal",
    question: "What is the closest meaning of 'Congeal'?",
    options: [
      "To become solid or semi-solid",
      "To become extremely hot",
      "To disappear quickly",
      "To become transparent"
    ],
    answer: 0,
    explanation: "'Congeal' means to become thick or solid, especially after cooling."
  },

  {
    word: "Congenial",
    question: "What is the closest meaning of 'Congenial'?",
    options: [
      "Unfriendly and hostile",
      "Pleasant and friendly",
      "Difficult to understand",
      "Extremely expensive"
    ],
    answer: 1,
    explanation: "'Congenial' means pleasant, friendly, and suitable to one's nature or preferences."
  },

  {
    word: "Congestion",
    question: "What is the closest meaning of 'Congestion'?",
    options: [
      "A shortage of information",
      "A peaceful situation",
      "An overcrowded or blocked condition",
      "A sudden improvement"
    ],
    answer: 2,
    explanation: "'Congestion' means a state of being overcrowded or blocked, such as heavy traffic on a road."
  },

  {
    word: "Conjecture",
    question: "What is the closest meaning of 'Conjecture'?",
    options: [
      "A proven scientific fact",
      "A formal agreement",
      "A serious punishment",
      "An educated guess or speculation"
    ],
    answer: 3,
    explanation: "'Conjecture' means an opinion or conclusion based on incomplete information rather than definite evidence."
  },

  {
    word: "Conventional",
    question: "What is the closest meaning of 'Conventional'?",
    options: [
      "Traditional or commonly accepted",
      "Completely unusual",
      "Extremely dangerous",
      "Recently invented"
    ],
    answer: 0,
    explanation: "'Conventional' means traditional, usual, or generally accepted by society."
  },

  {
    word: "Credulous",
    question: "What is the closest meaning of 'Credulous'?",
    options: [
      "Difficult to convince",
      "Highly experienced",
      "Quick to believe things too easily",
      "Extremely suspicious"
    ],
    answer: 2,
    explanation: "'Credulous' describes someone who is too ready to believe what other people say."
  },

  {
    word: "Creed",
    question: "What is the closest meaning of 'Creed'?",
    options: [
      "A financial document",
      "A system of beliefs or principles",
      "A legal punishment",
      "A physical object"
    ],
    answer: 1,
    explanation: "'Creed' means a set of beliefs, principles, or religious ideas that someone follows."
  },

  {
    word: "Culpable",
    question: "What is the closest meaning of 'Culpable'?",
    options: [
      "Responsible or deserving blame",
      "Innocent of wrongdoing",
      "Unable to understand",
      "Willing to forgive"
    ],
    answer: 0,
    explanation: "'Culpable' means responsible for a wrongdoing and therefore deserving blame."
  },

  {
    word: "Decrepit",
    question: "What is the closest meaning of 'Decrepit'?",
    options: [
      "New and modern",
      "Strong and healthy",
      "Expensive and luxurious",
      "Old, worn out, and in poor condition"
    ],
    answer: 3,
    explanation: "'Decrepit' describes something old, worn out, weak, or in very poor condition."
  },

  {
    word: "Deprecate",
    question: "What is the closest meaning of 'Deprecate'?",
    options: [
      "To strongly praise",
      "To express disapproval of something",
      "To increase the value of something",
      "To celebrate publicly"
    ],
    answer: 1,
    explanation: "'Deprecate' means to express disapproval of something or to criticize it."
  },

  {
    word: "Diffidence",
    question: "What is the closest meaning of 'Diffidence'?",
    options: [
      "Self-confidence",
      "Anger toward others",
      "Shyness or lack of confidence",
      "Strong determination"
    ],
    answer: 2,
    explanation: "'Diffidence' means modesty, shyness, or a lack of confidence in one's abilities."
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