/**
 * Candidate Data Conversion Controller
 * Handles Candidate to Employee Profile Conversion Inline Modal Popup
 */
document.addEventListener('DOMContentLoaded', () => {
    const profileConversionModalOverlay = document.getElementById('profileConversionModalOverlay');
    const btnCloseConversionModal = document.getElementById('btnCloseConversionModal');
    const btnCancelConversionModal = document.getElementById('btnCancelConversionModal');
    const btnSubmitConversionModal = document.getElementById('btnSubmitConversionModal');

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
        if (profileConversionModalOverlay) profileConversionModalOverlay.classList.add('hidden');
    };

    const triggers = document.querySelectorAll('.btn-conversion-trigger');
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (profileConversionModalOverlay) profileConversionModalOverlay.classList.remove('hidden');
        });
    });

    if (btnCloseConversionModal) btnCloseConversionModal.addEventListener('click', closeModal);
    if (btnCancelConversionModal) btnCancelConversionModal.addEventListener('click', closeModal);

    if (profileConversionModalOverlay) {
        profileConversionModalOverlay.addEventListener('click', (e) => {
            if (e.target === profileConversionModalOverlay) closeModal();
        });
    }

    if (btnSubmitConversionModal) {
        btnSubmitConversionModal.addEventListener('click', () => {
            closeModal();
            showToast('Candidate successfully converted into official HR Employee Profile!');
        });
    }
});
