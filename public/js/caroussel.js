document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: false,
    autoplay: {
      delay: 3000,
    },
    preloadImages: true,
  });
});
