// MHF4U-FR 5.2 — Graphiques des fonctions trigonométriques inverses : csc x, sec x et cot x tracées à partir de
// sin, cos et tan
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { PI } from "./trigfig.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "5.2 Graphiques des fonctions trigonométriques inverses";
export const ID = lessonId(5, 2);

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
/** morceaux de la courbe de 1/g sur [a, b], coupés aux asymptotes `poles` */
const pieces = (f, poles, a, b, color = "violet") => { const cuts = [a, ...poles.filter((p) => p > a && p < b).sort((u, v) => u - v), b]; return cuts.slice(0, -1).map((l, i) => ({ f, a: i === 0 ? l : l + 0.03, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.03, color })); };
const mult = (s, off, a, b) => { const out = []; for (let n = -8; n <= 8; n++) { const x = off + n * s; if (x > a && x < b) out.push(x); } return out; };
const fig = (f, base, poles, view, points = []) => plane({ view, curves: [...(base ? [{ f: base, color: "green" }] : []), ...pieces(f, poles, view.xmin, view.xmax)], vlines: poles.filter((x) => x > view.xmin && x < view.xmax).map((x) => ({ x, color: "red", dash: true })), points, step: { x: 1, y: 1 }, xlabel: "x (rad)" });
const V = { xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 };
const csc = (x) => 1 / Math.sin(x), sec = (x) => 1 / Math.cos(x), cot = (x) => 1 / Math.tan(x);
export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Graphiques des fonctions trigonométriques inverses",
    overview: S`Au chapitre 3, tu as tracé la fonction réciproque y = 1/f(x) de droites et de paraboles. Le même raisonnement s'applique ici. Partout où \(\sin x=0\), \(\csc x=\frac1{\sin x}\) a une asymptote verticale. Partout où \(\sin x=\pm1\), les deux graphiques se touchent, et ces points restent fixes. Chaque bosse de la courbe sinus devient une branche en forme de U de la cosécante.`,
    goals: [
      "tracer \\(\\csc x\\), \\(\\sec x\\) et \\(\\cot x\\) à partir des fonctions dont elles sont l'inverse (1/sin, 1/cos, 1/tan);",
      "donner la période, le domaine, l'image et les asymptotes;",
      "trouver les points tournants de csc et de sec;",
      "donner les intervalles de croissance et de décroissance;",
      "utiliser les graphiques pour résoudre des équations simples.",
    ],
    curriculum: "B2.3 (tracer et décrire les graphiques des fonctions trigonométriques inverses)",
    prior: [
      [S`Où a-t-on \(\sin x=0\) sur \([0,2\pi]\) ?`, S`\(0,\ \pi,\ 2\pi\).`],
      [S`\(\sec\frac\pi3\) ?`, S`\(2\).`],
      [S`Qu'arrive-t-il à \(\frac1y\) lorsque \(y\) est proche de 0 ?`, S`Elle augmente sans limite.`],
    ],
    words: [
      ["Cosécante", "\\(\\csc x=\\frac1{\\sin x}\\)", ""],
      ["Sécante", "\\(\\sec x=\\frac1{\\cos x}\\)", ""],
      ["Cotangente", "\\(\\cot x=\\frac{\\cos x}{\\sin x}\\)", ""],
      ["Point invariant", "là où la fonction vaut ±1", ""],
    ],
  }),

  section("📌 Les trois graphiques", S`
  ${table(["Caractéristique", "y = csc x", "y = sec x", "y = cot x"], [
    ["période", "2π", "2π", "π"],
    ["asymptotes", "x = nπ", "x = π/2 + nπ", "x = nπ"],
    ["image", "|y| ≥ 1", "|y| ≥ 1", "tous les nombres réels"],
    ["zéros", "aucun", "aucun", "x = π/2 + nπ"],
    ["symétrie", "impaire", "paire", "impaire"],
  ])}
  ${fig(csc, Math.sin, mult(PI, 0, -6.5, 6.5), V)}
  ${keyIdea(S`Pour tracer \(\csc x\) : (1) trace légèrement \(\sin x\); (2) trace des asymptotes à ses zéros; (3) marque les points où \(\sin x=\pm1\); (4) trace une branche en forme de U à partir de chacun de ces points, ouverte en s'éloignant de l'axe.`)}`),

  section("📌 Explorer", S`<p>Utilise l'explorateur pour revoir sin, cos et tan. Pour chacune, imagine qu'on remplace chaque valeur de y par son inverse : une valeur de 0.5 devient 2, et une valeur de 0 devient une asymptote.</p>`),

  widget("ibTrigGraph", { init: 0 }),

  section("📌 La sécante et la cotangente", S`
  ${fig(sec, Math.cos, mult(PI, PI / 2, -6.5, 6.5), V)}
  ${fig(cot, null, mult(PI, 0, -6.5, 6.5), V)}
  ${watchOut([
    "csc et sec ne prennent jamais de valeurs strictement comprises entre −1 et 1.",
    "cot x a des asymptotes là où tan x = 0, et des zéros là où tan x a des asymptotes.",
    "Un maximum du sinus est un minimum de la cosécante, sur la même branche.",
    "Indique la croissance et la décroissance séparément sur chaque branche.",
    "csc x = 1/sin x n'est pas sin⁻¹x : csc x est un nombre, sin⁻¹x est un angle.",
  ])}`),

  examples([
    ["La cosécante à partir du sinus", S`Donne les asymptotes et les points tournants de \(y=\csc x\) sur \([0,2\pi]\).`,
      [S`<b>Règle.</b> \(\csc x=\frac1{\sin x}\), donc tout se lit sur la courbe sinus.`,
        S`<b>Asymptotes.</b> \(\sin x=0\) en \(x=0,\ \pi,\ 2\pi\), et \(\frac10\) n'a pas de valeur.`,
        S`<b>Minimum relatif.</b> \(\sin\frac\pi2=1\) est la plus grande valeur du sinus, donc son inverse est la plus petite sur cette branche : \(\left(\frac\pi2,1\right)\).`,
        S`<b>Maximum relatif.</b> \(\sin\frac{3\pi}2=-1\) donne \(\left(\frac{3\pi}2,-1\right)\) sur la branche inférieure.`,
        S`<b>Vérification.</b> \(\csc\frac\pi6=2>1\), donc la branche supérieure reste au-dessus de son minimum ✓`],
      S`asymptotes \(0,\pi,2\pi\); \(\left(\frac\pi2,1\right)\), \(\left(\frac{3\pi}2,-1\right)\)`,
      fig(csc, Math.sin, [0, PI, 2 * PI], { xmin: -0.5, xmax: 7, ymin: -5, ymax: 5 }, [lab(PI / 2, 1, "(π/2, 1)"), lab((3 * PI) / 2, -1, "(3π/2, −1)")])],
    ["La sécante à partir du cosinus", S`Donne le domaine et l'image de \(y=\sec x\).`,
      [S`<b>Règle.</b> \(\sec x=\frac1{\cos x}\).`,
        S`<b>Domaine.</b> \(\cos x=0\) en \(x=\frac\pi2+n\pi\), et ces valeurs sont exclues.`,
        S`<b>Image.</b> \(0\lt|\cos x|\le1\). L'inverse d'une grandeur d'au plus 1 vaut au moins 1, donc \(|\sec x|\ge1\).`,
        S`<b>Vérification.</b> \(\sec0=1\) et \(\sec\pi=-1\) sont les valeurs les plus proches de 0, et \(\sec\frac\pi3=2\) ✓`],
      S`\(x\ne\frac\pi2+n\pi\); \(y\le-1\) ou \(y\ge1\)`,
      fig(sec, Math.cos, mult(PI, PI / 2, -6.5, 6.5), V, [lab(0, 1, "(0, 1)")])],
    ["La cotangente", S`Donne les zéros et les asymptotes de \(y=\cot x\) sur \((0,\pi)\) et décris son comportement.`,
      [S`<b>Règle.</b> \(\cot x=\dfrac{\cos x}{\sin x}\).`,
        S`<b>Asymptotes.</b> \(\sin x=0\) aux extrémités de l'intervalle : \(0\) et \(\pi\).`,
        S`<b>Zéro.</b> \(\cos x=0\) en \(x=\frac\pi2\).`,
        S`<b>Comportement.</b> Près de 0, elle est grande et positive. Près de \(\pi\), elle est grande et négative. Elle est décroissante sur tout l'intervalle.`,
        S`<b>Vérification.</b> \(\cot\frac\pi4=1\), \(\cot\frac\pi2=0\), \(\cot\frac{3\pi}4=-1\) : elle descend ✓`],
      S`zéro \(\frac\pi2\); décroissante sur \((0,\pi)\)`,
      fig(cot, null, [0, PI], { xmin: -0.5, xmax: 3.6, ymin: -5, ymax: 5 }, [lab(PI / 2, 0, "π/2")])],
    ["Croissance et décroissance", S`Sur \(\left(0,\pi\right)\), où \(y=\csc x\) est-elle décroissante et où est-elle croissante ?`,
      [S`<b>Règle.</b> Pour des valeurs positives, l'inverse varie en sens contraire : quand la valeur augmente, son inverse diminue. Sur \((0,\pi)\), le sinus est positif.`,
        S`<b>Partie gauche.</b> \(\sin x\) augmente sur \(\left(0,\frac\pi2\right)\), donc \(\csc x\) y diminue.`,
        S`<b>Partie droite.</b> \(\sin x\) diminue sur \(\left(\frac\pi2,\pi\right)\), donc \(\csc x\) y augmente.`,
        S`<b>Vérification.</b> \(\csc\frac\pi6=2\), \(\csc\frac\pi2=1\), \(\csc\frac{5\pi}6=2\) : elle descend, puis remonte ✓`],
      S`décroissante sur \(\left(0,\frac\pi2\right)\); croissante sur \(\left(\frac\pi2,\pi\right)\)`,
      fig(csc, Math.sin, [0, PI], { xmin: -0.5, xmax: 3.6, ymin: -1, ymax: 5 }, [lab(PI / 2, 1, "(π/2, 1)"), lab(PI / 6, 2, "(π/6, 2)"), lab((5 * PI) / 6, 2, "(5π/6, 2)")])],
    ["Un agrandissement vertical", S`Décris \(y=2\sec x\) et donne son image.`,
      [S`<b>Transformation.</b> Multiplier par 2 agrandit \(\sec x\) verticalement par un facteur de 2.`,
        S`<b>Asymptotes.</b> Elles se trouvent là où \(\cos x=0\), et l'agrandissement ne change pas ces valeurs de x.`,
        S`<b>Image.</b> \(|\sec x|\ge1\) devient \(|y|\ge2\).`,
        S`<b>Vérification.</b> \(2\sec0=2\) et \(2\sec\pi=-2\), les valeurs les plus proches de 0 ✓`],
      S`\(y\le-2\) ou \(y\ge2\)`,
      fig((x) => 2 / Math.cos(x), (x) => 2 * Math.cos(x), mult(PI, PI / 2, -6.5, 6.5), { xmin: -6.5, xmax: 6.5, ymin: -6, ymax: 6 })],
  ]),

  practice([
    q("période", S`Quelle est la période de \(y=\cot x\) ? (2 décimales)`, num(3.14, 0.01),
      "La même que celle de la tangente.", [S`\(\pi\).`], S`\(3.14\)`),
    q("asymptotes", S`Combien d'asymptotes \(y=\sec x\) a-t-elle sur \([0,2\pi]\) ?`, num(2),
      "Là où cos x = 0.", [S`\(\frac\pi2,\ \frac{3\pi}2\).`], S`\(2\)`),
    q("valeur", S`Quelle est la valeur minimale relative de \(y=\csc x\) sur \((0,\pi)\) ?`, num(1),
      "Là où sin x est la plus grande.", [S`\(\csc\frac\pi2=1\).`], S`\(1\)`),
    q("image", S`Quelle valeur n'appartient PAS à l'image de \(y=\sec x\) ?`, choice([S`\(0.5\)`, S`\(1\)`, S`\(-1\)`, S`\(2\)`], 0),
      "|sec x| ≥ 1.", [S`\(0.5\) est compris entre \(-1\) et \(1\).`], S`\(0.5\)`),
    q("zéros", S`Combien de zéros \(y=\csc x\) a-t-elle ?`, num(0),
      "Le numérateur vaut 1.", [S`Elle ne vaut jamais 0.`], S`\(0\)`),
  ]),

  ...hard([
    ["Une compression horizontale", S`Donne la période, les asymptotes sur \([0,2\pi]\) et l'image de \(y=\csc2x\).`,
      [S`Période \(\frac{2\pi}2=\pi\).`, S`\(\sin2x=0\) en \(x=\frac{n\pi}2\) : \(0,\ \frac\pi2,\ \pi,\ \frac{3\pi}2,\ 2\pi\).`, S`L'image ne change pas : \(|y|\ge1\).`],
      S`période \(\pi\); cinq asymptotes; \(|y|\ge1\)`,
      fig((x) => 1 / Math.sin(2 * x), (x) => Math.sin(2 * x), mult(PI / 2, 0, -0.5, 6.5), { xmin: -0.5, xmax: 6.5, ymin: -5, ymax: 5 })],
    ["Résoudre avec une fonction inverse", S`Résous \(\sec x=2\) sur \([0,2\pi]\), et montre les solutions sur le graphique.`,
      [S`\(\cos x=\frac12\).`, S`\(x=\frac\pi3\) dans le quadrant 1 et \(x=\frac{5\pi}3\) dans le quadrant 4.`],
      S`\(x=\frac\pi3,\ \frac{5\pi}3\)`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -5, ymax: 5 }, curves: [...pieces(sec, [PI / 2, (3 * PI) / 2], -0.5, 7), { f: () => 2, color: "green" }], points: [lab(PI / 3, 2, "π/3"), lab((5 * PI) / 3, 2, "5π/3")], step: { x: 1, y: 1 }, xlabel: "x (rad)" })],
  ], [
    q("difficile", S`Combien de solutions l'équation \(\csc x=3\) a-t-elle sur \([0,4\pi]\) ?`, num(4),
      "Deux par cycle complet.", [S`\(\sin x=\frac13\) deux fois par cycle.`], S`\(4\)`),
    q("difficile", S`Quelle est la période de \(y=\sec3x\) ? (2 décimales)`, num(2.09, 0.01),
      "2π/3.", [S`\(\frac{2\pi}3\).`], S`\(2.09\)`),
    q("difficile", S`Évalue \(\csc^2\dfrac\pi4-\cot^2\dfrac\pi4\).`, num(1),
      "Identité de Pythagore.", [S`\(2-1\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi csc et sec n'ont-elles pas de zéros ?", "L'inverse d'un nombre ne peut jamais valoir 0."],
      ["Pourquoi les branches ont-elles la forme d'un U ?", "Quand le sinus monte jusqu'à 1 puis redescend, son inverse descend jusqu'à 1 puis remonte."],
      ["Les périodes changent-elles ?", "Non : l'inverse se répète chaque fois que la fonction de départ se répète."],
      ["Et cot x ?", "C'est l'inverse de tan x : elle a des zéros aux asymptotes de tan et des asymptotes aux zéros de tan."],
      ["Comment entrer csc dans une calculatrice ?", "Sous la forme 1/sin(x), en mode radians."],
    ],
    summary: [
      "Les zéros de la fonction de départ deviennent des asymptotes.",
      "Les points de valeur ±1 sont invariants.",
      "csc x et sec x : période 2π, image |y| ≥ 1.",
      "cot x : période π, image tous les nombres réels.",
    ],
    next: "En 5.3, on transforme le sinus et le cosinus en radians.",
  }),
];
