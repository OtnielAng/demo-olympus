/* ==========================================================
   OLYMPUS OVERS — THEME (Tailwind config unificado)
   Cárgalo SIEMPRE justo después de <script src="https://cdn.tailwindcss.com">
   ========================================================== */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                // Cuerpo / texto funcional
                'sans': ['"Montserrat"', 'sans-serif'],
                // Encabezados (H1, H2, H3, banners)
                'display': ['"League Spartan"', 'sans-serif'],
                // Ediciones especiales / nombres de drops
                'special': ['"Cinzel"', 'serif']
            },
            colors: {
                // ---- Paleta oficial de la guía de marca ----
                'olympus-tan': '#B98E68',
                'olympus-crema': '#EEE9D7',
                'olympus-cafe': '#7D5A46',
                'olympus-negro': '#0B0908',
                'olympus-gris': '#9B9C98',
                'olympus-azul-zeus': '#0A3767',
                'olympus-verde': '#003B28',
                'olympus-dorado': '#E5AA2D',

                'olympus-gold': '#E5AA2D',       // = olympus-dorado (acento principal)
                'olympus-blue': '#0A3767',       // = olympus-azul-zeus
                'olympus-black': '#0B0908',      // = olympus-negro
                'olympus-dark': '#17130F',       // fondo oscuro (negro con tinte café)
                'olympus-card': '#1D1712',       // tarjetas (un poco más claro que dark)
                'olympus-white': '#EEE9D7'       // = olympus-crema (texto claro)
            }
        }
    }
}
