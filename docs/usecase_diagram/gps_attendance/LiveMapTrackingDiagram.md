# GPS ATTENDANCE - LIVE MAP & ROUTE TRACKING USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Tracking Live Map Locations & Logging Shift Movement Routes** within the GPS Attendance subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman
skinparam linetype ortho

skinparam usecase {
  BackgroundColor #EFF6FF
  BorderColor #2563EB
  BorderThickness 2
  FontSize 14
  FontStyle bold
  FontName "Segoe UI"
}

skinparam actor {
  BackgroundColor #0F172A
  BorderColor #0284C7
  FontSize 13
  FontStyle bold
  FontName "Segoe UI"
}

' =====================================================
' PRIMARY ACTORS (OUTSIDE BOUNDARY - LEFT SIDE)
' =====================================================
actor "Manager" as MGR
actor "Staff" as EMP

MGR -[hidden]down-> EMP

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Live Map & Route Tracking" {
    
    usecase "Monitor Live Staff Locations" as UC_GPS02
    usecase "Track Shift Movement Routes" as UC_GPS02A
    usecase "Export Movement Reports" as UC_GPS02B
    usecase "Protect Location Privacy" as UC_GPS02C

    UC_GPS02 -[hidden]down-> UC_GPS02A
    UC_GPS02A -[hidden]down-> UC_GPS02B
    UC_GPS02B -[hidden]down-> UC_GPS02C
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "GPS Location Service" as GPS_SVC

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
MGR --> UC_GPS02
MGR --> UC_GPS02B

EMP --> UC_GPS02A

UC_GPS02 --> GPS_SVC
UC_GPS02A --> GPS_SVC
UC_GPS02C --> GPS_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_GPS02 ..> UC_GPS02A : <<include>>
UC_GPS02B ..> UC_GPS02 : <<extend>>
UC_GPS02C ..> UC_GPS02A : <<extend>>

@endl
```
