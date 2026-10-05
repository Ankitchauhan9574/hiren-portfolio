/*
  Hiren Kanzariya — Senior Financial Consultant & Banking Specialist
  Multi-Language Engine (English, ગુજરાતી, हिन्दी) + Two-Way Reverse EMI Calculator
*/

// ══════════════════════════════════════════════════
// ── MULTI-LANGUAGE TRANSLATION DICTIONARY ──
// ══════════════════════════════════════════════════
const translations = {
  en: {
    brandBadge: "FINANCIAL CONSULTANT",
    navAbout: "About",
    navLoans: "Loan Solutions",
    navWhyUs: "Why Us",
    navEmi: "EMI Calculator",
    navProcess: "Process",
    navStories: "Success Stories",
    navDocs: "Documents",
    navFaq: "FAQ",
    navContact: "Contact",
    navApply: "Apply for Loan",

    langChooseTitle: "Language / ભાષા / भाषा:",
    mobHome: "Home",
    mobAbout: "About Hiren",
    mobLoans: "All Loan Solutions",
    mobWhyUs: "Why Us vs Direct Banks",
    mobEmi: "Two-Way EMI Calculator",
    mobProcess: "Approval Journey",
    mobStories: "Client Testimonials",
    mobDocs: "Document Checklist",
    mobFaq: "FAQ",
    mobContact: "Book Free Consultation",

    heroBadge: "★ 15+ Years Ex-Banking Mastery | 40+ Partner Banks & NBFCs",
    heroTitle: "Guaranteed Approvals & Lowest ROI<br><em>Comprehensive Loan & Banking Solutions</em>",
    heroSub: "Meet <strong>Hiren Kanzariya</strong> — Senior Financial Consultant & Banking Specialist. From Home Loans & MSME Working Capital to High-Value LAP, Project Finance, and Rate Reduction Balance Transfers, get your loan sanctioned at the absolute lowest market rates with lightning-fast processing.",
    heroBtnApply: "⚡ Apply for Loan Now",
    heroBtnEmi: "📊 Live EMI Calculator",
    heroBtnWa: "💬 Instant WhatsApp",
    
    ribbon1: "48-Hour Sanction Guarantee",
    ribbon2: "Zero Upfront Consultation Fee",
    ribbon3: "100% Confidential & Compliant",
    ribbon4: "Lowest Interest Rate Lock",

    metric1Label: "Loans Disbursed",
    metric2Label: "Approval Success Rate",
    metric3Label: "Happy Clients Funded",
    metric4Label: "Partner Banks & NBFCs",

    tickerLabel: "Associated with India's Premier Banking & NBFC Institutions",

    compTag: "The Smarter Choice",
    compTitle: "Why Apply with Us vs <strong>Direct Bank Branches?</strong>",
    compSub: "See how our ex-banking advisory saves you weeks of stress, prevents rejection marks on your credit report, and secures thousands in interest savings.",
    compBankBadge: "❌ Applying Directly to a Single Bank",
    compBankTitle: "Direct Bank Route",
    compBankDesc: "High risk of rejection, limited single-product bias, and lack of underwriting flexibility.",
    compHirenBadge: "✓ With Hiren Kanzariya (Banking Advisory)",
    compHirenTitle: "Strategic Banking Route",
    compHirenDesc: "Institutional underwriting mastery, 40+ lenders compared, and guaranteed lowest ROI.",

    loanSectionTag: "Complete Financial Portfolio",
    loanSectionTitle: "All Types of Loans — <strong>Tailored Solutions</strong>",
    loanSectionSub: "Whether you are buying your dream home, scaling a manufacturing business, or seeking high-ticket project finance, we match you with the ideal bank offering the lowest interest rate and maximum loan eligibility.",

    calcTag: "Two-Way Financial Calculator",
    calcTitle: "Smart <strong>EMI & Eligibility Calculator</strong>",
    calcSub: "Type exact amounts or use the sliders. Switch modes to calculate either your Monthly EMI or your Maximum Loan Eligibility from your target EMI!",
    calcBtnModeEmi: "📊 Calculate Monthly EMI",
    calcBtnModeLoan: "🔄 Reverse: Find Loan by Desired EMI",
    calcLblAmount: "Loan Amount Required",
    calcLblTargetEmi: "Target Monthly EMI (Your Budget)",
    calcLblRate: "Interest Rate (p.a.)",
    calcLblTenure: "Loan Tenure (Years)",
    calcBadgeEmi: "Estimated Monthly Installment",
    calcBadgeLoan: "Max Loan Sanction Eligibility",
    calcRowPrincipal: "Principal Loan Amount",
    calcRowInterest: "Total Interest Payable",
    calcRowTotal: "Total Payment (Principal + Interest)",
    calcApplyBtnText: "📲 Apply for this Loan via WhatsApp",

    processTag: "Hassle-Free Process",
    processTitle: "Your 4-Step Journey to <strong>Fast Disbursal</strong>",
    processSub: "We take care of the bank liaisoning and complex underwriting so you can focus on what matters.",

    testTag: "Client Testimonials",
    testTitle: "Trusted by <strong>4,200+ Borrowers & Businesses</strong>",

    docTag: "Transparent Preparation",
    docTitle: "Required Document <strong>Checklist</strong>",
    docSub: "Select your employment profile to see the essential documents required for fast sanctioning.",

    faqTag: "Frequently Asked Questions",
    faqTitle: "Everything You Need to <strong>Know About Loans</strong>",

    contactTag: "Direct Consultation",
    contactTitle: "Get in Touch with <strong>Hiren Kanzariya</strong>",
    contactSub: "Fill out the quick form below or connect directly on WhatsApp / Phone for immediate assistance.",
    contactH3: "Let’s Sanction Your Loan Today",
    contactDesc: "Get personalized advisory from an ex-banker with 15+ years of financial mastery. We find the lowest interest rate and highest sanction limit for you.",
    formBtn: "🚀 Submit & Connect on WhatsApp with Hiren Kanzariya",

    footerTag: "Trusted Financial Partnership",
    footerTitle: "Get Your Loan Approved at the <strong>Lowest Interest Rate</strong>",
    footerSub: "Doorstep assistance • 40+ Partner Banks • Transparent Execution"
  },

  gu: {
    brandBadge: "ફાઇનાન્સિયલ કન્સલ્ટન્ટ",
    navAbout: "પરિચય",
    navLoans: "લોન સેવાઓ",
    navWhyUs: "શા માટે અમે",
    navEmi: "EMI કેલ્ક્યુલેટર",
    navProcess: "પ્રક્રિયા",
    navStories: "સફળતાની વાતો",
    navDocs: "દસ્તાવેજો",
    navFaq: "પ્રશ્નોત્તરી",
    navContact: "સંપર્ક",
    navApply: "લોન માટે અરજી કરો",

    langChooseTitle: "ભાષા પસંદ કરો / Language:",
    mobHome: "મુખ્ય પેજ",
    mobAbout: "હિરેનભાઈ વિશે",
    mobLoans: "બધી લોન સેવાઓ",
    mobWhyUs: "ડાયરેક્ટ બેંક સામે અમારા ફાયદા",
    mobEmi: "ટુ-વે EMI કેલ્ક્યુલેટર",
    mobProcess: "લોન મંજૂરી પ્રક્રિયા",
    mobStories: "ગ્રાહકોના રિવ્યુ",
    mobDocs: "જરૂરી ડોક્યુમેન્ટ્સ",
    mobFaq: "પ્રશ્નોત્તરી (FAQ)",
    mobContact: "મફત સલાહ બુક કરો",

    heroBadge: "★ ૧૫+ વર્ષનો બેંકિંગ અનુભવ | ૪૦+ પાર્ટનર બેંકો અને NBFCs",
    heroTitle: "ગેરંટીડ લોન મંજૂરી અને સૌથી ઓછો વ્યાજ દર<br><em>તમામ પ્રકારની લોન અને બેંકિંગ સોલ્યુશન્સ</em>",
    heroSub: "મળો <strong>હિરેન કણઝારિયા</strong> ને — સિનિયર ફાઇનાન્સિયલ કન્સલ્ટન્ટ અને બેંકિંગ નિષ્ણાત. હોમ લોન, બિઝનેસ લોન, મોર્ગેજ લોન (LAP), પ્રોજેક્ટ ફાઇનાન્સ અને બેલેન્સ ટ્રાન્સફર મેળવો સૌથી ઓછા વ્યાજ દરે ઝડપી મંજૂરી સાથે.",
    heroBtnApply: "⚡ લોન માટે અત્યારે જ અરજી કરો",
    heroBtnEmi: "📊 લાઈવ EMI ગણો",
    heroBtnWa: "💬 વોટ્સએપ પર ચેટ કરો",
    
    ribbon1: "૪૮ કલાકમાં લોન મંજૂરી",
    ribbon2: "ઝીરો એડવાન્સ કન્સલ્ટેશન ફી",
    ribbon3: "૧૦૦% વિશ્વસનીય અને સુરક્ષિત",
    ribbon4: "સૌથી ઓછો વ્યાજ દર ગેરંટી",

    metric1Label: "કરોડોની લોન વિતરિત",
    metric2Label: "મંજૂરી સફળતા દર",
    metric3Label: "સંતુષ્ટ ગ્રાહકો",
    metric4Label: "પાર્ટનર બેંકો અને NBFCs",

    tickerLabel: "ભારતની અગ્રણી બેંકો અને NBFC સંસ્થાઓ સાથે જોડાયેલા",

    compTag: "સાચો અને સ્માર્ટ વિકલ્પ",
    compTitle: "ડાયરેક્ટ બેંક શાખા કરતાં <strong>અમારી સાથે શા માટે અરજી કરવી?</strong>",
    compSub: "જાણો કે કેવી રીતે અમારો બેંકિંગ અનુભવ તમને અઠવાડિયાની દોડધામથી બચાવે છે અને હજારો-લાખો રૂપિયાનું વ્યાજ બચાવે છે.",
    compBankBadge: "❌ ડાયરેક્ટ એક જ બેંકમાં જવું",
    compBankTitle: "ડાયરેક્ટ બેંક પદ્ધતિ",
    compBankDesc: "લોન રિજેક્ટ થવાનું ઊંચું જોખમ, મર્યાદિત નિયમો અને વાટાઘાટોનો અભાવ.",
    compHirenBadge: "✓ હિરેન કણઝારિયા સાથે (બેંકિંગ એડવાઈઝરી)",
    compHirenTitle: "પ્રોફેશનલ બેંકિંગ પદ્ધતિ",
    compHirenDesc: "૪૦+ બેંકોની સરખામણી, ઝીરો રિજેક્શન ફાઇલિંગ અને ગેરંટીડ સૌથી ઓછો વ્યાજ દર.",

    loanSectionTag: "સંપૂર્ણ ફાઇનાન્સિયલ પોર્ટફોલિયો",
    loanSectionTitle: "તમામ પ્રકારની લોન — <strong>શ્રેષ્ઠ સોલ્યુશન્સ</strong>",
    loanSectionSub: "નવું ઘર ખરીદવું હોય, ધંધાનો વિસ્તાર કરવો હોય કે મોટો પ્રોજેક્ટ શરૂ કરવો હોય, અમે તમને શ્રેષ્ઠ બેંક સાથે જોડીને સૌથી સસ્તો વ્યાજ દર અપાવીએ છીએ.",

    calcTag: "દ્વિ-માર્ગીય ફાઇનાન્સિયલ કેલ્ક્યુલેટર",
    calcTitle: "સ્માર્ટ <strong>EMI અને લોન એલિજિબિલિટી કેલ્ક્યુલેટર</strong>",
    calcSub: "રકમ ટાઈપ કરો અથવા સ્લાઈડર ફેરવો. તમે તમારી લોન રકમ પર EMI ગણી શકો છો અથવા તમારી બજેટ EMI પરથી કેટલી લોન મળશે તે પણ જાણી શકો છો!",
    calcBtnModeEmi: "📊 માસિક EMI ગણો",
    calcBtnModeLoan: "🔄 બજેટ EMI પરથી લોન રકમ શોધો",
    calcLblAmount: "જરૂરી લોન રકમ",
    calcLblTargetEmi: "તમારું માસિક EMI બજેટ",
    calcLblRate: "વાર્ષિક વ્યાજ દર (ROI)",
    calcLblTenure: "લોનનો સમયગાળો (વર્ષ)",
    calcBadgeEmi: "અંદાજિત માસિક હપ્તો (EMI)",
    calcBadgeLoan: "મળવાપાત્ર મહત્તમ લોન રકમ",
    calcRowPrincipal: "મુદ્દલ લોન રકમ",
    calcRowInterest: "કુલ ચૂકવવાપાત્ર વ્યાજ",
    calcRowTotal: "કુલ ચુકવણી (મુદ્દલ + વ્યાજ)",
    calcApplyBtnText: "📲 વોટ્સએપ પર લોન માટે અરજી કરો",

    processTag: "સરળ અને તણાવમુક્ત પ્રક્રિયા",
    processTitle: "ઝડપી લોન મંજૂરી માટેની <strong>૪ સરળ સ્ટેપ</strong>",
    processSub: "અમે કાગળિયા અને બેંકની પ્રક્રિયા સંભાળીએ છીએ જેથી તમારો સમય બચે.",

    testTag: "ગ્રાહકોના અનુભવો",
    testTitle: "<strong>૪,૨૦૦+ થી વધુ ગ્રાહકો</strong> નો અતૂટ વિશ્વાસ",

    docTag: "જરૂરી દસ્તાવેજોની યાદી",
    docTitle: "સરળ લોન મંજૂરી માટે <strong>ડોક્યુમેન્ટ ચેકલિસ્ટ</strong>",
    docSub: "ઝડપી મંજૂરી માટે તમારી પ્રોફાઇલ મુજબ જરૂરી કાગળો પસંદ કરો.",

    faqTag: "વારંવાર પૂછાતા પ્રશ્નો",
    faqTitle: "લોન સંબંધિત <strong>મહત્વના પ્રશ્નો અને જવાબો</strong>",

    contactTag: "સીધો સંપર્ક",
    contactTitle: "<strong>હિરેન કણઝારિયા</strong> સાથે સીધો સંપર્ક કરો",
    contactSub: "નીચે આપેલું ફોર્મ ભરો અથવા વોટ્સએપ / ફોન પર સીધો સંપર્ક કરો.",
    contactH3: "ચાલો આજે જ તમારી લોન મંજૂર કરાવીએ",
    contactDesc: "૧૫+ વર્ષનો અનુભવ ધરાવતા એક્સ-બેંકર પાસેથી નિઃશુલ્ક માર્ગદર્શન મેળવો અને સૌથી ઓછા વ્યાજ દરે લોન પાસ કરાવો.",
    formBtn: "🚀 ફોર્મ સબમિટ કરો અને હિરેન કણઝારિયા સાથે વોટ્સએપ પર જોડાઓ",

    footerTag: "વિશ્વસનીય બેંકિંગ પાર્ટનરશીપ",
    footerTitle: "સૌથી ઓછા વ્યાજ દરે <strong>તમારી લોન મંજૂર કરાવો</strong>",
    footerSub: "ઘેરબેઠા સેવા • ૪૦+ પાર્ટનર બેંકો • ૧૦૦% પારદર્શક કામગીરી"
  },

  hi: {
    brandBadge: "फाइनेंशियल कंसल्टेंट",
    navAbout: "परिचय",
    navLoans: "लोन सेवाएं",
    navWhyUs: "हम क्यों",
    navEmi: "EMI कैलकुलेटर",
    navProcess: "प्रक्रिया",
    navStories: "सफलता की कहानियां",
    navDocs: "दस्तावेज़",
    navFaq: "अक्सर पूछे जाने वाले सवाल",
    navContact: "संपर्क",
    navApply: "लोन अप्लाई करें",

    langChooseTitle: "भाषा चुनें / Language:",
    mobHome: "मुख्य पृष्ठ",
    mobAbout: "हिरेन जी के बारे में",
    mobLoans: "सभी लोन सेवाएं",
    mobWhyUs: "डायरेक्ट बैंक बनाम हम",
    mobEmi: "टू-वे EMI कैलकुलेटर",
    mobProcess: "स्वीकृति प्रक्रिया",
    mobStories: "संतुष्ट ग्राहक",
    mobDocs: "ज़रूरी दस्तावेज़",
    mobFaq: "अक्सर पूछे जाने वाले सवाल",
    mobContact: "निःशुल्क परामर्श बुक करें",

    heroBadge: "★ 15+ वर्षों का बैंकिंग अनुभव | 40+ पार्टनर बैंक और NBFCs",
    heroTitle: "गारंटीड लोन स्वीकृति और सबसे कम ब्याज दर<br><em>सभी प्रकार के लोन और बैंकिंग समाधान</em>",
    heroSub: "मिलिए <strong>हिरेन कणजारिया</strong> से — सीनियर फाइनेंशियल कंसल्टेंट और बैंकिंग विशेषज्ञ। होम लोन, बिजनेस लोन, प्रॉपर्टी पर लोन (LAP), प्रोजेक्ट फाइनेंस और बैलेंस ट्रांसफर पाएं सबसे कम ब्याज दर पर बिना किसी परेशानी के।",
    heroBtnApply: "⚡ लोन के लिए तुरंत अप्लाई करें",
    heroBtnEmi: "📊 लाइव EMI कैलकुलेट करें",
    heroBtnWa: "💬 व्हाट्सएप पर चैट करें",
    
    ribbon1: "48 घंटे में लोन स्वीकृति",
    ribbon2: "शून्य एडवांस कंसल्टेशन फीस",
    ribbon3: "100% गोपनीय और सुरक्षित",
    ribbon4: "सबसे कम ब्याज दर लॉक",

    metric1Label: "करोड़ों का लोन वितरित",
    metric2Label: "स्वीकृति सफलता दर",
    metric3Label: "संतुष्ट ग्राहक",
    metric4Label: "पार्टनर बैंक और NBFCs",

    tickerLabel: "भारत के प्रमुख बैंकों और वित्तीय संस्थानों के साथ सम्बद्ध",

    compTag: "स्मार्ट और सही विकल्प",
    compTitle: "डायरेक्ट बैंक शाखा के मुकाबले <strong>हमारे साथ क्यों अप्लाई करें?</strong>",
    compSub: "जानिए कैसे हमारा बैंकिंग अनुभव आपको हफ़्तों की परेशानी से बचाता है और लाखों का ब्याज कम करता है।",
    compBankBadge: "❌ डायरेक्ट बैंक में अकेले जाना",
    compBankTitle: "डायरेक्ट बैंक प्रक्रिया",
    compBankDesc: "लोन रिजेक्ट होने का ज्यादा खतरा, सीमित प्रोडक्ट्स और सख्त नियम।",
    compHirenBadge: "✓ हिरेन कणजारिया के साथ (बैंकिंग एडवाइजरी)",
    compHirenTitle: "रणनीतिक बैंकिंग प्रक्रिया",
    compHirenDesc: "40+ बैंकों की तुलना, ज़ीरो रिजेक्शन फाइलिंग और गारंटीड सबसे कम ब्याज दर।",

    loanSectionTag: "संपूर्ण फाइनेंशियल पोर्टफोलियो",
    loanSectionTitle: "सभी प्रकार के लोन — <strong>बेहतरीन समाधान</strong>",
    loanSectionSub: "चाहे नया घर खरीदना हो, बिजनेस बढ़ाना हो या बड़े प्रोजेक्ट की फंडिंग, हम आपको सही बैंक से सबसे कम ब्याज दर पर लोन दिलाते हैं।",

    calcTag: "टू-वे फाइनेंशियल कैलकुलेटर",
    calcTitle: "स्मार्ट <strong>EMI और लोन एलिजिबिलिटी कैलकुलेटर</strong>",
    calcSub: "अमाउंट टाइप करें या स्लाइडर घुमाएं। आप लोन अमाउंट से EMI भी निकाल सकते हैं और अपनी मनपसंद EMI से लोन अमाउंट भी जान सकते हैं!",
    calcBtnModeEmi: "📊 मासिक EMI निकालें",
    calcBtnModeLoan: "🔄 बजट EMI से लोन अमाउंट जानें",
    calcLblAmount: "आवश्यक लोन राशि",
    calcLblTargetEmi: "आपका मासिक EMI बजट",
    calcLblRate: "वार्षिक ब्याज दर (ROI)",
    calcLblTenure: "लोन अवधि (वर्ष)",
    calcBadgeEmi: "अनुमानित मासिक किस्त (EMI)",
    calcBadgeLoan: "मिलने योग्य अधिकतम लोन राशि",
    calcRowPrincipal: "मूल लोन राशि (Principal)",
    calcRowInterest: "कुल देय ब्याज (Interest)",
    calcRowTotal: "कुल भुगतान (मूल + ब्याज)",
    calcApplyBtnText: "📲 व्हाट्सएप पर इस लोन के लिए अप्लाई करें",

    processTag: "आसान और तनावमुक्त प्रक्रिया",
    processTitle: "त्वरित लोन स्वीकृति के <strong>4 आसान चरण</strong>",
    processSub: "हम बैंक की पूरी कागजी कार्रवाई संभालते हैं ताकि आपका कीमती समय बचे।",

    testTag: "ग्राहकों के अनुभव",
    testTitle: "<strong>4,200+ से अधिक ग्राहकों</strong> का अटूट विश्वास",

    docTag: "दस्तावेज़ सूची",
    docTitle: "आसान लोन स्वीकृति के लिए <strong>दस्तावेज़ चेकलिस्ट</strong>",
    docSub: "त्वरित प्रोसेसिंग के लिए अपनी प्रोफाइल के अनुसार आवश्यक दस्तावेज़ देखें।",

    faqTag: "अक्सर पूछे जाने वाले सवाल",
    faqTitle: "लोन से जुड़े <strong>महत्वपूर्ण सवाल और जवाब</strong>",

    contactTag: "सीधा संपर्क",
    contactTitle: "<strong>हिरेन कणजारिया</strong> से सीधा संपर्क करें",
    contactSub: "नीचे दिया गया फॉर्म भरें या व्हाट्सएप / फोन पर तुरंत बात करें।",
    contactH3: "आइए आज ही अपना लोन स्वीकृत कराएं",
    contactDesc: "15+ वर्षों के अनुभवी बैंकिंग विशेषज्ञ से निःशुल्क सलाह लें और सबसे कम ब्याज दर पर लोन पाएं।",
    formBtn: "🚀 फॉर्म सबमिट करें और हिरेन कणजारिया से व्हाट्सएप पर जुड़ें",

    footerTag: "विश्वसनीय बैंकिंग साझेदारी",
    footerTitle: "सबसे कम ब्याज दर पर <strong>अपना लोन स्वीकृत कराएं</strong>",
    footerSub: "डोरस्टेप सेवा • 40+ पार्टनर बैंक • 100% पारदर्शी कार्यप्रणाली"
  }
};

