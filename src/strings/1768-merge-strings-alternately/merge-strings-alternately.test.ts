import mergeAlternately from './merge-strings-alternately';

describe('1768 - merge-strings-alternately', () => {
  it('case 1', () => {
    expect(mergeAlternately('abc', '123')).toBe('a1b2c3');
  });

  it('case 2', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
  });

  it('case 3', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });

  it('otabek', () => {
    expect(mergeAlternately('oaeoijnv', 'tbklmoo')).toBe('otabekolimjonov');
  });
});
