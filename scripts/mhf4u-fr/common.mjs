// MHF4U-FR — shared constants for the French mirror of the rebuilt English MHF4U (scripts/mhf4u-ch1..ch8).
// Every French pipeline lives in scripts/mhf4u-fr-chN and writes ONLY to the MHF4U-FR course.

/** MHF4U-FR course row (code "MHF4U-FR", language 'fr'). Never write to the English course 7d3e0ca4-…. */
export const CID_FR = "26a9a4f5-7b5f-495d-901e-6359746e199b";

const p2 = (n) => String(n).padStart(2, "0");
/** fixed lesson id for French topic ch.n, e.g. lessonId(4, 3) = 6d4f4652-0004-4000-8000-0000000c0403 */
export const lessonId = (ch, n) => `6d4f4652-00${p2(ch)}-4000-8000-0000000c${p2(ch)}${p2(n)}`;
/** fixed assignment id for French topic ch.n */
export const asgId = (ch, n) => `6d4f4652-00${p2(ch)}-4000-8000-0000000a${p2(ch)}${p2(n)}`;

/** storage-key prefix for French figures (graph-images bucket) so they never overwrite English files */
export const FIG_PREFIX = "mhf4u-fr";

/**
 * Terminology — use these French terms everywhere so the 8 chapters read as one course.
 * (Canadian French, Ontario curriculum wording; "tu" form for the student.)
 */
export const GLOSSARY = {
  "power function": "fonction puissance",
  "polynomial function": "fonction polynomiale",
  "end behaviour": "comportement à l'infini",
  "leading coefficient": "coefficient dominant",
  "degree": "degré",
  "turning point": "point tournant",
  "zero / root": "zéro / racine",
  "x-intercept": "abscisse à l'origine",
  "y-intercept": "ordonnée à l'origine",
  "finite differences": "différences finies",
  "even / odd function": "fonction paire / impaire",
  "line / point symmetry": "symétrie axiale / symétrie centrale (par rapport à l'origine)",
  "secant / tangent": "sécante / tangente",
  "average / instantaneous rate of change": "taux de variation moyen / instantané",
  "remainder theorem / factor theorem": "théorème du reste / théorème des facteurs",
  "synthetic division": "division synthétique",
  "family of polynomial functions": "famille de fonctions polynomiales",
  "inequality (to solve)": "inéquation",
  "interval notation": "notation d'intervalle",
  "sign chart": "tableau de signes",
  // matches the existing MHF4U-FR course; always show the symbol next to the word so it is unambiguous
  "reciprocal function 1/f(x)": "fonction réciproque y = 1/f(x)",
  "inverse function f⁻¹": "fonction inverse f⁻¹",
  "rational function": "fonction rationnelle",
  "vertical / horizontal / oblique asymptote": "asymptote verticale / horizontale / oblique",
  "hole": "trou (point de discontinuité)",
  "radian measure": "mesure en radians",
  "unit circle": "cercle trigonométrique",
  "special angles": "angles remarquables",
  "co-function identities": "identités des angles complémentaires",
  "compound angle formulas": "formules d'addition (angles composés)",
  "double angle formulas": "formules de l'angle double",
  "trigonometric identity": "identité trigonométrique",
  "sinusoidal function": "fonction sinusoïdale",
  "amplitude / period / phase shift / vertical shift": "amplitude / période / déphasage / translation verticale",
  "reciprocal trig functions (csc, sec, cot)": "fonctions trigonométriques inverses (cosécante csc, sécante sec, cotangente cot)",
  "exponential function": "fonction exponentielle",
  "logarithm / common logarithm": "logarithme / logarithme décimal",
  "power law of logarithms": "loi de la puissance des logarithmes",
  "product / quotient law": "loi du produit / loi du quotient",
  "half-life / doubling time": "demi-vie / temps de doublement",
  "logarithmic scale": "échelle logarithmique",
  "composite function": "fonction composée",
  "combined function": "fonction combinée",
  "domain / range": "domaine / image",
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

/**
 * Transformation notation. The English course writes y = a f(k(x − d)) + c (d = horizontal shift,
 * c = vertical shift). The French course writes  y = a f(k(x − c)) + d :
 *   c = translation horizontale, d = translation verticale.
 * Swap c and d ONLY where they are these transformation parameters (power functions 1.4, sinusoidal
 * functions 5.x, logarithmic/exponential transformations 6.x, and any review/worksheet/bank/assignment
 * question that uses them): formulas, mapping rules (x, y) → (x/k + c, a y + d), words, worked numbers,
 * answer specs and widget/graph expressions. Do NOT touch c and d when they are other things
 * (e.g. the coefficients of (ax + b)/(cx + d) in 3.3, or a constant named d in a model).
 */
export const NOTATION = "y = af(k(x − c)) + d";
