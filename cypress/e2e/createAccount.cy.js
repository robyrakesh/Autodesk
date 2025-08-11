/// <reference types="cypress" />

import { homePage, createAccountPage } from '../pages/index'
import { userDetails, generateRandomEmail } from '../fixtures/test_data'

describe('Validate creating an account', function() {
  beforeEach(function()  {
    cy.visit('/', { failOnStatusCode: false })
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

  

