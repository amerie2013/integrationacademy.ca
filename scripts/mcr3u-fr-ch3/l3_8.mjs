// MCR3U-FR 3.8 — Systèmes linéaires-quadratiques : résolution par substitution, compter les points d'intersection à l'aide du discriminant,
// tangentes, droites de pente fixée et modèles à deux quantités
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.8 Systèmes linéaires-quadratiques";
export const ID = lessonId(3, 8);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "✂️",
    title: "Systèmes linéaires-quadratiques",
    overview: S`Une droite peut couper une parabole deux fois, la toucher une seule fois ou ne pas la rencontrer. Poser les deux expressions égales donne une équation du second degré, et son discriminant indique le cas. Dans cette leçon, tu résoudras des systèmes linéaires-quadratiques algébriquement et graphiquement, tu trouveras des tangentes, tu détermineras quelles droites d'une pente donnée rencontrent une parabole et tu résoudras des problèmes où une quantité varie de façon linéaire et une autre de façon quadratique.`,
    goals: [
      "résoudre un système linéaire-quadratique par substitution;",
      "utiliser le discriminant pour compter les points d'intersection;",
      "trouver la droite d'une pente donnée qui est tangente à une parabole;",
      "décrire toutes les droites d'une pente donnée qui rencontrent une parabole une fois, deux fois ou jamais;",
      "résoudre des problèmes modélisés par une droite et une parabole.",
    ],
    curriculum: "A2.5 (résoudre graphiquement et algébriquement des problèmes portant sur l'intersection d'une fonction linéaire et d'une fonction du second degré)",
    prior: [
      [S`Résous \(x^2-3x-4=0\).`, S`\(x=4\) ou \(x=-1\).`],
      [S`Quel est le discriminant de \(x^2-2x+1\)?`, S`\(0\).`],
      [S`Substitue \(x=4\) dans \(y=x+1\).`, S`\(y=5\).`],
    ],
    words: [
      ["Système", "deux équations résolues ensemble", ""],
      ["Sécante", "une droite qui rencontre la parabole deux fois", ""],
      ["Tangente", "une droite qui touche la parabole une seule fois", ""],
      ["Point d'intersection", "un point situé sur les deux graphiques", ""],
    ],
  }),

  section("📌 La méthode", S`
  ${table(["Étape", "Exemple : y = x² − 2x − 3 et y = x + 1"], [
    ["1. Poser égales", "\\(x^2-2x-3=x+1\\)"],
    ["2. Réarranger pour obtenir 0", "\\(x^2-3x-4=0\\)"],
    ["3. Discriminant", "\\(D=9+16=25>0\\) : deux points"],
    ["4. Résoudre", "\\((x-4)(x+1)=0\\) : \\(x=4,\\ -1\\)"],
    ["5. y à partir de la DROITE", "\\((4,5)\\) et \\((-1,0)\\)"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: 4, y: 5, label: "(4, 5)" }, { x: -1, y: 0, label: "(−1, 0)" }], step: { x: 1, y: 1 } })}
  ${keyIdea(S`Après avoir posé les expressions égales et réarrangé, \(D>0\) : deux points (sécante); \(D=0\) : un point (tangente); \(D<0\) : aucun.`)}`),

  section("📌 Explore", S`<p>La parabole est \(y=-x^2+6x\). Change la pente et l'ordonnée à l'origine de la droite. La droite ambre en pointillé est la tangente de même pente.</p>`),

  widget("tangentLab", { init: [-1, 6, 0, 2] }),

  section("📌 Attention", watchOut([
    "Place tous les termes d'un même côté avant d'utiliser le discriminant.",
    "Substitue x dans l'équation la plus simple (linéaire) pour obtenir y.",
    "Une tangente donne une racine double : l'expression du second degré est un carré parfait.",
    "En contexte, ne garde que les intersections situées dans le domaine.",
  ])),

  examples([
    ["Deux intersections", S`Résous \(y=x^2-2x-3\) et \(y=x+1\).`,
      [S`<b>Idée.</b> À une intersection, les deux équations donnent le même \(y\); on pose donc les membres de droite égaux.`,
        S`<b>Pose-les égaux.</b> \(x^2-2x-3=x+1\). Regroupe d'un même côté : \(x^2-3x-4=0\).`,
        S`<b>Factorise.</b> \((x-4)(x+1)=0\), donc \(x=4\) ou \(x=-1\).`,
        S`<b>Trouve \(y\).</b> Utilise l'équation la plus simple, \(y=x+1\). Cela donne \((4,5)\) et \((-1,0)\).`,
        S`<b>Vérification dans la parabole.</b> \(16-8-3=5\) ✓ et \(1+2-3=0\) ✓`],
      S`\((4,5)\) et \((-1,0)\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: 4, y: 5, label: "(4, 5)", color: "amber" }, { x: -1, y: 0, label: "(−1, 0)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Aucune intersection", S`Combien de points \(y=-x^2+4x\) et \(y=2x+3\) ont-elles en commun?`,
      [S`<b>Pose-les égales.</b> \(-x^2+4x=2x+3\), donc \(-x^2+2x-3=0\).`,
        S`<b>Discriminant.</b> \(a=-1\), \(b=2\), \(c=-3\) : \(D=4-4(-1)(-3)=4-12=-8\).`,
        S`<b>Décide.</b> \(D<0\) : il n'y a donc aucune solution réelle et aucun point commun.`,
        S`<b>Vérification avec des valeurs.</b> Le point le plus haut de la parabole est \((2,4)\), mais la droite est à \(y=7\) à cet endroit. La droite reste au-dessus de la courbe ✓`],
      "aucun : la droite passe au-dessus de la parabole",
      plane({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 10 }, curves: [{ f: (x) => -x * x + 4 * x, color: "violet" }], lines: [{ m: 2, b: 3, color: "blue" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "violet" }, { x: 2, y: 7, label: "(2, 7)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Une tangente", S`Trouve \(k\) pour que \(y=2x+k\) soit tangente à \(y=x^2+1\), ainsi que le point de contact.`,
      [S`<b>Sens.</b> Une tangente touche la courbe en exactement un point; l'équation combinée doit donc avoir une seule solution : \(D=0\).`,
        S`<b>Combine.</b> \(x^2+1=2x+k\), donc \(x^2-2x+(1-k)=0\).`,
        S`<b>Pose \(D=0\).</b> \(D=(-2)^2-4(1)(1-k)=4-4+4k=4k\). Donc \(k=0\).`,
        S`<b>Point de contact.</b> Avec \(k=0\) : \(x^2-2x+1=0\), donc \((x-1)^2=0\) et \(x=1\). Alors \(y=2(1)=2\).`,
        S`<b>Vérification.</b> La parabole donne \(1^2+1=2\) ✓`],
      S`\(k=0\); point de contact \((1,2)\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x + 1, color: "violet" }], lines: [{ m: 2, b: 0, color: "blue" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Droites de pente fixée", S`Pour quelles valeurs de \(k\) la droite \(y=x+k\) rencontre-t-elle \(f(x)=x(8-x)\) une fois, deux fois, jamais?`,
      [S`<b>Combine.</b> \(8x-x^2=x+k\), donc \(x^2-7x+k=0\).`,
        S`<b>Discriminant.</b> \(D=49-4k\).`,
        S`<b>Une fois.</b> \(D=0\) donne \(k=12.25\). Le point de contact est en \(x=3.5\).`,
        S`<b>Deux fois ou jamais.</b> \(D>0\) donne \(k<12.25\) : la droite est plus basse et coupe la courbe. \(D<0\) donne \(k>12.25\) : la droite est au-dessus.`,
        S`<b>Vérification.</b> \(k=4\) : \(D=33>0\), deux points. \(k=16\) : \(D=-15<0\), aucun. Le graphique montre ces droites ✓`],
      S`une fois pour \(k=12.25\) (tangente); deux fois pour \(k<12.25\); jamais pour \(k>12.25\)`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -4, ymax: 20 }, curves: [{ f: (x) => x * (8 - x), color: "violet" }], lines: [{ m: 1, b: 12.25, color: "amber", dash: true }, { m: 1, b: 4, color: "blue" }, { m: 1, b: 16, color: "red" }], points: [{ x: 3.5, y: 15.75, label: "(3.5, 15.75)", color: "amber" }], step: { x: 1, y: 2 } }, "bleu k = 4, ambre k = 12.25, rouge k = 16")],
    ["Un ballon et un drone", S`La hauteur d'un ballon est \(h(t)=-5t^2+25t+1\) m; un drone s'élève selon \(d(t)=4t+7\) m. Quand sont-ils à la même hauteur?`,
      [S`<b>Pose-les égales.</b> \(-5t^2+25t+1=4t+7\).`,
        S`<b>Forme générale.</b> Déplace tout dans le membre de droite pour que le terme en \(t^2\) soit positif : \(0=5t^2-21t+6\).`,
        S`<b>Formule.</b> \(t=\frac{21\pm\sqrt{441-120}}{10}=\frac{21\pm\sqrt{321}}{10}\).`,
        S`<b>Nombres décimaux.</b> \(\sqrt{321}\approx17.92\), donc \(t\approx0.31\) et \(t\approx3.89\). Les deux sont positifs; ils sont donc tous deux valables.`,
        S`<b>Vérification.</b> En \(t=3.89\) : \(h\approx-75.66+97.25+1\approx22.6\) et \(d\approx22.6\) ✓`],
      S`\(t\approx0.31\) s et \(t\approx3.89\) s`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 36 }, curves: [{ f: (t) => -5 * t * t + 25 * t + 1, a: 0, color: "violet" }], lines: [{ m: 4, b: 7, color: "blue" }], points: [{ x: 0.31, y: 8.23, label: "(0.31, 8.2)", color: "amber" }, { x: 3.89, y: 22.57, label: "(3.89, 22.6)", color: "amber" }], step: { x: 1, y: 4 }, xlabel: "t (s)", ylabel: "hauteur (m)" })],
  ]),

  practice([
    q("résoudre", S`Trouve les abscisses des points où \(y=x^2\) rencontre \(y=x+6\).`, roots(3, -2),
      "x² − x − 6 = 0.", [S`\((x-3)(x+2)=0\).`], S`\(x=3,\ -2\)`),
    q("compter", S`Combien de points \(y=x^2+4\) et \(y=4x\) ont-elles en commun?`, num(1),
      "Calcule D de x² − 4x + 4.", [S`\(D=16-16=0\).`], S`\(1\)`),
    q("tangente horizontale", S`Pour quelle valeur de \(k\) la droite \(y=k\) est-elle tangente à \(y=x^2-4x+7\)?`, num(3),
      "La tangente horizontale passe par le sommet.", [S`\((x-2)^2+3\).`], S`\(k=3\)`),
    q("point", S`\(y=2x^2\) et \(y=3x+2\) se rencontrent en un point où \(x>0\). Trouve son ordonnée.`, num(8),
      "Résous 2x² − 3x − 2 = 0.", [S`\((2x+1)(x-2)=0\Rightarrow x=2\); \(y=3(2)+2\).`], S`\(8\)`),
    q("sens", "Si le discriminant de l'équation combinée est négatif, la droite et la parabole…", choice(["ne se rencontrent pas", "se rencontrent une fois", "se rencontrent deux fois", "sont la même courbe"], 0),
      "Aucune racine réelle.", ["Aucune valeur réelle de x ne vérifie les deux équations."], "ne se rencontrent pas"),
  ]),

  ...hard([
    ["Deux tangentes d'une même famille", S`Trouve toutes les valeurs de \(k\) pour lesquelles \(y=kx-1\) est tangente à \(y=x^2+3\), ainsi que les points de contact.`,
      [S`\(x^2-kx+4=0\) : \(D=k^2-16=0\Rightarrow k=\pm4\).`, S`Racine double \(x=\frac k2=\pm2\); \(y=4+3=7\).`],
      S`\(k=4\) en \((2,7)\); \(k=-4\) en \((-2,7)\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -2, ymax: 14 }, curves: [{ f: (x) => x * x + 3, color: "violet" }], lines: [{ m: 4, b: -1, color: "blue" }, { m: -4, b: -1, color: "red" }], points: [{ x: 2, y: 7, label: "(2, 7)" }, { x: -2, y: 7, label: "(−2, 7)" }, { x: 0, y: -1, label: "(0, −1)", color: "gray" }], step: { x: 1, y: 2 } })],
    ["Deux réservoirs", S`Le réservoir A se vide de sorte qu'il contient \(V_A=2(t-20)^2\) litres pour \(0\le t\le20\) minutes. Le réservoir B est vide au départ et se remplit à raison de 30 L/min. Quand contiennent-ils le même volume, et combien?`,
      [S`\(2(t-20)^2=30t\Rightarrow2t^2-110t+800=0\Rightarrow t^2-55t+400=0\).`, S`\(t=\frac{55\pm\sqrt{1425}}{2}\approx8.63\) ou \(46.37\) (hors du domaine).`, S`\(V\approx30(8.63)\approx259\) L.`],
      "après environ 8.6 min, avec environ 259 L dans chacun"],
  ], [
    q("difficile", S`Pour combien d'entiers \(k\) de \(-10\) à \(10\) la droite \(y=2x+k\) rencontre-t-elle \(y=x^2-4x+5\) deux fois?`, num(14),
      "Pose-les égales; D > 0.", [S`\(x^2-6x+5-k=0\) : \(D=16+4k>0\Rightarrow k>-4\); \(k=-3,\dots,10\).`], S`\(14\)`),
    q("difficile", S`Pour \(m>0\), \(y=mx+1\) est tangente à \(y=x^2+2\). Trouve \(m\).`, num(2),
      "x² − mx + 1 = 0 avec D = 0.", [S`\(m^2-4=0\).`], S`\(2\)`),
    q("difficile", S`\(y=-x^2+6x-5\) et \(y=x-1\) se rencontrent en deux points. Trouve la distance entre ces points (au centième).`, num(Math.sqrt(18), 0.006),
      "Trouve d'abord les deux points.", [S`\(x^2-5x+4=0\Rightarrow x=1,4\) : \((1,0)\), \((4,3)\).`, S`\(\sqrt{9+9}\).`], S`\(\sqrt{18}\approx4.24\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi substituer dans la droite pour obtenir y?", "Elle est linéaire, donc les calculs sont plus simples — les deux équations donnent le même y à une intersection."],
      ["À quoi ressemble une tangente algébriquement?", "L'équation du second degré combinée est un carré parfait : une racine double."],
      ["Une droite verticale peut-elle être tangente à une parabole ouverte vers le haut?", "Non — une droite verticale la coupe toujours exactement une fois, mais ce n'est pas une tangente."],
      ["Comment trouver toutes les droites de pente m qui rencontrent la parabole?", "Écris y = mx + k, pose les expressions égales et résous D ≥ 0 pour trouver k."],
      ["Les deux intersections comptent-elles toujours dans un modèle?", "Seulement celles qui sont dans le domaine du contexte."],
    ],
    summary: [
      "Poser la droite égale à la parabole; réarranger pour obtenir = 0.",
      "D > 0 deux points, D = 0 tangente, D < 0 aucun.",
      "Obtenir y à partir de la droite.",
      "Conditions de tangence : résoudre D = 0 pour trouver le paramètre.",
    ],
    next: "La leçon 3.9 est la révision du chapitre.",
  }),
];
