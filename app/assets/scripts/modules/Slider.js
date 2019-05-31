import Swiper from 'swiper';

class Sliders {
    constructor() {
        this.initializeSlider1();
        this.initializeSlider2();
        this.initializeSlider3();
    }

    initializeSlider1() {
        let mySwiper1 = new Swiper('.swiper-1', {
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: {
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              530: {
                slidesPerView: 1,
                spaceBetween: 0,
              }
            },
            navigation: {
                nextEl: '.swiper-button-next-1',
                prevEl: '.swiper-button-prev-1',
            },
        });
    }

    initializeSlider2() {
        let mySwiper2 = new Swiper('.swiper-2', {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next-2',
                prevEl: '.swiper-button-prev-2',
            },
        });
    }

    initializeSlider3() {
        let mySwiper3 = new Swiper('.swiper-3', {
            slidesPerView: 4,
            spaceBetween: 50,
            themeColor: '#1f252a',
            breakpoints: {
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              530: {
                slidesPerView: 1,
                spaceBetween: 0,
              }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
              
        });
    }
}

export default Sliders;





