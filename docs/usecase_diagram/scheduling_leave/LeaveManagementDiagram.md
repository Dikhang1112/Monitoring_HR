# SCHEDULING & TIME-OFF - TIME-OFF & LEAVE MANAGEMENT DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Time-off & Leave Request Management (Quản lý Đăng ký Nghỉ phép)** thuộc phân hệ Scheduling & Time-Off.

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
' USE CASES FOR LEAVE MANAGEMENT
' =====================================================
package "Time-Off & Leave Management" {
  usecase "UC-SCHED-02: Time-off & Leave Request Management" as UC_LEAVE
  usecase "Check Available Leave Balance" as UC_BAL
  usecase "Submit Leave Request with Attachments" as UC_SUBMIT
  usecase "Multi-level Manager & HR Approval" as UC_APP
  usecase "Deduct Approved Leave Balance" as UC_DEDUCT
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Admin-Tenant\n(HR Admin)" as HR

MGR -[hidden]down-> HR

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
EMP -right-> UC_LEAVE

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_APP <-left- MGR
UC_DEDUCT <-left- HR

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_LEAVE .down.> UC_BAL : <<include>>
UC_LEAVE .down.> UC_SUBMIT : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_APP .up.> UC_LEAVE : <<extend>>
UC_DEDUCT .up.> UC_APP : <<extend>>

@enduml
```
