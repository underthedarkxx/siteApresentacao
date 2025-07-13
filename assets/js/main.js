// Cria o círculo luminoso
const light = document.createElement('div');
light.classList.add('mouse-light');
document.body.appendChild(light);

document.addEventListener('mousemove', (e) => {
  light.style.top = `${e.clientY}px`;
  light.style.left = `${e.clientX}px`;
  light.style.opacity = '1';
});

// Inicializa partículas
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#0dcaf0'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#0dcaf0',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Cursor personalizado
const cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  const el = document.elementFromPoint(e.clientX, e.clientY);

  function isClickable(element) {
    if (!element) return false;
    return (
      ['A','BUTTON','INPUT','SELECT','TEXTAREA'].includes(element.tagName) ||
      element.hasAttribute('onclick') ||
      element.classList.contains('clickable') ||
      element.closest('a, button, input, select, textarea, [onclick], .clickable')
    );
  }

  if (isClickable(el)) {
    cursor.classList.add('active');
  } else {
    cursor.classList.remove('active');
  }
});

// Sidebar e overlay
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  openBtn.addEventListener('click', openSidebar);
  openBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // evita o clique duplo no mobile
    openSidebar();
  });

  closeBtn.addEventListener('click', closeSidebar);
  closeBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    closeSidebar();
  });

  overlay.addEventListener('click', closeSidebar);
  overlay.addEventListener('touchstart', (e) => {
    e.preventDefault();
    closeSidebar();
  });

  window.addEventListener('click', (e) => {
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
