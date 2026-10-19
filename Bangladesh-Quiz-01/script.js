// ==========================================
// QUIZ CHALLENGE BANGLADESH
// Web Quiz Engine - Version 1.1
// 30 Questions + 15 Second Timer
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
question: "বাংলাদেশের জাতীয় ফল কোনটি?",
options: ["কাঁঠাল", "লিচু", "কলা", "আম"],
answer: 0,
explanation: "কাঁঠাল বাংলাদেশের জাতীয় ফল।"
},

{
question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
options: ["গোলাপ", "শাপলা", "জবা", "বেলি"],
answer: 1,
explanation: "শাপলা বাংলাদেশের জাতীয় ফুল।"
},

{
question: "বাংলাদেশের জাতীয় পাখি কোনটি?",
options: ["শালিক", "কোকিল", "দোয়েল", "ময়ূর"],
answer: 2,
explanation: "দোয়েল বাংলাদেশের জাতীয় পাখি।"
},

{
question: "বাংলাদেশের জাতীয় পশু কোনটি?",
options: ["হরিণ", "মহিষ", "হাতি", "রয়েল বেঙ্গল টাইগার"],
answer: 3,
explanation: "রয়েল বেঙ্গল টাইগার বাংলাদেশের জাতীয় পশু।"
},

{
question: "বাংলাদেশের রাজধানী কোনটি?",
options: ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা"],
answer: 0,
explanation: "ঢাকা বাংলাদেশের রাজধানী।"
},

{
question: "বাংলাদেশের মুদ্রার নাম কী?",
options: ["দিনার", "টাকা", "রুপি", "ডলার"],
answer: 1,
explanation: "বাংলাদেশের সরকারি মুদ্রার নাম টাকা।"
},

{
question: "বাংলাদেশের জাতীয় বৃক্ষ কোনটি?",
options: ["নারিকেলগাছ", "কাঁঠালগাছ", "বটগাছ", "আমগাছ"],
answer: 2,
explanation: "বটগাছ বাংলাদেশের জাতীয় বৃক্ষ।"
},

{
question: "বাংলাদেশের স্বাধীনতা দিবস কবে?",
options: ["২১ ফেব্রুয়ারি", "১৬ ডিসেম্বর", "১৪ এপ্রিল", "২৬ মার্চ"],
answer: 3,
explanation: "২৬ মার্চ বাংলাদেশে স্বাধীনতা দিবস হিসেবে পালিত হয়।"
},

{
question: "বাংলাদেশের বিজয় দিবস কবে?",
options: ["১৬ ডিসেম্বর", "১৫ আগস্ট", "২৬ মার্চ", "২১ ফেব্রুয়ারি"],
answer: 0,
explanation: "১৬ ডিসেম্বর বাংলাদেশে বিজয় দিবস।"
},

{
question: "আন্তর্জাতিক মাতৃভাষা দিবস কোন তারিখে পালিত হয়?",
options: ["১৬ ডিসেম্বর", "২১ ফেব্রুয়ারি", "১৪ এপ্রিল", "২৬ মার্চ"],
answer: 1,
explanation: "২১ ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে পালিত হয়।"
},

{
question: "বাংলাদেশের জাতীয় সংগীতের নাম কী?",
options: ["ধনধান্য পুষ্পভরা", "চল চল চল", "আমার সোনার বাংলা", "বাংলার মাটি বাংলার জল"],
answer: 2,
explanation: "রবীন্দ্রনাথ ঠাকুরের ‘আমার সোনার বাংলা’ বাংলাদেশের জাতীয় সংগীত।"
},

{
question: "বাংলাদেশের জাতীয় কবি কে?",
options: ["শামসুর রাহমান", "জসীমউদ্দীন", "রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম"],
answer: 3,
explanation: "কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি।"
},

{
question: "বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত কোনটি?",
options: ["কক্সবাজার", "পতেঙ্গা", "পারকি", "কুয়াকাটা"],
answer: 0,
explanation: "কক্সবাজার বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত হিসেবে পরিচিত।"
},

