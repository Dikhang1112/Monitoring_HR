# HR Management Platform - Master Diagram Documentation

This document serves as the **Master Architecture Diagram Documentation** for the HR Management Platform. It presents the System Actors Overview, followed by all Consolidated Subsystem Use Case Diagrams and Process Swimlane Activity Diagrams.

---

## Sitemap url: https://www.relume.ai/app/project/P3513106_M_AsmXcsz2LE9p9i5egRRtV2aMuaJQ4-Pj5YjjiDkKo

## 1. System Actors Overview

The table below outlines all **Primary Actors** (human users initiating use cases) and **Secondary Actors** (supporting background services, engines, and external systems) across the platform:

| No. | Actor Category | Type | Actor Name | Titles / Sub-Roles | Description |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | Human / User | **Primary Actor** | **System-Admin** | • Global System Administrator<br>• Multi-tenant Platform Admin | Top-level system manager; configures global settings, manages tenants, and defines multi-tenant RBAC permissions. |
| **2** | Human / User | **Primary Actor** | **Admin-Tenant** | • Company Admin<br>• Tenant Administrator<br>• HR Director | Manages enterprise-wide configurations (org structure, geofence rules, productivity rules, shift policies, and leave policies). |
| **3** | Human / User | **Primary Actor** | **Director** | • Executive Director<br>• Chief Executive Officer (CEO)<br>• Board Member | Executive leadership; reviews overall strategic productivity reports, anomaly trends, and company-wide performance metrics. |
| **4** | Human / User | **Primary Actor** | **Manager** *(Includes Accountant)* | • **Department Manager / Team Lead**<br>• **HR Manager / Recruiter**<br>• **Accountant / Payroll Specialist** | Middle management & specialized roles: Manages teams, approves leave/timesheets, schedules shifts, monitors GPS/productivity, executes recruitment (HR), and audits/calculates monthly payroll (Accountant). |
| **5** | Human / User | **Primary Actor** | **Staff** | • Full-time / Part-time Employee<br>• Field Worker<br>• Remote Worker / Freelancer | End-users; operates desktop/mobile work timers, performs geofenced GPS check-ins, submits leave requests, and justifies idle time. |
| **6** | Human / User | **Primary Actor** | **Client** | • Client Representative<br>• External Project Owner | External partner/client; accesses the Client Portal to review billable project hours, approve invoices, and process payments. |
| **7** | Human / User | **Primary Actor** | **Candidate** | • Job Applicant<br>• Candidate | Recruitment applicant; receives interview schedules, responds to pipeline stages, and signs digital offer letters. |
| **8** | System / Service | **Secondary Actor** | **Desktop Agent Service** | • Desktop Client App<br>• Background Tracker Agent | Background desktop application/service monitoring keyboard/mouse input activity, capturing automated screenshots, and detecting idle time. |
| **9** | System / Service | **Secondary Actor** | **Mobile App Service** | • Mobile Location Tracker<br>• Field Check-in Agent | Mobile background service collecting real-time GPS coordinates and facilitating field service geofenced check-ins. |
| **10** | System / Service | **Secondary Actor** | **GPS / Location Service** | • Geofencing API<br>• GIS Map Route Service | Validates branch geofence radii, renders real-time location maps, and records staff shift movement routes. |
| **11** | System / Service | **Secondary Actor** | **Productivity AI Engine** | • Classification Engine<br>• Anomaly Detection Engine | Automatically classifies app/web usage (Productive/Unproductive), calculates team productivity scores, and triggers anomaly alerts. |
| **12** | System / Service | **Secondary Actor** | **Scheduling & Leave Engine** | • Shift Conflict Validator<br>• Leave Quota Calculator | Validates shift schedules against conflict rules and automatically calculates/deducts remaining employee leave quotas. |
| **13** | System / Service | **Secondary Actor** | **Payroll & Billing Engine** | • Salary Calculation Engine<br>• Invoice Generator Service | Aggregates timesheet data, applies overtime multipliers, calculates monthly payroll, and generates client invoices. |
| **14** | System / Service | **Secondary Actor** | **Email Service** | • SMTP Gateway<br>• Notification Service | Sends automated notifications for interview schedules, digital offer letters, late arrival violations, and anomaly alerts. |
| **15** | System / Service | **Secondary Actor** | **Cloud Storage** | • Encrypted Storage Bucket<br>• S3 Screenshot Storage | Securely stores encrypted employee screenshot images and application media assets. |

---

## 2. Use Case Diagrams Gallery

### 2.1. People Management Subsystem

#### Employee Profiles & Organizational Structure Diagram
![Employee Profiles & Org Structure Diagram](images/usecase_diagram/people_manager/Manage_Employee.png)

#### Onboarding, Offboarding & RBAC Permissions Diagram
![Onboarding, Offboarding & RBAC Diagram](images/usecase_diagram/people_manager/RBAC.png)

#### Recruitment & Applicant Tracking System (ATS) Diagram
![Recruitment & Applicant Tracking System Diagram](images/usecase_diagram/people_manager/Recruiter.png)

---

### 2.2. Time Tracking Subsystem

#### Desktop & Mobile Work Timer Control Diagram
![Desktop & Mobile Work Timer Control Diagram](images/usecase_diagram/time_tracking/TimerControl.png)

