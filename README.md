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

This master table contains **all 91 Use Cases** across the 7 feature subsystems from High-Level (Level 1) down to Detailed Sub-Use Cases (Level 2 & Level 3), explicitly listing their **Hierarchy Level**, **Primary Actor** (initiator), and **Secondary Actor(s)** (supporting users or services):

| UC ID | Use Case Name | Hierarchy Level | Subsystem / Feature Module | Primary Actor | Secondary Actor(s) | Description |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **UC-SYS-01** | Tenant Provisioning & Subscription | `L1 (High-Level)` | System & Tenant Admin | `System-Admin` | `System Service`, `Email Service` | Initializes new tenant organizations, provisions credentials, and sets quota caps. |
| **UC-SYS-01a** | Assign Default Admin Credentials | `L2 (Sub-UC)` | System & Tenant Admin | `System-Admin` | `System Service` | Provisions primary Admin-Tenant credentials and initial access rights. |
| **UC-SYS-01b** | Send Tenant Welcome Email | `L2 (Sub-UC)` | System & Tenant Admin | `System Service` | `Email Service` | Dispatches automated welcome emails with initial login credentials. |
| **UC-SYS-02** | Tenant Quota & Resource Cap Management | `L1 (High-Level)` | System & Tenant Admin | `System-Admin` | `System Service` | Manages storage, user seat limits, and platform resource caps per tenant. |
| **UC-SYS-02a** | Configure Storage & User Seat Limits | `L2 (Sub-UC)` | System & Tenant Admin | `System-Admin` | `System Service` | Sets max employee seat licenses and cloud screenshot storage limits. |
| **UC-SYS-03** | Global Platform Monitoring & Audit Logs | `L1 (High-Level)` | System & Tenant Admin | `System-Admin` | `System Service` | Tracks system uptime, server health, and platform-wide security audit logs. |
| **UC-SYS-04** | Platform API Key & Integration Management | `L1 (High-Level)` | System & Tenant Admin | `System-Admin` | `System Service` | Issues and revokes API keys for external ERP/HRIS integrations. |
| **UC-PPL-01** | Employee Profile Management | `L1 (High-Level)` | People Management | `Admin-Tenant` | `Manager`, `Staff` | Manages employee personal details, employment contracts, and bank account info. |
| **UC-PPL-01a** | Assign Department & Direct Manager | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Manager` | Assigns employees to organizational departments and designates Direct Managers. |
| **UC-PPL-01b** | Record Emergency Contacts & Bank Info | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Staff` | Records emergency contacts, tax IDs, and direct deposit bank accounts. |
| **UC-PPL-01c** | Import / Export Employee Records | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `System Service` | Bulk imports employee profiles from CSV/Excel or exports roster data. |
| **UC-PPL-01d** | Track Employment Contract History | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Staff` | Logs probation periods, contract renewals, and salary change history. |
| **UC-PPL-02** | Organizational Structure Setup | `L1 (High-Level)` | People Management | `Admin-Tenant` | `Director`, `Manager` | Builds the multi-level org tree and appoints leadership roles. |
| **UC-PPL-02a** | Build Department & Sub-unit Tree | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Manager` | Creates department hierarchies, branch offices, and team sub-units. |
| **UC-PPL-02b** | Assign Department Head & Deputies | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Manager` | Appoints Department Heads, Deputy Heads, and Team Lead roles. |
| **UC-PPL-02c** | View Headcount & Roster Statistics | `L2 (Sub-UC)` | People Management | `Director` | `Admin-Tenant` | Displays headcount distribution and department roster capacity stats. |
| **UC-PPL-02d** | Merge / Dissolve Department | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Director` | Handles department mergers, restructuring, and member reassignment. |
| **UC-PPL-03** | Onboarding & Offboarding Workflow | `L1 (High-Level)` | People Management | `Admin-Tenant` | `Manager`, `Email Service` | Automates account provisioning, asset handover logs, and exit checklists. |
| **UC-PPL-03a** | Automate Account Provisioning | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Email Service` | Provisions Email, HR Portal, and Timer app accounts for new hires. |
| **UC-PPL-03b** | Track Equipment & Asset Handover | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Staff` | Logs hardware assets (laptops, monitors, keycards) assigned to staff. |
| **UC-PPL-03c** | Process Exit Checklist & Task Handover | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `Manager` | Executes task handover checklists and approves resignation workflows. |
| **UC-PPL-03d** | Revoke Access & Archive Account | `L2 (Sub-UC)` | People Management | `Admin-Tenant` | `System Service` | Revokes system permissions and freezes departing employee accounts. |
| **UC-PPL-04** | Role & Permission Management (RBAC) | `L1 (High-Level)` | People Management | `System-Admin` | `Admin-Tenant`, `System Service` | Configures action permission matrices and data scope boundaries. |
| **UC-PPL-04a** | Assign Default System Roles | `L2 (Sub-UC)` | People Management | `System-Admin` | `Admin-Tenant` | Assigns system default roles (Admin, Director, Manager, Staff, Client). |
| **UC-PPL-04b** | Configure Action Permission Matrix | `L2 (Sub-UC)` | People Management | `System-Admin` | `Admin-Tenant` | Sets CRUD and Approval permission checkboxes per feature screen. |
| **UC-PPL-04c** | Create Custom Role Groups | `L2 (Sub-UC)` | People Management | `System-Admin` | `Admin-Tenant` | Defines custom role groups (e.g. HR Officer, Payroll Accountant). |
| **UC-PPL-04d** | Configure Data Scope Scoping | `L2 (Sub-UC)` | People Management | `System-Admin` | `System Service` | Restricts data scope boundaries (Company-wide, Department, Self-only). |
| **UC-TIME-01** | Desktop Work Timer Control | `L1 (High-Level)` | Time Tracking | `Staff` | `Desktop Agent Service` | Toggles real-time work timers on desktop client apps with active task tagging. |
| **UC-TIME-01a** | Select Active Project & Task | `L2 (Sub-UC)` | Time Tracking | `Staff` | `Desktop Agent Service` | Tags current work session with active project and task names. |
| **UC-TIME-01b** | System Tray Integration & Hotkeys | `L2 (Sub-UC)` | Time Tracking | `Staff` | `Desktop Agent Service` | Minimizes timer to System Tray and supports quick hotkeys (`Ctrl+Shift+S`). |
| **UC-TIME-01c** | Buffer Offline Work Time | `L2 (Sub-UC)` | Time Tracking | `Staff` | `Desktop Agent Service` | Stores encrypted work logs locally when Internet connection drops. |
| **UC-TIME-01d** | Sync Offline Timesheet when Reconnected | `L3 (Sub-UC)` | Time Tracking | `Desktop Agent Service` | `System Service` | Synchronizes buffered offline timesheets to cloud servers when online. |
| **UC-TIME-02** | Mobile Clock In / Out & Task Switcher | `L1 (High-Level)` | Time Tracking | `Staff` | `Mobile Service` | Enables mobile check-in/out, task switching, and heartbeat logs for field staff. |
| **UC-TIME-02a** | Touch Task Switcher & Work Notes | `L2 (Sub-UC)` | Time Tracking | `Staff` | `Mobile Service` | Provides touch interface to switch tasks and attach brief work notes. |
| **UC-TIME-02b** | Send App Heartbeat Status | `L2 (Sub-UC)` | Time Tracking | `Mobile Service` | `System Service` | Transmits periodic heartbeat pings to verify active mobile app session. |
| **UC-TIME-02c** | Attach Field Photo Note | `L3 (Sub-UC)` | Time Tracking | `Staff` | `Mobile Service` | Attaches real-time site photos to mobile clock-in records. |
| **UC-TIME-03** | Idle Inactivity Detection & Timesheet | `L1 (High-Level)` | Time Tracking | `Staff` | `Manager`, `Desktop Agent Service` | Detects keyboard/mouse inactivity and submits manual timesheet requests. |
| **UC-TIME-03a** | Detect Keyboard/Mouse Inactivity Threshold | `L2 (Sub-UC)` | Time Tracking | `Desktop Agent Service` | `Staff` | Monitors input inactivity and triggers idle state after 10 mins. |
| **UC-TIME-03b** | Prompt Inactive State Warning Popup | `L2 (Sub-UC)` | Time Tracking | `Desktop Agent Service` | `Staff` | Prompts popup asking user to keep or discard inactive work time. |
| **UC-TIME-03c** | Keep or Discard Idle Time Selection | `L3 (Sub-UC)` | Time Tracking | `Staff` | `Desktop Agent Service` | User chooses to keep valid offline discussions or discard idle time. |
| **UC-TIME-03d** | Submit Manual Timesheet Request | `L3 (Sub-UC)` | Time Tracking | `Staff` | `Manager` | Submits manual timesheet adjustment requests for manager approval. |
| **UC-GPS-01** | Geofenced GPS Check-in | `L1 (High-Level)` | GPS Attendance | `Staff` | `Admin-Tenant`, `Location Service` | Restricts check-in/out to authorized GPS coordinates and branch perimeter radii. |
| **UC-GPS-01a** | Configure Branch GPS Coordinates & Radius | `L2 (Sub-UC)` | GPS Attendance | `Admin-Tenant` | `Location Service` | Sets branch latitude, longitude, and allowed geofence perimeter radius. |
| **UC-GPS-01b** | Verify Real-time GPS Location upon Check-in | `L2 (Sub-UC)` | GPS Attendance | `Location Service` | `Staff` | Compares device GPS coordinates with geofence perimeter radius. |
| **UC-GPS-01c** | Reject Out-of-Perimeter Check-in | `L3 (Sub-UC)` | GPS Attendance | `Location Service` | `Staff` | Blocks check-in attempts outside authorized geofence perimeters. |
| **UC-GPS-02** | Live Map & Shift Route Tracking | `L1 (High-Level)` | GPS Attendance | `Manager` | `Staff`, `GPS Location Service` | Tracks real-time field staff positions on a live map and logs movement routes. |
| **UC-GPS-02a** | Track Real-time Field Staff Position | `L2 (Sub-UC)` | GPS Attendance | `Manager` | `GPS Location Service` | Displays real-time GPS locations of field service staff on interactive map. |
| **UC-GPS-02b** | Log Shift Movement Route History | `L2 (Sub-UC)` | GPS Attendance | `GPS Location Service` | `Manager` | Logs chronological movement route history during active work shifts. |
| **UC-GPS-02c** | Export Route Movement Log | `L3 (Sub-UC)` | GPS Attendance | `Manager` | `System Service` | Exports field staff movement route history logs for auditing. |
| **UC-PROD-01** | Random Automated Screenshot Capture | `L1 (High-Level)` | Productivity Monitoring | `System Service` | `Manager`, `Staff` | Captures multi-monitor screen activity at random intervals with encryption. |
| **UC-PROD-01a** | Multi-Monitor Concurrent Capture | `L2 (Sub-UC)` | Productivity Monitoring | `System Service` | `Desktop Agent Service` | Captures all connected displays simultaneously in multi-monitor setups. |
| **UC-PROD-01b** | Client-side Screenshot Encryption | `L2 (Sub-UC)` | Productivity Monitoring | `Desktop Agent Service` | `System Service` | Encrypts captured screenshots on client device before cloud upload. |
| **UC-PROD-01c** | Blur Sensitive Data & App Window | `L3 (Sub-UC)` | Productivity Monitoring | `Desktop Agent Service` | `Staff` | Blurs sensitive app windows (banking, password managers) automatically. |
| **UC-PROD-02** | Keystroke & Mouse Input Activity | `L1 (High-Level)` | Productivity Monitoring | `Desktop Agent Service` | `Staff` | Measures input activity frequency and detects anti-autoclicker tools. |
| **UC-PROD-02a** | Calculate Active vs Idle Session Ratio (%) | `L2 (Sub-UC)` | Productivity Monitoring | `Desktop Agent Service` | `System Service` | Computes active vs inactive time ratio percentage per minute. |
| **UC-PROD-02b** | Detect Anti-AutoClicker & Fake Activity | `L3 (Sub-UC)` | Productivity Monitoring | `Desktop Agent Service` | `System Service` | Detects artificial mouse jigglers and auto-clicker software anomalies. |
| **UC-PROD-03** | App & Website Classification | `L1 (High-Level)` | Productivity Monitoring | `Admin-Tenant` | `Manager` | Categorizes apps and URLs into Productive, Unproductive, or Neutral status. |
| **UC-PROD-03a** | Assign Productivity Labels | `L2 (Sub-UC)` | Productivity Monitoring | `Admin-Tenant` | `Manager` | Assigns Productive, Unproductive, or Neutral tags to software and URLs. |
| **UC-PROD-03b** | Log Active Window Title & Domain URL | `L2 (Sub-UC)` | Productivity Monitoring | `Desktop Agent Service` | `System Service` | Records specific website domain URLs and active window titles. |
| **UC-PROD-03c** | Configure Department Overrides | `L3 (Sub-UC)` | Productivity Monitoring | `Admin-Tenant` | `Manager` | Sets department-specific rules (e.g. Facebook is Productive for Marketing). |
| **UC-PROD-04** | Activity Score & Real-time Alerts | `L1 (High-Level)` | Productivity Monitoring | `Manager` | `System Service`, `Director` | Computes Activity Score (%) and triggers low-productivity alerts (< 30%). |
| **UC-PROD-04a** | Calculate Weighted Activity Score (%) | `L2 (Sub-UC)` | Productivity Monitoring | `System Service` | `Manager` | Runs weighted algorithm combining input activity and productive app time. |
| **UC-PROD-04b** | Trigger Low Productivity Alert (< 30%) | `L2 (Sub-UC)` | Productivity Monitoring | `System Service` | `Manager` | Triggers alert when employee Activity Score drops below 30% threshold. |
| **UC-PROD-04c** | Dispatch Real-time Push Notification | `L3 (Sub-UC)` | Productivity Monitoring | `System Service` | `Manager` | Sends instant mobile push notification and email alert to Manager. |
| **UC-SCHED-01** | Weekly Shift & Work Schedule Planning | `L1 (High-Level)` | Scheduling & Time-Off | `Manager` | `Staff` | Assigns shift patterns, Onsite/Remote work modes, and publishes rosters. |
| **UC-SCHED-01a** | Assign Shift Patterns | `L2 (Sub-UC)` | Scheduling & Time-Off | `Manager` | `Staff` | Configures morning, afternoon, night, or split shift schedules. |
| **UC-SCHED-01b** | Classify Onsite vs Remote Work Mode | `L2 (Sub-UC)` | Scheduling & Time-Off | `Manager` | `Staff` | Designates whether shift is executed Onsite or Remote/Work-From-Home. |
| **UC-SCHED-01c** | Publish Schedule & Notify Team Roster | `L3 (Sub-UC)` | Scheduling & Time-Off | `Manager` | `Staff` | Dispatches roster notification alerts to assigned staff members. |
| **UC-SCHED-02** | Time-off & Leave Request Management | `L1 (High-Level)` | Scheduling & Time-Off | `Staff` | `Manager`, `Admin-Tenant` | Submits leave requests with attachments and executes multi-level approvals. |
| **UC-SCHED-02a** | Check Available Leave Balance | `L2 (Sub-UC)` | Scheduling & Time-Off | `Staff` | `System Service` | Validates remaining annual leave balance before request submission. |
| **UC-SCHED-02b** | Submit Leave Request with Attachments | `L2 (Sub-UC)` | Scheduling & Time-Off | `Staff` | `Manager` | Submits annual, sick, or personal leave requests with doctor notes. |
| **UC-SCHED-02c** | Multi-level Manager & HR Approval | `L3 (Sub-UC)` | Scheduling & Time-Off | `Manager` | `Admin-Tenant` | Executes sequential approval workflow (Direct Manager -> HR Admin). |
| **UC-SCHED-02d** | Deduct Approved Leave Balance | `L3 (Sub-UC)` | Scheduling & Time-Off | `Admin-Tenant` | `System Service` | Deducts approved leave days automatically from employee annual quota. |
| **UC-SCHED-03** | Attendance Rules & Punctuality Log | `L1 (High-Level)` | Scheduling & Time-Off | `System Service` | `Manager`, `Admin-Tenant` | Applies shift grace periods and logs late arrival / early departure violations. |
| **UC-SCHED-03a** | Apply Work Shift Grace Period | `L2 (Sub-UC)` | Scheduling & Time-Off | `System Service` | `Manager` | Allows 15-minute grace period before marking clock-in as late. |
| **UC-SCHED-03b** | Log Late Arrival & Early Departure | `L2 (Sub-UC)` | Scheduling & Time-Off | `System Service` | `Manager` | Records exact minutes of tardiness or early shift departure. |
| **UC-SCHED-03c** | Flag Unexcused Absence | `L3 (Sub-UC)` | Scheduling & Time-Off | `System Service` | `Manager`, `Admin-Tenant` | Marks unexcused absence if staff fails to clock in without approved leave. |
| **UC-PAY-01** | Automated Monthly Salary Calculation | `L1 (High-Level)` | Payroll & Invoicing | `Admin-Tenant` | `System Service`, `Staff` | Calculates monthly salary sheets automatically using timesheets and deductions. |
| **UC-PAY-01a** | Integrate Timesheet Approved Work Hours | `L2 (Sub-UC)` | Payroll & Invoicing | `System Service` | `Admin-Tenant` | Fetches verified working hours automatically from Time Tracking. |
| **UC-PAY-01b** | Apply Tardiness & Absence Deductions | `L2 (Sub-UC)` | Payroll & Invoicing | `Admin-Tenant` | `System Service` | Deducts salary penalties for unexcused absences and tardiness. |
| **UC-PAY-01c** | Generate Monthly Salary Sheet | `L3 (Sub-UC)` | Payroll & Invoicing | `Admin-Tenant` | `System Service` | Compiles company-wide monthly payroll sheet for payout. |
| **UC-PAY-01d** | Export Personal Paystub PDF | `L3 (Sub-UC)` | Payroll & Invoicing | `Admin-Tenant` | `Staff` | Dispatches individual encrypted PDF paystubs to employees via email. |
| **UC-PAY-02** | Overtime Pay & Allowance Management | `L1 (High-Level)` | Payroll & Invoicing | `Admin-Tenant` | `Director` | Applies overtime multipliers (x1.5, x2.0, x3.0) and monitors OT budget caps. |
| **UC-PAY-02a** | Apply Overtime Multipliers | `L2 (Sub-UC)` | Payroll & Invoicing | `Admin-Tenant` | `System Service` | Multiplies OT pay rates (Weekday 150%, Weekend 200%, Holiday 300%). |
| **UC-PAY-02b** | Calculate Fixed & Variable Allowances | `L2 (Sub-UC)` | Payroll & Invoicing | `Admin-Tenant` | `System Service` | Adds lunch, travel, mobile phone, and role allowance items. |
| **UC-PAY-02c** | Trigger Overtime Budget Cap Warning | `L3 (Sub-UC)` | Payroll & Invoicing | `System Service` | `Director` | Sends warning alert when department OT expenses exceed budget cap. |
| **UC-PAY-03** | Client Invoicing & Billable Hours | `L1 (High-Level)` | Payroll & Invoicing | `Manager` | `Client`, `Billing System` | Approves project billable hours and generates client invoice PDF statements. |
| **UC-PAY-03a** | Approve Client Project Billable Hours | `L2 (Sub-UC)` | Payroll & Invoicing | `Manager` | `Client` | Reviews and approves billable work hours tagged to client projects. |
| **UC-PAY-03b** | Apply Hourly Billing Rates per Role | `L2 (Sub-UC)` | Payroll & Invoicing | `Manager` | `Billing System` | Multiplies billable hours by billing rate per role (e.g. Senior Dev $40/h). |
| **UC-PAY-03c** | Generate Client Invoice PDF Statement | `L3 (Sub-UC)` | Payroll & Invoicing | `Billing System` | `Manager` | Compiles itemized billing statements and exports official PDF invoice. |
| **UC-PAY-03d** | Client Portal Invoice Download & Review | `L3 (Sub-UC)` | Payroll & Invoicing | `Client` | `Billing System` | Client logs into portal to review, approve, and download PDF invoice. |

