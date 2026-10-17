// MTH1W 7.1 — Making Financial Decisions (self-study format): unit price, discounts and sales tax,
// comparing plans (break-even), paying over time, inflation and purchasing power, fraud awareness
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";

export const TITLE = "7.1 Making Financial Decisions";

export const blocks = () => [
  intro({
    icon: "💵",
    title: "Making Financial Decisions",
    overview: String.raw`Every purchase is a decision: which size, which plan, cash or monthly payments, now or later. Good decisions come from comparing options with math — unit prices, the real price after discounts and tax, the break-even point between two plans, and the hidden cost of paying over time. You will also see how inflation slowly shrinks what money can buy, and how to recognize common scams before they cost you.`,
    goals: [
      "compare products using unit prices;",
      "calculate prices after discounts and Ontario's 13% HST;",
      "model plans as fixed cost plus variable cost and find the break-even point;",
      "find the true cost of buying on payment plans;",
      "explain inflation and calculate its effect on prices and purchasing power;",
      "recognize warning signs of financial fraud.",
    ],
    curriculum: "F1.1 (financial decisions; how awareness of fraud and of past and current financial situations informs decisions)",
    prior: [
      [String.raw`\(25\%\) of \(80\)?`, String.raw`\(20\).`],
      [String.raw`Increase \(60\) by \(13\%\).`, String.raw`\(60\times1.13=67.80\).`],
      [String.raw`Solve \(20+4n=50\).`, String.raw`\(n=7.5\).`],
    ],
    words: [
      ["Unit price", "cost per unit (per litre, per gram, per item)", "$2.10/L"],
      ["HST", "Harmonized Sales Tax: 13% in Ontario on most purchases", "× 1.13"],
      ["Fixed cost", "the same no matter how much you use", "monthly fee"],
      ["Variable cost", "depends on how much you use", "per GB, per class"],
      ["Break-even point", "where two options cost the same", "set costs equal"],
      ["Inflation", "the general rise in prices over time", "about 2–3% a year"],
    ],
  }),

  section("📌 Unit prices", String.raw`
  <p>Bigger is not always cheaper. Divide the price by the quantity to compare: \(\text{unit price}=\dfrac{\text{price}}{\text{quantity}}\). Use the same units for both products (convert mL to L, g to kg).</p>
  ${table(["Product", "Price", "Size", "Unit price"], [["Cereal A", "$4.99", "450 g", "\\(4.99\\div0.45\\approx\\$11.09\\)/kg"], ["Cereal B", "$7.49", "750 g", "\\(7.49\\div0.75\\approx\\$9.99\\)/kg"]])}
  <p>Cereal B is the better buy — if you will actually use it before it goes stale. A low unit price only saves money when there is no waste.</p>`),

  section("📌 Discounts and sales tax", String.raw`
  ${keyIdea(String.raw`A discount of \(d\%\) multiplies the price by \((1-d)\); 13% HST multiplies by \(1.13\). Final price \(=\text{price}\times(1-d)\times1.13\). The order does not matter, because multiplication is commutative.`)}
  <p>Example: \(\$80\) shoes, \(30\%\) off: \(80\times0.70=\$56\); with tax \(56\times1.13=\$63.28\).</p>`),

  section("📌 Comparing plans: fixed + variable cost", String.raw`
  <p>Phone plans, gyms and car rentals often charge a fixed amount plus a variable amount: \(C=(\text{rate})\times x+(\text{fixed})\). Two such plans are two lines; where they cross is the <strong>break-even point</strong>. Below it one plan is cheaper; above it, the other is.</p>
  <p>Change the fees and rates in the explorer to see the break-even point move.</p>`),

  widget("planCompare"),

  section("📌 Paying over time", String.raw`
  <p>Financing, “buy now, pay later” and instalment plans spread a cost over months. Always compare the <strong>total</strong> of all payments with the cash price: the difference is the cost of borrowing.</p>
  ${table(["Option", "Payments", "Total paid", "Extra cost"], [["Cash", "$1200 now", "$1200", "—"], ["Payment plan", "24 × $59.50", "$1428", "$228 (19%)"]])}`),

  section("📌 Inflation and purchasing power", String.raw`
  <p>Prices tend to rise every year. Statistics Canada tracks this with the Consumer Price Index (CPI), and the Bank of Canada aims to keep inflation near \(2\%\) a year. With inflation \(r\), a price \(P\) becomes \(P(1+r)^n\) after \(n\) years — and a fixed amount of money buys less.</p>`),

  widget("inflationCalc"),

  section("📌 Recognizing fraud", watchOut([
    "Pressure to act immediately (“pay now or your account will be closed”).",
    "Requests for payment by gift cards, cryptocurrency or wire transfer.",
    "Offers that are too good to be true (guaranteed high returns, prizes you never entered for).",
    "Messages asking for passwords, PINs or card numbers. Real banks never ask for these by text or email.",
    "When in doubt, stop, and contact the organization using a number or website you find yourself.",
  ])),

  examples([
    ["Unit price", String.raw`A \(1.89\) L carton of juice costs \(\$4.29\) and a \(2.63\) L jug costs \(\$5.49\). Which is the better buy?`,
      [String.raw`Carton: \(4.29\div1.89\approx\$2.27\)/L.`, String.raw`Jug: \(5.49\div2.63\approx\$2.09\)/L.`],
      String.raw`the jug (about \(18\) cents less per litre)`],
    ["Discount and HST", String.raw`A \(\$120\) jacket is on sale for \(25\%\) off. Find the price including \(13\%\) HST.`,
      [String.raw`Sale price: \(120\times0.75=\$90\).`, String.raw`With tax: \(90\times1.13=\$101.70\).`],
      String.raw`\(\$101.70\)`],
    ["Break-even point", String.raw`Gym A charges \(\$30\) a month plus \(\$5\) per class; Gym B charges \(\$75\) a month for unlimited classes. When do they cost the same, and which is better for \(12\) classes a month?`,
      [String.raw`\(30+5n=75\Rightarrow n=9\) classes.`, String.raw`For \(12\) classes: A costs \(30+60=\$90\); B costs \(\$75\).`],
      String.raw`equal at \(9\) classes; B is cheaper for \(12\)`],
    ["Inflation", String.raw`A basket of groceries costs \(\$50\) today. If inflation averages \(2.5\%\) a year, what will it cost in \(10\) years?`,
      [String.raw`\(50(1.025)^{10}\approx50\times1.280=\$64.00\).`, String.raw`The same \(\$50\) would then buy only about \(\frac{50}{64}\approx78\%\) as much.`],
      String.raw`about \(\$64.00\)`],
    ["The cost of paying later", String.raw`A TV costs \(\$900\) cash, or \(12\) monthly payments of \(\$84.50\). How much extra does the payment plan cost, as a percent of the cash price?`,
      [String.raw`Total of payments: \(12\times84.50=\$1014\).`, String.raw`Extra: \(1014-900=\$114\); \(\frac{114}{900}\approx12.7\%\).`],
      String.raw`\(\$114\) more, about \(12.7\%\)`],
  ]),

  practice([
    q("unit price", String.raw`Which is the better buy?`, choice(["\\(12\\) eggs for \\(\\$4.20\\)", "\\(30\\) eggs for \\(\\$10.80\\)", "they cost the same per egg", "cannot tell"], 0),
      "Find the price per egg.", [String.raw`\(4.20\div12=\$0.35\); \(10.80\div30=\$0.36\).`], "12 for $4.20"),
    q("discount + tax", String.raw`Headphones cost \(\$150\). Find the price after a \(20\%\) discount and \(13\%\) HST (dollars).`, num(135.6, 0.006),
      "Multiply by 0.80, then by 1.13.", [String.raw`\(150\times0.8=120\); \(120\times1.13=135.60\).`], String.raw`\(\$135.60\)`),
    q("break-even", String.raw`Plan A: \(\$25\) plus \(\$0.10\) per minute. Plan B: \(\$0.25\) per minute, no fee. For how many minutes do they cost the same?`, num(166.67, 0.01),
      "Set the costs equal.", [String.raw`\(25+0.10m=0.25m\Rightarrow0.15m=25\Rightarrow m\approx166.67\).`], String.raw`\(\approx166.67\) min`),
    q("inflation", String.raw`A concert ticket costs \(\$80\). With \(3\%\) inflation a year, what will it cost in \(5\) years (to the cent)?`, num(92.74, 0.006),
      "Multiply by 1.03 five times.", [String.raw`\(80(1.03)^5\approx80\times1.15927=92.74\).`], String.raw`\(\$92.74\)`),
    q("fraud", "Which message is most likely a scam?", choice(["“Your parcel is held. Pay a $2.99 fee with a gift card within 1 hour.”", "A receipt email for a purchase you made", "A letter from your school about report cards", "Your bank's app showing your balance"], 0),
      "Look for urgency and unusual payment methods.", ["Urgency plus gift-card payment are classic warning signs."], "the parcel message"),
  ]),

  wrapUp({
    qas: [
      ["Is the biggest package always the best deal?", "Usually it has the lowest unit price, but not always, and it saves money only if you use it all. Check the unit price and think about waste."],
      ["Why does the order of discount and tax not matter?", "Both are multiplications: 0.75 × 1.13 = 1.13 × 0.75. Any order gives the same final price."],
      ["How do I decide between two plans?", "Estimate how much you will actually use, find the break-even point, and see which side of it you are on. Consider changes in your use, too."],
      ["Is buying on a payment plan always bad?", "Not always: a 0% plan paid on time costs nothing extra. But missed payments often bring high fees and interest, so read the terms."],
      ["Why does inflation matter to a student?", "Money saved under a mattress loses value every year. To keep up, savings need to earn interest at least equal to inflation (7.3)."],
    ],
    summary: [
      "Unit price = price ÷ quantity; compare in the same units.",
      "Final price = price × (1 − discount) × 1.13 in Ontario.",
      "Plans: C = rate × x + fixed; break-even where costs are equal.",
      "Payment plans: compare the total paid with the cash price.",
      "Inflation: P(1 + r)ⁿ; money buys less over time. Watch for fraud warning signs.",
    ],
    next: "7.2 looks at things that gain or lose value over time: appreciation and depreciation.",
  }),
];
