document.addEventListener('DOMContentLoaded', function () {
    // Detecta recarga usando Navigation Timing API con fallback
    const navEntries = (performance.getEntriesByType) ? performance.getEntriesByType('navigation') : null;
    const isReload = (navEntries && navEntries[0] && navEntries[0].type === 'reload')
        || (performance.navigation && performance.navigation.type === 1);

    if (!isReload) {
        // Primera carga: mantener "Esperando..."
        return;
    }

    const encabezado = document.querySelector('h1');
    const caja = document.getElementById('caja');

    if (encabezado) {
        encabezado.textContent = '¡DOM controlado por Ángel Piñero Orellana!';
    }
    if (caja) {
        caja.style.backgroundColor = 'cyan';
    }
});