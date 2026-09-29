/**
 * SahkarSaathi - Multilingual Cooperative Governance & Legal Assistance Chatbot
 * Smart India Hackathon (SIH) Edition
 * Implementation with Nature-Inspired Design, 3-Person Persona Showcase, 
 * Web Speech TTS, and PACS Office Fast Verification Assistant.
 */

// 3 Official Predefined Government Scheme Records
const OFFICIAL_SCHEMES = [
  {
    id: "scheme-001",
    code: "PACS-COMP-2024",
    name: {
      en: "Computerization of Primary Agricultural Credit Societies (PACS)",
      ta: "தொடக்க வேளாண்மை கூட்டுறவு கடன் சங்கங்களின் (PACS) கணினிமயமாக்கல் திட்டம்",
      mr: "प्राथमिक कृषी पतसंस्थांचे (PACS) संगणकीकरण योजना",
      te: "ప్రాథమిక వ్యవసాయ సహకార పరపతి సంఘాల (PACS) కంప్యూటరీకరణ పథకం",
      hi: "प्राथमिक कृषि ऋण समितियों (PACS) का कम्प्यूटरीकरण एवं डिजिटलीकरण"
    },
    department: "Ministry of Cooperation, Govt. of India / NABARD",
    summary: {
      en: "Centrally sponsored project establishing unified national ERP cloud software across 63,000 functional PACS for transparent digital lending, real-time audit integration with DCCBs, and direct DBT disbursement.",
      ta: "63,000 தொடக்க வேளாண் கூட்டுறவு கடன் சங்கங்களில் வெளிப்படையான கணக்கியல், நேரடி மானியப் பகிர்வு மற்றும் மாவட்ட மத்திய கூட்டுறவு வங்கியுடன் இணைக்க தேசிய அளவிலான ஈஆர்பி மென்பொருள் திட்டம்.",
      mr: "६३,००० कार्यरत पॅक्समध्ये पारदर्शक हिशोब, थेट डीबीटी वाटप आणि जिल्हा मध्यवर्ती सहकारी बँकेशी (DCCB) थेट जोडणीसाठी राष्ट्रीय क्लाउड ईआरपी प्रणाली बसवण्याची योजना.",
      te: "63,000 కార్యాచరణ ప్యాక్స్ (PACS) లో పారదర్శక ఖాతాలు, ప్రత్యక్ష డిబిటి పంపిణీ మరియు డీసీసీబీలతో ఆడిట్ అనుసంధానం కోసం ఏకీకృత జాతీయ ఈఆర్పీ సాఫ్ట్‌వేర్ పథకం.",
      hi: "63,000 सक्रिय पैक्स में पारदर्शी बहीखाता, प्रत्यक्ष डीबीटी अंतरण और जिला केंद्रीय सहकारी बैंकों के साथ ऑडिट लिंक हेतु एकीकृत राष्ट्रीय ईआरपी।"
    },
    benefits: "100% Financial Grant for Hardware, ERP Software, & Cloud Connectivity (Up to ₹4.0 Lakhs per PACS)",
    eligibility: {
      en: "All functional PACS registered under respective State Cooperative Societies Acts and affiliated to District Central Cooperative Banks (DCCBs).",
      ta: "மாநில கூட்டுறவு சங்க சட்டத்தின் கீழ் பதிவு செய்யப்பட்டு மாவட்ட மத்திய கூட்டுறவு வங்கியுடன் இணைக்கப்பட்ட அனைத்து சங்கங்கள்.",
      mr: "राज्य सहकारी संस्था कायद्यांतर्गत नोंदणीकृत आणि जिल्हा मध्यवर्ती सहकारी बँकांशी (DCCB) संलग्न सर्व कार्यरत पॅक्स.",
      te: "రాష్ట్ర సహకార సంఘాల చట్టం కింద రిజిస్టర్ అయి జిల్లా కేంద్ర సహకార బ్యాంకులతో అనుసంధానమైన అన్ని ప్యాక్స్.",
      hi: "संबंधित राज्य सहकारी समिति अधिनियम के तहत पंजीकृत और जिला केंद्रीय सहकारी बैंक से संबद्ध सभी चालू पैक्स।"
    },
    documents: [
      "PACS Registration Certificate & Bye-laws",
      "Audit Report of last 3 Financial Years",
      "DCCB Board Resolution for ERP Migration",
      "PACS Secretary & Staff KYC details"
    ],
    applicationProcess: "Online registration by PACS Secretary on State Cooperative Registrar Portal with DCCB authorization.",
    sourceUrl: "https://cooperation.gov.in/pacs-computerization",
    lastVerified: "September 2024",
    statutoryTimeline: "Verification completed within 7 working days via State Cooperative Registrar."
  },
  {
    id: "scheme-002",
    code: "AIF-PACS-SUB-2024",
    name: {
      en: "Agriculture Infrastructure Fund (AIF) - PACS 3% Interest Subvention",
      ta: "வேளாண் உட்கட்டமைப்பு நிதி (AIF) - கூட்டுறவு சங்கங்களுக்கான 3% வட்டி மானிய திட்டம்",
      mr: "कृषी पायाभूत सुविधा निधी (AIF) - पॅक्स ३% व्याज सवलत योजना",
      te: "వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF) - ప్యాక్స్ 3% వడ్డీ రాయితీ పథకం",
      hi: "कृषि अवसंरचना कोष (AIF) - पैक्स 3% ब्याज अनुदान योजना"
    },
    department: "Ministry of Agriculture & Farmers Welfare / NABARD",
    summary: {
      en: "Medium to long-term financial assistance for PACS to build post-harvest infrastructure like cold storage, custom hiring centres, and sorting units with 3% annual interest subvention up to ₹2 Crore.",
      ta: "தொடக்க கூட்டுறவு சங்கங்கள் குளிர்பதன கிடங்கு, தானிய சேமிப்பு கிடங்கு மற்றும் வேளாண் இயந்திர வாடகை மையம் அமைக்க ₹2 கோடி வரை 3% வட்டி மானிய கடன் உதவி.",
      mr: "पॅक्सना शेतमाल साठवणूक, शीतगृह (Cold Storage) आणि कस्टम हायरिंग केंद्र उभारणीसाठी ₹२ कोटी पर्यंतच्या कर्जावर वार्षिक ३% व्याज सवलत.",
      te: "కోల్డ్ స్టోరేజ్, కస్టమ్ హైరింగ్ సెంటర్లు మరియు గోదాముల నిర్మాణం కోసం ప్యాక్స్ తీసుకునే ₹2 కోట్ల రుణాలపై వార్షిక 3% వడ్డీ రాయితీ.",
      hi: "कोल्ड स्टोरेज, गोदाम और कस्टम हायरिंग सेंटर स्थापना हेतु पैक्स को ₹2 करोड़ तक के ऋण पर 3% वार्षिक ब्याज अनुदान।"
    },
    benefits: "3% per annum Interest Subvention on loans up to ₹2.0 Crore + CGTMSE / NABSanrakshan Credit Guarantee Fee Coverage",
    eligibility: {
      en: "PACS, Primary Marketing Cooperative Societies, and Multi-Purpose Cooperatives with viable post-harvest DPR.",
      ta: "விவசாய விளைபொருள் சேமிப்பு திட்ட அறிக்கை சமர்ப்பிக்கும் தொடக்க வேளாண் கூட்டுறவு சங்கங்கள் மற்றும் சந்தைப்படுத்தல் சங்கங்கள்.",
      mr: "शेतमाल काढणीनंतरच्या पायाभूत सुविधांचा परिपूर्ण प्रकल्प अहवाल (DPR) असणाऱ्या प्राथमिक कृषी पतसंस्था व विपणन संस्था.",
      te: "వ్యవసాయ మౌలిక వసతుల డిపిఆర్ (DPR) సమర్పించిన ప్రాథమిక సహకార సంఘాలు మరియు మార్కెటింగ్ సొసైటీలు.",
      hi: "प्राथमिक कृषि ऋण समितियां एवं विपणन सहकारी समितियां जिनका डीपीआर स्वीकृत है।"
    },
    documents: [
      "Detailed Project Report (DPR) for Infrastructure",
      "Land Ownership / Lease Deed (Minimum 10 years)",
      "Resolution of PACS Managing Committee",
      "No Objection Certificate from District Registrar"
    ],
    applicationProcess: "Online DPR submission on the National AIF Portal (agriinfra.dac.gov.in) with DCCB lending consent.",
    sourceUrl: "https://agriinfra.dac.gov.in/",
    lastVerified: "September 2024",
    statutoryTimeline: "In-principle approval within 14 working days via National AIF Portal."
  },
  {
    id: "scheme-003",
    code: "PM-KUSUM-SOLAR-2024",
    name: {
      en: "PM-KUSUM Component-A/C - Solarization of Agricultural Pumps via PACS",
      ta: "பிஎம்-குசும் திட்டம் - கூட்டுறவு உறுப்பினர்களுக்கான சூரிய மின் பம்பு செட் மானியம்",
      mr: "पीएम-कुसुम योजना - पॅक्स सभासदांसाठी सौर कृषी पंप व फिडर सोलरायझेशन",
      te: "పీఎం-కుసుమ్ పథకం - ప్యాక్స్ సౌర వ్యవసాయ పంపులు మరియు ఫీడర్ సోలరైజేషన్",
      hi: "पीएम-कुसुम योजना - पैक्स सदस्यों के लिए सौर कृषि पंप और फीडर सोलराइजेशन"
    },
    department: "Ministry of New and Renewable Energy (MNRE)",
    summary: {
      en: "60% direct capital subsidy (30% Central + 30% State) for installing standalone solar water pumps and grid-connected solar power plants on barren PACS land with guaranteed DISCOM surplus power purchase.",
      ta: "விவசாயிகளுக்கு சூரிய மின் மோட்டார் பம்புகளுக்கு 60% நேரடி மானியம் மற்றும் உபரி மின்சாரத்தை மின்சார வாரியத்திற்கு (DISCOM) விற்பனை செய்யும் வாய்ப்பு.",
      mr: "सौर कृषी पंपांसाठी ६०% थेट सरकारी अनुदान (३०% केंद्र + ३०% राज्य) आणि पडीक जागेवर सौर ऊर्जा प्रकल्प उभारून वीज वितरण कंपनीस वीज विक्रीची हमी.",
      te: "సోలార్ వ్యవసాయ పంపులపై 60% సబ్సిడీ (30% కేంద్రం + 30% రాష్ట్రం) మరియు డిస్కంలకు మిగులు విద్యుత్ విక్రయించే సదుపాయం.",
      hi: "सोलर कृषि पंपों पर 60% तक का प्रत्यक्ष अनुदान और बंजर जमीन पर सौर प्लांट लगाकर डिस्कॉम को बिजली बेचने की सुविधा।"
    },
    benefits: "60% Direct Subsidy (30% Central + 30% State) + 30% Bank Loan (Farmer contributes only 10%)",
    eligibility: {
      en: "Individual farmer members of PACS, Farmer Producer Organizations (FPOs), and Water User Associations.",
      ta: "தொடக்க கூட்டுறவு கடன் சங்கத்தில் உறுப்பினராக உள்ள விவசாயிகள் மற்றும் உழவர் உற்பத்தியாளர் அமைப்புகள்.",
      mr: "पॅक्सचे सर्व शेतकरी सभासद, शेतकरी उत्पादक कंपन्या (FPO) आणि पाणी वापर संस्था.",
      te: "ప్యాక్స్ సభ్యులైన రైతులు, రైతు ఉత్పత్తిదారుల సంఘాలు (FPOs).",
      hi: "पैक्स के सभी सदस्य किसान, एफपीओ और जल उपभोक्ता समितियां।"
    },
    documents: [
      "Land Revenue Record (7/12 Extract / RoR / Patta)",
      "PACS Membership Certificate & No-Dues Certificate",
      "Aadhaar Card and Bank Passbook linked to NPCI",
      "Borewell / Irrigation Source Certificate"
    ],
    applicationProcess: "Application via State Renewable Energy Development Agency portal with PACS endorsement.",
    sourceUrl: "https://pmkusum.mnre.gov.in/",
    lastVerified: "September 2024",
    statutoryTimeline: "Site survey and approval within 10 days by State Nodal Renewable Agency."
  }
];

