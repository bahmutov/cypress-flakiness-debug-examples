// https://github.com/bahmutov/cypress-map
import 'cypress-map'
// https://github.com/bahmutov/cypress-if
import 'cypress-if'

it('Activates a subscription', () => {
  cy.visit('/')
  // get all items with data-cy attribute "customer-item"
  // omit all items with data-status attribute "active"
  // sample an item using cy.sample command
  // click on the item
  cy.get('[data-cy=customer-item]')
    // the elements are there, the list will not change
    // thus we can set the timeout to 0
    // to quickly move to the next steps
    .not('[data-status=active]', { timeout: 0 })
    .if('exists')
    .sample()
    .click()
    .then(() => {
      // find the button that contains the text "Activate Subscription"
      // and click on it
      cy.contains('Activate Subscription').click()
      // the page should contain a visible element
      // with text "Subscription was activated"
      cy.contains('Subscription was activated').should('be.visible')
    })
    .else('Could not find inactive subscription')
})
