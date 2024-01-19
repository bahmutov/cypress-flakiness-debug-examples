it('Activates a subscription', () => {
  const randomItem = Cypress._.random(1, 6)

  cy.visit('/')
  cy.get('[data-cy=customer-item]', { timeout: 11_000 })
    .eq(randomItem)
    .click()
  cy.contains('Activate Subscription').click()
  cy.contains('Subscription was activated').should('be.visible')
})