let currentLang = localStorage.getItem('hiren_site_lang') || 'en';
let currentChecklistProfile = 'salaried';

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('hiren_site_lang', lang);
  document.documentElement.lang = lang;

  // Update active buttons on all language switcher instances (top-nav and mobile-menu)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const t = translations[lang];

  // Update DOM elements by data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Re-render document checklist with localized content
  if (typeof renderChecklist === 'function') {
    renderChecklist(currentChecklistProfile);
  }

  // Re-run calculator labels & logic
  if (typeof calculateTwoWay === 'function') {
    calculateTwoWay();
  }
}

// Attach language click events (using event delegation for reliability)
document.addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn && btn.hasAttribute('data-lang')) {
    applyLanguage(btn.getAttribute('data-lang'));
  }
});

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ── Reveal on Scroll ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });
reveals.forEach(el => io.observe(el));

// ── Animated Counters ──
document.querySelectorAll('.counter').forEach(el => {
  new IntersectionObserver(([e], observer) => {
    if (!e.isIntersecting) return;
    const t = parseFloat(el.dataset.target);
    const d = parseInt(el.dataset.decimals) || 0;
    const dur = 2000;
    const s = performance.now();
    const ease = x => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2, 3)/2;
    
    function update(n) {
      const p = Math.min((n - s) / dur, 1);
      el.textContent = (t * ease(p)).toFixed(d);
      if (p < 1) requestAnimationFrame(update);
      else el.textContent = t.toFixed(d);
    }
    requestAnimationFrame(update);
    observer.unobserve(el);
  }, { threshold: 0.3 }).observe(el);
});

