/**
 * LeetCode #1 - Two Sum
 * Time: O(n), Space: O(n)
 */
export default function twoSum(nums: number[], target: number): [number, number] | [] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need)!, i];
    map.set(nums[i], i);
  }
  return [];
}
