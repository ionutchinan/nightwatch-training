// utils contains useful functions for manipulating the data extracted from the DOM
const utils = {
  getNameFromUsername: function (username) {
    const splitname = username.split('.') // separate the username
    let firstName = splitname[0].toLowerCase() // added because username is case insensitive
    let lastName = splitname[1].toLowerCase() // added because username is case insensitive
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1) // first character made uppercase
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1) // first character made uppercase
    return lastName + ' ' + firstName
  }
}
module.exports = utils
