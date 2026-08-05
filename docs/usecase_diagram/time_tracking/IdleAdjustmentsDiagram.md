# TIME TRACKING - IDLE DETECTION & MANUAL TIMESHEETS USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Detecting Inactivity & Approving Manual Timesheets** within the Time Tracking subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

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
rectangle "HR Management Platform - Idle & Manual Timesheets" {
    
    usecase "Monitor Inactivity & Idle Time" as UC_TIME03
    usecase "Manage Idle Time Warnings" as UC_TIME03A
    usecase "Approve Manual Timesheets" as UC_TIME03B

    UC_TIME03 -[hidden]down-> UC_TIME03A
    UC_TIME03A -[hidden]down-> UC_TIME03B
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Manager" as MGR
actor "Desktop Agent Service" as DESK_SVC

MGR -[hidden]down-> DESK_SVC

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
EMP --> UC_TIME03
EMP --> UC_TIME03B

UC_TIME03B --> MGR
UC_TIME03 --> DESK_SVC
UC_TIME03A --> DESK_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_TIME03 ..> UC_TIME03A : <<include>>
UC_TIME03B ..> UC_TIME03 : <<extend>>

@endl
```
