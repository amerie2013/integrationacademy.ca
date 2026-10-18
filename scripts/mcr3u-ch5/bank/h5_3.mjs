// 5.3 Reciprocal Ratios and Trigonometric Identities — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, rightD, unitD, sin, cos, tan, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "5.3 Reciprocal Ratios and Trigonometric Identities";
export const Q = [
  mc(S`Simplify $\dfrac{\sec\theta-\cos\theta}{\sin\theta}$.`, S`$\tan\theta$`, [S`$\sin\theta$`, S`$\cos\theta$`, S`$\cot\theta$`], "(1 − cos² θ)/(cos θ sin θ) = sin θ / cos θ."),
  mc(S`Simplify $(1+\cot^2\theta)\sin^2\theta$.`, S`$1$`, [S`$\cos^2\theta$`, S`$\csc^2\theta$`, S`$\sin^2\theta$`], "csc² θ · sin² θ."),
  mc(S`Simplify $\dfrac{\csc\theta-\sin\theta}{\cot\theta}$.`, S`$\cos\theta$`, [S`$\sin\theta$`, S`$\tan\theta$`, S`$1$`], "(1 − sin² θ)/sin θ ÷ cos θ/sin θ."),
  mc(S`Simplify $\sin^4\theta-\cos^4\theta$.`, S`$\sin^2\theta-\cos^2\theta$`, [S`$1$`, S`$(\sin\theta-\cos\theta)^2$`, S`$2\sin^2\theta$`], "Difference of squares; the other factor is 1."),
  mc(S`Simplify $\dfrac{(1+\sin\theta)(1-\sin\theta)}{\cos^2\theta}$.`, S`$1$`, [S`$\sin^2\theta$`, S`$\tan^2\theta$`, S`$\sec\theta$`], "Numerator 1 − sin² θ = cos² θ."),
  num(S`$\tan\theta=2.4$ and θ is in Quadrant 3. Find $\csc\theta$ to 4 decimals.`, rd(-13 / 12, 4), "Point (−5, −12), r = 13.", null, 0.0001),
  num(S`$\sec\theta=3$ and θ is in Quadrant 4. Find $\tan\theta$ to 4 decimals.`, rd(-Math.sqrt(8), 4), "cos θ = ⅓, sin θ = −√8/3.", null, 0.0001),
  num(S`$\cot\theta=-0.75$ and $\cos\theta>0$. Find $\sin\theta$.`, -0.6, "Quadrant 4: point (4, −3)."),
  num(S`$\sin\theta+\cos\theta=1.2$. Find $\sin\theta\cos\theta$.`, 0.22, "Square: 1 + 2 sin θ cos θ = 1.44."),
  num(S`$\tan\theta+\cot\theta=4$. Find $\sin\theta\cos\theta$.`, 0.25, "tan θ + cot θ = 1/(sin θ cos θ)."),
  num(S`$\tan\theta=3$. Find $\sec^2\theta$.`, 10, "1 + 9."),
  num(S`Evaluate $\csc^2 60^\circ-\cot^2 60^\circ$.`, 1, "4/3 − 1/3."),
  tf(S`$(\sin\theta+\cos\theta)^2=1+2\sin\theta\cos\theta$ is an identity.`, true, "Expand and use sin² + cos² = 1."),
  tf(S`$\tan\theta+\cot\theta=\sec\theta\csc\theta$ is an identity.`, true, "(sin² + cos²)/(sin cos) = 1/(sin cos)."),
  tf(S`$\dfrac{\cos\theta}{1-\sin\theta}=\dfrac{1+\sin\theta}{\cos\theta}$ is an identity.`, true, "Cross-multiplying gives cos² θ = 1 − sin² θ."),
  ms(S`Which expressions equal $\sec\theta-\cos\theta$? Select all.`, [S`$\sin\theta\tan\theta$`, S`$\frac{\sin^2\theta}{\cos\theta}$`, S`$\cos\theta\tan^2\theta$`, S`$\sin\theta\cot\theta$`], [0, 1, 2], "sec θ − cos θ = sin² θ / cos θ."),
  num("Find sec θ · csc θ for the angle shown.", 2.5, "r = √5: 1/(sin θ cos θ) = 1/(2/5).", armD(-1, -2, "(−1, −2)")),
  num(S`Find $\csc^2\theta-\cot^2\theta$ for the triangle shown.`, 1, "10 − 9, as the identity predicts.", rightD(3, 1, ["θ", "", ""], [[1.5, 0, "3"], [3, 0.5, "1"]])),
  num("The arm meets the unit circle at x = 0.6428 (θ = 50°). Find tan θ to 4 decimals.", rd(tan(50), 4), "y = √(1 − x²); tan θ = y/x.", unitD([[50, "(0.6428, y)"]]), 0.0002),
  mc("The right triangle has hypotenuse 1 and acute angle θ. Which identity does the Pythagorean theorem give?", S`$\sin^2\theta+\cos^2\theta=1$`, [S`$\sin\theta+\cos\theta=1$`, S`$\tan^2\theta+1=\cos^2\theta$`, S`$\sin^2\theta-\cos^2\theta=1$`], "Legs cos θ and sin θ.",
    rightD(cos(35), sin(35), ["θ", "", ""], [[cos(35) / 2, 0, "cos θ"], [cos(35), sin(35) / 2, "sin θ"], [0.38, 0.33, "1"]])),
];
