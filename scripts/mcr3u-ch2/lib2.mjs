// Shared toolkit for the MCR3U chapter 2 rebuild (Equivalent Algebraic Expressions).
// Polynomials are arrays of integer coefficients, index = power (so 2x^2-3x+1 is [1,-3,2]).
// Everything shown to students (tables, expansions, answers) is computed here, and every claimed
// equivalence is registered with verify() so check.mjs can re-test it numerically at awkward x-values.
import { html, gframe, ex, pr, qa, watchOut, EX, PR, QA, MI } from "../mth1w-ch1/lib.mjs";
import { gview, graphSvg } from "../mpm2d-4_1/lib41.mjs";
export { html, gframe, ex, pr, qa, watchOut, EX, PR, QA, MI, gview, graphSvg };

// ───────── polynomial arithmetic ─────────
const trim = (p) => { const r = [...p]; while (r.length > 1 && r[r.length - 1] === 0) r.pop(); return r; };
export const padd = (a, b) => trim(Array.from({ length: Math.max(a.length, b.length) }, (_, i) => (a[i] || 0) + (b[i] || 0)));
export const pneg = (a) => a.map((c) => (c === 0 ? 0 : -c));
export const psub = (a, b) => padd(a, pneg(b));
export const pscale = (a, k) => trim(a.map((c) => c * k));
export const pmul = (a, b) => { const r = Array(a.length + b.length - 1).fill(0); a.forEach((x, i) => b.forEach((y, j) => (r[i + j] += x * y))); return trim(r); };
export const ppow = (a, n) => { let r = [1]; for (let i = 0; i < n; i++) r = pmul(r, a); return r; };
export const pdeg = (a) => trim(a).length - 1;
export const peval = (p, x) => p.reduceRight((acc, c) => acc * x + c, 0);
export const lin = (a, b) => [b, a]; // ax + b
export const pmulAll = (...ps) => ps.reduce(pmul, [1]);
const sq = (n) => (n === 1 ? "" : n === 0 ? "" : n < 10 ? `^${n}` : `^{${n}}`);
const vpart = (k, v) => (k === 0 ? "" : k === 1 ? v : v + sq(k));
/** LaTeX for a polynomial in standard (descending) form. */
export function ptex(p, v = "x") {
  const parts = [];
  for (let k = p.length - 1; k >= 0; k--) {
    const c = p[k]; if (c === 0) continue;
    const a = Math.abs(c), body = k === 0 ? `${a}` : `${a === 1 ? "" : a}${vpart(k, v)}`;
    parts.push(parts.length === 0 ? (c < 0 ? `-${body}` : body) : (c < 0 ? ` - ${body}` : ` + ${body}`));
  }
  return parts.length ? parts.join("") : "0";
}
export const nterms = (p) => p.filter((c) => c !== 0).length;
/** "(…)" unless the polynomial is a single term. */
export const par = (p, v = "x") => (nterms(p) <= 1 ? ptex(p, v) : `(${ptex(p, v)})`);
/** Product of factors: c·∏ f_i^{e_i}. Each factor is a poly or [poly, exponent]. */
export function prodTex(c, factors, v = "x") {
  const f = factors.map((x) => (Array.isArray(x[0]) ? x : [x, 1])).map(([p, e]) => `${par(p, v)}${e === 1 ? "" : e < 10 ? `^${e}` : `^{${e}}`}`);
  const lead = c === 1 ? "" : c === -1 ? "-" : `${c}`;
  return lead + f.join("");
}
/** Expression string for the graphing tool (uses * and ^). */
export const gx = (p, v = "x") => {
  const parts = [];
  for (let k = p.length - 1; k >= 0; k--) { const c = p[k]; if (c === 0) continue; parts.push(`${c < 0 ? "-" : parts.length ? "+" : ""}${Math.abs(c)}${k === 0 ? "" : k === 1 ? `*${v}` : `*${v}^${k}`}`); }
  return parts.length ? parts.join("") : "0";
};
export const range = (a, b, s = 1) => { const r = []; for (let x = a; x <= b + 1e-9; x += s) r.push(Math.round(x * 1e6) / 1e6); return r; };

// ───────── radicals ─────────
export const isqrt = (n) => Math.round(Math.sqrt(n));
/** n = k^2 * m with m square-free: returns [k, m]. */
export function simp(n) { let k = 1, m = n; for (let f = 2; f * f <= m; f++) while (m % (f * f) === 0) { m /= f * f; k *= f; } return [k, m]; }
export const radTex = (k, m) => (m === 1 ? `${k}` : `${k === 1 ? "" : k === -1 ? "-" : k}\\sqrt{${m}}`);

