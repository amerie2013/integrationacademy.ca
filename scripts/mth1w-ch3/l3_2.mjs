// MTH1W 3.2 — Building Code from Steps (self-study format, Python)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, txt, choice, py, ic, out, shell } from "./lib.mjs";

export const TITLE = "3.2 Building Code from Steps";

const FLOW = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 520 300" width="520" style="max-width:100%;height:auto;" role="img" aria-label="Flowchart of a savings loop"><g font-family="Arial" font-size="13" text-anchor="middle">
<rect x="200" y="8" width="120" height="34" rx="17" fill="#ede9fe" stroke="#6d28d9"/><text x="260" y="30" fill="#6d28d9" font-weight="700">Start</text>
<rect x="160" y="62" width="200" height="36" rx="4" fill="#dbeafe" stroke="#1e40af"/><text x="260" y="85" fill="#1e40af">savings = 250, weeks = 0</text>
<polygon points="260,118 360,152 260,186 160,152" fill="#fef3c7" stroke="#b45309"/><text x="260" y="156" fill="#b45309" font-weight="700">savings &lt; 1000 ?</text>
<rect x="380" y="134" width="130" height="36" rx="4" fill="#dbeafe" stroke="#1e40af"/><text x="445" y="150" fill="#1e40af">savings += 40</text><text x="445" y="164" fill="#1e40af">weeks += 1</text>
<rect x="190" y="208" width="140" height="34" rx="4" fill="#dcfce7" stroke="#15803d"/><text x="260" y="230" fill="#15803d">print(weeks)</text>
<rect x="200" y="258" width="120" height="34" rx="17" fill="#ede9fe" stroke="#6d28d9"/><text x="260" y="280" fill="#6d28d9" font-weight="700">End</text>
</g><g stroke="#475569" stroke-width="1.8" fill="none"><path d="M260,42 V60"/><path d="M260,98 V116"/><path d="M360,152 H378"/><path d="M445,134 V108 H275 V116"/><path d="M260,186 V206"/><path d="M260,242 V256"/></g>
<g font-family="Arial" font-size="12" fill="#475569"><text x="368" y="146">yes</text><text x="268" y="200">no</text></g></svg>
<div style="font-size:13px;color:#64748b;">A flowchart: the diamond is a decision; the arrow back up makes a loop.</div></div>`;

const W1 = `savings = 250
weeks = 0
while savings < 1000:
    savings = savings + 40
    weeks = weeks + 1
print("weeks:", weeks)
print("savings:", savings)`;
const W2 = `# Solve 7x - 12 = 5x + 30 by testing integers
for x in range(-50, 51):
    if 7 * x - 12 == 5 * x + 30:
        print("solution:", x)`;

const E1 = `for c in range(-10, 31, 10):
    f = 1.8 * c + 32
    print(c, f)`;
const E2 = `def fee(h):
    if h <= 2:
        return 5
    else:
        return 5 + 3 * (h - 2)

print(fee(1))
print(fee(5))`;
const E3 = `total = 0
for k in range(1, 100, 2):
    total = total + k
print(total)`;
const E4 = `value = 32000
years = 0
while value > 16000:
    value = value * 0.85
    years = years + 1
print(years)`;
const E5 = `count = 0
for n in range(1, 101):
    if n % 3 == 0 or n % 5 == 0:
        count = count + 1
print(count)`;

const P1 = `for i in range(3, 15, 4):
    print(i)`;
const P2 = `count = 0
for n in range(1, 101):
    if n % 6 == 0:
        count = count + 1
print(count)`;
const P3 = `n = 1
while n < 500:
    n = n * 3
print(n)`;
const P4 = `mark = 68
if mark >= 80:
    print("A")
elif mark >= 70:
    print("B")
elif mark >= 60:
    print("C")
