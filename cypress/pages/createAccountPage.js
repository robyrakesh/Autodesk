/// <reference types="Cypress" />

const FIRST_NAME = '#firstname_str'
const LAST_NAME = '#lastname_str'
const EMAIL = '#email_str'
const CONFIRM_EMAIL = '#confirm_email_str'
const PASSWORD = '#password'
const AGREE_CHECKBOX = '#privacypolicy_checkbox_container'
const SUBMIT = '.button-text'
const DONE = '#bttnAccountVerified'
const SIGN_IN = '[data-testid="uh-me-menu-avatar-image"]'
const USER_NAME = '[data-testid="uh-me-menu-popover-user-name"]'
const ERROR = '.field-validation-error'


export default class createAccountPage {

  static fillForm({firstName, lastName, email, password}) {
    cy.get(FIRST_NAME).type(firstName)
    cy.get(LAST_NAME).type(lastName)
    cy.get(EMAIL).type(email)
    cy.get(CONFIRM_EMAIL).type(email)
    cy.get(PASSWORD).type(password)
    cy.get(AGREE_CHECKBOX).within(() => {
      cy.get('#privacypolicy_checkbox').click({force: true});
    })
    
  }

  static verifyAccountCreated({firstName, lastName}) {
    cy.get('.msg').should('have.text','Account created')
    cy.get(DONE).click()
    cy.get(SIGN_IN).click()
    cy.get(USER_NAME).contains(firstName + ' ' + lastName)
  }

  static submitForm() {
    cy.get(SUBMIT).click()
  }

  static validateRequiredFieldError() {
    for(let i = 0; i < 4 ; i ++) {
      cy.get(ERROR).eq(i).should('include.text', 'Please enter')
    }
    cy.get('.passwordHintPopup').should('be.visible')
  }
  
}
