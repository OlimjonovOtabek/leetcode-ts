/**
 * LeetCode #1071 - Greatest Common Divisor of Strings
 * Greatest Common Divisor of Strings
Solved
Easy
Topics
premium lock icon
Companies
Hint
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.



Example 1:

Input: str1 = "ABCABC", str2 = "ABC"

Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"

Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"

Output: ""

Example 4:

Input: str1 = "AAAAAB", str2 = "AAA"

Output: ""
 */
export default function gcdOfStrings(str1: string, str2: string): string {
  // TODO

  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const s1 = str1.length;
  const s2 = str2.length;
  const r = gcd(s1, s2);
  return str1.slice(0, r);
}

export function gcd(num1: number, num2: number) {
  const q = num1 % num2;

  if (q == 0) return num2;

  return gcd(num2, q);
}

// 12 6 12%5=6 6%6=0
