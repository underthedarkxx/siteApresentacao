// sidebar.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebarBtn');
    const closeBtn = document.getElementById('closeSidebarBtn');
    const overlay = document.getElementById('overlay');

    if (!sidebar || !openBtn || !closeBtn || !overlay) return;

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    openBtn.addEventListener('click', openSidebar);
    openBtn.addEventListener('touchstart', e => {
        e.preventDefault();
        openSidebar();
    });

    closeBtn.addEventListener('click', closeSidebar);
    closeBtn.addEventListener('touchstart', e => {
        e.preventDefault();
        closeSidebar();
    });

    overlay.addEventListener('click', closeSidebar);
    overlay.addEventListener('touchstart', e => {
        e.preventDefault();
        closeSidebar();
    });

    window.addEventListener('pointerdown', e => {
        if (
        sidebar.classList.contains('active') &&
        !sidebar.contains(e.target) &&
        e.target !== openBtn &&
        e.target !== overlay
        ) {
        closeSidebar();
        }
    });
});
