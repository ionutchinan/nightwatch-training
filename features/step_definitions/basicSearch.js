const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const expect = require('chai').expect

Given(/^the user is on the contacts page$/, () => {
  return client
    .click(csslib.LeftMenuElements.goToContacts())
    .waitForElementVisible(csslib.ContactsElements.contactsSection(), 1000)
})
When(/^the user enters:"(.*?)" in the search box$/, (name) => {
  return client
    .assert.visible(csslib.ContactsElements.searchInput())
    .setValue(csslib.ContactsElements.searchInput(), name)
})
When(/^the user clicks the search button$/, () => {
  return client
    .assert.visible(csslib.ContactsElements.searchButton())
    .click(csslib.ContactsElements.searchButton())
})
Then(/^the only result shown is the employee:"(.*?)"$/, (name) => {
  let counter = 0
  return client.elements('css selector', csslib.ContactsElements.resultName(), results => {
    results.value.forEach(result => {
      counter++
      return client.elementIdText(result.ELEMENT, text => {
        expect(text.value).to.contain(name)
      })
    })
    expect(counter).to.equal(1)
  })
})
