// Función para manejar el cambio de tema
function toggleTheme() {
    const darkTheme = document.querySelector('link[href="css/dark-theme.css"]');
    const lightTheme = document.querySelector('link[href="css/light-theme.css"]');
    const themeIcon = document.querySelector('#theme-toggle i');
    
    // Si el tema oscuro está activo
    if (darkTheme.disabled === false) {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}

// Función para cargar el tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const darkTheme = document.querySelector('link[href="css/dark-theme.css"]');
    const lightTheme = document.querySelector('link[href="css/light-theme.css"]');
    const themeIcon = document.querySelector('#theme-toggle i');

    if (savedTheme === 'light') {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Agregar el event listener al botón
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
    loadSavedTheme();
}); 