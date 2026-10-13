// MTH1W 2.4 — Creating & Solving Equations: one-step and two-step (advanced, brackets allowed), interactive + application.
// Replaces the earlier 2.4 bank, assignment and worksheet content. The bank lives in bank24.mjs.
import { packWorksheet } from "../mth1w-ch1/lib.mjs";

export const CODE = "2.4";
export const TITLE = "Creating & Solving Equations";
export const FULL_TITLE = `${CODE} ${TITLE}`;
export const lessonBlocks = () => []; // the lesson itself is unchanged
export { bank } from "./bank24.mjs";

export const ASSIGNMENT = {
  title: `Assignment ${CODE} — Solving Equations`,
  description: String.raw`Knowledge & Understanding
1. Solve \( y-12=-5 \).
2. Solve \( \dfrac25n=8 \).
3. Solve \( 5x-9=26 \) and check your answer.
Thinking
4. Solve \( -2(x+7)=18 \). Show each step, then check by substituting.
5. Write two different two-step equations that both have the solution \( x=-4 \): one that uses brackets and one that uses a fraction.
Communication
6. Explain why we do the same operation to both sides of an equation. Use \( 3x+5=20 \) as your example.
7. A student solves \( 4(x-3)=20 \) like this: \( x-3=20-4 \), so \( x-3=16 \), so \( x=19 \). Find the mistake and give the correct solution.
Application
8. A tutor charges a booking fee of 15 dollars plus 22 dollars per hour. One session costs 81 dollars. Write an equation and find how many hours it lasted.
9. The perimeter of a rectangular garden is 46 m and its width is 8 m. Write an equation using brackets and find its length.
10. The temperature in degrees Celsius is \( C=\dfrac59(F-32) \). Find \( F \) when \( C=35 \).`,
};

