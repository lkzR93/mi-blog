window.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente");
    const currentMode = localStorage.getItem('darkMode') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌞';
    }

    const toggleButton = document.getElementById('toggle-dark-mode');
    toggleButton.addEventListener('click', () => {
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
});