// ── Top Nav Scroll Effect ──
const topNav = document.getElementById('topNav');
if (topNav) {
  window.addEventListener('scroll', () => {
    topNav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ── Hero Grid Spotlight ──
const heroGrid = document.querySelector('.hero-grid');
const heroEl = document.getElementById('hero');
if (heroGrid && heroEl) {
  let gx = 0, gy = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => {
    const heroRect = heroEl.getBoundingClientRect();
    const gridRect = heroGrid.getBoundingClientRect();
    if (e.clientY >= heroRect.top && e.clientY <= heroRect.bottom) {
      tx = e.clientX - gridRect.left;
      ty = e.clientY - gridRect.top;
    } else {
      tx = gridRect.width / 2;
      ty = gridRect.height * 0.4;
    }
  });

  (function lerpGrid() {
    gx += (tx - gx) * 0.08;
    gy += (ty - gy) * 0.08;
    heroGrid.style.setProperty('--mx', gx + 'px');
    heroGrid.style.setProperty('--my', gy + 'px');
    requestAnimationFrame(lerpGrid);
  })();
}

// ── Active Nav & Side Track Indicators ──
const navAnchors = document.querySelectorAll('.nav-links a');
const sectionEls = document.querySelectorAll('section[id]');
const leftTrack = document.getElementById('leftTrack');
const rightTrack = document.getElementById('rightTrack');
const scrollPctEl = document.getElementById('scrollPct');
const leftDots = document.querySelectorAll('.side-panel.left .side-dot');
const rightDots = document.querySelectorAll('.side-panel.right .side-dot');

function updateNavAndPanels() {
  const y = window.scrollY + window.innerHeight * 0.35;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  const trackPct = Math.round(pct * 100);

  let id = '', activeIndex = 0;
  sectionEls.forEach((s, i) => {
    if (y >= s.offsetTop) {
      id = s.id;
      activeIndex = i;
    }
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
  });

  if (leftTrack) leftTrack.style.height = trackPct + '%';
  if (rightTrack) rightTrack.style.height = trackPct + '%';
  if (scrollPctEl) scrollPctEl.textContent = String(trackPct).padStart(2, '0');

  if (leftDots.length) {
    const lIdx = Math.min(activeIndex, leftDots.length - 1);
    leftDots.forEach((d, i) => d.classList.toggle('active', i === lIdx));
  }
  if (rightDots.length) {
    const rIdx = Math.min(activeIndex, rightDots.length - 1);
    rightDots.forEach((d, i) => d.classList.toggle('active', i === rIdx));
  }
}

window.addEventListener('scroll', updateNavAndPanels, { passive: true });
updateNavAndPanels();

// ── Mobile Menu ──
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('mobileMenu');
if (toggle && menu) {
  const menuLinks = menu.querySelectorAll('.mobile-menu-link');
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());
  menuLinks.forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeMenu(); });
}

