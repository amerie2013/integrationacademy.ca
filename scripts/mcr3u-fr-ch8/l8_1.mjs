// MCR3U-FR 8.1 — Intérêt simple : I = Prt, A = P(1 + rt), durée en mois et en jours, trouver P, r et t,
// l'intérêt simple comme suite arithmétique et fonction affine. Miroir de ../mcr3u-ch8/l8_1.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { m } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.1 Intérêt simple";
export const ID = lessonId(8, 1);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "💵",
    title: "Intérêt simple",
    overview: S`Quand tu empruntes ou places de l'argent, l'<strong>intérêt</strong> est le montant supplémentaire payé pour l'utiliser. Avec l'<strong>intérêt simple</strong>, l'intérêt est calculé seulement sur le capital initial, donc le même montant s'ajoute chaque année : \(I=Prt\) et le montant est \(A=P+I=P(1+rt)\). Dans cette leçon, tu vas calculer l'intérêt simple et des montants, trouver le capital, le taux ou la durée, et voir que les montants annuels forment une suite arithmétique — une fonction affine du temps.`,
    goals: [
      "calculer l'intérêt simple avec I = Prt;",
      "trouver le montant A = P(1 + rt);",
      "convertir des mois et des jours en années;",
      "trouver le capital, le taux ou la durée;",
      "relier l'intérêt simple aux suites arithmétiques et à la croissance linéaire.",
    ],
    curriculum: "C2.1 (établir et décrire des liens entre l'intérêt simple, les suites arithmétiques et la croissance linéaire, au moyen d'une exploration avec la technologie)",
    prior: [
      ["Écris 4.5% sous forme décimale.", "0.045."],
      ["Quelle fraction d'une année représentent 9 mois?", "0.75."],
      ["Trouve la raison de 1050, 1100, 1150, …", "50."],
    ],
    words: [
      ["Capital P", "l'argent placé ou emprunté", ""],
      ["Taux d'intérêt r", "par année (par an, noté %/a), sous forme décimale", ""],
      ["Durée t", "en années", ""],
      ["Montant A", "capital plus intérêt (aussi appelé valeur future)", ""],
    ],
  }),

  section("📌 Les formules", S`
  ${table(["Trouver", "Formule"], [["l'intérêt", "\\(I=Prt\\)"], ["le montant", "\\(A=P+I=P(1+rt)\\)"], ["le taux", "\\(r=\\frac{I}{Pt}\\)"], ["la durée", "\\(t=\\frac{I}{Pr}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 2000 }, points: Array.from({ length: 8 }, (_, k) => ({ x: k + 1, y: 1200 + 84 * (k + 1) })), lines: [{ m: 84, b: 1200, color: "gray", dash: true }], step: { x: 1, y: 200 }, xlabel: "années", ylabel: "montant" }, "1200 dollars à 7%/a d'intérêt simple : 1284, 1368, 1452, … — on ajoute 84 chaque année")}
  ${keyIdea(S`L'intérêt simple ajoute le même montant \(Pr\) chaque année, donc les montants de fin d'année forment une suite arithmétique de premier terme \(a=P(1+r)\) et de raison \(d=Pr\). Son graphique est une droite.`)}`),

  section("📌 Explorer", S`<p>Compare l'intérêt simple (vert) à l'intérêt composé (violet, prochaine leçon). Augmente le nombre d'années : quand l'écart devient-il important?</p>`),

  widget("simpleCompound", { init: [1000, 6, 20] }),

  section("📌 Attention", watchOut([
    "Écris le taux sous forme décimale : 6% = 0.06.",
    "La durée doit être en années : 8 mois = 8/12, 73 jours = 73/365.",
    "I est seulement l'intérêt; A comprend le capital.",
    "Arrondis l'argent au cent près seulement à la fin.",
  ])),

  examples([
    ["Intérêt et montant", "Trouve l'intérêt simple et le montant lorsque 2500 dollars sont placés à 4%/a pendant 3 ans.",
      [S`<b>Formule.</b> L'intérêt simple est payé seulement sur le capital initial : \(I=Prt\), avec \(r\) sous forme décimale et \(t\) en années.`,
        S`<b>Identifier.</b> \(P=2500\), \(r=0.04\), \(t=3\).`,
        S`<b>Intérêt.</b> \(I=2500(0.04)(3)=300\).`,
        S`<b>Montant.</b> \(A=P+I=2500+300=2800\).`,
        S`<b>Vérifier année par année.</b> ${tv(["année", "0", "1", "2", "3"], ["montant (dollars)", "2500", "2600", "2700", "2800"])} Chaque année ajoute \(2500(0.04)=100\) ✓`],
      "I = 300 dollars, A = 2800 dollars",
      plane({ view: { xmin: 0, xmax: 4, ymin: 2400, ymax: 2900 }, lines: [{ m: 100, b: 2500, color: "violet" }], points: [{ x: 0, y: 2500, label: "(0, 2500)" }, { x: 1, y: 2600 }, { x: 2, y: 2700 }, { x: 3, y: 2800, label: "(3, 2800)", color: "amber" }], step: { x: 1, y: 100 }, xlabel: "t (années)", ylabel: "A" })],
    ["Durée en mois", "Trouve l'intérêt simple sur 1800 dollars à 5.5%/a pendant 8 mois.",
      [S`<b>Accorder les unités.</b> Le taux est annuel, donc la durée doit être en années : \(t=\frac8{12}\).`,
        S`<b>Substituer.</b> \(I=1800(0.055)\left(\frac8{12}\right)\).`,
        S`<b>Évaluer.</b> L'intérêt d'une année est \(1800(0.055)=99\). Ensuite, \(99\times\frac8{12}=66\).`,
        S`<b>Vérifier la vraisemblance.</b> 8 mois représentent les deux tiers d'une année, et \(66\) est les deux tiers de 99 ✓. Utiliser \(t=8\) donnerait 792, ce qui est beaucoup trop grand.`],
      `${m(1800 * 0.055 * (8 / 12))} dollars`,
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 110 }, lines: [{ m: 99 / 12, b: 0, color: "violet" }], points: [{ x: 8, y: 66, label: "(8, 66)", color: "amber" }, { x: 12, y: 99, label: "(12, 99)" }], step: { x: 1, y: 10 }, xlabel: "mois", ylabel: "I" })],
    ["Trouver le taux", "Un placement de 4000 dollars atteint 4720 dollars en 4 ans à intérêt simple. Trouve le taux.",
      [S`<b>Trouver l'intérêt.</b> \(I=A-P=4720-4000=720\).`,
        S`<b>Isoler.</b> \(I=Prt\) donne \(r=\frac I{Pt}\).`,
        S`<b>Substituer.</b> \(r=\frac{720}{4000(4)}=\frac{720}{16\,000}=0.045\).`,
        S`<b>Convertir.</b> \(0.045=4.5\%\) par année.`,
        S`<b>Vérifier.</b> \(4000(0.045)(4)=720\) ✓`],
      "4.5%/a",
      plane({ view: { xmin: 0, xmax: 5, ymin: 3900, ymax: 4900 }, lines: [{ m: 180, b: 4000, color: "violet" }], points: [{ x: 0, y: 4000, label: "(0, 4000)" }, { x: 4, y: 4720, label: "(4, 4720)", color: "amber" }], step: { x: 1, y: 100 }, xlabel: "t (années)", ylabel: "A" })],
    ["Trouver la durée", "Combien de temps faut-il pour que 600 dollars rapportent 90 dollars d'intérêt simple à 3%/a?",
      [S`<b>Isoler.</b> \(t=\frac I{Pr}\).`,
        S`<b>Intérêt d'une année.</b> \(Pr=600(0.03)=18\).`,
        S`<b>Diviser.</b> \(t=\frac{90}{18}=5\) ans.`,
        S`<b>Vérifier.</b> \(600(0.03)(5)=90\) ✓`],
      "5 ans",
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 120 }, lines: [{ m: 18, b: 0, color: "violet" }, { m: 0, b: 90, color: "amber", dash: true }], points: [{ x: 5, y: 90, label: "(5, 90)", color: "amber" }], step: { x: 1, y: 10 }, xlabel: "t (années)", ylabel: "I" })],
    ["Une suite arithmétique", "On place 1200 dollars à 7%/a d'intérêt simple. Écris le montant à la fin de l'année n et identifie le type de suite.",
      [S`<b>Intérêt annuel.</b> L'intérêt est toujours calculé sur les 1200 dollars initiaux : \(1200(0.07)=84\).`,
        S`<b>Énumérer les montants.</b> ${tv(["\\(n\\)", "1", "2", "3", "4"], ["montant", "1284", "1368", "1452", "1536"])}`,
        S`<b>Type.</b> Chaque année ajoute le même 84, donc la suite est arithmétique, avec \(d=84\).`,
        S`<b>Terme général.</b> \(t_n=1200+84n\).`,
        S`<b>Vérifier.</b> \(t_3=1200+252=1452\) ✓. Les points sont alignés : c'est une croissance linéaire.`],
      "arithmétique, d = 84 (croissance linéaire)",
      plane({ view: { xmin: 0, xmax: 6, ymin: 1100, ymax: 1700 }, lines: [{ m: 84, b: 1200, color: "gray", dash: true }], points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 1200 + 84 * n, label: n === 3 ? "(3, 1452)" : undefined, color: n === 3 ? "amber" : "blue" })), step: { x: 1, y: 100 }, xlabel: "année n", ylabel: "montant" })],
  ]),

  practice([
    q("intérêt", "Trouve l'intérêt simple sur 900 dollars à 3%/a pendant 5 ans (en dollars).", num(135),
      "I = Prt.", [S`\(900(0.03)(5)\).`], "135"),
    q("montant", "Trouve le montant lorsque 1500 dollars rapportent 6%/a d'intérêt simple pendant 2 ans (en dollars).", num(1680),
      "A = P(1 + rt).", [S`\(1500(1.12)\).`], "1680"),
    q("taux", "2000 dollars atteignent 2300 dollars en 3 ans à intérêt simple. Trouve le taux (%/a).", num(5),
      "r = I/(Pt).", [S`\(\frac{300}{6000}\).`], "5"),
    q("durée", "Combien d'années faut-il pour que 5000 dollars rapportent 1000 dollars à 4%/a d'intérêt simple?", num(5),
      "t = I/(Pr).", [S`\(\frac{1000}{200}\).`], "5"),
    q("régularité", "Les montants de fin d'année d'un placement à intérêt simple forment quel type de suite?", choice(["arithmétique", "géométrique", "ni l'une ni l'autre", "Fibonacci"], 0),
      "Le même intérêt s'ajoute chaque année.", ["Différence constante Pr."], "arithmétique"),
  ]),

  ...hard([
    ["Intérêt pour des jours", "Trouve l'intérêt simple sur 3650 dollars à 6%/a pendant 73 jours.",
      [S`\(t=\frac{73}{365}=0.2\) an.`, S`\(I=3650(0.06)(0.2)\).`],
      `${m(3650 * 0.06 * 0.2)} dollars`],
    ["Un prêt entre amis", "Samuel prête 800 dollars à Ali. Après 9 mois, Ali rembourse 860 dollars. Quel taux d'intérêt simple cela représente-t-il?",
      [S`\(I=60\), \(t=0.75\) : \(r=\frac{60}{800(0.75)}=0.1\).`],
      "10%/a",
      plane({ view: { xmin: 0, xmax: 12, ymin: 780, ymax: 900 }, lines: [{ m: 800 * 0.1 / 12, b: 800, color: "green" }], points: [{ x: 0, y: 800, label: "800" }, { x: 9, y: 860, label: "860 après 9 mois" }], step: { x: 1, y: 20 }, xlabel: "mois", ylabel: "dû" })],
  ], [
    q("difficile", "Un prêt à 6%/a d'intérêt simple est remboursé par 2240 dollars après 2 ans. Combien a-t-on emprunté (en dollars)?", num(2000),
      "P = A/(1 + rt).", [S`\(\frac{2240}{1.12}\).`], "2000"),
    q("difficile", "Combien d'années faut-il pour que l'argent double à 8%/a d'intérêt simple?", num(12.5, 0.01),
      "I doit être égal à P.", [S`\(rt=1\Rightarrow t=\frac1{0.08}\).`], "12.5"),
    q("difficile", "Une année d'intérêt simple sur 4500 dollars donne 270 dollars. Trouve le taux (%/a).", num(6),
      "270 ÷ 4500.", [S`\(0.06\).`], "6"),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi parle-t-on d'intérêt simple?", "L'intérêt est calculé seulement sur le capital initial, jamais sur l'intérêt déjà gagné."],
      ["Où utilise-t-on l'intérêt simple?", "Pour des prêts à court terme, certaines obligations et l'épargne de moins d'un an."],
      ["Comment traiter des mois ou des jours?", "Divise par 12 ou par 365 pour convertir en années."],
      ["Pourquoi le graphique est-il une droite?", "Le même intérêt Pr s'ajoute chaque année : croissance linéaire de pente Pr."],
      ["Quelle est la différence entre I et A?", "I est seulement l'intérêt; A = P + I est le total."],
    ],
    summary: [
      "I = Prt; A = P(1 + rt).",
      "r et t dans des unités cohérentes (par année, en années).",
      "Les montants forment une suite arithmétique.",
      "Intérêt simple = croissance linéaire.",
    ],
    next: "La leçon 8.2 présente l'intérêt composé, où l'intérêt rapporte lui-même de l'intérêt.",
  }),
];
