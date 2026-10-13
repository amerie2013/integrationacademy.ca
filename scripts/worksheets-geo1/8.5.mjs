import { fig, dilationPair } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "8.5",
  title: "Dilations: Perimeter and Area",
  intro: "A dilation with scale factor $k$ centered at the origin sends point $(x,y)$ to $(kx,ky)$ — every length in the figure is multiplied by $|k|$. Since perimeter is a sum of lengths, it scales the same way: $P'=|k|\\cdot P$. Area, however, is a <i>product</i> of two lengths (like base times height), so it scales by $k^2$: $A'=k^2\\cdot A$. This squared relationship also works in reverse — if you know how areas compare, take a square root to find how sides or perimeters compare, and vice versa. This worksheet includes coordinate dilations and real-world scale-model problems that combine both relationships.",
  examples: [
    ["Example 1: Perimeter scales by $k$",
      "A figure has perimeter $20$. It is dilated with scale factor $k=3$. Find the image's perimeter.",
      fig(dilationPair(), "Every length in the image is $k$ times the corresponding length in the original.") +
      "Identify the relationship: perimeter is a sum of side lengths, and every length scales by the factor $k$ under a dilation, so $P'=k\\cdot P$.<br>" +
      "Compute: $P'=3(20)=60$.<br>" +
      "<b>Answer:</b> $60$."],

    ["Example 2: Area scales by $k^2$",
      "A figure has area $12$. It is dilated with scale factor $k=2$. Find the image's area.",
      "Identify the relationship: area is a product of two lengths (like base $\\times$ height), and each of those lengths scales by $k$, so the area scales by $k^2$: $A'=k^2\\cdot A$.<br>" +
      "Compute: $A'=2^2(12)=4(12)=48$.<br>" +
      "<b>Answer:</b> $48$."],

    ["Example 3: Find $k$ from a perimeter change",
      "A perimeter maps from $18$ to $45$ under a dilation. Find $k$.",
      "Identify: since perimeter scales linearly ($P'=k\\cdot P$), the scale factor is the ratio of the new perimeter to the old one.<br>" +
      "Compute: $k=\\dfrac{P'}{P}=\\dfrac{45}{18}=\\dfrac{5}{2}$.<br>" +
      "<b>Answer:</b> $k=\\dfrac{5}{2}$ (or $2.5$)."],

    ["Example 4: Area with a fractional scale factor",
      "A figure has area $40$. It is dilated with $k=\\dfrac{1}{2}$. Find the image's area.",
      "Identify the rule: area scales by $k^2$, regardless of whether $k$ is a whole number or a fraction.<br>" +
      "Compute: $A'=\\left(\\dfrac{1}{2}\\right)^2(40)=\\dfrac{1}{4}(40)=10$.<br>" +
      "<b>Answer:</b> $10$. <i>Note a fractional $k<1$ shrinks the figure, so the smaller area makes sense.</i>"],

    ["Example 5: Side ratio to area ratio",
      "Two similar figures have corresponding sides $6$ and $9$. Find the ratio of their areas (smaller to larger).",
      "Identify the scale factor from the given sides: $k=\\dfrac{9}{6}=\\dfrac{3}{2}$.<br>" +
      "Compute the area ratio by squaring the scale factor: $k^2=\\left(\\dfrac{3}{2}\\right)^2=\\dfrac{9}{4}$.<br>" +
      "<b>Answer:</b> $\\dfrac{9}{4}$ (or $9:4$)."],

    ["Example 6: Area ratio to perimeter ratio",
      "Two similar figures have areas in ratio $4:1$. Find the ratio of their perimeters.",
      "Perimeter (and side) ratio is the square root of the area ratio:<br>" +
      "$\\sqrt{4}:\\sqrt{1}=2:1$.<br>" +
      "<b>Answer:</b> $2:1$."],

    ["Example 7: Reduction (shrinking)",
      "A figure has perimeter $50$. It is dilated with $k=0.4$. Find the image's perimeter.",
      "Identify: a scale factor less than $1$ shrinks the figure, but the rule $P'=k\\cdot P$ still applies directly.<br>" +
      "Compute: $P'=0.4(50)=20$.<br>" +
      "<b>Answer:</b> $20$, which is smaller than the original, as expected since $k<1$."],

    ["Example 8: Square — check both rules at once",
      "A square has side $5$. It is dilated with $k=3$. Find the image's perimeter and area two ways each.",
      "<b>Perimeter:</b> original $=4(5)=20$; using the scale rule, image $=3(20)=60$. Directly: new side $=3(5)=15$, so image perimeter $=4(15)=60$. ✓<br>" +
      "<b>Area:</b> original $=5^2=25$; using the scale rule, image $=3^2(25)=225$. Directly: new side $=15$, so image area $=15^2=225$. ✓"],

    ["Example 9: Find the original area",
      "After a dilation with $k=3$, a figure's image has area $72$. Find the original area.",
      "Identify: this reverses the usual direction — solve $A'=k^2A$ for the original area $A$ by dividing instead of multiplying.<br>" +
      "Compute: $A=\\dfrac{A'}{k^2}=\\dfrac{72}{3^2}=\\dfrac{72}{9}=8$.<br>" +
      "<b>Answer:</b> $8$."],

    ["Example 10: Coordinate dilation — verify both rules",
      "A triangle has vertices $(0,0)$, $(4,0)$, $(0,3)$. Dilate it from the origin with $k=3$. Find the new vertices, and verify that the perimeter scaled by $k$ and the area scaled by $k^2$.",
      "New vertices: multiply each coordinate by $3$: $(0,0)$, $(12,0)$, $(0,9)$.<br>" +
      "<b>Original:</b> legs $4$, $3$; hypotenuse $\\sqrt{16+9}=5$. Perimeter $=4+3+5=12$. Area $=\\dfrac{1}{2}(4)(3)=6$.<br>" +
      "<b>Image:</b> legs $12$, $9$; hypotenuse $\\sqrt{144+81}=15$. Perimeter $=12+9+15=36$. Area $=\\dfrac{1}{2}(12)(9)=54$.<br>" +
      "<b>Check:</b> $36=3(12)$ ✓ (perimeter $\\times k$); $54=9(6)=3^2(6)$ ✓ (area $\\times k^2$)."],

    ["Example 11: Application — scale model of a house",
      "An architect's model house has a floor perimeter of $8$ ft and a floor area of $3$ ft$^2$. The real house is built at scale factor $50$ (every model length corresponds to $50$ times that length in real life). Find the real house's floor perimeter and floor area.",
      "Perimeter: $P'=50(8)=400$ ft.<br>" +
      "Area: $A'=50^2(3)=2500(3)=7500$ ft$^2$.<br>" +
      "<b>Answer:</b> real perimeter $=400$ ft; real area $=7500$ ft$^2$."],
  ],
  questions: [
    ["Problem 1: Perimeter", "Perimeter $14$; $k=4$. Image perimeter?", "$56$"],
    ["Problem 2: Area", "Area $10$; $k=3$. Image area?", "$90$"],
    ["Problem 3: Scale factor", "Perimeter $24$ maps to $8$. Find $k$.", "$\\dfrac{1}{3}$"],
    ["Problem 4: Area", "Area $50$; $k=\\dfrac{1}{5}$. Image area?", "$2$"],
    ["Problem 5: Area ratio", "Sides in ratio $2:5$. Area ratio?", "$4:25$"],
    ["Problem 6: Perimeter ratio", "Areas in ratio $9:1$. Perimeter ratio?", "$3:1$"],
    ["Problem 7: Perimeter", "Perimeter $36$; $k=\\dfrac{2}{3}$. Image?", "$24$"],
    ["Problem 8: Area", "Area $18$; $k=2$. Image?", "$72$"],
    ["Problem 9: Find $k$", "Areas $16$ and $64$ (original to image). Find $k$.", "$2$"],
    ["Problem 10: Side", "Side $8$; $k=1.5$. Image side?", "$12$"],
    ["Problem 11: Original area", "Image area $45$ after $k=3$. Find the original area.", "$5$"],
    ["Problem 12: Perimeter", "Perimeter $100$; $k=0.25$. Image?", "$25$"],
    ["Problem 13: Area ratio", "Corresponding sides $4$ and $6$. Area ratio (first to second)?", "$4:9$"],
    ["Problem 14: Challenge", "A triangle with vertices $(0,0)$, $(6,0)$, $(0,8)$ is dilated from the origin by $k=1.5$. Find the perimeter and area of the image.", "Perimeter $=36$; area $=54$"],
    ["Problem 15: Challenge", "A poster's area increases from $24$ in$^2$ to $96$ in$^2$ under a dilation. If the original perimeter was $20$ in, find the scale factor and the new perimeter.", "$k=2$; new perimeter $=40$ in"],
  ],
};
