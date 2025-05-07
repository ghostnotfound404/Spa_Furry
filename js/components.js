// Función para cargar componentes
function loadComponents() {
    // Cargar toolbar
    fetch('components/toolbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });
    
    // Cargar footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .then(() => {
            // Una vez cargados los componentes, inicializar funcionalidades
            if (typeof initMenu === 'function') {
                initMenu();
            }
        });
}

// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', loadComponents);

// Función para el menú móvil
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-links');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            toggle.innerHTML = menu.classList.contains('open') ? '✕' : '☰';
        });
    }
}

// Función para scroll suave
function setupSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') !== 'faq.html') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    setupSmoothScroll();
});