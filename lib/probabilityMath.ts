// MDM4U Probability: theoretical probability, complement, addition/
// multiplication rules, conditional probability, odds, and expected value.
// Plain floating-point arithmetic (unlike countingMath.ts, nothing here
// grows past what a double handles) — used by components/Probability.tsx.

export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b));
  while (b) { [a, b] = [b, a % b]; }
  return a || 1;
}

/** Reduce favorable/total to lowest terms, e.g. 6/36 → 1/6. */
export function simplifyFraction(num: number, den: number): { num: number; den: number } {
  if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) return { num, den };
  const g = gcd(num, den);
  return { num: num / g, den: den / g };
}

export function fmtProb(p: number): string {
  return Number.isFinite(p) ? parseFloat(p.toFixed(4)).toString() : "—";
}
export function fmtPct(p: number): string {
  return Number.isFinite(p) ? parseFloat((p * 100).toFixed(2)).toString() + "%" : "—";
}

/** P(E) = favorable / total. */
export function theoreticalProbability(favorable: number, total: number): number {
  return total > 0 ? favorable / total : NaN;
}

/** P(E') = 1 − P(E). */
export function complement(p: number): number {
  return 1 - p;
}

/** P(A ∪ B) = P(A) + P(B) − P(A ∩ B) — the general addition rule (P(A∩B)=0 for mutually exclusive events). */
export function unionProbability(pA: number, pB: number, pIntersect: number): number {
  return pA + pB - pIntersect;
}

/** P(A ∩ B ∩ …) = P(A) × P(B) × … for independent events. */
export function intersectionIndependent(probs: number[]): number {
  return probs.reduce((a, b) => a * b, 1);
}

/** P(A | B) = P(A ∩ B) / P(B). */
export function conditionalProbability(pIntersect: number, pB: number): number {
  return pB > 0 ? pIntersect / pB : NaN;
}

/**
 * Odds in favor of E, as a reduced integer ratio favor:against. p is
 * decimal (e.g. 0.25), so it's scaled to an integer numerator/denominator
 * first — simplifyFraction()'s gcd() only makes sense on integers, and
 * passing raw decimals into it (e.g. gcd(0.25, 0.75)) would round them away.
 */
export function oddsInFavor(p: number): { favor: number; against: number } {
  const scale = 1e6;
  const f = simplifyFraction(Math.round(p * scale), Math.round((1 - p) * scale));
  return { favor: f.num, against: f.den };
}

/** E(X) = Σ xᵢ · P(xᵢ). Also returns how far the given probabilities are from summing to 1, so a caller can warn. */
export function expectedValue(pairs: { value: number; prob: number }[]): { ev: number; probSum: number } {
  const probSum = pairs.reduce((a, p) => a + p.prob, 0);
  const ev = pairs.reduce((a, p) => a + p.value * p.prob, 0);
  return { ev, probSum };
}
