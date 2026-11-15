// MCR3U-FR — figures de banque ajoutées plus tard en anglais (../../mcr3u-bank-figures/figs.mjs), avec chaque mot
// dessiné traduit en français. Seul le texte des nœuds <text> change; la géométrie reste identique.
import { FIG as EN } from "../../mcr3u-bank-figures/figs.mjs";

const WORDS = {
  car: "voiture", tree: "arbre", "rider, 210°": "passager, 210°", fire: "incendie", "post 1": "poste 1", "post 2": "poste 2",
  ship: "navire", port: "port", start: "départ", buoy: "bouée", drone: "drone",
};
/** traduit le contenu des nœuds texte d'un SVG (correspondance exacte) */
export const frSvg = (svg) => String(svg).replace(/>([^<>]+)</g, (m, t) => (WORDS[t] ? `>${WORDS[t]}<` : m));
export const FIG = Object.fromEntries(Object.entries(EN).map(([k, v]) => [k, typeof v === "string" ? frSvg(v) : v]));
