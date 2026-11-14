// MCV4U-FR 1.3 — Limites : notation, limites numériques et graphiques, limites à gauche et à droite, limites à une
// discontinuité non essentielle, limites infinies, limites à l'infini et limites de suites ((1 + 1/n)^n, rapports de Fibonacci)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "1.3 Limites";
export const ID = lessonId(1, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Limites",
    overview: S`Une <strong>limite</strong> décrit la valeur dont une fonction s'approche quand sa variable s'approche d'un nombre — même si la fonction n'atteint jamais cette valeur, ou n'est pas définie en ce nombre. On écrit \(\displaystyle\lim_{x\to a}f(x)=L\). Les limites peuvent se lire dans des tables et des graphiques, s'étudier d'un côté à la fois, ne pas exister, décrire le comportement près d'une asymptote verticale ou très loin le long de l'axe des x, et décrire vers quoi tend une suite de nombres. C'est l'outil qui transforme les pentes de sécantes en pentes de tangentes.`,
    goals: [
      "lire et estimer des limites à partir de tables et de graphiques;",
      "trouver des limites à gauche et à droite et décider si une limite existe;",
      "évaluer des limites à un trou en factorisant;",
      "décrire des limites infinies et des limites à l'infini;",
      "estimer la limite d'une suite.",
    ],
    curriculum: "A1.4 (reconnaître des exemples graphiques et numériques de limites et expliquer le raisonnement : une fonction qui s'approche d'une asymptote, les rapports de termes consécutifs de la suite de Fibonacci, (1 + 1/n)ⁿ)",
    prior: [
      [S`Factorise \(x^2-9\).`, S`\((x-3)(x+3)\).`],
      [S`Asymptote horizontale de \(\frac{2x+1}{x-3}\)?`, S`\(y=2\).`],
      [S`Combien vaut \(\frac1{0.001}\)?`, S`\(1000\).`],
    ],
    words: [
      ["Limite", "\\(\\lim_{x\\to a}f(x)=L\\) : f(x) devient aussi proche de L qu'on veut pour x proche de a", ""],
      ["Limites à gauche et à droite", "\\(x\\to a^-\\) par la gauche, \\(x\\to a^+\\) par la droite", ""],
      ["N'existe pas", "les deux côtés ne concordent pas, ou f croît sans borne", ""],
      ["Limite à l'infini", "\\(\\lim_{x\\to\\infty}f(x)\\) : valeur à long terme (asymptote horizontale)", ""],
    ],
  }),

  section("📌 Ce que dit une limite", S`
  ${plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x + 3, a: -1, b: 2.97, color: "violet" }, { f: (x) => x + 3, a: 3.03, b: 6, color: "violet" }], points: [{ x: 3, y: 6, label: "limite 6 (trou)", color: "red" }], step: { x: 1, y: 1 } }, "y = (x² − 9)/(x − 3) est égale à x + 3 sauf en x = 3, où elle n'a pas de valeur; la limite quand x → 3 est quand même 6.")}
  ${table(["Situation", "Limite à gauche", "Limite à droite", "Limite"], [
    ["les deux côtés s'approchent de L", "L", "L", "L"],
    ["les côtés s'approchent de valeurs différentes (saut)", "L₁", "L₂", "n'existe pas"],
    ["f croît sans borne (asymptote)", "±∞", "±∞", "n'existe pas (on écrit ∞ pour décrire le comportement)"],
    ["x → ∞", "—", "—", "l'asymptote horizontale, s'il y en a une"],
  ])}
  ${keyIdea(S`\(\displaystyle\lim_{x\to a}f(x)\) existe exactement quand les deux limites (à gauche et à droite) existent et sont égales. La valeur \(f(a)\) elle-même ne compte pas pour la limite — seules les valeurs près de \(a\) comptent.`)}`),

  section("📌 Explore", S`<p>Passe d'un cas à l'autre. Les points rouges s'approchent de \(a\) par la gauche, les points bleus par la droite; la table montre leurs valeurs à mesure qu'ils se rapprochent de \(a\).</p>`),

  widget("limitExplorer", { init: { kase: "jump" } }),

  section("📌 Limites de suites", S`
  <p>Une suite a aussi une limite si ses termes se stabilisent sur une valeur : \(\left(1+\frac1n\right)^n\) augmente vers \(e\approx2.71828\), et les rapports de nombres de Fibonacci consécutifs s'approchent de \(\frac{1+\sqrt5}2\approx1.618\).</p>
  ${watchOut([
    "La limite porte sur les valeurs PRÈS de a, pas EN a : un trou n'empêche pas une limite d'exister.",
    "Vérifie les deux côtés; un seul côté ne donne pas la limite.",
    "∞ n'est pas un nombre : lim = ∞ signifie que la limite n'existe pas parce que f croît sans borne.",
    "Remplacer x par a et obtenir 0/0 veut dire « il reste du travail » — en général, factorise et simplifie.",
    "Une table peut induire en erreur si tu n'utilises qu'un côté ou trop peu de valeurs.",
  ])}`),

  examples([
    ["Un trou", S`Trouve \(\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}\).`,
      [S`La substitution directe donne \(\frac00\).`, S`\(\frac{(x-3)(x+3)}{x-3}=x+3\) pour \(x\ne3\); quand \(x\to3\), \(x+3\to6\).`, S`Table : \(x=2.99\) : \(5.99\); \(x=3.01\) : \(6.01\).`],
      S`\(6\)`],
    ["Limites à gauche et à droite", S`\(f(x)=x^2\) pour \(x\lt2\) et \(f(x)=x+1\) pour \(x\ge2\). Trouve les limites à gauche et à droite en 2. Est-ce que \(\displaystyle\lim_{x\to2}f(x)\) existe?`,
      [S`À gauche : \(x^2\to4\). À droite : \(x+1\to3\).`, S`\(4\ne3\).`],
      S`à gauche 4, à droite 3 : la limite n'existe pas`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, a: -1, b: 1.98, color: "violet" }, { f: (x) => x + 1, a: 2, b: 4, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4) vide", color: "amber", open: true }, { x: 2, y: 3, label: "(2, 3)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Une limite infinie", S`Décris \(\displaystyle\lim_{x\to0}\dfrac1{x^2}\).`,
      [S`\(x=\pm0.1\) : 100; \(x=\pm0.01\) : 10 000. Les valeurs croissent sans borne des deux côtés.`],
      S`\(\lim_{x\to0}\frac1{x^2}=\infty\) : la limite n'existe pas; asymptote verticale \(x=0\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 1 / (x * x), a: -3, b: -0.31, color: "violet" }, { f: (x) => 1 / (x * x), a: 0.31, b: 3, color: "violet" }], step: { x: 1, y: 1 } })],
    ["Une limite à l'infini", S`Trouve \(\displaystyle\lim_{x\to\infty}\dfrac{2x+1}{x-3}\).`,
      [S`Divise par \(x\) : \(\dfrac{2+\frac1x}{1-\frac3x}\to\dfrac{2+0}{1-0}\).`],
      S`\(2\) : l'asymptote horizontale \(y=2\)`,
      plane({ view: { xmin: -6, xmax: 20, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (2 * x + 1) / (x - 3), a: -6, b: 2.3, color: "violet" }, { f: (x) => (2 * x + 1) / (x - 3), a: 3.8, b: 20, color: "violet" }], lines: [{ m: 0, b: 2, color: "red", dash: true }], vlines: [{ x: 3, color: "red", dash: true }], step: { x: 2, y: 2 } })],
    ["La limite d'une suite", S`Estime la limite de \(t_n=\left(1+\frac1n\right)^n\).`,
      [S`\(t_1=2\), \(t_{10}\approx2.5937\), \(t_{100}\approx2.7048\), \(t_{1000}\approx2.7169\), \(t_{10\,000}\approx2.7181\).`],
      S`les termes s'approchent de \(e\approx2.718\)`,
      plane({ view: { xmin: 0, xmax: 21, ymin: 1.8, ymax: 2.9 }, points: Array.from({ length: 20 }, (_, i) => ({ x: i + 1, y: (1 + 1 / (i + 1)) ** (i + 1), color: "blue" })), lines: [{ m: 0, b: Math.E, color: "red", dash: true }], step: { x: 2, y: 0.1 }, xlabel: "n", ylabel: "tₙ" })],
  ]),

  practice([
    q("substituer", S`Trouve \(\displaystyle\lim_{x\to2}(x^2+3x)\).`, num(10),
      "Un polynôme : remplace x par la valeur.", [S`\(4+6\).`], S`\(10\)`),
    q("trou", S`Trouve \(\displaystyle\lim_{x\to-1}\dfrac{x^2-1}{x+1}\).`, num(-2),
      "Factorise et simplifie.", [S`\(x-1\to-2\).`], S`\(-2\)`),
    q("à gauche / à droite", S`Combien vaut \(\displaystyle\lim_{x\to0}\dfrac{|x|}{x}\)?`, choice(["elle n'existe pas", "0", "1", "−1"], 0),
      "La gauche donne −1, la droite donne 1.", ["Les côtés ne concordent pas."], "n'existe pas"),
    q("à l'infini", S`Trouve \(\displaystyle\lim_{x\to\infty}\dfrac5x\).`, num(0),
      "Un dénominateur énorme.", [S`\(\frac5x\to0\).`], S`\(0\)`),
    q("trou", S`Trouve \(\displaystyle\lim_{x\to4}\dfrac{x-4}{x^2-16}\).`, num(0.125, 0.0001),
      "Factorise le dénominateur.", [S`\(\frac1{x+4}\to\frac18\).`], S`\(0.125\)`),
  ]),

  ...hard([
    ["Rapports de Fibonacci", S`La suite de Fibonacci est 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … Estime la limite des rapports \(\frac{t_{n+1}}{t_n}\) et trouve sa valeur exacte.`,
      [S`Rapports : 1, 2, 1.5, 1.667, 1.6, 1.625, 1.615, 1.619, 1.618, …`, S`Si les rapports s'approchent de \(\varphi\), alors \(\frac{t_{n+1}}{t_n}=1+\frac{t_{n-1}}{t_n}\) donne \(\varphi=1+\frac1\varphi\Rightarrow\varphi^2-\varphi-1=0\).`, S`\(\varphi=\frac{1+\sqrt5}2\approx1.618\) (racine positive).`],
      S`\(\dfrac{1+\sqrt5}{2}\approx1.618\)`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0.8, ymax: 2.2 }, points: [1, 2, 1.5, 5 / 3, 1.6, 1.625, 13 / 8, 21 / 13, 34 / 21, 55 / 34].map((y, i) => ({ x: i + 1, y, color: "blue" })), lines: [{ m: 0, b: (1 + Math.sqrt(5)) / 2, color: "red", dash: true }], step: { x: 1, y: 0.2 }, xlabel: "n", ylabel: "rapport" })],
    ["Rationaliser pour trouver une limite", S`Trouve \(\displaystyle\lim_{x\to1}\dfrac{\sqrt x-1}{x-1}\).`,
      [S`La substitution donne \(\frac00\). Multiplie par \(\frac{\sqrt x+1}{\sqrt x+1}\) : \(\dfrac{x-1}{(x-1)(\sqrt x+1)}=\dfrac1{\sqrt x+1}\).`, S`Quand \(x\to1\) : \(\frac12\).`],
      S`\(\tfrac12\)`],
  ], [
    q("difficile", S`Trouve \(\displaystyle\lim_{h\to0}\dfrac{(3+h)^2-9}{h}\).`, num(6),
      "Développe et élimine h.", [S`\(\frac{6h+h^2}{h}=6+h\).`], S`\(6\)`),
    q("difficile", S`Trouve \(\displaystyle\lim_{x\to\infty}\dfrac{3x^2-x}{x^2+4}\).`, num(3),
      "Divise par x².", [S`\(\frac{3-\frac1x}{1+\frac4{x^2}}\to3\).`], S`\(3\)`),
    q("difficile", S`Trouve \(\displaystyle\lim_{x\to9}\dfrac{x-9}{\sqrt x-3}\).`, num(6),
      "x − 9 = (√x − 3)(√x + 3).", [S`\(\sqrt x+3\to6\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["La limite dépend-elle de f(a)?", "Non. La limite décrit les valeurs près de a; f(a) peut être différente ou même ne pas exister."],
      ["Quand une limite n'existe-t-elle pas?", "Quand les limites à gauche et à droite sont différentes, quand f croît sans borne, ou quand f oscille sans se stabiliser."],
      ["Que m'indique 0/0?", "Rien encore — c'est une forme indéterminée. Simplifie (factorise, rationalise) et réessaie."],
      ["Quel est le lien entre les limites à l'infini et les asymptotes?", "Si f(x) → L quand x → ±∞, alors y = L est une asymptote horizontale."],
      ["Pourquoi a-t-on besoin des limites en calcul différentiel?", "La pente de la tangente est la limite des pentes des sécantes quand h → 0 — exactement une limite de la forme 0/0."],
    ],
    summary: [
      "lim x→a f(x) : valeurs près de a, pas en a.",
      "La limite existe ⇔ gauche = droite.",
      "0/0 : factorise ou rationalise.",
      "x → ∞ donne les asymptotes horizontales; les suites peuvent aussi avoir des limites.",
    ],
    next: "la leçon 1.4 relie les limites à la continuité et évalue des limites à l'aide des lois des limites.",
  }),
];