// ── Loan Category Filters ──
const filterButtons = document.querySelectorAll('.loan-filter-btn');
const loanCards = document.querySelectorAll('.loan-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');
    loanCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category').includes(category)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => card.style.display = 'none', 250);
      }
    });
  });
});

// ── Currency Formatter ──
function formatExactINR(num) {
  return '₹ ' + Math.round(num).toLocaleString('en-IN');
}

// ══════════════════════════════════════════════════
// ── TWO-WAY DYNAMIC & REVERSE EMI CALCULATOR ──
// ══════════════════════════════════════════════════
let currentCalcMode = 'emi'; // 'emi' or 'loan'

const btnModeEmi = document.getElementById('btnModeEmi');
const btnModeLoan = document.getElementById('btnModeLoan');

const lblPrimaryInput = document.getElementById('lblPrimaryInput');
const inputLoanAmount = document.getElementById('inputLoanAmount');
const calcLoanAmount = document.getElementById('calcLoanAmount');
const limitMin = document.getElementById('limitMin');
const limitMax = document.getElementById('limitMax');

const inputInterestRate = document.getElementById('inputInterestRate');
const calcInterestRate = document.getElementById('calcInterestRate');

const inputTenure = document.getElementById('inputTenure');
const calcTenure = document.getElementById('calcTenure');

