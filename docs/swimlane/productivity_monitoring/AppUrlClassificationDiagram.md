# PRODUCTIVITY MONITORING - APP & URL CLASSIFICATION PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **App & Website Productivity Classification Workflow**.

---

## PlantUML Source Code

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
|Admin-Tenant (HR Admin) |
start
:Configure App & Website classification rules;
:Assign Productive, Unproductive, or Neutral status labels;
:Set Department-specific Classification Overrides;

|Desktop Agent App |
:Log active window titles & website domain URLs;
:Transmit application usage time logs to Cloud Engine;

|Productivity AI Engine |
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

