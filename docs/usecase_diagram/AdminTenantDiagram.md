# HR MANAGEMENT PLATFORM - ADMIN-TENANT DETAILED USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for the **Admin-Tenant Detailed Use Case Diagram** of the HR Management Platform.

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman

' CHỐNG DÍNH MŨI TÊN & LÀM THẲNG CHỮ <<include>>, <<extend>>
skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

' =====================================================
' STYLING CONFIGURATION
' =====================================================
skinparam usecase {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 11
  FontName Arial
}

skinparam package {
  BackgroundColor #f1f5f9
  BorderColor #64748b
  FontColor #334155
  FontStyle bold
  FontSize 12
}

skinparam actor {
  BackgroundColor #0f172a
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 13
  FontStyle bold
}

' =====================================================
' PRIMARY ACTOR (BÊN TRÁI)
' =====================================================
actor "Admin-Tenant\n(HR Admin)" as HR

' =====================================================
' SYSTEM BOUNDARY & DETAILED USE CASES FOR ADMIN-TENANT
' =====================================================
rectangle "Admin-Tenant Detailed Boundary" {

  package "1. People & Organization Management" {
    usecase "UC-PPL-01: Employee Profile Management" as UC_PROFILE
    usecase "Assign Department & Contract" as UC_DEPT
    usecase "Import / Export Employee Records" as UC_IMP
    usecase "UC-PPL-02: Organizational Structure Setup" as UC_ORG
    usecase "UC-PPL-04: Role & Permission Management (RBAC)" as UC_ROLE
  }

  package "2. Productivity & URL Classification" {
    usecase "UC-APP-01: App & Website Productivity Classification" as UC_APP
    usecase "Flag Domains as Productive / Unproductive" as UC_FLAG
  }

  package "3. Payroll & Invoicing" {
    usecase "UC-PAY-01: Automated Salary Calculation" as UC_SAL
    usecase "Calculate Overtime & Tardiness Deductions" as UC_OT
    usecase "UC-PAY-03: Client Invoice Generation" as UC_INV
    usecase "Export PDF Invoice Statement" as UC_PDF
  }
}

' =====================================================
' SECONDARY ACTORS (TÁC NHÂN PHỤ BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "System Service" as SYS

MGR -[hidden]down-> SYS

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR --> UC_PROFILE
HR --> UC_ORG
HR --> UC_ROLE
HR --> UC_APP
HR --> UC_SAL
HR --> UC_INV

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_PROFILE --> MGR
UC_SAL --> SYS
UC_INV --> SYS

' =====================================================
' INCLUDE RELATIONSHIPS
' =====================================================
UC_PROFILE ..> UC_DEPT : <<include>>
UC_APP ..> UC_FLAG : <<include>>
UC_SAL ..> UC_OT : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS
' =====================================================
UC_IMP ..> UC_PROFILE : <<extend>>
UC_PDF ..> UC_INV : <<extend>>

@enduml
```
