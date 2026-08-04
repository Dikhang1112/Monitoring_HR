# HR Management Platform - Process Swimlane Activity Diagrams

This document compiles all **19 Process Swimlane Activity Diagrams** across the 6 core subsystems of the HR Management Platform. Each diagram models the operational interaction flow, decision nodes, and data transitions between system actors, client applications, and backend services.

---

## 1. People Management Subsystem

### 1.1. Onboarding & Offboarding Workflow Diagram
*(4 Swimlanes: Admin-Tenant, HR System Services, Employee, Direct Manager)*

```plantuml
@startuml
title PEOPLE MANAGEMENT - ONBOARDING & OFFBOARDING (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Admin-Tenant (HR Admin) |
start
:Create new employee profile & enter contract details;
:Assign Department & designate Direct Manager;
:Click "Trigger Onboarding Workflow";

|#e2e8f0| HR System Services |
:Automatically provision user accounts (Email, HR Portal, Timer App);
:Dispatch welcome email with temporary credentials;

|#cbd5e1| Employee (Staff) |
:Log into HR Portal & verify personal details;

|#94a3b8| Direct Manager |
:Create onboarding task checklist & assign team buddy;

|Admin-Tenant (HR Admin)|
:Issue hardware assets (Laptop, Keycard) & record Serial Numbers;

|Employee (Staff)|
:Acknowledge receipt of hardware assets on HR Portal;

|HR System Services|
if (Asset handover verification valid?) then (YES)
  :Activate official employee account status;
  |Admin-Tenant (HR Admin)|
  :Save completed onboarding profile;
else (NO - Asset Issue)
  |Admin-Tenant (HR Admin)|
  :Replace defective asset & update handover record;
endif

' =====================================================
' OFFBOARDING BRANCH
' =====================================================
|Employee (Staff)|
:Submit resignation request on HR Portal;

|Direct Manager|
:Approve resignation request & create work handover checklist;

|Employee (Staff)|
:Complete project task handover & transfer documentation;

|Admin-Tenant (HR Admin)|
:Retrieve laptop, keycard & inspect asset condition;
if (All assets returned & undamaged?) then (YES)
  :Approve exit clearance certificate;
  |HR System Services|
  :Automatically revoke all system access permissions;
  :Archive employee profile & historical records;
  stop
else (NO - Missing/Damaged)
  |Admin-Tenant (HR Admin)|
  :Deduct asset penalty fee from final payroll;
  |HR System Services|
  :Revoke system permissions & archive account;
  stop
endif

@enduml
```

---

### 1.2. Role & Permission Management (RBAC) Diagram
*(4 Swimlanes: System-Admin, Admin-Tenant, Security Engine & Database, Employee)*

```plantuml
@startuml
title PEOPLE MANAGEMENT - ROLES & PERMISSIONS (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| System-Admin |
start
:Open System Role & Permission Management screen;
:Create new Custom Role Group;
:Configure action permission matrix (CRUD & Approvals);
:Configure Data Scope Boundary (Company-wide / Department / Self-only);

|#e2e8f0| Admin-Tenant (HR Admin) |
:Open employee list & assign Custom Role to Staff;

|#cbd5e1| Security Engine & Database |
:Persist Role Matrix & update user session authorization token;

|#94a3b8| Employee (Staff) |
:Perform action request on frontend screen UI;

|Security Engine & Database|
if (Action permitted in Role Matrix?) then (YES)
  :Authorize execution & filter dataset by Data Scope;
  |Employee (Staff)|
  :Display operation result successfully;
  stop
else (NO - Permission Denied)
  |Security Engine & Database|
  :Reject request with HTTP 403 Forbidden;
  |Employee (Staff)|
  :Display "Access Denied: Insufficient Permissions" alert;
  stop
endif

@enduml
```

---

### 1.3. Employee Profile Management Diagram
*(4 Swimlanes: Admin-Tenant, Direct Manager, HR System Services, Employee)*

