// Bank/assignment figures for MPM2D chapter 7: triangles (figs5 scenes) as SVG documents.
import { figDoc, polygon } from "../../mth1w-ch5/figs5.mjs";
import { rt, atri } from "../lib.mjs";
export { figDoc, polygon };
/** right triangle: adj along the bottom, right angle bottom-right, theta at the left */
export const rtDoc = (adj, opp, labels = {}) => figDoc({ w: 340, items: rt(adj, opp, labels) });
/** right triangle drawn to scale from an angle in degrees */
export const rtADoc = (deg, labels = {}) => rtDoc(Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180), labels);
/** any scene */
export const sceneDoc = (items, w = 380) => figDoc({ w, items });
/** two triangles side by side; the second scaled by k and shifted */
export const pairDoc = (pts, k, o1 = {}, o2 = {}) => {
  const xs = pts.map((p) => p[0]), dx = Math.max(...xs) - Math.min(...xs) + 1.5;
  return figDoc({ w: 420, items: [...polygon(pts, o1), ...polygon(pts.map(([x, y]) => [x * k + dx, y * k]), { fill: "green", color: "green", ...o2 })] });
};
/** acute triangle to scale from ∠A, ∠B and AB = c */
export const atriDoc = (A, B, c, labels = {}) => figDoc({ w: 340, items: atri(A, B, c, labels) });
/** triangle from SAS: sides b (AC) and c (AB) with angle A between them */
export const sasDoc = (b, c, A, l = {}) => { const r = Math.PI / 180; return figDoc({ w: 340, items: polygon([[0, 0], [c, 0], [b * Math.cos(A * r), b * Math.sin(A * r)]], { sides: [l.c ?? "", l.a ?? "", l.b ?? ""], names: l.names ?? ["A", "B", "C"], angles: l.A ? [[0, l.A]] : [] }) }); };
/** triangle from SSS (sides opposite A, B, C) */
export const sssDoc = (a, b, c, l = {}) => sasDoc(b, c, (Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180) / Math.PI, { a: l.a ?? String(a), b: l.b ?? String(b), c: l.c ?? String(c), A: l.A, names: l.names });
