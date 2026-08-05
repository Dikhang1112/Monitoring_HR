# HR Management Platform - Master Specification & Diagram Documentation

This document provides a comprehensive specification list of all 70 Use Cases across the HR Management Platform, followed by the complete gallery of 70 independent Use Case Diagrams, and the corresponding Process Swimlane Diagrams.

---

## 1. Master List of 70 Use Case Specifications

| No. | Subsystem | Use Case ID | Use Case Name | Primary Actors | Description |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | People Management | **UC-PPL-01** | Employee Profile Management | `Admin-Tenant`, `Manager`, `Staff` | Manages employee personal details, contracts, work history, and bank account information. |
| **2** | People Management | **UC-PPL-01a** | Assign Department & Direct Manager | `Admin-Tenant` | Assigns employees to organizational departments and configures their designated Direct Manager. |
| **3** | People Management | **UC-PPL-01b** | Import / Export Employee Records | `Admin-Tenant` | Imports employee records in bulk from Excel/CSV files or exports company-wide roster data. |
| **4** | People Management | **UC-PPL-01c** | Update Personal & Emergency Details | `Staff`, `Admin-Tenant` | Allows staff to submit emergency contact updates for HR Admin approval. |
| **5** | People Management | **UC-PPL-02** | Organizational Structure Setup | `Admin-Tenant`, `Director`, `Manager` | Builds and manages multi-level organizational trees from company, department to project teams. |
| **6** | People Management | **UC-PPL-02a** | Assign Department Head & Deputies | `Admin-Tenant` | Appoints and manages Department Heads, Deputy Heads, and Team Lead leadership roles. |
| **7** | People Management | **UC-PPL-02b** | Department Merger & Dissolution | `Admin-Tenant`, `System Service` | Executes department mergers, reassigns employee tree nodes, and re-routes reporting lines. |
| **8** | People Management | **UC-PPL-03** | Onboarding Workflow Execution | `Admin-Tenant`, `Manager`, `Email Service` | Provisions user accounts, dispatches welcome emails, and assigns onboarding task checklists. |
| **9** | People Management | **UC-PPL-03a** | Asset Handover Tracking | `Admin-Tenant`, `Manager`, `Staff` | Logs hardware equipment handover and tracks asset retrieval upon employee offboarding. |
| **10** | People Management | **UC-PPL-03b** | Offboarding & Account Archiving | `Admin-Tenant`, `Manager`, `Security Service` | Processes exit checklists, approves task handovers, and revokes system access permissions. |
| **11** | People Management | **UC-PPL-04** | Role & Permission Management (RBAC) | `System-Admin`, `Admin-Tenant` | Configures granular action permission matrices for default system roles. |
| **12** | People Management | **UC-PPL-04a** | Create Custom Role Groups | `System-Admin` | Defines custom role groups tailored to specific organizational business needs. |
| **13** | Time Tracking | **UC-TIME-01** | Desktop Work Timer Control | `Staff`, `Desktop Agent Service` | Starts, pauses, and stops real-time work timers on desktop apps with project and task tagging. |
| **14** | Time Tracking | **UC-TIME-01a** | Active Project & Task Selection | `Staff` | Selects designated projects and active work items before toggling timer sessions. |
| **15** | Time Tracking | **UC-TIME-01b** | Offline Time Buffering & Sync | `Staff`, `Desktop Agent Service` | Buffers work time locally during network outages and syncs timesheets upon reconnection. |
| **16** | Time Tracking | **UC-TIME-01c** | Multi-Monitor Timer Tagging | `Desktop Agent Service` | Detects multi-monitor setups and tags active screen window focus timestamps. |
| **17** | Time Tracking | **UC-TIME-02** | Mobile Clock In / Out | `Staff`, `Mobile Service` | Allows field staff to clock in/out, switch work tasks, add notes, and transmit app heartbeat status. |
| **18** | Time Tracking | **UC-TIME-02a** | Mobile Task Switcher | `Staff` | Switches active work items on mobile device with notes and task duration tracking. |
| **19** | Time Tracking | **UC-TIME-02b** | Field Photo Attachment | `Staff`, `Cloud Storage` | Attaches field service photos to active shift tasks for supervisor verification. |
| **20** | Time Tracking | **UC-TIME-03** | Idle Inactivity Detection | `Staff`, `Manager`, `Desktop Agent Service` | Detects inactivity thresholds, prompts idle warning popups, and submits manual timesheet requests. |
| **21** | Time Tracking | **UC-TIME-03a** | Idle Warning Popup | `Staff`, `Desktop Agent Service` | Prompts user popup to keep or discard inactive time blocks upon detecting idle state. |
| **22** | Time Tracking | **UC-TIME-03b** | Manual Timesheet Approval | `Staff`, `Manager` | Submits manual timesheet adjustment requests with reasons for manager approval. |
| **23** | GPS Attendance | **UC-GPS-01** | Geofenced GPS Check-in | `Staff`, `Admin-Tenant`, `Location Service` | Restricts employee check-in/out to authorized GPS coordinates and branch perimeter radii. |
| **24** | GPS Attendance | **UC-GPS-01a** | Configure Branch Geofence Radius | `Admin-Tenant` | Sets branch latitude, longitude, and allowed geofence perimeter radius. |
| **25** | GPS Attendance | **UC-GPS-01b** | Verify Real-time GPS Location | `Staff`, `Location Service` | Verifies device GPS position against the geofence perimeter using Haversine algorithm. |
| **26** | GPS Attendance | **UC-GPS-01c** | Out-of-Bounds Check-in Rejection | `Staff`, `Location Service` | Rejects attendance check-in attempts outside authorized geofence radius. |
| **27** | GPS Attendance | **UC-GPS-02** | Live Map Location Tracking | `Manager`, `Staff`, `GPS Location Service` | Tracks real-time field staff positions on a live map and logs movement route history. |
| **28** | GPS Attendance | **UC-GPS-02a** | Shift Route History Logging | `Staff`, `GPS Location Service` | Logs chronological GPS movement coordinates during active field shifts. |
| **29** | GPS Attendance | **UC-GPS-02b** | Export Shift Route Log | `Manager` | Exports detailed shift route history movement logs in PDF/CSV format. |
| **30** | GPS Attendance | **UC-GPS-02c** | Privacy Protection Outside Shift | `GPS Location Service` | Halts GPS location tracking automatically when employee clocks out. |
| **31** | Productivity Monitoring | **UC-PROD-01** | Random Automated Screenshot Capture | `System Service`, `Manager`, `Staff` | Captures multi-monitor screen activity at random intervals with encryption and app blurring. |
| **32** | Productivity Monitoring | **UC-PROD-01a** | Multi-Monitor Screen Capture | `Desktop Agent App` | Captures all active displays simultaneously in multi-monitor workstations. |
| **33** | Productivity Monitoring | **UC-PROD-01b** | Sensitive App Blurring | `Desktop Agent App` | Automatically blurs sensitive application windows (Banking, Passwords) prior to upload. |
| **34** | Productivity Monitoring | **UC-PROD-01c** | Client-Side Encryption Upload | `Desktop Agent App`, `Cloud Storage` | Encrypts captured images with AES-256 on client device before transmitting. |
| **35** | Productivity Monitoring | **UC-PROD-02** | Keystroke & Mouse Activity Tracking | `Desktop Agent Service`, `Staff` | Measures keystrokes and mouse movement frequency to calculate active vs. idle session ratios. |
| **36** | Productivity Monitoring | **UC-PROD-02a** | Active vs Idle Ratio Calculation | `Productivity AI Engine` | Computes percentage of active input time per hour. |
| **37** | Productivity Monitoring | **UC-PROD-02b** | Anti-Autoclicker Anomaly Detection | `Productivity AI Engine`, `Manager` | Detects artificial auto-clickers and mouse jigglers, flagging compliance anomalies. |
| **38** | Productivity Monitoring | **UC-PROD-03** | App & Website Classification | `Admin-Tenant`, `Manager` | Categorizes active window titles and domain URLs into Productive, Unproductive, or Neutral. |
| **39** | Productivity Monitoring | **UC-PROD-03a** | Productive / Unproductive Labeling | `Admin-Tenant` | Configures classification status labels for applications and domain names. |
| **40** | Productivity Monitoring | **UC-PROD-03b** | Department-Level Rule Overrides | `Admin-Tenant` | Sets department-specific overrides (e.g., Marketing allowed Social Media). |
| **41** | Productivity Monitoring | **UC-PROD-03c** | Social Media Alert Generation | `Productivity AI Engine`, `Manager` | Generates alerts when unproductive web usage exceeds 30 minutes. |
| **42** | Productivity Monitoring | **UC-PROD-04** | Activity Score Calculation | `Manager`, `System Service`, `Director` | Computes weighted Activity Score (%) metrics and renders team productivity dashboards. |
| **43** | Productivity Monitoring | **UC-PROD-04a** | Weighted Score Algorithm | `Productivity AI Engine` | Combines input frequency (60%) and productive app usage (40%) into unified score. |
| **44** | Productivity Monitoring | **UC-PROD-04b** | Low Productivity Alerts | `Productivity AI Engine`, `Manager` | Triggers real-time alerts when activity score drops below threshold (< 30%) for 2 hours. |
| **45** | Scheduling & Time-Off | **UC-SCHED-01** | Weekly Shift Planning | `Manager`, `Staff` | Assigns morning, afternoon, night, or split shift patterns, classifies Onsite/Remote work modes. |
| **46** | Scheduling & Time-Off | **UC-SCHED-01a** | Shift Pattern Selection | `Manager` | Selects designated shift templates for team members. |
| **47** | Scheduling & Time-Off | **UC-SCHED-01b** | Onsite / Remote Classification | `Manager` | Sets work location mode (Onsite Office vs Remote WFH) per shift. |
| **48** | Scheduling & Time-Off | **UC-SCHED-01c** | Shift Conflict Check | `Scheduling Engine`, `Manager` | Validates shift overlap conflicts and mandatory rest period rules. |
| **49** | Scheduling & Time-Off | **UC-SCHED-02** | Time-off & Leave Management | `Staff`, `Manager`, `Admin-Tenant` | Verifies available leave balances, submits leave requests with supporting attachments. |
| **50** | Scheduling & Time-Off | **UC-SCHED-02a** | Leave Balance Verification | `Leave Service`, `Staff` | Checks remaining annual leave balance before allowing submission. |
| **51** | Scheduling & Time-Off | **UC-SCHED-02b** | Medical Note Attachment | `Staff` | Attaches medical notes or sick leave documentation to request. |
| **52** | Scheduling & Time-Off | **UC-SCHED-02c** | Multi-level Leave Approval | `Manager`, `Admin-Tenant` | Routes leave requests > 3 days to HR Admin for final approval. |
| **53** | Scheduling & Time-Off | **UC-SCHED-03** | Attendance Rules Reconciliation | `System Service`, `Manager`, `Admin-Tenant` | Applies work shift grace periods, logs late arrival and early departure violations. |
| **54** | Scheduling & Time-Off | **UC-SCHED-03a** | Shift Grace Period Allowance | `Admin-Tenant`, `System Service` | Configures 15-minute grace period allowance before flagging tardiness. |
| **55** | Scheduling & Time-Off | **UC-SCHED-03b** | Late Arrival Violation Logging | `System Service`, `Staff` | Logs tardiness minutes and dispatches violation notices to employee. |
| **56** | Scheduling & Time-Off | **UC-SCHED-03c** | Unexcused Absence Flagging | `System Service`, `Payroll Engine` | Flags unexcused absences and applies pay penalty deductions. |
| **57** | Payroll & Invoicing | **UC-PAY-01** | Automated Monthly Salary Calculation | `Admin-Tenant`, `System Service`, `Staff` | Calculates monthly salary sheets automatically using approved timesheets, base pay rates. |
| **58** | Payroll & Invoicing | **UC-PAY-01a** | Timesheet Hours Integration | `Time API`, `Payroll Engine` | Fetches verified timesheet hours to calculate base compensation. |
| **59** | Payroll & Invoicing | **UC-PAY-01b** | Punctuality Violation Deduction | `Payroll Engine` | Deducts tardiness fines and unexcused absence penalties from payroll. |
| **60** | Payroll & Invoicing | **UC-PAY-01c** | Monthly Salary Sheet Audit | `Admin-Tenant`, `Director` | Audits monthly salary sheets and submits for executive payout approval. |
| **61** | Payroll & Invoicing | **UC-PAY-01d** | Encrypted Paystub PDF Generation | `Payroll Engine`, `Staff` | Generates password-encrypted PDF Paystubs and dispatches via email. |
| **62** | Payroll & Invoicing | **UC-PAY-02** | Overtime Pay Management | `Admin-Tenant`, `Director` | Applies overtime multipliers, computes allowances, and monitors overtime budget caps. |
| **63** | Payroll & Invoicing | **UC-PAY-02a** | Overtime Multiplier Configuration | `Admin-Tenant` | Sets overtime multipliers (Weekday 150%, Weekend 200%, Holiday 300%). |
| **64** | Payroll & Invoicing | **UC-PAY-02b** | Night Shift Allowance Calculation | `Payroll Engine` | Calculates night shift premium allowances (22:00 - 06:00). |
| **65** | Payroll & Invoicing | **UC-PAY-02c** | Overtime Budget Cap Monitoring | `Payroll Engine`, `Director` | Triggers alert when department OT costs exceed allocated budget cap. |
| **66** | Payroll & Invoicing | **UC-PAY-02d** | Executive Overtime Budget Override | `Director`, `Payroll Engine` | Grants executive budget override for authorized department overtime. |
| **67** | Payroll & Invoicing | **UC-PAY-03** | Client Invoicing Approval | `Manager`, `Client`, `Billing System` | Approves client-billable project work hours, applies role-based hourly billing rates. |
| **68** | Payroll & Invoicing | **UC-PAY-03a** | Billable Hours Filtering | `Project Manager` | Filters client project billable hours from general timesheet logs. |
| **69** | Payroll & Invoicing | **UC-PAY-03b** | Hourly Billing Rate Application | `Billing Engine` | Applies role-based hourly billing rate cards to compute total invoice. |
| **70** | Payroll & Invoicing | **UC-PAY-03c** | Client Portal Invoice Payment | `Client`, `Billing Engine` | Allows client to view, download PDF invoice, and execute payment. |

