// ==========================================
// QUIZ CHALLENGE BANGLADESH
// Web Quiz Engine - Version 1.1
// 31 Questions + 15 Second Timer
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
options: ["কলা", "আম", "কাঁঠাল", "লিচু"],
answer: 2,
explanation: "কাঁঠাল বাংলাদেশের জাতীয় ফল।"
},

{
question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
options: ["শাপলা", "গোলাপ", "বেলি", "জবা"],
answer: 0,
explanation: "শাপলা বাংলাদেশের জাতীয় ফুল।"
},

{
question: "বাংলাদেশের জাতীয় পাখি কোনটি?",
options: ["কোকিল", "ময়ূর", "শালিক", "দোয়েল"],
answer: 3,
explanation: "দোয়েল বাংলাদেশের জাতীয় পাখি।"
},

{
question: "বাংলাদেশের জাতীয় পশু কোনটি?",
options: ["হরিণ", "রয়েল বেঙ্গল টাইগার", "হাতি", "মহিষ"],
answer: 1,
explanation: "রয়েল বেঙ্গল টাইগার বাংলাদেশের জাতীয় পশু।"
},

{
question: "বাংলাদেশের রাজধানী কোনটি?",
options: ["ঢাকা", "রাজশাহী", "খুলনা", "চট্টগ্রাম"],
answer: 0,
explanation: "ঢাকা বাংলাদেশের রাজধানী।"
},

{
question: "বাংলাদেশের মুদ্রার নাম কী?",
options: ["দিনার", "ডলার", "টাকা", "রুপি"],
answer: 2,
explanation: "বাংলাদেশের সরকারি মুদ্রার নাম টাকা।"
},

{
question: "বাংলাদেশের জাতীয় বৃক্ষ কোনটি?",
options: ["কাঁঠালগাছ", "আমগাছ", "বটগাছ", "নারিকেলগাছ"],
answer: 1,
explanation: "আমগাছ বাংলাদেশের জাতীয় বৃক্ষ হিসেবে স্বীকৃত। উদ্ভিদ ও কৃষি-সম্পর্কিত সরকারি প্রকাশনাতেও mango-কে Bangladesh-এর national tree বলা হয়েছে।"
},

{
question: "বাংলাদেশের স্বাধীনতা দিবস কবে?",
options: ["২১ ফেব্রুয়ারি", "১৪ এপ্রিল", "১৬ ডিসেম্বর", "২৬ মার্চ"],
answer: 3,
explanation: "২৬ মার্চ বাংলাদেশে স্বাধীনতা দিবস হিসেবে পালিত হয়।"
},

{
question: "বাংলাদেশের বিজয় দিবস কবে?",
options: ["২৬ মার্চ", "২১ ফেব্রুয়ারি", "১৬ ডিসেম্বর", "১৫ আগস্ট"],
answer: 2,
explanation: "১৬ ডিসেম্বর বাংলাদেশে বিজয় দিবস।"
},

{
question: "আন্তর্জাতিক মাতৃভাষা দিবস কোন তারিখে পালিত হয়?",
options: ["২১ ফেব্রুয়ারি", "১৬ ডিসেম্বর", "২৬ মার্চ", "১৪ এপ্রিল"],
answer: 0,
explanation: "২১ ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে পালিত হয়।"
},

{
question: "বাংলাদেশের জাতীয় সংগীতের নাম কী?",
options: ["চল চল চল", "আমার সোনার বাংলা", "বাংলার মাটি বাংলার জল", "ধনধান্য পুষ্পভরা"],
answer: 1,
explanation: "রবীন্দ্রনাথ ঠাকুরের ‘আমার সোনার বাংলা’ বাংলাদেশের জাতীয় সংগীত।"
},

{
question: "বাংলাদেশের জাতীয় কবি কে?",
options: ["শামসুর রাহমান", "রবীন্দ্রনাথ ঠাকুর", "জসীমউদ্দীন", "কাজী নজরুল ইসলাম"],
answer: 3,
explanation: "কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি।"
},

{
question: "বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত কোনটি?",
options: ["পারকি", "কক্সবাজার", "কুয়াকাটা", "পতেঙ্গা"],
answer: 1,
explanation: "কক্সবাজার বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত হিসেবে পরিচিত।"
},

{
question: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন কোনটি?",
options: ["আমাজন বন", "লাওয়াছড়া বন", "সুন্দরবন", "ভাওয়াল বন"],
answer: 2,
explanation: "সুন্দরবন বিশ্বের বৃহত্তম সংলগ্ন ম্যানগ্রোভ বন।"
},

{
question: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ কোনটি?",
options: ["সেন্ট মার্টিন দ্বীপ", "ভোলা দ্বীপ", "সন্দ্বীপ", "কুতুবদিয়া"],
answer: 0,
explanation: "সেন্ট মার্টিন দ্বীপ বাংলাদেশের একমাত্র প্রবাল দ্বীপ।"
},

{
question: "পদ্মা সেতু কোন নদীর ওপর নির্মিত?",
options: ["মেঘনা", "যমুনা", "কর্ণফুলী", "পদ্মা"],
answer: 3,
explanation: "পদ্মা সেতু পদ্মা নদীর ওপর নির্মিত।"
},

{
question: "বাংলাদেশের আয়তনে বৃহত্তম জেলা কোনটি?",
options: ["সিলেট", "খুলনা", "চট্টগ্রাম", "রাঙামাটি"],
answer: 3,
explanation: "রাঙামাটি আয়তনে বাংলাদেশের বৃহত্তম জেলা।"
},

