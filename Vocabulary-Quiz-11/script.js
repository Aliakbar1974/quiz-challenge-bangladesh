// ============================================================
// ENGLISH VOCABULARY QUIZ 11
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "PASTE_YOUR_FACEBOOK_POST_URL_HERE";


// ============================================================
// SOUND ENGINE
// ============================================================

const sounds = {

    start:
        new Audio("Sounds/Start.wav"),

    correct:
        new Audio("Sounds/Correct.wav"),

    wrong:
        new Audio("Sounds/Wrong.wav"),

    tryAgain:
        new Audio("Sounds/TryAgain.wav"),

    success:
        new Audio("Sounds/Success.wav"),

    victory:
        new Audio("Sounds/Victory.wav"),

    complete:
        new Audio("Sounds/Complete.wav")

};


function playSound(soundName) {

    const sound = sounds[soundName];

    if (!sound) return;

    sound.currentTime = 0;

    sound.play().catch(error => {

        console.log(
            "Sound could not play:",
            error
        );

    });

}


// ============================================================
// QUIZ DATA
// ============================================================

const quizData = [

    // --------------------------------------------------------
    // VOC301 - Exorbitant
    // --------------------------------------------------------

    {
        id: "VOC301",

        word: "Exorbitant",

        question:
            "What is the closest meaning of 'Exorbitant'?",

        options: [

            "Extremely expensive or excessive",

            "Very ordinary",

            "Extremely simple",

            "Completely free"

        ],

        answer: 0,

        explanation:
            "'Exorbitant' means unreasonably high, especially in price or cost.",

        example:
            "The hotel charged an exorbitant price for a small room."

    },


    // --------------------------------------------------------
    // VOC302 - Expound
    // --------------------------------------------------------

    {
        id: "VOC302",

        word: "Expound",

        question:
            "What is the closest meaning of 'Expound'?",

        options: [

            "To hide something",

            "To explain in detail",

            "To destroy completely",

            "To refuse an offer"

        ],

        answer: 1,

        explanation:
            "'Expound' means to explain or discuss something in detail.",

        example:
            "The professor expounded his theory to the students."

    },


    // --------------------------------------------------------
    // VOC303 - Forbearance
    // --------------------------------------------------------

    {
        id: "VOC303",

        word: "Forbearance",

        question:
            "What is the closest meaning of 'Forbearance'?",

        options: [

            "Anger and resentment",

            "A sudden decision",

            "Patient self-control or restraint",

            "A strong desire"

        ],

        answer: 2,

        explanation:
            "'Forbearance' means patient restraint or the act of refraining from something.",

        example:
            "His forbearance prevented the argument from becoming more serious."

    },


    // --------------------------------------------------------
    // VOC304 - Garrulous
    // --------------------------------------------------------

    {
        id: "VOC304",

        word: "Garrulous",

        question:
            "What is the closest meaning of 'Garrulous'?",

        options: [

            "Silent and reserved",

            "Extremely careful",

            "Very generous",

            "Excessively talkative"

        ],

        answer: 3,

        explanation:
            "'Garrulous' means excessively talkative, especially about unimportant things.",

        example:
            "The garrulous passenger talked throughout the entire journey."

    },


    // --------------------------------------------------------
    // VOC305 - Incisive
    // --------------------------------------------------------

    {
        id: "VOC305",

        word: "Incisive",

        question:
            "What is the closest meaning of 'Incisive'?",

        options: [

            "Clear, sharp, and analytical",

            "Weak and uncertain",

            "Slow and careless",

            "Funny and entertaining"

        ],

        answer: 0,

        explanation:
            "'Incisive' describes something clear, sharp, direct, and intelligently analytical.",

        example:
            "The journalist asked several incisive questions."

    },


    // --------------------------------------------------------
    // VOC306 - Indictment
    // --------------------------------------------------------

    {
        id: "VOC306",

        word: "Indictment",

        question:
            "What is the closest meaning of 'Indictment'?",

        options: [

            "A public celebration",

            "A formal charge of a serious crime",

            "A written apology",

            "A financial reward"

        ],

        answer: 1,

        explanation:
            "'Indictment' means a formal accusation or charge of a serious crime.",

        example:
            "The indictment charged him with several serious offenses."

    },


    // --------------------------------------------------------
    // VOC307 - Obsequious
    // --------------------------------------------------------

    {
        id: "VOC307",

        word: "Obsequious",

        question:
            "What is the closest meaning of 'Obsequious'?",

        options: [

            "Bravely independent",

            "Extremely intelligent",

            "Excessively eager to please or obey",

            "Carelessly dishonest"

        ],

        answer: 2,

        explanation:
            "'Obsequious' means excessively obedient or eager to please someone in a servile way.",

        example:
            "The obsequious employee agreed with everything his manager said."

    },


    // --------------------------------------------------------
    // VOC308 - Phlegmatic
    // --------------------------------------------------------

    {
        id: "VOC308",

        word: "Phlegmatic",

        question:
            "What is the closest meaning of 'Phlegmatic'?",

        options: [

            "Very emotional",

            "Highly aggressive",

            "Extremely nervous",

            "Calm and unemotional"

        ],

        answer: 3,

        explanation:
            "'Phlegmatic' means calm, unemotional, and not easily excited.",

        example:
            "He remained phlegmatic even during the crisis."

    },


    // --------------------------------------------------------
    // VOC309 - Posterity
    // --------------------------------------------------------

    {
        id: "VOC309",

        word: "Posterity",

        question:
            "What is the closest meaning of 'Posterity'?",

        options: [

            "Future generations",

            "Close friends",

            "Political leaders",

            "Ancient enemies"

        ],

        answer: 0,

        explanation:
            "'Posterity' refers to future generations or people who will live in the future.",

        example:
            "We must protect the environment for posterity."

    },


    // --------------------------------------------------------
    // VOC310 - Precept
    // --------------------------------------------------------

    {
        id: "VOC310",

        word: "Precept",

        question:
            "What is the closest meaning of 'Precept'?",

        options: [

            "A secret plan",

            "A rule or principle of conduct",

            "A financial document",

            "A physical object"

        ],

        answer: 1,

        explanation:
            "'Precept' is a rule, principle, or instruction intended to guide behavior.",

        example:
            "Honesty is an important precept of a good society."

    },


    // --------------------------------------------------------
    // VOC311 - Prolific
    // --------------------------------------------------------

    {
        id: "VOC311",

        word: "Prolific",

        question:
            "What is the closest meaning of 'Prolific'?",

        options: [

            "Unable to produce anything",

            "Very expensive",

            "Producing a large amount of something",

            "Extremely secretive"

        ],

        answer: 2,

        explanation:
            "'Prolific' means producing a large amount of something, especially creative work.",

        example:
            "She was a prolific writer who published many books."

    },


    // --------------------------------------------------------
    // VOC312 - Promulgate
    // --------------------------------------------------------

    {
        id: "VOC312",

        word: "Promulgate",

        question:
            "What is the closest meaning of 'Promulgate'?",

        options: [

            "To conceal officially",

            "To cancel a law",

            "To criticize publicly",

            "To officially announce or declare"

        ],

        answer: 3,

        explanation:
            "'Promulgate' means to officially announce or declare a law, rule, or regulation.",

        example:
            "The government promulgated new regulations."

    },


    // --------------------------------------------------------
    // VOC313 - Protrude
    // --------------------------------------------------------

    {
        id: "VOC313",

        word: "Protrude",

        question:
            "What is the closest meaning of 'Protrude'?",

        options: [

            "To stick out or extend beyond a surface",

            "To disappear completely",

            "To become smaller",

            "To move backward"

        ],

        answer: 0,

        explanation:
            "'Protrude' means to stick out or project beyond a surface.",

        example:
            "A nail was protruding from the wooden wall."

    },


    // --------------------------------------------------------
    // VOC314 - Proximity
    // --------------------------------------------------------

    {
        id: "VOC314",

        word: "Proximity",

        question:
            "What is the closest meaning of 'Proximity'?",

        options: [

            "Distance",

            "Nearness or closeness",

            "Uncertainty",

            "Complexity"

        ],

        answer: 1,

        explanation:
            "'Proximity' means the state of being near or close to something.",

        example:
            "The school's proximity to my home is very convenient."

    },


    // --------------------------------------------------------
    // VOC315 - Prudent
    // --------------------------------------------------------

    {
        id: "VOC315",

        word: "Prudent",

        question:
            "What is the closest meaning of 'Prudent'?",

        options: [

            "Reckless",

            "Careless",

            "Wise and careful",

            "Extremely impatient"

        ],

        answer: 2,

        explanation:
            "'Prudent' means acting with care, wisdom, and good judgment.",

        example:
            "It is prudent to save some money for emergencies."

    },


    // --------------------------------------------------------
    // VOC316 - Quell
    // --------------------------------------------------------

    {
        id: "VOC316",

        word: "Quell",

        question:
            "What is the closest meaning of 'Quell'?",

        options: [

            "To encourage strongly",

            "To increase rapidly",

            "To celebrate publicly",

            "To suppress or put an end to something"

        ],

        answer: 3,

        explanation:
            "'Quell' means to suppress, calm, or put an end to something, especially a disturbance.",

        example:
            "The police were called to quell the violent protest."

    },


    // --------------------------------------------------------
    // VOC317 - Rancor
    // --------------------------------------------------------

    {
        id: "VOC317",

        word: "Rancor",

        question:
            "What is the closest meaning of 'Rancor'?",

        options: [

            "Deep and lasting resentment",

            "Friendly affection",

            "Great excitement",

            "Complete confusion"

        ],

        answer: 0,

        explanation:
            "'Rancor' means deep, bitter, and lasting resentment or hostility.",

        example:
            "Years of rancor divided the two families."

    },


    // --------------------------------------------------------
    // VOC318 - Ratify
    // --------------------------------------------------------

    {
        id: "VOC318",

        word: "Ratify",

        question:
            "What is the closest meaning of 'Ratify'?",

        options: [

            "To reject formally",

            "To formally approve or confirm",

            "To explain carefully",

            "To destroy legally"

        ],

        answer: 1,

        explanation:
            "'Ratify' means to formally approve, confirm, or make an agreement officially valid.",

        example:
            "The parliament voted to ratify the treaty."

    },


    // --------------------------------------------------------
    // VOC319 - Raze
    // --------------------------------------------------------

    {
        id: "VOC319",

        word: "Raze",

        question:
            "What is the closest meaning of 'Raze'?",

        options: [

            "To repair carefully",

            "To decorate beautifully",

            "To completely destroy or demolish",

            "To protect from damage"

        ],

        answer: 2,

        explanation:
            "'Raze' means to completely destroy or demolish a building or structure.",

        example:
            "The old building was razed to make room for a new one."

    },


    // --------------------------------------------------------
    // VOC320 - Rebut
    // --------------------------------------------------------

    {
        id: "VOC320",

        word: "Rebut",

        question:
            "What is the closest meaning of 'Rebut'?",

        options: [

            "To accept without question",

            "To repeat exactly",

            "To praise publicly",

            "To argue against or disprove"

        ],

        answer: 3,

        explanation:
            "'Rebut' means to contradict, refute, or argue against a statement or claim.",

        example:
            "The lawyer tried to rebut the witness's testimony."

    }

];


// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;

let score = 0;

let selectedMode = "";

let timer = null;

let timeLeft = 15;

let answered = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const questionNumber =
    document.getElementById("question-number");

const totalQuestions =
    document.getElementById("total-questions");

const timerElement =
    document.getElementById("timer");

const progressBar =
    document.getElementById("progress-bar");

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const feedbackElement =
    document.getElementById("feedback");

const correctMessage =
    document.getElementById("correct-message");

const wrongMessage =
    document.getElementById("wrong-message");

const exampleText =
    document.getElementById("example-text");

const scoreElement =
    document.getElementById("score");

const percentageElement =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("result-message");

const statusElement =
    document.getElementById("status");

const socialMessage =
    document.getElementById("social-message");


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {

    totalQuestions.textContent =
        quizData.length;

}


if (quizScreen) {

    quizScreen.style.display =
        "none";

}


if (resultScreen) {

    resultScreen.style.display =
        "none";

}


if (feedbackElement) {

    feedbackElement.style.display =
        "none";

}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {

    selectedMode = mode;

    currentQuestion = 0;

    score = 0;

    answered = false;

    clearInterval(timer);


    if (startScreen) {

        startScreen.style.display =
            "none";

    }


    if (resultScreen) {

        resultScreen.style.display =
            "none";

    }


    if (quizScreen) {

        quizScreen.style.display =
            "block";

    }


    if (statusElement) {

        statusElement.textContent =
            "";

    }


    playSound("start");

    showQuestion();

}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {

    clearInterval(timer);

    answered = false;


    const q =
        quizData[currentQuestion];


    if (!q) {

        showResult();

        return;

    }


    // --------------------------------------------------------
    // Question Number
    // --------------------------------------------------------

    if (questionNumber) {

        questionNumber.textContent =
            currentQuestion + 1;

    }


    // --------------------------------------------------------
    // Total Questions
    // --------------------------------------------------------

    if (totalQuestions) {

        totalQuestions.textContent =
            quizData.length;

    }


    // --------------------------------------------------------
    // Progress Bar
    // --------------------------------------------------------

    if (progressBar) {

        const progress =
            ((currentQuestion + 1) /
            quizData.length) * 100;

        progressBar.style.width =
            progress + "%";

    }


    // --------------------------------------------------------
    // Question
    // --------------------------------------------------------

    if (questionElement) {

        questionElement.innerHTML = `

            <span class="vocabulary-word">
                ${q.word}
            </span>

            <br>

            ${q.question}

        `;

    }


    // --------------------------------------------------------
    // Clear Options
    // --------------------------------------------------------

    if (optionsElement) {

        optionsElement.innerHTML =
            "";

    }


    // --------------------------------------------------------
    // Clear Feedback
    // --------------------------------------------------------

    if (feedbackElement) {

        feedbackElement.style.display =
            "none";

    }


    if (correctMessage) {

        correctMessage.textContent =
            "";

    }


    if (wrongMessage) {

        wrongMessage.textContent =
            "";

    }


    if (exampleText) {

        exampleText.textContent =
            "";

    }


    // --------------------------------------------------------
    // Remove Old Next Button
    // --------------------------------------------------------

    const oldNextButton =
        document.getElementById(
            "next-question-btn"
        );


    if (oldNextButton) {

        oldNextButton.remove();

    }


    // --------------------------------------------------------
    // Create Answer Options
    // --------------------------------------------------------

    q.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option-btn";


            button.type =
                "button";


            button.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(
                        65 + index
                    )}
                </span>

                <span class="option-text">
                    ${option}
                </span>

            `;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            if (optionsElement) {

                optionsElement.appendChild(
                    button
                );

            }

        }
    );


    // ========================================================
    // EXAM MODE
    // ========================================================

    if (selectedMode === "exam") {

        timeLeft = 15;

        updateTimer();


        timer =
            setInterval(
                () => {

                    timeLeft--;

                    updateTimer();


                    if (timeLeft <= 0) {

                        clearInterval(timer);

                        timeUp();

                    }

                },
                1000
            );

    }


    // ========================================================
    // LEARNING MODE
    // ========================================================

    else {

        if (timerElement) {

            timerElement.textContent =
                "∞";

            timerElement.classList.remove(
                "timer-danger"
            );

        }

    }

}


// ============================================================
// UPDATE TIMER
// ============================================================

function updateTimer() {

    if (!timerElement) return;


    timerElement.textContent =
        timeLeft;


    if (timeLeft <= 5) {

        timerElement.classList.add(
            "timer-danger"
        );

    }

    else {

        timerElement.classList.remove(
            "timer-danger"
        );

    }

}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(
    selectedIndex,
    clickedButton
) {

    if (answered) return;


    answered = true;

    clearInterval(timer);


    const q =
        quizData[currentQuestion];


    const buttons =
        optionsElement
            ? optionsElement.querySelectorAll(
                ".option-btn"
            )
            : [];


    // --------------------------------------------------------
    // Disable All Options
    // --------------------------------------------------------

    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    // ========================================================
    // CORRECT ANSWER
    // ========================================================

    if (
        selectedIndex ===
        q.answer
    ) {

        score++;


        if (clickedButton) {

            clickedButton.classList.add(
                "correct"
            );

        }


        playSound("correct");


        if (correctMessage) {

            correctMessage.textContent =
                "✓ Correct Answer!";

        }


        if (wrongMessage) {

            wrongMessage.textContent =
                "";

        }


        // ----------------------------------------------------
        // Learning Mode
        // ----------------------------------------------------

        if (
            selectedMode ===
            "learning"
        ) {

            if (feedbackElement) {

                feedbackElement.style.display =
                    "block";

            }


            if (exampleText) {

                exampleText.innerHTML = `

                    <strong>
                        Example:
                    </strong>

                    ${q.example}

                    <br><br>

                    <strong>
                        Explanation:
                    </strong>

                    ${q.explanation}

                `;

            }

        }

    }


    // ========================================================
    // WRONG ANSWER
    // ========================================================

    else {

        if (clickedButton) {

            clickedButton.classList.add(
                "wrong"
            );

        }


        // ----------------------------------------------------
        // Highlight Correct Answer
        // ----------------------------------------------------

        if (buttons[q.answer]) {

            buttons[q.answer].classList.add(
                "correct"
            );

        }


        playSound("wrong");


        if (wrongMessage) {

            wrongMessage.textContent =
                "✗ Wrong Answer!";

        }


        if (correctMessage) {

            correctMessage.innerHTML = `

                Correct Answer:

                <strong>
                    ${q.options[q.answer]}
                </strong>

            `;

        }


        if (feedbackElement) {

            feedbackElement.style.display =
                "block";

        }


        if (exampleText) {

            exampleText.innerHTML = `

                <strong>
                    Example:
                </strong>

                ${q.example}

                <br><br>

                <strong>
                    Explanation:
                </strong>

                ${q.explanation}

            `;

        }

    }


    showNextButton();

}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {

    if (answered) return;


    answered = true;

    clearInterval(timer);


    const q =
        quizData[currentQuestion];


    const buttons =
        optionsElement
            ? optionsElement.querySelectorAll(
                ".option-btn"
            )
            : [];


    // --------------------------------------------------------
    // Disable All Options
    // --------------------------------------------------------

    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    // --------------------------------------------------------
    // Highlight Correct Answer
    // --------------------------------------------------------

    if (buttons[q.answer]) {

        buttons[q.answer].classList.add(
            "correct"
        );

    }


    playSound("tryAgain");


    if (wrongMessage) {

        wrongMessage.textContent =
            "⏰ Time's Up!";

    }


    if (correctMessage) {

        correctMessage.innerHTML = `

            Correct Answer:

            <strong>
                ${q.options[q.answer]}
            </strong>

        `;

    }


    if (feedbackElement) {

        feedbackElement.style.display =
            "block";

    }


    if (exampleText) {

        exampleText.innerHTML = `

            <strong>
                Example:
            </strong>

            ${q.example}

            <br><br>

            <strong>
                Explanation:
            </strong>

            ${q.explanation}

        `;

    }


    showNextButton();

}


// ============================================================
// SHOW NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {


    const oldButton =
        document.getElementById(
            "next-question-btn"
        );


    if (oldButton) {

        oldButton.remove();

    }


    const nextButton =
        document.createElement(
            "button"
        );


    nextButton.id =
        "next-question-btn";


    nextButton.className =
        "next-btn";


    nextButton.type =
        "button";


    // --------------------------------------------------------
    // More Questions
    // --------------------------------------------------------

    if (
        currentQuestion <
        quizData.length - 1
    ) {

        nextButton.textContent =
            "Next Question →";


        nextButton.addEventListener(
            "click",
            nextQuestion
        );

    }


    // --------------------------------------------------------
    // Last Question
    // --------------------------------------------------------

    else {

        nextButton.textContent =
            "Show Result 🎉";


        nextButton.addEventListener(
            "click",
            showResult
        );

    }


    // --------------------------------------------------------
    // Put Button Inside Quiz Container
    // --------------------------------------------------------

    const quizContainer =
        quizScreen
            ? quizScreen.querySelector(
                ".quiz-container"
            )
            : null;


    if (quizContainer) {

        quizContainer.appendChild(
            nextButton
        );

    }

    else if (quizScreen) {

        quizScreen.appendChild(
            nextButton
        );

    }

}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {

    clearInterval(timer);


    currentQuestion++;


    if (
        currentQuestion <
        quizData.length
    ) {

        showQuestion();

    }

    else {

        showResult();

    }

}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {

    clearInterval(timer);


    // --------------------------------------------------------
    // Hide Quiz
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Result
    // --------------------------------------------------------

    if (resultScreen) {

        resultScreen.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Remove Next Button
    // --------------------------------------------------------

    const nextButton =
        document.getElementById(
            "next-question-btn"
        );


    if (nextButton) {

        nextButton.remove();

    }


    // --------------------------------------------------------
    // Calculate Percentage
    // --------------------------------------------------------

    const percentage =
        Math.round(
            (score /
            quizData.length) *
            100
        );


    // --------------------------------------------------------
    // Display Score
    // --------------------------------------------------------

    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${quizData.length}`;

    }


    // --------------------------------------------------------
    // Display Percentage
    // --------------------------------------------------------

    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }


    // ========================================================
    // RESULT MESSAGE + SOUND
    // ========================================================

    if (resultMessage) {


        if (percentage >= 90) {

            resultMessage.textContent =
                "🏆 Excellent! Outstanding performance!";


            playSound("victory");

        }


        else if (percentage >= 75) {

            resultMessage.textContent =
                "🌟 Very Good! Keep improving your vocabulary.";


            playSound("success");

        }


        else if (percentage >= 50) {

            resultMessage.textContent =
                "👍 Good Try! Keep practicing regularly.";


            playSound("complete");

        }


        else {

            resultMessage.textContent =
                "📚 Keep Learning! Try Again and improve your score.";


            playSound("tryAgain");

        }

    }


    // ========================================================
    // SOCIAL MESSAGE
    // ========================================================

    let socialBox =
        document.getElementById(
            "social-message"
        );


    // --------------------------------------------------------
    // If Social Message Is Missing,
    // Create It Automatically
    // --------------------------------------------------------

    if (!socialBox && resultScreen) {

        const resultCard =
            resultScreen.querySelector(
                ".result-card"
            );


        if (resultCard) {

            socialBox =
                document.createElement(
                    "div"
                );


            socialBox.id =
                "social-message";


            socialBox.className =
                "social-message";


            resultCard.appendChild(
                socialBox
            );

        }

    }


    // --------------------------------------------------------
    // Social Message Content
    // --------------------------------------------------------

    if (socialBox) {

        socialBox.innerHTML = `

            ❤️
            <strong>
                Did you enjoy the quiz?
            </strong>

            <br><br>

            👍 Like our Facebook Post

            <br>

            💬 Comment your score

            <br>

            🔄 Share the quiz with your friends

            <br>

            ❤️ Follow our page for more quizzes!

        `;


        socialBox.style.display =
            "block";

    }

}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {

    if (

        FACEBOOK_POST_URL &&

        FACEBOOK_POST_URL !==
        "PASTE_YOUR_FACEBOOK_POST_URL_HERE"

    ) {

        window.location.href =
            FACEBOOK_POST_URL;

    }

    else {

        alert(

            "Facebook post link has not been added yet.\n\n" +

            "Please add your Facebook post URL in FACEBOOK_POST_URL."

        );

    }

}


