# PRODUCTIVITY MONITORING - SCORES & ANOMALY ALERTS USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Calculating Team Activity Scores & Triggering Anomaly Alerts** within the Productivity Monitoring subsystem, compatible with Draw.io.

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
actor "Director" as DIR
actor "Productivity AI Engine" as AI_ENGINE

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - Productivity Analytics & Anomaly Subsystem" {
    
    usecase "(UC-PROD-04)\nCalculate Team Activity Score" as UC_PROD04
    usecase "(UC-PROD-04a)\nCompute Weighted Score Algorithm" as UC_PROD04A
    usecase "(UC-PROD-04b)\nTrigger Low Productivity Alerts" as UC_PROD04B
    usecase "(UC-PROD-02b)\nDetect Anti-Autoclicker Anomaly Activities" as UC_PROD02B
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
MGR --> UC_PROD04
DIR --> UC_PROD04

MGR --> UC_PROD04B
MGR --> UC_PROD02B

AI_ENGINE --> UC_PROD04A
AI_ENGINE --> UC_PROD02B

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PROD04 ..> UC_PROD04A : <<include>>
UC_PROD04B ..> UC_PROD04 : <<extend>>
UC_PROD02B ..> UC_PROD04 : <<extend>>

@enduml
```
