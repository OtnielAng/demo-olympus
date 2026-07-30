// ==========================================
// OLYMPUS OVERS — Animaciones de scroll
// Ligero, sin librerías externas (no queremos volver a inflar la página).
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.js-reveal');

    // Si el navegador no soporta IntersectionObserver (muy raro hoy en día),
    // simplemente mostramos todo de una vez, sin animación.
    if (!('IntersectionObserver' in window) || targets.length === 0) {
        targets.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target); // se anima una sola vez
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(el => observer.observe(el));
});

// ==========================================
// Ayudante opcional: si más adelante quieres que las tarjetas
// que el JS inyecta dinámicamente (ej. index-product-grid,
// reviews-container-index) también entren animadas, llama a
// esta función después de pintar el HTML con innerHTML.
// Ejemplo dentro de index.js, justo después del .map().join(''):
//     grid.innerHTML = featured.map(...).join('');
//     reobserveReveals();
// ==========================================
function reobserveReveals() {
    if (!('IntersectionObserver' in window)) return;
    const nuevos = document.querySelectorAll('.js-reveal:not(.is-visible)');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    nuevos.forEach(el => observer.observe(el));
}

// ==========================================
// "SCROLL HINT" — empujón horizontal para avisar que hay más contenido
// ==========================================
// Al cargar, cualquier fila con overflow-x (filtros, carruseles) que tenga
// el atributo data-scroll-hint se desliza sola un poco hacia la derecha y
// regresa — así el usuario entiende que puede arrastrar para ver más.
//
// Uso: agrega data-scroll-hint="true" al contenedor con overflow-x-auto.
// Solo corre en mobile (<768px) y respeta prefers-reduced-motion.
(function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (prefersReducedMotion || !isMobile) return;

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    function animateScroll(el, from, to, duration, easing, done) {
        const start = performance.now();
        function step(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            el.scrollLeft = from + (to - from) * easing(progress);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else if (done) {
                done();
            }
        }
        requestAnimationFrame(step);
    }

    function nudge(el) {
        // Si no hay nada oculto a la derecha, no hacemos nada
        if (el.scrollWidth <= el.clientWidth + 4) return;

        // El scroll-snap y el "scroll-behavior: smooth" nativo del navegador
        // pelean con nuestra animación cuadro por cuadro (por eso el parpadeo).
        // Los apagamos SOLO mientras dura el empujón, y los regresamos después.
        const prevSnap = el.style.scrollSnapType;
        const prevBehavior = el.style.scrollBehavior;
        el.style.scrollSnapType = 'none';
        el.style.scrollBehavior = 'auto';

        const restore = () => {
            el.style.scrollSnapType = prevSnap;
            el.style.scrollBehavior = prevBehavior;
        };

        const distance = Math.min(56, el.scrollWidth - el.clientWidth);
        animateScroll(el, 0, distance, 480, easeOutCubic, () => {
            setTimeout(() => {
                animateScroll(el, distance, 0, 550, easeInOutCubic, restore);
            }, 180);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const hints = document.querySelectorAll('[data-scroll-hint]');
        hints.forEach(el => {
            // Pequeño respiro para que la página se asiente antes de animar
            setTimeout(() => nudge(el), 700);
        });
    });
})();