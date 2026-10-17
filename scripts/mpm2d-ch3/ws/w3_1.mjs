// MPM2D Worksheet 3.1 — Expanding & Multiplying Polynomials (teacher edition)
import { F, areaT, parT, rectT, frameT, sqInSqT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Monomials and simplifying", q: String.raw`Expand and simplify $4x(3x-2)-5(x^2+x)$.`,
    fig: areaT(["4x"], ["3x", "-2"], [["12x^2", "-8x"]]),
    steps: [String.raw`$4x(3x-2)=12x^2-8x$.`, String.raw`$-5(x^2+x)=-5x^2-5x$.`, String.raw`$12x^2-8x-5x^2-5x=7x^2-13x$.`], ans: "$7x^2-13x$" },
  { title: "Two binomials", q: String.raw`Expand $(x+6)(x-3)$.`,
    fig: areaT(["x", "+6"], ["x", "-3"], [["x^2", "-3x"], ["6x", "-18"]]),
    steps: [String.raw`$x^2-3x+6x-18$.`, String.raw`$x^2+3x-18$.`], ans: "$x^2+3x-18$" },
  { title: "Coefficients in both brackets", q: String.raw`Expand $(4x-3)(2x+5)$.`,
    fig: areaT(["4x", "-3"], ["2x", "+5"], [["8x^2", "20x"], ["-6x", "-15"]]),
    steps: [String.raw`$8x^2+20x-6x-15$.`, String.raw`$8x^2+14x-15$.`], ans: "$8x^2+14x-15$" },
  { title: "Square of a sum", q: String.raw`Expand $(2x+7)^2$.`,
    fig: areaT(["2x", "+7"], ["2x", "+7"], [["4x^2", "14x"], ["14x", "49"]]),
    steps: [String.raw`$(2x+7)(2x+7)=4x^2+14x+14x+49$.`, String.raw`$4x^2+28x+49$.`], ans: "$4x^2+28x+49$" },
  { title: "Square of a difference", q: String.raw`Expand $(x-5)^2$ and describe the graph of $y=(x-5)^2$.`,
    fig: parT((x) => (x - 5) ** 2, [5], { xmin: 0, xmax: 10, ymin: -2, ymax: 26 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`$x^2-5x-5x+25=x^2-10x+25$.`, String.raw`The graph touches the $x$-axis only at $x=5$, where the bracket is $0$.`], ans: "$x^2-10x+25$" },
  { title: "Sum times difference", q: String.raw`Expand $(6x-1)(6x+1)$.`,
    fig: areaT(["6x", "-1"], ["6x", "+1"], [["36x^2", "6x"], ["-6x", "-1"]]),
    steps: [String.raw`$36x^2+6x-6x-1$.`, String.raw`The middle terms cancel.`], ans: "$36x^2-1$" },
  { title: "A constant factor", q: String.raw`Expand $3(2x-1)(x+4)$.`,
    fig: parT((x) => 3 * (2 * x - 1) * (x + 4), [0.5, -4], { xmin: -6, xmax: 3, ymin: -40, ymax: 30 }, { step: { x: 1, y: 10 } }),
    steps: [String.raw`$(2x-1)(x+4)=2x^2+7x-4$.`, String.raw`$3(2x^2+7x-4)=6x^2+21x-12$.`], ans: "$6x^2+21x-12$" },
  { title: "Subtracting a product", q: String.raw`Simplify $(x+4)^2-(x+3)(x-3)$.`,
    fig: areaT(["x", "+4"], ["x", "+4"], [["x^2", "4x"], ["4x", "16"]]),
    steps: [String.raw`$(x+4)^2=x^2+8x+16$; $(x+3)(x-3)=x^2-9$.`, String.raw`$x^2+8x+16-x^2+9=8x+25$.`], ans: "$8x+25$" },
  { title: "A path around a garden", q: String.raw`A garden is $x$ m by $(x+6)$ m and has a path $2$ m wide all around it. Write the area of the path.`,
    fig: frameT("x + 6", "x", "path 2 m", "garden"),
    steps: [String.raw`Outer rectangle: $(x+4)(x+10)=x^2+14x+40$.`, String.raw`Garden: $x(x+6)=x^2+6x$.`, String.raw`Path: $x^2+14x+40-(x^2+6x)=8x+40$.`], ans: String.raw`$8x+40$ m$^2$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Expand $5x(2x-7)$.`, recap: "5x(2x − 7).", ans: "$10x^2-35x$", fig: areaT(["5x"], ["2x", "-7"], [["?", "?"]]) },
  { level: 1, q: String.raw`Expand and simplify $(x+8)(x-2)$.`, recap: "(x + 8)(x − 2).", ans: "$x^2+6x-16$", fig: areaT(["x", "+8"], ["x", "-2"], [["?", "?"], ["?", "?"]]) },
  { level: 1, q: String.raw`Expand $(x-9)^2$.`, recap: "(x − 9)².", ans: "$x^2-18x+81$" },
  { level: 2, q: String.raw`Expand and simplify $(3x+2)(2x-5)$.`, recap: "(3x + 2)(2x − 5).", ans: "$6x^2-11x-10$", fig: areaT(["3x", "+2"], ["2x", "-5"], [["?", "?"], ["?", "?"]]) },
  { level: 2, q: String.raw`Expand $(4x+3)^2$.`, recap: "(4x + 3)².", ans: "$16x^2+24x+9$", fig: areaT(["4x", "+3"], ["4x", "+3"], [["?", "?"], ["?", "?"]]) },
  { level: 2, q: String.raw`Expand $(7-2x)(7+2x)$.`, recap: "(7 − 2x)(7 + 2x).", ans: "$49-4x^2$", fig: areaT(["7", "-2x"], ["7", "+2x"], [["?", "?"], ["?", "?"]]) },
  { level: 2, q: String.raw`Expand and simplify $2(x-3)(x+5)$.`, recap: "2(x − 3)(x + 5).", ans: "$2x^2+4x-30$" },
  { level: 2, q: String.raw`Expand and simplify $(x+1)^2+(x-1)^2$.`, recap: "(x + 1)² + (x − 1)².", ans: "$2x^2+2$" },
  { level: 3, space: 5, q: String.raw`Simplify $(2x+3)^2-(2x-3)^2$ and explain why the answer has no $x^2$ term.`, recap: "Difference of two squares of binomials.", ans: String.raw`$24x$; the $4x^2$ and the $9$ cancel` },
  { level: 3, space: 5, q: String.raw`A rectangle is $(3x-1)$ long and $(2x+4)$ wide. Write simplified expressions for its area and perimeter.`, recap: "Rectangle area and perimeter.", ans: String.raw`area $6x^2+10x-4$; perimeter $10x+6$`, fig: rectT("3x − 1", "2x + 4") },
  { level: 3, space: 5, q: String.raw`Which has the greater area: a square of side $x+5$ or a rectangle $(x+2)$ by $(x+8)$? By how much?`, recap: "Square vs rectangle.", ans: String.raw`square: $x^2+10x+25$ vs $x^2+10x+16$; the square by $9$`, fig: sqInSqT("x + 5", "?", "square") },
  { level: 3, space: 5, q: String.raw`$(ax+b)(2x+3)=6x^2+5x-6$. Find $a$ and $b$.`, recap: "Find a and b.", ans: String.raw`$2a=6$, $3b=-6$: $a=3$, $b=-2$ (check $9-4=5$)` },
  { level: 3, space: 5, q: String.raw`A photo is $2x$ cm by $3x$ cm with a frame $2$ cm wide all around. Write the area of the frame in simplified form.`, recap: "Frame area.", ans: String.raw`$(2x+4)(3x+4)-6x^2=20x+16$`, fig: frameT("3x", "2x", "frame 2 cm", "photo") },
];

