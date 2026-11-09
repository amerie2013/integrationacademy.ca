// 5.2 Problems with Two Right Triangles — 20 easy + 20 medium (values computed)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { n2, sin, cos, tan, atan, triD } from "./trig.mjs";
const S = String.raw;
const same = (h, a1, a2) => h / tan(Math.min(a1, a2)) - h / tan(Math.max(a1, a2));
const opp = (h, a1, a2) => h / tan(a1) + h / tan(a2);
const walk = (d, a1, a2) => d / (1 / tan(a1) - 1 / tan(a2));
const fig2 = (h, a1, a2) => triD([[0, h], [0, 0], [h / tan(Math.min(a1, a2)), 0]], [], { open: true, extra: [{ pts: [[0, h], [h / tan(a1), 0]], color: "violet" }, { pts: [[0, h], [h / tan(a2), 0]], color: "violet" }] });

export const E = [
  n2(S`From a $40$ m tower, a car is at $30^\circ$ depression. How far is it from the base?`, 40 / tan(30), "40 / tan 30°."),
  n2(S`From a $50$ m cliff, two boats in line are at $45^\circ$ and $30^\circ$ depression. Distance apart?`, same(50, 45, 30), "Subtract."),
  n2(S`A $30$ m pole is seen from opposite sides at $45^\circ$ and $60^\circ$. Distance between observers?`, opp(30, 45, 60), "Add."),
  n2(S`From $20$ m away, a sign's top is at $35^\circ$ and bottom at $20^\circ$ elevation. Height of the sign?`, 20 * tan(35) - 20 * tan(20), "Difference."),
  n2(S`From $25$ m away, a building's top is at $40^\circ$ elevation and its base at $10^\circ$ depression (eye level above ground). Building height?`, 25 * tan(40) + 25 * tan(10), "Add the two parts."),
  mc("Two objects on the same side of a tower: to find the distance between them you …", "subtract the distances from the tower", ["add the distances", "multiply them", "average them"], "Both measured from the base."),
  mc("Two observers on opposite sides of a tower: the distance between them is the …", "sum of their distances", ["difference of their distances", "product", "height"], "Add."),
  tf("The angle of depression from A to B equals the angle of elevation from B to A.", true, "Alternate angles."),
  tf("In a two-triangle problem, the shared side is always the hypotenuse.", false, "Often a leg such as a height."),
  fill("Two triangles that share a side: solve first the triangle with enough ____ (one word).", ["information", "data"], "One side + one angle."),
  n2(S`From a $60$ m building, a car is at $25^\circ$ depression. How far away is it horizontally?`, 60 / tan(25), "60 / tan 25°."),
  n2(S`A $70$ m cliff: two buoys at $50^\circ$ and $35^\circ$ depression, same side. Distance apart?`, same(70, 50, 35), "Subtract."),
  n2(S`A $45$ m tower: observers on opposite sides at $30^\circ$ and $40^\circ$. Distance apart?`, opp(45, 30, 40), "Add."),
  mc("The diagram shows two lines of sight from a cliff. Which boat is farther?", "the one at the smaller angle of depression", ["the one at the larger angle", "they are equal", "cannot tell"], "Smaller angle, longer distance.", fig2(50, 50, 25)),
  n2("For the cliff shown (height 50 m, depressions 50° and 25°), find the distance between the boats.", same(50, 50, 25), "Subtract.", fig2(50, 50, 25)),
  n2(S`Walking $20$ m toward a tree changes the elevation from $30^\circ$ to $45^\circ$. Find the tree's height.`, walk(20, 30, 45), "Two equations."),
  n2(S`$AB=10$, $\angle A=30^\circ$, $BD\perp AC$. Find $BD$.`, 10 * sin(30), "10 sin 30°."),
  n2(S`$AB=10$, $\angle A=30^\circ$, $BD\perp AC$. Find $AD$.`, 10 * cos(30), "10 cos 30°."),
  num(S`How many right triangles appear in a "walking toward a tower" diagram?`, 2, "Near and far."),
  n2(S`From $15$ m away, the elevation to a roof is $50^\circ$. Find the roof height.`, 15 * tan(50), "15 tan 50°."),
];

