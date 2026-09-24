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
    "https://www.facebook.com/photo/?fbid=122113643889435742&set=a.122102731923435742";


// ============================================================
// SOUND ENGINE
// ============================================================

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


// ============================================================
// ENGLISH VOCABULARY QUIZ
// 20 Questions
// Vocabulary Set
// ============================================================

const quizData = [

    {
        id: "VOC341",
        question: "What does 'Shabby' mean?",
        options: [
            "New and expensive",
            "In poor condition because of being old or worn",
            "Extremely complicated",
            "Very attractive and fashionable"
        ],
        answer: 1,
        explanation:
            "'Shabby' means looking old, worn, or in poor condition, often because of long use or neglect.",
        example:
            "He was wearing a shabby old jacket."
    },


    {
        id: "VOC342",
        question: "What does 'Simultaneous' mean?",
        options: [
            "Happening at the same time",
            "Happening after a long delay",
            "Happening only once",
            "Happening in a particular order"
        ],
        answer: 0,
        explanation:
            "'Simultaneous' means occurring, existing, or happening at the same time.",
        example:
            "The two events were held simultaneously."
    },


    {
        id: "VOC343",
        question: "What does 'Sinuous' mean?",
        options: [
            "Straight and rigid",
            "Extremely short",
            "Having many smooth curves or bends",
            "Completely motionless"
        ],
        answer: 2,
        explanation:
            "'Sinuous' describes something that has many smooth curves and bends.",
        example:
            "A sinuous road wound through the mountains."
    },


    {
        id: "VOC344",
        question: "What does 'Skeptical' mean?",
        options: [
            "Certain that something is true",
            "Eager to accept every claim",
            "Unable to understand something",
            "Doubtful or not easily convinced"
        ],
        answer: 3,
        explanation:
            "'Skeptical' means having doubts about whether something is true or trustworthy.",
        example:
            "The scientist was skeptical about the unusual claim."
    },


    {
        id: "VOC345",
        question: "What does 'Sluggish' mean?",
        options: [
            "Slow-moving or lacking energy",
            "Very quick and energetic",
            "Highly intelligent",
            "Extremely noisy"
        ],
        answer: 0,
        explanation:
            "'Sluggish' means slow, inactive, or lacking energy and enthusiasm.",
        example:
            "I felt sluggish after eating a heavy meal."
    },


    {
        id: "VOC346",
        question: "What does 'Smolder' mean?",
        options: [
            "To freeze suddenly",
            "To burn slowly without producing flames",
            "To disappear completely",
            "To shine very brightly"
        ],
        answer: 1,
        explanation:
            "'Smolder' means to burn slowly without flames, often producing smoke.",
        example:
            "The remains of the fire continued to smolder throughout the night."
    },


    {
        id: "VOC347",
        question: "What does 'Snatch' mean?",
        options: [
            "To carefully preserve something",
            "To explain something clearly",
            "To take or seize something quickly",
            "To exchange something peacefully"
        ],
        answer: 2,
        explanation:
            "'Snatch' means to take something suddenly or quickly, often by force or unexpectedly.",
        example:
            "The thief tried to snatch her handbag."
    },


    {
        id: "VOC348",
        question: "What does 'Stale' mean?",
        options: [
            "Freshly prepared",
            "Extremely sweet",
            "Very expensive",
            "No longer fresh or pleasant"
        ],
        answer: 3,
        explanation:
            "'Stale' describes food that is no longer fresh, or something that has become dull or outdated.",
        example:
            "The bread was stale and difficult to eat."
    },


    {
        id: "VOC349",
        question: "What does 'Static' mean?",
        options: [
            "Fixed or not changing",
            "Moving very rapidly",
            "Continuously developing",
            "Difficult to measure"
        ],
        answer: 0,
        explanation:
            "'Static' means fixed, stationary, or not changing.",
        example:
            "The website contains mostly static information."
    },


    {
        id: "VOC350",
        question: "What does 'Stunt' mean as a verb?",
        options: [
            "To encourage rapid development",
            "To prevent or slow the growth or development of something",
            "To make something more beautiful",
            "To completely repair something"
        ],
        answer: 1,
        explanation:
            "As a verb, 'stunt' means to hinder or prevent the normal growth or development of something.",
        example:
            "Poor nutrition can stunt a child's physical growth."
    },


    {
        id: "VOC351",
        question: "What does 'Subsequent' mean?",
        options: [
            "Existing before something else",
            "Unrelated to a previous event",
            "Following or coming after something",
            "Happening unexpectedly"
        ],
        answer: 2,
        explanation:
            "'Subsequent' means coming or happening after something else.",
        example:
            "Subsequent investigations revealed new evidence."
    },


    {
        id: "VOC352",
        question: "What does 'Supersede' mean?",
        options: [
            "To support something financially",
            "To copy something exactly",
            "To make something more difficult",
            "To replace something because it is newer or more effective"
        ],
        answer: 3,
        explanation:
            "'Supersede' means to replace something older or less effective with something newer or better.",
        example:
            "Digital technology has largely superseded traditional methods."
    },


    {
        id: "VOC353",
        question: "What does 'Surmise' mean?",
        options: [
            "To suppose or infer something without having complete evidence",
            "To prove something beyond doubt",
            "To officially announce something",
            "To deliberately hide information"
        ],
        answer: 0,
        explanation:
            "'Surmise' means to form an opinion or guess based on limited evidence.",
        example:
            "I surmised that he had already left the office."
    },


    {
        id: "VOC354",
        question: "What does 'Synchronize' mean?",
        options: [
            "To separate two activities",
            "To cause two or more things to happen at the same time",
            "To stop a process permanently",
            "To make something happen more slowly"
        ],
        answer: 1,
        explanation:
            "'Synchronize' means to coordinate two or more things so that they occur or operate at the same time.",
        example:
            "The dancers synchronized their movements perfectly."
    },


    {
        id: "VOC355",
        question: "What does 'Synopsis' mean?",
        options: [
            "A detailed criticism",
            "A personal opinion",
            "A brief summary of the main points of something",
            "A collection of unrelated facts"
        ],
        answer: 2,
        explanation:
            "'Synopsis' means a brief summary that presents the main points of a book, article, film, or other work.",
        example:
            "The publisher asked the writer to submit a synopsis of the novel."
    },


    {
        id: "VOC356",
        question: "What does 'Taciturn' mean?",
        options: [
            "Very talkative and friendly",
            "Extremely emotional",
            "Always willing to argue",
            "Reserved or speaking very little"
        ],
        answer: 3,
        explanation:
            "'Taciturn' describes a person who is quiet and tends not to talk much.",
        example:
            "The taciturn man rarely joined conversations."
    },


    {
        id: "VOC357",
        question: "What does 'Tamper' mean?",
        options: [
            "To interfere with something improperly or without permission",
            "To improve something carefully",
            "To protect something from damage",
            "To examine something scientifically"
        ],
        answer: 0,
        explanation:
            "'Tamper' means to interfere with something improperly, especially in a way that may cause damage or alter its operation.",
        example:
            "Do not tamper with the electrical equipment."
    },


    {
        id: "VOC358",
        question: "What does 'Tentative' mean?",
        options: [
            "Final and completely certain",
            "Not definite or certain; subject to change",
            "Extremely successful",
            "Officially approved"
        ],
        answer: 1,
        explanation:
            "'Tentative' means not definite, certain, or final and may be changed later.",
        example:
            "We made a tentative plan for the weekend."
    },


    {
        id: "VOC359",
        question: "What does 'Tepid' mean?",
        options: [
            "Extremely hot",
            "Completely frozen",
            "Slightly warm or lacking enthusiasm",
            "Very cold and dry"
        ],
        answer: 2,
        explanation:
            "'Tepid' means slightly warm rather than hot or cold. It can also describe a response that shows little enthusiasm.",
        example:
            "The audience gave the speaker a tepid response."
    },


    {
        id: "VOC360",
        question: "What does 'Testify' mean?",
        options: [
            "To avoid answering a question",
            "To make a private agreement",
            "To criticize someone publicly",
            "To give evidence or make a statement, especially in court"
        ],
        answer: 3,
        explanation:
            "'Testify' means to give evidence or make a formal statement, especially in a court of law.",
        example:
            "The witness agreed to testify in court."
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


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) {
    quizScreen.style.display = "none";
}

if (resultScreen) {
    resultScreen.style.display = "none";
}

if (feedbackElement) {
    feedbackElement.style.display = "none";
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
        startScreen.style.display = "none";
    }

    if (resultScreen) {
        resultScreen.style.display = "none";
    }

    if (quizScreen) {
        quizScreen.style.display = "block";
    }

    if (statusElement) {
        statusElement.textContent = "";
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

    const q = quizData[currentQuestion];

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

        // IMPORTANT:
        // No q.word is used here.
        // This prevents "undefined" from appearing.

        questionElement.textContent =
            q.question;
    }


    // --------------------------------------------------------
    // Clear Old Options
    // --------------------------------------------------------

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }


    // --------------------------------------------------------
    // Clear Feedback
    // --------------------------------------------------------

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) {
        correctMessage.textContent = "";
    }

    if (wrongMessage) {
        wrongMessage.textContent = "";
    }

    if (exampleText) {
        exampleText.innerHTML = "";
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
                document.createElement("button");

            button.className =
                "option-btn";

            button.type =
                "button";

            button.innerHTML = `
                <span class="option-letter">
                    ${String.fromCharCode(65 + index)}
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
                optionsElement.appendChild(button);
            }

        }
    );


    // ========================================================
    // EXAM MODE
    // ========================================================

    if (selectedMode === "exam") {

        timeLeft = 15;

        updateTimer();

        timer = setInterval(
            function () {

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
    // Disable all options
    // --------------------------------------------------------

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    // ========================================================
    // CORRECT ANSWER
    // ========================================================

    if (selectedIndex === q.answer) {

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
        // Learning Mode Feedback
        // ----------------------------------------------------

        if (selectedMode === "learning") {

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


        // ----------------------------------------------------
        // Show Explanation
        // ----------------------------------------------------

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


    // --------------------------------------------------------
    // Show Next Button
    // --------------------------------------------------------

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
    // Disable all options
    // --------------------------------------------------------

    buttons.forEach(
        button => {
            button.disabled = true;
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
        document.createElement("button");

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
    // Add Button to Quiz Container
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
    // Hide Quiz Screen
    // --------------------------------------------------------

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    // --------------------------------------------------------
    // Show Result Screen
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
            quizData.length) * 100
        );


    // --------------------------------------------------------
    // Score
    // --------------------------------------------------------

    if (scoreElement) {

        scoreElement.textContent =
            `${score} / ${quizData.length}`;

    }


    // --------------------------------------------------------
    // Percentage
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
    // Create Social Message if Missing
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


    // --------------------------------------------------------
    // Make sure Facebook button works
    // --------------------------------------------------------

    setupFacebookButton();

}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {

    const facebookURL =
        FACEBOOK_POST_URL;


    if (!facebookURL) {

        alert(
            "Facebook post link is not available."
        );

        return;
    }


    // --------------------------------------------------------
    // Redirect directly to Facebook post
    // --------------------------------------------------------

    window.location.assign(
        facebookURL
    );

}


// ============================================================
// FACEBOOK BUTTON SETUP
// ============================================================

function setupFacebookButton() {

    const facebookButton =
        document.getElementById(
            "facebook-btn"
        );


    if (!facebookButton) return;


    // --------------------------------------------------------
    // Keep HTML onclick working
    // --------------------------------------------------------

    facebookButton.onclick =
        function () {

            returnToFacebook();

        };

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


    // --------------------------------------------------------
    // Reset Progress
    // --------------------------------------------------------

    if (progressBar) {

        progressBar.style.width =
            "0%";

    }

}


// ============================================================
// INITIALIZE FACEBOOK BUTTON
// ============================================================

setupFacebookButton();


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {

    const distribution =
        [0, 0, 0, 0];


    quizData.forEach(
        q => {

            if (
                Number.isInteger(q.answer) &&
                q.answer >= 0 &&
                q.answer <= 3
            ) {

                distribution[q.answer]++;

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