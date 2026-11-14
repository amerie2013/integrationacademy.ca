import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.8 L'aire totale — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, cone, prism } from "./fig.mjs";

export const TOPIC = "5.8 L'aire totale";
export const Q = [
  num(`Un cône a un volume de 96π cm³ et un rayon de 6 cm. Trouve son aire totale (1 décimale).`, 301.6, "h = 8, s = 10 : 36π + 60π = 96π.", null, 0.06),
  num(`Un cube a un volume de 125 cm³. Trouve son aire totale.`, 150, "Arête 5 : 6 × 25."),
  num(`Une pyramide à base carrée a une aire totale de 340 cm² et une base de 10 cm. Trouve son apothème.`, 12, "100 + 20s = 340."),
  num(`La hauteur d'un cylindre est égale à son diamètre, et son aire totale est de 150π cm². Trouve son rayon.`, 5, "2πr² + 2πr(2r) = 6πr² = 150π."),
  num(`Deux cubes de 3 cm d'arête sont collés face contre face. Trouve l'aire totale du nouveau solide.`, 90, "2 × 54 − 2 × 9."),
  num(`On perce un trou carré de 2 × 2 tout droit au milieu de deux faces opposées d'un cube de 4 × 4 × 4. Trouve la nouvelle aire totale.`, 120, "96 − 2(4) + 4 × (2 × 4) = 120.", FIG.cubeHole),
  num(`Un silo est un cylindre (r = 3 m, h = 10 m) surmonté d'un toit en demi-sphère; le plancher n'est pas peint. Trouve l'aire peinte (1 décimale).`, 245, "60π + 18π = 78π ≈ 245.0.", FIG.silo310, 0.06),
  num(`Un cône et un cylindre ont chacun un rayon de 5 et une hauteur de 12. De combien l'aire totale du cylindre dépasse-t-elle celle du cône (1 décimale) ?`, 251.3, "Cylindre 50π + 120π = 170π; cône 25π + 65π = 90π; différence 80π.", null, 0.06),
  tf(`Si le volume d'un solide est multiplié par 27 par un agrandissement, son aire totale est multipliée par 9.`, true, "k³ = 27 → k = 3 → k² = 9."),
  num(`Une sphère a une aire totale de 324π cm². Trouve son volume en fonction de π : donne le nombre qui multiplie π.`, 972, "r = 9; ⁴⁄₃ × 729 = 972."),
  ms(`Une boîte fermée contient 64 cm³. Quelles conceptions utilisent moins de 100 cm² de matériau ? Sélectionne toutes les bonnes réponses.`, ["4 × 4 × 4", "8 × 4 × 2", "16 × 2 × 2", "8 × 8 × 1"], [0], "96; 2(32 + 16 + 8) = 112; 2(32 + 32 + 4) = 136; 2(64 + 8 + 8) = 160."),
  num(`Une tente est une pyramide à base carrée de 3 m de côté et de 2 m de hauteur (sans plancher). Trouve la toile nécessaire (2 décimales).`, 15, "s = √(4 + 2.25) = 2.5; 4 × ½ × 3 × 2.5."),
  num(`Un toit conique a un diamètre de 8 m et une hauteur de 3 m. Les bardeaux coûtent 32 dollars le m². Trouve le coût (au dollar près).`, 2011, "s = 5 : π(4)(5) = 20π ≈ 62.83 m² × 32.", figDoc({ w: 220, items: cone(4, 3, { lr: "4 m", lh: "3 m", ls: "s" }) }), 1),
  num(`Une pièce en forme de prisme mesure 6 m × 5 m × 2.4 m. Trouve l'aire des murs et du plafond à peindre, moins une porte de 2 m² et deux fenêtres de 1.5 m².`, 77.8, "Murs 2.4 × 22 = 52.8; plafond 30; moins 5.", figDoc({ w: 260, items: prism(6, 5, 2.4, { ll: "6 m", lw: "5 m", lh: "2.4 m" }) }), 0.06),
  num(`Une demi-sphère de rayon 5 est posée sur un cylindre de rayon 5 et de hauteur 8 (le fond du cylindre est fermé). Trouve l'aire totale exposée (1 décimale).`, 486.9, "Demi-sphère 50π + côté 80π + base 25π = 155π.", FIG.silo58, 0.06),
  num(`Un seau cylindrique ouvert (sans couvercle) contient 10 L et a un rayon de 12 cm. Trouve son aire extérieure (au cm² près).`, 2119, "h = 10 000 ÷ (144π) ≈ 22.10; 144π + 2π(12)(22.10) ≈ 452.4 + 1666.7.", null, 1),
  mc(`Pour un volume fixe, quel cylindre fermé utilise le moins de matériau ?`, "hauteur égale au diamètre", ["hauteur égale au rayon", "hauteur égale au double du diamètre", "très haut et mince"], "La meilleure boîte de conserve a h = 2r."),
  num(`L'aire totale d'un cube est de 600 cm². On divise ses arêtes par deux. Trouve la nouvelle aire totale.`, 150, "× ¼."),
  num(`Trouve l'aire totale d'une pyramide à base carrée dont toutes les arêtes mesurent 10 cm (tous les triangles sont équilatéraux), à 1 décimale près.`, 273.2, "Apothème √75 ≈ 8.66 : 100 + 4 × ½ × 10 × 8.66.", null, 0.06),
  num(`Un ballon a un volume de 288π cm³. Trouve son aire totale en fonction de π : donne le nombre qui multiplie π.`, 144, "r³ = 216 → r = 6; 4 × 36."),
];
