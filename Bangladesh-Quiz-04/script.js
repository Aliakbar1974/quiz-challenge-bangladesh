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
    question: "১৯৫৪ সালের যুক্তফ্রন্ট নির্বাচনে যুক্তফ্রন্টের নির্বাচনী প্রতীক কী ছিল?",
    options: [
        "ধানের শীষ",
        "নৌকা",
        "হুক্কা",
        "লাঙ্গল"
    ],
    answer: 1,
    explanation: "১৯৫৪ সালের যুক্তফ্রন্ট নির্বাচনে যুক্তফ্রন্টের নির্বাচনী প্রতীক ছিল নৌকা।"
},

{
    question: "বাংলাদেশের প্রথম অস্থায়ী সরকারের শপথ গ্রহণের স্থান কোনটি?",
    options: [
        "বৈদ্যনাথতলা",
        "কুষ্টিয়া",
        "মেহেরপুর",
        "চুয়াডাঙ্গা"
    ],
    answer: 0,
    explanation: "১৯৭১ সালের ১৭ এপ্রিল মেহেরপুরের বৈদ্যনাথতলায় বাংলাদেশের প্রথম অস্থায়ী সরকার শপথ গ্রহণ করে।"
},

{
    question: "মুজিবনগর সরকারের অস্থায়ী রাষ্ট্রপতির দায়িত্ব কে পালন করেন?",
    options: [
        "তাজউদ্দীন আহমদ",
        "এ. এইচ. এম. কামারুজ্জামান",
        "ক্যাপ্টেন এম. মনসুর আলী",
        "সৈয়দ নজরুল ইসলাম"
    ],
    answer: 3,
    explanation: "বঙ্গবন্ধু শেখ মুজিবুর রহমান পাকিস্তানে বন্দী থাকায় সৈয়দ নজরুল ইসলাম অস্থায়ী রাষ্ট্রপতির দায়িত্ব পালন করেন।"
},

{
    question: "মুক্তিযুদ্ধের সময় বাংলাদেশকে মোট কয়টি সেক্টরে ভাগ করা হয়েছিল?",
    options: [
        "১০টি",
        "১১টি",
        "৯টি",
        "১২টি"
    ],
    answer: 1,
    explanation: "মুক্তিযুদ্ধ পরিচালনার সুবিধার্থে বাংলাদেশকে মোট ১১টি সেক্টরে ভাগ করা হয়েছিল।"
},

{
    question: "মুক্তিযুদ্ধের ১০ নম্বর সেক্টরের বিশেষ দায়িত্ব কী ছিল?",
    options: [
        "নৌ-কমান্ডো অভিযান",
        "সীমান্ত প্রতিরক্ষা",
        "বিমান অভিযান",
        "কূটনৈতিক যোগাযোগ"
    ],
    answer: 0,
    explanation: "১০ নম্বর সেক্টর মূলত নৌ-কমান্ডো অভিযান ও জলপথে পরিচালিত বিশেষ সামরিক কার্যক্রমের সঙ্গে যুক্ত ছিল।"
},

{
    question: "বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে রাষ্ট্রের চার মূলনীতি উল্লেখ করা হয়েছে?",
    options: [
        "৯",
        "৭",
        "১২",
        "৮"
    ],
    answer: 3,
    explanation: "বাংলাদেশের সংবিধানের ৮ নম্বর অনুচ্ছেদে জাতীয়তাবাদ, সমাজতন্ত্র, গণতন্ত্র ও ধর্মনিরপেক্ষতাকে রাষ্ট্র পরিচালনার মূলনীতি হিসেবে উল্লেখ করা হয়েছে।"
},

{
    question: "বাংলাদেশের সংবিধানের ৭ নম্বর অনুচ্ছেদের মূল বিষয় কী?",
    options: [
        "মৌলিক অধিকার",
        "প্রজাতন্ত্রের সর্বোচ্চ আইন হিসেবে সংবিধান",
        "রাষ্ট্রধর্ম",
        "জাতীয় সংসদ"
    ],
    answer: 1,
    explanation: "সংবিধানের ৭ নম্বর অনুচ্ছেদে সংবিধানকে প্রজাতন্ত্রের সর্বোচ্চ আইন হিসেবে প্রতিষ্ঠিত করা হয়েছে।"
},

