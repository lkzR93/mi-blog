/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {
    // Detectar el tema actual
    const currentMode = localStorage.getItem('darkMode') || 'light'; // Por defecto, modo claro

    // Aplica el tema guardado
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌞'; // Cambiar icono a modo claro
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌙'; // Cambiar icono a modo oscuro
    }

    // Obtener el botón de alternancia de modo
    const toggleButton = document.getElementById('toggle-dark-mode');

    // Alternar entre el modo claro y oscuro
    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.getElementById('toggle-dark-mode').textContent = '🌙'; // Mostrar el ícono de luna
            localStorage.setItem('darkMode', 'light'); // Guardar preferencia en localStorage
        } else {
            document.body.classList.add('dark-mode');
            document.getElementById('toggle-dark-mode').textContent = '🌞'; // Mostrar el ícono de sol
            localStorage.setItem('darkMode', 'dark'); // Guardar preferencia en localStorage
        }
    });

    // Código de scroll para el navbar
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
});
