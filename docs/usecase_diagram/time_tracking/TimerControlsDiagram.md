# TIME TRACKING - WORK TIMER CONTROLS USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Controlling Desktop & Mobile Work Timers** within the Time Tracking subsystem, formatted for Draw.io (Left Primary Actors | Center Boundary | Right Secondary Actors).

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
rectangle "HR Management Platform - Work Timer Controls Subsystem" {
    
    ' Desktop Timer
    usecase "(UC-TIME-01)\nControl Desktop Work Timer" as UC_TIME01
    usecase "(UC-TIME-01a)\nSelect Active Project & Task" as UC_TIME01A
    usecase "(UC-TIME-01b)\nBuffer & Sync Offline Time Logs" as UC_TIME01B
    usecase "(UC-TIME-01c)\nTag Multi-Monitor Timer Focus" as UC_TIME01C

    ' Mobile Timer
    usecase "(UC-TIME-02)\nClock In / Out on Mobile App" as UC_TIME02
    usecase "(UC-TIME-02a)\nSwitch Active Tasks on Mobile" as UC_TIME02A
    usecase "(UC-TIME-02b)\nAttach Field Service Photos" as UC_TIME02B
}

' =====================================================
' SECONDARY ACTORS (RIGHT SIDE)
' =====================================================
actor "Desktop Agent Service" as DESK_SVC
actor "Mobile Service" as MOB_SVC

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
' Left Actors to Use Cases
EMP --> UC_TIME01
EMP --> UC_TIME02

' Use Cases to Right Actors
UC_TIME01 --> DESK_SVC
UC_TIME01B --> DESK_SVC
UC_TIME01C --> DESK_SVC

UC_TIME02 --> MOB_SVC
UC_TIME02B --> MOB_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_TIME01 ..> UC_TIME01A : <<include>>
UC_TIME01B ..> UC_TIME01 : <<extend>>
UC_TIME01C ..> UC_TIME01 : <<extend>>

UC_TIME02 ..> UC_TIME02A : <<include>>
UC_TIME02B ..> UC_TIME02 : <<extend>>

@enduml
```
