# TIME TRACKING - DESKTOP APP TIMER DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Desktop App Timer (Bộ đếm thời gian trên Desktop)** thuộc phân hệ Time Tracking.

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
actor "Staff\n(Internal Employee)" as EMP

' =====================================================
' USE CASES FOR DESKTOP TIMER
' =====================================================
package "Desktop App Timer" {
  usecase "UC-TIME-01: Start / Pause / Stop Desktop Work Timer" as UC_TIMER
  usecase "Select Active Project & Task" as UC_TASK
  usecase "System Tray Integration & Quick Hotkeys" as UC_TRAY
  usecase "Buffer Offline Work Time" as UC_BUFF
  usecase "Sync Offline Timesheet when Reconnected" as UC_SYNC
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Desktop Agent Service" as DESK

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
EMP -right-> UC_TIMER

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_TIMER <-left- DESK
UC_SYNC <-left- DESK

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_TIMER .down.> UC_TASK : <<include>>
UC_TIMER .down.> UC_TRAY : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_BUFF .up.> UC_TIMER : <<extend>>
UC_SYNC .up.> UC_BUFF : <<extend>>

@enduml
```
