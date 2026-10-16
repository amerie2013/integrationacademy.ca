// One-off helper: make w1_N.mjs take its problems from p1_N.mjs (replaces the inline problems array).
import fs from "fs";
for (const n of process.argv.slice(2)) {
  const f = `scripts/mth1w-ch1/v2/ws/w${n}.mjs`;
  let s = fs.readFileSync(f, "utf8");
  if (s.includes("problems: PROBLEMS")) { console.log(`${n}: already done`); continue; }
  const a = s.indexOf("  problems: [");
  const b = s.lastIndexOf("\n};");
  if (a < 0 || b < 0) throw new Error(`${n}: problems block not found`);
  s = s.slice(0, a) + "  problems: PROBLEMS," + s.slice(b);
  s = s.replace(/^(import [^\n]+\n)/m,`$1import { PROBLEMS } from "./p${n}.mjs";\n`);
  fs.writeFileSync(f, s);
  console.log(`${n}: now uses p${n}.mjs`);
}