// ───────── worksheet: translate words into equations, then solve (advanced one- and two-step, brackets allowed) ─────────
const wLesson = [
  ["Creating an equation from words", String.raw`1) <b>Define the variable</b> ("let $n$ be the number"). 2) Find the quantity that is <b>said to be equal</b> ("is", "equals", "costs", "totals"). 3) Translate the pieces: <i>more than / increased by</i> means $+$; <i>less than / decreased by</i> means $-$ (and "5 less than $x$" is $x-5$); <i>twice, triple, product</i> mean $\times$; <i>quotient, per, half</i> mean $\div$. When something is done to a whole <i>sum</i> or <i>difference</i>, use brackets: "twice the sum of $n$ and $7$" is $2(n+7)$.`],
  ["Solving: undo in reverse order", String.raw`Undo the <b>adding or subtracting first</b>, then the <b>multiplying or dividing</b>: $5x-7=18$ gives $5x=25$ and $x=5$. For $a(x+b)=c$ you may divide by $a$ first: $3(x-4)=21$ gives $x-4=7$. With a fraction coefficient, multiply by its reciprocal: $\dfrac23x=12$ gives $x=18$.`],
  ["Check against the story", String.raw`Substitute the answer into the <b>original equation</b>, then ask whether it makes sense in the situation (a length or a number of hours cannot be negative). Finish with a sentence that includes the units.`],
];
const wExamples = [
  ["Example 1: Translate, then solve (one step)", String.raw`"A number decreased by $17$ is $-9$." Write an equation and solve it.`, String.raw`Let $n$ be the number: $n-17=-9$. Add $17$ to both sides: $n=8$. Check: $8-17=-9$.`],
  ["Example 2: Translate, then solve (two steps)", String.raw`"Five less than three times a number is $22$." Write an equation and solve it.`, String.raw`"Five less than" means subtract $5$ from $3n$: $3n-5=22$. Add $5$: $3n=27$. Divide by $3$: $n=9$.`],
  ["Example 3: Brackets in the words", String.raw`"Twice the sum of a number and $7$ is $38$." Write an equation and solve it.`, String.raw`The sum is taken first, so it needs brackets: $2(n+7)=38$. Divide by $2$: $n+7=19$. Subtract $7$: $n=12$.`],
  ["Example 4: A quotient and a negative answer", String.raw`"The quotient of a number and $4$, increased by $9$, is $3$." Write an equation and solve it.`, String.raw`$\dfrac n4+9=3$. Subtract $9$: $\dfrac n4=-6$. Multiply by $4$: $n=-24$.`],
  ["Example 5: A fee plus a rate", String.raw`A kayak rental costs a 12 dollar deposit plus 8.50 dollars per hour. Sam paid 46 dollars. How many hours did Sam rent it?`, String.raw`Let $h$ be the hours: $12+8.5h=46$. Subtract $12$: $8.5h=34$. Divide by $8.5$: $h=4$. Sam rented the kayak for $4$ hours.`],
  ["Example 6: Geometry and like terms", String.raw`The angles of a triangle are $x$, $x+20$ and $70$ degrees. Write an equation and find $x$.`, String.raw`The angles add to $180$: $x+(x+20)+70=180$, so $2x+90=180$. Subtract $90$: $2x=90$. Divide by $2$: $x=45$. The angles are $45$, $65$ and $70$ degrees.`],
  ["Example 7: Brackets in a situation", String.raw`Four friends each pay the ticket price plus a 2.50 dollar fee, and the total is 54 dollars. What is the ticket price?`, String.raw`Let $t$ be the price: $4(t+2.5)=54$. Divide by $4$: $t+2.5=13.5$. Subtract $2.5$: $t=11$. The ticket price is 11 dollars.`],
  ["Example 8: A decreasing quantity", String.raw`A tank holds $120$ L and drains $1.5$ L every minute. After how many minutes will $30$ L remain?`, String.raw`$120-1.5t=30$. Subtract $120$: $-1.5t=-90$. Divide by $-1.5$: $t=60$. After $60$ minutes.`],
  ["Example 9: Create the situation", String.raw`Write a short story that matches $4x-6=18$, then solve it.`, String.raw`For example: "Four identical notebooks cost $x$ dollars each. A 6 dollar coupon is used and the total paid is 18 dollars." Solve: $4x=24$, so $x=6$: each notebook costs 6 dollars. Check: $4(6)-6=18$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`"Seven more than a number is $-3$." Write an equation and solve it.`, String.raw`$n+7=-3$, so $n=-10$`, 3.0],
  ["Problem 2", String.raw`"A number divided by $-3$ equals $8$." Write an equation and solve it.`, String.raw`$\dfrac{n}{-3}=8$, so $n=-24$`, 3.0],
  ["Problem 3", String.raw`"Six less than five times a number is $39$." Write an equation and solve it.`, String.raw`$5n-6=39$, so $n=9$`, 3.2],
  ["Problem 4", String.raw`"Three times the difference of a number and $4$ is $27$." Write an equation and solve it.`, String.raw`$3(n-4)=27$, so $n=13$`, 3.2],
  ["Problem 5", String.raw`"Half of a number, increased by $11$, is $4$." Write an equation and solve it.`, String.raw`$\dfrac n2+11=4$, so $n=-14$`, 3.2],
  ["Problem 6", String.raw`Solve $8-5x=-32$ and check your answer.`, String.raw`$-5x=-40$, so $x=8$`, 3.2],
  ["Problem 7", String.raw`Solve $-\dfrac23(x-6)=8$.`, String.raw`$x-6=-12$, so $x=-6$`, 3.4],
  ["Problem 8", String.raw`Solve $0.35x+1.6=6.5$.`, String.raw`$0.35x=4.9$, so $x=14$`, 3.2],
  ["Problem 9", String.raw`A phone plan costs 18 dollars plus 0.12 dollars per minute of long distance. This month's bill is 30 dollars. Write an equation and find the number of minutes.`, String.raw`$18+0.12m=30$, so $m=100$ minutes`, 3.6],
  ["Problem 10", String.raw`The angles of a triangle are $x$, $x+30$ and $2x-10$ degrees. Write an equation and find all three angles.`, String.raw`$4x+20=180$, so $x=40$; the angles are $40^\circ$, $70^\circ$ and $70^\circ$`, 3.8],
  ["Problem 11", String.raw`Five students share a taxi. Each pays a share $f$ of the fare plus a 3 dollar tip, and the total is 65 dollars. Write an equation with brackets and find $f$.`, String.raw`$5(f+3)=65$, so $f=10$ dollars`, 3.8],
  ["Problem 12", String.raw`The temperature on a mountain is $T=18-6.5h$ degrees, where $h$ is the height in km. At what height is the temperature $-14.5$ degrees?`, String.raw`$18-6.5h=-14.5$, so $h=5$ km`, 3.6],
  ["Problem 13 --- Challenge", String.raw`Write your own word problem that can be solved with $3(x+4)=36$. Solve it and answer in a full sentence.`, String.raw`$x+4=12$, so $x=8$. Sample story: three friends each pay 4 dollars more than the price $x$ of a snack, 36 dollars in all, so the snack costs 8 dollars`, 4.2],
];
const ws = packWorksheet({
  code: CODE, title: TITLE, unit: "Unit 2: Algebra",
  intro: "Creating an equation means turning a situation into algebra: define the variable, find what is equal, and translate. This worksheet practises writing one-step and two-step equations from words (including brackets), solving them with negatives, fractions and decimals, and checking the answer against the story.",
  bigideas: String.raw`<b>Create</b> the equation from the story (define the variable, find what is equal), <b>solve</b> by undoing in reverse order, then <b>check</b> in the original words.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
