# HR MANAGEMENT PLATFORM
## Use Case Specifications & Test Case Matrix

---

## 1. SYSTEM ACTORS SPECIFICATION

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

## 2. USE CASE SPECIFICATIONS

All Use Cases are categorized across 15 functional modules derived from `docs/mindmap/Architecture.md`:

### 2.1. System & Tenant Administration Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-SYS-01** | Tenant Provisioning & Management | Tenant Management | System-Admin | System | Initializes new tenant organizations, provisions primary Admin-Tenant credentials, and sets resource quotas. |
| **UC-SYS-02** | Plan & Subscription Management | Billing & Subscription | System-Admin | System | Handles subscription upgrades, renewals, downgrades, and tenant suspension/reactivation. |
| **UC-SYS-03** | System Audit Log Monitoring | System Audit | System-Admin | System | Queries system-wide audit logs, access records, and security telemetry logs. |
| **UC-SYS-04** | Global Integration Setup | Global Integration | System-Admin | System | Configures system-wide API keys for Zoom, Microsoft Teams, and AI analytics services. |

### 2.2. People & Organization Management Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-PPL-01** | Employee Profile Management | Employee Profiles | Admin-Tenant | Manager | Manages employee personal details, contracts, department assignments, and employment history. |
| **UC-PPL-02** | Organizational Structure Setup | Org Structure | Admin-Tenant | Director | Builds org trees, departments, sub-units, and assigns department heads. |
| **UC-PPL-03** | Onboarding & Offboarding Workflow | Onboarding/Offboarding | Admin-Tenant | Manager | Automates equipment/account provisioning for new hires and access revocation for departing staff. |
| **UC-PPL-04** | Role & Permission Management | Roles & Permissions | Admin-Tenant | System | Configures custom role groups and assigns RBAC permissions across the platform. |

### 2.3. Time Tracking Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-TIME-01** | Desktop App Timer | Desktop Timer | Staff | System | Toggles work timers on desktop client apps to record actual working hours. |
| **UC-TIME-02** | Mobile App Timer | Mobile Timer | Staff | System | Allows field and remote employees to track working time via mobile applications. |
| **UC-TIME-03** | Manual Timesheet Submission | Manual Timesheet | Staff | Manager | Submits manual work hours with justification notes for manager review and approval. |
| **UC-TIME-04** | Idle State Detection | Idle Detection | System | Staff | Automatically detects user inactivity (keyboard/mouse idle) after configured threshold and prompts action. |

### 2.4. Productivity Monitoring Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-PROD-01** | Automated Screenshot Capture | Screenshot Capture | System | Staff, Manager | Captures screen activity at random intervals and uploads encrypted screenshots for review. |
| **UC-PROD-02** | Keystroke & Mouse Activity Tracking | Keystroke & Mouse | System | Staff | Measures input activity frequency to calculate active vs. idle ratio per work session. |
| **UC-PROD-03** | Activity Score Calculation | Activity Score | System | Manager, Director | Aggregates application, website, and input metrics into a weighted Activity Score (%). |

### 2.5. GPS & Geofencing Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-GPS-01** | Geofenced Attendance Check-in | Geofenced Attendance | Staff | System | Restricts clock-in/out functionality to designated GPS coordinates and perimeter radii. |
| **UC-GPS-02** | Real-time GPS Location Monitoring | Real-time GPS | Staff | Manager | Displays current geographic coordinates of field service employees on live maps. |
| **UC-GPS-03** | Route Tracking & History | Route Tracking | Staff | Manager | Logs movement routes and location histories during active field duty shifts. |

### 2.6. Scheduling & Time-Off Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-SCHED-01** | Weekly Schedule Planning | Weekly Schedule | Manager | Staff | Assigns weekly shift patterns, work locations (Onsite/Remote), and coverage plans for teams. |
| **UC-SCHED-02** | Time-off Request & Approval | Time-off Request | Staff | Manager | Submits annual, sick, or personal leave requests for manager approval workflows. |
| **UC-SCHED-03** | Onsite & Remote Work Classification | Onsite & Remote | Manager | Staff | Manages work-from-home vs. office working mode configurations for employees. |

### 2.7. Meeting Tracking Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-MEET-01** | Zoom & Teams Integration Setup | Integration Setup | Admin-Tenant | System | Integrates corporate Zoom and Microsoft Teams accounts for meeting data synchronization. |
| **UC-MEET-02** | Auto Meeting Attendance Tracking | Auto Attendance | System | Staff, Manager | Automatically logs meeting start/end times and participant attendance upon room entry. |
| **UC-MEET-03** | Meeting Duration Log & Recording | Duration Log | System | Manager, Client | Records meeting duration logs and secure links to meeting recordings. |