```plantuml
@startuml
title PEOPLE MANAGEMENT - EMPLOYEE PROFILES (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Admin-Tenant (HR Admin) |
start
:Open Profile Management & select Import Excel or Create New;
:Enter personal details, Tax ID, National ID & Bank account;
:Assign to Department & set designated Direct Manager;

|#e2e8f0| Direct Manager |
:Confirm job title, role responsibilities & probation contract;

|#cbd5e1| HR System Services |
:Encrypt & store employee record in Cloud Database;

|#94a3b8| Employee (Staff) |
:Access HR Portal to update emergency contact details;

|HR System Services|
if (Updated profile details valid?) then (YES)
  :Record updated details & dispatch notification to HR Admin;
  |Admin-Tenant (HR Admin)|
  :Approve profile update request;
  stop
else (NO - Invalid Input)
  |HR System Services|
  :Return input validation error;
  |Employee (Staff)|
  :Re-enter correct profile details;
  stop
endif

@enduml
```

---

### 1.4. Organizational Structure Setup Diagram
*(4 Swimlanes: Admin-Tenant, Director, Direct Manager, HR System Services)*

```plantuml
@startuml
title PEOPLE MANAGEMENT - ORG STRUCTURE (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Admin-Tenant (HR Admin) |
start
:Open Interactive Org Tree canvas;
:Create new Branch / Department / Sub-unit node;
:Appoint Department Head & Deputy Leads;

|#e2e8f0| Director (Executive) |
:Review department headcount allocation statistics;

|#cbd5e1| Direct Manager |
:Assume operational management of assigned department roster;

|#94a3b8| HR System Services |
:Automatically update system reporting hierarchy;
if (Department merger or dissolution required?) then (YES)
  |Admin-Tenant (HR Admin)|
  :Execute department merger & reassign tree nodes;
  |HR System Services|
  :Re-route employee manager reporting lines;
  stop
else (NO)
  |HR System Services|
  :Save updated organizational tree hierarchy;
  stop
endif

@enduml
```

---

## 2. Time Tracking Subsystem

### 2.1. Desktop App Work Timer Diagram
*(3 Swimlanes: Staff, Desktop Client App, Cloud Time Tracking API)*

```plantuml
@startuml
title TIME TRACKING - DESKTOP TIMER (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Staff (Employee) |
start
:Open Desktop Client App UI;
:Select active Project & Task;
:Click "Start Work Timer";

|#e2e8f0| Desktop Client App |
:Initialize real-time work timer;
:Transmit API ping to Cloud Server;

|#cbd5e1| Cloud Time Tracking API |
if (Internet connection active?) then (YES - Online)
  :Create active work session record (Status: Active);
  :Return online timer confirmation;
else (NO - Offline)
  |Desktop Client App|
  :Buffer encrypted work log locally in SQLite;
  :Display "Offline Mode - Timesheet Saved Locally" status;
endif

|Staff (Employee)|
:Continue working & click "Pause / Stop Timer";

|Desktop Client App|
if (Internet connection restored?) then (YES)
  :Read local offline buffer records;
  |Cloud Time Tracking API|
  :Sync all buffered timesheets to Cloud Database;
  |Desktop Client App|
  :Purge temporary local buffer cache;
  stop
else (Still Offline)
  |Desktop Client App|
  :Retain local encrypted buffer for next connection attempt;
  stop
endif

@enduml
```

---

### 2.2. Mobile App Clock In / Out Diagram
*(3 Swimlanes: Staff, Mobile Client App, Cloud Time Tracking API)*

```plantuml
@startuml
title TIME TRACKING - MOBILE TIMER (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Staff (Field Worker) |
start
:Open Mobile App on smartphone;
:Select Project & tap "Clock In";

|#e2e8f0| Mobile Client App |
:Retrieve GPS location & load task interface;
:Transmit periodic heartbeat ping (every 1 minute);

|#cbd5e1| Cloud Time Tracking API |
if (Heartbeat ping valid?) then (YES)
  :Record active Mobile Shift Session;
  |Staff (Field Worker)|
  :Switch active task & add photo/text note;
  |Mobile Client App|
  :Attach field photo & update current task;
  |Cloud Time Tracking API|
  :Save mobile work log entry;
  |Staff (Field Worker)|
  :Tap "Clock Out" at end of shift;
  stop
else (NO - Connection Dropped)
  |Mobile Client App|
  :Save Clock Out record locally on device;
  |Cloud Time Tracking API|
  :Synchronize work log when connection is restored;
  stop
endif

@enduml
```

