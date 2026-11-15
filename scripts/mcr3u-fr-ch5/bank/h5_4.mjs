import { FIG } from "./figs.mjs";
// 5.4 La loi des sinus et le cas ambigu — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { triD, sin, cos, asin, rd } from "./fig.mjs";

const S = String.raw;
// Q1–2 : A = 31°, a = 8, b = 13
const B1 = asin((13 * sin(31)) / 8), C1 = 180 - 31 - B1, C2 = 180 - 31 - (180 - B1);
const c1 = (8 * sin(C1)) / sin(31), c2 = (8 * sin(C2)) / sin(31);
// Q6 : A = 40°, a = 7, b = 10
const h6 = 10 * sin(40), diff6 = 2 * Math.sqrt(49 - h6 * h6);
// Q7–9 : incendie
const BF = (15 * sin(40)) / sin(80), AF = (15 * sin(60)) / sin(80);
// Q12
const a12 = (12 * sin(40)) / sin(65), area12 = 0.5 * a12 * 12 * sin(75);
// Q16 figure : A = 28°, b = 16, a = 9
const Cx = 16 * cos(28), Cy = 16 * sin(28), dx = Math.sqrt(81 - Cy * Cy);
// Q17 rivière
const AT = (80 * sin(120)) / sin(25), w17 = AT * sin(35);
// Q18 montagne
const BP = (1000 * sin(22)) / sin(13), h18 = BP * sin(35);
// Q19 AAC
const c19 = (15 * sin(69)) / sin(48), b19 = 15, a19 = (15 * sin(63)) / sin(48);

