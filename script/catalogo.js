// ==========================================
// OLYMPUS OVERS — Página CATÁLOGO
// ==========================================

// 1. BASE DE DATOS CENTRAL
const PRODUCTS = [
    { id: 1, genero: 'unisex', cat: 'Over Size', title: 'Zeus King of Gods', price: '$1,299 MXN', tallas: ['XS','S', 'M', 'L', 'XL', 'XXL' , 'XXXL'], img: [
        'img/OverZeus/over-zeus-back.PNG',
        'img/OverZeus/over-zeus-front.PNG',
    ], 
    desc: `
        <p class="mb-3">Confeccionada en algodón/poliester de alto gramaje, es una prenda fresca que brinda un tacto muy suave y asegura una mayor durabilidad tanto de la prenda como del color.</p>
        <p class="mb-3">El estampado de alta calidad y los detalles de esta edición especial reflejan la esencia del Drop Zeus: fuerza, disciplina y grandeza.</p>
        <p class="mb-5">Una prenda diseñada para destacar sin perder la simplicidad que caracteriza a Olympus Overs.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Corte Over Normal exclusivo Olympus</li>
            <li>Tela premium de alto gramaje.</li>
            <li>Ajuste cómodo con caída estructurada.</li>
            <li>Estampado exclusivo del Drop Zeus en la espalda.</li>
            <li>Acabados de alta calidad para mayor durabilidad.</li>
            <li>Edición especial de piezas limitadas.</li>
        </ul>
    `, 
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 2, genero: 'unisex', cat: 'Over Size', title: 'Básica Zeus - LIMITED EDITION', tallas: ['XS','S', 'M', 'L', 'XL', 'XXL' , 'XXXL'], price: '$899 MXN', img: [
        'img/OverZeus/over-zeus-LIMITED.PNG',        
    ], 
    desc: `
        <p class="mb-3">Confeccionada en algodón/poliester de alto gramaje, es una prenda fresca que brinda un tacto muy suave y asegura una mayor durabilidad tanto de la prenda como del color.</p>
        <p class="mb-3">El estampado de alta calidad y los detalles de esta edición especial reflejan la esencia del Drop Zeus: fuerza, disciplina y grandeza.</p>
        <p class="mb-5">Una prenda diseñada para destacar sin perder la simplicidad que caracteriza a Olympus Overs.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Corte Over Normal exclusivo Olympus</li>
            <li>Tela premium de alto gramaje.</li>
            <li>Ajuste cómodo con caída estructurada.</li>
            <li>Estampado exclusivo del Drop Zeus en la espalda.</li>
            <li>Acabados de alta calidad para mayor durabilidad.</li>
            <li>Edición especial de piezas limitadas.</li>
        </ul>
    `, 
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 3, genero: 'unisex', cat: 'BoxFit', title: 'BoxFit Zeus- LIMITED EDITION', tallas: ['XS','S', 'M', 'L', 'XL', 'XXL'], price: '$899 MXN', img: [
        'img/Boxfit/boxfit-zeus-back.PNG',
        'img/Boxfit/boxfit-zeus-front.PNG',
    ], 
    desc: `
        <p class="mb-3">La Boxyfit está diseñada para quienes buscan una silueta moderna con mayor presencia en la parte superior del cuerpo. Su corte cuadrado y recto, combinado con un largo ligeramente más corto que una oversize tradicional, crea una apariencia más estructurada que resalta los hombros y aporta un fit limpio y contemporáneo.</p>
        <p class="mb-3">Confeccionada en algodón premium de 210 g/m², ofrece una caída firme, excelente comodidad y la resistencia necesaria para el uso diario. Es una prenda versátil que mantiene su forma y eleva cualquier outfit, dentro o fuera del gimnasio.</p>
        <p class="mb-5">Ideal para combinar con baggy pants, cargos, joggers o BoxFit, convirtiéndose en una pieza esencial para quienes buscan un estilo minimalista con personalidad.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Corte Boxyfit exclusivo Olympus Overs.</li>
            <li>Algodón/ poliéster premium 210 g/m².</li>
            <li>Fit cuadrado y recto.</li>
            <li>Más corta y ancha que una oversize convencional.</li>
            <li>Resalta visualmente hombros y espalda.</li>
            <li>Cuello reforzado y acabados premium.</li>
            <li>Diseñada para uso diario y entrenamiento.</li>
        </ul>
    `, 
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 4, genero: 'unisex', cat: 'BoxFit', title: 'BoxFit Zeus- Básica', tallas: ['XS','S', 'M', 'L', 'XL'], price: '$899 MXN', img: [
        'img/Boxfit/boxfit-zeus-basic.PNG'
    ], 
    desc: `
        <p class="mb-3">La Boxyfit está diseñada para quienes buscan una silueta moderna con mayor presencia en la parte superior del cuerpo. Su corte cuadrado y recto, combinado con un largo ligeramente más corto que una oversize tradicional, crea una apariencia más estructurada que resalta los hombros y aporta un fit limpio y contemporáneo.</p>
        <p class="mb-3">Confeccionada en algodón premium de 210 g/m², ofrece una caída firme, excelente comodidad y la resistencia necesaria para el uso diario. Es una prenda versátil que mantiene su forma y eleva cualquier outfit, dentro o fuera del gimnasio.</p>
        <p class="mb-5">Ideal para combinar con baggy pants, cargos, joggers o BoxFit, convirtiéndose en una pieza esencial para quienes buscan un estilo minimalista con personalidad.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Corte Boxyfit exclusivo Olympus Overs.</li>
            <li>Algodón/ poliéster premium 210 g/m².</li>
            <li>Fit cuadrado y recto.</li>
            <li>Más corta y ancha que una oversize convencional.</li>
            <li>Resalta visualmente hombros y espalda.</li>
            <li>Cuello reforzado y acabados premium.</li>
            <li>Diseñada para uso diario y entrenamiento.</li>
        </ul>
    `, 
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 5, genero: 'unisex', cat: 'Deslavada', title: 'Deslavada Zeus - Limited', tallas: ['M', 'L'], price: '$899 MXN', img: [
        'img/Deslavada/over-deslavada-back.PNG',
        'img/Deslavada/over-deslavada-front.PNG',
    ], 
    desc: `
        <p class="mb-3">La Over Deslavada combina un estilo urbano con la comodidad de una silueta oversized diseñada para el uso diario. </p>
        <p class="mb-3">Confeccionada en 100% algodón premium de 320 g/m², ofrece una caída pesada, una textura suave y una resistencia superior que mejora con el paso del tiempo.</p>
        <p class="mb-5">Su proceso de lavado mineral crea un acabado único en cada prenda, haciendo que ninguna sea exactamente igual. </p>
        <p class="mb-5">El hombro caído y su largo intermedio entre la Over Normal y la Boxyfit logran un equilibrio perfecto entre un fit relajado y una apariencia estructurada. </p>
        <p class="mb-5">Es una prenda pensada para quienes buscan destacar con un estilo auténtico, robusto y atemporal, ideal tanto para entrenar como para el día a día.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>100% algodón premium 320 g/m².</li>
            <li>Acabado deslavado exclusivo.</li>
            <li>Cada prenda presenta un patrón de lavado único.</li>
            <li>Corte oversized con hombro caído.</li>
            <li>Largo intermedio entre la Over Normal y la Boxyfit.</li>
            <li>Tela gruesa, transpirable y de gran durabilidad.</li>
            <li>Costuras reforzadas para mayor resistencia.</li>
            <li>Ideal para entrenamiento, uso diario y outfits streetwear.</li>
        </ul>
        <p class="my-8 text-xs font-style: italic; ">*Debido al proceso de lavado, el color y el patrón deslavado pueden presentar ligeras variaciones entre prendas, haciendo que cada pieza sea única.</p>
    `, 
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 6, genero: 'unisex', cat: 'Deslavada', title: 'Deslavada Zeus - Básica', tallas: ['M', 'L'], price: '$899 MXN', img: [
        'img/Deslavada/over-deslavada-basic.PNG'        
    ], 
    desc: `
        <p class="mb-3">La Over Deslavada combina un estilo urbano con la comodidad de una silueta oversized diseñada para el uso diario. </p>
        <p class="mb-3">Confeccionada en 100% algodón premium de 320 g/m², ofrece una caída pesada, una textura suave y una resistencia superior que mejora con el paso del tiempo.</p>
        <p class="mb-5">Su proceso de lavado mineral crea un acabado único en cada prenda, haciendo que ninguna sea exactamente igual. </p>
        <p class="mb-5">El hombro caído y su largo intermedio entre la Over Normal y la Boxyfit logran un equilibrio perfecto entre un fit relajado y una apariencia estructurada. </p>
        <p class="mb-5">Es una prenda pensada para quienes buscan destacar con un estilo auténtico, robusto y atemporal, ideal tanto para entrenar como para el día a día.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>100% algodón premium 320 g/m².</li>
            <li>Acabado deslavado exclusivo.</li>
            <li>Cada prenda presenta un patrón de lavado único.</li>
            <li>Corte oversized con hombro caído.</li>
            <li>Largo intermedio entre la Over Normal y la Boxyfit.</li>
            <li>Tela gruesa, transpirable y de gran durabilidad.</li>
            <li>Costuras reforzadas para mayor resistencia.</li>
            <li>Ideal para entrenamiento, uso diario y outfits streetwear.</li>
        </ul>
        <p class="my-8 text-xs font-style: italic; ">*Debido al proceso de lavado, el color y el patrón deslavado pueden presentar ligeras variaciones entre prendas, haciendo que cada pieza sea única.</p>
    `,
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 7, genero: 'unisex', cat: 'Tank', title: 'Tank Zeus - Limited', tallas: ['S', 'M', 'L', 'XL'], price: '$899 MXN', img: [
        'img/TankBoxy/tankboxy-zeus-back.PNG',       
        'img/TankBoxy/tankboxy-zeus-front.PNG'        
    ], 
    desc: `
        <p class="mb-3">La Tank  está diseñada para ofrecer la máxima comodidad. Su corte recto con una silueta ligeramente boxy proporciona una caída relajada que favorece la movilidad y resalta la parte superior del cuerpo.</p>
        <p class="mb-3">Confeccionada en una mezcla premium de algodón y poliéster de 210 g/m², combina la suavidad natural del algodón con la resistencia y durabilidad del poliéster, ofreciendo una prenda ligera, fresca y cómoda para acompañarte tanto en tus entrenamientos como en el uso diario.</p>
        <p class="mb-5">Su diseño sin mangas brinda mayor libertad de movimiento y una apariencia atlética, convirtiéndola en una pieza esencial para quienes buscan rendimiento y estilo en una sola prenda. </p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Mezcla premium de algodón y poliéster 210 g/m².</li>
            <li>Corte recto con silueta ligeramente boxy.</li>
            <li>Caída relajada para un ajuste cómodo.</li>
            <li>Diseño sin mangas que resalta hombros y brazos.</li>
            <li>Ligera, fresca y transpirable.</li>
            <li>Ideal para entrenamiento y uso diario.</li>
            <li>Costuras reforzadas para una mayor durabilidad.</li>
            </ul>    
    `,
    colores: [ { name: 'Negro', hex: '#000000' } ]},
    
    { id: 8, genero: 'unisex', cat: 'Tank', title: 'Tank Zeus - Básica', tallas: ['XS','S', 'M', 'L', 'XL'], price: '$899 MXN', img: [
        'img/TankBoxy/tankboxy-zeus-basic.PNG'             
    ], 
    desc: `
        <p class="mb-3">La Tank  está diseñada para ofrecer la máxima comodidad. Su corte recto con una silueta ligeramente boxy proporciona una caída relajada que favorece la movilidad y resalta la parte superior del cuerpo.</p>
        <p class="mb-3">Confeccionada en una mezcla premium de algodón y poliéster de 210 g/m², combina la suavidad natural del algodón con la resistencia y durabilidad del poliéster, ofreciendo una prenda ligera, fresca y cómoda para acompañarte tanto en tus entrenamientos como en el uso diario.</p>
        <p class="mb-5">Su diseño sin mangas brinda mayor libertad de movimiento y una apariencia atlética, convirtiéndola en una pieza esencial para quienes buscan rendimiento y estilo en una sola prenda. </p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Mezcla premium de algodón y poliéster 210 g/m².</li>
            <li>Corte recto con silueta ligeramente boxy.</li>
            <li>Caída relajada para un ajuste cómodo.</li>
            <li>Diseño sin mangas que resalta hombros y brazos.</li>
            <li>Ligera, fresca y transpirable.</li>
            <li>Ideal para entrenamiento y uso diario.</li>
            <li>Costuras reforzadas para una mayor durabilidad.</li>
            </ul>    
    `,
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 9, genero: 'unisex', cat: 'Hoodie', title: 'Hoodie Zeus', tallas: ['S', 'M', 'L', 'XL', 'XXL'], price: '$899 MXN', img: [
        'img/Hoodie/hoodie-zeus-back.PNG',
        'img/Hoodie/hoodie-zeus-front.PNG'             
    ], 
    desc: `
        <p class="mb-3">La hoodie ofrece  la máxima comodidad con un corte oversized, combina un ajuste relajado con una apariencia limpia y moderna que se adapta tanto al entrenamiento como al uso diario.</p>
        <p class="mb-3">Confeccionada en felpa premium de mezcla de algodón y poliéster, ofrece un interior suave, excelente retención del calor y una resistencia superior al uso constante. </p>
        <p class="mb-5">Su tejido mantiene el color lavado tras lavado, no despinta y conserva su forma, convirtiéndola en una prenda hecha para durar.</p>
        <p class="mb-5">Su grosor y calidad la hacen una de las prendas más resistentes de la colección, ideal para quienes buscan comodidad sin sacrificar estilo.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Felpa premium de algodón y poliéster.</li>
            <li>Interior suave y cálido.</li>
            <li>Corte oversized exclusivo Olympus</li>
            <li>Mantiene su color con el uso.</li>
            <li>Tela resistente y de alta durabilidad.</li>
            <li>Costuras reforzadas para una mayor vida útil.</li>
        </ul>    
    `,
    colores: [ { name: 'Negro', hex: '#000000' } ]},
    
    { id: 10, genero: 'unisex', cat: 'Baggy', title: 'Baggy Básico', tallas: ['S', 'M', 'L', 'XL'], price: '$899 MXN', img: [
        'img/Baggy/baggy-basic.PNG'                  
    ], 
    desc: `
        <p class="mb-3">Pants Olympus Overs está confeccionado en French Terry premium, una mezcla de algodón y elastano que ofrece una excelente elasticidad, suavidad y transpirabilidad para acompañarte tanto en tus entrenamientos como en el día a día. Su corte baggy brinda un estilo urbano con máxima comodidad, mientras que la cintura con resorte y cordón ajustable proporciona un ajuste seguro.</p>
        <p class="mb-3">Además, incorpora un sistema de ajuste en la parte inferior de las piernas, permitiéndote modificar el largo y el fit según tu estatura o el estilo que prefieras.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Tela elástica, cómoda, transpirable y muy duradera.</li>
            <li>Corte Baggy.</li>
            <li>Cintura con resorte y cordón ajustable.</li>
            <li>Sistema de ajuste en la parte inferior para adaptar el largo.</li>
            <li>Bolsas laterales y 1 trasera.</li>
            <li>Libertad total de movimiento para entrenamiento y uso diario.</li>
            <li>Acabados premium de alta calidad.</li>
        </ul>    
    `,
    colores: [ { name: 'Negro', hex: '#000000' } ]},

    { id: 11, genero: 'unisex', cat: 'Baggy', title: 'Baggy Zeus', tallas: ['S', 'M', 'L', 'XL'], price: '$899 MXN', img: [
        'img/Baggy/baggy-zeus.PNG'                                   
    ], 
    desc: `
        <p class="mb-3">Pants Olympus Overs está confeccionado en French Terry premium, una mezcla de algodón y elastano que ofrece una excelente elasticidad, suavidad y transpirabilidad para acompañarte tanto en tus entrenamientos como en el día a día. Su corte baggy brinda un estilo urbano con máxima comodidad, mientras que la cintura con resorte y cordón ajustable proporciona un ajuste seguro.</p>
        <p class="mb-3">Además, incorpora un sistema de ajuste en la parte inferior de las piernas, permitiéndote modificar el largo y el fit según tu estatura o el estilo que prefieras.</p>
        <p class="font-bold text-white mb-2 uppercase tracking-wide text-xs">Características</p>
        <ul class="list-disc pl-4 space-y-1 text-olympus-gris">
            <li>Tela elástica, cómoda, transpirable y muy duradera.</li>
            <li>Corte Baggy.</li>
            <li>Cintura con resorte y cordón ajustable.</li>
            <li>Sistema de ajuste en la parte inferior para adaptar el largo.</li>
            <li>Bolsas laterales y 1 trasera.</li>
            <li>Libertad total de movimiento para entrenamiento y uso diario.</li>
            <li>Acabados premium de alta calidad.</li>
        </ul>    
    `,
    colores: [ { name: 'Negro', hex: '#000000' } ]}


];

