const add = require('./add')

describe('add', () => {
  it('add 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  })

  it('add 0 and 5', () => {
    expect(add(0, 5)).toBe(5);
  })
})