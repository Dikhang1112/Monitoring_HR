# PEOPLE MANAGEMENT - ONBOARDING & OFFBOARDING PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Employee Onboarding & Offboarding Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PEOPLE MANAGEMENT - ONBOARDING & OFFBOARDING (4 SWIMLANES)

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
|#f1f5f9| Admin-Tenant (HR Admin) |
start
:Create new employee profile & enter contract details;
:Assign Department & designate Direct Manager;
:Click "Trigger Onboarding Workflow";

|#e2e8f0| HR System Services |
:Automatically provision user accounts (Email, HR Portal, Timer App);
:Dispatch welcome email with temporary credentials;

|#cbd5e1| Employee (Staff) |
:Log into HR Portal & verify personal details;

|#94a3b8| Direct Manager |
:Create onboarding task checklist & assign team buddy;

|Admin-Tenant (HR Admin)|
:Issue hardware assets (Laptop, Keycard) & record Serial Numbers;

|Employee (Staff)|
:Acknowledge receipt of hardware assets on HR Portal;

|HR System Services|
if (Asset handover verification valid?) then (YES)
  :Activate official employee account status;
  |Admin-Tenant (HR Admin)|
  :Save completed onboarding profile;
else (NO - Asset Issue)
  |Admin-Tenant (HR Admin)|
  :Replace defective asset & update handover record;
endif

' =====================================================
' OFFBOARDING BRANCH
' =====================================================
|Employee (Staff)|
:Submit resignation request on HR Portal;

|Direct Manager|
:Approve resignation request & create work handover checklist;

|Employee (Staff)|
:Complete project task handover & transfer documentation;

|Admin-Tenant (HR Admin)|
:Retrieve laptop, keycard & inspect asset condition;
if (All assets returned & undamaged?) then (YES)
  :Approve exit clearance certificate;
  |HR System Services|
  :Automatically revoke all system access permissions;
  :Archive employee profile & historical records;
  stop
else (NO - Missing/Damaged)
  |Admin-Tenant (HR Admin)|
  :Deduct asset penalty fee from final payroll;
  |HR System Services|
  :Revoke system permissions & archive account;
  stop
endif

@enduml
```
