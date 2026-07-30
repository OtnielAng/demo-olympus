// ==========================================
// OLYMPUS OVERS — Página INICIO
// ==========================================

// Esperamos a que el DOM esté completamente listo

const rayoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" /></svg>`;

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Pintar 4 productos AL AZAR ---
    const grid = document.getElementById('index-product-grid');
    
    if (typeof PRODUCTS !== 'undefined' && grid) {
        
        // TRUCO: Creamos una copia de PRODUCTS y la desordenamos al azar
        const shuffledProducts = [...PRODUCTS].sort(() => 0.5 - Math.random());
        
        // Ahora tomamos los primeros 4 de esa lista ya desordenada
        const featured = shuffledProducts.slice(0, 4);
        
        grid.innerHTML = featured.map(p => {
            const thumbnail = Array.isArray(p.img) ? p.img[0] : p.img;
            return `
            <article class="group bg-olympus-card rounded-2xl p-4 card-border cursor-pointer hover:border-olympus-dorado transition-colors flex flex-col h-full" onclick="openModal(${p.id})">
                <div class="aspect-square bg-white/5 rounded-xl mb-3 overflow-hidden">
                    <img src="${thumbnail}" alt="${p.title}" class="w-full h-full object-cover">
                </div>
                <p class="font-special text-[11px] uppercase font-bold tracking-wide mb-1 glow-azul">${p.cat}</p>
                <h4 class="font-sans text-sm font-bold text-white truncate">${p.title}</h4>
                <p class="font-sans text-olympus-dorado font-bold mt-1 mb-3">${p.price}</p>
                
                <div class="mt-auto">
                    <button class="w-full bg-olympus-dorado hover:opacity-90 text-olympus-negro font-bold py-3 rounded-xl uppercase text-xs tracking-widest transition-all group-hover:scale-[1.02]">
                        Comprar Ahora
                    </button>
                </div>
            </article>
        `}).join('');
    }

    // --- 2. Lógica para las Estrellas de Reseñas ---
    const reviewContainers = document.querySelectorAll('.review-stars-container');
    reviewContainers.forEach(container => {
        container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-[#E5AA2D]"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" /></svg>`.repeat(5);
    });
});


// ==========================================
// 3. SISTEMA "SHOP THE LOOK"
// ==========================================

// Base de datos de los Looks. 
// En "items" pones los IDs de los productos que el modelo trae puestos.
const LOOKS = [
    { id: 1, name: 'Zeus Fit #1', items: [9, 11] }, // Ej: Trae la Hoodie Zeus (9) y el Baggy Zeus (11)
    { id: 2, name: 'Zeus Fit #2', items: [4, 8, 3] },  // Ej: BoxFit Básica (4) y Tank (8)
    { id: 3, name: 'Zeus Fit #3', items: [5, 10, 1 , 4] }  // Modifica estos IDs según tus prendas reales
];

