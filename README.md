# e-Portfolio System — Sudan Obstetrics & Gynaecology Council

> **Electronic Portfolio & Continuous Assessment Platform**
> مجلس النساء والتوليد — السودان

A web-based e-Portfolio system for managing and tracking the training and assessment records of OB/GYN registrars at the Sudan Medical Specialization Council. Built in alignment with **RCOG** and **WFME 2023** international standards.

---

## Table of Contents

- [Overview](#overview)
- [User Roles](#user-roles)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Meeting Notes](#meeting-notes)
- [Roadmap](#roadmap)

---

## Overview

This platform replaces the previous paper-based and web-based assessment system, which was damaged and inaccessible for over 3 years. It provides a structured, low-learning-curve interface for:

- Tracking each registrar's training portfolio across a **4-year programme**
- Conducting and recording **DOPS assessments** across 3 clinical axes
- Managing and archiving **training documents**
- Supporting **~700 active registrars** and **~300 consultants** at full scale

---

## User Roles

| Role | Arabic | Description |
|---|---|---|
| **Admin** | المقرر | Full system oversight; manages all users, templates, and data |
| **Moderator** | المشرف | Reviews new registrations, verifies identity documents, activates/rejects accounts |
| **Consultant** (Trainer) | المدرب / الاستشاري | Conducts DOPS assessments; uploads sensitive administrative documents on behalf of registrars |
| **Resident** (Trainee) | النائب / المتدرب | Views personal portfolio; uploads non-sensitive documents (certificates, presentations) |

---

## Features

### Authentication & Registration
- **Invitation-code-based registration** — no open sign-ups; codes issued by the Council
- **2-step registration flow**: code verification → details + identity document upload
- **Pending activation state** — accounts await Moderator review before access is granted

### Moderator Dashboard
- View all **pending registrations** with submitted identity documents
- **Approve or Reject** accounts with automated notification flow
- **User Management** — freeze or reactivate any account
- Live badge on sidebar showing number of accounts awaiting action

### Admin Dashboard
- Overview statistics: active registrars, consultants, assessments, documents
- Latest assessments table with quick navigation
- Automatic "Needs Follow-up" alert for registrars below 60% assessment completion

### Consultant (Trainer) Features
- View only their **assigned registrars**
- Create new **DOPS assessments** with checklist + qualitative rating (Excellent / Good / Needs Improvement / Weak)
- Upload **sensitive administrative documents** exclusively:
  - Maternity Leave (>2 weeks)
  - Sick Leave (>2 weeks)
  - Investigation Committee Minutes
  - Official Administrative Leave

### Resident (Trainee) Features
- Personal training portfolio with **4-year progression tracker**
- View all received assessments with trainer notes
- Upload non-sensitive documents: Scientific Presentations, Course Certificates, Simulation Certificates
- Clear in-app guidance on which documents must be uploaded by their Consultant

### Assessment System (3 Clinical Axes)
| Axis | Description |
|---|---|
| **Clinical Skills** | DOPS for C-sections, vaginal delivery, ultrasound, myomectomy, high-risk pregnancy |
| **Learning Environment** | Quality of supervision, feedback, resources, simulation access |
| **Teamwork & Communication** | Collaboration with anaesthesiology/neonatology; family communication |

### Document Management
- Supports **PDF and Image** uploads
- Audit trail: each document shows who uploaded it (Consultant or Resident)
- All documents flagged as **Verified** once reviewed

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 (Create React App) |
| Styling | Inline CSS with design tokens (no external CSS framework) |
| Icons | Custom inline SVG system |
| Fonts | Noto Sans Arabic (Google Fonts) |
| Language | JavaScript (JSX) |
| Future Backend | Supabase (PostgreSQL + Row-Level Security) |
| Future Hosting | AWS — Bahrain region (me-south-1) for low latency |

---

## Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 7

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdelrhman-Rayis/MDTP.git
cd MDTP

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`.

### Previewing Roles

On the login screen, select any role to preview its interface without a password:

| Preview Role | Demo User |
|---|---|
| Admin | Prof. Duriya Reis |
| Moderator | Moderator Team |
| Consultant | Dr. Sara Ahmed |
| Resident | Ahmed Mohammed Ali |

---

## Project Structure

```
MDTP/
├── public/
│   └── index.html              # App entry point (Arabic metadata, Noto Sans font)
├── src/
│   ├── App.js                  # Main application (all components)
│   ├── index.js                # React DOM entry
│   └── styles.css              # Global base styles
├── 21 Feb 25 Meeting/          # Meeting documents (Feb 21, 2025)
│   ├── محضر اجتماع (Meeting Minutes)_.docx
│   ├── system_requirements.docx
│   └── prototype01.mp4
├── مصادر إضافية/               # Additional reference materials
│   ├── system_requirements (1).docx
│   ├── متطلبات بناء نظام بورتفوليو إلكتروني.docx
│   ├── محضر اجتماع (Meeting Minutes).docx
│   └── [RCOG / WFME / SMSB reference PDFs]
├── package.json
├── .gitignore
└── README.md
```

---

## Meeting Notes

### Feb 21, 2025 — Key Decisions

1. **Platform naming**: Use "مجلس النساء والتوليد" exclusively; the word "جراحة" (surgery) must not appear anywhere
2. **Interface language**: English as primary language (to match certificates and passports); Arabic names can be added later for admin use
3. **Document permissions**: Only the **Consultant** (not the Resident) may upload sensitive administrative documents (sick leaves >2 weeks, investigation boards)
4. **Registration security**: No open account creation; invitation codes issued per user; identity proof required; Moderator team activates accounts
5. **System architecture**: Web-first; plan for mobile app and AI layer in future phases
6. **Scale**: Support ~1,000 registrars; stress-tested for 1,200 concurrent users

---

## Roadmap

### Phase 1 — Current (Prototype)
- [x] 4 user roles: Admin, Moderator, Consultant, Resident
- [x] Invitation-code registration with ID verification
- [x] DOPS assessment forms with checklist + qualitative rating
- [x] Document upload with role-based permission restrictions
- [x] 4-year training progression tracker
- [x] Moderator account review queue

### Phase 2 — Planned
- [ ] Supabase backend integration (PostgreSQL + Auth + Storage)
- [ ] Row-Level Security (RLS) policies per role
- [ ] Real-time notifications (assessment submitted, account approved)
- [ ] Multi-device session management with security verification
- [ ] Dynamic trainer–hospital rotation (every 6 months)
- [ ] PDF report export per registrar

### Phase 3 — Future
- [ ] Progressive Web App (PWA) with offline support
- [ ] Mini-CEX and Case-based Discussion (CbD) assessment types
- [ ] WFME compliance dashboard for accreditation reporting
- [ ] AI layer for early performance-decline alerts
- [ ] Mobile application

---

## Standards Compliance

- [RCOG Workplace-Based Assessments (WPBAs)](https://www.rcog.org.uk)
- [WFME Postgraduate Medical Education Standards 2023](https://wfme.org)
- WCAG 2.2 AA accessibility guidelines (target)

---

## Team

- **Prof. Duriya Reis** — Council Representative
- **Abdul Rahman** — Development & Design Lead
- **Mustafa** — Development & Design

---

*Built as a volunteer initiative to support the digital transformation of medical training in Sudan.*
