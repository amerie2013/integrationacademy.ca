// 1.9 Rates, Percentages & Percent Change — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph, percentBar } from "./svg.mjs";

export const TOPIC = "1.9 Rates, Percentages & Percent Change";
export const Q = [
  num(String.raw`The graph shows the distance a car travels at a constant speed. At this speed, how many hours does it take to travel $595$ km?`, 7,
    String.raw`Speed $=170\div2=85$ km/h; $595\div85=7$ h.`, graph({ series: [{ pts: [[0, 0], [2, 170], [4, 340]] }], xmin: 0, xmax: 5, ymin: 0, ymax: 400, xstep: 1, ystep: 50, xlabel: "time (h)", ylabel: "distance (km)" })),
  mc(String.raw`Which size of juice is the best buy?`, "2.5 L for 5.39 dollars", ["750 mL for 1.89 dollars", "1.5 L for 3.49 dollars", "All cost the same per litre"], String.raw`Per litre: $2.52$, $\approx2.33$, $\approx2.16$ dollars.`),
  num(String.raw`After a $20\%$ increase a price is $54$ dollars. What was the original price in dollars?`, 45, String.raw`$1.2p=54$, $p=45$.`),
  num(String.raw`A $120$-dollar coat is $15\%$ off, then $13\%$ HST is added. Find the final price in dollars.`, 115.26, String.raw`$120\times0.85\times1.13=115.26$.`, undefined, 0.006),
  ms(String.raw`Which are equal to $12.5\%$? Select all.`, [String.raw`$\frac18$`, "$0.125$", String.raw`$\frac{12.5}{100}$`, String.raw`$\frac{1}{12.5}$`, "$0.0125$"], [0, 1, 2], String.raw`$12.5\%=0.125=\frac18$. $\frac1{12.5}=0.08$.`),
  num(String.raw`The temperature is $8\,^\circ$C and changes at $-2.4\,^\circ$C per hour. What is it after $5$ hours?`, -4, String.raw`$8+5(-2.4)=8-12=-4$.`),
  tf(String.raw`A $50\%$ increase followed by a $50\%$ decrease returns a price to its original value.`, false, String.raw`$1.5\times0.5=0.75$: the price ends $25\%$ lower.`),
  num(String.raw`The bar shows the percent of $240$ students who take the bus. How many students take the bus?`, 84, String.raw`$35\%$ of $240=0.35\times240=84$.`, percentBar({ pct: 35, leftLabel: "bus: 35%", rightLabel: "240 students" })),
  num(String.raw`Find the percent increase from $64$ to $80$. (Give the number of percent.)`, 25, String.raw`$\frac{80-64}{64}=\frac{16}{64}=25\%$.`),
  fill(String.raw`Write $0.8\%$ as a decimal: ___`, ["0.008", ".008"], String.raw`$0.8\div100=0.008$.`),
  mc(String.raw`Which is the fastest?`, "75 km/h", ["42 km in 35 min", "1.1 km per minute", "20 m/s"], String.raw`In km/min: $1.2$, $1.25$, $1.1$, $1.2$. $75$ km/h $=1.25$ km/min is fastest.`),
  num(String.raw`After two raises of $10\%$ each, a salary is $60\,500$ dollars. What was it before the raises?`, 50000, String.raw`$1.1\times1.1=1.21$; $60\,500\div1.21=50\,000$.`),
  num(String.raw`A full $1500$ L tank drains at $37.5$ L/min. After how many minutes is it $25\%$ full?`, 30, String.raw`It must lose $75\%$ of $1500=1125$ L; $1125\div37.5=30$ min.`),
  tf(String.raw`A rate of change of $-15$ m/min means the quantity increases by $15$ m each minute.`, false, String.raw`The negative sign means it decreases by $15$ m each minute.`),
  num(String.raw`If $1$ Canadian dollar $=0.73$ US dollars, how many Canadian dollars equal $250$ US dollars? (Round to the cent.)`, 342.47, String.raw`$250\div0.73\approx342.47$.`, undefined, 0.006),
  mc(String.raw`A price including $13\%$ HST is $90.40$ dollars. What was the price before tax?`, "80 dollars", ["78.65 dollars", "77.40 dollars", "102.15 dollars"], String.raw`$1.13p=90.40$, $p=80$. (Subtracting $13\%$ of $90.40$ gives the wrong $78.65$.)`),
  num(String.raw`A runner covers $400$ m in $64$ s. What is her average speed in km/h?`, 22.5, String.raw`$400\div64=6.25$ m/s; $6.25\times3.6=22.5$ km/h.`, undefined, 0.001),
  ms(String.raw`Which statements are true? Select all.`, [String.raw`$150\%$ of $40$ is $60$`, String.raw`$40$ is $80\%$ of $50$`, String.raw`going from $50$ to $40$ is a $25\%$ decrease`, String.raw`$\frac14\%=0.0025$`, String.raw`doubling a price is a $200\%$ increase`], [0, 1, 3], String.raw`$50\to40$ is a $20\%$ decrease; doubling is a $100\%$ increase.`),
  num(String.raw`$3$ kg of cheese costs $13.80$ dollars. How much do $4.5$ kg cost, in dollars?`, 20.7, String.raw`$13.80\div3=4.60$ per kg; $4.60\times4.5=20.70$.`, undefined, 0.006),
  num(String.raw`The graph shows the water level in a draining tank. What is the rate of change of the level, in cm per minute?`, -3,
    String.raw`$\frac{60-90}{10-0}=-3$ cm/min.`, graph({ series: [{ pts: [[0, 90], [5, 75], [10, 60]] }], xmin: 0, xmax: 12, ymin: 0, ymax: 100, xstep: 2, ystep: 10, xlabel: "time (min)", ylabel: "level (cm)" })),
];
