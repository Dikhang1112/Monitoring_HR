# PAYROLL & INVOICING - OVERTIME & ALLOWANCES PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Overtime Pay & Allowance Management Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PAYROLL & INVOICING - OVERTIME & ALLOWANCE (4 SWIMLANES)

skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

skinparam activity {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 12
}
skinparam swimlane {
  BorderColor #64748b
  TitleFontColor #0f172a
  TitleFontSize 13
  TitleFontStyle bold
}

' =====================================================
' 4 SWIMLANES DECLARATION
' =====================================================
|#f1f5f9| Direct Manager |
start
:Approve employee pre-shift overtime (OT) requests;

|#e2e8f0| Admin-Tenant (HR / Payroll) |
:Configure OT multipliers (Weekday 150%, Weekend 200%, Holiday 300%);
:Set department Overtime Budget Caps;

|#cbd5e1| Payroll & Billing Engine |
:Calculate total OT hours compensation & night shift allowances;

if (Total OT expenses exceed department budget cap?) then (YES - Cap Exceeded)
  :Trigger Overtime Budget Cap Warning alert;
  |#94a3b8| Director (Executive) |
  :Review additional OT budget grant request;
  if (Director grants additional OT budget?) then (YES)
    :Approve OT budget override;
    |Payroll & Billing Engine|
    :Record verified OT compensation into monthly payroll;
    stop
  else (NO)
    |Director (Executive)|
    :Reject OT budget override request;
    |Admin-Tenant (HR / Payroll)|
    :Cap OT hours to initial approved budget limit;
    stop
  endif
else (NO - Within Budget)
  |Payroll & Billing Engine|
  :Automatically integrate OT compensation into payroll;
  stop
endif

@enduml
```