// 3 Predefined Demo Personas
const DEMO_PERSONAS = {
  murugan: {
    id: "murugan",
    name: "Murugan K",
    role: "Farmer Member",
    state: "Tamil Nadu",
    lang: "ta",
    pacsId: "TN-SLM-PACS-402",
    aadhaar: "5834-8921-9120",
    phone: "9840123456",
    schemeId: "scheme-003",
    schemeCode: "PM-KUSUM-SOLAR-2024",
    query: "PM-KUSUM சோலார் பம்பு மானியம் மற்றும் தகுதி விவரங்களை விளக்குங்கள்.",
    docsDefault: ["Land Revenue Record (7/12 Extract / RoR / Patta)", "PACS Membership Certificate & No-Dues Certificate", "Aadhaar Card and Bank Passbook linked to NPCI"]
  },
  patil: {
    id: "patil",
    name: "Ramesh Patil",
    role: "PACS Secretary",
    state: "Maharashtra",
    lang: "mr",
    pacsId: "MH-KOP-PACS-108",
    aadhaar: "7249-1102-4581",
    phone: "9822054321",
    schemeId: "scheme-002",
    schemeCode: "AIF-PACS-SUB-2024",
    query: "पॅक्ससाठी कृषी पायाभूत सुविधा निधी (AIF) ३% व्याज सवलत योजनेचे नियम व कागदपत्रे सांगा.",
    docsDefault: ["Detailed Project Report (DPR) for Infrastructure", "Land Ownership / Lease Deed (Minimum 10 years)", "Resolution of PACS Managing Committee", "No Objection Certificate from District Registrar"]
  },
  venkat: {
    id: "venkat",
    name: "Venkat Rao",
    role: "Cooperative Society Member",
    state: "Andhra Pradesh",
    lang: "te",
    pacsId: "AP-GNT-PACS-774",
    aadhaar: "4390-6721-3098",
    phone: "9440567890",
    schemeId: "scheme-001",
    schemeCode: "PACS-COMP-2024",
    query: "ప్యాక్స్ కంప్యూటరీకరణ ఈఆర్పీ పథకం ప్రయోజనాలు మరియు అర్హత వివరాలు వివరించండి.",
    docsDefault: ["PACS Registration Certificate & Bye-laws", "Audit Report of last 3 Financial Years", "DCCB Board Resolution for ERP Migration", "PACS Secretary & Staff KYC details"]
  }
};

// Multilingual Greetings & System Text
const I18N = {
  en: {
    greeting: "Welcome! Hello 👋",
    welcome: "Welcome to SahkarSaathi. Ask any question regarding PACS computerization, AIF 3% interest subvention, or PM-KUSUM solar schemes.",
    unseenBadge: "Unseen (!)",
    savedBadge: "Saved for Later",
    rateLimitMsg: "Please wait a moment before sending another inquiry.",
    audioPlaying: "Playing voice explanation...",
    audioStopped: "Voice output stopped.",
    audioUnavailable: "Spoken audio synthesis is not supported on this browser.",
    demoUpdateNotice: "Simulated Demo Update: New scheme notification delivered.",
    groundingDisclaimer: "Information strictly grounded in official Ministry guidelines. Demo data only."
  },
  ta: {
    greeting: "Vanakkam! வணக்கம் 👋",
    welcome: "சகார்சாதி (SahkarSaathi) கூட்டுறவு உதவி மையத்திற்கு நல்வரவு! PACS கணினிமயமாக்கல், AIF 3% வட்டி மானியம் அல்லது PM-KUSUM சோலார் திட்டங்கள் பற்றி கேட்கலாம்.",
    unseenBadge: "பார்க்காதவை (!)",
    savedBadge: "சேமிக்கப்பட்டவை",
    rateLimitMsg: "அடுத்த கேள்வியை அனுப்ப சிறிது நேரம் காத்திருக்கவும்.",
    audioPlaying: "தமிழ் குரல் விளக்கம் ஒலிக்கிறது...",
    audioStopped: "குரல் விளக்கம் நிறுத்தப்பட்டது.",
    audioUnavailable: "உங்கள் உலாவியில் ஆடியோ கிடைக்கவில்லை.",
    demoUpdateNotice: "மாதிரி அறிவிப்பு: புதிய அரசு திட்ட தகவல் வந்துள்ளது.",
    groundingDisclaimer: "அதிகாரப்பூர்வ அரசு வழிகாட்டுதலின்படியான தகவல்."
  },
  mr: {
    greeting: "Namaskar! नमस्कार 👋",
    welcome: "सहकारसाथी (SahkarSaathi) मध्ये आपले स्वागत आहे! पॅक्स संगणकीकरण, एआयएफ ३% व्याज सवलत किंवा पीएम-कुसुम सौर योजनांबद्दल विचारा.",
    unseenBadge: "न पाहिलेले (!)",
    savedBadge: "जतन केलेले",
    rateLimitMsg: "कृपया पुढील प्रश्न विचारण्यापूर्वी थोडा वेळ थांबा.",
    audioPlaying: "मराठी व्हॉईस स्पष्टीकरण सुरू आहे...",
    audioStopped: "व्हॉईस आउटपुट थांबवले आहे.",
    audioUnavailable: "सिस्टमवर प्रादेशिक ऑडिओ उपलब्ध नाही.",
    demoUpdateNotice: "डेमो अपडेट: नवीन शासकीय योजनेची माहिती प्राप्त झाली.",
    groundingDisclaimer: "सहकार मंत्रालय आणि नाबार्डच्या अधिकृत नियमांवर आधारित माहिती."
  },
  te: {
    greeting: "Namaskaram! నమస్కారం 👋",
    welcome: "సహకారసారథి (SahkarSaathi) కి స్వాగతం! ప్యాక్స్ కంప్యూటరీకరణ, ఏఐఎఫ్ 3% వడ్డీ రాయితీ లేదా పీఎం-కుసుమ్ పథకాలపై ప్రశ్నలు అడగండి.",
    unseenBadge: "చూడనివి (!)",
    savedBadge: "భద్రపరిచినవి",
    rateLimitMsg: "దయచేసి తదుపరి ప్రశ్న అడిగే ముందు కాసేపు వేచి ఉండండి.",
    audioPlaying: "తెలుగు వాయిస్ సమాచారం వినిపిస్తోంది...",
    audioStopped: "వాయిస్ అవుట్‌పుట్ ఆపబడింది.",
    audioUnavailable: "సిస్టమ్‌లో ఆడియో అందుబాటులో లేదు.",
    demoUpdateNotice: "డెమో అప్‌డేట్: కొత్త పథకం సమాచారం అందింది.",
    groundingDisclaimer: "సహకార మంత్రిత్వ శాఖ మరియు నాబార్డ్ నిబంధనల ఆధారంగా అధికారిక సమాచారం."
  },
  hi: {
    greeting: "Namaste! नमस्ते 👋",
    welcome: "सहकारसाथी (SahkarSaathi) में आपका स्वागत है। पैक्स कम्प्यूटरीकरण, एआईएफ 3% ब्याज अनुदान, या पीएम-कुसुम सौर योजना के बारे में पूछें।",
    unseenBadge: "अनदेखे (!)",
    savedBadge: "सुरक्षित किए गए",
    rateLimitMsg: "कृपया अगला संदेश भेजने से पहले थोड़ा इंतजार करें।",
    audioPlaying: "हिंदी आवाज में स्पष्टीकरण जारी है...",
    audioStopped: "आवाज बंद की गई।",
    audioUnavailable: "सिस्टम ऑडियो उपलब्ध नहीं है।",
    demoUpdateNotice: "डेमो अपडेट: नई सरकारी योजना की सूचना प्राप्त हुई।",
    groundingDisclaimer: "सहकारिता मंत्रालय के आधिकारिक नियमों पर आधारित कानूनी परामर्श।"
  }
};

