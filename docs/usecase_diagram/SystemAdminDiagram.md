# HR MANAGEMENT PLATFORM - SYSTEM-ADMIN DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** và sơ đồ **Use Case Chi tiết cho Actor System-Admin (System-Admin Detailed Use Case Diagram)** của hệ thống HR Management Platform, hoàn toàn đồng bộ mã UC-ID và tên Use Case với [`ListUsecase.md`](file:///d:/Monitoring_HR/docs/usecase_diagram/ListUsecase.md).

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
' PRIMARY ACTOR CONNECTIONS (BÊN TRÁI HƯỚNG SANG PHẢI)
' =====================================================
SA -right-> UC_PROV
SA -right-> UC_PLAN
SA -right-> UC_AUDIT
SA -right-> UC_API

' =====================================================
' SECONDARY ACTOR CONNECTIONS (BÊN PHẢI HƯỚNG SANG TRÁI)
' =====================================================
UC_EMAIL <-left- MAIL
UC_PAY <-left- SYS
UC_VAL <-left- SYS

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ NẰM NGANG VUÔNG GÓC)
' =====================================================
UC_PROV .down.> UC_QUOTA : <<include>>
UC_PROV .right.> UC_EMAIL : <<include>>
UC_PLAN .down.> UC_PAY : <<include>>
UC_AUDIT .down.> UC_FILT : <<include>>
UC_API .down.> UC_VAL : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ NẰM NGANG VUÔNG GÓC)
' =====================================================
UC_SUSP .up.> UC_PROV : <<extend>>
UC_UPG .up.> UC_PLAN : <<extend>>
UC_EXP .up.> UC_AUDIT : <<extend>>

@enduml
```
