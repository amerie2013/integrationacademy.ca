// MCR3U-FR 8.2 — Intérêt composé : valeur future. A = P(1 + i)ⁿ, périodes de capitalisation, comparaison des
// fréquences, l'intérêt composé comme suite géométrique et croissance exponentielle, trouver le taux.
// Miroir de ../mcr3u-ch8/l8_2.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fv, m, pct } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.2 Intérêt composé : valeur future";
export const ID = lessonId(8, 2);
const S = String.raw;
const e3 = [1, 4, 12].map((k) => fv(10000, 0.06 / k, 10 * k));
const hB = fv(10000, 0.044 / 12, 60), hA = fv(10000, 0.045, 5);

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Intérêt composé : valeur future",
    overview: S`Avec l'<strong>intérêt composé</strong>, l'intérêt est ajouté au capital à la fin de chaque période de capitalisation et, à partir de ce moment, il rapporte lui aussi de l'intérêt. Après \(n\) périodes à un taux \(i\) par période, le montant (valeur future) est \(A=P(1+i)^n\). Dans cette leçon, tu vas trouver \(i\) et \(n\) à partir d'un taux annuel et d'une fréquence de capitalisation, calculer des valeurs futures, comparer des fréquences et relier l'intérêt composé aux suites géométriques et à la croissance exponentielle.`,
    goals: [
      "trouver le taux par période i et le nombre de périodes n;",
      "calculer la valeur future A = P(1 + i)ⁿ et l'intérêt gagné;",
      "comparer différentes fréquences de capitalisation;",
      "relier l'intérêt composé aux suites géométriques et aux fonctions exponentielles;",
      "trouver un taux inconnu à partir de P, A et n.",
    ],
    curriculum: "C2.2 (établir et décrire des liens entre l'intérêt composé, les suites géométriques et la croissance exponentielle), C2.3 (résoudre des problèmes portant sur le calcul du montant A, du capital P ou du taux d'intérêt par période de capitalisation i, à l'aide de A = P(1 + i)ⁿ)",
    prior: [
      [S`Évalue \(1000(1.05)^3\) au cent près.`, "1157.63."],
      ["Combien y a-t-il de trimestres en 6 ans?", "24."],
      ["Quelle est la raison de la suite géométrique 200, 210, 220.5, …?", "1.05."],
    ],
    words: [
      ["Période de capitalisation", "la fréquence à laquelle l'intérêt est ajouté : annuellement, semestriellement, trimestriellement, mensuellement", ""],
      ["i", "taux par période = taux annuel ÷ nombre de périodes par année", ""],
      ["n", "nombre de périodes = années × nombre de périodes par année", ""],
      ["Valeur future A", "\\(A=P(1+i)^n\\)", ""],
    ],
  }),

  section("📌 Taux par période et nombre de périodes", S`
  ${table(["Capitalisation", "Périodes par année", "6%/a pendant 4 ans : i", "n"], [["annuelle", "1", "0.06", "4"], ["semestrielle", "2", "0.03", "8"], ["trimestrielle", "4", "0.015", "16"], ["mensuelle", "12", "0.005", "48"]])}
  ${plane({ view: { xmin: 0, xmax: 21, ymin: 0, ymax: 3500 }, curves: [{ f: (t) => 1000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 60, b: 1000, color: "green", dash: true }], step: { x: 2, y: 500 }, xlabel: "années", ylabel: "montant" }, "1000 dollars à 6%/a : composé (violet, exponentiel) par rapport à simple (vert, linéaire)")}
  ${keyIdea(S`Avec une capitalisation annuelle, les montants de fin d'année forment une suite géométrique \(P(1+i),P(1+i)^2,\ldots\) de raison \(1+i\) : l'intérêt composé est une croissance exponentielle.`)}`),

  section("📌 Explorer", S`<p>Choisis une fréquence de capitalisation et observe comment i, n et le montant changent. Quelle différence la capitalisation mensuelle fait-elle par rapport à la capitalisation annuelle?</p>`),

  widget("compoundLab", { init: [5000, 4.8, 10] }),

  section("📌 Attention", watchOut([
    "Divise le taux annuel par le nombre de périodes par année; multiplie le nombre d'années par ce nombre.",
    "Utilise la valeur complète de (1 + i)ⁿ — n'arrondis pas i ni la puissance trop tôt.",
    "A est le total; l'intérêt gagné est A − P.",
    "Une capitalisation plus fréquente donne un peu plus, pas énormément plus.",
  ])),

  examples([
    ["Capitalisation annuelle", "Trouve la valeur future de 3000 dollars à 5%/a composé annuellement pendant 6 ans.",
      [S`<b>Idée.</b> L'intérêt composé rapporte de l'intérêt sur l'intérêt, donc chaque période multiplie le solde par \(1+i\).`,
        S`<b>Formule.</b> \(A=P(1+i)^n\), où \(i\) est le taux par période et \(n\) le nombre de périodes.`,
        S`<b>Identifier.</b> \(P=3000\), \(i=0.05\), \(n=6\).`,
        S`<b>Substituer.</b> \(A=3000(1.05)^6\approx3000(1.340096)\).`,
        S`<b>Vérifier la vraisemblance.</b> L'intérêt simple donnerait \(3000+6(150)=3900\). L'intérêt composé doit donner plus, et \(${m(fv(3000, 0.05, 6))}>3900\) ✓`],
      `${m(fv(3000, 0.05, 6))} dollars`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 2800, ymax: 4300 }, curves: [{ f: (t) => 3000 * 1.05 ** t, a: 0, color: "violet" }], lines: [{ m: 150, b: 3000, color: "gray", dash: true }], points: [{ x: 6, y: fv(3000, 0.05, 6), label: `(6, ${m(fv(3000, 0.05, 6))})`, color: "amber" }], step: { x: 1, y: 200 }, xlabel: "années", ylabel: "A" }, "violet : composé; pointillé : simple")],
    ["Capitalisation mensuelle", "Trouve la valeur future de 3000 dollars à 5%/a composé mensuellement pendant 6 ans.",
      [S`<b>Convertir en périodes.</b> Le taux par mois est \(i=\frac{0.05}{12}\). Le nombre de mois est \(n=6\times12=72\).`,
        S`<b>Substituer.</b> \(A=3000\left(1+\frac{0.05}{12}\right)^{72}\).`,
        S`<b>Calculer.</b> Garde \(\frac{0.05}{12}\) sans l'arrondir dans la calculatrice. L'arrondir trop tôt peut changer la réponse de quelques dollars.`,
        S`<b>Comparer.</b> La capitalisation annuelle donnait ${m(fv(3000, 0.05, 6))} dollars. La capitalisation mensuelle donne plus, car l'intérêt commence plus tôt à rapporter de l'intérêt ✓`],
      `${m(fv(3000, 0.05 / 12, 72))} dollars`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 2800, ymax: 4300 }, curves: [{ f: (t) => 3000 * (1 + 0.05 / 12) ** (12 * t), a: 0, color: "violet" }], points: [{ x: 6, y: fv(3000, 0.05 / 12, 72), label: `(6, ${m(fv(3000, 0.05 / 12, 72))})`, color: "amber" }], step: { x: 1, y: 200 }, xlabel: "années", ylabel: "A" })],
    ["Comparer des fréquences", "On place 10 000 dollars à 6%/a pendant 10 ans. Compare une capitalisation annuelle, trimestrielle et mensuelle.",
      [S`<b>Poser chaque cas.</b> Divise le taux et multiplie le nombre d'années par le nombre de périodes par année. ${tv(["fréquence", "\\(i\\)", "\\(n\\)", "\\(A\\) (dollars)"], ["annuelle", "0.06", "10", m(e3[0])], ["trimestrielle", "0.015", "40", m(e3[1])], ["mensuelle", "0.005", "120", m(e3[2])])}`,
        S`<b>Exemple de calcul.</b> Trimestrielle : \(10\,000(1.015)^{40}\approx${m(e3[1])}\).`,
        S`<b>Régularité.</b> Une capitalisation plus fréquente donne un montant plus grand, parce que l'intérêt est ajouté plus tôt.`,
        S`<b>Ampleur de l'effet.</b> La capitalisation mensuelle dépasse l'annuelle de ${m(e3[2] - e3[0])} dollars. Le capital et le taux annoncé ne changent pas.`],
      `${m(e3[0])}, ${m(e3[1])}, ${m(e3[2])} dollars`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 17000, ymax: 18500 }, segs: e3.map((v, k) => ({ pts: [[k + 0.7, 17000], [k + 0.7, v], [k + 1.3, v], [k + 1.3, 17000]], color: "violet" })), points: e3.map((v, k) => ({ x: k + 1, y: v, label: m(v) })), step: { x: 1, y: 250 }, xlabel: "annuelle · trimestrielle · mensuelle", ylabel: "montant" })],
    ["Une suite géométrique", "Écris sous forme de suite les montants de fin d'année de 2000 dollars à 4%/a composé annuellement, et donne son type.",
      [S`<b>Construire.</b> Chaque année multiplie par 1.04. ${tv(["\\(n\\)", "1", "2", "3"], ["montant", "2080", "2163.20", "2249.73"], ["intérêt gagné", "80", "83.20", "86.53"])}`,
        S`<b>Tester.</b> L'intérêt augmente, donc la suite n'est pas arithmétique. Le rapport est constant : \(\frac{2163.20}{2080}=1.04\).`,
        S`<b>Terme général.</b> \(t_n=2000(1.04)^n\).`,
        S`<b>Vérifier.</b> \(2000(1.04)^3\approx2249.73\) ✓`],
      "géométrique, r = 1.04",
      plane({ view: { xmin: 0, xmax: 6, ymin: 1900, ymax: 2550 }, curves: [{ f: (t) => 2000 * 1.04 ** t, a: 0, color: "gray" }], points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 2000 * 1.04 ** n, label: n === 3 ? "(3, 2249.73)" : undefined, color: n === 3 ? "amber" : "blue" })), step: { x: 1, y: 100 }, xlabel: "année n", ylabel: "montant" })],
    ["Trouver le taux", "2000 dollars atteignent 2433.31 dollars en 5 ans avec une capitalisation annuelle. Trouve le taux.",
      [S`<b>Poser l'équation.</b> \(2433.31=2000(1+i)^5\).`,
        S`<b>Isoler la puissance.</b> \((1+i)^5=\frac{2433.31}{2000}=1.216655\).`,
        S`<b>Annuler l'exposant.</b> Élève les deux membres à la puissance \(\frac15\) : \(1+i=1.216655^{1/5}\approx1.04\).`,
        S`<b>Résoudre.</b> \(i\approx0.04\), soit 4%/a.`,
        S`<b>Vérifier.</b> \(2000(1.04)^5\approx2433.31\) ✓`],
      "4%/a",
      plane({ view: { xmin: 0, xmax: 6, ymin: 1900, ymax: 2600 }, curves: [{ f: (t) => 2000 * 1.04 ** t, a: 0, color: "violet" }], points: [{ x: 0, y: 2000, label: "(0, 2000)" }, { x: 5, y: 2433.31, label: "(5, 2433.31)", color: "amber" }], step: { x: 1, y: 100 }, xlabel: "années", ylabel: "A" })],
  ]),

  practice([
    q("annuelle", "Trouve la valeur future de 1000 dollars à 4%/a composé annuellement pendant 5 ans (en dollars).", num(+m(fv(1000, 0.04, 5)), 0.02),
      "1000(1.04)⁵.", [S`\(1.04^5\approx1.21665\).`], m(fv(1000, 0.04, 5))),
    q("semestrielle", "Trouve la valeur future de 2500 dollars à 6%/a composé semestriellement pendant 3 ans (en dollars).", num(+m(fv(2500, 0.03, 6)), 0.02),
      "i = 0.03, n = 6.", [S`\(2500(1.03)^6\).`], m(fv(2500, 0.03, 6))),
    q("périodes", "Combien de périodes de capitalisation y a-t-il en 7 ans à 8%/a composé trimestriellement?", num(28),
      "7 × 4.", ["n = 28."], "28"),
    q("intérêt", "Trouve l'intérêt gagné sur 5000 dollars à 3%/a composé annuellement pendant 10 ans (en dollars).", num(+m(fv(5000, 0.03, 10) - 5000), 0.02),
      "A − P.", [S`\(5000(1.03)^{10}-5000\).`], m(fv(5000, 0.03, 10) - 5000)),
    q("régularité", "Avec un intérêt composé annuellement, les montants de fin d'année forment quel type de suite?", choice(["géométrique", "arithmétique", "ni l'une ni l'autre", "constante"], 0),
      "Chaque année multiplie par 1 + i.", ["Rapport constant."], "géométrique"),
  ]),

  ...hard([
    ["Trouver un taux annuel", `5000 dollars atteignent ${m(fv(5000, 0.025, 8))} dollars en 4 ans, avec une capitalisation semestrielle. Trouve le taux annuel.`,
      [S`\(n=8\) : \((1+i)^8=\frac{${m(fv(5000, 0.025, 8))}}{5000}\approx${(1.025 ** 8).toFixed(6)}\Rightarrow1+i\approx1.025\).`, "i = 2.5% par demi-année."],
      "5%/a composé semestriellement"],
    ["Comparer deux banques", "La banque A offre 4.5%/a composé annuellement; la banque B offre 4.4%/a composé mensuellement. Laquelle rapporte le plus sur 10 000 dollars en 5 ans?",
      [`A : 10 000(1.045)⁵ ≈ ${m(hA)}.`, `B : 10 000(1 + 0.044/12)⁶⁰ ≈ ${m(hB)}.`],
      `${hA > hB ? "La banque A" : "La banque B"}, de ${m(Math.abs(hA - hB))} dollars`,
      plane({ view: { xmin: 0, xmax: 5.5, ymin: 9800, ymax: 12800 }, curves: [{ f: (t) => 10000 * 1.045 ** t, a: 0, color: "violet" }, { f: (t) => 10000 * (1 + 0.044 / 12) ** (12 * t), a: 0, color: "amber" }], step: { x: 1, y: 500 }, xlabel: "années", ylabel: "montant" })],
  ], [
    q("difficile", "Trouve la valeur future de 750 dollars à 3.6%/a composé mensuellement pendant 4 ans (en dollars).", num(+m(fv(750, 0.003, 48)), 0.02),
      "i = 0.003, n = 48.", [S`\(750(1.003)^{48}\).`], m(fv(750, 0.003, 48))),
    q("difficile", "Quel taux annuel (composé annuellement) fait passer 1000 dollars à 1500 dollars en 6 ans? Donne le % à 2 décimales.", num(+pct(1.5 ** (1 / 6) - 1), 0.01),
      "(1.5)^(1/6) − 1.", [S`\(1.5^{1/6}\approx1.0699\).`], pct(1.5 ** (1 / 6) - 1)),
    q("difficile", "Trouve l'intérêt gagné sur 4000 dollars à 5%/a composé trimestriellement pendant 8 ans (en dollars).", num(+m(fv(4000, 0.0125, 32) - 4000), 0.02),
      "i = 0.0125, n = 32.", [S`\(4000(1.0125)^{32}-4000\).`], m(fv(4000, 0.0125, 32) - 4000)),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce qui distingue l'intérêt composé?", "L'intérêt est ajouté au capital à chaque période, puis il rapporte lui-même de l'intérêt."],
      ["Comment trouver i et n?", "i = taux annuel ÷ nombre de périodes par année; n = années × nombre de périodes par année."],
      ["Une capitalisation plus fréquente donne-t-elle toujours plus?", "Oui, pour le même taux annuel — mais le gain supplémentaire devient de plus en plus petit."],
      ["Quel est le lien avec les fonctions exponentielles?", "A = P(1 + i)ⁿ est une fonction exponentielle de n, de base 1 + i."],
      ["Comment trouver un taux inconnu?", "Divise A par P, prends la racine n-ième et soustrais 1."],
    ],
    summary: [
      "A = P(1 + i)ⁿ.",
      "i = taux annuel / nombre de périodes par année.",
      "Les montants forment une suite géométrique.",
      "Intérêt = A − P.",
    ],
    next: "La leçon 8.3 fait le chemin inverse pour trouver la valeur actuelle.",
  }),
];
