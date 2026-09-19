// MHF4U assignments: 10 questions each in the four Ontario achievement categories —
// 3 Knowledge & Understanding, 2 Thinking, 2 Communication, 3 Application.
// Question text lives in mhf4u-assign-u1..u7.mjs (one file per unit).
import { U1 } from "./mhf4u-assign-u1.mjs";
import { U2 } from "./mhf4u-assign-u2.mjs";
import { U3 } from "./mhf4u-assign-u3.mjs";
import { U4 } from "./mhf4u-assign-u4.mjs";
import { U5 } from "./mhf4u-assign-u5.mjs";
import { U6 } from "./mhf4u-assign-u6.mjs";
import { U7 } from "./mhf4u-assign-u7.mjs";

const SECTIONS = [
  ["Knowledge & Understanding", "K", 3],
  ["Thinking", "T", 2],
  ["Communication", "C", 2],
  ["Application", "A", 3],
];

function build(code, def) {
  let n = 0;
  const lines = [];
  for (const [label, key, count] of SECTIONS) {
    const qs = def[key];
    if (!Array.isArray(qs) || qs.length !== count) {
      throw new Error(`Assignment ${code}: expected ${count} ${label} questions, found ${qs?.length ?? 0}`);
    }
    lines.push(label);
    for (const q of qs) {
      if (q.includes("\n")) throw new Error(`Assignment ${code}: a question contains a line break`);
      lines.push(`${++n}. ${q}`);
    }
  }
  return { title: `Assignment ${code} — ${def.topic}`, description: lines.join("\n") };
}

export const ASSIGN = {};
for (const unit of [U1, U2, U3, U4, U5, U6, U7]) {
  for (const [code, def] of Object.entries(unit)) ASSIGN[code] = build(code, def);
}
