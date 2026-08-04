# GPS ATTENDANCE - LIVE MAP & ROUTE TRACKING DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Live Map Location & Shift Route Tracking (Bản đồ Live Map & Lịch sử Lộ trình)** thuộc phân hệ GPS Attendance.

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
' USE CASES FOR LIVE MAP & ROUTE TRACKING
' =====================================================
package "Live Map & Route Tracking" {
  usecase "UC-GPS-02: Live Map Location & Shift Route Tracking" as UC_MAP
  usecase "Track Real-time Field Staff Position" as UC_POS
  usecase "Log Shift Movement Route History" as UC_ROUTE
  usecase "Export Route Movement Log" as UC_EXPORT
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Staff\n(Field Employee)" as EMP
actor "GPS Location Service" as GPS

EMP -[hidden]down-> GPS

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
MGR -right-> UC_MAP

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_POS <-left- EMP
UC_ROUTE <-left- GPS

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_MAP .down.> UC_POS : <<include>>
UC_MAP .down.> UC_ROUTE : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_EXPORT .up.> UC_MAP : <<extend>>

@enduml
```
