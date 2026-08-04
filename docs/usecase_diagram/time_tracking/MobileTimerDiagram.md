# TIME TRACKING - MOBILE APP TIMER DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Mobile App Timer (Bộ đếm thời gian trên Mobile)** thuộc phân hệ Time Tracking.

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
' USE CASES FOR MOBILE TIMER
' =====================================================
package "Mobile App Timer" {
  usecase "UC-TIME-02: Mobile Clock In / Out & Task Switcher" as UC_MOB
  usecase "Touch Task Switcher & Work Notes" as UC_NOTE
  usecase "Send App Heartbeat Status" as UC_HEART
  usecase "Attach Field Photo Note" as UC_PHOTO
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Mobile Service" as MOB

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
EMP -right-> UC_MOB

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_MOB <-left- MOB
UC_HEART <-left- MOB

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_MOB .down.> UC_NOTE : <<include>>
UC_MOB .down.> UC_HEART : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_PHOTO .up.> UC_MOB : <<extend>>

@enduml
```
