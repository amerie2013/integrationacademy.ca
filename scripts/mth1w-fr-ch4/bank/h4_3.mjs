// 4.3 Représenter des relations linéaires et non linéaires (y = mx + b) — 20 questions difficiles
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";
import { TITLE } from "../l4_3.mjs";

export const TOPIC = TITLE;
export const Q = [
  mx(String.raw`Une relation linéaire a $y=11$ quand $x=2$ et $y=-1$ quand $x=6$. Écris son équation.`, "-3*x+17", "m = −12/4 = −3; 11 = −6 + b → b = 17."),
  num(`Une imprimerie demande 0.35 dollar par dépliant plus des frais de préparation. 400 dépliants coûtent 165 dollars. Quels sont les frais de préparation?`, 25, "165 − 140."),
  num(`Lis le graphique du coût d'un forfait. Quel est le coût par minute (dollars)?`, 0.15, "De (0, 20) à (200, 50) : 30/200.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.15, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)" }, { x: 200, y: 50, label: "(200, 50)" }], xlabel: "minutes", ylabel: "coût", step: { x: 50, y: 10 } }), 0.001),
  num(`Le graphique montre le coût d'un forfait. Combien de minutes coûtent 62 dollars?`, 280, "Taux 30/200 = 0.15; 0.15t + 20 = 62.", FIG.plan),
  mc(`Une relation est une variation directe. Quand x = 6, y = 15. Quel point appartient aussi à cette relation?`, "(10, 25)", ["(10, 19)", "(8, 17)", "(2, 9)"], "k = 2.5 : 2.5 × 10 = 25."),
  num(String.raw`Une variation partielle passe par $(0, 4)$ et $(5, 19)$. Que vaut y quand x = 12?`, 40, "m = 3; 36 + 4."),
  tf(`Dans une variation partielle, doubler x double toujours y.`, false, "C'est vrai seulement pour une variation directe (b = 0)."),
  num(String.raw`La droite $y=mx+3$ passe par $(4,-5)$. Trouve m.`, -2, "−5 = 4m + 3."),
  ms(`Le graphique du tarif d'un taxi commence à (0, 3.75) et a une pente de 1.6. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["les frais de prise en charge sont de 3.75 dollars", "chaque km coûte 1.60 dollar", "une course de 10 km coûte 19.75 dollars", "la relation est une variation directe", "le tarif pour 0 km est 0"], [0, 1, 2], "C = 1.6d + 3.75; 16 + 3.75 = 19.75.", FIG.taxi),
  num(`Une rampe monte de 0.45 m sur une course horizontale de 5.4 m. Quelle est sa pente sous forme décimale (3 décimales)?`, 0.083, "0.45 ÷ 5.4 ≈ 0.0833.", null, 0.0006),
  num(`Un réservoir d'eau contient 900 L et on le remplit à raison de 45 L/min; il contient déjà 135 L au départ. Après combien de minutes est-il plein?`, 17, "45t + 135 = 900."),
  mx(String.raw`Celsius et Fahrenheit : $0\,^\circ$C = $32\,^\circ$F et $100\,^\circ$C = $212\,^\circ$F. Écris F en fonction de C.`, "1.8*C+32", "m = 180/100 = 1.8; b = 32."),
  num(`Avec F = 1.8C + 32, quelle température en Celsius est égale à 50 °F?`, 10, "1.8C = 18."),
  mc(`Deux forfaits de téléphone : A = 0.20t + 10, B = 0.12t + 22. Lequel a la plus grande valeur initiale et lequel a le plus grand taux?`, "B a la plus grande valeur initiale; A a le plus grand taux", ["A a les deux", "B a les deux", "A a la plus grande valeur initiale; B le plus grand taux"], "22 > 10; 0.20 > 0.12."),
  num(`Essence dans une voiture : 52 L après 0 km, 37 L après 200 km (consommation régulière). Combien de km avant qu'il ne reste que 10 L?`, 560, "Taux −0.075 L/km; 52 − 0.075d = 10."),
  num(`Une droite qui passe par l'origine passe par (−4, 10). Que vaut y quand x = 6?`, -15, "m = −2.5."),
  tf(String.raw`Le graphique de $C=15n+5$ pour des nombres entiers $n$ doit être tracé par une droite pleine.`, false, "n est un dénombrement : place des points."),
  num(String.raw`Une table : $x$ = 3, 7, 12; $y$ = 1, 9, 19. Quelle est l'ordonnée à l'origine?`, -5, "m = 2; 1 = 6 + b."),
  num(String.raw`Une gardienne d'enfants gagne un montant fixe de 10 dollars plus un taux horaire. 4 heures rapportent 70 dollars. Quelle est la paie pour 7 heures?`, 115, "taux 15; 10 + 105."),
  mc(`Quelle situation N'est PAS modélisée par une relation linéaire?`, "un compte d'épargne qui rapporte 5 % d'intérêt par année, composé", ["un tarif de taxi avec des frais de prise en charge et un taux par km", "une bougie qui brûle à un rythme régulier", "un salaire à taux horaire fixe"], "L'intérêt composé croît selon un rapport constant : exponentielle."),
];
