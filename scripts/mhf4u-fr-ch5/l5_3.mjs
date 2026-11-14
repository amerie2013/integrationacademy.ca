// MHF4U-FR 5.3 — Fonctions sinusoïdales : y = a sin(k(x − c)) + d et y = a cos(k(x − c)) + d en radians
// (notation française : c = déphasage / translation horizontale, d = translation verticale), caractéristiques,
// esquisse et équations à partir de graphiques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { TG, PI } from "./trigfig.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "5.3 Fonctions sinusoïdales";
export const ID = lessonId(5, 3);

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const G = (f, view, points = [], extra = {}) => plane(TG([[f, "violet"]], view, points, extra));
export const blocks = () => [
  intro({
    icon: "🎚️",
    title: "Fonctions sinusoïdales",
    overview: S`Toute sinusoïde est une courbe sinus ou cosinus qui a été étirée et translatée : \(y=a\sin(k(x-c))+d\). Chaque paramètre contrôle une caractéristique. \(a\) fixe l'amplitude, \(k\) fixe la période par \(\frac{2\pi}k\), \(c\) fait glisser la courbe horizontalement et \(d\) déplace l'axe vers le haut ou vers le bas. Lire les paramètres à partir d'une équation, ou d'un graphique, est l'habileté centrale de cette leçon.`,
    goals: [
      "donner l'amplitude, la période, le déphasage et la translation verticale à partir d'une équation;",
      "mettre \\(k\\) en évidence avant de lire le déphasage;",
      "esquisser un cycle à l'aide de points clés;",
      "trouver une équation à partir d'un graphique ou de caractéristiques données;",
      "écrire une même courbe à l'aide du sinus ou du cosinus.",
    ],
    curriculum: "B2.4 (déterminer l'amplitude, la période et le déphasage), B2.5 (esquisser des graphiques transformés), B2.6 (équations à partir de graphiques)",
    prior: [
      [S`Période de \(\sin x\) ?`, S`\(2\pi\).`],
      [S`Maximum de \(2\sin x+1\) ?`, S`\(3\).`],
      [S`Factorise \(2x-\pi\).`, S`\(2\left(x-\frac\pi2\right)\).`],
    ],
    words: [
      ["Amplitude", "\\(|a|\\)", "la moitié de max − min"],
      ["Période", "\\(\\frac{2\\pi}{|k|}\\)", ""],
      ["Déphasage", "translation horizontale c", "vers la droite si c > 0"],
      ["Axe de la courbe", "\\(y=d\\)", "à mi-chemin entre le max et le min"],
    ],
  }),

  section("📌 Le rôle de chaque paramètre", S`
  ${table(["Paramètre", "Effet", "Pour y = 3 sin(2(x − π/4)) + 1"], [
    ["|a|", "amplitude", "3"],
    ["2π/|k|", "période", "π"],
    ["c", "déphasage", "π/4 vers la droite"],
    ["d", "axe y = d", "y = 1"],
    ["d ± |a|", "max, min", "4, −2"],
  ])}
  ${G((x) => 3 * Math.sin(2 * (x - PI / 4)) + 1, { xmin: -3.5, xmax: 7, ymin: -3, ymax: 5 }, [lab(PI / 4, 1, "début (π/4, 1)")])}
  ${keyIdea(S`Mets toujours \(k\) en évidence d'abord. \(y=\sin(2x+\pi)\) s'écrit \(y=\sin\left(2\left(x+\frac\pi2\right)\right)\) : le déphasage est de \(\frac\pi2\) vers la gauche, et non de \(\pi\) vers la gauche.`)}`),

  section("📌 Explorer", S`<p>Déplace un curseur à la fois : \(a\) change la hauteur, \(b\) (le \(k\) de cette page) comprime la courbe, \(c\) la fait glisser horizontalement et \(d\) la soulève. Les curseurs \(c\) et \(d\) jouent exactement le même rôle que \(c\) et \(d\) dans cette page. Essaie d'obtenir \(y=1.5\sin(3x)-1\).</p>`),

  widget("ibSinusoid", { init: [1.5, 3, 0, -1, 0] }),

  section("📌 Esquisser un cycle", S`
  <p>Commence en \(x=c\) et place les points à chaque quart de période. Pour le sinus, les hauteurs suivent le motif axe, max, axe, min, axe. Pour le cosinus, c'est max, axe, min, axe, max. Si \(a\lt0\), le motif est réfléchi.</p>
  ${watchOut([
    "La période est 2π/k, pas k. Plus k est grand, plus la courbe est étroite.",
    "Mets k en évidence avant de lire c.",
    "Dans y = sin(x − π/3), la translation se fait vers la DROITE.",
    "d ne change pas l'amplitude; a ne change pas l'axe.",
    "Une même courbe admet une infinité d'équations.",
  ])}`),

  examples([
    ["Lire les caractéristiques", S`Donne l'amplitude, la période, le déphasage et l'image de \(y=-2\cos\left(\dfrac12x\right)+3\).`,
      [S`<b>Forme.</b> \(y=a\cos(k(x-c))+d\), avec \(a=-2\), \(k=\frac12\), \(c=0\), \(d=3\).`,
        S`<b>Amplitude.</b> \(|a|=2\). Le signe négatif réfléchit la courbe, qui commence donc à un minimum.`,
        S`<b>Période.</b> \(\dfrac{2\pi}{k}=\dfrac{2\pi}{1/2}=4\pi\).`,
        S`<b>Axe et image.</b> L'axe est \(y=3\), donc \(3-2\le y\le3+2\).`,
        S`<b>Vérification.</b> \(x=0\) : \(-2+3=1\), le minimum. \(x=2\pi\) : \(-2\cos\pi+3=5\), le maximum ✓`],
      S`amplitude 2, période \(4\pi\), aucun déphasage, image \([1,5]\)`,
      G((x) => -2 * Math.cos(x / 2) + 3, { xmin: -1, xmax: 13, ymin: -1, ymax: 6 }, [lab(0, 1, "(0, 1)"), lab(2 * PI, 5, "(2π, 5)")])],
    ["Mettre en évidence d'abord", S`Trouve le déphasage de \(y=\sin(2x-\pi)\).`,
      [S`<b>Règle.</b> Le déphasage se lit sur la forme \(k(x-c)\), donc il faut mettre \(k\) en évidence.`,
        S`<b>Mise en évidence.</b> \(2x-\pi=2\left(x-\frac\pi2\right)\), donc \(c=\frac\pi2\).`,
        S`<b>Erreur fréquente.</b> Le déphasage n'est pas \(\pi\). Le \(\pi\) est divisé par \(k\).`,
        S`<b>Vérification.</b> Le cycle commence là où l'expression entre parenthèses vaut 0 : \(2x-\pi=0\) donne \(x=\frac\pi2\) ✓`],
      S`\(\frac\pi2\) vers la droite`,
      plane(TG([[Math.sin, "gray"], [(x) => Math.sin(2 * x - PI), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))],
    ["Les points clés", S`Donne les points clés d'un cycle de \(y=3\sin\left(x-\dfrac\pi2\right)+1\).`,
      [S`<b>Caractéristiques.</b> Amplitude 3, axe \(y=1\), période \(2\pi\), déphasage de \(\frac\pi2\) vers la droite.`,
        S`<b>Pas.</b> Un quart de période vaut \(\frac\pi2\), à partir de \(x=\frac\pi2\).`,
        S`<b>Tableau.</b> ${tv(["\\(x\\)", "\\(\\frac\\pi2\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}2\\)", "\\(2\\pi\\)", "\\(\\frac{5\\pi}2\\)"], ["position", "axe", "max", "axe", "min", "axe"], ["\\(y\\)", "\\(1\\)", "\\(4\\)", "\\(1\\)", "\\(-2\\)", "\\(1\\)"])}`,
        S`<b>Vérification.</b> \(x=\pi\) : \(3\sin\frac\pi2+1=4\) ✓`],
      S`max \((\pi,4)\), min \((2\pi,-2)\)`,
      G((x) => 3 * Math.sin(x - PI / 2) + 1, { xmin: 0, xmax: 9, ymin: -3, ymax: 5 }, [lab(PI, 4, "(π, 4)"), lab(2 * PI, -2, "(2π, −2)", "red")])],
    ["Une équation à partir d'un graphique", S`Une sinusoïde a un maximum en \(\left(\dfrac\pi4,5\right)\) et le minimum suivant en \(\left(\dfrac{3\pi}4,1\right)\). Écris une équation à l'aide du cosinus.`,
      [S`<b>Axe.</b> À mi-chemin entre les extremums : \(d=\frac{5+1}2=3\).`,
        S`<b>Amplitude.</b> \(a=\frac{5-1}2=2\).`,
        S`<b>Période.</b> Du max au min suivant, il y a une demi-période : \(\frac{3\pi}4-\frac\pi4=\frac\pi2\). La période est donc \(\pi\) et \(k=\frac{2\pi}\pi=2\).`,
        S`<b>Déphasage.</b> Le cosinus commence à un max, donc \(c=\frac\pi4\).`,
        S`<b>Vérification.</b> \(x=\frac{3\pi}4\) : \(2\cos\left(2\cdot\frac\pi2\right)+3=2\cos\pi+3=1\) ✓`],
      S`\(y=2\cos\left(2\left(x-\frac\pi4\right)\right)+3\)`,
      G((x) => 2 * Math.cos(2 * (x - PI / 4)) + 3, { xmin: -1, xmax: 5, ymin: 0, ymax: 6 }, [lab(PI / 4, 5, "max"), lab((3 * PI) / 4, 1, "min", "red")])],
    ["Une période sans π", S`Une courbe a une amplitude de 4, une période de 12 et l'axe \(y=7\), et elle part de l'axe en montant en \(x=0\). Écris une équation.`,
      [S`<b>k.</b> \(k=\dfrac{2\pi}{\text{période}}=\dfrac{2\pi}{12}=\dfrac\pi6\).`,
        S`<b>Quelle courbe.</b> Le sinus part de l'axe en montant, donc aucun déphasage n'est nécessaire.`,
        S`<b>Assembler.</b> \(a=4\), \(d=7\) : \(y=4\sin\left(\frac\pi6x\right)+7\).`,
        S`<b>Vérification.</b> Un quart de période plus tard, \(x=3\) : \(4\sin\frac\pi2+7=11\), qui est le max ✓`],
      S`\(y=4\sin\left(\frac\pi6x\right)+7\)`,
      G((x) => 4 * Math.sin((PI / 6) * x) + 7, { xmin: 0, xmax: 24, ymin: 0, ymax: 12 }, [lab(3, 11, "(3, 11)")], { step: { x: 3, y: 2 } })],
  ]),

  practice([
    q("amplitude", S`Quelle est l'amplitude de \(y=-5\sin3x+2\) ?`, num(5),
      "|a|.", [S`\(5\).`], S`\(5\)`),
    q("période", S`Trouve la période de \(y=\cos\left(\dfrac\pi4x\right)\).`, num(8),
      "2π/k.", [S`\(\frac{2\pi}{\pi/4}=8\).`], S`\(8\)`),
    q("déphasage", S`Quel est le déphasage de \(y=\sin(3x+\pi)\) ?`, choice([S`\(\frac\pi3\) vers la gauche`, S`\(\pi\) vers la gauche`, S`\(\frac\pi3\) vers la droite`, S`\(\pi\) vers la droite`], 0),
      "Mets 3 en évidence.", [S`\(3\left(x+\frac\pi3\right)\).`], S`\(\frac\pi3\) vers la gauche`),
    q("maximum", S`Quel est le maximum de \(y=4\cos2x-1\) ?`, num(3),
      "d + |a|.", [S`\(-1+4\).`], S`\(3\)`),
    q("axe", S`Une courbe a un max de 9 et un min de 1. Quelle est la valeur de \(d\) ?`, num(5),
      "Fais la moyenne des deux.", [S`\(\frac{9+1}2\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Deux équations pour une même courbe", S`Écris \(y=2\sin\left(x+\dfrac\pi6\right)\) sous la forme d'une fonction cosinus.`,
      [S`Le maximum du sinus se trouve là où \(x+\frac\pi6=\frac\pi2\) : \(x=\frac\pi3\).`, S`Un cosinus dont le max est en \(x=\frac\pi3\) est \(2\cos\left(x-\frac\pi3\right)\).`, S`Vérification en \(x=0\) : \(2\sin\frac\pi6=1\) et \(2\cos\frac\pi3=1\).`],
      S`\(y=2\cos\left(x-\frac\pi3\right)\)`,
      G((x) => 2 * Math.sin(x + PI / 6), { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }, [lab(PI / 3, 2, "(π/3, 2)")])],
    ["Les caractéristiques à partir de conditions", S`\(y=a\sin(kx)+d\), avec \(a,k>0\), a une période de \(\dfrac{2\pi}3\) et l'image \([-1,7]\). Trouve \(a\), \(k\), \(d\) et la première valeur positive de \(x\) où \(y=7\).`,
      [S`\(k=3\); \(d=3\); \(a=4\).`, S`Le max se trouve là où \(3x=\frac\pi2\) : \(x=\frac\pi6\).`],
      S`\(y=4\sin3x+3\); \(x=\frac\pi6\)`,
      G((x) => 4 * Math.sin(3 * x) + 3, { xmin: -1, xmax: 4.5, ymin: -2, ymax: 8 }, [lab(PI / 6, 7, "(π/6, 7)")])],
  ], [
    q("difficile", S`Une sinusoïde a un max en \(x=2\) et le min suivant en \(x=5\). Trouve \(k\) (3 décimales).`, num(1.047, 0.002),
      "Une demi-période vaut 3.", [S`Période 6; \(k=\frac{2\pi}6=\frac\pi3\).`], S`\(1.047\)`),
    q("difficile", S`Évalue \(y=3\cos\left(2\left(x-\dfrac\pi3\right)\right)+1\) en \(x=\dfrac\pi3\).`, num(4),
      "cos 0 = 1.", [S`\(3+1\).`], S`\(4\)`),
    q("difficile", S`Combien de maximums \(y=\sin4x\) a-t-elle sur \([0,2\pi]\) ?`, num(4),
      "Période π/2.", [S`\(\frac{2\pi}{\pi/2}=4\) cycles.`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi k n'est-il pas la période ?", "k compte le nombre de cycles sur 2π. La période est la longueur d'un cycle, 2π/k."],
      ["Lequel dois-je utiliser, le sinus ou le cosinus ?", "Celui qui correspond à un point bien visible : le cosinus commence à un max, et le sinus part de l'axe en montant."],
      ["Pourquoi mettre k en évidence ?", "La forme sin(k(x − c)) montre c directement : x doit valoir c pour que le cycle commence."],
      ["Et si a est négatif ?", "La courbe est réfléchie par rapport à son axe : un max devient un min."],
      ["Comment vérifier une équation ?", "Remplace x par l'abscisse d'un max, d'un min et d'un point sur l'axe."],
    ],
    summary: [
      "y = a sin(k(x − c)) + d.",
      "Amplitude |a|, période 2π/|k|, déphasage c, axe y = d.",
      "Max et min : d ± |a|.",
      "Mets k en évidence avant de lire c.",
    ],
    next: "En 5.4, on résout des équations trigonométriques.",
  }),
];
