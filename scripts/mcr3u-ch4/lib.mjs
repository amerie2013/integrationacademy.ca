// MCR3U chapter 4 — same self-study format as chapter 1 (5 examples · 5 practice · hard level · Q&A · explorers).
export * from "../mcr3u-ch1/lib.mjs";
/** every root of an equation, any order: roots(-3, 5); roots() = no real roots */
export const roots = (...value) => ({ kind: "roots", value });
/** rounded roots, accepted within tol: rootsT(0.01, 1.41, -1.41) */
export const rootsT = (tol, ...value) => ({ kind: "roots", value, tol });
