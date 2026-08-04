# SCHEDULING & LEAVE - LEAVE MANAGEMENT PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Time-off & Leave Request Management Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title SCHEDULING & LEAVE - LEAVE MANAGEMENT (4 SWIMLANES)

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
|#f1f5f9| Staff (Employee) |
start
:Open Time-off Request screen on Web/Mobile App;
:Select leave type, date range & attach medical note if required;
:Click "Submit Leave Request";

|#e2e8f0| Leave Management Service |
:Verify available annual leave balance;

if (Leave Balance >= Requested Days?) then (YES)
  :Record leave request entry (Status: Pending Manager Approval);
  :Dispatch push notification to Direct Manager;

  |#cbd5e1| Direct Manager |
  :Review leave request details & team shift coverage;
  if (Manager approves request?) then (YES)
    :Click "Approve";
    |Leave Management Service|
    if (Requested leave duration > 3 consecutive days?) then (Requires HR Review)
      :Forward request to HR Admin (Status: Pending HR Approval);
      |#94a3b8| Admin-Tenant (HR Admin) |
      :Review company leave policy & grant final approval;
    else (No HR Review Needed)
    endif

    |Leave Management Service|
    :Update leave status to "Approved";
    :Automatically deduct leave days from employee balance;
    :Update team roster schedule automatically;
    :Dispatch approval notification to Staff;
    |Staff (Employee)|
    :Receive leave request approval notification;
    stop
  else (NO - Reject)
    |Direct Manager|
    :Enter rejection reason & click "Reject";
    |Leave Management Service|
    :Dispatch rejection notification with reason to Staff;
    |Staff (Employee)|
    :Receive leave request rejection notification;
    stop
  endif

else (NO - Insufficient Balance)
  |Leave Management Service|
  :Return "Insufficient Leave Balance" error;
  |Staff (Employee)|
  :Display error message on screen;
  stop
endif

@enduml
```