else:
    print("D")`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Building Code from Steps",
    overview: String.raw`Programmers solve problems the same way mathematicians do: they <strong>decompose</strong> a problem into small steps, then put the steps in the right order. Every program is built from three structures — <strong>sequence</strong> (one step after another), <strong>selection</strong> (decisions with ${ic("if")}) and <strong>repetition</strong> (loops). In this lesson you will plan programs with words and flowcharts, use ${ic("for")} and ${ic("while")} loops, keep running totals and counts, model situations such as savings and depreciation, and let the computer search for the solution of an equation.`,
    goals: [
      "decompose a problem into input, processing and output steps, and draw a flowchart;",
      String.raw`use ${ic("if")} / ${ic("elif")} / ${ic("else")} to model a rule that changes (a piecewise rule);`,
      String.raw`use ${ic("for")} loops with ${ic("range(start, stop, step)")} and ${ic("while")} loops that repeat until a condition fails;`,
      "use an accumulator (running total) and a counter;",
      "write code that models a situation and answers a question such as “how many weeks until…?” or “which integer solves…?”.",
    ],
    curriculum: "C2.2 (decompose situations into computational steps; create code to solve problems)",
    book: "Not in the Nelson text; connects to Ch. 2 patterns, Ch. 4 equations and 7.2 appreciation/depreciation",
    prior: [
      [String.raw`What does ${ic("x = x + 2")} do?`, "It increases the value stored in x by 2."],
      [String.raw`Which integers from 1 to 20 are multiples of 6?`, String.raw`\(6, 12, 18\).`],
      [String.raw`A car loses \(15\%\) of its value each year. By what do you multiply each year?`, String.raw`\(0.85\).`],
    ],
    words: [
      ["Algorithm", "an ordered list of steps that solves a problem", "a recipe; long division"],
      ["Decompose", "break a problem into smaller parts", "input → process → output"],
      ["Selection", "choosing between paths with a condition", ic("if mark >= 50:")],
      ["Loop", "repeating a block of code", ic("for i in range(10):")],
      ["Accumulator", "a variable that keeps a running total", ic("total = total + k")],
      ["Counter", "a variable that counts how many times something happens", ic("count = count + 1")],
    ],
  }),

  section("📌 Decompose, then plan", String.raw`
  <p><strong>Problem.</strong> Mia has \(250\) dollars and saves \(40\) dollars a week. How many weeks until she has at least \(1000\) dollars?</p>
  ${table(["Step", "In words", "In code"], [
    ["Input", "start amount, weekly saving, goal", `${ic("savings = 250")}, ${ic("weeks = 0")}`],
    ["Process", "while the goal is not reached, add a week's saving", `${ic("while savings < 1000:")}`],
    ["Output", "the number of weeks", ic("print(weeks)")],
  ])}
  ${FLOW}
  ${keyIdea(String.raw`Every program is built from <strong>sequence</strong>, <strong>selection</strong> and <strong>repetition</strong>. Plan in words or a flowchart first; then each box becomes one or two lines of code.`)}`),

  widget("codeTracer", { code: W1, title: "A while loop: saving to a goal", task: "Predict the number of weeks with algebra first: \\(250+40w\\ge1000\\). Then change the weekly amount to 55 and the goal to 1500." }),

  section("📌 Loops: for and while", String.raw`
  ${table(["Loop", "Use it when…", "Example"], [
    [ic("for i in range(a, b):"), "you know how many times to repeat", `${ic("range(1, 6)")} gives 1, 2, 3, 4, 5 (stops <em>before</em> 6)`],
    [ic("for i in range(a, b, step):"), "you want to count by a step (or backward)", `${ic("range(10, 0, -2)")} gives 10, 8, 6, 4, 2`],
    [ic("while condition:"), "you repeat <em>until</em> something happens", ic("while savings < 1000:")],
  ])}
  ${watchOut([
    String.raw`${ic("range(1, 10)")} stops at 9. To include 10, write ${ic("range(1, 11)")}.`,
    String.raw`A ${ic("while")} loop must change the variable in its condition, or it never stops (an <em>infinite loop</em>).`,
    String.raw`Indentation matters in Python: the indented lines are the ones that repeat.`,
  ])}`),

  section("📌 Selection: rules that change", String.raw`
  <p>Many real rules are <strong>piecewise</strong>: parking is \(5\) dollars for up to \(2\) hours, then \(3\) dollars for each extra hour. An ${ic("if")} / ${ic("else")} chooses the right formula:</p>
  ${py(E2)}
  <p>Python checks the conditions from the top and runs <strong>only the first</strong> branch whose condition is true. ${ic("elif")} means “else if”.</p>`),

  section("📌 Letting the computer search", String.raw`
  <p>A loop can test every integer in a range — a fast version of guess-and-check. This is useful for checking an algebraic solution or for equations that are hard to solve by hand.</p>`),

  widget("codeTracer", { code: W2, title: "Solving an equation by search", task: "Solve \\(7x-12=5x+30\\) with algebra and compare. Then change the equation to \\(3x+8=11x-40\\). What happens if the solution is not an integer, for example \\(2x=7\\)?" }),

  examples([
    ["A conversion table", String.raw`What does this program print?${py(E1)}`,
      [String.raw`${ic("range(-10, 31, 10)")} gives \(-10, 0, 10, 20, 30\).`, String.raw`For each, \(F=1.8C+32\): \(14, 32, 50, 68, 86\). Python shows these as decimals because \(1.8\) is a decimal.`],
      shell(out(E1))],
    ["A piecewise rule", String.raw`Predict the two outputs of the parking program above.`,
      [String.raw`${ic("fee(1)")}: \(1\le2\), so the first branch returns \(5\).`, String.raw`${ic("fee(5)")}: \(5>2\), so \(5+3(5-2)=14\).`],
      shell(out(E2))],
    ["An accumulator", String.raw`What does this program print? What does it calculate?${py(E3)}`,
      [String.raw`${ic("range(1, 100, 2)")} gives the odd numbers \(1, 3, 5,\dots,99\) — fifty of them.`, String.raw`${ic("total")} adds them: \(1+3+5+\dots+99\).`, String.raw`The sum of the first \(n\) odd numbers is \(n^2\): \(50^2=2500\).`],
      ic(out(E3))],
    ["Depreciation with a while loop", String.raw`A \(32\,000\)-dollar car loses \(15\%\) of its value each year. How many years until it is worth \(16\,000\) dollars or less?${py(E4)}`,
      [String.raw`Each pass multiplies by \(0.85\): \(27\,200,\ 23\,120,\ 19\,652,\ 16\,704.20,\ 14\,198.57\).`, String.raw`After \(4\) years it is still above \(16\,000\); after \(5\) it is below, so the loop stops.`],
      String.raw`${ic(out(E4))} years`],
    ["A counter with two conditions", String.raw`How many numbers from \(1\) to \(100\) are multiples of \(3\) or of \(5\)?${py(E5)}`,
      [String.raw`Multiples of \(3\): \(33\). Multiples of \(5\): \(20\). Both (multiples of \(15\)): \(6\).`, String.raw`\(33+20-6=47\) — the counter agrees.`],
      ic(out(E5))],
  ]),

  practice([
    q("range", String.raw`How many numbers does this program print?${py(P1)}`, num(out(P1).split("\n").length),
      String.raw`Start at \(3\) and add \(4\) while staying below \(15\).`, [String.raw`\(3, 7, 11\); the next would be \(15\), but the range stops before \(15\).`], String.raw`\(${out(P1).split("\n").length}\)`),
    q("counter", String.raw`What does this program print?${py(P2)}`, num(Number(out(P2))),
      String.raw`${ic("n % 6 == 0")} is true for multiples of \(6\).`, [String.raw`\(6, 12, \dots, 96\): \(96\div6=16\) of them.`], String.raw`\(${out(P2)}\)`),
    q("while", String.raw`What does this program print?${py(P3)}`, num(Number(out(P3))),
      "Keep tripling until the value is 500 or more.", [String.raw`\(1\to3\to9\to27\to81\to243\to729\). \(729\ge500\), so the loop stops.`], String.raw`\(${out(P3)}\)`),
    q("selection", String.raw`What does this program print?${py(P4)}`, txt(out(P4)),
      "Only the first true condition runs.", [String.raw`\(68\ge80\)? No. \(68\ge70\)? No. \(68\ge60\)? Yes.`], ic(out(P4)), { placeholder: "the printed text" }),
    q("range", "Which loop prints 10, 8, 6, 4, 2?", choice([ic("for i in range(10, 0, -2):"), ic("for i in range(10, 2, -2):"), ic("for i in range(2, 10, 2):"), ic("for i in range(10, 1, 2):")], 0),
      "Count backward by 2 and stop before 0.", [String.raw`${ic("range(10, 2, -2)")} stops before \(2\); ${ic("range(10, 1, 2)")} is empty.`], ic("range(10, 0, -2)")),
  ]),

  wrapUp({
    qas: [
      [String.raw`When should I use ${ic("for")} and when ${ic("while")}?`, String.raw`Use ${ic("for")} when you know how many times to repeat (or have a list of values). Use ${ic("while")} when you repeat until something happens, such as reaching a goal, and do not know in advance how many passes it takes.`],
      [String.raw`Why does ${ic("range(1, 10)")} stop at 9?`, String.raw`Python ranges include the start but exclude the stop. ${ic("range(1, 10)")} has exactly \(10-1=9\) values. This “stop before” rule avoids many off-by-one errors once you get used to it.`],
      ["What is an accumulator?", String.raw`A variable that starts at \(0\) (or \(1\) for products) and is updated in every pass of a loop: ${ic("total = total + k")}. After the loop it holds the total.`],
      ["Can a search loop miss the answer?", String.raw`Yes: it only tests the values in its range, usually integers. If the solution is \(3.5\) or outside the range, the loop prints nothing. Algebra tells you where to look; the loop confirms.`],
      ["Why plan with a flowchart?", "It separates the thinking (what steps, in what order, which decisions) from the typing. Each box becomes a line or two of code, and errors in the plan are easier to spot before you write the program."],
    ],
    summary: [
      "Decompose: input → process → output; plan with words or a flowchart.",
      String.raw`Sequence, selection (${ic("if/elif/else")}) and repetition (${ic("for")}, ${ic("while")}) build every program.`,
      String.raw`${ic("range(a, b, step)")} stops before \(b\). Accumulators total; counters count.`,
      "Loops can model growth and decay and can search for solutions — but only within the values you test.",
    ],
    next: "3.3 reads code written by someone else: tracing, finding errors and altering programs to model new situations.",
  }),
];
