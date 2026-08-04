# PAYROLL & CLIENT INVOICING - CLIENT INVOICING & BILLABLE HOURS DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Client Invoicing & Billable Hours Approval (Xuất hóa đơn Khách hàng & Phê duyệt Giờ tính phí)** thuộc phân hệ Payroll & Client Invoicing.

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
actor "Manager\n(Project Manager)" as MGR

' =====================================================
' USE CASES FOR CLIENT INVOICING & BILLABLE HOURS
' =====================================================
package "Client Invoicing & Billable Hours" {
  usecase "UC-PAY-03: Client Invoicing & Billable Hours Approval" as UC_INV
  usecase "Approve Client Project Billable Hours" as UC_BILL
  usecase "Apply Hourly Billing Rates per Role" as UC_RATE
  usecase "Generate Client Invoice PDF Statement" as UC_PDF
  usecase "Client Portal Invoice Download & Review" as UC_PORTAL
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Client\n(External Partner)" as CLI
actor "Billing System" as SYS

CLI -[hidden]down-> SYS

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
MGR -right-> UC_INV

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_PORTAL <-left- CLI
UC_PDF <-left- SYS

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_INV .down.> UC_BILL : <<include>>
UC_INV .down.> UC_RATE : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_PDF .up.> UC_INV : <<extend>>
UC_PORTAL .up.> UC_PDF : <<extend>>

@enduml
```
