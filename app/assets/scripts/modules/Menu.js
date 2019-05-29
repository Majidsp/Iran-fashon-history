import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Menu {
    constructor() {
        this.menuIcon = $(".app-header__menu-icon");
        this.menuContent = $(".app-menu");
        this.menuItem = $(".app-menu__item");
        this.menuLinks = $(".app-menu a");
        this.pageSections = $(".page-section");
        this.events();
        this.createPageSectionWaypoints();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.menuItem.click(this.closeTheMenu.bind(this));
        console.log(this.pageSections);
        console.log(this.menuLinks);
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("app-menu--is-expanded");
        this.menuIcon.toggleClass("app-header__menu-icon--close-x");
    }

    closeTheMenu() {
        this.menuContent.removeClass("app-menu--is-expanded");
        this.menuIcon.toggleClass("app-header__menu-icon--close-x");
    }

    createPageSectionWaypoints() {
        let that = this;
        this.pageSections.each(function() {
            let currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "down") {
                    let matchingMenuLink = currentPageSection.getAttribute("data-matching-link");
                    that.menuLinks.removeClass("app-menu--is-current-link");
                    $(matchingMenuLink).addClass("app-menu--is-current-link");
                    }
                },
                offset: "40%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "up") {
                    let matchingMenuLink = currentPageSection.getAttribute("data-matching-link");
                    that.menuLinks.removeClass("app-menu--is-current-link");
                    $(matchingMenuLink).addClass("app-menu--is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default Menu;