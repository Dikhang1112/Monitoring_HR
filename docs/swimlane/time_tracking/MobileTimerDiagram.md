# TIME TRACKING - MOBILE CLOCK IN/OUT PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Mobile Clock In / Out & Task Switcher Workflow**.

---

## PlantUML Source Code

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
