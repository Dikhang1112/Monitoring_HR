# PEOPLE MANAGEMENT - ORG STRUCTURE DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Organizational Structure Setup (Cơ cấu Tổ chức & Phòng ban)** thuộc phân hệ People Management.

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
' USE CASES FOR ORG STRUCTURE
' =====================================================
package "Organizational Structure Setup" {
  usecase "UC-PPL-02: Organizational Structure Setup" as UC_ORG
  usecase "Build Department & Sub-unit Tree" as UC_TREE
  usecase "Assign Department Head & Deputies" as UC_HEAD
  usecase "View Headcount & Roster Statistics" as UC_STAT
  usecase "Merge / Dissolve Department" as UC_MERGE
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Director" as DIR
actor "Manager" as MGR

DIR -[hidden]down-> MGR

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR -right-> UC_ORG

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_ORG <-left- DIR
UC_ORG <-left- MGR

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_ORG .down.> UC_TREE : <<include>>
UC_ORG .down.> UC_HEAD : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_STAT .up.> UC_ORG : <<extend>>
UC_MERGE .up.> UC_ORG : <<extend>>

@enduml
```
