// MPM2D chapter 6 — same self-study lesson format as MTH1W (5 examples · 5 checked practice · Q&A · explorers).
// Re-exports the MTH1W helpers; intro() is labelled with the MPM2D course code.
import { intro as baseIntro } from "../mth1w-ch2/lib.mjs";
export * from "../mth1w-ch2/lib.mjs";
export const intro = (o) => baseIntro({ course: "MPM2D", ...o });
/** answer that must be typed fully factored, e.g. fexpr("2(x+1)(x+3)") */
export const fexpr = (value) => ({ kind: "expr", value, factored: true });
/** every root of an equation, any order: roots(-3, 5); roots() = no real roots */
export const roots = (...value) => ({ kind: "roots", value });
/** rounded roots, accepted within tol: rootsT(0.01, 1.41, -1.41) */
export const rootsT = (tol, ...value) => ({ kind: "roots", value, tol });
export { fig, figDoc, polygon } from "../mth1w-ch5/figs5.mjs";
import { polygon as _poly } from "../mth1w-ch5/figs5.mjs";
/** right triangle items: adjacent along the bottom, right angle at the bottom right, angle mark at the left.
 *  labels: { adj, opp, hyp, theta, names:[A,B,C], other } (other = label at the top angle) */
export const rt = (adj, opp, l = {}) => {
  const items = _poly([[0, 0], [adj, 0], [adj, opp]], { sides: [l.adj ?? "", l.opp ?? "", l.hyp ?? ""], names: l.names ?? [], rightAt: [1], angles: [...(l.theta ? [[0, l.theta]] : []), ...(l.other ? [[2, l.other]] : [])], fill: l.fill ?? "blue" });
  return items;
};
