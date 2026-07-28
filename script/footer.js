const footerHTML = `
<footer class="bg-olympus-black border-t border-gray-800 pt-16 pb-36 px-4 relative z-10 mt-16">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <!-- 1. LOGO Y SLOGAN -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <span class="font-display text-4xl tracking-widest text-olympus-gold mb-2">OLYMPUS OVERS</span>
            <p class="text-sm text-gray-400 italic">"Naciste para trascender."</p>
        </div>

        <!-- 2. COMPRAR -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 class="font-display text-xl text-white tracking-widest mb-4 uppercase">Comprar</h4>
            <!-- Al dar clic, mandan a index.html y le envían una "señal" en la URL (?filter=...) -->
            <ul class="space-y-3 text-sm text-gray-400">
                <li><a href="catalogo.html?filter=chamarra" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Chamarra</a></li>
                <li><a href="catalogo.html?filter=pans" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Pans</a></li>
                <li><a href="catalogo.html?filter=shorts" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Shorts</a></li>
                <li><a href="catalogo.html?filter=boxfit" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Boxfit</a></li>
                <li><a href="catalogo.html?filter=otro" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Otro</a></li>
            </ul>
        </div>

        <!-- 3. NOSOTROS -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 class="font-display text-xl text-white tracking-widest mb-4 uppercase">Nosotros</h4>
            <ul class="space-y-3 text-sm text-gray-400">
                <!-- Estas secciones viven en contacto.html y nosotros.html -->
                <li><a href="contacto.html#sucursales" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Sucursales</a></li>
                <li><a href="contacto.html#puntos-de-venta" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Puntos de Venta</a></li>
                <li><a href="nosotros.html#faq" class="hover:text-olympus-gold transition-colors uppercase tracking-wider text-xs">Nuestra Historia & FAQs</a></li>
            </ul>
        </div>

        <!-- 4. REDES SOCIALES -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 class="font-display text-xl text-white tracking-widest mb-4 uppercase">Comunidad</h4>
            <a href="https://instagram.com/olympus.overs" target="_blank" class="text-sm text-olympus-gold font-bold mb-4 hover:text-white transition-colors">
                @olympus.overs
            </a>
            <div class="flex gap-4">
                <!-- Instagram -->
                <a href="https://instagram.com/olympus.overs" target="_blank" class="w-10 h-10 bg-olympus-card border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-olympus-gold hover:border-olympus-gold transition-all">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <!-- Facebook -->
                <a href="https://facebook.com/olympus.overs" target="_blank" class="w-10 h-10 bg-olympus-card border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-olympus-gold hover:border-olympus-gold transition-all">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <!-- TikTok -->
                <a href="https://tiktok.com/@olympus.overs" target="_blank" class="w-10 h-10 bg-olympus-card border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-olympus-gold hover:border-olympus-gold transition-all">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.97-1.84 5.42-1.46 1.57-3.66 2.38-5.79 2.06-2.58-.38-4.72-2.39-5.26-4.96-.5-2.36.04-4.88 1.54-6.68 1.41-1.68 3.59-2.53 5.72-2.34v4.06c-1.17-.18-2.43.08-3.23.95-.91.98-1.07 2.5-.4 3.65.65 1.12 1.93 1.63 3.16 1.48 1.34-.16 2.34-1.28 2.38-2.64V.02z"/></svg>
                </a>
            </div>
        </div>
    </div>
    
    <div class="max-w-5xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center">
        <p class="text-[10px] text-gray-600 uppercase tracking-widest">© 2026 Olympus Overs. Todos los derechos reservados.</p>
    </div>
</footer>
`;

// Insertar el HTML dentro del contenedor reservado
document.getElementById('footer-container').innerHTML = footerHTML;