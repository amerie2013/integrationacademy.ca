// Aides de code pour la banque du chapitre 3 (français) : mêmes listes SVG et sorties calculées que
// ../../mth1w-ch3/bank/code.mjs, avec la mention « Lignes clés » en français.
export { codeFig, out, numOut, errOf } from "../../mth1w-ch3/bank/code.mjs";

/** Énoncé + la première ligne du programme (énoncés uniques, et contexte si l'image manque). */
export const withStart = (prompt, code) => {
  const ls = code.split("\n").map((l) => l.trim()).filter(Boolean);
  const parts = [/^def /.test(ls[0]) && ls[1] ? `${ls[0]} ${ls[1]}` : ls[0]];
  for (const re of [/^(for|while) /, /^if /]) {
    const hit = ls.find((l) => re.test(l));
    if (hit && !parts.some((p) => p.includes(hit))) parts.push(hit);
  }
  return `${prompt} (Lignes clés : ${parts.join(" … ")})`;
};
