Cypress.Commands.add('getWinner', () => {
  cy.get('.start-button').click()
  cy.wait(3500)
  cy.get('.questions').first().click()
  cy.get('.questions').first().click()
  cy.get('.questions').first().click()
  cy.get('.questions').first().click()
})
