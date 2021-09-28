describe('User flows via results page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Results');
  });

  it('Should confirm that true is equal to true', () => {
     expect(true).to.equal(true)
   })
   
  it('should show the title', () => {
  cy.get('header')
})
})
