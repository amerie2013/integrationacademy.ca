// Bank/assignment figures for MPM2D chapter 6: triangles (figs5 scenes) as SVG documents.
import { figDoc, polygon } from "../../mth1w-ch5/figs5.mjs";
import { rt } from "../lib.mjs";
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
