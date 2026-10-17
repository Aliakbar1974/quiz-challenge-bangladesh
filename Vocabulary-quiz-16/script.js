// ============================================================
// ENGLISH Vocabulary QUIZ 16
// 20 Questions
// Learning Mode + Exam Mode
// 15 Seconds per Question
// English-Only Interface
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122121392589435742&set=a.122102731923435742";


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
// ENGLISH Vocabulary QUIZ
// 20 Questions
// Vocabulary Set
// ============================================================




const quizData = [
  {
    id: "VOC261",
    question: "What does 'Erudite' mean?",
    options: ["Extremely careless", "Lacking intelligence", "Highly educated and knowledgeable", "Easily frightened"],
    answer: 2,
    explanation: "'Erudite' means having extensive knowledge gained through study and learning.",
    example: "The erudite professor gave an impressive lecture on ancient history."
  },
  {
    id: "VOC262",
    question: "What is a 'Eulogy'?",
    options: ["A speech praising someone, especially after death", "A formal legal accusation", "A written set of instructions", "A heated disagreement"],
    answer: 0,
    explanation: "A 'eulogy' is a speech or piece of writing that praises someone, often after their death.",
    example: "She delivered a heartfelt eulogy at her grandfather's funeral."
  },
  {
    id: "VOC263",
    question: "What does 'Exacting' mean?",
    options: ["Easy and undemanding", "Talkative and sociable", "Calm and unemotional", "Demanding great care, effort, or precision"],
    answer: 3,
    explanation: "'Exacting' describes something that requires great effort, attention, or precision.",
    example: "The exacting job required patience and careful attention to detail."
  },
  {
    id: "VOC264",
    question: "What does 'Facile' mean?",
    options: ["Unwilling to forgive", "Easily achieved or done, sometimes without enough thought", "Deep and complicated", "Extremely productive"],
    answer: 1,
    explanation: "'Facile' can mean easily achieved, but it can also suggest superficiality or a lack of proper thought.",
    example: "The critic rejected his facile explanation of the complex problem."
  },
  {
    id: "VOC265",
    question: "What is the meaning of 'Forbearance'?",
    options: ["A strong desire for revenge", "The act of making a law", "Patience and self-control, especially when provoked", "The ability to speak fluently"],
    answer: 2,
    explanation: "'Forbearance' means showing patience, restraint, and tolerance toward others.",
    example: "Her forbearance helped her remain calm during the disagreement."
  },
  {
    id: "VOC266",
    question: "What does 'Garrulous' mean?",
    options: ["Quiet and reserved", "Highly educated", "Difficult to understand", "Excessively talkative"],
    answer: 3,
    explanation: "'Garrulous' describes someone who talks a great deal, often about unimportant things.",
    example: "The garrulous passenger chatted throughout the entire journey."
  },
  {
    id: "VOC267",
    question: "What does 'Incisive' mean?",
    options: ["Clear, direct, and analytically sharp", "Unclear and confusing", "Overly flattering", "Slow and unproductive"],
    answer: 0,
    explanation: "'Incisive' describes thinking or expression that is clear, sharp, and effective.",
    example: "The journalist asked incisive questions during the interview."
  },
  {
    id: "VOC268",
    question: "What is an 'Indictment'?",
    options: ["A formal expression of praise", "A promise to obey a law", "A formal accusation of a serious crime", "A rule of good conduct"],
    answer: 2,
    explanation: "An 'indictment' is a formal accusation of a crime, particularly in legal systems that use this procedure.",
    example: "The grand jury issued an indictment against the suspect."
  },
  {
    id: "VOC269",
    question: "What does 'Obsequious' mean?",
    options: ["Calm and emotionally controlled", "Extremely knowledgeable", "Strongly opposed to authority", "Excessively eager to please or obey someone"],
    answer: 3,
    explanation: "'Obsequious' describes excessive submissiveness or eagerness to please someone, often for personal advantage.",
    example: "His obsequious behavior toward the manager made his colleagues uncomfortable."
  },
  {
    id: "VOC270",
    question: "What does 'Phlegmatic' mean?",
    options: ["Easily angered", "Calm and unemotional, even in difficult situations", "Excessively talkative", "Highly ambitious"],
    answer: 1,
    explanation: "'Phlegmatic' describes someone who remains calm and does not easily become excited or upset.",
    example: "Despite the emergency, the phlegmatic doctor remained composed."
  },
  {
    id: "VOC271",
    question: "What does 'Posterity' mean?",
    options: ["People living in the present", "A group of close friends", "A person's ancestors", "Future generations"],
    answer: 3,
    explanation: "'Posterity' refers to the people who will live in future generations.",
    example: "We should protect the environment for posterity."
  },
  {
    id: "VOC272",
    question: "What is a 'Precept'?",
    options: ["A formal accusation", "A rule or principle that guides behavior", "A long and emotional speech", "A feeling of bitterness"],
    answer: 1,
    explanation: "A 'precept' is a rule or principle intended to guide conduct or thought.",
    example: "Honesty is an important precept in ethical leadership."
  },
  {
    id: "VOC273",
    question: "What does 'Profound' mean?",
    options: ["Superficial and shallow", "Easy to understand but unimportant", "Very deep, intense, or significant", "Unwilling to speak"],
    answer: 2,
    explanation: "'Profound' describes something very deep, intense, thoughtful, or significant.",
    example: "The book had a profound effect on her understanding of life."
  },
  {
    id: "VOC274",
    question: "What does 'Prolific' mean?",
    options: ["Producing very little", "Speaking in a confusing way", "Avoiding difficult tasks", "Producing a large amount of work or results"],
    answer: 3,
    explanation: "'Prolific' describes someone or something that produces many works, ideas, or results.",
    example: "The prolific writer published three novels in one year."
  },
  {
    id: "VOC275",
    question: "What does 'Promulgate' mean?",
    options: ["To officially announce or make a law or rule known", "To withdraw a legal rule", "To criticize someone harshly", "To repeat a statement privately"],
    answer: 0,
    explanation: "'Promulgate' means to formally announce or make a law, rule, or idea widely known.",
    example: "The government promulgated new regulations to improve public safety."
  },
  {
    id: "VOC276",
    question: "What does 'Recondite' mean?",
    options: ["Common and familiar", "Difficult to understand because it is specialized or obscure", "Easy to understand", "Widely discussed in public"],
    answer: 1,
    explanation: "'Recondite' describes information or knowledge that is difficult to understand or unfamiliar to most people.",
    example: "The article explored a recondite topic in theoretical physics."
  },
  {
    id: "VOC277",
    question: "What does 'Reiterate' mean?",
    options: ["To reject a proposal formally", "To praise someone publicly", "To say something again for emphasis or clarity", "To approve a law officially"],
    answer: 2,
    explanation: "'Reiterate' means to repeat something, usually to emphasize or clarify it.",
    example: "The teacher had to reiterate the instructions before the exam."
  },
  {
    id: "VOC278",
    question: "What does 'Rancor' mean?",
    options: ["Deep respect and admiration", "Patience during hardship", "A formal public announcement", "Persistent bitterness or resentment"],
    answer: 3,
    explanation: "'Rancor' means long-lasting bitterness or ill will toward someone.",
    example: "Years of rancor prevented the two families from reconciling."
  },
  {
    id: "VOC279",
    question: "What does 'Ratify' mean?",
    options: ["To formally approve an agreement or treaty", "To challenge a decision publicly", "To explain something in detail", "To accuse someone of a crime"],
    answer: 0,
    explanation: "'Ratify' means to give formal approval to an agreement, treaty, or decision.",
    example: "The parliament voted to ratify the international treaty."
  },
  {
    id: "VOC280",
    question: "What does 'Rebut' mean?",
    options: ["To accept an argument without question", "To repeat an idea exactly", "To argue against a claim with evidence or reasoning", "To praise someone warmly"],
    answer: 2,
    explanation: "'Rebut' means to respond to an argument or accusation by presenting evidence or reasoning against it.",
    example: "The lawyer used new evidence to rebut the witness's claim."
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
                "🌟 Very Good! Keep improving your Grammar.";

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