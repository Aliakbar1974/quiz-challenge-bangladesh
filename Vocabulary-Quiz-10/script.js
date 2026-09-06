// ==========================================
// ENGLISH VOCABULARY QUIZ 10
// Web Quiz Engine - Version 1.2
// 30 Questions + 15 Second Timer
// ==========================================

// ==========================================
// FACEBOOK POST URL
// ==========================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122111748183435742&set=a.122102731923435742";


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


// ==========================================
// QUIZ DATA - VOCABULARY 10
// ==========================================

const quizData = [

  {
    id: "VOC271",
    question: "What does 'Pensive' mean?",
    options: [
        "Deeply thoughtful or reflective",
        "Very angry and aggressive",
        "Extremely careless",
        "Full of physical energy"
    ],
    answer: 0,
    explanation: "Pensive means being deeply thoughtful, often with a slightly sad or serious mood.",
    example: "She looked pensive while thinking about her future."
  },

  {
    id: "VOC272",
    question: "What does 'Perilous' mean?",
    options: [
        "Safe and comfortable",
        "Dangerous or risky",
        "Easy and simple",
        "Pleasant and enjoyable"
    ],
    answer: 1,
    explanation: "Perilous means dangerous or involving serious risk or danger.",
    example: "The climbers began their perilous journey up the mountain."
  },

  {
    id: "VOC273",
    question: "What does 'Perpetual' mean?",
    options: [
        "Temporary",
        "Occasional",
        "Continuing forever or for a very long time",
        "Sudden and unexpected"
    ],
    answer: 2,
    explanation: "Perpetual means continuing indefinitely, without ending, or occurring repeatedly.",
    example: "The machine requires perpetual maintenance."
  },

  {
    id: "VOC274",
    question: "What does 'Persuade' mean?",
    options: [
        "To confuse someone",
        "To punish someone",
        "To avoid someone",
        "To convince someone to do or believe something"
    ],
    answer: 3,
    explanation: "Persuade means to convince someone to do something or accept an idea.",
    example: "She persuaded her brother to apply for the job."
  },

  {
    id: "VOC275",
    question: "What does 'Pessimistic' mean?",
    options: [
        "Expecting bad results or having a negative outlook",
        "Always hopeful and positive",
        "Extremely curious",
        "Willing to take risks"
    ],
    answer: 0,
    explanation: "Pessimistic describes someone who expects negative results or tends to see the worst side of things.",
    example: "He is pessimistic about the company's future."
  },

  {
    id: "VOC276",
    question: "What does 'Placate' mean?",
    options: [
        "To make someone angry",
        "To calm or satisfy someone who is angry",
        "To criticize someone publicly",
        "To ignore a problem"
    ],
    answer: 1,
    explanation: "Placate means to calm someone who is angry or upset by satisfying their demands or concerns.",
    example: "The manager tried to placate the angry customer."
  },

  {
    id: "VOC277",
    question: "What does 'Plea' mean?",
    options: [
        "A celebration",
        "A command",
        "A serious request or appeal",
        "A formal award"
    ],
    answer: 2,
    explanation: "Plea means a serious and emotional request for something or for help.",
    example: "The victim made a plea for justice."
  },

  {
    id: "VOC278",
    question: "What does 'Plump' mean?",
    options: [
        "Very thin",
        "Extremely tall",
        "Weak and sickly",
        "Slightly fat or pleasantly rounded"
    ],
    answer: 3,
    explanation: "Plump means having a pleasantly rounded or somewhat fat body shape.",
    example: "The farmer raised several plump chickens."
  },

  {
    id: "VOC279",
    question: "What does 'Ponder' mean?",
    options: [
        "To think about something carefully",
        "To forget something quickly",
        "To shout at someone",
        "To move very quickly"
    ],
    answer: 0,
    explanation: "Ponder means to think carefully and deeply about something.",
    example: "He sat quietly to ponder the difficult decision."
  },

  {
    id: "VOC280",
    question: "What does 'Abject' mean?",
    options: [
        "Extremely proud and confident",
        "Very bad, miserable, or hopeless",
        "Highly successful",
        "Beautiful and attractive"
    ],
    answer: 1,
    explanation: "Abject describes something extremely bad, miserable, or showing complete lack of pride or dignity.",
    example: "The refugees were living in abject poverty."
  },

  {
    id: "VOC281",
    question: "What does 'Acrid' mean?",
    options: [
        "Sweet and pleasant",
        "Soft and smooth",
        "Having a strong, unpleasant smell or taste",
        "Completely tasteless"
    ],
    answer: 2,
    explanation: "Acrid describes a strong and unpleasant smell or taste that can irritate the senses.",
    example: "An acrid smell filled the room after the fire."
  },

  {
    id: "VOC282",
    question: "What does 'Amicable' mean?",
    options: [
        "Hostile and violent",
        "Secret and mysterious",
        "Extremely difficult",
        "Friendly and peaceful"
    ],
    answer: 3,
    explanation: "Amicable means friendly, peaceful, and without hostility or conflict.",
    example: "The two countries reached an amicable agreement."
  },

  {
    id: "VOC283",
    question: "What does 'Arraign' mean?",
    options: [
        "To bring someone before a court to answer a criminal charge",
        "To praise someone publicly",
        "To release someone from prison",
        "To appoint someone to a position"
    ],
    answer: 0,
    explanation: "Arraign means to officially call someone before a court to answer a criminal charge.",
    example: "The accused was arraigned before the court."
  },

  {
    id: "VOC284",
    question: "What does 'Audacious' mean?",
    options: [
        "Very shy and timid",
        "Bold and willing to take risks",
        "Extremely careless",
        "Quiet and obedient"
    ],
    answer: 1,
    explanation: "Audacious means bold, daring, and willing to take risks, sometimes in a shocking way.",
    example: "The audacious plan surprised everyone in the meeting."
  },

  {
    id: "VOC285",
    question: "What does 'Beneficiary' mean?",
    options: [
        "A person who causes a problem",
        "A person who gives a donation",
        "A person who receives a benefit or advantage",
        "A person who investigates a crime"
    ],
    answer: 2,
    explanation: "A beneficiary is a person or organization that receives a benefit, especially from a will, insurance policy, or trust.",
    example: "She was the main beneficiary of her father's will."
  },

  {
    id: "VOC286",
    question: "What does 'Callous' mean?",
    options: [
        "Kind and compassionate",
        "Highly intelligent",
        "Very nervous",
        "Showing no concern for the feelings of others"
    ],
    answer: 3,
    explanation: "Callous means emotionally insensitive and showing little concern for other people's feelings or suffering.",
    example: "His callous remarks hurt the feelings of his colleagues."
  },

  {
    id: "VOC287",
    question: "What does 'Conscientious' mean?",
    options: [
        "Careful, responsible, and attentive to duty",
        "Lazy and careless",
        "Dishonest and unreliable",
        "Easily distracted"
    ],
    answer: 0,
    explanation: "Conscientious means careful, responsible, and committed to doing one's duties properly.",
    example: "She is a conscientious employee who never misses a deadline."
  },

  {
    id: "VOC288",
    question: "What does 'Contaminate' mean?",
    options: [
        "To clean completely",
        "To make something impure or polluted",
        "To protect something",
        "To improve the quality of something"
    ],
    answer: 1,
    explanation: "Contaminate means to make something dirty, polluted, or harmful by adding unwanted substances.",
    example: "Chemicals can contaminate the drinking water."
  },

  {
    id: "VOC289",
    question: "What does 'Contraction' mean?",
    options: [
        "A large expansion",
        "A complete disappearance",
        "A reduction in size, amount, or length",
        "A sudden celebration"
    ],
    answer: 2,
    explanation: "Contraction means the process of becoming smaller or reducing in size, amount, or extent.",
    example: "The economy experienced a contraction last year."
  },

  {
    id: "VOC290",
    question: "What does 'Cryptic' mean?",
    options: [
        "Very obvious",
        "Easy to understand",
        "Simple and direct",
        "Mysterious and difficult to understand"
    ],
    answer: 3,
    explanation: "Cryptic means mysterious, puzzling, or difficult to understand.",
    example: "He gave me a cryptic message before leaving."
  },

  {
    id: "VOC291",
    question: "What does 'Decrepit' mean?",
    options: [
        "Old and in poor condition",
        "New and modern",
        "Strong and powerful",
        "Clean and attractive"
    ],
    answer: 0,
    explanation: "Decrepit describes something old, worn out, and in very poor condition.",
    example: "They lived in a decrepit old house."
  },

  {
    id: "VOC292",
    question: "What does 'Deprecate' mean?",
    options: [
        "To strongly support something",
        "To express disapproval of something",
        "To celebrate something",
        "To discover something"
    ],
    answer: 1,
    explanation: "Deprecate means to express strong disapproval of something or to criticize it.",
    example: "The teacher deprecated the use of dishonest methods."
  },

  {
    id: "VOC293",
    question: "What does 'Diffidence' mean?",
    options: [
        "Great confidence",
        "Strong determination",
        "Shyness or lack of self-confidence",
        "Extreme anger"
    ],
    answer: 2,
    explanation: "Diffidence means shyness or a lack of confidence in one's own abilities.",
    example: "His diffidence prevented him from speaking at the meeting."
  },

  {
    id: "VOC294",
    question: "What does 'Disseminate' mean?",
    options: [
        "To hide information",
        "To destroy information",
        "To collect information secretly",
        "To spread information widely"
    ],
    answer: 3,
    explanation: "Disseminate means to spread information, ideas, or knowledge widely.",
    example: "The organization disseminated health information to rural communities."
  },

  {
    id: "VOC295",
    question: "What does 'Eloquence' mean?",
    options: [
        "The ability to speak or write clearly and effectively",
        "The inability to communicate",
        "A fear of public speaking",
        "A tendency to remain silent"
    ],
    answer: 0,
    explanation: "Eloquence means the ability to express ideas clearly, effectively, and persuasively.",
    example: "The speaker impressed the audience with her eloquence."
  },

  {
    id: "VOC296",
    question: "What does 'Elucidate' mean?",
    options: [
        "To make something more confusing",
        "To explain or make something clear",
        "To hide the truth",
        "To reject an idea"
    ],
    answer: 1,
    explanation: "Elucidate means to explain something clearly and make it easier to understand.",
    example: "The professor used an example to elucidate the difficult concept."
  },

  {
    id: "VOC297",
    question: "What does 'Enervate' mean?",
    options: [
        "To strengthen greatly",
        "To encourage someone",
        "To weaken or drain energy",
        "To surprise someone"
    ],
    answer: 2,
    explanation: "Enervate means to weaken someone or reduce their energy and strength.",
    example: "The intense heat enervated the workers."
  },

  {
    id: "VOC298",
    question: "What does 'Equivocal' mean?",
    options: [
        "Absolutely certain",
        "Very honest and direct",
        "Easy to understand",
        "Open to more than one interpretation"
    ],
    answer: 3,
    explanation: "Equivocal means ambiguous or unclear because it can be understood in more than one way.",
    example: "His equivocal answer left everyone confused."
  },

  {
    id: "VOC299",
    question: "What does 'Erudite' mean?",
    options: [
        "Highly educated and knowledgeable",
        "Uneducated and inexperienced",
        "Careless and irresponsible",
        "Extremely shy"
    ],
    answer: 0,
    explanation: "Erudite means highly educated and possessing extensive knowledge, especially from study.",
    example: "The erudite professor wrote several books on history."
  },

  {
    id: "VOC300",
    question: "What does 'Exacting' mean?",
    options: [
        "Easy to satisfy",
        "Demanding and requiring great care or effort",
        "Careless and relaxed",
        "Unimportant and simple"
    ],
    answer: 1,
    explanation: "Exacting means demanding a great deal of care, effort, accuracy, or attention.",
    example: "The job requires exacting attention to detail."
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

    clearInterval(timer);

    timeLeft = 15;

    const main = document.querySelector("main");

    const q = quizData[currentQuestion];

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

    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    if (!buttons.length || !feedback) return;

    buttons.forEach(button => {
        button.disabled = true;
    });

    buttons[q.answer].classList.add("correct");

    feedback.innerHTML = `
        <div class="wrong-message">
            ⏰ Time is over!
        </div>

        <p>
            Right Answer:
            <strong>${q.options[q.answer]}</strong>
        </p>

        <p class="example-text">
            <strong>Example:</strong> ${q.example || ""}
        </p>

        <button onclick="nextQuestion()">
            Next Question →
        </button>
    `;
}


// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(selected) {

    clearInterval(timer);

    const q = quizData[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("feedback");

    buttons.forEach(button => {
        button.disabled = true;
    });

    // ======================================
    // CORRECT ANSWER
    // ======================================

    if (selected === q.answer) {

        score++;

        playSound("correct");

        buttons[selected].classList.add("correct");

        feedback.innerHTML = `
            <div class="correct-message">
                ✔ Right Answer!
            </div>

            <p class="example-text">
                <strong>Example:</strong> ${q.example || ""}
            </p>

            <button onclick="nextQuestion()">
                Next Question →
            </button>
        `;

    }

    // ======================================
    // WRONG ANSWER
    // ======================================

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

            <p class="example-text">
                <strong>Example:</strong> ${q.example || ""}
            </p>

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


// ==========================================
// RESTART QUIZ
// ==========================================

function restartQuiz() {

    playSound("start");

    setTimeout(function () {
        location.reload();
    }, 500);
}


// ==========================================
// RETURN TO FACEBOOK
// ==========================================

function returnToFacebook() {

    if (
        FACEBOOK_POST_URL &&
        FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE"
    ) {

        window.location.href = FACEBOOK_POST_URL;

    } else {

        alert(
            "Facebook post link has not been added yet.\n\n" +
            "Please add your Facebook post URL in FACEBOOK_POST_URL."
        );
    }
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

            <div class="social-message">

                <p>❤️ Enjoyed the Quiz?</p>

                <p>
                    👍 Like our Facebook Post
                </p>

                <p>
                    💬 Comment Your Score
                </p>

                <p>
                    🔄 Share with Your Friends
                </p>

                <p>
                    ❤️ Follow Our Page
                </p>

            </div>

            <button onclick="returnToFacebook()">
                🔵 RETURN TO FACEBOOK
            </button>

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