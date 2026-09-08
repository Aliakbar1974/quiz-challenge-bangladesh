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

const FACEBOOK_POST_URL = "PASTE_YOUR_FACEBOOK_POST_URL_HERE";


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

    {
        id: "BD251",
        question: "জসীমউদ্দীনকে কোন নামে অভিহিত করা হয়?",
        options: [
            "পল্লিকবি",
            "বিদ্রোহী কবি",
            "রূপসী বাংলার কবি",
            "ছন্দের জাদুকর"
        ],
        answer: 0,
        explanation: "জসীমউদ্দীন বাংলা সাহিত্যে ‘পল্লিকবি’ নামে পরিচিত।"
    },

    {
        id: "BD252",
        question: "‘নকশী কাঁথার মাঠ’ কার রচনা?",
        options: [
            "কাজী নজরুল ইসলাম",
            "জসীমউদ্দীন",
            "সুকান্ত ভট্টাচার্য",
            "জীবনানন্দ দাশ"
        ],
        answer: 1,
        explanation: "‘নকশী কাঁথার মাঠ’ জসীমউদ্দীনের বিখ্যাত কাব্যকাহিনি।"
    },

    {
        id: "BD253",
        question: "‘নকশী কাঁথার মাঠ’ কোন ধরনের রচনা?",
        options: [
            "উপন্যাস",
            "নাটক",
            "কাব্যকাহিনি",
            "প্রবন্ধ"
        ],
        answer: 2,
        explanation: "‘নকশী কাঁথার মাঠ’ একটি বিখ্যাত কাব্যকাহিনি।"
    },

    {
        id: "BD254",
        question: "‘সোজন বাদিয়ার ঘাট’ কার রচনা?",
        options: [
            "জীবনানন্দ দাশ",
            "সুকান্ত ভট্টাচার্য",
            "মাইকেল মধুসূদন দত্ত",
            "জসীমউদ্দীন"
        ],
        answer: 3,
        explanation: "‘সোজন বাদিয়ার ঘাট’ জসীমউদ্দীনের অন্যতম বিখ্যাত রচনা।"
    },

    {
        id: "BD255",
        question: "‘রূপসী বাংলা’ কার কাব্যগ্রন্থ?",
        options: [
            "জীবনানন্দ দাশ",
            "জসীমউদ্দীন",
            "সুকান্ত ভট্টাচার্য",
            "কাজী নজরুল ইসলাম"
        ],
        answer: 0,
        explanation: "‘রূপসী বাংলা’ জীবনানন্দ দাশের বিখ্যাত কাব্যগ্রন্থ।"
    },

    {
        id: "BD256",
        question: "জীবনানন্দ দাশের কবিতায় কোন বিষয়টি বিশেষভাবে ফুটে ওঠে?",
        options: [
            "রাজনীতি ও বিপ্লব",
            "বাংলার প্রকৃতি ও স্মৃতি",
            "শিল্পায়ন ও নগরজীবন",
            "যুদ্ধ ও সামরিক জীবন"
        ],
        answer: 1,
        explanation: "জীবনানন্দ দাশের কবিতায় বাংলার প্রকৃতি, নিসর্গ ও অতীতের স্মৃতি বিশেষভাবে ফুটে উঠেছে।"
    },

    {
        id: "BD257",
        question: "‘ছাড়পত্র’ কার কাব্যগ্রন্থ?",
        options: [
            "জীবনানন্দ দাশ",
            "জসীমউদ্দীন",
            "সুকান্ত ভট্টাচার্য",
            "কাজী নজরুল ইসলাম"
        ],
        answer: 2,
        explanation: "‘ছাড়পত্র’ সুকান্ত ভট্টাচার্যের বিখ্যাত কাব্যগ্রন্থ।"
    },

    {
        id: "BD258",
        question: "সুকান্ত ভট্টাচার্যের কবিতায় কোন বিষয়টি বিশেষভাবে প্রতিফলিত হয়েছে?",
        options: [
            "রোমান্টিক প্রেম",
            "প্রাচীন রাজদরবার",
            "শুধু প্রকৃতির সৌন্দর্য",
            "দুর্ভিক্ষ ও শোষিত মানুষের জীবন"
        ],
        answer: 3,
        explanation: "সুকান্ত ভট্টাচার্যের কবিতায় দুর্ভিক্ষ, দারিদ্র্য ও শোষিত মানুষের জীবন বিশেষভাবে উঠে এসেছে।"
    },

    {
        id: "BD259",
        question: "‘ময়মনসিংহ গীতিকা’ কী?",
        options: [
            "লোকগাথার সংকলন",
            "ঐতিহাসিক উপন্যাস",
            "আধুনিক কাব্যগ্রন্থ",
            "নাটকের সংকলন"
        ],
        answer: 0,
        explanation: "‘ময়মনসিংহ গীতিকা’ মূলত বাংলার লোকগাথা বা লোকবল্লাদের একটি গুরুত্বপূর্ণ সংকলন।"
    },

    {
        id: "BD260",
        question: "‘ময়মনসিংহ গীতিকা’ সংকলন ও সম্পাদনার সঙ্গে কার নাম বিশেষভাবে যুক্ত?",
        options: [
            "দীনেশচন্দ্র রায়",
            "দীনেশচন্দ্র সেন",
            "সুনীতিকুমার চট্টোপাধ্যায়",
            "মুহম্মদ শহীদুল্লাহ"
        ],
        answer: 1,
        explanation: "দীনেশচন্দ্র সেন ময়মনসিংহ অঞ্চলের লোকগাথা সংগ্রহ ও সম্পাদনার সঙ্গে বিশেষভাবে যুক্ত ছিলেন।"
    },

    {
        id: "BD261",
        question: "লালন শাহ কোন লোকসংগীত ধারার সঙ্গে যুক্ত?",
        options: [
            "ভাটিয়ালি",
            "ভাওয়াইয়া",
            "বাউল",
            "জারি"
        ],
        answer: 2,
        explanation: "লালন শাহ বাংলা বাউল সাধনা ও সংগীতের অন্যতম শ্রেষ্ঠ সাধক।"
    },

    {
        id: "BD262",
        question: "লালনের দর্শনের অন্যতম প্রধান বৈশিষ্ট্য কোনটি?",
        options: [
            "সাম্রাজ্যবাদ",
            "জাতিগত বিভাজন",
            "ধর্মীয় সংঘাত",
            "মানবতাবাদ ও অসাম্প্রদায়িকতা"
        ],
        answer: 3,
        explanation: "লালনের দর্শনে মানবতাবাদ, সাম্য ও অসাম্প্রদায়িকতার ওপর বিশেষ গুরুত্ব দেওয়া হয়েছে।"
    },

    {
        id: "BD263",
        question: "লালন শাহ মূলত কী হিসেবে পরিচিত?",
        options: [
            "বাউল সাধক ও গীতিকার",
            "ঐতিহাসিক",
            "নাট্যকার",
            "চিত্রশিল্পী"
        ],
        answer: 0,
        explanation: "লালন শাহ ছিলেন বাংলার অন্যতম শ্রেষ্ঠ বাউল সাধক ও গীতিকার।"
    },

    {
        id: "BD264",
        question: "ভাটিয়ালি গান সাধারণত কোন জীবনের সঙ্গে সম্পর্কিত?",
        options: [
            "পাহাড়ি জীবন",
            "নদী ও নৌকার মাঝিদের জীবন",
            "রাজদরবারের জীবন",
            "কৃষি উৎসব"
        ],
        answer: 1,
        explanation: "ভাটিয়ালি মূলত নদী, নৌকা ও মাঝিদের জীবনকে কেন্দ্র করে গড়ে ওঠা লোকসংগীত।"
    },

    {
        id: "BD265",
        question: "ভাওয়াইয়া গান কোন অঞ্চলের লোকসংগীত?",
        options: [
            "সিলেট অঞ্চল",
            "চট্টগ্রাম অঞ্চল",
            "উত্তরবঙ্গ",
            "বরিশাল অঞ্চল"
        ],
        answer: 2,
        explanation: "ভাওয়াইয়া উত্তরবঙ্গের অন্যতম প্রধান লোকসংগীত ধারা।"
    },

    {
        id: "BD266",
        question: "জারি গান প্রধানত কোন বিষয়কে কেন্দ্র করে গড়ে উঠেছে?",
        options: [
            "বসন্ত উৎসব",
            "নদীভ্রমণ",
            "কৃষকের জীবন",
            "কারবালার শোকগাথা"
        ],
        answer: 3,
        explanation: "জারি গান মূলত কারবালার ঘটনা ও শোকগাথাকে কেন্দ্র করে বিকশিত হয়েছে।"
    },

    {
        id: "BD267",
        question: "যাত্রা কী ধরনের শিল্পধারা?",
        options: [
            "লোকনাট্য",
            "লোকচিত্র",
            "লোকনৃত্য",
            "লোকবাদ্য"
        ],
        answer: 0,
        explanation: "যাত্রা বাংলার একটি ঐতিহ্যবাহী লোকনাট্যধারা।"
    },

    {
        id: "BD268",
        question: "‘মুখ ও মুখোশ’ চলচ্চিত্রের ঐতিহাসিক গুরুত্ব কী?",
        options: [
            "এটি প্রথম রঙিন বাংলা চলচ্চিত্র",
            "এটি পূর্ব পাকিস্তানে নির্মিত প্রথম পূর্ণদৈর্ঘ্য বাংলা চলচ্চিত্র",
            "এটি প্রথম বাংলা নির্বাক চলচ্চিত্র",
            "এটি বাংলাদেশের প্রথম টেলিভিশন নাটক"
        ],
        answer: 1,
        explanation: "‘মুখ ও মুখোশ’ ১৯৫৬ সালে নির্মিত পূর্ব পাকিস্তানের প্রথম পূর্ণদৈর্ঘ্য বাংলা চলচ্চিত্র হিসেবে পরিচিত।"
    },

    {
        id: "BD269",
        question: "‘জীবন থেকে নেয়া’ চলচ্চিত্রের পরিচালক কে?",
        options: [
            "আলমগীর কবির",
            "চাষী নজরুল ইসলাম",
            "জহির রায়হান",
            "আব্দুল জব্বার খান"
        ],
        answer: 2,
        explanation: "‘জীবন থেকে নেয়া’ চলচ্চিত্রের পরিচালক ছিলেন জহির রায়হান।"
    },

    {
        id: "BD270",
        question: "‘জীবন থেকে নেয়া’ চলচ্চিত্রের ঐতিহাসিক গুরুত্ব কী?",
        options: [
            "এটি শুধুই একটি রোমান্টিক চলচ্চিত্র",
            "এটি বাংলাদেশের প্রথম রঙিন চলচ্চিত্র",
            "এটি একটি ঐতিহাসিক তথ্যচিত্র",
            "রাজনৈতিক ও সামাজিক রূপকের মাধ্যমে তৎকালীন বাস্তবতা তুলে ধরা"
        ],
        answer: 3,
        explanation: "‘জীবন থেকে নেয়া’ চলচ্চিত্রে রাজনৈতিক ও সামাজিক রূপকের মাধ্যমে তৎকালীন পূর্ব পাকিস্তানের বাস্তবতা তুলে ধরা হয়।"
    },

    {
        id: "BD273",
        question: "বাংলাদেশের সংবিধানের দ্বিতীয় ভাগে কী বিষয় অন্তর্ভুক্ত রয়েছে?",
        options: [
            "রাষ্ট্র পরিচালনার মূলনীতি",
            "মৌলিক অধিকার",
            "নির্বাচন কমিশন",
            "বিচার বিভাগ"
        ],
        answer: 0,
        explanation: "বাংলাদেশের সংবিধানের দ্বিতীয় ভাগে রাষ্ট্র পরিচালনার মূলনীতি (Fundamental Principles of State Policy) অন্তর্ভুক্ত রয়েছে।"
    },

    {
        id: "BD274",
        question: "বাংলাদেশের সংবিধানের তৃতীয় ভাগে কী বিষয় অন্তর্ভুক্ত রয়েছে?",
        options: [
            "রাষ্ট্র পরিচালনার মূলনীতি",
            "মৌলিক অধিকার",
            "স্থানীয় সরকার",
            "সরকারি কর্ম কমিশন"
        ],
        answer: 1,
        explanation: "বাংলাদেশের সংবিধানের তৃতীয় ভাগে মৌলিক অধিকার (Fundamental Rights) অন্তর্ভুক্ত রয়েছে।"
    },

    {
        id: "BD276",
        question: "জাতীয় সংসদের সাধারণ আসনে একজন সদস্য কীভাবে নির্বাচিত হন?",
        options: [
            "রাষ্ট্রপতি কর্তৃক মনোনীত হন",
            "সংসদ সদস্যরা নির্বাচন করেন",
            "প্রতিটি সাধারণ নির্বাচনী এলাকা থেকে সরাসরি নির্বাচিত হন",
            "প্রধানমন্ত্রী মনোনীত করেন"
        ],
        answer: 2,
        explanation: "জাতীয় সংসদের সাধারণ আসনে প্রতিটি নির্বাচনী এলাকা থেকে একজন সদস্য জনগণের সরাসরি ভোটে নির্বাচিত হন।"
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