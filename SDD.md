# Software Design Document (SDD)
## SahkarSaathi: Multilingual Cooperative Governance & Legal Assistance Chatbot

**Version:** 1.1  
**Type:** Demo / MVP Coding Design Document  
**Scope:** Application structure, components, data models, functions, logic, and implementation approach

---

### 1. Introduction

#### 1.1 Purpose
This Software Design Document describes how the SahkarSaathi application is implemented. It translates product requirements and system architecture into a practical coding design for a working demo.

SahkarSaathi is a multilingual assistant designed to help farmers, PACS members, and rural citizens understand government schemes, subsidies, and cooperative services, while offering PACS office staff a rapid hardware verification terminal.

The application contains:
- **Inbox Module:** Displays three government scheme records, simulated updates every 3 minutes (under 5 minutes), seen (`✓`) / unseen (`!`) indicators, and a save-for-later option.
- **Chatbot Module:** Explains the three schemes in Tamil, Marathi, and Telugu (+ Hindi & English) using text and voice output with a 3-person persona showcase.
- **User Credentials Modal:** Captures Username, Password, Designation, Masked Aadhaar, and Mobile.
- **PACS Hardware Fast Verification Assistant:** Simulates optical QR scan and 2-step SMS OTP verification, checks required documents against statutory criteria, calculates YES/NO eligibility, and produces an official printable verification slip.

---

### 2. State & Data Models

#### 2.1 User Profile Model
```javascript
{
  name: "Murugan K",
  role: "Farmer Member",
  state: "Tamil Nadu",
  lang: "ta",
  pacsId: "TN-SLM-PACS-402",
  aadhaar: "5834-8921-9120",
  phone: "9840123456",
  schemeId: "scheme-003",
  schemeCode: "PM-KUSUM-SOLAR-2024"
}
```

#### 2.2 Scheme Record Model
```javascript
{
  id: "scheme-001",
  code: "PACS-COMP-2024",
  name: { en: "...", ta: "...", mr: "...", te: "...", hi: "..." },
  department: "Ministry of Cooperation, Govt. of India / NABARD",
  summary: { en: "...", ta: "...", mr: "...", te: "...", hi: "..." },
  benefits: "100% Financial Grant for Hardware, ERP Software...",
  eligibility: { en: "...", ta: "...", mr: "...", te: "...", hi: "..." },
  documents: ["PACS Registration Certificate", "Audit Reports", "DCCB Resolution", "Staff KYC"],
  applicationProcess: "Online registration on State Cooperative Registrar Portal...",
  sourceUrl: "https://cooperation.gov.in/pacs-computerization",
  lastVerified: "September 2024",
  statutoryTimeline: "Verification completed within 7 working days."
}
```

#### 2.3 Verification Terminal State Model
```javascript
{
  activeStep: 1, // 1: QR Scan, 2: SMS OTP, 3: Eligibility & Docs, 4: Printable Slip
  qrScanned: true,
  otpGenerated: "482910",
  otpVerified: true,
  selectedSchemeId: "scheme-003",
  checkedDocs: ["Land Revenue Record", "PACS Membership", "Aadhaar & NPCI Passbook"],
  isEligible: true,
  missingDocs: [],
  verificationRefCode: "SAHKAR-VERIF-9481"
}
```

---

### 3. Key Functions & Logic Flows

1. **`switchDemoPersona(personaKey)`**: Updates user profile, switches language dropdown, syncs inbox titles, and generates persona-specific chatbot inquiry with instant voice synthesis.
2. **`initTimerSync()`**: Decrements countdown timer from 3:00 to 0:00 every second; triggers `deliverNextScheme()` under 5-minute intervals.
3. **`triggerQrScan()`**: Simulates laser scan animation, verifies QR badge against mock database, and unlocks Step 2.
4. **`verifyOtpCode()`**: Checks entered 6-digit OTP against simulated SMS dispatch, linking mobile to PACS audit record.
5. **`runEligibilityEvaluation()`**: Compares verified documents against scheme prerequisites; outputs **YES (Compliant)** or **NO (Missing Required Items)**.
6. **`renderPrintableSlip()`**: Populates official A4 printable verification summary slip ready for `window.print()`.
