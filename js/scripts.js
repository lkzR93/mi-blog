window.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente"); // Verifica carga del JS

    // Comprobación del botón y su funcionalidad
    const toggleButton = document.getElementById('toggle-dark-mode');
    console.log("Botón encontrado:", toggleButton); // Verifica si el botón es nulo

    if (toggleButton) {
        // Verificar si el modo oscuro está activo al cargar la página
        const currentMode = localStorage.getItem('darkMode') || 'light';
        if (currentMode === 'dark') {
            document.body.classList.add('dark-mode');
            toggleButton.textContent = '🌞'; // Cambio de ícono para modo oscuro
        } else {
            toggleButton.textContent = '🌙'; // Cambio de ícono para modo claro
        }

        // Añadir el evento de click para alternar el modo
        toggleButton.addEventListener('click', () => {
            console.log("Botón presionado"); // Mensaje esperado al hacer clic

            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'light');
                toggleButton.textContent = '🌙'; // Ícono para modo claro
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'dark');
                toggleButton.textContent = '🌞'; // Ícono para modo oscuro
            }
        });
    } else {
        console.error("El botón de alternar modo oscuro no fue encontrado.");
    }
});
