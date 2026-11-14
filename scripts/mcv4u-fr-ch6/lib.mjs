// MCV4U-FR chapitre 6 — same helpers as the English chapter-6 lib (q, num, choice, table, widget, plane, …),
// with the French lesson chrome (explicit re-exports override the English intro/hard/etc. coming from export *).
// The vector figures (../mcv4u-ch6/vecfig.mjs) draw no words of their own (only the north letter "N", which is
// the same in French, and the labels passed in), so the French files import them directly and pass French labels.
export * from "../mcv4u-ch6/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
