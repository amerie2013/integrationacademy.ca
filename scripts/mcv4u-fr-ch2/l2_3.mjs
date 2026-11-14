// MCV4U-FR 2.3 — Vitesse, accélération et dérivées secondes : v = s′, a = v′ = s″, au repos, sens du mouvement,
// accélérer / ralentir, mouvement vertical sous l'effet de la gravité, déplacement et distance totale, dérivées d'ordre supérieur
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.3 Vitesse, accélération et dérivées secondes";
export const ID = lessonId(2, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Vitesse, accélération et dérivées secondes",
    overview: S`Si \(s(t)\) est la position d'un objet qui se déplace sur une droite, sa <strong>vitesse</strong> est le taux de variation de la position, \(v(t)=s'(t)\), et son <strong>accélération</strong> est le taux de variation de la vitesse, \(a(t)=v'(t)=s''(t)\) : c'est la <em>dérivée seconde</em>. Le signe de \(v\) indique le sens du mouvement; l'objet est au repos quand \(v=0\); et il accélère quand \(v\) et \(a\) ont le même signe. On peut dériver encore et encore : \(f'''\), \(f^{(4)}\), et ainsi de suite.`,
    goals: [
      "trouver la vitesse et l'accélération à partir de la position;",
      "déterminer quand un objet est au repos et dans quel sens il se déplace;",
      "déterminer quand un objet accélère ou ralentit;",
      "résoudre des problèmes de mouvement vertical;",
      "distinguer le déplacement de la distance totale; trouver des dérivées d'ordre supérieur.",
    ],
    curriculum: "B2.1 (établir des liens entre les représentations graphiques ou algébriques des dérivées et des applications concrètes : position, vitesse, accélération), B2.2 (résoudre des problèmes de taux de variation liés au mouvement, y compris avec des dérivées secondes)",
    prior: [
      [S`Dérivée de \(t^3-6t^2\)?`, S`\(3t^2-12t\).`],
      [S`Résous \(3t^2-12t+9=0\).`, S`\(t=1, 3\).`],
      [S`Unités du taux de variation de m/s par seconde?`, S`m/s².`],
    ],
    words: [
      ["Vitesse", "\\(v(t)=s'(t)\\); signe = sens du mouvement", "m/s"],
      ["Module de la vitesse", "\\(|v(t)|\\)", ""],
      ["Accélération", "\\(a(t)=v'(t)=s''(t)\\)", "m/s²"],
      ["Dérivée seconde", "la dérivée de la dérivée, \\(f''\\) ou \\(\\frac{d^2y}{dx^2}\\)", ""],
    ],
  }),

  section("📌 Lire le mouvement", S`
  ${table(["Condition", "Signification"], [
    ["v > 0 / v < 0", "se déplace dans le sens positif / négatif"],
    ["v = 0 et change de signe", "au repos et fait demi-tour"],
    ["v et a de même signe", "accélère"],
    ["v et a de signes contraires", "ralentit"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 4.5, ymin: -6, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, b: 4.5, color: "violet" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 4.5, color: "blue" }, { f: (t) => 6 * t - 12, a: 0, b: 4.5, color: "amber" }], points: [{ x: 1, y: 4, label: "demi-tour (t = 1)", color: "red" }, { x: 3, y: 0, label: "demi-tour (t = 3)", color: "red" }], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "" }, "s = t³ − 6t² + 9t (violet), v = s′ (bleu), a = s″ (ambre).")}
  ${keyIdea(S`Le module de la vitesse augmente quand la vitesse et l'accélération sont orientées dans le même sens. La distance totale parcourue additionne les distances entre les points de demi-tour; le déplacement est simplement \(s(\text{fin})-s(\text{début})\).`)}`),

  section("📌 Explore", S`<p>Déplace le curseur du temps. Le point sur la droite est la particule; la flèche montre sa vitesse. Compare les trois graphiques et l'indication « accélère / ralentit ».</p>`),

  widget("motionLab", { init: { cs: [-1, 4.5, 0, 2], t: 0.5 } }),

  section("📌 Mouvement vertical", S`
  <p>Près de la surface de la Terre, la hauteur est modélisée par \(h(t)=-4.9t^2+v_0t+h_0\) (mètres, secondes) : la vitesse est \(v=-9.8t+v_0\) et l'accélération est la constante \(-9.8\) m/s². Le sommet de la trajectoire se trouve là où \(v=0\).</p>
  ${watchOut([
    "La vitesse peut être négative; son module ne peut pas l'être.",
    "Au repos signifie v = 0, et non s = 0.",
    "Accélérer dépend des signes de v et de a, pas du signe de a seulement.",
    "La distance totale exige les points de demi-tour; ne soustrais pas simplement les extrémités.",
    "Unités : position en m, vitesse en m/s, accélération en m/s².",
  ])}`),

  examples([
    ["v et a", S`Pour \(s(t)=t^3-6t^2+9t\) (m, s), trouve \(v\), \(a\) et les moments où l'objet est au repos.`,
      [S`\(v=3t^2-12t+9=3(t-1)(t-3)\); \(a=6t-12\).`, S`Au repos à \(t=1\) s et à \(t=3\) s.`],
      S`\(v=3(t-1)(t-3)\), \(a=6t-12\); au repos à 1 s et à 3 s`],
    ["Accélère ou ralentit", S`Pour le même objet, quand accélère-t-il?`,
      [S`\(v\) : + sur \((0,1)\), − sur \((1,3)\), + après 3. \(a\) : − avant 2, + après 2.`, S`Mêmes signes sur \((1,2)\) et \((3,\infty)\).`],
      S`il accélère pour \(1\lt t\lt2\) et \(t>3\); il ralentit pour \(0\lt t\lt1\) et \(2\lt t\lt3\)`],
    ["Une dérivée seconde", S`Trouve \(f''(x)\) pour \(f(x)=x^4-2x^3\).`,
      [S`\(f'=4x^3-6x^2\); \(f''=12x^2-12x\).`],
      S`\(f''(x)=12x^2-12x\)`],
    ["Une balle lancée vers le haut", S`La hauteur d'une balle est \(h(t)=-4.9t^2+19.6t+2\) m. Trouve sa hauteur maximale et sa vitesse quand elle touche le sol.`,
      [S`\(v=-9.8t+19.6=0\Rightarrow t=2\); \(h(2)=21.6\) m.`, S`\(h=0\) : \(t=\frac{19.6+\sqrt{19.6^2+39.2}}{9.8}\approx4.10\) s; \(v\approx-9.8(4.10)+19.6\approx-20.6\) m/s.`],
      S`21.6 m; environ \(-20.6\) m/s (vers le bas)`,
      plane({ view: { xmin: 0, xmax: 4.5, ymin: -1, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0, b: 4.1, color: "violet" }], points: [{ x: 2, y: 21.6, label: "max (2, 21.6)", color: "red" }, { x: 4.1, y: 0, label: "touche le sol t ≈ 4.10", color: "blue" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Déplacement et distance", S`Pour \(s(t)=t^2-4t\) m sur \([0,5]\) s, trouve le déplacement et la distance totale parcourue.`,
      [S`\(v=2t-4=0\) à \(t=2\). \(s(0)=0\), \(s(2)=-4\), \(s(5)=5\).`, S`Déplacement \(5-0=5\) m. Distance \(|{-4}-0|+|5-(-4)|=4+9=13\) m.`],
      S`déplacement 5 m; distance 13 m`,
      plane({ view: { xmin: -0.3, xmax: 5.5, ymin: -5, ymax: 6 }, curves: [{ f: (t) => t * t - 4 * t, a: 0, b: 5, color: "violet" }], points: [{ x: 0, y: 0, color: "blue" }, { x: 2, y: -4, label: "demi-tour en (2, −4)", color: "red" }, { x: 5, y: 5, label: "(5, 5)", color: "blue" }], step: { x: 1, y: 1 }, xlabel: "t (s)", ylabel: "s (m)" })],
  ]),

  practice([
    q("vitesse", S`Pour \(s(t)=t^3\) m, trouve \(v(2)\).`, num(12),
      "v = 3t².", [S`\(3(4)\).`], S`\(12\) m/s`),
    q("accélération", S`Pour \(s(t)=4t^2-3t\), trouve \(a(t)\).`, num(8),
      "Dérive deux fois.", [S`\(v=8t-3\), \(a=8\).`], S`\(8\) m/s²`),
    q("dérivée seconde", S`Trouve \(f''(x)\) pour \(f(x)=x^5\).`, expr("20*x^3"),
      "5x⁴, puis 20x³.", [S`\(20x^3\).`], S`\(20x^3\)`),
    q("au repos", S`Quand un objet tel que \(s(t)=t^2-6t\) est-il au repos?`, num(3),
      "v = 0.", [S`\(2t-6=0\).`], S`\(t=3\) s`),
    q("accélérer", S`Un objet a une vitesse négative et une accélération négative. Il :`, choice(["accélère", "ralentit", "est au repos", "se déplace vers la droite"], 0),
      "Mêmes signes.", ["Les deux sont négatives."], "accélère"),
  ]),

  ...hard([
    ["Distance totale avec deux demi-tours", S`Pour \(s(t)=2t^3-15t^2+24t\) m, \(t\ge0\), trouve la distance totale parcourue pendant les 5 premières secondes.`,
      [S`\(v=6t^2-30t+24=6(t-1)(t-4)\) : demi-tours à \(t=1\) et à \(t=4\).`, S`\(s(0)=0\), \(s(1)=11\), \(s(4)=-16\), \(s(5)=-5\).`, S`Distance \(11+27+11=49\) m.`],
      S`49 m`,
      plane({ view: { xmin: -0.2, xmax: 5.3, ymin: -18, ymax: 14 }, curves: [{ f: (t) => 2 * t ** 3 - 15 * t * t + 24 * t, a: 0, b: 5, color: "violet" }], points: [{ x: 1, y: 11, label: "(1, 11)", color: "red" }, { x: 4, y: -16, label: "(4, −16)", color: "red" }, { x: 5, y: -5, label: "(5, −5)", color: "blue" }], step: { x: 1, y: 4 }, xlabel: "t (s)", ylabel: "s (m)" })],
    ["Dérivées d'ordre supérieur", S`Trouve toutes les dérivées de \(f(x)=x^4-3x^3\) jusqu'à ce qu'elles deviennent nulles. Qu'est-ce qui est vrai pour un polynôme de degré \(n\)?`,
      [S`\(f'=4x^3-9x^2\), \(f''=12x^2-18x\), \(f'''=24x-18\), \(f^{(4)}=24\), \(f^{(5)}=0\).`, S`Chaque dérivation diminue le degré de 1, donc la dérivée d'ordre \(n+1\) d'un polynôme de degré \(n\) est 0.`],
      S`\(f'''=24x-18\), \(f^{(4)}=24\), \(f^{(5)}=0\)`],
  ], [
    q("difficile", S`Pour \(s(t)=t^3-9t^2+24t\), trouve le module de la vitesse à \(t=3\).`, num(3),
      "v(3) = 27 − 54 + 24.", [S`\(v=-3\), module 3.`], S`\(3\) m/s`),
    q("difficile", S`Pour \(s(t)=t^3-3t^2\) (\(t>0\)), trouve l'accélération quand la vitesse est nulle.`, num(6),
      "v = 3t² − 6t = 0 à t = 2.", [S`\(a=6t-6\).`], S`\(6\) m/s²`),
    q("difficile", S`Une pierre lâchée d'une hauteur de 20 m a pour hauteur \(h(t)=20-5t^2\). Trouve le module de sa vitesse quand elle touche le sol.`, num(20),
      "h = 0 à t = 2.", [S`\(v=-10t=-20\).`], S`\(20\) m/s`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre la vitesse et son module?", "La vitesse a un signe (le sens); le module de la vitesse est sa valeur absolue."],
      ["Quand un objet change-t-il de sens?", "Quand v = 0 et que v change de signe."],
      ["Comment savoir s'il accélère?", "Si v et a ont le même signe; il ralentit s'ils sont de signes contraires."],
      ["Que mesure la dérivée seconde en général?", "Le taux de variation de la pente : pour un mouvement, l'accélération; pour un graphique, la concavité (chapitre 3)."],
      ["Pourquoi additionner les distances entre les points de demi-tour?", "Entre deux demi-tours, l'objet se déplace dans un seul sens, donc la distance de chaque partie est simplement |variation de s|."],
    ],
    summary: [
      "v = s′, a = v′ = s″.",
      "Au repos : v = 0; sens du mouvement : signe de v.",
      "Accélère : v et a de même signe.",
      "Distance : additionne les |Δs| entre les points de demi-tour.",
    ],
    next: "La leçon 2.4 dérive les fonctions composées avec la règle de dérivation en chaîne.",
  }),
];
