// ============================================================
// ENGLISH VOCABULARY QUIZ 12
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo?fbid=122113236543435742&set=a.122102731923435742";


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
    {
        id: "VOC321",
        question: "What does 'Recluse' mean?",
        options: [
            "A person who avoids social contact and lives in seclusion",
            "A person who enjoys meeting large groups of people",
            "A person who travels frequently for business",
            "A person who leads a political organization"
        ],
        answer: 0,
        explanation: "'Recluse' means a person who lives alone and avoids the company of others.",
        example: "The old man was a recluse who rarely left his house."
    },

    {
        id: "VOC322",
        question: "What is the meaning of 'Recollection'?",
        options: [
            "A sudden feeling of anger",
            "The act or power of remembering something",
            "A careful examination of evidence",
            "A formal agreement between two parties"
        ],
        answer: 1,
        explanation: "'Recollection' means the act or ability to remember something from the past.",
        example: "I have a clear recollection of my first day at school."
    },

    {
        id: "VOC323",
        question: "What does 'Reconcile' mean?",
        options: [
            "To reject something completely",
            "To make something more complicated",
            "To restore friendly relations or bring two things into agreement",
            "To delay an important decision"
        ],
        answer: 2,
        explanation: "'Reconcile' means to restore harmony or make two different ideas or situations compatible.",
        example: "The two friends finally reconciled after their argument."
    },

    {
        id: "VOC324",
        question: "What does 'Reiterate' mean?",
        options: [
            "To carefully investigate something",
            "To permanently remove something",
            "To criticize someone publicly",
            "To repeat something for emphasis or clarity"
        ],
        answer: 3,
        explanation: "'Reiterate' means to say or state something again, especially to emphasize it.",
        example: "The teacher reiterated the importance of regular practice."
    },

    {
        id: "VOC325",
        question: "What is a 'Remnant'?",
        options: [
            "A small remaining part of something",
            "A newly created object",
            "A person with great authority",
            "A sudden change in behavior"
        ],
        answer: 0,
        explanation: "'Remnant' means a small piece or amount that remains after the rest has been used, removed, or destroyed.",
        example: "Only a small remnant of the ancient wall remains."
    },

    {
        id: "VOC326",
        question: "What does 'Renowned' mean?",
        options: [
            "Unknown and unnoticed",
            "Widely known and respected",
            "Unwilling to take responsibility",
            "Unable to make a decision"
        ],
        answer: 1,
        explanation: "'Renowned' means famous and highly respected for a particular quality or achievement.",
        example: "She is a renowned scientist with many international awards."
    },

    {
        id: "VOC327",
        question: "What does 'Repel' mean?",
        options: [
            "To attract strongly",
            "To remember something clearly",
            "To drive away or push back",
            "To accept something willingly"
        ],
        answer: 2,
        explanation: "'Repel' means to drive away, resist, or cause something to move away.",
        example: "This chemical can repel insects."
    },

    {
        id: "VOC328",
        question: "What does 'Reproach' mean?",
        options: [
            "To praise someone highly",
            "To forgive someone completely",
            "To help someone in difficulty",
            "To express disapproval or disappointment"
        ],
        answer: 3,
        explanation: "'Reproach' means to criticize or express disappointment because of someone's actions.",
        example: "She reproached him for being careless with the documents."
    },

    {
        id: "VOC329",
        question: "What does 'Resolute' mean?",
        options: [
            "Firmly determined and unwavering",
            "Easily frightened and uncertain",
            "Unwilling to communicate",
            "Careless about important matters"
        ],
        answer: 0,
        explanation: "'Resolute' means very determined and not likely to change one's decision.",
        example: "She remained resolute despite the difficulties."
    },

    {
        id: "VOC330",
        question: "What does 'Restrain' mean?",
        options: [
            "To encourage someone to act quickly",
            "To hold back or prevent someone or something from acting freely",
            "To make something more attractive",
            "To explain something in detail"
        ],
        answer: 1,
        explanation: "'Restrain' means to control, hold back, or prevent someone or something from doing something.",
        example: "The police had to restrain the angry crowd."
    },

    {
        id: "VOC331",
        question: "What does 'Retain' mean?",
        options: [
            "To lose something permanently",
            "To criticize something openly",
            "To keep or continue to have something",
            "To divide something into several parts"
        ],
        answer: 2,
        explanation: "'Retain' means to keep possession of something or continue to have it.",
        example: "The company wants to retain its experienced employees."
    },

    {
        id: "VOC332",
        question: "What does 'Retard' mean?",
        options: [
            "To accelerate a process",
            "To improve something rapidly",
            "To remove an obstacle",
            "To slow down or delay the progress of something"
        ],
        answer: 3,
        explanation: "As a verb, 'retard' means to slow down or delay the development or progress of something.",
        example: "Lack of investment can retard economic growth."
    },

    {
        id: "VOC333",
        question: "What does 'Retort' mean?",
        options: [
            "A sharp or quick reply, often in response to criticism",
            "A formal written agreement",
            "A long period of silence",
            "A request for financial assistance"
        ],
        answer: 0,
        explanation: "'Retort' means a quick, sharp, or witty reply, especially one made in response to criticism.",
        example: "He retorted that he had done nothing wrong."
    },

    {
        id: "VOC334",
        question: "What does 'Revenue' mean?",
        options: [
            "The total amount of money borrowed by a company",
            "Income, especially money received by a government or organization",
            "The amount of money spent on advertising",
            "A person's personal savings"
        ],
        answer: 1,
        explanation: "'Revenue' means income received by a government, business, or organization.",
        example: "The government's tax revenue increased this year."
    },

    {
        id: "VOC335",
        question: "What does 'Rustic' mean?",
        options: [
            "Highly modern and technologically advanced",
            "Extremely expensive and luxurious",
            "Characteristic of the countryside; simple and rural",
            "Related to international politics"
        ],
        answer: 2,
        explanation: "'Rustic' describes something associated with the countryside or having a simple, rural character.",
        example: "We stayed in a charming rustic cottage in the countryside."
    },

    {
        id: "VOC336",
        question: "What does 'Sagacity' mean?",
        options: [
            "A lack of confidence",
            "A strong desire for wealth",
            "A tendency to avoid responsibility",
            "Good judgment and wisdom"
        ],
        answer: 3,
        explanation: "'Sagacity' means the quality of having good judgment, wisdom, and the ability to make sensible decisions.",
        example: "The leader was respected for his sagacity and experience."
    },

    {
        id: "VOC337",
        question: "What does 'Scant' mean?",
        options: [
            "Barely sufficient or inadequate in amount",
            "Extremely abundant",
            "Very expensive",
            "Perfectly organized"
        ],
        answer: 0,
        explanation: "'Scant' means small in quantity and barely enough for what is needed.",
        example: "The researchers had only scant information about the incident."
    },

    {
        id: "VOC338",
        question: "What does 'Scornful' mean?",
        options: [
            "Showing great admiration",
            "Showing strong disrespect or contempt",
            "Showing deep concern",
            "Showing complete agreement"
        ],
        answer: 1,
        explanation: "'Scornful' means showing strong disrespect, contempt, or a feeling that someone or something is unworthy.",
        example: "He gave a scornful laugh when he heard the proposal."
    },

    {
        id: "VOC339",
        question: "What does 'Scrutiny' mean?",
        options: [
            "A sudden emotional reaction",
            "A public celebration",
            "Careful and detailed examination",
            "A formal invitation"
        ],
        answer: 2,
        explanation: "'Scrutiny' means careful and detailed examination of something.",
        example: "The proposal was subjected to close scrutiny before approval."
    },

    {
        id: "VOC340",
        question: "What does 'Sever' mean?",
        options: [
            "To strengthen a relationship",
            "To combine two separate things",
            "To repair something that is broken",
            "To cut off or end something completely"
        ],
        answer: 3,
        explanation: "'Sever' means to cut, break, or end something completely, especially a connection or relationship.",
        example: "The company decided to sever its ties with the supplier."
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