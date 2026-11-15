// MCR3U-FR 7.2 — Suites géométriques : raison, terme général, formule de récurrence, graphiques exponentiels discrets,
// trouver le rang d'un terme, trouver a et r à partir de deux termes, applications. Miroir de ../mcr3u-ch7/l7_2.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.2 Suites géométriques";
export const ID = lessonId(7, 2);
const S = String.raw;
const pts = (f, n) => Array.from({ length: n }, (_, i) => ({ x: i + 1, y: f(i + 1) }));
const f = (v, k = 3) => String(Math.round(v * 10 ** k) / 10 ** k);

export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Suites géométriques",
    overview: S`Dans une <strong>suite géométrique</strong>, on multiplie toujours par le même nombre, la raison \(r\), pour passer d'un terme au suivant. Son terme général est \(t_n=ar^{n-1}\) et son graphique est un ensemble de points sur une courbe exponentielle. Dans cette leçon, tu vas trouver la raison, écrire le terme général et une formule de récurrence, trouver le rang d'un terme et modéliser des situations comme une balle qui rebondit ou un message qui se propage.`,
    goals: [
      "reconnaître une suite géométrique et trouver sa raison;",
      "écrire et utiliser le terme général t_n = a·r^(n − 1);",
      "écrire une formule de récurrence t_n = r·t_(n−1);",
      "trouver le rang du terme qui a une valeur donnée;",
      "trouver a et r à partir de deux termes et résoudre des problèmes.",
    ],
    curriculum: "C1.4 (représenter une suite algébriquement à l'aide d'une formule de récurrence, de la notation fonctionnelle ou de la formule du n-ième terme), C3.1 (déterminer si une suite est arithmétique, géométrique ou ni l'une ni l'autre), C3.2 (déterminer la formule du terme général d'une suite géométrique et l'appliquer)",
    prior: [
      [S`Évalue \(3\cdot2^5\).`, "96."],
      [S`Résous \(2^k=256\).`, "k = 8."],
      ["Combien font 20 % de moins que 150?", "120."],
    ],
    words: [
      ["Raison r", "\\(\\frac{t_n}{t_{n-1}}\\), la même pour chaque n", ""],
      ["Terme général", "\\(t_n=ar^{n-1}\\)", ""],
      ["Formule de récurrence", "\\(t_1=a,\\ t_n=r\\,t_{n-1}\\)", ""],
      ["Suite alternée", "une suite géométrique avec r < 0; les signes alternent", ""],
    ],
  }),

  section("📌 Arithmétique ou géométrique", S`
  ${table(["", "Arithmétique", "Géométrique"], [["Étape", "additionner d", "multiplier par r"], ["Test", "\\(t_n-t_{n-1}\\) constant", "\\(\\frac{t_n}{t_{n-1}}\\) constant"], ["Terme général", "\\(a+(n-1)d\\)", "\\(ar^{n-1}\\)"], ["Graphique", "des points sur une droite", "des points sur une courbe exponentielle"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 100 }, points: pts((n) => 3 * 2 ** (n - 1), 6), curves: [{ f: (x) => 3 * 2 ** (x - 1), a: 0.5, b: 6.5, color: "gray" }], step: { x: 1, y: 10 }, xlabel: "n", ylabel: "tₙ" }, "3, 6, 12, 24, 48, 96 sont sur la courbe exponentielle y = 3(2)^(x − 1)")}
  ${keyIdea(S`Pour trouver le rang du terme qui égale une valeur, pose \(ar^{n-1}\) égal à cette valeur et écris les deux membres comme des puissances de la même base.`)}`),

  section("📌 Explore", S`<p>Essaie une raison supérieure à 1, une raison entre 0 et 1, puis une raison négative. Comment le graphique change-t-il chaque fois?</p>`),

  widget("geoLab", { init: [3, 2] }),

  section("📌 Attention", watchOut([
    "r = (un terme) ÷ (le terme qui le précède).",
    "L'exposant est n − 1, et non n.",
    "Si r est négatif, mets r entre parenthèses : (−2)^(n − 1).",
    "Une diminution de p % donne r = 1 − p/100.",
  ])),

  examples([
    ["Reconnaître et prolonger", "La suite 5, 15, 45, 135, … est-elle géométrique? Trouve le terme suivant.",
      [S`<b>Définition.</b> Une suite est géométrique si le quotient de deux termes consécutifs est constant.`,
        S`<b>Test.</b> \(\frac{15}5=3\), \(\frac{45}{15}=3\), \(\frac{135}{45}=3\). Donc \(r=3\).`,
        S`<b>Prolonger.</b> \(135\times3=405\).`,
        S`<b>Pas arithmétique.</b> Les différences \(10,30,90\) ne sont pas constantes. Les points s'incurvent vers le haut au lieu d'être alignés ✓`],
      "oui, avec r = 3; le terme suivant est 405",
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 450 }, points: [...pts((n) => 5 * 3 ** (n - 1), 4), { x: 5, y: 405, label: "(5, 405)", color: "amber" }], step: { x: 1, y: 50 }, xlabel: "n", ylabel: "tₙ" })],
    ["Une suite alternée", S`Trouve le terme général de \(64,-32,16,\ldots\) et \(t_8\).`,
      [S`<b>Raison.</b> \(\frac{-32}{64}=-\frac12\) et \(\frac{16}{-32}=-\frac12\). Une raison négative fait alterner les signes.`,
        S`<b>Formule.</b> Pour atteindre le terme \(n\), on multiplie par \(r\) exactement \(n-1\) fois : \(t_n=ar^{n-1}=64\left(-\frac12\right)^{n-1}\).`,
        S`<b>Évaluer.</b> \(t_8=64\left(-\frac12\right)^7=64\left(-\frac1{128}\right)=-\frac{64}{128}\).`,
        S`<b>Simplifier.</b> \(t_8=-0.5\).`,
        S`<b>Vérifier le signe.</b> Ici, les termes de rang pair sont négatifs, donc \(t_8<0\) ✓`],
      S`\(t_n=64\left(-\frac12\right)^{n-1}\); \(t_8=-0.5\)`,
      plane({ view: { xmin: 0, xmax: 9, ymin: -36, ymax: 70 }, points: [...pts((n) => 64 * (-0.5) ** (n - 1), 7), { x: 8, y: -0.5, label: "(8, −0.5)", color: "amber" }], step: { x: 1, y: 10 }, xlabel: "n", ylabel: "tₙ" })],
    ["Quel rang?", "Quel est le rang du terme 1536 dans la suite 3, 6, 12, …?",
      [S`<b>Terme général.</b> \(a=3\), \(r=2\) : \(t_n=3(2)^{n-1}\).`,
        S`<b>Mise en équation.</b> \(3(2)^{n-1}=1536\). Divise par 3 : \(2^{n-1}=512\).`,
        S`<b>Même base.</b> \(512=2^9\), donc \(n-1=9\).`,
        S`<b>Résoudre.</b> \(n=10\).`,
        S`<b>Vérification.</b> \(3(2^9)=3(512)=1536\) ✓`],
      "le 10<sup>e</sup> terme",
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 1700 }, points: [...pts((n) => 3 * 2 ** (n - 1), 9), { x: 10, y: 1536, label: "(10, 1536)", color: "amber" }], step: { x: 1, y: 200 }, xlabel: "n", ylabel: "tₙ" })],
    ["À partir de deux termes", S`Une suite géométrique a \(t_2=12\) et \(t_5=324\). Trouve \(a\) et \(r\).`,
      [S`<b>Compter les étapes.</b> Du terme 2 au terme 5, il y a 3 multiplications : \(t_5=t_2\cdot r^3\).`,
        S`<b>Trouver \(r\).</b> \(r^3=\frac{324}{12}=27\), donc \(r=3\).`,
        S`<b>Trouver \(a\).</b> \(t_2=ar\), donc \(a=\frac{12}3=4\).`,
        S`<b>Énumérer pour vérifier.</b> \(4,12,36,108,324\) : le cinquième terme est 324 ✓`],
      S`\(a=4\), \(r=3\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 360 }, points: [{ x: 1, y: 4 }, { x: 2, y: 12, label: "(2, 12)", color: "amber" }, { x: 3, y: 36 }, { x: 4, y: 108 }, { x: 5, y: 324, label: "(5, 324)", color: "amber" }], step: { x: 1, y: 40 }, xlabel: "n", ylabel: "tₙ" })],
    ["Une balle qui rebondit", "On laisse tomber une balle d'une hauteur de 200 cm, et chaque rebond atteint 60 % de la hauteur précédente. Quelle est la hauteur du 5<sup>e</sup> rebond?",
      [S`<b>Repérer le premier terme.</b> La question compte les rebonds; le premier terme est donc la hauteur du premier rebond : \(t_1=200(0.6)=120\) cm.`,
        S`<b>Raison.</b> Chaque rebond multiplie la hauteur par \(r=0.6\).`,
        S`<b>Formule.</b> \(t_5=120(0.6)^4\). Il y a 4 multiplications du rebond 1 au rebond 5.`,
        S`<b>Évaluer.</b> \((0.6)^4=0.1296\), donc \(t_5=${f(120 * 0.6 ** 4)}\) cm.`,
        S`<b>Vérifier à l'aide d'un tableau.</b> ${tv(["rebond", "1", "2", "3", "4", "5"], ["hauteur (cm)", "120", "72", "43.2", "25.92", "15.552"])} ✓`],
      S`\(${f(120 * 0.6 ** 4)}\) cm`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 140 }, points: pts((n) => 120 * 0.6 ** (n - 1), 6), step: { x: 1, y: 20 }, xlabel: "rebond", ylabel: "hauteur (cm)" })],
  ]),

  practice([
    q("raison", "Trouve la raison de 7, 28, 112, …", num(4),
      "Divise des termes consécutifs.", [S`\(28\div7\).`], S`\(4\)`),
    q("terme", S`Trouve \(t_6\) pour \(2, 6, 18,\ldots\)`, num(486),
      "a·r⁵.", [S`\(2\cdot3^5\).`], S`\(486\)`),
    q("suivant", "Trouve le terme suivant de 81, 27, 9, …", num(3),
      "r = ⅓.", [S`\(9\div3\).`], S`\(3\)`),
    q("reconnaître", "Quelle suite est géométrique?", choice(["4, −8, 16, −32, …", "4, 8, 12, 16, …", "4, 6, 10, 16, …", "4, 5, 7, 10, …"], 0),
      "Cherche une raison constante.", ["Chaque terme × (−2)."], "4, −8, 16, −32, …"),
    q("formule", S`Pour \(t_n=5(2)^{n-1}\), trouve \(t_7\).`, num(320),
      "5 × 2⁶.", [S`\(5\cdot64\).`], S`\(320\)`),
  ]),

  ...hard([
    ["Une raison négative", S`Une suite géométrique a \(t_3=18\) et \(t_6=-486\). Trouve son terme général et le rang du terme 1458.`,
      [S`\(r^3=-27\Rightarrow r=-3\); \(a=\frac{18}{9}=2\) : \(t_n=2(-3)^{n-1}\).`, S`\((-3)^{n-1}=729=(-3)^6\Rightarrow n=7\).`],
      S`\(t_n=2(-3)^{n-1}\); le 7<sup>e</sup> terme`],
    ["Un message se propage", "Un message est d'abord vu par 2 personnes. Chaque heure, chaque personne qui l'a vu pendant l'heure précédente le montre à 3 nouvelles personnes; ainsi, 2, 6, 18, … personnes le voient pour la première fois chaque heure. Pendant quelle heure plus de 10 000 nouvelles personnes le voient-elles?",
      [S`\(2(3)^{n-1}>10000\Rightarrow3^{n-1}>5000\).`, S`\(3^7=2187\), \(3^8=6561\) : \(n-1=8\).`],
      "la 9<sup>e</sup> heure",
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 14000 }, points: pts((n) => 2 * 3 ** (n - 1), 9), lines: [{ m: 0, b: 10000, color: "amber", dash: true }], step: { x: 1, y: 2000 }, xlabel: "heure", ylabel: "nouvelles personnes" })],
  ], [
    q("difficile", "x, x + 6 et 4x (x > 0) sont des termes consécutifs d'une suite géométrique. Trouve x.", num(6),
      "Les quotients doivent être égaux.", [S`\((x+6)^2=4x^2\Rightarrow x+6=2x\).`], S`\(x=6\)`),
    q("difficile", "Combien de termes compte la suite 3, 6, 12, …, 3072?", num(11),
      "Résous 3·2^(n − 1) = 3072.", [S`\(2^{n-1}=1024=2^{10}\).`], S`\(11\)`),
    q("difficile", S`Une suite géométrique avec \(r>0\) a \(t_2=-6\) et \(t_4=-54\). Trouve \(t_6\).`, num(-486),
      "r² = 9.", [S`\(r=3\), \(a=-2\) : \(-2\cdot3^5\).`], S`\(-486\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment distinguer une suite arithmétique d'une suite géométrique?", "Vérifie les différences (constantes → arithmétique) et les quotients (constants → géométrique)."],
      ["Quel est l'effet d'une raison négative?", "Les termes alternent de signe."],
      ["Et si 0 < r < 1?", "Les termes diminuent et se rapprochent de 0."],
      ["En quoi une suite géométrique ressemble-t-elle à une fonction exponentielle?", "t_n = a·r^(n−1) est une fonction exponentielle de domaine {1, 2, 3, …}."],
      ["Comment résoudre pour trouver n?", "Écris les deux membres comme des puissances de la même base, ou essaie des valeurs de n."],
    ],
    summary: [
      "t_n = a·r^(n − 1).",
      "Récurrence : t₁ = a, tₙ = r·tₙ₋₁.",
      "Graphique : des points exponentiels discrets.",
      "Deux termes → r (une racine) → a.",
    ],
    next: "En 7.3, on construit des règles pour des suites qui ne sont ni arithmétiques ni géométriques.",
  }),
];
