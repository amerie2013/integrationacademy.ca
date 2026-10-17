// Chapter 3 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Programs are attached as SVG code figures (uploaded to graph-images; paper tests print image_url).
// Outputs in the model solutions are computed with lib/miniPython.
//   node scripts/mth1w-ch3/written.mjs           -> dry run
//   node scripts/mth1w-ch3/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { codeFig, out } from "./bank/code.mjs";

const T = { 1: "3.1 Coding Algebraic Concepts", 2: "3.2 Building Code from Steps", 3: "3.3 Reading, Predicting & Altering Code" };
const W = (t, difficulty, points, prompt, feedback, code = null) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, code });

const C1 = `for x in range(-10, 11):
    if -3 < 2 * x - 5 <= 9:
        print(x, end=" ")`;
const C4 = `money = 180
weeks = 0
while money < 700:
    money = money + 22
    weeks = weeks + 1
print(weeks, money)`;
const C5 = `def fee(month):
    if month <= 3:
        return 60
    return 45

total = 0
for m in range(1, 13):
    total = total + fee(m)
print(total)`;
const C6 = `v = 1
n = 0
while v < 2:
    v = v * 1.05
    n = n + 1
print(n)`;
const C7 = `a = 1
b = 4
for i in range(3):
    a = a + b
    b = b + a
print(a, b)`;
const C8 = `# Goal: print the mean of the marks
marks = [72, 65, 88]
total = 0
for m in marks:
    total = total + m
print(total / 2)
print(Total)`;
const C9 = `value = 24000
year = 0
while value > 12000:
    value = value * 0.85
    year = year + 1
print(year, round(value, 2))`;
const C9b = `value = 24000
year = 0
while value < 36000:
    value = value * 1.06
    year = year + 1
print(year, round(value, 2))`;

export const WRITTEN = [
  W(1, "medium", 3, String.raw`A taxi charges $3.75$ dollars plus $1.95$ dollars per km. (a) Write a Python function fare(d) that returns the fare. (b) Explain what the parameter is. (c) Give the fares for $d=2, 4, 6, 8$.`,
    String.raw`(a) def fare(d): return 3.75 + 1.95 * d. (b) d is the parameter: the input (distance in km) that changes the output. (c) ${[2, 4, 6, 8].map((d) => out(`def fare(d):\n    return 3.75 + 1.95 * d\nprint(round(fare(${d}), 2))`)).join(", ")} dollars. [1 correct code with *, 1 parameter explained, 1 table.]`),
  W(1, "hard", 4, String.raw`(a) Predict the output of the program shown. (b) Solve $-3<2x-5\le9$ with algebra. (c) Explain why the program does not show the complete solution of the inequality.`,
    String.raw`(a) ${out(C1).trim()}. (b) $2<2x\le14$, so $1<x\le7$. (c) The loop tests only integers from $-10$ to $10$; values such as $1.5$ or $6.9$ also satisfy the inequality. [1, 2, 1.]`, C1),
  W(1, "hard", 3, String.raw`Explain the difference between = and == in Python. Use an example to show why x = x + 4 is a valid instruction in code but $x=x+4$ has no solution in algebra.`,
    String.raw`= stores the value of the right side in the variable on the left; == compares two values and gives True or False. With x = 3, x = x + 4 computes 7 and stores it, so x becomes 7. In algebra, $x=x+4$ would mean $0=4$, which is false for every $x$. [1 each meaning, 1 example.]`),
  W(2, "medium", 4, String.raw`Kai has $180$ dollars and saves $22$ dollars a week. He wants at least $700$ dollars. (a) Identify the input, process and output. (b) Predict the output of the program shown. (c) Check your answer with an inequality.`,
    String.raw`(a) Input: 180, 22, 700; process: add 22 each week while the total is below 700, counting weeks; output: the number of weeks. (b) ${out(C4)}. (c) $180+22w\ge700$, $w\ge23.6$, so $24$ weeks. [1, 2, 1.]`, C4),
  W(2, "hard", 4, String.raw`A gym charges $60$ dollars a month for the first $3$ months and $45$ dollars a month after that. (a) Explain how the function in the program models this rule. (b) Predict the output. (c) Write an expression for the total cost for $n>3$ months, and check it with $n=12$.`,
    String.raw`(a) An if: months 1–3 return 60, later months return 45 (selection). (b) ${out(C5)}. (c) $180+45(n-3)$; $n=12$: $180+405=585$ ✓. [1, 1, 2.]`, C5),
  W(2, "hard", 4, String.raw`(a) What question does the program shown answer about a value growing $5\%$ per step? (b) Predict the output. (c) Why is a while loop used instead of a for loop? (d) Explain how to alter the program to find how long it takes to triple.`,
    String.raw`(a) How many steps until the value doubles. (b) ${out(C6)} ($1.05^{14}\approx1.98$, $1.05^{15}\approx2.08$). (c) The number of passes is not known in advance; the loop repeats until a condition is met. (d) Change the condition to v < 3 (it then prints ${out(C6.replace("v < 2", "v < 3"))}). [1 each.]`, C6),
  W(3, "medium", 3, String.raw`Make a trace table (columns i, a, b) for the program shown and give its output.`,
    String.raw`After pass 1: a = 5, b = 9; pass 2: a = 14, b = 23; pass 3: a = 37, b = 60. Output: ${out(C7)}. [2 table, 1 output.]`, C7),
  W(3, "hard", 4, String.raw`The program shown should print the mean of the marks. (a) Which error stops the program, and what kind of error is it? (b) Which line gives a wrong answer even after (a) is fixed, and what kind of error is that? (c) Write the corrected program's output.`,
    String.raw`(a) The last line uses Total (capital T): NameError, a runtime error — it happens after the first print. (b) total / 2 divides by 2 instead of 3 (or len(marks)): a logic error. (c) ${out("print(round((72 + 65 + 88) / 3, 2))")} (the mean $225\div3=75$). [1, 1, 1, 1.]`, C8),
  W(3, "hard", 4, String.raw`The program shown models a car losing $15\%$ of its value each year. (a) Predict its output. (b) Alter it to model a collectible worth $24\,000$ dollars that gains $6\%$ a year, and find when it is worth at least $36\,000$ dollars. (c) List every line you changed and explain whether each change is to a parameter, a constraint or the formula.`,
    String.raw`(a) ${out(C9)}. (b) Multiply by 1.06 and loop while value < 36000: ${out(C9b)}. (c) Multiplier 0.85 → 1.06 (formula/parameter: decay to growth); condition value > 12000 → value < 36000 (constraint: a new question). [1, 2, 1.]`, C9),
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
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.code).length} with code figures`);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  for (const w of todo) {
    let image_url = null;
    if (w.code) {
      const svg = codeFig(w.code);
      const key = `mth1w-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(svg).digest("hex").slice(0, 10)}.svg`;
      const up = await db.storage.from("graph-images").upload(key, Buffer.from(svg), { upsert: true, contentType: "image/svg+xml" });
      if (up.error) throw up.error;
      image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    }
    const { code, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic)?.id ?? null });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
