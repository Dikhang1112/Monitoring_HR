# HR Management Platform
## Mindmap 2 layers

```mermaid
flowchart LR

    %% Central Node
    ROOT["HR Management Platform"]

    %% =====================================================
    %% LEFT SIDE (7 FEATURES)
    %% =====================================================

    %% 1. Time Tracking
    TT1["Desktop Timer"] --- TIME["Time Tracking"]
    TT2["Mobile Timer"] --- TIME
    TT3["Manual Timesheet"] --- TIME
    TT4["Idle Detection"] --- TIME
    TIME --- ROOT

    %% 2. Productivity Monitoring
    PR1["Screenshot Capture"] --- PROD["Productivity Monitoring"]
    PR2["Activity Score"] --- PROD
    PR3["Keystroke & Mouse Activity"] --- PROD
    PROD --- ROOT

    %% 3. GPS & Geofencing
    GPS1["Real-time GPS Location"] --- GPS["GPS & Geofencing"]
    GPS2["Geofenced Attendance Check-ins"] --- GPS
    GPS3["Route Tracking"] --- GPS
    GPS --- ROOT

    %% 4. Scheduling
    SH1["Weekly Schedule"] --- SCHED["Scheduling"]
    SH2["Time-off Request"] --- SCHED
    SH3["Onsite & Remote"] --- SCHED
    SCHED --- ROOT

    %% 5. Meeting Tracking
    MT1["Zoom & Teams Integration"] --- MEET["Meeting Tracking"]
    MT2["Meeting Duration Log"] --- MEET
    MT3["Auto Attendance"] --- MEET
    MT4["Meeting Recording"] --- MEET
    MEET --- ROOT

    %% 6. Timeline
    TL1["Daily Activity Stream"] --- TL["Timeline"]
    TL2["Work Blocks & Gaps"] --- TL
    TL3["Chronological Log"] --- TL
    TL --- ROOT

    %% 7. Worktime Expenditure
    EX1["Billable Hours"] --- EXPEND["Worktime Expenditure"]
    EX2["Cost Per Task & Project"] --- EXPEND
    EX3["Overtime Budgeting"] --- EXPEND
    EXPEND --- ROOT

    %% =====================================================
    %% RIGHT SIDE (7 FEATURES)
    %% =====================================================

    %% 8. People Management
    ROOT --- PPL["People Management"]
    PPL --- PPL1["Employee Profiles"]
    PPL --- PPL2["Org Structure & Departments"]
    PPL --- PPL3["Onboarding & Offboarding"]
    PPL --- PPL4["Roles & Permissions"]

    %% 9. Payroll & Invoicing
    ROOT --- PAY["Payroll & Invoicing"]
    PAY --- PY1["Automated Salary Calculation"]
    PAY --- PY2["Overtime Pay"]
    PAY --- PY3["Client Invoices"]

    %% 10. Report Statistic
    ROOT --- REPORTS["Report Statistic"]
    REPORTS --- RP1["Attendance Reports"]
    REPORTS --- RP2["Productivity Analytics"]
    REPORTS --- RP3["Daily Totals"]
    REPORTS --- RP4["Payments Report"]

    %% 11. Highlight Activity
    ROOT --- HIGHLIGHT["Highlight Activity"]
    HIGHLIGHT --- HL1["Key Achievements & Milestones"]
    HIGHLIGHT --- HL2["Productivity Alerts"]
    HIGHLIGHT --- HL3["Anomaly & Idle Alerts"]

    %% 12. Dashboard & Insight
    ROOT --- DASH["Dashboard & Insight"]
    DASH --- DB1["Executive HR Dashboard"]
    DASH --- DB2["Real-time Status Board"]
    DASH --- DB3["AI-Powered Insights"]

    %% 13. Project Manager
    ROOT --- PM["Project Manager"]
    PM --- PJ1["Project To-Do List"]
    PM --- PJ2["Client Portal"]
    PM --- PJ3["Budget & Time Allocation"]

    %% 14. App & Url
    ROOT --- APPURL["App & Url"]
    APPURL --- AU1["App Classification"]
    APPURL --- AU2["Website Usage Tracking"]

    %% =====================================================
    %% STYLING (DIFFERENT COLORS FOR EACH MAIN FEATURE)
    %% =====================================================
    classDef rootStyle fill:#1e293b,stroke:#0f172a,stroke-width:3px,color:#fff,font-weight:bold
    classDef colorTime fill:#0284c7,stroke:#0369a1,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorProd fill:#7e22ce,stroke:#6b21a8,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorGPS fill:#0d9488,stroke:#0f766e,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorSched fill:#d97706,stroke:#b45309,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorMeet fill:#dc2626,stroke:#b91c1c,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorTL fill:#4f46e5,stroke:#4338ca,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorExpend fill:#ea580c,stroke:#c2410c,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorPpl fill:#0891b2,stroke:#0e7490,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorPay fill:#16a34a,stroke:#15803d,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorReports fill:#ca8a04,stroke:#a16207,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorHighlight fill:#e11d48,stroke:#be123c,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorDash fill:#2563eb,stroke:#1d4ed8,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorPM fill:#059669,stroke:#047857,stroke-width:2px,color:#fff,font-weight:bold
    classDef colorAppUrl fill:#db2777,stroke:#be185d,stroke-width:2px,color:#fff,font-weight:bold

    class ROOT rootStyle
    class TIME colorTime
    class PROD colorProd
    class GPS colorGPS
    class SCHED colorSched
    class MEET colorMeet
    class TL colorTL
    class EXPEND colorExpend
    class PPL colorPpl
    class PAY colorPay
    class REPORTS colorReports
    class HIGHLIGHT colorHighlight
    class DASH colorDash
    class PM colorPM
    class APPURL colorAppUrl
```

