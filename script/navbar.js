const navbarHTML = `
<style>
    /* ==========================================
       ESTILOS DEL NAVBAR INTACTOS
       ========================================== */
    #olympus-navbar {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        background: rgba(10, 10, 10, 0.75);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-bottom: 1px solid rgba(201, 168, 76, 0.15);
    }

    #olympus-navbar a {
        font-family: 'Bebas Neue', sans-serif;
        text-decoration: none;
        color: #ffffff;
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
        margin: 0 20px;
        text-transform: uppercase;
        opacity: 0.4;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    #olympus-navbar a:hover,
    #olympus-navbar a.active {
        opacity: 1;
        color: #C9A84C; 
        text-shadow: 0 0 12px rgba(201, 168, 76, 0.4);
    }

    @media (max-width: 736px) {
        #olympus-navbar {
            width: 94%;
            height: 65px;
            top: auto;
            bottom: 25px;
            left: 3%;
            border-radius: 40px;
            justify-content: space-evenly;
            border: 1px solid rgba(201, 168, 76, 0.25);
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }
        #olympus-navbar a { margin: 0; font-size: 1rem; letter-spacing: 0.05rem; }
    }

    /* ==========================================
       ANIMACIÓN DE RAYO (RESPLANDOR DEGRADADO)
       ========================================== */
    
    #lightning-container {
        position: fixed;
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh;
        pointer-events: none;
        z-index: 10000;
        opacity: 0; 
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: radial-gradient(circle at 50% 50%, rgba(10, 55, 103, 0) 0%, rgba(0,0,0,0) 100%);
        transition: background 0.1s ease-out;
    }

    .zeus-bolt-svg {
        width: 100%;
        height: 110%;
        min-width: 1000px;
    }

    /* Estructura base de las líneas */
    .zeus-path {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 3000;
        stroke-dashoffset: 3000;
    }

    /* CAPA 1: Resplandor Exterior (Ahora es un DEGRADADO suave) */
    .bolt-glow-outer {
        stroke: #0A3767;
        stroke-width: 6px; /* Lo hicimos mucho más delgado... */
        filter: blur(25px); /* ...pero triplicamos el desenfoque para que se disipe como gas/luz */
        opacity: 0.8;
    }

    /* CAPA 2: Resplandor Interior (Transición media) */
    .bolt-glow-inner {
        stroke: #0A3767; 
        stroke-width: 3px;
        filter: blur(8px);
        opacity: 0.9;
    }

    /* CAPA 3: Núcleo de Plasma (Blanco puro, súper fino) */
    .bolt-core {
        stroke: #ffffff;
        stroke-width: 1.2px;
        filter: blur(0.5px);
    }

    /* Ramificaciones más delgadas */
    .branch { stroke-width: 0.8px !important; opacity: 0.7; }

    /* FASE 1: El rayo baja */
    .is-drawing {
        opacity: 1 !important;
    }
    .is-drawing .zeus-path {
        animation: creep-down 0.3s cubic-bezier(0.2, 0, 0.8, 1) forwards;
    }

    @keyframes creep-down {
        0% { stroke-dashoffset: 3000; opacity: 0.3; }
        100% { stroke-dashoffset: 0; opacity: 0.6; }
    }

    /* FASE 2: El impacto brutal */
    .is-striking {
        opacity: 1 !important;
        background: radial-gradient(circle at 50% 50%, rgba(10, 55, 103, 0.25) 0%, rgba(0,0,0,0) 100%) !important;
    }
    
    .is-striking .zeus-path {
        stroke-dashoffset: 0;
        animation: brutal-strobe 0.2s ease-out forwards;
    }

    @keyframes brutal-strobe {
        0% { opacity: 1; filter: brightness(2); }
        25% { opacity: 0; }
        50% { opacity: 1; filter: brightness(2.5); }
        75% { opacity: 0.2; }
        100% { opacity: 1; filter: brightness(3); }
    }

    /* FASE 3: El Flashbang blanco */
    #whiteout-flash {
        position: fixed;
        top: 0; left: 0; 
        width: 100vw; height: 100vh;
        background-color: #ffffff;
        z-index: 10001; 
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.1s ease-out; 
    }

    .is-whiteout { opacity: 1 !important; }
</style>

<!-- CONTENEDOR DEL RAYO -->
<div id="lightning-container">
    <svg class="zeus-bolt-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        
        <!-- Capa 1: Resplandor difuso extremo (Degradado) -->
        <g class="zeus-path bolt-glow-outer">
            <path d="M 450,0 l 15,40 l -25,50 l 20,35 l -35,60 l 15,70 l -40,65 l 30,90 l -25,60 l 45,95 l -35,80 l 25,75 l -20,80 l 35,90 l -15,70 l 30,85" />
            <path class="branch" d="M 440,245 l -60,40 l 15,30 l -45,50" />
            <path class="branch" d="M 455,550 l 75,35 l -20,40 l 60,45" />
            <path class="branch" d="M 425,835 l -50,60 l 10,40" />
        </g>

        <!-- Capa 2: Transición interior -->
        <g class="zeus-path bolt-glow-inner">
            <path d="M 450,0 l 15,40 l -25,50 l 20,35 l -35,60 l 15,70 l -40,65 l 30,90 l -25,60 l 45,95 l -35,80 l 25,75 l -20,80 l 35,90 l -15,70 l 30,85" />
            <path class="branch" d="M 440,245 l -60,40 l 15,30 l -45,50" />
            <path class="branch" d="M 455,550 l 75,35 l -20,40 l 60,45" />
            <path class="branch" d="M 425,835 l -50,60 l 10,40" />
        </g>

        <!-- Capa 3: Plasma puro (Núcleo) -->
        <g class="zeus-path bolt-core">
            <path d="M 450,0 l 15,40 l -25,50 l 20,35 l -35,60 l 15,70 l -40,65 l 30,90 l -25,60 l 45,95 l -35,80 l 25,75 l -20,80 l 35,90 l -15,70 l 30,85" />
            <path class="branch" d="M 440,245 l -60,40 l 15,30 l -45,50" />
            <path class="branch" d="M 455,550 l 75,35 l -20,40 l 60,45" />
            <path class="branch" d="M 425,835 l -50,60 l 10,40" />
        </g>
    </svg>
</div>

<!-- PANTALLAZO BLANCO -->
<div id="whiteout-flash"></div>

<!-- NAVBAR ORIGINAL -->
<nav id="olympus-navbar">
    <a href="index.html" id="nav-inicio" class="nav-link">Inicio</a>
    <a href="catalogo.html" id="nav-catalogo" class="nav-link">Catálogo</a>
    <a href="nosotros.html" id="nav-nosotros" class="nav-link">Nosotros</a>
    <a href="contacto.html" id="nav-contacto" class="nav-link">Contacto</a>    
</nav>
`;

