# PRODUCTIVITY MONITORING - APP & URL CLASSIFICATION DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **App & URL Productivity Classification (Phân loại Ứng dụng & Trang web)** thuộc phân hệ Productivity Monitoring.

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
' USE CASES FOR APP & URL CLASSIFICATION
' =====================================================
package "App & URL Productivity Classification" {
  usecase "UC-PROD-03: App & Website Productivity Classification" as UC_APP
  usecase "Assign Productivity Labels (Productive/Unproductive/Neutral)" as UC_LABEL
  usecase "Log Active Window Title & Domain URL" as UC_LOG
  usecase "Configure Department-specific Classification Overrides" as UC_OVERRIDE
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Manager" as MGR

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR -right-> UC_APP

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_APP <-left- MGR

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_APP .down.> UC_LABEL : <<include>>
UC_APP .down.> UC_LOG : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_OVERRIDE .up.> UC_APP : <<extend>>

@enduml
```
