// Chapter 5 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a geometry figure (SVG uploaded to graph-images; paper tests print image_url).
//   node scripts/mth1w-ch5/written.mjs           -> dry run
//   node scripts/mth1w-ch5/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { figDoc, rightTri, polygon, rect, prism, cylinder, cone, pyramid } from "./figs5.mjs";

const T = {
  1: "5.1 Geometry & Measurement Through History", 2: "5.2 Designs with Circle & Triangle Properties", 3: "5.3 Units & Unit Conversion",
  4: "5.4 The Pythagorean Theorem", 5: "5.5 Changing Dimensions: Perimeter", 6: "5.6 Changing Dimensions: Area", 7: "5.7 Volume", 8: "5.8 Surface Area",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const arc = (cx, cy, r, a0, a1, n = 30) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });
const doc = (items, w = 300) => figDoc({ w, items });

export const WRITTEN = [
  W(1, "medium", 4, String.raw`The diagram shows Eratosthenes' method. At noon the Sun is directly overhead at S, while at A, $800$ km due north, a vertical stick's shadow shows the Sun is $7.2^\circ$ from vertical. (a) Explain why the angle at Earth's centre is also $7.2^\circ$. (b) Estimate Earth's circumference. (c) Estimate its radius.`,
    String.raw`(a) The Sun's rays are parallel, so the shadow angle and the angle at the centre are alternate angles. (b) $360\div7.2=50$; $50\times800=40\,000$ km. (c) $r=40\,000\div(2\pi)\approx6366$ km. [1, 2, 1.]`,
    doc([{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { seg: [[0, 0], P(90)], color: "blue" }, { seg: [[0, 0], P(110)], color: "blue" }, { arc: [P(90), [0, 0], P(110)], label: "7.2°", r: 0.25 }, { text: "S", at: P(90, 1.12), bold: true }, { text: "A", at: P(110, 1.12), bold: true }, { seg: [[-0.2, 1.55], [-0.2, 1.15]], color: "amber" }, { seg: [[0.2, 1.55], [0.2, 1.15]], color: "amber" }, { text: "Sun's rays", at: [0.55, 1.45], color: "amber", size: 12 }], 240)),
  W(1, "hard", 4, String.raw`A regular hexagon is drawn inside a circle of diameter $1$ and another around it (see diagram). The inside hexagon has side $0.5$ and the outside hexagon has side $0.5774$. (a) Use the perimeters to write bounds for $\pi$. (b) Explain why the circle's circumference must lie between the two perimeters. (c) Describe how Archimedes improved these bounds.`,
    String.raw`(a) $3<\pi<3.464$. (b) The circle is wrapped around the inner hexagon and inside the outer one; a curve between two convex shapes has a length between their perimeters. (c) He doubled the sides to 12, 24, 48 and 96, giving $3\frac{10}{71}<\pi<3\frac17$. [2, 1, 1.]`,
    doc([{ circle: [0, 0, 1], color: "ink" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(60 * k)), fill: "none", color: "blue" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(30 + 60 * k, 1 / Math.cos(Math.PI / 6))), fill: "none", color: "amber" }], 220)),
  W(2, "medium", 4, String.raw`In the diagram, $O$ is the centre, $AB$ is a diameter and $\angle BOC=70^\circ$. (a) Find $\angle BAC$. (b) Find $\angle ACB$ and explain. (c) Find $\angle ABC$. Name the property used in each step.`,
    String.raw`(a) $35^\circ$: inscribed angle is half the central angle on arc $BC$. (b) $90^\circ$: angle in a semicircle. (c) $180-90-35=55^\circ$: angle sum of a triangle. [1, 1, 2.]`,
    doc([{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [0, -0.15], bold: true }, { seg: [P(180), P(0)], color: "blue" }, { seg: [[0, 0], P(70)], color: "blue" }, { seg: [P(180), P(70)], color: "red" }, { seg: [P(0), P(70)], color: "red" }, { arc: [P(0), [0, 0], P(70)], label: "70°", r: 0.22 }, { text: "A", at: P(180, 1.13), bold: true }, { text: "B", at: P(0, 1.13), bold: true }, { text: "C", at: P(70, 1.13), bold: true }], 240)),
  W(2, "hard", 4, String.raw`A logo is made by inscribing a regular octagon in a circle and joining the centre to two neighbouring vertices $A$ and $B$. (a) Find $\angle AOB$. (b) Find $\angle OAB$. (c) Use (b) to find each interior angle of the octagon and check with $(n-2)\times180^\circ$. (d) Find the inscribed angle at any other vertex $P$ standing on side $AB$.`,
    String.raw`(a) $45^\circ$. (b) $(180-45)\div2=67.5^\circ$. (c) $2\times67.5=135^\circ$; $1080\div8=135^\circ$ ✓. (d) $22.5^\circ$. [1, 1, 1, 1.]`,
    doc([{ circle: [0, 0, 1], color: "gray" }, { poly: [0, 1, 2, 3, 4, 5, 6, 7].map((k) => P(90 + 45 * k)), fill: "none", color: "violet" }, { poly: [[0, 0], P(270), P(315)], fill: "#ede9fe", color: "violet" }, { text: "O", at: [-0.12, 0.08], bold: true }, { text: "A", at: P(270, 1.14), bold: true }, { text: "B", at: P(315, 1.14), bold: true }], 230)),
  W(3, "medium", 4, String.raw`A patio is $16$ ft by $12$ ft (see diagram). Patio stones are sold by the square metre. (a) Convert the dimensions to metres. (b) Find the area in m$^2$. (c) Stones cost $38$ dollars per m$^2$ and you buy $10\%$ extra for cutting. Find the cost.`,
    String.raw`(a) $16\times0.3048=4.877$ m; $12\times0.3048=3.658$ m. (b) $\approx17.84$ m$^2$. (c) $17.84\times1.1\times38\approx746$ dollars. [1, 1, 2.]`,
    doc(rect(16, 12, { lw: "16 ft", lh: "12 ft" }), 240)),
  W(3, "hard", 4, String.raw`The tank shown is $1.2$ m long, $50$ cm wide and $60$ cm high. (a) Find its capacity in litres. (b) A pump fills it at $9$ L/min. How long does it take to fill? (c) How many US gallons does it hold ($1$ gal $\approx3.785$ L)?`,
    String.raw`(a) $120\times50\times60=360\,000$ cm$^3=360$ L. (b) $40$ min. (c) $\approx95.1$ gal. [2, 1, 1.]`,
    doc(prism(12, 5, 6, { ll: "1.2 m", lw: "50 cm", lh: "60 cm" }), 260)),
  W(4, "medium", 4, String.raw`A $6.5$ m ladder leans against a wall with its foot $2.5$ m from the wall. (a) How high does it reach? (b) The foot slides out to $3.9$ m. How far does the top slide down? (c) Explain why the top moves less than the foot.`,
    String.raw`(a) $\sqrt{42.25-6.25}=6$ m. (b) $\sqrt{42.25-15.21}=5.2$ m; it slides $0.8$ m. (c) The ladder's length is fixed; near the top of the wall the height changes slowly while the foot moves (answers vary). [1, 2, 1.]`,
    doc(rightTri(2.5, 6, { la: "2.5 m", lb: "h", lc: "6.5 m", fill: "amber" }), 200)),
  W(4, "hard", 5, String.raw`A room is $5$ m long, $4$ m wide and $3$ m high. A spider at corner $A$ on the floor wants to reach the opposite ceiling corner $G$. (a) Find the straight-line distance $AG$. (b) The spider must walk on the walls. Find the length of the path that goes across the floor to the far corner and straight up. (c) Unfold the walls to find the shortest walking path, and compare.`,
    String.raw`(a) $\sqrt{25+16+9}=\sqrt{50}\approx7.07$ m. (b) $\sqrt{41}+3\approx9.40$ m. (c) Unfolding the floor and end wall: $\sqrt{5^2+(4+3)^2}=\sqrt{74}\approx8.60$ m (other unfoldings give $\sqrt{80}$ and $\sqrt{90}$); shorter than (b). [1, 1, 3.]`,
    doc([...prism(5, 4, 3, { ll: "5 m", lw: "4 m", lh: "3 m" }), { text: "A", at: [-0.4, -0.3], bold: true }, { text: "G", at: [5 + 4 * 0.45 + 0.35, 3 + 4 * 0.32 + 0.2], bold: true }], 260)),
  W(5, "hard", 5, String.raw`A farmer has $240$ m of fence to make a rectangular field beside a straight river (no fence on the river side). (a) Write the area $A$ in terms of the width $w$. (b) Make a table for $w=40, 50, 60, 70, 80$. (c) State the dimensions with the greatest area. (d) Compare with the best field if all four sides were fenced.`,
    String.raw`(a) $A=w(240-2w)$. (b) $6400$, $7000$, $7200$, $7000$, $6400$. (c) $60$ m by $120$ m: $7200$ m$^2$. (d) Square $60\times60=3600$ m$^2$: the river doubles the area. [1, 1, 1, 2.]`,
    doc([...rect(12, 6, { lw: "", lh: "w", fill: "green" }), { seg: [[-1, 6], [13, 6]], color: "blue", width: 5 }, { text: "river", at: [6, 6.8], color: "blue", bold: true }], 260)),
  W(6, "medium", 4, String.raw`A window is a $90$ cm by $120$ cm rectangle with a semicircle on top (diagram). (a) Find the area of glass. (b) Find the length of trim around the outside. (c) A larger window is made with every length multiplied by $1.5$. Find its glass area and trim without redoing the calculation.`,
    String.raw`(a) $10\,800+\tfrac12\pi(45)^2\approx13\,981$ cm$^2$. (b) $90+2(120)+45\pi\approx471.4$ cm. (c) Area $\times2.25\approx31\,457$ cm$^2$; trim $\times1.5\approx707.1$ cm. [1, 1, 2.]`,
    doc([{ poly: [[0, 0], [9, 0], [9, 12], ...arc(4.5, 12, 4.5, 0, 180).slice(1, -1), [0, 12]], fill: "blue", color: "blue" }, { text: "90 cm", at: [4.5, -1], bold: true, color: "blue" }, { text: "120 cm", at: [9.5, 6], bold: true, color: "blue", anchor: "start" }], 180)),
  W(7, "medium", 4, String.raw`A cylindrical silo (radius $3$ m, height $10$ m) has a cone-shaped top of height $2$ m. (a) Find the volume of the cylinder. (b) Find the volume of the cone. (c) Find the total capacity in litres.`,
    String.raw`(a) $90\pi\approx282.7$ m$^3$. (b) $\tfrac13\pi(9)(2)=6\pi\approx18.8$ m$^3$. (c) $96\pi\approx301.6$ m$^3\approx301\,600$ L. [1, 1, 2.]`,
    doc([...cylinder(3, 10, { lr: "", lh: "10 m" }), ...cone(3, 2, { lr: "r = 3 m", lh: "2 m" }).map((it) => up(it, 10))], 170)),
  W(8, "hard", 5, String.raw`A square pyramid has base $10$ cm and height $12$ cm. (a) Find the slant height. (b) Find the surface area. (c) Find the volume. (d) A similar pyramid has every length doubled. Find its surface area and volume and explain the factors.`,
    String.raw`(a) $\sqrt{144+25}=13$ cm. (b) $100+260=360$ cm$^2$. (c) $400$ cm$^3$. (d) $1440$ cm$^2$ ($\times4=2^2$) and $3200$ cm$^3$ ($\times8=2^3$). [1, 1, 1, 2.]`,
    doc(pyramid(10, 12, { lb: "10 cm", lh: "12 cm", ls: "s" }), 220)),
];

function up(it, dy) {
  const m = (p) => [p[0], p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0], o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0], o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
}

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
