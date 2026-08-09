document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Toast Notification Helper
    // -------------------------------------------------------------
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

    // -------------------------------------------------------------
    // 2. Comprehensive Employee Directory Dataset
    // -------------------------------------------------------------
    const employeesData = [
        {
            id: 'EMP-8021',
            initials: 'LD',
            name: 'Lucia Doan',
            role: 'HR Director',
            department: 'Human Resources',
            email: 'lucia.doan@hrplatform.com',
            phone: '+84 908 123 456',
            status: 'Active',
            joinDate: '15/01/2021',
            dob: '12/04/1992',
            gender: 'Female',
            nationalId: '079192004812',
            location: 'Headquarters (HCMC)',
            emergencyContact: 'Doan Van Hung (Father) - 0912 345 678',
            address: 'District 1, HCMC, Vietnam',
            bankName: 'Vietcombank (HCMC Branch)',
            bankAccount: '1019 4820 9182',
            contractType: 'Indefinite Permanent',
            contractStart: '15/01/2021',
            taxId: '8409182749',
            socialIns: 'SI-79104829',
            leaveBalance: '14 / 18 Days',
            sickBalance: '5 / 10 Days',
            punctuality: '98.5%',
            documents: [
                { name: 'Labor_Contract_LuciaDoan_2021.pdf', info: 'PDF • 2.4 MB • Signed on 15 Jan 2021' },
                { name: 'Non_Disclosure_Agreement_NDA.pdf', info: 'PDF • 1.1 MB • Signed on 15 Jan 2021' }
            ],
            assets: [
                { title: 'MacBook Pro 16" M2 Max', sub: 'Serial: C02GX011MD6M • Issued on 15 Jan 2021' },
                { title: 'Dell UltraSharp 27" 4K Monitor', sub: 'Serial: CN-05849-742 • Issued on 15 Jan 2021' }
            ]
        },
        {
            id: 'EMP-8022',
            initials: 'DN',
            name: 'Duy Nguyen',
            role: 'VP of Engineering',
            department: 'Engineering',
            email: 'duy.nguyen@hrplatform.com',
            phone: '+84 909 234 567',
            status: 'Active',
            joinDate: '01/03/2020',
            dob: '25/08/1988',
            gender: 'Male',
            nationalId: '079188002910',
            location: 'Headquarters (HCMC)',
            emergencyContact: 'Nguyen Thi Mai (Wife) - 0903 888 999',
            address: 'District 7, HCMC, Vietnam',
            bankName: 'Techcombank (Saigon Branch)',
            bankAccount: '1902 3849 1029',
            contractType: 'Indefinite Permanent',
            contractStart: '01/03/2020',
            taxId: '8392019482',
            socialIns: 'SI-79102948',
            leaveBalance: '10 / 18 Days',
            sickBalance: '8 / 10 Days',
            punctuality: '99.1%',
            documents: [
                { name: 'Executive_Contract_DuyNguyen.pdf', info: 'PDF • 3.1 MB • Signed on 01 Mar 2020' },
                { name: 'IP_Assignment_Agreement.pdf', info: 'PDF • 1.4 MB • Signed on 01 Mar 2020' }
            ],
            assets: [
                { title: 'MacBook Pro 16" M3 Max', sub: 'Serial: C02JX099KL11 • Issued on 10 Mar 2024' },
                { title: 'Apple Studio Display 27"', sub: 'Serial: AP-99201-382 • Issued on 10 Mar 2024' }
            ]
        },
        {
            id: 'EMP-8023',
            initials: 'PT',
            name: 'Pham Minh Tu',
            role: 'Senior Frontend Engineer',
            department: 'Engineering',
            email: 'tu.pham@hrplatform.com',
            phone: '+84 918 345 678',
            status: 'Active',
            joinDate: '10/11/2022',
            dob: '18/11/1995',
            gender: 'Male',
            nationalId: '079195009182',
            location: 'Hanoi Branch',
            emergencyContact: 'Pham Van Binh (Brother) - 0988 111 222',
            address: 'Cau Giay District, Hanoi, Vietnam',
            bankName: 'MB Bank (Hanoi HQ)',
            bankAccount: '0981 2938 4710',
            contractType: '2-Year Fixed Term',
            contractStart: '10/11/2022',
            taxId: '8401928374',
            socialIns: 'SI-79109384',
            leaveBalance: '8 / 14 Days',
            sickBalance: '7 / 10 Days',
            punctuality: '97.2%',
            documents: [
                { name: 'Labor_Contract_PhamMinhTu.pdf', info: 'PDF • 2.0 MB • Signed on 10 Nov 2022' }
            ],
            assets: [
                { title: 'MacBook Pro 14" M1 Pro', sub: 'Serial: C02FX044PQ99 • Issued on 10 Nov 2022' }
            ]
        },
        {
            id: 'EMP-8024',
            initials: 'TT',
            name: 'Tran Tuan',
            role: 'Head of Sales',
            department: 'Sales & Business Dev',
            email: 'tuan.tran@hrplatform.com',
            phone: '+84 938 456 789',
            status: 'On Leave',
            joinDate: '01/06/2021',
            dob: '05/02/1990',
            gender: 'Male',
            nationalId: '079190003819',
            location: 'Hanoi Branch',
            emergencyContact: 'Tran Thi Lan (Mother) - 0933 222 111',
            address: 'Ba Dinh District, Hanoi, Vietnam',
            bankName: 'ACB (Hanoi Branch)',
            bankAccount: '4810 2938 1029',
            contractType: 'Indefinite Permanent',
            contractStart: '01/06/2021',
            taxId: '8391029384',
            socialIns: 'SI-79103829',
            leaveBalance: '3 / 16 Days',
            sickBalance: '10 / 10 Days',
            punctuality: '96.0%',
            documents: [
                { name: 'Sales_Director_Agreement.pdf', info: 'PDF • 2.8 MB • Signed on 01 Jun 2021' }
            ],
            assets: [
                { title: 'Lenovo ThinkPad X1 Carbon', sub: 'Serial: LR-09182736 • Issued on 01 Jun 2021' }
            ]
        },
        {
            id: 'EMP-8025',
            initials: 'LM',
            name: 'Le Thi Mai',
            role: 'Lead UI/UX Designer',
            department: 'Product & Design',
            email: 'mai.le@hrplatform.com',
            phone: '+84 977 567 890',
            status: 'Active',
            joinDate: '15/04/2023',
            dob: '30/09/1994',
            gender: 'Female',
            nationalId: '079194008123',
            location: 'Headquarters (HCMC)',
            emergencyContact: 'Le Van Minh (Husband) - 0908 999 888',
            address: 'Binh Thanh District, HCMC, Vietnam',
            bankName: 'VPBank (HCMC HQ)',
            bankAccount: '1920 3847 1092',
            contractType: '2-Year Fixed Term',
            contractStart: '15/04/2023',
            taxId: '8491028374',
            socialIns: 'SI-79108273',
            leaveBalance: '11 / 14 Days',
            sickBalance: '9 / 10 Days',
            punctuality: '98.0%',
            documents: [
                { name: 'Design_Lead_Contract_LeMai.pdf', info: 'PDF • 2.2 MB • Signed on 15 Apr 2023' }
            ],
            assets: [
                { title: 'MacBook Pro 16" M2 Pro', sub: 'Serial: C02HX019MK88 • Issued on 15 Apr 2023' },
                { title: 'Wacom Intuos Pro Tablet', sub: 'Serial: WC-88291029 • Issued on 15 Apr 2023' }
            ]
        },
        {
            id: 'EMP-8026',
            initials: 'HN',
            name: 'Hoang Van Nam',
            role: 'Financial Analyst',
            department: 'Finance & Operations',
            email: 'nam.hoang@hrplatform.com',
            phone: '+84 966 678 901',
            status: 'Active',
            joinDate: '01/09/2023',
            dob: '14/07/1996',
            gender: 'Male',
            nationalId: '079196001928',
            location: 'Headquarters (HCMC)',
            emergencyContact: 'Hoang Thi Hoa (Sister) - 0977 444 333',
            address: 'District 3, HCMC, Vietnam',
            bankName: 'BIDV (Saigon Branch)',
            bankAccount: '3141 0293 8471',
            contractType: '2-Year Fixed Term',
            contractStart: '01/09/2023',
            taxId: '8401928475',
            socialIns: 'SI-79109284',
            leaveBalance: '12 / 14 Days',
            sickBalance: '10 / 10 Days',
            punctuality: '99.0%',
            documents: [
                { name: 'Finance_Analyst_Contract.pdf', info: 'PDF • 1.9 MB • Signed on 01 Sep 2023' }
            ],
            assets: [
                { title: 'Dell XPS 15 9530 Laptop', sub: 'Serial: DL-99201827 • Issued on 01 Sep 2023' }
            ]
        },
        {
            id: 'EMP-8027',
            initials: 'DA',
            name: 'Do Hoang Anh',
            role: 'Junior HR Specialist',
            department: 'Human Resources',
            email: 'hoanganh.do@hrplatform.com',
            phone: '+84 955 789 012',
            status: 'Probation',
            joinDate: '01/07/2026',
            dob: '22/01/2001',
            gender: 'Female',
            nationalId: '079201004918',
            location: 'Headquarters (HCMC)',
            emergencyContact: 'Do Van Tu (Father) - 0918 555 666',
            address: 'Thu Duc City, HCMC, Vietnam',
            bankName: 'VietinBank (Thu Duc Branch)',
            bankAccount: '1088 2938 4719',
            contractType: '2-Month Probation Contract',
            contractStart: '01/07/2026',
            taxId: '8501928374',
            socialIns: 'SI-79109988',
            leaveBalance: '2 / 2 Days',
            sickBalance: '3 / 3 Days',
            punctuality: '100.0%',
            documents: [
                { name: 'Probation_Agreement_DoHoangAnh.pdf', info: 'PDF • 1.5 MB • Signed on 01 Jul 2026' }
            ],
            assets: [
                { title: 'MacBook Air 13" M2', sub: 'Serial: C02KX019MA11 • Issued on 01 Jul 2026' }
            ]
        },
        {
            id: 'EMP-8028',
            initials: 'NA',
            name: 'Nguyen Van An',
            role: 'Product Manager',
            department: 'Product & Design',
            email: 'an.nguyen@hrplatform.com',
            phone: '+84 944 890 123',
            status: 'Active',
            joinDate: '15/02/2022',
            dob: '08/05/1991',
            gender: 'Male',
            nationalId: '079191003810',
            location: 'Da Nang Hub',
            emergencyContact: 'Nguyen Thi Ha (Wife) - 0905 123 789',
            address: 'Hai Chau District, Da Nang, Vietnam',
            bankName: 'Vietcombank (Da Nang Branch)',
            bankAccount: '0041 0003 9182',
            contractType: 'Indefinite Permanent',
            contractStart: '15/02/2022',
            taxId: '8391029481',
            socialIns: 'SI-79103948',
            leaveBalance: '7 / 16 Days',
            sickBalance: '8 / 10 Days',
            punctuality: '98.2%',
            documents: [
                { name: 'Product_Manager_Labor_Contract.pdf', info: 'PDF • 2.5 MB • Signed on 15 Feb 2022' }
            ],
            assets: [
                { title: 'MacBook Pro 14" M2 Pro', sub: 'Serial: C02GX088MK22 • Issued on 15 Feb 2022' }
            ]
        }
    ];

    // -------------------------------------------------------------
    // 3. Render Employee Directory Table
    // -------------------------------------------------------------
    const tableBody = document.getElementById('directoryTableBody');
    const paginationSummary = document.getElementById('paginationSummary');

    function renderDirectoryTable(data) {
        if (!tableBody) return;
        tableBody.innerHTML = '';

        if (data.length === 0) {
            const emptyTr = document.createElement('tr');
            emptyTr.innerHTML = `
                <td colspan="8" style="text-align: center; padding: 32px; color: var(--text-muted);">
                    No employee records match your search criteria.
                </td>
            `;
            tableBody.appendChild(emptyTr);
            if (paginationSummary) paginationSummary.textContent = 'Showing 0 employees';
            return;
        }

        data.forEach(emp => {
            const tr = document.createElement('tr');

            let statusClass = 'active';
            if (emp.status === 'On Leave') statusClass = 'on-leave';
            if (emp.status === 'Probation') statusClass = 'probation';

            tr.innerHTML = `
                <td><input type="checkbox" class="emp-checkbox" data-emp-id="${emp.id}"></td>
                <td><span style="font-weight: 700; font-family: monospace; font-size: 12px; color: var(--text-main);">${emp.id}</span></td>
                <td>
                    <div class="user-cell">
                        <div class="user-avatar-circle">${emp.initials}</div>
                        <div class="user-cell-meta">
                            <span class="user-cell-name">${emp.name}</span>
                            <span class="user-cell-role">${emp.role}</span>
                        </div>
                    </div>
                </td>
                <td><span style="font-weight: 500;">${emp.department}</span></td>
                <td>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 12.5px; font-weight: 500;">${emp.email}</span>
                        <span style="font-size: 11px; color: var(--text-muted);">${emp.phone}</span>
                    </div>
                </td>
                <td><span class="status-pill ${statusClass}">${emp.status}</span></td>
                <td><span style="font-size: 12px; color: var(--text-muted);">${emp.joinDate}</span></td>
                <td style="text-align: right;">
                    <button class="btn-wireframe btn-view-profile" data-emp-id="${emp.id}" style="padding: 5px 10px; font-size: 11.5px;">
                        View Profile
                    </button>
                </td>
            `;

            // Row click triggers slide-over Profile View Detail Drawer
            tr.addEventListener('click', (e) => {
                if (e.target.tagName === 'INPUT' || e.target.closest('.btn-view-profile')) return;
                openProfileDrawer(emp.id);
            });

            tableBody.appendChild(tr);
        });

        // Attach event listeners to View Profile buttons
        const viewBtns = tableBody.querySelectorAll('.btn-view-profile');
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const empId = btn.getAttribute('data-emp-id');
                openProfileDrawer(empId);
            });
        });

        if (paginationSummary) {
            paginationSummary.textContent = `Showing 1-${data.length} of 428 employees`;
        }
    }

    // Initial table render
    renderDirectoryTable(employeesData);

    // -------------------------------------------------------------
    // 4. Filtering & Searching Logic
    // -------------------------------------------------------------
    const dirSearchInput = document.getElementById('dirSearchInput');
    const deptFilterSelect = document.getElementById('deptFilterSelect');
    const statusFilterSelect = document.getElementById('statusFilterSelect');

    function applyDirectoryFilters() {
        const query = dirSearchInput ? dirSearchInput.value.toLowerCase().trim() : '';
        const selectedDept = deptFilterSelect ? deptFilterSelect.value : 'ALL';
        const selectedStatus = statusFilterSelect ? statusFilterSelect.value : 'ALL';

        const filtered = employeesData.filter(emp => {
            const matchesQuery = !query ||
                emp.name.toLowerCase().includes(query) ||
                emp.id.toLowerCase().includes(query) ||
                emp.role.toLowerCase().includes(query) ||
                emp.email.toLowerCase().includes(query);

            const matchesDept = (selectedDept === 'ALL') || (emp.department === selectedDept);
            const matchesStatus = (selectedStatus === 'ALL') || (emp.status === selectedStatus);

            return matchesQuery && matchesDept && matchesStatus;
        });

        renderDirectoryTable(filtered);
    }

    if (dirSearchInput) dirSearchInput.addEventListener('input', applyDirectoryFilters);
    if (deptFilterSelect) deptFilterSelect.addEventListener('change', applyDirectoryFilters);
    if (statusFilterSelect) statusFilterSelect.addEventListener('change', applyDirectoryFilters);

    // Select All Checkbox
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', () => {
            const checkboxes = document.querySelectorAll('.emp-checkbox');
            checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
        });
    }

    // -------------------------------------------------------------
    // 5. Slide-over Profile View Detail Drawer & Tab Switching
    // -------------------------------------------------------------
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const profileDetailDrawer = document.getElementById('profileDetailDrawer');
    const btnCloseDrawer = document.getElementById('btnCloseDrawer');
    const btnCloseDrawerFooter = document.getElementById('btnCloseDrawerFooter');

    function openProfileDrawer(empId) {
        const emp = employeesData.find(e => e.id === empId) || employeesData[0];

        // Header Elements
        const drawerAvatar = document.getElementById('drawerAvatar');
        const drawerUserName = document.getElementById('drawerUserName');
        const drawerUserRoleDept = document.getElementById('drawerUserRoleDept');

        if (drawerAvatar) drawerAvatar.textContent = emp.initials;
        if (drawerUserName) {
            drawerUserName.innerHTML = `
                ${emp.name} 
                <span class="status-pill ${emp.status === 'Active' ? 'active' : (emp.status === 'On Leave' ? 'on-leave' : 'probation')}">${emp.status}</span>
            `;
        }
        if (drawerUserRoleDept) {
            drawerUserRoleDept.textContent = `${emp.role} • ${emp.department} (${emp.id})`;
        }

        // Pane 1: Overview & Personal Info
        document.getElementById('valFullName').textContent = emp.name;
        document.getElementById('valEmpId').textContent = emp.id;
        document.getElementById('valDob').textContent = emp.dob;
        document.getElementById('valGender').textContent = emp.gender;
        document.getElementById('valNatId').textContent = emp.nationalId;
        document.getElementById('valLocation').textContent = emp.location;
        document.getElementById('valWorkEmail').textContent = emp.email;
        document.getElementById('valPhone').textContent = emp.phone;
        document.getElementById('valEmergContact').textContent = emp.emergencyContact;
        document.getElementById('valAddress').textContent = emp.address;
        document.getElementById('valBankName').textContent = emp.bankName;
        document.getElementById('valBankAcc').textContent = emp.bankAccount;

        // Pane 2: Contract & Document
        document.getElementById('valContractType').textContent = emp.contractType;
        document.getElementById('valContractStart').textContent = emp.contractStart;
        document.getElementById('valTaxId').textContent = emp.taxId;
        document.getElementById('valSocialIns').textContent = emp.socialIns;

        const drawerDocList = document.getElementById('drawerDocList');
        if (drawerDocList && emp.documents) {
            drawerDocList.innerHTML = '';
            emp.documents.forEach(doc => {
                const docDiv = document.createElement('div');
                docDiv.className = 'doc-item';
                docDiv.innerHTML = `
                    <div class="doc-meta">
                        <div class="doc-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                        <div class="doc-details">
                            <span class="doc-name">${doc.name}</span>
                            <span class="doc-size">${doc.info}</span>
                        </div>
                    </div>
                    <button class="btn-wireframe" style="padding: 4px 10px; font-size: 11px;">View PDF</button>
                `;
                drawerDocList.appendChild(docDiv);
            });
        }

        // Pane 3: Time, Leave & Attendance
        document.getElementById('valLeaveBalance').textContent = emp.leaveBalance;
        document.getElementById('valSickBalance').textContent = emp.sickBalance;

        // Pane 4: Asset & Equipment
        const drawerAssetList = document.getElementById('drawerAssetList');
        if (drawerAssetList && emp.assets) {
            drawerAssetList.innerHTML = '';
            emp.assets.forEach(asset => {
                const assetDiv = document.createElement('div');
                assetDiv.className = 'asset-item';
                assetDiv.innerHTML = `
                    <div class="asset-meta">
                        <div class="asset-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
                        <div class="asset-details">
                            <span class="asset-title">${asset.title}</span>
                            <span class="asset-sub">${asset.sub}</span>
                        </div>
                    </div>
                    <span class="status-pill active">In Use</span>
                `;
                drawerAssetList.appendChild(assetDiv);
            });
        }

        // Reset to first tab (Overview)
        switchDrawerTab('overview');

        // Show drawer
        if (drawerBackdrop) drawerBackdrop.classList.remove('hidden');
        if (profileDetailDrawer) profileDetailDrawer.classList.remove('hidden');
    }

    function closeProfileDrawer() {
        if (drawerBackdrop) drawerBackdrop.classList.add('hidden');
        if (profileDetailDrawer) profileDetailDrawer.classList.add('hidden');
    }

    if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeProfileDrawer);
    if (btnCloseDrawerFooter) btnCloseDrawerFooter.addEventListener('click', closeProfileDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeProfileDrawer);

    // Tab Switching Logic inside Profile Detail Drawer
    const drawerTabs = document.querySelectorAll('.drawer-tab');
    const drawerPanes = document.querySelectorAll('.drawer-pane');

    function switchDrawerTab(tabTarget) {
        drawerTabs.forEach(t => {
            if (t.getAttribute('data-tab') === tabTarget) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        drawerPanes.forEach(pane => {
            if (pane.id === `pane-${tabTarget}`) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
    }

    drawerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            switchDrawerTab(target);
        });
    });

    // Edit Profile Button Action inside Drawer
    const btnEditProfile = document.getElementById('btnEditProfile');
    if (btnEditProfile) {
        btnEditProfile.addEventListener('click', () => {
            showToast('Opening profile editor modal for selected employee...');
        });
    }

    // -------------------------------------------------------------
    // 6. Sidebar Navigation & Accordion Toggle
    // -------------------------------------------------------------
    const peopleMenuToggle = document.getElementById('peopleMenuToggle');
    const peopleSubmenu = document.getElementById('peopleSubmenu');

    if (peopleMenuToggle && peopleSubmenu) {
        peopleMenuToggle.addEventListener('click', () => {
            peopleMenuToggle.classList.toggle('collapsed');
            peopleSubmenu.classList.toggle('hidden');
        });
    }

    // Sidebar User Popup Menu
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
            showToast('Checking for updates... (Current Version v2.4.0)');
        });
    }

    const btnHelp = document.getElementById('btnHelp');
    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Opening HR Platform Help Center');
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

    // -------------------------------------------------------------
    // 7. Toolbar & Quick Action Buttons
    // -------------------------------------------------------------
    const btnExportCsv = document.getElementById('btnExportCsv');
    if (btnExportCsv) {
        btnExportCsv.addEventListener('click', () => {
            showToast('Exporting Employee Directory dataset to CSV file...');
        });
    }

    const btnAddEmployee = document.getElementById('btnAddEmployee');
    if (btnAddEmployee) {
        btnAddEmployee.addEventListener('click', () => {
            showToast('Opening New Employee Onboarding / Profile Form Modal...');
        });
    }

    const actionBtns = document.querySelectorAll('.btn-action');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const actionName = btn.getAttribute('data-action') || 'Action';
            if (actionName === 'Org Structure') {
                window.location.href = 'OrgDepartment.html';
            } else {
                showToast(`Triggered action: ${actionName}`);
            }
        });
    });

    const notifBtn = document.getElementById('notifBtn');
    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            showToast('Notifications: 3 unread updates');
        });
    }

    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            showToast('Logged in as Lucia Doan (HR Director)');
        });
    }
});
