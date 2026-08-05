# TIME TRACKING - IDLE DETECTION & MANUAL TIMESHEETS USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Detecting Inactivity & Approving Manual Timesheets** within the Time Tracking subsystem, formatted for Draw.io (Left Primary Actors | Center Boundary | Right Secondary Actors).

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman

skinparam usecase {
  BackgroundColor #EFF6FF
  BorderColor #2563EB
  BorderThickness 1.5
  FontSize 12
  FontStyle bold
  FontName "Segoe UI"
}

skinparam actor {
  BackgroundColor #0F172A
  BorderColor #0284C7
  FontSize 12
  FontStyle bold
  FontName "Segoe UI"
}

' =====================================================
' PRIMARY ACTORS (LEFT SIDE)
' =====================================================
actor "Staff" as EMP

' =====================================================
' SYSTEM BOUNDARY & USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Idle & Manual Timesheet Subsystem" {
    
    usecase "(UC-TIME-03)\nDetect Inactivity & Idle State" as UC_TIME03
    usecase "(UC-TIME-03a)\nPrompt Idle Warning Popup" as UC_TIME03A
    usecase "(UC-TIME-03b)\nApprove Manual Timesheets" as UC_TIME03B
}

' =====================================================
' SECONDARY ACTORS (RIGHT SIDE)
' =====================================================
actor "Manager" as MGR
actor "Desktop Agent Service" as DESK_SVC

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
' Left Actors to Use Cases
EMP --> UC_TIME03
EMP --> UC_TIME03B

' Use Cases to Right Actors
UC_TIME03B --> MGR
UC_TIME03 --> DESK_SVC
UC_TIME03A --> DESK_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_TIME03 ..> UC_TIME03A : <<include>>
UC_TIME03B ..> UC_TIME03 : <<extend>>

@enduml
```
