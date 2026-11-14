// MCV4U-FR 5.1 — Taux de variation et le nombre e (miroir de ../mcv4u-ch5/l5_1.mjs) : les pentes de b^x sont
// proportionnelles à b^x, la pente en 0, la base e (pente 1 en 0), e comme limite de (1 + 1/n)^n, (e^x)′ = e^x,
// et les taux dans les modèles exponentiels
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "5.1 Taux de variation et le nombre e";
export const ID = lessonId(5, 1);

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🌱",
    title: "Taux de variation et le nombre e",
    overview: S`Une fonction exponentielle \(y=b^x\) a une propriété remarquable : sa pente en chaque point est un multiple fixe de sa hauteur. Si la hauteur double, l'inclinaison double. Le multiplicateur est la pente en \(x=0\) — environ 0.693 pour \(2^x\) et 1.099 pour \(3^x\). Quelque part entre 2 et 3, il existe une base dont la pente en 0 vaut exactement 1. Cette base est le nombre \(e\approx2.71828\), et pour elle la pente est égale à la hauteur partout : \(\dfrac{d}{dx}e^x=e^x\). Le même nombre apparaît comme la limite de \(\left(1+\frac1n\right)^n\) — le résultat d'intérêts composés de façon continue.`,
    goals: [
      "estimer des taux de variation instantanés de fonctions exponentielles;",
      "expliquer pourquoi la pente de b^x est proportionnelle à b^x;",
      "décrire le nombre e de deux façons;",
      "utiliser le fait que (e^x)′ = e^x;",
      "trouver des tangentes et des taux pour des fonctions exponentielles.",
    ],
    curriculum: "A2.2, A2.3 (déterminer, par exploration, que le taux de variation d'une fonction exponentielle est proportionnel à la fonction; reconnaître e comme la base dont le taux de variation est égal à la fonction)",
    prior: [
      [S`Que vaut \(2^0\)?`, S`\(1\).`],
      [S`Simplifie \(2^{x+h}\).`, S`\(2^x\cdot2^h\).`],
      [S`Quotient de différence de \(f\) en \(x\)?`, S`\(\frac{f(x+h)-f(x)}{h}\).`],
    ],
    words: [
      ["Fonction exponentielle", "\\(y=b^x\\), \\(b\\gt0\\), \\(b\\ne1\\)", "\\(2^x\\), \\(e^x\\)"],
      ["Le nombre e", "la base dont la pente en 0 vaut 1", "\\(e\\approx2.71828\\)"],
      ["Exponentielle naturelle", "\\(y=e^x\\)", "\\((e^x)'=e^x\\)"],
      ["Taux proportionnel", "pente \\(=c\\times\\) hauteur", "\\(c=\\) pente en 0"],
    ],
  }),

  section("📌 La pente est proportionnelle à la hauteur", S`
  ${table(["Fonction", "Pente en 0", "Pente en x"], [
    ["\\(2^x\\)", "≈ 0.693", "≈ 0.693 · 2ˣ"],
    ["\\(e^x\\)", "1", "eˣ"],
    ["\\(3^x\\)", "≈ 1.099", "≈ 1.099 · 3ˣ"],
  ])}
  ${plane({ view: { xmin: -2.5, xmax: 2.2, ymin: -0.5, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: Math.exp, color: "violet" }, { f: (x) => 3 ** x, color: "amber" }, { f: (x) => 1 + x, color: "green", a: -1, b: 1.5 }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }], step: { x: 0.5, y: 1 } }, "y = 2ˣ (bleu), y = eˣ (violet) et y = 3ˣ (ambre) : seule eˣ a la tangente y = x + 1 (vert) en x = 0.")}
  ${keyIdea(S`Pour toute base \(b\) : \(\frac{b^{x+h}-b^x}{h}=b^x\cdot\frac{b^h-1}{h}\), donc la pente en \(x\) est \(b^x\) fois la pente en 0. La base dont la pente en 0 vaut 1 est \(e\), et par conséquent \(\dfrac{d}{dx}e^x=e^x\).`)}`),

  section("📌 Explore", S`<p>Change la base \(b\). Le panneau affiche la pente en 0 et le rapport pente ÷ hauteur au \(x\) choisi — ils sont toujours égaux. Trouve la base qui rend la pente en 0 exactement égale à 1, puis appuie sur le bouton pour vérifier.</p>`),

  widget("expBaseLab", { init: { b: 2, x: 1 } }),

  section("📌 Deux façons de rencontrer e", S`
  <p>Géométriquement, \(e\) est la base dont le graphique coupe l'axe des y avec une pente de 1. Numériquement, \(e=\lim_{n\to\infty}\left(1+\frac1n\right)^n\) : un dollar placé à 100 % d'intérêt, composé de plus en plus souvent, devient \(e\) dollars en un an.</p>
  ${watchOut([
    "e est un nombre (≈ 2.718), pas une variable.",
    "(eˣ)′ = eˣ, mais (2ˣ)′ n'est pas 2ˣ : les autres bases demandent un facteur constant.",
    "xᵉ et eˣ sont différentes : la première est une fonction puissance, la seconde une exponentielle.",
    "Utilise assez de décimales pour e : 2.718 n'est pas assez précis pour de grandes valeurs de x.",
    "Les fonctions exponentielles sont toujours positives et toujours croissantes (pour b > 1).",
  ])}`),

  examples([
    ["Pentes de 2ˣ", S`Estime la pente de \(y=2^x\) en \(x=0\) et en \(x=3\) avec \(h=0.001\).`,
      [S`En 0 : \(\frac{2^{0.001}-1}{0.001}\approx0.6934\).`, S`En 3 : \(2^3\times0.6934\approx5.547\).`],
      S`environ 0.693 en 0 et 5.55 en 3 — huit fois plus abrupte, parce que la hauteur est huit fois plus grande`,
      plane({ view: { xmin: -1.5, xmax: 3.6, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 1 + 0.6931 * x, color: "green", a: -1.4, b: 1.5 }, { f: (x) => 8 + 5.545 * (x - 3), color: "green", a: 2.2, b: 3.6 }], points: [{ x: 0, y: 1, label: "pente 0.69", color: "red" }, { x: 3, y: 8, label: "pente 5.55", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["La base 3", S`Estime la pente de \(y=3^x\) en \(x=0\).`,
      [S`\(\frac{3^{0.001}-1}{0.001}\approx1.0992\).`],
      S`environ 1.099 — plus grand que 1, donc la base spéciale se trouve entre 2 et 3`],
    ["Trouver e", S`Évalue \(\left(1+\frac1n\right)^n\) pour \(n=10,\ 100,\ 1000,\ 1\,000\,000\).`,
      [S`\(2.59374\), \(2.70481\), \(2.71692\), \(2.71828\).`],
      S`les valeurs s'approchent de \(e\approx2.71828\)`,
      plane({ view: { xmin: 0, xmax: 52, ymin: 2, ymax: 2.8 }, points: Array.from({ length: 25 }, (_, i) => ({ x: 2 * (i + 1), y: (1 + 1 / (2 * (i + 1))) ** (2 * (i + 1)), color: "blue" })), lines: [{ m: 0, b: E, color: "red", dash: true }], step: { x: 5, y: 0.1 }, xlabel: "n" })],
    ["Une tangente à eˣ", S`Trouve la tangente à \(y=e^x\) en \(x=1\).`,
      [S`Point \((1,e)\); pente \(e^1=e\).`, S`\(y-e=e(x-1)\Rightarrow y=ex\).`],
      S`\(y=ex\) — elle passe par l'origine`,
      plane({ view: { xmin: -1.5, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: Math.exp, color: "violet" }, { f: (x) => E * x, color: "green", a: -0.3, b: 2 }], points: [{ x: 1, y: E, label: "(1, e)", color: "red" }, { x: 0, y: 0, color: "green" }], step: { x: 0.5, y: 1 } })],
    ["Une colonie qui croît", S`Une colonie compte \(N(t)=200\cdot2^t\) cellules après \(t\) heures. Estime son taux de croissance en \(t=3\).`,
      [S`La pente de \(2^t\) est environ \(0.6931\cdot2^t\), donc \(N'(t)\approx200\cdot0.6931\cdot2^t\).`, S`En \(t=3\) : \(1600\times0.6931\).`],
      S`environ 1109 cellules par heure`],
  ]),

  practice([
    q("pente", S`Quelle est la pente de \(y=e^x\) en \(x=0\)?`, num(1),
      "Définition de e.", [S`\(e^0=1\).`], S`\(1\)`),
    q("pente", S`Quelle est la pente de \(y=e^x\) en \(x=2\) (2 décimales)?`, num(7.39, 0.01),
      "(eˣ)′ = eˣ.", [S`\(e^2\approx7.389\).`], S`\(7.39\)`),
    q("estimation", S`Estime la pente de \(y=2^x\) en \(x=0\) (3 décimales).`, num(0.693, 0.002),
      "(2^h − 1)/h avec h petit.", [S`\(\approx0.693\).`], S`\(0.693\)`),
    q("base", S`Quelle base a une pente d'exactement 1 en \(x=0\)?`, choice([S`\(e\approx2.718\)`, S`\(2\)`, S`\(3\)`, S`\(10\)`], 0),
      "Entre 2 et 3.", ["C'est la définition de e."], S`\(e\)`),
    q("limite", S`Évalue \(\left(1+\frac1{1000}\right)^{1000}\) (4 décimales).`, num(2.7169, 0.0005),
      "Proche de e.", [S`\(2.71692\).`], S`\(2.7169\)`),
  ]),

  ...hard([
    ["Pourquoi la pente est proportionnelle à la hauteur", S`Montre que la pente de \(y=b^x\) en tout \(x\) est égale à \(b^x\) fois sa pente en 0.`,
      [S`\(\frac{b^{x+h}-b^x}{h}=\frac{b^x(b^h-1)}{h}=b^x\cdot\frac{b^h-1}{h}\).`, S`Lorsque \(h\to0\), \(\frac{b^h-1}{h}\) s'approche de la pente en 0, une constante \(c_b\).`, S`La pente est donc \(c_b\,b^x\); pour \(b=e\), \(c_e=1\).`],
      S`\(\frac{d}{dx}b^x=c_b\,b^x\), où \(c_b\) est la pente en 0`],
    ["Une pente de 5 sur eˣ", S`En quel point la tangente à \(y=e^x\) a-t-elle une pente de 5? Trouve la tangente en ce point.`,
      [S`Pente \(=e^x=5\Rightarrow x=\ln5\approx1.609\); point \((\ln5,5)\).`, S`\(y-5=5(x-\ln5)\).`],
      S`\((1.609,5)\); tangente \(y=5x+5-5\ln5\approx5x-3.05\)`,
      plane({ view: { xmin: -1, xmax: 2.5, ymin: -1, ymax: 10 }, curves: [{ f: Math.exp, color: "violet" }, { f: (x) => 5 * x + 5 - 5 * Math.log(5), color: "green", a: 0.8, b: 2.4 }], points: [{ x: Math.log(5), y: 5, label: "(ln 5, 5)", color: "red" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("difficile", S`Estime la pente de \(y=10^x\) en \(x=0\) (4 décimales).`, num(2.3026, 0.001),
      "(10^h − 1)/h.", [S`\(\approx2.3026\).`], S`\(2.3026\)`),
    q("difficile", S`La tangente à \(y=e^x\) en \(x=a\) passe par l'origine. Trouve \(a\).`, num(1),
      "Tangente y = eᵃ(x − a) + eᵃ; en x = 0 : eᵃ(1 − a) = 0.", [S`\(a=1\).`], S`\(1\)`),
    q("difficile", S`Pour \(y=5^x\), quel est le rapport pente ÷ hauteur en chaque point (4 décimales)?`, num(1.6094, 0.001),
      "La pente en 0.", [S`\(\approx1.6094\).`], S`\(1.6094\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la pente est-elle proportionnelle à la hauteur?", "b^(x+h) = bˣ · bʰ, donc chaque quotient de différence est bˣ fois le même quotient en 0."],
      ["Qu'est-ce que e, exactement?", "La base dont la pente vaut 1 en x = 0; de façon équivalente, la limite de (1 + 1/n)ⁿ. C'est un nombre irrationnel, environ 2.718281828."],
      ["Pourquoi eˣ est-elle si utile?", "Sa dérivée est elle-même, ce qui simplifie tous les calculs de croissance et de décroissance."],
      ["Quel est le lien entre les constantes 0.693 et 1.099 et e?", "Ce sont ln 2 et ln 3 — le logarithme naturel, à la prochaine leçon."],
      ["Toute exponentielle est-elle croissante?", "Pour b > 1, oui; pour 0 < b < 1, la pente en 0 est négative et la fonction décroît."],
    ],
    summary: [
      "(bˣ)′ = (pente en 0) · bˣ.",
      "e ≈ 2.718 : pente 1 en 0.",
      "(eˣ)′ = eˣ.",
      "e = lim (1 + 1/n)ⁿ.",
    ],
    next: "La leçon 5.2 présente le logarithme naturel et sa dérivée.",
  }),
];
