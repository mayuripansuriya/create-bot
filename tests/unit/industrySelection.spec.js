import { shallowMount } from '@vue/test-utils'
import IndustrySelection from '@/components/IndustrySelection.vue'

describe('IndustrySelection.vue', () => {
  it('renders all elements', () => {
    const wrapper = renderView()
    const button = wrapper.find('[data-testid="industry.next-btn"]')
    expect(wrapper.find('[data-testid="industry.select"]').exists()).toEqual(
      true
    )
    expect(button.exists()).toEqual(true)
    expect(button.attributes().disabled).toBe('disabled')
  })

  it('should check selection options', async () => {
    const wrapper = renderView()
    const select = wrapper.find('[data-testid="industry.select"]')
    await select.trigger('click')
    const options = wrapper
      .find('[data-testid="industry.select"]')
      .findAll('option')
    expect(options.length).toEqual(5)
  })

  it('should be able to select industry', async () => {
    const wrapper = renderView()
    const select = wrapper.find('[data-testid="industry.select"]')
    await select.trigger('click')
    const options = wrapper
      .find('[data-testid="industry.select"]')
      .findAll('option')
    await options.at(1).setSelected()
    expect(
      wrapper.find('[data-testid="industry.next-btn"]').attributes().disabled
    ).toBeUndefined()

    expect(wrapper.find('option:checked').element.value).toBe('airLines')
  })

  it('should be able to move to next page', async () => {
    const wrapper = renderView()
    const select = wrapper.find('[data-testid="industry.select"]')
    await select.trigger('click')
    const options = wrapper
      .find('[data-testid="industry.select"]')
      .findAll('option')
    await options.at(1).setSelected()
    await wrapper.find('[data-testid="industry.next-btn"]').trigger('click')
  })
})

const renderView = () => {
  return shallowMount(IndustrySelection)
}
