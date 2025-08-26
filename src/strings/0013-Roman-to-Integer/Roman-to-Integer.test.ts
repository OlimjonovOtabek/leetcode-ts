import romanToInt from './Roman-to-Integer';
describe('0013 - Roman-to-Integer', () => {
  it('test 1', () => {
    expect(romanToInt('MCMXCIV')).equal(1994);
  });
});

describe('0013 - Roman-to-Integer', () => {
  it('test 2', () => {
    expect(romanToInt('MMDCCCXCIV')).equal(2894);
  });
});

describe('romanToInt — known tricky numerals', () => {
  const cases: Array<[string, number]> = [
    ['XLIX', 49], // 40 + 9
    ['CMXCIX', 999], // 900 + 90 + 9
    ['MDCLXVI', 1666], // 1000 + 500 + 100 + 50 + 10 + 5 + 1
    ['MMMDCLXVI', 3666], // 3000 + 500 + 100 + 50 + 10 + 5 + 1
    ['MMMDCCCLXXXVIII', 3888], // 3000 + 500 + 300 + 50 + 30 + 8
    ['MMMCMXCIX', 3999], // 3000 + 900 + 90 + 9
    ['CDXCIX', 499], // 400 + 90 + 9
    ['CDXLIV', 444], // 400 + 40 + 4
  ];

  it.each(cases)('%s -> %d', (s, expected) => {
    expect(romanToInt(s)).toBe(expected);
  });
});
