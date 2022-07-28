describe('Upload Avatar', () => {
  before(() => {
    const qaemail = 'cuevadaniel1+leadqahw@gmail.com'
    const qapassword = 'Password1'

    cy.visitThis('https://www.getcloudapp.com/login')
    cy.signIn(qaemail, qapassword)

    cy.visitThis('https://share.getcloudapp.com/organizations/WjFZkJAl/account/settings#profile')
})
    
  it('lets user update avatar', () => {
    const picture = 'Picture.jpg'

    cy.get('#user_avatar')
      .attachFile(picture)
    cy.get('[data-testid="onboarding-submit-about-you-form"]')
        .click()
        
    cy.contains('Account updated successfully')
  })
})