// Application State Management
class AppState {
  constructor() {
    this.currentView = "inbox"; // "inbox" or "chatbot"
    this.currentLanguage = "ta"; // Default Tamil
    this.currentFilter = "all"; // "all", "unseen", "saved"
    this.autoVoice = true;

    // Active User / Persona Profile
    this.currentUser = {
      ...DEMO_PERSONAS.murugan
    };

    // Verification Terminal State
    this.verifState = {
      activeStep: 1,
      qrScanned: false,
      otpGenerated: "482910",
      otpVerified: false,
      selectedSchemeId: "scheme-003",
      checkedDocs: [],
      isEligible: true,
      missingDocs: [],
      verificationRefCode: "SAHKAR-VERIF-9481"
    };

    // 3 Official Schemes in Inbox
    this.availableSchemes = [
      {
        ...OFFICIAL_SCHEMES[0],
        status: "unseen",
        saved: false,
        receivedAt: new Date(Date.now() - 1 * 60 * 1000)
      }
    ];

    this.pendingQueue = [
      {
        ...OFFICIAL_SCHEMES[1],
        status: "unseen",
        saved: false,
        receivedAt: null
      },
      {
        ...OFFICIAL_SCHEMES[2],
        status: "unseen",
        saved: false,
        receivedAt: null
      }
    ];

    this.timerIntervalSeconds = 180; // 3 minutes
    this.remainingSeconds = 180;
    this.timerId = null;

    // Spam protection
    this.lastUserMessageTime = 0;
    this.rateLimitCooldownMs = 1000;

    // Chat messages history
    this.chatMessages = [
      {
        sender: "bot",
        text: I18N.ta.welcome,
        voiceText: "சகார்சாதி கூட்டுறவு உதவி மையத்திற்கு நல்வரவு. அரசு திட்டங்கள் மற்றும் தொடக்க கூட்டுறவு சங்க சேவைகள் பற்றி கேளுங்கள்.",
        timestamp: new Date()
      }
    ];

    this.telemetryCount = 0;
  }

  logTelemetry(event, data) {
    this.telemetryCount++;
    const el = document.getElementById("telemetry-counter");
    if (el) {
      el.textContent = `Telemetry Events Logged: ${this.telemetryCount}`;
    }
  }
}

const state = new AppState();

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initCookieConsent();
  initViewSwitcher();
  initInboxView();
  initChatbotView();
  initTimerSync();
  initStateModals();
  initPersonaShowcase();
  initLoginSystem();
  updateUserUI();
  updateGreetingUI();
  state.logTelemetry("APP_INITIALIZED", { app: "SahkarSaathi" });
});

// Update Greeting in Hero Banner
function updateGreetingUI() {
  const greetingEl = document.getElementById("hero-greeting-text");
  const langConfig = I18N[state.currentLanguage] || I18N.en;
  if (greetingEl) {
    greetingEl.innerHTML = `<span class="greeting-highlight">${escapeHtml(langConfig.greeting)}</span>`;
  }
}

// Hero 1-Tap Language Selection
window.selectHeroLanguage = function(langCode) {
  state.currentLanguage = langCode;

  // Update hero buttons active state
  document.querySelectorAll(".btn-hero-lang").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === langCode);
  });

  // Update chatbot select input
  const langSelect = document.getElementById("language-select");
  if (langSelect) langSelect.value = langCode;

  updateGreetingUI();
  renderInboxList(); // Update inbox titles

  const langConfig = I18N[langCode] || I18N.en;
  addChatMessage("bot", langConfig.welcome, langConfig.welcome);

  state.logTelemetry("HERO_LANGUAGE_CHANGED", { lang: langCode });
};

// Update Topbar and Profile UI
function updateUserUI() {
  const topUserDisplay = document.getElementById("topbar-user-display");
  const personaIndicator = document.getElementById("active-persona-indicator");
  
  if (topUserDisplay) {
    topUserDisplay.textContent = `Logged in: ${state.currentUser.name} (${state.currentUser.role})`;
  }
  if (personaIndicator) {
    personaIndicator.textContent = `Profile: ${state.currentUser.name} (${state.currentUser.state})`;
  }

  // Sync with Verification Terminal preview
  const vName = document.getElementById("verif-client-name");
  const vDesig = document.getElementById("verif-client-desig");
  const vAadhaar = document.getElementById("verif-client-aadhaar");
  const vPhone = document.getElementById("verif-client-phone");
  const vPacs = document.getElementById("verif-client-pacs");
  const otpPhone = document.getElementById("otp-phone-display");

  const maskedAadhaar = maskAadhaar(state.currentUser.aadhaar);

  if (vName) vName.textContent = state.currentUser.name;
  if (vDesig) vDesig.textContent = state.currentUser.role;
  if (vAadhaar) vAadhaar.textContent = maskedAadhaar;
  if (vPhone) vPhone.textContent = `+91 ${formatPhone(state.currentUser.phone)}`;
  if (vPacs) vPacs.textContent = state.currentUser.pacsId;
  if (otpPhone) otpPhone.textContent = `+91 ${formatPhone(state.currentUser.phone)}`;
}

// Mask Aadhaar helper - ensures client side privacy protection
function maskAadhaar(raw) {
  if (!raw) return "XXXX-XXXX-XXXX";
  const clean = String(raw).replace(/\D/g, "");
  if (clean.length === 12) {
    return `${clean.slice(0, 4)}-XXXX-${clean.slice(8, 12)}`;
  }
  return "XXXX-XXXX-XXXX";
}

function formatPhone(raw) {
  if (!raw) return "";
  const clean = String(raw).replace(/\D/g, "");
  if (clean.length === 10) {
    return `${clean.slice(0, 5)} ${clean.slice(5, 10)}`;
  }
  return raw;
}

// 3-Person Demo Persona Showcase Bar
function initPersonaShowcase() {
  const personaBtns = document.querySelectorAll(".btn-persona");

  personaBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const pKey = btn.getAttribute("data-persona");
      switchDemoPersona(pKey);
    });
  });
}

function switchDemoPersona(pKey) {
  const persona = DEMO_PERSONAS[pKey];
  if (!persona) return;

  // Update active state
  document.querySelectorAll(".btn-persona").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-persona") === pKey);
  });

  state.currentUser = { ...persona };
  state.currentLanguage = persona.lang;

  // Update hero lang selector buttons
  document.querySelectorAll(".btn-hero-lang").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === persona.lang);
  });

  // Update language select dropdown
  const langSelect = document.getElementById("language-select");
  if (langSelect) {
    langSelect.value = persona.lang;
  }

  updateUserUI();
  updateGreetingUI();
  renderInboxList(); // Update inbox translations

  // Add demonstration dialogue from this persona
  const query = persona.query;
  handleUserQuery(query);

  state.logTelemetry("DEMO_PERSONA_SWITCHED", { persona: pKey, lang: persona.lang });
}

// View Switcher (1. Inbox / 2. Chatbot)
function initViewSwitcher() {
  const tabInbox = document.getElementById("tab-inbox");
  const tabChatbot = document.getElementById("tab-chatbot");
  const viewInbox = document.getElementById("view-inbox");
  const viewChatbot = document.getElementById("view-chatbot");
  const currentViewTag = document.getElementById("current-view-tag");
  const iconDisplay = document.getElementById("workspace-icon-display");
  const headingDisplay = document.getElementById("workspace-main-heading");

  function switchView(viewName) {
    state.currentView = viewName;
    state.logTelemetry("VIEW_SWITCHED", { view: viewName });

    if (viewName === "inbox") {
      tabInbox.classList.add("active");
      tabInbox.setAttribute("aria-selected", "true");
      tabChatbot.classList.remove("active");
      tabChatbot.setAttribute("aria-selected", "false");

      viewInbox.classList.remove("hidden");
      viewChatbot.classList.add("hidden");
      if (currentViewTag) currentViewTag.textContent = "Scheme Inbox";
      if (iconDisplay) iconDisplay.textContent = "📥";
      if (headingDisplay) headingDisplay.textContent = "SahkarSaathi Scheme Inbox";
      renderInboxList();
    } else {
      tabChatbot.classList.add("active");
      tabChatbot.setAttribute("aria-selected", "true");
      tabInbox.classList.remove("active");
      tabInbox.setAttribute("aria-selected", "false");

      viewChatbot.classList.remove("hidden");
      viewInbox.classList.add("hidden");
      if (currentViewTag) currentViewTag.textContent = "Multilingual Chatbot";
      if (iconDisplay) iconDisplay.textContent = "💬";
      if (headingDisplay) headingDisplay.textContent = "SahkarSaathi Multilingual AI Assistant";
      renderChatMessages();
    }
  }

  tabInbox.addEventListener("click", () => switchView("inbox"));
  tabChatbot.addEventListener("click", () => switchView("chatbot"));
}

