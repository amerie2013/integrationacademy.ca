// MCV4U-FR chapitre 4 — mêmes aides que le chapitre anglais, avec l'habillage français des leçons
// (les ré-exportations explicites remplacent intro/hard/etc. venant de export *).
// plane() vient de l'enveloppe française (le triangle de pente afficherait « course » / « montée »).
export * from "../mcv4u-ch4/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
export { plane } from "../mth1w-fr-ch4/figs4.mjs";
