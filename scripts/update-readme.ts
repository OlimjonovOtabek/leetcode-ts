// scripts/update-readme.ts
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join, posix, sep } from 'path';

type Entry = {
  id: string;
  title: string;
  topic: string;
  relPath: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
};

/** === settings you can tweak === */
const SRC_DIR = 'src';
const TOPIC_ALLOWLIST = [
  'arrays',
  'strings',
  'dp',
  'graphs',
  'trees',
  'math',
  'heap',
  'binary-search',
  'sliding-window',
  'two-pointers',
] as const;
/** ============================== */

const toTitleCase = (s: string) =>
  s
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());

const padId = (num: string) => num.padStart(4, '0');
const mdPath = (p: string) => p.split(sep).join(posix.sep);

const difficultyBadge = (d?: Entry['difficulty']) => {
  if (!d) return '';
  const color = d === 'Easy' ? 'green' : d === 'Medium' ? 'yellow' : 'red';
  return `<img alt="${d}" src="https://img.shields.io/badge/${encodeURIComponent(d)}-${color}" />`;
};

/** prefer file containing the slug; skip tests, types, and index files */
const pickSolutionFile = (absDir: string): string | null => {
  const files = readdirSync(absDir).filter(
    (f) =>
      f.endsWith('.ts') &&
      !/\.test\.ts$/i.test(f) &&
      !/\.d\.ts$/i.test(f) &&
      f.toLowerCase() !== 'index.ts',
  );
  if (!files.length) return null;
  const dirBase = absDir.split(sep).pop()!.toLowerCase();
  const slug = dirBase.replace(/^\d{1,4}[-_]?/, '');
  const preferred = files.find((f) => f.toLowerCase().includes(slug));
  return preferred ?? files[0];
};

/** parse the top JSDoc block for difficulty/title/id/topic (all optional) */
const parseHeader = (absFile: string) => {
  const src = readFileSync(absFile, 'utf8');
  const m = src.match(/\/\*\*([\s\S]*?)\*\//);
  if (!m) return {};
  const block = m[1];

  const get = (key: string) => {
    const r = new RegExp(`\\*\\s*${key}\\s*:\\s*([^\\n\\r*]+)`, 'i').exec(block);
    return r ? r[1].trim() : undefined;
  };

  const rawDiff = get('difficulty');
  let difficulty: Entry['difficulty'] | undefined;
  if (rawDiff) {
    const d = rawDiff.toLowerCase();
    if (d === 'easy') difficulty = 'Easy';
    else if (d === 'medium') difficulty = 'Medium';
    else if (d === 'hard') difficulty = 'Hard';
  }

  const id = get('id');
  const title = get('title');
  const topic = get('topic');

  return { difficulty, id, title, topic };
};

const scan = (): Entry[] => {
  const topics = readdirSync(SRC_DIR).filter((t) => {
    const p = join(SRC_DIR, t);
    return (
      statSync(p).isDirectory() &&
      TOPIC_ALLOWLIST.includes(t.toLowerCase() as (typeof TOPIC_ALLOWLIST)[number])
    );
  });

  const entries: Entry[] = [];
  for (const topic of topics) {
    const topicDir = join(SRC_DIR, topic);
    const problemDirs = readdirSync(topicDir).filter((d) =>
      statSync(join(topicDir, d)).isDirectory(),
    );

    for (const prob of problemDirs) {
      const dirMatch = prob.match(/^(\d{1,4})[-_](.+)$/i);
      if (!dirMatch) continue;

      const [, rawId, rawTitle] = dirMatch;
      const absProblemDir = join(topicDir, prob);
      const solutionFile = pickSolutionFile(absProblemDir);
      if (!solutionFile) continue;

      const relPath = mdPath(join(topicDir, prob, solutionFile));

      // defaults from folder structure
      let id = padId(rawId);
      let title = toTitleCase(rawTitle);
      let topicPretty = toTitleCase(topic);

      // attempt to override with header values
      const header = parseHeader(join(absProblemDir, solutionFile));
      if (header.id) id = padId(header.id);
      if (header.title) title = header.title;
      if (header.topic) topicPretty = toTitleCase(header.topic);

      entries.push({
        id,
        title,
        topic: topicPretty,
        relPath,
        difficulty: header.difficulty,
      });
    }
  }

  entries.sort((a, b) => Number(a.id) - Number(b.id));
  return entries;
};

const buildHtmlTable = (rows: Entry[]) => {
  const head = `<table>
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
`;
  const body = rows
    .map(
      (r) => `    <tr>
      <td align="center"><code>${r.id}</code></td>
      <td>${r.title}</td>
      <td align="center">${r.topic}</td>
      <td align="center">${difficultyBadge(r.difficulty)}</td>
      <td align="center"><a href="${r.relPath}">🔗</a></td>
    </tr>`,
    )
    .join('\n');

  const foot = `\n  </tbody>\n</table>\n`;
  return head + body + foot;
};

const replaceBetween = (
  content: string,
  startMarker: string,
  endMarker: string,
  replacement: string,
) => {
  if (!content.includes(startMarker) || !content.includes(endMarker)) {
    return content.trimEnd() + `\n\n${startMarker}\n${replacement}${endMarker}\n`;
  }
  const re = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`);
  return content.replace(re, `${startMarker}\n${replacement}${endMarker}`);
};

const updateReadme = (tableHtml: string, solvedCount: number) => {
  const readmePath = 'README.md';
  const original = readFileSync(readmePath, 'utf8');

  const tableUpdated = replaceBetween(
    original,
    '<!-- PROBLEMS_TABLE_START -->',
    '<!-- PROBLEMS_TABLE_END -->',
    tableHtml,
  );

  const badge = `![Solved](https://img.shields.io/badge/solved-${solvedCount}-blue)`;
  const finalUpdated = replaceBetween(
    tableUpdated,
    '<!-- SOLVED_COUNT_START -->',
    '<!-- SOLVED_COUNT_END -->',
    badge,
  );

  writeFileSync(readmePath, finalUpdated, 'utf8');
};

// --- run ---
const rows = scan();
const table = buildHtmlTable(rows);
updateReadme(table, rows.length);
console.log(`✅ Updated README with ${rows.length} problems (with difficulty).`);
