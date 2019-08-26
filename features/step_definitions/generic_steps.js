const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')

Given(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
Given(/^the user is logged in$/, () => {
  return client
    .init()
    .pause(3000)
    .clearValue(csslib.LoginElements.usernameInput())
    .setValue(csslib.LoginElements.usernameInput(), 'razvan.vuscan')
    .setValue(csslib.LoginElements.passwordInput(), 'test')
    .click(csslib.LoginElements.buttonLogin())
    .pause(2000)
})
Given(/^the page language is English$/, () => {
  return client
    .click(csslib.TopRightMenuElements.languageSelector())
    .waitForElementVisible(csslib.TopRightMenuElements.selectUS(), 1000)
    .click(csslib.TopRightMenuElements.selectUS())
})
Then(/^the user logs out$/, () => {
  return client.click(csslib.TopRightMenuElements.buttonLogout()).end()
  // after an initial log in step has been run even when a .feature ends the next feature's .init() call will cause (cont.d)
  // the app to redirect to the dashboard page thus making the login step fail
  // simply logging out does not seem to work since it still redirects to the dashboard page (cont.d)
  // .end() solved the issue, allowing all the tests to be run one after another with no skips, with one disadvantage: it closes the browser window
})
