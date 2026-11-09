// 1.3 Domain and Range — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "1.3 Domain and Range";
export const Q = [
  num(S`$f(x)=2(x-3)^2-5$ on $0\le x\le4$. Enter the largest value of $f$.`, 13, "f(0) = 18 − 5 = 13; f(4) = −3; vertex −5.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 15 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 5, a: 0, b: 4, color: "violet" }], step: { x: 1, y: 2 } })),
  num(S`$f(x)=-(x-2)^2+9$ on $-2\le x\le3$. Enter the smallest value of $f$.`, -7, "f(−2) = −16 + 9 = −7; f(3) = 8; vertex 9."),
  num(S`$y=x^2+4x$ on $-5\le x\le1$. Enter the length of the range interval (max − min).`, 9, "Vertex (−2, −4); y(−5) = 5, y(1) = 5: 5 − (−4) = 9."),
  num(S`$y=(x-a)^2$ on $0\le x\le6$ has range $0\le y\le16$, and $0<a<3$. Enter $a$.`, 2, "Vertex at a in [0, 6]; farther end gives 16: (6 − a)² = 16 ⇒ a = 2 (then (0 − 2)² = 4 ≤ 16)."),
  num(S`A ball: $h(t)=-5t^2+30t+35$ m. Enter the maximum height.`, 80, "Vertex t = 3: −45 + 90 + 35.", planeDoc({ view: { xmin: -0.5, xmax: 8, ymin: -5, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 35, a: 0, b: 7, color: "violet" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })),
  num(S`A ball: $h(t)=-5t^2+30t+35$ m. Enter the time it lands.`, 7, "t² − 6t − 7 = 0 ⇒ (t − 7)(t + 1) = 0."),
  num(S`A fence of $80$ m encloses three sides of a pen against a wall: $A(x)=x(80-2x)$. Enter the maximum area (m²).`, 800, "Zeros 0, 40; vertex x = 20: 20 · 40."),
  mc(S`For $A(x)=x(80-2x)$ in context, what is the domain?`, S`$0<x<40$`, [S`$0<x<80$`, S`$0\le x\le20$`, S`$x>0$`], "80 − 2x > 0."),
  num(S`$f(x)=a(x-1)^2+k$ has range $y\le4$ and passes through $(3,\,-4)$. Enter $a$.`, -2, "k = 4, a(2)² + 4 = −4."),
  mc("The graph shows a parabola restricted to −3 ≤ x < 2 (open dot at x = 2). What is its range?", S`$-1\le y<8$`, [S`$-1\le y\le8$`, S`$0\le y\le8$`, S`$-1<y\le8$`], "Minimum −1 at the vertex; the largest value 8 would occur at the open end x = 2, so it is excluded (x = −3 only gives 3).", planeDoc({ view: { xmin: -4, xmax: 3, ymin: -2, ymax: 9 }, curves: [{ f: (x) => (x + 1) ** 2 - 1, a: -3, b: 2, color: "violet" }], points: [{ x: -3, y: 3, label: "(−3, 3)" }, { x: 2, y: 8, label: "(2, 8) open", color: "red" }, { x: -1, y: -1, label: "(−1, −1)", color: "amber" }] })),
  mc(S`A model $h(t)$ for a rocket is valid for $0\le t\le12$ and its vertex is at $t=6$ with $h(6)=180$. If $h(0)=h(12)=0$, the range is:`, S`$0\le h\le180$`, [S`$0\le h\le12$`, S`$6\le h\le180$`, S`$h\le180$`], "Ground to peak."),
  ms(S`Select every TRUE statement about $f(x)=-2(x+3)^2+5$.`, [S`its range is $y\le5$`, S`its domain is $x\le-3$`, S`it has two $x$-intercepts`, S`$f(0)=-13$`, S`its maximum occurs at $x=3$`], [0, 2, 3], "Domain is ℝ; maximum at x = −3; f(0) = −18 + 5 = −13."),
  num(S`$y=-x^2+bx$ has range $y\le9$ and $b>0$. Enter $b$.`, 6, "Vertex at x = b/2: −b²/4 + b²/2 = b²/4 = 9 ⇒ b = 6."),
  tf(S`On a restricted domain, the range of a quadratic always comes from the two endpoints.`, false, "If the vertex lies inside the interval, it gives one extreme."),
  num(S`Water from a hose follows $h(x)=-0.25x^2+2x+2.25$ m. Enter the horizontal distance (m) where it hits the ground.`, 9, "Multiply by −4: x² − 8x − 9 = 0 ⇒ (x − 9)(x + 1) = 0; reject x = −1."),
  mc("The graph shows a model of a dolphin's jump. Which domain fits the jump?", S`$1\le t\le3$`, [S`$0\le t\le3$`, S`$0\le t\le4$`, S`$t\ge1$`], "The dolphin is above water between the two zeros.", planeDoc({ view: { xmin: -0.5, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (t) => -5 * (t - 1) * (t - 3), color: "blue" }], points: [{ x: 1, y: 0, label: "(1, 0)" }, { x: 3, y: 0, label: "(3, 0)" }, { x: 2, y: 5, label: "(2, 5)", color: "amber" }], xlabel: "t (s)", ylabel: "h (m)" })),
  num(S`A rectangular field uses $120$ m of fencing on all four sides. Enter its maximum possible area (m²).`, 900, "A = x(60 − x), max at x = 30."),
  num(S`$y=(x-1)^2+2$ on $a\le x\le4$ has range $2\le y\le11$. Enter the smallest possible $a$.`, -2, "(a − 1)² + 2 ≤ 11 ⇒ (a − 1)² ≤ 9 ⇒ a ≥ −2."),
  mc(S`Why is $\{h\mid 0\le h\le45\}$ the range of a ball thrown from $40$ m, even though $h(0)=40$?`, "the ball falls below the launch height to the ground", ["the ball cannot go above 40 m", "time can be negative", "the range must start at 0 for every function"], "Heights between 0 and 40 occur on the way down."),
  num(S`The vertex of $y=a(x-h)^2+k$ is $(2,\,-3)$ and the range is $y\ge-3$. If $y(0)=5$, enter $a$.`, 2, "4a − 3 = 5."),
];
