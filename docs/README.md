# HR Management Platform - Master Specification & Diagram Documentation

This document serves as the **Master Architecture Documentation** for the HR Management Platform, organizing all Consolidated Subsystem Use Case Diagrams and Process Swimlane Activity Diagrams.

---

## Table of Contents
1. [Subsystem 1: People Management](#1-people-management-subsystem)
2. [Subsystem 2: Time Tracking](#2-time-tracking-subsystem)
3. [Subsystem 3: GPS Attendance](#3-gps-attendance-subsystem)
4. [Subsystem 4: Productivity Monitoring](#4-productivity-monitoring-subsystem)
5. [Subsystem 5: Scheduling & Time-Off](#5-scheduling--time-off-subsystem)
6. [Subsystem 6: Payroll & Client Invoicing](#6-payroll--client-invoicing-subsystem)

---

## 1. People Management Subsystem

### Consolidated Use Case Diagrams

#### 1. Employee Profiles & Organizational Structure Diagram
![Employee Profiles & Org Structure Diagram](images/usecase_diagram/people_manager/Manage_Employee.png)

#### 2. Onboarding, Offboarding & RBAC Permissions Diagram
![Onboarding, Offboarding & RBAC Diagram](images/usecase_diagram/people_manager/RBAC.png)

### Process Swimlane (Activity) Diagrams

#### 1. Employee Profile Management Swimlane
![Employee Profile Management Swimlane](images/swimlane/people_management/EmployeeProfiles.png)

#### 2. Organizational Structure Setup Swimlane
![Organizational Structure Setup Swimlane](images/swimlane/people_management/OrgStructure.png)

#### 3. Onboarding & Offboarding Swimlane
![Onboarding & Offboarding Swimlane](images/swimlane/people_management/OnboardingOffboarding.png)

#### 4. Role & Permission Management (RBAC) Swimlane
![Role & Permission Management Swimlane](images/swimlane/people_management/RolesPermissions.png)

---

## 2. Time Tracking Subsystem

### Consolidated Use Case Diagrams

#### 1. Work Timer Controls Diagram (Desktop & Mobile)
![Work Timer Controls Diagram](images/usecase_diagram/time_tracking/TimeController.png)

#### 2. Idle Detection & Manual Timesheet Approvals Diagram
![Idle Detection & Manual Timesheet Diagram](images/usecase_diagram/time_tracking/IdleAdjustment.png)

### Process Swimlane (Activity) Diagrams

#### 1. Desktop Work Timer Control Swimlane
![Desktop Work Timer Control Swimlane](images/swimlane/time_tracking/DesktopTimer.png)

#### 2. Mobile Clock In / Out Swimlane
![Mobile Clock In / Out Swimlane](images/swimlane/time_tracking/MobileTimer.png)

#### 3. Idle Inactivity Detection & Manual Timesheet Swimlane
![Idle Inactivity Detection Swimlane](images/swimlane/time_tracking/IdleTimesheet.png)

---

## 3. GPS Attendance Subsystem

### Consolidated Use Case Diagrams

#### 1. Geofenced GPS Check-in Diagram
![Geofenced GPS Check-in Diagram](images/usecase_diagram/gps_attendence/GPS_Geofence.png)

#### 2. Live Map & Route History Tracking Diagram
![Live Map & Route History Diagram](images/usecase_diagram/gps_attendence/Live_Route.png)

### Process Swimlane (Activity) Diagrams

#### 1. Geofenced GPS Check-in Swimlane
![Geofenced GPS Check-in Swimlane](images/swimlane/gps_attendance/GeofencedCheckin.png)

#### 2. Live Map & Shift Route Tracking Swimlane
![Live Map & Shift Route Tracking Swimlane](images/swimlane/gps_attendance/LiveMapRoute.png)

---

## 4. Productivity Monitoring Subsystem

### Consolidated Use Case Diagrams

#### 1. Screenshot Capture & Input Activity Diagram
![Screenshot Capture & Input Activity Diagram](images/usecase_diagram/productivity_monitoring/ScreenActivity.png)

#### 2. App & Website Productivity Classification Diagram
![App & Website Productivity Classification Diagram](images/usecase_diagram/productivity_monitoring/AppWebClassifiy.png)

#### 3. Activity Score & Anti-Autoclicker Anomaly Alerts Diagram
![Activity Score & Anomaly Alerts Diagram](images/usecase_diagram/productivity_monitoring/Productivity_Analysis.png)

### Process Swimlane (Activity) Diagrams

#### 1. Automated Screenshot Capture Swimlane
![Automated Screenshot Capture Swimlane](images/swimlane/productivity_monitoring/ScreenshotCapture.png)

#### 2. Input Activity Tracking Swimlane
![Input Activity Tracking Swimlane](images/swimlane/productivity_monitoring/InputActivity.png)

#### 3. App & Website Classification Swimlane
![App & Website Classification Swimlane](images/swimlane/productivity_monitoring/AppUrlClassification.png)

#### 4. Activity Score & Real-time Alerts Swimlane
![Activity Score & Real-time Alerts Swimlane](images/swimlane/productivity_monitoring/ActivityScoreAlerts.png)

---

## 5. Scheduling & Time-Off Subsystem

### Consolidated Use Case Diagrams

#### 1. Weekly Shift Planning & Attendance Rules Diagram
![Weekly Shift Planning & Attendance Rules Diagram](images/usecase_diagram/scheduling/Shift_Scheduling.png)

#### 2. Time-off & Leave Management Approval Diagram
![Time-off & Leave Management Diagram](images/usecase_diagram/scheduling/Leave_Scheduling.png)

### Process Swimlane (Activity) Diagrams

#### 1. Weekly Shift Planning Swimlane
![Weekly Shift Planning Swimlane](images/swimlane/scheduling_leave/ShiftPlanning.png)

#### 2. Time-off & Leave Management Swimlane
![Time-off & Leave Management Swimlane](images/swimlane/scheduling_leave/LeaveManagement.png)

#### 3. Attendance Rules & Violation Log Swimlane
![Attendance Rules & Violation Log Swimlane](images/swimlane/scheduling_leave/AttendanceRules.png)

---

## 6. Payroll & Client Invoicing Subsystem

### Consolidated Use Case Diagrams

#### 1. Automated Monthly Salary & Overtime Pay Diagram
![Automated Monthly Salary & Overtime Diagram](images/usecase_diagram/payroll_invoicing/Payroll.png)

#### 2. Client Invoicing & Portal Payment Diagram
![Client Invoicing & Portal Payment Diagram](images/usecase_diagram/payroll_invoicing/Client_Invocing.png)

### Process Swimlane (Activity) Diagrams

#### 1. Automated Monthly Salary Calculation Swimlane
![Automated Monthly Salary Calculation Swimlane](images/swimlane/payroll_invoicing/SalaryCalculation.png)

#### 2. Overtime Pay & Allowance Management Swimlane
![Overtime Pay & Allowance Management Swimlane](images/swimlane/payroll_invoicing/OvertimeAllowance.png)

#### 3. Client Invoicing & Billable Hours Swimlane
![Client Invoicing & Billable Hours Swimlane](images/swimlane/payroll_invoicing/ClientInvoicing.png)
