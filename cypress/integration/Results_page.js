describe('User flows via results page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character', {
      statusCode: 201,
      body: [{
        name: 'Rick',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }]
    })
    cy.visit('http://localhost:3000/Results')
  });

  it('Should confirm that true is equal to true', () => {
     expect(true).to.equal(true)
   })

  it('should show the title', () => {
  cy.get('.main-title')
})

  it('should display winner image', () => {
    cy.get('backgroundImage').should('be.visible')
  })

  it('should diplay winner name', () => {
    cy.get('character').should('be.visible')
  })

it('Should be able to click on Tke Quiz Again button and page updates URL and displays questions', () => {
    cy.get('.return').click()
    cy.url().should('not.eq', 'http://localhost:3000/Results')
});
})