---

### 3. Detailed Sub-Use Cases Inventory (Level 2 & Level 3)

This section lists all **70 Detailed Sub-Use Cases (Level 2 & Level 3)** grouped by subsystem, detailing the specific operational steps (`<<include>>` and `<<extend>>` workflows):

#### 1. System & Tenant Admin Subsystem
* **`UC-SYS-01a`** Assign Default Admin Credentials `[L2]` – Provisions primary Admin-Tenant credentials and initial access rights.
* **`UC-SYS-01b`** Send Tenant Welcome Email `[L2]` – Dispatches automated welcome emails with initial login credentials.
* **`UC-SYS-02a`** Configure Storage & User Seat Limits `[L2]` – Sets max employee seat licenses and cloud screenshot storage limits.

#### 2. People Management Subsystem
* **`UC-PPL-01a`** Assign Department & Direct Manager `[L2]` – Assigns employees to organizational departments and designates Direct Managers.
* **`UC-PPL-01b`** Record Emergency Contacts & Bank Info `[L2]` – Records emergency contacts, tax IDs, and direct deposit bank accounts.
* **`UC-PPL-01c`** Import / Export Employee Records `[L2]` – Bulk imports employee profiles from CSV/Excel or exports roster data.
* **`UC-PPL-01d`** Track Employment Contract History `[L2]` – Logs probation periods, contract renewals, and salary change history.
* **`UC-PPL-02a`** Build Department & Sub-unit Tree `[L2]` – Creates department hierarchies, branch offices, and team sub-units.
* **`UC-PPL-02b`** Assign Department Head & Deputies `[L2]` – Appoints Department Heads, Deputy Heads, and Team Lead roles.
* **`UC-PPL-02c`** View Headcount & Roster Statistics `[L2]` – Displays headcount distribution and department roster capacity stats.
* **`UC-PPL-02d`** Merge / Dissolve Department `[L2]` – Handles department mergers, restructuring, and member reassignment.
* **`UC-PPL-03a`** Automate Account Provisioning `[L2]` – Provisions Email, HR Portal, and Timer app accounts for new hires.
* **`UC-PPL-03b`** Track Equipment & Asset Handover `[L2]` – Logs hardware assets (laptops, monitors, keycards) assigned to staff.
* **`UC-PPL-03c`** Process Exit Checklist & Task Handover `[L2]` – Executes task handover checklists and approves resignation workflows.
* **`UC-PPL-03d`** Revoke Access & Archive Account `[L2]` – Revokes system permissions and freezes departing employee accounts.
* **`UC-PPL-04a`** Assign Default System Roles `[L2]` – Assigns system default roles (Admin, Director, Manager, Staff, Client).
* **`UC-PPL-04b`** Configure Action Permission Matrix `[L2]` – Sets CRUD and Approval permission checkboxes per feature screen.
* **`UC-PPL-04c`** Create Custom Role Groups `[L2]` – Defines custom role groups (e.g. HR Officer, Payroll Accountant).
* **`UC-PPL-04d`** Configure Data Scope Scoping `[L2]` – Restricts data scope boundaries (Company-wide, Department, Self-only).

