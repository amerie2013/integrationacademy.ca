// MHF4U-FR 1.7 — Révision du chapitre 1 : fonctions puissance, caractéristiques, forme factorisée, transformations
// (notation française y = a(k(x − c))ⁿ + d), taux de variation moyens et instantanés
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.7 Révision du chapitre 1";
export const ID = lessonId(1, 7);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 1 — Fonctions polynomiales",
    overview: S`Cette page rassemble tout le chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, une pratique variée, une liste de vérification de ta préparation et des problèmes de niveau difficile. Fais-la après les leçons 1.1 à 1.6 et reviens à toute leçon où tu bloques.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "analyser un polynôme au complet : degré, comportement à l'infini, zéros, ordres, ordonnée à l'origine, symétrie;",
      "combiner les transformations et la forme factorisée;",
      "calculer et interpréter des taux de variation moyens et instantanés;",
      "vérifier si tu es prêt ou prête pour le test du chapitre.",
    ],
    curriculum: "C1.1–C1.9, D1.1–D1.9 (tout le chapitre)",
    prior: [
      [S`Comportement à l'infini de \(y=-4x^5\)?`, S`Q2 → Q4.`],
      [S`Comportement en un zéro d'ordre 2?`, S`Le graphique rebondit.`],
      [S`Taux moyen de \(x^2\) sur \([2,5]\)?`, S`\(7\).`],
    ],
    words: [
      ["Degré et coefficient dominant", "déterminent le comportement à l'infini", ""],
      ["Ordre d'un zéro", "traverse (1), rebondit (pair), s'aplatit (3)", ""],
      ["Règle de correspondance", "\\((x,y)\\to(\\frac xk+c,\\ ay+d)\\)", ""],
      ["Sécante / tangente", "taux moyen / taux instantané", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["1.1 Fonctions puissance", "la parité de n et le signe de a donnent le comportement à l'infini", "\\(y=-3x^4\\) : descend aux deux extrémités", "\\(3^x\\) n'est pas une fonction puissance"],
    ["1.2 Caractéristiques", "≤ n zéros, ≤ n − 1 points tournants; n-ièmes différences \\(a\\cdot n!\\)", "Δ³ = 12 → a = 2", "pas égaux en x"],
    ["1.3 Forme factorisée", "zéros et ordres; valeurs tests", "\\((x+1)^2(x-2)\\)", "inclure a dans f(0)"],
    ["1.4 Transformations", "\\((x,y)\\to(\\frac xk+c,\\ ay+d)\\)", "\\((2x-6)^3=(2(x-3))^3\\)", "mettre k en évidence d'abord"],
    ["1.5 Taux moyen", "\\(\\frac{f(b)-f(a)}{b-a}\\) = pente de la sécante", "x² sur [1, 4] : 5", "unités; ordre de la soustraction"],
    ["1.6 Taux instantané", "sécantes avec h → 0 → pente de la tangente", "x² en 3 : 6", "taux nul ≠ toujours un maximum"],
  ])),

  section("📌 Explore", S`<p>Utilise l'outil d'exploration pour vérifier tes esquisses dans les exemples et les problèmes de niveau difficile.</p>`),

  widget("factoredPoly", { init: { a: -1, zeros: [[-2, 2], [1, 1], [3, 1]] } }),

  section("📌 Comment analyser n'importe quel polynôme", keyIdea(S`(1) Degré et signe de \(a\) → comportement à l'infini. (2) Zéros et leur ordre → traverse, rebondit ou s'aplatit. (3) Ordonnée à l'origine \(f(0)\). (4) Valeurs tests pour les signes. (5) Vérifie la symétrie si toutes les puissances sont paires ou toutes impaires. (6) Pour un taux : deux points → sécante (moyen); intervalle de plus en plus petit → tangente (instantané).`)),

  examples([
    ["Une analyse complète", S`Analyse \(f(x)=-(x+2)^2(x-1)(x-3)\).`,
      [S`<b>Degré et extrémités.</b> La somme des ordres est 4, avec \(a=-1\). Les deux extrémités descendent donc.`,
        S`<b>Zéros.</b> \(-2\) est d'ordre 2 : le graphique rebondit. \(1\) et \(3\) sont d'ordre 1 : il traverse.`,
        S`<b>Ordonnée à l'origine.</b> \(f(0)=-(4)(-1)(-3)=-12\).`,
        S`<b>Tableau de signes.</b> ${tv(["intervalle", "\\(x\\lt-2\\)", "\\(-2\\lt x\\lt1\\)", "\\(1\\lt x\\lt3\\)", "\\(x>3\\)"], ["\\(x\\) test", "\\(-3\\)", "0", "2", "4"], ["signe de \\(f\\)", "−", "−", "+", "−"])}`,
        S`<b>Vérification.</b> \(f(2)=-(16)(1)(-1)=16>0\) ✓. Le signe reste − en passant par le rebond en \(-2\) ✓`],
      S`descend aux deux extrémités; rebondit en −2; traverse en 1 et en 3; ordonnée à l'origine −12; positive seulement sur \((1,3)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -30, ymax: 30 }, curves: [{ f: (x) => -((x + 2) ** 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "amber" }, { x: 1, y: 0, color: "red" }, { x: 3, y: 0, label: "3", color: "red" }, { x: 0, y: -12, label: "(0, −12)", color: "blue" }], step: { x: 1, y: 10 } })],
    ["Degré et équation à partir d'une table", S`Un polynôme prend les valeurs \(-6, 0, 0, 0, 6\) en \(x=0,1,2,3,4\). Trouve son degré et son équation.`,
      [S`<b>Différences.</b> ${tv(["\\(f\\)", "\\(-6\\)", "0", "0", "0", "6"], ["1<sup>res</sup>", "", "6", "0", "0", "6"], ["2<sup>es</sup>", "", "", "\\(-6\\)", "0", "6"], ["3<sup>es</sup>", "", "", "", "6", "6"])}`,
        S`<b>Degré et \(a\).</b> Les troisièmes différences sont constantes, donc le degré est 3. Alors \(3!\,a=6\), donc \(a=1\).`,
        S`<b>Zéros.</b> La table montre des zéros en 1, 2 et 3, ce qui donne les trois facteurs.`,
        S`<b>Équation.</b> \(f(x)=(x-1)(x-2)(x-3)\).`,
        S`<b>Vérification.</b> \(f(0)=(-1)(-2)(-3)=-6\) ✓ et \(f(4)=(3)(2)(1)=6\) ✓`],
      S`degré 3; \(f(x)=(x-1)(x-2)(x-3)\)`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -7, ymax: 7 }, curves: [{ f: (x) => (x - 1) * (x - 2) * (x - 3), color: "violet" }], points: [[0, -6], [1, 0], [2, 0], [3, 0], [4, 6]].map(([x, y]) => ({ x, y, color: "red" })), step: { x: 1, y: 1 } })],
    ["Transformer, puis trouver les zéros", S`\(g(x)=-2(x-1)^4+32\). Trouve le sommet, l'image et les abscisses à l'origine.`,
      [S`<b>Sommet.</b> D'après la forme \(a(x-c)^4+d\), le sommet est \((1,32)\).`,
        S`<b>Image.</b> \(a\lt0\) et le degré est pair, donc 32 est le maximum : \(y\le32\).`,
        S`<b>Abscisses à l'origine.</b> Pose \(g(x)=0\) : \(2(x-1)^4=32\), donc \((x-1)^4=16\).`,
        S`<b>Résoudre.</b> Une racine quatrième a deux valeurs réelles : \(x-1=\pm2\). Donc \(x=3\) ou \(x=-1\).`,
        S`<b>Vérification.</b> \(g(3)=-2(16)+32=0\) ✓. Elles sont symétriques par rapport à \(x=1\) ✓`],
      S`sommet \((1,32)\); image \(y\le32\); abscisses à l'origine \(-1\) et \(3\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -10, ymax: 36 }, curves: [{ f: (x) => -2 * (x - 1) ** 4 + 32, color: "violet" }], points: [{ x: 1, y: 32, label: "(1, 32)", color: "blue" }, { x: -1, y: 0, label: "−1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 4 } })],
    ["Moyen et instantané", S`Un réservoir se vide de sorte qu'il contient \(V(t)=2(10-t)^2\) litres après \(t\) min (\(0\le t\le10\)). Trouve le taux de vidange moyen pendant les 5 premières minutes et le taux instantané en \(t=5\).`,
      [S`<b>Moyen.</b> \(V(0)=200\) et \(V(5)=50\) : \(\frac{50-200}{5}=-30\) L/min.`,
        S`<b>Instantané.</b> Estimation centrée, \(h=0.01\) : \(V(5.01)=49.8002\) et \(V(4.99)=50.2002\).`,
        S`<b>Quotient.</b> \(\frac{49.8002-50.2002}{0.02}=-20\) L/min.`,
        S`<b>Interpréter.</b> Les deux sont négatifs, car le volume diminue. Le taux à 5 min est plus petit en valeur absolue que la moyenne sur 5 minutes : la vidange ralentit.`,
        S`<b>Vérification sur le graphique.</b> La tangente en \((5,50)\) est moins abrupte que la sécante à partir de \((0,200)\) ✓`],
      S`moyen \(-30\) L/min; instantané \(-20\) L/min (la vidange ralentit)`,
      plane({ view: { xmin: -0.5, xmax: 10.5, ymin: -10, ymax: 210 }, curves: [{ f: (t) => 2 * (10 - t) ** 2, a: 0, b: 10, color: "blue" }], lines: [{ m: -30, b: 200, color: "amber", label: "sécante" }, { m: -20, b: 150, color: "green", label: "tangente" }], points: [{ x: 0, y: 200, label: "(0, 200)" }, { x: 5, y: 50, label: "(5, 50)" }], xlabel: "t (min)", ylabel: "V (L)", step: { x: 1, y: 20 } })],
    ["Paire ou impaire d'après un graphique", S`Un polynôme est symétrique par rapport à l'origine, est de degré 3, passe par \((1,-3)\) et a des zéros en \(0\) et en \(\pm2\). Trouve son équation.`,
      [S`<b>Facteurs.</b> Trois zéros et un degré 3 : \(f(x)=ax(x-2)(x+2)\).`,
        S`<b>Utiliser le point.</b> \(f(1)=a(1)(-1)(3)=-3a=-3\), donc \(a=1\).`,
        S`<b>Développer.</b> \(f(x)=x(x^2-4)=x^3-4x\).`,
        S`<b>Vérifier la symétrie.</b> \(f(-x)=-x^3+4x=-f(x)\) : impaire ✓. Donc \((-1,3)\) est aussi sur le graphique ✓`],
      S`\(f(x)=x(x-2)(x+2)=x^3-4x\)`,
      plane({ view: { xmin: -3.5, xmax: 3.5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }], points: [{ x: 1, y: -3, label: "(1, −3)", color: "amber" }, { x: -1, y: 3, label: "(−1, 3)" }, { x: 2, y: 0, label: "2" }, { x: -2, y: 0, label: "−2" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("comportement à l'infini", S`Qu'est-ce qui décrit \(y=-2x^6+x^3\)?`, choice(["descend aux deux extrémités", "monte aux deux extrémités", "Q3 → Q1", "Q2 → Q4"], 0),
      "Terme dominant −2x⁶.", ["Degré pair, a < 0."], "descend aux deux extrémités"),
    q("différences", S`Une fonction cubique a des troisièmes différences de \(-18\) (pas de 1 en x). Trouve \(a\).`, num(-3),
      "6a.", [S`\(-18\div6\).`], S`\(-3\)`),
    q("zéros", S`Trouve les zéros de \(f(x)=x(x-3)^2(x+4)\).`, roots(0, 3, -4),
      "Chaque facteur.", [S`\(x=0\), \(x=3\), \(x=-4\).`], S`\(0, 3, -4\)`),
    q("transformation", S`Pour \(y=(3(x+1))^3-2\), quelle est l'abscisse de l'image de \((3,27)\)?`, num(0),
      "x/k + c.", [S`\(\frac33-1=0\).`], S`\(0\)`),
    q("taux moyen", S`Trouve le taux de variation moyen de \(f(x)=x^3-x\) sur \([0,2]\).`, num(3),
      "(f(2) − f(0)) ÷ 2.", [S`\(\frac{6-0}{2}=3\).`], S`\(3\)`),
  ]),

  section("📌 Suis-je prêt ou prête pour le test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "Je peux décrire le comportement à l'infini, la symétrie, le domaine et l'image des fonctions puissance."],
      ["1.2", "Je peux utiliser le degré, les points tournants, les zéros et les différences finies pour décrire un polynôme."],
      ["1.3", "Je peux esquisser à partir de la forme factorisée et écrire des équations à partir des zéros et d'un point."],
      ["1.4", "Je peux appliquer y = a(k(x − c))ⁿ + d à x³ et à x⁴."],
      ["1.5", "Je peux calculer et interpréter des taux de variation moyens."],
      ["1.6", "Je peux estimer des taux de variation instantanés à l'aide de sécantes et de tangentes."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Une famille qui convient", S`Trouve l'équation de la fonction quartique ayant les zéros \(-1\) (ordre 2) et \(2\) (ordre 2) et dont l'ordonnée à l'origine est \(-8\). Existe-t-il une telle fonction avec une ordonnée à l'origine de \(+8\) et les mêmes ordres? Explique.`,
      [S`\(f(x)=a(x+1)^2(x-2)^2\); \(f(0)=a(1)(4)=4a=-8\Rightarrow a=-2\).`, S`Pour \(+8\) : \(a=2\), ce qui convient aussi — c'est la réflexion par rapport à l'axe des x.`],
      S`\(f(x)=-2(x+1)^2(x-2)^2\); oui, \(f(x)=2(x+1)^2(x-2)^2\)`,
      plane({ view: { xmin: -2.5, xmax: 3.5, ymin: -14, ymax: 14 }, curves: [{ f: (x) => -2 * (x + 1) ** 2 * (x - 2) ** 2, color: "red" }, { f: (x) => 2 * (x + 1) ** 2 * (x - 2) ** 2, color: "blue" }], points: [{ x: 0, y: -8, label: "(0, −8)" }, { x: 0, y: 8, label: "(0, 8)" }], step: { x: 1, y: 2 } })],
    ["Quand le taux est-il nul?", S`Pour \(h(t)=-5t^2+30t+2\), trouve le moment où le taux de variation instantané est 0, et explique ce que cela signifie.`,
      [S`Le taux moyen sur \([a,a+h]\) est \(-10a-5h+30\), qui s'approche de \(-10a+30\) quand \(h\to0\).`, S`\(-10a+30=0\Rightarrow a=3\). En \(t=3\), \(h=47\).`],
      S`en \(t=3\) s : la balle est à son point le plus haut, 47 m`],
  ], [
    q("difficile", S`Une fonction cubique a pour zéros \(-2\), \(1\), \(4\) et passe par \((2,-16)\). Trouve \(a\).`, num(2),
      "y = a(x + 2)(x − 1)(x − 4).", [S`\(a(4)(1)(-2)=-8a=-16\).`], S`\(2\)`),
    q("difficile", S`Trouve le taux de variation instantané de \(f(x)=2x^2-3x\) en \(x=1\).`, num(1, 0.01),
      "Le taux en a est 4a − 3.", [S`\(4(1)-3=1\).`], S`\(1\)`),
    q("difficile", S`Combien de points tournants \(f(x)=x^4-2x^2\) peut-elle avoir, et combien en a-t-elle?`, num(3),
      "Factorise : x²(x² − 2); esquisse.", [S`Le degré 4 en permet 3; elle a un maximum relatif en 0 et des minimums en \(\pm1\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour ce test?", "Fais la pratique variée et le niveau difficile sans tes notes. Pour chaque erreur, retourne à l'outil d'exploration et aux exercices de la leçon concernée, puis essaie la partie difficile de la fiche d'exercices."],
      ["Quelles sont les erreurs les plus fréquentes?", "Lire (x + 2) comme un zéro égal à 2, oublier a dans l'ordonnée à l'origine, lire c avant d'avoir mis k en évidence, et soustraire dans des ordres différents dans un taux."],
      ["Quelle démarche devrais-je montrer?", "Indique le degré et le coefficient dominant, énumère les zéros avec leur ordre, montre les valeurs tests et écris les taux avec leurs unités."],
      ["Quelle est la façon la plus rapide d'esquisser?", "Les extrémités d'abord, puis les zéros avec leur comportement, puis l'ordonnée à l'origine; relie par une courbe lisse."],
      ["Comment ce chapitre mène-t-il au chapitre 2?", "Le chapitre 2 trouve les zéros de polynômes qui ne sont pas encore factorisés, à l'aide de la division et du théorème des facteurs, et résout des inéquations polynomiales."],
    ],
    summary: [
      "Le comportement à l'infini découle du terme dominant.",
      "Les zéros et leur ordre découlent de la forme factorisée.",
      "(x, y) → (x/k + c, ay + d).",
      "Sécante = taux moyen; tangente = taux instantané.",
    ],
    next: "Fais le test du chapitre 1. Le chapitre 2 résout des équations et des inéquations polynomiales.",
  }),
];
