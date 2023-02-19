document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector('nav');
    let boton = document.querySelector('.botoñ');
    if (boton) {
      boton.addEventListener('click', function() {
        nav.classList.toggle('mostrar');
      });
    }
  });
  window.onload = function() {
    var slides = document.querySelectorAll(".mySlides");
    var foto = 0;
    mostrarSlides();

    function mostrarSlides() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        foto++;
        if (foto > slides.length) {
            foto = 1;
        }
        slides[foto - 1].style.display = "block";
        setTimeout(mostrarSlides, 4000); // Cambia la imagen cada 4 segundos
    }
};