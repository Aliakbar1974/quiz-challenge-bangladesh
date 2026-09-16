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
        question: "What is the meaning of 'Throng'?",
        options: [
            "A large, crowded group of people",
            "A quiet and empty place",
            "A small group of friends",
            "A formal meeting"
        ],
        answer: 0,
        explanation: "<strong>Throng</strong> means a large, densely packed crowd or group of people.",
        example: "A throng of fans gathered outside the stadium."
    },

    {
        id: "VOC362",
        question: "What is the meaning of 'Tolerance'?",
        options: [
            "The ability to control others",
            "The willingness to accept differences or difficulties",
            "A strong desire for success",
            "A refusal to change"
        ],
        answer: 1,
        explanation: "<strong>Tolerance</strong> means the willingness or ability to accept differences, opinions, or difficult situations without reacting negatively.",
        example: "Tolerance is important in a diverse society."
    },

    {
        id: "VOC363",
        question: "What does 'Touchy' mean?",
        options: [
            "Very cheerful and friendly",
            "Extremely confident",
            "Easily offended or upset",
            "Very careful and patient"
        ],
        answer: 2,
        explanation: "<strong>Touchy</strong> means easily offended, upset, or annoyed by something.",
        example: "He is touchy about comments concerning his work."
    },

    {
        id: "VOC364",
        question: "What is the meaning of 'Tranquil'?",
        options: [
            "Noisy and crowded",
            "Dangerous and uncertain",
            "Fast and energetic",
            "Calm, peaceful, and quiet"
        ],
        answer: 3,
        explanation: "<strong>Tranquil</strong> means calm, peaceful, and free from disturbance.",
        example: "We spent the afternoon beside a tranquil lake."
    },

    {
        id: "VOC365",
        question: "What does 'Transform' mean?",
        options: [
            "To change something significantly",
            "To destroy something completely",
            "To hide something carefully",
            "To repeat something exactly"
        ],
        answer: 0,
        explanation: "<strong>Transform</strong> means to change something greatly in form, appearance, character, or nature.",
        example: "Technology has transformed the way people communicate."
    },

    {
        id: "VOC366",
        question: "What is the meaning of 'Traverse'?",
        options: [
            "To avoid a place",
            "To travel across or through a place",
            "To build a road",
            "To remain in one place"
        ],
        answer: 1,
        explanation: "<strong>Traverse</strong> means to travel across, over, or through an area.",
        example: "The hikers traversed the mountain before sunset."
    },

    {
        id: "VOC367",
        question: "What does 'Treacherous' mean?",
        options: [
            "Very beautiful and attractive",
            "Easy and comfortable",
            "Dangerous or likely to cause harm",
            "Reliable and trustworthy"
        ],
        answer: 2,
        explanation: "<strong>Treacherous</strong> means dangerous, especially because something appears safe but may cause harm; it can also describe someone who is disloyal or deceitful.",
        example: "The climbers faced treacherous weather conditions."
    },

    {
        id: "VOC368",
        question: "What is the meaning of 'Tributary'?",
        options: [
            "A large ocean",
            "A man-made canal",
            "A river that flows into another river",
            "A lake surrounded by mountains"
        ],
        answer: 3,
        explanation: "<strong>Tributary</strong> is a river or stream that flows into a larger river or body of water.",
        example: "The small river is a tributary of the main river."
    },

    {
        id: "VOC369",
        question: "What does 'Trivial' mean?",
        options: [
            "Of little importance or significance",
            "Extremely difficult",
            "Very expensive",
            "Historically important"
        ],
        answer: 0,
        explanation: "<strong>Trivial</strong> means unimportant, insignificant, or not serious.",
        example: "They wasted time arguing over a trivial matter."
    },

    {
        id: "VOC370",
        question: "What is the meaning of 'Troupe'?",
        options: [
            "A group of soldiers",
            "A group of performers, especially actors or dancers",
            "A group of scientists",
            "A political organization"
        ],
        answer: 1,
        explanation: "<strong>Troupe</strong> means a group of performers, such as actors, dancers, or singers, who work together.",
        example: "The theater troupe performed three shows this week."
    },

    {
        id: "VOC371",
        question: "What does 'Tumult' mean?",
        options: [
            "A peaceful discussion",
            "A period of deep concentration",
            "A state of loud, confused, or violent disturbance",
            "A formal celebration"
        ],
        answer: 2,
        explanation: "<strong>Tumult</strong> means a state of great confusion, disorder, noise, or violent disturbance.",
        example: "The announcement caused tumult among the crowd."
    },

    {
        id: "VOC372",
        question: "What is the meaning of 'Unanimous'?",
        options: [
            "Based on several different opinions",
            "Accepted by most people",
            "Made without discussion",
            "Fully agreed upon by everyone"
        ],
        answer: 3,
        explanation: "<strong>Unanimous</strong> means having complete agreement among all members of a group.",
        example: "The committee reached a unanimous decision."
    },

    {
        id: "VOC373",
        question: "What does 'Uncouth' mean?",
        options: [
            "Lacking good manners or refinement",
            "Highly educated",
            "Very generous",
            "Extremely intelligent"
        ],
        answer: 0,
        explanation: "<strong>Uncouth</strong> means lacking good manners, social grace, or refinement.",
        example: "His uncouth behavior embarrassed his friends."
    },

    {
        id: "VOC374",
        question: "What is the meaning of 'Unsophisticated'?",
        options: [
            "Extremely complicated",
            "Lacking experience, refinement, or worldly knowledge",
            "Highly advanced",
            "Carefully designed"
        ],
        answer: 1,
        explanation: "<strong>Unsophisticated</strong> means lacking experience, refinement, or knowledge of complex matters.",
        example: "The young traveler was unsophisticated and unfamiliar with city life."
    },

    {
        id: "VOC375",
        question: "What does 'Vagabond' mean?",
        options: [
            "A successful businessman",
            "A professional traveler",
            "A person who wanders from place to place without a settled home",
            "A government official"
        ],
        answer: 2,
        explanation: "<strong>Vagabond</strong> means a person who wanders from place to place without a permanent home or regular occupation.",
        example: "The vagabond traveled from village to village."
    },

    {
        id: "VOC376",
        question: "What is the meaning of 'Vanity'?",
        options: [
            "A fear of failure",
            "A desire to help others",
            "A feeling of sadness",
            "Excessive pride in one's appearance or abilities"
        ],
        answer: 3,
        explanation: "<strong>Vanity</strong> means excessive pride in one's appearance, achievements, or abilities.",
        example: "His vanity made him spend hours looking in the mirror."
    },

    {
        id: "VOC377",
        question: "What does 'Vehemence' mean?",
        options: [
            "Great force, intensity, or passion in expression",
            "Calmness and patience",
            "Fear of public speaking",
            "A lack of interest"
        ],
        answer: 0,
        explanation: "<strong>Vehemence</strong> means intense force, passion, or strong emotion in speech or action.",
        example: "She argued with vehemence against the unfair decision."
    },

    {
        id: "VOC378",
        question: "What is the meaning of 'Vicarious'?",
        options: [
            "Done secretly",
            "Experienced through another person rather than directly",
            "Performed without permission",
            "Caused by an accident"
        ],
        answer: 1,
        explanation: "<strong>Vicarious</strong> means experienced indirectly through another person's actions, feelings, or experiences.",
        example: "She experienced vicarious excitement while watching her son compete."
    },

    {
        id: "VOC379",
        question: "What does 'Wayward' mean?",
        options: [
            "Very obedient and disciplined",
            "Extremely successful",
            "Difficult to control or behaving in an unpredictable way",
            "Always willing to cooperate"
        ],
        answer: 2,
        explanation: "<strong>Wayward</strong> means difficult to control, unpredictable, or not following the expected path or behavior.",
        example: "The teacher tried to guide the wayward student."
    },

    {
        id: "VOC380",
        question: "What is the meaning of 'Abhor'?",
        options: [
            "To admire deeply",
            "To tolerate patiently",
            "To understand completely",
            "To hate or detest intensely"
        ],
        answer: 3,
        explanation: "<strong>Abhor</strong> means to hate or detest something intensely.",
        example: "She abhors cruelty to animals."
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