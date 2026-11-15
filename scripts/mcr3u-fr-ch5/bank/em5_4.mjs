import { FIG } from "./figs.mjs";
// 5.4 La loi des sinus et le cas ambigu — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, sin, cos, asin, rd } from "./fig.mjs";

const S = String.raw;
const sl = (a, A, B) => (a * sin(B)) / sin(A); // côté opposé à B
// figure : CCA avec deux triangles, A = 35°, b = 12, a = 9
const Cx = 12 * cos(35), Cy = 12 * sin(35), dx = Math.sqrt(81 - Cy * Cy);
const two = triD([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A 35°", "", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx / 2 - 0.6, Cy / 2 + 0.5, "12"], [Cx + dx / 2 + 0.3, Cy / 2, "9"], [Cx - dx / 2 - 0.6, Cy / 2, "9"]] });
const asa = (A, B, c, lab) => { const b = (c * sin(B)) / sin(180 - A - B); return triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], [`A ${A}°`, `B ${B}°`, "C"], { marks: lab }); };

export const E = [
  num(S`$\angle A=40^\circ$, $\angle B=60^\circ$, $a=12$. Trouve $b$, au centième près.`, rd(sl(12, 40, 60)), "b = 12 sin 60° / sin 40°.", null, 0.01),
  num(S`$\angle A=70^\circ$ et $\angle B=50^\circ$. Trouve $\angle C$.`, 60, "180° − 120°."),
  num(S`$\angle A=30^\circ$, $\angle B=45^\circ$, $a=5$. Trouve $b$, au centième près.`, rd(sl(5, 30, 45)), "5 sin 45° / sin 30°.", null, 0.01),
  mc("Quelle équation exprime la loi des sinus?", S`$\frac a{\sin A}=\frac b{\sin B}$`, [S`$\frac a{\sin B}=\frac b{\sin A}$`, S`$a\sin A=b\sin B$`, S`$a^2=b^2+c^2$`], "Chaque côté divisé par le sinus de son angle opposé."),
  mc("Que signifie ACA?", "deux angles et le côté compris entre eux", ["deux côtés et l'angle compris entre eux", "deux côtés et un angle opposé à l'un d'eux", "trois côtés"], "Angle–Côté–Angle."),
  num(S`$\angle A=30^\circ$, $a=3$, $b=10$. Combien de triangles sont possibles?`, 0, "h = 10 sin 30° = 5 > 3."),
  num(S`$\angle A=30^\circ$, $a=5$, $b=10$. Combien de triangles sont possibles?`, 1, "a = h : un triangle rectangle."),
  num(S`$\angle A=30^\circ$, $a=7$, $b=10$. Combien de triangles sont possibles?`, 2, "5 < 7 < 10."),
  num(S`$\angle A=30^\circ$, $a=12$, $b=10$. Combien de triangles sont possibles?`, 1, "a ≥ b."),
  tf("Deux angles et un côté quelconque déterminent toujours exactement un triangle.", true, "Le troisième angle est fixé, et la loi des sinus donne chaque côté."),
  tf("La loi des sinus seule permet de trouver un angle quand seuls les trois côtés sont connus.", false, "Le cas CCC exige d'abord la loi des cosinus."),
  num(S`$\angle A=42^\circ$ et $b=20$. Trouve la hauteur $h=b\sin A$, au centième près.`, rd(20 * sin(42)), "20 sin 42°.", null, 0.01),
  num(S`$\sin B=0.9$ et B est aigu. Trouve B, au dixième près.`, rd(asin(0.9), 1), "sin⁻¹ 0.9.", null, 0.05),
  num(S`$\sin B=0.9$ et B est obtus. Trouve B, au dixième près.`, rd(180 - asin(0.9), 1), "180° − sin⁻¹ 0.9.", null, 0.05),
  num(S`$\angle A=55^\circ$, $\angle B=75^\circ$, $c=30$. Trouve $a$, au centième près.`, rd((30 * sin(55)) / sin(50)), "C = 50°; a = 30 sin 55° / sin 50°.", null, 0.01),
  mc("Quelles données peuvent mener au cas ambigu?", "CCA", ["ACA", "CAC", "CCC"], "Deux côtés et un angle non compris."),
  num(S`$\angle A=100^\circ$, $a=15$, $b=9$. Combien de triangles sont possibles?`, 1, "A obtus et a > b."),
  num(S`$\angle A=100^\circ$, $a=8$, $b=9$. Combien de triangles sont possibles?`, 0, "Un angle A obtus exige a > b."),
  num("Trouve le côté a (opposé à A), au centième près.", rd((14 * sin(50)) / sin(65)), "C = 65°; a = 14 sin 50° / sin 65°.", asa(50, 65, 14, [[7, 0, "14"]]), 0.01),
  num(S`La figure montre $\angle A=35^\circ$, $b=12$ et $a=9$. Combien de triangles correspondent à ces données?`, 2, "h = 12 sin 35° ≈ 6.88 < 9 < 12.", two),
];

