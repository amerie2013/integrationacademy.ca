// node scripts/mhf4u-ch2/sign.check.mjs — every 2.6 example's sign chart must agree with the ORIGINAL inequality
import { lin, k, solve } from "./sign.mjs";

const inSol = (iv, x) => iv.some(([lo, hi, li, hi2]) => (x > lo && x < hi) || (li && x === lo) || (hi2 && x === hi));
// [name, original f(x), op, factors, expected interval text]
const CASES = [
  ["L1", (x) => (x - 2) * (x + 3) * (x - 5), "<", [lin(1, -2), lin(1, 3), lin(1, -5)]],
  ["L2", (x) => x ** 3 - x * x - 12 * x, ">=", [lin(1, 0), lin(1, -4), lin(1, 3)]],
  ["L3", (x) => 2 * x ** 3 + 3 * x * x - 11 * x - 6, "<=", [lin(1, -2), lin(2, 1), lin(1, 3)]],
  ["L4", (x) => (x - 1) ** 2 * (x + 4), ">", [lin(1, -1, 2), lin(1, 4)]],
  ["L5", (x) => x * (x * x + 2 * x - 8), ">", [lin(1, 0), lin(1, 4), lin(1, -2)]],
  ["LH1", (x) => x ** 4 - 3 * x ** 3 - 10 * x * x, "<=", [lin(1, 0, 2), lin(1, -5), lin(1, 2)]],
  ["LH2", (x) => x ** 3 + 3 * x * x - 4, ">=", [lin(1, -1), lin(1, 2, 2)]],
  ["W1", (x) => (x + 4) * (x - 1) * (x - 3), ">", [lin(1, 4), lin(1, -1), lin(1, -3)]],
  ["W2", (x) => -x * (x - 2) * (x + 5), ">=", [k(-1), lin(1, 0), lin(1, -2), lin(1, 5)]],
  ["W3", (x) => x ** 3 - 2 * x * x - 15 * x, "<", [lin(1, 0), lin(1, -5), lin(1, 3)]],
  ["W4", (x) => x ** 3 - 3 * x * x - 6 * x + 8, ">=", [lin(1, -1), lin(1, -4), lin(1, 2)]],
  ["W5", (x) => (x + 2) ** 2 * (x - 1) * (x - 4), "<=", [lin(1, 2, 2), lin(1, -1), lin(1, -4)]],
  ["W6", (x) => x ** 4 - 17 * x * x + 16, "<=", [lin(1, -1), lin(1, 1), lin(1, -4), lin(1, 4)]],
  ["W7", (x) => 3 * x ** 3 + x * x - 12 * x - 4, ">", [lin(3, 1), lin(1, -2), lin(1, 2)]],
  ["W8", (x) => (x - 3) ** 3 * (x + 1), ">=", [lin(1, -3, 3), lin(1, 1)]],
  ["W9", (x) => x * ((x - 2) ** 2 - 9), "<=", [lin(1, 0), lin(1, -5), lin(1, 1)]],
];
let bad = 0;
for (const [name, f, op, factors] of CASES) {
  const iv = solve(factors, op);
  let wrong = 0, tested = 0;
  for (let x = -9; x <= 9; x += 0.0625) {
    const v = f(x), want = op === "<" ? v < 0 : op === ">" ? v > 0 : op === "<=" ? v <= 1e-12 : v >= -1e-12;
    if (op.includes("=") ? false : false) continue;
    tested++;
    if (inSol(iv, x) !== want) { wrong++; if (wrong <= 3) console.log("   mismatch", name, "x =", x, "f =", v); }
  }
  console.log(wrong ? "FAIL" : "ok  ", name, op, JSON.stringify(iv.map(([a, b]) => [a, b])), `(${tested} points)`);
  bad += wrong ? 1 : 0;
}
console.log(bad ? `${bad} case(s) FAILED` : "all sign charts agree with the original inequalities");
process.exit(bad ? 1 : 0);
