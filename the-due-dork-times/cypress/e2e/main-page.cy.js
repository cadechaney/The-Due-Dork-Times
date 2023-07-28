describe('template spec', () => {

  beforeEach(() => {
    // cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=714809d8bf034b16826bde40f32395c0', { fixture: 'example.json'}).as('example')
    cy.visit('http://localhost:3000/')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
    cy.get('h1').contains('The Due Dork Times: Smart News for All')
  })

  it('should have articles', () => {
    cy.get('.article-container').first()
    cy.get('.article-container').last()
  })
})