# PEOPLE MANAGEMENT - EMPLOYEE PROFILES & ORG STRUCTURE USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Managing Employee Profiles & Setting Up Organizational Structure** within the People Management subsystem, compatible with Draw.io.

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
' PRIMARY ACTORS
' =====================================================
actor "Admin-Tenant" as ADMIN
actor "Manager" as MGR
actor "Staff" as EMP

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - People Management (Profiles & Org)" {
    
    ' Employee Profiles Group
    usecase "(UC-PPL-01)\nManage Employee Profiles" as UC_PPL01
    usecase "(UC-PPL-01a)\nAssign Dept & Direct Manager" as UC_PPL01A
    usecase "(UC-PPL-01b)\nImport / Export Employee Records" as UC_PPL01B
    usecase "(UC-PPL-01c)\nUpdate Personal & Emergency Details" as UC_PPL01C

    ' Org Structure Group
    usecase "(UC-PPL-02)\nSetup Organizational Structure" as UC_PPL02
    usecase "(UC-PPL-02a)\nAppoint Dept Head & Deputies" as UC_PPL02A
    usecase "(UC-PPL-02b)\nMerge & Dissolve Departments" as UC_PPL02B
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
ADMIN --> UC_PPL01
ADMIN --> UC_PPL02

MGR --> UC_PPL01
MGR --> UC_PPL02

EMP --> UC_PPL01C

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PPL01 ..> UC_PPL01A : <<include>>
UC_PPL01B ..> UC_PPL01 : <<extend>>
UC_PPL01C ..> UC_PPL01 : <<extend>>

UC_PPL02 ..> UC_PPL02A : <<include>>
UC_PPL02B ..> UC_PPL02 : <<extend>>

@enduml
```
