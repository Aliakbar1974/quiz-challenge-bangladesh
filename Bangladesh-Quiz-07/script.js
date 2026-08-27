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
    
    question: "বাংলাদেশ কৃষি গবেষণা কাউন্সিলের সংক্ষিপ্ত নাম কী?",
    options: [
      "Bangladesh Agricultural Research Institute",
      "Bangladesh Agricultural Research Council",
      "Bangladesh Rice Research Institute",
      "Bangladesh Agricultural University"
    ],
    answer: 1,
    explanation: "বাংলাদেশ কৃষি গবেষণা কাউন্সিলের ইংরেজি নাম Bangladesh Agricultural Research Council। এর সংক্ষিপ্ত রূপ BARC।"
  },

  {
    
    question: "বাংলাদেশের প্রথম কৃত্রিম উপগ্রহের নাম কী?",
    options: [
      "বঙ্গবন্ধু-১",
      "বাংলাদেশ-১",
      "জয় বাংলা-১",
      "স্যাটেলাইট বাংলাদেশ-১"
    ],
    answer: 0,
    explanation: "বঙ্গবন্ধু-১ বাংলাদেশের প্রথম কৃত্রিম উপগ্রহ। এটি বাংলাদেশের যোগাযোগ ও সম্প্রচার ব্যবস্থায় গুরুত্বপূর্ণ ভূমিকা রাখে।"
  },

  {
    
    question: "বঙ্গবন্ধু-১ স্যাটেলাইট কোন ধরনের কক্ষপথে স্থাপিত?",
    options: [
      "নিম্ন পৃথিবী কক্ষপথ",
      "মেরু কক্ষপথ",
      "ভূস্থির কক্ষপথ",
      "সূর্য-সমলয় কক্ষপথ"
    ],
    answer: 2,
    explanation: "বঙ্গবন্ধু-১ একটি ভূস্থির কক্ষপথে স্থাপিত যোগাযোগ উপগ্রহ। এই কক্ষপথে উপগ্রহটি পৃথিবীর নির্দিষ্ট অঞ্চলের ওপর প্রায় স্থির অবস্থানে থাকে।"
  },

  {
    
    question: "বাংলাদেশের বঙ্গবন্ধু-১ স্যাটেলাইটের উৎক্ষেপণ কোথা থেকে করা হয়েছিল?",
    options: [
      "ভারত",
      "চীন",
      "জাপান",
      "যুক্তরাষ্ট্র"
    ],
    answer: 3,
    explanation: "বঙ্গবন্ধু-১ স্যাটেলাইটটি ২০১৮ সালের ১১ মে যুক্তরাষ্ট্রের ফ্লোরিডায় অবস্থিত ক্যানেভেরাল কেপ-এর 'কেনেডি স্পেস সেন্টার' (Kennedy Space Center) থেকে স্পেসএক্স-এর ফ্যালকন ৯ রকেটের মাধ্যমে সফলভাবে উৎক্ষেপণ করা হয়েছিল।"
  },

  {
    
    question: "বাংলাদেশের প্রথম সাবমেরিন কেবল সংযোগ কোন আন্তর্জাতিক ব্যবস্থার সঙ্গে যুক্ত?",
    options: [
      "SEA-ME-WE 5",
      "SEA-ME-WE 4",
      "APG",
      "FLAG Europe-Asia"
    ],
    answer: 1,
    explanation: "বাংলাদেশের প্রথম সাবমেরিন কেবল সংযোগটি আন্তর্জাতিক 'SEA-ME-WE 4' ব্যবস্থার সাথে যুক্ত, যা ২০০৬ সালে চালু হয়। এই কেবলের ল্যান্ডিং স্টেশনটি কক্সবাজারের ঝিলংজায় অবস্থিত।"
  },

  {
    
    question: "বাংলাদেশের প্রথম মেট্রোরেল ব্যবস্থার প্রকল্পের নাম কী?",
    options: [
      "Dhaka Metro Rail",
      "Dhaka Rapid Transit-1",
      "MRT Line-6",
      "Bangladesh Metro-1"
    ],
    answer: 2,
    explanation: "ঢাকার প্রথম মেট্রোরেল প্রকল্পটি MRT Line-6 নামে পরিচিত। এটি ঢাকার গণপরিবহন ব্যবস্থার আধুনিকায়নে গুরুত্বপূর্ণ প্রকল্প।"
  },

  {
    
    question: "MRT Line-6-এর মূল রুট কোন দুই এলাকার মধ্যে?",
    options: [
      "গাবতলী–সদরঘাট",
      "উত্তরা–সদরঘাট",
      "মিরপুর–গুলিস্তান",
      "উত্তরা–মতিঝিল"
    ],
    answer: 3,
    explanation: "MRT Line-6-এর মূল পরিকল্পিত রুট উত্তরা থেকে মতিঝিল পর্যন্ত। এই রুট ঢাকার গুরুত্বপূর্ণ উত্তর ও কেন্দ্রীয় অঞ্চলকে যুক্ত করে।"
  },

  {
    
    question: "বাংলাদেশের প্রথম পারমাণবিক বিদ্যুৎকেন্দ্র কোন স্থানে নির্মিত হচ্ছে?",
    options: [
      "রূপপুর",
      "মহেশখালী",
      "আশুগঞ্জ",
      "মাওয়া"
    ],
    answer: 0,
    explanation: "বাংলাদেশের প্রথম পারমাণবিক বিদ্যুৎকেন্দ্র রূপপুরে নির্মিত হচ্ছে। এটি দেশের বিদ্যুৎ উৎপাদন সক্ষমতা বৃদ্ধির একটি গুরুত্বপূর্ণ প্রকল্প।"
  },

  {
    
    question: "রূপপুর পারমাণবিক বিদ্যুৎকেন্দ্র নির্মাণে কোন দেশের প্রযুক্তি ও সহযোগিতা প্রধান?",
    options: [
      "জাপান",
      "দক্ষিণ কোরিয়া",
      "রাশিয়া",
      "ফ্রান্স"
    ],
    answer: 2,
    explanation: "রূপপুর পারমাণবিক বিদ্যুৎকেন্দ্র নির্মাণে রাশিয়ার প্রযুক্তি ও সহযোগিতা প্রধান। প্রকল্পটি রাশিয়ার সহযোগিতায় বাস্তবায়িত হচ্ছে।"
  },

  {
    
    question: "বাংলাদেশের দ্বিতীয় বৃহত্তম আন্তর্জাতিক বিমানবন্দর কোনটি?",
    options: [
      "শাহ আমানত আন্তর্জাতিক বিমানবন্দর",
      "ওসমানী আন্তর্জাতিক বিমানবন্দর",
      "কক্সবাজার আন্তর্জাতিক বিমানবন্দর",
      "সৈয়দপুর আন্তর্জাতিক বিমানবন্দর"
    ],
    answer: 1,
    explanation: "সিলেট ওসমানী আন্তর্জাতিক বিমানবন্দর হলো রানওয়ে এবং টার্মিনালের আকার ও সক্ষমতার দিক থেকে বাংলাদেশের দ্বিতীয় বৃহত্তম আন্তর্জাতিক বিমানবন্দর। (যদিও শাহ আমানতকে ঐতিহাসিকভাবে দ্বিতীয় হিসেবে গণ্য করা হতো, বর্তমানে ওসমানী বিমানবন্দরই দ্বিতীয় স্থানে)।"
  },

  {
   
    question: "বাংলাদেশের প্রধান সমুদ্রবন্দরগুলোর মধ্যে মোংলা বন্দর কোন জেলায় অবস্থিত?",
    options: [
      "খুলনা",
      "সাতক্ষীরা",
      "বরগুনা",
      "বাগেরহাট"
    ],
    answer: 3,
    explanation: "মোংলা বন্দর বাগেরহাট জেলায় অবস্থিত। এটি বাংলাদেশের প্রধান সমুদ্রবন্দরগুলোর একটি এবং দেশের দক্ষিণ-পশ্চিমাঞ্চলের বাণিজ্যে গুরুত্বপূর্ণ।"
  },

  {
    
    question: "বাংলাদেশের স্থলবন্দর ব্যবস্থাপনার দায়িত্বে কোন প্রতিষ্ঠানটি প্রধান ভূমিকা পালন করে?",
    options: [
      "বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ",
      "বাংলাদেশ স্থলবন্দর কর্তৃপক্ষ",
      "বাংলাদেশ বন্দর কর্তৃপক্ষ",
      "বাংলাদেশ নৌপরিবহন অধিদপ্তর"
    ],
    answer: 1,
    explanation: "বাংলাদেশ স্থলবন্দর কর্তৃপক্ষ দেশের স্থলবন্দরগুলোর ব্যবস্থাপনা, উন্নয়ন ও পরিচালনায় প্রধান ভূমিকা পালন করে।"
  },

  {
    
    question: "বাংলাদেশের ‘জাতীয় জাদুঘর’ প্রতিষ্ঠার মূল উদ্দেশ্যের সঙ্গে কোন বিষয়টি সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "কেবল প্রত্নতাত্ত্বিক নিদর্শন সংরক্ষণ",
      "কেবল মুক্তিযুদ্ধের অস্ত্র সংরক্ষণ",
      "দেশের ইতিহাস, সংস্কৃতি ও ঐতিহ্য সংরক্ষণ ও প্রদর্শন",
      "কেবল শিল্পকর্ম প্রদর্শন"
    ],
    answer: 2,
    explanation: "বাংলাদেশ জাতীয় জাদুঘর দেশের ইতিহাস, সংস্কৃতি, ঐতিহ্য ও বিভিন্ন গুরুত্বপূর্ণ নিদর্শন সংরক্ষণ এবং প্রদর্শনের কাজ করে।"
  },

  {
    
    question: "বাংলাদেশ জাতীয় জাদুঘরের প্রধান কার্যালয় কোথায় অবস্থিত?",
    options: [
      "আগারগাঁও, ঢাকা",
      "রমনা, ঢাকা",
      "পুরান ঢাকা",
      "শাহবাগ, ঢাকা"
    ],
    answer: 3,
    explanation: "বাংলাদেশ জাতীয় জাদুঘরের প্রধান ভবন ঢাকার শাহবাগে অবস্থিত। এটি দেশের গুরুত্বপূর্ণ ইতিহাস ও সাংস্কৃতিক নিদর্শনের অন্যতম প্রধান সংগ্রহশালা।"
  },

  {
    
    question: "বাংলাদেশের মুদ্রার নাম ‘টাকা’ হলেও এর আন্তর্জাতিক মুদ্রা-সংকেত কোনটি?",
    options: [
      "BDN",
      "TKA",
      "BTA",
      "BDT"
    ],
    answer: 3,
    explanation: "বাংলাদেশের সরকারি মুদ্রা হলো টাকা এবং এর আন্তর্জাতিক ISO 4217 মুদ্রা-সংকেত হলো BDT।"
  },

  {
   
    question: "বাংলাদেশের বৈদেশিক মুদ্রার রিজার্ভ ব্যবস্থাপনা ও মুদ্রানীতির সঙ্গে সবচেয়ে সরাসরি কোন প্রতিষ্ঠানটি যুক্ত?",
    options: [
      "বাংলাদেশ ব্যাংক",
      "বাংলাদেশ পরিসংখ্যান ব্যুরো",
      "বাংলাদেশ বিনিয়োগ উন্নয়ন কর্তৃপক্ষ",
      "জাতীয় রাজস্ব বোর্ড"
    ],
    answer: 0,
    explanation: "বাংলাদেশ ব্যাংক দেশের কেন্দ্রীয় ব্যাংক। এটি মুদ্রানীতি পরিচালনা এবং বৈদেশিক মুদ্রার রিজার্ভ ব্যবস্থাপনায় গুরুত্বপূর্ণ দায়িত্ব পালন করে।"
  },

  {
    
    question: "বাংলাদেশের জাতীয় রাজস্ব বোর্ডের প্রধান দায়িত্ব কোনটি?",
    options: [
      "মুদ্রা ছাপানো",
      "ব্যাংক ঋণ নিয়ন্ত্রণ",
      "কর ও শুল্ক আদায়",
      "বৈদেশিক মুদ্রার বিনিময় হার নির্ধারণ"
    ],
    answer: 2,
    explanation: "জাতীয় রাজস্ব বোর্ড বা NBR দেশের প্রধান কর প্রশাসন কর্তৃপক্ষ। আয়কর, মূল্য সংযোজন কর ও শুল্ক আদায়ে এটি গুরুত্বপূর্ণ দায়িত্ব পালন করে।"
  },

  {
   
    question: "বাংলাদেশের আয়কর, মূল্য সংযোজন কর (VAT) ও শুল্ক—এই তিনটির মধ্যে কোনটি সাধারণত পরোক্ষ কর হিসেবে বিবেচিত?",
    options: [
      "আয়কর",
      "সম্পত্তি কর",
      "ব্যক্তিগত আয়কর",
      "VAT"
    ],
    answer: 3,
    explanation: "VAT বা মূল্য সংযোজন কর একটি পরোক্ষ কর। পণ্য ও সেবার মূল্যের সঙ্গে এই কর যুক্ত থাকে এবং সাধারণত ভোক্তা এর অর্থনৈতিক বোঝা বহন করে।"
  },

  {
    
    question: "বাংলাদেশের ‘জাতীয় রাজস্ব বোর্ড’ কোন মন্ত্রণালয়ের অধীন?",
    options: [
      "অর্থ মন্ত্রণালয়",
      "শিল্প মন্ত্রণালয়",
      "বাণিজ্য মন্ত্রণালয়",
      "পরিকল্পনা মন্ত্রণালয়"
    ],
    answer: 0,
    explanation: "জাতীয় রাজস্ব বোর্ড বাংলাদেশের অর্থ মন্ত্রণালয়ের অধীন রাজস্ব প্রশাসনের গুরুত্বপূর্ণ প্রতিষ্ঠান।"
  },

  {
   
    question: "বাংলাদেশের পুঁজিবাজারের প্রধান নিয়ন্ত্রক সংস্থা কোনটি?",
    options: [
      "বাংলাদেশ ব্যাংক",
      "জাতীয় রাজস্ব বোর্ড",
      "বাংলাদেশ বিনিয়োগ উন্নয়ন কর্তৃপক্ষ",
      "বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন"
    ],
    answer: 3,
    explanation: "বাংলাদেশ সিকিউরিটিজ অ্যান্ড এক্সচেঞ্জ কমিশন বা BSEC দেশের পুঁজিবাজারের প্রধান নিয়ন্ত্রক সংস্থা।"
  },

  {
    
    question: "ঢাকা স্টক এক্সচেঞ্জের সংক্ষিপ্ত রূপ কোনটি?",
    options: [
      "DSE",
      "DSC",
      "DSEC",
      "DEX"
    ],
    answer: 0,
    explanation: "ঢাকা স্টক এক্সচেঞ্জের ইংরেজি নাম Dhaka Stock Exchange। এর প্রচলিত সংক্ষিপ্ত রূপ DSE।"
  },

  {
    
    question: "চট্টগ্রাম স্টক এক্সচেঞ্জের বর্তমান প্রচলিত সংক্ষিপ্ত রূপ কোনটি?",
    options: [
      "CSC",
      "CSEC",
      "CTX",
      "CSE"
    ],
    answer: 3,
    explanation: "চট্টগ্রাম স্টক এক্সচেঞ্জের ইংরেজি নাম Chittagong Stock Exchange। এর প্রচলিত সংক্ষিপ্ত রূপ CSE।"
  },

  {
    
    question: "বাংলাদেশের রপ্তানি উন্নয়ন ব্যুরোর ইংরেজি সংক্ষিপ্ত রূপ কোনটি?",
    options: [
      "EPB",
      "EDB",
      "BEP",
      "BEX"
    ],
    answer: 0,
    explanation: "রপ্তানি উন্নয়ন ব্যুরোর ইংরেজি নাম Export Promotion Bureau। এর সংক্ষিপ্ত রূপ EPB।"
  },

  {
    
    question: "BIDA-এর মূল কাজের সঙ্গে কোন বিষয়টি সবচেয়ে বেশি সম্পর্কিত?",
    options: [
      "মুদ্রা ছাপানো",
      "কৃষিজমি জরিপ",
      "বিনিয়োগ সহজীকরণ ও প্রচার",
      "সরকারি চাকরির পরীক্ষা নেওয়া"
    ],
    answer: 2,
    explanation: "BIDA বা Bangladesh Investment Development Authority দেশে বিনিয়োগ সহজীকরণ ও বিনিয়োগ প্রচারে গুরুত্বপূর্ণ ভূমিকা পালন করে।"
  },

  {
    
    question: "বাংলাদেশের প্রধান অর্থনৈতিক অঞ্চলগুলো উন্নয়নের জন্য কোন কর্তৃপক্ষ গুরুত্বপূর্ণ ভূমিকা পালন করে?",
    options: [
      "BTRC",
      "BEZA",
      "BSEC",
      "BRTA"
    ],
    answer: 1,
    explanation: "BEZA বা Bangladesh Economic Zones Authority দেশের অর্থনৈতিক অঞ্চল প্রতিষ্ঠা, উন্নয়ন ও পরিচালনায় গুরুত্বপূর্ণ ভূমিকা পালন করে।"
  },

  {
    
    question: "বাংলাদেশের টেলিযোগাযোগ খাতের নিয়ন্ত্রক সংস্থা কোনটি?",
    options: [
      "BTCL",
      "BTV",
      "BTRC",
      "BCC"
    ],
    answer: 2,
    explanation: "BTRC বা Bangladesh Telecommunication Regulatory Commission বাংলাদেশের টেলিযোগাযোগ খাতের নিয়ন্ত্রক সংস্থা।"
  },

  {
   
    question: "বাংলাদেশ টেলিকমিউনিকেশন কোম্পানি লিমিটেডের সংক্ষিপ্ত রূপ কী?",
    options: [
      "BTCL",
      "BTCC",
      "BTL",
      "BTEL"
    ],
    answer: 0,
    explanation: "Bangladesh Telecommunications Company Limited-এর সংক্ষিপ্ত রূপ BTCL। এটি বাংলাদেশের একটি রাষ্ট্রীয় মালিকানাধীন টেলিযোগাযোগ প্রতিষ্ঠান।"
  },

  {
    
    question: "বাংলাদেশের সড়ক পরিবহন খাতের যানবাহন নিবন্ধন ও ড্রাইভিং লাইসেন্সের সঙ্গে কোন সংস্থাটি সরাসরি যুক্ত?",
    options: [
      "BRTC",
      "RHD",
      "BTRC",
      "BRTA"
    ],
    answer: 3,
    explanation: "BRTA বা Bangladesh Road Transport Authority যানবাহন নিবন্ধন, ড্রাইভিং লাইসেন্স এবং সড়ক পরিবহন-সংক্রান্ত বিভিন্ন নিয়ন্ত্রক কাজের সঙ্গে যুক্ত।"
  },

  {
    
    question: "বাংলাদেশ সড়ক পরিবহন কর্পোরেশনের সংক্ষিপ্ত রূপ কোনটি?",
    options: [
      "BRTA",
      "BRTC",
      "BRTCX",
      "BRTC Ltd."
    ],
    answer: 1,
    explanation: "বাংলাদেশ সড়ক পরিবহন কর্পোরেশনের ইংরেজি নাম Bangladesh Road Transport Corporation। এর সংক্ষিপ্ত রূপ BRTC।"
  },

  {
    
    question: "বাংলাদেশের জাতীয় মহাসড়ক ও সড়ক অবকাঠামো উন্নয়নের সঙ্গে কোন সংস্থাটি প্রধানত যুক্ত?",
    options: [
      "Bangladesh Road Transport Authority",
      "Bangladesh Railway",
      "Roads and Highways Department",
      "Local Government Engineering Department"
    ],
    answer: 2,
    explanation: "Roads and Highways Department বা RHD বাংলাদেশের জাতীয় মহাসড়কসহ প্রধান সড়ক অবকাঠামোর নির্মাণ, উন্নয়ন ও রক্ষণাবেক্ষণের সঙ্গে যুক্ত।"
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