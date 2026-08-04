# PRODUCTIVITY MONITORING - AUTOMATED SCREENSHOT CAPTURE DETAILED USE CASE DIAGRAM

Tài liệu này chứa mã **PlantUML** sơ đồ Use Case chi tiết cho tính năng **Automated Screenshot Capture (Chụp màn hình ngẫu nhiên tự động)** thuộc phân hệ Productivity Monitoring.

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
actor "System Service\n(Background Engine)" as SYS

' =====================================================
' USE CASES FOR AUTOMATED SCREENSHOT CAPTURE
' =====================================================
package "Automated Screenshot Capture" {
  usecase "UC-PROD-01: Random Automated Screenshot Capture" as UC_SCR
  usecase "Multi-Monitor Concurrent Capture" as UC_MULTI
  usecase "Client-side Screenshot Encryption" as UC_ENCR
  usecase "Blur Sensitive Data & App Window" as UC_BLUR
}

' =====================================================
' SECONDARY ACTORS (BÊN PHẢI)
' =====================================================
actor "Manager" as MGR
actor "Staff" as EMP

MGR -[hidden]down-> EMP

' =====================================================
' PRIMARY ACTOR CONNECTIONS
' =====================================================
SYS -right-> UC_SCR

' =====================================================
' SECONDARY ACTOR CONNECTIONS
' =====================================================
UC_SCR <-left- MGR
UC_SCR <-left- EMP

' =====================================================
' INCLUDE RELATIONSHIPS (CHỮ THẲNG HƯỚNG XUỐNG)
' =====================================================
UC_SCR .down.> UC_MULTI : <<include>>
UC_SCR .down.> UC_ENCR : <<include>>

' =====================================================
' EXTEND RELATIONSHIPS (CHỮ THẲNG HƯỚNG LÊN)
' =====================================================
UC_BLUR .up.> UC_SCR : <<extend>>

@enduml
```
