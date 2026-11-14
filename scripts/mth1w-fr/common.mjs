// MTH1W-FR — shared constants for the French mirror of the English Grade 9 course (scripts/mth1w-ch1/v2, mth1w-ch2..ch7).
// Every French pipeline lives in scripts/mth1w-fr-chN and writes ONLY to the MTH1W-FR course.

/** MTH1W-FR course row (code "MTH1W-FR", language 'fr'). Never write to the English course fef1dc8e-…. */
export const CID_FR = "86e723b3-29a3-4df7-8575-ce33cf9a1930";
/** English MTH1W course (read only). */
export const CID_EN = "fef1dc8e-c6f7-4632-baa1-7eb940130557";

const p2 = (n) => String(n).padStart(2, "0");
/** fixed lesson id for French topic ch.n, e.g. lessonId(4, 3) = 4d544857-0004-4000-8000-0000000c0403 */
export const lessonId = (ch, n) => `4d544857-00${p2(ch)}-4000-8000-0000000c${p2(ch)}${p2(n)}`;
/** fixed assignment id for French topic ch.n */
export const asgId = (ch, n) => `4d544857-00${p2(ch)}-4000-8000-0000000a${p2(ch)}${p2(n)}`;
/** every new French row id starts with this */
export const ID_PREFIX = "4d544857-";

/** storage-key prefix for French figures so they never overwrite English files */
export const FIG_PREFIX = "mth1w-fr";

/**
 * Terminology — use these French terms everywhere so the 7 chapters read as one course.
 * (Canadian French, Ontario curriculum wording; "tu" form for the student.)
 */
export const GLOSSARY = {
  "natural / whole numbers": "nombres naturels",
  "integers": "nombres entiers",
  "rational / irrational numbers": "nombres rationnels / irrationnels",
  "real numbers": "nombres réels",
  "number set / subset": "ensemble de nombres / sous-ensemble",
  "zero pair": "paire nulle",
  "numerator / denominator": "numérateur / dénominateur",
  "common denominator": "dénominateur commun",
  "mixed number / improper fraction": "nombre fractionnaire / fraction impropre",
  "reciprocal": "inverse (d'un nombre)",
  "power / base / exponent": "puissance / base / exposant",
  "exponent laws": "lois des exposants",
  "scientific notation": "notation scientifique",
  "ratio / rate / proportion": "rapport / taux / proportion",
  "unit rate": "taux unitaire",
  "percent change": "variation en pourcentage",
  "density (of numbers)": "densité",
  "limit": "limite",
  "variable / term / coefficient / constant": "variable / terme / coefficient / constante",
  "like terms": "termes semblables",
  "algebraic expression": "expression algébrique",
  "equation / inequality": "équation / inéquation",
  "distributive property": "distributivité",
  "rearrange a formula": "isoler une variable dans une formule",
  "algebra tiles": "tuiles algébriques",
  "code / program / loop / condition / variable (coding)": "code / programme / boucle / condition / variable",
  "relation": "relation",
  "linear / non-linear relation": "relation linéaire / non linéaire",
  "table of values": "table de valeurs",
  "slope / rate of change": "pente / taux de variation",
  "initial value": "valeur initiale",
  "x-intercept / y-intercept": "abscisse à l'origine / ordonnée à l'origine",
  "slope-intercept form / general form": "forme fonctionnelle (y = mx + b) / forme générale (Ax + By + C = 0)",
  "parallel / perpendicular": "parallèle / perpendiculaire",
  "partial / direct variation": "variation partielle / variation directe",
  "first differences": "premières différences",
  "scatter plot / line of best fit": "nuage de points / droite la mieux ajustée",
  "correlation": "corrélation",
  "mean / median / mode / range": "moyenne / médiane / mode / étendue",
  "histogram": "histogramme",
  "sample / population / bias": "échantillon / population / biais",
  "mathematical modelling": "modélisation mathématique",
  "perimeter / area / volume / surface area": "périmètre / aire / volume / aire totale",
  "Pythagorean theorem / hypotenuse": "théorème de Pythagore / hypoténuse",
  "prism / pyramid / cylinder / cone / sphere": "prisme / pyramide / cylindre / cône / sphère",
  "net (of a solid)": "développement",
  "unit conversion": "conversion d'unités",
  "appreciation / depreciation": "appréciation / dépréciation",
  "simple / compound interest": "intérêt simple / intérêt composé",
  "principal": "capital",
  "budget / income / expenses": "budget / revenus / dépenses",
  "inflation": "inflation",
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
