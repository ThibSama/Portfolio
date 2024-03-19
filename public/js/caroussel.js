import Swiper from "/node_modules/swiper/swiper-bundle.min.mjs";

document.addEventListener("DOMContentLoaded", function () {
  // Initialiser Swiper
  var mySwiper = new Swiper(".swiper-container", {
    // Paramètres du carrousel
    slidesPerView: 1, // Nombre de slides visibles à la fois
    spaceBetween: 30, // Espace entre les slides
    loop: true, // Activer le mode boucle
    autoplay: {
      delay: 2000, // Délai de 2 secondes entre chaque slide
    },
  });
});
