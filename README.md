# Monitoring_HR - HR Management Platform

Hệ thống quản lý nhân sự và giám sát năng suất làm việc toàn diện (**HR Management Platform**).

---

## 📐 System Feature Flowchart

Sơ đồ tính năng hệ thống với nút trung tâm hình vuông **HR Management Platform**, kết nối bằng các đường nối thẳng đơn giản không mũi tên (`---`), được bố trí cân đối chia đều **2 bên (Trái & Phải)** và mỗi tính năng chính được phân biệt bằng **màu sắc riêng biệt**:

```mermaid
flowchart LR

    %% Central Node
    ROOT["HR Management Platform"]

    %% =====================================================
    %% BÊN TRÁI (LEFT SIDE - 7 FEATURES)
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
    GPS2["Geofenced Attendance Check"] --- GPS
    GPS3["Route Tracking"] --- GPS
    GPS --- ROOT

    %% 4. Scheduling
    SH1["Weekly Shift Schedule"] --- SCHED["Scheduling"]
    SH2["Drag & Drop Planner"] --- SCHED
    SH3["Shift Rotation & Swap"] --- SCHED
    SCHED --- ROOT

    %% 5. Meeting Tracking
    MT1["Zoom & Teams Integration"] --- MEET["Meeting Tracking"]
    MT2["Meeting Duration Log"] --- MEET
    MT3["Auto Attendance"] --- MEET
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
    %% BÊN PHẢI (RIGHT SIDE - 6 FEATURES)
    %% =====================================================

    %% 8. Payroll & Invoicing
    ROOT --- PAY["Payroll & Invoicing"]
    PAY --- PY1["Automated Salary Calculation"]
    PAY --- PY2["Overtime Pay"]
    PAY --- PY3["Client Invoices Generation"]

    %% 9. Report Statistic
    ROOT --- REPORTS["Report Statistic"]
    REPORTS --- RP1["Attendance Reports"]
    REPORTS --- RP2["Productivity Analytics"]
    REPORTS --- RP3["Export PDF & Excel"]

    %% 10. Highlight Activity
    ROOT --- HIGHLIGHT["Highlight Activity"]
    HIGHLIGHT --- HL1["Key Achievements & Milestones"]
    HIGHLIGHT --- HL2["Productivity Spurt Alerts"]
    HIGHLIGHT --- HL3["Anomaly & Idle Alerts"]

    %% 11. Dashboard & Insight
    ROOT --- DASH["Dashboard & Insight"]
    DASH --- DB1["Executive HR Dashboard"]
    DASH --- DB2["Real-time Status Board"]
    DASH --- DB3["AI-Powered Insights"]

    %% 12. Project Manager
    ROOT --- PM["Project Manager"]
    PM --- PJ1["Projects & Tasks Kanban"]
    PM --- PJ2["Client Portal"]
    PM --- PJ3["Budget & Time Allocation"]

    %% 13. App & Url
    ROOT --- APPURL["App & Url"]
    APPURL --- AU1["App Classification"]
    APPURL --- AU2["Website Usage Tracking"]
    APPURL --- AU3["URL Category Limits"]

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
    class PAY colorPay
    class REPORTS colorReports
    class HIGHLIGHT colorHighlight
    class DASH colorDash
    class PM colorPM
    class APPURL colorAppUrl
```

> 📄 Xem sơ đồ luồng tại: [docs/Mindmap.md](docs/Mindmap.md)

---

## 📋 Danh Sách Tính Năng Hệ Thống (Feature Breakdown)

| 👈 **Bên Trái (Operational & Tracking)** | 👉 **Bên Phải (Management & Analytics)** |
| :--- | :--- |
| **1. Time Tracking**<br>- Desktop / Mobile Timer, Manual Timesheet, Idle Detection | **8. Payroll & Invoicing**<br>- Automated Salary Calculation, Overtime Pay, Invoices |
| **2. Productivity Monitoring**<br>- Screenshot Capture, Activity Score, Mouse/Keystroke | **9. Report Statistic**<br>- Attendance Reports, Productivity Analytics, Export PDF/Excel |
| **3. GPS & Geofencing**<br>- Real-time Location, Geofenced Attendance Check, Route Tracking | **10. Highlight Activity**<br>- Key Milestones, Productivity Spurt Alerts, Idle Alerts |
| **4. Scheduling**<br>- Weekly Shift Schedule, Drag & Drop Planner, Shift Swap | **11. Dashboard & Insight**<br>- Executive HR Dashboard, Real-time Status, AI Insights |
| **5. Meeting Tracking**<br>- Zoom/Teams Integration, Meeting Log, Auto Attendance | **12. Project Manager**<br>- Projects & Tasks Kanban, Client Portal, Budget Tracking |
| **6. Timeline**<br>- Daily Activity Stream, Work Blocks, Chronological Log | **13. App & Url**<br>- App Classification, Website Usage Tracking, Category Limits |
| **7. Worktime Expenditure**<br>- Billable Hours, Cost Per Task/Project, Overtime Budgeting | |