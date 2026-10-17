// MTH1W 7.2 — Appreciation & Depreciation (self-study format): percent change, growth and decay factors,
// straight-line vs percentage depreciation, factors that affect value, doubling time
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";

export const TITLE = "7.2 Appreciation & Depreciation";

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Appreciation & Depreciation",
    overview: String.raw`Some things gain value over time — homes, rare collectibles, some investments — and some lose value, like cars, phones and computers. Most of these changes happen by a percentage each year, so they compound: you multiply by the same factor again and again. In this lesson you will calculate future values, compare percentage and straight-line depreciation, and look at what makes values rise or fall.`,
    goals: [
      "calculate a percent increase or decrease and the resulting value;",
      "use growth and decay factors: \\(V=V_0(1+r)^n\\) and \\(V=V_0(1-r)^n\\);",
      "compare straight-line (fixed amount) and percentage (fixed rate) depreciation;",
      "find a rate of change from a starting and ending value;",
      "describe factors that cause appreciation and depreciation and use them in decisions.",
    ],
    curriculum: "F1.2 (appreciation and depreciation: factors and calculations)",
    prior: [
      [String.raw`Write \(15\%\) as a decimal.`, String.raw`\(0.15\).`],
      [String.raw`\(1-0.2=?\)`, String.raw`\(0.8\).`],
      [String.raw`Evaluate \(2000(1.1)^2\).`, String.raw`\(2420\).`],
    ],
    words: [
      ["Appreciation", "an increase in value over time", "a house rising 5% a year"],
      ["Depreciation", "a decrease in value over time", "a car losing 15% a year"],
      ["Growth factor", "1 + r, the multiplier for an increase", "1.05"],
      ["Decay factor", "1 − r, the multiplier for a decrease", "0.85"],
      ["Straight-line depreciation", "losing the same dollar amount each year", "$3000 per year"],
      ["Residual value", "what an item is still worth after some years", ""],
    ],
  }),

  section("📌 Percent change as a multiplier", String.raw`
  ${table(["Change", "Multiply by", "Example"], [["increase by 8%", "\\(1.08\\)", "\\(500\\to540\\)"], ["decrease by 8%", "\\(0.92\\)", "\\(500\\to460\\)"], ["increase by 8% each year for 3 years", "\\(1.08^3\\approx1.2597\\)", "\\(500\\to629.86\\)"]])}
  ${keyIdea(String.raw`After \(n\) years at rate \(r\): appreciation \(V=V_0(1+r)^n\); depreciation \(V=V_0(1-r)^n\). The percent is applied to the <em>current</em> value each year, so the dollar change grows (appreciation) or shrinks (depreciation).`)}
  <p>An increase of \(20\%\) followed by a decrease of \(20\%\) does <strong>not</strong> return to the start: \(1.2\times0.8=0.96\), a net loss of \(4\%\).</p>`),

  section("📌 Two ways to depreciate", String.raw`
  ${table(["", "Straight-line", "Percentage (declining balance)"], [["How", "subtract the same dollar amount each year", "multiply by the same factor each year"], ["Graph", "straight line", "curve that flattens"], ["Model", "\\(V=V_0-dn\\)", "\\(V=V_0(1-r)^n\\)"], ["Reaches 0?", "yes, eventually", "never exactly"]])}
  <p>Switch between depreciation and appreciation in the explorer, and compare the curve with the dashed straight line.</p>`),

  widget("valueTimeline"),

  section("📌 What makes values change?", String.raw`
  ${table(["Tends to appreciate", "Why", "Tends to depreciate", "Why"], [
    ["land and homes", "limited supply, growing population", "cars", "wear, mileage, new models"],
    ["rare collectibles", "scarcity and demand", "phones and computers", "technology improves quickly"],
    ["some investments", "company growth", "clothing, furniture", "wear and changing styles"],
  ])}
  ${watchOut([
    "Use the decay factor 1 − r for depreciation, not −r.",
    "A percent decrease after a percent increase does not cancel out.",
    "Rates are per period: make sure n counts the same periods (years, months).",
    "Past appreciation does not guarantee future appreciation.",
  ])}`),

  examples([
    ["One year of appreciation", String.raw`A painting worth \(\$4500\) appreciates \(6\%\) in a year. Find its new value.`,
      [String.raw`Growth factor \(1.06\).`, String.raw`\(4500\times1.06=\$4770\).`],
      String.raw`\(\$4770\)`],
    ["Several years of depreciation", String.raw`A new car costs \(\$32\,000\) and depreciates \(18\%\) per year. Find its value after \(4\) years.`,
      [String.raw`Decay factor \(1-0.18=0.82\).`, String.raw`\(32\,000(0.82)^4\approx32\,000\times0.4521\approx\$14\,468\).`],
      String.raw`about \(\$14\,468\)`],
    ["Straight-line vs percentage", String.raw`A \(\$2400\) laptop loses value. Compare its value after \(3\) years (a) at \(\$600\) per year (straight-line), (b) at \(30\%\) per year.`,
      [String.raw`(a) \(2400-3(600)=\$600\).`, String.raw`(b) \(2400(0.7)^3=2400\times0.343=\$823.20\).`, "Straight-line loses more by year 3 here, because 30% of a shrinking value becomes less than $600."],
      String.raw`(a) \(\$600\) (b) \(\$823.20\)`],
    ["Finding the rate", String.raw`A house bought for \(\$400\,000\) is worth \(\$441\,000\) two years later. What constant yearly rate of appreciation is that?`,
      [String.raw`\(400\,000(1+r)^2=441\,000\Rightarrow(1+r)^2=1.1025\).`, String.raw`\(1+r=\sqrt{1.1025}=1.05\), so \(r=5\%\).`],
      String.raw`\(5\%\) per year`],
    ["A decision", String.raw`You can buy a 2-year-old phone for \(\$480\) or a new one for \(\$900\). Phones depreciate about \(25\%\) a year. What would the new phone be worth when it is 2 years old, and what does that suggest?`,
      [String.raw`\(900(0.75)^2=900\times0.5625=\$506.25\).`, String.raw`Buying new costs \(900-506.25=\$393.75\) in lost value over 2 years; the used phone has already absorbed that loss.`],
      String.raw`about \(\$506\) — buying used avoids the steepest depreciation`],
  ]),

  practice([
    q("appreciation", String.raw`A coin worth \(\$250\) appreciates \(4\%\) per year. Find its value after \(3\) years (to the cent).`, num(281.22, 0.006),
      "Multiply by 1.04 three times.", [String.raw`\(250(1.04)^3=250\times1.124864\approx281.22\).`], String.raw`\(\$281.22\)`),
    q("depreciation", String.raw`A \(\$1200\) bike depreciates \(20\%\) per year. What is it worth after \(2\) years?`, num(768),
      "Decay factor 0.8.", [String.raw`\(1200\times0.8^2=1200\times0.64=768\).`], String.raw`\(\$768\)`),
    q("factor", String.raw`Which factor gives a decrease of \(12\%\)?`, choice(["\\(0.88\\)", "\\(0.12\\)", "\\(1.12\\)", "\\(-0.12\\)"], 0),
      "1 − r.", [String.raw`\(1-0.12=0.88\).`], String.raw`\(0.88\)`),
    q("straight-line", String.raw`A \(\$9000\) machine loses \(\$1500\) per year (straight-line). How many years until it is worth \(\$0\)?`, num(6),
      "Divide the value by the yearly loss.", [String.raw`\(9000\div1500=6\).`], String.raw`\(6\) years`),
    q("net change", String.raw`A stock rises \(10\%\) one year and falls \(10\%\) the next. What is the net percent change? (Enter a negative number for a loss.)`, num(-1),
      "Multiply the factors.", [String.raw`\(1.1\times0.9=0.99\): a \(1\%\) loss.`], "−1 (a 1% loss)"),
  ]),

  wrapUp({
    qas: [
      ["Why doesn't a 10% rise followed by a 10% fall cancel out?", "The fall is 10% of a bigger number. 1.1 × 0.9 = 0.99, so you end 1% below where you started."],
      ["Why does a depreciating car lose the most money in its first years?", "The percentage is taken from the highest value. 18% of $32 000 is $5760; a few years later, 18% of a smaller value is much less."],
      ["Which depreciation method is “right”?", "Both are used: accountants often use straight-line for simplicity; percentage models usually match real resale prices better."],
      ["Do homes always appreciate?", "Not always. Prices depend on interest rates, the economy, location and demand, and they can fall for years."],
      ["How do I find how long it takes to double?", "Try values of n in (1 + r)ⁿ until it reaches 2. A shortcut, the rule of 72: about 72 ÷ (rate in %) years — at 6%, about 12 years."],
    ],
    summary: [
      "Increase by r: × (1 + r); decrease by r: × (1 − r).",
      "Appreciation V = V₀(1 + r)ⁿ; depreciation V = V₀(1 − r)ⁿ.",
      "Straight-line depreciation subtracts a fixed amount each year.",
      "Percent changes do not cancel: multiply the factors.",
      "Supply, demand, condition, age and technology drive value.",
    ],
    next: "7.3 applies the same growth factors to money itself: interest and borrowing.",
  }),
];
