// Vector arithmetic for the LINALG1 chapter 1 bank: every numeric answer is computed from the question's data.
export const add = (a, b) => a.map((x, i) => x + b[i]);
export const sub = (a, b) => a.map((x, i) => x - b[i]);
export const sc = (k, a) => a.map((x) => k * x);
export const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
export const norm = (a) => Math.sqrt(dot(a, a));
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const proj = (u, v) => sc(dot(u, v) / dot(v, v), v);
export const deg = (u, v) => (Math.acos(dot(u, v) / (norm(u) * norm(v))) * 180) / Math.PI;
/** tuple in LaTeX: $(1,-2,3)$ body */
export const tp = (a) => `(${a.map((x) => (typeof x === "number" ? +x.toFixed(6) : x)).join(",")})`;
/** round for numeric answers */
export const r = (x, d = 2) => Math.round(x * 10 ** d) / 10 ** d;
/** solve s·u + t·v = w in R² (Cramer) */
export const solve2 = (u, v, w) => { const D = u[0] * v[1] - u[1] * v[0]; return [(w[0] * v[1] - w[1] * v[0]) / D, (u[0] * w[1] - u[1] * w[0]) / D]; };
const ORD = ["first", "second", "third", "fourth", "fifth"];
export const ord = (i) => ORD[i];
