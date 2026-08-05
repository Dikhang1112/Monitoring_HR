# SCHEDULING & TIME-OFF - SHIFT PLANNING & RULES USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Planning Weekly Work Shifts & Reconciling Attendance Rules** within the Scheduling & Time-Off subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

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
actor "Manager" as MGR
actor "Staff" as EMP
actor "Admin-Tenant" as ADMIN

MGR -[hidden]down-> EMP
EMP -[hidden]down-> ADMIN

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Shift Planning & Rules" {
    
    ' High-Level Shift Planning Group
    usecase "Plan Weekly Shift Schedules" as UC_SCHED01
    usecase "Configure Worksite Locations" as UC_SCHED01B
    usecase "Validate Shift Conflicts" as UC_SCHED01C

    UC_SCHED01 -[hidden]down-> UC_SCHED01B
    UC_SCHED01B -[hidden]down-> UC_SCHED01C

    ' High-Level Attendance Rules Group
    usecase "Reconcile Attendance Rules" as UC_SCHED03
    usecase "Configure Grace Period" as UC_SCHED03A
    usecase "Log Tardiness Penalties" as UC_SCHED03B

    UC_SCHED03 -[hidden]down-> UC_SCHED03A
    UC_SCHED03A -[hidden]down-> UC_SCHED03B
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Scheduling Engine" as SCHED_ENGINE

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
MGR --> UC_SCHED01
EMP --> UC_SCHED01B

ADMIN --> UC_SCHED03A

UC_SCHED01C --> SCHED_ENGINE
UC_SCHED03B --> SCHED_ENGINE

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_SCHED01 ..> UC_SCHED01C : <<include>>
UC_SCHED01B ..> UC_SCHED01 : <<extend>>

UC_SCHED03 ..> UC_SCHED03A : <<include>>
UC_SCHED03B ..> UC_SCHED03 : <<extend>>

@endl
```
