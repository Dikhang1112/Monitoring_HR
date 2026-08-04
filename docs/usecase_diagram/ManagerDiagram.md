# HR MANAGEMENT PLATFORM - MANAGER DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** và sơ đồ **Use Case Chi tiết cho Actor Manager (Department / Project Manager Detailed Use Case Diagram)** của hệ thống HR Management Platform.

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
actor "Manager\n(Department / Project Head)" as MGR

' =====================================================
' SYSTEM BOUNDARY & DETAILED USE CASES FOR MANAGER
' =====================================================
rectangle "Manager Detailed Boundary" {

  package "1. Scheduling & Time-off Approval" {
    usecase "UC-SCHED-01: Weekly Schedule Planning" as UC_SCHED
    usecase "Assign Shift Patterns (Onsite / Remote)" as UC_SHIFT
    usecase "UC-SCHED-02: Approve Employee Leave Request" as UC_LEAVE
    usecase "Deduct Leave Balance upon Approval" as UC_DEDUCT
  }

  package "2. Team Monitoring & Alerts" {
    usecase "UC-DASH-02: Real-time Status Board" as UC_STATUS
    usecase "Filter Live Status by Team" as UC_TEAM
    usecase "UC-HL-03: Handle Anomaly & Extended Idle Alert" as UC_IDLEALT
    usecase "Annotate Verified Offline Activity" as UC_NOTE
  }

  package "3. Project & Task Management" {
    usecase "UC-PM-01: Project Task & Kanban Management" as UC_KANBAN
    usecase "Assign Project Tasks to Staff" as UC_ASSIGN
  }
}

' =====================================================
' SECONDARY ACTORS (TÁC NHÂN PHỤ BÊN PHẢI)
' =====================================================
actor "Staff" as EMP
actor "System Service" as SYS

EMP -[hidden]down-> SYS

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
MGR -right-> UC_SCHED
MGR -right-> UC_LEAVE
MGR -right-> UC_STATUS
MGR -right-> UC_IDLEALT
MGR -right-> UC_KANBAN

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_LEAVE <-left- EMP
UC_KANBAN <-left- EMP
UC_IDLEALT <-left- SYS

' =====================================================
' INCLUDE RELATIONSHIPS (VUÔNG GÓC HƯỚNG XUỐNG)
' =====================================================
UC_SCHED .down.> UC_SHIFT : <<include>>
UC_LEAVE .down.> UC_DEDUCT : <<include>>
UC_STATUS .down.> UC_TEAM : <<include>>
UC_KANBAN .down.> UC_ASSIGN : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (VUÔNG GÓC HƯỚNG LÊN)
' =====================================================
UC_NOTE .up.> UC_IDLEALT : <<extend>>

@enduml
```
