// MCR3U-FR 5.4 — La loi des sinus et le cas ambigu : ACA/AAC, CCA avec zéro, un ou deux triangles, problèmes.
// Miroir de ../mcr3u-ch5/l5_4.mjs (mêmes nombres, mêmes figures).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.4 La loi des sinus et le cas ambigu";
export const ID = lessonId(5, 4);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const sin = (d) => Math.sin(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
// Exemple 1 : ACA
const e1 = { a: (18 * sin(42)) / sin(63), b: (18 * sin(75)) / sin(63) };
// Exemple 2 : AAC
const e2 = { b: (9 * sin(100)) / sin(35), c: (9 * sin(45)) / sin(35) };
// Exemple 3 : CCA, un triangle
const B3 = dg(Math.asin((9 * sin(50)) / 12)), C3 = 180 - 50 - B3, c3 = (12 * sin(C3)) / sin(50);
// Exemple 4 : CCA, deux triangles
const B4 = dg(Math.asin((11 * sin(32)) / 7)), B4b = 180 - B4;
const CX = 11 * Math.cos(r(32)), CY = 11 * sin(32), DX = Math.sqrt(49 - CY * CY);
// Exemple 5 : bateau
const d5 = (400 * sin(67)) / sin(61);
// Défi 1
const Bh = dg(Math.asin((15 * sin(28)) / 10)), Bh2 = 180 - Bh, Ch = 180 - 28 - Bh, Ch2 = 180 - 28 - Bh2, ch = (10 * sin(Ch)) / sin(28), ch2 = (10 * sin(Ch2)) / sin(28);
// Défi 2 : rivière
const AT = (50 * sin(110)) / sin(30), width = AT * sin(40);

export const blocks = () => [
  intro({
    icon: "📏",
    title: "La loi des sinus et le cas ambigu",
    overview: S`Dans tout triangle, chaque côté est proportionnel au sinus de l'angle opposé : \(\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}\). Dans cette leçon, tu vas utiliser la loi des sinus quand tu connais deux angles et un côté, et quand tu connais deux côtés et un angle opposé à l'un d'eux (CCA). Ce dernier cas est <strong>ambigu</strong> : les données peuvent ne correspondre à aucun triangle, à un seul triangle ou à deux triangles différents.`,
    goals: [
      "déduire la loi des sinus à partir de la hauteur d'un triangle;",
      "résoudre des triangles dans les cas ACA ou AAC;",
      "déterminer si des données CCA donnent 0, 1 ou 2 triangles;",
      "trouver les deux triangles dans le cas ambigu;",
      "résoudre des problèmes d'arpentage et de navigation.",
    ],
    curriculum: "D1.6 (formuler et résoudre des problèmes comportant des triangles rectangles et des triangles quelconques dans des situations à deux dimensions à l'aide des rapports de base, de la loi des cosinus et de la loi des sinus, y compris le cas ambigu)",
    prior: [
      [S`Résous \(\frac{x}{\sin40^\circ}=\frac{12}{\sin65^\circ}\).`, S`\(x=\frac{12\sin40^\circ}{\sin65^\circ}\approx8.51\).`],
      [S`Quels sont les deux angles entre 0° et 180° pour lesquels \(\sin\theta=0.5\)?`, S`\(30^\circ\) et \(150^\circ\).`],
      ["Quelle est la somme des angles d'un triangle?", "180°."],
    ],
    words: [
      ["Triangle quelconque", "un triangle qui n'a pas d'angle droit", ""],
      ["Loi des sinus", "\\(\\frac a{\\sin A}=\\frac b{\\sin B}=\\frac c{\\sin C}\\)", ""],
      ["Cas ambigu", "des données CCA qui peuvent donner deux triangles", ""],
      ["Hauteur h", "\\(h=b\\sin A\\), la plus courte distance de C au côté AB", ""],
    ],
  }),

  section("📌 Pourquoi la loi des sinus fonctionne", S`
  <p>Abaisse la hauteur \(h\) de C au côté AB. Dans les deux triangles rectangles, \(h=b\sin A\) et \(h=a\sin B\). Donc \(b\sin A=a\sin B\), c'est-à-dire \(\frac a{\sin A}=\frac b{\sin B}\). Le même raisonnement avec une autre hauteur fait intervenir \(c\).</p>
  ${table(["Données", "Nombre de triangles", "Outil"], [["ACA ou AAC", "exactement un", "loi des sinus"], ["CCA, ∠A aigu", "0, 1 ou 2 (compare a avec h et b)", "loi des sinus, avec soin"], ["CAC ou CCC", "exactement un", "loi des cosinus (5.5)"]])}
  ${keyIdea(S`CCA avec ∠A aigu et \(h=b\sin A\) : si \(a<h\), aucun triangle; si \(a=h\), un triangle rectangle; si \(h<a<b\), deux triangles (B et 180° − B); si \(a\ge b\), un triangle. Si ∠A est obtus, il y a un seul triangle, seulement lorsque \(a>b\).`)}`),

  section("📌 Explore", S`<p>Fixe ∠A et le côté b, puis fais varier a. Le cercle pointillé montre tous les endroits que le côté a peut atteindre; chaque point d'intersection avec la base est une position possible du sommet B.</p>`),

  widget("ambiguousCase", { init: [35, 10, 7] }),

  section("📌 Attention", watchOut([
    "Associe chaque côté à son angle OPPOSÉ.",
    S`La touche \(\sin^{-1}\) de la calculatrice ne donne qu'un angle aigu — vérifie si \(180^\circ-B\) convient aussi.`,
    "Le deuxième triangle n'existe que si A + (180° − B) < 180°.",
    "Garde les valeurs complètes de la calculatrice pour les étapes suivantes; arrondis seulement les réponses finales.",
  ])),

  examples([
    ["ACA", S`Dans \(\triangle ABC\), \(\angle A=42^\circ\), \(\angle B=75^\circ\) et \(c=18\). Trouve \(a\) et \(b\).`,
      [S`<b>Choisis la loi.</b> On a deux angles et un côté, et aucun angle droit; la loi des sinus s'applique donc : \(\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}\).`,
        S`<b>Troisième angle.</b> La somme des angles est \(180^\circ\) : \(\angle C=180^\circ-42^\circ-75^\circ=63^\circ\). Le côté \(c\) a maintenant son angle opposé, ce qui forme une paire connue.`,
        S`<b>Trouve \(a\).</b> \(\frac a{\sin42^\circ}=\frac{18}{\sin63^\circ}\), donc \(a=\frac{18\sin42^\circ}{\sin63^\circ}\approx${f(e1.a)}\).`,
        S`<b>Trouve \(b\).</b> \(\frac b{\sin75^\circ}=\frac{18}{\sin63^\circ}\), donc \(b=\frac{18\sin75^\circ}{\sin63^\circ}\approx${f(e1.b)}\).`,
        S`<b>Vérifie l'ordre.</b> Les plus grands angles font face aux plus longs côtés : \(42^\circ<63^\circ<75^\circ\) et \(${f(e1.a)}<18<${f(e1.b)}\) ✓`],
      S`\(a\approx${f(e1.a)}\), \(b\approx${f(e1.b)}\)`,
      plane({ view: { xmin: -1, xmax: 20, ymin: -1, ymax: 15 }, segs: [{ pts: [[0, 0], [18, 0], [e1.b * Math.cos(r(42)), e1.b * sin(42)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A 42°" }, { x: 18, y: 0, label: "B 75°" }, { x: e1.b * Math.cos(r(42)), y: e1.b * sin(42), label: "C 63°" }, { x: 9, y: 0, label: "c = 18" }], step: { x: 2, y: 2 } })],
    ["AAC", S`\(\angle A=35^\circ\), \(\angle B=100^\circ\), \(a=9\). Résous le triangle.`,
      [S`<b>Signification.</b> Résoudre un triangle, c'est trouver tous les côtés et tous les angles manquants.`,
        S`<b>Troisième angle.</b> \(\angle C=180^\circ-35^\circ-100^\circ=45^\circ\).`,
        S`<b>Paire connue.</b> \(a=9\) et \(A=35^\circ\) se font face; utilise donc \(\frac9{\sin35^\circ}\) pour chaque inconnue.`,
        S`<b>Trouve \(b\).</b> \(b=\frac{9\sin100^\circ}{\sin35^\circ}\approx${f(e2.b)}\).`,
        S`<b>Trouve \(c\).</b> \(c=\frac{9\sin45^\circ}{\sin35^\circ}\approx${f(e2.c)}\).`,
        S`<b>Vérifie l'ordre.</b> \(35^\circ<45^\circ<100^\circ\) et \(9<${f(e2.c)}<${f(e2.b)}\) ✓`],
      S`\(\angle C=45^\circ\), \(b\approx${f(e2.b)}\), \(c\approx${f(e2.c)}\)`,
      plane({ view: { xmin: -1, xmax: 15, ymin: -1, ymax: 11 }, segs: [{ pts: [[0, 0], [e2.c, 0], [e2.b * Math.cos(r(35)), e2.b * sin(35)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A 35°" }, { x: e2.c, y: 0, label: "B 100°" }, { x: e2.b * Math.cos(r(35)), y: e2.b * sin(35), label: "C 45°" }], step: { x: 2, y: 2 } })],
    ["CCA avec un seul triangle", S`\(\angle A=50^\circ\), \(a=12\), \(b=9\). Résous le triangle.`,
      [S`<b>Attention.</b> Deux côtés et un angle non compris (CCA) peuvent donner 0, 1 ou 2 triangles; on fait donc d'abord un test.`,
        S`<b>Le test.</b> Le côté opposé à l'angle donné est \(a=12\), et il est plus long que \(b=9\). Le côté qui pivote ne peut donc atteindre la base que d'un seul côté : un seul triangle.`,
        S`<b>Trouve \(B\).</b> \(\frac{\sin B}9=\frac{\sin50^\circ}{12}\), donc \(\sin B=\frac{9\sin50^\circ}{12}\) et \(B\approx${f(B3, 1)}^\circ\). L'autre possibilité, \(180^\circ-${f(B3, 1)}^\circ\), additionnée à \(50^\circ\), dépasse \(180^\circ\); elle est donc impossible.`,
        S`<b>Trouve \(C\).</b> \(C\approx180^\circ-50^\circ-${f(B3, 1)}^\circ=${f(C3, 1)}^\circ\).`,
        S`<b>Trouve \(c\).</b> \(c=\frac{12\sin C}{\sin50^\circ}\approx${f(c3)}\). Il fait face au plus grand angle et c'est le plus long côté ✓`],
      S`\(B\approx${f(B3, 1)}^\circ\), \(C\approx${f(C3, 1)}^\circ\), \(c\approx${f(c3)}\)`,
      plane({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 9 }, segs: [{ pts: [[0, 0], [c3, 0], [9 * Math.cos(r(50)), 9 * sin(50)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A 50°" }, { x: c3, y: 0, label: "B" }, { x: 9 * Math.cos(r(50)), y: 9 * sin(50), label: "C" }], step: { x: 2, y: 2 } })],
    ["CCA avec deux triangles", S`\(\angle A=32^\circ\), \(a=7\), \(b=11\). Combien y a-t-il de triangles? Trouve ∠B dans chacun.`,
      [S`<b>Trouve la hauteur.</b> À partir de \(C\), la plus courte distance jusqu'à la base est \(h=b\sin A=11\sin32^\circ\approx${f(11 * sin(32))}\).`,
        S`<b>Compare.</b> \(h<a<b\), c'est-à-dire \(${f(11 * sin(32))}<7<11\). Le côté \(a\) est assez long pour atteindre la base, mais assez court pour l'atteindre en deux endroits.`,
        S`<b>Loi des sinus.</b> \(\sin B=\frac{11\sin32^\circ}7\approx${f((11 * sin(32)) / 7, 4)}\).`,
        S`<b>Les deux angles.</b> Le sinus est positif dans les quadrants 1 et 2, donc \(B\approx${f(B4, 1)}^\circ\) ou \(B\approx180^\circ-${f(B4, 1)}^\circ=${f(B4b, 1)}^\circ\).`,
        S`<b>Vérifie.</b> Les deux laissent de la place pour \(C\) : \(32^\circ+${f(B4b, 1)}^\circ<180^\circ\) ✓. La figure montre les positions ambre et violette du côté \(a\).`],
      S`deux triangles : \(B\approx${f(B4, 1)}^\circ\) ou \(${f(B4b, 1)}^\circ\)`,
      plane({ view: { xmin: -1, xmax: 18, ymin: -1, ymax: 8 }, segs: [{ pts: [[0, 0], [CX, CY]], color: "blue" }, { pts: [[CX, CY], [CX - DX, 0]], color: "amber" }, { pts: [[CX, CY], [CX + DX, 0]], color: "violet" }, { pts: [[0, 0], [17, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A" }, { x: CX, y: CY, label: "C" }, { x: CX - DX, y: 0, label: "B₂" }, { x: CX + DX, y: 0, label: "B₁" }], step: { x: 2, y: 2 } })],
    ["Localiser un bateau", "Deux observateurs distants de 400 m sur une rive rectiligne aperçoivent un bateau. Les angles entre la rive et leurs lignes de visée sont de 52° et de 67°. À quelle distance du premier observateur se trouve le bateau?",
      [S`<b>Croquis.</b> Les observateurs \(A\) et \(B\) et le bateau \(P\) forment un triangle avec \(AB=400\), \(\angle A=52^\circ\), \(\angle B=67^\circ\).`,
        S`<b>Troisième angle.</b> \(\angle P=180^\circ-52^\circ-67^\circ=61^\circ\). Le côté 400 est opposé à \(61^\circ\) : c'est notre paire connue.`,
        S`<b>Associe l'inconnue.</b> \(AP\) est opposé à l'angle en \(B\), \(67^\circ\).`,
        S`<b>Loi des sinus.</b> \(\frac{AP}{\sin67^\circ}=\frac{400}{\sin61^\circ}\), donc \(AP=\frac{400\sin67^\circ}{\sin61^\circ}\approx${f(d5, 1)}\) m.`,
        S`<b>Vérifie la vraisemblance.</b> \(67^\circ>61^\circ\), donc \(AP\) doit être plus long que 400 m ✓`],
      S`\(\approx${f(d5, 1)}\) m`,
      plane({ view: { xmin: -20, xmax: 440, ymin: -20, ymax: 380 }, segs: [{ pts: [[0, 0], [400, 0], [d5 * Math.cos(r(52)), d5 * sin(52)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A 52°" }, { x: 400, y: 0, label: "B 67°" }, { x: d5 * Math.cos(r(52)), y: d5 * sin(52), label: "P 61°" }, { x: 200, y: 0, label: "400 m" }], step: { x: 50, y: 50 } })],
  ]),

  practice([
    q("trouver un côté", S`\(\angle A=40^\circ\), \(\angle B=70^\circ\), \(b=15\). Trouve \(a\), au centième près.`, num((15 * sin(40)) / sin(70), 0.01),
      "a / sin A = b / sin B.", [S`\(a=\frac{15\sin40^\circ}{\sin70^\circ}\).`], S`\(\approx${f((15 * sin(40)) / sin(70))}\)`),
    q("trouver un angle", S`\(\angle A=48^\circ\), \(a=20\), \(b=16\). Trouve ∠B, au dixième près.`, num(dg(Math.asin((16 * sin(48)) / 20)), 0.05),
      "a > b : une seule réponse (aiguë).", [S`\(\sin B=\frac{16\sin48^\circ}{20}\).`], S`\(\approx${f(dg(Math.asin((16 * sin(48)) / 20)), 1)}^\circ\)`),
    q("dénombrer", S`\(\angle A=30^\circ\), \(a=4\), \(b=10\). Combien y a-t-il de triangles?`, num(0),
      "Compare a avec h = b sin A.", [S`\(h=5>4\).`], S`\(0\)`),
    q("dénombrer", S`\(\angle A=40^\circ\), \(a=8\), \(b=10\). Combien y a-t-il de triangles?`, num(2),
      "h = 10 sin 40° ≈ 6.43.", [S`\(h<a<b\).`], S`\(2\)`),
    q("quelle loi", "Tu connais deux côtés et l'angle opposé à l'un d'eux. Par quelle loi commences-tu?", choice(["la loi des sinus", "la loi des cosinus", "le théorème de Pythagore", "aucune — c'est impossible"], 0),
      "Le cas CCA associe un côté à son angle opposé.", ["La loi des sinus, en vérifiant le cas ambigu."], "la loi des sinus"),
  ]),

  ...hard([
    ["Les deux triangles", S`\(\angle A=28^\circ\), \(a=10\), \(b=15\). Résous tous les triangles possibles.`,
      [S`\(h=15\sin28^\circ\approx${f(15 * sin(28))}<10<15\) : deux triangles.`, S`\(B_1\approx${f(Bh, 1)}^\circ\), \(C_1\approx${f(Ch, 1)}^\circ\), \(c_1\approx${f(ch)}\).`, S`\(B_2\approx${f(Bh2, 1)}^\circ\), \(C_2\approx${f(Ch2, 1)}^\circ\), \(c_2\approx${f(ch2)}\).`],
      "deux triangles, comme ci-dessus"],
    ["Largeur d'une rivière", "D'un point A sur une rive rectiligne, la ligne de visée vers un arbre T sur la rive opposée forme un angle de 40° avec la rive. Une arpenteuse marche 50 m le long de la rive, du côté de l'arbre, jusqu'à B, où la ligne de visée vers T forme un angle de 70° avec la rive devant elle (donc ∠ABT = 110°). Trouve la largeur de la rivière.",
      [S`Dans \(\triangle ABT\) : \(\angle A=40^\circ\), \(\angle B=110^\circ\), donc \(\angle T=30^\circ\).`, S`\(AT=\frac{50\sin110^\circ}{\sin30^\circ}\approx${f(AT, 1)}\) m.`, S`Largeur \(=AT\sin40^\circ\approx${f(width, 1)}\) m.`],
      S`\(\approx${f(width, 1)}\) m`,
      plane({ view: { xmin: -10, xmax: 140, ymin: -10, ymax: 70 }, segs: [{ pts: [[0, 0], [50, 0], [AT * Math.cos(r(40)), AT * sin(40)], [0, 0]], color: "blue" }, { pts: [[-10, 0], [140, 0]], color: "green" }, { pts: [[-10, width], [140, width]], color: "green" }], points: [{ x: 0, y: 0, label: "A" }, { x: 50, y: 0, label: "B" }, { x: AT * Math.cos(r(40)), y: width, label: "T" }], step: { x: 10, y: 10 } })],
  ], [
    q("difficile", S`\(\angle A=30^\circ\) et \(b=12\). Quelle est la plus petite valeur entière de \(a\) qui donne deux triangles?`, num(7),
      "Deux triangles quand h < a < b.", [S`\(h=12\sin30^\circ=6\).`], S`\(7\)`),
    q("difficile", S`\(\angle A=40^\circ\), \(a=8\), \(b=10\). Trouve la valeur obtuse de ∠B, au dixième près.`, num(180 - dg(Math.asin((10 * sin(40)) / 8)), 0.05),
      "180° moins la réponse aiguë.", [S`\(B_1=\sin^{-1}\frac{10\sin40^\circ}8\).`], S`\(\approx${f(180 - dg(Math.asin((10 * sin(40)) / 8)), 1)}^\circ\)`),
    q("difficile", "Deux vigies distantes de 2 km sur une côte rectiligne aperçoivent un navire selon des angles de 48° et de 75° avec la côte. À quelle distance de la côte se trouve le navire (en km, au centième près)?", num(((2 * sin(75)) / sin(57)) * sin(48), 0.01),
      "Trouve une ligne de visée avec la loi des sinus, puis utilise le sinus pour la perpendiculaire.", [S`Angle au navire 57°; distance à la première vigie \(\frac{2\sin75^\circ}{\sin57^\circ}\); multiplie par \(\sin48^\circ\).`], S`\(\approx${f(((2 * sin(75)) / sin(57)) * sin(48))}\) km`),
  ]),

  wrapUp({
    qas: [
      ["Quand puis-je utiliser la loi des sinus?", "Quand tu connais un côté et son angle opposé, plus un autre côté ou un autre angle."],
      ["Pourquoi le cas CCA est-il ambigu?", "Le côté a peut pivoter et toucher la base en deux endroits, ce qui donne un ∠B aigu et un ∠B obtus."],
      ["Comment trouver le deuxième triangle?", "Utilise B₂ = 180° − B₁ et vérifie que A + B₂ < 180°."],
      ["Le cas ambigu se produit-il avec ACA?", "Non — deux angles et un côté déterminent le triangle."],
      ["Et si sin B > 1?", "Aucun triangle n'existe : le côté a est trop court pour atteindre la base."],
    ],
    summary: [
      "a/sin A = b/sin B = c/sin C.",
      "ACA, AAC : un seul triangle.",
      "CCA (A aigu) : compare a avec h = b sin A et avec b.",
      "Deuxième solution : 180° − B.",
    ],
    next: "La leçon 5.5 présente la loi des cosinus pour les cas CAC et CCC.",
  }),
];
