document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const darkTheme = document.querySelector('link[href*="dark-theme"]');
    const lightTheme = document.querySelector('link[href*="light-theme"]');
    
    // Cargar preferencia guardada
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        document.body.classList.remove('bg-dark', 'text-white');
        document.body.classList.add('bg-light', 'text-dark');
    }

    themeToggle.addEventListener('click', function() {
        const isDark = !darkTheme.disabled;
        
        darkTheme.disabled = isDark;
        lightTheme.disabled = !isDark;
        
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        
        document.body.classList.toggle('bg-dark');
        document.body.classList.toggle('text-white');
        document.body.classList.toggle('bg-light');
        document.body.classList.toggle('text-dark');
        
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
}); 