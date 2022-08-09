describe("URL Shortener", () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      statusCode: 200,
      fixture: "url_to_shorten"
    })
    .visit("http://localhost:3000/")
  });

  it("When a user visits the page, they can view the page title and the existing shortened URLs", () => {
    cy.url().should("eq", "http://localhost:3000/")
    .get(".app-title").should("be.visible").contains("URL Shortener")
    .get(".url-container").find(".url-card").contains("h3", "Awesome photo")
    .get("a").contains("http://localhost:3001/useshorturl/1")
  });

  it("When a user visits the page, they can view the Form with the proper inputs", () => {
    cy.get(".form-container")
    .get("input[name='title']")
    .get("input[name='urlToShorten']")
    .get("button").first().contains("Shorten Please!")
  });

  it("When a user fills out the form, the information is reflected in the input fields", () => {
    cy.get(".form-container")
    .get("input[name='title']").type("Travis rocks!").should("have.value", "Travis rocks!")
    .get("input[name='urlToShorten']").type("anExtraLongURLShouldGoHere").should("have.value", "anExtraLongURLShouldGoHere")
    .get("button").first().contains("Shorten Please!")
  });

  it("When a user fills out and submits the form, the new shortened URL is rendered", () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      statusCode: 201,
      body: {
        title: "Title for POST intercept",
        long_url: "thisIsWhereTheLongUrlWouldGoForThePOST",
        id: 2,
        short_url: "http://localhost:3001/useshorturl/2"
      }
    })
    
    .get("input[name='title']").type("Title for POST intercept").should("have.value", "Title for POST intercept")
    .get("input[name='urlToShorten']").type("thisIsWhereTheLongUrlWouldGoForThePOST").should("have.value", "thisIsWhereTheLongUrlWouldGoForThePOST")
    .get("button").first().contains("Shorten Please!").click()

    .get(".url-container").find(".url-card").contains("h3", "Title for POST intercept")
    .get(".long-url").contains("p", "thisIsWhereTheLongUrlWouldGoForThePOST")
    .get("a").contains("http://localhost:3001/useshorturl/2")
  });

});
