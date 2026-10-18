// 6.1 Congruence & Similar Triangles — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { sceneDoc } from "./fig.mjs";

export const TOPIC = "6.1 Congruence & Similar Triangles";
export const Q = [
  num(`$DE\\parallel BC$ in $\\triangle ABC$, $AD=x$, $DB=10$, $DE=3$ and $BC=8$. Find $x$.`, 6, "$\\frac{x}{x+10}=\\frac38\\Rightarrow8x=3x+30$."),
  num(`A triangle has sides $5$, $6$ and $9$. A similar triangle has longest side $12$. Find its shortest side to two decimal places.`, 6.67, "$k=\\frac{12}9$; $5\\times\\frac43$.", null, 0.01),
  num(`Two similar triangles have perimeters $24$ and $40$. A side of the larger is $15$. Find the matching side of the smaller.`, 9, "$k=\\frac{24}{40}=0.6$."),
  mc(`$AE$ and $BD$ cross at $C$ with $AB\\parallel DE$. Why is $\\triangle ABC\\sim\\triangle EDC$?`, "vertical angles at $C$ and equal alternate angles (AA)", ["SSS∼", "they are congruent", "SAS"], "Two pairs of equal angles."),
  num(`In right $\\triangle ABC$ ($\\angle C=90^\\circ$), the altitude $CD$ meets the hypotenuse at $D$ with $AD=4$ and $DB=9$. Find $CD$.`, 6, "$\\triangle ADC\\sim\\triangle CDB$: $\\frac{CD}{4}=\\frac9{CD}$, $CD^2=36$."),
  num(`In the same triangle ($AD=4$, $DB=9$), find $AC$ to two decimal places.`, 7.21, "$\\triangle ADC\\sim\\triangle ACB$: $AC^2=AD\\cdot AB=4\\times13$.", null, 0.01),
  tf(`All right triangles that have a $30^\\circ$ angle are similar.`, true, "AA: $90^\\circ$ and $30^\\circ$."),
  num(`A triangle has sides $8$, $10$ and $12$. A similar triangle has perimeter $45$. Find its longest side.`, 18, "$k=\\frac{45}{30}=1.5$."),
  ms(`Select all sets of information that prove $\\triangle ABC\\cong\\triangle DEF$.`, ["$AB=DE$, $BC=EF$, $AC=DF$", "$\\angle A=\\angle D$, $\\angle B=\\angle E$, $AB=DE$", "$\\angle A=\\angle D$, $\\angle B=\\angle E$, $\\angle C=\\angle F$", "$AB=DE$, $BC=EF$, $\\angle A=\\angle D$", "$AB=DE$, $\\angle B=\\angle E$, $BC=EF$"], [0, 1, 4], "SSS, ASA and SAS work; AAA and SSA do not."),
  num(`$DE\\parallel BC$, $AD=3$, $DB=x$, $DE=4$ and $BC=10$. Find $x$.`, 4.5, "$\\frac{3}{3+x}=\\frac4{10}\\Rightarrow30=12+4x$."),
  num(`Triangles with sides $4, 6, x$ and $6, 9, 12$ are similar. Find $x$.`, 8, "$k=1.5$: $\\frac{12}{1.5}$."),
  mc(`The scale factor from a small triangle to a similar large one is $\\frac32$. What is the ratio of their perimeters, large : small?`, "$3:2$", ["$9:4$", "$2:3$", "$3:1$"], "Perimeters scale by $k$."),
  num(`In trapezoid $ABCD$, $AB\\parallel CD$ and the diagonals meet at $E$. $AB=6$, $CD=15$ and $AE=4$. Find $EC$.`, 10, "$\\triangle ABE\\sim\\triangle CDE$, $k=2.5$."),
  tf(`Two isosceles triangles with equal vertex angles are similar.`, true, "Their base angles are equal too."),
  num(`On a $1:200$ plan, a triangular garden has a side of $3.5$ cm. How long is that side in metres?`, 7, "$3.5\\times200=700$ cm."),
  num(`In $\\triangle ABC$, $DE\\parallel BC$ with $AD:DB=2:3$ and $BC=20$. Find $DE$.`, 8, "$\\frac{AD}{AB}=\\frac25$."),
  mc(`In $\\triangle ABC$ and $\\triangle PQR$, $\\angle A=\\angle Q$ and $\\angle B=\\angle R$. Which statement is correct?`, "$\\triangle ABC\\sim\\triangle QRP$", ["$\\triangle ABC\\sim\\triangle PQR$", "$\\triangle ABC\\sim\\triangle RQP$", "$\\triangle ABC\\cong\\triangle QRP$"], "Match $A\\to Q$, $B\\to R$, $C\\to P$."),
  num(`$\\triangle ABC\\sim\\triangle DEF$ with $\\angle A=2x$, $\\angle B=x+30$ and $\\angle C=x$ (degrees). Find $\\angle E$.`, 67.5, "$4x+30=180$, $x=37.5$; $\\angle E=\\angle B$."),
  tf(`SSS∼ needs only two of the three side ratios to be equal.`, false, "All three ratios must be equal (or two ratios and the included angle: SAS∼)."),
  num(`$AB\\parallel DE$ and the segments cross at $C$, as shown. $AC=6$, $CE=9$ and $AB=8$. Find $DE$.`, 12, "$k=\\frac96=1.5$.", sceneDoc([{ seg: [[0, 3], [3, 3]], color: "blue" }, { seg: [[0, 3], [7.5, -4.5]], color: "blue" }, { seg: [[3, 3], [-1.5, -4.5]], color: "blue" }, { seg: [[-1.5, -4.5], [7.5, -4.5]], color: "green" }, { text: "A", at: [-0.5, 3.5], bold: true }, { text: "B", at: [3.5, 3.5], bold: true }, { text: "C", at: [2.6, 0.9], bold: true }, { text: "D", at: [-2, -5], bold: true }, { text: "E", at: [8, -5], bold: true }, { text: "not to scale", at: [3, -6], size: 11, color: "gray" }], 320)),
];
