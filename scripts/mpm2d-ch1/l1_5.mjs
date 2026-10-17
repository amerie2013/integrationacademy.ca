// MPM2D 1.5 — Solving Problems with Linear Systems (self-study format): defining variables, writing two
// equations, mixtures, interest, rates (wind/current), costs and break-even, interpreting answers
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "1.5 Solving Problems with Linear Systems";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Solving Problems with Linear Systems",
    overview: String.raw`Most problems with two unknowns hide two facts — a total and a value, a distance going and a distance returning, two plans to compare. Each fact becomes one equation, and the system's solution answers the question. In this lesson you will translate words into systems, solve them with the most efficient method, and interpret and check the answers in context, for tickets, mixtures, investments, travel with wind or current, and costs.`,
    goals: [
      "define two variables clearly, with units;",
      "write one equation for each fact in a problem;",
      "solve the system with an efficient method;",
      "interpret the solution in context and check it against the original words;",
      "recognize common problem types: totals and values, mixtures, interest, rates with wind or current, break-even.",
    ],
    curriculum: "AG1 (solve problems from realistic situations represented by linear systems)",
    prior: [
      [String.raw`\(4\%\) of \(x\) dollars?`, String.raw`\(0.04x\).`],
      [String.raw`Distance at \(v\) km/h for \(3\) h?`, String.raw`\(3v\) km.`],
      [String.raw`Acid in \(x\) L of a \(30\%\) solution?`, String.raw`\(0.3x\) L.`],
    ],
    words: [
      ["Define a variable", "say exactly what it stands for, with units", "x = litres of 30% solution"],
      ["Value equation", "number × price for each kind, added", "12a + 7s = 2140"],
      ["Rate × time = distance", "for travel problems", "d = vt"],
      ["Ground speed", "speed with a wind or current: v ± w", "plane with tailwind: v + w"],
    ],
  }),

  section("📌 A plan for every problem", String.raw`
  ${table(["Step", "Ask yourself"], [
    ["1. Define", "What are the two unknowns? Name them with units."],
    ["2. Translate", "What two facts link them? Write one equation for each."],
    ["3. Solve", "Which method fits best — substitution or elimination?"],
    ["4. Answer & check", "Does the pair make sense and satisfy both facts in the words?"],
  ])}
  ${table(["Problem type", "Equation 1", "Equation 2"], [
    ["tickets, coins", "count: \\(x+y=\\text{total}\\)", "value: \\(px+qy=\\text{money}\\)"],
    ["mixtures", "volume: \\(x+y=V\\)", "amount: \\(ax+by=c\\,V\\)"],
    ["investments", "principal: \\(x+y=P\\)", "interest: \\(r_1x+r_2y=I\\)"],
    ["wind / current", "with: \\(t_1(v+w)=d\\)", "against: \\(t_2(v-w)=d\\)"],
  ])}`),

  widget("systemStory"),

  section("📌 Strategy", watchOut([
    "Write the meaning of each variable before writing equations.",
    "Use the same units throughout (minutes vs hours, cents vs dollars).",
    "Percents become decimals: 4% → 0.04. Multiply by 100 to clear decimals if you like.",
    "Answer the question asked, in a sentence, with units.",
  ])),

  examples([
    ["Totals and values", String.raw`A school sold \(340\) tickets to a concert: adults for \(\$15\) and students for \(\$8\). Sales were \(\$3840\). How many of each were sold?`,
      [String.raw`Let \(a\) = adult tickets, \(s\) = student tickets: \(a+s=340\) and \(15a+8s=3840\).`, String.raw`From the first, \(s=340-a\): \(15a+8(340-a)=3840\Rightarrow7a+2720=3840\Rightarrow a=160\).`, String.raw`\(s=340-160=180\). Check: \(15(160)+8(180)=2400+1440=3840\) ✓`],
      "160 adult and 180 student tickets"],
    ["A mixture", String.raw`How many litres of a \(20\%\) salt solution and a \(50\%\) salt solution must be mixed to make \(12\) L of a \(30\%\) solution?`,
      [String.raw`Let \(x\) = L of 20%, \(y\) = L of 50%: \(x+y=12\) and \(0.2x+0.5y=0.3(12)=3.6\).`, String.raw`Multiply the second by 10: \(2x+5y=36\). Subtract \(2(x+y)=24\): \(3y=12\Rightarrow y=4\), \(x=8\).`, String.raw`Check: \(0.2(8)+0.5(4)=1.6+2=3.6\) ✓`],
      String.raw`\(8\) L of 20% and \(4\) L of 50%`],
    ["Two investments", String.raw`Priya invests \(\$8000\), part at \(5\%\) and the rest at \(3\%\) per year. After one year the total interest is \(\$330\). How much is invested at each rate?`,
      [String.raw`\(x+y=8000\) and \(0.05x+0.03y=330\).`, String.raw`×100: \(5x+3y=33\,000\). Subtract \(3(x+y)=24\,000\): \(2x=9000\Rightarrow x=4500\), \(y=3500\).`, String.raw`Check: \(225+105=330\) ✓`],
      String.raw`\(\$4500\) at 5% and \(\$3500\) at 3%`],
    ["Wind speed", String.raw`A plane flies \(1800\) km with the wind in \(3\) h and returns against the wind in \(4\) h. Find the plane's speed in still air and the wind speed.`,
      [String.raw`Let \(p\) = plane speed, \(w\) = wind speed (km/h): \(3(p+w)=1800\) and \(4(p-w)=1800\).`, String.raw`So \(p+w=600\) and \(p-w=450\). Add: \(2p=1050\Rightarrow p=525\); \(w=75\).`, String.raw`Check: \(3(600)=1800\) ✓, \(4(450)=1800\) ✓`],
      "525 km/h in still air; wind 75 km/h"],
    ["Break-even", String.raw`A small business makes phone cases. Costs are \(\$1200\) per month plus \(\$4\) per case; each case sells for \(\$10\). How many cases must be sold to break even?`,
      [String.raw`Cost \(C=4n+1200\); revenue \(R=10n\).`, String.raw`Break even when \(C=R\): \(10n=4n+1200\Rightarrow n=200\) (\(\$2000\)).`, "Above 200 cases the business makes a profit (the revenue line is above the cost line)."],
      "200 cases",
      plane({ view: { xmin: 0, xmax: 350, ymin: 0, ymax: 3500 }, lines: [{ m: 4, b: 1200, color: "red", label: "cost", lx: 280 }, { m: 10, b: 0, color: "green", label: "revenue", lx: 250 }], points: [{ x: 200, y: 2000, label: "(200, 2000)", color: "blue" }], xlabel: "cases", ylabel: "dollars", step: { x: 50, y: 500 } })],
  ]),

  practice([
    q("numbers", String.raw`Two numbers add to \(45\) and their difference is \(13\). What is the larger number?`, num(29),
      "x + y = 45 and x − y = 13.", [String.raw`Add: \(2x=58\).`], String.raw`\(29\)`),
    q("coins", String.raw`A jar has \(30\) coins, all toonies and loonies, worth \(\$47\). How many toonies are there?`, num(17),
      "t + l = 30 and 2t + l = 47.", [String.raw`Subtract: \(t=17\).`], String.raw`\(17\)`),
    q("mixture", String.raw`How many litres of pure juice must be mixed with a \(40\%\) juice drink to make \(10\) L of \(70\%\) juice?`, num(5),
      "x + y = 10 and 1.0x + 0.4y = 7.", [String.raw`\(x+0.4(10-x)=7\Rightarrow0.6x=3\Rightarrow x=5\).`], String.raw`\(5\) L`),
    q("current", String.raw`A canoe goes \(24\) km downstream in \(2\) h and back upstream in \(3\) h. What is the speed of the current (km/h)?`, num(2),
      "b + c = 12 and b − c = 8.", [String.raw`Subtract: \(2c=4\).`], String.raw`\(2\) km/h`),
    q("interest", String.raw`\(\$5000\) is split between accounts paying \(4\%\) and \(6\%\). The yearly interest is \(\$260\). How much is in the \(6\%\) account?`, num(3000),
      "x + y = 5000 and 0.04x + 0.06y = 260.", [String.raw`\(0.04(5000-y)+0.06y=260\Rightarrow0.02y=60\Rightarrow y=3000\).`], String.raw`\(\$3000\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find the two equations?", "Look for two separate facts. Usually one counts things (a total) and the other measures them (money, amount of acid, distance)."],
      ["Should I always use elimination for word problems?", "Use whichever fits. If one equation is x + y = total, substitution (y = total − x) is often quickest."],
      ["What if my answer is not a whole number when it should be?", "Recheck the equations and arithmetic. A fractional number of tickets means an error somewhere."],
      ["Why check in the words and not just the equations?", "If an equation was written incorrectly, the solution will satisfy it but not the actual problem."],
      ["What does the break-even point tell a business?", "The number of items where cost equals revenue. Selling more gives a profit; selling fewer gives a loss."],
    ],
    summary: [
      "Define two variables; write one equation per fact; solve; check in words.",
      "Totals and values, mixtures, investments, wind/current and break-even all fit the same pattern.",
      "Answer with a sentence and units.",
    ],
    next: "1.6 predicts how many solutions a system has without solving it.",
  }),
];
