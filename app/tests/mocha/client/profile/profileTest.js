if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){

    describe("business card", function(){
      it("shows the user's name", function(){
        Meteor.flush();
        chai.assert.equal($(".intro h1").html(), "Carlos Baraza");
      });
    });

  });
}
