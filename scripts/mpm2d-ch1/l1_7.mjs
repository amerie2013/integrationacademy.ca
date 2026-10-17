// MPM2D 1.7 — Chapter 1 Review (NEW lesson, placed after 1.6)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";

export const TITLE = "1.7 Chapter 1 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000107", position: 6 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 1 Review — Linear Systems",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, questions where you must choose the method, multi-step problems, mixed practice and a readiness checklist. Work through it after 1.1–1.6 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and the common mistake of each lesson;",
      "choose the most efficient method for a system;",
      "solve multi-step problems with linear systems;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "AG1 (whole chapter), with Grade 9 linear-relation review",
    prior: [
      [String.raw`Slope of \(3x+4y=12\)?`, String.raw`\(-\tfrac34\).`],
      [String.raw`Solve \(x+y=9\), \(x-y=1\).`, String.raw`\((5,4)\).`],
      [String.raw`Same slope, different intercepts: how many solutions?`, "None."],
    ],
    words: [
      ["Solution of a system", "point on both lines", "\\((2,3)\\)"],
      ["Substitution", "isolate, substitute, solve, back-substitute", ""],
      ["Elimination", "multiply, add/subtract to cancel a variable", ""],
      ["Inconsistent", "no solution (parallel lines)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["1.1 Linear relations", "m = Δy/Δx; y = mx + b ↔ Ax + By = C; intercepts; solving equations", "\\(3x+2y=8\\Rightarrow y=-\\tfrac32x+4\\)", "multiply every term to clear fractions"],
    ["1.2 Graphing", "solution = point of intersection; verify in both", "\\((4,3)\\) on both lines", "graphs may only estimate"],
    ["1.3 Substitution", "isolate a variable with coefficient ±1", "\\(y=2x+3\\) into the other", "use brackets"],
    ["1.4 Elimination", "equivalent systems; add opposites, subtract equals", "×3 and ×2, then add", "subtract every term"],
    ["1.5 Problems", "two facts → two equations; check in words", "mixtures, interest, wind", "define variables with units"],
    ["1.6 Number of solutions", "compare slopes or a₁/a₂, b₁/b₂, c₁/c₂", "parallel → none", "equal slopes need intercepts too"],
  ])),

  section("📌 Which method?", keyIdea(String.raw`<strong>A variable already alone (or coefficient ±1)?</strong> substitution. <strong>Both in standard form?</strong> elimination. <strong>Need a picture or an estimate, or comparing options?</strong> graphing. <strong>Only need to know how many solutions?</strong> compare slopes or ratios.`)),

  practice([
    q("method", String.raw`Best method for \(x=3y-2\) and \(4x+5y=26\)?`, choice(["substitution", "elimination", "graphing", "no method works"], 0),
      "x is isolated.", ["Substitute 3y − 2 for x."], "substitution"),
    q("method", String.raw`Best method for \(5x+3y=7\) and \(2x-7y=-12\)?`, choice(["elimination", "substitution", "graphing", "comparing slopes"], 0),
      "Standard form, no coefficient of ±1.", ["Elimination avoids fractions."], "elimination"),
    q("method", "To decide which of two phone plans is cheaper for different amounts of data, a good first step is to…", choice(["graph both cost lines", "add the two equations", "compare only the fixed fees", "find the slopes' product"], 0),
      "You need to see both sides of the break-even point.", ["The graph shows which line is lower on each side."], "graph both"),
    q("method", String.raw`Without solving, how many solutions has \(2x-5y=4\), \(-4x+10y=-8\)?`, choice(["infinitely many", "none", "exactly one", "two"], 0),
      "Compare ratios.", [String.raw`All ratios equal \(-\frac12\): the same line.`], "infinitely many"),
    q("method", "Solving a system, you reach 0 = −6. The system…", choice(["has no solution", "has infinitely many solutions", "has the solution (0, −6)", "was solved incorrectly for sure"], 0),
      "A false statement.", ["The lines are parallel."], "no solution"),
  ]),

  examples([
    ["A system with fractions", String.raw`Solve \(\frac{x}{3}+\frac{y}{2}=4\) and \(\frac{x}{2}-\frac{y}{4}=2\).`,
      [String.raw`Clear fractions: \(2x+3y=24\) (×6) and \(2x-y=8\) (×4).`, String.raw`Subtract: \(4y=16\Rightarrow y=4\); \(2x-4=8\Rightarrow x=6\).`, String.raw`Check: \(\frac63+\frac42=4\) ✓; \(\frac62-\frac44=2\) ✓`],
      String.raw`\((6,4)\)`],
    ["Two investments", String.raw`A club invests \(\$6000\): part in an account paying \(4.5\%\) per year and the rest in a bond paying \(3\%\) simple interest. After one year the interest totals \(\$234\). How much was invested at each rate?`,
      [String.raw`\(x+y=6000\) and \(0.045x+0.03y=234\).`, String.raw`×1000: \(45x+30y=234\,000\); subtract \(30(x+y)=180\,000\): \(15x=54\,000\Rightarrow x=3600\), \(y=2400\).`, String.raw`Check: \(162+72=234\) ✓`],
      String.raw`\(\$3600\) at 4.5%, \(\$2400\) at 3%`],
    ["Intersection of three lines", String.raw`Do \(x+y=5\), \(2x-y=4\) and \(x-3y=-3\) pass through one point?`,
      [String.raw`First two: add: \(3x=9\Rightarrow x=3\), \(y=2\).`, String.raw`Third: \(3-3(2)=-3\) ✓.`],
      String.raw`yes, all pass through \((3,2)\)`],
    ["A geometry problem", String.raw`A rectangle's perimeter is \(46\) cm and its length is \(5\) cm more than twice its width. Find its dimensions.`,
      [String.raw`\(2l+2w=46\) and \(l=2w+5\).`, String.raw`Substitute: \(2(2w+5)+2w=46\Rightarrow6w=36\Rightarrow w=6\); \(l=17\).`, String.raw`Check: \(2(17)+2(6)=46\) ✓`],
      "17 cm by 6 cm"],
    ["A parameter question", String.raw`For what value of \(k\) do \(y=kx+3\) and \(6x-2y=5\) never meet?`,
      [String.raw`Second line: \(y=3x-\frac52\), slope \(3\).`, String.raw`Parallel when \(k=3\) (intercepts \(3\ne-\frac52\)).`],
      String.raw`\(k=3\)`],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses more than one lesson.</p>`),

  practice([
    q("solve", String.raw`Solve \(3x+2y=11\), \(x-y=2\). What is \(x\)?`, num(3),
      "Substitute x = y + 2.", [String.raw`\(3(y+2)+2y=11\Rightarrow5y=5\Rightarrow y=1\); \(x=3\).`], String.raw`\(x=3\)`),
    q("solve", String.raw`Solve \(4x-3y=1\), \(6x+5y=11\). What is \(y\)?`, num(1),
      "Make the x-coefficients 12.", [String.raw`\(12x-9y=3\), \(12x+10y=22\); subtract: \(19y=19\).`], String.raw`\(y=1\)`),
    q("problem", String.raw`Adult swim passes cost \(\$6\) and child passes \(\$3.50\). \(80\) passes were sold for \(\$355\). How many adult passes?`, num(30),
      "a + c = 80 and 6a + 3.5c = 355.", [String.raw`\(6a+3.5(80-a)=355\Rightarrow2.5a=75\Rightarrow a=30\).`], String.raw`\(30\)`),
    q("wind", String.raw`A plane flies \(2100\) km in \(3\) h with the wind and in \(3.5\) h against it. What is the wind speed (km/h)?`, num(50),
      "p + w = 700, p − w = 600.", [String.raw`Subtract: \(2w=100\).`], String.raw`\(50\) km/h`),
    q("parameter", String.raw`For what \(m\) does \(2x+my=7\), \(6x+9y=21\) have infinitely many solutions?`, num(3),
      "The second equation is 3 times the first.", [String.raw`\(\frac26=\frac{m}{9}=\frac{7}{21}\Rightarrow m=3\).`], String.raw`\(m=3\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "I can find slopes, convert between forms, graph from intercepts and solve linear equations with fractions."],
      ["1.2", "I can check a point, solve by graphing and verify, and use graphs to compare options."],
      ["1.3", "I can solve systems by substitution and recognize special cases."],
      ["1.4", "I can solve systems by elimination, including multiplying both equations."],
      ["1.5", "I can set up and solve problems with linear systems and check the answer in context."],
      ["1.6", "I can predict the number of solutions and find parameter values."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("eliminationLab"),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Forgetting brackets in substitution, subtracting only some terms in elimination, multiplying only one side, not defining variables, and not checking in both equations."],
      ["How much work should I show?", "The system (with defined variables), the method steps, the solution as an ordered pair and a check — plus a sentence for word problems."],
      ["What if I run out of time on a system?", "Write the system and choose a method; most marks come from a correct set-up and method."],
      ["How does this chapter connect to the rest of the course?", "Analytic geometry (Chapter 2) uses intersections of lines for altitudes and bisectors; quadratic systems appear in Grade 11."],
    ],
    summary: [
      "Solution = intersection; verify in both equations.",
      "Substitution for isolated variables; elimination for standard form; graphing for pictures.",
      "Word problems: two facts → two equations → solve → check in words.",
      "One, none or infinitely many: compare slopes or coefficient ratios.",
    ],
    next: "Write the Chapter 1 test. Chapter 2 turns to analytic geometry.",
  }),
];
