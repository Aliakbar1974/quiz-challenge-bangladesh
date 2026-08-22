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
        question: "বাংলাদেশের স্বাধীনতার পর প্রথম সংবিধান কার্যকর হওয়ার আগের অন্তর্বর্তী সাংবিধানিক ব্যবস্থা কোন নামে পরিচিত?",
        options: [
            "প্রভিশনাল কনস্টিটিউশন অব বাংলাদেশ অর্ডার, ১৯৭২",
            "বাংলাদেশ ব্যাংক অর্ডার, ১৯৭২",
            "Representation of the People Order",
            "Legal Framework Order"
        ],
        answer: 0,
        explanation: "বাংলাদেশের পূর্ণাঙ্গ সংবিধান কার্যকর হওয়ার আগে Provisional Constitution of Bangladesh Order, 1972 অন্তর্বর্তী সাংবিধানিক ব্যবস্থা হিসেবে কার্যকর ছিল।"
    },

    {
        question: "বাংলাদেশের সংবিধানে ‘প্রজাতন্ত্রের রাষ্ট্রভাষা বাংলা’ কোন অনুচ্ছেদে বলা হয়েছে?",
        options: [
            "অনুচ্ছেদ ২",
            "অনুচ্ছেদ ৩",
            "অনুচ্ছেদ ৪",
            "অনুচ্ছেদ ৫"
        ],
        answer: 1,
        explanation: "বাংলাদেশের সংবিধানের ৩ নম্বর অনুচ্ছেদে বলা হয়েছে যে প্রজাতন্ত্রের রাষ্ট্রভাষা বাংলা।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৪ নম্বর অনুচ্ছেদ মূলত কী নিয়ে?",
        options: [
            "নাগরিকত্ব",
            "রাষ্ট্রভাষা",
            "জাতীয় প্রতীক, পতাকা ও সংগীত",
            "রাজধানী"
        ],
        answer: 2,
        explanation: "সংবিধানের ৪ নম্বর অনুচ্ছেদে জাতীয় সংগীত, জাতীয় পতাকা ও জাতীয় প্রতীক সম্পর্কিত বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানে নাগরিকত্ব সম্পর্কিত বিধান কোন অনুচ্ছেদে রয়েছে?",
        options: [
            "৪",
            "৫",
            "৬",
            "৭"
        ],
        answer: 2,
        explanation: "বাংলাদেশের সংবিধানের ৬ নম্বর অনুচ্ছেদে নাগরিকত্ব সম্পর্কিত বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৮ নম্বর অনুচ্ছেদে রাষ্ট্র পরিচালনার মূলনীতির বিষয়ে কী বলা হয়েছে?",
        options: [
            "এগুলো রাষ্ট্র পরিচালনার মূলনীতি হিসেবে মৌলিক",
            "এগুলো আদালতে সরাসরি বলবৎযোগ্য",
            "এগুলো কেবল স্থানীয় সরকারের জন্য প্রযোজ্য",
            "এগুলো কেবল সংসদের জন্য প্রযোজ্য"
        ],
        answer: 0,
        explanation: "৮ নম্বর অনুচ্ছেদে রাষ্ট্র পরিচালনার মূলনীতিগুলোকে রাষ্ট্র পরিচালনার মৌলিক নীতি হিসেবে উল্লেখ করা হয়েছে এবং এগুলো রাষ্ট্র ও সরকারের কার্যক্রমের ভিত্তি।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৯ নম্বর অনুচ্ছেদে কোন নীতির কথা বলা হয়েছে?",
        options: [
            "ধর্মনিরপেক্ষতা",
            "জাতীয়তাবাদ",
            "সমাজতন্ত্র",
            "গণতন্ত্র"
        ],
        answer: 1,
        explanation: "বাংলাদেশের সংবিধানের ৯ নম্বর অনুচ্ছেদে জাতীয়তাবাদকে রাষ্ট্র পরিচালনার অন্যতম মূলনীতি হিসেবে উল্লেখ করা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ১০ নম্বর অনুচ্ছেদে কোন বিষয়টির কথা বলা হয়েছে?",
        options: [
            "নারীর সমঅধিকার",
            "জাতীয় সংসদ",
            "রাষ্ট্রপতি",
            "স্থানীয় সরকার"
        ],
        answer: 0,
        explanation: "সংবিধানের ১০ নম্বর অনুচ্ছেদে জাতীয় জীবনের সর্বস্তরে নারীর অংশগ্রহণ ও সমঅধিকার নিশ্চিত করার কথা বলা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ১১ নম্বর অনুচ্ছেদে রাষ্ট্রের কোন বৈশিষ্ট্যের কথা বলা হয়েছে?",
        options: [
            "এককেন্দ্রিকতা",
            "গণতন্ত্র ও মানবাধিকারের নিশ্চয়তা",
            "ধর্মীয় রাষ্ট্রব্যবস্থা",
            "সামরিক শাসন"
        ],
        answer: 1,
        explanation: "১১ নম্বর অনুচ্ছেদে প্রজাতন্ত্রকে গণতন্ত্র হিসেবে প্রতিষ্ঠা এবং মানবাধিকার ও মানুষের মর্যাদা নিশ্চিত করার কথা বলা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানে মৌলিক অধিকার কোন ভাগে সংরক্ষিত?",
        options: [
            "প্রথম ভাগ",
            "দ্বিতীয় ভাগ",
            "তৃতীয় ভাগ",
            "চতুর্থ ভাগ"
        ],
        answer: 2,
        explanation: "বাংলাদেশের সংবিধানের তৃতীয় ভাগে মৌলিক অধিকারসমূহ সংরক্ষিত হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে ব্যক্তিগত স্বাধীনতা ও আইনের সুরক্ষার বিষয়টি রয়েছে?",
        options: [
            "৩১",
            "৩২",
            "৩৩",
            "৩৪"
        ],
        answer: 1,
        explanation: "সংবিধানের ৩২ নম্বর অনুচ্ছেদে জীবন ও ব্যক্তিস্বাধীনতার সুরক্ষার কথা বলা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৩ নম্বর অনুচ্ছেদ মূলত কোন বিষয়ের সঙ্গে সম্পর্কিত?",
        options: [
            "চলাফেরার স্বাধীনতা",
            "গ্রেফতার ও আটক সম্পর্কে রক্ষাকবচ",
            "সমাবেশের স্বাধীনতা",
            "ধর্মীয় স্বাধীনতা"
        ],
        answer: 1,
        explanation: "৩৩ নম্বর অনুচ্ছেদে গ্রেফতার ও আটক ব্যক্তির জন্য নির্দিষ্ট সাংবিধানিক রক্ষাকবচের বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৪ নম্বর অনুচ্ছেদে কোনটি নিষিদ্ধ করা হয়েছে?",
        options: [
            "জোরপূর্বক শ্রম",
            "সংবাদপত্র প্রকাশ",
            "রাজনৈতিক দল গঠন",
            "বিদেশ ভ্রমণ"
        ],
        answer: 0,
        explanation: "সংবিধানের ৩৪ নম্বর অনুচ্ছেদে সব ধরনের জোরপূর্বক শ্রম নিষিদ্ধ করা হয়েছে, আইনসিদ্ধ ব্যতিক্রম ছাড়া।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৫ নম্বর অনুচ্ছেদ কোন বিষয়ের সঙ্গে সম্পর্কিত?",
        options: [
            "চলাফেরার স্বাধীনতা",
            "বিচার ও দণ্ড সম্পর্কে সুরক্ষা",
            "সম্পত্তির অধিকার",
            "পেশার স্বাধীনতা"
        ],
        answer: 1,
        explanation: "৩৫ নম্বর অনুচ্ছেদে বিচার ও দণ্ডের ক্ষেত্রে বিভিন্ন সাংবিধানিক সুরক্ষা প্রদান করা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৬ নম্বর অনুচ্ছেদে কোন স্বাধীনতার কথা বলা হয়েছে?",
        options: [
            "সমাবেশের স্বাধীনতা",
            "চলাফেরার স্বাধীনতা",
            "সংগঠনের স্বাধীনতা",
            "চিন্তার স্বাধীনতা"
        ],
        answer: 1,
        explanation: "সংবিধানের ৩৬ নম্বর অনুচ্ছেদে বাংলাদেশের সর্বত্র অবাধ চলাফেরা, বসবাস ও দেশ ত্যাগের অধিকার সম্পর্কিত বিধান রয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৭ নম্বর অনুচ্ছেদে কোন স্বাধীনতার কথা বলা হয়েছে?",
        options: [
            "শান্তিপূর্ণ সমাবেশের স্বাধীনতা",
            "ধর্মীয় স্বাধীনতা",
            "পেশার স্বাধীনতা",
            "মতপ্রকাশের স্বাধীনতা"
        ],
        answer: 0,
        explanation: "৩৭ নম্বর অনুচ্ছেদে শান্তিপূর্ণ ও নিরস্ত্রভাবে সমবেত হওয়ার অধিকার নিশ্চিত করা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৮ নম্বর অনুচ্ছেদ মূলত কোন অধিকারের সঙ্গে সম্পর্কিত?",
        options: [
            "সংগঠন বা সমিতি গঠনের স্বাধীনতা",
            "সম্পত্তির অধিকার",
            "শিক্ষার অধিকার",
            "ভোটাধিকার"
        ],
        answer: 0,
        explanation: "৩৮ নম্বর অনুচ্ছেদে সমিতি বা সংগঠন গঠনের স্বাধীনতার কথা বলা হয়েছে, নির্দিষ্ট সাংবিধানিক সীমাবদ্ধতা সাপেক্ষে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৩৯ নম্বর অনুচ্ছেদ কোন দুটি স্বাধীনতার সঙ্গে সরাসরি সম্পর্কিত?",
        options: [
            "চলাফেরা ও পেশা",
            "চিন্তা ও বিবেক এবং বাক্ ও ভাবপ্রকাশ",
            "ধর্ম ও সম্পত্তি",
            "সমাবেশ ও সংগঠন"
        ],
        answer: 1,
        explanation: "৩৯ নম্বর অনুচ্ছেদে চিন্তা ও বিবেকের স্বাধীনতা এবং বাক্ ও ভাবপ্রকাশের স্বাধীনতা নিশ্চিত করা হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৪০ নম্বর অনুচ্ছেদে কোন স্বাধীনতার কথা বলা হয়েছে?",
        options: [
            "পেশা বা বৃত্তির স্বাধীনতা",
            "সংবাদপত্রের স্বাধীনতা",
            "ধর্মীয় স্বাধীনতা",
            "সমাবেশের স্বাধীনতা"
        ],
        answer: 0,
        explanation: "৪০ নম্বর অনুচ্ছেদে আইন দ্বারা আরোপিত যুক্তিসঙ্গত বিধিনিষেধ সাপেক্ষে পেশা বা বৃত্তি গ্রহণের স্বাধীনতা দেওয়া হয়েছে।"
    },

    {
        question: "বাংলাদেশের সংবিধানের ৪১ নম্বর অনুচ্ছেদ কোন অধিকারের সঙ্গে সম্পর্কিত?",
        options: [
            "ধর্মীয় স্বাধীনতা",
            "রাজনৈতিক অধিকার",
            "সম্পত্তির অধিকার",
            "ভোটাধিকার"
        ],
        answer: 0,
        explanation: "৪১ নম্বর অনুচ্ছেদে ধর্ম পালন, প্রচার এবং ধর্মীয় প্রতিষ্ঠান পরিচালনার স্বাধীনতার কথা বলা হয়েছে।"
    },

    {
        question: "Bangladesh Bank Order, 1972-এর President’s Order নম্বর কত?",
        options: [
            "১২৬",
            "১২৭",
            "১২৮",
            "১২৯"
        ],
        answer: 1,
        explanation: "Bangladesh Bank Order, 1972 হলো President’s Order No. 127 of 1972।"
    },

    {
        question: "বাংলাদেশ ব্যাংক অর্ডার, ১৯৭২ অনুযায়ী বাংলাদেশ ব্যাংকের পুরো মূলধন কার কাছে ন্যস্ত ছিল?",
        options: [
            "বাংলাদেশ ব্যাংকের পরিচালনা পর্ষদ",
            "বেসরকারি ব্যাংকসমূহ",
            "বাংলাদেশ সরকার",
            "বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন"
        ],
        answer: 2,
        explanation: "Bangladesh Bank Order, 1972-এর বিধান অনুযায়ী বাংলাদেশ ব্যাংকের সম্পূর্ণ মূলধন বাংলাদেশ সরকারের কাছে ন্যস্ত ছিল।"
    },

    {
        question: "বাংলাদেশ ব্যাংকের অন্যতম প্রধান কাজ কোনটি?",
        options: [
            "শুধু সরকারি কর্মচারীদের বেতন দেওয়া",
            "মুদ্রানীতি প্রণয়ন ও বাস্তবায়ন",
            "শুধু শেয়ারবাজার পরিচালনা করা",
            "শুধু বৈদেশিক বাণিজ্য নিয়ন্ত্রণ করা"
        ],
        answer: 1,
        explanation: "বাংলাদেশ ব্যাংকের অন্যতম প্রধান দায়িত্ব হলো দেশের monetary and credit policy প্রণয়ন ও বাস্তবায়ন করা।"
    },

    {
        question: "বাংলাদেশের UNESCO World Heritage Sites-এর সংখ্যা বর্তমানে কত?",
        options: [
            "২টি",
            "৩টি",
            "৪টি",
            "৫টি"
        ],
        answer: 1,
        explanation: "বাংলাদেশের UNESCO World Heritage List-এ বর্তমানে ৩টি সম্পত্তি রয়েছে: সুন্দরবন, বাগেরহাটের ঐতিহাসিক মসজিদ নগরী এবং পাহাড়পুরের বৌদ্ধবিহারের ধ্বংসাবশেষ।"
    },

    {
        question: "বাংলাদেশের কোন UNESCO World Heritage Site-টি ১৯৯৭ সালে তালিকাভুক্ত হয়?",
        options: [
            "ঐতিহাসিক মসজিদ নগরী বাগেরহাট",
            "পাহাড়পুরের বৌদ্ধবিহার",
            "সুন্দরবন",
            "ময়নামতি"
        ],
        answer: 2,
        explanation: "সুন্দরবন ১৯৯৭ সালে UNESCO World Heritage List-এ অন্তর্ভুক্ত হয়।"
    },

    {
        question: "বাংলাদেশের UNESCO Tentative List-এ নিচের কোনটি রয়েছে?",
        options: [
            "লালবাগ দুর্গ",
            "মুঘল মসজিদসমূহের সমষ্টি",
            "জাতীয় সংসদ ভবন",
            "আহসান মঞ্জিল"
        ],
        answer: 1,
        explanation: "Mughal Mosques in Bangladesh UNESCO-এর বাংলাদেশের Tentative List-এ অন্তর্ভুক্ত একটি প্রস্তাবিত সাংস্কৃতিক সম্পত্তি।"
    },

    {
        question: "বাংলাদেশের UNESCO Tentative List-এ নিচের কোন স্থাপত্যকর্মটি আধুনিক স্থাপত্য আন্দোলনের সঙ্গে সম্পর্কিত?",
        options: [
            "ময়নামটির প্রত্নতাত্ত্বিক অঞ্চল",
            "মহাস্থান ও করতোয়া নদীর সাংস্কৃতিক ভূদৃশ্য",
            "মুজহারুল ইসলামের স্থাপত্যকর্ম",
            "মুঘল দুর্গসমূহ"
        ],
        answer: 2,
        explanation: "The Architectural Works of Muzharul Islam: an Outstanding Contribution to the Modern Movement in South Asia UNESCO-এর বাংলাদেশের Tentative List-এ রয়েছে।"
    },

    {
        question: "বাংলা সাহিত্যে অমিত্রাক্ষর ছন্দের প্রবর্তনের কৃতিত্ব কার?",
        options: [
            "মাইকেল মধুসূদন দত্ত",
            "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
            "রবীন্দ্রনাথ ঠাকুর",
            "ঈশ্বরচন্দ্র গুপ্ত"
        ],
        answer: 0,
        explanation: "বাংলা সাহিত্যে অমিত্রাক্ষর ছন্দের সফল প্রবর্তন ও ব্যবহারের জন্য মাইকেল মধুসূদন দত্ত বিশেষভাবে স্মরণীয়।"
    },

    {
        question: "মাইকেল মধুসূদন দত্ত বাংলা সাহিত্যে কোন নাটকের মাধ্যমে আত্মপ্রকাশ করেন?",
        options: [
            "কৃষ্ণকুমারী",
            "শর্মিষ্ঠা",
            "একেই কি বলে সভ্যতা",
            "বুড়ো শালিকের ঘাড়ে রোঁ"
        ],
        answer: 1,
        explanation: "মাইকেল মধুসূদন দত্তের প্রথম বাংলা নাটক ‘শর্মিষ্ঠা’, যার মাধ্যমে তিনি বাংলা নাট্যসাহিত্যে আত্মপ্রকাশ করেন।"
    },

    {
        question: "‘বিষাদ-সিন্ধু’ কার রচনা?",
        options: [
            "মীর মশাররফ হোসেন",
            "কাজী নজরুল ইসলাম",
            "আবুল ফজল",
            "মোহাম্মদ নজিবর রহমান"
        ],
        answer: 0,
        explanation: "‘বিষাদ-সিন্ধু’ মীর মশাররফ হোসেনের বিখ্যাত ঐতিহাসিক উপন্যাস।"
    },

    {
        question: "‘সুলতানার স্বপ্ন’ গ্রন্থটির রচয়িতা কে?",
        options: [
            "সুফিয়া কামাল",
            "বেগম রোকেয়া",
            "লীলা মজুমদার",
            "আশাপূর্ণা দেবী"
        ],
        answer: 1,
        explanation: "Sultana's Dream বেগম রোকেয়ার একটি বিখ্যাত ইংরেজি রচনা, যার বাংলা অনুবাদ 'সুলতানার স্বপ্ন'...।"
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