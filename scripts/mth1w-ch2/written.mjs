// Chapter 2 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Teacher-marked: `points` are the marks, `feedback` is the model solution + marking notes printed
// in the answer key. Self-practice and auto-built online tests skip long_answer questions.
//   node scripts/mth1w-ch2/written.mjs           -> dry run
//   node scripts/mth1w-ch2/written.mjs --apply   -> inserts rows not already in the bank (matched by prompt)
// Bank text conventions: math in $...$, money written as "dollars" (never \$).
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const T = {
  1: "2.1 From Words to Algebraic Expressions",
  2: "2.2 Equivalent Expressions",
  3: "2.3 Simplifying Expressions",
  4: "2.4 Creating & Solving Equations",
  5: "2.5 Solving Multi-Step Equations",
  6: "2.6 Rearranging Formulas",
};
const W = (t, difficulty, points, prompt, feedback) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null });

export const WRITTEN = [
  // 2.1
  W(1, "medium", 3, String.raw`Printing $n$ T-shirts costs $85$ dollars for the screen plus $6.50$ dollars per shirt. (a) Write an expression for the cost. (b) Find the cost of $40$ shirts. (c) Explain what each number in your expression represents.`,
    String.raw`(a) $85+6.5n$. (b) $85+6.5(40)=85+260=345$ dollars. (c) $85$ is the one-time (fixed) cost that does not depend on $n$; $6.5$ is the cost per shirt, the amount added for each extra shirt. [1, 1, 1.]`),
  W(1, "hard", 4, String.raw`Square tables are pushed together in a row: $1$ table seats $4$ people, $2$ tables seat $6$, $3$ tables seat $8$. (a) Write an expression for the number of seats for $n$ tables. (b) How many people can sit at $30$ tables? (c) What is the fewest number of tables needed to seat $100$ people? (d) Explain what the constant term in your expression represents.`,
    String.raw`(a) $2n+2$. (b) $2(30)+2=62$. (c) $2n+2\ge100$ gives $n\ge49$, so $49$ tables. (d) The $2$ seats at the two ends of the row, which are there no matter how many tables are joined. [1 each.]`),
  W(1, "hard", 3, String.raw`Describe the three stages in the development of algebraic notation. Name one mathematician, their culture and what they contributed. Give one advantage of modern symbolic notation.`,
    String.raw`Rhetorical (all in words, e.g. Babylon, Egypt); syncopated (abbreviations, e.g. Diophantus in Alexandria); symbolic (letters and signs, e.g. Viète and Descartes in France). Example: Brahmagupta (India, 628) gave rules for zero and negative numbers; al-Khwārizmī (Baghdad, about 820) wrote the book whose title gave us “algebra”. Advantage: one short expression describes infinitely many cases and can be manipulated by rules. [1 stages, 1 contributor with culture and contribution, 1 advantage.]`),
  // 2.2
  W(2, "medium", 3, String.raw`Simplify $(3x^2-2xy+5y^2)-(x^2+4xy-2y^2)$. Check your answer by substituting $x=1$ and $y=2$ into the original expression and into your answer.`,
    String.raw`$3x^2-2xy+5y^2-x^2-4xy+2y^2=2x^2-6xy+7y^2$. Check: original $(3-4+20)-(1+8-8)=19-1=18$; answer $2-12+28=18$ ✓. [1 opposite of every term, 1 simplified, 1 check.]`),
  W(2, "hard", 4, String.raw`State whether each statement is always, sometimes or never true, and justify with examples. (a) The difference of two trinomials is a trinomial. (b) The sum of a polynomial of degree $3$ and a polynomial of degree $2$ has degree $3$.`,
    String.raw`(a) Sometimes: $(x^2+2x+1)-(x^2+x+5)=x-4$ (binomial), but $(2x^2+x+1)-(x^2+3x+5)=x^2-2x-4$ (trinomial). (b) Always: the degree-$2$ polynomial has no $x^3$ term to cancel the degree-$3$ term. [2 each: answer + justification.]`),
  W(2, "hard", 3, String.raw`Use algebra tiles (sketch or describe them) to explain why $2x$ and $x^2$ cannot be combined. Then use tiles and the zero principle to simplify $(2x^2-3x+1)+(-x^2+3x+2)$.`,
    String.raw`An $x$ tile is $x$ by $1$ and an $x^2$ tile is $x$ by $x$ — different shapes and areas, so they are not like terms. Sum: one $x^2$ zero pair, three $x$ zero pairs; left: one $x^2$ and three unit tiles: $x^2+3$. [1 explanation, 1 zero pairs shown, 1 answer.]`),
  // 2.3
  W(3, "medium", 3, String.raw`Expand and simplify $3x(2x-5)-2(x^2-4x+1)$. Then evaluate the original expression and your answer at $x=2$ to check.`,
    String.raw`$6x^2-15x-2x^2+8x-2=4x^2-7x-2$. Check at $x=2$: original $6(-1)-2(4-8+1)=-6+6=0$; answer $16-14-2=0$ ✓. [1 expansion with signs, 1 simplified, 1 check.]`),
  W(3, "hard", 4, String.raw`Factor $24a^3b-36a^2b^2+12a^2b$ completely. Explain how you know the factoring is complete, and verify by expanding.`,
    String.raw`GCF: $12$ (of $24, 36, 12$), $a^2$, $b$: $12a^2b(2a-3b+1)$. Complete because $2a$, $-3b$ and $1$ share no common factor. Expanding gives $24a^3b-36a^2b^2+12a^2b$ ✓. [1 GCF, 1 bracket, 1 reason, 1 check.]`),
  W(3, "hard", 4, String.raw`A rectangular yard is $3x$ m by $(2x+5)$ m. A deck $2x$ m by $x$ m is built in one corner. (a) Write a simplified expression for the area of lawn left. (b) Find the lawn area when $x=4$. (c) Grass seed costs $0.80$ dollars per square metre. What does it cost to seed the lawn when $x=4$?`,
    String.raw`(a) $3x(2x+5)-2x(x)=6x^2+15x-2x^2=4x^2+15x$. (b) $64+60=124$ m². (c) $124\times0.80=99.20$ dollars. [2, 1, 1.]`),
  // 2.4
  W(4, "medium", 3, String.raw`Solve $7-4x=31$. Name the inverse operation used in each step, and verify your solution.`,
    String.raw`Subtract $7$ from both sides: $-4x=24$. Divide both sides by $-4$: $x=-6$. Verify: $7-4(-6)=7+24=31$ ✓. [1 each step with its inverse operation, 1 verification.]`),
  W(4, "hard", 4, String.raw`An electrician's charges are shown: $0$ h — $70$ dollars, $1$ h — $115$ dollars, $2$ h — $160$ dollars, $3$ h — $205$ dollars. (a) Write a relation for the cost $C$ for $h$ hours. (b) Write and solve an equation to find how long a $340$-dollar job took. (c) A bill was $300$ dollars. Solve, and explain what the answer means.`,
    String.raw`(a) $C=70+45h$. (b) $70+45h=340$, $45h=270$, $h=6$ h. (c) $45h=230$, $h\approx5.11$ h, about $5$ h $7$ min; a non-whole answer is fine because time is continuous (or, if she bills only whole hours, it shows the bill was not for whole hours). [1, 2, 1.]`),
  W(4, "hard", 3, String.raw`Use $5(x-3)+2=27$ to explain why operations must be undone in reverse order. Solve the equation.`,
    String.raw`Building the left side from $x$: subtract $3$, multiply by $5$, add $2$. Undo the last operation first: $-2$ gives $5(x-3)=25$; $\div5$ gives $x-3=5$; $+3$ gives $x=8$. Undoing in another order (e.g. dividing $27$ by $5$ first) ignores that the $+2$ was added after the multiplication. Check: $5(5)+2=27$ ✓. [1 explanation, 1 steps, 1 answer.]`),
  // 2.5
  W(5, "medium", 4, String.raw`Solve $\dfrac{x+4}{3}-\dfrac{x-2}{5}=2$. Show how you clear the fractions and verify your answer.`,
    String.raw`Multiply every term by $15$: $5(x+4)-3(x-2)=30$; $5x+20-3x+6=30$; $2x+26=30$; $x=2$. Verify: $\frac63-\frac05=2$ ✓. [1 LCD with brackets, 1 expansion, 1 answer, 1 check.]`),
  W(5, "hard", 4, String.raw`A rectangle's length is $5$ cm less than three times its width. If the width is doubled (and the length stays the same), the perimeter increases by $18$ cm. Find the original dimensions.`,
    String.raw`Let the width be $w$; length $3w-5$. Original perimeter $2(w+3w-5)=8w-10$. New perimeter $2(2w+3w-5)=10w-10$. $10w-10=8w-10+18$ gives $2w=18$, $w=9$; length $22$ cm. Check: $62$ cm and $80$ cm differ by $18$ ✓. [1 variables, 1 perimeters, 1 equation, 1 answer.]`),
  W(5, "hard", 4, String.raw`Explain the difference between an equation with no solution and an identity. Create one example of each in the form $a(x+b)=cx+d$, and show the work that identifies each.`,
    String.raw`No solution: the variable cancels and a false statement remains, e.g. $2(x+3)=2x+1$ gives $6=1$. Identity: the variable cancels and a true statement remains, so every value works, e.g. $3(x-2)=3x-6$ gives $-6=-6$. [1 each definition, 1 each example with work.]`),
  // 2.6
  W(6, "medium", 3, String.raw`Solve $A=\frac12bh$ for $b$. A triangular sail has area $6.3$ m² and height $4.2$ m. Find the length of its base.`,
    String.raw`$2A=bh$, so $b=\frac{2A}{h}$. $b=\frac{12.6}{4.2}=3$ m. [1 rearranged, 1 substitution, 1 answer with units.]`),
  W(6, "hard", 4, String.raw`Rearrange $3x-5y=30$ into the form $y=mx+b$. State the slope, the $y$-intercept and the $x$-intercept, and explain what the sign of the slope tells you about the line.`,
    String.raw`$-5y=-3x+30$, $y=\frac35x-6$. Slope $\frac35$, $y$-intercept $-6$, $x$-intercept $10$ (set $y=0$: $3x=30$). Positive slope: the line rises from left to right. [1 rearranged, 1 slope and $y$-int, 1 $x$-int, 1 explanation.]`),
  W(6, "hard", 4, String.raw`(a) Solve $F=1.8C+32$ for $C$. (b) Show that $-40$ degrees is the same on both scales. (c) A weather table lists $50$ Fahrenheit temperatures. Explain why it is better to rearrange the formula once than to solve $50$ equations.`,
    String.raw`(a) $C=\frac{F-32}{1.8}$. (b) $\frac{-40-32}{1.8}=\frac{-72}{1.8}=-40$ (or solve $C=1.8C+32$: $-0.8C=32$, $C=-40$). (c) The rearranged formula is a single rule that can be entered once in a spreadsheet or calculator and applied to every value; solving $50$ equations repeats the same steps and multiplies the chance of errors. [1, 1, 2.]`),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MTH1W").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const rows = WRITTEN.map((w) => ({ ...w, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic)?.id ?? null }));
  const todo = rows.filter((r) => !have.has(r.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${rows.reduce((s, r) => s + r.points, 0)} marks in total; ${rows.filter((r) => !r.lesson_id).length} without a lesson yet (2.5/2.6 link by topic)`);
  if (APPLY) {
    if (todo.length) { const r = await db.from("bank_questions").insert(todo); if (r.error) throw r.error; }
    console.log(`inserted ${todo.length}`);
  } else console.log("Dry run — use --apply (database).");
}
