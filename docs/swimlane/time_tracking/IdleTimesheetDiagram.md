# TIME TRACKING - IDLE DETECTION & TIMESHEET PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Idle Inactivity Detection & Manual Timesheet Approval Workflow**.

---

## PlantUML Source Code

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
