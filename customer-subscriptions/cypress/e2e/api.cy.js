import spok from 'cy-spok'

const isStatus = (s) =>
  s === 'active' || s === 'inactive' || s === 'trial'

it('responds with a subscription object', () => {
  cy.request('/api/subscriptions/')
    .its('body')
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
