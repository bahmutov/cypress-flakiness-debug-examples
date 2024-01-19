// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it('Activates a subscription', () => {
  cy.visit('/')
  cy.get('[data-cy=customer-item]', { timeout: 11_000 })
    .not('[data-status=active]')
    .sample()
    .click()
  cy.contains('Activate Subscription').click()
  cy.contains('Subscription was activated').should('be.visible')
})
