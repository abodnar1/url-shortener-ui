describe('URL Shortener', () => {

  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: "url_to_shorten"
    })
    .visit("http://localhost:3000/")
  });

  it('should be able to visit the page and see title and exisiting shortened URLs', () => {
    cy.url().should("eq", "http://localhost:3000/")
    .get(".app-title").should("be.visible").contains("URL Shortener")
    .get(".url-container").find(".url-card").contains("h3", "Awesome photo")
    .get("a").contains("http://localhost:3001/useshorturl/1")
  });

  it("should be able to view the Form with the proper inputs", () => {
    cy.get(".form-container")
    .get("input[name='title']")
    .get("input[name='urlToShorten']")
    .get("button").first().contains("Shorten Please!")
  });

});




// Iteration 3

// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields

// Iteration 4
// Write Cypress tests for the following user flows (don't forget to stub your network requests):

// When a user fills out and submits the form, the new shortened URL is rendered