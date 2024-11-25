window.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente");

    // Comprobación del botón y su funcionalidad
    const toggleButton = document.getElementById('toggle-dark-mode');
    console.log("Botón encontrado:", toggleButton);

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            console.log("Botón presionado");

            // Verificar el estado del modo oscuro en el localStorage
            const currentMode = localStorage.getItem('darkMode') || 'light';

            if (currentMode === 'dark') {
                // Eliminar el archivo de modo oscuro y cargar el de modo claro
                document.getElementById('dark-mode-stylesheet').remove();
                localStorage.setItem('darkMode', 'light');
                toggleButton.textContent = '🌙';  // Cambiar el icono del botón
            } else {
                // Crear un nuevo link de modo oscuro
                const darkModeLink = document.createElement('link');
                darkModeLink.id = 'dark-mode-stylesheet'; // Añadir ID para identificar el link
                darkModeLink.rel = 'stylesheet';
                darkModeLink.href = 'css/styles_dark_mode.css'; // Ruta al archivo CSS oscuro

                // Añadir el link del archivo CSS de modo oscuro
                document.head.appendChild(darkModeLink);
                localStorage.setItem('darkMode', 'dark');
                toggleButton.textContent = '🌞';  // Cambiar el icono del botón
            }
        });
    } else {
        console.error("El botón de alternar modo oscuro no fue encontrado.");
    }

    // Verificar si el modo oscuro está activo al cargar la página
    const currentMode = localStorage.getItem('darkMode') || 'light';
    if (currentMode === 'dark') {
        // Si está en modo oscuro, cargar el CSS correspondiente
        const darkModeLink = document.createElement('link');
        darkModeLink.id = 'dark-mode-stylesheet';  // Asignar ID para referencia
        darkModeLink.rel = 'stylesheet';
        darkModeLink.href = 'css/styles_dark_mode.css';  // Ruta al archivo CSS oscuro
        document.head.appendChild(darkModeLink);  // Añadir al <head>
        toggleButton.textContent = '🌞';  // Cambiar el icono del botón
    }
});
