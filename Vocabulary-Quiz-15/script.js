// ============================================================
// ENGLISH VOCABULARY QUIZ 15
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122114075667435742&set=a.122102731923435742";


// ============================================================
// SOUND ENGINE
// ============================================================

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


// ============================================================
// ENGLISH VOCABULARY QUIZ
// 20 Questions
// Vocabulary Set
// ============================================================

const quizData = [

    {
        id: "VOC361",
        question: "What is the meaning of the word 'Abject'?",
        options: [
            "Extremely miserable or degraded",
            "Highly intelligent and skillful",
            "Completely uncertain",
            "Very generous and kind"
        ],
        answer: 0,
        explanation: "'Abject' means extremely miserable, hopeless, or degraded. It can also describe something showing complete lack of pride or dignity.",
        example: "The refugees were living in abject poverty."
    },

    {
        id: "VOC362",
        question: "What is the meaning of the word 'Adroit'?",
        options: [
            "Careless and irresponsible",
            "Unwilling to cooperate",
            "Difficult to understand",
            "Skillful and clever in using one's hands or dealing with situations"
        ],
        answer: 3,
        explanation: "'Adroit' means skillful, clever, or quick in handling situations or performing tasks.",
        example: "She was adroit at solving difficult problems."
    },

    {
        id: "VOC363",
        question: "What is the meaning of the word 'Avarice'?",
        options: [
            "Extreme greed for wealth or material gain",
            "A strong desire to help others",
            "A feeling of deep sadness",
            "A desire for knowledge"
        ],
        answer: 0,
        explanation: "'Avarice' means an extreme and selfish desire for wealth or material possessions.",
        example: "His avarice made him willing to sacrifice his friendships for money."
    },

    {
        id: "VOC364",
        question: "What is the meaning of the word 'Blandishment'?",
        options: [
            "A serious accusation",
            "A sudden disaster",
            "Flattery or gentle persuasion used to influence someone",
            "A formal agreement"
        ],
        answer: 2,
        explanation: "'Blandishment' means flattering or persuasive words used to influence someone.",
        example: "He used blandishments to persuade the manager to approve his request."
    },

    {
        id: "VOC365",
        question: "What is the meaning of the word 'Castigate'?",
        options: [
            "To praise someone publicly",
            "To criticize or punish someone severely",
            "To explain something clearly",
            "To forgive someone completely"
        ],
        answer: 1,
        explanation: "'Castigate' means to criticize or reprimand someone severely, often because of wrongdoing.",
        example: "The teacher castigated the students for cheating."
    },

    {
        id: "VOC366",
        question: "What is the meaning of the word 'Cataclysm'?",
        options: [
            "A peaceful agreement",
            "A minor disagreement",
            "A period of economic growth",
            "A large-scale disaster or violent upheaval"
        ],
        answer: 3,
        explanation: "'Cataclysm' refers to a sudden, violent, and destructive event that causes major change or damage.",
        example: "The earthquake was a devastating cataclysm for the region."
    },

    {
        id: "VOC367",
        question: "What is the meaning of the word 'Clemency'?",
        options: [
            "Strict punishment",
            "Strong disagreement",
            "Mercy or leniency shown toward someone",
            "A demand for justice"
        ],
        answer: 2,
        explanation: "'Clemency' means mercy or leniency, especially when shown toward someone who has been sentenced or punished.",
        example: "The prisoner appealed to the president for clemency."
    },

    {
        id: "VOC368",
        question: "What is the meaning of the word 'Cogent'?",
        options: [
            "Clear, logical, and convincing",
            "Confusing and unclear",
            "Unimportant and trivial",
            "Emotionally painful"
        ],
        answer: 0,
        explanation: "'Cogent' means clear, logical, and convincing. A cogent argument is easy to understand and persuasive.",
        example: "She presented a cogent argument in favor of the proposal."
    },

    {
        id: "VOC369",
        question: "What is the meaning of the word 'Concurrence'?",
        options: [
            "A refusal to cooperate",
            "A sudden change of mind",
            "A formal accusation",
            "Agreement or consistency with another opinion or decision"
        ],
        answer: 3,
        explanation: "'Concurrence' means agreement or being in harmony with another person's opinion, decision, or action.",
        example: "The judge expressed his concurrence with the court's decision."
    },

    {
        id: "VOC370",
        question: "What is the meaning of the word 'Conscientious'?",
        options: [
            "Extremely ambitious",
            "Careful, responsible, and guided by a strong sense of duty",
            "Uncertain about everything",
            "Unwilling to work"
        ],
        answer: 1,
        explanation: "'Conscientious' describes someone who is careful, responsible, and diligent in doing what is right or required.",
        example: "She is a conscientious employee who always completes her work on time."
    },

    {
        id: "VOC371",
        question: "What is the meaning of the word 'Conjecture'?",
        options: [
            "A proven scientific fact",
            "A formal legal decision",
            "An opinion or conclusion based on incomplete information",
            "A detailed explanation"
        ],
        answer: 2,
        explanation: "'Conjecture' means an opinion or conclusion formed without sufficient evidence or complete information.",
        example: "His theory remains a conjecture because there is not enough evidence."
    },

    {
        id: "VOC372",
        question: "What is the meaning of the word 'Cryptic'?",
        options: [
            "Very obvious and straightforward",
            "Extremely large and powerful",
            "Pleasant and entertaining",
            "Mysterious or difficult to understand"
        ],
        answer: 3,
        explanation: "'Cryptic' means mysterious, puzzling, or difficult to understand because the meaning is not clearly expressed.",
        example: "The detective received a cryptic message from an unknown person."
    },

    {
        id: "VOC373",
        question: "What is the meaning of the word 'Culpable'?",
        options: [
            "Deserving blame or responsible for wrongdoing",
            "Completely innocent",
            "Highly respected",
            "Unable to make a decision"
        ],
        answer: 0,
        explanation: "'Culpable' means responsible for a wrongdoing or deserving blame for an offense.",
        example: "The investigation found the company culpable for the safety violations."
    },

    {
        id: "VOC374",
        question: "What is the meaning of the word 'Deprecate'?",
        options: [
            "To strongly support something",
            "To officially announce something",
            "To make something more complicated",
            "To express disapproval of or criticize something"
        ],
        answer: 3,
        explanation: "'Deprecate' means to express disapproval of or criticize something. In technology, 'deprecated' can also mean that a feature is discouraged from future use.",
        example: "The committee deprecated the proposal because it was considered impractical."
    },

    {
        id: "VOC375",
        question: "What is the meaning of the word 'Diffidence'?",
        options: [
            "Excessive confidence",
            "Lack of confidence or self-assurance",
            "Strong determination",
            "Extreme anger"
        ],
        answer: 1,
        explanation: "'Diffidence' means shyness or a lack of confidence in one's own abilities or judgment.",
        example: "Her diffidence prevented her from speaking during the meeting."
    },

    {
        id: "VOC376",
        question: "What is the meaning of the word 'Disseminate'?",
        options: [
            "To hide information",
            "To destroy something completely",
            "To spread information, ideas, or knowledge widely",
            "To reduce the size of something"
        ],
        answer: 2,
        explanation: "'Disseminate' means to spread information, ideas, or knowledge widely among people.",
        example: "The organization uses social media to disseminate important health information."
    },

    {
        id: "VOC377",
        question: "What is the meaning of the word 'Eloquence'?",
        options: [
            "The ability to express ideas fluently and persuasively",
            "The inability to speak clearly",
            "A tendency to avoid people",
            "A lack of knowledge"
        ],
        answer: 0,
        explanation: "'Eloquence' is the ability to express thoughts and ideas clearly, fluently, and persuasively.",
        example: "The speaker impressed the audience with her eloquence."
    },

    {
        id: "VOC378",
        question: "What is the meaning of the word 'Elucidate'?",
        options: [
            "To conceal the truth",
            "To criticize someone severely",
            "To postpone an important decision",
            "To make something clear or easier to understand"
        ],
        answer: 3,
        explanation: "'Elucidate' means to make something clear or explain it in a way that makes it easier to understand.",
        example: "The professor used a simple diagram to elucidate the complex concept."
    },

    {
        id: "VOC379",
        question: "What is the meaning of the word 'Enervate'?",
        options: [
            "To strengthen or encourage",
            "To confuse someone deliberately",
            "To weaken or drain someone of energy",
            "To reward someone generously"
        ],
        answer: 2,
        explanation: "'Enervate' means to weaken someone or reduce their energy, strength, or vitality.",
        example: "The extreme heat enervated the hikers."
    },

    {
        id: "VOC380",
        question: "What is the meaning of the word 'Equivocal'?",
        options: [
            "Completely certain and definite",
            "Extremely generous",
            "Easy to understand",
            "Ambiguous or open to more than one interpretation"
        ],
        answer: 3,
        explanation: "'Equivocal' means ambiguous, unclear, or capable of being understood in more than one way.",
        example: "The politician gave an equivocal answer to the reporter's question."
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