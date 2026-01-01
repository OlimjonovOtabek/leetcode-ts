

---

![CI](https://github.com/OlimjonovOtabek/leetcode-ts/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/language-typescript-blue)
![License](https://img.shields.io/badge/license-MIT-green)

<!-- SOLVED_COUNT_START -->
![Solved](https://img.shields.io/badge/solved-4-blue)<!-- SOLVED_COUNT_END -->

---

# 🚀 LeetCode Solutions in TypeScript

This repository contains my personal solutions to [LeetCode](https://leetcode.com/) problems, written in **TypeScript** with automated tests.  
The main goals are:

- Practice algorithms & data structures 🧩
- Keep a clean, well-structured record of solutions 📚
- Learn test-driven problem solving ✅

---

## 📂 Project Structure

```
src/
├─ arrays/
│   ├─ 0001-two-sum/
│   │   ├─ two-sum.ts
│   │   └─ two-sum.test.ts
│   └─ 0217-contains-duplicate/
├─ strings/
│   └─ 0013-roman-to-integer/
│       ├─ roman-to-integer.ts
│       └─ roman-to-integer.test.ts
├─ dp/
├─ graphs/
├─ trees/
└─ utils/        # reusable helpers (ListNode, TreeNode, etc.)
````

* Organized **by topic** (`arrays`, `strings`, `dp`, …)
* Each problem has its own folder: `NNNN-kebab-title/` (LeetCode ID + title)
* Inside:

  * `<title>.ts` → solution
  * `<title>.test.ts` → unit tests

---

## ⚙️ Tech Stack

* [TypeScript](https://www.typescriptlang.org/) — strongly typed solutions
* [Vitest](https://vitest.dev/) — fast unit testing framework
* [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting & formatting
* [GitHub Actions](https://docs.github.com/en/actions) — CI to run tests/lint/type-checks on push

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/OlimjonovOtabek/leetcode-ts.git
cd leetcode-ts
```

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm test
```

Run tests in watch mode (for active problem solving):

```bash
npm run dev
```

Lint & format code:

```bash
npm run fix
```

---

## 🧪 Example Problem

**`src/arrays/0001-two-sum/two-sum.ts`**

```ts
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
```

**`src/arrays/0001-two-sum/two-sum.test.ts`**

```ts
import twoSum from './two-sum';

describe('0001 - Two Sum', () => {
  it('works with [2,7,11,15], target=9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('returns [] when no pair exists', () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([]);
  });
});
```

---

## ✅ Solved Problems

<!-- PROBLEMS_TABLE_START -->
<table>
  <thead>
    <tr>
      <th align="center">#</th>
      <th align="left">Title</th>
      <th align="center">Topic</th>
      <th align="center">Difficulty</th>
      <th align="center">Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><code>0001</code></td>
      <td>Two Sum</td>
      <td align="center">Arrays</td>
      <td align="center"><img alt="Easy" src="https://img.shields.io/badge/Easy-green" /></td>
      <td align="center"><a href="src/arrays/0001-two-sum/two-sum.ts">🔗</a></td>
    </tr>
    <tr>
      <td align="center"><code>0013</code></td>
      <td>Roman to Integer</td>
      <td align="center">Strings</td>
      <td align="center"><img alt="Easy" src="https://img.shields.io/badge/Easy-green" /></td>
      <td align="center"><a href="src/strings/0013-Roman-to-Integer/Roman-to-Integer.ts">🔗</a></td>
    </tr>
    <tr>
      <td align="center"><code>0014</code></td>
      <td>Longest common prefix</td>
      <td align="center">Strings</td>
      <td align="center"><img alt="Easy" src="https://img.shields.io/badge/Easy-green" /></td>
      <td align="center"><a href="src/strings/0014-longest-common-prefix/longest-common-prefix.ts">🔗</a></td>
    </tr>
    <tr>
      <td align="center"><code>0066</code></td>
      <td>Plus One</td>
      <td align="center">Arrays</td>
      <td align="center"></td>
      <td align="center"><a href="src/arrays/0066-plus-one/plus-one.ts">🔗</a></td>
    </tr>
  </tbody>
</table>
<!-- PROBLEMS_TABLE_END -->

---

## 🛠️ Scripts

* `npm run dev` → Run tests in watch mode
* `npm test` → Run all tests
* `npm run lint` → Check code style
* `npm run fix` → Auto-fix lint + format issues
* `npm run typecheck` → Run TypeScript type checking (`tsc --noEmit`)
* `npm run generate:readme` → Auto-update README (solved count + table)
* `npm run new <topic> <id> <title>` → Scaffold new problem folder (via `scripts/new-problem.ts`)

Example:

```bash
npm run new arrays 0704 binary-search
npm run dev
git add .
git commit -m "feat(arrays): add 0704 binary-search"
git push
```

---

## 📌 TODO / Roadmap

* [ ] Auto-README generator (solved count + table ✅ almost done!)
* [ ] Add utility functions for Linked List & Tree problems
* [ ] Track difficulty levels (Easy / Medium / Hard) in README
* [ ] Explore benchmarking solutions (performance comparisons)
* [ ] Nightly fuzz testing for robustness

---

## ✍️ Author

**[@OlimjonovOtabek](https://github.com/OlimjonovOtabek)**
Passionate about algorithms, TypeScript, and clean code.

```

---