| No. | Main Feature | Feature List |
| :---: | :--- | :--- |
| 1 | **Time Tracking** | Desktop Timer, Mobile Timer, Manual Timesheet, Idle Detection |
| 2 | **Productivity Monitoring** | Screenshot Capture, Activity Score, Keystroke & Mouse Activity |
| 3 | **GPS & Geofencing** | Real-time GPS Location, Geofenced Attendance Check-ins, Route Tracking |
| 4 | **Scheduling** | Weekly Schedule, Time-off Request, Onsite & Remote |
| 5 | **Meeting Tracking** | Zoom & Teams Integration, Meeting Duration Log, Auto Attendance, Meeting Recording |
| 6 | **Timeline** | Daily Activity Stream, Work Blocks & Gaps, Chronological Log |
| 7 | **Worktime Expenditure** | Billable Hours, Cost Per Task & Project, Overtime Budgeting |
| 8 | **People Management** | Employee Profiles, Org Structure & Departments, Onboarding & Offboarding, Roles & Permissions |
| 9 | **Payroll & Invoicing** | Automated Salary Calculation, Overtime Pay, Client Invoices |
| 10 | **Report Statistic** | Attendance Reports, Productivity Analytics, Daily Totals, Payments Report |
| 11 | **Highlight Activity** | Key Achievements & Milestones, Productivity Alerts, Anomaly & Idle Alerts |
| 12 | **Dashboard & Insight** | Executive HR Dashboard, Real-time Status Board, AI-Powered Insights |
| 13 | **Project Manager** | Project To-Do List, Client Portal, Budget & Time Allocation |
| 14 | **App & Url** | App Classification, Website Usage Tracking |

---

## Core Subsystem Feature Mindmaps & Flowcharts

This section details the 3 level feature breakdown flowcharts for the **Top 5 Essential Core Subsystems** of the HR Management Platform. Detailed documentation for each feature is available in [`docs/mindmap/`](docs/mindmap/).

### 1. People Management
Detailed Specifications: [`docs/mindmap/PeopleManagement.md`](docs/mindmap/PeopleManagement.md)

