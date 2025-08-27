/**
 * id: 0014
 * title: Longest common prefix
 * topic: strings
 * difficulty: easy
 * description: Given an array of strings, write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 */

export default function longestCommonPrefix(strs: string[]) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const result = [];
  let minLen = 0;

  for (let i = 0; i < strs.length / 2; i++) {
    const cr = strs[i].length;
    const nt = strs[i + 1].length;
    minLen = cr < nt ? cr : nt;
  }

  for (let i = 0; i < minLen; i++) {
    const isEqual = strs.slice(1).every((x) => x.charAt(i) === strs[0].charAt(i));
    if (isEqual) result.push(strs[0].charAt(i));
    else result.push('?');
  }

  return result
    .join('')
    .split('?')
    .sort((a, b) => (a.length > b.length ? 1 : 0))[0];
}
