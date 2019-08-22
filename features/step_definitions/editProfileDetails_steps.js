const { client } = require('nightwatch-cucumber')
const { Given, When, Then } = require('cucumber')
const csslib = require('../helpers/csslib.js')
const profileObj = {} // object is used to memorize the input so they can be evaluated in a different step

Given(/^the user is on the profile page$/, () => {
  return client
    .click(csslib.DashboardElements.userImage())
    .waitForElementVisible(csslib.ProfileElements.personalDetailsSection(), 2000)
    .waitForElementVisible(csslib.ProfileElements.currentAllocationsSection(), 2000)
    .waitForElementVisible(csslib.ProfileElements.childrenSection(), 2000)
})
When(/^the user clicks the edit icon$/, () => {
  return client
    .assert.visible(csslib.ProfileElements.editIconButton())
    .click(csslib.ProfileElements.editIconButton())
})
When(/^enters the following: email:"(.*?)", skype:"(.*?)", company phone number:"(.*?)", personal phone number:"(.*?)", car number:"(.*?)"$/, (email, skype, companyPhone, personalPhone, carNumber) => {
  // memorizing inputs
  profileObj.email = email
  profileObj.skype = skype
  profileObj.companyPhone = companyPhone
  profileObj.personalPhone = personalPhone
  profileObj.carNumber = carNumber
  // end
  return client
    .clearValue(csslib.ProfileElements.emailInput())
    .clearValue(csslib.ProfileElements.skypeInput())
    .clearValue(csslib.ProfileElements.companyPhoneInput())
    .clearValue(csslib.ProfileElements.personalPhoneInput())
    .clearValue(csslib.ProfileElements.carNumberInput())
    .setValue(csslib.ProfileElements.emailInput(), email)
    .setValue(csslib.ProfileElements.skypeInput(), skype)
    .setValue(csslib.ProfileElements.companyPhoneInput(), companyPhone)
    .setValue(csslib.ProfileElements.personalPhoneInput(), personalPhone)
    .setValue(csslib.ProfileElements.carNumberInput(), carNumber)
})
When(/^the user clicks the "Save" button$/, () => {
  return client
    .assert.visible(csslib.ProfileElements.saveButton())
    .click(csslib.ProfileElements.saveButton())
    .pause(2000)
})
Then(/^the information entered should appear on the profile$/, () => {
  // values in DOM are compared with the memorized input values
  client.expect.element(csslib.ProfileElements.email()).text.to.not.equal(profileObj.email)
  client.expect.element(csslib.ProfileElements.skype()).text.to.equal(profileObj.skype)
  client.expect.element(csslib.ProfileElements.companyPhone()).text.to.equal(profileObj.companyPhone)
  client.expect.element(csslib.ProfileElements.personalPhone()).text.to.equal(profileObj.personalPhone)
  return client.expect.element(csslib.ProfileElements.carNumber()).text.to.equal(profileObj.carNumber)
})
