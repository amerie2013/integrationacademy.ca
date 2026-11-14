// MCV4U-FR 5.6 — Révision du chapitre 5 (miroir de ../mcv4u-ch5/l5_6.mjs) : le nombre e, ln x et sa dérivée, les
// dérivées des exponentielles, les règles combinées et la dérivation logarithmique, et les modèles exponentiels, avec
// une pratique variée et un niveau difficile
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "5.6 Révision du chapitre 5";
export const ID = lessonId(5, 6);

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 5 — Fonctions exponentielles et logarithmiques",
    overview: S`Cette page rassemble le chapitre avant l'évaluation. Trois faits portent tout le reste : \((e^x)'=e^x\), \((\ln x)'=\frac1x\) et \((b^x)'=b^x\ln b\). Combinés aux règles de dérivation en chaîne, du produit et du quotient — et à la dérivation logarithmique pour les puissances variables — ils permettent de trouver des tangentes, des extremums et des points d'inflexion, ainsi que les taux des modèles de croissance et de décroissance. Chaque exemple ci-dessous utilise plusieurs habiletés à la fois.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "dériver des fonctions exponentielles et logarithmiques avec toutes les règles;",
      "utiliser la dérivation logarithmique;",
      "trouver des tangentes, des extremums et des points d'inflexion;",
      "résoudre des problèmes de croissance, de décroissance et de refroidissement.",
    ],
    curriculum: "A2.2, A2.3, A3.4, A3.5, B2 (tout le chapitre)",
    prior: [
      [S`\((e^{g})'\)?`, S`\(g'e^g\).`],
      [S`\((\ln g)'\)?`, S`\(\frac{g'}{g}\).`],
      [S`Temps de doublement pour \(P_0e^{kt}\)?`, S`\(\frac{\ln2}{k}\).`],
    ],
    words: [
      ["e", "base dont la pente en 0 vaut 1", "≈ 2.718"],
      ["ln x", "réciproque de \\(e^x\\)", "\\((\\ln x)'=\\frac1x\\)"],
      ["Dérivation logarithmique", "ln des deux membres, puis dériver", "\\(x^x\\)"],
      ["Modèle exponentiel", "\\(P'=kP\\)", "croissance ou décroissance"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["5.1 Le nombre e", "pente de bˣ ∝ bˣ; (eˣ)′ = eˣ", "pente de 2ˣ en 0 ≈ 0.693", "eˣ ≠ xᵉ"],
    ["5.2 ln x", "(ln x)′ = 1/x, (ln g)′ = g′/g", "(ln 7x)′ = 1/x", "ln(a + b) ≠ ln a + ln b"],
    ["5.3 Exponentielles", "(e^g)′ = g′e^g, (bˣ)′ = bˣ ln b", "(e^(4x))′ = 4e^(4x)", "pas de règle de la puissance pour eˣ"],
    ["5.4 Règles combinées", "produit, quotient, en chaîne; dérivation log.", "(xˣ)′ = xˣ(ln x + 1)", "remultiplier par y"],
    ["5.5 Modèles", "P′ = kP; ln 2/k", "demi-vie à partir de k", "unités et signe de k"],
  ])),

  section("📌 Explore", S`<p>Utilise l'explorateur de croissance pour vérifier les exemples de modèles : fixe \(P_0\) et \(k\), puis compare la pente avec \(kP\) à n'importe quel moment.</p>`),

  widget("growthModelLab", { init: { P0: 300, k: -0.15, t: 4 } }),

  section("📌 La vue d'ensemble", keyIdea(S`Les exponentielles varient à un taux proportionnel à elles-mêmes; les logarithmes varient au taux \(\frac1x\). Chaque problème de ce chapitre est l'un de ces faits, plus la règle de dérivation en chaîne, du produit ou du quotient — puis les outils habituels pour les tangentes, les extremums et les taux.`)),

  examples([
    ["Une tangente", S`Trouve la tangente à \(y=e^{2x}-x\) en \(x=0\).`,
      [S`\(y(0)=1\); \(y'=2e^{2x}-1\Rightarrow y'(0)=1\).`],
      S`\(y=x+1\)`,
      plane({ view: { xmin: -2, xmax: 1.2, ymin: -0.5, ymax: 5 }, curves: [{ f: (x) => Math.exp(2 * x) - x, color: "violet" }, { f: (x) => x + 1, color: "green", a: -1.5, b: 1.2 }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }, { x: -Math.log(2) / 2, y: 0.5 + Math.log(2) / 2, label: "min", color: "blue" }], step: { x: 0.5, y: 1 } })],
    ["Une dérivée logarithmique", S`Pour \(y=\ln(x^2+4)\), trouve \(y'\) et \(y'(2)\).`,
      [S`\(y'=\frac{2x}{x^2+4}\); \(y'(2)=\frac48\).`],
      S`\(y'=\frac{2x}{x^2+4}\); \(\frac12\) en \(x=2\)`],
    ["Un maximum", S`Trouve le maximum de \(f(x)=xe^{-2x}\).`,
      [S`\(f'=e^{-2x}-2xe^{-2x}=e^{-2x}(1-2x)\).`, S`Nulle en \(x=\frac12\) : \(f=\frac12e^{-1}\approx0.184\).`],
      S`maximum \(\left(\frac12,\frac1{2e}\right)\approx(0.5,0.184)\)`,
      plane({ view: { xmin: -0.3, xmax: 4, ymin: -0.3, ymax: 0.25 }, curves: [{ f: (x) => x * Math.exp(-2 * x), a: -0.15, b: 4, color: "violet" }], points: [{ x: 0.5, y: 0.5 / E, label: "max (0.5, 0.184)", color: "red" }], step: { x: 0.5, y: 0.05 } })],
    ["Une puissance variable", S`Pour \(y=(x+1)^x\), trouve \(y'(1)\).`,
      [S`\(\ln y=x\ln(x+1)\Rightarrow\frac{y'}{y}=\ln(x+1)+\frac{x}{x+1}\).`, S`En 1 : \(y=2\), donc \(y'=2\left(\ln2+\frac12\right)\).`],
      S`\(y'(1)=2\ln2+1\approx2.386\)`],
    ["Le refroidissement", S`Un thé refroidit selon \(T(t)=22+60e^{-0.1t}\) °C. Quand refroidit-il à raison de 3 °C par minute?`,
      [S`\(T'(t)=-6e^{-0.1t}=-3\Rightarrow e^{-0.1t}=\frac12\).`],
      S`\(t=10\ln2\approx6.93\) minutes`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 90 }, curves: [{ f: (t) => 22 + 60 * Math.exp(-0.1 * t), a: 0, b: 40, color: "violet" }, { f: (t) => 52 - 3 * (t - 10 * Math.log(2)), color: "green", a: 1, b: 14 }, { f: () => 22, color: "gray" }], points: [{ x: 10 * Math.log(2), y: 52, label: "(6.93, 52)", color: "red" }], step: { x: 5, y: 10 } })],
  ]),

  practice([
    q("exp", S`Pour \(y=e^{5x}\), trouve \(y'(0)\).`, num(5),
      "5e^(5x).", [S`\(5\).`], S`\(5\)`),
    q("ln", S`Pour \(y=\ln(4x)\), trouve \(y'(1)\).`, num(1),
      "1/x.", [S`\(1\).`], S`\(1\)`),
    q("base", S`Pour \(y=3^x\), trouve \(y'(0)\) (4 décimales).`, num(1.0986, 0.0005),
      "ln 3.", [S`\(\ln3\).`], S`\(1.0986\)`),
    q("modèle", S`Pour \(P(t)=200e^{0.3t}\), trouve \(P'(0)\).`, num(60),
      "kP₀.", [S`\(0.3\times200\).`], S`\(60\)`),
    q("règle", S`Laquelle est \(\frac{d}{dx}\ln x\)?`, choice([S`\(\frac1x\)`, S`\(\ln x\)`, S`\(e^x\)`, S`\(\frac{1}{\ln x}\)`], 0),
      "Réflexion de eˣ.", ["Pente 1/x."], S`\(\frac1x\)`),
  ]),

  section("📌 Suis-je prêt pour l'évaluation?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["5.1", "Je peux expliquer le nombre e et utiliser (eˣ)′ = eˣ."],
      ["5.2", "Je peux utiliser les lois des logarithmes et dériver ln x et ln(g(x))."],
      ["5.3", "Je peux dériver e^(g(x)) et bˣ."],
      ["5.4", "Je peux combiner les règles, utiliser la dérivation logarithmique et trouver des extremums."],
      ["5.5", "Je peux résoudre des problèmes de croissance, de décroissance, d'intérêt et de refroidissement."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Le point le plus bas de x² ln x", S`Trouve le minimum de \(f(x)=x^2\ln x\), \(x\gt0\).`,
      [S`\(f'=2x\ln x+x=x(2\ln x+1)\).`, S`Nulle lorsque \(\ln x=-\frac12\) : \(x=e^{-1/2}\approx0.607\).`, S`\(f=e^{-1}\cdot\left(-\frac12\right)=-\frac1{2e}\approx-0.184\).`],
      S`minimum \(\left(e^{-1/2},-\frac1{2e}\right)\approx(0.607,-0.184)\)`,
      plane({ view: { xmin: -0.1, xmax: 1.8, ymin: -0.3, ymax: 1.6 }, curves: [{ f: (x) => x * x * Math.log(x), a: 0.01, b: 1.8, color: "violet" }], points: [{ x: Math.exp(-0.5), y: -1 / (2 * E), label: "min (0.61, −0.18)", color: "red" }], step: { x: 0.25, y: 0.25 } })],
    ["Équilibrer deux exponentielles", S`Trouve le minimum de \(f(x)=e^x+e^{-2x}\).`,
      [S`\(f'=e^x-2e^{-2x}=0\Rightarrow e^{3x}=2\Rightarrow x=\frac{\ln2}{3}\approx0.231\).`, S`\(f=2^{1/3}+2^{-2/3}\approx1.260+0.630\).`],
      S`minimum d'environ 1.890 en \(x\approx0.231\)`,
      plane({ view: { xmin: -1.5, xmax: 2, ymin: 0, ymax: 6 }, curves: [{ f: (x) => Math.exp(x) + Math.exp(-2 * x), color: "violet" }], points: [{ x: Math.log(2) / 3, y: 2 ** (1 / 3) + 2 ** (-2 / 3), label: "min (0.23, 1.89)", color: "red" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("difficile", S`Pour \(y=xe^{x^2}\), trouve \(y'(1)\) (4 décimales).`, num(8.1548, 0.0005),
      "(1 + 2x²)e^(x²).", [S`\(3e\).`], S`\(8.1548\)`),
    q("difficile", S`Pour \(y=\ln(e^x+e^{-x})\), trouve \(y'(0)\).`, num(0),
      "(eˣ − e^(−x))/(eˣ + e^(−x)).", [S`\(\frac{0}{2}\).`], S`\(0\)`),
    q("difficile", S`Trouve la demi-vie lorsque \(k=-0.03\) par année (3 décimales).`, num(23.105, 0.002),
      "ln 2 / 0.03.", [S`\(23.105\).`], S`\(23.105\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour cette évaluation?", "Fais la pratique variée et le niveau difficile sans notes, puis vérifie chaque dérivée avec les explorateurs."],
      ["Quelles sont les erreurs les plus fréquentes?", "Appliquer la règle de la puissance à eˣ, oublier la dérivée intérieure, mal utiliser les lois des logarithmes sur des sommes et oublier de multiplier par y en dérivation logarithmique."],
      ["Comment trouver des valeurs exactes?", "Utilise ln e = 1, ln 1 = 0, e^(ln a) = a, et garde des réponses comme ln 2/3 sous forme exacte avant d'arrondir."],
      ["Comment vérifier la réponse d'un modèle?", "Vérifie le signe (croissance ou décroissance), les unités et si l'ordre de grandeur est raisonnable."],
      ["Qu'est-ce qui suit?", "Le chapitre 6 commence le volet des vecteurs : les vecteurs géométriques et leurs opérations."],
    ],
    summary: [
      "(eˣ)′ = eˣ, (ln x)′ = 1/x, (bˣ)′ = bˣ ln b.",
      "Règle de dérivation en chaîne pour chaque fonction intérieure.",
      "Dérivation logarithmique pour les puissances variables.",
      "Modèles : P′ = kP.",
    ],
    next: "Fais l'évaluation du chapitre 5. Le chapitre 6 présente les vecteurs géométriques.",
  }),
];
