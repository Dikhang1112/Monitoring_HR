# HR MANAGEMENT PLATFORM - STAFF DETAILED USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for the **Staff Detailed Use Case Diagram** of the HR Management Platform.

---

## PlantUML Source Code

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle
skinparam backgroundColor #ffffff
skinparam shadowing false
skinparam actorStyle stickman

' CHỐNG DÍNH MŨI TÊN & LÀM THẲNG CHỮ <<include>>, <<extend>>
skinparam linetype ortho
skinparam nodesep 60
skinparam ranksep 80

' =====================================================
' STYLING CONFIGURATION
' =====================================================
skinparam usecase {
  BackgroundColor #f8fafc
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 11
  FontName Arial
}

skinparam package {
  BackgroundColor #f1f5f9
  BorderColor #64748b
  FontColor #334155
  FontStyle bold
  FontSize 12
}

skinparam actor {
  BackgroundColor #0f172a
  BorderColor #0284c7
  FontColor #0f172a
  FontSize 13
  FontStyle bold
}

' =====================================================
' PRIMARY ACTOR (BÊN TRÁI)
' =====================================================
actor "Staff\n(Internal Employee)" as EMP

' =====================================================
' SYSTEM BOUNDARY & DETAILED USE CASES FOR STAFF
' =====================================================
rectangle "Staff Detailed Boundary" {

  package "1. Time & Attendance Tracking" {
    usecase "UC-TIME-01: Start/Stop Work Timer" as UC_TIMER
    usecase "Select Active Project & Task" as UC_TASK
    usecase "Detect Inactivity & Prompt Idle Popup" as UC_IDLE
    usecase "UC-TIME-03: Manual Timesheet Submission" as UC_MANUAL
  }

  package "2. GPS & Geofencing Attendance" {
    usecase "UC-GPS-01: Geofenced GPS Check-in" as UC_GPS
    usecase "Validate GPS within Radius Perimeter" as UC_PERIM
    usecase "Track Shift Movement Route History" as UC_ROUTE
  }

  package "3. Scheduling & Leave Requests" {
    usecase "UC-SCHED-02: Submit Time-off Request" as UC_LEAVE
    usecase "Check Available Leave Balance" as UC_BAL
  }

  package "4. Timeline & Meeting Logs" {
    usecase "UC-TL-01: View Daily Activity Stream Timeline" as UC_TL
    usecase "UC-MEET-02: Auto Meeting Attendance Tracking" as UC_MEET
  }
}

' =====================================================
' SECONDARY ACTORS (TÁC NHÂN PHỤ BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Desktop Agent Service" as DESK

MGR -[hidden]down-> DESK

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
EMP --> UC_TIMER
EMP --> UC_GPS
EMP --> UC_LEAVE
EMP --> UC_TL
EMP --> UC_MEET

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_LEAVE --> MGR
UC_MANUAL --> MGR
UC_TIMER --> DESK

' =====================================================
' INCLUDE RELATIONSHIPS
' =====================================================
UC_TIMER ..> UC_TASK : <<include>>
UC_TIMER ..> UC_IDLE : <<include>>
UC_GPS ..> UC_PERIM : <<include>>
UC_LEAVE ..> UC_BAL : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS
' =====================================================
UC_MANUAL ..> UC_TIMER : <<extend>>
UC_ROUTE ..> UC_GPS : <<extend>>

@enduml
```
