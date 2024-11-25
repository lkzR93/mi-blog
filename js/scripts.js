/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    // Funcionalidad para el desplazamiento de la página (navbar fijo al hacer scroll)
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
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

    // Funcionalidad para alternar entre modo claro y oscuro
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.classList.add("btn", "btn-outline-secondary");
    themeToggle.textContent = "Toggle Theme";
    document.querySelector(".navbar-nav").appendChild(themeToggle);

    const htmlElement = document.documentElement;

    // Cargar el tema guardado
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        htmlElement.classList.add(savedTheme);
    }

    // Alternar entre modos claro y oscuro
    themeToggle.addEventListener("click", () => {
        if (htmlElement.classList.contains("dark-mode")) {
            htmlElement.classList.remove("dark-mode");
            localStorage.setItem("theme", "");
        } else {
            htmlElement.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });
});
