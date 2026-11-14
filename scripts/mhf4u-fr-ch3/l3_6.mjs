// MHF4U-FR 3.6 — Révision du chapitre 3 : réciproques de fonctions linéaires et quadratiques, (ax + b)/(cx + d),
// équations et inéquations rationnelles, modèles rationnels. (c, d = coefficients de (ax + b)/(cx + d) : aucune permutation.)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "3.6 Révision du chapitre 3";
export const ID = lessonId(3, 6);

const S = String.raw;
const V = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 3 — Fonctions rationnelles",
    overview: S`Cette page rassemble le chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des exemples à plusieurs étapes qui combinent plusieurs habiletés, une pratique variée, une liste de vérification et un niveau difficile. Esquisse chaque graphique avant de regarder la figure, et utilise l'outil d'exploration pour vérifier les inéquations.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "esquisser les réciproques de fonctions linéaires et quadratiques;",
      "analyser complètement (ax + b)/(cx + d);",
      "résoudre des équations et des inéquations rationnelles;",
      "résoudre des problèmes à l'aide de modèles rationnels.",
    ],
    curriculum: "C2.1–C2.3, C3.5–C3.7, C4.1, C4.2, D1.9 (tout le chapitre)",
    prior: [
      [S`AV de \(\frac1{x+4}\)?`, S`\(x=-4\).`],
      [S`Point tournant de \(\frac1{x^2+2}\)?`, S`\(\left(0,\tfrac12\right)\).`],
      [S`AH de \(\frac{3x+1}{x-2}\)?`, S`\(y=3\).`],
    ],
    words: [
      ["Asymptote verticale", "zéro du dénominateur (sans facteur commun)", ""],
      ["Asymptote horizontale", "y = 0 pour 1/f; y = a/c pour (ax + b)/(cx + d)", ""],
      ["Racine étrangère", "ne respecte pas une restriction", ""],
      ["Valeurs critiques", "zéros du numérateur et du dénominateur", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["3.1 1/(kx + c)", "zéro → AV; f = ±1 → points invariants", "\\(\\frac1{x-3}\\) : AV 3, (4, 1)", "aucune abscisse à l'origine"],
    ["3.2 1/quadratique", "0, 1 ou 2 AV; sommet (h, k) → (h, 1/k)", "\\(\\frac1{x^2-4}\\) : max (0, −¼)", "1/k, pas k"],
    ["3.3 (ax + b)/(cx + d)", "AV −d/c, AH a/c", "\\(\\frac{x+2}{x-1}\\) : x = 1, y = 1", "facteur commun → trou"],
    ["3.4 Équations, inéquations", "éliminer les dénominateurs / une seule fraction + tableau de signes", "\\(\\frac{x-4}{x+2}\\ge0\\)", "exclure les zéros du dénominateur"],
    ["3.5 Modèles", "asymptotes en contexte; taux de variation", "\\(8+\\frac{500}x\\)", "coût moyen ≠ coût total"],
  ])),

  section("📌 Explore", S`<p>Utilise le solveur rationnel pour vérifier les exemples d'inéquations et les problèmes du niveau difficile.</p>`),

  widget("rationalSolver", { init: { a: 1, b: 2, c: 1, d: -3, k: 2, op: "≤" } }),

  section("📌 Vue d'ensemble", keyIdea(S`Chaque fonction rationnelle de ce chapitre est construite à partir d'un dénominateur qui peut valoir 0. Ses zéros donnent les asymptotes verticales (et des valeurs critiques qui ne sont jamais incluses); le comportement pour de grandes valeurs de \(|x|\) donne l'asymptote horizontale; et le signe du numérateur et du dénominateur sur chaque intervalle permet de résoudre les inéquations.`)),

  examples([
    ["Réciproque d'une droite", S`Esquisse \(g(x)=\dfrac1{3x-6}\) en indiquant les asymptotes et les points invariants.`,
      [S`<b>Asymptotes.</b> \(3x-6=0\) donne l'AV \(x=2\). L'AH est \(y=0\).`,
        S`<b>Points invariants.</b> \(3x-6=1\) donne \(x=\tfrac73\), à la hauteur 1. \(3x-6=-1\) donne \(x=\tfrac53\), à la hauteur \(-1\).`,
        S`<b>Signes.</b> \(g\) a le signe de la droite : négative à gauche de 2 et positive à droite de 2.`,
        S`<b>Vérification.</b> \(g(3)=\frac13\), et la droite y a la hauteur 3 : réciproques ✓`],
      S`AV \(x=2\); points invariants \(\left(\tfrac73,1\right)\), \(\left(\tfrac53,-1\right)\)`,
      plane({ view: V, curves: [{ f: (x) => 3 * x - 6, color: "blue" }, ...rat((x) => 1 / (3 * x - 6), [2], V)], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 7 / 3, y: 1, color: "green" }, { x: 5 / 3, y: -1, color: "green" }], step: { x: 1, y: 1 } })],
    ["Réciproque d'une fonction quadratique", S`Trouve les asymptotes et le point tournant de \(g(x)=\dfrac1{x^2-x-2}\).`,
      [S`<b>Factorise.</b> \(x^2-x-2=(x-2)(x+1)\). Les AV sont donc \(x=-1\) et \(x=2\). L'AH est \(y=0\).`,
        S`<b>Sommet du dénominateur.</b> L'axe est à mi-chemin : \(x=\frac12\). Alors \(f\left(\frac12\right)=\frac14-\frac12-2=-\frac94\).`,
        S`<b>Point tournant.</b> La réciproque de \(-\frac94\) est \(-\frac49\) : un maximum local en \(\left(\frac12,-\frac49\right)\).`,
        S`<b>Vérification.</b> \(g(0)=-\frac12\), qui est sous \(-\frac49\) ✓`],
      S`AV \(x=-1, 2\); max local \(\left(0.5,-0.\overline{4}\right)\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -3, ymax: 3 }, curves: rat((x) => 1 / (x * x - x - 2), [-1, 2], { xmin: -4, xmax: 5 }), vlines: [{ x: -1, color: "red", dash: true }, { x: 2, color: "red", dash: true }], points: [{ x: 0.5, y: -4 / 9, label: "(0.5, −0.44)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une analyse complète", S`Analyse \(f(x)=\dfrac{2x-3}{x+1}\).`,
      [S`<b>Asymptotes.</b> AV \(x=-1\). L'AH est le rapport des coefficients dominants : \(y=2\).`,
        S`<b>Coordonnées à l'origine.</b> \(2x-3=0\) donne \(x=1.5\). \(f(0)=-3\).`,
        S`<b>Domaine et image.</b> \(x\ne-1\) et \(y\ne2\).`,
        S`<b>Comportement.</b> Réécris \(f(x)=2-\frac5{x+1}\). Le deuxième terme est croissant sur chaque branche, donc \(f\) est croissante sur chaque branche.`,
        S`<b>Vérification.</b> \(f(4)=\frac55=1\), et \(2-\frac55=1\) ✓`],
      S`AV \(x=-1\), AH \(y=2\), \((1.5,0)\), \((0,-3)\)`,
      plane({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 10 }, curves: rat((x) => (2 * x - 3) / (x + 1), [-1], { xmin: -8, xmax: 8 }), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [{ x: 1.5, y: 0, color: "blue" }, { x: 0, y: -3, color: "green" }], step: { x: 1, y: 2 } })],
    ["Une inéquation", S`Résous \(\dfrac{x+2}{x-3}\le2\).`,
      [S`<b>Un membre nul.</b> \(\dfrac{x+2}{x-3}-2\le0\), donc \(\dfrac{x+2-2(x-3)}{x-3}\le0\).`,
        S`<b>Simplifie.</b> \(\dfrac{8-x}{x-3}\le0\). Multiplie par \(-1\) et inverse le sens : \(\dfrac{x-8}{x-3}\ge0\).`,
        S`<b>Tableau.</b> Valeurs critiques 3 (exclue) et 8 (incluse). Signes : \(+,-,+\).`,
        S`<b>Lecture.</b> \(x\lt3\) ou \(x\ge8\).`,
        S`<b>Vérification.</b> \(x=5\) : \(\frac72\le2\) est faux ✓. \(x=8\) : \(2\le2\) ✓. \(x=0\) : \(-\frac23\le2\) ✓`],
      S`\(x\lt3\) ou \(x\ge8\)`,
      plane({ view: { xmin: -4, xmax: 12, ymin: -8, ymax: 10 }, curves: [...rat((x) => (x + 2) / (x - 3), [3], { xmin: -4, xmax: 12 }), { f: () => 2, color: "green" }], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 8, y: 2, label: "(8, 2)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Coût moyen sous une cible", S`\(A(x)=\dfrac{1200+15x}{x}\). Pour combien d'articles le coût moyen est-il inférieur à 20 dollars?`,
      [S`<b>Mise en équation.</b> \(\frac{1200+15x}x\lt20\).`,
        S`<b>Élimine le dénominateur.</b> Ici \(x>0\), puisque c'est un nombre d'articles, donc multiplier garde le sens : \(1200+15x\lt20x\).`,
        S`<b>Résous.</b> \(1200\lt5x\), donc \(x>240\).`,
        S`<b>Vérification.</b> \(A(240)=5+15=20\), et \(A(300)=4+15=19\lt20\) ✓`],
      "plus de 240 articles",
      plane({ view: { xmin: 0, xmax: 500, ymin: 10, ymax: 40 }, curves: [{ f: (x) => 15 + 1200 / x, a: 50, b: 500, color: "violet" }], lines: [{ m: 0, b: 20, color: "amber", dash: true }, { m: 0, b: 15, color: "red", dash: true }], points: [{ x: 240, y: 20, label: "(240, 20)", color: "amber" }], step: { x: 50, y: 5 }, xlabel: "x", ylabel: "A" })],
  ]),

  practice([
    q("asymptote", S`Trouve l'asymptote verticale de \(y=\dfrac1{5-x}\). Donne la valeur de x.`, num(5),
      "5 − x = 0.", [S`\(x=5\).`], S`\(5\)`),
    q("maximum", S`Quelle est la valeur maximale de \(y=\dfrac1{x^2+4}\)?`, num(0.25, 0.0001),
      "Le plus petit dénominateur est 4.", [S`\(\frac14\).`], S`\(0.25\)`),
    q("asymptote horizontale", S`Trouve l'asymptote horizontale de \(y=\dfrac{5x+1}{x-2}\).`, num(5),
      "a/c.", [S`\(\frac51\).`], S`\(5\)`),
    q("équation", S`Résous \(\dfrac6{x-1}=3\).`, num(3),
      "6 = 3(x − 1).", [S`\(x-1=2\).`], S`\(3\)`),
    q("inéquation", S`Résous \(\dfrac{x+1}{x-2}>0\).`, choice([S`\(x\lt-1\) ou \(x>2\)`, S`\(-1\lt x\lt2\)`, S`\(x>2\)`, S`\(x>-1\)`], 0),
      "Valeurs critiques −1 et 2.", ["Signes +, −, +."], S`\(x\lt-1\) ou \(x>2\)`),
  ]),

  section("📌 Suis-je prêt pour le test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "Je peux esquisser y = 1/(kx + c) avec ses asymptotes et ses points invariants."],
      ["3.2", "Je peux esquisser la réciproque d'une fonction quadratique ayant 0, 1 ou 2 asymptotes."],
      ["3.3", "Je peux trouver les asymptotes, les coordonnées à l'origine et les trous de (ax + b)/(cx + d)."],
      ["3.4", "Je peux résoudre des équations rationnelles (en rejetant les racines étrangères) et des inéquations à l'aide de tableaux de signes."],
      ["3.5", "Je peux construire et interpréter des modèles rationnels et leurs taux de variation."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Trouver la fonction, puis résoudre", S`\(f(x)=\dfrac{ax+1}{x+b}\) a l'AV \(x=-2\) et passe par \(\left(2,\tfrac34\right)\). Trouve \(f\), puis résous \(f(x)\lt\tfrac12\).`,
      [S`\(b=2\); \(\frac{2a+1}{4}=\frac34\Rightarrow a=1\) : \(f(x)=\frac{x+1}{x+2}\).`, S`\(\frac{x+1}{x+2}-\frac12\lt0\Rightarrow\frac{2x+2-x-2}{2(x+2)}\lt0\Rightarrow\frac{x}{x+2}\lt0\).`, S`Valeurs critiques \(-2\), \(0\) : signes +, −, +.`],
      S`\(f(x)=\dfrac{x+1}{x+2}\); \(-2\lt x\lt0\)`,
      plane({ view: V, curves: [...rat((x) => (x + 1) / (x + 2), [-2], V), { f: () => 0.5, color: "green" }], vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 2, y: 0.75, label: "(2, ¾)", color: "blue" }, { x: 0, y: 0.5, label: "(0, ½)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une famille de réciproques", S`Pour \(g(x)=\dfrac1{x^2-4x+k}\) : pour quelle valeur de \(k\) y a-t-il exactement une asymptote verticale? Donne l'image quand \(k=5\).`,
      [S`Une seule AV quand \(x^2-4x+k\) a un zéro double : discriminant \(16-4k=0\Rightarrow k=4\).`, S`\(k=5\) : \((x-2)^2+1\ge1\Rightarrow0\lt g\le1\).`],
      S`\(k=4\); image \(0\lt y\le1\)`],
  ], [
    q("difficile", S`Combien d'asymptotes verticales \(y=\dfrac1{x^2+2x-8}\) a-t-elle?`, num(2),
      "Factorise.", [S`\((x+4)(x-2)\).`], S`\(2\)`),
    q("difficile", S`Résous \(\dfrac{x^2}{x-1}=\dfrac1{x-1}\).`, num(-1),
      "Attention à la restriction.", [S`\(x^2=1\Rightarrow x=\pm1\), mais \(x\ne1\).`], S`\(-1\)`),
    q("difficile", S`Combien d'entiers vérifient \(\dfrac{x-3}{x+1}\le0\)?`, num(4),
      "−1 < x ≤ 3.", [S`\(0,1,2,3\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour ce test?", "Fais la pratique variée et le niveau difficile sans tes notes, puis reviens à l'outil d'exploration pour chaque erreur."],
      ["Quelles sont les erreurs les plus fréquentes?", "Inclure un zéro du dénominateur dans une inéquation, oublier les restrictions, utiliser b/d au lieu de a/c pour l'asymptote horizontale, et multiplier une inéquation par une expression variable."],
      ["Quelle démarche dois-je montrer?", "Donne les restrictions, montre la forme à une seule fraction et un tableau de signes, et indique les asymptotes et les coordonnées à l'origine sur les esquisses."],
      ["Quelle est la façon la plus rapide d'esquisser une fonction rationnelle?", "Les asymptotes d'abord (en pointillés), puis les coordonnées à l'origine, puis un point d'essai dans chaque région."],
      ["Comment ce chapitre mène-t-il au chapitre 4?", "Le chapitre 4 passe à la trigonométrie en radians; les expressions rationnelles reviennent dans des identités comme tan x = sin x / cos x."],
    ],
    summary: [
      "Zéros du dénominateur → asymptotes / valeurs exclues.",
      "AH : 0 pour 1/f, a/c pour (ax + b)/(cx + d).",
      "Équations : éliminer les dénominateurs; inéquations : tableau de signes.",
      "Modèles : lire les asymptotes et les taux selon le contexte.",
    ],
    next: "Fais le test du chapitre 3. Le chapitre 4 commence la trigonométrie en radians.",
  }),
];
