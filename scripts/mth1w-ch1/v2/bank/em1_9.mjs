// 1.9 Rates, Percentages & Percent Change — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph, percentBar } from "./svg.mjs";

export const E = [
  num(String.raw`Find $10\%$ of $350$.`, 35, String.raw`$0.1\times350$.`),
  num(String.raw`Find $25\%$ of $80$.`, 20, String.raw`$\frac14$ of $80$.`),
  fill(String.raw`Write $0.4$ as a percent: ___`, ["40%", "40"], String.raw`$0.4\times100=40\%$.`),
  fill(String.raw`Write $\frac{3}{5}$ as a percent: ___`, ["60%", "60"], String.raw`$\frac35=0.6=60\%$.`),
  num(String.raw`Write $8\%$ as a decimal.`, 0.08, String.raw`$8\div100$.`, undefined, 0.000001),
  num(String.raw`A car travels $240$ km in $3$ h. What is its speed in km/h?`, 80, String.raw`$240\div3$.`),
  num(String.raw`$5$ apples cost $3.50$ dollars. What is the price of one apple, in dollars?`, 0.7, String.raw`$3.50\div5$.`, undefined, 0.001),
  mc("Which is a rate?", "60 km per hour", ["3 cats to 5 dogs", "40%", String.raw`$\frac34$ of a pizza`], "A rate compares quantities with different units."),
  tf(String.raw`$150\%$ of a number is more than the number.`, true, "150% is 1.5 times the number."),
  num(String.raw`$9$ is what percent of $36$?`, 25, String.raw`$\frac{9}{36}=0.25$.`),
  mc("Which is the better buy?", "2 kg for 6 dollars", ["1 kg for 3.50 dollars", "500 g for 2 dollars", "They cost the same per kg"], "Per kg: 3.00, 3.50, 4.00."),
  num(String.raw`A shirt costs $40$ dollars and is $20\%$ off. What is the sale price, in dollars?`, 32, String.raw`$40\times0.8$.`),
  num(String.raw`Add $13\%$ HST to $100$ dollars. What is the total, in dollars?`, 113, String.raw`$100\times1.13$.`),
  num(String.raw`What percent of the bar is shaded?`, 70, "7 of the 10 sections.", percentBar({ pct: 70 })),
  tf(String.raw`A rate of change of $-5$ m per minute means the height is going down.`, true, "A negative rate means decreasing."),
  num(String.raw`A tap fills a $60$ L tub in $12$ minutes. How many litres per minute?`, 5, String.raw`$60\div12$.`),
  ms(String.raw`Which equal $50\%$? Select all.`, [String.raw`$\frac12$`, "$0.5$", String.raw`$\frac{5}{10}$`, "$0.05$"], [0, 1, 2], String.raw`$0.05=5\%$.`),
  num(String.raw`The graph shows a cyclist's distance. What is her speed in km/h?`, 15, String.raw`$30$ km in $2$ h.`, graph({ series: [{ pts: [[0, 0], [1, 15], [2, 30]] }], xmin: 0, xmax: 3, ymin: 0, ymax: 50, xstep: 1, ystep: 10, xlabel: "time (h)", ylabel: "km" })),
  num(String.raw`A price rises from $20$ dollars to $25$ dollars. What is the percent increase?`, 25, String.raw`$\frac{5}{20}=25\%$.`),
  fill(String.raw`Write $1.25$ as a percent: ___`, ["125%", "125"], "Multiply by 100."),
];

export const M = [
  num(String.raw`$24$ is $15\%$ of what number?`, 160, String.raw`$0.15n=24$.`),
  num(String.raw`A $64$-dollar jacket is $25\%$ off, then $13\%$ HST is added. What is the final price, in dollars?`, 54.24, String.raw`$64\times0.75\times1.13=54.24$.`, undefined, 0.006),
  num(String.raw`A population falls from $1250$ to $1000$. What is the percent decrease?`, 20, String.raw`$\frac{250}{1250}=20\%$.`),
  mc("Which is the cheapest per 100 g?", "750 g for 4.50 dollars", ["500 g for 3.25 dollars", "250 g for 1.75 dollars", "1 kg for 6.20 dollars"], "Per 100 g: 0.60, 0.65, 0.70, 0.62."),
  num(String.raw`The temperature changes from $9\,^\circ$C to $-6\,^\circ$C in $5$ hours. What is the rate of change in $^\circ$C per hour?`, -3, String.raw`$\frac{-6-9}{5}=-3$.`),
  num(String.raw`A worker earns $18.50$ dollars per hour. How much for $7.5$ hours, in dollars?`, 138.75, String.raw`$18.50\times7.5$.`, undefined, 0.006),
  tf(String.raw`A $20\%$ increase followed by a $20\%$ decrease gives the original price.`, false, String.raw`$1.2\times0.8=0.96$.`),
  num(String.raw`After a $12\%$ raise, a wage is $28$ dollars per hour. What was it before, in dollars?`, 25, String.raw`$1.12w=28$.`),
  fill(String.raw`Write $\frac{7}{20}$ as a percent: ___`, ["35%", "35"], String.raw`$\frac{35}{100}$.`),
  num(String.raw`A printer prints $45$ pages in $1.5$ minutes. How many pages in $8$ minutes?`, 240, String.raw`$30$ pages per minute.`),
  mc(String.raw`Which multiplier increases a price by $7\%$?`, "$1.07$", ["$0.07$", "$1.7$", "$0.93$"], String.raw`$100\%+7\%=107\%$.`),
  num(String.raw`The graph shows the water level in a draining pool. What is the rate of change in cm per hour?`, -4, String.raw`$\frac{80-100}{5}=-4$.`, graph({ series: [{ pts: [[0, 100], [5, 80], [10, 60]] }], xmin: 0, xmax: 12, ymin: 0, ymax: 110, xstep: 2, ystep: 10, xlabel: "hours", ylabel: "cm" })),
  ms("Which are true? Select all.", [String.raw`$40\%$ of $90$ is $36$`, String.raw`$12$ is $30\%$ of $40$`, String.raw`$0.5\%=0.5$`, String.raw`$200\%$ of $15$ is $30$`], [0, 1, 3], String.raw`$0.5\%=0.005$.`),
  num(String.raw`A store marks up a $30$-dollar item by $40\%$. What is the selling price, in dollars?`, 42, String.raw`$30\times1.4$.`),
  num(String.raw`What percent of the students in the bar walk to school?`, 45, "4.5 of the 10 sections are shaded.", percentBar({ pct: 45, leftLabel: "walk", rightLabel: "all students" })),
  num(String.raw`A car uses $7$ L of fuel per $100$ km. How much fuel does it need for $350$ km, in litres?`, 24.5, String.raw`$7\times3.5$.`, undefined, 0.001),
  mc(String.raw`A $90$-dollar game is on sale for $72$ dollars. What is the percent discount?`, "$20\\%$", ["$18\\%$", "$25\\%$", "$80\\%$"], String.raw`$\frac{18}{90}=20\%$.`),
  num(String.raw`A town of $8000$ grows by $5\%$ per year. What is its population after one year?`, 8400, String.raw`$8000\times1.05$.`),
  tf(String.raw`To find the original price after a $25\%$ discount, divide the sale price by $0.75$.`, true, String.raw`sale $=0.75\times$original.`),
  num(String.raw`A runner covers $5$ km in $25$ minutes. What is her speed in km/h?`, 12, String.raw`$5$ km per $\frac{5}{12}$ h $=12$ km/h.`),
];
