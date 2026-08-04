# PRODUCTIVITY MONITORING - ACTIVITY SCORE & ALERTS DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Activity Score & Real-time Alerts (Điểm Hiệu suất & Cảnh báo thời gian thực)** thuộc phân hệ Productivity Monitoring.

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
actor "Manager\n(Department Head)" as MGR

' =====================================================
' USE CASES FOR ACTIVITY SCORE & ALERTS
' =====================================================
package "Activity Score & Real-time Alerts" {
  usecase "UC-PROD-04: Activity Score Calculation & Real-time Alerts" as UC_SCORE
  usecase "Calculate Weighted Activity Score Algorithm (%)" as UC_CALC
  usecase "Trigger Low Productivity Alert (< 30%)" as UC_LOW
  usecase "Dispatch Real-time Manager Push Notification" as UC_NOTIF
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "System Service" as SYS
actor "Director" as DIR

SYS -[hidden]down-> DIR

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
MGR -right-> UC_SCORE

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_CALC <-left- SYS
UC_SCORE <-left- DIR

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_SCORE .down.> UC_CALC : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_LOW .up.> UC_SCORE : <<extend>>
UC_NOTIF .up.> UC_LOW : <<extend>>

@enduml
```
