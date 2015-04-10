ProfileController = RouteController.extend({
  layoutTemplate: 'ProfileLayout',

  subscriptions: function() {
  },

  show: function() {
    this.render('ProfileShow');
  }
});
