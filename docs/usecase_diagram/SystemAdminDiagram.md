# HR MANAGEMENT PLATFORM - SYSTEM-ADMIN DETAILED USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for the **System-Admin Detailed Use Case Diagram** of the HR Management Platform, synchronized with [`ListUsecase.md`](file:///d:/Monitoring_HR/docs/usecase_diagram/ListUsecase.md).

![System-Admin Detailed Use Case Diagram](../images/System-Admin.png)

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
actor "System-Admin\n(Super Admin)" as SA

' =====================================================
' SYSTEM BOUNDARY & DETAILED USE CASES FOR SYSTEM-ADMIN
' =====================================================
rectangle "System-Admin Detailed Boundary" {

  ' --- Phân hệ 1 ---
  package "1. System & Tenant Administration" {
    usecase "UC-SYS-01: Tenant Provisioning & Management" as UC_PROV
    usecase "Configure Tenant Quota & Licenses" as UC_QUOTA
    usecase "Send Credentials & Welcome Email" as UC_EMAIL
    usecase "Suspend / Reactivate Tenant" as UC_SUSP
  }

  ' --- Phân hệ 2 ---
  package "2. Billing & Subscription" {
    usecase "UC-SYS-02: Plan & Subscription Management" as UC_PLAN
    usecase "Process Subscription Upgrade / Downgrade" as UC_UPG
    usecase "Handle Billing & Payment Gateway" as UC_PAY
  }

  ' --- Phân hệ 3 ---
  package "3. System Audit" {
    usecase "UC-SYS-03: System Audit Log Monitoring" as UC_AUDIT
    usecase "Filter Logs by Tenant & Severity" as UC_FILT
    usecase "Export Security Audit Logs" as UC_EXP
  }

  ' --- Phân hệ 4 ---
  package "4. Global Integration" {
    usecase "UC-SYS-04: Global Integration Setup" as UC_API
    usecase "Validate Integration Connection" as UC_VAL
  }
}

' =====================================================
' SECONDARY ACTORS (TÁC NHÂN PHỤ BÊN PHẢI)
' =====================================================
actor "Email Service" as MAIL
actor "System Service" as SYS

MAIL -[hidden]down-> SYS

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
SA --> UC_PROV
SA --> UC_PLAN
SA --> UC_AUDIT
SA --> UC_API

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_EMAIL --> MAIL
UC_PAY --> SYS
UC_VAL --> SYS

' =====================================================
' INCLUDE RELATIONSHIPS
' =====================================================
UC_PROV ..> UC_QUOTA : <<include>>
UC_PROV ..> UC_EMAIL : <<include>>
UC_PLAN ..> UC_PAY : <<include>>
UC_AUDIT ..> UC_FILT : <<include>>
UC_API ..> UC_VAL : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS
' =====================================================
UC_SUSP ..> UC_PROV : <<extend>>
UC_UPG ..> UC_PLAN : <<extend>>
UC_EXP ..> UC_AUDIT : <<extend>>

@enduml
```
