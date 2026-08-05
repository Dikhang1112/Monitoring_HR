# PRODUCTIVITY MONITORING - APP & WEB CLASSIFICATION USE CASE DIAGRAM

This document contains the **PlantUML** code and diagram for **Classifying App & Website Productivity & Configuring Department Rules** within the Productivity Monitoring subsystem, compatible with Draw.io.

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
actor "Admin-Tenant" as ADMIN
actor "Manager" as MGR
actor "Productivity AI Engine" as AI_ENGINE

' =====================================================
' SYSTEM BOUNDARY & USE CASES
' =====================================================
rectangle "HR Management Platform - App & Web Classification Subsystem" {
    
    usecase "(UC-PROD-03)\nClassify App & Website Productivity" as UC_PROD03
    usecase "(UC-PROD-03a)\nLabel Productive & Unproductive Domains" as UC_PROD03A
    usecase "(UC-PROD-03b)\nConfigure Department Rule Overrides" as UC_PROD03B
    usecase "(UC-PROD-03c)\nGenerate Social Media Usage Alerts" as UC_PROD03C
}

' =====================================================
' ACTOR CONNECTIONS
' =====================================================
ADMIN --> UC_PROD03
ADMIN --> UC_PROD03A
ADMIN --> UC_PROD03B

MGR --> UC_PROD03C

AI_ENGINE --> UC_PROD03C

' =====================================================
' INCLUDE & EXTEND RELATIONSHIPS
' =====================================================
UC_PROD03 ..> UC_PROD03A : <<include>>
UC_PROD03B ..> UC_PROD03A : <<extend>>
UC_PROD03C ..> UC_PROD03 : <<extend>>

@enduml
```
