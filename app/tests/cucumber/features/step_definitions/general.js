(function () {

  'use strict';

  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.Given(/^I sign up$/, function () {
      return this.ddp.callAsync('userResetAndSignUp', []);
    });

    this.Given(/^I log in$/, function () {
      return this.browser
        .click('#login-dropdown-list a')
        .setValue('#login-email', 'cucumber@cucumber.com')
        .setValue('#login-password', 'cucumber')
        .click("button#login-buttons-password");
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
      // WebdriverIO supports Promises/A+ out the box, so you can return that too
      return this.browser. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
        url(url.resolve(process.env.HOST, relativePath)); // process.env.HOST always points to the mirror
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
      // you can use chai-as-promised in step definitions also
      return this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle);
    });

    this.Then(/^take screenshot$/, function () {
      return this.browser.
        saveScreenshot('/Users/baraza/dev/personalbrand/tmp/snapshot.png');
    });

  };

})();
