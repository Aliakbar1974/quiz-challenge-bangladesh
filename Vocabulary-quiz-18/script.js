
"use strict";

// ============================================================
// ENGLISH VOCABULARY QUIZ 18
// 14 Questions | Learning Mode + Exam Mode
// 15 Seconds per Question
// ============================================================

// Facebook post URL
const FACEBOOK_POST_URL =
    "https://www.facebook.com/photo/?fbid=122121882567435742&set=a.122102731923435742";

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
// QUIZ DATA
// answer: 0 = A, 1 = B, 2 = C, 3 = D
// ============================================================

const quizData = [
    {
        question: 'What is the meaning of "Limpid"?',
        options: [
            "Muddy",
            "Clear and transparent",
            "Complex",
            "Heavy"
        ],
        answer: 1,
        explanation: "Limpid means completely clear and transparent.",
        example: "We could see the fish swimming in the limpid stream."
    },
    {
        question: 'What is the meaning of "Invariable"?',
        options: [
            "Unpredictable",
            "Temporary",
            "Never changing",
            "Frequent"
        ],
        answer: 2,
        explanation: "Invariable means never changing, constant, or consistent.",
        example: "His invariable good humor put everyone at ease."
    },
    {
        question: 'What is the meaning of "Intrepid"?',
        options: [
            "Fearful",
            "Tired",
            "Fearless and adventurous",
            "Cautious"
        ],
        answer: 2,
        explanation: "Intrepid means fearless, brave, and adventurous.",
        example: "The intrepid explorer journeyed into the heart of the jungle."
    },
    {
        question: 'What is the meaning of "Intricate"?',
        options: [
            "Simple",
            "Very complicated or detailed",
            "Smooth",
            "Short"
        ],
        answer: 1,
        explanation: "Intricate means very complicated or detailed.",
        example: "The watchmaker repaired the intricate mechanism with patience."
    },
    {
        question: 'What is the meaning of "Imminent"?',
        options: [
            "Distant",
            "Unlikely",
            "Past",
            "About to happen soon"
        ],
        answer: 3,
        explanation: "Imminent means about to happen very soon.",
        example: "The dark clouds indicated that rain was imminent."
    },
    {
        question: 'What is the meaning of "Furtive"?',
        options: [
            "Open",
            "Honest",
            "Loud",
            "Secretive or stealthy"
        ],
        answer: 3,
        explanation: "Furtive describes an action done secretly to avoid notice or attention.",
        example: "He cast a furtive glance over his shoulder."
    },
    {
        question: 'What is the meaning of "Eradicate"?',
        options: [
            "To completely destroy or remove",
            "To create",
            "To support",
            "To postpone"
        ],
        answer: 0,
        explanation: "Eradicate means to destroy completely or put an end to something.",
        example: "Vaccination programs helped eradicate the disease."
    },
    {
        question: 'What is the meaning of "Expound"?',
        options: [
            "To present and explain in detail",
            "To hide",
            "To shorten",
            "To confuse"
        ],
        answer: 0,
        explanation: "Expound means to present and explain a theory or idea in detail.",
        example: "The professor expounded his new economic theory during the lecture."
    },
    {
        question: 'What is the meaning of "Exultant"?',
        options: [
            "Sad",
            "Triumphantly happy",
            "Anxious",
            "Bored"
        ],
        answer: 1,
        explanation: "Exultant means feeling or showing triumphant joy or delight.",
        example: "The exultant crowd cheered as their team won the trophy."
    },
    {
        question: 'What is the meaning of "Equitable"?',
        options: [
            "Fair and impartial",
            "Biased",
            "Expensive",
            "Unequal"
        ],
        answer: 0,
        explanation: "Equitable means fair, reasonable, and impartial.",
        example: "They reached an equitable agreement that satisfied both parties."
    },
    {
        question: 'What is the meaning of "Congeal"?',
        options: [
            "To melt",
            "To evaporate",
            "To become thick or solid",
            "To dissolve"
        ],
        answer: 2,
        explanation: "Congeal means to become thick or solid, especially by cooling.",
        example: "The fat began to congeal on top of the cold soup."
    },
    {
        question: 'What is the meaning of "Congenial"?',
        options: [
            "Pleasant and agreeable",
            "Hostile",
            "Rude",
            "Strict"
        ],
        answer: 0,
        explanation: "Congenial means pleasant, friendly, or suited to one's tastes.",
        example: "They worked together in a very congenial atmosphere."
    },
    {
        question: 'What is the meaning of "Credulous"?',
        options: [
            "Skeptical",
            "Wise",
            "Stubborn",
            "Too ready to believe things"
        ],
        answer: 3,
        explanation: "Credulous means too ready to believe things, even when they may not be true.",
        example: "She was credulous enough to believe his wild stories."
    },
    {
        question: 'What is the meaning of "Arraign"?',
        options: [
            "To praise",
            "To call before a court to answer charges",
            "To forgive",
            "To reward"
        ],
        answer: 1,
        explanation: "Arraign means to bring someone before a court to answer a criminal charge.",
        example: "The suspect will be arraigned in court tomorrow morning."
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

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const correctMessage = document.getElementById("correct-message");
const wrongMessage = document.getElementById("wrong-message");
const exampleText = document.getElementById("example-text");
const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");
const statusElement = document.getElementById("status");

// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) quizScreen.style.display = "none";
if (resultScreen) resultScreen.style.display = "none";
if (feedbackElement) feedbackElement.style.display = "none";

// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {
    if (mode !== "learning" && mode !== "exam") {
        console.error("Invalid quiz mode:", mode);
        return;
    }

    selectedMode = mode;
    currentQuestion = 0;
    score = 0;
    answered = false;
    clearInterval(timer);

    if (startScreen) startScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";

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

    if (questionNumber) {
        questionNumber.textContent = currentQuestion + 1;
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (progressBar) {
        progressBar.style.width =
            ((currentQuestion + 1) / quizData.length) * 100 + "%";
    }

    if (questionElement) {
        questionElement.textContent = q.question;
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (feedbackElement) {
        feedbackElement.style.display = "none";
    }

    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.innerHTML = "";

    const oldNextButton = document.getElementById("next-question-btn");
    if (oldNextButton) oldNextButton.remove();

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.type = "button";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const optionText = document.createElement("span");
        optionText.className = "option-text";
        optionText.textContent = option;

        button.appendChild(letter);
        button.appendChild(optionText);

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });

    if (selectedMode === "exam") {
        timeLeft = 15;
        updateTimer();

        timer = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    } else if (timerElement) {
        timerElement.textContent = "∞";
        timerElement.classList.remove("timer-danger");
    }
}

// ============================================================
// SHOW EXAMPLE AND EXPLANATION
// ============================================================

function showFeedbackContent(q) {
    if (!exampleText) return;

    const exampleHeading = document.createElement("strong");
    exampleHeading.textContent = "Example:";

    const exampleParagraph = document.createElement("p");
    exampleParagraph.textContent = q.example;

    const explanationHeading = document.createElement("strong");
    explanationHeading.textContent = "Explanation:";

    const explanationParagraph = document.createElement("p");
    explanationParagraph.textContent = q.explanation;

    exampleText.replaceChildren(
        exampleHeading,
        exampleParagraph,
        explanationHeading,
        explanationParagraph
    );
}

// ============================================================
// UPDATE TIMER
// ============================================================

function updateTimer() {
    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 5) {
        timerElement.classList.add("timer-danger");
    } else {
        timerElement.classList.remove("timer-danger");
    }
}

// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(selectedIndex, clickedButton) {
    if (answered) return;

    answered = true;
    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".option-btn")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;

        if (clickedButton) {
            clickedButton.classList.add("correct");
        }

        playSound("correct");

        if (correctMessage) {
            correctMessage.textContent = "✓ Correct Answer!";
        }

        if (wrongMessage) {
            wrongMessage.textContent = "";
        }

        if (selectedMode === "learning" && feedbackElement) {
            feedbackElement.style.display = "block";
            showFeedbackContent(q);
        }
    } else {
        if (clickedButton) {
            clickedButton.classList.add("wrong");
        }

        if (buttons[q.answer]) {
            buttons[q.answer].classList.add("correct");
        }

        playSound("wrong");

        if (wrongMessage) {
            wrongMessage.textContent = "✗ Wrong Answer!";
        }

        if (correctMessage) {
            correctMessage.textContent =
                "Correct Answer: " + q.options[q.answer];
        }

        if (feedbackElement) {
            feedbackElement.style.display = "block";
        }

        showFeedbackContent(q);
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

    const q = quizData[currentQuestion];
    const buttons = optionsElement
        ? optionsElement.querySelectorAll(".option-btn")
        : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) {
        buttons[q.answer].classList.add("correct");
    }

    playSound("tryAgain");

    if (wrongMessage) {
        wrongMessage.textContent = "⏰ Time's Up!";
    }

    if (correctMessage) {
        correctMessage.textContent =
            "Correct Answer: " + q.options[q.answer];
    }

    if (feedbackElement) {
        feedbackElement.style.display = "block";
    }

    showFeedbackContent(q);
    showNextButton();
}

