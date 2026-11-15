// 8.1 Intérêt simple — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch8/bank/em8_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, growthD, c2 } from "./fig.mjs";

const S = String.raw;
/** réponse en argent (dollars) au cent près */
const $ = (p, v, fb, fig = null) => num(p, c2(v), fb, fig, 0.02);

export const E = [
  $("Trouve l'intérêt simple sur 500 dollars à 4%/a pendant 3 ans (en dollars).", 60, "500 × 0.04 × 3."),
  $("Trouve l'intérêt simple sur 1200 dollars à 2.5%/a pendant 2 ans (en dollars).", 60, "1200 × 0.025 × 2."),
  $("Trouve le montant lorsque 800 dollars rapportent 5%/a d'intérêt simple pendant 4 ans (en dollars).", 960, "800(1 + 0.2)."),
  $("Trouve le montant lorsque 2000 dollars rapportent 3%/a d'intérêt simple pendant 6 ans (en dollars).", 2360, "2000(1.18)."),
  $("Trouve l'intérêt simple sur 3000 dollars à 6%/a pendant 6 mois (en dollars).", 90, "t = 0.5."),
  $("Trouve l'intérêt simple sur 1460 dollars à 5%/a pendant 73 jours (en dollars).", 14.6, "t = 73/365 = 0.2."),
  num("Écris 7.25% sous forme décimale.", 0.0725, "Divise par 100.", null, 0.00001),
  num("Quelle fraction d'une année représentent 3 mois? Entre un nombre décimal.", 0.25, "3/12."),
  num("Un prêt rapporte 40 dollars d'intérêt simple chaque année. Combien d'intérêt après 5 ans (en dollars)?", 200, "40 × 5."),
  $("1000 dollars rapportent 70 dollars d'intérêt simple en un an. Quel est le taux (%/a)?", 7, "70 ÷ 1000."),
  mc("Quelle formule donne l'intérêt simple?", S`\(I=Prt\)`, [S`\(I=P(1+i)^n\)`, S`\(I=P+rt\)`, S`\(I=\frac{P}{rt}\)`], "Capital × taux × durée."),
  mc("Dans A = P(1 + rt), que représente A?", "le montant total : capital plus intérêt", ["l'intérêt seulement", "le taux", "la durée en mois"], "A = P + I."),
  tf("Avec l'intérêt simple, le même montant d'intérêt est gagné chaque année.", true, "I = Pr chaque année."),
  tf("Avec l'intérêt simple, les montants de fin d'année forment une suite géométrique.", false, "Ils forment une suite arithmétique."),
  $("Trouve l'intérêt simple sur 650 dollars à 8%/a pendant 9 mois (en dollars).", 650 * 0.08 * 0.75, "t = 0.75."),
  num("Combien d'années faut-il pour que 400 dollars rapportent 60 dollars à 5%/a d'intérêt simple?", 3, "60 ÷ (400 × 0.05)."),
  $("Quel capital rapporte 45 dollars en un an à 3%/a d'intérêt simple (en dollars)?", 1500, "45 ÷ 0.03."),
  num("Les montants de fin d'année d'un placement à intérêt simple sont 1050, 1100, 1150, … Quelle est la raison?", 50, "1100 − 1050."),
  $("Lis le graphique : quel est le montant après 5 ans (en dollars)?", 2500, "Pente de 100 par année à partir de 2000.", growthD([{ f: (t) => 2000 + 100 * t, color: "green" }], 8)),
  num("Les barres montrent les montants de fin d'année avec l'intérêt simple. Combien d'intérêt gagne-t-on chaque année (en dollars)?", 30, "Chaque barre est plus haute de 30.", barsD([630, 660, 690, 720, 750], { xlabel: "année", ylabel: "montant", labels: ["630", "660", "690", "720", "750"] })),
];

