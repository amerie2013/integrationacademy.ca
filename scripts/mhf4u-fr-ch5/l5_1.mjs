// MHF4U-FR 5.1 — Graphiques des fonctions sinus, cosinus et tangente : caractéristiques en radians, intervalles de
// croissance et de décroissance, asymptotes de la tangente et taux de variation sur les courbes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { TG, PI } from "./trigfig.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "5.1 Graphiques des fonctions sinus, cosinus et tangente";
export const ID = lessonId(5, 1);

const S = String.raw;
const W = { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 };
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const tanPieces = (a, b) => { const out = []; for (let n = -4; n <= 4; n++) { const c = n * PI, l = Math.max(a, c - PI / 2 + 0.02), r = Math.min(b, c + PI / 2 - 0.02); if (l < r) out.push({ f: Math.tan, a: l, b: r, color: "violet" }); } return out; };
const tanFig = (view, points = []) => plane({ view, curves: tanPieces(view.xmin, view.xmax), vlines: [-3, -1, 1, 3].map((k) => k * PI / 2).filter((x) => x > view.xmin && x < view.xmax).map((x) => ({ x, color: "red", dash: true })), points, step: { x: 1, y: 1 }, xlabel: "x (rad)" });
export const blocks = () => [
  intro({
    icon: "🌊",
    title: "Graphiques des fonctions sinus, cosinus et tangente",
    overview: S`Déroule le cercle trigonométrique le long de l'axe des x : la hauteur du point mobile trace la courbe sinus. Son abscisse trace la courbe cosinus. Leur quotient, la tangente, a une forme très différente : elle se répète tous les \(\pi\) et possède des asymptotes verticales partout où le cosinus vaut 0. Dans cette leçon, l'axe des x est gradué en radians, comme il le sera désormais.`,
    goals: [
      "tracer \\(y=\\sin x\\), \\(y=\\cos x\\) et \\(y=\\tan x\\) en radians;",
      "donner la période, l'amplitude, le domaine, l'image, les abscisses et ordonnées à l'origine et les asymptotes;",
      "donner les intervalles de croissance et de décroissance;",
      "utiliser un graphique pour compter les solutions d'une équation;",
      "comparer les taux de variation moyen et instantané sur les courbes.",
    ],
    curriculum: "B2.1 (tracer sin x, cos x et tan x en radians), B2.2 (propriétés clés)",
    prior: [
      [S`\(\sin\frac\pi2\) ?`, S`\(1\).`],
      [S`\(\cos\pi\) ?`, S`\(-1\).`],
      [S`Pourquoi \(\tan\frac\pi2\) n'est-elle pas définie ?`, S`\(\cos\frac\pi2=0\).`],
    ],
    words: [
      ["Période", "la longueur d'un cycle complet", "\\(2\\pi\\) pour le sinus"],
      ["Amplitude", "la moitié de la distance entre le maximum et le minimum", "1 pour le sinus"],
      ["Fonction périodique", "fonction dont les valeurs se répètent à intervalles réguliers", ""],
      ["Asymptote de tan", "là où cos x = 0", "\\(x=\\frac\\pi2+n\\pi\\)"],
    ],
  }),

  section("📌 Comparer les trois fonctions", S`
  ${table(["Caractéristique", "y = sin x", "y = cos x", "y = tan x"], [
    ["période", "2π", "2π", "π"],
    ["amplitude", "1", "1", "aucune"],
    ["image", "[−1, 1]", "[−1, 1]", "tous les nombres réels"],
    ["zéros", "nπ", "π/2 + nπ", "nπ"],
    ["maximum", "1 en π/2 + 2nπ", "1 en 2nπ", "aucun"],
    ["asymptotes", "aucune", "aucune", "x = π/2 + nπ"],
  ])}
  ${plane(TG([[Math.sin, "violet"], [Math.cos, "green"]], W, [lab(PI / 2, 1, "π/2"), lab(PI, 0, "π"), lab(2 * PI, 0, "2π")]), "sin x (violet) et cos x (vert) sur un axe gradué en radians.")}
  ${keyIdea(S`Retiens cinq points clés pour un cycle : \(0,\ \frac\pi2,\ \pi,\ \frac{3\pi}2,\ 2\pi\). Le sinus prend les valeurs \(0,1,0,-1,0\). Le cosinus prend les valeurs \(1,0,-1,0,1\). La tangente se construit à partir de \(\tan x=\frac{\sin x}{\cos x}\).`)}`),

  section("📌 Explorer", S`<p>Passe de sin à cos à tan. Lis la période, l'image et les zéros de chaque courbe, et observe comment les zéros du cosinus deviennent les asymptotes de la tangente.</p>`),

  widget("ibTrigGraph", { init: 2 }),

  section("📌 La tangente", S`
  ${tanFig({ xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 })}
  ${watchOut([
    "La période de la tangente est π, pas 2π.",
    "La tangente est croissante sur chaque intervalle, mais elle n'est pas croissante sur tout son domaine.",
    "Utilise les radians sur l'axe : place π/2 ≈ 1.57, π ≈ 3.14, 2π ≈ 6.28.",
    "Ne relie pas les branches de la tangente de part et d'autre d'une asymptote.",
    "Le sinus est impair et le cosinus est pair : compare les deux côtés de l'axe des y.",
  ])}`),

  examples([
    ["Lire le sinus", S`Pour \(y=\sin x\) sur \([0,2\pi]\), donne les zéros, les points maximum et minimum, et les intervalles de croissance.`,
      [S`<b>Signification.</b> \(\sin x\) est la hauteur du point du cercle trigonométrique à l'angle \(x\). On lit donc les hauteurs sur un tour complet.`,
        S`<b>Tableau.</b> ${tv(["\\(x\\)", "\\(0\\)", "\\(\\frac\\pi2\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}2\\)", "\\(2\\pi\\)"], ["\\(\\sin x\\)", "\\(0\\)", "\\(1\\)", "\\(0\\)", "\\(-1\\)", "\\(0\\)"])}`,
        S`<b>Zéros.</b> La hauteur vaut 0 en \(0,\ \pi,\ 2\pi\).`,
        S`<b>Extremums.</b> Maximum \(\left(\frac\pi2,1\right)\) et minimum \(\left(\frac{3\pi}2,-1\right)\).`,
        S`<b>Croissance.</b> La courbe monte jusqu'au maximum, puis de nouveau après le minimum.`,
        S`<b>Vérification.</b> \(\sin\frac\pi6=\frac12\) et \(\sin\frac\pi3\approx0.87\) : la courbe monte bien sur le premier intervalle ✓`],
      S`croissante sur \(\left[0,\frac\pi2\right)\) et sur \(\left(\frac{3\pi}2,2\pi\right]\)`,
      plane(TG([[Math.sin, "violet"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 2, 1, "(π/2, 1)"), lab((3 * PI) / 2, -1, "(3π/2, −1)", "red")]))],
    ["Lire le cosinus", S`Pour \(y=\cos x\) sur \([0,2\pi]\), indique où la fonction est décroissante et où \(\cos x\lt0\).`,
      [S`<b>Signification.</b> \(\cos x\) est l'abscisse du point du cercle trigonométrique.`,
        S`<b>Tableau.</b> ${tv(["\\(x\\)", "\\(0\\)", "\\(\\frac\\pi2\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}2\\)", "\\(2\\pi\\)"], ["\\(\\cos x\\)", "\\(1\\)", "\\(0\\)", "\\(-1\\)", "\\(0\\)", "\\(1\\)"])}`,
        S`<b>Décroissance.</b> La fonction descend de \(1\) en \(x=0\) jusqu'à \(-1\) en \(x=\pi\).`,
        S`<b>Valeurs négatives.</b> La courbe est sous l'axe entre ses zéros \(\frac\pi2\) et \(\frac{3\pi}2\), c'est-à-dire dans les quadrants 2 et 3.`,
        S`<b>Vérification.</b> \(\cos\pi=-1\lt0\), et \(\pi\) appartient à cet intervalle ✓`],
      S`décroissante sur \((0,\pi)\); négative sur \(\left(\frac\pi2,\frac{3\pi}2\right)\)`,
      plane(TG([[Math.cos, "green"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 2, 0, "π/2"), lab((3 * PI) / 2, 0, "3π/2")]))],
    ["Les asymptotes de la tangente", S`Donne les asymptotes et les zéros de \(y=\tan x\) sur \([-\pi,\pi]\).`,
      [S`<b>Règle.</b> \(\tan x=\dfrac{\sin x}{\cos x}\).`,
        S`<b>Asymptotes.</b> Un dénominateur nul ne donne aucune valeur : \(\cos x=0\) en \(x=\pm\frac\pi2\).`,
        S`<b>Zéros.</b> Un numérateur nul donne 0 : \(\sin x=0\) en \(x=-\pi,\ 0,\ \pi\).`,
        S`<b>Espacement.</b> Les zéros sont espacés de \(\pi\), ce qui correspond à la période de la tangente.`,
        S`<b>Vérification.</b> \(\tan\frac\pi4=1\), entre le zéro en 0 et l'asymptote en \(\frac\pi2\) ✓`],
      S`asymptotes \(x=\pm\frac\pi2\); zéros \(-\pi,\ 0,\ \pi\)`,
      tanFig({ xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, [lab(PI / 4, 1, "(π/4, 1)")])],
    ["Là où les courbes se croisent", S`Utilise les graphiques pour trouver où \(\sin x=\cos x\) sur \([0,2\pi]\).`,
      [S`<b>Réécrire.</b> À un point de croisement, \(\cos x\ne0\), car le sinus et le cosinus ne valent jamais 0 en même temps. On divise : \(\tan x=1\).`,
        S`<b>Premier croisement.</b> \(\tan\frac\pi4=1\), donc \(x=\frac\pi4\).`,
        S`<b>Deuxième croisement.</b> La tangente a une période de \(\pi\) : \(x=\frac\pi4+\pi=\frac{5\pi}4\).`,
        S`<b>Vérification.</b> En \(\frac{5\pi}4\), les deux valent \(-\frac{\sqrt2}2\) ✓`],
      S`\(x=\frac\pi4,\ \frac{5\pi}4\)`,
      plane(TG([[Math.sin, "violet"], [Math.cos, "green"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 4, Math.SQRT1_2, "π/4"), lab((5 * PI) / 4, -Math.SQRT1_2, "5π/4")]))],
    ["Taux de variation moyen", S`Trouve le taux de variation moyen de \(y=\sin x\) sur \(\left[0,\frac\pi2\right]\) et sur \(\left[\frac\pi2,\pi\right]\).`,
      [S`<b>Règle.</b> Le taux moyen est la pente de la sécante : \(\dfrac{y_2-y_1}{x_2-x_1}\).`,
        S`<b>Premier intervalle.</b> \(\sin0=0\) et \(\sin\frac\pi2=1\) : \(\dfrac{1-0}{\pi/2}=\frac2\pi\approx0.64\).`,
        S`<b>Deuxième intervalle.</b> \(\sin\frac\pi2=1\) et \(\sin\pi=0\) : \(\dfrac{0-1}{\pi/2}=-\frac2\pi\approx-0.64\).`,
        S`<b>Vérification.</b> La courbe est symétrique par rapport à \(x=\frac\pi2\), donc les pentes sont opposées ✓`],
      S`\(\frac2\pi\) et \(-\frac2\pi\)`,
      plane(TG([[Math.sin, "violet"]], { xmin: -0.5, xmax: 4, ymin: -1, ymax: 2 }, [lab(0, 0, "(0, 0)"), lab(PI / 2, 1, "(π/2, 1)"), lab(PI, 0, "(π, 0)")], { segs: [{ pts: [[0, 0], [PI / 2, 1]], color: "amber" }, { pts: [[PI / 2, 1], [PI, 0]], color: "red" }] }))],
  ]),

  practice([
    q("période", S`Quelle est la période de \(y=\tan x\) ? (2 décimales)`, num(3.14, 0.01),
      "Elle se répète tous les π.", [S`\(\pi\approx3.14\).`], S`\(3.14\)`),
    q("maximum", S`Quelle est la valeur maximale de \(y=\cos x\) ?`, num(1),
      "Lis le sommet de la vague.", [S`\(1\).`], S`\(1\)`),
    q("zéros", S`Combien de zéros \(y=\sin x\) a-t-elle sur \([0,2\pi]\) ?`, num(3),
      "Fais-en la liste.", [S`\(0,\ \pi,\ 2\pi\).`], S`\(3\)`),
    q("asymptotes", S`Combien d'asymptotes \(y=\tan x\) a-t-elle sur \([0,2\pi]\) ?`, num(2),
      "x = π/2 + nπ.", [S`\(\frac\pi2\) et \(\frac{3\pi}2\).`], S`\(2\)`),
    q("intervalle", S`Sur quel intervalle \(y=\cos x\) est-elle croissante ?`, choice([S`\((\pi,2\pi)\)`, S`\((0,\pi)\)`, S`\(\left(0,\frac\pi2\right)\)`, S`\(\left(\frac\pi2,\pi\right)\)`], 0),
      "Elle monte à partir de son minimum en π.", [S`\((\pi,2\pi)\).`], S`\((\pi,2\pi)\)`),
  ]),

  ...hard([
    ["Compter les solutions", S`Combien de solutions l'équation \(\sin x=0.3\) a-t-elle sur \([-2\pi,2\pi]\) ? Explique à l'aide du graphique, sans résoudre.`,
      [S`La droite \(y=0.3\) se situe entre \(-1\) et \(1\), donc elle coupe chaque cycle complet deux fois.`, S`L'intervalle \([-2\pi,2\pi]\) contient deux cycles complets.`],
      S`\(4\) solutions`,
      plane(TG([[Math.sin, "violet"], [() => 0.3, "green"]], W))],
    ["La pente en un point", S`Estime le taux de variation instantané de \(y=\sin x\) en \(x=0\), et de \(y=\tan x\) en \(x=\frac\pi4\), à l'aide d'un petit intervalle.`,
      [S`\(\frac{\sin0.001-\sin0}{0.001}\approx1\).`, S`\(\frac{\tan(\pi/4+0.001)-\tan(\pi/4)}{0.001}\approx2.00\).`],
      S`environ \(1\) et environ \(2\)`,
      tanFig({ xmin: -1.4, xmax: 1.4, ymin: -3, ymax: 3 }, [lab(PI / 4, 1, "(π/4, 1)")])],
  ], [
    q("difficile", S`Trouve le taux de variation moyen de \(y=\sin x\) sur \(\left[0,\frac\pi6\right]\) (3 décimales).`, num(0.955, 0.002),
      "Variation verticale sur variation horizontale.", [S`\(\frac{0.5}{\pi/6}=\frac3\pi\).`], S`\(0.955\)`),
    q("difficile", S`Évalue \(\tan\left(\dfrac{5\pi}4\right)\) en utilisant la période de la tangente.`, num(1),
      "Soustrais π.", [S`\(\tan\frac\pi4\).`], S`\(1\)`),
    q("difficile", S`Trouve la somme des zéros de \(y=\cos x\) sur \([0,2\pi]\) (2 décimales).`, num(6.28, 0.01),
      "π/2 et 3π/2.", [S`\(2\pi\).`], S`\(6.28\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'amplitude de la tangente n'est-elle pas définie ?", "Elle n'a ni maximum ni minimum : elle prend toutes les valeurs réelles."],
      ["Pourquoi la tangente se répète-t-elle tous les π ?", "Un demi-tour change le signe du sinus et du cosinus, donc leur quotient reste le même."],
      ["Quel est le lien avec le cercle trigonométrique ?", "Le sinus est la hauteur du point mobile et le cosinus est sa position horizontale."],
      ["Quelles fonctions présentent une symétrie ?", "Le cosinus est pair; le sinus et la tangente sont impairs."],
      ["Pourquoi les taux de variation sont-ils utiles ici ?", "La pente indique à quelle vitesse la vague change; elle est la plus grande sur l'axe et vaut 0 aux sommets."],
    ],
    summary: [
      "sin et cos : période 2π, amplitude 1, image [−1, 1].",
      "tan : période π, image tous les nombres réels, asymptotes en x = π/2 + nπ.",
      "Cinq points clés suffisent pour tracer un cycle.",
      "La pente de sin x est la plus grande à ses zéros et vaut 0 à ses sommets.",
    ],
    next: "En 5.2, on trace les fonctions trigonométriques inverses csc, sec et cot.",
  }),
];
