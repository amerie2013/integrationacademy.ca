// Answer checking for lesson practice widgets. Students type answers the way
// they would on paper: "-7", "3/4", "-1 1/2", "0.375", "2.5 x 10^4", "2.5e4",
// "35%", "3:5". Numeric answers compare by value (with a tolerance), so every
// equivalent form counts; text answers compare after normalising case/spaces.

export type AnswerSpec =
  // form "fraction": typed as a fraction (or mixed number / integer when the value is whole)
  // form "sci": typed in scientific notation, a × 10^n with 1 ≤ |a| < 10
  | { kind: "number"; value: number; tol?: number; percent?: boolean; form?: "fraction" | "sci" }
  | { kind: "text"; accept: string[] }
  | { kind: "choice"; options: string[]; correct: number }
  | { kind: "ratio"; value: [number, number]; lowest?: boolean }; // equivalent ratios count; lowest: must be in simplest form

const MINUS = /[−–—]/g; // typographic minus / dashes -> "-"

/** Parse a typed number. Returns null when it isn't one. */
export function parseNumber(raw: string): number | null {
  let s = raw.trim().replace(MINUS, "-").replace(/,/g, "").replace(/\s+/g, " ");
  if (!s) return null;
  let scale = 1;
  if (s.endsWith("%")) { s = s.slice(0, -1).trim(); scale = 0.01; }
  // scientific notation: 2.5 x 10^4, 2.5*10^-3, 2.5×10^(−3), 2.5e4
  const sci = s.match(/^(-?\d*\.?\d+)\s*(?:[x×*·]\s*10\s*\^\s*\(?\s*(-?\d+)\s*\)?|e(-?\d+))$/i);
  if (sci) return Number(sci[1]) * 10 ** Number(sci[2] ?? sci[3]) * scale;
  const pow = s.match(/^10\s*\^\s*\(?\s*(-?\d+)\s*\)?$/);
  if (pow) return 10 ** Number(pow[1]) * scale;
  // mixed number: -1 1/2
  const mixed = s.match(/^(-?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixed) {
    const v = Number(mixed[2]) + Number(mixed[3]) / Number(mixed[4]);
    return (mixed[1] ? -v : v) * scale;
  }
  // fraction: -3/4, 3/-4, (-3)/4
  const fr = s.replace(/[()]/g, "").match(/^(-?\d*\.?\d+)\s*\/\s*(-?\d*\.?\d+)$/);
  if (fr) {
    const d = Number(fr[2]);
    return d === 0 ? null : (Number(fr[1]) / d) * scale;
  }
  if (/^-?\d*\.?\d+$/.test(s)) return Number(s) * scale;
  return null;
}

const norm = (s: string) => s.trim().toLowerCase().replace(MINUS, "-").replace(/\s+/g, " ").replace(/[.]$/, "");

export function checkAnswer(spec: AnswerSpec, raw: string | number): boolean {
  if (spec.kind === "choice") return Number(raw) === spec.correct;
  const s = String(raw);
  if (spec.kind === "text") return spec.accept.some((a) => norm(a) === norm(s) || norm(a).replace(/ /g, "") === norm(s).replace(/ /g, ""));
  if (spec.kind === "ratio") {
    const r = parseRatio(s);
    if (!r || !sameRatio(r, spec.value)) return false;
    return !(spec.lowest && notLowest(r[0], r[1]));
  }
  let v = parseNumber(s);
  if (v === null) return false;
  // "35" for a percent question means 35%.
  if (spec.percent && !s.trim().endsWith("%")) v = v / 100;
  const tol = spec.tol ?? Math.max(1e-9, Math.abs(spec.value) * 1e-9);
  if (Math.abs(v - spec.value) > tol) return false;
  return !wrongForm(spec, s);
}

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
const notLowest = (a: number, b: number) => !Number.isInteger(a) || !Number.isInteger(b) || gcd(a, b) !== 1;
function parseRatio(raw: string): [number, number] | null {
  const m = raw.replace(MINUS, "-").match(/^\s*(-?\d*\.?\d+)\s*(?::|to|\/)\s*(-?\d*\.?\d+)\s*$/i);
  return m ? [Number(m[1]), Number(m[2])] : null;
}
const sameRatio = ([a, b]: [number, number], [c, d]: [number, number]) => b !== 0 && Math.abs(a / b - c / d) < 1e-9;

/** True when the typed form is not the one the question asked for (fraction / scientific notation). */
export function wrongForm(spec: AnswerSpec, raw: string): boolean {
  if (spec.kind !== "number" || !spec.form) return false;
  if (spec.form === "sci") {
    const m = raw.trim().replace(MINUS, "-").match(/^(-?\d*\.?\d+)\s*(?:[x×*·]\s*10\s*\^|e)/i);
    return !m || Math.abs(Number(m[1])) < 1 || Math.abs(Number(m[1])) >= 10;
  }
  if (Number.isInteger(spec.value) && /^\s*-?\d+\s*$/.test(raw)) return false;
  return !raw.includes("/");
}

/** Right value, wrong form — lets the UI say so instead of "not yet". */
export function rightValueWrongForm(spec: AnswerSpec, raw: string): boolean {
  if (spec.kind === "ratio") {
    const r = parseRatio(raw);
    return !!spec.lowest && !!r && sameRatio(r, spec.value) && notLowest(r[0], r[1]);
  }
  if (spec.kind !== "number" || !spec.form || !wrongForm(spec, raw)) return false;
  const v = parseNumber(raw);
  return v !== null && Math.abs(v - spec.value) <= Math.max(1e-6, Math.abs(spec.value) * 1e-6);
}