{
question: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন কোনটি?",
options: ["আমাজন বন", "সুন্দরবন", "ভাওয়াল বন", "লাওয়াছড়া বন"],
answer: 1,
explanation: "সুন্দরবন বিশ্বের বৃহত্তম সংলগ্ন ম্যানগ্রোভ বন।"
},

{
question: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ কোনটি?",
options: ["কুতুবদিয়া", "ভোলা দ্বীপ", "সেন্ট মার্টিন দ্বীপ", "সন্দ্বীপ"],
answer: 2,
explanation: "সেন্ট মার্টিন দ্বীপ বাংলাদেশের একমাত্র প্রবাল দ্বীপ।"
},

{
question: "পদ্মা সেতু কোন নদীর ওপর নির্মিত?",
options: ["মেঘনা", "কর্ণফুলী", "যমুনা", "পদ্মা"],
answer: 3,
explanation: "পদ্মা সেতু পদ্মা নদীর ওপর নির্মিত।"
},

{
question: "বাংলাদেশের আয়তনে বৃহত্তম জেলা কোনটি?",
options: ["রাঙামাটি", "চট্টগ্রাম", "সিলেট", "খুলনা"],
answer: 0,
explanation: "রাঙামাটি আয়তনে বাংলাদেশের বৃহত্তম জেলা।"
},

{
question: "বাংলাদেশের আয়তনে ক্ষুদ্রতম জেলা কোনটি?",
options: ["মুন্সীগঞ্জ", "নারায়ণগঞ্জ", "মেহেরপুর", "ঝালকাঠি"],
answer: 1,
explanation: "নারায়ণগঞ্জ আয়তনে বাংলাদেশের ক্ষুদ্রতম জেলা।"
},

{
question: "বাংলাদেশের প্রধান সমুদ্রবন্দর কোনটি?",
options: ["পায়রা", "নারায়ণগঞ্জ", "চট্টগ্রাম", "মোংলা"],
answer: 2,
explanation: "চট্টগ্রাম বন্দর বাংলাদেশের প্রধান ও বৃহত্তম সমুদ্রবন্দর।"
},

{
question: "বাংলাদেশের জাতীয় মসজিদ কোনটি?",
options: ["ষাট গম্বুজ মসজিদ", "তারা মসজিদ", "চকবাজার শাহী মসজিদ", "বায়তুল মোকাররম"],
answer: 3,
explanation: "বায়তুল মোকাররম বাংলাদেশের জাতীয় মসজিদ।"
},

{
question: "জাতীয় শহীদ মিনার মূলত কোন আন্দোলনের স্মৃতির সঙ্গে সম্পর্কিত?",
options: ["ভাষা আন্দোলন", "স্বদেশি আন্দোলন", "স্বাধীনতা আন্দোলন", "ছয় দফা আন্দোলন"],
answer: 0,
explanation: "জাতীয় শহীদ মিনার ভাষা আন্দোলনের শহীদদের স্মরণে নির্মিত।"
},

{
question: "জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত?",
options: ["টঙ্গী", "সাভার", "নারায়ণগঞ্জ", "গাজীপুর"],
answer: 1,
explanation: "জাতীয় স্মৃতিসৌধ ঢাকার অদূরে সাভারে অবস্থিত।"
},

{
question: "বাংলাদেশের মুক্তিযুদ্ধ কত মাস স্থায়ী হয়েছিল?",
options: ["প্রায় ৩ মাস", "প্রায় ৬ মাস", "প্রায় ৯ মাস", "প্রায় ১২ মাস"],
answer: 2,
explanation: "বাংলাদেশের মুক্তিযুদ্ধ ১৯৭১ সালের ২৬ মার্চ থেকে ১৬ ডিসেম্বর পর্যন্ত প্রায় নয় মাস স্থায়ী হয়।"
},

{
question: "বাংলাদেশের সংবিধান কার্যকর হয় কবে?",
options: ["৪ নভেম্বর ১৯৭২", "২৬ মার্চ ১৯৭১", "১০ জানুয়ারি ১৯৭২", "১৬ ডিসেম্বর ১৯৭২"],
answer: 3,
explanation: "বাংলাদেশের সংবিধান ১৯৭২ সালের ১৬ ডিসেম্বর কার্যকর হয়।"
},