// Inyectamos el mini-modal de los looks
const lookModalHTML = `
    <!-- Z-index menor (38 y 39) para que no interfiera con tu modal de producto (40 y 50) -->
    <div id="look-modal-overlay" class="fixed inset-0 bg-black/80 z-[38] hidden opacity-0 transition-opacity duration-300 backdrop-blur-sm" onclick="closeLook()"></div>
    
    <div id="look-bottom-sheet" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-[#16120e] z-[39] rounded-t-3xl border-t border-olympus-dorado/30 transition-transform duration-300 translate-y-full flex flex-col max-h-[70vh] shadow-[0_-10px_40px_rgba(229,170,45,0.15)]">
        <div class="w-12 h-1.5 bg-gray-600 rounded-full mx-auto mt-4 mb-2"></div>
        <button onclick="closeLook()" class="absolute top-4 right-5 text-gray-400 hover:text-white text-xl z-20 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center">✕</button>

        <div class="overflow-y-auto px-5 pb-8 custom-scrollbar relative z-10">
            <h3 id="l-title" class="text-2xl font-display text-olympus-dorado mb-6 mt-2 text-center tracking-widest uppercase">Nombre del Look</h3>
            
            <p class="text-xs font-bold mb-4 uppercase tracking-[0.2em] text-gray-400 text-center">Prendas en este look</p>
            
            <!-- Grid donde aparecerán las prendas -->
            <div id="look-products-grid" class="grid grid-cols-2 gap-4"></div>

            <!-- BOTÓN: Comprar todo -->
            <button onclick="buyAllFromLook()" class="mt-8 w-full bg-olympus-gold text-olympus-negro font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Comprar todo el Look
            </button>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', lookModalHTML);

// Referencias
const lookOverlay = document.getElementById('look-modal-overlay');
const lookSheet = document.getElementById('look-bottom-sheet');

// Función que abre el modal del Look
function openLook(lookId) {
    const look = LOOKS.find(l => l.id === lookId);
    document.getElementById('l-title').textContent = look.name;
    
    const grid = document.getElementById('look-products-grid');
    
    // Filtramos la base de datos PRODUCTS para sacar solo las prendas de este look
    const lookProducts = PRODUCTS.filter(p => look.items.includes(p.id));
    
    // Pintamos las mini-tarjetas
    grid.innerHTML = lookProducts.map(p => {
        const thumbnail = Array.isArray(p.img) ? p.img[0] : p.img;
        return `
        <article class="bg-olympus-card rounded-2xl p-3 border border-gray-800 hover:border-olympus-dorado transition-colors cursor-pointer flex flex-col h-full" onclick="buyItemFromLook(${p.id})">
            <div class="aspect-square bg-gray-900 rounded-xl mb-3 overflow-hidden">
                <img src="${thumbnail}" class="w-full h-full object-cover">
            </div>
            <p class="font-special text-[9px] uppercase font-bold tracking-wide mb-1 text-olympus-dorado">${p.cat}</p>
            <h4 class="font-sans text-xs font-bold text-white truncate">${p.title}</h4>
            <div class="mt-auto pt-2">
                <button class="w-full bg-white text-black text-[10px] font-bold py-2 rounded-lg uppercase tracking-widest hover:bg-gray-200 transition-colors">
                    Ver Prenda
                </button>
            </div>
        </article>
        `;
    }).join('');
    
    // Animación de entrada
    lookOverlay.classList.remove('hidden');
    setTimeout(() => {
        lookOverlay.classList.remove('opacity-0');
        lookSheet.classList.remove('translate-y-full');
    }, 10);
}

// Función que cierra el modal del look
function closeLook() {
    lookSheet.classList.add('translate-y-full');
    lookOverlay.classList.add('opacity-0');
    setTimeout(() => {
        lookOverlay.classList.add('hidden');
    }, 300);
}

// Esta es la magia: Cerramos el look y abrimos el modal de tallas/colores
function buyItemFromLook(productId) {
    closeLook(); 
    
    // Le damos 300ms de tiempo para que termine de cerrarse el popup del look
    // y luego llamamos a openModal (que vive en catalogo.js)
    setTimeout(() => {
        openModal(productId);
    }, 300); 
}

// Variable global para saber qué look estamos viendo
let currentLook = null;

function openLook(lookId) {
    // Guardamos el look actual en la variable global
    currentLook = LOOKS.find(l => l.id === lookId);
    document.getElementById('l-title').textContent = currentLook.name;
    
    const grid = document.getElementById('look-products-grid');
    const lookProducts = PRODUCTS.filter(p => currentLook.items.includes(p.id));
    
    grid.innerHTML = lookProducts.map(p => {
        const thumbnail = Array.isArray(p.img) ? p.img[0] : p.img;
        return `
        <article class="bg-olympus-card rounded-2xl p-3 border border-gray-800 transition-colors cursor-pointer flex flex-col h-full" onclick="buyItemFromLook(${p.id})">
            <div class="aspect-square bg-gray-900 rounded-xl mb-3 overflow-hidden">
                <img src="${thumbnail}" class="w-full h-full object-cover">
            </div>
            <p class="font-special text-[9px] uppercase font-bold tracking-wide mb-1 text-olympus-dorado">${p.cat}</p>
            <h4 class="font-sans text-xs font-bold text-white truncate">${p.title}</h4>
        </article>
        `;
    }).join('');
    
    lookOverlay.classList.remove('hidden');
    setTimeout(() => {
        lookOverlay.classList.remove('opacity-0');
        lookSheet.classList.remove('translate-y-full');
    }, 10);
}

// Función nueva: Arma el mensaje con TODAS las prendas del look
function buyAllFromLook() {
    if (!currentLook) return;
    
    const lookProducts = PRODUCTS.filter(p => currentLook.items.includes(p.id));
    
    // Armamos la lista de prendas
    let itemsList = lookProducts.map(p => `- ${p.title} (${p.price})`).join('\n');
    
    const message = `Hola! Quiero pedir el look completo: *${currentLook.name}*\n\nPrendas:\n${itemsList}\n\nMe ayudan con tallas y disponibilidad?`;
    
    // Abrimos WhatsApp con el mensaje armado
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}


// ==========================================
// RENDERIZADO DE RESEÑAS EN INICIO
// ==========================================
const reviewContainers = document.getElementById('reviews-container-index');

if (typeof REVIEWS !== 'undefined' && reviewContainers) {
    // Tomamos las primeras 3
    const topReviews = REVIEWS.slice(0, 3);
    
    reviewContainers.innerHTML = topReviews.map(review => {
        let boltsHtml = '';
        for (let i = 1; i <= 5; i++) {
            // Usamos rayoSVG (que ya definiste arriba en tu index.js)
            const colorClass = i <= review.rating ? 'text-[#4F83CC] glow-azul' : 'text-gray-700';
            boltsHtml += `<span class="${colorClass}">${rayoSVG}</span>`;
        }
        return `
            <article class="snap-center shrink-0 w-[260px] bg-olympus-card rounded-2xl p-6 border border-gray-800">
                <div class="flex gap-1 mb-4">${boltsHtml}</div>
                <p class="font-special text-sm text-olympus-white italic mb-5 leading-relaxed">"${review.text}"</p>
                <p class="font-sans text-[11px] font-bold uppercase tracking-wide glow-azul">— ${review.name}</p>
            </article>
        `;
    }).join('');

    // Agregar botón "Ver más" (¡OJO! Lo agregamos fuera del contenedor flex para que no se desplace con el scroll)
    reviewContainers.parentElement.insertAdjacentHTML('beforeend', `
        <div class="text-center pt-8">
            <a href="nosotros.html#reviews-title" class="inline-block border border-olympus-white/30 text-olympus-white font-bold uppercase text-xs tracking-[0.1em] px-8 py-3 rounded-sm hover:bg-white/10 transition-all">
                Ver más reseñas
            </a>
        </div>
    `);
}