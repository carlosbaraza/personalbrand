(function () {

  'use strict';

  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.Then(/^I update my name with "([^"]*)"$/, function (name) {
      return this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        setValue('#profileName', name).
        click('#saveCard');
    });

    this.Then(/^I should see the card name "([^"]*)"$/, function (name) {
      return this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        getText('h1', function (err, res) {
          res.should.equal(name);
        });
    });

  };

})();
