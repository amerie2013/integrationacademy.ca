// MPM2D chapter 3 assignments (homework): 10 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10.
// [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published. Titles match the existing rows.
// No bare $ signs (the assignment checker rejects them).
import { areaDoc, sqDoc } from "../bank/fig.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

export const ASSIGNMENTS = [
  { code: "3.1", title: "Assignment 3.1 — Expanding & Multiplying Polynomials", figs: {
      area: areaDoc(["2x", "-5"], ["3x", "+4"], [["?", "?"], ["?", "?"]]),
      sq: sqDoc("2x + 3", "x", "remaining area") }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Expand and simplify \(6x(x-4)-3(2x^2-x)\).`,
    String.raw`2. Expand and simplify \((x-7)(x+2)\).`,
    String.raw`3. Expand \((3x+4)^2\) and \((5x-2)(5x+2)\).`,
    "Thinking",
    String.raw`4. Complete the area model to expand \((2x-5)(3x+4)\), then write the simplified product. [[area|Area model for question 4]]`,
    String.raw`5. Find \(a\) and \(b\) if \((x+a)(x+b)=x^2+3x-28\) and \(a>b\).`,
    "Communication",
    String.raw`6. A classmate says \((x-6)^2=x^2-36\). Use an area model or a numerical example to explain the error.`,
    String.raw`7. Explain why the middle terms cancel when you expand \((a+b)(a-b)\).`,
    "Application",
    "8. A square of side x is cut from the corner of a square of side 2x + 3. Write the remaining area as a simplified polynomial. [[sq|Squares for question 8]]",
    String.raw`9. A garden is \((x+3)\) m by \((2x+1)\) m. A path 1 m wide is built around it. Write the area of the path as a simplified polynomial.`,
    String.raw`10. Use the patterns to calculate \(39\times41\) and \(71^2\) without a calculator. Show your work.`,
  ] },
  { code: "3.2", title: "Assignment 3.2 — Common Factoring & Factoring by Grouping", figs: {
      area: areaDoc(["?", "?"], ["?", "?"], [["xy", "4x"], ["3y", "12"]]) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Factor \(16x^2-24x\).`,
    String.raw`2. Factor \(5a^3b-15a^2b^2+10ab\).`,
    String.raw`3. Factor \(4x(2x-1)+7(2x-1)\).`,
    "Thinking",
    "4. The area model shows xy + 4x + 3y + 12. Find the side lengths and write the expression in factored form. [[area|Area model for question 4]]",
    String.raw`5. Factor \(3x^2-12x+2x-8\) by grouping, then check by expanding.`,
    "Communication",
    "6. Explain how to find the greatest common factor of several terms that contain both numbers and variables. Use your own example.",
    String.raw`7. A student wrote \(12x^2+18x=3x(4x+6)\). Is this fully factored? Explain and correct it if needed.`,
    "Application",
    String.raw`8. A rectangle has area \(21x^2+14x\) and width \(7x\). Find its length and perimeter.`,
    String.raw`9. The total surface area of a cylinder is \(2\pi r^2+2\pi rh\). Factor it, then find the surface area when r = 3 cm and h = 7 cm (leave your answer in terms of pi).`,
    String.raw`10. Factor \(pq-3p+2q-6\) and use the factored form to evaluate it when p = 8 and q = 5.`,
  ] },
  { code: "3.3", title: "Assignment 3.3 — Factoring Simple Trinomials (x² + bx + c)", figs: {
      grid: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -12, ymax: 8 }, step: { x: 1, y: 2 } }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Factor \(x^2+11x+24\).`,
    String.raw`2. Factor \(x^2-15x+56\).`,
    String.raw`3. Factor \(x^2+4x-45\).`,
    "Thinking",
    String.raw`4. Factor \(y=x^2-x-12\), state its zeros and y-intercept, and sketch the graph on the grid. [[grid|Grid for question 4]]`,
    String.raw`5. Find all integers \(k\) for which \(x^2+kx+20\) can be factored.`,
    "Communication",
    String.raw`6. Explain how the signs of b and c in \(x^2+bx+c\) tell you the signs of the two numbers in the factors.`,
    String.raw`7. Explain why \(x^2+6x+10\) cannot be factored over the integers.`,
    "Application",
    String.raw`8. Factor fully: \(4x^2-4x-80\).`,
    String.raw`9. A rectangle has area \(x^2+12x+35\) and length \(x+7\). Find its width and write its perimeter.`,
    String.raw`10. Factor \(x^2-2xy-35y^2\), then evaluate it when x = 10 and y = 1 using both the original and the factored forms.`,
  ] },
  { code: "3.4", title: "Assignment 3.4 — Factoring Complex Trinomials (ax² + bx + c)", figs: {
      area: areaDoc(["?", "?"], ["?", "?"], [["6x^2", "?"], ["?", "-10"]]) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Factor \(2x^2+9x+4\).`,
    String.raw`2. Factor \(3x^2-11x+6\).`,
    String.raw`3. Factor \(5x^2+3x-2\).`,
    "Thinking",
    String.raw`4. Factor \(6x^2+11x-10\) by decomposition. Use the area model to show the four parts. [[area|Area model for question 4]]`,
    String.raw`5. Find all integers \(k\) for which \(2x^2+kx-5\) can be factored.`,
    "Communication",
    "6. Explain the steps of decomposition and why you look for two numbers whose product is a·c.",
    String.raw`7. A student factored \(4x^2-11x+6\) as \((4x-3)(x-2)\). Check the answer and explain how you checked.`,
    "Application",
    String.raw`8. Factor fully: \(18x^2-3x-6\).`,
    String.raw`9. A rectangle has area \(8x^2+18x+9\) and width \(2x+3\). Find its length and its area when x = 2.`,
    String.raw`10. Factor \(6x^2-5xy-6y^2\) and state the zeros of \(y=6x^2-5x-6\).`,
  ] },
  { code: "3.5", title: "Assignment 3.5 — Special Products", figs: {
      sq: sqDoc("5x", "3", "25x² − 9") }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Factor \(x^2-144\).`,
    String.raw`2. Factor \(x^2-18x+81\).`,
    String.raw`3. Factor \(16x^2+40x+25\).`,
    "Thinking",
    "4. The diagram shows a square of side 5x with a square of side 3 removed. Explain how to rearrange the remaining region into a rectangle, and write the factored form of the area. [[sq|Diagram for question 4]]",
    String.raw`5. Find all values of \(k\) for which \(25x^2+kx+16\) is a perfect square.`,
    "Communication",
    "6. Describe how to recognize a perfect-square trinomial, with one example that is and one that is not.",
    "7. Explain why a sum of squares cannot be factored over the real numbers, but a difference of squares can.",
    "Application",
    String.raw`8. Factor fully: \(7x^2-63\) and \(2x^2+20x+50\).`,
    String.raw`9. Factor \((x+4)^2-36\).`,
    String.raw`10. Use a special product to calculate \(102\times98\) and \(199^2\) without a calculator.`,
  ] },
];
