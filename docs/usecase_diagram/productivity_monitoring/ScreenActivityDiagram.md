# PRODUCTIVITY MONITORING - SCREENSHOT & INPUT ACTIVITY USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Capturing Automated Screenshots & Tracking Input Activity** within the Productivity Monitoring subsystem, compatible with Draw.io.

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
actor "System Service" as SYS_SVC
actor "Staff" as EMP
actor "Desktop Agent App" as DESK_APP
actor "Cloud Storage" as CLOUD

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Screenshot & Input Activity Subsystem" {
    
    ' Screenshot Group
    usecase "(UC-PROD-01)\nCapture Automated Screenshots" as UC_PROD01
    usecase "(UC-PROD-01a)\nCapture Multi-Monitor Displays" as UC_PROD01A
    usecase "(UC-PROD-01b)\nBlur Sensitive Application Windows" as UC_PROD01B
    usecase "(UC-PROD-01c)\nEncrypt & Upload Screenshot Files" as UC_PROD01C

    ' Input Activity Group
    usecase "(UC-PROD-02)\nTrack Keystroke & Mouse Input Activity" as UC_PROD02
    usecase "(UC-PROD-02a)\nCalculate Active vs Idle Session Ratio" as UC_PROD02A
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
SYS_SVC --> UC_PROD01
EMP --> UC_PROD02

DESK_APP --> UC_PROD01A
DESK_APP --> UC_PROD01B
DESK_APP --> UC_PROD01C

CLOUD --> UC_PROD01C

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PROD01 ..> UC_PROD01A : <<include>>
UC_PROD01 ..> UC_PROD01C : <<include>>
UC_PROD01B ..> UC_PROD01A : <<extend>>

UC_PROD02 ..> UC_PROD02A : <<include>>

@enduml
```
