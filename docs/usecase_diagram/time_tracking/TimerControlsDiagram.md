# TIME TRACKING - WORK TIMER CONTROLS USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Controlling Desktop & Mobile Work Timers** within the Time Tracking subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman
skinparam linetype ortho

skinparam usecase {
  BackgroundColor #EFF6FF
  BorderColor #2563EB
  BorderThickness 2
  FontSize 14
  FontStyle bold
  FontName "Segoe UI"
}

skinparam actor {
  BackgroundColor #0F172A
  BorderColor #0284C7
  FontSize 13
  FontStyle bold
  FontName "Segoe UI"
}

' =====================================================
' PRIMARY ACTORS (OUTSIDE BOUNDARY - LEFT SIDE)
' =====================================================
actor "Staff" as EMP

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Timer Controls" {
    
    ' High-Level Desktop Work Timer Group
    usecase "Track Desktop Work Time" as UC_TIME01
    usecase "Manage Project Tasks" as UC_TIME01A
    usecase "Sync Work Logs" as UC_TIME01B

    UC_TIME01 -[hidden]down-> UC_TIME01A
    UC_TIME01A -[hidden]down-> UC_TIME01B

    ' High-Level Mobile Shift Timer Group
    usecase "Track Mobile Shift Time" as UC_TIME02
    usecase "Manage Field Service Tasks" as UC_TIME02A

    UC_TIME02 -[hidden]down-> UC_TIME02A
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Desktop Agent Service" as DESK_SVC
actor "Mobile Service" as MOB_SVC

DESK_SVC -[hidden]down-> MOB_SVC

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
EMP --> UC_TIME01
EMP --> UC_TIME02

UC_TIME01 --> DESK_SVC
UC_TIME01B --> DESK_SVC

UC_TIME02 --> MOB_SVC
UC_TIME02A --> MOB_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_TIME01 ..> UC_TIME01A : <<include>>
UC_TIME01B ..> UC_TIME01 : <<extend>>

UC_TIME02 ..> UC_TIME02A : <<include>>

@endl
```
