// MCR3U-FR chapitre 6 — figures de la banque : les aides anglaises (../../mcr3u-ch6/bank/fig.mjs) et les figures
// ajoutées le 2026-11-05 (../../mcr3u-bank-figures/figs.mjs), avec chaque mot dessiné traduit en français.
// frSvg() ne remplace que le contenu des nœuds <text>, donc la forme des figures reste identique à l'anglais.
import { FIG as FIG_EN } from "../../mcr3u-bank-figures/figs.mjs";
import { waveD as waveEN } from "../../mcr3u-ch6/bank/fig.mjs";
export * from "../../mcr3u-ch6/bank/fig.mjs"; // sin, cos, acos, asin, rd, … (waveD est remplacée ci-dessous)

const WORDS = [
  [/^ground$/, "sol"],
  [/^water$/, "eau"],
  [/^top (.+)$/, "sommet $1"],
  [/^bottom (.+)$/, "bas $1"],
  [/^diameter (.+)$/, "diamètre $1"],
  [/^lowest (.+)$/, "point le plus bas $1"],
  [/^high (.+)$/, "marée haute $1"],
  [/^low (.+)$/, "marée basse $1"],
  [/^water level \(m\)$/, "niveau de l'eau (m)"],
  [/^t \(h after midnight\)$/, "t (h après minuit)"],
  [/^depth \(m\)$/, "profondeur (m)"],
  [/^(\d+):(\d\d), (.+)$/, "$1 h $2, $3"],
];
const tr = (t) => { for (const [re, to] of WORDS) if (re.test(t)) return t.replace(re, to); return t; };
/** traduit le texte de chaque nœud <text> d'un SVG */
export const frSvg = (svg) => (svg ? svg.replace(/(<text[^>]*>)([^<]*)(<\/text>)/g, (_, a, t, b) => a + tr(t) + b) : svg);
/** les figures de ../../mcr3u-bank-figures, en français */
export const FIG = Object.fromEntries(Object.entries(FIG_EN).map(([k, v]) => [k, typeof v === "string" ? frSvg(v) : v]));
/** sinusoïde(s) comme document SVG (étiquettes passées en français par l'appelant) */
export const waveD = (...a) => frSvg(waveEN(...a));
