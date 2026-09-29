// MHF4U-FR authored lessons (Canadian French). Mirrors mhf4u-lessons.mjs's shape: each unit
// module exports an object keyed by lesson code; merged into `authored`.
import { u1 } from "./mhf4u-lessons-fr-u1.mjs";
import { u2 } from "./mhf4u-lessons-fr-u2.mjs";
import { u3 } from "./mhf4u-lessons-fr-u3.mjs";
import { u4 } from "./mhf4u-lessons-fr-u4.mjs";
import { u5 } from "./mhf4u-lessons-fr-u5.mjs";
import { u6 } from "./mhf4u-lessons-fr-u6.mjs";
import { u7 } from "./mhf4u-lessons-fr-u7.mjs";

export const authored = {};
Object.assign(authored, u1); // Unité 1 — Fonctions polynomiales
Object.assign(authored, u2); // Unité 2 — Équations et inégalités polynomiales
Object.assign(authored, u3); // Unité 3 — Fonctions rationnelles
Object.assign(authored, u4); // Unité 4 — Fonctions exponentielles et logarithmiques
Object.assign(authored, u5); // Unité 5 — Fonctions trigonométriques
Object.assign(authored, u6); // Unité 6 — Identités et équations trigonométriques
Object.assign(authored, u7); // Unité 7 — Taux de variation et combinaison de fonctions

// (code, title, unit-label) for the seed script, matching seed-mhf4u.mjs's `subjects` order.
export const UNIT_LABEL = {
  1: "1 : Fonctions polynomiales", 2: "2 : Équations et inégalités polynomiales", 3: "3 : Fonctions rationnelles",
  4: "4 : Fonctions exponentielles et logarithmiques", 5: "5 : Fonctions trigonométriques",
  6: "6 : Identités et équations trigonométriques", 7: "7 : Taux de variation et combinaison de fonctions",
};
export const ORDER = Object.keys(authored).sort((a, b) => {
  const [au, ac] = a.split(".").map(Number), [bu, bc] = b.split(".").map(Number);
  return au - bu || ac - bc;
});
