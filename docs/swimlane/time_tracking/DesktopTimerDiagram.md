# TIME TRACKING - DESKTOP APP TIMER PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Desktop Work Timer Control Workflow**.

---

## PlantUML Source Code

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
