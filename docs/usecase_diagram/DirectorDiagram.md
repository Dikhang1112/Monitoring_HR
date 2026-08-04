# HR MANAGEMENT PLATFORM - DIRECTOR DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** và sơ đồ **Use Case Chi tiết cho Actor Director (Executive C-Level Detailed Use Case Diagram)** của hệ thống HR Management Platform.

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
actor "Director\n(Executive / C-Level)" as DIR

' =====================================================
' SYSTEM BOUNDARY & DETAILED USE CASES FOR DIRECTOR
' =====================================================
rectangle "Director Detailed Boundary" {

  package "1. Executive Dashboard & AI Analytics" {
    usecase "UC-DASH-01: Executive HR Dashboard" as UC_DASH
    usecase "Inspect Company Productivity KPIs" as UC_KPI
    usecase "UC-DASH-03: AI-Powered Insights & Forecasts" as UC_AI
    usecase "Predict Turnover & Burnout Risk" as UC_BURN
    usecase "Receive Workload Rebalancing Tips" as UC_TIPS
  }

  package "2. Worktime Expenditure & Budgeting" {
    usecase "UC-EXPEND-03: Overtime Budget Management" as UC_OTCAP
    usecase "Set Department Overtime Cap" as UC_CAP
    usecase "Receive Overtime Warning Alerts" as UC_WARN
  }

  package "3. Financial & Expenditure Reports" {
    usecase "UC-RP-04: Payroll & Expenditure Reports" as UC_FINREP
    usecase "Export Financial Expenditure Excel" as UC_EXCEL
  }
}

' =====================================================
' SECONDARY ACTORS (TÁC NHÂN PHỤ BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "AI Analytics Engine" as AI

MGR -[hidden]down-> AI

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
DIR -right-> UC_DASH
DIR -right-> UC_AI
DIR -right-> UC_OTCAP
DIR -right-> UC_FINREP

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_OTCAP <-left- MGR
UC_AI <-left- AI

' =====================================================
' INCLUDE RELATIONSHIPS (VUÔNG GÓC HƯỚNG XUỐNG)
' =====================================================
UC_DASH .down.> UC_KPI : <<include>>
UC_AI .down.> UC_BURN : <<include>>
UC_OTCAP .down.> UC_CAP : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (VUÔNG GÓC HƯỚNG LÊN)
' =====================================================
UC_TIPS .up.> UC_AI : <<extend>>
UC_WARN .up.> UC_OTCAP : <<extend>>
UC_EXCEL .up.> UC_FINREP : <<extend>>

@enduml
```
