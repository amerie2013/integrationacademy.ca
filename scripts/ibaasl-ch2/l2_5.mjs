// IB AA SL 2.5 — Composite Functions: evaluating f(g(a)), finding (f∘g)(x), order matters, solving, decomposing
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { fig } from "../ibaasl-ch1/figs.mjs";

export const TITLE = "2.5 Composite Functions";
export const ID = "983e7f06-055f-4bba-a121-f258a4a19f6a";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const lab = (v) => String(Math.round(v * 100) / 100).replace(/-/g, "−");

/** three-column mapping x → g(x) → f(g(x)) */
export function chainDoc(xs, g, f, { gl = "g", fl = "f" } = {}) {
  const W = 420, H = xs.length * 44 + 60, cols = [70, 210, 350], Y = (i) => 52 + i * 44;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Arial, sans-serif"><rect width="${W}" height="${H}" fill="#fff"/><defs><marker id="ca" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker></defs>`;
  ["x", `${gl}(x)`, `${fl}(${gl}(x))`].forEach((t, i) => { s += `<text x="${cols[i]}" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="${["#1d4ed8", "#b45309", "#6d28d9"][i]}">${t}</text>`; });
  s += `<text x="${(cols[0] + cols[1]) / 2}" y="40" font-size="12" text-anchor="middle" fill="#475569">apply ${gl}</text><text x="${(cols[1] + cols[2]) / 2}" y="40" font-size="12" text-anchor="middle" fill="#475569">apply ${fl}</text>`;
  xs.forEach((x, i) => {
    const gx = g(x), fgx = f(gx);
    s += `<line x1="${cols[0] + 22}" y1="${Y(i) - 5}" x2="${cols[1] - 24}" y2="${Y(i) - 5}" stroke="#475569" stroke-width="1.8" marker-end="url(#ca)"/><line x1="${cols[1] + 24}" y1="${Y(i) - 5}" x2="${cols[2] - 26}" y2="${Y(i) - 5}" stroke="#475569" stroke-width="1.8" marker-end="url(#ca)"/>`;
    [[x, "#1d4ed8"], [gx, "#b45309"], [fgx, "#6d28d9"]].forEach(([v, c], k) => { s += `<text x="${cols[k]}" y="${Y(i)}" font-size="16" font-weight="700" text-anchor="middle" fill="${c}">${lab(v)}</text>`; });
  });
  return s + "</svg>";
}