```mermaid
flowchart LR
    ROOT["1. People Management"]

    %% Branch 1: Employee Profiles
    ROOT --> PROFILES["1.1. Employee Profiles"]
    PROFILES --> P1["Personal & Contact Info (Họ tên, CCCD, SĐT, Email)"]
    PROFILES --> P2["Contract & Employment History (Thử việc, Chính thức, Ngày vào)"]
    PROFILES --> P3["Department & Direct Manager Assignment"]
    PROFILES --> P4["Emergency Contacts & Bank Account Details"]

    %% Branch 2: Org Structure
    ROOT --> ORG["1.2. Org Structure & Departments"]
    ORG --> O1["Interactive Multi-level Org Tree (Cây sơ đồ tổ chức)"]
    ORG --> O2["Department & Sub-unit Management (Phòng ban/Chi nhánh)"]
    ORG --> O3["Department Head & Deputy Assignment (Bổ nhiệm Trưởng/Phó phòng)"]
    ORG --> O4["Headcount & Roster Statistics (Định biên nhân sự)"]

    %% Branch 3: Onboarding & Offboarding
    ROOT --> ONBOARD["1.3. Onboarding & Offboarding Workflow"]
    ONBOARD --> N1["Automated Account Provisioning (Email, HR Portal, App)"]
    ONBOARD --> N2["Equipment & Asset Handover Log (Bàn giao máy tính, thẻ từ)"]
    ONBOARD --> N3["Exit Checklist & Task Handover (Checklist nghỉ việc)"]
    ONBOARD --> N4["Account Revocation & Data Archiving (Thu hồi quyền & Đóng băng)"]

    %% Branch 4: Roles & Permissions
    ROOT --> RBAC["1.4. Role & Permission Management (RBAC)"]
    RBAC --> R1["Default System Roles (Admin, Director, Manager, Staff, Client)"]
    RBAC --> R2["Custom Role Group Creation (HR Officer, Finance Officer)"]
    RBAC --> R3["Action Permission Matrix (Create, Read, Update, Delete, Approve)"]
    RBAC --> R4["Data Scope Scoping (Company-wide, Department, Self-only)"]
```

---

### 2. Time Tracking & GPS Attendance
Detailed Specifications: [`docs/mindmap/TimeTracking.md`](docs/mindmap/TimeTracking.md)

```mermaid
flowchart LR
    ROOT["2. Time Tracking & GPS Attendance"]

    %% Branch 1: Desktop App Timer
    ROOT --> DESK["2.1. Desktop App Timer"]
    DESK --> D1["Real-time Start / Pause / Stop Timer Button"]
    DESK --> D2["Active Project & Task Selection (Gán dự án & công việc)"]
    DESK --> D3["System Tray Integration & Quick Hotkeys"]
    DESK --> D4["Offline Time Buffering & Sync when Reconnected"]

    %% Branch 2: Mobile App Timer
    ROOT --> MOB["2.2. Mobile App Timer"]
    MOB --> M1["Mobile Clock In / Out (Chấm công trên Smartphone)"]
    MOB --> M2["Touch Task Switcher & Work Notes"]
    MOB --> M3["Background Location & App Heartbeat Status"]

    %% Branch 3: GPS Geofenced Attendance
    ROOT --> GPS["2.3. Geofenced GPS Attendance"]
    GPS --> G1["Branch GPS Coordinates & Perimeter Radius Setup"]
    GPS --> G2["Real-time GPS Perimeter Verification upon Check-in"]
    GPS --> G3["Live Map Location Tracking for Field Staff"]
    GPS --> G4["Shift Movement Route Tracking & Location History Log"]

    %% Branch 4: Idle Detection & Manual Timesheet
    ROOT --> IDLE["2.4. Idle Detection & Manual Timesheet"]
    IDLE --> I1["Keyboard & Mouse Inactivity Threshold Configuration"]
    IDLE --> I2["Idle State Popup Warning (Inactive > 10 mins)"]
    IDLE --> I3["Keep or Discard Idle Time User Selection"]
    IDLE --> I4["Manual Timesheet Request Submission & Approval"]
```

---

### 3. Productivity Monitoring & App/URL Classification
Detailed Specifications: [`docs/mindmap/ProductivityMonitoring.md`](docs/mindmap/ProductivityMonitoring.md)

