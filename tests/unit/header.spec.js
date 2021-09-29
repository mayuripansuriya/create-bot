import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = renderView()
    const text = wrapper.get('.nav-link').text()
    expect(text).toBe('Create Bot')
  })
})

const renderView = () => {
  return shallowMount(Header)
}
