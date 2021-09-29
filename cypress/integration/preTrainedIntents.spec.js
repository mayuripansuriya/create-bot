import IndustrySelection from '../functions/industrySelection'
import PreTrainedIntents from '../functions/preTrainedIntents'
import config from '../../cypress.json'
import { data } from '../../src/assets/intents'

describe('PreTrainedIntents', () => {
  const industrySelection = new IndustrySelection()
  const preTrainedIntents = new PreTrainedIntents()
  beforeEach(() => {
    cy.visit(config.baseUrl)
    industrySelection.getSelection().select('eCommerce')
    industrySelection
      .getNextButton()
      .click()
      .then(() => preTrainedIntents.getContainer().should('be.visible'))
  })

  it('Check elements are present', () => {
    preTrainedIntents.getContainer('be.visible')
    preTrainedIntents.getIndustryName().should('contain', 'E-Commerce')
    preTrainedIntents.getCard().should('have.length', data.length)
  })

  it('Check intent details for each intents', () => {
    preTrainedIntents.getCard().each(($el, index) => {
      cy.get(`[data-testId="intents.data${index}"]`).should('not.be.empty')
      cy.get(`[data-testId="intents.data${index}"] .card-title`).should(
        'have.text',
        data[index].name
      )
      cy.get(`[data-testId="intents.data${index}"] .card-subtitle`).should(
        'have.text',
        data[index].description
      )
      cy.get(`[data-testId="intents.data${index}"] .text-secondary`).should(
        'contain',
        data[index].trainingData.expressionCount
      )
      cy.get(`[data-testId="intents.data${index}"] li`).should('have.length', 1)
      preTrainedIntents.getShowMore(index).should('be.visible')
      preTrainedIntents.getShowMore(index).click()
      preTrainedIntents.getShowLess(index).should('be.visible')
      preTrainedIntents.getShowLess(index).click()
    })
  })

  it('Check the selection functionality', () => {
    preTrainedIntents.getSelectAll().check()
    preTrainedIntents.getCard().each(($el, index) => {
      preTrainedIntents.getSelectAll().should('be.visible')
      preTrainedIntents.getSelect(index).should('be.checked')
    })
    preTrainedIntents.getSelectAll().click()
    preTrainedIntents.getCard().each(($el, index) => {
      preTrainedIntents.getSelectAll().should('be.visible')
      preTrainedIntents.getSelect(index).should('not.be.checked')
    })
  })

  it('Check uncheck of obe individual should uncheck select all', () => {
    preTrainedIntents.getSelectAll().check()
    preTrainedIntents.getSelectAll().should('be.checked')
    preTrainedIntents.getSelect(0).click()
    preTrainedIntents.getSelectAll().should('not.be.checked')
  })

  it('Check individual selection', () => {
    preTrainedIntents.getCard().each(($el, index) => {
      preTrainedIntents.getSelect(index).should('not.be.checked')
    })
    preTrainedIntents.getSelect(0).check()
    preTrainedIntents.getSelect(0).should('be.checked')
    preTrainedIntents.getSelect(1).should('not.be.checked')
  })
})
