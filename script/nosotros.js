// ==========================================
// OLYMPUS OVERS — Página NOSOTROS
// BASE DE DATOS: RESEÑAS Y PREGUNTAS
// ==========================================

const REVIEWS = [
    { id: 1, name: 'Alejandro M.', rating: 5, text: 'La calidad de la tela es increíble. Es súper pesada y el fit oversize es exactamente como se ve en las fotos. Recomendado 100%.', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'Daniela R.', rating: 4, text: 'Me encantó el diseño de la hoodie. El envío tardó un día más de lo esperado, pero la atención al cliente fue excelente.', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'Carlos T.', rating: 3, text: 'Los mejores shorts para entrenar que he comprado. Súper cómodos y los cierres en las bolsas son un gran plus para no tirar el celular.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop' },
    { id: 4, name: 'Sofía L.', rating: 5, text: 'Compré la playera cropped y se ajusta perfecto. El material se siente premium y no se hace feo después de lavarlo.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { id: 5, name: 'Roberto V.', rating: 4.5, text: 'Muy buenos diseños. La tela es muy gruesa, perfecta para el gym o para salir de noche. Volveré a comprar seguro.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' }
];

const FAQS = [
    { question: '¿Hacen envíos a todo México?', answer: 'Sí, realizamos envíos a toda la República Mexicana. El tiempo estimado de entrega es de 3 a 5 días hábiles dependiendo de tu código postal.' },
    { question: '¿Cómo sé cuál es mi talla correcta?', answer: 'Nuestras prendas tienen un corte oversize por defecto. Si buscas el fit holgado tradicional de la marca, pide tu talla normal. Si prefieres algo más ajustado, pide una talla menos.' },
    { question: '¿Cuáles son los métodos de pago?', answer: 'Aceptamos transferencias bancarias, depósitos en OXXO y pagos con tarjeta mediante enlaces de pago seguros. Todo lo coordinamos directo por WhatsApp.' },
    { question: '¿Aceptan cambios o devoluciones?', answer: 'Sí, tienes hasta 7 días después de recibir tu producto para solicitar un cambio de talla o modelo, siempre y cuando la prenda no esté usada ni lavada.' },
    { question: '¿Venden de mayoreo?', answer: 'Sí, manejamos precios especiales para compras a partir de 10 piezas. Mándanos un mensaje por WhatsApp para enviarte nuestro catálogo de mayoreo.' }
];

// ==========================================
// RENDERIZADO DE RESEÑAS
// ==========================================

// Icono de Rayo SVG (Usado en las calificaciones)
const boltIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" /></svg>`;

function renderReviews() {
    const container = document.getElementById('reviews-container');

    container.innerHTML = REVIEWS.map(review => {
        // Generar los 5 rayos basados en la calificación
        let boltsHtml = '';
        for (let i = 1; i <= 5; i++) {
            const statusClass = i <= review.rating ? 'text-[#4F83CC] glow-azul' : 'text-gray-700';
            boltsHtml += `<span class="${statusClass}">${boltIcon}</span>`;
        }

        return `
        <article class="flex bg-olympus-card rounded-2xl border border-gray-800 overflow-hidden shadow-lg hover:border-olympus-gold/30 transition-colors">
            <!-- 1/3 Imagen -->
            <div class="w-1/3 min-h-[140px] bg-gray-900">
                <img src="${review.img}" alt="${review.name}" class="w-full h-full object-cover">
            </div>
            <!-- 2/3 Contenido -->
            <div class="w-2/3 p-4 flex flex-col justify-center">
                <h3 class="font-bold text-white mb-1">${review.name}</h3>
                <div class="flex gap-1 mb-2">
                    ${boltsHtml}
                </div>
                <p class="text-[11px] md:text-xs text-gray-400 italic">"${review.text}"</p>
            </div>
        </article>
        `;
    }).join('');
}

// ==========================================
// RENDERIZADO DE PREGUNTAS FRECUENTES (Acordeones)
// ==========================================

function renderFaqs() {
    const container = document.getElementById('faq-container');

    container.innerHTML = FAQS.map((faq, index) => {
        return `
        <div class="border-b border-gray-800">
            <button class="w-full py-5 flex justify-between items-center text-left focus:outline-none" onclick="toggleFaq(${index})">
                <span class="font-medium text-white text-sm md:text-base pr-4">${faq.question}</span>
                <!-- Icono Chevron (Flecha) -->
                <svg id="faq-icon-${index}" class="faq-icon w-5 h-5 text-olympus-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div id="faq-content-${index}" class="faq-content">
                <p class="pb-6 text-sm text-gray-400 leading-relaxed pr-4">
                    ${faq.answer}
                </p>
            </div>
        </div>
        `;
    }).join('');
}

// Función para abrir/cerrar los acordeones
function toggleFaq(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);

    // Revisa si ya está abierto
    const isOpen = content.classList.contains('open');

    // Opcional: Cerrar todos los demás antes de abrir el nuevo (comenta este bloque si quieres que se puedan abrir varios a la vez)
    document.querySelectorAll('.faq-content').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('open'));

    // Si no estaba abierto, lo abrimos
    if (!isOpen) {
        content.classList.add('open');
        icon.classList.add('open');
    }
}

// ==========================================
// INICIALIZAR LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderReviews();
    renderFaqs();
});