export const TOPIC = "5.4 La loi des sinus et le cas ambigu";
export const Q = [
  num(S`$\angle A=31^\circ$, $a=8$, $b=13$. Deux triangles sont possibles. Trouve la PLUS GRANDE valeur possible de $c$ (au centième près).`, rd(Math.max(c1, c2)), "Un angle B aigu donne le plus grand angle C et le plus long côté c.", null, 0.01),
  num(S`$\angle A=31^\circ$, $a=8$, $b=13$. Trouve la PLUS PETITE valeur possible de $c$ (au centième près).`, rd(Math.min(c1, c2)), "Utilise B₂ = 180° − B₁.", null, 0.01),
  num(S`$\angle A=31^\circ$ et $b=13$. Quelle est la plus petite valeur entière de $a$ qui donne deux triangles?`, 7, "h = 13 sin 31° ≈ 6.70."),
  num(S`$\angle A=31^\circ$ et $b=13$. Combien de valeurs entières de $a$ donnent deux triangles?`, 6, "a = 7, 8, …, 12."),
  num(S`$\angle A=45^\circ$, $b=10\sqrt2$ et $a=10$. Trouve $\angle B$.`, 90, "h = 10√2 sin 45° = 10 = a : un triangle rectangle."),
  num(S`$\angle A=40^\circ$, $a=7$, $b=10$. Trouve la différence entre les deux valeurs possibles de $c$ (au centième près).`, rd(diff6), "Les deux sommets B sont distants de 2√(a² − h²).", null, 0.01),
  num("Les tours d'observation A et B sont distantes de 15 km. À partir de A, l'incendie forme un angle de 40° avec AB; à partir de B, il forme un angle de 60° avec BA. À quelle distance de B se trouve l'incendie (au centième près)?", rd(BF), "Angle à l'incendie 80°; BF est opposé à l'angle de 40°.", FIG.towers, 0.01),
  num("Les tours d'observation A et B sont distantes de 15 km. À partir de A, l'incendie forme un angle de 40° avec AB; à partir de B, il forme un angle de 60° avec BA. À quelle distance de A se trouve l'incendie (au centième près)?", rd(AF), "AF est opposé à l'angle de 60°.", FIG.towers, 0.01),
  num("Les tours d'observation A et B sont distantes de 15 km. À partir de A, l'incendie forme un angle de 40° avec AB; à partir de B, il forme un angle de 60° avec BA. À quelle distance de la droite AB se trouve l'incendie (au centième près)?", rd(AF * sin(40)), "AF sin 40°.", FIG.towers, 0.01),
  tf("Si ∠A est obtus et a > b, il existe exactement un triangle.", true, "Le côté a est alors assez long, et une seule position convient."),
  mc(S`$\angle A=150^\circ$ et $b=10$. Pour quelles valeurs de $a$ y a-t-il un triangle?`, S`$a>10$`, [S`$a\ge5$`, S`$5<a<10$`, S`$a=5$`], "A obtus : a doit être le plus long côté."),
  num(S`$\angle A=40^\circ$, $\angle B=75^\circ$, $c=12$. Trouve l'aire du triangle (au centième près).`, rd(area12), "a = 12 sin 40° / sin 65°; aire = ½ac sin B.", null, 0.01),
  num(S`$\angle A=52^\circ$, $a=10$, $b=12.5$. Trouve la valeur obtuse de ∠B (au dixième près).`, rd(180 - asin((12.5 * sin(52)) / 10), 1), "h ≈ 9.85 < 10 < 12.5, donc deux triangles.", FIG.amb52, 0.05),
  num(S`Le rapport $\frac a{\sin A}$ est égal au diamètre du cercle qui passe par A, B et C. Trouve le rayon de ce cercle quand $a=10$ et $\angle A=30^\circ$.`, 10, "Diamètre 10/½ = 20."),
  num(S`$\angle A=35^\circ$ et $a=6$. Quelle est la plus grande valeur entière de $b$ pour laquelle il existe au moins un triangle?`, 10, "Il faut b sin 35° ≤ 6, donc b ≤ 10.46."),
  num(S`Pour les données de la figure ($\angle A=28^\circ$, $b=16$, $a=9$), trouve la valeur obtuse de ∠B (au dixième près).`, rd(180 - asin((16 * sin(28)) / 9), 1), "180° − sin⁻¹(16 sin 28° / 9).",
    triD([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A 28°", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx - dx, 0, "B₂"], [Cx / 2 - 1, Cy / 2 + 0.6, "16"]] }), 0.05),
  num("A et B sont distants de 80 m sur une rive rectiligne. Un arbre T sur la rive opposée donne ∠TAB = 35° et ∠TBA = 120°. Trouve la largeur de la rivière (au dixième près).", rd(w17, 1), "∠T = 25°; AT = 80 sin 120° / sin 25°; largeur = AT sin 35°.",
    triD([[0, 0], [80, 0], [AT * cos(35), w17]], ["A 35°", "B", "T"], { extra: [{ pts: [[-10, 0], [AT * cos(35) + 20, 0]], color: "green" }, { pts: [[-10, w17], [AT * cos(35) + 20, w17]], color: "green" }] }), 0.05),
  num("À partir de A, l'angle d'élévation d'un pic est de 22°. Après avoir marché 1000 m en ligne droite vers celui-ci jusqu'à B, l'angle est de 35°. Trouve la hauteur du pic (au mètre près).", Math.round(h18), "∠P = 13°; BP = 1000 sin 22° / sin 13°; hauteur = BP sin 35°.",
    triD([[0, 0], [1000, 0], [1000 + h18 / Math.tan((35 * Math.PI) / 180), h18]], ["A 22°", "B 35°", "pic"], { extra: [{ pts: [[1000 + h18 / Math.tan((35 * Math.PI) / 180), 0], [1000 + h18 / Math.tan((35 * Math.PI) / 180), h18]], color: "gray" }] }), 0.5),
  num("Trouve le côté c (opposé à C), au centième près.", rd(c19), "∠C = 69°; c = 15 sin 69° / sin 48°.",
    triD([[0, 0], [c19, 0], [b19 * cos(63), b19 * sin(63)]], ["A 63°", "B 48°", "C"], { marks: [[b19 * cos(63) / 2 - 1.2, b19 * sin(63) / 2, "15"], [(c19 + b19 * cos(63)) / 2 + 0.8, b19 * sin(63) / 2, `${rd(a19, 1)}`]] }), 0.01),
  num(S`$\angle A=40^\circ$, $a=8$, $b=11$. Deux triangles sont possibles. Quelle est la SOMME des deux valeurs possibles de ∠C?`, 100, "C₁ = 140° − B₁ et C₂ = B₁ − 40°.", FIG.amb40),
];
