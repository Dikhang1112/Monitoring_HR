# SCHEDULING & TIME-OFF - LEAVE MANAGEMENT USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Managing Time-Off Requests & Approving Multi-Level Leave** within the Scheduling & Time-Off subsystem, formatted for Draw.io (Left Primary Actors | Center Boundary | Right Secondary Actors).

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
rectangle "HR Management Platform - Leave Management Subsystem" {
    
    usecase "(UC-SCHED-02)\nManage Time-off & Leave Requests" as UC_SCHED02
    usecase "(UC-SCHED-02a)\nVerify Available Leave Balances" as UC_SCHED02A
    usecase "(UC-SCHED-02b)\nAttach Medical Note Documentation" as UC_SCHED02B
    usecase "(UC-SCHED-02c)\nApprove Multi-level Leave Requests" as UC_SCHED02C
}

' =====================================================
' SECONDARY ACTORS (RIGHT SIDE)
' =====================================================
actor "Manager" as MGR
actor "Admin-Tenant" as ADMIN
actor "Leave Service" as LEAVE_SVC

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
' Left Actors to Use Cases
EMP --> UC_SCHED02

' Use Cases to Right Actors
UC_SCHED02C --> MGR
UC_SCHED02C --> ADMIN
UC_SCHED02A --> LEAVE_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_SCHED02 ..> UC_SCHED02A : <<include>>
UC_SCHED02 ..> UC_SCHED02C : <<include>>
UC_SCHED02B ..> UC_SCHED02 : <<extend>>

@enduml
```
