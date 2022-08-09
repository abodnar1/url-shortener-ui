describe('URL Shortener', () => {

  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/urls', {fixture: })

  });

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})




// Iteration 3
// Write Cypress tests for the following user flows (don't forget to stub your network requests):

// When a user visits the page, they can view the page title and the existing shortened URLs
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields

// Iteration 4
// Write Cypress tests for the following user flows (don't forget to stub your network requests):

// When a user fills out and submits the form, the new shortened URL is rendered