// 3-Minute Timed Inbox Update Engine
function initTimerSync() {
  const timerDisplay = document.getElementById("timer-countdown-display");
  const advanceTimerBtn = document.getElementById("btn-advance-timer");

  function updateTimerText() {
    const mins = Math.floor(state.remainingSeconds / 60);
    const secs = state.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    if (timerDisplay) {
      timerDisplay.textContent = formatted;
    }
  }

  updateTimerText();

  state.timerId = setInterval(() => {
    if (state.remainingSeconds > 0) {
      state.remainingSeconds--;
      updateTimerText();
    } else {
      deliverNextScheme();
      state.remainingSeconds = state.timerIntervalSeconds;
      updateTimerText();
    }
  }, 1000);

  if (advanceTimerBtn) {
    advanceTimerBtn.addEventListener("click", () => {
      deliverNextScheme();
      state.remainingSeconds = state.timerIntervalSeconds;
      updateTimerText();
      state.logTelemetry("MANUAL_TIMER_TRIGGERED");
    });
  }
}

// Deliver next scheme to inbox
function deliverNextScheme() {
  let itemToDeliver = null;

  if (state.pendingQueue.length > 0) {
    itemToDeliver = state.pendingQueue.shift();
  } else {
    // Rotate through the 3 schemes as a demo update reminder
    const randomScheme = OFFICIAL_SCHEMES[Math.floor(Math.random() * OFFICIAL_SCHEMES.length)];
    itemToDeliver = {
      ...randomScheme,
      status: "unseen",
      saved: false,
      receivedAt: new Date()
    };
  }

  itemToDeliver.receivedAt = new Date();
  itemToDeliver.status = "unseen";
  state.availableSchemes.unshift(itemToDeliver);

  updateUnreadBadge();
  if (state.currentView === "inbox") {
    renderInboxList();
  }

  const lang = state.currentLanguage;
  const schemeTitle = itemToDeliver.name[lang] || itemToDeliver.name.en;
  showStatusNotice(`Demo Update: New Scheme Notification Received - ${schemeTitle}`);
  state.logTelemetry("SCHEME_NOTIFICATION_DELIVERED", { code: itemToDeliver.code });
}

function showStatusNotice(msg) {
  const label = document.getElementById("sync-status-text");
  if (label) {
    label.textContent = msg;
    label.style.color = "var(--color-forest)";
    label.style.fontWeight = "800";
    setTimeout(() => {
      label.textContent = "Simulated Scheme Updates Active (Every 3 Minutes)";
      label.style.color = "";
      label.style.fontWeight = "";
    }, 4500);
  }
}

// Update Unread Counter Badge
function updateUnreadBadge() {
  const unreadCount = state.availableSchemes.filter(s => s.status === "unseen").length;
  const badgeElement = document.getElementById("inbox-unread-count");
  if (badgeElement) {
    if (unreadCount > 0) {
      badgeElement.textContent = `${unreadCount} Unread`;
      badgeElement.classList.remove("hidden");
    } else {
      badgeElement.classList.add("hidden");
    }
  }
}

// Initialize Inbox View & Filters
function initInboxView() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentFilter = btn.getAttribute("data-filter");
      renderInboxList();
      state.logTelemetry("INBOX_FILTER_CHANGED", { filter: state.currentFilter });
    });
  });

  renderInboxList();
  updateUnreadBadge();
}

