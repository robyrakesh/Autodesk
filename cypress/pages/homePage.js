/// <reference types="Cypress" />


const SIGN_IN = '.uh-me-menu-sign-in'
const CREATE_ACCOUNT = '#register_link'
const SEARCH_FIELD = '.bhv-usf-1fph9ax'
const SEARCH_RESULTS = '.bhv-usp-yqrkfw-searchResultsContainerCSS'

export default class homePage {

  static navigateToCreateAccount() {
    cy.get(SIGN_IN).click()
    cy.get('.adsk-header').contains('Sign in').should('be.visible')
    cy.get(CREATE_ACCOUNT).click()
  }

  static search(searchTerm) {
    cy.get(SEARCH_FIELD).click({force:true}).type(searchTerm).type('{enter}')
  }

  static verifySearchResults(searchTerm) {
    cy.get(SEARCH_RESULTS).within(() => {
      cy.get('.bhv-usp-w5ynns-searchResultItem').each((item) => {
        expect(Cypress.$(item).text()).to.include(searchTerm);
      })
    })
    
}
}
