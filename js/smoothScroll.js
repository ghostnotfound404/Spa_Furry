// smoothScroll.js
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los enlaces de la barra de navegación
    const links = document.querySelectorAll('.nav-links a');
    
    // Añadimos un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            
            // Obtener el valor del atributo href (el id de la sección)
            const targetId = link.getAttribute('href').substring(1); // Eliminar el `#`
            const targetSection = document.getElementById(targetId);
            
            // Desplazarse a la sección correspondiente
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Desplazamiento suave
                    block: 'start' // Alineación al inicio de la sección
                });
            }
        });
    });
});
