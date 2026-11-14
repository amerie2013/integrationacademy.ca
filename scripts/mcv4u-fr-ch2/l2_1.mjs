// MCV4U-FR 2.1 — Dérivée d'une fonction polynomiale : règles de la constante, de la puissance (exposants négatifs et
// fractionnaires compris), du multiple constant, de la somme et de la différence; tangentes et points de pente donnée
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.1 Dérivée d'une fonction polynomiale";
export const ID = lessonId(2, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⚡",
    title: "Dérivée d'une fonction polynomiale",
    overview: S`La définition de la dérivée (premiers principes) fonctionne toujours, mais elle est lente. Les régularités dans les résultats donnent quelques <strong>règles</strong> qui rendent la dérivation des polynômes instantanée : la dérivée d'une constante est 0, la dérivée de \(x^n\) est \(nx^{n-1}\) (la <strong>règle de la puissance</strong>), les constantes restent en facteur, et une somme se dérive terme par terme. La règle de la puissance fonctionne aussi pour les exposants négatifs et fractionnaires, donc \(\frac1x\) et \(\sqrt x\) se traitent de la même façon une fois réécrites sous forme de puissances.`,
    goals: [
      "utiliser les règles de la constante, de la puissance, du multiple constant, de la somme et de la différence;",
      "réécrire les racines et les inverses sous forme de puissances avant de dériver;",
      "trouver l'équation d'une tangente;",
      "trouver les points où une tangente a une pente donnée;",
      "utiliser la notation de Leibniz \\(\\frac{dy}{dx}\\).",
    ],
    curriculum: "A3.1 (vérifier la règle de la puissance pour x^n, n un nombre naturel, à l'aide de la définition de la dérivée et des régularités), A3.2 (vérifier la règle de la puissance pour les exposants rationnels; utiliser les règles de la constante, du multiple constant et de la somme ou de la différence)",
    prior: [
      [S`Dérivée de \(x^3\) à l'aide de la définition?`, S`\(3x^2\).`],
      [S`Écris \(\frac1{x^2}\) sous forme de puissance.`, S`\(x^{-2}\).`],
      [S`Écris \(\sqrt[3]{x^2}\) sous forme de puissance.`, S`\(x^{2/3}\).`],
    ],
    words: [
      ["Règle de la puissance", "\\(\\frac{d}{dx}x^n=nx^{n-1}\\)", "tout n réel"],
      ["Règle de la constante", "\\(\\frac{d}{dx}c=0\\)", ""],
      ["Multiple constant", "\\((cf)'=cf'\\)", ""],
      ["Somme / différence", "\\((f\\pm g)'=f'\\pm g'\\)", ""],
    ],
  }),

  section("📌 Les règles", S`
  ${table(["Règle", "Énoncé", "Exemple"], [
    ["constante", "\\(\\frac{d}{dx}(c)=0\\)", "\\(\\frac{d}{dx}(7)=0\\)"],
    ["puissance", "\\(\\frac{d}{dx}(x^n)=nx^{n-1}\\)", "\\(\\frac{d}{dx}x^{5}=5x^4\\)"],
    ["multiple constant", "\\(\\frac{d}{dx}(cf)=cf'\\)", "\\(\\frac{d}{dx}(3x^4)=12x^3\\)"],
    ["somme / différence", "\\((f\\pm g)'=f'\\pm g'\\)", "\\(\\frac{d}{dx}(x^2-5x)=2x-5\\)"],
    ["puissances négatives / fractionnaires", "même règle de la puissance", "\\(\\frac{d}{dx}x^{-1}=-x^{-2}\\), \\(\\frac{d}{dx}x^{1/2}=\\tfrac12x^{-1/2}\\)"],
  ])}
  ${plane({ view: { xmin: -2.5, xmax: 3, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 2, color: "violet" }, { f: (x) => 3 * x * x - 6 * x, color: "blue" }], points: [{ x: 0, y: 2, label: "max", color: "red" }, { x: 2, y: -2, label: "min", color: "red" }, { x: 0, y: 0, color: "blue" }, { x: 2, y: 0, color: "blue" }], step: { x: 1, y: 2 } }, "f(x) = x³ − 3x² + 2 (violet) et f′(x) = 3x² − 6x (bleu) : f′ = 0 aux points tournants x = 0 et x = 2.")}
  ${keyIdea(S`Pour dériver un polynôme, multiplie chaque terme par son exposant et diminue l'exposant de 1; les termes constants disparaissent. Réécris d'abord \(\sqrt x=x^{1/2}\) et \(\frac{c}{x^n}=cx^{-n}\).`)}`),

  section("📌 Explore", S`<p>Choisis les coefficients d'une fonction cubique. La dérivée est calculée terme par terme; le graphique bleu pointillé de \(f'\) passe à une hauteur égale à la pente de la tangente verte.</p>`),

  widget("powerRuleLab", { init: [0.5, 0, -3, 1] }),

  section("📌 Tangentes et pentes", S`
  <p>La tangente en \(x=a\) a pour pente \(f'(a)\) et passe par \((a,f(a))\). Pour trouver où la pente vaut \(m\), résous \(f'(x)=m\).</p>
  ${watchOut([
    "La règle de la puissance exige x élevé à une puissance : réécris 3/x² sous la forme 3x⁻², et non 3 · 1/(2x).",
    "Diminuer un exposant négatif le rend encore plus négatif : x⁻² → −2x⁻³.",
    "N'applique pas la règle de la puissance à un produit ou à un quotient : développe ou simplifie d'abord (ou utilise la règle du produit, 2.2).",
    "La dérivée d'un terme constant est 0, mais la dérivée de 5x est 5, et non 0.",
    "Utilise f(a), et non f′(a), pour le point de la tangente.",
  ])}`),

  examples([
    ["Terme par terme", S`Dérive \(f(x)=4x^5-3x^2+7x-2\).`,
      [S`\(4\cdot5x^4-3\cdot2x+7-0\).`],
      S`\(f'(x)=20x^4-6x+7\)`],
    ["Racines et inverses", S`Dérive \(y=\sqrt x+\dfrac3{x^2}\).`,
      [S`Réécris : \(y=x^{1/2}+3x^{-2}\).`, S`\(\frac{dy}{dx}=\tfrac12x^{-1/2}-6x^{-3}\).`],
      S`\(\dfrac{dy}{dx}=\dfrac1{2\sqrt x}-\dfrac6{x^3}\)`],
    ["Une tangente", S`Trouve la tangente à \(y=x^3-2x+1\) en \(x=2\).`,
      [S`\(y'=3x^2-2\); \(y'(2)=10\). Point : \(y(2)=8-4+1=5\).`, S`\(y-5=10(x-2)\).`],
      S`\(y=10x-15\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 2 * x + 1, color: "violet" }, { f: (x) => 10 * x - 15, color: "green" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Où la pente vaut-elle 4?", S`Trouve les points de \(y=x^3-3x^2+4x\) où la tangente a une pente de 4.`,
      [S`\(y'=3x^2-6x+4=4\Rightarrow3x(x-2)=0\).`, S`\(x=0\) : \((0,0)\); \(x=2\) : \((2,4)\).`],
      S`\((0,0)\) et \((2,4)\)`,
      plane({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 9 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 4 * x, color: "violet" }, { f: (x) => 4 * x, color: "green" }, { f: (x) => 4 * x - 4, color: "green" }], points: [{ x: 0, y: 0, color: "red" }, { x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Simplifier d'abord", S`Dérive \(y=(2x-1)(x+3)\) et \(g(x)=\dfrac{x^2+1}{x}\).`,
      [S`\(y=2x^2+5x-3\Rightarrow y'=4x+5\).`, S`\(g(x)=x+x^{-1}\Rightarrow g'(x)=1-x^{-2}\).`],
      S`\(y'=4x+5\); \(g'(x)=1-\dfrac1{x^2}\)`],
  ]),

  practice([
    q("règle de la puissance", S`Trouve \(\dfrac{dy}{dx}\) pour \(y=6x^3\).`, expr("18*x^2"),
      "3 · 6x².", [S`\(18x^2\).`], S`\(18x^2\)`),
    q("évaluer", S`Pour \(f(x)=x^4-3x\), trouve \(f'(2)\).`, num(29),
      "f′(x) = 4x³ − 3.", [S`\(32-3\).`], S`\(29\)`),
    q("constante", S`Que vaut \(\dfrac{d}{dx}(5)\)?`, num(0),
      "Règle de la constante.", [S`\(0\).`], S`\(0\)`),
    q("puissance négative", S`Trouve \(f'(x)\) pour \(f(x)=\dfrac2x\).`, expr("-2/x^2"),
      "2x⁻¹.", [S`\(-2x^{-2}\).`], S`\(-\dfrac2{x^2}\)`),
    q("racine", S`Trouve la pente de la tangente à \(y=\sqrt x\) en \(x=9\) (4 décimales).`, num(0.1667, 0.0005),
      "½x^(−½).", [S`\(\frac1{2\cdot3}\).`], S`\(\tfrac16\)`),
  ]),

  ...hard([
    ["Deux conditions", S`Trouve \(a\) et \(b\) pour que \(y=ax^2+bx\) passe par \((1,4)\) et y ait une tangente de pente 7.`,
      [S`Point : \(a+b=4\). Pente : \(y'=2ax+b\Rightarrow2a+b=7\).`, S`Soustrais : \(a=3\), \(b=1\).`],
      S`\(y=3x^2+x\)`],
    ["Tangentes issues d'un point extérieur", S`Trouve les équations des tangentes à \(y=x^2\) qui passent par \((2,3)\).`,
      [S`Tangente en \((a,a^2)\) : \(y=2ax-a^2\). Par \((2,3)\) : \(3=4a-a^2\Rightarrow a^2-4a+3=0\).`, S`\(a=1\) : \(y=2x-1\). \(a=3\) : \(y=6x-9\).`],
      S`\(y=2x-1\) et \(y=6x-9\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 2 * x - 1, color: "green" }, { f: (x) => 6 * x - 9, color: "green" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "red" }, { x: 1, y: 1, color: "blue" }, { x: 3, y: 9, color: "blue" }], step: { x: 1, y: 2 } })],
  ], [
    q("difficile", S`Pour quelle valeur positive de \(x\) la tangente à \(y=2x^3-24x\) est-elle horizontale?`, num(2),
      "6x² − 24 = 0.", [S`\(x^2=4\).`], S`\(2\)`),
    q("difficile", S`Pour \(f(x)=x^{2/3}\), trouve \(f'(8)\) (4 décimales).`, num(0.3333, 0.0005),
      "⅔x^(−⅓).", [S`\(\frac23\cdot\frac12\).`], S`\(\tfrac13\)`),
    q("difficile", S`La normale à une courbe est perpendiculaire à la tangente. Trouve la pente de la normale à \(y=x^2\) en \(x=1\).`, num(-0.5, 0.0001),
      "L'opposé de l'inverse de la pente de la tangente.", [S`Pente de la tangente 2, normale \(-\frac12\).`], S`\(-\tfrac12\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la règle de la puissance fonctionne-t-elle?", "En développant (x + h)ⁿ, on obtient xⁿ + nxⁿ⁻¹h + (des termes en h²); en soustrayant xⁿ, en divisant par h et en faisant tendre h vers 0, il reste nxⁿ⁻¹."],
      ["Fonctionne-t-elle pour les exposants négatifs et fractionnaires?", "Oui : la même règle vaut pour tout exposant réel, une fois la fonction écrite comme une puissance de x."],
      ["Pourquoi la dérivée d'une constante est-elle 0?", "Le graphique d'une fonction constante est horizontal : chaque tangente a une pente de 0."],
      ["Puis-je dériver un produit terme par terme?", "Non : (uv)′ ≠ u′v′. Développe d'abord, ou utilise la règle du produit en 2.2."],
      ["Comment trouver une tangente?", "Pente m = f′(a), point (a, f(a)), puis y − f(a) = m(x − a)."],
    ],
    summary: [
      "(xⁿ)′ = nxⁿ⁻¹; (c)′ = 0.",
      "Les constantes restent en facteur; une somme se dérive terme par terme.",
      "Réécris les racines et les inverses sous forme de puissances.",
      "Tangente : pente f′(a), passant par (a, f(a)).",
    ],
    next: "La leçon 2.2 dérive les produits.",
  }),
];