#### Idle Inactivity Detection & Manual Timesheet Diagram
![Idle Inactivity Detection & Manual Timesheet Diagram](images/usecase_diagram/time_tracking/IdleAdjustment.png)

---

### 2.3. GPS Attendance Subsystem

#### Geofenced GPS Check-in Diagram
![Geofenced GPS Check-in Diagram](images/usecase_diagram/gps_attendence/GPS_Geofence.png)

#### Live Map & Shift Route Tracking Diagram
![Live Map & Shift Route Tracking Diagram](images/usecase_diagram/gps_attendence/Live_Route.png)

---

### 2.4. Productivity Monitoring Subsystem

#### Automated Screenshots & Input Activity Diagram
![Automated Screenshots & Input Activity Diagram](images/usecase_diagram/productivity_monitoring/ScreenshotActivity.png)

#### App & Website Classification Diagram
![App & Website Classification Diagram](images/usecase_diagram/productivity_monitoring/WebAppClassifiy.png)

#### Productivity Scores & Anomaly Alerts Diagram
![Productivity Scores & Anomaly Alerts Diagram](images/usecase_diagram/productivity_monitoring/Productivity.png)

---

### 2.5. Scheduling & Time-Off Subsystem

#### Weekly Shift Planning & Attendance Rules Diagram
![Weekly Shift Planning & Attendance Rules Diagram](images/usecase_diagram/scheduling/Shift_Scheduling.png)

#### Time-off & Leave Management Approval Diagram
![Time-off & Leave Management Diagram](images/usecase_diagram/scheduling/Leave_Scheduling.png)

---

### 2.6. Payroll & Client Invoicing Subsystem

#### Automated Monthly Salary & Overtime Pay Diagram
![Automated Monthly Salary & Overtime Pay Diagram](images/usecase_diagram/payroll_invoicing/Payroll.png)

#### Client Invoicing & Portal Payment Diagram
![Client Invoicing & Portal Payment Diagram](images/usecase_diagram/payroll_invoicing/Client_Invocing.png)

---

## 3. Process Swimlane Diagrams Gallery

### 3.1. People Management Swimlanes

#### Employee Profile Management Swimlane
![Employee Profile Management Swimlane](images/swimlane/people_management/EmployeeProfiles.png)

#### Organizational Structure Setup Swimlane
![Organizational Structure Setup Swimlane](images/swimlane/people_management/OrgStructure.png)

#### Onboarding & Offboarding Swimlane
![Onboarding & Offboarding Swimlane](images/swimlane/people_management/OnboardingOffboarding.png)

#### Role & Permission Management (RBAC) Swimlane
![Role & Permission Management Swimlane](images/swimlane/people_management/RolesPermissions.png)

---

### 3.2. Time Tracking Swimlanes

#### Desktop Work Timer Control Swimlane
![Desktop Work Timer Control Swimlane](images/swimlane/time_tracking/DesktopTimer.png)

#### Mobile Clock In / Out Swimlane
![Mobile Clock In / Out Swimlane](images/swimlane/time_tracking/MobileTimer.png)

#### Idle Inactivity Detection & Manual Timesheet Swimlane
![Idle Inactivity Detection Swimlane](images/swimlane/time_tracking/IdleTimesheet.png)

---

### 3.3. GPS Attendance Swimlanes

#### Geofenced GPS Check-in Swimlane
![Geofenced GPS Check-in Swimlane](images/swimlane/gps_attendance/GeofencedCheckin.png)

#### Live Map & Shift Route Tracking Swimlane
![Live Map & Shift Route Tracking Swimlane](images/swimlane/gps_attendance/LiveMapRoute.png)

---

### 3.4. Productivity Monitoring Swimlanes

#### Automated Screenshot Capture Swimlane
![Automated Screenshot Capture Swimlane](images/swimlane/productivity_monitoring/ScreenshotCapture.png)

#### Input Activity Tracking Swimlane
![Input Activity Tracking Swimlane](images/swimlane/productivity_monitoring/InputActivity.png)

#### App & Website Classification Swimlane
![App & Website Classification Swimlane](images/swimlane/productivity_monitoring/AppUrlClassification.png)

#### Activity Score & Real-time Alerts Swimlane
![Activity Score & Real-time Alerts Swimlane](images/swimlane/productivity_monitoring/ActivityScoreAlerts.png)

---

### 3.5. Scheduling & Time-Off Swimlanes

#### Weekly Shift Planning Swimlane
![Weekly Shift Planning Swimlane](images/swimlane/scheduling_leave/ShiftPlanning.png)

#### Time-off & Leave Management Swimlane
![Time-off & Leave Management Swimlane](images/swimlane/scheduling_leave/LeaveManagement.png)

#### Attendance Rules & Violation Log Swimlane
![Attendance Rules & Violation Log Swimlane](images/swimlane/scheduling_leave/AttendanceRules.png)

---

### 3.6. Payroll & Client Invoicing Swimlanes

#### Automated Monthly Salary Calculation Swimlane
![Automated Monthly Salary Calculation Swimlane](images/swimlane/payroll_invoicing/SalaryCalculation.png)

#### Overtime Pay & Allowance Management Swimlane
![Overtime Pay & Allowance Management Swimlane](images/swimlane/payroll_invoicing/OvertimeAllowance.png)

#### Client Invoicing & Billable Hours Swimlane
![Client Invoicing & Billable Hours Swimlane](images/swimlane/payroll_invoicing/ClientInvoicing.png)
