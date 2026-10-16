// Chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Teacher-marked: `points` are the marks, `feedback` is the model solution + marking notes printed
// in the answer key. Self-practice and auto-built online tests skip long_answer questions.
//   node scripts/mth1w-ch1/v2/written.mjs             -> dry run (lists what would be added)
//   node scripts/mth1w-ch1/v2/written.mjs --preview   -> LOCAL ONLY: .lesson-preview/bank-<courseId>.json for npm run dev
//   node scripts/mth1w-ch1/v2/written.mjs --apply     -> inserts rows not already in the bank (matched by prompt)
// Bank text conventions: math in $...$, money written as "dollars" (never \$).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { randomUUID } from "crypto";

const T = {
  1: "1.1 Number Sets & Their Subsets",
  2: "1.2 Adding & Subtracting Integers",
  3: "1.3 Multiplying & Dividing Integers",
  4: "1.4 Fractions: Equivalence, Comparing, Adding & Subtracting",
  5: "1.5 Fractions: Multiplying, Dividing & Reciprocals",
  6: "1.6 Powers: Zero & Negative Exponents",
  7: "1.7 Exponent Laws & Scientific Notation",
  8: "1.8 Working with Ratios and Proportions",
  9: "1.9 Rates, Percentages & Percent Change",
  10: "1.10 Density, Infinity & Limit",
};
const W = (t, difficulty, points, prompt, feedback) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null });

