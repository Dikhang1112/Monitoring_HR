document.addEventListener('DOMContentLoaded', () => {

    // Helper function for toast notifications safely without innerHTML
    function showToast(message) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(
            '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
            'image/svg+xml'
        );
        const icon = svgDoc.documentElement;

        const textNode = document.createElement('span');
        textNode.textContent = message;

        toast.appendChild(icon);
        toast.appendChild(textNode);
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                if (toastContainer.contains(toast)) {
                    toastContainer.removeChild(toast);
                }
            }, 300);
        }, 2500);
    }

    // Submenu Accordion Toggle for People Management
    const peopleMenuToggle = document.getElementById('peopleMenuToggle');
    const peopleSubmenu = document.getElementById('peopleSubmenu');

    if (peopleMenuToggle && peopleSubmenu) {
        peopleMenuToggle.addEventListener('click', () => {
            peopleMenuToggle.classList.toggle('collapsed');
            peopleSubmenu.classList.toggle('hidden');
        });
    }

    // 1. Dynamic Request Type Selection & Field Rendering
    const typeCards = document.querySelectorAll('.type-card');
    const dynamicContainer = document.getElementById('dynamicFieldsContainer');

    typeCards.forEach(card => {
        card.addEventListener('click', () => {
            typeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            const type = card.getAttribute('data-type');
            renderDynamicFields(type);
        });
    });

    function renderDynamicFields(type) {
        if (!dynamicContainer) return;

        // Clear container safely
        dynamicContainer.replaceChildren();

        if (type === 'Leave') {
            dynamicContainer.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Start Date *</label>
                        <input type="date" class="form-input" id="startDate" value="2026-08-12">
                    </div>
                    <div class="form-group">
                        <label class="form-label">End Date *</label>
                        <input type="date" class="form-input" id="endDate" value="2026-08-14">
                    </div>
                </div>
                <div class="calc-info-box" id="calcDaysBox">
                    <span>Calculated Duration: <strong id="calculatedDaysText">3 Working Days</strong></span>
                    <span class="calc-badge" id="quotaCheckBadge">Quota Available: 12 Days</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Handover Assignee * <span class="sub-info">Who covers your tasks</span></label>
                    <select class="form-select" id="handoverAssignee">
                        <option value="Alex Lee">Alex Lee (Product Designer)</option>
                        <option value="Sarah Jenkins">Sarah Jenkins (HR Specialist)</option>
                        <option value="Mark Vance">Mark Vance (Backend Developer)</option>
                    </select>
                </div>
            `;
            attachDateCalcListeners();
        } else if (type === 'Equipment') {
            dynamicContainer.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Device Type *</label>
                        <select class="form-select" id="deviceType">
                            <option value="Laptop MacBook Pro">Laptop MacBook Pro 16" (M3 Max)</option>
                            <option value="Dell XPS 15">Dell XPS 15 Laptop</option>
                            <option value="UltraSharp 27 Monitor">Dell UltraSharp 27" Monitor</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Requested Specs / Model</label>
                        <input type="text" class="form-input" id="deviceSpecs" value="32GB RAM / 1TB SSD">
                    </div>
                </div>
                <div class="calc-info-box">
                    <span>Approval Routing: <strong>Requires IT Department + Manager Approval</strong></span>
                    <span class="calc-badge">SLA: 3 Days</span>
                </div>
            `;
        } else if (type === 'Overtime') {
            dynamicContainer.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">OT Date *</label>
                        <input type="date" class="form-input" id="otDate" value="2026-08-15">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Project Name / Task ID *</label>
                        <input type="text" class="form-input" id="projectName" value="HR Platform v2.4 Release">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Start Time</label>
                        <input type="time" class="form-input" id="startTime" value="18:00">
                    </div>
                    <div class="form-group">
                        <label class="form-label">End Time</label>
                        <input type="time" class="form-input" id="endTime" value="21:00">
                    </div>
                </div>
                <div class="calc-info-box">
                    <span>Auto Calculated: <strong>3.0 Hours (Multiplier x1.5)</strong></span>
                    <span class="calc-badge">Approved by PM</span>
                </div>
            `;
        } else if (type === 'Training') {
            dynamicContainer.innerHTML = `
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Course / Workshop Title *</label>
                        <input type="text" class="form-input" id="courseTitle" value="AWS Certified Solutions Architect Training">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Training Provider / Platform *</label>
                        <select class="form-select" id="trainingProvider">
                            <option value="Coursera / Udemy Certification">Coursera / Udemy Certification</option>
                            <option value="AWS Official Workshop">AWS Official Workshop</option>
                            <option value="Internal Technical Masterclass">Internal Technical Masterclass</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label">Estimated Tuition Fee ($)</label>
                        <input type="text" class="form-input" id="tuitionFee" value="$300 USD">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Expected Completion Date</label>
                        <input type="date" class="form-input" id="trainingDate" value="2026-09-30">
                    </div>
                </div>
                <div class="calc-info-box">
                    <span>Reimbursement Policy: <strong>100% Eligible under Annual HR L&D Budget</strong></span>
                    <span class="calc-badge">SLA: 2 Days</span>
                </div>
            `;
        }
    }

    // 2. Real-time Date Calculation Function
    function attachDateCalcListeners() {
        const startDateInput = document.getElementById('startDate');
        const endDateInput = document.getElementById('endDate');

        if (startDateInput && endDateInput) {
            startDateInput.addEventListener('change', calculateWorkDays);
            endDateInput.addEventListener('change', calculateWorkDays);
        }
    }

    function calculateWorkDays() {
        const startVal = document.getElementById('startDate')?.value;
        const endVal = document.getElementById('endDate')?.value;
        const calcText = document.getElementById('calculatedDaysText');
        const quotaBadge = document.getElementById('quotaCheckBadge');

        if (!startVal || !endVal || !calcText) return;

        const start = new Date(startVal);
        const end = new Date(endVal);

        if (end < start) {
            calcText.textContent = 'Invalid date range';
            return;
        }

        let count = 0;
        let cur = new Date(start);

        while (cur <= end) {
            const dayOfWeek = cur.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sunday (0) and Saturday (6)
                count++;
            }
            cur.setDate(cur.getDate() + 1);
        }

        calcText.textContent = `${count} Working Days`;

        if (quotaBadge) {
            if (count > 12) {
                quotaBadge.textContent = '⚠️ Exceeds Available Quota (12 Days)';
                quotaBadge.style.color = '#dc2626';
                quotaBadge.style.borderColor = '#fca5a5';
            } else {
                quotaBadge.textContent = 'Quota Available: 12 Days';
                quotaBadge.style.color = 'var(--text-main)';
                quotaBadge.style.borderColor = 'var(--border-strong)';
            }
        }
    }

    attachDateCalcListeners();

    // 3. Form Submission & Draft Saving
    const btnSubmitForm = document.getElementById('btnSubmitForm');
    if (btnSubmitForm) {
        btnSubmitForm.addEventListener('click', () => {
            const reasonText = document.getElementById('reasonText')?.value;
            if (!reasonText || reasonText.trim() === '') {
                showToast('Please enter a reason or notes for your request.');
                return;
            }

            showToast('Request submitted successfully! Forwarded to Duy Nguyen & Lucia Doan.');

            setTimeout(() => {
                window.location.href = 'TrackingRequest.html';
            }, 1200);
        });
    }

    const btnSaveDraft = document.getElementById('btnSaveDraft');
    if (btnSaveDraft) {
        btnSaveDraft.addEventListener('click', () => {
            showToast('Draft request saved successfully!');
        });
    }

    // 4. Sidebar Bottom Profile Popup Toggle
    const sidebarUserProfile = document.getElementById('sidebarUserProfile');
    const userPopup = document.getElementById('userPopup');

    if (sidebarUserProfile && userPopup) {
        sidebarUserProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userPopup.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!userPopup.contains(e.target) && !sidebarUserProfile.contains(e.target)) {
                userPopup.classList.add('hidden');
            }
        });
    }

    const btnUpdateVersion = document.getElementById('btnUpdateVersion');
    if (btnUpdateVersion) {
        btnUpdateVersion.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Checking for updates... Current version: v2.4.0');
        });
    }

    const btnHelp = document.getElementById('btnHelp');
    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Opening HR Platform Help & Support Center');
        });
    }

    const btnSignOut = document.getElementById('btnSignOut');
    if (btnSignOut) {
        btnSignOut.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Signing out Lucia Doan...');
        });
    }

    // 5. Drag & Drop File Attachment Simulation
    const dropzone = document.getElementById('fileDropzone');
    if (dropzone) {
        dropzone.addEventListener('click', () => {
            showToast('Simulating file browser... File attached: medical_certificate.pdf');
        });
    }

    // 6. Search Bar Event Listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showToast(`Searching templates for: "${searchInput.value}"`);
            }
        });
    }
});
