function capitalize(value) {
  if (value === undefined) {
    return ''
  }
  return value.charAt(0).toUpperCase() + value.slice(1)
}

describe('capitalize', () => {
  test('returns empty string if input is undefined', () => {
    expect(capitalize()).toBe('')
  })

  test('returns string with first letter as capital letter', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})
