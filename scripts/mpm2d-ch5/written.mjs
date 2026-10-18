// MPM2D chapter 5 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Figures show the
// given information only, never the answer.
//   node scripts/mpm2d-ch5/written.mjs           -> dry run
//   node scripts/mpm2d-ch5/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { frameDoc } from "./bank/fig.mjs";

const T = { 1: "5.1 Solving Quadratic Equations by Factoring", 2: "5.2 Completing the Square", 3: "5.3 The Quadratic Formula", 4: "5.4 The Discriminant & the Number of Roots", 5: "5.5 Quadratic Word Problems", 6: "5.6 Linear–Quadratic Systems" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const grid = (view, step = { x: 1, y: 1 }, extra = {}) => planeDoc({ view, step, ...extra });
// a pen against a wall with one divider parallel to the width (not to scale)
const penDoc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 240" width="440" height="240" font-family="Arial, sans-serif"><rect width="440" height="240" fill="#fff"/><rect x="20" y="22" width="400" height="24" fill="#cbd5e1"/><text x="220" y="39" font-size="15" text-anchor="middle" fill="#0f172a">wall</text><rect x="70" y="46" width="300" height="120" fill="#dcfce7"/><polyline points="70,46 70,166 370,166 370,46" fill="none" stroke="#b45309" stroke-width="4" stroke-dasharray="9 5"/><line x1="220" y1="46" x2="220" y2="166" stroke="#b45309" stroke-width="4" stroke-dasharray="9 5"/><text x="58" y="111" font-size="17" font-weight="700" text-anchor="end" fill="#0f172a">w</text><text x="228" y="111" font-size="17" font-weight="700" fill="#0f172a">w</text><text x="382" y="111" font-size="17" font-weight="700" fill="#0f172a">w</text><text x="220" y="190" font-size="17" font-weight="700" text-anchor="middle" fill="#0f172a">l</text><text x="220" y="230" font-size="13" text-anchor="middle" fill="#64748b">not to scale</text></svg>`;

export const WRITTEN = [
  W(1, "medium", 5, String.raw`Solve by factoring: (a) $x^2-3x-28=0$ (b) $3x^2+10x-8=0$ (c) $4x^2=20x$, and explain why dividing both sides by $x$ would be a mistake. (d) Sketch $y=x^2-3x-28$ on the grid, using your answer to (a).`,
    String.raw`(a) $(x-7)(x+4)=0$: $7$, $-4$. (b) $(3x-2)(x+4)=0$: $\frac23$, $-4$. (c) $4x(x-5)=0$: $0$, $5$; dividing by $x$ loses the root $x=0$. (d) zeros $-4$ and $7$, axis $x=1.5$, vertex $(1.5,-30.25)$, $y$-intercept $-28$. [1, 1, 2, 1.]`,
    grid({ xmin: -6, xmax: 9, ymin: -32, ymax: 8 }, { x: 1, y: 4 })),
  W(1, "hard", 5, String.raw`A rectangular lawn is $6$ m longer than it is wide. A path $2$ m wide surrounds it, and the lawn and path together cover $160$ m$^2$. (a) Write an equation for the width $w$ of the lawn. (b) Solve it by factoring and explain which root you reject. (c) Find the area of the path alone. (d) Check your answer.`,
    String.raw`(a) $(w+4)(w+10)=160$. (b) $w^2+14w-120=0\Rightarrow(w+20)(w-6)=0$; reject $w=-20$ (a width can't be negative): the lawn is $6$ m by $12$ m. (c) $160-72=88$ m$^2$. (d) $10\times16=160$ ✓. [1, 2, 1, 1.]`,
    frameDoc("w + 6", "w", "2 m", "lawn")),
  W(2, "medium", 5, String.raw`(a) Solve $x^2+8x-5=0$ by completing the square. Show every step. (b) Give the exact roots and the roots to two decimal places. (c) State the vertex of $y=x^2+8x-5$ and sketch it on the grid.`,
    String.raw`(a) $x^2+8x=5$; add $16$: $(x+4)^2=21$; $x+4=\pm\sqrt{21}$. (b) $x=-4\pm\sqrt{21}\approx0.58,\ -8.58$. (c) vertex $(-4,-21)$; zeros as in (b); $y$-intercept $-5$. [2, 2, 1.]`,
    grid({ xmin: -10, xmax: 2, ymin: -22, ymax: 6 }, { x: 1, y: 2 })),
  W(2, "hard", 5, String.raw`A parabola is $y=-2(x-3)^2+40$. (a) Find its zeros exactly by isolating the square. (b) Give the zeros to two decimal places and sketch the parabola on the grid. (c) For which values of $k$ does $-2(x-3)^2+k=0$ have no real roots? Explain using the graph.`,
    String.raw`(a) $(x-3)^2=20$: $x=3\pm2\sqrt5$. (b) $\approx7.47$ and $-1.47$; vertex $(3,40)$, opening down. (c) $k<0$: then $(x-3)^2=\frac k2<0$, and the vertex $(3,k)$ is below the x-axis while the parabola opens down. [2, 1, 2.]`,
    grid({ xmin: -3, xmax: 9, ymin: -10, ymax: 44 }, { x: 1, y: 4 })),
  W(3, "medium", 5, String.raw`(a) Solve $2x^2-5x-1=0$ with the quadratic formula; give exact and decimal roots. (b) Check one root by substitution. (c) Explain, using $b^2-4ac$, why this equation cannot be solved by factoring over the integers. (d) Find the sum of the two roots.`,
    String.raw`(a) $x=\frac{5\pm\sqrt{33}}{4}\approx2.69,\ -0.19$. (b) $2(2.69)^2-5(2.69)-1\approx0$ ✓. (c) $b^2-4ac=33$ is not a perfect square, so the roots are irrational. (d) $\frac{10}{4}=2.5$. [2, 1, 1, 1.]`,
    grid({ xmin: -2, xmax: 4, ymin: -5, ymax: 6 })),
  W(3, "hard", 5, String.raw`(a) Starting from $ax^2+bx+c=0$, complete the square to develop the quadratic formula. Show each step. (b) Use the formula to solve $3x^2+4x-2=0$. Give exact roots in simplest form and decimals.`,
    String.raw`(a) Divide by $a$; move $\frac ca$; add $\left(\frac b{2a}\right)^2$; $\left(x+\frac b{2a}\right)^2=\frac{b^2-4ac}{4a^2}$; take $\pm$ roots; subtract $\frac b{2a}$. (b) $b^2-4ac=40$: $x=\frac{-4\pm2\sqrt{10}}{6}=\frac{-2\pm\sqrt{10}}{3}\approx0.39,\ -1.72$. [3, 2.]`,
    grid({ xmin: -3, xmax: 2, ymin: -4, ymax: 6 })),
  W(4, "medium", 5, String.raw`Consider $2x^2-6x+k=0$. The graph of $y=2x^2-6x$ is shown. (a) Write the discriminant in terms of $k$. (b) Find $k$ so the equation has exactly one root. (c) For which $k$ are there two real roots? (d) Describe the roots when $k=5$ and explain using the graph.`,
    String.raw`(a) $36-8k$. (b) $k=4.5$. (c) $k<4.5$. (d) $D=-4<0$: no real roots; adding $5$ shifts the parabola up so its vertex $(1.5,0.5)$ is above the x-axis. [1, 1, 1, 2.]`,
    grid({ xmin: -2, xmax: 5, ymin: -6, ymax: 10 }, { x: 1, y: 2 }, { curves: [{ f: (x) => 2 * x * x - 6 * x, color: "violet" }] })),
  W(4, "hard", 5, String.raw`(a) Show that $x^2+px-4=0$ has two real roots for every value of $p$. (b) A ball's height is $h=-4.9t^2+14.7t+1$. Use the discriminant of $-4.9t^2+14.7t+1=H$ to find the greatest height $H$ the ball reaches. (c) Check your answer using the vertex.`,
    String.raw`(a) $D=p^2+16>0$ for all $p$. (b) $-4.9t^2+14.7t+(1-H)=0$: $216.09+19.6(1-H)=0\Rightarrow H\approx12.03$ m. (c) $t=1.5$: $-11.025+22.05+1=12.025$ ✓. [2, 2, 1.]`,
    grid({ xmin: 0, xmax: 3.5, ymin: 0, ymax: 14 }, { x: 0.5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  W(5, "medium", 5, String.raw`A ball's height is $h=-5t^2+30t+1.5$ (metres, seconds). (a) Find the maximum height and when it occurs. (b) Find when the ball lands, to two decimal places. (c) Find the interval of time when the ball is higher than $26.5$ m, and how long that lasts. (d) Explain why (c) gives two times.`,
    String.raw`(a) $t=3$: $46.5$ m. (b) $t=\frac{-30-\sqrt{930}}{-10}\approx6.05$ s. (c) $-5t^2+30t-25=0\Rightarrow t^2-6t+5=0$: $1< t<5$, so $4$ s. (d) It passes $26.5$ m on the way up and again on the way down. [1, 1, 2, 1.]`,
    grid({ xmin: 0, xmax: 7, ymin: 0, ymax: 50 }, { x: 1, y: 5 }, { xlabel: "t (s)", ylabel: "h (m)" })),
  W(5, "hard", 5, String.raw`A farmer has $120$ m of fencing to build a rectangular pen against a wall, divided into two parts by a fence parallel to the width, as shown. (a) Write the area $A$ in terms of $w$. (b) Find the dimensions that give the largest area and that area. (c) Find the widths for which the area is $900$ m$^2$.`,
    String.raw`(a) $3w+l=120$, so $A=w(120-3w)$. (b) zeros $0$ and $40$, vertex $w=20$: $20$ m by $60$ m, $1200$ m$^2$. (c) $3w^2-120w+900=0\Rightarrow w^2-40w+300=0\Rightarrow w=10$ or $30$. [1, 2, 2.]`,
    penDoc),
  W(5, "hard", 5, String.raw`A shop rents $80$ bikes a day at $30$ dollars each. For every $2$ dollar increase in price, $4$ fewer bikes are rented. (a) Write the revenue $R$ for $x$ price increases. (b) Find the price that gives the most revenue, and that revenue. (c) For which prices is the revenue at least $2400$ dollars?`,
    String.raw`(a) $R=(30+2x)(80-4x)$. (b) zeros $-15$ and $20$, vertex $x=2.5$: $35$ dollars, $70$ bikes, $2450$ dollars. (c) $40x-8x^2\ge0\Rightarrow0\le x\le5$: from $30$ to $40$ dollars. [1, 2, 2.]`,
    grid({ xmin: -16, xmax: 22, ymin: 0, ymax: 2800 }, { x: 2, y: 200 }, { xlabel: "x", ylabel: "R" })),
  W(6, "medium", 5, String.raw`(Enrichment) Solve the system $y=x^2-2x-3$ and $y=2x+2$. (a) Write the combined equation in standard form. (b) Find the intersection points. (c) Find the discriminant of the combined equation and explain what it tells you. (d) Sketch both graphs on the grid.`,
    String.raw`(a) $x^2-4x-5=0$. (b) $(x-5)(x+1)=0$: $(5,12)$ and $(-1,0)$. (c) $D=36>0$: two intersection points. (d) parabola with zeros $-1$, $3$ and vertex $(1,-4)$; line through $(0,2)$ with slope 2. [1, 2, 1, 1.]`,
    grid({ xmin: -3, xmax: 7, ymin: -5, ymax: 14 }, { x: 1, y: 2 })),
  W(6, "hard", 5, String.raw`(Enrichment) The parabola $y=x^2+1$ is shown. A line through the origin has equation $y=mx$. (a) Write the combined equation. (b) Find the values of $m$ for which the line is tangent to the parabola. (c) Find the points of tangency. (d) For which values of $m$ do the graphs not meet?`,
    String.raw`(a) $x^2-mx+1=0$. (b) $m^2-4=0$: $m=\pm2$. (c) $m=2$: $(1,2)$; $m=-2$: $(-1,2)$. (d) $-2< m<2$. [1, 2, 1, 1.]`,
    grid({ xmin: -4, xmax: 4, ymin: -2, ymax: 8 }, { x: 1, y: 1 }, { curves: [{ f: (x) => x * x + 1, color: "violet" }] })),
];

const APPLY = process.argv.includes("--apply");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MPM2D").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const missing = WRITTEN.filter((w) => !lessons.some((l) => l.title === w.topic));
  if (missing.length) { console.log("No lesson for:", [...new Set(missing.map((w) => w.topic))]); process.exit(1); }
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const todo = WRITTEN.filter((w) => !have.has(w.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${WRITTEN.reduce((s, r) => s + r.points, 0)} marks; ${WRITTEN.filter((w) => w.fig).length} with figures`);
  if (!APPLY) { console.log("Dry run — use --apply."); process.exit(0); }
  for (const w of todo) {
    const key = `mpm2d-${w.topic.split(" ")[0].replace(".", "-")}/written-${crypto.createHash("sha1").update(w.fig).digest("hex").slice(0, 10)}.svg`;
    const upl = await db.storage.from("graph-images").upload(key, Buffer.from(w.fig), { upsert: true, contentType: "image/svg+xml" });
    if (upl.error) throw upl.error;
    const image_url = db.storage.from("graph-images").getPublicUrl(key).data.publicUrl;
    const { fig, ...row } = w;
    const r = await db.from("bank_questions").insert({ ...row, image_url, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic).id });
    if (r.error) throw r.error;
  }
  console.log(`inserted ${todo.length}`);
}
