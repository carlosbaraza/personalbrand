/*****************************************************************************/
/* AdminDashboard: Event Handlers */
/*****************************************************************************/
Template.AdminDashboard.events({
  'click #cardEdit': function () {
    Router.go('adminCard');
  }
});

/*****************************************************************************/
/* AdminDashboard: Helpers */
/*****************************************************************************/
Template.AdminDashboard.helpers({
});

/*****************************************************************************/
/* AdminDashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminDashboard.created = function () {
};

Template.AdminDashboard.rendered = function () {
};

Template.AdminDashboard.destroyed = function () {
};
