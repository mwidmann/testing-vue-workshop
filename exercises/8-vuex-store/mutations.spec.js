import mutations from './mutations'

test('adds filtered items to state', () => {
  const items = [{}, undefined, {}]
  const state = {}
  mutations.setItems(state, { items })
  expect(state.items).toEqual([{}, {}])
})
