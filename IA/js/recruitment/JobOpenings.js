/**
 * Job Openings & Requisitions Interactive Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnCreateJob = document.getElementById('btnCreateJob');
    const btnExportCSV = document.getElementById('btnExportCSV');
    const jobSearchInput = document.getElementById('jobSearchInput');
    const deptFilter = document.getElementById('deptFilter');
    const statusFilter = document.getElementById('statusFilter');

    function showToast(msg) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>${msg}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    }

    if (btnCreateJob) {
        btnCreateJob.addEventListener('click', () => {
            window.location.href = 'detail/JobRequisitionModal.html';
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
