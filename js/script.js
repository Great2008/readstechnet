document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelector('.nav-links');

  // Theme Toggle Functionality
  if (themeToggle) { // Check if element exists before adding listener
    themeToggle.addEventListener('click', () => {
      document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      // Optionally save the preference to localStorage
      localStorage.setItem('theme', document.documentElement.dataset.theme);
    });
  }

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }

  // Mobile Menu Toggle Functionality
  if (mobileMenu && navLinks) { // Check if elements exist
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked (optional but good UX)
  if (navLinks) { // Check if navLinks exist
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenu.classList.remove('active');
        }
      });
    });
  }
});
