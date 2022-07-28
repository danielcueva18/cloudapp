import 'cypress-file-upload'

Cypress.Commands.add('visitThis', (url, options) => {
    options = options || {}
    
    cy.visit(url)
})

Cypress.Commands.add('signIn', (email, password) => {
  cy.get('[data-testid="regular-login-email"]')
    .type(email)

  cy.get('#password')
    .type(password)

  cy.get('[data-testid="regular-login-password"]')
    .click()
  cy.get('[data-testid="regular-login-submit"]')
    .click()
})