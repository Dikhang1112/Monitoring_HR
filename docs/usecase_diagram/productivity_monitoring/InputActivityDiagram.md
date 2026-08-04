# PRODUCTIVITY MONITORING - INPUT ACTIVITY TRACKING DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Input Activity Tracking (Theo dõi tương tác Phím & Chuột)** thuộc phân hệ Productivity Monitoring.

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
actor "Desktop Agent Service" as DESK

' =====================================================
' USE CASES FOR INPUT ACTIVITY TRACKING
' =====================================================
package "Input Activity Tracking" {
  usecase "UC-PROD-02: Keystroke & Mouse Input Activity Tracking" as UC_INP
  usecase "Calculate Active vs Idle Session Ratio (%)" as UC_RATIO
  usecase "Detect Anti-AutoClicker & Fake Activity Anomaly" as UC_FAKE
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Staff\n(Internal Employee)" as EMP

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
DESK -right-> UC_INP

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_INP <-left- EMP

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_INP .down.> UC_RATIO : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_FAKE .up.> UC_INP : <<extend>>

@enduml
```
