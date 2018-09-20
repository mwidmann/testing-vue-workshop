import List from '../2-components/List.vue'
import { shallowMount } from '@vue/test-utils';

test('renders correctly when there are no items', () => {
  const wrapper = shallowMount(List)
  expect(wrapper.element).toMatchSnapshot()
})

test('renders correctly when there are three items', () => {
  const wrapper = shallowMount(List, {
    propsData: {
      items: [ 'item1', 'item2', 'item3' ]
    }
  })
  expect(wrapper.element).toMatchSnapshot()
})
