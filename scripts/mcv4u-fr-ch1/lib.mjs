// MCV4U-FR chapitre 1 — same helpers as the English chapter-1 lib, with the French lesson chrome
// (explicit re-exports override the English intro/hard/etc. coming from export *).
// plane() comes from the French wrapper (slope triangle prints « course » / « montée »).
export * from "../mcv4u-ch1/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
export { plane } from "../mth1w-fr-ch4/figs4.mjs";
