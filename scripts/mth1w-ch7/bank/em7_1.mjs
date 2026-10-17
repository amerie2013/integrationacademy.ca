// 7.1 Making Financial Decisions — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`A 2 L bottle of juice costs 3.80 dollars. What is the unit price in dollars per litre?`, 1.9, "3.80 ÷ 2."),
  num(`Find the price of a 40-dollar item after a 25% discount (dollars).`, 30, "40 × 0.75."),
  num(`Find the total cost of a 20-dollar item with 13% HST (dollars).`, 22.6, "20 × 1.13."),
  mc(`Which is the better buy?`, "6 bagels for 3.60 dollars", ["4 bagels for 2.60 dollars", "they cost the same per bagel", "cannot tell"], "0.60 vs 0.65 per bagel."),
  mc(`In Ontario, the HST rate is…`, "13%", ["5%", "8%", "15%"], "Harmonized Sales Tax."),
  mc(`A cost that stays the same no matter how much you use is a…`, "fixed cost", ["variable cost", "unit price", "discount"], "e.g. a monthly fee."),
  mc(`A charge of 0.10 dollars per text is a…`, "variable cost", ["fixed cost", "tax", "break-even point"], "It depends on usage."),
  num(`Plan A costs 30 dollars. Plan B costs 10 dollars plus 2 dollars per GB. For how many GB do they cost the same?`, 10, "10 + 2g = 30."),
  tf(`Taking 20% off and then adding 13% tax gives the same price as adding tax first and then taking 20% off.`, true, "Multiplication can be done in any order."),
  num(`What multiplier gives a 30% discount?`, 0.7, "1 − 0.30."),
  mc(`Prices in general rising over time is called…`, "inflation", ["depreciation", "interest", "a budget"], "Measured by the Consumer Price Index."),
  num(`An item costs 100 dollars today. With 2% inflation, what will it cost in one year (dollars)?`, 102, "100 × 1.02."),
  tf(`A real bank may text you asking for your PIN to “confirm your account”.`, false, "Banks never ask for PINs by text — that is a scam."),
  mc(`Which payment request is a strong sign of a scam?`, "pay with gift cards right away", ["pay at the store's checkout", "pay a bill through your bank's app", "pay by cheque to a known company"], "Gift cards are untraceable."),
  num(`A pack of 8 pens costs 6.00 dollars. What is the cost per pen (dollars)?`, 0.75, "6 ÷ 8."),
  num(`A 60-dollar game is on sale for 15 dollars off. What percent off is that?`, 25, "15 ÷ 60."),
  mc(`The break-even point of two plans is where…`, "they cost the same", ["one plan is free", "both plans are cheapest", "the fixed costs are equal"], "Set the two costs equal."),
  num(`A phone costs 600 dollars cash or 24 payments of 30 dollars. How much more does the payment plan cost (dollars)?`, 120, "720 − 600."),
  tf(`The bigger package always has the lower unit price.`, false, "Check the unit price — sometimes the smaller one is cheaper."),
  num(`Write 13% HST as a multiplier for the total price.`, 1.13, "1 + 0.13."),
];

export const M = [
  num(`A 750 g box of cereal costs 6.30 dollars. What is the price per kg (dollars)?`, 8.4, "6.30 ÷ 0.75."),
  num(`Find the final price of a 250-dollar bike with 20% off and 13% HST (dollars).`, 226, "250 × 0.8 × 1.13."),
  num(`A receipt total is 90.40 dollars including 13% HST. What was the price before tax (dollars)?`, 80, "90.40 ÷ 1.13."),
  num(`Two discounts of 20% and then 10% are applied. What single percent discount is that?`, 28, "0.8 × 0.9 = 0.72."),
  num(`Gym A: 40 dollars a month plus 4 dollars per class. Gym B: 80 dollars a month unlimited. How many classes make them equal?`, 10, "40 + 4n = 80."),
  mc(`For the gyms (A: 40 + 4n; B: 80), which is cheaper for 14 classes a month?`, "B", ["A", "they are equal", "neither"], "A: 96, B: 80."),
  num(`Read the graph: at how many GB do the two plans cost the same?`, 40, "The lines cross at (40, 50).", planeDoc({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 80 }, lines: [{ m: 0, b: 50, color: "blue", label: "A", lx: 5 }, { m: 0.75, b: 20, color: "red", label: "B", lx: 60 }], step: { x: 10, y: 10 }, xlabel: "GB", ylabel: "cost" })),
  num(`A 1200-dollar couch is bought with 24 payments of 59 dollars. What is the extra cost as a percent of the price (1 decimal place)?`, 18, "1416 − 1200 = 216; 216 ÷ 1200.", null, 0.06),
  num(`With 3% inflation per year, what will a 50-dollar item cost in 5 years (to the cent)?`, 57.96, "50 × 1.03⁵ ≈ 57.96.", null, 0.006),
  num(`If prices rise 25%, what percent of its buying power does a dollar keep?`, 80, "1 ÷ 1.25 = 0.8."),
  ms(`Which are warning signs of fraud? Select all.`, ["pressure to act within minutes", "payment by gift card or cryptocurrency", "a prize for a contest you never entered", "a receipt for something you bought"], [0, 1, 2], "A real receipt is normal."),
  mc(`Car rental X: 35 dollars + 0.30 dollars/km. Y: 60 dollars + 0.20 dollars/km. Which is cheaper for 300 km?`, "Y", ["X", "they are equal", "neither"], "X: 125; Y: 120."),
  num(`For those rentals (X: 35 + 0.3k; Y: 60 + 0.2k), at how many km are they equal?`, 250, "0.1k = 25."),
  tf(`A 0% financing plan paid on time costs the same as paying cash.`, true, "No interest means the total equals the price (check for fees)."),
  num(`A 4 L can of paint costs 52 dollars and a 1 L can costs 15 dollars. How much is saved per litre by buying the 4 L can (dollars)?`, 2, "15 − 13."),
  mc(`Inflation is 4% and a savings account pays 1.5%. In terms of buying power, the savings…`, "lose value", ["gain value", "stay the same", "double"], "Prices rise faster than the balance."),
  num(`A coat costs 180 dollars and is 30% off. HST is 13%. What do you pay (to the cent)?`, 142.38, "180 × 0.7 × 1.13.", null, 0.006),
  num(`A product costs 12 dollars today. What did it cost 2 years ago if inflation was 2% a year (to the cent)?`, 11.53, "12 ÷ 1.02² ≈ 11.53.", null, 0.006),
  mc(`The best way to check a suspicious message from your bank is to…`, "call the bank using the number on your card or its website", ["click the link in the message", "reply with your account number", "forward it to friends"], "Use contact details you find yourself."),
  num(`A store offers 3 for 10 dollars on items that are 3.79 dollars each. How much is saved per item (to the cent)?`, 0.46, "3.79 − 3.33.", null, 0.006),
];