// ============================================================
// NEXT BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");
    nextButton.id = "next-question-btn";
    nextButton.className = "next-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "Next Question →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "Show Result 🎉";
        nextButton.addEventListener("click", showResult);
    }

    const quizContainer = quizScreen
        ? quizScreen.querySelector(".quiz-container")
        : null;

    if (quizContainer) {
        quizContainer.appendChild(nextButton);
    } else if (quizScreen) {
        quizScreen.appendChild(nextButton);
    }
}

// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {
    clearInterval(timer);

    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "block";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const percentage = Math.round((score / quizData.length) * 100);

    if (scoreElement) {
        scoreElement.textContent = `${score} / ${quizData.length}`;
    }

    if (percentageElement) {
        percentageElement.textContent = `${percentage}%`;
    }

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent =
                "🏆 Excellent! Outstanding performance!";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent =
                "🌟 Very Good! Keep improving your Vocabulary.";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent =
                "👍 Good Try! Keep practicing regularly.";
            playSound("complete");
        } else {
            resultMessage.textContent =
                "📚 Keep Learning! Try Again and improve your score.";
            playSound("tryAgain");
        }
    }

    let socialBox = document.getElementById("social-message");

    if (!socialBox && resultScreen) {
        const resultCard = resultScreen.querySelector(".result-card");

        if (resultCard) {
            socialBox = document.createElement("div");
            socialBox.id = "social-message";
            socialBox.className = "social-message";
            resultCard.appendChild(socialBox);
        }
    }

    if (socialBox) {
        socialBox.textContent =
            "❤️ Did you enjoy the quiz? Like our Facebook post, " +
            "comment your score, share the quiz with your friends, " +
            "and follow our page for more vocabulary quizzes.";

        socialBox.style.display = "block";
    }

    setupFacebookButton();
}

// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (!FACEBOOK_POST_URL) {
        alert("Facebook post link is not available.");
        return;
    }

    window.location.assign(FACEBOOK_POST_URL);
}

function setupFacebookButton() {
    const facebookButton = document.getElementById("facebook-btn");
    if (!facebookButton) return;

    facebookButton.onclick = function () {
        returnToFacebook();
    };
}

// ============================================================
// RELOAD QUIZ
// ============================================================

function reloadQuiz() {
    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";

    if (statusElement) statusElement.textContent = "";

    if (timerElement) {
        timerElement.textContent = "15";
        timerElement.classList.remove("timer-danger");
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (questionNumber) {
        questionNumber.textContent = "1";
    }

    if (totalQuestions) {
        totalQuestions.textContent = quizData.length;
    }

    if (optionsElement) optionsElement.innerHTML = "";
    if (feedbackElement) feedbackElement.style.display = "none";

    playSound("start");
}

// ============================================================
// INITIALIZE FACEBOOK BUTTON
// ============================================================

setupFacebookButton();

// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];

    quizData.forEach(q => {
        if (
            Number.isInteger(q.answer) &&
            q.answer >= 0 &&
            q.answer <= 3
        ) {
            distribution[q.answer]++;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );

    const invalidQuestions = quizData.filter(q =>
        !Array.isArray(q.options) ||
        q.options.length !== 4 ||
        !Number.isInteger(q.answer) ||
        q.answer < 0 ||
        q.answer > 3 ||
        !q.options[q.answer] ||
        !q.example ||
        !q.explanation
    );

    if (invalidQuestions.length > 0) {
        console.error("Quiz data validation errors:", invalidQuestions);
    } else {
        console.log("Quiz data validation passed.");
    }
})();
