import { fetchItems } from './api'
import ItemView from './ItemView.vue'
import Item from './Item.vue'
import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

jest.mock('./api')

test('renders items resolved from fetchItems', async () => {
  expect.assertions(1)
  const items = [{}, {}, {}]
  fetchItems.mockResolvedValue(items)
  const wrapper = shallowMount(ItemView)

  await flushPromises();

  expect(wrapper.findAll(Item)).toHaveLength(3)
})

test('renders error if fetchItems rejects', async () => {
  expect.assertions(1)
  fetchItems.mockRejectedValue(new Error('500'))
  const wrapper = shallowMount(ItemView)

  await flushPromises()

  expect(wrapper.text()).toContain('Error loading items')
})
