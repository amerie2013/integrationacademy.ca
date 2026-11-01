// 4.1 Linear Combinations and Span — 20 hard questions
import { S, F, mc, num, tf, ms, inSpanQ, coefQ } from "./gen4.mjs";

export const TOPIC = "4.1 Linear Combinations and Span";
export const Q = [
  inSpanQ([[1, 1, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]], [3, 2, 1, 2]),
  inSpanQ([[1, 2, -1], [0, 1, 1], [1, 3, 0]], [2, 5, 1], F.plane([1, 2, -1], [0, 1, 1], { lu: "(1, 2, −1)", lv: "(0, 1, 1)", more: [[[2, 5, 1], "(2, 5, 1)", "green"]], len: 4.5 })),
  coefQ([[1, 0, 1], [1, 1, 0], [0, 1, 2]], [2, 4, 7], 0),
  coefQ([[2, 1, 0], [1, 0, 1], [0, 3, 1]], [3, 7, 4], 2),
  num(S`For which $h$ is $(h,4,7)\in\operatorname{Span}\{(1,1,2),(1,2,3)\}$?`, 3, "Entries 2 and 3: c₁ + 2c₂ = 4 and 2c₁ + 3c₂ = 7 give c₂ = 1, c₁ = 2. Entry 1 must then be h = c₁ + c₂ = 3. Check: 2(1, 1, 2) + (1, 2, 3) = (3, 4, 7) ✓."),
  num(S`For which $k$ is $(1,2,k)$ in $\operatorname{Span}\{(1,1,1),(1,3,5)\}$?`, 3, "c₁ + c₂ = 1, c₁ + 3c₂ = 2: c₂ = ½, c₁ = ½; third entry ½ + 5·½ = 3."),
  tf(S`$\operatorname{Span}\{(1,2),(2,1)\}=\operatorname{Span}\{(1,-1),(3,3)\}$.`, true, "Both pairs are non-parallel, so both spans are all of ℝ²."),
  tf(S`$\operatorname{Span}\{(1,0,1),(0,1,0)\}=\operatorname{Span}\{(1,1,1),(1,-1,1)\}$.`, true, "(1, 1, 1) = (1, 0, 1) + (0, 1, 0) and (1, −1, 1) = (1, 0, 1) − (0, 1, 0), and the second pair is not parallel: both are the plane x₁ = x₃.", F.plane([1, 0, 1], [0, 1, 0], { lu: "(1, 0, 1)", lv: "(0, 1, 0)", more: [[[1, 1, 1], "(1, 1, 1)", "green"], [[1, -1, 1], "(1, −1, 1)", "amber"]] })),
  ms(S`Which vectors lie in $\operatorname{Span}\{(1,0,2),(0,1,-1)\}$?`, [S`$(1,1,1)$`, S`$(2,-3,7)$`, S`$(0,0,1)$`, S`$(3,1,4)$`, S`$(0,0,0)$`], [0, 1, 3, 4], "The span is {(a, b, 2a − b)}: check the third entry equals 2·(first) − (second). (0, 0, 1) fails."),
  num(S`$\operatorname{Span}\{(1,2,0),(0,1,3)\}$ has equation $ax_1+bx_2+x_3=0$. Find $a$.`, 6, "Plug in (0, 1, 3): b + 3 = 0, b = −3. Plug in (1, 2, 0): a − 6 = 0, a = 6."),
  tf(S`If $\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u\}$ then $\vec v$ is a multiple of $\vec u$.`, true, "v lies in Span{u}, the set of multiples of u."),
  mc(S`$\vec u=(1,1,0)$, $\vec v=(0,1,1)$. Which describes $\operatorname{Span}\{\vec u,\vec v,\vec u-\vec v\}$?`, "the plane spanned by u and v", ["all of ℝ³", "a line", "three planes"], "u − v is a combination of u and v, so it adds nothing.", F.plane([1, 1, 0], [0, 1, 1], { lu: "u", lv: "v", more: [[[1, 0, -1], "u − v", "green"]] })),
  num(S`$\vec b=(4,1)$ is written as $c_1(1,1)+c_2(1,-1)+c_3(2,0)$. If $c_3=1$, find $c_1$.`, 1.5, "Then c₁(1, 1) + c₂(1, −1) = (2, 1): c₁ + c₂ = 2, c₁ − c₂ = 1, so c₁ = 1.5.", undefined, 0.001),
  tf(S`$\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}$ is closed under addition.`, true, "Adding two combinations adds the weights: another combination."),
  tf(S`The set $\{c(1,2): c\ge0\}$ is a span.`, false, "It is a half-line; a span contains −1·(1, 2) as well.", F.v2([[[1, 2], "(1, 2)", "blue"]], { xmin: -3, xmax: 3, ymin: -3, ymax: 4 }, { segs: [{ pts: [[0, 0], [2, 4]], color: "violet", w: 3 }] })),
  num(S`For which $t$ is $(1,t,t^2)$ in $\operatorname{Span}\{(1,0,0),(0,1,1)\}$ with $t\ne0$?`, 1, "The span is {(a, b, b)}: need t = t², so t = 0 or 1."),
  coefQ([[1, 1, 1, 1], [1, -1, 0, 0], [0, 0, 1, -1]], [3, 1, 4, 0], 0),
  mc(S`$\vec b$ is in $\operatorname{Span}\{\vec v_1,\vec v_2\}$ and the reduced system has a free variable. Then:`, S`$\vec b$ can be written in infinitely many ways`, [S`$\vec b$ is not in the span`, "the weights are unique", S`$\vec b=\vec 0$`], "Consistent with a free variable: infinitely many weight pairs."),
  num(S`$\vec u+\vec v=(3,1)$ and $\vec u-\vec v=(1,5)$. Find the second entry of $\vec v$.`, -2, "Subtract: 2v = (2, −4), so v = (1, −2)."),
  tf(S`For any $\vec u,\vec v\in\mathbb R^3$, $\operatorname{Span}\{\vec u,\vec v\}$ is a plane.`, false, "If u and v are parallel (or 0) the span is a line or {0}."),
];
