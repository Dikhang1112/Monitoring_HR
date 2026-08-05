# PEOPLE MANAGEMENT - DETAILED FEATURE BREAKDOWN

This document provides a detailed specification breakdown for the **People Management (Personnel & Organizational Structure)** subsystem based on `docs/mindmap/Architecture.md`.

---

## 1. MINDMAP TREE - PEOPLE MANAGEMENT

```mermaid
flowchart LR
    ROOT["1. People Management"]

    %% Branch 1: Employee Profiles
    ROOT --> PROFILES["1.1. Employee Profiles"]
    PROFILES --> P1["Personal & Contact Info (Full Name, Citizen ID, Phone, Email)"]
    PROFILES --> P2["Contract & Employment History (Probation, Official, Hire Date)"]
    PROFILES --> P3["Department & Direct Manager Assignment"]
    PROFILES --> P4["Emergency Contacts & Bank Account Details"]

    %% Branch 2: Org Structure
    ROOT --> ORG["1.2. Org Structure & Departments"]
    ORG --> O1["Interactive Multi-level Org Tree Diagram"]
    ORG --> O2["Department & Sub-unit Management (Departments & Branches)"]
    ORG --> O3["Department Head & Deputy Assignment"]
    ORG --> O4["Headcount & Roster Statistics"]

    %% Branch 3: Onboarding & Offboarding
    ROOT --> ONBOARD["1.3. Onboarding & Offboarding Workflow"]
    ONBOARD --> N1["Automated Account Provisioning (Email, HR Portal, App)"]
    ONBOARD --> N2["Equipment & Asset Handover Log (Laptops, Keycards)"]
    ONBOARD --> N3["Exit Checklist & Task Handover (Resignation Checklist)"]
    ONBOARD --> N4["Account Revocation & Data Archiving (Revoke Access & Freeze Account)"]

    %% Branch 4: Roles & Permissions
    ROOT --> RBAC["1.4. Role & Permission Management (RBAC)"]
    RBAC --> R1["Default System Roles (Admin, Director, Manager, Staff, Client)"]
    RBAC --> R2["Custom Role Group Creation (HR Officer, Finance Officer)"]
    RBAC --> R3["Action Permission Matrix (Create, Read, Update, Delete, Approve)"]
    RBAC --> R4["Data Scope Scoping (Company-wide, Department, Self-only)"]
```

---

## 2. DETAILED FEATURE SPECIFICATIONS

### 2.1. Employee Profile Management
* **Personal & Contact Details:** Manages identity records (Full Name, DOB, Gender, National ID/Passport), company email, phone number, and residential address.
* **Contract & Employment History:** Stores contract types (Probation, Fixed-term, Indefinite), start/end dates, salary increase logs, and performance records.
* **Personnel Assignment:** Assigns employees to departments/branches, configures job titles, and designates direct managers.
* **Financial & Emergency Information:** Stores direct deposit bank accounts, tax IDs, and emergency contact details.

### 2.2. Organizational Structure Setup
* **Interactive Multi-Level Org Tree:** Visualizes organizational structure from Board of Directors down to departments, divisions, and project teams.
* **Department & Branch Management:** Creates, edits, merges, or dissolves departments and branch offices.
* **Leadership Appointments:** Appoints Department Heads, Deputy Heads, and Team Leads to route approval workflows.
* **Headcount Planning:** Configures and monitors minimum/maximum headcount capacity per department.

### 2.3. Onboarding & Offboarding Workflow
* **New Hire Onboarding:**
  * Automated account provisioning (Company Email, HR Portal, Desktop/Mobile Timer App).
  * Onboarding task checklist assignment for new hires and direct managers.
  * Equipment and hardware asset handover tracking (Laptops, Monitors, Keycards, Badges).
* **Employee Offboarding:**
  * Resignation request and exit approval workflows.
  * Asset retrieval checklist and active project task handover logs.
  * Automatic account access revocation and data archiving upon official departure date.

### 2.4. Role & Permission Management (RBAC)
* **Default System Roles:**
  * `System-Admin`: Super administrator for the SaaS platform.
  * `Admin-Tenant`: Administrator for the tenant enterprise.
  * `Director`: C-Level executive (Overview reports & AI metrics).
  * `Manager`: Department Head / Project Manager (Approvals, shift planning, task assignments).
  * `Staff`: Internal employee (Time tracking, work log, leave requests).
  * `Client`: External client partner (Track progress & approve billable hours).
* **Custom Role Groups:** Allows creating custom roles such as *HR Officer*, *Payroll Accountant*, or *Inventory Manager*.
* **Granular Permission Matrix:** Configures action permissions (`Create`, `Read`, `Update`, `Delete`, `Approve`, `Export`) per feature screen.
* **Data Scoping:** Configures data visibility boundaries: *Company-wide*, *Department-only*, or *Self-only*.