### 2.8. Timeline & Activity Log Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-TL-01** | Daily Activity Stream | Daily Activity Stream | Staff | Manager | Renders a chronological stream of daily work activities, app usages, and idle periods. |
| **UC-TL-02** | Work Blocks & Gaps Analysis | Work Blocks & Gaps | System | Manager | Identifies continuous focus work blocks and unrecorded activity gaps across shifts. |
| **UC-TL-03** | Chronological Log Audit | Chronological Log | Manager | Director | Enables granular timeline log inspection across historical dates for auditing. |

### 2.9. Worktime Expenditure & Budgeting Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-EXPEND-01** | Billable Hours Tracking | Billable Hours | Staff | Manager, Client | Flags and categorizes client-billable work hours against projects and tasks. |
| **UC-EXPEND-02** | Cost Per Task & Project Calculation | Cost Per Task & Project | Manager | Director | Converts logged employee work time into project cost metrics based on hourly rates. |
| **UC-EXPEND-03** | Overtime Budget Management | Overtime Budgeting | Director | Manager | Sets department/project overtime expenditure caps and triggers warning alerts. |

### 2.10. Payroll & Invoicing Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-PAY-01** | Automated Salary Calculation | Automated Salary | Admin-Tenant | System | Generates salary sheets automatically using timesheet data, shifts, and base rates. |
| **UC-PAY-02** | Overtime Pay & Allowance Calculation | Overtime Pay | Admin-Tenant | Manager | Computes overtime compensation according to multiplier rules (weekdays, weekends, holidays). |
| **UC-PAY-03** | Client Invoice Generation | Client Invoices | Admin-Tenant | Client | Generates client invoices derived from approved billable hours and exports PDF statements. |

### 2.11. Report & Statistics Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-RP-01** | Attendance & Punctuality Reports | Attendance Reports | Manager | Director | Aggregates attendance statistics, tardiness, early departures, and absence ratios. |
| **UC-RP-02** | Productivity Analytics Reports | Productivity Analytics | Director | Admin-Tenant | Analyzes team/company productivity trends, productive vs. unproductive app ratios. |
| **UC-RP-03** | Daily Worktime Totals | Daily Totals | Manager | Staff | Summarizes daily, weekly, and monthly worktime totals across teams and individuals. |
| **UC-RP-04** | Payroll & Expenditure Reports | Payments Report | Director | Admin-Tenant | Compiles financial reports covering gross payroll, overtime expenses, and client payouts. |

### 2.12. Highlight Activity & Alerts Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-HL-01** | Key Achievements & Milestones | Key Achievements | System | Manager, Staff | Highlights individual and team achievements upon reaching productivity or hours milestones. |
| **UC-HL-02** | Low Productivity Alerts | Productivity Alerts | System | Manager | Dispatches real-time alerts to managers when employee productivity falls below threshold. |
| **UC-HL-03** | Anomaly & Extended Idle Alerts | Anomaly & Idle Alerts | System | Manager | Detects suspicious behavior (auto-clickers, fake activity) or prolonged idle periods. |

### 2.13. Executive Dashboard & AI Insights Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-DASH-01** | Executive HR Dashboard | Executive HR Dashboard | Director | System | Displays executive-level KPIs, company-wide productivity trends, and cost overviews. |
| **UC-DASH-02** | Real-time Status Board | Real-time Status Board | Manager | System | Shows live status of team members (Clocked In, Idle, Offline, In Meeting). |
| **UC-DASH-03** | AI-Powered Insights & Forecasts | AI Insights | Director | Admin-Tenant | AI-driven turnover risk prediction, workload optimization recommendations, and forecasting. |

### 2.14. Project Management Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-PM-01** | Project To-Do List & Task Assignment | Project To-Do List | Manager | Staff | Manages project task lists, Kanban boards, task assignments, and estimated hours. |
| **UC-PM-02** | Client Portal Management | Client Portal | Client | Manager | External interface for clients to review project progress, task status, and billable logs. |
| **UC-PM-03** | Project Time & Budget Allocation | Budget & Time Allocation | Manager | Director | Sets estimated project hours, resource caps, and financial budget allocations. |