#### 3. Time Tracking Subsystem
* **`UC-TIME-01a`** Select Active Project & Task `[L2]` – Tags current work session with active project and task names.
* **`UC-TIME-01b`** System Tray Integration & Hotkeys `[L2]` – Minimizes timer to System Tray and supports quick hotkeys (`Ctrl+Shift+S`).
* **`UC-TIME-01c`** Buffer Offline Work Time `[L2]` – Stores encrypted work logs locally when Internet connection drops.
* **`UC-TIME-01d`** Sync Offline Timesheet when Reconnected `[L3]` – Synchronizes buffered offline timesheets to cloud servers when online.
* **`UC-TIME-02a`** Touch Task Switcher & Work Notes `[L2]` – Provides touch interface to switch tasks and attach brief work notes.
* **`UC-TIME-02b`** Send App Heartbeat Status `[L2]` – Transmits periodic heartbeat pings to verify active mobile app session.
* **`UC-TIME-02c`** Attach Field Photo Note `[L3]` – Attaches real-time site photos to mobile clock-in records.
* **`UC-TIME-03a`** Detect Keyboard/Mouse Inactivity Threshold `[L2]` – Monitors input inactivity and triggers idle state after 10 mins.
* **`UC-TIME-03b`** Prompt Inactive State Warning Popup `[L2]` – Prompts popup asking user to keep or discard inactive work time.
* **`UC-TIME-03c`** Keep or Discard Idle Time Selection `[L3]` – User chooses to keep valid offline discussions or discard idle time.
* **`UC-TIME-03d`** Submit Manual Timesheet Request `[L3]` – Submits manual timesheet adjustment requests for manager approval.

