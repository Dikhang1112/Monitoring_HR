# PEOPLE MANAGEMENT - EMPLOYEE PROFILES DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Employee Profile Management (Quản lý Hồ sơ Nhân sự)** thuộc phân hệ People Management.

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
actor "Admin-Tenant\n(HR Admin)" as HR

' =====================================================
' USE CASES FOR EMPLOYEE PROFILES
' =====================================================
package "Employee Profile Management" {
  usecase "UC-PPL-01: Employee Profile Management" as UC_PROF
  usecase "Assign Department & Direct Manager" as UC_DEPT
  usecase "Record Emergency Contacts & Bank Info" as UC_BANK
  usecase "Import / Export Employee Records" as UC_IMP
  usecase "Track Employment Contract History" as UC_CONT
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Staff" as EMP

MGR -[hidden]down-> EMP

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR -right-> UC_PROF

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_PROF <-left- MGR
UC_PROF <-left- EMP

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_PROF .down.> UC_DEPT : <<include>>
UC_PROF .down.> UC_BANK : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_IMP .up.> UC_PROF : <<extend>>
UC_CONT .up.> UC_PROF : <<extend>>

@enduml
```