// Render Schemes in Inbox
function renderInboxList() {
  const listContainer = document.getElementById("scheme-inbox-list");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  let filtered = state.availableSchemes;
  if (state.currentFilter === "unseen") {
    filtered = state.availableSchemes.filter(s => s.status === "unseen");
  } else if (state.currentFilter === "saved") {
    filtered = state.availableSchemes.filter(s => s.saved);
  }

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <li class="empty-inbox-state">
        <p style="font-size: 16px; font-weight: 700; color: var(--color-forest-dark);">🌾 No scheme notifications under this filter.</p>
        <p style="font-size: 13px; margin-top: 6px; color: var(--text-muted);">
          Click "Advance Timer by 3 min" above to simulate an incoming scheme update.
        </p>
      </li>
    `;
    return;
  }

  const currentLang = state.currentLanguage;

  filtered.forEach(scheme => {
    const isUnseen = scheme.status === "unseen";
    const li = document.createElement("li");
    li.className = `scheme-item ${isUnseen ? "unread" : "read"}`;
    li.setAttribute("data-id", scheme.id);
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");

    const timeString = scheme.receivedAt ? scheme.receivedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Just now";
    const titleText = scheme.name[currentLang] || scheme.name.en;
    const summaryText = scheme.summary[currentLang] || scheme.summary.en;

    // Red exclamation mark for Unseen, Green check for Seen
    const indicatorHtml = isUnseen
      ? `<div class="status-indicator-box status-indicator-unseen" title="Unseen Notification" aria-label="Unseen Notification">!</div>`
      : `<div class="status-indicator-box status-indicator-seen" title="Seen Notification" aria-label="Seen Notification">✓</div>`;

    li.innerHTML = `
      ${indicatorHtml}
      <div class="scheme-main-info">
        <div class="scheme-header-line">
          <h4 class="scheme-title">${escapeHtml(titleText)}</h4>
          <span class="scheme-timestamp">${escapeHtml(timeString)}</span>
        </div>
        <p class="scheme-summary">${escapeHtml(summaryText)}</p>
        <div class="scheme-meta-tags">
          <span class="scheme-tag">${escapeHtml(scheme.code)}</span>
          <span class="scheme-tag scheme-tag-subsidy">${escapeHtml(scheme.benefits.split("(")[0])}</span>
          <span class="scheme-tag">Official Govt Data</span>
        </div>
      </div>
      <div class="scheme-actions">
        <button class="action-icon-btn ${scheme.saved ? 'saved' : ''}" data-action="save" title="${scheme.saved ? 'Saved for Later' : 'Save for Later'}">
          ${scheme.saved ? '★ Saved' : '☆ Save for later'}
        </button>
        <button class="btn btn-secondary btn-sm" data-action="view" title="Open Scheme Details">
          View Scheme &rarr;
        </button>
      </div>
    `;

    // Click row opens details and marks as seen
    li.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest("[data-action='save']")) {
        e.stopPropagation();
        scheme.saved = !scheme.saved;
        state.logTelemetry("SCHEME_SAVED_TOGGLED", { code: scheme.code, saved: scheme.saved });
        renderInboxList();
        return;
      }

      // Mark seen
      if (scheme.status === "unseen") {
        scheme.status = "seen";
        updateUnreadBadge();
        state.logTelemetry("SCHEME_MARKED_SEEN", { code: scheme.code });
      }

      openSchemeModal(scheme);
      renderInboxList();
    });

    listContainer.appendChild(li);
  });
}

// Scheme Details Modal Viewer
function openSchemeModal(scheme) {
  const modal = document.getElementById("scheme-detail-modal");
  const modalTitle = document.getElementById("modal-scheme-title");
  const modalBody = document.getElementById("modal-scheme-content");

  if (!modal || !modalTitle || !modalBody) return;

  const currentLang = state.currentLanguage;
  modalTitle.textContent = scheme.name[currentLang] || scheme.name.en;

  const docListHtml = scheme.documents.map(d => `<li>${escapeHtml(d)}</li>`).join("");

  modalBody.innerHTML = `
    <div style="margin-bottom: 14px; background: #faf8f2; padding: 12px 14px; border: 1px solid var(--border-card); border-radius: var(--radius-md);">
      <div style="font-size: 12px; color: var(--text-muted);">
        Scheme Code: <strong>${escapeHtml(scheme.code)}</strong> | ${escapeHtml(scheme.department)}
      </div>
      <div style="font-size: 14px; font-weight: 800; color: var(--color-forest); margin-top: 4px;">
        ${escapeHtml(scheme.benefits)}
      </div>
    </div>

    <div class="modal-section-title">Summary &amp; Purpose</div>
    <p>${escapeHtml(scheme.summary[currentLang] || scheme.summary.en)}</p>

    <div class="modal-section-title">Eligibility Criteria (Official Record)</div>
    <p>${escapeHtml(scheme.eligibility[currentLang] || scheme.eligibility.en)}</p>

    <div class="modal-section-title">Required Documents Checklist</div>
    <ul style="margin-left: 20px; font-size: 13px; margin-top: 6px;">
      ${docListHtml}
    </ul>

    <div class="modal-section-title">Application Steps &amp; Statutory Timeline</div>
    <p style="font-size: 13px;">${escapeHtml(scheme.applicationProcess)}</p>
    <div style="background-color: var(--color-leaf-light); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 13px; font-weight: 700; color: var(--color-forest-dark); margin-top: 6px;">
      ⏱️ ${escapeHtml(scheme.statutoryTimeline)}
    </div>

    <div style="margin-top: 16px; font-size: 12px; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 8px;">
      <span>Last Verified: ${escapeHtml(scheme.lastVerified)}</span>
      <a href="${escapeHtml(scheme.sourceUrl)}" target="_blank" rel="noopener noreferrer" style="color: var(--color-forest); font-weight: 800;">
        Official Portal Link &rarr;
      </a>
    </div>
  `;

  modal.classList.remove("hidden");
  state.logTelemetry("MODAL_OPENED", { code: scheme.code });
}

// Modal closing & ESC handling
function initStateModals() {
  const modal = document.getElementById("scheme-detail-modal");
  const closeBtn = document.getElementById("btn-close-modal");
  const modalAskBotBtn = document.getElementById("btn-modal-ask-bot");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  // Ask Chatbot about this Scheme
  if (modalAskBotBtn) {
    modalAskBotBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.getElementById("tab-chatbot").click();
      const schemeTitle = document.getElementById("modal-scheme-title").textContent;
      handleUserQuery(`Explain scheme: ${schemeTitle}`);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.add("hidden"));
    }
  });
}

// Chatbot Module Initialization
function initChatbotView() {
  const langSelect = document.getElementById("language-select");
  const autoVoiceToggle = document.getElementById("toggle-auto-voice");
  const chatInput = document.getElementById("chat-text-input");
  const sendBtn = document.getElementById("btn-chat-send");
  const quickButtons = document.querySelectorAll(".quick-scheme-btn");
  const promptChips = document.querySelectorAll(".prompt-chip");

  // Language change (Tamil, Marathi, Telugu, Hindi, English)
  if (langSelect) {
    langSelect.value = state.currentLanguage;
    langSelect.addEventListener("change", (e) => {
      state.currentLanguage = e.target.value;
      
      // Update hero language buttons
      document.querySelectorAll(".btn-hero-lang").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === state.currentLanguage);
      });

      updateGreetingUI();
      const langNotice = I18N[state.currentLanguage] || I18N.en;
      addChatMessage("bot", langNotice.welcome, langNotice.welcome);
      renderInboxList(); // Sync inbox titles to active language
      state.logTelemetry("LANGUAGE_CHANGED", { lang: state.currentLanguage });
    });
  }

  // Auto-voice toggle
  if (autoVoiceToggle) {
    autoVoiceToggle.addEventListener("change", (e) => {
      state.autoVoice = e.target.checked;
    });
  }

  // Quick Scheme Selectors
  quickButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const schemeId = btn.getAttribute("data-scheme-id");
      const scheme = OFFICIAL_SCHEMES.find(s => s.id === schemeId);
      if (scheme) {
        const lang = state.currentLanguage;
        const queryText = `Explain ${scheme.name[lang] || scheme.name.en}`;
        handleUserQuery(queryText);
      }
    });
  });

  // Suggested Prompts
  promptChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const prompt = chip.getAttribute("data-prompt");
      handleUserQuery(prompt);
    });
  });

  // Send message submit
  if (sendBtn && chatInput) {
    sendBtn.addEventListener("click", () => {
      handleUserQuery(chatInput.value);
    });

    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleUserQuery(chatInput.value);
      }
    });
  }
}

// User query submit handler with rate-limit / spam protection
function handleUserQuery(queryText) {
  if (!queryText || !queryText.trim()) return;

  const trimmed = queryText.trim();
  const now = Date.now();

  // Spam protection cooldown
  if (now - state.lastUserMessageTime < state.rateLimitCooldownMs) {
    const errorMsg = (I18N[state.currentLanguage] || I18N.en).rateLimitMsg;
    showStatusNotice(errorMsg);
    return;
  }

  state.lastUserMessageTime = now;

  const chatInput = document.getElementById("chat-text-input");
  if (chatInput) chatInput.value = "";

  addChatMessage("user", trimmed);

  // Generate grounded bot answer based strictly on official records
  setTimeout(() => {
    const reply = generateGroundedBotAnswer(trimmed, state.currentLanguage);
    addChatMessage("bot", reply.text, reply.voiceText);

    if (state.autoVoice) {
      playVoiceOutput(reply.voiceText, state.currentLanguage);
    }
  }, 350);

  state.logTelemetry("CHAT_QUERY", { length: trimmed.length, lang: state.currentLanguage });
}

// Grounded Bot Response Generator strictly based on Official Scheme Records
function generateGroundedBotAnswer(query, lang) {
  const lower = query.toLowerCase();

  // PM-KUSUM / Solar Scheme Match
  if (lower.includes("solar") || lower.includes("kusum") || lower.includes("சூரிய") || lower.includes("सौर") || lower.includes("సౌర") || lower.includes("பம்பு") || lower.includes("पंप") || lower.includes("పంప్")) {
    if (lang === "ta") {
      return {
        text: `**பிஎம்-குசும் (PM-KUSUM) சூரிய மின் பம்பு திட்டம்:**\n- **மானியம்:** 60% நேரடி அரசு மானியம் (30% மத்திய அரசு + 30% மாநில அரசு). விவசாயி 10% மட்டுமே செலுத்த வேண்டும்; 30% கூட்டுறவு வங்கி கடன்.\n- **தகுதி:** தொடக்க கூட்டுறவு கடன் சங்க (PACS) உறுப்பினர்கள் மற்றும் பாசன விவசாயிகள்.\n- **ஆவணங்கள்:** பட்டா / சிட்டா நகல், PACS உறுப்பினர் சான்று, ஆதார் அட்டை, வங்கி கணக்கு புத்தகம்.\n- **சரிபார்ப்பு காலம்:** விண்ணப்பித்த 10 நாட்களில் அரசு கள ஆய்வு முடித்து அனுமதி வழங்கப்படும்.`,
        voiceText: "பிஎம் குசும் திட்டத்தில் விவசாயிகளுக்கு அறுபது சதவீத நேரடி மானியத்தில் சோலார் பம்பு செட் வழங்கப்படுகிறது. விவசாயி பத்து சதவீதம் மட்டுமே செலுத்த வேண்டும். பத்து நாட்களில் சரிபார்ப்பு முடிந்து அனுமதி வழங்கப்படும்."
      };
    } else if (lang === "mr") {
      return {
        text: `**पीएम-कुसुम सौर कृषी पंप योजना:**\n- **अनुदान:** ६०% थेट सरकारी अनुदान (३०% केंद्र + ३०% राज्य). शेतकरी सभासदास केवळ १०% हिस्सा भरावा लागतो; उर्वरित ३०% बँक कर्ज.\n- **पात्रता:** पॅक्सचे सर्व शेतकरी सभासद आणि शेतकरी उत्पादक कंपन्या (FPO).\n- **कागदपत्रे:** ७/१२ उतारा, पॅक्स सभासद दाखला, आधार कार्ड, बँक पासबुक.\n- **पडताळणी वेळ:** अर्ज केल्यानंतर १० दिवसांत स्थळ पाहणी व मंजुरी.`,
        voiceText: "पीएम कुसुम योजनेअंतर्गत सौर कृषी पंपावर साठ टक्के थेट सरकारी अनुदान मिळते. शेतकरी सभासदास केवळ दहा टक्के रक्कम भरावी लागते. दहा दिवसांत पडताळणी पूर्ण होते."
      };
    } else if (lang === "te") {
      return {
        text: `**పీఎం-కుసుమ్ సౌర పంపుల పథకం:**\n- **సబ్సిడీ:** 60% ప్రభుత్వ సబ్సిడీ (30% కేంద్రం + 30% రాష్ట్రం). రైతు 10% మాత్రమే చెల్లించాలి; మిగిలిన 30% బ్యాంకు రుణం.\n- **అర్హత:** ప్యాక్స్ సభ్యులైన రైతులు, రైతు ఉత్పత్తిదారుల సంఘాలు (FPOs).\n- **పత్రాలు:** పట్టాదారు పాస్ పుస్తకం, ప్యాక్స్ సభ్యత్వ ధృవీకరణ పత్రం, ఆధార్, బ్యాంక్ పాస్‌బుక్.\n- **పరిశీలన వ్యవధి:** 10 రోజులలో స్థల పరిశీలన మరియు అనుమతి.`,
        voiceText: "పీఎం కుసుమ్ పథకం కింద సోలార్ వ్యవసాయ పంపులపై అరవై శాతం సబ్సిడీ లభిస్తుంది. రైతు కేవలం పది శాతం మాత్రమే చెల్లించాలి. పది రోజుల్లో పరిశీలన పూర్తవుతుంది."
      };
    } else {
      return {
        text: `**PM-KUSUM Solar Agriculture Scheme:**\n- **Benefits:** 60% Direct capital subsidy (30% Central + 30% State). Farmer contributes 10%; remaining 30% is financed via cooperative bank loan.\n- **Eligibility:** Farmer members of PACS and Water User Associations.\n- **Required Documents:** Land RoR / Patta, PACS Membership Certificate, Aadhaar Card, Bank Passbook.\n- **Timeline:** Site verification within 10 days by State Renewable Energy Agency.`,
        voiceText: "Under PM KUSUM, farmers receive 60 percent direct subsidy for solar agricultural pumps with only 10 percent farmer contribution."
      };
    }
  }

  // AIF / Cold Storage / Infrastructure Match
  if (lower.includes("aif") || lower.includes("infrastructure") || lower.includes("storage") || lower.includes("வட்டி") || lower.includes("पायाभूत") || lower.includes("వడ్డీ") || lower.includes("ब्याज") || lower.includes("கிடங்கு") || lower.includes("शीतगृह") || lower.includes("గోదాము")) {
    if (lang === "ta") {
      return {
        text: `**வேளாண் உட்கட்டமைப்பு நிதி (AIF) - 3% வட்டி மானிய திட்டம்:**\n- **பயன்கள்:** குளிர்பதன கிடங்கு, தானிய சேமிப்பு கிடங்கு மற்றும் வேளாண் இயந்திர மையம் அமைக்க ₹2 கோடி வரை 3% ஆண்டு வட்டி மானிய கடன்.\n- **தகுதி:** தொடக்க கூட்டுறவு கடன் சங்கங்கள் (PACS) மற்றும் சந்தைப்படுத்தல் சங்கங்கள்.\n- **ஆவணங்கள்:** உள்கட்டமைப்பு திட்ட அறிக்கை (DPR), 10 ஆண்டு நில குத்தகை அல்லது உரிமை பத்திரம், சங்க தீர்மானம்.\n- **சரிபார்ப்பு காலம்:** தேசிய AIF போர்ட்டலில் 14 வேலை நாட்களில் அனுமதி.`,
        voiceText: "வேளாண் உட்கட்டமைப்பு நிதியில் குளிர்பதன கிடங்கு மற்றும் தானிய சேமிப்பு கிடங்கு அமைக்க இரண்டு கோடி ரூபாய் வரை மூன்று சதவீத வட்டி மானியம் வழங்கப்படுகிறது."
      };
    } else if (lang === "mr") {
      return {
        text: `**कृषी पायाभूत सुविधा निधी (AIF) - ३% व्याज सवलत योजना:**\n- **लाभ:** शीतगृह (Cold Storage), धान्य गोदाम आणि कस्टम हायरिंग केंद्र उभारणीसाठी ₹२ कोटी पर्यंतच्या कर्जावर ३% वार्षिक व्याज सवलत.\n- **पात्रता:** प्राथमिक कृषी पतसंस्था (PACS) व शेतमाल विपणन संस्था.\n- **कागदपत्रे:** सविस्तर प्रकल्प अहवाल (DPR), किमान १० वर्षांचा जागा करार/मालकी, संचालक मंडळ ठराव.\n- **पडताळणी वेळ:** राष्ट्रीय एआयएफ पोर्टलवर १४ दिवसांत मंजुरी.`,
        voiceText: "कृषी पायाभूत सुविधा निधीअंतर्गत शीतगृह आणि गोदामांसाठी दोन कोटी रुपयांपर्यंत वार्षिक तीन टक्के व्याज सवलत मिळते."
      };
    } else if (lang === "te") {
      return {
        text: `**వ్యవసాయ మౌలిక సదుపాయాల నిధి (AIF) - 3% వడ్డీ రాయితీ:**\n- **ప్రయోజనం:** కోల్డ్ స్టోరేజ్, ధాన్యం గిడ్డంగులు, కస్టమ్ హైరింగ్ కేంద్రాల నిర్మాణం కోసం ₹2 కోట్ల వరకు తీసుకునే రుణాలపై వార్షిక 3% వడ్డీ రాయితీ.\n- **అర్హత:** వ్యాపార ప్రణాళిక (DPR) సమర్పించే క్రియాశీల ప్యాక్స్ సంఘాలు.\n- **పత్రాలు:** ప్రాజెక్ట్ రిపోర్ట్ (DPR), 10 ఏళ్ల లీజు లేదా భూమి పత్రం, సొసైటీ పాలకవర్గ తీర్మానం.\n- **పరిశీలన వ్యవధి:** నేషనల్ ఏఐఎఫ్ పోర్టల్ ద్వారా 14 రోజులలో ప్రాథమిక అనుమతి.`,
        voiceText: "వ్యవసాయ మౌలిక నిధి కింద కోల్డ్ స్టోరేజ్ మరియు గోదాముల నిర్మాణం కోసం రెండు కోట్ల రుణాలపై మూడు శాతం వడ్డీ రాయితీ లభిస్తుంది."
      };
    } else {
      return {
        text: `**Agriculture Infrastructure Fund (AIF) - 3% Interest Subvention:**\n- **Benefits:** 3% annual interest subvention on post-harvest infrastructure loans up to ₹2.0 Crore + Credit guarantee under CGTMSE.\n- **Eligibility:** PACS and primary cooperative marketing societies.\n- **Required Documents:** Detailed Project Report (DPR), Land Lease/Ownership deed (10 years min), Managing Committee Resolution.\n- **Timeline:** In-principle sanction within 14 working days on National AIF Portal.`,
        voiceText: "Under Agriculture Infrastructure Fund, PACS receive 3 percent annual interest subvention on infrastructure loans up to 2 Crore Rupees."
      };
    }
  }

  // PACS Computerization / ERP Match
  if (lower.includes("computer") || lower.includes("erp") || lower.includes("கணினி") || lower.includes("संगणक") || lower.includes("కంప్యూటర్") || lower.includes("डिजिटल")) {
    if (lang === "ta") {
      return {
        text: `**தொடக்க கூட்டுறவு கடன் சங்கங்களின் (PACS) கணினிமயமாக்கல் திட்டம்:**\n- **மானியம்:** 100% அரசு மானியத்தில் கணினி, தேசிய ஈஆர்பி மென்பொருள் மற்றும் இணைய வசதி (ஒரு சங்கத்திற்கு ₹4 லட்சம் வரை).\n- **தகுதி:** மாநில கூட்டுறவு சட்டத்தின் கீழ் பதிவு செய்யப்பட்டு மத்திய கூட்டுறவு வங்கியுடன் இணைக்கப்பட்ட அனைத்து சங்கங்கள்.\n- **ஆவணங்கள்:** சங்க பதிவு சான்றிதழ், கடந்த 3 ஆண்டுகளின் தணிக்கை அறிக்கை, வங்கி தீர்மானம்.\n- **சரிபார்ப்பு காலம்:** இணையவழி விண்ணப்பத்திற்கு 7 வேலை நாட்களில் அனுமதி.`,
        voiceText: "தொடக்க கூட்டுறவு சங்கங்களுக்கு நூறு சதவீதம் இலவச கணினி மற்றும் தேசிய ஈஆர்பி மென்பொருள் வழங்கப்படுகிறது. ஏழு வேலை நாட்களில் சரிபார்ப்பு முடிவடையும்."
      };
    } else if (lang === "mr") {
      return {
        text: `**पॅक्स संगणकीकरण योजना (PACS Computerization):**\n- **अनुदान:** १००% सरकारी अनुदान - मोफत संगणक हार्डवेअर, राष्ट्रीय ईआरपी सॉफ्टवेअर आणि क्लाउड कनेक्टिव्हिटी (प्रति संस्था ₹४ लाख पर्यंत).\n- **पात्रता:** जिल्हा मध्यवर्ती सहकारी बँकेशी (DCCB) संलग्न सर्व कार्यरत पॅक्स.\n- **कागदपत्रे:** नोंदणी प्रमाणपत्र, गेल्या ३ वर्षांचे ऑडिट रिपोर्ट, डीसीसीबी ठराव.\n- **पडताळणी वेळ:** ऑनलाइन अर्जानंतर ७ कामकाजाच्या दिवसांत राज्य निबंधक कार्यालयामार्फत मंजुरी.`,
        voiceText: "पॅक्स संगणकीकरण योजनेअंतर्गत प्रत्येक संस्थेला संगणक आणि ईआरपी सॉफ्टवेअरसाठी शंभर टक्के सरकारी अनुदान मिळते. सात दिवसांत पडताळणी पूर्ण होते."
      };
    } else if (lang === "te") {
      return {
        text: `**ప్యాక్స్ కంప్యూటరీకరణ పథకం:**\n- **ప్రయోజనం:** 100% ఉచిత కంప్యూటర్ హార్డ్‌వేర్, నేషనల్ ఈఆర్పీ సాఫ్ట్‌వేర్, మరియు క్లౌడ్ అనుసంధానం (ప్రతి ప్యాక్స్ కి ₹4 లక్షల వరకు).\n- **అర్హత:** जिल्हा केंद्र సహకార బ్యాంకులతో అనుసంధానమైన అన్ని ప్యాక్స్ సంఘాలు.\n- **పత్రాలు:** రిజిస్ట్రేషన్ సర్టిఫికేట్, గత 3 ఏళ్ల ఆడిట్ నివేదిక, డీసీసీబీ తీర్మానం.\n- **పరిశీలన వ్యవధి:** ఆన్‌లైన్ ద్వారా 7 పని దినాలలో ధృవీకరణ.`,
        voiceText: "ప్యాక్స్ కంప్యూటరీకరణ పథకం కింద నూరు శాతం ఉచిత హార్డ్‌వేర్ మరియు ఈఆర్పీ సాఫ్ట్‌వేర్ అందించబడుతుంది. ఏడు రోజుల్లో ధృవీకరణ పూర్తవుతుంది."
      };
    } else {
      return {
        text: `**PACS Computerization Scheme:**\n- **Benefits:** 100% Financial grant (up to ₹4 Lakhs per PACS) for hardware, ERP software, and cloud connection.\n- **Eligibility:** All functional PACS affiliated with District Central Cooperative Banks (DCCBs).\n- **Required Documents:** PACS Registration Certificate, 3 Years Audit Reports, DCCB Board Resolution.\n- **Timeline:** Verification within 7 working days via State Cooperative Registrar Portal.`,
        voiceText: "Under the PACS Computerization scheme, societies receive a 100 percent financial grant for hardware and ERP software."
      };
    }
  }

  // General / Fallback Response
  return {
    text: `Here is the official guidance for your query:\n\n1. **Available Demo Schemes:** 1) PACS Computerization (100% grant), 2) AIF (3% Interest Subvention), 3) PM-KUSUM (60% Solar Pump Subsidy).\n2. **Languages Supported:** Tamil (தமிழ்), Marathi (मराठी), Telugu (తెలుగు), Hindi (हिन्दी), and English.\n3. **Notice:** This is demo assistance grounded in official Ministry records.`,
    voiceText: "You can ask about PACS Computerization, AIF Interest Subvention, or PM KUSUM Solar Pump schemes in Tamil, Marathi, Telugu, Hindi, or English."
  };
}

// Add message to chat display
function addChatMessage(sender, text, voiceText = "") {
  const msgObj = {
    sender,
    text,
    voiceText: voiceText || text,
    timestamp: new Date()
  };
  state.chatMessages.push(msgObj);
  renderChatMessages();
}

// Render chat messages
function renderChatMessages() {
  const chatContainer = document.getElementById("chat-messages-display");
  if (!chatContainer) return;

  chatContainer.innerHTML = "";

  state.chatMessages.forEach((msg, idx) => {
    const isBot = msg.sender === "bot";
    const div = document.createElement("div");
    div.className = `chat-message ${isBot ? 'bot' : 'user'}`;

    const senderLabel = isBot ? "🌾 SahkarSaathi Assistant" : `👤 ${state.currentUser.name} (${state.currentUser.role})`;
    const formattedContent = parseMarkdown(msg.text);

    let audioControlsHtml = "";
    if (isBot && msg.voiceText) {
      audioControlsHtml = `
        <div class="message-audio-controls">
          <button class="audio-btn" data-voice-index="${idx}" title="Listen to Voice Output">
            🔊 Play Voice (${state.currentLanguage.toUpperCase()})
          </button>
          <button class="audio-btn" data-stop-voice="true" title="Stop Audio">
            ■ Stop
          </button>
        </div>
      `;
    }

    div.innerHTML = `
      <div class="message-sender">${escapeHtml(senderLabel)} • ${msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      <div class="message-bubble">
        ${formattedContent}
        ${audioControlsHtml}
      </div>
    `;

    // Attach audio events
    if (isBot) {
      const playBtn = div.querySelector("[data-voice-index]");
      const stopBtn = div.querySelector("[data-stop-voice]");

      if (playBtn) {
        playBtn.addEventListener("click", () => {
          playVoiceOutput(msg.voiceText, state.currentLanguage);
          state.logTelemetry("VOICE_PLAYED", { lang: state.currentLanguage });
        });
      }

      if (stopBtn) {
        stopBtn.addEventListener("click", () => {
          stopVoiceOutput();
        });
      }
    }

    chatContainer.appendChild(div);
  });

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Simple safe markdown parser with strict escaping
function parseMarkdown(text) {
  if (!text) return "";
  let out = escapeHtml(text);
  out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  const lines = out.split("\n");
  let inList = false;
  let result = [];

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") || trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ")) {
      if (!inList) {
        result.push("<ul>");
        inList = true;
      }
      const itemContent = trimmed.replace(/^(-\s+|\d+\.\s+)/, '');
      result.push(`<li>${itemContent}</li>`);
    } else {
      if (inList) {
        result.push("</ul>");
        inList = false;
      }
      if (trimmed.length > 0) {
        result.push(`<p style="margin-bottom: 6px;">${line}</p>`);
      }
    }
  });

  if (inList) {
    result.push("</ul>");
  }

  return result.join("");
}

// Regional Web Speech Synthesis TTS Engine
function playVoiceOutput(text, langCode) {
  if (!('speechSynthesis' in window)) {
    showStatusNotice((I18N[langCode] || I18N.en).audioUnavailable);
    return;
  }

  window.speechSynthesis.cancel();

  const statusIndicator = document.getElementById("voice-playing-indicator");
  if (statusIndicator) {
    statusIndicator.classList.add("playing");
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  const langMap = {
    ta: "ta-IN",
    mr: "mr-IN",
    te: "te-IN",
    hi: "hi-IN",
    en: "en-IN"
  };

  const targetBcp47 = langMap[langCode] || "en-IN";
  utterance.lang = targetBcp47;

  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find(v => v.lang === targetBcp47 || v.lang.startsWith(targetBcp47.split("-")[0]));
  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  utterance.onend = () => {
    if (statusIndicator) statusIndicator.classList.remove("playing");
  };

  utterance.onerror = () => {
    if (statusIndicator) statusIndicator.classList.remove("playing");
  };

  window.speechSynthesis.speak(utterance);
}

function stopVoiceOutput() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const statusIndicator = document.getElementById("voice-playing-indicator");
  if (statusIndicator) statusIndicator.classList.remove("playing");
}

// USER LOGIN SYSTEM & AUTH MODAL
function initLoginSystem() {
  const openLoginBtn = document.getElementById("btn-open-login");
  if (openLoginBtn) {
    openLoginBtn.addEventListener("click", () => {
      openLoginModal();
    });
  }
}

window.openLoginModal = function() {
  const modal = document.getElementById("login-modal");
  if (modal) {
    fillLoginFormInputs(state.currentUser);
    modal.classList.remove("hidden");
  }
};

window.closeLoginModal = function() {
  const modal = document.getElementById("login-modal");
  if (modal) modal.classList.add("hidden");
};

window.fillLoginForm = function(personaKey) {
  const p = DEMO_PERSONAS[personaKey];
  if (!p) return;
  fillLoginFormInputs(p);
};

function fillLoginFormInputs(data) {
  const uField = document.getElementById("login-username");
  const dField = document.getElementById("login-designation");
  const pField = document.getElementById("login-pacs-id");
  const aField = document.getElementById("login-aadhaar");
  const mField = document.getElementById("login-mobile");

  if (uField) uField.value = data.name || "";
  if (dField) dField.value = data.role || "Farmer Member";
  if (pField) pField.value = data.pacsId || "TN-SLM-PACS-402";
  if (aField) aField.value = data.aadhaar || "5834-8921-9120";
  if (mField) mField.value = data.phone || "9840123456";
}

window.handleUserLoginSubmit = function() {
  const u = document.getElementById("login-username").value.trim();
  const d = document.getElementById("login-designation").value;
  const pacs = document.getElementById("login-pacs-id").value.trim();
  const a = document.getElementById("login-aadhaar").value.trim();
  const m = document.getElementById("login-mobile").value.trim();

  state.currentUser = {
    ...state.currentUser,
    name: u || "User",
    role: d,
    pacsId: pacs || "PACS-REG-100",
    aadhaar: a || "5834-8921-9120",
    phone: m || "9840123456"
  };

  updateUserUI();
  closeLoginModal();
  showStatusNotice(`Logged in as: ${state.currentUser.name} (${state.currentUser.role})`);
  state.logTelemetry("USER_LOGGED_IN", { user: state.currentUser.name, role: state.currentUser.role });
};

// PACS HARDWARE VERIFICATION CHECK ASSISTANT
window.openVerificationAssistant = function() {
  const modal = document.getElementById("verification-modal");
  if (!modal) return;

  // Reset verification state to Step 1
  state.verifState.activeStep = 1;
  state.verifState.qrScanned = false;
  state.verifState.otpVerified = false;
  state.verifState.otpGenerated = String(Math.floor(100000 + Math.random() * 900000));
  state.verifState.verificationRefCode = "SAHKAR-VERIF-" + Math.floor(1000 + Math.random() * 9000);

  const otpCodeDisplay = document.getElementById("simulated-otp-code");
  if (otpCodeDisplay) otpCodeDisplay.textContent = state.verifState.otpGenerated;

  const otpInput = document.getElementById("otp-input-field");
  if (otpInput) otpInput.value = "";
  const otpRes = document.getElementById("otp-verif-result");
  if (otpRes) otpRes.innerHTML = "";

  const qrStatus = document.getElementById("verif-qr-status");
  if (qrStatus) {
    qrStatus.textContent = "Pending QR Scan";
    qrStatus.className = "status-pill status-pill-pending";
  }

  const btnProceedOtp = document.getElementById("btn-proceed-otp");
  if (btnProceedOtp) btnProceedOtp.disabled = true;

  const btnProceedDocs = document.getElementById("btn-proceed-docs");
  if (btnProceedDocs) btnProceedDocs.disabled = true;

  const btnProceedPrint = document.getElementById("btn-proceed-print");
  if (btnProceedPrint) btnProceedPrint.disabled = true;

  updateUserUI();
  goBackToStep(1);
  updateDocChecklistForScheme();

  modal.classList.remove("hidden");
  state.logTelemetry("VERIFICATION_TERMINAL_OPENED");
};

window.closeVerificationModal = function() {
  const modal = document.getElementById("verification-modal");
  if (!modal) return;
  modal.classList.add("hidden");
};

// Step Navigation
window.goBackToStep = function(stepNum) {
  setVerifStep(stepNum);
};

function setVerifStep(stepNum) {
  state.verifState.activeStep = stepNum;

  // Update tabs
  for (let i = 1; i <= 4; i++) {
    const tab = document.getElementById(`step-tab-${i}`);
    const content = document.getElementById(`verif-step-${i}`);

    if (tab) {
      tab.classList.remove("active", "completed");
      if (i === stepNum) tab.classList.add("active");
      else if (i < stepNum) tab.classList.add("completed");
    }

    if (content) {
      if (i === stepNum) content.classList.remove("hidden");
      else content.classList.add("hidden");
    }
  }
}

// Step 1: QR Scan Trigger
window.triggerQrScan = function() {
  const laser = document.getElementById("qr-laser");
  const qrStatus = document.getElementById("verif-qr-status");
  const btnProceed = document.getElementById("btn-proceed-otp");
  const scanBtn = document.getElementById("btn-simulate-qr-scan");

  if (laser) laser.classList.add("scanning");
  if (scanBtn) scanBtn.disabled = true;

  setTimeout(() => {
    if (laser) laser.classList.remove("scanning");
    if (scanBtn) scanBtn.disabled = false;

    state.verifState.qrScanned = true;
    if (qrStatus) {
      qrStatus.textContent = "Verified via UIDAI / PACS QR ✓";
      qrStatus.className = "status-pill status-pill-success";
    }
    if (btnProceed) {
      btnProceed.disabled = false;
    }
    state.logTelemetry("QR_SCAN_COMPLETED");
  }, 1000);
};

window.proceedToOtpStep = function() {
  if (!state.verifState.qrScanned) return;
  setVerifStep(2);
};

// Step 2: OTP Verification
window.autofillOtp = function() {
  const otpInput = document.getElementById("otp-input-field");
  if (otpInput) {
    otpInput.value = state.verifState.otpGenerated;
    verifyOtpCode();
  }
};

window.verifyOtpCode = function() {
  const otpInput = document.getElementById("otp-input-field");
  const resDiv = document.getElementById("otp-verif-result");
  const btnProceedDocs = document.getElementById("btn-proceed-docs");

  if (!otpInput || !resDiv) return;

  const entered = otpInput.value.trim();
  if (entered === state.verifState.otpGenerated) {
    state.verifState.otpVerified = true;
    resDiv.innerHTML = `<span style="color: var(--color-forest); font-weight: 800;">✓ OTP Authenticated Successfully! Phone linked to PACS record.</span>`;
    if (btnProceedDocs) btnProceedDocs.disabled = false;
    state.logTelemetry("OTP_VERIFIED_SUCCESS");
  } else {
    resDiv.innerHTML = `<span style="color: var(--gov-red); font-weight: 800;">✕ Invalid OTP. Please check the SMS alert or click 'Autofill OTP'.</span>`;
    state.logTelemetry("OTP_VERIFIED_FAILURE");
  }
};

window.proceedToDocsStep = function() {
  if (!state.verifState.otpVerified) return;
  setVerifStep(3);
  updateDocChecklistForScheme();
};

// Step 3: Document Checklist & Eligibility Engine
window.updateDocChecklistForScheme = function() {
  const select = document.getElementById("eval-target-scheme");
  const container = document.getElementById("doc-checklist-container");
  const decisionOutput = document.getElementById("eval-decision-output");

  if (!select || !container) return;

  if (decisionOutput) {
    decisionOutput.classList.add("hidden");
  }

  const schemeId = select.value;
  state.verifState.selectedSchemeId = schemeId;

  const scheme = OFFICIAL_SCHEMES.find(s => s.id === schemeId) || OFFICIAL_SCHEMES[0];
  container.innerHTML = "";

  // Pre-check standard submitted documents for the active demo persona
  const defaults = state.currentUser.docsDefault || [];

  scheme.documents.forEach((doc, idx) => {
    const isChecked = defaults.includes(doc) || idx < 3;
    const div = document.createElement("label");
    div.className = "doc-check-item";
    div.innerHTML = `
      <input type="checkbox" value="${escapeHtml(doc)}" ${isChecked ? "checked" : ""}>
      <span>${escapeHtml(doc)}</span>
    `;
    container.appendChild(div);
  });
};

window.runEligibilityEvaluation = function() {
  const select = document.getElementById("eval-target-scheme");
  const container = document.getElementById("doc-checklist-container");
  const decisionCard = document.getElementById("eval-decision-output");
  const btnProceedPrint = document.getElementById("btn-proceed-print");

  if (!select || !container || !decisionCard) return;

  const schemeId = select.value;
  const scheme = OFFICIAL_SCHEMES.find(s => s.id === schemeId);
  if (!scheme) return;

  const checkboxes = container.querySelectorAll("input[type='checkbox']");
  const submittedDocs = [];
  const missingDocs = [];

  checkboxes.forEach(cb => {
    if (cb.checked) {
      submittedDocs.push(cb.value);
    } else {
      missingDocs.push(cb.value);
    }
  });

  state.verifState.checkedDocs = submittedDocs;
  state.verifState.missingDocs = missingDocs;
  const isEligible = missingDocs.length === 0;
  state.verifState.isEligible = isEligible;

  decisionCard.classList.remove("hidden", "eval-decision-yes", "eval-decision-no");

  if (isEligible) {
    decisionCard.classList.add("eval-decision-yes");
    decisionCard.innerHTML = `
      <div style="font-size: 15px; font-weight: 800; color: var(--color-forest); margin-bottom: 4px;">
        ✓ ELIGIBILITY DECISION: YES (PRE-QUALIFIED &amp; COMPLIANT)
      </div>
      <p style="font-size: 13px; color: var(--text-main);">
        Client <strong>${escapeHtml(state.currentUser.name)}</strong> meets all statutory criteria for <strong>${escapeHtml(scheme.code)}</strong>. All <strong>${submittedDocs.length}</strong> required documents are verified and archived.
      </p>
      <div style="margin-top: 8px; font-size: 12px; color: var(--color-forest-dark);">
        ⏱️ Statutory Fast Approval Timeline: <strong>${escapeHtml(scheme.statutoryTimeline)}</strong>
      </div>
    `;
  } else {
    decisionCard.classList.add("eval-decision-no");
    const missingHtml = missingDocs.map(d => `<li>${escapeHtml(d)}</li>`).join("");
    decisionCard.innerHTML = `
      <div style="font-size: 15px; font-weight: 800; color: var(--gov-red); margin-bottom: 4px;">
        ✕ ELIGIBILITY DECISION: NO (ACTION REQUIRED / PENDING DOCUMENTS)
      </div>
      <p style="font-size: 13px; color: var(--text-main);">
        Client cannot be immediately approved for <strong>${escapeHtml(scheme.code)}</strong> due to <strong>${missingDocs.length} missing document(s)</strong>:
      </p>
      <ul style="margin-left: 20px; font-size: 12px; color: var(--gov-red); margin-top: 4px; font-weight: 700;">
        ${missingHtml}
      </ul>
      <div style="margin-top: 8px; font-size: 12px; color: var(--text-muted);">
        Notice: Please advise client to obtain missing document(s) from PACS registry before resubmission.
      </div>
    `;
  }

  if (btnProceedPrint) {
    btnProceedPrint.disabled = false;
  }

  state.logTelemetry("ELIGIBILITY_EVALUATION_RUN", { scheme: scheme.code, isEligible, missingCount: missingDocs.length });
};

window.proceedToPrintStep = function() {
  setVerifStep(4);
  renderPrintableSlip();
};

// Step 4: Render Printable Output
function renderPrintableSlip() {
  const scheme = OFFICIAL_SCHEMES.find(s => s.id === state.verifState.selectedSchemeId) || OFFICIAL_SCHEMES[0];
  const user = state.currentUser;
  const isEligible = state.verifState.isEligible;
  const missing = state.verifState.missingDocs;
  const submitted = state.verifState.checkedDocs;

  // Slip Fields
  document.getElementById("slip-client-name").textContent = user.name;
  document.getElementById("slip-client-desig").textContent = user.role;
  document.getElementById("slip-client-aadhaar").textContent = maskAadhaar(user.aadhaar);
  document.getElementById("slip-client-phone").textContent = `+91 ${formatPhone(user.phone)} (OTP Verified)`;
  document.getElementById("slip-pacs-code").textContent = user.pacsId;
  document.getElementById("slip-timestamp").textContent = new Date().toLocaleString();
  document.getElementById("slip-ref-code").textContent = state.verifState.verificationRefCode;

  document.getElementById("slip-scheme-code").textContent = scheme.code;
  document.getElementById("slip-scheme-title").textContent = scheme.name.en;
  document.getElementById("slip-scheme-subsidy").textContent = `Entitlement: ${scheme.benefits}`;

  // Decision Box
  const decContainer = document.getElementById("slip-decision-container");
  if (decContainer) {
    if (isEligible) {
      decContainer.innerHTML = `
        <div class="decision-badge-yes">
          ✓ STATUTORY ELIGIBILITY VERIFIED: YES (QUALIFIED)
        </div>
      `;
    } else {
      decContainer.innerHTML = `
        <div class="decision-badge-no">
          ✕ STATUTORY ELIGIBILITY STATUS: NO (PENDING MISSING DOCUMENTS)
        </div>
      `;
    }
  }

  // Docs breakdown
  const docsContainer = document.getElementById("slip-docs-breakdown");
  if (docsContainer) {
    const subList = submitted.map(d => `<li style="color: var(--color-forest); font-weight: 600;">✓ Verified: ${escapeHtml(d)}</li>`).join("");
    const missList = missing.map(d => `<li style="color: var(--gov-red); font-weight: 800;">✕ Missing Required: ${escapeHtml(d)}</li>`).join("");

    docsContainer.innerHTML = `
      <div style="font-weight: 800; margin-bottom: 4px; font-size: 13px; color: var(--color-forest-dark);">Document Verification Audit:</div>
      <ul style="margin-left: 20px;">
        ${subList}
        ${missList}
      </ul>
      <div style="margin-top: 8px; font-size: 12px; color: var(--color-forest-dark); background: #faf8f2; padding: 6px 12px; border: 1px solid var(--border-card); border-radius: var(--radius-sm);">
        Statutory Guideline: ${escapeHtml(scheme.statutoryTimeline)}
      </div>
    `;
  }

  state.logTelemetry("PRINTABLE_SLIP_RENDERED", { refCode: state.verifState.verificationRefCode });
}

// Cookie Consent Banner
function initCookieConsent() {
  const cookieBanner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("btn-cookie-accept");
  const declineBtn = document.getElementById("btn-cookie-decline");

  const consent = localStorage.getItem("sahkarsaathi_cookie_consent");
  if (!consent && cookieBanner) {
    cookieBanner.classList.remove("hidden");
  }

  if (acceptBtn && cookieBanner) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("sahkarsaathi_cookie_consent", "accepted");
      cookieBanner.classList.add("hidden");
      state.logTelemetry("COOKIE_ACCEPTED");
    });
  }

  if (declineBtn && cookieBanner) {
    declineBtn.addEventListener("click", () => {
      localStorage.setItem("sahkarsaathi_cookie_consent", "declined");
      cookieBanner.classList.add("hidden");
      state.logTelemetry("COOKIE_DECLINED");
    });
  }
}

// Single Clear CTA: Verify PACS Scheme Eligibility Wizard Modal
window.openEligibilityWizard = function() {
  openVerificationAssistant();
};

// 404 Route Simulator
window.toggleCustom404 = function(show404) {
  const mainApp = document.getElementById("main-application-view");
  const notFoundView = document.getElementById("custom-404-view");

  if (show404) {
    mainApp.classList.add("hidden");
    notFoundView.classList.remove("hidden");
    state.logTelemetry("404_PAGE_TRIGGERED");
  } else {
    notFoundView.classList.add("hidden");
    mainApp.classList.remove("hidden");
    state.logTelemetry("404_PAGE_DISMISSED");
  }
};

// Helper: Escape HTML to sanitize against Cross-Site Scripting (XSS)
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