---

## 2. Complete Gallery of 70 Use Case Diagrams

### 2.1. People Management Subsystem (12 Diagrams)

#### UC-PPL-01: Employee Profile Management
![UC-PPL-01: Employee Profile Management](images/usecase_diagram/people_manager/UC-PPL-01_EmployeeProfileManagement.png)

#### UC-PPL-01a: Assign Department & Direct Manager
![UC-PPL-01a: Assign Department & Direct Manager](images/usecase_diagram/people_manager/UC-PPL-01a_AssignDepartmentAndManager.png)

#### UC-PPL-01b: Import / Export Employee Records
![UC-PPL-01b: Import / Export Employee Records](images/usecase_diagram/people_manager/UC-PPL-01b_ImportExportEmployeeRecords.png)

#### UC-PPL-01c: Update Personal & Emergency Details
![UC-PPL-01c: Update Personal Details](images/usecase_diagram/people_manager/UC-PPL-01c_UpdatePersonalDetails.png)

#### UC-PPL-02: Organizational Structure Setup
![UC-PPL-02: Org Structure Setup](images/usecase_diagram/people_manager/UC-PPL-02_OrgStructureSetup.png)

#### UC-PPL-02a: Assign Department Head & Deputy Leads
![UC-PPL-02a: Assign Department Head](images/usecase_diagram/people_manager/UC-PPL-02a_AssignDepartmentHeadAndDeputies.png)

