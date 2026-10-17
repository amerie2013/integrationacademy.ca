// MPM2D 3.6 — Chapter 3 Review (NEW lesson, placed after 3.5)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, choice, expr, fexpr } from "./lib.mjs";

export const TITLE = "3.6 Chapter 3 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000306", position: 19 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 3 Review — Polynomials & Factoring",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, a strategy for choosing how to factor, multi-step questions, mixed practice and a readiness checklist. Work through it after 3.1–3.5 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "choose a factoring strategy from the number of terms;",
      "factor fully in several steps;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "QR3 (whole chapter)",
    prior: [
      [String.raw`Expand \((x-3)(x+7)\).`, String.raw`\(x^2+4x-21\).`],
      [String.raw`Factor \(x^2-16\).`, String.raw`\((x-4)(x+4)\).`],
      [String.raw`Factor \(5x^2+10x\).`, String.raw`\(5x(x+2)\).`],
    ],
    words: [
      ["GCF", "greatest common factor", "\\(6x\\) in \\(12x^2-18x\\)"],
      ["Sum and product", "for \\(x^2+bx+c\\)", ""],
      ["Decomposition", "for \\(ax^2+bx+c\\)", ""],
      ["Special products", "\\(a^2-b^2\\), \\(a^2\\pm2ab+b^2\\)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["3.1 Expanding", "every term × every term, then collect", "\\((2x+3)(x-4)=2x^2-5x-12\\)", "\\((a+b)^2\\ne a^2+b^2\\)"],
    ["3.2 Common factor & grouping", "GCF first; four terms → pairs", "\\(15x^3-25x^2=5x^2(3x-5)\\)", "a term equal to the GCF leaves 1"],
    ["3.3 \\(x^2+bx+c\\)", "product \\(c\\), sum \\(b\\)", "\\(x^2+2x-35=(x+7)(x-5)\\)", "check both sum and product"],
    ["3.4 \\(ax^2+bx+c\\)", "product \\(a\\cdot c\\), sum \\(b\\); split and group", "\\(6x^2+x-12=(2x+3)(3x-4)\\)", "use \\(a\\cdot c\\), not \\(c\\)"],
    ["3.5 Special products", "\\(a^2-b^2\\); \\((a\\pm b)^2\\)", "\\(9x^2+30x+25=(3x+5)^2\\)", "\\(a^2+b^2\\) does not factor"],
  ])),

  section("📌 A factoring strategy", keyIdea(String.raw`<strong>1.</strong> Take out the GCF (a negative one if the first term is negative). <strong>2.</strong> Count the terms. <strong>Two terms:</strong> difference of squares? <strong>Three terms:</strong> perfect square? If not, \(a=1\) → sum and product; \(a\ne1\) → decomposition. <strong>Four terms:</strong> grouping. <strong>3.</strong> Check each factor — can it be factored again? <strong>4.</strong> Check by expanding.`)),

  practice([
    q("strategy", String.raw`Best first step for \(6x^2+9x\)?`, choice(["take out the common factor", "difference of squares", "decomposition", "grouping"], 0),
      "Do all the terms share a factor?", [String.raw`GCF \(3x\): \(3x(2x+3)\).`], "common factor"),
    q("strategy", String.raw`Which method fits \(4x^2-9\)?`, choice(["difference of squares", "sum and product", "grouping", "perfect-square trinomial"], 0),
      "Two perfect squares, minus between.", [String.raw`\((2x-3)(2x+3)\).`], "difference of squares"),
    q("strategy", String.raw`Which method fits \(x^2+3x-10\)?`, choice(["sum and product", "decomposition", "difference of squares", "grouping"], 0),
      "Leading coefficient 1.", [String.raw`\(5\) and \(-2\): \((x+5)(x-2)\).`], "sum and product"),
    q("strategy", String.raw`Which method fits \(6x^2+x-2\)?`, choice(["decomposition", "sum and product", "difference of squares", "common factor only"], 0),
      "Leading coefficient not 1, no common factor.", [String.raw`\(a\cdot c=-12\): \(4\) and \(-3\): \((3x+2)(2x-1)\).`], "decomposition"),
    q("strategy", String.raw`Which method fits \(ax+ay+bx+by\)?`, choice(["grouping", "difference of squares", "decomposition", "perfect square"], 0),
      "Four terms.", [String.raw`\(a(x+y)+b(x+y)=(x+y)(a+b)\).`], "grouping"),
  ]),

  examples([
    ["Factor fully in two steps", String.raw`Factor fully: \(3x^3-12x\).`,
      [String.raw`GCF \(3x\): \(3x(x^2-4)\).`, String.raw`\(x^2-4\) is a difference of squares: \((x-2)(x+2)\).`],
      String.raw`\(3x(x-2)(x+2)\)`],
    ["Common factor, then a trinomial", String.raw`Factor fully: \(2x^2+8x-42\).`,
      [String.raw`GCF 2: \(2(x^2+4x-21)\).`, String.raw`Product \(-21\), sum 4: \(7\) and \(-3\).`],
      String.raw`\(2(x+7)(x-3)\)`],
    ["Expand, simplify, then factor", String.raw`Simplify \((x+4)^2-(x-2)(x+2)\) and factor the result.`,
      [String.raw`\((x^2+8x+16)-(x^2-4)=8x+20\).`, String.raw`GCF 4: \(4(2x+5)\).`],
      String.raw`\(8x+20=4(2x+5)\)`],
    ["An area problem", String.raw`A square of side \(x+1\) is cut from a square of side \(2x+3\). Write the remaining area in factored form.`,
      [String.raw`Area \(=(2x+3)^2-(x+1)^2\) — a difference of squares.`, String.raw`\(=[(2x+3)-(x+1)][(2x+3)+(x+1)]=(x+2)(3x+4)\).`, String.raw`Check: \(4x^2+12x+9-(x^2+2x+1)=3x^2+10x+8=(x+2)(3x+4)\) ✓`],
      String.raw`\((x+2)(3x+4)\)`,
      `<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 320 250" width="320" height="250" style="max-width:100%;height:auto;" font-family="Arial, sans-serif"><rect x="30" y="20" width="210" height="210" fill="#dbeafe" stroke="#1e40af" stroke-width="3"/><rect x="150" y="140" width="90" height="90" fill="#fff" stroke="#be123c" stroke-width="3" stroke-dasharray="7 5"/><text x="135" y="14" font-size="15" text-anchor="middle" fill="#1e40af" font-weight="700">2x + 3</text><text x="195" y="190" font-size="14" text-anchor="middle" fill="#be123c" font-weight="700">x + 1</text><text x="90" y="110" font-size="14" text-anchor="middle" fill="#0f172a">remaining area</text></svg><div style="font-size:13px;color:#64748b;">(2x + 3)² − (x + 1)²</div></div>`],
    ["A missing coefficient", String.raw`For which values of \(k\) is \(x^2+kx+36\) a perfect square?`,
      [String.raw`\(36=6^2\), so it must be \((x+6)^2\) or \((x-6)^2\).`, String.raw`Middle term \(\pm2\times x\times6=\pm12x\).`],
      String.raw`\(k=12\) or \(k=-12\)`],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses one lesson's skill — decide which first.</p>`),

  practice([
    q("factor", String.raw`Factor \(x^2-6x-16\).`, fexpr("(x-8)(x+2)"),
      "Product −16, sum −6.", [String.raw`\(-8\) and \(2\).`], String.raw`\(x^2-6x-16=(x-8)(x+2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor fully: \(5x^2-20\).`, fexpr("5(x-2)(x+2)"),
      "Common factor, then a pattern.", [String.raw`\(5(x^2-4)\).`], String.raw`\(5x^2-20=5(x-2)(x+2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("expand", String.raw`Expand and simplify \((2x-3)(x+5)\).`, expr("2x^2+7x-15"),
      "Four products.", [String.raw`\(2x^2+10x-3x-15\).`], String.raw`\(2x^2+7x-15\)`),
    q("factor", String.raw`Factor \(2x^2+x-6\).`, fexpr("(2x-3)(x+2)"),
      "a·c = −12, sum 1.", [String.raw`\(4\) and \(-3\): \(2x^2+4x-3x-6=2x(x+2)-3(x+2)\).`], String.raw`\(2x^2+x-6=(2x-3)(x+2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor \(49x^2-28x+4\).`, fexpr("(7x-2)^2"),
      "Check for a perfect square.", [String.raw`\((7x)^2\), \(2^2\), and \(2\times7x\times2=28x\).`], String.raw`\(49x^2-28x+4=(7x-2)^2\)`, { placeholder: "a product, like (x+a)(x-b)" }),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "I can expand and simplify products of polynomials, including squares and sum × difference."],
      ["3.2", "I can take out the GCF, a common bracket, and factor four terms by grouping."],
      ["3.3", "I can factor x² + bx + c for every sign pattern."],
      ["3.4", "I can factor ax² + bx + c by decomposition."],
      ["3.5", "I can recognize and factor differences of squares and perfect-square trinomials."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("decompositionLab", { init: [4, 4, -15] }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Forgetting the GCF, (a + b)² = a² + b², sign errors when grouping, using c instead of a·c, and trying to factor a sum of squares."],
      ["How do I know I have factored fully?", "Look at each factor: no common factor left inside, no difference of squares or trinomial that still factors."],
      ["Should I always check by expanding?", "Yes — it takes seconds and catches sign errors."],
      ["How does this chapter connect to the next ones?", "Factored form gives the zeros of a parabola (Chapter 4), and factoring solves quadratic equations (Chapter 5)."],
    ],
    summary: [
      "Expand: every term × every term, then collect.",
      "Factor: GCF first, then count the terms.",
      "Trinomials: sum/product (a = 1) or decomposition (a ≠ 1); check for perfect squares.",
      "Check fully factored and expand to verify.",
    ],
    next: "Write the Chapter 3 test. Chapter 4 turns to quadratic relations.",
  }),
];
