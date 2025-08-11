/// <reference types="cypress" />

import { homePage } from '../pages/index'

describe('Validate Search', function() {
  beforeEach(function()  {
    cy.intercept('GET', 'https://beehive.autodesk.com/community/service/rest/uh/v1/**').as('search')
    
    // Simple approach - just visit with failOnStatusCode false
    cy.visit('/', { 
      failOnStatusCode: false,
      timeout: 120000
    });
    
    // Wait for page to be ready without relying on load event
    cy.get('body', { timeout: 30000 }).should('be.visible');
    cy.wait(3000); // Give extra time for page to stabilize
  })

  it('Validate search functionality - provide a search term', function() {
    homePage.search('states')
    cy.wait('@search').its('response.statusCode').should('eq', 200)
    homePage.verifySearchResults('state')
  })
})