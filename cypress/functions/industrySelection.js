class IndustrySelection {
  getHeaderTitle() {
    return cy.get('.nav-link')
  }

  getSelection() {
    return cy.get('[data-testId="industry.select"]')
  }

  getNextButton() {
    return cy.get('[data-testId="industry.next-btn"]')
  }
}
export default IndustrySelection
