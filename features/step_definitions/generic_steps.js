const { client } = require('nightwatch-cucumber')
const { Given } = require('cucumber')
const csslib = require('../helpers/csslib.js')

Given(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
Given(/^the user is logged in$/, () => {
  return client
    .init()
    .pause(3000)
    .clearValue(csslib.LoginElements.usernameInput())
    .setValue(csslib.LoginElements.usernameInput(), 'radu.pop')
    .setValue(csslib.LoginElements.passwordInput(), 'test')
    .click(csslib.LoginElements.buttonLogin())
    .pause(2000)
})
