// ==========================================
// OLYMPUS OVERS — Página CATÁLOGO
// ==========================================

// 1. BASE DE DATOS CENTRAL (Tus 10 productos exactos)
const PRODUCTS = [
    { id: 1, genero: 'hombre', cat: 'chamarra', title: 'Varsity Jacket Noir', price: '$1,299 MXN', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop', desc: 'Chamarra estilo universitario con mangas de cuero sintético.' },
    { id: 2, genero: 'unisex', cat: 'boxfit', title: 'Hoodie Essential', price: '$899 MXN', img: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=400&auto=format&fit=crop', desc: 'Sudadera con capucha corte boxy-fit, algodón pesado de 400g.' },
    { id: 3, genero: 'hombre', cat: 'shorts', title: 'OVER 1', price: '$380 MXN', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=400&auto=format&fit=crop', desc: 'Short deportivo de malla transpirable, ideal para el gym o el día a día.' },
    { id: 4, genero: 'mujer', cat: 'pans', title: 'Cargo Sweatpants', price: '$799 MXN', img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=400&auto=format&fit=crop', desc: 'Pantalón tipo cargo en tela sweat, múltiples bolsillos.' },
    { id: 5, genero: 'unisex', cat: 'chamarra', title: 'Puffer Jacket Zero', price: '$1,450 MXN', img: 'https://images.unsplash.com/photo-1521223830114-41525f09673a?q=80&w=400&auto=format&fit=crop', desc: 'Chamarra acolchada, repelente al agua, ideal para climas fríos.' },
    { id: 6, genero: 'mujer', cat: 'boxfit', title: 'Cropped Hoodie OVS', price: '$650 MXN', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop', desc: 'Hoodie con corte crop y mangas super oversize.' },
    { id: 7, genero: 'hombre', cat: 'pans', title: 'Tech Fleece Joggers', price: '$850 MXN', img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=400&auto=format&fit=crop', desc: 'Jogger de corte ajustado con cierre en bolsillos.' },
    { id: 8, genero: 'unisex', cat: 'shorts', title: 'Biker Shorts Onyx', price: '$399 MXN', img: 'https://images.unsplash.com/photo-1565084888279-aca607fccece?q=80&w=400&auto=format&fit=crop', desc: 'Shorts elásticos perfectos para el gym o el streetwear.' },
    { id: 9, genero: 'mujer', cat: 'chamarra', title: 'Windbreaker Shell', price: '$1,100 MXN', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop', desc: 'Cortavientos ultraligero con detalles reflectantes.' },
    { id: 10, genero: 'hombre', cat: 'boxfit', title: 'Heavyweight Tee', price: '$550 MXN', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400&auto=format&fit=crop', desc: 'Playera de algodón grueso, cuello cerrado y hombros caídos.' }
];

// 2. VARIABLES GLOBALES
const whatsappNumber = "521234567890"; // <- PON TU NÚMERO AQUÍ
let currentGender = 'todo';
let currentCat = 'todo';

let selectedSize = 'No seleccionada';
let selectedColor = 'No seleccionado';
let currentTitle = '';
let currentPrice = '';

// 3. FUNCIÓN QUE PINTA EL GRID SIN DEFORMARSE
function renderGrid() {
    const grid = document.getElementById('product-grid');
    const noResults = document.getElementById('no-results');
    const productCount = document.getElementById('product-count');

    // Filtrar la lista
    const filtered = PRODUCTS.filter(p => {
        let matchGender = (currentGender === 'todo') ||
                          (currentGender === 'hombre' && (p.genero === 'hombre' || p.genero === 'unisex')) ||
                          (currentGender === 'mujer' && (p.genero === 'mujer' || p.genero === 'unisex')) ||
                          (currentGender === 'unisex' && p.genero === 'unisex');
        let matchCat = (currentCat === 'todo' || p.cat === currentCat);
        return matchGender && matchCat;
    });

    productCount.textContent = `${filtered.length} Artículo${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';

        // PINTA TU CÓDIGO HTML EXACTO + EL BOTÓN AZUL
        grid.innerHTML = filtered.map(p => `
            <article class="product-card flex flex-col bg-olympus-card rounded-2xl p-3 border border-gray-800 hover:border-olympus-gold/50 transition-colors cursor-pointer" onclick="openModal(${p.id})">
                <div class="aspect-square bg-gray-900 rounded-xl mb-3 overflow-hidden relative">
                    <img src="${p.img}" class="w-full h-full object-cover">
                </div>
                <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1">${p.cat}</p>
                <h3 class="text-sm font-medium text-white truncate mb-2">${p.title}</h3>
                <div class="mt-auto flex items-center justify-between pt-2">
                    <p class="text-olympus-gold font-bold">${p.price}</p>
                </div>
                <div class="mt-auto">
                    <button class="w-full bg-olympus-blue hover:bg-blue-600 text-white font-bold py-3 my-3 rounded-xl uppercase text-xs tracking-widest shadow-[0_0_10px_rgba(79,131,204,0.4)] transition-all group-hover:scale-[1.02]">
                        Comprar Ahora
                    </button>
                </div>
            </article>
        `).join('');
    }
}

// 4. LISTENERS DE LOS FILTROS
document.querySelectorAll('.gender-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentGender = e.target.getAttribute('data-filter');
        document.querySelectorAll('.gender-btn').forEach(b => b.className = (b.getAttribute('data-filter') === currentGender) ? "filter-btn gender-btn snap-start shrink-0 px-5 py-2 rounded-full border border-olympus-gold bg-olympus-gold text-olympus-black font-medium text-sm transition-colors" : "filter-btn gender-btn snap-start shrink-0 px-5 py-2 rounded-full border border-gray-700 bg-olympus-card text-gray-300 hover:border-olympus-white text-sm transition-colors");
        renderGrid();
    });
});

document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentCat = e.target.getAttribute('data-filter');
        document.querySelectorAll('.cat-btn').forEach(b => b.className = (b.getAttribute('data-filter') === currentCat) ? "filter-btn cat-btn snap-start shrink-0 px-4 py-1.5 rounded-lg border border-olympus-blue/50 bg-olympus-blue/10 text-olympus-blue font-medium text-xs transition-colors" : "filter-btn cat-btn snap-start shrink-0 px-4 py-1.5 rounded-lg border border-gray-800 bg-olympus-card text-gray-400 hover:text-white text-xs transition-colors");
        renderGrid();
    });
});

// 5. LÓGICA DEL MODAL (bottom-sheet de producto)
const modalOverlay = document.getElementById('modal-overlay');
const bottomSheet = document.getElementById('bottom-sheet');
const waBtn = document.getElementById('m-wa-btn');

const updateWaLink = () => {
    const message = `Hola! Quiero pedir:\n*${currentTitle}*\nTalla: ${selectedSize}\nColor: ${selectedColor}\nPrecio: ${currentPrice}\n\nMe confirmas disponibilidad?`;
    waBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

function openModal(id) {
    const product = PRODUCTS.find(p => p.id === id);

    // Resetear visualmente tallas y colores
    selectedSize = 'No seleccionada';
    selectedColor = 'No seleccionado';
    document.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('bg-olympus-gold', 'text-black', 'border-olympus-gold');
        b.classList.add('border-gray-600', 'text-white');
    });
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('ring-olympus-gold'));

    // Llenar datos
    currentTitle = product.title;
    currentPrice = product.price;
    document.getElementById('m-title').textContent = currentTitle;
    document.getElementById('m-price').textContent = currentPrice;
    document.getElementById('m-img').src = product.img;
    document.getElementById('m-desc').textContent = product.desc;

    updateWaLink();

    // Mostrar modal
    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        bottomSheet.classList.remove('translate-y-full');
    }, 10);
}

function closeModal() {
    bottomSheet.classList.add('translate-y-full');
    modalOverlay.classList.add('opacity-0');
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
    }, 300);
}

// Selección de Talla y Color en el modal
function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => {
        b.classList.remove('bg-olympus-gold', 'text-black', 'border-olympus-gold');
        b.classList.add('border-gray-600', 'text-white');
    });
    btn.classList.remove('border-gray-600', 'text-white');
    btn.classList.add('bg-olympus-gold', 'text-black', 'border-olympus-gold');
    selectedSize = btn.textContent;
    updateWaLink();
}

function selectColor(btn) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('ring-olympus-gold'));
    btn.classList.add('ring-olympus-gold');
    selectedColor = btn.getAttribute('data-color');
    updateWaLink();
}

// Inicializar el renderizado al cargar
renderGrid();

