// MCR3U-FR 5.5 — La loi des cosinus : cas CAC et CCC, démonstration à partir du théorème de Pythagore, choix d'une
// loi, applications. Miroir de ../mcr3u-ch5/l5_5.mjs (mêmes nombres, mêmes figures).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.5 La loi des cosinus";
export const ID = lessonId(5, 5);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const cos = (d) => Math.cos(r(d)), sin = (d) => Math.sin(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const side = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const ang = (a, b, c) => dg(Math.acos((b * b + c * c - a * a) / (2 * b * c))); // angle opposé à a
// valeurs des exemples
const e1 = side(8, 11, 52);
const e2 = ang(13, 7, 9); // plus grand angle, opposé à 13
const e3a = side(14, 10, 118), e3B = dg(Math.asin((14 * sin(118)) / e3a));
const e4 = side(3.2, 4.5, 180 - 35); // navire : changement de cap
const e5 = ang(6, 4, 5);
// niveau difficile
const hp = side(20, 15, 180 - 40); // grande diagonale du parallélogramme : côtés 20, 15, angle 40°
const hq = side(20, 15, 40);
const hk = { a: 9, b: 12, c: 16 };
const hkA = ang(hk.a, hk.b, hk.c), hkB = ang(hk.b, hk.a, hk.c), hkC = 180 - hkA - hkB;
const triFig = (A, b, c, labels) => {
  const Cx = b * cos(A), Cy = b * sin(A);
  return plane({ view: { xmin: Math.min(-1, Cx - 1), xmax: Math.max(c, Cx) + 1.5, ymin: -1, ymax: Cy + 1.5 }, segs: [{ pts: [[0, 0], [c, 0], [Cx, Cy], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: labels[0] }, { x: c, y: 0, label: labels[1] }, { x: Cx, y: Cy, label: labels[2] }], step: { x: 2, y: 2 } });
};

export const blocks = () => [
  intro({
    icon: "📐",
    title: "La loi des cosinus",
    overview: S`La loi des sinus exige un côté accompagné de son angle opposé. Quand tu connais deux côtés et l'angle <em>compris entre</em> eux (CAC), ou les trois côtés (CCC), tu as besoin de la <strong>loi des cosinus</strong> : \(a^2=b^2+c^2-2bc\cos A\). C'est le théorème de Pythagore avec un terme de correction, et il n'y a jamais de cas ambigu.`,
    goals: [
      "déduire la loi des cosinus à partir du théorème de Pythagore;",
      "trouver le troisième côté dans le cas CAC;",
      "trouver un angle dans le cas CCC;",
      "choisir entre la loi des sinus et la loi des cosinus;",
      "résoudre des problèmes de navigation, d'arpentage et de conception.",
    ],
    curriculum: "D1.6 (formuler et résoudre des problèmes comportant des triangles rectangles et des triangles quelconques dans des situations à deux dimensions à l'aide des rapports de base, de la loi des cosinus et de la loi des sinus)",
    prior: [
      [S`Évalue \(\cos120^\circ\).`, S`\(-\frac12\).`],
      [S`Résous \(\cos A=0.25\) pour un angle A aigu.`, S`\(A\approx75.5^\circ\).`],
      [S`Développe \((c-x)^2\).`, S`\(c^2-2cx+x^2\).`],
    ],
    words: [
      ["CAC", "deux côtés et l'angle compris entre eux", ""],
      ["CCC", "les trois côtés", ""],
      ["Loi des cosinus", "\\(a^2=b^2+c^2-2bc\\cos A\\)", ""],
      ["Angle compris", "l'angle entre deux côtés donnés", ""],
    ],
  }),

  section("📌 D'où vient-elle?", S`
  <p>Place A à l'origine et le côté c le long de l'axe des x, de sorte que \(C=(b\cos A,\ b\sin A)\) et \(B=(c,0)\). Alors
  \(a^2=(c-b\cos A)^2+(b\sin A)^2=c^2-2bc\cos A+b^2(\cos^2A+\sin^2A)=b^2+c^2-2bc\cos A\).</p>
  ${table(["Forme", "Utilisation"], [["\\(a^2=b^2+c^2-2bc\\cos A\\)", "CAC : trouver le côté a"], ["\\(\\cos A=\\dfrac{b^2+c^2-a^2}{2bc}\\)", "CCC : trouver l'angle A"], ["A = 90°", "\\(\\cos A=0\\) donne Pythagore"]])}
  ${keyIdea(S`Si A est obtus, \(\cos A<0\), donc \(a^2>b^2+c^2\). Le signe de \(b^2+c^2-a^2\) t'indique immédiatement si A est aigu, droit ou obtus.`)}`),

  section("📌 Explore", S`<p>Fixe deux côtés et l'angle compris entre eux. Observe le terme de correction \(-2bc\cos A\) : il est négatif pour les angles aigus, nul à 90° et positif pour les angles obtus.</p>`),

  widget("cosineLaw", { init: [7, 9, 60] }),

  section("📌 Attention", watchOut([
    "L'angle de la formule doit être opposé au côté qui est dans le membre de gauche.",
    S`Effectue la multiplication \(2bc\cos A\) avant de soustraire — ne calcule jamais \((b^2+c^2-2bc)\cos A\).`,
    S`Dans le cas CCC, trouve d'abord le plus grand angle (opposé au plus long côté) — les deux autres sont alors aigus et la loi des sinus est sans danger.`,
    S`\(\cos^{-1}\) donne des angles jusqu'à 180°; une réponse obtuse apparaît donc automatiquement.`,
  ])),

  examples([
    ["CAC", S`Dans \(\triangle ABC\), \(b=8\), \(c=11\) et \(\angle A=52^\circ\). Trouve \(a\).`,
      [S`<b>Choisis la loi.</b> On connaît deux côtés et l'angle compris entre eux; aucun côté n'a donc son angle opposé. La loi des sinus ne peut pas servir de point de départ, mais la loi des cosinus, oui : \(a^2=b^2+c^2-2bc\cos A\).`,
        S`<b>Remplace.</b> \(a^2=8^2+11^2-2(8)(11)\cos52^\circ=185-176\cos52^\circ\).`,
        S`<b>Priorité des opérations.</b> Calcule \(176\cos52^\circ\approx${f(176 * cos(52))}\) avant de soustraire. Alors \(a^2\approx${f(e1 * e1)}\).`,
        S`<b>Extrais la racine.</b> \(a\approx${f(e1)}\).`,
        S`<b>Vérifie la vraisemblance.</b> Avec un angle droit, le côté mesurerait \(\sqrt{185}\approx13.6\). Un angle plus petit donne un côté plus court, et \(${f(e1)}<13.6\) ✓`],
      S`\(a\approx${f(e1)}\)`,
      triFig(52, 8, 11, ["A", "B", "C"])],
    ["CCC : le plus grand angle", "Un triangle a des côtés de 7, 9 et 13. Trouve son plus grand angle.",
      [S`<b>Quel angle?</b> Le plus grand angle fait face au plus long côté, 13.`,
        S`<b>Réarrange la loi des cosinus.</b> \(\cos\theta=\dfrac{7^2+9^2-13^2}{2(7)(9)}\).`,
        S`<b>Calcule.</b> Numérateur : \(49+81-169=-39\). Dénominateur : \(126\). Donc \(\cos\theta=-\frac{39}{126}\approx-0.3095\).`,
        S`<b>Trouve l'angle.</b> \(\theta=\cos^{-1}(-0.3095)\approx${f(e2, 1)}^\circ\). Le cosinus négatif donne correctement un angle obtus.`,
        S`<b>Vérifie la vraisemblance.</b> \(7^2+9^2=130\), ce qui est inférieur à \(13^2=169\); le triangle doit donc être obtusangle ✓`],
      S`\(\approx${f(e2, 1)}^\circ\) (obtus)`,
      triFig(e2, 7, 9, ["θ", "", ""])],
    ["Résoudre tout le triangle", S`\(\angle A=118^\circ\), \(b=14\), \(c=10\). Trouve \(a\) et \(\angle B\).`,
      [S`<b>Trouve \(a\).</b> C'est le cas CAC; utilise donc la loi des cosinus : \(a^2=196+100-2(14)(10)\cos118^\circ=296-280\cos118^\circ\).`,
        S`<b>Attention au signe.</b> \(\cos118^\circ<0\); le soustraire revient donc à additionner : \(a^2\approx296+${f(-280 * cos(118))}\), ce qui donne \(a\approx${f(e3a)}\).`,
        S`<b>Trouve \(B\).</b> Maintenant, \(a\) a son angle opposé; la loi des sinus peut donc servir. Un triangle ne peut avoir qu'un seul angle obtus, et c'est \(A\); \(B\) est donc aigu : \(\sin B=\frac{14\sin118^\circ}{${f(e3a)}}\), ce qui donne \(B\approx${f(e3B, 1)}^\circ\).`,
        S`<b>Troisième angle.</b> \(C\approx180^\circ-118^\circ-${f(e3B, 1)}^\circ=${f(180 - 118 - e3B, 1)}^\circ\).`,
        S`<b>Vérifie.</b> L'ordre des côtés \(10<14<${f(e3a)}\) correspond à l'ordre des angles \(${f(180 - 118 - e3B, 1)}^\circ<${f(e3B, 1)}^\circ<118^\circ\) ✓`],
      S`\(a\approx${f(e3a)}\), \(B\approx${f(e3B, 1)}^\circ\)`,
      triFig(118, 14, 10, ["A", "B", "C"])],
    ["Navigation", "Un navire parcourt 3.2 km vers l'est, puis tourne de 35° vers la gauche et parcourt 4.5 km. À quelle distance de son point de départ se trouve-t-il?",
      [S`<b>Fais un dessin.</b> La figure montre les deux trajets et la distance en ligne droite \(d\), en rouge.`,
        S`<b>Trouve l'angle intérieur.</b> Un virage de \(35^\circ\) se mesure à partir de l'ancienne direction. L'angle à l'intérieur du triangle est son supplément : \(180^\circ-35^\circ=145^\circ\). Utiliser \(35^\circ\) ici est l'erreur la plus fréquente.`,
        S`<b>Loi des cosinus.</b> \(d^2=3.2^2+4.5^2-2(3.2)(4.5)\cos145^\circ=30.49-28.8\cos145^\circ\).`,
        S`<b>Calcule.</b> \(\cos145^\circ<0\); le dernier terme s'additionne donc : \(d^2\approx30.49+${f(-28.8 * cos(145))}\), ce qui donne \(d\approx${f(e4)}\) km.`,
        S`<b>Vérifie la vraisemblance.</b> Le virage est petit; \(d\) devrait donc être proche du total \(3.2+4.5=7.7\) km, mais inférieur ✓`],
      S`\(d\approx${f(e4)}\) km`,
      plane({ view: { xmin: -0.5, xmax: 8, ymin: -0.5, ymax: 3.5 }, segs: [{ pts: [[0, 0], [3.2, 0], [3.2 + 4.5 * cos(35), 4.5 * sin(35)]], color: "blue" }, { pts: [[0, 0], [3.2 + 4.5 * cos(35), 4.5 * sin(35)]], color: "red" }], points: [{ x: 0, y: 0, label: "départ" }, { x: 3.2, y: 0, label: "virage" }, { x: 3.2 + 4.5 * cos(35), y: 4.5 * sin(35), label: "navire" }], step: { x: 1, y: 1 } })],
    ["Aigu, droit ou obtus?", "Classe le triangle de côtés 4, 5 et 6 selon son plus grand angle, puis trouve cet angle.",
      [S`<b>Règle.</b> Compare le carré du plus long côté avec la somme des carrés des deux autres. Cela vient du signe de \(\cos\theta\) dans la loi des cosinus.`,
        S`<b>Compare.</b> \(4^2+5^2=41\) et \(6^2=36\). Comme \(41>36\), le cosinus est positif; le plus grand angle est donc aigu.`,
        S`<b>Trouve l'angle.</b> \(\cos\theta=\frac{41-36}{2(4)(5)}=\frac5{40}=0.125\), donc \(\theta\approx${f(e5, 1)}^\circ\).`,
        S`<b>Vérifie.</b> Le plus grand angle d'un triangle mesure au moins \(60^\circ\), et celui-ci est compris entre \(60^\circ\) et \(90^\circ\) ✓`],
      S`aigu, \(\approx${f(e5, 1)}^\circ\)`,
      triFig(e5, 4, 5, ["θ", "", ""])],
  ]),

  practice([
    q("CAC", S`\(b=5\), \(c=7\), \(\angle A=60^\circ\). Trouve \(a\), au centième près.`, num(side(5, 7, 60), 0.01),
      "cos 60° = ½.", [S`\(a^2=25+49-35=39\).`], S`\(\sqrt{39}\approx${f(side(5, 7, 60))}\)`),
    q("CCC", "Un triangle a des côtés de 5, 6 et 8. Trouve l'angle opposé au côté 8, au dixième près.", num(ang(8, 5, 6), 0.05),
      "cos θ = (25 + 36 − 64)/60.", [S`\(\cos\theta=-0.05\).`], S`\(\approx${f(ang(8, 5, 6), 1)}^\circ\)`),
    q("quelle loi", "Tu connais les trois côtés d'un triangle. Quelle loi permet de trouver un angle?", choice(["la loi des cosinus", "la loi des sinus", "l'une ou l'autre, directement", "aucune"], 0),
      "Aucun angle n'est encore connu.", ["Le cas CCC exige la loi des cosinus."], "la loi des cosinus"),
    q("classer", "Côtés 8, 15, 17 : quelle est la mesure du plus grand angle?", num(90),
      "Compare 8² + 15² avec 17².", [S`\(64+225=289\).`], S`\(90^\circ\)`),
    q("CAC", S`Deux côtés d'une plate-bande mesurent 6 m et 4 m, et l'angle compris entre eux mesure 120°. Quelle est la longueur du troisième côté (au centième près)?`, num(side(6, 4, 120), 0.01),
      "cos 120° = −½.", [S`\(36+16+24=76\).`], S`\(\sqrt{76}\approx${f(side(6, 4, 120))}\) m`),
  ]),

  ...hard([
    ["Diagonales d'un parallélogramme", "Un parallélogramme a des côtés de 20 cm et de 15 cm et un angle de 40°. Trouve ses deux diagonales.",
      [S`Petite diagonale (opposée à 40°) : \(\sqrt{400+225-600\cos40^\circ}\approx${f(hq)}\).`, S`Grande diagonale (opposée à 140°) : \(\sqrt{400+225-600\cos140^\circ}\approx${f(hp)}\).`, S`Vérification : \(d_1^2+d_2^2=2(20^2+15^2)=1250\) ✓.`],
      S`\(\approx${f(hq)}\) cm et \(\approx${f(hp)}\) cm`,
      plane({ view: { xmin: -1, xmax: 33, ymin: -1, ymax: 11 }, segs: [{ pts: [[0, 0], [20, 0], [20 + 15 * cos(40), 15 * sin(40)], [15 * cos(40), 15 * sin(40)], [0, 0]], color: "blue" }, { pts: [[0, 0], [20 + 15 * cos(40), 15 * sin(40)]], color: "red" }, { pts: [[20, 0], [15 * cos(40), 15 * sin(40)]], color: "amber" }], points: [{ x: 0, y: 0, label: "40°" }, { x: 10, y: 0, label: "20" }], step: { x: 5, y: 2 } })],
    ["Les trois angles", "Résous le triangle de côtés 9, 12 et 16.",
      [S`Plus grand angle (opposé à 16) : \(\cos C=\frac{81+144-256}{216}\Rightarrow C\approx${f(hkC, 1)}^\circ\).`, S`\(\cos A=\frac{144+256-81}{384}\Rightarrow A\approx${f(hkA, 1)}^\circ\).`, S`\(B=180^\circ-A-C\approx${f(hkB, 1)}^\circ\).`],
      S`\(${f(hkA, 1)}^\circ,\ ${f(hkB, 1)}^\circ,\ ${f(hkC, 1)}^\circ\)`],
  ], [
    q("difficile", "Deux randonneurs quittent le camp par des sentiers rectilignes qui forment un angle de 65°. L'un marche 4 km, l'autre 6 km. Quelle distance les sépare (au centième près)?", num(side(4, 6, 65), 0.01),
      "Cas CAC avec l'angle de 65° au camp.", [S`\(16+36-48\cos65^\circ\).`], S`\(\approx${f(side(4, 6, 65))}\) km`),
    q("difficile", "Trouve x pour qu'un triangle de côtés 7, 8 et x ait un angle de 60° entre les côtés 7 et 8.", num(Math.sqrt(57), 0.01),
      "x² = 49 + 64 − 56.", [S`\(x^2=57\).`], S`\(\sqrt{57}\approx7.55\)`),
    q("difficile", "Les côtés d'un triangle mesurent 10, 10 et 16. Trouve l'angle au sommet entre les deux côtés égaux (au dixième près).", num(ang(16, 10, 10), 0.05),
      "Il est opposé au côté 16.", [S`\(\cos\theta=\frac{200-256}{200}=-0.28\).`], S`\(\approx${f(ang(16, 10, 10), 1)}^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Quand ai-je besoin de la loi des cosinus?", "Dans le cas CAC (trouver le troisième côté) ou CCC (trouver un angle)."],
      ["Pourquoi n'y a-t-il pas de cas ambigu?", "cos⁻¹ donne un angle unique de 0° à 180°, et les cas CAC et CCC déterminent un seul triangle."],
      ["Quel est le lien avec Pythagore?", "Quand A = 90°, cos A = 0 et la formule devient a² = b² + c²."],
      ["Après une étape avec la loi des cosinus, puis-je passer à la loi des sinus?", "Oui — mais cherche les angles opposés aux côtés les plus courts pour être certain qu'ils sont aigus."],
      ["Comment poser un problème de navigation?", "Dessine les deux trajets; l'angle du triangle est 180° moins le virage."],
    ],
    summary: [
      "a² = b² + c² − 2bc cos A.",
      "cos A = (b² + c² − a²)/(2bc).",
      "CAC, CCC → loi des cosinus; ACA, AAC, CCA → loi des sinus.",
      "cos A négatif ⇒ angle obtus.",
    ],
    next: "La leçon 5.6 utilise tous ces outils dans des problèmes à trois dimensions.",
  }),
];
