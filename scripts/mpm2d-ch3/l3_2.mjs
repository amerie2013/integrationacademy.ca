// MPM2D 3.2 — Common Factoring & Factoring by Grouping (self-study format): the greatest common factor
// (numbers and variables), negative common factors, binomial common factors, grouping four terms
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, choice, fexpr } from "./lib.mjs";
import { areaModel } from "./l3_1.mjs";

export const TITLE = "3.2 Common Factoring & Factoring by Grouping";

export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Common Factoring & Factoring by Grouping",
    overview: String.raw`Factoring writes a sum as a product. It is expanding run backwards: instead of multiplying \(3x(2x+5)\) out to \(6x^2+15x\), you start with \(6x^2+15x\) and find the \(3x\) that every term shares. In this lesson you will find the greatest common factor (GCF) of several terms, factor it out, factor out a whole bracket, and factor four-term expressions by grouping. Taking out the GCF is the first step of every factoring question in this chapter.`,
    goals: [
      "find the greatest common factor of two or more terms, including variables;",
      "factor out a monomial GCF and check by expanding;",
      "factor out a negative common factor;",
      "factor out a common binomial factor;",
      "factor four-term polynomials by grouping.",
    ],
    curriculum: "QR3 (factor polynomial expressions involving common factors, using a variety of tools and strategies)",
    prior: [
      [String.raw`GCF of \(18\) and \(24\)?`, String.raw`\(6\).`],
      [String.raw`Expand \(4x(x-3)\).`, String.raw`\(4x^2-12x\).`],
      [String.raw`\(x^5\div x^2=\)?`, String.raw`\(x^3\).`],
    ],
    words: [
      ["Factor (verb)", "write as a product", "\\(6x+9=3(2x+3)\\)"],
      ["GCF", "the greatest factor shared by every term", "\\(4x^2\\) in \\(8x^3+12x^2\\)"],
      ["Fully factored", "no factor can be factored further", ""],
      ["Grouping", "pairing terms to reveal a common bracket", ""],
    ],
  }),

  section("📌 Expanding backwards", String.raw`
  <p>An area model shows the idea. If a rectangle has area \(6x^2+15x\), its width can be the common factor \(3x\), and the length is what remains:</p>
  ${areaModel(["3x"], ["2x", "+5"], [["6x^2", "15x"]], "6x² + 15x = 3x(2x + 5)")}
  ${keyIdea(String.raw`To factor out the GCF: (1) find the GCF of the numbers; (2) for each variable in every term, take its lowest power; (3) divide each term by the GCF and write the quotients in brackets; (4) check by expanding.`)}`),

  section("📌 Explore", String.raw`<p>Step through four kinds of common factoring. Predict each step before you reveal it.</p>`),

  widget("commonFactor"),

  section("📌 Grouping four terms", String.raw`
  <p>When four terms share no common factor, group them in pairs. Factor each pair. If the two brackets match, that bracket is a common factor of the whole expression. If they do not match, try a different pairing or take a negative factor from the second pair.</p>
  ${watchOut([
    "A term that is entirely the GCF leaves 1, not 0: 4x² + 2x = 2x(2x + 1).",
    "Take the lowest power of each variable, not the highest.",
    "When you take out a negative factor, every sign in the bracket changes.",
    "Always check by expanding — it takes seconds.",
  ])}`),

  examples([
    ["The GCF", String.raw`Factor \(15x^3-25x^2\).`,
      [String.raw`GCF of 15 and 25 is 5; the lowest power of \(x\) is \(x^2\). GCF \(=5x^2\).`, String.raw`\(15x^3\div5x^2=3x\); \(-25x^2\div5x^2=-5\).`, String.raw`Check: \(5x^2(3x)-5x^2(5)=15x^3-25x^2\) ✓`],
      String.raw`\(5x^2(3x-5)\)`],
    ["Three terms, two variables", String.raw`Factor \(6a^2b-9ab^2+3ab\).`,
      [String.raw`GCF of 6, 9, 3 is 3; \(a\): lowest \(a\); \(b\): lowest \(b\). GCF \(=3ab\).`, String.raw`Quotients: \(2a\), \(-3b\), \(+1\).`],
      String.raw`\(3ab(2a-3b+1)\)`],
    ["A negative common factor", String.raw`Factor \(-4x^2-12x\) so that the bracket starts with a positive term.`,
      [String.raw`GCF \(4x\); take out \(-4x\) instead.`, String.raw`\(-4x^2\div(-4x)=x\); \(-12x\div(-4x)=3\).`],
      String.raw`\(-4x(x+3)\)`],
    ["A common binomial", String.raw`Factor \(2x(x+5)-7(x+5)\).`,
      [String.raw`Both terms contain the bracket \((x+5)\).`, String.raw`Take it out: what is left is \(2x\) and \(-7\).`],
      String.raw`\((x+5)(2x-7)\)`],
    ["Grouping", String.raw`Factor \(3m-3n+km-kn\).`,
      [String.raw`Group: \((3m-3n)+(km-kn)\).`, String.raw`Factor each pair: \(3(m-n)+k(m-n)\).`, String.raw`Common bracket: \((m-n)(3+k)\). Check: \(3m+km-3n-kn\) ✓`],
      String.raw`\((m-n)(3+k)\)`],
  ]),

  practice([
    q("GCF", String.raw`Factor \(8x^2+12x\).`, fexpr("4x(2x+3)"),
      "GCF of the numbers and the lowest power of x.", [String.raw`GCF \(4x\): \(8x^2\div4x=2x\), \(12x\div4x=3\).`], String.raw`\(8x^2+12x=4x(2x+3)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("GCF", String.raw`Factor \(10a^3-15a^2\).`, fexpr("5a^2(2a-3)"),
      "GCF 5a².", [String.raw`\(10a^3\div5a^2=2a\); \(15a^2\div5a^2=3\).`], String.raw`\(10a^3-15a^2=5a^2(2a-3)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("binomial", String.raw`Factor \(x(y+4)+3(y+4)\).`, fexpr("(y+4)(x+3)"),
      "The bracket is the common factor.", [String.raw`Take out \((y+4)\).`], String.raw`\(x(y+4)+3(y+4)=(y+4)(x+3)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("grouping", String.raw`Factor \(xy+5x+2y+10\) by grouping.`, fexpr("(y+5)(x+2)"),
      "Group the first two and the last two terms.", [String.raw`\(x(y+5)+2(y+5)\).`], String.raw`\(xy+5x+2y+10=(y+5)(x+2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("GCF", String.raw`What is the GCF of \(18x^3y\) and \(24x^2y^2\)?`, choice(["6x²y", "6x³y²", "72x³y²", "3xy"], 0),
      "Greatest number, lowest powers.", [String.raw`GCF(18, 24) = 6; \(x^2\); \(y\).`], String.raw`\(6x^2y\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I know I took out the greatest common factor?", "Look inside the bracket: if the terms there still share a factor (a number or a variable), you did not take out the greatest one."],
      ["Why does one term leave 1 inside the bracket?", "Because that term divided by the GCF is 1. Writing 0 would change the value."],
      ["When should I take out a negative factor?", "When the first term is negative, taking out the negative factor makes the bracket start with a positive term — this makes later factoring easier."],
      ["What if grouping gives two different brackets?", "Try another pairing, or take a negative factor out of the second pair. If nothing matches, the expression may not factor by grouping."],
      ["Is 2(3x + 6) fully factored?", "No: 3x + 6 still has the common factor 3. Fully factored, it is 6(x + 2)."],
    ],
    summary: [
      "Factoring writes a sum as a product: the reverse of expanding.",
      "GCF: greatest number, lowest power of each common variable.",
      "A common bracket can be factored out like a single term.",
      "Four terms: group in pairs and look for a common bracket.",
    ],
    next: "3.3 factors trinomials of the form x² + bx + c.",
  }),
];
