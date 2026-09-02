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
    id: "BD179",
    question: "বাংলাদেশের নদীগুলোতে পলি সঞ্চয়ের একটি গুরুত্বপূর্ণ ফল কী?",
    options: [
      "নতুন চর ও নদীর গতিপথের পরিবর্তন",
      "স্থায়ী মরুভূমি সৃষ্টি",
      "পাহাড়ের উচ্চতা বৃদ্ধি",
      "সমুদ্রের লবণাক্ততা সম্পূর্ণ বিলুপ্ত হওয়া"
    ],
    answer: 0,
    explanation: "নদীর পলি সঞ্চয়ের ফলে নতুন চর সৃষ্টি হতে পারে এবং নদীর গতিপথও পরিবর্তিত হতে পারে।"
  },

  {
    id: "BD180",
    question: "বাংলাদেশের জলবায়ু পরিবর্তনের ঝুঁকির সঙ্গে নিচের কোন বিষয়টি সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "শুধু সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি",
      "শুধু উপকূলীয় লবণাক্ততা বৃদ্ধি",
      "শুধু ঘূর্ণিঝড় ও জলোচ্ছ্বাস",
      "উপরের সবগুলো"
    ],
    answer: 3,
    explanation: "সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি, উপকূলীয় লবণাক্ততা এবং ঘূর্ণিঝড়-জলোচ্ছ্বাস—সবগুলোই বাংলাদেশের জলবায়ু ঝুঁকির গুরুত্বপূর্ণ বিষয়।"
  },

  {
    id: "BD181",
    question: "১৯৪৭ সালে পাকিস্তান প্রতিষ্ঠার পর পূর্ববঙ্গের নাম 'East Pakistan' করা হয় কোন সালে?",
    options: [
      "১৯৫২",
      "১৯৫৪",
      "১৯৫৫",
      "১৯৫৬"
    ],
    answer: 2,
    explanation: "১৯৫৫ সালে পূর্ববঙ্গের নাম পরিবর্তন করে East Pakistan করা হয়।"
  },

  {
    id: "BD182",
    question: "১৯৫৫ সালের আগে বর্তমান বাংলাদেশের ভূখণ্ডের পাকিস্তান-পর্বের সরকারি নাম কী ছিল?",
    options: [
      "East Pakistan",
      "East Bengal",
      "Eastern Pakistan",
      "Bengal Province"
    ],
    answer: 1,
    explanation: "১৯৫৫ সালের আগে পাকিস্তানের পূর্বাঞ্চলীয় প্রদেশটির সরকারি নাম ছিল East Bengal বা পূর্ববঙ্গ।"
  },

  {
    id: "BD184",
    question: "১৯৪৮ সালের ভাষা আন্দোলনের অন্যতম গুরুত্বপূর্ণ দাবি ছিল কোনটি?",
    options: [
      "পূর্ববঙ্গের রাজধানী পরিবর্তন",
      "বাংলাকে পাকিস্তানের অন্যতম রাষ্ট্রভাষা করা",
      "পৃথক মুদ্রা চালু করা",
      "প্রাদেশিক নির্বাচন বাতিল করা"
    ],
    answer: 1,
    explanation: "ভাষা আন্দোলনের অন্যতম প্রধান দাবি ছিল বাংলাকে পাকিস্তানের অন্যতম রাষ্ট্রভাষা হিসেবে স্বীকৃতি দেওয়া।"
  },

  {
    id: "BD185",
    question: "১৯৫২ সালের ভাষা আন্দোলনের সময় পাকিস্তান সরকারের পক্ষ থেকে কোন ভাষাকে একমাত্র রাষ্ট্রভাষা করার অবস্থান নেওয়া হয়েছিল?",
    options: [
      "বাংলা",
      "ইংরেজি",
      "উর্দু",
      "আরবি"
    ],
    answer: 2,
    explanation: "পাকিস্তান সরকারের পক্ষ থেকে উর্দুকে একমাত্র রাষ্ট্রভাষা করার অবস্থান নেওয়া হয়েছিল।"
  },

  {
    id: "BD186",
    question: "১৯৫২ সালের ২৭ জানুয়ারি ঢাকার পল্টন ময়দানে ভাষা-সংক্রান্ত বক্তব্য দেন কে?",
    options: [
      "মোহাম্মদ আলী জিন্নাহ",
      "লিয়াকত আলী খান",
      "ইস্কান্দার মির্জা",
      "খাজা নাজিমুদ্দিন"
    ],
    answer: 3,
    explanation: "১৯৫২ সালের ২৭ জানুয়ারি খাজা নাজিমুদ্দিন পল্টন ময়দানে উর্দুকে রাষ্ট্রভাষা করার পক্ষে বক্তব্য দেন।"
  },

  {
    id: "BD187",
    question: "১৯৫২ সালের ৩১ জানুয়ারি সর্বদলীয় কেন্দ্রীয় ভাষা সংগ্রাম কমিটি গঠনের সভায় সভাপতিত্ব করেন কে?",
    options: [
      "শামসুল হক",
      "মওলানা আবদুল হামিদ খান ভাসানী",
      "কাজী গোলাম মাহবুব",
      "শেখ মুজিবুর রহমান"
    ],
    answer: 1,
    explanation: "১৯৫২ সালের ৩১ জানুয়ারি গঠিত সর্বদলীয় কেন্দ্রীয় ভাষা সংগ্রাম কমিটির সভায় মওলানা আবদুল হামিদ খান ভাসানী সভাপতিত্ব করেন।"
  },

  {
    id: "BD188",
    question: "সর্বদলীয় কেন্দ্রীয় ভাষা সংগ্রাম কমিটির আহ্বায়ক কে ছিলেন?",
    options: [
      "শেখ মুজিবুর রহমান",
      "আবুল কাসেম",
      "কাজী গোলাম মাহবুব",
      "শামসুল হক"
    ],
    answer: 2,
    explanation: "সর্বদলীয় কেন্দ্রীয় ভাষা সংগ্রাম কমিটির আহ্বায়ক ছিলেন কাজী গোলাম মাহবুব।"
  },

  {
    id: "BD189",
    question: "১৯৫২ সালের ২১ ফেব্রুয়ারির মিছিল-সমাবেশ বন্ধ করার জন্য ঢাকায় কোন ধারা জারি করা হয়েছিল?",
    options: [
      "১৪৪ ধারা",
      "১২৪ ধারা",
      "৯২ ধারা",
      "৫৬ ধারা"
    ],
    answer: 0,
    explanation: "১৯৫২ সালের ২১ ফেব্রুয়ারি ঢাকায় সভা-সমাবেশ ও মিছিল নিষিদ্ধ করতে ১৪৪ ধারা জারি করা হয়েছিল।"
  },

  {
    id: "BD190",
    question: "বাংলা ভাষাকে পাকিস্তানের অন্যতম রাষ্ট্রভাষা হিসেবে স্বীকৃতি দেওয়া হয় কোন সালে?",
    options: [
      "১৯৫৪ সালে",
      "১৯৫৫ সালে",
      "১৯৫৬ সালে",
      "১৯৫৮ সালে"
    ],
    answer: 2,
    explanation: "১৯৫৬ সালের পাকিস্তানের সংবিধানে বাংলা ও উর্দু—দুই ভাষাকে রাষ্ট্রভাষা হিসেবে স্বীকৃতি দেওয়া হয়।"
  },

  {
    id: "BD191",
    question: "১৯৫৪ সালের পূর্ববঙ্গ আইনসভা নির্বাচনে কোন জোট ব্যাপক বিজয় অর্জন করেছিল?",
    options: [
      "মুসলিম লীগ",
      "আওয়ামী মুসলিম লীগ",
      "কৃষক শ্রমিক পার্টি",
      "যুক্তফ্রন্ট"
    ],
    answer: 3,
    explanation: "১৯৫৪ সালের নির্বাচনে যুক্তফ্রন্ট বিপুল বিজয় অর্জন করে এবং মুসলিম লীগের বড় পরাজয় ঘটে।"
  },

  {
    id: "BD192",
    question: "১৯৫৪ সালের নির্বাচনে যুক্তফ্রন্টের বিজয়ের পর অল্প সময়ের মধ্যেই কেন্দ্রীয় সরকার কী ব্যবস্থা নেয়?",
    options: [
      "প্রাদেশিক সরকার বিলুপ্ত করে",
      "নির্বাচন স্থগিত করে",
      "যুক্তফ্রন্ট সরকারকে অপসারণ করে গভর্নরের শাসন জারি করে",
      "পূর্ববঙ্গের নাম পরিবর্তন করে"
    ],
    answer: 2,
    explanation: "যুক্তফ্রন্ট সরকার ক্ষমতায় আসার অল্প সময়ের মধ্যেই কেন্দ্রীয় সরকার তা বরখাস্ত করে গভর্নরের শাসন জারি করে।"
  },

  {
    id: "BD193",
    question: "১৯৫৫ সালে 'East Bengal'-এর নাম পরিবর্তন করে কী করা হয়?",
    options: [
      "West Bengal",
      "United Bengal",
      "Bengal State",
      "East Pakistan"
    ],
    answer: 3,
    explanation: "১৯৫৫ সালে East Bengal-এর নাম পরিবর্তন করে East Pakistan করা হয়।"
  },

  {
    id: "BD194",
    question: "১৯৬৬ সালের ছয় দফা মূলত কোন দাবিকে কেন্দ্র করে গড়ে উঠেছিল?",
    options: [
      "পূর্ব পাকিস্তানের স্বায়ত্তশাসন",
      "সামরিক শাসন জোরদার",
      "পাকিস্তানের রাজধানী ঢাকায় স্থানান্তর",
      "ভাষা পরিবর্তন"
    ],
    answer: 0,
    explanation: "ছয় দফার মূল লক্ষ্য ছিল পূর্ব পাকিস্তানের রাজনৈতিক ও অর্থনৈতিক স্বায়ত্তশাসন প্রতিষ্ঠা।"
  },

  {
    id: "BD195",
    question: "১৯৭০ সালের সাধারণ নির্বাচনে পূর্ব পাকিস্তানে আওয়ামী লীগ জাতীয় পরিষদের কতটি আসন লাভ করেছিল?",
    options: [
      "১৫০",
      "১৬০",
      "১৬৭",
      "১৭১"
    ],
    answer: 2,
    explanation: "১৯৭০ সালের নির্বাচনে আওয়ামী লীগ পূর্ব পাকিস্তানের ১৬৯টি জাতীয় পরিষদ আসনের মধ্যে ১৬৭টি লাভ করে।"
  },

  {
    id: "BD196",
    question: "১৯৭০ সালের নির্বাচনের পর আওয়ামী লীগ পাকিস্তানের জাতীয় পরিষদে কী অবস্থান অর্জন করেছিল?",
    options: [
      "দ্বিতীয় বৃহত্তম দল",
      "একক সংখ্যাগরিষ্ঠ দল",
      "সংখ্যালঘু জোট",
      "বিরোধী জোটের অংশ"
    ],
    answer: 1,
    explanation: "১৯৭০ সালের নির্বাচনের ফল আওয়ামী লীগকে পাকিস্তানের জাতীয় পরিষদে একক সংখ্যাগরিষ্ঠ দল হিসেবে প্রতিষ্ঠিত করে।"
  },

  {
    id: "BD197",
    question: "১৯৭১ সালের ১ মার্চ ইয়াহিয়া খান কী ঘোষণা করেন?",
    options: [
      "সামরিক আইন প্রত্যাহার",
      "স্বাধীন বাংলাদেশের স্বীকৃতি",
      "নতুন নির্বাচন ঘোষণা",
      "জাতীয় পরিষদের অধিবেশন অনির্দিষ্টকালের জন্য স্থগিত"
    ],
    answer: 3,
    explanation: "১ মার্চ ১৯৭১ ইয়াহিয়া খান জাতীয় পরিষদের অধিবেশন অনির্দিষ্টকালের জন্য স্থগিত ঘোষণা করেন।"
  },

  {
    id: "BD198",
    question: "১৯৭১ সালের অসহযোগ আন্দোলন প্রধানত কোন সময়কাল ধরে চলেছিল?",
    options: [
      "১ জানুয়ারি–২১ ফেব্রুয়ারি",
      "২ মার্চ–২৫ মার্চ",
      "৭ মার্চ–১৬ ডিসেম্বর",
      "২৫ মার্চ–১৬ ডিসেম্বর"
    ],
    answer: 1,
    explanation: "১৯৭১ সালের অসহযোগ আন্দোলনের প্রধান পর্যায় ২ মার্চ থেকে ২৫ মার্চ পর্যন্ত বিস্তৃত ছিল।"
  },

  {
    id: "BD199",
    question: "১৯৭১ সালের ২ মার্চ ঢাকা বিশ্ববিদ্যালয়ের ছাত্রসমাবেশে কোন গুরুত্বপূর্ণ ঘটনা ঘটে?",
    options: [
      "স্বাধীন বাংলাদেশের পতাকা উত্তোলন",
      "মুজিবনগর সরকার গঠন",
      "মুক্তিবাহিনীর আনুষ্ঠানিক আত্মসমর্পণ",
      "জাতীয় পরিষদের অধিবেশন শুরু"
    ],
    answer: 0,
    explanation: "১৯৭১ সালের ২ মার্চ ঢাকা বিশ্ববিদ্যালয়ে প্রথমবারের মতো স্বাধীন বাংলাদেশের পতাকা উত্তোলন করা হয়।"
  },

  {
    id: "BD200",
    question: "১৯৭১ সালের ৩ মার্চ পল্টন ময়দানে ছাত্র সংগ্রাম পরিষদ কী ঘোষণা করেছিল?",
    options: [
      "ছয় দফা",
      "যুক্তফ্রন্টের ২১ দফা",
      "স্বাধীনতার ইশতেহার",
      "লাহোর প্রস্তাব"
    ],
    answer: 2,
    explanation: "১৯৭১ সালের ৩ মার্চ পল্টন ময়দানে ছাত্র সংগ্রাম পরিষদ স্বাধীনতার ইশতেহার ঘোষণা করে।"
  },

  {
    id: "BD201",
    question: "১৯৭১ সালের ৭ মার্চের ঐতিহাসিক ভাষণ কোথায় দেওয়া হয়েছিল?",
    options: [
      "পল্টন ময়দান",
      "বাহাদুর শাহ পার্ক",
      "রেসকোর্স ময়দান",
      "সোহরাওয়ার্দী হল"
    ],
    answer: 2,
    explanation: "বঙ্গবন্ধু শেখ মুজিবুর রহমান ১৯৭১ সালের ৭ মার্চ তৎকালীন রেসকোর্স ময়দানে ঐতিহাসিক ভাষণ দেন।"
  },

  {
    id: "BD202",
    question: "১৯৭১ সালের ৭ মার্চের ভাষণের পর পূর্ব পাকিস্তানে কোন আন্দোলন আরও ব্যাপক রূপ নেয়?",
    options: [
      "স্বদেশি আন্দোলন",
      "অসহযোগ আন্দোলন",
      "খেলাফত আন্দোলন",
      "নীল বিদ্রোহ"
    ],
    answer: 1,
    explanation: "৭ মার্চের ভাষণের পর পূর্ব পাকিস্তানে অসহযোগ আন্দোলন আরও ব্যাপক ও সুসংগঠিত রূপ নেয়।"
  },

  {
    id: "BD203",
    question: "১৯৭১ সালের ২৫ মার্চ রাতে পাকিস্তানি সেনাবাহিনীর পরিচালিত সামরিক অভিযানের সাংকেতিক নাম কী ছিল?",
    options: [
      "Operation Jackpot",
      "Operation Thunder",
      "Operation Freedom",
      "Operation Searchlight"
    ],
    answer: 3,
    explanation: "২৫ মার্চ ১৯৭১ রাতে পাকিস্তানি সেনাবাহিনীর সামরিক অভিযানের সাংকেতিক নাম ছিল Operation Searchlight।"
  },

  {
    id: "BD205",
    question: "১৯৭১ সালের ২৫ মার্চ রাতে বঙ্গবন্ধু শেখ মুজিবুর রহমানকে কী করা হয়?",
    options: [
      "ভারতে পাঠানো হয়",
      "পাকিস্তানি সেনাবাহিনী তাঁকে গ্রেফতার করে",
      "তাঁকে রাষ্ট্রপতি ঘোষণা করা হয়",
      "তাঁকে সামরিক বাহিনীর কমান্ডার করা হয়"
    ],
    answer: 1,
    explanation: "২৫ মার্চের সামরিক অভিযানের রাতে পাকিস্তানি সেনাবাহিনী বঙ্গবন্ধু শেখ মুজিবুর রহমানকে গ্রেফতার করে।"
  },

  {
    id: "BD206",
    question: "১৯৭১ সালের ১০ এপ্রিল বাংলাদেশের অস্থায়ী সরকার গঠিত হলে প্রধানমন্ত্রী হিসেবে দায়িত্ব নেন কে?",
    options: [
      "সৈয়দ নজরুল ইসলাম",
      "এ এইচ এম কামারুজ্জামান",
      "তাজউদ্দীন আহমদ",
      "এম মনসুর আলী"
    ],
    answer: 2,
    explanation: "বাংলাদেশের অস্থায়ী সরকারের প্রধানমন্ত্রী হিসেবে তাজউদ্দীন আহমদ দায়িত্ব গ্রহণ করেন।"
  },

  {
    id: "BD207",
    question: "মুজিবনগর সরকার আনুষ্ঠানিকভাবে শপথ গ্রহণ করে কবে?",
    options: [
      "১০ এপ্রিল ১৯৭১",
      "১৪ এপ্রিল ১৯৭১",
      "১৭ এপ্রিল ১৯৭১",
      "২৬ এপ্রিল ১৯৭১"
    ],
    answer: 2,
    explanation: "মুজিবনগর সরকার ১৭ এপ্রিল ১৯৭১ আনুষ্ঠানিকভাবে শপথ গ্রহণ করে।"
  },

  {
    id: "BD209",
    question: "মুক্তিযুদ্ধের সময় বাংলাদেশকে সামরিক কার্যক্রম পরিচালনার জন্য কয়টি সেক্টরে ভাগ করা হয়েছিল?",
    options: [
      "৯টি",
      "১০টি",
      "১১টি",
      "১২টি"
    ],
    answer: 2,
    explanation: "মুক্তিযুদ্ধের সময় বাংলাদেশকে সামরিক কার্যক্রম পরিচালনার জন্য ১১টি সেক্টরে ভাগ করা হয়েছিল।"
  },

  {
    id: "BD211",
    question: "প্রাচীন বাংলার কোন জনপদটি বর্তমান বগুড়া অঞ্চলের সঙ্গে সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "সমতট",
      "হরিকেল",
      "বঙ্গ",
      "পুণ্ড্রবর্ধন"
    ],
    answer: 3,
    explanation: "প্রাচীন পুণ্ড্রবর্ধন জনপদ বর্তমান বগুড়া ও এর আশপাশের অঞ্চলের সঙ্গে ঘনিষ্ঠভাবে সম্পর্কিত।"
  },

  {
    id: "BD215",
    question: "পাহাড়পুরের সোমপুর মহাবিহার কোন প্রাচীন রাজবংশের শাসনামলে প্রতিষ্ঠিত হয়েছিল?",
    options: [
      "সেন",
      "গুপ্ত",
      "মুঘল",
      "পাল"
    ],
    answer: 3,
    explanation: "পাহাড়পুরের সোমপুর মহাবিহার পাল রাজবংশের শাসনামলে প্রতিষ্ঠিত হয়; পাল রাজা ধর্মপালের সঙ্গে এর প্রতিষ্ঠা বিশেষভাবে যুক্ত।"
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