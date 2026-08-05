# GPS ATTENDANCE - GEOFENCED CHECK-IN USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Checking In via Geofenced GPS & Configuring Branch Radius** within the GPS Attendance subsystem, formatted for Draw.io (Left Primary Actors | Center Boundary | Right Secondary Actors).

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
' PRIMARY ACTORS (LEFT SIDE)
' =====================================================
actor "Staff" as EMP
actor "Admin-Tenant" as ADMIN

' =====================================================
' SYSTEM BOUNDARY & USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Geofenced GPS Check-in Subsystem" {
    
    usecase "(UC-GPS-01)\nCheck In via Geofenced GPS" as UC_GPS01
    usecase "(UC-GPS-01a)\nConfigure Branch Geofence Radius" as UC_GPS01A
    usecase "(UC-GPS-01b)\nVerify Real-time GPS Location" as UC_GPS01B
    usecase "(UC-GPS-01c)\nReject Out-of-Bounds Check-ins" as UC_GPS01C
}

' =====================================================
' SECONDARY ACTORS (RIGHT SIDE)
' =====================================================
actor "Location Service" as LOC_SVC

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
' Left Actors to Use Cases
EMP --> UC_GPS01
ADMIN --> UC_GPS01A

' Use Cases to Right Actors
UC_GPS01B --> LOC_SVC
UC_GPS01C --> LOC_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_GPS01 ..> UC_GPS01B : <<include>>
UC_GPS01A ..> UC_GPS01 : <<include>>
UC_GPS01C ..> UC_GPS01B : <<extend>>

@enduml
```