{
    question: "বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে ‘আইনের দৃষ্টিতে সমতা’ নিশ্চিত করা হয়েছে?",
    options: [
        "২৮",
        "২৭",
        "৩০",
        "২৯"
    ],
    answer: 1,
    explanation: "বাংলাদেশের সংবিধানের ২৭ নম্বর অনুচ্ছেদে সকল নাগরিক আইনের দৃষ্টিতে সমান এবং আইনের সমান আশ্রয় লাভের অধিকারী বলে উল্লেখ করা হয়েছে।"
},

{
    question: "বাংলাদেশের সংবিধানের কোন অনুচ্ছেদে সরকারি চাকরিতে সুযোগের সমতার কথা বলা হয়েছে?",
    options: [
        "৩১",
        "২৮",
        "২৯",
        "২৭"
    ],
    answer: 2,
    explanation: "সংবিধানের ২৯ নম্বর অনুচ্ছেদে প্রজাতন্ত্রের কর্মে নিয়োগ বা পদ লাভের ক্ষেত্রে সকল নাগরিকের জন্য সুযোগের সমতার কথা বলা হয়েছে।"
},

{
    question: "বাংলাদেশের সংবিধানের ৩১ নম্বর অনুচ্ছেদ মূলত কোন অধিকারকে সুরক্ষা দেয়?",
    options: [
        "ভোটাধিকার",
        "শিক্ষার অধিকার",
        "সম্পত্তির অধিকার",
        "আইনের আশ্রয় লাভের অধিকার"
    ],
    answer: 3,
    explanation: "সংবিধানের ৩১ নম্বর অনুচ্ছেদে আইনের আশ্রয় লাভ এবং আইন অনুযায়ী আচরণ পাওয়ার অধিকার সুরক্ষিত হয়েছে।"
},

{
    question: "বাংলাদেশের রাষ্ট্রপতি নির্বাচিত হন কার দ্বারা?",
    options: [
        "জাতীয় সংসদের সদস্যদের দ্বারা",
        "জনগণের সরাসরি ভোটে",
        "নির্বাচন কমিশনের মাধ্যমে সরাসরি",
        "সুপ্রিম কোর্টের বিচারপতিদের দ্বারা"
    ],
    answer: 0,
    explanation: "বাংলাদেশের রাষ্ট্রপতি জাতীয় সংসদের সদস্যদের দ্বারা নির্বাচিত হন।"
},

{
    question: "বাংলাদেশের সংবিধান অনুযায়ী রাষ্ট্রপতির মেয়াদ কত বছর?",
    options: [
        "৬ বছর",
        "৫ বছর",
        "৭ বছর",
        "৪ বছর"
    ],
    answer: 1,
    explanation: "বাংলাদেশের সংবিধান অনুযায়ী রাষ্ট্রপতির মেয়াদ পাঁচ বছর।"
},

{
    question: "বাংলাদেশের জাতীয় সংসদে সাধারণ নির্বাচনে সরাসরি নির্বাচিত আসন সংখ্যা কত?",
    options: [
        "৩৩০",
        "৪০০",
        "৩০০",
        "৩৫০"
    ],
    answer: 2,
    explanation: "বাংলাদেশের জাতীয় সংসদে সাধারণ নির্বাচনে সরাসরি নির্বাচিত আসন সংখ্যা ৩০০টি।"
},

{
    question: "বাংলাদেশের জাতীয় সংসদে সংরক্ষিত নারী আসনের সংখ্যা বর্তমানে কত?",
    options: [
        "৫০",
        "৩০",
        "৬০",
        "৪৫"
    ],
    answer: 0,
    explanation: "বাংলাদেশের জাতীয় সংসদে সংরক্ষিত নারী আসনের সংখ্যা ৫০টি।"
},

{
    question: "বাংলাদেশের সুপ্রিম কোর্ট কোন দুটি বিভাগ নিয়ে গঠিত?",
    options: [
        "দেওয়ানি ও ফৌজদারি",
        "জেলা ও দায়রা",
        "প্রশাসনিক ও সাংবিধানিক",
        "হাইকোর্ট বিভাগ ও আপিল বিভাগ"
    ],
    answer: 3,
    explanation: "বাংলাদেশের সুপ্রিম কোর্ট হাইকোর্ট বিভাগ এবং আপিল বিভাগ—এই দুটি বিভাগ নিয়ে গঠিত।"
},

