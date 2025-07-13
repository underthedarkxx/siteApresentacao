// particles-init.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#0dcaf0' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 4, random: true },
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
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
        },
        modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
