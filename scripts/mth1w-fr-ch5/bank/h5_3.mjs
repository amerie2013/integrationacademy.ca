// 5.3 Unités et conversion d'unités — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, prism } from "./fig.mjs";

export const TOPIC = "5.3 Unités et conversion d'unités";
export const Q = [
  num(`Une entrée de 12 m sur 3.5 m est recouverte de gravier sur 8 cm d'épaisseur. Combien de m³ de gravier faut-il ?`, 3.36, "8 cm = 0.08 m; 12 × 3.5 × 0.08."),
  num(`Le plancher d'un garage mesure 20 pi sur 22 pi. Les carreaux sont vendus en boîtes qui couvrent 2.5 m². Combien de boîtes faut-il ?`, 17, "440 pi² ≈ 40.88 m²; 40.88 ÷ 2.5 = 16.35 → 17 boîtes."),
  num(`La lumière parcourt 3.0 × 10⁸ m/s. Combien de km parcourt-elle en une minute ? Donne la réponse en millions de km.`, 18, "3 × 10⁸ × 60 = 1.8 × 10¹⁰ m = 1.8 × 10⁷ km = 18 millions de km."),
  num(`Un aquarium contient 120 L. S'il mesure 80 cm de long et 40 cm de large, quelle est la profondeur de l'eau (cm) ?`, 37.5, "120 000 cm³ ÷ (80 × 40).", figDoc({ w: 260, items: prism(8, 4, 3.75, { ll: "80 cm", lw: "40 cm", lh: "?" }) })),
  num(`Une voiture parcourt 35 milles par gallon américain. Convertis cette consommation en litres aux 100 km (1 décimale).`, 6.7, "35 mi = 56.33 km pour 3.785 L → 6.72 L aux 100 km.", null, 0.06),
  num(`Un escargot se déplace à 0.03 mi/h. Combien de cm parcourt-il en une minute (au cm près) ?`, 80, "0.03 × 1609.344 m ÷ 60 = 0.8047 m.", null, 0.6),
  num(`Un champ rectangulaire mesure 0.15 km sur 80 m. Trouve son aire en hectares (1 ha = 10 000 m²).`, 1.2, "150 × 80 = 12 000 m²."),
  num(`Combien de cubes de 1 cm entrent dans une boîte de 0.5 m × 0.4 m × 0.3 m ?`, 60000, "50 × 40 × 30."),
  num(`La pluie tombe à raison de 12 mm à l'heure sur un toit de 25 m sur 40 m. Combien de litres tombent sur le toit en 2 heures ?`, 24000, "0.024 m × 1000 m² = 24 m³ = 24 000 L."),
  tf(`Une vitesse de 100 km/h est plus rapide que 60 mi/h.`, true, "60 mi/h ≈ 96.6 km/h."),
  ms(`Lesquels sont égaux à 2.5 m² ? Sélectionne toutes les bonnes réponses.`, ["25 000 cm²", "2 500 000 mm²", "250 dm²", "0.0000025 km²"], [0, 1, 2, 3], "× 10⁴, × 10⁶, × 10², ÷ 10⁶."),
  num(`Une planche a une section de 2 po sur 6 po et mesure 8 pi de long. Trouve son volume en cm³ (au nombre entier près).`, 18878, "2 × 6 × 96 = 1152 po³; × 2.54³ (16.387) ≈ 18 878 cm³.", null, 2),
  num(`Une piscine mesure 50 m de long. Un nageur parcourt 1 mille. Combien de longueurs cela fait-il (au nombre entier près) ?`, 32, "1609.3 ÷ 50 ≈ 32.2."),
  num(`Convertis 1 m³ en pieds cubes (1 décimale).`, 35.3, "1 ÷ 0.3048³ ≈ 35.31.", null, 0.06),
  num(`Un cœur pompe 70 mL par battement, à 72 battements par minute. Combien de litres pompe-t-il en une journée ?`, 7257.6, "70 × 72 × 1440 mL.", null, 0.1),
  mc(`Un panneau indique « Hauteur max. 12 pi 6 po ». Un camion mesure 3.9 m de haut. Passera-t-il ?`, "non — la limite est d'environ 3.81 m", ["oui — la limite est d'environ 4.2 m", "oui — c'est exactement égal", "impossible à dire"], "150 po × 2.54 = 381 cm."),
  num(`La peinture couvre 350 pi² par gallon américain. Combien de m² par litre cela fait-il (2 décimales) ?`, 8.59, "350 pi² = 32.52 m²; ÷ 3.785 L.", null, 0.01),
  num(`Un cube a un volume de 8 L. Quelle est la longueur de son arête en cm ?`, 20, "8000 cm³ → ∛8000."),
  num(`Un cycliste parcourt 18 km en 40 min. Trouve sa vitesse moyenne en m/s (2 décimales).`, 7.5, "18 000 m ÷ 2400 s."),
  num(`Une acre mesure 43 560 pi². Combien de m² cela fait-il (au nombre entier près) ?`, 4047, "43 560 × 0.092903 ≈ 4046.9.", null, 1),
];