// ───────── number formatting for tables ─────────
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
export function fmtVal(v) {
  if (!Number.isFinite(v)) return "undefined";
  if (Math.abs(v - Math.round(v)) < 1e-9) return `${Math.round(v)}`.replace("-", "−");
  for (let d = 2; d <= 30; d++) { const n = Math.round(v * d); if (Math.abs(v - n / d) < 1e-9) { const g = gcd(n, d); return `${n / g < 0 ? "−" : ""}${Math.abs(n / g)}/${d / g}`; } }
  return v.toFixed(3).replace("-", "−");
}

// ───────── numerical verification registry ─────────
export const CHECKS = [];
/** Register "a(x) should equal b(x)" for every x where both are defined. */
export const verify = (name, a, b, opts = {}) => { CHECKS.push({ name, a, b, opts }); };
export function runChecks() {
  const bad = [];
  for (const { name, a, b, opts } of CHECKS) {
    const xs = opts.xs ?? [-3.7, -2.3, -1.1, 0.4, 1.7, 2.9, 4.3, 6.1];
    let used = 0;
    for (const x of xs) {
      const u = a(x), w = b(x);
      if (!Number.isFinite(u) || !Number.isFinite(w)) continue;
      used++;
      if (Math.abs(u - w) > 1e-7 * Math.max(1, Math.abs(u), Math.abs(w))) { bad.push(`${name}: x=${x} gives ${u} vs ${w}`); break; }
    }
    if (used < 3) bad.push(`${name}: only ${used} usable test points`);
  }
  return { total: CHECKS.length, bad };
}