const lblResultBadge = document.getElementById('lblResultBadge');
const calcMonthlyEmi = document.getElementById('calcMonthlyEmi');
const lblRowPrincipal = document.getElementById('lblRowPrincipal');
const calcPrincipalDisplay = document.getElementById('calcPrincipalDisplay');
const calcTotalInterest = document.getElementById('calcTotalInterest');
const calcTotalAmount = document.getElementById('calcTotalAmount');
const calcSavingsHighlight = document.getElementById('calcSavingsHighlight');

const barPrincipal = document.getElementById('barPrincipal');
const barInterest = document.getElementById('barInterest');
const calcApplyBtn = document.getElementById('calcApplyBtn');

function switchCalcMode(mode) {
  currentCalcMode = mode;
  const t = translations[currentLang] || translations.en;

  if (mode === 'emi') {
    btnModeEmi.classList.add('active');
    btnModeLoan.classList.remove('active');
    
    lblPrimaryInput.textContent = t.calcLblAmount;
    lblResultBadge.textContent = t.calcBadgeEmi;
    lblRowPrincipal.textContent = t.calcRowPrincipal;

    calcLoanAmount.min = "100000";
    calcLoanAmount.max = "50000000";
    calcLoanAmount.step = "50000";
    inputLoanAmount.min = "50000";
    inputLoanAmount.max = "100000000";
    inputLoanAmount.step = "25000";
    limitMin.textContent = '₹ 1 Lakh';
    limitMax.textContent = '₹ 5 Crore';

    inputLoanAmount.value = 5000000;
    calcLoanAmount.value = 5000000;
  } else {
    btnModeLoan.classList.add('active');
    btnModeEmi.classList.remove('active');

    lblPrimaryInput.textContent = t.calcLblTargetEmi;
    lblResultBadge.textContent = t.calcBadgeLoan;
    lblRowPrincipal.textContent = t.calcRowPrincipal;

    calcLoanAmount.min = "5000";
    calcLoanAmount.max = "500000";
    calcLoanAmount.step = "1000";
    inputLoanAmount.min = "1000";
    inputLoanAmount.max = "2000000";
    inputLoanAmount.step = "500";
    limitMin.textContent = '₹ 5,000 /mo';
    limitMax.textContent = '₹ 5.00 Lakh /mo';

    inputLoanAmount.value = 45000;
    calcLoanAmount.value = 45000;
  }
  calculateTwoWay();
}

