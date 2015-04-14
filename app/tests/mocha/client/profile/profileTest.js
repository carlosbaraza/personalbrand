if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    before(function (done) {
      // Create user
      Accounts.createUser({
        'username'  : 'cucumber',
        'email'     : 'cucumber@cucumber.com',
        'password'  : 'cucumber' //encrypted automatically
      });

      Meteor.loginWithPassword('cucumber@cucumber.com', 'cucumber');
      Meteor.flush();
      done();
    });

    describe("profile", function () {

      describe("when user signs up", function(){

        it("is not created yet", function(){
          chai.assert.equal(Profiles.find({}).count(), 0);
        });

        it("allows the creation of a profile", function () {
          createValidProfile();
          chai.assert.equal(Profiles.find({}).count(), 1);
        });

        it("does not allow the creation of multiple profiles", function () {
          createValidProfile();
          createValidProfile();
          chai.assert.equal(Profiles.find({}).count(), 1);
        });

      });

      xit("validates the userId", function () {
        Profiles.insert({
          fullName: 'Carlos Baraza'
        }, function (err) {
          chai.assert.not_equal(err, undefined);
        });
      });

      xit("stores the userId", function () {});

    });

    afterEach(function () {
      var docs = null;
      Tracker.nonreactive(function () {
        docs = Profiles.find({}).fetch();
      });
      _.each(docs, function (doc) {
        Profiles.remove(doc._id);
      });
    });

    createValidProfile = function (callback) {
      errors = null;
      Profiles.insert({
        fullName: "Carlos Baraza"
      }, function (err) {
        if (typeof callback !== "undefined") callback(err);
        errors = err;
      });
      return errors === undefined;
    }

  });
}
