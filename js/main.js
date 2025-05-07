// Funciones para el menú y FAQ
function initMenu() {
    // Toggle del menú en móviles
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.style.display = 'none';
    mobileMenuButton.style.fontSize = '24px';
    mobileMenuButton.style.cursor = 'pointer';
    mobileMenuButton.style.color = 'white';
    document.querySelector('nav').appendChild(mobileMenuButton);
    
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuButton.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuButton.style.display = 'block';
            navLinks.style.display = 'none';
            navLinks.style.flexDirection = 'column';
            navLinks.style.width = '100%';
            navLinks.style.marginTop = '20px';
        } else {
            mobileMenuButton.style.display = 'none';
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Funcionalidad FAQ
function initFAQ() {
    if (document.querySelector('.faq-question')) {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                answer.classList.toggle('active');
                
                // Cambiar el ícono
                const icon = question.querySelector('.faq-icon');
                if (answer.classList.contains('active')) {
                    icon.textContent = '-';
                } else {
                    icon.textContent = '+';
                }
            });
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Si los componentes ya están cargados (no se usa components.js)
    if (document.querySelector('header')) {
        initMenu();
    }
    initFAQ();
});