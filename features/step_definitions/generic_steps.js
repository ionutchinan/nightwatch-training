const { client } = require('nightwatch-cucumber')
const { Given } = require('cucumber')

Given(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
Given(/^the user is logged in$/, () => {
  return client
    .init()
    .page.background().commands.login()
})