{
    question: "বাংলাদেশের কেন্দ্রীয় ব্যাংকের নাম কী?",
    options: [
        "জনতা ব্যাংক",
        "বাংলাদেশ ব্যাংক",
        "বাংলাদেশ কৃষি ব্যাংক",
        "সোনালী ব্যাংক"
    ],
    answer: 1,
    explanation: "বাংলাদেশের কেন্দ্রীয় ব্যাংকের নাম বাংলাদেশ ব্যাংক।"
},

{
    question: "বাংলাদেশ ব্যাংক প্রতিষ্ঠিত হয় কোন সালে?",
    options: [
        "১৯৭৩",
        "১৯৭৫",
        "১৯৭২",
        "১৯৭১"
    ],
    answer: 2,
    explanation: "বাংলাদেশ ব্যাংক ১৯৭২ সালে প্রতিষ্ঠিত হয়।"
},

{
    question: "বাংলাদেশের মুদ্রা ‘টাকা’-র প্রতীক হিসেবে কোন চিহ্ন ব্যবহৃত হয়?",
    options: [
        "₦",
        "₱",
        "₹",
        "৳"
    ],
    answer: 3,
    explanation: "বাংলাদেশের মুদ্রা টাকার প্রতীক হিসেবে ৳ চিহ্ন ব্যবহৃত হয়।"
},

{
    question: "বাংলাদেশের প্রথম পঞ্চবার্ষিক পরিকল্পনার সময়কাল কোনটি?",
    options: [
        "১৯৭২–১৯৭৭",
        "১৯৭৫–১৯৮০",
        "১৯৭৬–১৯৮১",
        "১৯৭৩–১৯৭৮"
    ],
    answer: 3,
    explanation: "বাংলাদেশের প্রথম পঞ্চবার্ষিক পরিকল্পনার সময়কাল ১৯৭৩–১৯৭৮ হিসেবে উল্লেখ করা হয়।"
},

{
    question: "বাংলাদেশের ‘সোনালি আঁশ’ নামে কোন পণ্য পরিচিত?",
    options: [
        "আখ",
        "পাট",
        "চা",
        "তুলা"
    ],
    answer: 1,
    explanation: "পাটকে বাংলাদেশের ‘সোনালি আঁশ’ বলা হয়।"
},

{
    question: "বাংলাদেশের প্রথম EPZ কোনটি?",
    options: [
        "আদমজী EPZ",
        "কুমিল্লা EPZ",
        "চট্টগ্রাম EPZ",
        "ঢাকা EPZ"
    ],
    answer: 2,
    explanation: "বাংলাদেশের প্রথম EPZ হিসেবে চট্টগ্রাম EPZ প্রতিষ্ঠিত হয়।"
},

{
    question: "বাংলাদেশের প্রথম EPZ কোন সালে প্রতিষ্ঠিত হয়?",
    options: [
        "১৯৮৩",
        "১৯৮৫",
        "১৯৮০",
        "১৯৮৮"
    ],
    answer: 0,
    explanation: "বাংলাদেশের প্রথম EPZ চট্টগ্রামে ১৯৮৩ সালে প্রতিষ্ঠিত হয়।"
},

{
    question: "বাংলাদেশের প্রথম আদমশুমারি স্বাধীনতার পর কোন সালে অনুষ্ঠিত হয়?",
    options: [
        "১৯৭৫",
        "১৯৭৩",
        "১৯৭২",
        "১৯৭৪"
    ],
    answer: 3,
    explanation: "স্বাধীনতার পর বাংলাদেশের প্রথম আদমশুমারি ১৯৭৪ সালে অনুষ্ঠিত হয়।"
},

{
    question: "বাংলাদেশের জাতীয় পতাকার লাল বৃত্তটি সাধারণভাবে কী নির্দেশ করে?",
    options: [
        "কৃষি ও সমৃদ্ধি",
        "স্বাধীনতার সূর্য ও আত্মত্যাগ",
        "নদী ও জলসম্পদ",
        "ধর্মীয় ঐতিহ্য"
    ],
    answer: 1,
    explanation: "জাতীয় পতাকার লাল বৃত্ত উদীয়মান সূর্য এবং স্বাধীনতার জন্য আত্মত্যাগের প্রতীক হিসেবে ব্যাখ্যা করা হয়।"
},

