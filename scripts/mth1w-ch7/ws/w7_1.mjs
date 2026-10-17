// Worksheet 7.1 — Making Financial Decisions (teacher edition). Money in LaTeX is written \$.
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Unit price with unit conversion", q: String.raw`Rice: a $900$ g bag costs \$$3.69$; a $2.5$ kg bag costs \$$8.99$. Which is the better buy?`,
    steps: [String.raw`Small: $3.69\div0.9=\$4.10$/kg.`, String.raw`Large: $8.99\div2.5\approx\$3.60$/kg.`], ans: "the 2.5 kg bag (about 50 cents less per kg)" },
  { title: "Two discounts in a row", q: String.raw`A store takes $20\%$ off a \$$250$ bike, then another $10\%$ off the sale price at the register. Is that the same as $30\%$ off? Find the final price with HST.`,
    steps: [String.raw`Factors: $0.80\times0.90=0.72$, i.e. $28\%$ off — not $30\%$.`, String.raw`$250\times0.72=\$180$; with HST $180\times1.13=\$203.40$.`], ans: String.raw`\$$203.40$ (a $28\%$ total discount)` },
  { title: "Working backward from a final price", q: String.raw`A receipt shows \$$79.10$ including $13\%$ HST. What was the price before tax?`,
    steps: [String.raw`$P\times1.13=79.10$.`, String.raw`$P=79.10\div1.13=\$70.00$.`], ans: String.raw`\$$70.00$` },
  { title: "Break-even with a graph", q: String.raw`Streaming plan A: \$$8$ a month plus \$$2$ per movie rental. Plan B: \$$18$ a month including all rentals. Graph both and find the break-even point.`,
    fig: planeT({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 30 }, lines: [{ m: 2, b: 8, color: "blue", label: "A", lx: 8 }, { m: 0, b: 18, color: "red", label: "B", lx: 1 }], points: [{ x: 5, y: 18, label: "(5, 18)", color: "green" }], step: { x: 1, y: 5 }, xlabel: "rentals", ylabel: "cost" }, 5.5),
    steps: [String.raw`$8+2n=18\Rightarrow n=5$.`, "Fewer than 5 rentals: A is cheaper; more than 5: B."], ans: "5 rentals (\\$18 each)" },
  { title: "Three-way comparison", q: String.raw`Car rentals for one day: X: \$$39$ + \$$0.25$/km; Y: \$$55$ + \$$0.15$/km; Z: \$$95$ unlimited. Which is cheapest for $120$ km? For $300$ km?`,
    steps: [String.raw`$120$ km: X $\$69$, Y $\$73$, Z $\$95$ → X.`, String.raw`$300$ km: X $\$114$, Y $\$100$, Z $\$95$ → Z.`], ans: "X for 120 km; Z for 300 km" },
  { title: "Instalment plan cost", q: String.raw`A \$$1299$ laptop can be paid with $18$ monthly payments of \$$82.40$. Find the extra cost and the percent extra.`,
    steps: [String.raw`$18\times82.40=\$1483.20$.`, String.raw`Extra $=\$184.20$; $\frac{184.20}{1299}\approx14.2\%$.`], ans: String.raw`\$$184.20$ extra ($\approx14.2\%$)` },
  { title: "Inflation forward and backward", q: String.raw`A movie ticket costs \$$15$ today. (a) With $2.8\%$ inflation, what will it cost in $10$ years? (b) What did it cost $10$ years ago if inflation was the same?`,
    steps: [String.raw`(a) $15(1.028)^{10}\approx\$19.77$.`, String.raw`(b) $15\div1.028^{10}\approx\$11.38$.`], ans: String.raw`(a) $\approx\$19.77$ (b) $\approx\$11.38$` },
  { title: "Purchasing power", q: String.raw`If prices rise $25\%$ over several years, what percent of its old buying power does a dollar keep?`,
    steps: [String.raw`$\frac{1}{1.25}=0.80$.`, String.raw`The dollar keeps $80\%$ of its buying power (a $20\%$ loss, not $25\%$).`], ans: "80\\%" },
  { title: "Spotting a scam", q: "An email says you won a \\$1000 gift card and must pay a \\$25 processing fee by cryptocurrency within 2 hours. List three warning signs and the right response.",
    steps: ["You did not enter a contest.", "Payment by cryptocurrency and a fee to claim a prize.", "Extreme time pressure.", "Response: do not pay or click links; delete or report it."], ans: "classic advance-fee scam" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the unit price of each and choose the better buy: $500$ mL of shampoo for \$$6.49$ or $750$ mL for \$$8.99$.`, recap: "Shampoo 500 mL vs 750 mL.", ans: String.raw`\$$12.98$/L vs \$$11.99$/L: $750$ mL` },
  { level: 1, q: String.raw`Find the total cost of a \$$45$ sweater with $13\%$ HST.`, recap: "\\$45 sweater + HST.", ans: String.raw`\$$50.85$` },
  { level: 1, q: String.raw`A \$$220$ skateboard is $35\%$ off. Find the sale price before tax.`, recap: "35\\% off \\$220.", ans: String.raw`\$$143$` },
  { level: 2, q: String.raw`Find the final price of a \$$480$ phone with $15\%$ off and $13\%$ HST.`, recap: "\\$480 phone, 15\\% off, HST.", ans: String.raw`\$$461.04$` },
  { level: 2, q: String.raw`A receipt total is \$$146.90$ including HST. What was the pre-tax price?`, recap: "Remove HST from \\$146.90.", ans: String.raw`\$$130.00$` },
  { level: 2, q: String.raw`Phone plan A: \$$35$ for $10$ GB plus \$$5$ per extra GB. Plan B: \$$60$ unlimited. For how many GB in total do they cost the same?`, recap: "Phone plans A and B.", ans: String.raw`$35+5(g-10)=60\Rightarrow g=15$ GB` },
  { level: 2, q: String.raw`A sofa costs \$$1450$ cash or $24$ payments of \$$69$. Find the extra cost of the payment plan.`, recap: "Sofa payment plan.", ans: String.raw`$24\times69=1656$; \$$206$ extra` },
  { level: 2, q: String.raw`With $3\%$ inflation, what will a \$$4.50$ coffee cost in $8$ years?`, recap: "Coffee with 3\\% inflation.", ans: String.raw`$4.50(1.03)^8\approx\$5.70$` },
  { level: 3, space: 5, q: String.raw`Two gyms: Gym A charges \$$120$ to join plus \$$25$ a month; Gym B charges no fee but \$$40$ a month.
(a) Write an equation for each total cost after $m$ months.
(b) Find the break-even point.
(c) Which gym is cheaper for a one-year membership? By how much?`, recap: "Two gyms over m months.", ans: String.raw`(a) $C=25m+120$; $C=40m$ (b) $m=8$ (\$$320$) (c) 12 months: A \$$420$, B \$$480$: A by \$$60$` },
  { level: 3, space: 5, q: String.raw`A store advertises “Buy 2, get the 3rd at half price” on \$$24$ shirts. Another store sells the same shirt for \$$19.99$ each.
(a) Find the price per shirt for 3 shirts at each store.
(b) Which is better, and does tax change your answer?`, recap: "Shirt deals.", ans: String.raw`(a) $(24+24+12)\div3=\$20$ vs \$$19.99$ (b) the second store by 1 cent each; tax multiplies both by $1.13$, so the order does not change` },
  { level: 3, space: 5, q: String.raw`Prices in 2015 were about $83\%$ of prices in 2025.
(a) What did something costing \$$60$ in 2025 cost in 2015?
(b) Find the average yearly inflation rate over those 10 years.`, recap: "Price level 2015 vs 2025.", ans: String.raw`(a) $60\times0.83=\$49.80$ (b) $(1+r)^{10}=\frac{1}{0.83}\approx1.2048$: $r\approx1.9\%$` },
  { level: 3, space: 5, q: String.raw`You need a laptop for school. Option 1: buy new for \$$1100$ plus HST. Option 2: lease for \$$45$ a month for $24$ months (tax included), then return it. Option 3: buy refurbished for \$$720$ plus HST. Compare the options and recommend one, giving at least two reasons.`, recap: "Laptop buy vs lease vs refurbished.", ans: String.raw`new \$$1243$; lease \$$1080$ and you own nothing; refurbished \$$813.60$: refurbished is cheapest if reliable/warrantied (answers vary with reasons)` },
  { level: 3, space: 5, q: "Describe two common scams that target students (for example fake job offers, rental deposits, phishing texts). For each, give two warning signs and one way to protect yourself.", recap: "Scams that target students.", ans: "answers vary: fake jobs ask for upfront fees or bank details; rental scams ask for deposits before viewing; protect: verify independently, never send money/gift cards, use official contacts" },
];

export const WS = {
  code: "7.1",
  title: "Making Financial Decisions",
  bigideas: String.raw`Financial decisions are comparisons. Unit prices compare sizes; multipliers handle discounts ($\times(1-d)$) and Ontario's $13\%$ HST ($\times1.13$); linear models (fixed $+$ variable cost) and their break-even points compare plans; the total of all payments reveals the real cost of instalment plans. Inflation, $P(1+r)^n$, means money buys less over time, and awareness of fraud protects you from losing money altogether.`,
  goals: ["Compare products with unit prices.", "Apply discounts and HST, forward and backward.", "Model and compare plans; find break-even points.", "Find the cost of payment plans.", "Calculate inflation and purchasing power.", "Recognize fraud."],
  curriculum: "F1.1",
  vocab: [["Unit price", "price per unit of quantity"], ["HST", "13\\% Harmonized Sales Tax in Ontario"], ["Break-even point", "where two options cost the same"], ["Inflation", "the general rise in prices; measured by the CPI"], ["Purchasing power", "what a fixed amount of money can buy"]],
  hook: String.raw`Bring (or project) two sizes of the same product with their shelf tags. Ask: “Which is the better deal?” Many students guess the bigger one; check with unit prices --- sometimes the smaller is cheaper per gram.`,
  concepts: [
    ["1. Unit prices, discounts and tax", String.raw`Unit price $=\frac{\text{price}}{\text{quantity}}$. Final price $=P(1-d)(1.13)$. To remove tax: divide by $1.13$. Successive discounts multiply: $20\%$ then $10\%$ off is $\times0.72$.`],
    ["2. Comparing plans", String.raw`$C=(\text{rate})x+(\text{fixed})$. Break-even: set the costs equal and solve; then test a value on each side.
${planeT({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 60 }, lines: [{ m: 0, b: 40, color: "blue", label: "flat", lx: 5 }, { m: 0.5, b: 15, color: "red", label: "15 + 0.5x", lx: 55 }], points: [{ x: 50, y: 40, color: "green" }], step: { x: 10, y: 10 }, xlabel: "GB", ylabel: "cost" }, 5)}`],
    ["3. Paying later, inflation and fraud", String.raw`Compare the total of payments with the cash price. Inflation: $P(1+r)^n$; buying power $\frac{1}{(1+r)^n}$. Fraud warning signs: urgency, unusual payment methods, requests for personal information, offers too good to be true.`],
  ],
  tips: ["Students often add discounts (20\\% + 10\\% = 30\\%): multiply the factors.", "Removing tax: divide by 1.13; subtracting 13\\% is wrong.", "Always test a value on each side of a break-even point.", "Discuss real phone and transit plans students use.", "Have students bring a scam text or email (with personal details removed) to analyse."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
