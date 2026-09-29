# Project Phases & Roadmap Document
## SahkarSaathi: Multilingual Cooperative Governance & Legal Assistance Chatbot

**Project Scope:** Multilingual Government Scheme Discovery, PACS Service Assistance & Fast Office Verification  
**Status:** MVP Implemented (Phases 1 to 6 Complete)

---

### 1. Project Overview
SahkarSaathi is a multilingual digital assistant designed to help farmers, PACS members, and rural citizens access information about government schemes, subsidies, and cooperative services in their preferred language (Tamil, Marathi, Telugu, Hindi, English). It also features a simulated PACS Office Hardware Terminal enabling rapid credential verification (QR + SMS OTP) to eliminate lengthy verification delays, with automated eligibility decisions and printable summary slips.

---

### 2. Project Development Phases

```
+-------------------------------------------------------------------------+
|                  Phase 1: Requirements Analysis & Planning              |
|   (Scope definition, 3 official scheme records, UI flow, PRD v1.1)      |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                  Phase 2: UI/UX Design & Layout Setup                   |
| (High-contrast WCAG AA styling, single-page layout, bottom switcher)    |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                  Phase 3: Inbox Module Development                      |
|  (Seen [✓] / unseen [!] badges, save-for-later, 3-min timed update cycle)|
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|             Phase 4: Multilingual Chatbot & Voice Engine                |
|  (Tamil, Marathi, Telugu, Hindi, English + Web Speech TTS + 3 Personas) |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|          Phase 5: PACS Office Hardware Fast Verification Terminal       |
| (QR Scan simulation, 2-step SMS OTP check, Docs Evaluator, Print Slip)  |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|             Phase 6: Deployment & Demonstration Testing                 |
|   (Browser testing, automated decision audit, documentation update)     |
+-------------------------------------------------------------------------+
```

---

### 3. Detailed Phase Breakdown

#### Phase 1: Requirement Analysis & Planning
- Defined the 3 core official schemes: PACS Computerization ERP, AIF 3% Subvention, PM-KUSUM 60% Solar Pump subsidy.
- Documented regional language requirements: Tamil (தமிழ்), Marathi (मराठी), and Telugu (తెలుగు).
- Defined client credential structure: Username, Password, Designation, Masked Aadhaar, and Mobile.

#### Phase 2: UI/UX Design & Layout Setup
- Built single-page workspace with bottom switcher: **1. Inbox** and **2. Chatbot**.
- Formulated solid, high-contrast palette avoiding purple/gradients in compliance with government design standards.

#### Phase 3: Inbox Module
- 3 official scheme records rendered with unseen (red `!`) and seen (green `✓`) notification tags.
- Under 5-minute automated sync timer (default 3 minutes) plus instant "Advance Timer by 3 min" button.
- Save-for-later bookmarking tab.

#### Phase 4: Multilingual Chatbot & Voice Engine
- Interactive 3-person demo showcase bar (Murugan - Tamil, Patil - Marathi, Venkat - Telugu).
- Web Speech API integration with Play/Stop audio controls and auto-speech output.
- Grounded query parsing for scheme details, eligibility, documents, and statutory timelines.

#### Phase 5: PACS Office Hardware Fast Verification Assistant
- Step 1: Laser QR code credential scanning.
- Step 2: Instant 2-step SMS OTP dispatched to client mobile with 1-click autofill.
- Step 3: Interactive required documents audit returning **YES (Eligible)** or **NO (Pending Missing Docs)**.
- Step 4: Official A4 printable Pre-Qualification & Verification slip.

#### Phase 6: Testing & Presentation
- Verified end-to-end functionality across desktop and mobile screens.
