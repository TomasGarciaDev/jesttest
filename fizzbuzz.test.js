const fizzBuzz = require ('./fizzbuzz')

describe('add', () => {
  it('return FizzBuzz when 15', () =>{
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })

  it('return Fizz when 3', () =>{
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('return Buzz when 5', () =>{
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('return 4 when 4', () =>{
    expect(fizzBuzz(4)).toBe(4)
  })
})