if (btnModeEmi && btnModeLoan) {
  btnModeEmi.addEventListener('click', () => switchCalcMode('emi'));
  btnModeLoan.addEventListener('click', () => switchCalcMode('loan'));
}

function calculateTwoWay() {
  if (!inputLoanAmount || !calcInterestRate || !calcTenure) return;

  const rateVal = parseFloat(calcInterestRate.value) || 8.5;
  const R = rateVal / 12 / 100;
  const tenureYrs = parseFloat(calcTenure.value) || 20;
  const N = tenureYrs * 12;

  let P = 0;
  let emi = 0;

  if (currentCalcMode === 'emi') {
    P = parseFloat(inputLoanAmount.value) || 100000;
    emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    
    calcMonthlyEmi.textContent = formatExactINR(emi);
    calcPrincipalDisplay.textContent = formatExactINR(P);
  } else {
    emi = parseFloat(inputLoanAmount.value) || 5000;
    P = (emi * (Math.pow(1 + R, N) - 1)) / (R * Math.pow(1 + R, N));
    
    calcMonthlyEmi.textContent = formatExactINR(P);
    calcPrincipalDisplay.textContent = formatExactINR(P);
  }

  const totalPayment = emi * N;
  const totalInterest = Math.max(0, totalPayment - P);

  calcTotalInterest.textContent = formatExactINR(totalInterest);
  calcTotalAmount.textContent = formatExactINR(totalPayment);

  const benchmarkRate = (rateVal + 1.25) / 12 / 100;
  const benchmarkEmi = (P * benchmarkRate * Math.pow(1 + benchmarkRate, N)) / (Math.pow(1 + benchmarkRate, N) - 1);
  const benchmarkTotalInterest = (benchmarkEmi * N) - P;
  const totalSavings = Math.max(0, benchmarkTotalInterest - totalInterest);

  if (calcSavingsHighlight) {
    if (currentLang === 'gu') {
      calcSavingsHighlight.innerHTML = `✨ <strong>અંદાજિત વ્યાજ બચત:</strong> સામાન્ય બેંક વ્યાજ દર કરતાં ${formatExactINR(totalSavings)} સુધીની બચત!`;
    } else if (currentLang === 'hi') {
      calcSavingsHighlight.innerHTML = `✨ <strong>अनुमानित ब्याज बचत:</strong> सामान्य बैंक दरों के मुकाबले ${formatExactINR(totalSavings)} तक की बचत!`;
    } else {
      calcSavingsHighlight.innerHTML = `✨ <strong>Estimated Interest Savings:</strong> Save up to ${formatExactINR(totalSavings)} vs standard retail bank rates!`;
    }
  }

  const principalPercent = Math.min(100, Math.max(0, (P / totalPayment) * 100));
  const interestPercent = Math.min(100, Math.max(0, (totalInterest / totalPayment) * 100));

  if (barPrincipal) barPrincipal.style.width = principalPercent + '%';
  if (barInterest) barInterest.style.width = interestPercent + '%';

  if (calcApplyBtn) {
    const textMsg = encodeURIComponent(
      `Hello Hiren Sir, I calculated my Loan requirement on your website:\n\n• ${currentCalcMode === 'emi' ? 'Loan Amount' : 'Target Monthly EMI'}: ${formatExactINR(parseFloat(inputLoanAmount.value))}\n• Interest Rate: ${rateVal}%\n• Tenure: ${tenureYrs} Years\n• ${currentCalcMode === 'emi' ? 'Calculated Monthly EMI' : 'Calculated Loan Eligibility'}: ${formatExactINR(currentCalcMode === 'emi' ? emi : P)}\n\nPlease review my profile and share the best bank sanction offer.`
    );
    calcApplyBtn.href = `https://wa.me/918140932289?text=${textMsg}`;
  }
}

// Two-Way Event Listeners
if (calcLoanAmount && inputLoanAmount) {
  calcLoanAmount.addEventListener('input', () => {
    inputLoanAmount.value = calcLoanAmount.value;
    calculateTwoWay();
  });
  inputLoanAmount.addEventListener('input', () => {
    calcLoanAmount.value = inputLoanAmount.value;
    calculateTwoWay();
  });
}

if (calcInterestRate && inputInterestRate) {
  calcInterestRate.addEventListener('input', () => {
    inputInterestRate.value = calcInterestRate.value;
    calculateTwoWay();
  });
  inputInterestRate.addEventListener('input', () => {
    calcInterestRate.value = inputInterestRate.value;
    calculateTwoWay();
  });
}

if (calcTenure && inputTenure) {
  calcTenure.addEventListener('input', () => {
    inputTenure.value = calcTenure.value;
    calculateTwoWay();
  });
  inputTenure.addEventListener('input', () => {
    calcTenure.value = inputTenure.value;
    calculateTwoWay();
  });
}

