// Reports math expressions that appear in more than one of: lesson, worksheet, bank, assignment (same topic).
//   node scripts/mcr3u-ch2/overlap.mjs t2_1.mjs
import { pathToFileURL, fileURLToPath } from "url";
import { resolve, dirname } from "path";
const here = dirname(fileURLToPath(import.meta.url));
const mod = await import(pathToFileURL(resolve(here, process.argv[2])).href);
const norm = (s) => s.replace(/\\left|\\right|\\,|\\;|\\ |\\!/g, "").replace(/\\dfrac|\\tfrac/g, "\\frac").replace(/\s+/g, "").replace(/\\cdot|\\times/g, "*").replace(/[{}]/g, "");
const spansOf = (text, re) => [...text.matchAll(re)].map((m) => norm(m[1] ?? m[2] ?? "")).filter((s) => s.length >= 7 && /[a-z]/.test(s) && /[+\-*/^=]|frac|sqrt/.test(s));
const html = mod.lessonBlocks().map((b) => b.html).join("\n");
const hRe = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g, dRe = /\$([^$]+)\$/g;
const sources = { lesson: new Set(spansOf(html, hRe)) };
// worksheet: examples + questions (answers excluded); bank: prompts; assignment
const W = mod[Object.keys(mod).find((k) => /^W\d/.test(k))];
sources.worksheet = new Set([...W.examples.map((e) => spansOf(e.body, dRe)).flat(), ...W.questions.map((q) => spansOf(q.ask, dRe)).flat()]);
sources.bank = new Set(mod.bank().map((q) => spansOf(q.prompt, dRe)).flat());
sources.assignment = new Set(spansOf(mod.ASSIGNMENT.description, dRe));
const names = Object.keys(sources); let found = 0;
for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) {
  const shared = [...sources[names[i]]].filter((s) => sources[names[j]].has(s));
  if (shared.length) { found += shared.length; console.log(`${names[i]} ∩ ${names[j]}: ${shared.length}\n   ${shared.slice(0, 12).join("\n   ")}`); }
}
console.log(found ? `${found} shared expression(s) — review` : "no shared expressions");
