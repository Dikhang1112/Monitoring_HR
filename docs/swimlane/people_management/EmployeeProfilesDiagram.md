# PEOPLE MANAGEMENT - EMPLOYEE PROFILES PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Employee Profile Management Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PEOPLE MANAGEMENT - EMPLOYEE PROFILES

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
|Admin-Tenant (HR Admin) |
start
:Open Profile Management & select Import Excel or Create New;
:Enter personal details, Tax ID, National ID & Bank account;
:Assign to Department & set designated Direct Manager;

|Direct Manager |
:Confirm job title, role responsibilities & probation contract;

|HR System Services |
:Encrypt & store employee record in Cloud Database;

|Employee (Staff) |
:Access HR Portal to update emergency contact details;

|HR System Services|
if (Updated profile details valid?) then (YES)
  :Record updated details & dispatch notification to HR Admin;
  |Admin-Tenant (HR Admin)|
  :Approve profile update request;
  stop
else (NO - Invalid Input)
  |HR System Services|
  :Return input validation error;
  |Employee (Staff)|
  :Re-enter correct profile details;
  stop
endif

@enduml
```

