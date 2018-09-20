import getters from './getters'

test('returns first 20 items if state.page value is 1', () => {
  const items = Array(40).fill().map((x,i) => i)
  const state = {
    items,
    page: 1
  }
  const data = getters.displayItems(state)
  expect(data).toEqual(Array(20).fill().map((x,i) => i))
})

test('returns items 21-40 if state.page value is 2', () => {
  const items = Array(40).fill().map((x,i) => i)
  const state = {
    items,
    page: 2
  }
  const data = getters.displayItems(state)
  expect(data).toEqual(Array(20).fill().map((x,i) => 20+i))
})
