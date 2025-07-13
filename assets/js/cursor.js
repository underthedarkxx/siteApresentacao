// cursor.js
const cursor = document.querySelector('.custom-cursor');

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
