// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom visit command with retry logic for network failures
Cypress.Commands.add('visitWithRetry', (url, options = {}) => {
  const defaultOptions = {
    failOnStatusCode: false,
    timeout: 120000,
    retryOnNetworkFailure: true
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  return cy.visit(url, mergedOptions).then(() => {
    // Wait for a key element instead of full page load
    cy.get('body', { timeout: 30000 }).should('be.visible');
    // Additional wait for page to be interactive
    cy.wait(2000);
  });
});