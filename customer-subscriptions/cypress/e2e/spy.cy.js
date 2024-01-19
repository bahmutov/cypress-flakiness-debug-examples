import spok from 'cy-spok'

const isStatus = (s) =>
  s === 'active' || s === 'inactive' || s === 'trial'

it('spies on the server response', () => {
  // set up the network spy before the page loads
  cy.intercept('GET', '/api/subscriptions').as('subscriptions')
  cy.visit('/')
  cy.wait('@subscriptions')
    .its('response.body')
    .should('be.an', 'array')
    .its(0, { timeout: 0 })
    // confirm each item can only have these properties
    .should('have.keys', ['id', 'fullName', 'email', 'status'])
    // use cy-spok to check the types of each property
    .and(
      spok({
        id: spok.string,
        fullName: spok.string,
        email: spok.string,
        status: isStatus,
      }),
    )
})
