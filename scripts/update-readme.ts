// scripts/update-readme.ts
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, posix, sep } from 'path';

type Entry = {
  id: string;
  title: string;
  topic: string;
  relPath: string;
};

const toTitleCase = (s: string) =>
  s
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());

const padId = (num: string) => num.padStart(4, '0');

const mdPath = (p: string) => p.split(sep).join(posix.sep);

const pickSolutionFile = (absDir: string): string | null => {
  const files = readdirSync(absDir).filter((f) => f.endsWith('.ts') && !/\.test\.ts$/i.test(f));
  return files[0] || null;
};

const scan = (): Entry[] => {
  const src = 'src';
  const topics = readdirSync(src).filter((t) => statSync(join(src, t)).isDirectory());

  const entries: Entry[] = [];
  for (const topic of topics) {
    const topicDir = join(src, topic);
    const problemDirs = readdirSync(topicDir).filter((d) =>
      statSync(join(topicDir, d)).isDirectory(),
    );

    for (const prob of problemDirs) {
      const m = prob.match(/^(\d{1,4})[-_](.+)$/i);
      if (!m) continue;
      const [, rawId, rawTitle] = m;
      const id = padId(rawId);
      const title = toTitleCase(rawTitle);
      const absProblemDir = join(topicDir, prob);
      const solution = pickSolutionFile(absProblemDir);
      if (!solution) continue;
      const relPath = mdPath(join(topicDir, prob, solution));
      const topicPretty = toTitleCase(topic);
      entries.push({ id, title, topic: topicPretty, relPath });
    }
  }
  entries.sort((a, b) => Number(a.id) - Number(b.id));
  return entries;
};

const buildTable = (rows: Entry[]) => {
  const head = `
<table>
  <thead>
    <tr>
      <th align="center">#</th>
      <th align="left">Title</th>
      <th align="center">Topic</th>
      <th align="center">Solution</th>
    </tr>
  </thead>
  <tbody>
`;
  const body = rows
    .map(
      (r) => `
    <tr>
      <td align="center"><code>${r.id}</code></td>
      <td>${r.title}</td>
      <td align="center">${r.topic}</td>
      <td align="center"><a href="${r.relPath}">🔗</a></td>
    </tr>`,
    )
    .join('\n');

  const foot = '\n  </tbody>\n</table>\n';
  return head + body + foot;
};

const updateReadme = (table: string) => {
  const start = '<!-- PROBLEMS_TABLE_START -->';
  const end = '<!-- PROBLEMS_TABLE_END -->';
  const readmePath = 'README.md';
  const original = readFileSync(readmePath, 'utf8');

  const updated = original.replace(
    new RegExp(`${start}[\\s\\S]*?${end}`),
    `${start}\n${table}${end}`,
  );
  writeFileSync(readmePath, updated, 'utf8');
};

const rows = scan();
const table = buildTable(rows);
updateReadme(table);
console.log(`✅ Updated README with ${rows.length} problems.`);
