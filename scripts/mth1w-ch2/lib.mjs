// MTH1W chapter 2 — same self-study lesson format as chapter 1 (see ../mth1w-ch1/v2/lib.mjs),
// plus an algebraic-expression answer spec for the practice widgets.
export * from "../mth1w-ch1/v2/lib.mjs";

/** an algebraic expression; any equivalent form counts. simplified=true also requires no brackets / no extra terms. */
export const expr = (value, simplified = true) => ({ kind: "expr", value, simplified });
