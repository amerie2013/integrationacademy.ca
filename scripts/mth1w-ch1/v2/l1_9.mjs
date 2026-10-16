// MTH1W 1.9 — Rates, Percentages & Percent Change (self-study format)
// 1.8 covers ratios and proportions; this lesson concentrates on rates (including signed rates of change)
// and percentages, and uses proportions as the tool.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, pct } from "./lib.mjs";

export const TITLE = "1.9 Rates, Percentages & Percent Change";

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Rates, Percentages &amp; Percent Change",
    overview: String.raw`A ratio compares quantities in the <em>same</em> unit; a <strong>rate</strong> compares quantities in <em>different</em> units — kilometres per hour, dollars per kilogram, degrees per hour. A <strong>percent</strong> is a special ratio out of \(100\). Together they run everyday decisions: which size is the better buy, how fast a temperature is dropping, what a jacket really costs after a discount and HST. This lesson builds on the proportions from 1.8 and adds signed rates, where the sign tells you the direction of change.`,
    goals: [
      "write rates and unit rates, and use unit rates to compare prices and speeds;",
      "interpret positive and negative rates of change (rising and falling quantities);",
      "convert between fractions, decimals and percents;",
      "find a percent of a number, the whole from a part, and the percent increase or decrease;",
      "use multipliers for discounts, tax and successive percent changes.",
    ],
    curriculum: "B3.3 (signs on ratios, rates and decimals), B3.5 (rates, percentages and proportions); connects to F1 (financial literacy)",
    book: "Nelson Principles of Mathematics 9, Ch. 1 (proportional reasoning); rates of change appear again in Ch. 3",
    prior: [
      [String.raw`Write \(\tfrac{3}{4}\) as a decimal.`, String.raw`\(0.75\).`],
      [String.raw`Solve \(\tfrac{x}{10}=\tfrac{3}{5}\).`, String.raw`\(x=6\).`],
      [String.raw`What is \(10\%\) of \(80\)?`, String.raw`\(8\).`],
    ],
    words: [
      ["Rate", "a comparison of quantities in different units", "\\(240\\) km in \\(3\\) h"],
      ["Unit rate", "a rate per one unit of the second quantity", "\\(80\\) km/h"],
      ["Rate of change", "change in one quantity per unit of another; its sign shows direction", "\\(-2.5\\ ^\\circ\\)C/h"],
      ["Percent", "a ratio out of 100", "\\(35\\%=\\tfrac{35}{100}=0.35\\)"],
      ["Multiplier", "the single number that applies a percent change", "a \\(20\\%\\) discount is \\(\\times0.8\\)"],
    ],
  }),

  section("📌 Rates and unit rates", String.raw`
  <p>To compare rates fairly, rewrite each as a <strong>unit rate</strong> — divide so the second quantity is \(1\).</p>
  ${table(["Situation", "Rate", "Unit rate"], [
    ["\\(330\\) km in \\(4\\) h", "\\(\\tfrac{330\\text{ km}}{4\\text{ h}}\\)", "\\(82.5\\) km/h"],
    ["\\(2.4\\) kg of apples for \\(7.20\\) dollars", "\\(\\tfrac{7.20\\text{ dollars}}{2.4\\text{ kg}}\\)", "\\(3.00\\) dollars/kg"],
    ["\\(450\\) words in \\(6\\) min", "\\(\\tfrac{450\\text{ words}}{6\\text{ min}}\\)", "\\(75\\) words/min"],
  ])}
  <p>The <strong>better buy</strong> is the one with the lower price per unit (same unit for both!).</p>
  <p><strong>Signed rates (rates of change).</strong> When a quantity falls, its rate of change is <strong>negative</strong>. If a pool's water level drops \(12\) cm in \(4\) hours, the rate is \(\tfrac{-12\text{ cm}}{4\text{ h}}=-3\) cm/h. A negative rate divided by a positive time stays negative — the integer sign rules from 1.3 at work.</p>
  ${keyIdea(String.raw`rate of change \(=\dfrac{\text{change in quantity}}{\text{change in time}}=\dfrac{\text{final}-\text{initial}}{\text{time}}\). Positive → increasing; negative → decreasing; zero → no change.`)}`),

  section("📌 Percent, fraction, decimal", String.raw`
  <p>Percent means "per hundred". To convert:</p>
  ${table(["Fraction", "Decimal", "Percent", "How"], [
    ["\\(\\tfrac{3}{8}\\)", "\\(0.375\\)", "\\(37.5\\%\\)", "divide \\(3\\div8\\), then × 100"],
    ["\\(\\tfrac{6}{5}\\)", "\\(1.2\\)", "\\(120\\%\\)", "more than the whole → more than 100%"],
    ["\\(\\tfrac{1}{200}\\)", "\\(0.005\\)", "\\(0.5\\%\\)", "less than 1%"],
  ])}
  <p>Three kinds of percent questions — all are the proportion \(\dfrac{\text{part}}{\text{whole}}=\dfrac{\text{percent}}{100}\):</p>
  <ul>
    <li><strong>Find the part:</strong> \(15\%\) of \(60\) \(=0.15\times60=9\).</li>
    <li><strong>Find the percent:</strong> \(9\) out of \(60\) is \(\tfrac{9}{60}=0.15=15\%\).</li>
    <li><strong>Find the whole:</strong> \(9\) is \(15\%\) of what? \(0.15\times w=9\), so \(w=60\).</li>
  </ul>
  <p>Use the percent bar: slide the percent and the whole, then switch to <em>Increase</em> and <em>Decrease</em>.</p>`),

  widget("percentBar", { initWhole: 80, initPct: 35 }),

  section("📌 Percent change and multipliers", String.raw`
  <p><strong>Percent change</strong> \(=\dfrac{\text{new}-\text{original}}{\text{original}}\times100\%\). A negative result is a percent <em>decrease</em>.</p>
  <p><strong>Multipliers</strong> do a percent change in one step:</p>
  <ul>
    <li>increase by \(r\%\): multiply by \(1+\tfrac{r}{100}\) (adding \(13\%\) HST is \(\times1.13\));</li>
    <li>decrease by \(r\%\): multiply by \(1-\tfrac{r}{100}\) (a \(25\%\) discount is \(\times0.75\)).</li>
  </ul>
  <p>Successive changes multiply: a \(25\%\) discount then \(13\%\) tax is \(\times0.75\times1.13\).</p>
  ${watchOut([
    String.raw`<strong>Percent change uses the original value</strong> as the denominator, not the new one.`,
    String.raw`<strong>A rise and an equal fall do not cancel.</strong> Up \(10\%\) then down \(10\%\) is \(\times1.1\times0.9=\times0.99\) — a \(1\%\) loss overall.`,
    String.raw`<strong>Compare unit rates in the same units.</strong> Convert mL to L (or g to kg) before comparing prices.`,
  ])}`),

  examples([
    ["Better buy", String.raw`Juice costs \(3.60\) dollars for \(750\) mL or \(5.40\) dollars for \(1.2\) L. Which is the better buy?`,
      [String.raw`Use the same unit: \(1.2\) L \(=1200\) mL.`, String.raw`Small: \(3.60\div750=0.0048\) dollars/mL, that is \(0.48\) dollars per \(100\) mL.`, String.raw`Large: \(5.40\div1200=0.0045\) dollars/mL, that is \(0.45\) dollars per \(100\) mL.`],
      String.raw`the \(1.2\) L size is the better buy (\(0.45\) vs \(0.48\) dollars per \(100\) mL)`],
    ["A negative rate of change", String.raw`At 4 p.m. the temperature is \(6\,^\circ\text{C}\); at 10 p.m. it is \(-9\,^\circ\text{C}\). Find the average rate of change of the temperature.`,
      [String.raw`Change in temperature: \(-9-6=-15\) degrees.`, String.raw`Time: \(10-4=6\) hours.`, String.raw`Rate: \(\tfrac{-15}{6}=-2.5\) degrees per hour.`],
      String.raw`the temperature changed at \(-2.5\,^\circ\text{C}\) per hour (it fell \(2.5\) degrees each hour on average)`,
      numberLine({ min: -10, max: 7, dots: [{ at: 6, label: "4 p.m.", color: "blue" }, { at: -9, label: "10 p.m.", color: "red" }], arrows: [{ from: 6, to: -9, label: "−15 in 6 h", color: "red", lane: 0 }], caption: "A fall of 15 degrees over 6 hours.", id: "nl91", unit: 30 })],
    ["Finding the percent", String.raw`On a test, Kiran scored \(27\) out of \(60\). What percent is that?`,
      [String.raw`\(\tfrac{27}{60}=0.45\).`, String.raw`\(0.45\times100\%=45\%\).`],
      String.raw`\(45\%\)`],
    ["Percent decrease", String.raw`A town's population fell from \(2400\) to \(2100\). Find the percent change.`,
      [String.raw`Change: \(2100-2400=-300\).`, String.raw`Divide by the <em>original</em>: \(\tfrac{-300}{2400}=-0.125\).`, String.raw`\(-0.125\times100\%=-12.5\%\).`],
      String.raw`a \(12.5\%\) decrease`],
    ["Discount, then HST", String.raw`A hoodie costs \(85\) dollars. It is \(25\%\) off, and then \(13\%\) HST is added. What is the final price?`,
      [String.raw`Discount multiplier \(0.75\): \(85\times0.75=63.75\).`, String.raw`Tax multiplier \(1.13\): \(63.75\times1.13=72.0375\).`, String.raw`Round to the cent: \(72.04\).`],
      String.raw`the final price is \(72.04\) dollars`],
  ]),

  practice([
    q("find the whole", String.raw`\(64\) is \(40\%\) of what number?`, num(160),
      String.raw`\(0.40\times w=64\).`, [String.raw`\(w=64\div0.40\).`, String.raw`\(=160\).`], String.raw`\(160\)`),
    q("unit rate", String.raw`A car travels \(315\) km in \(3.5\) h. What is its average speed in km/h?`, num(90),
      "Divide distance by time.", [String.raw`\(315\div3.5\).`, String.raw`\(=90\).`], String.raw`\(90\) km/h`),
    q("fraction to percent", String.raw`Write \(\tfrac{7}{8}\) as a percent.`, pct(0.875),
      String.raw`Divide, then multiply by \(100\).`, [String.raw`\(7\div8=0.875\).`, String.raw`\(0.875\times100\%=87.5\%\).`], String.raw`\(87.5\%\)`, { placeholder: "e.g. 62.5%" }),
    q("percent increase", String.raw`A ticket price rises from \(30\) dollars to \(36\) dollars. What is the percent increase?`, pct(0.2),
      "Change divided by the original price.", [String.raw`Change \(=36-30=6\).`, String.raw`\(\tfrac{6}{30}=0.2=20\%\).`], String.raw`\(20\%\)`, { placeholder: "e.g. 15%" }),
    q("discount and tax", String.raw`A \(45\)-dollar item is \(15\%\) off, then \(13\%\) HST is added. What is the final price in dollars (to the nearest cent)?`, num(43.22, 0.006),
      String.raw`Multiply by \(0.85\), then by \(1.13\).`, [String.raw`\(45\times0.85=38.25\).`, String.raw`\(38.25\times1.13=43.2225\).`, String.raw`Round: \(43.22\).`], String.raw`\(43.22\) dollars`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between a ratio and a rate?", "A ratio compares quantities in the same unit (and has no unit). A rate compares different units, so it keeps its units, like km/h."],
      ["What does a negative rate mean?", String.raw`The quantity is decreasing. \(-3\) cm/h means the level goes down \(3\) cm each hour.`],
      ["Can a percent be more than 100%?", String.raw`Yes. \(150\%\) of a number is one and a half times it, and a price that doubles has increased by \(100\%\).`],
      ["Is a 20% discount followed by a 20% increase back to the original price?", String.raw`No: \(\times0.8\times1.2=\times0.96\), so you end \(4\%\) below the original.`],
      ["Should I round in the middle of a money problem?", "No — keep full accuracy until the end, then round to the cent once."],
    ],
    summary: [
      "A unit rate is a rate per one unit; compare unit rates (in the same units) to find the better buy.",
      "Rate of change = change ÷ time; the sign tells you whether the quantity rises or falls.",
      String.raw`\(\tfrac{\text{part}}{\text{whole}}=\tfrac{\text{percent}}{100}\) answers every basic percent question.`,
      String.raw`Increase by \(r\%\): \(\times(1+\tfrac{r}{100})\); decrease: \(\times(1-\tfrac{r}{100})\); successive changes multiply.`,
    ],
    next: "1.10 looks at what happens between numbers, and as numbers grow without end: density, infinity and limits.",
  }),
];
