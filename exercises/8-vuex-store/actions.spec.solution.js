import actions from './actions'
import { fetchData } from './api'

jest.mock('./api')

test('fetchItems commits items returned by api method', async () => {
  const items = [1, 2, 3]
  fetchData.mockResolvedValue([1, 2, 3])
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setItems', { items })
})

test('fetchItems commits setLoading when called', async () => {
  fetchData.mockResolvedValue()
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setLoading', true)
})

test('fetchItems commits items returned by api method and sets loading to false', async () => {
  const items = [1, 2, 3]
  fetchData.mockResolvedValue([1, 2, 3])
  const commit = jest.fn()
  await actions.fetchItems({ commit })
  expect(commit).toHaveBeenCalledWith('setItems', { items })
  expect(commit).toHaveBeenCalledWith('setLoading', false)
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
