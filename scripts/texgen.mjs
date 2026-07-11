// Generate an editable LaTeX source (.tex) for each worksheet content module.
//   node scripts/texgen.mjs           -> all worksheets
//   node scripts/texgen.mjs 1.        -> only codes starting with "1."
// Output: scripts/_tex/<code>.tex   (open in Overleaf or compile with pdflatex)
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { toTex, toTexCompact } from "./tex.mjs";

const SRC = path.resolve("scripts/worksheets");
const OUT = path.resolve("scripts/_tex");
fs.mkdirSync(OUT, { recursive: true });

const only = process.argv[2];
const files = fs.existsSync(SRC)
  ? fs.readdirSync(SRC).filter((f) => f.endsWith(".mjs") && (!only || f.startsWith(only))).sort()
  : [];
if (!files.length) { console.log("No content files in scripts/worksheets/" + (only ? " matching " + only : "")); process.exit(0); }

for (const f of files) {
  const mod = (await import(pathToFileURL(path.join(SRC, f)).href)).default;
  const safe = mod.code.replace(/[^\w.\-]/g, "_");
  fs.writeFileSync(path.join(OUT, safe + ".tex"), toTex(mod), "utf8");
  fs.writeFileSync(path.join(OUT, safe + "_compact.tex"), toTexCompact(mod), "utf8");
  console.log(`✓ ${mod.code} ${mod.title}  ->  ${safe}.tex + ${safe}_compact.tex`);
}
console.log("done →", OUT);
