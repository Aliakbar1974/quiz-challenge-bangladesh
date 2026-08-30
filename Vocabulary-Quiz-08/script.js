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

const quizData= [
  {
    id: "BD145",
    question: "Roads and Highways Department-এর সংক্ষিপ্ত রূপ কী?",
    options: ["RHD", "RHDI", "RHDM", "RHA"],
    answer: 0,
    explanation: "Roads and Highways Department-এর সংক্ষিপ্ত রূপ হলো RHD।"
  },

  {
    id: "BD146",
    question: "বাংলাদেশের গ্রামীণ অবকাঠামো উন্নয়নে কোন সংস্থাটি গুরুত্বপূর্ণ ভূমিকা পালন করে?",
    options: ["RHD", "BRTA", "LGED", "BRTC"],
    answer: 2,
    explanation: "LGED বা Local Government Engineering Department বাংলাদেশের গ্রামীণ অবকাঠামো উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
  },

  {
    id: "BD147",
    question: "LGED-এর পূর্ণরূপ কী?",
    options: [
      "Local Governance Economic Division",
      "Local Government Energy Department",
      "Local Growth Engineering Directorate",
      "Local Government Engineering Department"
    ],
    answer: 3,
    explanation: "LGED-এর পূর্ণরূপ হলো Local Government Engineering Department।"
  },

  {
    id: "BD148",
    question: "বাংলাদেশের সরকারি পরিসংখ্যান প্রস্তুত ও প্রকাশের প্রধান প্রতিষ্ঠান কোনটি?",
    options: [
      "বাংলাদেশ পরিসংখ্যান ব্যুরো",
      "বাংলাদেশ ব্যাংক",
      "বাংলাদেশ পরিকল্পনা কমিশন",
      "জাতীয় রাজস্ব বোর্ড"
    ],
    answer: 0,
    explanation: "বাংলাদেশের সরকারি পরিসংখ্যান প্রস্তুত ও প্রকাশের প্রধান প্রতিষ্ঠান হলো বাংলাদেশ পরিসংখ্যান ব্যুরো।"
  },

  {
    id: "BD149",
    question: "বাংলাদেশ পরিসংখ্যান ব্যুরোর ইংরেজি সংক্ষিপ্ত রূপ কী?",
    options: ["BSA", "BSS", "BBS", "BSB"],
    answer: 2,
    explanation: "Bangladesh Bureau of Statistics-এর সংক্ষিপ্ত রূপ হলো BBS।"
  },

  {
    id: "BD150",
    question: "বাংলাদেশের সরকারি আদমশুমারি ও জনশুমারি পরিচালনার দায়িত্ব কোন প্রতিষ্ঠানের?",
    options: [
      "নির্বাচন কমিশন",
      "স্থানীয় সরকার বিভাগ",
      "জনপ্রশাসন মন্ত্রণালয়",
      "বাংলাদেশ পরিসংখ্যান ব্যুরো"
    ],
    answer: 3,
    explanation: "বাংলাদেশে সরকারি জনশুমারি পরিচালনার দায়িত্ব বাংলাদেশ পরিসংখ্যান ব্যুরোর।"
  },

  {
    id: "BD151",
    question: "বাংলাদেশের মধ্য দিয়ে কোন গুরুত্বপূর্ণ কাল্পনিক অক্ষরেখা অতিক্রম করেছে?",
    options: [
      "কর্কটক্রান্তি রেখা",
      "বিষুবরেখা",
      "মকরক্রান্তি রেখা",
      "আন্তর্জাতিক তারিখরেখা"
    ],
    answer: 0,
    explanation: "কর্কটক্রান্তি রেখা বাংলাদেশের মধ্য দিয়ে অতিক্রম করেছে।"
  },

  {
    id: "BD152",
    question: "বাংলাদেশের জলবায়ুকে প্রধানত কোন ধরনের জলবায়ু হিসেবে শ্রেণিবদ্ধ করা হয়?",
    options: [
      "মরু জলবায়ু",
      "তুন্দ্রা জলবায়ু",
      "ভূমধ্যসাগরীয় জলবায়ু",
      "মৌসুমি জলবায়ু"
    ],
    answer: 3,
    explanation: "বাংলাদেশের জলবায়ু প্রধানত মৌসুমি বা Monsoon Climate হিসেবে শ্রেণিবদ্ধ।"
  },

  {
    id: "BD153",
    question: "বাংলাদেশে বর্ষাকালে অধিক বৃষ্টিপাতের প্রধান উৎস কোনটি?",
    options: [
      "উত্তর-পশ্চিমা বায়ু",
      "মেরু বায়ু",
      "মৌসুমি বায়ু",
      "পশ্চিমা বায়ু"
    ],
    answer: 2,
    explanation: "বর্ষাকালে বাংলাদেশে অধিক বৃষ্টিপাতের প্রধান উৎস হলো মৌসুমি বায়ু।"
  },

  {
    id: "BD154",
    question: "বাংলাদেশের কোন অঞ্চলটি তুলনামূলকভাবে অধিক বৃষ্টিপ্রবণ?",
    options: [
      "রাজশাহী অঞ্চল",
      "সিলেট অঞ্চল",
      "কুষ্টিয়া অঞ্চল",
      "চাঁপাইনবাবগঞ্জ অঞ্চল"
    ],
    answer: 1,
    explanation: "বাংলাদেশের সিলেট অঞ্চল তুলনামূলকভাবে অধিক বৃষ্টিপ্রবণ।"
  },

  {
    id: "BD155",
    question: "বাংলাদেশের উত্তর-পশ্চিমাঞ্চলের তুলনামূলক শুষ্কতার একটি প্রধান কারণ কী?",
    options: [
      "সমুদ্র থেকে দূরত্ব ও বৃষ্টিবাহী বায়ুর প্রভাব কমে যাওয়া",
      "সেখানে বরফপাত বেশি হওয়া",
      "বঙ্গোপসাগরের জোয়ার না থাকা",
      "ভূমিকম্পের আধিক্য"
    ],
    answer: 0,
    explanation: "উত্তর-পশ্চিমাঞ্চল সমুদ্র থেকে দূরে হওয়ায় এবং বৃষ্টিবাহী বায়ুর প্রভাব তুলনামূলক কমে যাওয়ায় অঞ্চলটি অপেক্ষাকৃত শুষ্ক।"
  },

  {
    id: "BD156",
    question: "বাংলাদেশের প্রধান নদী ব্যবস্থার সঙ্গে নিচের কোন তিনটি নদী সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "কর্ণফুলী, সাঙ্গু ও মাতামুহুরী",
      "তিস্তা, ধরলা ও করতোয়া",
      "পদ্মা, যমুনা ও মেঘনা",
      "কপোতাক্ষ, শিবসা ও পশুর"
    ],
    answer: 2,
    explanation: "বাংলাদেশের প্রধান নদী ব্যবস্থার তিনটি গুরুত্বপূর্ণ নদী হলো পদ্মা, যমুনা ও মেঘনা।"
  },

  {
    id: "BD157",
    question: "বাংলাদেশে ব্রহ্মপুত্র নদের প্রধান প্রবাহ বর্তমানে কোন নামে পরিচিত?",
    options: ["পদ্মা", "তিস্তা", "মেঘনা", "যমুনা"],
    answer: 3,
    explanation: "বাংলাদেশে ব্রহ্মপুত্র নদের প্রধান প্রবাহ যমুনা নামে পরিচিত।"
  },

  {
    id: "BD158",
    question: "পদ্মা ও যমুনার মিলনস্থল কোন নদীর প্রবাহব্যবস্থার সঙ্গে সম্পর্কিত?",
    options: ["মেঘনা", "কর্ণফুলী", "সাঙ্গু", "তিস্তা"],
    answer: 0,
    explanation: "পদ্মা ও যমুনার মিলিত প্রবাহ পরবর্তীতে মেঘনা নদীর প্রবাহব্যবস্থার সঙ্গে যুক্ত হয়।"
  },

  {
    id: "BD159",
    question: "বাংলাদেশের দক্ষিণাঞ্চলে নদী ও সমুদ্রের মিলনভূমিতে কোন ধরনের পরিবেশ সবচেয়ে বেশি দেখা যায়?",
    options: [
      "মরুভূমি",
      "তৃণভূমি",
      "চিরহরিৎ শুষ্ক বন",
      "ম্যানগ্রোভ ও মোহনা পরিবেশ"
    ],
    answer: 3,
    explanation: "দক্ষিণাঞ্চলের নদী ও সমুদ্রের মিলনভূমিতে ম্যানগ্রোভ ও মোহনা পরিবেশ দেখা যায়।"
  },

  {
    id: "BD160",
    question: "বাংলাদেশের উপকূলীয় অঞ্চলে লবণাক্ততা বৃদ্ধির সঙ্গে কোন বিষয়টি সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "পাহাড়ি তুষারপাত",
      "সমুদ্রের পানি প্রবেশ ও মিঠা পানির প্রবাহ হ্রাস",
      "মরুভূমির বালু",
      "ভূগর্ভস্থ কয়লার বৃদ্ধি"
    ],
    answer: 1,
    explanation: "সমুদ্রের লবণাক্ত পানি প্রবেশ এবং মিঠা পানির প্রবাহ কমে যাওয়ায় উপকূলীয় অঞ্চলে লবণাক্ততা বৃদ্ধি পায়।"
  },

  {
    id: "BD161",
    question: "বাংলাদেশের উপকূলীয় অঞ্চলে ঘূর্ণিঝড়ের ক্ষয়ক্ষতি কমাতে কোন প্রাকৃতিক প্রতিবন্ধকটি বিশেষ গুরুত্বপূর্ণ?",
    options: [
      "চা-বাগান",
      "হাওর",
      "ম্যানগ্রোভ বন",
      "পাহাড়ি বন"
    ],
    answer: 2,
    explanation: "ম্যানগ্রোভ বন উপকূলীয় এলাকায় ঘূর্ণিঝড় ও জলোচ্ছ্বাসের ক্ষয়ক্ষতি কমাতে গুরুত্বপূর্ণ প্রাকৃতিক প্রতিবন্ধক হিসেবে কাজ করে।"
  },

  {
    id: "BD162",
    question: "ম্যানগ্রোভ উদ্ভিদের একটি গুরুত্বপূর্ণ বৈশিষ্ট্য কোনটি?",
    options: [
      "কেবল তুষারাচ্ছন্ন এলাকায় জন্মায়",
      "মরুভূমিতে পানি ছাড়া বেঁচে থাকে",
      "শুধু মিঠা পানির পাহাড়ি এলাকায় জন্মায়",
      "অতিরিক্ত লবণাক্ত পরিবেশে অভিযোজিত হতে পারে"
    ],
    answer: 3,
    explanation: "ম্যানগ্রোভ উদ্ভিদ লবণাক্ত ও জলাবদ্ধ উপকূলীয় পরিবেশে টিকে থাকার জন্য বিশেষভাবে অভিযোজিত।"
  },

  {
    id: "BD163",
    question: "সুন্দরবনের অন্যতম প্রধান বৃক্ষ প্রজাতি কোনটি?",
    options: ["শাল", "গর্জন", "সুন্দরী", "সেগুন"],
    answer: 2,
    explanation: "সুন্দরী সুন্দরবনের অন্যতম প্রধান বৃক্ষ প্রজাতি।"
  },

  {
    id: "BD164",
    question: "সুন্দরবনের ‘সুন্দরী’ গাছের বৈজ্ঞানিক নাম কোনটি?",
    options: [
      "Avicennia officinalis",
      "Heritiera fomes",
      "Nypa fruticans",
      "Sonneratia apetala"
    ],
    answer: 1,
    explanation: "সুন্দরী গাছের বৈজ্ঞানিক নাম Heritiera fomes।"
  },

  {
    id: "BD165",
    question: "সুন্দরবনের ম্যানগ্রোভ পরিবেশে ‘শ্বাসমূল’ বা pneumatophore-এর প্রধান কাজ কী?",
    options: [
      "জলাবদ্ধ মাটিতে গ্যাসীয় বিনিময়ে সহায়তা করা",
      "মাটির নিচ থেকে অতিরিক্ত লবণ শোষণ",
      "ফলের আকার বৃদ্ধি করা",
      "গাছকে সম্পূর্ণ পানির নিচে রাখা"
    ],
    answer: 0,
    explanation: "শ্বাসমূল জলাবদ্ধ ও অক্সিজেনস্বল্প মাটিতে গাছের গ্যাসীয় বিনিময়ে সহায়তা করে।"
  },

  {
    id: "BD170",
    question: "ইলিশ মাছের বৈজ্ঞানিক নাম কোনটি?",
    options: [
      "Labeo rohita",
      "Catla catla",
      "Pangasius pangasius",
      "Tenualosa ilisha"
    ],
    answer: 3,
    explanation: "ইলিশ মাছের বৈজ্ঞানিক নাম Tenualosa ilisha।"
  },

  {
    id: "BD171",
    question: "ইলিশ কোন ধরনের মাছ হিসেবে পরিচিত?",
    options: [
      "শুধু সামুদ্রিক মাছ",
      "শুধু মিঠা পানির মাছ",
      "অ্যানাড্রোমাস বা নদী-সমুদ্রের মধ্যে পরিযায়ী মাছ",
      "শুধু হ্রদের মাছ"
    ],
    answer: 2,
    explanation: "ইলিশ অ্যানাড্রোমাস মাছ; এটি সমুদ্র থেকে নদীতে এসে প্রজনন করে।"
  },

  {
    id: "BD172",
    question: "ইলিশের প্রজনন ও জীবনচক্রের সঙ্গে কোন পরিবেশের সম্পর্ক বিশেষ গুরুত্বপূর্ণ?",
    options: [
      "নদী ও মোহনা",
      "মরুভূমি",
      "পাহাড়ি ঝরনা মাত্র",
      "স্থলভাগের জলাশয় মাত্র"
    ],
    answer: 0,
    explanation: "ইলিশের জীবনচক্রে নদী, মোহনা ও সমুদ্র—এই জলজ পরিবেশগুলোর গুরুত্বপূর্ণ ভূমিকা রয়েছে।"
  },

  {
    id: "BD173",
    question: "বাংলাদেশের হাওর অঞ্চল প্রধানত দেশের কোন অংশে বিস্তৃত?",
    options: [
      "দক্ষিণ-পশ্চিমাঞ্চল",
      "উত্তর-পূর্বাঞ্চল",
      "দক্ষিণ-পূর্বাঞ্চল",
      "উত্তর-পশ্চিমাঞ্চল"
    ],
    answer: 1,
    explanation: "বাংলাদেশের হাওর অঞ্চল প্রধানত উত্তর-পূর্বাঞ্চলে, বিশেষ করে বৃহত্তর সিলেট অঞ্চলে বিস্তৃত।"
  },

  {
    id: "BD174",
    question: "বাংলাদেশের হাওর অঞ্চলের অর্থনীতিতে কোন ফসলটি বিশেষ গুরুত্বপূর্ণ?",
    options: ["চা", "পাট", "বোরো ধান", "তামাক"],
    answer: 2,
    explanation: "হাওর অঞ্চলের অর্থনীতিতে বোরো ধান অত্যন্ত গুরুত্বপূর্ণ।"
  },

  {
    id: "BD175",
    question: "হাওর অঞ্চলে আকস্মিক বন্যা সাধারণত কোন ধরনের বন্যা হিসেবে পরিচিত?",
    options: [
      "জলোচ্ছ্বাস",
      "ফ্ল্যাশ ফ্লাড বা আকস্মিক বন্যা",
      "মরু বন্যা",
      "নগর বন্যা"
    ],
    answer: 1,
    explanation: "হাওর অঞ্চলে পাহাড়ি ঢল ও অতিবৃষ্টির কারণে হঠাৎ যে বন্যা দেখা দেয় তাকে Flash Flood বা আকস্মিক বন্যা বলা হয়।"
  },

  {
    id: "BD176",
    question: "বাংলাদেশের পাহাড়ি বনাঞ্চলের একটি গুরুত্বপূর্ণ বৈশিষ্ট্য কোনটি?",
    options: [
      "সেখানে শুধু ম্যানগ্রোভ উদ্ভিদ জন্মে",
      "সেখানে কোনো বন্যপ্রাণী নেই",
      "সেখানে সারাবছর তুষারপাত হয়",
      "সেখানে জীববৈচিত্র্যের উল্লেখযোগ্য সমৃদ্ধি রয়েছে"
    ],
    answer: 3,
    explanation: "বাংলাদেশের পাহাড়ি বনাঞ্চলে বিভিন্ন উদ্ভিদ ও প্রাণীর উপস্থিতির কারণে জীববৈচিত্র্যের উল্লেখযোগ্য সমৃদ্ধি রয়েছে।"
  },

  {
    id: "BD177",
    question: "বাংলাদেশের পার্বত্য চট্টগ্রামের প্রধান পাহাড়ি জেলা কোন তিনটি?",
    options: [
      "কক্সবাজার, চট্টগ্রাম ও ফেনী",
      "রাঙামাটি, খাগড়াছড়ি ও বান্দরবান",
      "সিলেট, মৌলভীবাজার ও হবিগঞ্জ",
      "ময়মনসিংহ, শেরপুর ও নেত্রকোনা"
    ],
    answer: 1,
    explanation: "পার্বত্য চট্টগ্রামের তিনটি জেলা হলো রাঙামাটি, খাগড়াছড়ি ও বান্দরবান।"
  },

  {
    id: "BD178",
    question: "বাংলাদেশের ভূপ্রকৃতিতে ‘চর’ সাধারণত কীভাবে সৃষ্টি হয়?",
    options: [
      "আগ্নেয়গিরির অগ্ন্যুৎপাতের ফলে",
      "ভূমিকম্পের ফলে পাহাড় সৃষ্টি হয়ে",
      "নদীর পলি সঞ্চয়ের ফলে",
      "সমুদ্রের লবণ জমে"
    ],
    answer: 2,
    explanation: "নদীর প্রবাহে বহন করে আনা পলি কোনো স্থানে সঞ্চিত হয়ে নতুন ভূমিরূপ তৈরি করলে তাকে সাধারণত চর বলা হয়।"
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