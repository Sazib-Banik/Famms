//  Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Initialize AOS
AOS.init();
// add_part swiper initialize
var swiper = new Swiper(".swiper_card", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});