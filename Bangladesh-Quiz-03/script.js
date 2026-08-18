// ==========================================
// QUIZ CHALLENGE BANGLADESH
// Web Quiz Engine - Version 1.1
// 30 Questions + 15 Second Timer
// ==========================================

// ==========================================
// SOUND ENGINE
// ==========================================

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
const quizData = [
    {
        question: "১৯৬৬ সালের ছয় দফা প্রথম কোন শহরে আনুষ্ঠানিকভাবে উপস্থাপন করা হয়?",
        options: [
            "করাচি",
            "লাহোর",
            "ঢাকা",
            "রাওয়ালপিন্ডি"
        ],
        answer: 1,
        explanation: "১৯৬৬ সালের ফেব্রুয়ারিতে লাহোরে অনুষ্ঠিত বিরোধী দলগুলোর সম্মেলনে বঙ্গবন্ধু শেখ মুজিবুর রহমান ঐতিহাসিক ছয় দফা কর্মসূচি উপস্থাপন করেন।"
    },

    {
        question: "আগরতলা ষড়যন্ত্র মামলা কোন সালে দায়ের করা হয়?",
        options: [
            "১৯৬৭",
            "১৯৬৯",
            "১৯৬৮",
            "১৯৬৬"
        ],
        answer: 2,
        explanation: "আগরতলা ষড়যন্ত্র মামলা ১৯৬৮ সালে দায়ের করা হয়। মামলাটির সরকারি নাম ছিল State vs Sheikh Mujibur Rahman and Others."
    },

    {
        question: "বাংলাদেশের সংবিধান গণপরিষদে কবে গৃহীত হয়?",
        options: [
            "৪ নভেম্বর ১৯৭২",
            "১৬ ডিসেম্বর ১৯৭২",
            "২৬ মার্চ ১৯৭৩",
            "১০ জানুয়ারি ১৯৭২"
        ],
        answer: 0,
        explanation: "বাংলাদেশের সংবিধান ৪ নভেম্বর ১৯৭২ সালে গণপরিষদে গৃহীত হয় এবং ১৬ ডিসেম্বর ১৯৭২ সালে কার্যকর হয়।"
    },

    {
        question: "বাংলাদেশের প্রথম জাতীয় সংসদ নির্বাচন অনুষ্ঠিত হয় কবে?",
        options: [
            "১৬ ডিসেম্বর ১৯৭২",
            "২৬ মার্চ ১৯৭৩",
            "১৫ আগস্ট ১৯৭৩",
            "৭ মার্চ ১৯৭৩"
        ],
        answer: 3,
        explanation: "বাংলাদেশের প্রথম জাতীয় সংসদ নির্বাচন অনুষ্ঠিত হয় ৭ মার্চ ১৯৭৩ সালে।"
    },

    {
        question: "বাংলাদেশ জাতিসংঘের সদস্যপদ লাভ করে কোন তারিখে?",
        options: [
            "২৬ মার্চ ১৯৭৪",
            "১৬ ডিসেম্বর ১৯৭৪",
            "১৭ সেপ্টেম্বর ১৯৭৪",
            "২১ ফেব্রুয়ারি ১৯৭৫"
        ],
        answer: 2,
        explanation: "বাংলাদেশ ১৭ সেপ্টেম্বর ১৯৭৪ সালে জাতিসংঘের সদস্যপদ লাভ করে।"
    },

    {
        question: "ঢাকা বিশ্ববিদ্যালয়ের প্রথম উপাচার্য কে ছিলেন?",
        options: [
            "ড. এ. এফ. রহমান",
            "স্যার পি. জে. হার্টগ",
            "ড. মুহম্মদ শহীদুল্লাহ",
            "স্যার আশুতোষ মুখার্জি"
        ],
        answer: 1,
        explanation: "স্যার পি. জে. হার্টগ ছিলেন ঢাকা বিশ্ববিদ্যালয়ের প্রথম উপাচার্য। তিনি ১৯২১ সালে বিশ্ববিদ্যালয়ের প্রথম উপাচার্য হিসেবে দায়িত্ব গ্রহণ করেন।"
    },

    {
        question: "ঢাকা বিশ্ববিদ্যালয় যাত্রা শুরু করার সময় কয়টি অনুষদ ছিল?",
        options: [
            "৫টি",
            "৪টি",
            "৬টি",
            "৩টি"
        ],
        answer: 3,
        explanation: "ঢাকা বিশ্ববিদ্যালয় ১৯২১ সালে তিনটি অনুষদ—কলা, বিজ্ঞান এবং আইন—নিয়ে যাত্রা শুরু করে।"
    },

    {
        question: "বাংলাদেশের জাতীয় জাদুঘর কোথায় অবস্থিত?",
        options: [
            "শাহবাগ, ঢাকা",
            "আগারগাঁও, ঢাকা",
            "রমনা, ঢাকা",
            "লালবাগ, ঢাকা"
        ],
        answer: 0,
        explanation: "বাংলাদেশের জাতীয় জাদুঘর ঢাকার শাহবাগে অবস্থিত"
    },

    {
        question: "জাতীয় স্মৃতিসৌধের নকশাকার কে?",
        options: [
            "হামিদুর রহমান",
            "মাজহারুল ইসলাম",
            "সৈয়দ মাইনুল হোসেন",
            "লুই আই. কান"
        ],
        answer: 2,
        explanation: "সাভারের জাতীয় স্মৃতিসৌধের মূল নকশা করেন স্থপতি সৈয়দ মাইনুল হোসেন।"
    },

    {
        question: "কেন্দ্রীয় শহীদ মিনারের বর্তমান মূল নকশার সঙ্গে কোন স্থপতির নাম সবচেয়ে বেশি যুক্ত?",
        options: [
            "মাজহারুল ইসলাম",
            "লুই কান",
            "সৈয়দ মাইনুল হোসেন",
            "হামিদুর রহমান"
        ],
        answer: 3,
        explanation: "কেন্দ্রীয় শহীদ মিনারের মূল নকশার সঙ্গে স্থপতি হামিদুর রহমানের নাম বিশেষভাবে যুক্ত।"
    },

    {
        question: "বাংলা একাডেমি আনুষ্ঠানিকভাবে প্রতিষ্ঠিত হয় কোন সালে?",
        options: [
            "১৯৫৪",
            "১৯৫৫",
            "১৯৫২",
            "১৯৫৬"
        ],
        answer: 1,
        explanation: "বাংলা একাডেমি ১৯৫৫ সালে প্রতিষ্ঠিত হয়। বাংলা ভাষা, সাহিত্য ও সংস্কৃতির বিকাশে প্রতিষ্ঠানটি গুরুত্বপূর্ণ ভূমিকা পালন করে।"
    },

    {
        question: "লালবাগ দুর্গের নির্মাণকাজ শুরু করেছিলেন কে?",
        options: [
            "মুহাম্মদ আজম শাহ",
            "শায়েস্তা খান",
            "মীর জুমলা",
            "ইসলাম খান"
        ],
        answer: 0,
        explanation: "মুঘল সম্রাট আওরঙ্গজেবের পুত্র মুহাম্মদ আজম শাহ ১৬৭৮ সালে লালবাগ দুর্গের নির্মাণকাজ শুরু করেন।"
    },

    {
        question: "পাহাড়পুর বৌদ্ধবিহার বা সোমপুর মহাবিহার নির্মাণের সঙ্গে কোন পাল সম্রাটের নাম যুক্ত?",
        options: [
            "মহীপাল",
            "রামপাল",
            "গোপাল",
            "ধর্মপাল"
        ],
        answer: 3,
        explanation: "পাহাড়পুরের সোমপুর মহাবিহার নির্মাণের সঙ্গে পাল সম্রাট ধর্মপালের নাম ঐতিহাসিকভাবে যুক্ত।"
    },

    {
        question: "পাহাড়পুর বৌদ্ধবিহার UNESCO World Heritage Site হিসেবে স্বীকৃতি পায় কোন সালে?",
        options: [
            "১৯৯১",
            "১৯৮৩",
            "১৯৮৫",
            "১৯৯৭"
        ],
        answer: 2,
        explanation: "পাহাড়পুরের সোমপুর মহাবিহার ১৯৮৫ সালে UNESCO World Heritage Site হিসেবে স্বীকৃতি লাভ করে।"
    },

    {
        question: "ঐতিহাসিক মসজিদ নগরী বাগেরহাট UNESCO World Heritage List-এ অন্তর্ভুক্ত হয় কোন সালে?",
        options: [
            "১৯৮৫",
            "১৯৯৭",
            "২০০১",
            "১৯৮৩"
        ],
        answer: 0,
        explanation: "বাগেরহাটের ঐতিহাসিক মসজিদ নগরী ১৯৮৫ সালে UNESCO World Heritage List-এ অন্তর্ভুক্ত হয়।"
    },

    {
        question: "বাংলাদেশের কোন বিশ্ব ঐতিহ্য স্থানটি প্রাকৃতিক (Natural) শ্রেণির?",
        options: [
            "বাগেরহাট",
            "সুন্দরবন",
            "পাহাড়পুর",
            "ময়নামতি"
        ],
        answer: 1,
        explanation: "বাংলাদেশের UNESCO World Heritage Sites-এর মধ্যে সুন্দরবন প্রাকৃতিক বিশ্ব ঐতিহ্য স্থান। বাগেরহাট ও পাহাড়পুর সাংস্কৃতিক ঐতিহ্য হিসেবে স্বীকৃত।"
    },

    {
        question: "ময়নামতির প্রাচীন প্রত্নতাত্ত্বিক অঞ্চল কোন প্রাচীন জনপদের সঙ্গে সম্পর্কিত?",
        options: [
            "সমতট",
            "গৌড়",
            "বরেন্দ্র",
            "হরিকেল"
        ],
        answer: 0,
        explanation: "কুমিল্লার ময়নামতি অঞ্চল প্রাচীন সমতট জনপদের গুরুত্বপূর্ণ রাজনৈতিক ও সাংস্কৃতিক কেন্দ্রগুলোর একটি ছিল।"
    },

    {
        question: "কান্তজিউ মন্দির কোন জেলায় অবস্থিত?",
        options: [
            "রাজশাহী",
            "নওগাঁ",
            "ঠাকুরগাঁও",
            "দিনাজপুর"
        ],
        answer: 3,
        explanation: "ঐতিহাসিক কান্তজিউ বা কান্তজির মন্দির দিনাজপুর জেলার কাহারোল উপজেলায় অবস্থিত।"
    },

    {
        question: "ষাট গম্বুজ মসজিদের সঙ্গে ঐতিহাসিকভাবে কার নাম সবচেয়ে বেশি যুক্ত?",
        options: [
            "খান জাহান আলী",
            "মীর জুমলা",
            "শাহ সুজা",
            "ইসলাম খান"
        ],
        answer: 0,
        explanation: "বাগেরহাটের ষাট গম্বুজ মসজিদের নির্মাণ ও ঐতিহাসিক স্থাপত্য ঐতিহ্যের সঙ্গে খান জাহান আলীর নাম ঘনিষ্ঠভাবে যুক্ত।"
    },

    {
        question: "আহসান মঞ্জিল নির্মাণের উদ্যোগের সঙ্গে কার নাম বিশেষভাবে যুক্ত?",
        options: [
            "খাজা নাজিমুদ্দিন",
            "নবাব আবদুল গনি",
            "নবাব সলিমুল্লাহ",
            "খাজা আতীকুল্লাহ"
        ],
        answer: 1,
        explanation: "ঢাকার আহসান মঞ্জিলের নির্মাণের সঙ্গে নবাব আবদুল গনির নাম বিশেষভাবে যুক্ত। পরবর্তীতে তাঁর পুত্র খাজা আহসানউল্লাহর নামে প্রাসাদটির নামকরণ করা হয়।"
    },

    {
        question: "পানাম নগর কোন ঐতিহাসিক অঞ্চলের অংশ?",
        options: [
            "ময়নামতি",
            "পাহাড়পুর",
            "সোনারগাঁও",
            "মহাস্থানগড়"
        ],
        answer: 2,
        explanation: "পানাম নগর নারায়ণগঞ্জের সোনারগাঁও অঞ্চলের ঐতিহাসিক স্থাপত্য ঐতিহ্যের অংশ।"
    },

    {
        question: "কাপ্তাই হ্রদ মূলত কোন অবকাঠামো নির্মাণের ফলে সৃষ্টি হয়?",
        options: [
            "কাপ্তাই বাঁধ",
            "তিস্তা ব্যারেজ",
            "ফারাক্কা বাঁধ",
            "মুহুরী বাঁধ"
        ],
        answer: 0,
        explanation: "কর্ণফুলী নদীর ওপর কাপ্তাই বাঁধ নির্মাণের ফলে বৃহৎ কাপ্তাই হ্রদের সৃষ্টি হয়।"
    },

    {
        question: "টাঙ্গুয়ার হাওর কোন জেলায় অবস্থিত?",
        options: [
            "হবিগঞ্জ",
            "সুনামগঞ্জ",
            "কিশোরগঞ্জ",
            "নেত্রকোনা"
        ],
        answer: 1,
        explanation: "টাঙ্গুয়ার হাওর সুনামগঞ্জ জেলার একটি গুরুত্বপূর্ণ জলাভূমি ও জীববৈচিত্র্যপূর্ণ এলাকা।"
    },

    {
        question: "হাকালুকি হাওর প্রধানত কোন দুই জেলার মধ্যে বিস্তৃত?",
        options: [
            "সুনামগঞ্জ ও হবিগঞ্জ",
            "কিশোরগঞ্জ ও নেত্রকোনা",
            "সিলেট ও মৌলভীবাজার",
            "ব্রাহ্মণবাড়িয়া ও হবিগঞ্জ"
        ],
        answer: 2,
        explanation: "হাকালুকি হাওর মূলত সিলেট ও মৌলভীবাজার জেলার বিস্তীর্ণ এলাকা জুড়ে অবস্থিত।"
    },

    {
        question: "রাতারগুল সোয়াম্প ফরেস্ট কোন জেলায় অবস্থিত?",
        options: [
            "সিলেট",
            "সুনামগঞ্জ",
            "মৌলভীবাজার",
            "হবিগঞ্জ"
        ],
        answer: 0,
        explanation: "রাতারগুল সোয়াম্প ফরেস্ট সিলেট জেলার গোয়াইনঘাট উপজেলায় অবস্থিত। এটি বাংলাদেশের অন্যতম পরিচিত মিঠাপানির জলাবন।"
    },

    {
        question: "মাধবকুণ্ড জলপ্রপাত কোন জেলায় অবস্থিত?",
        options: [
            "বান্দরবান",
            "রাঙামাটি",
            "সিলেট",
            "মৌলভীবাজার"
        ],
        answer: 3,
        explanation: "মাধবকুণ্ড জলপ্রপাত মৌলভীবাজার জেলার বড়লেখা উপজেলায় অবস্থিত।"
    },

    {
        question: "কুয়াকাটা সমুদ্রসৈকত কোন জেলায় অবস্থিত?",
        options: [
            "বরগুনা",
            "পটুয়াখালী",
            "ভোলা",
            "নোয়াখালী"
        ],
        answer: 1,
        explanation: "কুয়াকাটা সমুদ্রসৈকত পটুয়াখালী জেলার কলাপাড়া উপজেলায় অবস্থিত।"
    },

    {
        question: "বাংলাদেশের সঙ্গে স্থলসীমান্ত রয়েছে কয়টি দেশের?",
        options: [
            "২টি",
            "৩টি",
            "১টি",
            "৪টি"
        ],
        answer: 0,
        explanation: "বাংলাদেশের স্থলসীমান্ত রয়েছে দুটি দেশের সঙ্গে—ভারত ও মিয়ানমার।"
    },

    {
        question: "পদ্মা সেতুর মূল সেতুর দৈর্ঘ্য কত?",
        options: [
            "৫.১৫ কিলোমিটার",
            "৬.৫০ কিলোমিটার",
            "৬.১৫ কিলোমিটার",
            "৭.১৫ কিলোমিটার"
        ],
        answer: 2,
        explanation: "পদ্মা সেতুর মূল সেতুর দৈর্ঘ্য ৬.১৫ কিলোমিটার।"
    },

    {
        question: "বাংলাদেশের প্রথম কৃত্রিম উপগ্রহ ‘বঙ্গবন্ধু-১’ কোন সালে উৎক্ষেপণ করা হয়?",
        options: [
            "২০১৭",
            "২০১৯",
            "২০১৬",
            "২০১৮"
        ],
        answer: 3,
        explanation: "বাংলাদেশের প্রথম কৃত্রিম উপগ্রহ বঙ্গবন্ধু-১ ২০১৮ সালে উৎক্ষেপণ করা হয়।"
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