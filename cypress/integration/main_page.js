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

    it('Should display quiz introduction text', () => {
      cy.get('.intro-text')
    })

    it('Should be able to click on answer and next question displays', () => {
        cy.get('.answer-section').click()
        cy.url().should('not.eq', 'http://localhost:3000/HomeQuiz')
    });
})
