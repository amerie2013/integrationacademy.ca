// MPM2D Worksheet 3.2 — Common Factoring & Factoring by Grouping (teacher edition)
import { F, areaT, parT, rectT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Numbers and a variable", q: String.raw`Factor $18x^2+24x$.`,
    fig: areaT(["6x"], ["3x", "+4"], [["18x^2", "24x"]]),
    steps: [String.raw`GCF of 18 and 24 is 6; lowest power of $x$ is $x$. GCF $=6x$.`, String.raw`$18x^2\div6x=3x$, $24x\div6x=4$.`], ans: "$6x(3x+4)$" },
  { title: "Two variables", q: String.raw`Factor $14a^3b^2-21a^2b^3$.`,
    fig: areaT(["7a^2b^2"], ["2a", "-3b"], [["14a^3b^2", "-21a^2b^3"]]),
    steps: [String.raw`GCF of 14 and 21 is 7; $a^2$; $b^2$.`, String.raw`Quotients $2a$ and $-3b$.`], ans: "$7a^2b^2(2a-3b)$" },
  { title: "Three terms", q: String.raw`Factor $5x^3-10x^2+15x$.`,
    fig: areaT(["5x"], ["x^2", "-2x", "+3"], [["5x^3", "-10x^2", "15x"]]),
    steps: [String.raw`GCF $5x$.`, String.raw`Quotients $x^2$, $-2x$, $3$.`], ans: "$5x(x^2-2x+3)$" },
  { title: "A negative GCF", q: String.raw`Factor $-6x^2+9x$ with a positive first term in the bracket, and find where $y=-6x^2+9x$ crosses the $x$-axis.`,
    fig: parT((x) => -6 * x * x + 9 * x, [0, 1.5], { xmin: -1, xmax: 3, ymin: -6, ymax: 5 }),
    steps: [String.raw`Take out $-3x$: $-3x(2x-3)$.`, String.raw`$y=0$ when $x=0$ or $2x-3=0$, $x=1.5$.`], ans: String.raw`$-3x(2x-3)$; $x=0$ and $x=1.5$` },
  { title: "A bracket as the common factor", q: String.raw`Factor $4(x-2)+x(x-2)$.`,
    fig: parT((x) => (x - 2) * (x + 4), [2, -4], { xmin: -6, xmax: 4, ymin: -10, ymax: 8 }, { step: { x: 1, y: 2 } }),
    steps: [String.raw`Common factor $(x-2)$; left over $4$ and $x$.`, String.raw`$(x-2)(4+x)$, which is zero at $x=2$ and $x=-4$.`], ans: "$(x-2)(x+4)$" },
  { title: "Another bracket", q: String.raw`Factor $y(3y+1)-2(3y+1)$.`,
    steps: [String.raw`Common factor $(3y+1)$.`, String.raw`Left over $y$ and $-2$.`], ans: "$(3y+1)(y-2)$",
    fig: areaT(["3y+1"], ["y", "-2"], [["y(3y+1)", "-2(3y+1)"]]) },
  { title: "Grouping", q: String.raw`Factor $x^2+3x+2x+6$ by grouping.`,
    fig: areaT(["x", "+2"], ["x", "+3"], [["x^2", "3x"], ["2x", "6"]]),
    steps: [String.raw`$x(x+3)+2(x+3)$.`, String.raw`$(x+3)(x+2)$.`], ans: "$(x+3)(x+2)$" },
  { title: "Grouping with a negative", q: String.raw`Factor $6ab-9a-4b+6$.`,
    fig: areaT(["3a", "-2"], ["2b", "-3"], [["6ab", "-9a"], ["-4b", "6"]]),
    steps: [String.raw`$3a(2b-3)-2(2b-3)$ (take out $-2$ so the brackets match).`, String.raw`$(2b-3)(3a-2)$.`], ans: "$(2b-3)(3a-2)$" },
  { title: "A missing side", q: String.raw`A rectangle has area $12x^2+8x$ and width $4x$. Find its length.`,
    fig: areaT(["4x"], ["3x", "+2"], [["12x^2", "8x"]]),
    steps: [String.raw`$12x^2+8x=4x(3x+2)$.`, "The other factor is the length."], ans: "$3x+2$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Factor $20x-15$.`, recap: "20x − 15.", ans: "$5(4x-3)$" },
  { level: 1, q: String.raw`Factor $9x^2+12x$.`, recap: "9x² + 12x.", ans: "$3x(3x+4)$", fig: areaT(["?"], ["?", "?"], [["9x^2", "12x"]]) },
  { level: 1, q: String.raw`Factor $7a^2-14a$.`, recap: "7a² − 14a.", ans: "$7a(a-2)$", fig: areaT(["?"], ["?", "?"], [["7a^2", "-14a"]]) },
  { level: 2, q: String.raw`Factor $12x^3y-18x^2y^2$.`, recap: "12x³y − 18x²y².", ans: "$6x^2y(2x-3y)$" },
  { level: 2, q: String.raw`Factor $-10x^2-25x$ so the bracket starts with a positive term.`, recap: "−10x² − 25x.", ans: "$-5x(2x+5)$" },
  { level: 2, q: String.raw`Factor $x(x+7)-4(x+7)$.`, recap: "x(x + 7) − 4(x + 7).", ans: "$(x+7)(x-4)$" },
  { level: 2, q: String.raw`Factor $ab+3a+5b+15$.`, recap: "ab + 3a + 5b + 15.", ans: "$(b+3)(a+5)$", fig: areaT(["?", "?"], ["?", "?"], [["ab", "3a"], ["5b", "15"]]) },
  { level: 2, q: String.raw`Factor $2x^2-6x+5x-15$.`, recap: "2x² − 6x + 5x − 15.", ans: "$(x-3)(2x+5)$", fig: areaT(["?", "?"], ["?", "?"], [["2x^2", "-6x"], ["5x", "-15"]]) },
  { level: 3, space: 5, q: String.raw`A rectangle has area $15x^2+10x$ and length $5x$. Find its width and its perimeter.`, recap: "Missing width.", ans: String.raw`width $3x+2$; perimeter $16x+4$`, fig: rectT("5x", "?", "area 15x² + 10x") },
  { level: 3, space: 5, q: String.raw`Factor $4m^2-4mn-3m+3n$.`, recap: "Grouping with four terms.", ans: String.raw`$4m(m-n)-3(m-n)=(m-n)(4m-3)$` },
  { level: 3, space: 5, q: String.raw`A student wrote $4x^2+8x=2x(2x+4)$. Explain the error and write the correct factoring.`, recap: "Not fully factored.", ans: String.raw`$2x+4$ still has the factor 2; $4x(x+2)$` },
  { level: 3, space: 5, q: String.raw`The surface area of a cylinder is $2\pi r^2+2\pi rh$. Factor it fully and explain what each factor could represent.`, recap: "Cylinder surface area.", ans: String.raw`$2\pi r(r+h)$: the circumference $2\pi r$ times $(r+h)$` },
  { level: 3, space: 5, q: String.raw`Find the missing term: $6x^2y-\square=3xy(2x-5y)$.`, recap: "Missing term.", ans: String.raw`$15xy^2$` },
];