```mermaid
flowchart LR
    ROOT["3. Productivity Monitoring & App/URL Classification"]

    %% Branch 1: Automated Screenshot Capture
    ROOT --> SCR["3.1. Automated Screenshot Capture"]
    SCR --> S1["Random Interval Engine (1-3 screenshots per 10 mins)"]
    SCR --> S2["Multi-Monitor Concurrent Capture Support"]
    SCR --> S3["Client-side Screenshot Encryption before Upload"]
    SCR --> S4["Blur Sensitive Data / Private App Rules"]

    %% Branch 2: Input Activity Tracking
    ROOT --> INP["3.2. Input Activity Tracking"]
    INP --> I1["Keystroke Count & Mouse Movement Frequency Metrics"]
    INP --> I2["Active vs. Idle Session Ratio Calculation (%)"]
    INP --> I3["Anti-AutoClicker & Fake Activity Anomaly Detection"]

    %% Branch 3: App & URL Classification
    ROOT --> APP["3.3. App & URL Productivity Classification"]
    APP --> A1["Global & Tenant App/Website Categorization Engine"]
    APP --> A2["Productivity Labeling (Productive / Unproductive / Neutral)"]
    APP --> A3["Department-specific Classification Rules (Flexible Overrides)"]
    APP --> A4["Detailed Domain URL & Active Window Title Logging"]

    %% Branch 4: Activity Score & Alerts
    ROOT --> SCORE["3.4. Activity Score & Real-time Alerts"]
    SCORE --> C1["Weighted Activity Score Algorithm Calculation (%)"]
    SCORE --> C2["Low Productivity Threshold Triggers (< 30%)"]
    SCORE --> C3["Manager Real-time Alert Notifications & Dashboard Badges"]
```

---

### 4. Scheduling & Time-Off Management
Detailed Specifications: [`docs/mindmap/SchedulingLeave.md`](docs/mindmap/SchedulingLeave.md)

```mermaid
flowchart LR
    ROOT["4. Scheduling & Time-Off Management"]

    %% Branch 1: Shift & Work Schedule Planning
    ROOT --> SCHED["4.1. Shift & Work Schedule Planning"]
    SCHED --> S1["Shift Pattern Setup (Ca sáng, Ca chiều, Ca đêm, Ca gãy)"]
    SCHED --> S2["Onsite vs. Remote Work Mode Classification"]
    SCHED --> S3["Team Roster & Minimum Coverage Planning"]
    SCHED --> S4["Published Schedule Automated Notifications"]

    %% Branch 2: Time-Off & Leave Requests
    ROOT --> LEAVE["4.2. Time-Off & Leave Management"]
    LEAVE --> L1["Leave Type Configuration (Phép năm, Nghỉ bệnh, Thai sản, Không lương)"]
    LEAVE --> L2["Real-time Leave Balance Check (Quỹ ngày phép còn lại)"]
    LEAVE --> L3["Leave Request Submission (Tạo đơn kèm tệp đính kèm)"]
    LEAVE --> L4["Multi-level Manager Approval Workflow"]

    %% Branch 3: Attendance Rules & Punctuality
    ROOT --> RULE["4.3. Attendance Rules & Punctuality"]
    RULE --> R1["Work Shift Grace Period Configuration (Số phút cho phép đi muộn)"]
    RULE --> R2["Late Arrival & Early Departure Violation Log"]
    RULE --> R3["Unexcused Absence Classification (Nghỉ không phép)"]
```

---

### 5. Payroll & Client Invoicing
Detailed Specifications: [`docs/mindmap/PayrollInvoicing.md`](docs/mindmap/PayrollInvoicing.md)

