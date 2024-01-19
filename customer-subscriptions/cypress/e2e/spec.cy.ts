// https://github.com/bahmutov/cypress-map
import 'cypress-map'
// https://github.com/bahmutov/cypress-if
import 'cypress-if'

function activateOneSubscription() {
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
}

it('Activates a subscription', () => {
  cy.intercept('GET', '/api/subscriptions', {
    fixture: 'mixed.json',
  }).as('subscriptions')
  activateOneSubscription()
  // confirm the subscription network call happened
  cy.wait('@subscriptions')
})

it('Activates a trial subscription', () => {
  cy.intercept('GET', '/api/subscriptions', {
    fixture: 'trial.json',
  }).as('subscriptions')
  activateOneSubscription()
  // confirm the subscription network call happened
  cy.wait('@subscriptions')
})

it('Does not activate an active subscription', () => {
  cy.intercept('GET', '/api/subscriptions', {
    fixture: 'active-only.json',
  }).as('subscriptions')
  activateOneSubscription()
  // confirm the subscription network call happened
  cy.wait('@subscriptions')
})
