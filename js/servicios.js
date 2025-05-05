// Función para alternar la visibilidad del contenido del servicio
function toggleServicio(numeroServicio) {
    const servicio = document.querySelectorAll('.servicio-card')[numeroServicio - 1];
    const contenido = servicio.querySelector('.servicio-content');
    const toggle = servicio.querySelector('.servicio-toggle');
    
    contenido.classList.toggle('active');
    
    // Cambiar el ícono
    if (contenido.classList.contains('active')) {
        toggle.textContent = '-';
    } else {
        toggle.textContent = '+';
    }
}

// Inicializar - abrir el primer servicio por defecto
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que los componentes se carguen
    setTimeout(() => {
        const primerServicio = document.querySelector('.servicio-card');
        if (primerServicio) {
            primerServicio.querySelector('.servicio-content').classList.add('active');
            primerServicio.querySelector('.servicio-toggle').textContent = '-';
        }
    }, 100);
});