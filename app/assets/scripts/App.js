import $ from 'jquery';
import Sliders from './modules/Slider';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Menu from './modules/Menu';


new RevealOnScroll($(".secondpage"), "85%");
new RevealOnScroll($(".thirdpage"), "85%");
const stickyHeader = new StickyHeader();
const menu = new Menu();
const sliders = new Sliders();








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

function larger3(ev) {
  let target = $(ev.target);
  if($(window).width() < 1200 && target.is(".ace__img") ) {
    target.toggleClass('ace__img--bigger');
  }
}

$(".ace__img").mouseover(larger2);
$(".ace__img").mouseout(smaller2);
$(".ace__img").click(larger3);


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


