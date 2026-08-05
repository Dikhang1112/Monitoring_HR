# PRODUCTIVITY MONITORING - ACTIVITY SCORE & ALERTS PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Activity Score Calculation & Real-time Alerts Workflow**.

---

## PlantUML Source Code

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
|Desktop Agent App |
start
:Collect input activity rates & productive application time;
:Transmit hourly activity data to Cloud Engine;

|Productivity AI Engine |
:Execute Weighted Activity Score (%) algorithm;
:Compare score against configured alert threshold (< 30%);

if (Activity Score < 30% for 2 consecutive hours?) then (YES - Alert Triggered)
  :Generate Low Productivity Alert;
  :Dispatch real-time push notification & email to Manager;

  |Manager |
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

