// light.js
const light = document.createElement('div');
light.classList.add('mouse-light');
document.body.appendChild(light);

document.addEventListener('mousemove', (e) => {
    light.style.top = `${e.clientY}px`;
    light.style.left = `${e.clientX}px`;
    light.style.opacity = '1';
});
