// MCV4U-FR 5.4 — Règles de dérivation des fonctions exponentielles (miroir de ../mcv4u-ch5/l5_4.mjs) : combiner
// exponentielles et logarithmes avec les règles du produit, du quotient et de dérivation en chaîne, la dérivation
// logarithmique (x^x), les dérivées secondes et les caractéristiques des courbes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "5.4 Règles de dérivation des fonctions exponentielles";
export const ID = lessonId(5, 4);

const S = String.raw;
const E = Math.E;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Règles de dérivation des fonctions exponentielles",
    overview: S`Les fonctions réelles mélangent des exponentielles avec des polynômes, des fonctions trigonométriques et des logarithmes : \(e^{3x}\sin2x\), \(\frac{x^2+1}{e^x}\), \(\ln(e^{2x}+1)\). Toutes les règles de dérivation s'appliquent encore — produit, quotient, dérivation en chaîne — superposées au besoin. Une nouvelle technique traite les fonctions dont la variable est à la fois dans la base et dans l'exposant, comme \(x^x\) : on prend d'abord le logarithme naturel des deux membres, puis on dérive. C'est la <strong>dérivation logarithmique</strong>.`,
    goals: [
      "combiner les dérivées exponentielles et logarithmiques avec les règles du produit, du quotient et de dérivation en chaîne;",
      "utiliser la dérivation logarithmique pour des fonctions comme x^x;",
      "trouver des dérivées secondes de fonctions exponentielles;",
      "situer les extremums et les points d'inflexion de fonctions exponentielles;",
      "simplifier les réponses en mettant les exponentielles en évidence.",
    ],
    curriculum: "A3.4 (vérifier la règle de dérivation en chaîne et utiliser les règles du produit, du quotient et de dérivation en chaîne pour dériver des combinaisons de fonctions exponentielles et d'autres fonctions)",
    prior: [
      [S`\((e^{3x})'\)?`, S`\(3e^{3x}\).`],
      [S`\((\ln g)'\)?`, S`\(\frac{g'}{g}\).`],
      [S`\(\ln(x^x)\)?`, S`\(x\ln x\).`],
    ],
    words: [
      ["Dérivation logarithmique", "prendre le ln des deux membres, puis dériver", "pour \\(x^x\\)"],
      ["Étape implicite", "\\(\\frac{d}{dx}\\ln y=\\frac{y'}{y}\\)", ""],
      ["Mise en évidence des exponentielles", "\\(e^{x}(\\ldots)\\)", "\\(e^x\\gt0\\)"],
      ["Oscillation amortie", "\\(e^{-kx}\\sin x\\)", "ondes qui rapetissent"],
    ],
  }),

  section("📌 Quelle règle d'abord?", S`
  ${table(["Fonction", "Dernière opération", "Commencer par"], [
    ["\\(e^{3x}\\sin2x\\)", "multiplication", "règle du produit"],
    ["\\(\\frac{x^2+1}{e^x}\\)", "division", "règle du quotient (ou écrire \\((x^2+1)e^{-x}\\))"],
    ["\\(\\ln(e^{2x}+1)\\)", "ln d'une expression", "règle de dérivation en chaîne"],
    ["\\(x^x\\)", "puissance variable", "dérivation logarithmique"],
  ])}
  ${plane({ view: { xmin: -0.2, xmax: 9.5, ymin: -1, ymax: 1 }, curves: [{ f: (x) => Math.exp(-0.3 * x) * Math.sin(2 * x), color: "violet" }, { f: (x) => Math.exp(-0.3 * x), color: "gray" }, { f: (x) => -Math.exp(-0.3 * x), color: "gray" }], step: { x: 1, y: 0.25 } }, "Une onde amortie y = e^(−0.3x) sin 2x (violet) entre les enveloppes ±e^(−0.3x).")}
  ${keyIdea(S`Repère la dernière opération, applique la règle correspondante et traite les fonctions intérieures avec la règle de dérivation en chaîne. Pour \(y=f(x)^{g(x)}\) : \(\ln y=g\ln f\), donc \(\frac{y'}{y}=g'\ln f+g\frac{f'}{f}\).`)}`),

  section("📌 Explore", S`<p>Utilise l'explorateur pour vérifier les parties exponentielles de chaque exemple : la pente de \(Ae^{kx}\) est toujours \(k\) fois sa hauteur, ce que produit la règle de dérivation en chaîne dans chaque produit ou quotient ci-dessous.</p>`),

  widget("expRuleLab", { init: { A: 2, k: -0.5, mode: "e", b: 3, x: 1 } }),

  section("📌 Bonnes habitudes", S`
  <p>Garde les exponentielles comme facteurs communs : \(3e^{3x}\sin2x+2e^{3x}\cos2x=e^{3x}(3\sin2x+2\cos2x)\). Les réponses factorisées facilitent la recherche des nombres critiques.</p>
  ${watchOut([
    "xˣ n'est ni une fonction puissance ni une exponentielle : utilise la dérivation logarithmique.",
    "Après avoir dérivé ln y, multiplie les deux membres par y.",
    "Un quotient par eˣ est un produit avec e^(−x) — souvent plus simple.",
    "Mets l'exponentielle en évidence avant de poser la dérivée égale à 0.",
    "Les dérivées secondes de produits demandent encore la règle du produit.",
  ])}`),

  examples([
    ["Produit et dérivation en chaîne", S`Dérive \(y=e^{3x}\sin(2x)\).`,
      [S`\(3e^{3x}\sin2x+e^{3x}\cdot2\cos2x\).`],
      S`\(y'=e^{3x}(3\sin2x+2\cos2x)\)`],
    ["Dérivation logarithmique", S`Dérive \(y=x^x\) (\(x\gt0\)) et trouve \(y'(2)\).`,
      [S`\(\ln y=x\ln x\Rightarrow\frac{y'}{y}=\ln x+1\).`, S`\(y'=x^x(\ln x+1)\); en 2 : \(4(\ln2+1)\).`],
      S`\(y'=x^x(\ln x+1)\); \(y'(2)\approx6.773\)`,
      plane({ view: { xmin: -0.1, xmax: 2.5, ymin: -0.5, ymax: 8 }, curves: [{ f: (x) => x ** x, a: 0.01, b: 2.5, color: "violet" }, { f: (x) => 4 + 6.773 * (x - 2), color: "green", a: 1.5, b: 2.5 }], points: [{ x: 1 / E, y: (1 / E) ** (1 / E), label: "min (1/e, 0.69)", color: "blue" }, { x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Toujours décroissante", S`Montre que \(y=\frac{x^2+1}{e^x}\) n'est jamais croissante.`,
      [S`\(y=(x^2+1)e^{-x}\Rightarrow y'=2xe^{-x}-(x^2+1)e^{-x}\).`, S`\(=-(x^2-2x+1)e^{-x}=-(x-1)^2e^{-x}\le0\).`],
      S`\(y'=-(x-1)^2e^{-x}\le0\) : décroissante partout, avec un point à tangente horizontale en \(x=1\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => (x * x + 1) * Math.exp(-x), a: -1.6, b: 5, color: "violet" }], points: [{ x: 1, y: 2 / E, label: "plat (1, 2/e)", color: "red" }], step: { x: 1, y: 1 } })],
    ["ln d'une somme d'exponentielles", S`Pour \(y=\ln(e^{2x}+1)\), trouve \(y'(0)\).`,
      [S`\(y'=\frac{2e^{2x}}{e^{2x}+1}\); en 0 : \(\frac22\).`],
      S`\(y'(0)=1\)`],
    ["Les points d'inflexion de la courbe en cloche", S`Trouve les points d'inflexion de \(y=e^{-x^2}\).`,
      [S`\(y'=-2xe^{-x^2}\); \(y''=-2e^{-x^2}+4x^2e^{-x^2}=(4x^2-2)e^{-x^2}\).`, S`\(y''=0\Rightarrow x=\pm\frac1{\sqrt2}\approx\pm0.707\); \(y=e^{-1/2}\approx0.607\).`],
      S`points d'inflexion \(\left(\pm0.707,0.607\right)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -0.2, ymax: 1.3 }, curves: [{ f: (x) => Math.exp(-x * x), color: "violet" }], points: [{ x: Math.SQRT1_2, y: Math.exp(-0.5), label: "inflexion", color: "red" }, { x: -Math.SQRT1_2, y: Math.exp(-0.5), label: "inflexion", color: "red" }], step: { x: 0.5, y: 0.25 } })],
  ]),

  practice([
    q("produit", S`Pour \(y=xe^{2x}\), trouve \(y'(0)\).`, num(1),
      "e^(2x) + 2x e^(2x).", [S`\(1+0\).`], S`\(1\)`),
    q("quotient", S`Pour \(y=\dfrac{e^x}{x}\), trouve \(y'(1)\).`, num(0),
      "eˣ(x − 1)/x².", [S`\(e\cdot0\).`], S`\(0\)`),
    q("en chaîne", S`Pour \(y=5^{x^2}\), trouve \(y'(1)\) (3 décimales).`, num(16.094, 0.002),
      "2x ln 5 · 5^(x²).", [S`\(2\cdot5\ln5\).`], S`\(16.094\)`),
    q("dérivation log.", S`Pour \(y=x^x\), trouve \(y'(1)\).`, num(1),
      "xˣ(ln x + 1).", [S`\(1\cdot(0+1)\).`], S`\(1\)`),
    q("méthode", S`Quelle méthode permet de dériver \(y=x^{\sin x}\)?`, choice(["la dérivation logarithmique", "la règle de la puissance", "la règle pour bˣ", "la règle du quotient"], 0),
      "Variable dans la base et dans l'exposant.", ["Prends le ln des deux membres."], "la dérivation logarithmique"),
  ]),

  ...hard([
    ["Une oscillation amortie", S`Trouve le maximum de \(f(x)=e^{-x}\sin x\) sur \([0,\pi]\).`,
      [S`\(f'=-e^{-x}\sin x+e^{-x}\cos x=e^{-x}(\cos x-\sin x)\).`, S`Nulle en \(x=\frac\pi4\); \(f\left(\frac\pi4\right)=e^{-\pi/4}\cdot\frac{\sqrt2}2\approx0.322\); les bornes donnent 0.`],
      S`maximum d'environ 0.322 en \(x=\frac\pi4\)`,
      plane({ view: { xmin: -0.2, xmax: 3.5, ymin: -0.1, ymax: 0.45 }, curves: [{ f: (x) => Math.exp(-x) * Math.sin(x), a: 0, b: PI, color: "violet" }], points: [{ x: PI / 4, y: Math.exp(-PI / 4) * Math.SQRT1_2, label: "max (π/4, 0.32)", color: "red" }], step: { x: 0.5, y: 0.1 } })],
    ["Le sommet de x^(1/x)", S`Utilise la dérivation logarithmique pour trouver le maximum de \(y=x^{1/x}\), \(x\gt0\).`,
      [S`\(\ln y=\frac{\ln x}{x}\Rightarrow\frac{y'}{y}=\frac{1-\ln x}{x^2}\).`, S`\(y'=0\) lorsque \(\ln x=1\) : \(x=e\); \(y=e^{1/e}\approx1.445\).`],
      S`maximum \(e^{1/e}\approx1.445\) en \(x=e\)`,
      plane({ view: { xmin: -0.2, xmax: 12, ymin: -0.1, ymax: 1.7 }, curves: [{ f: (x) => x ** (1 / x), a: 0.2, b: 12, color: "violet" }], points: [{ x: E, y: E ** (1 / E), label: "max (e, 1.445)", color: "red" }], step: { x: 1, y: 0.25 } })],
  ], [
    q("difficile", S`Pour \(y=e^x\ln x\), trouve \(y'(1)\) (4 décimales).`, num(2.7183, 0.0005),
      "eˣ ln x + eˣ/x.", [S`\(0+e\).`], S`\(2.7183\)`),
    q("difficile", S`Pour \(y=x^2\cdot2^x\), trouve \(y'(1)\) (4 décimales).`, num(5.3863, 0.0005),
      "2x·2ˣ + x²·2ˣ ln 2.", [S`\(4+2\ln2\).`], S`\(5.3863\)`),
    q("difficile", S`Combien de nombres critiques \(f(x)=x^3e^{-x}\) a-t-elle?`, num(2),
      "f′ = x²(3 − x)e^(−x).", [S`\(x=0\) et \(x=3\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Quand ai-je besoin de la dérivation logarithmique?", "Quand la variable est à la fois dans la base et dans l'exposant (xˣ, x^(sin x)), ou pour simplifier de longs produits et quotients."],
      ["Pourquoi multiplier par y à la fin?", "Dériver ln y donne y′/y; multiplier par y isole y′."],
      ["Vaut-il mieux utiliser la règle du quotient ou réécrire avec e^(−x)?", "Les deux fonctionnent; réécrire sous forme de produit donne habituellement une réponse plus simple."],
      ["Comment trouver les extremums de xⁿe^(−x)?", "Factorise : f′ = x^(n−1)(n − x)e^(−x), donc les nombres critiques sont 0 et n."],
      ["Qu'est-ce qu'une oscillation amortie?", "Une onde dont l'amplitude décroît, comme e^(−kx) sin x — des ressorts avec frottement, un son qui s'éteint."],
    ],
    summary: [
      "Applique d'abord la règle de la dernière opération.",
      "Règle de dérivation en chaîne pour chaque fonction intérieure.",
      "Dérivation logarithmique pour f(x)^g(x).",
      "Mets les exponentielles en évidence.",
    ],
    next: "La leçon 5.5 utilise les dérivées des exponentielles pour modéliser la croissance et la décroissance.",
  }),
];
