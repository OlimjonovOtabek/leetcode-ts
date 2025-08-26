/**
 * LeetCode #0013 - Roman to Integer
 * Input: MCMXCIV
 * Output: 1994
 */
export default function romanToInt(s: string): number {
  const romanNumberMap = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanNumberMap.get(s[i]) ?? 0;
    const next = romanNumberMap.get(s[i + 1]) ?? 0;

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}

/// if you want more runtime performance, you can use a different approach
/**export default function romanToInt(s: string): number {
  const romanNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanNumberMap[s[i]] ?? 0;
    const next = romanNumberMap[s[i + 1]] ?? 0;

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
} */
