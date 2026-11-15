// MCR3U-FR 8.7 — Révision du chapitre 8 : intérêt simple et composé, valeur actuelle, annuités (FV et PV), prêts.
// Miroir de ../mcr3u-ch8/l8_7.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fv, pv, annFV, annPV, payPV, payFV, periodsTo, m } from "./fin.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.7 Révision du chapitre 8";
export const ID = lessonId(8, 7);
const S = String.raw;
const save = annFV(250, 0.004, 120), loanR = payPV(15000, 0.006, 48);
const goal = payFV(40000, 0.045 / 4, 72), need = pv(40000, 0.045 / 4, 72);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 8",
    overview: S`Cette révision relie les notions du chapitre : l'intérêt simple (croissance linéaire), l'intérêt composé et la valeur actuelle (croissance exponentielle), et les annuités — des versements réguliers dont les valeurs future et actuelle sont des séries géométriques. Les exemples combinent plusieurs habiletés; les exercices et les problèmes de niveau difficile sont du niveau d'un test de chapitre.`,
    goals: [
      "choisir entre les formules de l'intérêt simple et de l'intérêt composé;",
      "trouver la valeur future, la valeur actuelle, le taux et le nombre de périodes;",
      "déterminer si une situation porte sur un montant unique ou sur une annuité;",
      "utiliser les formules de FV et de PV d'une annuité et trouver des versements;",
      "comparer des options financières.",
    ],
    curriculum: "C2 (résoudre des problèmes portant sur des applications financières)",
    prior: [
      ["Simple ou composé : l'intérêt est ajouté au capital à chaque période?", "Composé."],
      ["Montant unique ou annuité : 200 dollars par mois pendant 3 ans?", "Annuité."],
      ["Quelle est la valeur de i pour 9%/a composé mensuellement?", "0.0075."],
    ],
    words: [
      ["8.1", "intérêt simple I = Prt", ""],
      ["8.2–8.3", "A = P(1 + i)ⁿ; PV = A(1 + i)⁻ⁿ", ""],
      ["8.4–8.5", "FV et PV d'une annuité", ""],
      ["8.6", "amortissement et conditions changeantes", ""],
    ],
  }),

  section("📌 Quelle formule?", S`
  ${table(["Situation", "Formule"], [["un seul dépôt, intérêt simple", "\\(A=P(1+rt)\\)"], ["un seul dépôt, intérêt composé, trouver la valeur future", "\\(A=P(1+i)^n\\)"], ["un seul montant, intérêt composé, trouver la valeur d'aujourd'hui", "\\(PV=A(1+i)^{-n}\\)"], ["dépôts réguliers, trouver la valeur future", "\\(FV=\\frac{R[(1+i)^n-1]}{i}\\)"], ["versements réguliers, trouver la valeur d'aujourd'hui (prêts)", "\\(PV=\\frac{R[1-(1+i)^{-n}]}{i}\\)"]])}
  ${keyIdea("Pose-toi deux questions : un seul montant ou des versements réguliers? Regarde-t-on vers l'avant (valeur future) ou vers l'arrière (valeur actuelle)? Les réponses déterminent la formule.")}`),

  section("📌 Explorer", S`<p>Utilise l'outil d'exploration pour vérifier les exemples et les problèmes d'annuités ci-dessous.</p>`),

  widget("annuityFV", { init: [2000, 6, 15] }),

  examples([
    ["Simple ou composé", "Compare 4000 dollars placés pendant 8 ans à 5%/a d'intérêt simple et à 5%/a composé annuellement.",
      [S`<b>Simple.</b> \(A=P(1+rt)=4000(1+0.05\times8)=4000(1.4)=5600\).`,
        S`<b>Composé.</b> \(A=P(1+i)^n=4000(1.05)^8\approx${m(fv(4000, 0.05, 8))}\).`,
        S`<b>Différence.</b> \(${m(fv(4000, 0.05, 8))}-5600=${m(fv(4000, 0.05, 8) - 5600)}\).`,
        S`<b>Pourquoi.</b> L'intérêt simple croît de façon linéaire, parce qu'il est toujours calculé sur 4000. L'intérêt composé croît de façon exponentielle, parce qu'il est calculé sur le solde qui augmente. Le graphique montre l'écart qui s'élargit ✓`],
      `l'intérêt composé rapporte ${m(fv(4000, 0.05, 8) - 5600)} dollars de plus`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 3800, ymax: 6300 }, lines: [{ m: 200, b: 4000, color: "green" }], curves: [{ f: (t) => 4000 * 1.05 ** t, a: 0, color: "violet" }], points: [{ x: 8, y: 5600, label: "5600", color: "green" }, { x: 8, y: fv(4000, 0.05, 8), label: m(fv(4000, 0.05, 8)), color: "violet" }], step: { x: 1, y: 250 }, xlabel: "années", ylabel: "A" }, "vert : simple; violet : composé")],
    ["Valeur actuelle et durée", "Combien faut-il placer maintenant à 3.6%/a composé mensuellement pour avoir 10 000 dollars dans 5 ans, et combien de temps faudrait-il pour que ce montant double?",
      [S`<b>Convertir.</b> \(i=0.003\), \(n=60\).`,
        S`<b>Valeur actuelle.</b> \(PV=10\,000(1.003)^{-60}\approx${m(pv(10000, 0.003, 60))}\).`,
        S`<b>Doublement.</b> Le capital s'annule : \(1.003^n\ge2\). En testant des valeurs, on obtient \(n=${periodsTo(2, 0.003)}\) mois.`,
        S`<b>Vérifier.</b> \(1.003^{${periodsTo(2, 0.003)}}\ge2\), alors qu'un mois de moins ne suffit pas. La règle de 72 donne une estimation de \(72\div3.6=20\) ans ✓`],
      `${m(pv(10000, 0.003, 60))} dollars; environ ${(periodsTo(2, 0.003) / 12).toFixed(1)} ans pour doubler`,
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 20000 }, curves: [{ f: (t) => pv(10000, 0.003, 60) * 1.003 ** (12 * t), a: 0, color: "violet" }], points: [{ x: 0, y: pv(10000, 0.003, 60), label: m(pv(10000, 0.003, 60)) }, { x: 5, y: 10000, label: "(5, 10 000)", color: "amber" }], step: { x: 2, y: 2000 }, xlabel: "années", ylabel: "valeur" })],
    ["Plan d'épargne", "On épargne 250 dollars à la fin de chaque mois pendant 10 ans à 4.8%/a composé mensuellement. Trouve la valeur future et l'intérêt gagné.",
      [S`<b>Convertir.</b> \(i=\frac{0.048}{12}=0.004\) et \(n=120\).`,
        S`<b>Valeur future.</b> \(FV=\frac{250(1.004^{120}-1)}{0.004}\approx${m(save)}\).`,
        S`<b>Dépôts.</b> \(250\times120=30\,000\).`,
        S`<b>Intérêt.</b> \(${m(save)}-30\,000=${m(save - 30000)}\).`,
        S`<b>Vérifier la vraisemblance.</b> Le graphique montre le solde qui s'éloigne de la droite pointillée des dépôts ✓`],
      `${m(save)} dollars; intérêt de ${m(save - 30000)} dollars`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 42000 }, curves: [{ f: (k) => annFV(250, 0.004, k), a: 1, color: "violet" }], lines: [{ m: 250, b: 0, color: "gray", dash: true }], points: [{ x: 120, y: save, label: m(save), color: "amber" }, { x: 120, y: 30000, label: "30 000" }], step: { x: 12, y: 5000 }, xlabel: "mois", ylabel: "dollars" })],
    ["Un prêt", "Un prêt de 15 000 dollars à 7.2%/a composé mensuellement est remboursé sur 4 ans. Trouve le versement et l'intérêt total.",
      [S`<b>Convertir.</b> \(i=0.006\), \(n=48\).`,
        S`<b>Versement.</b> Le prêt est la valeur actuelle des versements : \(R=\frac{15\,000(0.006)}{1-1.006^{-48}}\approx${m(loanR)}\).`,
        S`<b>Total payé.</b> \(${m(loanR)}\times48\approx${m(loanR * 48)}\).`,
        S`<b>Intérêt.</b> \(${m(loanR * 48)}-15\,000=${m(loanR * 48 - 15000)}\).`,
        S`<b>Vérifier la vraisemblance.</b> Sans intérêt, \(\frac{15\,000}{48}=312.50\). Le versement est un peu plus élevé ✓`],
      `${m(loanR)} dollars par mois; intérêt de ${m(loanR * 48 - 15000)} dollars`,
      plane({ view: { xmin: 0, xmax: 52, ymin: 0, ymax: 16000 }, curves: [{ f: (k) => Math.max(0, annPV(loanR, 0.006, 48 - k)), a: 0, b: 48, color: "violet" }], points: [{ x: 0, y: 15000, label: "(0, 15 000)" }, { x: 48, y: 0, label: "(48, 0)", color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "mois", ylabel: "solde" })],
    ["Deux façons d'atteindre un objectif", "Pour avoir 40 000 dollars dans 18 ans à 4.5%/a composé trimestriellement, compare un dépôt unique maintenant à des dépôts trimestriels.",
      [S`<b>Convertir.</b> \(i=\frac{0.045}4=0.01125\) et \(n=18\times4=72\).`,
        S`<b>Dépôt unique.</b> \(PV=40\,000(1.01125)^{-72}\approx${m(need)}\).`,
        S`<b>Dépôts trimestriels.</b> \(R=\frac{40\,000(0.01125)}{1.01125^{72}-1}\approx${m(goal)}\).`,
        S`<b>Comparer les totaux.</b> Les dépôts trimestriels totalisent \(72\times${m(goal)}\approx${m(goal * 72)}\), plus que le dépôt unique, mais ils sont répartis sur 18 ans.`,
        S`<b>Vérifier sur le graphique.</b> Les deux courbes atteignent 40 000 à 18 ans ✓`],
      `${m(need)} maintenant, ou ${m(goal)} chaque trimestre (${m(goal * 72)} au total)`,
      plane({ view: { xmin: 0, xmax: 19, ymin: 0, ymax: 42000 }, curves: [{ f: (t) => need * 1.01125 ** (4 * t), a: 0, b: 18, color: "violet" }, { f: (t) => annFV(goal, 0.01125, Math.floor(4 * t)), a: 0, b: 18, color: "amber" }], step: { x: 2, y: 5000 }, xlabel: "années", ylabel: "valeur" }, "violet : dépôt unique; ambre : dépôts trimestriels")],
  ]),

  practice([
    q("simple", "Trouve l'intérêt simple sur 2400 dollars à 3.5%/a pendant 6 mois (en dollars).", num(42),
      "t = 0.5.", [S`\(2400(0.035)(0.5)\).`], "42"),
    q("composé", "Trouve la valeur future de 6000 dollars à 4%/a composé semestriellement pendant 9 ans (en dollars).", num(+m(fv(6000, 0.02, 18)), 0.02),
      "i = 0.02, n = 18.", [S`\(6000(1.02)^{18}\).`], m(fv(6000, 0.02, 18))),
    q("PV", "Trouve la valeur actuelle de 9000 dollars payables dans 7 ans à 5%/a composé annuellement (en dollars).", num(+m(pv(9000, 0.05, 7)), 0.02),
      "9000(1.05)⁻⁷.", [S`\(\div1.05^7\).`], m(pv(9000, 0.05, 7))),
    q("FV d'une annuité", "Trouve la valeur future de 75 dollars déposés à la fin de chaque mois pendant 6 ans à 6%/a composé mensuellement (en dollars).", num(+m(annFV(75, 0.005, 72)), 0.02),
      "i = 0.005, n = 72.", [S`\(\frac{75(1.005^{72}-1)}{0.005}\).`], m(annFV(75, 0.005, 72))),
    q("laquelle", "Tu veux savoir combien emprunter si tu peux payer 400 dollars par mois pendant 5 ans. Quelle formule utiliser?", choice(["valeur actuelle d'une annuité", "valeur future d'une annuité", "valeur future avec intérêt composé", "intérêt simple"], 0),
      "Versements réguliers, valeur d'aujourd'hui.", ["Prêt = PV des versements."], "PV d'une annuité"),
  ]),

  ...hard([
    ["Épargner, puis retirer", "Mia dépose 300 dollars à la fin de chaque mois pendant 20 ans à 6%/a composé mensuellement. Ensuite, elle retire des montants mensuels égaux pendant 15 ans au même taux jusqu'à ce que l'argent soit épuisé. Trouve le retrait.",
      [`Épargné : FV = 300(1.005²⁴⁰ − 1)/0.005 ≈ ${m(annFV(300, 0.005, 240))}.`, `Retrait : R = FV(0.005)/(1 − 1.005⁻¹⁸⁰).`],
      `${m(payPV(annFV(300, 0.005, 240), 0.005, 180))} dollars par mois`],
    ["Acheter ou louer?", "Une voiture coûte 28 000 dollars. Option A : emprunter tout le montant à 5.4%/a composé mensuellement pendant 5 ans. Option B : louer à 420 dollars par mois pendant 5 ans, puis rendre la voiture. Trouve le versement de l'option A et la valeur actuelle des versements de l'option B au même taux.",
      [`A : R ≈ ${m(payPV(28000, 0.0045, 60))}.`, `B : PV de 420 par mois ≈ ${m(annPV(420, 0.0045, 60))}.`],
      "A coûte plus par mois, mais tu es propriétaire de la voiture"],
  ], [
    q("difficile", "Combien d'années (entières) faut-il pour que l'argent triple à 6%/a composé annuellement?", num(periodsTo(3, 0.06)),
      "1.06ⁿ ≥ 3.", ["Essais successifs."], String(periodsTo(3, 0.06))),
    q("difficile", "Quel dépôt mensuel à 3%/a composé mensuellement atteint 15 000 dollars en 6 ans (en dollars)?", num(+m(payFV(15000, 0.0025, 72)), 0.02),
      "i = 0.0025, n = 72.", [S`\(\frac{15000(0.0025)}{1.0025^{72}-1}\).`], m(payFV(15000, 0.0025, 72))),
    q("difficile", "Combien peut-on emprunter à 8.4%/a composé mensuellement si les versements sont de 350 dollars par mois pendant 4 ans (en dollars)?", num(+m(annPV(350, 0.007, 48)), 0.02),
      "PV des versements.", [S`\(\frac{350(1-1.007^{-48})}{0.007}\).`], m(annPV(350, 0.007, 48))),
  ]),

  wrapUp({
    qas: [
      ["Quelle est l'erreur la plus fréquente?", "Confondre i et le taux annuel, ou n et le nombre d'années."],
      ["Comment choisir entre les formules d'annuités?", "La valeur future pour les objectifs d'épargne; la valeur actuelle pour les prêts et le financement de retraits."],
      ["Quel est le lien avec les suites?", "L'intérêt simple est arithmétique; l'intérêt composé est géométrique; les annuités sont des séries géométriques."],
      ["Comment comparer des options équitablement?", "Ramène tout à la même date, habituellement aujourd'hui, à l'aide de la valeur actuelle."],
      ["Comment devrais-je étudier?", "Refais les problèmes de niveau difficile de chaque leçon, puis vérifie avec les outils d'exploration."],
    ],
    summary: [
      "Simple : linéaire; composé : exponentiel.",
      "Un seul montant : A = P(1 + i)ⁿ.",
      "Versements réguliers : FV ou PV d'une annuité.",
      "Compare à la même date.",
    ],
    next: "Ceci termine le cours. Utilise les révisions de chapitre pour te préparer à l'examen final.",
  }),
];
