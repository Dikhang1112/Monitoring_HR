# HR MANAGEMENT PLATFORM - CORE USE CASES

This document condenses the most critical Use Cases extracted from the system specification, focusing on the core Use Case list for the High-Level Use Case Diagram.

---

## 1. TOP 12 CORE USE CASES SPECIFICATIONS

| UC ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-01** | Tenant Provisioning & Subscription | System & Tenant Admin | System-Admin | System | Initializes new tenant organizations, provisions primary Admin-Tenant credentials, and manages resource quota caps. |
| **UC-CORE-02** | Employee Profiles & Role RBAC | People Management | Admin-Tenant | Manager | Manages employee personal details, contracts, department assignments, and configures custom RBAC permissions. |
| **UC-CORE-03** | Work Timer Clock In/Out | Time Tracking | Staff | System | Toggles work timers on desktop client apps to record actual working hours and automated idle detection. |
| **UC-CORE-04** | Geofenced GPS Check-in | GPS & Geofencing | Staff | System | Restricts clock-in/out functionality to designated GPS coordinates and branch perimeter radii. |
| **UC-CORE-05** | Screenshot & Activity Tracking | Productivity Monitoring | System | Manager, Staff | Captures screen activity at random intervals and calculates weighted Activity Score (%). |
| **UC-CORE-06** | App & Website Classification | App & URL Classification | Admin-Tenant | Manager | Categorizes software and domain URLs into Productive, Unproductive, or Neutral status. |
| **UC-CORE-07** | Shift & Work Schedule Planning | Scheduling | Manager | Staff | Assigns weekly shift patterns, work locations (Onsite/Remote), and coverage plans. |
| **UC-CORE-08** | Time-off Request & Approval | Scheduling & Leave | Staff | Manager | Submits annual, sick, or personal leave requests for manager approval workflows. |
| **UC-CORE-09** | Project Task & Kanban Management | Project Management | Manager | Staff, Client | Manages project task lists, Kanban boards, task assignments, and estimated hours. |
| **UC-CORE-10** | Billable Hours & Cost Tracking | Worktime Expenditure | Staff | Manager, Client | Flags client-billable work hours and converts logged employee work time into project cost metrics. |
| **UC-CORE-11** | Automated Payroll & Overtime | Payroll & Invoicing | Admin-Tenant | System | Generates salary sheets automatically using timesheet data, shifts, and overtime multiplier rules. |
| **UC-CORE-12** | Executive Dashboard & AI Insights | Dashboard & Insights | Director | Manager | Displays executive-level KPIs, company-wide productivity trends, and AI turnover risk predictions. |

---

## 2. ACTOR & CORE USE CASE ALLOCATION MATRIX

| Actor | Actor Name | Priority Level | Direct Core Use Cases List |
| :--- | :--- | :---: | :--- |
| **ACT-01** | **System-Admin** | High | UC-CORE-01 |
| **ACT-02** | **Admin-Tenant (HR)** | High | UC-CORE-02, UC-CORE-06, UC-CORE-11 |
| **ACT-03** | **Director** | High | UC-CORE-10, UC-CORE-12 |
| **ACT-04** | **Manager** | High | UC-CORE-05, UC-CORE-06, UC-CORE-07, UC-CORE-08, UC-CORE-09, UC-CORE-10, UC-CORE-12 |
| **ACT-05** | **Staff (Employee)** | High | UC-CORE-03, UC-CORE-04, UC-CORE-05, UC-CORE-07, UC-CORE-08, UC-CORE-09, UC-CORE-10 |
| **ACT-06** | **Client** | Medium | UC-CORE-09, UC-CORE-10 |

---

## 3. SYSTEM OVERVIEW MERMAID USE CASE DIAGRAM

```mermaid
flowchart LR

    %% =====================================================
    %% ACTORS
    %% =====================================================
    subgraph ACTORS ["System Actors"]
        direction TB
        SA["System-Admin"]
        HR["Admin-Tenant (HR)"]
        DIR["Director"]
        MGR["Manager"]
        EMP["Staff (Employee)"]
        CLI["Client"]
    end

    %% =====================================================
    %% SYSTEM BOUNDARY & CORE USE CASES
    %% =====================================================
    subgraph SYSTEM ["HR Management Platform Boundary"]
        direction TB

        %% Admin Module
        subgraph MOD_ADMIN ["1. System & Org Setup"]
            UC01("(UC-CORE-01) Tenant & Subscription Management")
            UC02("(UC-CORE-02) Employee Profiles & Roles RBAC")
        end

        %% Time & GPS Module
        subgraph MOD_TIME ["2. Attendance & GPS Tracking"]
            UC03("(UC-CORE-03) Work Timer Clock In/Out")
            UC04("(UC-CORE-04) Geofenced GPS Check-in")
        end

        %% Productivity Module
        subgraph MOD_PROD ["3. Productivity & Monitoring"]
            UC05("(UC-CORE-05) Screenshot & Activity Tracking")
            UC06("(UC-CORE-06) App & Website Classification")
        end

        %% Schedule & Project Module
        subgraph MOD_WORK ["4. Schedule, Leave & Project"]
            UC07("(UC-CORE-07) Shift & Work Schedule Planning")
            UC08("(UC-CORE-08) Time-off Request & Approval")
            UC09("(UC-CORE-09) Project Task & Kanban Management")
            UC10("(UC-CORE-10) Billable Hours & Cost Tracking")
        end

        %% Payroll & Executive Module
        subgraph MOD_PAY ["5. Payroll & Executive Insights"]
            UC11("(UC-CORE-11) Automated Payroll & Overtime")
            UC12("(UC-CORE-12) Executive Dashboard & AI Insights")
        end
    end

    %% =====================================================
    %% CONNECTIONS (ACTOR TO USE CASES)
    %% =====================================================
    SA --> UC01

    HR --> UC02
    HR --> UC06
    HR --> UC11

    DIR --> UC10
    DIR --> UC12

    MGR --> UC05
    MGR --> UC06
    MGR --> UC07
    MGR --> UC08
    MGR --> UC09
    MGR --> UC10
    MGR --> UC12

    EMP --> UC03
    EMP --> UC04
    EMP --> UC05
    EMP --> UC07
    EMP --> UC08
    EMP --> UC09
    EMP --> UC10

    CLI --> UC09
    CLI --> UC10

    %% =====================================================
    %% STYLING
    %% =====================================================
    classDef actorStyle fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff,font-weight:bold
    classDef modAdmin fill:#1e1b4b,stroke:#818cf8,stroke-width:1.5px,color:#e0e7ff
    classDef modTime fill:#064e3b,stroke:#34d399,stroke-width:1.5px,color:#d1fae5
    classDef modProd fill:#701a75,stroke:#f0abfc,stroke-width:1.5px,color:#fdf4ff
    classDef modWork fill:#7c2d12,stroke:#fb923c,stroke-width:1.5px,color:#ffedd5
    classDef modPay fill:#14532d,stroke:#4ade80,stroke-width:1.5px,color:#dcfce7

    class SA,HR,DIR,MGR,EMP,CLI actorStyle
    class UC01,UC02 modAdmin
    class UC03,UC04 modTime
    class UC05,UC06 modProd
    class UC07,UC08,UC09,UC10 modWork
    class UC11,UC12 modPay
```
