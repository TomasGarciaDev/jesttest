const User = require('./user')

describe('user', () => {
  it('creates an instance of the User class', () =>{
    const user = new User('Uma')
    expect(user).toBeInstanceOf(User)
  });

  it('returns the users first name', () => {
    const user = new User('Uma');
    expect(user.getName()).toBe('Uma')
  });

  it('returns users introduction', () =>{
    const user = new User('Uma')
    expect(user.getIntroduction()).toBe('Hi, my name is Uma')
  });
});