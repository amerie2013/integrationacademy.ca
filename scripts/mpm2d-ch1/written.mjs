// MPM2D chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Money in prompts is
// written "dollars" because bank text uses $...$ for math.
//   node scripts/mpm2d-ch1/written.mjs           -> dry run
//   node scripts/mpm2d-ch1/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { barChartDoc } from "../mth1w-ch6/figs6.mjs";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";

const T = { 1: "1.1 Review of Linear Relations", 2: "1.2 Solving Linear Systems by Graphing", 3: "1.3 Solving by Substitution", 4: "1.4 Solving by Elimination", 5: "1.5 Solving Problems with Linear Systems", 6: "1.6 Number of Solutions" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`The triangle has vertices $A(-3,2)$, $B(3,5)$ and $C(5,1)$. (a) Find the slope of each side. (b) Show that the triangle is right-angled and name the right angle. (c) Write the equation of the line through $A$ parallel to $BC$. (d) Write the equation of $AB$ in standard form.`,
    String.raw`(a) $m_{AB}=\frac12$, $m_{BC}=-2$, $m_{AC}=-\frac18$. (b) $\frac12\times(-2)=-1$: right angle at $B$. (c) $y=-2x-4$ (or $2x+y=-4$). (d) $x-2y=-7$. [2, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 7, ymin: -2, ymax: 7 }, segs: [{ pts: [[-3, 2], [3, 5], [5, 1], [-3, 2]], color: "violet" }], points: [{ x: -3, y: 2, label: "A(−3, 2)" }, { x: 3, y: 5, label: "B(3, 5)" }, { x: 5, y: 1, label: "C(5, 1)" }], step: { x: 1, y: 1 } })),
  W(1, "hard", 4, String.raw`A tank drains at a constant rate. After $3$ min it holds $84$ L and after $10$ min it holds $49$ L. (a) Find the rate of change and explain its meaning. (b) Write an equation for the volume $V$ after $t$ minutes. (c) Write the equation in standard form. (d) When will the tank be empty?`,
    String.raw`(a) $\frac{49-84}{10-3}=-5$: it loses $5$ L per minute. (b) $V=-5t+99$. (c) $5t+V=99$. (d) $5t=99\Rightarrow t=19.8$ min. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 110 }, lines: [{ m: -5, b: 99, color: "blue" }], points: [{ x: 3, y: 84, label: "(3, 84)" }, { x: 10, y: 49, label: "(10, 49)" }], xlabel: "t (min)", ylabel: "V (L)", step: { x: 2, y: 10 } })),
  W(2, "medium", 5, String.raw`Bike share A charges $3$ dollars to unlock plus $0.30$ dollars per minute. Bike share B charges $0.45$ dollars per minute with no unlock fee. (a) Write a cost equation for each. (b) Use the graph to estimate the break-even point. (c) Verify it algebraically. (d) Which company is cheaper for a $30$-minute ride, and by how much?`,
    String.raw`(a) A: $C=0.3m+3$; B: $C=0.45m$. (b) about $(20,9)$. (c) $0.45m=0.3m+3\Rightarrow m=20$, $C=9$ dollars. (d) A: $12$ dollars; B: $13.50$ dollars — A by $1.50$ dollars. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 20 }, lines: [{ m: 0.3, b: 3, color: "blue", label: "A", lx: 34 }, { m: 0.45, b: 0, color: "red", label: "B", lx: 33 }], xlabel: "minutes", ylabel: "cost", step: { x: 5, y: 2 } })),
  W(2, "hard", 5, String.raw`Tank A holds $600$ L and drains at $25$ L/min. At the same time tank B holds $150$ L and fills at $20$ L/min. (a) Write an equation for the volume in each tank. (b) Graph both and estimate when they hold the same amount. (c) Find the exact time and volume algebraically. (d) For what times does A hold less than B, while A still has water?`,
    String.raw`(a) $V_A=600-25t$; $V_B=150+20t$. (b) about $10$ min. (c) $45t=450\Rightarrow t=10$ min, $350$ L. (d) $10<t\le24$ (A is empty at $24$ min). [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 700 }, lines: [{ m: -25, b: 600, color: "blue", label: "A", lx: 2 }, { m: 20, b: 150, color: "red", label: "B", lx: 20 }], xlabel: "minutes", ylabel: "litres", step: { x: 2, y: 100 } })),
  W(3, "medium", 5, String.raw`Solve $3x+y=10$ and $2x-3y=-8$ by substitution. (a) Explain which variable you chose to isolate and why. (b) Solve, showing every step. (c) Verify your answer in both equations and compare with the graph.`,
    String.raw`(a) $y$ in the first equation (coefficient $1$, so no fractions). (b) $y=10-3x$; $2x-3(10-3x)=-8\Rightarrow 11x=22\Rightarrow x=2$, $y=4$. (c) $6+4=10$ ✓, $4-12=-8$ ✓; the lines meet at $(2,4)$. [1, 3, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 8 }, lines: [{ m: -3, b: 10, color: "blue" }, { m: 2 / 3, b: 8 / 3, color: "red" }], step: { x: 1, y: 1 } })),
  W(3, "hard", 5, String.raw`A rectangular garden needs $46$ m of fencing. Its length is $5$ m more than twice its width. (a) Define variables and write a system. (b) Solve by substitution. (c) Find the area. (d) Fencing costs $12$ dollars per metre. Find the total cost.`,
    String.raw`(a) $l=2w+5$, $2l+2w=46$. (b) $2(2w+5)+2w=46\Rightarrow 6w=36$: $w=6$ m, $l=17$ m. (c) $102$ m$^2$. (d) $46\times12=552$ dollars. [1, 2, 1, 1.]`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220" width="420" height="220" font-family="Arial, sans-serif"><rect width="420" height="220" fill="#fff"/><rect x="60" y="40" width="300" height="120" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><text x="210" y="190" font-size="16" font-weight="700" text-anchor="middle" fill="#0f172a">length = 2w + 5</text><text x="375" y="106" font-size="16" font-weight="700" fill="#0f172a">w</text><text x="210" y="106" font-size="15" text-anchor="middle" fill="#15803d">garden (perimeter 46 m)</text><text x="210" y="28" font-size="12" text-anchor="middle" fill="#64748b">not to scale</text></svg>`),
  W(4, "medium", 5, String.raw`Solve $4x+3y=-1$ and $5x-2y=16$ by elimination. (a) State the multipliers you will use and why. (b) Solve, showing every step, and check. (c) Explain, using the graph, why multiplying an equation by a constant does not change the solution.`,
    String.raw`(a) $\times2$ and $\times3$ to make $6y$ and $-6y$. (b) $8x+6y=-2$, $15x-6y=48$; add: $23x=46$, $x=2$; $8+3y=-1\Rightarrow y=-3$. Check: $10+6=16$ ✓. (c) The multiplied equation has exactly the same points — it is the same line, so the intersection $(2,-3)$ does not move. [1, 3, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 3 }, lines: [{ m: -4 / 3, b: -1 / 3, color: "blue" }, { m: 2.5, b: -8, color: "red" }], step: { x: 1, y: 1 } })),
  W(4, "hard", 5, String.raw`At a concert stand, $3$ shirts and $2$ hats cost $106$ dollars, and $2$ shirts and $5$ hats cost $133$ dollars. (a) Write a system. (b) Solve by elimination. (c) Explain what the intersection of the two lines on the graph means. (d) Ria has $200$ dollars and wants $5$ shirts. How many hats can she also buy?`,
    String.raw`(a) $3s+2h=106$, $2s+5h=133$. (b) $\times2$, $\times3$: $11h=187$, $h=17$; $s=24$. (c) $(24,17)$: a shirt costs $24$ dollars and a hat $17$ dollars — the only prices that fit both receipts. (d) $200-120=80$; $80\div17\approx4.7$: $4$ hats. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 40 }, lines: [{ m: -1.5, b: 53, color: "blue", label: "3s + 2h = 106", lx: 28 }, { m: -0.4, b: 26.6, color: "red", label: "2s + 5h = 133", lx: 30 }], xlabel: "s", ylabel: "h", step: { x: 5, y: 5 } })),
  W(5, "medium", 5, String.raw`A chemist needs $50$ L of an $18\%$ acid solution and has $10\%$ and $30\%$ solutions. (a) Define the variables. (b) Write a system. (c) Solve it. (d) Check that your answer gives $50$ L of $18\%$ acid.`,
    String.raw`(a) $x$ = litres of $10\%$, $y$ = litres of $30\%$. (b) $x+y=50$, $0.1x+0.3y=9$. (c) $x+3y=90$; subtract: $2y=40$, $y=20$, $x=30$. (d) $3+6=9$ L of acid in $50$ L: $18\%$ ✓. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 60 }, lines: [{ m: -1, b: 50, color: "blue", label: "x + y = 50", lx: 8 }, { m: -1 / 3, b: 30, color: "red", label: "x + 3y = 90", lx: 42 }], step: { x: 10, y: 10 } })),
  W(5, "hard", 5, String.raw`$15\,000$ dollars is split between a savings bond paying $4.5\%$ a year and a fund expected to earn $7\%$. The goal is $850$ dollars of interest in the first year. (a) Define variables and write a system. (b) Solve it. (c) The chart shows the interest from each part. Explain how it confirms your answer. (d) If the fund instead loses $3\%$, what is the net result for the year?`,
    String.raw`(a) $b+f=15\,000$, $0.045b+0.07f=850$. (b) $0.045b+0.07(15\,000-b)=850\Rightarrow 0.025b=200$: $b=8000$, $f=7000$ dollars. (c) $360+490=850$ dollars. (d) $360-210=150$ dollars gain. [1, 2, 1, 1.]`,
    barChartDoc({ bars: [["bond (4.5%)", 360], ["fund (7%)", 490]], base: 0, top: 600, step: 100, ylabel: "interest (dollars)", color: "green" })),
  W(5, "hard", 5, String.raw`A cupcake stand has fixed costs of $360$ dollars, spends $1.20$ dollars per cupcake and sells each for $3.50$ dollars. (a) Write cost and revenue equations. (b) Find the break-even point and interpret it. (c) Find the profit from selling $300$ cupcakes. (d) Explain what the region between the lines to the right of the intersection represents.`,
    String.raw`(a) $C=1.2n+360$, $R=3.5n$. (b) $2.3n=360\Rightarrow n\approx156.5$: at least $157$ cupcakes to make a profit. (c) $1050-720=330$ dollars. (d) The vertical gap $R-C$ is the profit. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 1100 }, lines: [{ m: 1.2, b: 360, color: "red", label: "C", lx: 270 }, { m: 3.5, b: 0, color: "green", label: "R", lx: 260 }], xlabel: "cupcakes", ylabel: "dollars", step: { x: 50, y: 100 } })),
  W(6, "medium", 5, String.raw`Consider $y=3x-2$ with each second equation: (i) $6x-2y=4$ (ii) $6x-2y=10$ (iii) $x+3y=4$. (a) Classify system (i). (b) Classify system (ii). (c) Solve system (iii). (d) Match each system to its picture in the graph and explain.`,
    String.raw`(a) $y=3x-2$: the same line, infinitely many. (b) $y=3x-5$: parallel, none. (c) $x+3(3x-2)=4\Rightarrow x=1$, $y=1$. (d) Blue is $y=3x-2$ (and (i)); red is (ii), parallel; green is (iii), crossing at $(1,1)$. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 5 }, lines: [{ m: 3, b: -2, color: "blue" }, { m: 3, b: -5, color: "red" }, { m: -1 / 3, b: 4 / 3, color: "green" }], step: { x: 1, y: 1 } })),
  W(6, "hard", 5, String.raw`Consider $2x+ky=6$ and $kx+8y=12$. (a) Find the values of $k$ that make the lines parallel or coincident. (b) For which value is there no solution? (c) For which value are there infinitely many? (d) Solve the system when $k=0$.`,
    String.raw`(a) $\frac2k=\frac k8\Rightarrow k^2=16$, $k=\pm4$. (b) $k=-4$: $2x-4y=6$ vs $-4x+8y=12$, i.e. $-4x+8y=-12$ vs $12$ (graph). (c) $k=4$: $4x+8y=12$ is $2(2x+4y=6)$. (d) $2x=6$, $8y=12$: $(3,1.5)$. [2, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 4 }, lines: [{ m: 0.5, b: -1.5, color: "blue", label: "2x − 4y = 6", lx: 2.5 }, { m: 0.5, b: 1.5, color: "red", label: "−4x + 8y = 12", lx: -3.5 }], step: { x: 1, y: 1 } })),
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
