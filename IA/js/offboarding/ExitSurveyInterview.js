/**
 * Exit Survey & Turnover Analytics Controller
 * Handles Autonomous Outlook Survey Dispatching & Exit Interview Modal
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnDispatchOutlookSurvey = document.getElementById('btnDispatchOutlookSurvey');
    const conductExitInterviewModalOverlay = document.getElementById('conductExitInterviewModalOverlay');
    const btnCloseSurveyModal = document.getElementById('btnCloseSurveyModal');
    const btnCancelSurveyModal = document.getElementById('btnCancelSurveyModal');
    const btnSubmitSurveyModal = document.getElementById('btnSubmitSurveyModal');

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
        if (conductExitInterviewModalOverlay) conductExitInterviewModalOverlay.classList.add('hidden');
    };

    if (btnDispatchOutlookSurvey) {
        btnDispatchOutlookSurvey.addEventListener('click', () => {
            showToast('📧 Autonomous Outlook Survey invitation link dispatched to offboarding employee!');
        });
    }

    const triggers = document.querySelectorAll('.btn-survey-trigger');
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (conductExitInterviewModalOverlay) conductExitInterviewModalOverlay.classList.remove('hidden');
        });
    });

    if (btnCloseSurveyModal) btnCloseSurveyModal.addEventListener('click', closeModal);
    if (btnCancelSurveyModal) btnCancelSurveyModal.addEventListener('click', closeModal);

    if (conductExitInterviewModalOverlay) {
        conductExitInterviewModalOverlay.addEventListener('click', (e) => {
            if (e.target === conductExitInterviewModalOverlay) closeModal();
        });
    }

    if (btnSubmitSurveyModal) {
        btnSubmitSurveyModal.addEventListener('click', () => {
            closeModal();
            showToast('Saved Exit Interview record & updated turnover analytics!');
        });
    }
});