#### UC-PPL-02b: Department Merger & Dissolution
![UC-PPL-02b: Department Merger](images/usecase_diagram/people_manager/UC-PPL-02b_DepartmentMergerAndDissolution.png)

#### UC-PPL-03: Onboarding Workflow Execution
![UC-PPL-03: Onboarding Workflow Execution](images/usecase_diagram/people_manager/UC-PPL-03_OnboardingWorkflowExecution.png)

#### UC-PPL-03a: Hardware Asset Handover Tracking
![UC-PPL-03a: Asset Handover Tracking](images/usecase_diagram/people_manager/UC-PPL-03a_AssetHandoverTracking.png)

#### UC-PPL-03b: Offboarding & Account Archiving
![UC-PPL-03b: Offboarding & Account Archiving](images/usecase_diagram/people_manager/UC-PPL-03b_OffboardingAndAccountArchiving.png)

#### UC-PPL-04: Role & Permission Management (RBAC)
![UC-PPL-04: Role Permission Management](images/usecase_diagram/people_manager/UC-PPL-04_RolePermissionManagement.png)

#### UC-PPL-04a: Create Custom Role Groups
![UC-PPL-04a: Create Custom Role Groups](images/usecase_diagram/people_manager/UC-PPL-04a_CreateCustomRoleGroups.png)

