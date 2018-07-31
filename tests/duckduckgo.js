const appAddress = 'https://duckduckgo.com/';
const pause = 3000;

module.exports = {
  'Check elements': function(browser) {
    browser
      .url(appAddress)
      .waitForElementVisible('body', 2000);

    browser.assert.elementPresent("#logo_homepage_link");
    browser.assert.elementPresent("form");
    browser.assert.elementPresent("input#search_form_input_homepage");

    browser.pause(pause);

    browser.end();
  },
  'Check input': function(browser) {
    browser
      .url(appAddress)
      .waitForElementVisible('body', 2000)
      .pause(pause);

    browser
      .setValue('input#search_form_input_homepage', 'Damian Szymczuk')
      .waitForElementVisible('input#search_button_homepage', 1000)
      .click('input#search_button_homepage');

    browser.pause(pause);

    browser.end();
  },
  'Check if results found': function(browser) {
    browser
      .url(appAddress)
      .waitForElementVisible('body', 2000)
      .pause(pause);

    browser
      .setValue('input#search_form_input_homepage', 'Damian Szymczuk')
      .waitForElementVisible('input#search_button_homepage', 1000)
      .click('input#search_button_homepage');

    browser.assert.containsText('div#links div#r1-0',
      'Damian Szymczuk');

    browser.pause(pause);

    browser.end();
  }
};