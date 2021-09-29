describe('User flows via results page', () => {
  beforeEach(() => {
      cy.intercept('GET', 'https://rickandmortyapi.com/api/character', { fixture: 'resultInfo.json' })
      cy.visit('http://localhost:3000/')
      cy.wait(1500)
    })

  it('Should confirm that true is equal to true', () => {
     expect(true).to.equal(true)
   })

  it('should show the title', () => {
  cy.get('.main-title')
})

  it('should display winner image', () => {
    cy.getWinner()
    cy.get('.app').should('be.visible')
  })

  it('should diplay winner name', () => {
    cy.getWinner()
    cy.get('.character').should('be.visible')
  })

it('Should be able to click on Tke Quiz Again button and page updates URL and displays questions', () => {
    cy.getWinner()
    cy.get('.return').click()
    cy.url().should('not.eq', 'http://localhost:3000/Results')
});
})
