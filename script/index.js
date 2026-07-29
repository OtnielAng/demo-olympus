// ==========================================
// OLYMPUS OVERS — Página INICIO
// ==========================================

const rayoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-olympus-blue"><path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A11.894 11.894 0 0112 18.75c-2.426 0-4.685-.69-6.584-1.87-2.607-1.62-4.908-3.92-6.529-6.528A11.954 11.954 0 01.353 7.822.75.75 0 011.026 6.8c3.048 0 5.86 1.07 8.082 2.873A12.01 12.01 0 019.315 7.584zM12 11.25a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clip-rule="evenodd" /><path d="M11.996 22.5c-1.385 0-2.686-.39-3.799-1.054a10.457 10.457 0 01-4.708-5.326c-.328-.813.435-1.545 1.253-1.196a9.043 9.043 0 005.12 1.34c3.42 0 6.425-1.897 7.973-4.717.387-.704 1.312-.662 1.636.068A10.457 10.457 0 0122.5 12c0 5.799-4.701 10.5-10.504 10.5z" /></svg>`;


// Esperamos a que el DOM esté completamente listo
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Pintar los 3 productos destacados ---
    const grid = document.getElementById('index-product-grid');
    
    // Verificamos que existan productos y el contenedor
    if (typeof PRODUCTS !== 'undefined' && grid) {
        // Tomamos solo los primeros 3
        const featured = PRODUCTS.slice(0, 3);
        
        // Verificamos que existan productos y el contenedor
    if (typeof PRODUCTS !== 'undefined' && grid) {
        // Tomamos solo los primeros 3
        const featured = PRODUCTS.slice(0, 5);
        
        grid.innerHTML = featured.map(p => `
            <article class="group bg-olympus-card rounded-2xl p-4 card-border cursor-pointer hover:border-olympus-dorado transition-colors flex flex-col h-full" onclick="openModal(${p.id})">
                <div class="aspect-square bg-white/5 rounded-xl mb-3 overflow-hidden">
                    <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
                </div>
                <p class="font-special text-[11px] uppercase font-bold tracking-wide mb-1 glow-azul">${p.cat}</p>
                <h4 class="font-sans text-sm font-bold text-white truncate">${p.title}</h4>
                <p class="font-sans text-olympus-dorado font-bold mt-1 mb-3">${p.price}</p>
                
                <!-- ESTE ES EL BOTÓN DE COMPRAR QUE FALTABA -->
                <div class="mt-auto">
                    <button class="w-full bg-olympus-blue hover:bg-blue-600 text-white font-bold py-3 rounded-xl uppercase text-xs tracking-widest shadow-[0_0_10px_rgba(79,131,204,0.4)] transition-all group-hover:scale-[1.02]">
                        Comprar Ahora
                    </button>
                </div>
            </article>
        `).join('');
    }
    }

    // --- 2. Lógica para las Estrellas de Reseñas ---
    const reviewContainers = document.querySelectorAll('.review-stars-container');
    reviewContainers.forEach(container => {
        container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-olympus-blue"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" /></svg>`.repeat(5);
    });
});
