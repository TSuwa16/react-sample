describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains("Counter")
  }),
  it('counter', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-test='count-value']").contains(0)
    cy.get("[data-test='count-plus']").click()
    cy.get("[data-test='count-value']").contains("1")

  })
})