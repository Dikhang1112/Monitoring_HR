/**
 * New Hire Onboarding Controller
 * Handles Inline Onboarding Checklist Drawer & Template Modal Popups
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnCreateTemplate = document.getElementById('btnCreateTemplate');

    const onboardingChecklistDrawerOverlay = document.getElementById('onboardingChecklistDrawerOverlay');
    const btnCloseChecklistDrawer = document.getElementById('btnCloseChecklistDrawer');
    const btnCancelChecklistDrawer = document.getElementById('btnCancelChecklistDrawer');
    const btnSignOffTasks = document.getElementById('btnSignOffTasks');

    const onboardingTemplateModalOverlay = document.getElementById('onboardingTemplateModalOverlay');
    const btnCloseTemplateModal = document.getElementById('btnCloseTemplateModal');
    const btnCancelTemplateModal = document.getElementById('btnCancelTemplateModal');
    const btnSaveTemplateModal = document.getElementById('btnSaveTemplateModal');

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
        if (onboardingChecklistDrawerOverlay) onboardingChecklistDrawerOverlay.classList.add('hidden');
        if (onboardingTemplateModalOverlay) onboardingTemplateModalOverlay.classList.add('hidden');
    };

    // Bind Checklist Triggers
    const checklistTriggers = document.querySelectorAll('.btn-checklist-trigger');
    checklistTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (onboardingChecklistDrawerOverlay) onboardingChecklistDrawerOverlay.classList.remove('hidden');
        });
    });

    // Bind Create Template Modal Trigger
    if (btnCreateTemplate && onboardingTemplateModalOverlay) {
        btnCreateTemplate.addEventListener('click', (e) => {
            e.preventDefault();
            onboardingTemplateModalOverlay.classList.remove('hidden');
        });
    }

    if (btnCloseChecklistDrawer) btnCloseChecklistDrawer.addEventListener('click', closeModal);
    if (btnCancelChecklistDrawer) btnCancelChecklistDrawer.addEventListener('click', closeModal);
    if (btnCloseTemplateModal) btnCloseTemplateModal.addEventListener('click', closeModal);
    if (btnCancelTemplateModal) btnCancelTemplateModal.addEventListener('click', closeModal);

    if (onboardingChecklistDrawerOverlay) {
        onboardingChecklistDrawerOverlay.addEventListener('click', (e) => {
            if (e.target === onboardingChecklistDrawerOverlay) closeModal();
        });
    }

    if (onboardingTemplateModalOverlay) {
        onboardingTemplateModalOverlay.addEventListener('click', (e) => {
            if (e.target === onboardingTemplateModalOverlay) closeModal();
        });
    }

    if (btnSignOffTasks) {
        btnSignOffTasks.addEventListener('click', () => {
            closeModal();
            showToast('Onboarding tasks signed off successfully!');
        });
    }

    if (btnSaveTemplateModal) {
        btnSaveTemplateModal.addEventListener('click', () => {
            closeModal();
            showToast('Saved Onboarding Plan Template successfully!');
        });
    }
});
