import solve from './Richest-Customer-Wealth';

describe('1672 - Richest-Customer-Wealth', () => {
  it('example', () => {
    expect(
      solve([
        [1, 2, 3],
        [3, 2, 1],
      ]),
    ).toBe(6);
  });
});
