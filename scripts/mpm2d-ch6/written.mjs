// MPM2D chapter 6 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Each question carries a figure (SVG uploaded to graph-images; paper tests print image_url). Figures show the
// given information only, never the answer.
//   node scripts/mpm2d-ch6/written.mjs           -> dry run
//   node scripts/mpm2d-ch6/written.mjs --apply   -> uploads figures, inserts rows not already in the bank (matched by prompt)
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import crypto from "crypto";
import { figDoc, polygon, rtDoc, rtADoc, sceneDoc, pairDoc } from "./bank/fig.mjs";

const T = { 1: "6.1 Congruence & Similar Triangles", 2: "6.2 Solving Problems with Similar Triangles", 3: "6.3 The Primary Trigonometric Ratios", 4: "6.4 Finding Side Lengths", 5: "6.5 Finding Angles", 6: "6.6 Solving Right Triangles & Applications" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const g = (a, b) => ({ seg: [[a, 0], [b, 0]], color: "gray" });
const ns = (x, y) => ({ text: "not to scale", at: [x, y], size: 11, color: "gray" });

export const WRITTEN = [
  W(1, "medium", 5, String.raw`In $\triangle ABC$, $D$ is on $AB$ and $E$ is on $AC$ with $DE\parallel BC$. $AD=6$, $DB=9$ and $DE=8$. (a) Explain why $\triangle ADE\sim\triangle ABC$. (b) Find $BC$. (c) If $AE=7$, find $EC$.`,
    String.raw`(a) $DE\parallel BC$ gives equal corresponding angles ($\angle ADE=\angle ABC$, $\angle AED=\angle ACB$); $\angle A$ is shared: AA. (b) $k=\frac{15}6=2.5$: $BC=20$. (c) $AC=2.5\times7=17.5$, so $EC=10.5$. [2, 2, 1.]`,
    figDoc({ w: 320, items: [...polygon([[0, 0], [10, 0], [3, 7]], { names: ["B", "C", "A"] }), { seg: [[1.8, 4.2], [5.8, 4.2]], color: "red", width: 2.6 }, { text: "D", at: [1.0, 4.3], bold: true }, { text: "E", at: [6.6, 4.3], bold: true }, { text: "6", at: [1.6, 5.8], color: "blue" }, { text: "9", at: [0.3, 2.1], color: "blue" }, { text: "8", at: [3.8, 4.8], color: "red", bold: true }] })),
  W(1, "hard", 5, String.raw`$\triangle PQR$ has sides $6$, $9$, $12$ and $\triangle STU$ has sides $8$, $12$, $16$ (listed in matching order). (a) Are the triangles similar? Justify. (b) Are they congruent? Explain. (c) If $\angle P=29^\circ$, which angle of $\triangle STU$ equals it? (d) Find the ratio of their perimeters and explain it.`,
    String.raw`(a) $\frac86=\frac{12}9=\frac{16}{12}=\frac43$: similar (SSS∼). (b) No: the sides are not equal ($k\ne1$). (c) $\angle S$. (d) $36:27=4:3$, the scale factor, because every side is multiplied by $\frac43$. [2, 1, 1, 1.]`,
    pairDoc([[0, 0], [12, 0], [7.3125, 5.8]], 4 / 3, { names: ["P", "Q", "R"] }, { names: ["S", "T", "U"] })),
  W(2, "medium", 5, String.raw`A student's eyes are $1.6$ m above the ground. She places a mirror on level ground $2.4$ m in front of her and $18$ m from a tree, and sees the top of the tree in the mirror. (a) Explain why the two triangles are similar. (b) Find the height of the tree. (c) If she used her full height, $1.75$ m, by how much would her answer be off?`,
    String.raw`(a) Both have right angles at the ground, and the angles at the mirror are equal (angle of incidence = angle of reflection): AA. (b) $\frac h{1.6}=\frac{18}{2.4}$: $12$ m. (c) $1.75\times7.5=13.125$ m, about $1.1$ m too high. [2, 2, 1.]`,
    sceneDoc([g(-0.5, 14.5), ...polygon([[0, 0], [10, 0], [0, 8]], { fill: "green", color: "green", rightAt: [0], sides: ["18 m", "", "h"] }), ...polygon([[10, 0], [13.75, 0], [13.75, 3]], { fill: "blue", rightAt: [1], sides: ["2.4 m", "1.6 m", ""] }), { dot: [10, 0], color: "red", r: 5 }, { text: "mirror", at: [10, -1.1], color: "red", size: 12 }, ns(5, 8.7)], 400)),
  W(2, "hard", 5, String.raw`A $1.8$ m tall person stands $5$ m from a $6.3$ m lamp post at night. (a) Find the length of the person's shadow. (b) Find the shadow when the person is $8$ m from the post. (c) Explain how the shadow changes as the person walks away, using your answers.`,
    String.raw`(a) $\frac s{1.8}=\frac{s+5}{6.3}\Rightarrow4.5s=9$: $2$ m. (b) $4.5s=14.4$: $3.2$ m. (c) The shadow grows as the person walks away: each extra metre of distance adds $\frac{1.8}{4.5}=0.4$ m of shadow. [2, 2, 1.]`,
    sceneDoc([g(-0.5, 9), { seg: [[0, 0], [0, 6.3]], color: "gray", width: 4 }, { seg: [[0, 6.3], [8.6, 0]], color: "amber" }, { seg: [[6, 0], [6, 1.9]], color: "blue", width: 4 }, { text: "6.3 m", at: [-1, 3.2], bold: true }, { text: "1.8 m", at: [5.1, 1], color: "blue", bold: true }, { text: "5 m", at: [3, -0.6] }, { text: "s", at: [7.3, -0.6], bold: true, color: "red" }, ns(4.5, 6.8)], 380)),
  W(3, "medium", 5, String.raw`Two right triangles are shown: one with legs $5$ and $12$ and hypotenuse $13$, one with legs $10$ and $24$ and hypotenuse $26$. $\theta$ is opposite the shortest side in each. (a) Write $\sin\theta$, $\cos\theta$ and $\tan\theta$ for both triangles. (b) Explain why the ratios are equal. (c) Find $\theta$ to the nearest degree and check $\sin\theta$ with a calculator.`,
    String.raw`(a) Both: $\sin\theta=\frac5{13}$, $\cos\theta=\frac{12}{13}$, $\tan\theta=\frac5{12}$ (the second simplify to the same). (b) The triangles are similar ($k=2$), so every ratio of sides is unchanged — the ratios depend only on $\theta$. (c) $\theta=\tan^{-1}\frac5{12}\approx23^\circ$; $\sin22.6^\circ\approx0.385\approx\frac5{13}$ ✓. [2, 2, 1.]`,
    figDoc({ w: 440, items: [...polygon([[0, 0], [12, 0], [12, 5]], { sides: ["12", "5", "13"], rightAt: [1], angles: [[0, "θ"]] }), ...polygon([[14, 0], [38, 0], [38, 10]], { sides: ["24", "10", "26"], rightAt: [1], angles: [[0, "θ"]], fill: "green", color: "green" })] })),
  W(3, "hard", 5, String.raw`For an acute angle $\theta$, $\cos\theta=\frac7{25}$. (a) Sketch a right triangle and find the third side. (b) Write $\sin\theta$ and $\tan\theta$. (c) Show that $(\sin\theta)^2+(\cos\theta)^2=1$. (d) Find $\theta$ to one decimal place.`,
    String.raw`(a) Adjacent $7$, hypotenuse $25$, opposite $\sqrt{625-49}=24$. (b) $\frac{24}{25}$ and $\frac{24}7$. (c) $\frac{576+49}{625}=1$. (d) $\cos^{-1}0.28\approx73.7^\circ$. [1, 1, 2, 1.]`,
    rtDoc(7, 24, { adj: "7", hyp: "25", theta: "θ" })),
  W(4, "medium", 5, String.raw`A $7.5$ m ladder leans against a wall, making a $68^\circ$ angle with the ground. (a) How high up the wall does it reach? (b) How far is its foot from the wall? (c) Check your answers with the Pythagorean theorem. (d) Explain which ratio you used in (a) and why.`,
    String.raw`(a) $7.5\sin68^\circ\approx6.95$ m. (b) $7.5\cos68^\circ\approx2.81$ m. (c) $6.95^2+2.81^2\approx56.2\approx7.5^2$ ✓. (d) Sine: the ladder is the hypotenuse and the height is opposite the $68^\circ$ angle. [1.5, 1.5, 1, 1.]`,
    rtADoc(68, { hyp: "7.5 m", opp: "h", adj: "d", theta: "68°" })),
  W(4, "hard", 5, String.raw`A gable roof spans $12$ m and each side rises at $25^\circ$ to the horizontal, as shown. (a) Find the height of the roof's peak above the walls. (b) Find the length of each rafter. (c) Find the area of the triangular gable end.`,
    String.raw`(a) Half-span $6$ m: $6\tan25^\circ\approx2.80$ m. (b) $\frac6{\cos25^\circ}\approx6.62$ m. (c) $\frac12(12)(2.80)\approx16.8$ m$^2$. [2, 2, 1.]`,
    figDoc({ w: 380, items: [...polygon([[0, 0], [12, 0], [6, 2.8]], { sides: ["12 m", "", ""], angles: [[0, "25°"], [1, "25°"]], fill: "amber", color: "amber" }), { seg: [[6, 0], [6, 2.8]], color: "red", dash: true }, { right: [[12, 0], [6, 0], [6, 2.8]] }] })),
  W(5, "medium", 5, String.raw`A ramp rises $0.9$ m over a horizontal run of $10.5$ m. (a) Find its angle of inclination to one decimal place. (b) Accessibility guidelines suggest at most $4.8^\circ$. Does the ramp meet the guideline? (c) Find the shortest run that would meet the guideline for the same rise.`,
    String.raw`(a) $\tan^{-1}\frac{0.9}{10.5}\approx4.9^\circ$. (b) No — slightly too steep. (c) $\frac{0.9}{\tan4.8^\circ}\approx10.7$ m. [2, 1, 2.]`,
    rtDoc(10.5, 1.6, { adj: "10.5 m", opp: "0.9 m", theta: "θ" })),
  W(5, "hard", 5, String.raw`A rectangular screen is $16$ units wide and $9$ units tall. (a) Find the angle between a diagonal and the longer side. (b) Find the acute angle between the two diagonals. (c) Explain, using the triangles formed, why your answer to (b) is twice your answer to (a).`,
    String.raw`(a) $\tan^{-1}\frac9{16}\approx29.4^\circ$. (b) $\approx58.7^\circ$. (c) The diagonals bisect each other, making isosceles triangles; the angle between the diagonals is an exterior angle of an isosceles triangle with base angles $29.4^\circ$, so it equals $2\times29.4^\circ$. [2, 1, 2.]`,
    figDoc({ w: 380, items: [...polygon([[0, 0], [16, 0], [16, 9], [0, 9]], { sides: ["16", "9", "", ""], fill: "blue" }), { seg: [[0, 0], [16, 9]], color: "red" }, { seg: [[0, 9], [16, 0]], color: "red" }] })),
  W(6, "medium", 5, String.raw`A surveyor whose eye is $1.65$ m above the ground stands $48$ m from a building and measures the angle of elevation to its top as $36^\circ$. (a) Find the height of the building. (b) Find the angle of elevation from the same eye height at a point $30$ m from the building. (c) Explain why the angle changed the way it did.`,
    String.raw`(a) $48\tan36^\circ+1.65\approx36.5$ m. (b) $\tan^{-1}\frac{34.87}{30}\approx49.3^\circ$. (c) Closer means the same rise over a shorter run, so the tangent — and the angle — is larger. [2, 2, 1.]`,
    sceneDoc([g(-0.5, 10.8), { seg: [[10, 0], [10, 6]], color: "green", width: 5 }, { seg: [[0, 0], [0, 0.6]], color: "blue", width: 4 }, { seg: [[0, 0.6], [10, 0.6]], color: "gray", dash: true }, { seg: [[0, 0.6], [10, 6]], color: "red" }, { arc: [[10, 0.6], [0, 0.6], [10, 6]], label: "36°", color: "amber" }, { text: "48 m", at: [5, -0.7] }, { text: "1.65 m", at: [-1.2, 0.3], color: "blue", size: 12 }, ns(5, 6.8)], 360)),
  W(6, "hard", 5, String.raw`From point $A$ the angle of elevation to the top of a tower is $52^\circ$. From point $B$, $25$ m farther from the tower in a straight line, it is $34^\circ$. (a) Write an equation for the height $h$ from each triangle. (b) Find the distance from $A$ to the tower. (c) Find the height of the tower.`,
    String.raw`(a) $h=d\tan52^\circ$ and $h=(d+25)\tan34^\circ$. (b) $d=\frac{25\tan34^\circ}{\tan52^\circ-\tan34^\circ}\approx27.9$ m. (c) $h\approx35.6$ m. [2, 2, 1.]`,
    sceneDoc([g(-1, 54), { seg: [[0, 0], [0, 35.6]], color: "green", width: 5 }, { seg: [[27.9, 0], [0, 35.6]], color: "red" }, { seg: [[52.9, 0], [0, 35.6]], color: "blue" }, { arc: [[0, 0], [27.9, 0], [0, 35.6]], label: "52°", color: "red" }, { arc: [[0, 0], [52.9, 0], [0, 35.6]], label: "34°", color: "blue" }, { text: "A", at: [27.9, -3], bold: true }, { text: "B", at: [52.9, -3], bold: true }, { text: "25 m", at: [40.4, -3] }, { text: "h", at: [-2.5, 17.8], bold: true, color: "green" }], 400)),
  W(6, "hard", 5, String.raw`From the top of a $70$ m lighthouse, the angles of depression to two boats in line with the lighthouse (on the same side) are $38^\circ$ and $21^\circ$. (a) Explain why the angle at each boat equals its angle of depression. (b) Find each boat's distance from the base. (c) Find the distance between the boats.`,
    String.raw`(a) The horizontal at the top is parallel to the sea; the lines of sight make equal alternate angles. (b) $\frac{70}{\tan38^\circ}\approx89.6$ m and $\frac{70}{\tan21^\circ}\approx182.4$ m. (c) $\approx92.8$ m. [1, 3, 1.]`,
    sceneDoc([g(-0.5, 12), { seg: [[0, 0], [0, 6]], color: "green", width: 5 }, { seg: [[0, 6], [12, 6]], color: "gray", dash: true }, { seg: [[0, 6], [5.5, 0]], color: "red" }, { seg: [[0, 6], [11, 0]], color: "blue" }, { dot: [5.5, 0], color: "red", r: 5 }, { dot: [11, 0], color: "blue", r: 5 }, { arc: [[12, 6], [0, 6], [5.5, 0]], label: "38°", color: "red", r: 1.6 }, { arc: [[12, 6], [0, 6], [11, 0]], label: "21°", color: "blue", r: 3 }, { text: "70 m", at: [-1.1, 3], bold: true, color: "green" }, ns(6, 6.8)], 380)),
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
