# PAYROLL & CLIENT INVOICING - CLIENT INVOICING & PORTAL USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Approving Client Invoices & Processing Payments via Client Portal** within the Payroll & Client Invoicing subsystem, compatible with Draw.io.

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
' ACTORS
' =====================================================
actor "Manager" as MGR
actor "Client" as CLI
actor "Billing Engine" as BILL_ENGINE

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Client Invoicing & Portal Subsystem" {
    
    usecase "(UC-PAY-03)\nApprove Client Project Invoices" as UC_PAY03
    usecase "(UC-PAY-03a)\nFilter Project Billable Work Hours" as UC_PAY03A
    usecase "(UC-PAY-03b)\nApply Hourly Billing Rate Cards" as UC_PAY03B
    usecase "(UC-PAY-03c)\nPay Client Invoices via Client Portal" as UC_PAY03C
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
MGR --> UC_PAY03
MGR --> UC_PAY03A

CLI --> UC_PAY03C

BILL_ENGINE --> UC_PAY03B
BILL_ENGINE --> UC_PAY03C

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PAY03 ..> UC_PAY03A : <<include>>
UC_PAY03 ..> UC_PAY03B : <<include>>
UC_PAY03C ..> UC_PAY03 : <<extend>>

@enduml
```
