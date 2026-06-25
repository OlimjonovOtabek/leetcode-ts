import gcdOfStrings from './Greatest-Common-Divisor-of-Strings';

describe('1071 - Greatest-Common-Divisor-of-Strings', () => {
  it('1', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).equal('ABC');
  });
  it('2', () => {
    expect(gcdOfStrings('ABABAB', 'ABAB')).equal('AB');
  });
  it('3 ', () => {
    expect(gcdOfStrings('LEET', 'CODE')).equal('');
  });
  it('4', () => {
    expect(gcdOfStrings('AAAAAB', 'AAA')).equal('');
  });
  it('5', () => {
    expect(gcdOfStrings('LEET', 'ET')).equal('');
  });
  it('6', () => {
    expect(gcdOfStrings('AAAA', 'A')).equal('A');
  });
});
