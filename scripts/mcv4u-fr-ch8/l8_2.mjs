// MCV4U-FR 8.2 — Équations de plans : équations vectorielle et paramétriques d'un plan à partir d'un point et de deux
// directions, de trois points, ou d'une droite et d'un point; vérification d'un point; plans de coordonnées; points coplanaires
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3, tri3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.2 Équations de plans";
export const ID = lessonId(8, 2);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Équations de plans",
    overview: S`Une droite exige un point et une direction; un plan exige un point et <strong>deux</strong> directions qui ne sont pas parallèles. À partir du point \(\vec r_0\), tu peux atteindre chaque point du plan en te déplaçant de \(s\) fois la première direction et de \(t\) fois la deuxième : \(\vec r=\vec r_0+s\vec a+t\vec b\). C'est l'équation vectorielle du plan; ses composantes sont les équations paramétriques. Trois points qui ne sont pas sur une même droite déterminent toujours un et un seul plan.`,
    goals: [
      "écrire les équations vectorielle et paramétriques d'un plan à partir d'un point et de deux directions;",
      "écrire les équations du plan passant par trois points, ou contenant une droite et un point;",
      "déterminer si un point appartient à un plan;",
      "décrire les plans de coordonnées et les plans qui leur sont parallèles;",
      "déterminer si quatre points sont coplanaires.",
    ],
    curriculum: "C4.5 (déterminer les équations vectorielle et paramétriques d'un plan); C4.3 (trois points non colinéaires déterminent un plan)",
    prior: [
      [S`Vecteur de \(A(1,0,2)\) à \(B(4,1,0)\)?`, S`\([3,1,-2]\).`],
      [S`\([1,2,3]\) et \([2,4,6]\) sont-ils colinéaires?`, S`Oui.`],
      [S`Résous \(s+t=3,\ s-t=1\).`, S`\(s=2,\ t=1\).`],
    ],
    words: [
      ["Vecteurs directeurs", "deux vecteurs non parallèles du plan", "\\(\\vec a,\\ \\vec b\\)"],
      ["Équation vectorielle", "\\(\\vec r=\\vec r_0+s\\vec a+t\\vec b\\)", "s, t réels"],
      ["Équations paramétriques", "trois équations en s et t", ""],
      ["Coplanaires", "situés dans un même plan", ""],
    ],
  }),

  section("📌 Un point et deux directions", S`
  ${vfig(merge(V3, axes3(4.8), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 0.6], [0, 1, 0.3], 1.6)] }, { arrows: [{ from: p3(1.5, 1.5, 1.5), to: p3(3.1, 1.5, 2.46), vl: "a", color: "violet", off: 16, w: 3.2 }, { from: p3(1.5, 1.5, 1.5), to: p3(1.5, 3.1, 1.98), vl: "b", color: "green", off: -16, w: 3.2 }, { from: [0, 0], to: p3(1.5, 1.5, 1.5), vl: "r₀", color: "red", off: -16 }] }), "Chaque point du plan s'écrit r₀ + s a + t b pour des nombres s et t")}
  ${table(["Données", "Utilise"], [
    ["un point et deux directions non parallèles", "ces éléments directement"],
    ["trois points non colinéaires \\(A,B,C\\)", "\\(\\vec r_0=\\overrightarrow{OA}\\), \\(\\vec a=\\overrightarrow{AB}\\), \\(\\vec b=\\overrightarrow{AC}\\)"],
    ["une droite \\(\\vec r=\\vec p+t\\vec m\\) et un point \\(Q\\) hors de la droite", "\\(\\vec r_0=\\vec p\\), \\(\\vec a=\\vec m\\), \\(\\vec b=\\overrightarrow{PQ}\\)"],
    ["deux droites sécantes (ou parallèles)", "un point d'une des droites et les deux directions (ou le vecteur qui relie les deux droites)"],
  ])}
  ${keyIdea(S`Les deux vecteurs directeurs ne doivent pas être parallèles — sinon, ils ne décrivent qu'une droite. Un point appartient au plan exactement lorsqu'un même couple de valeurs \(s,t\) satisfait les trois équations paramétriques : résous-en deux, puis vérifie la troisième.`)}`),

  section("📌 Explorer", S`<p>L'explorateur de plans représente un plan à l'aide de sa normale, une idée utilisée dans la prochaine leçon. Pour l'instant, fais pivoter la vue et remarque qu'un plan est déterminé dès que l'on connaît son inclinaison et un de ses points — et que deux directions situées dans le plan fixent cette inclinaison.</p>`),

  widget("planeLab", { init: { a: 2, b: 3, c: 4, d: 12 } }),

  section("📌 Vérifier des points", S`
  <p>Pour vérifier un point, égale les équations paramétriques à ses coordonnées. Résous deux des équations pour trouver \(s\) et \(t\), puis substitue dans la troisième : si elle est vérifiée, le point appartient au plan. Quatre points sont coplanaires lorsque le vecteur menant au quatrième peut s'écrire à l'aide des deux directions tirées des trois premiers.</p>
  ${watchOut([
    "Des vecteurs directeurs parallèles ne déterminent pas un plan.",
    "Trois points colinéaires ne déterminent pas un plan unique.",
    "Un plan a plusieurs équations vectorielles différentes.",
    "Vérifie la troisième équation — on peut toujours résoudre deux équations.",
    "Dans l'espace à trois dimensions, z = 3 est un plan, pas une droite.",
  ])}`),

  examples([
    ["À partir d'un point et de deux directions", S`Écris les équations vectorielle et paramétriques du plan passant par \(A(1,2,-1)\) de directions \([2,0,1]\) et \([1,-1,3]\), et trouve le point obtenu avec \(s=1\), \(t=2\).`,
      [S`\(\vec r=[1,2,-1]+s[2,0,1]+t[1,-1,3]\).`, S`\(x=1+2s+t,\ y=2-t,\ z=-1+s+3t\); avec \(s=1,t=2\) : \((5,0,6)\).`],
      S`\(\vec r=[1,2,-1]+s[2,0,1]+t[1,-1,3]\); le point \((5,0,6)\)`],
    ["Par trois points", S`Écris une équation vectorielle du plan passant par \(A(2,1,0)\), \(B(4,0,3)\) et \(C(1,3,1)\).`,
      [S`\(\overrightarrow{AB}=[2,-1,3]\) et \(\overrightarrow{AC}=[-1,2,1]\), qui ne sont pas parallèles.`],
      S`\(\vec r=[2,1,0]+s[2,-1,3]+t[-1,2,1]\)`,
      vfig(merge(V3, axes3(4.8), { polys: [{ pts: [p3(2, 1, 0), p3(4, 0, 3), p3(1, 3, 1)], fill: "#dbeafe", stroke: "blue" }], points: [pt(2, 1, 0, "A", -6, 18), pt(4, 0, 3, "B", -16, -6), pt(1, 3, 1, "C")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } }))],
    ["Le point appartient-il au plan?", S`Le point \((2,4,5)\) appartient-il au plan \(\vec r=[2,1,0]+s[2,-1,3]+t[-1,2,1]\)?`,
      [S`\(x\) : \(2+2s-t=2\); \(y\) : \(1-s+2t=4\). Ces équations donnent \(t=2s\) et \(-s+4s=3\), donc \(s=1\), \(t=2\).`, S`\(z\) : \(3s+t=3+2=5\). ✓`],
      S`oui, avec \(s=1\), \(t=2\)`],
    ["Une droite et un point", S`Trouve une équation vectorielle du plan contenant la droite \(\vec r=[1,0,2]+t[1,1,0]\) et le point \(P(3,-1,4)\).`,
      [S`Utilise le point et la direction de la droite, ainsi que le vecteur de \((1,0,2)\) à \(P\) : \([2,-1,2]\).`],
      S`\(\vec r=[1,0,2]+s[1,1,0]+t[2,-1,2]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.6, 0.2, 2.6], [1, 1, 0], [2, -1, 2], 0.9)] }, { segs: [line3([1, 0, 2], [1, 1, 0], -1.4, 2, "red", 3)] }, { points: [pt(3, -1, 4, "P"), pt(1, 0, 2, "(1, 0, 2)", -70, 14)] }, { view: { xmin: -4.4, xmax: 5.6, ymin: -2.8, ymax: 6.4 } }))],
    ["Plans de coordonnées", S`Écris des équations vectorielles du plan xz et du plan \(z=3\).`,
      [S`Le plan xz contient l'origine et les directions \(\vec i\) et \(\vec k\).`, S`Le plan \(z=3\) contient \((0,0,3)\) et est parallèle à \(\vec i\) et à \(\vec j\).`],
      S`\(\vec r=s[1,0,0]+t[0,0,1]\); \(\vec r=[0,0,3]+s[1,0,0]+t[0,1,0]\)`,
      vfig(merge(V3, axes3(4.8), { polys: [{ ...patch3([1.5, 1.5, 3], [1, 0, 0], [0, 1, 0], 1.8), fill: "#dcfce7", stroke: "green" }, patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5)] }, { texts: [{ x: 3.3, y: 3.6, t: "z = 3", color: "green" }, { x: -2, y: 2.4, t: "plan xz", color: "blue" }] }))],
  ]),

  practice([
    q("point", S`Pour \(\vec r=[1,1,1]+s[1,0,2]+t[0,3,1]\), trouve l'abscisse du point obtenu avec \(s=2\), \(t=-1\).`, num(3),
      "1 + 2(1) + (−1)(0).", [S`\(1+2\).`], S`\(3\)`),
    q("directions", S`Quelle paire de vecteurs ne peut pas servir de directions à un plan?`, choice([S`\([1,2,3]\) et \([2,4,6]\)`, S`\([1,0,0]\) et \([0,1,0]\)`, S`\([1,1,0]\) et \([0,1,1]\)`, S`\([2,1,1]\) et \([1,2,1]\)`], 0),
      "Des directions parallèles ne donnent qu'une droite.", ["Cherche un multiple scalaire."], S`\([1,2,3]\) et \([2,4,6]\)`),
    q("point", S`Pour \(\vec r=[0,2,5]+s[1,1,0]+t[2,0,-3]\), trouve la cote (coordonnée z) du point obtenu avec \(s=0\), \(t=1\).`, num(2),
      "5 + (−3).", [S`\(z=5-3\).`], S`\(2\)`),
    q("nombre", S`Combien de points non colinéaires faut-il pour déterminer un plan?`, num(3),
      "Deux points ne donnent qu'une droite.", ["Trois points qui ne sont pas sur une même droite."], S`\(3\)`),
    q("plan", S`Que représente \(z=0\) dans l'espace à trois dimensions?`, choice(["le plan xy", "l'axe des z", "l'origine", "le plan xz"], 0),
      "Tous les points tels que z = 0.", ["x et y sont libres."], "le plan xy"),
  ]),

  ...hard([
    ["Un plan à partir de ses points d'intersection avec les axes", S`Trouve une équation vectorielle du plan passant par \(A(1,0,0)\), \(B(0,2,0)\) et \(C(0,0,3)\), et montre que chacun de ses points satisfait \(6x+3y+2z=6\).`,
      [S`\(\overrightarrow{AB}=[-1,2,0]\), \(\overrightarrow{AC}=[-1,0,3]\) : \(\vec r=[1,0,0]+s[-1,2,0]+t[-1,0,3]\).`, S`Paramétriques : \(x=1-s-t,\ y=2s,\ z=3t\). Alors \(6x+3y+2z=6-6s-6t+6s+6t=6\).`],
      S`\(\vec r=[1,0,0]+s[-1,2,0]+t[-1,0,3]\), et \(6x+3y+2z=6\) pour toutes les valeurs de \(s\) et de \(t\)`,
      vfig(merge(V3, axes3(4.6), { polys: [tri3(1, 2, 3)] }, { points: [pt(1, 0, 0, "A", -14, 16), pt(0, 2, 0, "B", 2, 18), pt(0, 0, 3, "C", 8, 0)] }))],
    ["Quatre points dans un même plan?", S`Montre que \(A(1,1,1)\), \(B(2,3,2)\), \(C(3,1,4)\) et \(D(4,3,5)\) sont coplanaires.`,
      [S`\(\overrightarrow{AB}=[1,2,1]\), \(\overrightarrow{AC}=[2,0,3]\), \(\overrightarrow{AD}=[3,2,4]\).`, S`\(\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}\); donc \(D\) appartient au plan passant par \(A\) de directions \(\overrightarrow{AB}\), \(\overrightarrow{AC}\) (\(s=t=1\)).`],
      S`coplanaires — en fait, \(ABDC\) est un parallélogramme`,
      vfig(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 1, 1), p3(2, 3, 2), p3(4, 3, 5), p3(3, 1, 4)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 1, 1, "A", -16, 10), pt(2, 3, 2, "B"), pt(3, 1, 4, "C", -16, -6), pt(4, 3, 5, "D")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))],
  ], [
    q("difficile", S`Le plan \(\vec r=[1,2,3]+s[1,0,0]+t[0,1,0]\) contient \((5,-2,3)\). Trouve \(s\).`, num(4),
      "x = 1 + s.", [S`\(1+s=5\).`], S`\(4\)`),
    q("difficile", S`Quelle est la cote (coordonnée z) de chaque point de \(\vec r=[1,2,3]+s[1,0,0]+t[0,1,0]\)?`, num(3),
      "Aucune des directions ne modifie z.", [S`\(z=3\).`], S`\(3\)`),
    q("difficile", S`Trouve \(k\) pour que \((k,1,0)\) appartienne à \(\vec r=s[1,1,0]+t[0,1,1]\).`, num(1),
      "z = t = 0, puis y = s = 1.", [S`\(x=s\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce qui détermine un plan?", "Un point et deux directions non parallèles — ou trois points non colinéaires, ou une droite et un point situé hors de cette droite."],
      ["À quoi servent s et t?", "Ils indiquent de combien se déplacer selon chaque direction; chaque couple (s, t) donne un point du plan."],
      ["Comment vérifier si un point appartient au plan?", "Résous deux équations paramétriques pour trouver s et t, puis vérifie la troisième."],
      ["Pourquoi les directions ne peuvent-elles pas être parallèles?", "Des directions parallèles pointent le long d'une même droite; leurs combinaisons restent donc sur cette droite."],
      ["Comment montrer que quatre points sont coplanaires?", "Écris le vecteur menant au quatrième point comme une combinaison des deux directions tirées des trois premiers."],
    ],
    summary: [
      "r = r₀ + s a + t b.",
      "Trois points : utilise AB et AC.",
      "Vérifier un point : résous deux équations, vérifie la troisième.",
      "Les directions ne doivent pas être parallèles.",
    ],
    next: "En 8.3, on décrit les plans à l'aide d'un vecteur normal.",
  }),
];
