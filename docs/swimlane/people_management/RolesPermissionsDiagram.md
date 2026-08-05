# PEOPLE MANAGEMENT - ROLES & PERMISSIONS (RBAC) PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Role & Permission Management (RBAC) & Data Scope Scoping Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PEOPLE MANAGEMENT - ROLES & PERMISSIONS (4 SWIMLANES)

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
|System-Admin |
start
:Open System Role & Permission Management screen;
:Create new Custom Role Group;
:Configure action permission matrix (CRUD & Approvals);
:Configure Data Scope Boundary (Company-wide / Department / Self-only);

|Admin-Tenant (HR Admin) |
:Open employee list & assign Custom Role to Staff;

|Security Engine & Database |
:Persist Role Matrix & update user session authorization token;

|Employee (Staff) |
:Perform action request on frontend screen UI;

|Security Engine & Database|
if (Action permitted in Role Matrix?) then (YES)
  :Authorize execution & filter dataset by Data Scope;
  |Employee (Staff)|
  :Display operation result successfully;
  stop
else (NO - Permission Denied)
  |Security Engine & Database|
  :Reject request with HTTP 403 Forbidden;
  |Employee (Staff)|
  :Display "Access Denied: Insufficient Permissions" alert;
  stop
endif

@enduml
```

