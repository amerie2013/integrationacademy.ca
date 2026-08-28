// MDM4U Probability Distributions: the binomial distribution and the
// normal distribution (z-scores, area under the curve, inverse normal).
// Used by components/Distributions.tsx.

/** Error function via the Abramowitz & Stegun 7.1.26 approximation (max
 * error ~1.5e-7) — plenty precise for a teaching tool, no external deps. */
function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

/** P(X ≤ x) for X ~ Normal(mean, sd). */
export function normalCDF(x: number, mean: number, sd: number): number {
  if (sd <= 0) return NaN;
  return 0.5 * (1 + erf((x - mean) / (sd * Math.SQRT2)));
}

/** Standard normal probability density, for plotting the bell curve. */
export function normalPDF(x: number, mean: number, sd: number): number {
  if (sd <= 0) return NaN;
  return Math.exp(-((x - mean) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));
}

export function zScore(x: number, mean: number, sd: number): number {
  return sd > 0 ? (x - mean) / sd : NaN;
}

/** Inverse standard normal CDF (quantile function) via Acklam's rational
 * approximation (relative error ~1.15e-9). Returns the z such that
 * P(Z ≤ z) = p for standard normal Z. */
export function inverseStandardNormalCDF(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
  const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
  const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
  const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
  const pLow = 0.02425, pHigh = 1 - pLow;
  if (p < pLow) {
    const q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  if (p <= pHigh) {
    const q = p - 0.5, r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  }
  const q = Math.sqrt(-2 * Math.log(1 - p));
  return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
}

/** The x such that P(X ≤ x) = p for X ~ Normal(mean, sd). */
export function inverseNormalCDF(p: number, mean: number, sd: number): number {
  return mean + inverseStandardNormalCDF(p) * sd;
}

/** P(X = k) for X ~ Binomial(n, p) = ₙCₖ pᵏ(1−p)ⁿ⁻ᵏ. Computed in log-space
 * (rather than via a huge ₙCₖ times a tiny pᵏ) so it stays numerically
 * stable for large n instead of overflowing/underflowing. */
export function binomialPMF(n: number, k: number, p: number): number {
  if (k < 0 || k > n || !Number.isInteger(k)) return 0;
  if (p <= 0) return k === 0 ? 1 : 0;
  if (p >= 1) return k === n ? 1 : 0;
  let logResult = 0;
  for (let i = 1; i <= k; i++) logResult += Math.log(n - i + 1) - Math.log(i);
  logResult += k * Math.log(p) + (n - k) * Math.log(1 - p);
  return Math.exp(logResult);
}

/** P(X ≤ k) for X ~ Binomial(n, p). */
export function binomialCDF(n: number, k: number, p: number): number {
  let sum = 0;
  for (let i = 0; i <= k; i++) sum += binomialPMF(n, i, p);
  return sum;
}

export function binomialMean(n: number, p: number): number { return n * p; }
export function binomialVariance(n: number, p: number): number { return n * p * (1 - p); }
export function binomialSD(n: number, p: number): number { return Math.sqrt(binomialVariance(n, p)); }
