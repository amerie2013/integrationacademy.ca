// 4.7 Déterminer l'équation d'une droite — 20 questions difficiles
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l4_7.mjs";

export const TOPIC = TITLE;
export const Q = [
  mx(String.raw`Écris la droite passant par $(-4,1)$ et $(6,-4)$.`, "-0.5*x-1", "m = −5/10 = −1/2; 1 = 2 + b → b = −1."),
  num(String.raw`Les points $(2,5)$, $(6,13)$ et $(k,21)$ sont alignés. Trouve k.`, 10, "Pente 2 : 21 = 2k + 1."),
  num(String.raw`Trouve l'aire du triangle formé par les axes et la droite passant par $(2,6)$ et $(4,2)$.`, 25, "y = −2x + 10 : coordonnées à l'origine 5 et 10 : ½ × 5 × 10."),
  mx(String.raw`Une droite a la même pente que la droite passant par $(1,1)$ et $(4,7)$, et passe par $(-2,3)$. Écris-la.`, "2*x+7", "m = 2; 3 = −4 + b."),
  num(`Un centre de conditionnement physique a facturé 180 dollars à un membre après 4 mois et 255 après 7 mois. Combien coûteront 12 mois?`, 380, "m = 25; b = 80; 25·12 + 80."),
  num(`Un ressort mesure 14 cm avec 200 g suspendus et 17.5 cm avec 450 g. Quelle est sa longueur sans masse (cm)?`, 11.2, "m = 3.5/250 = 0.014; 14 − 2.8.", null, 0.001),
  tf(String.raw`Les points $(-3,-7)$, $(0,-1)$ et $(4,8)$ sont sur une même droite.`, false, "Les pentes 2 et 9/4 diffèrent."),
  num(String.raw`La droite passant par $(a, 3)$ et $(2, 9)$ a une pente de $-3$. Trouve a.`, 4, "(9 − 3)/(2 − a) = −3 → 2 − a = −2."),
  num(`Lis le graphique et trouve l'abscisse à l'origine de la droite.`, 6, "Passe par (0, 4) et (3, 2) : pente −2/3; 0 = −2x/3 + 4 → x = 6.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 6 }, lines: [{ m: -2 / 3, b: 4 }], points: [{ x: 0, y: 4, label: "(0, 4)" }, { x: 3, y: 2, label: "(3, 2)" }], step: { x: 1, y: 1 } })),
  num(`Températures : 20 °C à 1 km d'altitude, 7 °C à 3 km (baisse régulière). À quelle altitude fait-il 0 °C (km)?`, 4.0769, "m = −6.5; b = 26.5; 26.5 ÷ 6.5 ≈ 4.08.", null, 0.006),
  ms(`Une droite passe par (1, 4) et a une ordonnée à l'origine de 1. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["sa pente est 3", "elle passe par (2, 7)", "c'est une variation directe", "son abscisse à l'origine est −1/3"], [0, 1, 3], "y = 3x + 1."),
  mx(String.raw`Écris la droite passant par $(-1,-1)$ qui est parallèle à la droite passant par $(2,3)$ et $(6,1)$.`, "-0.5*x-1.5", "m = −1/2; −1 = 0.5 + b."),
  num(`Factures d'un plombier : 3 h coûtent 255 dollars, 5 h coûtent 385 dollars. Un autre plombier demande 80 dollars l'heure, sans frais. Pour combien d'heures coûtent-ils la même chose?`, 4, "Premier : 65h + 60; 65h + 60 = 80h → h = 4."),
  num(String.raw`Une table : $(2,-1)$, $(5,8)$, $(9,20)$, $(x,35)$. Trouve x.`, 14, "m = 3, b = −7 : 3x − 7 = 35."),
  tf(String.raw`Deux droites différentes peuvent toutes deux passer par $(1,2)$ et $(4,8)$.`, false, "Deux points déterminent exactement une droite."),
  num(String.raw`Quelle est l'ordonnée à l'origine de la droite passant par $(-6,0)$ et $(0,b)$ si sa pente est $\frac23$?`, 4, "b = 0 + (2/3)(6)."),
  mc(`Essence d'une voiture : 52 L après 120 km, 34 L après 420 km. Que signifie la pente?`, "elle consomme 0.06 L par km", ["elle consomme 18 L par km", "elle a commencé avec 0.06 L", "elle consomme 6 L par km"], "−18 ÷ 300 = −0.06."),
  num(`Une voiture a 52 L d'essence après 120 km et 34 L après 420 km. Combien d'essence avait-elle au départ (L)?`, 59.2, "52 = −0.06(120) + b.", null, 0.001),
  num(String.raw`Points $A(0,0)$, $B(4,2)$, $C(10,5)$ : quelle est la pente de la droite passant par A et C?`, 0.5, "5/10.", null, 0.001),
  mx(String.raw`Écris la droite de pente $-1$ qui passe par le point milieu de $(2,4)$ et $(6,10)$.`, "-x+11", "Point milieu (4, 7) : 7 = −4 + b."),
];
