/**
 * Candidate Pipeline Kanban Controller
 * Handles Candidate Modal Opening, AI Resume Upload & Manual Editing
 */
document.addEventListener('DOMContentLoaded', () => {
    const btnAddCandidate = document.getElementById('btnAddCandidate');
    const addCandidateModalOverlay = document.getElementById('addCandidateModalOverlay');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnCancelModal = document.getElementById('btnCancelModal');
    const btnSubmitCandidate = document.getElementById('btnSubmitCandidate');
    const btnSampleCv = document.getElementById('btnSampleCv');
    const reqSelect = document.getElementById('reqSelect');

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

    // Open Add Candidate Modal
    if (btnAddCandidate && addCandidateModalOverlay) {
        btnAddCandidate.addEventListener('click', () => {
            addCandidateModalOverlay.classList.remove('hidden');
        });
    }

    // Close Modal helper
    const closeModal = () => {
        if (addCandidateModalOverlay) {
            addCandidateModalOverlay.classList.add('hidden');
        }
    };

    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnCancelModal) btnCancelModal.addEventListener('click', closeModal);

    // Close on backdrop click
    if (addCandidateModalOverlay) {
        addCandidateModalOverlay.addEventListener('click', (e) => {
            if (e.target === addCandidateModalOverlay) {
                closeModal();
            }
        });
    }

    // Auto-fill Sample CV Action
    if (btnSampleCv) {
        btnSampleCv.addEventListener('click', () => {
            showToast('Parsing Alexander_Wright_Resume.pdf with AI engine...');
            setTimeout(() => {
                const nameInput = document.getElementById('candName');
                if (nameInput) nameInput.value = 'Alexander Wright';
                showToast('✨ CV Parsed! Extracted contact info, skills & experience.');
            }, 600);
        });
    }

    // Submit Candidate Form
    if (btnSubmitCandidate) {
        btnSubmitCandidate.addEventListener('click', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('candName');
            const candName = nameInput ? nameInput.value : 'New Candidate';
            closeModal();
            showToast(`Candidate "${candName}" saved to pipeline successfully!`);
        });
    }

    if (reqSelect) {
        reqSelect.addEventListener('change', () => {
            showToast(`Pipeline updated for: ${reqSelect.options[reqSelect.selectedIndex].text}`);
        });
    }
});
