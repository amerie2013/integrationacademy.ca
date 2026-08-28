// Combinatorics: factorial, permutations, combinations, multiset
// permutations, and Pascal's triangle rows. Exact via BigInt — n! passes
// Number.MAX_SAFE_INTEGER already at n=18 — used by components/Counting.tsx.
// Uses BigInt(n) rather than the `1n` literal syntax, since this project's
// TS target (ES2017) predates BigInt literals even though the runtime and
// `lib` support BigInt itself.

export const MAX_N = 1000; // generous for a classroom tool; keeps BigInt work instant

export function factorial(n: number): bigint {
  let r = BigInt(1);
  for (let i = 2; i <= n; i++) r *= BigInt(i);
  return r;
}

/** ₙPᵣ = n! / (n − r)! — ordered arrangements of r items chosen from n. */
export function permutation(n: number, r: number): bigint {
  if (r < 0 || r > n) return BigInt(0);
  let result = BigInt(1);
  for (let i = 0; i < r; i++) result *= BigInt(n - i);
  return result;
}

/** ₙCᵣ = n! / (r!(n − r)!) — unordered selections of r items from n. Computed
 * incrementally (never forming the full n!) so it stays fast for large n. */
export function combination(n: number, r: number): bigint {
  if (r < 0 || r > n) return BigInt(0);
  r = Math.min(r, n - r);
  let result = BigInt(1);
  for (let i = 0; i < r; i++) result = (result * BigInt(n - i)) / BigInt(i + 1);
  return result;
}

/** Distinct arrangements of a multiset: n! / (a₁! × a₂! × …) for group sizes a₁, a₂, … */
export function multisetPermutations(groupSizes: number[]): bigint {
  const n = groupSizes.reduce((a, b) => a + b, 0);
  let denom = BigInt(1);
  for (const g of groupSizes) denom *= factorial(g);
  return factorial(n) / denom;
}

/** Letter-frequency breakdown of a word (case-insensitive, letters/digits only). */
export function letterCounts(word: string): { letter: string; count: number }[] {
  const s = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const map = new Map<string, number>();
  for (const ch of s) map.set(ch, (map.get(ch) ?? 0) + 1);
  return [...map.entries()].map(([letter, count]) => ({ letter, count }));
}

/** One row of Pascal's triangle: [ₙC₀, ₙC₁, …, ₙCₙ]. */
export function pascalRow(n: number): bigint[] {
  const row: bigint[] = [];
  for (let r = 0; r <= n; r++) row.push(combination(n, r));
  return row;
}

export function fmtBig(n: bigint): string {
  return n.toLocaleString("en-US");
}