---

### 2.3. Idle Detection & Manual Timesheet Diagram
*(3 Swimlanes: Staff, Desktop Agent Service, Manager & Time Backend)*

```plantuml
@startuml
title TIME TRACKING - IDLE TIMESHEET (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Staff (Employee) |
start
:Work on desktop & pause keyboard/mouse input;

|#e2e8f0| Desktop Agent Service |
:Monitor input rates & detect idle state > 10 minutes;
:Display Warning Popup dialog on screen;

|Staff (Employee)|
if (Inactivity due to valid offline work discussion?) then (YES - Keep Time)
  :Select "Keep Idle Time" & enter reason (Offline Meeting);
  |#cbd5e1| Manager & Time Backend |
  :Submit Manual Timesheet Adjustment Request to Manager;
  if (Manager approves adjustment?) then (YES)
    :Retain idle time in approved working hours;
    stop
  else (NO)
    :Deduct idle time from total working hours;
    stop
  endif
else (NO - Personal Break / Forgot Timer)
  |Staff (Employee)|
  :Select "Discard Idle Time";
  |Desktop Agent Service|
  :Automatically slice off inactive time segment;
  stop
endif

@enduml
```

---

## 3. GPS Attendance Subsystem

### 3.1. Geofenced GPS Check-in Diagram
*(3 Swimlanes: Staff, Mobile App Client, GPS Location Service)*

```plantuml
@startuml
title GPS ATTENDANCE - GEOFENCED CHECK-IN (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Staff (Field Worker) |
start
:Open Mobile App at branch office / site location;
:Tap "Check-in GPS";

|#e2e8f0| Mobile App Client |
:Retrieve device GPS coordinates (Latitude, Longitude);
:Submit Check-in API request with GPS payload;

|#cbd5e1| GPS Location Service |
:Fetch branch coordinates & configured Geofence Radius;
:Calculate Haversine distance from device to branch;

if (Distance <= Geofence Perimeter Radius?) then (YES - Valid)
  :Record verified attendance entry (Status: Verified);
  |Mobile App Client|
  :Display green "Check-in Successful" notification screen;
  |Staff (Field Worker)|
  :Commence official work shift;
  stop
else (NO - Out of Bounds)
  |GPS Location Service|
  :Reject check-in & log out-of-perimeter attempt;
  |Mobile App Client|
  :Display red warning "Device location outside branch geofence";
  |Staff (Field Worker)|
  :Move inside authorized branch perimeter & retry;
  stop
endif

@enduml
```

---

### 3.2. Live Map Location & Shift Route Tracking Diagram
*(3 Swimlanes: Manager, GPS Location Service, Staff)*

```plantuml
@startuml
title GPS ATTENDANCE - LIVE MAP & ROUTE TRACKING (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Manager |
start
:Open Live Map Dashboard;
:Select field service staff to track route history;

|#e2e8f0| GPS Location Service |
:Fetch real-time location pings (transmitted every 5 mins);
:Render shift movement route history line;

|#cbd5e1| Staff (Field Worker) |
:Perform field service tasks during active shift;
:Transmits background GPS location pings;

|GPS Location Service|
if (Shift ended or staff outside work hours?) then (YES)
  :Halt location tracking to preserve privacy;
  |Manager|
  :View complete shift route movement history log;
  :Click "Export Shift Route History Log (PDF/CSV)";
  stop
else (NO - Active Shift)
  |GPS Location Service|
  :Continue updating real-time map marker;
  stop
endif

@enduml
```

---

## 4. Productivity Monitoring Subsystem

### 4.1. Automated Screenshot Capture Diagram
*(3 Swimlanes: Desktop Agent App, Productivity AI Engine, Manager)*

