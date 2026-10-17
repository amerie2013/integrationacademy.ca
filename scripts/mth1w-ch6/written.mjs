// Chapter 6 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a data figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mth1w-ch6/written.mjs           -> dry run
//   node scripts/mth1w-ch6/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { boxPlotDoc, barChartDoc, scatterDoc, dotPlotDoc } from "./figs6.mjs";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";

const T = { 1: "6.1 Big Data & Its Implications", 2: "6.2 One-Variable Data & Statistics", 3: "6.3 Scatter Plots & Correlation", 4: "6.4 The Mathematical Modelling Process" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`A newspaper printed this graph with the headline “Support for the new park SOARS!”. (a) How many times as tall does the 2024 bar look compared with the 2023 bar? (b) What is the actual increase in percentage points? (c) Explain how the graph misleads and describe a fair version.`,
    String.raw`(a) Visible heights $4$ and $12$ (axis starts at $40$): $3$ times. (b) $52\%-44\%=8$ points. (c) The vertical axis starts at $40$, exaggerating the change; start the axis at $0$ with an even scale. [1, 1, 2.]`,
    barChartDoc({ bars: [["2023", 44], ["2024", 52]], base: 40, top: 54, step: 2, ylabel: "% support" })),
  W(1, "hard", 5, String.raw`A school of $1200$ students ($400$ in each of Grades 9, 10 and 11) wants to know how many students would join an esports club. (a) Describe a stratified sample of $60$ students. (b) Explain why surveying students in the computer lab would be biased. (c) The sample finds $15$ students would join. Estimate the number in the school. (d) Write a neutral survey question.`,
    String.raw`(a) $20$ randomly chosen students from each grade. (b) Sampling bias: lab users are more likely to like gaming, overestimating interest. (c) $\frac{15}{60}=0.25$; $0.25\times1200=300$. (d) e.g. “Would you join an esports club if one were offered? (yes / no / maybe)”. [1, 1, 2, 1.]`,
    barChartDoc({ bars: [["Gr 9", 400], ["Gr 10", 400], ["Gr 11", 400]], base: 0, top: 500, step: 100, ylabel: "students" })),
  W(2, "medium", 5, String.raw`The dot plot shows the number of books $13$ students read over the summer. (a) Find the mean, median and mode. (b) Find the five-number summary and IQR. (c) Is $12$ an outlier? Show your test. (d) Which measure of centre best describes the data? Explain.`,
    String.raw`Data: $0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 12$. (a) Mean $45\div13\approx3.46$; median $3$; mode $2$. (b) $0, 1.5, 3, 4.5, 12$; IQR $=3$. (c) Fence $4.5+4.5=9$; $12>9$: outlier. (d) Median (or mode): the outlier pulls the mean up. [1, 2, 1, 1.]`,
    dotPlotDoc({ data: [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 12], lo: 0, hi: 13, step: 1, label: "books" })),
  W(2, "hard", 5, String.raw`The box plots compare the daily screen time (minutes) of two classes. (a) Find the median and IQR of each class. (b) About what percent of Class A spends more than $150$ min? (c) Write a comparison of the two classes using centre and spread. (d) Which class has the more consistent screen time?`,
    String.raw`(a) A: median $150$, IQR $190-110=80$; B: median $130$, IQR $150-115=35$. (b) $50\%$. (c) Class A's typical screen time is $20$ min higher, and its middle half is spread over $80$ min compared with $35$ min for Class B. (d) Class B. [2, 1, 1, 1.]`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" width="440" height="260"><rect width="440" height="260" fill="#fff"/><svg y="14">${boxPlotDoc({ five: [60, 110, 150, 190, 260], lo: 40, hi: 280, step: 20, showValues: true })}</svg><svg y="144">${boxPlotDoc({ five: [70, 115, 130, 150, 230], lo: 40, hi: 280, step: 20, showValues: true })}</svg><text x="8" y="16" font-family="Arial" font-size="13" font-weight="700">Class A</text><text x="8" y="146" font-family="Arial" font-size="13" font-weight="700">Class B</text></svg>`),
  W(3, "medium", 5, String.raw`The scatter plot shows hours of practice per week and points scored per game for a basketball team. (a) Describe the correlation. (b) A line of best fit passes through $(2, 6)$ and $(10, 22)$. Find its equation. (c) Predict the points for $7$ hours of practice. (d) Is a prediction for $25$ hours reliable? Explain.`,
    String.raw`(a) Strong positive. (b) $m=\frac{16}{8}=2$; $6=4+b$, $b=2$: $y=2x+2$. (c) $16$ points. (d) No: extrapolation far beyond the data; scoring cannot keep rising forever. [1, 2, 1, 1.]`,
    scatterDoc({ pts: [[1, 5], [2, 7], [3, 7], [4, 11], [5, 11], [6, 15], [7, 15], [8, 19], [9, 19], [10, 23]], view: { xmin: 0, xmax: 12, ymin: 0, ymax: 26 }, step: { x: 1, y: 2 }, xlabel: "practice (h)", ylabel: "points" })),
  W(3, "hard", 4, String.raw`The graph shows Sam's distance from home during a bike ride. (a) Describe each part of the ride. (b) Find Sam's speed in km/h on each moving part. (c) Find the average speed for the whole trip.`,
    String.raw`(a) 0–20 min: rides away $8$ km; 20–35 min: stops; 35–50 min: rides $4$ km further; 50–80 min: rides home. (b) $24$ km/h, $16$ km/h, $24$ km/h. (c) $24$ km in $80$ min $=18$ km/h. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 85, ymin: 0, ymax: 14 }, segs: [{ pts: [[0, 0], [20, 8], [35, 8], [50, 12], [80, 0]] }], step: { x: 10, y: 2 }, xlabel: "time (min)", ylabel: "km from home" })),
  W(4, "medium", 5, String.raw`A cup of soup cools in a $20$ °C room. Its temperature is shown. (a) Explain why a linear model is not appropriate. (b) Show that $T-20$ is multiplied by about the same number every $5$ minutes. (c) Write a model and predict the temperature at $30$ min. (d) State one assumption of your model.`,
    String.raw`(a) The drops shrink ($24, 16, 11, 7$) and a line would eventually predict below room temperature. (b) $T-20$: $72, 48, 32, 21, 14$; ratio $\approx\frac23$. (c) $T=20+72\left(\frac23\right)^{t/5}$; $t=30$: $\approx26.3$ °C. (d) The room temperature stays at $20$ °C. [1, 1, 2, 1.]`,
    scatterDoc({ pts: [[0, 92], [5, 68], [10, 52], [15, 41], [20, 34]], view: { xmin: 0, xmax: 35, ymin: 0, ymax: 100 }, step: { x: 5, y: 10 }, xlabel: "time (min)", ylabel: "T (°C)", curve: (t) => 20 + 72 * (2 / 3) ** (t / 5) })),
  W(4, "hard", 5, String.raw`A club sells $240$ tickets at $\$10$ each. A survey suggests that each $\$1$ price increase loses $12$ sales. (a) Write the revenue $R$ for a price of $10+x$ dollars. (b) Complete a table for $x=0, 2, 4, 6, 8$. (c) What price gives the most revenue? (d) Give one reason the model may not match reality.`,
    String.raw`(a) $R=(10+x)(240-12x)$. (b) $2400$, $2592$, $2688$, $2688$, $2592$. (c) Between $\$14$ and $\$16$ — exactly $\$15$ ($x=5$): $R=15\times180=2700$. (d) Demand may not drop evenly; the survey may not represent all buyers. [1, 1, 2, 1.]`,
    scatterDoc({ pts: [[10, 2400], [12, 2592], [14, 2688], [16, 2688], [18, 2592]], view: { xmin: 8, xmax: 22, ymin: 0, ymax: 3000 }, step: { x: 2, y: 500 }, xlabel: "price ($)", ylabel: "revenue ($)", curve: (p) => p * (240 - 12 * (p - 10)) })),
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
