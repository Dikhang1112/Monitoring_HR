# SCHEDULING & LEAVE - SHIFT PLANNING PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Weekly Shift & Work Schedule Planning Workflow**.

---

## PlantUML Source Code

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
|Direct Manager |
start
:Open Weekly Shift Roster interface;
:Select shift pattern (Morning, Afternoon, Night, Split Shift);
:Designate work location mode (Onsite Office / Remote WFH);

|Admin-Tenant (HR Admin) |
:Approve holiday / night shift allowance budget caps;

|Scheduling Engine |
:Save shift roster draft & execute shift conflict check;

if (Shift overlap or mandatory rest period violation detected?) then (YES - Conflict)
  :Display "Shift Schedule Conflict Warning" alert;
  |Direct Manager|
  :Adjust shift roster assignments;
else (NO - Valid Roster)
  |Scheduling Engine|
  :Publish Weekly Shift Schedule Roster;
  :Dispatch mobile push notifications to assigned staff;

  |Staff (Employee) |
  :Receive new shift roster notification on Mobile App;
  stop
endif

@enduml
```

