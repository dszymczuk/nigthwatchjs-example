const appAddress = 'https://www.google.pl/';
const pause = 3000;

module.exports = {
  'Check elements': function(browser) {
    browser
      .url(appAddress)
      .waitForElementVisible('body', 2000);


    browser.assert.elementPresent("#hplogo");
    browser.assert.elementPresent("form");
    browser.assert.elementPresent("input#lst-ib");
    browser.assert.elementPresent("input[name=btnK]");
    browser.assert.elementPresent("input[name=btnI]");

    browser.end();
  },
  'Check input': function(browser) {
    browser
      .url(appAddress)
      .waitForElementVisible('body', 2000)
      .pause(pause);

    browser
      .setValue('input[type=text]', 'Damian Szymczuk')
      .waitForElementVisible('input.lsb', 1000)
      .click('input.lsb');

    browser.pause(pause);

    browser.end();
  },
  'Check if results found': function(browser) {
    browser
      .url(appAddress)
      .waitForElementVisible('body', 2000)
      .pause(pause);

    browser
      .setValue('input[type=text]', 'Damian Szymczuk')
      .waitForElementVisible('input.lsb', 1000)
      .click('input.lsb');

    browser.assert.containsText('div#rso > div',
      'Damian Szymczuk');

    browser.pause(pause);

    browser.end();
  }
};