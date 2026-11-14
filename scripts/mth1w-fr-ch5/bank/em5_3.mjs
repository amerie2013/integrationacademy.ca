// 5.3 Unités et conversion d'unités — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rect } from "./fig.mjs";

export const E = [
  num(`Convertis 7 m en cm.`, 700, "1 m = 100 cm."),
  num(`Convertis 2500 m en km.`, 2.5, "÷ 1000."),
  num(`Convertis 4.2 kg en g.`, 4200, "× 1000."),
  num(`Convertis 650 mL en L.`, 0.65, "÷ 1000."),
  num(`Convertis 38 mm en cm.`, 3.8, "÷ 10."),
  num(`Combien de pouces y a-t-il dans 3 pieds ?`, 36, "3 × 12."),
  num(`Combien de pieds y a-t-il dans 4 verges ?`, 12, "4 × 3."),
  num(`Combien de centimètres y a-t-il dans 10 pouces ?`, 25.4, "10 × 2.54."),
  mc(`Lequel est le plus long : 1 mille ou 1 kilomètre ?`, "1 mille", ["1 kilomètre", "ils sont égaux", "impossible à dire"], "1 mi ≈ 1.609 km."),
  mc(`Quelle unité convient le mieux pour la masse d'un trombone ?`, "le gramme", ["le kilogramme", "la tonne", "le litre"], "Environ 1 g."),
  num(`Combien de mL y a-t-il dans 1 cm³ ?`, 1, "1 cm³ = 1 mL."),
  num(`Combien de litres y a-t-il dans 1 m³ ?`, 1000, "1 m³ = 1000 L."),
  num(`Combien de cm² y a-t-il dans 1 m² ?`, 10000, "100 × 100."),
  tf(`1 m² = 100 cm².`, false, "1 m² = 100 cm × 100 cm = 10 000 cm²."),
  num(`Écris 5 pi 2 po en pouces.`, 62, "5 × 12 + 2."),
  num(`Convertis 0.3 km en m.`, 300, "× 1000."),
  mc(`Le préfixe « milli » signifie…`, "un millième", ["mille", "un centième", "un million"], "1 mm = 0.001 m."),
  num(`Un crayon mesure 19 cm de long. Combien de mm cela fait-il ?`, 190, "× 10."),
  tf(`Passer des mètres aux centimètres donne un plus grand nombre.`, true, "Unité plus petite, il en faut plus."),
  num(`Combien de secondes y a-t-il dans 3 minutes ?`, 180, "3 × 60."),
];

export const M = [
  num(`Convertis 1.75 m² en cm².`, 17500, "× 10 000."),
  num(`Convertis 3 500 000 cm³ en m³.`, 3.5, "÷ 1 000 000."),
  num(`Une pièce mesure 4.5 m sur 3.6 m. Trouve son aire en m² (2 décimales).`, 16.2, "4.5 × 3.6.", figDoc({ w: 240, items: rect(4.5, 3.6, { lw: "4.5 m", lh: "3.6 m" }) })),
  num(`Convertis 5 pi 10 po en cm (2 décimales).`, 177.8, "70 po × 2.54.", null, 0.006),
  num(`Convertis 26.2 milles (un marathon) en km (1 décimale).`, 42.2, "26.2 × 1.609.", null, 0.06),
  num(`Convertis 72 km/h en m/s.`, 20, "72 000 ÷ 3600."),
  num(`Convertis 15 m/s en km/h.`, 54, "15 × 3.6."),
  num(`Une boîte mesure 20 cm × 15 cm × 10 cm. Combien de litres contient-elle ?`, 3, "3000 cm³ ÷ 1000."),
  num(`Combien de pouces carrés y a-t-il dans 1 pied carré ?`, 144, "12 × 12."),
  num(`Combien de pieds cubes y a-t-il dans 1 verge cube ?`, 27, "3³."),
  num(`Convertis 2.5 L en cm³.`, 2500, "× 1000."),
  num(`Un sac de farine de 2 kg pèse combien de livres (1 décimale) ?`, 4.4, "2 ÷ 0.4536.", null, 0.06),
  num(`Une recette demande 750 g de sucre. Combien de kg cela fait-il ?`, 0.75, "÷ 1000."),
  ms(`Lesquels sont égaux à 1 L ? Sélectionne toutes les bonnes réponses.`, ["1000 mL", "1000 cm³", "100 cm³", "0.001 m³"], [0, 1, 3], "1 L = 1000 cm³ = 0.001 m³."),
  num(`L'essence coûte 1.65 dollar le litre. Combien coûte 1 gallon américain (3.785 L) (2 décimales) ?`, 6.25, "1.65 × 3.785 ≈ 6.245.", null, 0.006),
  num(`Un jardin mesure 30 pi sur 20 pi. Trouve son aire en m² (1 décimale).`, 55.7, "600 pi² × 0.0929.", null, 0.06),
  tf(`Pour convertir des m³ en cm³, on multiplie par 100.`, false, "On multiplie par 100³ = 1 000 000."),
  num(`Une coureuse parcourt 5 km en 25 min. Quelle est sa vitesse en km/h ?`, 12, "5 ÷ (25/60)."),
  num(`Un couloir mesure 9 vg de long. Combien de mètres cela fait-il (2 décimales) ?`, 8.23, "9 × 0.9144.", null, 0.006),
  num(`Un réservoir d'eau contient 0.6 m³. Combien de litres cela fait-il ?`, 600, "× 1000."),
];