---

### 2.2. Time Tracking Subsystem (10 Diagrams)

#### UC-TIME-01: Desktop Work Timer Control
![UC-TIME-01: Desktop Work Timer Control](images/usecase_diagram/time_tracking/UC-TIME-01_DesktopWorkTimerControl.png)

#### UC-TIME-01a: Active Project & Task Selection
![UC-TIME-01a: Active Project Task Selection](images/usecase_diagram/time_tracking/UC-TIME-01a_ActiveProjectTaskSelection.png)

#### UC-TIME-01b: Offline Time Buffering & Sync
![UC-TIME-01b: Offline Time Buffering Sync](images/usecase_diagram/time_tracking/UC-TIME-01b_OfflineTimeBufferingSync.png)

#### UC-TIME-01c: Multi-Monitor Timer Tagging
![UC-TIME-01c: Multi-Monitor Timer Tagging](images/usecase_diagram/time_tracking/UC-TIME-01c_MultiMonitorTimerTagging.png)

#### UC-TIME-02: Mobile Clock In / Out
![UC-TIME-02: Mobile Clock In Out](images/usecase_diagram/time_tracking/UC-TIME-02_MobileClockInOut.png)

#### UC-TIME-02a: Mobile Task Switcher
![UC-TIME-02a: Mobile Task Switcher](images/usecase_diagram/time_tracking/UC-TIME-02a_MobileTaskSwitcher.png)

