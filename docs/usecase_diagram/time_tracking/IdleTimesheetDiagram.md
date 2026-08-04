# TIME TRACKING - IDLE DETECTION & MANUAL TIMESHEET DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Idle Detection & Manual Timesheet (Phát hiện Inactive & Timesheet Thủ công)** thuộc phân hệ Time Tracking.

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
' USE CASES FOR IDLE DETECTION & TIMESHEET
' =====================================================
package "Idle Detection & Manual Timesheet" {
  usecase "UC-TIME-03: Idle Inactivity Detection & Timesheet Approval" as UC_IDLE
  usecase "Detect Keyboard/Mouse Inactivity Threshold" as UC_THRESH
  usecase "Prompt Inactive State Warning Popup" as UC_POPUP
  usecase "Keep or Discard Idle Time Selection" as UC_KEEP
  usecase "Submit Manual Timesheet Request" as UC_MANUAL
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Desktop Agent Service" as DESK

MGR -[hidden]down-> DESK

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
EMP -right-> UC_IDLE

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_MANUAL <-left- MGR
UC_THRESH <-left- DESK

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_IDLE .down.> UC_THRESH : <<include>>
UC_IDLE .down.> UC_POPUP : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_KEEP .up.> UC_IDLE : <<extend>>
UC_MANUAL .up.> UC_IDLE : <<extend>>

@enduml
```
