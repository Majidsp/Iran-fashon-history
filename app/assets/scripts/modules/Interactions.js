import $ from 'jquery';

class Interactions {
    constructor() {
        this.icon = $(".fourthpage__icon");
        this.showMoreIcon = $(".fifthpage__small-screen-section-title-and-description__showmore");
        this.showLessIcon = $(".fifthpage__small-screen-section-title-and-description__showmore--reverse");
        this.accesoryIcon = $(".ace__img");
        this.events();
    }

    events() {
        this.icon.mouseover(this.slider1Larger.bind(this));
        this.icon.mouseout(this.slider1Smaller.bind(this));
        this.showMoreIcon.click(this.slider2ShowMoreOnSmallScreen.bind(this));
        this.showLessIcon.click(this.slider2ShowLessOnSmallScreen.bind(this));
        this.accesoryIcon.mouseover(this.accesoriesLargerOnBigScreen.bind(this));
        this.accesoryIcon.mouseout(this.accesoriesSmallerOnBigScreen.bind(this));
        this.accesoryIcon.click(this.accesoryInteractionOnSmallScreen.bind(this));
    }

    slider1Larger(ev) {
        let target = $(ev.target);
        if($(window).width() > 1200 && target.is(this.icon) ) {
          target.parent().addClass('fourthpage__slider--bigger');
          target.parent().children('.fourthpage__description').addClass('fourthpage__description--visible');
        }
    }
      
    slider1Smaller(ev) {
        let target = $(ev.target);
        if($(window).width() > 1200 && target.is(this.icon) ) {
          target.parent().removeClass('fourthpage__slider--bigger');
          target.parent().children('.fourthpage__description').removeClass('fourthpage__description--visible');
        }
    }

    slider2ShowMoreOnSmallScreen(ev) {
        let target = $(ev.target);
        if($(window).width() < 1200 && target.is(this.showMoreIcon) ) {
          target.parent().addClass('fifthpage__3--not-visible');
          target.parent().parent().find('.fifthpage__4').addClass('fifthpage__4--visible');
        }
    }
      
    slider2ShowLessOnSmallScreen(ev) {
        let target = $(ev.target);
        if($(window).width() < 1200 && target.is(this.showLessIcon) ) {
          target.parent().parent().find('.fifthpage__4').removeClass('fifthpage__4--visible');
          target.parent().parent().find('.fifthpage__3').removeClass('fifthpage__3--not-visible');
        }
    }

    accesoriesLargerOnBigScreen(ev) {
        let target = $(ev.target);
        if($(window).width() > 1200 && target.is(this.accesoryIcon) ) {
          target.addClass('ace__img--bigger');
        }
    }

    accesoriesSmallerOnBigScreen(ev) {
        let target = $(ev.target);
        if($(window).width() > 1200 && target.is(this.accesoryIcon) ) {
          target.removeClass('ace__img--bigger');
        }
    }

    accesoryInteractionOnSmallScreen(ev) {
        let target = $(ev.target);
        if($(window).width() < 1200 && target.is(this.accesoryIcon) ) {
          target.toggleClass('ace__img--bigger');
        }
    }
}

export default Interactions;