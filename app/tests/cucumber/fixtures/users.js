(function () {

  'use strict';

  Meteor.methods({
    'userResetAndSignUp' : function() {
      Meteor.users.remove({});

      // Create user
      Accounts.createUser({
        'username'  : 'cucumber',
        'email'     : 'cucumber@cucumber.com',
        'password'  : 'cucumber' //encrypted automatically
      });
    }
  });

})();
