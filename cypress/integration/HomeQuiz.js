describe('User flows via results page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/HomeQuiz');
  });

  it('Should confirm that true is equal to true', () => {
   expect(true).to.equal(true)
 })

  it('should show the title', () => {
  cy.get('header')
  })

  it('should display question', () => {
    cy.get('.question-section').should('be.visible')
  })

  it('should display question counter', () => {
    cy.get('.question-count').should('be.visible')
  })

  it('Should be able to click on an answer and page updates URL and displays questions', () => {
      cy.get('.answer-section').click()
      cy.url().should('not.eq', 'http://localhost:3000')
      cy.url().should('not.eq', 'http://localhost:3000/Results')
  });
})
