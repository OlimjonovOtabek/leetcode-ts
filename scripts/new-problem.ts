import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const [, , topic, id, ...titleParts] = process.argv;
if (!topic || !id || titleParts.length === 0) {
  // Example: npm run new arrays 0217 contains-duplicate
  console.error('Usage: npm run new <topic> <id> <kebab-title>');
  process.exit(1);
}
const title = titleParts.join('-');
const dir = join('src', topic, `${id}-${title}`);
mkdirSync(dir, { recursive: true });

const sol = `/**
 * LeetCode #${id} - ${title.replace(/-/g, ' ')}
 */
export default function solve() {
  // TODO
}
`;
const tst = `import solve from "./${title}";
describe("${id} - ${title}", () => {
  it("example", () => {
    expect(solve()).toBeDefined();
  });
});
`;

writeFileSync(join(dir, `${title}.ts`), sol);
writeFileSync(join(dir, `${title}.test.ts`), tst);
console.log('Created', dir);
