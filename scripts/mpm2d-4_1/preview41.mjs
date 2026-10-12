// Local-only preview of the 4.1 lesson (no database). Writes public/_pv41.html -> http://localhost:3001/_pv41.html. Delete that file when done.
import { createRequire } from "module";
import { writeFileSync } from "fs";
import { lessonBlocks } from "./lesson41.mjs";
const katex = createRequire(import.meta.url)("katex");
const h = lessonBlocks()[0].html.replace(/\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g, (_, a, b) => katex.renderToString((a ?? b).trim(), { throwOnError: false, strict: "ignore", displayMode: a !== undefined }));
writeFileSync("public/_pv41.html", `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css"><body style="font:16px Inter,sans-serif;max-width:760px;margin:10px auto;padding:0 10px">${h}<script>document.querySelectorAll('details').forEach(d=>d.open=true)</script></body>`);
console.log("ok");
