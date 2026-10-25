// MDM4U chapter 1 — same self-study format as MCR3U (5 examples · 5 practice · hard level · Q&A · explorers),
// with the data-management figures (trees, slots, Venn, Pascal, grids, bars) from scripts/mdm4u/figs.mjs.
import { intro as baseIntro } from "../mth1w-ch2/lib.mjs";
export * from "../mcr3u-ch1/lib.mjs";
export * from "../mdm4u/figs.mjs";
export const intro = (o) => baseIntro({ course: "MDM4U", ...o });
