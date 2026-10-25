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
/** binomial P(X = x) for n trials with success probability p */
export const bin = (n, p, x) => C(n, x) * p ** x * (1 - p) ** (n - x);
/** binomial P(X ≤ k) */
export const binLE = (n, p, k) => Array.from({ length: k + 1 }, (_, x) => bin(n, p, x)).reduce((a, b) => a + b, 0);
/** geometric P(X = k), X = failures before the first success */
export const geo = (p, k) => (1 - p) ** k * p;
/** hypergeometric P(X = x): sample r from N with a successes */
export const hyp = (N, a, r, x) => (C(a, x) * C(N - a, r - x)) / C(N, r);
/** expected value of [[x, p], ...] */
export const ev = (pairs) => pairs.reduce((s, [x, p]) => s + x * p, 0);
/** standard normal CDF Φ(z) (Abramowitz–Stegun 26.2.17, error < 7.5e-8) */
export const phi = (z) => { const t = 1 / (1 + 0.2316419 * Math.abs(z)), d = Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI); const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429)))); return z >= 0 ? 1 - p : p; };
/** normal CDF P(X ≤ x) for mean mu, sd s */
export const ncdf = (x, mu = 0, s = 1) => phi((x - mu) / s);
/** inverse standard normal (bisection) */
export const invPhi = (p) => { let lo = -8, hi = 8; for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (phi(m) < p) lo = m; else hi = m; } return (lo + hi) / 2; };
/** z rounded to 2 decimals, as read from a z-table */
export const z2 = (x, mu, s) => Math.round(((x - mu) / s) * 100) / 100;
/** table-style probability: Φ of z rounded to 2 decimals, to 4 places */
export const tphi = (z) => Math.round(phi(Math.round(z * 100) / 100) * 1e4) / 1e4;
/* one-variable statistics (quartiles: median of each half, the middle value excluded when n is odd) */
export const sum = (xs) => xs.reduce((a, b) => a + b, 0);
export const mean = (xs) => sum(xs) / xs.length;
export const median = (xs) => { const s = [...xs].sort((a, b) => a - b), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
export const modes = (xs) => { const c = new Map(); xs.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1)); const mx = Math.max(...c.values()); return mx === 1 ? [] : [...c].filter(([, k]) => k === mx).map(([x]) => x).sort((a, b) => a - b); };
export const quartiles = (xs) => { const s = [...xs].sort((a, b) => a - b), n = s.length, h = Math.floor(n / 2); return [median(s.slice(0, h)), median(s), median(s.slice(n - h))]; };
export const varP = (xs) => { const m = mean(xs); return sum(xs.map((x) => (x - m) ** 2)) / xs.length; };
export const varS = (xs) => { const m = mean(xs); return sum(xs.map((x) => (x - m) ** 2)) / (xs.length - 1); };
export const sdP = (xs) => Math.sqrt(varP(xs));
export const sdS = (xs) => Math.sqrt(varS(xs));
/** fences for outliers: [Q1 − 1.5 IQR, Q3 + 1.5 IQR] */
export const fences = (xs) => { const [q1, , q3] = quartiles(xs), i = q3 - q1; return [q1 - 1.5 * i, q3 + 1.5 * i]; };
/** percentile rank: percent of values below x plus half of those equal to x */
export const pctRank = (xs, x) => (100 * (xs.filter((v) => v < x).length + 0.5 * xs.filter((v) => v === x).length)) / xs.length;
/** value at the P-th percentile: L = (P/100)·n; if L is whole, average the L-th and (L+1)-th values, else take the next whole position */
export const pctVal = (xs, P) => { const s = [...xs].sort((a, b) => a - b), L = (P / 100) * s.length; return Number.isInteger(L) ? (s[L - 1] + s[L]) / 2 : s[Math.ceil(L) - 1]; };
/* two-variable statistics: least squares y = a x + b, Pearson r, r², residuals, fitted non-linear models */
export const linreg = (xs, ys) => { const n = xs.length, sx = sum(xs), sy = sum(ys), sxy = sum(xs.map((x, i) => x * ys[i])), sxx = sum(xs.map((x) => x * x)); const a = (n * sxy - sx * sy) / (n * sxx - sx * sx); return { a, b: (sy - a * sx) / n }; };
export const corr = (xs, ys) => { const n = xs.length, sx = sum(xs), sy = sum(ys), sxy = sum(xs.map((x, i) => x * ys[i])), sxx = sum(xs.map((x) => x * x)), syy = sum(ys.map((y) => y * y)); return (n * sxy - sx * sy) / Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy)); };
export const residuals = (xs, ys) => { const { a, b } = linreg(xs, ys); return ys.map((y, i) => y - (a * xs[i] + b)); };
/** coefficient of determination of any model f against the data: 1 − SSres/SStot */
export const rsq = (xs, ys, f) => { const m = mean(ys); return 1 - sum(ys.map((y, i) => (y - f(xs[i])) ** 2)) / sum(ys.map((y) => (y - m) ** 2)); };
/** exponential fit y = A·B^x by least squares on ln y */
export const expreg = (xs, ys) => { const { a, b } = linreg(xs, ys.map(Math.log)); return { A: Math.exp(b), B: Math.exp(a) }; };
/** quadratic least squares y = a x² + b x + c */
export const quadreg = (xs, ys) => {
  const S = (p, q = 0) => sum(xs.map((x, i) => x ** p * (q ? ys[i] : 1)));
  const M = [[S(4), S(3), S(2), S(2, 1)], [S(3), S(2), S(1), S(1, 1)], [S(2), S(1), xs.length, S(0, 1)]];
  for (let i = 0; i < 3; i++) { for (let k = i + 1; k < 3; k++) { const f = M[k][i] / M[i][i]; for (let j = i; j < 4; j++) M[k][j] -= f * M[i][j]; } }
  const c = M[2][3] / M[2][2], b = (M[1][3] - M[1][2] * c) / M[1][1], a = (M[0][3] - M[0][1] * b - M[0][2] * c) / M[0][0];
  return { a, b, c };
};