#### 4. GPS Attendance Subsystem
* **`UC-GPS-01a`** Configure Branch GPS Coordinates & Radius `[L2]` – Sets branch latitude, longitude, and allowed geofence perimeter radius.
* **`UC-GPS-01b`** Verify Real-time GPS Location upon Check-in `[L2]` – Compares device GPS coordinates with geofence perimeter radius.
* **`UC-GPS-01c`** Reject Out-of-Perimeter Check-in `[L3]` – Blocks check-in attempts outside authorized geofence perimeters.
* **`UC-GPS-02a`** Track Real-time Field Staff Position `[L2]` – Displays real-time GPS locations of field service staff on interactive map.
* **`UC-GPS-02b`** Log Shift Movement Route History `[L2]` – Logs chronological movement route history during active work shifts.
* **`UC-GPS-02c`** Export Route Movement Log `[L3]` – Exports field staff movement route history logs for auditing.

#### 5. Productivity Monitoring Subsystem
* **`UC-PROD-01a`** Multi-Monitor Concurrent Capture `[L2]` – Captures all connected displays simultaneously in multi-monitor setups.
* **`UC-PROD-01b`** Client-side Screenshot Encryption `[L2]` – Encrypts captured screenshots on client device before cloud upload.
* **`UC-PROD-01c`** Blur Sensitive Data & App Window `[L3]` – Blurs sensitive app windows (banking, password managers) automatically.
* **`UC-PROD-02a`** Calculate Active vs Idle Session Ratio (%) `[L2]` – Computes active vs inactive time ratio percentage per minute.
* **`UC-PROD-02b`** Detect Anti-AutoClicker & Fake Activity `[L3]` – Detects artificial mouse jigglers and auto-clicker software anomalies.
* **`UC-PROD-03a`** Assign Productivity Labels `[L2]` – Assigns Productive, Unproductive, or Neutral tags to software and URLs.
* **`UC-PROD-03b`** Log Active Window Title & Domain URL `[L2]` – Records specific website domain URLs and active window titles.
* **`UC-PROD-03c`** Configure Department Overrides `[L3]` – Sets department-specific rules (e.g. Facebook is Productive for Marketing).
* **`UC-PROD-04a`** Calculate Weighted Activity Score (%) `[L2]` – Runs weighted algorithm combining input activity and productive app time.
* **`UC-PROD-04b`** Trigger Low Productivity Alert (< 30%) `[L2]` – Triggers alert when employee Activity Score drops below 30% threshold.
* **`UC-PROD-04c`** Dispatch Real-time Push Notification `[L3]` – Sends instant mobile push notification and email alert to Manager.