#### UC-TIME-02b: Field Photo Attachment
![UC-TIME-02b: Field Photo Attachment](images/usecase_diagram/time_tracking/UC-TIME-02b_FieldPhotoAttachment.png)

#### UC-TIME-03: Idle Inactivity Detection
![UC-TIME-03: Idle Inactivity Detection](images/usecase_diagram/time_tracking/UC-TIME-03_IdleInactivityDetection.png)

#### UC-TIME-03a: Idle Warning Popup
![UC-TIME-03a: Idle Warning Popup](images/usecase_diagram/time_tracking/UC-TIME-03a_IdleWarningPopup.png)

#### UC-TIME-03b: Manual Timesheet Approval
![UC-TIME-03b: Manual Timesheet Approval](images/usecase_diagram/time_tracking/UC-TIME-03b_ManualTimesheetApproval.png)

---

### 2.3. GPS Attendance Subsystem (8 Diagrams)

#### UC-GPS-01: Geofenced GPS Check-in
![UC-GPS-01: Geofenced GPS Check-in](images/usecase_diagram/gps_attendence/UC-GPS-01_GeofencedGPSCheckin.png)

#### UC-GPS-01a: Configure Branch Geofence Radius
![UC-GPS-01a: Configure Branch Geofence](images/usecase_diagram/gps_attendence/UC-GPS-01a_ConfigureBranchGeofence.png)

#### UC-GPS-01b: Verify Real-time GPS Location
![UC-GPS-01b: Verify Realtime GPS Location](images/usecase_diagram/gps_attendence/UC-GPS-01b_VerifyRealtimeGPSLocation.png)

#### UC-GPS-01c: Out-of-Bounds Check-in Rejection
![UC-GPS-01c: Out-of-Bounds Rejection](images/usecase_diagram/gps_attendence/UC-GPS-01c_OutofBoundsCheckinRejection.png)

#### UC-GPS-02: Live Map Location Tracking
![UC-GPS-02: Live Map Location Tracking](images/usecase_diagram/gps_attendence/UC-GPS-02_LiveMapLocationTracking.png)

#### UC-GPS-02a: Shift Route History Logging
![UC-GPS-02a: Shift Route History Logging](images/usecase_diagram/gps_attendence/UC-GPS-02a_ShiftRouteHistoryLogging.png)

#### UC-GPS-02b: Export Shift Route Log
![UC-GPS-02b: Export Shift Route Log](images/usecase_diagram/gps_attendence/UC-GPS-02b_ExportShiftRouteLog.png)

#### UC-GPS-02c: Privacy Protection Outside Shift
![UC-GPS-02c: Privacy Protection Outside Shift](images/usecase_diagram/gps_attendence/UC-GPS-02c_PrivacyProtectionOutsideShift.png)

---

### 2.4. Productivity Monitoring Subsystem (14 Diagrams)

#### UC-PROD-01: Random Automated Screenshot Capture
![UC-PROD-01: Random Automated Screenshot Capture](images/usecase_diagram/productivity_monitoring/UC-PROD-01_RandomAutomatedScreenshot.png)

#### UC-PROD-01a: Multi-Monitor Screen Capture
![UC-PROD-01a: Multi-Monitor Screen Capture](images/usecase_diagram/productivity_monitoring/UC-PROD-01a_MultiMonitorScreenCapture.png)