export const M = [
  num(S`$\angle A=38^\circ$, $a=11$, $b=8$. Trouve $\angle B$, au dixième près.`, rd(asin((8 * sin(38)) / 11), 1), "a > b, donc B est aigu.", null, 0.05),
  num(S`$\angle B=118^\circ$, $b=25$, $c=15$. Trouve $\angle C$, au dixième près.`, rd(asin((15 * sin(118)) / 25), 1), "B est obtus, donc C doit être aigu.", null, 0.05),
  num(S`$\angle A=27^\circ$, $\angle B=104^\circ$, $a=14$. Trouve $c$, au centième près.`, rd((14 * sin(49)) / sin(27)), "C = 49°.", null, 0.01),
  num(S`$\angle A=42^\circ$, $a=9$, $b=12$. Trouve la valeur aiguë de ∠B, au dixième près.`, rd(asin((12 * sin(42)) / 9), 1), "sin B = 12 sin 42° / 9.", FIG.amb42, 0.05),
  num(S`$\angle A=42^\circ$, $a=9$, $b=12$. Trouve la valeur obtuse de ∠B, au dixième près.`, rd(180 - asin((12 * sin(42)) / 9), 1), "180° moins la valeur aiguë.", FIG.amb42, 0.05),
  num(S`$\angle A=50^\circ$ et $b=14$. Quelle est la plus petite valeur entière de $a$ qui donne deux triangles?`, 11, "h = 14 sin 50° ≈ 10.72."),
  num(S`$\angle A=25^\circ$, $a=10$, $b=18$. Combien de triangles sont possibles?`, 2, "h ≈ 7.61 < 10 < 18."),
  tf("Si la loi des sinus donne sin B > 1, aucun triangle n'existe.", true, "Aucun angle n'a un sinus supérieur à 1."),
  tf(S`$\angle A=60^\circ$, $a=9$, $b=9$ donne exactement un triangle.`, true, "a ≥ b : un seul triangle (ici, équilatéral)."),
  mc("Pour un angle ∠A aigu, quand existe-t-il deux triangles?", S`$b\sin A<a<b$`, [S`$a<b\sin A$`, S`$a\ge b$`, S`$a=b\sin A$`], "Le côté a doit être plus long que la hauteur, mais plus court que b."),
  num("Les points A et B sont distants de 300 m. Un point C de l'autre côté d'une vallée donne ∠CAB = 41° et ∠CBA = 63°. Trouve AC, au dixième près.", rd((300 * sin(63)) / sin(76), 1), "∠C = 76°; AC est opposé à B.", FIG.valley, 0.05),
  num("Deux postes de la garde côtière sont distants de 5 km. Un navire est aperçu à 72° de la droite qui les relie au poste 1 et à 66° au poste 2. À quelle distance du poste 2 se trouve le navire (au centième près)?", rd((5 * sin(72)) / sin(42)), "Angle au navire 42°; le côté issu du poste 2 est opposé à 72°.", FIG.coast, 0.01),
  num(S`$\angle A=\angle B=33^\circ$ et $c=20$. Trouve $a$, au centième près.`, rd((20 * sin(33)) / sin(114)), "C = 114°.", null, 0.01),
  num(S`$\angle A=72^\circ$, $a=20$, $b=17$. Trouve $\angle B$, au dixième près.`, rd(asin((17 * sin(72)) / 20), 1), "sin B = 17 sin 72° / 20.", null, 0.05),
  num(S`$\angle A=24^\circ$, $a=7$, $b=15$. Combien de triangles sont possibles?`, 2, "h = 15 sin 24° ≈ 6.10.", FIG.amb24),
  num(S`$\angle A=24^\circ$, $a=7$, $b=15$. Trouve la valeur obtuse de ∠B, au dixième près.`, rd(180 - asin((15 * sin(24)) / 7), 1), "180° − sin⁻¹(15 sin 24° / 7).", FIG.amb24, 0.05),
  ms("Lesquelles donnent exactement un triangle? Choisis toutes les bonnes réponses.", ["A = 40°, B = 65°, c = 9", "A = 30°, a = 4, b = 8", "A = 30°, a = 6, b = 8", "A = 30°, a = 9, b = 8", "A = 120°, a = 5, b = 8"], [0, 1, 3], "ACA : un; a = h : un; h < a < b : deux; a ≥ b : un; obtus avec a < b : aucun."),
  num("A et B sont distants de 60 m sur une rive. Un arbre T sur la rive opposée donne ∠TAB = 58° et ∠TBA = 80°. Trouve AT, au dixième près.", rd((60 * sin(80)) / sin(42), 1), "∠T = 42°; AT est opposé à B.", FIG.river, 0.05),
  num("Trouve AC, au centième près.", rd((25 * sin(57)) / sin(75)), "∠C = 75°; AC est opposé à B.", asa(48, 57, 25, [[12.5, 0, "25"]]), 0.01),
  num(S`Trouve $b$, au centième près, si $a=16$.`, rd((16 * sin(71)) / sin(44)), "b = 16 sin 71° / sin 44°.", asa(44, 71, (16 * sin(65)) / sin(44), [[(16 * sin(71)) / sin(44) * cos(44) / 2 - 1, (16 * sin(71)) / sin(44) * sin(44) / 2, "b"]]), 0.01),
];
