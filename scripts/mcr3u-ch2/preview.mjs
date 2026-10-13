// Local-only preview of a chapter-2 lesson (no database).  node scripts/mcr3u-ch2/preview.mjs t2_1.mjs
// Writes public/_pv2.html -> http://localhost:3001/_pv2.html   (delete the file when done)
import { createRequire } from "module";
import { writeFileSync } from "fs";
import { pathToFileURL, fileURLToPath } from "url";
import { resolve, dirname } from "path";
const katex = createRequire(import.meta.url)("katex");
const here = dirname(fileURLToPath(import.meta.url));
const mod = await import(pathToFileURL(resolve(here, process.argv[2])).href);
const h = mod.lessonBlocks()[0].html.replace(/\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g, (_, a, b) => katex.renderToString((a ?? b).trim(), { throwOnError: false, strict: "ignore", displayMode: a !== undefined }));
writeFileSync("public/_pv2.html", `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css"><body style="font:16px Inter,sans-serif;max-width:760px;margin:10px auto;padding:0 10px">${h}<script>document.querySelectorAll('details').forEach(d=>d.open=true)</script></body>`);
console.log("ok", h.length);
