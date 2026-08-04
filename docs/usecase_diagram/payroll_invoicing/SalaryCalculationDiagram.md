# PAYROLL & CLIENT INVOICING - AUTOMATED SALARY CALCULATION DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Automated Monthly Salary Calculation (Tính lương tự động hàng tháng)** thuộc phân hệ Payroll & Client Invoicing.

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
' USE CASES FOR AUTOMATED SALARY CALCULATION
' =====================================================
package "Automated Salary Calculation" {
  usecase "UC-PAY-01: Automated Monthly Salary Calculation" as UC_SAL
  usecase "Integrate Timesheet Approved Work Hours" as UC_TIME
  usecase "Apply Tardiness & Absence Deductions" as UC_DED
  usecase "Generate Monthly Salary Sheet" as UC_SHEET
  usecase "Export Personal Paystub PDF" as UC_STUB
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "System Service" as SYS
actor "Staff" as EMP

SYS -[hidden]down-> EMP

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
HR -right-> UC_SAL

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_TIME <-left- SYS
UC_STUB <-left- EMP

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_SAL .down.> UC_TIME : <<include>>
UC_SAL .down.> UC_DED : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_SHEET .up.> UC_SAL : <<extend>>
UC_STUB .up.> UC_SHEET : <<extend>>

@enduml
```
