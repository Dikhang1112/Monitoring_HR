# GPS ATTENDANCE - GEOFENCED CHECK-IN USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Checking In via Geofenced GPS & Configuring Branch Radius** within the GPS Attendance subsystem, formatted for Draw.io with active verb high-level Use Cases, non-overlapping orthogonal arrows, and external Actors.

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
actor "Staff" as EMP
actor "Admin-Tenant" as ADMIN

EMP -[hidden]down-> ADMIN

' =====================================================
' SYSTEM BOUNDARY & ALIGNED USE CASES (CENTER)
' =====================================================
rectangle "HR Management Platform - Geofenced Check-in" {
    
    usecase "Track Geofenced Attendance" as UC_GPS01
    usecase "Configure Branch Geofence" as UC_GPS01A
    usecase "Verify Location Bounds" as UC_GPS01B

    UC_GPS01 -[hidden]down-> UC_GPS01A
    UC_GPS01A -[hidden]down-> UC_GPS01B
}

' =====================================================
' SECONDARY ACTORS (OUTSIDE BOUNDARY - RIGHT SIDE)
' =====================================================
actor "Location Service" as LOC_SVC

' =====================================================
' NON-OVERLAPPING ACTOR CONNECTIONS
' =====================================================
EMP --> UC_GPS01
ADMIN --> UC_GPS01A

UC_GPS01B --> LOC_SVC

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_GPS01 ..> UC_GPS01B : <<include>>
UC_GPS01A ..> UC_GPS01 : <<include>>

@endl
```
