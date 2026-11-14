// MCV4U-FR 4.2 — Dérivées des fonctions sinus et cosinus : (sin x)′ = cos x, (cos x)′ = −sin x, le cycle de quatre
// étapes, combinaison avec les règles de la somme, du produit et du quotient, dérivée de tan x, tangentes horizontales
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "4.2 Dérivées des fonctions sinus et cosinus";
export const ID = lessonId(4, 2);

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Dérivées des fonctions sinus et cosinus",
    overview: S`En 4.1, les pentes de la courbe sinus ont tracé la courbe cosinus. Énoncé de façon exacte, avec \(x\) en radians : \(\dfrac{d}{dx}\sin x=\cos x\) et \(\dfrac{d}{dx}\cos x=-\sin x\). En dérivant encore et encore, on parcourt un cycle de quatre fonctions — \(\sin x\to\cos x\to-\sin x\to-\cos x\to\sin x\) — de sorte que toutes les quatre dérivées, on revient au point de départ. Combinés aux règles de la somme, du produit et du quotient, ces deux résultats donnent les dérivées de nombreuses nouvelles fonctions, dont \(\tan x\).`,
    goals: [
      "énoncer et utiliser les dérivées de sin x et de cos x;",
      "trouver des dérivées d'ordre supérieur à l'aide du cycle de quatre étapes;",
      "dériver des produits, des quotients et des sommes qui contiennent sin x et cos x;",
      "établir la dérivée de tan x;",
      "trouver les tangentes et les tangentes horizontales de fonctions trigonométriques.",
    ],
    curriculum: "A2.4 (déterminer les dérivées de f(x) = sin x et de f(x) = cos x), A3.3 (utiliser les règles du produit et du quotient avec ces fonctions)",
    prior: [
      [S`Pente de \(y=\sin x\) en \(x=0\) ?`, S`\(1\).`],
      [S`\((uv)'\) ?`, S`\(u'v+uv'\).`],
      [S`\(\cos\frac\pi3\) et \(\sin\frac\pi3\) ?`, S`\(\frac12\) et \(\frac{\sqrt3}{2}\).`],
    ],
    words: [
      ["Dérivée du sinus", "\\(\\frac{d}{dx}\\sin x=\\cos x\\)", "x en radians"],
      ["Dérivée du cosinus", "\\(\\frac{d}{dx}\\cos x=-\\sin x\\)", "attention au signe moins"],
      ["Cycle des dérivées", "sin → cos → −sin → −cos → sin", "période 4"],
      ["Dérivée de la tangente", "\\(\\frac{d}{dx}\\tan x=\\sec^2x\\)", "par la règle du quotient"],
    ],
  }),

  section("📌 Les deux règles et le cycle", S`
  ${table(["n", "0", "1", "2", "3", "4"], [
    ["\\(\\frac{d^n}{dx^n}\\sin x\\)", "\\(\\sin x\\)", "\\(\\cos x\\)", "\\(-\\sin x\\)", "\\(-\\cos x\\)", "\\(\\sin x\\)"],
    ["\\(\\frac{d^n}{dx^n}\\cos x\\)", "\\(\\cos x\\)", "\\(-\\sin x\\)", "\\(-\\cos x\\)", "\\(\\sin x\\)", "\\(\\cos x\\)"],
  ])}
  ${plane({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.cos, color: "violet" }, { f: (x) => -Math.sin(x), color: "blue" }], step: { x: 1, y: 0.5 } }, "y = cos x (violet) et sa dérivée y = −sin x (bleu) : là où le cosinus décroît, −sin x est négatif.")}
  ${keyIdea(S`\(\dfrac{d}{dx}\sin x=\cos x\), \(\dfrac{d}{dx}\cos x=-\sin x\) (en radians). Pour les dérivées d'ordre supérieur, divise \(n\) par 4 : le reste indique où tu te trouves dans le cycle.`)}`),

  section("📌 Explorer", S`<p>Choisis le sinus ou le cosinus et le nombre de dérivées \(n\). La courbe grise est la fonction de départ; la courbe colorée est sa dérivée \(n\)-ième. Essaie \(n=4\) et \(n=8\) : que remarques-tu ?</p>`),

  widget("derivativeCycle", { init: { start: 1, n: 1, x: 1 } }),

  section("📌 Combiner avec les autres règles", S`
  <p>Le sinus et le cosinus se comportent comme toute autre fonction dérivable : les constantes restent en facteur, les sommes se dérivent terme à terme, les produits demandent la règle du produit et les quotients, la règle du quotient. Simplifie à l'aide d'identités comme \(\sin^2x+\cos^2x=1\).</p>
  ${watchOut([
    "(cos x)′ = −sin x : oublier le signe moins est l'erreur la plus fréquente.",
    "En radians seulement — ces règles sont fausses en degrés.",
    "(x sin x)′ demande la règle du produit : sin x + x cos x, et non cos x.",
    "sin² x signifie (sin x)²; sa dérivée utilise la règle de dérivation en chaîne ou la règle du produit (leçon suivante).",
    "Évalue les valeurs trigonométriques exactes quand c'est possible : cos(π/3) = ½.",
  ])}`),

  examples([
    ["Une somme", S`Dérive \(y=3\sin x-2\cos x\).`,
      [S`\(y'=3\cos x-2(-\sin x)\).`],
      S`\(y'=3\cos x+2\sin x\)`],
    ["Une tangente", S`Trouve la tangente à \(y=\sin x\) en \(x=\frac\pi3\).`,
      [S`Point \(\left(\frac\pi3,\frac{\sqrt3}2\right)\); pente \(\cos\frac\pi3=\frac12\).`, S`\(y-\frac{\sqrt3}2=\frac12\left(x-\frac\pi3\right)\).`],
      S`\(y=\frac12x+\frac{\sqrt3}{2}-\frac{\pi}{6}\approx0.5x+0.342\)`,
      plane({ view: { xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 1.6 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => 0.5 * x + Math.sqrt(3) / 2 - PI / 6, color: "green" }], points: [{ x: PI / 3, y: Math.sqrt(3) / 2, label: "(π/3, 0.87)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["Un produit", S`Dérive \(y=x^2\sin x\).`,
      [S`Règle du produit : \(2x\cdot\sin x+x^2\cdot\cos x\).`],
      S`\(y'=2x\sin x+x^2\cos x\)`],
    ["La dérivée de tan x", S`Applique la règle du quotient à \(\tan x=\frac{\sin x}{\cos x}\).`,
      [S`\(\frac{\cos x\cdot\cos x-\sin x\cdot(-\sin x)}{\cos^2x}=\frac{\cos^2x+\sin^2x}{\cos^2x}\).`, S`\(=\frac1{\cos^2x}=\sec^2x\).`],
      S`\(\frac{d}{dx}\tan x=\sec^2x\), toujours positive : tan x est croissante sur chaque branche`,
      plane({ view: { xmin: -4.6, xmax: 4.6, ymin: -4, ymax: 4 }, curves: [{ f: Math.tan, a: -4.6, b: -PI / 2 - 0.05, color: "violet" }, { f: Math.tan, a: -PI / 2 + 0.05, b: PI / 2 - 0.05, color: "violet" }, { f: Math.tan, a: PI / 2 + 0.05, b: 4.6, color: "violet" }], vlines: [{ x: -PI / 2, color: "red", dash: true }, { x: PI / 2, color: "red", dash: true }], step: { x: 1, y: 1 } })],
    ["Une dérivée d'ordre élevé", S`Trouve \(\dfrac{d^{10}}{dx^{10}}\cos x\).`,
      [S`\(10=4\cdot2+2\) : deux étapes dans le cycle à partir de \(\cos x\).`, S`\(\cos x\to-\sin x\to-\cos x\).`],
      S`\(-\cos x\)`],
  ]),

  practice([
    q("dérivée", S`Pour \(f(x)=5\cos x\), trouve \(f'\!\left(\frac\pi2\right)\).`, num(-5),
      "f′ = −5 sin x.", [S`\(-5\sin\frac\pi2\).`], S`\(-5\)`),
    q("évaluation", S`Pour \(y=\sin x+x\), trouve \(y'(\pi)\).`, num(0),
      "y′ = cos x + 1.", [S`\(-1+1\).`], S`\(0\)`),
    q("produit", S`Pour \(f(x)=x\cos x\), trouve \(f'(0)\).`, num(1),
      "cos x − x sin x.", [S`\(1-0\).`], S`\(1\)`),
    q("dérivée seconde", S`Pour \(y=\sin x\), trouve \(y''\!\left(\frac\pi6\right)\).`, num(-0.5, 0.0001),
      "y″ = −sin x.", [S`\(-\frac12\).`], S`\(-0.5\)`),
    q("règle", S`Laquelle est \(\frac{d}{dx}\cos x\) ?`, choice([S`\(-\sin x\)`, S`\(\sin x\)`, S`\(-\cos x\)`, S`\(\cos x\)`], 0),
      "Le cosinus décroît juste après 0.", ["La pente en π/2 est −1."], S`\(-\sin x\)`),
  ]),

  ...hard([
    ["Tangentes horizontales", S`Trouve les points de \(y=x+2\cos x\), \(0\le x\le2\pi\), où la tangente est horizontale.`,
      [S`\(y'=1-2\sin x=0\Rightarrow\sin x=\frac12\).`, S`\(x=\frac\pi6\) ou \(\frac{5\pi}6\).`, S`\(y\left(\frac\pi6\right)=\frac\pi6+\sqrt3\approx2.26\); \(y\left(\frac{5\pi}6\right)=\frac{5\pi}6-\sqrt3\approx0.89\).`],
      S`\(\left(\frac\pi6,2.26\right)\) (maximum relatif) et \(\left(\frac{5\pi}6,0.89\right)\) (minimum relatif)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x + 2 * Math.cos(x), a: 0, b: 2 * PI, color: "violet" }], points: [{ x: PI / 6, y: PI / 6 + Math.sqrt(3), label: "max", color: "red" }, { x: (5 * PI) / 6, y: (5 * PI) / 6 - Math.sqrt(3), label: "min", color: "blue" }], step: { x: 0.5, y: 1 } })],
    ["La dérivée de sec x", S`Montre que \(\frac{d}{dx}\sec x=\sec x\tan x\), puis trouve la pente de \(y=\sec x\) en \(x=\frac\pi4\).`,
      [S`\(\sec x=\frac1{\cos x}\) : règle du quotient \(\frac{0\cdot\cos x-1\cdot(-\sin x)}{\cos^2x}=\frac{\sin x}{\cos^2x}=\frac1{\cos x}\cdot\frac{\sin x}{\cos x}\).`, S`En \(\frac\pi4\) : \(\sec\frac\pi4\tan\frac\pi4=\sqrt2\cdot1\).`],
      S`\(\sec x\tan x\); pente \(\sqrt2\approx1.414\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: 0, ymax: 4 }, curves: [{ f: (x) => 1 / Math.cos(x), a: -1.3, b: 1.3, color: "violet" }, { f: (x) => Math.SQRT2 + Math.SQRT2 * (x - PI / 4), a: 0.2, b: 1.4, color: "green" }], points: [{ x: PI / 4, y: Math.SQRT2, label: "(π/4, √2)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ], [
    q("difficile", S`Pour \(f(x)=\sin x\cos x\), trouve \(f'\!\left(\frac\pi4\right)\).`, num(0),
      "cos²x − sin²x.", [S`\(\frac12-\frac12\).`], S`\(0\)`),
    q("difficile", S`Trouve la 27e dérivée de \(\sin x\) en \(x=0\).`, num(-1),
      "27 = 4 · 6 + 3 : trois étapes.", [S`\(-\cos0\).`], S`\(-1\)`),
    q("difficile", S`Pour \(g(x)=\dfrac{\sin x}{x}\), trouve \(g'(\pi)\) (4 décimales).`, num(-0.3183, 0.0005),
      "(x cos x − sin x)/x².", [S`\(\frac{-\pi-0}{\pi^2}=-\frac1\pi\).`], S`\(-0.3183\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi y a-t-il un signe moins pour le cosinus ?", "Juste après x = 0, la courbe cosinus commence à descendre à partir de son sommet; ses pentes y sont donc négatives — exactement −sin x."],
      ["Ces règles fonctionnent-elles en degrés ?", "Non. En degrés, chaque dérivée hérite d'un facteur π/180. Le calcul différentiel avec les fonctions trigonométriques utilise toujours les radians."],
      ["Comment trouver une 50e dérivée ?", "50 = 4 · 12 + 2; c'est donc la même chose que la dérivée seconde."],
      ["Pourquoi (tan x)′ est-elle toujours positive ?", "sec² x = 1/cos² x est un carré; tan x est donc croissante sur chaque branche, entre ses asymptotes."],
      ["Et sin(3x) ou sin² x ?", "Ce sont des fonctions composées — la règle de dérivation en chaîne, en 4.3."],
    ],
    summary: [
      "(sin x)′ = cos x; (cos x)′ = −sin x.",
      "Le cycle se répète toutes les 4 dérivées.",
      "(tan x)′ = sec² x.",
      "Les règles du produit et du quotient s'appliquent comme d'habitude.",
    ],
    next: "En 4.3, on utilise la règle de dérivation en chaîne pour sin(kx), cos² x et plus encore.",
  }),
];
