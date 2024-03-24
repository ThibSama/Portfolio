import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

Swiper.use([Autoplay]);
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
  });
});
