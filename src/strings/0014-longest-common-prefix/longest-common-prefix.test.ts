import longestCommonPrefix from './longest-common-prefix';
describe('0014 - longest-common-prefix', () => {
  it('example', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).equal('fl');
  });
  it('example', () => {
    expect(longestCommonPrefix(['cir', 'car'])).equal('c');
  });
});
