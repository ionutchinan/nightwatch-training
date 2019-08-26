const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const expect = require('chai').expect

Given(/^the user is on the contacts page$/, () => {
  return client
    .click(csslib.LeftMenuElements.goToContacts())
    .waitForElementVisible(csslib.SearchContactsElements.contactsSection(), 1000)
})
When(/^the user enters:"(.*?)" in the search box$/, (name) => {
  return client
    .assert.visible(csslib.SearchContactsElements.searchInput())
    .setValue(csslib.SearchContactsElements.searchInput(), name)
})
When(/^the user clicks the search button$/, () => {
  return client
    .assert.visible(csslib.SearchContactsElements.searchButton())
    .click(csslib.SearchContactsElements.searchButton())
})
Then(/^the only result shown is the employee:"(.*?)"$/, (name) => {
  let counter = 0 // the counter is used to count the results, since there is one employee matching, we expect one result
  return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
    results.value.forEach(result => {
      counter++
      return client.elementIdText(result.ELEMENT, text => {
        expect(text.value).to.contain(name)
      })
    })
    expect(counter).to.equal(1) // we check that only one result has been found
  })
})
When(/^the user clicks on the result$/, () => {
  return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
    results.value.forEach(result => {
      return client.elementIdClick(result.ELEMENT, callback => {
        client.pause(1000)
      })
    })
  })
})
Then(/^the position listed should be:"(.*?)"$/, (word) => {
  return client.expect.element(csslib.ContactDetailsElements.departmentName()).text.to.equal(word)
})
Then(/^the only results shown are the employees whos names contain:"(.*?)"$/, (partial) => {
  // let counter = 0 // the counter is used to count the results, since there are two employees matching, we expect two results
  return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
    results.value.forEach(result => {
      // counter++
      return client.elementIdText(result.ELEMENT, text => {
        expect(text.value).to.contain(partial)
      })
    })
  })
})
