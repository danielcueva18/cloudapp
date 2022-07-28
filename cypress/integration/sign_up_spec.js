describe('Sign Up Form', () => {
  before(() => {
    cy.visitThis('https://share.getcloudapp.com/signup')
  })

  it('lets user sign up for an account', () => {
    const email = 'cuevadaniel1+leadqahw@gmail.com'
    const password = 'Password1'

    cy.get('#email')
      .type(email)
    cy.get('#password')
      .type(password)
    cy.get('[data-testid="regular-signup-submit"]')
      .click()
    
    cy.contains('Account created successfully')
  })
})