```mermaid
flowchart LR
    ROOT["5. Payroll & Client Invoicing"]

    %% Branch 1: Automated Salary Calculation
    ROOT --> SAL["5.1. Automated Salary Calculation"]
    SAL --> S1["Base Salary & Hourly Rate Rules Engine"]
    SAL --> S2["Timesheet Integration (Approved Work Hours)"]
    SAL --> S3["Tardiness, Early Departure & Absence Deductions"]
    SAL --> S4["Monthly Salary Sheet Generation & Paystub PDF"]

    %% Branch 2: Overtime Pay & Allowance Rules
    ROOT --> OT["5.2. Overtime Pay & Allowance Rules"]
    OT --> O1["Overtime Multiplier Rules (Weekday x1.5, Weekend x2.0, Holiday x3.0)"]
    OT --> O2["Allowance Configuration (Lunch, Travel, Mobile, Role)"]
    OT --> O3["Overtime Budget Cap Warning Alerts"]

    %% Branch 3: Client Invoicing & Billable Hours
    ROOT --> INV["5.3. Client Invoicing & Billable Hours"]
    INV --> I1["Client Billable Hours Approval Workflow"]
    INV --> I2["Project Billing Hourly Rates Configuration"]
    INV --> I3["Automated Client Invoice PDF Statement Generation"]
    INV --> I4["Client Portal Invoice Review & Approval"]
```


---

## System Actors Specification

The system identifies 6 primary actors in the Multi-Tenant HR Management Platform architecture:

| No. | Actor Code | Actor Name | Role Description & Scope of Authority |
| :--- | :--- | :--- | :--- |
| 1 | **ACT-01** | **System-Admin** | Super Administrator for the platform. Manages tenant accounts, subscription plans, platform quota limits, system monitoring, and global audit logs. |
| 2 | **ACT-02** | **Admin-Tenant** | Administrator for a specific tenant organization. Configures organizational structure, departments, roles & permissions, attendance policies, app/URL classifications, payroll rules, and client invoicing. |
| 3 | **ACT-03** | **Director** | Executive / C-Level manager. Views executive dashboards, AI-powered insights, company-wide productivity & financial reports, and manages overtime budgeting. |
| 4 | **ACT-04** | **Manager** | Department Head / Project Manager. Manages weekly work schedules, approves time-off requests, tracks project to-do lists, monitors real-time status, and reviews anomaly/idle alerts. |
| 5 | **ACT-05** | **Staff** | Internal Employee. Clocks in/out via Desktop/Mobile/GPS Geofencing timers, submits leave requests, views work schedules, attends integrated meetings, and tracks personal daily timelines. |
| 6 | **ACT-06** | **Client** | External Client / Partner. Accesses the Client Portal to track project progress, review billable hours, and view/download invoices. |

---

## Core Use Case Specifications & Architecture Mapping

This section outlines the core Use Cases of the HR Management Platform, mapped directly to system actors and architecture modules.

### 1. Core Use Cases Table

| UC ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-01** | Tenant Provisioning & Subscription | System & Tenant Admin | System-Admin | System, Email | Initializes new tenant organizations, provisions primary Admin-Tenant credentials, and manages resource quota caps. |
| **UC-CORE-02** | Employee Profiles & Role RBAC | People Management | Admin-Tenant | Manager | Manages employee personal details, contracts, department assignments, and configures custom RBAC permissions. |
| **UC-CORE-03** | Work Timer Clock In/Out | Time Tracking | Staff | System | Toggles work timers on desktop client apps to record actual working hours and automated idle detection. |
| **UC-CORE-04** | Geofenced GPS Attendance Check-in | GPS & Geofencing | Staff | System | Restricts clock-in/out functionality to designated GPS coordinates and branch perimeter radii. |
| **UC-CORE-05** | Screenshot & Activity Tracking | Productivity Monitoring | System | Manager, Staff | Captures screen activity at random intervals and calculates weighted Activity Score (%). |
| **UC-CORE-06** | App & Website Classification | App & URL Classification | Admin-Tenant | Manager | Categorizes software and domain URLs into Productive, Unproductive, or Neutral status. |
| **UC-CORE-07** | Shift & Work Schedule Planning | Scheduling | Manager | Staff | Assigns weekly shift patterns, work locations (Onsite/Remote), and coverage plans. |
| **UC-CORE-08** | Time-off Request & Approval | Scheduling & Leave | Staff | Manager | Submits annual, sick, or personal leave requests for manager approval workflows. |
| **UC-CORE-09** | Project Task & Kanban Management | Project Management | Manager | Staff, Client | Manages project task lists, Kanban boards, task assignments, and estimated hours. |
| **UC-CORE-10** | Billable Hours & Cost Tracking | Worktime Expenditure | Staff | Manager, Client | Flags client-billable work hours and converts logged employee work time into project cost metrics. |
| **UC-CORE-11** | Automated Payroll & Overtime | Payroll & Invoicing | Admin-Tenant | System | Generates salary sheets automatically using timesheet data, shifts, and overtime multiplier rules. |
| **UC-CORE-12** | Executive Dashboard & AI Insights | Dashboard & Insights | Director | Manager | Displays executive-level KPIs, company-wide productivity trends, and AI turnover risk predictions. |

