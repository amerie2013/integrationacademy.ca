// MDM4U Two-Variable Statistics: least-squares linear regression and the
// Pearson correlation coefficient. Used by components/Regression.tsx.

export type Point = { x: number; y: number };

/** Parse "x, y" pairs, one per line (or comma/space-separated x y also works). */
export function parsePairs(raw: string): Point[] {
  return raw
    .split("\n")
    .map((line) => line.split(/[,\s]+/).map((s) => s.trim()).filter(Boolean))
    .filter((parts) => parts.length >= 2)
    .map(([x, y]) => ({ x: Number(x), y: Number(y) }))
    .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
}

export type Regression = { slope: number; intercept: number; r: number; r2: number; n: number };

/** Least-squares line y = intercept + slope·x, plus Pearson's r. */
export function linearRegression(points: Point[]): Regression | null {
  const n = points.length;
  if (n < 2) return null;
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
  for (const { x, y } of points) { sumX += x; sumY += y; sumXY += x * y; sumX2 += x * x; sumY2 += y * y; }
  const sxx = n * sumX2 - sumX * sumX;
  const syy = n * sumY2 - sumY * sumY;
  const sxy = n * sumXY - sumX * sumY;
  if (sxx === 0) return null; // all x identical — a vertical line has no slope
  const slope = sxy / sxx;
  const intercept = (sumY - slope * sumX) / n;
  const r = syy > 0 ? sxy / Math.sqrt(sxx * syy) : NaN; // undefined if y has no variance either
  return { slope, intercept, r, r2: r * r, n };
}

export function predict(reg: Regression, x: number): number {
  return reg.intercept + reg.slope * x;
}
