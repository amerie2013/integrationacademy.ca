// One-variable descriptive statistics: parsing, summary stats, quartiles,
// and histogram binning. Pure functions, no rendering — used by
// components/Stats.tsx (the data-management tool at /tools/stats).

/** Parse a free-form numbers blob (commas, spaces, and/or newlines) into finite numbers. */
export function parseNumbers(raw: string): number[] {
  return raw
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

export type Summary = {
  n: number;
  sum: number;
  mean: number;
  median: number;
  modes: number[];
  min: number;
  max: number;
  range: number;
  q1: number;
  q3: number;
  iqr: number;
  varPop: number;
  varSample: number;
  sdPop: number;
  sdSample: number;
  lowerFence: number;
  upperFence: number;
  outliers: number[];
};

/** Median of an already-sorted array. */
function medianOf(sorted: number[]): number {
  const n = sorted.length;
  if (n === 0) return NaN;
  const mid = Math.floor(n / 2);
  return n % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Q1/Q3 via the "exclusive" median-of-halves method (exclude the overall
 * median from both halves on odd n) — the convention taught in Ontario
 * MDM4U and used by TI-83/84's 1-Var Stats.
 */
function quartiles(sorted: number[]): { q1: number; q3: number } {
  const n = sorted.length;
  if (n === 0) return { q1: NaN, q3: NaN };
  if (n === 1) return { q1: sorted[0], q3: sorted[0] };
  const mid = Math.floor(n / 2);
  const lower = sorted.slice(0, mid);
  const upper = n % 2 ? sorted.slice(mid + 1) : sorted.slice(mid);
  return { q1: medianOf(lower), q3: medianOf(upper) };
}

export function summarize(values: number[]): Summary | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const sum = sorted.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const median = medianOf(sorted);

  const freq = new Map<number, number>();
  for (const v of sorted) freq.set(v, (freq.get(v) ?? 0) + 1);
  const maxFreq = Math.max(...freq.values());
  const modes = maxFreq > 1 ? [...freq.entries()].filter(([, c]) => c === maxFreq).map(([v]) => v).sort((a, b) => a - b) : [];

  const min = sorted[0], max = sorted[n - 1];
  const { q1, q3 } = quartiles(sorted);
  const iqr = q3 - q1;

  const sqDiffs = sorted.map((v) => (v - mean) ** 2);
  const sumSq = sqDiffs.reduce((a, b) => a + b, 0);
  const varPop = sumSq / n;
  const varSample = n > 1 ? sumSq / (n - 1) : NaN;

  const lowerFence = q1 - 1.5 * iqr, upperFence = q3 + 1.5 * iqr;
  const outliers = sorted.filter((v) => v < lowerFence || v > upperFence);

  return {
    n, sum, mean, median, modes, min, max, range: max - min,
    q1, q3, iqr,
    varPop, varSample, sdPop: Math.sqrt(varPop), sdSample: Math.sqrt(varSample),
    lowerFence, upperFence, outliers,
  };
}

export type Bin = { x0: number; x1: number; count: number };

/** Even-width bins spanning [min, max] (or the given range), for a histogram. */
export function histogramBins(values: number[], binWidth: number, rangeMin?: number, rangeMax?: number): Bin[] {
  if (values.length === 0 || binWidth <= 0) return [];
  const lo = rangeMin ?? Math.min(...values);
  const hi = rangeMax ?? Math.max(...values);
  const start = Math.floor(lo / binWidth) * binWidth;
  const nBins = Math.max(1, Math.ceil((hi - start) / binWidth));
  const bins: Bin[] = Array.from({ length: nBins }, (_, i) => ({ x0: start + i * binWidth, x1: start + (i + 1) * binWidth, count: 0 }));
  for (const v of values) {
    let i = Math.floor((v - start) / binWidth);
    if (i >= nBins) i = nBins - 1; // the top edge belongs to the last bin
    if (i < 0) i = 0;
    bins[i].count++;
  }
  return bins;
}

/** A sensible default bin width for a value range, à la Sturges' rule. */
export function autoBinWidth(values: number[]): number {
  if (values.length < 2) return 1;
  const min = Math.min(...values), max = Math.max(...values);
  const span = max - min || 1;
  const k = Math.ceil(Math.log2(values.length) + 1); // Sturges' rule: number of bins
  const raw = span / k;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return nice * pow;
}
