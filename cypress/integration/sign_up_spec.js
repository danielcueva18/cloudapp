describe('Sign Up Form', () => {
  before(() => {
    cy.visitThis('https://share.getcloudapp.com/signup')
  })

  it('lets user sign up for an account', () => {
    cy.get('#email')
      .type('cuevadaniel1+leadqahw@gmail.com')

    cy.get('#password')
      .type('Password1')

    cy.get('[data-testid="regular-signup-submit"]')
      .click()
    
    cy.contains('Account created successfully')
  })
})
