// MCV4U-FR 1.6 — Révision du chapitre 1 : taux de variation, quotient de différence, limites, continuité et dérivée à
// partir de la définition
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "1.6 Révision du chapitre 1";
export const ID = lessonId(1, 6);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 1 — Taux de variation et limites",
    overview: S`Cette page rassemble le chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, une pratique variée, une liste de vérification et un niveau difficile. Essaie chaque exemple avant de lire sa solution, et utilise l'outil d'exploration pour vérifier tes esquisses de dérivées.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "calculer des taux de variation moyens et instantanés;",
      "évaluer des limites numériquement, graphiquement et algébriquement;",
      "vérifier et rétablir la continuité;",
      "dériver à partir de la définition et relier f à f′.",
    ],
    curriculum: "A1.1–A1.8, A2.1 (tout le chapitre)",
    prior: [
      [S`Taux moyen de \(x^2\) sur \([1,3]\)?`, S`\(4\).`],
      [S`\(\lim_{x\to2}\frac{x^2-4}{x-2}\)?`, S`\(4\).`],
      [S`Dérivée de \(x^2\)?`, S`\(2x\).`],
    ],
    words: [
      ["Sécante / tangente", "taux moyen / instantané", ""],
      ["Quotient de différence", "\\(\\frac{f(a+h)-f(a)}{h}\\)", ""],
      ["Limite", "valeur dont on s'approche; gauche = droite", ""],
      ["Dérivée", "\\(f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\)", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["1.1 Pente d'une courbe", "sécante = moyen, tangente = instantané", "d : de 4 à 40 m sur [1, 4] : 12 m/s", "pas de tangente à un coin"],
    ["1.2 Équations", "simplifier (f(a + h) − f(a))/h, puis h → 0", "3x² − x en 2 : 11", "f(a + h) ≠ f(a) + h"],
    ["1.3 Limites", "près de a, pas en a; gauche = droite", "(x² − 9)/(x − 3) → 6", "0/0 doit être simplifié"],
    ["1.4 Continuité", "f(a) = lim f(x)", "faire concorder les parties : k = 1", "non essentielle, par saut ou infinie"],
    ["1.5 Dérivées", "f′(x) à partir de la définition", "x³ → 3x²", "continue ≠ dérivable"],
  ])),

  section("📌 Explore", S`<p>Utilise l'outil de construction de la dérivée pour vérifier tes esquisses de \(f'\) dans les exemples et le niveau difficile.</p>`),

  widget("derivativeBuilder", { init: { fn: "quad", x: -2 } }),

  section("📌 La vue d'ensemble", keyIdea(S`Taux moyen (sécante) → réduire l'intervalle → limite → taux instantané (tangente). En faisant cela pour un \(x\) quelconque, on obtient la dérivée \(f'(x)\), qui existe partout où le graphique est lisse.`)),

  examples([
    ["Moyen et instantané", S`Pour \(f(x)=x^3-2x\), trouve le taux moyen sur \([1,2]\) et le taux instantané en \(x=1\).`,
      [S`\(\frac{f(2)-f(1)}{1}=\frac{4-(-1)}1=5\).`, S`\(\frac{f(1+h)-f(1)}{h}=\frac{(1+3h+3h^2+h^3)-2-2h+1}{h}=1+3h+h^2\to1\).`],
      S`moyen 5; instantané 1`,
      plane({ view: { xmin: -2, xmax: 2.5, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x ** 3 - 2 * x, color: "violet" }, { f: (x) => -1 + 5 * (x - 1), color: "amber" }, { f: (x) => -1 + (x - 1), color: "green" }], points: [{ x: 1, y: -1, label: "(1, −1)", color: "red" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["Une limite par rationalisation", S`Évalue \(\displaystyle\lim_{x\to4}\dfrac{\sqrt x-2}{x-4}\).`,
      [S`\(\frac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\frac1{\sqrt x+2}\to\frac14\).`],
      S`\(\tfrac14\)`],
    ["Continuité avec un paramètre", S`Trouve \(c\) pour que \(f(x)=x^2-c\) pour \(x\lt3\) et \(f(x)=cx+1\) pour \(x\ge3\) soit continue.`,
      [S`\(9-c=3c+1\Rightarrow4c=8\Rightarrow c=2\).`],
      S`\(c=2\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 12 }, curves: [{ f: (x) => x * x - 2, a: -1, b: 3, color: "violet" }, { f: (x) => 2 * x + 1, a: 3, b: 5, color: "green" }], points: [{ x: 3, y: 7, label: "(3, 7)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Définition de la dérivée", S`Trouve \(f'(x)\) pour \(f(x)=3x^2-5x+2\) à partir de la définition.`,
      [S`\(f(x+h)-f(x)=6xh+3h^2-5h\).`, S`\(\frac{6xh+3h^2-5h}{h}=6x+3h-5\to6x-5\).`],
      S`\(f'(x)=6x-5\)`],
    ["Lire f′ à partir de f", S`Le graphique de \(f\) monte jusqu'à \(x=-1\), descend jusqu'à \(x=2\), puis monte. Décris le signe de \(f'\).`,
      [S`\(f'>0\) sur \((-\infty,-1)\) et \((2,\infty)\); \(f'\lt0\) sur \((-1,2)\); \(f'=0\) en \(x=-1\) et \(x=2\).`],
      S`+, 0, −, 0, +`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 0.5 * (x ** 3 - 1.5 * x * x - 6 * x), color: "violet" }, { f: (x) => 0.5 * (3 * x * x - 3 * x - 6), color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("taux moyen", S`Trouve le taux de variation moyen de \(f(x)=2x^2\) sur \([1,4]\).`, num(10),
      "(32 − 2) ÷ 3.", [S`\(\frac{30}{3}\).`], S`\(10\)`),
    q("limite", S`Évalue \(\displaystyle\lim_{x\to5}\dfrac{x^2-25}{x-5}\).`, num(10),
      "Factorise.", [S`\(x+5\to10\).`], S`\(10\)`),
    q("à gauche / à droite", S`Pour \(f(x)=x+2\) quand \(x\lt1\) et \(f(x)=2x\) quand \(x\ge1\), est-ce que \(\displaystyle\lim_{x\to1}f(x)\) existe?`, choice(["non (3 ≠ 2)", "oui, elle vaut 3", "oui, elle vaut 2", "oui, elle vaut 1"], 0),
      "Compare les deux côtés.", [S`À gauche 3, à droite 2.`], "non"),
    q("dérivée", S`Trouve \(f'(x)\) pour \(f(x)=x^2-8x\).`, expr("2*x-8"),
      "La définition ou la régularité.", [S`\(2x+h-8\to2x-8\).`], S`\(2x-8\)`),
    q("pente de la tangente", S`Trouve la pente de la tangente à \(y=x^3\) en \(x=-2\).`, num(12),
      "3x².", [S`\(3(4)\).`], S`\(12\)`),
  ]),

  section("📌 Suis-je prêt ou prête pour le test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "Je peux trouver des taux moyens comme pentes de sécantes et estimer des pentes de tangentes."],
      ["1.2", "Je peux simplifier le quotient de différence et trouver des taux instantanés exacts."],
      ["1.3", "Je peux évaluer des limites, y compris des limites à gauche et à droite, des limites infinies et des limites à l'infini."],
      ["1.4", "Je peux classer des discontinuités et rendre continues des fonctions définies par parties."],
      ["1.5", "Je peux dériver à partir de la définition et esquisser f′ à partir de f."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Où la tangente est-elle parallèle?", S`Pour \(f(x)=x^2-3x\), trouve le point où la tangente est parallèle à la sécante de \(x=0\) à \(x=4\).`,
      [S`Pente de la sécante \(\frac{f(4)-f(0)}{4}=\frac{4-0}{4}=1\).`, S`\(f'(x)=2x-3=1\Rightarrow x=2\); point \((2,-2)\).`],
      S`\((2,-2)\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 3 * x, color: "violet" }, { f: (x) => x, color: "amber" }, { f: (x) => x - 4, color: "green" }], points: [{ x: 2, y: -2, label: "(2, −2)", color: "red" }, { x: 0, y: 0, color: "amber" }, { x: 4, y: 4, color: "amber" }], step: { x: 1, y: 1 } })],
    ["La dérivée d'une fonction rationnelle", S`Trouve \(f'(x)\) pour \(f(x)=\dfrac{1}{x-2}\) à partir de la définition, et explique ce que son signe indique sur le graphique.`,
      [S`\(\dfrac{\frac1{x+h-2}-\frac1{x-2}}{h}=\dfrac{(x-2)-(x+h-2)}{h(x+h-2)(x-2)}=\dfrac{-1}{(x+h-2)(x-2)}\to-\dfrac1{(x-2)^2}\).`, S`Toujours négative : le graphique décroît de chaque côté de l'asymptote \(x=2\).`],
      S`\(f'(x)=-\dfrac1{(x-2)^2}\lt0\)`],
  ], [
    q("difficile", S`Évalue \(\displaystyle\lim_{x\to-3}\dfrac{x^3+27}{x+3}\).`, num(27),
      "Somme de cubes.", [S`\(x^2-3x+9\to27\).`], S`\(27\)`),
    q("difficile", S`Pour \(f(x)=x^3-12x\), pour quelle valeur positive de \(x\) la tangente est-elle horizontale?`, num(2),
      "f′(x) = 3x² − 12.", [S`\(x^2=4\).`], S`\(2\)`),
    q("difficile", S`Trouve \(\displaystyle\lim_{x\to\infty}\dfrac{4x-1}{2x+7}\).`, num(2),
      "Divise par x.", [S`\(\frac42\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour ce test?", "Fais la pratique variée et le niveau difficile sans tes notes, puis retourne à l'outil d'exploration pour chaque erreur."],
      ["Quelles sont les erreurs les plus fréquentes?", "Écrire f(a + h) comme f(a) + h, éliminer h trop tôt, ignorer un côté d'une limite et supposer que la continuité entraîne la dérivabilité."],
      ["Combien de travail dois-je montrer?", "Écris le quotient de différence, montre la simplification, et garde « lim » jusqu'à ce que h ait disparu."],
      ["Comment esquisser f′ rapidement?", "Repère où f a des tangentes horizontales (f′ = 0), puis note où f monte (f′ > 0) ou descend (f′ < 0)."],
      ["Comment ce chapitre mène-t-il au chapitre 2?", "Le chapitre 2 trouve les dérivées à l'aide de règles plutôt que de limites : règles de la puissance, du produit, de dérivation en chaîne et du quotient."],
    ],
    summary: [
      "De la sécante à la tangente grâce aux limites.",
      "Simplifie, puis fais tendre h vers 0.",
      "Continuité : f(a) = lim f(x).",
      "f′(x) donne la pente de chaque tangente.",
    ],
    next: "fais le test du chapitre 1. Le chapitre 2 présente les règles de dérivation.",
  }),
];
