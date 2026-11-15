// MCR3U-FR 2.5 — aides des radicaux (copie des aides locales de ../mcr3u-ch2/t2_5.mjs; les figures n'impriment que les
// étiquettes passées en argument).
import assert from "node:assert";
import { verify } from "./lib.mjs";

export const s = Math.sqrt;
/** Enregistre « a égale b » comme identité numérique. */
export const same = (name, a, b) => { assert.ok(Math.abs(a - b) < 1e-9, `${name}: ${a} vs ${b}`); verify(name, () => a, () => b); };
export const V = (tex, val) => ({ tex, val });
export const rtypes = (a, b) => { const A = a === 1 ? "" : String(a); const out = [`${A}√${b}`, `${A}sqrt(${b})`, `${A}*sqrt(${b})`, `${A}\\sqrt{${b}}`, `${A} √${b}`, `${A}√(${b})`, `${A}*√${b}`]; return [...new Set(out)]; };
export const hollowPt = (x, y, label, extra = {}) => ({ x, y, label, color: "#1e293b", hollow: true, ...extra });
/** Triangle rectangle (ou rectangle) pour les questions de la banque. kind : "tri" ou "rect". */
export function shapeSvg({ kind = "tri", w, h, wl, hl, dl = "?", title = "" }) {
  const W = 360, H = 240, L = 50, B = 190, bw = 230, bh = 130;
  let sv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Inter,Arial,sans-serif"><rect width="${W}" height="${H}" fill="#fff"/>`;
  if (title) sv += `<text x="${W / 2}" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="#334155">${title}</text>`;
  if (kind === "tri") {
    sv += `<polygon points="${L},${B} ${L + bw},${B} ${L},${B - bh}" fill="#eff6ff" stroke="#2563a0" stroke-width="2.2"/><polyline points="${L},${B - 14} ${L + 14},${B - 14} ${L + 14},${B}" fill="none" stroke="#2563a0" stroke-width="1.6"/>`;
    sv += `<text x="${L + bw / 2}" y="${B + 20}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${wl}</text><text x="${L - 8}" y="${B - bh / 2}" font-size="14" font-weight="700" text-anchor="end" fill="#0f172a">${hl}</text><text x="${L + bw / 2 + 12}" y="${B - bh / 2 - 8}" font-size="14" font-weight="700" fill="#be123c">${dl}</text>`;
  } else {
    sv += `<rect x="${L}" y="${B - bh}" width="${bw}" height="${bh}" fill="#eff6ff" stroke="#2563a0" stroke-width="2.2"/><line x1="${L}" y1="${B}" x2="${L + bw}" y2="${B - bh}" stroke="#be123c" stroke-width="2" stroke-dasharray="6 4"/>`;
    sv += `<text x="${L + bw / 2}" y="${B + 20}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${wl}</text><text x="${L - 8}" y="${B - bh / 2}" font-size="14" font-weight="700" text-anchor="end" fill="#0f172a">${hl}</text><text x="${L + bw / 2 - 40}" y="${B - bh / 2 - 12}" font-size="14" font-weight="700" fill="#be123c">${dl}</text>`;
  }
  return sv + "</svg>";
}
export { assert };
