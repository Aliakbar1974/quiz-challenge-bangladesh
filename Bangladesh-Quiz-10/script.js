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
    id: "BD216",
    question: "সোমপুর মহাবিহারের প্রতিষ্ঠার সঙ্গে কোন পাল শাসকের নাম বিশেষভাবে যুক্ত?",
    options: [
      "ধর্মপাল",
      "দেবপাল",
      "গোপাল",
      "মহীপাল"
    ],
    answer: 0,
    explanation: "সোমপুর মহাবিহারের প্রতিষ্ঠার সঙ্গে পাল শাসক ধর্মপালের নাম বিশেষভাবে যুক্ত। এটি পাল যুগের অন্যতম গুরুত্বপূর্ণ বৌদ্ধ শিক্ষাকেন্দ্র ছিল।"
  },

  {
    id: "BD217",
    question: "পাহাড়পুরের সোমপুর মহাবিহার বর্তমানে কোন জেলায় অবস্থিত?",
    options: [
      "বগুড়া",
      "নওগাঁ",
      "রাজশাহী",
      "নাটোর"
    ],
    answer: 1,
    explanation: "পাহাড়পুরের সোমপুর মহাবিহার বর্তমানে নওগাঁ জেলার বদলগাছী উপজেলায় অবস্থিত। এটি বাংলাদেশের অন্যতম গুরুত্বপূর্ণ প্রত্নস্থল।"
  },

  {
    id: "BD218",
    question: "সোমপুর মহাবিহার UNESCO-এর বিশ্ব ঐতিহ্য তালিকায় কোন ধরনের ঐতিহাসিক স্থাপনা হিসেবে স্বীকৃত?",
    options: [
      "মধ্যযুগীয় মসজিদ",
      "ঔপনিবেশিক দুর্গ",
      "প্রাচীন বৌদ্ধ বিহার",
      "হিন্দু মন্দির"
    ],
    answer: 2,
    explanation: "সোমপুর মহাবিহার একটি প্রাচীন বৌদ্ধ বিহার ও গুরুত্বপূর্ণ প্রত্নস্থল। UNESCO এটিকে বিশ্ব ঐতিহ্যের অংশ হিসেবে স্বীকৃতি দিয়েছে।"
  },

  {
    id: "BD219",
    question: "বাংলাদেশের কোন প্রত্নস্থানে প্রাচীন বৌদ্ধ স্থাপত্যের পাশাপাশি পোড়ামাটির ফলক বিশেষভাবে বিখ্যাত?",
    options: [
      "পানাম নগর",
      "লালবাগ দুর্গ",
      "আহসান মঞ্জিল",
      "পাহাড়পুর"
    ],
    answer: 3,
    explanation: "পাহাড়পুরের সোমপুর মহাবিহার তার প্রাচীন বৌদ্ধ স্থাপত্য ও অসংখ্য সুন্দর পোড়ামাটির ফলকের জন্য বিশেষভাবে বিখ্যাত।"
  },

  {
    id: "BD220",
    question: "ময়নামতি প্রত্নাঞ্চল বাংলাদেশের কোন অঞ্চলে অবস্থিত?",
    options: [
      "কুমিল্লা",
      "ফরিদপুর",
      "যশোর",
      "দিনাজপুর"
    ],
    answer: 0,
    explanation: "ময়নামতি প্রত্নাঞ্চল কুমিল্লা অঞ্চলে অবস্থিত। এখানে প্রাচীন বৌদ্ধ সভ্যতার বহু গুরুত্বপূর্ণ নিদর্শন আবিষ্কৃত হয়েছে।"
  },

  {
    id: "BD221",
    question: "ময়নামতির প্রত্নতাত্ত্বিক নিদর্শনগুলো প্রধানত কোন ঐতিহাসিক যুগের সঙ্গে সম্পর্কিত?",
    options: [
      "ঔপনিবেশিক যুগ",
      "প্রাচীন ও প্রারম্ভিক মধ্যযুগ",
      "ব্রিটিশ-পরবর্তী যুগ",
      "আধুনিক শিল্পযুগ"
    ],
    answer: 1,
    explanation: "ময়নামতির প্রত্নতাত্ত্বিক নিদর্শনগুলো প্রধানত প্রাচীন ও প্রারম্ভিক মধ্যযুগের বৌদ্ধ সভ্যতার সঙ্গে সম্পর্কিত।"
  },

  {
    id: "BD222",
    question: "ময়নামতি অঞ্চলের অন্যতম গুরুত্বপূর্ণ বৌদ্ধ প্রত্নস্থল কোনটি?",
    options: [
      "ষাট গম্বুজ মসজিদ",
      "ছোট সোনা মসজিদ",
      "শালবন বিহার",
      "কান্তজিউ মন্দির"
    ],
    answer: 2,
    explanation: "শালবন বিহার ময়নামতি অঞ্চলের অন্যতম গুরুত্বপূর্ণ বৌদ্ধ প্রত্নস্থল। এটি প্রাচীন বৌদ্ধ শিক্ষা ও ধর্মীয় কার্যক্রমের গুরুত্বপূর্ণ কেন্দ্র ছিল।"
  },

  {
    id: "BD223",
    question: "শালবন বিহারের নামের সঙ্গে কোন ধর্মীয় ঐতিহ্য সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "বৌদ্ধধর্ম",
      "ইসলাম",
      "খ্রিস্টধর্ম",
      "শিখধর্ম"
    ],
    answer: 0,
    explanation: "শালবন বিহার একটি প্রাচীন বৌদ্ধ বিহার। তাই এর সঙ্গে বৌদ্ধধর্মের ঐতিহ্য সবচেয়ে বেশি সম্পর্কিত।"
  },

  {
    id: "BD224",
    question: "বাংলাদেশের প্রাচীন ‘সমতট’ জনপদটি প্রধানত কোন অঞ্চলের সঙ্গে সম্পর্কিত ছিল?",
    options: [
      "উত্তর-পশ্চিম বাংলা",
      "পশ্চিমবঙ্গের মালদহ অঞ্চল",
      "উত্তরবঙ্গের বরেন্দ্র অঞ্চল",
      "দক্ষিণ-পূর্ব বাংলা"
    ],
    answer: 3,
    explanation: "প্রাচীন সমতট জনপদ মূলত বাংলার দক্ষিণ-পূর্বাঞ্চলের সঙ্গে সম্পর্কিত ছিল। বর্তমান কুমিল্লা ও পার্শ্ববর্তী অঞ্চল এর অন্তর্ভুক্ত ছিল।"
  },

  {
    id: "BD225",
    question: "প্রাচীন ‘হরিকেল’ জনপদ মূলত বাংলার কোন অঞ্চলের সঙ্গে সম্পর্কিত ছিল?",
    options: [
      "দক্ষিণ-পূর্বাঞ্চল",
      "উত্তর-পশ্চিমাঞ্চল",
      "পশ্চিমাঞ্চল",
      "মধ্যবঙ্গ"
    ],
    answer: 0,
    explanation: "প্রাচীন হরিকেল জনপদ বাংলার দক্ষিণ-পূর্বাঞ্চলের সঙ্গে সম্পর্কিত ছিল এবং চট্টগ্রাম অঞ্চলের সঙ্গে এর বিশেষ সম্পর্ক পাওয়া যায়।"
  },

  {
    id: "BD226",
    question: "বাংলার ইতিহাসে ‘বরেন্দ্র’ বলতে প্রধানত কোন অঞ্চলকে বোঝানো হতো?",
    options: [
      "দক্ষিণবঙ্গের উপকূলীয় অঞ্চল",
      "উত্তরবঙ্গের একটি ঐতিহাসিক অঞ্চল",
      "চট্টগ্রামের পাহাড়ি অঞ্চল",
      "সিলেটের হাওর অঞ্চল"
    ],
    answer: 1,
    explanation: "বরেন্দ্র ছিল বাংলার উত্তরাঞ্চলের একটি গুরুত্বপূর্ণ ঐতিহাসিক অঞ্চল। প্রাচীন ও মধ্যযুগীয় বাংলার ইতিহাসে এর বিশেষ গুরুত্ব রয়েছে।"
  },

  {
    id: "BD227",
    question: "বাংলার পাল রাজবংশের প্রতিষ্ঠাতা হিসেবে কাকে গণ্য করা হয়?",
    options: [
      "ধর্মপাল",
      "দেবপাল",
      "গোপাল",
      "মহীপাল"
    ],
    answer: 2,
    explanation: "গোপালকে বাংলার পাল রাজবংশের প্রতিষ্ঠাতা হিসেবে গণ্য করা হয়। তিনি অরাজকতার সময় বাংলার শাসক হিসেবে নির্বাচিত হন।"
  },

  {
    id: "BD228",
    question: "পাল যুগে বাংলায় কোন ধর্মীয়-শিক্ষাগত প্রতিষ্ঠানগুলোর ব্যাপক বিকাশ ঘটে?",
    options: [
      "বৌদ্ধ মহাবিহার",
      "খ্রিস্টান মিশন",
      "ইসলামি মাদ্রাসা",
      "ব্রিটিশ কলেজ"
    ],
    answer: 0,
    explanation: "পাল যুগে বাংলায় বৌদ্ধ মহাবিহার ও শিক্ষাকেন্দ্রের ব্যাপক বিকাশ ঘটে। সোমপুর মহাবিহার এর অন্যতম উজ্জ্বল উদাহরণ।"
  },

  {
    id: "BD229",
    question: "বাংলার সেন রাজবংশের শেষ গুরুত্বপূর্ণ শাসকদের একজন কে ছিলেন?",
    options: [
      "বল্লাল সেন",
      "বিজয়সেন",
      "সামন্তসেন",
      "লক্ষ্মণ সেন"
    ],
    answer: 3,
    explanation: "লক্ষ্মণ সেন ছিলেন সেন রাজবংশের অন্যতম শেষ গুরুত্বপূর্ণ শাসক। তাঁর শাসনামলের শেষদিকে বাংলায় তুর্কি বিজয়ের সূচনা ঘটে।"
  },

  {
    id: "BD230",
    question: "বাংলায় মুসলিম শাসনের সূচনার সঙ্গে কোন ঐতিহাসিক ব্যক্তির নাম বিশেষভাবে যুক্ত?",
    options: [
      "শামসুদ্দিন ইলিয়াস শাহ",
      "ইখতিয়ার উদ্দিন মুহাম্মদ বখতিয়ার খলজি",
      "আলাউদ্দিন হোসেন শাহ",
      "শায়েস্তা খান"
    ],
    answer: 1,
    explanation: "বাংলায় মুসলিম শাসনের সূচনার সঙ্গে ইখতিয়ার উদ্দিন মুহাম্মদ বখতিয়ার খলজির নাম বিশেষভাবে যুক্ত। তিনি ১২০৪ সালের দিকে নদীয়া দখল করেন।"
  },

  {
    id: "BD231",
    question: "বাংলার ইতিহাসে ইলিয়াস শাহী বংশের সবচেয়ে গুরুত্বপূর্ণ অবদানগুলোর একটি কী?",
    options: [
      "স্বাধীন ও ঐক্যবদ্ধ বাংলার সুলতানি শাসনের ভিত্তি সুদৃঢ় করা",
      "ব্রিটিশ শাসন প্রতিষ্ঠা করা",
      "বঙ্গভঙ্গ ঘোষণা করা",
      "চিরস্থায়ী বন্দোবস্ত চালু করা"
    ],
    answer: 0,
    explanation: "ইলিয়াস শাহী বংশ স্বাধীন ও ঐক্যবদ্ধ বাংলার সুলতানি শাসনের ভিত্তি সুদৃঢ় করতে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
  },

  {
    id: "BD232",
    question: "আলাউদ্দিন হোসেন শাহের শাসনকাল বাংলার ইতিহাসে কোন কারণে বিশেষভাবে স্মরণীয়?",
    options: [
      "বাংলায় ব্রিটিশ শাসনের সূচনা",
      "বঙ্গভঙ্গ বাস্তবায়ন",
      "রাজনৈতিক স্থিতিশীলতা ও সাংস্কৃতিক বিকাশ",
      "পাকিস্তান প্রতিষ্ঠা"
    ],
    answer: 2,
    explanation: "আলাউদ্দিন হোসেন শাহের শাসনকাল রাজনৈতিক স্থিতিশীলতা ও সাংস্কৃতিক বিকাশের জন্য বাংলার ইতিহাসে বিশেষভাবে স্মরণীয়।"
  },

  {
    id: "BD233",
    question: "বাংলার সুলতানি আমলে গৌড় নগরী প্রধানত কোন অঞ্চলের সঙ্গে সম্পর্কিত ছিল?",
    options: [
      "বর্তমান কুমিল্লা অঞ্চল",
      "বর্তমান বরিশাল অঞ্চল",
      "বর্তমান সিলেট অঞ্চল",
      "বর্তমান চাঁপাইনবাবগঞ্জ-মালদহ অঞ্চল"
    ],
    answer: 3,
    explanation: "গৌড় ছিল মধ্যযুগীয় বাংলার একটি গুরুত্বপূর্ণ রাজধানী ও নগরকেন্দ্র। এটি বর্তমান চাঁপাইনবাবগঞ্জ ও মালদহ অঞ্চলের সঙ্গে সম্পর্কিত।"
  },

  {
    id: "BD234",
    question: "বাংলাদেশের ঐতিহাসিক ছোট সোনা মসজিদ কোন জেলায় অবস্থিত?",
    options: [
      "বাগেরহাট",
      "চাঁপাইনবাবগঞ্জ",
      "কুমিল্লা",
      "নওগাঁ"
    ],
    answer: 1,
    explanation: "ঐতিহাসিক ছোট সোনা মসজিদ চাঁপাইনবাবগঞ্জ জেলার শিবগঞ্জ উপজেলার গৌড় অঞ্চলে অবস্থিত। এটি সুলতানি আমলের স্থাপত্যের গুরুত্বপূর্ণ নিদর্শন।"
  },

  {
    id: "BD238",
    question: "সোনারগাঁও মধ্যযুগে বাংলার ইতিহাসে কী হিসেবে বিশেষ গুরুত্বপূর্ণ ছিল?",
    options: [
      "গুরুত্বপূর্ণ প্রশাসনিক ও বাণিজ্যিক কেন্দ্র",
      "প্রধান পাহাড়ি সামরিক ঘাঁটি",
      "ব্রিটিশ রাজধানী",
      "প্রধান চা উৎপাদন কেন্দ্র"
    ],
    answer: 0,
    explanation: "মধ্যযুগে সোনারগাঁও বাংলার একটি গুরুত্বপূর্ণ প্রশাসনিক ও বাণিজ্যিক কেন্দ্র হিসেবে বিকশিত হয়েছিল।"
  },

  {
    id: "BD239",
    question: "বাংলার ঔপনিবেশিক ইতিহাসে ‘চিরস্থায়ী বন্দোবস্ত’ কোন সালে চালু করা হয়?",
    options: [
      "১৭৬৫",
      "১৮৫৭",
      "১৭৯৩",
      "১৯০৫"
    ],
    answer: 2,
    explanation: "চিরস্থায়ী বন্দোবস্ত ১৭৯৩ সালে ব্রিটিশ শাসনামলে প্রবর্তিত হয়। এর মাধ্যমে জমিদারদের ভূমি-রাজস্ব ব্যবস্থা স্থায়ীভাবে নির্ধারণ করা হয়।"
  },

  {
    id: "BD240",
    question: "চিরস্থায়ী বন্দোবস্ত প্রবর্তনের সঙ্গে কোন ব্রিটিশ গভর্নর-জেনারেলের নাম সরাসরি যুক্ত?",
    options: [
      "লর্ড কার্জন",
      "লর্ড ডালহৌসি",
      "লর্ড রিপন",
      "লর্ড কর্নওয়ালিস"
    ],
    answer: 3,
    explanation: "লর্ড কর্নওয়ালিসের শাসনামলে ১৭৯৩ সালে চিরস্থায়ী বন্দোবস্ত প্রবর্তিত হয়।"
  },

  {
    id: "BD241",
    question: "বাংলা সাহিত্যের প্রথম সার্থক মহাকাব্য হিসেবে কোন গ্রন্থটি বিশেষভাবে পরিচিত?",
    options: [
      "মেঘনাদবধ কাব্য",
      "বিষাদ-সিন্ধু",
      "কপালকুণ্ডলা",
      "সোনার তরী"
    ],
    answer: 0,
    explanation: "মাইকেল মধুসূদন দত্তের ‘মেঘনাদবধ কাব্য’ বাংলা সাহিত্যের প্রথম সার্থক মহাকাব্য হিসেবে বিশেষভাবে পরিচিত।"
  },

  {
    id: "BD242",
    question: "‘মেঘনাদবধ কাব্য’-এর রচয়িতা কে?",
    options: [
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "মাইকেল মধুসূদন দত্ত",
      "নবীনচন্দ্র সেন",
      "দ্বিজেন্দ্রলাল রায়"
    ],
    answer: 1,
    explanation: "‘মেঘনাদবধ কাব্য’-এর রচয়িতা মাইকেল মধুসূদন দত্ত। এটি বাংলা সাহিত্যের একটি গুরুত্বপূর্ণ মহাকাব্য।"
  },

  {
    id: "BD243",
    question: "মাইকেল মধুসূদন দত্ত বাংলা কাব্যে কোন ছন্দের সফল প্রয়োগের জন্য বিশেষভাবে স্মরণীয়?",
    options: [
      "পয়ার",
      "ত্রিপদী",
      "অমিত্রাক্ষর ছন্দ",
      "স্বরবৃত্ত"
    ],
    answer: 2,
    explanation: "মাইকেল মধুসূদন দত্ত বাংলা কাব্যে অমিত্রাক্ষর ছন্দের সফল ও ব্যাপক প্রয়োগের জন্য বিশেষভাবে স্মরণীয়।"
  },

  {
    id: "BD244",
    question: "‘কপালকুণ্ডলা’ উপন্যাসের রচয়িতা কে?",
    options: [
      "শরৎচন্দ্র চট্টোপাধ্যায়",
      "রবীন্দ্রনাথ ঠাকুর",
      "মীর মশাররফ হোসেন",
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়"
    ],
    answer: 3,
    explanation: "‘কপালকুণ্ডলা’ উপন্যাসের রচয়িতা বঙ্কিমচন্দ্র চট্টোপাধ্যায়। এটি বাংলা সাহিত্যের অন্যতম বিখ্যাত উপন্যাস।"
  },

  {
    id: "BD245",
    question: "মীর মশাররফ হোসেনের বিখ্যাত ঐতিহাসিক উপন্যাস কোনটি?",
    options: [
      "বিষাদ-সিন্ধু",
      "দুর্গেশনন্দিনী",
      "পথের পাঁচালী",
      "আরণ্যক"
    ],
    answer: 0,
    explanation: "মীর মশাররফ হোসেনের বিখ্যাত ঐতিহাসিক উপন্যাস ‘বিষাদ-সিন্ধু’। এতে কারবালার ঐতিহাসিক ঘটনাকে কেন্দ্র করে কাহিনি রচিত হয়েছে।"
  },

  {
    id: "BD246",
    question: "‘বিষাদ-সিন্ধু’ মূলত কোন ঐতিহাসিক ঘটনাকে কেন্দ্র করে রচিত?",
    options: [
      "পলাশীর যুদ্ধ",
      "সিপাহী বিদ্রোহ",
      "কারবালার ঘটনা",
      "বঙ্গভঙ্গ"
    ],
    answer: 2,
    explanation: "‘বিষাদ-সিন্ধু’ মূলত কারবালার ঐতিহাসিক ঘটনাকে কেন্দ্র করে রচিত। এটি মীর মশাররফ হোসেনের অন্যতম শ্রেষ্ঠ সাহিত্যকর্ম।"
  },

  {
    id: "BD247",
    question: "বাংলা সাহিত্যে ‘বিদ্রোহী কবি’ হিসেবে কে পরিচিত?",
    options: [
      "জীবনানন্দ দাশ",
      "সুকান্ত ভট্টাচার্য",
      "ফররুখ আহমদ",
      "কাজী নজরুল ইসলাম"
    ],
    answer: 3,
    explanation: "কাজী নজরুল ইসলাম বাংলা সাহিত্যে ‘বিদ্রোহী কবি’ হিসেবে পরিচিত। তাঁর সাহিত্যকর্মে বিদ্রোহ, সাম্য ও মানবমুক্তির চেতনা প্রবল।"
  },

  {
    id: "BD248",
    question: "কাজী নজরুল ইসলামের ‘বিদ্রোহী’ কবিতাটি প্রথম কোন কাব্যগ্রন্থে সংকলিত হয়?",
    options: [
      "অগ্নিবীণা",
      "বিষের বাঁশী",
      "দোলনচাঁপা",
      "সাম্যবাদী"
    ],
    answer: 0,
    explanation: "কাজী নজরুল ইসলামের বিখ্যাত ‘বিদ্রোহী’ কবিতাটি তাঁর কাব্যগ্রন্থ ‘অগ্নিবীণা’-তে সংকলিত হয়।"
  },

  {
    id: "BD249",
    question: "‘সাম্যবাদী’ কাব্যগ্রন্থের মূল ভাবধারার সঙ্গে কোন বিষয়টি সবচেয়ে ঘনিষ্ঠ?",
    options: [
      "প্রকৃতির সৌন্দর্য",
      "সামাজিক সাম্য ও মানবমুক্তি",
      "রোমান্টিক প্রেম",
      "রাজদরবারের জীবন"
    ],
    answer: 1,
    explanation: "‘সাম্যবাদী’ কাব্যগ্রন্থে সামাজিক সাম্য, মানবমুক্তি ও মানুষের সমতার চেতনা বিশেষভাবে প্রকাশ পেয়েছে।"
  },

  {
    id: "BD250",
    question: "বাংলাদেশের জাতীয় কবি হিসেবে কে স্বীকৃত?",
    options: [
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "জসীমউদ্দীন",
      "জীবনানন্দ দাশ"
    ],
    answer: 1,
    explanation: "কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি হিসেবে স্বীকৃত। তাঁর সাহিত্য বাংলাদেশের সাংস্কৃতিক ও জাতীয় চেতনায় গুরুত্বপূর্ণ ভূমিকা পালন করেছে।"
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