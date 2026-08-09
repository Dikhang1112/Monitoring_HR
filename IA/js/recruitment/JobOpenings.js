/**
 * Job Openings & Requisitions Interactive Controller
 * Handles Inline Job Requisition Modal Popup and Table Actions
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnCreateJob = document.getElementById('btnCreateJob');
    const jobReqModalOverlay = document.getElementById('jobReqModalOverlay');
    const btnCloseJobReqModal = document.getElementById('btnCloseJobReqModal');
    const btnCancelJobReq = document.getElementById('btnCancelJobReq');
    const btnSubmitJobReq = document.getElementById('btnSubmitJobReq');
    const btnExportCSV = document.getElementById('btnExportCSV');
    const jobSearchInput = document.getElementById('jobSearchInput');
    const deptFilter = document.getElementById('deptFilter');
    const statusFilter = document.getElementById('statusFilter');

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

    // Open Job Requisition Modal inline
    if (btnCreateJob && jobReqModalOverlay) {
        btnCreateJob.addEventListener('click', () => {
            jobReqModalOverlay.classList.remove('hidden');
        });
    }

    // Close Modal helper
    const closeJobReqModal = () => {
        if (jobReqModalOverlay) {
            jobReqModalOverlay.classList.add('hidden');
        }
    };

    if (btnCloseJobReqModal) btnCloseJobReqModal.addEventListener('click', closeJobReqModal);
    if (btnCancelJobReq) btnCancelJobReq.addEventListener('click', closeJobReqModal);

    if (jobReqModalOverlay) {
        jobReqModalOverlay.addEventListener('click', (e) => {
            if (e.target === jobReqModalOverlay) {
                closeJobReqModal();
            }
        });
    }

    if (btnSubmitJobReq) {
        btnSubmitJobReq.addEventListener('click', (e) => {
            e.preventDefault();
            const titleInput = document.getElementById('reqTitleInput');
            const titleVal = titleInput ? titleInput.value : 'Job Requisition';
            closeJobReqModal();
            showToast(`Job Requisition "${titleVal}" submitted for approval successfully!`);
        });
    }

    if (btnExportCSV) {
        btnExportCSV.addEventListener('click', () => {
            showToast('Job requisitions dataset exported to CSV format successfully.');
        });
    }

    if (jobSearchInput) {
        jobSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.job-table tbody tr');
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(query) ? '' : 'none';
            });
        });
    }

    if (deptFilter) {
        deptFilter.addEventListener('change', () => {
            showToast(`Filter applied: ${deptFilter.options[deptFilter.selectedIndex].text}`);
        });
    }

    if (statusFilter) {
        statusFilter.addEventListener('change', () => {
            showToast(`Status filter applied: ${statusFilter.options[statusFilter.selectedIndex].text}`);
        });
    }
});
