Perfect 👍 Let’s make you a **professional, clean, complete `README.md`** for your LeetCode TypeScript repo. You’ll be able to drop this file straight into your project root.

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
├─ dp/
├─ graphs/
├─ trees/
└─ utils/        # reusable helpers (ListNode, TreeNode, etc.)

````

- Organized **by topic** (`arrays`, `strings`, `dp`, …)  
- Each problem has its own folder: `NNNN-kebab-title/` (LeetCode ID + title)  
- Inside:  
  - `<title>.ts` → solution  
  - `<title>.test.ts` → unit tests  

---

## ⚙️ Tech Stack

- [TypeScript](https://www.typescriptlang.org/) — strongly typed solutions  
- [Vitest](https://vitest.dev/) — fast unit testing framework  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — linting & formatting  
- [GitHub Actions](https://docs.github.com/en/actions) — CI to run tests/lint on push  

---

## 🚀 Getting Started

Clone the repository:
```bash
git clone https://github.com/OlimjonovOtabek/leetcode-ts.git
cd leetcode-ts
````

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

| #    | Title              | Topic  | Solution                                                       |
| ---- | ------------------ | ------ | -------------------------------------------------------------- |
| 0001 | Two Sum            | Arrays | [🔗](src/arrays/0001-two-sum/two-sum.ts)                       |
| 0217 | Contains Duplicate | Arrays | [🔗](src/arrays/0217-contains-duplicate/contains-duplicate.ts) |

> This table will expand as more problems are solved.
> (Future improvement: generate it automatically with a script.)

---

## 🛠️ Scripts

* `npm run dev` → Run tests in watch mode
* `npm test` → Run all tests
* `npm run lint` → Check code style
* `npm run fix` → Auto-fix lint + format issues
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

* [ ] Add auto-README table generator for solved problems
* [ ] Add utility functions for Linked List & Tree problems
* [ ] Track difficulty levels (Easy / Medium / Hard)
* [ ] Explore benchmarking solutions (performance comparisons)

---

## ✍️ Author

**[@OlimjonovOtabek](https://github.com/OlimjonovOtabek)**
Passionate about algorithms, TypeScript, and clean code.

