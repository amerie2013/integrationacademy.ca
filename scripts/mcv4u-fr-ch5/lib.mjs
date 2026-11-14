// MCV4U-FR chapitre 5 — mêmes helpers que le chapitre anglais (../mcv4u-ch5/lib.mjs), avec la présentation des leçons
// en français (../mcv4u-fr/chrome.mjs). Les ré-exportations explicites l'emportent sur export *.
// (plane vient de ../mth1w-ch4/figs4.mjs : aucune leçon du chapitre 5 n'utilise le triangle de pente « run/rise »,
//  donc aucun mot anglais n'est dessiné par ce helper; les étiquettes sont passées en français par chaque leçon.)
export * from "../mcv4u-ch5/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcv4u-fr/chrome.mjs";
