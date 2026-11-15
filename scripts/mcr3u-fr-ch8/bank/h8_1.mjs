// 8.1 Intérêt simple — 20 questions difficiles (miroir de ../../mcr3u-ch8/bank/h8_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, fv, c2 } from "./fig.mjs";

const S = String.raw;
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);
const gapYear = (() => { let t = 1; while (1000 * 1.06 ** t - 1000 * (1 + 0.06 * t) <= 200) t++; return t; })();

export const TOPIC = "8.1 Intérêt simple";
export const Q = [
  $("Un prêteur sur salaire exige 15 dollars pour chaque tranche de 100 dollars empruntée pendant 14 jours. Quel taux annuel simple cela représente-t-il (%/a, 2 décimales)?", (15 / 100) * (365 / 14) * 100, "r = 0.15 ÷ (14/365)."),
  $("Les comptes en souffrance d'un magasin sont soumis à 1.25% par mois d'intérêt simple. Trouve l'intérêt sur 1840 dollars en souffrance depuis 100 jours (en dollars).", 1840 * 0.15 * (100 / 365), "15%/a pendant 100/365 d'une année."),
  num("De l'argent est placé à intérêt simple. Après 4 ans, il vaut 6200 dollars et après 9 ans, 7200 dollars. Trouve le capital (en dollars).", 5400, "200 par année; 6200 − 800."),
  num("De l'argent est placé à intérêt simple. Après 4 ans, il vaut 6200 dollars et après 9 ans, 7200 dollars. Trouve le taux (%/a, 2 décimales).", c2((200 / 5400) * 100), "200 par année sur un capital de 5400 : 200 ÷ 5400.", null, 0.01),
  num("À 6%/a, après combien d'années l'intérêt composé (annuellement) rapporte-t-il au moins 200 dollars de plus que l'intérêt simple sur 1000 dollars?", gapYear, "Compare 1000(1.06)ᵗ à 1000(1 + 0.06t) année par année."),
  $("Deux prêts à intérêt simple totalisent 5000 dollars. L'un est à 4%/a et l'autre à 7%/a. L'intérêt annuel total est de 290 dollars. Quel montant est à 7% (en dollars)?", 3000, "0.04x + 0.07(5000 − x) = 290."),
  num("Combien de jours faut-il pour que 7300 dollars rapportent 60 dollars à 5%/a d'intérêt simple?", 60, "60 ÷ 365 = 0.1644 an ⇒ 0.1644 × 365."),
  $("Un prêt de 2500 dollars à 8%/a d'intérêt simple est remboursé après 2 ans et 3 mois. Combien rembourse-t-on (en dollars)?", 2500 * (1 + 0.08 * 2.25), "t = 2.25."),
  tf("Si le taux double et que la durée est réduite de moitié, l'intérêt simple reste le même.", true, "I = Prt : 2r × t/2 = rt."),
  tf("L'intérêt simple à 10%/a l'emporte toujours sur l'intérêt composé à 9%/a composé annuellement.", false, "Après assez d'années, l'intérêt composé l'emporte."),
  ms("Un placement de 6000 dollars rapporte de l'intérêt simple à 4.5%/a. Lesquels de ces énoncés sont vrais? Choisis toutes les bonnes réponses.", ["il rapporte 270 dollars par année", "après 4 ans, le montant est de 7080 dollars", "le montant après t années est 6000 + 270t", "l'intérêt de la 3e année est supérieur à celui de la 1re année", "il faut environ 22.2 ans pour qu'il double"], [0, 1, 2, 4], "L'intérêt est le même chaque année."),
  mc("Quel placement rapporte le plus d'intérêt?", "5000 dollars à 6%/a pendant 4 ans", ["6000 dollars à 4%/a pendant 4.5 ans", "4000 dollars à 7%/a pendant 3.5 ans", "8000 dollars à 3%/a pendant 4 ans"], "1200 contre 1080 contre 980 contre 960."),
  $("Quel capital faut-il placer à 3.25%/a d'intérêt simple pour gagner 52 dollars en 8 mois (en dollars)?", 52 / (0.0325 * (8 / 12)), "52 ÷ (0.0325 × 8/12)."),
  num("Une obligation de 10 000 dollars verse un intérêt simple de 175 dollars tous les 6 mois. Quel est le taux annuel (%/a)?", 3.5, "350 par année ÷ 10 000."),
  num("À un intérêt simple de 2.4%/a, combien de mois entiers faut-il pour que 5000 dollars rapportent au moins 100 dollars?", 10, "100 ÷ 120 = 0.833 an ⇒ 10 mois."),
  $("Un prêt de 3000 dollars est soumis à 9%/a d'intérêt simple la première année et à 7%/a d'intérêt simple sur le capital initial pendant les 2 années suivantes. Combien doit-on après 3 ans (en dollars)?", 3000 + 270 + 420, "270 + 2(210)."),
  num("Lis le graphique : la droite représente un montant à intérêt simple. Trouve le capital (en dollars).", 4000, "L'ordonnée à l'origine.", growthD([{ f: (t) => 4000 + 180 * t, color: "green" }], 10)),
  num("Lis le graphique : quel est le taux du placement à intérêt simple illustré (%/a)?", 4.5, "Pente 180 ÷ 4000.", growthD([{ f: (t) => 4000 + 180 * t, color: "green" }], 12, { pts: [[0, 4000, "4000"], [10, 5800, "5800"]] })),
  num("Le graphique compare l'intérêt simple (vert) et l'intérêt composé (violet) à 6%/a sur 1000 dollars. Lis la différence après 20 ans au dollar près.", Math.round(fv(1000, 0.06, 20) - 2200), "1000(1.06)²⁰ − 2200.", growthD([{ f: (t) => 1000 * (1 + 0.06 * t), color: "green" }, { f: (t) => 1000 * 1.06 ** t }], 20), 1),
  num("Les barres montrent l'intérêt gagné chaque année. S'agit-il d'intérêt simple ou composé, et quel est le capital à 5%/a? Entre le capital (en dollars).", 1600, "Barres égales : intérêt simple; 80 ÷ 0.05.", barsD([80, 80, 80, 80], { xlabel: "année", ylabel: "intérêt", labels: ["80", "80", "80", "80"] })),
];
