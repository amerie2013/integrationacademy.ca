// MCR3U chapter 8 money helpers shared by lessons, worksheets, bank, written and assignments.
// Rates are per compounding period (i); n is the number of periods; ordinary simple annuities (payments at period end).
export const fv = (P, i, n) => P * (1 + i) ** n;
export const pv = (A, i, n) => A / (1 + i) ** n;
export const annFV = (R, i, n) => (R * ((1 + i) ** n - 1)) / i;
export const annPV = (R, i, n) => (R * (1 - (1 + i) ** -n)) / i;
/** payment that accumulates FV */
export const payFV = (FV, i, n) => (FV * i) / ((1 + i) ** n - 1);
/** payment that repays a loan PV */
export const payPV = (PV, i, n) => (PV * i) / (1 - (1 + i) ** -n);
/** smallest whole n with (1 + i)ⁿ ≥ k */
export const periodsTo = (k, i) => { let n = 0; while ((1 + i) ** n < k) n++; return n; };
/** smallest n with annuity FV ≥ target */
export const paymentsTo = (target, R, i) => { let n = 1; while (annFV(R, i, n) < target) n++; return n; };
/** number of payments R needed to repay PV (last one may be partial) */
export const paymentsToRepay = (PV, R, i) => Math.ceil(-Math.log(1 - (PV * i) / R) / Math.log(1 + i));
/** balance after k payments of R on a loan PV */
export const balance = (PV, R, i, k) => PV * (1 + i) ** k - annFV(R, i, k);
/** round to cents (number) and format to 2 decimals (string) */
export const c2 = (v) => Math.round(v * 100) / 100;
export const m = (v) => c2(v).toFixed(2);
/** percent with k decimals */
export const pct = (v, k = 2) => (Math.round(v * 100 * 10 ** k) / 10 ** k).toFixed(k);
