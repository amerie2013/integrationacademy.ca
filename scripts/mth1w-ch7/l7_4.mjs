// MTH1W 7.4 — Budgets (self-study format): gross and net income, fixed and variable expenses, needs and wants,
// 50/30/20 guideline, surplus and deficit, adjusting a budget when circumstances change, savings goals
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { barChart } from "../mth1w-ch6/figs6.mjs";

export const TITLE = "7.4 Budgets";

export const blocks = () => [
  intro({
    icon: "🧾",
    title: "Budgets",
    overview: String.raw`A budget is a plan for your money: it lists what comes in, what goes out and what is left to save. With a budget you can cover your needs, afford some wants, reach savings goals and cope when something changes — a raise, a lost job, a rent increase. In this lesson you will build a monthly budget, test it against the 50/30/20 guideline and adjust it when circumstances change.`,
    goals: [
      "distinguish gross income from net income and identify common deductions;",
      "classify expenses as fixed or variable, and as needs or wants;",
      "build a monthly budget and find the surplus or deficit;",
      "compare a budget with the 50/30/20 guideline;",
      "modify a budget when circumstances change and plan for a savings goal.",
    ],
    curriculum: "F1.4 (create and modify budgets for changing circumstances), F1.1",
    prior: [
      [String.raw`\(30\%\) of \(\$2400\)?`, String.raw`\(\$720\).`],
      [String.raw`A weekly amount of \(\$45\) is how much per year?`, String.raw`\(45\times52=\$2340\).`],
      [String.raw`\(1800-1650=?\)`, String.raw`\(150\).`],
    ],
    words: [
      ["Gross income", "pay before deductions", "$2600 a month"],
      ["Net income", "take-home pay after deductions", "$2050"],
      ["Deductions", "income tax, CPP, EI, benefits", ""],
      ["Fixed expense", "the same each month", "rent, phone plan"],
      ["Variable expense", "changes month to month", "groceries, gas"],
      ["Surplus / deficit", "money left over / short", "income − expenses"],
    ],
  }),

  section("📌 Income", String.raw`
  <p>Your <strong>gross</strong> pay is what you earn; your <strong>net</strong> pay is what reaches your bank account after deductions such as income tax, Canada Pension Plan (CPP) contributions and Employment Insurance (EI) premiums. Budget with <strong>net</strong> income.</p>
  ${table(["Pay period", "Times per year", "To get a monthly amount"], [["weekly", "52", "× 52 ÷ 12"], ["every two weeks (bi-weekly)", "26", "× 26 ÷ 12"], ["twice a month (semi-monthly)", "24", "× 2"]])}`),

  section("📌 Expenses: fixed or variable, needs or wants", String.raw`
  ${table(["Expense", "Fixed or variable?", "Need or want?"], [["rent", "fixed", "need"], ["groceries", "variable", "need"], ["phone plan", "fixed", "need (basic) / want (premium)"], ["streaming services", "fixed", "want"], ["eating out", "variable", "want"]])}
  ${keyIdea(String.raw`<strong>Surplus</strong> \(=\) net income \(-\) total expenses. A negative result is a <strong>deficit</strong>. The <strong>50/30/20 guideline</strong> suggests about \(50\%\) of net income for needs, \(30\%\) for wants and \(20\%\) for savings and paying off debt — a starting point, not a rule.`)}
  ${barChart({ bars: [["needs", 50], ["wants", 30], ["savings", 20]], base: 0, top: 60, step: 10, ylabel: "% of net income", color: "green" }, "The 50/30/20 guideline.")}
  <p>Build your own budget in the explorer and compare it with the guideline. Then change the income or rent and rebalance.</p>`),

  widget("budgetBuilder"),

  section("📌 When circumstances change", String.raw`
  <p>Budgets must be adjusted when income or expenses change. A good order: protect needs first, cut or delay wants next, and keep at least some saving going. An <strong>emergency fund</strong> of a few months of expenses cushions surprises.</p>
  ${watchOut([
    "Use net (take-home) pay, not gross pay.",
    "Convert every amount to the same period (usually monthly) before adding.",
    "Irregular costs (gifts, repairs, yearly fees) need a monthly share set aside.",
    "Small daily costs add up: $5 a day is about $150 a month.",
  ])}`),

  examples([
    ["Net income and monthly pay", String.raw`Aisha earns \(\$18\) per hour and works \(25\) hours a week. About \(15\%\) of her pay goes to deductions. Find her monthly net income.`,
      [String.raw`Weekly gross: \(18\times25=\$450\). Yearly: \(450\times52=\$23\,400\).`, String.raw`Monthly gross: \(23\,400\div12=\$1950\).`, String.raw`Net: \(1950\times0.85=\$1657.50\).`],
      String.raw`about \(\$1657.50\) per month`],
    ["Surplus or deficit", String.raw`Monthly net income \(\$2200\); expenses: rent \(\$850\), groceries \(\$340\), transit \(\$156\), phone \(\$65\), entertainment \(\$220\), clothing \(\$120\), savings \(\$300\). Find the surplus or deficit.`,
      [String.raw`Total: \(850+340+156+65+220+120+300=\$2051\).`, String.raw`\(2200-2051=\$149\) surplus.`],
      String.raw`\(\$149\) surplus`],
    ["Checking against 50/30/20", String.raw`For the budget in Example 2, find the percent spent on needs (rent, groceries, transit, phone), wants (entertainment, clothing) and savings.`,
      [String.raw`Needs: \(1411\div2200\approx64.1\%\). Wants: \(340\div2200\approx15.5\%\). Savings: \(300\div2200\approx13.6\%\).`, "Needs are well above 50%, mainly because of rent; wants are low. With the $149 surplus moved to savings, savings would be about 20%."],
      "needs 64.1%, wants 15.5%, savings 13.6%"],
    ["A change in circumstances", String.raw`In Example 2, rent rises by \(\$175\) and transit by \(\$20\). Adjust the budget without cutting needs or savings.`,
      [String.raw`New expenses: \(2051+195=\$2246\); deficit \(2200-2246=-\$46\).`, String.raw`Cut wants by at least \(\$46\): e.g. entertainment \(220\to170\) (\(-\$50\)).`, String.raw`New surplus: \(2200-2196=\$4\).`],
      String.raw`cut wants by \(\$50\); surplus \(\$4\)`],
    ["A savings goal", String.raw`Marco wants \(\$1500\) for a laptop in \(8\) months. He already has \(\$300\) and can save \(\$40\) a week. Will he reach his goal?`,
      [String.raw`Weekly to monthly: \(40\times52\div12\approx\$173.33\).`, String.raw`In \(8\) months: \(300+8\times173.33\approx\$1686.67\).`],
      String.raw`yes, with about \(\$187\) to spare`],
  ]),

  practice([
    q("monthly income", String.raw`A job pays \(\$600\) every two weeks (bi-weekly). What is the monthly income?`, num(1300),
      "26 pays a year, then ÷ 12.", [String.raw`\(600\times26=15600\); \(15600\div12=1300\).`], String.raw`\(\$1300\)`),
    q("surplus", String.raw`Net income \(\$1850\); expenses total \(\$1720\). What is the surplus?`, num(130),
      "Income − expenses.", [String.raw`\(1850-1720=130\).`], String.raw`\(\$130\)`),
    q("50/30/20", String.raw`With a net income of \(\$2400\), how much does the 50/30/20 guideline suggest for wants?`, num(720),
      "30% of income.", [String.raw`\(0.3\times2400=720\).`], String.raw`\(\$720\)`),
    q("classify", "Which expense is both variable and a want?", choice(["concert tickets", "rent", "a monthly bus pass", "home insurance"], 0),
      "Changes month to month and is not essential.", ["Concert spending varies and is optional."], "concert tickets"),
    q("savings goal", String.raw`To save \(\$900\) in \(6\) months, how much must be saved each month?`, num(150),
      "Divide the goal by the months.", [String.raw`\(900\div6=150\).`], String.raw`\(\$150\)`),
  ]),

  wrapUp({
    qas: [
      ["Why budget with net income?", "Deductions are taken before you are paid, so only net income is actually available to spend or save."],
      ["What if my budget always has a deficit?", "Look for wants to reduce, needs that can cost less (cheaper phone plan, transit instead of a car), or ways to increase income. A deficit covered by credit grows into debt."],
      ["Is 50/30/20 realistic for everyone?", "Not always — rent can make needs much more than 50% in big cities. Use it as a guide to notice where money goes, then set your own targets."],
      ["How big should an emergency fund be?", "A common goal is 3 to 6 months of essential expenses, built up gradually."],
      ["How often should I review my budget?", "Monthly, and whenever something changes: a new job, a move, a big purchase."],
    ],
    summary: [
      "Budget with net income; convert everything to monthly amounts.",
      "Expenses: fixed or variable; needs or wants.",
      "Surplus = income − expenses; a negative result is a deficit.",
      "50/30/20 is a guideline for needs, wants and savings.",
      "When circumstances change, protect needs, trim wants, keep saving.",
    ],
    next: "7.5 reviews the whole chapter.",
  }),
];
