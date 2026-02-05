document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');
  const overlay = document.getElementById('overlay');

  if (!sidebar || !openBtn || !closeBtn || !overlay) {
    console.warn('Elementos da sidebar não encontrados no DOM');
    return;
  }

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    openBtn.setAttribute('aria-expanded', 'true');
    const firstLink = sidebar.querySelector('.nav-link');
    if (firstLink) firstLink.focus();
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }

  openBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  sidebar.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
});

