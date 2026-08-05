# PEOPLE MANAGEMENT - LIFECYCLE & RBAC USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Executing Onboarding/Offboarding Workflows & Managing RBAC Roles** within the People Management subsystem, compatible with Draw.io.

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
actor "Admin-Tenant" as ADMIN
actor "System-Admin" as SYSADMIN
actor "Manager" as MGR
actor "Staff" as EMP

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Lifecycle & RBAC Subsystem" {
    
    ' Onboarding & Offboarding
    usecase "(UC-PPL-03)\nExecute Onboarding Workflow" as UC_PPL03
    usecase "(UC-PPL-03a)\nTrack Hardware Asset Handover" as UC_PPL03A
    usecase "(UC-PPL-03b)\nProcess Offboarding & Archive Accounts" as UC_PPL03B

    ' RBAC Roles & Permissions
    usecase "(UC-PPL-04)\nManage Roles & Permissions (RBAC)" as UC_PPL04
    usecase "(UC-PPL-04a)\nCreate Custom Role Groups" as UC_PPL04A
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
ADMIN --> UC_PPL03
ADMIN --> UC_PPL04

SYSADMIN --> UC_PPL04

MGR --> UC_PPL03
MGR --> UC_PPL03B

EMP --> UC_PPL03A

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PPL03 ..> UC_PPL03A : <<include>>
UC_PPL03 ..> UC_PPL03B : <<include>>

UC_PPL04A ..> UC_PPL04 : <<extend>>

@enduml
```
