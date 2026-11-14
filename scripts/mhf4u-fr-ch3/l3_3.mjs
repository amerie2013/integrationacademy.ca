// MHF4U-FR 3.3 — Fonctions rationnelles de la forme (ax + b)/(cx + d) : asymptote verticale x = −d/c, asymptote
// horizontale y = a/c, coordonnées à l'origine, trous, transformations de 1/x, équations à partir des caractéristiques.
// IMPORTANT : a, b, c, d sont ici des COEFFICIENTS de (ax + b)/(cx + d) — aucune permutation c↔d dans cette leçon.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "3.3 Fonctions rationnelles de la forme (ax + b)/(cx + d)";
export const ID = lessonId(3, 3);

const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Fonctions rationnelles de la forme (ax + b)/(cx + d)",
    overview: S`Une fonction rationnelle \(f(x)=\dfrac{ax+b}{cx+d}\) est le quotient de deux fonctions linéaires. Son graphique est une hyperbole transformée : une asymptote verticale là où le dénominateur vaut 0, et une asymptote horizontale \(y=\frac ac\) parce que, pour de grandes valeurs de \(|x|\), le rapport des termes dominants l'emporte. Le numérateur donne l'abscisse à l'origine. Si le numérateur et le dénominateur ont un facteur commun, le graphique est une droite horizontale à laquelle il manque un seul point — un <strong>trou</strong>.`,
    goals: [
      "trouver les asymptotes verticale et horizontale de \\(\\frac{ax+b}{cx+d}\\);",
      "trouver les coordonnées à l'origine et donner le domaine et l'image;",
      "reconnaître un trou quand le numérateur et le dénominateur ont un facteur commun;",
      "écrire \\(\\frac{ax+b}{cx+d}\\) comme une transformation de \\(\\frac1x\\);",
      "déterminer une équation à partir de caractéristiques données.",
    ],
    curriculum: "C2.2 (déterminer les caractéristiques clés des fonctions rationnelles de la forme (ax + b)/(cx + d)), C2.3 (esquisser le graphique)",
    prior: [
      [S`Zéro de \(2x-6\)?`, S`\(3\).`],
      [S`Pour de grandes valeurs de \(x\), de quoi \(\frac{3x+1}{x}\) s'approche-t-il?`, S`\(3\).`],
      [S`Asymptotes de \(y=\frac1x\)?`, S`\(x=0\) et \(y=0\).`],
    ],
    words: [
      ["Fonction rationnelle", "un quotient de polynômes", "\\(\\frac{2x+1}{x-3}\\)"],
      ["Asymptote horizontale", "\\(y=\\frac ac\\) pour \\(\\frac{ax+b}{cx+d}\\)", ""],
      ["Trou", "un seul point manquant là où un facteur commun se simplifie", ""],
      ["Branche", "un morceau continu du graphique", "deux branches ici"],
    ],
  }),

  section("📌 Lire les caractéristiques", S`
  ${table(["Caractéristique", "Comment la trouver", "Pour (2x − 4)/(x + 1)"], [
    ["asymptote verticale", "cx + d = 0", "x = −1"],
    ["asymptote horizontale", "y = a/c", "y = 2"],
    ["abscisse à l'origine", "ax + b = 0", "x = 2"],
    ["ordonnée à l'origine", "f(0) = b/d", "y = −4"],
    ["domaine / image", "x ≠ −d/c, y ≠ a/c", "x ≠ −1, y ≠ 2"],
  ])}
  ${plane({ view: V, curves: rat((x) => (2 * x - 4) / (x + 1), [-1], V), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "blue" }, { x: 0, y: -4, label: "(0, −4)", color: "green" }], step: { x: 1, y: 1 } }, "y = (2x − 4)/(x + 1) : asymptotes x = −1 et y = 2.")}
  ${keyIdea(S`Divise pour voir la transformation : \(\dfrac{2x-4}{x+1}=2-\dfrac{6}{x+1}\) : le graphique de \(\frac1x\) subit un agrandissement vertical de facteur 6, une réflexion par rapport à l'axe des x, une translation de 1 vers la gauche et de 2 vers le haut. Si \(ad-bc=0\), la fraction se simplifie en une constante et le graphique est une droite avec un trou.`)}`),

  section("📌 Explore", S`<p>Modifie \(a\), \(b\), \(c\), \(d\). Les asymptotes en pointillés se déplacent avec \(-\frac dc\) et \(\frac ac\); essaie \(a=2\), \(b=4\), \(c=1\), \(d=2\) pour voir un trou.</p>`),

  widget("rationalLinear", { init: { a: 1, b: 3, c: 1, d: -2 } }),

  section("📌 Trous et transformations", S`
  <p>\(\dfrac{3x+6}{x+2}=\dfrac{3(x+2)}{x+2}=3\) pour \(x\ne-2\) : une droite horizontale avec un cercle vide en \((-2,3)\). Il n'y a pas d'asymptote en \(x=-2\) parce que le facteur se simplifie.</p>
  ${watchOut([
    "L'asymptote horizontale utilise les coefficients DOMINANTS a et c, pas b et d.",
    "Dans (2x + 1)/(4 − x), le coefficient dominant du dénominateur est −1 : AH y = −2.",
    "Vérifie s'il y a un facteur commun avant de tracer une asymptote verticale.",
    "Le graphique d'autres fonctions rationnelles peut couper une asymptote horizontale, mais jamais celui de (ax + b)/(cx + d).",
    "L'ordonnée à l'origine est b/d, ce qui exige d ≠ 0.",
  ])}`),

  examples([
    ["Toutes les caractéristiques", S`Esquisse \(f(x)=\dfrac{x+2}{x-1}\).`,
      [S`<b>AV.</b> Le dénominateur vaut 0 en \(x=1\), et le numérateur n'y vaut pas 0.`,
        S`<b>AH.</b> Pour de grandes valeurs de \(|x|\), \(\frac{x+2}{x-1}\approx\frac xx=1\). Donc \(y=1\), le rapport des coefficients dominants.`,
        S`<b>Abscisse à l'origine.</b> Le numérateur vaut 0 : \(x=-2\).`,
        S`<b>Ordonnée à l'origine.</b> \(f(0)=\frac2{-1}=-2\).`,
        S`<b>Vérification.</b> \(f(4)=\frac63=2\), au-dessus de l'AH, sur la branche en haut à droite ✓`],
      S`AV \(x=1\), AH \(y=1\), coordonnées à l'origine \((-2,0)\), \((0,-2)\)`,
      plane({ view: V, curves: rat((x) => (x + 2) / (x - 1), [1], V), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "blue" }, { x: 0, y: -2, label: "(0, −2)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Une asymptote horizontale étirée", S`Trouve les asymptotes et les coordonnées à l'origine de \(f(x)=\dfrac{3x-6}{x+2}\).`,
      [S`<b>AV.</b> \(x+2=0\) donne \(x=-2\).`,
        S`<b>AH.</b> Le rapport des coefficients dominants : \(y=\frac31=3\).`,
        S`<b>Abscisse à l'origine.</b> \(3x-6=0\) donne \(x=2\).`,
        S`<b>Ordonnée à l'origine.</b> \(f(0)=\frac{-6}2=-3\).`,
        S`<b>Vérification.</b> \(f(100)=\frac{294}{102}\approx2.88\), qui est proche de 3 ✓`],
      S`AV \(x=-2\), AH \(y=3\), \((2,0)\), \((0,-3)\)`,
      plane({ view: { xmin: -10, xmax: 8, ymin: -8, ymax: 12 }, curves: rat((x) => (3 * x - 6) / (x + 2), [-2], { xmin: -10, xmax: 8 }), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "blue" }, { x: 0, y: -3, label: "(0, −3)", color: "green" }], step: { x: 2, y: 2 } })],
    ["c négatif", S`Trouve les asymptotes de \(f(x)=\dfrac{2x+1}{4-x}\).`,
      [S`<b>AV.</b> \(4-x=0\) donne \(x=4\).`,
        S`<b>AH.</b> Utilise les coefficients dominants avec leurs signes : \(y=\frac2{-1}=-2\). Écrire le dénominateur sous la forme \(-x+4\) aide.`,
        S`<b>Coordonnées à l'origine.</b> \(2x+1=0\) donne \(x=-\frac12\). \(f(0)=\frac14\).`,
        S`<b>Vérification.</b> \(f(100)=\frac{201}{-96}\approx-2.09\), proche de \(-2\) ✓`],
      S`AV \(x=4\), AH \(y=-2\)`,
      plane({ view: { xmin: -6, xmax: 12, ymin: -10, ymax: 6 }, curves: rat((x) => (2 * x + 1) / (4 - x), [4], { xmin: -6, xmax: 12 }), vlines: [{ x: 4, color: "red", dash: true }], lines: [{ m: 0, b: -2, color: "red", dash: true }], points: [{ x: -0.5, y: 0, color: "blue" }, { x: 0, y: 0.25, color: "green" }], step: { x: 2, y: 2 } })],
    ["Un trou", S`Décris le graphique de \(f(x)=\dfrac{2x-4}{x-2}\).`,
      [S`<b>Factorise.</b> \(2x-4=2(x-2)\), donc \(f(x)=\dfrac{2(x-2)}{x-2}\).`,
        S`<b>Simplifie.</b> Pour \(x\ne2\), le facteur se simplifie, ce qui laisse \(f(x)=2\).`,
        S`<b>En \(x=2\).</b> Le numérateur et le dénominateur valent tous deux 0, donc la fonction initiale n'a pas de valeur. Comme le facteur se simplifie, c'est un trou, pas une asymptote.`,
        S`<b>Vérification.</b> \(f(3)=\frac21=2\) et \(f(0)=\frac{-4}{-2}=2\) ✓`],
      S`la droite \(y=2\) avec un trou en \((2,2)\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 4 }, lines: [{ m: 0, b: 2, color: "violet" }], points: [{ x: 2, y: 2, label: "trou (2, 2)", color: "red" }, { x: 3, y: 2, label: "(3, 2)" }], step: { x: 1, y: 1 } })],
    ["L'équation à partir des caractéristiques", S`Écris une fonction de la forme \(\dfrac{ax+b}{cx+d}\) ayant l'AV \(x=-3\), l'AH \(y=2\) et l'abscisse à l'origine \(1\).`,
      [S`<b>Dénominateur.</b> Une AV en \(-3\) signifie un facteur \(x+3\). Prends \(c=1\).`,
        S`<b>Coefficient dominant.</b> L'AH est \(\frac ac=2\), donc \(a=2\).`,
        S`<b>Numérateur.</b> Une abscisse à l'origine de 1 signifie un facteur \(x-1\). Le numérateur est donc \(2(x-1)=2x-2\).`,
        S`<b>Vérification.</b> \(f(1)=0\) ✓. \(f(0)=\frac{-2}3\) est sur la courbe ✓`],
      S`\(f(x)=\dfrac{2x-2}{x+3}\)`,
      plane({ view: { xmin: -10, xmax: 6, ymin: -8, ymax: 12 }, curves: rat((x) => (2 * x - 2) / (x + 3), [-3], { xmin: -10, xmax: 6 }), vlines: [{ x: -3, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }], step: { x: 2, y: 2 } })],
  ]),

  practice([
    q("asymptote verticale", S`Trouve l'asymptote verticale de \(y=\dfrac{x+5}{2x-6}\). Donne la valeur de x.`, num(3),
      "2x − 6 = 0.", [S`\(x=3\).`], S`\(3\)`),
    q("asymptote horizontale", S`Trouve l'asymptote horizontale de \(y=\dfrac{4x-1}{2x+3}\). Donne la valeur de y.`, num(2),
      "a/c.", [S`\(\frac42\).`], S`\(2\)`),
    q("abscisse à l'origine", S`Trouve l'abscisse à l'origine de \(y=\dfrac{3x+12}{x-1}\).`, num(-4),
      "Numérateur = 0.", [S`\(3x=-12\).`], S`\(-4\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(y=\dfrac{x-6}{x+2}\).`, num(-3),
      "b/d.", [S`\(\frac{-6}{2}\).`], S`\(-3\)`),
    q("trou", S`Quelle fonction a un trou plutôt qu'une asymptote verticale?`, choice([S`\(\dfrac{3x+6}{x+2}\)`, S`\(\dfrac{3x+6}{x-2}\)`, S`\(\dfrac{x+6}{x+2}\)`, S`\(\dfrac{3x}{x+2}\)`], 0),
      "Cherche un facteur commun.", [S`\(3x+6=3(x+2)\).`], S`\(\frac{3x+6}{x+2}\)`),
  ]),

  ...hard([
    ["Trois conditions", S`\(f(x)=\dfrac{ax+b}{x+d}\) a l'AV \(x=2\), l'AH \(y=-3\) et passe par \((1,5)\). Trouve \(a\), \(b\), \(d\).`,
      [S`AV \(x=2\Rightarrow d=-2\). AH \(y=\frac a1=-3\Rightarrow a=-3\).`, S`En \(x=1\) : \(\frac{-3+b}{-1}=5\Rightarrow b=-2\).`],
      S`\(f(x)=\dfrac{-3x-2}{x-2}\)`,
      plane({ view: { xmin: -6, xmax: 8, ymin: -14, ymax: 8 }, curves: rat((x) => (-3 * x - 2) / (x - 2), [2], { xmin: -6, xmax: 8 }), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: -3, color: "red", dash: true }], points: [{ x: 1, y: 5, label: "(1, 5)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Comme transformation de 1/x", S`Montre que \(\dfrac{2x+3}{x-1}=2+\dfrac5{x-1}\), et décris le graphique comme une transformation de \(y=\frac1x\).`,
      [S`\(2(x-1)+5=2x+3\), donc \(\frac{2x+3}{x-1}=\frac{2(x-1)+5}{x-1}=2+\frac5{x-1}\).`, S`Agrandissement vertical de facteur 5, translation de 1 vers la droite et de 2 vers le haut.`],
      S`agrandissement de facteur 5, 1 vers la droite, 2 vers le haut : asymptotes \(x=1\), \(y=2\)`],
  ], [
    q("difficile", S`Trouve l'asymptote horizontale de \(y=\dfrac{6-2x}{3x+1}\) (4 décimales).`, num(-0.6667, 0.0005),
      "Coefficients dominants −2 et 3.", [S`\(-\frac23\).`], S`\(-0.6667\)`),
    q("difficile", S`Pour \(f(x)=\dfrac{x+1}{x-3}\), trouve \(x\) tel que \(f(x)=3\).`, num(5),
      "Fais le produit croisé.", [S`\(x+1=3x-9\Rightarrow x=5\).`], S`\(5\)`),
    q("difficile", S`Combien de coordonnées à l'origine (abscisses et ordonnées ensemble) \(y=\dfrac{x-4}{x+4}\) a-t-elle?`, num(2),
      "Une abscisse à l'origine et une ordonnée à l'origine.", [S`\((4,0)\) et \((0,-1)\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'asymptote horizontale est-elle a/c?", "Pour de grandes valeurs de |x|, b et d sont minuscules comparés à ax et cx, donc (ax + b)/(cx + d) ≈ ax/cx = a/c."],
      ["Le graphique peut-il couper son asymptote horizontale?", "Pas pour (ax + b)/(cx + d) : f(x) = a/c mène à ad = bc, ce qui n'arrive que dans le cas du trou."],
      ["Qu'est-ce qui crée un trou?", "Un facteur commun au numérateur et au dénominateur : il se simplifie, ce qui laisse un point manquant au lieu d'une asymptote."],
      ["Comment les branches sont-elles placées?", "Le signe de ad − bc décide : négatif → branches décroissantes, positif → branches croissantes."],
      ["Pourquoi réécrire sous la forme a + k/(x − h)?", "Cela montre directement l'agrandissement k et les translations h et a; le graphique est donc une transformation de y = 1/x."],
    ],
    summary: [
      "AV : cx + d = 0. AH : y = a/c.",
      "Abscisse à l'origine : ax + b = 0; ordonnée à l'origine : b/d.",
      "Facteur commun → trou.",
      "a + k/(x − h) est une transformation de 1/x.",
    ],
    next: "La section 3.4 porte sur la résolution d'équations et d'inéquations rationnelles.",
  }),
];
