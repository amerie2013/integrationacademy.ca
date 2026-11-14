// MHF4U-FR 7.2 — Résolution d'équations exponentielles : choisir une méthode, isoler la puissance,
// bases différentes de chaque côté, équations de forme quadratique (rejeter les racines impossibles) et vérifications graphiques.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "7.2 Résolution d'équations exponentielles";
export const ID = lessonId(7, 2);

const S = String.raw;
const L = Math.log10;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Résolution d'équations exponentielles",
    overview: S`En 7.1, chaque équation pouvait se réécrire avec une base commune. La plupart des équations réelles ne le peuvent pas : pour \(5^x=120\), aucune base entière ne convient aux deux membres. Les logarithmes règlent tous les cas. Dans cette leçon, tu construis une stratégie complète : isoler la puissance, prendre le logarithme des deux membres, faire descendre les exposants avec la loi de la puissance, puis résoudre. La leçon traite aussi des équations dont les bases diffèrent de chaque côté et des équations qui sont du second degré déguisées.`,
    goals: [
      "décider s'il faut utiliser une base commune ou les logarithmes;",
      "isoler la puissance avant de prendre les logarithmes;",
      "résoudre des équations dont les bases diffèrent de chaque côté;",
      "résoudre des équations de forme quadratique en rejetant les valeurs impossibles de \\(b^x\\);",
      "vérifier les solutions algébriquement et à l'aide d'un graphique.",
    ],
    curriculum: "A3.2 (résoudre des équations exponentielles à une variable en déterminant une base commune et en utilisant les logarithmes, en reconnaissant que les logarithmes de base 10 sont couramment utilisés)",
    prior: [
      [S`Résous \(2^{x}=2^7\).`, S`\(x=7\).`],
      [S`Réécris \(\log(a^n)\) avec la loi de la puissance.`, S`\(n\log a\).`],
      [S`Factorise \(u^2-7u+12\).`, S`\((u-3)(u-4)\).`],
    ],
    words: [
      ["Prendre le log des deux membres", "appliquer \\(\\log\\) aux deux membres d'une équation (permis car les deux membres sont positifs)", "\\(5^x=120\\Rightarrow x\\log5=\\log120\\)"],
      ["Réponse exacte", "une réponse écrite avec des logarithmes, non arrondie", "\\(x=\\dfrac{\\log120}{\\log5}\\)"],
      ["De forme quadratique", "une équation qui devient du second degré après une substitution", "\\(9^x-5\\cdot3^x+6=0,\\ u=3^x\\)"],
      ["Racine inadmissible", "une valeur de \\(u=b^x\\) nulle ou négative, qu'aucun \\(x\\) ne peut donner", "\\(2^x=-3\\)"],
    ],
  }),

  section("📌 Une stratégie pour toute équation exponentielle", S`
  ${table(["Étape", "Que faire", "Pourquoi"], [
    ["1", "Isoler la puissance \\(b^{(\\ldots)}\\)", "les lois des logarithmes s'appliquent à une seule puissance, pas à une somme"],
    ["2", "Base commune? Égaler les exposants.", "exact, sans calculatrice (7.1)"],
    ["3", "Sinon, prendre le \\(\\log\\) des deux membres", "les deux membres sont positifs et \\(\\log\\) est biunivoque"],
    ["4", "Faire descendre chaque exposant (loi de la puissance)", "l'inconnue n'est plus dans un exposant"],
    ["5", "Résoudre l'équation du premier (ou du second) degré", "algèbre ordinaire"],
    ["6", "Vérifier : estimer, substituer ou tracer", "repère les erreurs et les racines impossibles"],
  ])}
  ${keyIdea(S`Si \(b^x=c\) avec \(c>0\), alors \[x=\frac{\log c}{\log b}.\] Si \(c\le0\), il n'y a <b>aucune solution</b>, car \(b^x>0\) pour toute valeur de \(x\).`)}`),

  widget("ibExpSolve", { init: [3, 20] }),

  section("📌 Équations de forme quadratique", S`
  <p>\(9^x=(3^2)^x=(3^x)^2\). Ainsi, \(9^x-5\cdot3^x+6=0\) est une équation du second degré en \(u=3^x\) : \(u^2-5u+6=0\). Résous pour \(u\), puis résous \(3^x=u\) pour chaque valeur. Une valeur de \(u\) négative ou nulle ne donne aucune solution.</p>
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1.5, ymax: 3 }, curves: [{ f: (x) => 9 ** x - 5 * 3 ** x + 6, color: "violet" }], points: [{ x: L(2) / L(3), y: 0, label: "(0.63, 0)", color: "amber" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: { x: 0.5, y: 0.5 } }, "y = 9ˣ − 5·3ˣ + 6 coupe l'axe des x deux fois : x = log 2/log 3 ≈ 0.63 et x = 1.")}
  ${watchOut([
    "Prends les logarithmes seulement une fois la puissance isolée : log(3·2ˣ + 5) n'est PAS égal à log 3 + x log 2 + log 5.",
    "Fais descendre l'exposant entier, entre parenthèses : log 6ˣ⁺¹ = (x + 1) log 6.",
    "log 120 / log 5 n'est pas égal à log(120/5), ni à log 120 − log 5.",
    "bˣ = 0 et bˣ = −3 n'ont aucune solution; rejette ces valeurs de u.",
    "Garde la forme exacte jusqu'à la dernière étape, puis arrondis une seule fois.",
  ])}`),

  examples([
    ["Choisir la méthode", S`Résous \(5^x=125\) et \(5^x=120\). Explique pourquoi les méthodes diffèrent.`,
      [S`<b>Objectif et question à se poser.</b> L'inconnue est dans un exposant. Demande-toi d'abord : peut-on écrire les deux membres comme puissances de la même base? Si oui, égale les exposants. Sinon, utilise les logarithmes.`,
        S`<b>Première équation.</b> \(125=5\times5\times5=5^3\), donc \(5^x=5^3\). Les deux membres sont des puissances uniques de \(5\), donc \(x=3\) exactement.`,
        S`<b>Deuxième équation.</b> \(5^2=25\) et \(5^3=125\), donc \(120\) n'est pas une puissance entière de \(5\). Une base commune n'aide pas; prends donc le logarithme des deux membres : \(\log5^x=\log120\).`,
        S`<b>Loi de la puissance.</b> L'exposant descend et devient un facteur : \(x\log5=\log120\). Maintenant, \(x\) n'est plus dans un exposant.`,
        S`<b>Diviser par \(\log5\).</b> \(x=\dfrac{\log120}{\log5}\approx\dfrac{2.0792}{0.6990}\approx2.9746\).`,
        S`<b>Vérification par estimation.</b> \(120\) est juste au-dessous de \(125=5^3\), donc \(x\) devrait être juste au-dessous de \(3\) ✓. En substituant, \(5^{2.9746}\approx120.0\) ✓. Le graphique montre les deux solutions côte à côte.`],
      S`\(x=3\); \(x=\dfrac{\log120}{\log5}\approx2.9746\)`,
      plane({ view: { xmin: -1, xmax: 3.5, ymin: -10, ymax: 160 }, curves: [{ f: (x) => 5 ** x, color: "violet" }], lines: [{ m: 0, b: 120, color: "blue", dash: true }], points: [{ x: 3, y: 125, label: "(3, 125)", color: "amber" }, { x: 2.9746, y: 120, label: "(2.97, 120)", color: "blue" }], step: { x: 0.5, y: 20 } })],
    ["Isoler d'abord la puissance", S`Résous \(3(2)^{x-1}+5=50\) au dix-millième près.`,
      [S`<b>Objectif et règle.</b> La loi de la puissance s'applique à une seule puissance. Le logarithme d'une somme ne se sépare pas, donc \(\log\big(3(2)^{x-1}+5\big)\) ne peut pas être simplifié. Il faut d'abord isoler la puissance.`,
        S`<b>Défaire les opérations dans l'ordre inverse.</b> Soustrais \(5\) des deux membres : \(3(2)^{x-1}=45\). Divise par \(3\) : \(2^{x-1}=15\).`,
        S`<b>Y a-t-il une base commune?</b> \(2^3=8\) et \(2^4=16\), donc \(15\) n'est pas une puissance de \(2\). Utilise les logarithmes.`,
        S`<b>Prendre les logarithmes.</b> L'exposant entier descend, entre parenthèses : \((x-1)\log2=\log15\).`,
        S`<b>Résoudre.</b> Divise par \(\log2\) : \(x-1=\dfrac{\log15}{\log2}\approx3.9069\). Ajoute \(1\) : \(x\approx4.9069\).`,
        S`<b>Vérification.</b> \(2^{3.9069}\approx15.0\), donc le membre de gauche vaut \(3(15)+5=50\) ✓. Sur le graphique, la courbe coupe \(y=50\) une seule fois, près de \(x=4.91\) ✓`],
      S`\(x=1+\dfrac{\log15}{\log2}\approx4.9069\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -5, ymax: 70 }, curves: [{ f: (x) => 3 * 2 ** (x - 1) + 5, color: "violet" }], lines: [{ m: 0, b: 50, color: "blue", dash: true }, { m: 0, b: 5, color: "red", dash: true }], points: [{ x: 4.9069, y: 50, label: "(4.91, 50)", color: "amber" }], step: { x: 1, y: 10 } })],
    ["Bases différentes de chaque côté", S`Résous \(6^{x+1}=4^{2x}\).`,
      [S`<b>Objectif et plan.</b> \(6\) et \(4\) ne sont pas des puissances d'un même entier, donc une base commune ne fonctionnera pas. Prendre le logarithme des deux membres fait descendre les deux exposants et laisse une équation du premier degré.`,
        S`<b>Prendre les logarithmes, puis appliquer la loi de la puissance des deux côtés.</b> \((x+1)\log6=2x\log4\). Ici, \(\log6\) et \(\log4\) sont simplement des nombres.`,
        S`<b>Développer la parenthèse.</b> \(x\log6+\log6=2x\log4\).`,
        S`<b>Regrouper les termes en \(x\) d'un même côté.</b> Soustrais \(x\log6\) : \(\log6=2x\log4-x\log6\). Mets \(x\) en évidence : \(\log6=x(2\log4-\log6)\).`,
        S`<b>Diviser.</b> \(x=\dfrac{\log6}{2\log4-\log6}\approx\dfrac{0.77815}{0.42597}\approx1.8268\).`,
        S`<b>Vérification.</b> \(6^{2.8268}\approx158.4\) et \(4^{3.6536}\approx158.4\) ✓. Le graphique montre les courbes qui se coupent à cette hauteur.`],
      S`\(x=\dfrac{\log6}{2\log4-\log6}\approx1.8268\)`,
      plane({ view: { xmin: -1, xmax: 2.5, ymin: -20, ymax: 300 }, curves: [{ f: (x) => 6 ** (x + 1), color: "violet" }, { f: (x) => 4 ** (2 * x), color: "blue" }], points: [{ x: 1.827, y: 158.4, label: "(1.83, 158.4)", color: "amber" }], step: { x: 0.5, y: 50 } })],
    ["De forme quadratique", S`Résous \(9^x-5\cdot3^x+6=0\).`,
      [S`<b>Pourquoi les logarithmes ne marchent pas ici.</b> Le membre de gauche est une somme de trois termes, donc prendre les logarithmes n'aide pas. Cherche plutôt une structure cachée.`,
        S`<b>Repérer le carré.</b> \(9^x=(3^2)^x=(3^x)^2\). L'équation contient donc \(3^x\) et son carré, exactement comme une équation du second degré. Pose \(u=3^x\).`,
        S`<b>Substituer et factoriser.</b> \(u^2-5u+6=0\). Deux nombres dont le produit est \(6\) et la somme \(-5\) sont \(-2\) et \(-3\) : \((u-2)(u-3)=0\), donc \(u=2\) ou \(u=3\).`,
        S`<b>Les deux valeurs sont-elles possibles?</b> \(u=3^x\) doit être positif. \(2\) et \(3\) sont tous deux positifs, donc chacun donne une solution.`,
        S`<b>Substituer à rebours.</b> \(3^x=3\) donne \(x=1\). \(3^x=2\) donne \(x\log3=\log2\), donc \(x=\dfrac{\log2}{\log3}\approx0.6309\).`,
        S`<b>Vérification.</b> \(x=1\) : \(9-15+6=0\) ✓. \(x\approx0.6309\) : ici \(3^x=2\) et \(9^x=4\), donc \(4-10+6=0\) ✓. Le graphique coupe l'axe des \(x\) exactement à ces deux endroits.`],
      S`\(x=1\) ou \(x=\dfrac{\log2}{\log3}\approx0.6309\)`,
      plane({ view: { xmin: -1.5, xmax: 1.6, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 9 ** x - 5 * 3 ** x + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "red", dash: true }], points: [{ x: 0.6309, y: 0, label: "(0.63, 0)", color: "amber" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["Rejeter une racine impossible", S`Résous \(4^x-2^{x+1}-15=0\).`,
      [S`<b>Tout écrire à l'aide de \(2^x\).</b> \(4^x=(2^2)^x=(2^x)^2\) et, selon la loi des exposants, \(2^{x+1}=2^x\cdot2=2\cdot2^x\). Pose \(u=2^x\).`,
        S`<b>Équation du second degré.</b> \(u^2-2u-15=0\). Deux nombres dont le produit est \(-15\) et la somme \(-2\) sont \(-5\) et \(3\) : \((u-5)(u+3)=0\), donc \(u=5\) ou \(u=-3\).`,
        S`<b>Tester chaque valeur.</b> \(u\) représente \(2^x\), et une puissance de \(2\) est positive pour toute valeur de \(x\). Donc \(2^x=-3\) n'a aucune solution, et on rejette \(u=-3\).`,
        S`<b>Résoudre pour la valeur restante.</b> \(2^x=5\) donne \(x\log2=\log5\), donc \(x=\dfrac{\log5}{\log2}\approx2.3219\).`,
        S`<b>Vérification.</b> Si \(2^x=5\), alors \(4^x=25\) et \(2^{x+1}=10\), donc \(25-10-15=0\) ✓.`,
        S`<b>Pourquoi le graphique concorde.</b> Quand \(x\to-\infty\), les deux puissances tendent vers \(0\) et l'expression s'approche de \(-15\), la droite pointillée. La courbe ne coupe l'axe des \(x\) qu'une seule fois.`],
      S`\(x=\dfrac{\log5}{\log2}\approx2.3219\) (une seule solution)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -20, ymax: 30 }, curves: [{ f: (x) => 4 ** x - 2 ** (x + 1) - 15, color: "violet" }], lines: [{ m: 0, b: -15, color: "red", dash: true }], points: [{ x: 2.322, y: 0, label: "(2.32, 0)", color: "amber" }], step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("résoudre", S`Résous \(7^x=60\) au centième près.`, num(L(60) / L(7), 0.01), "Prends le logarithme des deux membres.", [S`\(x=\frac{\log60}{\log7}\approx2.10\).`], S`\(\approx2.10\)`),
    q("isoler", S`Résous \(2\cdot5^{x}-3=47\).`, num(2), "Isole d'abord 5ˣ; cherche ensuite une base commune.", [S`\(2\cdot5^x=50\Rightarrow5^x=25=5^2\).`], S`\(2\)`),
    q("deux bases", S`Résous \(3^{x+2}=7^{x}\) au centième près.`, num(2 * L(3) / (L(7) - L(3)), 0.01), "(x + 2) log 3 = x log 7.", [S`\(x=\frac{2\log3}{\log7-\log3}\approx2.59\).`], S`\(\approx2.59\)`),
    q("aucune solution", S`Quelle équation n'a aucune solution réelle?`, choice(["3ˣ = −9", "3ˣ = 0.5", "3⁻ˣ = 9", "(1/3)ˣ = 9"], 0), "Les puissances d'une base positive sont toujours positives.", [S`\(3^x>0\), donc elle ne peut jamais être égale à \(-9\).`], S`\(3^x=-9\)`),
    q("forme quadratique", S`Résous \(4^x-3\cdot2^x-4=0\).`, num(2), "Pose u = 2ˣ.", [S`\(u^2-3u-4=(u-4)(u+1)=0\); \(u=-1\) est impossible, donc \(2^x=4\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Quand deux populations sont-elles égales?", S`La ville A compte \(500\) habitants et croît de \(8\,\%\) par année; la ville B compte \(800\) habitants et croît de \(3\,\%\) par année. Quand leurs populations sont-elles égales?`,
      [S`<b>Modèles :</b> \(A=500(1.08)^t\), \(B=800(1.03)^t\). Pose \(A=B\).`,
        S`<b>Regrouper les puissances :</b> \(\dfrac{1.08^t}{1.03^t}=\dfrac{800}{500}\Rightarrow\left(\dfrac{1.08}{1.03}\right)^t=1.6\).`,
        S`<b>Prendre les logarithmes :</b> \(t=\dfrac{\log1.6}{\log(1.08/1.03)}\approx\dfrac{0.20412}{0.02059}\approx9.92\) ans.`,
        S`<b>Vérification :</b> \(500(1.08)^{9.92}\approx1072\) et \(800(1.03)^{9.92}\approx1072\) ✓`],
      S`après environ \(9.9\) ans`,
      plane({ view: { xmin: -1, xmax: 16, ymin: 0, ymax: 1800 }, curves: [{ f: (t) => 500 * 1.08 ** t, a: 0, color: "violet" }, { f: (t) => 800 * 1.03 ** t, a: 0, color: "blue" }], points: [{ x: 9.92, y: 1072, label: "(9.92, 1072)", color: "amber" }], step: { x: 2, y: 200 } })],
    ["Un coefficient dominant", S`Résous \(2^{2x+1}-7\cdot2^x+3=0\).`,
      [S`<b>Forme équivalente :</b> \(2^{2x+1}=2\cdot(2^x)^2\). Pose \(u=2^x\).`,
        S`<b>Équation du second degré :</b> \(2u^2-7u+3=0\Rightarrow(2u-1)(u-3)=0\), donc \(u=\frac12\) ou \(u=3\).`,
        S`<b>Substituer à rebours :</b> \(2^x=\frac12=2^{-1}\Rightarrow x=-1\); \(2^x=3\Rightarrow x=\dfrac{\log3}{\log2}\approx1.585\).`,
        S`<b>Vérifier \(x=-1\) :</b> \(2^{-1}-7(0.5)+3=0.5-3.5+3=0\) ✓. <b>Vérifier \(x\approx1.585\) :</b> \(2(9)-21+3=0\) ✓`],
      S`\(x=-1\) ou \(x\approx1.585\)`],
  ], [
    q("difficile", S`Résous \(25^x-6\cdot5^x+5=0\). Entre les deux racines.`, roots(0, 1), "Pose u = 5ˣ.", [S`\((u-1)(u-5)=0\Rightarrow5^x=1\) ou \(5^x=5\).`], S`\(x=0,\ 1\)`),
    q("difficile", S`Quand a-t-on \(1000(1.06)^t=1500(1.025)^t\)? (au centième près)`, num(L(1.5) / L(1.06 / 1.025), 0.01), "(1.06/1.025)ᵗ = 1.5.", [S`\(t=\frac{\log1.5}{\log(1.06/1.025)}\approx12.08\).`], S`\(\approx12.08\)`),
    q("difficile", S`Résous \(5^{2x}=3^{x+4}\) au millième près.`, num(4 * L(3) / (2 * L(5) - L(3)), 0.002), "2x log 5 = (x + 4) log 3.", [S`\(x=\frac{4\log3}{2\log5-\log3}\approx2.073\).`], S`\(\approx2.073\)`),
  ]),

  wrapUp({
    qas: [
      ["Quand dois-je utiliser les logarithmes plutôt qu'une base commune?", "Quand les deux membres ne peuvent pas s'écrire comme puissances d'une même base, par exemple 5ˣ = 120."],
      ["Pourquoi isoler d'abord la puissance?", "Les lois des logarithmes s'appliquent à une seule puissance; le logarithme d'une somme ne se sépare pas."],
      ["Comment traiter 6ˣ⁺¹ = 4²ˣ?", "Prends les logarithmes, fais descendre les deux exposants, regroupe les termes en x et mets x en évidence."],
      ["Comment reconnaître une équation de forme quadratique?", "Cherche b²ˣ = (bˣ)² accompagné de bˣ, puis pose u = bˣ."],
      ["Pourquoi rejeter u = −3?", "bˣ est positif pour toute valeur de x, donc il ne peut jamais valoir −3."],
    ],
    summary: [
      "Isoler, prendre les logarithmes, faire descendre les exposants, résoudre, vérifier.",
      "bˣ = c ⇒ x = log c / log b (c > 0).",
      "Bases différentes : regroupe les termes en x et factorise.",
      "Forme quadratique : u = bˣ; rejette u ≤ 0.",
    ],
    next: "En 7.3, tu ajouteras la loi du produit et la loi du quotient, pour pouvoir combiner des sommes et des différences de logarithmes.",
  }),
];
