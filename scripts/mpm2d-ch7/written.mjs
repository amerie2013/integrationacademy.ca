// MPM2D chapter 7 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Figures show the
// given information only, never the answer.
//   node scripts/mpm2d-ch7/written.mjs           -> dry run
//   node scripts/mpm2d-ch7/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { figDoc, polygon, atriDoc, sasDoc, sssDoc, sceneDoc } from "./bank/fig.mjs";

const T = { 1: "7.1 The Sine Law", 2: "7.2 The Cosine Law", 3: "7.3 Choosing the Right Law", 4: "7.4 Applications of the Sine & Cosine Laws" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const r = Math.PI / 180;
const altFig = (A, B, c) => { const b = (c * Math.sin(B * r)) / Math.sin((180 - A - B) * r), x = b * Math.cos(A * r), h = b * Math.sin(A * r); return figDoc({ w: 340, items: [...polygon([[0, 0], [c, 0], [x, h]], { names: ["A", "B", "C"], sides: ["c", "a", "b"], angles: [[0, "A"], [1, "B"]] }), { seg: [[x, 0], [x, h]], color: "red", dash: true }, { text: "h", at: [x + 0.06 * c, h / 2], color: "red", bold: true }] }); };

export const WRITTEN = [
  W(1, "medium", 5, String.raw`(a) In the acute triangle shown, write the altitude $h$ in two ways and use them to develop the sine law $\frac a{\sin A}=\frac b{\sin B}$. (b) Explain how a second altitude would bring in $\frac c{\sin C}$.`,
    String.raw`(a) Left right triangle: $h=b\sin A$; right right triangle: $h=a\sin B$. So $a\sin B=b\sin A$; dividing by $\sin A\sin B$ gives $\frac a{\sin A}=\frac b{\sin B}$. (b) An altitude from $A$ to $BC$ gives $c\sin B=b\sin C$, so $\frac b{\sin B}=\frac c{\sin C}$. [3, 2.]`,
    altFig(57, 66, 9)),
  W(1, "hard", 5, String.raw`In acute $\triangle ABC$, $\angle A=46^\circ$, $\angle B=72^\circ$ and $a=15$. (a) Find $\angle C$. (b) Find $b$ and $c$. (c) Check that the sides are in the same order as their opposite angles.`,
    String.raw`(a) $62^\circ$. (b) $b=\frac{15\sin72^\circ}{\sin46^\circ}\approx19.8$; $c=\frac{15\sin62^\circ}{\sin46^\circ}\approx18.4$. (c) $46^\circ<62^\circ<72^\circ$ and $15<18.4<19.8$ ✓. [1, 3, 1.]`,
    atriDoc(46, 72, 15 * Math.sin(62 * r) / Math.sin(46 * r), { a: "15", A: "46°", B: "72°" })),
  W(2, "medium", 5, String.raw`(a) In the triangle shown, the altitude from $C$ splits $c$ into $x$ and $c-x$. Use the Pythagorean theorem in both right triangles to develop the cosine law $a^2=b^2+c^2-2bc\cos A$. (b) Explain what happens to the law when $\angle A=90^\circ$.`,
    String.raw`(a) $h^2=b^2-x^2$; $a^2=h^2+(c-x)^2=b^2-x^2+c^2-2cx+x^2=b^2+c^2-2cx$; $x=b\cos A$ gives $a^2=b^2+c^2-2bc\cos A$. (b) $\cos90^\circ=0$, so it becomes the Pythagorean theorem $a^2=b^2+c^2$. [4, 1.]`,
    figDoc({ w: 340, items: [...polygon([[0, 0], [10, 0], [4, 6.5]], { names: ["A", "B", "C"], sides: ["", "a", "b"], angles: [[0, "A"]] }), { seg: [[4, 0], [4, 6.5]], color: "red", dash: true }, { text: "h", at: [4.5, 3.2], color: "red", bold: true }, { text: "x", at: [2, -0.7], color: "green", bold: true }, { text: "c − x", at: [7, -0.7], color: "green", bold: true }] })),
  W(2, "hard", 5, String.raw`A triangle has sides $11$, $13$ and $15$. (a) Find its largest angle and explain how it shows the triangle is acute. (b) Find the other two angles. (c) Check your answers.`,
    String.raw`(a) Opposite $15$: $\cos\theta=\frac{121+169-225}{286}$, $\theta\approx76.9^\circ<90^\circ$, so every angle is acute. (b) Opposite $11$: $\approx45.6^\circ$; opposite $13$: $\approx57.6^\circ$. (c) $76.9+45.6+57.6\approx180$ ✓. [2, 2, 1.]`,
    sssDoc(15, 11, 13, { A: "?" })),
  W(3, "medium", 5, String.raw`For each triangle, state which tool you would use first and why: (a) $\angle A$, $\angle B$, $c$ (b) $a$, $b$, $\angle C$ (c) $a$, $b$, $c$ (d) $a$, $\angle A$, $b$ (acute) (e) a right triangle with a leg and an acute angle.`,
    String.raw`(a) Sine law after finding $\angle C$ (ASA). (b) Cosine law (SAS — no side–angle pair). (c) Cosine law (SSS). (d) Sine law ($a$ and $\angle A$ are a pair). (e) Primary ratios — no law needed. [1 each.]`,
    atriDoc(58, 64, 9, { a: "a", b: "b", c: "c" })),
  W(3, "hard", 5, String.raw`In acute $\triangle ABC$, $b=13$, $c=15$ and $\angle A=52^\circ$. (a) Explain which law to use first. (b) Solve the triangle. (c) Explain why you found $\angle B$ (not $\angle C$) with the sine law.`,
    String.raw`(a) SAS: cosine law. (b) $a\approx12.4$; $\angle B\approx55.7^\circ$; $\angle C\approx72.3^\circ$. (c) $\angle B$ is opposite the shorter of $b$ and $c$, so it must be acute; the larger angle is then found by subtraction. [1, 3, 1.]`,
    sasDoc(13, 15, 52, { b: "13", c: "15", A: "52°" })),
  W(4, "medium", 5, String.raw`Points $A$ and $B$ are $160$ m apart on one bank of a river. A tree $C$ on the far bank makes $\angle CAB=66^\circ$ and $\angle CBA=58^\circ$. (a) Find $\angle C$. (b) Find $AC$. (c) Find the width of the river.`,
    String.raw`(a) $56^\circ$. (b) $\frac{160\sin58^\circ}{\sin56^\circ}\approx163.7$ m. (c) $163.7\sin66^\circ\approx149.5$ m. [1, 2, 2.]`,
    atriDoc(66, 58, 160, { c: "160 m", A: "66°", B: "58°", names: ["A", "B", "C"] })),
  W(4, "hard", 5, String.raw`Ranger towers $A$ and $B$ are $16$ km apart. A fire $F$ is seen at $\angle FAB=54^\circ$ and $\angle FBA=63^\circ$. (a) Find each tower's distance to the fire. (b) Which tower should send a crew, and why? (c) How far is the fire from the straight road joining the towers?`,
    String.raw`(a) $\angle F=63^\circ$: $AF=\frac{16\sin63^\circ}{\sin63^\circ}=16$ km; $BF=\frac{16\sin54^\circ}{\sin63^\circ}\approx14.5$ km. (b) Tower $B$ — it is closer. (c) $AF\sin54^\circ\approx12.9$ km. [2, 1, 2.]`,
    atriDoc(54, 63, 16, { c: "16 km", A: "54°", B: "63°", names: ["A", "B", "F"] })),
  W(4, "hard", 5, String.raw`Two surveyors $P$ and $Q$ stand $90$ m apart on opposite sides of a monument and see its top $T$ at angles of elevation of $58^\circ$ and $66^\circ$. (a) Find $\angle PTQ$ and explain why $\triangle PQT$ is acute. (b) Find $PT$ using the sine law. (c) Find the height of the monument.`,
    String.raw`(a) $180^\circ-58^\circ-66^\circ=56^\circ$; all three angles are under $90^\circ$. (b) $PT=\frac{90\sin66^\circ}{\sin56^\circ}\approx99.2$ m. (c) $99.2\sin58^\circ\approx84.1$ m. [1, 2, 2.]`,
    atriDoc(58, 66, 90, { c: "90 m", A: "58°", B: "66°", names: ["P", "Q", "T"] })),
  W(4, "medium", 5, String.raw`A triangular lot has two sides of $70$ m and $90$ m that meet at a $66^\circ$ angle. (a) Find the length of the third side. (b) Find the angle opposite the $70$ m side. (c) How much fencing is needed for the whole lot?`,
    String.raw`(a) $\sqrt{70^2+90^2-2(70)(90)\cos66^\circ}\approx88.7$ m. (b) $\sin\theta=\frac{70\sin66^\circ}{88.7}$, $\theta\approx46.1^\circ$. (c) $70+90+88.7\approx248.7$ m. [2, 2, 1.]`,
    sasDoc(70, 90, 66, { b: "70 m", c: "90 m", A: "66°" })),
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
