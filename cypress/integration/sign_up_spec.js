describe('User Sign Up', () => {
  before(() => {
    cy.visitThis('https://share.getcloudapp.com/signup')
  })

  it('Signs up', () => {
    cy.get('#email')
      .type('cuevadaniel1+leadqahw@gmail.com')

    cy.get('#password')
      .type('Password1')

    cy.get('[data-testid="regular-signup-submit"]')
      .click()
  })
})