// MCR3U-FR — shared constants for the French mirror of the English Functions 11 course (scripts/mcr3u-ch1..ch8).
// Every French pipeline lives in scripts/mcr3u-fr-chN and writes ONLY to the MCR3U-FR course.

/** MCR3U-FR course row (code "MCR3U-FR", language 'fr'). Never write to the English course 4819065e-…. */
export const CID_FR = "4d435233-0000-4000-8000-00000000c0f1";
/** English MCR3U course (read only). */
export const CID_EN = "4819065e-1703-478f-adb7-8226825be6aa";

const p2 = (n) => String(n).padStart(2, "0");
/** fixed lesson id for French topic ch.n, e.g. lessonId(4, 3) = 4d435233-0004-4000-8000-0000000c0403 */
export const lessonId = (ch, n) => `4d435233-00${p2(ch)}-4000-8000-0000000c${p2(ch)}${p2(n)}`;
/** fixed assignment id for French topic ch.n */
export const asgId = (ch, n) => `4d435233-00${p2(ch)}-4000-8000-0000000a${p2(ch)}${p2(n)}`;

/** storage-key prefix for French figures so they never overwrite English files */
export const FIG_PREFIX = "mcr3u-fr";

/**
 * Terminology — use these French terms everywhere so the 8 chapters read as one course.
 * (Canadian French, Ontario curriculum wording; "tu" form for the student.)
 * TRANSFORMATIONS: French writes y = af(k(x − c)) + d (c = horizontal translation, d = vertical translation),
 * the same convention as the French Advanced Functions course (MHF4U-FR). English MCR3U writes y = af(k(x − d)) + c.
 * Swap the letters c and d everywhere they mean translations (text, math, answer specs that name them, widget props
 * that are labels) — never change a number.
 */
export const GLOSSARY = {
  "relation / function": "relation / fonction",
  "vertical line test": "test de la droite verticale",
  "function notation": "notation fonctionnelle",
  "parent function": "fonction de base (fonction parent)",
  "domain / range": "domaine / image",
  "inverse (of a function)": "réciproque (d'une fonction)",
  "translation / stretch / compression / reflection": "translation / étirement / compression / réflexion",
  "vertical / horizontal": "vertical / horizontal",
  "mapping (diagram)": "diagramme sagittal",
  "polynomial / monomial / binomial / trinomial": "polynôme / monôme / binôme / trinôme",
  "like terms": "termes semblables",
  "factor (verb) / factoring": "factoriser / factorisation",
  "difference of squares / perfect square trinomial": "différence de carrés / trinôme carré parfait",
  "rational expression / restriction": "expression rationnelle / restriction",
  "lowest common denominator": "plus petit dénominateur commun",
  "radical / entire radical / mixed radical": "radical / radical entier / radical composé",
  "quadratic function": "fonction du second degré (fonction quadratique)",
  "standard / vertex / factored form": "forme générale / forme canonique / forme factorisée",
  "vertex / axis of symmetry": "sommet / axe de symétrie",
  "zeros / x-intercepts": "zéros / abscisses à l'origine",
  "y-intercept": "ordonnée à l'origine",
  "completing the square": "compléter le carré",
  "quadratic formula / discriminant": "formule quadratique / discriminant",
  "finite differences": "différences finies",
  "family of functions": "famille de fonctions",
  "linear–quadratic system": "système linéaire-quadratique",
  "exponent laws": "lois des exposants",
  "rational exponent": "exposant rationnel",
  "exponential growth / decay": "croissance / décroissance exponentielle",
  "half-life / doubling time": "demi-vie / temps de doublement",
  "asymptote": "asymptote",
  "trigonometric ratios (primary / reciprocal)": "rapports trigonométriques (de base / inverses)",
  "special triangles": "triangles remarquables",
  "standard position / terminal arm / reference angle": "position standard / côté terminal / angle de référence",
  "CAST rule": "règle CAST",
  "cosecant / secant / cotangent": "cosécante / sécante / cotangente",
  "identity": "identité",
  "sine law / cosine law / ambiguous case": "loi des sinus / loi des cosinus / cas ambigu",
  "angle of elevation / depression": "angle d'élévation / de dépression",
  "periodic function / period / cycle": "fonction périodique / période / cycle",
  "amplitude / axis (equation of the axis)": "amplitude / axe (équation de l'axe)",
  "phase shift": "déphasage",
  "sinusoidal function": "fonction sinusoïdale",
  "sequence / term / general term": "suite / terme / terme général",
  "arithmetic / geometric sequence": "suite arithmétique / géométrique",
  "common difference / common ratio": "raison (arithmétique) / raison (géométrique)",
  "recursive formula": "formule de récurrence",
  "series / partial sum": "série / somme partielle",
  "Pascal's triangle / binomial expansion": "triangle de Pascal / développement du binôme",
  "simple / compound interest": "intérêt simple / composé",
  "principal / future value / present value": "capital / valeur future (valeur acquise) / valeur actuelle",
  "compounding period": "période de capitalisation",
  "annuity / payment": "annuité (rente) / versement",
  "amortization (table)": "amortissement (tableau d'amortissement)",
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
