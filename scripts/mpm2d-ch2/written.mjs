// MPM2D chapter 2 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Figures show the
// given information only, never the answer.
//   node scripts/mpm2d-ch2/written.mjs           -> dry run
//   node scripts/mpm2d-ch2/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { planeDoc } from "../mth1w-ch4/figs4.mjs";

const T = { 1: "2.1 Midpoint of a Line Segment", 2: "2.2 Length of a Line Segment", 3: "2.3 Equation of a Circle (centre at the origin)", 4: "2.4 Medians, Right Bisectors & Altitudes", 5: "2.5 Verifying Geometric Properties", 6: "2.6 Problems Involving Lines & Line Segments" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const circ = (r, a = -r, b = r) => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a, b, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a, b, color: "violet" }];
const poly = (pts, labels, view, step = 1) => planeDoc({ view, segs: [{ pts: [...pts, pts[0]], color: "gray" }], points: pts.map((p, i) => ({ x: p[0], y: p[1], label: `${labels[i]}(${p[0]}, ${p[1]})`.replace(/-/g, "−") })), step: { x: step, y: step } });
const pts = (list, view, step = 1, extra = {}) => planeDoc({ view, points: list.map(([x, y, l]) => ({ x, y, label: `${l}(${x}, ${y})`.replace(/-/g, "−"), color: "blue" })), step: { x: step, y: step }, ...extra });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`Quadrilateral $ABCD$ has vertices $A(-4,-1)$, $B(2,-3)$, $C(6,3)$ and $D(0,5)$. (a) Find the midpoints of the diagonals $AC$ and $BD$. (b) What do your answers show about $ABCD$? (c) Find the midpoint of $AB$. (d) A circle has diameter $AC$. Find its centre.`,
    String.raw`(a) both $(1,1)$. (b) The diagonals bisect each other, so $ABCD$ is a parallelogram. (c) $(-1,-2)$. (d) $(1,1)$. [2, 1, 1, 1.]`,
    poly([[-4, -1], [2, -3], [6, 3], [0, 5]], "ABCD", { xmin: -6, xmax: 8, ymin: -5, ymax: 7 })),
  W(1, "hard", 4, String.raw`A circle has centre $C(2,1)$, and $A(-3,7)$ is one end of a diameter $AB$. (a) Find $B$. (b) Find the radius. (c) Is $(-4,0)$ inside, on or outside the circle? Explain. (d) Find the point one quarter of the way from $A$ to $B$.`,
    String.raw`(a) $B(7,-5)$. (b) $CA=\sqrt{25+36}=\sqrt{61}\approx7.81$. (c) Distance from $C$: $\sqrt{36+1}=\sqrt{37}<\sqrt{61}$: inside. (d) Midpoint of $AC$: $(-0.5,4)$. [1, 1, 1, 1.]`,
    pts([[2, 1, "C"], [-3, 7, "A"]], { xmin: -6, xmax: 9, ymin: -7, ymax: 9 })),
  W(2, "medium", 5, String.raw`$\triangle PQR$ has vertices $P(-3,-2)$, $Q(5,-2)$ and $R(1,4)$. (a) Find the length of each side. (b) Classify the triangle by its sides. (c) Find its perimeter to two decimals. (d) Find its area.`,
    String.raw`(a) $PQ=8$, $QR=\sqrt{52}$, $RP=\sqrt{52}$. (b) isosceles. (c) $8+2\sqrt{52}\approx22.42$. (d) base $8$, height $6$: $24$. [2, 1, 1, 1.]`,
    poly([[-3, -2], [5, -2], [1, 4]], "PQR", { xmin: -5, xmax: 7, ymin: -4, ymax: 6 })),
  W(2, "hard", 5, String.raw`A delivery drone leaves its base $D(0,0)$, flies to $A(6,8)$, then to $B(-3,12)$, and returns to $D$ (units in km). (a) Find the length of each leg. (b) Find the total distance to two decimals. (c) The drone's battery lasts $30$ km. Can it complete the trip? (d) Which delivery point is farther from the base?`,
    String.raw`(a) $DA=10$, $AB=\sqrt{97}\approx9.85$, $BD=\sqrt{153}\approx12.37$. (b) $\approx32.22$ km. (c) No — it is $2.22$ km short. (d) $B$ ($\sqrt{153}>10$). [2, 1, 1, 1.]`,
    pts([[0, 0, "D"], [6, 8, "A"], [-3, 12, "B"]], { xmin: -5, xmax: 9, ymin: -1, ymax: 14 }, 1, { xlabel: "km", ylabel: "km" })),
  W(3, "medium", 5, String.raw`Consider the circle $x^2+y^2=40$. (a) State its radius exactly and to two decimals. (b) Find the points on the circle with $x=2$. (c) Is $(-5,4)$ on, inside or outside the circle? (d) Write the equation of the circle centred at the origin through $(-5,4)$.`,
    String.raw`(a) $\sqrt{40}\approx6.32$. (b) $y^2=36$: $(2,6)$ and $(2,-6)$. (c) $25+16=41>40$: outside. (d) $x^2+y^2=41$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, curves: circ(Math.sqrt(40)), step: { x: 1, y: 1 } })),
  W(3, "hard", 5, String.raw`A radio tower at the origin reaches $25$ km. Towns are at $A(15,-20)$, $B(-24,10)$, $C(7,-24)$ and $D(-10,18)$. (a) Write the equation of the edge of the coverage area. (b) Classify each town as inside, on or outside the edge. (c) How far beyond the edge is the town that is outside? (d) A highway runs along $y=-20$. How long is the part of it inside the coverage area?`,
    String.raw`(a) $x^2+y^2=625$. (b) $A$ on ($625$), $B$ outside ($676$), $C$ on ($625$), $D$ inside ($424$). (c) $\sqrt{676}-25=1$ km. (d) $x^2=225$: from $x=-15$ to $15$, $30$ km. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -30, xmax: 30, ymin: -30, ymax: 30 }, curves: circ(25), points: [[15, -20, "A"], [-24, 10, "B"], [7, -24, "C"], [-10, 18, "D"]].map(([x, y, l]) => ({ x, y, label: l, color: "blue" })), step: { x: 5, y: 5 } })),
  W(4, "medium", 5, String.raw`$\triangle ABC$ has vertices $A(-2,-2)$, $B(6,0)$ and $C(2,8)$. (a) Find the equation of the median from $A$. (b) Find the equation of the altitude from $C$. (c) Find the equation of the right bisector of $AB$. (d) Explain why the lines in (b) and (c) are parallel.`,
    String.raw`(a) midpoint of $BC$ is $(4,4)$: $y=x$. (b) $m_{AB}=\frac14$, so slope $-4$ through $C$: $y=-4x+16$. (c) through $(2,-1)$, slope $-4$: $y=-4x+7$. (d) Both are perpendicular to $AB$, so they have the same slope. [1, 2, 1, 1.]`,
    poly([[-2, -2], [6, 0], [2, 8]], "ABC", { xmin: -4, xmax: 8, ymin: -4, ymax: 10 })),
  W(4, "hard", 5, String.raw`Use $\triangle ABC$ with $A(-2,-2)$, $B(6,0)$, $C(2,8)$. (a) Find the centroid by solving the equations of two medians, and check with the average of the vertices. (b) Find the circumcentre. (c) Verify that the circumcentre is the same distance from $A$ and $B$.`,
    String.raw`(a) medians $y=x$ and $y=-\frac12x+3$ meet at $(2,2)$; average $\left(\frac63,\frac63\right)$ ✓. (b) right bisectors $y=-4x+7$ and $y=\frac12x+2$ meet at $\left(\frac{10}{9},\frac{23}{9}\right)$. (c) both squared distances are $\frac{2465}{81}$. [2, 2, 1.]`,
    poly([[-2, -2], [6, 0], [2, 8]], "ABC", { xmin: -4, xmax: 8, ymin: -4, ymax: 10 })),
  W(5, "medium", 5, String.raw`Quadrilateral $JKLM$ has vertices $J(-4,1)$, $K(2,-2)$, $L(4,2)$, $M(-2,5)$. (a) Find the slope of each side. (b) Prove that $JKLM$ is a rectangle. (c) Is it a square? Justify. (d) Show that its diagonals are equal.`,
    String.raw`(a) $JK=-\frac12$, $KL=2$, $LM=-\frac12$, $MJ=2$. (b) Opposite sides parallel and $-\frac12\times2=-1$: a parallelogram with a right angle. (c) No: $JK=\sqrt{45}$, $KL=\sqrt{20}$. (d) $JL=KM=\sqrt{65}$. [2, 1, 1, 1.]`,
    poly([[-4, 1], [2, -2], [4, 2], [-2, 5]], "JKLM", { xmin: -6, xmax: 6, ymin: -4, ymax: 7 })),
  W(5, "hard", 5, String.raw`$ABCD$ has vertices $A(-6,-2)$, $B(2,-4)$, $C(6,4)$, $D(-2,6)$. $P$, $Q$, $R$, $S$ are the midpoints of $AB$, $BC$, $CD$, $DA$. (a) Find $P$, $Q$, $R$ and $S$. (b) Prove that $PQRS$ is a parallelogram. (c) Show that $PQ$ is parallel to the diagonal $AC$ and half as long.`,
    String.raw`(a) $P(-2,-3)$, $Q(4,0)$, $R(2,5)$, $S(-4,2)$. (b) slopes $\frac12$, $-\frac52$, $\frac12$, $-\frac52$: opposite sides parallel. (c) $m_{AC}=\frac12$; $PQ=\sqrt{45}$ and $AC=\sqrt{180}=2\sqrt{45}$. [1, 2, 2.]`,
    poly([[-6, -2], [2, -4], [6, 4], [-2, 6]], "ABCD", { xmin: -8, xmax: 8, ymin: -6, ymax: 8 })),
  W(6, "medium", 5, String.raw`Find the shortest distance from $P(-1,7)$ to the line $y=2x-1$. (a) Write the equation of the perpendicular through $P$. (b) Find the foot of the perpendicular. (c) Find the distance exactly and to two decimals. (d) Explain why this is the shortest distance.`,
    String.raw`(a) $y=-\frac12x+\frac{13}{2}$. (b) $2x-1=-\frac12x+\frac{13}{2}\Rightarrow x=3$: $(3,5)$. (c) $\sqrt{16+4}=\sqrt{20}\approx4.47$. (d) Any other segment from $P$ to the line is the hypotenuse of a right triangle with this segment as a leg, so it is longer. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 9 }, lines: [{ m: 2, b: -1, color: "violet" }], points: [{ x: -1, y: 7, label: "P(−1, 7)", color: "red" }], step: { x: 1, y: 1 } })),
  W(6, "hard", 5, String.raw`Villages are at $A(-3,-1)$, $B(4,6)$ and $C(6,2)$ (units in km). A cell tower must be the same distance from all three. (a) Find the equation of the right bisector of $AB$. (b) Find the tower's location. (c) Verify that it is the same distance from each village. (d) A highway follows $y=-x+11$. How long is the shortest service road from the tower to the highway?`,
    String.raw`(a) midpoint $(0.5,2.5)$, slope $-1$: $y=-x+3$. (b) with the right bisector of $BC$, $y=\frac12x+\frac32$: $(1,2)$. (c) all distances are $5$ km. (d) perpendicular $y=x+1$ meets the highway at $(5,6)$: $\sqrt{32}\approx5.66$ km. [1, 2, 1, 1.]`,
    pts([[-3, -1, "A"], [4, 6, "B"], [6, 2, "C"]], { xmin: -5, xmax: 10, ymin: -3, ymax: 11 }, 1, { lines: [{ m: -1, b: 11, color: "gray", label: "highway", lx: 8 }] })),
  W(6, "hard", 5, String.raw`The points $(-8,6)$ and $(6,8)$ lie on $x^2+y^2=100$. (a) Verify this. (b) Find the right bisector of the chord joining them and show that it passes through the centre. (c) Find the distance from the centre to the chord. (d) Find the length of the chord and check your answers to (c) and (d) with the Pythagorean theorem.`,
    String.raw`(a) $64+36=100$, $36+64=100$. (b) midpoint $(-1,7)$, chord slope $\frac17$, bisector $y=-7x$, which passes through $(0,0)$. (c) $\sqrt{1+49}=\sqrt{50}\approx7.07$. (d) $\sqrt{196+4}=\sqrt{200}\approx14.14$; $\left(\frac{\sqrt{200}}{2}\right)^2+(\sqrt{50})^2=50+50=100=r^2$ ✓. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -11, xmax: 11, ymin: -11, ymax: 11 }, curves: circ(10), segs: [{ pts: [[-8, 6], [6, 8]], color: "red" }], points: [{ x: -8, y: 6, label: "(−8, 6)", color: "red" }, { x: 6, y: 8, label: "(6, 8)", color: "red" }], step: { x: 2, y: 2 } })),
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
