new Swiper('.merit-slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  watchOverflow: true,
  loop: true,
  grabCursor: true,
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

new Swiper('.chronology__mini-slider', {
  slidesPerView: 'auto',
  spaceBetween: 13,
  watchOverflow: true,
  loop: true,
  slideToClickedSlide: true,
  grabCursor: true,
  thumbs: {
    swiper: {
      el: '.chronology__slider',
      slidesPerView: 1,
      touchRatio: 0,
      simulateTouch: false,
    }
  },
  navigation: {
    prevEl: '.chronology__slider-control--prev',
    nextEl: '.chronology__slider-control--next'
  },
  autoplay: {
    delay: 15000,
    disableOnInteraction: false
  },
  breakpoints: {
    675: {
      spaceBetween: 20,
    },
    1020: {
      spaceBetween: 40,
    },
    1365: {
      spaceBetween: 60,
    }
  }
});

