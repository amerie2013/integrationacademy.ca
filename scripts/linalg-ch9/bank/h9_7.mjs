// 9.7 Least-Squares Problems — 20 hard questions
import { S, F, M, col, mc, num, tf, ms, lineQ, normalQ } from "./gen9.mjs";

export const TOPIC = "9.7 Least-Squares Problems";
export const Q = [
  normalQ([[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]], [3, 0, 1, 5], 0, F.mat([[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]], { label: "X (parabola)" })),
  normalQ([[1, -1, 1], [1, 0, 0], [1, 1, 1], [1, 2, 4]], [3, 0, 1, 5], 2),
  normalQ([[1, 0, 0], [1, 1, 1], [1, 2, 4], [1, 3, 9]], [2, 0, 1, 4], 1),
  lineQ([[-3, -2], [-1, 0], [0, 1], [2, 2], [4, 4]], 1),
  lineQ([[-3, -2], [-1, 0], [0, 1], [2, 2], [4, 4]], 0),
  lineQ([[1, 5], [2, 3], [3, 2], [4, 1]], 1),
  normalQ([[1, 0, 1], [1, 1, 0], [0, 1, 1], [1, 1, 1]], [1, 2, 3, 0], 1, F.mat([[1, 0, 1], [1, 1, 0], [0, 1, 1], [1, 1, 1]], { label: "A" })),
  num(S`Fit $y=\beta_0+\beta_1x$ to $(1,1),(2,2),(3,2)$: SSE? (3 decimals)`, 0.1667, "Line 2/3 + x/2: residuals (−1/6, 1/3, −1/6).", F.lsq([[1, 1], [2, 2], [3, 2]], 2 / 3, 0.5), 0.001),
  ms("For a least-squares line through (xᵢ, yᵢ) with residuals eᵢ:", ["Σ eᵢ = 0", "Σ xᵢeᵢ = 0", "Σ eᵢ² is minimal", "every eᵢ = 0"], [0, 1, 2], "Xᵀe = 0 gives the first two."),
  num(S`Least-squares line through $(0,0),(1,2),(2,1)$: the predicted value at $x=1$. (Decimal.)`, 1, "β₁ = 0.5, β₀ = 0.5: 0.5 + 0.5."),
  tf("Adding a data point exactly on the current least-squares line leaves the line unchanged.", true, "The normal equations stay satisfied."),
  num(S`Fit $y=\beta_1x$ (through the origin) to $(1,1),(2,3),(3,4)$. (3 decimals)`, 1.3571, "Σxy/Σx² = 19/14.", undefined, 0.001),
  mc("Fitting y = ae^{bx} by least squares on ln y works because:", "ln y = ln a + bx is linear in ln a and b", ["e^{bx} is linear", "least squares works for any model", "a and b are known"], "Transform to a linear model."),
  num(S`$A$ is $10\times3$ with independent columns. How many equations do the normal equations have?`, 3, "AᵀA is 3 × 3."),
  num(S`For $A=${M([[1, 0], [0, 1], [1, 1]])}$, $\vec b=(1,1,0)$: least-squares error. (3 decimals)`, 1.1547, "e = (⅔, ⅔, −⅔); |e| = 2/√3.", undefined, 0.001),
  tf("The least-squares error can be larger than |b|.", false, "x = 0 already gives error |b|."),
  num(S`Least-squares line through $(0,2),(1,1),(2,1),(3,0)$: slope. (Decimal.)`, -0.6, "XᵀX = [4 6; 6 14], Xᵀy = (4, 3): β₁ = (4·3 − 6·4)/20.", F.lsq([[0, 2], [1, 1], [2, 1], [3, 0]], 1.9, -0.6), 0.001),
  num(S`Same data: intercept. (Decimal.)`, 1.9, "(4 − 6(−0.6))/4.", undefined, 0.001),
  num(S`$\vec b$ has length 5 and the least-squares error is 3. Find $|A\hat x|$.`, 4, "Pythagoras: b = Ax̂ + e."),
  lineQ([[0, 3], [1, 1], [3, 0], [4, -2]], 1),
];
