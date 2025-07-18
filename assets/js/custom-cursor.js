document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  // Inicializa o cursor na posição correta ao clicar
  document.addEventListener("mousedown", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.opacity = "1";
  });

  // Inicializa o cursor na posição correta ao entrar na janela
  document.addEventListener("mouseenter", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.opacity = "1";
  });

  const isClickable = (element) => {
    if (!element) return false;
    return (
      ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName) ||
      element.hasAttribute('onclick') ||
      element.classList.contains('clickable') ||
      element.closest('a, button, input, select, textarea, [onclick], .clickable')
    );
  };

  if (window.innerWidth >= 992) {
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = "1";

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (isClickable(el)) {
        cursor.classList.add("active");
      } else {
        cursor.classList.remove("active");
      }
    };

    document.addEventListener("mousemove", moveCursor);

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        cursor.style.display = "none";
      } else {
        cursor.style.display = "block";
      }
    });
  } else {
    cursor.style.display = "none";
  }

  // Ativa o estilo que oculta o cursor padrão
  document.body.classList.add("cursor-ready");
});




