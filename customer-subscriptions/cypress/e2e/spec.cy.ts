it('Activates a subscription', () => {
  cy.visit('/')
  cy.get('[data-cy=customer-item]', { timeout: 11_000 })
    .not('[data-status=active]')
    .its('length')
    .then((numberOfItems) => {
      const randomItem = Cypress._.random(0, numberOfItems - 1)
      cy.log(`Activating subscription for item #${randomItem}`)
      cy.get('[data-cy=customer-item]').eq(randomItem).click()
    })
  cy.contains('Activate Subscription').click()
  cy.contains('Subscription was activated').should('be.visible')
})
