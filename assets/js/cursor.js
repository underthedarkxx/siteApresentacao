const cursor = document.querySelector('.custom-cursor');

if (cursor) {
  // Inicializa fora da tela (fallback)
  cursor.style.left = '-100px';
  cursor.style.top = '-100px';

  // Função para ocultar o cursor do sistema
  const forceHideCursor = () => {
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
  };

  // Loop contínuo para garantir que o cursor do sistema fique oculto
  const loopHideCursor = () => {
    forceHideCursor();
    requestAnimationFrame(loopHideCursor);
  };

  if (window.innerWidth >= 992) {
    forceHideCursor();
    loopHideCursor();

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = '1';

      const el = document.elementFromPoint(e.clientX, e.clientY);

      const isClickable = (element) => {
        if (!element) return false;
        return (
          ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName) ||
          element.hasAttribute('onclick') ||
          element.classList.contains('clickable') ||
          element.closest('a, button, input, select, textarea, [onclick], .clickable')
        );
      };

      if (isClickable(el)) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
    });

    ['mousedown', 'mouseup', 'click'].forEach(evt => {
      document.addEventListener(evt, forceHideCursor, true);
    });

    // Opcional: esconder o cursor se o mouse sair da janela
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });

  } else {
    // Mobile: oculta o cursor customizado
    cursor.style.display = 'none';

    // Efeitos de toque
    document.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      createTouchRipple(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      createTrailDot(touch.clientX, touch.clientY);
    });

    function createTouchRipple(x, y) {
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    function createTrailDot(x, y) {
      const dot = document.createElement('div');
      dot.className = 'touch-trail';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 400);
    }
  }
}

