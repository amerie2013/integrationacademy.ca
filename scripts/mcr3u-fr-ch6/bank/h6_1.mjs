// 6.1 Fonctions périodiques et leurs propriétés — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_1.mjs)
import { FIG } from "./fig.mjs";
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";
import { TITLE } from "../l6_1.mjs";

const S = String.raw;
const saw = (p, h, n) => Array.from({ length: n }, (_, i) => ({ pts: [[p * i, 0], [p * (i + 1), h]], color: "violet" }));

export const TOPIC = TITLE;
export const Q = [
  num(S`Une fonction a une période de 9 avec \(f(2)=4\), \(f(5)=-1\) et \(f(8)=6\). Trouve \(f(-7)\).`, 4, "−7 + 9 = 2."),
  num(S`Une fonction a une période de 9 avec \(f(2)=4\), \(f(5)=-1\) et \(f(8)=6\). Trouve \(f(50)\).`, -1, "50 − 45 = 5."),
  num(S`Une fonction a une période de 9 avec \(f(2)=4\), \(f(5)=-1\) et \(f(8)=6\). Trouve \(f(1001)\).`, 4, "1001 = 111 × 9 + 2."),
  num("La marée a une période de 12 h 25 min et il y a une marée haute en t = 0. Combien de marées hautes y a-t-il de t = 0 à t = 72 h inclusivement?", 6, "Marées hautes à 0, 12.42, 24.83, 37.25, 49.67 et 62.08 h."),
  num("Un cœur bat 80 fois par minute. Combien de secondes durent 100 battements?", 75, "Période de 0.75 s × 100."),
  num("Une sinusoïde a un maximum en t = 2 et le minimum suivant en t = 7. Quelle est sa période?", 10, "Du max au min, il y a une demi-période."),
  num("Une sinusoïde a un maximum de 9 en t = 2 et le minimum suivant de 1 en t = 7. Quelle est sa valeur en t = 4.5?", 5, "À mi-chemin dans le temps entre le max et le min : sur l'axe.", FIG.sinT2),
  num("Une sinusoïde a un maximum de 9 en t = 2 et le minimum suivant de 1 en t = 7. Quand arrive le premier maximum après t = 40?", 42, "Une demi-période vaut 5, donc la période est 10. Maximums en 2, 12, 22, 32, 42.", FIG.sinT2),
  tf("Si une fonction vérifie f(x + 6) = f(x) et f(x + 4) = f(x) pour tout x, alors f(x + 2) = f(x) pour tout x.", true, "f(x + 2) = f(x + 6 − 4) = f(x)."),
  num("Un tour de grande roue se répète toutes les 45 s et le manège dure 6 min. Combien de cycles complets cela fait-il?", 8, "360 ÷ 45."),
  ms("Une fonction périodique a un max de 8, un min de −2 et une période de 6. Lesquels sont vrais? Choisis toutes les bonnes réponses.", ["l'amplitude est 5", "l'amplitude est 10", "l'axe est y = 3", "f(x + 12) = f(x)", "l'image est −2 ≤ y ≤ 8"], [0, 2, 3, 4], "Amplitude (8 − (−2))/2 = 5."),
  num("Les températures mensuelles moyennes varient de −8°C à 22°C. Quelle est l'amplitude?", 15, "(22 + 8)/2."),
  num("Les températures mensuelles moyennes varient de −8°C à 22°C. Quel est l'axe (°C)?", 7, "(22 − 8)/2."),
  num("Le jour 100 compte 13.1 h d'ensoleillement. En supposant que le motif se répète tous les 365 jours, combien d'heures d'ensoleillement le jour 1195 compte-t-il?", 13.1, "1195 = 100 + 3 × 365.", null, 0.001),
  num("Un phare émet un éclat toutes les 7.5 s, à partir de t = 0. Combien d'éclats y a-t-il de t = 0 à t = 600 s inclusivement?", 81, "600 ÷ 7.5 = 80 intervalles, donc 81 éclats."),
  num(S`Le graphique a une période de 8. Trouve \(f(30)\).`, -2, "30 = 3 × 8 + 6 : lis f(6).", waveD((x) => 3 * sin(45 * x) + 1, { xmin: 0, xmax: 16, ymin: -3, ymax: 5 }, { x: 1, y: 1 }, { pts: [[6, -2]] })),
  num("Lis la valeur maximale de la fonction représentée.", 1, "Axe −1.5, amplitude 2.5.", waveD((x) => 2.5 * cos(30 * x) - 1.5, { xmin: 0, xmax: 24, ymin: -5, ymax: 2 }, { x: 2, y: 1 })),
  num(S`La dent de scie se répète toutes les 2 unités, en montant de 0 à 6. Trouve \(f(9.5)\).`, 4.5, "9.5 = 4 × 2 + 1.5 : aux trois quarts de la montée.", waveD([], { xmin: 0, xmax: 10, ymin: -1, ymax: 7 }, { x: 1, y: 1 }, { segs: saw(2, 6, 5) }), 0.001),
  num("Combien de cycles complets sont représentés de x = 0 à x = 60?", 5, "Période de 12.", waveD((x) => 4 * sin(30 * x) + 6, { xmin: 0, xmax: 60, ymin: 0, ymax: 11 }, { x: 6, y: 1 })),
  num("Un écran se rafraîchit 120 fois par seconde. Quelle est la période en millisecondes (2 décimales)?", 8.33, "1000 ÷ 120.", null, 0.006),
];
