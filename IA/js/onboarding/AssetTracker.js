/**
 * Asset & License Tracker Controller
 * Handles Manage SaaS Modal Inline PopUp, Add/Remove Products & Seat Management
 */
document.addEventListener('DOMContentLoaded', () => {
    const manageSaaSModalOverlay = document.getElementById('manageSaaSModalOverlay');
    const btnCloseSaaSModal = document.getElementById('btnCloseSaaSModal');
    const btnCancelSaaSModal = document.getElementById('btnCancelSaaSModal');
    const btnSaveSaaSModal = document.getElementById('btnSaveSaaSModal');
    const btnAddSaaSProduct = document.getElementById('btnAddSaaSProduct');
    const saasTableBody = document.getElementById('saasTableBody');

    function showToast(msg) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.cssText = 'background:#09090b; color:#ffffff; padding:10px 16px; border-radius:8px; font-size:13px; font-weight:600; display:flex; align-items:center; gap:8px; box-shadow:0 4px 12px rgba(0,0,0,0.15); margin-top:8px;';
        toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>${msg}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    }

    // Bind all "Manage" buttons to open inline SaaS Modal
    const manageButtons = document.querySelectorAll('.btn-manage-saas');
    manageButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (manageSaaSModalOverlay) {
                manageSaaSModalOverlay.classList.remove('hidden');
            }
        });
    });

    // Close Modal helper
    const closeSaaSModal = () => {
        if (manageSaaSModalOverlay) {
            manageSaaSModalOverlay.classList.add('hidden');
        }
    };

    if (btnCloseSaaSModal) btnCloseSaaSModal.addEventListener('click', closeSaaSModal);
    if (btnCancelSaaSModal) btnCancelSaaSModal.addEventListener('click', closeSaaSModal);

    if (manageSaaSModalOverlay) {
        manageSaaSModalOverlay.addEventListener('click', (e) => {
            if (e.target === manageSaaSModalOverlay) {
                closeSaaSModal();
            }
        });
    }

    // Add New SaaS Product dynamically
    if (btnAddSaaSProduct) {
        btnAddSaaSProduct.addEventListener('click', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('newSaaSName');
            const tierInput = document.getElementById('newSaaSTier');
            const seatsInput = document.getElementById('newSaaSSeats');

            const nameVal = nameInput ? nameInput.value.trim() : '';
            const tierVal = tierInput ? tierInput.value.trim() : '';
            const seatsVal = seatsInput ? seatsInput.value.trim() : '';

            if (!nameVal) {
                showToast('Please enter SaaS product name!');
                return;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="padding: 12px 14px; border-bottom: 1px solid var(--border-color);">
                    <div style="font-weight:600;">${nameVal}</div>
                    <div style="font-size:11.5px; color:var(--text-muted);">Company Integration</div>
                </td>
                <td style="padding: 12px 14px; border-bottom: 1px solid var(--border-color);">${tierVal || 'Enterprise Plan'}</td>
                <td style="padding: 12px 14px; border-bottom: 1px solid var(--border-color);"><span style="font-weight:700;">${seatsVal || '50'} Seats</span></td>
                <td style="padding: 12px 14px; border-bottom: 1px solid var(--border-color);"><button class="btn-remove-row" style="padding: 5px 10px; border-radius: 6px; border: 1px solid #fecaca; background: #fef2f2; font-size: 11.5px; font-weight: 600; cursor: pointer; color: #dc2626;">🗑️ Remove</button></td>
            `;

            if (saasTableBody) saasTableBody.appendChild(tr);

            if (nameInput) nameInput.value = '';
            if (tierInput) tierInput.value = '';
            if (seatsInput) seatsInput.value = '';

            showToast(`Added "${nameVal}" to company SaaS licenses!`);
        });
    }

    // Remove SaaS Product dynamically (Event Delegation)
    if (saasTableBody) {
        saasTableBody.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-remove-row')) {
                const row = e.target.closest('tr');
                if (row) {
                    row.remove();
                    showToast('Removed SaaS product license subscription.');
                }
            }
        });
    }

    if (btnSaveSaaSModal) {
        btnSaveSaaSModal.addEventListener('click', () => {
            closeSaaSModal();
            showToast('Saved Enterprise SaaS License Configuration!');
        });
    }
});
