// MHF4U-FR chapitre 1 — same helpers as the English chapter-1 lib, with the French lesson chrome
// (explicit re-exports override the English intro/hard/etc. coming from export *).
export * from "../mhf4u-ch1/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mhf4u-fr/chrome.mjs";
