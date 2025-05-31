document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-icon'); // Get the icon element
    const body = document.body;
    const currentTheme = localStorage.getItem('theme'); // Get theme from local storage

    // Apply saved theme on load
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        } else {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        }
    } else {
        // Default to dark mode if no theme is saved (as per your initial design)
        body.classList.add('dark-mode');
        themeToggle.classList.add('fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            // Switch to light mode
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
            localStorage.setItem('theme', 'light-mode'); // Save preference
        } else {
            // Switch to dark mode
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark-mode'); // Save preference
        }
    });
});