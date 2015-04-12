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
          Profiles.insert({
            fullName: 'Carlos Baraza'
          });
          chai.assert.equal(Profiles.find({}).count(), 1);
        });

        it("does not allow the creation of multiple profiles", function () {
          Profiles.insert({
            fullName: 'Carlos Baraza'
          });
          Profiles.insert({
            fullName: 'Carlos Baraza'
          });
          chai.assert.equal(Profiles.find({}).count(), 1);
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

  });
}
