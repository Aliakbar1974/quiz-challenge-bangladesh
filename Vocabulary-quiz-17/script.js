// ============================================================
// ENGLISH Vocabulary QUIZ 17
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
// ENGLISH Vocabulary QUIZ
// 20 Questions
// Vocabulary Set
// ============================================================




const quizData = [
  {
    id: "VOC421",
    question: "What does 'Recluse' mean?",
    options: [
      "A person who travels frequently",
      "A person who enjoys public attention",
      "A person who avoids other people and lives in seclusion",
      "A person who gives legal advice"
    ],
    answer: 2,
    explanation: "'Recluse' refers to someone who lives in seclusion and avoids social contact.",
    example: "The old man lived as a recluse in a small cottage in the hills."
  },
  {
    id: "VOC422",
    question: "What does 'Reconcile' mean?",
    options: [
      "To restore friendly relations or make things consistent",
      "To accuse someone of wrongdoing",
      "To increase a disagreement",
      "To avoid making a decision"
    ],
    answer: 0,
    explanation: "'Reconcile' means to restore friendly relations after a disagreement or to make two ideas or facts compatible.",
    example: "The two friends reconciled after discussing their misunderstanding."
  },
  {
    id: "VOC423",
    question: "What does 'Resolute' mean?",
    options: [
      "Easily confused",
      "Extremely talkative",
      "Unwilling to express an opinion",
      "Firmly determined and unwavering"
    ],
    answer: 3,
    explanation: "'Resolute' describes someone who is determined and does not easily change their decision.",
    example: "She remained resolute in her efforts to complete her education."
  },
  {
    id: "VOC424",
    question: "What is the meaning of 'Sagacity'?",
    options: [
      "A feeling of deep sadness",
      "Wisdom and sound judgment",
      "The ability to speak loudly",
      "A tendency to act carelessly"
    ],
    answer: 1,
    explanation: "'Sagacity' means wisdom, especially the ability to make sensible decisions and judgments.",
    example: "The leader's sagacity helped the team overcome a difficult challenge."
  },
  {
    id: "VOC425",
    question: "What does 'Scrutiny' mean?",
    options: [
      "A formal expression of gratitude",
      "A public celebration",
      "Close and careful examination",
      "A quick and careless glance"
    ],
    answer: 2,
    explanation: "'Scrutiny' means careful and detailed examination of something.",
    example: "The financial records came under close scrutiny."
  },
  {
    id: "VOC426",
    question: "What does 'Sinuous' mean?",
    options: [
      "Having many curves or bends",
      "Straight and without curves",
      "Completely motionless",
      "Extremely rough in texture"
    ],
    answer: 0,
    explanation: "'Sinuous' describes something that has smooth, winding curves or bends.",
    example: "A sinuous path wound through the green forest."
  },
  {
    id: "VOC427",
    question: "What does 'Taciturn' mean?",
    options: [
      "Fond of giving long speeches",
      "Habitually quiet and reserved",
      "Quick to express anger",
      "Eager to please everyone"
    ],
    answer: 1,
    explanation: "'Taciturn' describes a person who tends to speak very little.",
    example: "The taciturn student usually listened carefully rather than joining every conversation."
  },
  {
    id: "VOC428",
    question: "What does 'Transcend' mean?",
    options: [
      "To reduce something gradually",
      "To repeat something exactly",
      "To remain within strict limits",
      "To go beyond ordinary limits or expectations"
    ],
    answer: 3,
    explanation: "'Transcend' means to rise above or go beyond a limit, restriction, or ordinary level.",
    example: "Her achievements transcend the expectations of her early teachers."
  },
  {
    id: "VOC429",
    question: "What does 'Vehemence' mean?",
    options: [
      "Great force, intensity, or passion",
      "A lack of interest or enthusiasm",
      "A state of complete silence",
      "A careful and neutral judgment"
    ],
    answer: 0,
    explanation: "'Vehemence' means intense force or passionate feeling, especially when expressing an opinion or emotion.",
    example: "He defended his proposal with great vehemence."
  },
  {
    id: "VOC430",
    question: "What does 'Vicarious' mean?",
    options: [
      "Experienced directly by oneself",
      "Done without any purpose",
      "Experienced through another person's actions or experiences",
      "Completed with great difficulty"
    ],
    answer: 2,
    explanation: "'Vicarious' describes an experience felt or enjoyed indirectly through another person.",
    example: "She experienced vicarious excitement while watching her son compete."
  },
  {
    id: "VOC431",
    question: "What does 'Surfeit' mean?",
    options: [
      "A serious shortage of supplies",
      "An excessive amount of something",
      "A small and carefully measured amount",
      "A sudden improvement in quality"
    ],
    answer: 1,
    explanation: "'Surfeit' means an excessive quantity of something, often more than is needed or desirable.",
    example: "After a surfeit of rich food, he decided to eat lighter meals."
  },
  {
    id: "VOC432",
    question: "What does 'Supersede' mean?",
    options: [
      "To support an existing system",
      "To restore something damaged",
      "To postpone an important decision",
      "To replace something older or less effective"
    ],
    answer: 3,
    explanation: "'Supersede' means to take the place of something previously used or considered.",
    example: "The new software will supersede the outdated system."
  },
  {
    id: "VOC433",
    question: "What does 'Quell' mean?",
    options: [
      "To encourage a conflict to grow",
      "To make a problem more complicated",
      "To put an end to something, such as unrest or fear",
      "To announce a decision publicly"
    ],
    answer: 2,
    explanation: "'Quell' means to suppress, calm, or bring something such as a disturbance or fear under control.",
    example: "The police worked to quell the unrest in the city."
  },
  {
    id: "VOC434",
    question: "What does 'Proximity' mean?",
    options: [
      "The state of being near or close to something",
      "A great distance between places",
      "A lack of communication",
      "A difference in opinion"
    ],
    answer: 0,
    explanation: "'Proximity' refers to nearness in distance, time, or relationship.",
    example: "The school's proximity to the library makes research convenient."
  },
  {
    id: "VOC435",
    question: "What does 'Perpetual' mean?",
    options: [
      "Lasting for a very short time",
      "Occurring only once",
      "Changing unpredictably every day",
      "Continuing indefinitely or occurring repeatedly"
    ],
    answer: 3,
    explanation: "'Perpetual' means continuing indefinitely or happening repeatedly without an apparent end.",
    example: "The perpetual noise from the construction site disturbed the residents."
  },
  {
    id: "VOC436",
    question: "What does 'Perilous' mean?",
    options: [
      "Comfortable and relaxing",
      "Full of danger or risk",
      "Easy to complete successfully",
      "Reliable and dependable"
    ],
    answer: 1,
    explanation: "'Perilous' describes something dangerous or involving serious risk.",
    example: "The climbers faced a perilous journey across the icy mountain."
  },
  {
    id: "VOC437",
    question: "What does 'Obsequious' mean?",
    options: [
      "Excessively eager to please or obey someone",
      "Firmly independent in every situation",
      "Quiet because of shyness",
      "Honest and direct in communication"
    ],
    answer: 0,
    explanation: "'Obsequious' describes excessive submissiveness or eagerness to please someone, often for personal advantage.",
    example: "His obsequious behavior toward the manager made his colleagues uncomfortable."
  },
  {
    id: "VOC438",
    question: "What does 'Nadir' mean?",
    options: [
      "The highest point of success",
      "A sudden rise in popularity",
      "The lowest point or worst stage",
      "A period of steady improvement"
    ],
    answer: 2,
    explanation: "'Nadir' means the lowest point in a situation or the worst stage of something.",
    example: "The team's performance reached its nadir during the final match of the season."
  },
  {
    id: "VOC439",
    question: "What does 'Malign' mean?",
    options: [
      "To praise someone enthusiastically",
      "To speak about someone in a harmful or defamatory way",
      "To examine something carefully",
      "To approve a proposal officially"
    ],
    answer: 1,
    explanation: "As a verb, 'malign' means to speak harmful or unfair things about someone. As an adjective, it can mean harmful or evil.",
    example: "It is unfair to malign someone's character without reliable evidence."
  },
  {
    id: "VOC440",
    question: "What does 'Lustrous' mean?",
    options: [
      "Dull and lacking brightness",
      "Rough and uneven in appearance",
      "Faded and worn out",
      "Shining or having a soft, attractive sheen"
    ],
    answer: 3,
    explanation: "'Lustrous' describes something that shines or has an attractive, glossy appearance.",
    example: "Her lustrous hair shimmered in the sunlight."
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