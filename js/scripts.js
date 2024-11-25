window.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente"); // Verifica carga del JS

    // Verificar si el modo oscuro está activo al cargar la página
    const currentMode = localStorage.getItem('darkMode') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌞';
    }

    // Seleccionar el botón y agregar el evento de click
    const toggleButton = document.getElementById('toggle-dark-mode');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            console.log("Botón presionado"); // Verifica evento click
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'light');
                toggleButton.textContent = '🌙';
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'dark');
                toggleButton.textContent = '🌞';
            }
        });
    } else {
        console.error("Botón de alternar modo oscuro no encontrado.");
    }
});
