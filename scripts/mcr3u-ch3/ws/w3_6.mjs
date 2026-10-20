// MCR3U Worksheet 3.6 — The Zeros and the Discriminant (teacher edition)
import { F, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Two rational roots", q: String.raw`Use the discriminant to describe the roots of $3x^2-7x+2=0$.`, steps: [String.raw`$D=49-24=25$, a perfect square.`], ans: "two rational roots (1/3 and 2)" },
  { title: "No real roots", q: String.raw`How many zeros does $x^2+4x+7$ have?`, steps: [String.raw`$D=16-28=-12<0$.`], ans: "none" },
  { title: "One root", q: String.raw`How many zeros does $9x^2-30x+25$ have?`, steps: [String.raw`$D=900-900=0$.`], ans: String.raw`one: $(3x-5)^2$, $x=\tfrac53$` },
  { title: "Irrational roots", q: String.raw`Describe the roots of $x^2-3x-5=0$.`, steps: [String.raw`$D=9+20=29$, not a perfect square.`], ans: "two irrational roots" },
  { title: "Vertex form: two zeros", q: String.raw`How many zeros does $y=4(x+2)^2-1$ have?`,
    fig: F({ view: { xmin: -5, xmax: 1, ymin: -2, ymax: 5 }, curves: [{ f: (x) => 4 * (x + 2) ** 2 - 1 }], points: [pt(-2, -1)] }),
    steps: ["Opens up from a vertex below the axis."], ans: "two" },
  { title: "Vertex form: none", q: String.raw`How many zeros does $y=-(x-3)^2-2$ have?`, steps: ["Opens down from a vertex below the axis."], ans: "none" },
  { title: "Parameter for one root", q: String.raw`For which $k$ does $x^2-kx+25=0$ have one root?`, steps: [String.raw`$k^2-100=0$.`], ans: String.raw`$k=\pm10$` },
  { title: "Parameter for no roots", q: String.raw`For which $k$ does $2x^2+8x+k=0$ have no real roots?`, steps: [String.raw`$64-8k<0\Rightarrow k>8$.`], ans: String.raw`$k>8$` },
  { title: "Parameter in a", q: String.raw`For which $k$ does $kx^2-2x+3=0$ have two real roots?`, steps: [String.raw`$4-12k>0\Rightarrow k<\tfrac13$; and $k\ne0$.`], ans: String.raw`$k<\tfrac13$, $k\ne0$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the discriminant of $2x^2-3x-9$ and describe the roots.`, recap: "Discriminant.", ans: String.raw`$81$: two rational` },
  { level: 1, q: String.raw`How many zeros does $x^2-10x+25$ have?`, recap: "Count zeros.", ans: "one" },
  { level: 1, q: String.raw`How many zeros does $y=3(x-1)^2+2$ have?`, recap: "Vertex form.", ans: "none" },
  { level: 2, q: String.raw`Describe the roots of $4x^2+4x-1=0$.`, recap: "Type of roots.", ans: String.raw`$D=32$: two irrational` },
  { level: 2, q: String.raw`For which $k$ does $4x^2+kx+9=0$ have exactly one root?`, recap: "One root.", ans: String.raw`$k=\pm12$` },
  { level: 2, q: String.raw`For which $k$ does $x^2+6x+k=0$ have no real roots?`, recap: "No roots.", ans: String.raw`$k>9$` },
  { level: 2, q: String.raw`For which $k$ does $kx^2+4x-2=0$ have two real roots?`, recap: "Two roots.", ans: String.raw`$k>-2$, $k\ne0$` },
  { level: 2, q: String.raw`Explain, with the discriminant and a sketch, why $y=-2x^2+3x-4$ is always negative.`, recap: "Always negative.", ans: String.raw`$D=-23<0$ and it opens down` },
  { level: 3, space: 4, q: String.raw`For which $m$ does $x^2+mx+m+3=0$ have exactly one root?`, recap: "Parameter twice.", ans: String.raw`$m^2-4m-12=0$: $m=6$ or $-2$` },
  { level: 3, space: 4, q: String.raw`Show that $2x^2+kx-3=0$ has two real roots for every $k$.`, recap: "Always two.", ans: String.raw`$D=k^2+24>0$` },
  { level: 3, space: 4, q: String.raw`For which $k$ does $y=x^2-2kx+3k-2$ touch the x-axis?`, recap: "Touching.", ans: String.raw`$k^2-3k+2=0$: $k=1$ or $2$` },
  { level: 3, space: 5, q: String.raw`$y=c-(x-4)^2$. For which $c$ are there two zeros? Find $c$ if the zeros are 6 units apart.`, recap: "Distance between zeros.", ans: String.raw`$c>0$; zeros $4\pm\sqrt c$: $c=9$`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -5, ymax: 10 }, curves: [{ f: (x) => 9 - (x - 4) ** 2 }], points: [pt(1, 0), pt(7, 0)] }) },
  { level: 3, space: 5, q: String.raw`A ball's height is $h(t)=-4.9t^2+15t+1$ m. Can it reach 13 m? Use the discriminant, then find its maximum height.`, recap: "Reach a height?", ans: String.raw`$D=225-235.2<0$: no; max $\approx12.48$ m` },
];

export const WS = {
  code: "3.6",
  title: "The Zeros and the Discriminant",
  bigideas: String.raw`The discriminant $D=b^2-4ac$ counts the real zeros: two if $D>0$, one if $D=0$, none if $D<0$. A perfect-square $D$ gives rational roots. In vertex form, opposite signs of $a$ and $k$ mean two zeros. With a parameter, solve $D>0$, $D=0$ or $D<0$ for it.`,
  goals: ["Calculate and interpret D.", "Count zeros from vertex form.", "Classify roots.", "Find parameter values."],
  curriculum: "A2.1",
  vocab: [["Discriminant", "$b^2-4ac$"], ["Double root", "$D=0$"], ["Parameter", "unknown constant such as $k$"]],
  hook: "Show three parabolas with the same axis but different heights. Ask: what one number could predict how many times each crosses the x-axis?",
  concepts: [
    ["1. Three cases", String.raw`${F({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 2, color: "green" }, { f: (x) => x * x - 2 * x + 1, color: "amber" }, { f: (x) => x * x - 2 * x + 4, color: "red" }] }, 5, "D > 0, D = 0, D < 0")}`],
    ["2. Without D", String.raw`$a(x-h)^2+k$: two zeros iff $a$ and $k$ have opposite signs.`],
    ["3. Parameters", String.raw`Set up $D$ in terms of $k$ and solve the inequality.`],
  ],
  tips: ["Standard form before reading a, b, c.", "Exclude a = 0.", "Perfect square D → factors.", "D < 0: no real zeros.", "Check the sign of a for always positive/negative."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
