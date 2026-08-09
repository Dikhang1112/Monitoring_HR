/**
 * Interview & Offer Management Controller
 * Handles Inline Schedule Interview & Send Offer Modals
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnScheduleHeader = document.getElementById('btnScheduleHeader');
    const btnSendOfferHeader = document.getElementById('btnSendOfferHeader');

    const scheduleInterviewModalOverlay = document.getElementById('scheduleInterviewModalOverlay');
    const btnCloseScheduleModal = document.getElementById('btnCloseScheduleModal');
    const btnCancelSchedule = document.getElementById('btnCancelSchedule');
    const btnSubmitSchedule = document.getElementById('btnSubmitSchedule');

    const sendOfferModalOverlay = document.getElementById('sendOfferModalOverlay');
    const btnCloseOfferModal = document.getElementById('btnCloseOfferModal');
    const btnCancelOffer = document.getElementById('btnCancelOffer');
    const btnSubmitOffer = document.getElementById('btnSubmitOffer');

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
        if (scheduleInterviewModalOverlay) scheduleInterviewModalOverlay.classList.add('hidden');
        if (sendOfferModalOverlay) sendOfferModalOverlay.classList.add('hidden');
    };

    // Open Schedule Interview Modal
    const scheduleTriggers = [btnScheduleHeader, ...document.querySelectorAll('.btn-schedule-inline')].filter(Boolean);
    scheduleTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (scheduleInterviewModalOverlay) scheduleInterviewModalOverlay.classList.remove('hidden');
        });
    });

    // Open Send Offer Modal
    const offerTriggers = [btnSendOfferHeader, ...document.querySelectorAll('.btn-offer-inline')].filter(Boolean);
    offerTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (sendOfferModalOverlay) sendOfferModalOverlay.classList.remove('hidden');
        });
    });

    if (btnCloseScheduleModal) btnCloseScheduleModal.addEventListener('click', closeModal);
    if (btnCancelSchedule) btnCancelSchedule.addEventListener('click', closeModal);
    if (btnCloseOfferModal) btnCloseOfferModal.addEventListener('click', closeModal);
    if (btnCancelOffer) btnCancelOffer.addEventListener('click', closeModal);

    if (scheduleInterviewModalOverlay) {
        scheduleInterviewModalOverlay.addEventListener('click', (e) => {
            if (e.target === scheduleInterviewModalOverlay) closeModal();
        });
    }

    if (sendOfferModalOverlay) {
        sendOfferModalOverlay.addEventListener('click', (e) => {
            if (e.target === sendOfferModalOverlay) closeModal();
        });
    }

    if (btnSubmitSchedule) {
        btnSubmitSchedule.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
            showToast('Google Calendar invite dispatched to candidate and panel successfully!');
        });
    }

    if (btnSubmitOffer) {
        btnSubmitOffer.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
            showToast('Digital offer letter dispatched via E-Signature portal!');
        });
    }
});
