import IndustrySelection from '../functions/industrySelection'
import PreTrainedIntents from '../functions/preTrainedIntents'
import config from '../../cypress.json'

describe('industrySelection', () => {
  const industrySelection = new IndustrySelection()
  const preTrainedIntents = new PreTrainedIntents()
  beforeEach(() => {
    cy.visit(config.baseUrl)
  })

  it('Check elements are present', () => {
    industrySelection.getHeaderTitle().should('have.text', 'Create Bot ')
    industrySelection.getSelection().should('be.visible')
    industrySelection.getNextButton().should('be.visible')
  })

  it('should be able to get the industry selected and move to next xreen', () => {
    industrySelection.getSelection().select('eCommerce')
    industrySelection
      .getNextButton()
      .click()
      .then(() => preTrainedIntents.getContainer().should('be.visible'))
  })
})
