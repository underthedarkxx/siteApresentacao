document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  if (!cursor) return;

  cursor.style.left = "-100px";
  cursor.style.top = "-100px";

  if (window.innerWidth >= 992) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = "1";

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isClickable = (element) => {
        return element && (
          ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName) ||
          element.hasAttribute('onclick') ||
          element.classList.contains('clickable') ||
          element.closest('a, button, input, select, textarea, [onclick], .clickable')
        );
      };

      if (isClickable(el)) {
        cursor.classList.add("active");
      } else {
        cursor.classList.remove("active");
      }
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
    });
  } else {
    cursor.style.display = "none";
  }
});


