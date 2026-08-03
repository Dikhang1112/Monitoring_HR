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

| Operational & Tracking | Management & Analytics |
| :--- | :--- |
| **1. Time Tracking**<br>- Desktop Timer, Mobile Timer, Manual Timesheet, Idle Detection | **8. People Management**<br>- Employee Profiles, Org Structure & Departments, Onboarding & Offboarding, Roles & Permissions |
| **2. Productivity Monitoring**<br>- Screenshot Capture, Activity Score, Keystroke & Mouse Activity | **9. Payroll & Invoicing**<br>- Automated Salary Calculation, Overtime Pay, Client Invoices |
| **3. GPS & Geofencing**<br>- Real-time GPS Location, Geofenced Attendance Check-ins, Route Tracking | **10. Report Statistic**<br>- Attendance Reports, Productivity Analytics, Daily Totals, Payments Report |
| **4. Scheduling**<br>- Weekly Schedule, Time-off Request, Onsite & Remote | **11. Highlight Activity**<br>- Key Achievements & Milestones, Productivity Alerts, Anomaly & Idle Alerts |
| **5. Meeting Tracking**<br>- Zoom & Teams Integration, Meeting Duration Log, Auto Attendance, Meeting Recording | **12. Dashboard & Insight**<br>- Executive HR Dashboard, Real-time Status Board, AI-Powered Insights |
| **6. Timeline**<br>- Daily Activity Stream, Work Blocks & Gaps, Chronological Log | **13. Project Manager**<br>- Project To-Do List, Client Portal, Budget & Time Allocation |
| **7. Worktime Expenditure**<br>- Billable Hours, Cost Per Task & Project, Overtime Budgeting | **14. App & Url**<br>- App Classification, Website Usage Tracking |