{
    question: "বাংলাদেশের জাতীয় প্রতীকে কোন ফুলটি প্রধানভাবে ব্যবহৃত হয়েছে?",
    options: [
        "গোলাপ",
        "বেলি",
        "শাপলা",
        "পদ্ম"
    ],
    answer: 2,
    explanation: "বাংলাদেশের জাতীয় প্রতীকের কেন্দ্রস্থলে শাপলা ফুল রয়েছে।"
},

{
    question: "বাংলাদেশের জাতীয় প্রতীকের দুই পাশে কোন ফসলের শীষ রয়েছে?",
    options: [
        "ধান",
        "পাট",
        "গম",
        "ভুট্টা"
    ],
    answer: 0,
    explanation: "বাংলাদেশের জাতীয় প্রতীকের দুই পাশে ধানের শীষ রয়েছে।"
},

{
    question: "বাংলাদেশের জাতীয় পতাকার সবুজ রং সাধারণভাবে কী নির্দেশ করে?",
    options: [
        "ভাষা আন্দোলন",
        "বিজয়",
        "সমুদ্র",
        "বাংলাদেশের সবুজ প্রকৃতি ও তারুণ্য"
    ],
    answer: 3,
    explanation: "জাতীয় পতাকার সবুজ রং বাংলাদেশের সবুজ প্রকৃতি, প্রাণশক্তি ও তারুণ্যের প্রতীক হিসেবে সাধারণভাবে ব্যাখ্যা করা হয়।"
},

{
    question: "বাংলাদেশের মুক্তিযুদ্ধের সময় ১১টি সেক্টরের বাইরে বিশেষভাবে গঠিত নিয়মিত বাহিনীর ব্রিগেডগুলোর মধ্যে কোনটি ছিল?",
    options: [
        "জেড ফোর্স",
        "এস ফোর্স",
        "সবগুলো",
        "কে ফোর্স"
    ],
    answer: 2,
    explanation: "মুক্তিযুদ্ধের সময় ১১টি সেক্টরের পাশাপাশি জেড ফোর্স, কে ফোর্স ও এস ফোর্স নামে তিনটি নিয়মিত ব্রিগেড গঠিত হয়েছিল। তাই সঠিক উত্তর সবগুলো।"
},

{
    question: "১৯৭১ সালের মুক্তিযুদ্ধে বাংলাদেশকে ১১টি সেক্টরে বিভক্ত করার প্রধান উদ্দেশ্য কী ছিল?",
    options: [
        "নতুন জেলা সৃষ্টি করা",
        "সামরিক অভিযানকে সংগঠিত ও সমন্বিত করা",
        "প্রশাসনিক অঞ্চল পুনর্গঠন",
        "অর্থনৈতিক অঞ্চল নির্ধারণ করা"
    ],
    answer: 1,
    explanation: "মুক্তিযুদ্ধের সময় বাংলাদেশকে ১১টি সেক্টরে ভাগ করার প্রধান উদ্দেশ্য ছিল বিভিন্ন অঞ্চলে সামরিক অভিযানকে সংগঠিত, পরিচালনা ও সমন্বিত করা।"
},

{
    question: "বাংলাদেশের মুক্তিযুদ্ধের সময় ১১ নম্বর সেক্টরের সঙ্গে কোন অঞ্চলটি প্রধানত সম্পর্কিত ছিল?",
    options: [
        "ময়মনসিংহ ও টাঙ্গাইলের বিস্তীর্ণ এলাকা",
        "সিলেট ও কুমিল্লা",
        "খুলনা ও বরিশাল",
        "চট্টগ্রাম ও পার্বত্য চট্টগ্রাম"
    ],
    answer: 0,
    explanation: "মুক্তিযুদ্ধের সময় ১১ নম্বর সেক্টরের প্রধান এলাকার মধ্যে ময়মনসিংহ ও টাঙ্গাইল ছিল। এর পাশাপাশি রংপুরের কিছু অংশ—গাইবান্ধা, উলিপুর, কামালপুর ও চিলমারীও এই সেক্টরের আওতাভুক্ত ছিল। তাই ময়মনসিংহ ও টাঙ্গাইল ১১ নম্বর সেক্টরের সঙ্গে প্রধানত সম্পর্কিত অঞ্চল।"
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