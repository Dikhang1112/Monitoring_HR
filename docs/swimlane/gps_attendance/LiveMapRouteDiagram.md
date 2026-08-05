# GPS ATTENDANCE - LIVE MAP & ROUTE TRACKING PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Live Map Location & Shift Route Tracking Workflow**.

---

## PlantUML Source Code

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
|Manager |
start
:Open Live Map Dashboard;
:Select field service staff to track route history;

|GPS Location Service |
:Fetch real-time location pings (transmitted every 5 mins);
:Render shift movement route history line;

|Staff (Field Worker) |
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

