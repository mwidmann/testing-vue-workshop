import actions from './actions'
import { fetchData } from './api'

jest.mock('./api')

test('fetchItems commits setLoading when called', async () => {
  const items = [1, 2, 3]
  fetchData.mockResolvedValue(items)
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setItems', { items })
})

test('fetchItems commits items returned by api method and sets loading to false', async () => {
  fetchData.mockResolvedValue()
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setLoading', true)
})

test('fetchItems commits error and sets loading to false if api method rejects', async () => {
  fetchData.mockRejectedValue()
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setError', {
    message: 'Failed to load items'
  })
  expect(commit).toHaveBeenCalledWith('setLoading', false)
})
