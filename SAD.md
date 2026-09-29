# Software Architecture Document (SAD)
## SahkarSaathi: Multilingual Cooperative Governance & Legal Assistance Chatbot

**Version:** 1.1  
**Type:** Web Application (Multilingual AI + Voice + Fast Verification Terminal)  
**Scope:** Demo / MVP Architecture for an end-to-end cooperative governance assistance platform

---

### 1. Introduction

#### 1.1 Purpose
This document describes the software architecture for **SahkarSaathi**, a multilingual cooperative assistance and rapid verification application that helps farmers, PACS members, and cooperative secretaries discover government schemes, understand eligibility in regional languages (Tamil, Marathi, Telugu), and rapidly complete in-office statutory verification using QR and SMS OTP simulation with printable output slips.

#### 1.2 Architectural Objectives
- Deliver a responsive, high-contrast, accessible single-page web application.
- Simulate inbox notifications at intervals under 5 minutes (default: 3 minutes).
- Provide multilingual text responses and regional voice synthesis (Web Speech API).
- Support a 3-person persona showcase for instant regional demonstration.
- Capture user login credentials (Username, Password, Designation, Masked Aadhaar, Phone).
- Provide a PACS Office Hardware Verification Assistant with laser QR scanning, SMS OTP authentication, document checklist evaluator, and printable pre-qualification slip generation.

---

### 2. System Architecture

```
+----------------------------------------------------------------------------------------------------+
|                                              End User                                              |
|                      (Farmer · PACS Secretary · Cooperative Member · PACS Staff)                   |
+-------------------------------------------------+--------------------------------------------------+
                                                  |
                                                  v
+----------------------------------------------------------------------------------------------------+
|                                    Frontend — Web Application                                      |
|  +--------------------------------+--------------------------------+----------------------------+  |
|  |           Inbox UI             |          Chatbot UI            |   PACS Verification Term   |  |
|  |  (3-min Timer, Status, Saved)  | (3 Personas, Text, Web Speech) | (QR Scan, OTP, Print Slip) |  |
|  +--------------------------------+--------------------------------+----------------------------+  |
|                          Shared Application State & User Profile Context                           |
+-------------------------------------------------+--------------------------------------------------+
                                                  |
                                                  v
+----------------------------------------------------------------------------------------------------+
|                                       Application Services                                         |
|  +------------------------+-------------------+--------------------+----------------------------+  |
|  |     Inbox Service      | Scheme Chat Engine| Language & TTS Svc | Fast Verification Engine   |  |
|  | (Timer & State Tracker)| (Grounded Logic & | (ta-IN, mr-IN,     | (QR Reader, OTP Dispatcher,|  |
|  |                        |  3-Scheme Answers)|  te-IN, hi-IN, en) |  Eligibility Decision & Slip|
|  +------------------------+-------------------+--------------------+----------------------------+  |
+-------------------------------------------------+--------------------------------------------------+
                                                  |
                                                  v
+----------------------------------------------------------------------------------------------------+
|                                    Data & Knowledge Layer                                          |
|  +-----------------------------------------------------------------------------------------------+ |
|  |  3 Official Predefined Scheme Records:                                                         | |
|  |  1. PACS Computerization (100% Grant, ₹4L/PACS, 7-day timeline)                                 | |
|  |  2. Agriculture Infrastructure Fund (3% Interest Subvention, ₹2 Cr loan, 14-day timeline)       | |
|  |  3. PM-KUSUM Solar Ag Pumps (60% Subsidy, 10-day timeline)                                     | |
|  +-----------------------------------------------------------------------------------------------+ |
+----------------------------------------------------------------------------------------------------+
```

---

### 3. Component Details

#### 3.1 User Authentication & Profile Store
Manages user credentials:
- `Username`: Client full name.
- `Password`: Protected authentication string.
- `Designation`: Farmer Member, PACS Secretary, Cooperative Member, or Staff.
- `Aadhaar`: 12-digit UIDAI number (stored securely with masking `XXXX-XXXX-XXXX`).
- `Mobile`: 10-digit number used for rapid SMS OTP verification.

#### 3.2 Multilingual Chatbot & 3-Person Persona Engine
- **Tamil Persona (Murugan K - Farmer)**: Focuses on PM-KUSUM 60% Solar Pump subsidy with Tamil voice playback (`ta-IN`).
- **Marathi Persona (Ramesh Patil - PACS Secretary)**: Focuses on AIF 3% Interest Subvention for cold storage with Marathi voice playback (`mr-IN`).
- **Telugu Persona (Venkat Rao - Member)**: Focuses on PACS Computerization ERP with Telugu voice playback (`te-IN`).
- Text-to-Speech uses native browser `SpeechSynthesisUtterance` with zero external latency.

#### 3.3 PACS Hardware Fast Verification Check Assistant
- **QR Scan Step**: Simulates hardware optical laser scanner reading client credential hash and verifying against PACS registry.
- **Phone OTP Step**: Simulates automatic SMS delivery of a 6-digit OTP code to eliminate identity fraud and reduce verification delay from days to seconds.
- **Automated Eligibility Decision**: Compares verified documents against scheme requirements to return **YES (Eligible)** or **NO (Pending Missing Docs)** with an exact list of missing statutory items.
- **Printable Output**: Generates an A4 print-ready official verification slip with PACS seal, reference QR stamp, client details, eligibility decision, and signatures.
