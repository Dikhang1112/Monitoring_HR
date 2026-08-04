# PEOPLE MANAGEMENT - ROLES & PERMISSIONS DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Role & Permission Management (Phân quyền Vai trò RBAC)** thuộc phân hệ People Management.

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
' PRIMARY ACTOR (BÊN TRÁI - CHỈ SYSTEM-ADMIN CÓ QUYỀN)
' =====================================================
actor "System-Admin\n(Super Administrator)" as SA

' =====================================================
' USE CASES FOR ROLES & PERMISSIONS
' =====================================================
package "Role & Permission Management (RBAC)" {
  usecase "UC-PPL-04: Role & Permission Management" as UC_RBAC
  usecase "Assign Default System Roles" as UC_SYSROLE
  usecase "Configure Action Permission Matrix" as UC_MATRIX
  usecase "Create Custom Role Groups" as UC_CUSTOM
  usecase "Configure Data Scope Scoping" as UC_SCOPE
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Admin-Tenant\n(HR Admin)" as HR
actor "System Service" as SYS

HR -[hidden]down-> SYS

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
SA -right-> UC_RBAC

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_RBAC <-left- HR
UC_SCOPE <-left- SYS

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_RBAC .down.> UC_SYSROLE : <<include>>
UC_RBAC .down.> UC_MATRIX : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_CUSTOM .up.> UC_RBAC : <<extend>>
UC_SCOPE .up.> UC_RBAC : <<extend>>

@enduml
```