export const WS = {
  code: "3.1",
  title: "Expanding & Multiplying Polynomials",
  bigideas: String.raw`To multiply polynomials, multiply every term of one by every term of the other, then collect like terms. An area model organizes the products. Two patterns appear constantly: $(a\pm b)^2=a^2\pm2ab+b^2$ and $(a+b)(a-b)=a^2-b^2$. Expanding fluently is the foundation for factoring, which reverses it.`,
  goals: ["Expand monomial × polynomial.", "Multiply binomials with an area model.", "Expand squares and sum × difference.", "Simplify multi-step expressions and area expressions."],
  curriculum: "QR3",
  vocab: [["Binomial", "two terms"], ["Trinomial", "three terms"], ["Like terms", "same variable and exponent"], ["Area model", "a grid of partial products"]],
  hook: String.raw`Ask: is $(x+3)^2$ equal to $x^2+9$? Test with $x=1$: $16$ vs $10$. Then draw the area model to find the missing $6x$.`,
  concepts: [
    ["1. Every term × every term", String.raw`Four partial products for two binomials, then collect.
${areaT(["2x", "+3"], ["x", "-4"], [["2x^2", "-8x"], ["3x", "-12"]], 5)}`],
    ["2. Patterns", String.raw`$(a\pm b)^2=a^2\pm2ab+b^2$; $(a+b)(a-b)=a^2-b^2$.`],
    ["3. Simplifying", String.raw`Put each product in brackets before subtracting; then collect like terms.`],
  ],
  tips: ["(a + b)² ≠ a² + b² — show the area model.", "Signs: multiply them too.", "Bracket a product before subtracting it.", "Collect like terms at the end.", "Check with x = 1."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
