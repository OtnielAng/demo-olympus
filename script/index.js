// ==========================================
// OLYMPUS OVERS — Página INICIO
// ==========================================

// Nota: estas líneas usan document.write, tal como en el original.
// Solo funcionan bien porque el <script src="script/index.js">
// se ejecuta durante el parseo del HTML, en el mismo lugar donde
// estaba el <script> inline. No lo cambies de posición en el body.

// Reseña 1: rayo definido aparte (no se usa, pero se deja igual que el original)
const rayoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-olympus-blue"><path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A11.894 11.894 0 0112 18.75c-2.426 0-4.685-.69-6.584-1.87-2.607-1.62-4.908-3.92-6.529-6.528A11.954 11.954 0 01.353 7.822.75.75 0 011.026 6.8c3.048 0 5.86 1.07 8.082 2.873A12.01 12.01 0 019.315 7.584zM12 11.25a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clip-rule="evenodd" /><path d="M11.996 22.5c-1.385 0-2.686-.39-3.799-1.054a10.457 10.457 0 01-4.708-5.326c-.328-.813.435-1.545 1.253-1.196a9.043 9.043 0 005.12 1.34c3.42 0 6.425-1.897 7.973-4.717.387-.704 1.312-.662 1.636.068A10.457 10.457 0 0122.5 12c0 5.799-4.701 10.5-10.504 10.5z" /></svg>`;
for (let i = 0; i < 5; i++) document.write(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-olympus-blue"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" /></svg>`);

// ==========================================
// Modal de producto (el que abre el bloque "Catálogo Preview")
// ==========================================
function closeModal(event) {
    if (event.target.id === 'modal-overlay') {
        document.getElementById('modal-overlay').classList.remove('active');
    }
}
function closeModalDirect() {
    document.getElementById('modal-overlay').classList.remove('active');
}
