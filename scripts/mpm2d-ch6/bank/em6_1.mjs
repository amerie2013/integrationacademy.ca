// 6.1 Congruence & Similar Triangles — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { pairDoc } from "./fig.mjs";

export const E = [
  mc(`Congruent triangles have…`, "equal corresponding sides and equal corresponding angles", ["equal angles only", "proportional sides only", "the same perimeter only"], "Same shape and same size."),
  mc(`Similar triangles have…`, "equal corresponding angles and proportional sides", ["equal sides", "equal areas", "one pair of equal angles"], "Same shape, possibly a different size."),
  num(`Find the scale factor from a triangle with sides $2, 3, 4$ to one with sides $6, 9, 12$.`, 3, "$\\frac62=3$."),
  tf(`Every pair of congruent triangles is also similar.`, true, "Congruent is similar with $k=1$."),
  tf(`Every pair of similar triangles is also congruent.`, false, "Similar triangles can have different sizes."),
  mc(`Which is NOT a condition for congruence?`, "AAA", ["SSS", "SAS", "ASA"], "Equal angles don't fix the size."),
  num(`$\\triangle ABC\\sim\\triangle DEF$ with scale factor $2$ and $AB=5$. Find $DE$.`, 10, "$2\\times5$."),
  num(`$\\triangle ABC\\sim\\triangle DEF$, $\\angle A=50^\\circ$ and $\\angle B=60^\\circ$. Find $\\angle F$ in degrees.`, 70, "$\\angle F=\\angle C=180^\\circ-110^\\circ$."),
  mc(`The AA condition for similar triangles means…`, "two pairs of corresponding angles are equal", ["two sides are equal", "all angles are acute", "two sides are proportional"], "AA = angle–angle."),
  num(`$\\triangle ABC\\sim\\triangle DEF$, $AB=4$, $DE=12$ and $BC=5$. Find $EF$.`, 15, "$k=3$."),
  tf(`Triangles with sides $3, 4, 5$ and $6, 8, 10$ are similar.`, true, "All ratios equal 2."),
  num(`$\\triangle ABC\\cong\\triangle PQR$ and $PQ=9$. Find $AB$.`, 9, "Congruent sides are equal."),
  mc(`Which triangle is similar to one with sides $5, 12, 13$?`, "$10, 24, 26$", ["$6, 13, 14$", "$5, 12, 14$", "$15, 24, 39$"], "Each side doubled."),
  fill(`Similar triangles with scale factor $1$ are ___.`, ["congruent"], "Same shape and size."),
  num(`Two similar triangles have scale factor $3$. The smaller has perimeter $12$ cm. Find the larger perimeter (cm).`, 36, "Perimeters scale by $k$."),
  mc(`$\\triangle ABC\\sim\\triangle XYZ$. Which angle corresponds to $\\angle B$?`, "$\\angle Y$", ["$\\angle X$", "$\\angle Z$", "none"], "Matching order."),
  num(`$DE\\parallel BC$ in $\\triangle ABC$ with $AD=2$, $AB=6$ and $DE=3$. Find $BC$.`, 9, "$k=3$."),
  tf(`Any two equilateral triangles are similar.`, true, "All angles are $60^\\circ$."),
  num(`Find the scale factor from a triangle with sides $10, 15, 20$ to one with sides $4, 6, 8$.`, 0.4, "$\\frac4{10}$."),
  mc(`The two triangles shown have the angles marked. What can you conclude?`, "they are similar (AA)", ["they are congruent (AAA)", "nothing", "they are similar (SSS∼)"], "Two pairs of equal angles.", pairDoc([[0, 0], [7, 0], [2.835, 5.331]], 1.3, { angles: [[0, "62°"], [1, "52°"]] }, { angles: [[0, "62°"], [1, "52°"]] })),
];

