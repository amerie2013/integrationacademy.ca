// MHF4U-FR 1.5 — Pente des sécantes et taux de variation moyen : Δy/Δx à partir d'équations, de tables et de graphiques;
// taux nuls, constants et variables; interprétation du signe et des unités (exemples polynomiaux, exponentiels et sinusoïdaux)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.5 Pente des sécantes et taux de variation moyen";
export const ID = lessonId(1, 5);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Pente des sécantes et taux de variation moyen",
    overview: S`Un <strong>taux de variation</strong> compare la variation de la variable dépendante à la variation de la variable indépendante. Sur un intervalle, le <strong>taux de variation moyen</strong> est \(\dfrac{\Delta y}{\Delta x}=\dfrac{f(b)-f(a)}{b-a}\) : la pente de la <strong>sécante</strong> qui passe par les deux extrémités. Dans cette leçon, tu vas calculer des taux moyens à partir d'équations, de tables et de graphiques; reconnaître quand un taux est nul, constant ou variable; et interpréter le signe et les unités selon le contexte.`,
    goals: [
      "expliquer un taux de variation comme une comparaison de deux variations, avec des unités;",
      "calculer un taux de variation moyen à partir d'une équation, d'une table ou d'un graphique;",
      "relier le taux de variation moyen à la pente d'une sécante;",
      "distinguer les taux de variation nuls, constants et variables;",
      "interpréter des taux de variation moyens dans des situations réelles.",
    ],
    curriculum: "D1.1–D1.4, D1.7 (taux de variation dans des applications concrètes; taux nuls, constants et variables; calculer et interpréter des taux de variation moyens à partir de tables, de graphiques et d'équations; relier la pente des sécantes aux taux moyens)",
    prior: [
      [S`Pente de la droite qui passe par \((1,4)\) et \((3,10)\)?`, S`\(\frac{10-4}{3-1}=3\).`],
      [S`Si \(f(x)=x^2\), trouve \(f(5)-f(2)\).`, S`\(25-4=21\).`],
      [S`Unités d'une pente si \(y\) est en m et \(x\) en s?`, S`m/s.`],
    ],
    words: [
      ["Taux de variation", "variation de y ÷ variation de x", "km/h, $/article"],
      ["Taux de variation moyen", "\\(\\frac{f(b)-f(a)}{b-a}\\) sur \\([a,b]\\)", ""],
      ["Sécante", "une droite qui passe par deux points d'une courbe", ""],
      ["Intervalle", "\\([a,b]\\) : toutes les valeurs de x de a à b", ""],
    ],
  }),

  section("📌 Taux moyen = pente d'une sécante", S`
  ${plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -3, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 10, b: 0, color: "amber", label: "pente 10" }, { m: -10, b: 40, color: "green", label: "pente −10" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 2, y: 20, label: "(2, 20)" }, { x: 4, y: 0, label: "(4, 0)" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 4 } }, "Une balle : h = −5t² + 20t. La vitesse moyenne est de 10 m/s pendant la montée [0, 2] et de −10 m/s pendant la descente [2, 4].")}
  ${keyIdea(S`Taux de variation moyen sur \([a,b]\) : \(\dfrac{\Delta y}{\Delta x}=\dfrac{f(b)-f(a)}{b-a}\), en (unités de y) par (unité de x). Positif : \(f\) a augmenté dans l'ensemble; négatif : elle a diminué; nul : même valeur aux deux extrémités. Pour une fonction linéaire, le taux est constant; pour toute autre fonction, il dépend de l'intervalle.`)}`),

  section("📌 Explore", S`<p>Choisis une fonction et fais glisser les deux points. La pente de la sécante est le taux de variation moyen sur cet intervalle. Trouve un intervalle où il est nul même si la fonction a varié entre les deux.</p>`),

  widget("secantLab", { init: { fn: "quad", a: 1, b: 3 } }),

  section("📌 Tables et graphiques", S`
  ${table(["Année", "2014", "2016", "2018", "2020", "2022"], [["Membres", "120", "150", "210", "330", "570"]])}
  <p>De 2014 à 2022, le taux moyen est de \(\frac{570-120}{8}=56.25\) membres par année, mais de 2014 à 2016, il n'était que de 15, et de 2020 à 2022, il était de 120 : le taux est <em>variable</em> (il augmente).</p>
  ${watchOut([
    "Soustrais dans le même ordre en haut et en bas : (f(b) − f(a)) ÷ (b − a).",
    "Indique toujours les unités : « par heure », « par année », « m/s ».",
    "Un taux moyen nul ne signifie pas que la fonction est restée constante.",
    "Seules les fonctions linéaires ont le même taux moyen sur tous les intervalles.",
  ])}`),

  examples([
    ["Une balle lancée", S`Pour \(h(t)=-5t^2+20t\) (m, s), trouve la vitesse moyenne sur \([0,2]\) et sur \([2,4]\).`,
      [S`<b>Formule.</b> Taux de variation moyen \(=\frac{h(b)-h(a)}{b-a}\), qui est la pente de la sécante de \(a\) à \(b\).`,
        S`<b>Hauteurs.</b> ${tv(["\\(t\\)", "0", "2", "4"], ["\\(h(t)\\)", "0", "20", "0"])}`,
        S`<b>Premier intervalle.</b> \(\frac{20-0}{2-0}=10\) m/s. La balle monte.`,
        S`<b>Deuxième intervalle.</b> \(\frac{0-20}{4-2}=-10\) m/s. Le signe négatif signifie qu'elle descend.`,
        S`<b>Vérification.</b> Sur \([0,4]\), la balle revient à son point de départ, donc la moyenne est 0. Et \(\frac{10+(-10)}2=0\) ✓`],
      S`10 m/s vers le haut, puis −10 m/s (vers le bas)`,
      plane({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 10, b: 0, color: "amber" }, { m: -10, b: 40, color: "green" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 2, y: 20, label: "(2, 20)" }, { x: 4, y: 0, label: "(4, 0)" }], step: { x: 1, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" }, "les droites ambre et verte sont les deux sécantes")],
    ["Une population qui double", S`Une colonie compte \(P(t)=100(2)^t\) individus après \(t\) heures. Trouve le taux de croissance moyen sur \([1,3]\) et sur \([3,4]\).`,
      [S`<b>Valeurs.</b> ${tv(["\\(t\\)", "1", "3", "4"], ["\\(P(t)\\)", "200", "800", "1600"])}`,
        S`<b>Premier intervalle.</b> \(\frac{800-200}{3-1}=\frac{600}2=300\) par heure.`,
        S`<b>Deuxième intervalle.</b> \(\frac{1600-800}{4-3}=800\) par heure.`,
        S`<b>Interpréter.</b> Le taux est plus grand plus tard, car la croissance exponentielle ajoute davantage quand il y a plus d'individus à doubler.`,
        S`<b>Vérification sur le graphique.</b> La sécante sur \([3,4]\) est beaucoup plus abrupte que celle sur \([1,3]\) ✓`],
      S`300 /h, puis 800 /h : le taux augmente`,
      plane({ view: { xmin: -0.3, xmax: 4.5, ymin: -50, ymax: 1700 }, curves: [{ f: (t) => 100 * 2 ** t, a: 0, b: 4.3, color: "red" }], lines: [{ m: 300, b: -100, color: "amber" }], points: [{ x: 1, y: 200, label: "(1, 200)" }, { x: 3, y: 800, label: "(3, 800)" }, { x: 4, y: 1600, label: "(4, 1600)" }], xlabel: "t (h)", ylabel: "P", step: { x: 1, y: 200 } })],
    ["Un taux constant", S`Un forfait coûte \(C(n)=25+4n\) dollars pour \(n\) gigaoctets. Trouve le taux de variation moyen sur \([0,5]\) et sur \([10,20]\).`,
      [S`<b>Premier intervalle.</b> \(C(0)=25\) et \(C(5)=45\) : \(\frac{45-25}{5}=4\).`,
        S`<b>Deuxième intervalle.</b> \(C(10)=65\) et \(C(20)=105\) : \(\frac{105-65}{10}=4\).`,
        S`<b>Pourquoi sont-ils égaux?</b> \(C\) est linéaire, donc chaque sécante est la droite elle-même. Le taux moyen est toujours la pente, 4.`,
        S`<b>Unités.</b> Dollars par gigaoctet : chaque gigaoctet supplémentaire coûte 4 dollars ✓`],
      S`4 dollars par Go sur tout intervalle`,
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 120 }, lines: [{ m: 4, b: 25, color: "violet" }], points: [{ x: 0, y: 25, label: "(0, 25)" }, { x: 5, y: 45, label: "(5, 45)" }, { x: 10, y: 65, label: "(10, 65)", color: "amber" }, { x: 20, y: 105, label: "(20, 105)", color: "amber" }], step: { x: 2, y: 10 }, xlabel: "n (Go)", ylabel: "C" })],
    ["À partir d'un graphique", S`Le graphique de \(f(x)=0.5x^2+1.5\) passe par \((1,2)\) et \((5,14)\). Trouve le taux de variation moyen sur \([1,5]\).`,
      [S`<b>Signification.</b> Le taux moyen est la pente de la droite (la sécante) qui relie les deux points.`,
        S`<b>Calculer.</b> \(\frac{14-2}{5-1}=\frac{12}4=3\).`,
        S`<b>Interpréter.</b> En moyenne, \(y\) augmente de 3 unités par unité de \(x\) sur cet intervalle, même si la courbe est peu inclinée au début et abrupte à la fin.`,
        S`<b>Vérification avec la règle.</b> \(f(1)=0.5+1.5=2\) ✓ et \(f(5)=12.5+1.5=14\) ✓`],
      S`\(3\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 16 }, curves: [{ f: (x) => 0.5 * x * x + 1.5, color: "violet" }], lines: [{ m: 3, b: -1, color: "amber", label: "sécante" }], points: [{ x: 1, y: 2, label: "(1, 2)" }, { x: 5, y: 14, label: "(5, 14)" }], step: { x: 1, y: 2 } })],
    ["Nul ne veut pas dire « aucune variation »", S`Pour \(y=3\sin x\), trouve le taux de variation moyen sur \([0,\pi]\) et sur \([0,\tfrac\pi2]\).`,
      [S`<b>Premier intervalle.</b> \(\sin0=\sin\pi=0\), donc \(\frac{0-0}{\pi-0}=0\).`,
        S`<b>Interpréter.</b> Une moyenne nulle ne signifie pas qu'il ne s'est rien passé. \(y\) est monté jusqu'à 3, puis est redescendu. Seules les extrémités comptent.`,
        S`<b>Deuxième intervalle.</b> \(y\) passe de 0 à 3 : \(\frac{3-0}{\pi/2}=\frac6\pi\).`,
        S`<b>Évaluer.</b> \(\frac6\pi\approx1.91\) par radian.`,
        S`<b>Vérification sur le graphique.</b> La sécante ambre est horizontale et la sécante verte monte jusqu'au sommet ✓`],
      S`\(0\) et environ \(1.91\)`,
      plane({ view: { xmin: -0.3, xmax: 3.5, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 3 * Math.sin(x), a: 0, b: Math.PI, color: "blue" }], lines: [{ m: 0, b: 0, color: "amber" }, { m: 6 / Math.PI, b: 0, color: "green" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: Math.PI, y: 0, label: "(π, 0)" }, { x: Math.PI / 2, y: 3, label: "(π/2, 3)" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("équation", S`Trouve le taux de variation moyen de \(f(x)=x^2\) sur \([1,4]\).`, num(5),
      "(f(4) − f(1)) ÷ 3.", [S`\(\frac{16-1}{3}=5\).`], S`\(5\)`),
    q("vitesse", S`La hauteur d'une balle est \(h(t)=-4.9t^2+30t\) (m). Trouve sa vitesse moyenne sur \([1,3]\) (m/s).`, num(10.4, 0.01),
      "h(1) = 25.1, h(3) = 45.9.", [S`\(\frac{45.9-25.1}{2}=10.4\).`], S`\(10.4\)`),
    q("table", S`Une ville comptait 42 milliers d'habitants en 2010 et 58 milliers en 2018. Trouve le taux de variation moyen en milliers par année.`, num(2),
      "16 ÷ 8.", [S`\(\frac{58-42}{8}\).`], S`\(2\)`),
    q("constant", "Quel type de fonction a le même taux de variation moyen sur tous les intervalles?", choice(["linéaire", "quadratique", "exponentielle", "sinusoïdale"], 0),
      "Pente constante.", ["Seule une droite a une pente constante."], "linéaire"),
    q("exponentielle", S`Trouve le taux de variation moyen de \(y=2^x\) sur \([0,3]\), au centième près.`, num(2.33, 0.01),
      "(8 − 1) ÷ 3.", [S`\(\frac73\approx2.33\).`], S`\(2.33\)`),
  ]),

  ...hard([
    ["Trouver l'intervalle", S`Le taux de variation moyen de \(f(x)=x^2\) sur \([1,b]\) est 7. Trouve \(b\).`,
      [S`\(\frac{b^2-1}{b-1}=\frac{(b-1)(b+1)}{b-1}=b+1\) (pour \(b\ne1\)).`, S`\(b+1=7\Rightarrow b=6\). Vérification : \(\frac{36-1}{5}=7\) ✓.`],
      S`\(b=6\)`],
    ["Comparer des intervalles pour une décroissance", S`La masse d'un échantillon diminue de moitié toutes les 10 s : \(m(t)=80\left(\tfrac12\right)^{t/10}\) g. Compare le taux de variation moyen sur \([0,30]\) avec les taux sur \([0,10]\), \([10,20]\) et \([20,30]\).`,
      [S`\(m(0)=80\), \(m(10)=40\), \(m(20)=20\), \(m(30)=10\).`, S`\([0,30]\) : \(\frac{10-80}{30}\approx-2.33\) g/s. Les trois parties : \(-4\), \(-2\), \(-1\) g/s.`, S`La décroissance ralentit; la moyenne sur 30 s le cache.`],
      S`environ \(-2.33\) g/s dans l'ensemble; \(-4\), \(-2\), \(-1\) g/s dans les parties`,
      plane({ view: { xmin: -2, xmax: 34, ymin: -5, ymax: 90 }, curves: [{ f: (t) => 80 * 0.5 ** (t / 10), a: 0, b: 32, color: "red" }], points: [[0, 80], [10, 40], [20, 20], [30, 10]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})` })), xlabel: "t (s)", ylabel: "m (g)", step: { x: 5, y: 10 } })],
  ], [
    q("difficile", S`Trouve le taux de variation moyen de \(f(x)=x^3\) sur \([1,3]\).`, num(13),
      "(27 − 1) ÷ 2.", [S`\(\frac{26}{2}\).`], S`\(13\)`),
    q("difficile", S`Le taux de variation moyen de \(f(x)=x^2+2x\) sur \([0,b]\) est 10. Trouve \(b\).`, num(8),
      "Simplifie (b² + 2b)/b.", [S`\(b+2=10\).`], S`\(8\)`),
    q("difficile", S`Trouve le taux de variation moyen de \(y=3\sin x\) sur \([0,\tfrac\pi2]\), au centième près.`, num(1.91, 0.01),
      "3 ÷ (π/2).", [S`\(\frac6\pi\approx1.91\).`], S`\(1.91\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre une variation et un taux de variation?", "La variation est Δy (p. ex. 450 membres). Le taux de variation divise par Δx (450 membres ÷ 8 années = 56.25 membres par année)."],
      ["Pourquoi le taux moyen est-il la pente d'une sécante?", "Les deux valent (f(b) − f(a)) ÷ (b − a) : la variation verticale sur la variation horizontale entre les deux extrémités."],
      ["Que signifie un taux moyen négatif?", "La valeur de la fonction à la fin de l'intervalle est plus basse qu'au début : elle a diminué dans l'ensemble."],
      ["Deux intervalles différents peuvent-ils donner le même taux moyen?", "Oui — pour une fonction linéaire, tous les intervalles le donnent; pour les autres, cela peut arriver par coïncidence."],
      ["Qu'est-ce qu'un taux moyen cache?", "Tout ce qui se passe entre les extrémités : la vitesse moyenne d'une balle sur [0, 4] est 0, même si elle est montée de 20 m puis redescendue."],
    ],
    summary: [
      "Taux moyen sur [a, b] = (f(b) − f(a)) ÷ (b − a).",
      "C'est la pente de la sécante qui passe par les extrémités.",
      "Il est constant seulement pour les fonctions linéaires.",
      "Indique les unités; interprète le signe.",
    ],
    next: "La leçon 1.6 rétrécit l'intervalle pour trouver le taux de variation à un instant précis.",
  }),
];
