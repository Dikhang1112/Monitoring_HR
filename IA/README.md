# Information Architecture & UI/UX Specifications

>  **Design & Architecture Links:**
> - **Figma UI/UX Design Wireframe**: [People Management Figma Wireframe](https://www.figma.com/design/D35Ut0x0TXeRGMjvLaNiIt/PeopleManagement?node-id=28-738&t=WYHn3MBdNy4BoqU3-0)
> - **Relume Sitemap Project**: [Monitoring HR Relume Sitemap](https://www.relume.ai/app/project/P3513106_M_AsmXcsz2LE9p9i5egRRtV2aMuaJQ4-Pj5YjjiDkKo)

---

## 🗺️ System Sitemap & Information Architecture

This document presents the official Information Architecture (IA), User Interaction Flows, and visual UI/UX specifications for the **HR Management & Productivity Platform**, covering **People Management**, **Recruitment & ATS**, **Onboarding**, and **Offboarding**.

### 1. Visual Sitemap Flowchart

![System Sitemap Diagram](Sitemap.png)

```mermaid
flowchart LR
    %% Root Navigation Shell
    ROOT["HR Platform"]

    %% Main Page Routes
    ROOT --> PPL["1. People Management"]
    ROOT --> REC["2. Recruitment & ATS"]
    ROOT --> ONB["3. Onboarding"]
    ROOT --> OFF["4. Offboarding"]

    %% 1. People Management Nodes
    PPL --> P_EMP["1.1. Employee Directory"]
    PPL --> P_ORG["1.2. Organizational Structure"]
    PPL --> P_REQ["1.3. Employee Request Management"]

    P_EMP -- "Click Employee Row" --> P_EMP_DET["Profile Detail Drawer (Contract, Personal Info, Time/Leave, Assets)"]
    P_EMP -- "Click '+ Add Employee'" --> P_EMP_ADD["Add Employee PopUp Modal"]
    
    P_ORG -- "Drag-and-Drop Org Node" --> P_ORG_CEO["CEO Approval Pending PopUp"]
    P_ORG -- "Click '+ Add Department'" --> P_ORG_DEP["Add / Edit Department Drawer"]

    P_REQ -- "Click Request Row" --> P_REQ_DET["Request Detail & Timeline Drawer"]
    P_REQ -- "Click Approve / Reject" --> P_REQ_ACT["Approve / Reject Action Modal"]

    %% 2. Recruitment & ATS Nodes
    REC --> R_JOB["2.1. Job Openings Board"]
    REC --> R_KAN["2.2. Candidate Pipeline Kanban"]
    REC --> R_INT["2.3. Interview & Offer Management"]

    R_JOB -- "Click '+ Create Requisition'" --> R_JOB_MOD["Create Job Requisition Form Modal"]
    R_KAN -- "Click Candidate Card" --> R_KAN_DET["Candidate Profile & Resume Detail Drawer"]
    R_INT -- "Click 'Schedule Interview'" --> R_INT_SCH["Schedule Interview Session Modal"]
    R_INT -- "Click 'Send Offer'" --> R_INT_OFF["Auto Send Offer Letter Modal"]

    %% 3. Onboarding Nodes
    ONB --> O_HUB["3.1. NewHire Onboarding Hub"]
    ONB --> O_AST["3.2. Asset Tracker"]
    ONB --> O_DAT["3.3. Candidate Data Conversion"]

    O_HUB --> O_HUB_MOD["Onboarding Templates & Task Sign-off"]
    O_AST --> O_AST_MOD["Assign Hardware & Software Licenses"]
    O_DAT --> O_DAT_MOD["Profile Conversion & Duplicate Check"]

    %% 4. Offboarding Nodes
    OFF --> F_RES["4.1. Resignation & Exit Requests"]
    OFF --> F_CLR["4.2. Department Clearance"]
    OFF --> F_SET["4.3. Access Revocation & Settlement"]

    F_RES --> F_RES_MOD["Resignation Form & Clearance Approval Drawer"]
    F_CLR --> F_CLR_MOD["Asset Return & Knowledge Transfer Drawer"]
    F_SET --> F_SET_MOD["Access Revocation & Final Settlement Modals"]
```

---

## 📊 2. Comprehensive Screen Mapping & User Interaction Trigger Tables

### 2.1. General Screens Mapping & Interaction Flow

| Main Screen | Main Screen Description | User Action / Trigger (Thao tác kích hoạt) | Detail Screen / PopUp / Form | Component Functionality & Description |
|---|---|---|---|---|
| **1. Home Dashboard** | Executive system dashboard displaying KPI widgets, clearance matrix, productivity analytics, task timeline, and upcoming schedule. | Click Top-Right User Avatar Profile | **1.1. User Profile Popup Menu** | Session management menu: Update Version (v2.4.0), Help & Support, Sign Out. |
| **1. Home Dashboard** | Executive system dashboard displaying KPI widgets, clearance matrix, productivity analytics, task timeline, and upcoming schedule. | Click Bell Icon in Top Bar | **1.2. Notifications Drawer** | Slide-over drawer displaying activity notifications, KPI updates, and pending task reminders. |
| **2. Login** | Authentication screen for user login into HR Platform. | Submit Credentials / Click Login | **2.1. User Authentication Form** | Authentication form with corporate email, password, Remember Me checkbox, and Forgot Password trigger. |

---

### 2.2. People Management Module Mapping & Interaction Flow

| Main Screen | Main Screen Description | User Action / Trigger (Thao tác kích hoạt) | Detail Screen / PopUp / Form | Component Functionality & Description |
|---|---|---|---|---|
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Click Any Employee Table Row | **1.1. Profile Detail View - Overview & Personal Info** | Slide-over drawer presenting personal identification, emergency contacts, national identity card, address, and bank account details. |
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Switch to 'Contract & Document' Tab in Drawer | **1.2. Profile Detail View - Contract & Document** | Slide-over drawer displaying employment contract specifications, contract type, join date, social insurance ID, and attached signed legal documents. |
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Switch to 'Time & Leave' Tab in Drawer | **1.3. Profile Detail View - Time, Leave & Attendance** | Slide-over drawer tracking annual leave quota balance, tardiness history, punctuality rate, and approved overtime (OT) hours. |
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Switch to 'Assets & Equipment' Tab in Drawer | **1.4. Profile Detail View - Asset & Equipment** | Slide-over drawer listing issued hardware assets (MacBook, monitors, peripherals) and enterprise software license accounts. |
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Click "+ Add Employee" Primary Button | **1.5. Add Employee PopUp Modal** | PopUp form for creating new employee profiles (full name, employee ID, corporate email, phone, department, role, contract type). |
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Click "Edit Profile" Action Icon | **1.6. Edit Profile Modal** | PopUp form for editing existing employee records. |
| **1. Employee Directory** | Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar. | Click "Export CSV" Button | **1.7. Export CSV Confirmation PopUp** | Confirmation popup notification for exporting employee directory dataset to CSV. |
| **2. Organization & Department** | Organizational structure & department hierarchy management: supports dual view modes (Interactive Org Tree Canvas with Drag & Drop and Department Roster Table View). | Drag-and-drop Department Node in Org Tree | **2.1. CEO Approval Pending PopUp Modal** | Notification popup triggering automatically after drag-and-drop org tree restructuring, requiring approval from CEO (Luu Duong). |
| **2. Organization & Department** | Organizational structure & department hierarchy management: supports dual view modes (Interactive Org Tree Canvas with Drag & Drop and Department Roster Table View). | Click "+ Add Department" or Edit Icon | **2.2. Add / Edit Department Drawer Form** | Drawer form for creating or editing departments (department name, parent division, department lead, branch location, annual budget $ USD, and scope). |
| **3. Request Management** | Workflow hub for receiving and reviewing employee administrative requests (annual leave, equipment requisition, department transfer, documents). | Click Any Request Row in Table | **3.1. Request Detail & Approval Timeline Drawer** | Slide-over drawer displaying request specifications, handover plan, justification, and multi-tier approval stepper progress. |
| **3. Request Management** | Workflow hub for receiving and reviewing employee administrative requests (annual leave, equipment requisition, department transfer, documents). | Click "Approve" or "Reject" Action Button | **3.2. Approve / Reject Action PopUp Modal** | PopUp modal for confirming Approve or Reject decisions with mandatory reviewer comment box. |
| **4. Create Request** | Dedicated form screen for initiating new employee HR requests. | Select Request Type Dropdown | **4.1. Multi-type Request Form Component** | Multi-type smart form allowing users to select request type (Annual Leave, Equipment, Role Transfer), set start/end dates, assign handover colleagues, and attach proof files. |
| **4. Create Request** | Dedicated form screen for initiating new employee HR requests. | Click "Submit Request" Button | **4.2. Submission Success Modal / Toast** | Confirmation toast/modal acknowledging successful request dispatch. |
| **4. Create Request** | Dedicated form screen for initiating new employee HR requests. | Click "Attach Documents" Field | **4.3. Attachment Upload Modal** | PopUp modal for picking and uploading supporting documents. |
| **5. Tracking Request** | Request status monitor tracking multi-level approval progress in real time. | Click Any Submitted Request Item | **5.1. Request Stepper Timeline View Component** | Visual stepper timeline monitor tracking the 4 approval stages (Submitted ➔ Direct Manager Review ➔ HR Sign-off ➔ Final Settlement) and audit activity log. |
| **5. Tracking Request** | Request status monitor tracking multi-level approval progress in real time. | Click "Recall Request" Button | **5.2. Recall Request Confirmation Modal** | Confirmation popup modal for recalling submitted requests before approval. |
| **5. Tracking Request** | Request status monitor tracking multi-level approval progress in real time. | Click "View Audit History" Link | **5.3. History Audit Log Drawer** | Slide-over drawer displaying chronological system audit logs for requests. |

---

### 2.3. Recruitment & ATS Module Mapping & Interaction Flow

| Main Screen | Main Screen Description | User Action / Trigger (Thao tác kích hoạt) | Detail Screen / PopUp / Form | Component Functionality & Description |
|---|---|---|---|---|
| **1. Job Openings Board** | Master requisition management board tracking active hiring quotas, department openings, salary ranges, and applicant counts. | Click "+ Create Job Requisition" Button | **1.1. Create Job Requisition Form Modal** | Form modal for submitting new hiring proposals, target headcount quotas, and job descriptions for management approval. |
| **2. Candidate Pipeline Kanban** | Drag-and-drop Kanban board tracking applicants across evaluation stages (Applied ➔ Screening ➔ Tech Interview ➔ Manager Interview ➔ Offer ➔ Hired). | Click Any Candidate Card on Kanban Board | **2.1. Candidate Profile Detail Drawer** | Slide-over drawer presenting candidate resume parsing, AI match score, evaluator scorecards, and stage activity log. |
| **2. Candidate Pipeline Kanban** | Drag-and-drop Kanban board tracking applicants across evaluation stages (Applied ➔ Screening ➔ Tech Interview ➔ Manager Interview ➔ Offer ➔ Hired). | Click "+ Add Candidate" Primary Button | **2.2. Add Candidate Modal (AI Resume Parser)** | Modal form with drag-and-drop CV/Resume upload (PDF/DOCX), automated AI information parsing, and manual edit controls for candidate profile fields. |
| **3. Interview & Offer Management** | Interview scheduling hub and digital offer letter e-signature tracking board. | Click "Schedule Interview" Action Button | **3.1. Schedule Interview Session Modal** | Modal for scheduling panel interviews with Google Calendar & Outlook meeting link integration. |
| **3. Interview & Offer Management** | Interview scheduling hub and digital offer letter e-signature tracking board. | Click "Send Offer Letter" Action Button | **3.2. Auto Send Offer Letter Modal** | Modal for generating and dispatching digital employment offer letters with automated e-signature tracking. |

### 2.3. Module 3: Onboarding & New Hire Management

| Main Screen | Main Screen Description | User Action / Trigger (Thao tác kích hoạt) | Detail Screen / PopUp / Form | Component Functionality & Description |
|---|---|---|---|---|
| **1. New Hire Onboarding Hub** | Master onboarding dashboard tracking new hires across stages (Pre-boarding ➔ Orientation ➔ IT Setup ➔ Department Integration ➔ 30-60-90 Review). | Click "View Checklist" Action Button on New Hire Row | **1.1. Onboarding Task Sign-off Checklist Drawer** | Slide-over drawer presenting step-by-step orientation checklist, mentor assignment, document uploads, and task completion sign-off. |
| **1. New Hire Onboarding Hub** | Master onboarding dashboard tracking new hires across stages (Pre-boarding ➔ Orientation ➔ IT Setup ➔ Department Integration ➔ 30-60-90 Review). | Click "+ Create Onboarding Plan" Button | **1.2. Create Onboarding Plan Template Modal** | Form modal for creating or editing department-specific onboarding task templates (e.g. Engineering 30-60-90 Day Plan). |
| **2. Asset & License Tracker** | IT equipment and enterprise SaaS license provisioning board for new hires. | Click "+ Assign Asset & License" Button | **2.1. Assign Hardware & Software License Modal** | Form modal for assigning specific laptop serial numbers, peripherals, and SaaS account credentials (Google, Slack, Jira, Figma) to new hires. |
| **2. Asset & License Tracker** | IT equipment and enterprise SaaS license provisioning board for new hires. | Click "Manage" Button on SaaS Product Row | **2.2. Manage Enterprise SaaS Products Modal** | Interactive modal form for adding new company SaaS subscriptions or removing active software licenses with real-time seat capacity editing. |
| **3. Candidate Data Conversion** | Workspace for converting offer-accepted candidates into official HR Directory employee records. | Click "Convert to Employee" Action Button | **3.1. Candidate Profile Data Conversion Modal** | Confirmation modal displaying mapped fields from ATS candidate record to official HR Employee Directory record with automated duplicate check. |

---

## 📸 3. UI/UX Screen Showcase & Detail Components

### 3.1. General Screens Showcase

#### 3.1.1. Home Dashboard
Executive system dashboard displaying KPI widgets, clearance matrix, productivity analytics, task timeline, and upcoming schedule.

![Home Dashboard](../ui_ux/Home.png)

---

#### 3.1.2. Login Page
Authentication screen for user login into HR Platform.

![Login Page](../ui_ux/Login.png)

---

### 3.2. People Management Module Showcase

#### 3.2.1. Employee Directory
Master company-wide workforce directory featuring tabular roster, department filter, employment status filter, and real-time search bar.

![Employee Directory](../ui_ux/people_management/EmployeeDirectory.png)

##### 🔹 Sub-components & Interaction Triggers:

- **1.1. Profile Detail View Drawer - Tab 1: Overview & Personal Info**  
  *Trigger:* Click any employee row in the directory table.  
  *Description:* Slide-over drawer presenting personal identification, emergency contacts, national identity card, address, and bank account details.  
  ![Profile Detail Overview](../ui_ux/people_management/EmployeeProfileDetail_Overview.png)

- **1.2. Profile Detail View Drawer - Tab 2: Contract & Document**  
  *Trigger:* Switch to 'Contract & Document' tab inside profile drawer.  
  *Description:* Slide-over drawer displaying employment contract specifications, contract type, join date, social insurance ID, and attached signed legal documents.  
  ![Profile Detail Contract](../ui_ux/people_management/EmployeeProfileDetail_Contract.png)

- **1.3. Profile Detail View Drawer - Tab 3: Time, Leave & Attendance**  
  *Trigger:* Switch to 'Time, Leave & Attendance' tab inside profile drawer.  
  *Description:* Slide-over drawer tracking annual leave quota balance, tardiness history, punctuality rate, and approved overtime (OT) hours.  
  ![Profile Detail Time Leave](../ui_ux/people_management/EmployeeProfileDetail_TimeLeave.png)

- **1.4. Profile Detail View Drawer - Tab 4: Asset & Equipment**  
  *Trigger:* Switch to 'Asset & Equipment' tab inside profile drawer.  
  *Description:* Slide-over drawer listing issued hardware assets (MacBook, monitors, peripherals) and enterprise software license accounts.  
  ![Profile Detail Assets](../ui_ux/people_management/EmployeeProfileDetail_Assets.png)

- **1.5. Add Employee PopUp Modal**  
  *Trigger:* Click "+ Add Employee" primary button on top right of directory.  
  *Description:* PopUp form for creating new employee profiles (full name, employee ID, corporate email, phone, department, role, contract type).  
  ![Add Employee Modal](../ui_ux/people_management/AddEmployeeModal.png)

---

#### 3.2.2. Organization & Department
Organizational structure & department hierarchy management: supports dual view modes (Interactive Org Tree Canvas with Drag & Drop and Department Roster Table View).

![Organization & Department](../ui_ux/people_management/OrgDepartment.png)

##### 🔹 Sub-components & Interaction Triggers:

- **2.1. CEO Approval Pending PopUp Modal**  
  *Trigger:* Drag-and-drop department node in org tree canvas to restructure division.  
  *Description:* Notification popup triggering automatically after drag-and-drop org tree restructuring, requiring approval from CEO (Luu Duong).  
  ![CEO Approval Modal](../ui_ux/people_management/CeoApprovalModal.png)

- **2.2. Add / Edit Department Drawer Form**  
  *Trigger:* Click "+ Add Department" button or click edit icon on department node.  
  *Description:* Drawer form for creating or editing departments (department name, parent division, department lead, branch location, annual budget $ USD, and scope).  
  ![Add Department Drawer](../ui_ux/people_management/AddDepartmentDrawer.png)

---

#### 3.2.3. Request Management
Workflow hub for receiving and reviewing employee administrative requests (annual leave, equipment requisition, department transfer, documents).

![Request Management](../ui_ux/people_management/RequestManagement.png)

##### 🔹 Sub-components & Interaction Triggers:

- **3.1. Request Detail & Approval Timeline Drawer**  
  *Trigger:* Click any request row in request management table.  
  *Description:* Slide-over drawer displaying request specifications, handover plan, justification, and multi-tier approval stepper progress.  
  ![Request Detail Drawer](../ui_ux/people_management/RequestDetailDrawer.png)

- **3.2. Approve / Reject Action PopUp Modal**  
  *Trigger:* Click "Approve" or "Reject" action button inside request detail drawer.  
  *Description:* PopUp modal for confirming Approve or Reject decisions with mandatory reviewer comment box.  
  ![Approve Reject Modal](../ui_ux/people_management/ApproveRejectModal.png)

---

#### 3.2.4. Create Request
Dedicated form screen for initiating new employee HR requests.

![Create Request Page](../ui_ux/people_management/CreateRequest.png)

##### 🔹 Sub-components & Interaction Triggers:

- **4.1. Multi-type Request Form Component**  
  *Trigger:* Select request type (Annual Leave, Equipment, Transfer) from dropdown.  
  *Description:* Multi-type smart form allowing users to select request type (Annual Leave, Equipment, Role Transfer), set start/end dates, assign handover colleagues, and attach proof files.  
  ![Create Request Form](../ui_ux/people_management/CreateRequestForm.png)

---

#### 3.2.5. Tracking Request
Request status monitor tracking multi-level approval progress in real time.

![Tracking Request Page](../ui_ux/people_management/TrackingRequest.png)

##### 🔹 Sub-components & Interaction Triggers:

- **5.1. Request Stepper Timeline Component**  
  *Trigger:* Click any request item on tracking monitor list.  
  *Description:* Visual stepper timeline monitor tracking the 4 approval stages (Submitted ➔ Direct Manager Review ➔ HR Sign-off ➔ Final Settlement) and audit activity log.  
  ![Tracking Request Timeline](../ui_ux/people_management/TrackingRequestTimeline.png)

---

### 3.3. Recruitment & ATS Module Showcase

#### 3.3.1. Job Openings Board
Master requisition management board tracking active hiring quotas, department openings, salary ranges, and applicant counts.

![Job Openings Board](../ui_ux/recruitment/JobOpenings.png)

##### 🔹 Sub-components & Interaction Triggers:

- **1.1. Create Job Requisition Form Modal**  
  *Trigger:* Click "+ Create Job Requisition" primary button on top right of board.  
  *Description:* Form modal for submitting new hiring proposals, target headcount quotas, and job descriptions for management approval.  
  ![Create Job Requisition Modal](../ui_ux/recruitment/JobRequisitionModal.png)

---

#### 3.3.2. Candidate Pipeline Kanban
Drag-and-drop Kanban board tracking applicants across evaluation stages (Applied ➔ Screening ➔ Tech Interview ➔ Manager Interview ➔ Offer ➔ Hired).

![Candidate Pipeline Kanban](../ui_ux/recruitment/CandidatePipeline.png)

##### 🔹 Sub-components & Interaction Triggers:

- **2.1. Candidate Profile Detail Drawer**  
  *Trigger:* Click any candidate card on the Kanban evaluation stage column.  
  *Description:* Slide-over drawer presenting candidate resume parsing, AI match score, evaluator scorecards, and stage activity log.  
  ![Candidate Profile Detail Drawer](../ui_ux/recruitment/CandidateProfileDrawer.png)

- **2.2. Add Candidate Modal (AI Resume Parser)**  
  *Trigger:* Click "+ Add Candidate" primary button on top right of candidate pipeline.  
  *Description:* Interactive modal featuring drag-and-drop CV/Resume upload (PDF/DOCX), real-time AI auto-parsing into profile fields, and manual edit controls for all extracted data before saving.  
  ![Add Candidate Modal](../ui_ux/recruitment/AddCandidateModal.png)

---

#### 3.3.3. Interview & Offer Management
Interview scheduling hub and digital offer letter e-signature tracking board.

![Interview & Offer Management](../ui_ux/recruitment/InterviewOffer.png)

##### 🔹 Sub-components & Interaction Triggers:

- **3.1. Schedule Interview Session Modal**  
  *Trigger:* Click "Schedule Interview" action button on candidate row.  
  *Description:* Modal for scheduling panel interviews with Google Calendar & Outlook meeting link integration.  
  ![Schedule Interview Modal](../ui_ux/recruitment/ScheduleInterviewModal.png)

- **3.2. Auto Send Offer Letter Modal**  
  *Trigger:* Click "Send Offer Letter" action button on offer stage row.  
  *Description:* Modal for generating and dispatching digital employment offer letters with automated e-signature tracking.  
  ![Auto Send Offer Letter Modal](../ui_ux/recruitment/SendOfferModal.png)

---

### 3.4. Module 3: Onboarding & New Hire Management Showcase

#### 3.4.1. New Hire Onboarding Hub
Master onboarding dashboard tracking new hires across orientation, IT setup, and milestone stages.

![New Hire Onboarding Hub](../ui_ux/onboarding/NewHireOnboarding.png)

##### 🔹 Sub-components & Interaction Triggers:

- **1.1. Onboarding Task Sign-off Checklist Drawer**  
  *Trigger:* Click "View Checklist" action button on new hire row.  
  *Description:* Slide-over drawer presenting step-by-step orientation checklist, mentor assignment, document uploads, and task completion sign-off.  
  ![Onboarding Task Sign-off Checklist Drawer](../ui_ux/onboarding/OnboardingChecklistDrawer.png)

- **1.2. Create Onboarding Plan Template Modal**  
  *Trigger:* Click "+ Create Onboarding Plan" button on header.  
  *Description:* Form modal for creating or editing department-specific onboarding task templates.  
  ![Create Onboarding Plan Template Modal](../ui_ux/onboarding/OnboardingTemplateModal.png)

---

#### 3.4.2. IT Asset & Software License Tracker
IT equipment and enterprise SaaS license provisioning board for new hires.

![IT Asset & License Tracker](../ui_ux/onboarding/AssetTracker.png)

##### 🔹 Sub-components & Interaction Triggers:

- **2.1. Assign Hardware & Software License Modal**  
  *Trigger:* Click "+ Assign Asset & License" action button.  
  *Description:* Form modal for assigning specific laptop serial numbers, peripherals, and SaaS account credentials (Google, Slack, Jira, Figma) to new hires.  
  ![Assign Hardware & Software License Modal](../ui_ux/onboarding/AssignAssetModal.png)

- **2.2. Manage Enterprise SaaS Products Modal**  
  *Trigger:* Click "Manage" action button on any SaaS software row.  
  *Description:* Centered inline modal form allowing HR/IT managers to add new SaaS software subscriptions or remove active company software licenses with real-time capacity editing.  
  ![Manage Enterprise SaaS Products Modal](../ui_ux/onboarding/ManageSaaSModal.png)

---

#### 3.4.3. Candidate-to-Employee Data Conversion
Workspace for converting offer-accepted candidates into official HR Directory employee records.

![Candidate Data Conversion](../ui_ux/onboarding/CandidateDataConversion.png)

##### 🔹 Sub-components & Interaction Triggers:

- **3.1. Candidate Profile Data Conversion Modal**  
  *Trigger:* Click "Convert to Employee" action button on candidate row.  
  *Description:* Confirmation modal displaying mapped fields from ATS candidate record to official HR Employee Directory record with automated duplicate check.  
  ![Candidate Profile Data Conversion Modal](../ui_ux/onboarding/ProfileConversionModal.png)
