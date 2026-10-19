// ==========================================
// QUIZ CHALLENGE BANGLADESH
// Web Quiz Engine - Version 1.1
// 50 Questions + 15 Second Timer
// ==========================================

// ==========================================
// SOUND ENGINE
// ==========================================

const sounds = {
    start: new Audio("../Sounds/Start.wav"),
    correct: new Audio("../Sounds/Correct.wav"),
    wrong: new Audio("../Sounds/Wrong.wav"),
    tryAgain: new Audio("../Sounds/TryAgain.wav"),
    success: new Audio("../Sounds/Success.wav"),
    victory: new Audio("../Sounds/Victory.wav"),
    complete: new Audio("../Sounds/Complete.wav")
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
        options: ["Watchful", "Weak", "Sleepy", "Angry"],
        answer: 0,
        explanation: "Alert means watchful, attentive, or quick to notice something.<br><br><strong>Example:</strong> The security guard remained alert throughout the night."
    },
{
    question: "What is the meaning of \"Mend\"?",
    options: ["To replace something", "To repair or fix something", "To hide something", "To break something"],
    answer: 1,
    explanation: "Mend means to repair or fix something that is damaged or broken.<br><br><strong>Example:</strong> The tailor will mend the torn shirt before returning it to the customer."
},    
{
        question: "What is the meaning of \"Bitter\"?",
        options: ["Having a sharp, unpleasant taste", "Salty", "Soft", "Sweet"],
        answer: 0,
        explanation: "Bitter means having a sharp, unpleasant taste or feeling.<br><br><strong>Example:</strong> The medicine had a bitter taste."
    },
    {
        question: "What is the meaning of \"Ignore\"?",
        options: ["Help", "Notice", "Pay no attention to", "Follow"],
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
        options: ["Food", "Medicine", "A drink", "Clothing"],
        answer: 2,
        explanation: "Beverage means any type of drink, especially one prepared for people to drink.<br><br><strong>Example:</strong> Water is the most common beverage served at the meeting."
    },
    {
        question: "What is the meaning of \"Applaud\"?",
        options: ["Clap to show approval", "Whisper", "Criticize", "Leave suddenly"],
        answer: 0,
        explanation: "Applaud means to clap your hands to show approval or appreciation.<br><br><strong>Example:</strong> The audience applauded the performer after the show."
    },
    {
        question: "What is the meaning of \"Compliment\"?",
        options: ["A warning", "A polite expression of praise", "A complaint", "An insult"],
        answer: 1,
        explanation: "Compliment means a polite expression of praise or admiration.<br><br><strong>Example:</strong> She received a compliment on her new dress."
    },
    {
        question: "What is the meaning of \"Appropriate\"?",
        options: ["Suitable or proper", "Dangerous", "Unusual", "Expensive"],
        answer: 0,
        explanation: "Appropriate means suitable or proper for a particular situation or purpose.<br><br><strong>Example:</strong> Please wear appropriate clothing for the interview."
    },
    {
        question: "What is the meaning of \"Accurate\"?",
        options: ["Difficult", "Fast", "Correct and exact", "Incomplete"],
        answer: 2,
        explanation: "Accurate means correct, exact, and free from mistakes.<br><br><strong>Example:</strong> The report contains accurate information about the company's sales."
    },
    {
        question: "What is the meaning of \"Agile\"?",
        options: ["Slow and weak", "Very large", "Unable to move", "Able to move quickly and easily"],
        answer: 3,
        explanation: "Agile means able to move quickly, easily, and efficiently.<br><br><strong>Example:</strong> The agile athlete quickly changed direction during the game."
    },
    {
        question: "What is the meaning of \"Ample\"?",
        options: ["More than enough", "Very small", "Extremely expensive", "Almost empty"],
        answer: 0,
        explanation: "Ample means more than enough; plentiful.<br><br><strong>Example:</strong> There is ample space for everyone in the conference room."
    },
    {
        question: "What is the meaning of \"Antique\"?",
        options: ["Broken", "Old and often valuable", "Modern", "Very expensive"],
        answer: 1,
        explanation: "Antique means something old, especially an object that is valuable because of its age.<br><br><strong>Example:</strong> The museum displayed an antique wooden chair."
    },
    {
        question: "What is the meaning of \"Audible\"?",
        options: ["Completely silent", "Difficult to understand", "Able to be heard", "Able to be seen"],
        answer: 2,
        explanation: "Audible means able to be heard.<br><br><strong>Example:</strong> Her voice was barely audible from the back of the room."
    },
    {
        question: "What is the meaning of \"Expand\"?",
        options: ["Disappear", "Break apart", "Become smaller", "Become larger"],
        answer: 3,
        explanation: "Expand means to become or make something larger or more extensive.<br><br><strong>Example:</strong> The company plans to expand its business into new markets."
    },
    {
        question: "What is the meaning of \"Output\"?",
        options: ["The amount produced", "A problem", "A workplace", "A financial loss"],
        answer: 0,
        explanation: "Output means the amount of something produced by a person, machine, or organization.<br><br><strong>Example:</strong> The factory increased its daily output by 15 percent."
    },
    {
        question: "What is the meaning of \"Reside\"?",
        options: ["Travel frequently", "Live in a particular place", "Work temporarily", "Leave a place"],
        answer: 1,
        explanation: "Reside means to live in a particular place.<br><br><strong>Example:</strong> She currently resides in London."
    },
    {
        question: "What is the meaning of \"Respond\"?",
        options: ["Refuse", "Hide", "Reply or react", "Forget"],
        answer: 2,
        explanation: "Respond means to reply or react to something that has been said, asked, or done.<br><br><strong>Example:</strong> Please respond to my email as soon as possible."
    },
    {
        question: "What is the meaning of \"Rotate\"?",
        options: ["Move in a circle around a central point", "Become larger", "Stop completely", "Move backward"],
        answer: 0,
        explanation: "Rotate means to turn or move around a central point or axis.<br><br><strong>Example:</strong> The Earth rotates on its axis once every 24 hours."
    },
    {
        question: "What is the meaning of \"Shift\"?",
        options: ["To repair", "To move or change", "To measure", "To destroy"],
        answer: 1,
        explanation: "Shift means to move or change from one position, place, or situation to another.<br><br><strong>Example:</strong> The company decided to shift its focus toward online sales."
    },
    {
        question: "What is the meaning of \"Sip\"?",
        options: ["Pour something out", "Throw something", "Eat quickly", "Drink a small amount"],
        answer: 3,
        explanation: "Sip means to drink something slowly in small amounts.<br><br><strong>Example:</strong> She took a sip of coffee before starting the meeting."
    },
    {
        question: "What is the meaning of \"Stack\"?",
        options: ["A pile of things placed one on top of another", "A large room", "A single object", "A type of machine"],
        answer: 0,
        explanation: "Stack means a pile of things placed one on top of another.<br><br><strong>Example:</strong> There was a stack of books on the desk."
    },
    {
        question: "What is the meaning of \"Scrape\"?",
        options: ["To polish something", "To build something", "To remove or rub something using a rough edge", "To wash something"],
        answer: 2,
        explanation: "Scrape means to remove something from a surface by rubbing or dragging a rough or sharp object over it.<br><br><strong>Example:</strong> He used a knife to scrape the paint from the wall."
    },
    {
        question: "What is the meaning of \"Scrub\"?",
        options: ["To clean by rubbing hard", "To cut into pieces", "To cover completely", "To dry quickly"],
        answer: 0,
        explanation: "Scrub means to clean something by rubbing it hard, usually with a brush or cloth.<br><br><strong>Example:</strong> Please scrub the floor before the guests arrive."
    },
    {
        question: "What is the meaning of \"Lively\"?",
        options: ["Extremely old", "Quiet and boring", "Full of energy and enthusiasm", "Very dangerous"],
        answer: 2,
        explanation: "Lively means full of energy, activity, and enthusiasm.<br><br><strong>Example:</strong> The restaurant has a lively atmosphere in the evening."
    },
    {
        question: "What is the meaning of \"Litter\"?",
        options: ["Waste or rubbish left in public places", "Food supplies", "Furniture", "Valuable objects"],
        answer: 0,
        explanation: "Litter means waste or rubbish that people leave in public places.<br><br><strong>Example:</strong> People should not throw litter on the streets."
    },
    {
        question: "What is the meaning of \"Massive\"?",
        options: ["Very light", "Very cheap", "Very small", "Extremely large"],
        answer: 3,
        explanation: "Massive means extremely large or heavy.<br><br><strong>Example:</strong> The company made a massive investment in the new factory."
    },
    {
        question: "What is the meaning of \"Mutual\"?",
        options: ["Completely different", "Belonging to or shared by two or more people", "Belonging to one person", "Impossible"],
        answer: 1,
        explanation: "Mutual means shared by two or more people or groups.<br><br><strong>Example:</strong> They reached an agreement based on mutual respect."
    },
    {
        question: "What is the meaning of \"Prior\"?",
        options: ["Coming before something in time or order", "Coming after something", "Very expensive", "Completely unrelated"],
        answer: 0,
        explanation: "Prior means existing or happening before something else.<br><br><strong>Example:</strong> You need prior approval before starting the project."
    },
    {
        question: "What is the meaning of \"Reliable\"?",
        options: ["Likely to fail", "Difficult to use", "Very expensive", "Able to be trusted or depended on"],
        answer: 3,
        explanation: "Reliable means able to be trusted or depended on to work properly or behave as expected.<br><br><strong>Example:</strong> We need a reliable supplier for our business."
    },
    {
        question: "What is the meaning of \"Specific\"?",
        options: ["Completely optional", "General and unclear", "Clearly defined or identified", "Very large"],
        answer: 2,
        explanation: "Specific means clearly defined, identified, or stated.<br><br><strong>Example:</strong> Please provide specific details about the problem."
    },
    {
        question: "What is the meaning of \"Substitute\"?",
        options: ["A measurement", "A mistake", "A permanent solution", "A replacement for something or someone"],
        answer: 3,
        explanation: "Substitute means a person or thing used instead of another person or thing.<br><br><strong>Example:</strong> We used a substitute material because the original was unavailable."
    },
    {
        question: "What is the meaning of \"Trend\"?",
        options: ["A fixed rule", "A financial loss", "A general direction or pattern of change", "A sudden accident"],
        answer: 2,
        explanation: "Trend means a general direction in which something is developing or changing.<br><br><strong>Example:</strong> Online shopping is a growing trend around the world."
    },
    {
        question: "What is the meaning of \"Vendor\"?",
        options: ["A person or company that sells goods or services", "A manager", "A customer", "A government official"],
        answer: 0,
        explanation: "Vendor means a person or company that sells goods or services.<br><br><strong>Example:</strong> The company selected a new vendor to supply packaging materials."
    },
    {
        question: "What is the meaning of \"Verify\"?",
        options: ["To hide information", "To change something", "To check that something is true or accurate", "To ignore something"],
        answer: 2,
        explanation: "Verify means to check or confirm that something is true, accurate, or correct.<br><br><strong>Example:</strong> Please verify the information before submitting the report."
    },
    {
        question: "What is the meaning of \"Variety\"?",
        options: ["A single type", "A range of different types of something", "A serious problem", "A fixed amount"],
        answer: 1,
        explanation: "Variety means a range of different things or types of something.<br><br><strong>Example:</strong> The store offers a wide variety of products."
    },
    {
        question: "What is the meaning of \"Variation\"?",
        options: ["A written agreement", "A complete failure", "A difference or change in something", "A fixed condition"],
        answer: 2,
        explanation: "Variation means a difference or change in the form, amount, or condition of something.<br><br><strong>Example:</strong> There is some variation in the quality of the products."
    },
    {
        question: "What is the meaning of \"Vacant\"?",
        options: ["Recently repaired", "Not occupied or being used", "Very expensive", "Full of people"],
        answer: 1,
        explanation: "Vacant means empty or not being used or occupied.<br><br><strong>Example:</strong> The company has a vacant office on the second floor."
    },
    {
        question: "What is the meaning of \"Vanish\"?",
        options: ["Move closer", "Become larger", "Become stronger", "Become impossible to see or find"],
        answer: 3,
        explanation: "Vanish means to disappear suddenly or completely.<br><br><strong>Example:</strong> The clouds vanished as the weather improved."
    },
    {
        question: "What is the meaning of \"Waxy\"?",
        options: ["Very rough", "Made of or resembling wax", "Made of metal", "Extremely dry"],
        answer: 1,
        explanation: "Waxy means resembling wax, especially in appearance or texture.<br><br><strong>Example:</strong> The leaves have a waxy surface that helps prevent water loss."
    },
    {
        question: "What is the meaning of \"Wither\"?",
        options: ["Become fresh and healthy", "Grow rapidly", "Move quickly", "Become dry, weak, or dead"],
        answer: 3,
        explanation: "Wither means to become dry, weak, or dead, especially because of a lack of water.<br><br><strong>Example:</strong> The flowers began to wither without enough water."
    },
    {
        question: "What is the meaning of \"Wrath\"?",
        options: ["Happiness", "Extreme anger", "Confusion", "Fear"],
        answer: 1,
        explanation: "Wrath means extreme anger or fury.<br><br><strong>Example:</strong> The decision caused the wrath of many customers."
    },
    {
        question: "What is the meaning of \"Convert\"?",
        options: ["To measure something", "To destroy something", "To hide something", "To change something into a different form"],
        answer: 3,
        explanation: "Convert means to change something from one form, use, or system into another.<br><br><strong>Example:</strong> The software can convert PDF files into Word documents."
    },
    {
        question: "What is the meaning of \"Decline\"?",
        options: ["To repair", "To become smaller, weaker, or less", "To celebrate", "To increase rapidly"],
        answer: 1,
        explanation: "Decline means to become smaller, weaker, or less, or to refuse something.<br><br><strong>Example:</strong> Sales began to decline during the final quarter."
    },
    {
        question: "What is the meaning of \"Detect\"?",
        options: ["To remove something", "To predict the future", "To discover or notice something", "To create something"],
        answer: 2,
        explanation: "Detect means to discover or notice something, especially something that is not easy to see or find.<br><br><strong>Example:</strong> The machine can detect small defects in the products."
    },
    {
        question: "What is the meaning of \"Durable\"?",
        options: ["Very expensive", "Able to last for a long time", "Easily broken", "Difficult to carry"],
        answer: 1,
        explanation: "Durable means strong and able to last for a long time without being damaged.<br><br><strong>Example:</strong> These shoes are made from durable materials."
    },
    {
        question: "What is the meaning of \"Ingredients\"?",
        options: ["Finished products", "Tools used in a factory", "Written instructions", "The parts or substances used to make something"],
        answer: 3,
        explanation: "Ingredients are the foods or substances used to make a particular dish, product, or mixture.<br><br><strong>Example:</strong> Check the ingredients before preparing the recipe."
    },
    {
        question: "What is the meaning of \"Inhabit\"?",
        options: ["To leave a place", "To live in a particular place", "To travel frequently", "To build a house"],
        answer: 1,
        explanation: "Inhabit means to live in a particular place or area.<br><br><strong>Example:</strong> Many species of birds inhabit this forest."
    },
    {
        question: "What is the meaning of \"Initiate\"?",
        options: ["To copy something", "To finish something", "To prevent something", "To begin or start something"],
        answer: 3,
        explanation: "Initiate means to cause something to begin or to start a process.<br><br><strong>Example:</strong> The manager initiated a new training program for employees."
    },
    {
        question: "What is the meaning of \"Modify\"?",
        options: ["To change something slightly", "To purchase something", "To ignore something", "To completely destroy something"],
        answer: 0,
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

            <div class="social-message" style="margin-top:20px;">

                <p>❤️ Enjoyed the Quiz?</p>
                <p>👍 Like our Facebook Page</p>
                <p>💬 Comment or share your score</p>
                <p>❤️ Follow our Page for more quizzes</p>

            </div>

            <div class="result-actions" style="margin-top:20px;">

                <button onclick="window.location.assign('https://aliakbar1974.github.io/Quiz-Challenge-Bangladesh-Website/vocabulary-quizzes.html')">
                    📚 More Vocabulary Quizzes
                </button>

                <button onclick="window.location.assign('https://aliakbar1974.github.io/Quiz-Challenge-Bangladesh-Website/')">
                    🏠 Back to Home
                </button>

                <button onclick="window.location.assign('https://www.facebook.com/QuizChallengeBangladesh')">
                    ↩️ Return to Facebook
                </button>

            </div>

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