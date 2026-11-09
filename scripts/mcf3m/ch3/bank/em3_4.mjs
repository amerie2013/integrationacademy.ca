// 3.4 Solving Problems with Quadratic Equations — 20 easy + 20 medium
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc, areaBox } from "../../figs.mjs";
const S = String.raw;

export const E = [
  num(S`A rectangle is $w$ by $(w+2)$ with area $48$. Enter $w$.`, 6, "w² + 2w − 48 = (w + 8)(w − 6)."),
  num(S`A rectangle is $w$ by $(w+5)$ with area $66$. Enter $w$.`, 6, "w² + 5w − 66 = (w + 11)(w − 6)."),
  num(S`A square's area is $81$ m². Enter its side (m).`, 9, "s² = 81, s > 0."),
  num(S`Two consecutive integers have product $72$. Enter the positive smaller one.`, 8, "n(n + 1) = 72."),
  num(S`The square of a number equals $4$ times the number. Enter the non-zero number.`, 4, "n² = 4n ⇒ n(n − 4) = 0."),
  num(S`$h(t)=-5t^2+15t$. Enter the time (s) it lands.`, 3, "−5t(t − 3)."),
  num(S`$h(t)=-5t^2+10t+15$. Enter the time (s) it lands.`, 3, "t² − 2t − 3 = (t − 3)(t + 1)."),
  num(S`$h(t)=-5t^2+20t$. Enter the earlier time when $h=15$.`, 1, "t² − 4t + 3 = 0."),
  mc(S`A width $w$ satisfies $(w-4)(w+9)=0$. Which value is the width?`, S`$4$`, [S`$-9$`, "both", "neither"], "A width is positive."),
  mc(S`A time $t$ satisfies $(t-5)(t+2)=0$. Which time is valid?`, S`$5$`, [S`$-2$`, "both", "neither"], "Time after the start."),
  tf("When a quadratic model gives a negative length, that root is rejected.", true, "Lengths are positive."),
  tf("Every word problem leading to a quadratic has two valid answers.", false, "Often one root is rejected."),
  fill("A root that makes no sense in the situation is called ____ (one word, starts with 'in').", ["inadmissible"], "Inadmissible root."),
  mc("A right triangle has legs x and x + 1 and hypotenuse 5. Which equation models it?", S`$x^2+(x+1)^2=25$`, [S`$x+(x+1)=5$`, S`$x(x+1)=25$`, S`$x^2+(x+1)^2=5$`], "Pythagoras."),
  num(S`A right triangle has legs $x$ and $x+1$ and hypotenuse $5$. Enter $x$.`, 3, "2x² + 2x − 24 = 0 ⇒ x² + x − 12 = 0."),
  mc("The area model shows (x + 3)(x + 4) = 42. What is x?", "3", ["4", "6", "−10"], "x² + 7x − 30 = (x + 10)(x − 3).", areaBox(["x", "+4"], ["x", "+3"], [["x²", "4x"], ["3x", "12"]])),
  mc("The graph shows h(t) = −5t² + 20t. When is the ball on the ground?", S`$t=0$ and $t=4$`, [S`$t=2$`, S`$t=20$`, S`$t=0$ only`], "Zeros of h.", planeDoc({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }], step: { x: 1, y: 4 } })),
  num(S`A photo $8$ by $6$ has a border of width $x$; total area $80$. Enter $x$.`, 1, "(8 + 2x)(6 + 2x) = 80 ⇒ x² + 7x − 8 = 0."),
  num(S`The sum of a number and its square is $30$. Enter the positive number.`, 5, "n² + n − 30 = (n + 6)(n − 5)."),
  num(S`$h(t)=-5t^2+25t$. Enter the later time when $h=30$.`, 3, "t² − 5t + 6 = 0."),
];

