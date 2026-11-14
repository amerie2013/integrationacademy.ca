// MCV4U-FR 7.5 — Le produit vectoriel et ses propriétés : formule avec les composantes, règle de la main droite,
// |a × b| = |a||b| sin θ et aire d'un parallélogramme, i × j = k, et propriétés algébriques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.5 Le produit vectoriel et ses propriétés";
export const ID = lessonId(7, 5);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const para = (a, b, fill = "#ede9fe") => ({ polys: [{ pts: [p3(0, 0, 0), p3(...a), p3(...add3(a, b)), p3(...b)], fill, stroke: "gray" }] });
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Le produit vectoriel et ses propriétés",
    overview: S`Le produit scalaire transforme deux vecteurs en un nombre. Le <strong>produit vectoriel</strong>, défini seulement dans l'espace, transforme deux vecteurs en un nouveau <em>vecteur</em> \(\vec a\times\vec b\) perpendiculaire aux deux. Sa direction suit la règle de la main droite, et sa norme \(|\vec a||\vec b|\sin\theta\) est égale à l'aire du parallélogramme formé par les deux vecteurs. Avec les composantes : \(\vec a\times\vec b=[a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1]\).`,
    goals: [
      "calculer un produit vectoriel à partir des composantes;",
      "utiliser la règle de la main droite pour sa direction;",
      "utiliser |a × b| = |a||b| sin θ et trouver l'aire de parallélogrammes;",
      "reconnaître i × j = k et les autres produits de vecteurs unitaires;",
      "utiliser et vérifier les propriétés du produit vectoriel.",
    ],
    curriculum: "C2.6 (effectuer le produit vectoriel sous forme cartésienne; |a × b| = |a||b| sin θ); C2.7 (explorer les propriétés du produit vectoriel)",
    prior: [
      [S`\(\sin90^\circ\)?`, S`\(1\).`],
      [S`Aire d'un parallélogramme de côtés 4 et 5 formant un angle de \(30^\circ\)?`, S`\(4\times5\times\sin30^\circ=10\).`],
      [S`\([1,2,3]\cdot[3,0,-1]\)?`, S`\(0\).`],
    ],
    words: [
      ["Produit vectoriel", "\\(\\vec a\\times\\vec b\\)", "un vecteur, dans l'espace seulement"],
      ["Règle de la main droite", "doigts de a vers b, le pouce indique a × b", ""],
      ["Norme", "\\(|\\vec a||\\vec b|\\sin\\theta\\)", "aire du parallélogramme"],
      ["Anticommutatif", "\\(\\vec b\\times\\vec a=-\\vec a\\times\\vec b\\)", ""],
    ],
  }),

  section("📌 Un vecteur perpendiculaire aux deux", S`
  ${vfig(merge(V3, axes3(4.4), para([3, 0, 0], [0, 2.5, 0]), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2.5, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 4), vl: "a×b", color: "red", off: -18 }] }), "a × b est perpendiculaire au parallélogramme formé par a et b; sa norme est l'aire de ce parallélogramme")}
  ${table(["Propriété", "Énoncé"], [
    ["direction", "perpendiculaire à \\(\\vec a\\) et à \\(\\vec b\\); règle de la main droite"],
    ["norme", "\\(|\\vec a\\times\\vec b|=|\\vec a||\\vec b|\\sin\\theta\\)"],
    ["ordre", "\\(\\vec b\\times\\vec a=-(\\vec a\\times\\vec b)\\)"],
    ["scalaires, sommes", "\\((k\\vec a)\\times\\vec b=k(\\vec a\\times\\vec b)\\); \\(\\vec a\\times(\\vec b+\\vec c)=\\vec a\\times\\vec b+\\vec a\\times\\vec c\\)"],
    ["vecteurs colinéaires", "\\(\\vec a\\times\\vec b=\\vec 0\\) (en particulier \\(\\vec a\\times\\vec a=\\vec 0\\))"],
    ["vecteurs unitaires", "\\(\\vec i\\times\\vec j=\\vec k\\), \\(\\vec j\\times\\vec k=\\vec i\\), \\(\\vec k\\times\\vec i=\\vec j\\)"],
  ])}
  ${keyIdea(S`Pour calculer \(\vec a\times\vec b\), écris les composantes de \(\vec a\) au-dessus de celles de \(\vec b\), deux fois de suite, et fais les produits croisés : la première composante saute la première colonne (\(a_2b_3-a_3b_2\)), et ainsi de suite. Vérifie toujours ta réponse : son produit scalaire avec \(\vec a\) et avec \(\vec b\) doit être 0. Le produit vectoriel n'est <strong>pas</strong> associatif : \((\vec a\times\vec b)\times\vec c\) diffère habituellement de \(\vec a\times(\vec b\times\vec c)\).`)}`),

  section("📌 Explore", S`<p>Choisis les composantes de \(\vec a\) et de \(\vec b\) et fais tourner la vue : le produit vectoriel rouge reste toujours perpendiculaire au parallélogramme ombré. Inverse l'ordre pour le voir changer de sens, et rends \(\vec b\) multiple de \(\vec a\) pour le voir disparaître.</p>`),

  widget("crossLab", { init: { a: [3, 0, 0], b: [1, 3, 0] } }),

  section("📌 Calculer et vérifier", S`
  <p>Utilise la formule des composantes avec soin — c'est la composante du milieu qu'on se trompe le plus souvent. Vérifie ensuite la perpendicularité avec deux produits scalaires. Pour les aires, prends la norme du produit vectoriel; un triangle correspond à la moitié du parallélogramme.</p>
  ${watchOut([
    "La composante du milieu est a₃b₁ − a₁b₃ (attention à l'ordre).",
    "a × b et b × a pointent dans des sens opposés.",
    "Le produit vectoriel n'existe que pour des vecteurs de l'espace.",
    "|a × b| utilise sin θ; le produit scalaire utilise cos θ.",
    "Un produit vectoriel nul signifie que les vecteurs sont colinéaires (ou que l'un d'eux est nul).",
  ])}`),

  examples([
    ["Avec les composantes", S`Trouve \([2,-1,3]\times[1,4,-2]\) et vérifie la réponse.`,
      [S`\([(-1)(-2)-(3)(4),\ (3)(1)-(2)(-2),\ (2)(4)-(-1)(1)]=[2-12,\ 3+4,\ 8+1]\).`, S`Vérification avec \(\vec a\) : \(2(-10)+(-1)(7)+3(9)=0\); avec \(\vec b\) : \(-10+28-18=0\).`],
      S`\([-10,7,9]\)`],
    ["Vecteurs unitaires", S`Trouve \(\vec i\times\vec j\), \(\vec j\times\vec i\) et \(\vec k\times\vec k\).`,
      [S`\([1,0,0]\times[0,1,0]=[0,0,1]=\vec k\).`, S`En inversant l'ordre : \(-\vec k\). Le produit vectoriel d'un vecteur avec lui-même donne \(\vec 0\).`],
      S`\(\vec k\), \(-\vec k\), \(\vec 0\)`,
      vfig(merge(V3, axes3(4.2), { arrows: [{ from: [0, 0], to: p3(2, 0, 0), vl: "i", color: "violet", off: 16 }, { from: [0, 0], to: p3(0, 2, 0), vl: "j", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 2), vl: "k", color: "red", off: -16 }] }))],
    ["La norme à partir de l'angle", S`\(|\vec a|=5\), \(|\vec b|=4\) et l'angle entre les vecteurs mesure \(30^\circ\). Trouve \(|\vec a\times\vec b|\).`,
      [S`\(|\vec a\times\vec b|=5\times4\times\sin30^\circ\).`],
      S`\(10\)`],
    ["Aire d'un parallélogramme", S`Trouve l'aire du parallélogramme formé par \(\vec a=[3,0,2]\) et \(\vec b=[1,2,-1]\).`,
      [S`\(\vec a\times\vec b=[0(-1)-2(2),\ 2(1)-3(-1),\ 3(2)-0(1)]=[-4,5,6]\).`, S`Aire \(=\sqrt{16+25+36}=\sqrt{77}\).`],
      S`\(\sqrt{77}\approx8.77\) unités carrées`,
      vfig(merge(V3, axes3(4.2), para([3, 0, 2], [1, 2, -1]), { arrows: [{ from: [0, 0], to: p3(3, 0, 2), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, 2, -1), vl: "b", color: "blue", off: 16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.2, ymax: 5 } }))],
    ["Vérifier si des vecteurs sont colinéaires", S`\([2,-4,6]\) et \([-3,6,-9]\) sont-ils colinéaires?`,
      [S`\([(-4)(-9)-6(6),\ 6(-3)-2(-9),\ 2(6)-(-4)(-3)]=[0,0,0]\).`],
      S`oui : le produit vectoriel est \(\vec 0\) (en effet, le second vaut \(-1.5\) fois le premier)`],
  ]),

  practice([
    q("composante", S`Trouve la composante en z de \([1,2,0]\times[3,1,0]\).`, num(-5),
      "a₁b₂ − a₂b₁.", [S`\(1(1)-2(3)\).`], S`\(-5\)`),
    q("norme", S`\(|\vec a|=6\), \(|\vec b|=2\), et les vecteurs sont perpendiculaires. Trouve \(|\vec a\times\vec b|\).`, num(12),
      "sin 90° = 1.", [S`\(6\times2\times1\).`], S`\(12\)`),
    q("ordre", S`\(\vec b\times\vec a=\)`, choice([S`\(-(\vec a\times\vec b)\)`, S`\(\vec a\times\vec b\)`, S`\(\vec a\cdot\vec b\)`, S`\(\vec 0\)`], 0),
      "Anticommutatif.", ["Inverser l'ordre inverse le sens."], S`\(-(\vec a\times\vec b)\)`),
    q("composante", S`Trouve la composante en x de \([0,1,2]\times[3,0,1]\).`, num(1),
      "a₂b₃ − a₃b₂.", [S`\(1(1)-2(0)\).`], S`\(1\)`),
    q("unitaires", S`Trouve \(|\vec i\times\vec k|\).`, num(1),
      "Vecteurs unitaires perpendiculaires.", [S`\(\vec i\times\vec k=-\vec j\).`], S`\(1\)`),
  ]),

  ...hard([
    ["Pas associatif", S`Montre, avec \(\vec a=\vec i\), \(\vec b=\vec i\) et \(\vec c=\vec j\), que \(\vec a\times(\vec b\times\vec c)\ne(\vec a\times\vec b)\times\vec c\).`,
      [S`\(\vec b\times\vec c=\vec i\times\vec j=\vec k\), donc \(\vec a\times(\vec b\times\vec c)=\vec i\times\vec k=-\vec j\).`, S`\(\vec a\times\vec b=\vec i\times\vec i=\vec 0\), donc \((\vec a\times\vec b)\times\vec c=\vec 0\).`],
      S`\(-\vec j\ne\vec 0\) : le produit vectoriel n'est pas associatif`,
      vfig(merge(V3, axes3(4.2), { arrows: [{ from: [0, 0], to: p3(2.4, 0, 0), vl: "i", off: 16 }, { from: [0, 0], to: p3(0, 0, 2.4), vl: "k", color: "blue", off: -16 }, { from: [0, 0], to: p3(0, -2.4, 0), color: "red", label: "i × k = −j", off: 16 }] }))],
    ["Un vecteur unitaire perpendiculaire à deux vecteurs", S`Trouve un vecteur unitaire perpendiculaire à la fois à \([1,2,2]\) et à \([2,-1,0]\).`,
      [S`\([1,2,2]\times[2,-1,0]=[2(0)-2(-1),\ 2(2)-1(0),\ 1(-1)-2(2)]=[2,4,-5]\).`, S`Sa norme est \(\sqrt{45}=3\sqrt5\); on divise.`],
      S`\(\frac{1}{3\sqrt5}[2,4,-5]\approx[0.30,0.60,-0.75]\) (ou son opposé)`,
      vfig(merge(V3, axes3(4.2), para([1, 2, 2], [2, -1, 0]), { arrows: [{ from: [0, 0], to: p3(1, 2, 2), vl: "a", off: -16 }, { from: [0, 0], to: p3(2, -1, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0.9, 1.8, -2.25), color: "red", label: "a × b (réduit)", off: 16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.6, ymax: 5 } }))],
  ], [
    q("difficile", S`Trouve l'aire du triangle de sommets \(O\), \((2,0,0)\) et \((0,3,0)\).`, num(3),
      "La moitié du parallélogramme.", [S`\(\frac12|[2,0,0]\times[0,3,0]|=\frac12(6)\).`], S`\(3\)`),
    q("difficile", S`Trouve \(k\) tel que \([1,k,2]\times[2,4,4]=\vec 0\).`, num(2),
      "Les vecteurs doivent être colinéaires.", [S`\([2,4,4]=2[1,2,2]\).`], S`\(2\)`),
    q("difficile", S`\(|\vec a|=3\) et \(|\vec b|=4\). Trouve \(|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2\).`, num(144),
      "sin² θ + cos² θ = 1.", [S`\(9\times16\).`], S`\(144\)`),
  ]),

  wrapUp({
    qas: [
      ["Que donne a × b?", "Un vecteur perpendiculaire à a et à b, dont la norme est l'aire de leur parallélogramme."],
      ["Comment trouver sa direction?", "Règle de la main droite : enroule tes doigts de a vers b; ton pouce indique le sens de a × b."],
      ["Comment vérifier un produit vectoriel calculé?", "Calcule son produit scalaire avec a et avec b : les deux résultats doivent être 0."],
      ["Est-ce que a × b = b × a?", "Non : b × a = −(a × b). Le produit vectoriel n'est pas commutatif, ni associatif."],
      ["Quand le produit vectoriel est-il nul?", "Lorsque les vecteurs sont colinéaires (θ = 0° ou 180°) ou que l'un d'eux est nul."],
    ],
    summary: [
      "a × b = [a₂b₃ − a₃b₂, a₃b₁ − a₁b₃, a₁b₂ − a₂b₁].",
      "|a × b| = |a||b| sin θ = aire du parallélogramme.",
      "b × a = −(a × b); i × j = k.",
      "Colinéaires ⇔ a × b = 0.",
    ],
    next: "En 7.6, on applique le produit scalaire et le produit vectoriel.",
  }),
];
