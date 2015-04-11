AdminController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  dashboard: function() {
    this.render('AdminDashboard');
  },

  data: function () {
    return {
      navbarFixed: false
    };
  }
});