#### UC-PROD-01b: Sensitive App Blurring
![UC-PROD-01b: Sensitive App Blurring](images/usecase_diagram/productivity_monitoring/UC-PROD-01b_SensitiveAppBlurring.png)

#### UC-PROD-01c: Client-Side Encryption Upload
![UC-PROD-01c: Client-Side Encryption Upload](images/usecase_diagram/productivity_monitoring/UC-PROD-01c_ClientSideEncryptionUpload.png)

#### UC-PROD-02: Keystroke & Mouse Input Activity Tracking
![UC-PROD-02: Keystroke & Mouse Tracking](images/usecase_diagram/productivity_monitoring/UC-PROD-02_KeystrokeMouseTracking.png)

#### UC-PROD-02a: Active vs Idle Ratio Calculation
![UC-PROD-02a: Active vs Idle Ratio Calculation](images/usecase_diagram/productivity_monitoring/UC-PROD-02a_ActivevsIdleRatioCalculation.png)

#### UC-PROD-02b: Anti-Autoclicker Anomaly Detection
![UC-PROD-02b: Anti-Autoclicker Anomaly Detection](images/usecase_diagram/productivity_monitoring/UC-PROD-02b_AntiAutoclickerAnomalyDetection.png)

#### UC-PROD-03: App & Website Productivity Classification
![UC-PROD-03: App & Website Classification](images/usecase_diagram/productivity_monitoring/UC-PROD-03_AppWebsiteClassification.png)

#### UC-PROD-03a: Productive / Unproductive Labeling
![UC-PROD-03a: Productive / Unproductive Labeling](images/usecase_diagram/productivity_monitoring/UC-PROD-03a_ProductiveUnproductiveLabeling.png)

#### UC-PROD-03b: Department-Level Rule Overrides
![UC-PROD-03b: Department-Level Rule Overrides](images/usecase_diagram/productivity_monitoring/UC-PROD-03b_DepartmentLevelRuleOverrides.png)

#### UC-PROD-03c: Social Media Alert Generation
![UC-PROD-03c: Social Media Alert Generation](images/usecase_diagram/productivity_monitoring/UC-PROD-03c_SocialMediaAlertGeneration.png)

#### UC-PROD-04: Activity Score Calculation
![UC-PROD-04: Activity Score Calculation](images/usecase_diagram/productivity_monitoring/UC-PROD-04_ActivityScoreCalculation.png)

#### UC-PROD-04a: Weighted Score Algorithm
![UC-PROD-04a: Weighted Score Algorithm](images/usecase_diagram/productivity_monitoring/UC-PROD-04a_WeightedScoreAlgorithm.png)

#### UC-PROD-04b: Low Productivity Alerts
![UC-PROD-04b: Low Productivity Alerts](images/usecase_diagram/productivity_monitoring/UC-PROD-04b_LowProductivityAlerts.png)

---

### 2.5. Scheduling & Time-Off Subsystem (12 Diagrams)

#### UC-SCHED-01: Weekly Shift Planning
![UC-SCHED-01: Weekly Shift Planning](images/usecase_diagram/scheduling_leave/UC-SCHED-01_WeeklyShiftPlanning.png)

#### UC-SCHED-01a: Shift Pattern Selection
![UC-SCHED-01a: Shift Pattern Selection](images/usecase_diagram/scheduling_leave/UC-SCHED-01a_ShiftPatternSelection.png)

#### UC-SCHED-01b: Onsite / Remote Classification
![UC-SCHED-01b: Onsite / Remote Classification](images/usecase_diagram/scheduling_leave/UC-SCHED-01b_OnsiteRemoteClassification.png)

#### UC-SCHED-01c: Shift Conflict Check
![UC-SCHED-01c: Shift Conflict Check](images/usecase_diagram/scheduling_leave/UC-SCHED-01c_ShiftConflictCheck.png)

#### UC-SCHED-02: Time-off & Leave Management
![UC-SCHED-02: Time-off & Leave Management](images/usecase_diagram/scheduling_leave/UC-SCHED-02_TimeoffLeaveManagement.png)

#### UC-SCHED-02a: Leave Balance Verification
![UC-SCHED-02a: Leave Balance Verification](images/usecase_diagram/scheduling_leave/UC-SCHED-02a_LeaveBalanceVerification.png)

