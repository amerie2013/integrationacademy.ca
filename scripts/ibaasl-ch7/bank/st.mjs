// Bivariate statistics used to compute bank answers from the data in each question (so answers always match the data).
export function st(x, y) {
  const n = x.length, m = (a) => a.reduce((s, v) => s + v, 0) / n, mx = m(x), my = m(y);
  let sxy = 0, sxx = 0, syy = 0;
  x.forEach((v, i) => { sxy += (v - mx) * (y[i] - my); sxx += (v - mx) ** 2; syy += (y[i] - my) ** 2; });
  const b = sxy / sxx, a = my - b * mx, d = sxy / syy, c = mx - d * my;
  return { n, mx, my, sxy, sxx, syy, r: sxy / Math.sqrt(sxx * syy), a, b, c, d };
}
/** data list as text: "2, 5, 7" */
export const list = (a) => a.join(", ");
/** points for planeDoc */
export const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));
