# PAYROLL & INVOICING - SALARY CALCULATION PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Automated Monthly Salary Calculation Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PAYROLL & INVOICING - SALARY CALCULATION (4 SWIMLANES)

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
|Admin-Tenant (HR / Payroll) |
start
:Trigger automated monthly payroll calculation batch job;

|Payroll & Billing Engine |
:Fetch verified timesheet working hours from Time Tracking;
:Apply tardiness penalties & unexcused absence deductions;
:Apply Overtime Multipliers (Weekday x1.5, Weekend x2.0, Holiday x3.0);
:Calculate fixed & variable allowances (Lunch, Travel, Role);
:Generate company-wide Monthly Salary Sheet;

|Admin-Tenant (HR / Payroll)|
:Audit salary sheet metrics & submit for C-level payout approval;

|Director (Executive) |
if (Total payroll expenses within approved budget cap?) then (YES)
  :Approve monthly salary payout sheet;
  |Payroll & Billing Engine|
  :Generate encrypted PDF Paystub for each employee;
  :Dispatch Paystub PDF emails company-wide;

  |Staff (Employee) |
  :Receive encrypted PDF Paystub & review compensation breakdown;
  stop
else (NO - Over Budget)
  |Director (Executive)|
  :Request overtime & allowance breakdown adjustment;
  |Admin-Tenant (HR / Payroll)|
  :Reconcile & re-run adjusted payroll calculation batch;
  stop
endif

@enduml
```

