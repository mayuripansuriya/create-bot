class PreTrainedIntents {
  getContainer() {
    return cy.get('[data-testId="intents.container"]')
  }

  getIndustryName() {
    return cy.get('[data-testId="intents.industry-name"]')
  }

  getCardGroup() {
    return cy.get('.card-group')
  }

  getCard() {
    return cy.get('.card-group .card')
  }

  getShowMore(index) {
    return cy.get(`[data-testId="intents.show-more${index}"]`)
  }

  getShowLess(index) {
    return cy.get(`[data-testId="intents.show-less${index}"]`)
  }

  getSelectAll() {
    return cy.get('[data-testId="intents.select-all"]')
  }

  getSelect(index) {
    return cy.get(`[data-testId="intents.select${index}"]`)
  }
}
export default PreTrainedIntents
