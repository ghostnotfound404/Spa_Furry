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