---

### 2. Master System Use Case Overview & Actor Mapping Table

This master table summarizes all detailed Use Cases across the 7 feature subsystems, explicitly listing their **Primary Actor** (initiator) and **Secondary Actor(s)** (supporting users or services):

| UC ID | Use Case Name | Subsystem / Feature Module | Primary Actor | Secondary Actor(s) | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-SYS-01** | Tenant Provisioning & Subscription | System & Tenant Admin | `System-Admin` | `System Service`, `Email Service` | Initializes new tenant organizations, provisions credentials, and sets quota caps. |
| **UC-SYS-02** | Tenant Quota & Resource Cap Management | System & Tenant Admin | `System-Admin` | `System Service` | Manages storage, user seat limits, and platform resource caps per tenant. |
| **UC-PPL-01** | Employee Profile Management | People Management | `Admin-Tenant` | `Manager`, `Staff` | Manages employee personal details, employment contracts, and bank account info. |
| **UC-PPL-02** | Organizational Structure Setup | People Management | `Admin-Tenant` | `Director`, `Manager` | Builds the multi-level org tree and appoints leadership roles. |
| **UC-PPL-03** | Onboarding & Offboarding Workflow | People Management | `Admin-Tenant` | `Manager`, `Email Service` | Automates account provisioning, asset handover logs, and exit checklists. |
| **UC-PPL-04** | Role & Permission Management (RBAC) | People Management | `System-Admin` | `Admin-Tenant`, `System Service` | Configures action permission matrices and data scope boundaries. |
| **UC-TIME-01** | Desktop Work Timer Control | Time Tracking | `Staff` | `Desktop Agent Service` | Toggles real-time work timers on desktop client apps with active task tagging. |
| **UC-TIME-02** | Mobile Clock In / Out & Task Switcher | Time Tracking | `Staff` | `Mobile Service` | Enables mobile check-in/out, task switching, and heartbeat logs for field staff. |
| **UC-TIME-03** | Idle Inactivity Detection & Timesheet | Time Tracking | `Staff` | `Manager`, `Desktop Agent Service` | Detects keyboard/mouse inactivity and submits manual timesheet requests. |
| **UC-GPS-01** | Geofenced GPS Check-in | GPS Attendance | `Staff` | `Admin-Tenant`, `Location Service` | Restricts check-in/out to authorized GPS coordinates and branch perimeter radii. |
| **UC-GPS-02** | Live Map & Shift Route Tracking | GPS Attendance | `Manager` | `Staff`, `GPS Location Service` | Tracks real-time field staff positions on a live map and logs movement routes. |
| **UC-PROD-01** | Random Automated Screenshot Capture | Productivity Monitoring | `System Service` | `Manager`, `Staff` | Captures multi-monitor screen activity at random intervals with encryption. |
| **UC-PROD-02** | Keystroke & Mouse Input Activity | Productivity Monitoring | `Desktop Agent Service` | `Staff` | Measures input activity frequency and detects anti-autoclicker tools. |
| **UC-PROD-03** | App & Website Classification | Productivity Monitoring | `Admin-Tenant` | `Manager` | Categorizes apps and URLs into Productive, Unproductive, or Neutral status. |
| **UC-PROD-04** | Activity Score & Real-time Alerts | Productivity Monitoring | `Manager` | `System Service`, `Director` | Computes Activity Score (%) and triggers low-productivity alerts (< 30%). |
| **UC-SCHED-01** | Weekly Shift & Work Schedule Planning | Scheduling & Time-Off | `Manager` | `Staff` | Assigns shift patterns, Onsite/Remote work modes, and publishes rosters. |
| **UC-SCHED-02** | Time-off & Leave Request Management | Scheduling & Time-Off | `Staff` | `Manager`, `Admin-Tenant` | Submits leave requests with attachments and executes multi-level approvals. |
| **UC-SCHED-03** | Attendance Rules & Punctuality Log | Scheduling & Time-Off | `System Service` | `Manager`, `Admin-Tenant` | Applies shift grace periods and logs late arrival / early departure violations. |
| **UC-PAY-01** | Automated Monthly Salary Calculation | Payroll & Invoicing | `Admin-Tenant` | `System Service`, `Staff` | Calculates monthly salary sheets automatically using timesheets and deductions. |
| **UC-PAY-02** | Overtime Pay & Allowance Management | Payroll & Invoicing | `Admin-Tenant` | `Director` | Applies overtime multipliers (x1.5, x2.0, x3.0) and monitors OT budget caps. |
| **UC-PAY-03** | Client Invoicing & Billable Hours | Payroll & Invoicing | `Manager` | `Client`, `Billing System` | Approves project billable hours and generates client invoice PDF statements. |

