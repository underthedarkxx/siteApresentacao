const cursor = document.querySelector('.custom-cursor');

if (cursor) {
  const isDesktop = window.matchMedia('(min-width: 992px)').matches;

  const isClickable = (element) => {
    if (!element) return false;
    return (
      ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName) ||
      element.hasAttribute('onclick') ||
      element.classList.contains('clickable') ||
      !!element.closest('a, button, input, select, textarea, [onclick], .clickable')
    );
  };

  const createRipple = (x, y, className) => {
    const ripple = document.createElement('div');
    ripple.className = className;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  };

  if (isDesktop) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasPosition = false;

    // Segue o ponteiro com um leve atraso (lag), em vez de "grudar" nele.
    const render = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasPosition) {
        // Primeira posição real do mouse: posiciona sem lag e revela o cursor.
        hasPosition = true;
        currentX = targetX;
        currentY = targetY;
        cursor.style.opacity = '1';
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      cursor.classList.toggle('active', isClickable(el));
    });

    document.addEventListener('mousedown', (e) => {
      cursor.classList.add('clicking');
      createRipple(e.clientX, e.clientY, 'click-ripple');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('clicking');
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (hasPosition) cursor.style.opacity = '1';
    });
  } else {
    // Mobile: mantém o cursor do sistema oculto e usa efeitos de toque.
    cursor.style.display = 'none';

    document.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      createRipple(touch.clientX, touch.clientY, 'touch-ripple');
    });

    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      createRipple(touch.clientX, touch.clientY, 'touch-trail');
    });
  }
}
