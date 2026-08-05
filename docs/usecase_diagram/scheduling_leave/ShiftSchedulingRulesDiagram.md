# SCHEDULING & TIME-OFF - SHIFT PLANNING & RULES USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Planning Weekly Work Shifts & Reconciling Attendance Rules** within the Scheduling & Time-Off subsystem, compatible with Draw.io.

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
' ACTORS
' =====================================================
actor "Manager" as MGR
actor "Staff" as EMP
actor "Admin-Tenant" as ADMIN
actor "Scheduling Engine" as SCHED_ENGINE

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Shift Planning & Rules Subsystem" {
    
    ' Shift Planning
    usecase "(UC-SCHED-01)\nPlan Weekly Work Shift Schedules" as UC_SCHED01
    usecase "(UC-SCHED-01a)\nSelect Shift Pattern Templates" as UC_SCHED01A
    usecase "(UC-SCHED-01b)\nClassify Onsite vs Remote Worksite Mode" as UC_SCHED01B
    usecase "(UC-SCHED-01c)\nValidate Shift Conflict Rules" as UC_SCHED01C

    ' Attendance Rules
    usecase "(UC-SCHED-03)\nReconcile Attendance & Punctuality Rules" as UC_SCHED03
    usecase "(UC-SCHED-03a)\nConfigure Shift Grace Period Allowance" as UC_SCHED03A
    usecase "(UC-SCHED-03b)\nLog Late Arrival Violations" as UC_SCHED03B
    usecase "(UC-SCHED-03c)\nFlag Unexcused Absence Penalties" as UC_SCHED03C
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
MGR --> UC_SCHED01
EMP --> UC_SCHED01B

ADMIN --> UC_SCHED03A

SCHED_ENGINE --> UC_SCHED01C
SCHED_ENGINE --> UC_SCHED03B
SCHED_ENGINE --> UC_SCHED03C

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_SCHED01 ..> UC_SCHED01A : <<include>>
UC_SCHED01 ..> UC_SCHED01C : <<include>>
UC_SCHED01B ..> UC_SCHED01 : <<extend>>

UC_SCHED03 ..> UC_SCHED03A : <<include>>
UC_SCHED03B ..> UC_SCHED03 : <<extend>>
UC_SCHED03C ..> UC_SCHED03 : <<extend>>

@enduml
```
