/// <reference types="cypress" />

import { homePage, createAccountPage } from '../pages/index'
import { userDetails, generateRandomEmail } from '../fixtures/test_data'

  describe('Validate creating an account', function() {
    beforeEach(function()  {
      cy.visit('/')
    })

    it('Verify that the account is created succesfully - Fill in all the required fields', function() {
      userDetails.email = generateRandomEmail()
       homePage.navigateToCreateAccount()
       createAccountPage.fillForm(userDetails)
       createAccountPage.submitForm()
       createAccountPage.verifyAccountCreated(userDetails)
    })

    it('Validate the unsuccesful account creation - Leave required fields empty', function(){
      homePage.navigateToCreateAccount()
      createAccountPage.submitForm()
      createAccountPage.validateRequiredFieldError()
    })

  })

  

