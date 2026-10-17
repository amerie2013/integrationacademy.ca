// Chapter 7 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Money in prompts is
// written "dollars" because bank text uses $...$ for math.
//   node scripts/mth1w-ch7/written.mjs           -> dry run
//   node scripts/mth1w-ch7/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { barChartDoc } from "../mth1w-ch6/figs6.mjs";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";

const T = { 1: "7.1 Making Financial Decisions", 2: "7.2 Appreciation & Depreciation", 3: "7.3 Interest & Borrowing", 4: "7.4 Budgets" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`The graph shows two phone plans. (a) Write an equation for each plan. (b) Find the break-even point algebraically. (c) Which plan would you recommend for someone who uses about $8$ GB a month? Explain. (d) Find the cost of that plan including $13\%$ HST.`,
    String.raw`(a) A: $C=45$; B: $C=3g+15$. (b) $3g+15=45\Rightarrow g=10$ GB ($45$ dollars). (c) B: $3(8)+15=39<45$. (d) $39\times1.13=44.07$ dollars. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 70 }, lines: [{ m: 0, b: 45, color: "blue", label: "A", lx: 1 }, { m: 3, b: 15, color: "red", label: "B", lx: 13 }], step: { x: 2, y: 10 }, xlabel: "GB used", ylabel: "cost ($)" })),
  W(1, "hard", 5, String.raw`A family's grocery bill was $250$ dollars a week in 2020. The bar graph shows food inflation for the next four years. (a) Find the weekly bill in 2024. (b) Find the overall percent increase. (c) If the family's income rose $10\%$ in total over the same period, did their buying power for food rise or fall? Explain.`,
    String.raw`(a) $250(1.03)(1.09)(1.08)(1.04)\approx315.25$ dollars. (b) $\approx26.1\%$. (c) It fell: prices rose $26.1\%$ but income only $10\%$ ($\frac{1.10}{1.261}\approx0.87$). [2, 1, 2.]`,
    barChartDoc({ bars: [["2021", 3], ["2022", 9], ["2023", 8], ["2024", 4]], base: 0, top: 10, step: 2, ylabel: "food inflation (%)" })),
  W(2, "medium", 5, String.raw`A new car costs $34\,000$ dollars and depreciates $18\%$ per year. (a) Write a model for its value. (b) Find its value after $4$ years. (c) Compare with straight-line depreciation of $4000$ dollars per year. (d) Which model better describes cars? Explain.`,
    String.raw`(a) $V=34\,000(0.82)^t$. (b) $\approx15\,372$ dollars. (c) $34\,000-16\,000=18\,000$ dollars. (d) Percentage: cars lose the most value in early years and never quite reach zero. [1, 1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 36000 }, lines: [{ m: -4000, b: 34000, color: "gray", dash: true }], curves: [{ f: (t) => 34000 * 0.82 ** t, color: "red" }], step: { x: 1, y: 4000 }, xlabel: "years", ylabel: "value ($)" })),
  W(2, "hard", 4, String.raw`A condo bought for $380\,000$ dollars was worth $418\,950$ dollars two years later. (a) Find the yearly rate of appreciation. (b) Predict its value $5$ years after purchase. (c) Use the rule of $72$ to estimate when it doubles. (d) Give two factors that could make the prediction wrong.`,
    String.raw`(a) $(1+r)^2=1.1025$: $5\%$. (b) $380\,000(1.05)^5\approx484\,987$ dollars. (c) about $14.4$ years. (d) e.g. interest rates rise, the local economy weakens, more housing is built. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 600000 }, curves: [{ f: (t) => 380000 * 1.05 ** t, color: "green" }], points: [{ x: 0, y: 380000 }, { x: 2, y: 418950 }], step: { x: 1, y: 100000 }, xlabel: "years", ylabel: "value ($)" })),
  W(3, "medium", 5, String.raw`$2500$ dollars is invested for $10$ years at $5\%$ per year. (a) Find the amount with simple interest. (b) Find the amount with interest compounded yearly. (c) Find the amount with interest compounded monthly. (d) Explain, using the graph, why compound interest pulls ahead over time.`,
    String.raw`(a) $3750$ dollars. (b) $2500(1.05)^{10}\approx4072.24$ dollars. (c) $2500(1+\frac{0.05}{12})^{120}\approx4117.52$ dollars. (d) Compound interest earns interest on interest, so each year's gain is larger: an exponential curve vs a straight line. [1, 1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 5000 }, lines: [{ m: 125, b: 2500, color: "blue", label: "simple", lx: 9 }], curves: [{ f: (t) => 2500 * 1.05 ** t, color: "green" }], step: { x: 1, y: 500 }, xlabel: "years", ylabel: "amount ($)" })),
  W(3, "hard", 5, String.raw`Sam has a $1800$ dollar credit-card balance at $19.8\%$ per year compounded monthly. (a) Find the monthly interest rate. (b) Find the interest charged in the first month. (c) If Sam makes no payments, what is owed after one year? (d) Sam can pay $120$ dollars a month. Explain why paying more than the minimum matters.`,
    String.raw`(a) $1.65\%$. (b) $29.70$ dollars. (c) $1800(1.0165)^{12}\approx2190.59$ dollars. (d) Most of a small payment goes to interest; larger payments reduce the balance faster and cut the total interest. [1, 1, 2, 1.]`,
    barChartDoc({ bars: [["start", 1800], ["6 mo", 1986], ["12 mo", 2191]], base: 0, top: 2500, step: 500, ylabel: "balance ($)", color: "red" })),
  W(4, "medium", 5, String.raw`Maya's monthly net income is $2300$ dollars. Her expenses are shown in the chart. (a) Find her total expenses and her surplus or deficit. (b) Find the percent of income for needs, wants and savings. (c) Compare her budget with the 50/30/20 guideline and suggest one change.`,
    String.raw`(a) Needs $1350$, wants $520$, savings $230$: total $2100$; surplus $200$ dollars. (b) $58.7\%$, $22.6\%$, $10\%$. (c) Needs are high and savings low; moving the $200$ surplus to savings gives $\approx18.7\%$. [2, 2, 1.]`,
    barChartDoc({ bars: [["needs", 1350], ["wants", 520], ["savings", 230]], base: 0, top: 1500, step: 300, ylabel: "dollars per month", color: "green" })),
  W(4, "hard", 5, String.raw`Leo earns $17.50$ dollars an hour, works $24$ hours a week and has $14\%$ deducted. (a) Find his monthly net income ($52$ weeks a year). (b) His expenses are $1450$ dollars a month. Find the surplus. (c) His hours are cut to $18$ a week. Find the new surplus or deficit. (d) Describe how he should adjust his budget.`,
    String.raw`(a) $17.50\times24\times52\div12\times0.86\approx1565.20$ dollars. (b) $\approx115.20$ dollars. (c) $1173.90-1450\approx-276.10$: a deficit. (d) Protect needs, cut wants, pause savings temporarily, look for extra hours. [2, 1, 1, 1.]`,
    barChartDoc({ bars: [["24 h/wk", 1565], ["18 h/wk", 1174], ["expenses", 1450]], base: 0, top: 1800, step: 300, ylabel: "dollars per month", color: "blue" })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MTH1W").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = WRITTEN.filter((w) => !lessons.some((l) => l.title === w.topic));
  if (missing.length) { console.log("No lesson for:", [...new Set(missing.map((w) => w.topic))]); process.exit(1); }
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  for (const w of todo) {
    const key = `mth1w-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const upl = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (upl.error) throw upl.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
