const csslib = {
  body: () => 'body',
  LoginElements: {
    usernameInput: () => 'div.field:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    passwordInput: () => 'div.field:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
    buttonLogin: () => 'button.ui',
    errorBlankPassword: () => 'div.ui:nth-child(3)',
    errorInvalidData: () => 'div.ui.inverted.segment.fade.down.visible.transition > span > span'
  },
  DashboardElements: {
    userImage: () => 'img.ui',
    userName: () => 'div[class*="menu "] > div:nth-child(1) > div:first-of-type'
  },
  TopRightMenuElements: {
    buttonLogout: () => 'a.item:nth-child(4) > div:nth-child(2)',
    languageSelector: () => 'div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i',
    selectRO: () => 'div.visible:nth-child(3) > div > i[class="ro flag"]',
    selectUS: () => 'div.visible:nth-child(3) > div > i[class="us flag"]'
  },
  LeftMenuElements: {
    goToDashboard: () => 'a:nth-child(3) > div > i',
    goToTimesheet: () => '.alternate',
    goToTimetracking: () => '.clock',
    goToAbsences: () => '.times',
    goToContacts: () => '.address',
    goToMyAccountSubmenu: () => '.user',
    myAccountCloseSubmenu: () => 'div.active:nth-child(1)',
    goToProfile: () => 'div.active:nth-child(2) > a:nth-child(1) > div:nth-child(1)',
    goToCurriculumvitae: () => 'div.active:nth-child(2) > a:nth-child(2) > div:nth-child(1)',
    goToSkills: () => 'div.active:nth-child(2) > a:nth-child(3) > div:nth-child(1)',
    goToPresetsevents: () => 'div.active:nth-child(2) > a:nth-child(4) > div:nth-child(1)',
    goToCreditpoints: () => 'div.active:nth-child(2) > a:nth-child(5) > div:nth-child(1)',
    goToSurveys: () => '.question',
    goToEvaluationsSubmenu: () => '.chart',
    evaluationsCloseSubmenu: () => 'div.active:nth-child(1)',
    goToSelfevaluation: () => 'div.active:nth-child(2) > a:nth-child(1) > div:nth-child(1)',
    goToReceivedevaluations: () => 'div.active:nth-child(2) > a:nth-child(2) > div:nth-child(1)',
    goToProvideevaluations: () => 'div.active:nth-child(2) > a:nth-child(3) > div:nth-child(1)'
  },
  ProfileElements: {
    personalDetailsSection: () => 'div:nth-child(2) > div:nth-child(2) > div:first-child > div:nth-child(2) > div:first-child > div:first-child > div:nth-child(1)',
    currentAllocationsSection: () => 'div:first-child >div:nth-child(2) > div:first-child > div:nth-child(2) > div:nth-child(1)',
    childrenSection: () => 'div.segment:nth-child(2)',
    childrenTableRow: () => 'div.container-fluid:nth-child(3) > div:nth-child(2)',
    childrenTableColumn: () => 'div.container-fluid:nth-child(3) > div:not(:first-child) > div ',
    addChildButton: () => 'div.labeled:nth-child(1) > button:nth-child(1)',
    editIconButton: () => 'button.icon',
    email: () => 'div:nth-child(3) > div:nth-child(2) > a:nth-child(1)',
    skype: () => 'div:nth-child(4) > div:nth-child(2) > a:nth-child(1)',
    companyPhone: () => 'div:nth-child(5) > div:nth-child(2) > a:nth-child(1)',
    personalPhone: () => 'div:nth-child(6) > div:nth-child(2) > a:nth-child(1)',
    carNumber: () => 'div:nth-child(7) > div:nth-child(2)',
    emailInput: () => 'div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    skypeInput: () => 'div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    companyPhoneInput: () => 'div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    personalPhoneInput: () => 'div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    carNumberInput: () => 'div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
    saveButton: () => 'button.fluid',
    addChildFlexbox: () => '.page',
    childFirstName: () => 'div.field:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
    childLastName: () => 'div.field:nth-child(4) > div:nth-child(1) > input:nth-child(1)',
    childGenderMakeEditable: () => 'div.field:nth-child(6)',
    childGenderTextInput: () => 'input.search',
    childBirthdate: () => 'input[name="birthdate"]',
    saveChildButton: () => '.form-button'
  },
  SearchContactsElements: {
    contactsSection: () => 'div.container-fluid:nth-child(3)',
    searchInput: () => 'div > div> div:nth-child(1) > input',
    searchButton: () => 'button.icon',
    showAdvancedFiltersButton: () => 'div:nth-child(3) > button',
    clearFields: () => 'div:nth-child(4) > button',
    resultNames: () => 'div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:first-child',
  },
  ContactDetailsElements: {
    departmentName: () => 'div:nth-child(2) > div:nth-child(10)'
  }
}
module.exports = csslib
