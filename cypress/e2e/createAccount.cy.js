/// <reference types="cypress" />

import { homePage, createAccountPage } from '../pages/index'
import { userDetails, generateRandomEmail } from '../fixtures/test_data'

describe('Validate creating an account', function() {
  beforeEach(function()  {
    // Simple approach - just visit with failOnStatusCode false
    cy.visit('/', { 
      failOnStatusCode: false,
      timeout: 120000
    });
    
    // Wait for page to be ready without relying on load event
    cy.get('body', { timeout: 30000 }).should('be.visible');
    cy.wait(3000); // Give extra time for page to stabilize
  })

  it('Verify that the account is created successfully - Fill in all the required fields', function() {
    userDetails.email = generateRandomEmail()
    homePage.navigateToCreateAccount()
    createAccountPage.fillForm(userDetails)
    createAccountPage.submitForm()
    createAccountPage.verifyCaptchaIframe()
  })

  it('Validate the unsuccessful account creation - Leave required fields empty', function(){
    homePage.navigateToCreateAccount()
    createAccountPage.submitForm()
    createAccountPage.validateRequiredFieldError()
  })
})

  

