document.addEventListener('DOMContentLoaded', () => {
    // 1. Toast Notification helper safely without innerHTML injection
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

    // 2. Submenu Accordion Toggle for People Management
    const peopleMenuToggle = document.getElementById('peopleMenuToggle');
    const peopleSubmenu = document.getElementById('peopleSubmenu');

    if (peopleMenuToggle && peopleSubmenu) {
        peopleMenuToggle.addEventListener('click', () => {
            peopleMenuToggle.classList.toggle('collapsed');
            peopleSubmenu.classList.toggle('hidden');
        });
    }

    // 3. Sidebar Bottom Profile Popup Toggle
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
            setTimeout(() => {
                window.location.href = '../Login.html';
            }, 800);
        });
    }

    // 4. Notifications Icon Button
    const btnNotifications = document.getElementById('btnNotifications');
    if (btnNotifications) {
        btnNotifications.addEventListener('click', () => {
            showToast('2 department restructuring requests pending approval.');
        });
    }

    // 5. View Mode Switcher (Org Tree View vs Roster Table)
    const viewTabs = document.querySelectorAll('#viewModeTabs .tab-btn');
    const treeView = document.getElementById('treeView');
    const tableView = document.getElementById('tableView');

    viewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            viewTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const selectedView = tab.getAttribute('data-view');
            if (selectedView === 'treeView') {
                if (treeView) treeView.classList.add('active');
                if (tableView) tableView.classList.remove('active');
            } else {
                if (treeView) treeView.classList.remove('active');
                if (tableView) tableView.classList.add('active');
            }
        });
    });

    // 6. Org Tree Canvas Zoom Controls
    const btnZoomIn = document.getElementById('btnZoomIn');
    const btnZoomOut = document.getElementById('btnZoomOut');
    const orgTreeContent = document.getElementById('orgTreeContent');

    let currentScale = 1.0;

    if (btnZoomIn && orgTreeContent) {
        btnZoomIn.addEventListener('click', () => {
            if (currentScale < 1.4) {
                currentScale += 0.1;
                orgTreeContent.style.transform = `scale(${currentScale})`;
                orgTreeContent.style.transformOrigin = 'top center';
                orgTreeContent.style.transition = 'transform 0.2s ease';
            }
        });
    }

    if (btnZoomOut && orgTreeContent) {
        btnZoomOut.addEventListener('click', () => {
            if (currentScale > 0.7) {
                currentScale -= 0.1;
                orgTreeContent.style.transform = `scale(${currentScale})`;
                orgTreeContent.style.transformOrigin = 'top center';
                orgTreeContent.style.transition = 'transform 0.2s ease';
            }
        });
    }

    // 7. Drawer Logic for Creating / Editing Department
    const deptDrawerOverlay = document.getElementById('deptDrawerOverlay');
    const btnCreateDept = document.getElementById('btnCreateDept');
    const btnCloseDrawer = document.getElementById('btnCloseDrawer');
    const btnCancelDrawer = document.getElementById('btnCancelDrawer');
    const drawerTitle = document.getElementById('drawerTitle');
    const deptForm = document.getElementById('deptForm');

    const deptNameInput = document.getElementById('deptNameInput');
    const parentDeptSelect = document.getElementById('parentDeptSelect');
    const deptLeadSelect = document.getElementById('deptLeadSelect');
    const locationSelect = document.getElementById('locationSelect');
    const budgetInput = document.getElementById('budgetInput');
    const deptDescInput = document.getElementById('deptDescInput');

    let currentEditingId = null;

    function openDrawer(titleText, editId = null) {
        if (drawerTitle) drawerTitle.textContent = titleText;
        currentEditingId = editId;

        if (!editId) {
            deptForm.reset();
        }

        if (deptDrawerOverlay) {
            deptDrawerOverlay.classList.remove('hidden');
        }
    }

    function closeDrawer() {
        if (deptDrawerOverlay) {
            deptDrawerOverlay.classList.add('hidden');
        }
        deptForm.reset();
        currentEditingId = null;
    }

    if (btnCreateDept) {
        btnCreateDept.addEventListener('click', () => {
            openDrawer('Add New Department');
        });
    }

    if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
    if (btnCancelDrawer) btnCancelDrawer.addEventListener('click', closeDrawer);

    if (deptDrawerOverlay) {
        deptDrawerOverlay.addEventListener('click', (e) => {
            if (e.target === deptDrawerOverlay) {
                closeDrawer();
            }
        });
    }

    // Node & Table Edit Trigger
    document.querySelectorAll('.tree-node').forEach(node => {
        node.addEventListener('click', () => {
            const deptId = node.getAttribute('data-dept-id');
            const titleElem = node.querySelector('.node-title');
            const deptName = titleElem ? titleElem.textContent : 'Department';
            openDrawer(`Edit Department: ${deptName}`, deptId);
        });
    });

    document.querySelectorAll('.btn-edit-dept').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const deptId = btn.getAttribute('data-id');
            const row = btn.closest('tr');
            const deptNameCell = row ? row.querySelector('.dept-name-cell span') : null;
            const deptName = deptNameCell ? deptNameCell.textContent : 'Department';
            openDrawer(`Edit Department: ${deptName}`, deptId);
        });
    });

    // Save Form Handler
    if (deptForm) {
        deptForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = deptNameInput.value.trim();

            if (!newName) {
                showToast('Please enter a valid department name.');
                return;
            }

            if (currentEditingId) {
                showToast(`Updated department "${newName}" successfully.`);
            } else {
                showToast(`Created new department "${newName}" successfully.`);

                // Dynamically add new row to Table Body safely
                const tbody = document.getElementById('deptTableBody');
                if (tbody) {
                    const newRow = document.createElement('tr');

                    // Name Cell
                    const tdName = document.createElement('td');
                    const divNameCell = document.createElement('div');
                    divNameCell.className = 'dept-name-cell';

                    const iconBox = document.createElement('div');
                    iconBox.className = 'dept-icon-box';
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(
                        '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
                        'image/svg+xml'
                    );
                    iconBox.appendChild(svgDoc.documentElement);

                    const nameSpan = document.createElement('span');
                    nameSpan.textContent = newName;

                    divNameCell.appendChild(iconBox);
                    divNameCell.appendChild(nameSpan);
                    tdName.appendChild(divNameCell);

                    // Lead Cell
                    const tdLead = document.createElement('td');
                    tdLead.textContent = deptLeadSelect.value;

                    // Parent Cell
                    const tdParent = document.createElement('td');
                    tdParent.textContent = parentDeptSelect.options[parentDeptSelect.selectedIndex].text;

                    // Location Cell
                    const tdLocation = document.createElement('td');
                    tdLocation.textContent = locationSelect.value;

                    // Headcount Cell
                    const tdHeadcount = document.createElement('td');
                    tdHeadcount.textContent = '1 Employee';

                    // Status Cell
                    const tdStatus = document.createElement('td');
                    const statusPill = document.createElement('span');
                    statusPill.className = 'status-pill active';
                    statusPill.textContent = 'Active';
                    tdStatus.appendChild(statusPill);

                    // Actions Cell
                    const tdActions = document.createElement('td');
                    const actionsDiv = document.createElement('div');
                    actionsDiv.className = 'table-actions';
                    const btnEdit = document.createElement('button');
                    btnEdit.className = 'btn-wireframe btn-edit-dept';
                    btnEdit.textContent = 'Edit';
                    btnEdit.setAttribute('data-id', newName.toLowerCase().replace(/\s+/g, '-'));
                    btnEdit.addEventListener('click', (ev) => {
                        ev.stopPropagation();
                        openDrawer(`Edit Department: ${newName}`, btnEdit.getAttribute('data-id'));
                    });
                    actionsDiv.appendChild(btnEdit);
                    tdActions.appendChild(actionsDiv);

                    newRow.appendChild(tdName);
                    newRow.appendChild(tdLead);
                    newRow.appendChild(tdParent);
                    newRow.appendChild(tdLocation);
                    newRow.appendChild(tdHeadcount);
                    newRow.appendChild(tdStatus);
                    newRow.appendChild(tdActions);

                    tbody.appendChild(newRow);
                }
            }

            closeDrawer();
        });
    }

    // 8. Search & Branch Filtering Logic
    const deptSearchInput = document.getElementById('deptSearchInput');
    const branchFilter = document.getElementById('branchFilter');

    if (deptSearchInput) {
        deptSearchInput.addEventListener('input', filterDepartments);
    }

    if (branchFilter) {
        branchFilter.addEventListener('change', filterDepartments);
    }

    function filterDepartments() {
        const query = deptSearchInput ? deptSearchInput.value.toLowerCase().trim() : '';
        const branch = branchFilter ? branchFilter.value : 'all';

        // Filter Tree Nodes
        document.querySelectorAll('.tree-node').forEach(node => {
            const text = node.textContent.toLowerCase();
            const matchQuery = !query || text.includes(query);

            if (matchQuery) {
                node.style.opacity = '1';
                node.style.borderStyle = 'solid';
            } else {
                node.style.opacity = '0.35';
                node.style.borderStyle = 'dashed';
            }
        });

        // Filter Table Rows
        document.querySelectorAll('#deptTableBody tr').forEach(row => {
            const text = row.textContent.toLowerCase();
            const matchQuery = !query || text.includes(query);

            if (matchQuery) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
});
