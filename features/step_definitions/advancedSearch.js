const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const expect = require('chai').expect
const assert = require('chai').assert
const subsidiaries = ['Bulgaria', 'Computer Solutions B.V.', 'Hungary', 'Romania', 'Republica Moldova', 'Serbia']

When(/^the user clicks the advanced search button$/, () => {
  client.element('css selector', csslib.SearchContactsElements.hideAdvancedFiltersButton(), (result) => {
    if (result.status > -1) return client.pause(500)
    else {
      return client
        .assert.visible(csslib.SearchContactsElements.showAdvancedFiltersButton())
        .click(csslib.SearchContactsElements.showAdvancedFiltersButton())
    }
  })
})
When(/^the user clicks the Subsidiary dropdown$/, () => {
  client
    .waitForElementVisible(csslib.SearchContactsElements.advancedFilterSubsidiary(), 1000)
    .click(csslib.SearchContactsElements.advancedFilterSubsidiary())
    .waitForElementVisible(csslib.SearchContactsElements.filterDropdown(), 1000)
  return client.elements('css selector', csslib.SearchContactsElements.filterDropdownElementText(), results => {
    results.value.forEach(elem => {
      return client.elementIdText(elem.ELEMENT, text => {
        expect(subsidiaries).to.include(text.value)
      })
    })
  })
})
When(/^the user selects "(.*?)"$/, (subsidiary) => {
  return client.elements('css selector', csslib.SearchContactsElements.filterDropdownElementText(), results => {
    results.value.forEach(elem => {
      return client.elementIdText(elem.ELEMENT, text => {
        if (text.value == subsidiary) return client.elementIdClick(elem.ELEMENT)
      })
    })
  })
})
Then(/^the only results shown are the employees belonging to "(.*?)"$/, (subsidiary) => {
  // haven't figured out how to make .(back) work in a loop

  /* let counter = 1 // the counter is used to count the number of pages of results
  for (let i = 1; i <= counter + 1; i++) {
    client.element('css selector', csslib.SearchContactsElements.goToNextPageOfResults(), (result) => { // checking if there is at least a second page of results
      if (result.status > -1) {
        // "next" pagination button is present
        return client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
          counter += Math.floor(results.value.length / 12) // with each new page evaluated add one to the counter (max 12 results per page) -> run another iteration of the for cycle
          results.value.forEach(result => {
            return client.elementIdClick(result.ELEMENT, text => {
              client.pause(1000)
              client.expect.element(csslib.ContactDetailsElements.subsidiaryName()).text.to.equal(subsidiary)
              client.back().pause(1000)
            })
          })
          client.click(csslib.SearchContactsElements.goToNextPageOfResults()) // click on the next page of results
          client.pause(2000) // wait for all elements to load - loading times vary
        })
      } else { // else is to be executed when the number of results does not exceed 12 -> only one page -> next button not visible
        client.elements('css selector', csslib.SearchContactsElements.resultNames(), results => {
          results.value.forEach(result => {
            console.log('each')
            return client.elementIdClick(result.ELEMENT, () => {
              console.log('clicked')
              client.pause(1000)
              client.expect.element(csslib.ContactDetailsElements.subsidiaryName()).text.to.equal(subsidiary)
              return client.back()
            })
          })
        })
      }
    })
  } */
})
