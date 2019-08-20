const { client } = require('nightwatch-cucumber')
const { Given } = require('cucumber')

Given(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text)
})
