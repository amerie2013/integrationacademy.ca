// Worksheet 1.9 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Find $32\%$ of $150$.`, ans: "$48$" },
  { level: 1, q: String.raw`Write $0.65$ and $\frac35$ as percents, and $7.5\%$ as a decimal.`, recap: String.raw`$0.65$, $\frac35$ as %; $7.5\%$ as a decimal.`, ans: String.raw`$65\%$, $60\%$, $0.075$` },
  { level: 1, q: String.raw`$6$ kg of apples cost $14.10$ dollars. Find the unit price.`, recap: "Unit price: 6 kg for 14.10.", ans: "$2.35$ dollars/kg" },
  { level: 2, q: String.raw`$30$ is $12\%$ of what number? What is $150\%$ of that number?`, ans: "$250$; $375$" },
  { level: 2, q: String.raw`Juice costs $3.49$ dollars for $2$ L or $5.10$ dollars for $3$ L. Which is the better buy?`, recap: "Better buy: 2 L for 3.49 or 3 L for 5.10.", ans: "3 L ($1.70$ vs $\\approx1.75$ per L)" },
  { level: 2, q: String.raw`A price drops from $50$ to $42$ dollars. Find the percent change.`, ans: String.raw`$-16\%$` },
  { level: 2, q: String.raw`Shoes cost $56.50$ dollars including $13\%$ HST, after a $20\%$ discount. Find the original price before the discount and tax.`, ans: "$62.50$ dollars" },
  { level: 2, q: String.raw`A car's value falls from $28\,000$ to $19\,600$ dollars in $3$ years. Find the average rate of change and the percent decrease.`, recap: "Car 28 000 → 19 600 in 3 years.", ans: String.raw`$-2800$ dollars/year; $30\%$` },
  { level: 3, space: 5.5,
    q: String.raw`A store marks up an item $40\%$ above cost, then puts it on sale at $25\%$ off.
(a) What percent profit does the store make on the sale price?
(b) The sale price is $168$ dollars. What was the cost?
(c) What is the largest percent discount the store can give on the marked-up price without losing money? Round to one decimal place.`,
    ans: String.raw`(a) $1.4\times0.75=1.05$: $5\%$ (b) $168\div1.05=160$ dollars (c) $1-\dfrac{1}{1.4}\approx28.6\%$.` },
  { level: 3, space: 5,
    q: String.raw`A $150$-dollar jacket is on sale. Store X takes $30\%$ off, then an extra $20\%$ off the sale price. Store Y takes $45\%$ off.
(a) Find the price at each store.
(b) Which store is cheaper?
(c) What single percent discount is the same as Store X's two discounts?`,
    recap: "Jacket 150: 30% then 20% off vs 45% off.",
    ans: String.raw`(a) X $84$, Y $82.50$ dollars (b) Y (c) $1-0.7\times0.8=44\%$.` },
  { level: 3, space: 5,
    q: String.raw`Ana walks at $4.5$ km/h. Ben cycles at $18$ km/h and leaves from the same place $30$ minutes after Ana, along the same path.
(a) How far ahead is Ana when Ben starts?
(b) How many minutes after he starts does Ben catch up?
(c) How far from the start are they then?`,
    recap: "Ana 4.5 km/h, Ben 18 km/h leaving 30 min later.",
    ans: String.raw`(a) $2.25$ km (b) $2.25\div13.5=\frac16$ h $=10$ min (c) $3$ km.` },
  { level: 3, space: 5,
    q: String.raw`A town has $24\,000$ people. $35\%$ are under $25$ years old, and $40\%$ of those are students.
(a) How many students under $25$ are there?
(b) What percent of the whole town are they?
(c) If the under-$25$ group grows by $10\%$ and the rest of the town does not change, what percent of the town is under $25$?`,
    recap: "Town 24 000: 35% under 25; 40% of those students.",
    ans: String.raw`(a) $3360$ (b) $14\%$ (c) $9240\div24\,840\approx37.2\%$.` },
  { level: 3, space: 5.5,
    q: String.raw`A $12$ L tub of drink is $25\%$ juice.
(a) How many litres of juice does it contain?
(b) How much water must be added to make it $15\%$ juice?
(c) Instead, how much pure juice must be added to make it $40\%$ juice?
(d) Why does the amount of juice stay fixed in (b) but not in (c)?`,
    ans: String.raw`(a) $3$ L (b) $3\div0.15=20$ L in total: add $8$ L (c) $\dfrac{3+j}{12+j}=0.4$ gives $j=3$ L (d) in (b) only water is added; in (c) both the juice and the total change.` },
];