export const WS = {
  code: "3.2",
  title: "Common Factoring & Factoring by Grouping",
  bigideas: String.raw`Factoring writes a sum as a product, reversing the distributive property. The greatest common factor (GCF) uses the greatest common number and the lowest power of each shared variable; it is always the first step. A common bracket can be factored like a single term, and four-term expressions often factor by grouping in pairs.`,
  goals: ["Find and factor out the GCF.", "Use a negative common factor.", "Factor out a common bracket.", "Factor by grouping."],
  curriculum: "QR3",
  vocab: [["GCF", "greatest common factor"], ["Fully factored", "no factor can be factored further"], ["Grouping", "pair terms to reveal a common bracket"]],
  hook: String.raw`Give the area $6x^2+15x$ of a rectangle and ask for possible side lengths. Students find $3x$ and $2x+5$ — and also $x$ and $6x+15$. Which uses the greatest common factor?`,
  concepts: [
    ["1. GCF", String.raw`Greatest number, lowest power of each common variable.
${areaT(["3x"], ["2x", "+5"], [["6x^2", "15x"]], 4.5)}`],
    ["2. Common bracket", String.raw`$a(x+1)+b(x+1)=(x+1)(a+b)$.`],
    ["3. Grouping", String.raw`Pair the terms; factor each pair; if the brackets match, factor out the bracket.`],
  ],
  tips: ["A term equal to the GCF leaves 1.", "Lowest power, not highest.", "A negative factor changes every sign.", "Check by expanding.", "Look inside the bracket for a remaining factor."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
