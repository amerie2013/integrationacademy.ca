// MCR3U-FR 3.3 — Différences finies et modèles du second degré : classer des tables, deuxièmes différences = 2ah², équations à partir de tables et de trois points
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.3 Différences finies et modèles du second degré";
export const ID = lessonId(3, 3);
const S = String.raw;
const pts = (xs, f, color = "violet") => xs.map((x) => ({ x, y: f(x), color }));

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Différences finies et modèles du second degré",
    overview: S`Les données arrivent rarement sous forme d'équation. Elles arrivent sous forme de table : la hauteur à chaque seconde, le nombre de tuiles de chaque figure, la distance d'arrêt à chaque vitesse. Dans cette leçon, tu utiliseras les différences finies pour décider si une table est linéaire, du second degré ou ni l'un ni l'autre, tu trouveras \(a\) à partir des deuxièmes différences et tu construiras l'équation d'une fonction du second degré à partir d'une table ou de trois points.`,
    goals: [
      "calculer les premières et les deuxièmes différences à partir d'une table de valeurs;",
      "décider si une relation est linéaire, du second degré ou ni l'une ni l'autre (par exemple exponentielle);",
      "expliquer pourquoi les deuxièmes différences d'une fonction du second degré sont constantes et égales à \\(2ah^2\\) pour un pas en x de \\(h\\);",
      "déterminer l'équation d'une fonction du second degré à partir d'une table de valeurs;",
      "déterminer l'équation d'une fonction du second degré qui passe par trois points donnés et l'utiliser pour faire des prédictions.",
    ],
    curriculum: "A1.2 (représenter des fonctions du second degré à l'aide de la notation fonctionnelle, à partir d'équations, de tables de valeurs et de graphiques), A2.3 (résoudre des problèmes portant sur des fonctions du second degré tirés de situations réelles)",
    prior: [
      [S`Trouve les différences entre les termes consécutifs de \(5, 9, 13, 17\).`, S`Chaque différence est 4.`],
      [S`Évalue \(2x^2-x+3\) en \(x=-2\).`, S`\(8+2+3=13\).`],
      [S`Résous \(a+b=4\) et \(a-b=10\).`, S`En additionnant : \(2a=14\), donc \(a=7\) et \(b=-3\).`],
    ],
    words: [
      ["Premières différences", "la variation de y entre deux rangées consécutives", "\\(3, 7, 11\\)"],
      ["Deuxièmes différences", "la variation des premières différences", "\\(4, 4\\)"],
      ["Pas en x", "l'écart constant \\(h\\) entre les valeurs de x d'une table", "\\(h=2\\)"],
      ["Rapport constant", "chaque y divisé par le précédent donne le même nombre (exponentielle)", "rapport 3"],
      ["Modèle", "une équation qui correspond aux données et qui permet de prédire", "\\(d=0.006v^2+0.2v\\)"],
    ],
  }),

  section("📌 Les différences révèlent le type", S`
  <p>Écris les valeurs de x à intervalles égaux. Soustrais chaque valeur de y de la suivante pour obtenir les <em>premières différences</em>, puis soustrais celles-ci pour obtenir les <em>deuxièmes différences</em>.</p>
  ${table(["x", "0", "1", "2", "3", "4", "test"], [
    ["linéaire : y = 3x − 1", "−1", "2", "5", "8", "11", "premières différences toutes égales à 3"],
    ["second degré : y = x² − 2x + 2", "2", "1", "2", "5", "10", "premières −1, 1, 3, 5; deuxièmes toutes égales à 2"],
    ["exponentielle : y = 2ˣ", "1", "2", "4", "8", "16", "aucune rangée constante; rapport 2"],
  ])}
  ${plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 17 }, curves: [{ f: (x) => 3 * x - 1, color: "green" }, { f: (x) => x * x - 2 * x + 2, color: "violet" }, { f: (x) => 2 ** x, color: "amber" }], points: [...pts([0, 1, 2, 3, 4], (x) => 3 * x - 1, "green"), ...pts([0, 1, 2, 3, 4], (x) => x * x - 2 * x + 2, "violet"), ...pts([0, 1, 2, 3, 4], (x) => 2 ** x, "amber")], step: { x: 1, y: 2 } }, "Vert : linéaire. Violet : second degré. Ambre : exponentielle")}
  ${keyIdea(S`Premières différences constantes → linéaire. Deuxièmes différences constantes → second degré. Aucune constante, mais un rapport constant → exponentielle. Une table n'est valable que si les valeurs de x augmentent à intervalles égaux.`)}`),

  section("📌 Explore", S`<p>Choisis un type et déplace les curseurs. Observe quelle rangée de la table devient en gras. Change ensuite le pas en x à 2 ou à 0.5 : les deuxièmes différences d'une fonction du second degré restent constantes, mais elles ne valent plus simplement \(2a\).</p>`),

  widget("diffLab", { init: ["quad", 2, -3, 1] }),

  section("📌 Pourquoi la deuxième différence vaut \\(2ah^2\\)", S`
  <p>Pour \(f(x)=ax^2+bx+c\) et un pas en x de \(h\), la première différence en \(x\) est</p>
  <p style="text-align:center">\(f(x+h)-f(x)=a(2xh+h^2)+bh=2ah\,x+(ah^2+bh)\).</p>
  <p>C'est une expression <em>linéaire</em> en \(x\) de pente \(2ah\). Chaque fois que \(x\) augmente de \(h\), elle augmente de \(2ah\cdot h=2ah^2\). Les deuxièmes différences valent donc toutes \(2ah^2\) et, avec \(h=1\), elles valent \(2a\).</p>
  ${plane({ view: { xmin: -0.5, xmax: 8.5, ymin: 0, ymax: 30 }, curves: [{ f: (x) => 0.5 * x * x - x + 3, color: "violet" }], points: pts([0, 2, 4, 6, 8], (x) => 0.5 * x * x - x + 3), segs: [{ pts: [[0, 3], [2, 3], [2, 3]], color: "blue" }, { pts: [[2, 3], [4, 3], [4, 7]], color: "blue" }, { pts: [[4, 7], [6, 7], [6, 15]], color: "blue" }, { pts: [[6, 15], [8, 15], [8, 27]], color: "blue" }], step: { x: 1, y: 3 } }, "Avec un pas en x de 2, les montées sont 0, 4, 8, 12 : elles augmentent de 4 = 2(0.5)(2²) chaque fois")}
  <p><strong>D'une table à une équation.</strong> (1) \(a=\dfrac{\text{deuxième différence}}{2h^2}\). (2) \(c\) est la valeur de y en \(x=0\); si \(x=0\) n'est pas dans la table, prolonge la table vers l'arrière à l'aide des différences. (3) Substitue un autre point pour trouver \(b\).</p>
  ${watchOut([
    "Vérifie que les valeurs de x sont également espacées avant d'examiner les différences.",
    "Soustrais toujours dans le même ordre : suivante moins précédente.",
    "Avec un pas en x de h, a = (deuxième différence)/(2h²), et non (deuxième différence)/2.",
    "Des deuxièmes différences presque constantes (données réelles) suggèrent un modèle du second degré, et non un modèle exact.",
  ])}`),

  examples([
    ["Linéaire, du second degré ou ni l'un ni l'autre?", S`Classe chaque table (x = 0, 1, 2, 3, 4). A : \(5, 8, 11, 14, 17\). B : \(2, 6, 18, 54, 162\). C : \(4, 3, 4, 7, 12\).`,
      [S`<b>Le test.</b> Avec des pas en x égaux : des premières différences constantes signifient une relation linéaire, et des deuxièmes différences constantes, une relation du second degré.`,
        S`<b>Tableau des différences.</b> ${tv(["table", "premières différences", "deuxièmes différences"], ["A", "\\(3,3,3,3\\)", "\\(0,0,0\\)"], ["B", "\\(4,12,36,108\\)", "\\(8,24,72\\)"], ["C", "\\(-1,1,3,5\\)", "\\(2,2,2\\)"])}`,
        S`<b>Table A.</b> Les premières différences sont constantes; A est donc linéaire.`,
        S`<b>Table B.</b> Aucune rangée n'est constante; B n'est donc ni linéaire ni du second degré. Chaque y vaut 3 fois le précédent; c'est donc une relation exponentielle.`,
        S`<b>Table C.</b> Les deuxièmes différences sont constantes; C est donc du second degré.`,
        S`<b>Vérification sur le graphique.</b> Les points de A sont sur une droite, et ceux de C sont sur une parabole ✓`],
      "A linéaire, B exponentielle, C du second degré",
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: 0, ymax: 20 }, curves: [{ f: (x) => (x - 1) ** 2 + 3, color: "violet" }], points: [...pts([0, 1, 2, 3, 4], (x) => (x - 1) ** 2 + 3), ...pts([0, 1, 2, 3, 4], (x) => 3 * x + 5, "green")], step: { x: 1, y: 2 } }, "La table C (violet) est courbe; la table A (vert) est une droite")],
    ["Équation à partir d'une table", S`Trouve l'équation de la fonction du second degré : x = 0, 1, 2, 3, 4 et y = \(-4, -3, 4, 17, 36\).`,
      [S`<b>Différences.</b> ${tv(["\\(y\\)", "\\(-4\\)", "\\(-3\\)", "\\(4\\)", "\\(17\\)", "\\(36\\)"], ["premières", "", "\\(1\\)", "\\(7\\)", "\\(13\\)", "\\(19\\)"], ["deuxièmes", "", "", "\\(6\\)", "\\(6\\)", "\\(6\\)"])}`,
        S`<b>Trouve \(a\).</b> Pour \(y=ax^2+bx+c\) avec un pas en x de 1, la deuxième différence est \(2a\). Donc \(2a=6\) et \(a=3\).`,
        S`<b>Trouve \(c\).</b> \(f(0)=c\), et la table donne \(c=-4\).`,
        S`<b>Trouve \(b\).</b> Utilise \(x=1\) : \(3+b-4=-3\), donc \(b=-2\).`,
        S`<b>Vérification.</b> Utilise un point qu'on n'a pas utilisé : \(f(4)=48-8-4=36\) ✓`],
      S`\(f(x)=3x^2-2x-4\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 40 }, curves: [{ f: (x) => 3 * x * x - 2 * x - 4, color: "violet" }], points: pts([0, 1, 2, 3, 4], (x) => 3 * x * x - 2 * x - 4, "blue"), step: { x: 1, y: 4 } })],
    ["Pas de x = 0 dans la table", S`Trouve la fonction du second degré : x = 1, 2, 3, 4, 5 et y = \(7, 9, 7, 1, -9\).`,
      [S`<b>Différences.</b> Premières : \(2,-2,-6,-10\). Deuxièmes : \(-4,-4,-4\). Donc \(2a=-4\) et \(a=-2\).`,
        S`<b>La valeur manquante.</b> La table n'a pas de \(x=0\); on la prolonge donc vers l'arrière. En allant vers la gauche, les premières différences changent de \(+4\); celle qui précède 2 est donc 6.`,
        S`<b>Trouve \(c\).</b> \(f(1)-f(0)=6\), donc \(f(0)=7-6=1\). Ainsi, \(c=1\).`,
        S`<b>Trouve \(b\).</b> \(f(1)=-2+b+1=7\), donc \(b=8\).`,
        S`<b>Vérification.</b> \(f(5)=-50+40+1=-9\) ✓ et \(f(3)=-18+24+1=7\) ✓`],
      S`\(f(x)=-2x^2+8x+1\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -11, ymax: 11 }, curves: [{ f: (x) => -2 * x * x + 8 * x + 1, color: "violet" }], points: [...pts([1, 2, 3, 4, 5], (x) => -2 * x * x + 8 * x + 1, "blue"), { x: 0, y: 1, label: "(0, 1)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Un pas en x de 2", S`Trouve la fonction du second degré : x = 0, 2, 4, 6, 8 et y = \(3, 3, 7, 15, 27\).`,
      [S`<b>Différences.</b> Premières : \(0,4,8,12\). Deuxièmes : \(4,4,4\). Elles sont constantes; les données sont donc du second degré.`,
        S`<b>Le pas compte.</b> Avec un pas en x de \(h\), la deuxième différence est \(2ah^2\), et non \(2a\). Ici \(h=2\), donc \(2a(4)=4\), ce qui donne \(8a=4\) et \(a=0.5\).`,
        S`<b>Trouve \(c\).</b> \(f(0)=3\), donc \(c=3\).`,
        S`<b>Trouve \(b\).</b> \(f(2)=0.5(4)+2b+3=3\), donc \(2b+5=3\) et \(b=-1\).`,
        S`<b>Vérification.</b> \(f(8)=32-8+3=27\) ✓ et \(f(6)=18-6+3=15\) ✓`],
      S`\(f(x)=0.5x^2-x+3\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: 0, ymax: 30 }, curves: [{ f: (x) => 0.5 * x * x - x + 3, color: "violet" }], points: pts([0, 2, 4, 6, 8], (x) => 0.5 * x * x - x + 3, "blue"), step: { x: 1, y: 3 } })],
    ["Trois points", S`Trouve la fonction du second degré qui passe par \((-1,10)\), \((1,0)\) et \((3,6)\).`,
      [S`<b>Mise en équations.</b> Substitue chaque point dans \(y=ax^2+bx+c\) : (1) \(a-b+c=10\); (2) \(a+b+c=0\); (3) \(9a+3b+c=6\).`,
        S`<b>Trouve \(b\).</b> Soustrais (1) de (2) : \(2b=-10\), donc \(b=-5\).`,
        S`<b>Réduis.</b> Remplace \(b=-5\) dans (2) : \(a+c=5\). Remplace-le dans (3) : \(9a+c=21\).`,
        S`<b>Trouve \(a\) et \(c\).</b> Soustrais : \(8a=16\), donc \(a=2\) et \(c=3\).`,
        S`<b>Vérifie les trois.</b> \(2+5+3=10\) ✓. \(2-5+3=0\) ✓. \(18-15+3=6\) ✓`],
      S`\(y=2x^2-5x+3\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 12 }, curves: [{ f: (x) => 2 * x * x - 5 * x + 3, color: "violet" }], points: [{ x: -1, y: 10, label: "(−1, 10)", color: "blue" }, { x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 3, y: 6, label: "(3, 6)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("deuxièmes différences", S`Trouve la deuxième différence de la table x = 1, 2, 3, 4, 5 avec y = \(2, 8, 18, 32, 50\).`, num(4),
      "Les premières différences, puis leurs différences.", [S`Premières : \(6, 10, 14, 18\).`], S`\(4\)`),
    q("classer", S`x = 0, 1, 2, 3 et y = \(3, 6, 12, 24\). La relation est :`, choice(["exponentielle", "linéaire", "du second degré", "aucune de ces réponses"], 0),
      "Examine les rapports.", [S`Chaque y est le double du précédent.`], "exponentielle"),
    q("trouver a", S`Une table du second degré avec un pas en x de 1 a des deuxièmes différences de \(-10\). Trouve \(a\).`, num(-5),
      "Deuxième différence = 2a.", [S`\(2a=-10\).`], S`\(-5\)`),
    q("trouver a", S`x = 0, 1, 2, 3 et y = \(4, 6, 12, 22\). Trouve \(a\).`, num(2),
      "Trouve les deuxièmes différences.", [S`Premières \(2, 6, 10\); deuxièmes \(4=2a\).`], S`\(2\)`),
    q("trouver b", S`x = 0, 1, 2, 3 et y = \(1, 0, 3, 10\) est du second degré. Trouve \(b\).`, num(-3),
      "Trouve d'abord a et c, puis utilise le point (1, 0).", [S`Deuxièmes différences 4, donc \(a=2\); \(c=1\); \(2+b+1=0\).`], S`\(-3\)`),
  ]),

  ...hard([
    ["Distance d'arrêt", S`La distance d'arrêt \(d\) (m) d'une voiture à la vitesse \(v\) (km/h) est : \(v=20, 40, 60, 80\) donne \(d=6.4, 17.6, 33.6, 54.4\). Trouve un modèle du second degré et prédis la distance d'arrêt à 100 km/h.`,
      [S`Premières différences \(11.2, 16, 20.8\); deuxièmes différences \(4.8\). Avec \(h=20\) : \(2a(400)=4.8\), donc \(a=0.006\).`, S`Prolonge vers l'arrière : la différence qui précède 11.2 est \(11.2-4.8=6.4\), donc \(d(0)=6.4-6.4=0=c\).`, S`\(d(20)=0.006(400)+20b=6.4\Rightarrow 20b=4\Rightarrow b=0.2\). Donc \(d=0.006v^2+0.2v\).`, S`\(d(100)=60+20=80\) m.`],
      S`\(d=0.006v^2+0.2v\); environ 80 m à 100 km/h`,
      plane({ view: { xmin: -5, xmax: 110, ymin: -5, ymax: 90 }, curves: [{ f: (v) => 0.006 * v * v + 0.2 * v, a: 0, color: "violet" }], points: [...pts([20, 40, 60, 80], (v) => 0.006 * v * v + 0.2 * v, "blue"), { x: 100, y: 80, label: "(100, 80)", color: "red" }], xlabel: "v (km/h)", ylabel: "d (m)", step: { x: 10, y: 10 } })],
    ["Une suite de figures en tuiles", S`La figure \(n\) utilise \(T\) tuiles : \(n=1,2,3,4,5\) donne \(T=3, 8, 15, 24, 35\). Trouve \(T(n)\), puis trouve quelle figure utilise 143 tuiles.`,
      [S`Premières différences \(5,7,9,11\); deuxièmes \(2\) : \(a=1\).`, S`Un pas vers l'arrière : \(T(0)=3-3=0=c\); \(T(1)=1+b=3\Rightarrow b=2\). Donc \(T=n^2+2n\).`, S`\(n^2+2n=143\Rightarrow n^2+2n-143=0\Rightarrow(n+13)(n-11)=0\). Seul \(n=11\) a du sens.`],
      S`\(T(n)=n^2+2n\); figure 11`],
  ], [
    q("difficile", S`Une table du second degré (x = 0, 1, 2, 3) a y = \(2, 5, 12, 23\). Quelle est la valeur de y en x = 4?`, num(38),
      "Prolonge les différences.", [S`Premières \(3,7,11\), puis \(15\); \(23+15\).`], S`\(38\)`),
    q("difficile", S`Trouve la deuxième différence de \(y=-1.5x^2+4\) pour une table avec un pas en x de 2.`, num(-12),
      "Deuxième différence = 2ah².", [S`\(2(-1.5)(2)^2\).`], S`\(-12\)`),
    q("difficile", S`Une fonction du second degré passe par \((0,-2)\), \((1,1)\) et \((2,8)\). Trouve \(a\).`, num(2),
      "c = −2; écris deux équations en a et b.", [S`\(a+b=3\), \(4a+2b=10\Rightarrow 2a=4\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Faut-il que x = 0 soit dans la table?", "Non. Prolonge la table vers l'arrière à l'aide des différences, ou utilise trois points et résous pour trouver a, b et c."],
      ["Et si les valeurs de x ne sont pas également espacées?", "Les différences ne fonctionnent pas. Substitue plutôt trois points dans y = ax² + bx + c."],
      ["Pourquoi les tables exponentielles ne se stabilisent-elles jamais?", "Chaque rangée de différences est une autre exponentielle de même rapport; aucune rangée n'est donc jamais constante."],
      ["Et les tables du troisième degré?", "Leurs troisièmes différences sont constantes. En général, un degré n donne des n-ièmes différences constantes."],
      ["Les données réelles ne sont jamais exactes. Que faire?", "Si les deuxièmes différences sont à peu près égales, un modèle du second degré est raisonnable; il donne des prédictions, pas des valeurs exactes."],
    ],
    summary: [
      "Premières différences constantes : linéaire; deuxièmes constantes : second degré; rapport constant : exponentielle.",
      "Deuxième différence = 2ah² (simplement 2a lorsque le pas en x est 1).",
      "Table → équation : a à partir de la deuxième différence, c en x = 0, b à partir d'un autre point.",
      "Trois points → trois équations en a, b, c.",
    ],
    next: "La leçon 3.4 trouve algébriquement les valeurs maximales et minimales en complétant le carré et les utilise dans des problèmes d'optimisation.",
  }),
];
