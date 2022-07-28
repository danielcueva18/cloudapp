describe('Sign In Form', () => {
  beforeEach(() => {
    const qaemail = 'cuevadaniel1+leadqahw@gmail.com'
    const qapassword = 'Password1'

    cy.visitThis('https://www.getcloudapp.com/login')
    cy.signIn(qaemail, qapassword)
  })

  context('Test log in feature', () => {        
    it('lets user sign in', () => {
      cy.contains('Welcome back')
      cy.url().should('include', '/dashboard')
    })
  })

  context('Test log out feature', () => {
    it('lets user log out', () => {
      cy.get('#main-menu')
        .click()
        
      cy.get('[data-testid="dropdown-link-sign_out"]')
        .click()

      cy.contains('Welcome back')
      cy.url().should('include', '/login') 
    })
  })
})
  