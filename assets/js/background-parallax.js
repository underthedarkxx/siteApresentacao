// background-parallax.js
// Move sutilmente o background-position do body a favor do cursor (mouse) ou do dedo (touch).
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const rangeX = 40; // background-position varia entre 30% e 70% no eixo X
  const rangeY = 32; // e entre 34% e 66% no eixo Y
  let ticking = false;

  const updatePosition = (clientX, clientY) => {
    const xPercent = 50 + (clientX / window.innerWidth - 0.5) * rangeX;
    const yPercent = 50 + (clientY / window.innerHeight - 0.5) * rangeY;
    document.body.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  };

  const onMove = (clientX, clientY) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updatePosition(clientX, clientY);
      ticking = false;
    });
  };

  window.addEventListener('mousemove', (e) => {
    onMove(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    if (touch) onMove(touch.clientX, touch.clientY);
  }, { passive: true });
}
