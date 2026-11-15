// MCR3U-FR 3.7 — Familles de fonctions du second degré : mêmes zéros, a variable; équations à partir des zéros (rationnels et irrationnels)
// et d'un point; à partir du sommet et d'un point; arches paraboliques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "3.7 Familles de fonctions du second degré";
export const ID = lessonId(3, 7);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "👪",
    title: "Familles de fonctions du second degré",
    overview: S`Toutes les paraboles \(y=a(x-r)(x-s)\) qui ont les mêmes zéros forment une <strong>famille</strong> : elles partagent leurs zéros et leur axe, et ne diffèrent que par l'étirement vertical \(a\). Un point de plus permet de choisir un seul membre. Dans cette leçon, tu décriras des familles, tu trouveras des équations à partir des zéros et d'un point (y compris des zéros irrationnels comme \(1\pm\sqrt5\)) et tu modéliseras des arches paraboliques.`,
    goals: [
      "décrire ce que les membres d'une famille y = a(x − r)(x − s) ont en commun et en quoi ils diffèrent;",
      "trouver le membre d'une famille qui passe par un point donné;",
      "construire une fonction du second degré à partir de zéros irrationnels h ± √m;",
      "trouver une équation à partir du sommet et d'un point;",
      "modéliser des arches et décider si un objet peut passer dessous.",
    ],
    curriculum: "A2.4 (déterminer, par exploration, la relation de transformation entre les membres de la famille de fonctions du second degré qui ont les mêmes zéros, et déterminer la représentation algébrique d'une fonction du second degré à partir de ses racines réelles et d'un point de la fonction)",
    prior: [
      [S`Développe \((x-3-\sqrt2)(x-3+\sqrt2)\).`, S`\((x-3)^2-2=x^2-6x+7\).`],
      [S`Quel est l'axe de \(y=a(x-1)(x-7)\)?`, S`\(x=4\).`],
      [S`Si \(5=-2a+1\), quelle est la valeur de \(a\)?`, S`\(a=-2\).`],
    ],
    words: [
      ["Famille", "des fonctions qui partagent une caractéristique et ne diffèrent que par un paramètre", "\\(y=a(x-2)(x+5)\\)"],
      ["Membre", "une fonction de la famille (un a fixé)", "\\(a=-2\\)"],
      ["Racines conjuguées", "les racines \\(h+\\sqrt m\\) et \\(h-\\sqrt m\\)", "\\(3\\pm\\sqrt2\\)"],
      ["Somme et produit", "pour \\(x^2-(\\text{somme})x+(\\text{produit})\\)", ""],
    ],
  }),

  section("📌 Ce qu'une famille a en commun", S`
  ${plane({ view: { xmin: -7, xmax: 4, ymin: -12, ymax: 12 }, curves: [-2, -1, -0.5, 0.5, 1, 2].map((a, i) => ({ f: (x) => a * (x - 2) * (x + 5), color: ["red", "amber", "gray", "blue", "green", "violet"][i] })), points: [{ x: -5, y: 0, label: "(−5, 0)" }, { x: 2, y: 0, label: "(2, 0)" }], step: { x: 1, y: 2 } }, "y = a(x − 2)(x + 5) pour a = ±½, ±1, ±2")}
  ${keyIdea(S`Les membres partagent les zéros et l'axe \(x=\frac{r+s}{2}\). Changer \(a\) produit un étirement vertical par rapport à l'axe des x; les zéros ne bougent donc jamais. Pour choisir un membre, substitue un point qui n'est pas un zéro et résous pour trouver \(a\).`)}`),

  section("📌 Explore", S`<p>Fixe les zéros, puis déplace le point. La courbe violette est le membre qui passe par ce point; les courbes grises sont d'autres membres. Passe ensuite à des zéros irrationnels \(h\pm\sqrt m\).</p>`),

  widget("familyLab", { init: [-2, 4] }),

  section("📌 Zéros irrationnels", S`
  <p>Les zéros \(h\pm\sqrt m\) vont par paires conjuguées. Multiplie-les comme une différence de carrés :</p>
  <p style="text-align:center">\((x-h-\sqrt m)(x-h+\sqrt m)=(x-h)^2-m\)</p>
  <p>La famille est donc \(y=a\left[(x-h)^2-m\right]\) — et elle est déjà sous forme canonique, de sommet \((h,-am)\).</p>
  ${watchOut([
    "Un point qui est un zéro ne peut pas déterminer a — choisis un autre point.",
    "Garde les parenthèses lorsque tu substitues : a(1 − 2)(1 + 5) = −6a.",
    "Zéros irrationnels : multiplie les conjugués sous la forme (x − h)² − m.",
    "Pour une arche, place l'origine à un pied de l'arche pour qu'un des zéros soit 0.",
  ])}`),

  examples([
    ["Décrire une famille", S`Qu'ont en commun les membres de \(y=a(x-2)(x+5)\)?`,
      [S`<b>Sens d'une famille.</b> Les zéros sont fixés par les facteurs, et \(a\) est libre. Chaque valeur \(a\ne0\) donne une parabole différente ayant ces zéros.`,
        S`<b>Caractéristiques communes.</b> Les zéros sont 2 et \(-5\). L'axe est donc \(x=\frac{2+(-5)}2=-1.5\) pour chaque membre.`,
        S`<b>Différences.</b> Le signe de \(a\) fixe le sens d'ouverture. La grandeur de \(a\) fixe l'inclinaison, et donc la hauteur du sommet.`,
        S`<b>Compare des membres.</b> ${tv(["\\(a\\)", "\\(1\\)", "\\(-2\\)", "\\(0.5\\)"], ["ordonnée à l'origine", "\\(-10\\)", "\\(20\\)", "\\(-5\\)"], ["sommet", "\\((-1.5,-12.25)\\)", "\\((-1.5,24.5)\\)", "\\((-1.5,-6.125)\\)"])}`,
        S`<b>Vérification sur le graphique.</b> Les trois courbes passent par \((2,0)\) et \((-5,0)\) ✓`],
      "mêmes zéros et même axe; a différent",
      plane({ view: { xmin: -7, xmax: 4, ymin: -15, ymax: 27 }, curves: [{ f: (x) => (x - 2) * (x + 5), color: "violet" }, { f: (x) => -2 * (x - 2) * (x + 5), color: "red" }, { f: (x) => 0.5 * (x - 2) * (x + 5), color: "blue" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "amber" }, { x: -5, y: 0, label: "(−5, 0)", color: "amber" }], step: { x: 1, y: 3 } }, "violet a = 1, rouge a = −2, bleu a = 0.5")],
    ["Le membre qui passe par un point", S`Trouve le membre de \(y=a(x-2)(x+5)\) qui passe par \((1,12)\).`,
      [S`<b>Idée.</b> Un point de plus permet de choisir un seul membre de la famille, puisque seul \(a\) est inconnu.`,
        S`<b>Substitue</b> \((1,12)\). \(12=a(1-2)(1+5)\).`,
        S`<b>Simplifie.</b> \(12=a(-1)(6)=-6a\).`,
        S`<b>Résous.</b> \(a=-2\).`,
        S`<b>Vérification.</b> \(y(1)=-2(-1)(6)=12\) ✓. Les zéros sont inchangés ✓`],
      S`\(a=-2\) : \(y=-2(x-2)(x+5)\)`,
      plane({ view: { xmin: -7, xmax: 4, ymin: -8, ymax: 27 }, curves: [{ f: (x) => -2 * (x - 2) * (x + 5), color: "violet" }], points: [{ x: 1, y: 12, label: "(1, 12)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)" }, { x: -5, y: 0, label: "(−5, 0)" }], step: { x: 1, y: 3 } })],
    ["Zéros irrationnels", S`Trouve la fonction du second degré de zéros \(3\pm\sqrt2\) qui passe par \((1,4)\).`,
      [S`<b>Écris les facteurs.</b> \(y=a\left(x-(3+\sqrt2)\right)\left(x-(3-\sqrt2)\right)\).`,
        S`<b>Regroupe en une différence de carrés.</b> Les facteurs sont \(\left((x-3)-\sqrt2\right)\left((x-3)+\sqrt2\right)=(x-3)^2-2\). Les radicaux disparaissent.`,
        S`<b>Développe.</b> \((x-3)^2-2=x^2-6x+9-2=x^2-6x+7\).`,
        S`<b>Utilise le point.</b> \(4=a(1-6+7)=2a\), donc \(a=2\).`,
        S`<b>Forme générale.</b> \(y=2(x^2-6x+7)=2x^2-12x+14\).`,
        S`<b>Vérification avec la formule.</b> \(x=\frac{12\pm\sqrt{144-112}}4=\frac{12\pm4\sqrt2}4=3\pm\sqrt2\) ✓`],
      S`\(y=2x^2-12x+14\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: -5, ymax: 8 }, curves: [{ f: (x) => 2 * x * x - 12 * x + 14, color: "violet" }], points: [{ x: 1, y: 4, label: "(1, 4)", color: "amber" }, { x: 1.586, y: 0, label: "(1.59, 0)" }, { x: 4.414, y: 0, label: "(4.41, 0)" }], step: { x: 1, y: 1 } })],
    ["Le sommet et un point", S`Une parabole a le sommet \((-2,5)\) et passe par \((0,-3)\). Trouve son équation.`,
      [S`<b>Choisis la forme.</b> On connaît le sommet; utilise donc \(y=a(x-h)^2+k\) : \(y=a(x+2)^2+5\).`,
        S`<b>Substitue</b> \((0,-3)\). \(-3=a(2)^2+5\), donc \(-3=4a+5\).`,
        S`<b>Résous.</b> \(4a=-8\), donc \(a=-2\).`,
        S`<b>Vérification du bon sens.</b> Le point est sous le sommet; la courbe doit donc être ouverte vers le bas, et \(a<0\) ✓`,
        S`<b>Vérification par symétrie.</b> \((0,-3)\) est à 2 unités à droite de l'axe; \((-4,-3)\) doit donc aussi être sur la courbe : \(-2(-2)^2+5=-3\) ✓`],
      S`\(y=-2(x+2)^2+5\)`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -6, ymax: 7 }, curves: [{ f: (x) => -2 * (x + 2) ** 2 + 5, color: "violet" }], points: [{ x: -2, y: 5, label: "(−2, 5)", color: "amber" }, { x: 0, y: -3, label: "(0, −3)" }, { x: -4, y: -3, label: "(−4, −3)" }], step: { x: 1, y: 1 } })],
    ["Une arche parabolique", "Une arche mesure 10 m de largeur au sol et 6 m de hauteur au milieu. Quelle est sa hauteur à 2 m d'un des pieds?",
      [S`<b>Place les axes.</b> Un bon choix simplifie l'algèbre. Place un pied à l'origine; les pieds sont alors en \(x=0\) et \(x=10\).`,
        S`<b>Famille ayant ces zéros.</b> \(y=ax(x-10)\).`,
        S`<b>Utilise le sommet.</b> Le milieu est \(x=5\), à la hauteur 6 : \(6=a(5)(-5)=-25a\), donc \(a=-0.24\).`,
        S`<b>Trouve la hauteur.</b> « À 2 m d'un des pieds » signifie \(x=2\) : \(y=-0.24(2)(-8)=3.84\).`,
        S`<b>Vérification par symétrie.</b> En \(x=8\) : \(-0.24(8)(-2)=3.84\). L'autre pied donne la même hauteur ✓`],
      "3.84 m",
      plane({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 7 }, curves: [{ f: (x) => -0.24 * x * (x - 10), a: 0, b: 10, color: "violet" }], points: [{ x: 5, y: 6, label: "(5, 6)" }, { x: 2, y: 3.84, label: "(2, 3.84)", color: "amber" }, { x: 8, y: 3.84, label: "(8, 3.84)" }], step: { x: 1, y: 1 }, xlabel: "x (m)", ylabel: "y (m)" })],
  ]),

  practice([
    q("trouver a", S`Trouve \(a\) pour que \(y=a(x-1)(x-7)\) passe par \((3,16)\).`, num(-2),
      "Substitue x = 3.", [S`\(16=a(2)(-4)=-8a\).`], S`\(-2\)`),
    q("trouver a", S`Trouve \(a\) pour que \(y=a(x+3)(x-3)\) ait l'ordonnée à l'origine \(-18\).`, num(2),
      "Substitue (0, −18).", [S`\(-18=a(3)(-3)=-9a\).`], S`\(2\)`),
    q("zéros irrationnels", S`La fonction \(y=x^2+bx+c\) a les zéros \(2\pm\sqrt5\). Trouve \(c\).`, num(-1),
      "c est le produit des zéros.", [S`\((x-2)^2-5=x^2-4x-1\).`], S`\(-1\)`),
    q("sommet et point", S`Une parabole a le sommet \((4,-1)\) et passe par \((6,7)\). Trouve \(a\).`, num(2),
      "y = a(x − 4)² − 1.", [S`\(7=4a-1\).`], S`\(2\)`),
    q("famille", S`Qu'ont en commun tous les membres de \(y=a(x-4)(x+2)\)?`, choice(["les zéros et l'axe de symétrie", "le sommet", "l'ordonnée à l'origine", "le sens d'ouverture"], 0),
      "Quelles caractéristiques ne dépendent pas de a?", [S`Zéros 4, −2; axe \(x=1\).`], "les zéros et l'axe"),
  ]),

  ...hard([
    ["Le camion passera-t-il?", "Un tunnel a une arche parabolique de 14 m de largeur au niveau de la route. À 3 m d'un bord, l'arche a une hauteur de 7 m. Un camion de 4 m de largeur et de 6 m de hauteur peut-il passer en roulant au milieu?",
      [S`Bords en \(x=0\) et \(x=14\) : \(y=ax(x-14)\); \(7=a(3)(-11)\Rightarrow a=-\tfrac{7}{33}\).`, S`Le camion occupe \(5\le x\le9\). La plus petite hauteur de l'arche au-dessus de lui, en \(x=5\) : \(-\tfrac7{33}(5)(-9)=\tfrac{315}{33}\approx9.55\) m.`, S`9.55 m > 6 m.`],
      "oui, avec environ 3.5 m de marge",
      plane({ view: { xmin: -1, xmax: 15, ymin: -1, ymax: 12 }, curves: [{ f: (x) => (-7 / 33) * x * (x - 14), a: 0, b: 14, color: "violet" }], segs: [{ pts: [[5, 0], [5, 6], [9, 6], [9, 0]], color: "blue" }], points: [{ x: 3, y: 7, label: "(3, 7)" }], step: { x: 1, y: 1 } })],
    ["Zéros conjugués et un point", S`Trouve la fonction du second degré de zéros \(-1\pm\sqrt3\) qui passe par \((1,-4)\), sous forme générale.`,
      [S`\(y=a\left[(x+1)^2-3\right]=a(x^2+2x-2)\).`, S`\(-4=a(1+2-2)=a\).`],
      S`\(y=-4x^2-8x+8\)`],
  ], [
    q("difficile", S`\(y=a(x^2-6x+4)\) passe par \((0,-8)\). Quelle est sa valeur maximale?`, num(10),
      "Trouve a, puis écris l'équation sous forme canonique.", [S`\(4a=-8\Rightarrow a=-2\); \(y=-2\left[(x-3)^2-5\right]\).`], S`\(10\)`),
    q("difficile", S`Une parabole a les zéros \(-4\) et \(6\) et passe par \((2,-48)\). Trouve l'ordonnée de son sommet.`, num(-50),
      "Trouve a, puis évalue sur l'axe x = 1.", [S`\(-48=a(6)(-4)\Rightarrow a=2\); \(2(5)(-5)\).`], S`\(-50\)`),
    q("difficile", "L'arche parabolique d'un pont mesure 40 m de largeur et 10 m de hauteur. Quelle est sa hauteur à 5 m d'une extrémité?", num(4.375),
      "y = ax(x − 40) de sommet (20, 10).", [S`\(10=a(20)(-20)\Rightarrow a=-0.025\); \(-0.025(5)(-35)\).`], S`\(4.375\) m`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi changer a produit-il un étirement vertical?", "Chaque valeur de y est multipliée par a; les points où y = 0 (les zéros) restent en place."],
      ["Et si je connais les zéros et le sommet?", "Le sommet est un point : substitue-le pour trouver a."],
      ["Pourquoi les zéros irrationnels vont-ils par paires?", "Avec des coefficients entiers, la formule donne h ± √m ensemble."],
      ["Où placer les axes pour une arche?", "À un pied (zéros 0 et la largeur) ou au centre (zéros ± la demi-largeur) — choisis ce qui rend les nombres les plus simples."],
      ["Deux familles différentes peuvent-elles partager un membre?", "Seulement si leurs zéros sont les mêmes — ce sont les zéros qui définissent la famille."],
    ],
    summary: [
      "Famille : y = a(x − r)(x − s) — mêmes zéros et même axe.",
      "Un point de plus détermine a.",
      "Zéros h ± √m : y = a[(x − h)² − m].",
      "Sommet et point : y = a(x − h)² + k, substituer pour trouver a.",
    ],
    next: "La leçon 3.8 trouve où une droite rencontre une parabole.",
  }),
];
