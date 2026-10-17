// MTH1W 4.6 — Transformations of Lines (self-study format): effects of changing m and b
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";

export const TITLE = "4.6 Transformations of Lines";

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Transformations of Lines",
    overview: String.raw`Every line \(y=mx+b\) can be produced from the simplest line \(y=x\) by changing two numbers. Changing \(b\) <strong>translates</strong> the line up or down without changing its direction. Changing \(m\) <strong>rotates</strong> the line about its y-intercept, making it steeper, flatter or downward. In this lesson you will predict and describe these changes, and connect them to real situations such as a price increase.`,
    goals: [
      "describe the effect of changing \\(b\\): a vertical translation, giving a parallel line;",
      "describe the effect of changing \\(m\\): a rotation about the y-intercept (steeper, flatter, rising, falling);",
      "describe the effect of changing the sign of \\(m\\);",
      "write the equation of a line after a described transformation;",
      "interpret changes in m and b in a real situation.",
    ],
    curriculum: "C4.2, C4.3 (effects of changing the rate of change and initial value)",
    prior: [
      [String.raw`What are \(m\) and \(b\) in \(y=-3x+7\)?`, String.raw`\(m=-3\), \(b=7\).`],
      [String.raw`Which is steeper: \(y=\tfrac12x\) or \(y=2x\)?`, String.raw`\(y=2x\).`],
      [String.raw`Where does \(y=4x-5\) cross the y-axis?`, String.raw`At \((0,-5)\).`],
    ],
    words: [
      ["Translation", "a slide; here, up or down by changing b", "\\(y=2x\\to y=2x+3\\)"],
      ["Rotation", "a turn; here, about the y-intercept by changing m", "\\(y=x+1\\to y=4x+1\\)"],
      ["Reflection", "a mirror image; changing the sign of m reflects the line in the y-axis", "\\(y=3x-2\\to y=-3x-2\\)"],
      ["Family of lines", "lines that share a slope (parallel) or an intercept", ""],
    ],
  }),

  section("📌 Changing b: translations", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 1, b: 0, color: "gray", label: "y = x", lx: 4 }, { m: 1, b: 3, color: "blue", label: "y = x + 3", lx: 2.5 }, { m: 1, b: -2, color: "red", label: "y = x − 2", lx: 4.2 }] }, "Same slope, different b: the lines are parallel translations of y = x.")}
  <p>Adding \(3\) to every y-value slides every point up \(3\). The slope does not change, so the new line is <strong>parallel</strong> to the old one.</p>`),

  section("📌 Changing m: rotations and reflections", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 0.5, b: 1, color: "green", label: "m = ½", lx: 4.5 }, { m: 1, b: 1, color: "gray", label: "m = 1", lx: 4 }, { m: 3, b: 1, color: "blue", label: "m = 3", lx: 1.6 }, { m: -1, b: 1, color: "red", label: "m = −1", lx: -4.5 }], points: [{ x: 0, y: 1, color: "violet" }] }, "All four lines pass through (0, 1): changing m rotates the line about its y-intercept.")}
  ${table(["Change in m", "Effect"], [
    ["size of m increases (e.g. 1 → 3)", "steeper"],
    ["size of m decreases toward 0", "flatter; m = 0 is horizontal"],
    ["sign of m changes (e.g. 3 → −3)", "reflection in the y-axis: rising becomes falling"],
  ])}
  ${keyIdea(String.raw`<strong>b</strong> moves the line up or down (same direction). <strong>m</strong> turns the line about \((0,b)\). Together they can produce any non-vertical line from \(y=x\).`)}
  ${watchOut(["“Steeper” depends on the size of m, not its sign: y = −4x is steeper than y = 2x.", "Changing b does not change where the line crosses the x-axis by the same amount unless m = 1."])}
  <p>Use the explorer: fix the rise and run and change \(b\), then fix \(b\) and change the rise.</p>`),

  widget("slopeExplorer", { initRise: 1, initRun: 1, initB: 0 }),

  examples([
    ["A translation", String.raw`Describe how \(y=2x+3\) is related to \(y=2x\).`,
      [String.raw`Same slope \(2\); intercept \(0\to3\).`, "Every point moves up 3: a vertical translation; the lines are parallel."],
      "translated up 3 (parallel)"],
    ["A rotation", String.raw`Describe how \(y=4x+1\) is related to \(y=x+1\).`,
      [String.raw`Same intercept \((0,1)\); slope \(1\to4\).`, "The line rotates about (0, 1) and becomes steeper."],
      "rotated about (0, 1), steeper"],
    ["A reflection", String.raw`Compare \(y=3x-2\) and \(y=-3x-2\).`,
      [String.raw`Same intercept; the slope changes sign.`, String.raw`The point \((1,1)\) on the first line matches \((-1,1)\) on the second: a reflection in the y-axis.`],
      "reflections of each other in the y-axis"],
    ["Several changes at once", String.raw`Describe \(y=-\tfrac12x+5\) as a transformation of \(y=x\).`,
      [String.raw`\(m\): \(1\to-\frac12\): flatter (size \(\frac12\)) and falling (reflected).`, String.raw`\(b\): \(0\to5\): translated up \(5\).`],
      "flatter, reflected, then translated up 5"],
    ["A real change", String.raw`A taxi charged \(C=2.5d+4\). The fee rises to \(6\) dollars and the rate to \(2.80\) dollars per km. Write the new equation, describe the change to the graph, and find the extra cost of a \(10\)-km ride.`,
      [String.raw`New: \(C=2.8d+6\).`, "b: 4 → 6 (up 2); m: 2.5 → 2.8 (steeper).", String.raw`Old \(10\) km: \(29\); new: \(34\); extra \(5\) dollars.`],
      String.raw`\(C=2.8d+6\); \(5\) dollars more`,
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 45 }, lines: [{ m: 2.5, b: 4, color: "gray", label: "old", lx: 10.5 }, { m: 2.8, b: 6, color: "blue", label: "new", lx: 9 }], xlabel: "distance d (km)", ylabel: "cost C", step: { x: 2, y: 5 } })],
  ]),

  practice([
    q("translation", String.raw`\(y=-2x+1\) is translated down \(5\). Write the new equation.`, expr("-2x-4"),
      "Only b changes.", [String.raw`\(1-5=-4\).`], String.raw`\(y=-2x-4\)`, { placeholder: "y = …" }),
    q("steeper", String.raw`Which change makes \(y=2x+1\) steeper?`, choice([String.raw`change \(2\) to \(5\)`, String.raw`change \(1\) to \(5\)`, String.raw`change \(2\) to \(1\)`, String.raw`change \(2\) to \(-1\)`], 0),
      "Steepness depends on the size of m.", [String.raw`\(|5|>|2|\).`], String.raw`\(m: 2\to5\)`),
    q("reflection", String.raw`Write the reflection of \(y=\tfrac34x+2\) in the y-axis.`, expr("-0.75x+2"),
      "Change the sign of the slope.", [String.raw`\(m\to-\frac34\), \(b\) unchanged.`], String.raw`\(y=-\tfrac34x+2\)`, { placeholder: "y = …" }),
    q("intercept", String.raw`The line \(y=5x-3\) is translated up \(7\). Where does the new line cross the y-axis? (y-value)`, num(4),
      "Add 7 to b.", [String.raw`\(-3+7=4\).`], String.raw`\(4\)`),
    q("families", "Which lines are parallel to each other?", choice([String.raw`\(y=3x-1\) and \(y=3x+4\)`, String.raw`\(y=3x-1\) and \(y=-3x-1\)`, String.raw`\(y=3x\) and \(y=x+3\)`, String.raw`\(y=-x\) and \(y=x\)`], 0),
      "Parallel lines have equal slopes.", ["Only the first pair share a slope (3)."], String.raw`\(y=3x-1\) and \(y=3x+4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does changing b give a parallel line?", "The slope (direction) is unchanged; every point just slides up or down by the same amount."],
      ["About which point does a line rotate when m changes?", "The y-intercept (0, b), because x = 0 makes mx = 0 whatever m is."],
      ["Is a line with m = −5 steeper than one with m = 3?", "Yes: steepness is the size |m|. The sign only tells you whether it rises or falls."],
      ["What transformation turns y = x into y = −x?", "A reflection in the y-axis (equivalently in the x-axis for this line)."],
      ["How does this connect to real situations?", "Changing the fixed fee moves the graph up or down; changing the rate makes it steeper or flatter. Comparing old and new graphs shows when the change matters most."],
    ],
    summary: [
      "Change b: vertical translation; the new line is parallel.",
      "Change m: rotation about (0, b); larger |m| is steeper.",
      "Change the sign of m: reflection in the y-axis.",
    ],
    next: "4.7 finds the equation of a line from a graph, two points, a point and a slope, or a table.",
  }),
];
