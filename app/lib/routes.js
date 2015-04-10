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
