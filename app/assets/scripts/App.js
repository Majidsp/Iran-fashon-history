import $ from 'jquery';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
  if($(window).width() > 1200 && target.is(".slider_img") ) {
    target.parent().addClass('swiper-slide--bigger');
    target.parent().children('.slider_description').addClass('slider_description--visible');
  }
}

function smaller(ev) {
  let target = $(ev.target);
  //let elId = target.attr('id');
  if($(window).width() > 1200 && target.is(".slider_img") ) {
    target.parent().removeClass('swiper-slide--bigger');
    target.parent().children('.slider_description').removeClass('slider_description--visible');
  }
}

$(".slider_img").mouseover(larger);
$(".slider_img").mouseout(smaller);

//$(this).parent().children("p.hidden").removeClass("hidden");