export const WRITTEN = [
  // 1.1
  W(1, "medium", 4, String.raw`List every set (natural, whole, integer, rational, irrational, real) that each number belongs to: $-\frac{20}{4}$, $0.\overline{12}$, $\sqrt{45}$, $3.0$.`,
    String.raw`$-\frac{20}{4}=-5$: integer, rational, real. $0.\overline{12}=\frac{12}{99}=\frac{4}{33}$: rational, real. $\sqrt{45}$: 45 is not a perfect square, so irrational, real. $3.0=3$: natural, whole, integer, rational, real. [1 mark each; the first and last need simplifying first.]`),
  W(1, "hard", 4, String.raw`Show that $0.\overline{27}=0.2727\ldots$ is a rational number by writing it as a fraction in lowest terms. Explain each step.`,
    String.raw`Let $x=0.\overline{27}$. Two digits repeat, so $100x=27.\overline{27}$. Subtract: $100x-x=27$, so $99x=27$ and $x=\frac{27}{99}=\frac{3}{11}$. A quotient of integers, so rational. [1 set up, 1 multiply by 100, 1 subtract, 1 lowest terms + conclusion.]`),
  W(1, "hard", 3, String.raw`Priya says: "Every square root is irrational." Give a counterexample to show she is wrong, then rewrite her statement so that it is true.`,
    String.raw`Counterexample: $\sqrt{25}=5$, which is rational. True statement: "The square root of a whole number that is not a perfect square is irrational." [1 counterexample, 1 explanation, 1 corrected statement.]`),
  // 1.2
  W(2, "medium", 3, String.raw`A submarine at $-120$ m rises $45$ m, dives $80$ m, then rises $30$ m. Write a single expression for its final position and evaluate it.`,
    String.raw`$-120+45-80+30=-125$. The submarine ends at $-125$ m (125 m below sea level). [1 expression, 1 correct signs/working, 1 answer with meaning.]`),
  W(2, "medium", 3, String.raw`Ontario's highest recorded temperature is about $42\,^\circ\text{C}$ and its lowest is about $-58\,^\circ\text{C}$. (a) Find the difference between them. (b) Explain why the calculation is a subtraction and why the answer is larger than both numbers' sizes.`,
    String.raw`(a) $42-(-58)=42+58=100\,^\circ\text{C}$. (b) A difference (distance) is higher minus lower; subtracting a negative adds its opposite, so the two distances from $0$ (42 and 58) add up. [1 setup, 1 answer, 1 explanation.]`),
  W(2, "hard", 4, String.raw`Use three different integers from $-5$ to $5$ to make $\square+\square-\square=-9$ true. Give two different solutions and describe the strategy you used.`,
    String.raw`Examples: $-5+(-2)-2=-9$; $-4+(-3)-2=-9$; $-5+(-1)-3=-9$. Strategy: the first two terms should be negative and the subtracted number positive, since every term then pushes the total down. [1 each correct solution (max 2), 2 for a clear strategy.]`),
  // 1.3
  W(3, "medium", 4, String.raw`Evaluate $\dfrac{(-2)^3-4(-7)}{-15\div3}$. Show each step.`,
    String.raw`Numerator: $(-2)^3=-8$ and $-4(-7)=28$, so $-8+28=20$. Denominator: $-15\div3=-5$. Quotient: $20\div(-5)=-4$. [1 power, 1 product, 1 denominator, 1 final with correct sign.]`),
  W(3, "hard", 4, String.raw`In Iqaluit the temperature fell at a steady $3\,^\circ\text{C}$ per hour for $7$ hours and ended at $-26\,^\circ\text{C}$. What was the starting temperature? Explain using integer operations.`,
    String.raw`Total change $=7\times(-3)=-21$. Start $+(-21)=-26$, so start $=-26-(-21)=-26+21=-5\,^\circ\text{C}$. [1 total change, 1 equation/reasoning, 1 subtraction of a negative, 1 answer.]`),
  W(3, "hard", 3, String.raw`Without calculating, decide whether $(-2)^{11}\times(-5)^{4}\times(-1)^{7}$ is positive or negative. Explain your reasoning.`,
    String.raw`$(-2)^{11}$ has an odd number of negative factors: negative. $(-5)^4$ has an even number: positive. $(-1)^7$: negative. Two negative factors overall, so the product is positive. [1 per correct factor sign with reason (max 2), 1 conclusion.]`),
  // 1.4
  W(4, "medium", 4, String.raw`Order from least to greatest and explain your method: $-\frac{3}{4}$, $\frac{5}{8}$, $-\frac{2}{3}$, $\frac{7}{12}$.`,
    String.raw`LCD 24: $-\frac{18}{24}$, $\frac{15}{24}$, $-\frac{16}{24}$, $\frac{14}{24}$. Order: $-\frac{3}{4}<-\frac{2}{3}<\frac{7}{12}<\frac{5}{8}$. [1 common denominator, 1 conversions, 1 order, 1 explanation of negatives.]`),
  W(4, "hard", 4, String.raw`A recipe needs $2\frac{1}{3}$ cups of flour. Jo has $3\frac{1}{4}$ cups but first uses $\frac{5}{6}$ cup for a sauce. Is there enough flour left for the recipe? Show your work.`,
    String.raw`$3\frac14-\frac56=\frac{39}{12}-\frac{10}{12}=\frac{29}{12}=2\frac{5}{12}$ cups left. The recipe needs $2\frac13=\frac{28}{12}$. Since $\frac{29}{12}>\frac{28}{12}$, yes — with $\frac{1}{12}$ cup to spare. [1 conversion, 1 subtraction, 1 comparison, 1 conclusion.]`),
  W(4, "hard", 3, String.raw`Evaluate $1\frac{2}{5}-\left(-\frac{3}{10}\right)+\left(-2\frac{1}{2}\right)$. Give the answer in lowest terms.`,
    String.raw`$\frac{7}{5}+\frac{3}{10}-\frac{5}{2}=\frac{14}{10}+\frac{3}{10}-\frac{25}{10}=-\frac{8}{10}=-\frac{4}{5}$. [1 improper fractions + signs, 1 LCD, 1 answer.]`),
  // 1.5
  W(5, "medium", 4, String.raw`Evaluate $-\frac{4}{5}\div1\frac{1}{3}\times\frac{5}{6}$. Show each step.`,
    String.raw`$1\frac13=\frac43$. Left to right: $-\frac45\times\frac34=-\frac35$; then $-\frac35\times\frac56=-\frac12$. [1 improper fraction, 1 reciprocal, 1 multiplication, 1 sign + lowest terms.]`),
  W(5, "hard", 4, String.raw`A board $5\frac{1}{4}$ m long is cut into pieces $\frac{7}{8}$ m long. How many pieces can be cut? Is any wood left over? Show your work.`,
    String.raw`$5\frac14\div\frac78=\frac{21}{4}\times\frac{8}{7}=\frac{168}{28}=6$. Exactly $6$ pieces, nothing left over. [1 division set-up, 1 reciprocal, 1 answer, 1 leftover statement.]`),
  W(5, "hard", 3, String.raw`Explain, using a diagram or numbers, why $3\div\frac{1}{4}$ is larger than $3$.`,
    String.raw`Dividing asks how many quarters fit in $3$. Each whole holds $4$ quarters, so $3$ wholes hold $12$: $3\div\frac14=3\times4=12$. Dividing by a number less than $1$ gives more groups than the original amount. [1 meaning of division, 1 answer, 1 general reason.]`),
  // 1.6
  W(6, "medium", 4, String.raw`Evaluate $\dfrac{2^{-2}+3^{0}}{(-2)^{3}}$. Give an exact answer.`,
    String.raw`$2^{-2}=\frac14$, $3^0=1$, so the numerator is $\frac54$. $(-2)^3=-8$. $\frac54\div(-8)=-\frac{5}{32}$. [1 negative exponent, 1 zero exponent, 1 negative base, 1 answer.]`),
  W(6, "hard", 4, String.raw`A bacteria population doubles every hour. There are $3200$ bacteria now. (a) Write an expression with a power of $2$ for the population $4$ hours ago. (b) Evaluate it. (c) Explain what the negative exponent means here.`,
    String.raw`(a) $3200\times2^{-4}$. (b) $3200\times\frac{1}{16}=200$. (c) Going back in time undoes doubling: each earlier hour divides by $2$, which a negative exponent represents. [1, 1, 2.]`),
  W(6, "hard", 3, String.raw`Order from least to greatest and explain: $(-3)^2$, $-3^2$, $3^{-2}$, $(-3)^0$.`,
    String.raw`$-3^2=-9$, $3^{-2}=\frac19$, $(-3)^0=1$, $(-3)^2=9$. Order: $-3^2<3^{-2}<(-3)^0<(-3)^2$. Brackets decide the base; a negative exponent gives a reciprocal. [1 values, 1 order, 1 explanation.]`),
  // 1.7
  W(7, "medium", 4, String.raw`Simplify $\dfrac{(2x^3)^4\cdot x^{-2}}{8x^5}$. Name each exponent law you use.`,
    String.raw`Power of a product / power of a power: $(2x^3)^4=16x^{12}$. Product law: $16x^{12}\cdot x^{-2}=16x^{10}$. Quotient law: $\frac{16x^{10}}{8x^5}=2x^5$. [1 per correct step with law named, 1 final.]`),
  W(7, "hard", 4, String.raw`Earth's mass is about $5.97\times10^{24}$ kg and the Moon's mass is about $7.35\times10^{22}$ kg. About how many times as massive as the Moon is Earth? Show your work in scientific notation.`,
    String.raw`$\frac{5.97\times10^{24}}{7.35\times10^{22}}=\frac{5.97}{7.35}\times10^{2}\approx0.812\times10^{2}=8.12\times10^{1}$. Earth is about $81$ times as massive. [1 set-up, 1 divide decimals, 1 subtract exponents, 1 answer.]`),
  W(7, "hard", 3, String.raw`A student wrote $3^4\times3^2=9^6$. Explain the mistake and give the correct answer.`,
    String.raw`The bases were multiplied. With the same base you keep the base and add the exponents: $3^4\times3^2=3^6=729$ (not $9^6$). [1 identifies error, 1 correct law, 1 value.]`),
  // 1.8
  W(8, "medium", 3, String.raw`Concrete is mixed cement : sand : gravel $=1:2:4$ by mass. A builder needs $350$ kg of concrete. How much of each ingredient is needed?`,
    String.raw`$1+2+4=7$ parts; one part $=350\div7=50$ kg. Cement $50$ kg, sand $100$ kg, gravel $200$ kg. [1 parts, 1 one part, 1 amounts.]`),
  W(8, "hard", 4, String.raw`The ratio of boys to girls in a club is $3:5$. After $6$ more boys join (and no one leaves), the ratio becomes $1:1$. How many girls are in the club? Show your reasoning.`,
    String.raw`Let the club have $3k$ boys and $5k$ girls. Then $3k+6=5k$, so $2k=6$ and $k=3$. Girls $=15$ (boys went from $9$ to $15$). [1 representation, 1 equation, 1 solve, 1 answer with check.]`),
  W(8, "medium", 3, String.raw`A model car is built at a scale of $1:24$. The model is $18.5$ cm long. How long is the real car, in metres?`,
    String.raw`Real length $=18.5\times24=444$ cm $=4.44$ m. [1 proportion, 1 multiply, 1 unit conversion.]`),
  // 1.9
  W(9, "medium", 4, String.raw`A phone costs $640$ dollars. It is $15\%$ off, and $13\%$ HST is charged on the sale price. (a) Find the final cost. (b) Would the cost change if the tax were added before the discount? Explain.`,
    String.raw`(a) $640\times0.85=544$; $544\times1.13=614.72$ dollars. (b) No: $640\times0.85\times1.13=640\times1.13\times0.85$ because multiplication can be done in any order. [1 discount, 1 tax, 1 answer, 1 explanation.]`),
  W(9, "hard", 4, String.raw`A $1800$ L tank drains at $45$ L/min. (a) Write the rate of change of the volume as a signed rate. (b) How long until the tank is empty? (c) How much water is left after $25$ minutes?`,
    String.raw`(a) $-45$ L/min. (b) $1800\div45=40$ min. (c) $1800+25\times(-45)=1800-1125=675$ L. [1, 1, 2.]`),
  W(9, "hard", 3, String.raw`A price rises by $25\%$ and then falls by $20\%$. Show that it returns to the original price. Then explain why a $20\%$ rise followed by a $20\%$ fall does not.`,
    String.raw`$1.25\times0.80=1$, so the price is unchanged. But $1.20\times0.80=0.96$: the fall is $20\%$ of a larger amount, so the price ends $4\%$ lower. [1 first product, 1 second product, 1 explanation.]`),
  // 1.10
  W(10, "medium", 3, String.raw`Find three rational numbers between $-\frac{1}{3}$ and $-\frac{1}{4}$. Show your method.`,
    String.raw`LCD 12: $-\frac{4}{12}$ and $-\frac{3}{12}$. Use 48ths: $-\frac{16}{48}$ and $-\frac{12}{48}$, so $-\frac{15}{48},-\frac{14}{48},-\frac{13}{48}$ (that is $-\frac{5}{16},-\frac{7}{24},-\frac{13}{48}$). Other correct answers accepted. [1 method, 2 three numbers.]`),
  W(10, "hard", 4, String.raw`Use algebra to show that $0.\overline{9}=1$. Then explain why no number lies between $0.\overline{9}$ and $1$.`,
    String.raw`Let $x=0.\overline{9}$; $10x=9.\overline{9}$; $10x-x=9$, so $9x=9$ and $x=1$. If some number $y$ lay between them, then $y<1$, so with enough nines $0.99\ldots9>y$ — and $0.\overline{9}$ is larger than every such decimal, so $0.\overline{9}>y$, a contradiction. No gap exists: they are the same number. [2 algebra, 2 explanation.]`),
  W(10, "hard", 4, String.raw`A ball is dropped from $2$ m and each bounce reaches half the previous height. (a) List the heights of the first $5$ bounces. (b) What value do the heights approach? (c) In this model, does the ball ever stop bouncing? Explain.`,
    String.raw`(a) $1,\ 0.5,\ 0.25,\ 0.125,\ 0.0625$ m. (b) $0$. (c) In the model every height is half the last, so it is never exactly $0$ — infinitely many bounces whose limit is $0$. A real ball stops because of energy loss the model ignores. [1, 1, 2.]`),
];

const APPLY = process.argv.includes("--apply");
const PREVIEW = process.argv.includes("--preview");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MTH1W").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const rows = WRITTEN.map((w) => ({ ...w, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic)?.id ?? null }));
  const missingLesson = rows.filter((r) => !r.lesson_id).map((r) => r.topic);
  if (missingLesson.length) console.log("WARNING: no lesson with title:", [...new Set(missingLesson)]);
  const todo = rows.filter((r) => !have.has(r.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${rows.reduce((s, r) => s + r.points, 0)} marks in total`);
  if (PREVIEW) {
    mkdirSync(".lesson-preview", { recursive: true });
    writeFileSync(`.lesson-preview/bank-${cid}.json`, JSON.stringify({ rows: rows.map((r) => ({ id: randomUUID(), ...r })) }));
    console.log(`preview written: .lesson-preview/bank-${cid}.json (dev server only)`);
  } else if (APPLY) {
    if (todo.length) { const r = await db.from("bank_questions").insert(todo); if (r.error) throw r.error; }
    console.log(`inserted ${todo.length}`);
  } else console.log("Dry run — use --preview (local) or --apply (database).");
}