// ============================================================
// PLAY AGAIN
// ============================================================

function reloadQuiz() {

    clearInterval(timer);


    currentQuestion = 0;

    score = 0;

    answered = false;

    selectedMode = "";


    playSound("start");


    // --------------------------------------------------------
    // Hide Result
    // --------------------------------------------------------

    if (resultScreen) {

        resultScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Hide Quiz
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Start Screen
    // --------------------------------------------------------

    if (startScreen) {

        startScreen.style.display =
            "block";

    }


    // --------------------------------------------------------
    // Reset Status
    // --------------------------------------------------------

    if (statusElement) {

        statusElement.textContent =
            "";

    }


    // --------------------------------------------------------
    // Reset Timer
    // --------------------------------------------------------

    if (timerElement) {

        timerElement.textContent =
            "15";

        timerElement.classList.remove(
            "timer-danger"
        );

    }

}


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {


    const distribution =
        [0, 0, 0, 0];


    quizData.forEach(
        q => {

            if (

                Number.isInteger(
                    q.answer
                )

                &&

                q.answer >= 0

                &&

                q.answer <= 3

            ) {

                distribution[
                    q.answer
                ]++;

            }

        }
    );


    console.log(

        "Answer Distribution:",

        `A=${distribution[0]},`,

        `B=${distribution[1]},`,

        `C=${distribution[2]},`,

        `D=${distribution[3]}`

    );


})();


// ============================================================
// END OF SCRIPT
// ============================================================