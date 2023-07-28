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

  it('should have correct info inside of articles', () => {
    cy.get('.article-description').first().should('be.visible')
    cy.get('.article-description').last().should('be.visible')
  })

  it('should have an advertisement', () => {
    cy.get('.advertisement').should('exist')
    cy.get('.milk-ad').should('be.visible')
  })

  it('should have a search icon and bar', () => {
    cy.get('.search-icon').should('be.visible')
    cy.get('.search-box').should('be.visible')
  })

  it('should be able to search an article', () => {
    cy.get('.search-box').type('Sarah').get('.search-icon').click()
    cy.get('.search-article-container').should('exist')
    cy.get('.search-article-container').should('be.visible')
  })

  it('should be able to take user to single article page', () => {
    cy.get('.article-container').first().click()
    cy.get('.author-date').should('be.visible')
    cy.get('.title-url').should('be.visible')
    cy.get('.article-description-long').should('be.visible')
  })

  it('should be able to bring the user back to the main page', () => {
    cy.get('.article-container').first().click()
    cy.get('.back-arrow-icon').click()
    cy.get('h1').contains('The Due Dork Times: Smart News for All')
  })
})