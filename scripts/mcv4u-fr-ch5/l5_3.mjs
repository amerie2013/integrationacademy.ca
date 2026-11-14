// MCV4U-FR 5.3 — Dérivées des fonctions exponentielles (miroir de ../mcv4u-ch5/l5_3.mjs) : (e^x)′ = e^x, la règle de
// dérivation en chaîne pour e^(g(x)), (b^x)′ = b^x ln b, produits et quotients avec des exponentielles, tangentes et extremums
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "5.3 Dérivées des fonctions exponentielles";
export const ID = lessonId(5, 3);

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Dérivées des fonctions exponentielles",
    overview: S`L'exponentielle naturelle est sa propre dérivée : \(\dfrac{d}{dx}e^x=e^x\). Avec la règle de dérivation en chaîne, \(\dfrac{d}{dx}e^{g(x)}=g'(x)\,e^{g(x)}\) — par exemple \(\left(e^{3x}\right)'=3e^{3x}\). Toute autre base peut s'écrire avec \(e\) : \(b^x=e^{x\ln b}\), donc \(\dfrac{d}{dx}b^x=b^x\ln b\). Cela explique les mystérieuses constantes de la leçon 5.1 : la pente de \(2^x\) en 0 est \(\ln2\approx0.693\). Avec les règles du produit et du quotient, ces formules donnent les tangentes, les extremums et les taux de croissance des fonctions exponentielles.`,
    goals: [
      "dériver e^x et e^(g(x));",
      "dériver b^x pour toute base b > 0;",
      "combiner les exponentielles avec les règles du produit et du quotient;",
      "trouver des tangentes à des courbes exponentielles;",
      "trouver les extremums de fonctions qui comportent des exponentielles.",
    ],
    curriculum: "A2.3 (déterminer la dérivée des fonctions exponentielles), A3.4 (appliquer la règle de dérivation en chaîne aux fonctions exponentielles)",
    prior: [
      [S`\((e^x)'\)?`, S`\(e^x\).`],
      [S`Écris \(2^x\) sous forme de puissance de \(e\).`, S`\(e^{x\ln2}\).`],
      [S`\(\frac{d}{dx}(5x^2)\)?`, S`\(10x\).`],
    ],
    words: [
      ["Exponentielle naturelle", "\\(\\frac{d}{dx}e^x=e^x\\)", ""],
      ["Forme de la dérivation en chaîne", "\\(\\frac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}\\)", "\\((e^{x^2})'=2xe^{x^2}\\)"],
      ["Autres bases", "\\(\\frac{d}{dx}b^x=b^x\\ln b\\)", "\\((10^x)'=10^x\\ln10\\)"],
      ["Décroissance exponentielle", "\\(e^{-kx}\\), \\(k\\gt0\\)", "pentes négatives"],
    ],
  }),

  section("📌 Les règles", S`
  ${table(["Fonction", "Dérivée", "Exemple"], [
    ["\\(e^x\\)", "\\(e^x\\)", "—"],
    ["\\(e^{kx}\\)", "\\(ke^{kx}\\)", "\\((e^{-2x})'=-2e^{-2x}\\)"],
    ["\\(e^{g(x)}\\)", "\\(g'(x)e^{g(x)}\\)", "\\((e^{x^2})'=2xe^{x^2}\\)"],
    ["\\(b^x\\)", "\\(b^x\\ln b\\)", "\\((3^x)'=3^x\\ln3\\)"],
  ])}
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 8 }, curves: [{ f: (x) => Math.exp(x), color: "violet" }, { f: (x) => Math.exp(2 * x), color: "blue" }, { f: (x) => 2 * Math.exp(2 * x), color: "blue" }], step: { x: 0.5, y: 1 } }, "y = eˣ (violet) est sa propre dérivée; y = e²ˣ et sa dérivée 2e²ˣ (bleu) diffèrent d'un facteur 2.")}
  ${keyIdea(S`\(\dfrac{d}{dx}e^{g(x)}=g'(x)\,e^{g(x)}\) et \(\dfrac{d}{dx}b^{x}=b^{x}\ln b\). Une exponentielle n'est jamais nulle; dans des produits comme \(xe^x\), les nombres critiques proviennent donc seulement de l'autre facteur.`)}`),

  section("📌 Explore", S`<p>Choisis \(A\) et \(k\) pour \(y=Ae^{kx}\). La dérivée en pointillé est toujours \(k\) fois la courbe. Passe à \(y=Ab^{kx}\) et change \(b\) : le multiplicateur devient \(k\ln b\).</p>`),

  widget("expRuleLab", { init: { A: 1, k: 1, mode: "e", b: 2, x: 0.5 } }),

  section("📌 Travailler avec les exponentielles", S`
  <p>Trouve d'abord \(g'\), puis recopie l'exponentielle sans la changer. Quand tu poses une dérivée égale à zéro, mets l'exponentielle en évidence : elle est toujours positive.</p>
  ${watchOut([
    "(e^(3x))′ = 3e^(3x), et non e^(3x) ni 3x e^(3x − 1).",
    "La règle de la puissance ne s'applique pas à eˣ : (eˣ)′ ≠ x e^(x − 1).",
    "(bˣ)′ demande le facteur ln b.",
    "eˣ > 0 toujours : divise par ce facteur pour résoudre f′ = 0.",
    "e^(−x) est décroissante : sa dérivée est −e^(−x).",
  ])}`),

  examples([
    ["Deux dérivées rapides", S`Dérive \(y=e^{3x}\) et \(y=5e^{-2x}\).`,
      [S`\(3e^{3x}\).`, S`\(5\cdot(-2)e^{-2x}\).`],
      S`\(3e^{3x}\) et \(-10e^{-2x}\)`],
    ["Un carré dans l'exposant", S`Dérive \(y=e^{x^2}\).`,
      [S`\(g=x^2\), \(g'=2x\).`],
      S`\(y'=2xe^{x^2}\)`],
    ["Une autre base", S`Dérive \(y=3^x\) et trouve la pente en \(x=2\).`,
      [S`\(y'=3^x\ln3\).`, S`En 2 : \(9\ln3\approx9.888\).`],
      S`\(3^x\ln3\); pente d'environ 9.89 en \(x=2\)`],
    ["Un produit", S`Trouve le minimum de \(y=xe^x\).`,
      [S`\(y'=e^x+xe^x=(x+1)e^x\).`, S`Nulle seulement en \(x=-1\); \(-\) puis \(+\). \(y(-1)=-\frac1e\).`],
      S`minimum \(\left(-1,-\frac1e\right)\approx(-1,-0.368)\)`,
      plane({ view: { xmin: -5, xmax: 1.5, ymin: -0.6, ymax: 4 }, curves: [{ f: (x) => x * Math.exp(x), color: "violet" }], points: [{ x: -1, y: -1 / E, label: "min (−1, −1/e)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["Une tangente à une décroissance", S`Trouve la tangente à \(y=e^{-x}\) en \(x=0\).`,
      [S`Point \((0,1)\); pente \(-e^0=-1\).`],
      S`\(y=1-x\)`,
      plane({ view: { xmin: -1.5, xmax: 3, ymin: -0.8, ymax: 4 }, curves: [{ f: (x) => Math.exp(-x), color: "violet" }, { f: (x) => 1 - x, color: "green", a: -1, b: 1.8 }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ]),

  practice([
    q("en chaîne", S`Pour \(y=e^{4x}\), trouve \(y'(0)\).`, num(4),
      "4e^(4x).", [S`\(4e^0\).`], S`\(4\)`),
    q("somme", S`Pour \(y=e^x+x^2\), trouve \(y'(0)\).`, num(1),
      "eˣ + 2x.", [S`\(1+0\).`], S`\(1\)`),
    q("base", S`Pour \(y=2^x\), trouve \(y'(1)\) (4 décimales).`, num(1.3863, 0.0005),
      "2ˣ ln 2.", [S`\(2\ln2\).`], S`\(1.3863\)`),
    q("en chaîne", S`Pour \(y=e^{-x^2}\), trouve \(y'(1)\) (4 décimales).`, num(-0.7358, 0.0005),
      "−2x e^(−x²).", [S`\(-\frac2e\).`], S`\(-0.7358\)`),
    q("règle", S`Laquelle est \(\frac{d}{dx}b^x\)?`, choice([S`\(b^x\ln b\)`, S`\(xb^{x-1}\)`, S`\(b^x\)`, S`\(\frac{b^x}{\ln b}\)`], 0),
      "bˣ = e^(x ln b).", ["Règle de dérivation en chaîne avec la fonction intérieure x ln b."], S`\(b^x\ln b\)`),
  ]),

  ...hard([
    ["Le point le plus abrupt de la courbe logistique", S`Pour \(f(x)=\dfrac{e^x}{1+e^x}\), trouve \(f'(x)\) et sa plus grande valeur.`,
      [S`\(f'=\frac{e^x(1+e^x)-e^x\cdot e^x}{(1+e^x)^2}=\frac{e^x}{(1+e^x)^2}\).`, S`Par symétrie (ou avec \(f''=0\)), la pente est maximale en \(x=0\) : \(\frac14\).`],
      S`\(f'(x)=\frac{e^x}{(1+e^x)^2}\); plus grande pente \(\frac14\) en \(x=0\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -0.1, ymax: 1.2 }, curves: [{ f: (x) => Math.exp(x) / (1 + Math.exp(x)), color: "violet" }, { f: (x) => Math.exp(x) / (1 + Math.exp(x)) ** 2, color: "blue" }, { f: (x) => 0.5 + 0.25 * x, color: "green", a: -1.6, b: 1.6 }], points: [{ x: 0, y: 0.5, label: "(0, ½)", color: "red" }], step: { x: 1, y: 0.2 } })],
    ["Montée et descente", S`Trouve les extremums relatifs de \(y=x^2e^{-x}\).`,
      [S`\(y'=2xe^{-x}-x^2e^{-x}=x(2-x)e^{-x}\).`, S`Zéros en 0 et en 2 : \(-,+,-\).`, S`\(y(0)=0\) (min), \(y(2)=\frac4{e^2}\approx0.541\) (max).`],
      S`minimum relatif \((0,0)\), maximum relatif \(\left(2,\frac{4}{e^2}\right)\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -0.2, ymax: 1 }, curves: [{ f: (x) => x * x * Math.exp(-x), a: -0.7, b: 9, color: "violet" }], points: [{ x: 0, y: 0, label: "min", color: "blue" }, { x: 2, y: 4 / E ** 2, label: "max (2, 0.54)", color: "red" }], step: { x: 1, y: 0.2 } })],
  ], [
    q("difficile", S`Pour \(y=e^{\sin x}\), trouve \(y'(0)\).`, num(1),
      "cos x · e^(sin x).", [S`\(1\cdot1\).`], S`\(1\)`),
    q("difficile", S`Pour \(y=10^{2x}\), trouve \(y'(0)\) (4 décimales).`, num(4.6052, 0.0005),
      "2 ln 10 · 10^(2x).", [S`\(2\ln10\).`], S`\(4.6052\)`),
    q("difficile", S`Pour \(y=e^x\cos x\), trouve \(y'(0)\).`, num(1),
      "eˣ cos x − eˣ sin x.", [S`\(1-0\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi (eˣ)′ = eˣ?", "e est défini comme la base dont la pente en 0 vaut 1, et la pente de toute exponentielle est sa hauteur fois sa pente en 0."],
      ["D'où vient ln b?", "bˣ = e^(x ln b); la règle de dérivation en chaîne fait apparaître la dérivée intérieure ln b."],
      ["Pourquoi ne puis-je pas utiliser la règle de la puissance?", "La règle de la puissance s'applique à xⁿ avec un exposant fixe; dans eˣ, la variable est dans l'exposant."],
      ["Comment résoudre f′(x) = 0 avec des exponentielles?", "Mets l'exponentielle en évidence — elle n'est jamais nulle — et résous ce qui reste."],
      ["Que signifie un k négatif?", "Une décroissance : e^(−kx) diminue et ses pentes sont négatives."],
    ],
    summary: [
      "(eˣ)′ = eˣ.",
      "(e^g)′ = g′e^g.",
      "(bˣ)′ = bˣ ln b.",
      "Les exponentielles ne sont jamais nulles.",
    ],
    next: "La leçon 5.4 combine toutes les règles avec les exponentielles et les logarithmes.",
  }),
];
