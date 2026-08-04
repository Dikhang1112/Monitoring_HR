# PAYROLL & CLIENT INVOICING - OVERTIME PAY & ALLOWANCES DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Overtime Pay & Allowance Management (Tính lương tăng ca & Phụ cấp)** thuộc phân hệ Payroll & Client Invoicing.

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
actor "Admin-Tenant\n(HR Admin / Payroll)" as HR

' =====================================================
' USE CASES FOR OVERTIME PAY & ALLOWANCES
' =====================================================
package "Overtime Pay & Allowance Management" {
  usecase "UC-PAY-02: Overtime Pay & Allowance Management" as UC_OT
  usecase "Apply Overtime Multipliers (x1.5, x2.0, x3.0)" as UC_MULT
  usecase "Calculate Fixed & Variable Allowances" as UC_ALLOW
  usecase "Trigger Overtime Budget Cap Warning" as UC_WARN
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Director" as DIR

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR -right-> UC_OT

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_WARN <-left- DIR

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_OT .down.> UC_MULT : <<include>>
UC_OT .down.> UC_ALLOW : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_WARN .up.> UC_OT : <<extend>>

@enduml
```
