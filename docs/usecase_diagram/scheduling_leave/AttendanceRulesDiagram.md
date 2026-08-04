# SCHEDULING & TIME-OFF - ATTENDANCE RULES & PUNCTUALITY DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Attendance Rules & Punctuality Violation Log (Quy tắc Chấm công & Ghi nhận Đi muộn/Về sớm)** thuộc phân hệ Scheduling & Time-Off.

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
actor "System Service\n(Attendance Engine)" as SYS

' =====================================================
' USE CASES FOR ATTENDANCE RULES & PUNCTUALITY
' =====================================================
package "Attendance Rules & Punctuality" {
  usecase "UC-SCHED-03: Attendance Rules & Punctuality Violation Log" as UC_RULE
  usecase "Apply Work Shift Grace Period" as UC_GRACE
  usecase "Log Late Arrival & Early Departure Violation" as UC_VIOL
  usecase "Flag Unexcused Absence" as UC_ABSENT
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
SYS -right-> UC_RULE

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_RULE <-left- MGR
UC_RULE <-left- HR

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_RULE .down.> UC_GRACE : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_VIOL .up.> UC_RULE : <<extend>>
UC_ABSENT .up.> UC_RULE : <<extend>>

@enduml
```
