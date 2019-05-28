import $ from 'jquery';
import Swiper from 'swiper';

var mySwiper1 = new Swiper('.swiper-1', {
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

var mySwiper2 = new Swiper('.swiper-2', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
});

var mySwiper3 = new Swiper('.swiper-3', {
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


function larger(ev) {
  let target = $(ev.target);
  if($(window).width() > 1200 && target.is(".fourthpage__icon") ) {
    target.parent().addClass('fourthpage__slider--bigger');
    target.parent().children('.fourthpage__description').addClass('fourthpage__description--visible');
  }
}

function smaller(ev) {
  let target = $(ev.target);
  if($(window).width() > 1200 && target.is(".fourthpage__icon") ) {
    target.parent().removeClass('fourthpage__slider--bigger');
    target.parent().children('.fourthpage__description').removeClass('fourthpage__description--visible');
  }
}

$(".fourthpage__icon").mouseover(larger);
$(".fourthpage__icon").mouseout(smaller);

function larger2(ev) {
  let target = $(ev.target);
  if($(window).width() > 1200 && target.is(".ace__img") ) {
    target.addClass('ace__img--bigger');
  }
}

function smaller2(ev) {
  let target = $(ev.target);
  if($(window).width() > 1200 && target.is(".ace__img") ) {
    target.removeClass('ace__img--bigger');
  }
}

$(".ace__img").mouseover(larger2);
$(".ace__img").mouseout(smaller2);

function showMore(ev) {
  let target = $(ev.target);
  if($(window).width() < 1200 && target.is(".fifthpage__small-screen-section-title-and-description__showmore") ) {
    target.parent().addClass('fifthpage__3--not-visible');
    target.parent().parent().find('.fifthpage__4').addClass('fifthpage__4--visible');
  }
}

function showMoreReverse(ev) {
  let target = $(ev.target);
  if($(window).width() < 1200 && target.is(".fifthpage__small-screen-section-title-and-description__showmore--reverse") ) {
    target.parent().parent().find('.fifthpage__4').removeClass('fifthpage__4--visible');
    target.parent().parent().find('.fifthpage__3').removeClass('fifthpage__3--not-visible');
  }
}

$(".fifthpage__small-screen-section-title-and-description__showmore").click(showMore);
$(".fifthpage__small-screen-section-title-and-description__showmore--reverse").click(showMoreReverse);


