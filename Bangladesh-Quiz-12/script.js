// ============================================================
// BANGLADESH QUIZ 11
// Web Quiz Engine
// 23 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122112219681435742&set=a.122102731923435742";


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
// QUIZ DATA
// ============================================================

const quizData = [

    // =========================
    // BD277
    // =========================
    {
        id: "BD277",
        question: "বাংলাদেশের জাতীয় সংসদে সংরক্ষিত নারী আসনের সদস্যরা কীভাবে নির্বাচিত হন?",
        options: [
            "রাষ্ট্রপতির মনোনয়নে",
            "সংসদ সদস্যদের দ্বারা আনুপাতিক প্রতিনিধিত্বের ভিত্তিতে",
            "সরাসরি জনগণের ভোটে",
            "প্রধানমন্ত্রীর মনোনয়নে"
        ],
        answer: 1,
        explanation: "জাতীয় সংসদের সংরক্ষিত নারী আসনের সদস্যরা সংসদ সদস্যদের দ্বারা আনুপাতিক প্রতিনিধিত্বের ভিত্তিতে নির্বাচিত হন।"
    },

    // =========================
    // BD278
    // =========================
    {
        id: "BD278",
        question: "বাংলাদেশের সর্বোচ্চ বিচারালয় কোনটি?",
        options: [
            "জেলা জজ আদালত",
            "হাইকোর্ট বিভাগ",
            "বাংলাদেশ সুপ্রিম কোর্ট",
            "আপিল বিভাগ"
        ],
        answer: 2,
        explanation: "বাংলাদেশের সর্বোচ্চ বিচারালয় হলো বাংলাদেশ সুপ্রিম কোর্ট।"
    },

    // =========================
    // BD279
    // =========================
    {
        id: "BD279",
        question: "বাংলাদেশ সুপ্রিম কোর্টের দুটি বিভাগ কোনগুলো?",
        options: [
            "হাইকোর্ট বিভাগ ও আপিল বিভাগ",
            "দেওয়ানি ও ফৌজদারি",
            "প্রশাসনিক ও সাংবিধানিক বিভাগ",
            "জেলা ও দায়রা বিভাগ"
        ],
        answer: 0,
        explanation: "বাংলাদেশ সুপ্রিম কোর্ট দুটি বিভাগ নিয়ে গঠিত—হাইকোর্ট বিভাগ ও আপিল বিভাগ।"
    },

    // =========================
    // BD280
    // =========================
    {
        id: "BD280",
        question: "বাংলাদেশের স্থানীয় সরকার ব্যবস্থায় গ্রামীণ পর্যায়ের সবচেয়ে নিম্নস্তরের নির্বাচিত প্রতিষ্ঠান কোনটি?",
        options: [
            "উপজেলা পরিষদ",
            "জেলা পরিষদ",
            "সিটি কর্পোরেশন",
            "ইউনিয়ন পরিষদ"
        ],
        answer: 3,
        explanation: "গ্রামীণ স্থানীয় সরকার ব্যবস্থার সবচেয়ে নিম্নস্তরের নির্বাচিত প্রতিষ্ঠান হলো ইউনিয়ন পরিষদ।"
    },

    // =========================
    // BD281
    // =========================
    {
        id: "BD281",
        question: "বাংলাদেশের কেন্দ্রীয় ব্যাংক কোনটি?",
        options: [
            "জনতা ব্যাংক",
            "বাংলাদেশ ব্যাংক",
            "সোনালী ব্যাংক",
            "বাংলাদেশ কৃষি ব্যাংক"
        ],
        answer: 1,
        explanation: "বাংলাদেশের কেন্দ্রীয় ব্যাংকের নাম বাংলাদেশ ব্যাংক।"
    },

    // =========================
    // BD282
    // =========================
    {
        id: "BD282",
        question: "বাংলাদেশ ব্যাংক প্রতিষ্ঠিত হয় কোন সালে?",
        options: [
            "১৯৭২",
            "১৯৭১",
            "১৯৭৫",
            "১৯৭৩"
        ],
        answer: 0,
        explanation: "বাংলাদেশ ব্যাংক ১৯৭২ সালে প্রতিষ্ঠিত হয়।"
    },

    

    // =========================
    // BD284
    // =========================
    {
        id: "BD284",
        question: "বাংলাদেশের তৈরি পোশাক খাত বৈদেশিক মুদ্রা আয়ের প্রধানত কোন উৎসের সঙ্গে সম্পর্কিত?",
        options: [
            "সরকারি ঋণ",
            "রপ্তানি আয়",
            "কৃষি ভর্তুকি",
            "অভ্যন্তরীণ কর"
        ],
        answer: 1,
        explanation: "তৈরি পোশাক খাত বাংলাদেশের অন্যতম প্রধান রপ্তানি খাত এবং বৈদেশিক মুদ্রা আয়ের গুরুত্বপূর্ণ উৎস।"
    },

    // =========================
    // BD285
    // =========================
    {
        id: "BD285",
        question: "বাংলাদেশের তৈরি পোশাক শিল্পের প্রধান রপ্তানি বাজারগুলোর মধ্যে কোন দুটি বিশেষভাবে গুরুত্বপূর্ণ?",
        options: [
            "দক্ষিণ আমেরিকা ও মধ্য এশিয়া",
            "অস্ট্রেলিয়া ও নিউজিল্যান্ড",
            "আফ্রিকা ও অ্যান্টার্কটিকা",
            "ইউরোপীয় ইউনিয়ন ও যুক্তরাষ্ট্র"
        ],
        answer: 3,
        explanation: "ইউরোপীয় ইউনিয়ন ও যুক্তরাষ্ট্র বাংলাদেশের তৈরি পোশাকের প্রধান ও গুরুত্বপূর্ণ রপ্তানি বাজার।"
    },

    // =========================
    // BD286
    // =========================
    {
        id: "BD286",
        question: "বাংলাদেশের প্রথম কৃত্রিম উপগ্রহের নাম কী?",
        options: [
            "বঙ্গবন্ধু-১",
            "বাংলাদেশ-১",
            "স্যাটেলাইট-৭১",
            "বিজয়-১"
        ],
        answer: 0,
        explanation: "বাংলাদেশের প্রথম কৃত্রিম উপগ্রহের নাম বঙ্গবন্ধু-১।"
    },

    // =========================
    // BD287
    // =========================
    {
        id: "BD287",
        question: "বঙ্গবন্ধু-১ স্যাটেলাইট উৎক্ষেপণ করা হয় কোন সালে?",
        options: [
            "২০১৭",
            "২০১৯",
            "২০১৮",
            "২০১৬"
        ],
        answer: 2,
        explanation: "বঙ্গবন্ধু-১ স্যাটেলাইট ২০১৮ সালে উৎক্ষেপণ করা হয়।"
    },

    // =========================
    // BD288
    // =========================
    {
        id: "BD288",
        question: "বঙ্গবন্ধু-১ স্যাটেলাইট কোন ধরনের কক্ষপথে স্থাপন করা হয়েছে?",
        options: [
            "মেরু কক্ষপথ",
            "ভূ-স্থির কক্ষপথ",
            "চন্দ্র কক্ষপথ",
            "নিম্ন-পৃথিবী কক্ষপথ"
        ],
        answer: 1,
        explanation: "বঙ্গবন্ধু-১ একটি ভূ-স্থির কক্ষপথের যোগাযোগ উপগ্রহ।"
    },

    // =========================
    // BD289
    // =========================
    {
        id: "BD289",
        question: "বাংলাদেশের প্রথম পারমাণবিক বিদ্যুৎকেন্দ্র কোনটি?",
        options: [
            "আশুগঞ্জ",
            "ঘোড়াশাল",
            "রূপপুর",
            "কাপ্তাই"
        ],
        answer: 2,
        explanation: "বাংলাদেশের প্রথম পারমাণবিক বিদ্যুৎকেন্দ্র রূপপুরে নির্মিত হচ্ছে।"
    },

    // =========================
    // BD290
    // =========================
    {
        id: "BD290",
        question: "রূপপুর পারমাণবিক বিদ্যুৎকেন্দ্র কোন জেলায় অবস্থিত?",
        options: [
            "পাবনা",
            "রাজশাহী",
            "কুষ্টিয়া",
            "নাটোর"
        ],
        answer: 0,
        explanation: "রূপপুর পারমাণবিক বিদ্যুৎকেন্দ্র পাবনা জেলার ঈশ্বরদীতে অবস্থিত।"
    },

    // =========================
    // BD291
    // =========================
    {
        id: "BD291",
        question: "বাংলাদেশের একমাত্র জলবিদ্যুৎকেন্দ্র কোনটি?",
        options: [
            "আশুগঞ্জ বিদ্যুৎকেন্দ্র",
            "কাপ্তাই জলবিদ্যুৎকেন্দ্র",
            "রূপপুর বিদ্যুৎকেন্দ্র",
            "ঘোড়াশাল বিদ্যুৎকেন্দ্র"
        ],
        answer: 1,
        explanation: "কাপ্তাই জলবিদ্যুৎকেন্দ্র বাংলাদেশের একমাত্র জলবিদ্যুৎকেন্দ্র।"
    },

    // =========================
    // BD292
    // =========================
    {
        id: "BD292",
        question: "কাপ্তাই জলবিদ্যুৎকেন্দ্র কোন নদীর ওপর নির্মিত?",
        options: [
            "তিস্তা",
            "যমুনা",
            "কর্ণফুলী",
            "সাঙ্গু"
        ],
        answer: 2,
        explanation: "কাপ্তাই জলবিদ্যুৎকেন্দ্র কর্ণফুলী নদীর ওপর নির্মিত কাপ্তাই বাঁধের সঙ্গে সম্পর্কিত।"
    },

    // =========================
    // BD293
    // =========================
    {
        id: "BD293",
        question: "বাংলাদেশের সবচেয়ে বড় কৃত্রিম জলাধার হিসেবে পরিচিত কোনটি?",
        options: [
            "হাকালুকি হাওর",
            "বাইক্কা বিল",
            "টাঙ্গুয়ার হাওর",
            "কাপ্তাই হ্রদ"
        ],
        answer: 3,
        explanation: "কাপ্তাই হ্রদ বাংলাদেশের সবচেয়ে বড় কৃত্রিম জলাধার হিসেবে পরিচিত।"
    },

    // =========================
    // BD295
    // =========================
    {
        id: "BD295",
        question: "বাংলাদেশ প্রথম কোন সালে ক্রিকেট বিশ্বকাপে অংশগ্রহণ করে?",
        options: [
            "১৯৯৯",
            "১৯৯৬",
            "২০০৭",
            "২০০৩"
        ],
        answer: 0,
        explanation: "বাংলাদেশ প্রথমবার ১৯৯৯ সালে ক্রিকেট বিশ্বকাপে অংশগ্রহণ করে।"
    },

    // =========================
    // BD296
    // =========================
    {
        id: "BD296",
        question: "বাংলাদেশ কোন সালে টেস্ট ক্রিকেটের পূর্ণ সদস্যপদ লাভ করে?",
        options: [
            "১৯৯৮",
            "২০০০",
            "১৯৯৭",
            "২০০২"
        ],
        answer: 1,
        explanation: "বাংলাদেশ ২০০০ সালে আইসিসির পূর্ণ সদস্য হয়ে টেস্ট মর্যাদা লাভ করে।"
    },

    // =========================
    // BD297
    // =========================
    {
        id: "BD297",
        question: "বাংলাদেশের প্রথম টেস্ট ক্রিকেট ম্যাচ কোন দলের বিপক্ষে অনুষ্ঠিত হয়?",
        options: [
            "শ্রীলঙ্কা",
            "ইংল্যান্ড",
            "ভারত",
            "পাকিস্তান"
        ],
        answer: 2,
        explanation: "বাংলাদেশের প্রথম টেস্ট ম্যাচ ২০০০ সালে ভারতের বিপক্ষে ঢাকায় অনুষ্ঠিত হয়।"
    },

    // =========================
    // BD299
    // =========================
    {
        id: "BD299",
        question: "বাংলাদেশ জাতীয় জাদুঘর প্রতিষ্ঠিত হয় কোন সালে?",
        options: [
            "১৯৭৫",
            "১৯৮৩",
            "১৯৭৩",
            "১৯৭২"
        ],
        answer: 1,
        explanation: "বাংলাদেশ জাতীয় জাদুঘর ১৯৮৩ সালে প্রতিষ্ঠিত হয়। এর পূর্বসূরি ঢাকা জাদুঘর প্রতিষ্ঠিত হয়েছিল ১৯১৩ সালে।"
    }

];


// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";
let timer;
let timeLeft = 15;
let answered = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");

const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const feedbackElement = document.getElementById("feedback");
const correctMessage = document.getElementById("correct-message");
const wrongMessage = document.getElementById("wrong-message");
const exampleText = document.getElementById("example-text");

const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");

const statusElement = document.getElementById("status");
const socialMessage = document.querySelector(".social-message");


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

    if (startScreen) startScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";

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

    if (questionNumber) questionNumber.textContent = currentQuestion + 1;
    if (totalQuestions) totalQuestions.textContent = quizData.length;

    if (progressBar) {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = progress + "%";
    }

    if (questionElement) questionElement.textContent = q.question;
    if (optionsElement) optionsElement.innerHTML = "";

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.textContent = "";

    // Create answer buttons (CSS Class answer-option অনুযায়ী মেলানো হয়েছে)
    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-option";
        button.type = "button";

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;

        button.addEventListener("click", function () {
            selectAnswer(index, button);
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });

    if (selectedMode === "exam") {
        timeLeft = 15;
        updateTimer();

        timer = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    } else {
        if (timerElement) timerElement.textContent = "∞";
    }
}


// ============================================================
// TIMER DISPLAY
// ============================================================

function updateTimer() {
    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 5) {
        timerElement.classList.add("timer-danger");
    } else {
        timerElement.classList.remove("timer-danger");
    }
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(selectedIndex, clickedButton) {
    if (answered) return;
    answered = true;

    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;
        if (clickedButton) clickedButton.classList.add("correct");

        playSound("correct");

        if (correctMessage) correctMessage.textContent = "✓ সঠিক উত্তর!";
        if (wrongMessage) wrongMessage.textContent = "";

        if (selectedMode === "learning") {
            if (feedbackElement) feedbackElement.style.display = "block";
            if (exampleText && q.explanation) {
                exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
            }
        }
    } else {
        if (clickedButton) clickedButton.classList.add("wrong");
        if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

        playSound("wrong");

        if (wrongMessage) wrongMessage.textContent = "✗ ভুল উত্তর!";
        if (correctMessage) {
            correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
        }

        if (feedbackElement) feedbackElement.style.display = "block";
        if (exampleText && q.explanation) {
            exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
        }
    }

    showNextButton();
}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {
    if (answered) return;
    answered = true;

    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

    playSound("tryAgain");

    if (wrongMessage) wrongMessage.textContent = "⏰ সময় শেষ!";
    if (correctMessage) {
        correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
    }

    if (feedbackElement) feedbackElement.style.display = "block";
    if (exampleText && q.explanation) {
        exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
    }

    showNextButton();
}


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");
    nextButton.id = "next-question-btn";
    nextButton.className = "next-question-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "পরবর্তী প্রশ্ন →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "ফলাফল দেখুন 🎉";
        nextButton.addEventListener("click", showResult);
    }

    if (quizScreen) {
        quizScreen.appendChild(nextButton);
    }
}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {
    clearInterval(timer);

    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "block";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const percentage = Math.round((score / quizData.length) * 100);

    if (scoreElement) scoreElement.textContent = `${score} / ${quizData.length}`;
    if (percentageElement) percentageElement.textContent = `${percentage}%`;

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent = "🏆 অসাধারণ! আপনার প্রস্তুতি খুবই ভালো।";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent = "🌟 খুব ভালো! আরও একটু অনুশীলন করলে আরও ভালো করবেন।";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent = "👍 ভালো চেষ্টা! নিয়মিত অনুশীলন চালিয়ে যান।";
            playSound("complete");
        } else {
            resultMessage.textContent = "📚 আরও অনুশীলন করুন। পরবর্তী কুইজে আরও ভালো করবেন।";
            playSound("tryAgain");
        }
    }

    if (socialMessage) socialMessage.style.display = "block";
}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (FACEBOOK_POST_URL && FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE") {
        window.location.href = FACEBOOK_POST_URL;
    } else {
        alert("Facebook post link এখনো যোগ করা হয়নি।\n\nscript.js-এর FACEBOOK_POST_URL-এ আপনার Facebook post link বসান।");
    }
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

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";
}


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];

    quizData.forEach(q => {
        if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3) {
            distribution[q.answer]++;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );
})();