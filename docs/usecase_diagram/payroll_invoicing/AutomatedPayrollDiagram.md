# PAYROLL & CLIENT INVOICING - AUTOMATED PAYROLL USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Calculating Automated Monthly Salaries & Managing Overtime Rules** within the Payroll & Client Invoicing subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman
skinparam linetype ortho

skinparam usecase {
  BackgroundColor #EFF6FF
  BorderColor #2563EB
  BorderThickness 2
  FontSize 14
  FontStyle bold
  FontName "Segoe UI"
}

skinparam actor {
  BackgroundColor #0F172A
  BorderColor #0284C7
  FontSize 13
  FontStyle bold
  FontName "Segoe UI"
}

' =====================================================
' PRIMARY ACTORS (OUTSIDE BOUNDARY - LEFT SIDE)
' =====================================================
actor "Admin-Tenant" as ADMIN
actor "Director" as DIR

ADMIN -[hidden]down-> DIR

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Automated Payroll & Overtime" {
    
    ' High-Level Salary Calculation Group
    usecase "Calculate Monthly Payroll" as UC_PAY01
    usecase "Integrate Timesheet Data" as UC_PAY01A
    usecase "Audit Monthly Payroll Sheets" as UC_PAY01C
    usecase "Generate Encrypted Paystubs" as UC_PAY01D

    UC_PAY01 -[hidden]down-> UC_PAY01A
    UC_PAY01A -[hidden]down-> UC_PAY01C
    UC_PAY01C -[hidden]down-> UC_PAY01D

    ' High-Level Overtime Management Group
    usecase "Manage Overtime Compensation" as UC_PAY02
    usecase "Configure Overtime Multipliers" as UC_PAY02A
    usecase "Monitor Overtime Budget Caps" as UC_PAY02C

    UC_PAY02 -[hidden]down-> UC_PAY02A
    UC_PAY02A -[hidden]down-> UC_PAY02C
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Staff" as EMP
actor "Payroll Engine" as PAY_ENGINE

EMP -[hidden]down-> PAY_ENGINE

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
ADMIN --> UC_PAY01
ADMIN --> UC_PAY01C
ADMIN --> UC_PAY02A

DIR --> UC_PAY01C

UC_PAY01D --> EMP
UC_PAY01A --> PAY_ENGINE
UC_PAY02C --> PAY_ENGINE

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PAY01 ..> UC_PAY01A : <<include>>
UC_PAY01 ..> UC_PAY01C : <<include>>
UC_PAY01D ..> UC_PAY01 : <<extend>>

UC_PAY02 ..> UC_PAY02A : <<include>>
UC_PAY02C ..> UC_PAY02 : <<extend>>

@endl
```
