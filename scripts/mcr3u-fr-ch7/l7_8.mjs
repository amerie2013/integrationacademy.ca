// MCR3U-FR 7.8 — Révision du chapitre 7 : suites arithmétiques et géométriques, règles de récurrence, récurrences à
// deux termes, séries, triangle de Pascal et développement du binôme. Miroir de ../mcr3u-ch7/l7_8.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.8 Révision du chapitre 7";
export const ID = lessonId(7, 8);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 7",
    overview: S`Cette révision relie les notions du chapitre : suites arithmétiques et géométriques, règles de récurrence et règles explicites, suites construites à partir des deux termes précédents, séries arithmétiques et géométriques, et triangle de Pascal avec le développement du binôme. Les exemples combinent plusieurs habiletés; les exercices et les problèmes de niveau difficile sont du niveau d'un test de chapitre.`,
    goals: [
      "classer une suite et écrire son terme général;",
      "passer d'une règle de récurrence à une règle explicite, et inversement;",
      "travailler avec des suites de type Fibonacci;",
      "choisir et appliquer la bonne formule de série;",
      "développer des binômes et trouver un seul coefficient.",
    ],
    curriculum: "C1 (représenter des suites) et C3 (résoudre des problèmes portant sur des suites et des séries)",
    prior: [
      ["La suite 2, 6, 18, … est-elle arithmétique ou géométrique?", "Géométrique, r = 3."],
      ["Trouve t₁₀ pour 4, 7, 10, …", "31."],
      ["Quelle est la rangée 4 du triangle de Pascal?", "1, 4, 6, 4, 1."],
    ],
    words: [
      ["7.1–7.2", "suites arithmétiques et géométriques", ""],
      ["7.3–7.4", "règles de récurrence; règles à deux termes", ""],
      ["7.5–7.6", "séries arithmétiques et géométriques", ""],
      ["7.7", "triangle de Pascal et binômes", ""],
    ],
  }),

  section("📌 Le chapitre en une page", S`
  ${table(["Sujet", "Fait essentiel"], [["Arithmétique", "\\(t_n=a+(n-1)d\\); \\(S_n=\\frac n2(a+t_n)\\)"], ["Géométrique", "\\(t_n=ar^{n-1}\\); \\(S_n=\\frac{a(r^n-1)}{r-1}\\)"], ["Récurrence", "\\(t_1\\) donné, \\(t_n\\) à partir des termes précédents"], ["Deux termes", "\\(t_n=t_{n-1}+t_{n-2}\\) : quotients → 1.618"], ["Binôme", "la rangée n du triangle de Pascal donne \\((a+b)^n\\)"]])}
  ${keyIdea("Décide d'abord ce que tu as : un seul terme (suite) ou un total (série)? Une différence constante ou une raison constante? Choisis ensuite la formule correspondante, et compte les termes si tu as besoin de n.")}`),

  section("📌 Explore", S`<p>Utilise l'outil d'exploration pour vérifier les suites définies par récurrence dans les exemples et les problèmes ci-dessous.</p>`),

  widget("recursiveLab", { init: [3, 1, 4] }),

  examples([
    ["Classer et écrire", "Classe chaque suite et donne son terme général : (a) 12, 7, 2, −3, … (b) 12, 6, 3, 1.5, …",
      [S`<b>(a) Tester les différences.</b> \(7-12=-5\), \(2-7=-5\), \(-3-2=-5\). La suite est donc arithmétique, avec \(d=-5\).`,
        S`<b>(a) Terme général.</b> \(t_n=12+(n-1)(-5)=17-5n\).`,
        S`<b>(b) Tester les quotients.</b> \(\frac6{12}=\frac36=\frac{1.5}3=\frac12\). La suite est donc géométrique, avec \(r=\frac12\).`,
        S`<b>(b) Terme général.</b> \(t_n=12\left(\frac12\right)^{n-1}\).`,
        S`<b>Vérification.</b> (a) \(t_4=17-20=-3\) ✓. (b) \(t_4=12\cdot\frac18=1.5\) ✓. Le graphique montre une droite et une courbe décroissante.`],
      S`(a) arithmétique, \(t_n=17-5n\); (b) géométrique, \(t_n=12\left(\frac12\right)^{n-1}\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: -10, ymax: 14 }, points: [...[1, 2, 3, 4].map((n) => ({ x: n, y: 17 - 5 * n, color: "blue" })), ...[1, 2, 3, 4].map((n) => ({ x: n, y: 12 * 0.5 ** (n - 1), color: "violet" }))], step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" }, "en bleu : arithmétique; en violet : géométrique")],
    ["Récurrence et formule explicite", S`Une suite a \(t_1=7\) et \(t_n=t_{n-1}-3\). Écris sa règle explicite et trouve le rang du terme −80.`,
      [S`<b>Lire la règle.</b> Soustraire 3 chaque fois signifie que la suite est arithmétique, avec \(a=7\), \(d=-3\).`,
        S`<b>Règle explicite.</b> \(t_n=7+(n-1)(-3)=10-3n\).`,
        S`<b>Trouver le rang.</b> \(10-3n=-80\), donc \(-3n=-90\) et \(n=30\).`,
        S`<b>Vérification.</b> \(10-90=-80\) ✓`],
      S`\(t_n=10-3n\); le 30<sup>e</sup> terme`,
      plane({ view: { xmin: 0, xmax: 33, ymin: -90, ymax: 12 }, lines: [{ m: -3, b: 10, color: "gray", dash: true }], points: [{ x: 1, y: 7, label: "(1, 7)" }, { x: 2, y: 4 }, { x: 3, y: 1 }, { x: 30, y: -80, label: "(30, −80)", color: "amber" }], step: { x: 3, y: 10 }, xlabel: "n", ylabel: "tₙ" })],
    ["Une règle à deux termes", S`\(t_1=4\), \(t_2=-1\), \(t_n=t_{n-1}+t_{n-2}\). Trouve \(t_7\).`,
      [S`<b>Lire la règle.</b> Chaque terme est la somme des deux termes précédents; construis donc la liste terme par terme.`,
        S`<b>Construire.</b> ${tv(["\\(n\\)", "1", "2", "3", "4", "5", "6", "7"], ["\\(t_n\\)", "4", "\\(-1\\)", "3", "2", "5", "7", "12"])}`,
        S`<b>Calculs.</b> \(t_3=-1+4=3\), \(t_4=3+(-1)=2\), \(t_5=2+3=5\), \(t_6=5+2=7\), \(t_7=7+5=12\).`,
        S`<b>Vérification.</b> À rebours : \(t_5=t_7-t_6=12-7=5\) ✓`],
      S`\(t_7=12\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: -2, ymax: 14 }, points: [[1, 4], [2, -1], [3, 3], [4, 2], [5, 5], [6, 7]].map(([x, y]) => ({ x, y })).concat([{ x: 7, y: 12, label: "(7, 12)", color: "amber" }]), step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" })],
    ["Les deux types de séries", "Trouve (a) 6 + 10 + 14 + … + 98 et (b) 6 + 12 + 24 + … + 1536.",
      [S`<b>(a) Type.</b> \(d=4\), arithmétique. Compter : \(n=\frac{98-6}4+1=24\).`,
        S`<b>(a) Somme.</b> \(S_{24}=\frac{24}2(6+98)=12(104)=1248\).`,
        S`<b>(b) Type.</b> \(r=2\), géométrique. Compter : \(6(2)^{n-1}=1536\), donc \(2^{n-1}=256=2^8\) et \(n=9\).`,
        S`<b>(b) Somme.</b> \(S_9=\frac{6(2^9-1)}{2-1}=6(511)=3066\).`,
        S`<b>Comparer.</b> La série géométrique compte beaucoup moins de termes, mais sa somme est plus grande, comme le montre le graphique ✓`],
      "1248 et 3066",
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 3200 }, points: Array.from({ length: 9 }, (_, i) => ({ x: i + 1, y: 6 * (2 ** (i + 1) - 1), color: "violet" })).concat(Array.from({ length: 9 }, (_, i) => ({ x: i + 1, y: (i + 1) * (6 + 2 * i) , color: "blue" }))), step: { x: 1, y: 400 }, xlabel: "n", ylabel: "Sₙ" }, "les sommes partielles géométriques (en violet) dépassent les sommes arithmétiques (en bleu)")],
    ["Un terme d'un binôme", S`Trouve le terme qui contient \(x^3\) dans \((x-2)^6\).`,
      [S`<b>Rangée.</b> Rangée 6 : \(1,6,15,20,15,6,1\).`,
        S`<b>Quel terme?</b> Les puissances de \(x\) sont \(6,5,4,3,\ldots\); le terme en \(x^3\) est donc le quatrième, avec le coefficient 20.`,
        S`<b>L'autre facteur.</b> La somme des puissances est 6; il contient donc \((-2)^3=-8\). Le signe reste avec le 2.`,
        S`<b>Multiplier.</b> \(20\cdot x^3\cdot(-8)=-160x^3\).`,
        S`<b>Vérifier le signe.</b> Une puissance impaire de \(-2\) est négative ✓`],
      S`\(-160x^3\)`,
      plane({ bare: true, view: { xmin: -4, xmax: 4, ymin: -1, ymax: 1 }, points: [1, 6, 15, 20, 15, 6, 1].map((v, k) => ({ x: k - 3, y: 0, label: String(v), color: k === 3 ? "amber" : "blue" })) }, "Rangée 6 : l'élément en ambre appartient au terme en x³.")],
  ]),

  practice([
    q("arithmétique", S`Trouve \(t_{25}\) pour \(-8,-5,-2,\ldots\)`, num(64),
      "a + 24d.", [S`\(-8+72\).`], S`\(64\)`),
    q("géométrique", S`Trouve \(t_7\) pour \(1, -2, 4,\ldots\)`, num(64),
      "(−2)⁶.", [S`\(64\)`], S`\(64\)`),
    q("série arithmétique", S`Trouve \(S_{30}\) pour \(1+4+7+\cdots\)`, num(1335),
      "15(2 + 87).", [S`\(15\cdot89\).`], S`\(1335\)`),
    q("série géométrique", S`Trouve \(S_7\) pour \(1+3+9+\cdots\)`, num(1093),
      "(3⁷ − 1)/2.", [S`\(2186\div2\).`], S`\(1093\)`),
    q("classer", "Classe la suite 1, 3, 6, 10, 15, …", choice(["ni arithmétique ni géométrique", "arithmétique", "géométrique", "de Fibonacci"], 0),
      "Différences 2, 3, 4, 5.", ["Les différences secondes sont constantes."], "ni l'une ni l'autre"),
  ]),

  ...hard([
    ["Une suite arithmétique rencontre une suite géométrique", "Les trois premiers termes d'une suite arithmétique sont 2, 2 + d, 2 + 2d. Si les 1<sup>er</sup>, 2<sup>e</sup> et 5<sup>e</sup> termes forment une suite géométrique et que d ≠ 0, trouve d.",
      [S`\((2+d)^2=2(2+4d)\Rightarrow4+4d+d^2=4+8d\).`, S`\(d^2=4d\Rightarrow d=4\).`],
      S`\(d=4\) : 2, 6, 18 est une suite géométrique`],
    ["Un développement à deux variables", S`Développe \((x^2+2y)^3\).`,
      [S`Rangée 3 : \((x^2)^3+3(x^2)^2(2y)+3(x^2)(2y)^2+(2y)^3\).`],
      S`\(x^6+6x^4y+12x^2y^2+8y^3\)`],
  ], [
    q("difficile", "Combien de termes de 50 + 46 + 42 + … faut-il additionner pour que la somme devienne négative pour la première fois?", num(27),
      "Sₙ = n(52 − 2n) < 0.", [S`\(52-2n<0\Rightarrow n>26\) : pour \(n=26\), la somme vaut exactement 0; il faut donc 27 termes.`], S`\(27\)`),
    q("difficile", S`Une série géométrique a \(a=5\) et \(S_4=200\), avec \(r>0\). Trouve \(r\).`, num(3),
      "5(1 + r + r² + r³) = 200.", [S`\(1+r+r^2+r^3=40\Rightarrow r=3\).`], S`\(3\)`),
    q("difficile", S`Trouve le coefficient de \(x^2\) dans \((1+3x)^5\).`, num(90),
      "Rangée 5, terme 10(3x)².", [S`\(10\cdot9\).`], S`\(90\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est l'erreur la plus fréquente?", "Utiliser le dernier terme au lieu du nombre de termes pour n."],
      ["Comment distinguer une question sur une suite d'une question sur une série?", "« Trouve le 20<sup>e</sup> terme » porte sur une suite; « trouve la somme de 20 termes » porte sur une série."],
      ["Quand dois-je utiliser une règle de récurrence?", "Quand chaque terme dépend naturellement des précédents, comme dans des casse-têtes ou une croissance étape par étape."],
      ["Comment vérifier le développement d'un binôme?", "Dans chaque terme, la somme des exposants est n; remplace x par 1 pour vérifier la somme des coefficients."],
      ["Comment étudier?", "Refais les problèmes de niveau difficile de chaque leçon, puis vérifie à l'aide des outils d'exploration."],
    ],
    summary: [
      "Arithmétique : +d; géométrique : ×r.",
      "Compte les termes avant d'additionner.",
      "Récurrence ↔ explicite.",
      "Rangée n de Pascal ↔ (a + b)ⁿ.",
    ],
    next: "Le chapitre 8 applique les suites et les séries aux mathématiques financières.",
  }),
];
