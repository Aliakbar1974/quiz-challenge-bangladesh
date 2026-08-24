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

    // BD070
    {
        question: "‘সোনার তরী’ কাব্যগ্রন্থের রচয়িতা কে?",
        options: [
            "কাজী নজরুল ইসলাম",
            "জীবনানন্দ দাশ",
            "রবীন্দ্রনাথ ঠাকুর",
            "জসীমউদ্দীন"
        ],
        answer: 2,
        explanation: "‘সোনার তরী’ কাব্যগ্রন্থের রচয়িতা রবীন্দ্রনাথ ঠাকুর।"
    },

    // BD071
    {
        question: "‘নকশী কাঁথার মাঠ’ কার রচনা?",
        options: [
            "জসীমউদ্দীন",
            "ফররুখ আহমদ",
            "শামসুর রাহমান",
            "গোলাম মোস্তফা"
        ],
        answer: 0,
        explanation: "‘নকশী কাঁথার মাঠ’ জসীমউদ্দীনের বিখ্যাত কাব্যগ্রন্থ।"
    },

    // BD072
    {
        question: "‘রূপসী বাংলা’ কাব্যগ্রন্থের কবি কে?",
        options: [
            "জীবনানন্দ দাশ",
            "সুকান্ত ভট্টাচার্য",
            "শামসুর রাহমান",
            "নির্মলেন্দু গুণ"
        ],
        answer: 0,
        explanation: "‘রূপসী বাংলা’ কাব্যগ্রন্থের কবি জীবনানন্দ দাশ।"
    },

    // BD073
    {
        question: "‘ছাড়পত্র’ কাব্যগ্রন্থের রচয়িতা কে?",
        options: [
            "সুকান্ত ভট্টাচার্য",
            "কাজী নজরুল ইসলাম",
            "জসীমউদ্দীন",
            "আল মাহমুদ"
        ],
        answer: 0,
        explanation: "‘ছাড়পত্র’ কাব্যগ্রন্থের রচয়িতা সুকান্ত ভট্টাচার্য।"
    },

    // BD074
    {
        question: "‘সাত সাগরের মাঝি’ কাব্যগ্রন্থের রচয়িতা কে?",
        options: [
            "ফররুখ আহমদ",
            "জীবনানন্দ দাশ",
            "গোলাম মোস্তফা",
            "আহসান হাবীব"
        ],
        answer: 0,
        explanation: "‘সাত সাগরের মাঝি’ কাব্যগ্রন্থের রচয়িতা ফররুখ আহমদ।"
    },

    // BD075
    {
        question: "বাংলাদেশের সংবিধানের ৪২ নম্বর অনুচ্ছেদ কোন অধিকারের সঙ্গে সম্পর্কিত?",
        options: [
            "ধর্মীয় স্বাধীনতা",
            "সম্পত্তির অধিকার",
            "পেশার স্বাধীনতা",
            "সংগঠনের স্বাধীনতা"
        ],
        answer: 1,
        explanation: "সংবিধানের ৪২ নম্বর অনুচ্ছেদ নাগরিকের সম্পত্তি অর্জন, ধারণ ও হস্তান্তরের অধিকার সম্পর্কিত।"
    },

    // BD076
    {
        question: "বাংলাদেশের সংবিধানের ৪৩ নম্বর অনুচ্ছেদে কোন দুটি বিষয় সুরক্ষিত হয়েছে?",
        options: [
            "ভোটাধিকার ও সম্পত্তির অধিকার",
            "গৃহের নিরাপত্তা ও যোগাযোগের গোপনীয়তা",
            "ধর্মীয় স্বাধীনতা ও পেশার স্বাধীনতা",
            "সমাবেশ ও সংগঠনের স্বাধীনতা"
        ],
        answer: 1,
        explanation: "৪৩ নম্বর অনুচ্ছেদে গৃহের নিরাপত্তা এবং চিঠিপত্র ও যোগাযোগের গোপনীয়তার অধিকার সুরক্ষিত হয়েছে।"
    },

    // BD077
    {
        question: "মৌলিক অধিকার বলবৎ করার জন্য সংবিধানের ৪৪ অনুচ্ছেদ অনুযায়ী কোন আদালতে যাওয়ার অধিকার নিশ্চিত করা হয়েছে?",
        options: [
            "জেলা জজ আদালত",
            "আপিল বিভাগ",
            "হাইকোর্ট বিভাগ",
            "প্রশাসনিক ট্রাইব্যুনাল"
        ],
        answer: 2,
        explanation: "সংবিধানের ৪৪ অনুচ্ছেদ অনুযায়ী মৌলিক অধিকার বলবৎ করার জন্য হাইকোর্ট বিভাগে যাওয়ার অধিকার নিশ্চিত করা হয়েছে।"
    },

    // BD078
    {
        question: "বাংলাদেশের সংবিধানের ৪৫ নম্বর অনুচ্ছেদ কোন ধরনের আইনের ক্ষেত্রে বিশেষ বিধান সম্পর্কিত?",
        options: [
            "ভূমি আইন",
            "শৃঙ্খলা বাহিনীর সদস্যদের সম্পর্কিত শৃঙ্খলা আইন",
            "কর আইন",
            "নির্বাচন আইন"
        ],
        answer: 1,
        explanation: "৪৫ নম্বর অনুচ্ছেদ শৃঙ্খলা বাহিনীর সদস্যদের ক্ষেত্রে প্রযোজ্য শৃঙ্খলা-সংক্রান্ত আইনের বিশেষ বিধানের সঙ্গে সম্পর্কিত।"
    },

    // BD079
    {
        question: "বাংলাদেশের সংবিধানের ৪৬ নম্বর অনুচ্ছেদে সংসদকে কোন বিষয়ে আইন করার ক্ষমতা দেওয়া হয়েছে?",
        options: [
            "ক্ষতিপূরণ বা indemnity প্রদানের ব্যবস্থা",
            "নতুন জেলা গঠন",
            "জাতীয় বাজেট প্রণয়ন",
            "নির্বাচন কমিশন বিলুপ্ত করা"
        ],
        answer: 0,
        explanation: "সংবিধানের ৪৬ অনুচ্ছেদ সংসদকে নির্দিষ্ট ক্ষেত্রে ক্ষতিপূরণ বা indemnity প্রদানের ব্যবস্থা করার জন্য আইন প্রণয়নের ক্ষমতা দেয়।"
    },

    // BD080
    {
        question: "বাংলাদেশের সংবিধানের ২৬ নম্বর অনুচ্ছেদে মৌলিক অধিকারের সঙ্গে অসঙ্গতিপূর্ণ আইনের ক্ষেত্রে কী বলা হয়েছে?",
        options: [
            "আইনটি সবসময় কার্যকর থাকবে",
            "আইনটি সংশোধন না হওয়া পর্যন্ত কার্যকর থাকবে",
            "অসঙ্গতির পরিমাণে আইনটি বাতিল বা অকার্যকর হবে",
            "শুধু রাষ্ট্রপতি চাইলে আইনটি বাতিল হবে"
        ],
        answer: 2,
        explanation: "মৌলিক অধিকারের সঙ্গে অসঙ্গতিপূর্ণ কোনো আইন অসঙ্গতির পরিমাণে বাতিল বা অকার্যকর বলে গণ্য হবে।"
    },

    // BD081
    {
        question: "বাংলাদেশের জাতীয় সংগীতের ক্ষেত্রে সংবিধানের ৪ অনুচ্ছেদে ‘আমার সোনার বাংলা’-র কতটি লাইন নির্ধারিত হয়েছে?",
        options: [
            "প্রথম ৫ লাইন",
            "প্রথম ৮ লাইন",
            "প্রথম ১০ লাইন",
            "সম্পূর্ণ গান"
        ],
        answer: 2,
        explanation: "সংবিধানের ৪ অনুচ্ছেদ অনুযায়ী ‘আমার সোনার বাংলা’ গানের প্রথম দশ লাইন জাতীয় সংগীত হিসেবে নির্ধারিত।"
    },

    // BD082
    {
        question: "বাংলাদেশের জাতীয় প্রতীকে শাপলার দুই পাশে কী রয়েছে?",
        options: [
            "দুটি ধানের শীষ",
            "দুটি পাটের পাতা",
            "দুটি পদ্মফুল",
            "দুটি আমপাতা"
        ],
        answer: 0,
        explanation: "বাংলাদেশের জাতীয় প্রতীকে শাপলার দুই পাশে দুটি ধানের শীষ রয়েছে।"
    },

    // BD083
    {
        question: "বাংলাদেশের জাতীয় প্রতীকের শাপলার ওপরে কতটি সংযুক্ত পাটের পাতা রয়েছে?",
        options: [
            "২টি",
            "৩টি",
            "৪টি",
            "৫টি"
        ],
        answer: 1,
        explanation: "জাতীয় প্রতীকের শাপলার ওপরে তিনটি সংযুক্ত পাটের পাতা রয়েছে।"
    },

    // BD084
    {
        question: "বাংলাদেশের জাতীয় প্রতীকে পাটের পাতার দুই পাশে মোট কতটি তারা রয়েছে?",
        options: [
            "২টি",
            "৩টি",
            "৪টি",
            "৬টি"
        ],
        answer: 2,
        explanation: "জাতীয় প্রতীকে পাটের পাতার দুই পাশে দুটি করে মোট চারটি তারা রয়েছে।"
    },

    // BD085
    {
        question: "বাংলাদেশের জাতীয় সংগীত, জাতীয় পতাকা ও জাতীয় প্রতীক সম্পর্কিত Presidential Order-এর নম্বর কত?",
        options: [
            "১২৭",
            "১২৮",
            "১৩০",
            "১৩২"
        ],
        answer: 2,
        explanation: "Bangladesh National Anthem, Flag and Emblem Order, 1972 হলো President’s Order No. 130 of 1972।"
    },

    // BD088
    {
        question: "বাংলাদেশের কোন বিভাগটি ২০১৫ সালে নতুন বিভাগ হিসেবে গঠিত হয়?",
        options: [
            "রংপুর বিভাগ",
            "ময়মনসিংহ বিভাগ",
            "বরিশাল বিভাগ",
            "সিলেট বিভাগ"
        ],
        answer: 1,
        explanation: "ময়মনসিংহ বিভাগ ২০১৫ সালে নতুন বিভাগ হিসেবে গঠিত হয়।"
    },

    // BD089
    {
        question: "ময়মনসিংহ বিভাগ গঠনের ফলে কোন চারটি জেলা নিয়ে নতুন বিভাগটি গঠিত হয়?",
        options: [
            "ময়মনসিংহ, জামালপুর, নেত্রকোনা ও শেরপুর",
            "ময়মনসিংহ, টাঙ্গাইল, কিশোরগঞ্জ ও জামালপুর",
            "ময়মনসিংহ, গাজীপুর, শেরপুর ও নেত্রকোনা",
            "ময়মনসিংহ, জামালপুর, টাঙ্গাইল ও শেরপুর"
        ],
        answer: 0,
        explanation: "ময়মনসিংহ, জামালপুর, নেত্রকোনা ও শেরপুর—এই চারটি জেলা নিয়ে ময়মনসিংহ বিভাগ গঠিত হয়।"
    },

    // BD090
    {
        question: "বাংলাদেশের জাতীয় তথ্য বাতায়নের বর্তমান তথ্য অনুযায়ী কোন সংখ্যাটি সঠিক?",
        options: [
            "৮ বিভাগ, ৬৪ জেলা, ৪৯৯ উপজেলা",
            "৮ বিভাগ, ৬৪ জেলা, ৪৯৫ উপজেলা",
            "৮ বিভাগ, ৬২ জেলা, ৪৯৯ উপজেলা",
            "৭ বিভাগ, ৬৪ জেলা, ৪৯৯ উপজেলা"
        ],
        answer: 0,
        explanation: "বর্তমান জাতীয় তথ্য বাতায়নে ৮টি বিভাগ, ৬৪টি জেলা ও ৪৯৯টি উপজেলার তথ্য দেখানো হচ্ছে।"
    },

    // BD092
    {
        question: "বাংলাদেশের রপ্তানি পণ্যের মান ও নিরাপত্তা পরীক্ষার ক্ষেত্রে BSTI-এর পূর্ণরূপ কী?",
        options: [
            "Bangladesh Standards and Testing Institution",
            "Bangladesh Science and Technology Institute",
            "Bangladesh Standard Trade Institute",
            "Bangladesh Testing and Industrial Authority"
        ],
        answer: 0,
        explanation: "BSTI-এর পূর্ণরূপ হলো Bangladesh Standards and Testing Institution।"
    },

    // BD093
    {
        question: "BSTI কোন মন্ত্রণালয়ের অধীন একটি প্রতিষ্ঠান?",
        options: [
            "শিল্প মন্ত্রণালয়",
            "বাণিজ্য মন্ত্রণালয়",
            "বিজ্ঞান ও প্রযুক্তি মন্ত্রণালয়",
            "অর্থ মন্ত্রণালয়"
        ],
        answer: 0,
        explanation: "Bangladesh Standards and Testing Institution (BSTI) শিল্প মন্ত্রণালয়ের অধীন একটি প্রতিষ্ঠান।"
    },

    // BD094
    {
        question: "বাংলাদেশের কৃষিতে সবচেয়ে বেশি জমিতে কোন ফসল চাষ করা হয়?",
        options: [
            "গম",
            "ধান",
            "পাট",
            "ভুট্টা"
        ],
        answer: 1,
        explanation: "বাংলাদেশের কৃষিতে সবচেয়ে বেশি জমিতে ধান চাষ করা হয়।"
    },

    // BD096
    {
        question: "বাংলাদেশের কৃষিতে ‘বোরো’ কোন ধরনের ফসল?",
        options: [
            "ধান",
            "গম",
            "পাট",
            "আখ"
        ],
        answer: 0,
        explanation: "বোরো বাংলাদেশের ধানের একটি গুরুত্বপূর্ণ মৌসুমি ফসল।"
    },

    // BD097
    {
        question: "বাংলাদেশে বোরো ধানের চাষ প্রধানত কোন ঋতুতে হয়?",
        options: [
            "বর্ষাকাল",
            "শীত ও বসন্তকাল",
            "শরৎকাল",
            "বর্ষা ও শরৎকাল"
        ],
        answer: 1,
        explanation: "বোরো ধানের চাষ সাধারণত শীতকাল থেকে শুরু হয়ে বসন্তকালে ফসল কাটার সময় পর্যন্ত চলে।"
    },

    // BD098
    {
        question: "বাংলাদেশের কৃষিতে ‘আমন’ ধান সাধারণত কোন মৌসুমের সঙ্গে সম্পর্কিত?",
        options: [
            "খরিফ মৌসুম",
            "রবি মৌসুম",
            "গ্রীষ্মকালীন মৌসুম",
            "শীতকালীন মৌসুম"
        ],
        answer: 0,
        explanation: "আমন ধান সাধারণত খরিফ মৌসুমের সঙ্গে সম্পর্কিত।"
    },

    // BD100
    {
        question: "বাংলাদেশের চা গবেষণা ও উন্নয়ন কার্যক্রমের সঙ্গে কোন প্রতিষ্ঠানটি সরাসরি যুক্ত?",
        options: [
            "বাংলাদেশ চা গবেষণা ইনস্টিটিউট",
            "বাংলাদেশ কৃষি গবেষণা কাউন্সিল",
            "বাংলাদেশ শিল্প গবেষণা পরিষদ",
            "বাংলাদেশ পাট গবেষণা ইনস্টিটিউট"
        ],
        answer: 0,
        explanation: "বাংলাদেশ চা গবেষণা ইনস্টিটিউট (BTRI) চা শিল্পের গবেষণা ও উন্নয়ন কার্যক্রমের সঙ্গে সরাসরি যুক্ত।"
    },

    // BD101
    {
        question: "বাংলাদেশের পাট গবেষণার প্রধান প্রতিষ্ঠান কোনটি?",
        options: [
            "বাংলাদেশ ধান গবেষণা ইনস্টিটিউট",
            "বাংলাদেশ পাট গবেষণা ইনস্টিটিউট",
            "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট",
            "বাংলাদেশ শিল্প গবেষণা ইনস্টিটিউট"
        ],
        answer: 1,
        explanation: "বাংলাদেশ পাট গবেষণা ইনস্টিটিউট (BJRI) দেশের পাট গবেষণার প্রধান প্রতিষ্ঠান।"
    },

    // BD102
    {
        question: "বাংলাদেশের পাট গবেষণা ইনস্টিটিউটের সংক্ষিপ্ত নাম কোনটি?",
        options: [
            "BARI",
            "BRRI",
            "BJRI",
            "BTRI"
        ],
        answer: 2,
        explanation: "Bangladesh Jute Research Institute-এর সংক্ষিপ্ত নাম BJRI।"
    },

    // BD103
    {
        question: "বাংলাদেশ ধান গবেষণা ইনস্টিটিউটের সংক্ষিপ্ত নাম কী?",
        options: [
            "BRRI",
            "BARI",
            "BJRI",
            "BARC"
        ],
        answer: 0,
        explanation: "Bangladesh Rice Research Institute-এর সংক্ষিপ্ত নাম BRRI।"
    },

    // BD104
    {
        question: "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের সংক্ষিপ্ত নাম কী?",
        options: [
            "BARC",
            "BARI",
            "BRRI",
            "BJRI"
        ],
        answer: 1,
        explanation: "Bangladesh Agricultural Research Institute-এর সংক্ষিপ্ত নাম BARI।"
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