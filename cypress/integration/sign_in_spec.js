describe('Sign In Form', () => {
    before(() => {
      cy.visitThis('https://www.getcloudapp.com/login')
    })
  
    it('lets user sign in', () => {
      cy.get('[data-testid="regular-login-email"]')
        .type('cuevadaniel1+leadqahw@gmail.com')
  
      cy.get('#password')
        .type('Password1')
  
      cy.get('[data-testid="regular-login-password"]')
        .click()
      cy.get('[data-testid="regular-login-submit"]')
        .click()

      cy.contains('Welcome back')
      cy.url().should('include', '/dashboard')
    })
  })
  