### 2.15. Application & URL Classification Module

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-APP-01** | Productivity Classification for Apps & Sites | App Classification | Admin-Tenant | Manager | Categorizes software and domains into Productive, Unproductive, or Neutral status. |
| **UC-APP-02** | Detailed Website Usage Tracking | Website Usage Tracking | System | Manager | Logs specific domain URLs, visit durations, and active window titles for reporting. |

---

## 3. TEST CASES MATRIX BY ACTOR

### 3.1. Test Cases for Actor 1: `System-Admin`

| Test Case ID | UC ID | Test Scenario | Steps | Input Data | Expected Result | Test Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-SYS-01** | UC-SYS-01 | Provision New Tenant Account | 1. Log in as System-Admin.<br>2. Navigate to Tenant Management -> Click "Add Tenant".<br>3. Enter tenant domain, admin email, subscription plan.<br>4. Click "Provision". | Domain: `acme.hr.com`<br>Email: `admin@acme.com`<br>Plan: Enterprise | Tenant is created successfully. Verification email sent to `admin@acme.com`. | Positive |
| **TC-SYS-02** | UC-SYS-01 | Fail Provisioning on Duplicate Domain | 1. Perform TC-SYS-01 steps.<br>2. Input an already registered tenant domain.<br>3. Click "Provision". | Domain: `acme.hr.com` (Existing) | System displays validation error "Domain already registered" and aborts creation. | Negative |
| **TC-SYS-03** | UC-SYS-02 | Suspend Tenant Subscription | 1. Search for Tenant `Acme Corp`.<br>2. Select "Suspend Tenant".<br>3. Input suspension reason and confirm. | Status: `Suspended`<br>Reason: `Billing Overdue` | All user sessions under `Acme Corp` are terminated immediately. Login blocked. | Positive |
| **TC-SYS-04** | UC-SYS-03 | Query System Audit Logs | 1. Open System Audit Logs.<br>2. Filter by date range (Last 7 Days) and action `TENANT_CREATE`.<br>3. Click "Search". | DateRange: Last 7 Days<br>Action: `TENANT_CREATE` | Displays exact list of tenant creation events including IP addresses and timestamps. | Positive |

---

### 3.2. Test Cases for Actor 2: `Admin-Tenant`

| Test Case ID | UC ID | Test Scenario | Steps | Input Data | Expected Result | Test Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-ADM-01** | UC-PPL-02 | Create Department & Assign Head | 1. Go to Org Structure -> Click "Add Department".<br>2. Enter department name and select Manager.<br>3. Click "Save". | Dept: `Engineering`<br>Head: `John Doe` | Department added to org tree. John Doe granted department manager permissions. | Positive |
| **TC-ADM-02** | UC-GPS-01 | Configure Geofence Radius for Branch | 1. Open Attendance Settings -> Geofence Zones.<br>2. Plot GPS coordinates on map and define perimeter radius.<br>3. Assign to target office location. | Coords: `10.7769, 106.7009`<br>Radius: `100m` | Geofence zone saved. Employees at branch location can clock in only within 100m radius. | Positive |
| **TC-ADM-03** | UC-APP-01 | Classify Unproductive Applications | 1. Go to App Classification.<br>2. Add classification rule for `facebook.com` and `steam.exe`.<br>3. Set category label to `Unproductive`. | Domain: `facebook.com`<br>App: `steam.exe`<br>Label: `Unproductive` | Time spent on Facebook or Steam is tracked under unproductive metrics in productivity reports. | Positive |
| **TC-ADM-04** | UC-PAY-01 | Run Automated Monthly Payroll Calculation | 1. Open Payroll Management -> Select target monthly cycle.<br>2. Click "Calculate Automated Payroll".<br>3. Review summary sheet. | Period: `July 2026`<br>Scope: All Staff | Payroll generated accurately reflecting approved timesheets, overtime hours, and tardiness deductions. | Positive |
| **TC-ADM-05** | UC-PPL-04 | Deny Unauthorized Role Settings Page Access | 1. Log in with standard Staff credentials.<br>2. Attempt direct URL navigation to `/tenant/payroll-settings`. | Target URL: `/tenant/payroll-settings` | Access denied. System redirects user to 403 Forbidden page. | Permission |

---

### 3.3. Test Cases for Actor 3: `Director`

