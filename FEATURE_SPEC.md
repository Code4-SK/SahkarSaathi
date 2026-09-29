# Feature Specification Document
## SahkarSaathi: Multilingual Cooperative Governance & Legal Assistance Chatbot

**Version:** 1.1  
**Type:** Demo / MVP Feature Specification  
**Project:** AI-powered cooperative governance, government scheme discovery, and PACS service assistance

---

### 1. Purpose
This document defines the features and expected behaviour of the SahkarSaathi demo. The application helps farmers, PACS members, and rural citizens access information about government schemes and subsidies, with regional-language explanations and voice output. It also includes an integrated PACS Office Fast Verification Check Assistant allowing PACS staff to authenticate client credentials via QR and SMS OTP, verify statutory eligibility, and produce an official printable verification slip.

---

### 2. Scope

| In Scope | Out of Scope |
| :--- | :--- |
| Three supplied official scheme records | Live banking payment APIs |
| Inbox list, seen (green `✓`), unseen (red `!`), save for later | Physical biometric fingerprint scanners |
| Simulated timed update under 5 minutes (default 3 min) | Permanent UIDAI backend connections |
| Tamil, Marathi, Telugu, Hindi, English chatbot responses | Full civil litigation legal representation |
| Text responses and Web Speech API voice synthesis | |
| 3-person demo showcase with regional personas | |
| User login profile (Username, Designation, Masked Aadhaar, Phone) | |
| PACS Office Verification Terminal with QR scan and SMS OTP | |
| Automated Eligibility Decision (YES/NO) and missing document checklist | |
| Official printable verification and pre-qualification slip | |

---

### 3. User Roles & Personas

| Role / Persona | Profile Details | Primary Need |
| :--- | :--- | :--- |
| **Murugan K** | Farmer Member (Tamil Nadu) | Explore PM-KUSUM 60% Solar Pump subsidy in Tamil with voice guidance. |
| **Ramesh Patil** | PACS Secretary (Maharashtra) | Assess AIF 3% Interest Subvention for cold storage in Marathi. |
| **Venkat Rao** | Cooperative Member (Andhra Pradesh) | Verify PACS Computerization ERP grant in Telugu. |
| **PACS Office Staff** | Verification Officer | Fast-track verification using QR scanning and SMS OTP verification. |

---

### 4. Navigation and Shared Layout

The app uses a single-page layout. A main content panel displays the selected module, with **1. Inbox** and **2. Chatbot** navigation options placed directly below it. Selecting an option replaces the panel content without a full page reload.

| ID | Feature | Requirement |
| :--- | :--- | :--- |
| **NAV-01** | **Inbox tab** | Selecting Inbox displays the inbox module. |
| **NAV-02** | **Chatbot tab** | Selecting Chatbot displays the chatbot module. |
| **NAV-03** | **Active state** | Highlight the selected navigation option with high-contrast indicator. |
| **NAV-04** | **Verification Terminal** | Header button launches the PACS Hardware Verification Assistant modal. |
| **NAV-05** | **User Login Dialog** | Header button enables switching or updating client credentials. |

---

### 5. Detailed Feature Specifications

#### 5.1 Inbox Module
| ID | Feature | Requirement | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **INB-01** | **Initial scheme list** | Load supplied scheme records. | All official schemes appear in Inbox. |
| **INB-02** | **Notification card** | Show title, summary, timestamp, and metadata. | Each item is identifiable. |
| **INB-03** | **Unseen indicator** | Show red exclamation mark (`!`). | New notifications are marked unseen (`!`) with red left border. |
| **INB-04** | **Seen indicator** | Show green checkmark (`✓`). | Opening a notification marks it seen (`✓`) with green left border. |
| **INB-05** | **Save for later** | Allow save/unsave bookmarking. | Filter tab displays saved items. |
| **INB-06** | **Scheme details** | Open full available scheme details modal. | Displays benefits, eligibility, documents, statutory timeline, and official link. |
| **INB-07** | **Timed demo update** | Countdown timer triggers new update every 3 minutes. | Updates arrive under 5 minutes. |
| **INB-08** | **Advance timer button** | Button simulates 3 minutes elapsed immediately. | Presenter can trigger update on demand. |

#### 5.2 Multilingual Chatbot Module
| ID | Feature | Requirement | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **BOT-01** | **Language selection** | Offer Tamil, Marathi, Telugu, Hindi, and English. | Chatbot adapts output text and audio. |
| **BOT-02** | **3-Person demo bar** | Provide one-click persona switcher (Murugan, Patil, Venkat). | Switches persona, language, and inquiry automatically. |
| **BOT-03** | **Scheme explanation** | Ground responses strictly in official scheme records. | Answers explain benefits, eligibility, docs, and timelines. |
| **BOT-04** | **Voice output (TTS)** | Synthesize spoken audio in selected regional language. | Web Speech API audio plays with Play/Stop buttons. |
| **BOT-05** | **Suggested prompts** | Provide quick chips (Explain scheme, Who is eligible, Required docs, Timeline). | Injects prompt and retrieves grounded answer. |

#### 5.3 PACS Office Hardware Fast Verification Assistant
| ID | Feature | Requirement | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **VER-01** | **QR Scan simulation** | Simulate laser scan of client QR credential. | Verifies credential and unlocks OTP step. |
| **VER-02** | **Fast SMS OTP check** | Generate 6-digit OTP code and display client SMS alert pop. | Allows typing or 1-click 'Autofill OTP' to authenticate. |
| **VER-03** | **Eligibility & missing docs** | Interactive document checklist for selected scheme. | Evaluates if all documents are present; if missing, flags exact missing list. |
| **VER-04** | **Eligibility decision** | Render clear YES (Qualified) or NO (Pending Missing Docs) status. | Accurate decision based on verified documents. |
| **VER-05** | **Printable verification slip** | Render official PACS verification slip with QR stamp, client details, and signatures. | Supports 1-click A4 print / PDF export via browser print. |
