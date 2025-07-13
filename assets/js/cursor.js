// cursor.js
const cursor = document.querySelector('.custom-cursor');

// Evitar ativar cursor em telas pequenas (mobile)
if (window.innerWidth >= 992) {
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

    document.addEventListener('mousedown', () => {
        document.body.style.cursor = 'none';
    });

    document.addEventListener('mouseup', () => {
        document.body.style.cursor = 'none';
    });
}
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
