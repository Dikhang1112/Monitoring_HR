# PRODUCTIVITY MONITORING - INPUT ACTIVITY TRACKING PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Input Activity Tracking Workflow**.

---

## PlantUML Source Code

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
|Desktop Agent App |
start
:Measure keystroke & mouse movement frequency per minute;
:Calculate active vs idle time ratio percentage (% Activity Rate);
:Transmit input metrics payload to Cloud Engine;

|Productivity AI Engine |
:Analyze input patterns via Anomaly Detection algorithm;
if (Artificial auto-clicker or mouse jiggler detected?) then (YES - Anomaly)
  :Flag suspicious activity anomaly;
  :Dispatch fake activity alert to Manager;

  |Manager |
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

