const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const expect = require('chai').expect
const assert = require('chai').assert

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
  let count = 0 // the counter is used to count the results, since there is one employee matching, we expect one result
  return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
    results.value.forEach(result => {
      count++
      return client.elementIdText(result.ELEMENT, text => {
        expect(text.value).to.contain(name)
      })
    })
    expect(count).to.equal(1) // we check that only one result has been found
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
Then(/^the only results shown are the ones that have:"(.*?)" in their name$/, (partial) => {
  let counter = 1 // the counter is used to count the number of pages of results
  for (let i = 1; i <= counter + 1; i++) {
    client.element('css selector', csslib.SearchContactsElements.goToNextPageOfResults(), (result) => { // checking if there is at least a second page of results
      if (result.status > -1) {
        // "next" pagination button is present
        return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
          counter += Math.floor(results.value.length / 12) // with each new page evaluated add one to the counter -> run another iteration of the for cycle
          results.value.forEach(result => {
            return client.elementIdText(result.ELEMENT, text => {
              // check if each result contains the input search term, switched everything to lowercase since assert.include seems to be case sensitive
              assert.include(text.value.toLowerCase(), partial.toLowerCase())
            })
          })
          client.click(csslib.SearchContactsElements.goToNextPageOfResults()) // click on the next page of results
          client.pause(2000) // wait for all elements to load - loading times vary
        })
      } else { // else is to be executed when the number of results does not exceed 12 -> only one page -> next button not visible
        return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
          results.value.forEach(result => {
            counter++
            console.log(counter)
            return client.elementIdText(result.ELEMENT, text => {
              expect(text.value).to.contain(partial)
            })
          })
        })
      }
    })
  }
})
