# PRODUCTIVITY MONITORING - SCREENSHOT & INPUT ACTIVITY USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Capturing Automated Screenshots & Tracking Input Activity** within the Productivity Monitoring subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

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
actor "System Service" as SYS_SVC
actor "Staff" as EMP

SYS_SVC -[hidden]down-> EMP

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Screenshots & Input Activity" {
    
    ' High-Level Screenshot Monitoring Group
    usecase "Monitor Screen Activity" as UC_PROD01
    usecase "Protect Screen Privacy" as UC_PROD01B
    usecase "Sync Encrypted Screenshots" as UC_PROD01C

    UC_PROD01 -[hidden]down-> UC_PROD01B
    UC_PROD01B -[hidden]down-> UC_PROD01C

    ' High-Level Input Activity Group
    usecase "Track Input Activity" as UC_PROD02
    usecase "Analyze Active Work Ratio" as UC_PROD02A

    UC_PROD02 -[hidden]down-> UC_PROD02A
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Desktop Agent App" as DESK_APP
actor "Cloud Storage" as CLOUD

DESK_APP -[hidden]down-> CLOUD

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
SYS_SVC --> UC_PROD01
EMP --> UC_PROD02

UC_PROD01 --> DESK_APP
UC_PROD01C --> DESK_APP
UC_PROD01C --> CLOUD

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PROD01 ..> UC_PROD01C : <<include>>
UC_PROD01B ..> UC_PROD01 : <<extend>>

UC_PROD02 ..> UC_PROD02A : <<include>>

@endl
```
