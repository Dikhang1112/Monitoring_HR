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

    // 1. Sidebar Bottom Profile Popup Toggle
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
            setTimeout(() => {
                window.location.href = '../Login.html';
            }, 800);
        });
    }

    // 2. Action Toolbar Event Handlers (4-Step Workflow Approval)
    const btnApproveReq = document.getElementById('btnApproveReq');
    const stepperStageLabel = document.getElementById('stepperStageLabel');
    const currentStageText = document.getElementById('currentStageText');

    if (btnApproveReq) {
        btnApproveReq.addEventListener('click', () => {
            const step3 = document.getElementById('step3');
            const step4 = document.getElementById('step4');
            const progressBar = document.getElementById('stepperProgressBar');

            if (step3) {
                step3.classList.remove('active');
                step3.classList.add('completed');
                const circle = step3.querySelector('.step-circle');
                if (circle) {
                    circle.replaceChildren();
                    const svgDoc = new DOMParser().parseFromString(
                        '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
                        'image/svg+xml'
                    );
                    circle.appendChild(svgDoc.documentElement);
                }
            }

            if (step4) {
                step4.classList.add('completed');
                const circle = step4.querySelector('.step-circle');
                if (circle) {
                    circle.replaceChildren();
                    const svgDoc = new DOMParser().parseFromString(
                        '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
                        'image/svg+xml'
                    );
                    circle.appendChild(svgDoc.documentElement);
                }
            }

            if (progressBar) {
                progressBar.style.width = '100%';
            }

            if (stepperStageLabel) stepperStageLabel.textContent = 'Workflow Status: Completed';
            if (currentStageText) currentStageText.textContent = 'Step 4 of 4 (Completed)';

            showToast('Request REQ-1092 Approved by Lucia Doan! Workflow Completed.');
        });
    }

    const btnRejectReq = document.getElementById('btnRejectReq');
    if (btnRejectReq) {
        btnRejectReq.addEventListener('click', () => {
            if (stepperStageLabel) stepperStageLabel.textContent = 'Workflow Status: Rejected';
            if (currentStageText) currentStageText.textContent = 'Rejected by HR';
            showToast('Request REQ-1092 Rejected by Lucia Doan');
        });
    }

    const btnUrgeReminder = document.getElementById('btnUrgeReminder');
    if (btnUrgeReminder) {
        btnUrgeReminder.addEventListener('click', () => {
            showToast('Urgent reminder notification sent to Duy Nguyen & Lucia Doan!');
        });
    }

    // 3. Search & Profile Header Event Listeners
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showToast(`Searching tracking logs for: "${searchInput.value}"`);
            }
        });
    }

    const notifBtn = document.getElementById('notifBtn');
    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            showToast('Notifications: 3 unread updates');
        });
    }

    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            showToast('Logged in as Lucia Doan (HR Manager)');
        });
    }
});
