# SCHEDULING & LEAVE - ATTENDANCE RULES PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Attendance Rules & Punctuality Violation Log Workflow**.

---

## PlantUML Source Code

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
|Attendance Cron Engine |
start
:Execute automated attendance reconciliation at end of shift;
:Compare actual Check-in/out timestamps against Roster Schedule;

|Direct Manager |
:Receive daily attendance violation summary report;

|Admin-Tenant (HR Admin) |
:Configure shift grace period allowance (e.g., 15 minutes);

|Attendance Cron Engine|
if (Clock-in timestamp past shift grace period?) then (YES - Late Arrival)
  :Log "Late Arrival" violation record with exact tardiness minutes;
  :Dispatch violation notification to Employee & Manager;
  |Staff (Employee) |
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

