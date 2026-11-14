// MCV4U-FR 1.2 — Taux de variation à partir d'équations : le quotient de différence (f(a + h) − f(a))/h, tables avec et
// sans simplification, taux instantanés exacts pour des fonctions polynomiales, rationnelles et racines, et tangentes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "1.2 Taux de variation à partir d'équations";
export const ID = lessonId(1, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Taux de variation à partir d'équations",
    overview: S`Quand une fonction a une équation, la pente de la sécante de \(x=a\) à \(x=a+h\) peut s'écrire comme une seule expression, le <strong>quotient de différence</strong> \(\dfrac{f(a+h)-f(a)}{h}\). En remplaçant \(h\) par de petites valeurs, on estime le taux instantané; mais si tu <em>simplifies</em> d'abord l'expression, de sorte que \(h\) disparaisse du dénominateur, tu peux faire tendre \(h\) vers 0 et obtenir la valeur exacte. C'est l'algèbre qui se cache derrière chaque dérivée du cours.`,
    goals: [
      "écrire le quotient de différence d'une fonction en x = a;",
      "estimer des taux instantanés en remplaçant h par de petites valeurs (sans simplifier);",
      "simplifier le quotient de différence et faire tendre h vers 0 pour obtenir le taux exact;",
      "traiter des fonctions polynomiales, rationnelles et racines carrées;",
      "écrire l'équation d'une tangente.",
    ],
    curriculum: "A1.3, A1.5 (relier le taux moyen sur [a, a + h] à (f(a + h) − f(a))/h et le taux instantané à sa limite), A1.6 (comparer le calcul du taux instantané avec et sans simplification avant de remplacer h par des valeurs qui tendent vers 0)",
    prior: [
      [S`Développe \((2+h)^2\).`, S`\(4+4h+h^2\).`],
      [S`Simplifie \(\frac{6h+h^2}{h}\) pour \(h\ne0\).`, S`\(6+h\).`],
      [S`Rationalise \(\frac{1}{\sqrt5+2}\).`, S`\(\sqrt5-2\).`],
    ],
    words: [
      ["Quotient de différence (taux d'accroissement)", "\\(\\frac{f(a+h)-f(a)}{h}\\)", "pente de la sécante de a à a + h"],
      ["h", "la variation horizontale de la sécante; peut être positive ou négative", ""],
      ["Simplifier d'abord", "éliminer le facteur h avant de faire tendre h vers 0", ""],
      ["Tangente", "\\(y-f(a)=m(x-a)\\), où m est le taux instantané", ""],
    ],
  }),

  section("📌 Le quotient de différence", S`
  ${plane({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 14 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 1 + 3 * (x - 1), color: "amber" }, { f: (x) => 1 + 2 * (x - 1), color: "green" }], points: [{ x: 1, y: 1, label: "(a, f(a))", color: "red" }, { x: 2, y: 4, label: "(a + h, f(a + h))", color: "amber" }], step: { x: 0.5, y: 2 } }, "y = x², a = 1, h = 1 : la sécante a une pente de (4 − 1)/1 = 3 = 2a + h; quand h → 0, elle s'approche de la pente de la tangente, 2.")}
  ${table(["h", "1", "0.1", "0.01", "0.001", "simplifié : 2 + h"], [
    ["(f(1 + h) − f(1))/h pour f(x) = x²", "3", "2.1", "2.01", "2.001", "→ 2 quand h → 0"],
  ])}
  ${keyIdea(S`Sans simplifier, tu peux seulement remplacer \(h\) par des valeurs \(h\ne0\) et observer une régularité. Après la simplification, \(h\) ne divise plus rien; poser \(h=0\) donne alors le taux instantané exact : \(\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}\).`)}`),

  section("📌 Explore", S`<p>Choisis une fonction, un point \(a\) et une variation horizontale \(h\). La sécante orange a une pente égale au quotient de différence; la table montre sa valeur des deux côtés quand \(h\) diminue.</p>`),

  widget("differenceQuotient", { init: { fn: "cube", a: 1, h: 0.8 } }),

  section("📌 Outils algébriques", S`
  <p>Polynômes : développe \(f(a+h)\), soustrais, puis mets \(h\) en évidence. Fonctions rationnelles : réduis au même dénominateur pour obtenir une seule fraction. Racines carrées : multiplie par le conjugué.</p>
  ${watchOut([
    "f(a + h) veut dire remplacer x par a + h partout où x apparaît — et non f(a) + h.",
    "Soustrais TOUT f(a) : utilise des parenthèses.",
    "N'élimine h qu'après qu'il est devenu un facteur de chaque terme du numérateur.",
    "Tu ne peux pas poser h = 0 avant de simplifier : 0/0 est non défini.",
    "La tangente a aussi besoin d'un point : (a, f(a)).",
  ])}`),

  examples([
    ["Une fonction du second degré", S`Trouve le taux de variation instantané de \(f(x)=3x^2-x\) en \(x=2\).`,
      [S`\(f(2+h)=3(4+4h+h^2)-(2+h)=10+11h+3h^2\); \(f(2)=10\).`, S`\(\frac{11h+3h^2}{h}=11+3h\to11\).`],
      S`\(11\)`],
    ["Avec et sans simplification", S`Pour \(f(x)=x^3\) en \(a=1\), calcule le quotient pour \(h=0.1, 0.01, 0.001\), puis simplifie-le.`,
      [S`\(h=0.1\) : \(\frac{1.331-1}{0.1}=3.31\); \(h=0.01\) : \(3.0301\); \(h=0.001\) : \(3.003001\).`, S`Simplifié : \(\frac{3h+3h^2+h^3}{h}=3+3h+h^2\to3\).`],
      S`les nombres suggèrent 3; la simplification prouve que c'est exactement 3`],
    ["Une vitesse", S`La hauteur d'une balle est \(h(t)=-4.9t^2+20t\) m. Trouve sa vitesse à \(t=2\).`,
      [S`\(h(2+k)=-4.9(4+4k+k^2)+40+20k=20.4+0.4k-4.9k^2\); \(h(2)=20.4\).`, S`\(\frac{0.4k-4.9k^2}{k}=0.4-4.9k\to0.4\).`],
      S`0.4 m/s (elle monte encore, presque au sommet)`,
      plane({ view: { xmin: 0, xmax: 4.3, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 20 * t, a: 0, b: 4.08, color: "violet" }, { f: (t) => 20.4 + 0.4 * (t - 2), color: "green" }], points: [{ x: 2, y: 20.4, label: "(2, 20.4)", color: "red" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Une fonction rationnelle", S`Trouve le taux de variation instantané de \(f(x)=\dfrac2x\) en \(x=1\).`,
      [S`\(\dfrac{\frac2{1+h}-2}{h}=\dfrac{2-2(1+h)}{h(1+h)}=\dfrac{-2h}{h(1+h)}=\dfrac{-2}{1+h}\).`, S`Quand \(h\to0\) : \(-2\).`],
      S`\(-2\)`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 6 }, curves: [{ f: (x) => 2 / x, a: 0.34, b: 4, color: "violet" }, { f: (x) => 2 - 2 * (x - 1), color: "green" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Une racine carrée", S`Trouve le taux de variation instantané de \(f(x)=\sqrt x\) en \(x=4\).`,
      [S`\(\dfrac{\sqrt{4+h}-2}{h}\cdot\dfrac{\sqrt{4+h}+2}{\sqrt{4+h}+2}=\dfrac{(4+h)-4}{h(\sqrt{4+h}+2)}=\dfrac1{\sqrt{4+h}+2}\).`, S`Quand \(h\to0\) : \(\frac14\).`],
      S`\(\tfrac14\)`],
  ]),

  practice([
    q("limite", S`Pour \(f(x)=x^2\) en \(a=5\), le quotient simplifié est \(10+h\). Quel est le taux instantané?`, num(10),
      "Fais tendre h vers 0.", [S`\(10+0\).`], S`\(10\)`),
    q("affine", S`Quel est le taux de variation instantané de \(f(x)=4x-7\) en \(x=3\)?`, num(4),
      "Une droite a le même taux partout.", [S`\(\frac{4h}{h}=4\).`], S`\(4\)`),
    q("quotient", S`Évalue \(\dfrac{f(1+h)-f(1)}{h}\) pour \(f(x)=x^2+2x\) et \(h=0.1\).`, num(4.1, 0.0001),
      "f(1.1) = 3.41, f(1) = 3.", [S`\(\frac{0.41}{0.1}\).`], S`\(4.1\)`),
    q("cubique", S`Trouve le taux de variation instantané de \(f(x)=x^3\) en \(x=2\).`, num(12),
      "Développe (2 + h)³.", [S`\(\frac{12h+6h^2+h^3}{h}\to12\).`], S`\(12\)`),
    q("tangente", S`Laquelle est la tangente à \(y=x^2\) en \(x=-1\)?`, choice([S`\(y=-2x-1\)`, S`\(y=-2x+1\)`, S`\(y=2x+1\)`, S`\(y=-x\)`], 0),
      "Pente 2a = −2, passant par (−1, 1).", [S`\(y-1=-2(x+1)\).`], S`\(y=-2x-1\)`),
  ]),

  ...hard([
    ["Un point quelconque", S`Pour \(f(x)=x^2-4x\), trouve le taux instantané en \(x=a\). Où la tangente est-elle horizontale, et où sa pente vaut-elle 6?`,
      [S`\(\dfrac{(a+h)^2-4(a+h)-(a^2-4a)}{h}=\dfrac{2ah+h^2-4h}{h}=2a+h-4\to2a-4\).`, S`Horizontale : \(2a-4=0\Rightarrow a=2\), point \((2,-4)\). Pente 6 : \(2a-4=6\Rightarrow a=5\), point \((5,5)\).`],
      S`taux \(2a-4\); horizontale en \((2,-4)\); pente 6 en \((5,5)\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }, { f: () => -4, color: "green" }, { f: (x) => 5 + 6 * (x - 5), color: "amber" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "red" }, { x: 5, y: 5, label: "(5, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Tangente à une courbe rationnelle", S`Trouve l'équation de la tangente à \(f(x)=\dfrac1{x+1}\) en \(x=1\).`,
      [S`\(\dfrac{\frac1{2+h}-\frac12}{h}=\dfrac{2-(2+h)}{2h(2+h)}=\dfrac{-1}{2(2+h)}\to-\dfrac14\).`, S`Point \(\left(1,\tfrac12\right)\) : \(y-\tfrac12=-\tfrac14(x-1)\).`],
      S`\(y=-\tfrac14x+\tfrac34\)`],
  ], [
    q("difficile", S`Trouve le taux de variation instantané de \(f(x)=\sqrt x\) en \(x=9\) (4 décimales).`, num(0.1667, 0.0005),
      "Rationalise; le résultat est 1/(√(9 + h) + 3).", [S`\(\frac16\).`], S`\(0.1667\)`),
    q("difficile", S`Trouve le taux de variation instantané de \(f(x)=\dfrac3x\) en \(x=-1\).`, num(-3),
      "Le quotient se simplifie en −3/(a(a + h)).", [S`\(-\frac{3}{(-1)^2}\).`], S`\(-3\)`),
    q("difficile", S`Pour quelle valeur de x la tangente à \(y=x^2+3x\) a-t-elle une pente de 7?`, num(2),
      "Le taux en a est 2a + 3.", [S`\(2a+3=7\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi simplifier avant de faire tendre h vers 0?", "Avant la simplification, h = 0 donne 0/0. Après avoir éliminé le facteur h, l'expression est définie en h = 0 et donne le taux exact."],
      ["Est-ce que j'obtiens la même réponse avec des tables?", "Les tables suggèrent la valeur (2.1, 2.01, 2.001 → 2) mais ne peuvent pas la prouver; la simplification la prouve."],
      ["h peut-il être négatif?", "Oui — un h négatif donne une sécante vers la gauche. Pour une fonction lisse, les deux côtés devraient s'approcher de la même valeur."],
      ["Comment traiter une √ dans le quotient?", "Multiplie le numérateur et le dénominateur par le conjugué pour que les racines disparaissent du numérateur."],
      ["Et ensuite?", "Les leçons 1.3 et 1.4 rendent « h → 0 » précis à l'aide des limites, et la leçon 1.5 transforme le taux en a en une fonction de x : la dérivée."],
    ],
    summary: [
      "Quotient de différence = pente de la sécante de a à a + h.",
      "Un petit h donne une estimation; la simplification donne le taux exact.",
      "Développe, réduis au même dénominateur ou rationalise.",
      "Tangente : y − f(a) = m(x − a).",
    ],
    next: "la leçon 1.3 étudie les limites.",
  }),
];
