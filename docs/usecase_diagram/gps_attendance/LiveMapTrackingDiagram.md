# GPS ATTENDANCE - LIVE MAP & ROUTE TRACKING USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Tracking Live Map Locations & Logging Shift Movement Routes** within the GPS Attendance subsystem, compatible with Draw.io.

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
actor "Staff" as EMP
actor "GPS Location Service" as GPS_SVC

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Live Map & Route Tracking Subsystem" {
    
    usecase "(UC-GPS-02)\nTrack Live Map Locations" as UC_GPS02
    usecase "(UC-GPS-02a)\nLog Shift Movement Route History" as UC_GPS02A
    usecase "(UC-GPS-02b)\nExport Shift Movement Route Log" as UC_GPS02B
    usecase "(UC-GPS-02c)\nProtect Privacy Outside Shift Bounds" as UC_GPS02C
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
MGR --> UC_GPS02
MGR --> UC_GPS02B

EMP --> UC_GPS02A

GPS_SVC --> UC_GPS02
GPS_SVC --> UC_GPS02A
GPS_SVC --> UC_GPS02C

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_GPS02 ..> UC_GPS02A : <<include>>
UC_GPS02B ..> UC_GPS02 : <<extend>>
UC_GPS02C ..> UC_GPS02A : <<extend>>

@enduml
```