#### UC-SCHED-02b: Medical Note Attachment
![UC-SCHED-02b: Medical Note Attachment](images/usecase_diagram/scheduling_leave/UC-SCHED-02b_MedicalNoteAttachment.png)

#### UC-SCHED-02c: Multi-level Leave Approval
![UC-SCHED-02c: Multi-level Leave Approval](images/usecase_diagram/scheduling_leave/UC-SCHED-02c_MultilevelLeaveApproval.png)

#### UC-SCHED-03: Attendance Rules Reconciliation
![UC-SCHED-03: Attendance Rules Reconciliation](images/usecase_diagram/scheduling_leave/UC-SCHED-03_AttendanceRulesReconciliation.png)

#### UC-SCHED-03a: Shift Grace Period Allowance
![UC-SCHED-03a: Shift Grace Period Allowance](images/usecase_diagram/scheduling_leave/UC-SCHED-03a_ShiftGracePeriodAllowance.png)

#### UC-SCHED-03b: Late Arrival Violation Logging
![UC-SCHED-03b: Late Arrival Violation Logging](images/usecase_diagram/scheduling_leave/UC-SCHED-03b_LateArrivalViolationLogging.png)

#### UC-SCHED-03c: Unexcused Absence Flagging
![UC-SCHED-03c: Unexcused Absence Flagging](images/usecase_diagram/scheduling_leave/UC-SCHED-03c_UnexcusedAbsenceFlagging.png)

---

### 2.6. Payroll & Client Invoicing Subsystem (14 Diagrams)

#### UC-PAY-01: Automated Monthly Salary Calculation
![UC-PAY-01: Automated Monthly Salary Calculation](images/usecase_diagram/payroll_invoicing/UC-PAY-01_AutomatedMonthlySalaryCalculation.png)

#### UC-PAY-01a: Timesheet Hours Integration
![UC-PAY-01a: Timesheet Hours Integration](images/usecase_diagram/payroll_invoicing/UC-PAY-01a_TimesheetHoursIntegration.png)

#### UC-PAY-01b: Punctuality Violation Deduction
![UC-PAY-01b: Punctuality Violation Deduction](images/usecase_diagram/payroll_invoicing/UC-PAY-01b_PunctualityViolationDeduction.png)

#### UC-PAY-01c: Monthly Salary Sheet Audit
![UC-PAY-01c: Monthly Salary Sheet Audit](images/usecase_diagram/payroll_invoicing/UC-PAY-01c_MonthlySalarySheetAudit.png)

#### UC-PAY-01d: Encrypted Paystub PDF Generation
![UC-PAY-01d: Encrypted Paystub PDF Generation](images/usecase_diagram/payroll_invoicing/UC-PAY-01d_EncryptedPaystubPDFGeneration.png)

#### UC-PAY-02: Overtime Pay Management
![UC-PAY-02: Overtime Pay Management](images/usecase_diagram/payroll_invoicing/UC-PAY-02_OvertimePayManagement.png)

#### UC-PAY-02a: Overtime Multiplier Configuration
![UC-PAY-02a: Overtime Multiplier Configuration](images/usecase_diagram/payroll_invoicing/UC-PAY-02a_OvertimeMultiplierConfiguration.png)

#### UC-PAY-02b: Night Shift Allowance Calculation
![UC-PAY-02b: Night Shift Allowance Calculation](images/usecase_diagram/payroll_invoicing/UC-PAY-02b_NightShiftAllowanceCalculation.png)

#### UC-PAY-02c: Overtime Budget Cap Monitoring
![UC-PAY-02c: Overtime Budget Cap Monitoring](images/usecase_diagram/payroll_invoicing/UC-PAY-02c_OvertimeBudgetCapMonitoring.png)

#### UC-PAY-02d: Executive Overtime Budget Override
![UC-PAY-02d: Executive Overtime Budget Override](images/usecase_diagram/payroll_invoicing/UC-PAY-02d_ExecutiveOvertimeBudgetOverride.png)

#### UC-PAY-03: Client Invoicing Approval
![UC-PAY-03: Client Invoicing Approval](images/usecase_diagram/payroll_invoicing/UC-PAY-03_ClientInvoicingApproval.png)

#### UC-PAY-03a: Billable Hours Filtering
![UC-PAY-03a: Billable Hours Filtering](images/usecase_diagram/payroll_invoicing/UC-PAY-03a_BillableHoursFiltering.png)