```plantuml
@startuml
title PRODUCTIVITY MONITORING - SCREENSHOT CAPTURE (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Desktop Agent App |
start
:Trigger random screenshot timer (every 10 mins);
:Capture all active displays simultaneously (Multi-Monitor);
:Detect sensitive application windows (Banking/Passwords);
:Automatically blur sensitive app windows;
:Encrypt screenshot file on client device (AES-256);
:Upload encrypted image payload to Cloud Storage;

|#e2e8f0| Productivity AI Engine |
:Store encrypted image & record capture timestamp;
:Log active window title at moment of capture;

|#cbd5e1| Manager |
:Open Screenshot Review Gallery;
if (Non-work activity detected in screen capture?) then (YES)
  :Attach reviewer note on screen capture item;
  :Dispatch reminder notification to staff member;
  stop
else (NO - Work Valid)
  :Store valid screenshot item in daily audit log;
  stop
endif

@enduml
```

---

### 4.2. Input Activity Tracking Diagram
*(3 Swimlanes: Desktop Agent App, Productivity AI Engine, Manager)*

```plantuml
@startuml
title PRODUCTIVITY MONITORING - INPUT ACTIVITY (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Desktop Agent App |
start
:Measure keystroke & mouse movement frequency per minute;
:Calculate active vs idle time ratio percentage (% Activity Rate);
:Transmit input metrics payload to Cloud Engine;

|#e2e8f0| Productivity AI Engine |
:Analyze input patterns via Anomaly Detection algorithm;
if (Artificial auto-clicker or mouse jiggler detected?) then (YES - Anomaly)
  :Flag suspicious activity anomaly;
  :Dispatch fake activity alert to Manager;

  |#cbd5e1| Manager |
  :Open Anomaly Audit Report & review input logs;
  :Request employee explanation or record compliance violation;
  stop
else (NO - Genuine Activity)
  |Productivity AI Engine|
  :Record active input ratio into daily productivity metrics;
  stop
endif

@enduml
```

---

### 4.3. App & Website Classification Diagram
*(3 Swimlanes: Admin-Tenant, Desktop Agent App, Productivity AI Engine)*

```plantuml
@startuml
title PRODUCTIVITY MONITORING - APP & URL CLASSIFICATION (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Admin-Tenant (HR Admin) |
start
:Configure App & Website classification rules;
:Assign Productive, Unproductive, or Neutral status labels;
:Set Department-specific Classification Overrides;

|#e2e8f0| Desktop Agent App |
:Log active window titles & website domain URLs;
:Transmit application usage time logs to Cloud Engine;

|#cbd5e1| Productivity AI Engine |
:Apply classification rules based on employee department;
if (Unproductive App/Web usage exceeds 30 minutes?) then (YES)
  :Record unproductive time duration;
  :Generate excessive social media / unproductive usage alert;
  stop
else (NO)
  :Add productive app time to employee Productive Hours total;
  stop
endif

@enduml
```

---

### 4.4. Activity Score & Real-time Alerts Diagram
*(3 Swimlanes: Desktop Agent App, Productivity AI Engine, Manager)*

```plantuml
@startuml
title PRODUCTIVITY MONITORING - ACTIVITY SCORE & ALERTS (3 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 3 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Desktop Agent App |
start
:Collect input activity rates & productive application time;
:Transmit hourly activity data to Cloud Engine;

|#e2e8f0| Productivity AI Engine |
:Execute Weighted Activity Score (%) algorithm;
:Compare score against configured alert threshold (< 30%);

if (Activity Score < 30% for 2 consecutive hours?) then (YES - Alert Triggered)
  :Generate Low Productivity Alert;
  :Dispatch real-time push notification & email to Manager;

  |#cbd5e1| Manager |
  :Receive alert notification & open Dashboard breakdown;
  :Evaluate root cause & send feedback note to employee;
  stop
else (NO - Normal Activity)
  |Productivity AI Engine|
  :Record activity score into daily trend chart;
  stop
endif

@enduml
```

---

## 5. Scheduling & Time-Off Subsystem

### 5.1. Weekly Shift Planning Diagram
*(4 Swimlanes: Direct Manager, Admin-Tenant, Scheduling Engine, Staff)*