{
question: "বাংলাদেশের আয়তনে ক্ষুদ্রতম জেলা কোনটি?",
options: ["মুন্সীগঞ্জ", "নারায়ণগঞ্জ", "ঝালকাঠি", "মেহেরপুর"],
answer: 1,
explanation: "নারায়ণগঞ্জ আয়তনে বাংলাদেশের ক্ষুদ্রতম জেলা।"
},

{
question: "বাংলাদেশের প্রধান সমুদ্রবন্দর কোনটি?",
options: ["চট্টগ্রাম", "নারায়ণগঞ্জ", "মোংলা", "পায়রা"],
answer: 0,
explanation: "চট্টগ্রাম বন্দর বাংলাদেশের প্রধান ও বৃহত্তম সমুদ্রবন্দর।"
},

{
question: "বাংলাদেশের জাতীয় মসজিদ কোনটি?",
options: ["ষাট গম্বুজ মসজিদ", "চকবাজার শাহী মসজিদ", "বায়তুল মোকাররম", "তারা মসজিদ"],
answer: 2,
explanation: "বায়তুল মোকাররম বাংলাদেশের জাতীয় মসজিদ।"
},

{
question: "জাতীয় শহীদ মিনার মূলত কোন আন্দোলনের স্মৃতির সঙ্গে সম্পর্কিত?",
options: ["স্বাধীনতা আন্দোলন", "ভাষা আন্দোলন", "ছয় দফা আন্দোলন", "স্বদেশি আন্দোলন"],
answer: 1,
explanation: "জাতীয় শহীদ মিনার ভাষা আন্দোলনের শহীদদের স্মরণে নির্মিত।"
},

{
question: "জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত?",
options: ["টঙ্গী", "গাজীপুর", "নারায়ণগঞ্জ", "সাভার"],
answer: 3,
explanation: "জাতীয় স্মৃতিসৌধ ঢাকার অদূরে সাভারে অবস্থিত।"
},

{
question: "বাংলাদেশের মুক্তিযুদ্ধ কত মাস স্থায়ী হয়েছিল?",
options: ["প্রায় ৯ মাস", "প্রায় ৬ মাস", "প্রায় ১২ মাস", "প্রায় ৩ মাস"],
answer: 0,
explanation: "বাংলাদেশের মুক্তিযুদ্ধ ১৯৭১ সালের ২৬ মার্চ থেকে ১৬ ডিসেম্বর পর্যন্ত প্রায় নয় মাস স্থায়ী হয়।"
},

{
question: "বাংলাদেশের সংবিধান কার্যকর হয় কবে?",
options: ["৪ নভেম্বর ১৯৭২", "১০ জানুয়ারি ১৯৭২", "১৬ ডিসেম্বর ১৯৭২", "২৬ মার্চ ১৯৭১"],
answer: 2,
explanation: "বাংলাদেশের সংবিধান ১৯৭২ সালের ১৬ ডিসেম্বর কার্যকর হয়।"
},

{
question: "জামদানি কোন ধরনের ঐতিহ্যের জন্য বিখ্যাত?",
options: ["কাঠশিল্প", "মৃৎশিল্প", "ধাতুশিল্প", "বস্ত্রশিল্প"],
answer: 3,
explanation: "জামদানি সূক্ষ্ম নকশার ঐতিহ্যবাহী বস্ত্রশিল্পের জন্য বিখ্যাত।"
},

{
question: "সুন্দরবন ইউনেস্কোর কোন ধরনের বিশ্ব ঐতিহ্যের অন্তর্ভুক্ত?",
options: ["সাংস্কৃতিক বিশ্ব ঐতিহ্য", "প্রাকৃতিক বিশ্ব ঐতিহ্য", "ভাষাগত ঐতিহ্য", "শিল্প ঐতিহ্য"],
answer: 1,
explanation: "বাংলাদেশের সুন্দরবন ইউনেস্কোর প্রাকৃতিক বিশ্ব ঐতিহ্যের তালিকায় রয়েছে।"
},

{
question: "বাংলাদেশের জাতীয় মাছ কোনটি?",
options: ["রুই", "কাতলা", "ইলিশ", "চিংড়ি"],
answer: 2,
explanation: "ইলিশ বাংলাদেশের জাতীয় মাছ।"
},

{
question: "বাংলাদেশের জাতীয় খেলা কোনটি?",
options: ["কাবাডি", "ফুটবল", "ক্রিকেট", "হকি"],
answer: 0,
explanation: "কাবাডি বাংলাদেশের জাতীয় খেলা।"
},

{
question: "বাংলাদেশের চা-বাগানের জন্য কোন অঞ্চল বিশেষভাবে পরিচিত?",
options: ["ফরিদপুর", "যশোর", "বরিশাল", "সিলেট"],
answer: 3,
explanation: "সিলেট অঞ্চল বাংলাদেশের চা-বাগানের জন্য বিশেষভাবে পরিচিত।"
},

{
question: "বাংলাদেশের প্রধান রপ্তানি পণ্য কোনটি?",
options: ["পাট", "তৈরি পোশাক", "চামড়া", "চা"],
answer: 1,
explanation: "তৈরি পোশাক বাংলাদেশের প্রধান রপ্তানি পণ্যগুলোর মধ্যে সবচেয়ে গুরুত্বপূর্ণ।"
},

{
question: "বাংলাদেশের স্বাধীনতার ঘোষণার বছর কোনটি?",
options: ["১৯৭১", "১৯৭২", "১৯৬৯", "১৯৭০"],
answer: 0,
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
                    Score: <span id="score">${score}</span>/${quizData.length}
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