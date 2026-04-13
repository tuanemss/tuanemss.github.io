document.addEventListener('DOMContentLoaded', () => {
    // Menu Dropdown Logic
    const menuToggleOpen = document.getElementById('menuToggleOpen');
    const menuOverlay = document.getElementById('menuOverlay');

    const toggleMenu = () => {
        const isActive = menuOverlay.classList.contains('active');
        if (isActive) {
            menuOverlay.classList.remove('active');
        } else {
            menuOverlay.classList.add('active');
        }
    };

    if (menuToggleOpen) {
        menuToggleOpen.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menuOverlay && menuOverlay.classList.contains('active')) {
            if (!menuOverlay.contains(e.target) && e.target !== menuToggleOpen) {
                menuOverlay.classList.remove('active');
            }
        }
    });
});