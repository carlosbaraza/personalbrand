/*****************************************************************************/
/* Navbar: Event Handlers */
/*****************************************************************************/
Template.Navbar.events({
});

/*****************************************************************************/
/* Navbar: Helpers */
/*****************************************************************************/
Template.Navbar.helpers({
  isFixedClass: function () {
    return this.navbarFixed ? 'navbar-fixed-top' : ''
  }
});

/*****************************************************************************/
/* Navbar: Lifecycle Hooks */
/*****************************************************************************/
Template.Navbar.created = function () {
};

Template.Navbar.rendered = function () {
};

Template.Navbar.destroyed = function () {
};
