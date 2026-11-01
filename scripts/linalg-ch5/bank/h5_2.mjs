// 5.2 Spans and Solution Sets as Subspaces — 20 hard questions
import { S, F, mc, num, tf, ms, inSpanQ, coefQ, nullVecQ } from "./gen5.mjs";

export const TOPIC = "5.2 Spans and Solution Sets as Subspaces";
export const Q = [
  num(S`$\operatorname{Span}\{(1,2,0),(0,1,1)\}$ (figure) is the plane $2x_1+bx_2+x_3=0$. Find $b$.`, -1, "Its normal is (1, 2, 0) × (0, 1, 1) = (2, −1, 1): 2x₁ − x₂ + x₃ = 0.", F.plane([1, 2, 0], [0, 1, 1], { lu: "(1, 2, 0)", lv: "(0, 1, 1)", more: [[[2, -1, 1], "normal", "red"]] })),
  num(S`For which $h$ is $(h,1,-1)$ in $\operatorname{Span}\{(1,1,0),(1,0,1)\}$?`, 0, "a(1, 1, 0) + b(1, 0, 1) = (a + b, a, b): a = 1, b = −1, so h = 0."),
  inSpanQ([[1, 0, 1, 0], [0, 1, 0, 1], [1, 1, 0, 0]], [2, 3, 1, 2]),
  coefQ([[1, 0, 1], [1, 1, 0], [0, 1, 1]], [2, 4, 4], 2),
  tf(S`The set of $\vec b$ for which $A\vec x=\vec b$ is consistent is the span of the columns of $A$.`, true, "Ax = x₁a₁ + … + xₙaₙ, so the reachable b are exactly the combinations of the columns."),
  mc(S`If $\vec u,\vec v\in\mathbb R^3$ are nonzero and not parallel, $\operatorname{Span}\{\vec u,\vec v\}$ is:`, "a plane through the origin", ["a line through the origin", "all of ℝ³", "a plane that may miss the origin"], "Two independent directions through 0.", F.plane([1, 0, 1], [1, 2, 0], { lu: "u", lv: "v" })),
  nullVecQ([[1, 0, 0, 1], [1, 1, 0, 3], [0, 1, 1, 5]], 2),
  num(S`For which $k$ is $(1,1,k)$ in $\operatorname{Span}\{(1,0,2),(0,1,-1)\}$?`, 1, "a = 1 and b = 1 from the first two entries; the third is 2 − 1 = 1."),
  tf(S`$\operatorname{Span}\{(1,2,3),(4,5,6)\}$ contains $(7,8,9)$ (figure).`, true, "(7, 8, 9) = 2(4, 5, 6) − (1, 2, 3).", F.v3([[[1, 2, 3], "(1, 2, 3)"], [[4, 5, 6], "(4, 5, 6)"], [[7, 8, 9], "(7, 8, 9)", "green"]], { len: 9 })),
  ms(S`Which vectors lie in $\operatorname{Span}\{(1,1,0),(0,1,1)\}$?`, [S`$(1,2,1)$`, S`$(1,0,-1)$`, S`$(1,1,1)$`, S`$(2,3,1)$`], [0, 1, 3], "a(1, 1, 0) + b(0, 1, 1) = (a, a + b, b): the middle entry must be the sum of the outer ones."),
  tf(S`If $\operatorname{Span}\{\vec u,\vec v\}=\operatorname{Span}\{\vec u,\vec w\}$, then $\vec v=\vec w$.`, false, "E.g. u = (1, 0), v = (0, 1), w = (0, 2): both spans are ℝ²."),
  num(S`How many of $\vec e_1,\vec e_2,\vec e_3$ lie in $\operatorname{Span}\{(1,1,0),(0,0,1)\}$?`, 1, "The span is {(a, a, b)}: e₃ is in it; e₁ and e₂ are not (unequal first two entries)."),
  mc(S`$\operatorname{Span}\{(1,0),(1,1),(1,2)\}$ equals:`, S`$\mathbb R^2$`, [S`the line $y=x$`, S`a plane in $\mathbb R^3$`, S`the three points`], "(1, 0) and (1, 1) are already independent in ℝ²."),
  tf("Every subspace of ℝ³ is the span of at most three vectors.", true, "Every subspace of ℝ³ has a basis with at most 3 vectors."),
  num(S`For which $a$ is $\operatorname{Span}\{(1,a,1),(a,1,1)\}$ only a line?`, 1, "Parallel needs (a, 1, 1) = c(1, a, 1): c = 1 from the last entry, so a = 1."),
  coefQ([[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1]], [1, 3, 4, 2], 2),
  tf(S`The span of the columns of $A$ equals $\{A\vec x:\vec x\in\mathbb R^n\}$.`, true, "Ax = x₁a₁ + … + xₙaₙ runs over all combinations of the columns."),
  num(S`The plane $\operatorname{Span}\{(1,0,-1),(0,1,-1)\}$ (figure) contains $(4,-1,x)$. Find $x$.`, -3, "Its equation is x₁ + x₂ + x₃ = 0, so x = −(4 − 1) = −3.", F.plane([1, 0, -1], [0, 1, -1], { lu: "(1, 0, −1)", lv: "(0, 1, −1)", more: [[[4, -1, -3], "(4, −1, x)", "green"]], len: 4.5 })),
  mc(S`Which set has the same span as $\{(1,2),(3,4)\}$?`, S`$\{(1,0),(0,1)\}$`, [S`$\{(1,2)\}$`, S`$\{(2,4),(3,6)\}$`, S`$\{(0,0),(1,2)\}$`], "(1, 2) and (3, 4) are independent, so they span ℝ²."),
  inSpanQ([[2, 1, 0], [0, 1, 2]], [2, 3, 4], F.plane([2, 1, 0], [0, 1, 2], { lu: "(2, 1, 0)", lv: "(0, 1, 2)", more: [[[2, 3, 4], "(2, 3, 4)", "green"]], len: 4.5 })),
];