```plantuml
@startuml
title SCHEDULING & LEAVE - SHIFT PLANNING (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Direct Manager |
start
:Open Weekly Shift Roster interface;
:Select shift pattern (Morning, Afternoon, Night, Split Shift);
:Designate work location mode (Onsite Office / Remote WFH);

|#e2e8f0| Admin-Tenant (HR Admin) |
:Approve holiday / night shift allowance budget caps;

|#cbd5e1| Scheduling Engine |
:Save shift roster draft & execute shift conflict check;

if (Shift overlap or mandatory rest period violation detected?) then (YES - Conflict)
  :Display "Shift Schedule Conflict Warning" alert;
  |Direct Manager|
  :Adjust shift roster assignments;
else (NO - Valid Roster)
  |Scheduling Engine|
  :Publish Weekly Shift Schedule Roster;
  :Dispatch mobile push notifications to assigned staff;

  |#94a3b8| Staff (Employee) |
  :Receive new shift roster notification on Mobile App;
  stop
endif

@enduml
```

---

### 5.2. Time-off Request & Leave Management Diagram
*(4 Swimlanes: Staff, Leave Management Service, Direct Manager, Admin-Tenant)*

```plantuml
@startuml
title SCHEDULING & LEAVE - LEAVE MANAGEMENT (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Staff (Employee) |
start
:Open Time-off Request screen on Web/Mobile App;
:Select leave type, date range & attach medical note if required;
:Click "Submit Leave Request";

|#e2e8f0| Leave Management Service |
:Verify available annual leave balance;

if (Leave Balance >= Requested Days?) then (YES)
  :Record leave request entry (Status: Pending Manager Approval);
  :Dispatch push notification to Direct Manager;

  |#cbd5e1| Direct Manager |
  :Review leave request details & team shift coverage;
  if (Manager approves request?) then (YES)
    :Click "Approve";
    |Leave Management Service|
    if (Requested leave duration > 3 consecutive days?) then (Requires HR Review)
      :Forward request to HR Admin (Status: Pending HR Approval);
      |#94a3b8| Admin-Tenant (HR Admin) |
      :Review company leave policy & grant final approval;
    else (No HR Review Needed)
    endif

    |Leave Management Service|
    :Update leave status to "Approved";
    :Automatically deduct leave days from employee balance;
    :Update team roster schedule automatically;
    :Dispatch approval notification to Staff;
    |Staff (Employee)|
    :Receive leave request approval notification;
    stop
  else (NO - Reject)
    |Direct Manager|
    :Enter rejection reason & click "Reject";
    |Leave Management Service|
    :Dispatch rejection notification with reason to Staff;
    |Staff (Employee)|
    :Receive leave request rejection notification;
    stop
  endif

else (NO - Insufficient Balance)
  |Leave Management Service|
  :Return "Insufficient Leave Balance" error;
  |Staff (Employee)|
  :Display error message on screen;
  stop
endif

@enduml
```

---

### 5.3. Attendance Rules & Violation Log Diagram
*(4 Swimlanes: Attendance Cron Engine, Direct Manager, Admin-Tenant, Staff)*

```plantuml
@startuml
title SCHEDULING & LEAVE - ATTENDANCE RULES (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Attendance Cron Engine |
start
:Execute automated attendance reconciliation at end of shift;
:Compare actual Check-in/out timestamps against Roster Schedule;

|#e2e8f0| Direct Manager |
:Receive daily attendance violation summary report;

|#cbd5e1| Admin-Tenant (HR Admin) |
:Configure shift grace period allowance (e.g., 15 minutes);

|Attendance Cron Engine|
if (Clock-in timestamp past shift grace period?) then (YES - Late Arrival)
  :Log "Late Arrival" violation record with exact tardiness minutes;
  :Dispatch violation notification to Employee & Manager;
  |#94a3b8| Staff (Employee) |
  :Receive tardiness violation notice;
  stop
else if (No Check-in record & no approved leave request?) then (YES - Absence)
  |Attendance Cron Engine|
  :Log "Unexcused Absence" violation entry;
  :Deduct unexcused absence pay penalty from payroll;
  stop
else (NO - Punctual)
  |Attendance Cron Engine|
  :Log verified punctual shift record;
  stop
endif

@enduml
```

---

## 6. Payroll & Client Invoicing Subsystem

### 6.1. Automated Monthly Salary Calculation Diagram
*(4 Swimlanes: Admin-Tenant, Payroll & Billing Engine, Director, Staff)*

