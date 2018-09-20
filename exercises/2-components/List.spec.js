import { shallowMount } from '@vue/test-utils'
import List from './List.vue'

test('renders "no items" if items prop is undefined', () => {
  const wrapper = shallowMount(List)

  expect(wrapper.text()).toContain('No items')
})

test('renders text using each item in items prop array', () => {
  const wrapper = shallowMount(List, {
    propsData: {
      items: ['item1', 'item2', 'item3']
    }
  })

  expect(wrapper.text()).toContain('item1')
  expect(wrapper.text()).toContain('item2')
  expect(wrapper.text()).toContain('item3')
})
