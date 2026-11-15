// MCR3U-FR — mêmes figures que l'anglais (../../mcr3u-ch5/bank/fig.mjs). Seule pyrD dessine un mot (« apex ») :
// on la remplace par une copie identique étiquetée « sommet ». Les autres étiquettes sont passées par chaque question.
import { wireD } from "../../mcr3u-ch5/bank/fig.mjs";
export * from "../../mcr3u-ch5/bank/fig.mjs";
/** pyramide à base carrée de côté s et de hauteur h */
export const pyrD = (s, h) => wireD([{ pts: [[0, 0, 0], [s, 0, 0], [s, s, 0], [0, s, 0], [0, 0, 0]], color: "gray" }, ...[[0, 0], [s, 0], [s, s], [0, s]].map(([x, y]) => ({ pts: [[x, y, 0], [s / 2, s / 2, h]] })), { pts: [[s / 2, s / 2, 0], [s / 2, s / 2, h]], color: "red" }], [[s / 2, s / 2, h, "sommet"]]);