{
question: "জামদানি কোন ধরনের ঐতিহ্যের জন্য বিখ্যাত?",
options: ["বস্ত্রশিল্প", "ধাতুশিল্প", "কাঠশিল্প", "মৃৎশিল্প"],
answer: 0,
explanation: "জামদানি সূক্ষ্ম নকশার ঐতিহ্যবাহী বস্ত্রশিল্পের জন্য বিখ্যাত।"
},

{
question: "সুন্দরবন ইউনেস্কোর কোন ধরনের বিশ্ব ঐতিহ্যের অন্তর্ভুক্ত?",
options: ["সাংস্কৃতিক বিশ্ব ঐতিহ্য", "প্রাকৃতিক বিশ্ব ঐতিহ্য", "শিল্প ঐতিহ্য", "ভাষাগত ঐতিহ্য"],
answer: 1,
explanation: "বাংলাদেশের সুন্দরবন ইউনেস্কোর প্রাকৃতিক বিশ্ব ঐতিহ্যের তালিকায় রয়েছে।"
},

{
question: "বাংলাদেশের জাতীয় মাছ কোনটি?",
options: ["চিংড়ি", "রুই", "ইলিশ", "কাতলা"],
answer: 2,
explanation: "ইলিশ বাংলাদেশের জাতীয় মাছ।"
},

{
question: "বাংলাদেশের জাতীয় খেলা কোনটি?",
options: ["ফুটবল", "হকি", "ক্রিকেট", "কাবাডি"],
answer: 3,
explanation: "কাবাডি বাংলাদেশের জাতীয় খেলা।"
},

{
question: "বাংলাদেশের চা-বাগানের জন্য কোন অঞ্চল বিশেষভাবে পরিচিত?",
options: ["সিলেট", "বরিশাল", "ফরিদপুর", "যশোর"],
answer: 0,
explanation: "সিলেট অঞ্চল বাংলাদেশের চা-বাগানের জন্য বিশেষভাবে পরিচিত।"
},

{
question: "বাংলাদেশের প্রধান রপ্তানি পণ্য কোনটি?",
options: ["পাট", "তৈরি পোশাক", "চা", "চামড়া"],
answer: 1,
explanation: "তৈরি পোশাক বাংলাদেশের প্রধান রপ্তানি পণ্যগুলোর মধ্যে সবচেয়ে গুরুত্বপূর্ণ।"
},

{
question: "বাংলাদেশের স্বাধীনতার ঘোষণার বছর কোনটি?",
options: ["১৯৭০", "১৯৭২", "১৯৭১", "১৯৬৯"],
answer: 2,
explanation: "বাংলাদেশের স্বাধীনতার ঘোষণা ১৯৭১ সালে দেওয়া হয়।"
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
            ⏰ সময় শেষ!
        </div>

        <p>
            সঠিক উত্তর:
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
                ✔ সঠিক উত্তর!
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
                ✘ ভুল উত্তর!
            </div>

            <p>
                সঠিক উত্তর:
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
        message = "Excellent! অসাধারণ ফলাফল!";
    }
    else if (percentage >= 60) {
        message = "Very Good! খুব ভালো!";
    }
    else if (percentage >= 40) {
        message = "Good Try! আরও একটু অনুশীলন করুন।";
    }
    else {
        message = "Keep Learning! আবার চেষ্টা করুন।";
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

            <div class="result-actions" style="margin-top:20px;">
                <button onclick="window.location.assign('https://aliakbar1974.github.io/Quiz-Challenge-Bangladesh-Website/bangladesh-quizzes.html')">
                    📚 More Bangladesh Quizzes
                </button>

                <button onclick="window.location.assign('https://aliakbar1974.github.io/Quiz-Challenge-Bangladesh-Website/')">
                    🏠 Back to Home
                </button>

                <button onclick="window.location.assign('https://www.facebook.com/QuizChallengeBangladesh')">
                    ↩️ Return to Facebook
                </button>

                <p style="margin-top:15px;">
                    👍 Enjoyed the quiz? Visit our Facebook Page and share your score.
                </p>
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