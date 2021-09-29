import { shallowMount } from '@vue/test-utils'
import PreTrainedIntents from '@/components/PreTrainedIntents.vue'
import { data } from '@/assets/intents'

describe('PreTrainedIntents.vue', () => {
  it('renders all elements', () => {
    const wrapper = renderView()
    expect(wrapper.find('[data-testId="intents.container"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testId="intents.industry-name"]').exists()).toBe(
      true
    )
    expect(
      wrapper.find('[data-testId="intents.industry-name"]').text()
    ).toContain('E-Commerce')
    expect(wrapper.findAll('[name="card"]').length).toEqual(data.length)
  })

  it('check select all works as expected', async () => {
    const wrapper = renderView()
    await wrapper.find('[data-testId="intents.select-all"]').trigger('click')
    for (let i = 0; i < data.length; i++) {
      expect(
        wrapper.find(`[data-testId="intents.select${i}"]`).element.checked
      ).toBe(true)
    }
  })

  it('check individual checkboxes', async () => {
    const wrapper = renderView()
    await wrapper.find('[data-testId="intents.select-all"]').trigger('click')
    for (let i = 0; i < data.length; i++) {
      expect(
        wrapper.find(`[data-testId="intents.select${i}"]`).element.checked
      ).toBe(true)
    }
    await wrapper.find('[data-testId="intents.select0"]').trigger('click')
    expect(
      wrapper.find('[data-testId="intents.select-all"]').element.checked
    ).toBe(false)
  })

  it('check show more and show less', async () => {
    const wrapper = renderView()
    for (let i = 0; i < data.length; i++) {
      expect(
        wrapper.find(`[data-testId="intents.show-more${i}"]`).exists()
      ).toBe(true)
      expect(
        wrapper.find(`[data-testId="intents.show-less${i}"]`).exists()
      ).toBe(false)
    }
    await wrapper.find('[data-testId="intents.show-more0"]').trigger('click')
    expect(wrapper.find('[data-testId="intents.show-more0"]').exists()).toBe(
      false
    )
    expect(wrapper.find('[data-testId="intents.show-less0"]').exists()).toBe(
      true
    )
  })
})

const renderView = () => {
  return shallowMount(PreTrainedIntents, {
    propsData: {
      name: 'eCommerce',
    },
  })
}
