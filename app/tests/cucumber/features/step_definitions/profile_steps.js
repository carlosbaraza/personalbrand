(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Then(/^I should see the title of "([^"]*)"$/, function (expectedTitle, callback) {
      helper.world.browser.
        title(function (err, res) {
          assert.equal(res.value, expectedTitle);
          callback();
        });
    });

  };
})();
