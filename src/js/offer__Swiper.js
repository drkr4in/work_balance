const swiper1 = new Swiper(".offer__swiper", {
    // Optional parameters
    slidesPerView: 1,
    direction: "horizontal",
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: ".offer__s-button-next",
      prevEl: ".offer__s-button-prev",
    },
  });