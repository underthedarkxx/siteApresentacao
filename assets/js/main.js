// Cria o círculo luminoso
const light = document.createElement('div');
light.classList.add('mouse-light');
document.body.appendChild(light);

document.addEventListener('mousemove', (e) => {
  light.style.top = `${e.clientY}px`;
  light.style.left = `${e.clientX}px`;
  light.style.opacity = '1';
});

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
      value: '#0dcaf0' // cor das partículas
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
        enable: true, // <- isso ativa o efeito de seguir o mouse
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
        mode: 'grab' // ou 'repulse' para afastar
      },
      onclick: {
        enable: true,
        mode: 'push' // ou 'remove'
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

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');

  openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  window.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== openBtn) {
      sidebar.classList.remove('active');
    }
  });
});
