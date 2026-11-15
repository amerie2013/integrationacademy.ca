// MCR3U-FR 7.5 — Séries arithmétiques : série ou suite, l'argument des paires, S_n = n(a + t_n)/2 = n[2a + (n − 1)d]/2,
// compter les termes d'abord, trouver n, retrouver les termes à partir de S_n. Miroir de ../mcr3u-ch7/l7_5.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.5 Séries arithmétiques";
export const ID = lessonId(7, 5);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "➕",
    title: "Séries arithmétiques",
    overview: S`Une <strong>série</strong> est la somme des termes d'une suite. Pour additionner rapidement une suite arithmétique, écris-la dans l'ordre, puis à rebours : chaque paire de termes a le même total \(t_1+t_n\), et il y a \(n\) paires; le double de la somme vaut donc \(n(t_1+t_n)\). On obtient \(S_n=\frac n2(t_1+t_n)=\frac n2\left[2a+(n-1)d\right]\). Dans cette leçon, tu vas utiliser ces formules, compter d'abord les termes au besoin et résoudre pour trouver le nombre de termes.`,
    goals: [
      "distinguer une suite d'une série;",
      "expliquer l'argument des paires qui mène à la formule de la somme;",
      "utiliser S_n = n(a + t_n)/2 et S_n = n[2a + (n − 1)d]/2;",
      "trouver le nombre de termes avant de calculer la somme;",
      "résoudre des problèmes, y compris trouver n à partir d'une somme.",
    ],
    curriculum: "C3.3 (déterminer, par exploration à l'aide de divers outils et stratégies, la formule de la somme d'une série arithmétique, et l'appliquer pour calculer la somme d'un nombre donné de termes consécutifs), C3.4 (résoudre des problèmes portant sur des suites et des séries arithmétiques, y compris des problèmes tirés de situations réelles)",
    prior: [
      ["Combien de termes compte la suite 5, 8, 11, …, 62?", "20."],
      ["Combien vaut 1 + 2 + 3 + … + 10?", "55."],
      [S`Résous \(n(2n+1)=465\) pour \(n>0\).`, "n = 15."],
    ],
    words: [
      ["Série", "la somme \\(t_1+t_2+\\cdots+t_n\\)", ""],
      ["Somme partielle \\(S_n\\)", "la somme des n premiers termes", ""],
      ["Série arithmétique", "la somme d'une suite arithmétique", ""],
      ["Paires", "premier + dernier = deuxième + avant-dernier = …", ""],
    ],
  }),

  section("📌 Deux formes de la formule", S`
  ${table(["Utilise", "Quand tu connais"], [["\\(S_n=\\frac n2(t_1+t_n)\\)", "le premier et le dernier terme, et n"], ["\\(S_n=\\frac n2\\left[2a+(n-1)d\\right]\\)", "a, d et n"], ["\\(n=\\frac{t_n-a}d+1\\)", "le premier terme, le dernier et d (compte d'abord les termes)"]])}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 26 }, segs: Array.from({ length: 8 }, (_, i) => ({ pts: [[i + 0.6, 0], [i + 0.6, 2 + 3 * i], [i + 1.4, 2 + 3 * i], [i + 1.4, 0]], color: "blue" })), step: { x: 1, y: 2 }, xlabel: "n", ylabel: "tₙ" }, "2 + 5 + 8 + … + 23 : la somme des barres est 8(2 + 23)/2 = 100")}
  ${keyIdea(S`Moyenne du premier et du dernier terme × nombre de termes. Dans \(1+2+\cdots+100\), il y a 50 paires dont chacune donne 101; la somme est donc 5050.`)}`),

  section("📌 Explore", S`<p>Chaque rangée relie un terme (en bleu) au terme correspondant de l'autre extrémité (en ambre). Modifie a, d et n : toutes les rangées ont toujours la même longueur.</p>`),

  widget("seriesPairs", { init: [2, 3, 8] }),

  section("📌 Attention", watchOut([
    "Compte les termes avant d'utiliser la formule : n est le nombre de termes, et non le dernier terme.",
    "S_n est une somme; t_n est un seul terme.",
    "Quand tu résous pour trouver n, rejette les solutions négatives ou non entières.",
    "Si d est négatif, les termes peuvent devenir négatifs — la formule fonctionne quand même.",
  ])),

  examples([
    ["La somme classique", "Trouve 1 + 2 + 3 + … + 100.",
      [S`<b>L'idée.</b> Écris la somme dans l'ordre, puis à rebours. Chaque colonne donne 101 : \(1+100\), \(2+99\), et ainsi de suite. Il y a 100 colonnes; le double de la somme vaut donc \(100\times101\).`,
        S`<b>Formule.</b> On obtient \(S_n=\frac n2(t_1+t_n)\) : le nombre de termes multiplié par la moyenne du premier et du dernier.`,
        S`<b>Substituer.</b> \(n=100\), \(t_1=1\), \(t_{100}=100\) : \(S_{100}=\frac{100}2(1+100)=50(101)\).`,
        S`<b>Évaluer.</b> \(S_{100}=5050\).`,
        S`<b>Vérifier avec un petit cas.</b> \(1+2+3+4=10\), et \(\frac42(5)=10\) ✓`],
      "5050",
      plane({ view: { xmin: 0, xmax: 110, ymin: 0, ymax: 5500 }, curves: [{ f: (n) => (n * (n + 1)) / 2, a: 0, color: "gray" }], points: [10, 20, 40, 60, 80].map((n) => ({ x: n, y: (n * (n + 1)) / 2 })).concat([{ x: 100, y: 5050, label: "(100, 5050)", color: "amber" }]), step: { x: 10, y: 500 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Utiliser a, d et n", S`Trouve \(S_{20}\) pour \(4+9+14+\cdots\)`,
      [S`<b>Repérer.</b> \(a=4\), \(d=5\), \(n=20\). Le dernier terme n'est pas donné; utilise donc la forme avec \(d\).`,
        S`<b>Formule.</b> \(S_n=\frac n2\left[2a+(n-1)d\right]\).`,
        S`<b>Substituer.</b> \(S_{20}=\frac{20}2\left[2(4)+19(5)\right]=10(8+95)=10(103)\).`,
        S`<b>Évaluer.</b> \(S_{20}=1030\).`,
        S`<b>Vérifier avec l'autre formule.</b> \(t_{20}=4+19(5)=99\), et \(\frac{20}2(4+99)=1030\) ✓`],
      "1030",
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 1200 }, curves: [{ f: (n) => (n / 2) * (8 + (n - 1) * 5), a: 0, color: "gray" }], points: [{ x: 1, y: 4 }, { x: 5, y: 70 }, { x: 10, y: 265 }, { x: 15, y: 585 }, { x: 20, y: 1030, label: "(20, 1030)", color: "amber" }], step: { x: 2, y: 100 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Compter d'abord", "Trouve 7 + 11 + 15 + … + 203.",
      [S`<b>Pourquoi compter?</b> La formule de la somme a besoin de \(n\), qui n'est pas donné.`,
        S`<b>Trouver \(n\).</b> \(t_n=7+(n-1)4=203\), donc \((n-1)4=196\), \(n-1=49\) et \(n=50\).`,
        S`<b>Erreur fréquente.</b> \(\frac{203-7}4=49\) compte les écarts. Le nombre de termes est supérieur de un.`,
        S`<b>Somme.</b> \(S_{50}=\frac{50}2(7+203)=25(210)=5250\).`,
        S`<b>Vérification.</b> Le terme moyen est \(\frac{7+203}2=105\), et \(50\times105=5250\) ✓`],
      "5250",
      plane({ view: { xmin: 0, xmax: 55, ymin: 0, ymax: 220 }, lines: [{ m: 4, b: 3, color: "gray", dash: true }], points: [{ x: 1, y: 7, label: "(1, 7)" }, { x: 2, y: 11 }, { x: 3, y: 15 }, { x: 50, y: 203, label: "(50, 203)", color: "amber" }], step: { x: 5, y: 20 }, xlabel: "n", ylabel: "tₙ" })],
    ["Une pile de bûches", "Des bûches sont empilées : 24 dans la rangée du bas, une de moins dans chaque rangée au-dessus, et 6 dans la rangée du haut. Combien y a-t-il de bûches?",
      [S`<b>Modéliser.</b> Les rangées \(24,23,\ldots,6\) forment une suite arithmétique avec \(d=-1\).`,
        S`<b>Compter les rangées.</b> \(24-6+1=19\). La différence est 18, et on ajoute 1 parce que les deux rangées des extrémités comptent.`,
        S`<b>Somme.</b> \(S_{19}=\frac{19}2(24+6)=\frac{19}2(30)=19(15)\).`,
        S`<b>Évaluer.</b> \(285\).`,
        S`<b>Vérification.</b> La rangée du milieu correspond à la moyenne, soit 15 bûches, et \(19\times15=285\) ✓`],
      "285 bûches",
      plane({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 20 }, segs: Array.from({ length: 19 }, (_, i) => ({ pts: [[i / 2, i + 0.5], [24 - i / 2, i + 0.5]], color: "amber" })), step: { x: 2, y: 2 }, xlabel: "bûches dans la rangée", ylabel: "rangée" })],
    ["Trouver n", "Combien de termes de 3 + 7 + 11 + … faut-il additionner pour obtenir 465?",
      [S`<b>Mise en équation.</b> \(a=3\), \(d=4\), \(S_n=465\), et \(n\) est inconnu.`,
        S`<b>Simplifier la formule.</b> \(\frac n2\left[6+4(n-1)\right]=\frac n2(4n+2)=n(2n+1)\).`,
        S`<b>Équation.</b> \(n(2n+1)=465\), donc \(2n^2+n-465=0\).`,
        S`<b>Factoriser.</b> \((n-15)(2n+31)=0\), donc \(n=15\) ou \(n=-15.5\).`,
        S`<b>Choisir.</b> Un nombre de termes doit être un nombre entier positif, donc \(n=15\).`,
        S`<b>Vérification.</b> \(t_{15}=59\), et \(\frac{15}2(3+59)=465\) ✓`],
      S`\(n=15\)`,
      plane({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 650 }, curves: [{ f: (n) => n * (2 * n + 1), a: 0, color: "violet" }], lines: [{ m: 0, b: 465, color: "amber", dash: true }], points: [{ x: 15, y: 465, label: "(15, 465)", color: "amber" }], step: { x: 2, y: 100 }, xlabel: "n", ylabel: "Sₙ" })],
  ]),

  practice([
    q("somme", S`Trouve \(S_{10}\) pour \(2+5+8+\cdots\)`, num(155),
      "S = n/2[2a + (n − 1)d].", [S`\(5(4+27)\).`], S`\(155\)`),
    q("nombres impairs", "Trouve 1 + 3 + 5 + … + 99.", num(2500),
      "50 termes.", [S`\(\frac{50}2(1+99)\).`], S`\(2500\)`),
    q("d négatif", S`Trouve \(S_{15}\) avec \(a=20\) et \(d=-3\).`, num(-15),
      "Utilise la forme avec a, d et n.", [S`\(7.5(40-42)\).`], S`\(-15\)`),
    q("premier et dernier", "Une série arithmétique compte 25 termes; son premier terme est 6 et son dernier terme est 102. Trouve sa somme.", num(1350),
      "n(a + tₙ)/2.", [S`\(12.5(108)\).`], S`\(1350\)`),
    q("formule", "Quelle formule donne la somme d'une série arithmétique?", choice([S`\(S_n=\frac n2(t_1+t_n)\)`, S`\(S_n=n\,t_n\)`, S`\(S_n=\frac{a(r^n-1)}{r-1}\)`, S`\(S_n=t_1+nd\)`], 0),
      "Terme moyen × nombre de termes.", ["Argument des paires."], S`\(\frac n2(t_1+t_n)\)`),
  ]),

  ...hard([
    ["Des multiples dans un intervalle", "Trouve la somme de tous les multiples de 7 compris entre 100 et 500.",
      [S`Premier 105, dernier 497 : \(n=\frac{497-105}7+1=57\).`, S`\(S=\frac{57}2(105+497)\).`],
      "17 157"],
    ["De la formule de la somme aux termes", S`La somme des n premiers termes d'une série arithmétique est \(S_n=3n^2+2n\). Trouve \(t_1\) et \(d\).`,
      [S`\(t_1=S_1=5\).`, S`\(t_2=S_2-S_1=16-5=11\), donc \(d=6\).`],
      S`\(t_1=5\), \(d=6\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 100 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 3 * n * n + 2 * n, label: `S${n} = ${3 * n * n + 2 * n}` })), step: { x: 1, y: 10 }, xlabel: "n", ylabel: "Sₙ" })],
  ], [
    q("difficile", "Combien de termes de 5 + 9 + 13 + … donnent une somme de 860?", num(20),
      "n(2n + 3) = 860.", [S`\(2n^2+3n-860=0\Rightarrow(n-20)(2n+43)=0\).`], S`\(20\)`),
    q("difficile", "Un théâtre compte 24 rangées : 18 sièges dans la première rangée et 2 de plus dans chaque rangée suivante. Combien y a-t-il de sièges en tout?", num(984),
      "S = n/2[2a + (n − 1)d].", [S`\(12(36+46)\).`], S`\(984\)`),
    q("difficile", S`Pour une série arithmétique, \(S_n=2n^2-n\). Trouve \(t_{10}\).`, num(37),
      "t₁₀ = S₁₀ − S₉.", [S`\(190-153\).`], S`\(37\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre une suite et une série?", "Une suite énumère des termes; une série les additionne."],
      ["Pourquoi l'argument des paires fonctionne-t-il?", "En avançant d'un rang vers l'intérieur à chaque extrémité, on ajoute d à un terme et on soustrait d de l'autre; le total de la paire reste donc le même."],
      ["Quelle formule dois-je utiliser?", "Utilise n(a + tₙ)/2 si tu connais le dernier terme; sinon, n[2a + (n − 1)d]/2."],
      ["Comment trouver n à partir d'une somme?", "Substitue dans la formule et résous l'équation du second degré; garde la racine entière positive."],
      ["Puis-je obtenir tₙ à partir de Sₙ?", "Oui : tₙ = Sₙ − Sₙ₋₁."],
    ],
    summary: [
      "Sₙ = n(t₁ + tₙ)/2.",
      "Sₙ = n[2a + (n − 1)d]/2.",
      "Compte d'abord les termes : n = (tₙ − a)/d + 1.",
      "tₙ = Sₙ − Sₙ₋₁.",
    ],
    next: "En 7.6, on additionne les termes d'une suite géométrique.",
  }),
];
