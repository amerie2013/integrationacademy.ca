// MCV4U-FR chapitre 8 — same helpers as the English chapter-8 lib, with the French lesson chrome
// (explicit re-exports override the English intro/hard/etc. coming from export *).
// The chapter-8 figures (../mcv4u-ch8/vecfig.mjs) draw no built-in words except the compass letter N (same in French),
// so the lessons import them directly and pass French labels and captions.
export * from "../mcv4u-ch8/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
