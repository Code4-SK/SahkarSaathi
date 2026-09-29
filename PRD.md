# Product Requirements Document (PRD)
## SahkarSaathi: Multilingual Cooperative Governance & Legal Assistance Chatbot

**Version:** 1.2 (SIH Demo with Nature-Inspired UI & Hardware Kiosk Terminal)  
**Type:** Web Application (Multilingual + Voice + Fast Verification Assistant)  
**Project:** AI-powered cooperative governance, government scheme discovery, and PACS service assistance.

---

### 1. Product Overview
SahkarSaathi is a multilingual digital assistant and verification system built for farmers, PACS members, and rural citizens. It provides accessible discovery of government schemes, evaluates statutory subsidy eligibility, and accelerates in-office PACS verification via a simulated hardware kiosk terminal.

The application features:
1. **Nature-Inspired & Accessible UI**: Clean agricultural palette (Forest Green `#245C3A`, Leaf Green `#5C9B52`, Warm Cream `#F8F5E9`, Harvest Gold `#E9B949`) with warm welcoming banners, one-tap language selectors, and high contrast WCAG AA compliance.
2. **Inbox Module**: 3 predefined official government schemes updating under 5-minute intervals (default 3 min) with unread (`!`) and read (`✓`) badges and a save-for-later bookmarking filter.
3. **Multilingual AI Chatbot with Voice Playback**: Explains schemes in **Tamil (தமிழ்)**, **Marathi (मराठी)**, **Telugu (తెలుగు)**, **Hindi (हिन्दी)**, and **English** with text and speech synthesis (Web Speech API) and a 3-person persona showcase.
4. **PACS Hardware Kiosk Showcase & Verification Assistant**: Features front and rear view hardware specs (10.1" touchscreen, camera, microphone, dual speakers, USB/LAN ports) with simulated laser QR scan and 2-step SMS OTP authentication.
5. **Printable Pre-Qualification Summary Slip**: Generates an official, print-ready certificate containing client credentials, masked Aadhaar, eligibility decision (YES/NO), missing document checklist, and QR audit verification stamp.

---

### 2. Visual & Architectural Identity
- **Forest Green (`#245C3A`)**: Primary branding, navigation bars, and CTA buttons.
- **Leaf Green (`#5C9B52`)**: Positive status badges, verified indicators, and online indicators.
- **Warm Cream (`#F8F5E9`)**: Welcoming rural background with crisp white elevated surface cards.
- **Harvest Gold (`#E9B949`)**: Scheme subsidy highlights, hero accents, and interactive focus states.
- **Hardware Asset**: Embedded `pacs_hardware_kiosk.jpg` showcasing the desktop terminal hardware design.

---

### 3. Official Demo Scheme Records
1. **PACS-COMP-2024**: Centrally Sponsored Project for Computerization of PACS (100% grant, ₹4L/PACS, 7-day timeline).
2. **AIF-PACS-SUB-2024**: Agriculture Infrastructure Fund 3% Interest Subvention (₹2 Crore loan subvention, 14-day timeline).
3. **PM-KUSUM-SOLAR-2024**: PM-KUSUM Component-A/C Solar Agriculture Pumps (60% subsidy, 10-day timeline).
