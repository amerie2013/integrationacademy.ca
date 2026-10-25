// Validate a written-data.mjs file: balanced $ delimiters and KaTeX-renderable math.  node scripts/mdm4u/wcheck.mjs <file>
import { createRequire } from "module";
import { pathToFileURL } from "url";
import path from "path";
const katex = createRequire(import.meta.url)("katex");
const { WRITTEN } = await import(pathToFileURL(path.resolve(process.argv[2])).href);
let bad = 0;
for (const w of WRITTEN) for (const s of [w.prompt, w.feedback]) {
  if ((s.match(/\$/g) || []).length % 2) { bad++; console.log("odd $:", s.slice(0, 60)); }
  for (const m of s.matchAll(/\$([^$]+)\$/g)) { try { katex.renderToString(m[1], { throwOnError: true }); } catch (e) { bad++; console.log("katex:", m[1].slice(0, 50), e.message.slice(0, 60)); } }
}
console.log(`${WRITTEN.length} written, ${bad} problems`);
