// light.js
const light = document.createElement('div');
light.classList.add('mouse-light');
document.body.appendChild(light);

let timeoutId = null;

document.addEventListener('mousemove', (e) => {
    light.style.top = `${e.clientY}px`;
    light.style.left = `${e.clientX}px`;
    light.style.opacity = '1';

    // Oculta o efeito após 1 segundo sem movimento do mouse
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        light.style.opacity = '0';
    }, 1000);
});

