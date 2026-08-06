# PAYROLL & CLIENT INVOICING - AUTOMATED PAYROLL USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **HR Management Platform - Automated Payroll & Overtime** within the Payroll & Client Invoicing subsystem.

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman

skinparam usecase {
  BackgroundColor #ffffff
  BorderColor #333333
  BorderThickness 1
  FontSize 13
  FontName "Segoe UI"
}

skinparam actor {
  BackgroundColor #ffffff
  BorderColor #333333
  FontSize 13
  FontName "Segoe UI"
}

' =====================================================
' ACTORS
' =====================================================
actor "Accountant" as ACCT
actor "Payroll Engine" as PAY_ENGINE

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Automated Payroll & Overtime" {
    usecase "Calculate Monthly Payroll" as UC_CALC
    usecase "Manage Overtime Compensation" as UC_OT
    
    usecase "Integrate Timesheet Data" as UC_TS
    usecase "Audit Monthly Payroll Sheets" as UC_AUDIT
    usecase "Configure Overtime Multipliers" as UC_MULTI
    usecase "Monitor Overtime Budget Caps" as UC_CAPS
}

' =====================================================
' CONNECTIONS & RELATIONSHIPS
' =====================================================
ACCT --> UC_CALC
ACCT --> UC_OT

UC_CALC ..> UC_TS : <<include>>
UC_CALC ..> UC_AUDIT : <<include>>

PAY_ENGINE --> UC_TS
PAY_ENGINE --> UC_AUDIT

UC_OT ..> UC_MULTI : <<include>>
UC_CAPS ..> UC_OT : <<extend>>

@enduml
```
