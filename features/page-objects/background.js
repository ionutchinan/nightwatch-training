// contains the functions required for the BACKGROUND section in .features ; e.g "Given the user is logged in"
module.exports = {
  elements: {
  },
  commands: [
    {
      login: function () { return this.setValue('@username', 'radu.pop').setValue('@password', 'test').click('@loginButton') }    }
  ]
}
// to use declare : const varname = client.page.background()
