// MCV4U-FR — shared constants for the French mirror of the English Calculus and Vectors course (scripts/mcv4u-ch1..ch8).
// Every French pipeline lives in scripts/mcv4u-fr-chN and writes ONLY to the MCV4U-FR course.

/** MCV4U-FR course row (code "MCV4U-FR", language 'fr'). Never write to the English course 88ea0686-…. */
export const CID_FR = "4d435634-0000-4000-8000-00000000c0f1";
/** English MCV4U course (read only). */
export const CID_EN = "88ea0686-581a-4236-b4df-8059c8f1d214";

const p2 = (n) => String(n).padStart(2, "0");
/** fixed lesson id for French topic ch.n, e.g. lessonId(4, 3) = 4d435634-0004-4000-8000-0000000c0403 */
export const lessonId = (ch, n) => `4d435634-00${p2(ch)}-4000-8000-0000000c${p2(ch)}${p2(n)}`;
/** fixed assignment id for French topic ch.n */
export const asgId = (ch, n) => `4d435634-00${p2(ch)}-4000-8000-0000000a${p2(ch)}${p2(n)}`;

/** storage-key prefix for French figures so they never overwrite English files */
export const FIG_PREFIX = "mcv4u-fr";

/**
 * Terminology — use these French terms everywhere so the 8 chapters read as one course.
 * (Canadian French, Ontario curriculum wording; "tu" form for the student.)
 */
export const GLOSSARY = {
  "rate of change (average / instantaneous)": "taux de variation (moyen / instantané)",
  "secant / tangent": "sécante / tangente",
  "slope of a curve": "pente d'une courbe",
  "difference quotient": "quotient de différence (taux d'accroissement)",
  "limit / one-sided limit": "limite / limite à gauche, limite à droite",
  "continuity / discontinuity": "continuité / discontinuité",
  "derivative": "dérivée",
  "differentiable": "dérivable",
  "first principles": "définition de la dérivée (premiers principes)",
  "power rule / constant multiple rule / sum rule": "règle de la puissance / règle du multiple constant / règle de la somme",
  "product rule / quotient rule / chain rule": "règle du produit / règle du quotient / règle de dérivation en chaîne",
  "Leibniz notation": "notation de Leibniz",
  "velocity / acceleration / speed": "vitesse / accélération / module de la vitesse",
  "displacement": "déplacement",
  "second derivative": "dérivée seconde",
  "marginal cost / revenue / profit": "coût / revenu / profit marginal",
  "increasing / decreasing": "croissante / décroissante",
  "critical number / critical point": "nombre critique / point critique",
  "local / absolute maximum, minimum": "maximum / minimum relatif, absolu",
  "concave up / concave down": "concave vers le haut / concave vers le bas",
  "point of inflection": "point d'inflexion",
  "second derivative test": "test de la dérivée seconde",
  "asymptote (vertical / horizontal / oblique)": "asymptote (verticale / horizontale / oblique)",
  "curve sketching": "esquisse de courbes",
  "optimization": "optimisation",
  "sinusoidal function": "fonction sinusoïdale",
  "natural logarithm": "logarithme naturel (ln)",
  "the number e": "le nombre e",
  "exponential growth / decay": "croissance / décroissance exponentielle",
  "vector / scalar": "vecteur / scalaire",
  "magnitude / direction": "norme (grandeur) / direction",
  "equivalent / opposite vectors": "vecteurs équivalents / opposés",
  "resultant": "résultante",
  "bearing / true bearing": "relèvement / cap (relèvement vrai)",
  "unit vector": "vecteur unitaire",
  "components (rectangular)": "composantes (rectangulaires)",
  "position vector": "vecteur position",
  "Cartesian vector": "vecteur cartésien",
  "dot product / cross product": "produit scalaire / produit vectoriel",
  "projection (scalar / vector)": "projection (scalaire / vectorielle)",
  "work": "travail",
  "torque": "moment de force",
  "collinear / coplanar": "colinéaires / coplanaires",
  "orthogonal": "orthogonaux",
  "direction vector / normal vector": "vecteur directeur / vecteur normal",
  "vector / parametric / symmetric equation": "équation vectorielle / paramétrique / symétrique",
  "scalar (Cartesian) equation of a plane": "équation cartésienne d'un plan",
  "skew lines": "droites gauches",
  "intersection": "intersection",
  "worked example": "exemple résolu",
  "Watch out": "Attention",
  "Hard level": "Niveau difficile",
  "Review": "Révision",
  "Worksheet": "Fiche d'exercices",
  "Answer Key": "Corrigé",
  "Question Recap": "Récapitulatif des questions",
  "Knowledge / Thinking / Communication / Application":
    "Connaissance et compréhension / Habiletés de la pensée / Communication / Mise en application",
};
