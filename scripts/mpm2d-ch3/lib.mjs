// MPM2D chapter 3 — same self-study lesson format as MTH1W (5 examples · 5 checked practice · Q&A · explorers).
// Re-exports the MTH1W helpers; intro() is labelled with the MPM2D course code.
import { intro as baseIntro } from "../mth1w-ch2/lib.mjs";
export * from "../mth1w-ch2/lib.mjs";
export const intro = (o) => baseIntro({ course: "MPM2D", ...o });
/** answer that must be typed fully factored, e.g. fexpr("2(x+1)(x+3)") */
export const fexpr = (value) => ({ kind: "expr", value, factored: true });
