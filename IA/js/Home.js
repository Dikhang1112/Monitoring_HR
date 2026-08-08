document.addEventListener('DOMContentLoaded', () => {
    // Helper function for toast notifications safely without innerHTML
    function showToast(message) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(
            '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
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

    // Sidebar Bottom User Profile Popup Toggle
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

    // Sign Out Button Handler -> Redirects to Login.html
    const btnSignOut = document.getElementById('btnSignOut');
    if (btnSignOut) {
        btnSignOut.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Signing out of HR Platform...');
            setTimeout(() => {
                window.location.href = 'Login.html';
            }, 800);
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
            showToast('Opening HR Helpdesk & Documentation...');
        });
    }

    // Performance Filter Change
    const perfQuarterFilter = document.getElementById('perfQuarterFilter');
    if (perfQuarterFilter) {
        perfQuarterFilter.addEventListener('change', (e) => {
            showToast(`Loaded performance metrics for ${e.target.value}`);
        });
    }

    // Post Job Button
    const btnPostJob = document.getElementById('btnPostJob');
    if (btnPostJob) {
        btnPostJob.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Opening New Job Opening Creator...');
        });
    }

    // Add Schedule Event Button
    const btnAddSchedule = document.getElementById('btnAddSchedule');
    if (btnAddSchedule) {
        btnAddSchedule.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Opening Calendar Event Creator...');
        });
    }

    // Search bar functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showToast(`Searching for "${searchInput.value}"...`);
            }
        });
    }

    // Notifications Button
    const notifBtn = document.getElementById('notifBtn');
    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            showToast('You have 3 unread HR notifications');
        });
    }
});