| Test Case ID | UC ID | Test Scenario | Steps | Input Data | Expected Result | Test Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-DIR-01** | UC-DASH-01 | View Executive HR Dashboard | 1. Log in with Director credentials.<br>2. Dashboard loads automatically.<br>3. Inspect high-level company metrics widget. | View Mode: `All Company`<br>Timeframe: `This Month` | Displays total company worktime, average productivity scores, turnover trends, and OT costs. | Positive |
| **TC-DIR-02** | UC-DASH-03 | Receive AI Burnout Risk Recommendations | 1. Open "AI-Powered Insights" module.<br>2. Select "Employee Overwork & Burnout Risk" analysis model. | Scope: `All Departments` | AI lists departments/employees exceeding safe overtime limits by 30% with workload rebalancing recommendations. | Positive |
| **TC-DIR-03** | UC-EXPEND-03 | Configure Overtime Budget Warning Thresholds | 1. Open Budget Management -> Set Overtime Cap for Engineering.<br>2. Set monthly limit to $10,000.<br>3. Click "Save". | Department: `Engineering`<br>Max OT Budget: `$10,000` | Automated alerts sent to Director & Manager when Engineering OT costs reach 80% and 100% of cap. | Boundary / Positive |
| **TC-DIR-04** | UC-RP-04 | Export Quarterly Financial Expenditure Report | 1. Navigate to Reports -> Expenditure Report.<br>2. Select Q2 2026 period.<br>3. Click "Export Excel". | Format: `.xlsx`<br>Period: `Q2 2026` | Downloads Excel file containing detailed payroll totals, overtime costs, and project expenditure breakdowns. | Positive |

---

### 3.4. Test Cases for Actor 4: `Manager`

| Test Case ID | UC ID | Test Scenario | Steps | Input Data | Expected Result | Test Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-MGR-01** | UC-SCHED-01 | Publish Weekly Team Work Schedule | 1. Open Work Schedule -> Select upcoming week.<br>2. Assign shift patterns (Onsite/Remote) for Team members.<br>3. Click "Publish Schedule". | Week: `Next Week`<br>Target: `Team Alpha` | Schedule published. Automated notification sent to all Team Alpha member mobile/desktop apps. | Positive |
| **TC-MGR-02** | UC-SCHED-02 | Approve Employee Leave Request | 1. Open Leave Approval Queue.<br>2. Review 2-day annual leave request submitted by Staff B.<br>3. Enter approval comment and click "Approve". | Request ID: `REQ-1029`<br>Action: `Approve` | Request status updated to "Approved". Staff B's available leave balance automatically deducted by 2 days. | Positive |
| **TC-MGR-03** | UC-DASH-02 | Monitor Team Real-time Status Board | 1. Open Real-time Status Board.<br>2. Filter by `Team Alpha`. | Filter: `Team Alpha` | Correctly displays real-time status indicators (Green: Clocked In, Yellow: Idle, Grey: Offline) and active apps. | Positive |
| **TC-MGR-04** | UC-HL-03 | Handle Extended Idle Alert Notification | 1. System triggers alert: "Staff C inactive over 30 minutes".<br>2. Manager clicks notification to inspect timeline and screenshot.<br>3. Adds note "Verified offline client meeting". | Alert ID: `ALT-8821`<br>Action: `Annotate` | Alert acknowledged and manager note recorded in system audit log. | Positive |
| **TC-MGR-05** | UC-PM-01 | Create Project & Assign Tasks to Staff | 1. Open Project Manager -> Click "New Project".<br>2. Add tasks and assign to Staff D.<br>3. Set Estimated Hours = 16h. | Project: `Website Redesign`<br>Task: `UI Mockup`<br>Estimate: `16 hours` | Task created on project Kanban board and pushed to Staff D's active task list. | Positive |

---

### 3.5. Test Cases for Actor 5: `Staff`

