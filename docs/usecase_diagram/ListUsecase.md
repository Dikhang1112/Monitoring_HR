# HR MANAGEMENT PLATFORM
## Core Use Case Specifications

---

## 1. SYSTEM ACTORS SPECIFICATION

Hệ thống xác định **6 Primary Actors** trong kiến trúc Multi-Tenant HR Management Platform:

| No. | Actor Code | Actor Name | Role Description & Scope of Authority |
| :--- | :--- | :--- | :--- |
| 1 | **ACT-01** | **System-Admin** | Super Administrator quản trị nền tảng SaaS. Khởi tạo & quản lý tài khoản Tenant, cấu hình quota tài nguyên, gói dịch vụ, giám sát log hệ thống và tích hợp API toàn cầu. |
| 2 | **ACT-02** | **Admin-Tenant** | Administrator quản trị doanh nghiệp. Cấu hình cơ cấu tổ chức, phòng ban, phân quyền vai trò (RBAC), quy tắc chấm công, phân loại App/URL, chạy bảng lương và xuất hóa đơn. |
| 3 | **ACT-03** | **Director** | Giám đốc / Lãnh đạo C-Level. Xem Executive Dashboard, nhận dự báo & khuyến nghị AI, xem báo cáo tài chính/hiệu suất toàn công ty và quản lý trần ngân sách tăng ca. |
| 4 | **ACT-04** | **Manager** | Trưởng phòng / Quản lý dự án. Lên lịch làm việc tuần, phê duyệt đơn xin nghỉ phép, theo dõi Real-time Status Board, quản lý bảng công việc Kanban và xử lý cảnh báo idle/bất thường. |
| 5 | **ACT-05** | **Staff** | Nhân viên nội bộ. Chấm công đếm giờ (Desktop/Mobile/GPS Geofencing), nộp đơn xin nghỉ phép, tham gia họp trực tuyến tích hợp và xem Timeline hoạt động cá nhân. |
| 6 | **ACT-06** | **Client** | Khách hàng / Đối tác bên ngoài. Truy cập Client Portal xem tiến độ công việc dự án, duyệt giờ tính phí (Billable Hours) và tải hóa đơn thanh toán PDF. |

---

## 2. CORE USE CASE SPECIFICATIONS BY MODULE

Danh sách các Use Case quan trọng nhất được phân bổ qua 5 phân hệ cốt lõi:

### 2.1. Phân hệ Quản trị Hệ thống & Tenant (System & Tenant Administration)

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-01** | Tenant Provisioning & Subscription | Tenant Management | System-Admin | System, Email | Khởi tạo tổ chức Tenant mới, cấp tài nguyên quota, chuyển đổi gói dịch vụ và quản lý trạng thái tài khoản công ty. |
| **UC-CORE-02** | Employee Profiles & Role RBAC | People Management | Admin-Tenant | Manager | Quản lý sơ đồ tổ chức, danh sách nhân sự, phân phòng ban và thiết lập nhóm quyền chi tiết theo vai trò (RBAC). |

### 2.2. Phân hệ Chấm công & Định vị (Attendance & GPS Tracking)

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-03** | Work Timer Clock In/Out | Time Tracking | Staff | System | Bật/Tắt bộ đếm thời gian làm việc trên ứng dụng Desktop/Mobile, lưu vết timesheet và tự động phát hiện inactive/idle. |
| **UC-CORE-04** | Geofenced GPS Check-in | GPS & Geofencing | Staff | System | Chấm công vào/ra kèm xác thực tọa độ GPS nằm trong bán kính cho phép của văn phòng hoặc công trình. |

### 2.3. Phân hệ Theo dõi Hiệu suất (Productivity Monitoring)

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-05** | Screenshot & Activity Tracking | Productivity Monitoring | System | Manager, Staff | Tự động chụp màn hình ngẫu nhiên, đo đạc tần suất tương tác phím/chuột và tính toán Activity Score (%). |
| **UC-CORE-06** | App & Website Classification | App & URL Classification | Admin-Tenant | Manager | Gán nhãn các phần mềm/tên miền thành Productive, Unproductive hoặc Neutral để làm căn cứ tính hiệu suất. |

### 2.4. Phân hệ Lịch làm việc, Nghỉ phép & Dự án (Schedule, Leave & Project)

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-07** | Shift & Work Schedule Planning | Scheduling | Manager | Staff | Phân ca làm việc hàng tuần cho nhóm, cấu hình chế độ làm việc Onsite (văn phòng) hoặc Remote (từ xa). |
| **UC-CORE-08** | Time-off Request & Approval | Scheduling & Leave | Staff | Manager | Nộp đơn xin nghỉ phép (phép năm, phép bệnh), tự động kiểm tra quỹ phép và quy trình duyệt phép của Manager. |
| **UC-CORE-09** | Project Task & Kanban Management | Project Management | Manager | Staff, Client | Tạo dự án, phân công công việc trên bảng Kanban, thiết lập thời gian dự kiến và theo dõi tiến độ hoàn thành. |
| **UC-CORE-10** | Billable Hours & Cost Tracking | Worktime Expenditure | Staff | Manager, Client | Ghi nhận giờ làm tính phí khách hàng (Billable Hours) và quy đổi thời gian làm việc thành chi phí dự án. |

### 2.5. Phân hệ Tính lương & Dashboard Quản trị (Payroll & Executive Insights)

| Use Case ID | Use Case Name | Feature Module | Primary Actor | Secondary Actor | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **UC-CORE-11** | Automated Payroll & Overtime | Payroll & Invoicing | Admin-Tenant | System | Tổng hợp dữ liệu chấm công, tự động tính bảng lương hàng tháng kèm tiền làm thêm giờ (Overtime) và xuất file. |
| **UC-CORE-12** | Executive Dashboard & AI Insights | Dashboard & Insights | Director | Manager | Dashboard hiển thị KPI tổng quan toàn công ty, chi phí tăng ca và khuyến nghị AI về rủi ro kiệt sức/nghỉ việc. |

---

## 3. TỔNG HỢP CORE USE CASES THEO ACTOR

| Actor Code | Actor Name | Tổng số Use Cases | Danh sách Core Use Cases trực tiếp |
| :--- | :--- | :---: | :--- |
| **ACT-01** | **System-Admin** | 1 | `UC-CORE-01` |
| **ACT-02** | **Admin-Tenant** | 3 | `UC-CORE-02`, `UC-CORE-06`, `UC-CORE-11` |
| **ACT-03** | **Director** | 2 | `UC-CORE-10`, `UC-CORE-12` |
| **ACT-04** | **Manager** | 7 | `UC-CORE-05`, `UC-CORE-06`, `UC-CORE-07`, `UC-CORE-08`, `UC-CORE-09`, `UC-CORE-10`, `UC-CORE-12` |
| **ACT-05** | **Staff** | 7 | `UC-CORE-03`, `UC-CORE-04`, `UC-CORE-05`, `UC-CORE-07`, `UC-CORE-08`, `UC-CORE-09`, `UC-CORE-10` |
| **ACT-06** | **Client** | 2 | `UC-CORE-09`, `UC-CORE-10` |
