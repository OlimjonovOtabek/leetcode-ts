// src/utils/test-helpers.ts
export const range = (n: number, map = (i: number) => i): number[] =>
  Array.from({ length: n }, (_, i) => map(i));

export const shuffled = <T>(arr: T[], seed = 1): T[] => {
  // LCG for reproducible shuffle
  let s = seed >>> 0;
  const a = arr.slice();
  const rnd = () => (s = (1664525 * s + 1013904223) >>> 0) / 2 ** 32;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const bigArray = (n: number, pattern: 'equal' | 'inc' | 'alt' = 'inc') => {
  if (pattern === 'equal') return Array(n).fill(7);
  if (pattern === 'alt') return range(n, (i) => (i % 2 ? 1 : 2));
  return range(n); // 0..n-1
};

// Unicode samples
export const U = {
  plain: 'leetcode',
  combiningE: 'e\u0301', // e + combining acute
  precomposedE: 'é',
  emoji: '👩‍💻', // ZWJ sequence
  flagUZ: '🇺🇿', // two code points
};