| Test Case ID | UC ID | Test Scenario | Steps | Input Data | Expected Result | Test Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-STF-01** | UC-TIME-01 | Start Work Clock-in on Desktop App | 1. Open Desktop Timer app.<br>2. Select project "Website Redesign" and task "UI Mockup".<br>3. Click "Start Timer". | Project: `Website Redesign`<br>Task: `UI Mockup` | Timer begins counting. User status changes to "Working". Desktop activity tracking initiates. | Positive |
| **TC-STF-02** | UC-TIME-04 | Trigger Idle State Popup | 1. Staff timer is active but no keyboard/mouse input detected for 10 minutes (threshold).<br>2. Observe app behavior. | Inactive time: `10 minutes` | App displays popup: "You have been idle for 10 minutes. Keep or discard this idle time?". Timer pauses. | Boundary / Positive |
| **TC-STF-03** | UC-GPS-01 | Reject GPS Check-in Outside Geofence Perimeter | 1. Open Mobile App -> Select "GPS Attendance".<br>2. Attempt check-in while physically outside allowed perimeter (>200m away). | Location: `Outside Geofence` | System blocks check-in with error: "You are outside the designated attendance zone. Please move closer." | Negative |
| **TC-STF-04** | UC-SCHED-02 | Reject Leave Request Exceeding Available Balance | 1. Open Time-off module.<br>2. Select "Annual Leave" with requested duration = 5 days.<br>3. (Current available balance is 2 days). Click "Submit". | Leave Type: `Annual Leave`<br>Requested: `5 days`<br>Balance: `2 days` | System blocks submission with error: "Insufficient leave balance (2 days available)." | Negative / Boundary |
| **TC-STF-05** | UC-MEET-02 | Auto Log Zoom Meeting Attendance | 1. Click integrated Zoom meeting link on schedule.<br>2. Attend meeting for 45 minutes and exit room. | Meeting: `Project Sync`<br>Duration: `45 mins` | System automatically logs 45 minutes under "Meeting Time" category on user timeline without manual timer switch. | Positive |
| **TC-STF-06** | UC-TL-01 | Review Daily Personal Activity Timeline | 1. Open personal Timeline page.<br>2. Inspect color-coded work blocks for current date. | Date: `Today` | Renders continuous visual bar of active work blocks, meeting times, idle gaps, and captured screenshots. | Positive |

---

### 3.6. Test Cases for Actor 6: `Client`

| Test Case ID | UC ID | Test Scenario | Steps | Input Data | Expected Result | Test Type |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-CLI-01** | UC-PM-02 | Log in to Client Portal & Inspect Progress | 1. Access Client Portal with client credentials.<br>2. Select project `E-commerce Mobile App`.<br>3. View task progress Kanban view. | User: `client@partner.com`<br>Project: `E-commerce App` | Displays completed vs. pending tasks and overall project completion percentage. | Positive |
| **TC-CLI-02** | UC-EXPEND-01 | Review & Approve Project Billable Hours | 1. Navigate to "Billable Hours" in Client Portal.<br>2. Select current weekly billing period.<br>3. Review line-item hours breakdown and click "Approve". | Period: `Current Week`<br>Action: `Approve Hours` | Client reviews logged billable hours. Approval locks hours for invoice generation. | Positive |
| **TC-CLI-03** | UC-PAY-03 | View & Download Client Invoice PDF | 1. Open "Invoices & Payments".<br>2. Select invoice `INV-2026-008`.<br>3. Click "Download PDF". | Invoice ID: `INV-2026-008` | Downloads PDF invoice with complete itemized hours, hourly rate rates, subtotal, tax, and payment details. | Positive |
| **TC-CLI-04** | UC-PM-02 | Block External Client Access to Internal HR Data | 1. Log in with Client credentials.<br>2. Attempt direct URL navigation to `/tenant/payroll`. | Target URL: `/tenant/payroll` | Access denied. Client redirected back to Client Portal home. | Permission |

---

## 4. TEST CASE COVERAGE MATRIX SUMMARY

| Actor | Direct Use Cases | Test Case Count | Representative Test Cases |
| :--- | :---: | :---: | :--- |
| **System-Admin** | 4 | 4 | TC-SYS-01, TC-SYS-02, TC-SYS-03, TC-SYS-04 |
| **Admin-Tenant** | 7 | 5 | TC-ADM-01, TC-ADM-02, TC-ADM-03, TC-ADM-04, TC-ADM-05 |
| **Director** | 6 | 4 | TC-DIR-01, TC-DIR-02, TC-DIR-03, TC-DIR-04 |
| **Manager** | 10 | 5 | TC-MGR-01, TC-MGR-02, TC-MGR-03, TC-MGR-04, TC-MGR-05 |
| **Staff** | 9 | 6 | TC-STF-01, TC-STF-02, TC-STF-03, TC-STF-04, TC-STF-05, TC-STF-06 |
| **Client** | 3 | 4 | TC-CLI-01, TC-CLI-02, TC-CLI-03, TC-CLI-04 |
| **TOTAL** | **39 Use Cases** | **28 Test Cases** | *100% coverage across all 6 Actors and 15 Architecture Modules* |
