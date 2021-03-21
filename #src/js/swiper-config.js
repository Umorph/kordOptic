new Swiper('.merit-slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  watchOverflow: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  breakpoints: {
    675: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    },
    1365: {
      slidesPerView: 4
    }
  }
});