export const M = [
  num(S`$h(t)=-5t^2+30t$. For how many seconds is it above $25$ m?`, 4, "t² − 6t + 5 = 0: t = 1, 5."),
  num(S`$h(t)=-5t^2+40t$. For how many seconds is it above $75$ m?`, 2, "t² − 8t + 15 = 0: t = 3, 5."),
  num(S`A $12$ by $8$ pool has a deck of width $x$; total area $140$. Enter $x$.`, 1, "(12 + 2x)(8 + 2x) = 140 ⇒ x² + 10x − 11 = 0."),
  num(S`A rectangle's length is $3$ more than twice its width; area $35$. Enter the width.`, 3.5, "w(2w + 3) = 35 ⇒ (2w − 7)(w + 5) = 0.", null, 1e-9),
  num(S`Two consecutive odd integers have product $195$. Enter the positive smaller.`, 13, "n(n + 2) = 195."),
  num(S`A right triangle has legs $x$ and $x+14$ and hypotenuse $26$. Enter $x$.`, 10, "x² + (x + 14)² = 676 ⇒ 2x² + 28x − 480 = 0 ⇒ x² + 14x − 240 = (x + 24)(x − 10)."),
  num(S`A pen uses $36$ m of fencing on three sides against a wall; area $160$ m². Enter the smaller possible width.`, 8, "x(36 − 2x) = 160 ⇒ x² − 18x + 80 = 0 ⇒ (x − 8)(x − 10)."),
  num(S`Revenue after $x$ one-dollar price increases is $(20+x)(100-4x)$ dollars. Enter the larger $x$ that gives $2016$ dollars.`, 4, "2000 + 20x − 4x² = 2016 ⇒ x² − 5x + 4 = 0 ⇒ (x − 1)(x − 4) = 0."),
  mc(S`A ball reaches height $20$ m at $t=1$ and $t=3$. When is it above $20$ m?`, S`$1<t<3$`, [S`$t<1$ or $t>3$`, S`$t=2$ only`, S`$0<t<1$`], "Between the roots."),
  mc(S`An equation for a target revenue has no real roots. What does it mean?`, "the target revenue is impossible", ["the revenue is zero", "every price works", "the model is linear"], "The parabola never reaches that height."),
  ms("Select every root that must be rejected if x is a length.", ["x = −3", "x = 0", "x = 5", "x = −0.5"], [0, 1, 3], "Lengths are positive."),
  tf(S`For $h(t)=-5t^2+20t+1$, the object is above $16$ m for $2$ seconds.`, true, "Roots 1 and 3."),
  mc("The graph shows h(t) and the line h = 30. During which interval is h > 30?", S`$1<t<5$`, [S`$t<1$`, S`$0<t<6$`, S`$t>5$`], "Between the intersections.", planeDoc({ view: { xmin: -0.5, xmax: 7, ymin: -2, ymax: 50 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 5, a: 0, b: 6.16, color: "violet" }], lines: [{ m: 0, b: 30, color: "green", dash: true }], points: [{ x: 1, y: 30, label: "(1, 30)", color: "amber" }, { x: 5, y: 30, label: "(5, 30)", color: "amber" }], step: { x: 1, y: 5 } })),
  mc("The area model shows a deck around a 10 × 4 pool with total area 112. Which equation models it?", S`$(10+2x)(4+2x)=112$`, [S`$(10+x)(4+x)=112$`, S`$10\cdot4+2x=112$`, S`$(10+2x)(4+2x)=40$`], "The deck adds x on each side.", areaBox(["10", "+2x"], ["4", "+2x"], [["40", "8x"], ["20x", "4x²"]])),
  num(S`Solve $(10+2x)(4+2x)=112$ for the deck width $x$.`, 2, "4x² + 28x − 72 = 0 ⇒ x² + 7x − 18 = (x + 9)(x − 2)."),
  num(S`A rectangle has perimeter $26$ and area $40$. Enter its longer side.`, 8, "w(13 − w) = 40 ⇒ w² − 13w + 40 = (w − 5)(w − 8)."),
  num(S`The square of a positive number is $56$ more than the number. Enter it.`, 8, "n² − n − 56 = (n − 8)(n + 7)."),
  num(S`$h(t)=-5t^2+10t+40$. Enter the landing time.`, 4, "t² − 2t − 8 = (t − 4)(t + 2)."),
  fill(S`A model gives $t=-1.2$ and $t=4$. The ball lands at $t=$ ____.`, ["4"], "Reject the negative time."),
  num(S`Find the positive number whose square plus twice itself is $63$.`, 7, "n² + 2n − 63 = (n + 9)(n − 7)."),
];
