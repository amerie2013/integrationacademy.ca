const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "4.1",
  title: "The Six Trigonometric Functions & Right Triangles",
  intro: "The right-triangle definitions of the six trig functions, the special triangles, and solving right triangles.",
  lesson: [
    ["The six ratios", R`In a right triangle: $\sin=\dfrac{\text{opp}}{\text{hyp}}$, $\cos=\dfrac{\text{adj}}{\text{hyp}}$, $\tan=\dfrac{\text{opp}}{\text{adj}}$ (SOH-CAH-TOA). Reciprocals: $\csc=\dfrac1{\sin}$, $\sec=\dfrac1{\cos}$, $\cot=\dfrac1{\tan}$.`],
    ["Special triangles", R`$45$–$45$–$90$: sides $1,1,\sqrt2$. $30$–$60$–$90$: sides $1,\sqrt3,2$. These give the exact values for $30^\circ,45^\circ,60^\circ$.`],
    ["Solving right triangles", R`Use a ratio to find a missing side and an inverse function to find a missing angle; the Pythagorean theorem $a^2+b^2=c^2$ relates the sides.`],
  ],
  examples: [
    ["Example 1: Basic ratio", R`A right triangle has opposite $3$ and hypotenuse $5$. Find $\sin$.`, R`$\sin=\dfrac{3}{5}$.`],
    ["Example 2: From a 3-4-5", R`In a $3$-$4$-$5$ triangle, find $\cos$ and $\tan$ of the angle adjacent to the side $4$.`, R`$\cos=\dfrac45$, $\tan=\dfrac34$.`],
    ["Example 3: Special angle", R`Evaluate $\sin 30^\circ$ and $\cos 60^\circ$.`, R`Both equal $\dfrac12$.`],
    ["Example 4: Tangent of 45°", R`Evaluate $\tan 45^\circ$.`, R`$\dfrac{1}{1}=1$.`],
    ["Example 5: Use an identity", R`If $\sin\theta=\dfrac35$ ($\theta$ acute), find $\cos\theta$.`, R`Adjacent $=\sqrt{5^2-3^2}=4$, so $\cos\theta=\dfrac45$.`],
  ],
  questions: [
    ["Problem 1", R`$\sin=\dfrac{\text{opp}}{?}$`, R`hyp`],
    ["Problem 2", R`Evaluate $\cos 30^\circ$.`, R`$\dfrac{\sqrt3}{2}$`],
    ["Problem 3", R`Evaluate $\tan 60^\circ$.`, R`$\sqrt3$`],
    ["Problem 4", R`Evaluate $\sin 45^\circ$.`, R`$\dfrac{\sqrt2}{2}$`],
    ["Problem 5", R`$\csc=\dfrac1{?}$`, R`$\sin$`],
    ["Problem 6", R`In a $3$-$4$-$5$ triangle, $\sin$ of the angle opposite $3$?`, R`$\dfrac35$`],
    ["Problem 7", R`Evaluate $\sec 60^\circ$.`, R`$2$`],
    ["Problem 8", R`Evaluate $\cot 45^\circ$.`, R`$1$`],
  ],
};