#### 6. Scheduling & Time-Off Subsystem
* **`UC-SCHED-01a`** Assign Shift Patterns `[L2]` – Configures morning, afternoon, night, or split shift schedules.
* **`UC-SCHED-01b`** Classify Onsite vs Remote Work Mode `[L2]` – Designates whether shift is executed Onsite or Remote/Work-From-Home.
* **`UC-SCHED-01c`** Publish Schedule & Notify Team Roster `[L3]` – Dispatches roster notification alerts to assigned staff members.
* **`UC-SCHED-02a`** Check Available Leave Balance `[L2]` – Validates remaining annual leave balance before request submission.
* **`UC-SCHED-02b`** Submit Leave Request with Attachments `[L2]` – Submits annual, sick, or personal leave requests with doctor notes.
* **`UC-SCHED-02c`** Multi-level Manager & HR Approval `[L3]` – Executes sequential approval workflow (Direct Manager -> HR Admin).
* **`UC-SCHED-02d`** Deduct Approved Leave Balance `[L3]` – Deducts approved leave days automatically from employee annual quota.
* **`UC-SCHED-03a`** Apply Work Shift Grace Period `[L2]` – Allows 15-minute grace period before marking clock-in as late.
* **`UC-SCHED-03b`** Log Late Arrival & Early Departure `[L2]` – Records exact minutes of tardiness or early shift departure.
* **`UC-SCHED-03c`** Flag Unexcused Absence `[L3]` – Marks unexcused absence if staff fails to clock in without approved leave.

