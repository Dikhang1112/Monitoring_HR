/**
 * Offboarding Requests Master Controller
 * Handles Initiate Offboarding Modal, Clearance Drawer, and Final Settlement Modal
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnInitiateOffboard = document.getElementById('btnInitiateOffboard');
    const initiateOffboardingModalOverlay = document.getElementById('initiateOffboardingModalOverlay');
    const btnCloseInitiateModal = document.getElementById('btnCloseInitiateModal');
    const btnCancelInitiateModal = document.getElementById('btnCancelInitiateModal');
    const btnSubmitInitiateModal = document.getElementById('btnSubmitInitiateModal');

    const exitClearanceDrawerOverlay = document.getElementById('exitClearanceDrawerOverlay');
    const btnCloseClearanceDrawer = document.getElementById('btnCloseClearanceDrawer');
    const btnCancelClearanceDrawer = document.getElementById('btnCancelClearanceDrawer');
    const btnSaveClearanceDrawer = document.getElementById('btnSaveClearanceDrawer');

    const finalSettlementModalOverlay = document.getElementById('finalSettlementModalOverlay');
    const btnCloseSettlementModal = document.getElementById('btnCloseSettlementModal');
    const btnCancelSettlementModal = document.getElementById('btnCancelSettlementModal');
    const btnSubmitSettlementModal = document.getElementById('btnSubmitSettlementModal');

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
        if (initiateOffboardingModalOverlay) initiateOffboardingModalOverlay.classList.add('hidden');
        if (exitClearanceDrawerOverlay) exitClearanceDrawerOverlay.classList.add('hidden');
        if (finalSettlementModalOverlay) finalSettlementModalOverlay.classList.add('hidden');
    };

    // Open Initiate Modal
    if (btnInitiateOffboard && initiateOffboardingModalOverlay) {
        btnInitiateOffboard.addEventListener('click', () => {
            initiateOffboardingModalOverlay.classList.remove('hidden');
        });
    }

    // Open Clearance Drawer
    const clearanceTriggers = document.querySelectorAll('.btn-clearance-trigger');
    clearanceTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (exitClearanceDrawerOverlay) exitClearanceDrawerOverlay.classList.remove('hidden');
        });
    });

    // Open Final Settlement Modal
    const settlementTriggers = document.querySelectorAll('.btn-settlement-trigger');
    settlementTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (finalSettlementModalOverlay) finalSettlementModalOverlay.classList.remove('hidden');
        });
    });

    if (btnCloseInitiateModal) btnCloseInitiateModal.addEventListener('click', closeModal);
    if (btnCancelInitiateModal) btnCancelInitiateModal.addEventListener('click', closeModal);
    if (btnCloseClearanceDrawer) btnCloseClearanceDrawer.addEventListener('click', closeModal);
    if (btnCancelClearanceDrawer) btnCancelClearanceDrawer.addEventListener('click', closeModal);
    if (btnCloseSettlementModal) btnCloseSettlementModal.addEventListener('click', closeModal);
    if (btnCancelSettlementModal) btnCancelSettlementModal.addEventListener('click', closeModal);

    if (initiateOffboardingModalOverlay) {
        initiateOffboardingModalOverlay.addEventListener('click', (e) => {
            if (e.target === initiateOffboardingModalOverlay) closeModal();
        });
    }

    if (exitClearanceDrawerOverlay) {
        exitClearanceDrawerOverlay.addEventListener('click', (e) => {
            if (e.target === exitClearanceDrawerOverlay) closeModal();
        });
    }

    if (finalSettlementModalOverlay) {
        finalSettlementModalOverlay.addEventListener('click', (e) => {
            if (e.target === finalSettlementModalOverlay) closeModal();
        });
    }

    if (btnSubmitInitiateModal) {
        btnSubmitInitiateModal.addEventListener('click', () => {
            closeModal();
            showToast('📧 Offboarding Proposal submitted! Autonomous Outlook notification dispatched.');
        });
    }

    if (btnSaveClearanceDrawer) {
        btnSaveClearanceDrawer.addEventListener('click', () => {
            closeModal();
            showToast('Exit clearance items signed off successfully!');
        });
    }

    if (btnSubmitSettlementModal) {
        btnSubmitSettlementModal.addEventListener('click', () => {
            closeModal();
            showToast('📧 Final settlement approved! Payslip PDF emailed via Outlook.');
        });
    }
});