export const M = [
  $("Trouve l'intérêt simple sur 4250 dollars à 3.6%/a pendant 30 mois (en dollars).", 4250 * 0.036 * 2.5, "t = 2.5."),
  $("Trouve le montant de 960 dollars à 4.75%/a d'intérêt simple pendant 4 ans (en dollars).", 960 * (1 + 0.19), "960(1.19)."),
  $("Trouve l'intérêt simple sur 5475 dollars à 6%/a pendant 120 jours (en dollars).", 5475 * 0.06 * (120 / 365), "t = 120/365."),
  num("2500 dollars atteignent 2800 dollars en 4 ans à intérêt simple. Trouve le taux (%/a).", 3, "300 ÷ (2500 × 4)."),
  num("1800 dollars rapportent 243 dollars à 4.5%/a d'intérêt simple. Pendant combien d'années?", 3, "243 ÷ 81."),
  $("Quel capital rapporte 189 dollars en 3 ans à 4.2%/a d'intérêt simple (en dollars)?", 1500, "189 ÷ 0.126."),
  $("Un prêt à intérêt simple de 6%/a sur 3 ans est remboursé par 4130 dollars. Combien a-t-on emprunté (en dollars)?", 4130 / 1.18, "4130 ÷ 1.18."),
  num("Combien de mois faut-il pour que 2400 dollars rapportent 54 dollars à 4.5%/a d'intérêt simple?", 6, "54 ÷ 108 = 0.5 an."),
  num("À quel taux d'intérêt simple l'argent double-t-il en 20 ans (%/a)?", 5, "rt = 1."),
  num("À quel taux d'intérêt simple l'argent triple-t-il en 16 ans? Donne le % à 2 décimales.", 12.5, "rt = 2.", null, 0.01),
  ms("Lesquels de ces énoncés sont vrais pour l'intérêt simple? Choisis toutes les bonnes réponses.", ["l'intérêt est calculé sur le capital seulement", "le graphique de A en fonction de t est une droite", "la pente de cette droite est Pr", "l'intérêt rapporte de l'intérêt", "les montants forment une suite arithmétique"], [0, 1, 2, 4], "L'intérêt qui rapporte de l'intérêt, c'est l'intérêt composé."),
  mc("Un magasin exige 2% par mois d'intérêt simple. Quel est le taux annuel?", "24%/a", ["2%/a", "12%/a", "26.82%/a"], "2 × 12."),
  tf("Doubler la durée double l'intérêt simple gagné.", true, "I = Prt est proportionnel à t."),
  tf("Doubler la durée double le montant A avec l'intérêt simple.", false, "A = P + Prt; P ne double pas."),
  num("Un prêt de 900 dollars est remboursé après 10 mois par 945 dollars. Trouve le taux d'intérêt simple (%/a).", 6, "45 ÷ (900 × 10/12) = 45 ÷ 750 = 0.06."),
  num("Un placement vaut 5300 dollars après 2 ans et 5750 dollars après 5 ans à intérêt simple. Trouve le capital (en dollars).", 5000, "450 sur 3 ans : 150 par année; 5300 − 300."),
  num("Un placement vaut 5300 dollars après 2 ans et 5750 dollars après 5 ans à intérêt simple. Trouve le taux (%/a).", 3, "150 par année sur un capital de 5000 : 150 ÷ 5000."),
  $("Trouve l'intérêt sur 3650 dollars à 7%/a d'intérêt simple du 1er mars au 30 mai (90 jours).", 3650 * 0.07 * (90 / 365), "t = 90/365."),
  num("Lis le graphique : quelle est la pente (en dollars par année)?", 45, "De 1500 à 1950 en 10 ans.", growthD([{ f: (t) => 1500 + 45 * t, color: "green" }], 10)),
  num("Les barres montrent les montants à intérêt simple sur un capital de 1200. Quel est le taux (%/a)?", 4, "Chaque année ajoute 48 : 48 ÷ 1200.", barsD([1248, 1296, 1344, 1392], { xlabel: "année", ylabel: "montant", labels: ["1248", "1296", "1344", "1392"] })),
];
