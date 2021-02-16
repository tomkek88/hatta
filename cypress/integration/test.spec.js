it("should open main page", () => {
  cy.visit("http://localhost:8000/")
})

it("hould open gallery page", () => {
  cy.visit("http://localhost:8000/gallery")
})
