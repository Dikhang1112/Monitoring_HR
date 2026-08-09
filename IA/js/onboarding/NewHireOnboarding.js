/**
 * New Hire Onboarding Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnCreateTemplate = document.getElementById('btnCreateTemplate');

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

    if (btnCreateTemplate) {
        btnCreateTemplate.addEventListener('click', () => {
            window.location.href = 'detail/OnboardingTemplateModal.html';
        });
    }
});
