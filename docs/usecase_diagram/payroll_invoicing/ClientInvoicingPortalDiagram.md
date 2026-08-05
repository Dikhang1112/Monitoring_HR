# PAYROLL & CLIENT INVOICING - CLIENT INVOICING & PORTAL USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Approving Client Invoices & Processing Payments via Client Portal** within the Payroll & Client Invoicing subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

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
actor "Manager" as MGR
actor "Client" as CLI

MGR -[hidden]down-> CLI

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Client Invoicing & Portal" {
    
    usecase "Track Billable Project Hours" as UC_PAY03A
    usecase "Approve Client Invoices" as UC_PAY03
    usecase "Process Client Portal Payments" as UC_PAY03C

    UC_PAY03A -[hidden]down-> UC_PAY03
    UC_PAY03 -[hidden]down-> UC_PAY03C
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Billing Engine" as BILL_ENGINE

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
MGR --> UC_PAY03A
MGR --> UC_PAY03

CLI --> UC_PAY03C

UC_PAY03 --> BILL_ENGINE
UC_PAY03C --> BILL_ENGINE

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PAY03 ..> UC_PAY03A : <<include>>
UC_PAY03C ..> UC_PAY03 : <<extend>>

@endl
```