export const M = [
  num(`$\\triangle ABC\\sim\\triangle DEF$ with $AB=6$, $BC=8$, $AC=10$ and $DE=9$. Find $DF$.`, 15, "$k=1.5$."),
  num(`$\\triangle ABC\\sim\\triangle DEF$ with $AB=6$, $BC=8$, $AC=10$ and $DE=9$. Find $EF$.`, 12, "$1.5\\times8$."),
  mc(`Are triangles with sides $4, 6, 8$ and $6, 9, 12$ similar?`, "yes, with scale factor $1.5$", ["no", "yes, they are congruent", "yes, with scale factor $2$"], "All ratios $1.5$."),
  mc(`Are triangles with sides $5, 7, 9$ and $10, 14, 20$ similar?`, "no — the third ratio is different", ["yes, $k=2$", "yes, by AA", "only if they are right triangles"], "$\\frac{20}9\\ne2$."),
  num(`Two right triangles are similar. One has an acute angle of $34^\\circ$. Find the other acute angle (degrees) in the second triangle.`, 56, "$90^\\circ-34^\\circ$."),
  mc(`Two sides and the angle between them are equal in two triangles. Which condition proves congruence?`, "SAS", ["SSA", "AAA", "SSS∼"], "Included angle."),
  tf(`SSA always proves two triangles congruent.`, false, "Two different triangles can share SSA measurements."),
  num(`$DE\\parallel BC$, $AD=4$, $DB=8$ and $DE=5$. Find $BC$.`, 15, "$AB=12$, $k=3$."),
  num(`$DE\\parallel BC$, $AE=6$, $EC=3$ and $BC=12$. Find $DE$.`, 8, "$AC=9$: $DE=12\\times\\frac69$."),
  mc(`$AB=4$, $AC=6$, $\\angle A=50^\\circ$ and $DE=6$, $DF=9$, $\\angle D=50^\\circ$. The triangles are…`, "similar by SAS∼", ["congruent by SAS", "similar by AA", "not similar"], "Ratios $1.5$ and included angles equal."),
  num(`Two similar triangles have scale factor $0.75$ (large to small). A side of the larger is $20$. Find the matching side of the smaller.`, 15, "$0.75\\times20$."),
  ms(`Select all triangles similar to a $3$-$4$-$5$ triangle.`, ["$9, 12, 15$", "$6, 8, 10$", "$4, 5, 6$", "$1.5, 2, 2.5$", "$3, 4, 6$"], [0, 1, 3], "All three ratios must match."),
  num(`Two similar triangles have perimeters $18$ and $27$. A side of the smaller is $6$. Find the matching side of the larger.`, 9, "$k=1.5$."),
  tf(`If two pairs of angles of two triangles are equal, the third pair is equal too.`, true, "Each triangle's angles add to $180^\\circ$."),
  num(`Segments $AE$ and $BD$ cross at $C$ with $AB\\parallel DE$. $AC=5$, $CE=15$ and $DE=12$. Find $AB$.`, 4, "$\\triangle ABC\\sim\\triangle EDC$, $k=3$."),
  mc(`$\\triangle PQR\\sim\\triangle STU$. Which side corresponds to $PR$?`, "$SU$", ["$ST$", "$TU$", "$QR$"], "$P\\leftrightarrow S$, $R\\leftrightarrow U$."),
  num(`A right triangle has legs $6$ and $8$. A similar triangle has hypotenuse $25$. Find its shorter leg.`, 15, "Hypotenuse $10$, $k=2.5$."),
  fill(`AA, SSS∼ and SAS∼ prove that triangles are ___.`, ["similar"], "They are similarity conditions."),
  num(`Two isosceles triangles are similar. One has a vertex angle of $40^\\circ$. Find a base angle of the other (degrees).`, 70, "$\\frac{180-40}2$."),
  num(`The triangles shown are similar. Find $x$.`, 10, "$k=\\frac84=2$; $x=2\\times5$.", pairDoc([[0, 0], [4, 0], [3.214, 3.83]], 2, { sides: ["4", "", "5"] }, { sides: ["8", "", "x"] })),
];
