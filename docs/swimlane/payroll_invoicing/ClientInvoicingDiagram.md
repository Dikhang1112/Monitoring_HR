# PAYROLL & INVOICING - CLIENT INVOICING PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Client Invoicing & Billable Hours Approval Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PAYROLL & INVOICING - CLIENT INVOICING (4 SWIMLANES)

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
|Project Manager |
start
:Filter client project Billable Hours from timesheet logs;
:Apply role-based hourly billing rates (Hourly Billing Rate);
:Click "Generate Client Invoice Statement";

|Payroll & Billing Engine |
:Compile itemized billable hours statement & total amount;
:Generate official Client Invoice PDF Statement;

|Director (Executive) |
:Sign & approve client invoice statement prior to issuance;

|Payroll & Billing Engine|
:Automatically publish Invoice PDF to Client Portal;
:Dispatch email invoice notification to Client;

|Client (Partner) |
:Log into Client Portal & download Invoice PDF statement;
if (Verify billable hours & invoice amount valid?) then (YES)
  :Click "Approve & Pay Invoice";
  |Payroll & Billing Engine|
  :Record invoice payment status as "Paid";
  stop
else (NO - Discrepancy)
  |Client (Partner)|
  :Submit billable hours dispute request on Client Portal;
  |Project Manager|
  :Review timesheet audit logs & issue revised invoice;
  stop
endif

@enduml
```

