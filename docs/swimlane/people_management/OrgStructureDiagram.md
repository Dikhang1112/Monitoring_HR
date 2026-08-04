# PEOPLE MANAGEMENT - ORGANIZATIONAL STRUCTURE PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Organizational Structure Setup Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PEOPLE MANAGEMENT - ORG STRUCTURE (4 SWIMLANES)

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
|#f1f5f9| Admin-Tenant (HR Admin) |
start
:Open Interactive Org Tree canvas;
:Create new Branch / Department / Sub-unit node;
:Appoint Department Head & Deputy Leads;

|#e2e8f0| Director (Executive) |
:Review department headcount allocation statistics;

|#cbd5e1| Direct Manager |
:Assume operational management of assigned department roster;

|#94a3b8| HR System Services |
:Automatically update system reporting hierarchy;
if (Department merger or dissolution required?) then (YES)
  |Admin-Tenant (HR Admin)|
  :Execute department merger & reassign tree nodes;
  |HR System Services|
  :Re-route employee manager reporting lines;
  stop
else (NO)
  |HR System Services|
  :Save updated organizational tree hierarchy;
  stop
endif

@enduml
```
