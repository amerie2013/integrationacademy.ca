// Code helpers for chapter 3 bank questions: an SVG code listing and the program's computed output.
import { runAll } from "../../../lib/miniPython.ts";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/** A dark, line-numbered code listing as a standalone SVG document. */
export function codeFig(code) {
  const lines = code.replace(/^\n/, "").replace(/\n$/, "").split("\n");
  const W = Math.max(300, 56 + Math.max(...lines.map((l) => l.length)) * 8.6 + 20), H = lines.length * 22 + 20;
  const body = lines.map((l, i) => `<text x="34" y="${26 + i * 22}" font-size="12" text-anchor="end" fill="#64748b">${i + 1}</text><text x="46" y="${26 + i * 22}" font-size="14.5" fill="#e2e8f0" xml:space="preserve">${esc(l)}</text>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Consolas, 'DejaVu Sans Mono', Menlo, monospace"><rect width="${W}" height="${H}" rx="10" fill="#0f172a"/>${body}</svg>`;
}
/** Printed output (trailing newline removed); throws if the program fails. */
export function out(code) {
  const r = runAll(code.replace(/^\n/, ""));
  if (r.error) throw new Error(`program failed (${r.error.message}):\n${code}`);
  return r.output.replace(/\n$/, "");
}
/** Numeric output of a program that prints one number. */
export const numOut = (code) => { const v = Number(out(code)); if (!Number.isFinite(v)) throw new Error(`output is not a number: ${out(code)}`); return v; };
/** The error a program raises. */
export function errOf(code) { const r = runAll(code.replace(/^\n/, "")); if (!r.error) throw new Error("expected an error"); return r.error; }
/** Prompt + the program's first line (keeps prompts unique and gives context if the image is missing). */
export const withStart = (prompt, code) => {
  const ls = code.split("\n").map((l) => l.trim()).filter(Boolean);
  const parts = [/^def /.test(ls[0]) && ls[1] ? `${ls[0]} ${ls[1]}` : ls[0]];
  for (const re of [/^(for|while) /, /^if /]) {
    const hit = ls.find((l) => re.test(l));
    if (hit && !parts.some((p) => p.includes(hit))) parts.push(hit);
  }
  return `${prompt} (Key lines: ${parts.join(" … ")})`;
};
