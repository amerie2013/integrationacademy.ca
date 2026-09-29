// MHF4U-FR assignments: 10 questions par sujet dans les quatre catégories de rendement de
// l'Ontario — 3 Connaissance et compréhension, 2 Réflexion, 2 Communication, 3 Mise en application.
import { U1 } from "./mhf4u-assign-fr-u1.mjs";
import { U2 } from "./mhf4u-assign-fr-u2.mjs";
import { U3 } from "./mhf4u-assign-fr-u3.mjs";
import { U4 } from "./mhf4u-assign-fr-u4.mjs";
import { U5 } from "./mhf4u-assign-fr-u5.mjs";
import { U6 } from "./mhf4u-assign-fr-u6.mjs";
import { U7 } from "./mhf4u-assign-fr-u7.mjs";

const SECTIONS = [
  ["Connaissance et compréhension", "K", 3],
  ["Réflexion", "T", 2],
  ["Communication", "C", 2],
  ["Mise en application", "A", 3],
];

function build(code, def) {
  let n = 0;
  const lines = [];
  for (const [label, key, count] of SECTIONS) {
    const qs = def[key];
    if (!Array.isArray(qs) || qs.length !== count) {
      throw new Error(`Devoir ${code} : ${count} questions attendues pour « ${label} », ${qs?.length ?? 0} trouvées`);
    }
    lines.push(label);
    for (const q of qs) {
      if (q.includes("\n")) throw new Error(`Devoir ${code} : une question contient un saut de ligne`);
      lines.push(`${++n}. ${q}`);
    }
  }
  return { title: `Devoir ${code} — ${def.topic}`, description: lines.join("\n") };
}

export const ASSIGN = {};
for (const unit of [U1, U2, U3, U4, U5, U6, U7]) {
  for (const [code, def] of Object.entries(unit)) ASSIGN[code] = build(code, def);
}
