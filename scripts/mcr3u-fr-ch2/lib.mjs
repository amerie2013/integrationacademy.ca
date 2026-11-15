// MCR3U-FR chapitre 2 — mêmes aides que l'anglais (../mcr3u-ch2/lib2.mjs : moteur de polynômes, verify, etc.),
// avec le cadre de leçon en français. Les ré-exportations explicites l'emportent sur export *.
// Les aides anglaises qui impriment des mots (eqTable, areaModel, mistake, challenge, fmtVal, l'attribut title de
// gframe) ont ici une copie française au balisage identique.
import { gframe as gframeEN, gview, peval, pmul, pdeg, ptex } from "../mcr3u-ch2/lib2.mjs";
export * from "../mcr3u-ch2/lib2.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, hard, wrapUp } from "../mcr3u-fr/chrome.mjs";
import { pr } from "../mcr3u-fr/chrome.mjs";

/** Graphique interactif (même iframe que l'anglais ; seule l'infobulle est traduite). */
export const gframe = (items, o = {}) => gframeEN(items, o).replace('title="Interactive graph"', 'title="Graphique interactif"');
/** Graphique interactif de deux expressions (ou plus) qui doivent se superposer exactement. */
export const sameGraph = (exprs, bounds, title, labels = [], extra = {}) => gframe(exprs, { title, labels, ...gview(...bounds), ...extra });
/** Encadré d'exercice repliable (même balisage que les autres leçons). */
export const practice = (n, label, q, ans) => pr(n, label, q, ans);

// ───────── formatage des nombres pour les tableaux ─────────
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
export function fmtVal(v) {
  if (!Number.isFinite(v)) return "non défini";
  if (Math.abs(v - Math.round(v)) < 1e-9) return `${Math.round(v)}`.replace("-", "−");
  for (let d = 2; d <= 30; d++) { const n = Math.round(v * d); if (Math.abs(v - n / d) < 1e-9) { const g = gcd(n, d); return `${n / g < 0 ? "−" : ""}${Math.abs(n / g)}/${d / g}`; } }
  return v.toFixed(3).replace("-", "−");
}

const TH = `style="border:1px solid #c7d2fe;padding:6px 10px;text-align:center;background:#eef2ff;color:#3730a3;font-weight:700;"`;
const TD = `style="border:1px solid #e2e8f0;padding:6px 10px;text-align:center;"`;
/** « Détecteur d'équivalence » : on évalue plusieurs expressions aux mêmes valeurs de x ; la dernière ligne dit si elles concordent. */
export function eqTable(exprs, xs, caption = "") {
  const vals = exprs.map((e) => xs.map((x) => e.f(x)));
  const same = xs.map((_, i) => { const col = vals.map((v) => v[i]); const fin = col.filter(Number.isFinite); if (fin.length < col.length) return null; return col.every((v) => Math.abs(v - col[0]) < 1e-9); });
  const head = `<tr><th ${TH}>x</th>${xs.map((x) => `<th ${TH}>${String(x).replace("-", "−")}</th>`).join("")}</tr>`;
  const rows = exprs.map((e, r) => `<tr><td style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;font-weight:700;">\\(${e.tex}\\)</td>${vals[r].map((v) => `<td ${TD}>${fmtVal(v)}</td>`).join("")}</tr>`).join("");
  const verdict = `<tr><td style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;font-weight:700;color:#475569;">identiques ?</td>${same.map((s) => `<td style="border:1px solid #e2e8f0;padding:6px 10px;text-align:center;font-weight:800;color:${s === null ? "#92400e" : s ? "#15803d" : "#b91c1c"};background:${s === null ? "#fef3c7" : s ? "#dcfce7" : "#fee2e2"};">${s === null ? "—" : s ? "✓" : "✗"}</td>`).join("")}</tr>`;
  return `<div style="overflow-x:auto;margin:10px 0;">${caption ? `<div style="font-size:13px;font-weight:700;color:#475569;margin-bottom:4px;">${caption}</div>` : ""}<table style="border-collapse:collapse;font-size:14px;min-width:${80 + xs.length * 62}px;"><tbody>${head}${rows}${verdict}</tbody></table></div>`;
}
const DEG_FILL = ["#f1f5f9", "#dbeafe", "#dcfce7", "#fef3c7", "#fee2e2", "#ede9fe"];
const termsOf = (p) => p.map((c, k) => (c === 0 ? null : (() => { const t = Array(k + 1).fill(0); t[k] = c; return t; })())).filter(Boolean).reverse();
/** Modèle d'aire pour p × q : une case par produit partiel, colorée selon le degré, avec la réponse regroupée dessous. */
export function areaModel(p, q, caption = "") {
  const cols = termsOf(p), rows = termsOf(q), cell = "border:2px solid #fff;padding:8px 10px;text-align:center;font-size:15px;";
  const head = `<tr><td style="padding:4px 8px;"></td>${cols.map((c) => `<td style="padding:4px 8px;text-align:center;font-weight:800;color:#1e40af;">\\(${ptex(c)}\\)</td>`).join("")}</tr>`;
  const body = rows.map((r) => `<tr><td style="padding:4px 8px;text-align:right;font-weight:800;color:#1e40af;">\\(${ptex(r)}\\)</td>${cols.map((c) => { const t = pmul(c, r); return `<td style="${cell}background:${DEG_FILL[Math.min(pdeg(t), 5)]};">\\(${ptex(t)}\\)</td>`; }).join("")}</tr>`).join("");
  return `<div style="overflow-x:auto;margin:10px 0;">${caption ? `<div style="font-size:13px;font-weight:700;color:#475569;margin-bottom:4px;">${caption}</div>` : ""}<table style="border-collapse:separate;border-spacing:0;"><tbody>${head}${body}</tbody></table><div style="margin-top:6px;font-size:14px;color:#475569;">Même couleur = même puissance de \\(x\\) = termes semblables. On les regroupe : \\(${ptex(pmul(p, q))}\\)</div></div>`;
}
/** Carte « trouve l'erreur » : faux puis juste, avec un contre-exemple numérique. */
export const mistake = (wrong, why, right) => `<div style="margin:10px 0;border-radius:10px;overflow:hidden;border:1px solid #fca5a5;"><div style="background:#fee2e2;padding:8px 12px;color:#7f1d1d;"><strong>✗ Un élève a écrit :</strong> ${wrong}</div><div style="background:#fff;padding:8px 12px;color:#334155;"><strong>Pourquoi c'est faux :</strong> ${why}</div><div style="background:#dcfce7;padding:8px 12px;color:#14532d;"><strong>✓ Correct :</strong> ${right}</div></div>`;
/** Encadré défi avec solution repliable. */
export const challenge = (q, ans) => `<div style="margin:12px 0;padding:12px 14px;border-radius:12px;background:#faf5ff;border:1px solid #d8b4fe;border-left:5px solid #9333ea;"><div style="font-weight:800;color:#6b21a8;">\u{1F31F} Défi</div><div style="margin:4px 0;">${q}</div><details><summary>Voir la solution</summary><div style="margin-top:6px;">${ans}</div></details></div>`;
export { peval };
