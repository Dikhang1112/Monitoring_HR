# PRODUCTIVITY MONITORING - SCREENSHOT CAPTURE PROCESS DIAGRAM

This document contains the **PlantUML** Swimlane Activity Diagram for the **Automated Screenshot Capture Workflow**.

---

## PlantUML Source Code

```plantuml
@startuml
title PRODUCTIVITY MONITORING - SCREENSHOT CAPTURE (3 SWIMLANES)

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
' 3 SWIMLANES DECLARATION
' =====================================================
|Desktop Agent App |
start
:Trigger random screenshot timer (every 10 mins);
:Capture all active displays simultaneously (Multi-Monitor);
:Detect sensitive application windows (Banking/Passwords);
:Automatically blur sensitive app windows;
:Encrypt screenshot file on client device (AES-256);
:Upload encrypted image payload to Cloud Storage;

|Productivity AI Engine |
:Store encrypted image & record capture timestamp;
:Log active window title at moment of capture;

|Manager |
:Open Screenshot Review Gallery;
if (Non-work activity detected in screen capture?) then (YES)
  :Attach reviewer note on screen capture item;
  :Dispatch reminder notification to staff member;
  stop
else (NO - Work Valid)
  :Store valid screenshot item in daily audit log;
  stop
endif

@enduml
```