// ── Document Checklist Multi-Language Engine ──
const checklistTabs = document.querySelectorAll('.checklist-tab-btn');
const checklistViews = {
  en: {
    salaried: [
      { title: "Identity & KYC Documents", desc: "PAN Card, Aadhaar Card, Passport or Voter ID with permanent address" },
      { title: "Salary Slips & Increment Letters", desc: "Latest 3 to 6 months salary slips reflecting all allowances & deductions" },
      { title: "Salary Bank Account Statement", desc: "Latest 6 months updated bank statement where salary is credited" },
      { title: "Form 16 & Employment Proof", desc: "Form 16 Part A & B for last 2 years + Official Company Identity Card" }
    ],
    business: [
      { title: "Business Proof & Registrations", desc: "GST Registration Certificate, Gumasta / Shop Act, MSME Udyam Registration" },
      { title: "Audited Financials (CA Certified)", desc: "Balance Sheet & Profit & Loss statements with audit report for last 2-3 years" },
      { title: "Income Tax Returns (ITR)", desc: "ITR Acknowledgements & Computation sheets for last 2 to 3 Assessment Years" },
      { title: "Current & Operating Bank Accounts", desc: "Latest 12 months bank statements of all active current & CC/OD accounts" }
    ],
    doctor: [
      { title: "Degree & Medical Registration", desc: "MBBS / MD / MS / BDS / MDS Certificate & State Medical Council Registration" },
      { title: "Clinic / Hospital Setup Proof", desc: "Clinic Registration, Property deed / Registered Rent Agreement, Hospital affiliation" },
      { title: "Financials & Income Tax Returns", desc: "Last 2 years ITR with CA computation sheets and balance sheets" },
      { title: "Professional Practice Banking", desc: "Latest 6 to 12 months operating bank account statements" }
    ],
    lap: [
      { title: "Complete Title Deeds", desc: "Registered Sale Deed, Mother Deed, Index II copy & chain of title documents" },
      { title: "Approved Municipal Map & Sanctions", desc: "Approved Building Layout, NA (Non-Agricultural) order, Completion / OC certificate" },
      { title: "Tax Receipts & Society NOC", desc: "Latest Property Tax receipts, Society NOC / Share Certificate copy, Electricity bill" },
      { title: "Encumbrance Search Report", desc: "13 to 30 years non-encumbrance certificate & search report from advocate" }
    ]
  },
  gu: {
    salaried: [
      { title: "ઓળખ અને KYC દસ્તાવેજો", desc: "પાન કાર્ડ, આધાર કાર્ડ, પાસપોર્ટ અથવા ચૂંટણી કાર્ડ" },
      { title: "છેલ્લા ૩ થી ૬ મહિનાની પગાર સ્લિપ", desc: "કંપનીની સત્તાવાર સેલેરી સ્લિપ તમામ ભથ્થાં સાથે" },
      { title: "૬ મહિનાનું સેલેરી બેંક સ્ટેટમેન્ટ", desc: "જે બેંક ખાતામાં નિયમિત પગાર જમા થાય છે તેનું સ્ટેટમેન્ટ" },
      { title: "ફોર્મ ૧૬ અને જોબ આઈડી પ્રૂફ", desc: "છેલ્લા ૨ વર્ષનું ફોર્મ ૧૬ (ભાગ A અને B) + કંપની ઓળખપત્ર" }
    ],
    business: [
      { title: "બિઝનેસ રજીસ્ટ્રેશન પુરાવા", desc: "GST સર્ટિફિકેટ, ગુમાસ્તા ધારા / શોપ એક્ટ, MSME ઉદ્યમ નોંધણી" },
      { title: "CA પ્રમાણિત ઓડિટ રિપોર્ટ્સ", desc: "છેલ્લા ૨-૩ વર્ષની બેલેન્સ શીટ અને નફા-નુકસાન ખાતું" },
      { title: "ઇન્કમ ટેક્સ રિટર્ન્સ (ITR)", desc: "છેલ્લા ૨-૩ વર્ષની ITR સ્વીકૃતિ અને કોમ્પ્યુટેશન" },
      { title: "કરંટ અને CC/OD બેંક સ્ટેટમેન્ટ", desc: "છેલ્લા ૧૨ મહિનાનું તમામ સક્રિય વેપારી ખાતાઓનું સ્ટેટમેન્ટ" }
    ],
    doctor: [
      { title: "મેડિકલ ડિગ્રી અને કાઉન્સિલ રજીસ્ટ્રેશન", desc: "MBBS / MD / MS / BDS ડિગ્રી અને મેડિકલ કાઉન્સિલ સર્ટિફિકેટ" },
      { title: "ક્લિનિક / હોસ્પિટલ પ્રૂફ", desc: "ક્લિનિક નોંધણી, ભાડા કરાર અથવા મિલકતના કાગળો" },
      { title: "નાણાકીય હિસાબો અને ITR", desc: "છેલ્લા ૨ વર્ષના ITR અને CA પ્રમાણિત કાગળો" },
      { title: "પ્રોફેશનલ પ્રેક્ટિસ બેંક સ્ટેટમેન્ટ", desc: "છેલ્લા ૬ થી ૧૨ મહિનાનું બેંક એકાઉન્ટ સ્ટેટમેન્ટ" }
    ],
    lap: [
      { title: "મિલકતના મૂળ દસ્તાવેજો (Sale Deed)", desc: "રજિસ્ટર્ડ વેચાણ દસ્તાવેજ, ઇન્ડેક્સ ૨ અને અગાઉની ચેઈન ડીડ" },
      { title: "મંજૂર પ્લાન અને NA ઓર્ડર", desc: "મ્યુનિસિપલ મંજૂર નકશો, બિન-ખેતી (NA) હુકમ અને OC" },
      { title: "ટેક્સ બિલ અને સોસાયટી NOC", desc: "મકાન વેરાની છેલ્લી પહોંચ, સોસાયટી NOC / શેર સર્ટિફિકેટ" },
      { title: "સર્ચ રિપોર્ટ અને ટાઇટલ ક્લિયરન્સ", desc: "વકીલ દ્વારા તૈયાર કરાયેલ ૧૩ થી ૩૦ વર્ષનો ટાઇટલ સર્ચ રિપોર્ટ" }
    ]
  },
  hi: {
    salaried: [
      { title: "पहचान और KYC दस्तावेज़", desc: "पैन कार्ड, आधार कार्ड, पासपोर्ट या मतदाता पहचान पत्र" },
      { title: "सैलरी स्लिप (3 से 6 महीने)", desc: "सभी भत्तों और कटौतियों को दर्शाने वाली आधिकारिक सैलरी स्लिप" },
      { title: "6 महीने का बैंक स्टेटमेंट", desc: "जिस बैंक खाते में आपकी सैलरी आती है उसका 6 महीने का स्टेटमेंट" },
      { title: "फॉर्म 16 और जॉब आईडी कार्ड", desc: "पिछले 2 वर्षों का फॉर्म 16 (Part A & B) + कंपनी पहचान पत्र" }
    ],
    business: [
      { title: "बिजनेस रजिस्ट्रेशन प्रमाण", desc: "GST प्रमाण पत्र, गुमाश्ता / शॉप एक्ट, MSME उद्यम पंजीकरण" },
      { title: "CA प्रमाणित ऑडिट रिपोर्ट", desc: "पिछले 2 से 3 वर्षों की बैलेंस शीट और लाभ-हानि खाता" },
      { title: "इनकम टैक्स रिटर्न (ITR)", desc: "पिछले 2-3 वर्षों की ITR पावती और गणना पत्रक (Computation)" },
      { title: "करंट व CC/OD बैंक स्टेटमेंट", desc: "पिछले 12 महीनों का सक्रिय चालू बैंक खाता स्टेटमेंट" }
    ],
    doctor: [
      { title: "मेडिकल डिग्री व काउंसिल पंजीकरण", desc: "MBBS / MD / MS / BDS डिग्री और स्टेट मेडिकल काउंसिल सर्टिफिकेट" },
      { title: "क्लिनिक / अस्पताल प्रमाण", desc: "क्लिनिक पंजीकरण, प्रॉपर्टी डीड या रेंट एग्रीमेंट" },
      { title: "वित्तीय रिकॉर्ड और ITR", desc: "पिछले 2 वर्षों की ITR और CA प्रमाणित बैलेंस शीट" },
      { title: "प्रोफेशनल बैंकिंग स्टेटमेंट", desc: "पिछले 6 से 12 महीने का बैंक अकाउंट स्टेटमेंट" }
    ],
    lap: [
      { title: "संपत्ति के मूल दस्तावेज़ (Sale Deed)", desc: "पंजीकृत बैनामा (Sale Deed), मदर डीड और इंडेक्स II प्रति" },
      { title: "स्वीकृत नक्शा और NA आदेश", desc: "नगर निगम स्वीकृत नक्शा, गैर-कृषि (NA) आदेश और OC" },
      { title: "हाउस टैक्स रसीद और एनओसी", desc: "नवीनतम टैक्स रसीद, बिजली बिल, सोसाइटी एनओसी / शेयर सर्टिफिकेट" },
      { title: "टाइटल सर्च रिपोर्ट (13-30 वर्ष)", desc: "अधिवक्ता द्वारा जारी भार-मुक्त (Non-Encumbrance) सर्च रिपोर्ट" }
    ]
  }
};