// 2. VARIABLES GLOBALES
const whatsappNumber = "529513574930"; // <- PON TU NÚMERO AQUÍ
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

    if (!grid) return;

    // Filtrar la lista
    const filtered = PRODUCTS.filter(p => {
        let matchGender = (currentGender === 'todo') ||
                          (currentGender === 'hombre' && (p.genero === 'hombre' || p.genero === 'unisex')) ||
                          (currentGender === 'mujer' && (p.genero === 'mujer' || p.genero === 'unisex')) ||
                          (currentGender === 'unisex' && p.genero === 'unisex');
        let matchCat = (currentCat === 'todo' || p.cat === currentCat);
        return matchGender && matchCat;
    });

    if (productCount) {
        productCount.textContent = `${filtered.length} Artículo${filtered.length !== 1 ? 's' : ''}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
    } else {
        if (noResults) noResults.style.display = 'none';

        grid.innerHTML = filtered.map(p => {
            // Evaluamos si "img" es un arreglo; si es así, tomamos la primera foto como portada
            const thumbnail = Array.isArray(p.img) ? p.img[0] : p.img;
            
            return `
            <article class="product-card flex flex-col bg-olympus-card rounded-2xl p-2 border border-gray-800 hover:border-olympus-gold/50 transition-colors cursor-pointer" onclick="openModal(${p.id})">
                <div class="aspect-square bg-gray-900 rounded-xl mb-3 overflow-hidden relative">
                    <img src="${thumbnail}" class="w-full h-full object-cover">
                </div>
                <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-1">${p.cat}</p>
                <h3 class="text-sm font-medium text-white truncate mb-2">${p.title}</h3>
                <div class="mt-auto flex items-center justify-between pt-2">
                    <p class="text-olympus-gold font-bold">${p.price}</p>
                </div>
                <div class="mt-auto">
                    <button class="w-full bg-olympus-blue hover:bg-blue-600 text-white font-bold py-3 mt-3 rounded-xl uppercase text-xs tracking-widest shadow-[0_0_10px_rgba(79,131,204,0.4)] transition-all group-hover:scale-[1.02]">
                        Comprar
                    </button>
                </div>
            </article>
        `}).join('');
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

// ==========================================
// INYECCIÓN Y LÓGICA DEL MODAL ÚNICO
// ==========================================

// 1. Inyectamos el HTML del modal directamente desde este archivo
const modalHTML = `
    <div id="modal-overlay" class="fixed inset-0 bg-black/70 z-40 hidden opacity-0 transition-opacity duration-300 backdrop-blur-sm" onclick="closeModal()"></div>
    
    <div id="bottom-sheet" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-olympus-card z-50 rounded-t-3xl border-t border-gray-800 transition-transform duration-300 translate-y-full flex flex-col max-h-[90vh] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div class="w-12 h-1.5 bg-gray-600 rounded-full mx-auto mt-4 mb-2"></div>
        <button onclick="closeModal()" class="absolute top-4 right-5 text-gray-400 hover:text-white text-xl z-20 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center">✕</button>

        <div class="overflow-y-auto px-5 pb-8 custom-scrollbar relative z-10 mb-20 md:mb-0">
            
            <!-- Carrusel de Imágenes con Flechas para PC -->
            <div class="relative group">
                <button id="btn-prev" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden pointer-events-none">&#10094;</button>
                
                <!-- El contenedor que hace scroll -->
                <div id="m-img-carousel" class="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-2 mb-3 pb-2 cursor-grab active:cursor-grabbing"></div>
                
                <button id="btn-next" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:flex hidden pointer-events-none">&#10095;</button>
            </div>
            
            <!-- Contenedor para los puntitos (dots) -->
            <div id="carousel-dots" class="flex justify-center gap-2 mb-4 h-2"></div>

            <h3 id="m-title" class="text-3xl font-display text-white mb-1">Nombre</h3>
            <p id="m-price" class="text-2xl text-olympus-gold font-bold mb-4">$0 MXN</p>
                    
            <p class="text-sm font-bold mb-3 uppercase tracking-widest text-gray-300">Selecciona Talla</p>
            <div class="flex flex-wrap gap-3 mb-6" id="size-selector"></div>
            
            <p class="text-sm font-bold mb-3 uppercase tracking-widest text-gray-300">Color</p>
            <div class="flex gap-4 mb-8" id="color-selector"></div>
            
            <a href="tallas.html" id="guia-tallas" href="nosotros.html#puntos-de-venta" class="text-olympus-dorado font-bold text-sm underline hover:opacity-80 transition-opacity mb-3 inline-block">
                Guía de tallas
            </a>
            
            <a id="m-wa-btn" href="#" target="_blank" class="mt-6 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors shadow-lg shadow-[#25D366]/20">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Pedir por WhatsApp
            </a>

            <div id="m-desc" class="text-sm text-gray-400 my-6 leading-relaxed"></div>
        </div>
    </div>
`;

// Insertamos el modal al final del body una sola vez
document.body.insertAdjacentHTML('beforeend', modalHTML);

// Referencias a los elementos del modal
const modalOverlay = document.getElementById('modal-overlay');
const bottomSheet = document.getElementById('bottom-sheet');
const waBtn = document.getElementById('m-wa-btn');
const carouselEl = document.getElementById('m-img-carousel'); // Lo declaramos aquí afuera

// ==========================================
// LÓGICA DE ARRASTRE EN PC (DRAG TO SCROLL)
// ==========================================
// Se declara una sola vez afuera para que no se duplique al abrir varios productos
let isDown = false;
let startX;
let scrollLeft;

if (carouselEl) {
    carouselEl.addEventListener('mousedown', (e) => {
        isDown = true;
        // Apagamos el "imán" (snap) momentáneamente para que el arrastre sea fluido
        carouselEl.classList.remove('snap-x', 'snap-mandatory');
        startX = e.pageX - carouselEl.offsetLeft;
        scrollLeft = carouselEl.scrollLeft;
    });
    
    carouselEl.addEventListener('mouseleave', () => { 
        isDown = false; 
        carouselEl.classList.add('snap-x', 'snap-mandatory'); // Prendemos el imán
    });
    
    carouselEl.addEventListener('mouseup', () => { 
        isDown = false; 
        carouselEl.classList.add('snap-x', 'snap-mandatory'); // Prendemos el imán
    });
    
    carouselEl.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselEl.offsetLeft;
        const walk = (x - startX) * 1.5; // Velocidad / sensibilidad del arrastre
        carouselEl.scrollLeft = scrollLeft - walk;
    });
}

// ==========================================
// FUNCIONALIDAD DEL MODAL
// ==========================================
const updateWaLink = () => {
    if (!waBtn) return;
    const message = `Hola! Quiero pedir:\n*${currentTitle}*\nTalla: ${selectedSize}\nColor: ${selectedColor}\nPrecio: ${currentPrice}\n\nMe confirmas disponibilidad?`;
    waBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

function openModal(id) {
    const product = PRODUCTS.find(p => p.id === id);

    selectedSize = 'No seleccionada';
    selectedColor = 'No seleccionado';

    currentTitle = product.title;
    currentPrice = product.price;
    document.getElementById('m-title').textContent = currentTitle;
    document.getElementById('m-price').textContent = currentPrice;
    document.getElementById('m-desc').innerHTML = product.desc;

    // GENERAR CARRUSEL Y PUNTITOS
    const dotsEl = document.getElementById('carousel-dots');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    if (carouselEl && dotsEl) {
        const imagesArray = Array.isArray(product.img) ? product.img : [product.img];
        
        // Inyectar imágenes
        carouselEl.innerHTML = imagesArray.map(imgSrc => `
            <div class="snap-center shrink-0 w-full aspect-[4/5] relative rounded-2xl overflow-hidden border border-gray-800">
                <img src="${imgSrc}" class="absolute inset-0 w-full h-full object-cover pointer-events-none">
            </div>
        `).join('');

        // Lógica de Puntitos y Flechas
        if (imagesArray.length > 1) {
            // Mostrar botones en PC
            if(btnPrev) btnPrev.classList.remove('pointer-events-none');
            if(btnNext) btnNext.classList.remove('pointer-events-none');

            // Crear puntitos
            dotsEl.innerHTML = imagesArray.map((_, i) => `
                <div class="w-2 h-2 rounded-full transition-colors duration-300 ${i === 0 ? 'bg-olympus-dorado' : 'bg-gray-600'}" id="dot-${i}"></div>
            `).join('');
            
            // Actualizar puntitos al hacer scroll
            carouselEl.onscroll = () => {
                const scrollPos = carouselEl.scrollLeft;
                const width = carouselEl.clientWidth;
                const activeIndex = Math.round(scrollPos / width);
                
                imagesArray.forEach((_, i) => {
                    const dot = document.getElementById(`dot-${i}`);
                    if (dot) {
                        dot.className = `w-2 h-2 rounded-full transition-colors duration-300 ${i === activeIndex ? 'bg-olympus-dorado' : 'bg-gray-600'}`;
                    }
                });
            };

            // Lógica botones PC
            if(btnNext) btnNext.onclick = () => { carouselEl.scrollBy({ left: carouselEl.clientWidth, behavior: 'smooth' }); };
            if(btnPrev) btnPrev.onclick = () => { carouselEl.scrollBy({ left: -carouselEl.clientWidth, behavior: 'smooth' }); };

        } else {
            dotsEl.innerHTML = ''; // Si solo hay 1 foto
            if(btnPrev) btnPrev.classList.add('pointer-events-none');
            if(btnNext) btnNext.classList.add('pointer-events-none');
        }
    }

    // GENERAR BOTONES DE TALLAS
    const sizeContainer = document.getElementById('size-selector');
    if (sizeContainer && product.tallas) {
        sizeContainer.innerHTML = product.tallas.map(talla => `
            <button class="size-btn flex-1 min-w-[3rem] border border-gray-600 py-2 px-3 rounded-xl text-sm font-medium hover:border-olympus-gold transition-colors text-white" onclick="selectSize(this)">${talla}</button>
        `).join('');
    } else if (sizeContainer) {
        sizeContainer.innerHTML = `<p class="text-gray-500 text-sm italic">Única</p>`;
    }

    // GENERAR BOTONES DE COLORES
    const colorContainer = document.getElementById('color-selector');
    if (colorContainer && product.colores) {
        colorContainer.innerHTML = product.colores.map(c => {
            let borderClass = c.hex.toUpperCase() === '#FFFFFF' ? 'border-gray-300' : 'border-gray-500';
            return `<button class="color-btn w-10 h-10 rounded-full border-2 ${borderClass} ring-2 ring-transparent transition-all" style="background-color: ${c.hex};" data-color="${c.name}" onclick="selectColor(this)"></button>`;
        }).join('');

        if (product.colores.length === 1) {
            const unicoBoton = colorContainer.querySelector('.color-btn');
            if (unicoBoton) selectColor(unicoBoton);
        }
    }

    updateWaLink();

    if (modalOverlay && bottomSheet) {
        modalOverlay.classList.remove('hidden');
        setTimeout(() => {
            modalOverlay.classList.remove('opacity-0');
            bottomSheet.classList.remove('translate-y-full');
        }, 10);
    }
}

function closeModal() {
    if (bottomSheet && modalOverlay) {
        bottomSheet.classList.add('translate-y-full');
        modalOverlay.classList.add('opacity-0');
        setTimeout(() => {
            modalOverlay.classList.add('hidden');
        }, 300);
    }
}

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

// 6. LEER FILTROS DESDE LA URL (FOOTER)
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const filterFromURL = params.get('filter');

    if (filterFromURL) {
        currentCat = filterFromURL;
        
        document.querySelectorAll('.cat-btn').forEach(b => {
            const isActive = b.getAttribute('data-filter') === currentCat;
            b.className = isActive 
                ? "filter-btn cat-btn snap-start shrink-0 px-4 py-1.5 rounded-lg border border-olympus-blue/50 bg-olympus-blue/10 text-olympus-blue font-medium text-xs transition-colors" 
                : "filter-btn cat-btn snap-start shrink-0 px-4 py-1.5 rounded-lg border border-gray-800 bg-olympus-card text-gray-400 hover:text-white text-xs transition-colors";
        });
    }

    if (typeof renderGrid === 'function') {
        renderGrid();
    }
});
