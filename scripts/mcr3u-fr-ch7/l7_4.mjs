// MCR3U-FR 7.4 — Suites définies par les deux termes précédents : suite de Fibonacci et suites apparentées, remonter
// la suite, quotient de termes consécutifs (nombre d'or), problèmes de dénombrement comme monter un escalier.
// Miroir de ../mcr3u-ch7/l7_4.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.4 Suites définies par les deux termes précédents";
export const ID = lessonId(7, 4);
const S = String.raw;
const fib = (n, a = 1, b = 1, m = 1) => { const v = [a, b]; for (let i = 2; i < n; i++) v.push(v[i - 1] + m * v[i - 2]); return v; };
const F = fib(14);

export const blocks = () => [
  intro({
    icon: "🌻",
    title: "Suites définies par les deux termes précédents",
    overview: S`Dans la suite de Fibonacci 1, 1, 2, 3, 5, 8, 13, …, chaque terme est la somme des deux termes qui le précèdent : \(t_n=t_{n-1}+t_{n-2}\). Les règles de ce genre ont besoin de <strong>deux</strong> termes de départ. Dans cette leçon, tu vas produire de telles suites, les remonter, découvrir que le quotient de deux termes consécutifs se stabilise vers un nombre fixe et utiliser ces règles pour dénombrer des dispositions.`,
    goals: [
      "produire des termes de la suite de Fibonacci et de suites apparentées;",
      "expliquer pourquoi deux termes de départ sont nécessaires;",
      "remonter la suite pour trouver des termes précédents;",
      "étudier le quotient de termes consécutifs;",
      "modéliser des problèmes de dénombrement à l'aide de récurrences à deux termes.",
    ],
    curriculum: "C1.5 (déterminer, par exploration, des régularités récursives dans la suite de Fibonacci, dans des suites apparentées et dans le triangle de Pascal, et représenter ces régularités de diverses façons)",
    prior: [
      ["Continue : 1, 1, 2, 3, 5, …", "8."],
      [S`Évalue \(\frac{1+\sqrt5}2\) au millième près.`, "1.618."],
      ["Si x + 7 = 11, que vaut x?", "4."],
    ],
    words: [
      ["Suite de Fibonacci", "\\(t_1=t_2=1\\), \\(t_n=t_{n-1}+t_{n-2}\\)", ""],
      ["Conditions initiales", "les termes de départ donnés", ""],
      ["Nombre d'or φ", "\\(\\frac{1+\\sqrt5}2\\approx1.618\\)", ""],
      ["Quotient de termes", "\\(\\frac{t_n}{t_{n-1}}\\)", ""],
    ],
  }),

  section("📌 La régularité de Fibonacci", S`
  ${table(["n", ...F.slice(0, 10).map((_, i) => String(i + 1))], [["tₙ", ...F.slice(0, 10).map(String)], ["tₙ ÷ tₙ₋₁", "—", ...F.slice(1, 10).map((v, i) => (v / F[i]).toFixed(3))]])}
  ${plane({ view: { xmin: 1, xmax: 13, ymin: 0.8, ymax: 2.2 }, points: F.slice(1, 12).map((v, i) => ({ x: i + 2, y: v / F[i] })), lines: [{ m: 0, b: (1 + Math.sqrt(5)) / 2, color: "amber", dash: true, label: "1.618…" }], step: { x: 1, y: 0.2 }, xlabel: "n", ylabel: "quotient" }, "les quotients oscillent en se rapprochant du nombre d'or")}
  ${keyIdea(S`Pour toute règle \(t_n=t_{n-1}+t_{n-2}\) dont les termes de départ sont positifs, le quotient \(\frac{t_n}{t_{n-1}}\) se rapproche de \(\varphi=\frac{1+\sqrt5}2\approx1.618\).`)}`),

  section("📌 Explore", S`<p>Modifie les deux termes de départ : les quotients se rapprochent-ils encore de 1.618? Modifie ensuite m dans \(t_n=t_{n-1}+m\,t_{n-2}\).</p>`),

  widget("fibLab", { init: [1, 1] }),

  section("📌 Attention", watchOut([
    "Il faut t₁ et t₂ — un seul terme de départ ne suffit pas.",
    "Note avec soin les deux termes que tu additionnes.",
    "Pour remonter la suite : t_(n−2) = t_n − t_(n−1).",
    "Le quotient se rapproche de φ, mais ne l'égale jamais exactement quand les termes sont des nombres entiers.",
  ])),

  examples([
    ["Termes de Fibonacci", "Trouve t₁₀ dans la suite de Fibonacci.",
      [S`<b>Règle.</b> \(t_1=t_2=1\), et chaque terme suivant est la somme des deux termes qui le précèdent : \(t_n=t_{n-1}+t_{n-2}\).`,
        S`<b>Construire la liste.</b> ${tv(["\\(n\\)", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ["\\(t_n\\)", "1", "1", "2", "3", "5", "8", "13", "21", "34", "55"])}`,
        S`<b>Pourquoi deux valeurs de départ?</b> La règle utilise deux termes précédents; elle ne peut donc pas commencer avec un seul.`,
        S`<b>Vérification.</b> \(t_{10}=t_9+t_8=34+21=55\) ✓`],
      S`\(t_{10}=55\)`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 60 }, points: F.slice(0, 10).map((v, i) => ({ x: i + 1, y: v, label: i === 9 ? "(10, 55)" : undefined, color: i === 9 ? "amber" : "blue" })), step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" })],
    ["D'autres termes de départ", S`Énumère les sept premiers termes de \(t_1=2\), \(t_2=1\), \(t_n=t_{n-1}+t_{n-2}\).`,
      [S`<b>Même règle, nouveau départ.</b> Seules les deux premières valeurs ont changé.`,
        S`<b>Construire.</b> \(t_3=1+2=3\), \(t_4=3+1=4\), \(t_5=4+3=7\), \(t_6=7+4=11\), \(t_7=11+7=18\).`,
        S`<b>Remarquer l'ordre.</b> La liste commence par descendre, de 2 à 1, puis elle croît.`,
        S`<b>Vérification.</b> Chaque terme est la somme des deux termes qui le précèdent : \(18=11+7\) ✓`],
      "2, 1, 3, 4, 7, 11, 18",
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 20 }, points: [[1, 2], [2, 1], [3, 3], [4, 4], [5, 7], [6, 11], [7, 18]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})` })), step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" })],
    ["Quotients", "Calcule les quotients 21 ÷ 13 et 34 ÷ 21 dans la suite de Fibonacci.",
      [S`<b>Premier quotient.</b> \(\frac{21}{13}\approx1.6154\).`,
        S`<b>Deuxième quotient.</b> \(\frac{34}{21}\approx1.6190\).`,
        S`<b>D'autres quotients.</b> ${tv(["quotient", "\\(\\frac21\\)", "\\(\\frac32\\)", "\\(\\frac53\\)", "\\(\\frac85\\)", "\\(\\frac{13}8\\)", "\\(\\frac{21}{13}\\)", "\\(\\frac{34}{21}\\)"], ["valeur", "2", "1.5", "1.667", "1.6", "1.625", "1.6154", "1.6190"])}`,
        S`<b>Régularité.</b> Les valeurs passent au-dessus et au-dessous, et se resserrent autour d'environ \(1.618\), le nombre d'or. Le graphique montre ce zigzag.`],
      "≈ 1.6154 et 1.6190; ils se rapprochent de 1.618",
      plane({ view: { xmin: 2, xmax: 11, ymin: 1.4, ymax: 2.1 }, points: F.slice(1, 10).map((v, i) => ({ x: i + 3, y: F[i + 2] / F[i + 1] })), lines: [{ m: 0, b: 1.618, color: "amber", dash: true }], step: { x: 1, y: 0.1 }, xlabel: "n", ylabel: "quotient" })],
    ["Remonter la suite", S`Une suite suit \(t_n=t_{n-1}+t_{n-2}\) avec \(t_5=7\) et \(t_6=11\). Trouve \(t_3\) et \(t_4\).`,
      [S`<b>Réarranger la règle.</b> \(t_n=t_{n-1}+t_{n-2}\) donne \(t_{n-2}=t_n-t_{n-1}\). On peut donc parcourir la suite à rebours en soustrayant.`,
        S`<b>Trouver \(t_4\).</b> \(t_6=t_5+t_4\), donc \(t_4=11-7=4\).`,
        S`<b>Trouver \(t_3\).</b> \(t_5=t_4+t_3\), donc \(t_3=7-4=3\).`,
        S`<b>Vérifier dans l'autre sens.</b> \(3+4=7\) ✓ et \(4+7=11\) ✓`],
      S`\(t_3=3\), \(t_4=4\)`,
      plane({ view: { xmin: 2, xmax: 7, ymin: 0, ymax: 13 }, points: [{ x: 3, y: 3, label: "(3, 3)", color: "amber" }, { x: 4, y: 4, label: "(4, 4)", color: "amber" }, { x: 5, y: 7, label: "(5, 7)" }, { x: 6, y: 11, label: "(6, 11)" }], step: { x: 1, y: 1 }, xlabel: "n", ylabel: "tₙ" })],
    ["Une autre règle à deux termes", S`Énumère six termes de \(t_1=t_2=1\), \(t_n=t_{n-1}+2t_{n-2}\), et décris les quotients.`,
      [S`<b>Construire.</b> \(t_3=1+2(1)=3\), \(t_4=3+2(1)=5\), \(t_5=5+2(3)=11\), \(t_6=11+2(5)=21\). On double le terme situé deux rangs plus tôt, et non le dernier terme.`,
        S`<b>Quotients.</b> ${tv(["quotient", "\\(\\frac11\\)", "\\(\\frac31\\)", "\\(\\frac53\\)", "\\(\\frac{11}5\\)", "\\(\\frac{21}{11}\\)"], ["valeur", "1", "3", "1.67", "2.2", "1.91"])}`,
        S`<b>Régularité.</b> Les valeurs passent au-dessus et au-dessous de 2, et s'en rapprochent chaque fois.`,
        S`<b>Expliquer.</b> Si le quotient se stabilise à \(x\), la règle donne \(x^2=x+2\), donc \((x-2)(x+1)=0\) et \(x=2\) ✓`],
      "1, 1, 3, 5, 11, 21; quotients → 2",
      plane({ view: { xmin: 1, xmax: 11, ymin: 0.5, ymax: 3.2 }, points: fib(11, 1, 1, 2).slice(1).map((v, i, arr) => ({ x: i + 2, y: v / fib(11, 1, 1, 2)[i] })), lines: [{ m: 0, b: 2, color: "amber", dash: true }], step: { x: 1, y: 0.5 }, xlabel: "n", ylabel: "quotient" })],
  ]),

  practice([
    q("Fibonacci", "Trouve t₁₂ dans la suite de Fibonacci 1, 1, 2, 3, …", num(144),
      "Continue d'additionner.", ["…, 55, 89, 144."], S`\(144\)`),
    q("termes", S`\(t_1=3\), \(t_2=4\), \(t_n=t_{n-1}+t_{n-2}\). Trouve \(t_6\).`, num(29),
      "3, 4, 7, …", [S`\(3,4,7,11,18,29\).`], S`\(29\)`),
    q("autre règle", S`\(t_1=1\), \(t_2=3\), \(t_n=t_{n-1}-t_{n-2}\). Trouve \(t_7\).`, num(1),
      "Soustrais au lieu d'additionner.", [S`\(1,3,2,-1,-3,-2,1\).`], S`\(1\)`),
    q("termes de départ", S`Combien de termes de départ faut-il donner pour \(t_n=t_{n-1}+t_{n-2}\)?`, choice(["2", "1", "3", "aucun"], 0),
      "Chaque terme utilise deux termes précédents.", ["t₃ a besoin de t₁ et de t₂."], "2"),
    q("quotient", "Dans la suite de Fibonacci, trouve t₈ ÷ t₇ au dix-millième près.", num(21 / 13, 0.0001),
      "t₇ = 13, t₈ = 21.", [S`\(21\div13\).`], S`\(\approx1.6154\)`),
  ]),

  ...hard([
    ["Une régularité dans les sommes", "Montre que la somme des 6 premiers nombres de Fibonacci est inférieure de 1 à t₈, et prédis la somme des 10 premiers.",
      [S`\(1+1+2+3+5+8=20=21-1\).`, S`La régularité est \(t_1+\cdots+t_n=t_{n+2}-1\) : la somme des 10 premiers est \(t_{12}-1=143\).`],
      "143"],
    ["Monter un escalier", "Tu montes un escalier une ou deux marches à la fois. Soit W_n le nombre de façons de monter n marches. Explique pourquoi W_n = W_(n−1) + W_(n−2) et trouve W₁₀.",
      [S`Le premier pas couvre 1 marche (il reste alors \(W_{n-1}\) façons) ou 2 marches (il reste alors \(W_{n-2}\) façons).`, S`\(W_1=1\), \(W_2=2\) : 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.`],
      S`\(W_{10}=89\)`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 100 }, points: fib(10, 1, 2).map((v, i) => ({ x: i + 1, y: v })), step: { x: 1, y: 10 }, xlabel: "marches", ylabel: "façons" })],
  ], [
    q("difficile", "De combien de façons peut-on monter 8 marches, une ou deux marches à la fois?", num(34),
      "W₁ = 1, W₂ = 2, puis additionne.", [S`\(1,2,3,5,8,13,21,34\).`], S`\(34\)`),
    q("difficile", S`Une suite suit \(t_n=t_{n-1}+t_{n-2}\) avec \(t_1=2\) et \(t_5=19\). Trouve \(t_2\).`, num(5),
      "Exprime t₅ en fonction de t₁ et de t₂.", [S`\(t_5=2t_1+3t_2=4+3t_2=19\).`], S`\(5\)`),
    q("difficile", S`\(t_1=t_2=1\), \(t_n=2t_{n-1}+3t_{n-2}\). Trouve \(t_5\).`, num(41),
      "Construis la suite terme par terme.", [S`\(1,1,5,13,41\).`], S`\(41\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi deux termes de départ?", "La règle utilise les deux termes précédents; on ne peut donc pas calculer les deux premiers."],
      ["Où trouve-t-on la suite de Fibonacci?", "Dans les spirales de graines et de cônes de pin, dans la ramification des plantes et dans des problèmes de dénombrement."],
      ["Pourquoi les quotients se rapprochent-ils de 1.618?", "Si tₙ ≈ φ·tₙ₋₁ pour les grandes valeurs de n, la règle donne φ² = φ + 1, dont la solution positive est (1 + √5)/2."],
      ["Comment remonter la suite?", "Réarrange la règle : tₙ₋₂ = tₙ − tₙ₋₁."],
      ["Chaque règle à deux termes a-t-elle un quotient limite?", "Beaucoup en ont un; pour tₙ = tₙ₋₁ + m·tₙ₋₂, c'est (1 + √(1 + 4m))/2."],
    ],
    summary: [
      "tₙ = tₙ₋₁ + tₙ₋₂ a besoin de t₁ et de t₂.",
      "Fibonacci : 1, 1, 2, 3, 5, 8, …",
      "Quotients → φ ≈ 1.618.",
      "Dénombrer selon le premier pas donne des règles à deux termes.",
    ],
    next: "En 7.5, on additionne les termes d'une suite arithmétique.",
  }),
];
