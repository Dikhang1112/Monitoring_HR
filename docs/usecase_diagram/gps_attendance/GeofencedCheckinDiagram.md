# GPS ATTENDANCE - GEOFENCED CHECK-IN DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Geofenced GPS Check-in (Chấm công ranh giới GPS)** thuộc phân hệ GPS Attendance.

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
actor "Staff\n(Field Employee)" as EMP

' =====================================================
' USE CASES FOR GEOFENCED CHECK-IN
' =====================================================
package "Geofenced GPS Attendance" {
  usecase "UC-GPS-01: Geofenced GPS Check-in" as UC_GPS
  usecase "Configure Branch GPS Coordinates & Radius" as UC_CONF
  usecase "Verify Real-time GPS Location upon Check-in" as UC_VERIFY
  usecase "Reject Out-of-Perimeter Check-in" as UC_REJECT
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Admin-Tenant\n(HR Admin)" as HR
actor "Location Service" as LOC

HR -[hidden]down-> LOC

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
EMP -right-> UC_GPS

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_CONF <-left- HR
UC_VERIFY <-left- LOC

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_GPS .down.> UC_CONF : <<include>>
UC_GPS .down.> UC_VERIFY : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_REJECT .up.> UC_GPS : <<extend>>

@enduml
```
