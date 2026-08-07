document.addEventListener('DOMContentLoaded', () => {
    // Toast Notification helper safely without innerHTML injection
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
            showToast('Opening Help & Support Center');
        });
    }

    const btnSignOut = document.getElementById('btnSignOut');
    if (btnSignOut) {
        btnSignOut.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Signing out Lucia Doan...');
        });
    }

    // 2. Status Tab Filtering (All, Pending, Approved, Rejected)
    const statusTabs = document.querySelectorAll('#statusTabs .tab-btn');
    const tableRows = document.querySelectorAll('#requestsTableBody tr');

    statusTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            statusTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const status = tab.getAttribute('data-status');
            filterTableRows();
        });
    });

    const typeFilter = document.getElementById('typeFilter');
    const priorityFilter = document.getElementById('priorityFilter');

    if (typeFilter) typeFilter.addEventListener('change', filterTableRows);
    if (priorityFilter) priorityFilter.addEventListener('change', filterTableRows);

    function filterTableRows() {
        const activeTab = document.querySelector('#statusTabs .tab-btn.active');
        const selectedStatus = activeTab ? activeTab.getAttribute('data-status') : 'all';
        const selectedType = typeFilter ? typeFilter.value : 'all';
        const selectedPriority = priorityFilter ? priorityFilter.value : 'all';

        tableRows.forEach(row => {
            const rowStatus = row.getAttribute('data-status');
            const rowType = row.getAttribute('data-type');
            const rowPriority = row.getAttribute('data-priority');

            const matchStatus = (selectedStatus === 'all' || rowStatus === selectedStatus);
            const matchType = (selectedType === 'all' || rowType === selectedType);
            const matchPriority = (selectedPriority === 'all' || rowPriority === selectedPriority);

            if (matchStatus && matchType && matchPriority) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // 3. Request Detail Modal / Drawer Logic
    const requestModal = document.getElementById('requestModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const modalReqId = document.getElementById('modalReqId');
    const modalEmpName = document.getElementById('modalEmpName');
    const modalReqSubject = document.getElementById('modalReqSubject');
    const modalReqMeta = document.getElementById('modalReqMeta');
    const modalReqDesc = document.getElementById('modalReqDesc');

    let activeRow = null;

    document.querySelectorAll('.btn-view-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (!row) return;

            activeRow = row;
            const reqId = row.getAttribute('data-id');
            const empName = row.querySelector('.user-cell strong')?.textContent || 'Employee';
            const reqType = row.children[2]?.textContent || 'Request';
            const subDate = row.children[3]?.textContent || 'Date';
            const priority = row.getAttribute('data-priority') || 'Normal';

            if (modalReqId) modalReqId.textContent = `Request Details - ${reqId}`;
            if (modalEmpName) modalEmpName.textContent = empName;
            if (modalReqSubject) modalReqSubject.textContent = reqType;
            if (modalReqMeta) modalReqMeta.textContent = `Submitted ${subDate} • ${priority} Priority`;
            if (modalReqDesc) {
                modalReqDesc.textContent = `Detailed application for ${reqType}. Reviewed by HR workflow. All mandatory attachments verified.`;
            }

            if (requestModal) requestModal.classList.remove('hidden');
        });
    });

    if (btnCloseModal && requestModal) {
        btnCloseModal.addEventListener('click', () => {
            requestModal.classList.add('hidden');
        });

        requestModal.addEventListener('click', (e) => {
            if (e.target === requestModal) {
                requestModal.classList.add('hidden');
            }
        });
    }

    // Modal Approve / Reject Buttons
    const btnModalApprove = document.getElementById('btnModalApprove');
    if (btnModalApprove) {
        btnModalApprove.addEventListener('click', () => {
            if (activeRow) {
                updateRowStatus(activeRow, 'approved');
            }
            if (requestModal) requestModal.classList.add('hidden');
            showToast('Request Approved Successfully');
        });
    }

    const btnModalReject = document.getElementById('btnModalReject');
    if (btnModalReject) {
        btnModalReject.addEventListener('click', () => {
            if (activeRow) {
                updateRowStatus(activeRow, 'rejected');
            }
            if (requestModal) requestModal.classList.add('hidden');
            showToast('Request Rejected');
        });
    }

    // Quick Approve Buttons in Table
    document.querySelectorAll('.btn-quick-approve').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            if (row) {
                updateRowStatus(row, 'approved');
                const reqId = row.getAttribute('data-id');
                showToast(`Approved ${reqId}`);
            }
        });
    });

    function updateRowStatus(row, newStatus) {
        row.setAttribute('data-status', newStatus);
        const statusCell = row.children[5];
        if (!statusCell) return;

        // Clear existing children
        statusCell.replaceChildren();

        const pill = document.createElement('span');

        if (newStatus === 'approved') {
            pill.className = 'status-pill status-approved';
            const dot = document.createElement('span');
            dot.className = 'status-dot';
            pill.appendChild(dot);
            pill.appendChild(document.createTextNode(' Approved'));
        } else if (newStatus === 'rejected') {
            pill.className = 'status-pill status-rejected';
            const dot = document.createElement('span');
            dot.className = 'status-dot';
            pill.appendChild(dot);
            pill.appendChild(document.createTextNode(' Rejected'));
        }

        statusCell.appendChild(pill);
    }

    // 4. Create New Request Button Handler
    const btnCreateRequest = document.getElementById('btnCreateRequest');
    if (btnCreateRequest) {
        btnCreateRequest.addEventListener('click', () => {
            window.location.href = 'CreateRequest.html';
        });
    }

    // 5. Header Search Listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showToast(`Searching requests for: "${searchInput.value}"`);
            }
        });
    }

    // 6. Header Bell & Profile clicks
    const notifBtn = document.getElementById('notifBtn');
    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            showToast('Notifications: 3 pending request approvals');
        });
    }

    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            showToast('Logged in as Lucia Doan (HR Manager)');
        });
    }
});