#### UC-PAY-03b: Hourly Billing Rate Application
![UC-PAY-03b: Hourly Billing Rate Application](images/usecase_diagram/payroll_invoicing/UC-PAY-03b_HourlyBillingRateApplication.png)

#### UC-PAY-03c: Client Portal Invoice Payment
![UC-PAY-03c: Client Portal Invoice Payment](images/usecase_diagram/payroll_invoicing/UC-PAY-03c_ClientPortalInvoicePayment.png)

---

## 3. Process Swimlane Diagrams Gallery

### 3.1. People Management Swimlanes

#### Onboarding & Offboarding Swimlane Process Diagram
![Onboarding & Offboarding Swimlane Diagram](images/swimlane/people_management/OnboardingOffboarding.png)

#### Role & Permission Management (RBAC) Swimlane Process Diagram
![Role & Permission Management Swimlane Diagram](images/swimlane/people_management/RolesPermissions.png)

#### Employee Profile Management Swimlane Process Diagram
![Employee Profile Management Swimlane Diagram](images/swimlane/people_management/EmployeeProfiles.png)

#### Organizational Structure Setup Swimlane Process Diagram
![Organizational Structure Setup Swimlane Diagram](images/swimlane/people_management/OrgStructure.png)

---

### 3.2. Time Tracking Swimlanes

#### Desktop Work Timer Swimlane Process Diagram
![Desktop Work Timer Swimlane Diagram](images/swimlane/time_tracking/DesktopTimer.png)

#### Mobile Clock In / Out Swimlane Process Diagram
![Mobile Clock In / Out Swimlane Diagram](images/swimlane/time_tracking/MobileTimer.png)

#### Idle Inactivity Detection & Manual Timesheet Swimlane Process Diagram
![Idle Inactivity Detection Swimlane Diagram](images/swimlane/time_tracking/IdleTimesheet.png)

---

### 3.3. GPS Attendance Swimlanes

#### Geofenced GPS Check-in Swimlane Process Diagram
![Geofenced GPS Check-in Swimlane Diagram](images/swimlane/gps_attendance/GeofencedCheckin.png)

#### Live Map & Shift Route Tracking Swimlane Process Diagram
![Live Map & Shift Route Tracking Swimlane Diagram](images/swimlane/gps_attendance/LiveMapRoute.png)

---

### 3.4. Productivity Monitoring Swimlanes

#### Automated Screenshot Capture Swimlane Process Diagram
![Automated Screenshot Capture Swimlane Diagram](images/swimlane/productivity_monitoring/ScreenshotCapture.png)

#### Input Activity Tracking Swimlane Process Diagram
![Input Activity Tracking Swimlane Diagram](images/swimlane/productivity_monitoring/InputActivity.png)

#### App & Website Classification Swimlane Process Diagram
![App & Website Classification Swimlane Diagram](images/swimlane/productivity_monitoring/AppUrlClassification.png)

#### Activity Score & Real-time Alerts Swimlane Process Diagram
![Activity Score & Real-time Alerts Swimlane Diagram](images/swimlane/productivity_monitoring/ActivityScoreAlerts.png)

---

### 3.5. Scheduling & Time-Off Swimlanes

#### Weekly Shift Planning Swimlane Process Diagram
![Weekly Shift Planning Swimlane Diagram](images/swimlane/scheduling_leave/ShiftPlanning.png)

#### Time-off & Leave Management Swimlane Process Diagram
![Time-off & Leave Management Swimlane Diagram](images/swimlane/scheduling_leave/LeaveManagement.png)

#### Attendance Rules & Violation Log Swimlane Process Diagram
![Attendance Rules & Violation Log Swimlane Diagram](images/swimlane/scheduling_leave/AttendanceRules.png)

---

### 3.6. Payroll & Client Invoicing Swimlanes

#### Automated Monthly Salary Calculation Swimlane Process Diagram
![Automated Monthly Salary Calculation Swimlane Diagram](images/swimlane/payroll_invoicing/SalaryCalculation.png)

#### Overtime Pay & Allowance Management Swimlane Process Diagram
![Overtime Pay & Allowance Management Swimlane Diagram](images/swimlane/payroll_invoicing/OvertimeAllowance.png)

#### Client Invoicing & Billable Hours Swimlane Process Diagram
![Client Invoicing & Billable Hours Swimlane Diagram](images/swimlane/payroll_invoicing/ClientInvoicing.png)
