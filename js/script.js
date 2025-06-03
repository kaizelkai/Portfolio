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


// Menu déroulant mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = menuToggle.querySelector('i');
    if (menuToggle && navMenu && menuIcon) {
        menuToggle.addEventListener('click', (e) => {
            navMenu.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
            e.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
        });

        // Ferme le menu si on clique en dehors
        document.addEventListener('click', (e) => {
            if (
                navMenu.classList.contains('active') &&
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navMenu.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
            }
        });
    }
});

// Menu actif selon la section visible
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav-menu li a');

    function activateMenuOnScroll() {
        let scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 80; // Ajuste selon la hauteur du header
            const sectionId = section.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateMenuOnScroll);
    activateMenuOnScroll(); // Pour l'état initial
});