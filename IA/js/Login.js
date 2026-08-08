document.addEventListener('DOMContentLoaded', () => {
    // Helper function for toast notifications safely without innerHTML
    function showToast(message) {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(
            '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
            'image/svg+xml'
        );
        const icon = svgDoc.documentElement;

        const textNode = document.createElement('span');
        textNode.textContent = message;

        toast.appendChild(icon);
        toast.appendChild(textNode);
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                if (toastContainer.contains(toast)) {
                    toastContainer.removeChild(toast);
                }
            }, 300);
        }, 2500);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('emailInput')?.value;

            if (!email || email.trim() === '') {
                showToast('Please enter your email or username');
                return;
            }

            showToast('Signing in as Lucia Doan (HR Manager)...');

            setTimeout(() => {
                window.location.href = 'Home.html';
            }, 1000);
        });
    }

    const btnSso = document.getElementById('btnSso');
    if (btnSso) {
        btnSso.addEventListener('click', () => {
            showToast('Authenticating via Corporate SSO (Azure AD)...');
            setTimeout(() => {
                window.location.href = 'Home.html';
            }, 1000);
        });
    }

    const forgotPassword = document.getElementById('forgotPassword');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Password reset link sent to lucia.doan@company.com');
        });
    }
});
