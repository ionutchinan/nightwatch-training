const { client } = require('nightwatch-cucumber')
const { Given } = require('cucumber')
const csslib = require('../helpers/csslib.js')

Given(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
Given(/^the user is logged in$/, () => {
  return client
    .init()
    .assert.visible(csslib.LoginElements.usernameInput())
    .assert.visible(csslib.LoginElements.passwordInput())
    .assert.visible(csslib.LoginElements.buttonLogin())
    .assert.attributeEquals(csslib.LoginElements.passwordInput(), 'type', 'password')
    .setValue(csslib.LoginElements.usernameInput(), 'radu.pop')
    .setValue(csslib.LoginElements.passwordInput(), 'test')
    .click(csslib.LoginElements.buttonLogin())
})