export const blocks = () => [
  intro({
    icon: "⛓️",
    title: "Composite Functions",
    overview: S`Many processes happen in stages: a price has tax added and then a discount taken off; a temperature is converted and then rounded. Feeding the output of one function into another makes a composite function. In this lesson you will evaluate and simplify composite functions, see why the order matters, solve equations involving them, and break a complicated function into simpler pieces.`,
    goals: [
      "read \\((f\\circ g)(x)=f(g(x))\\) as 'apply \\(g\\) first, then \\(f\\)';",
      "evaluate composite functions from formulas, tables and graphs;",
      "find and simplify \\((f\\circ g)(x)\\) and \\((g\\circ f)(x)\\), and show that they usually differ;",
      "solve equations involving composite functions;",
      "decompose a function into a composite of two simpler functions.",
    ],
    curriculum: "SL 2.5 (composite functions (f∘g)(x); the identity function)",
    prior: [
      [S`For \(f(x)=2x+3\), find \(f(9)\).`, S`\(21\).`],
      [S`Expand \((3x-1)^2\).`, S`\(9x^2-6x+1\).`],
      [S`Solve \((x+4)^2=25\).`, S`\(x=1\) or \(x=-9\).`],
    ],
    words: [
      ["Composite function", "a function applied to the output of another", "\\(f(g(x))\\)"],
      ["\\(f\\circ g\\)", "read 'f of g': \\(g\\) acts first", "\\((f\\circ g)(3)=f(g(3))\\)"],
      ["Inner function", "the one applied first", "\\(g\\) in \\(f(g(x))\\)"],
      ["Outer function", "the one applied second", "\\(f\\) in \\(f(g(x))\\)"],
      ["Identity function", "\\(I(x)=x\\): leaves every input unchanged", "\\(f\\circ I=f\\)"],
    ],
  }),

  section("📌 Apply the inner function first", S`
  <p>For \(f(x)=2x+3\) and \(g(x)=x^2\), \((f\circ g)(3)=f(g(3))=f(9)=21\), but \((g\circ f)(3)=g(f(3))=g(9)=81\).</p>
  ${fig(chainDoc([-2, 0, 1, 3], (x) => x * x, (x) => 2 * x + 3), "f(g(x)) with g(x) = x² first and then f(x) = 2x + 3")}
  ${table(["x", "−2", "0", "1", "3"], [["g(x) = x²", "4", "0", "1", "9"], ["f(g(x)) = 2x² + 3", "11", "3", "5", "21"], ["f(x) = 2x + 3", "−1", "3", "5", "9"], ["g(f(x)) = (2x + 3)²", "1", "9", "25", "81"]])}
  ${keyIdea(S`\((f\circ g)(x)=f(g(x))\): the function written next to \(x\) acts first. In general \(f\circ g\ne g\circ f\).`)}`),

  section("📌 Composite formulas and their graphs", S`
  <p>To find \((f\circ g)(x)\), substitute the whole expression \(g(x)\) for \(x\) in \(f\). With \(f(x)=2x+3\) and \(g(x)=x^2\): \((f\circ g)(x)=2x^2+3\) and \((g\circ f)(x)=(2x+3)^2\).</p>
  ${plane({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 16 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * x * x + 3, color: "violet" }, { f: (x) => (2 * x + 3) ** 2, color: "green" }], points: [P(0, 3, "(0, 3)", "violet"), P(0, 9, "(0, 9)", "green")] }, "Violet: f∘g = 2x² + 3. Green: g∘f = (2x + 3)². Different functions")}
  ${watchOut([
    "(f∘g)(x) means f(g(x)) — work from the inside out.",
    "Substitute g(x) in brackets: f(x) = 3x − 1 gives f(x² + 2) = 3(x² + 2) − 1.",
    "f(x)·g(x) is a product, not a composite.",
    "The domain of f∘g only contains x-values whose g(x) lies in the domain of f.",
  ])}`),

  section("📌 Explore", S`<p>Choose \(f\) and \(g\) and move \(x\). The two chains show \(x\to g\to f\) and \(x\to f\to g\); the graphs show \(f\circ g\) (violet) and \(g\circ f\) (green, dashed). Find a pair for which the order does not matter.</p>`),

  widget("compositeLab", { init: ["dbl", "sq"] }),

  examples([
    ["Level 1 · Evaluating", S`For \(f(x)=2x+3\) and \(g(x)=x^2\), find \(f(g(3))\) and \(g(f(3))\).`,
      [S`\(g(3)=9\), so \(f(g(3))=f(9)=21\).`, S`\(f(3)=9\), so \(g(f(3))=g(9)=81\).`],
      S`\(21\) and \(81\)`],
    ["Level 1 · From tables", S`\(g(1)=4\), \(g(2)=-1\), \(f(4)=-2\), \(f(-1)=6\). Find \((f\circ g)(1)\) and \((f\circ g)(2)\).`,
      [S`\((f\circ g)(1)=f(g(1))=f(4)=-2\).`, S`\((f\circ g)(2)=f(g(2))=f(-1)=6\).`],
      S`\(-2\) and \(6\)`],
    ["Level 2 · Composite formulas", S`For \(f(x)=3x-1\) and \(g(x)=x^2+2\), find \((f\circ g)(x)\) and \((g\circ f)(x)\).`,
      [S`\((f\circ g)(x)=3(x^2+2)-1=3x^2+5\).`, S`\((g\circ f)(x)=(3x-1)^2+2=9x^2-6x+3\).`],
      S`\(3x^2+5\) and \(9x^2-6x+3\)`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 20 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 3 * x * x + 5, color: "violet" }, { f: (x) => 9 * x * x - 6 * x + 3, color: "green" }] }, "Violet: f∘g. Green: g∘f")],
    ["Level 2 · Solving with a composite", S`For \(f(x)=x+4\) and \(g(x)=x^2\), solve \((g\circ f)(x)=25\).`,
      [S`\((g\circ f)(x)=(x+4)^2\).`, S`\((x+4)^2=25\Rightarrow x+4=\pm5\).`],
      S`\(x=1\) or \(x=-9\)`],
    ["Level 3 · Decomposing", S`Write \(h(x)=\sqrt{5x-2}\) as \(f(g(x))\), and state the domain of \(h\).`,
      [S`Inner: \(g(x)=5x-2\); outer: \(f(x)=\sqrt x\).`, S`\(f\) needs \(g(x)\ge0\): \(5x-2\ge0\Rightarrow x\ge0.4\).`],
      S`\(g(x)=5x-2\), \(f(x)=\sqrt x\); domain \(x\ge0.4\)`,
      fig(chainDoc([0.4, 2, 3.6], (x) => 5 * x - 2, (x) => Math.sqrt(x)))],
  ]),

  practice([
    q("Level 1 · evaluate", S`\(f(x)=x+5\), \(g(x)=3x\). Find \(f(g(2))\).`, num(11),
      "g(2) first.", [S`\(g(2)=6\), \(f(6)=11\).`], S`\(11\)`),
    q("Level 1 · evaluate", S`\(f(x)=x+5\), \(g(x)=3x\). Find \(g(f(2))\).`, num(21),
      "f(2) first.", [S`\(f(2)=7\), \(g(7)=21\).`], S`\(21\)`),
    q("Level 2 · evaluate", S`\(f(x)=x^2\), \(g(x)=x-4\). Find \((f\circ g)(1)\).`, num(9),
      "g acts first.", [S`\(g(1)=-3\), \(f(-3)=9\).`], S`\(9\)`),
    q("Level 2 · self-composite", S`\(f(x)=2x+1\). Find \((f\circ f)(3)\).`, num(15),
      "Apply f twice.", [S`\(f(3)=7\), \(f(7)=15\).`], S`\(15\)`),
    q("Level 2 · solve", S`\(f(x)=x-3\), \(g(x)=x^2\). Solve \((g\circ f)(x)=16\) and give the larger solution.`, num(7),
      "(x − 3)² = 16.", [S`\(x-3=\pm4\Rightarrow x=7\) or \(-1\).`], S`\(7\)`),
  ]),

  ...hard([
    ["Find the linear function", S`\(f(x)=ax+b\) and \((f\circ f)(x)=9x+8\). Find all possible \(a\) and \(b\).`,
      [S`\((f\circ f)(x)=a(ax+b)+b=a^2x+ab+b\).`, S`Compare: \(a^2=9\) and \(ab+b=8\).`, S`\(a=3\): \(4b=8\), \(b=2\). \(a=-3\): \(-2b=8\), \(b=-4\).`],
      S`\(f(x)=3x+2\) or \(f(x)=-3x-4\)`],
    ["Order and domain", S`\(f(x)=\sqrt{x-1}\) and \(g(x)=x^2+1\). Find \((f\circ g)(x)\) and \((g\circ f)(x)\) with their domains.`,
      [S`\((f\circ g)(x)=\sqrt{x^2+1-1}=\sqrt{x^2}=|x|\), for every real \(x\) (since \(x^2+1\ge1\)).`, S`\((g\circ f)(x)=(\sqrt{x-1})^2+1=x\), but only for \(x\ge1\) (the domain of \(f\)).`, S`So the composites look simple but have different domains and graphs.`],
      S`\(f\circ g=|x|\) (all \(x\)); \(g\circ f=x\) (\(x\ge1\))`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -1, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.abs(x), color: "violet" }, { f: (x) => x, a: 1, color: "green" }], points: [P(1, 1, "(1, 1)", "green")] }, "Violet: f∘g = |x|. Green: g∘f = x for x ≥ 1")],
  ], [
    q("Level 3 · undoing", S`\(f(x)=2x-3\) and \(g(x)=\dfrac{x+3}{2}\). Find \((f\circ g)(10)\).`, num(10),
      "g undoes f.", [S`\(g(10)=6.5\), \(f(6.5)=10\).`], S`\(10\)`),
    q("Level 3 · equal composites", S`\(f(x)=x^2+1\), \(g(x)=x-2\). Solve \((f\circ g)(x)=(g\circ f)(x)\).`, num(1.5),
      "(x − 2)² + 1 = x² − 1.", [S`\(-4x+5=-1\).`], S`\(1.5\)`),
    q("Level 3 · excluded value", S`\(f(x)=\dfrac1x\) and \(g(x)=x+3\). Which value of \(x\) is not in the domain of \(f\circ g\)?`, num(-3),
      "f cannot take 0.", [S`\(g(x)=0\) when \(x=-3\).`], S`\(-3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I remember the order?", "Read f(g(x)) from the inside out: x goes into g first."],
      ["Is f∘g ever equal to g∘f?", "Sometimes, e.g. when g is the inverse of f, or both add constants. In general they differ."],
      ["What is f∘f?", "f applied twice: f(f(x))."],
      ["Why does the domain matter?", "If g(x) is outside the domain of f, then f(g(x)) cannot be evaluated."],
      ["How do I decompose h(x)?", "Ask what is done to x first (that is g) and what is done to the result (that is f)."],
    ],
    summary: [
      "(f∘g)(x) = f(g(x)): g first, then f.",
      "Substitute g(x) in brackets into f.",
      "Usually f∘g ≠ g∘f.",
      "Decompose by spotting the inner and outer operations.",
    ],
    next: "2.6 reverses a function: inverse functions and their graphs.",
  }),
];
