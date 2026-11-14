// MTH1W-FR 4.5 — Tracer des droites particulières (format autonome) : horizontales, verticales, par l'origine, inéquations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.5 Tracer des droites particulières";
export const ID = lessonId(4, 5);

export const blocks = () => [
  intro({
    icon: "📏",
    title: "Droites particulières et inéquations linéaires",
    overview: String.raw`Certaines droites ont des équations particulières : les droites <strong>horizontales</strong> \(y=k\) (pente \(0\)), les droites <strong>verticales</strong> \(x=k\) (pente non définie) et les droites qui passent <strong>par l'origine</strong> \(y=mx\) (variation directe). Dans cette leçon, tu vas tracer et reconnaître chacune d'elles, puis aller un pas plus loin : une <strong>inéquation linéaire</strong> comme \(y<2x+1\) décrit toute une <em>région</em> du plan. Tu vas tracer sa droite frontière (pleine ou pointillée), tester un point et ombrer le bon côté — c'est ainsi qu'on modélise des budgets et des limites.`,
    goals: [
      "tracer des droites horizontales \\(y=k\\) et verticales \\(x=k\\) et écrire leurs équations;",
      "expliquer pourquoi une droite horizontale a une pente de 0 et une droite verticale a une pente non définie;",
      "reconnaître et tracer des variations directes \\(y=mx\\) qui passent par l'origine;",
      "tracer une inéquation linéaire : droite frontière (pleine pour ≤, ≥; pointillée pour <, >), point test, ombrage;",
      "modéliser une situation par une inéquation linéaire et décider si un point la vérifie.",
    ],
    curriculum: "C4.2 (graphiques de relations linéaires, y compris les cas particuliers; inéquations linéaires)",
    prior: [
      [String.raw`Quelle est la pente de la droite passant par \((1,4)\) et \((5,4)\)?`, String.raw`\(\frac{0}{4}=0\).`],
      [String.raw`\(x=3\) est-il une solution de \(2x+1>6\)?`, String.raw`Oui : \(7>6\).`],
      [String.raw`Écris \(3x+y=12\) sous la forme \(y=\dots\)`, String.raw`\(y=-3x+12\).`],
    ],
    words: [
      ["Droite horizontale", "tous les points ont le même y; équation y = k; pente 0", "\\(y=-2\\)"],
      ["Droite verticale", "tous les points ont le même x; équation x = k; pente non définie", "\\(x=4\\)"],
      ["Variation directe", "une droite qui passe par l'origine, y = mx", "\\(y=3x\\)"],
      ["Inéquation linéaire", "une relation avec <, >, ≤ ou ≥ au lieu de =", "\\(y\\le2x-1\\)"],
      ["Droite frontière", "la droite y = mx + b qui sépare les régions", ""],
      ["Point test", "un point (souvent (0, 0)) utilisé pour décider quel côté ombrer", ""],
    ],
  }),

  section("📌 Horizontale, verticale et par l'origine", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0, b: 3, color: "blue", label: "y = 3", lx: 3.5 }, { m: 1.5, b: 0, color: "green", label: "y = 1.5x", lx: 1.8 }], vlines: [{ x: -2, color: "red", label: "x = −2" }] }, "y = 3 est horizontale, x = −2 est verticale, y = 1.5x passe par l'origine.")}
  ${table(["Droite", "Équation", "Pente", "Pourquoi"], [
    ["horizontale", "\\(y=k\\)", "\\(0\\)", "la montée est toujours 0"],
    ["verticale", "\\(x=k\\)", "non définie", "la course est toujours 0, et la division par 0 n'est pas définie"],
    ["par l'origine", "\\(y=mx\\)", "\\(m\\)", "b = 0 (variation directe)"],
  ])}
  ${watchOut([
    String.raw`\(y=3\) est <strong>horizontale</strong> (tous les points ont une valeur de \(y\) de \(3\)); \(x=3\) est <strong>verticale</strong>. Les élèves les confondent souvent.`,
    "Une droite verticale ne s'écrit pas y = quelque chose : elle s'écrit x = quelque chose.",
    "« Pente non définie » (verticale) n'est pas la même chose que « pente 0 » (horizontale).",
  ])}`),

  section("📌 Inéquations linéaires : des régions du plan", String.raw`
  <p>Les solutions de \(y>\tfrac12x+1\) sont tous les points <em>au-dessus</em> de la droite \(y=\tfrac12x+1\). Pour tracer une inéquation linéaire :</p>
  <ol>
    <li>Réarrange-la sous la forme \(y\ \square\ mx+b\) au besoin.</li>
    <li>Trace la frontière \(y=mx+b\) : <strong>pointillée</strong> pour \(<\) ou \(>\) (les points de la droite ne sont pas des solutions), <strong>pleine</strong> pour \(\le\) ou \(\ge\).</li>
    <li>Teste un point qui n'est pas sur la droite, habituellement \((0,0)\). S'il rend l'inéquation vraie, ombre son côté; si elle est fausse, ombre l'autre côté.</li>
  </ol>
  ${keyIdea(String.raw`Après avoir réarrangé sous la forme \(y\ \square\ mx+b\) : \(>\) et \(\ge\) ombrent <strong>au-dessus</strong> de la droite; \(<\) et \(\le\) ombrent <strong>au-dessous</strong>. Un point test le confirme toujours.`)}
  <p>Dans l'explorateur, change le symbole d'inégalité et déplace le point test.</p>`),

  widget("inequalityRegion", { initM: 0.5, initB: 1 }),

  examples([
    ["Une droite horizontale", String.raw`Un thermostat garde une pièce à \(21\,^\circ\)C toute la journée. Écris l'équation de la température \(T\) en fonction du temps \(t\), donne la pente et décris le graphique.`,
      [String.raw`<b>Formule de la pente.</b> \[m=\frac{\text{montée}}{\text{course}}=\frac{y_2-y_1}{x_2-x_1}\] Si \(y\) ne change jamais, la montée est toujours \(0\).`, String.raw`La température ne change pas : \(T=21\).`, String.raw`Montée \(0\) pour toute course : pente \(0\).`, String.raw`<b>Vérifie avec deux points :</b> \((2,21)\) et \((8,21)\) : \(m=\tfrac{21-21}{8-2}=\tfrac06=0\) ✓`],
      String.raw`\(T=21\) : une droite horizontale, pente \(0\)`],
    ["Une droite verticale", String.raw`Trouve la pente de la droite passant par \((-3,1)\) et \((-3,5)\), et écris l'équation de la droite.`,
      [String.raw`<b>Formule de la pente.</b> \(m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{5-1}{-3-(-3)}\). La division par \(0\) n'est pas définie.`, String.raw`Course \(=-3-(-3)=0\); \(\frac{4}{0}\) n'est pas défini.`, String.raw`Tous les points ont \(x=-3\).`, String.raw`<b>Pourquoi « \(x=-3\) » :</b> les deux points, et tous les points entre eux, ont la même abscisse \(-3\); \(y\) peut prendre n'importe quelle valeur.`],
      String.raw`pente non définie; \(x=-3\)`],
    ["Variation directe", String.raw`Les pommes coûtent \(4.50\) dollars le kilogramme. Écris la relation, donne sa pente et son ordonnée à l'origine, et trouve le coût de \(3.2\) kg.`,
      [String.raw`<b>Forme.</b> Le coût par kilogramme multiplié par la masse : \(C=4.5k\). C'est \(y=mx+b\) avec \(m=4.5\) et \(b=0\) — une variation directe, une droite qui passe par l'origine.`, String.raw`\(C=4.5k\) : pente \(4.5\), ordonnée à l'origine \(0\) (aucuns frais fixes).`, String.raw`\(4.5(3.2)=14.40\) dollars.`, String.raw`<b>Vérification :</b> \(3\) kg coûtent \(13.50\) et \(0.2\) kg coûtent \(0.90\) : \(13.50+0.90=14.40\) ✓`],
      String.raw`\(C=4.5k\); \(14.40\) dollars`],
    ["Tracer une inéquation", String.raw`Trace \(y\le-x+4\).`,
      [String.raw`<b>Méthode.</b> (1) Trace la droite frontière \(y=-x+4\) : pleine pour \(\le\) ou \(\ge\), pointillée pour \(<\) ou \(>\). (2) Teste un point qui n'est pas sur la droite. (3) Ombre le côté où le test est vrai.`, String.raw`Frontière \(y=-x+4\) : pleine (\(\le\)).`, String.raw`Teste \((0,0)\) : \(0\le4\) est vrai, donc ombre le côté qui contient l'origine — au-dessous de la droite.`, String.raw`<b>Vérifie un point de l'autre côté :</b> \((4,4)\) : \(4\le-4+4=0\) est faux, donc ce côté n'est pas ombré ✓`],
      "droite pleine y = −x + 4, ombrée au-dessous",
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1, b: 4, label: "y = −x + 4", lx: -3.5 }], shade: { m: -1, b: 4, above: false }, points: [{ x: 0, y: 0, label: "test (0, 0)", color: "green" }] })],
    ["Une inéquation tirée d'un budget", String.raw`Les billets de cinéma coûtent \(12\) dollars et les collations \(5\) dollars. Ana a \(60\) dollars. Écris une inéquation pour \(x\) billets et \(y\) collations, et décide si \(3\) billets et \(4\) collations sont abordables.`,
      [String.raw`<b>Modèle.</b> coût \(=12\times\)(billets) \(+5\times\)(collations); « a \(60\) dollars » signifie que le coût est <b>au plus</b> \(60\), donc utilise \(\le\). En isolant \(y\) : \(5y\le-12x+60\), \(y\le-2.4x+12\).`, String.raw`Coût total d'au plus \(60\) : \(12x+5y\le60\), c'est-à-dire \(y\le-2.4x+12\).`, String.raw`Teste \((3,4)\) : \(36+20=56\le60\) ✓ — abordable.`, String.raw`(Seuls les points à coordonnées entières de la région ombrée ont du sens ici.)`, String.raw`<b>Vérifie un point qui échoue :</b> \((3,5)\) : \(36+25=61>60\), donc une collation de plus serait de trop.`],
      String.raw`\(12x+5y\le60\); oui, cela coûte \(56\) dollars`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 14 }, lines: [{ m: -2.4, b: 12, label: "12x + 5y = 60", lx: 2.3 }], shade: { m: -2.4, b: 12, above: false }, points: [{ x: 3, y: 4, label: "(3, 4)", color: "green" }], xlabel: "billets x", ylabel: "collations y", step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("horizontale", String.raw`Quelle est la pente de \(y=-6\)?`, num(0), "Y a-t-il une montée?", [String.raw`Tous les points ont \(y=-6\) : montée \(0\).`], String.raw`\(0\)`),
    q("verticale", String.raw`Quelle équation est celle de la droite passant par \((4,1)\) et \((4,-3)\)?`, choice([String.raw`\(x=4\)`, String.raw`\(y=4\)`, String.raw`\(y=x-3\)`, String.raw`\(y=-x+5\)`], 0),
      "Quelle coordonnée est la même pour les deux points?", ["Les deux ont x = 4 : une droite verticale."], String.raw`\(x=4\)`),
    q("tester un point", String.raw`Quel point est une solution de \(y>2x-1\)?`, choice([String.raw`\((1,3)\)`, String.raw`\((2,3)\)`, String.raw`\((3,4)\)`, String.raw`\((0,-1)\)`], 0),
      "Remplace chaque point; l'inégalité est stricte.", [String.raw`\((1,3)\) : \(3>1\) ✓. \((2,3)\) : \(3>3\) ✗. \((3,4)\) : \(4>5\) ✗. \((0,-1)\) : \(-1>-1\) ✗.`], String.raw`\((1,3)\)`),
    q("frontière", String.raw`Pour tracer \(y<-3x+2\), la droite frontière est…`, choice(["pointillée, ombrer au-dessous", "pleine, ombrer au-dessous", "pointillée, ombrer au-dessus", "pleine, ombrer au-dessus"], 0),
      "< est strict; < signifie au-dessous une fois écrit y < …", ["Inégalité stricte : pointillée. y < … : au-dessous."], "pointillée, ombrer au-dessous"),
    q("budget", String.raw`\((2,9)\) est-il une solution de \(3x+y\le15\)? Tape 1 pour oui, 0 pour non.`, num(1),
      "Remplace et compare.", [String.raw`\(3(2)+9=15\le15\) ✓ (sur la frontière pleine).`], "oui (1)"),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi une droite verticale a-t-elle une pente non définie?", "Entre deux points de cette droite, la course est 0, et montée ÷ 0 ne peut pas se calculer — aucun nombre multiplié par 0 ne donne la montée."],
      [String.raw`Comment me rappeler si \(y=2\) est horizontale ou verticale?`, String.raw`Elle dit que y vaut toujours \(2\) : des points comme \((-5,2)\), \((0,2)\), \((7,2)\) — ils s'alignent côte à côte, donc la droite est horizontale.`],
      ["Pourquoi utiliser une droite pointillée pour < et >?", "Les points de la frontière rendent les deux côtés égaux, donc ils ne vérifient pas une inégalité stricte. Pointillée signifie « non incluse »."],
      ["Est-ce que j'ombre toujours au-dessus pour >?", String.raw`Seulement quand l'inéquation est écrite sous la forme \(y>\dots\). Si elle est écrite autrement (p. ex. \(-2y>4x\)), réarrange-la d'abord — et rappelle-toi que diviser par un nombre négatif inverse le sens — ou utilise simplement un point test.`],
      ["Où trouve-t-on des inéquations dans la vie réelle?", "Les budgets (coût ≤ argent disponible), les limites de vitesse, les limites de temps, les exigences minimales (au moins …). La région ombrée montre toutes les combinaisons qui conviennent."],
    ],
    summary: [
      "Horizontale : y = k, pente 0. Verticale : x = k, pente non définie. Par l'origine : y = mx.",
      "Inéquation linéaire : trace la frontière (pointillée pour <, >; pleine pour ≤, ≥), teste un point, ombre.",
      "y > ou ≥ … ombre au-dessus; y < ou ≤ … ombre au-dessous.",
    ],
    next: "la leçon 4.6 montre comment modifier m et b transforme une droite.",
  }),
];