const checklistGrid = document.getElementById('checklistGrid');

function renderChecklist(type) {
  currentChecklistProfile = type || currentChecklistProfile || 'salaried';
  if (!checklistGrid) return;
  const langKey = checklistViews[currentLang] ? currentLang : 'en';
  const list = checklistViews[langKey][currentChecklistProfile] || checklistViews['en']['salaried'];
  
  checklistGrid.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'checklist-item';
    div.innerHTML = `
      <div class="checklist-item-icon">📋</div>
      <div class="checklist-item-text">
        <h5>${item.title}</h5>
        <p>${item.desc}</p>
      </div>
    `;
    checklistGrid.appendChild(div);
  });
}

checklistTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    checklistTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderChecklist(tab.getAttribute('data-type'));
  });
});
renderChecklist('salaried');

// ── FAQ Accordion ──
const faqItems = document.querySelectorAll('.faq-item');
const faqToggleAll = document.getElementById('faqToggleAll');
let allExpanded = false;

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
    updateFaqToggleLabel();
  });
});

if (faqToggleAll) {
  faqToggleAll.addEventListener('click', () => {
    allExpanded = !allExpanded;
    if (allExpanded) {
      faqItems.forEach((item, i) => {
        setTimeout(() => item.classList.add('open'), i * 140);
      });
    } else {
      const total = faqItems.length;
      faqItems.forEach((item, i) => {
        setTimeout(() => item.classList.remove('open'), (total - 1 - i) * 60);
      });
    }
    setTimeout(updateFaqToggleLabel, faqItems.length * 140 + 100);
  });
}

function updateFaqToggleLabel() {
  if (!faqToggleAll) return;
  const openCount = document.querySelectorAll('.faq-item.open').length;
  allExpanded = openCount === faqItems.length;
  faqToggleAll.textContent = allExpanded ? 'Collapse All' : 'Expand All';
}

// ── Lead Inquiry Form Submit ──
const loanForm = document.getElementById('leadLoanForm');
if (loanForm) {
  loanForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('leadName').value.trim();
    const phone = document.getElementById('leadPhone').value.trim();
    const city = document.getElementById('leadCity').value.trim();
    const loanType = document.getElementById('leadLoanType').value;
    const loanAmount = document.getElementById('leadAmount').value.trim();
    const empType = document.getElementById('leadEmpType').value;
    const notes = document.getElementById('leadNotes').value.trim();

    const formattedMessage = encodeURIComponent(
      `🌟 *NEW LOAN INQUIRY FOR HIREN KANZARIYA*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone:* ${phone}\n` +
      `📍 *City:* ${city}\n` +
      `💼 *Loan Type:* ${loanType}\n` +
      `💰 *Required Amount:* ₹ ${loanAmount}\n` +
      `🏢 *Employment:* ${empType}\n` +
      (notes ? `📝 *Notes:* ${notes}\n\n` : `\n`) +
      `Please review my profile and share the best bank offer.`
    );

    window.open(`https://wa.me/918140932289?text=${formattedMessage}`, '_blank');

    if (currentLang === 'gu') {
      alert(`આભાર, ${name}! તમારી ₹ ${loanAmount} ની લોન પૂછપરછ તૈયાર થઈ ગઈ છે. તમે હવે વોટ્સએપ પર સિનિયર ફાઇનાન્સિયલ કન્સલ્ટન્ટ હિરેન કણઝારિયા સાથે જોડાઈ રહ્યા છો.`);
    } else if (currentLang === 'hi') {
      alert(`धन्यवाद, ${name}! आपकी ₹ ${loanAmount} की लोन पूछताछ तैयार हो गई है। आप अब व्हाट्सएप पर सीनियर फाइनेंशियल कंसल्टेंट हिरेन कणजारिया से जुड़ रहे हैं।`);
    } else {
      alert(`Thank you, ${name}! Your loan inquiry for ₹ ${loanAmount} has been received. You are now being connected directly with Senior Financial Consultant Hiren Kanzariya on WhatsApp.`);
    }
    loanForm.reset();
  });
}

// ── 3D Tilt Effect on Loan Cards ──
if (window.innerWidth > 1024) {
  document.querySelectorAll('.loan-card, .comparison-card.hiren-assisted').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Initialize Language on page load
applyLanguage(currentLang);
