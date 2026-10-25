// Counting helpers for MDM4U content: every answer is computed, never typed by hand.
export const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
export const P = (n, r) => (r < 0 || r > n ? 0 : fact(n) / fact(n - r));
export const C = (n, r) => { if (r < 0 || r > n) return 0; let v = 1; for (let k = 1; k <= r; k++) v = (v * (n - r + k)) / k; return Math.round(v); };
/** arrangements of a word / multiset: multi("BANANA") or multi([3,2,1]) */
export const multi = (w) => { const k = Array.isArray(w) ? w : Object.values([...w].reduce((a, ch) => ((a[ch] = (a[ch] || 0) + 1), a), {})); return fact(k.reduce((s, x) => s + x, 0)) / k.reduce((p, x) => p * fact(x), 1); };
/** prose number with thousands separators: 40,320 */
export const n = (v) => Number(v).toLocaleString("en-US", { maximumFractionDigits: 6 });
/** TeX number with thousands separators that KaTeX does not space: 40{,}320 */
export const t = (v) => n(v).replace(/,/g, "{,}");
/** brute-force count of arrangements of `items` that satisfy pred (for checking formulas) */
export function countPerms(items, pred = () => true) {
  let c = 0; const used = Array(items.length).fill(false), cur = [];
  const go = () => { if (cur.length === items.length) { if (pred(cur)) c++; return; } const seen = new Set(); for (let i = 0; i < items.length; i++) if (!used[i] && !seen.has(items[i])) { seen.add(items[i]); used[i] = true; cur.push(items[i]); go(); cur.pop(); used[i] = false; } };
  go(); return c;
}
/** term coefficient of x^(n-k) in (a x + b)^n */
export const binTerm = (a, b, N, k) => C(N, k) * a ** (N - k) * b ** k;
export const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
/** reduced fraction as text "a/b" (or "a" when whole) */
export const fs = (a, b) => { const g = gcd(a, b), n = a / g, d = b / g; return d === 1 ? String(n) : `${n}/${d}`; };
/** reduced fraction in TeX */
export const fx = (a, b) => { const g = gcd(a, b), n = a / g, d = b / g; return d === 1 ? String(n) : `\frac{${n}}{${d}}`; };
/** round to 3 or k decimals */
export const r3 = (v, k = 3) => Math.round(v * 10 ** k) / 10 ** k;
