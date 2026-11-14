// MTH1W-FR chapitre 7 — devoirs (miroir de ../../mth1w-ch7/asg/assignments.mjs) : 10 questions chacun —
// Connaissance et compréhension 1-3, Habiletés de la pensée 4-5, Communication 6-7, Mise en application 8-10.
// [[clé|légende]] dans une ligne est remplacé par une figure (SVG téléversé) à la publication.
// L'argent s'écrit en « dollars » (le vérificateur refuse les signes $ nus).
import { barChartDoc } from "../../mth1w-ch6/figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";
import { TITLE as T1 } from "../l7_1.mjs";
import { TITLE as T2 } from "../l7_2.mjs";
import { TITLE as T3 } from "../l7_3.mjs";
import { TITLE as T4 } from "../l7_4.mjs";

const name = (t) => t.replace(/^\d+\.\d+\s+/, "");

export const ASSIGNMENTS = [
  { code: "7.1", k: 1, title: `Devoir 7.1 — ${name(T1)}`, figs: {
      plans: planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 80 }, lines: [{ m: 0, b: 55, color: "blue", label: "A", lx: 1 }, { m: 4, b: 15, color: "red", label: "B", lx: 10 }], step: { x: 1, y: 10 }, xlabel: "cours", ylabel: "coût" }) }, lines: [
    "Connaissance et compréhension",
    "1. Trouve le prix unitaire de chacun et choisis le meilleur achat : 1.5 L de lait pour 3.29 dollars ou 4 L pour 6.99 dollars.",
    "2. Trouve le coût total d'un article de 65 dollars avec la TVH de 13 %.",
    "3. Quel multiplicateur donne (a) un rabais de 35 % (b) un prix incluant la TVH?",
    "Habiletés de la pensée",
    "4. Le graphique montre deux forfaits de conditionnement physique selon le nombre de cours par mois. Écris une équation pour chacun, trouve le seuil de rentabilité et indique lequel est le meilleur pour 12 cours. [[plans|Forfaits de la question 4]]",
    "5. Un vélo de 900 dollars est en solde à 20 % de rabais, puis on accorde encore 10 % de rabais à la caisse. Trouve le prix final, TVH incluse, et explique pourquoi ce n'est pas la même chose que 30 % de rabais.",
    "Communication",
    "6. Explique comment l'inflation touche une personne qui garde ses économies en argent comptant à la maison.",
    "7. Décris trois signes avant-coureurs qui indiquent qu'un message au sujet d'argent pourrait être une fraude.",
    "Mise en application",
    "8. Un reçu indique un total de 124.30 dollars, TVH incluse. Trouve le prix avant taxe.",
    String.raw`9. Un panier d'épicerie coûte 80 dollars aujourd'hui. Avec une inflation de 3 % par année, combien coûtera-t-il dans 6 ans? Montre ton travail en utilisant \((1.03)^6\).`,
    "10. Un portable coûte 1050 dollars plus la TVH, ou 18 versements mensuels de 72 dollars (taxe incluse). Quelle option coûte le moins, et de combien?",
  ] },
  { code: "7.2", k: 2, title: `Devoir 7.2 — ${name(T2)}`, figs: {
      dep: planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 26000 }, curves: [{ f: (t) => 24000 * 0.8 ** t, color: "red" }], points: [{ x: 0, y: 24000 }, { x: 1, y: 19200 }], step: { x: 1, y: 4000 }, xlabel: "années", ylabel: "valeur" }) }, lines: [
    "Connaissance et compréhension",
    "1. Écris le facteur pour (a) une augmentation de 9 % (b) une diminution de 9 % (c) une diminution de 40 %.",
    "2. Un téléphone de 350 dollars perd 30 % de sa valeur en un an. Combien vaut-il?",
    "3. Nomme deux biens qui s'apprécient habituellement et deux qui se déprécient habituellement, avec une raison pour chacun.",
    "Habiletés de la pensée",
    "4. Le graphique montre la valeur d'une auto. Trouve le taux de dépréciation annuel et écris un modèle. Utilise-le pour trouver la valeur après 5 ans. [[dep|Valeur de l'auto de la question 4]]",
    "5. Un tableau acheté 2500 dollars vaut 3025 dollars deux ans plus tard. Trouve le taux annuel d'appréciation constant.",
    "Communication",
    "6. Explique pourquoi une diminution de 30 % suivie d'une augmentation de 30 % ne ramène pas à la valeur de départ.",
    "7. Compare la dépréciation linéaire et la dépréciation en pourcentage. Laquelle décrit le mieux la valeur d'une auto, et pourquoi?",
    "Mise en application",
    String.raw`8. Une maison d'une valeur de 420 000 dollars s'apprécie de 4 % par année. Trouve sa valeur dans 8 ans à l'aide de \(V=V_0(1+r)^n\).`,
    "9. Un portable de 1600 dollars peut se déprécier de 400 dollars par année ou de 35 % par année. Fais une table sur 4 ans et compare.",
    "10. Utilise la règle de 72 pour estimer le temps nécessaire pour qu'un placement qui croît de 9 % par année double, puis vérifie par un calcul.",
  ] },
  { code: "7.3", k: 3, title: `Devoir 7.3 — ${name(T3)}`, figs: {
      grow: planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 4000 }, lines: [{ m: 70, b: 1000, color: "blue", label: "simple", lx: 15 }], curves: [{ f: (t) => 1000 * 1.07 ** t, color: "green" }], step: { x: 2, y: 500 }, xlabel: "années", ylabel: "montant" }) }, lines: [
    "Connaissance et compréhension",
    "1. Trouve l'intérêt simple sur 2800 dollars à 4 % par année pendant 3 ans.",
    String.raw`2. Trouve le montant lorsque 1500 dollars sont composés annuellement à 5 % pendant 4 ans, à l'aide de \(A=P(1+r)^n\).`,
    String.raw`3. Pour 6 % composé mensuellement pendant 3 ans, donne \(\frac{r}{n}\) et \(nt\).`,
    "Habiletés de la pensée",
    "4. Le graphique montre 1000 dollars à 7 % d'intérêt simple et composé. Estime quand le montant composé dépasse de 500 dollars le montant simple, puis vérifie par des calculs. [[grow|Graphique des intérêts de la question 4]]",
    "5. 2000 dollars rapportent 240 dollars d'intérêt simple en 3 ans. Trouve le taux.",
    "Communication",
    "6. Explique la différence entre l'intérêt simple et l'intérêt composé, à l'aide d'un exemple.",
    "7. Explique pourquoi reporter un solde de carte de crédit coûte cher, et donne deux façons d'éviter les intérêts sur une carte de crédit.",
    "Mise en application",
    String.raw`8. Trouve le montant lorsque 4000 dollars sont investis à 3.6 % composé mensuellement pendant 5 ans : \(A=4000\left(1+\frac{0.036}{12}\right)^{60}\).`,
    "9. Un solde de carte de crédit de 1200 dollars porte un intérêt de 21 % par année, composé mensuellement. Si aucun paiement n'est fait, combien doit-on après 6 mois?",
    "10. Compare deux prêts de 5000 dollars sur 3 ans : 6 % d'intérêt simple, ou 5.75 % composé annuellement. Lequel coûte le moins en intérêts?",
  ] },
  { code: "7.4", k: 4, title: `Devoir 7.4 — ${name(T4)}`, figs: {
      spend: barChartDoc({ bars: [["besoins", 1400], ["désirs", 450], ["épargne", 200]], base: 0, top: 1600, step: 400, ylabel: "dollars par mois", color: "green" }) }, lines: [
    "Connaissance et compréhension",
    "1. Classe chaque dépense comme fixe ou variable et comme besoin ou désir : (a) un forfait de téléphone (b) un abonnement au centre de conditionnement physique (c) l'épicerie (d) les repas au restaurant.",
    "2. Un chèque de paie de 1050 dollars arrive toutes les deux semaines. Trouve le revenu mensuel.",
    "3. Selon la règle 50/30/20, quelle part d'un revenu net de 2200 dollars va aux besoins, aux désirs et à l'épargne?",
    "Habiletés de la pensée",
    "4. Le diagramme montre un budget mensuel pour un revenu net de 2300 dollars. Trouve le surplus ou le déficit et le pourcentage consacré aux besoins, aux désirs et à l'épargne. [[spend|Budget de la question 4]]",
    "5. Les coûts annuels sont de 1320 dollars (assurance), de 480 dollars (cadeaux) et de 300 dollars (fournitures scolaires). Combien faut-il mettre de côté chaque mois?",
    "Communication",
    "6. Explique pourquoi un budget devrait utiliser le revenu net plutôt que le revenu brut.",
    "7. Décris ce que tu réduirais en premier si ton budget tombait en déficit, et pourquoi.",
    "Mise en application",
    "8. Tu gagnes 16.80 dollars l'heure pendant 20 heures par semaine et 15 % est retenu. Trouve ton revenu net mensuel (utilise 52 semaines par année).",
    "9. Ton loyer augmente de 7 % à partir de 950 dollars et ton revenu augmente de 50 dollars par mois. De combien ton surplus change-t-il?",
    "10. Planifie comment épargner pour un article que tu veux et qui coûte au moins 500 dollars : indique l'objectif, le montant mensuel, le temps nécessaire et ce que tu réduirais pour y arriver.",
  ] },
];
