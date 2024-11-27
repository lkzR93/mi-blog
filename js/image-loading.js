document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer para lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const sources = img.parentElement.getElementsByTagName('source');
                
                // Cargar fuentes WebP
                Array.from(sources).forEach(source => {
                    source.srcset = source.dataset.srcset;
                });
                
                // Cargar imagen principal
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    // Observar todas las imágenes con lazy loading
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}); 