---

### 3. Total Use Case Summary & Actor Coverage Matrix

| Actor Code | Actor Name | Role Category | Direct Core Use Cases | Total Use Case Count |
| :--- | :--- | :--- | :--- | :---: |
| **ACT-01** | **System-Admin** | Super Administrator | `UC-CORE-01` | **1** |
| **ACT-02** | **Admin-Tenant** | HR Administrator | `UC-CORE-02`, `UC-CORE-06`, `UC-CORE-11` | **3** |
| **ACT-03** | **Director** | Executive C-Level | `UC-CORE-10`, `UC-CORE-12` | **2** |
| **ACT-04** | **Manager** | Department / Project Head | `UC-CORE-05`, `UC-CORE-06`, `UC-CORE-07`, `UC-CORE-08`, `UC-CORE-09`, `UC-CORE-10`, `UC-CORE-12` | **7** |
| **ACT-05** | **Staff** | Internal Employee | `UC-CORE-03`, `UC-CORE-04`, `UC-CORE-05`, `UC-CORE-07`, `UC-CORE-08`, `UC-CORE-09`, `UC-CORE-10` | **7** |
| **ACT-06** | **Client** | External Partner | `UC-CORE-09`, `UC-CORE-10` | **2** |
| **TOTAL** | **6 System Actors** | **5 System Subsystems** | **12 Core System Use Cases** | **12 Core UCs** |

---

## Use Case Diagrams Gallery

All diagrams are modeled in PlantUML and rendered in standard high resolution.

### 1. System Overview High-Level Use Case Diagram
![Overview High-Level Use Case Diagram](docs/images/overview.png)

---

### 2. System-Admin Detailed Use Case Diagram
![System-Admin Detailed Use Case Diagram](docs/images/System-Admin.png)

---

### 3. Admin-Tenant (HR Admin) Detailed Use Case Diagram
![Admin-Tenant Detailed Use Case Diagram](docs/images/Admin-Tenant.png)

---

### 4. Director Detailed Use Case Diagram
![Director Detailed Use Case Diagram](docs/images/Director.png)

---

### 5. Manager Detailed Use Case Diagram
![Manager Detailed Use Case Diagram](docs/images/Manager.png)

---

### 6. Staff (Employee) Detailed Use Case Diagram
![Staff Detailed Use Case Diagram](docs/images/Staff.png)

---

### 7. Client Detailed Use Case Diagram
![Client Detailed Use Case Diagram](docs/images/Client.png)