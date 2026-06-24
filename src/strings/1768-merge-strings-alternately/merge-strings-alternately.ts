/**
 * LeetCode #1768 - merge strings alternately
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d
 */
// export default function mergeAlternately(word1: string, word2: string): string {
//   const minLen = Math.min(word1.length, word2.length);

//   let result = '';

//   for (let i = 0; i < minLen; i++) {
//     result = result + word1[i];
//     result = result + word2[i];
//   }

//   if (word2.length != word1.length) {
//     if (word1.length == minLen) {
//       result = result + word2.substring(minLen);
//     } else {
//       result = result + word1.substring(minLen);
//     }
//   }

//   return result;
// }

//Two Pointer
export default function mergeAlternately(word1: string, word2: string): string {
  const m = word1.length;
  const n = word2.length;

  const maxLen = Math.max(m, n);

  let result = '';

  for (let i = 0; i < maxLen; i++) {
    if (i < m) result = result + word1[i];

    if (i < n) result = result + word2[i];
  }

  return result;
}
