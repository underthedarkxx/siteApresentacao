const cursor = document.querySelector('.custom-cursor');

// Inicializa fora da tela (caso o CSS falhe por algum motivo)
cursor.style.left = '-100px';
cursor.style.top = '-100px';

// Oculta cursor do sistema
const forceHideCursor = () => {
  document.body.style.cursor = 'none';
  document.documentElement.style.cursor = 'none';
};

// Reforço contínuo usando requestAnimationFrame
function loopHideCursor() {
  forceHideCursor();
  requestAnimationFrame(loopHideCursor);
}

if (window.innerWidth >= 992) {
  forceHideCursor(); // Aplica imediatamente
  loopHideCursor();  // Inicia o loop

  // Move o cursor customizado com o mouse
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

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

  // Garante que cliques não revelem o cursor do sistema
  ['mousedown', 'mouseup', 'click'].forEach(evt => {
    document.addEventListener(evt, () => {
      forceHideCursor();
    }, true);
  });
}

// Toques no mobile
if (window.innerWidth < 992) {
  document.addEventListener('touchstart', function (e) {
    const touch = e.touches[0];
    createTouchRipple(touch.clientX, touch.clientY);
  });

  document.addEventListener('touchmove', function (e) {
    const touch = e.touches[0];
    createTrailDot(touch.clientX, touch.clientY);
  });

  function createTouchRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  function createTrailDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'touch-trail';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 400);
  }
}
