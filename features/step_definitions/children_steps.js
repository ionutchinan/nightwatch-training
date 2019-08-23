const { client } = require('nightwatch-cucumber')
const { When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const expect = require('chai').expect
const utils = require('../helpers/utils.js')
let input = [] // global array used to store the input data for each added child, used to verify if it gets included in the list of children

When(/^the user clicks the "Add" button in the children section$/, () => {
  return client
    .waitForElementVisible(csslib.ProfileElements.addChildButton(), 1000)
    .click(csslib.ProfileElements.addChildButton())
    .waitForElementVisible(csslib.ProfileElements.addChildFlexbox(), 2000)
})
When(/^enters the following: First name:"(.*?)", Last name:"(.*?)", Gender:"(.*?)" and Birthdate:"(.*?)"$/, (firstname, lastname, gender, birthdate) => {
  input = [firstname, lastname, utils.getAge(birthdate)] // memorizing the input data
  return client
    .setValue(csslib.ProfileElements.childFirstName(), firstname)
    .setValue(csslib.ProfileElements.childLastName(), lastname)
    .click(csslib.ProfileElements.childGenderMakeEditable()) // gender field requires one click in order to accept an input
    .pause(2000)
    .setValue(csslib.ProfileElements.childGenderTextInput(), gender)
    .setValue(csslib.ProfileElements.childBirthdate(), birthdate)
})
When(/^the user clicks the "Add" button$/, () => {
  return client
    .assert.visible(csslib.ProfileElements.saveChildButton())
    .click(csslib.ProfileElements.saveChildButton())
    .pause(2000)
})
Then(/^this child should appear in the children section of the profile$/, async () => {
  const children = [] // used to memorize the data from the list of children taken from the DOM
  await client.elements('css selector', csslib.ProfileElements.childrenTableColumn(), output => {
    output.value.forEach(child => {
      client.elementIdText(child.ELEMENT, text => {
        children.push(text.value)
      })
    })
  })
  await expect(children).to.include.members(input) // we verify that the last added child (input) is in the list
})

// the code below looked to search for all children by limiting the search to the children section (versus all the DOM, like the above)
// it does not seem to interate the first forEach  past the first element for some reason

/* return client.elements('css selector', csslib.ProfileElements.childrenTableRow(), result => {
  result.value.forEach(row => {
    return client.elementIdElements(row.ELEMENT, 'css selector', csslib.ProfileElements.childrenTableColumn(), output => {
      output.value.forEach(column => {
        return client.elementIdText(column.ELEMENT, res => {
          children.push(res.value)
        })
      })
    })
  })
})
expect(children).to.include.members(input)
}) */
