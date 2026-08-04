flowchart LR

    %% =====================================================
    %% ACTORS
    %% =====================================================
    subgraph ACTORS ["System Actors"]
        direction LR
        EMP["Employee"]
        MGR["Manager"]
        HR["HR Admin"]
        CLIENT["Client"]
    end

    %% =====================================================
    %% SYSTEM BOUNDARY & USE CASES
    %% =====================================================
    subgraph SYSTEM ["HR Management Platform"]
        direction TB

        %% Time & Productivity Module
        UC11["UC01: Clock In / Out & Timesheet"]
        UC12["UC02: Monitor Activity, Screenshots & App/URL"]
        UC13["UC03: Geofenced GPS Attendance Check-in"]

        %% Scheduling & Meetings Module
        UC21["UC04: View Schedule & Request Time-off"]
        UC22["UC05: Track, Record & Join Meetings"]
        UC23["UC06: View Daily Activity Stream Timeline"]

        %% People & Project Management Module
        UC31["UC07: Manage Employee Profiles, Org Structure & Roles"]
        UC32["UC08: Manage Project To-Do List & Kanban"]
        UC33["UC09: Track Billable Hours & Expenditure"]

        %% Payroll & Analytics Module
        UC41["UC10: Calculate Salary, Overtime & Invoices"]
        UC42["UC11: View Executive Dashboard & AI Insights"]
        UC43["UC12: Generate & Export Reports"]
    end

    %% =====================================================
    %% CONNECTIONS
    %% =====================================================
    EMP --> UC11
    EMP --> UC12
    EMP --> UC13
    EMP --> UC21
    EMP --> UC22
    EMP --> UC23

    MGR --> UC21
    MGR --> UC22
    MGR --> UC23
    MGR --> UC32
    MGR --> UC33
    MGR --> UC42
    MGR --> UC43

    HR --> UC31
    HR --> UC41
    HR --> UC42
    HR --> UC43

    CLIENT --> UC32
    CLIENT --> UC33
    CLIENT --> UC41

    %% =====================================================
    %% STYLING
    %% =====================================================
    classDef actorStyle fill:#1e293b,stroke:#0f172a,stroke-width:2px,color:#fff,font-weight:bold
    classDef ucTime fill:#0284c7,stroke:#0369a1,stroke-width:2px,color:#fff,font-weight:bold
    classDef ucSched fill:#d97706,stroke:#b45309,stroke-width:2px,color:#fff,font-weight:bold
    classDef ucPpl fill:#0891b2,stroke:#0e7490,stroke-width:2px,color:#fff,font-weight:bold
    classDef ucPay fill:#16a34a,stroke:#15803d,stroke-width:2px,color:#fff,font-weight:bold

    class EMP,MGR,HR,CLIENT actorStyle
    class UC11,UC12,UC13 ucTime
    class UC21,UC22,UC23 ucSched
    class UC31,UC32,UC33 ucPpl
    class UC41,UC42,UC43 ucPay
