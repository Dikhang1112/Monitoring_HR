# PAYROLL & CLIENT INVOICING - AUTOMATED PAYROLL USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Calculating Automated Monthly Salaries & Managing Overtime Rules** within the Payroll & Client Invoicing subsystem, formatted for Draw.io (Left Primary Actors | Center Boundary | Right Secondary Actors).

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
  BackgroundColor #EFF6FF
  BorderColor #2563EB
  BorderThickness 1.5
  FontSize 12
  FontStyle bold
  FontName "Segoe UI"
}

skinparam actor {
  BackgroundColor #0F172A
  BorderColor #0284C7
  FontSize 12
  FontStyle bold
  FontName "Segoe UI"
}

' =====================================================
' PRIMARY ACTORS (LEFT SIDE)
' =====================================================
actor "Admin-Tenant" as ADMIN
actor "Director" as DIR

' =====================================================
' SYSTEM BOUNDARY & USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Automated Payroll & Overtime Subsystem" {
    
    ' Salary Calculation
    usecase "(UC-PAY-01)\nCalculate Automated Monthly Salary" as UC_PAY01
    usecase "(UC-PAY-01a)\nIntegrate Verified Timesheet Hours" as UC_PAY01A
    usecase "(UC-PAY-01b)\nDeduct Punctuality & Absence Fines" as UC_PAY01B
    usecase "(UC-PAY-01c)\nAudit Monthly Salary Sheet Payouts" as UC_PAY01C
    usecase "(UC-PAY-01d)\nGenerate Encrypted Paystub PDF Files" as UC_PAY01D

    ' Overtime Management
    usecase "(UC-PAY-02)\nManage Overtime Pay & Allowances" as UC_PAY02
    usecase "(UC-PAY-02a)\nConfigure Overtime Pay Multipliers" as UC_PAY02A
    usecase "(UC-PAY-02b)\nCalculate Night Shift Allowances" as UC_PAY02B
    usecase "(UC-PAY-02c)\nMonitor Overtime Budget Cap Alerts" as UC_PAY02C
    usecase "(UC-PAY-02d)\nOverride Executive Overtime Budget Cap" as UC_PAY02D
}

' =====================================================
' SECONDARY ACTORS (RIGHT SIDE)
' =====================================================
actor "Staff" as EMP
actor "Payroll Engine" as PAY_ENGINE

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
' Left Actors to Use Cases
ADMIN --> UC_PAY01
ADMIN --> UC_PAY01C
ADMIN --> UC_PAY02A

DIR --> UC_PAY01C
DIR --> UC_PAY02D

' Use Cases to Right Actors
UC_PAY01D --> EMP

UC_PAY01A --> PAY_ENGINE
UC_PAY01B --> PAY_ENGINE
UC_PAY02B --> PAY_ENGINE
UC_PAY02C --> PAY_ENGINE

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PAY01 ..> UC_PAY01A : <<include>>
UC_PAY01 ..> UC_PAY01C : <<include>>
UC_PAY01B ..> UC_PAY01 : <<extend>>
UC_PAY01D ..> UC_PAY01 : <<extend>>

UC_PAY02 ..> UC_PAY02A : <<include>>
UC_PAY02B ..> UC_PAY02 : <<extend>>
UC_PAY02C ..> UC_PAY02 : <<extend>>
UC_PAY02D ..> UC_PAY02C : <<extend>>

@enduml
```
