import { bigArray, shuffled } from '../../utils/test-helper';

import twoSum from './two-sum';

describe('0001 - Two Sum (tough cases)', () => {
  it('empty / single', () => {
    expect(twoSum([], 1)).toEqual([]);
    expect(twoSum([42], 42)).toEqual([]);
  });

  it('all equal numbers', () => {
    // needs two distinct indices
    expect(twoSum([5, 5, 5], 10)).toEqual([0, 1]); // any valid pair OK
    expect(twoSum([5, 5], 9)).toEqual([]); // not possible
  });

  it('duplicates & multiple answers', () => {
    const res = twoSum([3, 3, 2, 4], 6);
    expect([
      [0, 1],
      [2, 3],
    ]).toContainEqual(res);
  });

  it('large input (performance smoke)', () => {
    const n = 100_000;
    const arr = bigArray(n, 'inc'); // 0..n-1
    // Make sure a valid pair exists near the end
    arr[n - 2] = 123456;
    arr[n - 1] = 654321;
    const target = 777777;
    const res = twoSum(arr, target);
    expect(res.length).toBe(2);
  });

  it('adversarial order (shuffled)', () => {
    const arr = shuffled([2, 7, 11, 15], 1337);
    const res = twoSum(arr, 9);
    // Map to values to verify correctness regardless of indices
    expect(arr[res[0]!] + arr[res[1]!]).toBe(9);
  });
});
