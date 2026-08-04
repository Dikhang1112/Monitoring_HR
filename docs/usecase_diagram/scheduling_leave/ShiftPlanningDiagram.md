# SCHEDULING & TIME-OFF - WEEKLY SHIFT PLANNING DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Weekly Shift & Work Schedule Planning (Lên lịch ca làm việc tuần)** thuộc phân hệ Scheduling & Time-Off.

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
' USE CASES FOR SHIFT PLANNING
' =====================================================
package "Shift & Work Schedule Planning" {
  usecase "UC-SCHED-01: Weekly Shift & Work Schedule Planning" as UC_SCHED
  usecase "Assign Shift Patterns (Morning/Afternoon/Night)" as UC_SHIFT
  usecase "Classify Onsite vs Remote Work Mode" as UC_MODE
  usecase "Publish Schedule & Notify Team Roster" as UC_PUB
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Staff\n(Team Member)" as EMP

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
MGR -right-> UC_SCHED

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_SCHED <-left- EMP

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_SCHED .down.> UC_SHIFT : <<include>>
UC_SCHED .down.> UC_MODE : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_PUB .up.> UC_SCHED : <<extend>>

@enduml
```
