# PEOPLE MANAGEMENT - EMPLOYEE PROFILES & ORG STRUCTURE USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Managing Employee Profiles & Setting Up Organizational Structure** within the People Management subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

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
actor "Admin-Tenant" as ADMIN
actor "Manager" as MGR

ADMIN -[hidden]down-> MGR

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - People Management" {
    
    ' High-Level Profile Group
    usecase "Manage Employee Profiles" as UC_PPL01
    usecase "Import Employee Records" as UC_PPL01B
    usecase "Update Personal Profiles" as UC_PPL01C

    UC_PPL01 -[hidden]down-> UC_PPL01B
    UC_PPL01B -[hidden]down-> UC_PPL01C

    ' High-Level Org Structure Group
    usecase "Manage Org Structure" as UC_PPL02
    usecase "Appoint Dept Leaders" as UC_PPL02A
    usecase "Restructure Departments" as UC_PPL02B

    UC_PPL02 -[hidden]down-> UC_PPL02A
    UC_PPL02A -[hidden]down-> UC_PPL02B
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Staff" as EMP

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
ADMIN --> UC_PPL01
ADMIN --> UC_PPL02

MGR --> UC_PPL01
MGR --> UC_PPL02

UC_PPL01C --> EMP

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PPL01B ..> UC_PPL01 : <<extend>>
UC_PPL01C ..> UC_PPL01 : <<extend>>

UC_PPL02 ..> UC_PPL02A : <<include>>
UC_PPL02B ..> UC_PPL02 : <<extend>>

@endl
```
