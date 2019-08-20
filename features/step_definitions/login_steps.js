const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../page-objects/csslib.js')
const utils = require('../page-objects/utils.js')
// const expect = require('chai').expect - soon-  if you want to use Chai expects with variables (using them with CSS selectors works by default)
let passIsBlank // bool variable used for a test case that has the app throw an error in a different location than the others

// General steps start here
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
}) // General steps end here

// Happy path steps start here
When(/^the user enters the username:(.*?) and the password:(.*?)$/, (username, password) => {
  return client
    .setValue(csslib.LoginElements.usernameInput(), username)
    .setValue(csslib.LoginElements.passwordInput(), password)
})

Then(/^the user:(.*?) reaches the Dashboard$/, (username) => {
  return client
    .waitForElementVisible(csslib.DashboardElements.userName(), 1000)
    .assert.containsText(csslib.DashboardElements.userName(), utils.getNameFromUsername(username))
    .assert.visible(csslib.TopRightMenuElements.buttonLogout())
    .click(csslib.TopRightMenuElements.buttonLogout())
}) // Happy path steps end here

// Invalid path steps start here
When(/^the user enters the username:(.*?) and password:(.*?)$/, (username, password) => {
  if ((username === 'blank') && (password === 'blank')) {
    username = ''
    password = ''
  } else if (password === 'blank') {
    password = ''
    passIsBlank = true
  }
  return client
    .clearValue(csslib.LoginElements.usernameInput())
    .setValue(csslib.LoginElements.usernameInput(), username)
    .setValue(csslib.LoginElements.passwordInput(), password)
})
Then(/^the user gets an error message$/, () => {
  if (passIsBlank) return client.waitForElementVisible(csslib.LoginElements.errorBlankPassword(), 1000)
  else {return client
    .waitForElementVisible(csslib.LoginElements.errorInvalidData(), 500)
    .pause(4000) // each error thrown lingers on the screen a few seconds
    // pause is added to make sure that the errors thrown by each negative test case are not still visible when the next negative test case is run
  }
}) // Invalid path steps end here
