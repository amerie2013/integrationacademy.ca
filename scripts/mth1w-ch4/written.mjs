// Chapter 4 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a coordinate-plane figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mth1w-ch4/written.mjs           -> dry run
//   node scripts/mth1w-ch4/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "./figs4.mjs";

const T = {
  1: "4.1 Relations", 2: "4.2 Linear vs Non-Linear Relations", 3: "4.3 Representing Linear and Non-Linear Relations",
  4: "4.4 Comparing Lines", 5: "4.5 Graphing Special Lines", 6: "4.6 Transformations of Lines",
  7: "4.7 Finding the Equation of a Line", 8: "4.8 General Form vs Slope-Intercept Form", 9: "4.9 Parallel and Perpendicular Lines",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`The graph shows Lena's distance from home during a walk. (a) Name the independent and dependent variables. (b) Describe what happens on each of the three segments. (c) Find her speed on the way out and on the way back.`,
    String.raw`(a) Independent: time (min); dependent: distance from home (m). (b) 0–4 min: walks away to 600 m; 4–10 min: stops (distance constant); 10–16 min: walks home. (c) Out: $600\div4=150$ m/min; back: $600\div6=100$ m/min. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 700 }, segs: [{ pts: [[0, 0], [4, 600], [10, 600], [16, 0]] }], step: { x: 2, y: 100 }, xlabel: "time (min)", ylabel: "distance (m)" })),
  W(2, "hard", 4, String.raw`The graph shows $y=3x+2$ (blue) and $y=x^2+2$ (red). (a) Make a table of values for both for $x=0,1,2,3,4$ and find the first differences. (b) Use the differences to decide which relation is linear. (c) Find the average rate of change of the curve from $x=0$ to $x=3$ and compare it with the slope of the line. Explain what the comparison means on the graph.`,
    String.raw`(a) Line: $2,5,8,11,14$ (differences $3,3,3,3$). Curve: $2,3,6,11,18$ (differences $1,3,5,7$). (b) The line is linear: constant first differences; the curve is not. (c) $(11-2)\div3=3$, equal to the line's slope: both pass through $(0,2)$ and $(3,11)$, so the segment joining those points of the curve lies on the line. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 20 }, lines: [{ m: 3, b: 2, color: "blue" }], curves: [{ f: (x) => x * x + 2, color: "red" }], points: [{ x: 0, y: 2 }, { x: 3, y: 11 }], step: { x: 1, y: 2 } })),
  W(3, "medium", 4, String.raw`The graph shows the cost $C$ (dollars) of renting a car for one day and driving $d$ km. (a) Use the labelled points to write the equation. (b) Make a table of values for $d=0,100,200,300$. (c) Describe the relation in words, naming the meaning of each number in your equation.`,
    String.raw`(a) $m=(95-45)\div200=0.25$; $C=0.25d+45$. (b) $45, 70, 95, 120$. (c) A fixed fee of $45$ dollars plus $0.25$ dollars (25 cents) per km; the cost rises 25 dollars for every 100 km. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 320, ymin: 0, ymax: 140 }, lines: [{ m: 0.25, b: 45 }], points: [{ x: 0, y: 45, label: "(0, 45)" }, { x: 200, y: 95, label: "(200, 95)" }], step: { x: 40, y: 20 }, xlabel: "d (km)", ylabel: "C ($)" })),
  W(4, "hard", 4, String.raw`Gym A charges $C=0.5n+20$ and Gym B charges $C=1.25n+8$ dollars for $n$ classes (graph shown). (a) Which plan has the larger initial value, and which has the larger rate of change? (b) Find the point of intersection algebraically and state its meaning. (c) Recommend a plan for 10 classes and for 25 classes, with costs.`,
    String.raw`(a) A has the larger initial value (20 vs 8); B has the larger rate (1.25 vs 0.50 per class). (b) $0.5n+20=1.25n+8\Rightarrow0.75n=12\Rightarrow n=16$, $C=28$: both cost $28$ dollars for 16 classes. (c) 10 classes: A $25$, B $20.50$ → B. 25 classes: A $32.50$, B $39.25$ → A. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 50 }, lines: [{ m: 0.5, b: 20, color: "blue", label: "A", lx: 26 }, { m: 1.25, b: 8, color: "red", label: "B", lx: 24 }], step: { x: 5, y: 10 }, xlabel: "n", ylabel: "C" })),
  W(5, "medium", 4, String.raw`The graph shows three lines. (a) Write the equation of each line. (b) Find the three vertices of the triangle they form. (c) Find the area of the triangle.`,
    String.raw`(a) Blue: $y=x+2$; red: $x=4$ (vertical); green: $y=-3$ (horizontal). (b) $(4,6)$, $(4,-3)$, $(-5,-3)$. (c) Right triangle with legs $9$ and $9$: $\tfrac12\times9\times9=40.5$ square units. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, lines: [{ m: 1, b: 2, color: "blue" }, { m: 0, b: -3, color: "green" }], vlines: [{ x: 4, color: "red" }] })),
  W(6, "hard", 4, String.raw`Line A and line B are shown. (a) Write the equation of each line. (b) Describe a sequence of transformations that maps A onto B. (c) Find where the lines meet, algebraically.`,
    String.raw`(a) A: $y=2x-3$; B: $y=-2x+5$. (b) Reflect A in the y-axis ($y=-2x-3$), then translate up $8$ units. (Other correct sequences earn full marks.) (c) $2x-3=-2x+5\Rightarrow x=2$, $y=1$: $(2,1)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: -3, color: "blue", label: "A", lx: 3.2 }, { m: -2, b: 5, color: "red", label: "B", lx: 3.6 }] })),
  W(7, "medium", 4, String.raw`A pool drains at a constant rate. The graph shows the volume $V$ (L) after $t$ minutes. (a) Find the rate of change, with units. (b) Write the equation of the line. (c) When will the pool be empty? (d) What do the slope and the V-intercept mean?`,
    String.raw`(a) $(1350-2100)\div(8-3)=-150$ L/min. (b) $2100=-150(3)+b\Rightarrow b=2550$: $V=-150t+2550$. (c) $0=-150t+2550\Rightarrow t=17$ min. (d) It drains 150 L each minute; it started with 2550 L. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 2800 }, lines: [{ m: -150, b: 2550 }], points: [{ x: 3, y: 2100, label: "(3, 2100)" }, { x: 8, y: 1350, label: "(8, 1350)" }], step: { x: 2, y: 400 }, xlabel: "t (min)", ylabel: "V (L)" })),
  W(8, "medium", 3, String.raw`(a) Use the intercepts shown on the graph to write the equation of the line in general form. (b) Rewrite it in slope-intercept form. (c) Which form was quicker for finding the intercepts, and which for the slope? Explain.`,
    String.raw`(a) Intercepts $(4,0)$ and $(0,-3)$: slope $\tfrac34$, $y=\tfrac34x-3$; ×4: $3x-4y-12=0$. (b) $y=0.75x-3$. (c) General form: set $x=0$ or $y=0$ directly; slope-intercept form shows the slope as $m$. [1, 1, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0.75, b: -3 }], points: [{ x: 4, y: 0 }, { x: 0, y: -3 }] })),
  W(9, "hard", 4, String.raw`Triangle ABC has vertices $A(-4,-1)$, $B(2,2)$ and $C(4,-2)$. (a) Show that the triangle has a right angle, and say where. (b) Write the equation of the line through C parallel to AB. (c) Write the equation of the altitude from B to side AC.`,
    String.raw`(a) $m_{AB}=\tfrac36=\tfrac12$, $m_{BC}=\tfrac{-4}{2}=-2$; product $-1$, so $\angle B=90^\circ$. (b) $y=\tfrac12x+b$, $-2=2+b$: $y=\tfrac12x-4$. (c) $m_{AC}=\tfrac{-1}{8}$, so the altitude has slope $8$: $2=16+b$, $y=8x-14$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, segs: [{ pts: [[-4, -1], [2, 2], [4, -2], [-4, -1]] }], points: [{ x: -4, y: -1, label: "A" }, { x: 2, y: 2, label: "B" }, { x: 4, y: -2, label: "C" }] })),
  W(9, "hard", 4, String.raw`Two towns are at $A(-2,5)$ and $B(6,1)$ on a map grid (km). A water tower must be the same distance from both towns. (a) Find the midpoint of AB. (b) Write the equation of the perpendicular bisector of AB. (c) Show that the point $(5,9)$ is on the bisector and is the same distance from A and B.`,
    String.raw`(a) $(2,3)$. (b) $m_{AB}=\tfrac{-4}{8}=-\tfrac12$, so slope $2$: $3=4+b$, $y=2x-1$. (c) $2(5)-1=9$ ✓; $d_A=\sqrt{7^2+4^2}=\sqrt{65}$, $d_B=\sqrt{1^2+8^2}=\sqrt{65}$ ✓. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 10 }, segs: [{ pts: [[-2, 5], [6, 1]] }], points: [{ x: -2, y: 5, label: "A" }, { x: 6, y: 1, label: "B" }], step: { x: 1, y: 1 } })),
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
    const up = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (up.error) throw up.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
