const { client } = require('nightwatch-cucumber')
const { Given, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')

Given(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
Given(/^the user is logged in$/, () => {
  client.init().pause(1500)
  client.element('css selector', csslib.TopRightMenuElements.buttonLogout(), (result) => {
    if (result.status > -1) return client.pause(1000)
    else {
      return client
        .clearValue(csslib.LoginElements.usernameInput())
        .setValue(csslib.LoginElements.usernameInput(), 'razvan.vuscan')
        .setValue(csslib.LoginElements.passwordInput(), 'test')
        .click(csslib.LoginElements.buttonLogin())
        .pause(2000)
    }
  })
})
Given(/^the page language is English$/, () => {
  return client
    .click(csslib.TopRightMenuElements.languageSelector())
    .waitForElementVisible(csslib.TopRightMenuElements.selectUS(), 1000)
    .click(csslib.TopRightMenuElements.selectUS())
})
Then(/^the user logs out$/, () => {
  return client.click(csslib.TopRightMenuElements.buttonLogout())
}