// MCR3U-FR chapitre 4 — mêmes aides que l'anglais (../mcr3u-ch4/lib.mjs), avec le cadre de leçon en français.
// Les ré-exportations explicites l'emportent sur export *, donc les leçons reçoivent les versions françaises.
// plane() vient de la copie française de figs4 (triangle de pente « course » / « montée »).
export * from "../mcr3u-ch4/lib.mjs";
export { ex, pr, qa, watchOut, intro, section, keyIdea, examples, practice, hard, wrapUp } from "../mcr3u-fr/chrome.mjs";
export { plane } from "../mth1w-fr-ch4/figs4.mjs";
