# PEOPLE MANAGEMENT - ONBOARDING & OFFBOARDING DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Onboarding & Offboarding Workflow (Quy trình Tiếp nhận & Thôi việc)** thuộc phân hệ People Management.

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
' USE CASES FOR ONBOARDING / OFFBOARDING
' =====================================================
package "Onboarding & Offboarding Workflow" {
  usecase "UC-PPL-03: Onboarding & Offboarding Workflow" as UC_WORK
  usecase "Automate Account Provisioning" as UC_PROV
  usecase "Track Equipment & Asset Handover" as UC_ASSET
  usecase "Process Exit Checklist & Task Handover" as UC_EXIT
  usecase "Revoke Access & Archive Account" as UC_REVOKE
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Email Service" as MAIL

MGR -[hidden]down-> MAIL

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR -right-> UC_WORK

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_WORK <-left- MGR
UC_PROV <-left- MAIL

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_WORK .down.> UC_PROV : <<include>>
UC_WORK .down.> UC_ASSET : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_EXIT .up.> UC_WORK : <<extend>>
UC_REVOKE .up.> UC_WORK : <<extend>>

@enduml
```
