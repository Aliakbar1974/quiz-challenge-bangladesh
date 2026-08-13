// ==========================================
// QUIZ CHALLENGE BANGLADESH
// Web Quiz Engine - Version 1.1
// 30 Questions + 15 Second Timer
// ==========================================

const quizData = [

{
question: "বাংলাদেশের জাতীয় ফল কোনটি?",
options: ["আম", "কাঁঠাল", "লিচু", "কলা"],
answer: 1,
explanation: "কাঁঠাল বাংলাদেশের জাতীয় ফল।"
},

{
question: "বাংলাদেশের জাতীয় ফুল কোনটি?",
options: ["গোলাপ", "জবা", "শাপলা", "বেলি"],
answer: 2,
explanation: "শাপলা বাংলাদেশের জাতীয় ফুল।"
},

{
question: "বাংলাদেশের জাতীয় পাখি কোনটি?",
options: ["দোয়েল", "কোকিল", "ময়ূর", "শালিক"],
answer: 0,
explanation: "দোয়েল বাংলাদেশের জাতীয় পাখি।"
},

{
question: "বাংলাদেশের জাতীয় পশু কোনটি?",
options: ["হাতি", "হরিণ", "রয়েল বেঙ্গল টাইগার", "মহিষ"],
answer: 2,
explanation: "রয়েল বেঙ্গল টাইগার বাংলাদেশের জাতীয় পশু।"
},

{
question: "বাংলাদেশের রাজধানী কোনটি?",
options: ["চট্টগ্রাম", "ঢাকা", "রাজশাহী", "খুলনা"],
answer: 1,
explanation: "ঢাকা বাংলাদেশের রাজধানী।"
},

{
question: "বাংলাদেশের মুদ্রার নাম কী?",
options: ["রুপি", "ডলার", "দিনার", "টাকা"],
answer: 3,
explanation: "বাংলাদেশের সরকারি মুদ্রার নাম টাকা।"
},

{
question: "বাংলাদেশের জাতীয় বৃক্ষ কোনটি?",
options: ["বটগাছ", "আমগাছ", "নারিকেলগাছ", "কাঁঠালগাছ"],
answer: 0,
explanation: "বটগাছ বাংলাদেশের জাতীয় বৃক্ষ।"
},

{
question: "বাংলাদেশের স্বাধীনতা দিবস কবে?",
options: ["২১ ফেব্রুয়ারি", "১৬ ডিসেম্বর", "২৬ মার্চ", "১৪ এপ্রিল"],
answer: 2,
explanation: "২৬ মার্চ বাংলাদেশে স্বাধীনতা দিবস হিসেবে পালিত হয়।"
},

{
question: "বাংলাদেশের বিজয় দিবস কবে?",
options: ["২৬ মার্চ", "১৬ ডিসেম্বর", "২১ ফেব্রুয়ারি", "১৫ আগস্ট"],
answer: 1,
explanation: "১৬ ডিসেম্বর বাংলাদেশে বিজয় দিবস।"
},

{
question: "আন্তর্জাতিক মাতৃভাষা দিবস কোন তারিখে পালিত হয়?",
options: ["২৬ মার্চ", "১৬ ডিসেম্বর", "১৪ এপ্রিল", "২১ ফেব্রুয়ারি"],
answer: 3,
explanation: "২১ ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে পালিত হয়।"
},

{
question: "বাংলাদেশের জাতীয় সংগীতের নাম কী?",
options: ["আমার সোনার বাংলা", "ধনধান্য পুষ্পভরা", "চল চল চল", "বাংলার মাটি বাংলার জল"],
answer: 0,
explanation: "রবীন্দ্রনাথ ঠাকুরের ‘আমার সোনার বাংলা’ বাংলাদেশের জাতীয় সংগীত।"
},

{
question: "বাংলাদেশের জাতীয় কবি কে?",
options: ["জসীমউদ্দীন", "কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "শামসুর রাহমান"],
answer: 1,
explanation: "কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি।"
},

{
question: "বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত কোনটি?",
options: ["কুয়াকাটা", "পতেঙ্গা", "কক্সবাজার", "পারকি"],
answer: 2,
explanation: "কক্সবাজার বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত হিসেবে পরিচিত।"
},

{
question: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন কোনটি?",
options: ["সুন্দরবন", "আমাজন বন", "ভাওয়াল বন", "লাওয়াছড়া বন"],
answer: 0,
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
options: ["যমুনা", "পদ্মা", "মেঘনা", "কর্ণফুলী"],
answer: 1,
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
options: ["নারায়ণগঞ্জ", "মেহেরপুর", "ঝালকাঠি", "মুন্সীগঞ্জ"],
answer: 0,
explanation: "নারায়ণগঞ্জ আয়তনে বাংলাদেশের ক্ষুদ্রতম জেলা।"
},

{
question: "বাংলাদেশের প্রধান সমুদ্রবন্দর কোনটি?",
options: ["মোংলা", "পায়রা", "চট্টগ্রাম", "নারায়ণগঞ্জ"],
answer: 2,
explanation: "চট্টগ্রাম বন্দর বাংলাদেশের প্রধান ও বৃহত্তম সমুদ্রবন্দর।"
},

{
question: "বাংলাদেশের জাতীয় মসজিদ কোনটি?",
options: ["বায়তুল মোকাররম", "ষাট গম্বুজ মসজিদ", "তারা মসজিদ", "চকবাজার শাহী মসজিদ"],
answer: 0,
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
options: ["সাভার", "গাজীপুর", "টঙ্গী", "নারায়ণগঞ্জ"],
answer: 0,
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
options: ["২৬ মার্চ ১৯৭১", "১৬ ডিসেম্বর ১৯৭২", "১০ জানুয়ারি ১৯৭২", "৪ নভেম্বর ১৯৭২"],
answer: 1,
explanation: "বাংলাদেশের সংবিধান ১৯৭২ সালের ১৬ ডিসেম্বর কার্যকর হয়।"
},

{
question: "জামদানি কোন ধরনের ঐতিহ্যের জন্য বিখ্যাত?",
options: ["মৃৎশিল্প", "বস্ত্রশিল্প", "ধাতুশিল্প", "কাঠশিল্প"],
answer: 1,
explanation: "জামদানি সূক্ষ্ম নকশার ঐতিহ্যবাহী বস্ত্রশিল্পের জন্য বিখ্যাত।"
},

{
question: "সুন্দরবন ইউনেস্কোর কোন ধরনের বিশ্ব ঐতিহ্যের অন্তর্ভুক্ত?",
options: ["প্রাকৃতিক বিশ্ব ঐতিহ্য", "সাংস্কৃতিক বিশ্ব ঐতিহ্য", "শিল্প ঐতিহ্য", "ভাষাগত ঐতিহ্য"],
answer: 0,
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
options: ["ক্রিকেট", "ফুটবল", "হকি", "কাবাডি"],
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
options: ["চা", "চামড়া", "তৈরি পোশাক", "পাট"],
answer: 2,
explanation: "তৈরি পোশাক বাংলাদেশের প্রধান রপ্তানি পণ্যগুলোর মধ্যে সবচেয়ে গুরুত্বপূর্ণ।"
},

{
question: "বাংলাদেশের স্বাধীনতার ঘোষণার বছর কোনটি?",
options: ["১৯৬৯", "১৯৭০", "১৯৭১", "১৯৭২"],
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

    clearInterval(timer);

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

            <div class="timer-box">
                Time: <span id="timer">15</span>
            </div>

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

    startTimer();
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


// ==========================================
// RESULT SCREEN
// ==========================================

function showResult() {

    clearInterval(timer);

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

            <button onclick="location.reload()">
                🔄 Play Again
            </button>

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
                startQuiz("learning");
            };

        }

        if (text.includes("EXAM")) {

            button.onclick = function () {
                startQuiz("exam");
            };

        }

    });

});