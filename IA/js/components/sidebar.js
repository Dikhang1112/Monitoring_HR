/**
 * Reusable Unified Sidebar Component Loader for HR Platform
 * Supports Expand/Collapse Toggle, Persistence, and Non-Overlapping Layout
 */
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebarContainer');
    if (!sidebarContainer) return;

    const isSubfolder = sidebarContainer.getAttribute('data-is-subfolder') === 'true';
    const basePath = isSubfolder ? '../' : '';
    
    // Path resolution based on current document location
    const currentLoc = window.location.pathname;
    const isPeopleFolder = currentLoc.includes('people_management');
    const isRecruitmentFolder = currentLoc.includes('recruitment');
    const isOnboardingFolder = currentLoc.includes('onboarding');
    const isOffboardingFolder = currentLoc.includes('offboarding');

    const peoplePath = isPeopleFolder ? '' : (isSubfolder ? '../people_management/' : 'people_management/');
    const recruitmentPath = isRecruitmentFolder ? '' : (isSubfolder ? '../recruitment/' : 'recruitment/');
    const onboardingPath = isOnboardingFolder ? '' : (isSubfolder ? '../onboarding/' : 'onboarding/');
    const offboardingPath = isOffboardingFolder ? '' : (isSubfolder ? '../offboarding/' : 'offboarding/');

    const activePage = sidebarContainer.getAttribute('data-active') || '';
    const activeSubpage = sidebarContainer.getAttribute('data-subpage') || '';

    // Inject global sidebar SVG constraint and layout styles
    if (!document.getElementById('sidebarGlobalStyle')) {
        const style = document.createElement('style');
        style.id = 'sidebarGlobalStyle';
        style.innerHTML = `
            #sidebarContainer {
                width: 260px !important;
                background: #ffffff !important;
                border-right: 1px solid #e4e4e7 !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
                position: fixed !important;
                top: 0 !important;
                bottom: 0 !important;
                left: 0 !important;
                z-index: 100 !important;
                padding: 20px 16px !important;
                box-sizing: border-box !important;
                transition: width 0.25s ease-in-out, padding 0.25s ease-in-out !important;
            }

            /* Ensure main content container is pushed right and never overlaps sidebar */
            #sidebarContainer ~ * {
                margin-left: 260px !important;
                transition: margin-left 0.25s ease-in-out !important;
            }

            #sidebarContainer .sidebar-top {
                display: flex !important;
                flex-direction: column !important;
                gap: 24px !important;
            }

            #sidebarContainer .logo {
                font-size: 18px !important;
                font-weight: 700 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 0 4px !important;
                color: #09090b !important;
            }

            #sidebarContainer .logo-icon {
                width: 32px !important;
                height: 32px !important;
                background: #09090b !important;
                color: #ffffff !important;
                border-radius: 10px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 14px !important;
                font-weight: 700 !important;
            }

            /* Toggle Button Styling */
            #sidebarContainer .sidebar-toggle-btn {
                background: #f4f4f5 !important;
                border: 1px solid #e4e4e7 !important;
                border-radius: 6px !important;
                width: 26px !important;
                height: 26px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                color: #71717a !important;
                transition: all 0.15s ease !important;
            }
            #sidebarContainer .sidebar-toggle-btn:hover {
                background: #e4e4e7 !important;
                color: #09090b !important;
            }
            #sidebarContainer .sidebar-toggle-btn svg {
                width: 14px !important;
                height: 14px !important;
            }

            #sidebarContainer .menu {
                display: flex !important;
                flex-direction: column !important;
                gap: 4px !important;
                list-style: none !important;
                padding: 0 !important;
                margin: 0 !important;
            }
            #sidebarContainer .menu-item {
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                gap: 12px !important;
                padding: 10px 12px !important;
                border-radius: 10px !important;
                color: #71717a !important;
                font-weight: 500 !important;
                font-size: 13.5px !important;
                text-decoration: none !important;
                cursor: pointer !important;
                transition: all 0.15s ease !important;
            }
            #sidebarContainer .menu-item:hover, #sidebarContainer .menu-item.active {
                background: #f4f4f5 !important;
                color: #09090b !important;
                font-weight: 600 !important;
            }
            #sidebarContainer svg {
                width: 18px !important;
                height: 18px !important;
                min-width: 18px !important;
                min-height: 18px !important;
                max-width: 18px !important;
                max-height: 18px !important;
                flex-shrink: 0 !important;
                stroke: currentColor !important;
                fill: none !important;
                stroke-width: 2 !important;
                display: inline-block !important;
            }
            #sidebarContainer .dropdown-chevron {
                width: 16px !important;
                height: 16px !important;
                min-width: 16px !important;
                min-height: 16px !important;
                max-width: 16px !important;
                max-height: 16px !important;
                margin-left: auto !important;
                transition: transform 0.2s ease !important;
            }
            #sidebarContainer .menu-item.collapsed .dropdown-chevron {
                transform: rotate(-90deg) !important;
            }
            #sidebarContainer .submenu {
                display: flex !important;
                flex-direction: column !important;
                gap: 2px !important;
                padding-left: 28px !important;
                margin-top: 2px !important;
                list-style: none !important;
            }
            #sidebarContainer .submenu.hidden {
                display: none !important;
            }
            #sidebarContainer .submenu-item {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
                padding: 8px 12px !important;
                border-radius: 6px !important;
                color: #71717a !important;
                font-size: 13px !important;
                text-decoration: none !important;
                transition: all 0.15s ease !important;
            }
            #sidebarContainer .submenu-item:hover, #sidebarContainer .submenu-item.active {
                color: #09090b !important;
                font-weight: 600 !important;
                background: #f4f4f5 !important;
            }
            #sidebarContainer .submenu-item svg {
                width: 16px !important;
                height: 16px !important;
                min-width: 16px !important;
                min-height: 16px !important;
                max-width: 16px !important;
                max-height: 16px !important;
            }
            #sidebarContainer .sidebar-footer {
                position: relative !important;
                border-top: 1px solid #e4e4e7 !important;
                padding-top: 16px !important;
            }
            #sidebarContainer .user-profile-bar {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 8px !important;
                border-radius: 10px !important;
                cursor: pointer !important;
            }
            #sidebarContainer .user-profile-bar:hover {
                background: #f4f4f5 !important;
            }
            #sidebarContainer .avatar-small {
                width: 36px !important;
                height: 36px !important;
                border-radius: 50% !important;
                background: #09090b !important;
                color: #ffffff !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-weight: 700 !important;
                font-size: 13px !important;
            }
            #sidebarContainer .user-info {
                display: flex !important;
                flex-direction: column !important;
                gap: 1px !important;
                flex: 1 !important;
                margin-left: 10px !important;
            }
            #sidebarContainer .user-name {
                font-size: 13px !important;
                font-weight: 600 !important;
                color: #09090b !important;
            }
            #sidebarContainer .user-role {
                font-size: 11.5px !important;
                color: #71717a !important;
            }
            #sidebarContainer .user-popup {
                position: absolute !important;
                bottom: 60px !important;
                left: 0 !important;
                right: 0 !important;
                background: #ffffff !important;
                border: 1px solid #e4e4e7 !important;
                border-radius: 10px !important;
                box-shadow: 0 6px 16px rgba(0,0,0,0.08) !important;
                padding: 6px !important;
                z-index: 200 !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 2px !important;
            }
            #sidebarContainer .user-popup.hidden {
                display: none !important;
            }
            #sidebarContainer .popup-item {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important;
                padding: 9px 12px !important;
                border: none !important;
                background: transparent !important;
                font-size: 13px !important;
                color: #09090b !important;
                font-weight: 500 !important;
                cursor: pointer !important;
                border-radius: 6px !important;
                text-align: left !important;
                width: 100% !important;
            }
            #sidebarContainer .popup-item:hover {
                background: #f4f4f5 !important;
            }
            #sidebarContainer .popup-divider {
                height: 1px !important;
                background: #e4e4e7 !important;
                margin: 4px 0 !important;
            }
            #sidebarContainer .hidden {
                display: none !important;
            }

            /* ========================================================= */
            /* COLLAPSED STATE (72px Icon-Only Sidebar) */
            /* ========================================================= */
            #sidebarContainer.collapsed {
                width: 72px !important;
                padding: 20px 10px !important;
            }

            #sidebarContainer.collapsed ~ * {
                margin-left: 72px !important;
            }

            #sidebarContainer.collapsed .logo-text,
            #sidebarContainer.collapsed .menu-item span,
            #sidebarContainer.collapsed .submenu-item span,
            #sidebarContainer.collapsed .dropdown-chevron,
            #sidebarContainer.collapsed .user-info,
            #sidebarContainer.collapsed .user-profile-bar .dropdown-chevron {
                display: none !important;
            }

            #sidebarContainer.collapsed .logo {
                padding: 0 !important;
                justify-content: center !important;
                position: relative !important;
            }

            #sidebarContainer.collapsed .logo-left {
                display: none !important;
            }

            #sidebarContainer.collapsed .sidebar-toggle-btn {
                margin: 0 auto !important;
            }

            #sidebarContainer.collapsed .menu-item,
            #sidebarContainer.collapsed .submenu-item {
                justify-content: center !important;
                padding: 10px 0 !important;
            }

            #sidebarContainer.collapsed .submenu {
                padding-left: 0 !important;
            }

            #sidebarContainer.collapsed .user-profile-bar {
                justify-content: center !important;
                padding: 8px 0 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Unified Sidebar HTML Template
    sidebarContainer.innerHTML = `
        <div class="sidebar-top">
            <div class="logo">
                <div class="logo-left" style="display:flex; align-items:center; gap:10px;">
                    <div class="logo-icon">HR</div>
                    <span class="logo-text">HR Platform</span>
                </div>
                <button class="sidebar-toggle-btn" id="sidebarToggleBtn" title="Toggle Sidebar Collapse">
                    <svg class="toggle-icon-left" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
                    <svg class="toggle-icon-right hidden" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
            </div>

            <ul class="menu" id="sidebarMenu">
                <a href="${basePath}Home.html" class="menu-item ${activePage === 'Home' ? 'active' : ''}" data-page="Home" title="Home">
                    <svg viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span>Home</span>
                </a>

                <!-- People Management Accordion -->
                <li class="menu-item ${activePage === 'People Management' ? 'active' : ''}" id="peopleMenuToggle" data-page="People Management" title="People Management" style="cursor: pointer;">
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
                    <a href="${peoplePath}EmployeeDirectory.html" class="submenu-item ${activeSubpage === 'Employee Directory' ? 'active' : ''}" data-subpage="Employee Directory" title="Employee Directory">
                        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span>Employee Directory</span>
                    </a>
                    <a href="${peoplePath}OrgDepartment.html" class="submenu-item ${activeSubpage === 'Organization & Department' ? 'active' : ''}" data-subpage="Organization & Department" title="Organization & Department">
                        <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        <span>Organization & Department</span>
                    </a>
                    <a href="${peoplePath}RequestManagement.html" class="submenu-item ${activeSubpage === 'Request Management' ? 'active' : ''}" data-subpage="Request Management" title="Request Management">
                        <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span>Request Management</span>
                    </a>
                </ul>

                <!-- Recruitment Accordion -->
                <li class="menu-item ${activePage === 'Recruitment' ? 'active' : ''}" id="recruitmentMenuToggle" data-page="Recruitment" title="Recruitment & ATS" style="cursor: pointer;">
                    <div style="display:flex; align-items:center; gap:12px; flex:1;">
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                        <span>Recruitment & ATS</span>
                    </div>
                    <svg class="dropdown-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                </li>
                <ul class="submenu ${activePage === 'Recruitment' ? '' : 'hidden'}" id="recruitmentSubmenu">
                    <a href="${recruitmentPath}JobOpenings.html" class="submenu-item ${activeSubpage === 'Job Openings' ? 'active' : ''}" data-subpage="Job Openings" title="Job Openings Board">
                        <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        <span>Job Openings Board</span>
                    </a>
                    <a href="${recruitmentPath}CandidatePipeline.html" class="submenu-item ${activeSubpage === 'Candidate Pipeline' ? 'active' : ''}" data-subpage="Candidate Pipeline" title="Candidate Pipeline">
                        <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>
                        <span>Candidate Pipeline</span>
                    </a>
                    <a href="${recruitmentPath}InterviewOffer.html" class="submenu-item ${activeSubpage === 'Interview & Offer' ? 'active' : ''}" data-subpage="Interview & Offer" title="Interview & Offer">
                        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>Interview & Offer</span>
                    </a>
                </ul>
                <a href="${onboardingPath}NewHireOnboarding.html" class="menu-item ${activePage === 'Onboarding' ? 'active' : ''}" data-page="Onboarding" title="Onboarding">
                    <svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.1-1.31 1.5-2"/><path d="M12 15l-3-3 3-3"/><path d="M9 12h12"/></svg>
                    <span>Onboarding</span>
                </a>
                <a href="${offboardingPath}OffboardingRequests.html" class="menu-item ${activePage === 'Offboarding' ? 'active' : ''}" data-page="Offboarding" title="Offboarding">
                    <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    <span>Offboarding</span>
                </a>
                <li class="menu-item ${activePage === 'Payroll' ? 'active' : ''}" data-page="Payroll" title="Payroll">
                    <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                    <span>Payroll</span>
                </li>
                <li class="menu-item ${activePage === 'Performance' ? 'active' : ''}" data-page="Performance" title="Performance">
                    <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    <span>Performance</span>
                </li>
                <li class="menu-item ${activePage === 'Settings' ? 'active' : ''}" data-page="Settings" title="Settings">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    <span>Settings</span>
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
                    <span>Update Version</span>
                </button>
                <button class="popup-item" id="btnHelp">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <span>Help</span>
                </button>
                <div class="popup-divider"></div>
                <button class="popup-item logout-item" id="btnSignOut">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    `;

    // Toggle Sidebar Expand / Collapse
    const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
    const toggleIconLeft = sidebarContainer.querySelector('.toggle-icon-left');
    const toggleIconRight = sidebarContainer.querySelector('.toggle-icon-right');

    const setCollapsedState = (collapsed) => {
        if (collapsed) {
            sidebarContainer.classList.add('collapsed');
            if (toggleIconLeft) toggleIconLeft.classList.add('hidden');
            if (toggleIconRight) toggleIconRight.classList.remove('hidden');
        } else {
            sidebarContainer.classList.remove('collapsed');
            if (toggleIconLeft) toggleIconLeft.classList.remove('hidden');
            if (toggleIconRight) toggleIconRight.classList.add('hidden');
        }
    };

    // Restore saved collapse state from localStorage
    const savedState = localStorage.getItem('sidebar_collapsed') === 'true';
    setCollapsedState(savedState);

    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isNowCollapsed = !sidebarContainer.classList.contains('collapsed');
            setCollapsedState(isNowCollapsed);
            localStorage.setItem('sidebar_collapsed', isNowCollapsed);
        });
    }

    // Bind People Management Accordion Toggle
    const peopleMenuToggle = document.getElementById('peopleMenuToggle');
    const peopleSubmenu = document.getElementById('peopleSubmenu');
    if (peopleMenuToggle && peopleSubmenu) {
        peopleMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            peopleMenuToggle.classList.toggle('collapsed');
            peopleSubmenu.classList.toggle('hidden');
        });
    }

    // Bind Recruitment Accordion Toggle
    const recruitmentMenuToggle = document.getElementById('recruitmentMenuToggle');
    const recruitmentSubmenu = document.getElementById('recruitmentSubmenu');
    if (recruitmentMenuToggle && recruitmentSubmenu) {
        recruitmentMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            recruitmentMenuToggle.classList.toggle('collapsed');
            recruitmentSubmenu.classList.toggle('hidden');
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
});
