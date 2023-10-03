const swiper = new Swiper(".review__swiper", {
  // Optional parameters
  slidesPerView: 1,
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
