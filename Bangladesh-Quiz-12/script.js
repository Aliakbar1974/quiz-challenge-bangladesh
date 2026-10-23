// ============================================================
// BANGLADESH QUIZ 12
// Web Quiz Engine
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/QuizChallengeBangladesh";


// ============================================================
// SOUND ENGINE
// ============================================================

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


// ============================================================
// QUIZ DATA
// ============================================================

const quizData = [

    {
        id: "BD274",
        question: "বাংলাদেশের জাতীয় সংসদ ভবনের স্থপতি কে?",
        options: [
            "লুই আই কান",
            "মাজহারুল ইসলাম",
            "হামিদুর রহমান",
            "ফজলুর রহমান খান"
        ],
        answer: 0,
        explanation: "জাতীয় সংসদ ভবনের নকশা করেছিলেন মার্কিন স্থপতি লুই আই কান।"
    },

    {
        id: "BD275",
        question: "জাতীয় সংসদ ভবন ঢাকার কোন এলাকায় অবস্থিত?",
        options: [
            "আগারগাঁও",
            "শেরেবাংলা নগর",
            "রমনা",
            "মিরপুর"
        ],
        answer: 1,
        explanation: "জাতীয় সংসদ ভবন ঢাকার শেরেবাংলা নগরে অবস্থিত।"
    },

    {
        id: "BD276",
        question: "বাংলাদেশ ধান গবেষণা ইনস্টিটিউটের (BRRI) প্রধান কার্যালয় কোথায়?",
        options: [
            "ময়মনসিংহ",
            "কুমিল্লা",
            "জয়দেবপুর, গাজীপুর",
            "রাজশাহী"
        ],
        answer: 2,
        explanation: "বাংলাদেশ ধান গবেষণা ইনস্টিটিউটের প্রধান কার্যালয় গাজীপুরের জয়দেবপুরে অবস্থিত।"
    },

    {
        id: "BD277",
        question: "বাংলাদেশ বন গবেষণা ইনস্টিটিউটের (BFRI) প্রধান কার্যালয় কোন শহরে?",
        options: [
            "খুলনা",
            "সিলেট",
            "রাজশাহী",
            "চট্টগ্রাম"
        ],
        answer: 3,
        explanation: "বাংলাদেশ বন গবেষণা ইনস্টিটিউটের প্রধান কার্যালয় চট্টগ্রামে অবস্থিত।"
    },

    {
        id: "BD278",
        question: "বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউটের প্রধান কার্যালয় কোথায়?",
        options: [
            "ময়মনসিংহ",
            "বরিশাল",
            "কক্সবাজার",
            "খুলনা"
        ],
        answer: 0,
        explanation: "বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউটের প্রধান কার্যালয় ময়মনসিংহে অবস্থিত।"
    },

    {
        id: "BD279",
        question: "বাংলাদেশ চা গবেষণা ইনস্টিটিউট কোথায় অবস্থিত?",
        options: [
            "রাঙামাটি",
            "শ্রীমঙ্গল",
            "টাঙ্গাইল",
            "দিনাজপুর"
        ],
        answer: 1,
        explanation: "বাংলাদেশ চা গবেষণা ইনস্টিটিউট মৌলভীবাজার জেলার শ্রীমঙ্গলে অবস্থিত।"
    },

    {
        id: "BD280",
        question: "বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশনের (BSTI) প্রধান কাজ কোনটি?",
        options: [
            "জাতীয় নির্বাচন পরিচালনা",
            "মুদ্রানীতি নির্ধারণ",
            "পণ্যের মান নির্ধারণ ও পরীক্ষা",
            "আবহাওয়ার পূর্বাভাস দেওয়া"
        ],
        answer: 2,
        explanation: "BSTI পণ্য ও সেবার মান নির্ধারণ, পরীক্ষা এবং মান-সনদ প্রদানের কাজ করে।"
    },

    {
        id: "BD281",
        question: "বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশনের ইংরেজি সংক্ষিপ্ত রূপ কী?",
        options: [
            "BRTC",
            "BSCIC",
            "BSEC",
            "BTRC"
        ],
        answer: 3,
        explanation: "Bangladesh Telecommunication Regulatory Commission-এর সংক্ষিপ্ত রূপ BTRC।"
    },

    {
        id: "BD282",
        question: "বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষের (BRTA) একটি প্রধান দায়িত্ব কোনটি?",
        options: [
            "মোটরযানের নিবন্ধন ও ড্রাইভিং লাইসেন্স প্রদান",
            "রেলপথ নির্মাণ",
            "বিমানবন্দর পরিচালনা",
            "নদীর নাব্যতা রক্ষা"
        ],
        answer: 0,
        explanation: "BRTA মোটরযানের নিবন্ধন, ড্রাইভিং লাইসেন্স এবং সংশ্লিষ্ট পরিবহন-নিয়ন্ত্রণমূলক সেবা দেয়।"
    },

    {
        id: "BD283",
        question: "বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষের (BIWTA) কাজের সঙ্গে কোনটি সবচেয়ে বেশি সম্পর্কিত?",
        options: [
            "আন্তর্জাতিক বিমান চলাচল",
            "অভ্যন্তরীণ নৌপথ ও নৌপরিবহন ব্যবস্থাপনা",
            "রেলওয়ের সময়সূচি",
            "সড়ক সেতুর টোল আদায়"
        ],
        answer: 1,
        explanation: "BIWTA অভ্যন্তরীণ নৌপথের উন্নয়ন, নাব্যতা ও নৌপরিবহন-সম্পর্কিত বিভিন্ন দায়িত্ব পালন করে।"
    },

    {
        id: "BD284",
        question: "বাংলাদেশ আবহাওয়া অধিদপ্তরের (BMD) প্রধান কাজ কোনটি?",
        options: [
            "কৃষিঋণ বিতরণ",
            "পাসপোর্ট প্রদান",
            "আবহাওয়ার পর্যবেক্ষণ, পূর্বাভাস ও সতর্কবার্তা",
            "জাতীয় বাজেট প্রণয়ন"
        ],
        answer: 2,
        explanation: "BMD আবহাওয়া পর্যবেক্ষণ, পূর্বাভাস এবং ঘূর্ণিঝড়সহ বিভিন্ন আবহাওয়াজনিত দুর্যোগের সতর্কবার্তা দেয়।"
    },

    {
        id: "BD285",
        question: "বাংলাদেশ পানি উন্নয়ন বোর্ডের (BWDB) কাজের মধ্যে কোনটি রয়েছে?",
        options: [
            "শিক্ষাক্রম তৈরি",
            "টেলিযোগাযোগ লাইসেন্স প্রদান",
            "পণ্যমান যাচাই",
            "বন্যা নিয়ন্ত্রণ, পানি নিষ্কাশন ও সেচ-সম্পর্কিত অবকাঠামো"
        ],
        answer: 3,
        explanation: "বাংলাদেশ পানি উন্নয়ন বোর্ড বন্যা নিয়ন্ত্রণ, পানি নিষ্কাশন, সেচ ও নদী ব্যবস্থাপনা-সম্পর্কিত প্রকল্প বাস্তবায়ন করে।"
    },

    {
        id: "BD286",
        question: "বাংলাদেশ রেলওয়ের প্রধান পরিবহন-সেবা কোনটি?",
        options: [
            "রেলপথে যাত্রী ও পণ্য পরিবহন",
            "নৌপথে পণ্য পরিবহন",
            "বিমানবন্দর নিরাপত্তা",
            "ডাক ও পার্সেল বিতরণ"
        ],
        answer: 0,
        explanation: "বাংলাদেশ রেলওয়ে রেলপথে যাত্রী ও পণ্য পরিবহন সেবা পরিচালনা করে।"
    },

    {
        id: "BD287",
        question: "বাংলাদেশ ডাক বিভাগের প্রধান কাজ কোনটি?",
        options: [
            "সমুদ্রবন্দর পরিচালনা",
            "ডাক ও পার্সেল-সংক্রান্ত সেবা প্রদান",
            "মোটরযানের ফিটনেস পরীক্ষা",
            "বন্যার পূর্বাভাস তৈরি"
        ],
        answer: 1,
        explanation: "বাংলাদেশ ডাক বিভাগ চিঠি, ডাকদ্রব্য ও পার্সেলসহ ডাক-সম্পর্কিত সেবা প্রদান করে।"
    },

    {
        id: "BD288",
        question: "বাংলাদেশ ক্ষুদ্র ও কুটির শিল্প করপোরেশনের (BSCIC) কাজের সঙ্গে কোনটি সম্পর্কিত?",
        options: [
            "জাতীয় সংসদ পরিচালনা",
            "মুদ্রা ছাপানো",
            "ক্ষুদ্র ও কুটির শিল্পের উন্নয়ন",
            "আবহাওয়ার তথ্য সংগ্রহ"
        ],
        answer: 2,
        explanation: "BSCIC বাংলাদেশে ক্ষুদ্র, কুটির ও সংশ্লিষ্ট শিল্পের বিকাশে সহায়তা করে।"
    },

    {
        id: "BD289",
        question: "বাংলাদেশ এনার্জি রেগুলেটরি কমিশনের (BERC) প্রধান ভূমিকা কোন ক্ষেত্রের সঙ্গে সম্পর্কিত?",
        options: [
            "শিক্ষা বোর্ডের পরীক্ষা",
            "কৃষিপণ্যের রপ্তানি",
            "বন্যপ্রাণী সংরক্ষণ",
            "জ্বালানি খাতের নিয়ন্ত্রণ ও ট্যারিফ-সংক্রান্ত বিষয়"
        ],
        answer: 3,
        explanation: "বাংলাদেশ এনার্জি রেগুলেটরি কমিশন আইন অনুযায়ী কমিশন জ্বালানি খাতের নিয়ন্ত্রণ ও ট্যারিফ-সংক্রান্ত দায়িত্ব পালন করে।"
    },

    {
        id: "BD290",
        question: "বাংলাদেশ সরকারি কর্ম কমিশনের (BPSC) সাংবিধানিক কাজের মধ্যে কোনটি রয়েছে?",
        options: [
            "প্রজাতন্ত্রের চাকরিতে নিয়োগের জন্য পরীক্ষা গ্রহণ",
            "জাতীয় পরিচয়পত্র তৈরি",
            "সড়ক নির্মাণ",
            "রপ্তানি পণ্যের মান পরীক্ষা"
        ],
        answer: 0,
        explanation: "সংবিধানের ১৪০ অনুচ্ছেদ অনুযায়ী সরকারি কর্ম কমিশন প্রজাতন্ত্রের চাকরিতে উপযুক্ত ব্যক্তি নির্বাচনের জন্য পরীক্ষা গ্রহণ করে এবং নির্দিষ্ট বিষয়ে পরামর্শ দেয়।"
    },

    {
        id: "BD291",
        question: "বাংলাদেশ বেসামরিক বিমান চলাচল কর্তৃপক্ষের (CAAB) প্রধান দায়িত্ব কোনটি?",
        options: [
            "নদীর নাব্যতা বজায় রাখা",
            "বেসামরিক বিমান চলাচল নিয়ন্ত্রণ ও তদারকি",
            "রেলওয়ের টিকিট বিক্রি",
            "মোটরযানের নিবন্ধন"
        ],
        answer: 1,
        explanation: "CAAB বাংলাদেশে বেসামরিক বিমান চলাচল কার্যক্রম নিয়ন্ত্রণ ও তদারকি করে।"
    },

    {
        id: "BD292",
        question: "বাংলাদেশ পরিবেশ অধিদপ্তরের কাজের সঙ্গে কোনটি সবচেয়ে বেশি সম্পর্কিত?",
        options: [
            "জাতীয় বাজেট অনুমোদন",
            "চাল উৎপাদন গবেষণা",
            "পরিবেশ সংরক্ষণ ও দূষণ নিয়ন্ত্রণ",
            "ড্রাইভিং লাইসেন্স প্রদান"
        ],
        answer: 2,
        explanation: "পরিবেশ অধিদপ্তর পরিবেশ সংরক্ষণ, দূষণ নিয়ন্ত্রণ এবং পরিবেশগত আইন বাস্তবায়নে কাজ করে।"
    },

    {
        id: "BD293",
        question: "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউটের (BARI) প্রধান কাজ কোনটি?",
        options: [
            "সমুদ্রবন্দর ব্যবস্থাপনা",
            "বিমান চলাচল নিয়ন্ত্রণ",
            "ডাক সেবা পরিচালনা",
            "বিভিন্ন ফসলের উন্নত জাত ও কৃষি প্রযুক্তি নিয়ে গবেষণা"
        ],
        answer: 3,
        explanation: "বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট ধান ছাড়া বিভিন্ন ফসলের উৎপাদন ও কৃষি প্রযুক্তি উন্নয়নে গবেষণা করে।"
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