// ───────── lesson widgets ─────────
const TH = `style="border:1px solid #c7d2fe;padding:6px 10px;text-align:center;background:#eef2ff;color:#3730a3;font-weight:700;"`;
const TD = `style="border:1px solid #e2e8f0;padding:6px 10px;text-align:center;"`;
/** "Equivalence detector": evaluate several expressions at the same x-values; a final row says whether they agree. */
export function eqTable(exprs, xs, caption = "") {
  const vals = exprs.map((e) => xs.map((x) => e.f(x)));
  const same = xs.map((_, i) => { const col = vals.map((v) => v[i]); const fin = col.filter(Number.isFinite); if (fin.length < col.length) return null; return col.every((v) => Math.abs(v - col[0]) < 1e-9); });
  const head = `<tr><th ${TH}>x</th>${xs.map((x) => `<th ${TH}>${String(x).replace("-", "−")}</th>`).join("")}</tr>`;
  const rows = exprs.map((e, r) => `<tr><td style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;font-weight:700;">\\(${e.tex}\\)</td>${vals[r].map((v) => `<td ${TD}>${fmtVal(v)}</td>`).join("")}</tr>`).join("");
  const verdict = `<tr><td style="border:1px solid #e2e8f0;padding:6px 10px;text-align:left;font-weight:700;color:#475569;">same?</td>${same.map((s) => `<td style="border:1px solid #e2e8f0;padding:6px 10px;text-align:center;font-weight:800;color:${s === null ? "#92400e" : s ? "#15803d" : "#b91c1c"};background:${s === null ? "#fef3c7" : s ? "#dcfce7" : "#fee2e2"};">${s === null ? "—" : s ? "✓" : "✗"}</td>`).join("")}</tr>`;
  return `<div style="overflow-x:auto;margin:10px 0;">${caption ? `<div style="font-size:13px;font-weight:700;color:#475569;margin-bottom:4px;">${caption}</div>` : ""}<table style="border-collapse:collapse;font-size:14px;min-width:${80 + xs.length * 62}px;"><tbody>${head}${rows}${verdict}</tbody></table></div>`;
}
const DEG_FILL = ["#f1f5f9", "#dbeafe", "#dcfce7", "#fef3c7", "#fee2e2", "#ede9fe"];
const termsOf = (p) => p.map((c, k) => (c === 0 ? null : (() => { const t = Array(k + 1).fill(0); t[k] = c; return t; })())).filter(Boolean).reverse();
/** Area model for p × q: one box per partial product, coloured by degree, with the collected answer underneath. */
export function areaModel(p, q, caption = "") {
  const cols = termsOf(p), rows = termsOf(q), cell = "border:2px solid #fff;padding:8px 10px;text-align:center;font-size:15px;";
  const head = `<tr><td style="padding:4px 8px;"></td>${cols.map((c) => `<td style="padding:4px 8px;text-align:center;font-weight:800;color:#1e40af;">\\(${ptex(c)}\\)</td>`).join("")}</tr>`;
  const body = rows.map((r) => `<tr><td style="padding:4px 8px;text-align:right;font-weight:800;color:#1e40af;">\\(${ptex(r)}\\)</td>${cols.map((c) => { const t = pmul(c, r); return `<td style="${cell}background:${DEG_FILL[Math.min(pdeg(t), 5)]};">\\(${ptex(t)}\\)</td>`; }).join("")}</tr>`).join("");
  return `<div style="overflow-x:auto;margin:10px 0;">${caption ? `<div style="font-size:13px;font-weight:700;color:#475569;margin-bottom:4px;">${caption}</div>` : ""}<table style="border-collapse:separate;border-spacing:0;"><tbody>${head}${body}</tbody></table><div style="margin-top:6px;font-size:14px;color:#475569;">Same colour = same power of \\(x\\) = like terms. Collect them: \\(${ptex(pmul(p, q))}\\)</div></div>`;
}
/** Wrong-then-right "spot the mistake" card with a numeric counterexample. */
export const mistake = (wrong, why, right) => `<div style="margin:10px 0;border-radius:10px;overflow:hidden;border:1px solid #fca5a5;"><div style="background:#fee2e2;padding:8px 12px;color:#7f1d1d;"><strong>✗ A student wrote:</strong> ${wrong}</div><div style="background:#fff;padding:8px 12px;color:#334155;"><strong>Why it fails:</strong> ${why}</div><div style="background:#dcfce7;padding:8px 12px;color:#14532d;"><strong>✓ Correct:</strong> ${right}</div></div>`;
/** Numbered decision list (e.g. the factoring order). */
export const steps = (title, items) => `<div style="margin:12px 0;padding:12px 14px;border-radius:12px;background:#f0fdf4;border:1px solid #86efac;"><div style="font-weight:800;color:#166534;margin-bottom:6px;">${title}</div><ol style="margin:0;padding-left:22px;line-height:1.7;">${items.map((i) => `<li>${i}</li>`).join("")}</ol></div>`;
/** Highlighted call-out. */
export const callout = (title, body, tone = "blue") => { const t = { blue: ["#eff6ff", "#93c5fd", "#1e3a8a"], green: ["#ecfdf5", "#86efac", "#166534"], amber: ["#fffbeb", "#fcd34d", "#92400e"], violet: ["#f5f3ff", "#c4b5fd", "#5b21b6"] }[tone]; return `<div style="margin:12px 0;padding:10px 14px;border-radius:12px;background:${t[0]};border:1px solid ${t[1]};border-left:5px solid ${t[1]};color:#1f2937;"><strong style="color:${t[2]};">${title}</strong> ${body}</div>`; };
/** Interactive graph of two (or more) expressions that should overlay exactly. */
export const sameGraph = (exprs, bounds, title, labels = [], extra = {}) => gframe(exprs, { title, labels, ...gview(...bounds), ...extra });
/** Challenge box with a collapsible solution. */
export const challenge = (q, ans) => `<div style="margin:12px 0;padding:12px 14px;border-radius:12px;background:#faf5ff;border:1px solid #d8b4fe;border-left:5px solid #9333ea;"><div style="font-weight:800;color:#6b21a8;">\u{1F31F} Challenge</div><div style="margin:4px 0;">${q}</div><details><summary>View solution</summary><div style="margin-top:6px;">${ans}</div></details></div>`;
/** Collapsible practice box (same markup as the other lessons). */
export const practice = (n, label, q, ans) => pr(n, label, q, ans);
export const stripEmoji = (s) => s.replace(/\\u\{([0-9A-F]+)\}/g, (_, h) => String.fromCodePoint(parseInt(h, 16)));


// ───────── parsing: P("3x^2-7x+2") -> [2,-7,3] ─────────
export function P(s) {
  const t = String(s).replace(/\s+/g, "").replace(/^\((.*)\)$/, "$1");
  const p = [0];
  for (const term of t.match(/[+-]?[^+-]+/g) ?? []) {
    const m = term.match(/^([+-]?)(\d*)(x?)(?:\^(\d+))?$/);
    if (!m) throw new Error(`P(): cannot parse term "${term}" in "${s}"`);
    const [, sg, digits, hasX, e] = m;
    const c = (sg === "-" ? -1 : 1) * (digits === "" ? 1 : parseInt(digits, 10));
    const k = hasX ? (e ? parseInt(e, 10) : 1) : 0;
    while (p.length <= k) p.push(0);
    p[k] += c;
  }
  return trim(p);
}
