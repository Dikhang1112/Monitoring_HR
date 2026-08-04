# HR MANAGEMENT PLATFORM - CLIENT DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** và sơ đồ **Use Case Chi tiết cho Actor Client (External Client Detailed Use Case Diagram)** của hệ thống HR Management Platform.

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
actor "Client\n(External Partner)" as CLI

' =====================================================
' SYSTEM BOUNDARY & DETAILED USE CASES FOR CLIENT
' =====================================================
rectangle "Client Portal Boundary" {

  package "1. Project & Task Progress" {
    usecase "UC-PM-02: Log in to Client Portal & Inspect Progress" as UC_PORTAL
    usecase "Inspect Task Progress & Kanban View" as UC_KANBAN
    usecase "Block External Access to Internal HR Data" as UC_SEC
  }

  package "2. Billable Hours & Expenditure Review" {
    usecase "UC-EXPEND-01: Review & Approve Project Billable Hours" as UC_BILL
    usecase "Review Line-Item Weekly Hours Breakdown" as UC_LINE
  }

  package "3. Invoices & Payments" {
    usecase "UC-PAY-03: View & Download Client Invoice PDF" as UC_INV
    usecase "Download PDF Invoice Statement" as UC_PDF
  }
}

' =====================================================
' SECONDARY ACTORS (TÁC NHÂN PHỤ BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Billing System" as BILL

MGR -[hidden]down-> BILL

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
CLI -right-> UC_PORTAL
CLI -right-> UC_BILL
CLI -right-> UC_INV

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_PORTAL <-left- MGR
UC_BILL <-left- MGR
UC_INV <-left- BILL

' =====================================================
' INCLUDE RELATIONSHIPS (VUÔNG GÓC HƯỚNG XUỐNG)
' =====================================================
UC_PORTAL .down.> UC_KANBAN : <<include>>
UC_PORTAL .down.> UC_SEC : <<include>>
UC_BILL .down.> UC_LINE : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (VUÔNG GÓC HƯỚNG LÊN)
' =====================================================
UC_PDF .up.> UC_INV : <<extend>>

@enduml
```
