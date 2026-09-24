// Global Theme and Dropdown Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle Logic ---
    const htmlElement = document.documentElement;
    const THEME_STORAGE_KEY = 'enterprise_os_theme';

    // Initialize Theme
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        if (savedTheme === 'light') {
            htmlElement.classList.remove('dark');
        } else {
            htmlElement.classList.add('dark');
        }
    } else {
        // Default to light CAD studio
        htmlElement.classList.remove('dark');
        localStorage.setItem(THEME_STORAGE_KEY, 'light');
    }

    // Function to set theme
    window.setTheme = (theme) => {
        if (theme === 'light') {
            htmlElement.classList.remove('dark');
            localStorage.setItem(THEME_STORAGE_KEY, 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem(THEME_STORAGE_KEY, 'dark');
        }
    };

    window.toggleTheme = () => {
        if (htmlElement.classList.contains('dark')) {
            window.setTheme('light');
        } else {
            window.setTheme('dark');
        }
    };


    // --- Profile Dropdown Logic ---
    const profileContainers = document.querySelectorAll('.profile-dropdown-container');
    
    profileContainers.forEach(container => {
        const trigger = container.querySelector('.profile-trigger');
        const menu = container.querySelector('.profile-menu');
        
        if (trigger && menu) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other menus first
                document.querySelectorAll('.profile-menu').forEach(m => {
                    if (m !== menu) m.classList.add('hidden');
                });
                menu.classList.toggle('hidden');
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.profile-menu').forEach(m => {
            m.classList.add('hidden');
        });
    });

    // Logout Functionality
    window.handleLogout = () => {
        // Just redirect to Dashboard/Home for now
        window.location.href = '/dashboard.html';
    };
});
