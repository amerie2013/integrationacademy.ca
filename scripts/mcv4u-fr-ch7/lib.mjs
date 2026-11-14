// MCV4U-FR chapitre 7 — same helpers as the English chapter-7 lib (q, num, choice, table, widget, plane, …),
// with the French lesson chrome (explicit re-exports override the English intro/hard/etc. coming from export *).
// The vector figures (../mcv4u-ch7/vecfig.mjs) draw no words of their own (only "N", x, y, z and the labels
// passed in), so the lessons import them directly and pass French labels and captions.
export * from "../mcv4u-ch7/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