export const M = [
  n2(S`From a $120$ m cliff, boats in line at $40^\circ$ and $18^\circ$ depression. Distance apart?`, same(120, 40, 18), "Subtract."),
  n2(S`A $80$ m tower: opposite sides at $28^\circ$ and $52^\circ$. Distance apart?`, opp(80, 28, 52), "Add."),
  n2(S`Walking $50$ m toward a cliff changes the elevation from $24^\circ$ to $38^\circ$. Find the height.`, walk(50, 24, 38), "Subtract equations."),
  n2(S`From the top of a $28$ m building, the base of a taller building is at $42^\circ$ depression and its top at $30^\circ$ elevation. Height of the taller building?`, 28 + (28 / tan(42)) * tan(30), "Gap then rise."),
  n2(S`From a $15$ m window, the base of a building across the street is at $28^\circ$ depression. How wide is the street?`, 15 / tan(28), "15 / tan 28°."),
  n2(S`$AB=18$, $\angle A=35^\circ$, $BD\perp AC$, $\angle C=60^\circ$. Find $DC$.`, (18 * sin(35)) / tan(60), "BD / tan 60°."),
  n2(S`$AB=18$, $\angle A=35^\circ$, $BD\perp AC$, $\angle C=60^\circ$. Find $AC$.`, 18 * cos(35) + (18 * sin(35)) / tan(60), "AD + DC."),
  n2(S`A plane at $3000$ m sees two ships on the same side at $14^\circ$ and $22^\circ$. Distance apart?`, same(3000, 14, 22), "Subtract."),
  n2(S`A $10$ m flagpole stands on a building. From $50$ m away, the pole's top is at $35^\circ$ elevation. Building height?`, 50 * tan(35) - 10, "Total minus pole."),
  n2(S`A helicopter hovers above a road between towns $5$ km apart; depressions $30^\circ$ and $45^\circ$. Height?`, ((5 * tan(45)) / (tan(30) + tan(45))) * tan(30), "x tan 30° = (5 − x) tan 45°."),
  ms(S`Select the correct equations for walking $d$ toward a height $h$ with angles $\alpha<\beta$.`, [S`$x=\frac h{\tan\beta}$`, S`$x+d=\frac h{\tan\alpha}$`, S`$x=h\tan\beta$`, S`$x-d=\frac h{\tan\alpha}$`], [0, 1], "The farther point has the smaller angle."),
  tf(S`If the angles of depression to two boats are equal, the boats are the same distance from the cliff.`, true, "Same triangle."),
  mc("The diagram shows a building across a street. Which is the street width w?", S`$w=\frac{20}{\tan30^\circ}$`, [S`$w=20\tan30^\circ$`, S`$w=20\sin30^\circ$`, S`$w=\frac{\tan30^\circ}{20}$`], "Opposite 20 over tan.", triD([[0, 0], [0, 20], [20 / tan(30), 0]], ["", "20 m", ""], {})),
  n2("For the diagram (window height 20 m, depression 30° to the opposite base), find w.", 20 / tan(30), "20 / tan 30°.", triD([[0, 0], [0, 20], [20 / tan(30), 0]], ["", "20 m", ""], {})),
  n2(S`Two ladders from the same foot reach $6$ m and $4$ m up a wall; the first at $65^\circ$. Find the second ladder's angle.`, atan(4 / (6 / tan(65))), "Same distance from the wall."),
  n2(S`A $35$ m tree; from points on opposite sides the angles are $32^\circ$ and $47^\circ$. Distance between points?`, opp(35, 32, 47), "Add."),
  n2(S`A lighthouse $55$ m high: a boat's depression changes from $12^\circ$ to $20^\circ$. How far did it move?`, same(55, 12, 20), "Difference."),
  fill(S`For a "walking toward" problem, the height is $h=\frac{d}{\frac1{\tan\alpha}-\frac1{\tan\square}}$. The missing letter is ____.`, ["β", "beta", "b"], "The larger angle."),
  n2(S`From a $22$ m tower, a car's depression is $16^\circ$ and a bike's is $33^\circ$ (same side). Distance between them?`, same(22, 16, 33), "Subtract."),
  n2(S`A balloon at $400$ m is seen from opposite sides at $65^\circ$ and $40^\circ$. Distance between observers?`, opp(400, 65, 40), "Add."),
];
