/**
 * Candidate Pipeline Kanban Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnAddCandidate = document.getElementById('btnAddCandidate');
    const reqSelect = document.getElementById('reqSelect');

    function showToast(msg) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>${msg}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    }

    if (btnAddCandidate) {
        btnAddCandidate.addEventListener('click', () => {
            showToast('Opening candidate sourcing and manual creation form...');
        });
    }

    if (reqSelect) {
        reqSelect.addEventListener('change', () => {
            showToast(`Pipeline updated for: ${reqSelect.options[reqSelect.selectedIndex].text}`);
        });
    }
});
