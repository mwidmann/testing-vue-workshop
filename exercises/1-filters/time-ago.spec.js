// time value should be unix time in seconds
function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 60) {
    return 'just now'
  }
  if (between < 3600) {
    return pluralize(between / 60, ' minute')
  } else if (between < 86400) {
    return pluralize(between / 3600, ' hour')
  } else {
    return pluralize(between / 86400, ' day')
  }
}

function pluralize(time, label) {
  const roundedTime = Math.round(time)
  if (roundedTime === 1) {
    return roundedTime + label + ' ago'
  }
  return roundedTime + label + 's' + ' ago'
}

describe('timeAgo', () => {
  // Mock Date.now to always return same value
  Date.now = () => new Date('2018')
  // The JavaScript date is unix time in milliseconds
  const unixTime = Date.now() / 1000

  const seconds = second => second * 1
  const minutes = minute => minute * seconds(60)
  const hours = hour => hour * minutes(60)
  const days = day => day * hours(24)

  test('returns just now if less than a minute ago', () => {
    expect(timeAgo(unixTime - 10)).toBe('just now')
  })

  test('returns singular minute', () => {
    expect(timeAgo(unixTime - minutes(1))).toBe('1 minute ago')
  })

  test('returns plural minutes', () => {
    expect(timeAgo(unixTime - minutes(10))).toBe('10 minutes ago')
  })

  test('returns singular hour', () => {
    expect(timeAgo(unixTime - hours(1))).toBe('1 hour ago')
  })

  test('returns plural hours', () => {
    expect(timeAgo(unixTime - hours(2))).toBe('2 hours ago')
  })

  test('returns singular day', () => {
    expect(timeAgo(unixTime - days(1))).toBe('1 day ago')
  })

  test('returns plural days', () => {
    expect(timeAgo(unixTime - days(2))).toBe('2 days ago')
  })

  test('returns day rounded to nearest value', () => {
    expect(timeAgo(unixTime - days(1) - hours(23))).toBe('2 days ago')
  })
})