document.getElementById('navbar-container').innerHTML = navbarHTML;

// ==========================================
// LÓGICA DE TRANSICIÓN PROFESIONAL
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href;
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    if (url.includes('nosotros.html')) document.getElementById('nav-nosotros').classList.add('active');
    else if (url.includes('contacto.html')) document.getElementById('nav-contacto').classList.add('active');
    else if (url.includes('catalogo.html') || url.includes('#catalogo')) document.getElementById('nav-catalogo').classList.add('active');
    else document.getElementById('nav-inicio').classList.add('active');

    // Desvanecer blanco al cargar la nueva página
    const flashScreen = document.getElementById('whiteout-flash');
    flashScreen.classList.add('is-whiteout');
    setTimeout(() => flashScreen.classList.remove('is-whiteout'), 80);

    // Evento Click con orquestación de animaciones
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetUrl = this.getAttribute('href');
            
            const lightning = document.getElementById('lightning-container');
            const flash = document.getElementById('whiteout-flash');

            // FASE 1 (0ms): El rayo baja silenciosamente
            lightning.classList.add('is-drawing');
            
            // FASE 2 (300ms): Contacto y destello
            setTimeout(() => {
                lightning.classList.remove('is-drawing');
                lightning.classList.add('is-striking');
            }, 300);
            
            // FASE 3 (450ms): Flashbang
            setTimeout(() => {
                flash.classList.add('is-whiteout');
            }, 450);
            
            // FASE 4 (650ms): Cambio de URL
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 650); 
        });
    });
});