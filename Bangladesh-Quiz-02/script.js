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
        question: "বাংলাদেশের সংবিধানের ৪৮ অনুচ্ছেদ মূলত কোন পদ সম্পর্কে?",
        options: [
            "রাষ্ট্রপতি",
            "প্রধানমন্ত্রী",
            "স্পিকার",
            "প্রধান বিচারপতি"
        ],
        answer: 0,
        explanation: "সংবিধানের ৪৮ অনুচ্ছেদে রাষ্ট্রপতির পদ, নির্বাচন ও সংশ্লিষ্ট সাংবিধানিক বিধান উল্লেখ করা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৫৫ অনুচ্ছেদ কোন বিষয়ের সঙ্গে সম্পর্কিত?",
        options: [
            "রাষ্ট্রপতির নির্বাচন",
            "মন্ত্রিসভা",
            "জাতীয় সংসদ নির্বাচন",
            "সুপ্রিম কোর্ট"
        ],
        answer: 1,
        explanation: "সংবিধানের ৫৫ অনুচ্ছেদে বাংলাদেশের মন্ত্রিসভা এবং এর কার্যাবলি সম্পর্কে বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৬৫ অনুচ্ছেদে কোন প্রতিষ্ঠানের কথা বলা হয়েছে?",
        options: [
            "নির্বাচন কমিশন",
            "জাতীয় সংসদ",
            "সরকারি কর্ম কমিশন",
            "সুপ্রিম কোর্ট"
        ],
        answer: 1,
        explanation: "সংবিধানের ৬৫ অনুচ্ছেদে বাংলাদেশের জাতীয় সংসদ প্রতিষ্ঠা ও এর গঠন সম্পর্কে বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৭০ অনুচ্ছেদের প্রধান বিষয় কী?",
        options: [
            "রাষ্ট্রপতির ক্ষমতা",
            "সংসদ সদস্যের পদ শূন্য হওয়া",
            "বিচার বিভাগের স্বাধীনতা",
            "স্থানীয় সরকার"
        ],
        answer: 1,
        explanation: "৭০ অনুচ্ছেদ অনুযায়ী দলীয় মনোনয়নে নির্বাচিত সংসদ সদস্য দলত্যাগ করলে বা সংসদে দলের বিপক্ষে ভোট দিলে তাঁর আসন শূন্য হওয়ার বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ১১৮ অনুচ্ছেদ কোন সাংবিধানিক প্রতিষ্ঠানের সঙ্গে সম্পর্কিত?",
        options: [
            "নির্বাচন কমিশন",
            "বাংলাদেশ ব্যাংক",
            "সরকারি কর্ম কমিশন",
            "দুর্নীতি দমন কমিশন"
        ],
        answer: 0,
        explanation: "সংবিধানের ১১৮ অনুচ্ছেদে নির্বাচন কমিশন প্রতিষ্ঠার বিষয়ে বিধান রয়েছে।"
    },

    {
        question: "মুজিবনগর সরকারের প্রধানমন্ত্রী কে ছিলেন?",
        options: [
            "সৈয়দ নজরুল ইসলাম",
            "তাজউদ্দীন আহমদ",
            "ক্যাপ্টেন এম মনসুর আলী",
            "এ এইচ এম কামারুজ্জামান"
        ],
        answer: 1,
        explanation: "মুজিবনগর সরকারের প্রধানমন্ত্রী ছিলেন তাজউদ্দীন আহমদ। সৈয়দ নজরুল ইসলাম অস্থায়ী রাষ্ট্রপতির দায়িত্ব পালন করেন।"
    },

    {
        question: "মুজিবনগর সরকার আনুষ্ঠানিকভাবে শপথ গ্রহণ করে কোথায়?",
        options: [
            "ঢাকা",
            "কুষ্টিয়া",
            "বৈদ্যনাথতলা, মেহেরপুর",
            "চট্টগ্রাম"
        ],
        answer: 2,
        explanation: "১৭ এপ্রিল ১৯৭১ মেহেরপুরের বৈদ্যনাথতলায় মুজিবনগর সরকার আনুষ্ঠানিকভাবে শপথ গ্রহণ করে। স্থানটির নাম পরে মুজিবনগর রাখা হয়।"
    },

    {
        question: "মুক্তিযুদ্ধের সময় বাংলাদেশ বাহিনীর সর্বাধিনায়ক কে ছিলেন?",
        options: [
            "জেনারেল এম এ জি ওসমানী",
            "জিয়াউর রহমান",
            "খালেদ মোশাররফ",
            "কে এম শফিউল্লাহ"
        ],
        answer: 0,
        explanation: "জেনারেল এম এ জি ওসমানী মুক্তিযুদ্ধের সময় বাংলাদেশ বাহিনীর সর্বাধিনায়ক হিসেবে দায়িত্ব পালন করেন।"
    },

    {
        question: "মুক্তিযুদ্ধের সময় Z Force-এর অধিনায়ক কে ছিলেন?",
        options: [
            "কে এম শফিউল্লাহ",
            "জিয়াউর রহমান",
            "খালেদ মোশাররফ",
            "এ টি এম হায়দার"
        ],
        answer: 1,
        explanation: "জিয়াউর রহমানের নেতৃত্বে Z Force গঠিত হয়েছিল এবং তিনি এই বাহিনীর অধিনায়ক ছিলেন।"
    },

    {
        question: "মুক্তিযুদ্ধের সময় K Force-এর অধিনায়ক কে ছিলেন?",
        options: [
            "খালেদ মোশাররফ",
            "জিয়াউর রহমান",
            "কে এম শফিউল্লাহ",
            "মীর শওকত আলী"
        ],
        answer: 0,
        explanation: "খালেদ মোশাররফের নেতৃত্বে K Force গঠিত হয়েছিল।"
    },

    {
        question: "মুক্তিযুদ্ধের সময় S Force-এর অধিনায়ক কে ছিলেন?",
        options: [
            "খালেদ মোশাররফ",
            "জিয়াউর রহমান",
            "কে এম শফিউল্লাহ",
            "এ টি এম হায়দার"
        ],
        answer: 2,
        explanation: "কে এম শফিউল্লাহর নেতৃত্বে S Force গঠিত হয়েছিল।"
    },

    {
        question: "বাংলাদেশের মুক্তিযুদ্ধের সময় স্বাধীন বাংলা বেতার কেন্দ্রের প্রধান উদ্দেশ্যগুলোর একটি কী ছিল?",
        options: [
            "সামরিক অস্ত্র উৎপাদন",
            "মুক্তিযুদ্ধের পক্ষে জনমত ও মনোবল সৃষ্টি",
            "শুধু বিদেশি সংবাদ প্রচার",
            "শুধু অর্থনৈতিক পরিকল্পনা প্রচার"
        ],
        answer: 1,
        explanation: "স্বাধীন বাংলা বেতার কেন্দ্র মুক্তিযুদ্ধের সংবাদ প্রচার, জনগণকে উদ্বুদ্ধ করা এবং মুক্তিযোদ্ধাদের মনোবল বৃদ্ধিতে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
    },

    {
    question: "বাংলাদেশের মুক্তিযুদ্ধের সময় 'Operation Jackpot' মূলত কোন ধরনের অভিযান ছিল?",
    options: [
        "স্থলবাহিনীর সম্মুখযুদ্ধ",
        "নৌ-কমান্ডোদের বিশেষ অভিযান",
        "বিমান বাহিনীর বোমা হামলা",
        "সীমান্তে কূটনৈতিক অভিযান"
    ],
    answer: 1,
    explanation: "Operation Jackpot ছিল ১৯৭১ সালের মুক্তিযুদ্ধের সময় নৌ-কমান্ডোদের পরিচালিত একটি গুরুত্বপূর্ণ বিশেষ অভিযান। বিভিন্ন বন্দরে আক্রমণ চালিয়ে পাকিস্তানি বাহিনীর সামরিক ও সরবরাহ ব্যবস্থায় বড় ধরনের ক্ষতি করা হয়।"
},

    {
        question: "বাংলাদেশের জাতীয় স্মৃতিসৌধের স্থপতি কে?",
        options: [
            "লুই আই কান",
            "মাজহারুল ইসলাম",
            "সৈয়দ মঈনুল হোসেন",
            "কামরুল হাসান"
        ],
        answer: 2,
        explanation: "সাভারের জাতীয় স্মৃতিসৌধের স্থপতি ছিলেন সৈয়দ মঈনুল হোসেন।"
    },

    {
        question: "বাংলাদেশের কোন স্থাপনাটি UNESCO World Heritage Site হিসেবে স্বীকৃত?",
        options: [
            "লালবাগ কেল্লা",
            "আহসান মঞ্জিল",
            "বাগেরহাটের ঐতিহাসিক মসজিদ নগরী",
            "জাতীয় সংসদ ভবন"
        ],
        answer: 2,
        explanation: "বাগেরহাটের ঐতিহাসিক মসজিদ নগরী UNESCO World Heritage Site হিসেবে স্বীকৃত।"
    },

    {
        question: "বাংলাদেশের কোন প্রত্নস্থলটি পাহাড়পুর বৌদ্ধ বিহার নামে পরিচিত?",
        options: [
            "সোমপুর মহাবিহার",
            "ষাট গম্বুজ মসজিদ",
            "মহাস্থানগড়",
            "ময়নামতি"
        ],
        answer: 0,
        explanation: "নওগাঁর পাহাড়পুরে অবস্থিত সোমপুর মহাবিহারই পাহাড়পুর বৌদ্ধ বিহার নামে পরিচিত এবং এটি একটি UNESCO World Heritage Site।"
    },

    {
        question: "প্রাচীন বাংলার কোন নগরী 'পুণ্ড্রনগর' নামে পরিচিত ছিল?",
        options: [
            "মহাস্থানগড়",
            "সোনারগাঁও",
            "বিক্রমপুর",
            "ময়নামতি"
        ],
        answer: 0,
        explanation: "বগুড়ার মহাস্থানগড় প্রাচীন পুণ্ড্রবর্ধনের রাজধানী পুণ্ড্রনগর হিসেবে পরিচিত ছিল।"
    },

    {
        question: "বাংলাদেশের ময়নামতি প্রত্নাঞ্চল কোন জেলায় অবস্থিত?",
        options: [
            "নোয়াখালী",
            "কুমিল্লা",
            "ফেনী",
            "চাঁদপুর"
        ],
        answer: 1,
        explanation: "ময়নামতি প্রত্নাঞ্চল কুমিল্লা জেলায় অবস্থিত এবং এখানে প্রাচীন বৌদ্ধ সভ্যতার গুরুত্বপূর্ণ নিদর্শন পাওয়া গেছে।"
    },

    {
        question: "বাংলাদেশের কোন অঞ্চল 'বরেন্দ্রভূমি' নামে পরিচিত?",
        options: [
            "উত্তর-পশ্চিমাঞ্চলের উঁচু ভূভাগ",
            "দক্ষিণ-পূর্বের পাহাড়ি অঞ্চল",
            "দক্ষিণ-পশ্চিমের উপকূলীয় অঞ্চল",
            "মধ্যাঞ্চলের নিম্নভূমি"
        ],
        answer: 0,
        explanation: "বাংলাদেশের উত্তর-পশ্চিমাঞ্চলের তুলনামূলক উঁচু ও শুষ্ক ভূভাগকে বরেন্দ্রভূমি বলা হয়।"
    },

    {
        question: "বাংলাদেশের 'মধুপুর গড়' মূলত কোন ধরনের ভূপ্রকৃতির উদাহরণ?",
        options: [
            "প্লাবনভূমি",
            "টেরেস বা সোপানভূমি",
            "উপকূলীয় চর",
            "পাহাড়ি উপত্যকা"
        ],
        answer: 1,
        explanation: "মধুপুর গড় বাংলাদেশের প্রাচীন প্লাইস্টোসিন টেরেস বা সোপানভূমির একটি গুরুত্বপূর্ণ উদাহরণ।"
    },

    {
        question: "বাংলাদেশের কোন অঞ্চলকে 'চলন বিল' নামে বৃহৎ বিলাঞ্চল হিসেবে চিহ্নিত করা হয়?",
        options: [
            "উত্তর-পশ্চিমাঞ্চল",
            "দক্ষিণ-পূর্বাঞ্চল",
            "সিলেট অঞ্চল",
            "উপকূলীয় বরিশাল"
        ],
        answer: 0,
        explanation: "চলন বিল বাংলাদেশের উত্তর-পশ্চিমাঞ্চলে অবস্থিত একটি বিস্তৃত বিলাঞ্চল, যা প্রধানত নাটোর, সিরাজগঞ্জ ও পাবনা অঞ্চলে বিস্তৃত।"
    },

    {
        question: "বাংলাদেশের হাওর অঞ্চলের প্রধান বৈশিষ্ট্য কোনটি?",
        options: [
            "সারা বছর পাহাড়ি ভূমি",
            "বর্ষায় বিস্তীর্ণ জলাভূমিতে পরিণত হওয়া নিম্নভূমি",
            "শুধু উপকূলীয় লবণাক্ত ভূমি",
            "শুধু মরুভূমিসদৃশ শুষ্ক অঞ্চল"
        ],
        answer: 1,
        explanation: "হাওর হলো নিম্নভূমির বৃহৎ জলাভূমি, যা বর্ষাকালে বিস্তীর্ণ জলরাশিতে পরিণত হয় এবং শুষ্ক মৌসুমে কৃষিকাজের জন্য ব্যবহৃত হয়।"
    },

    {
        question: "বাংলাদেশের প্রথম জনশুমারি কোন সালে অনুষ্ঠিত হয়?",
        options: [
            "১৯৭২",
            "১৯৭৩",
            "১৯৭৪",
            "১৯৭৫"
        ],
        answer: 2,
        explanation: "স্বাধীন বাংলাদেশের প্রথম জনশুমারি ১৯৭৪ সালে অনুষ্ঠিত হয়।"
    },

    {
        question: "স্বাধীন বাংলাদেশের প্রথম জাতীয় সংসদ নির্বাচন কোন সালে অনুষ্ঠিত হয়?",
        options: [
            "১৯৭২",
            "১৯৭৩",
            "১৯৭৪",
            "১৯৭৫"
        ],
        answer: 1,
        explanation: "স্বাধীন বাংলাদেশের প্রথম জাতীয় সংসদ নির্বাচন ৭ মার্চ ১৯৭৩ সালে অনুষ্ঠিত হয়।"
    },

    {
        question: "বাংলাদেশ জাতিসংঘের সদস্যপদ লাভ করে কোন সালে?",
        options: [
            "১৯৭২",
            "১৯৭৩",
            "১৯৭৪",
            "১৯৭৫"
        ],
        answer: 2,
        explanation: "বাংলাদেশ ১৭ সেপ্টেম্বর ১৯৭৪ সালে জাতিসংঘের সদস্যপদ লাভ করে।"
    },

    {
        question: "শেখ মুজিবুর রহমান জাতিসংঘ সাধারণ পরিষদে বাংলায় ভাষণ দেন কোন সালে?",
        options: [
            "১৯৭২",
            "১৯৭৩",
            "১৯৭৪",
            "১৯৭৫"
        ],
        answer: 2,
        explanation: "শেখ মুজিবুর রহমান ২৫ সেপ্টেম্বর ১৯৭৪ সালে জাতিসংঘ সাধারণ পরিষদের অধিবেশনে বাংলায় ঐতিহাসিক ভাষণ দেন।"
    },

    {
        question: "বাংলাদেশের প্রথম পঞ্চবার্ষিক পরিকল্পনার মেয়াদ ছিল কোন সময়কাল?",
        options: [
            "১৯৭২–১৯৭৭",
            "১৯৭৩–১৯৭৮",
            "১৯৭৪–১৯৭৯",
            "১৯৭৫–১৯৮০"
        ],
        answer: 1,
        explanation: "বাংলাদেশের প্রথম পঞ্চবার্ষিক পরিকল্পনার মেয়াদ ছিল ১৯৭৩–১৯৭৮।"
    },

    {
        question: "বাংলাদেশের জাতীয় পতাকার বর্তমান নকশার সঙ্গে কোন শিল্পীর নাম বিশেষভাবে যুক্ত?",
        options: [
            "জয়নুল আবেদিন",
            "কামরুল হাসান",
            "এস এম সুলতান",
            "কাইয়ুম চৌধুরী"
        ],
        answer: 1,
        explanation: "বাংলাদেশের জাতীয় পতাকার বর্তমান নকশা প্রণয়নের সঙ্গে শিল্পী কামরুল হাসানের নাম বিশেষভাবে যুক্ত।"
    },

    {
        question: "বাংলাদেশের প্রথম নারী স্পিকার হিসেবে কে দায়িত্ব পালন করেন?",
        options: [
            "সাজেদা চৌধুরী",
            "শিরীন শারমিন চৌধুরী",
            "মতিয়া চৌধুরী",
            "আইভি রহমান"
        ],
        answer: 1,
        explanation: "শিরীন শারমিন চৌধুরী বাংলাদেশের প্রথম নারী স্পিকার হিসেবে দায়িত্ব পালন করেন।"
    },
        {
        question: "পার্বত্য চট্টগ্রাম শান্তি চুক্তি কোন সালে স্বাক্ষরিত হয়?",
        options: [
            "১৯৯১",
            "১৯৯৪",
            "১৯৯৭",
            "২০০০"
        ],
        answer: 2,
        explanation: "পার্বত্য চট্টগ্রাম শান্তি চুক্তি ২ ডিসেম্বর ১৯৯৭ সালে বাংলাদেশ সরকার ও পার্বত্য চট্টগ্রাম জনসংহতি সমিতির মধ্যে স্বাক্ষরিত হয়।"
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