# PRODUCTIVITY MONITORING & APP/URL CLASSIFICATION - DETAILED FEATURE BREAKDOWN

This document provides a detailed specification breakdown for the **Productivity Monitoring & App/URL Classification** subsystem based on `docs/mindmap/Architecture.md`.

---

## 1. MINDMAP TREE - PRODUCTIVITY MONITORING & APP/URL CLASSIFICATION

```mermaid
flowchart LR
    ROOT["3. Productivity Monitoring & App/URL Classification"]

    %% Branch 1: Automated Screenshot Capture
    ROOT --> SCR["3.1. Automated Screenshot Capture"]
    SCR --> S1["Random Interval Engine (1-3 screenshots per 10 mins)"]
    SCR --> S2["Multi-Monitor Concurrent Capture Support"]
    SCR --> S3["Client-side Screenshot Encryption before Upload"]
    SCR --> S4["Blur Sensitive Data / Private App Rules"]

    %% Branch 2: Input Activity Tracking
    ROOT --> INP["3.2. Input Activity Tracking"]
    INP --> I1["Keystroke Count & Mouse Movement Frequency Metrics"]
    INP --> I2["Active vs. Idle Session Ratio Calculation (%)"]
    INP --> I3["Anti-AutoClicker & Fake Activity Anomaly Detection"]

    %% Branch 3: App & URL Classification
    ROOT --> APP["3.3. App & URL Productivity Classification"]
    APP --> A1["Global & Tenant App/Website Categorization Engine"]
    APP --> A2["Productivity Labeling (Productive / Unproductive / Neutral)"]
    APP --> A3["Department-specific Classification Rules (Flexible Overrides)"]
    APP --> A4["Detailed Domain URL & Active Window Title Logging"]

    %% Branch 4: Activity Score & Alerts
    ROOT --> SCORE["3.4. Activity Score & Real-time Alerts"]
    SCORE --> C1["Weighted Activity Score Algorithm Calculation (%)"]
    SCORE --> C2["Low Productivity Threshold Triggers (< 30%)"]
    SCORE --> C3["Manager Real-time Alert Notifications & Dashboard Badges"]
```

---

## 2. DETAILED FEATURE SPECIFICATIONS

### 3.1. Automated Screenshot Capture
* **Random Interval Engine:** Captures random screenshots (e.g., 1 to 3 captures within every 10-minute block) to ensure objective, unannounced sampling.
* **Multi-Monitor Support:** Captures all connected displays concurrently (Display 1, Display 2, Display 3) for multi-monitor workstations.
* **Client-Side Encryption:** Encrypts captured images using AES-256 on the desktop agent prior to uploading to secure cloud storage.
* **Sensitive Data Blurring:** Automatically blurs screen capture content when employees access pre-configured sensitive applications (e.g., Password Managers, Banking apps, Private messaging).

### 3.2. Input Activity Tracking
* **Input Frequency Metrics:** Measures keystrokes count and mouse movement/click frequency per minute *(Note: Does not log actual key characters/keylogger to preserve privacy).*
* **Active Ratio Calculation:** Calculates the active versus idle session percentage ratio per minute.
* **Anti-AutoClicker Detection:** Integrates AI anomaly detection algorithms to identify artificial mouse jigglers and auto-clicker software based on non-human periodic movement frequencies.

### 3.3. Application & URL Productivity Classification
* **Software & Web Domain Categorization:** Automatically detects running desktop applications and active browser domain URLs.
* **Productivity Labeling:**
  * `Productive`: Work-related applications/domains (e.g., VS Code, Jira, Figma, Google Docs).
  * `Unproductive`: Non-work or entertainment domains/apps (e.g., Facebook, YouTube, Steam, Netflix, TikTok).
  * `Neutral`: General system utility tools (e.g., File Explorer, Calculator, System Settings).
* **Department-Specific Overrides:** Configures flexible classification rules based on department roles:
  * *Facebook / TikTok:* Labeled as `Productive` for Marketing departments, but labeled as `Unproductive` for Software Engineering.
* **Active Window & Domain Logging:** Records exact domain URLs and active window title text for compliance auditing.

### 3.4. Activity Score & Real-Time Alerts
* **Weighted Activity Score Algorithm (%):** Combines input frequency (60%) and productive app usage (40%) into a unified Activity Score metric (0% - 100%).
* **Low Productivity Threshold Triggers:** Configures threshold alerts (e.g., Activity Score < 30% for 2 consecutive hours).
* **Real-Time Alert Dispatch:** Sends instant push notifications and dashboard badges to supervisors when low-productivity thresholds or compliance anomalies are detected.
