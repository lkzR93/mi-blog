document.addEventListener('DOMContentLoaded', function() {
    const mybutton = document.getElementById("btn-back-to-top");

    // Cuando el usuario scrollea 20px desde el top, mostrar el botón
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.classList.add("show");
        } else {
            mybutton.classList.remove("show");
        }
    };

    // Cuando el usuario hace click en el botón, scroll al top
    mybutton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}); 