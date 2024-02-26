document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "/images/competences/composer.webp",
    "/images/competences/css.webp",
    "/images/competences/docker.webp",
    "/images/competences/github.webp",
    "/images/competences/html.webp",
    "/images/competences/java.webp",
    "/images/competences/js.webp",
    "/images/competences/mysql.webp",
    "/images/competences/nodejs.webp",
    "/images/competences/npm.webp",
    "/images/competences/php.webp",
    "/images/competences/python.webp",
    "/images/competences/symfony.webp",
    "/images/competences/tailwindcss.webp ",
  ];

  // Fonction pour ajouter des images à un carrousel
  function addImagesToCarousel(carouselSelector, images) {
    images.forEach((image) => {
      const imgElement = `<div><img src="${image}" alt="Image"></div>`;
      $(carouselSelector).append(imgElement);
    });
  }

  // Ajoutez des images à chaque carrousel
  addImagesToCarousel("#carousel1", images);
  addImagesToCarousel("#carousel2", images);
  addImagesToCarousel("#carousel3", images);

  // Configuration des carrousels
  setupCarousel("#carousel1", true, 2000);
  setupCarousel("#carousel2", false, 2000);
  setupCarousel("#carousel3", true, 3000);
});

function setupCarousel(selector, reverse, speed) {
  $(selector).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: speed,
    rtl: reverse,
  });
}
