// contains the functions required for the BACKGROUND section in .features ; e.g "Given the user is logged in"
const csslib = require('../page-objects/csslib.js')
module.exports = {
  elements: {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    loginButton: 'input[type="submit"]'
  },
  commands: [
    {
      login: () => { 
        return this.setValue('@username', 'radu.pop').setValue('@password', 'test').click('@loginButton') 
      },
      checkErrorMsgMatch: (selector, msg) => {
        return this
          .waitForElementVisible(selector, 1000)
          .assert.containsText(msg)
          .pause(4000)
      }
    }

  ]
}
// to use declare : const varname = client.page.background()