#### 7. Payroll & Client Invoicing Subsystem
* **`UC-PAY-01a`** Integrate Timesheet Approved Work Hours `[L2]` – Fetches verified working hours automatically from Time Tracking.
* **`UC-PAY-01b`** Apply Tardiness & Absence Deductions `[L2]` – Deducts salary penalties for unexcused absences and tardiness.
* **`UC-PAY-01c`** Generate Monthly Salary Sheet `[L3]` – Compiles company-wide monthly payroll sheet for payout.
* **`UC-PAY-01d`** Export Personal Paystub PDF `[L3]` – Dispatches individual encrypted PDF paystubs to employees via email.
* **`UC-PAY-02a`** Apply Overtime Multipliers `[L2]` – Multiplies OT pay rates (Weekday 150%, Weekend 200%, Holiday 300%).
* **`UC-PAY-02b`** Calculate Fixed & Variable Allowances `[L2]` – Adds lunch, travel, mobile phone, and role allowance items.
* **`UC-PAY-02c`** Trigger Overtime Budget Cap Warning `[L3]` – Sends warning alert when department OT expenses exceed budget cap.
* **`UC-PAY-03a`** Approve Client Project Billable Hours `[L2]` – Reviews and approves billable work hours tagged to client projects.
* **`UC-PAY-03b`** Apply Hourly Billing Rates per Role `[L2]` – Multiplies billable hours by billing rate per role (e.g. Senior Dev $40/h).
* **`UC-PAY-03c`** Generate Client Invoice PDF Statement `[L3]` – Compiles itemized billing statements and exports official PDF invoice.
* **`UC-PAY-03d`** Client Portal Invoice Download & Review `[L3]` – Client logs into portal to review, approve, and download PDF invoice.

---

### 4. Total Use Case Summary & Actor Coverage Matrix

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