import $ from 'jquery';
import Swiper from 'swiper';

var mySwiper1 = new Swiper('.swiper-1', {
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 3,
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

//$(".slider_img").on('mouseover',function(){
  //if ($(window).width() > 1024) {
    //$(".swiper-slide").addClass("swiper-slide--bigger");
  //}
//});

//$(".slider_img").on('mouseout',function(){
 // if ($(window).width() > 1024) {
   // $(".swiper-slide").removeClass("swiper-slide--bigger");
  //}
//});


function larger(ev) {
  let target = $(ev.target);
  //let elId = target.attr('id');
  if($(window).width() > 1200 && target.is(".slider__img") ) {
    target.parent().addClass('swiper-slide--bigger');
    target.parent().children('.slider__description').addClass('slider__description--visible');
  }
}

function smaller(ev) {
  let target = $(ev.target);
  //let elId = target.attr('id');
  if($(window).width() > 1200 && target.is(".slider__img") ) {
    target.parent().removeClass('swiper-slide--bigger');
    target.parent().children('.slider__description').removeClass('slider__description--visible');
  }
}

$(".slider__img").mouseover(larger);
$(".slider__img").mouseout(smaller);

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

//$(this).parent().children("p.hidden").removeClass("hidden");
