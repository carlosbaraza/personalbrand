Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'show',
  controller: 'ProfileController',
  action: 'show',
  where: 'client'
});


/*****************************************************************************/
/* Admin */
/*****************************************************************************/

Router.route('/admin', {
  name: 'adminDashboard',
  controller: 'AdminController',
  action: 'dashboard',
  where: 'client'
});
