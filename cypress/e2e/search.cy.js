/// <reference types="cypress" />

import { homePage } from '../pages/index'

describe('Validate Search', function() {
  beforeEach(function()  {
    cy.intercept('GET', 'https://beehive.autodesk.com/community/service/rest/uh/v1/**').as('search')
    cy.visit('/', { failOnStatusCode: false })
  })

  it('Validate search functionality - provide a search term', function() {
    homePage.search('states')
    cy.wait('@search').its('response.statusCode').should('eq', 200)
    homePage.verifySearchResults('state')
  })
})