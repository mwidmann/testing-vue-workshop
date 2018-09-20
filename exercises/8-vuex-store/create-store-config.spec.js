import Vuex from 'vuex'
import createStoreConfig from './create-store-config'
import { createLocalVue } from '@vue/test-utils'
import { fetchData } from './api'

jest.mock('./api')

const localVue = createLocalVue()
localVue.use(Vuex)

test('displayItems returns first 20 items when fetchItems is successful', async () => {
  const items = Array(40).fill().map((x,i) => i)

  fetchData.mockResolvedValue(items)
  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)

  await store.dispatch('fetchItems')

  expect(store.getters.displayItems).toEqual(items.slice(0, 20))
})

test('displayItems returns items 21-40 after setPage is called and fetchItems is successful', async () => {
  const items = Array(60).fill().map((x,i) => i)

  fetchData.mockResolvedValue(items)
  const storeConfig = createStoreConfig()
  const store = new Vuex.Store(storeConfig)
  store.commit('setPage', { page: 2 })

  await store.dispatch('fetchItems')

  expect(store.getters.displayItems).toEqual(items.slice(20, 40))
})
