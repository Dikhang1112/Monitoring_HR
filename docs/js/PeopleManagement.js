document.addEventListener('DOMContentLoaded', () => {
    // Helper function to create toast notifications safely without innerHTML
    function showToast(message) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';

        // Safe SVG parsing without innerHTML vulnerabilities
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

    // 1. Sidebar Navigation Click Handler (Only updates active UI highlight; preserves pageTitle)
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active state UI highlight on sidebar items
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // 2. Sidebar Bottom User Profile Popup Toggle
    const sidebarUserProfile = document.getElementById('sidebarUserProfile');
    const userPopup = document.getElementById('userPopup');

    if (sidebarUserProfile && userPopup) {
        sidebarUserProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userPopup.classList.toggle('hidden');
        });

        // Close popup when clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!userPopup.contains(e.target) && !sidebarUserProfile.contains(e.target)) {
                userPopup.classList.add('hidden');
            }
        });
    }

    // Popup Item Click Actions
    const btnUpdateVersion = document.getElementById('btnUpdateVersion');
    if (btnUpdateVersion) {
        btnUpdateVersion.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Checking for system updates... (Current Version v2.4.0)');
        });
    }

    const btnHelp = document.getElementById('btnHelp');
    if (btnHelp) {
        btnHelp.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Opening HR Enterprise Help & Support Center');
        });
    }

    const btnSignOut = document.getElementById('btnSignOut');
    if (btnSignOut) {
        btnSignOut.addEventListener('click', () => {
            if (userPopup) userPopup.classList.add('hidden');
            showToast('Signing out Lucia Doan...');
        });
    }

    // 3. Quick Action Buttons Event Listener
    const actionBtns = document.querySelectorAll('.btn-action');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const actionName = btn.getAttribute('data-action') || 'Action';
            showToast(`Triggered action: ${actionName}`);
        });
    });

    // 4. Module Buttons Event Listener
    const moduleBtns = document.querySelectorAll('.module-btn');
    moduleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const moduleName = btn.getAttribute('data-module') || 'Module';
            showToast(`Opening module: ${moduleName}`);
        });
    });

    // 5. Interactive Kanban Task Card Clicks (Move card forward on click demo)
    const kanbanCards = document.querySelectorAll('.kanban-card');
    kanbanCards.forEach(card => {
        card.addEventListener('click', () => {
            const parentCol = card.closest('.kanban-column');
            if (!parentCol) return;

            const cardText = card.querySelector('.card-text')?.textContent || 'Task';

            if (parentCol.id === 'col-todo') {
                document.getElementById('col-inprogress')?.appendChild(card);
                showToast(`Moved "${cardText}" to In Progress`);
            } else if (parentCol.id === 'col-inprogress') {
                document.getElementById('col-done')?.appendChild(card);
                showToast(`Completed task: "${cardText}"`);
            } else if (parentCol.id === 'col-done') {
                document.getElementById('col-todo')?.appendChild(card);
                showToast(`Reset task to To Do: "${cardText}"`);
            }
            updateKanbanCounts();
        });
    });

    // Recalculate count tags in Kanban column headers
    function updateKanbanCounts() {
        const cols = ['col-todo', 'col-inprogress', 'col-done'];
        cols.forEach(colId => {
            const col = document.getElementById(colId);
            if (col) {
                const countBadge = col.querySelector('.column-count');
                const cardCount = col.querySelectorAll('.kanban-card').length;
                if (countBadge) {
                    countBadge.textContent = cardCount.toString();
                }
            }
        });
    }

    // 6. Notifications & Profile clicks
    const notifBtn = document.getElementById('notifBtn');
    if (notifBtn) {
        notifBtn.addEventListener('click', () => {
            showToast('Notifications: 3 unread updates');
        });
    }

    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            showToast('Logged in as Lucia Doan (HR Admin)');
        });
    }

    // 7. Search Bar Event Listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                showToast(`Searching for: "${searchInput.value}"`);
            }
        });
    }
});
