/**
 * IT Asset & SaaS Access Revocation Board Controller
 * Handles Revoke Access Modal & Autonomous Revocation Triggering
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnRevokeAccessHeader = document.getElementById('btnRevokeAccessHeader');
    const revokeAccessModalOverlay = document.getElementById('revokeAccessModalOverlay');
    const btnCloseRevokeModal = document.getElementById('btnCloseRevokeModal');
    const btnCancelRevokeModal = document.getElementById('btnCancelRevokeModal');
    const btnSubmitRevokeModal = document.getElementById('btnSubmitRevokeModal');

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

    const closeModal = () => {
        if (revokeAccessModalOverlay) revokeAccessModalOverlay.classList.add('hidden');
    };

    const triggers = [btnRevokeAccessHeader, ...document.querySelectorAll('.btn-revoke-trigger')].filter(Boolean);
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (revokeAccessModalOverlay) revokeAccessModalOverlay.classList.remove('hidden');
        });
    });

    if (btnCloseRevokeModal) btnCloseRevokeModal.addEventListener('click', closeModal);
    if (btnCancelRevokeModal) btnCancelRevokeModal.addEventListener('click', closeModal);

    if (revokeAccessModalOverlay) {
        revokeAccessModalOverlay.addEventListener('click', (e) => {
            if (e.target === revokeAccessModalOverlay) closeModal();
        });
    }

    if (btnSubmitRevokeModal) {
        btnSubmitRevokeModal.addEventListener('click', () => {
            closeModal();
            showToast('⚡ Access revocation executed! Outlook & Active Directory kill-switch completed.');
        });
    }
});
