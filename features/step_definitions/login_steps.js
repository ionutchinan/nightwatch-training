const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const utils = require('../helpers/utils.js')
// const expect = require('chai').expect - soon-  if you want to use Chai expects with variables (using them with CSS selectors works by default)

// Common steps begin here
Given(/^the user opens the login page$/, () => {
  return client
    .init()
    .assert.visible(csslib.LoginElements.usernameInput())
    .assert.visible(csslib.LoginElements.passwordInput())
    .assert.visible(csslib.LoginElements.buttonLogin())
    .assert.attributeEquals(csslib.LoginElements.passwordInput(), 'type', 'password')
})
When(/^the user clicks the "Login" button$/, () => {
  return client
    .click(csslib.LoginElements.buttonLogin())
}) // end

// Happy path steps begin here
When(/^the user enters the username:"(.*?)" and the password:"(.*?)"$/, (username, password) => {
  return client
    .pause(2000)
    .setValue(csslib.LoginElements.usernameInput(), username)
    .setValue(csslib.LoginElements.passwordInput(), password)
})

Then(/^the user:"(.*?)" reaches the Dashboard$/, (username) => {
  return client
    .waitForElementVisible(csslib.DashboardElements.userName(), 1000)
    .assert.containsText(csslib.DashboardElements.userName(), utils.getNameFromUsername(username))
    .assert.visible(csslib.TopRightMenuElements.buttonLogout())
    .click(csslib.TopRightMenuElements.buttonLogout())
}) // end

// Invalid path steps begin here
When(/^the user enters the username:"(.*?)" and password:"(.*?)"$/, (username, password) => {
  if (username === 'blank') username = ''
  if (password === 'blank') password = ''
  return client
    .clearValue(csslib.LoginElements.usernameInput())
    .setValue(csslib.LoginElements.usernameInput(), username)
    .setValue(csslib.LoginElements.passwordInput(), password)
})
Then(/^the user gets the following error message:"(.*?)"$/, (message) => {
  return client
    .waitForElementVisible(csslib.LoginElements.errorInvalidData(), 1000)
    .assert.containsText(csslib.LoginElements.errorInvalidData(), message)
    .pause(4000)
}) // end
