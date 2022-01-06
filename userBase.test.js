const User = require('./user')
const UserBase = require('./userBase')

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

describe('user', () => {
  it('returns the number of users on the userBase', () =>{
    const userBase = new UserBase(users)
    expect(userBase.count()).toBe(3)
  });

  it('returns the names of users on the userBase', () =>{
    const userBase = new UserBase(users)
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
  });

  it('returns a greeting for all users in the userBase', () =>{
    const userBase = new UserBase(users)
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ])
  });
});