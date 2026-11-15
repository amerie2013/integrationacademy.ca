// MCR3U-FR chapitre 3 — mêmes aides que l'anglais (../mcr3u-ch3/lib.mjs : roots, rootsT, q, num, choice, table, …),
// avec le cadre de leçon en français. Les ré-exportations explicites l'emportent sur export *, donc les leçons
// reçoivent les versions françaises. plane() vient de la copie française de figs4 (aucun mot anglais dessiné).
export * from "../mcr3u-ch3/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcr3u-fr/chrome.mjs";
export { plane } from "../mth1w-fr-ch4/figs4.mjs";