```plantuml
@startuml
title PAYROLL & INVOICING - SALARY CALCULATION (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Admin-Tenant (HR / Payroll) |
start
:Trigger automated monthly payroll calculation batch job;

|#e2e8f0| Payroll & Billing Engine |
:Fetch verified timesheet working hours from Time Tracking;
:Apply tardiness penalties & unexcused absence deductions;
:Apply Overtime Multipliers (Weekday x1.5, Weekend x2.0, Holiday x3.0);
:Calculate fixed & variable allowances (Lunch, Travel, Role);
:Generate company-wide Monthly Salary Sheet;

|Admin-Tenant (HR / Payroll)|
:Audit salary sheet metrics & submit for C-level payout approval;

|#cbd5e1| Director (Executive) |
if (Total payroll expenses within approved budget cap?) then (YES)
  :Approve monthly salary payout sheet;
  |Payroll & Billing Engine|
  :Generate encrypted PDF Paystub for each employee;
  :Dispatch Paystub PDF emails company-wide;

  |#94a3b8| Staff (Employee) |
  :Receive encrypted PDF Paystub & review compensation breakdown;
  stop
else (NO - Over Budget)
  |Director (Executive)|
  :Request overtime & allowance breakdown adjustment;
  |Admin-Tenant (HR / Payroll)|
  :Reconcile & re-run adjusted payroll calculation batch;
  stop
endif

@enduml
```

---

### 6.2. Overtime Pay & Allowance Management Diagram
*(4 Swimlanes: Direct Manager, Admin-Tenant, Payroll & Billing Engine, Director)*

```plantuml
@startuml
title PAYROLL & INVOICING - OVERTIME & ALLOWANCE (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Direct Manager |
start
:Approve employee pre-shift overtime (OT) requests;

|#e2e8f0| Admin-Tenant (HR / Payroll) |
:Configure OT multipliers (Weekday 150%, Weekend 200%, Holiday 300%);
:Set department Overtime Budget Caps;

|#cbd5e1| Payroll & Billing Engine |
:Calculate total OT hours compensation & night shift allowances;

if (Total OT expenses exceed department budget cap?) then (YES - Cap Exceeded)
  :Trigger Overtime Budget Cap Warning alert;
  |#94a3b8| Director (Executive) |
  :Review additional OT budget grant request;
  if (Director grants additional OT budget?) then (YES)
    :Approve OT budget override;
    |Payroll & Billing Engine|
    :Record verified OT compensation into monthly payroll;
    stop
  else (NO)
    :Reject OT budget override request;
    |Admin-Tenant (HR / Payroll)|
    :Cap OT hours to initial approved budget limit;
    stop
  endif
else (NO - Within Budget)
  |Payroll & Billing Engine|
  :Automatically integrate OT compensation into payroll;
  stop
endif

@enduml
```

---

### 6.3. Client Invoicing & Billable Hours Approval Diagram
*(4 Swimlanes: Project Manager, Payroll & Billing Engine, Director, Client)*

```plantuml
@startuml
title PAYROLL & INVOICING - CLIENT INVOICING (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Project Manager |
start
:Filter client project Billable Hours from timesheet logs;
:Apply role-based hourly billing rates (Hourly Billing Rate);
:Click "Generate Client Invoice Statement";

|#e2e8f0| Payroll & Billing Engine |
:Compile itemized billable hours statement & total amount;
:Generate official Client Invoice PDF Statement;

|#cbd5e1| Director (Executive) |
:Sign & approve client invoice statement prior to issuance;

|Payroll & Billing Engine|
:Automatically publish Invoice PDF to Client Portal;
:Dispatch email invoice notification to Client;

|#94a3b8| Client (Partner) |
:Log into Client Portal & download Invoice PDF statement;
if (Verify billable hours & invoice amount valid?) then (YES)
  :Click "Approve & Pay Invoice";
  |Payroll & Billing Engine|
  :Record invoice payment status as "Paid";
  stop
else (NO - Discrepancy)
  |Client (Partner)|
  :Submit billable hours dispute request on Client Portal;
  |Project Manager|
  :Review timesheet audit logs & issue revised invoice;
  stop
endif

@enduml
```
