describe('User flows via main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

    it('Should confirm that true is equal to true', () => {
       expect(true).to.equal(true)
     });

    it('should show the title', () => {
    cy.get('header')
  });

    it('Should be able to click on start button and page updates URL and displays questions', () => {
        cy.get('.start-button').click()
        cy.url().should('not.eq', 'http://localhost:3000')
    });
})
