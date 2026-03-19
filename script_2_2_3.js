document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btnAnimo');
    const p = document.getElementById('parrafo');

    if (!btn || !p) return;

    // Click: cambiar texto y color del párrafo
    btn.addEventListener('click', function () {
        p.textContent = '¡Día fantástico para Ángel Piñero Orellana! (Ref: APO-2026)';
        p.style.color = 'orange';
    });

    // Hover: cambiar texto del botón y aumentar tamaño ligeramente
    const originalBtnText = btn.textContent;
    const computed = window.getComputedStyle(btn);
    const originalFontSize = computed.fontSize || '16px';
    const originalFontSizeValue = parseFloat(originalFontSize);

    btn.addEventListener('mouseenter', function () {
        btn.textContent = '¡Púlsame, Ángel!';
        btn.style.fontSize = (originalFontSizeValue * 1.12) + 'px';
    });

    btn.addEventListener('mouseleave', function () {
        btn.textContent = originalBtnText;
        btn.style.fontSize = originalFontSize;
    });
});