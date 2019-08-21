const csslib = {
  body: () => 'body',
  LoginElements: {
    usernameInput: () => 'div.field:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    passwordInput: () => 'div.field:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
    buttonLogin: () => 'button.ui',
    errorBlankPassword: () => 'div.ui:nth-child(3)',
    errorInvalidData: () => '._2s8_B'
  },
  DashboardElements: {
    userImage: () => 'img.ui',
    userName: () => '._3s35j'
  },
  TopRightMenuElements: {
    buttonLogout: () => '.log.out.icon'
  },
  LeftMenuElements: {
    goToDashboard: () => 'a:nth-child(3) > div > i',
    goToTimesheet: () => '._1gq2q > a:nth-child(3) > div:nth-child(1)',
    goToTimetracking: () => '._1gq2q > a:nth-child(4) > div:nth-child(1)',
    goToAbsences: () => '._1gq2q > a:nth-child(5) > div:nth-child(1)',
    goToContacts: () => 'a.RE9mw:nth-child(6) > div:nth-child(1)',
    goToMyAccountSubmenu: () => '.user',
    myAccountCloseSubmenu: () => 'div.active:nth-child(1)',
    goToProfile: () => 'div.active:nth-child(2) > a:nth-child(1) > div:nth-child(1)',
    goToCurriculumvitae: () => 'div.active:nth-child(2) > a:nth-child(2) > div:nth-child(1)',
    goToSkills: () => 'div.active:nth-child(2) > a:nth-child(3) > div:nth-child(1)',
    goToPresetsevents: () => 'div.active:nth-child(2) > a:nth-child(4) > div:nth-child(1)',
    goToCreditpoints: () => 'div.active:nth-child(2) > a:nth-child(5) > div:nth-child(1)',
    goToSurveys: () => 'a.RE9mw:nth-child(8) > div:nth-child(1)',
    goToEvaluationsSubmenu: () => '.chart',
    evaluationsCloseSubmenu: () => 'div.active:nth-child(1)',
    goToSelfevaluation: () => 'div.active:nth-child(2) > a:nth-child(1) > div:nth-child(1)',
    goToReceivedevaluations: () => 'div.active:nth-child(2) > a:nth-child(2) > div:nth-child(1)',
    goToProvideevaluations: () => 'div.active:nth-child(2) > a:nth-child(3) > div:nth-child(1)'
  },
  ProfileElements: {
    personalDetails: () => '.col-lg-5',
    currentAllocations: () => 'div.col-xs-12:nth-child(2)',
    editIconButton: () => 'button.icon',
    email: () => 'div:nth-child(3) > div:nth-child(2) > a:nth-child(1)',
    skype: () => 'div:nth-child(4) > div:nth-child(2) > a:nth-child(1)',
    companyPhone: () => 'div:nth-child(5) > div:nth-child(2) > a:nth-child(1)',
    personalPhone: () => 'div:nth-child(6) > div:nth-child(2) > a:nth-child(1)',
    carNumber: () => '.\_2jxDh:nth-child(7) > .col-xs-9',
    emailInput: () => 'div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    skypeInput: () => 'div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    companyPhoneInput: () => 'div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    personalPhoneInput: () => 'div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    carNumberInput: () => 'div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    saveButton: () => 'button.fluid'
  }
}
module.exports = csslib
