/**
 * Reusable Unified Sidebar Component Loader for HR Platform
 */
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebarContainer');
    if (!sidebarContainer) return;

    const isSubfolder = sidebarContainer.getAttribute('data-is-subfolder') === 'true';
    const basePath = isSubfolder ? '../' : '';
    const peoplePath = isSubfolder ? '' : 'people_management/';

    const activePage = sidebarContainer.getAttribute('data-active') || '';
    const activeSubpage = sidebarContainer.getAttribute('data-subpage') || '';

    // Unified Sidebar HTML Template
    sidebarContainer.innerHTML = `
        <div class="sidebar-top">
            <div class="logo">
                <div class="logo-icon">HR</div>
                HR Platform
            </div>

            <ul class="menu" id="sidebarMenu">
                <a href="${basePath}Home.html" class="menu-item ${activePage === 'Home' ? 'active' : ''}" data-page="Home">
                    <svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    Home
                </a>
                <li class="menu-item ${activePage === 'People Management' ? 'active' : ''}" id="peopleMenuToggle" data-page="People Management" style="cursor: pointer;">
                    <div style="display:flex; align-items:center; gap:12px; flex:1;">
                        <svg viewBox="0 0 24 24">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>People Management</span>
                    </div>
                    <svg class="dropdown-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </li>
                <ul class="submenu ${activePage === 'People Management' ? '' : 'hidden'}" id="peopleSubmenu">
                    <a href="${peoplePath}EmployeeDirectory.html" class="submenu-item ${activeSubpage === 'Employee Directory' ? 'active' : ''}" data-subpage="Employee Directory">
                        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        Employee Directory
                    </a>
                    <a href="${peoplePath}OrgDepartment.html" class="submenu-item ${activeSubpage === 'Organization & Department' ? 'active' : ''}" data-subpage="Organization & Department">
                        <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        Organization & Department
                    </a>
                    <a href="${peoplePath}RequestManagement.html" class="submenu-item ${activeSubpage === 'Request Management' ? 'active' : ''}" data-subpage="Request Management">
                        <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        Request Management
                    </a>
                </ul>
                <li class="menu-item ${activePage === 'Recruitment' ? 'active' : ''}" data-page="Recruitment">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    Recruitment
                </li>
                <li class="menu-item ${activePage === 'Onboarding' ? 'active' : ''}" data-page="Onboarding">
                    <svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.1-1.31 1.5-2"/><path d="M12 15l-3-3 3-3"/><path d="M9 12h12"/></svg>
                    Onboarding
                </li>
                <li class="menu-item ${activePage === 'Offboarding' ? 'active' : ''}" data-page="Offboarding">
                    <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Offboarding
                </li>
                <li class="menu-item ${activePage === 'Payroll' ? 'active' : ''}" data-page="Payroll">
                    <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    Payroll
                </li>
                <li class="menu-item ${activePage === 'Performance' ? 'active' : ''}" data-page="Performance">
                    <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    Performance
                </li>
                <li class="menu-item ${activePage === 'Settings' ? 'active' : ''}" data-page="Settings">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    Settings
                </li>
            </ul>
        </div>

        <div class="sidebar-footer">
            <div class="user-profile-bar" id="sidebarUserProfile" title="Lucia Doan Profile">
                <div class="avatar-small">LD</div>
                <div class="user-info">
                    <span class="user-name">Lucia Doan</span>
                    <span class="user-role">HR Manager</span>
                </div>
                <svg class="dropdown-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </div>

            <div class="user-popup hidden" id="userPopup">
                <button class="popup-item" id="btnUpdateVersion">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                    Update Version
                </button>
                <button class="popup-item" id="btnHelp">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    Help
                </button>
                <div class="popup-divider"></div>
                <button class="popup-item logout-item" id="btnSignOut">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Sign Out
                </button>
            </div>
        </div>
    `;

    // Bind People Management Accordion Toggle
    const peopleMenuToggle = document.getElementById('peopleMenuToggle');
    const peopleSubmenu = document.getElementById('peopleSubmenu');
    if (peopleMenuToggle && peopleSubmenu) {
        peopleMenuToggle.addEventListener('click', () => {
            peopleMenuToggle.classList.toggle('collapsed');
            peopleSubmenu.classList.toggle('hidden');
        });
    }

    // Bind User Profile Popup Menu
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

    // Toast helper inside sidebar scope if not global
    function triggerSidebarToast(msg) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) {
            alert(msg);
            return;
        }
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toastContainer.contains(toast)) toastContainer.removeChild(toast);
            }, 300);
        }, 2000);
    }

    const btnUpdateVersion = document.getElementById('btnUpdateVersion');
    if (btnUpdateVersion) {
        btnUpdateVersion.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            triggerSidebarToast('Checking for updates... Current Version: v2.4.0');
        });
    }

    const btnHelp = document.getElementById('btnHelp');
    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            triggerSidebarToast('Opening Help & Support Center');
        });
    }

    const btnSignOut = document.getElementById('btnSignOut');
    if (btnSignOut) {
        btnSignOut.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            triggerSidebarToast('Signing out Lucia Doan...');
            setTimeout(() => {
                window.location.href = `${basePath}Login.html`;
            }, 800);
        });
    }
});
