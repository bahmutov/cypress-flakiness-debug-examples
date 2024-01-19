// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it('Activates a subscription', () => {
  cy.visit('/')
  // get all items with data-cy attribute "customer-item"
  // omit all items with data-status attribute "active"
  // sample an item using cy.sample command
  // click on the item
  cy.get('[data-cy=customer-item]')
    .not('[data-status=active]')
    .sample()
    .click()
  // find the button that contains the text "Activate Subscription"
  // and click on it
  cy.contains('Activate Subscription').click()
  // the page should contain a visible element
  // with text "Subscription was activated"
  cy.contains('Subscription was activated').should('be.visible')
})
