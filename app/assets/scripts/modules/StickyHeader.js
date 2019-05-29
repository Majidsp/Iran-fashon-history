import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.appHeader = $(".app-header");
        this.menuContent = $(".app-menu");
        this.menuIcon = $(".app-header__menu-icon");
        this.headerTriggerElement = $("#fourthpage");
        this.createHeaderWaypoint();
        this.moverLinks = $(".smooth-mover");
        this.addSmoothScrolling();

    }

    addSmoothScrolling() {
        this.moverLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        let that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.appHeader.addClass("app-header--visible");
                } else {
                    that.appHeader.removeClass("app-header--visible");
                    that.menuContent.removeClass("app-menu--is-expanded");
                    that.menuIcon.removeClass("app-header__menu-icon--close-x");
                } 
            },
            offset: "10%"
        });
    }
}

export default StickyHeader;