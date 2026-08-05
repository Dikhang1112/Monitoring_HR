# SCHEDULING & TIME-OFF MANAGEMENT - DETAILED FEATURE BREAKDOWN

This document provides a detailed specification breakdown for the **Scheduling & Time-Off Management** subsystem based on `docs/mindmap/Architecture.md`.

---

## 1. MINDMAP TREE - SCHEDULING & TIME-OFF MANAGEMENT

```mermaid
flowchart LR
    ROOT["4. Scheduling & Time-Off Management"]

    %% Branch 1: Shift & Work Schedule Planning
    ROOT --> SCHED["4.1. Shift & Work Schedule Planning"]
    SCHED --> S1["Shift Pattern Setup (Morning, Afternoon, Night, Split Shift)"]
    SCHED --> S2["Onsite vs. Remote Work Mode Classification"]
    SCHED --> S3["Team Roster & Minimum Coverage Planning"]
    SCHED --> S4["Published Schedule Automated Notifications"]

    %% Branch 2: Time-Off & Leave Requests
    ROOT --> LEAVE["4.2. Time-Off & Leave Management"]
    LEAVE --> L1["Leave Type Configuration (Annual, Sick, Maternity, Unpaid)"]
    LEAVE --> L2["Real-time Leave Balance Check (Remaining Leave Balance)"]
    LEAVE --> L3["Leave Request Submission (Submit Request with Attachments)"]
    LEAVE --> L4["Multi-level Manager Approval Workflow"]

    %% Branch 3: Attendance Rules & Punctuality
    ROOT --> RULE["4.3. Attendance Rules & Punctuality"]
    RULE --> R1["Work Shift Grace Period Configuration (Allowed Grace Period Minutes)"]
    RULE --> R2["Late Arrival & Early Departure Violation Log"]
    RULE --> R3["Unexcused Absence Classification"]
```

---

## 2. DETAILED FEATURE SPECIFICATIONS

### 4.1. Shift & Work Schedule Planning
* **Shift Pattern Setup:** Defines work shift templates: Standard Office Hours (8:00 - 17:00), Morning/Afternoon/Night shifts, Split Shifts, or Flexitime.
* **Onsite vs. Remote Classification:** Tags work locations as Onsite Office or Remote/Work-From-Home per shift.
* **Team Roster Coverage:** Assists supervisors in weekly shift scheduling, ensuring minimum coverage requirements for operational shifts.
* **Automated Schedule Publishing Notifications:** Automatically dispatches mobile push notifications and email alerts when new weekly/monthly shift schedules are published.

### 4.2. Time-Off & Leave Management
* **Leave Type Configuration:** Configures compliance leave categories:
  * *Annual Leave* - Fully paid compensation.
  * *Sick Leave* - Social security or medical note required.
  * *Maternity / Bereavement / Marriage Leave.*
  * *Unpaid Leave.*
  * *Compensatory Time-off (Comp-time)* - Accumulated from approved overtime.
* **Real-time Leave Balance Verification:** Automatically tracks and displays available leave balances before request submission. Blocks submission if requested days exceed available quota.
* **Leave Request Submission:** Allows staff to select leave types, duration (Half-day, Full-day, Multi-day), justification notes, and upload medical certificates or documentation.
* **Multi-Level Approval Workflow:** Automatically routes leave requests to Direct Managers for approval. Supports 2-stage approval (Manager ➔ HR Admin) for long-duration leave (> 3 days).

### 4.3. Attendance Rules & Punctuality
* **Shift Grace Period Allowance:** Configures allowed tardiness grace period minutes (e.g., 15-minute grace period allowance per shift).
* **Late Arrival & Early Departure Logging:** Compares actual Clock In/Out timestamps against scheduled shift bounds, logging exact minutes of tardiness or early departure.
* **Unexcused Absence Classification:** Automatically flags unexcused absences if employees fail to clock in without an approved leave request.
