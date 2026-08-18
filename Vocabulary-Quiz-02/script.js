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
        question: "What is the meaning of \"Alert\"?",
        options: ["Watchful", "Sleepy", "Angry", "Weak"],
        answer: 0,
        explanation: "Alert means watchful, attentive, or quick to notice something.<br><br><strong>Example:</strong> The security guard remained alert throughout the night."
    },
{
    question: "What is the meaning of \"Mend\"?",
    options: ["To break something", "To hide something", "To repair or fix something", "To replace something"],
    answer: 2,
    explanation: "Mend means to repair or fix something that is damaged or broken.<br><br><strong>Example:</strong> The tailor will mend the torn shirt before returning it to the customer."
},    
{
        question: "What is the meaning of \"Bitter\"?",
        options: ["Sweet", "Having a sharp, unpleasant taste", "Salty", "Soft"],
        answer: 1,
        explanation: "Bitter means having a sharp, unpleasant taste or feeling.<br><br><strong>Example:</strong> The medicine had a bitter taste."
    },
    {
        question: "What is the meaning of \"Ignore\"?",
        options: ["Notice", "Help", "Pay no attention to", "Follow"],
        answer: 2,
        explanation: "Ignore means to pay no attention to someone or something.<br><br><strong>Example:</strong> She decided to ignore the negative comments."
    },
    {
        question: "What is the meaning of \"Chore\"?",
        options: ["A difficult journey", "A celebration", "A reward", "A routine task or household duty"],
        answer: 3,
        explanation: "Chore means a routine task, especially a household task.<br><br><strong>Example:</strong> Washing the dishes is one of my daily chores."
    },
    {
        question: "What is the meaning of \"Beverage\"?",
        options: ["A drink", "Food", "Clothing", "Medicine"],
        answer: 0,
        explanation: "Beverage means any type of drink, especially one prepared for people to drink.<br><br><strong>Example:</strong> Water is the most common beverage served at the meeting."
    },
    {
        question: "What is the meaning of \"Applaud\"?",
        options: ["Criticize", "Clap to show approval", "Leave suddenly", "Whisper"],
        answer: 1,
        explanation: "Applaud means to clap your hands to show approval or appreciation.<br><br><strong>Example:</strong> The audience applauded the performer after the show."
    },
    {
        question: "What is the meaning of \"Compliment\"?",
        options: ["An insult", "A complaint", "A warning", "A polite expression of praise"],
        answer: 3,
        explanation: "Compliment means a polite expression of praise or admiration.<br><br><strong>Example:</strong> She received a compliment on her new dress."
    },
    {
        question: "What is the meaning of \"Appropriate\"?",
        options: ["Suitable or proper", "Expensive", "Dangerous", "Unusual"],
        answer: 0,
        explanation: "Appropriate means suitable or proper for a particular situation or purpose.<br><br><strong>Example:</strong> Please wear appropriate clothing for the interview."
    },
    {
        question: "What is the meaning of \"Accurate\"?",
        options: ["Fast", "Difficult", "Incomplete", "Correct and exact"],
        answer: 3,
        explanation: "Accurate means correct, exact, and free from mistakes.<br><br><strong>Example:</strong> The report contains accurate information about the company's sales."
    },
    {
        question: "What is the meaning of \"Agile\"?",
        options: ["Slow and weak", "Able to move quickly and easily", "Very large", "Unable to move"],
        answer: 1,
        explanation: "Agile means able to move quickly, easily, and efficiently.<br><br><strong>Example:</strong> The agile athlete quickly changed direction during the game."
    },
    {
        question: "What is the meaning of \"Ample\"?",
        options: ["Very small", "Almost empty", "More than enough", "Extremely expensive"],
        answer: 2,
        explanation: "Ample means more than enough; plentiful.<br><br><strong>Example:</strong> There is ample space for everyone in the conference room."
    },
    {
        question: "What is the meaning of \"Antique\"?",
        options: ["Modern", "Very expensive", "Broken", "Old and often valuable"],
        answer: 3,
        explanation: "Antique means something old, especially an object that is valuable because of its age.<br><br><strong>Example:</strong> The museum displayed an antique wooden chair."
    },
    {
        question: "What is the meaning of \"Audible\"?",
        options: ["Able to be heard", "Able to be seen", "Difficult to understand", "Completely silent"],
        answer: 0,
        explanation: "Audible means able to be heard.<br><br><strong>Example:</strong> Her voice was barely audible from the back of the room."
    },
    {
        question: "What is the meaning of \"Expand\"?",
        options: ["Become smaller", "Become larger", "Disappear", "Break apart"],
        answer: 1,
        explanation: "Expand means to become or make something larger or more extensive.<br><br><strong>Example:</strong> The company plans to expand its business into new markets."
    },
    {
        question: "What is the meaning of \"Output\"?",
        options: ["A workplace", "A problem", "A financial loss", "The amount produced"],
        answer: 3,
        explanation: "Output means the amount of something produced by a person, machine, or organization.<br><br><strong>Example:</strong> The factory increased its daily output by 15 percent."
    },
    {
        question: "What is the meaning of \"Reside\"?",
        options: ["Live in a particular place", "Travel frequently", "Work temporarily", "Leave a place"],
        answer: 0,
        explanation: "Reside means to live in a particular place.<br><br><strong>Example:</strong> She currently resides in London."
    },
    {
        question: "What is the meaning of \"Respond\"?",
        options: ["Refuse", "Reply or react", "Forget", "Hide"],
        answer: 1,
        explanation: "Respond means to reply or react to something that has been said, asked, or done.<br><br><strong>Example:</strong> Please respond to my email as soon as possible."
    },
    {
        question: "What is the meaning of \"Rotate\"?",
        options: ["Move in a circle around a central point", "Stop completely", "Move backward", "Become larger"],
        answer: 0,
        explanation: "Rotate means to turn or move around a central point or axis.<br><br><strong>Example:</strong> The Earth rotates on its axis once every 24 hours."
    },
    {
        question: "What is the meaning of \"Shift\"?",
        options: ["To destroy", "To measure", "To move or change", "To repair"],
        answer: 2,
        explanation: "Shift means to move or change from one position, place, or situation to another.<br><br><strong>Example:</strong> The company decided to shift its focus toward online sales."
    },
    {
        question: "What is the meaning of \"Sip\"?",
        options: ["Drink a small amount", "Eat quickly", "Pour something out", "Throw something"],
        answer: 0,
        explanation: "Sip means to drink something slowly in small amounts.<br><br><strong>Example:</strong> She took a sip of coffee before starting the meeting."
    },
    {
        question: "What is the meaning of \"Stack\"?",
        options: ["A single object", "A large room", "A type of machine", "A pile of things placed one on top of another"],
        answer: 3,
        explanation: "Stack means a pile of things placed one on top of another.<br><br><strong>Example:</strong> There was a stack of books on the desk."
    },
    {
        question: "What is the meaning of \"Scrape\"?",
        options: ["To polish something", "To remove or rub something using a rough edge", "To build something", "To wash something"],
        answer: 1,
        explanation: "Scrape means to remove something from a surface by rubbing or dragging a rough or sharp object over it.<br><br><strong>Example:</strong> He used a knife to scrape the paint from the wall."
    },
    {
        question: "What is the meaning of \"Scrub\"?",
        options: ["To cut into pieces", "To dry quickly", "To clean by rubbing hard", "To cover completely"],
        answer: 2,
        explanation: "Scrub means to clean something by rubbing it hard, usually with a brush or cloth.<br><br><strong>Example:</strong> Please scrub the floor before the guests arrive."
    },
    {
        question: "What is the meaning of \"Lively\"?",
        options: ["Quiet and boring", "Full of energy and enthusiasm", "Very dangerous", "Extremely old"],
        answer: 1,
        explanation: "Lively means full of energy, activity, and enthusiasm.<br><br><strong>Example:</strong> The restaurant has a lively atmosphere in the evening."
    },
    {
        question: "What is the meaning of \"Litter\"?",
        options: ["Valuable objects", "Furniture", "Food supplies", "Waste or rubbish left in public places"],
        answer: 3,
        explanation: "Litter means waste or rubbish that people leave in public places.<br><br><strong>Example:</strong> People should not throw litter on the streets."
    },
    {
        question: "What is the meaning of \"Massive\"?",
        options: ["Very small", "Extremely large", "Very light", "Very cheap"],
        answer: 1,
        explanation: "Massive means extremely large or heavy.<br><br><strong>Example:</strong> The company made a massive investment in the new factory."
    },
    {
        question: "What is the meaning of \"Mutual\"?",
        options: ["Belonging to or shared by two or more people", "Belonging to one person", "Completely different", "Impossible"],
        answer: 0,
        explanation: "Mutual means shared by two or more people or groups.<br><br><strong>Example:</strong> They reached an agreement based on mutual respect."
    },
    {
        question: "What is the meaning of \"Prior\"?",
        options: ["Coming after something", "Very expensive", "Coming before something in time or order", "Completely unrelated"],
        answer: 2,
        explanation: "Prior means existing or happening before something else.<br><br><strong>Example:</strong> You need prior approval before starting the project."
    },
    {
        question: "What is the meaning of \"Reliable\"?",
        options: ["Likely to fail", "Very expensive", "Difficult to use", "Able to be trusted or depended on"],
        answer: 3,
        explanation: "Reliable means able to be trusted or depended on to work properly or behave as expected.<br><br><strong>Example:</strong> We need a reliable supplier for our business."
    },
    {
        question: "What is the meaning of \"Specific\"?",
        options: ["Clearly defined or identified", "General and unclear", "Very large", "Completely optional"],
        answer: 0,
        explanation: "Specific means clearly defined, identified, or stated.<br><br><strong>Example:</strong> Please provide specific details about the problem."
    },
    {
        question: "What is the meaning of \"Substitute\"?",
        options: ["A permanent solution", "A replacement for something or someone", "A mistake", "A measurement"],
        answer: 1,
        explanation: "Substitute means a person or thing used instead of another person or thing.<br><br><strong>Example:</strong> We used a substitute material because the original was unavailable."
    },
    {
        question: "What is the meaning of \"Trend\"?",
        options: ["A sudden accident", "A fixed rule", "A general direction or pattern of change", "A financial loss"],
        answer: 2,
        explanation: "Trend means a general direction in which something is developing or changing.<br><br><strong>Example:</strong> Online shopping is a growing trend around the world."
    },
    {
        question: "What is the meaning of \"Vendor\"?",
        options: ["A customer", "A manager", "A government official", "A person or company that sells goods or services"],
        answer: 3,
        explanation: "Vendor means a person or company that sells goods or services.<br><br><strong>Example:</strong> The company selected a new vendor to supply packaging materials."
    },
    {
        question: "What is the meaning of \"Verify\"?",
        options: ["To check that something is true or accurate", "To hide information", "To change something", "To ignore something"],
        answer: 0,
        explanation: "Verify means to check or confirm that something is true, accurate, or correct.<br><br><strong>Example:</strong> Please verify the information before submitting the report."
    },
    {
        question: "What is the meaning of \"Variety\"?",
        options: ["A single type", "A range of different types of something", "A fixed amount", "A serious problem"],
        answer: 1,
        explanation: "Variety means a range of different things or types of something.<br><br><strong>Example:</strong> The store offers a wide variety of products."
    },
    {
        question: "What is the meaning of \"Variation\"?",
        options: ["A complete failure", "A fixed condition", "A difference or change in something", "A written agreement"],
        answer: 2,
        explanation: "Variation means a difference or change in the form, amount, or condition of something.<br><br><strong>Example:</strong> There is some variation in the quality of the products."
    },
    {
        question: "What is the meaning of \"Vacant\"?",
        options: ["Full of people", "Not occupied or being used", "Very expensive", "Recently repaired"],
        answer: 1,
        explanation: "Vacant means empty or not being used or occupied.<br><br><strong>Example:</strong> The company has a vacant office on the second floor."
    },
    {
        question: "What is the meaning of \"Vanish\"?",
        options: ["Become stronger", "Move closer", "Become larger", "Become impossible to see or find"],
        answer: 3,
        explanation: "Vanish means to disappear suddenly or completely.<br><br><strong>Example:</strong> The clouds vanished as the weather improved."
    },
    {
        question: "What is the meaning of \"Waxy\"?",
        options: ["Made of or resembling wax", "Made of metal", "Very rough", "Extremely dry"],
        answer: 0,
        explanation: "Waxy means resembling wax, especially in appearance or texture.<br><br><strong>Example:</strong> The leaves have a waxy surface that helps prevent water loss."
    },
    {
        question: "What is the meaning of \"Wither\"?",
        options: ["Become fresh and healthy", "Become dry, weak, or dead", "Grow rapidly", "Move quickly"],
        answer: 1,
        explanation: "Wither means to become dry, weak, or dead, especially because of a lack of water.<br><br><strong>Example:</strong> The flowers began to wither without enough water."
    },
    {
        question: "What is the meaning of \"Wrath\"?",
        options: ["Happiness", "Fear", "Confusion", "Extreme anger"],
        answer: 3,
        explanation: "Wrath means extreme anger or fury.<br><br><strong>Example:</strong> The decision caused the wrath of many customers."
    },
    {
        question: "What is the meaning of \"Convert\"?",
        options: ["To change something into a different form", "To destroy something", "To hide something", "To measure something"],
        answer: 0,
        explanation: "Convert means to change something from one form, use, or system into another.<br><br><strong>Example:</strong> The software can convert PDF files into Word documents."
    },
    {
        question: "What is the meaning of \"Decline\"?",
        options: ["To increase rapidly", "To celebrate", "To become smaller, weaker, or less", "To repair"],
        answer: 2,
        explanation: "Decline means to become smaller, weaker, or less, or to refuse something.<br><br><strong>Example:</strong> Sales began to decline during the final quarter."
    },
    {
        question: "What is the meaning of \"Detect\"?",
        options: ["To create something", "To discover or notice something", "To remove something", "To predict the future"],
        answer: 1,
        explanation: "Detect means to discover or notice something, especially something that is not easy to see or find.<br><br><strong>Example:</strong> The machine can detect small defects in the products."
    },
    {
        question: "What is the meaning of \"Durable\"?",
        options: ["Easily broken", "Very expensive", "Difficult to carry", "Able to last for a long time"],
        answer: 3,
        explanation: "Durable means strong and able to last for a long time without being damaged.<br><br><strong>Example:</strong> These shoes are made from durable materials."
    },
    {
        question: "What is the meaning of \"Ingredients\"?",
        options: ["The parts or substances used to make something", "Finished products", "Tools used in a factory", "Written instructions"],
        answer: 0,
        explanation: "Ingredients are the foods or substances used to make a particular dish, product, or mixture.<br><br><strong>Example:</strong> Check the ingredients before preparing the recipe."
    },
    {
        question: "What is the meaning of \"Inhabit\"?",
        options: ["To leave a place", "To build a house", "To live in a particular place", "To travel frequently"],
        answer: 2,
        explanation: "Inhabit means to live in a particular place or area.<br><br><strong>Example:</strong> Many species of birds inhabit this forest."
    },
    {
        question: "What is the meaning of \"Initiate\"?",
        options: ["To begin or start something", "To finish something", "To prevent something", "To copy something"],
        answer: 0,
        explanation: "Initiate means to cause something to begin or to start a process.<br><br><strong>Example:</strong> The manager initiated a new training program for employees."
    },
    {
        question: "What is the meaning of \"Modify\"?",
        options: ["To completely destroy something", "To change something slightly", "To ignore something", "To purchase something"],
        answer: 1,
        explanation: "Modify means to change something slightly, especially in order to improve it or make it more suitable.<br><br><strong>Example:</strong> We need to modify the design before production begins."
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