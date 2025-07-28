document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement; // This refers to the <html> tag

    // Function to set theme based on user preference or stored value
    function setInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            themeToggle.checked = (savedTheme === 'dark'); // Set checkbox state
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Check if user prefers dark mode system-wide
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.checked = true;
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggle.checked = false;
        }
    }

    // Toggle theme on click
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                htmlElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Initialize theme when page loads
    setInitialTheme();


    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuButton.classList.toggle('active'); // Animate hamburger
        });

        // Close menu if a link is clicked (optional, but good for UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuButton.classList.remove('active');
            });
        });
    }
});
